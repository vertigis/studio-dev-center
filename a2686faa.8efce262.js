(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{171:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return f}));var a=n(2),i=n(6),r=(n(0),n(222)),o=n(223),l=n(229),s=n(228),c=n(232),p=n(233),u={title:"Serializable Properties",description:"Geocortex Web - Learn how to serialize and deserialize app config properties"},b={unversionedId:"web/sdk-serializable-properties",id:"web/sdk-serializable-properties",isDocsHomePage:!1,title:"Serializable Properties",description:"Geocortex Web - Learn how to serialize and deserialize app config properties",source:"@site/docs/web/sdk-serializable-properties.mdx",permalink:"/docs/web/sdk-serializable-properties",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/sdk-serializable-properties.mdx",sidebar:"web",previous:{title:"Commands and Operations",permalink:"/docs/web/sdk-commands-operations"},next:{title:"Adding Icons",permalink:"/docs/web/sdk-adding-icons"}},d=[{value:"Defining a Serializable Class",id:"defining-a-serializable-class",children:[]},{value:"Populating the Class with Configuration Values.",id:"populating-the-class-with-configuration-values",children:[]},{value:"Serialization Modes",id:"serialization-modes",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],m={rightToc:d};function f(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Geocortex Web uses static, plain, app config JSON files to represent settings and properties for various components and services in an application. At some point, each of the values in the JSON file must be serialized and populate a JavaScript object. Component models and custom services can both consume configuration; therefore, they must also define the logic for translating configuration to runtime values."),Object(r.b)("h2",{id:"defining-a-serializable-class"},"Defining a Serializable Class"),Object(r.b)("p",null,"In order for a component to participate in configuration, it must be marked as serializable with the ",Object(r.b)("inlineCode",{parentName:"p"},"@serializable")," decorator."),Object(r.b)(c.a,{defaultValue:"model",values:[{label:"Custom Component Model",value:"model"},{label:"Custom Service",value:"service"}],mdxType:"Tabs"},Object(r.b)(p.a,{value:"model",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"...\n// highlight-next-line\n@serializable\nexport default class ExampleComponentModel extends ComponentModelBase<\n    ExampleComponentModelProperties\n> {\n    items: Collection<string> = new Collection<string>();\n    ...\n}\n"))),Object(r.b)(p.a,{value:"service",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"...\n// highlight-next-line\n@serializable\nexport default class CustomServiceWithConfig extends ConfigurableServiceBase<\n    CustomServiceProperties\n> {\n   items: Collection<string> = new Collection<string>();\n\n")))),Object(r.b)("p",null,"Every serializable class extends a generically typed base class, like ",Object(r.b)("inlineCode",{parentName:"p"},"ComponentModelBase")," or ",Object(r.b)("inlineCode",{parentName:"p"},"ConfigurableServiceBase"),". The type passed into the base class is an interface consisting of primitive, serializable types, like ",Object(r.b)("inlineCode",{parentName:"p"},"number"),", ",Object(r.b)("inlineCode",{parentName:"p"},"string"),", ",Object(r.b)("inlineCode",{parentName:"p"},"array"),", ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),", etc. Each property on the interface will correspond exactly to a property in the app config JSON."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Marking properties in the ",Object(r.b)("inlineCode",{parentName:"p"},"ComponentModelProperties")," interface as optional allows them to be left out of config and populated with default values. It's best practice to make properties optional and provide a default value if possible."))),Object(r.b)(c.a,{defaultValue:"model",values:[{label:"Custom Component Model",value:"model"},{label:"Custom Service",value:"service"},{label:"App Config",value:"config"}],mdxType:"Tabs"},Object(r.b)(p.a,{value:"model",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"...\n// highlight-start\ninterface ExampleComponentModelProperties extends ComponentModelProperties {\n    items?: string[];\n}\n// highlight-end\n\n@serializable\nexport default class ExampleComponentModel extends ComponentModelBase<\n    ExampleComponentModelProperties\n> {\n    items: Collection<string> = new Collection<string>();\n    ...\n}\n"))),Object(r.b)(p.a,{value:"service",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"...\n// highlight-start\ninterface CustomServiceProperties extends ComponentModelProperties {\n    items?: string[];\n}\n// highlight-end\n\n@serializable\nexport default class CustomServiceWithConfig extends ConfigurableServiceBase<\n    CustomServiceProperties\n> {\n   items: Collection<string> = new Collection<string>();\n\n"))),Object(r.b)(p.a,{value:"config",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "$type": "custom-service",\n            "id": "custom-service-config",\n            "title": "Custom Service Config",\n            // highlight-next-line\n            "items": ["some", "string", "values"]\n        },\n        {\n            "$type": "example-component-model",\n            "id": "example-component-model-config",\n            "title": "Example Component Model Config",\n            // highlight-next-line\n            "items": ["more", "string", "values"]\n        }\n        ...\n    ]\n}\n')))),Object(r.b)("h2",{id:"populating-the-class-with-configuration-values"},"Populating the Class with Configuration Values."),Object(r.b)("p",null,"The class is responsible for turning the ",Object(r.b)("inlineCode",{parentName:"p"},"ComponentModelProperties")," interface, which will be populated with primitive values from the app config JSON, into complex properties on the class object itself. This work is done through the ",Object(r.b)("inlineCode",{parentName:"p"},"_getSerializableProperties")," method."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"_getSerializableProperties()")," method has a few purposes."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Provide deserialization logic from the ",Object(r.b)("inlineCode",{parentName:"li"},"ComponentModelProperties")," interface to class properties."),Object(r.b)("li",{parentName:"ol"},"Provide serialization logic from an class property to the ",Object(r.b)("inlineCode",{parentName:"li"},"ComponentModelProperties")," interface, which can be serialized in a JSON file."),Object(r.b)("li",{parentName:"ol"},"Provide a default value for the JSON object if one is not given in the app config.")),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"It's key that the existing properties also get serialized through a call to ",Object(r.b)("inlineCode",{parentName:"p"},"super._getSerializableProperties()"),"."))),Object(r.b)("p",null,"In the following example, the serialization logic for the ",Object(r.b)("inlineCode",{parentName:"p"},"ExampleComponentModelProperties")," string array property ",Object(r.b)("inlineCode",{parentName:"p"},"items")," is defined. The corresponding class property is an ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Collection.html"}),"ArcGIS API for JavaScript Collection"),". Therefore, the ",Object(r.b)("inlineCode",{parentName:"p"},"deserialize")," method takes each item from the string array, and adds it to to collection. The ",Object(r.b)("inlineCode",{parentName:"p"},"serialize")," method does the opposite, turning the collection into a plain string array. A default value for the ",Object(r.b)("inlineCode",{parentName:"p"},"string[]")," is also provided."),Object(r.b)(c.a,{defaultValue:"model",values:[{label:"Custom Component Model",value:"model"},{label:"Custom Service",value:"service"}],mdxType:"Tabs"},Object(r.b)(p.a,{value:"model",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'...\ninterface ExampleComponentModelProperties extends ComponentModelProperties {\n    items?: string[];\n}\n\n\n@serializable\nexport default class ExampleComponentModel extends ComponentModelBase<\n    ExampleComponentModelProperties\n> {\n    items: Collection<string> = new Collection<string>();\n\n    ...\n\n    protected _getSerializableProperties(): PropertyDefs<\n        ExampleComponentModelProperties\n    > {\n        // highlight-next-line\n        const props = super._getSerializableProperties();\n        return {\n            ...props,\n            items: {\n\n                serializeModes: ["initial"],\n                default: ["Some Default Value"],\n                serialize: () => this.items.toArray(),\n                deserialize: (items: string[]) => {\n                    this.items.removeAll();\n                    this.items.addMany(items); s\n                },\n            },\n        };\n    }\n}\n'))),Object(r.b)(p.a,{value:"service",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'...\ninterface CustomServiceProperties extends ComponentModelProperties {\n    items?: string[];\n}\n\n@serializable\nexport default class CustomServiceWithConfig extends ConfigurableServiceBase<\n    CustomServiceProperties\n> {\n    items: Collection<string> = new Collection<string>();\n\n    ...\n\n    protected _getSerializableProperties(): PropertyDefs<\n        ExampleComponentModelProperties\n    > {\n        // highlight-next-line\n        const props = super._getSerializableProperties();\n        return {\n            ...props,\n            items: {\n\n                serializeModes: ["initial"],\n                default: ["Some Default Value"],\n                serialize: () => this.items.toArray(),\n                deserialize: (items: string[]) => {\n                    this.items.removeAll();\n                    this.items.addMany(items); s\n                },\n            },\n        };\n    }\n}\n')))),Object(r.b)("p",null,"Already serializable properties such as ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")," values or ",Object(r.b)("inlineCode",{parentName:"p"},"string")," values can have their serialization logic omitted."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'...\ninterface ExampleComponentModelProperties extends ComponentModelProperties {\n    stringVal?: string;\n}\n\n@serializable\nexport default class ExampleComponentModel extends ComponentModelBase<\n    ExampleComponentModelProperties\n> {\n    stringVal: string;\n\n    protected _getSerializableProperties(): PropertyDefs<\n        ExampleComponentModelProperties\n    > {\n        const props = super._getSerializableProperties();\n        return {\n            ...props,\n            stringVal: {\n                serializeModes: ["initial"],\n                default: "Simple String Value",\n            },\n        };\n    }\n}\n')),Object(r.b)("h2",{id:"serialization-modes"},"Serialization Modes"),Object(r.b)("p",null,"Every property has a number of serialization modes it can use to persist the values."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'export declare type SerializeMode = "initial" | "all" | "preferences";\n')),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"initial")," will serialize to the app config JSON only if it is different from the default."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"all")," will serialize all values to the app config JSON every time."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"preferences")," will serialize the value to storage which will persist between application loads, but only apply to a single user."),Object(r.b)("h2",{id:"next-steps"},"Next Steps"),Object(r.b)(s.a,{mdxType:"UseCaseContainer"},Object(r.b)(l.a,{title:"Check out the Component Reference for Configuration",description:"Learn more about how components interact with configuration",link:Object(o.a)("docs/web/sdk-components-reference#configuration"),mdxType:"UseCaseCard"}),Object(r.b)(l.a,{title:"Check out the Service Reference for Configuration",description:"Learn more about how services interact with configuration",link:Object(o.a)("docs/web/sdk-services-reference#models-and-configuration"),mdxType:"UseCaseCard"})))}f.isMDXComponent=!0},222:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||r;return n?i.a.createElement(m,l(l({ref:t},c),{},{components:n})):i.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},223:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var a=n(226),i=n(224);function r(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,o=r.forcePrependBaseUrl,l=void 0!==o&&o,s=r.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(l)return t+n;var p=!n.startsWith(t)?t+n.replace(/^\//,""):n;return c?e+p:p}(r,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},224:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}))},225:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},226:function(e,t,n){"use strict";var a=n(0),i=n(18);t.a=function(){var e=Object(a.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},227:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(13),o=n(224),l=n(8),s=Object(a.createContext)({collectLink:function(){}}),c=n(223),p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n};t.a=function(e){var t,n,u=e.isNavLink,b=e.to,d=e.href,m=e.activeClassName,f=e["data-noBrokenLinkCheck"],v=p(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]),h=Object(c.b)().withBaseUrl,g=Object(a.useContext)(s),O=b||d,j=void 0!==O?h(O):void 0,C=Object(o.a)(j),y=Object(a.useRef)(!1),x=u?r.e:r.c,w=l.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!w&&C&&window.docusaurus.prefetch(j),function(){w&&n&&n.disconnect()}}),[j,w,C]);var N=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,z=!j||!C||N;return j&&C&&!N&&!f&&g.collectLink(j),z?i.a.createElement("a",Object.assign({href:j},!C&&{target:"_blank",rel:"noopener noreferrer"},v)):i.a.createElement(x,Object.assign({},v,{onMouseEnter:function(){y.current||(window.docusaurus.preload(j),y.current=!0)},innerRef:function(e){var t,a;w&&e&&C&&(t=e,a=function(){window.docusaurus.prefetch(j)},(n=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())}))}))).observe(t))},to:j},u&&{activeClassName:m}))}},228:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),i=n.n(a),r=n(46),o=n.n(r);function l(e){var t=e.children;return i.a.createElement("div",{className:o.a.root},t)}},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(227),i=n(0),r=n.n(i),o=n(225),l=n(47),s=n.n(l);function c(e){var t=e.title,n=e.description,i=e.link;return r.a.createElement("div",{className:Object(o.a)("card-demo",s.a.root)},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__header"},r.a.createElement("h3",null,t)),r.a.createElement("div",{className:"card__body"},r.a.createElement("p",null,n)),r.a.createElement("div",{className:"card__footer"},r.a.createElement(a.a,{className:"button button--secondary button--block",to:i},"Get Started"))))}},230:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)(void 0);t.a=i},231:function(e,t,n){"use strict";var a=n(0),i=n(230);t.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},232:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(231),o=n(225),l=n(48),s=n.n(l),c=37,p=39;t.a=function(e){var t=e.block,n=e.children,l=e.defaultValue,u=e.values,b=e.groupId,d=Object(r.a)(),m=d.tabGroupChoices,f=d.setTabGroupChoices,v=Object(a.useState)(l),h=v[0],g=v[1];if(null!=b){var O=m[b];null!=O&&O!==h&&u.some((function(e){return e.value===O}))&&g(O)}var j=function(e){g(e),null!=b&&f(b,e)},C=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t})},u.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e)},onFocus:function(){return j(t)},onClick:function(){return j(t)}},n)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===h}))[0]))}},233:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){return i.a.createElement("div",null,e.children)}}}]);