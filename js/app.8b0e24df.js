(function(e){function t(t){for(var r,u,i=t[0],s=t[1],l=t[2],c=0,p=[];c<i.length;c++)u=i[c],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&p.push(a[u][0]),a[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"664a9f25"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var l=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(c);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/quiz-tz/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"34d7":function(e,t,n){"use strict";n("3939")},3939:function(e,t,n){},5113:function(e,t,n){"use strict";n("ca15")},"5c0b":function(e,t,n){"use strict";n("9c0c")},7842:function(e){e.exports=JSON.parse('{"title":"A you ready?","answer_blocks":[{"type":"radio","values":["Yes","No"]},{"type":"select","values":["I\'m Frontend Developer","I\'m Backend Developer","FullStack Developer","TeamLead"]},{"type":"input","values":""}]}')},"82b3":function(e,t,n){"use strict";n.r(t),n.d(t,"questions",(function(){return r}));var r=n("7842")},"9c0c":function(e,t,n){},ca15:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],u={},i=u,s=(n("5c0b"),n("2877")),l=Object(s["a"])(i,a,o,!1,null,null,null),c=l.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("FormQuize",{attrs:{questions:e.questions}})},f=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.end?e._e():n("h1",{staticClass:"mb-20"},[e._v(e._s(e.questions.title))]),e.end?n("div",[n("h2",[e._v(" Тут сообщение о том что якобы данные улетели на сервер (на самом деле нет) ")]),n("div",{staticClass:"result_data"},[n("h4",[e._v("Вот эти данные мы могли бы отправить на сервер")]),n("p",[e._v("Answer 1: "+e._s(e.resultData.answer1))]),n("p",[e._v("Answer 2: "+e._s(e.resultData.answer2))]),n("p",[e._v("Answer 3: "+e._s(e.resultData.answer3))])])]):e._l(e.questions.answer_blocks,(function(t,r){return[e.activeTab===r?n("FormQuizeCard",{key:r,attrs:{index:r,answer:t,completed:e.completed},on:{change:e.changeHandler,finish:e.finishHandler,next:function(t){e.activeTab=e.activeTab+1}}}):e._e()]}))],2)},m=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",["radio"===e.answer.type?e._l(e.answer.values,(function(t,r){return n("div",{key:r},[n("label",{attrs:{for:"input-"+r}},[e._v(e._s(t))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{type:"radio",id:"input-"+r,name:"radio-"+e._uid},domProps:{value:t,checked:e._q(e.value,t)},on:{change:function(n){e.value=t}}})])})):e._e(),"select"===e.answer.type?[n("select",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"text_input",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.value=t.target.multiple?n:n[0]}}},e._l(e.answer.values,(function(t,r){return n("option",{key:r,domProps:{value:t}},[e._v(e._s(t))])})),0)]:e._e(),"input"===e.answer.type?[n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"text_input",attrs:{type:"text"},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}})]:e._e(),e.completed?n("div",[n("button",{staticClass:"custom-btn",attrs:{disabled:!e.value},on:{click:function(t){return e.$emit("finish")}}},[e._v(" Finish ")])]):n("div",[n("button",{staticClass:"custom-btn",attrs:{disabled:!e.value},on:{click:function(t){return e.$emit("next")}}},[e._v(" Next ")])])],2)},b=[],_=(n("a9e3"),{name:"FormQuizeCardComponent",props:{index:{type:null|Number,default:null},completed:{type:Boolean,default:!1},answer:{type:Object,default:function(){return{}}}},data:function(){return{activeTab:0,value:""}},watch:{value:function(){null!==this.index&&this.$emit("change",{index:this.index,text:this.value})}}}),w=_,y=(n("5113"),Object(s["a"])(w,h,b,!1,null,"a340f65e",null)),g=y.exports,x={name:"FormQuizeComponent",components:{FormQuizeCard:g},props:{questions:{type:Object,default:function(){return{}}}},data:function(){return{activeTab:0,answers:{},end:!1,resultData:{}}},computed:{completed:function(){return this.activeTab===this.questions.answer_blocks.length-1}},methods:{changeHandler:function(e){this.answers[e.index]=e.text},finishHandler:function(){this.resultData={answer1:this.answers[0],answer2:this.answers[1],answer3:this.answers[2]},this.end=!0}}},O=x,j=(n("34d7"),Object(s["a"])(O,v,m,!1,null,"640f7f3b",null)),k=j.exports,q=r["a"].extend({name:"HomePage",components:{FormQuize:k},data:function(){return{questions:{}}},created:function(){var e=n("82b3"),t=e.questions;this.questions=t}}),C=q,P=Object(s["a"])(C,p,f,!1,null,null,null),T=P.exports;r["a"].use(d["a"]);var z=[{path:"/",name:"Home",component:T},{path:"/questions/:id",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],F=new d["a"]({mode:"history",base:"/quiz-tz/",routes:z}),D=F,S=n("2f62");r["a"].use(S["a"]);var $=new S["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:D,store:$,render:function(e){return e(c)}}).$mount("#app")}});
//# sourceMappingURL=app.8b0e24df.js.map