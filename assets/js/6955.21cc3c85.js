(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[6955],{830:(e,t,n)=>{"use strict";n.d(t,{W:()=>a});var r=n(7294);function a(){return r.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},6742:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(7294),a=n(3727),o=n(2263),c=n(3919),l=n(412);const s=(0,r.createContext)({collectLink:()=>{}});var i=n(4996),u=n(8780);const m=function({isNavLink:e,to:t,href:n,activeClassName:m,isActive:d,"data-noBrokenLinkCheck":f,autoAddBaseUrl:h=!0,...v}){var g;const{siteConfig:{trailingSlash:b}}=(0,o.Z)(),{withBaseUrl:p}=(0,i.C)(),E=(0,r.useContext)(s),k=t||n,y=(0,c.Z)(k),Z=null==k?void 0:k.replace("pathname://","");let w=void 0!==Z?(C=Z,h&&(e=>e.startsWith("/"))(C)?p(C):C):void 0;var C;w&&y&&(w=(0,u.applyTrailingSlash)(w,b));const _=(0,r.useRef)(!1),N=e?a.OL:a.rU,S=l.Z.canUseIntersectionObserver;let L;(0,r.useEffect)((()=>(!S&&y&&null!=w&&window.docusaurus.prefetch(w),()=>{S&&L&&L.disconnect()})),[w,S,y]);const I=null!==(g=null==w?void 0:w.startsWith("#"))&&void 0!==g&&g,A=!w||!y||I;return w&&y&&!I&&!f&&E.collectLink(w),A?r.createElement("a",{href:w,...k&&!y&&{target:"_blank",rel:"noopener noreferrer"},...v}):r.createElement(N,{...v,onMouseEnter:()=>{_.current||null==w||(window.docusaurus.preload(w),_.current=!0)},innerRef:e=>{var t,n;S&&e&&y&&(t=e,n=()=>{null!=w&&window.docusaurus.prefetch(w)},L=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(L.unobserve(t),L.disconnect(),n())}))})),L.observe(t))},to:w||"",...e&&{isActive:d,activeClassName:m}})}},3919:(e,t,n)=>{"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:()=>r,Z:()=>a})},4996:(e,t,n)=>{"use strict";n.d(t,{C:()=>o,Z:()=>c});var r=n(2263),a=n(3919);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return t+n;const c=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+c:c}(t,e,n,r)}}function c(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},8617:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(7294);const a="iconExternalLink_3J9K",o=({width:e=13.5,height:t=13.5})=>r.createElement("svg",{width:e,height:t,"aria-hidden":"true",viewBox:"0 0 24 24",className:a},r.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))},4478:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(2122),a=n(7294);const o=({width:e=30,height:t=30,className:n,...o})=>a.createElement("svg",(0,r.Z)({className:n,width:e,height:t,viewBox:"0 0 30 30","aria-hidden":"true"},o),a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))},6955:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Ue});var r=n(7294),a=n(6010),o=n(4973),c=n(9732);const l="skipToContent_1oUP";function s(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}const i=function(){const e=(0,r.useRef)(null);return(0,c.ru)((()=>{e.current&&s(e.current)})),r.createElement("div",{ref:e},r.createElement("a",{href:"#main",className:(0,a.Z)(l,"shadow--md"),onClick:e=>{e.preventDefault();const t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&s(t)}},r.createElement(o.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))};var u=n(944);const m="announcementBar_3WsW",d="announcementBarClose_38nx",f="announcementBarContent_3EUC",h="announcementBarCloseable_3myR";const v=function(){const{isAnnouncementBarClosed:e,closeAnnouncementBar:t}=(0,u.Z)(),{announcementBar:n}=(0,c.LU)();if(!n)return null;const{content:l,backgroundColor:s,textColor:i,isCloseable:v}=n;return!l||v&&e?null:r.createElement("div",{className:m,style:{backgroundColor:s,color:i},role:"banner"},r.createElement("div",{className:(0,a.Z)(f,{[h]:v}),dangerouslySetInnerHTML:{__html:l}}),v?r.createElement("button",{type:"button",className:(0,a.Z)(d,"clean-btn"),onClick:t,"aria-label":(0,o.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.createElement("span",{"aria-hidden":"true"},"\xd7")):null)};var g=n(2122),b=n(3935),p=n(2263),E=n(5977),k=n(4996),y=n(6742),Z=n(9105),w=n(6397);function C(){return r.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},r.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var _=n(830);function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return L(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function I(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var A="Ctrl";var B=r.forwardRef((function(e,t){var n=e.translations,a=void 0===n?{}:n,o=I(e,["translations"]),c=a.buttonText,l=void 0===c?"Search":c,s=a.buttonAriaLabel,i=void 0===s?"Search":s,u=S((0,r.useState)(null),2),m=u[0],d=u[1];return(0,r.useEffect)((function(){"undefined"!=typeof navigator&&d(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":A)}),[]),r.createElement("button",N({type:"button",className:"DocSearch DocSearch-Button","aria-label":i},o,{ref:t}),r.createElement("span",{className:"DocSearch-Button-Container"},r.createElement(_.W,null),r.createElement("span",{className:"DocSearch-Button-Placeholder"},l)),null!==m&&r.createElement("span",{className:"DocSearch-Button-Keys"},r.createElement("span",{className:"DocSearch-Button-Key"},m===A?r.createElement(C,null):m),r.createElement("span",{className:"DocSearch-Button-Key"},"K")))})),D=n(907);function T(){const{locale:e,tags:t}=function(){const{i18n:e}=(0,p.Z)(),t=(0,D._r)(),n=(0,D.WS)(),r=(0,c.Oh)(),a=[c.HX,...Object.keys(t).map((function(e){var a;const o=(null==n||null==(a=n.activePlugin)?void 0:a.pluginId)===e?n.activeVersion:void 0,l=r[e],s=t[e].versions.find((e=>e.isLast)),i=o??l??s;return(0,c.os)(e,i.name)}))];return{locale:e.currentLocale,tags:a}}();return[`language:${e}`,t.map((e=>`docusaurus_tag:${e}`))]}const M="searchBox_1Doo";let P=null;function x({hit:e,children:t}){return r.createElement(y.Z,{to:e.url},t)}function U({state:e,onClose:t}){const{generateSearchPageLink:n}=(0,w.Z)();return r.createElement(y.Z,{to:n(e.query),onClick:t},"See all ",e.context.nbHits," results")}function O({contextualSearch:e,...t}){var a;const{siteMetadata:c}=(0,p.Z)(),l=T(),s=(null==(a=t.searchParameters)?void 0:a.facetFilters)??[],i=e?[...l,...s]:s,u={...t.searchParameters,facetFilters:i},{withBaseUrl:m}=(0,k.C)(),d=(0,E.k6)(),f=(0,r.useRef)(null),h=(0,r.useRef)(null),[v,y]=(0,r.useState)(!1),[w,C]=(0,r.useState)(null),_=(0,r.useCallback)((()=>P?Promise.resolve():Promise.all([n.e(3763).then(n.bind(n,3763)),Promise.all([n.e(532),n.e(6945)]).then(n.bind(n,6945)),Promise.all([n.e(532),n.e(5256)]).then(n.bind(n,5256))]).then((([{DocSearchModal:e}])=>{P=e}))),[]),N=(0,r.useCallback)((()=>{_().then((()=>{f.current=document.createElement("div"),document.body.insertBefore(f.current,document.body.firstChild),y(!0)}))}),[_,y]),S=(0,r.useCallback)((()=>{y(!1),f.current.remove()}),[y]),L=(0,r.useCallback)((e=>{_().then((()=>{y(!0),C(e.key)}))}),[_,y,C]),I=(0,r.useRef)({navigate({itemUrl:e}){d.push(e)}}).current,A=(0,r.useRef)((e=>e.map((e=>{const t=document.createElement("a");return t.href=e.url,{...e,url:m(`${t.pathname}${t.hash}`)}})))).current,D=(0,r.useMemo)((()=>e=>r.createElement(U,(0,g.Z)({},e,{onClose:S}))),[S]),O=(0,r.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",c.docusaurusVersion),e)),[c.docusaurusVersion]);!function(e){var t=e.isOpen,n=e.onOpen,a=e.onClose,o=e.onInput,c=e.searchButtonRef;r.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?a():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),c&&c.current===document.activeElement&&o&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&o(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,a,o,c])}({isOpen:v,onOpen:N,onClose:S,onInput:L,searchButtonRef:h});const R=(0,o.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return r.createElement(r.Fragment,null,r.createElement(Z.Z,null,r.createElement("link",{rel:"preconnect",href:`https://${t.appId}-dsn.algolia.net`,crossOrigin:"anonymous"})),r.createElement("div",{className:M},r.createElement(B,{onTouchStart:_,onFocus:_,onMouseOver:_,onClick:N,ref:h,translations:{buttonText:R,buttonAriaLabel:R}})),v&&(0,b.createPortal)(r.createElement(P,(0,g.Z)({onClose:S,initialScrollY:window.scrollY,initialQuery:w,navigator:I,transformItems:A,hitComponent:x,resultsFooterComponent:D,transformSearchClient:O},t,{searchParameters:u})),f.current))}const R=function(){const{siteConfig:e}=(0,p.Z)();return r.createElement(O,e.themeConfig.algolia)},W={toggle:"toggle_71bT"},$=({icon:e,style:t})=>r.createElement("span",{className:(0,a.Z)(W.toggle,W.dark),style:t},e),j=({icon:e,style:t})=>r.createElement("span",{className:(0,a.Z)(W.toggle,W.light),style:t},e),V=(0,r.memo)((({className:e,icons:t,checked:n,disabled:o,onChange:c})=>{const[l,s]=(0,r.useState)(n),[i,u]=(0,r.useState)(!1),m=(0,r.useRef)(null);return r.createElement("div",{className:(0,a.Z)("react-toggle",e,{"react-toggle--checked":l,"react-toggle--focus":i,"react-toggle--disabled":o})},r.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:()=>{var e;return null==(e=m.current)?void 0:e.click()}},r.createElement("div",{className:"react-toggle-track-check"},t.checked),r.createElement("div",{className:"react-toggle-track-x"},t.unchecked),r.createElement("div",{className:"react-toggle-thumb"})),r.createElement("input",{ref:m,checked:l,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onClick:()=>s(!l),onFocus:()=>u(!0),onBlur:()=>u(!1)}))}));function H(e){const{colorMode:{switchConfig:{darkIcon:t,darkIconStyle:n,lightIcon:a,lightIconStyle:o}}}=(0,c.LU)(),{isClient:l}=(0,p.Z)();return r.createElement(V,(0,g.Z)({disabled:!l,icons:{checked:r.createElement($,{icon:t,style:n}),unchecked:r.createElement(j,{icon:a,style:o})}},e))}var z=n(5350),q=n(7898);const K=e=>{const t=(0,E.TH)(),[n,a]=(0,r.useState)(e),o=(0,r.useRef)(!1),[l,s]=(0,r.useState)(0),i=(0,r.useCallback)((e=>{null!==e&&s(e.getBoundingClientRect().height)}),[]);return(0,q.Z)((({scrollY:t},{scrollY:n})=>{if(!e)return;if(t<l)return void a(!0);if(o.current)return o.current=!1,void a(!1);n&&0===t&&a(!0);const r=document.documentElement.scrollHeight-l,c=window.innerHeight;n&&t>=n?a(!1):t+c<r&&a(!0)}),[l,o]),(0,c.ru)((()=>{e&&a(!0)})),(0,r.useEffect)((()=>{e&&t.hash&&(o.current=!0)}),[t.hash]),{navbarRef:i,isNavbarVisible:n}};var F=n(1839),G=n(3783),Y=n(5525);const Q=({width:e=20,height:t=20,...n})=>r.createElement("svg",(0,g.Z)({viewBox:"0 0 20 20",width:e,height:t,"aria-hidden":"true"},n),r.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}));function X({mobile:e,dropdownItemsBefore:t,dropdownItemsAfter:n,...a}){const{i18n:{currentLocale:o,locales:l,localeConfigs:s}}=(0,p.Z)(),i=(0,c.l5)();function u(e){return s[e].label}const m=[...t,...l.map((e=>{const t=`pathname://${i.createUrl({locale:e,fullyQualified:!1})}`;return{isNavLink:!0,label:u(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===o?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...n],d=e?"Languages":u(o);return r.createElement(Y.Z,(0,g.Z)({},a,{href:"#",mobile:e,label:r.createElement("span",null,r.createElement(Q,{style:{verticalAlign:"text-bottom",marginRight:5}}),r.createElement("span",null,d)),items:m}))}function J({mobile:e}){return e?null:r.createElement(R,null)}const ee={default:()=>Y.Z,localeDropdown:()=>X,search:()=>J,docsVersion:()=>n(7250).Z,docsVersionDropdown:()=>n(9308).Z,doc:()=>n(6400).Z};function te({type:e,...t}){const n=((e="default")=>{const t=ee[e];if(!t)throw new Error(`No NavbarItem component found for type "${e}".`);return t()})(e);return r.createElement(n,t)}var ne=n(5537),re=n(4478);const ae="displayOnlyInLargeViewport_GrZ2",oe="navbarHideable_2qcr",ce="navbarHidden_3yey",le="right";const se=function(){const{navbar:{items:e,hideOnScroll:t,style:n},colorMode:{disableSwitch:o}}=(0,c.LU)(),[l,s]=(0,r.useState)(!1),{isDarkTheme:i,setLightTheme:u,setDarkTheme:m}=(0,z.Z)(),{navbarRef:d,isNavbarVisible:f}=K(t);(0,F.Z)(l);const h=(0,r.useCallback)((()=>{s(!0)}),[s]),v=(0,r.useCallback)((()=>{s(!1)}),[s]),b=(0,r.useCallback)((e=>e.target.checked?m():u()),[u,m]),p=(0,G.Z)();(0,r.useEffect)((()=>{p===G.D.desktop&&s(!1)}),[p]);const E=e.some((e=>"search"===e.type)),{leftItems:k,rightItems:y}=function(e){return{leftItems:e.filter((e=>"left"===(e.position??le))),rightItems:e.filter((e=>"right"===(e.position??le)))}}(e);return r.createElement("nav",{ref:d,className:(0,a.Z)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===n,"navbar--primary":"primary"===n,"navbar-sidebar--show":l,[oe]:t,[ce]:t&&!f})},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},null!=e&&0!==e.length&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:h,onKeyDown:h},r.createElement(re.Z,null)),r.createElement(ne.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),k.map(((e,t)=>r.createElement(te,(0,g.Z)({},e,{key:t}))))),r.createElement("div",{className:"navbar__items navbar__items--right"},y.map(((e,t)=>r.createElement(te,(0,g.Z)({},e,{key:t})))),!o&&r.createElement(H,{className:ae,checked:i,onChange:b}),!E&&r.createElement(R,null))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:v}),r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(ne.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:v}),!o&&l&&r.createElement(H,{checked:i,onChange:b})),r.createElement("div",{className:"navbar-sidebar__items"},r.createElement("div",{className:"menu"},r.createElement("ul",{className:"menu__list"},e.map(((e,t)=>r.createElement(te,(0,g.Z)({mobile:!0},e,{onClick:v,key:t})))))))))},ie="footerLogoLink_MyFc";var ue=n(8465);function me({to:e,href:t,label:n,prependBaseUrlToHref:a,...o}){const c=(0,k.Z)(e),l=(0,k.Z)(t,{forcePrependBaseUrl:!0});return r.createElement(y.Z,(0,g.Z)({className:"footer__link-item"},t?{href:a?l:t}:{to:c},o),n)}const de=({sources:e,alt:t})=>r.createElement(ue.Z,{className:"footer__logo",alt:t,sources:e});const fe=function(){const{footer:e}=(0,c.LU)(),{copyright:t,links:n=[],logo:o={}}=e||{},l={light:(0,k.Z)(o.src),dark:(0,k.Z)(o.srcDark||o.src)};return e?r.createElement("footer",{className:(0,a.Z)("footer",{"footer--dark":"dark"===e.style})},r.createElement("div",{className:"container"},n&&n.length>0&&r.createElement("div",{className:"row footer__links"},n.map(((e,t)=>r.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?r.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.createElement("li",{key:e.href||e.to,className:"footer__item"},r.createElement(me,e))))):null)))),(o||t)&&r.createElement("div",{className:"footer__bottom text--center"},o&&(o.src||o.srcDark)&&r.createElement("div",{className:"margin-bottom--sm"},o.href?r.createElement(y.Z,{href:o.href,className:ie},r.createElement(de,{alt:o.alt,sources:l})):r.createElement(de,{alt:o.alt,sources:l})),t?r.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null};var he=n(412);const ve=(0,c.WA)("theme"),ge="light",be="dark",pe=e=>e===be?be:ge,Ee=e=>{(0,c.WA)("theme").set(pe(e))},ke=()=>{const{colorMode:{defaultMode:e,disableSwitch:t,respectPrefersColorScheme:n}}=(0,c.LU)(),[a,o]=(0,r.useState)((e=>he.Z.canUseDOM?pe(document.documentElement.getAttribute("data-theme")):pe(e))(e)),l=(0,r.useCallback)((()=>{o(ge),Ee(ge)}),[]),s=(0,r.useCallback)((()=>{o(be),Ee(be)}),[]);return(0,r.useEffect)((()=>{document.documentElement.setAttribute("data-theme",pe(a))}),[a]),(0,r.useEffect)((()=>{if(!t)try{const e=ve.get();null!==e&&o(pe(e))}catch(e){console.error(e)}}),[o]),(0,r.useEffect)((()=>{t&&!n||window.matchMedia("(prefers-color-scheme: dark)").addListener((({matches:e})=>{o(e?be:ge)}))}),[]),{isDarkTheme:a===be,setLightTheme:l,setDarkTheme:s}};var ye=n(2924);const Ze=function(e){const{isDarkTheme:t,setLightTheme:n,setDarkTheme:a}=ke();return r.createElement(ye.Z.Provider,{value:{isDarkTheme:t,setLightTheme:n,setDarkTheme:a}},e.children)},we="docusaurus.tab.",Ce=()=>{const[e,t]=(0,r.useState)({}),n=(0,r.useCallback)(((e,t)=>{(0,c.WA)(`docusaurus.tab.${e}`).set(t)}),[]);return(0,r.useEffect)((()=>{try{const e={};for(const t of(0,c._f)())if(t.startsWith(we)){e[t.substring(we.length)]=(0,c.WA)(t).get()}t(e)}catch(e){console.error(e)}}),[]),{tabGroupChoices:e,setTabGroupChoices:(e,r)=>{t((t=>({...t,[e]:r}))),n(e,r)}}},_e=(0,c.WA)("docusaurus.announcement.dismiss"),Ne=(0,c.WA)("docusaurus.announcement.id"),Se=()=>{const{announcementBar:e}=(0,c.LU)(),[t,n]=(0,r.useState)(!0),a=(0,r.useCallback)((()=>{_e.set("true"),n(!0)}),[]);return(0,r.useEffect)((()=>{if(!e)return;const{id:t}=e;let r=Ne.get();"annoucement-bar"===r&&(r="announcement-bar");const a=t!==r;Ne.set(t),a&&_e.set("false"),(a||"false"===_e.get())&&n(!1)}),[]),{isAnnouncementBarClosed:t,closeAnnouncementBar:a}};var Le=n(9443);const Ie=function(e){const{tabGroupChoices:t,setTabGroupChoices:n}=Ce(),{isAnnouncementBarClosed:a,closeAnnouncementBar:o}=Se();return r.createElement(Le.Z.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:n,isAnnouncementBarClosed:a,closeAnnouncementBar:o}},e.children)};function Ae({children:e}){return r.createElement(Ze,null,r.createElement(Ie,null,r.createElement(c.L5,null,e)))}function Be({locale:e,version:t,tag:n}){const a=e;return r.createElement(Z.Z,null,a&&r.createElement("meta",{name:"docsearch:language",content:a}),t&&r.createElement("meta",{name:"docsearch:version",content:t}),n&&r.createElement("meta",{name:"docsearch:docusaurus_tag",content:n}))}var De=n(1217);function Te(){const{i18n:{defaultLocale:e,locales:t}}=(0,p.Z)(),n=(0,c.l5)();return r.createElement(Z.Z,null,t.map((e=>r.createElement("link",{key:e,rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:e}))),r.createElement("link",{rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:"x-default"}))}function Me({permalink:e}){const{siteConfig:{url:t}}=(0,p.Z)(),n=function(){const{siteConfig:{url:e}}=(0,p.Z)(),{pathname:t}=(0,E.TH)();return e+(0,k.Z)(t)}(),a=e?`${t}${e}`:n;return r.createElement(Z.Z,null,r.createElement("meta",{property:"og:url",content:a}),r.createElement("link",{rel:"canonical",href:a}))}function Pe(e){const{siteConfig:{favicon:t,themeConfig:{metadatas:n,image:a}},i18n:{currentLocale:o,localeConfigs:l}}=(0,p.Z)(),{title:s,description:i,image:u,keywords:m,searchMetadatas:d}=e,f=(0,k.Z)(t),h=(0,c.pe)(s),v=o,b=l[o].direction;return r.createElement(r.Fragment,null,r.createElement(Z.Z,null,r.createElement("html",{lang:v,dir:b}),t&&r.createElement("link",{rel:"shortcut icon",href:f}),r.createElement("title",null,h),r.createElement("meta",{property:"og:title",content:h}),u||a&&r.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.createElement(De.Z,{description:i,keywords:m,image:u}),r.createElement(Me,null),r.createElement(Te,null),r.createElement(Be,(0,g.Z)({tag:c.HX,locale:o},d)),r.createElement(Z.Z,null,n.map(((e,t)=>r.createElement("meta",(0,g.Z)({key:`metadata_${t}`},e))))))}const xe=function(){(0,r.useEffect)((()=>{const e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),()=>{document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};const Ue=function(e){const{children:t,noFooter:n,wrapperClassName:o,pageClassName:l}=e;return xe(),r.createElement(Ae,null,r.createElement(Pe,e),r.createElement(i,null),r.createElement(v,null),r.createElement(se,null),r.createElement("div",{className:(0,a.Z)(c.kM.wrapper.main,o,l)},t),!n&&r.createElement(fe,null))}},5537:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(2122),a=n(7294),o=n(6742),c=n(8465),l=n(4996),s=n(2263);const i=e=>{const{siteConfig:{title:t,themeConfig:{navbar:{title:n,logo:i={src:""}}}},isClient:u}=(0,s.Z)(),{imageClassName:m,titleClassName:d,...f}=e,h=(0,l.Z)(i.href||"/"),v={light:(0,l.Z)(i.src),dark:(0,l.Z)(i.srcDark||i.src)};return a.createElement(o.Z,(0,r.Z)({to:h},f,i.target&&{target:i.target}),i.src&&a.createElement(c.Z,{key:u,className:m,sources:v,alt:i.alt||n||t}),null!=n&&a.createElement("b",{className:d},n))}},5525:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var r=n(2122),a=n(7294),o=n(6010),c=n(6742),l=n(4996),s=n(5977),i=n(9732),u=n(8617),m=n(3919);const d="dropdown__link--active";function f({activeBasePath:e,activeBaseRegex:t,to:n,href:o,label:s,activeClassName:i="navbar__link--active",prependBaseUrlToHref:f,...h}){const v=(0,l.Z)(n),g=(0,l.Z)(e),b=(0,l.Z)(o,{forcePrependBaseUrl:!0}),p=s&&o&&!(0,m.Z)(o),E=i===d;return a.createElement(c.Z,(0,r.Z)({},o?{href:f?b:o}:{isNavLink:!0,activeClassName:i,to:v,...e||t?{isActive:(e,n)=>t?new RegExp(t).test(n.pathname):n.pathname.startsWith(g)}:null},h),p?a.createElement("span",null,s,a.createElement(u.Z,E&&{width:12,height:12})):s)}function h({items:e,position:t,className:n,...c}){const l=(0,a.useRef)(null),s=(0,a.useRef)(null),[i,u]=(0,a.useState)(!1);(0,a.useEffect)((()=>{const e=e=>{l.current&&!l.current.contains(e.target)&&u(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[l]);const m=(e,t=!1)=>(0,o.Z)({"navbar__item navbar__link":!t,dropdown__link:t},e);return e?a.createElement("div",{ref:l,className:(0,o.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t,"dropdown--show":i})},a.createElement(f,(0,r.Z)({className:m(n)},c,{onClick:c.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),u(!i))}}),c.children??c.label),a.createElement("ul",{ref:s,className:"dropdown__menu"},e.map((({className:t,...n},o)=>a.createElement("li",{key:o},a.createElement(f,(0,r.Z)({onKeyDown:t=>{if(o===e.length-1&&"Tab"===t.key){t.preventDefault(),u(!1);const e=l.current.nextElementSibling;e&&e.focus()}},activeClassName:d,className:m(t,!0)},n))))))):a.createElement(f,(0,r.Z)({className:m(n)},c))}function v({items:e,className:t,position:n,...c}){var l,u;const m=(0,a.useRef)(null),{pathname:d}=(0,s.TH)(),[h,v]=(0,a.useState)((()=>!(null!=e&&e.some((e=>(0,i.Mg)(e.to,d))))??!0)),g=(e,t=!1)=>(0,o.Z)("menu__link",{"menu__link--sublist":t},e);if(!e)return a.createElement("li",{className:"menu__list-item"},a.createElement(f,(0,r.Z)({className:g(t)},c)));const b=null!=(l=m.current)&&l.scrollHeight?`${null==(u=m.current)?void 0:u.scrollHeight}px`:void 0;return a.createElement("li",{className:(0,o.Z)("menu__list-item",{"menu__list-item--collapsed":h})},a.createElement(f,(0,r.Z)({role:"button",className:g(t,!0)},c,{onClick:e=>{e.preventDefault(),v((e=>!e))}}),c.children??c.label),a.createElement("ul",{className:"menu__list",ref:m,style:{height:h?void 0:b}},e.map((({className:e,...t},n)=>a.createElement("li",{className:"menu__list-item",key:n},a.createElement(f,(0,r.Z)({activeClassName:"menu__link--active",className:g(e)},t,{onClick:c.onClick})))))))}const g=function({mobile:e=!1,...t}){const n=e?v:h;return a.createElement(n,t)}},6400:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(2122),a=n(7294),o=n(5525),c=n(907),l=n(6010),s=n(9732),i=n(8780);function u({docId:e,activeSidebarClassName:t,label:n,docsPluginId:u,...m}){const{activeVersion:d,activeDoc:f}=(0,c.Iw)(u),{preferredVersion:h}=(0,s.J)(u),v=(0,c.yW)(u),g=function(e,t){const n=[].concat(...e.map((e=>e.docs))),r=n.find((e=>e.id===t));if(!r){const r=n.map((e=>e.id)).join("\n- ");throw new Error(`DocNavbarItem: couldn't find any doc with id "${t}" in version${e.length?"s":""} ${e.map((e=>e.name)).join(", ")}".\nAvailable doc ids are:\n- ${r}`)}return r}((0,i.uniq)([d,h,v].filter(Boolean)),e);return a.createElement(o.Z,(0,r.Z)({exact:!0},m,{className:(0,l.Z)(m.className,{[t]:f&&f.sidebar===g.sidebar}),label:n??g.id,to:g.path}))}},9308:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(2122),a=n(7294),o=n(5525),c=n(907),l=n(9732);const s=e=>e.docs.find((t=>t.id===e.mainDocId));function i({mobile:e,docsPluginId:t,dropdownActiveClassDisabled:n,dropdownItemsBefore:i,dropdownItemsAfter:u,...m}){const d=(0,c.Iw)(t),f=(0,c.gB)(t),h=(0,c.yW)(t),{preferredVersion:v,savePreferredVersionName:g}=(0,l.J)(t);const b=function(){const e=f.map((e=>{const t=(null==d?void 0:d.alternateDocVersions[e.name])||s(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===(null==d?void 0:d.activeVersion),onClick:()=>{g(e.name)}}})),t=[...i,...e,...u];if(!(t.length<=1))return t}(),p=d.activeVersion??v??h,E=e&&b?"Versions":p.label,k=e&&b?void 0:s(p).path;return a.createElement(o.Z,(0,r.Z)({},m,{mobile:e,label:E,to:k,items:b,isActive:n?()=>!1:void 0}))}},7250:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(2122),a=n(7294),o=n(5525),c=n(907),l=n(9732);function s({label:e,to:t,docsPluginId:n,...s}){const i=(0,c.zu)(n),{preferredVersion:u}=(0,l.J)(n),m=(0,c.yW)(n),d=i??u??m,f=e??d.label,h=t??(e=>e.docs.find((t=>t.id===e.mainDocId)))(d).path;return a.createElement(o.Z,(0,r.Z)({},s,{label:f,to:h}))}},1217:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(7294),a=n(9105),o=n(9732),c=n(4996);function l({title:e,description:t,keywords:n,image:l}){const{image:s}=(0,o.LU)(),i=(0,o.pe)(e),u=(0,c.Z)(l||s,{absolute:!0});return r.createElement(a.Z,null,e&&r.createElement("title",null,i),e&&r.createElement("meta",{property:"og:title",content:i}),t&&r.createElement("meta",{name:"description",content:t}),t&&r.createElement("meta",{property:"og:description",content:t}),n&&r.createElement("meta",{name:"keywords",content:Array.isArray(n)?n.join(","):n}),u&&r.createElement("meta",{property:"og:image",content:u}),u&&r.createElement("meta",{name:"twitter:image",content:u}))}},2924:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n(7294).createContext(void 0)},8465:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(2122),a=n(7294),o=n(6010),c=n(2263),l=n(5350);const s={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},i=e=>{const{isClient:t}=(0,c.Z)(),{isDarkTheme:n}=(0,l.Z)(),{sources:i,className:u,alt:m="",...d}=e,f=t?n?["dark"]:["light"]:["light","dark"];return a.createElement(a.Fragment,null,f.map((e=>a.createElement("img",(0,r.Z)({key:e,src:i[e],alt:m,className:(0,o.Z)(s.themedImage,s[`themedImage--${e}`],u)},d)))))}},9443:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(7294).createContext)(void 0)},1839:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(7294);const a=function(e=!0){(0,r.useEffect)((()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"})),[e])}},7898:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(7294),a=n(412);const o=()=>({scrollX:a.Z.canUseDOM?window.pageXOffset:0,scrollY:a.Z.canUseDOM?window.pageYOffset:0}),c=(e,t=[])=>{const n=(0,r.useRef)(o()),a=()=>{const t=o();e&&e(t,n.current),n.current=t};(0,r.useEffect)((()=>{const e={passive:!0};return a(),window.addEventListener("scroll",a,e),()=>window.removeEventListener("scroll",a,e)}),t)}},5350:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(7294),a=n(2924);const o=function(){const e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},944:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(7294),a=n(9443);const o=function(){const e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},3783:(e,t,n)=>{"use strict";n.d(t,{D:()=>o,Z:()=>c});var r=n(7294),a=n(412);const o={desktop:"desktop",mobile:"mobile"};const c=function(){const e=a.Z.canUseDOM;function t(){if(e)return window.innerWidth>996?o.desktop:o.mobile}const[n,c]=(0,r.useState)(t);return(0,r.useEffect)((()=>{if(e)return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n);function n(){c(t())}}),[]),n}},6397:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(5977),a=n(412),o=n(2263);const c=function(){const e=(0,r.k6)(),t=(0,r.TH)(),{siteConfig:{baseUrl:n}={}}=(0,o.Z)();return{searchValue:a.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:n=>{const r=new URLSearchParams(t.search);n?r.set("q",n):r.delete("q"),e.replace({search:r.toString()})},generateSearchPageLink:e=>`${n}search?q=${encodeURIComponent(e)}`}}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),r="/"===n?"/":t?(a=n).endsWith("/")?a:`${a}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(n);var a;return e.replace(n,r)}},8780:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var o=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},9964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}}}]);