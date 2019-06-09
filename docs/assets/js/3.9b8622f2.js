(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{101:function(t,a,s){"use strict";s.r(a);var e={data:()=>({pass:"",isInvalid:!1}),methods:{checkPassword(){const{pass:t,keyIndex:a,toPath:s}=this.$store.getters;if(this.pass===t[a])if(this.$store.commit("authentication",a),this.pass="",s)this.$router.push(s);else{window.confirm("보호 콘텐츠 페이지로 바로 접속하셨습니다. 홈 페이지로 이동하겠습니까?")&&this.$router.push("/")}else this.isInvalid=!0,this.$refs.input.select(),window.setTimeout(()=>{this.isInvalid=!1},2500)}}},r=(s(88),s(89),s(5)),i=Object(r.a)(e,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"결재-정보"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#결재-정보","aria-hidden":"true"}},[t._v("#")]),t._v(" 💸 결재 정보")]),t._v(" "),s("div",{staticStyle:{"margin-top":"5px"}}),t._v(" "),s("p",[t._v("본 서비스의 일부 페이지는 유료 콘텐츠로 보호되고 있어,"),s("br"),t._v("\n일부 유료 콘텐츠 서비스를 이용하려면 먼저 회원 가입 절차가 필요합니다.")]),t._v(" "),s("base-img",{staticStyle:{"max-width":"260px","margin-top":"60px","margin-left":"0"},attrs:{src:"unold_icon_animation_loop.gif"}}),t._v(" "),s("h3",{attrs:{id:"step-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-1","aria-hidden":"true"}},[t._v("#")]),t._v(" STEP 1")]),t._v(" "),s("p",[t._v("회원 가입은 상단 메뉴바 왼쪽에 위치한 "),s("code",[t._v("로그인")]),t._v(" 버튼을 눌러\n로그인 페이지로 이동한 후, 로그인 폼 하단의 "),s("code",[t._v("← 회원 가입 페이지")]),t._v(" 링크를 클릭해 진행합니다. 현재 가입 방법은 "),s("strong",[t._v("이메일")]),t._v(" 또는 "),s("strong",[t._v("Google 계정")]),t._v("으로만 가입이 가능합니다.\n가입이 완료되면 '가입 완료' 됨을 알리며 자동으로 로그인 사용자 페이지로 이동됩니다.")]),t._v(" "),s("base-img",{staticStyle:{"max-width":"560px"},attrs:{src:"user-login.jpg"}}),t._v(" "),s("h3",{attrs:{id:"step-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-2","aria-hidden":"true"}},[t._v("#")]),t._v(" STEP 2")]),t._v(" "),s("p",[t._v("로그인 후 사용자 페이지를 통해 현재 접근 가능한 수강 권한 정보를 확인할 수 있습니다. 기본 권한은 "),s("code",[t._v("FREE_USER")]),t._v(" 입니다.\n"),s("code",[t._v("FREE_USER")]),t._v("는 무료 강의에 한해 제한 없이 강좌를 시청할 수 있습니다.")]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",[t._v("유료 콘텐츠는 사이드바(왼쪽) 링크 텍스트 오른쪽 옆에 "),s("span",{attrs:{title:"유료","aria-label":"유료"}},[t._v("💰")]),t._v(" 아이콘이 붙어 있습니다.")])]),t._v(" "),s("base-img",{staticStyle:{border:"1px solid rgba(45,62,133,0.2)"},attrs:{src:"user-page-free.jpg"}}),t._v(" "),s("p",[t._v("강좌를 구매한 후에는 사용자 페이지 정보가 변경됩니다. (아래 이미지 참고)")]),t._v(" "),s("base-img",{staticStyle:{border:"1px solid rgba(45,62,133,0.2)"},attrs:{src:"user-page.jpg"}}),t._v(" "),s("h2",{attrs:{id:"구매-패키지"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#구매-패키지","aria-hidden":"true"}},[t._v("#")]),t._v(" 구매 패키지")]),t._v(" "),s("p",[t._v("구매 패키지는 모든 콘텐츠 또는 일부 콘텐츠로 나눠 구매할 수 있습니다. 결재된 콘텐츠는 구매 일로부터 30일간 볼 수 있습니다.\n'구매 후 나중에 봐야지' 하는 생각 말고, '구매 즉시 열심히 공부한다'는 마음가짐이 들었을 때 과정을 시작하세요. ➪ "),s("strong",[t._v('"30일 간의 선택과 집중"')])]),t._v(" "),s("div",{staticClass:"danger custom-block"},[s("p",[s("strong",[t._v("평생 볼 수 있는 구매한 도서, 구매한 유료 강좌 잘 챙겨보시나요?")]),s("br"),t._v("\n구매하고 나서 안 볼 바에는, 제한 된 시간 안에 확고한 목표를 가지고 보는 것이 x100 낫습니다.")])]),t._v(" "),s("div",{staticStyle:{position:"relative","margin-top":"40px"}},[s("base-img",{staticClass:"aha",staticStyle:{position:"absolute",right:"0","max-width":"170px"},attrs:{src:"aha.webp"}}),t._v(" "),s("table",{staticStyle:{position:"relative","z-index":"1"}},[s("thead",[s("tr",[s("th",[t._v("배지")]),t._v(" "),s("th",[t._v("패키지")]),t._v(" "),s("th",[t._v("가격")]),t._v(" "),s("th",[t._v("설명")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("span",{staticStyle:{"font-size":"24px",position:"relative",top:"-6px"}},[t._v("🥇")])]),t._v(" "),s("td",[s("strong",[t._v("ALL_PASS")])]),t._v(" "),s("td",[s("strong",[t._v("50,000원")])]),t._v(" "),s("td",[s("strong",[t._v("제약 없이 모든 콘텐츠를 볼 수 있습니다.")]),t._v(" (권장)")])]),t._v(" "),s("tr",[s("td",[s("span",{staticStyle:{"font-size":"24px",position:"relative",top:"-6px"}},[t._v("🥈")])]),t._v(" "),s("td",[t._v("HTML_CSS_RWD_PASS")]),t._v(" "),s("td",[t._v("30,000원")]),t._v(" "),s("td",[t._v("구조 / 표현 / 반응형 디자인 콘텐츠를 볼 수 있습니다.")])]),t._v(" "),s("tr",[s("td",[s("span",{staticStyle:{"font-size":"24px",position:"relative",top:"-6px"}},[t._v("🥉")])]),t._v(" "),s("td",[t._v("JS_ES6_REST_PASS")]),t._v(" "),s("td",[t._v("40,000원")]),t._v(" "),s("td",[t._v("인터랙션 디자인 이후 모든 콘텐츠를 볼 수 있습니다.")])]),t._v(" "),s("tr",[s("td",[s("span",{staticStyle:{"font-size":"24px",position:"relative",top:"-6px"}},[t._v("🏅")])]),t._v(" "),s("td",[t._v("FREE_USER")]),t._v(" "),s("td",[t._v("무료")]),t._v(" "),s("td",[t._v("무료 강의에 한해 시청 가능합니다.")])])])])],1),t._v(" "),s("h3",{attrs:{id:"결재-qr-코드-이미지"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#결재-qr-코드-이미지","aria-hidden":"true"}},[t._v("#")]),t._v(" 결재 QR 코드 이미지")]),t._v(" "),s("p",[t._v("결재는 카카오톡 앱 QR 코드 리더를 사용해 아래 이미지를 스캔합니다.\n"),s("br"),t._v("자세한 사용법은 "),s("a",{attrs:{href:"#%EA%B2%B0%EC%9E%AC-%EB%B0%A9%EB%B2%95"}},[t._v("결재 방법")]),t._v("을 참고하세요.")]),t._v(" "),s("base-img",{staticStyle:{"max-width":"300px","margin-left":"0"},attrs:{src:"pay.jpg"}}),t._v(" "),s("h2",{attrs:{id:"결재-방법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#결재-방법","aria-hidden":"true"}},[t._v("#")]),t._v(" 결재 방법")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.kakaocorp.com/service/KakaoTalk",target:"_blank",rel:"noopener noreferrer"}},[t._v("KakaoTalk 앱"),s("OutboundLink")],1),t._v("을 이용해 결재할 수 있습니다. 아래 이미지를 참고해 QR 코드 스캔 후, 결재를 처리합니다.")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",[t._v("결재 '보내기' 전에 메시지 입력 내용은 구매 할 "),s("a",{attrs:{href:"#%EA%B5%AC%EB%A7%A4-%ED%8C%A8%ED%82%A4%EC%A7%80"}},[t._v("콘텐츠 패키지")]),t._v(", 구매자 이메일 정보를 입력해주세요.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ALL_PASS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" 구매자 이메일 주소\n")])])])]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",[t._v("구매 후 승인 절차에 문제가 있을 경우, 이메일(yamoo9@naver.com)로 연락주시길 바랍니다.")])]),t._v(" "),s("base-img",{attrs:{src:"pay-system.jpg"}})],1)},[],!1,null,"55ceff79",null);a.default=i.exports},61:function(t,a,s){},62:function(t,a,s){},88:function(t,a,s){"use strict";var e=s(61);s.n(e).a},89:function(t,a,s){"use strict";var e=s(62);s.n(e).a}}]);