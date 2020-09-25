(window.webpackJsonp=window.webpackJsonp||[]).push([[107,53],{180:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return d}));var o=r(2),n=r(6),i=(r(0),r(223)),a=r(63),c=r(224),s={title:"Create an Activity",description:"Geocortex Workflow - Create a workflow activity for web applications"},l={unversionedId:"workflow/sdk-server-create-activity",id:"workflow/sdk-server-create-activity",isDocsHomePage:!1,title:"Create an Activity",description:"Geocortex Workflow - Create a workflow activity for web applications",source:"@site/docs/workflow/sdk-server-create-activity.mdx",slug:"/workflow/sdk-server-create-activity",permalink:"/docs/workflow/sdk-server-create-activity",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/sdk-server-create-activity.mdx",version:"current",sidebar:"workflow",previous:{title:"Using the .NET Workflow SDK with Geocortex Workflow Server",permalink:"/docs/workflow/sdk-server-overview"},next:{title:"Reference a Third Party Library in Geocortex Workflow Server",permalink:"/docs/workflow/sdk-server-reference-third-party-library"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Create the Activity",id:"create-the-activity",children:[]},{value:"Register the Activity with an Assembly Attribute",id:"register-the-activity-with-an-assembly-attribute",children:[]},{value:"Deploy the Activity",id:"deploy-the-activity",children:[]},{value:"Use the Activity in a Workflow",id:"use-the-activity-in-a-workflow",children:[]}],b={rightToc:p};function d(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This article will walk you through creating a new workflow activity for Geocortex Workflow Server."),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)(a.default,{mdxType:"ServerPrereqs"}),Object(i.b)("h2",{id:"create-the-activity"},"Create the Activity"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Create a new file ",Object(i.b)("inlineCode",{parentName:"li"},"CustomActivity.cs")," in the root of your Geocortex Workflow Server extension project."),Object(i.b)("li",{parentName:"ol"},"Add a new skeleton workflow activity that implements ",Object(i.b)("inlineCode",{parentName:"li"},"IActivityHandler"),".")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cs",metastring:'title="App1/App1/CustomActivity.cs"',title:'"App1/App1/CustomActivity.cs"'}),'using Geocortex.Workflow.Runtime;\nusing System.Collections.Generic;\nusing System.Threading.Tasks;\n\nnamespace App1.Workflow\n{\n    public class CustomActivity : IActivityHandler\n    {\n        public static string Action { get; } = "your:unique:namespace::CustomActivity";\n\n        public Task<IDictionary<string, object>> Execute(IDictionary<string, object> inputs, IActivityContext context)\n        {\n            return Task.FromResult((IDictionary<string, object>)new Dictionary<string, object>(){\n                ["test"] = "value"\n            });\n        }\n    }\n}\n')),Object(i.b)("h2",{id:"register-the-activity-with-an-assembly-attribute"},"Register the Activity with an Assembly Attribute"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Create a new file, ",Object(i.b)("inlineCode",{parentName:"li"},"Properties\\AssemblyInfo.cs")),Object(i.b)("li",{parentName:"ol"},"Add the custom Geocortex Workflow attribute to ",Object(i.b)("inlineCode",{parentName:"li"},"AssemblyInfo.cs"),":")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cs",metastring:'title="App1/App1/Properties/AssemblyInfo.cs"',title:'"App1/App1/Properties/AssemblyInfo.cs"'}),"[assembly: Geocortex.Workflow.Runtime.WorkflowActivities]\n")),Object(i.b)("p",null,"This registers the assembly to a namespace that Geocortex Workflow Server can discover."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"By convention, assembly attributes are typically added to a file called ",Object(i.b)("inlineCode",{parentName:"p"},'"Properties\\AssemblyInfo.cs"'),", but they can be added to any code file."))),Object(i.b)("h2",{id:"deploy-the-activity"},"Deploy the Activity"),Object(i.b)("p",null,"Follow the instructions to ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/workflow/sdk-server-overview#deploying-geocortex-workflow-server-activities"}),"deploy Geocortex Workflow Server activities"),"."),Object(i.b)("h2",{id:"use-the-activity-in-a-workflow"},"Use the Activity in a Workflow"),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/server-workflows.htm"}),"Server workflows")," that run on your Geocortex Workflow Server deployment can now run this custom activity."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/workflow/sdk-net-register-activities"}),"Registering stubs for .NET activities")," provides a user friendly interface for your custom activities in Geocortex Workflow Designer."))),Object(i.b)("p",null,"You can run the custom activity by referencing it by action with ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activities/run-activity.htm"}),"the ",Object(i.b)("inlineCode",{parentName:"a"},"RunActivity")," activity"),'. The custom activity created in this article takes no inputs but produces an output with the property "test".'),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",null,"You can"," ",Object(i.b)("a",{href:Object(c.a)("workflows/server-create-activity.json"),download:"custom-server-activity.json"},"download this demo server workflow")," ","that runs the custom activity and",Object(i.b)("a",{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/import-export-workflows.htm",target:"_blank"}," ","import it into the Geocortex Workflow Designer."," ")))))}d.isMDXComponent=!0},223:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return v}));var o=r(0),n=r.n(o);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(r),m=o,v=b["".concat(a,".").concat(m)]||b[m]||d[m]||i;return r?n.a.createElement(v,c(c({ref:t},l),{},{components:r})):n.a.createElement(v,c({ref:t},l))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},224:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return a}));var o=r(227),n=r(225);function i(){var e=Object(o.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,o){var i=void 0===o?{}:o,a=i.forcePrependBaseUrl,c=void 0!==a&&a,s=i.absolute,l=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if(Object(n.b)(r))return r;if(c)return t+r;var p=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+p:p}(i,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},225:function(e,t,r){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!o(e)}r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return n}))},227:function(e,t,r){"use strict";var o=r(0),n=r(19);t.a=function(){var e=Object(o.useContext)(n.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},63:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var o=r(2),n=r(6),i=(r(0),r(223)),a={},c={unversionedId:"workflow/snippets/prereqs-server",id:"workflow/snippets/prereqs-server",isDocsHomePage:!1,title:"prereqs-server",description:"Extending Geocortex Workflow with server side components requires an on-premises installation of Geocortex Workflow. You will need administrative access to this installation.",source:"@site/docs/workflow/snippets/prereqs-server.mdx",slug:"/workflow/snippets/prereqs-server",permalink:"/docs/workflow/snippets/prereqs-server",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/snippets/prereqs-server.mdx",version:"current"},s=[],l={rightToc:s};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Extending Geocortex Workflow with ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/server-workflows.htm%3FTocPath%3DServer%2520Workflows%7C_____0"}),"server side components")," requires an ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/installation.htm"}),"on-premises installation of Geocortex Workflow"),". You will need administrative access to this installation."))),Object(i.b)("p",null,"Follow the instructions in the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/workflow/sdk-server-overview"}),"Geocortex Workflow Server")," page to set up your development environment and Geocortex Workflow Server extension project."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"A working knowledge of ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-ca/dotnet/csharp/"}),"C#")," and ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://dotnet.microsoft.com/platform/dotnet-standard"}),".NET Standard")," is recommended before extending Geocortex Workflow Server"))))}p.isMDXComponent=!0}}]);