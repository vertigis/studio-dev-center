"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[8908,1596,7668],{1300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(7624),r=n(2172);const s={},o=void 0,i={id:"web/snippets/prereqs-custom-code",title:"prereqs-custom-code",description:"-   Download and setup the VertiGIS Studio Web SDK.",source:"@site/docs/web/snippets/prereqs-custom-code.mdx",sourceDirName:"web/snippets",slug:"/web/snippets/prereqs-custom-code",permalink:"/docs/web/snippets/prereqs-custom-code",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/snippets/prereqs-custom-code.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[];function u(e){const t={a:"a",li:"li",ul:"ul",...(0,r.M)(),...e.components};return(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Download and setup the ",(0,a.jsx)(t.a,{href:"/docs/web/sdk-overview",children:"VertiGIS Studio Web SDK"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["Check out the ",(0,a.jsx)(t.a,{href:"/docs/web/sdk-deployment#uploading-custom-code-to-an-app",children:"deployment instructions"})," to learn more about deploying custom code to a VertiGIS Studio Web App."]}),"\n"]})}function d(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},4732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(7624),r=n(2172);const s={},o=void 0,i={id:"web/snippets/translation-callout",title:"translation-callout",description:"Existing language strings for an application can be customized for any language in the VertiGIS Studio Web Designer. To provide a complete translation in an entirely new locale for VertiGIS Studio Web, please contact us.",source:"@site/docs/web/snippets/translation-callout.mdx",sourceDirName:"web/snippets",slug:"/web/snippets/translation-callout",permalink:"/docs/web/snippets/translation-callout",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/snippets/translation-callout.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[];function u(e){const t={a:"a",admonition:"admonition",p:"p",...(0,r.M)(),...e.components};return(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["Existing language strings for an application can be ",(0,a.jsx)(t.a,{href:"https://docs.vertigisstudio.com/webviewer/latest/admin-help/Default.htm#gwv/internationalization.htm",children:"customized for any language in the VertiGIS Studio Web Designer"}),". To provide a complete translation in an entirely new locale for VertiGIS Studio Web, please ",(0,a.jsx)(t.a,{href:"https://www.vertigisstudio.com/contact/",children:"contact us"}),"."]})})}function d(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},6600:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>f,frontMatter:()=>p,metadata:()=>g,toc:()=>x});var a=n(7624),r=n(2172),s=n(1300),o=n(4732),i=n(7528),l=n(7160),c=n(964),u=n(1268),d=n(5388);const p={title:"Translate a Component's Text",description:"VertiGIS Studio Web - Learn how to internationalize a custom component"},h=void 0,g={id:"web/tutorial-internationalization",title:"Translate a Component's Text",description:"VertiGIS Studio Web - Learn how to internationalize a custom component",source:"@site/docs/web/tutorial-internationalization.mdx",sourceDirName:"web",slug:"/web/tutorial-internationalization",permalink:"/docs/web/tutorial-internationalization",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/tutorial-internationalization.mdx",tags:[],version:"current",frontMatter:{title:"Translate a Component's Text",description:"VertiGIS Studio Web - Learn how to internationalize a custom component"},sidebar:"web",previous:{title:"Subscribe to an Existing Event",permalink:"/docs/web/tutorial-events-subscribe"},next:{title:"Using the canExecute Command Hook",permalink:"/docs/web/tutorial-command-can-execute"}},m={},x=[...o.toc,{value:"Prerequisites",id:"prerequisites",level:2},...s.toc,{value:"Create a Boilerplate Component",id:"create-a-boilerplate-component",level:2},{value:"Creating the Language Resources",id:"creating-the-language-resources",level:2},{value:"Register the Language Resources",id:"register-the-language-resources",level:2},{value:"Use the Language Strings",id:"use-the-language-strings",level:2},{value:"Live Sample",id:"live-sample",level:2},{value:"Next Steps",id:"next-steps",level:2}];function b(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.default,{}),"\n",(0,a.jsx)(t.p,{children:"Custom components often provide user facing UI with some degree of text. You may want to define their text as language strings for multiple reasons."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"It allows the text be to translated or changed without a corresponding change in the component code."}),"\n",(0,a.jsx)(t.li,{children:"It allows the language strings to be shared across different components."}),"\n",(0,a.jsx)(t.li,{children:"It consolidates the language strings and makes them easier to locate."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"This article will cover creating a german and english translation for a custom component using language strings."}),"\n",(0,a.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsx)(s.default,{}),"\n",(0,a.jsx)(t.h2,{id:"create-a-boilerplate-component",children:"Create a Boilerplate Component"}),"\n",(0,a.jsx)(t.p,{children:"First, we will start off with a component that uses a plain hard-coded text string in English."}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["Learn more about how to ",(0,a.jsx)(t.a,{href:"/docs/web/sdk-components-create",children:"build custom components"}),"."]})}),"\n",(0,a.jsxs)(u.c,{defaultValue:"component",values:[{label:"Component",value:"component"},{label:"Model",value:"model"},{label:"Component Index",value:"index"},{label:"Registration",value:"registration"},{label:"Layout",value:"layout"},{label:"App Config",value:"config"}],children:[(0,a.jsx)(d.c,{value:"component",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",metastring:'title="src/components/TranslatableText/TranslatableText.tsx"',children:'import React from "react";\nimport { LayoutElement } from "@vertigis/web/components";\nimport Typography from "@vertigis/web/ui/Typography";\n\nexport default function TranslatableText(props) {\n    return (\n        <LayoutElement\n            {...props}\n            style={{ backgroundColor: "white" }}\n        >\n            <Typography variant="h1">\n                This text will be translated.\n            </Typography>\n        </LayoutElement>\n    );\n}\n'})})}),(0,a.jsx)(d.c,{value:"model",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",metastring:'title="src/components/TranslatableText/TranslatableTextModel.ts"',children:'import {\n    ComponentModelBase,\n    serializable,\n} from "@vertigis/web/models";\n\n@serializable\nclass TranslatableTextModel extends ComponentModelBase {}\n\nexport default TranslatableTextModel;\n'})})}),(0,a.jsx)(d.c,{value:"index",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",metastring:'title="src/components/TranslatableText/index.ts"',children:'export { default } from "./TranslatableText";\nexport { default as TranslatableTextModel } from "./TranslatableTextModel";\n'})})}),(0,a.jsx)(d.c,{value:"registration",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",metastring:'title="src/index.ts"',children:'import { LibraryRegistry } from "@vertigis/web/config";\nimport TranslatableText, {\n    TranslatableTextModel,\n} from "./components/TranslatableText";\n\nexport default function (registry: LibraryRegistry) {\n    registry.registerComponent({\n        name: "translatable-text",\n        namespace: "your.custom.namespace",\n        getComponentType: () => TranslatableText,\n        itemType: "translatable-text",\n        title: "Translatable Text",\n    });\n    registry.registerModel({\n        getModel: (config) => new TranslatableTextModel(config),\n        itemType: "translatable-text",\n    });\n}\n'})})}),(0,a.jsx)(d.c,{value:"layout",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-xml",metastring:'title="app/layout.xml"',children:'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1" xmlns:custom="your.custom.namespace">\n    <map>\n        <custom:translatable-text slot="top-center" width="15" height="9" padding="0.5"/>\n    </map>\n</layout>\n'})})}),(0,a.jsx)(d.c,{value:"config",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",metastring:'title="src/app.json"',children:'{\n    "schemaVersion": "1.0",\n    "items": []\n}\n'})})})]}),"\n",(0,a.jsx)(t.h2,{id:"creating-the-language-resources",children:"Creating the Language Resources"}),"\n",(0,a.jsxs)(t.p,{children:["Next, we are going to create the ",(0,a.jsx)(t.a,{href:"/docs/web/sdk-internationalization",children:"language resources"})," for English and German."]}),"\n",(0,a.jsxs)(u.c,{defaultValue:"english",values:[{label:"English",value:"english"},{label:"German",value:"german"}],children:[(0,a.jsx)(d.c,{value:"english",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",metastring:'title="src/en.json"',children:'{\n    "language-translatable-text-content": "I will be translated."\n}\n'})})}),(0,a.jsx)(d.c,{value:"german",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",metastring:'title="src/de.json"',children:'{\n    "language-translatable-text-content": "Dieser Text wird \xfcbersetzt."\n}\n'})})})]}),"\n",(0,a.jsx)(t.h2,{id:"register-the-language-resources",children:"Register the Language Resources"}),"\n",(0,a.jsxs)(t.p,{children:["Next we need to ",(0,a.jsx)(t.a,{href:"/docs/web/sdk-internationalization#registering-language-resources",children:"register the language resources"})," with VertiGIS Studio Web."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",metastring:'title="src/index.ts"',children:'import { LibraryRegistry } from "@vertigis/web/config";\nimport TranslatableText, {\n    TranslatableTextModel,\n} from "./components/TranslatableText";\n// highlight-start\nimport enJson from "./en.json";\nimport deJson from "./de.json";\n// highlight-end\n\nexport default function (registry: LibraryRegistry) {\n    registry.registerComponent({\n        name: "translatable-text",\n        namespace: "your.custom.namespace",\n        getComponentType: () => TranslatableText,\n        itemType: "translatable-text",\n        title: "Translatable Text",\n    });\n    registry.registerModel({\n        getModel: (config) => new TranslatableTextModel(config),\n        itemType: "translatable-text",\n    });\n    // highlight-start\n    registry.registerLanguageResources({\n        locale: "en",\n        getValues: () => enJson,\n    });\n    registry.registerLanguageResources({\n        locale: "de",\n        getValues: () => deJson,\n    });\n    // highlight-end\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"use-the-language-strings",children:"Use the Language Strings"}),"\n",(0,a.jsxs)(t.p,{children:["Now that they have been registered, we can use the strings in our boilerplate component from earlier. VertiGIS Studio Web layout components, like ",(0,a.jsx)(t.code,{children:"<Typography>"}),", will automatically detect and translate language keys like ",(0,a.jsx)(t.code,{children:"language-translatable-text-content"})," in props and child content."]}),"\n",(0,a.jsxs)(t.p,{children:["If you need to manually translate a language key, you can use the ",(0,a.jsxs)(t.a,{href:"https://reactjs.org/docs/hooks-reference.html#usecontext",children:[(0,a.jsx)(t.code,{children:"useContext"})," react hook"]})," with the ",(0,a.jsx)(t.a,{href:"/docs/web/sdk-components-ui-context",children:"UIContext"})," to access the ",(0,a.jsx)(t.code,{children:"translate"})," function. Then you can pass the language key ",(0,a.jsx)(t.code,{children:"language-translatable-text-content"})," you defined in the language resources files to the ",(0,a.jsx)(t.code,{children:"translate"})," function and your text will be translated into whichever locale is most appropriate."]}),"\n",(0,a.jsxs)(t.admonition,{type:"tip",children:[(0,a.jsxs)(t.p,{children:["To test out a translation, add the URL parameter ",(0,a.jsx)(t.code,{children:"locale=<language>"})," to your local server."]}),(0,a.jsxs)(t.p,{children:["For example, ",(0,a.jsx)(t.code,{children:"http://localhost:3000/?locale=de"})]})]}),"\n",(0,a.jsxs)(u.c,{defaultValue:"component",values:[{label:"Component",value:"component"},{label:"English UI",value:"english"},{label:"German UI",value:"german"}],children:[(0,a.jsx)(d.c,{value:"component",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",metastring:'title="src/components/TranslatableText/TranslatableText.tsx"',children:'import React, { useContext } from "react";\nimport { LayoutElement } from "@vertigis/web/components";\n// highlight-next-line\nimport { UIContext } from "@vertigis/web/ui";\nimport Typography from "@vertigis/web/ui/Typography";\n\nexport default function TranslatableText(props) {\n    // highlight-next-line\n    const { translate } = useContext(UIContext);\n\n    return (\n        <LayoutElement\n            {...props}\n            style={{ backgroundColor: "white" }}\n        >\n            // highlight-start\n            <Typography\n                variant="h1"\n                text="language-translatable-text-content"\n            />\n            <h1>{translate("language-translatable-text-content")}</h1>\n            // highlight-end\n        </LayoutElement>\n    );\n}\n'})})}),(0,a.jsx)(d.c,{value:"english",children:(0,a.jsx)("img",{src:(0,c.c)("img/web-translate-english.png")})}),(0,a.jsx)(d.c,{value:"german",children:(0,a.jsx)("img",{src:(0,c.c)("img/web-translate-german.png")})})]}),"\n",(0,a.jsx)(t.h2,{id:"live-sample",children:"Live Sample"}),"\n",(0,a.jsxs)(t.p,{children:["Check out a ",(0,a.jsx)(t.a,{href:"https://vertigis-web-samples.netlify.app/i18n",children:"live SDK sample"})," that demonstrates how to internationalize your application to be supported by multiple locales."]}),"\n",(0,a.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,a.jsx)(l.c,{children:(0,a.jsx)(i.c,{title:"Check out the Language String Reference",description:"Learn more about creating and registering language strings",link:(0,c.c)("docs/web/sdk-internationalization")})})]})}function f(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},5388:(e,t,n)=>{n.d(t,{c:()=>o});n(1504);var a=n(4064);const r={tabItem:"tabItem_Ymn6"};var s=n(7624);function o({children:e,hidden:t,className:n}){return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.c)(r.tabItem,n),hidden:t,children:e})}},1268:(e,t,n)=>{n.d(t,{c:()=>w});var a=n(1504),r=n(4064),s=n(3943),o=n(5592),i=n(5288),l=n(632),c=n(7128),u=n(1148);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((({props:{value:e,label:t,attributes:n,default:a}})=>({value:e,label:t,attributes:n,default:a})))}(n);return function(e){const t=(0,c.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h({value:e,tabValues:t}){return t.some((t=>t.value===e))}function g({queryString:e=!1,groupId:t}){const n=(0,o.Uz)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,l._M)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=p(e),[o,l]=(0,a.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[c,d]=g({queryString:n,groupId:r}),[m,x]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,r]=(0,u.IN)(t);return[n,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),b=(()=>{const e=c??m;return h({value:e,tabValues:s})?e:null})();(0,i.c)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),x(e)}),[d,x,s]),tabValues:s}}var x=n(3664);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(7624);function v({className:e,block:t,selectedValue:n,selectValue:a,tabValues:o}){const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.MV)(),c=e=>{const t=e.currentTarget,r=i.indexOf(t),s=o[r].value;s!==n&&(l(t),a(s))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.c)("tabs",{"tabs--block":t},e),children:o.map((({value:e,label:t,attributes:a})=>(0,f.jsx)("li",{role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,ref:e=>i.push(e),onKeyDown:u,onClick:c,...a,className:(0,r.c)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":n===e}),children:t??e},e)))})}function j({lazy:e,children:t,selectedValue:n}){const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function y(e){const t=m(e);return(0,f.jsxs)("div",{className:(0,r.c)("tabs-container",b.tabList),children:[(0,f.jsx)(v,{...e,...t}),(0,f.jsx)(j,{...e,...t})]})}function w(e){const t=(0,x.c)();return(0,f.jsx)(y,{...e,children:d(e.children)},String(t))}},7528:(e,t,n)=>{n.d(t,{c:()=>i});var a=n(867),r=(n(1504),n(4971));const s={root:"root_Uwqo"};var o=n(7624);function i({title:e,description:t,link:n}){return(0,o.jsx)("div",{className:(0,r.c)("card-demo",s.root),children:(0,o.jsxs)("div",{className:"card",children:[(0,o.jsx)("div",{className:"card__header",children:(0,o.jsx)("h3",{children:e})}),(0,o.jsx)("div",{className:"card__body",children:(0,o.jsx)("p",{children:t})}),(0,o.jsx)("div",{className:"card__footer",children:(0,o.jsx)(a.c,{className:"button button--secondary button--block",to:n,children:"Get Started"})})]})})}},7160:(e,t,n)=>{n.d(t,{c:()=>s});n(1504);const a={root:"root_vxd5"};var r=n(7624);function s({children:e}){return(0,r.jsx)("div",{className:a.root,children:e})}},4971:(e,t,n)=>{function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}n.d(t,{c:()=>r});const r=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},2172:(e,t,n)=>{n.d(t,{I:()=>i,M:()=>o});var a=n(1504);const r={},s=a.createContext(r);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);