(window.webpackJsonp=window.webpackJsonp||[]).push([[131,138],{201:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return d}));var a=n(2),i=n(6),o=(n(0),n(223)),r=n(224),c=n(59),s=n(233),p=n(234),u={title:"App Config Reference",description:"Geocortex Web - Reference for App Config"},l={unversionedId:"web/configuration-app-config-reference",id:"web/configuration-app-config-reference",isDocsHomePage:!1,title:"App Config Reference",description:"Geocortex Web - Reference for App Config",source:"@site/docs/web/configuration-app-config-reference.mdx",slug:"/web/configuration-app-config-reference",permalink:"/docs/web/configuration-app-config-reference",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/configuration-app-config-reference.mdx",version:"current",sidebar:"web",previous:{title:"App Config",permalink:"/docs/web/configuration-app-config-getting-started"},next:{title:"Configuring the Theme",permalink:"/docs/web/configuration-theme"}},m=[{value:"<code>schemaVersion</code> property",id:"schemaversion-property",children:[]},{value:"App Items",id:"app-items",children:[{value:"Custom App Items",id:"custom-app-items",children:[]}]},{value:"Item URIs",id:"item-uris",children:[]},{value:"Reusing Config",id:"reusing-config",children:[]},{value:"Internationalization",id:"internationalization",children:[]}],b={rightToc:m};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"schemaversion-property"},Object(o.b)("inlineCode",{parentName:"h2"},"schemaVersion")," property"),Object(o.b)("p",null,"The property ",Object(o.b)("inlineCode",{parentName:"p"},"schemaVersion")," should always be present in an ",Object(o.b)("inlineCode",{parentName:"p"},"app.json")," file."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "schemaVersion": "1.0",\n\n  "items": [...]\n}\n')),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"schemaVersion")," property is a required property that informs Geocortex Web what version of app config you are using. This allows for the schema to be updated in future releases without breaking old configuration."),Object(o.b)("h2",{id:"app-items"},"App Items"),Object(o.b)(c.default,{mdxType:"AppItemSnippet"}),Object(o.b)("h3",{id:"custom-app-items"},"Custom App Items"),Object(o.b)("p",null,"Custom App items in Geocortex Web are most commonly defined by creating a configurable ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/sdk-components-reference#configuration"}),"component model")," or a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/sdk-services-reference#models-and-configuration"}),"configurable service"),". Registering the model or service with Geocortex Web defines a new app item type which can be used in the app config."),Object(o.b)("h2",{id:"item-uris"},"Item URIs"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Item URIs")," are a commonly used pattern in the ",Object(o.b)("inlineCode",{parentName:"p"},"app.json")," to uniquely identify and reference app items. They take the format"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"item://<item-type>/<item-id>")),Object(o.b)("p",null,"For example, the item URI for the following item is ",Object(o.b)("inlineCode",{parentName:"p"},"item://menu-item/feature-actions")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "$type": "menu",\n  "id": "feature-actions",\n  "items": [...]\n}\n')),Object(o.b)("p",null,"These item URIs can be used by app items to include other app items as property values, allowing reuse."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$type": "feature-details",\n    "id": "feature-details",\n    "featureActions": "item://menu/feature-actions"\n}\n')),Object(o.b)("h2",{id:"reusing-config"},"Reusing Config"),Object(o.b)("p",null,"The same config can be used for multiple items in a layout. For example, this allows you to reuse the same button in multiple locations in the App."),Object(o.b)(s.a,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"},{label:"UI",value:"ui"}],mdxType:"Tabs"},Object(o.b)(p.a,{value:"layout",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout xmlns="https://geocortex.com/layout/v1">\n  <split resizable="true">\n    <panel width="30">\n        <stack margin="0.5">\n            // highlight-next-line\n          <button icon="info" config="do-something" margin="0.5" id="do-something-1"></button>\n        </stack>\n    </panel>\n    <map slot="main">\n        // highlight-next-line\n      <button icon="info" config="do-something" slot="top-center" margin="0.5" id="do-something-2"></button>\n    </map>\n  </split>\n</layout>\n'))),Object(o.b)(p.a,{value:"config",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "menu-item",\n            // highlight-next-line\n            "id": "do-something",\n            "isEnabled": true,\n            "iconId": "info",\n            "action": {\n                "name": "ui.alert",\n                "arguments": {\n                    "title": "Something?",\n                    "message": "Fine, I did it",\n                    "buttonText": "OK"\n                }\n            }\n        }\n    ]\n}\n'))),Object(o.b)(p.a,{value:"ui",mdxType:"TabItem"},Object(o.b)("img",{src:Object(r.a)("img/web-app-config-basic.png")}))),Object(o.b)("p",null,"In addition, multiple components can use the same configuration type. For example, components like the ",Object(o.b)("inlineCode",{parentName:"p"},"<iwtm>"),", ",Object(o.b)("inlineCode",{parentName:"p"},"<button>")," and ",Object(o.b)("inlineCode",{parentName:"p"},"<toolbar>")," all use the ",Object(o.b)("inlineCode",{parentName:"p"},"menu-item")," type in some manner for their configuration. Custom components can also adopt existing item types as their ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/sdk-components-reference#models"}),"models"),"."),Object(o.b)("h2",{id:"internationalization"},"Internationalization"),Object(o.b)("p",null,"All language strings used for properties in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/configuration-app-config-getting-started"}),"app config"),', like "title" or "description", are automatically translated by the application.'),Object(o.b)("p",null,"Learn more about how to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/sdk-internationalization"}),"use and create language resources"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "$type": "menu-item",\n            "id": "zoom-to-extent",\n            "iconId": "zoom-extent",\n            "title": "language-zoom-extent-title",\n            "description": "language-zoom-extent-description",\n            "action": "map.zoom-to-layer-extent"\n        },\n        ...\n    ]\n}\n')))}d.isMDXComponent=!0},223:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),u=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),b=a,d=l["".concat(r,".").concat(b)]||l[b]||m[b]||o;return n?i.a.createElement(d,c(c({ref:t},p),{},{components:n})):i.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var p=2;p<o;p++)r[p]=n[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},224:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}));var a=n(227),i=n(225);function o(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,r=o.forcePrependBaseUrl,c=void 0!==r&&r,s=o.absolute,p=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+u:u}(o,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},225:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}))},226:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},227:function(e,t,n){"use strict";var a=n(0),i=n(19);t.a=function(){var e=Object(a.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},231:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)(void 0);t.a=i},232:function(e,t,n){"use strict";var a=n(0),i=n(231);t.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},233:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(232),r=n(226),c=n(48),s=n.n(c),p=37,u=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,l=e.values,m=e.groupId,b=Object(o.a)(),d=b.tabGroupChoices,f=b.setTabGroupChoices,g=Object(a.useState)(c),h=g[0],O=g[1],j=Object(a.useState)(!1),y=j[0],v=j[1];if(null!=m){var w=d[m];null!=w&&w!==h&&l.some((function(e){return e.value===w}))&&O(w)}var x=function(e){O(e),null!=m&&f(m,e)},N=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||v(!0)},T=function(){v(!1)};return Object(a.useEffect)((function(){window.addEventListener("keydown",C),window.addEventListener("mousedown",T)}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t})},l.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(r.a)("tabs__item",s.a.tabItem,{"tabs__item--active":h===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e),C(e)},onFocus:function(){return x(t)},onClick:function(){x(t),v(!1)},onPointerDown:function(){return v(!1)}},n)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===h}))[0]))}},234:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){return i.a.createElement("div",null,e.children)}},59:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),i=n(6),o=(n(0),n(223)),r={},c={unversionedId:"snippets/app-item",id:"snippets/app-item",isDocsHomePage:!1,title:"app-item",description:"An app config file is composed of a list of app items. App items can potentially be anything. Each app item has an item $type, which viewer is aware of and knows how to locate and load. They usually they represent configuration for components, maps, portal items, or shared data. All item app configuration is specified within the items array of the app.json file.",source:"@site/docs/snippets/app-item.mdx",slug:"/snippets/app-item",permalink:"/docs/snippets/app-item",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/snippets/app-item.mdx",version:"current"},s=[],p={rightToc:s};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"An app config file is composed of a list of ",Object(o.b)("strong",{parentName:"p"},"app items"),". App items can potentially be anything. Each app item has an ",Object(o.b)("strong",{parentName:"p"},"item ",Object(o.b)("inlineCode",{parentName:"strong"},"$type")),", which viewer is aware of and knows how to locate and load. They usually they represent configuration for components, maps, portal items, or shared data. All item app configuration is specified within the ",Object(o.b)("inlineCode",{parentName:"p"},"items")," array of the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"app.json"))," file."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Each component can only load a certain ",Object(o.b)("inlineCode",{parentName:"p"},"$type")," of app item which corresponds to it. For example, ",Object(o.b)("inlineCode",{parentName:"p"},"<map>")," components can only load app items of type ",Object(o.b)("inlineCode",{parentName:"p"},"map-extension")," as their configuration."))))}u.isMDXComponent=!0}}]);