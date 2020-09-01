(window.webpackJsonp=window.webpackJsonp||[]).push([[46,14],{128:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return u})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return d}));var n=a(2),o=a(6),i=(a(0),a(222)),r=a(223),c=(a(232),a(233),a(229)),l=a(228),s=a(67),p={title:"Layout",sidebar_label:"Getting Started",description:"Geocortex Mobile - Learn about layout concepts"},u={unversionedId:"mobile/configuration-layout-getting-started",id:"mobile/configuration-layout-getting-started",isDocsHomePage:!1,title:"Layout",description:"Geocortex Mobile - Learn about layout concepts",source:"@site/docs/mobile/configuration-layout-getting-started.mdx",permalink:"/docs/mobile/configuration-layout-getting-started",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/configuration-layout-getting-started.mdx",sidebar_label:"Getting Started",sidebar:"mobile",previous:{title:"Key Concepts",permalink:"/docs/mobile/key-concepts"},next:{title:"Layout Reference",permalink:"/docs/mobile/configuration-layout-reference"}},b=[{value:"Slotting",id:"slotting",children:[]},{value:"Stacks and Splits",id:"stacks-and-splits",children:[]},{value:"Spacing",id:"spacing",children:[]},{value:"Panels",id:"panels",children:[]},{value:"Device Form factors",id:"device-form-factors",children:[{value:"Fallback Layouts",id:"fallback-layouts",children:[]}]},{value:"Namespaces",id:"namespaces",children:[]},{value:"Relevant SDK Samples",id:"relevant-sdk-samples",children:[]},{value:"Next Steps: Components and App Config",id:"next-steps-components-and-app-config",children:[]}],m={rightToc:b};function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Before learning about layout...")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Check out the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/key-concepts"}),"Key Concepts"),"."))),Object(i.b)("p",null,"A layout consists of declarative XML that defines an applications visual structure and data sources. Think of it as the blueprints on which a Geocortex Mobile Application is built."),Object(i.b)("p",null,"Take this example of a layout with a map and a zoom widget."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml",metastring:'title="app/layout-large.xml"',title:'"app/layout-large.xml"'}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout xmlns="https://geocortex.com/layout/v1">\n    <map>\n        <zoom margin="0.5"/>\n    </map>\n</layout>\n')),Object(i.b)("p",null,"The first thing it does is declare a ",Object(i.b)("inlineCode",{parentName:"p"},"<map>")," component that uses the default map configuration.\nNext, a zoom widget is embedded within the map. This does two things:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Visually places the element inside the map"),Object(i.b)("li",{parentName:"ol"},"Tells the zoom widget to act upon ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/mobile/configuration-advanced-model-binding"}),"the map it is placed in"))),Object(i.b)(s.default,{mdxType:"FollowAlongSnippet"}),Object(i.b)("p",null,"The basic example shown above will place a zoom widget inside a map. But what if you want the zoom widget to be in the top right corner? At the bottom center of the map? How does the map know where to place it?"),Object(i.b)("h2",{id:"slotting"},"Slotting"),Object(i.b)("p",null,"The position of a component within its parent is controlled by what slot it is placed into."),Object(i.b)("p",null,"For example, this configuration will place the zoom widget in the top right of the map."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml",metastring:'title="app/layout-large.xml"',title:'"app/layout-large.xml"'}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout xmlns="https://geocortex.com/layout/v1">\n    <map>\n        // highlight-next-line\n        <zoom padding="0.5" slot="top-right"/>\n    </map>\n</layout>\n')),Object(i.b)("p",null,"If a slot configuration is not given, the component will slot itself into a default position. Each component defines its own slots - not every slot will work for every component."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-quickstart"}),"Quickstart")," comes with a schema for the ",Object(i.b)("inlineCode",{parentName:"p"},"layout-*.xml")," files which can ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/configuration-layout-reference#autocomplete-properties"}),"autocomplete slot values for a component")))),Object(i.b)("p",null,"Slots control how one element fits into another. But how do we control how sibling elements position themselves? The answer is stacks and splits."),Object(i.b)("h2",{id:"stacks-and-splits"},"Stacks and Splits"),Object(i.b)("p",null,"The basic ",Object(i.b)("inlineCode",{parentName:"p"},"stack")," and ",Object(i.b)("inlineCode",{parentName:"p"},"split")," components are building blocks that layout authors can use to vertically or horizontally partition components and blocks of rich text to form simple and complex user interfaces alike."),Object(i.b)("p",null,"For a deeper dive into stacks and splits, ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/configuration-layout-reference#stacks-and-splits"}),"check out the layout reference"),"."),Object(i.b)("h2",{id:"spacing"},"Spacing"),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/configuration-layout-reference#presentation-attributes"}),"presentation attributes")," for details on margin, padding, content organization and alignment in your layout."),Object(i.b)("h2",{id:"panels"},"Panels"),Object(i.b)("p",null,"Another core concept that Geocortex Mobile uses to organize elements in a layout is ",Object(i.b)("strong",{parentName:"p"},"panels"),".\nPanels are a container component that enable hierarchal navigation between different components."),Object(i.b)("p",null,"For a deeper dive into Panels, ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/configuration-layout-reference#panels"}),"check out the layout reference"),"."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"These are just a few examples of the building blocks available to help you organize the layout of your Application. Leveraging these simple primitives correctly also means responsive apps that work on various screen sizes. You can also use tabs, expanders, and much more. See the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/configuration-layout-reference#core-layout-components"}),"Component Reference")," for a full listing."))),Object(i.b)("h2",{id:"device-form-factors"},"Device Form factors"),Object(i.b)("p",null,"Geocortex Mobile has built-in support for loading different layouts depending on the form factor of the target device. The three possible form factors are 'small', 'medium', and 'large'. The 'large' layout is intended to target desktop and laptop devices, the 'medium' layout is intended to target tablet devices, and the 'small' layout is intended to target phone devices. All three of these layouts are intended to target the same app config, allowing config to be shared when appropriate."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The Geocortex Mobile SDK ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-quickstart"}),"Quickstart")," includes a large and small layout."))),Object(i.b)("p",null,"In order for the correct layout to be loaded for the correct form factor, the layout needs to be loaded by the app config."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:'{6-7,12-13} title="app/app.json"',"{6-7,12-13}":!0,title:'"app/app.json"'}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            // highlight-next-line\n            "tags": [ "mobile", "large" ]\n        },\n        {\n            "$type": "layout",\n            "id": "tablet-layout",\n            "url": "resource://layout-medium.xml",\n            // highlight-next-line\n            "tags": [ "mobile", "medium" ]\n        },\n        ...\n    ]\n}\n')),Object(i.b)("p",null,"This app config will load a large layout for a desktop device, and a medium layout for a tablet device."),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-quickstart"}),"Quickstart")," does not ship with a medium layout configured. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/tutorial-add-medium-layout"}),"Add Medium Layout")," for instructions on how to do this."))),Object(i.b)("h3",{id:"fallback-layouts"},"Fallback Layouts"),Object(i.b)("p",null,"If a layout that matches the device form factor is not available, then Geocortex Mobile will attempt to load the layout with the most similar form factor. For the example above, if Geocortex Mobile was loaded on a phone device, ",Object(i.b)("inlineCode",{parentName:"p"},"layout-medium.xml")," would be loaded, as it is the closest form factor to small. If the medium layout was also missing, ",Object(i.b)("inlineCode",{parentName:"p"},"layout-large.xml")," would be loaded instead, and vice versa."),Object(i.b)("h2",{id:"namespaces"},"Namespaces"),Object(i.b)("p",null,"Every component in the xml file has a definition that lives in an xml namespace. All the components discussed to this point have lived in the ",Object(i.b)("inlineCode",{parentName:"p"},"https://geocortex.com/layout/v1")," namespace."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<layout xmlns="https://geocortex.com/layout/v1">\n    <map/>\n</layout>\n')),Object(i.b)("p",null,"Geocortex Mobile has a specific namespace ",Object(i.b)("inlineCode",{parentName:"p"},"https://geocortex.com/layout/mobile/v1")," in which components like ",Object(i.b)("inlineCode",{parentName:"p"},"<gxm:taskbar>")," live. You can add this namespace to your layout to use these components."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<layout xmlns="https://geocortex.com/layout/v1"\n        // highlight-next-line\n        xmlns:gxm="https://geocortex.com/layout/mobile/v1">\n    <gxm:taskbar orientation="vertical">\n        <map slot="main"/>\n    </gxm:taskbar>\n</layout>\n')),Object(i.b)("p",null,"When adding custom components, you will need to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/sdk-components-reference#components-and-layout"}),"add their custom namespace")," to your xml definition."),Object(i.b)("h2",{id:"relevant-sdk-samples"},"Relevant SDK Samples"),Object(i.b)("p",null,"The Geocortex Mobile SDK Samples project has a variety of layout configuration samples:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Layout"}),"Layout Configuration Samples"))),Object(i.b)("h2",{id:"next-steps-components-and-app-config"},"Next Steps: Components and App Config"),Object(i.b)("p",null,"In our examples so far, xml elements like ",Object(i.b)("inlineCode",{parentName:"p"},"<text>")," or ",Object(i.b)("inlineCode",{parentName:"p"},"<stack>")," have been used. Each of these xml elements corresponds to a Component in Mobile. Each component has its own configuration, such as the ",Object(i.b)("inlineCode",{parentName:"p"},"text")," property for ",Object(i.b)("inlineCode",{parentName:"p"},"<text>")," elements. Most components have required configuration, and this configuration is defined in an App, specifically, in the ",Object(i.b)("inlineCode",{parentName:"p"},"app.json")," file. This allows a separation of the visual structure of how components appear in the viewer, and the functional content these components host. Combining layouts with app configuration allows you to create powerful, flexible applications with different layouts for different form factors or use cases."),Object(i.b)(l.a,{mdxType:"UseCaseContainer"},Object(i.b)(c.a,{title:"App Config",description:"Learn about app configuration and its interaction with layout",link:Object(r.a)("docs/mobile/configuration-app-config-getting-started"),mdxType:"UseCaseCard"}),Object(i.b)(c.a,{title:"Layout Reference",description:"Learn more about what you can accomplish with layouts",link:Object(r.a)("docs/mobile/configuration-layout-reference"),mdxType:"UseCaseCard"})))}d.isMDXComponent=!0},222:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,d=u["".concat(r,".").concat(m)]||u[m]||b[m]||i;return a?o.a.createElement(d,c(c({ref:t},s),{},{components:a})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var s=2;s<i;s++)r[s]=a[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},223:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return r}));var n=a(226),o=a(224);function i(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,r=i.forcePrependBaseUrl,c=void 0!==r&&r,l=i.absolute,s=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(o.b)(a))return a;if(c)return t+a;var p=!a.startsWith(t)?t+a.replace(/^\//,""):a;return s?e+p:p}(i,a,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},224:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return o}))},225:function(e,t,a){"use strict";function n(e){var t,a,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},226:function(e,t,a){"use strict";var n=a(0),o=a(18);t.a=function(){var e=Object(n.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},227:function(e,t,a){"use strict";var n=a(0),o=a.n(n),i=a(13),r=a(224),c=a(8),l=Object(n.createContext)({collectLink:function(){}}),s=a(223),p=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]])}return a};t.a=function(e){var t,a,u=e.isNavLink,b=e.to,m=e.href,d=e.activeClassName,f=e["data-noBrokenLinkCheck"],h=p(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]),v=Object(s.b)().withBaseUrl,g=Object(n.useContext)(l),O=b||m,j=void 0!==O?v(O):void 0,y=Object(r.a)(j),w=Object(n.useRef)(!1),N=u?i.e:i.c,x=c.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!x&&y&&window.docusaurus.prefetch(j),function(){x&&a&&a.disconnect()}}),[j,x,y]);var k=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,C=!j||!y||k;return j&&y&&!k&&!f&&g.collectLink(j),C?o.a.createElement("a",Object.assign({href:j},!y&&{target:"_blank",rel:"noopener noreferrer"},h)):o.a.createElement(N,Object.assign({},h,{onMouseEnter:function(){w.current||(window.docusaurus.preload(j),w.current=!0)},innerRef:function(e){var t,n;x&&e&&y&&(t=e,n=function(){window.docusaurus.prefetch(j)},(a=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())}))}))).observe(t))},to:j},u&&{activeClassName:d}))}},228:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),o=a.n(n),i=a(46),r=a.n(i);function c(e){var t=e.children;return o.a.createElement("div",{className:r.a.root},t)}},229:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(227),o=a(0),i=a.n(o),r=a(225),c=a(47),l=a.n(c);function s(e){var t=e.title,a=e.description,o=e.link;return i.a.createElement("div",{className:Object(r.a)("card-demo",l.a.root)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h3",null,t)),i.a.createElement("div",{className:"card__body"},i.a.createElement("p",null,a)),i.a.createElement("div",{className:"card__footer"},i.a.createElement(n.a,{className:"button button--secondary button--block",to:o},"Get Started"))))}},230:function(e,t,a){"use strict";var n=a(0),o=Object(n.createContext)(void 0);t.a=o},231:function(e,t,a){"use strict";var n=a(0),o=a(230);t.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},232:function(e,t,a){"use strict";var n=a(0),o=a.n(n),i=a(231),r=a(225),c=a(48),l=a.n(c),s=37,p=39;t.a=function(e){var t=e.block,a=e.children,c=e.defaultValue,u=e.values,b=e.groupId,m=Object(i.a)(),d=m.tabGroupChoices,f=m.setTabGroupChoices,h=Object(n.useState)(c),v=h[0],g=h[1];if(null!=b){var O=d[b];null!=O&&O!==v&&u.some((function(e){return e.value===O}))&&g(O)}var j=function(e){g(e),null!=b&&f(b,e)},y=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t})},u.map((function(e){var t=e.value,a=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(r.a)("tabs__item",l.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){return function(e,t,a){switch(a.keyCode){case p:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return j(t)},onClick:function(){return j(t)}},a)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===v}))[0]))}},233:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){return o.a.createElement("div",null,e.children)}},67:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2),o=a(6),i=(a(0),a(222)),r={},c={unversionedId:"mobile/snippets/follow-along",id:"mobile/snippets/follow-along",isDocsHomePage:!1,title:"follow-along",description:"Check out the Quickstart and edit the default app config and layout.",source:"@site/docs/mobile/snippets/follow-along.mdx",permalink:"/docs/mobile/snippets/follow-along",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/follow-along.mdx"},l=[],s={rightToc:l};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Want to follow along?")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Check out the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-quickstart"}),"Quickstart")," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/sdk-edit-layout-app-config"}),"edit the default app config and layout"),"."))))}p.isMDXComponent=!0}}]);