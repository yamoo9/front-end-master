(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{168:function(a,t,s){"use strict";s.r(t);var e=s(5),n=Object(e.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"babel-💰"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel-💰","aria-hidden":"true"}},[a._v("#")]),a._v(" Babel 💰")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://babeljs.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("바벨(Babel)"),s("OutboundLink")],1),a._v("은 모던 JavaScript를 오늘 날 바로 사용할 수 있도록 만들어주는 트랜스파일러(Transpiler) 입니다.")]),a._v(" "),s("iframe-wrapper",{attrs:{src:"//slides.com/yamoo9/babel/embed?style=dark#/0/1"}}),a._v(" "),s("h2",{attrs:{id:"실습"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#실습","aria-hidden":"true"}},[a._v("#")]),a._v(" 실습")]),a._v(" "),s("h3",{attrs:{id:"_1-babel-로더-코어-프리셋-설치"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-babel-로더-코어-프리셋-설치","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. Babel 로더, 코어, 프리셋 설치")]),a._v(" "),s("p",[s("router-link",{attrs:{to:"/lecture/webpack.html"}},[a._v("Webpack")]),a._v("에서 Babel을 사용하려면 "),s("code",[a._v("babel-loader")]),a._v("를 설치해야 합니다.\n추가적으로 "),s("code",[a._v("@babel/core")]),a._v(", "),s("code",[a._v("@babel/preset-env")]),a._v("로 함께 설치합니다.")],1),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" babel-loader @babel/core @babel/preset-env -D\n")])])]),s("h3",{attrs:{id:"_2-로더-설정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-로더-설정","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. 로더 설정")]),a._v(" "),s("p",[a._v("설치한 "),s("code",[a._v("babel-loader")]),a._v("를 Webpack에 설정합니다.")]),a._v(" "),s("blockquote",[s("p",[a._v("webpack.config.js")])]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ...")]),a._v("\n  module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    rules"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[a._v("/\\.m?js$/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        exclude"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[a._v("/node_modules/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        use"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n          loader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'babel-loader'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n          options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            presets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'@babel/preset-env'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"_3-babel-트랜스파일링-결과"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-babel-트랜스파일링-결과","aria-hidden":"true"}},[a._v("#")]),a._v(" 3. Babel 트랜스파일링 결과")]),a._v(" "),s("p",[s("code",[a._v("bundle")]),a._v(" 명령을 수행하면 번들링 된 코드가 ES6 → ES5 코드로 변경된 결과를 확인할 수 있습니다.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" bundle\n")])])]),s("h2",{attrs:{id:"참고"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#참고","aria-hidden":"true"}},[a._v("#")]),a._v(" 참고")]),a._v(" "),s("p",[a._v("보다 자세한 사용법은 "),s("a",{attrs:{href:"https://webpack.js.org/loaders/babel-loader/",target:"_blank",rel:"noopener noreferrer"}},[a._v("babel-loader 문서"),s("OutboundLink")],1),a._v("를 참고하세요.")]),a._v(" "),s("iframe-wrapper",{attrs:{src:"https://webpack.js.org/loaders/babel-loader/"}})],1)},[],!1,null,null,null);t.default=n.exports}}]);