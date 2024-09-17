"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[7620,6628],{8404:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>g,frontMatter:()=>d,metadata:()=>p,toc:()=>v});var r=s(7624),n=s(2172),i=s(1268),a=s(5388),o=s(964),c=s(7160),l=s(7528),u=s(1468);const d={title:"Create a Service",description:"VertiGIS Studio Mobile - Create a service using the VertiGIS Studio Mobile SDK Quickstart"},m=void 0,p={id:"mobile/sdk-services-create",title:"Create a Service",description:"VertiGIS Studio Mobile - Create a service using the VertiGIS Studio Mobile SDK Quickstart",source:"@site/docs/mobile/sdk-services-create.mdx",sourceDirName:"mobile",slug:"/mobile/sdk-services-create",permalink:"/docs/mobile/sdk-services-create",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/sdk-services-create.mdx",tags:[],version:"current",frontMatter:{title:"Create a Service",description:"VertiGIS Studio Mobile - Create a service using the VertiGIS Studio Mobile SDK Quickstart"},sidebar:"mobile",previous:{title:"Overview",permalink:"/docs/mobile/sdk-services-overview"},next:{title:"Service Reference",permalink:"/docs/mobile/sdk-services-reference"}},h={},v=[{value:"Prerequisites",id:"prerequisites",level:2},...u.toc,{value:"Basic Service",id:"basic-service",level:2},{value:"Create a Custom Command",id:"create-a-custom-command",level:2},{value:"Relevant SDK Samples",id:"relevant-sdk-samples",level:2},{value:"Next Steps",id:"next-steps",level:2}];function b(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{title:"Important",type:"info",children:(0,r.jsx)(t.p,{children:"This tutorial assumes you are using windows and can run the Universal Windows Version of VertiGIS Studio Mobile."})}),"\n",(0,r.jsxs)(t.p,{children:["Sometimes, you may have logic or data that needs to be shared by multiple components across an app. In VertiGIS Studio Mobile, ",(0,r.jsx)(t.a,{href:"/docs/mobile/sdk-services-overview",children:"services"})," are shared singletons that can register global ",(0,r.jsx)(t.a,{href:"/docs/mobile/configuration-commands-operations",children:"commands and operations"}),", be injected into components, run background tasks, and more."]}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(u.default,{}),"\n",(0,r.jsx)(t.h2,{id:"basic-service",children:"Basic Service"}),"\n",(0,r.jsxs)(t.p,{children:["Create a new file ",(0,r.jsx)(t.code,{children:"services/CustomService.cs"})," under the platform agnostic project.\nIn the file, add a new service class ",(0,r.jsx)(t.code,{children:"CustomService"})," and register it with VertiGIS Studio Mobile using an assembly attribute."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cs",metastring:'title="App1/App1/services/CustomService.cs',children:"using App1.Services;\nusing VertiGIS.Mobile.Composition;\nusing VertiGIS.Mobile.Composition.Services;\nusing System.Threading.Tasks;\n\n[assembly: Service(typeof(CustomService))]\nnamespace App1.Services\n{\n    class CustomService : ServiceBase\n    {\n        public CustomService()\n            :base()\n        {\n        }\n    }\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"create-a-custom-command",children:"Create a Custom Command"}),"\n",(0,r.jsxs)(t.p,{children:["Custom Services can register custom commands and operations. The following example shows how a custom service can register a command with the ",(0,r.jsx)(t.code,{children:"Operations Registry"}),", and how that command can be configured to run on a button press using layout and app config."]}),"\n",(0,r.jsxs)(i.c,{defaultValue:"service",values:[{label:"Service",value:"service"},{label:"Layout",value:"layout"},{label:"App Config",value:"config"},{label:"User Interface",value:"ui"}],children:[(0,r.jsx)(a.c,{value:"service",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cs",metastring:'title="App1/App1/services/CustomService.cs',children:'using App1.Services;\nusing VertiGIS.Mobile.Composition;\nusing VertiGIS.Mobile.Composition.Messaging;\nusing VertiGIS.Mobile.Composition.Services;\nusing System.Threading.Tasks;\n\n[assembly: Service(typeof(CustomService))]\nnamespace App1.Services\n{\n    public class CustomService : ServiceBase\n    {\n        public CustomService(IOperationRegistry operationRegistry)\n            : base()\n        {\n            // highlight-start\n            operationRegistry.VoidOperation<string>("custom.alert").RegisterExecute((string customMessage) =>\n            {\n                return Xamarin.Forms.Application.Current.MainPage.DisplayAlert("Custom Alert", customMessage, "Cancel");\n            }, this);\n            // highlight-end\n\n        }\n    }\n}\n'})})}),(0,r.jsx)(a.c,{value:"layout",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",metastring:'title="App1/App1/layout-large.xml"',children:'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd">\n\t<map id="map1" >\n        // highlight-next-line\n\t\t<button id="custom-alert" config="custom-alert" style="map-widget" show-title="true" margin="0.3" slot="top-center"/>\n\t</map>\n</layout>\n\n'})})}),(0,r.jsx)(a.c,{value:"config",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",metastring:'title="App1/App1/app.json"',children:'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "id": "desktop-layout",\n            "$type": "layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["medium", "large"]\n        },\n        // highlight-start\n        {\n            "id": "custom-alert",\n            "iconId": "warning",\n            "title": "Custom Alert",\n            "action": {\n                "name": "custom.alert",\n                "arguments": "My Custom Message"\n            },\n            "$type": "menu-item"\n        }\n        // highlight-end\n    ]\n}\n'})})}),(0,r.jsx)(a.c,{value:"ui",children:(0,r.jsx)("img",{src:(0,o.c)("img/mobile-sdk-services-create.png"),alt:"Custom Component with Text Block"})})]}),"\n",(0,r.jsx)(t.h2,{id:"relevant-sdk-samples",children:"Relevant SDK Samples"}),"\n",(0,r.jsx)(t.p,{children:"Check out the relevant VertiGIS Studio Mobile SDK Samples:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/vertigis/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Custom/Service",children:"Custom Service"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/vertigis/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/CustomSamples/BasemapToggle",children:"Basemap Toggle that uses a Custom Service"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/vertigis/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/CustomSamples/BreadCrumbs",children:"Breadcrumb Tracker that Uses a Custom Service"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,r.jsxs)(c.c,{children:[(0,r.jsx)(l.c,{title:"Learn More About Services",description:"Take a deep dive into services in the VertiGIS Studio Mobile SDK",link:(0,o.c)("docs/mobile/sdk-services-reference")}),(0,r.jsx)(l.c,{title:"Build a Service that Manages Dynamic Data",description:"Built a service that manages a dynamic data source and exposes it to components",link:(0,o.c)("docs/mobile/tutorial-implement-service-fetch-dynamic-data")})]})]})}function g(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}},1468:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=s(7624),n=s(2172);const i={},a=void 0,o={id:"mobile/snippets/quickstart-prereqs",title:"quickstart-prereqs",description:"Check out and setup the VertiGIS Studio Mobile SDK Quickstart project.",source:"@site/docs/mobile/snippets/quickstart-prereqs.mdx",sourceDirName:"mobile/snippets",slug:"/mobile/snippets/quickstart-prereqs",permalink:"/docs/mobile/snippets/quickstart-prereqs",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/snippets/quickstart-prereqs.mdx",tags:[],version:"current",frontMatter:{}},c={},l=[];function u(e){const t={a:"a",p:"p",...(0,n.M)(),...e.components};return(0,r.jsxs)(t.p,{children:["Check out and setup the ",(0,r.jsx)(t.a,{href:"/docs/mobile/sdk-overview",children:"VertiGIS Studio Mobile SDK Quickstart project"}),"."]})}function d(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},5388:(e,t,s)=>{s.d(t,{c:()=>a});s(1504);var r=s(4064);const n={tabItem:"tabItem_Ymn6"};var i=s(7624);function a({children:e,hidden:t,className:s}){return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.c)(n.tabItem,s),hidden:t,children:e})}},1268:(e,t,s)=>{s.d(t,{c:()=>y});var r=s(1504),n=s(4064),i=s(3943),a=s(5592),o=s(5288),c=s(632),l=s(7128),u=s(1148);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:s}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((({props:{value:e,label:t,attributes:s,default:r}})=>({value:e,label:t,attributes:s,default:r})))}(s);return function(e){const t=(0,l.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function p({value:e,tabValues:t}){return t.some((t=>t.value===e))}function h({queryString:e=!1,groupId:t}){const s=(0,a.Uz)(),n=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,c._M)(n),(0,r.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(s.location.search);t.set(n,e),s.replace({...s.location,search:t.toString()})}),[n,s])]}function v(e){const{defaultValue:t,queryString:s=!1,groupId:n}=e,i=m(e),[a,c]=(0,r.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:i}))),[l,d]=h({queryString:s,groupId:n}),[v,b]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[s,n]=(0,u.IN)(t);return[s,(0,r.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:n}),g=(()=>{const e=l??v;return p({value:e,tabValues:i})?e:null})();(0,o.c)((()=>{g&&c(g)}),[g]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=s(3664);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(7624);function x({className:e,block:t,selectedValue:s,selectValue:r,tabValues:a}){const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.MV)(),l=e=>{const t=e.currentTarget,n=o.indexOf(t),i=a[n].value;i!==s&&(c(t),r(i))},u=e=>{let t=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;t=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;t=o[s]??o[o.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.c)("tabs",{"tabs--block":t},e),children:a.map((({value:e,label:t,attributes:r})=>(0,f.jsx)("li",{role:"tab",tabIndex:s===e?0:-1,"aria-selected":s===e,ref:e=>o.push(e),onKeyDown:u,onClick:l,...r,className:(0,n.c)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":s===e}),children:t??e},e)))})}function S({lazy:e,children:t,selectedValue:s}){const n=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=n.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function j(e){const t=v(e);return(0,f.jsxs)("div",{className:(0,n.c)("tabs-container",g.tabList),children:[(0,f.jsx)(x,{...e,...t}),(0,f.jsx)(S,{...e,...t})]})}function y(e){const t=(0,b.c)();return(0,f.jsx)(j,{...e,children:d(e.children)},String(t))}},7528:(e,t,s)=>{s.d(t,{c:()=>o});var r=s(867),n=(s(1504),s(4971));const i={root:"root_Uwqo"};var a=s(7624);function o({title:e,description:t,link:s}){return(0,a.jsx)("div",{className:(0,n.c)("card-demo",i.root),children:(0,a.jsxs)("div",{className:"card",children:[(0,a.jsx)("div",{className:"card__header",children:(0,a.jsx)("h3",{children:e})}),(0,a.jsx)("div",{className:"card__body",children:(0,a.jsx)("p",{children:t})}),(0,a.jsx)("div",{className:"card__footer",children:(0,a.jsx)(r.c,{className:"button button--secondary button--block",to:s,children:"Get Started"})})]})})}},7160:(e,t,s)=>{s.d(t,{c:()=>i});s(1504);const r={root:"root_vxd5"};var n=s(7624);function i({children:e}){return(0,n.jsx)("div",{className:r.root,children:e})}},4971:(e,t,s)=>{function r(e){var t,s,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(s=r(e[t]))&&(n&&(n+=" "),n+=s);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}s.d(t,{c:()=>n});const n=function(){for(var e,t,s=0,n="";s<arguments.length;)(e=arguments[s++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},2172:(e,t,s)=>{s.d(t,{I:()=>o,M:()=>a});var r=s(1504);const n={},i=r.createContext(n);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);