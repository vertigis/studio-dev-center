(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{266:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var o=n(2),r=n(9),a=(n(0),n(297)),c={title:"Component Hooks",description:"Geocortex Web - Learn about the React hooks used to react to changes on a component's model"},s={id:"web/sdk-components-hooks",isDocsHomePage:!1,title:"Component Hooks",description:"Geocortex Web - Learn about the React hooks used to react to changes on a component's model",source:"@site/docs/web/sdk-components-hooks.mdx",permalink:"/docs/web/sdk-components-hooks",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/sdk-components-hooks.mdx",sidebar:"web",previous:{title:"Component Reference",permalink:"/docs/web/sdk-components-reference"},next:{title:"UIContext",permalink:"/docs/web/sdk-components-ui-context"}},i=[{value:"<code>useWatchAndRerender</code>",id:"usewatchandrerender",children:[{value:"The Problem",id:"the-problem",children:[]},{value:"The Solution",id:"the-solution",children:[]}]},{value:"<code>useWatchCollectionAndRerender</code>",id:"usewatchcollectionandrerender",children:[]},{value:"<code>useWatch</code>",id:"usewatch",children:[]},{value:"<code>useSubscribeAndRerender</code>",id:"usesubscribeandrerender",children:[]},{value:"<code>useSubscribe</code>",id:"usesubscribe",children:[]}],d={rightToc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Geocortex Web provides a number of ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://reactjs.org/docs/hooks-intro.html"}),"React hooks")," to ease development of custom components bound to ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/sdk-components-reference#models"}),"models"),". These hooks make it simple to follow the recommended ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://developers.arcgis.com/javascript/latest/guide/programming-patterns/#properties"}),"observable properties pattern")," for model interactions within your functional components."),Object(a.b)("h2",{id:"usewatchandrerender"},Object(a.b)("inlineCode",{parentName:"h2"},"useWatchAndRerender")),Object(a.b)("p",null,"Watches an object for changes in one or more properties of a component model and triggers a re-render of the component."),Object(a.b)("h3",{id:"the-problem"},"The Problem"),Object(a.b)("p",null,"In Geocortex Web, ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/sdk-components-reference#models"}),"component models")," provide a way to decouple components from data source concerns and app interactions. However, they raise the issue of consistency - how can a component stay up to date with changes in the data of the underlying model? E.g. how does the React component know when to re-render?"),Object(a.b)("h3",{id:"the-solution"},"The Solution"),Object(a.b)("p",null,"Geocortex Web components solve this problem by providing a way to update the UI when the data in the underlying model changes using a React hook called ",Object(a.b)("inlineCode",{parentName:"p"},"useWatchAndRerender"),". The component render lifecycle is as follows:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"The initial data is pulled from the model and rendered."),Object(a.b)("li",{parentName:"ol"},"The component ",Object(a.b)("strong",{parentName:"li"},"starts to watch for changes")," to the specified properties on the model by using the ",Object(a.b)("inlineCode",{parentName:"li"},"useWatchAndRerender")," React hook."),Object(a.b)("li",{parentName:"ol"},"The value of the watched property in the model changes. In the example below it changes as a result of a button click."),Object(a.b)("li",{parentName:"ol"},"The hook that is watching the property value for changes causes the component to re-render with the new property value.")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),'import { useWatchAndRerender } from "@vertigis/web/ui";\nimport Typography from "@vertigis/web/ui/Typography";\nimport React from "react";\nimport { LayoutElement } from "@vertigis/web/components";\nimport Button from "@vertigis/web/ui/Button";\n\nexport default function CustomComponent(props) {\n    const { model } = props;\n\n    // Start watching for changes to the hidden property on the model\n    useWatchAndRerender(model, "hidden");\n\n    return (\n        <LayoutElement {...props}>\n            {/* Change the underlying model to trigger a re-render */}\n            {model.hidden && (\n                <Button onClick={() => (model.hidden = false)}>Show Me</Button>\n            )}\n            {!model.hidden && (\n                <div>\n                    <Typography variant="h1">BOO!</Typography>\n                    <Button onClick={() => (model.hidden = true)}>\n                        Hide Me\n                    </Button>\n                </div>\n            )}\n        </LayoutElement>\n    );\n}\n')),Object(a.b)("p",null,'The role of the "watch" functions for a component with respect to model data is similar to the role of the ',Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://reactjs.org/docs/hooks-state.html"}),Object(a.b)("inlineCode",{parentName:"a"},"useState")," and ",Object(a.b)("inlineCode",{parentName:"a"},"useEffect")," functions")," with respect to the local state data. The ",Object(a.b)("inlineCode",{parentName:"p"},"useWatchAndRenderer")," function essentially defines a model property as state your component's presentation is dependent upon, much like ",Object(a.b)("inlineCode",{parentName:"p"},"useState"),", while leaving you the responsibility to update the underlying component when appropriate. The ",Object(a.b)("inlineCode",{parentName:"p"},"useWatch")," function defines a dependency on a model property, while leaving you to define what side effects are required, much like ",Object(a.b)("inlineCode",{parentName:"p"},"useEffect"),"."),Object(a.b)("h2",{id:"usewatchcollectionandrerender"},Object(a.b)("inlineCode",{parentName:"h2"},"useWatchCollectionAndRerender")),Object(a.b)("p",null,"Watches a collection for change events and triggers a re-render. Conceptually equivalent to ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"#usewatchandrerender"}),Object(a.b)("inlineCode",{parentName:"a"},"useWatchAndRerender"))," but specifically for ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Collection.html"}),"Collection objects"),"."),Object(a.b)("h2",{id:"usewatch"},Object(a.b)("inlineCode",{parentName:"h2"},"useWatch")),Object(a.b)("p",null,"Watches an object for changes in one or more properties and triggers a callback."),Object(a.b)("h2",{id:"usesubscribeandrerender"},Object(a.b)("inlineCode",{parentName:"h2"},"useSubscribeAndRerender")),Object(a.b)("p",null,"Subscribes ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/sdk-events-overview"}),"to an event")," and triggers a re-render."),Object(a.b)("h2",{id:"usesubscribe"},Object(a.b)("inlineCode",{parentName:"h2"},"useSubscribe")),Object(a.b)("p",null,"Subscribes ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/sdk-events-overview"}),"to an event")," and triggers a callback."))}p.isMDXComponent=!0}}]);