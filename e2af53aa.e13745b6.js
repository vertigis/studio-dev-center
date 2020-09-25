(window.webpackJsonp=window.webpackJsonp||[]).push([[135,139,148],{205:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return m})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return g})),n.d(t,"default",(function(){return h}));var a=n(2),r=n(6),o=(n(0),n(223)),i=n(49),c=n(64),s=n(230),l=n(229),u=n(224),b=n(233),p=n(234),m={title:"Translate a Component's Text",description:"Geocortex Web - Learn how to internationalize a custom component"},d={unversionedId:"web/tutorial-internationalization",id:"web/tutorial-internationalization",isDocsHomePage:!1,title:"Translate a Component's Text",description:"Geocortex Web - Learn how to internationalize a custom component",source:"@site/docs/web/tutorial-internationalization.mdx",slug:"/web/tutorial-internationalization",permalink:"/docs/web/tutorial-internationalization",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/tutorial-internationalization.mdx",version:"current",sidebar:"web",previous:{title:"Subscribe to an Existing Event",permalink:"/docs/web/tutorial-events-subscribe"},next:{title:"Using the canExecute Command Hook",permalink:"/docs/web/tutorial-command-can-execute"}},g=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Create a Boilerplate Component",id:"create-a-boilerplate-component",children:[]},{value:"Creating the Language Resources",id:"creating-the-language-resources",children:[]},{value:"Register the Language Resources",id:"register-the-language-resources",children:[]},{value:"Use the Language Strings",id:"use-the-language-strings",children:[]},{value:"Live Sample",id:"live-sample",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],f={rightToc:g};function h(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c.default,{mdxType:"TranslationCallout"}),Object(o.b)("p",null,"Custom components often provide user facing UI with some degree of text. You may want to define their text as language strings for multiple reasons."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"It allows the text be to translated or changed without a corresponding change in the component code."),Object(o.b)("li",{parentName:"ol"},"It allows the language strings to be shared across different components."),Object(o.b)("li",{parentName:"ol"},"It consolidates the language strings and makes them easier to locate.")),Object(o.b)("p",null,"This article will cover creating a german and english translation for a custom component using language strings."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)(i.default,{mdxType:"PrereqsCustomCodeSnippet"}),Object(o.b)("h2",{id:"create-a-boilerplate-component"},"Create a Boilerplate Component"),Object(o.b)("p",null,"First, we will start off with a component that uses a plain hard-coded text string in English."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Learn more about how to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/sdk-components-create"}),"build custom components"),"."))),Object(o.b)(b.a,{defaultValue:"component",values:[{label:"Component",value:"component"},{label:"Model",value:"model"},{label:"Component Index",value:"index"},{label:"Registration",value:"registration"},{label:"Layout",value:"layout"},{label:"App Config",value:"config"}],mdxType:"Tabs"},Object(o.b)(p.a,{value:"component",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="src/components/TranslatableText/TranslatableText.tsx"',title:'"src/components/TranslatableText/TranslatableText.tsx"'}),'import React from "react";\nimport { LayoutElement } from "@vertigis/web/components";\nimport Typography from "@vertigis/web/ui/Typography";\n\nexport default function TranslatableText(props) {\n    return (\n        <LayoutElement {...props} style={{ backgroundColor: "white" }}>\n            <Typography variant="h1">This text will be translated.</Typography>\n        </LayoutElement>\n    );\n}\n'))),Object(o.b)(p.a,{value:"model",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/components/TranslatableText/TranslatableTextModel.ts"',title:'"src/components/TranslatableText/TranslatableTextModel.ts"'}),'import { ComponentModelBase, serializable } from "@vertigis/web/models";\n\n@serializable\nclass TranslatableTextModel extends ComponentModelBase {}\n\nexport default TranslatableTextModel;\n'))),Object(o.b)(p.a,{value:"index",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/components/TranslatableText/index.ts"',title:'"src/components/TranslatableText/index.ts"'}),'export { default } from "./TranslatableText";\nexport { default as TranslatableTextModel } from "./TranslatableTextModel";\n'))),Object(o.b)(p.a,{value:"registration",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/index.ts"',title:'"src/index.ts"'}),'import { LibraryRegistry } from "@vertigis/web/config";\nimport TranslatableText, {\n    TranslatableTextModel,\n} from "./components/TranslatableText";\n\nexport default function (registry: LibraryRegistry) {\n    registry.registerComponent({\n        name: "translatable-text",\n        namespace: "your.custom.namespace",\n        getComponentType: () => TranslatableText,\n        itemType: "translatable-text",\n        title: "Translatable Text",\n    });\n    registry.registerModel({\n        getModel: (config) => new TranslatableTextModel(config),\n        itemType: "translatable-text",\n    });\n}\n'))),Object(o.b)(p.a,{value:"layout",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'}),'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1" xmlns:custom="your.custom.namespace">\n    <map>\n        <custom:translatable-text slot="top-center" width="15" height="9" padding="0.5"/>\n    </map>\n</layout>\n'))),Object(o.b)(p.a,{value:"config",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="src/app.json"',title:'"src/app.json"'}),'{\n    "schemaVersion": "1.0",\n    "items": []\n}\n')))),Object(o.b)("h2",{id:"creating-the-language-resources"},"Creating the Language Resources"),Object(o.b)("p",null,"Next, we are going to create the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/sdk-internationalization"}),"language resources")," for English and German."),Object(o.b)(b.a,{defaultValue:"english",values:[{label:"English",value:"english"},{label:"German",value:"german"}],mdxType:"Tabs"},Object(o.b)(p.a,{value:"english",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="src/en.json"',title:'"src/en.json"'}),'{\n    "language-translatable-text-content": "I will be translated."\n}\n'))),Object(o.b)(p.a,{value:"german",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="src/de.json"',title:'"src/de.json"'}),'{\n    "language-translatable-text-content": "Dieser Text wird \xfcbersetzt."\n}\n')))),Object(o.b)("h2",{id:"register-the-language-resources"},"Register the Language Resources"),Object(o.b)("p",null,"Next we need to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/sdk-internationalization#registering-language-resources"}),"register the language resources")," with Geocortex Web."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/index.ts"',title:'"src/index.ts"'}),'import { LibraryRegistry } from "@vertigis/web/config";\nimport TranslatableText, {\n    TranslatableTextModel,\n} from "./components/TranslatableText";\n// highlight-start\nimport enJson from "./en.json";\nimport deJson from "./de.json";\n// highlight-end\n\nexport default function (registry: LibraryRegistry) {\n    registry.registerComponent({\n        name: "translatable-text",\n        namespace: "your.custom.namespace",\n        getComponentType: () => TranslatableText,\n        itemType: "translatable-text",\n        title: "Translatable Text",\n    });\n    registry.registerModel({\n        getModel: (config) => new TranslatableTextModel(config),\n        itemType: "translatable-text",\n    });\n    // highlight-start\n    registry.registerLanguageResources({\n        locale: "en",\n        getValues: () => enJson,\n    });\n    registry.registerLanguageResources({\n        locale: "de",\n        getValues: () => deJson,\n    });\n    // highlight-end\n}\n')),Object(o.b)("h2",{id:"use-the-language-strings"},"Use the Language Strings"),Object(o.b)("p",null,"Now that they have been registered, we can use the strings in our boilerplate component from earlier. Geocortex Web layout components, like ",Object(o.b)("inlineCode",{parentName:"p"},"<Typography>"),", will automatically detect and translate language keys like ",Object(o.b)("inlineCode",{parentName:"p"},"language-translatable-text-content")," in props and child content."),Object(o.b)("p",null,"If you need to manually translate a language key, you can use the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/hooks-reference.html#usecontext"}),Object(o.b)("inlineCode",{parentName:"a"},"useContext")," react hook")," with the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/sdk-components-ui-context"}),"UIContext")," to access the ",Object(o.b)("inlineCode",{parentName:"p"},"translate")," function. Then you can pass the language key ",Object(o.b)("inlineCode",{parentName:"p"},"language-translatable-text-content")," you defined in the language resources files to the ",Object(o.b)("inlineCode",{parentName:"p"},"translate")," function and your text will be translated into whichever locale is most appropriate."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"To test out a translation, add the URL parameter ",Object(o.b)("inlineCode",{parentName:"p"},"locale=<language>")," to your local server."),Object(o.b)("p",{parentName:"div"},"For example, ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:3000/?locale=de")))),Object(o.b)(b.a,{defaultValue:"component",values:[{label:"Component",value:"component"},{label:"English UI",value:"english"},{label:"German UI",value:"german"}],mdxType:"Tabs"},Object(o.b)(p.a,{value:"component",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="src/components/TranslatableText/TranslatableText.tsx"',title:'"src/components/TranslatableText/TranslatableText.tsx"'}),'import React, { useContext } from "react";\nimport { LayoutElement } from "@vertigis/web/components";\n// highlight-next-line\nimport { UIContext } from "@vertigis/web/ui";\nimport Typography from "@vertigis/web/ui/Typography";\n\nexport default function TranslatableText(props) {\n    // highlight-next-line\n    const { translate } = useContext(UIContext);\n\n    return (\n        <LayoutElement {...props} style={{ backgroundColor: "white" }}>\n            // highlight-start\n            <Typography\n                variant="h1"\n                text="language-translatable-text-content"\n            />\n            <h1>{translate("language-translatable-text-content")}</h1>\n            // highlight-end\n        </LayoutElement>\n    );\n}\n'))),Object(o.b)(p.a,{value:"english",mdxType:"TabItem"},Object(o.b)("img",{src:Object(u.a)("img/web-translate-english.png")})),Object(o.b)(p.a,{value:"german",mdxType:"TabItem"},Object(o.b)("img",{src:Object(u.a)("img/web-translate-german.png")}))),Object(o.b)("h2",{id:"live-sample"},"Live Sample"),Object(o.b)("p",null,"Check out a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://vertigis-web-samples.netlify.app/i18n"}),"live SDK sample")," that demonstrates how to internationalize your application to be supported by multiple locales."),Object(o.b)("h2",{id:"next-steps"},"Next Steps"),Object(o.b)(l.a,{mdxType:"UseCaseContainer"},Object(o.b)(s.a,{title:"Check out the Language String Reference",description:"Learn more about creating and registering language strings",link:Object(u.a)("docs/web/sdk-internationalization"),mdxType:"UseCaseCard"})))}h.isMDXComponent=!0},223:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),m=a,d=b["".concat(i,".").concat(m)]||b[m]||p[m]||o;return n?r.a.createElement(d,c(c({ref:t},l),{},{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},224:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(227),r=n(225);function o(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,i=o.forcePrependBaseUrl,c=void 0!==i&&i,s=o.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},225:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},226:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},227:function(e,t,n){"use strict";var a=n(0),r=n(19);t.a=function(){var e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},228:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(13),i=n(225),c=n(8),s=Object(a.createContext)({collectLink:function(){}}),l=n(224),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,n,b,p=e.isNavLink,m=e.to,d=e.href,g=e.activeClassName,f=e["data-noBrokenLinkCheck"],h=u(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]),v=Object(l.b)().withBaseUrl,O=Object(a.useContext)(s),j=m||d,x=Object(i.a)(j),y=null==j?void 0:j.replace("pathname://",""),w=void 0!==y?function(e){return e.startsWith("/")}(n=y)?v(n):n:void 0,T=Object(a.useRef)(!1),N=p?o.e:o.c,C=c.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!C&&x&&window.docusaurus.prefetch(w),function(){C&&b&&b.disconnect()}}),[w,C,x]);var k=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,E=!w||!x||k;return w&&x&&!k&&!f&&O.collectLink(w),E?r.a.createElement("a",Object.assign({href:w},!x&&{target:"_blank",rel:"noopener noreferrer"},h)):r.a.createElement(N,Object.assign({},h,{onMouseEnter:function(){T.current||(window.docusaurus.preload(w),T.current=!0)},innerRef:function(e){var t,n;C&&e&&x&&(t=e,n=function(){window.docusaurus.prefetch(w)},(b=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(b.unobserve(t),b.disconnect(),n())}))}))).observe(t))},to:w||""},p&&{activeClassName:g}))}},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a),o=n(46),i=n.n(o);function c(e){var t=e.children;return r.a.createElement("div",{className:i.a.root},t)}},230:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(228),r=n(0),o=n.n(r),i=n(226),c=n(47),s=n.n(c);function l(e){var t=e.title,n=e.description,r=e.link;return o.a.createElement("div",{className:Object(i.a)("card-demo",s.a.root)},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card__header"},o.a.createElement("h3",null,t)),o.a.createElement("div",{className:"card__body"},o.a.createElement("p",null,n)),o.a.createElement("div",{className:"card__footer"},o.a.createElement(a.a,{className:"button button--secondary button--block",to:r},"Get Started"))))}},231:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},232:function(e,t,n){"use strict";var a=n(0),r=n(231);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},233:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(232),i=n(226),c=n(48),s=n.n(c),l=37,u=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,b=e.values,p=e.groupId,m=Object(o.a)(),d=m.tabGroupChoices,g=m.setTabGroupChoices,f=Object(a.useState)(c),h=f[0],v=f[1],O=Object(a.useState)(!1),j=O[0],x=O[1];if(null!=p){var y=d[p];null!=y&&y!==h&&b.some((function(e){return e.value===y}))&&v(y)}var w=function(e){v(e),null!=p&&g(p,e)},T=[],N=function(e){e.metaKey||e.altKey||e.ctrlKey||x(!0)},C=function(){x(!1)};return Object(a.useEffect)((function(){window.addEventListener("keydown",N),window.addEventListener("mousedown",C)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":h===t}),style:j?{}:{outline:"none"},key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e),N(e)},onFocus:function(){return w(t)},onClick:function(){w(t),x(!1)},onPointerDown:function(){return x(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===h}))[0]))}},234:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},49:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),o=(n(0),n(223)),i={},c={unversionedId:"web/snippets/prereqs-custom-code",id:"web/snippets/prereqs-custom-code",isDocsHomePage:!1,title:"prereqs-custom-code",description:"-   Download and setup the Geocortex Web SDK.",source:"@site/docs/web/snippets/prereqs-custom-code.mdx",slug:"/web/snippets/prereqs-custom-code",permalink:"/docs/web/snippets/prereqs-custom-code",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/snippets/prereqs-custom-code.mdx",version:"current"},s=[],l={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Download and setup the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/web/sdk-overview"}),"Geocortex Web SDK"),"."),Object(o.b)("li",{parentName:"ul"},"Check out the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/web/sdk-deployment#uploading-custom-code-to-an-app"}),"deployment instructions")," to learn more about deploying custom code to a Geocortex Web App.")))}u.isMDXComponent=!0},64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),o=(n(0),n(223)),i={},c={unversionedId:"web/snippets/translation-callout",id:"web/snippets/translation-callout",isDocsHomePage:!1,title:"translation-callout",description:"Existing language strings for an application can be customized for any language in the Geocortex Web Designer. To provide a complete translation in an entirely new locale for Geocortex Web, please contact us.",source:"@site/docs/web/snippets/translation-callout.mdx",slug:"/web/snippets/translation-callout",permalink:"/docs/web/snippets/translation-callout",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/snippets/translation-callout.mdx",version:"current"},s=[],l={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Existing language strings for an application can be ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.geocortex.com/webviewer/latest/admin-help/Default.htm#gwv/internationalization.htm"}),"customized for any language in the Geocortex Web Designer"),". To provide a complete translation in an entirely new locale for Geocortex Web, please ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.geocortex.com/contact/"}),"contact us"),"."))))}u.isMDXComponent=!0}}]);