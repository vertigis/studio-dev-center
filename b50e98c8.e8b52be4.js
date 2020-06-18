(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{260:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return m})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return f}));var a=n(2),o=n(9),i=(n(0),n(297)),c=n(305),r=n(303),s=n(300),l=n(299),u=n(304),m={title:"Components Overview",sidebar_label:"Overview",description:"Geocortex Web - Overview of components"},p={id:"web/sdk-components-overview",isDocsHomePage:!1,title:"Components Overview",description:"Geocortex Web - Overview of components",source:"@site/docs/web/sdk-components-overview.mdx",permalink:"/docs/web/sdk-components-overview",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/sdk-components-overview.mdx",sidebar_label:"Overview",sidebar:"web",previous:{title:"Deployment",permalink:"/docs/web/sdk-deployment"},next:{title:"Create a Component",permalink:"/docs/web/sdk-components-create"}},d=[{value:"Component Models and Configuration",id:"component-models-and-configuration",children:[]}],b={rightToc:d};function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In Geocortex Web, components are entities which implement UI/UX experiences and the associated logic. An example of a component is an I Want to Menu (IWTM). IWTMs participate in layout, implement custom behavior (display a list when clicked), and participate in the app config (the menu items are configurable)."),Object(i.b)("p",null,"Components are only ",Object(i.b)("strong",{parentName:"p"},"created")," if they participate in the layout - if no component definition exists in the layout, none will be created. Multiple instances of the same component will be created if specified in the layout."),Object(i.b)(r.a,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"},{label:"UI",value:"ui"}],mdxType:"Tabs"},Object(i.b)(u.a,{value:"layout",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'}),'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1">\n  <split resizable="true">\n      <map>\n        <iwtm config="iwtm-1" slot="top-right"/>\n      </map>\n      <map>\n        <iwtm config="iwtm-2" slot="top-right"/>\n      </map>\n  </split>\n</layout>\n'))),Object(i.b)(u.a,{value:"config",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "menu",\n            "id": "iwtm-1",\n            "items": [\n                {\n                    "id": "return-to-initial-view",\n                    "iconId": "zoom-initial",\n                    "title": "Return to Initial View",\n                    "action": "map.zoom-to-initial-viewpoint",\n                    "$type": "menu-item"\n                }\n            ]\n        },\n        {\n            "$type": "menu",\n            "id": "iwtm-2",\n            "items": [\n                {\n                    "id": "display-alert",\n                    "iconId": "pop-out",\n                    "title": "Display Alert",\n                    "$type": "menu-item",\n                    "action": {\n                        "name": "ui.alert",\n                        "arguments": {\n                            "title": "Alert!",\n                            "message": "You have been alerted."\n                        }\n                    }\n                }\n            ]\n        }\n    ]\n}\n'))),Object(i.b)(u.a,{value:"ui",mdxType:"TabItem"},Object(i.b)("img",{src:Object(c.a)("img/web-sdk-components-simple.png")}))),Object(i.b)("h2",{id:"component-models-and-configuration"},"Component Models and Configuration"),Object(i.b)("p",null,"Every component has an associated model. This model functions as the underlying data source for the component, as well as providing a way to interface with the larger application, through ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/configuration-commands-operations"}),"commands, operations")," and shared services. This allows the component to solely worry about presentation concerns, and delegate data and application concerns to the underlying model. Models are also responsible for loading and consuming the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/configuration-app-config-getting-started"}),"app config")," for the component."),Object(i.b)(l.a,{mdxType:"UseCaseContainer"},Object(i.b)(s.a,{title:"Create a Component",description:"Learn how to create a basic component",link:Object(c.a)("docs/web/sdk-components-create"),mdxType:"UseCaseCard"}),Object(i.b)(s.a,{title:"Check out the Component Reference",description:"Take a deep dive into components in the Geocortex Web SDK",link:Object(c.a)("docs/web/sdk-components-reference"),mdxType:"UseCaseCard"})))}f.isMDXComponent=!0},299:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),o=n.n(a),i=n(129),c=n.n(i);function r(e){var t=e.children;return o.a.createElement("div",{className:c.a.root},t)}},300:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(307);var a=n(306),o=n(0),i=n.n(o),c=n(298),r=n(130),s=n.n(r);function l(e){var t=e.title,n=e.description,o=e.link;return i.a.createElement("div",{className:Object(c.a)("card-demo",s.a.root)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h3",null,t)),i.a.createElement("div",{className:"card__body"},i.a.createElement("p",null,n)),i.a.createElement("div",{className:"card__footer"},i.a.createElement(a.a,{className:"button button--secondary button--block",to:o},"Get Started"))))}},301:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){},isAnnouncementBarClosed:!1,closeAnnouncementBar:function(){}});t.a=o},302:function(e,t,n){"use strict";var a=n(0),o=n(301);t.a=function(){return Object(a.useContext)(o.a)}},303:function(e,t,n){"use strict";n(26),n(22),n(21);var a=n(0),o=n.n(a),i=n(302),c=n(298),r=n(131),s=n.n(r),l=37,u=39;t.a=function(e){var t=e.block,n=e.children,r=e.defaultValue,m=e.values,p=e.groupId,d=Object(i.a)(),b=d.tabGroupChoices,f=d.setTabGroupChoices,v=Object(a.useState)(r),h=v[0],g=v[1];if(null!=p){var w=b[p];null!=w&&w!==h&&m.some((function(e){return e.value===w}))&&g(w)}var y=function(e){g(e),null!=p&&f(p,e)},O=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},m.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":h===t,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(O,e.target,e)},onFocus:function(){return y(t)},onClick:function(){return y(t)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===h}))[0]))}},304:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}}}]);