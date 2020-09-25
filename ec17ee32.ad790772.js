(window.webpackJsonp=window.webpackJsonp||[]).push([[142,110],{209:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return b})),o.d(t,"metadata",(function(){return d})),o.d(t,"rightToc",(function(){return u})),o.d(t,"default",(function(){return m}));var r=o(2),n=o(6),i=(o(0),o(223)),a=o(224),c=o(229),l=o(230),s=o(66),b={title:"Using the .NET Workflow SDK with Geocortex Workflow Server",sidebar_label:"SDK Overview",description:"Geocortex Workflow - Overview of extending workflow for Geocortex Workflow Server"},d={unversionedId:"workflow/sdk-server-overview",id:"workflow/sdk-server-overview",isDocsHomePage:!1,title:"Using the .NET Workflow SDK with Geocortex Workflow Server",description:"Geocortex Workflow - Overview of extending workflow for Geocortex Workflow Server",source:"@site/docs/workflow/sdk-server-overview.mdx",slug:"/workflow/sdk-server-overview",permalink:"/docs/workflow/sdk-server-overview",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/sdk-server-overview.mdx",version:"current",sidebar_label:"SDK Overview",sidebar:"workflow",previous:{title:"Implement an Loading Indicator Form Element",permalink:"/docs/workflow/tutorial-mobile-activity-indicator-form-element"},next:{title:"Create an Activity",permalink:"/docs/workflow/sdk-server-create-activity"}},u=[{value:"Requirements",id:"requirements",children:[]},{value:"Development Environment",id:"development-environment",children:[]},{value:"Setting up a Geocortex Workflow Server Extension Project",id:"setting-up-a-geocortex-workflow-server-extension-project",children:[]},{value:"Deploying Geocortex Workflow Server Activities",id:"deploying-geocortex-workflow-server-activities",children:[]},{value:"Debugging Server Workflow Activities",id:"debugging-server-workflow-activities",children:[]},{value:"Automating Deployment of Server Workflow Activities",id:"automating-deployment-of-server-workflow-activities",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],p={rightToc:u};function m(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Geocortex Workflow Server can be extended by augmenting your on-premises installation with additional custom .NET assemblies."),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)("p",null,"Extending Geocortex Workflow Server requires administrative access to your on-premises installation of workflow."),Object(i.b)("h2",{id:"development-environment"},"Development Environment"),Object(i.b)("p",null,"Visual Studio 2019 is the only officially supported development environment for extending Geocortex Workflow Server."),Object(i.b)("h2",{id:"setting-up-a-geocortex-workflow-server-extension-project"},"Setting up a Geocortex Workflow Server Extension Project"),Object(i.b)("p",null,"Extending Geocortex Workflow Server requires you to produce a separate assembly with your custom activities, and copy that into your on-premises deployment of Geocortex Workflow. We first need to set up a project using Visual Studio that references the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/workflow/key-concepts#geocortex-workflow-designer-and-runtime"}),"workflow runtime"),"."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Launch Microsoft Visual Studio 2019."),Object(i.b)("li",{parentName:"ol"},"Create a new project of type ",Object(i.b)("em",{parentName:"li"},"Class Library")," (.NET Standard)",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"You can also create a project of type ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://dotnet.microsoft.com/learn/dotnet/what-is-dotnet"}),".NET Core")," to take advantage of its larger feature set. If so, you need to go into the project settings and change the output type to ",Object(i.b)("inlineCode",{parentName:"li"},"Class Library")))),Object(i.b)("li",{parentName:"ol"},"Edit the ",Object(i.b)("inlineCode",{parentName:"li"},".csproj")," file in a text editor and add the ",Object(i.b)("inlineCode",{parentName:"li"},"CopyLocalLockFileAssemblies")," attribute to the ",Object(i.b)("inlineCode",{parentName:"li"},"PropertyGroup"),".")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<PropertyGroup>\n    <TargetFramework>netstandard2.0</TargetFramework>\n    <RootNamespace>CustomWorkflow</RootNamespace>\n    // highlight-next-line\n    <CopyLocalLockFileAssemblies>true</CopyLocalLockFileAssemblies>\n</PropertyGroup>\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"This will copy the referenced nuget assemblies to the build output folder, which will be important for later.")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/visualstudio/ide/how-to-add-or-remove-references-by-using-the-reference-manager?view=vs-2019"}),"Add a reference")," to the ",Object(i.b)("inlineCode",{parentName:"li"},"Geocortex.Workflow.Runtime")," assembly.\nBy default, this is located in",Object(i.b)("inlineCode",{parentName:"li"},"C:\\Program Files\\Latitude Geographics\\Geocortex Workflow\\Deployment\\service"))),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},".NET Standard projects ",Object(i.b)("strong",{parentName:"p"},"must")," target .NET Standard 2.0, and .NET Core projects must target .NET Core 2.1, or else the assembly will be incompatible with Geocortex Workflow Server."))),Object(i.b)(s.default,{mdxType:"SdkLimitationsWarning"}),Object(i.b)("p",null,"Next, learn how to implement a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/workflow/tutorial-server-calculate-logarithm-activity"}),"custom activity")," for Geocortex Workflow Server."),Object(i.b)("h2",{id:"deploying-geocortex-workflow-server-activities"},"Deploying Geocortex Workflow Server Activities"),Object(i.b)("p",null,"For Geocortex Workflow Server to find your custom activities, you need to copy the build output to a particular folder."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Build the project."),Object(i.b)("li",{parentName:"ol"},"Find the build output on disk.",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},'In Visual Studio, right-click on your project in Solution Explorer and choose "Open Folder in File Explorer".'),Object(i.b)("li",{parentName:"ol"},"Open the ",Object(i.b)("inlineCode",{parentName:"li"},"bin")," folder.\nIf you do not see a",Object(i.b)("inlineCode",{parentName:"li"},"bin")," folder, it is possible you right-clicked on the solution instead of the project."),Object(i.b)("li",{parentName:"ol"},"In the ",Object(i.b)("inlineCode",{parentName:"li"},"bin")," folder, open either ",Object(i.b)("inlineCode",{parentName:"li"},"Debug")," or ",Object(i.b)("inlineCode",{parentName:"li"},"Release"),", depending on which build configuration you used."),Object(i.b)("li",{parentName:"ol"},"In the ",Object(i.b)("inlineCode",{parentName:"li"},"bin\\Debug")," or ",Object(i.b)("inlineCode",{parentName:"li"},"bin\\Release")," folder, there will be one final sub-directory which will be ",Object(i.b)("inlineCode",{parentName:"li"},"netstandard2.0"),"\nor ",Object(i.b)("inlineCode",{parentName:"li"},"netcore2.1"),". Open this folder."),Object(i.b)("li",{parentName:"ol"},"You should now see a number of files including ",Object(i.b)("inlineCode",{parentName:"li"},"Geocortex.Workflow.Runtime.dll")," and your own project, such as ",Object(i.b)("inlineCode",{parentName:"li"},"AssemblyNamespace.dll"),"."))),Object(i.b)("li",{parentName:"ol"},"Find the ",Object(i.b)("inlineCode",{parentName:"li"},"CustomAssemblies")," folder on disk.",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Geocortex Workflow looks in a folder called ",Object(i.b)("inlineCode",{parentName:"li"},"CustomAssemblies")," for assemblies that contain custom activities.\nThis is located in the folder that you chose when installing Geocortex Workflow. The default location is\n",Object(i.b)("inlineCode",{parentName:"li"},"C:\\Program Files\\Latitude Geographics\\Geocortex Workflow\\CustomAssemblies")))),Object(i.b)("li",{parentName:"ol"},"Copy the relevant files from the build output to the ",Object(i.b)("inlineCode",{parentName:"li"},"CustomAssemblies")," folder.",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Copy your project's assembly. (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"AssemblyNamespace.dll"),")"),Object(i.b)("li",{parentName:"ol"},"Copy any third-party libraries that your project relies on (these should have been output to the build folder)"),Object(i.b)("li",{parentName:"ol"},"Copy any other configuration files or resources that your project relies on."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Do not")," copy any files that start with ",Object(i.b)("inlineCode",{parentName:"li"},"Geocortex.Workflow.")," They are not required in this folder.")))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you created a .NET Core Project and see ",Object(i.b)("inlineCode",{parentName:"p"},"AssemblyNamespace.exe"),", you need to change the project output type to ",Object(i.b)("inlineCode",{parentName:"p"},"Class Library"),"."))),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"You may need to stop Geocortex Workflow Server in IIS in order to copy your copy your custom code."))),Object(i.b)("h2",{id:"debugging-server-workflow-activities"},"Debugging Server Workflow Activities"),Object(i.b)("p",null,"You can debug custom Geocortex Workflow Server activities by attaching to the Geocortex Workflow Server process from the Geocortex Workflow extension project you created."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Start Visual Studio 2019 with administrator privileges."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/visualstudio/debugger/debug-multiple-processes?view=vs-2019#BKMK_Attach_to_a_process"}),"Attach the debugger")," to the running ",Object(i.b)("inlineCode",{parentName:"li"},"GeocortexWorkflowServer.exe")," process.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"You may need to check 'show processes from all users' to see it."))),Object(i.b)("li",{parentName:"ol"},"Set a breakpoint in your custom activity."),Object(i.b)("li",{parentName:"ol"},"Run your server workflow that uses the custom activity. Your breakpoint should be hit.")),Object(i.b)("h2",{id:"automating-deployment-of-server-workflow-activities"},"Automating Deployment of Server Workflow Activities"),Object(i.b)("p",null,"To automate the deployment to Geocortex Workflow Server, we have to add a post build step to the project that copies the build output."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Locate the ",Object(i.b)("inlineCode",{parentName:"li"},"Custom Assemblies")," folder in the Geocortex Workflow Server installation. The default location is ",Object(i.b)("inlineCode",{parentName:"li"},"C:\\Program Files\\Latitude Geographics\\Geocortex Workflow\\CustomAssemblies")),Object(i.b)("li",{parentName:"ol"},"Create a file ",Object(i.b)("inlineCode",{parentName:"li"},"excluded_files.txt")," at the root of the project that excludes the appropriate build output files as described in the ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#deploying-geocortex-workflow-server-activities"}),"deployment section"),".")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"Geocortex.Workflow.Runtime.dll\nGeocortex.Workflow.Runtime.xml\n")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Edit the post build event in the project properties.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Add a command which copies the build output to the ",Object(i.b)("inlineCode",{parentName:"li"},"Custom Assemblies")," folder."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'xcopy "$(OutDir)*" "C:\\Program Files\\Latitude Geographics\\Geocortex Workflow\\CustomAssemblies" /Exclude:$(ProjectDir)excludedFiles.txt /y')))),Object(i.b)("li",{parentName:"ol"},"Run a rebuild and ensure all appropriate files are copied.")),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"You may need to stop then restart Geocortex Workflow Server in order for the post build step to copy your custom code."))),Object(i.b)("h2",{id:"next-steps"},"Next Steps"),Object(i.b)("p",null,"Check out the tutorials to learn how to build custom activities for Geocortex Workflow Server and augment them with third party libraries."),Object(i.b)(c.a,{mdxType:"UseCaseContainer"},Object(i.b)(l.a,{title:"Implement a Custom Activity",description:"Implement a custom activity for Geocortex Workflow Server",link:Object(a.a)("docs/workflow/tutorial-server-calculate-logarithm-activity"),mdxType:"UseCaseCard"}),Object(i.b)(l.a,{title:"Reference a Third Party Library",description:"Reference a third party library in custom code.",link:Object(a.a)("docs/workflow/sdk-server-reference-third-party-library"),mdxType:"UseCaseCard"})))}m.isMDXComponent=!0},223:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return m}));var r=o(0),n=o.n(r);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},d=function(e){var t=b(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(o),p=r,m=d["".concat(a,".").concat(p)]||d[p]||u[p]||i;return o?n.a.createElement(m,c(c({ref:t},s),{},{components:o})):n.a.createElement(m,c({ref:t},s))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=o[s];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},224:function(e,t,o){"use strict";o.d(t,"b",(function(){return i})),o.d(t,"a",(function(){return a}));var r=o(227),n=o(225);function i(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,o=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,o,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,c=void 0!==a&&a,l=i.absolute,s=void 0!==l&&l;if(!o)return o;if(o.startsWith("#"))return o;if(Object(n.b)(o))return o;if(c)return t+o;var b=o.startsWith(t)?o:t+o.replace(/^\//,"");return s?e+b:b}(i,o,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},225:function(e,t,o){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}o.d(t,"b",(function(){return r})),o.d(t,"a",(function(){return n}))},226:function(e,t,o){"use strict";function r(e){var t,o,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=r(e[t]))&&(n&&(n+=" "),n+=o);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,o=0,n="";o<arguments.length;)(e=arguments[o++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},227:function(e,t,o){"use strict";var r=o(0),n=o(19);t.a=function(){var e=Object(r.useContext)(n.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},228:function(e,t,o){"use strict";var r=o(0),n=o.n(r),i=o(13),a=o(225),c=o(8),l=Object(r.createContext)({collectLink:function(){}}),s=o(224),b=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]])}return o};t.a=function(e){var t,o,d,u=e.isNavLink,p=e.to,m=e.href,f=e.activeClassName,v=e["data-noBrokenLinkCheck"],h=b(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]),j=Object(s.b)().withBaseUrl,O=Object(r.useContext)(l),w=p||m,g=Object(a.a)(w),y=null==w?void 0:w.replace("pathname://",""),N=void 0!==y?function(e){return e.startsWith("/")}(o=y)?j(o):o:void 0,k=Object(r.useRef)(!1),x=u?i.e:i.c,C=c.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!C&&g&&window.docusaurus.prefetch(N),function(){C&&d&&d.disconnect()}}),[N,C,g]);var S=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,W=!N||!g||S;return N&&g&&!S&&!v&&O.collectLink(N),W?n.a.createElement("a",Object.assign({href:N},!g&&{target:"_blank",rel:"noopener noreferrer"},h)):n.a.createElement(x,Object.assign({},h,{onMouseEnter:function(){k.current||(window.docusaurus.preload(N),k.current=!0)},innerRef:function(e){var t,o;C&&e&&g&&(t=e,o=function(){window.docusaurus.prefetch(N)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),o())}))}))).observe(t))},to:N||""},u&&{activeClassName:f}))}},229:function(e,t,o){"use strict";o.d(t,"a",(function(){return c}));var r=o(0),n=o.n(r),i=o(46),a=o.n(i);function c(e){var t=e.children;return n.a.createElement("div",{className:a.a.root},t)}},230:function(e,t,o){"use strict";o.d(t,"a",(function(){return s}));var r=o(228),n=o(0),i=o.n(n),a=o(226),c=o(47),l=o.n(c);function s(e){var t=e.title,o=e.description,n=e.link;return i.a.createElement("div",{className:Object(a.a)("card-demo",l.a.root)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h3",null,t)),i.a.createElement("div",{className:"card__body"},i.a.createElement("p",null,o)),i.a.createElement("div",{className:"card__footer"},i.a.createElement(r.a,{className:"button button--secondary button--block",to:n},"Get Started"))))}},66:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return a})),o.d(t,"metadata",(function(){return c})),o.d(t,"rightToc",(function(){return l})),o.d(t,"default",(function(){return b}));var r=o(2),n=o(6),i=(o(0),o(223)),a={},c={unversionedId:"workflow/snippets/sdk-net-limitations-warning",id:"workflow/snippets/sdk-net-limitations-warning",isDocsHomePage:!1,title:"sdk-net-limitations-warning",description:"We recommend that you only implement the IActivityHandler interface examples provided in the Developer Center. These examples have been verified and are provided to help you customize your Geocortex product to suit your needs. You should not reference other classes and functions from the various Geocortex Workflow assemblies. Doing so could risk breaking functionality and/or unexpected results as a result of future changes.",source:"@site/docs/workflow/snippets/sdk-net-limitations-warning.mdx",slug:"/workflow/snippets/sdk-net-limitations-warning",permalink:"/docs/workflow/snippets/sdk-net-limitations-warning",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/snippets/sdk-net-limitations-warning.mdx",version:"current"},l=[],s={rightToc:l};function b(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"We recommend that you only implement the ",Object(i.b)("code",null,"IActivityHandler")," interface examples provided in the Developer Center. These examples have been verified and are provided to help you customize your Geocortex product to suit your needs. You should not reference other classes and functions from the various Geocortex Workflow assemblies. Doing so could risk breaking functionality and/or unexpected results as a result of future changes."))))}b.isMDXComponent=!0}}]);