(globalThis.webpackChunkgeocortex_dev_center=globalThis.webpackChunkgeocortex_dev_center||[]).push([[8763,1188,2006,826],{3905:(e,t,o)=>{"use strict";o.d(t,{Zo:()=>p,kt:()=>u});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(o),u=r,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return o?n.createElement(h,i(i({ref:t},p),{},{components:o})):n.createElement(h,i({ref:t},p))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},6742:(e,t,o)=>{"use strict";o.d(t,{Z:()=>d});var n=o(7294),r=o(3727),a=o(2263),i=o(3919),s=o(412);const l=(0,n.createContext)({collectLink:()=>{}});var c=o(4996),p=o(8780);const d=function({isNavLink:e,to:t,href:o,activeClassName:d,isActive:m,"data-noBrokenLinkCheck":u,autoAddBaseUrl:h=!0,...v}){var f;const{siteConfig:{trailingSlash:w}}=(0,a.Z)(),{withBaseUrl:k}=(0,c.C)(),g=(0,n.useContext)(l),y=t||o,b=(0,i.Z)(y),N=null==y?void 0:y.replace("pathname://","");let x=void 0!==N?(C=N,h&&(e=>e.startsWith("/"))(C)?k(C):C):void 0;var C;x&&b&&(x=(0,p.applyTrailingSlash)(x,w));const M=(0,n.useRef)(!1),A=e?r.OL:r.rU,T=s.Z.canUseIntersectionObserver;let O;(0,n.useEffect)((()=>(!T&&b&&null!=x&&window.docusaurus.prefetch(x),()=>{T&&O&&O.disconnect()})),[x,T,b]);const D=null!==(f=null==x?void 0:x.startsWith("#"))&&void 0!==f&&f,I=!x||!b||D;return x&&b&&!D&&!u&&g.collectLink(x),I?n.createElement("a",{href:x,...y&&!b&&{target:"_blank",rel:"noopener noreferrer"},...v}):n.createElement(A,{...v,onMouseEnter:()=>{M.current||null==x||(window.docusaurus.preload(x),M.current=!0)},innerRef:e=>{var t,o;T&&e&&b&&(t=e,o=()=>{null!=x&&window.docusaurus.prefetch(x)},O=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(O.unobserve(t),O.disconnect(),o())}))})),O.observe(t))},to:x||"",...e&&{isActive:m,activeClassName:d}})}},3919:(e,t,o)=>{"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}o.d(t,{b:()=>n,Z:()=>r})},4996:(e,t,o)=>{"use strict";o.d(t,{C:()=>a,Z:()=>i});var n=o(2263),r=o(3919);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(o,n)=>function(e,t,o,{forcePrependBaseUrl:n=!1,absolute:a=!1}={}){if(!o)return o;if(o.startsWith("#"))return o;if((0,r.b)(o))return o;if(n)return t+o;const i=o.startsWith(t)?o:t+o.replace(/^\//,"");return a?e+i:i}(t,e,o,n)}}function i(e,t={}){const{withBaseUrl:o}=a();return o(e,t)}},8215:(e,t,o)=>{"use strict";o.d(t,{Z:()=>r});var n=o(7294);const r=function({children:e,hidden:t,className:o}){return n.createElement("div",{role:"tabpanel",hidden:t,className:o},e)}},1395:(e,t,o)=>{"use strict";o.d(t,{Z:()=>p});var n=o(7294),r=o(944),a=o(6010);const i="tabItem_1uMI",s="tabItemActive_2DSg";const l=37,c=39;const p=function(e){const{lazy:t,block:o,defaultValue:p,values:d,groupId:m,className:u}=e,{tabGroupChoices:h,setTabGroupChoices:v}=(0,r.Z)(),[f,w]=(0,n.useState)(p),k=n.Children.toArray(e.children),g=[];if(null!=m){const e=h[m];null!=e&&e!==f&&d.some((t=>t.value===e))&&w(e)}const y=e=>{const t=e.currentTarget,o=g.indexOf(t),n=d[o].value;w(n),null!=m&&(v(m,n),setTimeout((()=>{(function(e){const{top:t,left:o,bottom:n,right:r}=e.getBoundingClientRect(),{innerHeight:a,innerWidth:i}=window;return t>=0&&r<=i&&n<=a&&o>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((()=>t.classList.remove(s)),2e3))}),150))},b=e=>{var t;let o;switch(e.keyCode){case c:{const t=g.indexOf(e.target)+1;o=g[t]||g[0];break}case l:{const t=g.indexOf(e.target)-1;o=g[t]||g[g.length-1];break}}null==(t=o)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":o},u)},d.map((({value:e,label:t})=>n.createElement("li",{role:"tab",tabIndex:f===e?0:-1,"aria-selected":f===e,className:(0,a.Z)("tabs__item",i,{"tabs__item--active":f===e}),key:e,ref:e=>g.push(e),onKeyDown:b,onFocus:y,onClick:y},t)))),t?(0,n.cloneElement)(k.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}},9443:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n=(0,o(7294).createContext)(void 0)},944:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});var n=o(7294),r=o(9443);const a=function(){const e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[o]=e.split(/[#?]/),n="/"===o?"/":t?(r=o).endsWith("/")?r:`${r}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(o);var r;return e.replace(o,n)}},8780:function(e,t,o){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=o(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(r).default}});var a=o(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(a).default}})},9964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1962:(e,t,o)=>{"use strict";o.d(t,{Z:()=>s});var n=o(6742),r=o(7294),a=o(6010);const i="root_2PFE";function s({title:e,description:t,link:o}){return r.createElement("div",{className:(0,a.Z)("card-demo",i)},r.createElement("div",{className:"card"},r.createElement("div",{className:"card__header"},r.createElement("h3",null,e)),r.createElement("div",{className:"card__body"},r.createElement("p",null,t)),r.createElement("div",{className:"card__footer"},r.createElement(n.Z,{className:"button button--secondary button--block",to:o},"Get Started"))))}},7763:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});var n=o(7294);const r="root_NqT0";function a({children:e}){return n.createElement("div",{className:r},e)}},9422:(e,t,o)=>{"use strict";o.r(t),o.d(t,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>s,toc:()=>l,default:()=>p});var n=o(2122),r=(o(7294),o(3905));const a={},i=void 0,s={unversionedId:"workflow/snippets/prereqs-mobile",id:"workflow/snippets/prereqs-mobile",isDocsHomePage:!1,title:"prereqs-mobile",description:"Extending Geocortex Workflow for Mobile requires development and deployment of a custom Geocortex Mobile Application using the Geocortex Mobile SDK",source:"@site/docs/workflow/snippets/prereqs-mobile.mdx",sourceDirName:"workflow/snippets",slug:"/workflow/snippets/prereqs-mobile",permalink:"/docs/workflow/snippets/prereqs-mobile",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/snippets/prereqs-mobile.mdx",version:"current",frontMatter:{}},l=[],c={toc:l};function p({components:e,...t}){return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Extending Geocortex Workflow for Mobile requires development and deployment of a custom Geocortex Mobile Application using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-overview"},"Geocortex Mobile SDK")))),(0,r.kt)("p",null,"Follow the instructions in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-mobile-overview"},"Geocortex Mobile SDK")," page to set up the environment for extending Workflow for Geocortex Mobile."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A working knowledge of ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-ca/dotnet/csharp/"},"C#")," and ",(0,r.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/platform/dotnet-standard"},".NET Standard")," is recommended before extending Workflow for Geocortex Mobile"))))}p.isMDXComponent=!0},9937:(e,t,o)=>{"use strict";o.r(t),o.d(t,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>s,toc:()=>l,default:()=>p});var n=o(2122),r=(o(7294),o(3905));const a={},i=void 0,s={unversionedId:"workflow/snippets/prereqs-server",id:"workflow/snippets/prereqs-server",isDocsHomePage:!1,title:"prereqs-server",description:"Extending Geocortex Workflow with server side components requires an on-premises installation of Geocortex Workflow. You will need administrative access to this installation.",source:"@site/docs/workflow/snippets/prereqs-server.mdx",sourceDirName:"workflow/snippets",slug:"/workflow/snippets/prereqs-server",permalink:"/docs/workflow/snippets/prereqs-server",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/snippets/prereqs-server.mdx",version:"current",frontMatter:{}},l=[],c={toc:l};function p({components:e,...t}){return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Extending Geocortex Workflow with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/server-workflows.htm%3FTocPath%3DServer%2520Workflows%7C_____0"},"server side components")," requires an ",(0,r.kt)("a",{parentName:"p",href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/installation.htm"},"on-premises installation of Geocortex Workflow"),". You will need administrative access to this installation."))),(0,r.kt)("p",null,"Follow the instructions in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-server-overview"},"Geocortex Workflow Server")," page to set up your development environment and Geocortex Workflow Server extension project."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A working knowledge of ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-ca/dotnet/csharp/"},"C#")," and ",(0,r.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/platform/dotnet-standard"},".NET Standard")," is recommended before extending Geocortex Workflow Server"))))}p.isMDXComponent=!0},8822:(e,t,o)=>{"use strict";o.r(t),o.d(t,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>s,toc:()=>l,default:()=>p});var n=o(2122),r=(o(7294),o(3905));const a={},i=void 0,s={unversionedId:"workflow/snippets/prereqs-web",id:"workflow/snippets/prereqs-web",isDocsHomePage:!1,title:"prereqs-web",description:"Follow the instructions in the Web Applications SDK page to set up your development environment.",source:"@site/docs/workflow/snippets/prereqs-web.mdx",sourceDirName:"workflow/snippets",slug:"/workflow/snippets/prereqs-web",permalink:"/docs/workflow/snippets/prereqs-web",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/snippets/prereqs-web.mdx",version:"current",frontMatter:{}},l=[],c={toc:l};function p({components:e,...t}){return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Follow the instructions in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-web-overview"},"Web Applications SDK")," page to set up your development environment."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A working knowledge of ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," is recommended before extending Workflow for web-based hosts."))))}p.isMDXComponent=!0},2937:(e,t,o)=>{"use strict";o.r(t),o.d(t,{frontMatter:()=>c,contentTitle:()=>p,metadata:()=>d,toc:()=>m,default:()=>h});var n=o(2122),r=(o(7294),o(3905)),a=o(4996),i=(o(1395),o(8215),o(8822)),s=(o(9422),o(9937),o(7763)),l=o(1962);const c={title:"Implement an Activity that Calculates a Logarithm",description:"Geocortex Workflow - Implement a custom activity for web applications that calculates the logarithm of a number"},p=void 0,d={unversionedId:"workflow/tutorial-web-calculate-logarithm-activity",id:"workflow/tutorial-web-calculate-logarithm-activity",isDocsHomePage:!1,title:"Implement an Activity that Calculates a Logarithm",description:"Geocortex Workflow - Implement a custom activity for web applications that calculates the logarithm of a number",source:"@site/docs/workflow/tutorial-web-calculate-logarithm-activity.mdx",sourceDirName:"workflow",slug:"/workflow/tutorial-web-calculate-logarithm-activity",permalink:"/docs/workflow/tutorial-web-calculate-logarithm-activity",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/tutorial-web-calculate-logarithm-activity.mdx",version:"current",frontMatter:{title:"Implement an Activity that Calculates a Logarithm",description:"Geocortex Workflow - Implement a custom activity for web applications that calculates the logarithm of a number"},sidebar:"workflow",previous:{title:"Reference a Third Party Library",permalink:"/docs/workflow/sdk-web-reference-third-party-library"},next:{title:"Add a Layer to a Map with an Activity",permalink:"/docs/workflow/tutorial-web-add-layer-to-map"}},m=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Set up Activity Skeleton",id:"set-up-activity-skeleton",children:[]},{value:"Implement the Activity",id:"implement-the-activity",children:[]},{value:"Deploy the Activity",id:"deploy-the-activity",children:[]},{value:"Test the Activity",id:"test-the-activity",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],u={toc:m};function h({components:e,...t}){return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Implementing a custom ",(0,r.kt)("a",{parentName:"p",href:"/docs/workflow/key-concepts#activities"},"activity")," allows you to build a reusable, completely custom behavior to augment the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activity-reference.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____0"},"existing activities")," that come with Geocortex Workflow."),(0,r.kt)("p",null,"In this article, you will learn how to create a custom activity that calculates the logarithm of a number with a given base."),(0,r.kt)("img",{src:(0,a.Z)("img/workflow-web-calculate-logarithm-activity.png")}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)(i.default,{mdxType:"WebPrereqs"}),(0,r.kt)("h2",{id:"set-up-activity-skeleton"},"Set up Activity Skeleton"),(0,r.kt)("p",null,"To create a new activity:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the Workflow activity SDK in Visual Studio Code"),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run generate")," in the terminal."),(0,r.kt)("li",{parentName:"ol"},"When prompted enter the name of the activity you would like to create and press ",(0,r.kt)("inlineCode",{parentName:"li"},"Enter"),". For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"CustomActivity"),"."),(0,r.kt)("li",{parentName:"ol"},"Open the newly created ",(0,r.kt)("inlineCode",{parentName:"li"},"src/activities/CustomActivity.ts")," file.")),(0,r.kt)("h2",{id:"implement-the-activity"},"Implement the Activity"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run generate")," script creates a custom activity with some dummy inputs and outputs. By changing the inputs, outputs, execute logic, and tags, you can create your own custom activity that has an easy to use interface in the Geocortex Workflow Designer."),(0,r.kt)("p",null,"First, let's change the inputs and outputs to properties that make sense for calculating a logarithm."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-web-activity-block-tags"},"Block tags")," are used to provide descriptions for inputs and outputs in the Geocortex Workflow Designer."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/activities/CustomActivity.ts"',title:'"src/activities/CustomActivity.ts"'},'import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";\n\n// highlight-start\nexport interface CalculateLogInputs {\n    /**\n     * @description The base of the logarithm. Defaults to the natural log.\n     */\n    base?: number;\n\n    /**\n     * @description The number to calculate the logarithm for.\n     * @required\n     */\n    value: number;\n}\n// highlight-end\n\n// highlight-start\nexport interface CalculateLogOutputs {\n    /**\n     * @description The logarithm output.\n     */\n    result: number;\n}\n// highlight-end\n\n/**\n * @category Custom Activities\n * @description Calculates the logarithm of a number with an optional base.\n */\nexport class CalculateLog implements IActivityHandler {\n    // highlight-next-line\n    async execute(\n        inputs: CalculateLogInputs\n    ): Promise<CalculateLogOutputs> {\n        return { result: 0 };\n    }\n}\n')),(0,r.kt)("p",null,"Next, modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"execute")," method of the activity to calculate the logarithm of a number given an optional base"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/activities/CustomActivity.cs"',title:'"src/activities/CustomActivity.cs"'},'import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";\n\nexport interface CalculateLogInputs {\n    /**\n     * @description The base of the logarithm. Defaults to the natural log.\n     */\n    base?: number;\n\n    /**\n     * @description The number to calculate the logarithm for.\n     * @required\n     */\n    value: number;\n}\n\nexport interface CalculateLogOutputs {\n    /**\n     * @description The logarithm output.\n     */\n    result: number;\n}\n\n/**\n * @category Custom Activities\n * @description An activity that calculates the log of a number with the given base.\n */\nexport class CalculateLog implements IActivityHandler {\n    async execute(\n        inputs: CalculateLogInputs\n    ): Promise<CalculateLogOutputs> {\n        // highlight-start\n        return {\n            result:\n                Math.log(inputs.value) /\n                (inputs.base !== undefined\n                    ? Math.log(inputs.base)\n                    : 1),\n        };\n        // highlight-end\n    }\n}\n')),(0,r.kt)("h2",{id:"deploy-the-activity"},"Deploy the Activity"),(0,r.kt)("p",null,"Follow the instructions to ",(0,r.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-web-overview#deployment"},"build and deploy the activity pack"),"."),(0,r.kt)("h2",{id:"test-the-activity"},"Test the Activity"),(0,r.kt)("p",null,"Once your activity pack is hosted and registered, your custom activity should appear in the activity toolbox in Geocortex Workflow Designer alongside the built-in activities, and can be used in the graphical interface like any other activity."),(0,r.kt)("p",null,"Now you can build a workflow that uses your new custom activity!"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",null,"You can",(0,r.kt)("a",{href:(0,a.Z)("workflows/web-calculate-logarithm-activity.json"),download:"calculate-logarithm-workflow.json",target:"_blank"}," ","download this demo workflow"," "),"that uses the custom activity and then",(0,r.kt)("a",{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/import-export-workflows.htm",target:"_blank"}," ","import it into the Geocortex Workflow Designer."," "),"You will have to"," ",(0,r.kt)("a",{href:(0,a.Z)("docs/workflow/sdk-web-overview#host-the-activity-pack")}," ","deploy the custom activity and form element")," ","for it to function. This workflow assumes you are hosting the activity pack with the dev server on https://localhost:57999/."))),(0,r.kt)("img",{src:(0,a.Z)("img/workflow-web-calculate-logarithm-activity.png")}),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"Now you know how to build a basic Workflow activity for web applications. Next, you can learn how to access app properties in an activity, build custom form elements, use the ArcGIS API for JavaScript in your activities and more."),(0,r.kt)(s.Z,{mdxType:"UseCaseContainer"},(0,r.kt)(l.Z,{title:"Implement a Custom Form Element",description:"Implement a custom form element for applications like Geocortex Web",link:(0,a.Z)("docs/workflow/tutorial-web-implement-star-rating-form-element"),mdxType:"UseCaseCard"}),(0,r.kt)(l.Z,{title:"Add a Layer to the Map with a Custom Activity",description:"Access application properties like the map in custom activities for Web Applications",link:(0,a.Z)("docs/workflow/tutorial-web-add-layer-to-map"),mdxType:"UseCaseCard"}),(0,r.kt)(l.Z,{title:"Use the ArcGIS API for JavaScript in an activity.",description:"Use the ArcGIS API for JavaScript in an activity or form element",link:(0,a.Z)("docs/workflow/sdk-web-integrating-the-arcgis-api"),mdxType:"UseCaseCard"}),(0,r.kt)(l.Z,{title:"Reference other Third Party Libraries",description:"Reference other third party libraries in your activities and form elements",link:(0,a.Z)("docs/workflow/sdk-web-reference-third-party-library"),mdxType:"UseCaseCard"})))}h.isMDXComponent=!0},6010:(e,t,o)=>{"use strict";function n(e){var t,o,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=n(e[t]))&&(r&&(r+=" "),r+=o);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,o=0,r="";o<arguments.length;)(e=arguments[o++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}o.d(t,{Z:()=>r})}}]);