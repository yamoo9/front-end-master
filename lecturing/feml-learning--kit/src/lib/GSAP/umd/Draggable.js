(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.window = global.window || {}));
}(this, function (exports) { 'use strict';

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
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

  var gsap,
      _win$1,
      _doc$1,
      _docElement$1,
      _body$1,
      _tempDiv,
      _placeholderDiv,
      _coreInitted,
      _checkPrefix,
      _toArray,
      _supportsPassive,
      _touchEventLookup,
      _dragCount,
      _isMultiTouching,
      _isAndroid,
      InertiaPlugin,
      _defaultCursor,
      _supportsPointer,
      _windowExists = function _windowExists() {
    return typeof window !== "undefined";
  },
      _getGSAP = function _getGSAP() {
    return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
  },
      _isFunction = function _isFunction(value) {
    return typeof value === "function";
  },
      _isObject = function _isObject(value) {
    return typeof value === "object";
  },
      _isUndefined = function _isUndefined(value) {
    return typeof value === "undefined";
  },
      _emptyFunc = function _emptyFunc() {
    return 0;
  },
      _transformProp$1 = "transform",
      _transformOriginProp$1 = "transformOrigin",
      _round = function _round(value) {
    return Math.round(value * 10000) / 10000;
  },
      _isArray = Array.isArray,
      _createElement = function _createElement(type, ns) {
    var e = _doc$1.createElementNS ? _doc$1.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc$1.createElement(type);
    return e.style ? e : _doc$1.createElement(type);
  },
      _RAD2DEG = 180 / Math.PI,
      _bigNum = 1e20,
      _identityMatrix$1 = new Matrix2D(),
      _getTime = Date.now || function () {
    return new Date().getTime();
  },
      _renderQueue = [],
      _lookup = {},
      _lookupCount = 0,
      _clickableTagExp = /^(?:a|input|textarea|button|select)$/i,
      _lastDragTime = 0,
      _temp1 = {},
      _windowProxy = {},
      _copy = function _copy(obj, factor) {
    var copy = {},
        p;

    for (p in obj) {
      copy[p] = factor ? obj[p] * factor : obj[p];
    }

    return copy;
  },
      _renderQueueTick = function _renderQueueTick() {
    return _renderQueue.forEach(function (func) {
      return func();
    });
  },
      _addToRenderQueue = function _addToRenderQueue(func) {
    _renderQueue.push(func);

    if (_renderQueue.length === 1) {
      gsap.ticker.add(_renderQueueTick);
    }
  },
      _renderQueueTimeout = function _renderQueueTimeout() {
    return !_renderQueue.length && gsap.ticker.remove(_renderQueueTick);
  },
      _removeFromRenderQueue = function _removeFromRenderQueue(func) {
    var i = _renderQueue.length;

    while (i--) {
      if (_renderQueue[i] === func) {
        _renderQueue.splice(i, 1);
      }
    }

    gsap.to(_renderQueueTimeout, {
      overwrite: true,
      delay: 15,
      duration: 0,
      onComplete: _renderQueueTimeout,
      data: "_draggable"
    });
  },
      _setDefaults = function _setDefaults(obj, defaults) {
    for (var p in defaults) {
      if (!(p in obj)) {
        obj[p] = defaults[p];
      }
    }

    return obj;
  },
      _addListener = function _addListener(element, type, func, capture) {
    if (element.addEventListener) {
      var touchType = _touchEventLookup[type];
      capture = capture || (_supportsPassive ? {
        passive: false
      } : null);
      element.addEventListener(touchType || type, func, capture);

      if (touchType && type !== touchType && touchType.substr(0, 7) !== "pointer") {
        element.addEventListener(type, func, capture);
      }
    }
  },
      _removeListener = function _removeListener(element, type, func) {
    if (element.removeEventListener) {
      var touchType = _touchEventLookup[type];
      element.removeEventListener(touchType || type, func);

      if (touchType && type !== touchType && touchType.substr(0, 7) !== "pointer") {
        element.removeEventListener(type, func);
      }
    }
  },
      _preventDefault = function _preventDefault(event) {
    if (event.preventDefault) {
      event.preventDefault();

      if (event.preventManipulation) {
        event.preventManipulation();
      }
    }
  },
      _hasTouchID = function _hasTouchID(list, ID) {
    var i = list.length;

    while (i--) {
      if (list[i].identifier === ID) {
        return true;
      }
    }
  },
      _onMultiTouchDocumentEnd = function _onMultiTouchDocumentEnd(event) {
    _isMultiTouching = event.touches && _dragCount < event.touches.length;

    _removeListener(event.target, "touchend", _onMultiTouchDocumentEnd);
  },
      _onMultiTouchDocument = function _onMultiTouchDocument(event) {
    _isMultiTouching = event.touches && _dragCount < event.touches.length;

    _addListener(event.target, "touchend", _onMultiTouchDocumentEnd);
  },
      _getDocScrollTop$1 = function _getDocScrollTop() {
    return _win$1.pageYOffset || _doc$1.scrollTop || _docElement$1.scrollTop || _body$1.scrollTop || 0;
  },
      _getDocScrollLeft$1 = function _getDocScrollLeft() {
    return _win$1.pageXOffset || _doc$1.scrollLeft || _docElement$1.scrollLeft || _body$1.scrollLeft || 0;
  },
      _addScrollListener = function _addScrollListener(e, callback) {
    _addListener(e, "scroll", callback);

    if (!_isRoot(e.parentNode)) {
      _addScrollListener(e.parentNode, callback);
    }
  },
      _removeScrollListener = function _removeScrollListener(e, callback) {
    _removeListener(e, "scroll", callback);

    if (!_isRoot(e.parentNode)) {
      _removeScrollListener(e.parentNode, callback);
    }
  },
      _isRoot = function _isRoot(e) {
    return !!(!e || e === _docElement$1 || e === _doc$1 || e === _doc$1.body || e === _win$1 || !e.nodeType || !e.parentNode);
  },
      _getMaxScroll = function _getMaxScroll(element, axis) {
    var dim = axis === "x" ? "Width" : "Height",
        scroll = "scroll" + dim,
        client = "client" + dim;
    return Math.max(0, _isRoot(element) ? Math.max(_docElement$1[scroll], _body$1[scroll]) - (_win$1["inner" + dim] || _docElement$1[client] || _body$1[client]) : element[scroll] - element[client]);
  },
      _recordMaxScrolls = function _recordMaxScrolls(e) {
    var x = _getMaxScroll(e, "x"),
        y = _getMaxScroll(e, "y");

    if (_isRoot(e)) {
      e = _windowProxy;
    } else {
      _recordMaxScrolls(e.parentNode);
    }

    e._gsMaxScrollX = x;
    e._gsMaxScrollY = y;
    e._gsScrollX = e.scrollLeft || 0;
    e._gsScrollY = e.scrollTop || 0;
  },
      _setStyle = function _setStyle(element, property, value) {
    var style = element.style;

    if (!style) {
      return;
    }

    if (_isUndefined(style[property])) {
      property = _checkPrefix(property, element) || property;
    }

    if (value == null) {
      style.removeProperty && style.removeProperty(property.replace(/([A-Z])/g, "-$1").toLowerCase());
    } else {
      style[property] = value;
    }
  },
      _getComputedStyle = function _getComputedStyle(element) {
    return _win$1.getComputedStyle(element instanceof Element ? element : element.host || (element.parentNode || {}).host || element);
  },
      _tempRect = {},
      _parseRect = function _parseRect(e) {
    if (e === _win$1) {
      _tempRect.left = _tempRect.top = 0;
      _tempRect.width = _tempRect.right = _docElement$1.clientWidth || e.innerWidth || _body$1.clientWidth || 0;
      _tempRect.height = _tempRect.bottom = (e.innerHeight || 0) - 20 < _docElement$1.clientHeight ? _docElement$1.clientHeight : e.innerHeight || _body$1.clientHeight || 0;
      return _tempRect;
    }

    var r = !_isUndefined(e.pageX) ? {
      left: e.pageX - _getDocScrollLeft$1(),
      top: e.pageY - _getDocScrollTop$1(),
      right: e.pageX - _getDocScrollLeft$1() + 1,
      bottom: e.pageY - _getDocScrollTop$1() + 1
    } : !e.nodeType && !_isUndefined(e.left) && !_isUndefined(e.top) ? e : _toArray(e)[0].getBoundingClientRect();

    if (_isUndefined(r.right) && !_isUndefined(r.width)) {
      r.right = r.left + r.width;
      r.bottom = r.top + r.height;
    } else if (_isUndefined(r.width)) {
      r = {
        width: r.right - r.left,
        height: r.bottom - r.top,
        right: r.right,
        left: r.left,
        bottom: r.bottom,
        top: r.top
      };
    }

    return r;
  },
      _dispatchEvent = function _dispatchEvent(target, type, callbackName) {
    var vars = target.vars,
        callback = vars[callbackName],
        listeners = target._listeners[type],
        result;

    if (_isFunction(callback)) {
      result = callback.apply(vars.callbackScope || target, vars[callbackName + "Params"] || [target.pointerEvent]);
    }

    if (listeners && target.dispatchEvent(type) === false) {
      result = false;
    }

    return result;
  },
      _getBounds = function _getBounds(target, context) {
    var e = _toArray(target)[0],
        top,
        left,
        offset;

    if (!e.nodeType && e !== _win$1) {
      if (!_isUndefined(target.left)) {
        offset = {
          x: 0,
          y: 0
        };
        return {
          left: target.left - offset.x,
          top: target.top - offset.y,
          width: target.width,
          height: target.height
        };
      }

      left = target.min || target.minX || target.minRotation || 0;
      top = target.min || target.minY || 0;
      return {
        left: left,
        top: top,
        width: (target.max || target.maxX || target.maxRotation || 0) - left,
        height: (target.max || target.maxY || 0) - top
      };
    }

    return _getElementBounds(e, context);
  },
      _point1 = {},
      _getElementBounds = function _getElementBounds(element, context) {
    context = _toArray(context)[0];
    var isSVG = element.getBBox && element.ownerSVGElement,
        left,
        right,
        top,
        bottom,
        matrix,
        p1,
        p2,
        p3,
        p4,
        bbox,
        width,
        height,
        cs,
        contextParent;

    if (element === _win$1) {
      top = _getDocScrollTop$1();
      left = _getDocScrollLeft$1();
      right = left + (_docElement$1.clientWidth || element.innerWidth || _doc$1.body.clientWidth || 0);
      bottom = top + ((element.innerHeight || 0) - 20 < _docElement$1.clientHeight ? _docElement$1.clientHeight : element.innerHeight || _body$1.clientHeight || 0);
    } else if (context === _win$1 || _isUndefined(context)) {
      return element.getBoundingClientRect();
    } else {
      left = top = 0;

      if (isSVG) {
        bbox = element.getBBox();
        width = bbox.width;
        height = bbox.height;
      } else if (element.viewBox && (bbox = element.viewBox.baseVal)) {
        left = bbox.x || 0;
        top = bbox.y || 0;
        width = bbox.width;
        height = bbox.height;
      } else {
        cs = _getComputedStyle(element);
        width = parseFloat(cs.width) || element.clientWidth || 0;
        height = parseFloat(cs.height) || element.clientHeight || 0;
      }

      right = width;
      bottom = height;
    }

    if (element === context) {
      return {
        left: left,
        top: top,
        width: right - left,
        height: bottom - top
      };
    }

    matrix = getGlobalMatrix(context, true).multiply(getGlobalMatrix(element));
    p1 = matrix.apply({
      x: left,
      y: top
    });
    p2 = matrix.apply({
      x: right,
      y: top
    });
    p3 = matrix.apply({
      x: right,
      y: bottom
    });
    p4 = matrix.apply({
      x: left,
      y: bottom
    });
    left = Math.min(p1.x, p2.x, p3.x, p4.x);
    top = Math.min(p1.y, p2.y, p3.y, p4.y);
    contextParent = context.parentNode || {};
    return {
      left: left + (contextParent.scrollLeft || 0),
      top: top + (contextParent.scrollTop || 0),
      width: Math.max(p1.x, p2.x, p3.x, p4.x) - left,
      height: Math.max(p1.y, p2.y, p3.y, p4.y) - top
    };
  },
      _parseInertia = function _parseInertia(draggable, snap, max, min, factor, forceZeroVelocity) {
    var vars = {},
        a,
        i,
        l;

    if (snap) {
      if (factor !== 1 && snap instanceof Array) {
        vars.end = a = [];
        l = snap.length;

        if (_isObject(snap[0])) {
          for (i = 0; i < l; i++) {
            a[i] = _copy(snap[i], factor);
          }
        } else {
          for (i = 0; i < l; i++) {
            a[i] = snap[i] * factor;
          }
        }

        max += 1.1;
        min -= 1.1;
      } else if (_isFunction(snap)) {
        vars.end = function (value) {
          var result = snap.call(draggable, value),
              copy,
              p;

          if (factor !== 1) {
            if (_isObject(result)) {
              copy = {};

              for (p in result) {
                copy[p] = result[p] * factor;
              }

              result = copy;
            } else {
              result *= factor;
            }
          }

          return result;
        };
      } else {
        vars.end = snap;
      }
    }

    if (max || max === 0) {
      vars.max = max;
    }

    if (min || min === 0) {
      vars.min = min;
    }

    if (forceZeroVelocity) {
      vars.velocity = 0;
    }

    return vars;
  },
      _isClickable = function _isClickable(element) {
    var data;
    return !element || !element.getAttribute || element === _body$1 ? false : (data = element.getAttribute("data-clickable")) === "true" || data !== "false" && (element.onclick || _clickableTagExp.test(element.nodeName + "") || element.getAttribute("contentEditable") === "true") ? true : _isClickable(element.parentNode);
  },
      _setSelectable = function _setSelectable(elements, selectable) {
    var i = elements.length,
        e;

    while (i--) {
      e = elements[i];
      e.ondragstart = e.onselectstart = selectable ? null : _emptyFunc;

      _setStyle(e, "userSelect", selectable ? "text" : "none");
    }
  },
      _isFixed = function _isFixed(element) {
    if (_getComputedStyle(element).position === "fixed") {
      return true;
    }

    element = element.parentNode;

    if (element && element !== _docElement$1) {
      return _isFixed(element);
    }
  },
      _initCore = function _initCore(required) {
    if (_windowExists()) {
      _win$1 = window;
      _doc$1 = document;
      _docElement$1 = _doc$1.documentElement;
      _body$1 = _doc$1.body;
      _tempDiv = _createElement("div");
      _supportsPointer = !!window.PointerEvent;
      _placeholderDiv = _doc$1.createElement("div");
      _placeholderDiv.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab";
      _defaultCursor = _placeholderDiv.style.cursor === "grab" ? "grab" : "move";
      _isAndroid = _win$1.navigator && _win$1.navigator.userAgent.toLowerCase().indexOf("android") !== -1;

      _touchEventLookup = function (types) {
        var standard = types.split(","),
            converted = (!_isUndefined(_tempDiv.onpointerdown) ? "pointerdown,pointermove,pointerup,pointercancel" : !_isUndefined(_tempDiv.onmspointerdown) ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : types).split(","),
            obj = {},
            i = 4;

        while (--i > -1) {
          obj[standard[i]] = converted[i];
          obj[converted[i]] = standard[i];
        }

        try {
          _docElement$1.addEventListener("test", null, Object.defineProperty({}, "passive", {
            get: function get() {
              _supportsPassive = 1;
            }
          }));
        } catch (e) {}

        return obj;
      }("touchstart,touchmove,touchend,touchcancel");

      _addListener(_doc$1, "touchcancel", _emptyFunc);

      _addListener(_win$1, "touchmove", _emptyFunc);

      _body$1 && _body$1.addEventListener("touchstart", _emptyFunc);

      _addListener(_doc$1, "contextmenu", function () {
        for (var p in _lookup) {
          if (_lookup[p].isPressed) {
            _lookup[p].endDrag();
          }
        }
      });

      gsap = _coreInitted = _getGSAP();
    }

    if (gsap) {
      InertiaPlugin = gsap.plugins.inertia;
      _checkPrefix = gsap.utils.checkPrefix;
      _transformProp$1 = _checkPrefix(_transformProp$1);
      _transformOriginProp$1 = _checkPrefix(_transformOriginProp$1);
      _toArray = gsap.utils.toArray;
    } else if (required) {
      console.warn("Please gsap.registerPlugin(Draggable)");
    }
  };

  var EventDispatcher = function () {
    function EventDispatcher(target) {
      this._listeners = {};
      this.target = target || this;
    }

    var _proto = EventDispatcher.prototype;

    _proto.addEventListener = function addEventListener(type, callback) {
      var list = this._listeners[type] || (this._listeners[type] = []);

      if (!~list.indexOf(callback)) {
        list.push(callback);
      }
    };

    _proto.removeEventListener = function removeEventListener(type, callback) {
      var list = this._listeners[type],
          i = list && list.indexOf(callback) || -1;
      i > -1 && list.splice(i, 1);
    };

    _proto.dispatchEvent = function dispatchEvent(type) {
      var _this = this;

      var result;
      (this._listeners[type] || []).forEach(function (callback) {
        return callback.call(_this, {
          type: type,
          target: _this.target
        }) === false && (result = false);
      });
      return result;
    };

    return EventDispatcher;
  }();

  var Draggable = function (_EventDispatcher) {
    _inheritsLoose(Draggable, _EventDispatcher);

    function Draggable(target, vars) {
      var _this2;

      _this2 = _EventDispatcher.call(this) || this;

      if (!gsap) {
        _initCore(1);
      }

      target = _toArray(target)[0];

      if (!InertiaPlugin) {
        InertiaPlugin = gsap.plugins.inertia;
      }

      _this2.vars = vars = _copy(vars || {});
      _this2.target = target;
      _this2.x = _this2.y = _this2.rotation = 0;
      _this2.dragResistance = parseFloat(vars.dragResistance) || 0;
      _this2.edgeResistance = isNaN(vars.edgeResistance) ? 1 : parseFloat(vars.edgeResistance) || 0;
      _this2.lockAxis = vars.lockAxis;
      _this2.autoScroll = vars.autoScroll || 0;
      _this2.lockedAxis = null;
      _this2.allowEventDefault = !!vars.allowEventDefault;
      gsap.set(target, {
        x: "+=0"
      });

      var type = (vars.type || "x,y").toLowerCase(),
          xyMode = ~type.indexOf("x") || ~type.indexOf("y"),
          rotationMode = type.indexOf("rotation") !== -1,
          xProp = rotationMode ? "rotation" : xyMode ? "x" : "left",
          yProp = xyMode ? "y" : "top",
          allowX = !!(~type.indexOf("x") || ~type.indexOf("left")),
          allowY = !!(~type.indexOf("y") || ~type.indexOf("top")),
          minimumMovement = vars.minimumMovement || 2,
          self = _assertThisInitialized(_this2),
          triggers = _toArray(vars.trigger || vars.handle || target),
          killProps = {},
          dragEndTime = 0,
          checkAutoScrollBounds = false,
          autoScrollMarginTop = vars.autoScrollMarginTop || 40,
          autoScrollMarginRight = vars.autoScrollMarginRight || 40,
          autoScrollMarginBottom = vars.autoScrollMarginBottom || 40,
          autoScrollMarginLeft = vars.autoScrollMarginLeft || 40,
          isClickable = vars.clickableTest || _isClickable,
          clickTime = 0,
          gsCache = target._gsap || gsap.core.getCache(target),
          isFixed = _isFixed(target),
          getPropAsNum = function getPropAsNum(property, unit) {
        return parseFloat(gsCache.get(target, property, unit));
      },
          enabled,
          startPointerX,
          startPointerY,
          startElementX,
          startElementY,
          hasBounds,
          hasDragCallback,
          hasMoveCallback,
          maxX,
          minX,
          maxY,
          minY,
          touch,
          touchID,
          rotationOrigin,
          dirty,
          old,
          snapX,
          snapY,
          snapXY,
          isClicking,
          touchEventTarget,
          matrix,
          interrupted,
          startScrollTop,
          startScrollLeft,
          allowNativeTouchScrolling,
          touchDragAxis,
          isDispatching,
          clickDispatch,
          trustedClickDispatch,
          onContextMenu = function onContextMenu(e) {
        if (self.isPressed && e.which < 2) {
          self.endDrag();
        } else {
          _preventDefault(e);

          e.stopPropagation();
          return false;
        }
      },
          render = function render(suppressEvents) {
        if (self.autoScroll && self.isDragging && (checkAutoScrollBounds || dirty)) {
          var e = target,
              autoScrollFactor = self.autoScroll * 15,
              parent,
              isRoot,
              rect,
              pointerX,
              pointerY,
              changeX,
              changeY,
              gap;
          checkAutoScrollBounds = false;
          _windowProxy.scrollTop = _win$1.pageYOffset != null ? _win$1.pageYOffset : _docElement$1.scrollTop != null ? _docElement$1.scrollTop : _body$1.scrollTop;
          _windowProxy.scrollLeft = _win$1.pageXOffset != null ? _win$1.pageXOffset : _docElement$1.scrollLeft != null ? _docElement$1.scrollLeft : _body$1.scrollLeft;
          pointerX = self.pointerX - _windowProxy.scrollLeft;
          pointerY = self.pointerY - _windowProxy.scrollTop;

          while (e && !isRoot) {
            isRoot = _isRoot(e.parentNode);
            parent = isRoot ? _windowProxy : e.parentNode;
            rect = isRoot ? {
              bottom: Math.max(_docElement$1.clientHeight, _win$1.innerHeight || 0),
              right: Math.max(_docElement$1.clientWidth, _win$1.innerWidth || 0),
              left: 0,
              top: 0
            } : parent.getBoundingClientRect();
            changeX = changeY = 0;

            if (allowY) {
              gap = parent._gsMaxScrollY - parent.scrollTop;

              if (gap < 0) {
                changeY = gap;
              } else if (pointerY > rect.bottom - autoScrollMarginBottom && gap) {
                checkAutoScrollBounds = true;
                changeY = Math.min(gap, autoScrollFactor * (1 - Math.max(0, rect.bottom - pointerY) / autoScrollMarginBottom) | 0);
              } else if (pointerY < rect.top + autoScrollMarginTop && parent.scrollTop) {
                checkAutoScrollBounds = true;
                changeY = -Math.min(parent.scrollTop, autoScrollFactor * (1 - Math.max(0, pointerY - rect.top) / autoScrollMarginTop) | 0);
              }

              if (changeY) {
                parent.scrollTop += changeY;
              }
            }

            if (allowX) {
              gap = parent._gsMaxScrollX - parent.scrollLeft;

              if (gap < 0) {
                changeX = gap;
              } else if (pointerX > rect.right - autoScrollMarginRight && gap) {
                checkAutoScrollBounds = true;
                changeX = Math.min(gap, autoScrollFactor * (1 - Math.max(0, rect.right - pointerX) / autoScrollMarginRight) | 0);
              } else if (pointerX < rect.left + autoScrollMarginLeft && parent.scrollLeft) {
                checkAutoScrollBounds = true;
                changeX = -Math.min(parent.scrollLeft, autoScrollFactor * (1 - Math.max(0, pointerX - rect.left) / autoScrollMarginLeft) | 0);
              }

              if (changeX) {
                parent.scrollLeft += changeX;
              }
            }

            if (isRoot && (changeX || changeY)) {
              _win$1.scrollTo(parent.scrollLeft, parent.scrollTop);

              setPointerPosition(self.pointerX + changeX, self.pointerY + changeY);
            }

            e = parent;
          }
        }

        if (dirty) {
          var x = self.x,
              y = self.y;

          if (rotationMode) {
            self.deltaX = x - parseFloat(gsCache.rotation);
            self.rotation = x;
            gsCache.rotation = x + "deg";
            gsCache.renderTransform(1, gsCache);
          } else {
            if (xyMode) {
              if (allowY) {
                self.deltaY = y - parseFloat(gsCache.y);
                gsCache.y = y + "px";
              }

              if (allowX) {
                self.deltaX = x - parseFloat(gsCache.x);
                gsCache.x = x + "px";
              }

              gsCache.renderTransform(1, gsCache);
            } else {
              if (allowY) {
                self.deltaY = y - parseFloat(target.style.top || 0);
                target.style.top = y + "px";
              }

              if (allowX) {
                self.deltaY = x - parseFloat(target.style.left || 0);
                target.style.left = x + "px";
              }
            }
          }

          if (hasDragCallback && !suppressEvents && !isDispatching) {
            isDispatching = true;

            if (_dispatchEvent(self, "drag", "onDrag") === false) {
              if (allowX) {
                self.x -= self.deltaX;
              }

              if (allowY) {
                self.y -= self.deltaY;
              }

              render(true);
            }

            isDispatching = false;
          }
        }

        dirty = false;
      },
          syncXY = function syncXY(skipOnUpdate, skipSnap) {
        var x = self.x,
            y = self.y,
            snappedValue,
            cs;

        if (!target._gsap) {
          gsCache = gsap.core.getCache(target);
        }

        if (xyMode) {
          self.x = parseFloat(gsCache.x);
          self.y = parseFloat(gsCache.y);
        } else if (rotationMode) {
          self.x = self.rotation = parseFloat(gsCache.rotation);
        } else {
          self.y = parseInt(target.style.top || (cs = _getComputedStyle(target)) && cs.top, 10) || 0;
          self.x = parseInt(target.style.left || (cs || {}).left, 10) || 0;
        }

        if ((snapX || snapY || snapXY) && !skipSnap && (self.isDragging || self.isThrowing)) {
          if (snapXY) {
            _temp1.x = self.x;
            _temp1.y = self.y;
            snappedValue = snapXY(_temp1);

            if (snappedValue.x !== self.x) {
              self.x = snappedValue.x;
              dirty = true;
            }

            if (snappedValue.y !== self.y) {
              self.y = snappedValue.y;
              dirty = true;
            }
          }

          if (snapX) {
            snappedValue = snapX(self.x);

            if (snappedValue !== self.x) {
              self.x = snappedValue;

              if (rotationMode) {
                self.rotation = snappedValue;
              }

              dirty = true;
            }
          }

          if (snapY) {
            snappedValue = snapY(self.y);

            if (snappedValue !== self.y) {
              self.y = snappedValue;
            }

            dirty = true;
          }
        }

        if (dirty) {
          render(true);
        }

        if (!skipOnUpdate) {
          self.deltaX = self.x - x;
          self.deltaY = self.y - y;

          _dispatchEvent(self, "throwupdate", "onThrowUpdate");
        }
      },
          buildSnapFunc = function buildSnapFunc(snap, min, max, factor) {
        if (min == null) {
          min = -_bigNum;
        }

        if (max == null) {
          max = _bigNum;
        }

        if (_isFunction(snap)) {
          return function (n) {
            var edgeTolerance = !self.isPressed ? 1 : 1 - self.edgeResistance;
            return snap.call(self, n > max ? max + (n - max) * edgeTolerance : n < min ? min + (n - min) * edgeTolerance : n) * factor;
          };
        }

        if (_isArray(snap)) {
          return function (n) {
            var i = snap.length,
                closest = 0,
                absDif = _bigNum,
                val,
                dif;

            while (--i > -1) {
              val = snap[i];
              dif = val - n;

              if (dif < 0) {
                dif = -dif;
              }

              if (dif < absDif && val >= min && val <= max) {
                closest = i;
                absDif = dif;
              }
            }

            return snap[closest];
          };
        }

        return isNaN(snap) ? function (n) {
          return n;
        } : function () {
          return snap * factor;
        };
      },
          buildPointSnapFunc = function buildPointSnapFunc(snap, minX, maxX, minY, maxY, radius, factor) {
        radius = radius && radius < _bigNum ? radius * radius : _bigNum;

        if (_isFunction(snap)) {
          return function (point) {
            var edgeTolerance = !self.isPressed ? 1 : 1 - self.edgeResistance,
                x = point.x,
                y = point.y,
                result,
                dx,
                dy;
            point.x = x = x > maxX ? maxX + (x - maxX) * edgeTolerance : x < minX ? minX + (x - minX) * edgeTolerance : x;
            point.y = y = y > maxY ? maxY + (y - maxY) * edgeTolerance : y < minY ? minY + (y - minY) * edgeTolerance : y;
            result = snap.call(self, point);

            if (result !== point) {
              point.x = result.x;
              point.y = result.y;
            }

            if (factor !== 1) {
              point.x *= factor;
              point.y *= factor;
            }

            if (radius < _bigNum) {
              dx = point.x - x;
              dy = point.y - y;

              if (dx * dx + dy * dy > radius) {
                point.x = x;
                point.y = y;
              }
            }

            return point;
          };
        }

        if (_isArray(snap)) {
          return function (p) {
            var i = snap.length,
                closest = 0,
                minDist = _bigNum,
                x,
                y,
                point,
                dist;

            while (--i > -1) {
              point = snap[i];
              x = point.x - p.x;
              y = point.y - p.y;
              dist = x * x + y * y;

              if (dist < minDist) {
                closest = i;
                minDist = dist;
              }
            }

            return minDist <= radius ? snap[closest] : p;
          };
        }

        return function (n) {
          return n;
        };
      },
          calculateBounds = function calculateBounds() {
        var bounds, targetBounds, snap, snapIsRaw;
        hasBounds = false;

        if (!!vars.bounds) {
          bounds = _getBounds(vars.bounds, target.parentNode);

          if (rotationMode) {
            self.minX = minX = bounds.left;
            self.maxX = maxX = bounds.left + bounds.width;
            self.minY = minY = self.maxY = maxY = 0;
          } else if (!_isUndefined(vars.bounds.maxX) || !_isUndefined(vars.bounds.maxY)) {
            bounds = vars.bounds;
            self.minX = minX = bounds.minX;
            self.minY = minY = bounds.minY;
            self.maxX = maxX = bounds.maxX;
            self.maxY = maxY = bounds.maxY;
          } else {
            targetBounds = _getBounds(target, target.parentNode);
            self.minX = minX = getPropAsNum(xProp) + bounds.left - targetBounds.left;
            self.minY = minY = getPropAsNum(yProp) + bounds.top - targetBounds.top;
            self.maxX = maxX = minX + (bounds.width - targetBounds.width);
            self.maxY = maxY = minY + (bounds.height - targetBounds.height);
          }

          if (minX > maxX) {
            self.minX = maxX;
            self.maxX = maxX = minX;
            minX = self.minX;
          }

          if (minY > maxY) {
            self.minY = maxY;
            self.maxY = maxY = minY;
            minY = self.minY;
          }

          if (rotationMode) {
            self.minRotation = minX;
            self.maxRotation = maxX;
          }

          hasBounds = true;
        }

        if (vars.liveSnap) {
          snap = vars.liveSnap === true ? vars.snap || {} : vars.liveSnap;
          snapIsRaw = _isArray(snap) || _isFunction(snap);

          if (rotationMode) {
            snapX = buildSnapFunc(snapIsRaw ? snap : snap.rotation, minX, maxX, 1);
            snapY = null;
          } else {
            if (snap.points) {
              snapXY = buildPointSnapFunc(snapIsRaw ? snap : snap.points, minX, maxX, minY, maxY, snap.radius, 1);
            } else {
              if (allowX) {
                snapX = buildSnapFunc(snapIsRaw ? snap : snap.x || snap.left || snap.scrollLeft, minX, maxX, 1);
              }

              if (allowY) {
                snapY = buildSnapFunc(snapIsRaw ? snap : snap.y || snap.top || snap.scrollTop, minY, maxY, 1);
              }
            }
          }
        }
      },
          onThrowComplete = function onThrowComplete() {
        self.isThrowing = false;

        _dispatchEvent(self, "throwcomplete", "onThrowComplete");
      },
          onThrowInterrupt = function onThrowInterrupt() {
        self.isThrowing = false;
      },
          animate = function animate(inertia, forceZeroVelocity) {
        var snap, snapIsRaw, tween, overshootTolerance;

        if (inertia && InertiaPlugin) {
          if (inertia === true) {
            snap = vars.snap || vars.liveSnap || {};
            snapIsRaw = _isArray(snap) || _isFunction(snap);
            inertia = {
              resistance: (vars.throwResistance || vars.resistance || 1000) / (rotationMode ? 10 : 1)
            };

            if (rotationMode) {
              inertia.rotation = _parseInertia(self, snapIsRaw ? snap : snap.rotation, maxX, minX, 1, forceZeroVelocity);
            } else {
              if (allowX) {
                inertia[xProp] = _parseInertia(self, snapIsRaw ? snap : snap.points || snap.x || snap.left, maxX, minX, 1, forceZeroVelocity || self.lockedAxis === "x");
              }

              if (allowY) {
                inertia[yProp] = _parseInertia(self, snapIsRaw ? snap : snap.points || snap.y || snap.top, maxY, minY, 1, forceZeroVelocity || self.lockedAxis === "y");
              }

              if (snap.points || _isArray(snap) && _isObject(snap[0])) {
                inertia.linkedProps = xProp + "," + yProp;
                inertia.radius = snap.radius;
              }
            }
          }

          self.isThrowing = true;
          overshootTolerance = !isNaN(vars.overshootTolerance) ? vars.overshootTolerance : vars.edgeResistance === 1 ? 0 : 1 - self.edgeResistance + 0.2;
          inertia.duration = {
            max: Math.max(vars.minDuration || 0, vars.maxDuration || 0) || 2,
            min: !isNaN(vars.minDuration) ? vars.minDuration : overshootTolerance === 0 || _isObject(inertia) && inertia.resistance > 1000 ? 0 : 0.5,
            overshoot: overshootTolerance
          };
          self.tween = tween = gsap.to(target, {
            inertia: inertia,
            data: "_draggable",
            onComplete: onThrowComplete,
            onInterrupt: onThrowInterrupt,
            onUpdate: vars.fastMode ? _dispatchEvent : syncXY,
            onUpdateParams: vars.fastMode ? [self, "onthrowupdate", "onThrowUpdate"] : snap && snap.radius ? [false, true] : []
          });

          if (!vars.fastMode) {
            tween.render(tween.duration(), true, true);
            syncXY(true, true);
            self.endX = self.x;
            self.endY = self.y;

            if (rotationMode) {
              self.endRotation = self.x;
            }

            tween.play(0);
            syncXY(true, true);
          }
        } else if (hasBounds) {
          self.applyBounds();
        }
      },
          updateMatrix = function updateMatrix(shiftStart) {
        var start = matrix || new Matrix2D(),
            p;
        matrix = getGlobalMatrix(target.parentNode, true);

        if (shiftStart && self.isPressed && !matrix.equals(start)) {
          p = start.inverse().apply({
            x: startPointerX,
            y: startPointerY
          });
          matrix.apply(p, p);
          startPointerX = p.x;
          startPointerY = p.y;
        }

        if (matrix.equals(_identityMatrix$1)) {
          matrix = null;
        }
      },
          recordStartPositions = function recordStartPositions() {
        var edgeTolerance = 1 - self.edgeResistance,
            parsedOrigin,
            parent;
        updateMatrix(false);

        if (matrix) {
          _point1.x = self.pointerX;
          _point1.y = self.pointerY;
          matrix.apply(_point1, _point1);
          startPointerX = _point1.x;
          startPointerY = _point1.y;
        }

        if (dirty) {
          setPointerPosition(self.pointerX, self.pointerY);
          render(true);
        }

        if (isTweening()) {
          syncXY(true, true);
          calculateBounds();
        } else {
          self.applyBounds();
        }

        if (rotationMode) {
          parsedOrigin = target.ownerSVGElement ? [gsCache.xOrigin - target.getBBox().x, gsCache.yOrigin - target.getBBox().y] : (_getComputedStyle(target)[_transformOriginProp$1] || "0 0").split(" ");
          rotationOrigin = self.rotationOrigin = getGlobalMatrix(target).apply({
            x: parseFloat(parsedOrigin[0]) || 0,
            y: parseFloat(parsedOrigin[1]) || 0
          });
          syncXY(true, true);
          startElementX = self.x;
          startElementY = self.y = Math.atan2(rotationOrigin.y - self.pointerY, self.pointerX - rotationOrigin.x) * _RAD2DEG;
        } else {
          parent = !isFixed && target.parentNode;
          startScrollTop = parent ? parent.scrollTop || 0 : 0;
          startScrollLeft = parent ? parent.scrollLeft || 0 : 0;
          startElementY = getPropAsNum(yProp);
          startElementX = getPropAsNum(xProp);
        }

        if (hasBounds && edgeTolerance) {
          if (startElementX > maxX) {
            startElementX = maxX + (startElementX - maxX) / edgeTolerance;
          } else if (startElementX < minX) {
            startElementX = minX - (minX - startElementX) / edgeTolerance;
          }

          if (!rotationMode) {
            if (startElementY > maxY) {
              startElementY = maxY + (startElementY - maxY) / edgeTolerance;
            } else if (startElementY < minY) {
              startElementY = minY - (minY - startElementY) / edgeTolerance;
            }
          }
        }

        self.startX = startElementX;
        self.startY = startElementY;
      },
          isTweening = function isTweening() {
        return self.tween && self.tween.isActive();
      },
          removePlaceholder = function removePlaceholder() {
        if (_placeholderDiv.parentNode && !isTweening() && !self.isDragging) {
          _placeholderDiv.parentNode.removeChild(_placeholderDiv);
        }
      },
          onPress = function onPress(e, force) {
        var i;

        if (!enabled || self.isPressed || !e || (e.type === "mousedown" || e.type === "pointerdown") && !force && _getTime() - clickTime < 30 && _touchEventLookup[self.pointerEvent.type]) {
          return;
        }

        interrupted = isTweening();
        self.pointerEvent = e;

        if (_touchEventLookup[e.type]) {
          touchEventTarget = ~e.type.indexOf("touch") ? e.currentTarget || e.target : _doc$1;

          _addListener(touchEventTarget, "touchend", onRelease);

          _addListener(touchEventTarget, "touchmove", onMove);

          _addListener(touchEventTarget, "touchcancel", onRelease);

          _addListener(_doc$1, "touchstart", _onMultiTouchDocument);
        } else {
          touchEventTarget = null;

          _addListener(_doc$1, "mousemove", onMove);
        }

        touchDragAxis = null;

        if (!_supportsPointer) {
          _addListener(_doc$1, "mouseup", onRelease);

          if (e && e.target) {
            _addListener(e.target, "mouseup", onRelease);
          }
        }

        isClicking = isClickable.call(self, e.target) && vars.dragClickables === false && !force;

        if (isClicking) {
          _addListener(e.target, "change", onRelease);

          _dispatchEvent(self, "pressInit", "onPressInit");

          _dispatchEvent(self, "press", "onPress");

          _setSelectable(triggers, true);

          return;
        }

        allowNativeTouchScrolling = !touchEventTarget || allowX === allowY || self.vars.allowNativeTouchScrolling === false || self.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2) ? false : allowX ? "y" : "x";

        if (!allowNativeTouchScrolling && !self.allowEventDefault) {
          _preventDefault(e);

          _addListener(_win$1, "touchforcechange", _preventDefault);
        }

        if (e.changedTouches) {
          e = touch = e.changedTouches[0];
          touchID = e.identifier;
        } else if (e.pointerId) {
          touchID = e.pointerId;
        } else {
          touch = touchID = null;
        }

        _dragCount++;

        _addToRenderQueue(render);

        startPointerY = self.pointerY = e.pageY;
        startPointerX = self.pointerX = e.pageX;

        _dispatchEvent(self, "pressInit", "onPressInit");

        if (allowNativeTouchScrolling || self.autoScroll) {
          _recordMaxScrolls(target.parentNode);
        }

        if (target.parentNode && self.autoScroll && !rotationMode && target.parentNode._gsMaxScrollX && !_placeholderDiv.parentNode && !target.getBBox) {
          _placeholderDiv.style.width = target.parentNode.scrollWidth + "px";
          target.parentNode.appendChild(_placeholderDiv);
        }

        recordStartPositions();

        if (self.tween) {
          self.tween.kill();
        }

        self.isThrowing = false;
        gsap.killTweensOf(target, killProps, true);
        self.tween = self.lockedAxis = null;

        if (vars.zIndexBoost || !rotationMode && vars.zIndexBoost !== false) {
          target.style.zIndex = Draggable.zIndex++;
        }

        self.isPressed = true;
        hasDragCallback = !!(vars.onDrag || self._listeners.drag);
        hasMoveCallback = !!(vars.onMove || self._listeners.move);

        if (!rotationMode && (vars.cursor !== false || vars.activeCursor)) {
          i = triggers.length;

          while (--i > -1) {
            _setStyle(triggers[i], "cursor", vars.activeCursor || vars.cursor || (_defaultCursor === "grab" ? "grabbing" : _defaultCursor));
          }
        }

        _dispatchEvent(self, "press", "onPress");
      },
          onMove = function onMove(e) {
        var originalEvent = e,
            touches,
            pointerX,
            pointerY,
            i,
            dx,
            dy;

        if (!enabled || _isMultiTouching || !self.isPressed || !e) {
          return;
        }

        self.pointerEvent = e;
        touches = e.changedTouches;

        if (touches) {
          e = touches[0];

          if (e !== touch && e.identifier !== touchID) {
            i = touches.length;

            while (--i > -1 && (e = touches[i]).identifier !== touchID) {}

            if (i < 0) {
              return;
            }
          }
        } else if (e.pointerId && touchID && e.pointerId !== touchID) {
          return;
        }

        if (touchEventTarget && allowNativeTouchScrolling && !touchDragAxis) {
          _point1.x = e.pageX;
          _point1.y = e.pageY;

          if (matrix) {
            matrix.apply(_point1, _point1);
          }

          pointerX = _point1.x;
          pointerY = _point1.y;
          dx = Math.abs(pointerX - startPointerX);
          dy = Math.abs(pointerY - startPointerY);

          if (dx !== dy && (dx > minimumMovement || dy > minimumMovement) || _isAndroid && allowNativeTouchScrolling === touchDragAxis) {
            touchDragAxis = dx > dy && allowX ? "x" : "y";

            if (allowNativeTouchScrolling && touchDragAxis !== allowNativeTouchScrolling) {
              _addListener(_win$1, "touchforcechange", _preventDefault);
            }

            if (self.vars.lockAxisOnTouchScroll !== false) {
              self.lockedAxis = touchDragAxis === "x" ? "y" : "x";

              if (_isFunction(self.vars.onLockAxis)) {
                self.vars.onLockAxis.call(self, originalEvent);
              }
            }

            if (_isAndroid && allowNativeTouchScrolling === touchDragAxis) {
              onRelease(originalEvent);
              return;
            }
          }
        }

        if (!self.allowEventDefault && (!allowNativeTouchScrolling || touchDragAxis && allowNativeTouchScrolling !== touchDragAxis) && originalEvent.cancelable !== false) {
          _preventDefault(originalEvent);
        }

        if (self.autoScroll) {
          checkAutoScrollBounds = true;
        }

        setPointerPosition(e.pageX - (isFixed ? _getDocScrollLeft$1() : 0), e.pageY - (isFixed ? _getDocScrollTop$1() : 0), hasMoveCallback);
      },
          setPointerPosition = function setPointerPosition(pointerX, pointerY, invokeOnMove) {
        var dragTolerance = 1 - self.dragResistance,
            edgeTolerance = 1 - self.edgeResistance,
            prevPointerX = self.pointerX,
            prevPointerY = self.pointerY,
            prevStartElementY = startElementY,
            prevX = self.x,
            prevY = self.y,
            prevEndX = self.endX,
            prevEndY = self.endY,
            prevEndRotation = self.endRotation,
            prevDirty = dirty,
            xChange,
            yChange,
            x,
            y,
            dif,
            temp;
        self.pointerX = pointerX;
        self.pointerY = pointerY;

        if (rotationMode) {
          y = Math.atan2(rotationOrigin.y - pointerY, pointerX - rotationOrigin.x) * _RAD2DEG;
          dif = self.y - y;

          if (dif > 180) {
            startElementY -= 360;
            self.y = y;
          } else if (dif < -180) {
            startElementY += 360;
            self.y = y;
          }

          if (self.x !== startElementX || Math.abs(startElementY - y) > minimumMovement) {
            self.y = y;
            x = startElementX + (startElementY - y) * dragTolerance;
          } else {
            x = startElementX;
          }
        } else {
          if (matrix) {
            temp = pointerX * matrix.a + pointerY * matrix.c + matrix.e;
            pointerY = pointerX * matrix.b + pointerY * matrix.d + matrix.f;
            pointerX = temp;
          }

          yChange = pointerY - startPointerY;
          xChange = pointerX - startPointerX;

          if (yChange < minimumMovement && yChange > -minimumMovement) {
            yChange = 0;
          }

          if (xChange < minimumMovement && xChange > -minimumMovement) {
            xChange = 0;
          }

          if ((self.lockAxis || self.lockedAxis) && (xChange || yChange)) {
            temp = self.lockedAxis;

            if (!temp) {
              self.lockedAxis = temp = allowX && Math.abs(xChange) > Math.abs(yChange) ? "y" : allowY ? "x" : null;

              if (temp && _isFunction(self.vars.onLockAxis)) {
                self.vars.onLockAxis.call(self, self.pointerEvent);
              }
            }

            if (temp === "y") {
              yChange = 0;
            } else if (temp === "x") {
              xChange = 0;
            }
          }

          x = _round(startElementX + xChange * dragTolerance);
          y = _round(startElementY + yChange * dragTolerance);
        }

        if ((snapX || snapY || snapXY) && (self.x !== x || self.y !== y && !rotationMode)) {
          if (snapXY) {
            _temp1.x = x;
            _temp1.y = y;
            temp = snapXY(_temp1);
            x = _round(temp.x);
            y = _round(temp.y);
          }

          if (snapX) {
            x = _round(snapX(x));
          }

          if (snapY) {
            y = _round(snapY(y));
          }
        } else if (hasBounds) {
          if (x > maxX) {
            x = maxX + Math.round((x - maxX) * edgeTolerance);
          } else if (x < minX) {
            x = minX + Math.round((x - minX) * edgeTolerance);
          }

          if (!rotationMode) {
            if (y > maxY) {
              y = Math.round(maxY + (y - maxY) * edgeTolerance);
            } else if (y < minY) {
              y = Math.round(minY + (y - minY) * edgeTolerance);
            }
          }
        }

        if (self.x !== x || self.y !== y && !rotationMode) {
          if (rotationMode) {
            self.endRotation = self.x = self.endX = x;
            dirty = true;
          } else {
            if (allowY) {
              self.y = self.endY = y;
              dirty = true;
            }

            if (allowX) {
              self.x = self.endX = x;
              dirty = true;
            }
          }

          if (!invokeOnMove || _dispatchEvent(self, "move", "onMove") !== false) {
            if (!self.isDragging && self.isPressed) {
              self.isDragging = true;

              _dispatchEvent(self, "dragstart", "onDragStart");
            }
          } else {
            self.pointerX = prevPointerX;
            self.pointerY = prevPointerY;
            startElementY = prevStartElementY;
            self.x = prevX;
            self.y = prevY;
            self.endX = prevEndX;
            self.endY = prevEndY;
            self.endRotation = prevEndRotation;
            dirty = prevDirty;
          }
        }
      },
          onRelease = function onRelease(e, force) {
        if (!enabled || !self.isPressed || e && touchID != null && !force && (e.pointerId && e.pointerId !== touchID || e.changedTouches && !_hasTouchID(e.changedTouches, touchID))) {
          return;
        }

        self.isPressed = false;
        var originalEvent = e,
            wasDragging = self.isDragging,
            isContextMenuRelease = self.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2),
            placeholderDelayedCall = gsap.delayedCall(0.001, removePlaceholder),
            touches,
            i,
            syntheticEvent,
            eventTarget,
            syntheticClick;

        if (touchEventTarget) {
          _removeListener(touchEventTarget, "touchend", onRelease);

          _removeListener(touchEventTarget, "touchmove", onMove);

          _removeListener(touchEventTarget, "touchcancel", onRelease);

          _removeListener(_doc$1, "touchstart", _onMultiTouchDocument);
        } else {
          _removeListener(_doc$1, "mousemove", onMove);
        }

        _removeListener(_win$1, "touchforcechange", _preventDefault);

        if (!_supportsPointer) {
          _removeListener(_doc$1, "mouseup", onRelease);

          if (e && e.target) {
            _removeListener(e.target, "mouseup", onRelease);
          }
        }

        dirty = false;

        if (isClicking && !isContextMenuRelease) {
          if (e) {
            _removeListener(e.target, "change", onRelease);

            self.pointerEvent = originalEvent;
          }

          _setSelectable(triggers, false);

          _dispatchEvent(self, "release", "onRelease");

          _dispatchEvent(self, "click", "onClick");

          isClicking = false;
          return;
        }

        _removeFromRenderQueue(render);

        if (!rotationMode) {
          i = triggers.length;

          while (--i > -1) {
            _setStyle(triggers[i], "cursor", vars.cursor || (vars.cursor !== false ? _defaultCursor : null));
          }
        }

        if (wasDragging) {
          dragEndTime = _lastDragTime = _getTime();
          self.isDragging = false;
        }

        _dragCount--;

        if (e) {
          touches = e.changedTouches;

          if (touches) {
            e = touches[0];

            if (e !== touch && e.identifier !== touchID) {
              i = touches.length;

              while (--i > -1 && (e = touches[i]).identifier !== touchID) {}

              if (i < 0) {
                return;
              }
            }
          }

          self.pointerEvent = originalEvent;
          self.pointerX = e.pageX;
          self.pointerY = e.pageY;
        }

        if (isContextMenuRelease && originalEvent) {
          _preventDefault(originalEvent);

          _dispatchEvent(self, "release", "onRelease");
        } else if (originalEvent && !wasDragging) {
          if (interrupted && (vars.snap || vars.bounds)) {
            animate(vars.inertia || vars.throwProps);
          }

          _dispatchEvent(self, "release", "onRelease");

          if ((!_isAndroid || originalEvent.type !== "touchmove") && originalEvent.type.indexOf("cancel") === -1) {
            _dispatchEvent(self, "click", "onClick");

            if (_getTime() - clickTime < 300) {
              _dispatchEvent(self, "doubleclick", "onDoubleClick");
            }

            eventTarget = originalEvent.target || target;
            clickTime = _getTime();

            syntheticClick = function syntheticClick() {
              if (clickTime !== clickDispatch && self.enabled() && !self.isPressed && !originalEvent.defaultPrevented) {
                if (eventTarget.click) {
                  eventTarget.click();
                } else if (_doc$1.createEvent) {
                  syntheticEvent = _doc$1.createEvent("MouseEvents");
                  syntheticEvent.initMouseEvent("click", true, true, _win$1, 1, self.pointerEvent.screenX, self.pointerEvent.screenY, self.pointerX, self.pointerY, false, false, false, false, 0, null);
                  eventTarget.dispatchEvent(syntheticEvent);
                }
              }
            };

            if (!_isAndroid && !originalEvent.defaultPrevented) {
              gsap.delayedCall(0.05, syntheticClick);
            }
          }
        } else {
          animate(vars.inertia || vars.throwProps);

          if (!self.allowEventDefault && originalEvent && (vars.dragClickables !== false || !isClickable.call(self, originalEvent.target)) && wasDragging && (!allowNativeTouchScrolling || touchDragAxis && allowNativeTouchScrolling === touchDragAxis) && originalEvent.cancelable !== false) {
            _preventDefault(originalEvent);
          }

          _dispatchEvent(self, "release", "onRelease");
        }

        if (isTweening()) {
          placeholderDelayedCall.duration(self.tween.duration());
        }

        if (wasDragging) {
          _dispatchEvent(self, "dragend", "onDragEnd");
        }

        return true;
      },
          updateScroll = function updateScroll(e) {
        if (e && self.isDragging) {
          var parent = e.target || target.parentNode,
              deltaX = parent.scrollLeft - parent._gsScrollX,
              deltaY = parent.scrollTop - parent._gsScrollY;

          if (deltaX || deltaY) {
            if (matrix) {
              startPointerX -= deltaX * matrix.a + deltaY * matrix.c;
              startPointerY -= deltaY * matrix.d + deltaX * matrix.b;
            } else {
              startPointerX -= deltaX;
              startPointerY -= deltaY;
            }

            parent._gsScrollX += deltaX;
            parent._gsScrollY += deltaY;
            setPointerPosition(self.pointerX, self.pointerY);
          }
        }
      },
          onClick = function onClick(e) {
        var time = _getTime(),
            recentlyClicked = time - clickTime < 40,
            recentlyDragged = time - dragEndTime < 40,
            alreadyDispatched = recentlyClicked && clickDispatch === clickTime,
            defaultPrevented = self.pointerEvent && self.pointerEvent.defaultPrevented,
            alreadyDispatchedTrusted = recentlyClicked && trustedClickDispatch === clickTime,
            trusted = e.isTrusted || e.isTrusted == null && recentlyClicked && alreadyDispatched;

        if ((alreadyDispatched || recentlyDragged && self.vars.suppressClickOnDrag !== false) && e.stopImmediatePropagation) {
          e.stopImmediatePropagation();
        }

        if (recentlyClicked && !(self.pointerEvent && self.pointerEvent.defaultPrevented) && (!alreadyDispatched || trusted && !alreadyDispatchedTrusted)) {
          if (trusted && alreadyDispatched) {
            trustedClickDispatch = clickTime;
          }

          clickDispatch = clickTime;
          return;
        }

        if (self.isPressed || recentlyDragged || recentlyClicked) {
          if (!trusted || !e.detail || !recentlyClicked || defaultPrevented) {
            _preventDefault(e);
          }
        }
      },
          localizePoint = function localizePoint(p) {
        return matrix ? {
          x: p.x * matrix.a + p.y * matrix.c + matrix.e,
          y: p.x * matrix.b + p.y * matrix.d + matrix.f
        } : {
          x: p.x,
          y: p.y
        };
      };

      old = Draggable.get(target);

      if (old) {
        old.kill();
      }

      _this2.startDrag = function (event, align) {
        var r1, r2, p1, p2;
        onPress(event || self.pointerEvent, true);

        if (align && !self.hitTest(event || self.pointerEvent)) {
          r1 = _parseRect(event || self.pointerEvent);
          r2 = _parseRect(target);
          p1 = localizePoint({
            x: r1.left + r1.width / 2,
            y: r1.top + r1.height / 2
          });
          p2 = localizePoint({
            x: r2.left + r2.width / 2,
            y: r2.top + r2.height / 2
          });
          startPointerX -= p1.x - p2.x;
          startPointerY -= p1.y - p2.y;
        }

        if (!self.isDragging) {
          self.isDragging = true;

          _dispatchEvent(self, "dragstart", "onDragStart");
        }
      };

      _this2.drag = onMove;

      _this2.endDrag = function (e) {
        return onRelease(e || self.pointerEvent, true);
      };

      _this2.timeSinceDrag = function () {
        return self.isDragging ? 0 : (_getTime() - dragEndTime) / 1000;
      };

      _this2.timeSinceClick = function () {
        return (_getTime() - clickTime) / 1000;
      };

      _this2.hitTest = function (target, threshold) {
        return Draggable.hitTest(self.target, target, threshold);
      };

      _this2.getDirection = function (from, diagonalThreshold) {
        var mode = from === "velocity" && InertiaPlugin ? from : _isObject(from) && !rotationMode ? "element" : "start",
            xChange,
            yChange,
            ratio,
            direction,
            r1,
            r2;

        if (mode === "element") {
          r1 = _parseRect(self.target);
          r2 = _parseRect(from);
        }

        xChange = mode === "start" ? self.x - startElementX : mode === "velocity" ? InertiaPlugin.getVelocity(target, xProp) : r1.left + r1.width / 2 - (r2.left + r2.width / 2);

        if (rotationMode) {
          return xChange < 0 ? "counter-clockwise" : "clockwise";
        } else {
          diagonalThreshold = diagonalThreshold || 2;
          yChange = mode === "start" ? self.y - startElementY : mode === "velocity" ? InertiaPlugin.getVelocity(target, yProp) : r1.top + r1.height / 2 - (r2.top + r2.height / 2);
          ratio = Math.abs(xChange / yChange);
          direction = ratio < 1 / diagonalThreshold ? "" : xChange < 0 ? "left" : "right";

          if (ratio < diagonalThreshold) {
            if (direction !== "") {
              direction += "-";
            }

            direction += yChange < 0 ? "up" : "down";
          }
        }

        return direction;
      };

      _this2.applyBounds = function (newBounds) {
        var x, y, forceZeroVelocity, e, parent, isRoot;

        if (newBounds && vars.bounds !== newBounds) {
          vars.bounds = newBounds;
          return self.update(true);
        }

        syncXY(true);
        calculateBounds();

        if (hasBounds) {
          x = self.x;
          y = self.y;

          if (x > maxX) {
            x = maxX;
          } else if (x < minX) {
            x = minX;
          }

          if (y > maxY) {
            y = maxY;
          } else if (y < minY) {
            y = minY;
          }

          if (self.x !== x || self.y !== y) {
            forceZeroVelocity = true;
            self.x = self.endX = x;

            if (rotationMode) {
              self.endRotation = x;
            } else {
              self.y = self.endY = y;
            }

            dirty = true;
            render(true);

            if (self.autoScroll && !self.isDragging) {
              _recordMaxScrolls(target.parentNode);

              e = target;
              _windowProxy.scrollTop = _win$1.pageYOffset != null ? _win$1.pageYOffset : _docElement$1.scrollTop != null ? _docElement$1.scrollTop : _body$1.scrollTop;
              _windowProxy.scrollLeft = _win$1.pageXOffset != null ? _win$1.pageXOffset : _docElement$1.scrollLeft != null ? _docElement$1.scrollLeft : _body$1.scrollLeft;

              while (e && !isRoot) {
                isRoot = _isRoot(e.parentNode);
                parent = isRoot ? _windowProxy : e.parentNode;

                if (allowY && parent.scrollTop > parent._gsMaxScrollY) {
                  parent.scrollTop = parent._gsMaxScrollY;
                }

                if (allowX && parent.scrollLeft > parent._gsMaxScrollX) {
                  parent.scrollLeft = parent._gsMaxScrollX;
                }

                e = parent;
              }
            }
          }

          if (self.isThrowing && (forceZeroVelocity || self.endX > maxX || self.endX < minX || self.endY > maxY || self.endY < minY)) {
            animate(vars.inertia || vars.throwProps, forceZeroVelocity);
          }
        }

        return self;
      };

      _this2.update = function (applyBounds, sticky, ignoreExternalChanges) {
        var x = self.x,
            y = self.y;
        updateMatrix(!sticky);

        if (applyBounds) {
          self.applyBounds();
        } else {
          if (dirty && ignoreExternalChanges) {
            render(true);
          }

          syncXY(true);
        }

        if (sticky) {
          setPointerPosition(self.pointerX, self.pointerY);

          if (dirty) {
            render(true);
          }
        }

        if (self.isPressed && !sticky && (allowX && Math.abs(x - self.x) > 0.01 || allowY && Math.abs(y - self.y) > 0.01 && !rotationMode)) {
          recordStartPositions();
        }

        if (self.autoScroll) {
          _recordMaxScrolls(target.parentNode);

          checkAutoScrollBounds = self.isDragging;
          render(true);
        }

        if (self.autoScroll) {
          _removeScrollListener(target, updateScroll);

          _addScrollListener(target, updateScroll);
        }

        return self;
      };

      _this2.enable = function (type) {
        var id, i, trigger;

        if (type !== "soft") {
          i = triggers.length;

          while (--i > -1) {
            trigger = triggers[i];

            if (!_supportsPointer) {
              _addListener(trigger, "mousedown", onPress);
            }

            _addListener(trigger, "touchstart", onPress);

            _addListener(trigger, "click", onClick, true);

            if (!rotationMode && vars.cursor !== false) {
              _setStyle(trigger, "cursor", vars.cursor || _defaultCursor);
            }

            _setStyle(trigger, "touchCallout", "none");

            _setStyle(trigger, "touchAction", allowX === allowY ? "none" : vars.allowNativeTouchScrolling || vars.allowEventDefault ? "manipulation" : allowX ? "pan-y" : "pan-x");

            if (trigger.getBBox && trigger.ownerSVGElement) {
              _setStyle(trigger.ownerSVGElement, "touchAction", allowX === allowY ? "none" : vars.allowNativeTouchScrolling || vars.allowEventDefault ? "manipulation" : allowX ? "pan-y" : "pan-x");
            }

            if (!self.vars.allowContextMenu) {
              _addListener(trigger, "contextmenu", onContextMenu);
            }
          }

          _setSelectable(triggers, false);
        }

        _addScrollListener(target, updateScroll);

        enabled = true;

        if (InertiaPlugin && type !== "soft") {
          InertiaPlugin.track(target, xyMode ? "x,y" : rotationMode ? "rotation" : "top,left");
        }

        target._gsDragID = id = "d" + _lookupCount++;
        _lookup[id] = self;
        recordStartPositions();
        self.update(true);
        return self;
      };

      _this2.disable = function (type) {
        var dragging = self.isDragging,
            i,
            trigger;

        if (!rotationMode) {
          i = triggers.length;

          while (--i > -1) {
            _setStyle(triggers[i], "cursor", null);
          }
        }

        if (type !== "soft") {
          i = triggers.length;

          while (--i > -1) {
            trigger = triggers[i];

            _setStyle(trigger, "touchCallout", null);

            _setStyle(trigger, "touchAction", null);

            _removeListener(trigger, "mousedown", onPress);

            _removeListener(trigger, "touchstart", onPress);

            _removeListener(trigger, "click", onClick);

            _removeListener(trigger, "contextmenu", onContextMenu);
          }

          _setSelectable(triggers, true);

          if (touchEventTarget) {
            _removeListener(touchEventTarget, "touchcancel", onRelease);

            _removeListener(touchEventTarget, "touchend", onRelease);

            _removeListener(touchEventTarget, "touchmove", onMove);
          }

          _removeListener(_doc$1, "mouseup", onRelease);

          _removeListener(_doc$1, "mousemove", onMove);
        }

        _removeScrollListener(target, updateScroll);

        enabled = false;

        if (InertiaPlugin && type !== "soft") {
          InertiaPlugin.untrack(target, xyMode ? "x,y" : rotationMode ? "rotation" : "top,left");
        }

        _removeFromRenderQueue(render);

        self.isDragging = self.isPressed = isClicking = false;

        if (dragging) {
          _dispatchEvent(self, "dragend", "onDragEnd");
        }

        return self;
      };

      _this2.enabled = function (value, type) {
        return arguments.length ? value ? self.enable(type) : self.disable(type) : enabled;
      };

      _this2.kill = function () {
        self.isThrowing = false;
        gsap.killTweensOf(target, killProps, true);
        self.disable();
        gsap.set(triggers, {
          clearProps: "userSelect"
        });
        delete _lookup[target._gsDragID];
        return self;
      };

      if (rotationMode) {
        killProps.rotation = 1;
      } else {
        if (allowX) {
          killProps[xProp] = 1;
        }

        if (allowY) {
          killProps[yProp] = 1;
        }
      }

      _this2.enable();

      return _this2;
    }

    Draggable.register = function register(core) {
      gsap = core;

      _initCore();
    };

    Draggable.create = function create(targets, vars) {
      if (!_coreInitted) {
        _initCore(true);
      }

      return _toArray(targets).map(function (target) {
        return new Draggable(target, vars);
      });
    };

    Draggable.get = function get(target) {
      return _lookup[(_toArray(target)[0] || {})._gsDragID];
    };

    Draggable.timeSinceDrag = function timeSinceDrag() {
      return (_getTime() - _lastDragTime) / 1000;
    };

    Draggable.hitTest = function hitTest(obj1, obj2, threshold) {
      if (obj1 === obj2) {
        return false;
      }

      var r1 = _parseRect(obj1),
          r2 = _parseRect(obj2),
          top = r1.top,
          left = r1.left,
          right = r1.right,
          bottom = r1.bottom,
          width = r1.width,
          height = r1.height,
          isOutside = r2.left > right || r2.right < left || r2.top > bottom || r2.bottom < top,
          overlap,
          area,
          isRatio;

      if (isOutside || !threshold) {
        return !isOutside;
      }

      isRatio = (threshold + "").indexOf("%") !== -1;
      threshold = parseFloat(threshold) || 0;
      overlap = {
        left: Math.max(left, r2.left),
        top: Math.max(top, r2.top)
      };
      overlap.width = Math.min(right, r2.right) - overlap.left;
      overlap.height = Math.min(bottom, r2.bottom) - overlap.top;

      if (overlap.width < 0 || overlap.height < 0) {
        return false;
      }

      if (isRatio) {
        threshold *= 0.01;
        area = overlap.width * overlap.height;
        return area >= width * height * threshold || area >= r2.width * r2.height * threshold;
      }

      return overlap.width > threshold && overlap.height > threshold;
    };

    return Draggable;
  }(EventDispatcher);

  _setDefaults(Draggable.prototype, {
    pointerX: 0,
    pointerY: 0,
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    isDragging: false,
    isPressed: false
  });

  Draggable.zIndex = 1000;
  Draggable.version = "3.0.0";
  _getGSAP() && gsap.registerPlugin(Draggable);

  exports.Draggable = Draggable;
  exports.default = Draggable;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
