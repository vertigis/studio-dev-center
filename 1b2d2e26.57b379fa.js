(window.webpackJsonp=window.webpackJsonp||[]).push([[16,145],{231:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),l=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,r=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=o,b=u["".concat(r,".").concat(p)]||u[p]||d[p]||c;return n?a.a.createElement(b,i(i({ref:t},m),{},{components:n})):a.a.createElement(b,i({ref:t},m))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,r=new Array(c);r[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var m=2;m<c;m++)r[m]=n[m];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},232:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return r}));var o=n(235),a=n(233);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(o.a)();return{withBaseUrl:(n,o)=>function(e,t,n,{forcePrependBaseUrl:o=!1,absolute:c=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(o)return t+n;const r=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+r:r}(t,e,n,o)}}function r(e,t={}){const{withBaseUrl:n}=c();return n(e,t)}},233:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!o(e)}n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}))},234:function(e,t,n){"use strict";function o(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}},235:function(e,t,n){"use strict";var o=n(0),a=n(19);t.a=function(){const e=Object(o.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},236:function(e,t,n){"use strict";var o=n(0),a=n.n(o),c=n(13),r=n(233),i=n(8);const s=Object(o.createContext)({collectLink:()=>{}});var m=n(232),l=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n};t.a=function(e){var t,{isNavLink:n,to:u,href:d,activeClassName:p,"data-noBrokenLinkCheck":b}=e,f=l(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]);const{withBaseUrl:h}=Object(m.b)(),g=Object(o.useContext)(s),v=u||d,O=Object(r.a)(v),x=null==v?void 0:v.replace("pathname://",""),j=void 0!==x?(e=>e.startsWith("/"))(C=x)?h(C):C:void 0;var C;const w=Object(o.useRef)(!1),y=n?c.e:c.c,E=i.a.canUseIntersectionObserver;let N;Object(o.useEffect)(()=>(!E&&O&&window.docusaurus.prefetch(j),()=>{E&&N&&N.disconnect()}),[j,E,O]);const T=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,M=!j||!O||T;return j&&O&&!T&&!b&&g.collectLink(j),M?a.a.createElement("a",Object.assign({href:j},!O&&{target:"_blank",rel:"noopener noreferrer"},f)):a.a.createElement(y,Object.assign({},f,{onMouseEnter:()=>{w.current||(window.docusaurus.preload(j),w.current=!0)},innerRef:e=>{var t,n;E&&e&&O&&(t=e,n=()=>{window.docusaurus.prefetch(j)},N=new window.IntersectionObserver(e=>{e.forEach(e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(N.unobserve(t),N.disconnect(),n())})}),N.observe(t))},to:j||""},n&&{activeClassName:p}))}},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(0),a=n.n(o),c=n(46),r=n.n(c);function i({children:e}){return a.a.createElement("div",{className:r.a.root},e)}},238:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var o=n(236),a=n(0),c=n.n(a),r=n(234),i=n(47),s=n.n(i);function m({title:e,description:t,link:n}){return c.a.createElement("div",{className:Object(r.a)("card-demo",s.a.root)},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card__header"},c.a.createElement("h3",null,e)),c.a.createElement("div",{className:"card__body"},c.a.createElement("p",null,t)),c.a.createElement("div",{className:"card__footer"},c.a.createElement(o.a,{className:"button button--secondary button--block",to:n},"Get Started"))))}},239:function(e,t,n){"use strict";var o=n(0);const a=Object(o.createContext)(void 0);t.a=a},240:function(e,t,n){"use strict";var o=n(0),a=n(239);t.a=function(){const e=Object(o.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},241:function(e,t,n){"use strict";var o=n(0),a=n.n(o),c=n(240),r=n(234),i=n(48),s=n.n(i);const m=37,l=39;t.a=function(e){const{block:t,children:n,defaultValue:i,values:u,groupId:d}=e,{tabGroupChoices:p,setTabGroupChoices:b}=Object(c.a)(),[f,h]=Object(o.useState)(i),[g,v]=Object(o.useState)(!1);if(null!=d){const e=p[d];null!=e&&e!==f&&u.some(t=>t.value===e)&&h(e)}const O=e=>{h(e),null!=d&&b(d,e)},x=[],j=e=>{e.metaKey||e.altKey||e.ctrlKey||v(!0)},C=()=>{v(!1)};return Object(o.useEffect)(()=>{window.addEventListener("keydown",j),window.addEventListener("mousedown",C)},[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t})},u.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(r.a)("tabs__item",s.a.tabItem,{"tabs__item--active":f===e}),style:g?{}:{outline:"none"},key:e,ref:e=>x.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case l:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case m:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(x,e.target,e),j(e)},onFocus:()=>O(e),onClick:()=>{O(e),v(!1)},onPointerDown:()=>v(!1)},t))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(n).filter(e=>e.props.value===f)[0]))}},242:function(e,t,n){"use strict";var o=n(0),a=n.n(o);t.a=function(e){return a.a.createElement("div",null,e.children)}},49:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return m}));var o=n(2),a=(n(0),n(231));const c={},r={unversionedId:"web/snippets/prereqs-custom-code",id:"web/snippets/prereqs-custom-code",isDocsHomePage:!1,title:"prereqs-custom-code",description:"-   Download and setup the Geocortex Web SDK.",source:"@site/docs/web/snippets/prereqs-custom-code.mdx",slug:"/web/snippets/prereqs-custom-code",permalink:"/docs/web/snippets/prereqs-custom-code",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/snippets/prereqs-custom-code.mdx",version:"current"},i=[],s={rightToc:i};function m({components:e,...t}){return Object(a.b)("wrapper",Object(o.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Download and setup the ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/web/sdk-overview"}),"Geocortex Web SDK"),"."),Object(a.b)("li",{parentName:"ul"},"Check out the ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/web/sdk-deployment#uploading-custom-code-to-an-app"}),"deployment instructions")," to learn more about deploying custom code to a Geocortex Web App.")))}m.isMDXComponent=!0},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return f}));var o=n(2),a=(n(0),n(231)),c=n(232),r=n(241),i=n(242),s=n(238),m=n(237),l=n(49);const u={title:"Using the canExecute Command Hook",description:"Geocortex Web - Learn how to optionally disable a command with the canExecute hook"},d={unversionedId:"web/tutorial-command-can-execute",id:"web/tutorial-command-can-execute",isDocsHomePage:!1,title:"Using the canExecute Command Hook",description:"Geocortex Web - Learn how to optionally disable a command with the canExecute hook",source:"@site/docs/web/tutorial-command-can-execute.mdx",slug:"/web/tutorial-command-can-execute",permalink:"/docs/web/tutorial-command-can-execute",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/tutorial-command-can-execute.mdx",version:"current",sidebar:"web",previous:{title:"Translate a Component's Text",permalink:"/docs/web/tutorial-internationalization"},next:{title:"Manage Dynamic Data with a Service",permalink:"/docs/web/tutorial-service-dynamic-data"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Create an App with an IWTM and a Custom Component",id:"create-an-app-with-an-iwtm-and-a-custom-component",children:[]},{value:"Add a Button to Toggle the <code>canExecute</code> Status",id:"add-a-button-to-toggle-the-canexecute-status",children:[]},{value:"Implement the <code>canExecute</code> Function",id:"implement-the-canexecute-function",children:[]},{value:"Live Sample",id:"live-sample",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],b={rightToc:p};function f({components:e,...t}){return Object(a.b)("wrapper",Object(o.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This article will guide you through how to prevent a custom command from executing through the ",Object(a.b)("inlineCode",{parentName:"p"},"canExecute")," hook."),Object(a.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(a.b)(l.default,{mdxType:"PrereqsCustomCodeSnippet"}),Object(a.b)("h2",{id:"create-an-app-with-an-iwtm-and-a-custom-component"},"Create an App with an IWTM and a Custom Component"),Object(a.b)("p",null,"First, let's create an app with an IWTM and a custom component that implements a simple command that displays an alert."),Object(a.b)(r.a,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"},{label:"Component",value:"component"},{label:"Component Model",value:"model"},{label:"Component Index",value:"index"},{label:"Registration",value:"registration"}],mdxType:"Tabs"},Object(a.b)(i.a,{value:"layout",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'}),'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1" xmlns:custom="custom.abc123">\n    <map>\n        <iwtm config="iwtm-config" slot="top-left" />\n        <custom:custom-component margin="3" slot="top-center"/>\n    </map>\n</layout>\n'))),Object(a.b)(i.a,{value:"config",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "menu",\n            "id": "iwtm-config",\n            "items": [\n                {\n                    "$type": "menu-item",\n                    "id": "command-with-can-execute",\n                    "title": "Command With Can Execute",\n                    "iconId": "info",\n                    "action": "custom.command-with-can-execute"\n                }\n            ],\n            "title": "I want to..."\n        }\n    ]\n}\n'))),Object(a.b)(i.a,{value:"component",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="src/components/CustomComponent.tsx"',title:'"src/components/CustomComponent.tsx"'}),'import {\n    LayoutElement,\n    LayoutElementProperties,\n} from "@vertigis/web/components";\nimport Button from "@vertigis/web/ui/Button";\nimport React from "react";\n\nimport CustomModel from "./CustomModel";\n\nconst CustomComponent = (props: LayoutElementProperties<CustomModel>) => {\n    return (\n        <LayoutElement {...props}>\n            <Button>Placeholder</Button>\n        </LayoutElement>\n    );\n};\n\nexport default CustomComponent;\n'))),Object(a.b)(i.a,{value:"model",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/components/CustomModel.ts"',title:'"src/components/CustomModel.ts"'}),'import { ComponentModelBase, serializable } from "@vertigis/web/models";\nimport { command } from "@vertigis/web/messaging";\n\n@serializable\nexport default class CustomModel extends ComponentModelBase {\n    @command("custom.command-with-can-execute")\n    protected _commandWithCanExecute(): void {\n        this.messages.commands.ui.alert.execute({\n            message: "Executed `custom.command-with-can-execute`",\n        });\n    }\n}\n'))),Object(a.b)(i.a,{value:"index",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/components/index.ts"',title:'"src/components/index.ts"'}),'export { default } from "./CustomComponent";\nexport { default as CustomModel } from "./CustomModel";\n'))),Object(a.b)(i.a,{value:"registration",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/index.ts"',title:'"src/index.ts"'}),'import { LibraryRegistry } from "@vertigis/web/config";\n\nimport CustomComponent, { CustomModel } from "./components/CustomComponent";\n\nconst LAYOUT_NAMESPACE = "custom.abc123";\n\nexport default function (registry: LibraryRegistry) {\n    registry.registerComponent({\n        name: "custom-component",\n        namespace: LAYOUT_NAMESPACE,\n        getComponentType: () => CustomComponent,\n        itemType: "custom-model",\n        title: "Custom Component",\n    });\n    registry.registerModel({\n        getModel: (config) => new CustomModel(config),\n        itemType: "custom-model",\n    });\n\n    registry.registerCommand({\n        name: "custom.command-with-can-execute",\n        itemType: "custom-model",\n    });\n}\n')))),Object(a.b)("h2",{id:"add-a-button-to-toggle-the-canexecute-status"},"Add a Button to Toggle the ",Object(a.b)("inlineCode",{parentName:"h2"},"canExecute")," Status"),Object(a.b)("p",null,"Next, let's add a button to the custom component that will toggle the ",Object(a.b)("inlineCode",{parentName:"p"},"canExecute")," status of the ",Object(a.b)("inlineCode",{parentName:"p"},"custom.command-with-can-execute")," command."),Object(a.b)(r.a,{defaultValue:"component",values:[{label:"Component",value:"component"},{label:"Component Model",value:"model"}],mdxType:"Tabs"},Object(a.b)(i.a,{value:"component",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="src/components/CustomComponent.tsx"',title:'"src/components/CustomComponent.tsx"'}),'import {\n    LayoutElement,\n    LayoutElementProperties,\n} from "@vertigis/web/components";\nimport Button from "@vertigis/web/ui/Button";\nimport React from "react";\n\nimport CustomModel from "./CustomModel";\n\nconst CustomComponent = (props: LayoutElementProperties<CustomModel>) => {\n    const { model } = props;\n\n    return (\n        <LayoutElement {...props}>\n            // highlight-next-line\n            <Button onClick={() => model.toggleCanExecute()}>\n                Toggle Can Execute\n            </Button>\n        </LayoutElement>\n    );\n};\n\nexport default CustomComponent;\n'))),Object(a.b)(i.a,{value:"model",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/components/CustomModel.ts"',title:'"src/components/CustomModel.ts"'}),'import { ComponentModelBase, serializable } from "@vertigis/web/models";\nimport { command } from "@vertigis/web/messaging";\n\n@serializable\nexport default class CustomModel extends ComponentModelBase {\n    // highlight-next-line\n    private _canExecuteValue: boolean = false;\n\n    @command("custom.command-with-can-execute")\n    protected _commandWithCanExecute(): void {\n        this.messages.commands.ui.alert.execute({\n            message: "Executed `custom.command-with-can-execute`",\n        });\n    }\n\n    // highlight-start\n    toggleCanExecute(): void {\n        this._canExecuteValue = !this._canExecuteValue;\n    }\n    // highlight-end\n}\n')))),Object(a.b)("h2",{id:"implement-the-canexecute-function"},"Implement the ",Object(a.b)("inlineCode",{parentName:"h2"},"canExecute")," Function"),Object(a.b)("p",null,"Finally, we need to implement the ",Object(a.b)("inlineCode",{parentName:"p"},"canExecute")," method for the ",Object(a.b)("inlineCode",{parentName:"p"},"custom.command-with-can-execute")," command. This method should be decorated with ",Object(a.b)("inlineCode",{parentName:"p"},"@canExecute")," and return a boolean indicating whether the command can execute."),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"If the command takes an argument, the ",Object(a.b)("inlineCode",{parentName:"p"},"@canExecute")," method will also be passed that argument."))),Object(a.b)(r.a,{defaultValue:"model",values:[{label:"Component Model",value:"model"},{label:"UI - Command Disabled",value:"ui-disabled"},{label:"UI - Command Enabled",value:"ui-enabled"}],mdxType:"Tabs"},Object(a.b)(i.a,{value:"model",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/components/CustomModel.ts"',title:'"src/components/CustomModel.ts"'}),'import { ComponentModelBase, serializable } from "@vertigis/web/models";\nimport { command, canExecute } from "@vertigis/web/messaging";\n\n@serializable\nexport default class CustomModel extends ComponentModelBase {\n    private _canExecuteValue: boolean = false;\n\n    @command("custom.command-with-can-execute")\n    protected _commandWithCanExecute(): void {\n        this.messages.commands.ui.alert.execute({\n            message: "Executed `custom.command-with-can-execute`",\n        });\n    }\n\n    // highlight-start\n    @canExecute("custom.command-with-can-execute")\n    protected _canExecuteImplementation_(): boolean {\n        return this._canExecuteValue;\n    }\n    // highlight-end\n\n    toggleCanExecute(): void {\n        this._canExecuteValue = !this._canExecuteValue;\n        // highlight-start\n        this.messages\n            .command("custom.command-with-can-execute")\n            .canExecuteChanged.publish();\n        // highlight-end\n    }\n}\n'))),Object(a.b)(i.a,{value:"ui-disabled",mdxType:"TabItem"},Object(a.b)("img",{src:Object(c.a)("img/web-command-can-execute-disabled.png")})),Object(a.b)(i.a,{value:"ui-enabled",mdxType:"TabItem"},Object(a.b)("img",{src:Object(c.a)("img/web-command-can-execute-enabled.png")}))),Object(a.b)("h2",{id:"live-sample"},"Live Sample"),Object(a.b)("p",null,"Check out a ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://vertigis-web-samples.netlify.app/commands-and-operations"}),"live SDK sample")," of a command that has a ",Object(a.b)("inlineCode",{parentName:"p"},"canExecute")," hook."),Object(a.b)("h2",{id:"next-steps"},"Next Steps"),Object(a.b)(m.a,{mdxType:"UseCaseContainer"},Object(a.b)(s.a,{title:"Commands and Operations in Services",description:"Learn more about commands and operations in services",link:Object(c.a)("docs/web/sdk-commands-operations"),mdxType:"UseCaseCard"}),Object(a.b)(s.a,{title:"Custom Services",description:"Learn more about custom services",link:Object(c.a)("docs/web/sdk-services-reference"),mdxType:"UseCaseCard"})))}f.isMDXComponent=!0}}]);