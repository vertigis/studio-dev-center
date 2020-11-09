(window.webpackJsonp=window.webpackJsonp||[]).push([[139,134],{210:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(2),o=(n(0),n(231)),a=n(232),i=n(50);const l={title:"Implement a Captcha Custom Form Element using a Third Party Library",description:"Geocortex Workflow - Implement a captcha form element for web applications using a third party library"},c={unversionedId:"workflow/tutorial-web-implement-third-party-captcha-form-element",id:"workflow/tutorial-web-implement-third-party-captcha-form-element",isDocsHomePage:!1,title:"Implement a Captcha Custom Form Element using a Third Party Library",description:"Geocortex Workflow - Implement a captcha form element for web applications using a third party library",source:"@site/docs/workflow/tutorial-web-implement-third-party-captcha-form-element.mdx",slug:"/workflow/tutorial-web-implement-third-party-captcha-form-element",permalink:"/docs/workflow/tutorial-web-implement-third-party-captcha-form-element",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/tutorial-web-implement-third-party-captcha-form-element.mdx",version:"current",sidebar:"workflow",previous:{title:"Implement a Signature Block Custom Form Element using a Third Party Library",permalink:"/docs/workflow/tutorial-web-implement-third-party-signature-block-form-element"},next:{title:"Implement a QR Code Custom Form Element using a Third Party Library",permalink:"/docs/workflow/tutorial-web-implement-third-party-qr-code-form-element"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Google reCAPTCHA",id:"google-recaptcha",children:[]},{value:"Adding Dependencies",id:"adding-dependencies",children:[]},{value:"Set up Custom Form Element Skeleton",id:"set-up-custom-form-element-skeleton",children:[]},{value:"Implement the Custom Form Element",id:"implement-the-custom-form-element",children:[]},{value:"Deploy the Form Element",id:"deploy-the-form-element",children:[]},{value:"Test the Form Element",id:"test-the-form-element",children:[]}],m={rightToc:p};function s({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},m,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Implementing a custom ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/workflow/key-concepts#form-elements"}),"form element")," allows you to augment the existing ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/form-elements/auto-complete.htm%3FTocPath%3DForms%7CForm%2520Element%2520Reference%7C_____0"}),"form elements that come with Geocortex Workflow"),"."),Object(o.b)("p",null,"This article will walk you through creating a form element that uses the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/dozoisch/react-google-recaptcha"}),"react-google-recaptcha")," component to implement a captcha to distinguish humans from bots."),Object(o.b)("img",{src:Object(a.a)("img/workflow-web-custom-captcha.png")}),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)(i.default,{mdxType:"WebPrereqs"}),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"Implementing a captcha custom form element for web applications using a third party library consists of the following steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Obtaining a Google reCAPTCHA v2 Site Key"),Object(o.b)("li",{parentName:"ol"},"Adding third party library dependencies to your project."),Object(o.b)("li",{parentName:"ol"},"Creating the custom form element."),Object(o.b)("li",{parentName:"ol"},"Implementing the custom form element using the third party library.")),Object(o.b)("h2",{id:"google-recaptcha"},"Google reCAPTCHA"),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/dozoisch/react-google-recaptcha"}),"react-google-recaptcha")," component uses reCAPTCHA technology from Google."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Open ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.google.com/recaptcha/about/"}),"Google reCAPTCHA")," in a web browser."),Object(o.b)("li",{parentName:"ol"},"Sign in with your Google account."),Object(o.b)("li",{parentName:"ol"},"Register a new Site."),Object(o.b)("li",{parentName:"ol"},"Select the ",Object(o.b)("inlineCode",{parentName:"li"},"reCAPTCHA v2")," type."),Object(o.b)("li",{parentName:"ol"},"Select the ",Object(o.b)("inlineCode",{parentName:"li"},'"I\'m not a robot" tickbox')," option."),Object(o.b)("li",{parentName:"ol"},"Add the domain(s) where your web application is hosted."),Object(o.b)("li",{parentName:"ol"},"This generates a ",Object(o.b)("inlineCode",{parentName:"li"},"Site Key"),". Copy this value, it will be required later.")),Object(o.b)("h2",{id:"adding-dependencies"},"Adding Dependencies"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Run ",Object(o.b)("inlineCode",{parentName:"li"},"npm install react-google-recaptcha")," in the terminal to install the third party ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/dozoisch/react-google-recaptcha"}),"react-google-recaptcha")," component."),Object(o.b)("li",{parentName:"ol"},"Run ",Object(o.b)("inlineCode",{parentName:"li"},"npm install @types/react-google-recaptcha")," in the terminal to install type information for the third party component. This is optional, but it provides an improved developer experience.")),Object(o.b)("h2",{id:"set-up-custom-form-element-skeleton"},"Set up Custom Form Element Skeleton"),Object(o.b)("p",null,"To create a new form element:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Open the Workflow activity SDK in Visual Studio Code."),Object(o.b)("li",{parentName:"ol"},"Run ",Object(o.b)("inlineCode",{parentName:"li"},"npm run generate")," in the terminal."),Object(o.b)("li",{parentName:"ol"},"When prompted, select ",Object(o.b)("inlineCode",{parentName:"li"},"Form Element"),"."),Object(o.b)("li",{parentName:"ol"},"Enter the name of the form element you would like to create and press ",Object(o.b)("inlineCode",{parentName:"li"},"Enter"),". For example, ",Object(o.b)("inlineCode",{parentName:"li"},"Captcha"),"."),Object(o.b)("li",{parentName:"ol"},"Open the newly created ",Object(o.b)("inlineCode",{parentName:"li"},"src/activities/Captcha.tsx")," file.")),Object(o.b)("h2",{id:"implement-the-custom-form-element"},"Implement the Custom Form Element"),Object(o.b)("p",null,"Modify the skeleton form element implementation in ",Object(o.b)("inlineCode",{parentName:"p"},"src/activities/Captcha.tsx")," to match the following example."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="src/activities/Captcha.tsx"',title:'"src/activities/Captcha.tsx"'}),'import * as React from "react";\nimport ReCAPTCHA from "react-google-recaptcha";\nimport {\n    CustomFormElementProps,\n    RegisterCustomFormElementBase,\n} from "@geocortex/workflow/runtime/app/RegisterCustomFormElementBase";\n\n/**\n * A simple React Component that displays a captcha input.\n * @param props The props that will be provided by the Workflow runtime.\n */\nconst Captcha = (props: CustomFormElementProps) => {\n    const handleChange = (token: string | null) => {\n        // Set the value and raise the changed event.\n        props.element.value = token ?? undefined;\n        props.raiseEvent("changed", token);\n    };\n\n    const handleExpired = () => {\n        // Clear the value and raise the changed event.\n        props.element.value = undefined;\n        props.raiseEvent("changed", undefined);\n    };\n\n    return (\n        <ReCAPTCHA\n            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"\n            onChange={handleChange}\n            onExpired={handleExpired}\n        />\n    );\n};\n\n/**\n * @displayName Register Captcha Form Element\n * @category Custom Activities\n * @description Registers a Captcha form element.\n */\nexport class RegisterCaptchaElement extends RegisterCustomFormElementBase {\n    /** Perform the execution logic of the activity. */\n    execute() {\n        this.register("Captcha", Captcha);\n    }\n}\n')),Object(o.b)("p",null,"Update the ",Object(o.b)("inlineCode",{parentName:"p"},"sitekey")," on the ",Object(o.b)("inlineCode",{parentName:"p"},"<ReCAPTCHA>")," element to use your own site key."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),'return (\n    <ReCAPTCHA\n        // highlight-next-line\n        sitekey="YOUR-SITE-KEY-GOES-HERE"\n        onChange={handleChange}\n        onExpired={handleExpired}\n    />\n);\n')),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"sitekey")," included in this tutorial is for demonstration purposes only. It is watermarked and will not produce valid captcha results. You must use your own site key."))),Object(o.b)("h2",{id:"deploy-the-form-element"},"Deploy the Form Element"),Object(o.b)("p",null,"Follow the instructions to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/workflow/sdk-web-overview#deployment"}),"build and deploy the activity pack"),"."),Object(o.b)("h2",{id:"test-the-form-element"},"Test the Form Element"),Object(o.b)("p",null,"Once your activity pack is hosted and registered, your ",Object(o.b)("inlineCode",{parentName:"p"},"Register Captcha Form Element")," custom activity should appear in the activity toolbox in Geocortex Workflow Designer alongside the built-in activities."),Object(o.b)("p",null,"To use your custom form element in a workflow:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Add your ",Object(o.b)("inlineCode",{parentName:"li"},"Register Captcha Form Element")," custom activity to your workflow so that it runs ",Object(o.b)("strong",{parentName:"li"},"before")," any ",Object(o.b)("inlineCode",{parentName:"li"},"Display Form")," activities that will use the custom form element."),Object(o.b)("li",{parentName:"ol"},"Select the ",Object(o.b)("inlineCode",{parentName:"li"},"Display Form")," activity that you want to include your form element in."),Object(o.b)("li",{parentName:"ol"},"Add a ",Object(o.b)("inlineCode",{parentName:"li"},"Custom")," form element to the form."),Object(o.b)("li",{parentName:"ol"},"Set the ",Object(o.b)("inlineCode",{parentName:"li"},"Custom Type")," property of the ",Object(o.b)("inlineCode",{parentName:"li"},"Custom")," form element to ",Object(o.b)("inlineCode",{parentName:"li"},"Captcha"),"."),Object(o.b)("li",{parentName:"ol"},"Test your workflow.")))}s.isMDXComponent=!0},231:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),m=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=m(n),u=r,d=s["".concat(i,".").concat(u)]||s[u]||b[u]||a;return n?o.a.createElement(d,l(l({ref:t},p),{},{components:n})):o.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},232:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(235),o=n(233);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.a)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},233:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},235:function(e,t,n){"use strict";var r=n(0),o=n(19);t.a=function(){const e=Object(r.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},50:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),o=(n(0),n(231));const a={},i={unversionedId:"workflow/snippets/prereqs-web",id:"workflow/snippets/prereqs-web",isDocsHomePage:!1,title:"prereqs-web",description:"Follow the instructions in the Web Applications SDK page to set up your development environment.",source:"@site/docs/workflow/snippets/prereqs-web.mdx",slug:"/workflow/snippets/prereqs-web",permalink:"/docs/workflow/snippets/prereqs-web",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/snippets/prereqs-web.mdx",version:"current"},l=[],c={rightToc:l};function p({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Follow the instructions in the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/workflow/sdk-web-overview"}),"Web Applications SDK")," page to set up your development environment."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"A working knowledge of ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.typescriptlang.org/"}),"TypeScript")," is recommended before extending Workflow for web-based hosts."))))}p.isMDXComponent=!0}}]);