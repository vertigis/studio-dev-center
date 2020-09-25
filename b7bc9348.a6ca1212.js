(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{186:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return m})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),a=(r(0),r(223)),c=r(224),i=r(230),u=r(229),s={title:"Implement a Custom Form Element",description:"Geocortex Web - Learn how to implement a custom form element"},l={unversionedId:"web/tutorial-implement-custom-form-elements",id:"web/tutorial-implement-custom-form-elements",isDocsHomePage:!1,title:"Implement a Custom Form Element",description:"Geocortex Web - Learn how to implement a custom form element",source:"@site/docs/web/tutorial-implement-custom-form-elements.mdx",slug:"/web/tutorial-implement-custom-form-elements",permalink:"/docs/web/tutorial-implement-custom-form-elements",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/tutorial-implement-custom-form-elements.mdx",version:"current",sidebar:"web",previous:{title:"Implement a Custom Activity",permalink:"/docs/web/tutorial-implement-custom-activity"},next:{title:"SDK Overview",permalink:"/docs/web/sdk-overview"}},m=[],f={rightToc:m};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},f,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Geocortex Web comes with bundled with ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.geocortex.com/products/geocortex-workflow/"}),"Geocortex Workflow"),". Geocortex Workflow includes a ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/form-elements/auto-complete.htm%3FTocPath%3DForms%7CForm%2520Element%2520Reference%7C_____0"}),"large suite of form elements")," to help you ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/web/tutorial-display-custom-form"}),"create custom forms")," to solve your business case. However, if Geocortex Workflow is missing a form element you need, you can implement a custom form element with the Geocortex Workflow SDK."),Object(a.b)(u.a,{mdxType:"UseCaseContainer"},Object(a.b)(i.a,{title:"Geocortex Workflow SDK",description:"Learn more about the Geocortex Workflow SDK",link:Object(c.a)("docs/workflow/overview"),mdxType:"UseCaseCard"}),Object(a.b)(i.a,{title:"Implement a Custom Form Element",description:"Learn how to build a custom workflow form element in the Geocortex Workflow SDK",link:Object(c.a)("docs/workflow/tutorial-web-implement-star-rating-form-element"),mdxType:"UseCaseCard"})))}p.isMDXComponent=!0},223:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=l(r),p=n,d=m["".concat(c,".").concat(p)]||m[p]||f[p]||a;return r?o.a.createElement(d,i(i({ref:t},s),{},{components:r})):o.a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},224:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return c}));var n=r(227),o=r(225);function a(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,c=a.forcePrependBaseUrl,i=void 0!==c&&c,u=a.absolute,s=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(i)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+l:l}(a,r,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},225:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},226:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},227:function(e,t,r){"use strict";var n=r(0),o=r(19);t.a=function(){var e=Object(n.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},228:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(13),c=r(225),i=r(8),u=Object(n.createContext)({collectLink:function(){}}),s=r(224),l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};t.a=function(e){var t,r,m,f=e.isNavLink,p=e.to,d=e.href,b=e.activeClassName,v=e["data-noBrokenLinkCheck"],w=l(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]),O=Object(s.b)().withBaseUrl,y=Object(n.useContext)(u),h=p||d,j=Object(c.a)(h),g=null==h?void 0:h.replace("pathname://",""),k=void 0!==g?function(e){return e.startsWith("/")}(r=g)?O(r):r:void 0,x=Object(n.useRef)(!1),E=f?a.e:a.c,C=i.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!C&&j&&window.docusaurus.prefetch(k),function(){C&&m&&m.disconnect()}}),[k,C,j]);var P=null!==(t=null==k?void 0:k.startsWith("#"))&&void 0!==t&&t,N=!k||!j||P;return k&&j&&!P&&!v&&y.collectLink(k),N?o.a.createElement("a",Object.assign({href:k},!j&&{target:"_blank",rel:"noopener noreferrer"},w)):o.a.createElement(E,Object.assign({},w,{onMouseEnter:function(){x.current||(window.docusaurus.preload(k),x.current=!0)},innerRef:function(e){var t,r;C&&e&&j&&(t=e,r=function(){window.docusaurus.prefetch(k)},(m=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(m.unobserve(t),m.disconnect(),r())}))}))).observe(t))},to:k||""},f&&{activeClassName:b}))}},229:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(0),o=r.n(n),a=r(46),c=r.n(a);function i(e){var t=e.children;return o.a.createElement("div",{className:c.a.root},t)}},230:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(228),o=r(0),a=r.n(o),c=r(226),i=r(47),u=r.n(i);function s(e){var t=e.title,r=e.description,o=e.link;return a.a.createElement("div",{className:Object(c.a)("card-demo",u.a.root)},a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"card__header"},a.a.createElement("h3",null,t)),a.a.createElement("div",{className:"card__body"},a.a.createElement("p",null,r)),a.a.createElement("div",{className:"card__footer"},a.a.createElement(n.a,{className:"button button--secondary button--block",to:o},"Get Started"))))}}}]);