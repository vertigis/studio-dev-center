(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[671],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>m,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||i;return r?n.createElement(f,a(a({ref:t},m),{},{components:r})):n.createElement(f,a({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6742:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(7294),o=r(3727),i=r(2263),a=r(3919),l=r(412);const s=(0,n.createContext)({collectLink:()=>{}});var c=r(4996),m=r(8780);const u=function({isNavLink:e,to:t,href:r,activeClassName:u,isActive:p,"data-noBrokenLinkCheck":d,autoAddBaseUrl:f=!0,...w}){var h;const{siteConfig:{trailingSlash:k}}=(0,i.Z)(),{withBaseUrl:v}=(0,c.C)(),y=(0,n.useContext)(s),b=t||r,g=(0,a.Z)(b),C=null==b?void 0:b.replace("pathname://","");let N=void 0!==C?(E=C,f&&(e=>e.startsWith("/"))(E)?v(E):E):void 0;var E;N&&g&&(N=(0,m.applyTrailingSlash)(N,k));const _=(0,n.useRef)(!1),x=e?o.OL:o.rU,O=l.Z.canUseIntersectionObserver;let P;(0,n.useEffect)((()=>(!O&&g&&null!=N&&window.docusaurus.prefetch(N),()=>{O&&P&&P.disconnect()})),[N,O,g]);const T=null!==(h=null==N?void 0:N.startsWith("#"))&&void 0!==h&&h,S=!N||!g||T;return N&&g&&!T&&!d&&y.collectLink(N),S?n.createElement("a",{href:N,...b&&!g&&{target:"_blank",rel:"noopener noreferrer"},...w}):n.createElement(x,{...w,onMouseEnter:()=>{_.current||null==N||(window.docusaurus.preload(N),_.current=!0)},innerRef:e=>{var t,r;O&&e&&g&&(t=e,r=()=>{null!=N&&window.docusaurus.prefetch(N)},P=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(P.unobserve(t),P.disconnect(),r())}))})),P.observe(t))},to:N||"",...e&&{isActive:p,activeClassName:u}})}},3919:(e,t,r)=>{"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:()=>n,Z:()=>o})},4996:(e,t,r)=>{"use strict";r.d(t,{C:()=>i,Z:()=>a});var n=r(2263),o=r(3919);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(n)return t+r;const a=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+a:a}(t,e,r,n)}}function a(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[r]=e.split(/[#?]/),n="/"===r?"/":t?(o=r).endsWith("/")?o:`${o}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(r);var o;return e.replace(r,n)}},8780:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=r(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(o).default}});var i=r(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(i).default}})},9964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1962:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(6742),o=r(7294),i=r(6010);const a="root_2PFE";function l({title:e,description:t,link:r}){return o.createElement("div",{className:(0,i.Z)("card-demo",a)},o.createElement("div",{className:"card"},o.createElement("div",{className:"card__header"},o.createElement("h3",null,e)),o.createElement("div",{className:"card__body"},o.createElement("p",null,t)),o.createElement("div",{className:"card__footer"},o.createElement(n.Z,{className:"button button--secondary button--block",to:r},"Get Started"))))}},7763:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(7294);const o="root_NqT0";function i({children:e}){return n.createElement("div",{className:o},e)}},2893:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>c,metadata:()=>m,toc:()=>u,default:()=>d});var n=r(2122),o=(r(7294),r(3905)),i=r(4996),a=r(7763),l=r(1962);const s={title:"Create a Form Element",description:"VertiGIS Studio Workflow - Create a workflow form element for web applications"},c=void 0,m={unversionedId:"workflow/sdk-web-create-element",id:"workflow/sdk-web-create-element",isDocsHomePage:!1,title:"Create a Form Element",description:"VertiGIS Studio Workflow - Create a workflow form element for web applications",source:"@site/docs/workflow/sdk-web-create-element.mdx",sourceDirName:"workflow",slug:"/workflow/sdk-web-create-element",permalink:"/docs/workflow/sdk-web-create-element",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/workflow/sdk-web-create-element.mdx",version:"current",frontMatter:{title:"Create a Form Element",description:"VertiGIS Studio Workflow - Create a workflow form element for web applications"},sidebar:"workflow",previous:{title:"Create an Activity",permalink:"/docs/workflow/sdk-web-create-activity"},next:{title:"Activity Reference",permalink:"/docs/workflow/sdk-web-activity-reference"}},u=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Create a Form Element",id:"create-a-form-element",children:[]},{value:"Registering Form Elements",id:"registering-form-elements",children:[]},{value:"Using Form Elements",id:"using-form-elements",children:[]},{value:"Deploy the Form Element",id:"deploy-the-form-element",children:[]},{value:"Test the Form Element",id:"test-the-form-element",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],p={toc:u};function d({components:e,...t}){return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article will walk you through creating a new workflow form element for web applications."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-web-overview#overview"},"Set up")," the VertiGIS Studio Workflow TypeScript SDK."),(0,o.kt)("h2",{id:"create-a-form-element"},"Create a Form Element"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open up a terminal shell in the SDK folder."),(0,o.kt)("li",{parentName:"ol"},"Run the command ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run generate")," and follow the instructions to create a new form element named ",(0,o.kt)("inlineCode",{parentName:"li"},"MyCustomElement"),". This script creates a custom form element skeleton that you can build on with your own custom logic. The script will perform the following operations:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Create a new form element ",(0,o.kt)("inlineCode",{parentName:"li"},".tsx")," file with the provided name in the ",(0,o.kt)("inlineCode",{parentName:"li"},"src/elements")," folder."),(0,o.kt)("li",{parentName:"ol"},"Populate the form element ",(0,o.kt)("inlineCode",{parentName:"li"},".tsx")," file from a form element template."),(0,o.kt)("li",{parentName:"ol"},"Exports the element in ",(0,o.kt)("inlineCode",{parentName:"li"},"src/index.ts")," to make it available for use.")))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It's convention to use PascalCase for form element names. You can add multiple activities and form elements to the same project."))),(0,o.kt)("p",null,"In the VertiGIS Studio Workflow TypeScript SDK, form elements are represented by TypeScript React Components."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import * as React from "react";\nimport {\n    FormElementProps,\n    FormElementRegistration,\n} from "@geocortex/workflow/runtime";\n\ninterface DemoProps extends FormElementProps {}\n\nfunction Demo(props: DemoProps) {\n    return <div>Hello. I\'m a form element!</div>;\n}\n')),(0,o.kt)("h2",{id:"registering-form-elements"},"Registering Form Elements"),(0,o.kt)("p",null,"Form elements must be registered by exporting a registration object declaring your new element."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const DemoElementRegistration: FormElementRegistration<DemoProps> = {\n    component: Demo,\n    id: "Demo",\n};\n\nexport default DemoElementRegistration;\n')),(0,o.kt)("h2",{id:"using-form-elements"},"Using Form Elements"),(0,o.kt)("p",null,"Custom form elements can be used in a form through the special ",(0,o.kt)("a",{parentName:"p",href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/form-elements/custom.htm#Custom_Form_Elements%3FTocPath%3DForms%7CForm%2520Element%2520Reference%7CCustom%2520Form%2520Elements%7C_____0"},(0,o.kt)("em",{parentName:"a"},"Custom"))," form element. This form element displays custom form elements by referencing them by the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," they were registered with. Enter your element's ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," in the ",(0,o.kt)("em",{parentName:"p"},"Custom Type")," input."),(0,o.kt)("h2",{id:"deploy-the-form-element"},"Deploy the Form Element"),(0,o.kt)("p",null,"Follow the instructions to ",(0,o.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-web-overview#deployment"},"deploy the activity pack"),"."),(0,o.kt)("h2",{id:"test-the-form-element"},"Test the Form Element"),(0,o.kt)("p",null,"Now you can ",(0,o.kt)("a",{parentName:"p",href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/get-started.htm#Get_Started%3FTocPath%3DGet%2520Started%7C_____0"},"build a workflow")," that uses your new custom form element!"),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)(a.Z,{mdxType:"UseCaseContainer"},(0,o.kt)(l.Z,{title:"Implement a Star Rating Form Element",description:"Implement a custom star rating form element for web applications",link:(0,i.Z)("docs/workflow/tutorial-web-implement-star-rating-form-element"),mdxType:"UseCaseCard"}),(0,o.kt)(l.Z,{title:"Form Element Reference",description:"Learn more about implementing custom form elements",link:(0,i.Z)("docs/workflow/sdk-web-form-reference"),mdxType:"UseCaseCard"}),(0,o.kt)(l.Z,{title:"Implement a Custom Activity",description:"Implement a custom activity for web applications",link:(0,i.Z)("docs/workflow/sdk-web-create-activity"),mdxType:"UseCaseCard"}),(0,o.kt)(l.Z,{title:"Reference a Third Party Library",description:"Reference a third party library in web applications",link:(0,i.Z)("docs/workflow/sdk-web-reference-third-party-library"),mdxType:"UseCaseCard"})))}d.isMDXComponent=!0},6010:(e,t,r)=>{"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}r.d(t,{Z:()=>o})}}]);