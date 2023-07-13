"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[1616],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(6010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(7462),a=n(7294),i=n(6010),o=n(2466),l=n(6550),s=n(1980),p=n(7392),c=n(12);function u(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=d(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[s,p]=f({queryString:n,groupId:r}),[u,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),h=(()=>{const e=s??u;return m({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),g(e)}),[p,g,i]),tabValues:i}}var h=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=p[n].value;r!==l&&(u(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,i.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function C(e){const t=g(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",b.tabList)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function y(e){const t=(0,h.Z)();return a.createElement(C,(0,r.Z)({key:String(t)},e))}},5858:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(9960),a=n(7294),i=n(6010);const o={root:"root_Uwqo"};function l(e){let{title:t,description:n,link:l}=e;return a.createElement("div",{className:(0,i.Z)("card-demo",o.root)},a.createElement("div",{className:"card"},a.createElement("div",{className:"card__header"},a.createElement("h3",null,t)),a.createElement("div",{className:"card__body"},a.createElement("p",null,n)),a.createElement("div",{className:"card__footer"},a.createElement(r.Z,{className:"button button--secondary button--block",to:l},"Get Started"))))}},7467:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294);const a={root:"root_vxd5"};function i(e){let{children:t}=e;return r.createElement("div",{className:a.root},t)}},4793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>f});var r=n(7462),a=(n(7294),n(3905)),i=n(4996),o=n(5858),l=n(7467),s=n(4866),p=n(5162);const c={title:"Serializable Properties",description:"VertiGIS Studio Web - Learn how to serialize and deserialize app config properties"},u=void 0,d={unversionedId:"web/sdk-serializable-properties",id:"web/sdk-serializable-properties",title:"Serializable Properties",description:"VertiGIS Studio Web - Learn how to serialize and deserialize app config properties",source:"@site/docs/web/sdk-serializable-properties.mdx",sourceDirName:"web",slug:"/web/sdk-serializable-properties",permalink:"/docs/web/sdk-serializable-properties",draft:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/sdk-serializable-properties.mdx",tags:[],version:"current",frontMatter:{title:"Serializable Properties",description:"VertiGIS Studio Web - Learn how to serialize and deserialize app config properties"},sidebar:"web",previous:{title:"Commands and Operations",permalink:"/docs/web/sdk-commands-operations"},next:{title:"Adding Icons",permalink:"/docs/web/sdk-adding-icons"}},m={},f=[{value:"Defining a Serializable Class",id:"defining-a-serializable-class",level:2},{value:"Populating the Class with Configuration Values.",id:"populating-the-class-with-configuration-values",level:2},{value:"Serialization Modes",id:"serialization-modes",level:2},{value:"Next Steps",id:"next-steps",level:2}],g={toc:f},h="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"VertiGIS Studio Web uses static, plain, app config JSON files to represent settings and properties for various components and services in an application. At some point, each of the values in the JSON file must be serialized and populate a JavaScript object. Component models and custom services can both consume configuration; therefore, they must also define the logic for translating configuration to runtime values."),(0,a.kt)("h2",{id:"defining-a-serializable-class"},"Defining a Serializable Class"),(0,a.kt)("p",null,"In order for a component to participate in configuration, it must be marked as serializable with the ",(0,a.kt)("inlineCode",{parentName:"p"},"@serializable")," decorator."),(0,a.kt)(s.Z,{defaultValue:"model",values:[{label:"Custom Component Model",value:"model"},{label:"Custom Service",value:"service"}],mdxType:"Tabs"},(0,a.kt)(p.Z,{value:"model",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"...\n// highlight-next-line\n@serializable\nexport default class ExampleComponentModel extends ComponentModelBase<\n    ExampleComponentModelProperties\n> {\n    items: Collection<string> = new Collection<string>();\n    ...\n}\n"))),(0,a.kt)(p.Z,{value:"service",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"...\n// highlight-next-line\n@serializable\nexport default class CustomServiceWithConfig extends ConfigurableServiceBase<\n    CustomServiceProperties\n> {\n   items: Collection<string> = new Collection<string>();\n\n")))),(0,a.kt)("p",null,"Every serializable class extends a generically typed base class, like ",(0,a.kt)("inlineCode",{parentName:"p"},"ComponentModelBase")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"ConfigurableServiceBase"),". The type passed into the base class is an interface consisting of primitive, serializable types, like ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"array"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"),", etc. Each property on the interface will correspond exactly to a property in the app config JSON."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Marking properties in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ComponentModelProperties")," interface as optional allows them to be left out of config and populated with default values. It's best practice to make properties optional and provide a default value if possible.")),(0,a.kt)(s.Z,{defaultValue:"model",values:[{label:"Custom Component Model",value:"model"},{label:"Custom Service",value:"service"},{label:"App Config",value:"config"}],mdxType:"Tabs"},(0,a.kt)(p.Z,{value:"model",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"...\n// highlight-start\ninterface ExampleComponentModelProperties extends ComponentModelProperties {\n    items?: string[];\n}\n// highlight-end\n\n@serializable\nexport default class ExampleComponentModel extends ComponentModelBase<\n    ExampleComponentModelProperties\n> {\n    items: Collection<string> = new Collection<string>();\n    ...\n}\n"))),(0,a.kt)(p.Z,{value:"service",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"...\n// highlight-start\ninterface CustomServiceProperties extends ComponentModelProperties {\n    items?: string[];\n}\n// highlight-end\n\n@serializable\nexport default class CustomServiceWithConfig extends ConfigurableServiceBase<\n    CustomServiceProperties\n> {\n   items: Collection<string> = new Collection<string>();\n\n"))),(0,a.kt)(p.Z,{value:"config",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "$type": "custom-service",\n            "id": "custom-service-config",\n            "title": "Custom Service Config",\n            // highlight-next-line\n            "items": ["some", "string", "values"]\n        },\n        {\n            "$type": "example-component-model",\n            "id": "example-component-model-config",\n            "title": "Example Component Model Config",\n            // highlight-next-line\n            "items": ["more", "string", "values"]\n        }\n        ...\n    ]\n}\n')))),(0,a.kt)("h2",{id:"populating-the-class-with-configuration-values"},"Populating the Class with Configuration Values."),(0,a.kt)("p",null,"The class is responsible for turning the ",(0,a.kt)("inlineCode",{parentName:"p"},"ComponentModelProperties")," interface, which will be populated with primitive values from the app config JSON, into complex properties on the class object itself. This work is done through the ",(0,a.kt)("inlineCode",{parentName:"p"},"_getSerializableProperties")," method."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"_getSerializableProperties()")," method has a few purposes."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Provide deserialization logic from the ",(0,a.kt)("inlineCode",{parentName:"li"},"ComponentModelProperties")," interface to class properties."),(0,a.kt)("li",{parentName:"ol"},"Provide serialization logic from an class property to the ",(0,a.kt)("inlineCode",{parentName:"li"},"ComponentModelProperties")," interface, which can be serialized in a JSON file."),(0,a.kt)("li",{parentName:"ol"},"Provide a default value for the JSON object if one is not given in the app config.")),(0,a.kt)("admonition",{title:"Important",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"It's key that the existing properties also get serialized through a call to ",(0,a.kt)("inlineCode",{parentName:"p"},"super._getSerializableProperties()"),".")),(0,a.kt)("p",null,"In the following example, the serialization logic for the ",(0,a.kt)("inlineCode",{parentName:"p"},"ExampleComponentModelProperties")," string array property ",(0,a.kt)("inlineCode",{parentName:"p"},"items")," is defined. The corresponding class property is an ",(0,a.kt)("a",{parentName:"p",href:"https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Collection.html"},"ArcGIS API for JavaScript Collection"),". Therefore, the ",(0,a.kt)("inlineCode",{parentName:"p"},"deserialize")," method takes each item from the string array, and adds it to to collection. The ",(0,a.kt)("inlineCode",{parentName:"p"},"serialize")," method does the opposite, turning the collection into a plain string array. A default value for the ",(0,a.kt)("inlineCode",{parentName:"p"},"string[]")," is also provided."),(0,a.kt)(s.Z,{defaultValue:"model",values:[{label:"Custom Component Model",value:"model"},{label:"Custom Service",value:"service"}],mdxType:"Tabs"},(0,a.kt)(p.Z,{value:"model",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'...\ninterface ExampleComponentModelProperties extends ComponentModelProperties {\n    items?: string[];\n}\n\n\n@serializable\nexport default class ExampleComponentModel extends ComponentModelBase<\n    ExampleComponentModelProperties\n> {\n    items: Collection<string> = new Collection<string>();\n\n    ...\n\n    protected _getSerializableProperties(): PropertyDefs<\n        ExampleComponentModelProperties\n    > {\n        // highlight-next-line\n        const props = super._getSerializableProperties();\n        return {\n            ...props,\n            items: {\n\n                serializeModes: ["initial"],\n                default: ["Some Default Value"],\n                serialize: () => this.items.toArray(),\n                deserialize: (items: string[]) => {\n                    this.items.removeAll();\n                    this.items.addMany(items); s\n                },\n            },\n        };\n    }\n}\n'))),(0,a.kt)(p.Z,{value:"service",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'...\ninterface CustomServiceProperties extends ComponentModelProperties {\n    items?: string[];\n}\n\n@serializable\nexport default class CustomServiceWithConfig extends ConfigurableServiceBase<\n    CustomServiceProperties\n> {\n    items: Collection<string> = new Collection<string>();\n\n    ...\n\n    protected _getSerializableProperties(): PropertyDefs<\n        ExampleComponentModelProperties\n    > {\n        // highlight-next-line\n        const props = super._getSerializableProperties();\n        return {\n            ...props,\n            items: {\n\n                serializeModes: ["initial"],\n                default: ["Some Default Value"],\n                serialize: () => this.items.toArray(),\n                deserialize: (items: string[]) => {\n                    this.items.removeAll();\n                    this.items.addMany(items); s\n                },\n            },\n        };\n    }\n}\n')))),(0,a.kt)("p",null,"Already serializable properties such as ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," values or ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," values can have their serialization logic omitted."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'...\ninterface ExampleComponentModelProperties extends ComponentModelProperties {\n    stringVal?: string;\n}\n\n@serializable\nexport default class ExampleComponentModel extends ComponentModelBase<\n    ExampleComponentModelProperties\n> {\n    stringVal: string;\n\n    protected _getSerializableProperties(): PropertyDefs<\n        ExampleComponentModelProperties\n    > {\n        const props = super._getSerializableProperties();\n        return {\n            ...props,\n            stringVal: {\n                serializeModes: ["initial"],\n                default: "Simple String Value",\n            },\n        };\n    }\n}\n')),(0,a.kt)("h2",{id:"serialization-modes"},"Serialization Modes"),(0,a.kt)("p",null,"Every property has a number of serialization modes it can use to persist the values."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'export declare type SerializeMode = "initial" | "all" | "preferences";\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"initial")," will serialize to the app config JSON only if it is different from the default."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"all")," will serialize all values to the app config JSON every time."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"preferences")," will serialize the value to storage which will persist between application loads, but only apply to a single user."),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)(l.Z,{mdxType:"UseCaseContainer"},(0,a.kt)(o.Z,{title:"Check out the Component Reference for Configuration",description:"Learn more about how components interact with configuration",link:(0,i.Z)("docs/web/sdk-components-reference#configuration"),mdxType:"UseCaseCard"}),(0,a.kt)(o.Z,{title:"Check out the Service Reference for Configuration",description:"Learn more about how services interact with configuration",link:(0,i.Z)("docs/web/sdk-services-reference#models-and-configuration"),mdxType:"UseCaseCard"})))}b.isMDXComponent=!0}}]);