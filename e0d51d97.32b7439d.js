(window.webpackJsonp=window.webpackJsonp||[]).push([[134,110],{203:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return d})),r.d(t,"rightToc",(function(){return f})),r.d(t,"default",(function(){return m}));var n=r(2),o=r(6),i=(r(0),r(222)),a=r(223),c=r(228),s=r(229),l=r(66),u={title:"Geocortex Workflow .NET SDK Overview",sidebar_label:"Overview",description:"Geocortex Workflow - Overview of the .NET workflow SDK"},d={unversionedId:"workflow/sdk-net-overview",id:"workflow/sdk-net-overview",isDocsHomePage:!1,title:"Geocortex Workflow .NET SDK Overview",description:"Geocortex Workflow - Overview of the .NET workflow SDK",source:"@site/docs/workflow/sdk-net-overview.mdx",permalink:"/docs/workflow/sdk-net-overview",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/sdk-net-overview.mdx",sidebar_label:"Overview",sidebar:"workflow",previous:{title:"Implement a Star Rating Custom Form Element",permalink:"/docs/workflow/tutorial-web-implement-star-rating-form-element"},next:{title:"Registering .NET Activities with Geocortex Workflow Designer",permalink:"/docs/workflow/sdk-net-register-activities"}},f=[{value:"Get Started",id:"get-started",children:[]}],p={rightToc:f};function m(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Geocortex Workflow has a .NET runtime for executing workflows in a .NET environment. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.geocortex.com/mobileviewer/"}),"Geocortex Mobile")," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/server-workflows.htm"}),"Geocortex Workflow Server")," both run workflows in a .NET environment."),Object(i.b)("p",null,"Workflows for Geocortex Mobile and Geocortex Workflow Server are still authored in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://apps.geocortex.com/workflow/designer/"}),"Geocortex Workflow Designer"),". Custom .NET workflow activities can be executed by name with the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activities/run-activity.htm"}),"Run Activity")," activity. In addition, the Geocortex Workflow Typescript SDK can be used to create ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/workflow/sdk-net-register-activities"}),"activity stubs")," that give a user friendly interface for custom .NET workflow activities."),Object(i.b)(l.default,{mdxType:"SdkLimitationsWarning"}),Object(i.b)("h2",{id:"get-started"},"Get Started"),Object(i.b)(c.a,{mdxType:"UseCaseContainer"},Object(i.b)(s.a,{title:"Create an Activity for Geocortex Mobile",description:"Create a custom activity in Geocortex Mobile",link:Object(a.a)("docs/workflow/sdk-mobile-create-activity"),mdxType:"UseCaseCard"}),Object(i.b)(s.a,{title:"Create an Activity for Geocortex Workflow Server",description:"Create a custom activity in Geocortex Workflow Server",link:Object(a.a)("docs/workflow/sdk-server-create-activity"),mdxType:"UseCaseCard"})))}m.isMDXComponent=!0},222:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),p=n,m=d["".concat(a,".").concat(p)]||d[p]||f[p]||i;return r?o.a.createElement(m,c(c({ref:t},l),{},{components:r})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},223:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return a}));var n=r(226),o=r(224);function i(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,a=i.forcePrependBaseUrl,c=void 0!==a&&a,s=i.absolute,l=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(c)return t+r;var u=!r.startsWith(t)?t+r.replace(/^\//,""):r;return l?e+u:u}(i,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},224:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},225:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},226:function(e,t,r){"use strict";var n=r(0),o=r(18);t.a=function(){var e=Object(n.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},227:function(e,t,r){"use strict";var n=r(0),o=r.n(n),i=r(13),a=r(224),c=r(8),s=Object(n.createContext)({collectLink:function(){}}),l=r(223),u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};t.a=function(e){var t,r,d=e.isNavLink,f=e.to,p=e.href,m=e.activeClassName,v=e["data-noBrokenLinkCheck"],b=u(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]),w=Object(l.b)().withBaseUrl,h=Object(n.useContext)(s),O=f||p,y=void 0!==O?w(O):void 0,k=Object(a.a)(y),g=Object(n.useRef)(!1),j=d?i.e:i.c,x=c.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!x&&k&&window.docusaurus.prefetch(y),function(){x&&r&&r.disconnect()}}),[y,x,k]);var N=null!==(t=null==y?void 0:y.startsWith("#"))&&void 0!==t&&t,E=!y||!k||N;return y&&k&&!N&&!v&&h.collectLink(y),E?o.a.createElement("a",Object.assign({href:y},!k&&{target:"_blank",rel:"noopener noreferrer"},b)):o.a.createElement(j,Object.assign({},b,{onMouseEnter:function(){g.current||(window.docusaurus.preload(y),g.current=!0)},innerRef:function(e){var t,n;x&&e&&k&&(t=e,n=function(){window.docusaurus.prefetch(y)},(r=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t),r.disconnect(),n())}))}))).observe(t))},to:y},d&&{activeClassName:m}))}},228:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(0),o=r.n(n),i=r(46),a=r.n(i);function c(e){var t=e.children;return o.a.createElement("div",{className:a.a.root},t)}},229:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(227),o=r(0),i=r.n(o),a=r(225),c=r(47),s=r.n(c);function l(e){var t=e.title,r=e.description,o=e.link;return i.a.createElement("div",{className:Object(a.a)("card-demo",s.a.root)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h3",null,t)),i.a.createElement("div",{className:"card__body"},i.a.createElement("p",null,r)),i.a.createElement("div",{className:"card__footer"},i.a.createElement(n.a,{className:"button button--secondary button--block",to:o},"Get Started"))))}},66:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(6),i=(r(0),r(222)),a={},c={unversionedId:"workflow/snippets/sdk-net-limitations-warning",id:"workflow/snippets/sdk-net-limitations-warning",isDocsHomePage:!1,title:"sdk-net-limitations-warning",description:"We recommend that you only implement the IActivityHandler interface examples provided in the Developer Center. These examples have been verified and are provided to help you customize your Geocortex product to suit your needs. You should not reference other classes and functions from the various Geocortex Workflow assemblies. Doing so could risk breaking functionality and/or unexpected results as a result of future changes.",source:"@site/docs/workflow/snippets/sdk-net-limitations-warning.mdx",permalink:"/docs/workflow/snippets/sdk-net-limitations-warning",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/snippets/sdk-net-limitations-warning.mdx"},s=[],l={rightToc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"We recommend that you only implement the ",Object(i.b)("code",null,"IActivityHandler")," interface examples provided in the Developer Center. These examples have been verified and are provided to help you customize your Geocortex product to suit your needs. You should not reference other classes and functions from the various Geocortex Workflow assemblies. Doing so could risk breaking functionality and/or unexpected results as a result of future changes."))))}u.isMDXComponent=!0}}]);