(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{189:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var r=n(3),o=(n(0),n(255));const l={title:"Workflow Form Element Reference",sidebar_label:"Form Element Reference",description:"Geocortex Workflow - Reference for workflow form elements for web applications"},a={unversionedId:"workflow/sdk-web-form-reference",id:"workflow/sdk-web-form-reference",isDocsHomePage:!1,title:"Workflow Form Element Reference",description:"Geocortex Workflow - Reference for workflow form elements for web applications",source:"@site/docs/workflow/sdk-web-form-reference.mdx",slug:"/workflow/sdk-web-form-reference",permalink:"/docs/workflow/sdk-web-form-reference",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/sdk-web-form-reference.mdx",version:"current",sidebar_label:"Form Element Reference",sidebar:"workflow",previous:{title:"Workflow Activity Reference",permalink:"/docs/workflow/sdk-web-activity-reference"},next:{title:"Integrating the ArcGIS API for JavaScript",permalink:"/docs/workflow/sdk-web-integrating-the-arcgis-api"}},s=[{value:"Styling Form Elements",id:"styling-form-elements",children:[{value:"Inline CSS",id:"inline-css",children:[]},{value:"CSS File",id:"css-file",children:[]}]},{value:"Properties of Form Elements",id:"properties-of-form-elements",children:[{value:"<code>value</code>",id:"value",children:[]},{value:"Custom Public Properties",id:"custom-public-properties",children:[]},{value:"Internal State",id:"internal-state",children:[]}]},{value:"Raising Events",id:"raising-events",children:[]}],i={toc:s};function c({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"styling-form-elements"},"Styling Form Elements"),Object(o.b)("p",null,"A custom form element can be styled using CSS in a few different ways:"),Object(o.b)("h3",{id:"inline-css"},"Inline CSS"),Object(o.b)("p",null,"Inline CSS is the simplest way to style your elements, but doesn't have the same flexibility as a CSS style sheet."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),'const CustomFormElement = (props: FormElementProps) => (\n    // highlight-next-line\n    <button style={{ backgroundColor: "blue", color: "white" }}>\n        Click me\n    </button>\n);\n')),Object(o.b)("h3",{id:"css-file"},"CSS File"),Object(o.b)("p",null,"You can separate your element styles into a separate CSS style sheet alongside your element. It is important that you import your CSS file within your component for the styles to be injected at runtime."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),'// highlight-next-line\nimport "./CustomFormElement.css";\n\nconst CustomFormElement = (props: FormElementProps) => (\n    // highlight-next-line\n    <button className="CustomFormElement-button">Click me</button>\n);\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css",metastring:'title="CustomFormElement.css"',title:'"CustomFormElement.css"'}),".CustomFormElement-button {\n    background-color: blue;\n    color: white;\n}\n")),Object(o.b)("h2",{id:"properties-of-form-elements"},"Properties of Form Elements"),Object(o.b)("h3",{id:"value"},Object(o.b)("inlineCode",{parentName:"h3"},"value")),Object(o.b)("p",null,"A custom form element may produce a ",Object(o.b)("inlineCode",{parentName:"p"},"value")," that a workflow needs to access at runtime. To update the ",Object(o.b)("inlineCode",{parentName:"p"},"value")," of your element, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"setValue()")," API provided on the ",Object(o.b)("inlineCode",{parentName:"p"},"props")," interface."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),'import * as React from "react";\nimport {\n    FormElementProps,\n    FormElementRegistration,\n} from "@geocortex/workflow/runtime";\n\n// We\'ve declared the type of `value` to be `string` here.\n// highlight-next-line\ninterface CustomFormElementProps extends FormElementProps<string> {}\n\nconst CustomFormElement = (props: CustomFormElementProps) => (\n    <input\n        onChange={(event) =>\n            // highlight-next-line\n            props.setValue(event.currentTarget.value)\n        }\n        // highlight-next-line\n        value={props.value}\n    />\n);\n')),Object(o.b)("p",null,"You can then use the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activities/get-form-element-property.htm"}),"Get Form Element Property")," activity to access the ",Object(o.b)("inlineCode",{parentName:"p"},"value")," property, along with ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/form-elements/custom.htm#Custom_Form_Element_Properties%3FTocPath%3DForms%7CForm%2520Element%2520Reference%7CCustom%2520Form%2520Elements%7C_____1"}),"other properties supported by custom form elements"),"."),Object(o.b)("h3",{id:"custom-public-properties"},"Custom Public Properties"),Object(o.b)("p",null,"You can declare additional properties on your ",Object(o.b)("inlineCode",{parentName:"p"},"props")," interface that should be publicly accessible in the workflow."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),'import {\n    FormElementProps,\n    FormElementRegistration,\n} from "@geocortex/workflow/runtime";\n\ninterface CustomFormElementProps extends FormElementProps<string> {\n    // highlight-next-line\n    value2: string;\n}\n\nconst CustomFormElement = (props: CustomFormElementProps) => {\n    return (\n        <div>\n            <input\n                onChange={(event) =>\n                    props.setValue(event.currentTarget.value)\n                }\n                value={props.value}\n            />\n            <input\n                onChange={(event) =>\n                    // highlight-next-line\n                    props.setProperty(\n                        // highlight-next-line\n                        "value2",\n                        // highlight-next-line\n                        event.currentTarget.value\n                        // highlight-next-line\n                    )\n                }\n                // highlight-next-line\n                value={props.value2}\n            />\n        </div>\n    );\n};\n')),Object(o.b)("h3",{id:"internal-state"},"Internal State"),Object(o.b)("p",null,"For any state that you need to maintain for your element that ",Object(o.b)("em",{parentName:"p"},"doesn't")," need to be public, you can use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactjs.org/docs/hooks-state.html"}),"React component state")," to store your state locally within your element."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),'import { useState } from "react";\nimport {\n    FormElementProps,\n    FormElementRegistration,\n} from "@geocortex/workflow/runtime";\n\ninterface CustomFormElementProps extends FormElementProps<string> {}\n\nconst CustomFormElement = (props: CustomFormElementProps) => {\n    // highlight-next-line\n    const [showInput, setShowInput] = useState(true);\n\n    return (\n        <div>\n            // highlight-next-line\n            <button onClick={() => setShowInput(!showInput)}>\n                Toggle input\n            </button>\n            // highlight-next-line\n            {showInput && (\n                <input\n                    onChange={(event) =>\n                        props.setValue(event.currentTarget.value)\n                    }\n                    value={props.value}\n                />\n            )}\n        </div>\n    );\n};\n')),Object(o.b)("h2",{id:"raising-events"},"Raising Events"),Object(o.b)("p",null,"Workflow form elements can raise ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/forms.htm#Events%3FTocPath%3DForms%7COverview%2520of%2520Forms%7CEvents%7C_____0"}),"events"),". A custom form element can also raise a ",Object(o.b)("inlineCode",{parentName:"p"},"custom")," event."),Object(o.b)("p",null,"Events are raised through the ",Object(o.b)("inlineCode",{parentName:"p"},"raiseEvent()")," function on the element ",Object(o.b)("inlineCode",{parentName:"p"},"props"),". The following custom form element demonstrates how events can be raised."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),'/**\n * A simple React Component that demonstrates raising events.\n */\nconst CustomFormElement = (props: FormElementProps) => {\n    const raiseCustom = (event) => {\n        // Raise the custom event with a custom event value.\n        // The event value is arbitrary and can be defined\n        // however you would like.\n        const eventValue = {\n            customEventType: "custom1",\n            data: new Date(),\n        };\n\n        props.raiseEvent("custom", eventValue);\n    };\n\n    return (\n        <div>\n            <p>A simple custom form element</p>\n            <button onClick={raiseCustom}>Raise custom event</button>\n        </div>\n    );\n};\n')))}c.isMDXComponent=!0},255:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),m=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=m(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,a=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=m(n),b=r,f=p["".concat(a,".").concat(b)]||p[b]||u[b]||l;return n?o.a.createElement(f,s(s({ref:t},c),{},{components:n})):o.a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<l;c++)a[c]=n[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);