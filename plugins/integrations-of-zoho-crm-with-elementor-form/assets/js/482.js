"use strict";(self.webpackChunk_izcrmef=self.webpackChunk_izcrmef||[]).push([[482,935],{2482:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var s=n(7462),i=n(7294),a=(n(8774),n(6550)),l=n(5637),r=n(5001),c=n(5893);var o=function(e){var t=e.step,n=e.active,s=e.className;return(0,c.jsx)("div",{className:"d-in-b "+s,children:(0,c.jsxs)("div",{className:"flx flx-center",children:[Array(n).fill(0).map((function(e,t){return(0,c.jsxs)(i.Fragment,{children:[(0,c.jsx)("div",{className:"btcd-stp flx flx-center stp-a  txt-center",children:t+1}),n-1!==t&&(0,c.jsx)("div",{className:"btcd-stp-line stp-line-a"})]},"stp-"+(t+21))})),t-n!==0&&(0,c.jsx)("div",{className:"btcd-stp-line"}),Array(t-n).fill(0).map((function(e,s){return(0,c.jsxs)(i.Fragment,{children:[(0,c.jsx)("div",{className:"btcd-stp flx flx-center txt-center",children:s+n+1}),t-n-1!==s&&(0,c.jsx)("div",{className:"btcd-stp-line "})]},"stp-"+(s+23))}))]})})},d=n(4383),m=n(3450),u=n(8935),h=n(9293),b=n(8815);var x=function(e){var t=e.formFields,n=e.setFlow,x=e.flow,p=e.allIntegURL,f=(0,a.k6)(),g=(0,a.UO)().formID,j=(0,i.useState)(!1),v=j[0],_=j[1],C=(0,i.useState)(1),N=C[0],y=C[1],w=(0,i.useState)({show:!1}),k=w[0],S=w[1],I=(0,i.useState)(0),z=I[0],L=I[1],R=(0,i.useState)({name:"Zoho CRM",type:"Zoho CRM",clientId:"",clientSecret:"",module:"",layout:"",field_map:[{formField:"",zohoFormField:""}],relatedlists:[],actions:{}}),Z=R[0],F=R[1];return(0,i.useEffect)((function(){window.opener&&(0,d.WK)("zohoCRM")}),[]),document.querySelector(".btcd-s-wrp").scrollTop=0,(0,c.jsxs)("div",{children:[(0,c.jsx)(r.Z,{snack:k,setSnackbar:S}),(0,c.jsx)("div",{className:"txt-center mt-2",children:(0,c.jsx)(o,{step:3,active:N})}),(0,c.jsx)(u.default,{formID:g,crmConf:Z,setCrmConf:F,step:N,setstep:y,isLoading:v,setIsLoading:_,setSnackbar:S}),(0,c.jsxs)("div",{className:"btcd-stp-page",style:(0,s.Z)({},2===N&&{width:900,height:"auto",overflow:"visible"}),children:[(0,c.jsx)(b.Z,{tab:z,settab:L,formID:g,formFields:t,handleInput:function(e){return(0,h.Rx)(e,z,Z,F,g,_,S)},crmConf:Z,setCrmConf:F,isLoading:v,setIsLoading:_,setSnackbar:S}),(0,c.jsxs)("button",{onClick:function(){return e=3,void((0,h.Pd)(Z)?Z.module&&Z.layout&&Z.field_map.length>0&&y(e):S({show:!0,msg:(0,l.__)("Please map mandatory fields","bit-integrations")}));var e},disabled:""===Z.module||""===Z.layout||Z.field_map.length<1,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[(0,l.__)("Next","bit-integrations")," "," ",(0,c.jsx)("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(0,c.jsx)(m.Z,{step:N,saveConfig:function(){(0,d.P9)({flow:x,setFlow:n,allIntegURL:p,conf:Z,history:f,setIsLoading:_,setSnackbar:S})},isLoading:v,dataConf:Z,setDataConf:F,formFields:t})]})}},8935:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var s=n(7462),i=n(7294),a=n(2804),l=n(5637),r=n(9151),c=n(5257),o=n(9293),d=n(4383),m=n(4017),u=n(5893);function h(e){var t=e.formID,n=e.crmConf,h=e.setCrmConf,b=e.step,x=e.setstep,p=e.isLoading,f=e.setIsLoading,g=e.setSnackbar,j=e.redirectLocation,v=e.isInfo,_=(0,i.useState)(!1),C=_[0],N=_[1],y=(0,i.useState)({dataCenter:"",clientId:"",clientSecret:""}),w=y[0],k=y[1],S=(0,a.sJ)(m.PW),I=function(e){var t=(0,s.Z)({},n),i=(0,s.Z)({},w);i[e.target.name]="",t[e.target.name]=e.target.value,k(i),h(t)};return(0,u.jsxs)("div",{className:"btcd-stp-page",style:(0,s.Z)({},{width:1===b&&900},{height:1===b&&"auto"}),children:[(0,u.jsx)("div",{className:"mt-3",children:(0,u.jsx)("b",{children:(0,l.__)("Integration Name:","bit-integrations")})}),(0,u.jsx)("input",{className:"btcd-paper-inp w-6 mt-1",onChange:I,name:"name",value:n.name,type:"text",placeholder:(0,l.__)("Integration Name...","bit-integrations"),disabled:v}),(0,u.jsx)("div",{className:"mt-3",children:(0,u.jsx)("b",{children:(0,l.__)("Data Center:","bit-integrations")})}),(0,u.jsxs)("select",{onChange:I,name:"dataCenter",value:n.dataCenter,className:"btcd-paper-inp w-6 mt-1",disabled:v,children:[(0,u.jsx)("option",{value:"",children:(0,l.__)("--Select a data center--","bit-integrations")}),(0,u.jsx)("option",{value:"com",children:"zoho.com"}),(0,u.jsx)("option",{value:"eu",children:"zoho.eu"}),(0,u.jsx)("option",{value:"com.cn",children:"zoho.com.cn"}),(0,u.jsx)("option",{value:"in",children:"zoho.in"}),(0,u.jsx)("option",{value:"com.au",children:"zoho.com.au"})]}),(0,u.jsx)("div",{style:{color:"red"},children:w.dataCenter}),(0,u.jsx)("div",{className:"mt-3",children:(0,u.jsx)("b",{children:(0,l.__)("Homepage URL:","bit-integrations")})}),(0,u.jsx)(r.Z,{value:""+window.location.origin,setSnackbar:g,className:"field-key-cpy w-6 ml-0",readOnly:v}),(0,u.jsx)("div",{className:"mt-3",children:(0,u.jsx)("b",{children:(0,l.__)("Authorized Redirect URIs:","bit-integrations")})}),(0,u.jsx)(r.Z,{value:j||S.api.base+"/redirect",setSnackbar:g,className:"field-key-cpy w-6 ml-0",readOnly:v}),(0,u.jsxs)("small",{className:"d-blk mt-5",children:[(0,l.__)("To get Client ID and SECRET , Please Visit","bit-integrations")," ",(0,u.jsx)("a",{className:"btcd-link",href:"https://api-console.zoho."+((null==n?void 0:n.dataCenter)||"com")+"/",target:"_blank",rel:"noreferrer",children:(0,l.__)("Zoho API Console","bit-integrations")})]}),(0,u.jsx)("div",{className:"mt-3",children:(0,u.jsx)("b",{children:(0,l.__)("Client id:","bit-integrations")})}),(0,u.jsx)("input",{className:"btcd-paper-inp w-6 mt-1",onChange:I,name:"clientId",value:n.clientId,type:"text",placeholder:(0,l.__)("Client id...","bit-integrations"),disabled:v}),(0,u.jsx)("div",{style:{color:"red"},children:w.clientId}),(0,u.jsx)("div",{className:"mt-3",children:(0,u.jsx)("b",{children:(0,l.__)("Client secret:","bit-integrations")})}),(0,u.jsx)("input",{className:"btcd-paper-inp w-6 mt-1",onChange:I,name:"clientSecret",value:n.clientSecret,type:"text",placeholder:(0,l.__)("Client secret...","bit-integrations"),disabled:v}),(0,u.jsx)("div",{style:{color:"red"},children:w.clientSecret}),!v&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("button",{onClick:function(){return(0,d.P_)("zohoCRM","zcrm","ZohoCRM.modules.ALL,ZohoCRM.settings.ALL,ZohoCRM.users.Read,zohocrm.files.CREATE",n,h,k,N,f,g,S)},className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:C||p,children:[C?(0,l.__)("Authorized ✔","bit-integrations"):(0,l.__)("Authorize","bit-integrations"),p&&(0,u.jsx)(c.Z,{size:"20",clr:"#022217",className:"ml-2"})]}),(0,u.jsx)("br",{}),(0,u.jsxs)("button",{onClick:function(){x(2),!n.module&&(0,o.vF)(t,n,h,f,g),document.querySelector(".btcd-s-wrp").scrollTop=0},className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",disabled:!C,children:[(0,l.__)("Next","bit-integrations"),(0,u.jsx)("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}}}]);