(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[8438,5272,5897],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>d});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?o.createElement(g,r(r({ref:t},u),{},{components:n})):o.createElement(g,r({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6742:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var o=n(7294),a=n(3727),i=n(2263),r=n(3919),s=n(412);const l=(0,o.createContext)({collectLink:()=>{}});var c=n(4996),u=n(8780);const p=function({isNavLink:e,to:t,href:n,activeClassName:p,isActive:m,"data-noBrokenLinkCheck":d,autoAddBaseUrl:g=!0,...f}){var h;const{siteConfig:{trailingSlash:v}}=(0,i.Z)(),{withBaseUrl:b}=(0,c.C)(),y=(0,o.useContext)(l),k=t||n,w=(0,r.Z)(k),x=null==k?void 0:k.replace("pathname://","");let N=void 0!==x?(C=x,g&&(e=>e.startsWith("/"))(C)?b(C):C):void 0;var C;N&&w&&(N=(0,u.applyTrailingSlash)(N,v));const T=(0,o.useRef)(!1),Z=e?a.OL:a.rU,O=s.Z.canUseIntersectionObserver;let I;(0,o.useEffect)((()=>(!O&&w&&null!=N&&window.docusaurus.prefetch(N),()=>{O&&I&&I.disconnect()})),[N,O,w]);const j=null!==(h=null==N?void 0:N.startsWith("#"))&&void 0!==h&&h,M=!N||!w||j;return N&&w&&!j&&!d&&y.collectLink(N),M?o.createElement("a",{href:N,...k&&!w&&{target:"_blank",rel:"noopener noreferrer"},...f}):o.createElement(Z,{...f,onMouseEnter:()=>{T.current||null==N||(window.docusaurus.preload(N),T.current=!0)},innerRef:e=>{var t,n;O&&e&&w&&(t=e,n=()=>{null!=N&&window.docusaurus.prefetch(N)},I=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(I.unobserve(t),I.disconnect(),n())}))})),I.observe(t))},to:N||"",...e&&{isActive:m,activeClassName:p}})}},3919:(e,t,n)=>{"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!o(e)}n.d(t,{b:()=>o,Z:()=>a})},4996:(e,t,n)=>{"use strict";n.d(t,{C:()=>i,Z:()=>r});var o=n(2263),a=n(3919);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,o.Z)();return{withBaseUrl:(n,o)=>function(e,t,n,{forcePrependBaseUrl:o=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(o)return t+n;const r=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+r:r}(t,e,n,o)}}function r(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},8215:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var o=n(7294);const a=function({children:e,hidden:t,className:n}){return o.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},1395:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var o=n(7294),a=n(944),i=n(6010);const r="tabItem_1uMI",s="tabItemActive_2DSg";const l=37,c=39;const u=function(e){const{lazy:t,block:n,defaultValue:u,values:p,groupId:m,className:d}=e,{tabGroupChoices:g,setTabGroupChoices:f}=(0,a.Z)(),[h,v]=(0,o.useState)(u),b=o.Children.toArray(e.children),y=[];if(null!=m){const e=g[m];null!=e&&e!==h&&p.some((t=>t.value===e))&&v(e)}const k=e=>{const t=e.currentTarget,n=y.indexOf(t),o=p[n].value;v(o),null!=m&&(f(m,o),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:o,right:a}=e.getBoundingClientRect(),{innerHeight:i,innerWidth:r}=window;return t>=0&&a<=r&&o<=i&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((()=>t.classList.remove(s)),2e3))}),150))},w=e=>{var t;let n;switch(e.keyCode){case c:{const t=y.indexOf(e.target)+1;n=y[t]||y[0];break}case l:{const t=y.indexOf(e.target)-1;n=y[t]||y[y.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},d)},p.map((({value:e,label:t})=>o.createElement("li",{role:"tab",tabIndex:h===e?0:-1,"aria-selected":h===e,className:(0,i.Z)("tabs__item",r,{"tabs__item--active":h===e}),key:e,ref:e=>y.push(e),onKeyDown:w,onFocus:k,onClick:k},t)))),t?(0,o.cloneElement)(b.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},b.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}},9443:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(7294),a=n(9443);const i=function(){const e=(0,o.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),o="/"===n?"/":t?(a=n).endsWith("/")?a:`${a}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(n);var a;return e.replace(n,o)}},8780:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return o(a).default}});var i=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return o(i).default}})},9964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1962:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var o=n(6742),a=n(7294),i=n(6010);const r="root_2PFE";function s({title:e,description:t,link:n}){return a.createElement("div",{className:(0,i.Z)("card-demo",r)},a.createElement("div",{className:"card"},a.createElement("div",{className:"card__header"},a.createElement("h3",null,e)),a.createElement("div",{className:"card__body"},a.createElement("p",null,t)),a.createElement("div",{className:"card__footer"},a.createElement(o.Z,{className:"button button--secondary button--block",to:n},"Get Started"))))}},7763:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(7294);const a="root_NqT0";function i({children:e}){return o.createElement("div",{className:a},e)}},7476:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>r,contentTitle:()=>s,metadata:()=>l,toc:()=>c,default:()=>p});var o=n(2122),a=(n(7294),n(3905)),i=n(2457);const r={},s=void 0,l={unversionedId:"mobile/snippets/prereqs-layout-config-editing",id:"mobile/snippets/prereqs-layout-config-editing",isDocsHomePage:!1,title:"prereqs-layout-config-editing",description:"Follow along by setting up the VertiGIS Studio Mobile SDK and editing the minimal layout and app config provided.",source:"@site/docs/mobile/snippets/prereqs-layout-config-editing.mdx",sourceDirName:"mobile/snippets",slug:"/mobile/snippets/prereqs-layout-config-editing",permalink:"/docs/mobile/snippets/prereqs-layout-config-editing",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/snippets/prereqs-layout-config-editing.mdx",version:"current",frontMatter:{}},c=[],u={toc:c};function p({components:e,...t}){return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Follow along by setting up the ",(0,a.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-overview"},"VertiGIS Studio Mobile SDK")," and editing the minimal layout and app config provided."),(0,a.kt)(i.default,{mdxType:"TweakLayoutConfigSnippet"}))}p.isMDXComponent=!0},2457:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>r,metadata:()=>s,toc:()=>l,default:()=>u});var o=n(2122),a=(n(7294),n(3905));const i={},r=void 0,s={unversionedId:"mobile/snippets/tweak-layout-config",id:"mobile/snippets/tweak-layout-config",isDocsHomePage:!1,title:"tweak-layout-config",description:"If you just need to make a small change to the layout and app config of an existing application, you can download the config and layout files for the application, tweak them, and then re-upload them.",source:"@site/docs/mobile/snippets/tweak-layout-config.mdx",sourceDirName:"mobile/snippets",slug:"/mobile/snippets/tweak-layout-config",permalink:"/docs/mobile/snippets/tweak-layout-config",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/snippets/tweak-layout-config.mdx",version:"current",frontMatter:{}},l=[],c={toc:l};function u({components:e,...t}){return(0,a.kt)("wrapper",(0,o.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you just need to make a small change to the layout and app config of an existing application, you can ",(0,a.kt)("a",{parentName:"p",href:"https://docs.geocortex.com/mobileviewer/latest/admin-help/Default.htm#gmv/designer/configuration-Options.htm#Download-app-config%3FTocPath%3DConfiguration%7CConfiguration%2520Options%7C_____3"},"download the config and layout files for the application"),", tweak them, and then re-upload them."))))}u.isMDXComponent=!0},373:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>m,metadata:()=>d,toc:()=>g,default:()=>h});var o=n(2122),a=(n(7294),n(3905)),i=n(4996),r=n(1395),s=n(8215),l=n(1962),c=n(7763),u=n(7476);const p={title:"Configure Button Click Behavior",description:"VertiGIS Studio Mobile - Learn how to run an existing command or operation on a button press"},m=void 0,d={unversionedId:"mobile/tutorial-configure-button-click",id:"mobile/tutorial-configure-button-click",isDocsHomePage:!1,title:"Configure Button Click Behavior",description:"VertiGIS Studio Mobile - Learn how to run an existing command or operation on a button press",source:"@site/docs/mobile/tutorial-configure-button-click.mdx",sourceDirName:"mobile",slug:"/mobile/tutorial-configure-button-click",permalink:"/docs/mobile/tutorial-configure-button-click",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/tutorial-configure-button-click.mdx",version:"current",frontMatter:{title:"Configure Button Click Behavior",description:"VertiGIS Studio Mobile - Learn how to run an existing command or operation on a button press"},sidebar:"mobile",previous:{title:"Commands and Operations",permalink:"/docs/mobile/configuration-commands-operations"},next:{title:"Change the Default Behavior of Components",permalink:"/docs/mobile/tutorial-change-default-behavior"}},g=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Add a Button to the Layout",id:"add-a-button-to-the-layout",children:[]},{value:"Link the Button to a Command in App Config",id:"link-the-button-to-a-command-in-app-config",children:[]},{value:"Pass Arguments to the Command",id:"pass-arguments-to-the-command",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],f={toc:g};function h({components:e,...t}){return(0,a.kt)("wrapper",(0,o.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This article will guide you through how to add a button to the layout and configure it to run and action through the app config."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"It's actually possible to configure the a button with a command in ",(0,a.kt)("a",{parentName:"p",href:"https://apps.geocortex.com/webviewer/designer/"},"VertiGIS Studio Mobile Designer"),". However, the point of this tutorial is to demonstrate the concept of configuring behaviors using the app config."))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)(u.default,{mdxType:"PrereqsLayoutConfigSnippet"}),(0,a.kt)("h2",{id:"add-a-button-to-the-layout"},"Add a Button to the Layout"),(0,a.kt)("p",null,"Let's create a a layout with two components; a map, and a button positioned on the map."),(0,a.kt)(r.Z,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"},{label:"UI",value:"ui"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"layout",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="App1/App1/layout-large.xml"',title:'"App1/App1/layout-large.xml"'},'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd">\n    <map>\n        <button slot="top-left" width="5" height="2" margin="2"/>\n    </map>\n</layout>\n\n'))),(0,a.kt)(s.Z,{value:"config",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="App1/App1/app.json"',title:'"App1/App1/app.json"'},'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["large"]\n        }\n    ]\n}\n'))),(0,a.kt)(s.Z,{value:"ui",mdxType:"TabItem"},(0,a.kt)("img",{src:(0,i.Z)("img/mobile-basic-button-on-map.png")}))),(0,a.kt)("h2",{id:"link-the-button-to-a-command-in-app-config"},"Link the Button to a Command in App Config"),(0,a.kt)("p",null,"Link the button to the layout to a ",(0,a.kt)("inlineCode",{parentName:"p"},"menu-item")," in app config, and configure it to run a basic command, ",(0,a.kt)("inlineCode",{parentName:"p"},"zoom-in"),"."),(0,a.kt)(r.Z,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"},{label:"UI",value:"ui"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"layout",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="app/layout-large.xml"',title:'"app/layout-large.xml"'},'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd">\n    <map>\n        // highlight-next-line\n        <button slot="top-left" config="button-config" margin="2"/>\n    </map>\n</layout>\n\n\n'))),(0,a.kt)(s.Z,{value:"config",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'},'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["mobile", "large"]\n        },\n        {\n            // highlight-next-line\n            "id": "button-config",\n            "iconId": "zoom-in",\n            "title": "Zoom In",\n            "action": "map.zoom-in",\n            "$type": "menu-item"\n        }\n    ]\n}\n'))),(0,a.kt)(s.Z,{value:"ui",mdxType:"TabItem"},(0,a.kt)("img",{src:(0,i.Z)("img/mobile-basic-button-with-command.png")}))),(0,a.kt)("h2",{id:"pass-arguments-to-the-command"},"Pass Arguments to the Command"),(0,a.kt)("p",null,"If the command you want to run takes arguments, you can pass them through the app config."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Check out the ",(0,a.kt)("a",{parentName:"p",href:"/docs/mobile/configuration-commands-operations#configuring-commands-and-operations"},"commands and operations reference")," for more info on passing arguments."))),(0,a.kt)(r.Z,{defaultValue:"config",values:[{label:"App Config",value:"config"},{label:"UI",value:"ui"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"config",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'},'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "id": "button-config",\n            "iconId": "info",\n            "title": "Alert",\n            "action": {\n                "name": "ui.alert",\n                // highlight-start\n                "arguments": {\n                    "message": "Message from config."\n                }\n                // highlight-end\n            },\n            "$type": "menu-item"\n        }\n    ]\n}\n'))),(0,a.kt)(s.Z,{value:"ui",mdxType:"TabItem"},(0,a.kt)("img",{src:(0,i.Z)("img/mobile-basic-button-alert.png")}))),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)(c.Z,{mdxType:"UseCaseContainer"},(0,a.kt)(l.Z,{title:"Commands and Operations",description:"Learn more about commands and operations",link:(0,i.Z)("docs/mobile/configuration-commands-operations"),mdxType:"UseCaseCard"}),(0,a.kt)(l.Z,{title:"Commands, Operations, and Events API",description:"Check out the available commands and operations",link:(0,i.Z)("docs/mobile/api-commands-operations-events"),mdxType:"UseCaseCard"}),(0,a.kt)(l.Z,{title:"Change Default Behavior with Commands and Operations",description:"Change built-in behavior or add new behavior using app config and layout",link:(0,i.Z)("docs/mobile/tutorial-change-default-behavior"),mdxType:"UseCaseCard"})))}h.isMDXComponent=!0},6010:(e,t,n)=>{"use strict";function o(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:()=>a})}}]);