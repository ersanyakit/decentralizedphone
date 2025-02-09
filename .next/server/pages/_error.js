(()=>{var e={};e.id=820,e.ids=[820,888,660],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},6968:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{config:()=>m,default:()=>u,getServerSideProps:()=>h,getStaticPaths:()=>f,getStaticProps:()=>p,reportWebVitals:()=>g,routeModule:()=>P,unstable_getServerProps:()=>v,unstable_getServerSideProps:()=>j,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>x,unstable_getStaticProps:()=>b});var a=r(7093),i=r(5244),s=r(1323),o=r(1070),l=r(3893),d=r(6971),c=e([l]);l=(c.then?(await c)():c)[0];let u=(0,s.l)(d,"default"),p=(0,s.l)(d,"getStaticProps"),f=(0,s.l)(d,"getStaticPaths"),h=(0,s.l)(d,"getServerSideProps"),m=(0,s.l)(d,"config"),g=(0,s.l)(d,"reportWebVitals"),b=(0,s.l)(d,"unstable_getStaticProps"),x=(0,s.l)(d,"unstable_getStaticPaths"),y=(0,s.l)(d,"unstable_getStaticParams"),v=(0,s.l)(d,"unstable_getServerProps"),j=(0,s.l)(d,"unstable_getServerSideProps"),P=new a.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/_error",pathname:"/_error",bundlePath:"",filename:""},components:{App:l.default,Document:o.default},userland:d});n()}catch(e){n(e)}})},6971:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c}});let n=r(5577),a=r(997),i=n._(r(6689)),s=n._(r(7828)),o={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function l(e){let{res:t,err:r}=e;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}let d={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class c extends i.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,r=this.props.title||o[e]||"An unexpected error has occurred";return(0,a.jsxs)("div",{style:d.error,children:[(0,a.jsx)(s.default,{children:(0,a.jsx)("title",{children:e?e+": "+r:"Application error: a client-side exception has occurred"})}),(0,a.jsxs)("div",{style:d.desc,children:[(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?(0,a.jsx)("h1",{className:"next-error-h1",style:d.h1,children:e}):null,(0,a.jsx)("div",{style:d.wrap,children:(0,a.jsxs)("h2",{style:d.h2,children:[this.props.title||e?r:(0,a.jsx)(a.Fragment,{children:"Application error: a client-side exception has occurred (see the browser console for more information)"}),"."]})})]})]})}}c.displayName="ErrorPage",c.getInitialProps=l,c.origGetInitialProps=l,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5495:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},7828:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return m},defaultHead:function(){return u}});let n=r(5577),a=r(1271),i=r(997),s=a._(r(6689)),o=n._(r(7215)),l=r(8039),d=r(1988),c=r(5495);function u(e){void 0===e&&(e=!1);let t=[(0,i.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,i.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(1997);let f=["name","httpEquiv","charSet","itemProp"];function h(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(u(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return a=>{let i=!0,s=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){s=!0;let t=a.key.slice(a.key.indexOf("$")+1);e.has(t)?i=!1:e.add(t)}switch(a.type){case"title":case"base":t.has(a.type)?i=!1:t.add(a.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(a.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?i=!1:r.add(t);else{let e=a.props[t],r=n[t]||new Set;("name"!==t||!s)&&r.has(e)?i=!1:(r.add(e),n[t]=r)}}}}return i}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,s.default.cloneElement(e,t)}return s.default.cloneElement(e,{key:n})})}let m=function(e){let{children:t}=e,r=(0,s.useContext)(l.AmpStateContext),n=(0,s.useContext)(d.HeadManagerContext);return(0,i.jsx)(o.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,c.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7215:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let n=r(6689),a=()=>{},i=()=>{};function s(e){var t;let{headManager:r,reduceComponentsToState:s}=e;function o(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(s(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),o(),a(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),a(()=>(r&&(r._pendingUpdate=o),()=>{r&&(r._pendingUpdate=o)})),i(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},1997:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},2214:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.d(t,{n:()=>c});var a=r(997),i=r(6689),s=r(9269),o=r(9263),l=e([s,o]);[s,o]=l.then?(await l)():l;let d=(0,i.createContext)(o.chiliz.id),c=({children:e})=>{let{chainId:t}=(0,s.useAppKitNetwork)(),[r,n]=(0,i.useState)(o.chiliz.id);return(0,i.useEffect)(()=>{let e="number"==typeof t?t:o.chiliz.id;isNaN(e)?(console.error("Ge\xe7ersiz chainId, varsayılan Avalanche chainId (43114) kullanılacak."),n(o.chiliz.id)):n(e)},[t]),a.jsx(d.Provider,{value:r,children:e})};n()}catch(e){n(e)}})},3040:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.d(t,{K:()=>c});var a=r(997),i=r(6689),s=r(401),o=r(2747),l=e([s,o]);[s,o]=l.then?(await l)():l;let d=(0,i.createContext)(void 0),c=({children:e})=>{let[t,r]=(0,i.useState)(null),[n,l]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{let e=(0,s.onAuthStateChanged)(o.I,e=>{r(e),l(!1)});return()=>e()},[]),a.jsx(d.Provider,{value:{user:t,loading:n,auth:o.I,db:o.db},children:e})};n()}catch(e){n(e)}})},2322:(e,t,r)=>{"use strict";r.d(t,{g:()=>o});var n=r(997),a=r(6689),i=r(1163);let s=(0,a.createContext)(void 0),o=({children:e})=>{let t=(0,i.useRouter)(),r=t.query.action?String(t.query.action):null,a=t.query.address?String(t.query.address):null;return n.jsx(s.Provider,{value:{action:r,address:a},children:e})}},2747:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.d(t,{I:()=>c,db:()=>u});var a=r(3745),i=r(401),s=r(1492),o=r(3512),l=e([a,i,s,o]);[a,i,s,o]=l.then?(await l)():l;let d=(0,a.initializeApp)({apiKey:"AIzaSyB9QENeHq5qvQIOpaHFMpaFaJvI_rr_E6A",authDomain:"dephone-69015.firebaseapp.com",projectId:"dephone-69015",storageBucket:"dephone-69015.firebasestorage.app",messagingSenderId:"238786857795",appId:"1:238786857795:web:d45daa618454d27b11fdf6",measurementId:"G-9FZ9ZDQY32"}),c=(0,i.getAuth)(d),u=(0,s.getFirestore)(d);n()}catch(e){n(e)}})},3899:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.d(t,{Q:()=>d});var a=r(997),i=r(592),s=r(9421),o=r(9269),l=e([i,s,o]);function d({children:e}){return a.jsx(a.Fragment,{children:e})}[i,s,o]=l.then?(await l)():l,(0,o.createAppKit)({adapters:[new i.EthersAdapter],metadata:{name:"MillionarMap",description:"MillionarMap Dapp on Blockchain \uD83C\uDF10 Users leave tokens on the map \uD83D\uDDFA️ Discoverers can claim the tokens \uD83D\uDCB0",url:"https://millionarmap.com",icons:["/assets/map.svg"]},networks:[s.chiliz,s.avalanche],defaultNetwork:s.chiliz,chainImages:{88888:"/assets/chains/chz.svg"},projectId:"041abdda4ad706f9d40a41491d39737c",themeMode:"dark",features:{email:!1,socials:!1,allWallets:!0,swaps:!1,history:!1,analytics:!1,onramp:!1},featuredWalletIds:["c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96","f323633c1f67055a45aac84e321af6ffe46322da677ffdd32f9bc1e33bafe29c","971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709","8a0ee50d1f22f6651afcae7eb4253e52a3310b90af5daef78a8c4929a9bb99d4","4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0","971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709","e7c4d26541a7fd84dbdfa9922d3ad21e936e13a7a0e44385d44f006139e44d3b"]}),n()}catch(e){n(e)}})},4832:(e,t,r)=>{"use strict";r.d(t,{g:()=>l,v:()=>o});var n=r(997),a=r(6689);let i=(0,a.createContext)(void 0),s=[{id:1,name:"Ersan Efendi",address:"0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96046",isOnline:!0,isFavorite:!0},{id:2,name:"Vitalik Buterin",address:"0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",isOnline:!0,isFavorite:!0},{id:3,name:"CZ Binance",address:"0xF977814e90dA44bFA03b6295A0616a897441aceC",isOnline:!0,isFavorite:!1}];function o({children:e}){let[t,r]=(0,a.useState)(s);return n.jsx(i.Provider,{value:{contacts:t,addContact:e=>{let t={...e,id:Date.now()};r(e=>[...e,t])},removeContact:e=>{r(t=>t.filter(t=>t.id.toString()!==e))},updateContact:(e,t)=>{r(r=>r.map(r=>r.id.toString()===e?{...r,...t}:r))},toggleFavorite:e=>{r(t=>t.map(t=>t.id.toString()===e?{...t,isFavorite:!t.isFavorite}:t))}},children:e})}function l(){let e=(0,a.useContext)(i);if(void 0===e)throw Error("useContacts must be used within a ContactsProvider");return e}},1783:(e,t,r)=>{"use strict";r.d(t,{S:()=>o,s:()=>s});var n=r(997),a=r(6689);let i=(0,a.createContext)(null);function s({children:e}){let[t,r]=(0,a.useState)(null),[s,o]=(0,a.useState)(null),[l,d]=(0,a.useState)(!1),[c,u]=(0,a.useState)(null),p=(0,a.useRef)(null),f=(0,a.useRef)(null),h=async()=>{p.current=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"}]});let e=await navigator.mediaDevices.getUserMedia({video:!0,audio:!0});r(e),e.getTracks().forEach(t=>{p.current?.addTrack(t,e)}),p.current.ontrack=e=>{o(e.streams[0])},p.current.onicecandidate=e=>{e.candidate&&f.current?.send(JSON.stringify({type:"ice-candidate",candidate:e.candidate}))}},m=async e=>{await h(),d(!0);let t=await p.current?.createOffer();await p.current?.setLocalDescription(t),f.current?.send(JSON.stringify({type:"offer",offer:t,targetUserId:e}))},g=async e=>{await h(),d(!0),await p.current?.setRemoteDescription(new RTCSessionDescription(e.offer));let t=await p.current?.createAnswer();await p.current?.setLocalDescription(t),f.current?.send(JSON.stringify({type:"answer",answer:t,targetUserId:e.fromUserId}))};return n.jsx(i.Provider,{value:{localStream:t,remoteStream:s,startCall:m,answerCall:g,endCall:()=>{t?.getTracks().forEach(e=>e.stop()),p.current?.close(),p.current=null,r(null),o(null),d(!1),u(null)},isInCall:l,incomingCall:c,setIncomingCall:u},children:e})}let o=()=>{let e=(0,a.useContext)(i);if(!e)throw Error("useWebRTC must be used within a WebRTCProvider");return e}},3893:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{default:()=>f});var a=r(997),i=r(2406);r(9734),r(6689);var s=r(2214),o=r(3040),l=r(2322),d=r(3899),c=r(4832),u=r(1783),p=e([i,s,o,d]);[i,s,o,d]=p.then?(await p)():p;let f=({Component:e,pageProps:t})=>a.jsx(a.Fragment,{children:a.jsx(i.NextUIProvider,{children:a.jsx(o.K,{children:a.jsx(l.g,{children:a.jsx(u.s,{children:a.jsx(d.Q,{children:a.jsx(s.n,{children:a.jsx(c.v,{children:a.jsx("main",{className:"text-base",children:a.jsx(e,{...t})})})})})})})})})});n()}catch(e){n(e)}})},1070:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(997),a=r(6859);function i(){return(0,n.jsxs)(a.Html,{lang:"en",children:[(0,n.jsxs)(a.Head,{children:[n.jsx("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),n.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),n.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),n.jsx("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),n.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap",rel:"stylesheet"}),n.jsx("title",{children:"Decentralized Phone - Your Decentralized Phone"}),n.jsx("meta",{name:"description",content:"Join MillionarMap today and start building your wealth—one token at a time."}),n.jsx("meta",{name:"description",content:"Discover and contribute on MillionarMap by pinning tokens and earning rewards!"}),n.jsx("meta",{name:"keywords",content:"wealth, map, tokens, contribute, rewards"}),n.jsx("meta",{name:"author",content:"MillionarMap"})]}),(0,n.jsxs)("body",{children:[n.jsx(a.Main,{}),n.jsx(a.NextScript,{})]})]})}},9734:()=>{},5244:(e,t)=>{"use strict";var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},8039:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.AmpContext},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},2048:e=>{"use strict";e.exports=require("fs")},5315:e=>{"use strict";e.exports=require("path")},6162:e=>{"use strict";e.exports=require("stream")},1568:e=>{"use strict";e.exports=require("zlib")},2406:e=>{"use strict";e.exports=import("@nextui-org/react")},592:e=>{"use strict";e.exports=import("@reown/appkit-adapter-ethers")},9421:e=>{"use strict";e.exports=import("@reown/appkit/networks")},9269:e=>{"use strict";e.exports=import("@reown/appkit/react")},3745:e=>{"use strict";e.exports=import("firebase/app")},401:e=>{"use strict";e.exports=import("firebase/auth")},1492:e=>{"use strict";e.exports=import("firebase/firestore")},3512:e=>{"use strict";e.exports=import("firebase/messaging")},9263:e=>{"use strict";e.exports=import("viem/chains")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[429,163,859],()=>r(6968));module.exports=n})();