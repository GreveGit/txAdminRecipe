"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[5800],{85800:(e,t,n)=>{n.r(t),n.d(t,{default:()=>T});var r=n(89526),a=n(92070),o=n(65092),c=n(88590),i=n(14710),l=n(33933),s=n(16025),u=n(72861),m=n(13552),d=n(23646),p=n(94882),f=n(2029),g=n(71529),h=n(57170),v=n(55565),y=n(23192),E=n(59324),b=n.n(E),w=n(20785),x=n(96241),D=n.n(x),S=n(87961),k=n(21447);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e,t,n,r,a,o,c){try{var i=e[o](c),l=i.value}catch(e){return void n(e)}i.done?t(l):Promise.resolve(l).then(r,a)}function j(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){A(o,r,a,c,i,"next",e)}function i(e){A(o,r,a,c,i,"throw",e)}c(void 0)}))}}function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);c=!0);}catch(e){i=!0,a=e}finally{try{c||null==n.return||n.return()}finally{if(i)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var P=(0,g.Z)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main,overflowY:"auto",overflowX:"hidden"},header:{background:"#696969",fontSize:20,padding:15,lineHeight:"50px",height:78},subHeader:{padding:"7px 15px",backgroundColor:"#414141"},subsubHeader:{padding:"7px 15px",backgroundColor:e.palette.secondary.light},container:{padding:"10px 20px",height:"80%",overflow:"hidden"},body:{padding:"10px 20px",height:"70%",overflowX:"hidden",overflowY:"auto"},editField:{marginTop:20,width:"100%"},signature:{padding:"15px 35px",height:"12%",overflowX:"hidden",overflowY:"auto",textAlign:"center"},input:{width:"100%",padding:"0 10px"},messageImg:{display:"block",maxWidth:200},copyableText:{color:e.palette.primary.main,textDecoration:"underline","&:hover":{transition:"color ease-in 0.15s",color:e.palette.text.main,cursor:"pointer"}},documentContainer:{overflowWrap:"break-word","& .ql-size-huge":{fontSize:"2.5em"},"& .ql-size-large":{fontSize:"1.5em"},"& .ql-size-small":{fontSize:"0.75em"},"& .ql-font-serif":{fontFamily:"Georgia, Times New Roman, serif"},"& .ql-font-monospace":{fontFamily:"Monaco, Courier New, monospace"},"& .ql-align-center":{textAlign:"center"},"& .ql-align-right":{textAlign:"right"},"& .ql-align-justify":{textAlign:"justify"},"& .ql-syntax":{color:"#f8f8f2",overflow:"visible",backgroundColor:"#23241f !important"}}}}));const T=function(e){var t,n,g,E,x=P(),Z=(0,a.I0)(),N=(0,o.k6)(),A=(0,S.VY)(),O=e.match.params,T=O.id,R=O.mode,_=("edit"==R||"new"==R)&&R,q=(0,a.v9)((function(e){return e.data.data.player})),F=(0,a.v9)((function(e){return e.data.data.myDocuments})).find((function(e){return e._id===T})),L=I((0,r.useState)(null),2),z=L[0],W=L[1],G=I((0,r.useState)(!1),2),H=G[0],M=G[1],U=I((0,r.useState)(!1),2),V=U[0],X=U[1],Y=I((0,r.useState)(!1),2),$=Y[0],B=Y[1],J=I((0,r.useState)(!1),2),K=J[0],Q=J[1],ee=I((0,r.useState)({title:null!==(t=null==F?void 0:F.title)&&void 0!==t?t:"",content:null!==(n=null==F?void 0:F.content)&&void 0!==n?n:"",time:1645026791}),2),te=ee[0],ne=ee[1];(0,r.useEffect)((function(){if((!_||"edit"===_&&F)&&ne(F),!_){if(F.signed&&F.signed.length>0){var e=F.signed.find((function(e){return e.ID==q.ID}));X(Boolean(e)),B(Boolean(e))}else X(!1),B(!1);var t=!1;if(F.sharedWith&&F.sharedWith.length>0){var n=F.sharedWith.find((function(e){return e.ID==q.ID}));n&&n.RequireSignature&&(t=!0)}M(t)}}),[T,R]);var re=function(){var e=j(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("edit"!==_){e.next=18;break}if(!(te.title.length>=2)){e.next=17;break}return e.prev=2,e.next=5,k.Z.send("EditDocument",{id:te._id,data:{title:te.title,content:te.content}});case 5:return e.next=7,e.sent.json();case 7:e.sent?(Z({type:"UPDATE_DATA",payload:{type:"myDocuments",id:te._id,data:te}}),N.replace("/apps/documents/view/".concat(T,"/v")),A("Document Edited Successfully")):A("Error Editing Document"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0),A("Error Editing Document");case 15:e.next=18;break;case 17:A("Must Include Title");case 18:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=j(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.Z.send("DeleteDocument",{id:te._id});case 3:return e.next=5,e.sent.json();case 5:e.sent?(Z({type:"REMOVE_DATA",payload:{type:"myDocuments",id:te._id}}),N.replace("/apps/documents/"),A("Document Deleted Successfully")):A("Error Deleting Document"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),A("Error Deleting Document");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),oe=function(){var e=j(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.Z.send("CreateDocument",te);case 3:return e.next=5,e.sent.json();case 5:(t=e.sent)?(Z({type:"ADD_DATA",payload:{type:"myDocuments",data:t}}),N.replace("/apps/documents/view/".concat(t._id,"/v")),A("Document Created Successfully")):A("Error Creating Document"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),A("Error Creating Document");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),ce=function(){var e=j(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:W({target:"",type:1,nearby:t});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=j(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=C(C({},z),{},{target:+z.target,document:te}),W(null),e.prev=2,e.next=5,k.Z.send("ShareDocument",t);case 5:return e.next=7,e.sent.json();case 7:n=e.sent,A(n?"Document Shared":"Unable to Share Document"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0),A("Unable to Share Document");case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}(),le=function(){var e=j(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return B(!0),e.prev=1,e.next=4,k.Z.send("SignDocument",te._id);case 4:return e.next=6,e.sent.json();case 6:e.sent?(A("Document Signed"),X(!0)):(A("Unable to Sign Document"),B(!1)),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0),A("Unable to Sign Document"),B(!1);case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),se=null!==(g=null==te?void 0:te.content)&&void 0!==g?g:"";return[{regex:/((https?:\/\/(www\.)?(i\.)?imgur\.com\/[a-zA-Z\d]+)(\.png|\.jpg|\.jpeg|\.gif)?)/gim,replace:'<LightboxImage className={classes.messageImg} src={"$1"} />'},{regex:/(http|https):\/\/(\S+)\.([a-z]{2,}?)(.*?)( |\,|$|\.)(mp4)/gim,replace:'<div>\n    \t\t\t<ReactPlayer\n    \t\t\t\tkey={key}\n    \t\t\t\tvolume={0.25}\n    \t\t\t\twidth="100%"\n    \t\t\t\tcontrols={true}\n    \t\t\t\turl={"$1"}\n    \t\t\t/>\n    \t\t</div>'}].forEach((function(e){se=se.replace(e.regex,e.replace)})),r.createElement(r.Fragment,null,r.createElement("div",{className:x.wrapper},r.createElement(c.Z,{position:"static",className:x.header},r.createElement(i.ZP,{container:!0},r.createElement(i.ZP,{item:!0,xs:7,style:{lineHeight:"50px"}},"My Documents"),r.createElement(i.ZP,{item:!0,xs:5,style:{textAlign:"right"}},"new"==_&&r.createElement(l.Z,{title:"Create"},r.createElement("span",null,r.createElement(s.Z,{className:x.headerAction,onClick:oe},r.createElement(h.G,{className:"fa",icon:["fas","floppy-disk"]})))),"edit"==_&&r.createElement(l.Z,{title:"Edit & Save"},r.createElement("span",null,r.createElement(s.Z,{className:x.headerAction,onClick:re},r.createElement(h.G,{className:"fa",icon:["fas","floppy-disk-pen"]})))),!_&&te.owner==q.ID&&(!te.signed||(null==te||null===(E=te.signed)||void 0===E?void 0:E.length)<=0)&&r.createElement(r.Fragment,null,r.createElement(l.Z,{title:"Edit"},r.createElement("span",null,r.createElement(s.Z,{className:x.headerAction,onClick:function(){N.push("/apps/documents/view/".concat(T,"/edit"))}},r.createElement(h.G,{className:"fa",icon:["fas","pen-to-square"]}))))),(!_||"edit"==_)&&r.createElement(r.Fragment,null,r.createElement(l.Z,{title:"Delete"},r.createElement("span",null,r.createElement(s.Z,{className:x.headerAction,onClick:ae},r.createElement(h.G,{className:"fa",icon:["fas","trash-can-xmark"]}))))),!_&&r.createElement(r.Fragment,null,te.signed&&te.signed.length>0&&r.createElement(l.Z,{title:"View Signatures"},r.createElement("span",null,r.createElement(s.Z,{className:x.headerAction,onClick:function(){return Q(!0)}},r.createElement(h.G,{className:"fa",icon:["fas","signature"]})))),r.createElement(l.Z,{title:"Share"},r.createElement("span",null,r.createElement(s.Z,{className:x.headerAction,onClick:function(){return ce(!1)}},r.createElement(h.G,{className:"fa",icon:["fas","share"]})))),r.createElement(l.Z,{title:"Nearby Share"},r.createElement("span",null,r.createElement(s.Z,{className:x.headerAction,onClick:function(){return ce(!0)}},r.createElement(h.G,{className:"fa",icon:["fas","tower-broadcast"]})))))))),r.createElement(c.Z,{position:"static",className:x.subHeader},r.createElement(i.ZP,{container:!0},r.createElement(i.ZP,{item:!0,xs:6,style:{maxWidth:"20ch",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},te.title),r.createElement(i.ZP,{item:!0,xs:6,style:{textAlign:"right"}},"new"!=_&&te.time&&r.createElement(r.Fragment,null,"Edited "," ",r.createElement(b(),{className:x.postedTime,interval:6e4,fromNow:!0,unix:!0},+te.time))))),_?r.createElement("div",{className:x.container},r.createElement(d.Z,{className:x.creatorInput,fullWidth:!0,label:"Title",variant:"outlined",onChange:function(e){ne(C(C({},te),{},{title:e.target.value}))},value:te.title,inputProps:{maxLength:100}}),r.createElement(w.ML,{value:te.content,onChange:function(e){ne(C(C({},te),{},{content:e}))},placeholder:"Write Stuff Here"})):r.createElement(r.Fragment,null,r.createElement("div",{className:x.body},r.createElement(D(),{autoCloseVoidElements:!0,bindings:{classes:x},className:x.documentContainer,components:{LightboxImage:w.NX,ReactPlayer:y.Z,CopyToClipboard:v.CopyToClipboard},jsx:se,blacklistedTags:["iframe","script","link","applet","style"]})),H&&r.createElement("div",{className:x.signature},r.createElement(u.Z,{control:r.createElement(m.Z,{disabled:$,checked:V,onChange:function(e){return le(e)}}),label:"".concat(V?"Document Signed":"Sign Document"," (as ").concat(q.First[0],". ").concat(q.Last,")")})))),null!=z&&r.createElement(w.u_,{open:null!=z,title:"Share This Document",onAccept:ie,onClose:function(){return W(null)},acceptLang:"Share",closeLang:"Cancel"},r.createElement("div",null,"Sharing without making a copy will allow the recipient to see any changes you make to the document!",r.createElement(p.Z,{id:"targetType",name:"targetType",className:x.editField,value:z.type,onChange:function(e){W(C(C({},z),{},{type:e.target.value}))}},r.createElement(f.Z,{value:1},"Share a Copy"),r.createElement(f.Z,{value:2,disabled:te.owner!==q.ID||te.shared},"Share"),r.createElement(f.Z,{value:3,disabled:te.owner!==q.ID||te.shared},"Share w/ Signature Request")),!z.nearby&&r.createElement(d.Z,{required:!0,fullWidth:!0,className:x.editField,label:"State ID",name:"target",type:"text",value:z.target,helperText:"The State ID of who you want to share the document with.",inputProps:{maxLength:6},onChange:function(e){W(C(C({},z),{},{target:e.target.value}))}}))),K&&r.createElement(w.u_,{open:K,title:"Document Signatures",onClose:function(){return Q(!1)},closeLang:"Close"},r.createElement("div",null,te.signed.map((function(e){return r.createElement("p",{key:e.ID},"".concat(e.First," ").concat(e.Last," (State ID: ").concat(e.SID,") on "),r.createElement(b(),{format:"LLL",unix:!0},+e.Time))})))))}}}]);