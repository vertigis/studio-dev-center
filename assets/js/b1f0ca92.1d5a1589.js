(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[9779,4072],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(r),d=i,v=p["".concat(c,".").concat(d)]||p[d]||m[d]||s;return r?n.createElement(v,a(a({ref:t},u),{},{components:r})):n.createElement(v,a({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,a=new Array(s);a[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6742:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(7294),i=r(3727),s=r(2263),a=r(3919),o=r(412);const c=(0,n.createContext)({collectLink:()=>{}});var l=r(4996),u=r(8780);const m=function({isNavLink:e,to:t,href:r,activeClassName:m,isActive:p,"data-noBrokenLinkCheck":d,autoAddBaseUrl:v=!0,...g}){var b;const{siteConfig:{trailingSlash:h}}=(0,s.Z)(),{withBaseUrl:f}=(0,l.C)(),k=(0,n.useContext)(c),S=t||r,y=(0,a.Z)(S),C=null==S?void 0:S.replace("pathname://","");let w=void 0!==C?(x=C,v&&(e=>e.startsWith("/"))(x)?f(x):x):void 0;var x;w&&y&&(w=(0,u.applyTrailingSlash)(w,h));const N=(0,n.useRef)(!1),M=e?i.OL:i.rU,T=o.Z.canUseIntersectionObserver;let O;(0,n.useEffect)((()=>(!T&&y&&null!=w&&window.docusaurus.prefetch(w),()=>{T&&O&&O.disconnect()})),[w,T,y]);const I=null!==(b=null==w?void 0:w.startsWith("#"))&&void 0!==b&&b,A=!w||!y||I;return w&&y&&!I&&!d&&k.collectLink(w),A?n.createElement("a",{href:w,...S&&!y&&{target:"_blank",rel:"noopener noreferrer"},...g}):n.createElement(M,{...g,onMouseEnter:()=>{N.current||null==w||(window.docusaurus.preload(w),N.current=!0)},innerRef:e=>{var t,r;T&&e&&y&&(t=e,r=()=>{null!=w&&window.docusaurus.prefetch(w)},O=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(O.unobserve(t),O.disconnect(),r())}))})),O.observe(t))},to:w||"",...e&&{isActive:p,activeClassName:m}})}},3919:(e,t,r)=>{"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,{b:()=>n,Z:()=>i})},4996:(e,t,r)=>{"use strict";r.d(t,{C:()=>s,Z:()=>a});var n=r(2263),i=r(3919);function s(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:s=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,i.b)(r))return r;if(n)return t+r;const a=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+a:a}(t,e,r,n)}}function a(e,t={}){const{withBaseUrl:r}=s();return r(e,t)}},8215:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(7294);const i=function({children:e,hidden:t,className:r}){return n.createElement("div",{role:"tabpanel",hidden:t,className:r},e)}},1395:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(7294),i=r(944),s=r(6010);const a="tabItem_1uMI",o="tabItemActive_2DSg";const c=37,l=39;const u=function(e){const{lazy:t,block:r,defaultValue:u,values:m,groupId:p,className:d}=e,{tabGroupChoices:v,setTabGroupChoices:g}=(0,i.Z)(),[b,h]=(0,n.useState)(u),f=n.Children.toArray(e.children),k=[];if(null!=p){const e=v[p];null!=e&&e!==b&&m.some((t=>t.value===e))&&h(e)}const S=e=>{const t=e.currentTarget,r=k.indexOf(t),n=m[r].value;h(n),null!=p&&(g(p,n),setTimeout((()=>{(function(e){const{top:t,left:r,bottom:n,right:i}=e.getBoundingClientRect(),{innerHeight:s,innerWidth:a}=window;return t>=0&&i<=a&&n<=s&&r>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((()=>t.classList.remove(o)),2e3))}),150))},y=e=>{var t;let r;switch(e.keyCode){case l:{const t=k.indexOf(e.target)+1;r=k[t]||k[0];break}case c:{const t=k.indexOf(e.target)-1;r=k[t]||k[k.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},d)},m.map((({value:e,label:t})=>n.createElement("li",{role:"tab",tabIndex:b===e?0:-1,"aria-selected":b===e,className:(0,s.Z)("tabs__item",a,{"tabs__item--active":b===e}),key:e,ref:e=>k.push(e),onKeyDown:y,onFocus:S,onClick:S},t)))),t?(0,n.cloneElement)(f.filter((e=>e.props.value===b))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==b})))))}},9443:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=(0,r(7294).createContext)(void 0)},944:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(7294),i=r(9443);const s=function(){const e=(0,n.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[r]=e.split(/[#?]/),n="/"===r?"/":t?(i=r).endsWith("/")?i:`${i}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(r);var i;return e.replace(r,n)}},8780:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=r(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(i).default}});var s=r(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(s).default}})},9964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1962:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(6742),i=r(7294),s=r(6010);const a="root_2PFE";function o({title:e,description:t,link:r}){return i.createElement("div",{className:(0,s.Z)("card-demo",a)},i.createElement("div",{className:"card"},i.createElement("div",{className:"card__header"},i.createElement("h3",null,e)),i.createElement("div",{className:"card__body"},i.createElement("p",null,t)),i.createElement("div",{className:"card__footer"},i.createElement(n.Z,{className:"button button--secondary button--block",to:r},"Get Started"))))}},7763:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(7294);const i="root_NqT0";function s({children:e}){return n.createElement("div",{className:i},e)}},7071:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>m,contentTitle:()=>p,metadata:()=>d,toc:()=>v,default:()=>b});var n=r(2122),i=(r(7294),r(3905)),s=r(1395),a=r(8215),o=r(4996),c=r(7763),l=r(1962),u=r(5664);const m={title:"Create a Service",description:"VertiGIS Studio Mobile - Create a service using the VertiGIS Studio Mobile SDK Quickstart"},p=void 0,d={unversionedId:"mobile/sdk-services-create",id:"mobile/sdk-services-create",isDocsHomePage:!1,title:"Create a Service",description:"VertiGIS Studio Mobile - Create a service using the VertiGIS Studio Mobile SDK Quickstart",source:"@site/docs/mobile/sdk-services-create.mdx",sourceDirName:"mobile",slug:"/mobile/sdk-services-create",permalink:"/docs/mobile/sdk-services-create",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/sdk-services-create.mdx",version:"current",frontMatter:{title:"Create a Service",description:"VertiGIS Studio Mobile - Create a service using the VertiGIS Studio Mobile SDK Quickstart"},sidebar:"mobile",previous:{title:"Overview",permalink:"/docs/mobile/sdk-services-overview"},next:{title:"Service Reference",permalink:"/docs/mobile/sdk-services-reference"}},v=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Basic Service",id:"basic-service",children:[]},{value:"Create a Custom Command",id:"create-a-custom-command",children:[]},{value:"Relevant SDK Samples",id:"relevant-sdk-samples",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],g={toc:v};function b({components:e,...t}){return(0,i.kt)("wrapper",(0,n.Z)({},g,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This tutorial assumes you are using windows and can run the Universal Windows Version of VertiGIS Studio Mobile."))),(0,i.kt)("p",null,"Sometimes, you may have logic or data that needs to be shared by multiple components across an app. In VertiGIS Studio Mobile, ",(0,i.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-services-overview"},"services")," are shared singletons that can register global ",(0,i.kt)("a",{parentName:"p",href:"/docs/mobile/configuration-commands-operations"},"commands and operations"),", be injected into components, run background tasks, and more."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)(u.default,{mdxType:"QuickstartPrereqsSnippet"}),(0,i.kt)("h2",{id:"basic-service"},"Basic Service"),(0,i.kt)("p",null,"Create a new file ",(0,i.kt)("inlineCode",{parentName:"p"},"services/CustomService.cs")," under the platform agnostic project.\nIn the file, add a new service class ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomService")," and register it with VertiGIS Studio Mobile using an assembly attribute."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="App1/App1/services/CustomService.cs',title:'"App1/App1/services/CustomService.cs'},"using App1.Services;\nusing VertiGIS.Mobile.Composition;\nusing VertiGIS.Mobile.Composition.Services;\nusing System.Threading.Tasks;\n\n[assembly: Service(typeof(CustomService))]\nnamespace App1.Services\n{\n    class CustomService : ServiceBase\n    {\n        public CustomService()\n            :base()\n        {\n        }\n    }\n}\n")),(0,i.kt)("h2",{id:"create-a-custom-command"},"Create a Custom Command"),(0,i.kt)("p",null,"Custom Services can register custom commands and operations. The following example shows how a custom service can register a command with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Operations Registry"),", and how that command can be configured to run on a button press using layout and app config."),(0,i.kt)(s.Z,{defaultValue:"service",values:[{label:"Service",value:"service"},{label:"Layout",value:"layout"},{label:"App Config",value:"config"},{label:"User Interface",value:"ui"}],mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"service",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="App1/App1/services/CustomService.cs',title:'"App1/App1/services/CustomService.cs'},'using App1.Services;\nusing VertiGIS.Mobile.Composition;\nusing VertiGIS.Mobile.Composition.Messaging;\nusing VertiGIS.Mobile.Composition.Services;\nusing System.Threading.Tasks;\n\n[assembly: Service(typeof(CustomService))]\nnamespace App1.Services\n{\n    public class CustomService : ServiceBase\n    {\n        public CustomService(IOperationRegistry operationRegistry)\n            : base()\n        {\n            // highlight-start\n            operationRegistry.VoidOperation<string>("custom.alert").RegisterExecute((string customMessage) =>\n            {\n                return Xamarin.Forms.Application.Current.MainPage.DisplayAlert("Custom Alert", customMessage, "Cancel");\n            }, this);\n            // highlight-end\n\n        }\n    }\n}\n'))),(0,i.kt)(a.Z,{value:"layout",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="App1/App1/layout-large.xml"',title:'"App1/App1/layout-large.xml"'},'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd">\n    <map id="map1" >\n        // highlight-next-line\n        <button id="custom-alert" config="custom-alert" style="map-widget" show-title="true" margin="0.3" slot="top-center"/>\n    </map>\n</layout>\n\n'))),(0,i.kt)(a.Z,{value:"config",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="App1/App1/app.json"',title:'"App1/App1/app.json"'},'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "id": "desktop-layout",\n            "$type": "layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["medium", "large"]\n        },\n        // highlight-start\n        {\n            "id": "custom-alert",\n            "iconId": "warning",\n            "title": "Custom Alert",\n            "action": {\n                "name": "custom.alert",\n                "arguments": "My Custom Message"\n            },\n            "$type": "menu-item"\n        }\n        // highlight-end\n    ]\n}\n'))),(0,i.kt)(a.Z,{value:"ui",mdxType:"TabItem"},(0,i.kt)("img",{src:(0,o.Z)("img/mobile-sdk-services-create.png"),alt:"Custom Component with Text Block"}))),(0,i.kt)("h2",{id:"relevant-sdk-samples"},"Relevant SDK Samples"),(0,i.kt)("p",null,"Check out the relevant VertiGIS Studio Mobile SDK Samples:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Custom/Service"},"Custom Service"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/CustomSamples/BasemapToggle"},"Basemap Toggle that uses a Custom Service"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/CustomSamples/BreadCrumbs"},"Breadcrumb Tracker that Uses a Custom Service")))),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)(c.Z,{mdxType:"UseCaseContainer"},(0,i.kt)(l.Z,{title:"Learn More About Services",description:"Take a deep dive into services in the VertiGIS Studio Mobile SDK",link:(0,o.Z)("docs/mobile/sdk-services-reference"),mdxType:"UseCaseCard"}),(0,i.kt)(l.Z,{title:"Build a Service that Manages Dynamic Data",description:"Built a service that manages a dynamic data source and exposes it to components",link:(0,o.Z)("docs/mobile/tutorial-implement-service-fetch-dynamic-data"),mdxType:"UseCaseCard"})))}b.isMDXComponent=!0},5664:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>a,metadata:()=>o,toc:()=>c,default:()=>u});var n=r(2122),i=(r(7294),r(3905));const s={},a=void 0,o={unversionedId:"mobile/snippets/quickstart-prereqs",id:"mobile/snippets/quickstart-prereqs",isDocsHomePage:!1,title:"quickstart-prereqs",description:"Check out and setup the VertiGIS Studio Mobile SDK Quickstart project.",source:"@site/docs/mobile/snippets/quickstart-prereqs.mdx",sourceDirName:"mobile/snippets",slug:"/mobile/snippets/quickstart-prereqs",permalink:"/docs/mobile/snippets/quickstart-prereqs",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/snippets/quickstart-prereqs.mdx",version:"current",frontMatter:{}},c=[],l={toc:c};function u({components:e,...t}){return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Check out and setup the ",(0,i.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-overview"},"VertiGIS Studio Mobile SDK Quickstart project"),"."))}u.isMDXComponent=!0},6010:(e,t,r)=>{"use strict";function n(e){var t,r,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(i&&(i+=" "),i+=r);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,r=0,i="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}r.d(t,{Z:()=>i})}}]);