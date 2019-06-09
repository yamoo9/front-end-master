(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{103:function(t,s,a){"use strict";a.r(s);var e=a(11),r={name:"AuthUser",data:()=>({user:null,name:"",email:"",password:"",willPassword:"",willCheckPassword:"",photo:""}),mounted(){this.profileName||(window.setTimeout(()=>{this.$snotify.warning("로그인 된 사용자만 접근 가능한 페이지입니다.",{showProgressBar:!1,position:"rightTop"})},100),this.$router.push("/"))},computed:{...Object(e.c)(["authUser"]),profileName(){return this.authUser.displayName},profilePhoto(){return this.authUser.photoURL},passTicket(){switch(this.authUser.pass){case"all":return"🥇 All_PASS";case"html-css-rwd":return"🥈 HTML_CSS_RWD_PASS";case"js-es6-rest":return"🥉 JS_ES6_REST_PASS";default:return"🏅 FREE_USER"}},passTicketMessage(){const t=this.profileName;switch(this.authUser.pass){case"all":return`${t}님은 모든 강의를시청할 수 있습니다.`;case"html-css-rwd":return`${t}님은 HTML / CSS / RWD 강의를 시청할 수 있습니다.`;case"js-es6-rest":return`${t}님은 JavaScript / ES6 / REST 강의를 시청할 수 있습니다.`;default:return`${t}님은 무료 강의만 시청할 수 있습니다.`}},dayLeft(){const{expirationDate:t,paymentDate:s}=this.authUser,a=Number(s.split(".")[0]),e=Number(s.split(".")[1]),r=new Date(a,e,0).getDate(),i=Number(t.split(".")[1]),l=Number(t.split(".")[2]),o=this.$moment().format("YYYY.MM.DD"),n=Number(o.split(".")[1]),d=Number(o.split(".")[2]);return i===n?l-d:l+(r-d)}},watch:{authUser:{handler(t,s){const{displayName:a,email:e}=t;this.name=a,this.email=e},immediate:!0}},methods:{}},i=(a(88),a(5)),l=Object(i.a)(r,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"안녕하세요-profilename-님"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#안녕하세요-profilename-님","aria-hidden":"true"}},[t._v("#")]),t._v(" 안녕하세요! "+t._s(t.profileName)+" 님")]),t._v(" "),a("div",{staticClass:"row user-info"},[a("div",{staticClass:"col-md-8 mt-2 pb-2",attrs:{role:"group"}},[a("img",{staticClass:"profilePhoto float-left img-thumbnail rounded-circle mr-4",attrs:{src:t.profilePhoto,alt:""}}),t._v(" "),a("p",{staticStyle:{"padding-top":"1.4rem"}},[a("span",{staticClass:"badge badge-pill badge-primary"},[t._v(t._s(t.passTicket))]),t._v(" "),a("span",{staticClass:"mt-2",staticStyle:{display:"block"}},[t._v(t._s(t.passTicketMessage))])])]),t._v(" "),a("div",{staticClass:"left-area col-md-4 d-flex align-items-center justify-content-center"},[t.dayLeft>0?a("p",[t._v("남은 시청 기간 "),a("span",{staticClass:"badge badge-light"},[t._v(t._s(t.dayLeft))]),t._v(" 일")]):a("p",[t._v("무료 강의 시청 기간 "),a("span",{staticClass:"badge badge-light"},[t._v("∞")])])])]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"가입-정보"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#가입-정보","aria-hidden":"true"}},[t._v("#")]),t._v(" 가입 정보")]),t._v(" "),a("p",[t._v("가입 정보를 변경 하려면 변경 할 내용을 입력한 후, "),a("code",[t._v("저장")]),t._v(" 버튼을 누릅니다.")]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",[t._v("수정 할 경우, ✓ 항목은 반드시 입력해야 합니다.")])]),t._v(" "),a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"inputName"}},[t._v("이름 "),a("span",{attrs:{"aria-required":"true",title:"필수 입력 항목"}},[t._v("✓")])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",id:"inputName","aria-describedby":"user-name",placeholder:"이름 입력"},domProps:{value:t.name},on:{input:function(s){s.target.composing||(t.name=s.target.value)}}}),t._v(" "),a("small",{staticClass:"form-text text-muted",attrs:{id:"user-name"}},[t._v("UI 화면에 표시되는 사용자 이름 입니다.")])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"inputEmail"}},[t._v("이메일 "),a("span",{attrs:{"aria-required":"true",title:"필수 입력 항목"}},[t._v("✓")])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail","aria-describedby":"user-email",placeholder:"이메일"},domProps:{value:t.email},on:{input:function(s){s.target.composing||(t.email=s.target.value)}}}),t._v(" "),a("small",{staticClass:"form-text text-muted",attrs:{id:"user-email"}},[t._v("현재 등록 된 이메일 입니다.")])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"inputPassword"}},[t._v("패스워드 "),a("span",{attrs:{"aria-required":"true",title:"필수 입력 항목"}},[t._v("✓")])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword","aria-describedby":"current-password",placeholder:"패스워드"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}}),t._v(" "),a("small",{staticClass:"form-text text-muted",attrs:{id:"current-password"}},[t._v("수정 변경하려면 등록 된 패스웓드를 입력합니다.")])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"inputChangePassword"}},[t._v("패스워드 수정")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.willPassword,expression:"willPassword"}],staticClass:"form-control",attrs:{type:"password",id:"inputChangePassword","aria-describedby":"will-password",placeholder:"변경 할 패스워드"},domProps:{value:t.willPassword},on:{input:function(s){s.target.composing||(t.willPassword=s.target.value)}}}),t._v(" "),a("small",{staticClass:"form-text text-muted",attrs:{id:"will-password"}},[t._v("변경 할 패스웓드를 입력합니다.")])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"inputCheckChangePassword"}},[t._v("패스워드 수정 (확인)")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.willCheckPassword,expression:"willCheckPassword"}],staticClass:"form-control",attrs:{type:"password",id:"inputCheckChangePassword","aria-describedby":"will-check-password",placeholder:"변경 할 패스워드 (확인)"},domProps:{value:t.willCheckPassword},on:{input:function(s){s.target.composing||(t.willCheckPassword=s.target.value)}}}),t._v(" "),a("small",{staticClass:"form-text text-muted",attrs:{id:"will-check-password"}},[t._v("변경 할 패스웓드를 다시 한 번 입력합니다.")])]),t._v(" "),a("button",{staticClass:"btn btn-primary mt-3",attrs:{type:"submit"}},[t._v("저장")])])])},[],!1,null,"6dfca0d2",null);s.default=l.exports},60:function(t,s,a){},88:function(t,s,a){"use strict";var e=a(60);a.n(e).a}}]);