(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[9671,5272,5897],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6742:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var a=n(7294),o=n(3727),i=n(2263),r=n(3919),s=n(412);const l=(0,a.createContext)({collectLink:()=>{}});var c=n(4996),u=n(8780);const p=function({isNavLink:e,to:t,href:n,activeClassName:p,isActive:d,"data-noBrokenLinkCheck":m,autoAddBaseUrl:h=!0,...g}){var f;const{siteConfig:{trailingSlash:v}}=(0,i.Z)(),{withBaseUrl:b}=(0,c.C)(),y=(0,a.useContext)(l),k=t||n,w=(0,r.Z)(k),x=null==k?void 0:k.replace("pathname://","");let N=void 0!==x?(S=x,h&&(e=>e.startsWith("/"))(S)?b(S):S):void 0;var S;N&&w&&(N=(0,u.applyTrailingSlash)(N,v));const C=(0,a.useRef)(!1),T=e?o.OL:o.rU,M=s.Z.canUseIntersectionObserver;let _;(0,a.useEffect)((()=>(!M&&w&&null!=N&&window.docusaurus.prefetch(N),()=>{M&&_&&_.disconnect()})),[N,M,w]);const O=null!==(f=null==N?void 0:N.startsWith("#"))&&void 0!==f&&f,j=!N||!w||O;return N&&w&&!O&&!m&&y.collectLink(N),j?a.createElement("a",{href:N,...k&&!w&&{target:"_blank",rel:"noopener noreferrer"},...g}):a.createElement(T,{...g,onMouseEnter:()=>{C.current||null==N||(window.docusaurus.preload(N),C.current=!0)},innerRef:e=>{var t,n;M&&e&&w&&(t=e,n=()=>{null!=N&&window.docusaurus.prefetch(N)},_=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(_.unobserve(t),_.disconnect(),n())}))})),_.observe(t))},to:N||"",...e&&{isActive:d,activeClassName:p}})}},3919:(e,t,n)=>{"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,{b:()=>a,Z:()=>o})},4996:(e,t,n)=>{"use strict";n.d(t,{C:()=>i,Z:()=>r});var a=n(2263),o=n(3919);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(a)return t+n;const r=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+r:r}(t,e,n,a)}}function r(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},8215:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(7294);const o=function({children:e,hidden:t,className:n}){return a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},1395:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var a=n(7294),o=n(944),i=n(6010);const r="tabItem_1uMI",s="tabItemActive_2DSg";const l=37,c=39;const u=function(e){const{lazy:t,block:n,defaultValue:u,values:p,groupId:d,className:m}=e,{tabGroupChoices:h,setTabGroupChoices:g}=(0,o.Z)(),[f,v]=(0,a.useState)(u),b=a.Children.toArray(e.children),y=[];if(null!=d){const e=h[d];null!=e&&e!==f&&p.some((t=>t.value===e))&&v(e)}const k=e=>{const t=e.currentTarget,n=y.indexOf(t),a=p[n].value;v(a),null!=d&&(g(d,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:o}=e.getBoundingClientRect(),{innerHeight:i,innerWidth:r}=window;return t>=0&&o<=r&&a<=i&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((()=>t.classList.remove(s)),2e3))}),150))},w=e=>{var t;let n;switch(e.keyCode){case c:{const t=y.indexOf(e.target)+1;n=y[t]||y[0];break}case l:{const t=y.indexOf(e.target)-1;n=y[t]||y[y.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},p.map((({value:e,label:t})=>a.createElement("li",{role:"tab",tabIndex:f===e?0:-1,"aria-selected":f===e,className:(0,i.Z)("tabs__item",r,{"tabs__item--active":f===e}),key:e,ref:e=>y.push(e),onKeyDown:w,onFocus:k,onClick:k},t)))),t?(0,a.cloneElement)(b.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}},9443:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(7294),o=n(9443);const i=function(){const e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),a="/"===n?"/":t?(o=n).endsWith("/")?o:`${o}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(n);var o;return e.replace(n,a)}},8780:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(o).default}});var i=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(i).default}})},9964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1962:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(6742),o=n(7294),i=n(6010);const r="root_2PFE";function s({title:e,description:t,link:n}){return o.createElement("div",{className:(0,i.Z)("card-demo",r)},o.createElement("div",{className:"card"},o.createElement("div",{className:"card__header"},o.createElement("h3",null,e)),o.createElement("div",{className:"card__body"},o.createElement("p",null,t)),o.createElement("div",{className:"card__footer"},o.createElement(a.Z,{className:"button button--secondary button--block",to:n},"Get Started"))))}},7763:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(7294);const o="root_NqT0";function i({children:e}){return a.createElement("div",{className:o},e)}},7476:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>r,contentTitle:()=>s,metadata:()=>l,toc:()=>c,default:()=>p});var a=n(2122),o=(n(7294),n(3905)),i=n(2457);const r={},s=void 0,l={unversionedId:"mobile/snippets/prereqs-layout-config-editing",id:"mobile/snippets/prereqs-layout-config-editing",isDocsHomePage:!1,title:"prereqs-layout-config-editing",description:"Follow along by setting up the VertiGIS Studio Mobile SDK and editing the minimal layout and app config provided.",source:"@site/docs/mobile/snippets/prereqs-layout-config-editing.mdx",sourceDirName:"mobile/snippets",slug:"/mobile/snippets/prereqs-layout-config-editing",permalink:"/docs/mobile/snippets/prereqs-layout-config-editing",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/snippets/prereqs-layout-config-editing.mdx",version:"current",frontMatter:{}},c=[],u={toc:c};function p({components:e,...t}){return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Follow along by setting up the ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-overview"},"VertiGIS Studio Mobile SDK")," and editing the minimal layout and app config provided."),(0,o.kt)(i.default,{mdxType:"TweakLayoutConfigSnippet"}))}p.isMDXComponent=!0},2457:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>r,metadata:()=>s,toc:()=>l,default:()=>u});var a=n(2122),o=(n(7294),n(3905));const i={},r=void 0,s={unversionedId:"mobile/snippets/tweak-layout-config",id:"mobile/snippets/tweak-layout-config",isDocsHomePage:!1,title:"tweak-layout-config",description:"If you just need to make a small change to the layout and app config of an existing application, you can download the config and layout files for the application, tweak them, and then re-upload them.",source:"@site/docs/mobile/snippets/tweak-layout-config.mdx",sourceDirName:"mobile/snippets",slug:"/mobile/snippets/tweak-layout-config",permalink:"/docs/mobile/snippets/tweak-layout-config",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/snippets/tweak-layout-config.mdx",version:"current",frontMatter:{}},l=[],c={toc:l};function u({components:e,...t}){return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you just need to make a small change to the layout and app config of an existing application, you can ",(0,o.kt)("a",{parentName:"p",href:"https://docs.vertigisstudio.com/mobileviewer/latest/admin-help/Default.htm#gmv/designer/configuration-Options.htm#Download-app-config%3FTocPath%3DConfiguration%7CConfiguration%2520Options%7C_____3"},"download the config and layout files for the application"),", tweak them, and then re-upload them."))))}u.isMDXComponent=!0},6663:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>u,metadata:()=>p,toc:()=>d,default:()=>h});var a=n(2122),o=(n(7294),n(3905)),i=n(1395),r=n(8215),s=n(4996),l=(n(7763),n(1962),n(7476));const c={title:"Customize the Theme",description:"VertiGIS Studio Mobile - Learn how to customize the look and feel of your VertiGIS Studio Mobile application"},u=void 0,p={unversionedId:"mobile/tutorial-customize-application-theme",id:"mobile/tutorial-customize-application-theme",isDocsHomePage:!1,title:"Customize the Theme",description:"VertiGIS Studio Mobile - Learn how to customize the look and feel of your VertiGIS Studio Mobile application",source:"@site/docs/mobile/tutorial-customize-application-theme.mdx",sourceDirName:"mobile",slug:"/mobile/tutorial-customize-application-theme",permalink:"/docs/mobile/tutorial-customize-application-theme",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/tutorial-customize-application-theme.mdx",version:"current",frontMatter:{title:"Customize the Theme",description:"VertiGIS Studio Mobile - Learn how to customize the look and feel of your VertiGIS Studio Mobile application"},sidebar:"mobile",previous:{title:"Change the Default Behavior of Components",permalink:"/docs/mobile/tutorial-change-default-behavior"},next:{title:"Add a Medium Layout",permalink:"/docs/mobile/tutorial-add-medium-layout"}},d=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Create a Basic App",id:"create-a-basic-app",children:[]},{value:"Add Configuration for the Branding Service",id:"add-configuration-for-the-branding-service",children:[]},{value:"Add a New Theme",id:"add-a-new-theme",children:[]},{value:"Relevant SDK Samples",id:"relevant-sdk-samples",children:[]}],m={toc:d};function h({components:e,...t}){return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"VertiGIS Studio Mobile's appearance is built around two concepts: theme and ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/configuration-layout-getting-started"},"layout"),". The theme controls the color scheme of the app, while the layout controls the organization of content."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The theme can be partially configured by using the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.vertigisstudio.com/webviewer/latest/admin-help/Default.htm#gwv/component-settings.htm#branding-settings%3FTocPath%3DConfiguration%7CComponent%2520Settings%7C_____4"},"VertiGIS Studio Mobile Designer"),"."))),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)(l.default,{mdxType:"PrereqsLayoutConfigSnippet"}),(0,o.kt)("h2",{id:"create-a-basic-app"},"Create a Basic App"),(0,o.kt)("p",null,"Let's create a basic application with layout and config that we can theme."),(0,o.kt)(i.Z,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"config",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'},'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["mobile", "large"]\n        },\n        {\n            "$type": "map-extension",\n            "id": "default",\n            "onClick": [\n                "tasks.identify",\n                "results.display",\n                "map.zoom-to-features"\n            ],\n            "webMap": "0ba877a4185448cb832af9a661031e31"\n        },\n        {\n            "$type": "feature-details",\n            "id": "feature-details",\n            "onFeatureShow": "highlights.add-focus",\n            "onFeatureHide": "highlights.remove-focus"\n        },\n        {\n            "$type": "results",\n            "id": "results",\n            "onFeatureShow": [\n                "highlights.add",\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "userSet": true\n                    }\n                }\n            ],\n            "onFeatureRemove": "highlights.remove",\n            "onAllFeaturesRemoved": [\n                "panel.close-host-panel",\n                "search.clear",\n                "results.clear"\n            ],\n            "onFeatureClick": [\n                "results.display-details",\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "snapPosition": "middle"\n                    }\n                },\n                "map.zoom-to-features",\n                "highlights.pulse"\n            ]\n        }\n    ]\n}\n'))),(0,o.kt)(r.Z,{value:"layout",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="app/layout-large.xml"',title:'"app/layout-large.xml"'},'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd">\n    <gxm:taskbar id="taskbar" orientation="vertical">\n        <map config="default" slot="main"/>\n        <panel>\n            <results-list config="results" />\n            <feature-details config="feature-details"/>\n        </panel>\n    </gxm:taskbar>\n</layout>\n\n')))),(0,o.kt)("h2",{id:"add-configuration-for-the-branding-service"},"Add Configuration for the Branding Service"),(0,o.kt)("p",null,"Next, we are going to add an app item to configure the Branding Service, which ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/configuration-theme"},"manages application theming"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'},'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["mobile", "large"]\n        },\n        // highlight-start\n        {\n            "$type": "branding",\n            "id": "branding"\n        },\n        // highlight-end\n        {\n            "$type": "map-extension",\n            "id": "default",\n            "onClick": [\n                "tasks.identify",\n                "results.display",\n                "map.zoom-to-features"\n            ],\n            "webMap": "0ba877a4185448cb832af9a661031e31"\n        },\n        {\n            "$type": "feature-details",\n            "id": "feature-details",\n            "onFeatureShow": "highlights.add-focus",\n            "onFeatureHide": "highlights.remove-focus"\n        },\n        {\n            "$type": "results",\n            "id": "results",\n            "onFeatureShow": [\n                "highlights.add",\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "userSet": true\n                    }\n                }\n            ],\n            "onFeatureRemove": "highlights.remove",\n            "onAllFeaturesRemoved": [\n                "panel.close-host-panel",\n                "search.clear",\n                "results.clear"\n            ],\n            "onFeatureClick": [\n                "results.display-details",\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "snapPosition": "middle"\n                    }\n                },\n                "map.zoom-to-features",\n                "highlights.pulse"\n            ]\n        }\n    ]\n}\n')),(0,o.kt)("h2",{id:"add-a-new-theme"},"Add a New Theme"),(0,o.kt)("p",null,"The branding service can be configured with a list of themes. Let's configure our branding service with a new theme with that has a custom background color."),(0,o.kt)("p",null,"You can customize the theme by changing any of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/configuration-theme#theme-color-reference"},"built-in color keys")," used for themes."),(0,o.kt)(i.Z,{defaultValue:"config",values:[{label:"App Config",value:"config"},{label:"UI",value:"ui"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"config",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'},'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["mobile", "large"]\n        },\n        {\n            "$type": "branding",\n            "id": "branding",\n            // highlight-start\n            "activeTheme": "custom-theme",\n            "themes": [\n                {\n                    "id": "custom-theme",\n                    "colors": {\n                        "primaryBackground": [50, 153, 168, 255]\n                    }\n                }\n            ]\n            // highlight-end\n        },\n        {\n            "$type": "map-extension",\n            "id": "default",\n            "onClick": [\n                "tasks.identify",\n                "results.display",\n                "map.zoom-to-features"\n            ],\n            "webMap": "0ba877a4185448cb832af9a661031e31"\n        },\n        {\n            "$type": "feature-details",\n            "id": "feature-details",\n            "onFeatureShow": "highlights.add-focus",\n            "onFeatureHide": "highlights.remove-focus"\n        },\n        {\n            "$type": "results",\n            "id": "results",\n            "onFeatureShow": [\n                "highlights.add",\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "userSet": true\n                    }\n                }\n            ],\n            "onFeatureRemove": "highlights.remove",\n            "onAllFeaturesRemoved": [\n                "panel.close-host-panel",\n                "search.clear",\n                "results.clear"\n            ],\n            "onFeatureClick": [\n                "results.display-details",\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "snapPosition": "middle"\n                    }\n                },\n                "map.zoom-to-features",\n                "highlights.pulse"\n            ]\n        }\n    ]\n}\n'))),(0,o.kt)(r.Z,{value:"ui",mdxType:"TabItem"},(0,o.kt)("img",{src:(0,s.Z)("img/mobile-customize-theme-blue.png")}))),(0,o.kt)("h2",{id:"relevant-sdk-samples"},"Relevant SDK Samples"),(0,o.kt)("p",null,"The VertiGIS Studio Mobile SDK Samples has an example of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/AppConfiguration/Theme"},"changing the theme through configuration"),"."))}h.isMDXComponent=!0},6010:(e,t,n)=>{"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:()=>o})}}]);