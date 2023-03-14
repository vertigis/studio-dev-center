"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[4290,3131,3381],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||a;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6742:(e,t,n)=>{n.d(t,{Z:()=>p});var o=n(7294),r=n(3727),a=n(2263),i=n(3919),s=n(412);const l=(0,o.createContext)({collectLink:()=>{}});var c=n(4996),d=n(8780);const p=function({isNavLink:e,to:t,href:n,activeClassName:p,isActive:m,"data-noBrokenLinkCheck":u,autoAddBaseUrl:h=!0,...v}){var f;const{siteConfig:{trailingSlash:g}}=(0,a.Z)(),{withBaseUrl:b}=(0,c.C)(),w=(0,o.useContext)(l),k=t||n,y=(0,i.Z)(k),x=null==k?void 0:k.replace("pathname://","");let M=void 0!==x?(N=x,h&&(e=>e.startsWith("/"))(N)?b(N):N):void 0;var N;M&&y&&(M=(0,d.applyTrailingSlash)(M,g));const C=(0,o.useRef)(!1),E=e?r.OL:r.rU,T=s.Z.canUseIntersectionObserver;let I;(0,o.useEffect)((()=>(!T&&y&&null!=M&&window.docusaurus.prefetch(M),()=>{T&&I&&I.disconnect()})),[M,T,y]);const S=null!==(f=null==M?void 0:M.startsWith("#"))&&void 0!==f&&f,O=!M||!y||S;return M&&y&&!S&&!u&&w.collectLink(M),O?o.createElement("a",{href:M,...k&&!y&&{target:"_blank",rel:"noopener noreferrer"},...v}):o.createElement(E,{...v,onMouseEnter:()=>{C.current||null==M||(window.docusaurus.preload(M),C.current=!0)},innerRef:e=>{var t,n;T&&e&&y&&(t=e,n=()=>{null!=M&&window.docusaurus.prefetch(M)},I=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(I.unobserve(t),I.disconnect(),n())}))})),I.observe(t))},to:M||"",...e&&{isActive:m,activeClassName:p}})}},3919:(e,t,n)=>{function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}n.d(t,{Z:()=>r,b:()=>o})},4996:(e,t,n)=>{n.d(t,{C:()=>a,Z:()=>i});var o=n(2263),r=n(3919);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,o.Z)();return{withBaseUrl:(n,o)=>function(e,t,n,{forcePrependBaseUrl:o=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(o)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+i:i}(t,e,n,o)}}function i(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},8215:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(7294);const r=function({children:e,hidden:t,className:n}){return o.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},1395:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(7294),r=n(944),a=n(6010);const i="tabItem_1uMI",s="tabItemActive_2DSg";const l=37,c=39;const d=function(e){const{lazy:t,block:n,defaultValue:d,values:p,groupId:m,className:u}=e,{tabGroupChoices:h,setTabGroupChoices:v}=(0,r.Z)(),[f,g]=(0,o.useState)(d),b=o.Children.toArray(e.children),w=[];if(null!=m){const e=h[m];null!=e&&e!==f&&p.some((t=>t.value===e))&&g(e)}const k=e=>{const t=e.currentTarget,n=w.indexOf(t),o=p[n].value;g(o),null!=m&&(v(m,o),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:o,right:r}=e.getBoundingClientRect(),{innerHeight:a,innerWidth:i}=window;return t>=0&&r<=i&&o<=a&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((()=>t.classList.remove(s)),2e3))}),150))},y=e=>{var t;let n;switch(e.keyCode){case c:{const t=w.indexOf(e.target)+1;n=w[t]||w[0];break}case l:{const t=w.indexOf(e.target)-1;n=w[t]||w[w.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},u)},p.map((({value:e,label:t})=>o.createElement("li",{role:"tab",tabIndex:f===e?0:-1,"aria-selected":f===e,className:(0,a.Z)("tabs__item",i,{"tabs__item--active":f===e}),key:e,ref:e=>w.push(e),onKeyDown:y,onFocus:k,onClick:k},t)))),t?(0,o.cloneElement)(b.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},b.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}},9443:(e,t,n)=>{n.d(t,{Z:()=>o});const o=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(7294),r=n(9443);const a=function(){const e=(0,o.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},8802:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),o="/"===n?"/":t?(r=n).endsWith("/")?r:`${r}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(n);var r;return e.replace(n,o)}},8780:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return o(r).default}});var a=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return o(a).default}})},9964:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1962:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(6742),r=n(7294),a=n(6010);const i="root_2PFE";function s({title:e,description:t,link:n}){return r.createElement("div",{className:(0,a.Z)("card-demo",i)},r.createElement("div",{className:"card"},r.createElement("div",{className:"card__header"},r.createElement("h3",null,e)),r.createElement("div",{className:"card__body"},r.createElement("p",null,t)),r.createElement("div",{className:"card__footer"},r.createElement(o.Z,{className:"button button--secondary button--block",to:n},"Get Started"))))}},7763:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(7294);const r="root_NqT0";function a({children:e}){return o.createElement("div",{className:r},e)}},1838:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>p,default:()=>v,frontMatter:()=>d,metadata:()=>m,toc:()=>u});var o=n(7462),r=(n(7294),n(3905)),a=n(4996),i=n(1395),s=n(8215),l=n(1962),c=n(7763);n(6088),n(3923);const d={title:"Component Interactions",description:"VertiGIS Studio Web - Learn how to make custom components interact in with the larger application"},p=void 0,m={unversionedId:"web/sdk-components-interactions",id:"web/sdk-components-interactions",isDocsHomePage:!1,title:"Component Interactions",description:"VertiGIS Studio Web - Learn how to make custom components interact in with the larger application",source:"@site/docs/web/sdk-components-interactions.mdx",sourceDirName:"web",slug:"/web/sdk-components-interactions",permalink:"/docs/web/sdk-components-interactions",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/sdk-components-interactions.mdx",version:"current",frontMatter:{title:"Component Interactions",description:"VertiGIS Studio Web - Learn how to make custom components interact in with the larger application"},sidebar:"web",previous:{title:"UIContext",permalink:"/docs/web/sdk-components-ui-context"},next:{title:"Service Injection",permalink:"/docs/web/sdk-components-injecting-services"}},u=[{value:"Interacting with Components through Models",id:"interacting-with-components-through-models",children:[{value:"Importing Models",id:"importing-models",children:[]},{value:"Exporting Models",id:"exporting-models",children:[]}]},{value:"Interacting with Application Services with Dependency Injection",id:"interacting-with-application-services-with-dependency-injection",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],h={toc:u};function v({components:e,...t}){return(0,r.kt)("wrapper",(0,o.Z)({},h,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Components have multiple ways of interacting with other components and services. When possible, interaction through ",(0,r.kt)("a",{parentName:"p",href:"/docs/web/sdk-commands-operations#running-commands-and-operations"},"commands and operations")," should be preferred, as this introduces the loosest coupling. When you need stronger coupling and direct access to the API, then ",(0,r.kt)("strong",{parentName:"p"},"model imports")," or ",(0,r.kt)("strong",{parentName:"p"},"service injection")," can be used. A good example of this is needing direct access to the ",(0,r.kt)("a",{parentName:"p",href:"https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html"},"ArcGIS Map"),", which can be exposed by importing the map model."),(0,r.kt)("h2",{id:"interacting-with-components-through-models"},"Interacting with Components through Models"),(0,r.kt)("p",null,"Components can interact with each other through their ",(0,r.kt)("a",{parentName:"p",href:"/docs/web/sdk-components-reference#models"},"respective models"),". A model can either declare that it is exported, like the map model, or that it imports a model."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Declaring a model as exported exposes it to other components for importing.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"@importModel")," decorator will tell the component to attempt to retrieve a reference to the given model type, according to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/web/configuration-advanced-model-binding"},"model binding rules")))),(0,r.kt)("p",null,"Components like the ",(0,r.kt)("inlineCode",{parentName:"p"},"<scalebar>")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"<compass>")," import the map model, and this allows them to respond to changes in the maps state ",(0,r.kt)("strong",{parentName:"p"},"through")," the map model."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'@exportModel\nexport class MapModel implements ComponentModel {\n    // ... map stuff ...\n}\n\nexport class ScaleBarModel implements ComponentModel {\n    @importModel("map-extension")\n    map: MapExtension | undefined;\n\n    // ... scale bar stuff ...\n}\n')),(0,r.kt)("h3",{id:"importing-models"},"Importing Models"),(0,r.kt)("p",null,"Custom components can also import models and interact with them. The import must be done in the model of the component. This tight coupling can allow deeper access to other components models, but also negates the advantages of the abstraction of commands and operations."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The property decorated by ",(0,r.kt)("inlineCode",{parentName:"p"},"@importModel")," is completely managed by VertiGIS Studio Web and should never be modified or serialized in app config. Its value can change at any time, e.g. to and from undefined, or from one model instance to a completely different one. The component needs to react appropriately to these changes and not make any assumptions about its current value."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n    ComponentModelBase,\n    serializable,\n    importModel,\n} from "@vertigis/web/models";\nimport { MapExtension } from "@vertigis/arcgis-extensions/mapping/MapExtension";\n\n@serializable\nexport default class ExampleComponentModel extends ComponentModelBase {\n    @importModel("map-extension")\n    mapModel: MapExtension | undefined;\n\n    logMapViewMode() {\n        if (this.mapModel.viewMode === "map") {\n            console.log("Map is 2d");\n        } else {\n            console.log("Map is 3d");\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"exporting-models"},"Exporting Models"),(0,r.kt)("p",null,"You can mark a model as exported by adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"@exportModel")," decorator to the model class. The following example shows a model that is exported, and then imported by another model and used."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Models are imported with the ",(0,r.kt)("inlineCode",{parentName:"p"},"itemType")," name that they are registered with."))),(0,r.kt)(i.Z,{defaultValue:"exportedModel",values:[{label:"Exported Model",value:"exportedModel"},{label:"Importing Model",value:"importingModel"},{label:"Importing Model Component",value:"importingModelComponent"},{label:"Layout",value:"layout"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"exportedModel",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/components/ExportedModel/ExportedModel.ts"',title:'"src/components/ExportedModel/ExportedModel.ts"'},'import {\n    ComponentModelBase,\n    serializable,\n    exportModel,\n} from "@vertigis/web/models";\n\n@exportModel\n@serializable\nexport default class ExportedModel extends ComponentModelBase {\n    someCustomModelProperty: string = "Some Text";\n}\n'))),(0,r.kt)(s.Z,{value:"importingModel",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/components/CustomComponent/CustomModel.ts"',title:'"src/components/CustomComponent/CustomModel.ts"'},'import {\n    ComponentModelBase,\n    serializable,\n    importModel,\n} from "@vertigis/web/models";\nimport { ExportedModel } from "../ExportedModel";\n\n@serializable\nexport default class CustomModel extends ComponentModelBase {\n    @importModel("exported-model")\n    exportedModel: ExportedModel | undefined;\n\n    getContentText() {\n        if (this.exportedModel) {\n            return this.exportedModel.someCustomModelProperty;\n        } else {\n            console.warn(\n                "Could not import required model \'exported-model\' for \'CustomModel\'"\n            );\n            return "";\n        }\n    }\n}\n'))),(0,r.kt)(s.Z,{value:"importingModelComponent",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/importedModel/ExportedModelComponent.tsx"',title:'"src/components/importedModel/ExportedModelComponent.tsx"'},'import React from "react";\nimport Typography from "@vertigis/web/ui/Typography";\n\nimport {\n    LayoutElement,\n    LayoutElementProperties,\n} from "@vertigis/web/components";\nimport { CustomModel } from ".";\n\nexport default function CustomComponent(\n    props: LayoutElementProperties<CustomModel>\n) {\n    return (\n        <LayoutElement\n            {...props}\n            style={{ backgroundColor: "white" }}\n        >\n            <Typography variant="h1">\n                {`Text From the imported Model: "${props.model.getContentText()}"`}\n            </Typography>\n        </LayoutElement>\n    );\n}\n'))),(0,r.kt)(s.Z,{value:"layout",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'},'<?xml version="1.0" encoding="utf-8" ?>\n<layout xmlns="https://geocortex.com/layout/v1" xmlns:custom="your.custom.namespace">\n    <stack padding="2">\n        <custom:custom-component />\n        <custom:exported-model-component />\n    </stack>\n</layout>\n')))),(0,r.kt)("h2",{id:"interacting-with-application-services-with-dependency-injection"},"Interacting with Application Services with Dependency Injection"),(0,r.kt)("p",null,"Components can interact with built-in VertiGIS Studio Web ",(0,r.kt)("a",{parentName:"p",href:"/docs/web/sdk-services-overview"},"services"),". Through services, they can interact with the map, application context, workflows, and more. Services can only be injected into a components through their ",(0,r.kt)("a",{parentName:"p",href:"/docs/web/sdk-components-reference#models"},"associated models"),". Learn more about how to ",(0,r.kt)("a",{parentName:"p",href:"/docs/web/sdk-components-injecting-services"},"inject a service into a component"),"."),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)(c.Z,{mdxType:"UseCaseContainer"},(0,r.kt)(l.Z,{title:"Build a Custom Component that Imports the Map Model",description:"Follow step by step instructions to import the map model into a custom component",link:(0,a.Z)("docs/web/tutorial-import-map-model"),mdxType:"UseCaseCard"}),(0,r.kt)(l.Z,{title:"Learn how to Interact with Services",description:"Learn about how components can interact with built-in or custom services",link:(0,a.Z)("docs/web/sdk-components-injecting-services"),mdxType:"UseCaseCard"}),(0,r.kt)(l.Z,{title:"Learn how Components are Bound to Models in the Layout",description:"Learn how layout structure can be used to bind components to their required models",link:(0,a.Z)("docs/web/configuration-advanced-model-binding"),mdxType:"UseCaseCard"})))}v.isMDXComponent=!0},3923:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={},i=void 0,s={unversionedId:"web/snippets/framework-components",id:"web/snippets/framework-components",isDocsHomePage:!1,title:"framework-components",description:"This example uses VertiGIS Studio Web layout components",source:"@site/docs/web/snippets/framework-components.mdx",sourceDirName:"web/snippets",slug:"/web/snippets/framework-components",permalink:"/docs/web/snippets/framework-components",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/snippets/framework-components.mdx",version:"current",frontMatter:{}},l=[],c={toc:l};function d({components:e,...t}){return(0,r.kt)("wrapper",(0,o.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This example uses VertiGIS Studio Web layout components"))))}d.isMDXComponent=!0},6088:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={},i=void 0,s={unversionedId:"web/snippets/prereqs-custom-code",id:"web/snippets/prereqs-custom-code",isDocsHomePage:!1,title:"prereqs-custom-code",description:"-   Download and setup the VertiGIS Studio Web SDK.",source:"@site/docs/web/snippets/prereqs-custom-code.mdx",sourceDirName:"web/snippets",slug:"/web/snippets/prereqs-custom-code",permalink:"/docs/web/snippets/prereqs-custom-code",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/snippets/prereqs-custom-code.mdx",version:"current",frontMatter:{}},l=[],c={toc:l};function d({components:e,...t}){return(0,r.kt)("wrapper",(0,o.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download and setup the ",(0,r.kt)("a",{parentName:"li",href:"/docs/web/sdk-overview"},"VertiGIS Studio Web SDK"),"."),(0,r.kt)("li",{parentName:"ul"},"Check out the ",(0,r.kt)("a",{parentName:"li",href:"/docs/web/sdk-deployment#uploading-custom-code-to-an-app"},"deployment instructions")," to learn more about deploying custom code to a VertiGIS Studio Web App.")))}d.isMDXComponent=!0},6010:(e,t,n)=>{function o(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:()=>r})}}]);