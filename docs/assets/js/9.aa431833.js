(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{104:function(t,r,e){"use strict";var a=e(73);e.n(a).a},121:function(t,r,e){"use strict";e.r(r);var a={name:"IframeWrapper",props:{src:{type:String,required:!0},ratio:{type:String,default:"16:9"}},computed:{ratioClass(){const t=this.ratio.split(":");return{"padding-top":`${t[1]/t[0]*100}%`}}}},i=(e(104),e(6)),s=Object(i.a)(a,function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"iframe-wrapper",style:this.ratioClass},[r("iframe",{attrs:{src:this.src,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])},[],!1,null,"6013f648",null);r.default=s.exports},73:function(t,r,e){}}]);