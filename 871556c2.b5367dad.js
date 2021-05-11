(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return m})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return u}));var o=n(3),a=(n(0),n(255)),i=n(256),r=n(261),c=n(260),s=n(264),l=n(265);const p={title:"Component Reference",description:"Geocortex Web - Reference for custom components in Geocortex Web"},m={unversionedId:"web/sdk-components-reference",id:"web/sdk-components-reference",isDocsHomePage:!1,title:"Component Reference",description:"Geocortex Web - Reference for custom components in Geocortex Web",source:"@site/docs/web/sdk-components-reference.mdx",slug:"/web/sdk-components-reference",permalink:"/docs/web/sdk-components-reference",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/sdk-components-reference.mdx",version:"current",sidebar:"web",previous:{title:"Create a Component",permalink:"/docs/web/sdk-components-create"},next:{title:"Component Hooks",permalink:"/docs/web/sdk-components-hooks"}},d=[{value:"Component Registration",id:"component-registration",children:[]},{value:"Components and Layout",id:"components-and-layout",children:[]},{value:"Component Anatomy",id:"component-anatomy",children:[{value:"Rendering",id:"rendering",children:[]},{value:"Props",id:"props",children:[]},{value:"State",id:"state",children:[]}]},{value:"Models",id:"models",children:[{value:"Configuration",id:"configuration",children:[]},{value:"Component Defaults",id:"component-defaults",children:[]},{value:"Initialization and Teardown",id:"initialization-and-teardown",children:[]}]},{value:"Component Lifecycle",id:"component-lifecycle",children:[{value:"Activation and Deactivation",id:"activation-and-deactivation",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]}],b={toc:d};function u({components:e,...t}){return Object(a.b)("wrapper",Object(o.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The following is an example of a custom component that has been created using the Geocortex Web SDK. In general, Geocortex Web components are functional React components extended with a few new behaviors and patterns."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),'import React, { useState } from "react";\nimport {\n    LayoutElement,\n    LayoutElementProperties,\n} from "@vertigis/web/components";\nimport List from "@vertigis/web/ui/List";\nimport ListItem from "@vertigis/web/ui/ListItem";\nimport TitleBar from "@vertigis/web/ui/TitleBar";\nimport Button from "@vertigis/web/ui/Button";\nimport { useWatchAndRerender } from "@vertigis/web/ui";\nimport DialogActions from "@vertigis/web/ui/DialogActions";\nimport ExampleComponentModel from "./ExampleComponentModel";\n\nexport default function ExampleComponent(\n    props: LayoutElementProperties<ExampleComponentModel>\n) {\n    const { model } = props;\n    const [hidden, setHidden] = useState(false);\n\n    useWatchAndRerender(model, "items");\n\n    return (\n        <LayoutElement {...props}>\n            <List>\n                <DialogActions key="dialog-actions">\n                    <TitleBar text="Some Title"></TitleBar>\n                    {hidden && (\n                        <Button onClick={() => setHidden(false)}>\n                            Show Component\n                        </Button>\n                    )}\n                    {!hidden && (\n                        <Button onClick={() => setHidden(true)}>\n                            Hide Component\n                        </Button>\n                    )}\n                </DialogActions>\n                {!hidden &&\n                    model.items\n                        .map((item, idx) => (\n                            <ListItem key={idx}>{item}</ListItem>\n                        ))\n                        .toArray()}\n            </List>\n        </LayoutElement>\n    );\n}\n')),Object(a.b)("h2",{id:"component-registration"},"Component Registration"),Object(a.b)("p",null,"All components need to be registered with the Geocortex Web API in order to be used in a layout."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),'export default function (registry: LibraryRegistry) {\n    // ... other item registrations\n\n    registry.registerComponent({\n        // The name used to identify the component in the layout\n        name: "example",\n        // The namespace used to identify the component in the layout.\n        namespace: "custom.abc123",\n        // The class corresponding to the React Functional Component\n        getComponentType: () => ExampleComponent,\n        // The model type this component is bound to.\n        itemType: "example-model",\n        title: "Example Component",\n    });\n')),Object(a.b)("h2",{id:"components-and-layout"},"Components and Layout"),Object(a.b)("p",null,"Once a component has been registered, it can be used in a layout by referring it by name and namespace."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1" xmlns:custom="custom.abc123">\n    <custom:example/>\n</layout>\n')),Object(a.b)("h2",{id:"component-anatomy"},"Component Anatomy"),Object(a.b)("p",null,"At its core, each custom component is a React component that takes in props and renders a DOM element. However, custom components can implement a couple of patterns which are specific to Geocortex Web."),Object(a.b)("h3",{id:"rendering"},"Rendering"),Object(a.b)("p",null,"Geocortex Web custom components return a DOM element, like any other React component, but with one restriction. The root DOM element must be a ",Object(a.b)("inlineCode",{parentName:"p"},"<LayoutElement/>")," node with all the layout attributes passed as props."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),"export default function ExampleComponent(\n    props: LayoutElementProperties<ExampleComponentModel>\n) {\n    return (\n        // highlight-next-line\n        <LayoutElement {...props}>\n            <p>Some Content</p>\n        </LayoutElement>\n    );\n}\n")),Object(a.b)("h3",{id:"props"},"Props"),Object(a.b)("p",null,"Custom components take in a special type of props, ",Object(a.b)("inlineCode",{parentName:"p"},"LayoutElementProperties"),". These props include the React props but also include props specific to the SDK, such as;"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The model associated with the component,"),Object(a.b)("li",{parentName:"ul"},"The ID of the component in the layout"),Object(a.b)("li",{parentName:"ul"},"The width and height, along with other ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/web/configuration-layout-reference#presentation-attributes"}),"presentation attributes")," in the layout")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"LayoutElementProperties")," interface takes in ",Object(a.b)("inlineCode",{parentName:"p"},"ComponentModelBase")," type class corresponding to the model associated with the component. This will give the ",Object(a.b)("inlineCode",{parentName:"p"},"props.model")," property the correct type."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),"export default function ExampleComponent(\n    props: LayoutElementProperties<ExampleComponentModel>\n) {\n    // highlight-next-line\n    const { model, id, width, height, slot, stretch } = props;\n    ...\n}\n")),Object(a.b)("h3",{id:"state"},"State"),Object(a.b)("p",null,"Geocortex Web uses two patterns to manage state in a component. First, any purely local UI or presentation logic state should be captured using the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://reactjs.org/docs/hooks-state.html"}),"React state hook")," pattern. For data that comes from configuration or other sources, like a service, the components model should be treated as the state."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),'export default function ExampleComponent(\n    props: LayoutElementProperties<ExampleComponentModel>\n) {\n    // highlight-start\n    // Presentation logic state\n    const [hidden, setHidden] = useState(false);\n    // Business Data / Objects\n    useWatchAndRerender(props.model, "modelProperty")\n    // highlight-end\n    ...\n}\n')),Object(a.b)("h2",{id:"models"},"Models"),Object(a.b)("p",null,"Every component is bound to specific ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/configuration-app-config-getting-started#anatomy-of-an-app-config"}),Object(a.b)("strong",{parentName:"a"},"item type")),", and each item type is bound to a specific model.\nIn this snippet, the ",Object(a.b)("inlineCode",{parentName:"p"},"ExampleComponent")," is bound to the ",Object(a.b)("inlineCode",{parentName:"p"},"example-model")," item type. The ",Object(a.b)("inlineCode",{parentName:"p"},"ExampleComponentModel")," is registered as the ",Object(a.b)("inlineCode",{parentName:"p"},"example-model")," item type, meaning that an ",Object(a.b)("inlineCode",{parentName:"p"},"ExampleComponentModel")," will be injected into the props of each ",Object(a.b)("inlineCode",{parentName:"p"},"ExampleComponent"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),'export default function (registry: LibraryRegistry) {\n    // ... other item registrations\n\n    registry.registerComponent({\n        name: "example",\n        namespace: LAYOUT_NAMESPACE,\n        getComponentType: () => ExampleComponent,\n        // highlight-next-line\n        itemType: "example-model",\n        title: "Example Component",\n    });\n    registry.registerModel({\n        getModel: (config) => new ExampleComponentModel(config),\n        // highlight-next-line\n        itemType: "example-model",\n    });\n}\n')),Object(a.b)("p",null,"It's best practice to use the model to define configurable or persistent state, and use the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/sdk-components-hooks"}),"component hooks")," to interact with the model. For UI specific transient state, like an active selection, it is recommended you use the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://reactjs.org/docs/hooks-state.html"}),"React state hooks"),"."),Object(a.b)("p",null,"For example, the following component delegates the management of the list item content to its model. The component does not have to concern itself with whether those list items come from config, dynamic application events, or other sources."),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"This example uses the ",Object(a.b)("inlineCode",{parentName:"p"},"useWatchAndRerender")," ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/sdk-components-hooks"}),"component hook")," in order to dynamically update the component when the model changes."))),Object(a.b)(s.a,{defaultValue:"component",values:[{label:"Component",value:"component"},{label:"Model",value:"model"}],mdxType:"Tabs"},Object(a.b)(l.a,{value:"component",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),'export default function ExampleComponent(\n    props: LayoutElementProperties<ExampleComponentModel>\n) {\n    const { model } = props;\n\n    useWatchAndRerender(model, "items");\n\n    return (\n        <LayoutElement {...props}>\n            <List>\n                {model.items\n                    .map((item, idx) => (\n                        <ListItem key={idx}>{item}</ListItem>\n                    ))\n                    .toArray()}\n            </List>\n        </LayoutElement>\n    );\n}\n'))),Object(a.b)(l.a,{value:"model",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"export default class ExampleComponentModel extends ComponentModelBase {\n    items: Collection<string> = new Collection<string>();\n\n    // ... populate the items list somehow\n}\n")))),Object(a.b)("h3",{id:"configuration"},"Configuration"),Object(a.b)("p",null,"Geocortex Web provides a suite of flexible, highly configurable components, and this flexibility is powered in a large part by the relationship between app config, models, and components. Each model has the potential to consume static app config, which it can deserialize and transform before providing the data to its associated component for rendering."),Object(a.b)("p",null,"The following model defines a simple configurable property ",Object(a.b)("inlineCode",{parentName:"p"},"items"),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The shape of this property in the ",Object(a.b)("strong",{parentName:"li"},"app config JSON file")," is defined by the ",Object(a.b)("inlineCode",{parentName:"li"},"items")," property in the ",Object(a.b)("inlineCode",{parentName:"li"},"ExampleComponentModelProperties")," interface."),Object(a.b)("li",{parentName:"ul"},"The shape of this property in the ",Object(a.b)("strong",{parentName:"li"},"model")," is defined by the ",Object(a.b)("inlineCode",{parentName:"li"},"items")," property in the ",Object(a.b)("inlineCode",{parentName:"li"},"ExampleComponentModel")," class.")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"ExampleComponentModel")," class consumes the configuration by extending the ",Object(a.b)("inlineCode",{parentName:"p"},"ComponentModelBase<ExampleComponentProperties>")," interface, using the ",Object(a.b)("inlineCode",{parentName:"p"},"@serializable")," class decorator, and then defining serialization logic in an override of the ",Object(a.b)("inlineCode",{parentName:"p"},"_getSerializableProperties()")," method. You can learn more about app config serialization in ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/sdk-serializable-properties"}),"this article"),"."),Object(a.b)(s.a,{defaultValue:"model",values:[{label:"Model",value:"model"},{label:"App Config",value:"config"}],mdxType:"Tabs"},Object(a.b)(l.a,{value:"model",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),'interface ExampleComponentModelProperties\n    extends ComponentModelProperties {\n    items?: string[];\n}\n\n// highlight-next-line\n@serializable\nexport default class ExampleComponentModel extends ComponentModelBase<ExampleComponentModelProperties> {\n    items: Collection<string> = new Collection<string>();\n\n    protected _getSerializableProperties(): PropertyDefs<ExampleComponentModelProperties> {\n        // highlight-next-line\n        const props = super._getSerializableProperties();\n        return {\n            ...props,\n            items: {\n                serializeModes: ["initial"],\n                default: ["Default Value"],\n                serialize: () => this.items.toArray(),\n                deserialize: (items) => {\n                    this.items.removeAll();\n                    this.items.addMany(items);\n                },\n            },\n        };\n    }\n}\n'))),Object(a.b)(l.a,{value:"config",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),' {\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "$type": "example-component",\n            "id" : "example-component",\n            "items" : [\n                "Item 1",\n                "Item 2",\n                "Item 3"\n            ]\n        },\n        ...\n    ]\n}\n')))),Object(a.b)("h3",{id:"component-defaults"},"Component Defaults"),Object(a.b)("p",null,"Most components support the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/configuration-app-config-getting-started#linking-layout-to-app-config"}),Object(a.b)("inlineCode",{parentName:"a"},"config")," attribute")," in the layout, which links a component model to configuration in the app config JSON. However, many component models have default values they can supply for initialization instead of relying on configuration. This means that if you omit the ",Object(a.b)("inlineCode",{parentName:"p"},"config")," property for certain components, the component model will attempt to create itself with its default values. An example of defining these default values can be seen in ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/sdk-serializable-properties#populating-the-class-with-configuration-values"}),"this example"),". It's also the mechanism that powers the default map displayed by this layout."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout xmlns="https://geocortex.com/layout/v1">\n    <map/> \x3c!-- The map component is populated with values from the MapModel\'s `_getSerializableProperties` function. --\x3e\n</layout>\n')),Object(a.b)("h3",{id:"initialization-and-teardown"},"Initialization and Teardown"),Object(a.b)("p",null,"Component models have an initialization method, which can be used to perform asynchronous startup logic, and a teardown method, which can be used to free resources when a component is removed from the layout."),Object(a.b)("div",{className:"admonition admonition-important alert alert--info"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Always call ",Object(a.b)("inlineCode",{parentName:"p"},"super._onInitialize()")," when overriding the ",Object(a.b)("inlineCode",{parentName:"p"},"_onInitialize")," method, and ",Object(a.b)("inlineCode",{parentName:"p"},"super._onDestroy()")," when overriding the ",Object(a.b)("inlineCode",{parentName:"p"},"_onDestroy")," method."))),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),'export default class ExampleComponentModel extends ComponentModelBase {\n    items: Collection<string> = new Collection<string>();\n\n    protected async _onInitialize(): Promise<void> {\n        // highlight-next-line\n        super._onInitialize();\n\n        this.items.add("1");\n        this.items.add("2");\n        this.items.add("3");\n        this.items.add("4");\n        // ...other initialization logic\n    }\n\n    protected async _onDestroy(): Promise<void> {\n        await super._onDestroy();\n\n        this.items.destroy();\n        // ...free up resources\n    }\n}\n')),Object(a.b)("h2",{id:"component-lifecycle"},"Component Lifecycle"),Object(a.b)("p",null,"When a Geocortex Web Application boots up, the set of components which are initially active in the layout are created and initialized. ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/configuration-layout-reference#panels"}),"Components like the ",Object(a.b)("inlineCode",{parentName:"a"},"Panel"))," will only activate their first child. All initially inactive components will only be created when they are activated in the layout."),Object(a.b)("h3",{id:"activation-and-deactivation"},"Activation and Deactivation"),Object(a.b)("p",null,"Custom code can listen and react to a components activation or deactivation by subscribing to the ",Object(a.b)("inlineCode",{parentName:"p"},"ui.activated")," or ",Object(a.b)("inlineCode",{parentName:"p"},"ui.deactivated")," event. The ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/api-commands-operations-events#events"}),Object(a.b)("inlineCode",{parentName:"a"},"ui.*")," events")," contain various events relating to the component lifecycle."),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"The ",Object(a.b)("inlineCode",{parentName:"p"},"UIService")," contains implements the commands ",Object(a.b)("inlineCode",{parentName:"p"},"ui.activate")," and ",Object(a.b)("inlineCode",{parentName:"p"},"ui.deactivate")," and exposes methods like ",Object(a.b)("inlineCode",{parentName:"p"},"getActiveChildComponentIds()")," which can be used to examine and manipulate the activation state of components."))),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"@serializable\nexport default class ExampleComponentModel extends ComponentModelBase<ExampleComponentModelProperties> {\n    private readonly _handles: IHandle[] = [];\n\n    protected async _onInitialize(): Promise<void> {\n        super._onInitialize();\n        // highlight-start\n        this._handles.push(\n            this.messages.events.ui.activated.subscribe(() => {\n                // ...on activated logic here\n            })\n        );\n\n        this._handles.push(\n            this.messages.events.ui.deactivated.subscribe(() => {\n                // ...on deactivated logic here\n            })\n        );\n        // highlight-end\n    }\n\n    protected async _onDestroy(): Promise<void> {\n        await super._onDestroy();\n        // highlight-start\n        // Make sure to clean up subscriptions when the model is destroyed.\n        this._handles.forEach((h) => h.remove());\n        // highlight-end\n    }\n}\n")),Object(a.b)("h2",{id:"next-steps"},"Next Steps"),Object(a.b)(c.a,{mdxType:"UseCaseContainer"},Object(a.b)(r.a,{title:"Learn how to use Commands and Operations with Components",description:"Learn how to run and implement commands and operations with custom components",link:Object(i.a)("docs/web/sdk-commands-operations"),mdxType:"UseCaseCard"}),Object(a.b)(r.a,{title:"Learn about Component Interactions",description:"Learn about how components can interact with each other through their models",link:Object(i.a)("docs/web/sdk-components-interactions"),mdxType:"UseCaseCard"}),Object(a.b)(r.a,{title:"Create a Component with a Complex UI",description:"Follow along with a more in depth component example",link:Object(i.a)("docs/web/tutorial-implement-component-with-ui"),mdxType:"UseCaseCard"}),Object(a.b)(r.a,{title:"Create a Component that Consumes App Config",description:"Learn more about writing components that consume configuration values.",link:Object(i.a)("docs/web/tutorial-implement-component-participate-app-config"),mdxType:"UseCaseCard"})))}u.isMDXComponent=!0},255:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),b=o,u=m["".concat(r,".").concat(b)]||m[b]||d[b]||i;return n?a.a.createElement(u,c(c({ref:t},l),{},{components:n})):a.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},256:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}));var o=n(21),a=n(257);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(o.default)();return{withBaseUrl:(n,o)=>function(e,t,n,{forcePrependBaseUrl:o=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(o)return t+n;const r=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+r:r}(t,e,n,o)}}function r(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},257:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!o(e)}n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}))},258:function(e,t,n){"use strict";function o(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}},259:function(e,t,n){"use strict";var o=n(0),a=n.n(o),i=n(11),r=n(257),c=n(9);const s=Object(o.createContext)({collectLink:()=>{}});var l=n(256),p=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n};t.a=function(e){var t,{isNavLink:n,to:m,href:d,activeClassName:b,isActive:u,"data-noBrokenLinkCheck":h,autoAddBaseUrl:f=!0}=e,O=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:g}=Object(l.b)(),j=Object(o.useContext)(s),v=m||d,y=Object(r.a)(v),C=null==v?void 0:v.replace("pathname://",""),w=void 0!==C?(x=C,f&&(e=>e.startsWith("/"))(x)?g(x):x):void 0;var x;const N=Object(o.useRef)(!1),E=n?i.e:i.c,k=c.a.canUseIntersectionObserver;let T;Object(o.useEffect)((()=>(!k&&y&&window.docusaurus.prefetch(w),()=>{k&&T&&T.disconnect()})),[w,k,y]);const M=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,P=!w||!y||M;return w&&y&&!M&&!h&&j.collectLink(w),P?a.a.createElement("a",Object.assign({href:w},v&&!y&&{target:"_blank",rel:"noopener noreferrer"},O)):a.a.createElement(E,Object.assign({},O,{onMouseEnter:()=>{N.current||(window.docusaurus.preload(w),N.current=!0)},innerRef:e=>{var t,n;k&&e&&y&&(t=e,n=()=>{window.docusaurus.prefetch(w)},T=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(T.unobserve(t),T.disconnect(),n())}))})),T.observe(t))},to:w||""},n&&{isActive:u,activeClassName:b}))}},260:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(0),a=n.n(o),i=n(54),r=n.n(i);function c({children:e}){return a.a.createElement("div",{className:r.a.root},e)}},261:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n(259),a=n(0),i=n.n(a),r=n(258),c=n(55),s=n.n(c);function l({title:e,description:t,link:n}){return i.a.createElement("div",{className:Object(r.a)("card-demo",s.a.root)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h3",null,e)),i.a.createElement("div",{className:"card__body"},i.a.createElement("p",null,t)),i.a.createElement("div",{className:"card__footer"},i.a.createElement(o.a,{className:"button button--secondary button--block",to:n},"Get Started"))))}},262:function(e,t,n){"use strict";var o=n(0),a=n(263);t.a=function(){const e=Object(o.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},263:function(e,t,n){"use strict";var o=n(0);const a=Object(o.createContext)(void 0);t.a=a},264:function(e,t,n){"use strict";var o=n(0),a=n.n(o),i=n(262),r=n(258),c=n(56),s=n.n(c);const l=37,p=39;t.a=function(e){const{lazy:t,block:n,defaultValue:c,values:m,groupId:d,className:b}=e,{tabGroupChoices:u,setTabGroupChoices:h}=Object(i.a)(),[f,O]=Object(o.useState)(c),g=o.Children.toArray(e.children);if(null!=d){const e=u[d];null!=e&&e!==f&&m.some((t=>t.value===e))&&O(e)}const j=e=>{O(e),null!=d&&h(d,e)},v=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":n},b)},m.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(r.a)("tabs__item",s.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>v.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case p:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(v,e.target,e)},onFocus:()=>j(e),onClick:()=>{j(e)}},t)))),t?Object(o.cloneElement)(g.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>Object(o.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}},265:function(e,t,n){"use strict";var o=n(3),a=n(0),i=n.n(a);t.a=function({children:e,hidden:t,className:n}){return i.a.createElement("div",Object(o.a)({role:"tabpanel"},{hidden:t,className:n}),e)}}}]);