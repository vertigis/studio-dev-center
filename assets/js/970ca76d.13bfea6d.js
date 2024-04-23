"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[1966,1204],{4728:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=r(7624),n=r(2172),o=(r(964),r(7776));const s={title:"Key Concepts",description:"VertiGIS Studio Reporting - Learn about key concepts of VertiGIS Studio Reporting"},a=void 0,c={id:"reporting/key-concepts",title:"Key Concepts",description:"VertiGIS Studio Reporting - Learn about key concepts of VertiGIS Studio Reporting",source:"@site/docs/reporting/key-concepts.mdx",sourceDirName:"reporting",slug:"/reporting/key-concepts",permalink:"/docs/reporting/key-concepts",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/reporting/key-concepts.mdx",tags:[],version:"current",frontMatter:{title:"Key Concepts",description:"VertiGIS Studio Reporting - Learn about key concepts of VertiGIS Studio Reporting"},sidebar:"reporting",previous:{title:"Overview",permalink:"/docs/reporting/overview"},next:{title:"SDK Overview",permalink:"/docs/reporting/sdk-overview"}},p={},d=[...o.toc,{value:"Reports",id:"reports",level:2},{value:"VertiGIS Studio Report Designer",id:"vertigis-studio-report-designer",level:2},{value:"VertiGIS Studio Reporting Service",id:"vertigis-studio-reporting-service",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,n.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.default,{}),"\n",(0,i.jsx)(t.h2,{id:"reports",children:"Reports"}),"\n",(0,i.jsx)(t.p,{children:"A report is a formatted presentation of a particular type of information. VertiGIS Studio Reporting specializes in presenting data and images related to web maps."}),"\n",(0,i.jsx)(t.p,{children:"Reports are designed by report authors (administrators) using a web-based tool called VertiGIS Studio Report Designer. They are saved to the VertiGIS Studio Reporting service, along with an item in the content area of the author's ArcGIS account. To allow users to run a report, the author shares the ArcGIS item with them. End users use the reports designed by the author to create on-demand, print-ready reports about maps and their features."}),"\n",(0,i.jsx)(t.p,{children:"End users run reports from web applications that the author has configured to host the reports (host applications). Alternatively, a report can be run using the VertiGIS Studio Reporting REST API. The output report is a PDF."}),"\n",(0,i.jsx)(t.h2,{id:"vertigis-studio-report-designer",children:"VertiGIS Studio Report Designer"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://apps.vertigisstudio.com/reporting/designer/",children:"VertiGIS Studio Report Designer"})," provides an extensive suite of tools for laying out reports, specifying the data that you want to include, and presenting the data using charts, tables, and a wide variety of other configurable elements. Organizations can sign into the cloud-hosted report designer, or they can host it themselves on their own web server. They can then author as many report templates as their application requirements demand and save them into ArcGIS Online or Portal for ArcGIS as items. Sharing reports with end users allows them to create on-demand, print-ready PDF reports about maps and features, using data from the user's current session."]}),"\n",(0,i.jsx)(t.p,{children:"Report Designer has a built-in preview environment for running reports. Using the preview is the quickest way to test a report while you are designing it."}),"\n",(0,i.jsx)(t.h2,{id:"vertigis-studio-reporting-service",children:"VertiGIS Studio Reporting Service"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://apps.vertigisstudio.com/reporting/service/",children:"VertiGIS Studio Reporting REST API"})," can be used to asynchronously run a report, watch for report completion and download the completed report as a PDF."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Prior to running a report, you must create a new report template using ",(0,i.jsx)(t.a,{href:"https://apps.vertigisstudio.com/reporting/designer/",children:"VertiGIS Studio Report Designer"}),"."]})}),"\n",(0,i.jsx)(t.p,{children:"The basic steps for running a report are:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Obtain a run token from the ",(0,i.jsx)(t.a,{href:"https://apps.vertigisstudio.com/reporting/service/specification/#post-/auth/token/run",children:"/auth/token/run"})," endpoint."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Only required if the report is secured or accesses secured content"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Run the report with a request to ",(0,i.jsx)(t.a,{href:"https://apps.vertigisstudio.com/reporting/service/specification/#post-/job/run",children:"/job/run"}),"."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The request body requires a template object which consists of a ",(0,i.jsx)(t.code,{children:"portalUrl"})," and ",(0,i.jsx)(t.code,{children:"itemid"}),". An optional array of ",(0,i.jsx)(t.code,{children:"parameters"})," may also be passed to the report."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n    "template": {\n        "itemid": "5a810f3ac13454d6bfd2ac22ed0cc4b7",\n        "portalUrl": "https://arcgis.com"\n    },\n    "parameters": [\n        {\n            "name": "Title",\n            "containsMultipleValues": false,\n            "value": "This is a title"\n        },\n        {\n            "name": "featureIds",\n            "containsMultipleValues": true,\n            "values": [1, 2, 3]\n        }\n    ]\n}\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Optional: Include an Authorization header with the token acquired in step 1"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"Authorization: Bearer eyJhbGciOiJzI1123sImtpZCI6IiMTc2NDQ5Y2ZkMTQwNTJiNlODA1YTlhMzV...\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Use the ticket received in response to the run request to watch for completion of the report via a websocket or polling strategy at ",(0,i.jsx)(t.a,{href:"https://apps.vertigisstudio.com/reporting/service/specification/#get-/job/artifacts",children:"/job/artifacts"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Use the ticket from the run request and the tag from the artifacts request (step 3) to download the completed report from ",(0,i.jsx)(t.a,{href:"https://apps.vertigisstudio.com/reporting/service/specification/#get-/job/result",children:"/job/result"}),"."]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},7776:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var i=r(7624),n=r(2172);const o={},s=void 0,a={id:"reporting/snippets/designer-callout",title:"designer-callout",description:"The VertiGIS Studio Report Designer has an extensive suite of tools for laying out reports, specifying the data that you want to include, and presenting the data using charts, tables, and other configurable elements.",source:"@site/docs/reporting/snippets/designer-callout.mdx",sourceDirName:"reporting/snippets",slug:"/reporting/snippets/designer-callout",permalink:"/docs/reporting/snippets/designer-callout",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/reporting/snippets/designer-callout.mdx",tags:[],version:"current",frontMatter:{}},c={},p=[];function d(e){const t={a:"a",admonition:"admonition",p:"p",...(0,n.M)(),...e.components};return(0,i.jsx)(t.admonition,{title:"Have you explored the VertiGIS Studio Report Designer?",type:"note",children:(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://apps.vertigisstudio.com/reporting/designer/",children:"VertiGIS Studio Report Designer"})," has an extensive suite of tools for laying out reports, specifying the data that you want to include, and presenting the data using charts, tables, and other configurable elements."]})})}function l(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},2172:(e,t,r)=>{r.d(t,{I:()=>a,M:()=>s});var i=r(1504);const n={},o=i.createContext(n);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);