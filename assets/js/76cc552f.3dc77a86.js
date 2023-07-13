"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[439,2056,7499],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(f,r(r({ref:t},u),{},{components:n})):a.createElement(f,r({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),o=n(6010);const i={tabItem:"tabItem_Ymn6"};function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i.tabItem,r),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),o=n(7294),i=n(6010),r=n(2466),l=n(6550),s=n(1980),p=n(7392),u=n(12);function c(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function m(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,o.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=m(e),[r,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,p]=f({queryString:n,groupId:a}),[c,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),h=(()=>{const e=s??c;return d({value:e,tabValues:i})?e:null})();(0,o.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),g(e)}),[p,g,i]),tabValues:i}}var h=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==l&&(c(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},r,{className:(0,i.Z)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=g(e);return o.createElement("div",{className:(0,i.Z)("tabs-container",b.tabList)},o.createElement(y,(0,a.Z)({},e,t)),o.createElement(k,(0,a.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return o.createElement(v,(0,a.Z)({key:String(t)},e))}},5858:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(9960),o=n(7294),i=n(6010);const r={root:"root_Uwqo"};function l(e){let{title:t,description:n,link:l}=e;return o.createElement("div",{className:(0,i.Z)("card-demo",r.root)},o.createElement("div",{className:"card"},o.createElement("div",{className:"card__header"},o.createElement("h3",null,t)),o.createElement("div",{className:"card__body"},o.createElement("p",null,n)),o.createElement("div",{className:"card__footer"},o.createElement(a.Z,{className:"button button--secondary button--block",to:l},"Get Started"))))}},7467:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294);const o={root:"root_vxd5"};function i(e){let{children:t}=e;return a.createElement("div",{className:o.root},t)}},205:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>d,default:()=>k,frontMatter:()=>m,metadata:()=>f,toc:()=>h});var a=n(7462),o=(n(7294),n(3905)),i=n(4996),r=n(4866),l=n(5162),s=n(5858),p=n(7467),u=n(3659),c=n(3672);const m={title:"App Config",sidebar_label:"Getting Started",description:"VertiGIS Studio Mobile - Learn about VertiGIS Studio Mobile's configuration concepts"},d=void 0,f={unversionedId:"mobile/configuration-app-config-getting-started",id:"mobile/configuration-app-config-getting-started",title:"App Config",description:"VertiGIS Studio Mobile - Learn about VertiGIS Studio Mobile's configuration concepts",source:"@site/docs/mobile/configuration-app-config-getting-started.mdx",sourceDirName:"mobile",slug:"/mobile/configuration-app-config-getting-started",permalink:"/docs/mobile/configuration-app-config-getting-started",draft:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/configuration-app-config-getting-started.mdx",tags:[],version:"current",frontMatter:{title:"App Config",sidebar_label:"Getting Started",description:"VertiGIS Studio Mobile - Learn about VertiGIS Studio Mobile's configuration concepts"},sidebar:"mobile",previous:{title:"Advanced Model Binding",permalink:"/docs/mobile/configuration-advanced-model-binding"},next:{title:"App Config Reference",permalink:"/docs/mobile/configuration-app-config-reference"}},g={},h=[{value:"Anatomy of an App config",id:"anatomy-of-an-app-config",level:2},{value:"Linking Layout to App Config",id:"linking-layout-to-app-config",level:2},{value:"Targeting Components by ID",id:"targeting-components-by-id",level:2},{value:"Example: Basic App Config with IWTM",id:"example-basic-app-config-with-iwtm",level:2},{value:"Relevant SDK Samples",id:"relevant-sdk-samples",level:2},{value:"Next Steps: Commands and Operations",id:"next-steps-commands-and-operations",level:2}],b={toc:h},y="wrapper";function k(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Before learning about app config...",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/key-concepts"},"Key Concepts"),".")),(0,o.kt)("p",null,"While ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/configuration-layout-getting-started"},"layouts")," depict the visual structure of how components are going to appear in the viewer, ",(0,o.kt)("strong",{parentName:"p"},"app config")," is used to define the functional structure within a given component."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Think of the app config as the structural materials for building a house (wood, bricks, etc.) and the layout as the blueprints for the house.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The materials are the fundamental building blocks that create the house itself, and the blueprints allow for them to be structured together into something that people can interact with."))),(0,o.kt)("p",null,"Every component within the viewer that requires functional, compositional content needs to be configured within the viewer's corresponding app config."),(0,o.kt)(c.default,{mdxType:"FollowAlongSnippet"}),(0,o.kt)("h2",{id:"anatomy-of-an-app-config"},"Anatomy of an App config"),(0,o.kt)(u.default,{mdxType:"AppItemSnippet"}),(0,o.kt)("h2",{id:"linking-layout-to-app-config"},"Linking Layout to App Config"),(0,o.kt)("p",null,"Every component in the layout can be linked to app config with the ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," attribute. The ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," attribute is used to identify the item in the app config that has configuration for the component."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you do not provide a ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," attribute for a component, VertiGIS Studio Mobile will attempt to ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-components-reference#component-defaults"},"infer a default value"),".")),(0,o.kt)(r.Z,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"layout",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8" ?>\n<layout xmlns="https://geocortex.com/layout/v1">\n    // highlight-next-line\n    <map config="my-map-config" />\n</layout>\n'))),(0,o.kt)(l.Z,{value:"config",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "map-extension",\n            // highlight-next-line\n            "id": "my-map-config",\n            "onInitialized": [\n                {\n                    "name": "ui.alert",\n                    "arguments": {\n                        "message": "Hello World"\n                    }\n                }\n            ]\n        }\n    ]\n}\n')))),(0,o.kt)("h2",{id:"targeting-components-by-id"},"Targeting Components by ID"),(0,o.kt)("p",null,"Every component can also have an ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," attribute. The ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," attribute uniquely identifies a component within a layout and allows app items to target the component. The ID can be used by ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/configuration-commands-operations"},"commands")," like ",(0,o.kt)("inlineCode",{parentName:"p"},"ui.activate")," to target components, or by commands like ",(0,o.kt)("inlineCode",{parentName:"p"},"run.workflow")," to target a host container component to display workflow UI within."),(0,o.kt)(r.Z,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"},{label:"User Interface",value:"ui"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"layout",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8" ?>\n<layout xmlns="https://geocortex.com/layout/v1"\n        xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n        xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd">\n    // highlight-next-line\n    <gxm:taskbar orientation="vertical" id="taskbar">\n        <map config="default" slot="main">\n            <button icon="info" config="run-workflow" slot="top-center-visible" margin="0.5">Run Workflow in Taskbar</button>\n            <button config="open-dialog" slot="bottom-center-visible" margin="0.5">Open Dialog</button>\n        </map>\n    </gxm:taskbar>\n      // highlight-next-line\n    <dialog id="dialog" active="false">\n        <panel>\n            <button icon="info" config="run-workflow" slot="top-center-visible" margin="0.5">Run Workflow in Taskbar</button>\n        </panel>\n    </dialog>\n</layout>\n'))),(0,o.kt)(l.Z,{value:"config",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "map-extension",\n            "id": "default"\n        },\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["mobile", "large"]\n        },\n        {\n            "$type": "workflow",\n            "id": "demo-workflow",\n            "title": "Demo Workflow",\n            // highlight-next-line\n            "target": "#taskbar",\n            "portalItem": "c3964768dfa84fe5acf7a72ef95dc92b"\n        },\n        {\n            "$type": "menu-item",\n            "id": "run-workflow",\n            "title": "run.workflow",\n            "isEnabled": true,\n            "iconId": "info",\n            "action": {\n                "name": "workflow.run",\n                "arguments": {\n                    "id": "demo-workflow"\n                }\n            }\n        },\n        {\n            "$type": "menu-item",\n            "id": "open-dialog",\n            "title": "Open Dialog",\n            "isEnabled": true,\n            "iconId": "",\n            "action": {\n                "name": "ui.activate",\n                // highlight-next-line\n                "arguments": "dialog"\n            }\n        }\n    ]\n}\n'))),(0,o.kt)(l.Z,{value:"ui",mdxType:"TabItem"},(0,o.kt)("img",{src:(0,i.Z)("img/mobile-config-id-targeting.png")}))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This example uses ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/configuration-commands-operations"},"commands and operations")," to power its behavior.")),(0,o.kt)("h2",{id:"example-basic-app-config-with-iwtm"},"Example: Basic App Config with IWTM"),(0,o.kt)("p",null,"The I Want To Menu (IWTM) gets its functional structure from the app (list items and their functionalities) and its visual structure from the layout."),(0,o.kt)("p",null,"In the following example, the app structures a menu with one button, and the layout creates the IWTM button in the viewer and populates its contents with the corresponding 'menu' item in the app."),(0,o.kt)(r.Z,{defaultValue:"app",values:[{label:"App Config",value:"app"},{label:"Layout",value:"layout"},{label:"User Interface",value:"ui"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"app",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="App1/App1/app.json"',title:'"App1/App1/app.json"'},'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["mobile", "large"]\n        },\n        {\n            "$type": "menu",\n            "id": "iwtm",\n            "items": [\n                {\n                    "title": "Refresh App",\n                    "isEnabled": true,\n                    "iconId": "sync",\n                    "action": "app.refresh"\n                },\n                {\n                    "title": "Display Debug Console",\n                    "isEnabled": true,\n                    "iconId": "debug",\n                    "action": ["debug-console.display"]\n                }\n            ]\n        }\n    ]\n}\n'))),(0,o.kt)(l.Z,{value:"layout",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="App1/App1/layout-large.xml"',title:'"App1/App1/layout-large.xml"'},'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd">\n  <gxm:taskbar id="taskbar" orientation="vertical">\n    \x3c!-- Taskbar main content --\x3e\n    <map slot="main">\n      <stack margin="0.8" slot="top-right" halign="end">\n        <iwtm config="iwtm" >\n          <user slot="bottom"/>\n        </iwtm>\n      </stack>\n    </map>\n  </gxm:taskbar>\n</layout>\n'))),(0,o.kt)(l.Z,{value:"ui",mdxType:"TabItem"},(0,o.kt)("img",{src:(0,i.Z)("img/mobile-iwtm-config.png")}))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<iwtm>")," Component in the layout is bound to the IWTM configuration by the attribute ",(0,o.kt)("inlineCode",{parentName:"p"},'config="iwtm"'),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"iwtm")," corresponds to the ID of the IWTM configuration. All components can be bound to config in this manner, and multiple components can be bound to the same configuration."),(0,o.kt)("p",null,"Each app item has a different ",(0,o.kt)("inlineCode",{parentName:"p"},"$type")," and different configurable properties associated with it. The example application has two items in the app config:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A layout ",(0,o.kt)("inlineCode",{parentName:"li"},"$type")," item which serves as a default layout and references a ",(0,o.kt)("inlineCode",{parentName:"li"},"layout-*.xml")," file"),(0,o.kt)("li",{parentName:"ol"},"A menu ",(0,o.kt)("inlineCode",{parentName:"li"},"$type")," item which provides config for the I Want To Menu in the layout")),(0,o.kt)("admonition",{title:"Important",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The functionality of the ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," attribute is dependent on the fact that IDs across app items of the same type are unique. That is, two items of types ",(0,o.kt)("inlineCode",{parentName:"p"},"layer-extension")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"map-extension")," can both have the ID ",(0,o.kt)("inlineCode",{parentName:"p"},"default"),", but two items of the same type ",(0,o.kt)("inlineCode",{parentName:"p"},"layer-extension")," cannot have the same ID ",(0,o.kt)("inlineCode",{parentName:"p"},"default"),".")),(0,o.kt)("h2",{id:"relevant-sdk-samples"},"Relevant SDK Samples"),(0,o.kt)("p",null,"The VertiGIS Studio Mobile SDK Samples project has a variety of app configuration samples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/AppConfiguration"},"App Configuration Samples"))),(0,o.kt)("h2",{id:"next-steps-commands-and-operations"},"Next Steps: Commands and Operations"),(0,o.kt)("p",null,"This example demonstrated a simple application which has a single menu, but the pattern of loosely coupling layout components with items in app config can allow you to build powerful apps with multiple layouts for different form factors and use cases. What we didn't cover in this example was how the menu items are powered. How can we make a menu item, and more generically, a button press or other app interaction, power actions in the application? The answer is to link app items to commands and operations."),(0,o.kt)(p.Z,{mdxType:"UseCaseContainer"},(0,o.kt)(s.Z,{title:"Commands and Operations",description:"Learn about Commands and Operations and how to configure them.",link:(0,i.Z)("docs/mobile/configuration-commands-operations"),mdxType:"UseCaseCard"}),(0,o.kt)(s.Z,{title:"App Config Reference",description:"Learn more about what you can accomplish with app config.",link:(0,i.Z)("docs/mobile/configuration-app-config-reference"),mdxType:"UseCaseCard"})))}k.isMDXComponent=!0},3672:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const i={},r=void 0,l={unversionedId:"mobile/snippets/follow-along",id:"mobile/snippets/follow-along",title:"follow-along",description:"Check out the Quickstart and edit the default app config and layout.",source:"@site/docs/mobile/snippets/follow-along.mdx",sourceDirName:"mobile/snippets",slug:"/mobile/snippets/follow-along",permalink:"/docs/mobile/snippets/follow-along",draft:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/snippets/follow-along.mdx",tags:[],version:"current",frontMatter:{}},s={},p=[],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Want to follow along?",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-mobile-quickstart"},"Quickstart")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-edit-layout-app-config"},"edit the default app config and layout"),".")))}m.isMDXComponent=!0},3659:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const i={},r=void 0,l={unversionedId:"snippets/app-item",id:"snippets/app-item",title:"app-item",description:"An app config file is composed of a list of app items. App items can potentially be anything. Each app item has an item $type, which viewer is aware of and knows how to locate and load. They usually they represent configuration for components, maps, portal items, or shared data. All item app configuration is specified within the items array of the app.json file.",source:"@site/docs/snippets/app-item.mdx",sourceDirName:"snippets",slug:"/snippets/app-item",permalink:"/docs/snippets/app-item",draft:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/snippets/app-item.mdx",tags:[],version:"current",frontMatter:{}},s={},p=[],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An app config file is composed of a list of ",(0,o.kt)("strong",{parentName:"p"},"app items"),". App items can potentially be anything. Each app item has an ",(0,o.kt)("strong",{parentName:"p"},"item ",(0,o.kt)("inlineCode",{parentName:"strong"},"$type")),", which viewer is aware of and knows how to locate and load. They usually they represent configuration for components, maps, portal items, or shared data. All item app configuration is specified within the ",(0,o.kt)("inlineCode",{parentName:"p"},"items")," array of the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"app.json"))," file."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Each component can only load a certain ",(0,o.kt)("inlineCode",{parentName:"p"},"$type")," of app item which corresponds to it. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"<map>")," components can only load app items of type ",(0,o.kt)("inlineCode",{parentName:"p"},"map-extension")," as their configuration.")))}m.isMDXComponent=!0}}]);