"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[5660],{3808:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=t(7624),r=t(2172);const s={title:"Workflow Form Element Reference",sidebar_label:"Form Element Reference",description:"VertiGIS Studio Workflow - Reference for workflow form elements for web applications"},l=void 0,i={id:"workflow/sdk-web-form-reference",title:"Workflow Form Element Reference",description:"VertiGIS Studio Workflow - Reference for workflow form elements for web applications",source:"@site/docs/workflow/sdk-web-form-reference.mdx",sourceDirName:"workflow",slug:"/workflow/sdk-web-form-reference",permalink:"/docs/workflow/sdk-web-form-reference",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/workflow/sdk-web-form-reference.mdx",tags:[],version:"current",frontMatter:{title:"Workflow Form Element Reference",sidebar_label:"Form Element Reference",description:"VertiGIS Studio Workflow - Reference for workflow form elements for web applications"},sidebar:"workflow",previous:{title:"Activity Reference",permalink:"/docs/workflow/sdk-web-activity-reference"},next:{title:"Integrating the ArcGIS API for JavaScript",permalink:"/docs/workflow/sdk-web-integrating-the-arcgis-api"}},a={},c=[{value:"Styling Form Elements",id:"styling-form-elements",level:2},{value:"Inline CSS",id:"inline-css",level:3},{value:"CSS File",id:"css-file",level:3},{value:"Properties of Form Elements",id:"properties-of-form-elements",level:2},{value:"<code>value</code>",id:"value",level:3},{value:"Custom Public Properties",id:"custom-public-properties",level:3},{value:"Internal State",id:"internal-state",level:3},{value:"Raising Events",id:"raising-events",level:2}];function m(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"styling-form-elements",children:"Styling Form Elements"}),"\n",(0,o.jsx)(n.p,{children:"A custom form element can be styled using CSS in a few different ways:"}),"\n",(0,o.jsx)(n.h3,{id:"inline-css",children:"Inline CSS"}),"\n",(0,o.jsx)(n.p,{children:"Inline CSS is the simplest way to style your elements, but doesn't have the same flexibility as a CSS style sheet."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'const CustomFormElement = (props: FormElementProps) => (\n    // highlight-next-line\n    <button style={{ backgroundColor: "blue", color: "white" }}>\n        Click me\n    </button>\n);\n'})}),"\n",(0,o.jsx)(n.h3,{id:"css-file",children:"CSS File"}),"\n",(0,o.jsx)(n.p,{children:"You can separate your element styles into a separate CSS style sheet alongside your element. It is important that you import your CSS file within your component for the styles to be injected at runtime."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'// highlight-next-line\nimport "./CustomFormElement.css";\n\nconst CustomFormElement = (props: FormElementProps) => (\n    // highlight-next-line\n    <button className="CustomFormElement-button">Click me</button>\n);\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",metastring:'title="CustomFormElement.css"',children:".CustomFormElement-button {\n    background-color: blue;\n    color: white;\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"properties-of-form-elements",children:"Properties of Form Elements"}),"\n",(0,o.jsx)(n.h3,{id:"value",children:(0,o.jsx)(n.code,{children:"value"})}),"\n",(0,o.jsxs)(n.p,{children:["A custom form element may produce a ",(0,o.jsx)(n.code,{children:"value"})," that a workflow needs to access at runtime. To update the ",(0,o.jsx)(n.code,{children:"value"})," of your element, you can use the ",(0,o.jsx)(n.code,{children:"setValue()"})," API provided on the ",(0,o.jsx)(n.code,{children:"props"})," interface."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import * as React from "react";\nimport {\n    FormElementProps,\n    FormElementRegistration,\n} from "@vertigis/workflow";\n\n// We\'ve declared the type of `value` to be `string` here.\n// highlight-next-line\ninterface CustomFormElementProps extends FormElementProps<string> {}\n\nconst CustomFormElement = (props: CustomFormElementProps) => (\n    <input\n        onChange={(event) =>\n            // highlight-next-line\n            props.setValue(event.currentTarget.value)\n        }\n        // highlight-next-line\n        value={props.value}\n    />\n);\n'})}),"\n",(0,o.jsxs)(n.p,{children:["You can then use the ",(0,o.jsx)(n.a,{href:"https://docs.vertigisstudio.com/workflow/latest/help/get-form-element-property.html",children:"Get Form Element Property"})," activity to access the ",(0,o.jsx)(n.code,{children:"value"})," property, along with ",(0,o.jsx)(n.a,{href:"https://docs.vertigisstudio.com/workflow/latest/help/custom.html?anchor=custom_form_element_properties",children:"other properties supported by custom form elements"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"custom-public-properties",children:"Custom Public Properties"}),"\n",(0,o.jsxs)(n.p,{children:["You can declare additional properties on your ",(0,o.jsx)(n.code,{children:"props"})," interface that should be publicly accessible in the workflow."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import {\n    FormElementProps,\n    FormElementRegistration,\n} from "@vertigis/workflow";\n\ninterface CustomFormElementProps extends FormElementProps<string> {\n    // highlight-next-line\n    value2: string;\n}\n\nconst CustomFormElement = (props: CustomFormElementProps) => {\n    return (\n        <div>\n            <input\n                onChange={(event) =>\n                    props.setValue(event.currentTarget.value)\n                }\n                value={props.value}\n            />\n            <input\n                onChange={(event) =>\n                    // highlight-next-line\n                    props.setProperty(\n                        // highlight-next-line\n                        "value2",\n                        // highlight-next-line\n                        event.currentTarget.value\n                        // highlight-next-line\n                    )\n                }\n                // highlight-next-line\n                value={props.value2}\n            />\n        </div>\n    );\n};\n'})}),"\n",(0,o.jsx)(n.h3,{id:"internal-state",children:"Internal State"}),"\n",(0,o.jsxs)(n.p,{children:["For any state that you need to maintain for your element that ",(0,o.jsx)(n.em,{children:"doesn't"})," need to be public, you can use ",(0,o.jsx)(n.a,{href:"https://reactjs.org/docs/hooks-state.html",children:"React component state"})," to store your state locally within your element."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { useState } from "react";\nimport {\n    FormElementProps,\n    FormElementRegistration,\n} from "@vertigis/workflow";\n\ninterface CustomFormElementProps extends FormElementProps<string> {}\n\nconst CustomFormElement = (props: CustomFormElementProps) => {\n    // highlight-next-line\n    const [showInput, setShowInput] = useState(true);\n\n    return (\n        <div>\n            // highlight-next-line\n            <button onClick={() => setShowInput(!showInput)}>\n                Toggle input\n            </button>\n            // highlight-next-line\n            {showInput && (\n                <input\n                    onChange={(event) =>\n                        props.setValue(event.currentTarget.value)\n                    }\n                    value={props.value}\n                />\n            )}\n        </div>\n    );\n};\n'})}),"\n",(0,o.jsx)(n.h2,{id:"raising-events",children:"Raising Events"}),"\n",(0,o.jsxs)(n.p,{children:["Workflow form elements can raise ",(0,o.jsx)(n.a,{href:"https://docs.vertigisstudio.com/workflow/latest/help/form-events.html",children:"events"}),". A custom form element can also raise a ",(0,o.jsx)(n.code,{children:"custom"})," event."]}),"\n",(0,o.jsxs)(n.p,{children:["Events are raised through the ",(0,o.jsx)(n.code,{children:"raiseEvent()"})," function on the element ",(0,o.jsx)(n.code,{children:"props"}),". The following custom form element demonstrates how events can be raised."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'/**\n * A simple React Component that demonstrates raising events.\n */\nconst CustomFormElement = (props: FormElementProps) => {\n    const raiseCustom = (event) => {\n        // Raise the custom event with a custom event value.\n        // The event value is arbitrary and can be defined\n        // however you would like.\n        const eventValue = {\n            customEventType: "custom1",\n            data: new Date(),\n        };\n\n        props.raiseEvent("custom", eventValue);\n    };\n\n    return (\n        <div>\n            <p>A simple custom form element</p>\n            <button onClick={raiseCustom}>Raise custom event</button>\n        </div>\n    );\n};\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},2172:(e,n,t)=>{t.d(n,{I:()=>i,M:()=>l});var o=t(1504);const r={},s=o.createContext(r);function l(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);