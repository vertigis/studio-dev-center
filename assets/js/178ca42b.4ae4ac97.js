"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=n.createContext({}),s=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,u=p["".concat(m,".").concat(f)]||p[f]||d[f]||l;return r?n.createElement(u,a(a({ref:t},c),{},{components:r})):n.createElement(u,a({ref:t},c))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=f;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5858:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(9960),o=r(7294),l=r(6010);const a={root:"root_Uwqo"};function i(e){let{title:t,description:r,link:i}=e;return o.createElement("div",{className:(0,l.Z)("card-demo",a.root)},o.createElement("div",{className:"card"},o.createElement("div",{className:"card__header"},o.createElement("h3",null,t)),o.createElement("div",{className:"card__body"},o.createElement("p",null,r)),o.createElement("div",{className:"card__footer"},o.createElement(n.Z,{className:"button button--secondary button--block",to:i},"Get Started"))))}},7467:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294);const o={root:"root_vxd5"};function l(e){let{children:t}=e;return n.createElement("div",{className:o.root},t)}},3869:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>w,frontMatter:()=>m,metadata:()=>c,toc:()=>d});var n=r(7462),o=(r(7294),r(3905)),l=r(4996),a=r(7467),i=r(5858);const m={title:"Create a Form Element",description:"VertiGIS Studio Workflow - Create a workflow form element for web applications"},s=void 0,c={unversionedId:"workflow/sdk-web-create-element",id:"workflow/sdk-web-create-element",title:"Create a Form Element",description:"VertiGIS Studio Workflow - Create a workflow form element for web applications",source:"@site/docs/workflow/sdk-web-create-element.mdx",sourceDirName:"workflow",slug:"/workflow/sdk-web-create-element",permalink:"/docs/workflow/sdk-web-create-element",draft:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/workflow/sdk-web-create-element.mdx",tags:[],version:"current",frontMatter:{title:"Create a Form Element",description:"VertiGIS Studio Workflow - Create a workflow form element for web applications"},sidebar:"workflow",previous:{title:"Create an Activity",permalink:"/docs/workflow/sdk-web-create-activity"},next:{title:"Activity Reference",permalink:"/docs/workflow/sdk-web-activity-reference"}},p={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a Form Element",id:"create-a-form-element",level:2},{value:"Registering Form Elements",id:"registering-form-elements",level:2},{value:"Using Form Elements",id:"using-form-elements",level:2},{value:"Deploy the Form Element",id:"deploy-the-form-element",level:2},{value:"Test the Form Element",id:"test-the-form-element",level:2},{value:"Next Steps",id:"next-steps",level:2}],f={toc:d},u="wrapper";function w(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article will walk you through creating a new workflow form element for web applications."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-web-overview#overview"},"Set up")," the VertiGIS Studio Workflow TypeScript SDK."),(0,o.kt)("h2",{id:"create-a-form-element"},"Create a Form Element"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open up a terminal shell in the SDK folder."),(0,o.kt)("li",{parentName:"ol"},"Run the command ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run generate")," and follow the instructions to create a new form element named ",(0,o.kt)("inlineCode",{parentName:"li"},"MyCustomElement"),". This script creates a custom form element skeleton that you can build on with your own custom logic. The script will perform the following operations:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Create a new form element ",(0,o.kt)("inlineCode",{parentName:"li"},".tsx")," file with the provided name in the ",(0,o.kt)("inlineCode",{parentName:"li"},"src/elements")," folder."),(0,o.kt)("li",{parentName:"ol"},"Populate the form element ",(0,o.kt)("inlineCode",{parentName:"li"},".tsx")," file from a form element template."),(0,o.kt)("li",{parentName:"ol"},"Exports the element in ",(0,o.kt)("inlineCode",{parentName:"li"},"src/index.ts")," to make it available for use.")))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"It's convention to use PascalCase for form element names. You can add multiple activities and form elements to the same project.")),(0,o.kt)("p",null,"In the VertiGIS Studio Workflow TypeScript SDK, form elements are represented by TypeScript React Components."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import * as React from "react";\nimport {\n    FormElementProps,\n    FormElementRegistration,\n} from "@vertigis/workflow";\n\ninterface DemoProps extends FormElementProps {}\n\nfunction Demo(props: DemoProps) {\n    return <div>Hello. I\'m a form element!</div>;\n}\n')),(0,o.kt)("h2",{id:"registering-form-elements"},"Registering Form Elements"),(0,o.kt)("p",null,"Form elements must be registered by exporting a registration object declaring your new element."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const DemoElementRegistration: FormElementRegistration<DemoProps> = {\n    component: Demo,\n    id: "Demo",\n};\n\nexport default DemoElementRegistration;\n')),(0,o.kt)("h2",{id:"using-form-elements"},"Using Form Elements"),(0,o.kt)("p",null,"Custom form elements can be used in a form through the special ",(0,o.kt)("a",{parentName:"p",href:"https://docs.vertigisstudio.com/workflow/latest/help/Default.htm#wf5/help/form-elements/custom.htm#Custom_Form_Elements%3FTocPath%3DForms%7CForm%2520Element%2520Reference%7CCustom%2520Form%2520Elements%7C_____0"},(0,o.kt)("em",{parentName:"a"},"Custom"))," form element. This form element displays custom form elements by referencing them by the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," they were registered with. Enter your element's ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," in the ",(0,o.kt)("em",{parentName:"p"},"Custom Type")," input."),(0,o.kt)("h2",{id:"deploy-the-form-element"},"Deploy the Form Element"),(0,o.kt)("p",null,"Follow the instructions to ",(0,o.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-web-overview#deployment"},"deploy the activity pack"),"."),(0,o.kt)("h2",{id:"test-the-form-element"},"Test the Form Element"),(0,o.kt)("p",null,"Now you can ",(0,o.kt)("a",{parentName:"p",href:"https://docs.vertigisstudio.com/workflow/latest/help/Default.htm#wf5/help/get-started.htm#Get_Started%3FTocPath%3DGet%2520Started%7C_____0"},"build a workflow")," that uses your new custom form element!"),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)(a.Z,{mdxType:"UseCaseContainer"},(0,o.kt)(i.Z,{title:"Implement a Star Rating Form Element",description:"Implement a custom star rating form element for web applications",link:(0,l.Z)("docs/workflow/tutorial-web-implement-star-rating-form-element"),mdxType:"UseCaseCard"}),(0,o.kt)(i.Z,{title:"Form Element Reference",description:"Learn more about implementing custom form elements",link:(0,l.Z)("docs/workflow/sdk-web-form-reference"),mdxType:"UseCaseCard"}),(0,o.kt)(i.Z,{title:"Implement a Custom Activity",description:"Implement a custom activity for web applications",link:(0,l.Z)("docs/workflow/sdk-web-create-activity"),mdxType:"UseCaseCard"}),(0,o.kt)(i.Z,{title:"Reference a Third Party Library",description:"Reference a third party library in web applications",link:(0,l.Z)("docs/workflow/sdk-web-reference-third-party-library"),mdxType:"UseCaseCard"})))}w.isMDXComponent=!0}}]);