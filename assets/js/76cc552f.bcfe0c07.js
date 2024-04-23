"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[3120,376,9560],{7892:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>h,default:()=>b,frontMatter:()=>p,metadata:()=>m,toc:()=>g});var o=t(7624),i=t(2172),a=t(964),r=t(1268),s=t(5388),l=t(7528),c=t(7160),d=t(7692),u=t(8572);const p={title:"App Config",sidebar_label:"Getting Started",description:"VertiGIS Studio Mobile - Learn about VertiGIS Studio Mobile's configuration concepts"},h=void 0,m={id:"mobile/configuration-app-config-getting-started",title:"App Config",description:"VertiGIS Studio Mobile - Learn about VertiGIS Studio Mobile's configuration concepts",source:"@site/docs/mobile/configuration-app-config-getting-started.mdx",sourceDirName:"mobile",slug:"/mobile/configuration-app-config-getting-started",permalink:"/docs/mobile/configuration-app-config-getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/configuration-app-config-getting-started.mdx",tags:[],version:"current",frontMatter:{title:"App Config",sidebar_label:"Getting Started",description:"VertiGIS Studio Mobile - Learn about VertiGIS Studio Mobile's configuration concepts"},sidebar:"mobile",previous:{title:"Advanced Model Binding",permalink:"/docs/mobile/configuration-advanced-model-binding"},next:{title:"App Config Reference",permalink:"/docs/mobile/configuration-app-config-reference"}},f={},g=[...u.toc,{value:"Anatomy of an App config",id:"anatomy-of-an-app-config",level:2},...d.toc,{value:"Linking Layout to App Config",id:"linking-layout-to-app-config",level:2},{value:"Targeting Components by ID",id:"targeting-components-by-id",level:2},{value:"Example: Basic App Config with IWTM",id:"example-basic-app-config-with-iwtm",level:2},{value:"Relevant SDK Samples",id:"relevant-sdk-samples",level:2},{value:"Next Steps: Commands and Operations",id:"next-steps-commands-and-operations",level:2}];function x(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{title:"Before learning about app config...",type:"note",children:(0,o.jsxs)(n.p,{children:["Check out the ",(0,o.jsx)(n.a,{href:"/docs/mobile/key-concepts",children:"Key Concepts"}),"."]})}),"\n",(0,o.jsxs)(n.p,{children:["While ",(0,o.jsx)(n.a,{href:"/docs/mobile/configuration-layout-getting-started",children:"layouts"})," depict the visual structure of how components are going to appear in the viewer, ",(0,o.jsx)(n.strong,{children:"app config"})," is used to define the functional structure within a given component."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Think of the app config as the structural materials for building a house (wood, bricks, etc.) and the layout as the blueprints for the house."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"The materials are the fundamental building blocks that create the house itself, and the blueprints allow for them to be structured together into something that people can interact with."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Every component within the viewer that requires functional, compositional content needs to be configured within the viewer's corresponding app config."}),"\n",(0,o.jsx)(u.default,{}),"\n",(0,o.jsx)(n.h2,{id:"anatomy-of-an-app-config",children:"Anatomy of an App config"}),"\n",(0,o.jsx)(d.default,{}),"\n",(0,o.jsx)(n.h2,{id:"linking-layout-to-app-config",children:"Linking Layout to App Config"}),"\n",(0,o.jsxs)(n.p,{children:["Every component in the layout can be linked to app config with the ",(0,o.jsx)(n.code,{children:"config"})," attribute. The ",(0,o.jsx)(n.code,{children:"config"})," attribute is used to identify the item in the app config that has configuration for the component."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["If you do not provide a ",(0,o.jsx)(n.code,{children:"config"})," attribute for a component, VertiGIS Studio Mobile will attempt to ",(0,o.jsx)(n.a,{href:"/docs/mobile/sdk-components-reference#component-defaults",children:"infer a default value"}),"."]})}),"\n",(0,o.jsxs)(r.c,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"}],children:[(0,o.jsx)(s.c,{value:"layout",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8" ?>\n<layout xmlns="https://geocortex.com/layout/v1">\n    // highlight-next-line\n    <map config="my-map-config" />\n</layout>\n'})})}),(0,o.jsx)(s.c,{value:"config",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "map-extension",\n            // highlight-next-line\n            "id": "my-map-config",\n            "onInitialized": [\n                {\n                    "name": "ui.alert",\n                    "arguments": {\n                        "message": "Hello World"\n                    }\n                }\n            ]\n        }\n    ]\n}\n'})})})]}),"\n",(0,o.jsx)(n.h2,{id:"targeting-components-by-id",children:"Targeting Components by ID"}),"\n",(0,o.jsxs)(n.p,{children:["Every component can also have an ",(0,o.jsx)(n.code,{children:"id"})," attribute. The ",(0,o.jsx)(n.code,{children:"id"})," attribute uniquely identifies a component within a layout and allows app items to target the component. The ID can be used by ",(0,o.jsx)(n.a,{href:"/docs/mobile/configuration-commands-operations",children:"commands"})," like ",(0,o.jsx)(n.code,{children:"ui.activate"})," to target components, or by commands like ",(0,o.jsx)(n.code,{children:"run.workflow"})," to target a host container component to display workflow UI within."]}),"\n",(0,o.jsxs)(r.c,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"},{label:"User Interface",value:"ui"}],children:[(0,o.jsx)(s.c,{value:"layout",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8" ?>\n<layout xmlns="https://geocortex.com/layout/v1"\n        xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n        xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd">\n    // highlight-next-line\n    <gxm:taskbar orientation="vertical" id="taskbar">\n        <map config="default" slot="main">\n            <button icon="info" config="run-workflow" slot="top-center-visible" margin="0.5">Run Workflow in Taskbar</button>\n            <button config="open-dialog" slot="bottom-center-visible" margin="0.5">Open Dialog</button>\n        </map>\n    </gxm:taskbar>\n      // highlight-next-line\n    <dialog id="dialog" active="false">\n        <panel>\n            <button icon="info" config="run-workflow" slot="top-center-visible" margin="0.5">Run Workflow in Taskbar</button>\n        </panel>\n    </dialog>\n</layout>\n'})})}),(0,o.jsx)(s.c,{value:"config",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "map-extension",\n            "id": "default"\n        },\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["mobile", "large"]\n        },\n        {\n            "$type": "workflow",\n            "id": "demo-workflow",\n            "title": "Demo Workflow",\n            // highlight-next-line\n            "target": "#taskbar",\n            "portalItem": "c3964768dfa84fe5acf7a72ef95dc92b"\n        },\n        {\n            "$type": "menu-item",\n            "id": "run-workflow",\n            "title": "run.workflow",\n            "isEnabled": true,\n            "iconId": "info",\n            "action": {\n                "name": "workflow.run",\n                "arguments": {\n                    "id": "demo-workflow"\n                }\n            }\n        },\n        {\n            "$type": "menu-item",\n            "id": "open-dialog",\n            "title": "Open Dialog",\n            "isEnabled": true,\n            "iconId": "",\n            "action": {\n                "name": "ui.activate",\n                // highlight-next-line\n                "arguments": "dialog"\n            }\n        }\n    ]\n}\n'})})}),(0,o.jsx)(s.c,{value:"ui",children:(0,o.jsx)("img",{src:(0,a.c)("img/mobile-config-id-targeting.png")})})]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["This example uses ",(0,o.jsx)(n.a,{href:"/docs/mobile/configuration-commands-operations",children:"commands and operations"})," to power its behavior."]})}),"\n",(0,o.jsx)(n.h2,{id:"example-basic-app-config-with-iwtm",children:"Example: Basic App Config with IWTM"}),"\n",(0,o.jsx)(n.p,{children:"The I Want To Menu (IWTM) gets its functional structure from the app (list items and their functionalities) and its visual structure from the layout."}),"\n",(0,o.jsx)(n.p,{children:"In the following example, the app structures a menu with one button, and the layout creates the IWTM button in the viewer and populates its contents with the corresponding 'menu' item in the app."}),"\n",(0,o.jsxs)(r.c,{defaultValue:"app",values:[{label:"App Config",value:"app"},{label:"Layout",value:"layout"},{label:"User Interface",value:"ui"}],children:[(0,o.jsx)(s.c,{value:"app",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",metastring:'title="App1/App1/app.json"',children:'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["mobile", "large"]\n        },\n        {\n            "$type": "menu",\n            "id": "iwtm",\n            "items": [\n                {\n                    "title": "Refresh App",\n                    "isEnabled": true,\n                    "iconId": "sync",\n                    "action": "app.refresh"\n                },\n                {\n                    "title": "Display Debug Console",\n                    "isEnabled": true,\n                    "iconId": "debug",\n                    "action": ["debug-console.display"]\n                }\n            ]\n        }\n    ]\n}\n'})})}),(0,o.jsx)(s.c,{value:"layout",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",metastring:'title="App1/App1/layout-large.xml"',children:'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd">\n  <gxm:taskbar id="taskbar" orientation="vertical">\n    \x3c!-- Taskbar main content --\x3e\n    <map slot="main">\n      <stack margin="0.8" slot="top-right" halign="end">\n        <iwtm config="iwtm" >\n          <user slot="bottom"/>\n        </iwtm>\n      </stack>\n    </map>\n  </gxm:taskbar>\n</layout>\n'})})}),(0,o.jsx)(s.c,{value:"ui",children:(0,o.jsx)("img",{src:(0,a.c)("img/mobile-iwtm-config.png")})})]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"<iwtm>"})," Component in the layout is bound to the IWTM configuration by the attribute ",(0,o.jsx)(n.code,{children:'config="iwtm"'}),", where ",(0,o.jsx)(n.code,{children:"iwtm"})," corresponds to the ID of the IWTM configuration. All components can be bound to config in this manner, and multiple components can be bound to the same configuration."]}),"\n",(0,o.jsxs)(n.p,{children:["Each app item has a different ",(0,o.jsx)(n.code,{children:"$type"})," and different configurable properties associated with it. The example application has two items in the app config:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["A layout ",(0,o.jsx)(n.code,{children:"$type"})," item which serves as a default layout and references a ",(0,o.jsx)(n.code,{children:"layout-*.xml"})," file"]}),"\n",(0,o.jsxs)(n.li,{children:["A menu ",(0,o.jsx)(n.code,{children:"$type"})," item which provides config for the I Want To Menu in the layout"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{title:"Important",type:"info",children:(0,o.jsxs)(n.p,{children:["The functionality of the ",(0,o.jsx)(n.code,{children:"config"})," attribute is dependent on the fact that IDs across app items of the same type are unique. That is, two items of types ",(0,o.jsx)(n.code,{children:"layer-extension"})," and ",(0,o.jsx)(n.code,{children:"map-extension"})," can both have the ID ",(0,o.jsx)(n.code,{children:"default"}),", but two items of the same type ",(0,o.jsx)(n.code,{children:"layer-extension"})," cannot have the same ID ",(0,o.jsx)(n.code,{children:"default"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"relevant-sdk-samples",children:"Relevant SDK Samples"}),"\n",(0,o.jsx)(n.p,{children:"The VertiGIS Studio Mobile SDK Samples project has a variety of app configuration samples:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/AppConfiguration",children:"App Configuration Samples"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"next-steps-commands-and-operations",children:"Next Steps: Commands and Operations"}),"\n",(0,o.jsx)(n.p,{children:"This example demonstrated a simple application which has a single menu, but the pattern of loosely coupling layout components with items in app config can allow you to build powerful apps with multiple layouts for different form factors and use cases. What we didn't cover in this example was how the menu items are powered. How can we make a menu item, and more generically, a button press or other app interaction, power actions in the application? The answer is to link app items to commands and operations."}),"\n",(0,o.jsxs)(c.c,{children:[(0,o.jsx)(l.c,{title:"Commands and Operations",description:"Learn about Commands and Operations and how to configure them.",link:(0,a.c)("docs/mobile/configuration-commands-operations")}),(0,o.jsx)(l.c,{title:"App Config Reference",description:"Learn more about what you can accomplish with app config.",link:(0,a.c)("docs/mobile/configuration-app-config-reference")})]})]})}function b(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(x,{...e})}):x(e)}},8572:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=t(7624),i=t(2172);const a={},r=void 0,s={id:"mobile/snippets/follow-along",title:"follow-along",description:"Check out the Quickstart and edit the default app config and layout.",source:"@site/docs/mobile/snippets/follow-along.mdx",sourceDirName:"mobile/snippets",slug:"/mobile/snippets/follow-along",permalink:"/docs/mobile/snippets/follow-along",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/snippets/follow-along.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){const n={a:"a",admonition:"admonition",p:"p",...(0,i.M)(),...e.components};return(0,o.jsx)(n.admonition,{title:"Want to follow along?",type:"tip",children:(0,o.jsxs)(n.p,{children:["Check out the ",(0,o.jsx)(n.a,{href:"https://github.com/geocortex/vertigis-mobile-quickstart",children:"Quickstart"})," and ",(0,o.jsx)(n.a,{href:"/docs/mobile/sdk-edit-layout-app-config",children:"edit the default app config and layout"}),"."]})})}function u(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},7692:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=t(7624),i=t(2172);const a={},r=void 0,s={id:"snippets/app-item",title:"app-item",description:"An app config file is composed of a list of app items. App items can potentially be anything. Each app item has an item $type, which viewer is aware of and knows how to locate and load. They usually they represent configuration for components, maps, portal items, or shared data. All item app configuration is specified within the items array of the app.json file.",source:"@site/docs/snippets/app-item.mdx",sourceDirName:"snippets",slug:"/snippets/app-item",permalink:"/docs/snippets/app-item",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/snippets/app-item.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){const n={admonition:"admonition",code:"code",p:"p",strong:"strong",...(0,i.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["An app config file is composed of a list of ",(0,o.jsx)(n.strong,{children:"app items"}),". App items can potentially be anything. Each app item has an ",(0,o.jsxs)(n.strong,{children:["item ",(0,o.jsx)(n.code,{children:"$type"})]}),", which viewer is aware of and knows how to locate and load. They usually they represent configuration for components, maps, portal items, or shared data. All item app configuration is specified within the ",(0,o.jsx)(n.code,{children:"items"})," array of the ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"app.json"})})," file."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Each component can only load a certain ",(0,o.jsx)(n.code,{children:"$type"})," of app item which corresponds to it. For example, ",(0,o.jsx)(n.code,{children:"<map>"})," components can only load app items of type ",(0,o.jsx)(n.code,{children:"map-extension"})," as their configuration."]})})]})}function u(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},5388:(e,n,t)=>{t.d(n,{c:()=>r});t(1504);var o=t(4064);const i={tabItem:"tabItem_Ymn6"};var a=t(7624);function r({children:e,hidden:n,className:t}){return(0,a.jsx)("div",{role:"tabpanel",className:(0,o.c)(i.tabItem,t),hidden:n,children:e})}},1268:(e,n,t)=>{t.d(n,{c:()=>w});var o=t(1504),i=t(4064),a=t(3943),r=t(5592),s=t(5288),l=t(632),c=t(7128),d=t(1148);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return u(e).map((({props:{value:e,label:n,attributes:t,default:o}})=>({value:e,label:n,attributes:t,default:o})))}(t);return function(e){const n=(0,c.w)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h({value:e,tabValues:n}){return n.some((n=>n.value===e))}function m({queryString:e=!1,groupId:n}){const t=(0,r.Uz)(),i=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,l._M)(i),(0,o.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})}),[i,t])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,a=p(e),[r,l]=(0,o.useState)((()=>function({defaultValue:e,tabValues:n}){if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[c,u]=m({queryString:t,groupId:i}),[f,g]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,i]=(0,d.IN)(n);return[t,(0,o.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:i}),x=(()=>{const e=c??f;return h({value:e,tabValues:a})?e:null})();(0,s.c)((()=>{x&&l(x)}),[x]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,a]),tabValues:a}}var g=t(3664);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(7624);function y({className:e,block:n,selectedValue:t,selectValue:o,tabValues:r}){const s=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.MV)(),c=e=>{const n=e.currentTarget,i=s.indexOf(n),a=r[i].value;a!==t&&(l(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.c)("tabs",{"tabs--block":n},e),children:r.map((({value:e,label:n,attributes:o})=>(0,b.jsx)("li",{role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:e=>s.push(e),onKeyDown:d,onClick:c,...o,className:(0,i.c)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":t===e}),children:n??e},e)))})}function v({lazy:e,children:n,selectedValue:t}){const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=i.find((e=>e.props.value===t));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function j(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,i.c)("tabs-container",x.tabList),children:[(0,b.jsx)(y,{...e,...n}),(0,b.jsx)(v,{...e,...n})]})}function w(e){const n=(0,g.c)();return(0,b.jsx)(j,{...e,children:u(e.children)},String(n))}},7528:(e,n,t)=>{t.d(n,{c:()=>s});var o=t(867),i=(t(1504),t(4971));const a={root:"root_Uwqo"};var r=t(7624);function s({title:e,description:n,link:t}){return(0,r.jsx)("div",{className:(0,i.c)("card-demo",a.root),children:(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("div",{className:"card__header",children:(0,r.jsx)("h3",{children:e})}),(0,r.jsx)("div",{className:"card__body",children:(0,r.jsx)("p",{children:n})}),(0,r.jsx)("div",{className:"card__footer",children:(0,r.jsx)(o.c,{className:"button button--secondary button--block",to:t,children:"Get Started"})})]})})}},7160:(e,n,t)=>{t.d(n,{c:()=>a});t(1504);const o={root:"root_vxd5"};var i=t(7624);function a({children:e}){return(0,i.jsx)("div",{className:o.root,children:e})}},4971:(e,n,t)=>{function o(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=o(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}t.d(n,{c:()=>i});const i=function(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=o(e))&&(i&&(i+=" "),i+=n);return i}},2172:(e,n,t)=>{t.d(n,{I:()=>s,M:()=>r});var o=t(1504);const i={},a=o.createContext(i);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);