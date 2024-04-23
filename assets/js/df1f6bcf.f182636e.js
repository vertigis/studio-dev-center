"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[7124,3988],{4676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(7624),r=n(2172);const i={},l=void 0,s={id:"workflow/snippets/prereqs-web",title:"prereqs-web",description:"Follow the instructions in the Web Applications SDK page to set up your development environment.",source:"@site/docs/workflow/snippets/prereqs-web.mdx",sourceDirName:"workflow/snippets",slug:"/workflow/snippets/prereqs-web",permalink:"/docs/workflow/snippets/prereqs-web",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/workflow/snippets/prereqs-web.mdx",tags:[],version:"current",frontMatter:{}},a={},c=[];function d(e){const t={a:"a",admonition:"admonition",p:"p",...(0,r.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Follow the instructions in the ",(0,o.jsx)(t.a,{href:"/docs/workflow/sdk-web-overview",children:"Web Applications SDK"})," page to set up your development environment."]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["A working knowledge of ",(0,o.jsx)(t.a,{href:"https://www.typescriptlang.org/",children:"TypeScript"})," is recommended before extending Workflow for web-based hosts."]})})]})}function h(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},2680:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var o=n(7624),r=n(2172),i=n(964),l=n(4676);const s={title:"Implement a Captcha Custom Form Element using a Third Party Library",description:"VertiGIS Studio Workflow - Implement a captcha form element for web applications using a third party library"},a=void 0,c={id:"workflow/tutorial-web-implement-third-party-captcha-form-element",title:"Implement a Captcha Custom Form Element using a Third Party Library",description:"VertiGIS Studio Workflow - Implement a captcha form element for web applications using a third party library",source:"@site/docs/workflow/tutorial-web-implement-third-party-captcha-form-element.mdx",sourceDirName:"workflow",slug:"/workflow/tutorial-web-implement-third-party-captcha-form-element",permalink:"/docs/workflow/tutorial-web-implement-third-party-captcha-form-element",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/workflow/tutorial-web-implement-third-party-captcha-form-element.mdx",tags:[],version:"current",frontMatter:{title:"Implement a Captcha Custom Form Element using a Third Party Library",description:"VertiGIS Studio Workflow - Implement a captcha form element for web applications using a third party library"},sidebar:"workflow",previous:{title:"Implement a Signature Block Custom Form Element using a Third Party Library",permalink:"/docs/workflow/tutorial-web-implement-third-party-signature-block-form-element"},next:{title:"Implement a QR Code Custom Form Element using a Third Party Library",permalink:"/docs/workflow/tutorial-web-implement-third-party-qr-code-form-element"}},d={},h=[{value:"Prerequisites",id:"prerequisites",level:2},...l.toc,{value:"Overview",id:"overview",level:2},{value:"Google reCAPTCHA",id:"google-recaptcha",level:2},{value:"Adding Dependencies",id:"adding-dependencies",level:2},{value:"Set up Custom Form Element Skeleton",id:"set-up-custom-form-element-skeleton",level:2},{value:"Implement the Custom Form Element",id:"implement-the-custom-form-element",level:2},{value:"Deploy the Form Element",id:"deploy-the-form-element",level:2},{value:"Test the Form Element",id:"test-the-form-element",level:2}];function m(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Implementing a custom ",(0,o.jsx)(t.a,{href:"/docs/workflow/key-concepts#form-elements",children:"form element"})," allows you to augment the existing ",(0,o.jsx)(t.a,{href:"https://docs.vertigisstudio.com/workflow/latest/help/Default.htm#wf5/help/form-elements/auto-complete.htm%3FTocPath%3DForms%7CForm%2520Element%2520Reference%7C_____0",children:"form elements that come with VertiGIS Studio Workflow"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["This article will walk you through creating a form element that uses the ",(0,o.jsx)(t.a,{href:"https://github.com/dozoisch/react-google-recaptcha",children:"react-google-recaptcha"})," component to implement a captcha to distinguish humans from bots."]}),"\n",(0,o.jsx)("img",{src:(0,i.c)("img/workflow-web-custom-captcha.png")}),"\n",(0,o.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsx)(l.default,{}),"\n",(0,o.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(t.p,{children:"Implementing a captcha custom form element for web applications using a third party library consists of the following steps:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Obtaining a Google reCAPTCHA v2 Site Key"}),"\n",(0,o.jsx)(t.li,{children:"Adding third party library dependencies to your project."}),"\n",(0,o.jsx)(t.li,{children:"Creating the custom form element."}),"\n",(0,o.jsx)(t.li,{children:"Implementing the custom form element using the third party library."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"google-recaptcha",children:"Google reCAPTCHA"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"https://github.com/dozoisch/react-google-recaptcha",children:"react-google-recaptcha"})," component uses reCAPTCHA technology from Google."]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Open ",(0,o.jsx)(t.a,{href:"https://www.google.com/recaptcha/about/",children:"Google reCAPTCHA"})," in a web browser."]}),"\n",(0,o.jsx)(t.li,{children:"Sign in with your Google account."}),"\n",(0,o.jsx)(t.li,{children:"Register a new Site."}),"\n",(0,o.jsxs)(t.li,{children:["Select the ",(0,o.jsx)(t.code,{children:"reCAPTCHA v2"})," type."]}),"\n",(0,o.jsxs)(t.li,{children:["Select the ",(0,o.jsx)(t.code,{children:'"I\'m not a robot" tickbox'})," option."]}),"\n",(0,o.jsx)(t.li,{children:"Add the domain(s) where your web application is hosted."}),"\n",(0,o.jsxs)(t.li,{children:["This generates a ",(0,o.jsx)(t.code,{children:"Site Key"}),". Copy this value, it will be required later."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"adding-dependencies",children:"Adding Dependencies"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Run ",(0,o.jsx)(t.code,{children:"npm install react-google-recaptcha"})," in the terminal to install the third party ",(0,o.jsx)(t.a,{href:"https://github.com/dozoisch/react-google-recaptcha",children:"react-google-recaptcha"})," component."]}),"\n",(0,o.jsxs)(t.li,{children:["Run ",(0,o.jsx)(t.code,{children:"npm install @types/react-google-recaptcha"})," in the terminal to install type information for the third party component. This is optional, but it provides an improved developer experience."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"set-up-custom-form-element-skeleton",children:"Set up Custom Form Element Skeleton"}),"\n",(0,o.jsx)(t.p,{children:"To create a new form element:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Open the Workflow activity SDK in Visual Studio Code."}),"\n",(0,o.jsxs)(t.li,{children:["Run ",(0,o.jsx)(t.code,{children:"npm run generate"})," in the terminal."]}),"\n",(0,o.jsxs)(t.li,{children:["When prompted, select ",(0,o.jsx)(t.code,{children:"Form Element"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["Enter the name of the form element you would like to create and press ",(0,o.jsx)(t.code,{children:"Enter"}),". For example, ",(0,o.jsx)(t.code,{children:"Captcha"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["Open the newly created ",(0,o.jsx)(t.code,{children:"src/elements/Captcha.tsx"})," file."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"implement-the-custom-form-element",children:"Implement the Custom Form Element"}),"\n",(0,o.jsxs)(t.p,{children:["Modify the skeleton form element implementation in ",(0,o.jsx)(t.code,{children:"src/elements/Captcha.tsx"})," to match the following example."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",metastring:'title="src/elements/Captcha.tsx"',children:'import * as React from "react";\nimport ReCAPTCHA from "react-google-recaptcha";\nimport {\n    FormElementProps,\n    FormElementRegistration,\n} from "@vertigis/workflow";\n\ninterface CaptchaProps extends FormElementProps<string | undefined> {}\n\n/**\n * @displayName Captcha\n * @description A simple React Component that displays a captcha input.\n * @param props The props that will be provided by the Workflow runtime.\n */\nfunction Captcha(props: CaptchaProps): React.ReactElement {\n    const { setValue } = props;\n\n    const handleChange = (token: string | null) => {\n        setValue(token || undefined);\n    };\n\n    const handleExpired = () => {\n        setValue(undefined);\n    };\n\n    return (\n        <ReCAPTCHA\n            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"\n            onChange={handleChange}\n            onExpired={handleExpired}\n        />\n    );\n}\n\nconst CaptchaElementRegistration: FormElementRegistration<CaptchaProps> =\n    {\n        component: Captcha,\n        getInitialProperties: () => ({ value: undefined }),\n        id: "Captcha",\n    };\n\nexport default CaptchaElementRegistration;\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Update the ",(0,o.jsx)(t.code,{children:"sitekey"})," on the ",(0,o.jsx)(t.code,{children:"<ReCAPTCHA>"})," element to use your own site key."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:'return (\n    <ReCAPTCHA\n        // highlight-next-line\n        sitekey="YOUR-SITE-KEY-GOES-HERE"\n        onChange={handleChange}\n        onExpired={handleExpired}\n    />\n);\n'})}),"\n",(0,o.jsx)(t.admonition,{title:"Important",type:"info",children:(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"sitekey"})," included in this tutorial is for demonstration purposes only. It is watermarked and will not produce valid captcha results. You must use your own site key."]})}),"\n",(0,o.jsx)(t.h2,{id:"deploy-the-form-element",children:"Deploy the Form Element"}),"\n",(0,o.jsxs)(t.p,{children:["Follow the instructions to ",(0,o.jsx)(t.a,{href:"/docs/workflow/sdk-web-overview#deployment",children:"build and deploy the activity pack"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"test-the-form-element",children:"Test the Form Element"}),"\n",(0,o.jsxs)(t.p,{children:["Once your activity pack is hosted and registered, your ",(0,o.jsx)(t.code,{children:"Captcha"})," custom form element should appear in the form element toolbox in VertiGIS Studio Workflow Designer alongside the built-in form elements."]}),"\n",(0,o.jsx)(t.p,{children:"To use your custom form element in a workflow:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Select the ",(0,o.jsx)(t.code,{children:"Display Form"})," activity that you want to include your form element in."]}),"\n",(0,o.jsxs)(t.li,{children:["Locate the ",(0,o.jsx)(t.code,{children:"Captcha"})," form element in the toolbox and drag it onto the form."]}),"\n",(0,o.jsxs)(t.li,{children:["Alternatively:","\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Add a ",(0,o.jsx)(t.code,{children:"Custom"})," form element to the form."]}),"\n",(0,o.jsxs)(t.li,{children:["Set the ",(0,o.jsx)(t.code,{children:"Custom Type"})," property of the ",(0,o.jsx)(t.code,{children:"Custom"})," form element to ",(0,o.jsx)(t.code,{children:"Captcha"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.li,{children:"Test your workflow."}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},2172:(e,t,n)=>{n.d(t,{I:()=>s,M:()=>l});var o=n(1504);const r={},i=o.createContext(r);function l(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);