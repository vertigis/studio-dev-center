(window.webpackJsonp=window.webpackJsonp||[]).push([[6,48],{223:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return b}));var o=r(0),n=r.n(o);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,b=m["".concat(a,".").concat(f)]||m[f]||p[f]||i;return r?n.a.createElement(b,c(c({ref:t},s),{},{components:r})):n.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},224:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return a}));var o=r(227),n=r(225);function i(){var e=Object(o.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,o){var i=void 0===o?{}:o,a=i.forcePrependBaseUrl,c=void 0!==a&&a,l=i.absolute,s=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if(Object(n.b)(r))return r;if(c)return t+r;var u=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+u:u}(i,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},225:function(e,t,r){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!o(e)}r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return n}))},226:function(e,t,r){"use strict";function o(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=o(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=o(e))&&(n&&(n+=" "),n+=t);return n}},227:function(e,t,r){"use strict";var o=r(0),n=r(19);t.a=function(){var e=Object(o.useContext)(n.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},228:function(e,t,r){"use strict";var o=r(0),n=r.n(o),i=r(13),a=r(225),c=r(8),l=Object(o.createContext)({collectLink:function(){}}),s=r(224),u=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r};t.a=function(e){var t,r,m,p=e.isNavLink,f=e.to,b=e.href,d=e.activeClassName,v=e["data-noBrokenLinkCheck"],w=u(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]),O=Object(s.b)().withBaseUrl,y=Object(o.useContext)(l),h=f||b,j=Object(a.a)(h),g=null==h?void 0:h.replace("pathname://",""),k=void 0!==g?function(e){return e.startsWith("/")}(r=g)?O(r):r:void 0,x=Object(o.useRef)(!1),C=p?i.e:i.c,S=c.a.canUseIntersectionObserver;Object(o.useEffect)((function(){return!S&&j&&window.docusaurus.prefetch(k),function(){S&&m&&m.disconnect()}}),[k,S,j]);var E=null!==(t=null==k?void 0:k.startsWith("#"))&&void 0!==t&&t,N=!k||!j||E;return k&&j&&!E&&!v&&y.collectLink(k),N?n.a.createElement("a",Object.assign({href:k},!j&&{target:"_blank",rel:"noopener noreferrer"},w)):n.a.createElement(C,Object.assign({},w,{onMouseEnter:function(){x.current||(window.docusaurus.preload(k),x.current=!0)},innerRef:function(e){var t,r;S&&e&&j&&(t=e,r=function(){window.docusaurus.prefetch(k)},(m=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(m.unobserve(t),m.disconnect(),r())}))}))).observe(t))},to:k||""},p&&{activeClassName:d}))}},229:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var o=r(0),n=r.n(o),i=r(46),a=r.n(i);function c(e){var t=e.children;return n.a.createElement("div",{className:a.a.root},t)}},230:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var o=r(228),n=r(0),i=r.n(n),a=r(226),c=r(47),l=r.n(c);function s(e){var t=e.title,r=e.description,n=e.link;return i.a.createElement("div",{className:Object(a.a)("card-demo",l.a.root)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h3",null,t)),i.a.createElement("div",{className:"card__body"},i.a.createElement("p",null,r)),i.a.createElement("div",{className:"card__footer"},i.a.createElement(o.a,{className:"button button--secondary button--block",to:n},"Get Started"))))}},54:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var o=r(2),n=r(6),i=(r(0),r(223)),a={},c={unversionedId:"mobile/snippets/relevant-workflow-samples",id:"mobile/snippets/relevant-workflow-samples",isDocsHomePage:!1,title:"relevant-workflow-samples",description:"The Geocortex Mobile SDK Samples project has a variety of workflow samples:",source:"@site/docs/mobile/snippets/relevant-workflow-samples.mdx",slug:"/mobile/snippets/relevant-workflow-samples",permalink:"/docs/mobile/snippets/relevant-workflow-samples",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/relevant-workflow-samples.mdx",version:"current"},l=[],s={rightToc:l};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Geocortex Mobile SDK Samples project has a variety of workflow samples:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Workflow/RunWorkflow"}),"Run a Workflow"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Workflow/CustomActivity"}),"Build a Custom Activity"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Workflow/CustomFormComponent"}),"Build a Custom Form Element")))))}u.isMDXComponent=!0},84:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return m})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return b}));var o=r(2),n=r(6),i=(r(0),r(223)),a=r(224),c=r(230),l=r(229),s=r(54),u={title:"Implement a Custom Activity",description:"Geocortex Mobile - Learn how to implement a custom workflow activity"},m={unversionedId:"mobile/tutorial-implement-custom-activity",id:"mobile/tutorial-implement-custom-activity",isDocsHomePage:!1,title:"Implement a Custom Activity",description:"Geocortex Mobile - Learn how to implement a custom workflow activity",source:"@site/docs/mobile/tutorial-implement-custom-activity.mdx",slug:"/mobile/tutorial-implement-custom-activity",permalink:"/docs/mobile/tutorial-implement-custom-activity",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/tutorial-implement-custom-activity.mdx",version:"current",sidebar:"mobile",previous:{title:"Implement a Custom Form Element",permalink:"/docs/mobile/tutorial-implement-custom-form-elements"},next:{title:"SDK Overview",permalink:"/docs/mobile/sdk-overview"}},p=[{value:"Relevant SDK Samples",id:"relevant-sdk-samples",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],f={rightToc:p};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},f,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Geocortex Mobile comes with bundled with ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.geocortex.com/products/geocortex-workflow/"}),"Geocortex Workflow"),". Geocortex Workflow includes a ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activity-reference.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____0"}),"large suite of activities")," to help you solve your business case. However, if Geocortex Workflow is missing functionality you need, you can implement a custom activity with the Geocortex Workflow SDK."),Object(i.b)("h2",{id:"relevant-sdk-samples"},"Relevant SDK Samples"),Object(i.b)(s.default,{mdxType:"RelevantWorkflowSamples"}),Object(i.b)("h2",{id:"next-steps"},"Next Steps"),Object(i.b)(l.a,{mdxType:"UseCaseContainer"},Object(i.b)(c.a,{title:"Geocortex Workflow SDK",description:"Learn more about the Geocortex Workflow SDK",link:Object(a.a)("docs/workflow/overview"),mdxType:"UseCaseCard"}),Object(i.b)(c.a,{title:"Implement a Custom Activity",description:"Learn how to build a custom workflow activity",link:Object(a.a)("docs/workflow/sdk-mobile-create-activity"),mdxType:"UseCaseCard"})))}b.isMDXComponent=!0}}]);