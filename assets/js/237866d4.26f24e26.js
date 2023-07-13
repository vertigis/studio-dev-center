"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[1466],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(7294),a=n(6010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>k});var o=n(7462),a=n(7294),r=n(6010),i=n(2466),l=n(6550),s=n(1980),c=n(7392),u=n(12);function m(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:a}}=e;return{value:t,label:n,attributes:o,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const o=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(o.location.search);t.set(r,e),o.replace({...o.location,search:t.toString()})}),[r,o])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,r=p(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:r}))),[s,c]=f({queryString:n,groupId:o}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,u.Nk)(n);return[o,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:o}),v=(()=>{const e=s??m;return d({value:e,tabValues:r})?e:null})();(0,a.useLayoutEffect)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),b(e)}),[c,b,r]),tabValues:r}}var v=n(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),o=c[n].value;o!==l&&(m(t),s(o))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:p},i,{className:(0,r.Z)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:o}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function w(e){const t=b(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",h.tabList)},a.createElement(y,(0,o.Z)({},e,t)),a.createElement(g,(0,o.Z)({},e,t)))}function k(e){const t=(0,v.Z)();return a.createElement(w,(0,o.Z)({key:String(t)},e))}},5858:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(9960),a=n(7294),r=n(6010);const i={root:"root_Uwqo"};function l(e){let{title:t,description:n,link:l}=e;return a.createElement("div",{className:(0,r.Z)("card-demo",i.root)},a.createElement("div",{className:"card"},a.createElement("div",{className:"card__header"},a.createElement("h3",null,t)),a.createElement("div",{className:"card__body"},a.createElement("p",null,n)),a.createElement("div",{className:"card__footer"},a.createElement(o.Z,{className:"button button--secondary button--block",to:l},"Get Started"))))}},7467:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(7294);const a={root:"root_vxd5"};function r(e){let{children:t}=e;return o.createElement("div",{className:a.root},t)}},7232:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>h,frontMatter:()=>u,metadata:()=>p,toc:()=>f});var o=n(7462),a=(n(7294),n(3905)),r=n(4996),i=n(4866),l=n(5858),s=n(7467),c=n(5162);const u={title:"Components Overview",sidebar_label:"Overview",description:"VertiGIS Studio Mobile - Overview of components"},m=void 0,p={unversionedId:"mobile/sdk-components-overview",id:"mobile/sdk-components-overview",title:"Components Overview",description:"VertiGIS Studio Mobile - Overview of components",source:"@site/docs/mobile/sdk-components-overview.mdx",sourceDirName:"mobile",slug:"/mobile/sdk-components-overview",permalink:"/docs/mobile/sdk-components-overview",draft:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/sdk-components-overview.mdx",tags:[],version:"current",frontMatter:{title:"Components Overview",sidebar_label:"Overview",description:"VertiGIS Studio Mobile - Overview of components"},sidebar:"mobile",previous:{title:"Commands and Operations",permalink:"/docs/mobile/sdk-commands-operations"},next:{title:"Create a Component",permalink:"/docs/mobile/sdk-components-create"}},d={},f=[{value:"Component Views and Configuration Models",id:"component-views-and-configuration-models",level:2},{value:"Next Steps",id:"next-steps",level:2}],b={toc:f},v="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(v,(0,o.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In VertiGIS Studio Mobile, components are entities which implement UI/UX experiences and the associated logic. An example of a component is an I Want to Menu (IWTM). IWTMs participate in layout, implement custom behavior (display a list when clicked), and participate in app config."),(0,a.kt)("p",null,"Components are only ",(0,a.kt)("strong",{parentName:"p"},"created")," if they participate in the layout - if no component definition exists in the layout, none will be created. Components are ",(0,a.kt)("strong",{parentName:"p"},"initialized")," when they are activated. Multiple instances of the same component will be created if specified in the layout."),(0,a.kt)(i.Z,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"},{label:"UI",value:"ui"}],mdxType:"Tabs"},(0,a.kt)(c.Z,{value:"layout",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="app/layout-large.xml"',title:'"app/layout-large.xml"'},'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd">\n    <map>\n        <iwtm config="iwtm-1" slot="top-left"/>\n        <iwtm config="iwtm-2" slot="top-right"/>\n    </map>\n</layout>\n\n'))),(0,a.kt)(c.Z,{value:"config",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'},'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["mobile", "large"]\n        },\n        {\n            "$type": "menu",\n            "id": "iwtm-1",\n            "items": [\n                {\n                    "id": "return-to-initial-view",\n                    "iconId": "zoom-initial",\n                    "title": "Return to Initial View",\n                    "action": "map.zoom-to-initial-viewpoint",\n                    "$type": "menu-item"\n                }\n            ]\n        },\n        {\n            "$type": "menu",\n            "id": "iwtm-2",\n            "items": [\n                {\n                    "id": "display-alert",\n                    "iconId": "pop-out",\n                    "title": "Display Alert",\n                    "$type": "menu-item",\n                    "action": {\n                        "name": "ui.alert",\n                        "arguments": {\n                            "title": "Alert!",\n                            "message": "You have been alerted."\n                        }\n                    }\n                }\n            ]\n        }\n    ]\n}\n'))),(0,a.kt)(c.Z,{value:"ui",mdxType:"TabItem"},(0,a.kt)("img",{src:(0,r.Z)("img/mobile-sdk-components-simple.png")}))),(0,a.kt)("h2",{id:"component-views-and-configuration-models"},"Component Views and Configuration Models"),(0,a.kt)("p",null,"In order to display in an Application, each component must create a ",(0,a.kt)("inlineCode",{parentName:"p"},"VisualElement"),". This is usually accomplished through a ",(0,a.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-components-reference#xaml-view"},"XAML View"),". Each component can also optionally have an ",(0,a.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-components-reference#configuration-models"},"associated configuration model"),". This model represents settings from the component from the app config JSON, and the component is responsible for consuming this configuration model and passing the appropriate settings along to the view."),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)(s.Z,{mdxType:"UseCaseContainer"},(0,a.kt)(l.Z,{title:"Create a Component",description:"Learn how to create a basic component",link:(0,r.Z)("docs/mobile/sdk-components-create"),mdxType:"UseCaseCard"}),(0,a.kt)(l.Z,{title:"Check out the Component Reference",description:"Take a deep dive into components in the VertiGIS Studio Mobile SDK",link:(0,r.Z)("docs/mobile/sdk-components-reference"),mdxType:"UseCaseCard"})))}h.isMDXComponent=!0}}]);