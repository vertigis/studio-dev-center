"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[2976,3988],{4676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(7624),o=n(2172);const i={},l=void 0,s={id:"workflow/snippets/prereqs-web",title:"prereqs-web",description:"Follow the instructions in the Web Applications SDK page to set up your development environment.",source:"@site/docs/workflow/snippets/prereqs-web.mdx",sourceDirName:"workflow/snippets",slug:"/workflow/snippets/prereqs-web",permalink:"/docs/workflow/snippets/prereqs-web",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/workflow/snippets/prereqs-web.mdx",tags:[],version:"current",frontMatter:{}},a={},d=[];function c(e){const t={a:"a",admonition:"admonition",p:"p",...(0,o.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Follow the instructions in the ",(0,r.jsx)(t.a,{href:"/docs/workflow/sdk-web-overview",children:"Web Applications SDK"})," page to set up your development environment."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["A working knowledge of ",(0,r.jsx)(t.a,{href:"https://www.typescriptlang.org/",children:"TypeScript"})," is recommended before extending Workflow for web-based hosts."]})})]})}function m(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},60:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var r=n(7624),o=n(2172),i=n(964),l=n(4676);const s={title:"Implement a Signature Block Custom Form Element using a Third Party Library",description:"VertiGIS Studio Workflow - Implement a signature block form element for web applications using a third party library"},a=void 0,d={id:"workflow/tutorial-web-implement-third-party-signature-block-form-element",title:"Implement a Signature Block Custom Form Element using a Third Party Library",description:"VertiGIS Studio Workflow - Implement a signature block form element for web applications using a third party library",source:"@site/docs/workflow/tutorial-web-implement-third-party-signature-block-form-element.mdx",sourceDirName:"workflow",slug:"/workflow/tutorial-web-implement-third-party-signature-block-form-element",permalink:"/docs/workflow/tutorial-web-implement-third-party-signature-block-form-element",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/workflow/tutorial-web-implement-third-party-signature-block-form-element.mdx",tags:[],version:"current",frontMatter:{title:"Implement a Signature Block Custom Form Element using a Third Party Library",description:"VertiGIS Studio Workflow - Implement a signature block form element for web applications using a third party library"},sidebar:"workflow",previous:{title:"Implement a Star Rating Custom Form Element using a Third Party Library",permalink:"/docs/workflow/tutorial-web-implement-third-party-star-rating-form-element"},next:{title:"Implement a Captcha Custom Form Element using a Third Party Library",permalink:"/docs/workflow/tutorial-web-implement-third-party-captcha-form-element"}},c={},m=[{value:"Prerequisites",id:"prerequisites",level:2},...l.toc,{value:"Overview",id:"overview",level:2},{value:"Adding Dependencies",id:"adding-dependencies",level:2},{value:"Set up Custom Form Element Skeleton",id:"set-up-custom-form-element-skeleton",level:2},{value:"Implement the Custom Form Element",id:"implement-the-custom-form-element",level:2},{value:"Deploy the Form Element",id:"deploy-the-form-element",level:2},{value:"Test the Form Element",id:"test-the-form-element",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Implementing a custom ",(0,r.jsx)(t.a,{href:"/docs/workflow/key-concepts#form-elements",children:"form element"})," allows you to augment the existing ",(0,r.jsx)(t.a,{href:"https://docs.vertigisstudio.com/workflow/latest/help/auto-complete.html",children:"form elements that come with VertiGIS Studio Workflow"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["This article will walk you through creating a form element that uses the ",(0,r.jsx)(t.a,{href:"https://github.com/michaeldzjap/react-signature-pad-wrapper",children:"react-signature-pad-wrapper"})," component to capture a user's signature."]}),"\n",(0,r.jsx)("img",{src:(0,i.c)("img/workflow-web-custom-signature-block.png")}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(l.default,{}),"\n",(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(t.p,{children:"Implementing a signature block custom form element for web applications using a third party library consists of the following steps:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Adding third party library dependencies to your project."}),"\n",(0,r.jsx)(t.li,{children:"Creating the custom form element."}),"\n",(0,r.jsx)(t.li,{children:"Implementing the custom form element using the third party library."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"adding-dependencies",children:"Adding Dependencies"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Run ",(0,r.jsx)(t.code,{children:"npm install react-signature-pad-wrapper"})," in the terminal to install the third party ",(0,r.jsx)(t.a,{href:"https://github.com/michaeldzjap/react-signature-pad-wrapper",children:"react-signature-pad-wrapper"})," component."]}),"\n",(0,r.jsxs)(t.li,{children:["Run ",(0,r.jsx)(t.code,{children:"npm install @types/signature_pad"})," in the terminal to install type information for the third party component. This is optional, but it provides an improved developer experience."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"set-up-custom-form-element-skeleton",children:"Set up Custom Form Element Skeleton"}),"\n",(0,r.jsx)(t.p,{children:"To create a new form element:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Open the Workflow activity SDK in Visual Studio Code."}),"\n",(0,r.jsxs)(t.li,{children:["Run ",(0,r.jsx)(t.code,{children:"npm run generate"})," in the terminal."]}),"\n",(0,r.jsxs)(t.li,{children:["When prompted, select ",(0,r.jsx)(t.code,{children:"Form Element"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Enter the name of the form element you would like to create and press ",(0,r.jsx)(t.code,{children:"Enter"}),". For example, ",(0,r.jsx)(t.code,{children:"SignatureBlock"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Open the newly created ",(0,r.jsx)(t.code,{children:"src/elements/SignatureBlock.tsx"})," file."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"implement-the-custom-form-element",children:"Implement the Custom Form Element"}),"\n",(0,r.jsxs)(t.p,{children:["Modify the skeleton form element implementation in ",(0,r.jsx)(t.code,{children:"src/elements/SignatureBlock.tsx"})," to match the following example."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="src/elements/SignatureBlock.tsx"',children:'import React, { useRef } from "react";\nimport SignaturePadWrapper from "react-signature-pad-wrapper";\nimport SignaturePad, { SignaturePadOptions } from "signature_pad";\nimport {\n    FormElementProps,\n    FormElementRegistration,\n} from "@vertigis/workflow";\n\ninterface SignatureBlockProps\n    extends FormElementProps<string | undefined> {}\n\n/**\n * A simple React Component that displays a signature input.\n * @param props The props that will be provided by the Workflow runtime.\n */\nfunction SignatureBlock(\n    props: SignatureBlockProps\n): React.ReactElement {\n    const signaturePad = React.createRef<SignaturePadWrapper>();\n    const { setValue } = props;\n\n    const handleClear = () => {\n        // Clear the signature.\n        signaturePad.current?.clear();\n        // Clear the value of the element and raise the changed event.\n        setValue(undefined);\n    };\n\n    const handleEnd = () => {\n        // Get the signature from the SignaturePad component as a data URL.\n        const dataUrl = signaturePad.current?.toDataURL();\n        // Update the value of the element and raise the changed event.\n        setValue(dataUrl);\n    };\n\n    const options: SignaturePadOptions = {\n        onEnd: handleEnd,\n    };\n\n    return (\n        <>\n            <div style={{ border: "1px solid #cccccc" }}>\n                <SignaturePadWrapper\n                    height={150}\n                    options={options}\n                    ref={signaturePad}\n                />\n            </div>\n            <button onClick={handleClear}>\u21ba</button>\n        </>\n    );\n}\n\nconst SignatureBlockElementRegistration: FormElementRegistration<SignatureBlockProps> =\n    {\n        component: SignatureBlock,\n        getInitialProperties: () => ({ value: undefined }),\n        id: "SignatureBlock",\n    };\n\nexport default SignatureBlockElementRegistration;\n'})}),"\n",(0,r.jsx)(t.h2,{id:"deploy-the-form-element",children:"Deploy the Form Element"}),"\n",(0,r.jsxs)(t.p,{children:["Follow the instructions to ",(0,r.jsx)(t.a,{href:"/docs/workflow/sdk-web-overview#deployment",children:"build and deploy the activity pack"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"test-the-form-element",children:"Test the Form Element"}),"\n",(0,r.jsxs)(t.p,{children:["Once your activity pack is hosted and registered, your ",(0,r.jsx)(t.code,{children:"SignatureBlock"})," custom form element should appear in the form element toolbox in VertiGIS Studio Workflow Designer alongside the built-in form elements."]}),"\n",(0,r.jsx)(t.p,{children:"To use your custom form element in a workflow:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Select the ",(0,r.jsx)(t.code,{children:"Display Form"})," activity that you want to include your form element in."]}),"\n",(0,r.jsxs)(t.li,{children:["Locate the ",(0,r.jsx)(t.code,{children:"SignatureBlock"})," form element in the toolbox and drag it onto the form."]}),"\n",(0,r.jsxs)(t.li,{children:["Alternatively:","\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Add a ",(0,r.jsx)(t.code,{children:"Custom"})," form element to the form."]}),"\n",(0,r.jsxs)(t.li,{children:["Set the ",(0,r.jsx)(t.code,{children:"Custom Type"})," property of the ",(0,r.jsx)(t.code,{children:"Custom"})," form element to ",(0,r.jsx)(t.code,{children:"SignatureBlock"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.li,{children:"Test your workflow."}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},2172:(e,t,n)=>{n.d(t,{I:()=>s,M:()=>l});var r=n(1504);const o={},i=r.createContext(o);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);