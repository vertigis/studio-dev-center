(window.webpackJsonp=window.webpackJsonp||[]).push([[104,142],{193:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return m})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(3),o=(n(0),n(255)),a=n(256),i=n(58),s=n(264),l=n(265);const c={title:"Implement a Star Rating Custom Form Element",description:"Geocortex Workflow - Implement a star rating form element for web applications"},m={unversionedId:"workflow/tutorial-web-implement-star-rating-form-element",id:"workflow/tutorial-web-implement-star-rating-form-element",isDocsHomePage:!1,title:"Implement a Star Rating Custom Form Element",description:"Geocortex Workflow - Implement a star rating form element for web applications",source:"@site/docs/workflow/tutorial-web-implement-star-rating-form-element.mdx",slug:"/workflow/tutorial-web-implement-star-rating-form-element",permalink:"/docs/workflow/tutorial-web-implement-star-rating-form-element",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/tutorial-web-implement-star-rating-form-element.mdx",version:"current",sidebar:"workflow",previous:{title:"Implement an activity that creates a QR Code image using a Third Party Library",permalink:"/docs/workflow/tutorial-web-qr-code-activity"},next:{title:"Implement a Star Rating Custom Form Element using a Third Party Library",permalink:"/docs/workflow/tutorial-web-implement-third-party-star-rating-form-element"}},u=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Set up the Custom Form Element Skeleton",id:"set-up-the-custom-form-element-skeleton",children:[]},{value:"Set up a Form Element Registration Activity",id:"set-up-a-form-element-registration-activity",children:[]},{value:"Build the Star Rating UI",id:"build-the-star-rating-ui",children:[]},{value:"Add Interactivity",id:"add-interactivity",children:[]},{value:"Expose the Form Elements Value",id:"expose-the-form-elements-value",children:[]},{value:"Deploy the Activity",id:"deploy-the-activity",children:[]},{value:"Test the Activity",id:"test-the-activity",children:[]}],p={toc:u};function b({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Implementing a custom ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/workflow/key-concepts#form-elements"}),"form element")," allows you to augment the existing ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/form-elements/auto-complete.htm%3FTocPath%3DForms%7CForm%2520Element%2520Reference%7C_____0"}),"form elements that come with Geocortex Workflow"),"."),Object(o.b)("p",null,"This article will walk you through creating a form element for rating that allows you to select up to five stars."),Object(o.b)("img",{src:Object(a.a)("img/workflow-web-custom-star-rating.png")}),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)(i.default,{mdxType:"WebPrereqs"}),Object(o.b)("p",null,"Custom workflow form elements are built in TypeScript and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactjs.org/"}),"React"),"."),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"Implementing a custom form element for web applications consists of three steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Creating the custom form element and implementing the UI."),Object(o.b)("li",{parentName:"ol"},"Creating an activity which will register this form component with Geocortex Workflow."),Object(o.b)("li",{parentName:"ol"},"Registering the activity with Geocortex Workflow and running it ",Object(o.b)("strong",{parentName:"li"},"before")," using the custom form element.")),Object(o.b)("h2",{id:"set-up-the-custom-form-element-skeleton"},"Set up the Custom Form Element Skeleton"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create a new file ",Object(o.b)("inlineCode",{parentName:"li"},"StarRatingElement.tsx")," in the activity SDK."),Object(o.b)("li",{parentName:"ol"},"Create a skeleton React form element.")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="src/form-elements/StarRatingElement.tsx"',title:'"src/form-elements/StarRatingElement.tsx"'}),'import * as React from "react";\nimport { CustomFormElementProps } from "@geocortex/workflow/runtime/app/RegisterCustomFormElementBase";\n\nfunction StarRatingElement(props: CustomFormElementProps) {\n    return <div>Hello. Is it me you\'re looking for.</div>;\n}\n\nexport default StarRatingElement;\n')),Object(o.b)("h2",{id:"set-up-a-form-element-registration-activity"},"Set up a Form Element Registration Activity"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Run the command ",Object(o.b)("inlineCode",{parentName:"li"},"npm run generate")," and name the activity ",Object(o.b)("inlineCode",{parentName:"li"},"RegisterCustomFormElements"),"."),Object(o.b)("li",{parentName:"ol"},"Modify the activity class declaration to extend the ",Object(o.b)("inlineCode",{parentName:"li"},"RegisterCustomFormElementBase")," base class."),Object(o.b)("li",{parentName:"ol"},"Remove unnecessary inputs and outputs and register your custom form element in the ",Object(o.b)("inlineCode",{parentName:"li"},"execute")," method.")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/activities/CustomFormElementRegistration.tsx"',title:'"src/activities/CustomFormElementRegistration.tsx"'}),'import { RegisterCustomFormElementBase } from "@geocortex/workflow/runtime/app/RegisterCustomFormElementBase";\nimport StarRatingElement from "../form-elements/StarRatingElement";\n\n/**\n * @category Custom Activities\n * @description Registers custom form elements for the application\n */\nexport class RegisterCustomFormElements extends RegisterCustomFormElementBase {\n    async execute(): Promise<void> {\n        this.register("StarRatingElement", StarRatingElement);\n    }\n}\n')),Object(o.b)("h2",{id:"build-the-star-rating-ui"},"Build the Star Rating UI"),Object(o.b)("p",null,"Next, we are going to build the form element to display the five stars the user can select. Form Elements are just React elements, and use React patterns to define their UI."),Object(o.b)("p",null,"First, let's build the star DOM elements."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="src/form-elements/StarRatingElement.tsx"',title:'"src/form-elements/StarRatingElement.tsx"'}),'import * as React from "react";\nimport { useState, useEffect } from "react";\nimport { CustomFormElementProps } from "@geocortex/workflow/runtime/app/RegisterCustomFormElementBase";\n\nexport default function StarRatingFormElement(\n    props: CustomFormElementProps\n) {\n    const rating = 5;\n\n    // Button style to show only the button content.\n    const baseStyle: React.CSSProperties = {\n        background: "none",\n        border: "none",\n        outline: "none",\n        fontSize: "2em",\n        padding: 0,\n    };\n\n    // Button styles to show selected and unselected states.\n    const selectedStyle = { ...baseStyle, ...{ color: "#ffa91b" } };\n    const unselectedStyle = { ...baseStyle, ...{ color: "#c6c6c6" } };\n\n    // Create 5 buttons\n    const buttons = [];\n    for (let i = 1; i <= 5; i++) {\n        buttons.push(\n            <button\n                value={i}\n                style={rating < i ? unselectedStyle : selectedStyle}\n            >\n                \u2605\n            </button>\n        );\n    }\n\n    return <div>{buttons}</div>;\n}\n')),Object(o.b)("h2",{id:"add-interactivity"},"Add Interactivity"),Object(o.b)("p",null,"Next, we are going to add interactivity to the form element to show how many stars the user has selected."),Object(o.b)(s.a,{defaultValue:"custom-form-element",values:[{label:"Star Rating Form Element",value:"custom-form-element"},{label:"User Interface",value:"ui"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"custom-form-element",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="src/form-elements/StarRatingElement.tsx"',title:'"src/form-elements/StarRatingElement.tsx"'}),'import * as React from "react";\nimport { useState, useEffect } from "react";\nimport { CustomFormElementProps } from "@geocortex/workflow/runtime/app/RegisterCustomFormElementBase";\n\nexport default function StarRatingFormElement(\n    props: CustomFormElementProps\n) {\n    // highlight-next-line\n    let [rating, setRating] = useState(0);\n\n    // highlight-start\n    const handleClick = (event) => {\n        // Get the value from the button.\n        // Parse as an integer because the value will be a string.\n        const value = parseInt(event.target.value);\n\n        if (rating !== value) {\n            // Update the component state.\n            setRating(value);\n        }\n    };\n    // highlight-end\n\n    // Button style to show only the button content.\n    const baseStyle: React.CSSProperties = {\n        background: "none",\n        border: "none",\n        outline: "none",\n        fontSize: "2em",\n        padding: 0,\n    };\n\n    // Button styles to show selected and unselected states.\n    const selectedStyle = { ...baseStyle, ...{ color: "#ffa91b" } };\n    const unselectedStyle = { ...baseStyle, ...{ color: "#c6c6c6" } };\n\n    // Create 5 buttons\n    const buttons = [];\n    for (let i = 1; i <= 5; i++) {\n        buttons.push(\n            <button\n                // highlight-next-line\n                onClick={handleClick}\n                value={i}\n                style={rating < i ? unselectedStyle : selectedStyle}\n            >\n                \u2605\n            </button>\n        );\n    }\n\n    return <div>{buttons}</div>;\n}\n'))),Object(o.b)(l.a,{value:"ui",mdxType:"TabItem"},Object(o.b)("img",{src:Object(a.a)("img/workflow-web-custom-star-rating.png")}))),Object(o.b)("h2",{id:"expose-the-form-elements-value"},"Expose the Form Elements Value"),Object(o.b)("p",null,"Finally, we are going to expose the form elements value to the larger workflow. For more information on this, check out the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/workflow/sdk-web-form-reference#properties-of-form-elements"}),"form element reference"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="src/form-elements/StarRatingElement.tsx"',title:'"src/form-elements/StarRatingElement.tsx"'}),'import * as React from "react";\nimport { useState, useEffect } from "react";\nimport { CustomFormElementProps } from "@geocortex/workflow/runtime/app/RegisterCustomFormElementBase";\n\nexport default function StarRatingFormElement(\n    props: CustomFormElementProps\n) {\n    // Set the default state of the component.\n    let [rating, setRating] = useState(0);\n\n    // highlight-start\n    useEffect(() => {\n        const { element } = props;\n\n        if (element.value === undefined) {\n            element.value = 0;\n        }\n\n        // Set the state from the element\'s value when the props change.\n        // This could happen as the result of a form event subworkflow that uses\n        // the "Set Form Element Property" activity to set the value property of\n        // the element.\n        if (element.value !== undefined && element.value != rating) {\n            setRating(element.value);\n        }\n    }, [props.element.value]);\n    // highlight-end\n\n    const handleClick = (event) => {\n        // highlight-next-line\n        const { element, raiseEvent } = props;\n\n        // Get the value from the button.\n        // Parse as an integer because the value will be a string.\n        const value = parseInt(event.target.value);\n\n        if (rating !== value) {\n            // Update the component state.\n            setRating(value);\n            // highlight-start\n            // Update the element\'s value.\n            element.value = value;\n\n            // Raise the changed event\n            raiseEvent("changed", value);\n            // highlight-end\n        }\n    };\n\n    // Button style to show only the button content.\n    const baseStyle: React.CSSProperties = {\n        background: "none",\n        border: "none",\n        outline: "none",\n        fontSize: "2em",\n        padding: 0,\n    };\n\n    // Button styles to show selected and unselected states.\n    const selectedStyle = { ...baseStyle, ...{ color: "#ffa91b" } };\n    const unselectedStyle = { ...baseStyle, ...{ color: "#c6c6c6" } };\n\n    // Create 5 buttons\n    const buttons = [];\n    for (let i = 1; i <= 5; i++) {\n        buttons.push(\n            <button\n                onClick={handleClick}\n                value={i}\n                style={rating < i ? unselectedStyle : selectedStyle}\n                disabled={disabled}\n            >\n                \u2605\n            </button>\n        );\n    }\n\n    return <div>{buttons}</div>;\n}\n')),Object(o.b)("h2",{id:"deploy-the-activity"},"Deploy the Activity"),Object(o.b)("p",null,"Follow the instructions to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/workflow/sdk-web-overview#deployment"}),"build and deploy the activity pack"),"."),Object(o.b)("h2",{id:"test-the-activity"},"Test the Activity"),Object(o.b)("p",null,"Once your activity pack is hosted and registered, your custom activity should appear in the activity toolbox in Geocortex Workflow Designer alongside the built-in activities, and can be used in the graphical interface like any other activity."),Object(o.b)("p",null,"Now you can build a workflow that uses your new custom form element! It is essential that the register form elements custom activity be run before the custom form element is used, and for that reason, it is best practice to run the form element registration activity at the start of a workflow."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",null,"You can",Object(o.b)("a",{href:Object(a.a)("workflows/web-custom-form-element.json"),download:"custom-form-element.json"}," ","download this demo workflow"," "),"that registers and displays the custom form element and then",Object(o.b)("a",{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/import-export-workflows.htm",target:"_blank"}," ","import it into the Geocortex Workflow Designer."," "),"You will have to"," ",Object(o.b)("a",{href:Object(a.a)("docs/workflow/sdk-web-overview#host-the-activity-pack")}," ","deploy the custom activity and form element")," ","for it to function. This workflow assumes you are hosting the activity pack with the dev server on https://localhost:57999/."))),Object(o.b)("img",{src:Object(a.a)("img/workflow-web-custom-form-element-basic.png")}))}b.isMDXComponent=!0},255:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),m=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=m(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(n),b=r,d=u["".concat(i,".").concat(b)]||u[b]||p[b]||a;return n?o.a.createElement(d,s(s({ref:t},c),{},{components:n})):o.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},256:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(21),o=n(257);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},257:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},258:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},262:function(e,t,n){"use strict";var r=n(0),o=n(263);t.a=function(){const e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},263:function(e,t,n){"use strict";var r=n(0);const o=Object(r.createContext)(void 0);t.a=o},264:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(262),i=n(258),s=n(56),l=n.n(s);const c=37,m=39;t.a=function(e){const{lazy:t,block:n,defaultValue:s,values:u,groupId:p,className:b}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(a.a)(),[h,g]=Object(r.useState)(s),v=r.Children.toArray(e.children);if(null!=p){const e=d[p];null!=e&&e!==h&&u.some((t=>t.value===e))&&g(e)}const w=e=>{g(e),null!=p&&f(p,e)},y=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},b)},u.map((({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===e,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":h===e}),key:e,ref:e=>y.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case m:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case c:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(y,e.target,e)},onFocus:()=>w(e),onClick:()=>{w(e)}},t)))),t?Object(r.cloneElement)(v.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}},265:function(e,t,n){"use strict";var r=n(3),o=n(0),a=n.n(o);t.a=function({children:e,hidden:t,className:n}){return a.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:t,className:n}),e)}},58:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var r=n(3),o=(n(0),n(255));const a={},i={unversionedId:"workflow/snippets/prereqs-web",id:"workflow/snippets/prereqs-web",isDocsHomePage:!1,title:"prereqs-web",description:"Follow the instructions in the Web Applications SDK page to set up your development environment.",source:"@site/docs/workflow/snippets/prereqs-web.mdx",slug:"/workflow/snippets/prereqs-web",permalink:"/docs/workflow/snippets/prereqs-web",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/snippets/prereqs-web.mdx",version:"current"},s=[],l={toc:s};function c({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Follow the instructions in the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/workflow/sdk-web-overview"}),"Web Applications SDK")," page to set up your development environment."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"A working knowledge of ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.typescriptlang.org/"}),"TypeScript")," is recommended before extending Workflow for web-based hosts."))))}c.isMDXComponent=!0}}]);