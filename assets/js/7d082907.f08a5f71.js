(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[4106,9362,2250,5272,5897],{3905:(e,t,o)=>{"use strict";o.d(t,{Zo:()=>p,kt:()=>d});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(o),d=n,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return o?a.createElement(h,r(r({ref:t},p),{},{components:o})):a.createElement(h,r({ref:t},p))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var c=2;c<i;c++)r[c]=o[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},6742:(e,t,o)=>{"use strict";o.d(t,{Z:()=>u});var a=o(7294),n=o(3727),i=o(2263),r=o(3919),l=o(412);const s=(0,a.createContext)({collectLink:()=>{}});var c=o(4996),p=o(8780);const u=function({isNavLink:e,to:t,href:o,activeClassName:u,isActive:m,"data-noBrokenLinkCheck":d,autoAddBaseUrl:h=!0,...f}){var k;const{siteConfig:{trailingSlash:g}}=(0,i.Z)(),{withBaseUrl:v}=(0,c.C)(),w=(0,a.useContext)(s),b=t||o,y=(0,r.Z)(b),N=null==b?void 0:b.replace("pathname://","");let C=void 0!==N?(x=N,h&&(e=>e.startsWith("/"))(x)?v(x):x):void 0;var x;C&&y&&(C=(0,p.applyTrailingSlash)(C,g));const S=(0,a.useRef)(!1),M=e?n.OL:n.rU,D=l.Z.canUseIntersectionObserver;let _;(0,a.useEffect)((()=>(!D&&y&&null!=C&&window.docusaurus.prefetch(C),()=>{D&&_&&_.disconnect()})),[C,D,y]);const T=null!==(k=null==C?void 0:C.startsWith("#"))&&void 0!==k&&k,I=!C||!y||T;return C&&y&&!T&&!d&&w.collectLink(C),I?a.createElement("a",{href:C,...b&&!y&&{target:"_blank",rel:"noopener noreferrer"},...f}):a.createElement(M,{...f,onMouseEnter:()=>{S.current||null==C||(window.docusaurus.preload(C),S.current=!0)},innerRef:e=>{var t,o;D&&e&&y&&(t=e,o=()=>{null!=C&&window.docusaurus.prefetch(C)},_=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(_.unobserve(t),_.disconnect(),o())}))})),_.observe(t))},to:C||"",...e&&{isActive:m,activeClassName:u}})}},3919:(e,t,o)=>{"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!a(e)}o.d(t,{b:()=>a,Z:()=>n})},4996:(e,t,o)=>{"use strict";o.d(t,{C:()=>i,Z:()=>r});var a=o(2263),n=o(3919);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(o,a)=>function(e,t,o,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!o)return o;if(o.startsWith("#"))return o;if((0,n.b)(o))return o;if(a)return t+o;const r=o.startsWith(t)?o:t+o.replace(/^\//,"");return i?e+r:r}(t,e,o,a)}}function r(e,t={}){const{withBaseUrl:o}=i();return o(e,t)}},8215:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});var a=o(7294);const n=function({children:e,hidden:t,className:o}){return a.createElement("div",{role:"tabpanel",hidden:t,className:o},e)}},1395:(e,t,o)=>{"use strict";o.d(t,{Z:()=>p});var a=o(7294),n=o(944),i=o(6010);const r="tabItem_1uMI",l="tabItemActive_2DSg";const s=37,c=39;const p=function(e){const{lazy:t,block:o,defaultValue:p,values:u,groupId:m,className:d}=e,{tabGroupChoices:h,setTabGroupChoices:f}=(0,n.Z)(),[k,g]=(0,a.useState)(p),v=a.Children.toArray(e.children),w=[];if(null!=m){const e=h[m];null!=e&&e!==k&&u.some((t=>t.value===e))&&g(e)}const b=e=>{const t=e.currentTarget,o=w.indexOf(t),a=u[o].value;g(a),null!=m&&(f(m,a),setTimeout((()=>{(function(e){const{top:t,left:o,bottom:a,right:n}=e.getBoundingClientRect(),{innerHeight:i,innerWidth:r}=window;return t>=0&&n<=r&&a<=i&&o>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((()=>t.classList.remove(l)),2e3))}),150))},y=e=>{var t;let o;switch(e.keyCode){case c:{const t=w.indexOf(e.target)+1;o=w[t]||w[0];break}case s:{const t=w.indexOf(e.target)-1;o=w[t]||w[w.length-1];break}}null==(t=o)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},d)},u.map((({value:e,label:t})=>a.createElement("li",{role:"tab",tabIndex:k===e?0:-1,"aria-selected":k===e,className:(0,i.Z)("tabs__item",r,{"tabs__item--active":k===e}),key:e,ref:e=>w.push(e),onKeyDown:y,onFocus:b,onClick:b},t)))),t?(0,a.cloneElement)(v.filter((e=>e.props.value===k))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}},9443:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});const a=(0,o(7294).createContext)(void 0)},944:(e,t,o)=>{"use strict";o.d(t,{Z:()=>i});var a=o(7294),n=o(9443);const i=function(){const e=(0,a.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[o]=e.split(/[#?]/),a="/"===o?"/":t?(n=o).endsWith("/")?n:`${n}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(o);var n;return e.replace(o,a)}},8780:function(e,t,o){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var n=o(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(n).default}});var i=o(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(i).default}})},9964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1962:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var a=o(6742),n=o(7294),i=o(6010);const r="root_2PFE";function l({title:e,description:t,link:o}){return n.createElement("div",{className:(0,i.Z)("card-demo",r)},n.createElement("div",{className:"card"},n.createElement("div",{className:"card__header"},n.createElement("h3",null,e)),n.createElement("div",{className:"card__body"},n.createElement("p",null,t)),n.createElement("div",{className:"card__footer"},n.createElement(a.Z,{className:"button button--secondary button--block",to:o},"Get Started"))))}},7763:(e,t,o)=>{"use strict";o.d(t,{Z:()=>i});var a=o(7294);const n="root_NqT0";function i({children:e}){return a.createElement("div",{className:n},e)}},7476:(e,t,o)=>{"use strict";o.r(t),o.d(t,{frontMatter:()=>r,contentTitle:()=>l,metadata:()=>s,toc:()=>c,default:()=>u});var a=o(2122),n=(o(7294),o(3905)),i=o(2457);const r={},l=void 0,s={unversionedId:"mobile/snippets/prereqs-layout-config-editing",id:"mobile/snippets/prereqs-layout-config-editing",isDocsHomePage:!1,title:"prereqs-layout-config-editing",description:"Follow along by setting up the VertiGIS Studio Mobile SDK and editing the minimal layout and app config provided.",source:"@site/docs/mobile/snippets/prereqs-layout-config-editing.mdx",sourceDirName:"mobile/snippets",slug:"/mobile/snippets/prereqs-layout-config-editing",permalink:"/docs/mobile/snippets/prereqs-layout-config-editing",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/snippets/prereqs-layout-config-editing.mdx",version:"current",frontMatter:{}},c=[],p={toc:c};function u({components:e,...t}){return(0,n.kt)("wrapper",(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Follow along by setting up the ",(0,n.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-overview"},"VertiGIS Studio Mobile SDK")," and editing the minimal layout and app config provided."),(0,n.kt)(i.default,{mdxType:"TweakLayoutConfigSnippet"}))}u.isMDXComponent=!0},6560:(e,t,o)=>{"use strict";o.r(t),o.d(t,{frontMatter:()=>i,contentTitle:()=>r,metadata:()=>l,toc:()=>s,default:()=>p});var a=o(2122),n=(o(7294),o(3905));const i={},r=void 0,l={unversionedId:"mobile/snippets/relevant-workflow-samples",id:"mobile/snippets/relevant-workflow-samples",isDocsHomePage:!1,title:"relevant-workflow-samples",description:"The VertiGIS Studio Mobile SDK Samples project has a variety of workflow samples:",source:"@site/docs/mobile/snippets/relevant-workflow-samples.mdx",sourceDirName:"mobile/snippets",slug:"/mobile/snippets/relevant-workflow-samples",permalink:"/docs/mobile/snippets/relevant-workflow-samples",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/snippets/relevant-workflow-samples.mdx",version:"current",frontMatter:{}},s=[],c={toc:s};function p({components:e,...t}){return(0,n.kt)("wrapper",(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The VertiGIS Studio Mobile SDK Samples project has a variety of workflow samples:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Workflow/RunWorkflow"},"Run a Workflow"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Workflow/CustomActivity"},"Build a Custom Activity"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Workflow/CustomFormComponent"},"Build a Custom Form Element")))))}p.isMDXComponent=!0},2457:(e,t,o)=>{"use strict";o.r(t),o.d(t,{frontMatter:()=>i,contentTitle:()=>r,metadata:()=>l,toc:()=>s,default:()=>p});var a=o(2122),n=(o(7294),o(3905));const i={},r=void 0,l={unversionedId:"mobile/snippets/tweak-layout-config",id:"mobile/snippets/tweak-layout-config",isDocsHomePage:!1,title:"tweak-layout-config",description:"If you just need to make a small change to the layout and app config of an existing application, you can download the config and layout files for the application, tweak them, and then re-upload them.",source:"@site/docs/mobile/snippets/tweak-layout-config.mdx",sourceDirName:"mobile/snippets",slug:"/mobile/snippets/tweak-layout-config",permalink:"/docs/mobile/snippets/tweak-layout-config",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/snippets/tweak-layout-config.mdx",version:"current",frontMatter:{}},s=[],c={toc:s};function p({components:e,...t}){return(0,n.kt)("wrapper",(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"If you just need to make a small change to the layout and app config of an existing application, you can ",(0,n.kt)("a",{parentName:"p",href:"https://docs.vertigisstudio.com/mobileviewer/latest/admin-help/Default.htm#gmv/designer/configuration-Options.htm#Download-app-config%3FTocPath%3DConfiguration%7CConfiguration%2520Options%7C_____3"},"download the config and layout files for the application"),", tweak them, and then re-upload them."))))}p.isMDXComponent=!0},8107:(e,t,o)=>{"use strict";o.r(t),o.d(t,{frontMatter:()=>d,contentTitle:()=>h,metadata:()=>f,toc:()=>k,default:()=>v});var a=o(2122),n=(o(7294),o(3905)),i=o(4996),r=o(1395),l=o(8215),s=o(7763),c=o(1962),p=o(7476),u=o(4340),m=o(6560);const d={title:"Change Default Map Click Behavior",description:"VertiGIS Studio Mobile - Learn how to configure VertiGIS Studio Mobile to change the default map click behavior"},h=void 0,f={unversionedId:"mobile/tutorial-change-default-map-click-behavior",id:"mobile/tutorial-change-default-map-click-behavior",isDocsHomePage:!1,title:"Change Default Map Click Behavior",description:"VertiGIS Studio Mobile - Learn how to configure VertiGIS Studio Mobile to change the default map click behavior",source:"@site/docs/mobile/tutorial-change-default-map-click-behavior.mdx",sourceDirName:"mobile",slug:"/mobile/tutorial-change-default-map-click-behavior",permalink:"/docs/mobile/tutorial-change-default-map-click-behavior",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/tutorial-change-default-map-click-behavior.mdx",version:"current",frontMatter:{title:"Change Default Map Click Behavior",description:"VertiGIS Studio Mobile - Learn how to configure VertiGIS Studio Mobile to change the default map click behavior"},sidebar:"mobile",previous:{title:"Display a Custom Form",permalink:"/docs/mobile/tutorial-display-custom-form"},next:{title:"Implement a Custom Form Element",permalink:"/docs/mobile/tutorial-implement-custom-form-elements"}},k=[{value:"What you&#39;re Building",id:"what-youre-building",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Initial Set up",id:"initial-set-up",children:[]},{value:"Set up a Workflow to Run on Map Click",id:"set-up-a-workflow-to-run-on-map-click",children:[]},{value:"Extend the Workflow to Create a Graphic Buffering the Click Geometry",id:"extend-the-workflow-to-create-a-graphic-buffering-the-click-geometry",children:[]},{value:"Relevant SDK Samples",id:"relevant-sdk-samples",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],g={toc:k};function v({components:e,...t}){return(0,n.kt)("wrapper",(0,a.Z)({},g,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"VertiGIS Studio Mobile comes with default behavior that runs on a map click. The default behavior will identify and display details for results in the nearby area. But what if you want to replace the functionality with your own behavior? This can be accomplished by leveraging ",(0,n.kt)("a",{parentName:"p",href:"https://apps.vertigisstudio.com/workflow/designer/"},"VertiGIS Studio Workflow")," and editing the ",(0,n.kt)("a",{parentName:"p",href:"/docs/mobile/configuration-app-config-getting-started"},"app config"),"."),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"It's actually possible to configure the Map's ",(0,n.kt)("inlineCode",{parentName:"p"},"onClick")," event in ",(0,n.kt)("a",{parentName:"p",href:"https://apps.vertigisstudio.com/mobile/designer/"},"VertiGIS Studio Mobile Designer"),", by setting a workflow as the action for the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.vertigisstudio.com/webviewer/latest/admin-help/Default.htm#gwv/component-settings.htm%3FTocPath%3DConfiguration%7CComponent%2520Settings%7C_____0"},"Maps click event"),". However, the point of this tutorial is to demonstrate the concept of configuring actions using the app config."))),(0,n.kt)("h2",{id:"what-youre-building"},"What you're Building"),(0,n.kt)("p",null,"We will modify the default map on click behavior to buffer the click geometry by a user provided distance and create a graphic which visualizes this buffer."),(0,n.kt)("img",{src:(0,i.Z)("img/mobile-custom-map-click-workflow-finished.png"),alt:"Map Click Workflow with Buffer Behavior"}),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)(p.default,{mdxType:"PrereqsLayoutConfigSnippet"}),(0,n.kt)("h2",{id:"initial-set-up"},"Initial Set up"),(0,n.kt)("p",null,"Start the VertiGIS Studio Mobile SDK with the following layout and app JSON. You should see a simple application with one layer, Fire Hydrants, which has a related table Fire Hydrant Surveys."),(0,n.kt)("p",null,"Try clicking the map. It should return results for the point you clicked in the results list."),(0,n.kt)(r.Z,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"config",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'},'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["mobile", "large"]\n        },\n        {\n            "$type": "map-extension",\n            "id": "map-1",\n            "onClick": [\n                "tasks.identify",\n                "highlights.pulse",\n                "results.display"\n            ],\n            "webMap": "0ba877a4185448cb832af9a661031e31"\n        },\n        {\n            "$type": "feature-details",\n            "id": "feature-details",\n            "onFeatureShow": "highlights.add-focus",\n            "onFeatureHide": "highlights.remove-focus",\n            "onFeatureDelete": [\n                "highlights.remove-focus",\n                "highlights.remove",\n                "edit.delete-features",\n                "results.hide-details",\n                "results.remove"\n            ]\n        },\n        {\n            "$type": "results",\n            "id": "results",\n            "onFeatureShow": [\n                "highlights.add",\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "userSet": true\n                    }\n                }\n            ],\n            "onFeatureHide": null,\n            "onFeatureRemove": "highlights.remove",\n            "onAllFeaturesRemoved": [\n                "panel.close-host-panel",\n                "search.clear",\n                "results.clear"\n            ],\n            "onFeatureClick": [\n                "results.display-details",\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "snapPosition": "middle"\n                    }\n                },\n                "map.zoom-to-features",\n                "highlights.pulse"\n            ],\n            "onFeatureLocate": [\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "snapPosition": "middle"\n                    }\n                },\n                "map.pan-to-features",\n                "highlights.pulse"\n            ],\n            "onClear": ["highlights.clear", "highlights.clear-focus"]\n        }\n    ]\n}\n'))),(0,n.kt)(l.Z,{value:"layout",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="app/layout-large.xml"',title:'"app/layout-large.xml"'},'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd">\n  <gxm:taskbar id="taskbar" orientation="vertical">\n    <map config="map-1" slot="main"/>\n    <panel>\n      <results-list config="results" />\n      <feature-details config="feature-details"/>\n      <gxm:update-feature/>\n      <gxm:add-related-feature />\n    </panel>\n  </gxm:taskbar>\n</layout>\n\n')))),(0,n.kt)("h2",{id:"set-up-a-workflow-to-run-on-map-click"},"Set up a Workflow to Run on Map Click"),(0,n.kt)("p",null,"The first thing we need to do is override the default map click behavior. We can do this by ",(0,n.kt)("a",{parentName:"p",href:"/docs/mobile/tutorial-change-default-behavior"},"editing the default behavior")," for the ",(0,n.kt)("inlineCode",{parentName:"p"},"<map/>")," component in the app config. The default behavior for the map's ",(0,n.kt)("inlineCode",{parentName:"p"},"onClick")," event is a command chain that runs ",(0,n.kt)("inlineCode",{parentName:"p"},"tasks.identify")," and then ",(0,n.kt)("inlineCode",{parentName:"p"},"highlights.pulse"),", and finally, ",(0,n.kt)("inlineCode",{parentName:"p"},"results.display"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n          "$type": "map-extension",\n          "id": "map-1",\n          "onClick": [\n              "tasks.identify",\n              "highlights.pulse",\n              "results.display"\n          ]\n          ...\n        }\n    ]\n}\n')),(0,n.kt)("p",null,"First, we are going to replace the command chain with a ",(0,n.kt)("inlineCode",{parentName:"p"},"workflow.run")," command that replicates this behavior."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open up ",(0,n.kt)("a",{parentName:"li",href:"https://apps.vertigisstudio.com/workflow/designer/"},"VertiGIS Studio Workflow Designer")," and create and save a new workflow."),(0,n.kt)("li",{parentName:"ol"},'Add an "Alert" activity as a test.'),(0,n.kt)("li",{parentName:"ol"},"Copy the ID of the the workflow from the URL")),(0,n.kt)(u.default,{mdxType:"WorkflowUrlSnippet"}),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Add the workflow as an app item to your app config.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "$type": "workflow",\n            "id": "map-click-workflow",\n            "title": "Map Click Workflow",\n            "commandArgumentInput": "context",\n            "target": "#taskbar",\n            "portalItem": "<your-workflow-id-here>"\n        },\n        ...\n    ]\n}\n')),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Next, configure the ",(0,n.kt)("inlineCode",{parentName:"li"},"onClick")," property of the Map Component in the app config to run the workflow.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "id": "default",\n            "$type": "map-extension",\n            "onClick": "workflow.run-map-click-workflow",\n            ...\n        }\n    ]\n}\n')),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Run the app and test your workflow. You should see your alert pop up when you try to click on the map.")),(0,n.kt)("img",{src:(0,i.Z)("img/mobile-custom-map-click-workflow-alert.png"),alt:"Map Click Workflow with Alert"}),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"Open up your workflow in the VertiGIS Studio Workflow Designer again. The default behavior we just overrode can be recreated with the use of ",(0,n.kt)("a",{parentName:"li",href:"https://docs.vertigisstudio.com/workflow/latest/help/Default.htm#wf5/help/activities/run-command.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____169"},"RunCommand")," and ",(0,n.kt)("a",{parentName:"li",href:"https://docs.vertigisstudio.com/workflow/latest/help/Default.htm#wf5/help/activities/run-operation.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____173"},"RunOperation")," activities. ",(0,n.kt)("inlineCode",{parentName:"li"},"tasks.identify")," is an operation, so it needs a RunOperation activity, and ",(0,n.kt)("inlineCode",{parentName:"li"},"highlights.pulse")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"results.display")," are commands, so they need RunCommand Activities. Chain these three activities together, passing the ",(0,n.kt)("a",{parentName:"li",href:"https://docs.vertigisstudio.com/webviewer/latest/admin-help/Default.htm#gwv/add-a-workflow-to-an-app.htm#use-the-menu-context-as-a-workflow-input%3FTocPath%3DConfiguration%7CAdd%2520a%2520Workflow%2520to%2520an%2520App%7C_____4"},"workflow context")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"tasks.identify")," and then passing the output of that operation to ",(0,n.kt)("inlineCode",{parentName:"li"},"highlights.pulse"),", and ",(0,n.kt)("inlineCode",{parentName:"li"},"results.display"),".")),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",null,"You can"," ",(0,n.kt)("a",{href:(0,i.Z)("workflows/mobile-map-click-behavior-recreated.json"),download:"map-click-behavior-recreated.json",target:"_blank"},"download this workflow")," ","and then"," ",(0,n.kt)("a",{href:"https://docs.vertigisstudio.com/workflow/latest/help/Default.htm#wf5/help/import-export-workflows.htm",target:"_blank"},"import it into the VertiGIS Studio Workflow Designer.")))),(0,n.kt)("img",{src:(0,i.Z)("img/mobile-custom-map-click-workflow-recreated.png"),alt:"Map Click Workflow with Original Operations"}),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},"Save the workflow and reload the application. Test the map click functionality and ensure it works as it originally did.")),(0,n.kt)("h2",{id:"extend-the-workflow-to-create-a-graphic-buffering-the-click-geometry"},"Extend the Workflow to Create a Graphic Buffering the Click Geometry"),(0,n.kt)("p",null,'At this point, you can choose to extend the map click behavior with VertiGIS Studio Workflow in whatever way is appropriate for your use case. You could execute a different "identify" for external results and add them to the set of results displayed, or zoom the map to a specific orientation and scale, or display a form for the user to fill out with relevant information to that location. For this example, a workflow was created which asks a user for a buffer distance, and creates a graphic showing the buffer around the click location.'),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",null,"You can"," ",(0,n.kt)("a",{href:(0,i.Z)("workflows/web-map-click-behavior-buffer.json"),download:"map-click-behavior-buffer.json",target:"_blank"},"download this buffer geometry workflow")," ","and then"," ",(0,n.kt)("a",{href:"https://docs.vertigisstudio.com/workflow/latest/help/Default.htm#wf5/help/import-export-workflows.htm",target:"_blank"},"import it into the VertiGIS Studio Workflow Designer.")))),(0,n.kt)("img",{src:(0,i.Z)("img/mobile-custom-map-click-workflow-finished.png"),alt:"Map Click Workflow with Buffer Behavior"}),(0,n.kt)("h2",{id:"relevant-sdk-samples"},"Relevant SDK Samples"),(0,n.kt)(m.default,{mdxType:"RelevantWorkflowSamples"}),(0,n.kt)("h2",{id:"next-steps"},"Next Steps"),(0,n.kt)("p",null,"This pattern of configuring behavior with a workflow can be applied to numerous components. You can use a workflow to control the behavior of the Map, Feature Details, Geolocate, Custom Components, and more. Often, a workflow can be created and used to execute custom behavior instead of requiring the implementation of a custom command or operation."),(0,n.kt)(s.Z,{mdxType:"UseCaseContainer"},(0,n.kt)(c.Z,{title:"VertiGIS Studio Workflow",description:"Learn more about VertiGIS Studio Workflow",link:(0,i.Z)("docs/workflow/overview"),mdxType:"UseCaseCard"}),(0,n.kt)(c.Z,{title:"Change Default Behavior",description:"Learn more about overriding default behaviors",link:(0,i.Z)("docs/mobile/tutorial-change-default-behavior"),mdxType:"UseCaseCard"}),(0,n.kt)(c.Z,{title:"SDK Sample that Demonstrates Overriding Default Behaviors",description:"Check out the SDK Sample for overriding default behaviors",link:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/AppConfiguration/MapAndFeatureCommands",mdxType:"UseCaseCard"}),(0,n.kt)(c.Z,{title:"Implement Custom Command or Operation",description:"Implement a custom command or operation with the Mobile SDK",link:(0,i.Z)("docs/mobile/tutorial-implement-command-operation"),mdxType:"UseCaseCard"})))}v.isMDXComponent=!0},4340:(e,t,o)=>{"use strict";o.r(t),o.d(t,{frontMatter:()=>i,contentTitle:()=>r,metadata:()=>l,toc:()=>s,default:()=>p});var a=o(2122),n=(o(7294),o(3905));const i={},r=void 0,l={unversionedId:"snippets/workflow-url",id:"snippets/workflow-url",isDocsHomePage:!1,title:"workflow-url",description:"https://apps.vertigisstudio.com/workflow/designer/#workflow=",source:"@site/docs/snippets/workflow-url.mdx",sourceDirName:"snippets",slug:"/snippets/workflow-url",permalink:"/docs/snippets/workflow-url",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/snippets/workflow-url.mdx",version:"current",frontMatter:{}},s=[],c={toc:s};function p({components:e,...t}){return(0,n.kt)("wrapper",(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("div",{class:"alert alert--secondary",role:"alert"},"https://apps.vertigisstudio.com/workflow/designer/#workflow=",(0,n.kt)("b",null,"44010fc421dd4659b74fb921e09ba594")),(0,n.kt)("br",null))}p.isMDXComponent=!0},6010:(e,t,o)=>{"use strict";function a(e){var t,o,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=a(e[t]))&&(n&&(n+=" "),n+=o);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,o=0,n="";o<arguments.length;)(e=arguments[o++])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n}o.d(t,{Z:()=>n})}}]);