(window.webpackJsonp=window.webpackJsonp||[]).push([[17,153],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return f}));var a=n(3),o=(n(0),n(255)),c=n(256),r=n(264),s=n(265),i=n(261),m=n(260),l=n(57);const u={title:"Using the canExecute Command Hook",description:"Geocortex Web - Learn how to optionally disable a command with the canExecute hook"},d={unversionedId:"web/tutorial-command-can-execute",id:"web/tutorial-command-can-execute",isDocsHomePage:!1,title:"Using the canExecute Command Hook",description:"Geocortex Web - Learn how to optionally disable a command with the canExecute hook",source:"@site/docs/web/tutorial-command-can-execute.mdx",slug:"/web/tutorial-command-can-execute",permalink:"/docs/web/tutorial-command-can-execute",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/tutorial-command-can-execute.mdx",version:"current",sidebar:"web",previous:{title:"Translate a Component's Text",permalink:"/docs/web/tutorial-internationalization"},next:{title:"Manage Dynamic Data with a Service",permalink:"/docs/web/tutorial-service-dynamic-data"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Create an App with an IWTM and a Custom Component",id:"create-an-app-with-an-iwtm-and-a-custom-component",children:[]},{value:"Add a Button to Toggle the <code>canExecute</code> Status",id:"add-a-button-to-toggle-the-canexecute-status",children:[]},{value:"Implement the <code>canExecute</code> Function",id:"implement-the-canexecute-function",children:[]},{value:"Live Sample",id:"live-sample",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],b={toc:p};function f({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This article will guide you through how to prevent a custom command from executing through the ",Object(o.b)("inlineCode",{parentName:"p"},"canExecute")," hook."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)(l.default,{mdxType:"PrereqsCustomCodeSnippet"}),Object(o.b)("h2",{id:"create-an-app-with-an-iwtm-and-a-custom-component"},"Create an App with an IWTM and a Custom Component"),Object(o.b)("p",null,"First, let's create an app with an IWTM and a custom component that implements a simple command that displays an alert."),Object(o.b)(r.a,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"},{label:"Component",value:"component"},{label:"Component Model",value:"model"},{label:"Component Index",value:"index"},{label:"Registration",value:"registration"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"layout",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'}),'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1" xmlns:custom="custom.abc123">\n    <map>\n        <iwtm config="iwtm-config" slot="top-left" />\n        <custom:custom-component margin="3" slot="top-center"/>\n    </map>\n</layout>\n'))),Object(o.b)(s.a,{value:"config",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "menu",\n            "id": "iwtm-config",\n            "items": [\n                {\n                    "$type": "menu-item",\n                    "id": "command-with-can-execute",\n                    "title": "Command With Can Execute",\n                    "iconId": "info",\n                    "action": "custom.command-with-can-execute"\n                }\n            ],\n            "title": "I want to..."\n        }\n    ]\n}\n'))),Object(o.b)(s.a,{value:"component",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="src/components/CustomComponent.tsx"',title:'"src/components/CustomComponent.tsx"'}),'import {\n    LayoutElement,\n    LayoutElementProperties,\n} from "@vertigis/web/components";\nimport Button from "@vertigis/web/ui/Button";\nimport React from "react";\n\nimport CustomModel from "./CustomModel";\n\nconst CustomComponent = (\n    props: LayoutElementProperties<CustomModel>\n) => {\n    return (\n        <LayoutElement {...props}>\n            <Button>Placeholder</Button>\n        </LayoutElement>\n    );\n};\n\nexport default CustomComponent;\n'))),Object(o.b)(s.a,{value:"model",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/components/CustomModel.ts"',title:'"src/components/CustomModel.ts"'}),'import {\n    ComponentModelBase,\n    serializable,\n} from "@vertigis/web/models";\nimport { command } from "@vertigis/web/messaging";\n\n@serializable\nexport default class CustomModel extends ComponentModelBase {\n    @command("custom.command-with-can-execute")\n    protected _commandWithCanExecute(): void {\n        this.messages.commands.ui.alert.execute({\n            message: "Executed `custom.command-with-can-execute`",\n        });\n    }\n}\n'))),Object(o.b)(s.a,{value:"index",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/components/index.ts"',title:'"src/components/index.ts"'}),'export { default } from "./CustomComponent";\nexport { default as CustomModel } from "./CustomModel";\n'))),Object(o.b)(s.a,{value:"registration",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/index.ts"',title:'"src/index.ts"'}),'import { LibraryRegistry } from "@vertigis/web/config";\n\nimport CustomComponent, {\n    CustomModel,\n} from "./components/CustomComponent";\n\nconst LAYOUT_NAMESPACE = "custom.abc123";\n\nexport default function (registry: LibraryRegistry) {\n    registry.registerComponent({\n        name: "custom-component",\n        namespace: LAYOUT_NAMESPACE,\n        getComponentType: () => CustomComponent,\n        itemType: "custom-model",\n        title: "Custom Component",\n    });\n    registry.registerModel({\n        getModel: (config) => new CustomModel(config),\n        itemType: "custom-model",\n    });\n\n    registry.registerCommand({\n        name: "custom.command-with-can-execute",\n        itemType: "custom-model",\n    });\n}\n')))),Object(o.b)("h2",{id:"add-a-button-to-toggle-the-canexecute-status"},"Add a Button to Toggle the ",Object(o.b)("inlineCode",{parentName:"h2"},"canExecute")," Status"),Object(o.b)("p",null,"Next, let's add a button to the custom component that will toggle the ",Object(o.b)("inlineCode",{parentName:"p"},"canExecute")," status of the ",Object(o.b)("inlineCode",{parentName:"p"},"custom.command-with-can-execute")," command."),Object(o.b)(r.a,{defaultValue:"component",values:[{label:"Component",value:"component"},{label:"Component Model",value:"model"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"component",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="src/components/CustomComponent.tsx"',title:'"src/components/CustomComponent.tsx"'}),'import {\n    LayoutElement,\n    LayoutElementProperties,\n} from "@vertigis/web/components";\nimport Button from "@vertigis/web/ui/Button";\nimport React from "react";\n\nimport CustomModel from "./CustomModel";\n\nconst CustomComponent = (\n    props: LayoutElementProperties<CustomModel>\n) => {\n    const { model } = props;\n\n    return (\n        <LayoutElement {...props}>\n            // highlight-next-line\n            <Button onClick={() => model.toggleCanExecute()}>\n                Toggle Can Execute\n            </Button>\n        </LayoutElement>\n    );\n};\n\nexport default CustomComponent;\n'))),Object(o.b)(s.a,{value:"model",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/components/CustomModel.ts"',title:'"src/components/CustomModel.ts"'}),'import {\n    ComponentModelBase,\n    serializable,\n} from "@vertigis/web/models";\nimport { command } from "@vertigis/web/messaging";\n\n@serializable\nexport default class CustomModel extends ComponentModelBase {\n    // highlight-next-line\n    private _canExecuteValue: boolean = false;\n\n    @command("custom.command-with-can-execute")\n    protected _commandWithCanExecute(): void {\n        this.messages.commands.ui.alert.execute({\n            message: "Executed `custom.command-with-can-execute`",\n        });\n    }\n\n    // highlight-start\n    toggleCanExecute(): void {\n        this._canExecuteValue = !this._canExecuteValue;\n    }\n    // highlight-end\n}\n')))),Object(o.b)("h2",{id:"implement-the-canexecute-function"},"Implement the ",Object(o.b)("inlineCode",{parentName:"h2"},"canExecute")," Function"),Object(o.b)("p",null,"Finally, we need to implement the ",Object(o.b)("inlineCode",{parentName:"p"},"canExecute")," method for the ",Object(o.b)("inlineCode",{parentName:"p"},"custom.command-with-can-execute")," command. This method should be decorated with ",Object(o.b)("inlineCode",{parentName:"p"},"@canExecute")," and return a boolean indicating whether the command can execute."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If the command takes an argument, the ",Object(o.b)("inlineCode",{parentName:"p"},"@canExecute")," method will also be passed that argument."))),Object(o.b)(r.a,{defaultValue:"model",values:[{label:"Component Model",value:"model"},{label:"UI - Command Disabled",value:"ui-disabled"},{label:"UI - Command Enabled",value:"ui-enabled"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"model",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/components/CustomModel.ts"',title:'"src/components/CustomModel.ts"'}),'import {\n    ComponentModelBase,\n    serializable,\n} from "@vertigis/web/models";\nimport { command, canExecute } from "@vertigis/web/messaging";\n\n@serializable\nexport default class CustomModel extends ComponentModelBase {\n    private _canExecuteValue: boolean = false;\n\n    @command("custom.command-with-can-execute")\n    protected _commandWithCanExecute(): void {\n        this.messages.commands.ui.alert.execute({\n            message: "Executed `custom.command-with-can-execute`",\n        });\n    }\n\n    // highlight-start\n    @canExecute("custom.command-with-can-execute")\n    protected _canExecuteImplementation_(): boolean {\n        return this._canExecuteValue;\n    }\n    // highlight-end\n\n    toggleCanExecute(): void {\n        this._canExecuteValue = !this._canExecuteValue;\n        // highlight-start\n        this.messages\n            .command("custom.command-with-can-execute")\n            .canExecuteChanged.publish();\n        // highlight-end\n    }\n}\n'))),Object(o.b)(s.a,{value:"ui-disabled",mdxType:"TabItem"},Object(o.b)("img",{src:Object(c.a)("img/web-command-can-execute-disabled.png")})),Object(o.b)(s.a,{value:"ui-enabled",mdxType:"TabItem"},Object(o.b)("img",{src:Object(c.a)("img/web-command-can-execute-enabled.png")}))),Object(o.b)("h2",{id:"live-sample"},"Live Sample"),Object(o.b)("p",null,"Check out a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://vertigis-web-samples.netlify.app/commands-and-operations"}),"live SDK sample")," of a command that has a ",Object(o.b)("inlineCode",{parentName:"p"},"canExecute")," hook."),Object(o.b)("h2",{id:"next-steps"},"Next Steps"),Object(o.b)(m.a,{mdxType:"UseCaseContainer"},Object(o.b)(i.a,{title:"Commands and Operations in Services",description:"Learn more about commands and operations in services",link:Object(c.a)("docs/web/sdk-commands-operations"),mdxType:"UseCaseCard"}),Object(o.b)(i.a,{title:"Custom Services",description:"Learn more about custom services",link:Object(c.a)("docs/web/sdk-services-reference"),mdxType:"UseCaseCard"})))}f.isMDXComponent=!0},255:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=o.a.createContext({}),l=function(e){var t=o.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,r=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=l(n),p=a,b=u["".concat(r,".").concat(p)]||u[p]||d[p]||c;return n?o.a.createElement(b,s(s({ref:t},m),{},{components:n})):o.a.createElement(b,s({ref:t},m))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,r=new Array(c);r[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var m=2;m<c;m++)r[m]=n[m];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},256:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return r}));var a=n(21),o=n(257);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.default)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:c=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(a)return t+n;const r=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+r:r}(t,e,n,a)}}function r(e,t={}){const{withBaseUrl:n}=c();return n(e,t)}},257:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}))},258:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},259:function(e,t,n){"use strict";var a=n(0),o=n.n(a),c=n(11),r=n(257),s=n(9);const i=Object(a.createContext)({collectLink:()=>{}});var m=n(256),l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n};t.a=function(e){var t,{isNavLink:n,to:u,href:d,activeClassName:p,isActive:b,"data-noBrokenLinkCheck":f,autoAddBaseUrl:h=!0}=e,g=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:v}=Object(m.b)(),O=Object(a.useContext)(i),x=u||d,j=Object(r.a)(x),C=null==x?void 0:x.replace("pathname://",""),y=void 0!==C?(w=C,h&&(e=>e.startsWith("/"))(w)?v(w):w):void 0;var w;const E=Object(a.useRef)(!1),N=n?c.e:c.c,T=s.a.canUseIntersectionObserver;let M;Object(a.useEffect)((()=>(!T&&j&&window.docusaurus.prefetch(y),()=>{T&&M&&M.disconnect()})),[y,T,j]);const k=null!==(t=null==y?void 0:y.startsWith("#"))&&void 0!==t&&t,I=!y||!j||k;return y&&j&&!k&&!f&&O.collectLink(y),I?o.a.createElement("a",Object.assign({href:y},x&&!j&&{target:"_blank",rel:"noopener noreferrer"},g)):o.a.createElement(N,Object.assign({},g,{onMouseEnter:()=>{E.current||(window.docusaurus.preload(y),E.current=!0)},innerRef:e=>{var t,n;T&&e&&j&&(t=e,n=()=>{window.docusaurus.prefetch(y)},M=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(M.unobserve(t),M.disconnect(),n())}))})),M.observe(t))},to:y||""},n&&{isActive:b,activeClassName:p}))}},260:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),o=n.n(a),c=n(54),r=n.n(c);function s({children:e}){return o.a.createElement("div",{className:r.a.root},e)}},261:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(259),o=n(0),c=n.n(o),r=n(258),s=n(55),i=n.n(s);function m({title:e,description:t,link:n}){return c.a.createElement("div",{className:Object(r.a)("card-demo",i.a.root)},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card__header"},c.a.createElement("h3",null,e)),c.a.createElement("div",{className:"card__body"},c.a.createElement("p",null,t)),c.a.createElement("div",{className:"card__footer"},c.a.createElement(a.a,{className:"button button--secondary button--block",to:n},"Get Started"))))}},262:function(e,t,n){"use strict";var a=n(0),o=n(263);t.a=function(){const e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},263:function(e,t,n){"use strict";var a=n(0);const o=Object(a.createContext)(void 0);t.a=o},264:function(e,t,n){"use strict";var a=n(0),o=n.n(a),c=n(262),r=n(258),s=n(56),i=n.n(s);const m=37,l=39;t.a=function(e){const{lazy:t,block:n,defaultValue:s,values:u,groupId:d,className:p}=e,{tabGroupChoices:b,setTabGroupChoices:f}=Object(c.a)(),[h,g]=Object(a.useState)(s),v=a.Children.toArray(e.children);if(null!=d){const e=b[d];null!=e&&e!==h&&u.some((t=>t.value===e))&&g(e)}const O=e=>{g(e),null!=d&&f(d,e)},x=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":n},p)},u.map((({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===e,className:Object(r.a)("tabs__item",i.a.tabItem,{"tabs__item--active":h===e}),key:e,ref:e=>x.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case l:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case m:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(x,e.target,e)},onFocus:()=>O(e),onClick:()=>{O(e)}},t)))),t?Object(a.cloneElement)(v.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}},265:function(e,t,n){"use strict";var a=n(3),o=n(0),c=n.n(o);t.a=function({children:e,hidden:t,className:n}){return c.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:t,className:n}),e)}},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return m}));var a=n(3),o=(n(0),n(255));const c={},r={unversionedId:"web/snippets/prereqs-custom-code",id:"web/snippets/prereqs-custom-code",isDocsHomePage:!1,title:"prereqs-custom-code",description:"-   Download and setup the Geocortex Web SDK.",source:"@site/docs/web/snippets/prereqs-custom-code.mdx",slug:"/web/snippets/prereqs-custom-code",permalink:"/docs/web/snippets/prereqs-custom-code",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/snippets/prereqs-custom-code.mdx",version:"current"},s=[],i={toc:s};function m({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Download and setup the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/web/sdk-overview"}),"Geocortex Web SDK"),"."),Object(o.b)("li",{parentName:"ul"},"Check out the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/web/sdk-deployment#uploading-custom-code-to-an-app"}),"deployment instructions")," to learn more about deploying custom code to a Geocortex Web App.")))}m.isMDXComponent=!0}}]);