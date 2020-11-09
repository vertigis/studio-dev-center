(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{192:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return f}));var n=r(2),o=(r(0),r(231)),c=r(232),a=r(238),i=r(237);const s={title:"Implement a Custom Form Element",description:"Geocortex Web - Learn how to implement a custom form element"},l={unversionedId:"web/tutorial-implement-custom-form-elements",id:"web/tutorial-implement-custom-form-elements",isDocsHomePage:!1,title:"Implement a Custom Form Element",description:"Geocortex Web - Learn how to implement a custom form element",source:"@site/docs/web/tutorial-implement-custom-form-elements.mdx",slug:"/web/tutorial-implement-custom-form-elements",permalink:"/docs/web/tutorial-implement-custom-form-elements",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/tutorial-implement-custom-form-elements.mdx",version:"current",sidebar:"web",previous:{title:"Implement a Custom Activity",permalink:"/docs/web/tutorial-implement-custom-activity"},next:{title:"SDK Overview",permalink:"/docs/web/sdk-overview"}},u=[],m={rightToc:u};function f({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},m,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Geocortex Web comes with bundled with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.geocortex.com/products/geocortex-workflow/"}),"Geocortex Workflow"),". Geocortex Workflow includes a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/form-elements/auto-complete.htm%3FTocPath%3DForms%7CForm%2520Element%2520Reference%7C_____0"}),"large suite of form elements")," to help you ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/web/tutorial-display-custom-form"}),"create custom forms")," to solve your business case. However, if Geocortex Workflow is missing a form element you need, you can implement a custom form element with the Geocortex Workflow SDK."),Object(o.b)(i.a,{mdxType:"UseCaseContainer"},Object(o.b)(a.a,{title:"Geocortex Workflow SDK",description:"Learn more about the Geocortex Workflow SDK",link:Object(c.a)("docs/workflow/overview"),mdxType:"UseCaseCard"}),Object(o.b)(a.a,{title:"Implement a Custom Form Element",description:"Learn how to build a custom workflow form element in the Geocortex Workflow SDK",link:Object(c.a)("docs/workflow/tutorial-web-implement-star-rating-form-element"),mdxType:"UseCaseCard"})))}f.isMDXComponent=!0},231:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(r),p=n,d=m["".concat(a,".").concat(p)]||m[p]||f[p]||c;return r?o.a.createElement(d,i(i({ref:t},l),{},{components:r})):o.a.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var l=2;l<c;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},232:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return a}));var n=r(235),o=r(233);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.a)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:c=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(n)return t+r;const a=r.startsWith(t)?r:t+r.replace(/^\//,"");return c?e+a:a}(t,e,r,n)}}function a(e,t={}){const{withBaseUrl:r}=c();return r(e,t)}},233:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},234:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},235:function(e,t,r){"use strict";var n=r(0),o=r(19);t.a=function(){const e=Object(n.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},236:function(e,t,r){"use strict";var n=r(0),o=r.n(n),c=r(13),a=r(233),i=r(8);const s=Object(n.createContext)({collectLink:()=>{}});var l=r(232),u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};t.a=function(e){var t,{isNavLink:r,to:m,href:f,activeClassName:p,"data-noBrokenLinkCheck":d}=e,b=u(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]);const{withBaseUrl:w}=Object(l.b)(),v=Object(n.useContext)(s),O=m||f,y=Object(a.a)(O),h=null==O?void 0:O.replace("pathname://",""),j=void 0!==h?(e=>e.startsWith("/"))(g=h)?w(g):g:void 0;var g;const k=Object(n.useRef)(!1),x=r?c.e:c.c,E=i.a.canUseIntersectionObserver;let C;Object(n.useEffect)(()=>(!E&&y&&window.docusaurus.prefetch(j),()=>{E&&C&&C.disconnect()}),[j,E,y]);const P=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,N=!j||!y||P;return j&&y&&!P&&!d&&v.collectLink(j),N?o.a.createElement("a",Object.assign({href:j},!y&&{target:"_blank",rel:"noopener noreferrer"},b)):o.a.createElement(x,Object.assign({},b,{onMouseEnter:()=>{k.current||(window.docusaurus.preload(j),k.current=!0)},innerRef:e=>{var t,r;E&&e&&y&&(t=e,r=()=>{window.docusaurus.prefetch(j)},C=new window.IntersectionObserver(e=>{e.forEach(e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(C.unobserve(t),C.disconnect(),r())})}),C.observe(t))},to:j||""},r&&{activeClassName:p}))}},237:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(0),o=r.n(n),c=r(46),a=r.n(c);function i({children:e}){return o.a.createElement("div",{className:a.a.root},e)}},238:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(236),o=r(0),c=r.n(o),a=r(234),i=r(47),s=r.n(i);function l({title:e,description:t,link:r}){return c.a.createElement("div",{className:Object(a.a)("card-demo",s.a.root)},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card__header"},c.a.createElement("h3",null,e)),c.a.createElement("div",{className:"card__body"},c.a.createElement("p",null,t)),c.a.createElement("div",{className:"card__footer"},c.a.createElement(n.a,{className:"button button--secondary button--block",to:r},"Get Started"))))}}}]);