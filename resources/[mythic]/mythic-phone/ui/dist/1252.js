"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[1252,8894,1748],{71252:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var r=a(89526),n=a(92070),l=a(91153),o=a(78894),s=a(32165),i=a(77548),c=a(33933),m=a(81939),u=a(71529),d=a(57170),v=a(87961),f=(0,u.Z)((function(e){return{item:{borderBottom:"1px solid ".concat(e.palette.border.divider),"&:first-child":{borderTop:"1px solid ".concat(e.palette.border.divider)}},avatar:{backgroundColor:e.palette.primary.main},myself:{fontSize:14,color:e.palette.info.main,marginRight:5},owner:{fontSize:14,color:"gold",marginRight:5}}}));const p=function(e){var t=e.jobData,a=e.playerJob,u=e.employee,p=e.onClick,I=f(),E=(0,v.Gt)(),Z=((0,v.vM)(),(0,n.v9)((function(e){return e.data.data.player}))),S=Z.SID==(null==t?void 0:t.Owner),g=E("JOB_MANAGEMENT",t.Id)||S,w=E("JOB_MANAGE_EMPLOYEES",t.Id)||S,b=(E("JOB_HIRE",t.Id),E("JOB_FIRE",t.Id)||S);return r.createElement(l.ZP,{className:I.item,button:((null==t?void 0:t.Owner)!=u.SID||S)&&(a.Grade.Level>u.JobData.Grade.Level||S)&&(g||w||b),onClick:((null==t?void 0:t.Owner)!=u.SID||S)&&(a.Grade.Level>u.JobData.Grade.Level||S)&&(g||w||b)?function(){return p(u)}:null},r.createElement(o.Z,null,r.createElement(s.Z,{className:I.avatar},r.createElement(d.G,{icon:["fas","user"]}))),r.createElement(i.Z,{primary:r.createElement("span",null,Z.SID==u.SID?r.createElement(c.Z,{title:"You"},r.createElement("span",null,r.createElement(d.G,{className:I.myself,icon:["fas","user"]}))):(null==t?void 0:t.Owner)==u.SID?r.createElement(c.Z,{title:"Business Owner"},r.createElement("span",null,r.createElement(d.G,{className:I.owner,icon:["fas","crown"]}))):null,"".concat(u.First," ").concat(u.Last)),secondary:"".concat(u.JobData.Grade.Name," - ").concat(u.Phone)}),t.Owner!=u._id&&(a.Grade.Level>u.JobData.Grade.Level||S)&&(g||w||b)&&r.createElement(m.Z,null,r.createElement(d.G,{icon:["fas","pen-to-square"]})))}},78894:(e,t,a)=>{a.d(t,{Z:()=>I});var r=a(71972),n=a(17692),l=a(89526),o=a(23060),s=a(82082),i=a(31946),c=a(47671),m=a(26966),u=a(24989);function d(e){return(0,u.Z)("MuiListItemAvatar",e)}(0,a(36787).Z)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var v=a(67557);const f=["className"],p=(0,c.ZP)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,"flex-start"===a.alignItems&&t.alignItemsFlexStart]}})((({ownerState:e})=>(0,n.Z)({minWidth:56,flexShrink:0},"flex-start"===e.alignItems&&{marginTop:8}))),I=l.forwardRef((function(e,t){const a=(0,m.Z)({props:e,name:"MuiListItemAvatar"}),{className:c}=a,u=(0,r.Z)(a,f),I=l.useContext(i.Z),E=(0,n.Z)({},a,{alignItems:I.alignItems}),Z=(e=>{const{alignItems:t,classes:a}=e,r={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return(0,s.Z)(r,d,a)})(E);return(0,v.jsx)(p,(0,n.Z)({className:(0,o.Z)(Z.root,c),ownerState:E,ref:t},u))}))}}]);