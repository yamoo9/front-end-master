(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{158:function(t,e,r){"use strict";r.r(e);var a=r(2),n=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"사용자와-상호작용하는-속성"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#사용자와-상호작용하는-속성","aria-hidden":"true"}},[t._v("#")]),t._v(" 사용자와 상호작용하는 속성")]),t._v(" "),r("p",[t._v("사용자와 상호작용(Interaction) 할 수 있도록 만들어 주는 속성에 대해 학습해 봅니다.")]),t._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("hidden 속성과 display:none의 차이점")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://goo.gl/m23Ngg",target:"_blank",rel:"noopener noreferrer"}},[t._v("hidden 속성과 display:none의 차이점"),r("OutboundLink")],1),t._v(" 질문에 대한 답변입니다."),r("br"),t._v("\n접근성과 관련된 내용이 포함되어 있으니 읽어보길 바랍니다. 😃")])]),t._v(" "),r("h2",{attrs:{id:"영상-강의"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#영상-강의","aria-hidden":"true"}},[t._v("#")]),t._v(" 영상 강의")]),t._v(" "),r("p",[t._v("PLAY 버튼을 눌러 영상 강의를 시청합니다.")]),t._v(" "),r("wistia",{attrs:{source:"7qtjeqqnk7"}}),t._v(" "),r("br"),t._v(" "),r("h2",{attrs:{id:"실습-자료"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#실습-자료","aria-hidden":"true"}},[t._v("#")]),t._v(" 실습 자료")]),t._v(" "),r("p",[t._v("링크 텍스트를 클릭하면 실습 자료를 다운로드 받을 수 있습니다.")]),t._v(" "),r("base-download",{attrs:{href:"user-interaction-attributes.zip"}},[t._v("user-interaction-attributes.zip")]),t._v(" "),r("br"),t._v(" "),r("h2",{attrs:{id:"참고"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#참고","aria-hidden":"true"}},[t._v("#")]),t._v(" 참고")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/hidden",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("hidden")]),t._v(" 속성"),r("OutboundLink")],1),t._v(" → MDN")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/tabindex",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("tabindex")]),t._v(" 속성"),r("OutboundLink")],1),t._v(" → MDN")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/accesskey",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("accesskey")]),t._v(" 속성"),r("OutboundLink")],1),t._v(" → MDN")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/contenteditable",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("contenteditable")]),t._v(" 속성"),r("OutboundLink")],1),t._v(" → MDN")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/draggable",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("draggable")]),t._v(" 속성"),r("OutboundLink")],1),t._v(" → MDN")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.w3.org/TR/html/editing.html#editing",target:"_blank",rel:"noopener noreferrer"}},[t._v("User Interaction"),r("OutboundLink")],1),t._v(" → HTML 5.2 표준 기술 사양")])]),t._v(" "),r("br"),t._v("\n## Q & A\n"),r("p",[t._v("수강생과 주고 받은 질문/답변 입니다. 참고하세요.")]),t._v(" "),r("base-question-answer",[r("div",{attrs:{slot:"q"},slot:"q"},[r("p",[t._v("html 처음부터 정주행 중인데 좋은 강의 감사합니다, 다만 궁금한 점이 있습니다."),r("br"),r("br"),t._v("\n마지막에 javaScript로 오른쪽 화살표 키를 눌렀을 때 이미자가 옆으로 가는데요.\n한번이 아니고 여러번 누르게 되면 여러번 누르는 값만큼 이미지가 계속해서 발생하게 됩니다.\n이건 제가 코드를 뭘 건드려서 저에게만 이런건가요? 아니면 코드가 아직 javaScript를 배우기 전이라 그렇게 하신건가요??")])]),t._v(" "),r("div",{attrs:{slot:"a"},slot:"a"},[r("p",[t._v("말씀하신 문제를 발견해주셔서 확인 후, 바로 수정했습니다.\n첨부 파일 ZIP에 변경된 코드를 반영했습니다.")]),t._v(" "),r("p",[t._v("\n  수정한 내용은 다음과 같습니다.\n")]),t._v(" "),r("pre",[r("code",[t._v("var img = null;\nfunction onKeyUp(e) {\n  if ( !img && e.key.toLowerCase() === 'arrowright' ) {\n    console.log('오른쪽 방향 화살표(→) 키를 눌렀습니다.');\n    img = new Image();\n    var target = e.target;\n    img.setAttribute('src', target.src);\n    img.setAttribute('alt', target.alt);\n    img.setAttribute('width', target.width);\n    img.setAttribute('height', target.height);\n    dropZone.appendChild(img);\n    draggableEl.style.opacity = 0;\n    draggableEl.setAttribute('tabindex', -1);\n    img.addEventListener('keyup', onKeyUp);\n    img.setAttribute('tabindex', 0);\n  }\n  if ( img && e.key.toLowerCase() === 'arrowleft' ) {\n    console.log('왼쪽 방향 화살표(←) 키를 눌렀습니다.');\n    dropZone.removeChild(img);\n    draggableEl.style.opacity = 1;\n    draggableEl.setAttribute('tabindex', 0);\n    img = null;\n  }\n}")])])])])],1)},[],!1,null,null,null);e.default=n.exports}}]);