"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[4290,3131,3381],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return n?o.createElement(h,s(s({ref:t},c),{},{components:n})):o.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(7294),r=n(6010);const a={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var o=n(7462),r=n(7294),a=n(6010),s=n(2466),i=n(6550),l=n(1980),p=n(7392),c=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:r}}=e;return{value:t,label:n,attributes:o,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function u(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const o=(0,i.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(o.location.search);t.set(a,e),o.replace({...o.location,search:t.toString()})}),[a,o])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,a=m(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:a}))),[l,p]=h({queryString:n,groupId:o}),[d,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,a]=(0,c.Nk)(n);return[o,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:o}),f=(()=>{const e=l??d;return u({value:e,tabValues:a})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),b(e)}),[p,b,a]),tabValues:a}}var f=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),o=p[n].value;o!==i&&(d(t),l(o))},u=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:u,onClick:m},s,{className:(0,a.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":i===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:o}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function k(e){const t=b(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",g.tabList)},r.createElement(v,(0,o.Z)({},e,t)),r.createElement(w,(0,o.Z)({},e,t)))}function y(e){const t=(0,f.Z)();return r.createElement(k,(0,o.Z)({key:String(t)},e))}},5858:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(9960),r=n(7294),a=n(6010);const s={root:"root_Uwqo"};function i(e){let{title:t,description:n,link:i}=e;return r.createElement("div",{className:(0,a.Z)("card-demo",s.root)},r.createElement("div",{className:"card"},r.createElement("div",{className:"card__header"},r.createElement("h3",null,t)),r.createElement("div",{className:"card__body"},r.createElement("p",null,n)),r.createElement("div",{className:"card__footer"},r.createElement(o.Z,{className:"button button--secondary button--block",to:i},"Get Started"))))}},7467:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(7294);const r={root:"root_vxd5"};function a(e){let{children:t}=e;return o.createElement("div",{className:r.root},t)}},246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>m,toc:()=>h});var o=n(7462),r=(n(7294),n(3905)),a=n(4996),s=n(4866),i=n(5162),l=n(5858),p=n(7467);n(9190),n(7840);const c={title:"Component Interactions",description:"VertiGIS Studio Web - Learn how to make custom components interact in with the larger application"},d=void 0,m={unversionedId:"web/sdk-components-interactions",id:"web/sdk-components-interactions",title:"Component Interactions",description:"VertiGIS Studio Web - Learn how to make custom components interact in with the larger application",source:"@site/docs/web/sdk-components-interactions.mdx",sourceDirName:"web",slug:"/web/sdk-components-interactions",permalink:"/docs/web/sdk-components-interactions",draft:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/sdk-components-interactions.mdx",tags:[],version:"current",frontMatter:{title:"Component Interactions",description:"VertiGIS Studio Web - Learn how to make custom components interact in with the larger application"},sidebar:"web",previous:{title:"UIContext",permalink:"/docs/web/sdk-components-ui-context"},next:{title:"Service Injection",permalink:"/docs/web/sdk-components-injecting-services"}},u={},h=[{value:"Interacting with Components through Models",id:"interacting-with-components-through-models",level:2},{value:"Importing Models",id:"importing-models",level:3},{value:"Exporting Models",id:"exporting-models",level:3},{value:"Interacting with Application Services with Dependency Injection",id:"interacting-with-application-services-with-dependency-injection",level:2},{value:"Next Steps",id:"next-steps",level:2}],b={toc:h},f="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,o.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Components have multiple ways of interacting with other components and services. When possible, interaction through ",(0,r.kt)("a",{parentName:"p",href:"/docs/web/sdk-commands-operations#running-commands-and-operations"},"commands and operations")," should be preferred, as this introduces the loosest coupling. When you need stronger coupling and direct access to the API, then ",(0,r.kt)("strong",{parentName:"p"},"model imports")," or ",(0,r.kt)("strong",{parentName:"p"},"service injection")," can be used. A good example of this is needing direct access to the ",(0,r.kt)("a",{parentName:"p",href:"https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html"},"ArcGIS Map"),", which can be exposed by importing the map model."),(0,r.kt)("h2",{id:"interacting-with-components-through-models"},"Interacting with Components through Models"),(0,r.kt)("p",null,"Components can interact with each other through their ",(0,r.kt)("a",{parentName:"p",href:"/docs/web/sdk-components-reference#models"},"respective models"),". A model can either declare that it is exported, like the map model, or that it imports a model."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Declaring a model as exported exposes it to other components for importing.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"@importModel")," decorator will tell the component to attempt to retrieve a reference to the given model type, according to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/web/configuration-advanced-model-binding"},"model binding rules")))),(0,r.kt)("p",null,"Components like the ",(0,r.kt)("inlineCode",{parentName:"p"},"<scalebar>")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"<compass>")," import the map model, and this allows them to respond to changes in the maps state ",(0,r.kt)("strong",{parentName:"p"},"through")," the map model."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'@exportModel\nexport class MapModel implements ComponentModel {\n    // ... map stuff ...\n}\n\nexport class ScaleBarModel implements ComponentModel {\n    @importModel("map-extension")\n    map: MapExtension | undefined;\n\n    // ... scale bar stuff ...\n}\n')),(0,r.kt)("h3",{id:"importing-models"},"Importing Models"),(0,r.kt)("p",null,"Custom components can also import models and interact with them. The import must be done in the model of the component. This tight coupling can allow deeper access to other components models, but also negates the advantages of the abstraction of commands and operations."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The property decorated by ",(0,r.kt)("inlineCode",{parentName:"p"},"@importModel")," is completely managed by VertiGIS Studio Web and should never be modified or serialized in app config. Its value can change at any time, e.g. to and from undefined, or from one model instance to a completely different one. The component needs to react appropriately to these changes and not make any assumptions about its current value.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n    ComponentModelBase,\n    serializable,\n    importModel,\n} from "@vertigis/web/models";\nimport { MapExtension } from "@vertigis/arcgis-extensions/mapping/MapExtension";\n\n@serializable\nexport default class ExampleComponentModel extends ComponentModelBase {\n    @importModel("map-extension")\n    mapModel: MapExtension | undefined;\n\n    logMapViewMode() {\n        if (this.mapModel.viewMode === "map") {\n            console.log("Map is 2d");\n        } else {\n            console.log("Map is 3d");\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"exporting-models"},"Exporting Models"),(0,r.kt)("p",null,"You can mark a model as exported by adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"@exportModel")," decorator to the model class. The following example shows a model that is exported, and then imported by another model and used."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Models are imported with the ",(0,r.kt)("inlineCode",{parentName:"p"},"itemType")," name that they are registered with.")),(0,r.kt)(s.Z,{defaultValue:"exportedModel",values:[{label:"Exported Model",value:"exportedModel"},{label:"Importing Model",value:"importingModel"},{label:"Importing Model Component",value:"importingModelComponent"},{label:"Layout",value:"layout"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"exportedModel",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/components/ExportedModel/ExportedModel.ts"',title:'"src/components/ExportedModel/ExportedModel.ts"'},'import {\n    ComponentModelBase,\n    serializable,\n    exportModel,\n} from "@vertigis/web/models";\n\n@exportModel\n@serializable\nexport default class ExportedModel extends ComponentModelBase {\n    someCustomModelProperty: string = "Some Text";\n}\n'))),(0,r.kt)(i.Z,{value:"importingModel",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/components/CustomComponent/CustomModel.ts"',title:'"src/components/CustomComponent/CustomModel.ts"'},'import {\n    ComponentModelBase,\n    serializable,\n    importModel,\n} from "@vertigis/web/models";\nimport { ExportedModel } from "../ExportedModel";\n\n@serializable\nexport default class CustomModel extends ComponentModelBase {\n    @importModel("exported-model")\n    exportedModel: ExportedModel | undefined;\n\n    getContentText() {\n        if (this.exportedModel) {\n            return this.exportedModel.someCustomModelProperty;\n        } else {\n            console.warn(\n                "Could not import required model \'exported-model\' for \'CustomModel\'"\n            );\n            return "";\n        }\n    }\n}\n'))),(0,r.kt)(i.Z,{value:"importingModelComponent",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/importedModel/ExportedModelComponent.tsx"',title:'"src/components/importedModel/ExportedModelComponent.tsx"'},'import React from "react";\nimport Typography from "@vertigis/web/ui/Typography";\n\nimport {\n    LayoutElement,\n    LayoutElementProperties,\n} from "@vertigis/web/components";\nimport { CustomModel } from ".";\n\nexport default function CustomComponent(\n    props: LayoutElementProperties<CustomModel>\n) {\n    return (\n        <LayoutElement\n            {...props}\n            style={{ backgroundColor: "white" }}\n        >\n            <Typography variant="h1">\n                {`Text From the imported Model: "${props.model.getContentText()}"`}\n            </Typography>\n        </LayoutElement>\n    );\n}\n'))),(0,r.kt)(i.Z,{value:"layout",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'},'<?xml version="1.0" encoding="utf-8" ?>\n<layout xmlns="https://geocortex.com/layout/v1" xmlns:custom="your.custom.namespace">\n    <stack padding="2">\n        <custom:custom-component />\n        <custom:exported-model-component />\n    </stack>\n</layout>\n')))),(0,r.kt)("h2",{id:"interacting-with-application-services-with-dependency-injection"},"Interacting with Application Services with Dependency Injection"),(0,r.kt)("p",null,"Components can interact with built-in VertiGIS Studio Web ",(0,r.kt)("a",{parentName:"p",href:"/docs/web/sdk-services-overview"},"services"),". Through services, they can interact with the map, application context, workflows, and more. Services can only be injected into a components through their ",(0,r.kt)("a",{parentName:"p",href:"/docs/web/sdk-components-reference#models"},"associated models"),". Learn more about how to ",(0,r.kt)("a",{parentName:"p",href:"/docs/web/sdk-components-injecting-services"},"inject a service into a component"),"."),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)(p.Z,{mdxType:"UseCaseContainer"},(0,r.kt)(l.Z,{title:"Build a Custom Component that Imports the Map Model",description:"Follow step by step instructions to import the map model into a custom component",link:(0,a.Z)("docs/web/tutorial-import-map-model"),mdxType:"UseCaseCard"}),(0,r.kt)(l.Z,{title:"Learn how to Interact with Services",description:"Learn about how components can interact with built-in or custom services",link:(0,a.Z)("docs/web/sdk-components-injecting-services"),mdxType:"UseCaseCard"}),(0,r.kt)(l.Z,{title:"Learn how Components are Bound to Models in the Layout",description:"Learn how layout structure can be used to bind components to their required models",link:(0,a.Z)("docs/web/configuration-advanced-model-binding"),mdxType:"UseCaseCard"})))}g.isMDXComponent=!0},7840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={},s=void 0,i={unversionedId:"web/snippets/framework-components",id:"web/snippets/framework-components",title:"framework-components",description:"This example uses VertiGIS Studio Web layout components",source:"@site/docs/web/snippets/framework-components.mdx",sourceDirName:"web/snippets",slug:"/web/snippets/framework-components",permalink:"/docs/web/snippets/framework-components",draft:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/snippets/framework-components.mdx",tags:[],version:"current",frontMatter:{}},l={},p=[],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This example uses VertiGIS Studio Web layout components")))}m.isMDXComponent=!0},9190:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={},s=void 0,i={unversionedId:"web/snippets/prereqs-custom-code",id:"web/snippets/prereqs-custom-code",title:"prereqs-custom-code",description:"-   Download and setup the VertiGIS Studio Web SDK.",source:"@site/docs/web/snippets/prereqs-custom-code.mdx",sourceDirName:"web/snippets",slug:"/web/snippets/prereqs-custom-code",permalink:"/docs/web/snippets/prereqs-custom-code",draft:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/snippets/prereqs-custom-code.mdx",tags:[],version:"current",frontMatter:{}},l={},p=[],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download and setup the ",(0,r.kt)("a",{parentName:"li",href:"/docs/web/sdk-overview"},"VertiGIS Studio Web SDK"),"."),(0,r.kt)("li",{parentName:"ul"},"Check out the ",(0,r.kt)("a",{parentName:"li",href:"/docs/web/sdk-deployment#uploading-custom-code-to-an-app"},"deployment instructions")," to learn more about deploying custom code to a VertiGIS Studio Web App.")))}m.isMDXComponent=!0}}]);