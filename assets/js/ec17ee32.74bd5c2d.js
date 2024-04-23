"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[6590,1064],{8964:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var i=o(7624),r=o(2172),n=o(964),s=o(7160),l=o(7528),d=o(9552);const c={title:"Using the .NET Workflow SDK with VertiGIS Studio Workflow Server",sidebar_label:"SDK Overview",description:"VertiGIS Studio Workflow - Overview of extending workflow for VertiGIS Studio Workflow Server"},a=void 0,u={id:"workflow/sdk-server-overview",title:"Using the .NET Workflow SDK with VertiGIS Studio Workflow Server",description:"VertiGIS Studio Workflow - Overview of extending workflow for VertiGIS Studio Workflow Server",source:"@site/docs/workflow/sdk-server-overview.mdx",sourceDirName:"workflow",slug:"/workflow/sdk-server-overview",permalink:"/docs/workflow/sdk-server-overview",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/workflow/sdk-server-overview.mdx",tags:[],version:"current",frontMatter:{title:"Using the .NET Workflow SDK with VertiGIS Studio Workflow Server",sidebar_label:"SDK Overview",description:"VertiGIS Studio Workflow - Overview of extending workflow for VertiGIS Studio Workflow Server"},sidebar:"workflow",previous:{title:"Implement an Loading Indicator Form Element",permalink:"/docs/workflow/tutorial-mobile-activity-indicator-form-element"},next:{title:"Create an Activity",permalink:"/docs/workflow/sdk-server-create-activity"}},h={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Development Environment",id:"development-environment",level:2},{value:"Setting up a VertiGIS Studio Workflow Server Extension Project",id:"setting-up-a-vertigis-studio-workflow-server-extension-project",level:2},...d.toc,{value:"Deploying VertiGIS Studio Workflow Server Activities",id:"deploying-vertigis-studio-workflow-server-activities",level:2},{value:"Debugging Server Workflow Activities",id:"debugging-server-workflow-activities",level:2},{value:"Automating Deployment of Server Workflow Activities",id:"automating-deployment-of-server-workflow-activities",level:2},{value:"Next Steps",id:"next-steps",level:2}];function f(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"VertiGIS Studio Workflow Server can be extended by augmenting your on-premises installation with additional custom .NET assemblies."}),"\n",(0,i.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsx)(t.p,{children:"Extending VertiGIS Studio Workflow Server requires administrative access to your on-premises installation of workflow."}),"\n",(0,i.jsx)(t.h2,{id:"development-environment",children:"Development Environment"}),"\n",(0,i.jsx)(t.p,{children:"Visual Studio 2022 is the only officially supported development environment for extending VertiGIS Studio Workflow Server."}),"\n",(0,i.jsx)(t.h2,{id:"setting-up-a-vertigis-studio-workflow-server-extension-project",children:"Setting up a VertiGIS Studio Workflow Server Extension Project"}),"\n",(0,i.jsxs)(t.p,{children:["Extending VertiGIS Studio Workflow Server requires you to produce a separate assembly with your custom activities, and copy that into your on-premises deployment of VertiGIS Studio Workflow. We first need to set up a project using Visual Studio that references the ",(0,i.jsx)(t.a,{href:"/docs/workflow/key-concepts#vertigis-studio-workflow-designer-and-runtime",children:"workflow runtime"}),"."]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Launch Microsoft Visual Studio 2022."}),"\n",(0,i.jsxs)(t.li,{children:["Create a new project of type ",(0,i.jsx)(t.em,{children:"Class Library"})," (.NET Standard)","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["You can also create a project of type ",(0,i.jsx)(t.a,{href:"https://dotnet.microsoft.com/learn/dotnet/what-is-dotnet",children:".NET"})," to take advantage of its larger feature set. If so, you need to go into the project settings and change the output type to ",(0,i.jsx)(t.code,{children:"Class Library"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Edit the ",(0,i.jsx)(t.code,{children:".csproj"})," file in a text editor and add the ",(0,i.jsx)(t.code,{children:"CopyLocalLockFileAssemblies"})," attribute to the ",(0,i.jsx)(t.code,{children:"PropertyGroup"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:"<PropertyGroup>\n    <TargetFramework>netstandard2.1</TargetFramework>\n    <RootNamespace>CustomWorkflow</RootNamespace>\n    // highlight-next-line\n    <CopyLocalLockFileAssemblies>true</CopyLocalLockFileAssemblies>\n</PropertyGroup>\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"This will copy the referenced nuget assemblies to the build output folder, which will be important for later."}),"\n"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/visualstudio/ide/how-to-add-or-remove-references-by-using-the-reference-manager?view=vs-2019",children:"Add a reference"})," to the ",(0,i.jsx)(t.code,{children:"VertiGIS.Workflow.Runtime"})," assembly.\nBy default, this is located in",(0,i.jsx)(t.code,{children:"C:\\Program Files\\VertiGIS\\VertiGIS Studio Workflow\\Deployment\\service"})]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{title:"Important",type:"info",children:(0,i.jsxs)(t.p,{children:[".NET Standard projects ",(0,i.jsx)(t.strong,{children:"must"})," target .NET Standard 2.1, and .NET projects must target .NET 6.0, or else the assembly will be incompatible with VertiGIS Studio Workflow Server."]})}),"\n",(0,i.jsx)(d.default,{}),"\n",(0,i.jsxs)(t.p,{children:["Next, learn how to implement a ",(0,i.jsx)(t.a,{href:"/docs/workflow/tutorial-server-calculate-logarithm-activity",children:"custom activity"})," for VertiGIS Studio Workflow Server."]}),"\n",(0,i.jsx)(t.h2,{id:"deploying-vertigis-studio-workflow-server-activities",children:"Deploying VertiGIS Studio Workflow Server Activities"}),"\n",(0,i.jsx)(t.p,{children:"For VertiGIS Studio Workflow Server to find your custom activities, you need to copy the build output to a particular folder."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Build the project."}),"\n",(0,i.jsxs)(t.li,{children:["Find the build output on disk.","\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:'In Visual Studio, right-click on your project in Solution Explorer and choose "Open Folder in File Explorer".'}),"\n",(0,i.jsxs)(t.li,{children:["Open the ",(0,i.jsx)(t.code,{children:"bin"})," folder.\nIf you do not see a",(0,i.jsx)(t.code,{children:"bin"})," folder, it is possible you right-clicked on the solution instead of the project."]}),"\n",(0,i.jsxs)(t.li,{children:["In the ",(0,i.jsx)(t.code,{children:"bin"})," folder, open either ",(0,i.jsx)(t.code,{children:"Debug"})," or ",(0,i.jsx)(t.code,{children:"Release"}),", depending on which build configuration you used."]}),"\n",(0,i.jsxs)(t.li,{children:["In the ",(0,i.jsx)(t.code,{children:"bin\\Debug"})," or ",(0,i.jsx)(t.code,{children:"bin\\Release"})," folder, there will be one final sub-directory which will be ",(0,i.jsx)(t.code,{children:"netstandard2.1"}),"\nor ",(0,i.jsx)(t.code,{children:"net6.0"}),". Open this folder."]}),"\n",(0,i.jsxs)(t.li,{children:["You should now see a number of files including ",(0,i.jsx)(t.code,{children:"VertiGIS.Workflow.Runtime.dll"})," and your own project, such as ",(0,i.jsx)(t.code,{children:"AssemblyNamespace.dll"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Find the ",(0,i.jsx)(t.code,{children:"CustomAssemblies"})," folder on disk.","\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["VertiGIS Studio Workflow looks in a folder called ",(0,i.jsx)(t.code,{children:"CustomAssemblies"})," for assemblies that contain custom activities.\nThis is located in the folder that you chose when installing VertiGIS Studio Workflow. The default location is\n",(0,i.jsx)(t.code,{children:"C:\\Program Files\\VertiGIS\\VertiGIS Studio Workflow\\CustomAssemblies"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Copy the relevant files from the build output to the ",(0,i.jsx)(t.code,{children:"CustomAssemblies"})," folder.","\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Copy your project's assembly. (e.g. ",(0,i.jsx)(t.code,{children:"AssemblyNamespace.dll"}),")"]}),"\n",(0,i.jsx)(t.li,{children:"Copy any third-party libraries that your project relies on (these should have been output to the build folder)"}),"\n",(0,i.jsx)(t.li,{children:"Copy any other configuration files or resources that your project relies on."}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Do not"})," copy any files that start with ",(0,i.jsx)(t.code,{children:"VertiGIS.Workflow."})," They are not required in this folder."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["If you created a .NET Project and see ",(0,i.jsx)(t.code,{children:"AssemblyNamespace.exe"}),", you need to change the project output type to ",(0,i.jsx)(t.code,{children:"Class Library"}),"."]})}),"\n",(0,i.jsx)(t.admonition,{title:"Important",type:"info",children:(0,i.jsx)(t.p,{children:"You may need to stop VertiGIS Studio Workflow Server in IIS in order to copy your copy your custom code."})}),"\n",(0,i.jsx)(t.h2,{id:"debugging-server-workflow-activities",children:"Debugging Server Workflow Activities"}),"\n",(0,i.jsx)(t.p,{children:"You can debug custom VertiGIS Studio Workflow Server activities by attaching to the VertiGIS Studio Workflow Server process from the VertiGIS Studio Workflow extension project you created."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Start Visual Studio 2022 with administrator privileges."}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/visualstudio/debugger/debug-multiple-processes?view=vs-2019#BKMK_Attach_to_a_process",children:"Attach the debugger"})," to the running ",(0,i.jsx)(t.code,{children:"GeocortexWorkflowServer.exe"})," process.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"You may need to check 'show processes from all users' to see it."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"Set a breakpoint in your custom activity."}),"\n",(0,i.jsx)(t.li,{children:"Run your server workflow that uses the custom activity. Your breakpoint should be hit."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"automating-deployment-of-server-workflow-activities",children:"Automating Deployment of Server Workflow Activities"}),"\n",(0,i.jsx)(t.p,{children:"To automate the deployment to VertiGIS Studio Workflow Server, we have to add a post build step to the project that copies the build output."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Locate the ",(0,i.jsx)(t.code,{children:"Custom Assemblies"})," folder in the VertiGIS Studio Workflow Server installation. The default location is ",(0,i.jsx)(t.code,{children:"C:\\Program Files\\VertiGIS\\VertiGIS Studio Workflow\\CustomAssemblies"})]}),"\n",(0,i.jsxs)(t.li,{children:["Create a file ",(0,i.jsx)(t.code,{children:"excluded_files.txt"})," at the root of the project that excludes the appropriate build output files as described in the ",(0,i.jsx)(t.a,{href:"#deploying-vertigis-studio-workflow-server-activities",children:"deployment section"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"VertiGIS.Workflow.Runtime.dll\nVertiGIS.Workflow.Runtime.xml\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:["Edit the post build event in the project properties.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Add a command which copies the build output to the ",(0,i.jsx)(t.code,{children:"Custom Assemblies"})," folder."]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:'xcopy "$(OutDir)*" "C:\\Program Files\\VertiGIS\\VertiGIS Studio Workflow\\CustomAssemblies" /Exclude:$(ProjectDir)excludedFiles.txt /y'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"Run a rebuild and ensure all appropriate files are copied."}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{title:"Important",type:"info",children:(0,i.jsx)(t.p,{children:"You may need to stop then restart VertiGIS Studio Workflow Server in order for the post build step to copy your custom code."})}),"\n",(0,i.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsx)(t.p,{children:"Check out the tutorials to learn how to build custom activities for VertiGIS Studio Workflow Server and augment them with third party libraries."}),"\n",(0,i.jsxs)(s.c,{children:[(0,i.jsx)(l.c,{title:"Implement a Custom Activity",description:"Implement a custom activity for VertiGIS Studio Workflow Server",link:(0,n.c)("docs/workflow/tutorial-server-calculate-logarithm-activity")}),(0,i.jsx)(l.c,{title:"Reference a Third Party Library",description:"Reference a third party library in custom code.",link:(0,n.c)("docs/workflow/sdk-server-reference-third-party-library")})]})]})}function m(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}},9552:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var i=o(7624),r=o(2172);const n={},s=void 0,l={id:"workflow/snippets/sdk-net-limitations-warning",title:"sdk-net-limitations-warning",description:"We recommend that you only implement the IActivityHandler interface examples provided in the Developer Center. These examples have been verified and are provided to help you customize your VertiGIS Studio product to suit your needs. You should not reference other classes and functions from the various VertiGIS Studio Workflow assemblies. Doing so could risk breaking functionality and/or unexpected results as a result of future changes.",source:"@site/docs/workflow/snippets/sdk-net-limitations-warning.mdx",sourceDirName:"workflow/snippets",slug:"/workflow/snippets/sdk-net-limitations-warning",permalink:"/docs/workflow/snippets/sdk-net-limitations-warning",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/workflow/snippets/sdk-net-limitations-warning.mdx",tags:[],version:"current",frontMatter:{}},d={},c=[];function a(e){const t={admonition:"admonition",p:"p",...(0,r.M)(),...e.components};return(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["We recommend that you only implement the ",(0,i.jsx)("code",{children:"IActivityHandler"})," interface examples provided in the Developer Center. These examples have been verified and are provided to help you customize your VertiGIS Studio product to suit your needs. You should not reference other classes and functions from the various VertiGIS Studio Workflow assemblies. Doing so could risk breaking functionality and/or unexpected results as a result of future changes."]})})}function u(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},7528:(e,t,o)=>{o.d(t,{c:()=>l});var i=o(867),r=(o(1504),o(4971));const n={root:"root_Uwqo"};var s=o(7624);function l({title:e,description:t,link:o}){return(0,s.jsx)("div",{className:(0,r.c)("card-demo",n.root),children:(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)("div",{className:"card__header",children:(0,s.jsx)("h3",{children:e})}),(0,s.jsx)("div",{className:"card__body",children:(0,s.jsx)("p",{children:t})}),(0,s.jsx)("div",{className:"card__footer",children:(0,s.jsx)(i.c,{className:"button button--secondary button--block",to:o,children:"Get Started"})})]})})}},7160:(e,t,o)=>{o.d(t,{c:()=>n});o(1504);const i={root:"root_vxd5"};var r=o(7624);function n({children:e}){return(0,r.jsx)("div",{className:i.root,children:e})}},4971:(e,t,o)=>{function i(e){var t,o,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=i(e[t]))&&(r&&(r+=" "),r+=o);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}o.d(t,{c:()=>r});const r=function(){for(var e,t,o=0,r="";o<arguments.length;)(e=arguments[o++])&&(t=i(e))&&(r&&(r+=" "),r+=t);return r}},2172:(e,t,o)=>{o.d(t,{I:()=>l,M:()=>s});var i=o(1504);const r={},n=i.createContext(r);function s(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);