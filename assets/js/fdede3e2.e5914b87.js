"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[8744],{3668:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=i(7624),n=i(2172);const r={title:"Registering .NET Activities with VertiGIS Studio Workflow Designer",description:"VertiGIS Studio Workflow - Registering .NET workflow activities with VertiGIS Studio Workflow Designer"},a=void 0,s={id:"workflow/sdk-net-register-activities",title:"Registering .NET Activities with VertiGIS Studio Workflow Designer",description:"VertiGIS Studio Workflow - Registering .NET workflow activities with VertiGIS Studio Workflow Designer",source:"@site/docs/workflow/sdk-net-register-activities.mdx",sourceDirName:"workflow",slug:"/workflow/sdk-net-register-activities",permalink:"/docs/workflow/sdk-net-register-activities",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/workflow/sdk-net-register-activities.mdx",tags:[],version:"current",frontMatter:{title:"Registering .NET Activities with VertiGIS Studio Workflow Designer",description:"VertiGIS Studio Workflow - Registering .NET workflow activities with VertiGIS Studio Workflow Designer"},sidebar:"workflow",previous:{title:"SDK Overview",permalink:"/docs/workflow/sdk-net-overview"},next:{title:"Integrating the ArcGIS Runtime SDK for .NET",permalink:"/docs/workflow/sdk-net-integrating-the-arcgis-api"}},c={},l=[{value:"Implement a TypeScript Activity Pack with Stub Activities",id:"implement-a-typescript-activity-pack-with-stub-activities",level:2},{value:"Create a new Activity Pack",id:"create-a-new-activity-pack",level:3},{value:"Stub out the Activity Metadata",id:"stub-out-the-activity-metadata",level:3}];function d(t){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,n.M)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["VertiGIS Studio Workflow ",(0,o.jsx)(e.a,{href:"/docs/workflow/key-concepts#activities",children:"activities"})," can be implemented in either TypeScript or C#, depending on the target platform. For ",(0,o.jsx)(e.a,{href:"/docs/workflow/tutorial-web-calculate-logarithm-activity",children:"custom activities implemented in TypeScript"}),", the registration of the workflow activity implementation is done alongside the VertiGIS Studio Workflow Designer activity definition when the ",(0,o.jsx)(e.a,{href:"/docs/workflow/key-concepts#activity-packs",children:"activity pack"})," is registered. However, with .NET activities implemented for VertiGIS Studio Mobile or ",(0,o.jsx)(e.a,{href:"https://docs.vertigisstudio.com/workflow/latest/help/Default.htm#wf5/help/server-workflows.htm%3FTocPath%3DServer%2520Workflows%7C_____0",children:"VertiGIS Studio Workflow Server"}),", the implementation is defined on the host platform (.NET), while the VertiGIS Studio Workflow Designer activity definition must be defined in an activity pack (TypeScript)."]}),"\n",(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsxs)(e.p,{children:["If no VertiGIS Studio Workflow Designer activity definition is provided for a custom activity implemented for VertiGIS Studio Mobile, VertiGIS Studio Desktop or VertiGIS Studio Workflow Server, the activity will not show up in VertiGIS Studio Workflow Designer and must be run using ",(0,o.jsx)(e.a,{href:"https://docs.vertigisstudio.com/workflow/latest/help/Default.htm#wf5/help/activities/run-activity.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____167",children:(0,o.jsx)(e.code,{children:"RunActivity"})}),"."]})}),"\n",(0,o.jsxs)(e.p,{children:["This article covers how to create an activity pack to register VertiGIS Studio Workflow Designer activity definitions for custom activities implemented in ",(0,o.jsx)(e.a,{href:"/docs/workflow/tutorial-mobile-calculate-logarithm-activity",children:"VertiGIS Studio Mobile"}),", ",(0,o.jsx)(e.a,{href:"/docs/workflow/sdk-desktop-create-activity",children:"VertiGIS Studio Desktop"})," or ",(0,o.jsx)(e.a,{href:"/docs/workflow/tutorial-server-calculate-logarithm-activity",children:"VertiGIS Studio Workflow Server"}),"."]}),"\n",(0,o.jsx)(e.h2,{id:"implement-a-typescript-activity-pack-with-stub-activities",children:"Implement a TypeScript Activity Pack with Stub Activities"}),"\n",(0,o.jsx)(e.p,{children:"The idea behind creating activity definitions for VertiGIS Studio Workflow Designer is that every activity implemented in .NET has a corresponding stub activity with the metadata, but no execution body, in a TypeScript activity pack."}),"\n",(0,o.jsxs)(e.p,{children:["Let's take the VertiGIS Studio Mobile ",(0,o.jsx)(e.a,{href:"/docs/workflow/tutorial-mobile-calculate-logarithm-activity",children:"custom logarithm activity"})," for example."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-cs",metastring:'title="App1/App1/CustomActivity.cs"',children:'using VertiGIS.Workflow.Runtime;\nusing System;\nusing System.Collections.Generic;\nusing System.Threading.Tasks;\n\nnamespace App1.Workflow\n{\n    public class CalculateLog : IActivityHandler\n    {\n        public const string Action = "uuid:<uuid>::CalculateLog";\n\n        public Task<IDictionary<string, object>> Execute(IDictionary<string, object> inputs, IActivityContext context)\n        {\n            double? logBase = null;\n            if (inputs.ContainsKey("base")) {\n                var logBase = inputs["base"];\n            }\n            var value = (double)inputs["value"];\n\n            double logResult;\n            if(logBase != null)\n            {\n                logResult = Math.Log(value, (double)logBase);\n            } else\n            {\n                logResult = Math.Log(value);\n            }\n\n            return Task.FromResult((IDictionary<string, object>)new Dictionary<string, object>()\n            {\n                ["result"] = logResult\n            });\n        }\n    }\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"This activity will need a TypeScript stub that defines its input and output types and descriptions, specifies the runtime environments it supports, and an activity description."}),"\n",(0,o.jsx)(e.h3,{id:"create-a-new-activity-pack",children:"Create a new Activity Pack"}),"\n",(0,o.jsxs)(e.p,{children:["Follow the instructions in ",(0,o.jsx)(e.a,{href:"/docs/workflow/tutorial-web-calculate-logarithm-activity",children:"Implement a Custom Activity for Web Applications"})," up to ",(0,o.jsx)(e.a,{href:"/docs/workflow/tutorial-web-calculate-logarithm-activity#implement-the-activity",children:"Implement the Activity"}),". You will need to update the uuid value in ",(0,o.jsx)(e.code,{children:"uuid.js"})," of your activity pack to match the uuid of your .NET project."]}),"\n",(0,o.jsx)(e.h3,{id:"stub-out-the-activity-metadata",children:"Stub out the Activity Metadata"}),"\n",(0,o.jsx)(e.p,{children:"Stub out the appropriate metadata and type information for the .NET activity you are stubbing out. The execute body is left empty, as the implementation is defined in .NET using the VertiGIS Studio Mobile SDK or VertiGIS Studio Workflow for Server. In the case of the Logarithm activity, the stub might look like this."}),"\n",(0,o.jsx)(e.admonition,{title:"Important",type:"info",children:(0,o.jsxs)(e.p,{children:["By default the static ",(0,o.jsx)(e.code,{children:"action"})," property will be generated for you when you build the TypeScript activity pack. In the example below we've explicitly declared the static ",(0,o.jsx)(e.code,{children:"action"})," property to match the action name in the .NET implementation. If these two action names are not the same, the .NET workflow runtime will ",(0,o.jsx)(e.strong,{children:"not"})," be able to find the correct activity."]})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:'import type { IActivityHandler } from "@vertigis/workflow/IActivityHandler";\n\nexport interface CalculateLogInputs {\n    /**\n     * @description The base of the logarithm. Defaults to the natural log.\n     */\n    base?: number;\n\n    /**\n     * @description The number to calculate the logarithm for.\n     * @required\n     */\n    value: number;\n}\n\nexport interface CalculateLogOutputs {\n    /**\n     * @description The logarithm output.\n     */\n    result: number;\n}\n\n/**\n * @supportedApps GMV\n * @category Custom Activities\n * @description An activity that calculates the log of a number with the given base.\n */\nexport class CalculateLog implements IActivityHandler {\n    static action = "uuid:<uuid>::CalculateLog";\n\n    async execute(\n        inputs: CalculateLogInputs\n    ): Promise<CalculateLogOutputs> {\n        // The host application must implement this activity\n        throw new Error(\n            "Activity not implemented for this platform."\n        );\n    }\n}\n'})}),"\n",(0,o.jsxs)(e.p,{children:["The activity now has a friendly user interface in VertiGIS Studio Workflow Designer, that can be ",(0,o.jsx)(e.a,{href:"/docs/workflow/sdk-web-overview#sharing-the-activity-pack",children:"shared with other workflow authors"}),"."]})]})}function u(t={}){const{wrapper:e}={...(0,n.M)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(d,{...t})}):d(t)}},2172:(t,e,i)=>{i.d(e,{I:()=>s,M:()=>a});var o=i(1504);const n={},r=o.createContext(n);function a(t){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:a(t.components),o.createElement(r.Provider,{value:e},t.children)}}}]);