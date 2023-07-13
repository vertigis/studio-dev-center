"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[9671,5272,5897],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),o=n(6010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),o=n(7294),r=n(6010),i=n(2466),l=n(6550),s=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function m(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=m(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,u]=h({queryString:n,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),f=(()=>{const e=s??p;return d({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var f=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(p(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},i,{className:(0,r.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=g(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",b.tabList)},o.createElement(y,(0,a.Z)({},e,t)),o.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return o.createElement(k,(0,a.Z)({key:String(t)},e))}},5858:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(9960),o=n(7294),r=n(6010);const i={root:"root_Uwqo"};function l(e){let{title:t,description:n,link:l}=e;return o.createElement("div",{className:(0,r.Z)("card-demo",i.root)},o.createElement("div",{className:"card"},o.createElement("div",{className:"card__header"},o.createElement("h3",null,t)),o.createElement("div",{className:"card__body"},o.createElement("p",null,n)),o.createElement("div",{className:"card__footer"},o.createElement(a.Z,{className:"button button--secondary button--block",to:l},"Get Started"))))}},7467:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const o={root:"root_vxd5"};function r(e){let{children:t}=e;return a.createElement("div",{className:o.root},t)}},1081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905)),r=n(2807);const i={},l=void 0,s={unversionedId:"mobile/snippets/prereqs-layout-config-editing",id:"mobile/snippets/prereqs-layout-config-editing",title:"prereqs-layout-config-editing",description:"Follow along by setting up the VertiGIS Studio Mobile SDK and editing the minimal layout and app config provided.",source:"@site/docs/mobile/snippets/prereqs-layout-config-editing.mdx",sourceDirName:"mobile/snippets",slug:"/mobile/snippets/prereqs-layout-config-editing",permalink:"/docs/mobile/snippets/prereqs-layout-config-editing",draft:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/snippets/prereqs-layout-config-editing.mdx",tags:[],version:"current",frontMatter:{}},u={},c=[],p={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Follow along by setting up the ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-overview"},"VertiGIS Studio Mobile SDK")," and editing the minimal layout and app config provided."),(0,o.kt)(r.default,{mdxType:"TweakLayoutConfigSnippet"}))}d.isMDXComponent=!0},2807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={},i=void 0,l={unversionedId:"mobile/snippets/tweak-layout-config",id:"mobile/snippets/tweak-layout-config",title:"tweak-layout-config",description:"If you just need to make a small change to the layout and app config of an existing application, you can download the config and layout files for the application, tweak them, and then re-upload them.",source:"@site/docs/mobile/snippets/tweak-layout-config.mdx",sourceDirName:"mobile/snippets",slug:"/mobile/snippets/tweak-layout-config",permalink:"/docs/mobile/snippets/tweak-layout-config",draft:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/snippets/tweak-layout-config.mdx",tags:[],version:"current",frontMatter:{}},s={},u=[],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you just need to make a small change to the layout and app config of an existing application, you can ",(0,o.kt)("a",{parentName:"p",href:"https://docs.vertigisstudio.com/mobileviewer/latest/admin-help/Default.htm#gmv/designer/configuration-Options.htm#Download-app-config%3FTocPath%3DConfiguration%7CConfiguration%2520Options%7C_____3"},"download the config and layout files for the application"),", tweak them, and then re-upload them.")))}m.isMDXComponent=!0},1661:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>p,toc:()=>d});var a=n(7462),o=(n(7294),n(3905)),r=n(4866),i=n(5162),l=n(4996),s=(n(7467),n(5858),n(1081));const u={title:"Customize the Theme",description:"VertiGIS Studio Mobile - Learn how to customize the look and feel of your VertiGIS Studio Mobile application"},c=void 0,p={unversionedId:"mobile/tutorial-customize-application-theme",id:"mobile/tutorial-customize-application-theme",title:"Customize the Theme",description:"VertiGIS Studio Mobile - Learn how to customize the look and feel of your VertiGIS Studio Mobile application",source:"@site/docs/mobile/tutorial-customize-application-theme.mdx",sourceDirName:"mobile",slug:"/mobile/tutorial-customize-application-theme",permalink:"/docs/mobile/tutorial-customize-application-theme",draft:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/tutorial-customize-application-theme.mdx",tags:[],version:"current",frontMatter:{title:"Customize the Theme",description:"VertiGIS Studio Mobile - Learn how to customize the look and feel of your VertiGIS Studio Mobile application"},sidebar:"mobile",previous:{title:"Change the Default Behavior of Components",permalink:"/docs/mobile/tutorial-change-default-behavior"},next:{title:"Add a Medium Layout",permalink:"/docs/mobile/tutorial-add-medium-layout"}},m={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a Basic App",id:"create-a-basic-app",level:2},{value:"Add Configuration for the Branding Service",id:"add-configuration-for-the-branding-service",level:2},{value:"Add a New Theme",id:"add-a-new-theme",level:2},{value:"Relevant SDK Samples",id:"relevant-sdk-samples",level:2}],h={toc:d},g="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(g,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"VertiGIS Studio Mobile's appearance is built around two concepts: theme and ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/configuration-layout-getting-started"},"layout"),". The theme controls the color scheme of the app, while the layout controls the organization of content."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The theme can be partially configured by using the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.vertigisstudio.com/webviewer/latest/admin-help/Default.htm#gwv/component-settings.htm#branding-settings%3FTocPath%3DConfiguration%7CComponent%2520Settings%7C_____4"},"VertiGIS Studio Mobile Designer"),".")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)(s.default,{mdxType:"PrereqsLayoutConfigSnippet"}),(0,o.kt)("h2",{id:"create-a-basic-app"},"Create a Basic App"),(0,o.kt)("p",null,"Let's create a basic application with layout and config that we can theme."),(0,o.kt)(r.Z,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"config",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'},'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["mobile", "large"]\n        },\n        {\n            "$type": "map-extension",\n            "id": "default",\n            "onClick": [\n                "tasks.identify",\n                "results.display",\n                "map.zoom-to-features"\n            ],\n            "webMap": "0ba877a4185448cb832af9a661031e31"\n        },\n        {\n            "$type": "feature-details",\n            "id": "feature-details",\n            "onFeatureShow": "highlights.add-focus",\n            "onFeatureHide": "highlights.remove-focus"\n        },\n        {\n            "$type": "results",\n            "id": "results",\n            "onFeatureShow": [\n                "highlights.add",\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "userSet": true\n                    }\n                }\n            ],\n            "onFeatureRemove": "highlights.remove",\n            "onAllFeaturesRemoved": [\n                "panel.close-host-panel",\n                "search.clear",\n                "results.clear"\n            ],\n            "onFeatureClick": [\n                "results.display-details",\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "snapPosition": "middle"\n                    }\n                },\n                "map.zoom-to-features",\n                "highlights.pulse"\n            ]\n        }\n    ]\n}\n'))),(0,o.kt)(i.Z,{value:"layout",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="app/layout-large.xml"',title:'"app/layout-large.xml"'},'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd">\n    <gxm:taskbar id="taskbar" orientation="vertical">\n        <map config="default" slot="main"/>\n        <panel>\n            <results-list config="results" />\n            <feature-details config="feature-details"/>\n        </panel>\n    </gxm:taskbar>\n</layout>\n\n')))),(0,o.kt)("h2",{id:"add-configuration-for-the-branding-service"},"Add Configuration for the Branding Service"),(0,o.kt)("p",null,"Next, we are going to add an app item to configure the Branding Service, which ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/configuration-theme"},"manages application theming"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'},'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["mobile", "large"]\n        },\n        // highlight-start\n        {\n            "$type": "branding",\n            "id": "branding"\n        },\n        // highlight-end\n        {\n            "$type": "map-extension",\n            "id": "default",\n            "onClick": [\n                "tasks.identify",\n                "results.display",\n                "map.zoom-to-features"\n            ],\n            "webMap": "0ba877a4185448cb832af9a661031e31"\n        },\n        {\n            "$type": "feature-details",\n            "id": "feature-details",\n            "onFeatureShow": "highlights.add-focus",\n            "onFeatureHide": "highlights.remove-focus"\n        },\n        {\n            "$type": "results",\n            "id": "results",\n            "onFeatureShow": [\n                "highlights.add",\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "userSet": true\n                    }\n                }\n            ],\n            "onFeatureRemove": "highlights.remove",\n            "onAllFeaturesRemoved": [\n                "panel.close-host-panel",\n                "search.clear",\n                "results.clear"\n            ],\n            "onFeatureClick": [\n                "results.display-details",\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "snapPosition": "middle"\n                    }\n                },\n                "map.zoom-to-features",\n                "highlights.pulse"\n            ]\n        }\n    ]\n}\n')),(0,o.kt)("h2",{id:"add-a-new-theme"},"Add a New Theme"),(0,o.kt)("p",null,"The branding service can be configured with a list of themes. Let's configure our branding service with a new theme with that has a custom background color."),(0,o.kt)("p",null,"You can customize the theme by changing any of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/configuration-theme#theme-color-reference"},"built-in color keys")," used for themes."),(0,o.kt)(r.Z,{defaultValue:"config",values:[{label:"App Config",value:"config"},{label:"UI",value:"ui"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"config",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'},'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["mobile", "large"]\n        },\n        {\n            "$type": "branding",\n            "id": "branding",\n            // highlight-start\n            "activeTheme": "custom-theme",\n            "themes": [\n                {\n                    "id": "custom-theme",\n                    "colors": {\n                        "primaryBackground": [50, 153, 168, 255]\n                    }\n                }\n            ]\n            // highlight-end\n        },\n        {\n            "$type": "map-extension",\n            "id": "default",\n            "onClick": [\n                "tasks.identify",\n                "results.display",\n                "map.zoom-to-features"\n            ],\n            "webMap": "0ba877a4185448cb832af9a661031e31"\n        },\n        {\n            "$type": "feature-details",\n            "id": "feature-details",\n            "onFeatureShow": "highlights.add-focus",\n            "onFeatureHide": "highlights.remove-focus"\n        },\n        {\n            "$type": "results",\n            "id": "results",\n            "onFeatureShow": [\n                "highlights.add",\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "userSet": true\n                    }\n                }\n            ],\n            "onFeatureRemove": "highlights.remove",\n            "onAllFeaturesRemoved": [\n                "panel.close-host-panel",\n                "search.clear",\n                "results.clear"\n            ],\n            "onFeatureClick": [\n                "results.display-details",\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "snapPosition": "middle"\n                    }\n                },\n                "map.zoom-to-features",\n                "highlights.pulse"\n            ]\n        }\n    ]\n}\n'))),(0,o.kt)(i.Z,{value:"ui",mdxType:"TabItem"},(0,o.kt)("img",{src:(0,l.Z)("img/mobile-customize-theme-blue.png")}))),(0,o.kt)("h2",{id:"relevant-sdk-samples"},"Relevant SDK Samples"),(0,o.kt)("p",null,"The VertiGIS Studio Mobile SDK Samples has an example of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/AppConfiguration/Theme"},"changing the theme through configuration"),"."))}f.isMDXComponent=!0}}]);