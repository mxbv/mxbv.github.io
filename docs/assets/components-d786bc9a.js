import{r as c}from"./react-vendor-b1791c80.js";import{u as k}from"./react-intersection-observer-de2e079d.js";var S={exports:{}},v={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B=c,P=Symbol.for("react.element"),R=Symbol.for("react.fragment"),D=Object.prototype.hasOwnProperty,H=B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T={key:!0,ref:!0,__self:!0,__source:!0};function $(r,a,o){var t,i={},l=null,d=null;o!==void 0&&(l=""+o),a.key!==void 0&&(l=""+a.key),a.ref!==void 0&&(d=a.ref);for(t in a)D.call(a,t)&&!T.hasOwnProperty(t)&&(i[t]=a[t]);if(r&&r.defaultProps)for(t in a=r.defaultProps,a)i[t]===void 0&&(i[t]=a[t]);return{$$typeof:P,type:r,key:l,ref:d,props:i,_owner:H.current}}v.Fragment=R;v.jsx=$;v.jsxs=$;S.exports=v;var e=S.exports;const I=c.createContext(),U=()=>{const r=c.useContext(I);if(!r)throw new Error("useTheme must be used within a ThemeProvider");return r},kt=({children:r})=>{const[a,o]=c.useState(()=>{const l=localStorage.getItem("theme");return l?l==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}),t=l=>{const d=document.getElementById("scrollbar-styles")||document.createElement("style");d.id="scrollbar-styles";const x=l?`
      /* Dark theme scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: #1f2937; /* gray-800 */
      }
      ::-webkit-scrollbar-thumb {
        background: #4b5563; /* gray-600 */
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #6b7280; /* gray-500 */
      }
      /* Firefox scrollbar */
      * {
        scrollbar-width: thin;
        scrollbar-color: #4b5563 #1f2937;
      }
    `:`
      /* Light theme scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: #f3f4f6; /* gray-100 */
      }
      ::-webkit-scrollbar-thumb {
        background: #d1d5db; /* gray-300 */
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #9ca3af; /* gray-400 */
      }
      /* Firefox scrollbar */
      * {
        scrollbar-width: thin;
        scrollbar-color: #d1d5db #f3f4f6;
      }
    `;d.textContent=x,document.head.appendChild(d)};c.useEffect(()=>{localStorage.setItem("theme",a?"dark":"light"),a?(document.documentElement.classList.add("dark"),document.documentElement.style.backgroundColor="#111827"):(document.documentElement.classList.remove("dark"),document.documentElement.style.backgroundColor="#f9fafb"),t(a)},[a]),c.useEffect(()=>{a?document.documentElement.style.backgroundColor="#111827":document.documentElement.style.backgroundColor="#f9fafb",t(a)},[]);const i=()=>{o(!a)};return e.jsx(I.Provider,{value:{isDark:a,toggleTheme:i},children:r})};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),G=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,o,t)=>t?t.toUpperCase():o.toLowerCase()),M=r=>{const a=G(r);return a.charAt(0).toUpperCase()+a.slice(1)},z=(...r)=>r.filter((a,o,t)=>!!a&&a.trim()!==""&&t.indexOf(a)===o).join(" ").trim(),W=r=>{for(const a in r)if(a.startsWith("aria-")||a==="role"||a==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var J={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=c.forwardRef(({color:r="currentColor",size:a=24,strokeWidth:o=2,absoluteStrokeWidth:t,className:i="",children:l,iconNode:d,...x},h)=>c.createElement("svg",{ref:h,...J,width:a,height:a,stroke:r,strokeWidth:t?Number(o)*24/Number(a):o,className:z("lucide",i),...!l&&!W(x)&&{"aria-hidden":"true"},...x},[...d.map(([w,m])=>c.createElement(w,m)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s=(r,a)=>{const o=c.forwardRef(({className:t,...i},l)=>c.createElement(X,{ref:l,iconNode:a,className:z(`lucide-${O(M(r))}`,`lucide-${r}`,t),...i}));return o.displayName=M(r),o};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],Y=s("book",Z);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],Q=s("brain",K);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],te=s("chevron-left",ee);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],re=s("chevron-right",ae);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],F=s("code-xml",oe);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],se=s("code",ne);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],ie=s("download",le);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]],de=s("dumbbell",ce);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],xe=s("external-link",me);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]],ge=s("file-code",he);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],ye=s("file-text",pe);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],ue=s("git-branch",be);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],ke=s("github",fe);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],we=s("house",ve);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Ne=s("layers",je);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],_e=s("linkedin",Ce);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Se=s("mail",Me);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Ie=s("menu",$e);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Fe=s("moon",ze);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],Ae=s("package",Ee);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],C=s("palette",Ve);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],qe=s("server",Le);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Pe=s("settings",Be);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],De=s("star",Re);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Te=s("sun",He);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Oe=s("user",Ue);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],We=s("x",Ge);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],E=s("zap",Je),n=r=>({size:a=24,className:o="",...t})=>e.jsx(r,{size:a,className:o,...t}),Xe=n(we),Ze=n(Oe),Ye=n(De),A=n(se),_=n(Se),V=n(ie),f=n(ke),L=n(_e),Ke=n(Ie),Qe=n(We),et=n(Fe),tt=n(Te),at=n(te),rt=n(re),ot=n(xe),nt=n(Y),st=n(de),lt=n(Q),it=n(F),j=n(F),ct=n(ye),dt=n(C),mt=n(qe),xt=n(ue),ht=n(C),gt=n(Ae),pt=n(C),y=n(ge),u=n(E),yt=n(E),bt=n(Pe),N=n(Ne),vt=()=>{const[r,a]=c.useState(!1),[o,t]=c.useState(!1),[i,l]=c.useState("home"),{isDark:d,toggleTheme:x}=U(),h=[{id:"home",label:"Home",icon:Xe},{id:"about",label:"About",icon:Ze},{id:"skills",label:"Skills",icon:Ye},{id:"projects",label:"Projects",icon:A},{id:"contact",label:"Contact",icon:_}];c.useEffect(()=>{const m=()=>{h.map(p=>document.getElementById(p.id)).filter(Boolean).forEach(p=>{const b=p.getBoundingClientRect();b.top<=200&&b.bottom>=200&&l(p.id)})};return window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)},[]);const w=m=>{const g=document.getElementById(m);g&&g.scrollIntoView({behavior:"smooth"}),a(!1)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed top-4 right-4 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-full border border-gray-200 dark:border-gray-700",children:e.jsx("a",{href:"https://mxbv.github.io",target:"_self",rel:"noopener noreferrer",className:"block w-12 h-12","aria-label":"Visit mxbv.github.io",children:e.jsx("img",{src:"/assets/img/favicon.png",alt:"mxbv",className:"w-12 h-12"})})}),e.jsx("button",{onClick:()=>t(!o),className:`hidden md:block fixed top-4 z-50 p-3 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900 transition-all duration-300 ${o?"left-4":"left-24"}`,children:o?e.jsx(rt,{size:20}):e.jsx(at,{size:20})}),e.jsx("button",{onClick:()=>a(!r),className:`fixed top-4 z-50 p-3 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900 transition-all duration-300 md:hidden ${r?"left-20":"left-4"}`,children:r?e.jsx(Qe,{size:20}):e.jsx(Ke,{size:20})}),e.jsx("aside",{className:`fixed left-0 top-0 h-full w-16 md:w-20 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-r border-gray-200 dark:border-gray-700 z-40 transition-all duration-300 ${r?"translate-x-0":o?"-translate-x-full":"-translate-x-full md:translate-x-0"}`,children:e.jsxs("div",{className:"flex flex-col items-center justify-center h-full",children:[e.jsx("nav",{className:"flex flex-col items-center space-y-4",children:h.map((m,g)=>{const p=m.icon,b=i===m.id;return e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsxs("button",{onClick:()=>w(m.id),className:`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group ${b?"bg-primary-500 text-white shadow-lg shadow-primary-500/30":"bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-500"}`,children:[e.jsx(p,{size:18}),e.jsx("div",{className:"hidden md:block absolute left-full ml-4 px-3 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-[1000]",children:m.label})]}),g<h.length-1&&e.jsx("div",{className:`w-0.5 h-8 mt-4 ${i===m.id||h.findIndex(q=>q.id===i)>g?"bg-primary-500":"bg-gray-200 dark:bg-gray-600"}`})]},m.id)})}),e.jsx("div",{className:"mt-8",children:e.jsxs("button",{onClick:x,className:"w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-500",children:[d?e.jsx(tt,{size:18}):e.jsx(et,{size:18}),e.jsx("div",{className:"hidden md:block absolute left-full ml-4 px-3 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-[1000]",children:d?"Light Mode":"Dark Mode"})]})})]})}),r&&e.jsx("div",{className:"fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden",onClick:()=>a(!1)})]})},wt=()=>{const[r,a]=c.useState(0),o=c.useMemo(()=>["Frontend Developer","UI/UX Enthusiast","Book Reader","Fitness Enthusiast","Philosophy Explorer"],[]);return c.useEffect(()=>{const t=setInterval(()=>{a(i=>(i+1)%o.length)},3e3);return()=>clearInterval(t)},[o.length]),e.jsx("section",{id:"home",className:"min-h-screen flex items-center justify-center pt-20 md:pt-0",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full",children:e.jsxs("div",{className:"grid lg:grid-cols-2 gap-8 lg:gap-12 items-center",children:[e.jsxs("div",{className:"text-center lg:text-left order-2 lg:order-1",children:[e.jsx("p",{className:"text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-4 animate-fade-in-up",children:"Hi, you've landed on my page."}),e.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 dark:text-white mb-6 animate-fade-in-up animate-delay-100",children:["I am ",e.jsx("span",{className:"text-primary-500",children:"Max Baranov"}),e.jsx("br",{}),e.jsx("span",{className:"inline-block animate-fade-in-up text-3xl sm:text-4xl lg:text-5xl xl:text-6xl",children:o[r]},r)]}),e.jsx("div",{className:"max-w-3xl mx-auto lg:mx-0 mb-6 animate-fade-in-up animate-delay-200",children:e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 leading-relaxed",children:"I like staying active, reading, and exploring philosophy. Coding is where I dive deep — always learning, always building. I believe in keeping balance: physical, mental, and creative."})}),e.jsxs("div",{className:"flex items-center justify-center lg:justify-start space-x-2 text-gray-500 dark:text-gray-400 mb-6 sm:mb-8 animate-fade-in-up animate-delay-300",children:[e.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",clipRule:"evenodd"})}),e.jsx("span",{className:"text-xs sm:text-sm font-medium",children:"Poland / Remote"})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start animate-fade-in-up animate-delay-400",children:[e.jsxs("a",{href:"/assets/Max_Baranov_CV_2025.pdf",target:"_blank",rel:"noopener noreferrer",className:"btn-primary inline-flex items-center space-x-2 w-full sm:w-auto justify-center",children:[e.jsx(V,{}),e.jsx("span",{children:"View CV"})]}),e.jsx("a",{href:"#projects",onClick:t=>{t.preventDefault(),document.getElementById("projects").scrollIntoView({behavior:"smooth"})},className:"btn-secondary inline-flex items-center space-x-2 w-full sm:w-auto justify-center",children:e.jsx("span",{children:"View My Work"})})]})]}),e.jsx("div",{className:"flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0",children:e.jsx("div",{className:"w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] xl:w-[36rem] xl:h-[36rem] rounded-xl shadow-card animate-fade-in-up animate-delay-300 hero-image-3d cursor-pointer",children:e.jsx("img",{src:"/assets/img/hero-img.jpeg",alt:"Max Baranov",className:"w-full h-full rounded-xl object-cover"})})})]})})})},jt=()=>{const[r,a]=k({triggerOnce:!0,threshold:.1}),o=[{icon:A,title:"Coding",description:"Building modern web applications"},{icon:nt,title:"Reading",description:"Philosophy, tech, and personal growth"},{icon:st,title:"Fitness",description:"Staying active and healthy"},{icon:lt,title:"Learning",description:"Exploring new technologies"}];return e.jsx("section",{id:"about",className:"py-20 bg-white dark:bg-gray-900",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{ref:r,className:`text-center mb-16 ${a?"animate-fade-in-up":"opacity-0"}`,children:[e.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4 animate-fade-in-up animate-delay-100",children:"About Me"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up animate-delay-200",children:"A little about me and what drives my passion for development"})]}),e.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 items-center",children:[e.jsxs("div",{className:`space-y-6 ${a?"animate-fade-in-left":"opacity-0"}`,children:[e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in-left animate-delay-100",children:"I'm a passionate frontend developer with a love for creating simple, elegant solutions to complex problems. My journey in tech started with curiosity and has evolved into a deep appreciation for clean code and user-centered design."}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in-left animate-delay-200",children:"When I'm not coding, you'll find me reading philosophy books, hitting the gym, or exploring new technologies. I believe that great software comes from a balanced life where creativity, physical health, and continuous learning work together."})]}),e.jsx("div",{className:`grid grid-cols-2 gap-6 ${a?"animate-fade-in-right":"opacity-0"}`,children:o.map((t,i)=>{const l=t.icon;return e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center hover:bg-primary-50 dark:hover:bg-primary-900/20 shadow-card shadow-card-hover animate-fade-in-right",style:{animationDelay:`${.1*i}s`},children:[e.jsx("div",{className:"text-primary-500 mb-3 flex justify-center",children:e.jsx(l,{size:32})}),e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:t.title}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:t.description})]},t.title)})})]})]})})},Nt=()=>{const[r,a]=k({triggerOnce:!0,threshold:.1}),o=[{id:1,title:"Simpl",description:"A lightweight notes app focused on minimalism and speed. All data stays local — no cloud, no clutter. Built with Vue.js and IndexedDB for offline-first functionality.",image:"/assets/img/projects-img/simpl.webp",technologies:[{name:"Vue.js",icon:N,color:"text-green-500"},{name:"IndexedDB",icon:y,color:"text-blue-500"},{name:"CSS3",icon:u,color:"text-blue-400"}],liveUrl:"/simpl/",githubUrl:"https://github.com/mxbv/Simpl-web",featured:!0},{id:2,title:"Stream",description:"A personal feed of news and articles I check from time to time. Clean interface, simple layout, just links that matter. Built with vanilla JavaScript and RSS API integration.",image:"/assets/img/projects-img/stream.webp",technologies:[{name:"JavaScript",icon:y,color:"text-yellow-500"},{name:"RSS API",icon:y,color:"text-orange-500"},{name:"CSS3",icon:u,color:"text-blue-400"}],liveUrl:"/stream/",githubUrl:"https://github.com/mxbv/Stream",featured:!0},{id:3,title:"MovieX",description:"Discover trending movies with a clean, focused UI. Powered by a movie API and built with Vue.js. Features search, filtering, and detailed movie information.",image:"/assets/img/projects-img/moviex.webp",technologies:[{name:"Vue.js",icon:N,color:"text-green-500"},{name:"Movie API",icon:y,color:"text-purple-500"},{name:"CSS3",icon:u,color:"text-blue-400"}],liveUrl:"/moviex/",githubUrl:"https://github.com/mxbv/MovieX",featured:!0}];return e.jsx("section",{id:"projects",className:"py-20 bg-white dark:bg-gray-900",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{ref:r,className:`text-center mb-16 ${a?"animate-fade-in-up":"opacity-0"}`,children:[e.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4 animate-fade-in-up animate-delay-100",children:"Selected Projects"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up animate-delay-200",children:"A showcase of my recent work and personal projects"})]}),e.jsx("div",{className:"grid lg:grid-cols-3 gap-8",children:o.map((t,i)=>e.jsxs("div",{className:`bg-white dark:bg-gray-800 rounded-xl shadow-card overflow-hidden shadow-card-hover animate-fade-in-up ${t.featured?"lg:col-span-1":""} ${a?"animate-fade-in-up":"opacity-0"}`,style:{animationDelay:`${.1*i}s`},children:[e.jsx("div",{className:"relative overflow-hidden pt-6",children:e.jsx("img",{src:t.image,alt:t.title,loading:"lazy",className:"w-full aspect-[7/4] object-cover"})}),e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-white mb-3",children:t.title}),e.jsx("p",{className:"text-gray-600 dark:text-gray-300 mb-4 leading-relaxed",children:t.description}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:t.technologies.map((l,d)=>{const x=l.icon;return e.jsxs("span",{className:`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium bg-gray-100 ${l.color}`,children:[e.jsx(x,{size:14}),e.jsx("span",{children:l.name})]},d)})}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsxs("a",{href:t.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"flex-1 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium text-center transition-colors duration-300 flex items-center justify-center space-x-2",children:[e.jsx(ot,{size:18}),e.jsx("span",{children:"Live Demo"})]}),e.jsxs("a",{href:t.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-medium text-center transition-colors duration-300 flex items-center justify-center space-x-2",children:[e.jsx(f,{size:18}),e.jsx("span",{children:"Code"})]})]})]})]},t.id))}),e.jsx("div",{className:`text-center mt-16 ${a?"animate-fade-in-up":"opacity-0"}`,children:e.jsxs("div",{className:"bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-8 text-white animate-fade-in-up animate-delay-100",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-4",children:"Interested in my work?"}),e.jsx("p",{className:"text-lg mb-6 opacity-90",children:"Check out more projects on my GitHub or let's discuss your next project"}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[e.jsxs("a",{href:"https://github.com/mxbv",target:"_blank",rel:"noopener noreferrer",className:"bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center space-x-2",children:[e.jsx(f,{}),e.jsx("span",{children:"View GitHub"})]}),e.jsx("a",{href:"#contact",onClick:t=>{t.preventDefault(),document.getElementById("contact").scrollIntoView({behavior:"smooth"})},className:"border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-colors duration-300",children:"Get In Touch"})]})]})})]})})},Ct=()=>{const[r,a]=k({triggerOnce:!0,threshold:.1}),o=[{name:"React",icon:it,color:"text-blue-500",bgColor:"bg-blue-50",borderColor:"border-blue-200"},{name:"Vue.js",icon:N,color:"text-green-500",bgColor:"bg-green-50",borderColor:"border-green-200"},{name:"TypeScript",icon:y,color:"text-blue-600",bgColor:"bg-blue-50",borderColor:"border-blue-200"},{name:"JavaScript",icon:j,color:"text-yellow-500",bgColor:"bg-yellow-50",borderColor:"border-yellow-200"},{name:"CSS3",icon:dt,color:"text-blue-400",bgColor:"bg-blue-50",borderColor:"border-blue-200"},{name:"Tailwind CSS",icon:u,color:"text-cyan-500",bgColor:"bg-cyan-50",borderColor:"border-cyan-200"},{name:"SASS/SCSS",icon:pt,color:"text-pink-500",bgColor:"bg-pink-50",borderColor:"border-pink-200"},{name:"Figma",icon:ht,color:"text-purple-500",bgColor:"bg-purple-50",borderColor:"border-purple-200"},{name:"Vite",icon:yt,color:"text-yellow-400",bgColor:"bg-yellow-50",borderColor:"border-yellow-200"},{name:"Webpack",icon:bt,color:"text-blue-500",bgColor:"bg-blue-50",borderColor:"border-blue-200"},{name:"Git",icon:xt,color:"text-orange-500",bgColor:"bg-orange-50",borderColor:"border-orange-200"},{name:"NPM",icon:gt,color:"text-red-500",bgColor:"bg-red-50",borderColor:"border-red-200"},{name:"Node.js",icon:mt,color:"text-green-600",bgColor:"bg-green-50",borderColor:"border-green-200"},{name:"HTML5",icon:ct,color:"text-orange-600",bgColor:"bg-orange-50",borderColor:"border-orange-200"},{name:"REST APIs",icon:j,color:"text-blue-500",bgColor:"bg-blue-50",borderColor:"border-blue-200"},{name:"IndexedDB",icon:j,color:"text-purple-600",bgColor:"bg-purple-50",borderColor:"border-purple-200"}];return e.jsx("section",{id:"skills",className:"py-20 bg-gray-50 dark:bg-gray-800",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{ref:r,className:`text-center mb-8 ${a?"animate-fade-in-up":"opacity-0"}`,children:[e.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4 animate-fade-in-up animate-delay-100",children:"Skills & Technologies"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up animate-delay-200",children:"Technologies and tools I work with"})]}),e.jsx("div",{className:"p-8",children:e.jsx("div",{className:"flex flex-wrap gap-3 justify-center",children:o.map((t,i)=>{const l=t.icon;return e.jsxs("div",{className:`inline-flex items-center space-x-2 px-4 py-3 rounded-lg border ${t.bgColor} ${t.borderColor} dark:bg-gray-700 dark:border-gray-600 shadow-card shadow-card-hover cursor-pointer animate-fade-in-up`,style:{animationDelay:`${.05*i}s`},children:[e.jsx("div",{className:`${t.color} text-xl`,children:e.jsx(l,{})}),e.jsx("span",{className:"font-medium text-gray-800 dark:text-gray-200",children:t.name})]},t.name)})})})]})})},_t=()=>{const[r,a]=k({triggerOnce:!0,threshold:.1}),o=[{icon:_,name:"Email",value:"max.qb@icloud.com",link:"mailto:max.qb@icloud.com",color:"text-blue-500",bgColor:"bg-blue-50",borderColor:"border-blue-200"},{icon:f,name:"GitHub",value:"github.com/mxbv",link:"https://github.com/mxbv",color:"text-gray-800",bgColor:"bg-gray-50",borderColor:"border-gray-200"},{icon:L,name:"LinkedIn",value:"linkedin.com/in/maximdev",link:"https://linkedin.com/in/maximdev",color:"text-blue-600",bgColor:"bg-blue-50",borderColor:"border-blue-200"}];return e.jsx("section",{id:"contact",className:"py-20 bg-gray-50 dark:bg-gray-800",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{ref:r,className:`text-center mb-10 ${a?"animate-fade-in-up":"opacity-0"}`,children:[e.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4 animate-fade-in-up animate-delay-100",children:"Let's Stay in Touch"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up animate-delay-200",children:"Ready to work together? I'm always interested in exciting projects."})]}),e.jsx("div",{className:"max-w-4xl mx-auto",children:e.jsxs("div",{className:`space-y-8 ${a?"animate-fade-in-up":"opacity-0"}`,children:[e.jsx("div",{className:"flex flex-wrap gap-4 justify-center",children:o.map((t,i)=>{const l=t.icon;return e.jsxs("div",{className:`inline-flex items-center space-x-3 px-6 py-4 rounded-lg border ${t.bgColor} ${t.borderColor} dark:bg-gray-700 dark:border-gray-600 shadow-card shadow-card-hover ${t.link?"cursor-pointer":"cursor-default"} animate-fade-in-up`,style:{animationDelay:`${.1*i}s`},onClick:()=>t.link&&window.open(t.link,t.link.startsWith("http")?"_blank":"_self"),children:[e.jsx("div",{className:`${t.color} text-2xl`,children:e.jsx(l,{})}),e.jsxs("div",{className:"text-left",children:[e.jsx("div",{className:"font-medium text-gray-800 dark:text-gray-200 text-sm",children:t.name}),e.jsx("div",{className:"text-gray-600 dark:text-gray-300 text-sm",children:t.value})]})]},t.name)})}),e.jsx("div",{className:"bg-primary-500 dark:bg-primary-600 rounded-lg p-6 text-white animate-fade-in-up animate-delay-300 w-full",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h4",{className:"text-2xl font-semibold mb-2",children:"View My CV"}),e.jsx("p",{className:"text-xl text-primary-100 dark:text-primary-200 mb-4",children:"Get a detailed overview of my experience and skills"}),e.jsxs("a",{href:"/assets/Max_Baranov_CV_2025.pdf",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center space-x-2 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300",children:[e.jsx(V,{}),e.jsx("span",{children:"View PDF"})]})]})})]})})]})})},Mt=()=>{const r=new Date().getFullYear();return e.jsx("footer",{className:"bg-gray-900 dark:bg-gray-950 text-white py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-8 items-center",children:[e.jsxs("div",{className:"text-center md:text-left",children:[e.jsx("a",{href:"https://mxbv.github.io",target:"_self",rel:"noopener noreferrer",className:"inline-block","aria-label":"Visit mxbv.github.io",children:e.jsxs("h3",{className:"text-2xl font-bold text-primary-400 dark:text-primary-300 mb-2 hover:text-primary-300 dark:hover:text-primary-200 transition-colors duration-300",children:["mxbv ",e.jsxs("span",{className:"text-sm text-gray-400 dark:text-gray-500",children:["© ",r]})]})}),e.jsx("p",{className:"text-gray-400 dark:text-gray-500",children:"Let's create simple tools for a complex world"})]}),e.jsxs("div",{className:"flex justify-end space-x-6",children:[e.jsx("a",{href:"https://github.com/mxbv",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors duration-300","aria-label":"GitHub",children:e.jsx(f,{size:24})}),e.jsx("a",{href:"https://linkedin.com/in/maximdev",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors duration-300","aria-label":"LinkedIn",children:e.jsx(L,{size:24})}),e.jsx("a",{href:"mailto:max.qb@icloud.com",className:"text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors duration-300","aria-label":"Email",children:e.jsx(_,{size:24})})]})]})})})};export{jt as A,_t as C,Mt as F,wt as H,Nt as P,vt as S,kt as T,Ct as a,e as j};
