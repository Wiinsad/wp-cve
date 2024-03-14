(()=>{"use strict";var e={};(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);const t=window.qf.blocks,n=(window.wp.element,window.qf.adminComponents),a=window.React,o={color:"#127fa9",icon:()=>React.createElement("i",{style:{verticalAlign:"text-bottom",fontWeight:"bold",color:"#fff"}},"#"),controls:e=>{const{attributes:{setMin:t,min:o,setMax:l,max:r},setAttributes:c}=e,i=99999999999999,m=e=>{let n=e;n<1&&(n=1),t&&o&&n<o&&(n=o),c({max:n})};return React.createElement(a.Fragment,null,React.createElement(n.BaseControl,null,React.createElement(n.ControlWrapper,{orientation:"horizontal"},React.createElement(n.ControlLabel,{label:"Set min number"}),React.createElement(n.ToggleControl,{checked:t,onChange:()=>{c({setMin:!t}),m(1)}})),t&&React.createElement(n.TextControl,{type:"number",placeholder:"0-"+(l&&r?r:i),value:o,onChange:e=>c({min:e}),onBlur:()=>(e=>{let t=e;t<0&&(t=0),l&&r&&t>r&&(t=r),c({min:t})})(o)})),React.createElement(n.BaseControl,null,React.createElement(n.ControlWrapper,{orientation:"horizontal"},React.createElement(n.ControlLabel,{label:"Set max number"}),React.createElement("div",{role:"presentation",className:"switch-control-wrapper"},React.createElement(n.ToggleControl,{checked:l,onChange:()=>{c({setMax:!l}),m(1)}}))),l&&React.createElement(n.TextControl,{type:"number",placeholder:(t&&o?o:1)+"-"+i,value:r,onChange:e=>c({max:e}),onBlur:()=>m(r)})))},logicControl:e=>{let{value:t,setValue:o}=e;const[l,r]=(0,a.useState)(t);return(0,a.useEffect)((()=>{o(parseInt(l,10))}),[l]),React.createElement(n.TextControl,{type:"number",value:t,onChange:e=>r(e)})},title:"Number",order:4},{name:l}={name:"number",supports:{editable:!0,required:!0,attachment:!0,description:!0,logic:!0,placeholder:!0,defaultValue:!0,theme:!0,numeric:!0,payments:!0},attributes:{setMax:{type:"boolean",default:!1},max:{type:"number",default:0},setMin:{type:"boolean",default:!1},min:{type:"number",default:0}},logicalOperators:["is","is_not","greater_than","lower_than"]};(0,t.setBlockAdminSettings)(l,o),(window.qf=window.qf||{}).blocklibNumberBlockAdmin=e})();