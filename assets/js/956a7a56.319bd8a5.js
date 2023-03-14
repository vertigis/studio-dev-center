"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[798],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?n.createElement(h,i(i({ref:r},l),{},{components:t})):n.createElement(h,i({ref:r},l))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5034:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=t(7462),a=(t(7294),t(3905));const o={title:"Run a report from JavaScript",description:"VertiGIS Studio Reporting - JavaScript"},i=void 0,p={unversionedId:"reporting/sdk-js-overview",id:"reporting/sdk-js-overview",isDocsHomePage:!1,title:"Run a report from JavaScript",description:"VertiGIS Studio Reporting - JavaScript",source:"@site/docs/reporting/sdk-js-overview.mdx",sourceDirName:"reporting",slug:"/reporting/sdk-js-overview",permalink:"/docs/reporting/sdk-js-overview",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/reporting/sdk-js-overview.mdx",version:"current",frontMatter:{title:"Run a report from JavaScript",description:"VertiGIS Studio Reporting - JavaScript"},sidebar:"reporting",previous:{title:"SDK Overview",permalink:"/docs/reporting/sdk-overview"},next:{title:"Run a report from Python",permalink:"/docs/reporting/sdk-py-overview"}},s=[{value:"Requirements",id:"requirements",children:[]},{value:"Installing the package",id:"installing-the-package",children:[]},{value:"Generating a report",id:"generating-a-report",children:[]},{value:"Run a report from ArcGIS Online",id:"run-a-report-from-arcgis-online",children:[]},{value:"Run a report from ArcGIS Enterprise",id:"run-a-report-from-arcgis-enterprise",children:[]},{value:"Run a report with parameters",id:"run-a-report-with-parameters",children:[]},{value:"Run a secured report, or a report that accesses secured ArcGIS content",id:"run-a-secured-report-or-a-report-that-accesses-secured-arcgis-content",children:[]}],c={toc:s};function l({components:e,...r}){return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"VertiGIS Studio Reporting Client for JavaScript")," package provides an easy to use API for running reports."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The latest LTS version of ",(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"You can run ",(0,a.kt)("inlineCode",{parentName:"li"},"node -v")," in your terminal to check the version you have installed"))),(0,a.kt)("li",{parentName:"ul"},"A code editor of your choice. We recommend ",(0,a.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"Visual Studio Code"))),(0,a.kt)("h2",{id:"installing-the-package"},"Installing the package"),(0,a.kt)("p",null,"This package is published to ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@vertigis/reporting-client/"},"npm"),", and can be installed using ",(0,a.kt)("inlineCode",{parentName:"p"},"npm"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @vertigis/reporting-client\n")),(0,a.kt)("h2",{id:"generating-a-report"},"Generating a report"),(0,a.kt)("p",null,"The package exports a ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," async function that will return a URL to the report upon completion."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { run } from "@vertigis/reporting-client";\n\nconst url = await run("itemId", options?);\n')),(0,a.kt)("p",null,"Where:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"itemid")," is the ArcGIS item ID of the report you want to run. This is always required."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options?")," is an additional optional argument that describes how to run the report and what parameters to supply to it.")),(0,a.kt)("h2",{id:"run-a-report-from-arcgis-online"},"Run a report from ArcGIS Online"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const url = await run("itemId");\n')),(0,a.kt)("h2",{id:"run-a-report-from-arcgis-enterprise"},"Run a report from ArcGIS Enterprise"),(0,a.kt)("p",null,"To run a report from ArcGIS Enterprise you must provide the ",(0,a.kt)("inlineCode",{parentName:"p"},"portalUrl")," option."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const url = await run("itemId", {\n    portalUrl: "https://server.domain.com/portal",\n});\n')),(0,a.kt)("h2",{id:"run-a-report-with-parameters"},"Run a report with parameters"),(0,a.kt)("p",null,"To pass additional parameters a report you provide the ",(0,a.kt)("inlineCode",{parentName:"p"},"parameters")," option which is an object whose keys match the names of parameters that exist in the report."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const url = await run("itemId", {\n    parameters: {\n        Title: "My Title",\n        FeatureIds: [1, 2, 3],\n    },\n});\n')),(0,a.kt)("h2",{id:"run-a-secured-report-or-a-report-that-accesses-secured-arcgis-content"},"Run a secured report, or a report that accesses secured ArcGIS content"),(0,a.kt)("p",null,"To run a secured report, or a report that accesses secured ArcGIS content you must provide the ",(0,a.kt)("inlineCode",{parentName:"p"},"token")," option that specifies the ArcGIS access token of the user running the report. The token is required to access the report item as well as any secured resources, such as ArcGIS services, that provide data for the report."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const url = await run("itemId", {\n    token: "eyJhbGciOiJIUzI1Ni...",\n});\n')))}l.isMDXComponent=!0}}]);