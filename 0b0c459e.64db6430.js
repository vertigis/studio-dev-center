(window.webpackJsonp=window.webpackJsonp||[]).push([[7,82,88],{231:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,b=p["".concat(r,".").concat(m)]||p[m]||d[m]||i;return n?o.a.createElement(b,c(c({ref:t},l),{},{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},232:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}));var a=n(235),o=n(233);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.a)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(a)return t+n;const r=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+r:r}(t,e,n,a)}}function r(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},233:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}))},234:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},235:function(e,t,n){"use strict";var a=n(0),o=n(19);t.a=function(){const e=Object(a.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},236:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(13),r=n(233),c=n(8);const s=Object(a.createContext)({collectLink:()=>{}});var l=n(232),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n};t.a=function(e){var t,{isNavLink:n,to:p,href:d,activeClassName:m,"data-noBrokenLinkCheck":b}=e,h=u(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]);const{withBaseUrl:f}=Object(l.b)(),g=Object(a.useContext)(s),v=p||d,y=Object(r.a)(v),O=null==v?void 0:v.replace("pathname://",""),j=void 0!==O?(e=>e.startsWith("/"))(w=O)?f(w):w:void 0;var w;const x=Object(a.useRef)(!1),k=n?i.e:i.c,N=c.a.canUseIntersectionObserver;let C;Object(a.useEffect)(()=>(!N&&y&&window.docusaurus.prefetch(j),()=>{N&&C&&C.disconnect()}),[j,N,y]);const T=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,S=!j||!y||T;return j&&y&&!T&&!b&&g.collectLink(j),S?o.a.createElement("a",Object.assign({href:j},!y&&{target:"_blank",rel:"noopener noreferrer"},h)):o.a.createElement(k,Object.assign({},h,{onMouseEnter:()=>{x.current||(window.docusaurus.preload(j),x.current=!0)},innerRef:e=>{var t,n;N&&e&&y&&(t=e,n=()=>{window.docusaurus.prefetch(j)},C=new window.IntersectionObserver(e=>{e.forEach(e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(C.unobserve(t),C.disconnect(),n())})}),C.observe(t))},to:j||""},n&&{activeClassName:m}))}},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),o=n.n(a),i=n(46),r=n.n(i);function c({children:e}){return o.a.createElement("div",{className:r.a.root},e)}},238:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(236),o=n(0),i=n.n(o),r=n(234),c=n(47),s=n.n(c);function l({title:e,description:t,link:n}){return i.a.createElement("div",{className:Object(r.a)("card-demo",s.a.root)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h3",null,e)),i.a.createElement("div",{className:"card__body"},i.a.createElement("p",null,t)),i.a.createElement("div",{className:"card__footer"},i.a.createElement(a.a,{className:"button button--secondary button--block",to:n},"Get Started"))))}},239:function(e,t,n){"use strict";var a=n(0);const o=Object(a.createContext)(void 0);t.a=o},240:function(e,t,n){"use strict";var a=n(0),o=n(239);t.a=function(){const e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},241:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(240),r=n(234),c=n(48),s=n.n(c);const l=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:c,values:p,groupId:d}=e,{tabGroupChoices:m,setTabGroupChoices:b}=Object(i.a)(),[h,f]=Object(a.useState)(c),[g,v]=Object(a.useState)(!1);if(null!=d){const e=m[d];null!=e&&e!==h&&p.some(t=>t.value===e)&&f(e)}const y=e=>{f(e),null!=d&&b(d,e)},O=[],j=e=>{e.metaKey||e.altKey||e.ctrlKey||v(!0)},w=()=>{v(!1)};return Object(a.useEffect)(()=>{window.addEventListener("keydown",j),window.addEventListener("mousedown",w)},[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===e,className:Object(r.a)("tabs__item",s.a.tabItem,{"tabs__item--active":h===e}),style:g?{}:{outline:"none"},key:e,ref:e=>O.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(O,e.target,e),j(e)},onFocus:()=>y(e),onClick:()=>{y(e),v(!1)},onPointerDown:()=>v(!1)},t))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===h)[0]))}},242:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}},53:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(2),o=(n(0),n(231));const i={},r={unversionedId:"mobile/snippets/tweak-layout-config",id:"mobile/snippets/tweak-layout-config",isDocsHomePage:!1,title:"tweak-layout-config",description:"If you just need to make a small change to the layout and app config of an existing application, you can download the config and layout files for the application, tweak them, and then re-upload them.",source:"@site/docs/mobile/snippets/tweak-layout-config.mdx",slug:"/mobile/snippets/tweak-layout-config",permalink:"/docs/mobile/snippets/tweak-layout-config",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/tweak-layout-config.mdx",version:"current"},c=[],s={rightToc:c};function l({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you just need to make a small change to the layout and app config of an existing application, you can ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.geocortex.com/mobileviewer/latest/admin-help/Default.htm#gmv/designer/configuration-Options.htm#Download-app-config%3FTocPath%3DConfiguration%7CConfiguration%2520Options%7C_____3"}),"download the config and layout files for the application"),", tweak them, and then re-upload them."))))}l.isMDXComponent=!0},56:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),o=(n(0),n(231)),i=n(53);const r={},c={unversionedId:"mobile/snippets/prereqs-layout-config-editing",id:"mobile/snippets/prereqs-layout-config-editing",isDocsHomePage:!1,title:"prereqs-layout-config-editing",description:"Follow along by setting up the Geocortex Mobile SDK and editing the minimal layout and app config provided.",source:"@site/docs/mobile/snippets/prereqs-layout-config-editing.mdx",slug:"/mobile/snippets/prereqs-layout-config-editing",permalink:"/docs/mobile/snippets/prereqs-layout-config-editing",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/prereqs-layout-config-editing.mdx",version:"current"},s=[],l={rightToc:s};function u({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Follow along by setting up the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/sdk-overview"}),"Geocortex Mobile SDK")," and editing the minimal layout and app config provided."),Object(o.b)(i.default,{mdxType:"TweakLayoutConfigSnippet"}))}u.isMDXComponent=!0},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return m}));var a=n(2),o=(n(0),n(231)),i=n(241),r=n(242),c=n(232),s=(n(237),n(238),n(56));const l={title:"Customize the Theme",description:"Geocortex Mobile - Learn how to customize the look and feel of your Geocortex Mobile application"},u={unversionedId:"mobile/tutorial-customize-application-theme",id:"mobile/tutorial-customize-application-theme",isDocsHomePage:!1,title:"Customize the Theme",description:"Geocortex Mobile - Learn how to customize the look and feel of your Geocortex Mobile application",source:"@site/docs/mobile/tutorial-customize-application-theme.mdx",slug:"/mobile/tutorial-customize-application-theme",permalink:"/docs/mobile/tutorial-customize-application-theme",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/tutorial-customize-application-theme.mdx",version:"current",sidebar:"mobile",previous:{title:"Change the Default Behavior of Components",permalink:"/docs/mobile/tutorial-change-default-behavior"},next:{title:"Add a Medium Layout",permalink:"/docs/mobile/tutorial-add-medium-layout"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Create a Basic App",id:"create-a-basic-app",children:[]},{value:"Add Configuration for the Branding Service",id:"add-configuration-for-the-branding-service",children:[]},{value:"Add a New Theme",id:"add-a-new-theme",children:[]},{value:"Relevant SDK Samples",id:"relevant-sdk-samples",children:[]}],d={rightToc:p};function m({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},d,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Geocortex Mobile's appearance is built around two concepts: theme and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/configuration-layout-getting-started"}),"layout"),". The theme controls the color scheme of the app, while the layout controls the organization of content."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The theme can be partially configured by using the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.geocortex.com/webviewer/latest/admin-help/Default.htm#gwv/component-settings.htm#branding-settings%3FTocPath%3DConfiguration%7CComponent%2520Settings%7C_____4"}),"Geocortex Mobile Designer"),"."))),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)(s.default,{mdxType:"PrereqsLayoutConfigSnippet"}),Object(o.b)("h2",{id:"create-a-basic-app"},"Create a Basic App"),Object(o.b)("p",null,"Let's create a basic application with layout and config that we can theme."),Object(o.b)(i.a,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"}],mdxType:"Tabs"},Object(o.b)(r.a,{value:"config",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'}),'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["mobile", "large"]\n        },\n        {\n            "$type": "map-extension",\n            "id": "default",\n            "onClick": [\n                "tasks.identify",\n                "results.display",\n                "map.zoom-to-features"\n            ],\n            "webMap": "0ba877a4185448cb832af9a661031e31"\n        },\n        {\n            "$type": "feature-details",\n            "id": "feature-details",\n            "onFeatureShow": "highlights.add-focus",\n            "onFeatureHide": "highlights.remove-focus"\n        },\n        {\n            "$type": "results",\n            "id": "results",\n            "onFeatureShow": [\n                "highlights.add",\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "userSet": true\n                    }\n                }\n            ],\n            "onFeatureRemove": "highlights.remove",\n            "onAllFeaturesRemoved": [\n                "panel.close-host-panel",\n                "search.clear",\n                "results.clear"\n            ],\n            "onFeatureClick": [\n                "results.display-details",\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "snapPosition": "middle"\n                    }\n                },\n                "map.zoom-to-features",\n                "highlights.pulse"\n            ]\n        }\n    ]\n}\n'))),Object(o.b)(r.a,{value:"layout",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:'title="app/layout-large.xml"',title:'"app/layout-large.xml"'}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd">\n    <gxm:taskbar id="taskbar" orientation="vertical">\n        <map config="default" slot="main"/>\n        <panel>\n            <results-list config="results" />\n            <feature-details config="feature-details"/>\n        </panel>\n    </gxm:taskbar>\n</layout>\n\n')))),Object(o.b)("h2",{id:"add-configuration-for-the-branding-service"},"Add Configuration for the Branding Service"),Object(o.b)("p",null,"Next, we are going to add an app item to configure the Branding Service, which ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/configuration-theme"}),"manages application theming"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'}),'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["mobile", "large"]\n        },\n        // highlight-start\n        {\n            "$type": "branding",\n            "id": "branding"\n        },\n        // highlight-end\n        {\n            "$type": "map-extension",\n            "id": "default",\n            "onClick": [\n                "tasks.identify",\n                "results.display",\n                "map.zoom-to-features"\n            ],\n            "webMap": "0ba877a4185448cb832af9a661031e31"\n        },\n        {\n            "$type": "feature-details",\n            "id": "feature-details",\n            "onFeatureShow": "highlights.add-focus",\n            "onFeatureHide": "highlights.remove-focus"\n        },\n        {\n            "$type": "results",\n            "id": "results",\n            "onFeatureShow": [\n                "highlights.add",\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "userSet": true\n                    }\n                }\n            ],\n            "onFeatureRemove": "highlights.remove",\n            "onAllFeaturesRemoved": [\n                "panel.close-host-panel",\n                "search.clear",\n                "results.clear"\n            ],\n            "onFeatureClick": [\n                "results.display-details",\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "snapPosition": "middle"\n                    }\n                },\n                "map.zoom-to-features",\n                "highlights.pulse"\n            ]\n        }\n    ]\n}\n')),Object(o.b)("h2",{id:"add-a-new-theme"},"Add a New Theme"),Object(o.b)("p",null,"The branding service can be configured with a list of themes. Let's configure our branding service with a new theme with that has a custom background color."),Object(o.b)("p",null,"You can customize the theme by changing any of the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/configuration-theme#theme-color-reference"}),"built-in color keys")," used for themes."),Object(o.b)(i.a,{defaultValue:"config",values:[{label:"App Config",value:"config"},{label:"UI",value:"ui"}],mdxType:"Tabs"},Object(o.b)(r.a,{value:"config",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'}),'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["mobile", "large"]\n        },\n        {\n            "$type": "branding",\n            "id": "branding",\n            // highlight-start\n            "activeTheme": "custom-theme",\n            "themes": [\n                {\n                    "id": "custom-theme",\n                    "colors": {\n                        "primaryBackground": [50, 153, 168, 255]\n                    }\n                }\n            ]\n            // highlight-end\n        },\n        {\n            "$type": "map-extension",\n            "id": "default",\n            "onClick": [\n                "tasks.identify",\n                "results.display",\n                "map.zoom-to-features"\n            ],\n            "webMap": "0ba877a4185448cb832af9a661031e31"\n        },\n        {\n            "$type": "feature-details",\n            "id": "feature-details",\n            "onFeatureShow": "highlights.add-focus",\n            "onFeatureHide": "highlights.remove-focus"\n        },\n        {\n            "$type": "results",\n            "id": "results",\n            "onFeatureShow": [\n                "highlights.add",\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "userSet": true\n                    }\n                }\n            ],\n            "onFeatureRemove": "highlights.remove",\n            "onAllFeaturesRemoved": [\n                "panel.close-host-panel",\n                "search.clear",\n                "results.clear"\n            ],\n            "onFeatureClick": [\n                "results.display-details",\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "snapPosition": "middle"\n                    }\n                },\n                "map.zoom-to-features",\n                "highlights.pulse"\n            ]\n        }\n    ]\n}\n'))),Object(o.b)(r.a,{value:"ui",mdxType:"TabItem"},Object(o.b)("img",{src:Object(c.a)("img/mobile-customize-theme-blue.png")}))),Object(o.b)("h2",{id:"relevant-sdk-samples"},"Relevant SDK Samples"),Object(o.b)("p",null,"The Geocortex Mobile SDK Samples has an example of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/AppConfiguration/Theme"}),"changing the theme through configuration"),"."))}m.isMDXComponent=!0}}]);