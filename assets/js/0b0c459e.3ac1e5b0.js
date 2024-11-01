"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[89,91,5049],{8109:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(4848),i=n(8453),o=n(6962);const r={},s=void 0,l={id:"mobile/snippets/prereqs-layout-config-editing",title:"prereqs-layout-config-editing",description:"Follow along by setting up the VertiGIS Studio Mobile SDK and editing the minimal layout and app config provided.",source:"@site/docs/mobile/snippets/prereqs-layout-config-editing.mdx",sourceDirName:"mobile/snippets",slug:"/mobile/snippets/prereqs-layout-config-editing",permalink:"/docs/mobile/snippets/prereqs-layout-config-editing",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/snippets/prereqs-layout-config-editing.mdx",tags:[],version:"current",frontMatter:{}},u={},c=[...o.toc];function d(e){const t={a:"a",p:"p",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Follow along by setting up the ",(0,a.jsx)(t.a,{href:"/docs/mobile/sdk-overview",children:"VertiGIS Studio Mobile SDK"})," and editing the minimal layout and app config provided."]}),"\n",(0,a.jsx)(o.default,{})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},6962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(4848),i=n(8453);const o={},r=void 0,s={id:"mobile/snippets/tweak-layout-config",title:"tweak-layout-config",description:"If you just need to make a small change to the layout and app config of an existing application, you can download the config and layout files for the application, tweak them, and then re-upload them.",source:"@site/docs/mobile/snippets/tweak-layout-config.mdx",sourceDirName:"mobile/snippets",slug:"/mobile/snippets/tweak-layout-config",permalink:"/docs/mobile/snippets/tweak-layout-config",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/snippets/tweak-layout-config.mdx",tags:[],version:"current",frontMatter:{}},l={},u=[];function c(e){const t={a:"a",admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["If you just need to make a small change to the layout and app config of an existing application, you can ",(0,a.jsx)(t.a,{href:"https://docs.vertigisstudio.com/mobileviewer/latest/admin-help/Default.htm#gmv/designer/configuration-Options.htm#Download-app-config",children:"download the config and layout files for the application"}),", tweak them, and then re-upload them."]})})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},7598:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>g,frontMatter:()=>u,metadata:()=>d,toc:()=>p});var a=n(4848),i=n(8453),o=n(1470),r=n(9365),s=n(6025),l=(n(556),n(9389),n(8109));const u={title:"Customize the Theme",description:"VertiGIS Studio Mobile - Learn how to customize the look and feel of your VertiGIS Studio Mobile application"},c=void 0,d={id:"mobile/tutorial-customize-application-theme",title:"Customize the Theme",description:"VertiGIS Studio Mobile - Learn how to customize the look and feel of your VertiGIS Studio Mobile application",source:"@site/docs/mobile/tutorial-customize-application-theme.mdx",sourceDirName:"mobile",slug:"/mobile/tutorial-customize-application-theme",permalink:"/docs/mobile/tutorial-customize-application-theme",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/tutorial-customize-application-theme.mdx",tags:[],version:"current",frontMatter:{title:"Customize the Theme",description:"VertiGIS Studio Mobile - Learn how to customize the look and feel of your VertiGIS Studio Mobile application"},sidebar:"mobile",previous:{title:"Change the Default Behavior of Components",permalink:"/docs/mobile/tutorial-change-default-behavior"},next:{title:"Add a Medium Layout",permalink:"/docs/mobile/tutorial-add-medium-layout"}},h={},p=[{value:"Prerequisites",id:"prerequisites",level:2},...l.toc,{value:"Create a Basic App",id:"create-a-basic-app",level:2},{value:"Add Configuration for the Branding Service",id:"add-configuration-for-the-branding-service",level:2},{value:"Add a New Theme",id:"add-a-new-theme",level:2},{value:"Relevant SDK Samples",id:"relevant-sdk-samples",level:2}];function m(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["VertiGIS Studio Mobile's appearance is built around two concepts: theme and ",(0,a.jsx)(t.a,{href:"/docs/mobile/configuration-layout-getting-started",children:"layout"}),". The theme controls the color scheme of the app, while the layout controls the organization of content."]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["The theme can be partially configured by using the ",(0,a.jsx)(t.a,{href:"https://docs.vertigisstudio.com/webviewer/latest/admin-help/Default.htm#gwv/component-settings.htm#branding-settings",children:"VertiGIS Studio Mobile Designer"}),"."]})}),"\n",(0,a.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsx)(l.default,{}),"\n",(0,a.jsx)(t.h2,{id:"create-a-basic-app",children:"Create a Basic App"}),"\n",(0,a.jsx)(t.p,{children:"Let's create a basic application with layout and config that we can theme."}),"\n",(0,a.jsxs)(o.A,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"}],children:[(0,a.jsx)(r.A,{value:"config",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",metastring:'title="app/app.json"',children:'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["mobile", "large"]\n        },\n        {\n            "$type": "map-extension",\n            "id": "default",\n            "onClick": [\n                "tasks.identify",\n                "results.display",\n                "map.zoom-to-features"\n            ],\n            "webMap": "0ba877a4185448cb832af9a661031e31"\n        },\n        {\n            "$type": "feature-details",\n            "id": "feature-details",\n            "onFeatureShow": "highlights.add-focus",\n            "onFeatureHide": "highlights.remove-focus"\n        },\n        {\n            "$type": "results",\n            "id": "results",\n            "onFeatureShow": [\n                "highlights.add",\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "userSet": true\n                    }\n                }\n            ],\n            "onFeatureRemove": "highlights.remove",\n            "onAllFeaturesRemoved": [\n                "panel.close-host-panel",\n                "search.clear",\n                "results.clear"\n            ],\n            "onFeatureClick": [\n                "results.display-details",\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "snapPosition": "middle"\n                    }\n                },\n                "map.zoom-to-features",\n                "highlights.pulse"\n            ]\n        }\n    ]\n}\n'})})}),(0,a.jsx)(r.A,{value:"layout",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-xml",metastring:'title="app/layout-large.xml"',children:'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n\txmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd">\n\t<gxm:taskbar id="taskbar" orientation="vertical">\n\t\t<map config="default" slot="main"/>\n\t\t<panel>\n\t\t\t<results-list config="results" />\n\t\t\t<feature-details config="feature-details"/>\n\t\t</panel>\n\t</gxm:taskbar>\n</layout>\n\n'})})})]}),"\n",(0,a.jsx)(t.h2,{id:"add-configuration-for-the-branding-service",children:"Add Configuration for the Branding Service"}),"\n",(0,a.jsxs)(t.p,{children:["Next, we are going to add an app item to configure the Branding Service, which ",(0,a.jsx)(t.a,{href:"/docs/mobile/configuration-theme",children:"manages application theming"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",metastring:'title="app/app.json"',children:'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["mobile", "large"]\n        },\n        // highlight-start\n        {\n            "$type": "branding",\n            "id": "branding"\n        },\n        // highlight-end\n        {\n            "$type": "map-extension",\n            "id": "default",\n            "onClick": [\n                "tasks.identify",\n                "results.display",\n                "map.zoom-to-features"\n            ],\n            "webMap": "0ba877a4185448cb832af9a661031e31"\n        },\n        {\n            "$type": "feature-details",\n            "id": "feature-details",\n            "onFeatureShow": "highlights.add-focus",\n            "onFeatureHide": "highlights.remove-focus"\n        },\n        {\n            "$type": "results",\n            "id": "results",\n            "onFeatureShow": [\n                "highlights.add",\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "userSet": true\n                    }\n                }\n            ],\n            "onFeatureRemove": "highlights.remove",\n            "onAllFeaturesRemoved": [\n                "panel.close-host-panel",\n                "search.clear",\n                "results.clear"\n            ],\n            "onFeatureClick": [\n                "results.display-details",\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "snapPosition": "middle"\n                    }\n                },\n                "map.zoom-to-features",\n                "highlights.pulse"\n            ]\n        }\n    ]\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"add-a-new-theme",children:"Add a New Theme"}),"\n",(0,a.jsx)(t.p,{children:"The branding service can be configured with a list of themes. Let's configure our branding service with a new theme with that has a custom background color."}),"\n",(0,a.jsxs)(t.p,{children:["You can customize the theme by changing any of the ",(0,a.jsx)(t.a,{href:"/docs/mobile/configuration-theme#theme-color-reference",children:"built-in color keys"})," used for themes."]}),"\n",(0,a.jsxs)(o.A,{defaultValue:"config",values:[{label:"App Config",value:"config"},{label:"UI",value:"ui"}],children:[(0,a.jsx)(r.A,{value:"config",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",metastring:'title="app/app.json"',children:'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["mobile", "large"]\n        },\n        {\n            "$type": "branding",\n            "id": "branding",\n            // highlight-start\n            "activeTheme": "custom-theme",\n            "themes": [\n                {\n                    "id": "custom-theme",\n                    "colors": {\n                        "primaryBackground": [50, 153, 168, 255]\n                    }\n                }\n            ]\n            // highlight-end\n        },\n        {\n            "$type": "map-extension",\n            "id": "default",\n            "onClick": [\n                "tasks.identify",\n                "results.display",\n                "map.zoom-to-features"\n            ],\n            "webMap": "0ba877a4185448cb832af9a661031e31"\n        },\n        {\n            "$type": "feature-details",\n            "id": "feature-details",\n            "onFeatureShow": "highlights.add-focus",\n            "onFeatureHide": "highlights.remove-focus"\n        },\n        {\n            "$type": "results",\n            "id": "results",\n            "onFeatureShow": [\n                "highlights.add",\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "userSet": true\n                    }\n                }\n            ],\n            "onFeatureRemove": "highlights.remove",\n            "onAllFeaturesRemoved": [\n                "panel.close-host-panel",\n                "search.clear",\n                "results.clear"\n            ],\n            "onFeatureClick": [\n                "results.display-details",\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "snapPosition": "middle"\n                    }\n                },\n                "map.zoom-to-features",\n                "highlights.pulse"\n            ]\n        }\n    ]\n}\n'})})}),(0,a.jsx)(r.A,{value:"ui",children:(0,a.jsx)("img",{src:(0,s.A)("img/mobile-customize-theme-blue.png")})})]}),"\n",(0,a.jsx)(t.h2,{id:"relevant-sdk-samples",children:"Relevant SDK Samples"}),"\n",(0,a.jsxs)(t.p,{children:["The VertiGIS Studio Mobile SDK Samples has an example of ",(0,a.jsx)(t.a,{href:"https://github.com/vertigis/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/AppConfiguration/Theme",children:"changing the theme through configuration"}),"."]})]})}function g(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var a=n(8215);const i={tabItem:"tabItem_Ymn6"};var o=n(4848);function r({children:e,hidden:t,className:n}){return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,n),hidden:t,children:e})}},1470:(e,t,n)=>{n.d(t,{A:()=>j});var a=n(6540),i=n(8215),o=n(3104),r=n(6347),s=n(205),l=n(7485),u=n(1682),c=n(9466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((({props:{value:e,label:t,attributes:n,default:a}})=>({value:e,label:t,attributes:n,default:a})))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p({value:e,tabValues:t}){return t.some((t=>t.value===e))}function m({queryString:e=!1,groupId:t}){const n=(0,r.W6)(),i=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,l.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,o=h(e),[r,l]=(0,a.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,d]=m({queryString:n,groupId:i}),[g,f]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,i]=(0,c.Dv)(t);return[n,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:i}),b=(()=>{const e=u??g;return p({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{b&&l(b)}),[b]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=n(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(4848);function y({className:e,block:t,selectedValue:n,selectValue:a,tabValues:r}){const s=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.a_)(),u=e=>{const t=e.currentTarget,i=s.indexOf(t),o=r[i].value;o!==n&&(l(t),a(o))},c=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},e),children:r.map((({value:e,label:t,attributes:a})=>(0,v.jsx)("li",{role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,ref:e=>s.push(e),onKeyDown:c,onClick:u,...a,className:(0,i.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":n===e}),children:t??e},e)))})}function x({lazy:e,children:t,selectedValue:n}){const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=i.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function w(e){const t=g(e);return(0,v.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,v.jsx)(y,{...e,...t}),(0,v.jsx)(x,{...e,...t})]})}function j(e){const t=(0,f.A)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(t))}},9389:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(8774),i=(n(6540),n(53));const o={root:"root_Uwqo"};var r=n(4848);function s({title:e,description:t,link:n}){return(0,r.jsx)("div",{className:(0,i.A)("card-demo",o.root),children:(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("div",{className:"card__header",children:(0,r.jsx)("h3",{children:e})}),(0,r.jsx)("div",{className:"card__body",children:(0,r.jsx)("p",{children:t})}),(0,r.jsx)("div",{className:"card__footer",children:(0,r.jsx)(a.A,{className:"button button--secondary button--block",to:n,children:"Get Started"})})]})})}},556:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);const a={root:"root_vxd5"};var i=n(4848);function o({children:e}){return(0,i.jsx)("div",{className:a.root,children:e})}},53:(e,t,n)=>{function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}n.d(t,{A:()=>i});const i=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var a=n(6540);const i={},o=a.createContext(i);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);