"use strict";(self.webpackChunkreact_wordpress=self.webpackChunkreact_wordpress||[]).push([[756],{217:(e,t,l)=>{l.r(t),l.d(t,{default:()=>u});var n=l(5861),a=l(4687),c=l.n(a),r=l(7294),i=l(9250),s=l(3972),o=l(1489);const d=function(e){var t=e.level,l=e.edit_to,n=e.delete_to,a=e.span,c=r.useContext(s.Gr),d=(0,i.s0)();return r.createElement("div",{className:"flex  items-center justify-center ".concat(a," space-x-5  w-full")},r.createElement((function(e){var t=e.click;return r.createElement("div",{className:"pt-1 pb-0.5  cursor-pointer text-xl text-textColor max-w-max",onClick:t,style:{paddingRight:"6.5px",paddingLeft:"6.5px"},title:c.common.edit_text},r.createElement("i",{className:"wlr wlrf-edit-3 text-light hover:text-primary text-sm 2xl:text-md leading-0 color-important "}))}),{click:function(e){e.preventDefault(),d("/".concat(l))}}),r.createElement((function(e){var t=e.click;return r.createElement("div",{className:"pt-1 pb-0.5 cursor-pointer text-xl text-red-600 max-w-max",onClick:t,style:{paddingRight:"6.5px",paddingLeft:"6.5px"},title:c.common.delete_text},r.createElement("i",{className:"wlr wlrf-delete text-light hover:text-redd color-important text-sm 2xl:text-md leading-0"}))}),{click:function(){return(0,o.lA)(t.id,n,c.levels.delete_alert_message,c.levels.delete_ok,c.levels.delete_cancel,c.levels.delete_level)}}))};var p=l(9294),m=l(4215);const u=function(e){var t=e.level,l=e.edit_to,a=e.State,o=e.delete_to,u=e.handleStatusToggle,x=e.AddCheck,v=e.active,f=e.AllCheckList,g=e.setAllCheck,_=e.default_image,h=r.useContext(s.Gr),k=(0,i.s0)();return r.createElement("div",{key:t.id,className:"grid grid-cols-12 gap-4 border shadow-card h-20 bg-white w-full rounded border-light_border py-4"},r.createElement(p.g,{checked:f.includes(t.id),click:(0,n.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t.id);case 2:f.length===a.levels.length&&g(!0);case 3:case"end":return e.stop()}}),e)})))}),r.createElement(m.Dw,{description:t.description,history:k,level:t,span:"col-span-3"},t.name),r.createElement(m.BI,{span:"col-span-3 font-medium"},h.levels.points_to_collect.from," ",t.from_points," ",h.levels.points_to_collect.to," ",t.to_points),r.createElement(m.BL,{span:"col-span-1",image:[""," ",null,"null",void 0].includes(t.badge)?_:t.badge}),r.createElement(m.LR,{span:"col-span-1",active:v,click:function(e){e.preventDefault(),u(t.id,t.active)}}),r.createElement(m.Fl,{span:"col-span-1",id:t.id,createdDate:t.created_at}),r.createElement(d,{span:"col-span-2",level:t,edit_to:l,delete_to:o}))}}}]);