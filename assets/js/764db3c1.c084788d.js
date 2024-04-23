"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[2908,8756],{6092:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var o=n(7624),i=n(2172),s=n(964),a=n(7528),c=n(7160),r=n(6820);const l={title:"Layout",sidebar_label:"Getting Started",description:"VertiGIS Studio Web - Learn about layout concepts"},d=void 0,p={id:"web/configuration-layout-getting-started",title:"Layout",description:"VertiGIS Studio Web - Learn about layout concepts",source:"@site/docs/web/configuration-layout-getting-started.mdx",sourceDirName:"web",slug:"/web/configuration-layout-getting-started",permalink:"/docs/web/configuration-layout-getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/configuration-layout-getting-started.mdx",tags:[],version:"current",frontMatter:{title:"Layout",sidebar_label:"Getting Started",description:"VertiGIS Studio Web - Learn about layout concepts"},sidebar:"web",previous:{title:"Key Concepts",permalink:"/docs/web/key-concepts"},next:{title:"Layout Reference",permalink:"/docs/web/configuration-layout-reference"}},h={},u=[...r.toc,{value:"Slotting",id:"slotting",level:2},{value:"Stacks and Splits",id:"stacks-and-splits",level:2},{value:"Spacing",id:"spacing",level:2},{value:"Panels",id:"panels",level:2},{value:"Models",id:"models",level:2},{value:"Namespaces",id:"namespaces",level:2},{value:"Next Steps: Components and App Config",id:"next-steps-components-and-app-config",level:2}];function m(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.admonition,{title:"Before learning about layout...",type:"note",children:(0,o.jsxs)(t.p,{children:["Check out the ",(0,o.jsx)(t.a,{href:"/docs/web/key-concepts",children:"Key Concepts"}),"."]})}),"\n",(0,o.jsx)(t.p,{children:"A layout consists of declarative XML that defines an applications visual structure and data sources. Think of it as the blueprints on which a VertiGIS Studio Web Application is built."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1">\n    <map>\n        <zoom margin="0.5"/>\n    </map>\n</layout>\n'})}),"\n",(0,o.jsxs)(t.p,{children:["The example above first declares a ",(0,o.jsx)(t.code,{children:"<map>"})," component that uses the default map configuration.\nNext, a ",(0,o.jsx)(t.code,{children:"<zoom>"})," component is added ",(0,o.jsx)(t.strong,{children:"within"})," the map component. This does two things:"]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Visually places the element inside the map"}),"\n",(0,o.jsxs)(t.li,{children:["Tells the zoom widget to act upon ",(0,o.jsx)(t.a,{href:"/docs/web/configuration-advanced-model-binding",children:"the map it is placed in"})]}),"\n"]}),"\n",(0,o.jsx)(r.default,{}),"\n",(0,o.jsx)(t.p,{children:"The basic example shown above will place a zoom widget somewhere inside a map. But what if you want the zoom widget to be in the top right corner? At the bottom center of the map? How does the map know where to place it?"}),"\n",(0,o.jsx)(t.h2,{id:"slotting",children:"Slotting"}),"\n",(0,o.jsx)(t.p,{children:"The position of a component within its parent is controlled by what slot it is placed into."}),"\n",(0,o.jsx)(t.p,{children:"For example, this configuration will place the zoom widget in the top right of the map."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8" ?>\n<layout xmlns="https://geocortex.com/layout/v1">\n    <map>\n        // highlight-next-line\n        <zoom padding="0.5" slot="top-right"/>\n    </map>\n</layout>\n'})}),"\n",(0,o.jsx)(t.p,{children:"If a slot configuration is not given, the component will slot itself into a default position. Each component defines its own slots - not every slot will work for every component."}),"\n",(0,o.jsx)(t.p,{children:"Slots control how one element fits into another, but how do we control how sibling elements position themselves? The answer is stacks and splits."}),"\n",(0,o.jsx)(t.h2,{id:"stacks-and-splits",children:"Stacks and Splits"}),"\n",(0,o.jsxs)(t.p,{children:["The basic ",(0,o.jsx)(t.code,{children:"stack"})," and ",(0,o.jsx)(t.code,{children:"split"})," components form building blocks that layout authors can use to vertically or horizontally partition components and blocks of rich text to form simple and complex user interfaces alike."]}),"\n",(0,o.jsxs)(t.p,{children:["For a deeper dive into stacks and splits, ",(0,o.jsx)(t.a,{href:"/docs/web/configuration-layout-reference#stacks-and-splits",children:"check out the API reference"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"spacing",children:"Spacing"}),"\n",(0,o.jsxs)(t.p,{children:["See ",(0,o.jsx)(t.a,{href:"/docs/web/configuration-layout-reference#presentation-attributes",children:"presentation attributes"})," for details on margin, padding, content organization and alignment in your layout."]}),"\n",(0,o.jsx)(t.h2,{id:"panels",children:"Panels"}),"\n",(0,o.jsxs)(t.p,{children:["Another core concept that VertiGIS Studio Web uses to organize elements in a layout is ",(0,o.jsx)(t.strong,{children:"panels"}),".\nPanels are a container component that enable hierarchal navigation between different components."]}),"\n",(0,o.jsxs)(t.p,{children:["For a deeper dive into Panels, ",(0,o.jsx)(t.a,{href:"/docs/web/configuration-layout-reference#panels",children:"check out the API reference"}),"."]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["These are just a few examples of the building blocks available to help you organize the layout of your Application. Leveraging these simple primitives correctly also means responsive apps that work on various screen sizes. You can also use tabs, expanders, and much more. See the ",(0,o.jsx)(t.a,{href:"/docs/web/configuration-layout-reference#core-layout-components",children:"Component Reference"})," for a full listing."]})}),"\n",(0,o.jsx)(t.h2,{id:"models",children:"Models"}),"\n",(0,o.jsx)(t.p,{children:"Components often observe, modify or react to the state of other components.\nConsider the following example:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-xml",children:'<map>\n    <scalebar slot="bottom-left"/>\n</map>\n'})}),"\n",(0,o.jsxs)(t.p,{children:["The scale bar component displays information about a particular map. More specifically, it is ",(0,o.jsx)(t.strong,{children:"dependent"})," on the data of a map to display its values."]}),"\n",(0,o.jsxs)(t.p,{children:["Each component has a corresponding ",(0,o.jsx)(t.strong,{children:"model"})," which is responsible for the data underlying the component. For example, the model for the map component contains the ArcGIS API Map object, and other information about the current state of the map."]}),"\n",(0,o.jsxs)(t.p,{children:["The scalebar satisfies its dependency on the map by ",(0,o.jsx)(t.a,{href:"/docs/web/sdk-components-interactions#interacting-with-components-through-models",children:"importing the map model"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Components can react to changes or mutate values on other components through these models. For example, if the scale of the map changes when it is zoomed, then the scalebar will react to the change in the map model and update its displayed values."}),"\n",(0,o.jsxs)(t.p,{children:["For more information on models, ",(0,o.jsx)(t.a,{href:"/docs/web/sdk-components-reference#models",children:"check out the component SDK reference"})," and this deeper dive into ",(0,o.jsx)(t.a,{href:"/docs/web/configuration-advanced-model-binding",children:"model binding in the layout"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"namespaces",children:"Namespaces"}),"\n",(0,o.jsxs)(t.p,{children:["Every component in the xml file has a definition that lives in an xml namespace. All the components discussed to this point have lived in the ",(0,o.jsx)(t.code,{children:"https://geocortex.com/layout/v1"})," namespace."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-xml",children:'<layout xmlns="https://geocortex.com/layout/v1">\n    <map/>\n</layout>\n'})}),"\n",(0,o.jsxs)(t.p,{children:["VertiGIS Studio Web has a specific namespace ",(0,o.jsx)(t.code,{children:"https://geocortex.com/layout/web/v1"})," in which components like ",(0,o.jsx)(t.code,{children:"<bookmarks>"})," live. You can add this namespace to your layout to use these components."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-xml",children:'<layout xmlns="https://geocortex.com/layout/v1"\n        // highlight-next-line\n        xmlns:web="https://geocortex.com/layout/web/v1">\n    <map>\n        <web:bookmarks slot="bottom-right" />\n        <web:scale-input slot="bottom-left" />\n    </map>\n</layout>\n'})}),"\n",(0,o.jsxs)(t.p,{children:["When adding custom components, you will need to ",(0,o.jsx)(t.a,{href:"/docs/web/sdk-components-reference#components-and-layout",children:"add their custom namespace"})," to your xml definition."]}),"\n",(0,o.jsx)(t.h2,{id:"next-steps-components-and-app-config",children:"Next Steps: Components and App Config"}),"\n",(0,o.jsxs)(t.p,{children:["In our examples so far, xml elements like ",(0,o.jsx)(t.code,{children:"<text>"})," or ",(0,o.jsx)(t.code,{children:"<stack>"})," have been used. Each of these xml elements corresponds to a Component in VertiGIS Studio Web. Each component has its own configuration, such as the ",(0,o.jsx)(t.code,{children:"text"})," property for ",(0,o.jsx)(t.code,{children:"<text>"})," elements. Most components have required configuration, and this configuration is defined in an App, specifically, in the ",(0,o.jsx)(t.code,{children:"app.json"})," file. This allows a separation of the visual structure of how components appear in the viewer, and the functional content these components host. Combining layouts with app configuration allows you to create powerful, flexible applications with responsive, declarative layouts."]}),"\n",(0,o.jsxs)(c.c,{children:[(0,o.jsx)(a.c,{title:"App Config",description:"Learn about app configuration and its interaction with layout",link:(0,s.c)("docs/web/configuration-app-config-getting-started")}),(0,o.jsx)(a.c,{title:"Component Models",description:"Take a deeper dive into the relationship between components and models in the layout",link:(0,s.c)("docs/web/configuration-advanced-model-binding")}),(0,o.jsx)(a.c,{title:"Core Component Reference",description:"Learn more about core layout components like stacks and splits",link:(0,s.c)("docs/web/configuration-layout-reference#core-layout-components")}),(0,o.jsx)(a.c,{title:"Component Attribute Reference",description:"See the full list of attributes available to all components",link:(0,s.c)("docs/web/configuration-layout-reference")})]})]})}function f(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},6820:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=n(7624),i=n(2172);const s={},a=void 0,c={id:"web/snippets/follow-along",title:"follow-along",description:"Download and setup the VertiGIS Studio Web SDK and edit the minimal layout and app config provided.",source:"@site/docs/web/snippets/follow-along.mdx",sourceDirName:"web/snippets",slug:"/web/snippets/follow-along",permalink:"/docs/web/snippets/follow-along",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/snippets/follow-along.mdx",tags:[],version:"current",frontMatter:{}},r={},l=[];function d(e){const t={a:"a",admonition:"admonition",p:"p",...(0,i.M)(),...e.components};return(0,o.jsx)(t.admonition,{title:"Want to follow along?",type:"tip",children:(0,o.jsxs)(t.p,{children:["Download and setup the ",(0,o.jsx)(t.a,{href:"/docs/web/sdk-overview",children:"VertiGIS Studio Web SDK"})," and edit the minimal layout and app config provided."]})})}function p(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},7528:(e,t,n)=>{n.d(t,{c:()=>c});var o=n(867),i=(n(1504),n(4971));const s={root:"root_Uwqo"};var a=n(7624);function c({title:e,description:t,link:n}){return(0,a.jsx)("div",{className:(0,i.c)("card-demo",s.root),children:(0,a.jsxs)("div",{className:"card",children:[(0,a.jsx)("div",{className:"card__header",children:(0,a.jsx)("h3",{children:e})}),(0,a.jsx)("div",{className:"card__body",children:(0,a.jsx)("p",{children:t})}),(0,a.jsx)("div",{className:"card__footer",children:(0,a.jsx)(o.c,{className:"button button--secondary button--block",to:n,children:"Get Started"})})]})})}},7160:(e,t,n)=>{n.d(t,{c:()=>s});n(1504);const o={root:"root_vxd5"};var i=n(7624);function s({children:e}){return(0,i.jsx)("div",{className:o.root,children:e})}},4971:(e,t,n)=>{function o(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}n.d(t,{c:()=>i});const i=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(i&&(i+=" "),i+=t);return i}},2172:(e,t,n)=>{n.d(t,{I:()=>c,M:()=>a});var o=n(1504);const i={},s=o.createContext(i);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);