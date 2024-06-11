"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[3490,4982,3794,5434],{64982:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(89526),a=n(92070),o=n(65092),l=n(16743),c=n(72757),i=n(25385),u=n(14710),s=n(32165),m=n(50563),d=n(68621),f=n(71529),p=n(57170),h=n(21447);function v(e,t,n,r,a,o,l){try{var c=e[o](l),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(r,a)}var b=(0,d.Z)({root:{border:"1px solid rgba(0, 0, 0, .25)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(l.Z),y=(0,f.Z)((function(e){return{contact:{background:e.palette.secondary.dark,"&:hover":{background:e.palette.secondary.main,transition:"background ease-in 0.15s",cursor:"pointer"}},paper:{background:e.palette.secondary.dark},expandoContainer:{textAlign:"center",fontSize:30},expandoItem:{"&:hover":{color:e.palette.primary.main,transition:"color ease-in 0.15s"}},avatar:{color:"#fff",height:45,width:45},avatarFav:{color:"#fff",height:45,width:45,border:"2px solid gold"},contactName:{fontSize:18,color:e.palette.text.light},contactNumber:{fontSize:16,color:e.palette.text.main},expanded:{margin:0}}}));const g=function(e){var t=y(),n=(0,o.k6)(),l=(0,a.v9)((function(e){return e.call.call})),d=function(){var t,r=(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=l){t.next=14;break}return t.prev=1,t.next=4,h.Z.send("CreateCall",{number:e.contact.number,isAnon:!1});case 4:return t.next=6,t.sent.json();case 6:t.sent?n.push("/apps/phone/call/".concat(e.contact.number)):showAlert("Unable To Start Call"),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0),showAlert("Unable To Start Call");case 14:case"end":return t.stop()}}),t,null,[[1,10]])})),function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function l(e){v(o,r,a,l,c,"next",e)}function c(e){v(o,r,a,l,c,"throw",e)}l(void 0)}))});return function(){return r.apply(this,arguments)}}();return r.createElement(c.Z,{className:t.paper},r.createElement(b,{className:t.contact,expanded:e.expanded==e.index,onChange:e.onClick},r.createElement(i.Z,{expandIcon:r.createElement(p.G,{icon:["fas","chevron-down"]}),style:{padding:"0 12px"}},r.createElement(u.ZP,{container:!0},r.createElement(u.ZP,{item:!0,xs:2},null!=e.contact.avatar&&""!==e.contact.avatar?r.createElement(s.Z,{className:e.contact.favorite?t.avatarFav:t.avatar,src:e.contact.avatar,alt:e.contact.name.charAt(0)}):r.createElement(s.Z,{className:e.contact.favorite?t.avatarFav:t.avatar,style:{background:e.contact.color}},e.contact.name.charAt(0))),r.createElement(u.ZP,{item:!0,xs:10},r.createElement("div",{className:t.contactName},e.contact.name),r.createElement("div",{className:t.contactNumber},e.contact.number)))),r.createElement(m.Z,null,r.createElement(u.ZP,{container:!0,className:t.expandoContainer},r.createElement(u.ZP,{item:!0,xs:null!=e.onDelete?3:4,className:t.expandoItem,onClick:d},r.createElement(p.G,{icon:"phone"})),r.createElement(u.ZP,{item:!0,xs:null!=e.onDelete?3:4,className:t.expandoItem,onClick:function(){n.push("/apps/messages/convo/".concat(e.contact.number))}},r.createElement(p.G,{icon:"message-sms"})),r.createElement(u.ZP,{item:!0,xs:null!=e.onDelete?3:4,className:t.expandoItem,onClick:function(){n.push("/apps/contacts/edit/".concat(e.contact._id))}},r.createElement(p.G,{icon:"user-pen"})),null!=e.onDelete?r.createElement(u.ZP,{item:!0,xs:3,className:t.expandoItem,onClick:e.onDelete},r.createElement(p.G,{icon:"user-minus"})):null))))}},53794:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(89526),a=n(92070),o=n(65092),l=n(71529),c=(n(57170),n(64982));function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(c)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s=(0,l.Z)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main},emptyMsg:{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:"25%"}}}));const m=function(e){var t=s(),n=((0,o.k6)(),(0,a.v9)((function(e){return e.data.data})).contacts),l=i((0,r.useState)(-1),2),u=l[0],m=l[1],d=function(e){return function(t,n){m(!!n&&e)}};return r.createElement("div",{className:t.wrapper},n.length>0?r.createElement(r.Fragment,null,n.filter((function(e){return e.favorite})).sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?1:t.name.toLowerCase()>e.name.toLowerCase()?-1:0})).map((function(e){return r.createElement(c.default,{key:e._id,contact:e,expanded:u,index:e._id,onClick:d(e._id)})})),n.filter((function(e){return!e.favorite})).sort((function(e,t){return e.name>t.name?1:t.name>e.name?-1:0})).map((function(e){return r.createElement(c.default,{key:e._id,contact:e,expanded:u,index:e._id,onClick:d(e._id)})}))):r.createElement("div",{className:t.emptyMsg},"You Have No Recent Contacts"))}},73490:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var r=n(89526),a=n(92070),o=n(65092),l=n(20088),c=n(38355),i=n(71529),u=n(61176),s=n(25434),m=n(53794),d=n(38715);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(c)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var h=(0,i.Z)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main},limitedWrapper:{height:"101%",background:e.palette.secondary.main},content:{height:"93.75%",overflowY:"auto",overflowX:"hidden","&::-webkit-scrollbar":{width:6},"&::-webkit-scrollbar-thumb":{background:"#ffffff52"},"&::-webkit-scrollbar-thumb:hover":{background:e.palette.primary.main},"&::-webkit-scrollbar-track":{background:"transparent"}},tabPanel:{height:"100%"},phoneTab:{minWidth:"33.3%"}}}));const v=(0,a.$j)(null,{readCalls:d.readCalls})((function(e){var t=h(),n=(0,o.k6)(),i=(0,a.v9)((function(e){return e.phone.limited})),d=(0,a.v9)((function(e){return e.call.call})),p=(0,a.v9)((function(e){return e.data.data.calls}));(0,r.useEffect)((function(){p.filter((function(e){return Boolean(e)&&e.unread})).length>0&&e.readCalls()}),[p]);var v=f((0,r.useState)(1),2),b=v[0],y=v[1];(0,r.useEffect)((function(){null!=d&&1!=d.state&&n.push("/apps/phone/call/".concat(d.number))}),[]);return r.createElement(r.Fragment,null,i?r.createElement("div",{className:t.limitedWrapper},r.createElement(u.default,null)):r.createElement("div",{className:t.wrapper},r.createElement("div",{className:t.content},r.createElement("div",{className:t.tabPanel,role:"tabpanel",hidden:0!==b,id:"recent"},0===b&&r.createElement(s.default,null)),r.createElement("div",{className:t.tabPanel,role:"tabpanel",hidden:1!==b,id:"keypad"},1===b&&r.createElement(u.default,null)),r.createElement("div",{className:t.tabPanel,role:"tabpanel",hidden:2!==b,id:"contacts"},2===b&&r.createElement(m.default,null))),r.createElement("div",{className:t.tabs},r.createElement(l.Z,{value:b,onChange:function(e,t){y(t)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:!1},r.createElement(c.Z,{className:t.phoneTab,label:"Recent"}),r.createElement(c.Z,{className:t.phoneTab,label:"Keypad"}),r.createElement(c.Z,{className:t.phoneTab,label:"Contacts"})))))}))},25434:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(89526),a=n(92070),o=n(71529),l=(n(57170),n(28264));function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(c)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u=(0,o.Z)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main},emptyMsg:{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:"25%"}}}));const s=function(e){var t=u(),n=(0,a.v9)((function(e){return e.data.data.calls})),o=c((0,r.useState)(-1),2),i=o[0],s=o[1];return r.createElement("div",{className:t.wrapper},n.filter((function(e){return Boolean(e)})).length>0?n.filter((function(e){return Boolean(e)})).sort((function(e,t){return t.time-e.time})).map((function(e,t){return r.createElement(l.default,{key:t,expanded:i,index:t,call:e,onClick:(n=t,function(e,t){s(t?n:-1)})});var n})):r.createElement("div",{className:t.emptyMsg},"You Have No Recent Calls"))}}}]);