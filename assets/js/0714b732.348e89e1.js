(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[2984,2250],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>d});var o=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=i,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||n;return r?o.createElement(f,a(a({ref:t},u),{},{components:r})):o.createElement(f,a({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,a=new Array(n);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<n;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6742:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var o=r(7294),i=r(3727),n=r(2263),a=r(3919),l=r(412);const s=(0,o.createContext)({collectLink:()=>{}});var c=r(4996),u=r(8780);const m=function({isNavLink:e,to:t,href:r,activeClassName:m,isActive:p,"data-noBrokenLinkCheck":d,autoAddBaseUrl:f=!0,...v}){var b;const{siteConfig:{trailingSlash:w}}=(0,n.Z)(),{withBaseUrl:y}=(0,c.C)(),h=(0,o.useContext)(s),k=t||r,g=(0,a.Z)(k),S=null==k?void 0:k.replace("pathname://","");let O=void 0!==S?(x=S,f&&(e=>e.startsWith("/"))(x)?y(x):x):void 0;var x;O&&g&&(O=(0,u.applyTrailingSlash)(O,w));const C=(0,o.useRef)(!1),_=e?i.OL:i.rU,N=l.Z.canUseIntersectionObserver;let E;(0,o.useEffect)((()=>(!N&&g&&null!=O&&window.docusaurus.prefetch(O),()=>{N&&E&&E.disconnect()})),[O,N,g]);const M=null!==(b=null==O?void 0:O.startsWith("#"))&&void 0!==b&&b,j=!O||!g||M;return O&&g&&!M&&!d&&h.collectLink(O),j?o.createElement("a",{href:O,...k&&!g&&{target:"_blank",rel:"noopener noreferrer"},...v}):o.createElement(_,{...v,onMouseEnter:()=>{C.current||null==O||(window.docusaurus.preload(O),C.current=!0)},innerRef:e=>{var t,r;N&&e&&g&&(t=e,r=()=>{null!=O&&window.docusaurus.prefetch(O)},E=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t),E.disconnect(),r())}))})),E.observe(t))},to:O||"",...e&&{isActive:p,activeClassName:m}})}},3919:(e,t,r)=>{"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!o(e)}r.d(t,{b:()=>o,Z:()=>i})},4996:(e,t,r)=>{"use strict";r.d(t,{C:()=>n,Z:()=>a});var o=r(2263),i=r(3919);function n(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,o.Z)();return{withBaseUrl:(r,o)=>function(e,t,r,{forcePrependBaseUrl:o=!1,absolute:n=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,i.b)(r))return r;if(o)return t+r;const a=r.startsWith(t)?r:t+r.replace(/^\//,"");return n?e+a:a}(t,e,r,o)}}function a(e,t={}){const{withBaseUrl:r}=n();return r(e,t)}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[r]=e.split(/[#?]/),o="/"===r?"/":t?(i=r).endsWith("/")?i:`${i}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(r);var i;return e.replace(r,o)}},8780:function(e,t,r){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=r(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return o(i).default}});var n=r(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return o(n).default}})},9964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1962:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var o=r(6742),i=r(7294),n=r(6010);const a="root_2PFE";function l({title:e,description:t,link:r}){return i.createElement("div",{className:(0,n.Z)("card-demo",a)},i.createElement("div",{className:"card"},i.createElement("div",{className:"card__header"},i.createElement("h3",null,e)),i.createElement("div",{className:"card__body"},i.createElement("p",null,t)),i.createElement("div",{className:"card__footer"},i.createElement(o.Z,{className:"button button--secondary button--block",to:r},"Get Started"))))}},7763:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var o=r(7294);const i="root_NqT0";function n({children:e}){return o.createElement("div",{className:i},e)}},6560:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>n,contentTitle:()=>a,metadata:()=>l,toc:()=>s,default:()=>u});var o=r(2122),i=(r(7294),r(3905));const n={},a=void 0,l={unversionedId:"mobile/snippets/relevant-workflow-samples",id:"mobile/snippets/relevant-workflow-samples",isDocsHomePage:!1,title:"relevant-workflow-samples",description:"The VertiGIS Studio Mobile SDK Samples project has a variety of workflow samples:",source:"@site/docs/mobile/snippets/relevant-workflow-samples.mdx",sourceDirName:"mobile/snippets",slug:"/mobile/snippets/relevant-workflow-samples",permalink:"/docs/mobile/snippets/relevant-workflow-samples",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/snippets/relevant-workflow-samples.mdx",version:"current",frontMatter:{}},s=[],c={toc:s};function u({components:e,...t}){return(0,i.kt)("wrapper",(0,o.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The VertiGIS Studio Mobile SDK Samples project has a variety of workflow samples:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Workflow/RunWorkflow"},"Run a Workflow"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Workflow/CustomActivity"},"Build a Custom Activity"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Workflow/CustomFormComponent"},"Build a Custom Form Element")))))}u.isMDXComponent=!0},5645:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>c,contentTitle:()=>u,metadata:()=>m,toc:()=>p,default:()=>f});var o=r(2122),i=(r(7294),r(3905)),n=r(4996),a=r(1962),l=r(7763),s=r(6560);const c={title:"Implement a Custom Activity",description:"VertiGIS Studio Mobile - Learn how to implement a custom workflow activity"},u=void 0,m={unversionedId:"mobile/tutorial-implement-custom-activity",id:"mobile/tutorial-implement-custom-activity",isDocsHomePage:!1,title:"Implement a Custom Activity",description:"VertiGIS Studio Mobile - Learn how to implement a custom workflow activity",source:"@site/docs/mobile/tutorial-implement-custom-activity.mdx",sourceDirName:"mobile",slug:"/mobile/tutorial-implement-custom-activity",permalink:"/docs/mobile/tutorial-implement-custom-activity",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/tutorial-implement-custom-activity.mdx",version:"current",frontMatter:{title:"Implement a Custom Activity",description:"VertiGIS Studio Mobile - Learn how to implement a custom workflow activity"},sidebar:"mobile",previous:{title:"Implement a Custom Form Element",permalink:"/docs/mobile/tutorial-implement-custom-form-elements"},next:{title:"SDK Overview",permalink:"/docs/mobile/sdk-overview"}},p=[{value:"Relevant SDK Samples",id:"relevant-sdk-samples",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],d={toc:p};function f({components:e,...t}){return(0,i.kt)("wrapper",(0,o.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"VertiGIS Studio Mobile comes with bundled with ",(0,i.kt)("a",{parentName:"p",href:"https://www.vertigisstudio.com/products/vertigis-studio-workflow/"},"VertiGIS Studio Workflow"),". VertiGIS Studio Workflow includes a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activity-reference.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____0"},"large suite of activities")," to help you solve your business case. However, if VertiGIS Studio Workflow is missing functionality you need, you can implement a custom activity with the VertiGIS Studio Workflow SDK."),(0,i.kt)("h2",{id:"relevant-sdk-samples"},"Relevant SDK Samples"),(0,i.kt)(s.default,{mdxType:"RelevantWorkflowSamples"}),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)(l.Z,{mdxType:"UseCaseContainer"},(0,i.kt)(a.Z,{title:"VertiGIS Studio Workflow SDK",description:"Learn more about the VertiGIS Studio Workflow SDK",link:(0,n.Z)("docs/workflow/overview"),mdxType:"UseCaseCard"}),(0,i.kt)(a.Z,{title:"Implement a Custom Activity",description:"Learn how to build a custom workflow activity",link:(0,n.Z)("docs/workflow/sdk-mobile-create-activity"),mdxType:"UseCaseCard"})))}f.isMDXComponent=!0},6010:(e,t,r)=>{"use strict";function o(e){var t,r,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=o(e[t]))&&(i&&(i+=" "),i+=r);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,r=0,i="";r<arguments.length;)(e=arguments[r++])&&(t=o(e))&&(i&&(i+=" "),i+=t);return i}r.d(t,{Z:()=>i})}}]);