(()=>{var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequire94c2;function a(e,n){for(var t=[],r=[],a=arguments.length;a-- >2;)t.push(arguments[a]);for(;t.length;){var o=t.pop();if(o&&o.pop)for(a=o.length;a--;)t.push(o[a]);else null!=o&&!0!==o&&!1!==o&&r.push(o)}return"function"==typeof e?e(n||{},r):{nodeName:e,attributes:n||{},children:r,key:n&&n.key}}null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var a={id:e,exports:{}};return n[e]=a,r.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){t[e]=n},e.parcelRequire94c2=r),r.register("cueuT",(function(e,n){"use strict";e.exports=function(e,n,t,r){e=(e+"").replace(/[^0-9+\-Ee.]/g,"");var a=isFinite(+e)?+e:0,o=isFinite(+n)?Math.abs(n):0,i=void 0===r?",":r,l=void 0===t?".":t,c="";return c=(o?function(e,n){if(-1===(""+e).indexOf("e"))return+(Math.round(e+"e+"+n)+"e-"+n);var t=(""+e).split("e"),r="";return+t[1]+n>0&&(r="+"),(+(Math.round(+t[0]+"e"+r+(+t[1]+n))+"e-"+n)).toFixed(n)}(a,o).toString():""+Math.round(a)).split("."),c[0].length>3&&(c[0]=c[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,i)),(c[1]||"").length<o&&(c[1]=c[1]||"",c[1]+=new Array(o-c[1].length+1).join("0")),c.join(l)}}));var o,i=(o=r("cueuT"))&&o.__esModule?o:{default:o},l={};Object.defineProperty(l,"__esModule",{value:!0}),l.tnOnCreate=l.createTnOnRemove=l.TextInput=l.TextArea=l.Select=l.Range=l.RadioButton=l.InputGroup=l.Image=l.FileInput=l.File=l.Echo=l.Control=l.Checkbox=l.Button=void 0;var c=["name","extensions","onchange","multiple","invalid","inputProps","xclass","inputXclass"],s=["url","name","loading","ondelete","deleteText","index","readonly","tnOnRemove"],u=["type","disabled","xclass","onclick","name"];function d(){return d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},d.apply(this,arguments)}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var f=function(e){e.classList.add("wq-is-created"),e.classList.add("wq-is-run"),e.classList.add("wq-for-created"),window.setTimeout((function(){e.classList.remove("wq-is-created");var n=function n(t){t.target===e&&(e.classList.remove("wq-is-run"),e.classList.remove("wq-for-created"),e.removeEventListener("transitionend",n))};e.addEventListener("transitionend",n),window.setTimeout((function(){e.classList.remove("wq-is-run"),e.classList.remove("wq-for-created"),e.removeEventListener("transitionend",n)}),800)}),100)};l.tnOnCreate=f;l.createTnOnRemove=function(e){return function(n,t){n.classList.add("wq-is-run"),n.classList.add("wq-for-removed"),window.setTimeout((function(){var r=!1;n.classList.add("wq-is-removed"),n.addEventListener("transitionend",(function(a){try{if(a.target!==n)return;n.classList.remove("wq-is-run"),n.classList.remove("wq-for-removed"),r||(t(),r=!0)}catch(n){window.alert(e)}})),window.setTimeout((function(){try{n.classList.remove("wq-is-run"),n.classList.remove("wq-for-removed"),r||(t(),r=!0)}catch(n){window.alert(e)}}),800)}),100)}};var v=function(e){var n=e.src,t=e.scaling,r=void 0===t?"center":t,o=e.alt,i=void 0===o?"":o,l=e.xclass,c=void 0===l?"":l,s={backgroundImage:"url("+n+")"};return a("div",{class:"wq-Image wq-scaling-".concat(r," ").concat(c," ").concat(n?"":"wq-src-empty"),style:s,title:i},a("img",{src:n,alt:i,class:"wq--img"}))};l.Image=v;l.TextInput=function(e){var n=e.type,t=e.size,r=e.name,o=e.placeholder,i=e.value,l=e.invalid,c=void 0!==l&&l,s=e.oninput,u=e.onblur,d=e.xclass,p=void 0===d?"":d,f=c?"wq-is-invalid":"",v="wq-text-".concat(r);return a("input",{type:n,class:"wq-TextInput wq-size-".concat(t," ").concat(f," ").concat(p),id:v,name:r,placeholder:o,value:i,oninput:s,onblur:u})};l.TextArea=function(e){var n=e.name,t=e.placeholder,r=e.value,o=e.size,i=void 0===o?"normal":o,l=e.invalid,c=void 0!==l&&l,s=e.oninput,u=e.onblur,d=e.xclass,p=void 0===d?"":d,f=c?"wq-is-invalid":"",v="wq-textarea-".concat(n);return a("textarea",{class:"wq-TextArea ".concat(f," wq-size-").concat(i," ").concat(p),id:v,name:n,placeholder:t,value:r,oninput:s,onblur:u})};l.RadioButton=function(e,n){var t=e.index,r=e.name,o=e.value,i=e.checked,l=e.invalid,c=void 0!==l&&l,s=e.onchange,u=e.xclass,d=void 0===u?"":u,p=e.inputXclass,f=void 0===p?"":p,v="wq-radio-".concat(r,"-").concat(t),w=c?"wq-is-invalid":"";return a("div",{class:"wq-Radio ".concat(d),id:v+"-wrapper"},a("input",{type:"radio",name:r,value:o,checked:i,onchange:s,id:v,class:"".concat(w," ").concat(f)}),a("label",{for:v},n))};l.Checkbox=function(e,n){var t=e.name,r=e.value,o=e.checked,i=e.invalid,l=void 0!==i&&i,c=e.onchange,s=e.xclass,u=void 0===s?"":s,d=e.id,p=void 0===d?null:d,f=e.inputXclass,v=void 0===f?"":f;null===p&&(p="wq-checkbox-".concat(t));var w=l?"wq-is-invalid":"";return a("div",{class:"wq-Checkbox ".concat(u),id:p+"-wrapper"},a("input",{type:"checkbox",name:t,value:r,checked:o,onchange:c,id:p,class:"".concat(w," ").concat(v)}),a("label",{for:p},n))};l.Select=function(e){var n=e.name,t=e.options,r=e.value,o=e.invalid,i=void 0!==o&&o,l=e.onchange,c=e.placeholder,s=e.xclass,u=void 0===s?"":s,d=e.inputXclass,p=void 0===d?"":d,f="wq-select-".concat(n),v=i?"wq-is-invalid":"";return c=c||"",a("div",{class:"wq-Select ".concat(u),id:f+"-wrapper"},a("select",function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}({class:"wq--input",name:n,onchange:l,id:f},"class","wq--input ".concat(v," ").concat(p)),a("option",{value:"",disabled:!0,selected:!r},c),t.map((function(e){return a("option",{value:e,selected:e==r},e)}))))};l.Range=function(e){var n=e.name,t=e.min,r=e.max,o=e.step,i=e.value,l=e.invalid,c=void 0!==l&&l,s=e.oninput,u=e.onchange,d=e.xclass,p=void 0===d?"":d,f=e.suffix,v=void 0===f?"":f,w=e.inputXclass,q=void 0===w?"":w,m="wq-range-".concat(n,"-wrapper"),y=(r-t+1)/o,g=y<=2?"nano":y<=4?"mini":y<=6?"small":y<=10?"medium":y<=16?"large":"xlarge";return a("div",{class:"wq-Range ".concat(c?"wq-is-invalid":""," wq-size-").concat(g," ").concat(p),id:m},a("span",{class:"wq--label wq-for-min"},t),a("input",{type:"range",class:"wq--input ".concat(q),name:n,id:n,value:i,min:t,max:r,step:o,oninput:s,onchange:u}),a("span",{class:"wq--label wq-for-max"},r),a("span",{class:"wq--state"},i,a("span",{class:"wq--state-suffix"},v)))};l.FileInput=function(e,n){var t=e.name,r=e.extensions,o=e.onchange,i=e.multiple,l=e.invalid,s=void 0!==l&&l,u=e.inputProps,f=void 0===u?{}:u,v=e.xclass,w=void 0===v?"":v,q=e.inputXclass,m=void 0===q?"":q,y=p(e,c),g=r.split(",").map((function(e){return"."+e.trim()})).join(","),h="wq-file-"+t;return a("div",d({class:"wq-FileInput ".concat(s?"wq-is-invalid":""," ").concat(w)},y),a("input",d({type:"file",id:h,class:"wq--input ".concat(m),onchange:o,accept:g},f,{multiple:i})),a("label",{class:"wq--label",for:h},a("span",{class:"wq--text"},n)))};l.File=function(e){var n=e.url,t=e.name,r=e.loading,o=e.ondelete,i=(e.deleteText,e.index),l=e.readonly,c=void 0!==l&&l,u=e.tnOnRemove,q=p(e,s),m=n&&function(e){var n=e.lastIndexOf("."),t=e.slice(n+1).trim().toLowerCase();return-1!=" jpeg jpg gif png ".indexOf(t)}(t);return a("div",d({class:"wq-File wq-lct-enabled ".concat(r?"wq-is-loading":""," ").concat(m?"wq-is-viewable":""," ").concat(c?"wq-is-readonly":""),oncreate:f,onremove:u},q),m?a(v,{src:n,alt:t,scaling:"cover",xclass:"wq-belongs-file",title:t}):null,a("div",{class:"wq--filename",title:t},t),c?null:a("div",{class:"wq--actions"},a(w,{onclick:o,xclass:"wq-belongs-file wq-for-delete","data-index":i})))};l.Echo=function(e){var n=e.name,t=e.value,r=e.glue,o=e.xclass,i=void 0===o?"":o,l="wq-echo-".concat(n),c=(t=Array.isArray(t)?t.join(r):null===t?"":t).split(/\r?\n/).reduce((function(e,n){return e.push(n),e.push(a("br",null)),e}),[]);return a("div",{class:"wq-Echo ".concat(i),id:l},c)};var w=function(e,n){var t=e.type,r=void 0===t?"normal":t,o=e.disabled,i=void 0!==o&&o,l=e.xclass,c=void 0===l?"":l,s=e.onclick,f=e.name,v=void 0===f?null:f,w=p(e,u);return a("button",d({type:"button",name:v,class:"wq-Button wq-type-".concat(r," ").concat(c),disabled:i,onclick:s},w),n)};l.Button=w;l.InputGroup=function(e,n){var t=e.gutter,r=void 0===t?"none":t,o=e.xclass,i=void 0===o?"":o;return a("div",{class:"wq-InputGroup wq-gutter-".concat(r," ").concat(i)},n)};function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function m(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return y(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return y(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function g(e){var n=arguments,t=1;return e.replace(/%([0-9]\$)?([^0-9])/g,(function(e,r,a){return"%"==a?"%":"s"==a?r?n[r.slice(0,1)]:n[t++]:void 0}))}l.Control=function(e,n){var t=e.label,r=e.required,o=e.message,i=e.note,l=e.requiredText,c=e.tnOnRemove,s=e.xclass,u=void 0===s?"":s,d=e.id,p=void 0===d?null:d,v=e.key,w=void 0===v?null:v;return a("div",{class:"wq-Control wq-lct-enabled ".concat(u),id:p,oncreate:f,onremove:c,key:w},a("div",{class:"wq--header ".concat(t?"":"wq-content-empty")},a("span",{class:"wq--label"},t),a("span",{class:"wq--required ".concat(r?"":"wq-is-optional")},l)),a("div",{class:"wq--body"},n,i?a("div",{class:"wq--note"},i):null,o?a("div",{class:"wq--message wq-lct-enabled",oncreate:f,onremove:c},o):null))},Math.trunc=Math.trunc||function(e){return e<0?Math.ceil(e):Math.floor(e)};var h=function(e){return i.default(e,L.currency.taxPrecision,L.currency.decPoint,L.currency.thousandsSep)},x={nodeName:"br",attributes:{},children:[]},b=function(e){if("string"!=typeof(e=T(e)))return e;var n=e.split("\n");return 1==n.length?n[0]:n.reduce((function(e,n){return 0==e.length?[n]:[].concat(m(e),[x,n])}),[])},T=function(e){return null==e?null:P.hasOwnProperty(e)?P[e]:(console.log("TO TRANSLATE: ",e),e)},O=function(){return a("div",{class:"wq-Monitor wq-is-result",id:"wq-monitor"},a("div",{class:"wq--header"},a("div",{class:"wq--title"},T("Quotation Details"))),a("div",{class:"wq--entries"},a("div",{class:"wq--entry wq-for-header"},a("div",{class:"wq--prop wq-for-no"},b("No")),a("div",{class:"wq--prop wq-for-category"},b("Category")),a("div",{class:"wq--prop wq-for-entry"},b("Entry")),a("div",{class:"wq--prop wq-for-normalUnitPrice"},T("Regular Unit Price")),a("div",{class:"wq--prop wq-for-unitPrice"},b("Unit Price")),a("div",{class:"wq--prop wq-for-quantity"},b("Quantity")),a("div",{class:"wq--prop wq-for-price"},b("Price")),L.hasOwnProperty("taxes")&&a("div",{class:"wq--prop wq-for-taxClass"},b("Tax Class"))),L.details.map((function(e,n){return a("div",{class:"wq--entry wq-for-entry",id:n},a("div",{class:"wq--prop wq-for-no"},n+1),a("div",{class:"wq--prop wq-for-category"},e.category),a("div",{class:"wq--prop wq-for-entry"},e.name),a("div",{class:"wq--prop wq-for-unitPrice"},null!==e.unitPrice?h(e.unitPrice):null),a("div",{class:"wq--prop wq-for-quantity"},a("span",{class:"wq--simpleDisplay"},null!==e.unitPrice?e.quantity:null),a("span",{class:"wq--independentDisplay"},null!==e.unitPrice?g(T("x%s"),e.quantity):null)),a("div",{class:"wq--prop wq-for-price"},null!==e.unitPrice?h(e.price):null),L.hasOwnProperty("taxes")&&a("div",{class:"wq--prop wq-for-taxClass"},null!==e.unitPrice?null===e.taxRate?g(b("(common %s%% applied)"),L.defaultTaxRate):g(b("(%s%% applied)"),e.taxRate):null))}))),L.hasOwnProperty("subtotal")?a("div",{class:"wq--footer"},a("div",{class:"wq--entry wq-for-subtotal"},a("div",{class:"wq--prop wq-for-name"},b("Subtotal")),a("div",{class:"wq--prop wq-for-value"},L.currency.pricePrefix,a("span",null,a("span",null,h(L.subtotal))),L.currency.priceSuffix)),L.hasOwnProperty("taxes")&&L.taxes[""]>0?a("div",{class:"wq--entry wq-for-tax wq-rate-common"},a("div",{class:"wq--prop wq-for-name"},g(b("Tax (common %s%%)"),""+L.defaultTaxRate)),a("div",{class:"wq--prop wq-for-value"},L.currency.pricePrefix,a("span",null,a("span",null,h(L.taxes[""]))),L.currency.priceSuffix)):null,function(e,n,t){for(var r in t)n=e(n,r,t[r]);return n}((function(e,n,t){return""===n?e:[].concat(m(e),[a("div",{class:"wq--entry wq-for-tax wq-rate-individual"},a("div",{class:"wq--prop wq-for-name"},g(b("Tax (%s%%)"),""+n)),a("div",{class:"wq--prop wq-for-value"},L.currency.pricePrefix,a("span",null,a("span",null,h(t))),L.currency.priceSuffix))])}),[],L.taxes),a("div",{class:"wq--entry wq-for-total"},a("div",{class:"wq--prop wq-for-name"},b("Total")),a("div",{class:"wq--prop wq-for-value"},L.currency.pricePrefix,a("span",null,a("span",null,h(L.total))),L.currency.priceSuffix))):a("div",{class:"wq--footer"},a("div",{class:"wq--entry wq-for-total"},a("div",{class:"wq--prop wq-for-name"},b("Total")),a("div",{class:"wq--prop wq-for-value"},L.currency.pricePrefix,a("span",null,a("span",null,h(L.total))),L.currency.priceSuffix))))},P=wqData.catalog,L=wqData.order;!function(e,n,t,r){var a,o=[].map,i=r&&r.children[0]||null,l=i&&function e(n){return{nodeName:n.nodeName.toLowerCase(),attributes:{},children:o.call(n.childNodes,(function(n){return 3===n.nodeType?n.nodeValue:e(n)}))}}(i),c=[],s=!0,u=w(e),d=function e(n,t,r){for(var a in r)"function"==typeof r[a]?function(e,a){r[e]=function(e){var o=a(e);return"function"==typeof o&&(o=o(m(n,u),r)),o&&o!==(t=m(n,u))&&!o.then&&v(u=q(n,w(t,o),u)),o}}(a,r[a]):e(n.concat(a),t[a]=w(t[a]),r[a]=w(r[a]));return r}([],u,w(n));function p(e){return"function"==typeof e?p(e(u,d)):null!=e?e:""}function f(){a=!a;var e=p(t);for(r&&!a&&(i=O(r,i,l,l=e)),s=!1;c.length;)c.pop()()}function v(){a||(a=!0,setTimeout(f))}function w(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t}function q(e,n,t){var r={};return e.length?(r[e[0]]=e.length>1?q(e.slice(1),n,t[e[0]]):n,w(t,r)):n}function m(e,n){for(var t=0;t<e.length;)n=n[e[t++]];return n}function y(e){return e?e.key:null}function g(e){return e.currentTarget.events[e.type](e)}function h(e,n,t,r,a){if("key"===n);else if("style"===n)if("string"==typeof t)e.style.cssText=t;else for(var o in"string"==typeof r&&(r=e.style.cssText=""),w(r,t)){var i=null==t||null==t[o]?"":t[o];"-"===o[0]?e.style.setProperty(o,i):e.style[o]=i}else"o"===n[0]&&"n"===n[1]?(n=n.slice(2),e.events?r||(r=e.events[n]):e.events={},e.events[n]=t,t?r||e.addEventListener(n,g):e.removeEventListener(n,g)):n in e&&"list"!==n&&"type"!==n&&"draggable"!==n&&"spellcheck"!==n&&"translate"!==n&&!a?e[n]=null==t?"":t:null!=t&&!1!==t&&e.setAttribute(n,t),null!=t&&!1!==t||e.removeAttribute(n)}function x(e,n){var t="string"==typeof e||"number"==typeof e?document.createTextNode(e):(n=n||"svg"===e.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",e.nodeName):document.createElement(e.nodeName),r=e.attributes;if(r){r.oncreate&&c.push((function(){r.oncreate(t)}));for(var a=0;a<e.children.length;a++)t.appendChild(x(e.children[a]=p(e.children[a]),n));for(var o in r)h(t,o,r[o],null,n)}return t}function b(e,n){var t=n.attributes;if(t){for(var r=0;r<n.children.length;r++)b(e.childNodes[r],n.children[r]);t.ondestroy&&t.ondestroy(e)}return e}function T(e,n,t){function r(){e.removeChild(b(n,t))}var a=t.attributes&&t.attributes.onremove;a?a(n,r):r()}function O(e,n,t,r,a){if(r===t);else if(null==t||t.nodeName!==r.nodeName){var o=x(r,a);e.insertBefore(o,n),null!=t&&T(e,n,t),n=o}else if(null==t.nodeName)n.nodeValue=r;else{!function(e,n,t,r){for(var a in w(n,t))t[a]!==("value"===a||"checked"===a?e[a]:n[a])&&h(e,a,t[a],n[a],r);var o=s?t.oncreate:t.onupdate;o&&c.push((function(){o(e,n)}))}(n,t.attributes,r.attributes,a=a||"svg"===r.nodeName);for(var i={},l={},u=[],d=t.children,f=r.children,v=0;v<d.length;v++){u[v]=n.childNodes[v],null!=(m=y(d[v]))&&(i[m]=[u[v],d[v]])}v=0;for(var q=0;q<f.length;){var m=y(d[v]),g=y(f[q]=p(f[q]));if(l[m])v++;else if(null==g||g!==y(d[v+1]))if(null==g||s)null==m&&(O(n,u[v],d[v],f[q],a),q++),v++;else{var b=i[g]||[];m===g?(O(n,b[0],b[1],f[q],a),v++):b[0]?O(n,n.insertBefore(b[0],u[v]),b[1],f[q],a):O(n,u[v],null,f[q],a),l[g]=f[q],q++}else null==m&&T(n,u[v],d[v]),v++}for(;v<d.length;)null==y(d[v])&&T(n,u[v],d[v]),v++;for(var v in i)l[v]||T(n,i[v][0],i[v][1])}return n}v()}({},{},(function(){return a("div",{class:"wq-Form wq-is-result"},a(O,null),a("div",{class:"wq-Attributes wq-is-result"},L.attrs.map((function(e,n){return a(l.Control,{label:e.name,id:n},(t=e.value,Array.isArray(t)?t.length>0&&null!==t[0]&&"object"==q(t[0])?a(l.InputGroup,{gutter:"mini",xclass:"wq-belongs-attr wq-belongs-file"},t.map((function(e,n){return a(l.File,{index:n,url:e.url,name:e.name,readonly:!0})}))):a(l.Echo,{value:t,xclass:"wq-belongs-attr",glue:T(", ")}):null!==t&&"object"==q(t)?a(l.File,{index:0,url:t.url,name:t.name,readonly:!0}):a(l.Echo,{value:t,xclass:"wq-belongs-attr",glue:T(", ")})));var t}))))}),document.getElementById("root"))})();
//# sourceMappingURL=result.js.map
