"use strict";(self.webpackChunkreact_wordpress=self.webpackChunkreact_wordpress||[]).push([[375],{5458:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294),r=n(2563),l=n(3972);const c=function(e){var t=e.click,n=a.useContext(l.Gr);return a.createElement("div",{className:"flex cursor-pointer items-center px-3 py-2 w-max justify-start ",onClick:t},a.createElement("div",{className:"flex gap-x-2  px-4 py-2 rounded-md border border-card_border"},a.createElement(r.Z,{icon:"back",color:"#161f31"}),a.createElement("p",null,n.common.back)))}},9184:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(885),r=n(7294),l=n(3972);const c=function(e){var t=e.height,n=void 0===t?"h-full":t,c=r.useContext(l.ko).commonState,o=r.useState("Loading..."),s=(0,a.Z)(o,2),i=s[0],m=s[1];return r.useEffect((function(){var e=setTimeout((function(){m("If loading takes a while, please refresh the screen...!")}),3e3);return function(){clearInterval(e)}}),[]),r.createElement("div",{className:"bg-white  text-primary space-y-4 flex flex-col items-center justify-center  w-full ".concat(n)},r.createElement("i",{className:"wlr wlrf-spinner animate-spin  text-2xl   ",style:{color:"".concat(c.design.colors.theme.primary)}}),r.createElement("p",{className:"text-sm font-medium",style:{color:"".concat(c.design.colors.theme.primary)}},i))}},7178:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(1393),l=n(3972),c=n(2563);const o=function(e){var t=e.title,n=e.handleBackIcon,o=a.useContext(l.ko).commonState.design;return a.createElement("div",{className:"flex h-12  items-center  justify-between w-full px-4 lg:px-3 py-2 lg:py-3",style:{backgroundColor:"".concat(o.colors.theme.primary)}},a.createElement("div",{className:"flex gap-x-3 items-center"},a.createElement(c.Z,{click:n,icon:"back",color:"".concat((0,r.Xv)(o.colors.theme.text))}),a.createElement("p",{className:"text-md lg:text-sm  text-".concat(o.colors.theme.text),dangerouslySetInnerHTML:{__html:t}})),a.createElement("div",{className:"flex items-center justify-center h-8 w-8 rounded-md "},a.createElement(c.Z,{icon:"close",fontSize:"2xl:text-3xl text-2xl",color:"".concat((0,r.Xv)(o.colors.theme.text))})))}},9818:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294),r=n(3972),l=n(2563);const c=function(e){var t=e.show,n=a.useContext(r.Gr);return a.useContext(r.ko).appState,"show"===t&&a.createElement("div",{className:"flex items-center justify-center w-full shadow-card_top  bg-white gap-x-1   text-xs_13_16 font-medium py-2 px-5"},a.createElement("p",{className:"p-1 text-extra_light text-xs lg:text-sm font-medium"},n.common.powered_by),a.createElement(l.Z,{icon:"wployalty_logo"}),a.createElement("p",{onClick:function(){return window.open(n.common.launcher_power_by_url)},className:" cursor-pointer text-xs  lg:text-sm font-medium ",style:{color:"#5850ec"}},n.common.wpl_loyalty_text))}},2421:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(3972);const l=function(e){var t=e.label,n=e.tabIcon,l=e.click,c=e.isPro,o=void 0===c||c,s=a.useContext(r.Gr);return a.createElement("div",{onClick:l,className:"flex  ".concat(o?"cursor-pointer":"cursor-not-allowed"," gap-x-2  items-center justify-between w-full text-light px-2.5 2xl:px-4 py-3 2xl:py-4  border border-t-0 border-r-0 border-l-0  border-b-card_border")},a.createElement("div",{className:"flex items-center gap-x-2 "},a.createElement("i",{className:"wlr wlrf-".concat(n," bg text-md font-medium color-important ")}),a.createElement("p",{className:"text-md font-medium"},t)),o?a.createElement("i",{className:"wlr wlrf-arrow_right text-md font-medium color-important "}):a.createElement("div",{className:"flex items-center  cursor-pointer   justify-center "},a.createElement("span",{className:"bg-blue_primary text-white font-medium rounded text-xs px-1.5 py-1",onClick:function(e){e.preventDefault(),window.open(s.common.buy_pro_url)}},s.common.upgrade_text)))}},679:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(5861),r=n(885),l=n(4687),c=n.n(l),o=n(7294),s=n(2940),i=n(7178),m=n(3972),x=n(2563);const u=function(e){var t=e.earn_point;return o.createElement("div",{key:t.id,className:"flex cursor-pointer w-full shadow-card_1 rounded-xl\n                                         items-center justify-between bg-white gap-x-2 lg:gap-x-3 px-2 xl:px-3 py-2 xl:py-3 "},o.createElement("div",{className:"flex items-center justify-start w-full lg:gap-x-4 gap-x-3"},o.createElement(x.Z,{icon:"".concat(t.icon),fontSize:"text-3xl lg:text-4xl"}),o.createElement("div",{className:"flex flex-col gap-y-1 w-full "},o.createElement("p",{className:"text-xs lg:text-sm font-bold text-dark"},t.title),o.createElement("p",{className:"text-xs lg:text-sm font-normal text-light"},t.description)),o.createElement("div",null,o.createElement(x.Z,{icon:"arrow_right"}))))};var d=n(9818),p=n(9184),f=n(1393);const w=function(e){var t=e.activePage,n=o.useContext(m.ko).commonState,l=o.useContext(m.Gr),x=n.design,w=o.useState([]),g=(0,r.Z)(w,2),h=g[0],y=g[1],_=o.useState(!0),v=(0,r.Z)(_,2),E=v[0],b=v[1],N=function(){var e=(0,a.Z)(c().mark((function e(){var t,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={action:"wll_get_member_earn_points",wll_nonce:wll_settings_form.render_page_nonce},e.next=3,(0,s.j)(t);case 3:n=e.sent,!0===(a=(0,f.R3)(n.data)).success&&null!=a.data&&a.data!=={}&&(y(a.data.earn_points),b(!1));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o.useEffect((function(){N()}),[]),o.createElement("div",{className:"h-full flex flex-col relative w-full  "},o.createElement(i.Z,{title:l.common.earn,handleBackIcon:function(){return t.set("home")}}),E?o.createElement(p.Z,{height:"h-[360px]"}):o.createElement("div",{className:"flex flex-col overflow-y-auto h-[360px] w-full px-4 lg:px-3 py-2 lg:py-3 gap-y-2 lg:gap-y-3"},h.map((function(e,t){return o.createElement(u,{key:t,earn_point:e})}))),o.createElement(d.Z,{show:x.branding.is_show}))}},516:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(885),r=n(7294),l=n(3972),c=n(679),o=n(5791),s=n(2563),i=n(1393),m=n(9818);const x=function(e){var t=e.activePage,n=r.useContext(l.ko),a=n.commonState,c=n.appState,o=a.design,x=a.content,u=x.guest,d=u.welcome,p=u.points,f=u.referrals,w=function(e){var t=e.image,n=e.height,a=void 0===n?"h-6":n,l=e.width,c=void 0===l?"w-6":l,o=e.objectFit,s=void 0===o?"object-contain":o;return r.createElement("img",{alt:"image",className:"".concat(a,"  ").concat(c," ").concat(s," rounded-md"),src:t})};return r.createElement("div",{className:"flex flex-col shadow-launcher relative  w-full h-full "},r.createElement("div",{className:"flex  items-center justify-between w-full py-2 px-3"},""==o.logo.image?r.createElement(s.Z,{fontSize:"2xl:text-xl text-md",icon:"wployalty_logo",opactity:"".concat("none"===o.logo.is_show&&"opacity-0")}):r.createElement("img",{loading:"lazy",className:"".concat("none"===o.logo.is_show&&"opacity-0"," object-contain rounded-md h-8 w-12"),src:o.logo.image,alt:"logo_image"}),r.createElement("div",{className:"flex items-center justify-center h-8 w-8 rounded-md ",style:{background:"".concat(o.colors.theme.primary)}},r.createElement(s.Z,{icon:"close",fontSize:"2xl:text-2xl text-xl",color:"".concat((0,i.Xv)(o.colors.theme.text))}))),r.createElement("div",{className:"flex flex-col overflow-y-auto h-max max-h-[360px] w-full px-3 py-2  gap-y-2 lg:gap-y-3"},r.createElement("div",{className:" rounded-xl  flex flex-col items-center justify-start px-3 xl:py-3 py-2 w-full gap-y-1.5 shadow-card_1",style:{backgroundColor:"".concat(o.colors.theme.primary)}},r.createElement("div",{className:"flex flex-col items-center justify-start gap-y-1 text-center"},r.createElement("p",{className:"font-extrabold text-sm  ".concat("white"===o.colors.theme.text?"text-white":"text-black"),dangerouslySetInnerHTML:{__html:(0,i.Mb)(d.texts.title)}}),r.createElement("p",{className:" ".concat("white"===o.colors.theme.text?"text-white":"text-black","  text-xs font-normal "),dangerouslySetInnerHTML:{__html:(0,i.Mb)(d.texts.description)}})),r.createElement("button",{className:"antialiased font-medium  \n                flex items-center justify-center space-x-2 \n                outline-none tracking-normal whitespace-nowrap \n                wp-loyalty-button text-primary px-6 py-2\n                  cursor-pointer min-w-max rounded-md\n                   cursor-pointer",style:{backgroundColor:"".concat(o.colors.buttons.background," ")}},r.createElement("span",{className:"".concat("white"===o.colors.buttons.text?"text-white":"text-black"," 2xl:text-sm text-xs font-semibold "),dangerouslySetInnerHTML:{__html:(0,i.Mb)(d.button.text)}})),r.createElement("div",{className:"flex items-center gap-x-1.5 text-ultra_light text-sm font-medium"},r.createElement("p",{className:"".concat("white"===o.colors.theme.text?"text-white":"text-black","  text-xs "),dangerouslySetInnerHTML:{__html:(0,i.Mb)(d.texts.have_account)}}),r.createElement("span",{className:"font-semibold 2xl:text-sm text-xs ".concat("white"===o.colors.theme.text?"text-white":"text-black"," cursor-pointer"),dangerouslySetInnerHTML:{__html:(0,i.Mb)(d.texts.sign_in)}}))),r.createElement("div",{className:"flex w-full gap-x-3 "},r.createElement("div",{onClick:function(){return t.set("earn_points")},className:"flex flex-col  shadow-launcher cursor-pointer shadow-card_1 px-3 py-2 w-1/2 gap-y-4 rounded-xl shadow-card_1"},r.createElement("div",{className:"w-8 h-8 flex items-center justify-center"},["",void 0].includes(u.points.earn.icon.image)?r.createElement(s.Z,{icon:"fixed-discount",fontSize:"2xl:text-3xl text-2xl"}):r.createElement(w,{width:"w-full",height:"h-full",image:u.points.earn.icon.image})),r.createElement("div",{className:"flex items-center w-full justify-between "},r.createElement("p",{className:"text-xs lg:text-sm text-dark  font-semibold",dangerouslySetInnerHTML:{__html:(0,i.Mb)(u.points.earn.title)}}),r.createElement(s.Z,{icon:"arrow_right"}))),r.createElement("div",{onClick:function(){return t.set("redeem")},className:"flex flex-col  shadow-launcher cursor-pointer  shadow-card_1 px-3 py-2 w-1/2 gap-y-4 rounded-xl shadow-card_1"},r.createElement("div",{className:"w-8 h-8 flex items-center justify-center "},[""].includes(p.redeem.icon.image)?r.createElement(s.Z,{icon:"redeem",fontSize:"2xl:text-3xl text-2xl"}):r.createElement(w,{width:"w-full",height:"h-full",image:u.points.redeem.icon.image})),r.createElement("div",{className:"flex items-center w-full justify-between "},r.createElement("p",{className:"text-xs lg:text-sm text-dark  font-semibold ",dangerouslySetInnerHTML:{__html:(0,i.Mb)(u.points.redeem.title)}}),r.createElement(s.Z,{icon:"arrow_right"})))),x.guest.referrals.is_referral_action_available&&c.is_pro&&r.createElement("div",{className:"flex flex-col shadow-launcher gap-y-1 2xl:gap-y-2 px-3 py-2.5 xl:py-3 rounded-xl shadow-card_1 "},r.createElement("p",{className:"2xl:text-sm text-xs text-dark  font-semibold ",dangerouslySetInnerHTML:{__html:(0,i.Mb)(f.title)}}),r.createElement("p",{className:"text-10px leading-4 text-light font-medium ",dangerouslySetInnerHTML:{__html:(0,i.Mb)(f.description)}}))),r.createElement(m.Z,{show:o.branding.is_show}))},u=function(){var e=r.useState("home"),t=(0,a.Z)(e,2),n=t[0],s=t[1],i=r.useContext(l.ko).commonState.launcher;return r.createElement("div",{className:" h-max h-full flex flex-col gap-3  shadow-launcher overflow-hidden rounded-3xl relative",style:{fontFamily:"".concat(i.font_family),bottom:"44px"}},function(e){switch(e){case"home":return r.createElement(x,{activePage:{value:e,set:s}});case"earn_points":return r.createElement(c.Z,{activePage:{value:e,set:s}});case"redeem":return r.createElement(o.Z,{activePage:{value:e,set:s}})}}(n))}},5791:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(885),r=n(7294),l=n(7178),c=n(3972),o=n(5861),s=n(4687),i=n.n(s),m=n(2563);const x=function(e){var t=e.reward,n=e.is_member,a=e.isRewardOppertunity,l=void 0!==a&&a,o=r.useContext(c.ko).commonState,s=r.useContext(c.Gr),i=o.design;return r.createElement("div",{key:t.id,className:"flex flex-col w-full shadow-card_1 rounded-xl  bg-white  px-2 lg:px-3 py-2 xl:py-3 gap-y-2 xl:gap-y-3 "},r.createElement("div",{className:" flex items-center gap-x-2  w-full justify-between"},r.createElement("div",{className:"flex items-center gap-x-3 lg:gap-x-4 "},r.createElement(m.Z,{icon:"".concat(t.icon),fontSize:"text-3xl lg:text-4xl"}),r.createElement("div",{className:"flex flex-col gap-y-1 w-full "},r.createElement("p",{className:"text-xs xl:text-sm font-bold text-dark"},t.title),r.createElement("p",{className:"text-xs xl:text-sm font-normal text-light",dangerouslySetInnerHTML:{__html:t.action_text}})))),r.createElement("p",{className:"text-xs xl:text-sm font-normal text-light"},t.description),n&&!l&&r.createElement("div",{className:"flex items-center justify-center w-full  "},r.createElement("button",{className:"".concat("white"===i.colors.buttons.text?"text-white":"text-black","\n             w-max h-8 px-3 py-2 rounded-md\n             "),style:{background:"".concat(i.colors.buttons.background)}},s.common.redeem)))};var u=n(2940),d=n(9184),p=n(1393);const f=function(e){var t=e.is_member,n=r.useState(!0),l=(0,a.Z)(n,2),c=l[0],s=l[1],m=r.useState([]),f=(0,a.Z)(m,2),w=f[0],g=f[1],h=function(){var e=(0,o.Z)(i().mark((function e(){var t,n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={action:"wll_get_member_redeem_rewards",wll_nonce:wll_settings_form.render_page_nonce},e.next=3,(0,u.j)(t);case 3:n=e.sent,!0===(a=(0,p.R3)(n.data)).success&&null!==a.data&&a.data!=={}?(g(a.data.redeem_data),s(!1)):!1===a.success&&null!==a.data&&s(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.useEffect((function(){h()}),[]),c?r.createElement(d.Z,{height:"h-[320px]"}):r.createElement("div",{className:"flex flex-col ".concat(t?"h-[320px]":"h-[360px]","  overflow-y-auto  w-full px-4 lg:px-3 py-2 lg:py-3 gap-y-2 lg:gap-y-3")},w.map((function(e,n){return r.createElement(x,{is_member:t,key:n,reward:e})})))},w=function(e){var t=e.coupon,n=e.design,a=e.copied,l=r.useContext(c.Gr);return r.createElement("div",{key:t.id,className:"flex flex-col w-full shadow-card_1 rounded-xl  bg-white  px-2 lg:px-3 py-2 xl:py-3 gap-y-2 xl:gap-y-2.5 "},r.createElement("p",{className:"text-light font-medium text-xs lg:text-sm "},t.expired_text),r.createElement("div",{className:"flex items-center gap-x-3 lg:gap-4 "},r.createElement(m.Z,{icon:"".concat(t.icon),fontSize:"text-3xl lg:text-4xl"}),r.createElement("div",{className:"flex flex-col gap-y-1 w-full "},r.createElement("p",{className:"text-xs xl:text-sm font-bold text-dark"},t.title),r.createElement("p",{className:"text-xs xl:text-sm font-normal text-light"},t.action_text))),r.createElement("div",{className:"flex w-full h-8 gap-x-1.5 items-center justify-between ",style:{borderColor:"".concat(n.colors.theme.primary)}},r.createElement("div",{className:" overflow-hidden  flex w-full h-8   py-2.5 items-center justify-between border-2 border-dashed rounded-md bg-primary_extra_light",style:{borderColor:"".concat(n.colors.theme.primary)}},r.createElement("p",{className:" text-light whitespace-nowrap overflow-hidden px-2 w-full overflow-ellipsis uppercase font-semibold text-xs lg:text-sm",style:{textTransform:"uppercase",borderRight:"2px dashed ".concat(n.colors.theme.primary)},title:t.coupon_code},t.coupon_code),r.createElement(m.Z,{extraStyles:"px-2",click:function(){return e=t.id,void a.set(e);var e},icon:"".concat(a.val==t.id?"tick":"copy")})),r.createElement("div",{className:"flex  items-center justify-center w-[20%]"},r.createElement("button",{className:"".concat("white"===n.colors.buttons.text?"text-white":"text-black","\n             w-max h-8 px-2 rounded-md\n             "),style:{background:"".concat(n.colors.buttons.background)}},l.common.apply_button_text))))},g=function(e){var t=r.useState(!0),n=(0,a.Z)(t,2),l=n[0],s=n[1],m=r.useState([]),x=(0,a.Z)(m,2),f=x[0],g=x[1],h=r.useContext(c.ko).commonState.design,y=r.useState(""),_=(0,a.Z)(y,2),v=_[0],E=_[1],b=function(){var e=(0,o.Z)(i().mark((function e(){var t,n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={action:"wll_get_member_redeem_coupons",wll_nonce:wll_settings_form.render_page_nonce},e.next=3,(0,u.j)(t);case 3:n=e.sent,!0===(a=(0,p.R3)(n.data)).success&&null!==a.data&&a.data!=={}?(g(a.data.redeem_coupons),s(!1)):!1===a.success&&null!==a.data&&s(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.useEffect((function(){b()}),[]),l?r.createElement(d.Z,{height:"h-[320px]"}):r.createElement("div",{className:"flex flex-col h-[320px] overflow-y-auto  w-full px-4 lg:px-3 py-2 lg:py-3 gap-y-2 lg:gap-y-3"},f.map((function(e,t){return r.createElement(w,{key:t,coupon:e,design:h,copied:{val:v,set:E}})})))},h=function(e){var t=e.click,n=e.active,a=e.name,l=r.useContext(c.ko).commonState;return r.createElement("div",{onClick:t,className:"flex p-2 items-center cursor-pointer justify-center w-1/2 h-12 border-b-2 ",style:{borderColor:"".concat(n?"".concat(l.design.colors.theme.primary):"transparent"," "),color:"".concat(n?"".concat(l.design.colors.theme.primary):"#161F31")}},r.createElement("p",{className:"lg:text-sm text-xs font-medium"},a))};var y=n(9818);n(7420);const _=function(e){var t=r.useState(!0),n=(0,a.Z)(t,2),l=n[0],s=n[1],f=r.useState([]),w=(0,a.Z)(f,2),g=w[0],h=w[1],y=r.useContext(c.Gr),_=function(){var e=(0,o.Z)(i().mark((function e(){var t,n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={action:"wll_get_reward_opportunity_rewards",wll_nonce:wll_settings_form.render_page_nonce},e.next=3,(0,u.j)(t);case 3:n=e.sent,!0===(a=(0,p.R3)(n.data)).success&&null!==a.data&&a.data!=={}?(h(a.data.reward_opportunity),s(!1)):!1===a.success&&null!==a.data&&s(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.useEffect((function(){_()}),[]),l?r.createElement(d.Z,{height:"h-[320px]"}):g.length>0?r.createElement("div",{className:"flex flex-col h-[320px]  overflow-y-auto  w-full px-4 lg:px-3 py-2 lg:py-3 gap-y-2 lg:gap-y-3"},g.map((function(e,t){return r.createElement(x,{key:t,reward:e,isRewardOppertunity:!0})}))):r.createElement("div",{className:"wll-rewards-list-empty-container h-[320px] flex flex-col items-center justify-center gap-y-2 "},r.createElement(m.Z,{icon:"data-not-found",fontSize:"text-4xl"}),r.createElement("p",{className:"wll-rewards-list-empty-text text-xs lg:text-sm text-light font-normal"},y.common.no_result_found))},v=function(e){var t=e.activePage,n=e.activeSidebar,o=r.useContext(c.Gr),s=r.useContext(c.ko).commonState,i=r.useState("reward_opportunities"),m=(0,a.Z)(i,2),x=m[0],u=m[1],d=r.useState("reward_opportunities"),p=(0,a.Z)(d,2),w=p[0],v=p[1],E=s.design,b=function(e){u(e),"my_rewards"===e&&v("coupons"===w?"coupons":"rewards"),"reward_opportunities"===e&&v("reward_opportunities")};return r.createElement("div",{className:"h-full flex flex-col relative  w-full "},r.createElement(l.Z,{title:o.common.redeem,handleBackIcon:function(){return t.set("home")}}),"member"===n&&r.createElement("div",{className:"flex w-full h-12 items-center   ",style:{borderBottom:"1px solid rgba(218, 218, 231, 1)"}},r.createElement(h,{click:function(){return b("reward_opportunities")},name:o.common.rewards_tab.reward_opportunity,active:"reward_opportunities"===x}),r.createElement(h,{click:function(){return b("my_rewards")},name:o.common.rewards_tab.my_rewards,active:["rewards","coupons"].includes(w)})),"member"===n&&"my_rewards"===x&&r.createElement("div",{className:"flex w-full h-12 items-center border-b border-card_border "},r.createElement(h,{click:function(){v("rewards")},name:o.common.rewards_title,active:"rewards"===w}),r.createElement(h,{click:function(){v("coupons")},name:o.common.coupons_title,active:"coupons"===w})),function(e){switch(e){case"rewards":return r.createElement(f,{is_member:"member"===n});case"coupons":return r.createElement(g,null);case"reward_opportunities":return r.createElement(_,null)}}(w),r.createElement(y.Z,{show:E.branding.is_show}))}},5084:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const r=function(e){var t=e.title,n=e.click;return a.createElement("div",{className:"bg-primary_extra_light border border-t-0 border-r-0 border-l-0 rounded-t-xl border-b-card_border px-2.5 2xl:px-4 py-3 flex items-center gap-x-2"},a.createElement("i",{className:"text-dark wlr wlrf-arrow_left cursor-pointer text-md 2xl:text-lg font-medium ",onClick:n}),a.createElement("p",{className:"text-dark  text-sm 2xl:text-md  font-medium tracking-wide  "},t))}}}]);