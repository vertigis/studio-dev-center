"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[8446],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>g});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(t),m=a,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return t?n.createElement(g,i(i({ref:r},u),{},{components:t})):n.createElement(g,i({ref:r},u))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},200:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=t(7462),a=(t(7294),t(3905));const o={title:"Run a report from Python",description:"VertiGIS Studio Reporting - Python"},i=void 0,p={unversionedId:"reporting/sdk-py-overview",id:"reporting/sdk-py-overview",title:"Run a report from Python",description:"VertiGIS Studio Reporting - Python",source:"@site/docs/reporting/sdk-py-overview.mdx",sourceDirName:"reporting",slug:"/reporting/sdk-py-overview",permalink:"/docs/reporting/sdk-py-overview",draft:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/reporting/sdk-py-overview.mdx",tags:[],version:"current",frontMatter:{title:"Run a report from Python",description:"VertiGIS Studio Reporting - Python"},sidebar:"reporting",previous:{title:"Run a report from JavaScript",permalink:"/docs/reporting/sdk-js-overview"},next:{title:"Run a report from an ArcGIS Notebook",permalink:"/docs/reporting/tutorial-arcgis-notebook"}},l={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Installing the package",id:"installing-the-package",level:2},{value:"Generating a report",id:"generating-a-report",level:2},{value:"Run a report from ArcGIS Online",id:"run-a-report-from-arcgis-online",level:2},{value:"Run a report from ArcGIS Enterprise",id:"run-a-report-from-arcgis-enterprise",level:2},{value:"Run a report with parameters",id:"run-a-report-with-parameters",level:2},{value:"Run a secured report, or a report that accesses secured ArcGIS content",id:"run-a-secured-report-or-a-report-that-accesses-secured-arcgis-content",level:2}],u={toc:s},c="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(c,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"VertiGIS Studio Reporting Client for Python")," package provides an easy to use API for running reports."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Python 3.6 or later")),(0,a.kt)("h2",{id:"installing-the-package"},"Installing the package"),(0,a.kt)("p",null,"This package is published to ",(0,a.kt)("a",{parentName:"p",href:"https://pypi.org/project/geocortex-reporting-client/"},"PyPi"),", and can be installed using ",(0,a.kt)("inlineCode",{parentName:"p"},"pip"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install geocortex-reporting-client\n")),(0,a.kt)("h2",{id:"generating-a-report"},"Generating a report"),(0,a.kt)("p",null,"The package exports a ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," async function that will return a URL to the report upon completion."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'from geocortex.reporting.client import run\n\nurl = await run("itemid", [... other arguments])\n')),(0,a.kt)("p",null,"Where:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"itemid")," is the ArcGIS item ID of the report you want to run. This is always required."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[... other arguments]")," are additional optional arguments that describe how to run the report and what parameters to supply to it.")),(0,a.kt)("h2",{id:"run-a-report-from-arcgis-online"},"Run a report from ArcGIS Online"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'url = await run("itemId")\n')),(0,a.kt)("h2",{id:"run-a-report-from-arcgis-enterprise"},"Run a report from ArcGIS Enterprise"),(0,a.kt)("p",null,"To run a report from ArcGIS Enterprise you must provide the ",(0,a.kt)("inlineCode",{parentName:"p"},"portal_url")," argument."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'url = await run("itemId", portal_url="https://server.domain.com/portal")\n')),(0,a.kt)("h2",{id:"run-a-report-with-parameters"},"Run a report with parameters"),(0,a.kt)("p",null,"To pass additional parameters a report you provide additional keyword arguments that match the names of parameters that exist in the report."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'url = await run("itemId", Title="My Title", FeatureIds=[1, 2, 3])\n')),(0,a.kt)("h2",{id:"run-a-secured-report-or-a-report-that-accesses-secured-arcgis-content"},"Run a secured report, or a report that accesses secured ArcGIS content"),(0,a.kt)("p",null,"To run a secured report, or a report that accesses secured ArcGIS content you must provide the ",(0,a.kt)("inlineCode",{parentName:"p"},"token")," argument that specifies the ArcGIS access token of the user running the report. The token is required to access the report item as well as any secured resources, such as ArcGIS services, that provide data for the report."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'url = await run("itemId", token="eyJhbGciOiJIUzI1Ni...")\n')))}d.isMDXComponent=!0}}]);