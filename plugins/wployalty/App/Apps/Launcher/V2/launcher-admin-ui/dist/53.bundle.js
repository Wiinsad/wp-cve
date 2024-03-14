/*! For license information please see 53.bundle.js.LICENSE.txt */
(self.webpackChunkreact_wordpress=self.webpackChunkreact_wordpress||[]).push([[53],{9728:(t,e,r)=>{"use strict";r.d(e,{Z:()=>o});var n=r(7294);const o=function(t){var e=t.bgColor,r=void 0===e?"bg-blue_primary":e,o=t.textStyle,i=void 0===o?"text-white text-xs 2xl:text-sm_14_l_20 ":o,a=t.padding,c=void 0===a?"p-3.5":a,l=(t.minwidth,t.children),u=t.icon,s=void 0===u?null:u,f=t.others,d=void 0===f?"":f,p=t.click,m=void 0===p?null:p,h=t.outline,y=void 0!==h&&h,v=t.outlineStyle,g=void 0===v?"border-primary":v,x=t.disabled,b=void 0!==x&&x,w=t.title,E=void 0===w?"":w,_=t.shadow,S=void 0!==_&&_,k=t.id,L=void 0===k?L:k,N=t.extraStyle,j=y?"border ".concat(g):"";return n.createElement("button",{id:L,className:"antialiased font-medium no-underline  flex items-center justify-center space-x-2 outline-none tracking-normal whitespace-nowrap wp-loyalty-button ".concat(S&&"hover:shadow-lg ","\n             ").concat(r," ").concat(i," ").concat(c," ").concat(d,"\n              ").concat(j," cursor-pointer min-w-max rounded-md ").concat(b?"not-allowed":"cursor-pointer"),onClick:b?function(){}:m,title:E,style:{background:"".concat(N," ")}},s,n.createElement("span",{style:{marginTop:"2px"},className:"text-xs 2xl:text-sm font-semibold  "},l))}},2563:(t,e,r)=>{"use strict";r.d(e,{Z:()=>i});var n=r(7294),o=r(3972);const i=function(t){var e=t.icon,r=t.fontSize,i=void 0===r?"text-sm 2xl:text-md":r,a=t.fontWeight,c=void 0===a?"font-medium":a,l=t.color,u=t.click,s=t.opactity,f=t.width,d=void 0===f?"":f,p=t.show,m=void 0===p?"":p,h=t.extraStyles,y=void 0===h?"":h,v=n.useContext(o.ko).commonState;return l=["",void 0].includes(l)?v.design.colors.theme.primary:l,n.createElement("i",{onClick:u,style:{color:"".concat(l)},className:"wlr wlrf-".concat(e," cursor-pointer  ").concat(i," ").concat(m," ").concat(d,"\n   ").concat(c," ").concat(y,"\n   ").concat(s," \n    ")})}},6693:(t,e,r)=>{"use strict";r.d(e,{Z:()=>o});var n=r(7294);const o=function(t){var e=t.children,r=t.title;return n.createElement("div",{className:"bg-white border border-t-0 border-r-0 border-l-0\n         border-b-card_border px-2.5 2xl:px-4 2xl:py-2.5 py-2 flex \n         flex-col  gap-y-1.5 xl:gap-y-2 2xl:gap-y-2.5"},n.createElement("p",{className:"text-dark text-xs 2xl:text-sm uppercase font-bold tracking-[0.04em]"},r),e)}},7543:(t,e,r)=>{"use strict";r.d(e,{Z:()=>a});var n=r(7294),o=r(9728),i=r(3972);const a=function(t){var e=t.title,r=t.resetAction,a=t.saveAction,c=n.useContext(i.Gr),l=n.useContext(i.ko).appState;return n.createElement("div",{className:"flex items-center justify-between gap-2 w-full"},n.createElement("p",{className:"text-dark font-bold text-md tracking-[1.28px]"},e),n.createElement("div",{className:"flex   items-center gap-2.5"},n.createElement(o.Z,{icon:n.createElement("i",{className:"wlr wlrf-back text-md font-medium color-important"}),outline:!0,bgColor:"bg-white",outlineStyle:"border-light-border",textStyle:"text-light",click:function(){return location.replace(l.common.back_to_apps_url)}},c.common.back_to_loyalty),n.createElement(o.Z,{icon:n.createElement("i",{className:"wlr wlrf-reset text-md font-medium color-important"}),outline:!0,bgColor:"bg-white",outlineStyle:"border-light-border",textStyle:"text-light",click:r},c.common.reset),n.createElement(o.Z,{icon:n.createElement("i",{className:"wlr wlrf-save text-md font-medium color-important "}),click:a},c.common.save)))}},5183:(t,e,r)=>{"use strict";r.d(e,{Z:()=>i});var n=r(7294),o=r(3972);const i=function(t){var e=n.useContext(o.Gr);return n.createElement("div",{className:"flex items-center justify-between w-full py-4 px-5 rounded-t-lg border border-x-0 border-t-0 border-b-card_border"},n.createElement("div",{className:"flex items-center gap-x-2"},n.createElement("span",{className:"rounded-full h-3 w-3 bg-redd "}),n.createElement("span",{className:"rounded-full h-3 w-3 bg-yellow-400 "}),n.createElement("span",{className:"rounded-full h-3 w-3 bg-active_green "})),n.createElement("p",{className:"text-sm xl:text-md font-medium text-primary"},e.common.dummy_preview_message))}},7061:(t,e,r)=>{var n=r(8698).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},l=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function d(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),c=new j(n||[]);return a(i,"_invoke",{value:S(t,r,c)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var m={};function h(){}function y(){}function v(){}var g={};f(g,l,(function(){return this}));var x=Object.getPrototypeOf,b=x&&x(x(O([])));b&&b!==r&&i.call(b,l)&&(g=b);var w=v.prototype=h.prototype=Object.create(g);function E(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,a,c,l){var u=p(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==n(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,l)}),(function(t){r("throw",t,c,l)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return r("throw",t,c,l)}))}l(u.arg)}var o;a(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function S(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=p(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function k(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var o=p(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,m):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function O(t){if(t){var e=t[l];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:P}}function P(){return{value:void 0,done:!0}}return y.prototype=v,a(w,"constructor",{value:v,configurable:!0}),a(v,"constructor",{value:y,configurable:!0}),y.displayName=f(v,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,f(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},E(_.prototype),f(_.prototype,u,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new _(d(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(w),f(w,s,"Generator"),f(w,l,(function(){return this})),f(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),l=i.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},8698:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},4687:(t,e,r)=>{var n=r(7061)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},5861:(t,e,r)=>{"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,l,"next",t)}function l(t){n(a,o,i,c,l,"throw",t)}c(void 0)}))}}r.d(e,{Z:()=>o})},4572:(t,e,r)=>{"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===n(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,{Z:()=>o})}}]);