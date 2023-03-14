"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[1464],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(r),p=n,m=f["".concat(c,".").concat(p)]||f[p]||d[p]||i;return r?o.createElement(m,a(a({ref:t},u),{},{components:r})):o.createElement(m,a({ref:t},u))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6742:(e,t,r)=>{r.d(t,{Z:()=>d});var o=r(7294),n=r(3727),i=r(2263),a=r(3919),s=r(412);const c=(0,o.createContext)({collectLink:()=>{}});var l=r(4996),u=r(8780);const d=function({isNavLink:e,to:t,href:r,activeClassName:d,isActive:f,"data-noBrokenLinkCheck":p,autoAddBaseUrl:m=!0,...v}){var b;const{siteConfig:{trailingSlash:w}}=(0,i.Z)(),{withBaseUrl:h}=(0,l.C)(),y=(0,o.useContext)(c),g=t||r,k=(0,a.Z)(g),O=null==g?void 0:g.replace("pathname://","");let C=void 0!==O?(_=O,m&&(e=>e.startsWith("/"))(_)?h(_):_):void 0;var _;C&&k&&(C=(0,u.applyTrailingSlash)(C,w));const S=(0,o.useRef)(!1),E=e?n.OL:n.rU,j=s.Z.canUseIntersectionObserver;let P;(0,o.useEffect)((()=>(!j&&k&&null!=C&&window.docusaurus.prefetch(C),()=>{j&&P&&P.disconnect()})),[C,j,k]);const T=null!==(b=null==C?void 0:C.startsWith("#"))&&void 0!==b&&b,W=!C||!k||T;return C&&k&&!T&&!p&&y.collectLink(C),W?o.createElement("a",{href:C,...g&&!k&&{target:"_blank",rel:"noopener noreferrer"},...v}):o.createElement(E,{...v,onMouseEnter:()=>{S.current||null==C||(window.docusaurus.preload(C),S.current=!0)},innerRef:e=>{var t,r;j&&e&&k&&(t=e,r=()=>{null!=C&&window.docusaurus.prefetch(C)},P=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(P.unobserve(t),P.disconnect(),r())}))})),P.observe(t))},to:C||"",...e&&{isActive:f,activeClassName:d}})}},3919:(e,t,r)=>{function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!o(e)}r.d(t,{Z:()=>n,b:()=>o})},4996:(e,t,r)=>{r.d(t,{C:()=>i,Z:()=>a});var o=r(2263),n=r(3919);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,o.Z)();return{withBaseUrl:(r,o)=>function(e,t,r,{forcePrependBaseUrl:o=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,n.b)(r))return r;if(o)return t+r;const a=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+a:a}(t,e,r,o)}}function a(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},8802:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[r]=e.split(/[#?]/),o="/"===r?"/":t?(n=r).endsWith("/")?n:`${n}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(r);var n;return e.replace(r,o)}},8780:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var n=r(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return o(n).default}});var i=r(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return o(i).default}})},9964:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1962:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(6742),n=r(7294),i=r(6010);const a="root_2PFE";function s({title:e,description:t,link:r}){return n.createElement("div",{className:(0,i.Z)("card-demo",a)},n.createElement("div",{className:"card"},n.createElement("div",{className:"card__header"},n.createElement("h3",null,e)),n.createElement("div",{className:"card__body"},n.createElement("p",null,t)),n.createElement("div",{className:"card__footer"},n.createElement(o.Z,{className:"button button--secondary button--block",to:r},"Get Started"))))}},7763:(e,t,r)=>{r.d(t,{Z:()=>i});var o=r(7294);const n="root_NqT0";function i({children:e}){return o.createElement("div",{className:n},e)}},1430:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var o=r(7462),n=(r(7294),r(3905)),i=r(1962),a=r(7763);const s={title:"Display a Custom Form",description:"VertiGIS Studio Web - Learn how to display a custom form"},c=void 0,l={unversionedId:"web/tutorial-display-custom-form",id:"web/tutorial-display-custom-form",isDocsHomePage:!1,title:"Display a Custom Form",description:"VertiGIS Studio Web - Learn how to display a custom form",source:"@site/docs/web/tutorial-display-custom-form.mdx",sourceDirName:"web",slug:"/web/tutorial-display-custom-form",permalink:"/docs/web/tutorial-display-custom-form",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/tutorial-display-custom-form.mdx",version:"current",frontMatter:{title:"Display a Custom Form",description:"VertiGIS Studio Web - Learn how to display a custom form"},sidebar:"web",previous:{title:"Run a Workflow from App Config",permalink:"/docs/web/tutorial-run-workflow-app-config"},next:{title:"Change Default Map Click Behavior",permalink:"/docs/web/tutorial-change-default-map-click-behavior"}},u=[],d={toc:u};function f({components:e,...t}){return(0,n.kt)("wrapper",(0,o.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"VertiGIS Studio Web comes with bundled with ",(0,n.kt)("a",{parentName:"p",href:"https://www.vertigisstudio.com/products/vertigis-studio-workflow/"},"VertiGIS Studio Workflow"),". Using VertiGIS Studio Workflow, you can create custom user interactions with custom forms and business logic, without ever having to implement custom code."),(0,n.kt)(a.Z,{mdxType:"UseCaseContainer"},(0,n.kt)(i.Z,{title:"Add a Workflow to a VertiGIS Studio Web Application",description:"Learn how to add a workflow to a VertiGIS Studio Web Application",link:"https://docs.vertigisstudio.com/webviewer/latest/admin-help/Default.htm#gwv/add-a-workflow-to-an-app.htm%3FTocPath%3DConfiguration%7CAdd%2520a%2520Workflow%2520to%2520an%2520App%7C_____0",mdxType:"UseCaseCard"}),(0,n.kt)(i.Z,{title:"Build a Custom Form",description:"Learn how to build a custom form with VertiGIS Studio Workflow",link:"https://docs.vertigisstudio.com/workflow/latest/help/Default.htm#wf5/help/forms.htm",mdxType:"UseCaseCard"})))}f.isMDXComponent=!0},6010:(e,t,r)=>{function o(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=o(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=o(e))&&(n&&(n+=" "),n+=t);return n}r.d(t,{Z:()=>n})}}]);