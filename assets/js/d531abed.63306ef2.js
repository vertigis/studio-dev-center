"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[2512,7884,6656],{548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(7624),r=n(2172);const o={},a=void 0,s={id:"snippets/workflow-url",title:"workflow-url",description:"https://apps.vertigisstudio.com/workflow/designer/#workflow=",source:"@site/docs/snippets/workflow-url.mdx",sourceDirName:"snippets",slug:"/snippets/workflow-url",permalink:"/docs/snippets/workflow-url",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/snippets/workflow-url.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){const t={a:"a",p:"p",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{class:"alert alert--secondary",role:"alert",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://apps.vertigisstudio.com/workflow/designer/#workflow=",children:"https://apps.vertigisstudio.com/workflow/designer/#workflow="}),"\n",(0,i.jsx)("b",{children:"44010fc421dd4659b74fb921e09ba594"})]})}),"\n",(0,i.jsx)("br",{})]})}function u(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},3412:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(7624),r=n(2172);const o={},a=void 0,s={id:"web/snippets/prereqs-layout-config-editing",title:"prereqs-layout-config-editing",description:"-   Follow along by setting up the VertiGIS Studio Web SDK and editing the minimal layout and app config provided.",source:"@site/docs/web/snippets/prereqs-layout-config-editing.mdx",sourceDirName:"web/snippets",slug:"/web/snippets/prereqs-layout-config-editing",permalink:"/docs/web/snippets/prereqs-layout-config-editing",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/snippets/prereqs-layout-config-editing.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){const t={a:"a",li:"li",ul:"ul",...(0,r.M)(),...e.components};return(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Follow along by setting up the ",(0,i.jsx)(t.a,{href:"/docs/web/sdk-overview",children:"VertiGIS Studio Web SDK"})," and editing the minimal layout and app config provided."]}),"\n",(0,i.jsxs)(t.li,{children:["Check out the ",(0,i.jsx)(t.a,{href:"/docs/web/sdk-deployment#upload-app-config-and-layout-to-an-app-optional",children:"deployment instructions"})," to learn about how to deploy layout and app config to an application."]}),"\n"]})}function u(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4164:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>w,frontMatter:()=>d,metadata:()=>h,toc:()=>f});var i=n(7624),r=n(2172),o=n(964),a=n(1268),s=n(5388),l=(n(7160),n(7528),n(3412)),c=n(548);const d={title:"Change Default Map Click Behavior",description:"VertiGIS Studio Web - Learn how to configure VertiGIS Studio Web to change the default map click behavior"},u=void 0,h={id:"web/tutorial-change-default-map-click-behavior",title:"Change Default Map Click Behavior",description:"VertiGIS Studio Web - Learn how to configure VertiGIS Studio Web to change the default map click behavior",source:"@site/docs/web/tutorial-change-default-map-click-behavior.mdx",sourceDirName:"web",slug:"/web/tutorial-change-default-map-click-behavior",permalink:"/docs/web/tutorial-change-default-map-click-behavior",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/tutorial-change-default-map-click-behavior.mdx",tags:[],version:"current",frontMatter:{title:"Change Default Map Click Behavior",description:"VertiGIS Studio Web - Learn how to configure VertiGIS Studio Web to change the default map click behavior"},sidebar:"web",previous:{title:"Display a Custom Form",permalink:"/docs/web/tutorial-display-custom-form"},next:{title:"Implement a Custom Activity",permalink:"/docs/web/tutorial-implement-custom-activity"}},p={},f=[{value:"What you&#39;re Building",id:"what-youre-building",level:2},{value:"Prerequisites",id:"prerequisites",level:2},...l.toc,{value:"Initial Set up",id:"initial-set-up",level:2},{value:"Set up a Workflow to Run on Map Click",id:"set-up-a-workflow-to-run-on-map-click",level:2},...c.toc,{value:"Extend the Workflow to Create a Graphic Buffering the Click Geometry",id:"extend-the-workflow-to-create-a-graphic-buffering-the-click-geometry",level:2}];function m(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["VertiGIS Studio Web comes with default behavior that runs on a map click. The default behavior will identify and display details for results in the nearby area. But what if you want to replace the functionality with your own behavior? This can be accomplished by leveraging ",(0,i.jsx)(t.a,{href:"https://apps.vertigisstudio.com/workflow/designer/",children:"VertiGIS Studio Workflow"})," and editing the ",(0,i.jsx)(t.a,{href:"/docs/web/configuration-app-config-getting-started",children:"app config"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["It's actually possible to configure the Map's ",(0,i.jsx)(t.code,{children:"onClick"})," event in ",(0,i.jsx)(t.a,{href:"https://apps.vertigisstudio.com/web/designer/",children:"VertiGIS Studio Web Designer"}),", by setting a workflow as the action for the ",(0,i.jsx)(t.a,{href:"https://docs.vertigisstudio.com/webviewer/latest/admin-help/Default.htm#gwv/component-settings.htm%3FTocPath%3DConfiguration%7CComponent%2520Settings%7C_____0",children:"Maps click event"}),". However, the point of this tutorial is to demonstrate the concept of configuring actions using the app config."]})}),"\n",(0,i.jsx)(t.h2,{id:"what-youre-building",children:"What you're Building"}),"\n",(0,i.jsx)(t.p,{children:"We will modify the default map on click behavior to buffer the click geometry by a user provided distance and create a graphic which visualizes this buffer."}),"\n",(0,i.jsx)("img",{src:(0,o.c)("img/web-custom-map-click-workflow-finished.png"),alt:"Map Click Workflow with Buffer Behavior"}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(l.default,{}),"\n",(0,i.jsx)(t.h2,{id:"initial-set-up",children:"Initial Set up"}),"\n",(0,i.jsx)(t.p,{children:"Start the VertiGIS Studio Web SDK with the following layout and app JSON. You should see a simple application with one layer, Fire Hydrants, which has a related table Fire Hydrant Surveys."}),"\n",(0,i.jsx)(t.p,{children:"Try clicking the map. It should return results for the point you clicked in the results list."}),"\n",(0,i.jsxs)(a.c,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"}],children:[(0,i.jsx)(s.c,{value:"config",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",metastring:'title="app/app.json"',children:'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "map-extension",\n            "id": "default",\n            "onClick": [\n                "geometry.add-pixel-tolerance",\n                "tasks.identify",\n                "results.display-details"\n            ],\n            "webMap": "https://www.arcgis.com/home/item.html?id=0ba877a4185448cb832af9a661031e31"\n        },\n        {\n            "$type": "results",\n            "id": "results-list-config",\n            "onFeatureClick": ["results.display-details"]\n        }\n    ]\n}\n'})})}),(0,i.jsx)(s.c,{value:"layout",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",metastring:'title="app/layout.xml"',children:'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1">\n  <split resizable="true">\n    <panel show-close-button="false" width="26">\n      <layer-list models="#map-primary"/>\n      <results-list active="false" config="results-list-config"/>\n      <feature-details active="true" />\n      <workflow active="false"/>\n    </panel>\n    <stack>\n      <map id="map-primary" config="default"/>\n    </stack>\n  </split>\n</layout>\n'})})})]}),"\n",(0,i.jsx)(t.h2,{id:"set-up-a-workflow-to-run-on-map-click",children:"Set up a Workflow to Run on Map Click"}),"\n",(0,i.jsxs)(t.p,{children:["The first thing we need to do is override the default map click behavior. We can do this by ",(0,i.jsx)(t.a,{href:"/docs/web/tutorial-change-default-behavior",children:"editing the default behavior"})," for the ",(0,i.jsx)(t.code,{children:"<map/>"})," component in the app config. The default behavior for the map's ",(0,i.jsx)(t.code,{children:"onClick"})," event is a command chain that runs ",(0,i.jsx)(t.code,{children:"geometry.add-pixel-tolerance"})," and then ",(0,i.jsx)(t.code,{children:"tasks.identify"}),", and finally, ",(0,i.jsx)(t.code,{children:"results.display-details"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "$type": "map-extension",\n            "id": "default",\n            // highlight-start\n            "onClick": [\n                "geometry.add-pixel-tolerance",\n                "tasks.identify",\n                "results.display-details"\n            ],\n            // highlight-end\n            ...\n        }\n        ...\n    ]\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["First, we are going to replace the command chain with a ",(0,i.jsx)(t.code,{children:"workflow.run"})," command that replicates this behavior."]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Open up ",(0,i.jsx)(t.a,{href:"https://apps.vertigisstudio.com/workflow/designer/",children:"VertiGIS Studio Workflow Designer"})," and create and save a new workflow."]}),"\n",(0,i.jsx)(t.li,{children:'Add an "Alert" activity as a test.'}),"\n",(0,i.jsx)(t.li,{children:"Copy the ID of the the workflow from the URL"}),"\n"]}),"\n",(0,i.jsx)(c.default,{}),"\n",(0,i.jsxs)(t.ol,{start:"4",children:["\n",(0,i.jsx)(t.li,{children:"Add the workflow as an app item to your app config."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "$type": "workflow",\n            "id": "map-click-workflow",\n            "title": "Map Click Workflow",\n            "commandArgumentInput": "context",\n            "portalItem": "<your-workflow-id-here>"\n        },\n        ...\n    ]\n}\n'})}),"\n",(0,i.jsxs)(t.ol,{start:"5",children:["\n",(0,i.jsxs)(t.li,{children:["Next, configure the ",(0,i.jsx)(t.code,{children:"onClick"})," property of the Map Component in the app config to run the workflow."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "$type": "map-extension",\n            "id": "default",\n            "onClick": "workflow.run-map-click-workflow",\n            ...\n        }\n    ]\n}\n'})}),"\n",(0,i.jsxs)(t.ol,{start:"6",children:["\n",(0,i.jsx)(t.li,{children:"Run the app and test your workflow. You should see your alert pop up when you try to click on the map."}),"\n"]}),"\n",(0,i.jsx)("img",{src:(0,o.c)("img/web-custom-map-click-workflow-alert.png"),alt:"Map Click Workflow with Alert"}),"\n",(0,i.jsxs)(t.ol,{start:"7",children:["\n",(0,i.jsxs)(t.li,{children:["Open up your workflow in the VertiGIS Studio Workflow Designer again. The default behavior we just overrode can be recreated with the use of ",(0,i.jsx)(t.a,{href:"https://docs.vertigisstudio.com/workflow/latest/help/Default.htm#wf5/help/activities/run-command.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____169",children:"RunCommand"})," and ",(0,i.jsx)(t.a,{href:"https://docs.vertigisstudio.com/workflow/latest/help/Default.htm#wf5/help/activities/run-operation.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____173",children:"RunOperation"})," activities. ",(0,i.jsx)(t.code,{children:"geometry.add-pixel-tolerance"})," and ",(0,i.jsx)(t.code,{children:"tasks.identify"})," are operations, so they need RunOperation activities, and ",(0,i.jsx)(t.code,{children:"results.display-details"})," is a command so it needs a RunCommand Activity. Chain these three activities together, passing the ",(0,i.jsx)(t.a,{href:"https://docs.vertigisstudio.com/webviewer/latest/admin-help/Default.htm#gwv/add-a-workflow-to-an-app.htm#use-the-menu-context-as-a-workflow-input%3FTocPath%3DConfiguration%7CAdd%2520a%2520Workflow%2520to%2520an%2520App%7C_____4",children:"workflow context"})," to ",(0,i.jsx)(t.code,{children:"geometry.add-pixel-tolerance"})," and then passing the output of that operation to ",(0,i.jsx)(t.code,{children:"tasks.identify"}),", and finally passing the output of ",(0,i.jsx)(t.code,{children:"tasks.identify"})," to ",(0,i.jsx)(t.code,{children:"results.display-details"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)("p",{children:[(0,i.jsxs)(t.p,{children:["You can"," "]}),(0,i.jsx)("a",{href:(0,o.c)("workflows/web-map-click-behavior-recreated.json"),download:"map-click-behavior-recreated.json",target:"_blank",children:(0,i.jsx)(t.p,{children:"download this workflow"})})," ",(0,i.jsxs)(t.p,{children:["and then"," "]}),(0,i.jsx)("a",{href:"https://docs.vertigisstudio.com/workflow/latest/help/Default.htm#wf5/help/import-export-workflows.htm",target:"_blank",children:(0,i.jsx)(t.p,{children:"import it into the VertiGIS Studio Workflow Designer."})})]})}),"\n",(0,i.jsx)("img",{src:(0,o.c)("img/web-custom-map-click-workflow-recreated.png"),alt:"Map Click Workflow with Original Operations"}),"\n",(0,i.jsxs)(t.ol,{start:"8",children:["\n",(0,i.jsx)(t.li,{children:"Save the workflow and reload the application. Test the map click functionality and ensure it works as it originally did."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"extend-the-workflow-to-create-a-graphic-buffering-the-click-geometry",children:"Extend the Workflow to Create a Graphic Buffering the Click Geometry"}),"\n",(0,i.jsx)(t.p,{children:'At this point, you can choose to extend the map click behavior with VertiGIS Studio Workflow in whatever way is appropriate for your tutorial. You could execute a different "identify" for external results and add them to the set of results displayed, or zoom the map to a specific orientation and scale, or display a form for the user to fill out with relevant information to that location. For this example, a workflow was created which asks a user for a buffer distance, and creates a graphic showing the buffer around the click location.'}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)("p",{children:[(0,i.jsxs)(t.p,{children:["You can"," "]}),(0,i.jsx)("a",{href:(0,o.c)("workflows/web-map-click-behavior-buffer.json"),download:"map-click-behavior-buffer.json",target:"_blank",children:(0,i.jsx)(t.p,{children:"download this buffer geometry workflow"})})," ",(0,i.jsxs)(t.p,{children:["and then"," "]}),(0,i.jsx)("a",{href:"https://docs.vertigisstudio.com/workflow/latest/help/Default.htm#wf5/help/import-export-workflows.htm",target:"_blank",children:(0,i.jsx)(t.p,{children:"import it into the VertiGIS Studio Workflow Designer."})})]})}),"\n",(0,i.jsx)("img",{src:(0,o.c)("img/web-custom-map-click-workflow-finished.png"),alt:"Map Click Workflow with Buffer Behavior"})]})}function w(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},5388:(e,t,n)=>{n.d(t,{c:()=>a});n(1504);var i=n(4064);const r={tabItem:"tabItem_Ymn6"};var o=n(7624);function a({children:e,hidden:t,className:n}){return(0,o.jsx)("div",{role:"tabpanel",className:(0,i.c)(r.tabItem,n),hidden:t,children:e})}},1268:(e,t,n)=>{n.d(t,{c:()=>y});var i=n(1504),r=n(4064),o=n(3943),a=n(5592),s=n(5288),l=n(632),c=n(7128),d=n(1148);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return u(e).map((({props:{value:e,label:t,attributes:n,default:i}})=>({value:e,label:t,attributes:n,default:i})))}(n);return function(e){const t=(0,c.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p({value:e,tabValues:t}){return t.some((t=>t.value===e))}function f({queryString:e=!1,groupId:t}){const n=(0,a.Uz)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,l._M)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=h(e),[a,l]=(0,i.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,u]=f({queryString:n,groupId:r}),[m,w]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,r]=(0,d.IN)(t);return[n,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),g=(()=>{const e=c??m;return p({value:e,tabValues:o})?e:null})();(0,s.c)((()=>{g&&l(g)}),[g]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),w(e)}),[u,w,o]),tabValues:o}}var w=n(3664);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(7624);function v({className:e,block:t,selectedValue:n,selectValue:i,tabValues:a}){const s=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.MV)(),c=e=>{const t=e.currentTarget,r=s.indexOf(t),o=a[r].value;o!==n&&(l(t),i(o))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.c)("tabs",{"tabs--block":t},e),children:a.map((({value:e,label:t,attributes:i})=>(0,b.jsx)("li",{role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,ref:e=>s.push(e),onKeyDown:d,onClick:c,...i,className:(0,r.c)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":n===e}),children:t??e},e)))})}function x({lazy:e,children:t,selectedValue:n}){const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function k(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,r.c)("tabs-container",g.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(x,{...e,...t})]})}function y(e){const t=(0,w.c)();return(0,b.jsx)(k,{...e,children:u(e.children)},String(t))}},7528:(e,t,n)=>{n.d(t,{c:()=>s});var i=n(867),r=(n(1504),n(4971));const o={root:"root_Uwqo"};var a=n(7624);function s({title:e,description:t,link:n}){return(0,a.jsx)("div",{className:(0,r.c)("card-demo",o.root),children:(0,a.jsxs)("div",{className:"card",children:[(0,a.jsx)("div",{className:"card__header",children:(0,a.jsx)("h3",{children:e})}),(0,a.jsx)("div",{className:"card__body",children:(0,a.jsx)("p",{children:t})}),(0,a.jsx)("div",{className:"card__footer",children:(0,a.jsx)(i.c,{className:"button button--secondary button--block",to:n,children:"Get Started"})})]})})}},7160:(e,t,n)=>{n.d(t,{c:()=>o});n(1504);const i={root:"root_vxd5"};var r=n(7624);function o({children:e}){return(0,r.jsx)("div",{className:i.root,children:e})}},4971:(e,t,n)=>{function i(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}n.d(t,{c:()=>r});const r=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(r&&(r+=" "),r+=t);return r}},2172:(e,t,n)=>{n.d(t,{I:()=>s,M:()=>a});var i=n(1504);const r={},o=i.createContext(r);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);