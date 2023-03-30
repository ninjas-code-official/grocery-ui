(self.webpackJsonp=self.webpackJsonp||[]).push([[9,7],{474:function(e,n,t){"use strict";t.r(n),t.d(n,"syntax",(function(){return r})),t.d(n,"ui",(function(){return i}));var o=t(2);const r={text:"#d9d7ce",variable:"#d9d7ce",invalid:"#ff3333",constant:"#ff9d45",comment:"#5c6773",regexp:"#95e6cb",annotation:"#5ccfe6",tag:"#80d4ff",number:"#ff9d45",string:"#bae67e",property:"#5ccfe6",value:"#bae67e",keyword:"#ffae57",operator:"#778899",predefined:"#ff00ff"},i={background:Object(o.a)("background","dark"),text:"#d9d7ce",selection:"#aaaaaa",indent:{active:"#393b41",inactive:"#494b51"}}},475:function(e,n,t){"use strict";t.r(n),t.d(n,"syntax",(function(){return r})),t.d(n,"ui",(function(){return i}));var o=t(2);const r={text:"#5c6773",variable:"#5c6773",invalid:"#ff3333",constant:"#f08c36",comment:"#abb0b6",regexp:"#4dbf99",annotation:"#41a6d9",tag:"#e7c547",number:"#f08c36",string:"#86b300",property:"#41a6d9",value:"#0451a5",keyword:"#f2590c",operator:"#778899",predefined:"#FF00FF"},i={background:Object(o.a)("background","light"),text:"#5c6773",selection:"#cccccc",indent:{active:"#e0e0e0",inactive:"#ecebec"}}},499:function(e,n,t){"use strict";t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return l}));var o,r=t(474),i=t(475);const a=String.raw,c=({ui:e,syntax:n})=>{return a(o||(t=["\n  .prism-code {\n    background-color: ",";\n    color: ",";\n  }\n\n  .prism-code ::selection {\n    background: ",";\n  }\n\n  .prism-code ::-moz-selection {\n    background: ",";\n  }\n\n  .prism-code textarea {\n    outline: 0;\n  }\n\n  .prism-code .token.tag,\n  .prism-code .token.property {\n    color: ",";\n  }\n\n  .prism-code .token.function {\n    color: ",";\n  }\n\n  .prism-code .token.entity {\n    color: ",";\n  }\n\n  .prism-code .token.string,\n  .prism-code .token.selector,\n  .prism-code .token.char,\n  .prism-code .token.builtin,\n  .prism-code .token.inserted {\n    color: ",";\n  }\n\n  .prism-code .token.regexp,\n  .prism-code .token.variable {\n    color: ",";\n  }\n\n  .prism-code .token.keyword,\n  .prism-code .token.atrule,\n  .prism-code .token.tag > .token.punctuation,\n  .prism-code .token.important {\n    color: ",";\n  }\n\n  .prism-code .token.attr-name {\n    color: ",";\n  }\n\n  .prism-code .token.attr-value {\n    color: ",";\n  }\n\n  .prism-code .token.markup,\n  .prism-code .token.special {\n    color: ",";\n  }\n\n  .prism-code .token.comment,\n  .prism-code .token.prolog,\n  .prism-code .token.doctype,\n  .prism-code .token.cdata {\n    color: ",";\n  }\n\n  .prism-code .token.number {\n    color: ",";\n  }\n\n  .prism-code .token.constant,\n  .prism-code .token.boolean,\n  .prism-code .token.constant,\n  .prism-code .token.symbol,\n  .prism-code .token.deleted {\n    color: ",";\n  }\n\n  .prism-code .token.operator,\n  .prism-code .token.entity,\n  .prism-code .token.url,\n  .prism-code .language-css .token.string,\n  .prism-code .style .token.string {\n    color: ",";\n  }\n\n  .prism-code .token.punctuation {\n    color: ",";\n  }\n"],r||(r=t.slice(0)),o=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(r)}}))),e.background,e.text,e.selection,e.selection,n.property,n.constant,n.property,n.string,n.regexp,n.keyword,n.number,n.string,n.predefined,n.comment,n.number,n.constant,n.operator,n.comment);var t,r},s=c(i),l=c(r)},501:function(e,n,t){var o=t(544);e.exports=function(e){var n=e.length;return n?e[o(0,n-1)]:void 0}},544:function(e,n){var t=Math.floor,o=Math.random;e.exports=function(e,n){return e+t(o()*(n-e+1))}},545:function(e,n,t){var o=t(501),r=t(546);e.exports=function(e){return o(r(e))}},546:function(e,n,t){var o=t(547),r=t(122);e.exports=function(e){return null==e?[]:o(e,r(e))}},547:function(e,n,t){var o=t(233);e.exports=function(e,n){return o(n,(function(n){return e[n]}))}},586:function(e,n,t){"use strict";t.r(n);t(10);var o=t(1),r=t(28),i=t.n(r),a=t(532),c=t.n(a),s=t(533),l=t(0),d=t.n(l),p=t(587),m=t.n(p),u=(t(534),t(535),t(536),t(537),t(538),t(539),t(588),t(162)),h=t(499);function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}const f=new Map;class b extends d.a.Component{constructor(...e){super(...e),g(this,"_highlight",(e,n)=>e.endsWith(".ts")||e.endsWith(".tsx")?Object(s.highlight)(n,s.languages.ts,"typescript"):e.endsWith(".js")?Object(s.highlight)(n,s.languages.jsx,"jsx"):e.endsWith(".json")?Object(s.highlight)(n,s.languages.json,"json"):e.endsWith(".md")?Object(s.highlight)(n,s.languages.markdown,"markdown"):c()(n)),g(this,"_handleValueChange",e=>{this.props.updateFiles(()=>({[this.props.selectedFile]:{type:"CODE",contents:e}}))}),g(this,"_editor",d.a.createRef())}static removePath(e){f.delete(e)}static renamePath(e,n){const t=f.get(e);f.delete(e),f.set(n,t)}componentDidUpdate(e){const n=this._editor.current;if(this.props.selectedFile!==e.selectedFile&&n){f.set(e.selectedFile,n.session);const t=f.get(this.props.selectedFile);n.session=t||{history:{stack:[],offset:-1}}}}render(){const{selectedFile:e,lineNumbers:n,theme:t,files:r}=this.props,a=r[e];return d.a.createElement("div",{className:Object(o.css)(k.container,"on"===n&&k.containerWithLineNumbers)},d.a.createElement(m.a,{ref:this._editor,value:"CODE"===(null==a?void 0:a.type)?a.contents:"",onValueChange:this._handleValueChange,highlight:t=>"on"===n?this._highlight(e,t).split("\n").map(e=>'<span class="'.concat(Object(o.css)(k.line),'">').concat(e,"</span>")).join("\n"):this._highlight(e,t),padding:"on"===n?0:8,className:i()(Object(o.css)(k.editor),"prism-code")}),d.a.createElement("style",{type:"text/css",dangerouslySetInnerHTML:{__html:"dark"===t?h.a:h.b}}))}}g(b,"defaultProps",{lineNumbers:"on"}),n.default=Object(u.a)(b);const k=o.StyleSheet.create({container:{flex:1,overflow:"auto"},containerWithLineNumbers:{paddingLeft:64},editor:{fontFamily:"var(--font-monospace)",fontSize:12,minHeight:"100%",counterReset:"line",overflow:"visible !important"},line:{":before":{position:"absolute",right:"100%",marginRight:26,textAlign:"right",opacity:.5,userSelect:"none",counterIncrement:"line",content:"counter(line)"}}})},594:function(e,n,t){var o=t(501),r=t(545),i=t(37);e.exports=function(e){return(i(e)?o:r)(e)}},663:function(e,n,t){e.exports=t.p+"assets/52001a8b742a278688f6b516f931d81b.png"},664:function(e,n,t){e.exports=t.p+"assets/e392635154a17bd759d3bbb77e72eada.png"},940:function(e,n,t){"use strict";t.r(n);t(10);var o=t(1),r=t(0),i=t(40),a=t(70),c=t(55),s=t(580),l=t(659),d=t(658),p=t(586),m=t(220),u=t(589),h=t(540),g=t(500);class f extends r.PureComponent{render(){const{platform:e,previewShown:n,annotations:t,onChangePlatform:i,onTogglePreview:a,platformOptions:c}=this.props,s=t.filter(e=>e.severity<0),l=s.length>=1,d=l?"".concat(s[0].message).concat(s.length>1?" (+".concat(s.length-1," more)"):""):"";return r.createElement(m.a,{type:l?"loading":void 0},r.createElement("div",null,l?r.createElement(u.a,null,d):null),r.createElement("div",{className:Object(o.css)(b.right)},r.createElement(g.a,{className:Object(o.css)(b.preview),checked:n,onChange:a,label:"Preview"}),c.length>1&&r.createElement(h.a,{disabled:!n,options:c,value:e,onValueChange:i})))}}const b=o.StyleSheet.create({loadingText:{textOverflow:"ellipsis",whiteSpace:"nowrap",padding:".5em"},right:{display:"flex",flex:1,justifyContent:"flex-end"},preview:{margin:"0 8px"}});var k=t(169),v=t(590);function x({name:e,description:n,onOpenFullEditor:t}){const[i]=Object(k.a)(),{theme:a}=i;return r.createElement("div",{className:Object(o.css)(O.header)},r.createElement("h1",{className:Object(o.css)(O.title)},e),r.createElement("div",{className:Object(o.css)(O.iconContainer)},r.createElement(v.a,{content:r.createElement("p",{className:Object(o.css)(O.description)},n)},r.createElement("button",{className:Object(o.css)(O.icon,"light"===a?O.infoLight:O.infoDark)})),r.createElement("button",{className:Object(o.css)(O.icon,"light"===a?O.externalLight:O.externalDark),onClick:t})))}const O=o.StyleSheet.create({header:{display:"flex",flexDirection:"row",alignItems:"center",minWidth:0,margin:".25em .75em",backgroundColor:"inherit"},title:{lineHeight:1,fontSize:"1.2em",fontWeight:500,margin:0},iconContainer:{display:"flex",flexDirection:"row",margin:"0 .25em",backgroundColor:"inherit"},icon:{height:16,width:16,margin:8,backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundColor:"transparent",border:0,outline:0,opacity:.3,transition:".2s",":hover":{opacity:.8}},description:{margin:16},infoLight:{backgroundImage:"url(".concat(t(541),")")},infoDark:{backgroundImage:"url(".concat(t(591),")")},externalLight:{backgroundImage:"url(".concat(t(542),")")},externalDark:{backgroundImage:"url(".concat(t(543),")")}});var j=t(592),w=t(179),y=t(162),C=t(221),E=t(2),S=t(170),N=t(214);function D(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}class P extends r.PureComponent{constructor(e){var n;super(e),D(this,"_handleClickRunOnPhone",()=>{this.props.onDeviceConnectionAttempt(),this.setState({currentModal:"device-instructions"})}),D(this,"_handleHideModal",()=>{this.setState({currentModal:null})}),D(this,"_handleChangeConnectionMethod",e=>{this.setState({deviceConnectionMethod:e})}),D(this,"handleOpenFullEditor",()=>{Object(s.a)(this.props)});let t=null!==(n=this.props.testConnectionMethod)&&void 0!==n?n:"device-id";"account"===t&&(t="qr-code"),this.state={deviceConnectionMethod:t,currentModal:null}}render(){const{annotations:e,name:n,description:i,connectedDevices:s,deviceId:l,experienceURL:m,experienceName:u,selectedFile:h,files:g,dependencies:b,id:k,updateFiles:v,platform:O,platformOptions:w,previewRef:y,previewShown:E,previewURL:D,onChangePlatform:P,onDeviceConnectionAttempt:M,onReloadSnack:_,onSendCode:R,onTogglePreview:I,onToggleSendCode:L,sdkVersion:A,sendCodeOnChangeEnabled:T,setDeviceId:W,theme:H,userAgent:U}=this.props;return r.createElement("main",{className:Object(o.css)(F.container)},r.createElement(j.a,{name:n,description:i,id:k}),r.createElement(C.a,null,r.createElement(x,{name:n,description:i,onOpenFullEditor:this.handleOpenFullEditor}),r.createElement("a",{href:"https://expo.io",target:"_blank",rel:"noopener noreferrer",className:Object(o.css)(F.logo)},r.createElement("img",{className:Object(o.css)(F.wordmark),src:t("light"===H?663:664)}))),r.createElement("div",{className:Object(o.css)(F.editorArea)},r.createElement(p.default,{selectedFile:h,files:g,updateFiles:v,dependencies:b,lineNumbers:"off"}),E?r.createElement(S.a,{load:()=>Promise.all([t.e(1),t.e(5)]).then(t.bind(null,872))},({loaded:e,data:t})=>e&&t?r.createElement(t,{className:Object(o.css)(F.preview),width:285,connectedDevices:s,deviceId:l,experienceURL:m,experienceName:u,name:n,onAppLaunch:M,onChangePlatform:P,onClickRunOnPhone:this._handleClickRunOnPhone,onReloadSnack:_,onSendCode:R,onToggleSendCode:L,payerCode:this.props.payerCode,platform:O,platformOptions:w,previewRef:y,previewURL:D,sdkVersion:A,isEmbedded:!0,sendCodeOnChangeEnabled:T,setDeviceId:W}):null):null),r.createElement(d.a,{large:!0,isEmbedded:!0,visible:"device-instructions"===this.state.currentModal,onDismiss:this._handleHideModal,experienceURL:m,onChangeMethod:this._handleChangeConnectionMethod,method:this.state.deviceConnectionMethod,setDeviceId:this.props.setDeviceId,deviceId:l}),r.createElement("div",{className:Object(o.css)(F.footer)},r.createElement(f,{annotations:e,previewShown:E,platform:O,sdkVersion:A,platformOptions:w,onTogglePreview:I,onChangePlatform:P})),Object(c.c)(U)?r.createElement("div",{className:Object(o.css)(F.open)},r.createElement(N.a,{experienceURL:m,onDeviceConnectionAttempt:M}),r.createElement("a",{className:Object(o.css)(F.download),target:"_blank",rel:"noopener noreferrer",href:Object(c.a)(U)?a.a.links.playstore:a.a.links.itunes},"Download Expo Go")):null)}}n.default=Object(y.a)(Object(w.a)(Object(i.b)(e=>({testConnectionMethod:e.splitTestSettings.defaultConnectionMethod}))(Object(l.a)(P,!0))));const F=o.StyleSheet.create({container:{display:"flex",flexDirection:"column",height:"100%",width:"100%",backgroundColor:Object(E.a)("background"),color:Object(E.a)("text"),minHeight:0},editorArea:{display:"flex",flex:1,flexDirection:"row",minHeight:0},editorPlaceholder:{display:"flex",flex:1},preview:{backgroundColor:Object(E.a)("background")},logo:{display:"flex",flexDirection:"row",alignItems:"center",color:Object(E.a)("text"),textDecoration:"none",whiteSpace:"nowrap","@media (max-width: 480px)":{display:"none"}},wordmark:{height:18,margin:"0 .75em"},footer:{"@media (max-width: 480px)":{display:"none"}},open:{backgroundColor:Object(E.a)("background"),borderTop:"1px solid ".concat(Object(E.a)("border")),padding:".5em","@media (min-width: 480px)":{display:"none"}},download:{color:Object(E.a)("text"),display:"block",paddingBottom:".5em",textAlign:"center"}})}}]);