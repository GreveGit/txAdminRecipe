"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[71,5096],{30071:(e,a,t)=>{t.r(a),t.d(a,{default:()=>g});var n=t(89526),o=t(92070),i=t(72757),l=t(14710),r=t(32165),s=t(65096),c=t(77467),d=t(71529),p=t(57170);const u={50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",A100:"#ffff8d",A200:"#ffff00",A400:"#ffea00",A700:"#ffd600"};var m=t(4061),f=t(78606),b=t(39896),h=(0,d.Z)((function(e){return{wrapper:{background:e.palette.secondary.dark,padding:"25px 12px",marginBottom:5,width:"100%","&::last-child":{marginBottom:0}},appIcon:{height:55,width:55,fontSize:35,color:"#fff"},appText:{paddingLeft:10},appTitle:{display:"block",fontSize:20,fontWeight:"bold",lineHeight:"55px"},installbtn:{height:60,width:60,position:"absolute",top:0,bottom:0,margin:"auto"},installbtnText:{fontSize:"2.5rem"},completeBtn:{background:m.Z[500]},installBtn:{background:m.Z[500],"&:hover":{background:m.Z[700]}},uninstallBtn:{background:f.Z[500],"&:hover":{background:f.Z[700]}},fabInstall:{color:m.Z[500],position:"absolute",top:-6,left:-6,zIndex:1},fabUninstall:{color:f.Z[500],position:"absolute",top:-6,left:-6,zIndex:1},fabPending:{color:u[500],position:"absolute",top:-6,left:-6,zIndex:1},fabFailed:{color:f.Z[800],position:"absolute",top:-6,left:-6,zIndex:1}}}));const g=(0,o.$j)(null,{install:b.install,uninstall:b.uninstall})((function(e){var a=h(),t=(0,o.v9)((function(e){return e.store.installing})).includes(e.app.name),d=(0,o.v9)((function(e){return e.store.installPending})).includes(e.app.name),u=(0,o.v9)((function(e){return e.store.installFailed})).includes(e.app.name),m=(0,o.v9)((function(e){return e.store.uninstalling})).includes(e.app.name),f=(0,o.v9)((function(e){return e.store.uninstallPending})).includes(e.app.name),b=(0,o.v9)((function(e){return e.store.uninstallFailed})).includes(e.app.name);return n.createElement(i.Z,{className:a.wrapper},n.createElement(l.ZP,{container:!0},n.createElement(l.ZP,{item:!0,xs:2,style:{position:"relative"}},n.createElement(r.Z,{variant:"rounded",className:a.appIcon,style:{backgroundColor:e.app.color}},n.createElement(p.G,{style:{margin:"auto",width:"auto"},icon:e.app.icon}))),n.createElement(l.ZP,{item:!0,xs:8,className:a.appText},n.createElement("span",{className:a.appTitle},e.app.label)),n.createElement(l.ZP,{item:!0,xs:2,style:{position:"relative"}},e.installed?n.createElement("div",null,n.createElement(s.Z,{className:a.uninstallBtn,onClick:function(a){a.preventDefault(),e.uninstall(e.app.name)},disabled:m||f||b||!e.app.canUninstall},n.createElement(p.G,{icon:["fas","x"],style:{fontSize:16}})),m||f?n.createElement(c.Z,{size:68,className:m?a.fabInstall:f?a.fabPending:null}):b?n.createElement(c.Z,{size:68,variant:"static",value:100,className:a.fabFailed}):null):n.createElement("div",null,n.createElement(s.Z,{className:a.installBtn,onClick:function(a){a.preventDefault(),t||e.install(e.app.name)},disabled:t||d||u},n.createElement(p.G,{icon:["fas","download"],style:{fontSize:16}})),t||d?n.createElement(c.Z,{size:68,className:t?a.fabInstall:d?a.fabPending:null}):u?n.createElement(c.Z,{size:68,variant:"static",value:100,className:a.fabFailed}):null))))}))},65096:(e,a,t)=>{t.d(a,{Z:()=>v});var n=t(71972),o=t(17692),i=t(89526),l=t(23060),r=t(82082),s=t(72016),c=t(9333),d=t(26966),p=t(24989);function u(e){return(0,p.Z)("MuiFab",e)}const m=(0,t(36787).Z)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge"]);var f=t(47671),b=t(67557);const h=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],g=(0,f.ZP)(s.Z,{name:"MuiFab",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,a[t.variant],a[`size${(0,c.Z)(t.size)}`],"inherit"===t.color&&a.colorInherit,"primary"===t.color&&a.primary,"secondary"===t.color&&a.secondary]}})((({theme:e,ownerState:a})=>(0,o.Z)({},e.typography.button,{minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},textDecoration:"none"},[`&.${m.focusVisible}`]:{boxShadow:e.shadows[6]},[`&.${m.disabled}`]:{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},"small"===a.size&&{width:40,height:40},"medium"===a.size&&{width:48,height:48},"extended"===a.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===a.variant&&"small"===a.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===a.variant&&"medium"===a.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===a.color&&{color:"inherit"})),(({theme:e,ownerState:a})=>(0,o.Z)({},"primary"===a.color&&{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},"secondary"===a.color&&{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}}))),v=i.forwardRef((function(e,a){const t=(0,d.Z)({props:e,name:"MuiFab"}),{children:i,className:s,color:p="default",component:m="button",disabled:f=!1,disableFocusRipple:v=!1,focusVisibleClassName:Z,size:y="large",variant:x="circular"}=t,k=(0,n.Z)(t,h),w=(0,o.Z)({},t,{color:p,component:m,disabled:f,disableFocusRipple:v,size:y,variant:x}),z=(e=>{const{color:a,variant:t,classes:n,size:o}=e,i={root:["root",t,`size${(0,c.Z)(o)}`,"inherit"===a&&"colorInherit","primary"===a&&"primary","secondary"===a&&"secondary"]};return(0,r.Z)(i,u,n)})(w);return(0,b.jsx)(g,(0,o.Z)({className:(0,l.Z)(z.root,s),component:m,disabled:f,focusRipple:!v,focusVisibleClassName:(0,l.Z)(z.focusVisible,Z),ownerState:w,ref:a},k,{children:i}))}))}}]);