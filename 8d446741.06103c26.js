(window.webpackJsonp=window.webpackJsonp||[]).push([[87,75],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return d}));var r=n(2),i=n(6),a=(n(0),n(223)),o=n(224),c=n(50),s=n(229),l=n(230),p={title:"Build a Custom Command",description:"Geocortex Mobile - Learn how to implement a custom command"},u={unversionedId:"mobile/tutorial-implement-command-operation",id:"mobile/tutorial-implement-command-operation",isDocsHomePage:!1,title:"Build a Custom Command",description:"Geocortex Mobile - Learn how to implement a custom command",source:"@site/docs/mobile/tutorial-implement-command-operation.mdx",slug:"/mobile/tutorial-implement-command-operation",permalink:"/docs/mobile/tutorial-implement-command-operation",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/tutorial-implement-command-operation.mdx",version:"current",sidebar:"mobile",previous:{title:"Memory Management",permalink:"/docs/mobile/sdk-memory-leaks"},next:{title:"Build a Custom Component with UI",permalink:"/docs/mobile/tutorial-implement-component-with-ui"}},m=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Create the Backing Service",id:"create-the-backing-service",children:[]},{value:"Implementing the Operation",id:"implementing-the-operation",children:[{value:"Define the Operation",id:"define-the-operation",children:[]},{value:"Register an Implementation for the Operation",id:"register-an-implementation-for-the-operation",children:[]}]},{value:"Relevant SDK Samples",id:"relevant-sdk-samples",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],b={rightToc:m};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Geocortex Mobile has many built-in ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/mobile/configuration-commands-operations"}),"Commands and Operations")," which can be chained together to build custom behaviors. If these Commands and Operations are not enough to accomplish your goal, you can use ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/"}),"Geocortex Workflow")," to take custom behavior even further without writing custom code. If Workflow is still not enough to accomplish your needs, then it might be time to implement a Custom Command / Operation."))),Object(a.b)("p",null,"This article will walk you through implementing a custom command in Geocortex Mobile that displays an alert."),Object(a.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(a.b)(c.default,{mdxType:"PrereqsSnippet"}),Object(a.b)("h2",{id:"create-the-backing-service"},"Create the Backing Service"),Object(a.b)("p",null,"It's convention that commands and operations in Geocortex Mobile are registered and implemented by a service or component, so the first thing we will do is create a service."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Create a new file ",Object(a.b)("inlineCode",{parentName:"li"},"Services/AlertService.cs")," under the platform agnostic project.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"In the file, add a new service class ",Object(a.b)("inlineCode",{parentName:"li"},"AlertService")," and ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/mobile/sdk-dependency-injection"}),"register it with ",Object(a.b)("strong",{parentName:"a"},"Autofac")),".")))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs",metastring:'title="App1/App1/services/AlertService.cs"',title:'"App1/App1/services/AlertService.cs"'}),"using App1.Services.AlertService;\nusing VertiGIS.Mobile.Composition;\nusing VertiGIS.Mobile.Composition.Services;\n\n// highlight-next-line\n[assembly: Service(typeof(AlertService), PropertiesAutowired = true)]\nnamespace App1.Services.AlertService\n{\n    // highlight-next-line\n    class AlertService : ServiceBase\n    {\n    }\n}\n")),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"Create a class ",Object(a.b)("inlineCode",{parentName:"li"},"Services/AlertOperations")," under the platform agnostic project.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"In the file, add a new class ",Object(a.b)("inlineCode",{parentName:"li"},"AlertOperations")," and register it with Autofac.")))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs",metastring:'title="App1/App1/services/AlertOperations.cs"',title:'"App1/App1/services/AlertOperations.cs"'}),"using App1.Services.AlertOperations;\nusing VertiGIS.Mobile.Composition;\nusing VertiGIS.Mobile.Composition.Messaging;\nusing VertiGIS.Mobile.Infrastructure.Messaging;\n\n// highlight-next-line\n[assembly: Export(typeof(AlertOperations), SingleInstance = true)]\nnamespace App1.Services.AlertOperations\n{\n    // highlight-next-line\n    class AlertOperations : OperationsBase\n    {\n        public AlertOperations(IOperationRegistry operationRegistry)\n            : base(operationRegistry)\n        {\n        }\n    }\n}\n")),Object(a.b)("h2",{id:"implementing-the-operation"},"Implementing the Operation"),Object(a.b)("p",null,"Creating a new operation in Geocortex Mobile consists of two pieces:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Defining the operation's name, inputs, and outputs in the ",Object(a.b)("inlineCode",{parentName:"li"},"OperationsBase")," class"),Object(a.b)("li",{parentName:"ul"},"Registering an execution implementation in the service.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"This function will be the actual code that executes when the operation is called.")))),Object(a.b)("h3",{id:"define-the-operation"},"Define the Operation"),Object(a.b)("p",null,"For this example, let's define a operation with some input and no output."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),'class AlertOperations : OperationsBase\n{\n    // highlight-next-line\n    public IVoidOperation<string> DisplayCustomAlert => GetVoidOperation<string>("custom-alert.display");\n\n    public AlertOperations(IOperationRegistry operationRegistry)\n        : base(operationRegistry)\n    {\n    }\n}\n')),Object(a.b)("h3",{id:"register-an-implementation-for-the-operation"},"Register an Implementation for the Operation"),Object(a.b)("p",null,"Next, we need to register an implementation for our operation in the ",Object(a.b)("inlineCode",{parentName:"p"},"AlertService"),"."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Add a public constructor that takes an ",Object(a.b)("inlineCode",{parentName:"li"},"AlertOperations")," to the Service.")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),"    [assembly: Service(typeof(Service), PropertiesAutowired = true)]\n    class AlertService : ServiceBase\n    {\n        // highlight-next-line\n        public AlertService(AlertOperations alertOperations)\n        {\n        }\n    }\n")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Create an implementation for displaying a custom alert and register it as an execution for the operation.")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),'[assembly: Service(typeof(AlertService))]\nnamespace App1.Services\n{\n    class AlertService : ServiceBase\n    {\n        public AlertService(AlertOperations alertOperations)\n        {\n            // highlight-start\n            alertOperations.DisplayCustomAlert.RegisterExecute(\n                (args) =>\n                {\n                    Application.Current.MainPage.DisplayAlert("Custom Alert", args, "OK");\n                    return Task.FromResult((object)null);\n                }, this);\n            // highlight-end\n        }\n    }\n}\n')),Object(a.b)("p",null,"Congratulations! You just created your first custom operation. You can easily test your new operation by setting it to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/mobile/tutorial-change-default-behavior"}),"run it on map initialization"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "$type": "map-extension",\n            "id": "map1",\n            "onClick": [ "tasks.identify", "highlights.pulse", "results.display" ],\n            "onInitialized": [\n                {\n                    "name": "custom-alert.display",\n                    "arguments": "This is a custom operation!"\n                }\n            ]\n        },\n        ...\n    ]\n}\n')),Object(a.b)("h2",{id:"relevant-sdk-samples"},"Relevant SDK Samples"),Object(a.b)("p",null,"Check out the relevant Geocortex Mobile SDK Samples:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Custom/Operation"}),"Custom Operation"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Custom/Service"}),"Custom Service")))),Object(a.b)("h2",{id:"next-steps"},"Next Steps"),Object(a.b)("p",null,"Commands and operations are the logical building blocks of executing custom behavior in Geocortex Mobile, but sometimes you need to take things a bit further. Creating custom components can allow you to design completely custom UI for Geocortex Mobile, and creating background services can enable the execution of tasks on an arbitrary schedule."),Object(a.b)(s.a,{mdxType:"UseCaseContainer"},Object(a.b)(l.a,{title:"Commands and Operations",description:"Learn more about commands and operations",link:Object(o.a)("docs/mobile/sdk-commands-operations"),mdxType:"UseCaseCard"}),Object(a.b)(l.a,{title:"Implement a Custom Component with UI",description:"Learn how to implement a custom component using the Geocortex Mobile SDK",link:Object(o.a)("docs/mobile/tutorial-implement-component-with-ui"),mdxType:"UseCaseCard"}),Object(a.b)(l.a,{title:"Implement a Custom Service",description:"Learn how to implement a custom service using the Geocortex Mobile SDK",link:Object(o.a)("docs/mobile/sdk-services-create"),mdxType:"UseCaseCard"})))}d.isMDXComponent=!0},223:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,d=u["".concat(o,".").concat(b)]||u[b]||m[b]||a;return n?i.a.createElement(d,c(c({ref:t},l),{},{components:n})):i.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},224:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(227),i=n(225);function a(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,c=void 0!==o&&o,s=a.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+p:p}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},225:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))},226:function(e,t,n){"use strict";function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}},227:function(e,t,n){"use strict";var r=n(0),i=n(19);t.a=function(){var e=Object(r.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},228:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(13),o=n(225),c=n(8),s=Object(r.createContext)({collectLink:function(){}}),l=n(224),p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};t.a=function(e){var t,n,u,m=e.isNavLink,b=e.to,d=e.href,h=e.activeClassName,O=e["data-noBrokenLinkCheck"],f=p(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]),g=Object(l.b)().withBaseUrl,v=Object(r.useContext)(s),j=b||d,y=Object(o.a)(j),w=null==j?void 0:j.replace("pathname://",""),C=void 0!==w?function(e){return e.startsWith("/")}(n=w)?g(n):n:void 0,N=Object(r.useRef)(!1),x=m?a.e:a.c,S=c.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!S&&y&&window.docusaurus.prefetch(C),function(){S&&u&&u.disconnect()}}),[C,S,y]);var k=null!==(t=null==C?void 0:C.startsWith("#"))&&void 0!==t&&t,A=!C||!y||k;return C&&y&&!k&&!O&&v.collectLink(C),A?i.a.createElement("a",Object.assign({href:C},!y&&{target:"_blank",rel:"noopener noreferrer"},f)):i.a.createElement(x,Object.assign({},f,{onMouseEnter:function(){N.current||(window.docusaurus.preload(C),N.current=!0)},innerRef:function(e){var t,n;S&&e&&y&&(t=e,n=function(){window.docusaurus.prefetch(C)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),n())}))}))).observe(t))},to:C||""},m&&{activeClassName:h}))}},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),i=n.n(r),a=n(46),o=n.n(a);function c(e){var t=e.children;return i.a.createElement("div",{className:o.a.root},t)}},230:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(228),i=n(0),a=n.n(i),o=n(226),c=n(47),s=n.n(c);function l(e){var t=e.title,n=e.description,i=e.link;return a.a.createElement("div",{className:Object(o.a)("card-demo",s.a.root)},a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"card__header"},a.a.createElement("h3",null,t)),a.a.createElement("div",{className:"card__body"},a.a.createElement("p",null,n)),a.a.createElement("div",{className:"card__footer"},a.a.createElement(r.a,{className:"button button--secondary button--block",to:i},"Get Started"))))}},50:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),i=n(6),a=(n(0),n(223)),o={},c={unversionedId:"mobile/snippets/quickstart-prereqs",id:"mobile/snippets/quickstart-prereqs",isDocsHomePage:!1,title:"quickstart-prereqs",description:"Check out and setup the Geocortex Mobile SDK Quickstart project.",source:"@site/docs/mobile/snippets/quickstart-prereqs.mdx",slug:"/mobile/snippets/quickstart-prereqs",permalink:"/docs/mobile/snippets/quickstart-prereqs",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/quickstart-prereqs.mdx",version:"current"},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Check out and setup the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/mobile/sdk-overview"}),"Geocortex Mobile SDK Quickstart project"),"."))}p.isMDXComponent=!0}}]);