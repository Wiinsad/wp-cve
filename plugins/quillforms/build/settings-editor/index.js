(()=>{var e={4184:(e,n)=>{var r;!function(){"use strict";var t={}.hasOwnProperty;function i(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var a=i.apply(null,r);a&&e.push(a)}}else if("object"===s){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var o in r)t.call(r,o)&&r[o]&&e.push(o)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(n,[]))||(e.exports=r)}()},4098:(e,n,r)=>{"use strict";n.VZ=void 0;var t=r(8938);n.VZ=e=>({type:t.SETUP_STORE,initialPayload:e})},8938:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.SHOW_QUESTIONS_NUMBERS=n.SHOW_LETTERS_ON_ANSWERS=n.SETUP_STORE=n.SAVE_ANSWERS_IN_BROWSER=n.DISPLAY_BRANDING=n.DISABLE_WHEEL_SWIPING=n.DISABLE_PROGRESS_BAR=n.DISABLE_NAVIGATION_ARROWS=n.CHANGE_ANIMATION_DIRECTION=void 0,n.DISABLE_PROGRESS_BAR="DISABLE_PROGRESS_BAR",n.DISABLE_WHEEL_SWIPING="DISABLE_WHEEL_SWIPING",n.DISABLE_NAVIGATION_ARROWS="DISABLE_NAVIGATION_ARROWS",n.CHANGE_ANIMATION_DIRECTION="CHANGE_ANIMATION_DIRECTION",n.SHOW_QUESTIONS_NUMBERS="SHOW_QUESTIONS_NUMBERS",n.SHOW_LETTERS_ON_ANSWERS="SHOW_LETTERS_ON_ANSWERS",n.SAVE_ANSWERS_IN_BROWSER="SAVE_ANSWERS_IN_BROWSER",n.DISPLAY_BRANDING="DISPLAY_BRANDING",n.SETUP_STORE="SETUP_STORE"}},n={};function r(t){var i=n[t];if(void 0!==i)return i.exports;var s=n[t]={exports:{}};return e[t](s,s.exports,r),s.exports}r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var t={};(()=>{"use strict";r.r(t),r.d(t,{PanelRender:()=>V});var e={};r.r(e),r.d(e,{changeAnimationDirection:()=>y,disableNavigationArrows:()=>_,disableProgressBar:()=>B,disableWheelSwiping:()=>m,displayBranding:()=>f,saveAnswersInBrowser:()=>I,setUpStore:()=>N,showLettersOnAnswers:()=>b,showQuestionsNumbers:()=>h});var n={};r.r(n),r.d(n,{getAnimationDirection:()=>P,getSettings:()=>O,isNavigationArrowsDisabled:()=>v,isProgressBarDisabled:()=>D,isWheelSwipingDisabled:()=>R,shouldAnswersBeSavedInBrowser:()=>L,shouldBrandingBeDisplayed:()=>T,shouldLettersOnAnswersBeDisplayed:()=>W,shouldQuestionsNumbersBeDisplayed:()=>C});var i={};r.r(i),r.d(i,{getSettings:()=>H});const s=window.wp.data,a="DISABLE_PROGRESS_BAR",o="DISABLE_WHEEL_SWIPING",l="DISABLE_NAVIGATION_ARROWS",d="CHANGE_ANIMATION_DIRECTION",u="SHOW_QUESTIONS_NUMBERS",c="SHOW_LETTERS_ON_ANSWERS",g="SAVE_ANSWERS_IN_BROWSER",S="DISPLAY_BRANDING",E="SETUP_STORE",p=window.qf.config;var w=r.n(p);const A=(0,s.combineReducers)({disableProgressBar:function(e=!1,n){switch(n.type){case a:return n.flag;case E:return!!n.initialPayload?.disableProgressBar&&n.initialPayload?.disableProgressBar}return e},disableWheelSwiping:function(e=!1,n){switch(n.type){case o:return n.flag;case E:return!!n.initialPayload?.disableWheelSwiping&&n.initialPayload?.disableWheelSwiping}return e},disableNavigationArrows:function(e=!1,n){switch(n.type){case l:return n.flag;case E:return!!n.initialPayload?.disableNavigationArrows&&n.initialPayload?.disableNavigationArrows}return e},animationDirection:function(e=!1,n){switch(n.type){case d:return n.direction;case E:return n.initialPayload?.changeAnimationDirection?n.initialPayload?.changeAnimationDirection:"vertical"}return e},showLettersOnAnswers:function(e=!0,n){switch(n.type){case c:return n.flag;case E:return void 0===n.initialPayload?.showLettersOnAnswers||n.initialPayload?.showLettersOnAnswers}return e},showQuestionsNumbers:function(e=!0,n){switch(n.type){case u:return n.flag;case E:return void 0===n.initialPayload?.showQuestionsNumbers||n.initialPayload?.showQuestionsNumbers}return e},saveAnswersInBrowser:function(e=!1,n){switch(n.type){case g:return n.flag;case E:return!!n.initialPayload?.saveAnswersInBrowser&&n.initialPayload?.saveAnswersInBrowser}return e},displayBranding:function(e=!1,n){switch(n.type){case S:return n.flag;case E:return void 0!==n.initialPayload?.displayBranding&&n.initialPayload?.displayBranding}return e}}),N=e=>({type:E,initialPayload:e}),B=e=>({type:a,flag:e}),m=e=>({type:o,flag:e}),_=e=>({type:l,flag:e}),y=e=>({type:d,direction:e}),b=e=>({type:c,flag:e}),h=e=>({type:u,flag:e}),I=e=>({type:g,flag:e}),f=e=>({type:S,flag:e});function O(e){return e}function D(e){return e.disableProgressBar}function R(e){return e.disableWheelSwiping}function v(e){return e.disableNavigationArrows}function P(e){return e.animationDirection}function W(e){return e.showLettersOnAnswers}function C(e){return e.showQuestionsNumbers}function L(e){return e.saveAnswersInBrowser}function T(e){return e.displayBranding}var G=r(4098);function H(e){const n=w().getInitialPayload();return(0,G.VZ)(n?.settings?n.settings:{})}(0,s.registerStore)("quillForms/settings-editor",{reducer:A,actions:e,selectors:n,resolvers:i});const q=window.qf.builderPanels,Q=(window.qf.messagesEditor,window.wp.element),U=window.qf.adminComponents,M=(window.wp.components,window.emotion);r(4184);const V=()=>{const{disableProgressBar:e,disableWheelSwiping:n,disableNavigationArrows:r,changeAnimationDirection:t,showLettersOnAnswers:i,showQuestionsNumbers:a,saveAnswersInBrowser:o,displayBranding:l}=(0,s.useDispatch)("quillForms/settings-editor"),{isProgressBarDisabled:d,isWheelSwipingDisabled:u,isNavigationArrowsDisabled:c,shouldLettersOnAnswersBeDisplayed:g,shouldQuestionsNumbersBeDisplayed:S,shouldAnswersBeSavedInBrowser:E,shouldBrandingBeDisplayed:p,animationDirection:w}=(0,s.useSelect)((e=>({isProgressBarDisabled:e("quillForms/settings-editor").isProgressBarDisabled(),isWheelSwipingDisabled:e("quillForms/settings-editor").isWheelSwipingDisabled(),isNavigationArrowsDisabled:e("quillForms/settings-editor").isNavigationArrowsDisabled(),animationDirection:e("quillForms/settings-editor").getAnimationDirection(),shouldLettersOnAnswersBeDisplayed:e("quillForms/settings-editor").shouldLettersOnAnswersBeDisplayed(),shouldQuestionsNumbersBeDisplayed:e("quillForms/settings-editor").shouldQuestionsNumbersBeDisplayed(),shouldAnswersBeSavedInBrowser:e("quillForms/settings-editor").shouldAnswersBeSavedInBrowser(),shouldBrandingBeDisplayed:e("quillForms/settings-editor").shouldBrandingBeDisplayed()}))),A=[{key:"horizontal",name:"Horizontal"},{key:"vertical",name:"Vertical"}];return(0,Q.createElement)("div",{className:"settings-editor-panel-render"},(0,Q.createElement)(U.BaseControl,null,(0,Q.createElement)(U.ControlWrapper,null,(0,Q.createElement)(U.ControlLabel,{label:"Auto save progress (save answers in user browser)",isNew:!0}),(0,Q.createElement)(U.ToggleControl,{checked:E,onChange:()=>o(!E)}))),(0,Q.createElement)(U.BaseControl,null,(0,Q.createElement)(U.ControlWrapper,null,(0,Q.createElement)(U.ControlLabel,{label:"Hide progress bar"}),(0,Q.createElement)(U.ToggleControl,{checked:d,onChange:()=>e(!d)}))),(0,Q.createElement)(U.BaseControl,null,(0,Q.createElement)(U.ControlWrapper,null,(0,Q.createElement)(U.ControlLabel,{label:"Disable swiping by wheel"}),(0,Q.createElement)(U.ToggleControl,{checked:u,onChange:()=>n(!u)}))),(0,Q.createElement)(U.BaseControl,null,(0,Q.createElement)(U.ControlWrapper,null,(0,Q.createElement)(U.ControlLabel,{label:"Letters on answers",isNew:!0}),(0,Q.createElement)(U.ToggleControl,{checked:g,onChange:()=>i(!g)}))),(0,Q.createElement)(U.BaseControl,null,(0,Q.createElement)(U.ControlWrapper,null,(0,Q.createElement)(U.ControlLabel,{label:"Questions numbers",isNew:!0}),(0,Q.createElement)(U.ToggleControl,{checked:S,onChange:()=>a(!S)}))),(0,Q.createElement)(U.BaseControl,null,(0,Q.createElement)(U.ControlWrapper,null,(0,Q.createElement)(U.ControlLabel,{label:"Hide navigation arrows"}),(0,Q.createElement)(U.ToggleControl,{checked:c,onChange:()=>r(!c)}))),(0,Q.createElement)(U.BaseControl,null,(0,Q.createElement)(U.ControlWrapper,null,(0,Q.createElement)(U.ControlLabel,{label:"Animation direction"}),(0,Q.createElement)(U.SelectControl,{className:M.css`
							margin-top: 5px;
						`,onChange:({selectedItem:e})=>{t(e.key)},options:A,value:A.find((e=>e.key===w))}))),(0,Q.createElement)(U.BaseControl,null,(0,Q.createElement)(U.ControlWrapper,null,(0,Q.createElement)(U.ControlLabel,{label:"Display Branding"}),(0,Q.createElement)(U.ToggleControl,{checked:p,onChange:()=>{l(!p)}}))))};(0,q.registerBuilderSubPanel)("settings/general",{title:"General",render:V,position:0})})(),(window.qf=window.qf||{}).settingsEditor=t})();