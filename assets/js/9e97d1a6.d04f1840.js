(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[3482,2006],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(n),d=o,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var m=2;m<a;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3919:(e,t,n)=>{"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:()=>r,Z:()=>o})},4996:(e,t,n)=>{"use strict";n.d(t,{C:()=>a,Z:()=>i});var r=n(2263),o=n(3919);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},8215:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(7294);const o=function({children:e,hidden:t,className:n}){return r.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},1395:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(7294),o=n(944),a=n(6010);const i="tabItem_1uMI",s="tabItemActive_2DSg";const l=37,m=39;const c=function(e){const{lazy:t,block:n,defaultValue:c,values:u,groupId:p,className:d}=e,{tabGroupChoices:f,setTabGroupChoices:h}=(0,o.Z)(),[g,v]=(0,r.useState)(c),w=r.Children.toArray(e.children),k=[];if(null!=p){const e=f[p];null!=e&&e!==g&&u.some((t=>t.value===e))&&v(e)}const b=e=>{const t=e.currentTarget,n=k.indexOf(t),r=u[n].value;v(r),null!=p&&(h(p,r),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:r,right:o}=e.getBoundingClientRect(),{innerHeight:a,innerWidth:i}=window;return t>=0&&o<=i&&r<=a&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((()=>t.classList.remove(s)),2e3))}),150))},y=e=>{var t;let n;switch(e.keyCode){case m:{const t=k.indexOf(e.target)+1;n=k[t]||k[0];break}case l:{const t=k.indexOf(e.target)-1;n=k[t]||k[k.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},d)},u.map((({value:e,label:t})=>r.createElement("li",{role:"tab",tabIndex:g===e?0:-1,"aria-selected":g===e,className:(0,a.Z)("tabs__item",i,{"tabs__item--active":g===e}),key:e,ref:e=>k.push(e),onKeyDown:y,onFocus:b,onClick:b},t)))),t?(0,r.cloneElement)(w.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},w.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}},9443:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(7294),o=n(9443);const a=function(){const e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},8822:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>s,toc:()=>l,default:()=>c});var r=n(2122),o=(n(7294),n(3905));const a={},i=void 0,s={unversionedId:"workflow/snippets/prereqs-web",id:"workflow/snippets/prereqs-web",isDocsHomePage:!1,title:"prereqs-web",description:"Follow the instructions in the Web Applications SDK page to set up your development environment.",source:"@site/docs/workflow/snippets/prereqs-web.mdx",sourceDirName:"workflow/snippets",slug:"/workflow/snippets/prereqs-web",permalink:"/docs/workflow/snippets/prereqs-web",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/workflow/snippets/prereqs-web.mdx",version:"current",frontMatter:{}},l=[],m={toc:l};function c({components:e,...t}){return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Follow the instructions in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-web-overview"},"Web Applications SDK")," page to set up your development environment."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"A working knowledge of ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," is recommended before extending Workflow for web-based hosts."))))}c.isMDXComponent=!0},1163:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>m,contentTitle:()=>c,metadata:()=>u,toc:()=>p,default:()=>f});var r=n(2122),o=(n(7294),n(3905)),a=n(4996),i=n(8822),s=n(1395),l=n(8215);const m={title:"Implement a Star Rating Custom Form Element",description:"VertiGIS Studio Workflow - Implement a star rating form element for web applications"},c=void 0,u={unversionedId:"workflow/tutorial-web-implement-star-rating-form-element",id:"workflow/tutorial-web-implement-star-rating-form-element",isDocsHomePage:!1,title:"Implement a Star Rating Custom Form Element",description:"VertiGIS Studio Workflow - Implement a star rating form element for web applications",source:"@site/docs/workflow/tutorial-web-implement-star-rating-form-element.mdx",sourceDirName:"workflow",slug:"/workflow/tutorial-web-implement-star-rating-form-element",permalink:"/docs/workflow/tutorial-web-implement-star-rating-form-element",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/workflow/tutorial-web-implement-star-rating-form-element.mdx",version:"current",frontMatter:{title:"Implement a Star Rating Custom Form Element",description:"VertiGIS Studio Workflow - Implement a star rating form element for web applications"},sidebar:"workflow",previous:{title:"Implement an activity that creates a QR Code image using a Third Party Library",permalink:"/docs/workflow/tutorial-web-qr-code-activity"},next:{title:"Implement a Star Rating Custom Form Element using a Third Party Library",permalink:"/docs/workflow/tutorial-web-implement-third-party-star-rating-form-element"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Set up the Custom Form Element Skeleton",id:"set-up-the-custom-form-element-skeleton",children:[]},{value:"Set up a Form Element Registration Activity",id:"set-up-a-form-element-registration-activity",children:[]},{value:"Build the Star Rating UI",id:"build-the-star-rating-ui",children:[]},{value:"Add Interactivity",id:"add-interactivity",children:[]},{value:"Expose the Form Elements Value",id:"expose-the-form-elements-value",children:[]},{value:"Deploy the Activity",id:"deploy-the-activity",children:[]},{value:"Test the Activity",id:"test-the-activity",children:[]}],d={toc:p};function f({components:e,...t}){return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Implementing a custom ",(0,o.kt)("a",{parentName:"p",href:"/docs/workflow/key-concepts#form-elements"},"form element")," allows you to augment the existing ",(0,o.kt)("a",{parentName:"p",href:"https://docs.vertigisstudio.com/workflow/latest/help/Default.htm#wf5/help/form-elements/auto-complete.htm%3FTocPath%3DForms%7CForm%2520Element%2520Reference%7C_____0"},"form elements that come with VertiGIS Studio Workflow"),"."),(0,o.kt)("p",null,"This article will walk you through creating a form element for rating that allows you to select up to five stars."),(0,o.kt)("img",{src:(0,a.Z)("img/workflow-web-custom-star-rating.png")}),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)(i.default,{mdxType:"WebPrereqs"}),(0,o.kt)("p",null,"Custom workflow form elements are built in TypeScript and ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React"),"."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Implementing a custom form element for web applications consists of three steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Creating the custom form element and implementing the UI."),(0,o.kt)("li",{parentName:"ol"},"Creating an activity which will register this form component with VertiGIS Studio Workflow."),(0,o.kt)("li",{parentName:"ol"},"Registering the activity with VertiGIS Studio Workflow and running it ",(0,o.kt)("strong",{parentName:"li"},"before")," using the custom form element.")),(0,o.kt)("h2",{id:"set-up-the-custom-form-element-skeleton"},"Set up the Custom Form Element Skeleton"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a new file ",(0,o.kt)("inlineCode",{parentName:"li"},"StarRatingElement.tsx")," in the activity SDK."),(0,o.kt)("li",{parentName:"ol"},"Create a skeleton React form element.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/form-elements/StarRatingElement.tsx"',title:'"src/form-elements/StarRatingElement.tsx"'},'import * as React from "react";\nimport { CustomFormElementProps } from "@geocortex/workflow/runtime/app/RegisterCustomFormElementBase";\n\nfunction StarRatingElement(props: CustomFormElementProps) {\n    return <div>Hello. Is it me you\'re looking for.</div>;\n}\n\nexport default StarRatingElement;\n')),(0,o.kt)("h2",{id:"set-up-a-form-element-registration-activity"},"Set up a Form Element Registration Activity"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run the command ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run generate")," and name the activity ",(0,o.kt)("inlineCode",{parentName:"li"},"RegisterCustomFormElements"),"."),(0,o.kt)("li",{parentName:"ol"},"Modify the activity class declaration to extend the ",(0,o.kt)("inlineCode",{parentName:"li"},"RegisterCustomFormElementBase")," base class."),(0,o.kt)("li",{parentName:"ol"},"Remove unnecessary inputs and outputs and register your custom form element in the ",(0,o.kt)("inlineCode",{parentName:"li"},"execute")," method.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/activities/CustomFormElementRegistration.tsx"',title:'"src/activities/CustomFormElementRegistration.tsx"'},'import { RegisterCustomFormElementBase } from "@geocortex/workflow/runtime/app/RegisterCustomFormElementBase";\nimport StarRatingElement from "../form-elements/StarRatingElement";\n\n/**\n * @category Custom Activities\n * @description Registers custom form elements for the application\n */\nexport class RegisterCustomFormElements extends RegisterCustomFormElementBase {\n    async execute(): Promise<void> {\n        this.register("StarRatingElement", StarRatingElement);\n    }\n}\n')),(0,o.kt)("h2",{id:"build-the-star-rating-ui"},"Build the Star Rating UI"),(0,o.kt)("p",null,"Next, we are going to build the form element to display the five stars the user can select. Form Elements are just React elements, and use React patterns to define their UI."),(0,o.kt)("p",null,"First, let's build the star DOM elements."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/form-elements/StarRatingElement.tsx"',title:'"src/form-elements/StarRatingElement.tsx"'},'import * as React from "react";\nimport { useState, useEffect } from "react";\nimport { CustomFormElementProps } from "@geocortex/workflow/runtime/app/RegisterCustomFormElementBase";\n\nexport default function StarRatingFormElement(\n    props: CustomFormElementProps\n) {\n    const rating = 5;\n\n    // Button style to show only the button content.\n    const baseStyle: React.CSSProperties = {\n        background: "none",\n        border: "none",\n        outline: "none",\n        fontSize: "2em",\n        padding: 0,\n    };\n\n    // Button styles to show selected and unselected states.\n    const selectedStyle = { ...baseStyle, ...{ color: "#ffa91b" } };\n    const unselectedStyle = { ...baseStyle, ...{ color: "#c6c6c6" } };\n\n    // Create 5 buttons\n    const buttons = [];\n    for (let i = 1; i <= 5; i++) {\n        buttons.push(\n            <button\n                value={i}\n                style={rating < i ? unselectedStyle : selectedStyle}\n            >\n                \u2605\n            </button>\n        );\n    }\n\n    return <div>{buttons}</div>;\n}\n')),(0,o.kt)("h2",{id:"add-interactivity"},"Add Interactivity"),(0,o.kt)("p",null,"Next, we are going to add interactivity to the form element to show how many stars the user has selected."),(0,o.kt)(s.Z,{defaultValue:"custom-form-element",values:[{label:"Star Rating Form Element",value:"custom-form-element"},{label:"User Interface",value:"ui"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"custom-form-element",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/form-elements/StarRatingElement.tsx"',title:'"src/form-elements/StarRatingElement.tsx"'},'import * as React from "react";\nimport { useState, useEffect } from "react";\nimport { CustomFormElementProps } from "@geocortex/workflow/runtime/app/RegisterCustomFormElementBase";\n\nexport default function StarRatingFormElement(\n    props: CustomFormElementProps\n) {\n    // highlight-next-line\n    let [rating, setRating] = useState(0);\n\n    // highlight-start\n    const handleClick = (event) => {\n        // Get the value from the button.\n        // Parse as an integer because the value will be a string.\n        const value = parseInt(event.target.value);\n\n        if (rating !== value) {\n            // Update the component state.\n            setRating(value);\n        }\n    };\n    // highlight-end\n\n    // Button style to show only the button content.\n    const baseStyle: React.CSSProperties = {\n        background: "none",\n        border: "none",\n        outline: "none",\n        fontSize: "2em",\n        padding: 0,\n    };\n\n    // Button styles to show selected and unselected states.\n    const selectedStyle = { ...baseStyle, ...{ color: "#ffa91b" } };\n    const unselectedStyle = { ...baseStyle, ...{ color: "#c6c6c6" } };\n\n    // Create 5 buttons\n    const buttons = [];\n    for (let i = 1; i <= 5; i++) {\n        buttons.push(\n            <button\n                // highlight-next-line\n                onClick={handleClick}\n                value={i}\n                style={rating < i ? unselectedStyle : selectedStyle}\n            >\n                \u2605\n            </button>\n        );\n    }\n\n    return <div>{buttons}</div>;\n}\n'))),(0,o.kt)(l.Z,{value:"ui",mdxType:"TabItem"},(0,o.kt)("img",{src:(0,a.Z)("img/workflow-web-custom-star-rating.png")}))),(0,o.kt)("h2",{id:"expose-the-form-elements-value"},"Expose the Form Elements Value"),(0,o.kt)("p",null,"Finally, we are going to expose the form elements value to the larger workflow. For more information on this, check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-web-form-reference#properties-of-form-elements"},"form element reference"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/form-elements/StarRatingElement.tsx"',title:'"src/form-elements/StarRatingElement.tsx"'},'import * as React from "react";\nimport { useState, useEffect } from "react";\nimport { CustomFormElementProps } from "@geocortex/workflow/runtime/app/RegisterCustomFormElementBase";\n\nexport default function StarRatingFormElement(\n    props: CustomFormElementProps\n) {\n    // Set the default state of the component.\n    let [rating, setRating] = useState(0);\n\n    // highlight-start\n    useEffect(() => {\n        const { element } = props;\n\n        if (element.value === undefined) {\n            element.value = 0;\n        }\n\n        // Set the state from the element\'s value when the props change.\n        // This could happen as the result of a form event subworkflow that uses\n        // the "Set Form Element Property" activity to set the value property of\n        // the element.\n        if (element.value !== undefined && element.value != rating) {\n            setRating(element.value);\n        }\n    }, [props.element.value]);\n    // highlight-end\n\n    const handleClick = (event) => {\n        // highlight-next-line\n        const { element, raiseEvent } = props;\n\n        // Get the value from the button.\n        // Parse as an integer because the value will be a string.\n        const value = parseInt(event.target.value);\n\n        if (rating !== value) {\n            // Update the component state.\n            setRating(value);\n            // highlight-start\n            // Update the element\'s value.\n            element.value = value;\n\n            // Raise the changed event\n            raiseEvent("changed", value);\n            // highlight-end\n        }\n    };\n\n    // Button style to show only the button content.\n    const baseStyle: React.CSSProperties = {\n        background: "none",\n        border: "none",\n        outline: "none",\n        fontSize: "2em",\n        padding: 0,\n    };\n\n    // Button styles to show selected and unselected states.\n    const selectedStyle = { ...baseStyle, ...{ color: "#ffa91b" } };\n    const unselectedStyle = { ...baseStyle, ...{ color: "#c6c6c6" } };\n\n    // Create 5 buttons\n    const buttons = [];\n    for (let i = 1; i <= 5; i++) {\n        buttons.push(\n            <button\n                onClick={handleClick}\n                value={i}\n                style={rating < i ? unselectedStyle : selectedStyle}\n                disabled={disabled}\n            >\n                \u2605\n            </button>\n        );\n    }\n\n    return <div>{buttons}</div>;\n}\n')),(0,o.kt)("h2",{id:"deploy-the-activity"},"Deploy the Activity"),(0,o.kt)("p",null,"Follow the instructions to ",(0,o.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-web-overview#deployment"},"build and deploy the activity pack"),"."),(0,o.kt)("h2",{id:"test-the-activity"},"Test the Activity"),(0,o.kt)("p",null,"Once your activity pack is hosted and registered, your custom activity should appear in the activity toolbox in VertiGIS Studio Workflow Designer alongside the built-in activities, and can be used in the graphical interface like any other activity."),(0,o.kt)("p",null,"Now you can build a workflow that uses your new custom form element! It is essential that the register form elements custom activity be run before the custom form element is used, and for that reason, it is best practice to run the form element registration activity at the start of a workflow."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",null,"You can",(0,o.kt)("a",{href:(0,a.Z)("workflows/web-custom-form-element.json"),download:"custom-form-element.json",target:"_blank"}," ","download this demo workflow"," "),"that registers and displays the custom form element and then",(0,o.kt)("a",{href:"https://docs.vertigisstudio.com/workflow/latest/help/Default.htm#wf5/help/import-export-workflows.htm",target:"_blank"}," ","import it into the VertiGIS Studio Workflow Designer."," "),"You will have to"," ",(0,o.kt)("a",{href:(0,a.Z)("docs/workflow/sdk-web-overview#host-the-activity-pack")}," ","deploy the custom activity and form element")," ","for it to function. This workflow assumes you are hosting the activity pack with the dev server on https://localhost:57999/."))),(0,o.kt)("img",{src:(0,a.Z)("img/workflow-web-custom-form-element-basic.png")}))}f.isMDXComponent=!0},6010:(e,t,n)=>{"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:()=>o})}}]);