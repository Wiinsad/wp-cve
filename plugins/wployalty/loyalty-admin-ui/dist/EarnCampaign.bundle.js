"use strict";(self.webpackChunkreact_wordpress=self.webpackChunkreact_wordpress||[]).push([[690],{6493:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(7294),n=a(9250),c=a(1401),i=a(874);const r=function(e){var t=e.icon,a=e.title,r=e.description,s=e.button1,o=e.button2,m=e.createButton,u=void 0!==m&&m,d=e.button_1,p=e.to,f=e.isPro,v=(0,n.s0)();return l.createElement("div",{className:"w-full  h-120 flex flex-col  justify-center items-center gap-y-2 2xl:gap-y-4 bg-white"},l.createElement("div",null,t),l.createElement("h2",{className:" text-dark font-bold"},a),l.createElement("p",{className:"text-light text-base font-normal  text-center tracking-wide max-w-xl "},r),l.createElement("div",{className:"flex items-center justify-center gap-2 2xl:gap-3"},s&&l.createElement(i.Z,{padding:"px-3 2xl:px-5 py-2 2xl:py-3",bgColor:"bg-white",outline:!0,textStyle:"text-primary font-medium text-xs 2xl:text-sm_14_l_20",outlineStyle:"border-primary_border",others:"hover:shadow-none",click:function(e){e.preventDefault(),f?v(d):window.open(c.t6)}},s),u&&l.createElement(i.Z,{padding:"px-3 2xl:px-5 py-2 2xl:py-3",bgColor:"bg-primary",outline:!1,textStyle:"text-white font-medium text-xs 2xl:text-sm_14_l_20",others:"hover:shadow-none",click:function(e){e.preventDefault(),v(p)}},o)))}},1554:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(7294),n=a(3972);const c=function(e){var t=e.setActive,a=e.activeState,n=e.setActiveState,c=e.right,i=e.activeLabels;return l.createElement("div",{className:"flex   flex-col border rounded-lg bg-white w-55 text-light border-light_border z-10 absolute ".concat(c," top-13 overflow-hidden")},i.map((function(e,c){return l.createElement("p",{key:c,onClick:function(){!function(e){t(!1),n({value:e.value,label:e.label})}(e)},className:"flex items-center  px-4 py-2 justify-between ".concat(e.value===a.value?"bg-primary_extra_light text-primary":"bg-white text-dark "," hover:bg-primary_extra_light cursor-pointer hover:bg-opacity-50")},e.label,e.value===a.value&&l.createElement("span",{className:"flex items-center"},l.createElement("i",{className:" wlr wlrf-tick color-important font-medium  text-lg 2xl:text-xl leading-0 cursor-pointer "})))})))},i=function(e){var t=e.icon,a=e.active,i=e.setActive,r=e.activeState,s=e.setActiveState,o=e.activeLabels,m=e.width,u=void 0===m?"w-36":m,d=e.title,p=e.closeOtherDropDown,f=l.useContext(n.Gr);return l.createElement("div",{className:"relative flex items-center border justify-between  ".concat(u," rounded-lg border-light_border p-1.5 cursor-pointer "),onClick:function(){p(),i(!a)}},l.createElement("div",{className:"flex items-center justify-start space-x-2 text-10px xl:text-xs 2xl:text-sm_14_l_20 "},l.createElement("p",{className:"font-medium text-light"},d||f.common.filter),l.createElement("p",{className:"text-dark font-semibold"},r.label)),l.createElement("div",null,t),a&&l.createElement(c,{active:a,setActive:i,activeState:r,setActiveState:s,right:"right-0",activeLabels:o,width:"w-40"}))}},2304:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(7294),n=[{value:5},{value:10},{value:20},{value:50},{value:100}];const c=function(e){e.editlimit;var t=e.setEditLimit,a=e.limitFilter,c=e.setLimitFilter,i=e.right,r=void 0===i?0:i;return[5,10,20,50,100].includes(a.value),l.createElement("div",{className:"absolute flex  flex-col border rounded-lg bg-white w-23  text-light border-light_border z-10  ".concat(r,"  bottom-14 overflow-hidden")},n.map((function(e,n){return l.createElement("p",{key:n,onClick:function(){return function(e){t(!1),c({value:e.value})}(e)},className:"flex items-center  px-4 py-2 justify-between ".concat(e.value==a.value?"bg-primary_extra_light text-primary":"bg-white text-dark "," hover:bg-primary_extra_light cursor-pointer hover:bg-opacity-50")},e.value,e.value==a.value&&l.createElement("span",{className:"flex items-center"},l.createElement("i",{className:" wlr wlrf-tick color-important font-medium  text-lg 2xl:text-xl leading-0 cursor-pointer "})))})))},i=function(e){var t=e.editLimit,a=e.setEditLimit,n=e.limitFilter,i=e.setLimitFilter,r=e.closeOtherDropDown;return l.createElement("div",{className:"relative flex items-center border justify-between h-12 w-23 px-4 py-2 space-x-3 rounded-lg border-light_border   cursor-pointer ",onClick:function(){r(),a(!t)}},l.createElement("div",{className:"text-dark font-medium text-sm_14_l_20"},n.value),l.createElement("div",null,l.createElement("i",{className:"text-xl ml-2 text-light leading-0 antialiased wlr wlrf-updown color-important "})),t&&l.createElement(c,{editLimit:t,setEditLimit:a,limitFilter:n,setLimitFilter:i,right:"right-0"}))}},7528:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var l=a(2982),n=a(4942),c=a(885),i=a(7294),r=a(874),s=a(6732),o=a(9250),m=a(8085),u=a(3972),d=a(6493),p=a(3007),f=a(4753),v=a(3089),x=a(1489),g=a(2304),_=a(1554),h=a(1257);const w=function(e){var t=e.AllCheck,a=e.AllCheckList,l=e.setAllCheck,n=e.State,c=e.active,r=e.setActive,s=e.setSortActive,o=e.activeState,m=e.setActiveState,d=e.CommonState,p=i.useContext(u.Gr),f=(0,i.useContext)(u.jZ),x=function(e){var t=e.children,a=e.span,l=e.others,n=void 0===l?null:l;return i.createElement("p",{className:"grid ".concat(a," mt-1 text-10px 2xl:text-12px text-light   text-sm font-bold uppercase leading-3 2xl:leading-4   ").concat(n)},t)};return i.createElement("div",{className:"grid grid-cols-12 gap-3  w-full min-w-full  py-4 items-center self-center",style:{minWidth:"1024px"}},i.createElement(h.Z,{checked:t&&a.length===n.items.length,click:function(){return l(!t)}}),i.createElement((function(e){var t=e.children,a=e.span,l=e.others,n=void 0===l?null:l;return i.createElement("div",{className:"flex items-center justify-start space-x-2  ".concat(a," ")},i.createElement("div",{onClick:function(){s(!1),(0,v.c3)(c,r,p.common.name_desc,p.common.name_asc,"name_desc","name_asc",m,d,"campaigns")},className:"flex items-center justify-start space-x-2 cursor-pointer"},i.createElement("p",{className:" grid ".concat(a," mt-1 text-10px 2xl:text-12px text-light whitespace-nowrap  text-sm font-bold uppercase leading-3 2xl:leading-4   ").concat(n)},t),i.createElement("span",{className:"text-light flex items-center"},["name_asc","name_desc"].includes(o.value)?i.createElement("i",{className:" color-important wlr wlrf-".concat("name_asc"===o.value?"sort-asc":"sort-desc"," text-sm  transition-all duration-300 ")}):i.createElement("i",{className:" color-important wlr wlrf-sort text-sm  transition-all duration-300  "}))))}),{span:"col-span-4"},p.rewards.title_description),i.createElement(x,{span:"col-span-2"},p.earn_campaign.campaign_type),i.createElement(x,{span:"col-span-1"},p.earn_campaign.valid_till),i.createElement((function(e){var t=e.children,a=e.span,l=e.others,n=void 0===l?null:l;return i.createElement("div",{className:"flex items-center justify-start space-x-2  ".concat(a,"  w-16 2xl:w-[72px]")},i.createElement("div",{onClick:function(){s(!1),(0,v.c3)(c,r,p.common.active_desc,p.common.active_asc,"active_desc","active_asc",m,d,"campaigns")},className:"flex items-center justify-start space-x-2 cursor-pointer"},i.createElement("p",{className:"grid ".concat(a," mt-1 text-10px 2xl:text-12px text-light   text-sm font-bold uppercase leading-3 2xl:leading-4   ").concat(n)},t),i.createElement("span",{className:"text-light flex items-center"},["active_asc","active_desc"].includes(o.value)?i.createElement("i",{className:" color-important wlr wlrf-".concat("active_asc"===o.value?"sort-asc":"sort-desc"," text-sm  transition-all duration-300 ")}):i.createElement("i",{className:" color-important wlr wlrf-sort text-sm  transition-all duration-300  "}))))}),{span:"col-span-1 "},p.rewards.enable_disable),i.createElement(x,{span:"col-span-1"},p.levels.created_on_label),i.createElement(x,{span:"col-span-2 ".concat(f?"justify-end":"justify-center"),others:" mr-10"},p.common.actions))};var b=a(9902),y=a(2382);function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var N=i.lazy((function(){return a.e(196).then(a.bind(a,3749))}));const k=function(){var e=(0,o.s0)(),t=i.useContext(u.jZ),a=i.useContext(u.Gr),n=i.useContext(u.ko),h=n.CommonState,E=n.setCommonState,k=n.appState,C=h.campaigns,Z=C.sort,j=C.status,A=C.limit,D=C.search,O=!1,L=i.useState({items:[],pageCount:1,edit_base_url:""}),P=(0,c.Z)(L,2),F=P[0],R=P[1],G=i.useState(""),z=(0,c.Z)(G,2),H=z[0],B=z[1],M=i.useState(!1),T=(0,c.Z)(M,2),q=T[0],K=T[1],W=i.useState(!0),I=(0,c.Z)(W,2),J=I[0],Q=I[1],U=i.useState(!1),V=(0,c.Z)(U,2),X=V[0],Y=V[1],$=i.useState([]),ee=(0,c.Z)($,2),te=ee[0],ae=ee[1],le=i.useState(!1),ne=(0,c.Z)(le,2),ce=ne[0],ie=ne[1],re=i.useState(!1),se=(0,c.Z)(re,2),oe=se[0],me=se[1],ue=i.useState(!1),de=(0,c.Z)(ue,2),pe=de[0],fe=de[1],ve=[{value:"id_asc",label:a.common.id_asc},{value:"id_desc",label:a.common.id_desc},{value:"name_asc",label:a.common.name_asc},{value:"name_desc",label:a.common.name_desc},{value:"active_asc",label:a.common.active_asc},{value:"active_desc",label:a.common.active_desc}],xe=[{value:"all",label:a.common.active_all},{value:"active",label:a.common.active},{value:"in_active",label:a.common.inactive}],ge=function(e){var t={wlr_nonce:k.local.earn_campaign.wlr_earn_campaign_nonce,action:"wlr_get_campaigns",limit:A.value,offset:void 0!==(null==e?void 0:e.offset)?e.offset:C.offset,condition_field:j.value,sorting_field:Z.value,search:(null==e?void 0:e.search)||D};Q(!0),(0,s.j0)(t).then((function(e){var t=(0,v.R3)(e.data);!0===t.success&&null!==t.data&&t.data!=={}?(R((function(e){return S(S({},F),{},{items:t.data.items,edit_base_url:t.data.edit_base_url,pageCount:Math.ceil(t.data.total_count/t.data.limit)})})),Q(!1)):!1===t.success&&null!==t.data&&(alertify.error(t.data.message),B(D)),Q(!1)}))},_e=function(e){var t=(0,l.Z)(te);t.includes(e)?(t.splice(t.indexOf(e),1),ae(t)):ae([].concat((0,l.Z)(t),[e]))};i.useLayoutEffect((function(){var e=[];X?(F.items.map((function(t){return e.push(t.id)})),ae(e)):ae([])}),[X]),i.useEffect((function(){0!==F.items.length&&F.items.length===te.length&&Y(!0)}),[te]),i.useEffect((function(){O=!0,ge()}),[]),i.useEffect((function(){if(!O){var e=S({},h);e.campaigns.offset=0,E(e),ge()}}),[j,A,Z]);var he=function(e){var t={wlr_nonce:k.local.earn_campaign.wlr_earn_campaign_nonce,action:"wlr_delete_campaign",id:e};(0,s.j0)(t).then((function(e){var t=(0,v.R3)(e.data);!0===t.success&&null!==t.data&&t.data!=={}?alertify.success(t.data.message):!1===t.success&&null!==t.data&&alertify.error(t.data.message),ge()}))},we=function(e){var t={wlr_nonce:k.local.earn_campaign.wlr_earn_campaign_nonce,action:"wlr_bulk_action_campaigns",selected_list:te,action_mode:e};(0,s.j0)(t).then((function(e){var t=(0,v.R3)(e.data);!0===t.success&&null!==t.data&&t.data!=={}?(alertify.success(t.data.message),ae([])):!1===t.success&&null!==t.data&&alertify.error(t.data.message);var a={offset:F.offset};Y(!1),ge(a)}))},be=function(e,t){var a={wlr_nonce:k.local.common.wlr_common_user_nonce,action:"wlr_toggle_campaign_active",id:e};a.active="1"==t?"0":"1",(0,s.j0)(a).then((function(t){Q(!0);var a=(0,v.R3)(t.data);if(!0===a.success&&null!==a.data&&a.data!=={}){var n=(0,l.Z)(F.items);n.map((function(t){t.id===e&&(t.active="0"===t.active?"1":"0")})),R(S(S({},F),{},{items:n})),alertify.success(a.data.message)}else!1===a.success&&null!==a.data&&alertify.error(a.data.message);Q(!1)}))},ye=function(){B(D);var e=S({},h);e.campaigns.offset=0,E(e),ge({search:D,offset:0})},Ee=function(e){var t={wlr_nonce:k.local.earn_campaign.wlr_earn_campaign_nonce,action:"wlr_duplicate_campaign",campaign_id:e};Q(!0),(0,s.j0)(t).then((function(e){var t=(0,v.R3)(e.data);!0===t.success&&null!==t.data&&t.data!=={}?(ge(),alertify.success(t.data.message)):!1===t.success&&null!==t.data&&(Q(!1),alertify.error(t.data.message))}))};return i.createElement("div",{className:"bg-white  w-full rounded-b-md h-full flex flex-col items-start py-5 px-8 space-y-4"},i.createElement("div",{className:"flex items-center justify-between w-full "},i.createElement(f.Z,{title:a.earn_campaign.name}),i.createElement("div",{className:"flex items-center space-x-3 relative h-11"},te.length>0?i.createElement("div",{className:"flex items-center w-full space-x-3"},t&&i.createElement(r.Z,{id:"multi_deactivate",icon:i.createElement("i",{className:"text-md leading-0 antialiased wlr wlrf-deactivate text-light color-important "}),bgColor:"bg-white",textStyle:"text-light font-medium text-sm_14_l_20",padding:"px-5 py-2.5",outline:!0,outlineStyle:"border-light_border",click:function(e){e.preventDefault(),we("deactivate")}},a.common.deactivate),t&&i.createElement(r.Z,{id:"multi_activate",icon:i.createElement("i",{className:"text-md leading-0 antialiased wlr wlrf-activate text-primary color-important "}),bgColor:"bg-primar",textStyle:"text-primary font-medium text-sm_14_l_20",padding:"px-5 py-2.5",outline:!0,outlineStyle:"border-primary",click:function(e){e.preventDefault(),we("activate")}},a.common.activate),i.createElement(r.Z,{id:"delete_campaigns",icon:i.createElement("i",{className:"text-md leading-0 antialiased wlr wlrf-delete color-important "}),bgColor:"bg-white",textStyle:"text-redd font-medium text-sm_14_l_20",padding:"px-5 py-2.5",outline:!0,outlineStyle:"border-redd",click:function(e){e.preventDefault(),(0,x.Gr)(we,a.earn_campaign.delete_multi_alert_message,a.earn_campaign.delete_ok,a.earn_campaign.delete_cancel,a.earn_campaign.delete_campaign)}},a.common.delete)):i.createElement("div",{className:"flex items-center space-x-3"},i.createElement(p.Z,{id:"search_campaigns",search_icon_id:"search_campaign_icon",placeHolder:a.earn_campaign.search,value:D,onChange:function(e){var t=S({},h);t.campaigns.search=e.target.value,E(t)},onKeyDown:function(e){13===e.keyCode&&(e.preventDefault(),ye())},click:function(e){e.preventDefault(),ye(),ie(!1),me(!1),K(!1)},onfocus:function(e){ie(!1),me(!1),K(!1)},others:"w-32.5 xl:w-37.5 2xl:w-45"}),i.createElement(_.Z,{active:ce,setActive:ie,State:F,setState:R,activeState:j,setActiveState:function(e){var t=S({},h);t.campaigns.status={value:e.value,label:e.label},E(t)},activeLabels:xe,icon:i.createElement("i",{className:"2xl:text-xl xl:text-md text-sm ml-1 2xl:ml-2  text-light leading-0 antialiased wlr wlrf-filter color-important "}),width:"w-32 xl:w-34 2xl:w-36",closeOtherDropDown:function(){K(!1),me(!1)}}),i.createElement(_.Z,{active:oe,setActive:me,State:F,setState:R,activeState:Z,setActiveState:function(e){var t=S({},h);t.campaigns.sort={value:e.value,label:e.label},E(t)},activeLabels:ve,title:a.common.sort_by,width:"w-41 xl:w-41.5 2xl:w-44",icon:i.createElement("i",{className:"2xl:text-xl xl:text-md text-sm ml-1 2xl:ml-2  text-light leading-0 antialiased wlr wlrf-filter color-important "}),closeOtherDropDown:function(){K(!1),ie(!1)}}),i.createElement(r.Z,{id:"create_new_campaign",bgColor:"bg-primary",icon:i.createElement("i",{className:"2xl:text-md xl:text-sm text-xs  leading-0 antialiased wlr wlrf-campaigns color-important "}),padding:"xl:px-3 2xl:px-5 px-2.5 py-3",textStyle:"text-white font-medium  2xl:text-sm_14_l_20 text-xs",click:function(t){t.preventDefault(),e("/add_new_campaign")}},a.earn_campaign.create_new_campaign)))),i.createElement("div",{className:"flex flex-col items-start w-full  ",onClick:function(){ie(!1),me(!1),K(!1)}},i.createElement(w,{AllCheck:X,AllCheckList:te,setAllCheck:Y,State:F,active:pe,setActive:fe,activeState:Z,setActiveState:E,setSortActive:me,CommonState:h}),J?i.createElement(y.Z,{listData:A.value,dataHeight:"h-20",height:"h-108"}):F.items.length>0?i.createElement("div",{className:"w-full h-full flex flex-col  space-y-2",style:{minHeight:"432px"}},F.items.map((function(e){return i.createElement(i.Suspense,{key:e.id,fallback:i.createElement(b.Z,{height:"h-20"})},i.createElement(N,{key:e.id,rewardTitle:e.name,campaignType:(0,v.qL)(a.common.action_types,e.action_type,a.earn_campaign.name),active:"1"==e.active,edit_to:"edit_earn_campaign/".concat(e.action_type,"/").concat(e.id),enable_disable_toggle:be,delete_to:he,item:e,end_date:e.end_date_format,AddCheck:_e,AllCheckList:te,duplicateCampaign:Ee}))}))):i.createElement(d.Z,{icon:i.createElement("i",{className:"text-6xl 2xl:text-8xl text-primary  wlr wlrf-campaign-empty color-important "}),title:["in_active","active"].includes(j.value)||H?a.common.no_record_found:a.earn_campaign.empty_title,description:!["in_active","active"].includes(j.value)&&!H&&a.earn_campaign.empty_supporting_text,button2:a.earn_campaign.create_new_campaign,createButton:!["in_active","active"].includes(j.value)&&!H,to:"/add_new_campaign"})),i.createElement("div",{className:"flex items-center justify-end  w-full py-3"},F.items.length>0&&i.createElement(g.Z,{editLimit:q,setEditLimit:K,limitFilter:A,setLimitFilter:function(e){var t=S({},h);t.campaigns.limit={value:e.value},E(t)},closeOtherDropDown:function(){ie(!1),me(!1)}}),F.pageCount>1&&i.createElement(m.Z,{handlePageClick:function(e){var t=e.selected,a=Math.ceil(t*A.value),l=S({},h);l.campaigns.offset=a,E(l),ge()},pageCount:F.pageCount,limit:!0,forcePage:C.offset/C.limit.value,loading:J})))}}}]);