(globalThis.webpackChunkgeocortex_dev_center=globalThis.webpackChunkgeocortex_dev_center||[]).push([[8889,9362,5326],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>d});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6742:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var o=n(7294),a=n(3727),r=n(2263),i=n(3919),l=n(412);const s=(0,o.createContext)({collectLink:()=>{}});var c=n(4996),p=n(8780);const u=function({isNavLink:e,to:t,href:n,activeClassName:u,isActive:m,"data-noBrokenLinkCheck":d,autoAddBaseUrl:f=!0,...h}){var w;const{siteConfig:{trailingSlash:g}}=(0,r.Z)(),{withBaseUrl:k}=(0,c.C)(),v=(0,o.useContext)(s),y=t||n,b=(0,i.Z)(y),x=null==y?void 0:y.replace("pathname://","");let N=void 0!==x?(C=x,f&&(e=>e.startsWith("/"))(C)?k(C):C):void 0;var C;N&&b&&(N=(0,p.applyTrailingSlash)(N,g));const T=(0,o.useRef)(!1),Z=e?a.OL:a.rU,O=l.Z.canUseIntersectionObserver;let _;(0,o.useEffect)((()=>(!O&&b&&null!=N&&window.docusaurus.prefetch(N),()=>{O&&_&&_.disconnect()})),[N,O,b]);const j=null!==(w=null==N?void 0:N.startsWith("#"))&&void 0!==w&&w,I=!N||!b||j;return N&&b&&!j&&!d&&v.collectLink(N),I?o.createElement("a",{href:N,...y&&!b&&{target:"_blank",rel:"noopener noreferrer"},...h}):o.createElement(Z,{...h,onMouseEnter:()=>{T.current||null==N||(window.docusaurus.preload(N),T.current=!0)},innerRef:e=>{var t,n;O&&e&&b&&(t=e,n=()=>{null!=N&&window.docusaurus.prefetch(N)},_=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(_.unobserve(t),_.disconnect(),n())}))})),_.observe(t))},to:N||"",...e&&{isActive:m,activeClassName:u}})}},3919:(e,t,n)=>{"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!o(e)}n.d(t,{b:()=>o,Z:()=>a})},4996:(e,t,n)=>{"use strict";n.d(t,{C:()=>r,Z:()=>i});var o=n(2263),a=n(3919);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,o.Z)();return{withBaseUrl:(n,o)=>function(e,t,n,{forcePrependBaseUrl:o=!1,absolute:r=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(o)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return r?e+i:i}(t,e,n,o)}}function i(e,t={}){const{withBaseUrl:n}=r();return n(e,t)}},8215:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var o=n(7294);const a=function({children:e,hidden:t,className:n}){return o.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},1395:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var o=n(7294),a=n(944),r=n(6010);const i="tabItem_1uMI",l="tabItemActive_2DSg";const s=37,c=39;const p=function(e){const{lazy:t,block:n,defaultValue:p,values:u,groupId:m,className:d}=e,{tabGroupChoices:f,setTabGroupChoices:h}=(0,a.Z)(),[w,g]=(0,o.useState)(p),k=o.Children.toArray(e.children),v=[];if(null!=m){const e=f[m];null!=e&&e!==w&&u.some((t=>t.value===e))&&g(e)}const y=e=>{const t=e.currentTarget,n=v.indexOf(t),o=u[n].value;g(o),null!=m&&(h(m,o),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:o,right:a}=e.getBoundingClientRect(),{innerHeight:r,innerWidth:i}=window;return t>=0&&a<=i&&o<=r&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((()=>t.classList.remove(l)),2e3))}),150))},b=e=>{var t;let n;switch(e.keyCode){case c:{const t=v.indexOf(e.target)+1;n=v[t]||v[0];break}case s:{const t=v.indexOf(e.target)-1;n=v[t]||v[v.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},d)},u.map((({value:e,label:t})=>o.createElement("li",{role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,className:(0,r.Z)("tabs__item",i,{"tabs__item--active":w===e}),key:e,ref:e=>v.push(e),onKeyDown:b,onFocus:y,onClick:y},t)))),t?(0,o.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},k.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}},9443:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var o=n(7294),a=n(9443);const r=function(){const e=(0,o.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),o="/"===n?"/":t?(a=n).endsWith("/")?a:`${a}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(n);var a;return e.replace(n,o)}},8780:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return o(a).default}});var r=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return o(r).default}})},9964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1962:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var o=n(6742),a=n(7294),r=n(6010);const i="root_2PFE";function l({title:e,description:t,link:n}){return a.createElement("div",{className:(0,r.Z)("card-demo",i)},a.createElement("div",{className:"card"},a.createElement("div",{className:"card__header"},a.createElement("h3",null,e)),a.createElement("div",{className:"card__body"},a.createElement("p",null,t)),a.createElement("div",{className:"card__footer"},a.createElement(o.Z,{className:"button button--secondary button--block",to:n},"Get Started"))))}},7763:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var o=n(7294);const a="root_NqT0";function r({children:e}){return o.createElement("div",{className:a},e)}},4340:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>r,contentTitle:()=>i,metadata:()=>l,toc:()=>s,default:()=>p});var o=n(2122),a=(n(7294),n(3905));const r={},i=void 0,l={unversionedId:"snippets/workflow-url",id:"snippets/workflow-url",isDocsHomePage:!1,title:"workflow-url",description:"https://apps.geocortex.com/workflow/designer/#workflow=",source:"@site/docs/snippets/workflow-url.mdx",sourceDirName:"snippets",slug:"/snippets/workflow-url",permalink:"/docs/snippets/workflow-url",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/snippets/workflow-url.mdx",version:"current",frontMatter:{}},s=[],c={toc:s};function p({components:e,...t}){return(0,a.kt)("wrapper",(0,o.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("div",{class:"alert alert--secondary",role:"alert"},"https://apps.geocortex.com/workflow/designer/#workflow=",(0,a.kt)("b",null,"44010fc421dd4659b74fb921e09ba594")),(0,a.kt)("br",null))}p.isMDXComponent=!0},6473:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>r,contentTitle:()=>i,metadata:()=>l,toc:()=>s,default:()=>p});var o=n(2122),a=(n(7294),n(3905));const r={},i=void 0,l={unversionedId:"web/snippets/prereqs-layout-config-editing",id:"web/snippets/prereqs-layout-config-editing",isDocsHomePage:!1,title:"prereqs-layout-config-editing",description:"-   Follow along by setting up the Geocortex Web SDK and editing the minimal layout and app config provided.",source:"@site/docs/web/snippets/prereqs-layout-config-editing.mdx",sourceDirName:"web/snippets",slug:"/web/snippets/prereqs-layout-config-editing",permalink:"/docs/web/snippets/prereqs-layout-config-editing",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/snippets/prereqs-layout-config-editing.mdx",version:"current",frontMatter:{}},s=[],c={toc:s};function p({components:e,...t}){return(0,a.kt)("wrapper",(0,o.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Follow along by setting up the ",(0,a.kt)("a",{parentName:"li",href:"/docs/web/sdk-overview"},"Geocortex Web SDK")," and editing the minimal layout and app config provided."),(0,a.kt)("li",{parentName:"ul"},"Check out the ",(0,a.kt)("a",{parentName:"li",href:"/docs/web/sdk-deployment#upload-app-config-and-layout-to-an-app-optional"},"deployment instructions")," to learn about how to deploy layout and app config to an application.")))}p.isMDXComponent=!0},487:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>m,contentTitle:()=>d,metadata:()=>f,toc:()=>h,default:()=>g});var o=n(2122),a=(n(7294),n(3905)),r=n(1395),i=n(8215),l=n(4996),s=n(7763),c=n(1962),p=n(6473),u=n(4340);const m={title:"Run a Workflow from App Config",description:"Geocortex Web - Learn how to run a workflow using app config and layout"},d=void 0,f={unversionedId:"web/tutorial-run-workflow-app-config",id:"web/tutorial-run-workflow-app-config",isDocsHomePage:!1,title:"Run a Workflow from App Config",description:"Geocortex Web - Learn how to run a workflow using app config and layout",source:"@site/docs/web/tutorial-run-workflow-app-config.mdx",sourceDirName:"web",slug:"/web/tutorial-run-workflow-app-config",permalink:"/docs/web/tutorial-run-workflow-app-config",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/tutorial-run-workflow-app-config.mdx",version:"current",frontMatter:{title:"Run a Workflow from App Config",description:"Geocortex Web - Learn how to run a workflow using app config and layout"},sidebar:"web",previous:{title:"Customize the Theme",permalink:"/docs/web/tutorial-customize-application-theme"},next:{title:"Display a Custom Form",permalink:"/docs/web/tutorial-display-custom-form"}},h=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],w={toc:h};function g({components:e,...t}){return(0,a.kt)("wrapper",(0,o.Z)({},w,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Many components have default behaviors which can be ",(0,a.kt)("a",{parentName:"p",href:"/docs/web/tutorial-change-default-behavior"},"configured through the app config JSON"),". Any configurable property which takes a ",(0,a.kt)("a",{parentName:"p",href:"/docs/web/configuration-commands-operations"},"command or operation")," as its value can also be configured with a special command, ",(0,a.kt)("inlineCode",{parentName:"p"},"workflow.run"),". By using the ",(0,a.kt)("inlineCode",{parentName:"p"},"workflow.run")," command, you can even execute a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/geocortex-workflow.htm#Introduction_to_Geocortex_Workflow%3FTocPath%3D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Introduction%2520to%2520Geocortex%2520Workflow%7C_____0"},"workflow")," with completely configurable behavior."),(0,a.kt)("p",null,"In this article, we can configure a workflow to run when the map is initialized."),(0,a.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Configuring a workflow to run when the map is initialized can be done through ",(0,a.kt)("a",{parentName:"p",href:"https://apps.geocortex.com/webviewer/designer/"},"Geocortex Web Designer")," and this is the preferred method of configurable if Designer can be used. The goal of this article is to demonstrate the pattern of overriding behaviors with workflows."))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)(p.default,{mdxType:"PrereqsLayoutConfigSnippet"})," ",(0,a.kt)("p",null,"First, let's create a basic map using the layout and app config."),(0,a.kt)(r.Z,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"config",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'},'{\n    "schemaVersion": "1.0",\n    "items": []\n}\n'))),(0,a.kt)(i.Z,{value:"layout",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'},'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1" xmlns:custom="your.custom.namespace">\n    <map/>\n</layout>\n')))),(0,a.kt)("p",null,"Next, add an ",(0,a.kt)("a",{parentName:"p",href:"/docs/web/configuration-app-config-getting-started#anatomy-of-an-app-config"},"app item")," to the configuration for the map component, and configure the map to run ",(0,a.kt)("inlineCode",{parentName:"p"},"ui.display-notification")," on initialization as a test."),(0,a.kt)(r.Z,{defaultValue:"config",values:[{label:"App Config",value:"config"},{label:"Layout",value:"layout"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"config",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'},'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "id": "map-config",\n            "$type": "map-extension",\n            "onInitialized": [\n                {\n                    "name": "ui.display-notification",\n                    "arguments": {\n                        "message": "Map initialized"\n                    }\n                }\n            ]\n        }\n    ]\n}\n'))),(0,a.kt)(i.Z,{value:"layout",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'},'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1" xmlns:custom="your.custom.namespace">\n    <map config="map-config"/>\n</layout>\n')))),(0,a.kt)("p",null,"The next step is going to be replacing the ",(0,a.kt)("inlineCode",{parentName:"p"},"ui.display-notification")," command with a ",(0,a.kt)("inlineCode",{parentName:"p"},"workflow.run-*")," command. First, we need to create a workflow to use for the command."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open up ",(0,a.kt)("a",{parentName:"li",href:"https://apps.geocortex.com/workflow/designer/"},"Geocortex Workflow Designer")," and create and save a new workflow.")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",null,"Optionally, you can"," ",(0,a.kt)("a",{href:(0,l.Z)("workflows/run-workflow-app-config.json"),download:"run-workflow-app-config.json",target:"_blank"},"download this example workflow")," ","that displays an alert and then"," ",(0,a.kt)("a",{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/import-export-workflows.htm",target:"_blank"},"import it into the Geocortex Workflow Designer.")))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},'Add an "Alert" activity as a test.'),(0,a.kt)("li",{parentName:"ol"},"Copy the ID of the the workflow from the URL")),(0,a.kt)(u.default,{mdxType:"WorkflowUrlSnippet"}),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Add the workflow as an app item to your app config.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'},'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "id": "map-config",\n            "$type": "map-extension",\n            "onInitialized": [\n                {\n                    "name": "ui.display-notification",\n                    "arguments": {\n                        "message": "Map initialized"\n                    }\n                }\n            ]\n        },\n        // highlight-start\n        {\n            "$type": "workflow",\n            "id": "map-initialized-workflow",\n            "title": "Map Initialized Workflow",\n            "commandArgumentInput": "context",\n            "portalItem": "<your-workflow-id-here>"\n        }\n        // highlight-end\n    ]\n}\n')),(0,a.kt)("p",null,"Finally, you can configure the map to run this workflow on initialization."),(0,a.kt)(r.Z,{defaultValue:"config",values:[{label:"App Config",value:"config"},{label:"Layout",value:"layout"},{label:"UI",value:"ui"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"config",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'},'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "id": "map-config",\n            "$type": "map-extension",\n            "onInitialized": [\n                // highlight-start\n                {\n                    "name": "workflow.run",\n                    "arguments": {\n                        "id": "map-initialized-workflow"\n                    }\n                }\n                // highlight-end\n            ]\n        },\n        {\n            "$type": "workflow",\n            "id": "map-initialized-workflow",\n            "title": "Map Initialized Workflow",\n            "commandArgumentInput": "context",\n            "portalItem": "<your-workflow-id-here>"\n        }\n    ]\n}\n'))),(0,a.kt)(i.Z,{value:"layout",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'},'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1" xmlns:custom="your.custom.namespace">\n    <map config="map-config"/>\n</layout>\n'))),(0,a.kt)(i.Z,{value:"ui",mdxType:"TabItem"},(0,a.kt)("img",{src:(0,l.Z)("img/web-workflow-app-config-demo.png")}))),(0,a.kt)("p",null,"You've now successfully customized behavior through the app config with a workflow. From this point, you could develop the workflow further to solve your business case."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"For a more in depth example, check out the tutorial on ",(0,a.kt)("a",{parentName:"p",href:"/docs/web/tutorial-change-default-map-click-behavior"},"overriding default map click behavior with a workflow"),"."))),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)(s.Z,{mdxType:"UseCaseContainer"},(0,a.kt)(c.Z,{title:"Build a Custom Form",description:"Learn how to build a custom form with Geocortex Workflow",link:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/forms.htm",mdxType:"UseCaseCard"}),(0,a.kt)(c.Z,{title:"Implement a Custom Activity",description:"Learn how to implement a custom activity with the Geocortex Workflow SDK",link:(0,l.Z)("docs/web/tutorial-implement-custom-activity"),mdxType:"UseCaseCard"}),(0,a.kt)(c.Z,{title:"Implement a Custom Form Element",description:"Learn how to implement a custom form element with the Geocortex Workflow SDK",link:(0,l.Z)("docs/web/tutorial-implement-custom-form-elements"),mdxType:"UseCaseCard"}),(0,a.kt)(c.Z,{title:"Change Geocortex Web's Default Map Click Behavior",description:"Learn how to use Geocortex Workflow to override Geocortex Web's default map click behavior",link:(0,l.Z)("docs/web/tutorial-change-default-map-click-behavior"),mdxType:"UseCaseCard"})))}g.isMDXComponent=!0},6010:(e,t,n)=>{"use strict";function o(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:()=>a})}}]);