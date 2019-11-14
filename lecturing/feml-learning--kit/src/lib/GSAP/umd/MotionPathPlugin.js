(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.window = global.window || {}));
}(this, function (exports) { 'use strict';

	var _svgPathExp = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
	    _numbersExp = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
	    _scientific = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,
	    _selectorExp = /(^[#\.][a-z]|[a-y][a-z])/i,
	    _DEG2RAD = Math.PI / 180,
	    _RAD2DEG = 180 / Math.PI,
	    _sin = Math.sin,
	    _cos = Math.cos,
	    _abs = Math.abs,
	    _sqrt = Math.sqrt,
	    _atan2 = Math.atan2,
	    _largeNum = 1e8,
	    _isString = function _isString(value) {
	  return typeof value === "string";
	},
	    _isNumber = function _isNumber(value) {
	  return typeof value === "number";
	},
	    _isUndefined = function _isUndefined(value) {
	  return typeof value === "undefined";
	},
	    _temp = {},
	    _temp2 = {},
	    _roundingNum = 1e5,
	    _wrapProgress = function _wrapProgress(progress) {
	  return Math.round((progress + _largeNum) % 1 * _roundingNum) / _roundingNum || (progress < 0 ? 0 : 1);
	},
	    _round = function _round(value) {
	  return ~~(value * _roundingNum + (value < 0 ? -.5 : .5)) / _roundingNum;
	},
	    _splitSegment = function _splitSegment(rawPath, segIndex, i, t) {
	  var segment = rawPath[segIndex],
	      shift = t === 1 ? 6 : subdivideSegment(segment, i, t);

	  if (shift && shift + i + 2 < segment.length) {
	    rawPath.splice(segIndex, 0, segment.slice(0, i + shift + 2));
	    segment.splice(0, i + shift);
	    return 1;
	  }
	},
	    _reverseRawPath = function _reverseRawPath(rawPath, skipOuter) {
	  var i = rawPath.length;

	  if (!skipOuter) {
	    rawPath.reverse();
	  }

	  while (i--) {
	    if (!rawPath[i].reversed) {
	      reverseSegment(rawPath[i]);
	    }
	  }
	},
	    _copyMetaData = function _copyMetaData(source, copy) {
	  copy.totalLength = source.totalLength;

	  if (source.samples) {
	    copy.samples = source.samples.slice(0);
	    copy.lookup = source.lookup.slice(0);
	    copy.minLength = source.minLength;
	    copy.resolution = source.resolution;
	  } else {
	    copy.totalPoints = source.totalPoints;
	  }

	  return copy;
	},
	    _appendOrMerge = function _appendOrMerge(rawPath, segment) {
	  var index = rawPath.length,
	      prevSeg = rawPath[index - 1] || [],
	      l = prevSeg.length;

	  if (segment[0] === prevSeg[l - 2] && segment[1] === prevSeg[l - 1]) {
	    segment = prevSeg.concat(segment.slice(2));
	    index--;
	  }

	  rawPath[index] = segment;
	};

	function getRawPath(value) {
	  value = _isString(value) && _selectorExp.test(value) ? document.querySelector(value) || value : value;
	  var e = value.getAttribute ? value : 0,
	      rawPath;

	  if (e && (value = value.getAttribute("d"))) {
	    if (!e._gsPath) {
	      e._gsPath = {};
	    }

	    rawPath = e._gsPath[value];
	    return rawPath && !rawPath._dirty ? rawPath : e._gsPath[value] = stringToRawPath(value);
	  }

	  return !value ? console.warn("Expecting a <path> element or an SVG path data string") : _isString(value) ? stringToRawPath(value) : _isNumber(value[0]) ? [value] : value;
	}
	function copyRawPath(rawPath) {
	  var a = [],
	      i = 0;

	  for (; i < rawPath.length; i++) {
	    a[i] = _copyMetaData(rawPath[i], rawPath[i].slice(0));
	  }

	  return _copyMetaData(rawPath, a);
	}
	function reverseSegment(segment) {
	  var i = 0,
	      y;
	  segment.reverse();

	  for (; i < segment.length; i += 2) {
	    y = segment[i];
	    segment[i] = segment[i + 1];
	    segment[i + 1] = y;
	  }

	  segment.reversed = !segment.reversed;
	}

	var _createPath = function _createPath(e, ignore) {
	  var path = document.createElementNS("http://www.w3.org/2000/svg", "path"),
	      attr = [].slice.call(e.attributes),
	      i = attr.length,
	      name;
	  ignore = "," + ignore + ",";

	  while (--i > -1) {
	    name = attr[i].nodeName.toLowerCase();

	    if (ignore.indexOf("," + name + ",") < 0) {
	      path.setAttributeNS(null, name, attr[i].nodeValue);
	    }
	  }

	  return path;
	},
	    _typeAttrs = {
	  rect: "rx,ry,x,y,width,height",
	  circle: "r,cx,cy",
	  ellipse: "rx,ry,cx,cy",
	  line: "x1,x2,y1,y2"
	},
	    _attrToObj = function _attrToObj(e, attrs) {
	  var props = attrs ? attrs.split(",") : [],
	      obj = {},
	      i = props.length;

	  while (--i > -1) {
	    obj[props[i]] = +e.getAttribute(props[i]) || 0;
	  }

	  return obj;
	};

	function convertToPath(element, swap) {
	  var type = element.tagName.toLowerCase(),
	      circ = 0.552284749831,
	      data,
	      x,
	      y,
	      r,
	      ry,
	      path,
	      rcirc,
	      rycirc,
	      points,
	      w,
	      h,
	      x2,
	      x3,
	      x4,
	      x5,
	      x6,
	      y2,
	      y3,
	      y4,
	      y5,
	      y6,
	      attr;

	  if (type === "path" || !element.getBBox) {
	    return element;
	  }

	  path = _createPath(element, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points");
	  attr = _attrToObj(element, _typeAttrs[type]);

	  if (type === "rect") {
	    r = attr.rx;
	    ry = attr.ry;
	    x = attr.x;
	    y = attr.y;
	    w = attr.width - r * 2;
	    h = attr.height - ry * 2;

	    if (r || ry) {
	      x2 = x + r * (1 - circ);
	      x3 = x + r;
	      x4 = x3 + w;
	      x5 = x4 + r * circ;
	      x6 = x4 + r;
	      y2 = y + ry * (1 - circ);
	      y3 = y + ry;
	      y4 = y3 + h;
	      y5 = y4 + ry * circ;
	      y6 = y4 + ry;
	      data = "M" + x6 + "," + y3 + " V" + y4 + " C" + [x6, y5, x5, y6, x4, y6, x4 - (x4 - x3) / 3, y6, x3 + (x4 - x3) / 3, y6, x3, y6, x2, y6, x, y5, x, y4, x, y4 - (y4 - y3) / 3, x, y3 + (y4 - y3) / 3, x, y3, x, y2, x2, y, x3, y, x3 + (x4 - x3) / 3, y, x4 - (x4 - x3) / 3, y, x4, y, x5, y, x6, y2, x6, y3].join(",") + "z";
	    } else {
	      data = "M" + (x + w) + "," + y + " v" + h + " h" + -w + " v" + -h + " h" + w + "z";
	    }
	  } else if (type === "circle" || type === "ellipse") {
	    if (type === "circle") {
	      r = ry = attr.r;
	      rycirc = r * circ;
	    } else {
	      r = attr.rx;
	      ry = attr.ry;
	      rycirc = ry * circ;
	    }

	    x = attr.cx;
	    y = attr.cy;
	    rcirc = r * circ;
	    data = "M" + (x + r) + "," + y + " C" + [x + r, y + rycirc, x + rcirc, y + ry, x, y + ry, x - rcirc, y + ry, x - r, y + rycirc, x - r, y, x - r, y - rycirc, x - rcirc, y - ry, x, y - ry, x + rcirc, y - ry, x + r, y - rycirc, x + r, y].join(",") + "z";
	  } else if (type === "line") {
	    data = "M" + attr.x1 + "," + attr.y1 + " L" + attr.x2 + "," + attr.y2;
	  } else if (type === "polyline" || type === "polygon") {
	    points = (element.getAttribute("points") + "").match(_numbersExp) || [];
	    x = points.shift();
	    y = points.shift();
	    data = "M" + x + "," + y + " L" + points.join(",");

	    if (type === "polygon") {
	      data += "," + x + "," + y + "z";
	    }
	  }

	  path.setAttribute("d", rawPathToString(path._gsRawPath = stringToRawPath(data)));

	  if (swap && element.parentNode) {
	    element.parentNode.insertBefore(path, element);
	    element.parentNode.removeChild(element);
	  }

	  return path;
	}

	function getRotationAtBezierT(segment, i, t) {
	  var a = segment[i],
	      b = segment[i + 2],
	      c = segment[i + 4],
	      x;
	  a += (b - a) * t;
	  b += (c - b) * t;
	  a += (b - a) * t;
	  x = b + (c + (segment[i + 6] - c) * t - b) * t - a;
	  a = segment[i + 1];
	  b = segment[i + 3];
	  c = segment[i + 5];
	  a += (b - a) * t;
	  b += (c - b) * t;
	  a += (b - a) * t;
	  return _round(_atan2(b + (c + (segment[i + 7] - c) * t - b) * t - a, x) * _RAD2DEG);
	}

	function sliceRawPath(rawPath, start, end) {
	  if (_isUndefined(end)) {
	    end = 1;
	  }

	  start = start || 0;
	  var reverse = start > end,
	      loops = Math.max(0, ~~(_abs(end - start) - 1e-8));

	  if (reverse) {
	    reverse = end;
	    end = start;
	    start = reverse;
	    reverse = 1;
	    loops -= loops ? 1 : 0;
	  }

	  if (start < 0 || end < 0) {
	    var offset = ~~Math.min(start, end) + 1;
	    start += offset;
	    end += offset;
	  }

	  var path = copyRawPath(rawPath.totalLength ? rawPath : cacheRawPathMeasurements(rawPath)),
	      wrap = end > 1,
	      s = getProgressData(path, start, _temp),
	      e = getProgressData(path, end, _temp2),
	      eSeg = e.segment,
	      sSeg = s.segment,
	      eSegIndex = e.segIndex,
	      sSegIndex = s.segIndex,
	      ei = e.i,
	      si = s.i,
	      sameSegment = sSegIndex === eSegIndex,
	      sameBezier = ei === si && sameSegment,
	      invertedOrder = sameSegment && si > ei || sameBezier && s.t > e.t,
	      sShift,
	      eShift,
	      i,
	      copy,
	      totalSegments,
	      l,
	      j;

	  if (wrap || loops) {
	    if (_splitSegment(path, sSegIndex, si, s.t)) {
	      sShift = 1;
	      sSegIndex++;

	      if (sameBezier) {
	        if (invertedOrder) {
	          e.t /= s.t;
	        } else {
	          e.t = (e.t - s.t) / (1 - s.t);
	          eSegIndex++;
	          ei = 0;
	        }
	      } else if (sSegIndex <= eSegIndex + 1 && !invertedOrder) {
	        eSegIndex++;

	        if (sameSegment) {
	          ei -= si;
	        }
	      }
	    }

	    if (!e.t) {
	      eSegIndex--;

	      if (reverse) {
	        sSegIndex--;
	      }
	    } else if (_splitSegment(path, eSegIndex, ei, e.t)) {
	      if (invertedOrder && sShift) {
	        sSegIndex++;
	      }

	      if (reverse) {
	        eSegIndex++;
	      }
	    }

	    copy = [];
	    totalSegments = path.length;
	    l = 1 + totalSegments * loops;
	    j = sSegIndex;

	    if (reverse) {
	      eSegIndex = (eSegIndex || totalSegments) - 1;
	      l += (totalSegments - eSegIndex + sSegIndex) % totalSegments;

	      for (i = 0; i < l; i++) {
	        _appendOrMerge(copy, path[j]);

	        j = (j || totalSegments) - 1;
	      }
	    } else {
	      l += (totalSegments - sSegIndex + eSegIndex) % totalSegments;

	      for (i = 0; i < l; i++) {
	        _appendOrMerge(copy, path[j++ % totalSegments]);
	      }
	    }

	    path = copy;
	  } else {
	    eShift = e.t === 1 ? 6 : subdivideSegment(eSeg, ei, e.t);

	    if (start !== end) {
	      sShift = subdivideSegment(sSeg, si, sameBezier ? s.t / e.t : s.t);

	      if (sameSegment) {
	        eShift += sShift;
	      }

	      eSeg.splice(ei + eShift + 2);

	      if (sShift) {
	        sSeg.splice(0, si + sShift);
	      }

	      i = path.length;

	      while (i--) {
	        if (i < sSegIndex || i > eSegIndex) {
	          path.splice(i, 1);
	        }
	      }
	    } else {
	      eSeg.angle = getRotationAtBezierT(eSeg, ei + eShift, 0);
	      ei += eShift;
	      s = eSeg[ei];
	      e = eSeg[ei + 1];
	      eSeg.length = eSeg.totalLength = 0;
	      eSeg.totalPoints = path.totalPoints = 8;
	      eSeg.push(s, e, s, e, s, e, s, e);
	    }
	  }

	  if (reverse) {
	    _reverseRawPath(path, wrap || loops);
	  }

	  path.totalLength = 0;
	  return path;
	}

	function measureSegment(segment, startIndex, bezierQty) {
	  startIndex = startIndex || 0;

	  if (!segment.samples) {
	    segment.samples = [];
	    segment.lookup = [];
	  }

	  var resolution = ~~segment.resolution || 12,
	      inc = 1 / resolution,
	      endIndex = bezierQty ? startIndex + bezierQty * 6 + 1 : segment.length,
	      x1 = segment[startIndex],
	      y1 = segment[startIndex + 1],
	      samplesIndex = startIndex ? startIndex / 6 * resolution : 0,
	      samples = segment.samples,
	      lookup = segment.lookup,
	      min = (startIndex ? segment.minLength : _largeNum) || _largeNum,
	      prevLength = samples[samplesIndex + bezierQty * resolution - 1],
	      length = startIndex ? samples[samplesIndex - 1] : 0,
	      i,
	      j,
	      x4,
	      x3,
	      x2,
	      xd,
	      xd1,
	      y4,
	      y3,
	      y2,
	      yd,
	      yd1,
	      inv,
	      t,
	      lengthIndex,
	      l,
	      segLength;
	  samples.length = lookup.length = 0;

	  for (j = startIndex + 2; j < endIndex; j += 6) {
	    x4 = segment[j + 4] - x1;
	    x3 = segment[j + 2] - x1;
	    x2 = segment[j] - x1;
	    y4 = segment[j + 5] - y1;
	    y3 = segment[j + 3] - y1;
	    y2 = segment[j + 1] - y1;
	    xd = xd1 = yd = yd1 = 0;

	    for (i = 1; i <= resolution; i++) {
	      t = inc * i;
	      inv = 1 - t;
	      xd = xd1 - (xd1 = (t * t * x4 + 3 * inv * (t * x3 + inv * x2)) * t);
	      yd = yd1 - (yd1 = (t * t * y4 + 3 * inv * (t * y3 + inv * y2)) * t);
	      l = _sqrt(yd * yd + xd * xd);

	      if (l < min) {
	        min = l;
	      }

	      length += l;
	      samples[samplesIndex++] = length;
	    }

	    x1 += x4;
	    y1 += y4;
	  }

	  if (prevLength) {
	    prevLength -= length;

	    for (; samplesIndex < samples.length; samplesIndex++) {
	      samples[samplesIndex] += prevLength;
	    }
	  }

	  if (samples.length && min) {
	    segment.totalLength = segLength = samples[samples.length - 1] || 0;
	    segment.minLength = min;
	    l = lengthIndex = 0;

	    for (i = 0; i < segLength; i += min) {
	      lookup[l++] = samples[lengthIndex] < i ? ++lengthIndex : lengthIndex;
	    }
	  } else {
	    segment.totalLength = samples[0] = 0;
	  }

	  return startIndex ? length - samples[startIndex / 2 - 1] : length;
	}

	function cacheRawPathMeasurements(rawPath, resolution) {
	  var pathLength, points, i;

	  for (i = pathLength = points = 0; i < rawPath.length; i++) {
	    rawPath[i].resolution = ~~resolution || 12;
	    points += rawPath[i].length;
	    pathLength += measureSegment(rawPath[i]);
	  }

	  rawPath.totalPoints = points;
	  rawPath.totalLength = pathLength;
	  return rawPath;
	}
	function subdivideSegment(segment, i, t) {
	  if (t <= 0 || t >= 1) {
	    return 0;
	  }

	  var ax = segment[i],
	      ay = segment[i + 1],
	      cp1x = segment[i + 2],
	      cp1y = segment[i + 3],
	      cp2x = segment[i + 4],
	      cp2y = segment[i + 5],
	      bx = segment[i + 6],
	      by = segment[i + 7],
	      x1a = ax + (cp1x - ax) * t,
	      x2 = cp1x + (cp2x - cp1x) * t,
	      y1a = ay + (cp1y - ay) * t,
	      y2 = cp1y + (cp2y - cp1y) * t,
	      x1 = x1a + (x2 - x1a) * t,
	      y1 = y1a + (y2 - y1a) * t,
	      x2a = cp2x + (bx - cp2x) * t,
	      y2a = cp2y + (by - cp2y) * t;
	  x2 += (x2a - x2) * t;
	  y2 += (y2a - y2) * t;
	  segment.splice(i + 2, 4, _round(x1a), _round(y1a), _round(x1), _round(y1), _round(x1 + (x2 - x1) * t), _round(y1 + (y2 - y1) * t), _round(x2), _round(y2), _round(x2a), _round(y2a));

	  if (segment.samples) {
	    segment.samples.splice(i / 6 * segment.resolution | 0, 0, 0, 0, 0, 0, 0, 0);
	  }

	  return 6;
	}

	function getProgressData(rawPath, progress, decoratee) {
	  decoratee = decoratee || {};

	  if (!rawPath.totalLength) {
	    cacheRawPathMeasurements(rawPath);
	  }

	  if (progress < 0 || progress > 1) {
	    progress = _wrapProgress(progress);
	  }

	  var segIndex = 0,
	      segment = rawPath[0],
	      samples,
	      resolution,
	      length,
	      min,
	      max,
	      i;

	  if (rawPath.length > 1) {
	    length = rawPath.totalLength * progress;
	    max = i = 0;

	    while ((max += rawPath[i++].totalLength) < length) {
	      segIndex = i;
	    }

	    segment = rawPath[segIndex];
	    min = max - segment.totalLength;
	    progress = (length - min) / (max - min) || 0;
	  }

	  samples = segment.samples;
	  resolution = segment.resolution;
	  length = segment.totalLength * progress;
	  i = segment.lookup[~~(length / segment.minLength)] || 0;
	  min = i ? samples[i - 1] : 0;
	  max = samples[i];

	  if (max < length) {
	    min = max;
	    max = samples[++i];
	  }

	  decoratee.path = rawPath;
	  decoratee.segment = segment;
	  decoratee.segIndex = segIndex;
	  decoratee.i = ~~(i / resolution) * 6;
	  decoratee.t = 1 / resolution * ((length - min) / (max - min) + i % resolution);
	  return decoratee;
	}

	function getPositionOnPath(rawPath, progress, includeAngle, point) {
	  var segment = rawPath[0],
	      result = point || {},
	      samples,
	      resolution,
	      length,
	      min,
	      max,
	      i,
	      t,
	      a,
	      inv;

	  if (progress < 0 || progress > 1) {
	    progress = _wrapProgress(progress);
	  }

	  if (rawPath.length > 1) {
	    length = rawPath.totalLength * progress;
	    max = i = 0;

	    while ((max += rawPath[i++].totalLength) < length) {
	      segment = rawPath[i];
	    }

	    min = max - segment.totalLength;
	    progress = (length - min) / (max - min) || 0;
	  }

	  samples = segment.samples;
	  resolution = segment.resolution;
	  length = segment.totalLength * progress;
	  i = segment.lookup[~~(length / segment.minLength)] || 0;
	  min = i ? samples[i - 1] : 0;
	  max = samples[i];

	  if (max < length) {
	    min = max;
	    max = samples[++i];
	  }

	  t = 1 / resolution * ((length - min) / (max - min) + i % resolution) || 0;
	  inv = 1 - t;
	  i = ~~(i / resolution) * 6;
	  a = segment[i];
	  result.x = _round((t * t * (segment[i + 6] - a) + 3 * inv * (t * (segment[i + 4] - a) + inv * (segment[i + 2] - a))) * t + a);
	  result.y = _round((t * t * (segment[i + 7] - (a = segment[i + 1])) + 3 * inv * (t * (segment[i + 5] - a) + inv * (segment[i + 3] - a))) * t + a);

	  if (includeAngle) {
	    result.angle = segment.totalLength ? getRotationAtBezierT(segment, i, t >= 1 ? 1 - 1e-9 : t ? t : 1e-9) : segment.angle || 0;
	  }

	  return result;
	}
	function transformRawPath(rawPath, a, b, c, d, tx, ty) {
	  var j = rawPath.length,
	      segment,
	      l,
	      i,
	      x,
	      y;

	  while (--j > -1) {
	    segment = rawPath[j];
	    l = segment.length;

	    for (i = 0; i < l; i += 2) {
	      x = segment[i];
	      y = segment[i + 1];
	      segment[i] = x * a + y * c + tx;
	      segment[i + 1] = x * b + y * d + ty;
	    }
	  }

	  rawPath._dirty = 1;
	  return rawPath;
	}

	function arcToSegment(lastX, lastY, rx, ry, angle, largeArcFlag, sweepFlag, x, y) {
	  if (lastX === x && lastY === y) {
	    return;
	  }

	  rx = _abs(rx);
	  ry = _abs(ry);

	  var angleRad = angle % 360 * _DEG2RAD,
	      cosAngle = _cos(angleRad),
	      sinAngle = _sin(angleRad),
	      PI = Math.PI,
	      TWOPI = PI * 2,
	      dx2 = (lastX - x) / 2,
	      dy2 = (lastY - y) / 2,
	      x1 = cosAngle * dx2 + sinAngle * dy2,
	      y1 = -sinAngle * dx2 + cosAngle * dy2,
	      x1_sq = x1 * x1,
	      y1_sq = y1 * y1,
	      radiiCheck = x1_sq / (rx * rx) + y1_sq / (ry * ry);

	  if (radiiCheck > 1) {
	    rx = _sqrt(radiiCheck) * rx;
	    ry = _sqrt(radiiCheck) * ry;
	  }

	  var rx_sq = rx * rx,
	      ry_sq = ry * ry,
	      sq = (rx_sq * ry_sq - rx_sq * y1_sq - ry_sq * x1_sq) / (rx_sq * y1_sq + ry_sq * x1_sq);

	  if (sq < 0) {
	    sq = 0;
	  }

	  var coef = (largeArcFlag === sweepFlag ? -1 : 1) * _sqrt(sq),
	      cx1 = coef * (rx * y1 / ry),
	      cy1 = coef * -(ry * x1 / rx),
	      sx2 = (lastX + x) / 2,
	      sy2 = (lastY + y) / 2,
	      cx = sx2 + (cosAngle * cx1 - sinAngle * cy1),
	      cy = sy2 + (sinAngle * cx1 + cosAngle * cy1),
	      ux = (x1 - cx1) / rx,
	      uy = (y1 - cy1) / ry,
	      vx = (-x1 - cx1) / rx,
	      vy = (-y1 - cy1) / ry,
	      temp = ux * ux + uy * uy,
	      angleStart = (uy < 0 ? -1 : 1) * Math.acos(ux / _sqrt(temp)),
	      angleExtent = (ux * vy - uy * vx < 0 ? -1 : 1) * Math.acos((ux * vx + uy * vy) / _sqrt(temp * (vx * vx + vy * vy)));

	  if (isNaN(angleExtent)) {
	    angleExtent = PI;
	  }

	  if (!sweepFlag && angleExtent > 0) {
	    angleExtent -= TWOPI;
	  } else if (sweepFlag && angleExtent < 0) {
	    angleExtent += TWOPI;
	  }

	  angleStart %= TWOPI;
	  angleExtent %= TWOPI;

	  var segments = Math.ceil(_abs(angleExtent) / (TWOPI / 4)),
	      rawPath = [],
	      angleIncrement = angleExtent / segments,
	      controlLength = 4 / 3 * _sin(angleIncrement / 2) / (1 + _cos(angleIncrement / 2)),
	      ma = cosAngle * rx,
	      mb = sinAngle * rx,
	      mc = sinAngle * -ry,
	      md = cosAngle * ry,
	      i;

	  for (i = 0; i < segments; i++) {
	    angle = angleStart + i * angleIncrement;
	    x1 = _cos(angle);
	    y1 = _sin(angle);
	    ux = _cos(angle += angleIncrement);
	    uy = _sin(angle);
	    rawPath.push(x1 - controlLength * y1, y1 + controlLength * x1, ux + controlLength * uy, uy - controlLength * ux, ux, uy);
	  }

	  for (i = 0; i < rawPath.length; i += 2) {
	    x1 = rawPath[i];
	    y1 = rawPath[i + 1];
	    rawPath[i] = x1 * ma + y1 * mc + cx;
	    rawPath[i + 1] = x1 * mb + y1 * md + cy;
	  }

	  rawPath[i - 2] = x;
	  rawPath[i - 1] = y;
	  return rawPath;
	}

	function stringToRawPath(d) {
	  var a = (d + "").replace(_scientific, function (m) {
	    var n = +m;
	    return n < 0.0001 && n > -0.0001 ? 0 : n;
	  }).match(_svgPathExp) || [],
	      path = [],
	      relativeX = 0,
	      relativeY = 0,
	      twoThirds = 2 / 3,
	      elements = a.length,
	      points = 0,
	      errorMessage = "ERROR: malformed path: " + d,
	      i,
	      j,
	      x,
	      y,
	      command,
	      isRelative,
	      segment,
	      startX,
	      startY,
	      difX,
	      difY,
	      beziers,
	      prevCommand,
	      line = function line(sx, sy, ex, ey) {
	    difX = (ex - sx) / 3;
	    difY = (ey - sy) / 3;
	    segment.push(sx + difX, sy + difY, ex - difX, ey - difY, ex, ey);
	  };

	  if (!d || !isNaN(a[0]) || isNaN(a[1])) {
	    console.log(errorMessage);
	    return path;
	  }

	  for (i = 0; i < elements; i++) {
	    prevCommand = command;

	    if (isNaN(a[i])) {
	      command = a[i].toUpperCase();
	      isRelative = command !== a[i];
	    } else {
	      i--;
	    }

	    x = +a[i + 1];
	    y = +a[i + 2];

	    if (isRelative) {
	      x += relativeX;
	      y += relativeY;
	    }

	    if (!i) {
	      startX = x;
	      startY = y;
	    }

	    if (command === "M") {
	      if (segment) {
	        if (segment.length < 8) {
	          path.length -= 1;
	        } else {
	          points += segment.length;
	        }
	      }

	      relativeX = startX = x;
	      relativeY = startY = y;
	      segment = [x, y];
	      path.push(segment);
	      i += 2;
	      command = "L";
	    } else if (command === "C") {
	      if (!segment) {
	        segment = [0, 0];
	      }

	      if (!isRelative) {
	        relativeX = relativeY = 0;
	      }

	      segment.push(x, y, relativeX + a[i + 3] * 1, relativeY + a[i + 4] * 1, relativeX += a[i + 5] * 1, relativeY += a[i + 6] * 1);
	      i += 6;
	    } else if (command === "S") {
	      difX = relativeX;
	      difY = relativeY;

	      if (prevCommand === "C" || prevCommand === "S") {
	        difX += relativeX - segment[segment.length - 4];
	        difY += relativeY - segment[segment.length - 3];
	      }

	      if (!isRelative) {
	        relativeX = relativeY = 0;
	      }

	      segment.push(difX, difY, x, y, relativeX += a[i + 3] * 1, relativeY += a[i + 4] * 1);
	      i += 4;
	    } else if (command === "Q") {
	      difX = relativeX + (x - relativeX) * twoThirds;
	      difY = relativeY + (y - relativeY) * twoThirds;

	      if (!isRelative) {
	        relativeX = relativeY = 0;
	      }

	      relativeX += a[i + 3] * 1;
	      relativeY += a[i + 4] * 1;
	      segment.push(difX, difY, relativeX + (x - relativeX) * twoThirds, relativeY + (y - relativeY) * twoThirds, relativeX, relativeY);
	      i += 4;
	    } else if (command === "T") {
	      difX = relativeX - segment[segment.length - 4];
	      difY = relativeY - segment[segment.length - 3];
	      segment.push(relativeX + difX, relativeY + difY, x + (relativeX + difX * 1.5 - x) * twoThirds, y + (relativeY + difY * 1.5 - y) * twoThirds, relativeX = x, relativeY = y);
	      i += 2;
	    } else if (command === "H") {
	      line(relativeX, relativeY, relativeX = x, relativeY);
	      i += 1;
	    } else if (command === "V") {
	      line(relativeX, relativeY, relativeX, relativeY = x + (isRelative ? relativeY - relativeX : 0));
	      i += 1;
	    } else if (command === "L" || command === "Z") {
	      if (command === "Z") {
	        x = startX;
	        y = startY;
	        segment.closed = true;
	      }

	      if (command === "L" || _abs(relativeX - x) > 0.5 || _abs(relativeY - y) > 0.5) {
	        line(relativeX, relativeY, x, y);

	        if (command === "L") {
	          i += 2;
	        }
	      }

	      relativeX = x;
	      relativeY = y;
	    } else if (command === "A") {
	      beziers = arcToSegment(relativeX, relativeY, +a[i + 1], +a[i + 2], +a[i + 3], +a[i + 4], +a[i + 5], (isRelative ? relativeX : 0) + a[i + 6] * 1, (isRelative ? relativeY : 0) + a[i + 7] * 1);

	      if (beziers) {
	        for (j = 0; j < beziers.length; j++) {
	          segment.push(beziers[j]);
	        }
	      }

	      relativeX = segment[segment.length - 2];
	      relativeY = segment[segment.length - 1];
	      i += 7;
	    } else {
	      console.log(errorMessage);
	    }
	  }

	  i = segment.length;

	  if (i < 6) {
	    path.pop();
	    i = 0;
	  } else if (segment[0] === segment[i - 2] && segment[1] === segment[i - 1]) {
	    segment.closed = true;
	  }

	  path.totalPoints = points + i;
	  return path;
	}
	function flatPointsToSegment(points, curviness) {
	  if (curviness === void 0) {
	    curviness = 1;
	  }

	  var x = points[0],
	      y = 0,
	      segment = [x, y],
	      i = 2;

	  for (; i < points.length; i += 2) {
	    segment.push(x, y, points[i], y = (points[i] - x) * curviness / 2, x = points[i], -y);
	  }

	  return segment;
	}
	function pointsToSegment(points, curviness, cornerThreshold) {
	  var l = points.length - 2,
	      x = +points[0],
	      y = +points[1],
	      nextX = +points[2],
	      nextY = +points[3],
	      segment = [x, y, x, y],
	      dx2 = nextX - x,
	      dy2 = nextY - y,
	      prevX,
	      prevY,
	      angle,
	      slope,
	      i,
	      dx1,
	      dx3,
	      dy1,
	      dy3,
	      d1,
	      d2,
	      a,
	      b,
	      c;

	  if (isNaN(cornerThreshold)) {
	    cornerThreshold = Math.PI / 10;
	  }

	  curviness = curviness || curviness === 0 ? +curviness : 1;

	  for (i = 2; i < l; i += 2) {
	    prevX = x;
	    prevY = y;
	    x = nextX;
	    y = nextY;
	    nextX = +points[i + 2];
	    nextY = +points[i + 3];
	    dx1 = dx2;
	    dy1 = dy2;
	    dx2 = nextX - x;
	    dy2 = nextY - y;
	    dx3 = nextX - prevX;
	    dy3 = nextY - prevY;
	    a = dx1 * dx1 + dy1 * dy1;
	    b = dx2 * dx2 + dy2 * dy2;
	    c = dx3 * dx3 + dy3 * dy3;
	    angle = Math.acos((a + b - c) / _sqrt(4 * a * b));
	    d2 = angle / Math.PI * curviness;
	    d1 = _sqrt(a) * d2;
	    d2 *= _sqrt(b);

	    if (x !== prevX || y !== prevY) {
	      if (angle > cornerThreshold) {
	        slope = _atan2(dy3, dx3);
	        segment.push(_round(x - _cos(slope) * d1), _round(y - _sin(slope) * d1), _round(x), _round(y), _round(x + _cos(slope) * d2), _round(y + _sin(slope) * d2));
	      } else {
	        slope = _atan2(dy1, dx1);
	        segment.push(_round(x - _cos(slope) * d1), _round(y - _sin(slope) * d1));
	        slope = _atan2(dy2, dx2);
	        segment.push(_round(x), _round(y), _round(x + _cos(slope) * d2), _round(y + _sin(slope) * d2));
	      }
	    }
	  }

	  segment.push(_round(nextX), _round(nextY), _round(nextX), _round(nextY));
	  return segment;
	}
	function rawPathToString(rawPath) {
	  if (_isNumber(rawPath[0])) {
	    rawPath = [rawPath];
	  }

	  var result = "",
	      l = rawPath.length,
	      sl,
	      s,
	      i,
	      segment;

	  for (s = 0; s < l; s++) {
	    segment = rawPath[s];
	    result += "M" + _round(segment[0]) + "," + _round(segment[1]) + " C";
	    sl = segment.length;

	    for (i = 2; i < sl; i++) {
	      result += _round(segment[i++]) + "," + _round(segment[i++]) + " " + _round(segment[i++]) + "," + _round(segment[i++]) + " " + _round(segment[i++]) + "," + _round(segment[i]) + " ";
	    }

	    if (segment.closed) {
	      result += "z";
	    }
	  }

	  return result;
	}

	var _doc,
	    _win,
	    _docElement,
	    _body,
	    _divContainer,
	    _svgContainer,
	    _identityMatrix,
	    _transformProp = "transform",
	    _transformOriginProp = _transformProp + "Origin",
	    _setDoc = function _setDoc(element) {
	  var doc = element.ownerDocument || element;

	  if (!(_transformProp in element.style) && "msTransform" in element.style) {
	    _transformProp = "msTransform";
	    _transformOriginProp = _transformProp + "Origin";
	  }

	  while (doc.parentNode && (doc = doc.parentNode)) {}

	  _win = window;
	  _identityMatrix = new Matrix2D();

	  if (doc) {
	    _doc = doc;
	    _docElement = doc.documentElement;
	    _body = doc.body;
	  }

	  return doc;
	},
	    _svgTemps = [],
	    _divTemps = [],
	    _getDocScrollTop = function _getDocScrollTop() {
	  return _win.pageYOffset || _doc.scrollTop || _docElement.scrollTop || _body.scrollTop || 0;
	},
	    _getDocScrollLeft = function _getDocScrollLeft() {
	  return _win.pageXOffset || _doc.scrollLeft || _docElement.scrollLeft || _body.scrollLeft || 0;
	},
	    _svgOwner = function _svgOwner(element) {
	  return element.ownerSVGElement || ((element.tagName + "").toLowerCase() === "svg" ? element : null);
	},
	    _createSibling = function _createSibling(element, i) {
	  if (element.parentNode && (_doc || _setDoc(element))) {
	    var svg = _svgOwner(element),
	        ns = svg ? svg.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
	        type = svg ? i ? "rect" : "g" : "div",
	        x = i !== 2 ? 0 : 100,
	        y = i === 3 ? 100 : 0,
	        css = "position:absolute;display:block;",
	        e = _doc.createElementNS ? _doc.createElementNS(ns.replace(/^https/, "http"), type) : _doc.createElement(type);

	    if (i) {
	      if (!svg) {
	        if (!_divContainer) {
	          _divContainer = _createSibling(element);
	          _divContainer.style.cssText = css;
	        }

	        e.style.cssText = css + "width:1px;height:1px;top:" + y + "px;left:" + x + "px";

	        _divContainer.appendChild(e);
	      } else {
	        if (!_svgContainer) {
	          _svgContainer = _createSibling(element);
	        }

	        e.setAttribute("width", 1);
	        e.setAttribute("height", 1);
	        e.setAttribute("transform", "translate(" + x + "," + y + ")");

	        _svgContainer.appendChild(e);
	      }
	    }

	    return e;
	  }

	  throw "Need document and parent.";
	},
	    _placeSiblings = function _placeSiblings(element) {
	  var svg = _svgOwner(element),
	      isRootSVG = element === svg,
	      siblings = svg ? _svgTemps : _divTemps,
	      container,
	      m,
	      b,
	      x,
	      y;

	  if (element === _win) {
	    return element;
	  }

	  if (!siblings.length) {
	    siblings.push(_createSibling(element, 1), _createSibling(element, 2), _createSibling(element, 3));
	  }

	  container = svg ? _svgContainer : _divContainer;

	  if (svg) {
	    b = isRootSVG ? {
	      x: 0,
	      y: 0
	    } : element.getBBox();
	    m = element.transform.baseVal;

	    if (m.length) {
	      m = m.consolidate().matrix;
	      x = m.a * b.x + m.c * b.y;
	      y = m.b * b.x + m.d * b.y;
	    } else {
	      m = _identityMatrix;

	      if (element.tagName.toLowerCase() === "g") {
	        x = y = 0;
	      } else {
	        x = b.x;
	        y = b.y;
	      }
	    }

	    container.setAttribute("transform", "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + (m.e + x) + "," + (m.f + y) + ")");
	    (isRootSVG ? svg : element.parentNode).appendChild(container);
	  } else {
	    container.style.top = element.offsetTop + "px";
	    container.style.left = element.offsetLeft + "px";
	    m = _win.getComputedStyle(element);
	    container.style[_transformProp] = m[_transformProp];
	    container.style[_transformOriginProp] = m[_transformOriginProp];
	    element.parentNode.appendChild(container);
	  }

	  return container;
	},
	    _setMatrix = function _setMatrix(m, a, b, c, d, e, f) {
	  m.a = a;
	  m.b = b;
	  m.c = c;
	  m.d = d;
	  m.e = e;
	  m.f = f;
	  return m;
	};

	var Matrix2D = function () {
	  function Matrix2D(a, b, c, d, e, f) {
	    if (a === void 0) {
	      a = 1;
	    }

	    if (b === void 0) {
	      b = 0;
	    }

	    if (c === void 0) {
	      c = 0;
	    }

	    if (d === void 0) {
	      d = 1;
	    }

	    if (e === void 0) {
	      e = 0;
	    }

	    if (f === void 0) {
	      f = 0;
	    }

	    _setMatrix(this, a, b, c, d, e, f);
	  }

	  var _proto = Matrix2D.prototype;

	  _proto.inverse = function inverse() {
	    var a = this.a,
	        b = this.b,
	        c = this.c,
	        d = this.d,
	        e = this.e,
	        f = this.f,
	        determinant = a * d - b * c;
	    return _setMatrix(this, d / determinant, -b / determinant, -c / determinant, a / determinant, (c * f - d * e) / determinant, -(a * f - b * e) / determinant);
	  };

	  _proto.multiply = function multiply(matrix) {
	    var a = this.a,
	        b = this.b,
	        c = this.c,
	        d = this.d,
	        e = this.e,
	        f = this.f,
	        a2 = matrix.a,
	        b2 = matrix.c,
	        c2 = matrix.b,
	        d2 = matrix.d,
	        e2 = matrix.e,
	        f2 = matrix.f;
	    return _setMatrix(this, a2 * a + c2 * c, a2 * b + c2 * d, b2 * a + d2 * c, b2 * b + d2 * d, e + e2 * a + f2 * c, f + e2 * b + f2 * d);
	  };

	  _proto.equals = function equals(matrix) {
	    var a = this.a,
	        b = this.b,
	        c = this.c,
	        d = this.d,
	        e = this.e,
	        f = this.f;
	    return a === matrix.a && b === matrix.b && c === matrix.c && d === matrix.d && e === matrix.e && f === matrix.f;
	  };

	  _proto.apply = function apply(point, decoratee) {
	    if (decoratee === void 0) {
	      decoratee = {};
	    }

	    var x = point.x,
	        y = point.y,
	        a = this.a,
	        b = this.b,
	        c = this.c,
	        d = this.d,
	        e = this.e,
	        f = this.f;
	    decoratee.x = x * a + y * c + e;
	    decoratee.y = x * b + y * d + f;
	    return decoratee;
	  };

	  return Matrix2D;
	}();
	function getGlobalMatrix(element, inverse) {
	  if (!element.parentNode) {
	    return new Matrix2D();
	  }

	  var svg = _svgOwner(element),
	      temps = svg ? _svgTemps : _divTemps,
	      container = _placeSiblings(element),
	      b1 = temps[0].getBoundingClientRect(),
	      b2 = temps[1].getBoundingClientRect(),
	      b3 = temps[2].getBoundingClientRect(),
	      parent = container.parentNode,
	      m = new Matrix2D((b2.left - b1.left) / 100, (b2.top - b1.top) / 100, (b3.left - b1.left) / 100, (b3.top - b1.top) / 100, b1.left + _getDocScrollLeft(), b1.top + _getDocScrollTop());

	  parent.removeChild(container);
	  return inverse ? m.inverse() : m;
	}

	/*!
	 * MotionPathPlugin 3.0.0
	 * https://greensock.com
	 *
	 * @license Copyright 2008-2019, GreenSock. All rights reserved.
	 * Subject to the terms at https://greensock.com/standard-license or for
	 * Club GreenSock members, the agreement issued with that membership.
	 * @author: Jack Doyle, jack@greensock.com
	*/

	var _xProps = ["x", "translateX", "left", "marginLeft"],
	    _yProps = ["y", "translateY", "top", "marginTop"],
	    _DEG2RAD$1 = Math.PI / 180,
	    gsap,
	    PropTween,
	    _getUnit,
	    _toArray,
	    _getGSAP = function _getGSAP() {
	  return gsap || typeof window !== "undefined" && (gsap = window.gsap) && gsap.registerPlugin && gsap;
	},
	    _populateSegmentFromArray = function _populateSegmentFromArray(segment, values, property, mode) {
	  var l = values.length,
	      si = mode,
	      i = 0;

	  for (; i < l; i++) {
	    segment[si] = parseFloat(values[i][property]);
	    si += 2;
	  }

	  return segment;
	},
	    _getPropNum = function _getPropNum(target, prop, unit) {
	  return parseFloat(target._gsap.get(target, prop, unit || "px")) || 0;
	},
	    _relativize = function _relativize(segment) {
	  var x = segment[0],
	      y = segment[1],
	      i;

	  for (i = 2; i < segment.length; i += 2) {
	    x = segment[i] += x;
	    y = segment[i + 1] += y;
	  }
	},
	    _segmentToRawPath = function _segmentToRawPath(plugin, segment, target, x, y, slicer, vars) {
	  if (vars.type === "cubic") {
	    segment = [segment];
	  } else {
	    segment.unshift(_getPropNum(target, x, vars.unitX), y ? _getPropNum(target, y, vars.unitY) : 0);

	    if (vars.relative) {
	      _relativize(segment);
	    }

	    var pointFunc = y ? pointsToSegment : flatPointsToSegment;
	    segment = [pointFunc(segment, vars.curviness)];
	  }

	  segment = slicer(_align(segment, target, vars));

	  _addDimensionalPropTween(plugin, target, x, segment, "x", vars.unitX);

	  if (y) {
	    _addDimensionalPropTween(plugin, target, y, segment, "y", vars.unitY);
	  }

	  return cacheRawPathMeasurements(segment, vars.resolution || (vars.curviness === 0 ? 20 : 12));
	},
	    _emptyFunc = function _emptyFunc(v) {
	  return v;
	},
	    _align = function _align(rawPath, target, _ref) {
	  var align = _ref.align,
	      matrix = _ref.matrix,
	      offsetX = _ref.offsetX,
	      offsetY = _ref.offsetY;
	  var x, y, tween, targetMatrix, alignTarget, alignPath, alignMatrix, invertedMatrix, tx, ty;

	  if (!rawPath || !rawPath.length) {
	    return getRawPath("M0,0L0,0");
	  }

	  if (align) {
	    if (align === "self" || (alignTarget = _toArray(align)[0] || target) === target) {
	      x = _getPropNum(target, "x") - rawPath[0][0];
	      y = _getPropNum(target, "y") - rawPath[0][1];
	      transformRawPath(rawPath, 1, 0, 0, 1, x, y);
	    } else {
	      tween = gsap.to(target, {
	        xPercent: 0,
	        yPercent: 0,
	        x: 0,
	        y: 0
	      }).progress(1);
	      targetMatrix = getGlobalMatrix(target);
	      tween.render(-1).kill();

	      if (alignTarget.getTotalLength && alignTarget.tagName.toLowerCase() === "path") {
	        alignPath = getRawPath(alignTarget);
	        alignMatrix = getGlobalMatrix(alignTarget.parentNode);
	        x = alignPath[0][0];
	        y = alignPath[0][1];
	      } else {
	        alignMatrix = getGlobalMatrix(alignTarget);
	        x = 0;
	        y = 0;
	      }

	      tx = alignMatrix.a * x + alignMatrix.c * y + alignMatrix.e - targetMatrix.e;
	      ty = alignMatrix.b * x + alignMatrix.d * y + alignMatrix.f - targetMatrix.f;
	      invertedMatrix = getGlobalMatrix(target.parentNode, true);
	      x = invertedMatrix.a * tx + invertedMatrix.c * ty;
	      y = invertedMatrix.b * tx + invertedMatrix.d * ty;
	      tx = rawPath[0][0];
	      ty = rawPath[0][1];
	      alignMatrix.multiply(invertedMatrix);
	      x -= alignMatrix.a * tx + alignMatrix.c * ty;
	      y -= alignMatrix.b * tx + alignMatrix.d * ty;
	      transformRawPath(rawPath, alignMatrix.a, alignMatrix.b, alignMatrix.c, alignMatrix.d, x, y);
	    }
	  }

	  if (matrix) {
	    transformRawPath(rawPath, matrix.a, matrix.b, matrix.c, matrix.d, matrix.e, matrix.f);
	  } else if (offsetX || offsetY) {
	    transformRawPath(rawPath, 1, 0, 0, 1, offsetX || 0, offsetY || 0);
	  }

	  return rawPath;
	},
	    _addDimensionalPropTween = function _addDimensionalPropTween(plugin, target, property, rawPath, pathProperty, forceUnit) {
	  var cache = target._gsap,
	      pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _emptyFunc, 0, cache.set(target, property, plugin));
	  pt.u = _getUnit(cache.get(target, property, forceUnit)) || 0;
	  pt.path = rawPath;
	  pt.pp = pathProperty;

	  plugin._props.push(property);
	},
	    _sliceModifier = function _sliceModifier(start, end) {
	  return function (rawPath) {
	    return start || end !== 1 ? sliceRawPath(rawPath, start, end) : rawPath;
	  };
	};

	var MotionPathPlugin = {
	  version: "3.0.0",
	  name: "motionPath",
	  register: function register(core, Plugin, propTween) {
	    gsap = core;
	    _getUnit = gsap.utils.getUnit;
	    _toArray = gsap.utils.toArray;
	    PropTween = propTween;
	  },
	  init: function init(target, vars, tween, index, targets) {
	    if (!gsap) {
	      console.warn("Please gsap.registerPlugin(MotionPathPlugin)");
	      return false;
	    }

	    if (!(typeof vars === "object" && !vars.style) || !vars.path) {
	      vars = {
	        path: vars
	      };
	    }

	    var rawPaths = [],
	        path = vars.path,
	        firstObj = path[0],
	        autoRotate = vars.autoRotate,
	        slicer = _sliceModifier(vars.start, "end" in vars ? vars.end : 1),
	        rawPath,
	        p,
	        x,
	        y;

	    this.rawPaths = rawPaths;
	    this.target = target;

	    if (this.rotate = autoRotate || autoRotate === 0) {
	      this.rOffset = parseFloat(autoRotate) || 0;
	      this.radians = !!vars.useRadians;
	      this.rProp = vars.rotation || "rotation";
	      this.rSet = target._gsap.set(target, this.rProp, this);
	      this.ru = _getUnit(target._gsap.get(target, this.rProp)) || 0;
	    }

	    if (Array.isArray(path) && !("closed" in path) && typeof firstObj !== "number") {
	      for (p in firstObj) {
	        if (~_xProps.indexOf(p)) {
	          x = p;
	        } else if (~_yProps.indexOf(p)) {
	          y = p;
	        }
	      }

	      if (x && y) {
	        rawPaths.push(_segmentToRawPath(this, _populateSegmentFromArray(_populateSegmentFromArray([], path, x, 0), path, y, 1), target, vars.x || x, vars.y || y, slicer, vars));
	      } else {
	        x = y = 0;
	      }

	      for (p in firstObj) {
	        if (p !== x && p !== y) {
	          rawPaths.push(_segmentToRawPath(this, _populateSegmentFromArray([], path, p, 0), target, p, 0, slicer, vars));
	        }
	      }
	    } else {
	      rawPath = slicer(_align(getRawPath(vars.path), target, vars));
	      cacheRawPathMeasurements(rawPath, vars.resolution);
	      rawPaths.push(rawPath);

	      _addDimensionalPropTween(this, target, vars.x || "x", rawPath, "x", vars.unitX || "px");

	      _addDimensionalPropTween(this, target, vars.y || "y", rawPath, "y", vars.unitY || "px");
	    }
	  },
	  render: function render(ratio, data) {
	    var rawPaths = data.rawPaths,
	        i = rawPaths.length,
	        pt = data._pt;

	    if (ratio > 1) {
	      ratio = 1;
	    } else if (ratio < 0) {
	      ratio = 0;
	    }

	    while (i--) {
	      getPositionOnPath(rawPaths[i], ratio, !i && data.rotate, rawPaths[i]);
	    }

	    while (pt) {
	      pt.set(pt.t, pt.p, pt.path[pt.pp] + pt.u, pt.d, ratio);
	      pt = pt._next;
	    }

	    if (data.rotate) {
	      data.rSet(data.target, data.rProp, rawPaths[0].angle * (data.radians ? _DEG2RAD$1 : 1) + data.rOffset + data.ru, data, ratio);
	    }
	  },
	  getLength: function getLength(path) {
	    return cacheRawPathMeasurements(getRawPath(path)).totalLength;
	  },
	  sliceRawPath: sliceRawPath,
	  getRawPath: getRawPath,
	  pointsToSegment: pointsToSegment,
	  stringToRawPath: stringToRawPath,
	  rawPathToString: rawPathToString,
	  transformRawPath: transformRawPath,
	  convertToPath: function convertToPath$1(targets, swap) {
	    return _toArray(targets).map(function (target) {
	      return convertToPath(target, swap !== false);
	    });
	  },
	  getGlobalMatrix: getGlobalMatrix,
	  arrayToRawPath: function arrayToRawPath(value, vars) {
	    vars = vars || {};

	    var segment = _populateSegmentFromArray(_populateSegmentFromArray([], value, vars.x || "x", 0), value, vars.y || "y", 1);

	    if (vars.relative) {
	      _relativize(segment);
	    }

	    return [vars.type === "cubic" ? segment : pointsToSegment(segment, vars.curviness)];
	  }
	};
	_getGSAP() && gsap.registerPlugin(MotionPathPlugin);

	exports.MotionPathPlugin = MotionPathPlugin;
	exports.default = MotionPathPlugin;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
