"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[6660,6286],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?i.createElement(f,o(o({ref:t},u),{},{components:n})):i.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6742:(e,t,n)=>{n.d(t,{Z:()=>p});var i=n(7294),r=n(3727),a=n(2263),o=n(3919),l=n(412);const s=(0,i.createContext)({collectLink:()=>{}});var c=n(4996),u=n(8780);const p=function({isNavLink:e,to:t,href:n,activeClassName:p,isActive:d,"data-noBrokenLinkCheck":m,autoAddBaseUrl:f=!0,...g}){var v;const{siteConfig:{trailingSlash:h}}=(0,a.Z)(),{withBaseUrl:b}=(0,c.C)(),y=(0,i.useContext)(s),k=t||n,w=(0,o.Z)(k),x=null==k?void 0:k.replace("pathname://","");let S=void 0!==x?(N=x,f&&(e=>e.startsWith("/"))(N)?b(N):N):void 0;var N;S&&w&&(S=(0,u.applyTrailingSlash)(S,h));const C=(0,i.useRef)(!1),O=e?r.OL:r.rU,M=l.Z.canUseIntersectionObserver;let z;(0,i.useEffect)((()=>(!M&&w&&null!=S&&window.docusaurus.prefetch(S),()=>{M&&z&&z.disconnect()})),[S,M,w]);const E=null!==(v=null==S?void 0:S.startsWith("#"))&&void 0!==v&&v,I=!S||!w||E;return S&&w&&!E&&!m&&y.collectLink(S),I?i.createElement("a",{href:S,...k&&!w&&{target:"_blank",rel:"noopener noreferrer"},...g}):i.createElement(O,{...g,onMouseEnter:()=>{C.current||null==S||(window.docusaurus.preload(S),C.current=!0)},innerRef:e=>{var t,n;M&&e&&w&&(t=e,n=()=>{null!=S&&window.docusaurus.prefetch(S)},z=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(z.unobserve(t),z.disconnect(),n())}))})),z.observe(t))},to:S||"",...e&&{isActive:d,activeClassName:p}})}},3919:(e,t,n)=>{function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}n.d(t,{Z:()=>r,b:()=>i})},4996:(e,t,n)=>{n.d(t,{C:()=>a,Z:()=>o});var i=n(2263),r=n(3919);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,i.Z)();return{withBaseUrl:(n,i)=>function(e,t,n,{forcePrependBaseUrl:i=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(i)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+o:o}(t,e,n,i)}}function o(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},8802:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),i="/"===n?"/":t?(r=n).endsWith("/")?r:`${r}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(n);var r;return e.replace(n,i)}},8780:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return i(r).default}});var a=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return i(a).default}})},9964:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1962:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(6742),r=n(7294),a=n(6010);const o="root_2PFE";function l({title:e,description:t,link:n}){return r.createElement("div",{className:(0,a.Z)("card-demo",o)},r.createElement("div",{className:"card"},r.createElement("div",{className:"card__header"},r.createElement("h3",null,e)),r.createElement("div",{className:"card__body"},r.createElement("p",null,t)),r.createElement("div",{className:"card__footer"},r.createElement(i.Z,{className:"button button--secondary button--block",to:n},"Get Started"))))}},7763:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(7294);const r="root_NqT0";function a({children:e}){return i.createElement("div",{className:r},e)}},1196:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>d});var i=n(7462),r=(n(7294),n(3905)),a=n(4996),o=n(1962),l=n(7763),s=n(7785);const c={title:"Internationalization",description:"VertiGIS Studio Mobile - Internationalization reference"},u=void 0,p={unversionedId:"mobile/sdk-internationalization",id:"mobile/sdk-internationalization",isDocsHomePage:!1,title:"Internationalization",description:"VertiGIS Studio Mobile - Internationalization reference",source:"@site/docs/mobile/sdk-internationalization.mdx",sourceDirName:"mobile",slug:"/mobile/sdk-internationalization",permalink:"/docs/mobile/sdk-internationalization",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/sdk-internationalization.mdx",version:"current",frontMatter:{title:"Internationalization",description:"VertiGIS Studio Mobile - Internationalization reference"},sidebar:"mobile",previous:{title:"Component and Service Interactions",permalink:"/docs/mobile/sdk-component-service-interactions"},next:{title:"Memory Management",permalink:"/docs/mobile/sdk-memory-leaks"}},d=[{value:"Specifying a Default Language",id:"specifying-a-default-language",children:[]},{value:"Adding New Cultures for Existing Language Strings",id:"adding-new-cultures-for-existing-language-strings",children:[]},{value:"Relevant SDK Sample",id:"relevant-sdk-sample",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],m={toc:d};function f({components:e,...t}){return(0,r.kt)("wrapper",(0,i.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(s.default,{mdxType:"TranslationCallout"}),(0,r.kt)("p",null,"VertiGIS Studio Mobile was designed to be fully internationalizable on all levels of the product, from app config to custom code. This internationalization is handled by Xamarin Forms."),(0,r.kt)("h2",{id:"specifying-a-default-language"},"Specifying a Default Language"),(0,r.kt)("p",null,"Xamarin Forms describes how to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/app-fundamentals/localization/text?pivots=windows#specify-the-default-culture"},"specify a default language for your app"),"."),(0,r.kt)("h2",{id:"adding-new-cultures-for-existing-language-strings"},"Adding New Cultures for Existing Language Strings"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-mobile-quickstart"},"Quickstart")," project comes with multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"AppResources")," files in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-mobile-quickstart/tree/master/App1/App1"},"root of the platform agnostic project")," to provide an example of adding a culture to your application. You can also check out the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/app-fundamentals/localization/"},"Xamarin Documentation on Localization"),"."),(0,r.kt)("h2",{id:"relevant-sdk-sample"},"Relevant SDK Sample"),(0,r.kt)("p",null,"Check out the relevant VertiGIS Studio Mobile SDK Sample:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Conceptual/Internationalization"},"Internationalization"))),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)(l.Z,{mdxType:"UseCaseContainer"},(0,r.kt)(o.Z,{title:"Internationalization in App Config",description:"Learn how to use language strings in the app config",link:(0,a.Z)("docs/mobile/configuration-app-config-reference#internationalization"),mdxType:"UseCaseCard"}),(0,r.kt)(o.Z,{title:"Internationalize Components",description:"Learn how to use language strings for user facing text in components",link:(0,a.Z)("docs/mobile/sdk-components-internationalization"),mdxType:"UseCaseCard"})))}f.isMDXComponent=!0},7785:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=n(7462),r=(n(7294),n(3905));const a={},o=void 0,l={unversionedId:"mobile/snippets/translation-callout",id:"mobile/snippets/translation-callout",isDocsHomePage:!1,title:"translation-callout",description:"Existing language strings for an application can be customized for any language in the VertiGIS Studio Mobile s Designer. To provide a complete translation in an entirely new locale for VertiGIS Studio Mobile, please contact us.",source:"@site/docs/mobile/snippets/translation-callout.mdx",sourceDirName:"mobile/snippets",slug:"/mobile/snippets/translation-callout",permalink:"/docs/mobile/snippets/translation-callout",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/snippets/translation-callout.mdx",version:"current",frontMatter:{}},s=[],c={toc:s};function u({components:e,...t}){return(0,r.kt)("wrapper",(0,i.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Existing language strings for an application can be ",(0,r.kt)("a",{parentName:"p",href:"https://docs.vertigisstudio.com/mobileviewer/latest/admin-help/Default.htm#gmv/designer/internationalize-GXM.htm"},"customized for any language in the VertiGIS Studio Mobile s Designer"),". To provide a complete translation in an entirely new locale for VertiGIS Studio Mobile, please ",(0,r.kt)("a",{parentName:"p",href:"https://www.vertigisstudio.com/contact/"},"contact us"),"."))))}u.isMDXComponent=!0},6010:(e,t,n)=>{function i(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:()=>r})}}]);