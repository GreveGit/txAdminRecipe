"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[9522,1665,4982],{11665:(e,t,n)=>{n.r(t),n.d(t,{createContact:()=>l,deleteContact:()=>u,updateContact:()=>s});var r=n(21447);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t,n,r,a,o,c){try{var i=e[o](c),l=i.value}catch(e){return void n(e)}i.done?t(l):Promise.resolve(l).then(r,a)}var l=function(e){return function(t){r.Z.send("CreateContact",e).then(function(){var n,r=(n=regeneratorRuntime.mark((function n(r){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null==r){n.next=15;break}return n.t0=t,n.t1=o,n.t2=o({},e),n.t3={},n.next=7,r.json();case 7:n.t4=n.sent,n.t5={_id:n.t4},n.t6=(0,n.t1)(n.t2,n.t3,n.t5),n.t7={type:"contacts",data:n.t6},n.t8={type:"ADD_DATA",payload:n.t7},(0,n.t0)(n.t8),n.next=15;break;case 15:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,a){var o=n.apply(e,t);function c(e){i(o,r,a,c,l,"next",e)}function l(e){i(o,r,a,c,l,"throw",e)}c(void 0)}))});return function(e){return r.apply(this,arguments)}}())}},s=function(e,t){return function(n){r.Z.send("UpdateContact",o(o({},t),{},{id:e})).then((function(r){r&&n({type:"UPDATE_DATA",payload:{type:"contacts",id:e,data:t}})}))}},u=function(e){return function(t){r.Z.send("DeleteContact",e).then((function(n){n&&t({type:"REMOVE_DATA",payload:{type:"contacts",id:e}})}))}}},64982:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var r=n(89526),a=n(92070),o=n(65092),c=n(16743),i=n(72757),l=n(25385),s=n(14710),u=n(32165),d=n(50563),m=n(68621),p=n(71529),f=n(57170),h=n(21447);function b(e,t,n,r,a,o,c){try{var i=e[o](c),l=i.value}catch(e){return void n(e)}i.done?t(l):Promise.resolve(l).then(r,a)}var v=(0,m.Z)({root:{border:"1px solid rgba(0, 0, 0, .25)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(c.Z),g=(0,p.Z)((function(e){return{contact:{background:e.palette.secondary.dark,"&:hover":{background:e.palette.secondary.main,transition:"background ease-in 0.15s",cursor:"pointer"}},paper:{background:e.palette.secondary.dark},expandoContainer:{textAlign:"center",fontSize:30},expandoItem:{"&:hover":{color:e.palette.primary.main,transition:"color ease-in 0.15s"}},avatar:{color:"#fff",height:45,width:45},avatarFav:{color:"#fff",height:45,width:45,border:"2px solid gold"},contactName:{fontSize:18,color:e.palette.text.light},contactNumber:{fontSize:16,color:e.palette.text.main},expanded:{margin:0}}}));const y=function(e){var t=g(),n=(0,o.k6)(),c=(0,a.v9)((function(e){return e.call.call})),m=function(){var t,r=(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=c){t.next=14;break}return t.prev=1,t.next=4,h.Z.send("CreateCall",{number:e.contact.number,isAnon:!1});case 4:return t.next=6,t.sent.json();case 6:t.sent?n.push("/apps/phone/call/".concat(e.contact.number)):showAlert("Unable To Start Call"),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0),showAlert("Unable To Start Call");case 14:case"end":return t.stop()}}),t,null,[[1,10]])})),function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function c(e){b(o,r,a,c,i,"next",e)}function i(e){b(o,r,a,c,i,"throw",e)}c(void 0)}))});return function(){return r.apply(this,arguments)}}();return r.createElement(i.Z,{className:t.paper},r.createElement(v,{className:t.contact,expanded:e.expanded==e.index,onChange:e.onClick},r.createElement(l.Z,{expandIcon:r.createElement(f.G,{icon:["fas","chevron-down"]}),style:{padding:"0 12px"}},r.createElement(s.ZP,{container:!0},r.createElement(s.ZP,{item:!0,xs:2},null!=e.contact.avatar&&""!==e.contact.avatar?r.createElement(u.Z,{className:e.contact.favorite?t.avatarFav:t.avatar,src:e.contact.avatar,alt:e.contact.name.charAt(0)}):r.createElement(u.Z,{className:e.contact.favorite?t.avatarFav:t.avatar,style:{background:e.contact.color}},e.contact.name.charAt(0))),r.createElement(s.ZP,{item:!0,xs:10},r.createElement("div",{className:t.contactName},e.contact.name),r.createElement("div",{className:t.contactNumber},e.contact.number)))),r.createElement(d.Z,null,r.createElement(s.ZP,{container:!0,className:t.expandoContainer},r.createElement(s.ZP,{item:!0,xs:null!=e.onDelete?3:4,className:t.expandoItem,onClick:m},r.createElement(f.G,{icon:"phone"})),r.createElement(s.ZP,{item:!0,xs:null!=e.onDelete?3:4,className:t.expandoItem,onClick:function(){n.push("/apps/messages/convo/".concat(e.contact.number))}},r.createElement(f.G,{icon:"message-sms"})),r.createElement(s.ZP,{item:!0,xs:null!=e.onDelete?3:4,className:t.expandoItem,onClick:function(){n.push("/apps/contacts/edit/".concat(e.contact._id))}},r.createElement(f.G,{icon:"user-pen"})),null!=e.onDelete?r.createElement(s.ZP,{item:!0,xs:3,className:t.expandoItem,onClick:e.onDelete},r.createElement(f.G,{icon:"user-minus"})):null))))}},69522:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(89526),a=n(92070),o=n(65092),c=n(23646),i=n(65096),l=n(71529),s=n(20785),u=n(64982),d=n(11665),m=n(87961),p=n(57170);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);c=!0);}catch(e){i=!0,a=e}finally{try{c||null==n.return||n.return()}finally{if(i)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var b=(0,l.Z)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main,position:"relative"},content:{height:"90%",background:e.palette.secondary.main,overflowY:"auto",overflowX:"hidden","&::-webkit-scrollbar":{width:6},"&::-webkit-scrollbar-thumb":{background:"#ffffff52"},"&::-webkit-scrollbar-thumb:hover":{background:e.palette.primary.main},"&::-webkit-scrollbar-track":{background:"transparent"}},searchField:{height:"10%",padding:10},add:{position:"absolute",bottom:"12%",right:"10%","&:hover":{filter:"brightness(0.75)",transition:"filter ease-in 0.15s"}},closer:{position:"fixed",top:0,left:0,height:"100%",width:"100%",background:"rgba(0, 0, 0, 0.75)",zIndex:1e4},createInput:{width:"100%",height:"100%",marginBottom:10},nocontacts:{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:"25%"}}})),v=function(e,t,n){return!(n&&n.length>0&&e&&t)||(n=n.toLowerCase(),e.toLowerCase().includes(n)||t.includes(n))};const g=(0,a.$j)(null,{deleteContact:d.deleteContact})((function(e){var t=(0,m.VY)(),n=b(),l=(0,o.k6)(),d=(0,a.v9)((function(e){return e.data.data})).contacts,h=f((0,r.useState)(-1),2),g=h[0],y=h[1],w=f((0,r.useState)(""),2),x=w[0],C=w[1],k=function(){l.push("/apps/contacts/add")},E=function(e){return function(t,n){y(!!n&&e)}},Z=f((0,r.useState)(!1),2),N=Z[0],S=Z[1],D=function(e){S(e)},P=function(){S(!1)},A=function(){e.deleteContact(N),S(!1),t("Contact Deleted")};return null!=d&&d.length>0?r.createElement("div",{className:n.wrapper},r.createElement("div",{className:n.searchField},r.createElement(c.Z,{fullWidth:!0,value:x,onChange:function(e){return C(e.target.value)},label:"Search Contacts"})),r.createElement("div",{className:n.content},d.filter((function(e){return e.favorite&&v(e.name,e.number,x)})).sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?1:t.name.toLowerCase()>e.name.toLowerCase()?-1:0})).map((function(e){return r.createElement(u.default,{key:e._id,contact:e,expanded:g,index:e._id,onClick:E(e._id),onDelete:function(){return D(e._id)}})})),d.filter((function(e){return!e.favorite&&v(e.name,e.number,x)})).sort((function(e,t){return e.name>t.name?1:t.name>e.name?-1:0})).map((function(e){return r.createElement(u.default,{key:e._id,contact:e,expanded:g,index:e._id,onClick:E(e._id),onDelete:function(){return D(e._id)}})}))),r.createElement(i.Z,{className:n.add,color:"primary",onClick:k},r.createElement(p.G,{icon:["fas","plus"]})),r.createElement(s.I4,{title:"Delete Contact",open:N,confirm:"Delete",decline:"Cancel",onConfirm:A,onDecline:P})):r.createElement("div",{className:n.wrapper},r.createElement("div",{className:n.content},r.createElement("div",{className:n.nocontacts},"You Have No Contacts")),r.createElement(i.Z,{className:n.add,color:"primary",onClick:k},r.createElement(p.G,{icon:["fas","plus"]})),r.createElement(s.I4,{title:"Delete Contact",open:N,confirm:"Delete",decline:"Cancel",onConfirm:A,onDecline:P}))}))},65096:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(71972),a=n(17692),o=n(89526),c=n(23060),i=n(82082),l=n(72016),s=n(9333),u=n(26966),d=n(24989);function m(e){return(0,d.Z)("MuiFab",e)}const p=(0,n(36787).Z)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge"]);var f=n(47671),h=n(67557);const b=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],v=(0,f.ZP)(l.Z,{name:"MuiFab",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`size${(0,s.Z)(n.size)}`],"inherit"===n.color&&t.colorInherit,"primary"===n.color&&t.primary,"secondary"===n.color&&t.secondary]}})((({theme:e,ownerState:t})=>(0,a.Z)({},e.typography.button,{minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},textDecoration:"none"},[`&.${p.focusVisible}`]:{boxShadow:e.shadows[6]},[`&.${p.disabled}`]:{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},"small"===t.size&&{width:40,height:40},"medium"===t.size&&{width:48,height:48},"extended"===t.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===t.variant&&"small"===t.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===t.variant&&"medium"===t.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===t.color&&{color:"inherit"})),(({theme:e,ownerState:t})=>(0,a.Z)({},"primary"===t.color&&{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},"secondary"===t.color&&{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}}))),g=o.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiFab"}),{children:o,className:l,color:d="default",component:p="button",disabled:f=!1,disableFocusRipple:g=!1,focusVisibleClassName:y,size:w="large",variant:x="circular"}=n,C=(0,r.Z)(n,b),k=(0,a.Z)({},n,{color:d,component:p,disabled:f,disableFocusRipple:g,size:w,variant:x}),E=(e=>{const{color:t,variant:n,classes:r,size:a}=e,o={root:["root",n,`size${(0,s.Z)(a)}`,"inherit"===t&&"colorInherit","primary"===t&&"primary","secondary"===t&&"secondary"]};return(0,i.Z)(o,m,r)})(k);return(0,h.jsx)(v,(0,a.Z)({className:(0,c.Z)(E.root,l),component:p,disabled:f,focusRipple:!g,focusVisibleClassName:(0,c.Z)(E.focusVisible,y),ownerState:k,ref:t},C,{children:o}))}))}}]);