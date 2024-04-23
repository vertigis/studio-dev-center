"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[3800],{4e3:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>x,frontMatter:()=>h,metadata:()=>m,toc:()=>f});var o=t(7624),i=t(2172),a=t(964),s=t(1268),r=t(5388),l=t(3178),c=t(7528),d=t(7160);const h={title:"Commands and Operations",description:"VertiGIS Studio Mobile - Learn about commands and operations"},u=void 0,m={id:"mobile/configuration-commands-operations",title:"Commands and Operations",description:"VertiGIS Studio Mobile - Learn about commands and operations",source:"@site/docs/mobile/configuration-commands-operations.mdx",sourceDirName:"mobile",slug:"/mobile/configuration-commands-operations",permalink:"/docs/mobile/configuration-commands-operations",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/configuration-commands-operations.mdx",tags:[],version:"current",frontMatter:{title:"Commands and Operations",description:"VertiGIS Studio Mobile - Learn about commands and operations"},sidebar:"mobile",previous:{title:"Configuring the Theme",permalink:"/docs/mobile/configuration-theme"},next:{title:"Configure Button Click Behavior",permalink:"/docs/mobile/tutorial-configure-button-click"}},p={},f=[{value:"Workflow Command",id:"workflow-command",level:2},{value:"Configuring Commands and Operations",id:"configuring-commands-and-operations",level:2},{value:"Passing Explicit Arguments",id:"passing-explicit-arguments",level:3},{value:"Passing Implicit Arguments",id:"passing-implicit-arguments",level:3},{value:"Command Chains",id:"command-chains",level:2},{value:"Example: Configured Map and I Want To Menu",id:"example-configured-map-and-i-want-to-menu",level:2},{value:"Relevant SDK Samples",id:"relevant-sdk-samples",level:2},{value:"Next Steps",id:"next-steps",level:2}];function g(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{title:"Before learning about commands and operations...",type:"note",children:(0,o.jsxs)(n.p,{children:["Check out the ",(0,o.jsx)(n.a,{href:"/docs/mobile/key-concepts",children:"Key Concepts"}),"."]})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Commands and operations"})," are runnable, independent units of work within VertiGIS Studio Mobile. Commands and operations act as global functions which can be\nexecuted from any component or service."]}),"\n",(0,o.jsxs)(n.p,{children:["In VertiGIS Studio Mobile, commands and operations are compatible extensions of the ",(0,o.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/windows/uwp/design/controls-and-patterns/commanding",children:"ICommand interface"})," with strongly typed arguments and return values. Operations are implementations of ",(0,o.jsx)(n.code,{children:"ICommand"})," that have been extended to have an ",(0,o.jsx)(n.code,{children:"ExecuteAsync"})," method, which allows the operation to run asynchronously and return a value. Commands and Operations are registered with the globally available service ",(0,o.jsx)(n.code,{children:"IOperationRegistry"}),", in which they can be looked up by their ",(0,o.jsx)(n.code,{children:"name"}),". Commands and Operations are grouped by namespaces, such as ",(0,o.jsx)(n.code,{children:"auth"})," or ",(0,o.jsx)(n.code,{children:"edit"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"auth.sign-in\nauth.sign-out\nedit.add-feature\nedit.delete-features\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["The full list of existing commands and operations available in VertiGIS Studio Mobile can be ",(0,o.jsx)(n.a,{href:"/docs/mobile/api-commands-operations",children:"found in the API documentation"}),"."]})}),"\n",(0,o.jsxs)(n.p,{children:["Commands and operations are used to power much of VertiGIS Studio Mobile's built in behavior and interactions. They can be run through configuration, or through ",(0,o.jsx)(n.a,{href:"/docs/mobile/sdk-commands-operations",children:"custom services"})," or ",(0,o.jsx)(n.a,{href:"/docs/mobile/sdk-commands-operations",children:"components"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"One thing that makes commands and operations so powerful is that built in components have properties in the app config which take them as values. They power everything from basic components like the IWTM, to advanced functionality like the results list. This allows built-in component's internal behavior to be configured with different commands and operations."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "schemaVersion": "1.0",\n    "items": [\n        ...{\n            "$type": "feature-details",\n            "id": "feature-details",\n            // highlight-next-line\n            "onFeatureShow": "highlights.add-focus",\n            // highlight-next-line\n            "onFeatureHide": "highlights.remove-focus"\n        },\n        {\n            "$type": "results",\n            "id": "results",\n            // highlight-start\n            "onFeatureShow": [\n                "highlights.add",\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "userSet": true\n                    }\n                }\n            ],\n            "onFeatureRemove": "highlights.remove",\n            "onAllFeaturesRemoved": [\n                "panel.close-host-panel",\n                "search.clear",\n                "results.clear"\n            ],\n            "onFeatureClick": [\n                "results.display-details",\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "snapPosition": "middle"\n                    }\n                },\n                "map.zoom-to-features",\n                "highlights.pulse"\n            ]\n            // highlight-end\n        }\n    ]\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"workflow-command",children:"Workflow Command"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://docs.vertigisstudio.com/workflow/",children:"VertiGIS Studio Workflow"})," can allow for the creation of completely customized behavior without writing custom code. VertiGIS Studio Mobile has a special command, ",(0,o.jsx)(n.code,{children:"workflow.run"}),", which allows you to run workflows anywhere you would run a command or operation. Using workflow, you can take custom behavior in VertiGIS Studio Mobile further without having to write custom code."]}),"\n",(0,o.jsxs)(n.p,{children:["Check out this example of ",(0,o.jsx)(n.a,{href:"/docs/mobile/tutorial-run-workflow-app-config",children:"running a workflow from app config"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"configuring-commands-and-operations",children:"Configuring Commands and Operations"}),"\n",(0,o.jsx)(n.p,{children:"Commands and operations can be used through the app config to customize built in components."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "$type": "menu-item",\n            "id": "button-config",\n            "iconId": "zoom-in",\n            "title": "Zoom In",\n            // highlight-next-line\n            "action": "map.zoom-in"\n        }\n        ...\n    ]\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["App config properties like ",(0,o.jsx)(n.code,{children:"action"})," can accept a singular command/operation or a ",(0,o.jsx)(n.strong,{children:"command chain"})," ."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Command chains are arrays of commands and operations which are executed sequentially. The output of previous operations is passed along the chain to future operations and commands, allowing for complex input dependent behavior."})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "$type": "menu-item",\n    "id": "zoom",\n    "title": "Zoom to Features",\n    // highlight-next-line\n    "action": ["map.zoom-to-features", "highlights.pulse"]\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"passing-explicit-arguments",children:"Passing Explicit Arguments"}),"\n",(0,o.jsxs)(n.p,{children:["Commands and operations can be configured with an ",(0,o.jsx)(n.code,{children:"arguments"})," property that passes values to the function at execution time."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "$type": "menu",\n    "id": "iwtm",\n    "items": [\n        {\n            "title": "Rotate by 45 Degrees",\n            "isEnabled": true,\n            "iconId": "sync",\n            "action": {\n                "name": "map.rotate-by",\n                "arguments": {\n                    "rotation": 45\n                }\n            }\n        }\n    ]\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Each command has typed arguments that will ",(0,o.jsx)(n.a,{href:"/docs/mobile/configuration-app-config-reference#schema-properties",children:"autocomplete in the app.json"}),". For example, ",(0,o.jsx)(n.code,{children:"map.rotate-by"})," takes a object of type ",(0,o.jsx)(n.code,{children:"MapRotateArgs"}),", which has the property ",(0,o.jsx)(n.code,{children:"Rotation"})," of type ",(0,o.jsx)(n.code,{children:"double"}),". In the app config, the ",(0,o.jsx)(n.code,{children:"Rotation"})," property can be camelCased instead of PascalCased."]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["You can find out what arguments a command or operation takes in the ",(0,o.jsx)(n.a,{href:"/docs/mobile/api-commands-operations",children:"commands and operations API reference"}),"."]})}),"\n",(0,o.jsx)(n.h3,{id:"passing-implicit-arguments",children:"Passing Implicit Arguments"}),"\n",(0,o.jsxs)(n.p,{children:["If you do not pass explicit arguments, then implicit arguments will be passed to the command or operation. Implicit arguments come from the ",(0,o.jsx)(n.a,{href:"https://docs.vertigisstudio.com/webviewer/latest/admin-help/Default.htm#gwv/add-a-workflow-to-an-app.htm#use-the-menu-context-as-a-workflow-input",children:"context"})," that a command or operation is running in, or from a previous operation in the command chain"]}),"\n",(0,o.jsxs)(n.p,{children:["For example, let's look at the configuration for a ",(0,o.jsx)(n.code,{children:"<feature-details>"})," component. ",(0,o.jsx)(n.code,{children:"highlights.add-focus"})," has been configured as the command that runs ",(0,o.jsx)(n.code,{children:"onFeatureShow"}),", but it is not passed any arguments explicitly. Instead, the command receives arguments from the ",(0,o.jsx)(n.strong,{children:"context"})," it is run in."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "$type": "feature-details",\n    "id": "feature-details",\n    "onFeatureShow": "highlights.add-focus"\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In this example, the context is the feature details menu, so ",(0,o.jsx)(n.code,{children:"highlights.add-focus"})," will receive an argument with a ",(0,o.jsx)(n.code,{children:"Features"})," property, which is the shape of argument it needs."]}),"\n",(0,o.jsx)(n.p,{children:"Arguments are also passed implicitly if you create a command chain, which runs operations one after the other."}),"\n",(0,o.jsx)(n.h2,{id:"command-chains",children:"Command Chains"}),"\n",(0,o.jsxs)(n.p,{children:["App config properties that accept a command or operation can take a single operation or they can take a ",(0,o.jsx)(n.strong,{children:"command chain"}),". Command chains are arrays of commands and operations which are executed sequentially. The output of previous operations is passed along the chain to future operations, allowing for complex chains of behavior."]}),"\n",(0,o.jsxs)(n.p,{children:["For example, here's configuration for the various behaviors of a ",(0,o.jsx)(n.code,{children:"<feature-details>"})," component."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "$type": "feature-details",\n    "id": "feature-details",\n    "onFeatureShow": "highlights.add-focus",\n    "onFeatureDelete": [\n        "highlights.remove-focus",\n        "highlights.remove",\n        "edit.delete-features",\n        "results.hide-details",\n        "results.remove"\n    ]\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"In this example, when a feature is deleted,"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"The focus and highlights are removed,"}),"\n",(0,o.jsx)(n.li,{children:"The feature is deleted from the layer,"}),"\n",(0,o.jsx)(n.li,{children:"The results details are hidden,"}),"\n",(0,o.jsx)(n.li,{children:"The feature is removed from the results list."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Since these commands and operations are running from the ",(0,o.jsx)(n.a,{href:"https://docs.vertigisstudio.com/webviewer/latest/admin-help/Default.htm#gwv/add-a-workflow-to-an-app.htm#use-the-menu-context-as-a-workflow-input",children:"context"})," of a ",(0,o.jsx)(n.code,{children:"<feature-details>"})," component, the first command or operation will receive the relevant feature as its input. If the property is a command chain, the next step in line will receive one of two possible inputs."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"If the previous step was a command (which doesn't produce output), then the original input is passed on to the next step."}),"\n",(0,o.jsx)(n.li,{children:"If the previous step was an operation (which produces an output), then the output of that operation is passed onto the next step."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["In this way, you can run multiple commands in a row that receive a feature as input, as seen in the ",(0,o.jsx)(n.code,{children:"onFeatureDelete"})," command chain in the example."]}),"\n",(0,o.jsx)(n.h2,{id:"example-configured-map-and-i-want-to-menu",children:"Example: Configured Map and I Want To Menu"}),"\n",(0,o.jsxs)(s.c,{defaultValue:"app",values:[{label:"App Config",value:"app"},{label:"Layout",value:"layout"},{label:"User Interface",value:"ui"}],children:[(0,o.jsx)(r.c,{value:"app",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",metastring:'title="App1/App1/app.json"',children:'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["mobile", "large"]\n        },\n        {\n            "$type": "map-extension",\n            "id": "demo-map",\n            "onClick": [\n                "tasks.identify",\n                "highlights.add-focus",\n                "highlights.pulse"\n            ]\n        },\n        {\n            "$type": "menu",\n            "id": "iwtm",\n            "items": [\n                {\n                    "title": "Return to Default Map View",\n                    "isEnabled": true,\n                    "iconId": "zoom_initial",\n                    "action": [\n                        {\n                            "name": "map.zoom-to-initial-viewpoint",\n                            "arguments": {\n                                "maps": "item://map-extension/demo-map"\n                            }\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n}\n'})})}),(0,o.jsx)(r.c,{value:"layout",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",metastring:'title="App1/App1/layout-large.xml"',children:'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n  xmlns="https://geocortex.com/layout/v1"\n  xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n  xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd">\n  <gxm:taskbar id="taskbar" orientation="vertical">\n    <map config="demo-map" slot="main">\n    <stack margin="0.8" slot="top-right" halign="end">\n      <iwtm config="iwtm" />\n    </stack>\n    </map>\n  </gxm:taskbar>\n</layout>\n'})})}),(0,o.jsx)(r.c,{value:"ui",children:(0,o.jsx)(l.c,{src:(0,a.c)("video/commands-operations-demo.webm")})})]}),"\n",(0,o.jsxs)(n.p,{children:["This example demonstrates two different types of argument passing behavior. The first action in the app config is a command chain defined on the ",(0,o.jsx)(n.code,{children:"onClick"})," property of a map. This chain consists of three operations and commands:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"task.identify"}),","]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"highlights.add-focus"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"highlights.pulse"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"tasks.identify"})," does not have any named arguments defined, so it will take arguments passed into it from its current ",(0,o.jsx)(n.a,{href:"https://docs.vertigisstudio.com/webviewer/latest/admin-help/Default.htm#gwv/add-a-workflow-to-an-app.htm#use-the-menu-context-as-a-workflow-input",children:"context"}),". Since this chain is run on a map click, the context argument passed in has the shape:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "geometry": "Esri.Point(<map-click-location>)",\n  ... <other props>\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"tasks.identify"})," receives this argument, and since it is an operation, produces an output. Looking at the ",(0,o.jsx)(n.a,{href:"/docs/mobile/api-commands-operations",children:"Commands and Operations Documentation"}),", ",(0,o.jsx)(n.code,{children:"tasks.identify"})," has output with the shape:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "features": [<feature1>, <feature2>, ...],\n  "results": [<Result(feature1)>, <Result(feature2)>, ...],\n  ... <other props>\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"highlights.add-focus"})," and ",(0,o.jsx)(n.code,{children:"highlights.pulse"}),' both take an input object with a "features" property, so the output of ',(0,o.jsx)(n.code,{children:"tasks.identify"})," will work nicely. ",(0,o.jsx)(n.code,{children:"highlights.add-focus"})," is immediately after ",(0,o.jsx)(n.code,{children:"tasks.identify"}),", so it receives the output of identify. Since ",(0,o.jsx)(n.code,{children:"highlights.add-focus"})," is a command, it does not produce any output. ",(0,o.jsx)(n.code,{children:"highlights.pulse"})," will receive the output of the last operation, ",(0,o.jsx)(n.code,{children:"tasks.identify"}),". In this way, you can pass the output of an operation to multiple commands."]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Check out ",(0,o.jsx)(n.a,{href:"/docs/mobile/tutorial-change-default-behavior",children:"Change Default Behavior"})," for more ways to override default behavior like a Map's on click event."]})}),"\n",(0,o.jsxs)(n.p,{children:["The second command/operation in this application is a ",(0,o.jsx)(n.code,{children:"map.zoom-to-initial-viewpoint"})," command on the I Want To Menu. This command takes a MapExtensionArgs, which is provided as a named argument. The ",(0,o.jsx)(n.code,{children:"maps"})," property in the argument references the ",(0,o.jsx)(n.code,{children:"demo-map"})," in the config through an ",(0,o.jsx)(n.strong,{children:"Item URI"}),". Item URIs are a way of referencing other items within the app config. See ",(0,o.jsx)(n.a,{href:"/docs/mobile/configuration-app-config-reference#item-uris-and-resource-uris",children:"Item URIs"})," for more details."]}),"\n",(0,o.jsx)(n.h2,{id:"relevant-sdk-samples",children:"Relevant SDK Samples"}),"\n",(0,o.jsx)(n.p,{children:"Check out the relevant VertiGIS Studio Mobile SDK Samples:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/AppConfiguration/Commands",children:"Commands"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/AppConfiguration/MapAndFeatureCommands",children:"Map and Feature Commands"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,o.jsx)(n.p,{children:"VertiGIS Studio Mobile has a large array of built-in command and operations that you can chain to power custom behavior. Custom commands and operations can also be implemented with the SDK."}),"\n",(0,o.jsxs)(d.c,{children:[(0,o.jsx)(c.c,{title:"Commands, Operations, and Events API",description:"Check out the available commands and operations",link:(0,a.c)("docs/mobile/api-commands-operations")}),(0,o.jsx)(c.c,{title:"Configure Commands and Operations",description:"Change built-in behavior or add new behavior using app config and layout",link:(0,a.c)("docs/mobile/tutorial-change-default-behavior")}),(0,o.jsx)(c.c,{title:"Build your own Commands and Operations",description:"Use the SDK to implement custom commands and operations",link:(0,a.c)("docs/mobile/tutorial-implement-command-operation")}),(0,o.jsx)(c.c,{title:"Learn about Events built into VertiGIS Studio Mobile",description:"Learn about the global event infrastructure in VertiGIS Studio Mobile",link:(0,a.c)("docs/mobile/sdk-events-reference")})]})]})}function x(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},5388:(e,n,t)=>{t.d(n,{c:()=>s});t(1504);var o=t(4064);const i={tabItem:"tabItem_Ymn6"};var a=t(7624);function s({children:e,hidden:n,className:t}){return(0,a.jsx)("div",{role:"tabpanel",className:(0,o.c)(i.tabItem,t),hidden:n,children:e})}},1268:(e,n,t)=>{t.d(n,{c:()=>y});var o=t(1504),i=t(4064),a=t(3943),s=t(5592),r=t(5288),l=t(632),c=t(7128),d=t(1148);function h(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return h(e).map((({props:{value:e,label:n,attributes:t,default:o}})=>({value:e,label:n,attributes:t,default:o})))}(t);return function(e){const n=(0,c.w)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m({value:e,tabValues:n}){return n.some((n=>n.value===e))}function p({queryString:e=!1,groupId:n}){const t=(0,s.Uz)(),i=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,l._M)(i),(0,o.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})}),[i,t])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,a=u(e),[s,l]=(0,o.useState)((()=>function({defaultValue:e,tabValues:n}){if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[c,h]=p({queryString:t,groupId:i}),[f,g]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,i]=(0,d.IN)(n);return[t,(0,o.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:i}),x=(()=>{const e=c??f;return m({value:e,tabValues:a})?e:null})();(0,r.c)((()=>{x&&l(x)}),[x]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),g(e)}),[h,g,a]),tabValues:a}}var g=t(3664);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(7624);function j({className:e,block:n,selectedValue:t,selectValue:o,tabValues:s}){const r=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.MV)(),c=e=>{const n=e.currentTarget,i=r.indexOf(n),a=s[i].value;a!==t&&(l(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=r.indexOf(e.currentTarget)+1;n=r[t]??r[0];break}case"ArrowLeft":{const t=r.indexOf(e.currentTarget)-1;n=r[t]??r[r.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.c)("tabs",{"tabs--block":n},e),children:s.map((({value:e,label:n,attributes:o})=>(0,b.jsx)("li",{role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:e=>r.push(e),onKeyDown:d,onClick:c,...o,className:(0,i.c)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":t===e}),children:n??e},e)))})}function v({lazy:e,children:n,selectedValue:t}){const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=i.find((e=>e.props.value===t));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function w(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,i.c)("tabs-container",x.tabList),children:[(0,b.jsx)(j,{...e,...n}),(0,b.jsx)(v,{...e,...n})]})}function y(e){const n=(0,g.c)();return(0,b.jsx)(w,{...e,children:h(e.children)},String(n))}},3178:(e,n,t)=>{t.d(n,{c:()=>a});t(1504);const o={video:"video_DXmL"};var i=t(7624);function a({src:e}){return(0,i.jsxs)("video",{autoPlay:!0,loop:!0,muted:!0,className:o.video,children:[(0,i.jsx)("source",{src:e,type:"video/webm"}),"Your browser does not support the video tag."]})}},7528:(e,n,t)=>{t.d(n,{c:()=>r});var o=t(867),i=(t(1504),t(4971));const a={root:"root_Uwqo"};var s=t(7624);function r({title:e,description:n,link:t}){return(0,s.jsx)("div",{className:(0,i.c)("card-demo",a.root),children:(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)("div",{className:"card__header",children:(0,s.jsx)("h3",{children:e})}),(0,s.jsx)("div",{className:"card__body",children:(0,s.jsx)("p",{children:n})}),(0,s.jsx)("div",{className:"card__footer",children:(0,s.jsx)(o.c,{className:"button button--secondary button--block",to:t,children:"Get Started"})})]})})}},7160:(e,n,t)=>{t.d(n,{c:()=>a});t(1504);const o={root:"root_vxd5"};var i=t(7624);function a({children:e}){return(0,i.jsx)("div",{className:o.root,children:e})}},4971:(e,n,t)=>{function o(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=o(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}t.d(n,{c:()=>i});const i=function(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=o(e))&&(i&&(i+=" "),i+=n);return i}},2172:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>s});var o=t(1504);const i={},a=o.createContext(i);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);