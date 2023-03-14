"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[5100],{3905:(e,t,i)=>{i.d(t,{Zo:()=>l,kt:()=>f});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(i),f=r,h=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return i?n.createElement(h,a(a({ref:t},l),{},{components:i})):n.createElement(h,a({ref:t},l))}));function f(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=i[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},3792:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=i(7462),r=(i(7294),i(3905));const o={title:"Workflow Activity Reference",sidebar_label:"Activity Reference",description:"VertiGIS Studio Workflow - Reference for workflow activities for web applications"},a=void 0,c={unversionedId:"workflow/sdk-web-activity-reference",id:"workflow/sdk-web-activity-reference",isDocsHomePage:!1,title:"Workflow Activity Reference",description:"VertiGIS Studio Workflow - Reference for workflow activities for web applications",source:"@site/docs/workflow/sdk-web-activity-reference.mdx",sourceDirName:"workflow",slug:"/workflow/sdk-web-activity-reference",permalink:"/docs/workflow/sdk-web-activity-reference",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/workflow/sdk-web-activity-reference.mdx",version:"current",frontMatter:{title:"Workflow Activity Reference",sidebar_label:"Activity Reference",description:"VertiGIS Studio Workflow - Reference for workflow activities for web applications"},sidebar:"workflow",previous:{title:"Create a Form Element",permalink:"/docs/workflow/sdk-web-create-element"},next:{title:"Form Element Reference",permalink:"/docs/workflow/sdk-web-form-reference"}},s=[{value:"Inputs and Outputs",id:"inputs-and-outputs",children:[]},{value:"App Activities",id:"app-activities",children:[]}],p={toc:s};function l({components:e,...t}){return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"inputs-and-outputs"},"Inputs and Outputs"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"execute")," method of an activity class has typed inputs and outputs. These inputs and outputs are decorated with ",(0,r.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-web-activity-block-tags"},"block tags")," to provide display hints in VertiGIS Studio Workflow Designer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/activities/CustomActivity.ts"',title:'"src/activities/CustomActivity.ts"'},'import type { IActivityHandler } from "@vertigis/workflow/runtime/IActivityHandler";\n\n/** An interface that defines the inputs of the activity. */\nexport interface CustomActivityInputs {\n    // highlight-start\n    /**\n     * @description The first input to the activity.\n     * @required\n     */\n    // highlight-end\n    input1?: string;\n\n    // highlight-start\n    /**\n     * @description The second input to the activity.\n     */\n    // highlight-end\n    input2?: number;\n}\n\n/** An interface that defines the outputs of the activity. */\nexport interface CustomActivityOutputs {\n    // highlight-start\n    /**\n     * @description The result of the activity.\n     */\n    // highlight-end\n    result: string;\n}\n\n/**\n * @category Custom Activities\n * @description A description of the activity.\n */\nexport class CustomActivity implements IActivityHandler {\n    /** Perform the execution logic of the activity. */\n    async execute(\n        inputs: CustomActivityInputs\n    ): Promise<CustomActivityOutputs> {\n        return { result: "test" };\n    }\n}\n')),(0,r.kt)("h2",{id:"app-activities"},"App Activities"),(0,r.kt)("p",null,"The VertiGIS Studio Workflow TypeScript SDK has a concept of an ",(0,r.kt)("inlineCode",{parentName:"p"},"AppActivity"),", which is an activity that needs access to its ",(0,r.kt)("a",{parentName:"p",href:"/docs/workflow/key-concepts#vertigis-studio-workflow-hosts"},"host"),"."),(0,r.kt)("p",null,"Activities that extend the ",(0,r.kt)("inlineCode",{parentName:"p"},"AppActivity")," gain access to the ",(0,r.kt)("inlineCode",{parentName:"p"},"map"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"app"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"widget")," properties."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Depending on the type of host application, different resources will be available. For example, Web AppBuilder for ArcGIS is the only platform which has access to the ",(0,r.kt)("inlineCode",{parentName:"p"},"widget")," property."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// highlight-next-line\nimport { AppActivity } from "@vertigis/workflow/runtime/app/AppActivity";\n\n/**\n * @supportedApps GWV\n * @category Custom Activities\n * @description An activity which adds a graphics layer to a map.\n */\n// highlight-next-line\nexport class CustomAppActivity extends AppActivity {\n    /** Perform the execution logic of the activity. */\n    async execute(inputs: object): Promise<void> {\n        // highlight-next-line\n        // This function has access to the this.map, this.app, and this.widget properties.\n        // ...\n    }\n}\n')),(0,r.kt)("p",null,"For a complete example, check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/workflow/tutorial-web-add-layer-to-map"},"Add Layer to Map")," custom activity tutorial."))}l.isMDXComponent=!0}}]);