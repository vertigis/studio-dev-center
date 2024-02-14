"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[1268,2168],{3480:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=i(7624),o=i(2172);const r={},s=void 0,l={id:"workflow/snippets/prereqs-server",title:"prereqs-server",description:"Extending VertiGIS Studio Workflow with server side components requires an on-premises installation of VertiGIS Studio Workflow. You will need administrative access to this installation.",source:"@site/docs/workflow/snippets/prereqs-server.mdx",sourceDirName:"workflow/snippets",slug:"/workflow/snippets/prereqs-server",permalink:"/docs/workflow/snippets/prereqs-server",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/workflow/snippets/prereqs-server.mdx",tags:[],version:"current",frontMatter:{}},a={},c=[];function u(t){const e={a:"a",admonition:"admonition",p:"p",...(0,o.M)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.admonition,{title:"Important",type:"info",children:(0,n.jsxs)(e.p,{children:["Extending VertiGIS Studio Workflow with ",(0,n.jsx)(e.a,{href:"https://docs.vertigisstudio.com/workflow/latest/help/Default.htm#wf5/help/server-workflows.htm%3FTocPath%3DServer%2520Workflows%7C_____0",children:"server side components"})," requires an ",(0,n.jsx)(e.a,{href:"https://docs.vertigisstudio.com/workflow/latest/help/Default.htm#wf5/help/installation.htm",children:"on-premises installation of VertiGIS Studio Workflow"}),". You will need administrative access to this installation."]})}),"\n",(0,n.jsxs)(e.p,{children:["Follow the instructions in the ",(0,n.jsx)(e.a,{href:"/docs/workflow/sdk-server-overview",children:"VertiGIS Studio Workflow Server"})," page to set up your development environment and VertiGIS Studio Workflow Server extension project."]}),"\n",(0,n.jsx)(e.admonition,{type:"note",children:(0,n.jsxs)(e.p,{children:["A working knowledge of ",(0,n.jsx)(e.a,{href:"https://docs.microsoft.com/en-ca/dotnet/csharp/",children:"C#"})," and ",(0,n.jsx)(e.a,{href:"https://dotnet.microsoft.com/platform/dotnet-standard",children:".NET Standard"})," is recommended before extending VertiGIS Studio Workflow Server"]})})]})}function d(t={}){const{wrapper:e}={...(0,o.M)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(u,{...t})}):u(t)}},540:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=i(7624),o=i(2172),r=i(3480),s=i(964);const l={title:"Implement an Activity that Calculates a Logarithm",description:"VertiGIS Studio Workflow - Implement a custom activity for VertiGIS Studio Workflow Server that calculates the logarithm of a number"},a=void 0,c={id:"workflow/tutorial-server-calculate-logarithm-activity",title:"Implement an Activity that Calculates a Logarithm",description:"VertiGIS Studio Workflow - Implement a custom activity for VertiGIS Studio Workflow Server that calculates the logarithm of a number",source:"@site/docs/workflow/tutorial-server-calculate-logarithm-activity.mdx",sourceDirName:"workflow",slug:"/workflow/tutorial-server-calculate-logarithm-activity",permalink:"/docs/workflow/tutorial-server-calculate-logarithm-activity",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/workflow/tutorial-server-calculate-logarithm-activity.mdx",tags:[],version:"current",frontMatter:{title:"Implement an Activity that Calculates a Logarithm",description:"VertiGIS Studio Workflow - Implement a custom activity for VertiGIS Studio Workflow Server that calculates the logarithm of a number"},sidebar:"workflow",previous:{title:"Reference a Third Party Library",permalink:"/docs/workflow/sdk-server-reference-third-party-library"}},u={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Set up the Activity Skeleton",id:"set-up-the-activity-skeleton",level:2},{value:"Register the Activity with an Assembly Attribute",id:"register-the-activity-with-an-assembly-attribute",level:2},{value:"Implement the Custom Activity",id:"implement-the-custom-activity",level:2},{value:"Deploy the Activity",id:"deploy-the-activity",level:2},{value:"Test your Activity",id:"test-your-activity",level:2}];function h(t){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.M)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.p,{children:["Implementing a custom ",(0,n.jsx)(e.a,{href:"/docs/workflow/key-concepts#activities",children:"activity"})," allows you to build a reusable, completely custom behavior to augment the ",(0,n.jsx)(e.a,{href:"https://docs.vertigisstudio.com/workflow/latest/help/Default.htm#wf5/help/activity-reference.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____0",children:"existing activities"})," that come with VertiGIS Studio Workflow."]}),"\n",(0,n.jsx)(e.p,{children:"In this article, you will learn how to create a custom activity that calculates the logarithm of a number with a given base."}),"\n",(0,n.jsx)(e.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(r.default,{}),"\n",(0,n.jsx)(e.h2,{id:"set-up-the-activity-skeleton",children:"Set up the Activity Skeleton"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsxs)(e.li,{children:["Create a new file ",(0,n.jsx)(e.code,{children:"CalculateLog.cs"})," in the project."]}),"\n",(0,n.jsxs)(e.li,{children:["Add a new skeleton workflow activity that implements ",(0,n.jsx)(e.code,{children:"IActivityHandler"}),"."]}),"\n"]}),"\n",(0,n.jsx)(e.admonition,{type:"tip",children:(0,n.jsxs)(e.p,{children:["Use a unique prefix on the ",(0,n.jsx)(e.code,{children:"Action"})," property to avoid it conflicting with someone else's custom activities."]})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-cs",metastring:'title="YourProjectName/CalculateLog.cs"',children:'using VertiGIS.Workflow.Runtime;\nusing System.Collections.Generic;\nusing System.Threading.Tasks;\n\nnamespace App1.Workflow\n{\n    public class CalculateLog : IActivityHandler\n    {\n        public static string Action { get; } = "uuid:<uuid>::CalculateLog";\n\n        public Task<IDictionary<string, object>> Execute(IDictionary<string, object> inputs, IActivityContext context)\n        {\n            return Task.FromResult((IDictionary<string, object>)new Dictionary<string, object>());\n        }\n    }\n}\n'})}),"\n",(0,n.jsx)(e.h2,{id:"register-the-activity-with-an-assembly-attribute",children:"Register the Activity with an Assembly Attribute"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsxs)(e.li,{children:["Create a new file, ",(0,n.jsx)(e.code,{children:"Properties\\AssemblyInfo.cs"})]}),"\n",(0,n.jsxs)(e.li,{children:["Add the custom VertiGIS Studio Workflow attribute to ",(0,n.jsx)(e.code,{children:"AssemblyInfo.cs"}),":"]}),"\n"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-cs",metastring:'title="YourProjectName/Properties/AssemblyInfo.cs"',children:"[assembly: VertiGIS.Workflow.Runtime.WorkflowActivities]`\n"})}),"\n",(0,n.jsx)(e.p,{children:"This registers the assembly to a namespace that VertiGIS Studio Workflow Server can discover."}),"\n",(0,n.jsx)(e.admonition,{type:"note",children:(0,n.jsxs)(e.p,{children:["By convention, assembly attributes are typically added to a file called ",(0,n.jsx)(e.code,{children:'"Properties\\AssemblyInfo.cs"'}),", but they can be added to any code file."]})}),"\n",(0,n.jsx)(e.h2,{id:"implement-the-custom-activity",children:"Implement the Custom Activity"}),"\n",(0,n.jsx)(e.p,{children:"We now have a empty activity that VertiGIS Studio Workflow Server can use that takes no inputs and produces no outputs. By changing the inputs, outputs, and execute logic, you can create your own custom activity that calculates the logarithm of a number."}),"\n",(0,n.jsx)(e.p,{children:"First, let's change the execute logic to parse inputs that make sense for a logarithm activity."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-cs",metastring:'title="YourProjectName/CalculateLog.cs"',children:'using VertiGIS.Workflow.Runtime;\nusing System;\nusing System.Collections.Generic;\nusing System.Threading.Tasks;\n\nnamespace App1.Workflow\n{\n    public class CalculateLog : IActivityHandler\n    {\n        public const string Action = "uuid:<uuid>::CalculateLog";\n\n        public Task<IDictionary<string, object>> Execute(IDictionary<string, object> inputs, IActivityContext context)\n        {\n            // highlight-start\n            double? logBase = null;\n            if (inputs.ContainsKey("base"))\n            {\n                logBase = inputs["base"] as double?;\n            }\n            var value = (double)inputs["value"];\n            // highlight-end\n\n            return Task.FromResult((IDictionary<string, object>)new Dictionary<string, object>());\n        }\n    }\n}\n'})}),"\n",(0,n.jsxs)(e.p,{children:["Next, modify the ",(0,n.jsx)(e.code,{children:"Execute"})," method of the activity to calculate the logarithm of a number given an optional base"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-cs",metastring:'title="YourProjectName/CalculateLog.cs"',children:'using VertiGIS.Workflow.Runtime;\nusing System;\nusing System.Collections.Generic;\nusing System.Threading.Tasks;\n\nnamespace App1.Workflow\n{\n    public class CalculateLog : IActivityHandler\n    {\n        public const string Action = "uuid:<uuid>::CalculateLog";\n\n        public Task<IDictionary<string, object>> Execute(IDictionary<string, object> inputs, IActivityContext context)\n        {\n            double? logBase = null;\n            if (inputs.ContainsKey("base"))\n            {\n                logBase = inputs["base"] as double?;\n            }\n            var value = (double)inputs["value"];\n\n            // highlight-start\n            double logResult;\n            if (logBase != null)\n            {\n                logResult = Math.Log(value, (double)logBase);\n            }\n            else\n            {\n                logResult = Math.Log(value);\n            }\n\n            return Task.FromResult((IDictionary<string, object>)new Dictionary<string, object>()\n            {\n                ["result"] = logResult\n            });\n            // highlight-end\n        }\n    }\n}\n'})}),"\n",(0,n.jsx)(e.h2,{id:"deploy-the-activity",children:"Deploy the Activity"}),"\n",(0,n.jsxs)(e.p,{children:["Follow the instructions to ",(0,n.jsx)(e.a,{href:"/docs/workflow/sdk-server-overview#deploying-vertigis-studio-workflow-server-activities",children:"deploy VertiGIS Studio Workflow Server activities"}),"."]}),"\n",(0,n.jsx)(e.h2,{id:"test-your-activity",children:"Test your Activity"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.a,{href:"https://docs.vertigisstudio.com/workflow/latest/help/Default.htm#wf5/help/server-workflows.htm",children:"Server workflows"})," that run on your VertiGIS Studio Workflow Server deployment can now run this custom activity."]}),"\n",(0,n.jsx)(e.admonition,{type:"tip",children:(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.a,{href:"/docs/workflow/sdk-net-register-activities",children:"Registering .NET activity stubs"})," provides a user friendly interface for your custom activities in VertiGIS Studio Workflow Designer."]})}),"\n",(0,n.jsxs)(e.p,{children:["You can run the custom activity by referencing it by action with ",(0,n.jsxs)(e.a,{href:"https://docs.vertigisstudio.com/workflow/latest/help/Default.htm#wf5/help/activities/run-activity.htm",children:["the ",(0,n.jsx)(e.code,{children:"RunActivity"})," activity"]}),"."]}),"\n",(0,n.jsx)(e.admonition,{type:"note",children:(0,n.jsxs)("p",{children:[(0,n.jsxs)(e.p,{children:["You can"," "]}),(0,n.jsx)("a",{href:(0,s.c)("workflows/server-calculate-logarithm-activity.json"),download:"calculate-log-activity.json",target:"_blank",children:(0,n.jsx)(e.p,{children:"download this demo server workflow"})})," ",(0,n.jsx)(e.p,{children:"that runs the custom activity and"}),(0,n.jsxs)("a",{href:"https://docs.vertigisstudio.com/workflow/latest/help/Default.htm#wf5/help/import-export-workflows.htm",target:"_blank",children:[" ",(0,n.jsxs)(e.p,{children:["import it into the VertiGIS Studio Workflow Designer."," "]})]})]})})]})}function p(t={}){const{wrapper:e}={...(0,o.M)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(h,{...t})}):h(t)}},2172:(t,e,i)=>{i.d(e,{I:()=>l,M:()=>s});var n=i(1504);const o={},r=n.createContext(o);function s(t){const e=n.useContext(r);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:s(t.components),n.createElement(r.Provider,{value:e},t.children)}}}]);