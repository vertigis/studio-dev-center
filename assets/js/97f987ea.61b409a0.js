(globalThis.webpackChunkgeocortex_dev_center=globalThis.webpackChunkgeocortex_dev_center||[]).push([[6562],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,m=p["".concat(u,".").concat(d)]||p[d]||f[d]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6742:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(7294),o=r(3727),i=r(2263),a=r(3919),c=r(412);const u=(0,n.createContext)({collectLink:()=>{}});var l=r(4996),s=r(8780);const f=function({isNavLink:e,to:t,href:r,activeClassName:f,isActive:p,"data-noBrokenLinkCheck":d,autoAddBaseUrl:m=!0,...w}){var b;const{siteConfig:{trailingSlash:h}}=(0,i.Z)(),{withBaseUrl:y}=(0,l.C)(),v=(0,n.useContext)(u),g=t||r,k=(0,a.Z)(g),O=null==g?void 0:g.replace("pathname://","");let P=void 0!==O?(T=O,m&&(e=>e.startsWith("/"))(T)?y(T):T):void 0;var T;P&&k&&(P=(0,s.applyTrailingSlash)(P,h));const j=(0,n.useRef)(!1),x=e?o.OL:o.rU,C=c.Z.canUseIntersectionObserver;let E;(0,n.useEffect)((()=>(!C&&k&&null!=P&&window.docusaurus.prefetch(P),()=>{C&&E&&E.disconnect()})),[P,C,k]);const S=null!==(b=null==P?void 0:P.startsWith("#"))&&void 0!==b&&b,_=!P||!k||S;return P&&k&&!S&&!d&&v.collectLink(P),_?n.createElement("a",{href:P,...g&&!k&&{target:"_blank",rel:"noopener noreferrer"},...w}):n.createElement(x,{...w,onMouseEnter:()=>{j.current||null==P||(window.docusaurus.preload(P),j.current=!0)},innerRef:e=>{var t,r;C&&e&&k&&(t=e,r=()=>{null!=P&&window.docusaurus.prefetch(P)},E=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t),E.disconnect(),r())}))})),E.observe(t))},to:P||"",...e&&{isActive:p,activeClassName:f}})}},3919:(e,t,r)=>{"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:()=>n,Z:()=>o})},4996:(e,t,r)=>{"use strict";r.d(t,{C:()=>i,Z:()=>a});var n=r(2263),o=r(3919);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(n)return t+r;const a=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+a:a}(t,e,r,n)}}function a(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[r]=e.split(/[#?]/),n="/"===r?"/":t?(o=r).endsWith("/")?o:`${o}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(r);var o;return e.replace(r,n)}},8780:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=r(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(o).default}});var i=r(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(i).default}})},9964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},9005:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>a,contentTitle:()=>c,metadata:()=>u,toc:()=>l,default:()=>f});var n=r(2122),o=(r(7294),r(3905)),i=r(6742);const a={title:"New Workflow Form Element API",author:"Ian Schmitz",authorTitle:"Software Architect",authorURL:"https://github.com/ianschmitz",authorImageURL:"https://github.com/ianschmitz.png",tags:["workflow"]},c=void 0,u={permalink:"/blog/2021/03/22/new-workflow-element-api",source:"@site/blog/2021-03-22-new-workflow-element-api.mdx",title:"New Workflow Form Element API",description:"Workflow 5.21 includes a new TypeScript form element API that you can use for building custom form elements using the Geocortex Workflow TypeScript SDK. The existing patterns and APIs you've been using for years to build custom form elements will continue to work, but we encourage you to try the new API when building new form elements.",date:"2021-03-22T00:00:00.000Z",formattedDate:"March 22, 2021",tags:[{label:"workflow",permalink:"/blog/tags/workflow"}],readingTime:9.035,truncated:!0},l=[],s={toc:l};function f({components:e,...t}){return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Workflow ",(0,o.kt)("inlineCode",{parentName:"p"},"5.21")," includes a new TypeScript form element API that you can use for building custom form elements using the ",(0,o.kt)(i.Z,{to:"/docs/workflow/sdk-web-overview",mdxType:"Link"},"Geocortex Workflow TypeScript SDK"),". The existing patterns and APIs you've been using for years to build custom form elements will continue to work, but we encourage you to try the new API when building new form elements."))}f.isMDXComponent=!0}}]);