(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{getBlockType:()=>_,registerBlockType:()=>v,sanitizeBlockAttributes:()=>S,sanitizeBlocks:()=>N,setBlockAdminSettings:()=>B,setBlockRendererSettings:()=>T,store:()=>h});var r={};e.r(r),e.d(r,{addBlockTypes:()=>p,setBlockAdminSettings:()=>d,setBlockRendererSettings:()=>u});var o={};e.r(o),e.d(o,{getBlockSupport:()=>f,getBlockType:()=>g,getBlockTypes:()=>y,hasBlockSupport:()=>m});const n=window.wp.data,s=window.lodash,i="SET_BLOCK_RENDERER_SETTINGS",l="SET_BLOCK_ADMIN_SETTINGS",a="ADD_BLOCK_TYPES",c={unknown:{title:"Unknown",supports:{editable:!0,description:!0,attachment:!0,required:!1,logic:!0,placeholder:!1},logicalOperators:["is","is_not","starts_with","greater_than","lower_than","ends_with","contains","not_contains"]}},u=(e,t)=>({type:i,settings:e,name:t}),d=(e,t)=>({type:l,settings:e,name:t}),p=e=>({type:a,blockTypes:(0,s.castArray)(e)}),y=e=>(0,s.reduce)((0,s.sortBy)((0,s.keys)(e),(t=>e[t].order)),((t,r)=>("unknown"!==r&&(t[r]=e[r]),t)),{});function g(e,t){return e[t]}const f=(e,t,r)=>{const o=((e,t)=>"string"==typeof t?g(e,t):t)(e,t);return(0,s.get)(o,["supports",r])};function m(e,t,r){return!!f(e,t,r)}const b=(0,n.createReduxStore)("quillForms/blocks",{actions:r,selectors:o,reducer:(e=c,t)=>{switch(t.type){case l:case i:const{name:r}=t;return e[r]?{...e,[r]:{...e[r],...t.settings}}:e;case a:return{...e,...(0,s.keyBy)(t.blockTypes,"name")}}return e}}),h=b;(0,n.register)(b);const k=window.qf.utils,B=(e,t)=>{t={title:"Untitled",color:"#333s",icon:"plus",order:20,controls:()=>null,...t},"string"==typeof e?(0,n.select)("quillForms/blocks").getBlockType(e)?("string"!=typeof t.color&&console.error('The "color" property must be a valid string!'),t.icon=(0,k.normalizeIconObject)(t.icon),(0,k.isValidIcon)(t.icon.src)?!t.logicControl||(0,s.isFunction)(t.logicControl)?!t.entryDetails||(0,s.isFunction)(t.entryDetails)?(0,s.isFunction)(t.controls)?t.order&&isNaN(t.order)?console.error('The "order" property must be a valid number!'):((0,s.isFunction)(t.getChoices)||(t.getChoices=({id:e,attributes:t})=>[]),(0,n.dispatch)("quillForms/blocks").setBlockAdminSettings((0,s.pick)(t,["controls","entryDetails","logicControl","color","icon","title","order","getChoices"]),e)):console.error('The "controls" property must be a valid function!'):console.error('The "entryDetails" property must be a valid function!'):console.error('The "logicControl" property must be a valid function!'):console.error('The "icon" property must be a valid function!')):console.error(`The ${e} block isn't registered. Please register it first!`):console.error("Block types must be strings.")},T=(e,t)=>{if(t={display:()=>null,...t},"string"==typeof e)if((0,n.select)("quillForms/blocks").getBlockType(e))if((0,s.isFunction)(t.display))if(!t.mergeTag||(0,s.isFunction)(t.mergeTag))if(!t.counterIcon||(0,s.isFunction)(t.counterIcon))if(!t.nextBtn||(0,s.isFunction)(t.nextBtn))if(!t.isConditionFulfilled||(0,s.isFunction)(t.isConditionFulfilled)){if(t.isConditionFulfilled||(t.isConditionFulfilled=(e,t,r)=>{switch(e){case"is":return Array.isArray(r)?r.includes(t):r==t;case"is_not":return Array.isArray(r)?!r.includes(t):r!=t;case"greater_than":return!isNaN(r)&&!isNaN(t)&&parseFloat(r)>parseFloat(t);case"lower_than":return!isNaN(r)&&!isNaN(t)&&parseFloat(r)<parseFloat(t);case"contains":return"string"==typeof r&&"string"==typeof t&&-1!==r.indexOf(t);case"not_contains":return"string"==typeof r&&"string"==typeof t&&-1===r.indexOf(t);case"starts_with":return"string"==typeof r&&"string"==typeof t&&r.startsWith(t);case"ends_with":return"string"==typeof r&&"string"==typeof t&&r.endsWith(t)}return!1}),!t.getNumericVal||(0,s.isFunction)(t.getNumericVal))return t.getNumericVal||(t.getNumericVal=(e,t)=>parseFloat(e)),(0,n.dispatch)("quillForms/blocks").setBlockRendererSettings((0,s.pick)(t,["display","mergeTag","nextBtn","counterIcon","isConditionFulfilled","getNumericVal","displayLayout"]),e),t;console.error('The "getNumericVal" must be a function')}else console.error('The "isConditionFulfilled" property must be a valid function!');else console.error('The "nextBtn" property must be a valid function!');else console.error('The "counterIcon" property must be a valid function!');else console.error('The "mergeTag" property must be a valid function!');else console.error('The "display" property must be a valid function!');else console.error(`The ${e} block isn't registered. Please register it first!`);else console.error("Block types must be strings.")},w=window.qf.config;var F=e.n(w);const v=(e,t)=>{if("string"!=typeof e)return void console.error("Block names must be strings.");const r=F().isWPEnv();if("file"===e&&!r&&"free"===window?.quillformsSaasManagerAdmin?.plan?.plan)return;if((0,n.select)("quillForms/blocks").getBlockType(e))return void console.error('Block "'+e+'" is already registered.');t.supports={editable:!0,required:!0,attachment:!0,description:!0,defaultValue:!1,placeholder:!1,logic:!0,logicConditions:!0,innerBlocks:!1,numeric:!1,choices:!1,payments:!1,points:!1,correctAnswers:!1,...t.supports};let{attributes:o}=t;const{supports:i}=t;return o&&(0,s.isPlainObject)(o)||(o={}),i.required&&(o.required={type:"boolean",default:!1}),o.nextBtnLabel={type:["string","boolean"],default:!1},o.classnames={type:"string",default:""},i.placeholder&&(o.placeholder={type:["string","boolean"],default:!1}),i.attachment&&(o.attachment={type:"object",properties:{url:{type:"string"}}}),i.defaultValue&&(o.defaultValue={type:"string",default:""}),i.description&&(o.description={type:"string",default:""}),i.theme&&(o.themeId={type:"number"}),"dropdown"!==e&&"multiple-choice"!==e&&"picture-choice"!==e||(o.randomize={type:"boolean",default:!1}),o.label={type:"string",default:""},o.customHTML={type:"string",default:""},o.layout={type:"string",default:"stack"},o.attachmentFocalPoint={type:"object",default:{x:.5,y:.5}},o.attachmentFancyBorderRadius={type:"boolean",default:!1},o.attachmentBorderRadius={type:"boolean",default:"0px"},o.attachmentMaxWidth={type:"string",default:"none"},t.attributes=o,(0,n.dispatch)("quillForms/blocks").addBlockTypes({name:e,...(0,s.pick)(t,["attributes","supports","logicalOperators"])}),T(e,t),B(e,t),t};function _(e){return(0,n.select)("quillForms/blocks").getBlockType(e)}function S(e,t){const r=_(e);if(void 0===r)throw new Error(`Block type '${e}' is not registered.`);return(0,s.reduce)(r.attributes,((e,r,o)=>{const n=t[o];return void 0!==n?e[o]=n:r.hasOwnProperty("default")&&(e[o]=r.default),e}),{})}const N=e=>(0,s.isEmpty)(e)?[]:(0,s.map)(e,(e=>_(e.name)?void 0!==e?.innerBlocks&&(0,s.size)(e?.innerBlocks)>0?{...e,attributes:S(e.name,e.attributes?e.attributes:{}),innerBlocks:N(e.innerBlocks)}:{...e,attributes:S(e.name,e.attributes?e.attributes:{})}:{...e,name:"unknown",attributes:S("unknown",e.attributes?e.attributes:{})}));(window.qf=window.qf||{}).blocks=t})();