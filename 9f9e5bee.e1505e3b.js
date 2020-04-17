(window.webpackJsonp=window.webpackJsonp||[]).push([[44,30,31],{138:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return a})),o.d(t,"metadata",(function(){return c})),o.d(t,"rightToc",(function(){return s})),o.d(t,"default",(function(){return p}));var r=o(1),i=o(9),n=(o(0),o(215)),a={},c={id:"workflow/snippets/logarithm-activity",title:"logarithm-activity",description:"```csharp",source:"@site/docs/workflow/snippets/logarithm-activity.mdx",permalink:"/docs/workflow/snippets/logarithm-activity",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/snippets/logarithm-activity.mdx"},s=[],l={rightToc:s};function p(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'using Geocortex.Workflow.Runtime;\nusing System;\nusing System.Collections.Generic;\nusing System.Threading.Tasks;\n\nnamespace App1.Workflow.CustomActivity\n{\n    public class CalculateLog : IActivityHandler\n    {\n        public const string Action = "your:unique:namespace::CalculateLog";\n\n        public Task<IDictionary<string, object>> Execute(IDictionary<string, object> inputs, IActivityContext context)\n        {\n            double? logBase = null;\n            if (inputs.ContainsKey("base")) {\n                var logBase = inputs["base"];\n            }\n            var value = (double)inputs["value"];\n\n            double logResult;\n            if(logBase != null)\n            {\n                logResult = Math.Log(value, (double)logBase);\n            } else\n            {\n                logResult = Math.Log(value);\n            }\n\n            return Task.FromResult((IDictionary<string, object>)new Dictionary<string, object>()\n            {\n                ["result"] = logResult\n            });\n        }\n    }\n}\n')))}p.isMDXComponent=!0},140:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return a})),o.d(t,"metadata",(function(){return c})),o.d(t,"rightToc",(function(){return s})),o.d(t,"default",(function(){return p}));var r=o(1),i=o(9),n=(o(0),o(215)),a={},c={id:"workflow/snippets/prereqs-server",title:"prereqs-server",description:":::important",source:"@site/docs/workflow/snippets/prereqs-server.mdx",permalink:"/docs/workflow/snippets/prereqs-server",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/snippets/prereqs-server.mdx"},s=[],l={rightToc:s};function p(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)("div",{className:"admonition admonition-important alert alert--info"},Object(n.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(n.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"Extending Geocortex Workflow with ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/server-workflows.htm%3FTocPath%3DServer%2520Workflows%7C_____0"}),"server side components")," requires an ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/installation.htm"}),"on premise installation of Geocortex Workflow"),". You will need adminstrative access to this installation."))),Object(n.b)("p",null,"Follow the instructions in the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/workflow/getting-started-server"}),"Geocortex Workflow Server")," page to set up your development environment."),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(n.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"A working knowledge of ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://dotnet.microsoft.com/"}),"C# and the .NET platform")," is recommended before extending Geocortex Workflow Server"))))}p.isMDXComponent=!0},189:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return s})),o.d(t,"metadata",(function(){return l})),o.d(t,"rightToc",(function(){return p})),o.d(t,"default",(function(){return m}));var r=o(1),i=o(9),n=(o(0),o(215)),a=o(140),c=o(138),s={title:"Implement a Custom Activity for Geocortex Workflow Server",sidebar_label:"Implement a Custom Activity",description:"Geocortex Workflow - Implement a custom activity for Geocortex Workflow Server"},l={id:"workflow/implement-custom-activity-server",title:"Implement a Custom Activity for Geocortex Workflow Server",description:"Geocortex Workflow - Implement a custom activity for Geocortex Workflow Server",source:"@site/docs/workflow/implement-custom-activity-server.mdx",permalink:"/docs/workflow/implement-custom-activity-server",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/implement-custom-activity-server.mdx",sidebar_label:"Implement a Custom Activity",sidebar:"workflow",previous:{title:"Reference a Third Party Library through the Geocortex Mobile SDK",permalink:"/docs/workflow/reference-third-party-library-mobile"},next:{title:"Reference a Third Party Library in Geocortex Workflow Server",permalink:"/docs/workflow/reference-third-party-library-server"}},p=[{value:"Scope",id:"scope",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Set up a new Custom Workflow Project",id:"set-up-a-new-custom-workflow-project",children:[]},{value:"Set up the Activity Skeleton",id:"set-up-the-activity-skeleton",children:[]},{value:"Register the Activity with an Assembly Attribute",id:"register-the-activity-with-an-assembly-attribute",children:[]},{value:"Deploy the Activity",id:"deploy-the-activity",children:[]},{value:"Implement the Custom Activity",id:"implement-the-custom-activity",children:[{value:"Example: Logarithm of a Number",id:"example-logarithm-of-a-number",children:[]}]},{value:"Test your Activity",id:"test-your-activity",children:[]}],b={rightToc:p};function m(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},b,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Implementing a custom ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/workflow/concepts-key-concepts#activities"}),"activity")," allows you to build a reusable, completely custom behavior to augment the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activity-reference.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____0"}),"existing activities")," that come with Geocortex Workflow."),Object(n.b)("h2",{id:"scope"},"Scope"),Object(n.b)("p",null,"This article applies to building workflow activities that will be run on ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/server-workflows.htm%3FTocPath%3DServer%2520Workflows%7C_____0"}),"Geocortex Workflow Server"),"."),Object(n.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(n.b)(a.default,{mdxType:"ServerPrereqs"}),Object(n.b)("h2",{id:"set-up-a-new-custom-workflow-project"},"Set up a new Custom Workflow Project"),Object(n.b)("p",null,"Follow the instructions to ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/workflow/getting-started-server#setting-up-a-geocortex-workflow-server-extension-project"}),"set up a new Geocortex Workflow Server extension project"),"."),Object(n.b)("h2",{id:"set-up-the-activity-skeleton"},"Set up the Activity Skeleton"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Create a new file ",Object(n.b)("inlineCode",{parentName:"li"},"CustomActivity")," in the project."),Object(n.b)("li",{parentName:"ol"},"Add a new skeleton workflow activity that implements ",Object(n.b)("inlineCode",{parentName:"li"},"IActivityHandler"),".")),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'using Geocortex.Workflow.Runtime;\nusing System.Collections.Generic;\nusing System.Threading.Tasks;\n\nnamespace App1.Workflow.CustomActivity\n{\n    public class CustomActivity : IActivityHandler\n    {\n        public static string Action { get; } = "your:unique:namespace::CustomActivity";\n\n        public Task<IDictionary<string, object>> Execute(IDictionary<string, object> inputs, IActivityContext context)\n        {\n            return Task.FromResult((IDictionary<string, object>)new Dictionary<string, object>());\n        }\n    }\n}\n')),Object(n.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(n.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(n.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(n.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"Use a unique prefix on the ",Object(n.b)("inlineCode",{parentName:"p"},"Action")," property to avoid it conflicting with someone else's custom activities.  "))),Object(n.b)("h2",{id:"register-the-activity-with-an-assembly-attribute"},"Register the Activity with an Assembly Attribute"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Create a new file, ",Object(n.b)("inlineCode",{parentName:"li"},"Properties\\AssemblyInfo.cs")),Object(n.b)("li",{parentName:"ol"},"Add the custom Geocortex Workflow attribute to ",Object(n.b)("inlineCode",{parentName:"li"},"AssemblyInfo.cs"),":")),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),"[assembly: Geocortex.Workflow.Runtime.WorkflowActivities]`\n")),Object(n.b)("p",null,"This registers the assembly to a namespace that Geocortex Workflow Server can discover."),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(n.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"By convention, assembly attributes are typically added to a file called ",Object(n.b)("inlineCode",{parentName:"p"},'"Properties\\AssemblyInfo.cs"'),", but they can be added to any code file."))),Object(n.b)("h2",{id:"deploy-the-activity"},"Deploy the Activity"),Object(n.b)("p",null,"Follow the instructions to ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/workflow/getting-started-server#deploying-geocortex-workflow-server-activities"}),"deploy Geocortex Workflow Server activities"),"."),Object(n.b)("h2",{id:"implement-the-custom-activity"},"Implement the Custom Activity"),Object(n.b)("p",null,"We now have a empty activity that Geocortex Workflow Server can use that takes no inputs and produces no outputs. At this point, you can implement the appropriate business logic for your use case, using the features available with .NET Standard or .NET Core. This activity still does not have an easy to use interface in Geocortex Workflow Designer, but can be executed using ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activities/run-activity.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____167"}),Object(n.b)("inlineCode",{parentName:"a"},"RunActivity")),"."),Object(n.b)("h3",{id:"example-logarithm-of-a-number"},"Example: Logarithm of a Number"),Object(n.b)("p",null,"The following activity will calculate the log of a number with a given (optional) base."),Object(n.b)(c.default,{mdxType:"LogarithmActivitySnippet"}),Object(n.b)("h2",{id:"test-your-activity"},"Test your Activity"),Object(n.b)("p",null,"You can run your new activity with a ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/server-workflows.htm%3FTocPath%3DServer%2520Workflows%7C_____0"}),"server workflow"),". ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activities/run-activity.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____167"}),Object(n.b)("inlineCode",{parentName:"a"},"RunActivity"))," can be used to execute your activity by the name defined in ",Object(n.b)("inlineCode",{parentName:"p"},"CustomActivity.cs")," (for this example, ",Object(n.b)("inlineCode",{parentName:"p"},"your:unique:namespace::CustomActivity"),", or ",Object(n.b)("inlineCode",{parentName:"p"},"your:unique:namespace::CalculateLog"),"). Check out ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/workflow/getting-started-server#debugging-server-workflow-activities"}),"this article")," to learn how to debug your custom activity code in Visual Studio."),Object(n.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(n.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(n.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(n.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"If you want your custom activity to show up with a friendly user interface in Geocortex Workflow Designer, check out ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/workflow/register-dotnet-activities"}),"Registering .NET Activities with Geocortex Workflow Designer"),"."))))}m.isMDXComponent=!0},215:function(e,t,o){"use strict";o.d(t,"a",(function(){return b})),o.d(t,"b",(function(){return d}));var r=o(0),i=o.n(r);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,i=function(e,t){if(null==e)return{};var o,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):c({},t,{},e)),o},b=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(o),u=r,d=b["".concat(a,".").concat(u)]||b[u]||m[u]||n;return o?i.a.createElement(d,c({ref:t},l,{components:o})):i.a.createElement(d,c({ref:t},l))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,a=new Array(n);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<n;l++)a[l]=o[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,o)}u.displayName="MDXCreateElement"}}]);