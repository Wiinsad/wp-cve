"use strict";(self.webpackChunkreact_wordpress=self.webpackChunkreact_wordpress||[]).push([[362],{8807:(e,t,a)=>{a.r(t),a.d(t,{default:()=>S});var l=a(4942),n=a(885),r=a(7294),c=a(3089),o=a(6732),s=a(6048),i=a(3972),m=a(4753),d=a(1401);const u=function(e){var t=e.Dropdown,a=e.setDropdown,l=e.setcustom,n=e.Filter_list,c=e.Filter,o=e.fromDate,s=e.toDate,i=e.custom;return r.createElement("div",{onClick:function(){a(!t),l(!1)},className:"flex  items-center justify-end space-x-3   p-2 px-3 rounded-md cursor-pointer h-10.5"},r.createElement("i",{className:"text-xl leading-0 antialiased wlr wlrf-calendar color-important -mt-0.5"}),r.createElement("div",{className:"text-sm text-heading font-medium text-dark antialiased capitalize flex items-center w-full space-x-3"},r.createElement("p",{className:""}," ",n[c])," ","Custom"===n[c]&&r.createElement("div",null,r.createElement("span",null,"( ",o)," - ",r.createElement("span",null,s," )"))),r.createElement("div",{className:"text-light"},r.createElement("i",{className:"wlr wlrf-down text-lg color-important transform duration-300 ".concat((t||i)&&"rotate-180 ")})))};var f=a(874),h=a(9081),p=a(3399),w=a(7338);const x=function(e){var t=e.children,a=e.value,l=e.setFilter,n=e.setDropdown,c=e.Filter,o=e.Dropdown,s=e.setcustom,i=e.custom;return r.createElement("p",{className:"text-xs 2xl:text-sm ".concat(a==c&&"bg-primary_extra_light"," text-light flex items-center justify-center antialiased py-3 px-2 cursor-pointer hover:bg-primary_extra_light hover:rounded"),onClick:function(){l(a),n(!o),"custom"==a&&s(!i)}},t)},_=function(e){var t=e.Dropdown,a=e.setDropdown,l=e.setFilter,n=e.Filter_list,o=e.Filter,s=e.custom,m=e.fromDate,d=e.toDate,u=e.setFromDate,_=e.setToDate,g=e.getResult,E=e.setcustom,v=(0,r.useContext)(i.Gr);return r.createElement("div",{className:"relative flex items-center justify-center w-37.5"},r.createElement("div",{className:"absolute bg-white  top-0 ".concat(t?"block":"hidden"," shadow-lite2 w-38.5 flex flex-col p-2 border border-gray-300 border-opacity-50 rounded-md mt-1.5")},Object.keys(n).map((function(e,c){return r.createElement(x,{key:c,value:e,Filter:o,custom:s,setFilter:l,setcustom:E,Dropdown:t,setDropdown:a},n[e])}))),r.createElement("div",{className:"absolute flex flex-col justify-start items-start space-y-4 ".concat(s?"block":"hidden"," w-79 top-0  mt-2 rounded-md px-3 py-4 bg-primary_extra_light shadow-lite2 border-gray-300 border border-opacity-50")},r.createElement("div",{className:"flex items-center space-x-2 w-full"},r.createElement(p.Z,{margin:"mt-2",width:"w-1/2"},r.createElement(w.Z,{empty:!0},v.dashboard.from_date),r.createElement(h.Z,{type:"date",value:m,onChange:function(e){""===d?(u(e.target.value),_((0,c.kB)(new Date))):u(e.target.value)},max:(0,c.kB)(new Date),onKeyDown:function(e){return e.preventDefault()}})),r.createElement(p.Z,{margin:"mt-2",width:"w-1/2"},r.createElement(w.Z,{empty:!0},v.dashboard.to_date),r.createElement(h.Z,{type:"date",value:d,onChange:function(e){var t=""===e.target.value&&""===m?"":""===e.target.value?(0,c.kB)(new Date):e.target.value;_(t)},min:m,max:(0,c.kB)(new Date),onKeyDown:function(e){return e.preventDefault()}}))),r.createElement("div",{className:"self-end "},r.createElement(f.Z,{click:function(){g(),E(!1)}},v.dashboard.get_result))))};var g=a(9902),E=a(8085),v=a(2382);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){(0,l.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var D=r.lazy((function(){return a.e(941).then(a.bind(a,7784))})),k=r.lazy((function(){return a.e(214).then(a.bind(a,6185))})),N=r.lazy((function(){return a.e(638).then(a.bind(a,6555))})),Z=r.lazy((function(){return a.e(58).then(a.bind(a,2434))})),j=r.lazy((function(){return a.e(958).then(a.bind(a,5135))}));const S=function(){var e,t,a=r.useState(!0),l=(0,n.Z)(a,2),f=l[0],h=l[1],p=r.useContext(i.ko).appState,w=r.useState({}),x=(0,n.Z)(w,2),b=x[0],S=x[1],C=r.useState({point:[],revenue:[],reward:[]}),O=(0,n.Z)(C,2),F=O[0],P=O[1],z=r.useContext(i.Gr),B=r.useState(!1),R=(0,n.Z)(B,2),G=R[0],K=R[1],M=r.useState(!1),T=(0,n.Z)(M,2),H=T[0],Y=T[1],q=r.useState((0,c.kB)(new Date)),A=(0,n.Z)(q,2),I=A[0],J=A[1],L=r.useState((0,c.kB)(new Date)),Q=(0,n.Z)(L,2),U=Q[0],V=Q[1],W=r.useState({limit:d.pY,offset:0,loading:!1,activities:[],total_count:1,pageCount:1}),X=(0,n.Z)(W,2),$=X[0],ee=X[1],te={this_month:z.common.select.this_month,last_month:z.common.select.last_month,"90_days":z.common.select.ninety_days,last_year:z.common.select.last_year,custom:z.common.select.custom},ae=r.useState("this_month"),le=(0,n.Z)(ae,2),ne=le[0],re=le[1],ce=r.useState(p.local.dashboard.default_currency),oe=(0,n.Z)(ce,2),se=oe[0],ie=oe[1],me=function(e){"custom"===e.fil_type&&(e.from_date=I,e.to_date=U),ee(y(y({},$),{},{loading:!0})),(0,o.j0)(e).then((function(t){var a=(0,c.R3)(t.data);!0===a.success&&null!==a.data&&a.data!=={}&&ee(y(y({},$),{},{activities:(0,c.mR)(a.data,"items",[]),pageCount:Math.ceil(a.data.total_count/$.limit),offset:e.offset,loading:!1}))}))},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p.local.dashboard.wlr_dashboard_nonce;if(![void 0].includes(e)){!function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n={wlr_nonce:t,action:"wlr_chart_data",fil_type:e,currency:se};"custom"===e&&(n.from_date=a,n.to_date=l),h(!0),(0,o.j0)(n).then((function(e){var t=(0,c.R3)(e.data);!0===t.success&&null!==t.data&&t.data!=={}&&P(t.data),h(!1)}))}(ne,e,I,U),function(e,t,a,l){var n={wlr_nonce:t,action:"wlr_dashboard_analytic_data",fil_type:e,currency:se};"custom"===e&&(n.from_date=a,n.to_date=l),h(!0),(0,o.j0)(n).then((function(e){var t=(0,c.R3)(e.data);!0===t.success&&null!==t.data&&t.data!=={}&&S(t.data),h(!1)}))}(ne,e,I,U);var t={action:"wlr_all_customer_activities",wlr_nonce:e,fil_type:ne,limit:$.limit,offset:$.offset};me(t)}};return r.useEffect((function(){"custom"!==ne&&de()}),[ne,se]),r.createElement("div",{className:"flex flex-col  bg-white w-full h-full items-start rounded-b-xl justify-start py-5 px-8 space-y-4 "},r.createElement("div",{className:"flex items-center justify-between w-full z-10"},r.createElement(m.Z,{title:z.dashboard.name}),r.createElement("div",{className:"flex item-center  justify-center space-x-3  "},r.createElement("div",{className:"flex flex-col justify-center items-center border rounded-md border-[#cccccc] "},r.createElement(u,{Dropdown:G,setDropdown:K,custom:H,setcustom:Y,Filter_list:te,Filter:ne,fromDate:I,toDate:U}),r.createElement(_,{Dropdown:G,setDropdown:K,Filter_list:te,fromDate:I,Filter:ne,setFilter:re,toDate:U,setFromDate:J,setToDate:V,getResult:de,setcustom:Y,custom:H})),r.createElement("div",{className:"w-[144px] flex items-center   font-medium text-heading",onClick:function(){K(!1)}},r.createElement(s.Z,{options:(e=p.local.dashboard.list_of_currency,t=[],Object.keys(e).map((function(e,a){t.push({value:e,label:e})})),t),value:se,onChange:function(e){K(!1),ie(e.value)},className:"border-none"})))),r.createElement("div",{className:"flex flex-col w-full h-full",onClick:function(){K(!1)}},r.createElement("div",{className:"flex w-full h-full items-center  space-x-5"},f?r.createElement(g.Z,{height:"h-23.5"}):r.createElement(r.Suspense,{fallback:r.createElement(g.Z,{height:"h-23.5"})},r.createElement(D,{width:"w-2.4/12",icon:r.createElement("i",{className:"text-3xl 2xl:text-4.5xl  wlr wlrf-points color-important "}),value:b.total_points,title:z.dashboard.tot_points.name})),f?r.createElement(g.Z,{height:"h-23.5"}):r.createElement(r.Suspense,{fallback:r.createElement(g.Z,{height:"h-23.5"})},r.createElement(D,{width:"w-2.4/12",icon:r.createElement("i",{className:"text-4xl 2xl:text-5.5xl wlr wlrf-reward color-important "}),value:b.total_reward,title:z.dashboard.tot_rewards.name})),f?r.createElement(g.Z,{height:"h-23.5"}):r.createElement(r.Suspense,{fallback:r.createElement(g.Z,{height:"h-23.5"})},r.createElement(D,{width:"w-2.4/12",currencySymbol:!0,icon:r.createElement("i",{className:"text-3.5xl 2xl:text-4.5xl  wlr wlrf-coupon color-important "}),value:b.total_redeem_reward,title:z.dashboard.tot_rewards_redeemed.name})),f?r.createElement(g.Z,{height:"h-23.5"}):r.createElement(r.Suspense,{fallback:r.createElement(g.Z,{height:"h-23.5"})},r.createElement(D,{width:"w-2.4/12",icon:r.createElement("i",{className:"text-2xl  2xl:text-3.5xl  wlr wlrf-orders color-important "}),value:b.total_order_count,title:z.dashboard.no_of_orders.name})),f?r.createElement(g.Z,{height:"h-23.5"}):r.createElement(r.Suspense,{fallback:r.createElement(g.Z,{height:"h-23.5"})},r.createElement(D,{width:"w-2.4/12",icon:r.createElement("i",{className:" text-3xl 2xl:text-4.5xl  wlr wlrf-order-value color-important "}),value:b.total_order_value,currencySymbol:!0,title:z.dashboard.order_total.name}))),r.createElement("div",{className:"w-full flex flex-col p-4 shadow-card mt-6 bg-white rounded-lg relative "},r.createElement("div",{className:"flex bg-white justify-between w-full"},r.createElement("h2",{className:"text-lg text-dark font-semibold"},z.dashboard.revenue_txt)),r.createElement(r.Suspense,{fallback:r.createElement(g.Z,{height:"h-100"})},r.createElement(k,{loading:f,data:F.revenue,no_data_text:z.common.no_data_text}))),r.createElement("div",{className:"flex w-full items-center space-x-5 mt-6"},r.createElement("div",{className:"flex flex-col p-4 shadow-card w-1/2  bg-white rounded-lg relative "},r.createElement("h2",{className:"text-lg text-dark font-semibold"},z.common.points_text),r.createElement(r.Suspense,{fallback:r.createElement(g.Z,{height:"h-115"})},r.createElement(N,{data:F.point,loading:f,no_data_text:z.common.no_data_text}))),r.createElement("div",{className:"flex flex-col p-4 shadow-card w-1/2 bg-white rounded-lg relative"},r.createElement("h2",{className:"text-lg text-dark font-semibold"},z.rewards.name),r.createElement(r.Suspense,{fallback:r.createElement(g.Z,{height:"h-115"})},r.createElement(Z,{loading:f,data:F.reward,no_data_text:z.common.no_data_text})))),r.createElement("div",{className:"bg-white  shadow-card rounded-lg w-full p-6 mt-6 flex flex-col gap-y-2"},r.createElement("div",{className:"flex items-center justify-start"},r.createElement("h2",{className:"font-medium text-lg"},z.common.recent_activities)),$.loading?r.createElement(v.Z,{gap:"gap-y-4",height:"h-78",dataHeight:"h-12.5",listData:$.limit}):r.createElement(r.Suspense,{fallback:r.createElement(g.Z,{height:"h-12.5"})},r.createElement(j,{noData:z.manage_points.user_details.activity.no_activity,State:$})),$.pageCount>1&&r.createElement(E.Z,{handlePageClick:function(e){var t=e.selected,a=Math.ceil(t*$.limit),l={action:"wlr_all_customer_activities",wlr_nonce:p.local.dashboard.wlr_dashboard_nonce,fil_type:ne,limit:$.limit,offset:a};me(l)},pageCount:$.pageCount,loading:$.loading}))))}}}]);