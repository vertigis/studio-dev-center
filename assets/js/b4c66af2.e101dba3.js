(globalThis.webpackChunkgeocortex_dev_center=globalThis.webpackChunkgeocortex_dev_center||[]).push([[5397,5343],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>u});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,v=m["".concat(c,".").concat(u)]||m[u]||d[u]||a;return n?i.createElement(v,o(o({ref:t},p),{},{components:n})):i.createElement(v,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6742:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var i=n(7294),r=n(3727),a=n(2263),o=n(3919),s=n(412);const c=(0,i.createContext)({collectLink:()=>{}});var l=n(4996),p=n(8780);const d=function({isNavLink:e,to:t,href:n,activeClassName:d,isActive:m,"data-noBrokenLinkCheck":u,autoAddBaseUrl:v=!0,...h}){var g;const{siteConfig:{trailingSlash:f}}=(0,a.Z)(),{withBaseUrl:b}=(0,l.C)(),k=(0,i.useContext)(c),y=t||n,S=(0,o.Z)(y),w=null==y?void 0:y.replace("pathname://","");let N=void 0!==w?(C=w,v&&(e=>e.startsWith("/"))(C)?b(C):C):void 0;var C;N&&S&&(N=(0,p.applyTrailingSlash)(N,f));const x=(0,i.useRef)(!1),T=e?r.OL:r.rU,O=s.Z.canUseIntersectionObserver;let I;(0,i.useEffect)((()=>(!O&&S&&null!=N&&window.docusaurus.prefetch(N),()=>{O&&I&&I.disconnect()})),[N,O,S]);const M=null!==(g=null==N?void 0:N.startsWith("#"))&&void 0!==g&&g,A=!N||!S||M;return N&&S&&!M&&!u&&k.collectLink(N),A?i.createElement("a",{href:N,...y&&!S&&{target:"_blank",rel:"noopener noreferrer"},...h}):i.createElement(T,{...h,onMouseEnter:()=>{x.current||null==N||(window.docusaurus.preload(N),x.current=!0)},innerRef:e=>{var t,n;O&&e&&S&&(t=e,n=()=>{null!=N&&window.docusaurus.prefetch(N)},I=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(I.unobserve(t),I.disconnect(),n())}))})),I.observe(t))},to:N||"",...e&&{isActive:m,activeClassName:d}})}},3919:(e,t,n)=>{"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}n.d(t,{b:()=>i,Z:()=>r})},4996:(e,t,n)=>{"use strict";n.d(t,{C:()=>a,Z:()=>o});var i=n(2263),r=n(3919);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,i.Z)();return{withBaseUrl:(n,i)=>function(e,t,n,{forcePrependBaseUrl:i=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(i)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+o:o}(t,e,n,i)}}function o(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},8215:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var i=n(7294);const r=function({children:e,hidden:t,className:n}){return i.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},1395:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var i=n(7294),r=n(944),a=n(6010);const o="tabItem_1uMI",s="tabItemActive_2DSg";const c=37,l=39;const p=function(e){const{lazy:t,block:n,defaultValue:p,values:d,groupId:m,className:u}=e,{tabGroupChoices:v,setTabGroupChoices:h}=(0,r.Z)(),[g,f]=(0,i.useState)(p),b=i.Children.toArray(e.children),k=[];if(null!=m){const e=v[m];null!=e&&e!==g&&d.some((t=>t.value===e))&&f(e)}const y=e=>{const t=e.currentTarget,n=k.indexOf(t),i=d[n].value;f(i),null!=m&&(h(m,i),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:i,right:r}=e.getBoundingClientRect(),{innerHeight:a,innerWidth:o}=window;return t>=0&&r<=o&&i<=a&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((()=>t.classList.remove(s)),2e3))}),150))},S=e=>{var t;let n;switch(e.keyCode){case l:{const t=k.indexOf(e.target)+1;n=k[t]||k[0];break}case c:{const t=k.indexOf(e.target)-1;n=k[t]||k[k.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},u)},d.map((({value:e,label:t})=>i.createElement("li",{role:"tab",tabIndex:g===e?0:-1,"aria-selected":g===e,className:(0,a.Z)("tabs__item",o,{"tabs__item--active":g===e}),key:e,ref:e=>k.push(e),onKeyDown:S,onFocus:y,onClick:y},t)))),t?(0,i.cloneElement)(b.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},b.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}},9443:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});const i=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var i=n(7294),r=n(9443);const a=function(){const e=(0,i.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),i="/"===n?"/":t?(r=n).endsWith("/")?r:`${r}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(n);var r;return e.replace(n,i)}},8780:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return i(r).default}});var a=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return i(a).default}})},9964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1962:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var i=n(6742),r=n(7294),a=n(6010);const o="root_2PFE";function s({title:e,description:t,link:n}){return r.createElement("div",{className:(0,a.Z)("card-demo",o)},r.createElement("div",{className:"card"},r.createElement("div",{className:"card__header"},r.createElement("h3",null,e)),r.createElement("div",{className:"card__body"},r.createElement("p",null,t)),r.createElement("div",{className:"card__footer"},r.createElement(i.Z,{className:"button button--secondary button--block",to:n},"Get Started"))))}},7763:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var i=n(7294);const r="root_NqT0";function a({children:e}){return i.createElement("div",{className:r},e)}},7385:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>d,contentTitle:()=>m,metadata:()=>u,toc:()=>v,default:()=>g});var i=n(2122),r=(n(7294),n(3905)),a=n(4996),o=n(1962),s=n(7763),c=n(1395),l=n(8215),p=n(1895);const d={title:"Service Reference",description:"Geocortex Mobile - Service reference"},m=void 0,u={unversionedId:"mobile/sdk-services-reference",id:"mobile/sdk-services-reference",isDocsHomePage:!1,title:"Service Reference",description:"Geocortex Mobile - Service reference",source:"@site/docs/mobile/sdk-services-reference.mdx",sourceDirName:"mobile",slug:"/mobile/sdk-services-reference",permalink:"/docs/mobile/sdk-services-reference",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/sdk-services-reference.mdx",version:"current",frontMatter:{title:"Service Reference",description:"Geocortex Mobile - Service reference"},sidebar:"mobile",previous:{title:"Create a Service",permalink:"/docs/mobile/sdk-services-create"},next:{title:"Overview",permalink:"/docs/mobile/sdk-events-overview"}},v=[{value:"Service Registration",id:"service-registration",children:[]},{value:"Service Lifecycle",id:"service-lifecycle",children:[]},{value:"Initialization and Teardown",id:"initialization-and-teardown",children:[]},{value:"Dependency Injection",id:"dependency-injection",children:[]},{value:"Configuration Models",id:"configuration-models",children:[]},{value:"Relevant SDK Samples",id:"relevant-sdk-samples",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],h={toc:v};function g({components:e,...t}){return(0,r.kt)("wrapper",(0,i.Z)({},h,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Services act as a repository of accessible behavior and data, and can be used for a variety of purposes, from implementing commands and operations, to managing shared data, to interfacing with the REST API of an external service."),(0,r.kt)("h2",{id:"service-registration"},"Service Registration"),(0,r.kt)("p",null,"All services need to be registered with Geocortex Mobile. A service is created by extending the ",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceBase")," class and registering the service class with Autofac through an assembly attribute."),(0,r.kt)(p.default,{mdxType:"AutofacSnippet"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"// highlight-next-line\n[assembly: Service(typeof(CustomService), PropertiesAutowired = true)]\nnamespace App1.Services\n{\n    // highlight-next-line\n    class CustomService : ServiceBase\n    {\n        ...\n    }\n}\n")),(0,r.kt)("h2",{id:"service-lifecycle"},"Service Lifecycle"),(0,r.kt)("p",null,"On application load, all services that have been registered with wih Geocortex Mobile are first created and then initialized."),(0,r.kt)("p",null,"Services are destroyed (i.e. the ",(0,r.kt)("inlineCode",{parentName:"p"},"_onDestroy")," method is invoked) when the application is destroyed, e.g. when killing the application or switching applications in Geocortex Go."),(0,r.kt)("h2",{id:"initialization-and-teardown"},"Initialization and Teardown"),(0,r.kt)("p",null,"Services have an initialization method, which can be used to perform asynchronous startup logic, and a teardown method, which can be used to free resources when the application is destroyed."),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Always call ",(0,r.kt)("inlineCode",{parentName:"p"},"base.Dispose(disposing)")," when overriding the ",(0,r.kt)("inlineCode",{parentName:"p"},"Dispose")," method. ",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceBase")," already implements ",(0,r.kt)("inlineCode",{parentName:"p"},"IDisposable")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"IDisposableTracker"),", so only override the ",(0,r.kt)("inlineCode",{parentName:"p"},"Dispose")," method if you have created new managed resources which need to be cleaned up."))),(0,r.kt)("p",null,"To learn more about memory management in Geocortex Mobile, check out ",(0,r.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-memory-leaks"},"this article"),", and the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Conceptual/Disposal"},"relevant SDK sample"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"[assembly: Service(typeof(CustomService), PropertiesAutowired = true)]\nnamespace App1.Services\n{\n    class CustomService : ServiceBase\n    {\n        private bool disposed = false;\n\n        public CustomService()\n            : base()\n        {\n            // On creation logic here\n\n        }\n        protected override async Task DoInitialize()\n        {\n            // Async on initialization logic here\n            return;\n        }\n\n        protected override void Dispose(bool disposing)\n        {\n            if (disposed)\n            {\n                return;\n            }\n\n            if (disposing)\n            {\n                // Clean up managed resources.\n                // ...\n            }\n\n            // Clean up unmanaged resources.\n            // ...\n\n            // highlight-next-line\n            base.Dispose(disposing);\n\n            disposed = true;\n        }\n\n\n    }\n}\n")),(0,r.kt)("h2",{id:"dependency-injection"},"Dependency Injection"),(0,r.kt)("p",null,"Services interact with the larger application by injecting their dependencies. Services can inject commands and operations, other services, and any other class registered with Autofac."),(0,r.kt)("p",null,"The following example injects the UI operations and the dialog controller into a custom service."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Services are not intended to directly interact with each other. Instead, services should ",(0,r.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-commands-operations#implementing-commands-and-operations"},"implement operations")," which can be called by other services to indirectly interact."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"[assembly: Service(typeof(CustomService), PropertiesAutowired = true)]\nnamespace App1.Services\n{\n    class CustomService : ServiceBase\n    {\n        private UIOperations _uiOperations;\n        private IDialogController _dialogController;\n\n        public CustomService(UIOperations uiOperations, IDialogController dialogController)\n            : base()\n        {\n            _uiOperations = uiOperations;\n            _dialogController = dialogController;\n        }\n        ...\n    }\n}\n")),(0,r.kt)("h2",{id:"configuration-models"},"Configuration Models"),(0,r.kt)("p",null,"Like components, services can be configured through the ",(0,r.kt)("a",{parentName:"p",href:"/docs/mobile/configuration-app-config-getting-started"},"app config"),". Services can participate in the app config by creating and injecting the appropriate ",(0,r.kt)("a",{parentName:"p",href:"/docs/mobile/configuration-app-config-reference#app-items"},(0,r.kt)("strong",{parentName:"a"},"item type")),"."),(0,r.kt)("p",null,"Each item type in the application is bound to a class ",(0,r.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-dependency-injection#appitem"},"registered as an ",(0,r.kt)("inlineCode",{parentName:"a"},"AppItem")," with autofac"),". This class instantiates itself with values from the app config in its constructor, acting as a configuration model."),(0,r.kt)("p",null,"A service can consume configuration by injecting the ",(0,r.kt)("inlineCode",{parentName:"p"},"AppItem")," class as a dependency in its constructor."),(0,r.kt)(c.Z,{defaultValue:"service",values:[{label:"Service Configuration Model",value:"model"},{label:"Service",value:"service"},{label:"App Config",value:"config"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"service",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"[assembly: Service(typeof(CustomService), PropertiesAutowired = true)]\nnamespace App1.Services\n{\n    class CustomService : ServiceBase\n    {\n        private IAppItem<CustomServiceSettings> _appItem;\n\n        public CustomService(IAppItem<CustomServiceSettings> appItem)\n            : base()\n        {\n            _appItem = appItem;\n        }\n        protected override async Task DoInitialize()\n        {\n            // highlight-start\n            var settings = await _appItem.ResolveAsync();\n            if (settings == null)\n            {\n                return;\n            }\n\n            Logger.Debug($\"Value of setting is '{settings.SomeSetting}'\");\n            // highlight-end\n        }\n    }\n}\n"))),(0,r.kt)(l.Z,{value:"model",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'// highlight-next-line\n[assembly: AppItem(CustomServiceSettings.AppItemType, typeof(CustomServiceSettings))]\nnamespace App1.Services\n{\n    // highlight-next-line\n    [ServiceAppItem(AppItemType)]\n    public class CustomServiceSettings\n    {\n        // highlight-next-line\n        public const string AppItemType = "custom-service";\n\n        public string SomeSetting { get; set; }\n\n        public CustomServiceSettings()\n        {\n        }\n\n        public CustomServiceSettings(Properties properties)\n        {\n            // highlight-start\n            if (properties is null)\n            {\n                throw new System.ArgumentNullException(nameof(properties));\n            }\n\n            if (properties.TryGetValue("someSetting", out string someSetting))\n            {\n                SomeSetting = someSetting;\n            }\n            // highlight-end\n        }\n    }\n}\n'))),(0,r.kt)(l.Z,{value:"config",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "schemaVersion": "1.0",\n\n    "items": [\n        ...{\n            "$type": "custom-service",\n            "id": "custom-service",\n            "someSetting": "Some Value"\n        }\n    ]\n}\n')))),(0,r.kt)("h2",{id:"relevant-sdk-samples"},"Relevant SDK Samples"),(0,r.kt)("p",null,"Check out the relevant Geocortex Mobile SDK Samples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Custom/Service"},"Custom Service"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/CustomSamples/BasemapToggle"},"Basemap Toggle that uses a Custom Service"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/CustomSamples/BreadCrumbs"},"Breadcrumb Tracker that Uses a Custom Service")))),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)(s.Z,{mdxType:"UseCaseContainer"},(0,r.kt)(o.Z,{title:"Learn how to use Commands and Operations with Services",description:"Learn how to run and implement commands and operations with custom services",link:(0,a.Z)("docs/mobile/sdk-commands-operations"),mdxType:"UseCaseCard"}),(0,r.kt)(o.Z,{title:"Learn about Service Interactions",description:"Learn about how services and components can interact",link:(0,a.Z)("docs/mobile/sdk-component-service-interactions"),mdxType:"UseCaseCard"}),(0,r.kt)(o.Z,{title:"Build a Custom Command with a Custom Service",description:"Follow a step by step guide to building a custom command with a custom service",link:(0,a.Z)("docs/mobile/tutorial-implement-command-operation"),mdxType:"UseCaseCard"}),(0,r.kt)(o.Z,{title:"Build a Service that Manages Dynamic Data",description:"Built a service that manages a dynamic data source and exposes it to components",link:(0,a.Z)("docs/mobile/tutorial-implement-service-fetch-dynamic-data"),mdxType:"UseCaseCard"})))}g.isMDXComponent=!0},1895:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>o,metadata:()=>s,toc:()=>c,default:()=>p});var i=n(2122),r=(n(7294),n(3905));const a={},o=void 0,s={unversionedId:"snippets/autofac-mobile",id:"snippets/autofac-mobile",isDocsHomePage:!1,title:"autofac-mobile",description:"Geocortex Mobile uses Autofac to register, locate, and inject components, services and other classes. See dependency injection for more info.",source:"@site/docs/snippets/autofac-mobile.mdx",sourceDirName:"snippets",slug:"/snippets/autofac-mobile",permalink:"/docs/snippets/autofac-mobile",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/snippets/autofac-mobile.mdx",version:"current",frontMatter:{}},c=[],l={toc:c};function p({components:e,...t}){return(0,r.kt)("wrapper",(0,i.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Geocortex Mobile uses ",(0,r.kt)("a",{parentName:"p",href:"https://autofaccn.readthedocs.io/en/latest/index.html"},"Autofac")," to register, locate, and inject components, services and other classes. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-dependency-injection"},"dependency injection")," for more info."))))}p.isMDXComponent=!0},6010:(e,t,n)=>{"use strict";function i(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:()=>r})}}]);