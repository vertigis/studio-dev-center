(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[446],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>v});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),l=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(r),v=n,f=p["".concat(c,".").concat(v)]||p[v]||d[v]||a;return r?i.createElement(f,s(s({ref:t},u),{},{components:r})):i.createElement(f,s({ref:t},u))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var l=2;l<a;l++)s[l]=r[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6742:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var i=r(7294),n=r(3727),a=r(2263),s=r(3919),o=r(412);const c=(0,i.createContext)({collectLink:()=>{}});var l=r(4996),u=r(8780);const d=function({isNavLink:e,to:t,href:r,activeClassName:d,isActive:p,"data-noBrokenLinkCheck":v,autoAddBaseUrl:f=!0,...m}){var h;const{siteConfig:{trailingSlash:g}}=(0,a.Z)(),{withBaseUrl:b}=(0,l.C)(),y=(0,i.useContext)(c),w=t||r,k=(0,s.Z)(w),S=null==w?void 0:w.replace("pathname://","");let x=void 0!==S?(C=S,f&&(e=>e.startsWith("/"))(C)?b(C):C):void 0;var C;x&&k&&(x=(0,u.applyTrailingSlash)(x,g));const E=(0,i.useRef)(!1),N=e?n.OL:n.rU,O=o.Z.canUseIntersectionObserver;let P;(0,i.useEffect)((()=>(!O&&k&&null!=x&&window.docusaurus.prefetch(x),()=>{O&&P&&P.disconnect()})),[x,O,k]);const _=null!==(h=null==x?void 0:x.startsWith("#"))&&void 0!==h&&h,j=!x||!k||_;return x&&k&&!_&&!v&&y.collectLink(x),j?i.createElement("a",{href:x,...w&&!k&&{target:"_blank",rel:"noopener noreferrer"},...m}):i.createElement(N,{...m,onMouseEnter:()=>{E.current||null==x||(window.docusaurus.preload(x),E.current=!0)},innerRef:e=>{var t,r;O&&e&&k&&(t=e,r=()=>{null!=x&&window.docusaurus.prefetch(x)},P=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(P.unobserve(t),P.disconnect(),r())}))})),P.observe(t))},to:x||"",...e&&{isActive:p,activeClassName:d}})}},3919:(e,t,r)=>{"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!i(e)}r.d(t,{b:()=>i,Z:()=>n})},4996:(e,t,r)=>{"use strict";r.d(t,{C:()=>a,Z:()=>s});var i=r(2263),n=r(3919);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,i.Z)();return{withBaseUrl:(r,i)=>function(e,t,r,{forcePrependBaseUrl:i=!1,absolute:a=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,n.b)(r))return r;if(i)return t+r;const s=r.startsWith(t)?r:t+r.replace(/^\//,"");return a?e+s:s}(t,e,r,i)}}function s(e,t={}){const{withBaseUrl:r}=a();return r(e,t)}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[r]=e.split(/[#?]/),i="/"===r?"/":t?(n=r).endsWith("/")?n:`${n}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(r);var n;return e.replace(r,i)}},8780:function(e,t,r){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var n=r(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return i(n).default}});var a=r(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return i(a).default}})},9964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1962:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var i=r(6742),n=r(7294),a=r(6010);const s="root_2PFE";function o({title:e,description:t,link:r}){return n.createElement("div",{className:(0,a.Z)("card-demo",s)},n.createElement("div",{className:"card"},n.createElement("div",{className:"card__header"},n.createElement("h3",null,e)),n.createElement("div",{className:"card__body"},n.createElement("p",null,t)),n.createElement("div",{className:"card__footer"},n.createElement(i.Z,{className:"button button--secondary button--block",to:r},"Get Started"))))}},7763:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var i=r(7294);const n="root_NqT0";function a({children:e}){return i.createElement("div",{className:n},e)}},376:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>c,contentTitle:()=>l,metadata:()=>u,toc:()=>d,default:()=>v});var i=r(2122),n=(r(7294),r(3905)),a=r(4996),s=r(1962),o=r(7763);const c={title:"Create a Service",description:"VertiGIS Studio Web - Create a Service for VertiGIS Studio Web"},l=void 0,u={unversionedId:"web/sdk-services-create",id:"web/sdk-services-create",isDocsHomePage:!1,title:"Create a Service",description:"VertiGIS Studio Web - Create a Service for VertiGIS Studio Web",source:"@site/docs/web/sdk-services-create.mdx",sourceDirName:"web",slug:"/web/sdk-services-create",permalink:"/docs/web/sdk-services-create",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/sdk-services-create.mdx",version:"current",frontMatter:{title:"Create a Service",description:"VertiGIS Studio Web - Create a Service for VertiGIS Studio Web"},sidebar:"web",previous:{title:"Overview",permalink:"/docs/web/sdk-services-overview"},next:{title:"Service Reference",permalink:"/docs/web/sdk-services-reference"}},d=[{value:"Create the Service",id:"create-the-service",children:[]},{value:"Register the Service",id:"register-the-service",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],p={toc:d};function v({components:e,...t}){return(0,n.kt)("wrapper",(0,i.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Creating a new ",(0,n.kt)("a",{parentName:"p",href:"/docs/web/sdk-services-create"},"custom service")," involves a few important steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#create-the-service"},"Create the service source file")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#register-the-service"},"Register the service in your library registration file"))),(0,n.kt)("h2",{id:"create-the-service"},"Create the Service"),(0,n.kt)("p",null,"Create the service source file in a new folder within the ",(0,n.kt)("inlineCode",{parentName:"p"},"src/services")," folder. For example to create a new service called ",(0,n.kt)("inlineCode",{parentName:"p"},"ExampleService"),", create a new file called ",(0,n.kt)("inlineCode",{parentName:"p"},"ExampleService.ts")," in ",(0,n.kt)("inlineCode",{parentName:"p"},"src/services/ExampleService")," with the following content:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/services/ExampleService.ts"',title:'"src/services/ExampleService.ts"'},'import { ServiceBase } from "@vertigis/web/services";\n\nexport default class ExampleService extends ServiceBase {}\n')),(0,n.kt)("p",null,"If you want your service to be able to serialize and deserialize configuration specific to the service from ",(0,n.kt)("inlineCode",{parentName:"p"},"app.json"),", you can extend from ",(0,n.kt)("inlineCode",{parentName:"p"},"ConfigurableServiceBase")," instead:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/services/ExampleService.ts"',title:'"src/services/ExampleService.ts"'},'import { ServiceModelProperties } from "@vertigis/web/models";\nimport {\n    ConfigurableServiceBase,\n    serializable,\n} from "@vertigis/web/services";\n\ninterface ExampleModelProperties extends ServiceModelProperties {\n    exampleProperty: string;\n}\n\n// highlight-start\n@serializable\nexport default class ExampleService extends ConfigurableServiceBase<ExampleModelProperties> {\n    // highlight-end\n    exampleProperty: string;\n}\n')),(0,n.kt)("h2",{id:"register-the-service"},"Register the Service"),(0,n.kt)("p",null,"Finally we need to register the service with the VertiGIS Studio Web service registry so that it is aware of your new service."),(0,n.kt)("p",null,"To simplify the module imports, we'll make a new file in the ",(0,n.kt)("inlineCode",{parentName:"p"},"ExampleService")," folder called ",(0,n.kt)("inlineCode",{parentName:"p"},"index.ts"),". Note that this file is for convenience, and is not required:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/services/ExampleService/index.ts"',title:'"src/services/ExampleService/index.ts"'},'export { default } from "./ExampleService";\n')),(0,n.kt)("p",null,"Now register your service with the service registry by modifying the ",(0,n.kt)("inlineCode",{parentName:"p"},"src/index.ts")," file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/index.ts"',title:'"src/index.ts"'},'import { LibraryRegistry } from "@vertigis/web/config";\n\n// highlight-next-line\nimport ExampleService from "./services/ExampleService";\n\nexport default function (registry: LibraryRegistry) {\n    // ... other item registrations\n\n    // highlight-start\n    registry.registerService({\n        id: "example",\n        getService: (config) => new ExampleService(config),\n        // Use this setting if you want your service to load on\n        // application startup. Defaults to `false`.\n        loadOnStartup: true,\n    });\n    // highlight-end\n}\n')),(0,n.kt)("h2",{id:"next-steps"},"Next Steps"),(0,n.kt)(o.Z,{mdxType:"UseCaseContainer"},(0,n.kt)(s.Z,{title:"Deploy your Service",description:"Learn how to deploy your custom service",link:(0,a.Z)("docs/web/sdk-deployment"),mdxType:"UseCaseCard"}),(0,n.kt)(s.Z,{title:"Create a Service that Manages Dynamic Data",description:"Follow along with a more in depth service example",link:(0,a.Z)("docs/web/tutorial-service-dynamic-data"),mdxType:"UseCaseCard"})))}v.isMDXComponent=!0},6010:(e,t,r)=>{"use strict";function i(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=i(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=i(e))&&(n&&(n+=" "),n+=t);return n}r.d(t,{Z:()=>n})}}]);