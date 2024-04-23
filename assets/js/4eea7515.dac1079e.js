"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[6996,7668],{96:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>g,toc:()=>p});var i=t(7624),a=t(2172),s=t(964),r=t(7528),o=t(7160),l=t(4732);const c={title:"Internationalization",description:"VertiGIS Studio Web - Learn about internationalization and language strings in VertiGIS Studio Web"},d=void 0,g={id:"web/sdk-internationalization",title:"Internationalization",description:"VertiGIS Studio Web - Learn about internationalization and language strings in VertiGIS Studio Web",source:"@site/docs/web/sdk-internationalization.mdx",sourceDirName:"web",slug:"/web/sdk-internationalization",permalink:"/docs/web/sdk-internationalization",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/sdk-internationalization.mdx",tags:[],version:"current",frontMatter:{title:"Internationalization",description:"VertiGIS Studio Web - Learn about internationalization and language strings in VertiGIS Studio Web"},sidebar:"web",previous:{title:"Adding Icons",permalink:"/docs/web/sdk-adding-icons"},next:{title:"Reference Third Party Libraries",permalink:"/docs/web/sdk-reference-third-party-libraries"}},u={},p=[...l.toc,{value:"Defining Language Strings",id:"defining-language-strings",level:2},{value:"Registering Language Resources",id:"registering-language-resources",level:2},{value:"Supported Locales",id:"supported-locales",level:2},{value:"Next Steps",id:"next-steps",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.default,{}),"\n",(0,i.jsx)(n.p,{children:"VertiGIS Studio Web was designed to be fully internationalizable on all levels of the product, from app config to custom code. A major component of this is language strings. Language strings provide a couple advantages over hardcoding plain text in a component."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Language strings can be easily translated or modified without having to change component code."}),"\n",(0,i.jsx)(n.li,{children:"Language strings can be shared across components."}),"\n",(0,i.jsx)(n.li,{children:"Language strings consolidate user facing text throughout the application, making it easy to review and find."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"It is recommended you use language strings for all user facing text in your application."}),"\n",(0,i.jsx)(n.h2,{id:"defining-language-strings",children:"Defining Language Strings"}),"\n",(0,i.jsxs)(n.p,{children:["Language strings are defined as properties in a plain JSON file. It's convention to define language strings with the format ",(0,i.jsx)(n.code,{children:"language-kebab-cased-key"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="en.json"',children:'{\n    "language-some-text-string": "I will be translated."\n}\n'})}),"\n",(0,i.jsx)(n.admonition,{title:"Warning",type:"danger",children:(0,i.jsx)(n.p,{children:"If you define a language string that VertiGIS Studio Web has already defined, it will override the existing language string with your custom string."})}),"\n",(0,i.jsxs)(n.p,{children:["By convention, these files are named after the locale they represent. For example, a file of german language strings would be named ",(0,i.jsx)(n.code,{children:"de.json"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"registering-language-resources",children:"Registering Language Resources"}),"\n",(0,i.jsx)(n.p,{children:"All language resource files need to be registered with the SDK before they can be used."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="src/index.ts"',children:'...\nimport enJson from "./en.json";\n\nexport default function (registry: LibraryRegistry) {\n    ...\n    registry.registerLanguageResources({\n        locale: "en",\n        getValues: () => enJson,\n    });\n    ...\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Once a set of language strings has been registered, they can be used ",(0,i.jsx)(n.a,{href:"/docs/web/configuration-app-config-reference#internationalization",children:"in the app config"})," or in ",(0,i.jsx)(n.a,{href:"/docs/web/sdk-components-internationalization",children:"custom components"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"supported-locales",children:"Supported Locales"}),"\n",(0,i.jsxs)(n.p,{children:["VertiGIS Studio Web has full language tag support as specified in the ",(0,i.jsx)(n.a,{href:"https://www.w3.org/International/questions/qa-choosing-language-tags#regionsubtag",children:"WC3 spec"}),". The casing of a language tag determines what is it parsed as."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["All lowercase tags like ",(0,i.jsx)(n.code,{children:"de"})," are parsed as a language code."]}),"\n",(0,i.jsxs)(n.li,{children:["Region codes, like ",(0,i.jsx)(n.code,{children:"de-AT"})," are uppercase."]}),"\n",(0,i.jsxs)(n.li,{children:["Script codes like ",(0,i.jsx)(n.code,{children:"ru-Latn"})," are pascal cased."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Warning",type:"danger",children:(0,i.jsxs)(n.p,{children:["Regional locales will ",(0,i.jsx)(n.strong,{children:"not"})," be used as fallback locales for a language. This means that if a browser is configured in the ",(0,i.jsx)(n.code,{children:"de"})," locale, but language strings are registered with the ",(0,i.jsx)(n.code,{children:"de-AT"})," locale in VertiGIS Studio Web, the fallback translation, ",(0,i.jsx)(n.strong,{children:"not"})," ",(0,i.jsx)(n.code,{children:"de-AT"}),", will be shown."]})}),"\n",(0,i.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsxs)(o.c,{children:[(0,i.jsx)(r.c,{title:"Internationalization in App Config",description:"Learn how to use language strings in the app config",link:(0,s.c)("docs/web/configuration-app-config-reference#internationalization")}),(0,i.jsx)(r.c,{title:"Internationalize Components",description:"Learn how to use language strings for user facing text in components",link:(0,s.c)("docs/web/sdk-components-internationalization")})]})]})}function f(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},4732:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=t(7624),a=t(2172);const s={},r=void 0,o={id:"web/snippets/translation-callout",title:"translation-callout",description:"Existing language strings for an application can be customized for any language in the VertiGIS Studio Web Designer. To provide a complete translation in an entirely new locale for VertiGIS Studio Web, please contact us.",source:"@site/docs/web/snippets/translation-callout.mdx",sourceDirName:"web/snippets",slug:"/web/snippets/translation-callout",permalink:"/docs/web/snippets/translation-callout",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/snippets/translation-callout.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){const n={a:"a",admonition:"admonition",p:"p",...(0,a.M)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Existing language strings for an application can be ",(0,i.jsx)(n.a,{href:"https://docs.vertigisstudio.com/webviewer/latest/admin-help/Default.htm#gwv/internationalization.htm",children:"customized for any language in the VertiGIS Studio Web Designer"}),". To provide a complete translation in an entirely new locale for VertiGIS Studio Web, please ",(0,i.jsx)(n.a,{href:"https://www.vertigisstudio.com/contact/",children:"contact us"}),"."]})})}function g(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},7528:(e,n,t)=>{t.d(n,{c:()=>o});var i=t(867),a=(t(1504),t(4971));const s={root:"root_Uwqo"};var r=t(7624);function o({title:e,description:n,link:t}){return(0,r.jsx)("div",{className:(0,a.c)("card-demo",s.root),children:(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("div",{className:"card__header",children:(0,r.jsx)("h3",{children:e})}),(0,r.jsx)("div",{className:"card__body",children:(0,r.jsx)("p",{children:n})}),(0,r.jsx)("div",{className:"card__footer",children:(0,r.jsx)(i.c,{className:"button button--secondary button--block",to:t,children:"Get Started"})})]})})}},7160:(e,n,t)=>{t.d(n,{c:()=>s});t(1504);const i={root:"root_vxd5"};var a=t(7624);function s({children:e}){return(0,a.jsx)("div",{className:i.root,children:e})}},4971:(e,n,t)=>{function i(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=i(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}t.d(n,{c:()=>a});const a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=i(e))&&(a&&(a+=" "),a+=n);return a}},2172:(e,n,t)=>{t.d(n,{I:()=>o,M:()=>r});var i=t(1504);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);