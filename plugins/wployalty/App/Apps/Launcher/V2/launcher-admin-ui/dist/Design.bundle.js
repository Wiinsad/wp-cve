"use strict";(self.webpackChunkreact_wordpress=self.webpackChunkreact_wordpress||[]).push([[842],{673:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294);const o=function(e){var t=e.width,r=void 0===t?"w-1/2":t,o=e.label,c=e.activated,l=e.click;return n.createElement("div",{className:"flex whitespace-nowrap cursor-pointer ".concat(r,"\n            transition duration-200 ease-in items-center space-x-2 px-2.5 py-3   h-11\n            ").concat(c?"border-2  border-blue_primary ":"border border-light_border ","  rounded-md bg-white"),onClick:l},n.createElement("div",{className:"flex items-center  rounded-full justify-center p-1 h-5 w-5 bg-white"},n.createElement("i",{className:" wlr wlrf-".concat(c?"tick_circle text-blue_primary":"tick_circle_2 text-light","  text-center  font-bold text-md 2xl:text-lg")})),n.createElement("p",{className:"".concat(c?"text-dark":"text-light"," overflow-hidden text-xs 2xl:text-sm font-normal")},o))}},4:(e,t,r)=>{r.r(t),r.d(t,{default:()=>D});var n=r(4572),o=r(5861),c=r(885),l=r(4687),a=r.n(l),i=r(7294),s=r(7543),m=r(2421),u=r(516),d=r(5084),f=r(6693),p=r(673),g=r(3972),b=r(5458);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const h=function(e){var t=e.setActiveSidebar,r=i.useContext(g.ko),n=r.commonState,o=r.setCommonState,c=n.design,l=i.useContext(g.Gr),a=function(e){var t=v({},n);t.design.logo.is_show=e,o(t)};return i.createElement("div",{className:"relative h-[590px] overflow-y-auto"},i.createElement(d.Z,{title:l.design.logo.title,click:function(){return t("all")}}),i.createElement(f.Z,{title:l.design.logo.visibility},i.createElement("div",{className:"flex w-full gap-4 items-center"},i.createElement(p.Z,{label:l.common.show,activated:"show"===c.logo.is_show,click:function(){return a("show")}}),i.createElement(p.Z,{label:l.common.none,activated:"none"===c.logo.is_show,click:function(){return a("none")}}))),i.createElement(f.Z,{title:l.common.logo_image},i.createElement("p",{className:"text-light 2xl:text-sm text-xs font-normal  "},l.design.logo.image.description),i.createElement("div",{className:"flex items-center justify-center w-full h-50 border-2 border-light_border border-dashed rounded-md"},["",void 0].includes(c.logo.image)?i.createElement("div",{className:"flex flex-col items-center gap-y-3"},i.createElement("i",{className:"wlr wlrf-image-upload text-light text-3xl"}),i.createElement("p",{className:"text-xs 2xl:text-sm text-light font-medium"},l.common.image_description)):i.createElement("img",{src:c.logo.image,alt:"logo image",className:"object-contain h-full w-full  p-2 "})),i.createElement("div",{className:"flex w-full gap-4 items-center gap-x-3"},i.createElement("div",{onClick:function(){var e=v({},n);e.design.logo.image="",o(e)},className:"flex items-center cursor-pointer justify-center w-full rounded-md py-3 border border-light_border "},i.createElement("p",{className:"text-light 2xl:text-sm text-xs"},l.common.restore_default)),i.createElement("div",{className:"flex items-center cursor-pointer justify-center w-full rounded-md py-3 bg-blue_primary ",onClick:function(){var e=wp.media({title:"Select media",multiple:!1,library:{type:"image"}});return e.on("select",(function(){e.state().get("selection").each((function(e){var t=e.attributes.url,r=v({},n);r.design.logo.image=t,o(r)}))})),e.open(),!1}},i.createElement("p",{className:"text-white 2xl:text-sm text-xs"},l.common.browse_image)))),i.createElement(b.Z,{click:function(){return t("all")}}))},w=function(e){var t=e.label,r=e.width,n=void 0===r?"w-1/2":r,o=e.onChange,c=e.value,l=void 0===c?"#FFFFFF":c,a=e.reset_id,s=e.handleResetColor,m=e.disabled;return i.createElement("div",{className:"flex flex-col gap-y-1 ".concat(n)},i.createElement("p",{className:"text-light text-xs 2xl:text-sm font-semibold tracking-wider"},t),i.createElement("div",{className:"flex items-center w-full gap-x-2 justify-between"},i.createElement("div",{className:"border h-11 border-light_border py-2 px-2 rounded-md bg-white flex items-center gap-x-1 2xl:gap-x-2  "},i.createElement("input",{type:"color",className:"rounded-full focus:shadow-none border-none cursor-pointer  h-6 w-6  ",onChange:o,value:l}),i.createElement("input",{type:"text",value:l,onChange:o,disabled:m,className:"w-1/2 focus:shadow-none  shadow-none border-none"})),i.createElement("div",{title:"reset",id:a,className:"border  border-light rounded-md h-11 w-10  flex items-center justify-center p-1.5 "},i.createElement("i",{className:"text-xl text-primary cursor-pointer leading-0 antialiased p-3 wlr wlrf-refresh  color-important ",onClick:function(){return s()}}))))};var y=r(1393);const E=function(e){var t=e.options,r=e.setActive,n=e.setActiveState,o=e.activeColor;return i.createElement("div",{className:"flex   flex-col border rounded-lg bg-white w-full text-light border-light_border z-10 absolute top-11.5 left-0 overflow-hidden"},t.map((function(e,t){return i.createElement("p",{key:t,onClick:function(){!function(e){r(!1),n(e.value)}(e)},className:"flex items-center  px-4 py-2 justify-between ".concat(e.value===o?"bg-primary_extra_light text-primary":"bg-white text-dark "," hover:bg-primary_extra_light cursor-pointer hover:bg-opacity-50")},e.value,e.value===o&&i.createElement("span",{className:"flex items-center"},i.createElement("i",{className:" wlr wlrf-tick color-important font-medium  text-lg 2xl:text-xl leading-0 cursor-pointer "})))})))},_=function(e){var t=e.options,r=e.width,n=void 0===r?"w-1/2":r,o=e.label,c=e.active,l=e.setActive,a=e.activeColor,s=e.setActiveState,m=e.selectedColorName,u=e.backgroundColor;return i.createElement("div",{className:"flex flex-col gap-y-1 ".concat(n)},i.createElement("p",{className:"text-light text-xs 2xl:text-sm font-semibold tracking-wider"},o),i.createElement("div",{className:"border border-light_border h-11 cursor-pointer py-2 px-2 rounded-md bg-white gap-x-1 2xl:gap-x-2 flex w-full items-center justify-between relative",onClick:function(){return l(!c)}},i.createElement("div",{className:"flex items-center gap-x-1 2xl:gap-x-2"},i.createElement("span",{className:"h-6 w-6 rounded-full shadow-empty ",style:{backgroundColor:"".concat(u)}}),i.createElement("p",{className:"text-dark font-normal capitalize ".concat(y.jW.text.sm)},m)),i.createElement("i",{className:"wlr wlrf-arrow_right text-white 2xl:text-md text-sm cursor-pointer"}),c&&i.createElement(E,{options:t,active:c,setActive:l,setActiveState:s,activeColor:a})))};function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const N=function(e){var t=e.setActiveSidebar,r=i.useContext(g.Gr),n=i.useContext(g.ko),o=n.commonState,l=n.setCommonState,a=o.design,s=i.useState(!1),m=(0,c.Z)(s,2),u=m[0],p=m[1],x=i.useState(!1),v=(0,c.Z)(x,2),h=v[0],y=v[1],E=[{label:r.common.white,value:"white"},{label:r.common.black,value:"black"}];return i.createElement("div",{className:""},i.createElement(d.Z,{title:r.design.colors.title,click:function(){return t("all")}}),i.createElement("div",{className:"flex flex-col w-full h-[520px] overflow-y-auto "},i.createElement(f.Z,{title:r.design.colors.theme_title},i.createElement("div",{className:"w-full flex flex-col  gap-y-3"},i.createElement("div",{className:"w-full flex items-center gap-x-4"},i.createElement(w,{value:a.colors.theme.primary,onChange:function(e){return function(e,t){e.preventDefault();var r=j({},o);r.design.colors.theme.primary=e.target.value,l(r)}(e)},label:r.design.colors.theme_color,disabled:!0,reset_id:"theme_color_reset_id",handleResetColor:function(){var e=j({},o);e.design.colors.theme.primary="#6F38C5",l(e)}}),i.createElement(_,{options:E,label:r.common.text,active:u,setActive:p,activeColor:a.colors.theme.text,selectedColorName:"white"===a.colors.theme.text?r.common.white:r.common.black,backgroundColor:"white"===a.colors.theme.text?"#FFFFFF":"#000000",setActiveState:function(e){var t=j({},o);t.design.colors.theme.text=e,l(t)}})))),i.createElement(f.Z,{title:r.design.colors.buttons},i.createElement("div",{className:"w-full flex items-center gap-x-4"},i.createElement(w,{value:a.colors.buttons.background,onChange:function(e){return function(e,t){e.preventDefault();var r=j({},o);r.design.colors.buttons.background=e.target.value,l(r)}(e)},label:r.common.background,disabled:!0,reset_id:"button_color_reset_id",handleResetColor:function(){var e=j({},o);e.design.colors.buttons.background="#FF6B00",l(e)}}),i.createElement(_,{options:E,label:r.common.text,active:h,setActive:y,activeColor:a.colors.buttons.text,selectedColorName:"white"===a.colors.buttons.text?r.common.white:r.common.black,backgroundColor:"white"===a.colors.buttons.text?"#FFFFFF":"#000000",setActiveState:function(e){var t=j({},o);t.design.colors.buttons.text=e,l(t)}}))),i.createElement(b.Z,{click:function(){return t("all")}})))};function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}const C=function(e){var t=e.setActiveSidebar,r=i.useContext(g.ko),o=r.commonState,c=r.setCommonState,l=i.useContext(g.Gr),a=o.design,s=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},o);t.design.branding.is_show=e,c(t)};return i.createElement("div",{className:""},i.createElement(d.Z,{title:l.design.branding,click:function(){return t("all")}}),i.createElement("div",{className:"flex flex-col w-full h-[520px] overflow-y-auto wll_no-scrollbar"},i.createElement(f.Z,{title:l.design.logo.visibility},i.createElement("div",{className:"".concat(y.a3)},i.createElement(p.Z,{click:function(){return s("show")},label:l.common.show,activated:"show"===a.branding.is_show}),i.createElement(p.Z,{label:l.common.none,click:function(){return s("none")},activated:"none"===a.branding.is_show}))),i.createElement(b.Z,{click:function(){return t("all")}})))};var S=r(7420),Z=r(2940),P=r(2563),F=r(5183);function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}const D=function(){var e=i.useContext(g.ko),t=e.appState,r=e.commonState,l=e.setCommonState,d=r.design,f=r.launcher,p=i.useContext(g.Gr),b=i.useState("all"),x=(0,c.Z)(b,2),v=x[0],w=x[1],E=i.useState(!0),_=(0,c.Z)(E,2),O=_[0],j=_[1],k=i.useState([]),D=(0,c.Z)(k,2),R=D[0],G=D[1],I=i.useState({}),L=(0,c.Z)(I,2),z=L[0],B=L[1],Q=function(){var e=(0,o.Z)(a().mark((function e(){var r,n,o,c,l,i,s=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>0&&void 0!==s[0]?s[0]:t.design_nonce,n=s.length>1?s[1]:void 0,o=s.length>2?s[2]:void 0,(c={wll_nonce:r,action:"wll_launcher_save_design"}).design=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),e.next=7,(0,Z.j)(c);case 7:l=e.sent,!0===(i=(0,y.R3)(l.data)).success&&null!=i.data&&i.data!=={}?((0,y.NQ)(n?p.common.reset_message:i.data.message),G([])):(B(i.data),(0,y.il)(i.data,{setErrorList:G}));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();i.useEffect((function(){!function(){var e={action:"wll_launcher_settings",wll_nonce:arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.settings_nonce};(0,Z.j)(e).then((function(e){var t=(0,y.R3)(e.data);!0===t.success&&null!==t.data&&t.data!=={}?(l(t.data),j(!1)):!1===t.success&&null!==t.data&&((0,y.NQ)(t.data.message,!1),j(!1))}))}()}),[]);var J=function(){return i.createElement("div",null,i.createElement("div",{className:"bg-primary_extra_light  border border-t-0 border-r-0 border-l-0 rounded-t-xl border-b-card_border"},i.createElement("p",{className:"text-dark text-md font-medium tracking-wide px-2.5 2xl:px-4 py-3 "},p.common.edit_styles)),i.createElement(m.Z,{label:p.design.logo.title,tabIcon:"logo",click:function(){return w("logo")}}),i.createElement(m.Z,{label:p.design.colors.title,tabIcon:"color",click:function(){return w("colors")}}),i.createElement(m.Z,{label:p.design.branding,tabIcon:"brand",click:function(){return w("visibility")}}))};return O?i.createElement(S.Z,null):i.createElement(g.cC.Provider,{value:{errors:z,setErrors:B,errorList:R,setErrorList:G}},i.createElement("div",{className:"w-full flex flex-col gap-y-2 items-start h-full "},i.createElement(s.Z,{title:p.common.design,resetAction:function(){var e=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r);e.design={logo:{is_show:"show",image:""},colors:{theme:{primary:"#6F38C5",text:"white"},buttons:{background:"#FF6B00",text:"white"}},placement:{position:"right",side_spacing:0,bottom_spacing:0},branding:{is_show:"none"}},(0,y._1)((function(){l(e),Q(t.design_nonce,!0,e.design)}),p.common.confirm_description,p.common.ok_text,p.common.cancel_text,p.common.confirm_title)},saveAction:function(){return Q(t.design_nonce,!1,d)}}),i.createElement("div",{className:"flex gap-x-6 items-start w-full h-[590px]"},i.createElement("div",{className:"2xl:w-[30%] w-[40%]  h-full flex flex-col border border-card_border rounded-xl"},function(){switch(v){case"all":return i.createElement(J,null);case"logo":return i.createElement(h,{setActiveSidebar:w});case"colors":return i.createElement(N,{setActiveSidebar:w});case"visibility":return i.createElement(C,{setActiveSidebar:w})}}()),i.createElement("div",{className:"2xl:w-[70%] w-[60%] h-[590px] flex flex-col border border-card_border rounded-xl"},i.createElement(F.Z,null),i.createElement("div",{className:"flex  items-start ".concat("left"===f.placement.position?"justify-start":"justify-end"," relative \n                            w-full h-full  2xl:px-5 md:px-3 px-2 overflow-hidden ")},i.createElement("div",{className:"flex flex-col  py-3 gap-y-1  w-[300px]    absolute  ",style:"left"===f.placement.position?{left:"".concat(+f.placement.side_spacing+16,"px"),bottom:"".concat(+f.placement.bottom_spacing+8,"px")}:{right:"".concat(+f.placement.side_spacing+16,"px"),bottom:"".concat(+f.placement.bottom_spacing+8,"px")}},i.createElement(u.Z,null),i.createElement("div",{className:" h-10 cursor-pointer group flex items-center justify-center gap-x-2 w-10 absolute \n                                    ".concat("right"===f.placement.position&&"right-0"," bottom-1.5 rounded-md"),style:{backgroundColor:"".concat(d.colors.theme.primary)}},i.createElement("div",{className:" flex h-8 items-center justify-center rounded-md w-8  group-hover:animate-swing"},"image"==f.appearance.icon.selected&&""!==f.appearance.icon.image?i.createElement("img",{src:f.appearance.icon.image,className:"object-contain rounded-md w-8 h-8  "}):i.createElement(P.Z,{icon:"".concat(f.appearance.icon.icon),text:"2xl:text-2xl text-xl",color:(0,y.Xv)(d.colors.theme.text)})))))))))}}}]);