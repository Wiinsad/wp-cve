"use strict";(self.webpackChunkreact_wordpress=self.webpackChunkreact_wordpress||[]).push([[62],{9449:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var r=a(7294),l=a(9250),n=a(3972),i=a(1257),c=a(4264),o=a(1489),s=a(3089),d=a(261);const m=function(e){var t=e.span,a=e.edit_to,i=e.singleDeleteAlert,c=e.delete_to,o=e.item,m=e.duplicate_action,p=(0,r.useContext)(n.Gr),x=(0,r.useContext)(n.jZ),u=(0,l.s0)();return r.createElement("div",{className:"grid ".concat(t,"   text-textColor text-15px \n        font-medium w-11/12 antialiased overflow-ellipsis \n        overflow-hidden justify-items-end whitespace-nowrap")},r.createElement("div",{className:"flex  items-center ".concat(x?"justify-end":"justify-center","  space-x-5  w-full")},x&&r.createElement(d.Z,{click:function(){m(o.id)}}),(0,s.uM)(x,o.discount_type)&&r.createElement((function(e){var t=e.click;return r.createElement("div",{className:"pt-1 pb-0.5  cursor-pointer  max-w-max",onClick:t,style:{paddingRight:"6.5px",paddingLeft:"6.5px"},title:p.common.edit_text},r.createElement("i",{className:"wlr wlrf-edit-3 hover:text-primary text-light  text-sm 2xl:text-md  leading-3 color-important "}))}),{click:function(){u("/".concat(a))}}),r.createElement((function(e){var t=e.click;return r.createElement("div",{className:"pt-1 pb-0.5 cursor-pointer  max-w-max",onClick:t,style:{paddingRight:"6.5px",paddingLeft:"6.5px"},title:p.common.delete_text},r.createElement("i",{className:"wlr wlrf-delete text-light  text-sm 2xl:text-md  leading-3 hover:text-redd color-important  leading-0"}))}),{click:function(){return i(o.id,c,p.rewards.delete_alert_message,p.rewards.delete_ok,p.rewards.delete_cancel,p.rewards.delete_reward)}})))};a(8921);var p=a(4215);const x=function(e){var t=e.keys,a=e.rewardTitle,d=e.RewardType,x=e.reward_type,u=e.active,w=(e.toggleReward,e.edit_to),f=void 0===w?"edit_earn_campaign/subtotal/0":w,g=e.enable_disable_toggle,h=e.delete_to,v=void 0===h?null:h,_=e.item,E=e.AddCheck,y=e.AllCheckList,k=(e.showCampaignList,e.handleShowUsedRewardCampaignList),N=e.duplicateReward,C=(0,l.s0)(),b=(0,r.useContext)(n.Gr),R=(0,r.useContext)(n.jZ),j=r.useContext(n.ko).appState;return r.createElement("div",{className:"grid grid-cols-12 gap-4  w-full min-w-full py-4  border border-light_border rounded-lg shadow-card ",style:{minWidth:"1024px"},key:t},r.createElement(i.Z,{checked:y.includes(_.id),click:function(){return E(_.id)}}),r.createElement((function(e){var t=e.span,a=e.rewardTitle,l=e.description,n=e.reward_type,i=e.icon,c=e.discount_type;return e.count,r.createElement("div",{className:"grid ".concat(t,"  antialiased overflow-ellipsis whitespace-nowrap ")},r.createElement("div",{className:"flex items-center justify-start gap-x-2  w-full overflow-hidden"},r.createElement("div",{className:"flex items-center gap-x-2  w-[95%] overflow-hidden"},r.createElement("div",{className:"flex  items-center justify-center w-14 h-14"},["",null,"null"].includes(i)?r.createElement("i",{className:"wlr wlrf-".concat(c," text-2xl 2xl:text-3xl text-primary leading-0 color-important ")}):r.createElement("img",{src:i,alt:"reward_image_preview",className:" object-contain p-0.5 rounded-md h-10 w-10 "})),r.createElement("div",{className:"flex flex-col items-start space-y-2  w-full overflow-hidden"},r.createElement("h5",{className:"text-dark  gap-2 ".concat((0,s.uM)(R,c)&&"cursor-pointer"," text-sm 2xl:text-md_16_l_18 overflow-hidden overflow-ellipsis  w-full font-semibold whitespace-pre"),onClick:function(e){if(e.preventDefault(),e.ctrlKey){var t="".concat(j.local.common.edit_reward_url,"/").concat(c,"/").concat(_.id);window.open(t,"_blank")}else(0,s.uM)(R,c)&&C("/".concat(f))},title:a},a),r.createElement("p",{title:l,className:"text-light text-xs  2xl:text-sm font-normal overflow-hidden overflow-ellipsis whitespace-pre  w-full"},l))),r.createElement("div",{className:"  border   ".concat("redeem_point"===n?"bg-primary_extra_light text-primary border-primary":"bg-orange_light text-orange border-orange","  px-3 py-1  rounded text-xs tracking-wide")},"redeem_point"===n?(0,s.g_)(b.common.point,7):(0,s.g_)(b.common.coupon,7))))}),{span:"col-span-4",rewardTitle:a,description:_.description,reward_type:x,icon:_.icon,discount_type:_.discount_type,count:_.campaign_count,id:_.id,created_date:_.created_at}),r.createElement((function(e){var t=e.span,a=e.RewardType;return e.count,r.createElement("div",{className:"gird ".concat(t," self-center ")},r.createElement("div",{className:"flex h-14 items-center gap-x-2"},r.createElement("p",{className:"  text-dark text-xs 2xl:text-sm font-medium  antialiased overflow-ellipsis whitespace-nowrap overflow-hidden self-center"},a)))}),{span:"col-span-2",count:_.campaign_count,RewardType:d}),r.createElement((function(e){var t=e.span,a=e.count,l=e.handleShowUsedRewardCampaignList,n=e.reward_type;return r.createElement("div",{className:"gird ".concat(t,"  "),onClick:function(){"redeem_coupon"===n&&a>0&&l(_.id)}},"redeem_coupon"===n&&a>0?r.createElement("div",{className:"flex h-14 items-center gap-x-1 2xl:gap-x-2 cursor-pointer "},r.createElement("div",{className:"flex items-center gap-x-1 text-dark 2xl:text-sm lg:text-10px text-8px hover:text-primary leading-3 font-medium"},r.createElement("span",null,a),r.createElement("p",{className:"hidden 2xl:block   antialiased overflow-ellipsis\n                 whitespace-nowrap overflow-hidden self-center"}," ",b.earn_campaign.name)),r.createElement("i",{className:"hover:text-primary wlr wlrf-view 2xl:text-sm text-xs text-light color-important "})):r.createElement("p",{className:"text-dark 2xl:text-lg text-md flex items-center  h-full w-full"},"-"))}),{span:"col-span-1",reward_type:x,count:_.campaign_count,handleShowUsedRewardCampaignList:k}),r.createElement((function(e){var t=e.span;return r.createElement("div",{className:" gird ".concat(t," self-center")},r.createElement(c.Z,{active:u,height:"2xl:h-4 h-3",width:"2xl:w-4 w-3",containerWidth:"w-8 2xl:w-9",containerHeight:"h-4 2xl:h-5",click:function(e){e.preventDefault(),(0,s.uM)(R,_.discount_type)?g(_.id,_.active):alertify.error(b.common.premium)}}))}),{span:"col-span-1"}),r.createElement(p.Fl,{span:"col-span-1",id:_.id,createdDate:_.created_at}),r.createElement(m,{span:"col-span-2",delete_to:v,item:_,duplicate_action:N,singleDeleteAlert:o.lA,edit_to:f}))}},261:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(7294),l=a(3972);const n=function(e){var t=e.click,a=r.useContext(l.Gr);return r.createElement("div",{className:"pt-1 pb-0.5  cursor-pointer text-xl text-textColor max-w-max",onClick:t,style:{paddingRight:"6.5px",paddingLeft:"6.5px"},title:a.common.duplicate_text},r.createElement("i",{className:"wlr wlrf-copy hover:text-primary text-light  text-sm 2xl:text-md leading-3 color-important "}))}}}]);