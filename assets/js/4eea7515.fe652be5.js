(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[1145,2290],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),g=i,m=p["".concat(l,".").concat(g)]||p[g]||u[g]||r;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6742:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var a=n(7294),i=n(3727),r=n(2263),o=n(3919),s=n(412);const l=(0,a.createContext)({collectLink:()=>{}});var c=n(4996),d=n(8780);const u=function({isNavLink:e,to:t,href:n,activeClassName:u,isActive:p,"data-noBrokenLinkCheck":g,autoAddBaseUrl:m=!0,...f}){var h;const{siteConfig:{trailingSlash:v}}=(0,r.Z)(),{withBaseUrl:b}=(0,c.C)(),k=(0,a.useContext)(l),w=t||n,y=(0,o.Z)(w),N=null==w?void 0:w.replace("pathname://","");let S=void 0!==N?(x=N,m&&(e=>e.startsWith("/"))(x)?b(x):x):void 0;var x;S&&y&&(S=(0,d.applyTrailingSlash)(S,v));const C=(0,a.useRef)(!1),O=e?i.OL:i.rU,I=s.Z.canUseIntersectionObserver;let T;(0,a.useEffect)((()=>(!I&&y&&null!=S&&window.docusaurus.prefetch(S),()=>{I&&T&&T.disconnect()})),[S,I,y]);const L=null!==(h=null==S?void 0:S.startsWith("#"))&&void 0!==h&&h,j=!S||!y||L;return S&&y&&!L&&!g&&k.collectLink(S),j?a.createElement("a",{href:S,...w&&!y&&{target:"_blank",rel:"noopener noreferrer"},...f}):a.createElement(O,{...f,onMouseEnter:()=>{C.current||null==S||(window.docusaurus.preload(S),C.current=!0)},innerRef:e=>{var t,n;I&&e&&y&&(t=e,n=()=>{null!=S&&window.docusaurus.prefetch(S)},T=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(T.unobserve(t),T.disconnect(),n())}))})),T.observe(t))},to:S||"",...e&&{isActive:p,activeClassName:u}})}},3919:(e,t,n)=>{"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,{b:()=>a,Z:()=>i})},4996:(e,t,n)=>{"use strict";n.d(t,{C:()=>r,Z:()=>o});var a=n(2263),i=n(3919);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:r=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(a)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return r?e+o:o}(t,e,n,a)}}function o(e,t={}){const{withBaseUrl:n}=r();return n(e,t)}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),a="/"===n?"/":t?(i=n).endsWith("/")?i:`${i}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(n);var i;return e.replace(n,a)}},8780:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(i).default}});var r=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(r).default}})},9964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1962:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(6742),i=n(7294),r=n(6010);const o="root_2PFE";function s({title:e,description:t,link:n}){return i.createElement("div",{className:(0,r.Z)("card-demo",o)},i.createElement("div",{className:"card"},i.createElement("div",{className:"card__header"},i.createElement("h3",null,e)),i.createElement("div",{className:"card__body"},i.createElement("p",null,t)),i.createElement("div",{className:"card__footer"},i.createElement(a.Z,{className:"button button--secondary button--block",to:n},"Get Started"))))}},7763:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var a=n(7294);const i="root_NqT0";function r({children:e}){return a.createElement("div",{className:i},e)}},8699:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>d,metadata:()=>u,toc:()=>p,default:()=>m});var a=n(2122),i=(n(7294),n(3905)),r=n(4996),o=n(1962),s=n(7763),l=n(8161);const c={title:"Internationalization",description:"VertiGIS Studio Web - Learn about internationalization and language strings in VertiGIS Studio Web"},d=void 0,u={unversionedId:"web/sdk-internationalization",id:"web/sdk-internationalization",isDocsHomePage:!1,title:"Internationalization",description:"VertiGIS Studio Web - Learn about internationalization and language strings in VertiGIS Studio Web",source:"@site/docs/web/sdk-internationalization.mdx",sourceDirName:"web",slug:"/web/sdk-internationalization",permalink:"/docs/web/sdk-internationalization",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/sdk-internationalization.mdx",version:"current",frontMatter:{title:"Internationalization",description:"VertiGIS Studio Web - Learn about internationalization and language strings in VertiGIS Studio Web"},sidebar:"web",previous:{title:"Adding Icons",permalink:"/docs/web/sdk-adding-icons"},next:{title:"Reference Third Party Libraries",permalink:"/docs/web/sdk-reference-third-party-libraries"}},p=[{value:"Defining Language Strings",id:"defining-language-strings",children:[]},{value:"Registering Language Resources",id:"registering-language-resources",children:[]},{value:"Supported Locales",id:"supported-locales",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],g={toc:p};function m({components:e,...t}){return(0,i.kt)("wrapper",(0,a.Z)({},g,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)(l.default,{mdxType:"TranslationCallout"}),(0,i.kt)("p",null,"VertiGIS Studio Web was designed to be fully internationalizable on all levels of the product, from app config to custom code. A major component of this is language strings. Language strings provide a couple advantages over hardcoding plain text in a component."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Language strings can be easily translated or modified without having to change component code."),(0,i.kt)("li",{parentName:"ol"},"Language strings can be shared across components."),(0,i.kt)("li",{parentName:"ol"},"Language strings consolidate user facing text throughout the application, making it easy to review and find.")),(0,i.kt)("p",null,"It is recommended you use language strings for all user facing text in your application."),(0,i.kt)("h2",{id:"defining-language-strings"},"Defining Language Strings"),(0,i.kt)("p",null,"Language strings are defined as properties in a plain JSON file. It's convention to define language strings with the format ",(0,i.kt)("inlineCode",{parentName:"p"},"language-kebab-cased-key"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="en.json"',title:'"en.json"'},'{\n    "language-some-text-string": "I will be translated."\n}\n')),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you define a language string that VertiGIS Studio Web has already defined, it will override the existing language string with your custom string."))),(0,i.kt)("p",null,"By convention, these files are named after the locale they represent. For example, a file of german language strings would be named ",(0,i.kt)("inlineCode",{parentName:"p"},"de.json"),"."),(0,i.kt)("h2",{id:"registering-language-resources"},"Registering Language Resources"),(0,i.kt)("p",null,"All language resource files need to be registered with the SDK before they can be used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/index.ts"',title:'"src/index.ts"'},'...\nimport enJson from "./en.json";\n\nexport default function (registry: LibraryRegistry) {\n    ...\n    registry.registerLanguageResources({\n        locale: "en",\n        getValues: () => enJson,\n    });\n    ...\n}\n')),(0,i.kt)("p",null,"Once a set of language strings has been registered, they can be used ",(0,i.kt)("a",{parentName:"p",href:"/docs/web/configuration-app-config-reference#internationalization"},"in the app config")," or in ",(0,i.kt)("a",{parentName:"p",href:"/docs/web/sdk-components-internationalization"},"custom components"),"."),(0,i.kt)("h2",{id:"supported-locales"},"Supported Locales"),(0,i.kt)("p",null,"VertiGIS Studio Web has full language tag support as specified in the ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/International/questions/qa-choosing-language-tags#regionsubtag"},"WC3 spec"),". The casing of a language tag determines what is it parsed as."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All lowercase tags like ",(0,i.kt)("inlineCode",{parentName:"li"},"de")," are parsed as a language code."),(0,i.kt)("li",{parentName:"ul"},"Region codes, like ",(0,i.kt)("inlineCode",{parentName:"li"},"de-AT")," are uppercase."),(0,i.kt)("li",{parentName:"ul"},"Script codes like ",(0,i.kt)("inlineCode",{parentName:"li"},"ru-Latn")," are pascal cased.")),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Regional locales will ",(0,i.kt)("strong",{parentName:"p"},"not")," be used as fallback locales for a language. This means that if a browser is configured in the ",(0,i.kt)("inlineCode",{parentName:"p"},"de")," locale, but language strings are registered with the ",(0,i.kt)("inlineCode",{parentName:"p"},"de-AT")," locale in VertiGIS Studio Web, the fallback translation, ",(0,i.kt)("strong",{parentName:"p"},"not")," ",(0,i.kt)("inlineCode",{parentName:"p"},"de-AT"),", will be shown."))),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)(s.Z,{mdxType:"UseCaseContainer"},(0,i.kt)(o.Z,{title:"Internationalization in App Config",description:"Learn how to use language strings in the app config",link:(0,r.Z)("docs/web/configuration-app-config-reference#internationalization"),mdxType:"UseCaseCard"}),(0,i.kt)(o.Z,{title:"Internationalize Components",description:"Learn how to use language strings for user facing text in components",link:(0,r.Z)("docs/web/sdk-components-internationalization"),mdxType:"UseCaseCard"})))}m.isMDXComponent=!0},8161:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>r,contentTitle:()=>o,metadata:()=>s,toc:()=>l,default:()=>d});var a=n(2122),i=(n(7294),n(3905));const r={},o=void 0,s={unversionedId:"web/snippets/translation-callout",id:"web/snippets/translation-callout",isDocsHomePage:!1,title:"translation-callout",description:"Existing language strings for an application can be customized for any language in the VertiGIS Studio Web Designer. To provide a complete translation in an entirely new locale for VertiGIS Studio Web, please contact us.",source:"@site/docs/web/snippets/translation-callout.mdx",sourceDirName:"web/snippets",slug:"/web/snippets/translation-callout",permalink:"/docs/web/snippets/translation-callout",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/snippets/translation-callout.mdx",version:"current",frontMatter:{}},l=[],c={toc:l};function d({components:e,...t}){return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Existing language strings for an application can be ",(0,i.kt)("a",{parentName:"p",href:"https://docs.geocortex.com/webviewer/latest/admin-help/Default.htm#gwv/internationalization.htm"},"customized for any language in the VertiGIS Studio Web Designer"),". To provide a complete translation in an entirely new locale for VertiGIS Studio Web, please ",(0,i.kt)("a",{parentName:"p",href:"https://www.vertigisstudio.com/contact/"},"contact us"),"."))))}d.isMDXComponent=!0},6010:(e,t,n)=>{"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:()=>i})}}]);