"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[7056,6628,2464],{1468:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=n(7624),r=n(2172);const s={},a=void 0,o={id:"mobile/snippets/quickstart-prereqs",title:"quickstart-prereqs",description:"Check out and setup the VertiGIS Studio Mobile SDK Quickstart project.",source:"@site/docs/mobile/snippets/quickstart-prereqs.mdx",sourceDirName:"mobile/snippets",slug:"/mobile/snippets/quickstart-prereqs",permalink:"/docs/mobile/snippets/quickstart-prereqs",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/snippets/quickstart-prereqs.mdx",tags:[],version:"current",frontMatter:{}},c={},l=[];function d(e){const t={a:"a",p:"p",...(0,r.M)(),...e.components};return(0,i.jsxs)(t.p,{children:["Check out and setup the ",(0,i.jsx)(t.a,{href:"/docs/mobile/sdk-overview",children:"VertiGIS Studio Mobile SDK Quickstart project"}),"."]})}function u(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>v,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var i=n(7624),r=n(2172),s=n(964),a=n(7160),o=n(7528),c=(n(76),n(1468));n(1268),n(5388);const l={title:"Build a Service that Fetches Dynamic Data",description:"VertiGIS Studio Mobile - Implement a custom Service"},d=void 0,u={id:"mobile/tutorial-implement-service-fetch-dynamic-data",title:"Build a Service that Fetches Dynamic Data",description:"VertiGIS Studio Mobile - Implement a custom Service",source:"@site/docs/mobile/tutorial-implement-service-fetch-dynamic-data.mdx",sourceDirName:"mobile",slug:"/mobile/tutorial-implement-service-fetch-dynamic-data",permalink:"/docs/mobile/tutorial-implement-service-fetch-dynamic-data",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/tutorial-implement-service-fetch-dynamic-data.mdx",tags:[],version:"current",frontMatter:{title:"Build a Service that Fetches Dynamic Data",description:"VertiGIS Studio Mobile - Implement a custom Service"},sidebar:"mobile",previous:{title:"Pull Component Data from App Config",permalink:"/docs/mobile/tutorial-implement-component-participate-app-config"},next:{title:"Commands and Operations Reference",permalink:"/docs/mobile/api-commands-operations"}},p={},m=[{value:"Prerequisites",id:"prerequisites",level:2},...c.toc,{value:"Create a New Service",id:"create-a-new-service",level:2},{value:"Relevant SDK Samples",id:"relevant-sdk-samples",level:2},{value:"Next Steps",id:"next-steps",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["When extending VertiGIS Studio Mobile, you may find yourself creating multiple ",(0,i.jsx)(t.a,{href:"/docs/mobile/sdk-components-overview",children:"components"})," that have a shared concern, like a data source, or a REST endpoint call. Shared concerns like this present a good use case for creating a custom ",(0,i.jsx)(t.a,{href:"/docs/mobile/sdk-services-overview",children:"service"}),". Implementing a custom service in VertiGIS Studio Mobile allows you to implement logic and shared resources that are available on startup to any component. Custom Services are also the recommended way of registering implementations for ",(0,i.jsx)(t.a,{href:"/docs/mobile/sdk-commands-operations#implementing-commands-and-operations",children:"custom commands and operations"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"This article will guide you through creating a custom service that fetches data from a dynamic source and delivers it to components through an operation."}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(c.default,{}),"\n",(0,i.jsx)(t.h2,{id:"create-a-new-service",children:"Create a New Service"}),"\n",(0,i.jsxs)(t.p,{children:["Create a new file ",(0,i.jsx)(t.code,{children:"services/CustomService.cs"})," under the platform agnostic project.\nIn the file, add a new component class ",(0,i.jsx)(t.code,{children:"CustomService"})," and ",(0,i.jsxs)(t.a,{href:"/docs/mobile/sdk-dependency-injection",children:["register it with ",(0,i.jsx)(t.strong,{children:"Autofac"})]}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cs",metastring:'title="App1/App1/services/CustomService.cs"',children:"using App1.Services;\nusing VertiGIS.Mobile.Composition;\nusing VertiGIS.Mobile.Composition.Services;\nusing System.Threading.Tasks;\n\n// highlight-next-line\n[assembly: Service(typeof(CustomService), PropertiesAutowired = true)]\nnamespace App1.Services\n{\n    // highlight-next-line\n    class CustomService : ServiceBase\n    {\n        public CustomService()\n            :base()\n        {\n            // on creation logic here\n        }\n        protected override Task DoInitialize()\n        {\n            // on initialization logic here\n            return Task.CompletedTask;\n        }\n    }\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"Next, we can mock a dynamically updating data source that the service consumes. In a real application, this might be a webhook, or an RSS feed, or database."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["It's essential to properly dispose of any managed resources, like the background thread in this example, to prevent ",(0,i.jsx)(t.a,{href:"/docs/mobile/sdk-memory-leaks",children:"memory leaks"}),"."]})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cs",metastring:'title="App1/App1/services/CustomService.cs"',children:'using App1.Services;\nusing VertiGIS.Mobile.Composition;\nusing VertiGIS.Mobile.Composition.Logging;\nusing VertiGIS.Mobile.Composition.Services;\nusing System.Threading;\nusing System.Threading.Tasks;\n\n[assembly: Service(typeof(CustomService), PropertiesAutowired = true)]\nnamespace App1.Services\n{\n    class CustomService : ServiceBase\n    {\n        private bool disposed = false;\n        private Thread dataUpdater;\n        private int data = 0;\n        private async void _dataUpdater()\n        {\n            try\n            {\n                while (true)\n                {\n                    // Fetch data from a rest endpoint\n                    await Task.Run(() =>\n                    {\n                        // await data.fetch()\n                        data = data + 1;\n                        Logger.Debug($"Custom Service fetched new data. Current Value: {data}");\n                    });\n                    Thread.Sleep(3000);\n                }\n            }\n            catch (ThreadAbortException)\n            {\n                return;\n            }\n        }\n\n        public CustomService()\n            : base()\n        {\n            dataUpdater = new Thread(new ThreadStart(_dataUpdater));\n        }\n        protected override Task DoInitialize()\n        {\n            dataUpdater.Start();\n            return Task.CompletedTask;\n        }\n\n        protected override void Dispose(bool disposing)\n        {\n            if (disposed)\n            {\n                return;\n            }\n\n            if (disposing)\n            {\n                dataUpdater.Abort();\n            }\n\n            disposed = true;\n            base.Dispose(disposing);\n        }\n    }\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["To expose this data source to other components and services, we can create a new operation, ",(0,i.jsx)(t.code,{children:"custom-data.fetch"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["First, create a new ",(0,i.jsx)(t.a,{href:"/docs/mobile/sdk-commands-operations#registration-with-operationsbase",children:"operations class"})," and define a new operation."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cs",metastring:'title="App1/App1/services/CustomOperations.cs"',children:'using App1.Operations;\nusing VertiGIS.Mobile.Composition;\nusing VertiGIS.Mobile.Composition.Messaging;\nusing VertiGIS.Mobile.Infrastructure.Messaging;\n\n// highlight-next-line\n[assembly: Export(typeof(CustomOperations), SingleInstance = true)]\nnamespace App1.Operations\n{\n    class CustomOperations : OperationsBase\n    {\n        // highlight-next-line\n        public IOperation<int> FetchCustomData=> GetOperation<int>("custom-data.fetch");\n\n        public CustomOperations(IOperationRegistry operationRegistry)\n            : base(operationRegistry)\n        {\n        }\n    }\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Next, ",(0,i.jsx)(t.a,{href:"/docs/mobile/sdk-dependency-injection",children:"inject the operation"})," into your custom service and register an implementation that returns the dynamic data."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cs",metastring:'title="App1/App1/services/CustomService.cs"',children:'using App1.Operations;\nusing App1.Services;\nusing VertiGIS.Mobile.Composition;\nusing VertiGIS.Mobile.Composition.Logging;\nusing VertiGIS.Mobile.Composition.Messaging;\nusing VertiGIS.Mobile.Composition.Services;\nusing System.Threading;\nusing System.Threading.Tasks;\n\n[assembly: Service(typeof(CustomService), PropertiesAutowired = true)]\nnamespace App1.Services\n{\n    class CustomService : ServiceBase\n    {\n        private Thread dataUpdater;\n        private int data = 0;\n        private async void _dataUpdater()\n        {\n            try\n            {\n                while (true)\n                {\n                    // Fetch data from a rest endpoint\n                    await Task.Run(() =>\n                    {\n                        // await data.fetch()\n                        data = data + 1;\n                        Logger.Debug($"Custom Service fetched new data. Current Value: {data}");\n                    });\n                    Thread.Sleep(3000);\n                }\n            }\n            catch (ThreadAbortException)\n            {\n                return;\n            }\n\n        }\n\n        // highlight-start\n        private async Task<int> FetchData()\n        {\n            return data;\n        }\n        // highlight-end\n\n        public CustomService(CustomOperations customOperations)\n            :base()\n        {\n            // on creation logic here\n            // highlight-next-line\n            customOperations.FetchCustomData.RegisterExecute(FetchData, this);\n            dataUpdater = new Thread(new ThreadStart(_dataUpdater));\n        }\n        protected override Task DoInitialize()\n        {\n            // on initialization logic here\n            dataUpdater.Start();\n            return Task.CompletedTask;\n        }\n\n        protected override void Dispose(bool disposing)\n        {\n            // dispose of any held resources here\n            dataUpdater.Abort();\n            base.Dispose(disposing);\n\n        }\n\n\n    }\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"You've now built a custom service that fetches from a dynamic data source and exposes that data to other components! You could take this farther by creating an event that informs components and services when the data has changed, or returning a reference from the fetch data operation that can be observed for changes."}),"\n",(0,i.jsx)(t.h2,{id:"relevant-sdk-samples",children:"Relevant SDK Samples"}),"\n",(0,i.jsx)(t.p,{children:"Check out the relevant VertiGIS Studio Mobile SDK Samples:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Custom/Service",children:"Custom Service"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/CustomSamples/BasemapToggle",children:"Basemap Toggle that uses a Custom Service"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsx)(a.c,{children:(0,i.jsx)(o.c,{title:"Learn More About Services",description:"Take a deep dive into services in the VertiGIS Studio Mobile SDK",link:(0,s.c)("docs/mobile/sdk-services-reference")})})]})}function v(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},76:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=n(7624),r=n(2172);const s={},a=void 0,o={id:"snippets/autofac-mobile",title:"autofac-mobile",description:"VertiGIS Studio Mobile uses Autofac to register, locate, and inject components, services and other classes. See dependency injection for more info.",source:"@site/docs/snippets/autofac-mobile.mdx",sourceDirName:"snippets",slug:"/snippets/autofac-mobile",permalink:"/docs/snippets/autofac-mobile",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/snippets/autofac-mobile.mdx",tags:[],version:"current",frontMatter:{}},c={},l=[];function d(e){const t={a:"a",admonition:"admonition",p:"p",...(0,r.M)(),...e.components};return(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["VertiGIS Studio Mobile uses ",(0,i.jsx)(t.a,{href:"https://autofaccn.readthedocs.io/en/latest/index.html",children:"Autofac"})," to register, locate, and inject components, services and other classes. See ",(0,i.jsx)(t.a,{href:"/docs/mobile/sdk-dependency-injection",children:"dependency injection"})," for more info."]})})}function u(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5388:(e,t,n)=>{n.d(t,{c:()=>a});n(1504);var i=n(4064);const r={tabItem:"tabItem_Ymn6"};var s=n(7624);function a({children:e,hidden:t,className:n}){return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.c)(r.tabItem,n),hidden:t,children:e})}},1268:(e,t,n)=>{n.d(t,{c:()=>y});var i=n(1504),r=n(4064),s=n(3943),a=n(5592),o=n(5288),c=n(632),l=n(7128),d=n(1148);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return u(e).map((({props:{value:e,label:t,attributes:n,default:i}})=>({value:e,label:t,attributes:n,default:i})))}(n);return function(e){const t=(0,l.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m({value:e,tabValues:t}){return t.some((t=>t.value===e))}function h({queryString:e=!1,groupId:t}){const n=(0,a.Uz)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,c._M)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=p(e),[a,c]=(0,i.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[l,u]=h({queryString:n,groupId:r}),[v,g]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,r]=(0,d.IN)(t);return[n,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),b=(()=>{const e=l??v;return m({value:e,tabValues:s})?e:null})();(0,o.c)((()=>{b&&c(b)}),[b]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),g(e)}),[u,g,s]),tabValues:s}}var g=n(3664);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(7624);function S({className:e,block:t,selectedValue:n,selectValue:i,tabValues:a}){const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.MV)(),l=e=>{const t=e.currentTarget,r=o.indexOf(t),s=a[r].value;s!==n&&(c(t),i(s))},d=e=>{let t=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.c)("tabs",{"tabs--block":t},e),children:a.map((({value:e,label:t,attributes:i})=>(0,f.jsx)("li",{role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,ref:e=>o.push(e),onKeyDown:d,onClick:l,...i,className:(0,r.c)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":n===e}),children:t??e},e)))})}function x({lazy:e,children:t,selectedValue:n}){const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function j(e){const t=v(e);return(0,f.jsxs)("div",{className:(0,r.c)("tabs-container",b.tabList),children:[(0,f.jsx)(S,{...e,...t}),(0,f.jsx)(x,{...e,...t})]})}function y(e){const t=(0,g.c)();return(0,f.jsx)(j,{...e,children:u(e.children)},String(t))}},7528:(e,t,n)=>{n.d(t,{c:()=>o});var i=n(867),r=(n(1504),n(4971));const s={root:"root_Uwqo"};var a=n(7624);function o({title:e,description:t,link:n}){return(0,a.jsx)("div",{className:(0,r.c)("card-demo",s.root),children:(0,a.jsxs)("div",{className:"card",children:[(0,a.jsx)("div",{className:"card__header",children:(0,a.jsx)("h3",{children:e})}),(0,a.jsx)("div",{className:"card__body",children:(0,a.jsx)("p",{children:t})}),(0,a.jsx)("div",{className:"card__footer",children:(0,a.jsx)(i.c,{className:"button button--secondary button--block",to:n,children:"Get Started"})})]})})}},7160:(e,t,n)=>{n.d(t,{c:()=>s});n(1504);const i={root:"root_vxd5"};var r=n(7624);function s({children:e}){return(0,r.jsx)("div",{className:i.root,children:e})}},4971:(e,t,n)=>{function i(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}n.d(t,{c:()=>r});const r=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(r&&(r+=" "),r+=t);return r}},2172:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>a});var i=n(1504);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);