(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[3813,2006],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6742:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var i=n(7294),r=n(3727),a=n(2263),o=n(3919),s=n(412);const l=(0,i.createContext)({collectLink:()=>{}});var c=n(4996),d=n(8780);const p=function({isNavLink:e,to:t,href:n,activeClassName:p,isActive:u,"data-noBrokenLinkCheck":m,autoAddBaseUrl:h=!0,...f}){var v;const{siteConfig:{trailingSlash:y}}=(0,a.Z)(),{withBaseUrl:g}=(0,c.C)(),w=(0,i.useContext)(l),k=t||n,b=(0,o.Z)(k),C=null==k?void 0:k.replace("pathname://","");let N=void 0!==C?(R=C,h&&(e=>e.startsWith("/"))(R)?g(R):R):void 0;var R;N&&b&&(N=(0,d.applyTrailingSlash)(N,y));const x=(0,i.useRef)(!1),I=e?r.OL:r.rU,T=s.Z.canUseIntersectionObserver;let Q;(0,i.useEffect)((()=>(!T&&b&&null!=N&&window.docusaurus.prefetch(N),()=>{T&&Q&&Q.disconnect()})),[N,T,b]);const O=null!==(v=null==N?void 0:N.startsWith("#"))&&void 0!==v&&v,A=!N||!b||O;return N&&b&&!O&&!m&&w.collectLink(N),A?i.createElement("a",{href:N,...k&&!b&&{target:"_blank",rel:"noopener noreferrer"},...f}):i.createElement(I,{...f,onMouseEnter:()=>{x.current||null==N||(window.docusaurus.preload(N),x.current=!0)},innerRef:e=>{var t,n;T&&e&&b&&(t=e,n=()=>{null!=N&&window.docusaurus.prefetch(N)},Q=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(Q.unobserve(t),Q.disconnect(),n())}))})),Q.observe(t))},to:N||"",...e&&{isActive:u,activeClassName:p}})}},3919:(e,t,n)=>{"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}n.d(t,{b:()=>i,Z:()=>r})},4996:(e,t,n)=>{"use strict";n.d(t,{C:()=>a,Z:()=>o});var i=n(2263),r=n(3919);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,i.Z)();return{withBaseUrl:(n,i)=>function(e,t,n,{forcePrependBaseUrl:i=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(i)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+o:o}(t,e,n,i)}}function o(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),i="/"===n?"/":t?(r=n).endsWith("/")?r:`${r}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(n);var r;return e.replace(n,i)}},8780:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return i(r).default}});var a=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return i(a).default}})},9964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1962:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var i=n(6742),r=n(7294),a=n(6010);const o="root_2PFE";function s({title:e,description:t,link:n}){return r.createElement("div",{className:(0,a.Z)("card-demo",o)},r.createElement("div",{className:"card"},r.createElement("div",{className:"card__header"},r.createElement("h3",null,e)),r.createElement("div",{className:"card__body"},r.createElement("p",null,t)),r.createElement("div",{className:"card__footer"},r.createElement(i.Z,{className:"button button--secondary button--block",to:n},"Get Started"))))}},7763:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var i=n(7294);const r="root_NqT0";function a({children:e}){return i.createElement("div",{className:r},e)}},8822:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>o,metadata:()=>s,toc:()=>l,default:()=>d});var i=n(2122),r=(n(7294),n(3905));const a={},o=void 0,s={unversionedId:"workflow/snippets/prereqs-web",id:"workflow/snippets/prereqs-web",isDocsHomePage:!1,title:"prereqs-web",description:"Follow the instructions in the Web Applications SDK page to set up your development environment.",source:"@site/docs/workflow/snippets/prereqs-web.mdx",sourceDirName:"workflow/snippets",slug:"/workflow/snippets/prereqs-web",permalink:"/docs/workflow/snippets/prereqs-web",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/workflow/snippets/prereqs-web.mdx",version:"current",frontMatter:{}},l=[],c={toc:l};function d({components:e,...t}){return(0,r.kt)("wrapper",(0,i.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Follow the instructions in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-web-overview"},"Web Applications SDK")," page to set up your development environment."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A working knowledge of ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," is recommended before extending Workflow for web-based hosts."))))}d.isMDXComponent=!0},8444:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>d,metadata:()=>p,toc:()=>u,default:()=>h});var i=n(2122),r=(n(7294),n(3905)),a=n(4996),o=n(1962),s=n(7763),l=n(8822);const c={title:"Implement an activity that creates a QR Code image using a Third Party Library",description:"VertiGIS Studio Workflow - Implement a custom activity for web applications that creates a QR code image using a third party library"},d=void 0,p={unversionedId:"workflow/tutorial-web-qr-code-activity",id:"workflow/tutorial-web-qr-code-activity",isDocsHomePage:!1,title:"Implement an activity that creates a QR Code image using a Third Party Library",description:"VertiGIS Studio Workflow - Implement a custom activity for web applications that creates a QR code image using a third party library",source:"@site/docs/workflow/tutorial-web-qr-code-activity.mdx",sourceDirName:"workflow",slug:"/workflow/tutorial-web-qr-code-activity",permalink:"/docs/workflow/tutorial-web-qr-code-activity",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/workflow/tutorial-web-qr-code-activity.mdx",version:"current",frontMatter:{title:"Implement an activity that creates a QR Code image using a Third Party Library",description:"VertiGIS Studio Workflow - Implement a custom activity for web applications that creates a QR code image using a third party library"},sidebar:"workflow",previous:{title:"Add a Layer to a Map with an Activity",permalink:"/docs/workflow/tutorial-web-add-layer-to-map"},next:{title:"Implement a Star Rating Custom Form Element",permalink:"/docs/workflow/tutorial-web-implement-star-rating-form-element"}},u=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Adding Dependencies",id:"adding-dependencies",children:[]},{value:"Set up Activity Skeleton",id:"set-up-activity-skeleton",children:[]},{value:"Implement the Activity",id:"implement-the-activity",children:[]},{value:"Deploy the Activity",id:"deploy-the-activity",children:[]},{value:"Test the Activity",id:"test-the-activity",children:[]},{value:"Enhance the Activity",id:"enhance-the-activity",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],m={toc:u};function h({components:e,...t}){return(0,r.kt)("wrapper",(0,i.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Implementing a custom ",(0,r.kt)("a",{parentName:"p",href:"/docs/workflow/key-concepts#activities"},"activity")," allows you to build a reusable, completely custom behavior to augment the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activity-reference.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____0"},"existing activities")," that come with VertiGIS Studio Workflow."),(0,r.kt)("p",null,"In this article, you will learn how to create a custom activity that generates a QR code image as a data URL using a third party library."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)(l.default,{mdxType:"WebPrereqs"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Implementing a QR code activity for web applications using a third party library consists of the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Adding third party library dependencies to your project."),(0,r.kt)("li",{parentName:"ol"},"Creating the custom activity."),(0,r.kt)("li",{parentName:"ol"},"Implementing the custom activity using the third party library.")),(0,r.kt)("h2",{id:"adding-dependencies"},"Adding Dependencies"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"npm install qrcode")," in the terminal to install the third party ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/soldair/node-qrcode"},"qrcode")," library that generates QR codes."),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"npm install @types/qrcode")," in the terminal to install type information for the third party library. This is optional, but it provides an improved developer experience.")),(0,r.kt)("h2",{id:"set-up-activity-skeleton"},"Set up Activity Skeleton"),(0,r.kt)("p",null,"To create a new activity:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the Workflow activity SDK in Visual Studio Code"),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run generate")," in the terminal."),(0,r.kt)("li",{parentName:"ol"},"When prompted enter the name of the activity you would like to create and press ",(0,r.kt)("inlineCode",{parentName:"li"},"Enter"),". For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"CreateQrCodeImage"),"."),(0,r.kt)("li",{parentName:"ol"},"Open the newly created ",(0,r.kt)("inlineCode",{parentName:"li"},"src/activities/CreateQrCodeImage.ts")," file.")),(0,r.kt)("h2",{id:"implement-the-activity"},"Implement the Activity"),(0,r.kt)("p",null,"Modify the skeleton activity implementation in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/activities/CreateQrCodeImage.ts")," to match the following example which provides a minimal QR code implementation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/activities/CreateQrCodeImage.ts"',title:'"src/activities/CreateQrCodeImage.ts"'},'import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";\nimport QRCode, { QRCodeToDataURLOptions } from "qrcode";\n\n/** An interface that defines the inputs of the activity. */\nexport interface CreateQrCodeImageInputs {\n    /**\n     * @description The text to encode into the QR code.\n     * @required\n     */\n    text: string;\n}\n\n/** An interface that defines the outputs of the activity. */\nexport interface CreateQrCodeImageOutputs {\n    /**\n     * @description The data URL of the resulting the QR code image.\n     */\n    result: string;\n}\n\n/**\n * @displayName Create QR Code Image\n * @category Custom Activities\n * @defaultName qrCode\n * @description Creates a QR code image as a data URL.\n */\nexport class CreateQrCodeImage implements IActivityHandler {\n    async execute(\n        inputs: CreateQrCodeImageInputs\n    ): Promise<CreateQrCodeImageOutputs> {\n        const { text } = inputs;\n\n        // Generate the QR code\n        const dataUrl = await QRCode.toDataURL(text);\n\n        return {\n            result: dataUrl,\n        };\n    }\n}\n')),(0,r.kt)("h2",{id:"deploy-the-activity"},"Deploy the Activity"),(0,r.kt)("p",null,"Follow the instructions to ",(0,r.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-web-overview#deployment"},"build and deploy the activity pack"),"."),(0,r.kt)("h2",{id:"test-the-activity"},"Test the Activity"),(0,r.kt)("p",null,"Once your activity pack is hosted and registered, your custom activity should appear in the activity toolbox in VertiGIS Studio Workflow Designer alongside the built-in activities, and can be used in the graphical interface like any other activity."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"result")," output of the activity is a data URL. You can use the ",(0,r.kt)("strong",{parentName:"p"},"Set Form Element Property")," activity to assign the URL to the ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," property of an ",(0,r.kt)("strong",{parentName:"p"},"Image")," form element."))),(0,r.kt)("p",null,"Now you can build a workflow that uses your new custom activity!"),(0,r.kt)("h2",{id:"enhance-the-activity"},"Enhance the Activity"),(0,r.kt)("p",null,"Once you've seen your activity in action you may want to take advantage of the many different options offered by the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/soldair/node-qrcode"},"qrcode")," library. To do this you can add additional inputs to the activity that correspond to options on the ",(0,r.kt)("inlineCode",{parentName:"p"},"QRCode.toDataURL(text: string, options?: QRCodeToDataURLOptions)")," method."),(0,r.kt)("p",null,"Modify the previous activity implementation in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/activities/CreateQrCodeImage.ts")," to match the following more complete example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/activities/CreateQrCodeImage.ts"',title:'"src/activities/CreateQrCodeImage.ts"'},'import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";\nimport QRCode, { QRCodeToDataURLOptions } from "qrcode";\n\n/** An interface that defines the inputs of the activity. */\nexport interface CreateQrCodeImageInputs {\n    /**\n     * @description The text or data to encode into the QR code.\n     * @required\n     */\n    text:\n        | string\n        | {\n              data: string;\n              mode: "alphanumeric" | "numeric" | "kanji" | "byte";\n          }[];\n\n    /**\n     * @description The RGBA color of the dark module. The default is #000000ff (black).\n     */\n    darkColor?: string;\n\n    /**\n     * @description Error correction level. The default is medium.\n     */\n    errorCorrectionLevel?: "low" | "medium" | "quartile" | "high";\n\n    /**\n     * @description The RGBA color of the light module. The default is #ffffffff (white).\n     */\n    lightColor?: string;\n\n    /**\n     * @description The size of the quiet zone around the QR code. The default is 4.\n     */\n    margin?: number;\n\n    /**\n     * @description A Number between 0 and 1 indicating image quality if the requested type is image/jpeg or image/webp. The default is 0.92.\n     */\n    quality?: number;\n\n    /**\n     * @description The Scale factor. A value of 1 means 1px per modules (black dots). The default is 4.\n     */\n    scale?: number;\n\n    /**\n     * @description The image format. The default is image/png.\n     */\n    type?: "image/png" | "image/jpeg" | "image/webp";\n\n    /**\n     * @description The width of the output image. If the width is too small to contain the QR code, this option will be ignored. This input takes precedence over the scale input.\n     */\n    width?: number;\n\n    /**\n     * @description The QR Code version. A number between 1 and 40. If not specified, a suitable value will be calculated.\n     */\n    version?: number;\n}\n\n/** An interface that defines the outputs of the activity. */\nexport interface CreateQrCodeImageOutputs {\n    /**\n     * @description The data URL of the resulting the QR code image.\n     */\n    result: string;\n}\n\n/**\n * @displayName Create QR Code Image\n * @category Custom Activities\n * @defaultName qrCode\n * @description Creates a QR code image as a data URL.\n */\nexport class CreateQrCodeImage implements IActivityHandler {\n    async execute(\n        inputs: CreateQrCodeImageInputs\n    ): Promise<CreateQrCodeImageOutputs> {\n        const { darkColor, lightColor, quality, text, ...other } =\n            inputs;\n\n        // Assemble the QR code options from the activity inputs\n        const options: QRCodeToDataURLOptions = {\n            ...other,\n            color: {\n                dark: darkColor,\n                light: lightColor,\n            },\n            rendererOpts: {\n                quality,\n            },\n        };\n\n        // Generate the QR code\n        const dataUrl = await QRCode.toDataURL(text, options);\n\n        return {\n            result: dataUrl,\n        };\n    }\n}\n')),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)(s.Z,{mdxType:"UseCaseContainer"},(0,r.kt)(o.Z,{title:"Learn how to create a QR Code form element",description:"Learn how to to use this same third party library to create a form element that generates and displays QR codes",link:(0,a.Z)("docs/workflow/tutorial-web-implement-third-party-qr-code-form-element"),mdxType:"UseCaseCard"})))}h.isMDXComponent=!0},6010:(e,t,n)=>{"use strict";function i(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:()=>r})}}]);