(window.webpackJsonp=window.webpackJsonp||[]).push([[2],Array(20).concat([function(t,e,s){"use strict";s.d(e,"d",function(){return n}),s.d(e,"a",function(){return a}),s.d(e,"i",function(){return r}),s.d(e,"f",function(){return l}),s.d(e,"g",function(){return c}),s.d(e,"h",function(){return u}),s.d(e,"b",function(){return h}),s.d(e,"e",function(){return p}),s.d(e,"k",function(){return d}),s.d(e,"l",function(){return f}),s.d(e,"c",function(){return g}),s.d(e,"j",function(){return m});const n=/#.*$/,i=/\.(md|html)$/,a=/\/$/,r=/^(https?:|mailto:|tel:)/;function o(t){return decodeURI(t).replace(n,"").replace(i,"")}function l(t){return r.test(t)}function c(t){return/^mailto:/.test(t)}function u(t){return/^tel:/.test(t)}function h(t){if(l(t))return t;const e=t.match(n),s=e?e[0]:"",i=o(t);return a.test(i)?t:i+".html"+s}function p(t,e){const s=t.hash,i=function(t){const e=t.match(n);if(e)return e[0]}(e);return(!i||s===i)&&o(t.path)===o(e)}function d(t,e,s){s&&(e=function(t,e,s){const n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;const i=e.split("/");s&&i[i.length-1]||i.pop();const a=t.replace(/^\//,"").split("/");for(let t=0;t<a.length;t++){const e=a[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,s));const n=o(e);for(let e=0;e<t.length;e++)if(o(t[e].regularPath)===n)return Object.assign({},t[e],{type:"page",path:h(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function f(t,e,s,n){const{pages:i,themeConfig:a}=s,r=n&&a.locales&&a.locales[n]||a;if("auto"===(t.frontmatter.sidebar||r.sidebar||a.sidebar))return function(t){const e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const o=r.sidebar||a.sidebar;if(o){const{base:t,config:s}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const n in e)if(0===(s=t,/(\.html|\/)$/.test(s)?s:s+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var s;return{}}(e,o);return s?s.map(e=>(function t(e,s,n,i=1){if("string"==typeof e)return d(s,e,n);if(Array.isArray(e))return Object.assign(d(s,e[0],n),{title:e[1]});{i>3&&console.error("[vuepress] detected a too deep nested sidebar group.");const a=e.children||[];return 0===a.length&&e.path?Object.assign(d(s,e.path,n),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:a.map(e=>t(e,s,n,i+1)),collapsable:!1!==e.collapsable}}})(e,i,t)):[]}return[]}function g(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function m(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},,,,,,,,,,function(t,e,s){"use strict";s.r(e);var n=s(20),i={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:s(43).a},beforeCreate(){this.$options.components.SidebarLinks=s(42).default},methods:{isActive:n.e}},a=(s(52),s(2)),r=Object(a.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?s("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[s("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?s("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):s("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[s("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?s("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),s("DropdownTransition",[t.open||!t.collapsable?s("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,sidebarDepth:t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)},[],!1,null,null,null).exports;function o(t,e,s,n){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:n,"sidebar-link":!0}},s)}function l(t,e,s,i,a,r=1){return!e||r>a?null:t("ul",{class:"sidebar-sub-headers"},e.map(e=>{const c=Object(n.e)(i,s+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,s+"#"+e.slug,e.title,c),l(t,e.children,s,i,a,r+1)])}))}var c={functional:!0,props:["item","sidebarDepth"],render(t,{parent:{$page:e,$site:s,$route:i,$themeConfig:a,$themeLocaleConfig:r},props:{item:c,sidebarDepth:u}}){const h=Object(n.e)(i,c.path),p="auto"===c.type?h||c.children.some(t=>Object(n.e)(i,c.basePath+"#"+t.slug)):h,d=o(t,c.path,c.title||c.path,p),f=e.frontmatter.sidebarDepth||u||r.sidebarDepth||a.sidebarDepth,g=null==f?1:f,m=r.displayAllHeaders||a.displayAllHeaders;if("auto"===c.type)return[d,l(t,c.children,c.basePath,i,g)];if((p||m)&&c.headers&&!n.d.test(c.path)){return[d,l(t,Object(n.c)(c.headers),c.path,i,g)]}return d}};s(53);var u={name:"SidebarLinks",components:{SidebarGroup:r,SidebarLink:Object(a.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:()=>({openGroupIndex:0}),created(){this.refreshIndex()},watch:{$route(){this.refreshIndex()}},methods:{refreshIndex(){const t=function(t,e){for(let s=0;s<e.length;s++){const i=e[s];if("group"===i.type&&i.children.some(e=>"page"===e.type&&Object(n.e)(t,e.path)))return s}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return Object(n.e)(this.$route,t.regularPath)}}},h=Object(a.a)(u,function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.items.length?s("ul",{staticClass:"sidebar-links"},t._l(t.items,function(e,n){return s("li",{key:n},["group"===e.type?s("SidebarGroup",{attrs:{item:e,open:n===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(n)}}}):s("SidebarLink",{attrs:{sidebarDepth:t.sidebarDepth,item:e}})],1)}),0):t._e()},[],!1,null,null,null);e.default=h.exports},function(t,e,s){"use strict";var n={name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}},i=(s(47),s(2)),a=Object(i.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)},[],!1,null,null,null);e.a=a.exports},function(t,e,s){"use strict";var n=s(21);s.n(n).a},function(t,e,s){"use strict";var n=s(22);s.n(n).a},function(t,e,s){"use strict";var n=s(23);s.n(n).a},function(t,e,s){"use strict";var n=s(24);s.n(n).a},function(t,e,s){"use strict";var n=s(25);s.n(n).a},function(t,e,s){"use strict";var n=s(26);s.n(n).a},function(t,e,s){"use strict";var n=s(27);s.n(n).a},function(t,e,s){"use strict";var n=s(28);s.n(n).a},function(t,e,s){"use strict";var n=s(29);s.n(n).a},function(t,e,s){"use strict";var n=s(30);s.n(n).a},function(t,e,s){"use strict";var n=s(31);s.n(n).a},function(t,e,s){"use strict";var n=s(32);s.n(n).a},,,,,,,,,,function(t,e,s){"use strict";var n=s(20),i={props:{item:{required:!0}},computed:{link(){return Object(n.b)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link}},methods:{isExternal:n.f,isMailto:n.g,isTel:n.h}},a=s(2),r=Object(a.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isExternal(t.link)?s("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),s("OutboundLink")],1):s("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])},[],!1,null,null,null).exports,o={components:{NavLink:r},computed:{data(){return this.$page.frontmatter},actionLink(){return{link:this.data.actionLink,text:this.data.actionText}}}},l=(s(44),Object(a.a)(o,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[s("header",{staticClass:"hero"},[t.data.heroImage?s("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?s("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),s("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?s("p",{staticClass:"action"},[s("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?s("div",{staticClass:"features"},t._l(t.data.features,function(e,n){return s("div",{key:n,staticClass:"feature"},[s("h2",[t._v(t._s(e.title))]),t._v(" "),s("p",[t._v(t._s(e.details))])])}),0):t._e(),t._v(" "),s("Content",{staticClass:"custom"}),t._v(" "),t.data.footer?s("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)},[],!1,null,null,null).exports),c={data:()=>({query:"",focused:!1,focusIndex:0}),computed:{showSuggestions(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions(){const t=this.query.trim().toLowerCase();if(!t)return;const{pages:e}=this.$site,s=this.$localePath,n=e=>e.title&&e.title.toLowerCase().indexOf(t)>-1,i=[];for(let t=0;t<e.length&&!(i.length>=5);t++){const a=e[t];if(this.getPageLocalePath(a)===s&&this.isSearchable(a))if(n(a))i.push(a);else if(a.headers)for(let t=0;t<a.headers.length&&!(i.length>=5);t++){const e=a.headers[t];n(e)&&i.push(Object.assign({},a,{path:a.path+"#"+e.slug,header:e}))}}return i},alignRight(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath(t){for(const e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable(t){let e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter(e=>t.path.match(e)).length>0},onUp(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus(t){this.focusIndex=t},unfocus(){this.focusIndex=-1}}},u=(s(45),Object(a.a)(c,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-box"},[s("input",{class:{focused:t.focused},attrs:{"aria-label":"Search",autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?s("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,function(e,n){return s("li",{staticClass:"suggestion",class:{focused:n===t.focusIndex},on:{mousedown:function(e){return t.go(n)},mouseenter:function(e){return t.focus(n)}}},[s("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[s("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?s("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])}),0):t._e()])},[],!1,null,null,null).exports),h=(s(46),Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[s("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[s("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])},[],!1,null,null,null).exports),p={components:{NavLink:r,DropdownTransition:s(43).a},data:()=>({open:!1}),props:{item:{required:!0}},methods:{toggle(){this.open=!this.open}}},d=(s(48),{components:{NavLink:r,DropdownLink:Object(a.a)(p,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[s("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[s("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),s("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),s("DropdownTransition",[s("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,function(e,n){return s("li",{key:e.link||n,staticClass:"dropdown-item"},["links"===e.type?s("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?s("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,function(t){return s("li",{key:t.link,staticClass:"dropdown-subitem"},[s("NavLink",{attrs:{item:t}})],1)}),0):s("NavLink",{attrs:{item:e}})],1)}),0)])],1)},[],!1,null,null,null).exports},computed:{userNav(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,s=this.$router.options.routes,n=this.$site.themeConfig.locales||{},i={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(t).map(i=>{const a=t[i],r=n[i]&&n[i].label||a.lang;let o;return a.lang===this.$lang?o=e:(o=e.replace(this.$localeConfig.path,i),s.some(t=>t.path===o)||(o=i)),{text:r,link:o}})};return[...this.userNav,i]}return this.userNav},userLinks(){return(this.nav||[]).map(t=>Object.assign(Object(n.j)(t),{items:(t.items||[]).map(n.j)}))},repoLink(){const{repo:t}=this.$site.themeConfig;if(t)return/^https?:/.test(t)?t:`https://github.com/${t}`},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^\/]+/)[0],e=["GitHub","GitLab","Bitbucket"];for(let s=0;s<e.length;s++){const n=e[s];if(new RegExp(n,"i").test(t))return n}return"Source"}}}),f=(s(49),Object(a.a)(d,function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.userLinks.length||t.repoLink?s("nav",{staticClass:"nav-links"},[t._l(t.userLinks,function(t){return s("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?s("DropdownLink",{attrs:{item:t}}):s("NavLink",{attrs:{item:t}})],1)}),t._v(" "),t.repoLink?s("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),s("OutboundLink")],1):t._e()],2):t._e()},[],!1,null,null,null).exports);function g(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var m={components:{SidebarButton:h,NavLinks:f,SearchBox:u,AlgoliaSearchBox:{}},data:()=>({linksWrapMaxWidth:null}),mounted(){const t=parseInt(g(this.$el,"paddingLeft"))+parseInt(g(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)},computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},v=(s(50),Object(a.a)(m,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"navbar"},[s("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),s("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?s("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?s("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),s("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?s("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?s("SearchBox"):t._e(),t._v(" "),s("NavLinks",{staticClass:"can-hide"})],1)],1)},[],!1,null,null,null).exports);function b(t,e,s){const n=[];!function t(e,s){for(let n=0,i=e.length;n<i;n++)"group"===e[n].type?t(e[n].children||[],s):s.push(e[n])}(e,n);for(let e=0;e<n.length;e++){const i=n[e];if("page"===i.type&&i.path===decodeURIComponent(t.path))return n[e+s]}}var _={props:["sidebarItems"],computed:{lastUpdated(){return this.$page.lastUpdated},lastUpdatedText(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev(){const t=this.$page.frontmatter.prev;return!1===t?void 0:t?Object(n.k)(this.$site.pages,t,this.$route.path):(e=this.$page,s=this.sidebarItems,b(e,s,-1));var e,s},next(){const t=this.$page.frontmatter.next;return!1===t?void 0:t?Object(n.k)(this.$site.pages,t,this.$route.path):(e=this.$page,s=this.sidebarItems,b(e,s,1));var e,s},editLink(){if(!1===this.$page.frontmatter.editLink)return;const{repo:t,editLinks:e,docsDir:s="",docsBranch:n="master",docsRepo:i=t}=this.$site.themeConfig;return i&&e&&this.$page.relativePath?this.createEditLink(t,i,s,n,this.$page.relativePath):void 0},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink(t,e,s,i,a){if(/bitbucket.org/.test(t)){return(n.i.test(e)?e:t).replace(n.a,"")+"/src"+`/${i}/`+(s?s.replace(n.a,"")+"/":"")+a+`?mode=edit&spa=0&at=${i}&fileviewer=file-view-default`}return(n.i.test(e)?e:`https://github.com/${e}`).replace(n.a,"")+"/edit"+`/${i}/`+(s?s.replace(n.a,"")+"/":"")+a}}},k=(s(51),Object(a.a)(_,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"page"},[t._t("top"),t._v(" "),s("Content"),t._v(" "),s("footer",{staticClass:"page-edit"},[t.editLink?s("div",{staticClass:"edit-link"},[s("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),s("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?s("div",{staticClass:"last-updated"},[s("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),s("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?s("div",{staticClass:"page-nav"},[s("p",{staticClass:"inner"},[t.prev?s("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?s("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?s("span",{staticClass:"next"},[t.next?s("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null).exports),$={name:"Sidebar",components:{SidebarLinks:s(42).default,NavLinks:f},props:["items"]},C=(s(54),{components:{Home:l,Page:k,Sidebar:Object(a.a)($,function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)},[],!1,null,null,null).exports,Navbar:v},data:()=>({isSidebarOpen:!1}),computed:{shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object(n.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){this.$router.afterEach(()=>{this.isSidebarOpen=!1})},methods:{toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,s=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(s)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),x=(s(55),Object(a.a)(C,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?s("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),s("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),s("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.home?s("Home"):s("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)},[],!1,null,null,null));e.a=x.exports}])]);