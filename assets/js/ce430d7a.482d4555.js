"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[2705],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6742:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(7294),o=r(3727),i=r(2263),a=r(3919),s=r(412);const c=(0,n.createContext)({collectLink:()=>{}});var l=r(4996),u=r(8780);const d=function({isNavLink:e,to:t,href:r,activeClassName:d,isActive:p,"data-noBrokenLinkCheck":m,autoAddBaseUrl:f=!0,...b}){var v;const{siteConfig:{trailingSlash:h}}=(0,i.Z)(),{withBaseUrl:y}=(0,l.C)(),g=(0,n.useContext)(c),S=t||r,k=(0,a.Z)(S),w=null==S?void 0:S.replace("pathname://","");let O=void 0!==w?(j=w,f&&(e=>e.startsWith("/"))(j)?y(j):j):void 0;var j;O&&k&&(O=(0,u.applyTrailingSlash)(O,h));const E=(0,n.useRef)(!1),_=e?o.OL:o.rU,x=s.Z.canUseIntersectionObserver;let C;(0,n.useEffect)((()=>(!x&&k&&null!=O&&window.docusaurus.prefetch(O),()=>{x&&C&&C.disconnect()})),[O,x,k]);const P=null!==(v=null==O?void 0:O.startsWith("#"))&&void 0!==v&&v,D=!O||!k||P;return O&&k&&!P&&!m&&g.collectLink(O),D?n.createElement("a",{href:O,...S&&!k&&{target:"_blank",rel:"noopener noreferrer"},...b}):n.createElement(_,{...b,onMouseEnter:()=>{E.current||null==O||(window.docusaurus.preload(O),E.current=!0)},innerRef:e=>{var t,r;x&&e&&k&&(t=e,r=()=>{null!=O&&window.docusaurus.prefetch(O)},C=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(C.unobserve(t),C.disconnect(),r())}))})),C.observe(t))},to:O||"",...e&&{isActive:p,activeClassName:d}})}},3919:(e,t,r)=>{function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{Z:()=>o,b:()=>n})},4996:(e,t,r)=>{r.d(t,{C:()=>i,Z:()=>a});var n=r(2263),o=r(3919);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(n)return t+r;const a=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+a:a}(t,e,r,n)}}function a(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},8802:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[r]=e.split(/[#?]/),n="/"===r?"/":t?(o=r).endsWith("/")?o:`${o}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(r);var o;return e.replace(r,n)}},8780:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=r(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(o).default}});var i=r(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(i).default}})},9964:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1962:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(6742),o=r(7294),i=r(6010);const a="root_2PFE";function s({title:e,description:t,link:r}){return o.createElement("div",{className:(0,i.Z)("card-demo",a)},o.createElement("div",{className:"card"},o.createElement("div",{className:"card__header"},o.createElement("h3",null,e)),o.createElement("div",{className:"card__body"},o.createElement("p",null,t)),o.createElement("div",{className:"card__footer"},o.createElement(n.Z,{className:"button button--secondary button--block",to:r},"Get Started"))))}},7763:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294);const o="root_NqT0";function i({children:e}){return n.createElement("div",{className:o},e)}},1294:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905)),i=r(1962),a=r(7763);const s={title:"SDK Samples",description:"VertiGIS Studio Mobile - Learn about the VertiGIS Studio Mobile SDK Samples project"},c=void 0,l={unversionedId:"mobile/sdk-samples",id:"mobile/sdk-samples",isDocsHomePage:!1,title:"SDK Samples",description:"VertiGIS Studio Mobile - Learn about the VertiGIS Studio Mobile SDK Samples project",source:"@site/docs/mobile/sdk-samples.mdx",sourceDirName:"mobile",slug:"/mobile/sdk-samples",permalink:"/docs/mobile/sdk-samples",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/sdk-samples.mdx",version:"current",frontMatter:{title:"SDK Samples",description:"VertiGIS Studio Mobile - Learn about the VertiGIS Studio Mobile SDK Samples project"},sidebar:"mobile",previous:{title:"Quickstart Reference",permalink:"/docs/mobile/sdk-quickstart-reference"},next:{title:"Deployment",permalink:"/docs/mobile/sdk-deployment"}},u=[],d={toc:u};function p({components:e,...t}){return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Alongside the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-mobile-quickstart"},"Quickstart Project"),", a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-mobile-samples"},"SDK Samples project")," has been created which demonstrates using the SDK to extend VertiGIS Studio Mobile with custom components, operations and services. The samples project also demonstrates configurations, conceptual ideas, and the use and extension of ",(0,o.kt)("a",{parentName:"p",href:"/docs/workflow/overview"},"VertiGIS Studio Workflow"),". Running the project displays a selector which lets you explore the live samples."),(0,o.kt)(a.Z,{mdxType:"UseCaseContainer"},(0,o.kt)(i.Z,{title:"Quickstart",description:"Check out the VertiGIS Studio Mobile SDK Quickstart Project.",link:"https://github.com/geocortex/vertigis-mobile-quickstart",mdxType:"UseCaseCard"}),(0,o.kt)(i.Z,{title:"SDK Samples",description:"Check out the VertiGIS Studio Mobile SDK Samples Project.",link:"https://github.com/geocortex/vertigis-mobile-samples",mdxType:"UseCaseCard"})))}p.isMDXComponent=!0},6010:(e,t,r)=>{function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}r.d(t,{Z:()=>o})}}]);