"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[9779,4072],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,v=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return r?a.createElement(v,s(s({ref:t},u),{},{components:r})):a.createElement(v,s({ref:t},u))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(7294),n=r(6010);const i={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:r,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(i.tabItem,s),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>S});var a=r(7462),n=r(7294),i=r(6010),s=r(2466),o=r(6550),l=r(1980),c=r(7392),u=r(12);function m(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??m(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,i=p(e),[s,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[l,c]=v({queryString:r,groupId:a}),[m,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:a}),g=(()=>{const e=l??m;return d({value:e,tabValues:i})?e:null})();(0,n.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),b(e)}),[c,b,i]),tabValues:i}}var g=r(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:r,selectedValue:o,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,s.o5)(),p=e=>{const t=e.currentTarget,r=u.indexOf(t),a=c[r].value;a!==o&&(m(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:s}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:p},s,{className:(0,i.Z)("tabs__item",h.tabItem,s?.className,{"tabs__item--active":o===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:a}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=b(e);return n.createElement("div",{className:(0,i.Z)("tabs-container",h.tabList)},n.createElement(f,(0,a.Z)({},e,t)),n.createElement(k,(0,a.Z)({},e,t)))}function S(e){const t=(0,g.Z)();return n.createElement(y,(0,a.Z)({key:String(t)},e))}},5858:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(9960),n=r(7294),i=r(6010);const s={root:"root_Uwqo"};function o(e){let{title:t,description:r,link:o}=e;return n.createElement("div",{className:(0,i.Z)("card-demo",s.root)},n.createElement("div",{className:"card"},n.createElement("div",{className:"card__header"},n.createElement("h3",null,t)),n.createElement("div",{className:"card__body"},n.createElement("p",null,r)),n.createElement("div",{className:"card__footer"},n.createElement(a.Z,{className:"button button--secondary button--block",to:o},"Get Started"))))}},7467:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(7294);const n={root:"root_vxd5"};function i(e){let{children:t}=e;return a.createElement("div",{className:n.root},t)}},5696:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>p,default:()=>f,frontMatter:()=>m,metadata:()=>d,toc:()=>b});var a=r(7462),n=(r(7294),r(3905)),i=r(4866),s=r(5162),o=r(4996),l=r(7467),c=r(5858),u=r(9096);const m={title:"Create a Service",description:"VertiGIS Studio Mobile - Create a service using the VertiGIS Studio Mobile SDK Quickstart"},p=void 0,d={unversionedId:"mobile/sdk-services-create",id:"mobile/sdk-services-create",title:"Create a Service",description:"VertiGIS Studio Mobile - Create a service using the VertiGIS Studio Mobile SDK Quickstart",source:"@site/docs/mobile/sdk-services-create.mdx",sourceDirName:"mobile",slug:"/mobile/sdk-services-create",permalink:"/docs/mobile/sdk-services-create",draft:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/sdk-services-create.mdx",tags:[],version:"current",frontMatter:{title:"Create a Service",description:"VertiGIS Studio Mobile - Create a service using the VertiGIS Studio Mobile SDK Quickstart"},sidebar:"mobile",previous:{title:"Overview",permalink:"/docs/mobile/sdk-services-overview"},next:{title:"Service Reference",permalink:"/docs/mobile/sdk-services-reference"}},v={},b=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Basic Service",id:"basic-service",level:2},{value:"Create a Custom Command",id:"create-a-custom-command",level:2},{value:"Relevant SDK Samples",id:"relevant-sdk-samples",level:2},{value:"Next Steps",id:"next-steps",level:2}],g={toc:b},h="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(h,(0,a.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"Important",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This tutorial assumes you are using windows and can run the Universal Windows Version of VertiGIS Studio Mobile.")),(0,n.kt)("p",null,"Sometimes, you may have logic or data that needs to be shared by multiple components across an app. In VertiGIS Studio Mobile, ",(0,n.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-services-overview"},"services")," are shared singletons that can register global ",(0,n.kt)("a",{parentName:"p",href:"/docs/mobile/configuration-commands-operations"},"commands and operations"),", be injected into components, run background tasks, and more."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)(u.default,{mdxType:"QuickstartPrereqsSnippet"}),(0,n.kt)("h2",{id:"basic-service"},"Basic Service"),(0,n.kt)("p",null,"Create a new file ",(0,n.kt)("inlineCode",{parentName:"p"},"services/CustomService.cs")," under the platform agnostic project.\nIn the file, add a new service class ",(0,n.kt)("inlineCode",{parentName:"p"},"CustomService")," and register it with VertiGIS Studio Mobile using an assembly attribute."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="App1/App1/services/CustomService.cs',title:'"App1/App1/services/CustomService.cs'},"using App1.Services;\nusing VertiGIS.Mobile.Composition;\nusing VertiGIS.Mobile.Composition.Services;\nusing System.Threading.Tasks;\n\n[assembly: Service(typeof(CustomService))]\nnamespace App1.Services\n{\n    class CustomService : ServiceBase\n    {\n        public CustomService()\n            :base()\n        {\n        }\n    }\n}\n")),(0,n.kt)("h2",{id:"create-a-custom-command"},"Create a Custom Command"),(0,n.kt)("p",null,"Custom Services can register custom commands and operations. The following example shows how a custom service can register a command with the ",(0,n.kt)("inlineCode",{parentName:"p"},"Operations Registry"),", and how that command can be configured to run on a button press using layout and app config."),(0,n.kt)(i.Z,{defaultValue:"service",values:[{label:"Service",value:"service"},{label:"Layout",value:"layout"},{label:"App Config",value:"config"},{label:"User Interface",value:"ui"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"service",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="App1/App1/services/CustomService.cs',title:'"App1/App1/services/CustomService.cs'},'using App1.Services;\nusing VertiGIS.Mobile.Composition;\nusing VertiGIS.Mobile.Composition.Messaging;\nusing VertiGIS.Mobile.Composition.Services;\nusing System.Threading.Tasks;\n\n[assembly: Service(typeof(CustomService))]\nnamespace App1.Services\n{\n    public class CustomService : ServiceBase\n    {\n        public CustomService(IOperationRegistry operationRegistry)\n            : base()\n        {\n            // highlight-start\n            operationRegistry.VoidOperation<string>("custom.alert").RegisterExecute((string customMessage) =>\n            {\n                return Xamarin.Forms.Application.Current.MainPage.DisplayAlert("Custom Alert", customMessage, "Cancel");\n            }, this);\n            // highlight-end\n\n        }\n    }\n}\n'))),(0,n.kt)(s.Z,{value:"layout",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="App1/App1/layout-large.xml"',title:'"App1/App1/layout-large.xml"'},'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd">\n    <map id="map1" >\n        // highlight-next-line\n        <button id="custom-alert" config="custom-alert" style="map-widget" show-title="true" margin="0.3" slot="top-center"/>\n    </map>\n</layout>\n\n'))),(0,n.kt)(s.Z,{value:"config",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="App1/App1/app.json"',title:'"App1/App1/app.json"'},'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "id": "desktop-layout",\n            "$type": "layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["medium", "large"]\n        },\n        // highlight-start\n        {\n            "id": "custom-alert",\n            "iconId": "warning",\n            "title": "Custom Alert",\n            "action": {\n                "name": "custom.alert",\n                "arguments": "My Custom Message"\n            },\n            "$type": "menu-item"\n        }\n        // highlight-end\n    ]\n}\n'))),(0,n.kt)(s.Z,{value:"ui",mdxType:"TabItem"},(0,n.kt)("img",{src:(0,o.Z)("img/mobile-sdk-services-create.png"),alt:"Custom Component with Text Block"}))),(0,n.kt)("h2",{id:"relevant-sdk-samples"},"Relevant SDK Samples"),(0,n.kt)("p",null,"Check out the relevant VertiGIS Studio Mobile SDK Samples:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Custom/Service"},"Custom Service"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/CustomSamples/BasemapToggle"},"Basemap Toggle that uses a Custom Service"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/CustomSamples/BreadCrumbs"},"Breadcrumb Tracker that Uses a Custom Service")))),(0,n.kt)("h2",{id:"next-steps"},"Next Steps"),(0,n.kt)(l.Z,{mdxType:"UseCaseContainer"},(0,n.kt)(c.Z,{title:"Learn More About Services",description:"Take a deep dive into services in the VertiGIS Studio Mobile SDK",link:(0,o.Z)("docs/mobile/sdk-services-reference"),mdxType:"UseCaseCard"}),(0,n.kt)(c.Z,{title:"Build a Service that Manages Dynamic Data",description:"Built a service that manages a dynamic data source and exposes it to components",link:(0,o.Z)("docs/mobile/tutorial-implement-service-fetch-dynamic-data"),mdxType:"UseCaseCard"})))}f.isMDXComponent=!0},9096:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const i={},s=void 0,o={unversionedId:"mobile/snippets/quickstart-prereqs",id:"mobile/snippets/quickstart-prereqs",title:"quickstart-prereqs",description:"Check out and setup the VertiGIS Studio Mobile SDK Quickstart project.",source:"@site/docs/mobile/snippets/quickstart-prereqs.mdx",sourceDirName:"mobile/snippets",slug:"/mobile/snippets/quickstart-prereqs",permalink:"/docs/mobile/snippets/quickstart-prereqs",draft:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/snippets/quickstart-prereqs.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c},m="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Check out and setup the ",(0,n.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-overview"},"VertiGIS Studio Mobile SDK Quickstart project"),"."))}p.isMDXComponent=!0}}]);