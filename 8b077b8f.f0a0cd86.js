(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return m})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var o=n(2),r=(n(0),n(231)),a=n(232),i=n(241),c=n(242),s=n(238),l=n(237);const u={title:"Adding Icons",description:"Geocortex Web - Learn how to add custom icons to the Web SDK",hide_table_of_contents:!0},m={unversionedId:"web/sdk-adding-icons",id:"web/sdk-adding-icons",isDocsHomePage:!1,title:"Adding Icons",description:"Geocortex Web - Learn how to add custom icons to the Web SDK",source:"@site/docs/web/sdk-adding-icons.mdx",slug:"/web/sdk-adding-icons",permalink:"/docs/web/sdk-adding-icons",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/sdk-adding-icons.mdx",version:"current",sidebar:"web",previous:{title:"Serializable Properties",permalink:"/docs/web/sdk-serializable-properties"},next:{title:"Internationalization",permalink:"/docs/web/sdk-internationalization"}},p=[{value:"Next Steps",id:"next-steps",children:[]}],b={rightToc:p};function d({components:e,...t}){return Object(r.b)("wrapper",Object(o.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Geocortex Web SDK supports adding custom icons to applications. Icon components are created with the ",Object(r.b)("inlineCode",{parentName:"p"},"createSvgIcon")," function. These icon components can then be registered to make them available to app config, layout, and other built-in web components."),Object(r.b)("p",null,"To create a new SVG icon, create a new ",Object(r.b)("inlineCode",{parentName:"p"},"tsx")," file that exports the ",Object(r.b)("inlineCode",{parentName:"p"},"createSvgIcon")," function. This function will create a React component icon that can be used in Geocortex Web Components."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="src/icons/CustomIcon.tsx"',title:'"src/icons/CustomIcon.tsx"'}),'import createSvgIcon from "@vertigis/web/ui/icons/utils/createSvgIcon";\nimport React from "react";\n\nexport default createSvgIcon(\n    <path d="M20 11H7.8l5.6-5.6L12 4l-8 8 8 8 1.4-1.4L7.8 13H20v-2z" />\n);\n')),Object(r.b)("p",null,"You can then register this icon with the library using the ",Object(r.b)("inlineCode",{parentName:"p"},"registry.registerIcon(...)")," function. This allows it to be used in the app config, layout, and built-in web components like ",Object(r.b)("inlineCode",{parentName:"p"},"DynamicIcon"),", or ",Object(r.b)("inlineCode",{parentName:"p"},"Button"),"."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Icon IDs should be chosen to be globally unique - one easy way to ensure this is to preface the icon ID with your company name."))),Object(r.b)(i.a,{defaultValue:"registration",values:[{label:"Registration",value:"registration"},{label:"Component With Icon",value:"component"},{label:"Layout",value:"layout"},{label:"App Config",value:"config"},{label:"UI",value:"ui"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"registration",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/index.ts"',title:'"src/index.ts"'}),'import { LibraryRegistry } from "@vertigis/web/config";\nimport ComponentWithIcon from "./components/ComponentWithIcon/ComponentWithIcon";\nimport ComponentWithIconModel from "./components/ComponentWithIcon/ComponentWithIconModel";\nimport CustomIcon from "./icons/CustomIcon";\nconst LAYOUT_NAMESPACE = "my.custom.namespace";\n\nexport default function (registry: LibraryRegistry): void {\n    registry.registerComponent({\n        name: "component-with-icon",\n        namespace: LAYOUT_NAMESPACE,\n        getComponentType: () => ComponentWithIcon,\n        itemType: "component-with-icon-model",\n        title: "Component With Icon",\n    });\n    registry.registerModel({\n        getModel: (config) => new ComponentWithIconModel(config),\n        itemType: "component-with-icon-model",\n    });\n    registry.registerIcon({\n        id: "my-company-name-arrow",\n        getComponentType: () => CustomIcon,\n    });\n}\n'))),Object(r.b)(c.a,{value:"component",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="src/components/ComponentWithIcon/ComponentWithIcon.tsx"',title:'"src/components/ComponentWithIcon/ComponentWithIcon.tsx"'}),'import React, { FC } from "react";\nimport {\n    LayoutElement,\n    LayoutElementProperties,\n} from "@vertigis/web/components";\nimport DynamicIcon from "@vertigis/web/ui/DynamicIcon";\nimport ComponentWithIconModel from "./ComponentWithIconModel";\nimport MenuItem from "@vertigis/web/ui/MenuItem";\nimport IconButton from "@vertigis/web/ui/IconButton";\nimport ListItemText from "@vertigis/web/ui/ListItemText";\n\nconst ComponentWithIcon: FC<LayoutElementProperties<ComponentWithIconModel>> = (\n    props\n) => {\n    // highlight-next-line\n    const { icon } = props.model;\n    return (\n        <LayoutElement {...props} style={{ backgroundColor: "white" }}>\n            <MenuItem>\n                <ListItemText primary="Custom Arrow Icon" />\n                <IconButton title="Custom Arrow Icon">\n                    // highlight-next-line\n                    <DynamicIcon src={icon} />\n                </IconButton>\n            </MenuItem>\n        </LayoutElement>\n    );\n};\n\nexport default ComponentWithIcon;\n'))),Object(r.b)(c.a,{value:"config",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "default",\n            "title": "Default",\n            "url": "./layout.xml"\n        },\n        {\n            "$type": "component-with-icon-model",\n            "id": "default",\n            // highlight-next-line\n            "icon": "my-company-name-arrow"\n        },\n        {\n            "$type": "menu",\n            "id": "iwtm-config",\n            "title": "I Want To Menu",\n            "items": [\n                {\n                    "$type": "menu-item",\n                    "title": "Menu Item With Custom Icon",\n                    // highlight-next-line\n                    "icon": "my-company-name-arrow"\n                }\n            ]\n        }\n    ]\n}\n'))),Object(r.b)(c.a,{value:"layout",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'}),'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1" xmlns:custom="my.custom.namespace">\n    <map config="map-1">\n        <custom:component-with-icon slot="top-left" width="22" height="5" config="default"/>\n        <iwtm slot="top-right" config="iwtm-config" />\n    </map>\n</layout>\n'))),Object(r.b)(c.a,{value:"ui",mdxType:"TabItem"},Object(r.b)("img",{src:Object(a.a)("img/web-custom-dynamic-icon.png")}))),Object(r.b)("h2",{id:"next-steps"},"Next Steps"),Object(r.b)(l.a,{mdxType:"UseCaseContainer"},Object(r.b)(s.a,{title:"Use Icons in Components",description:"Learn how to use icons in custom components",link:Object(a.a)("docs/web/sdk-components-styling"),mdxType:"UseCaseCard"})))}d.isMDXComponent=!0},231:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),b=o,d=m["".concat(i,".").concat(b)]||m[b]||p[b]||a;return n?r.a.createElement(d,c(c({ref:t},l),{},{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},232:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var o=n(235),r=n(233);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(o.a)();return{withBaseUrl:(n,o)=>function(e,t,n,{forcePrependBaseUrl:o=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(o)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+i:i}(t,e,n,o)}}function i(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},233:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}))},234:function(e,t,n){"use strict";function o(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(r&&(r+=" "),r+=t);return r}},235:function(e,t,n){"use strict";var o=n(0),r=n(19);t.a=function(){const e=Object(o.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},236:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=n(13),i=n(233),c=n(8);const s=Object(o.createContext)({collectLink:()=>{}});var l=n(232),u=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};t.a=function(e){var t,{isNavLink:n,to:m,href:p,activeClassName:b,"data-noBrokenLinkCheck":d}=e,f=u(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]);const{withBaseUrl:g}=Object(l.b)(),h=Object(o.useContext)(s),y=m||p,v=Object(i.a)(y),O=null==y?void 0:y.replace("pathname://",""),w=void 0!==O?(e=>e.startsWith("/"))(j=O)?g(j):j:void 0;var j;const I=Object(o.useRef)(!1),x=n?a.e:a.c,C=c.a.canUseIntersectionObserver;let N;Object(o.useEffect)(()=>(!C&&v&&window.docusaurus.prefetch(w),()=>{C&&N&&N.disconnect()}),[w,C,v]);const E=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,T=!w||!v||E;return w&&v&&!E&&!d&&h.collectLink(w),T?r.a.createElement("a",Object.assign({href:w},!v&&{target:"_blank",rel:"noopener noreferrer"},f)):r.a.createElement(x,Object.assign({},f,{onMouseEnter:()=>{I.current||(window.docusaurus.preload(w),I.current=!0)},innerRef:e=>{var t,n;C&&e&&v&&(t=e,n=()=>{window.docusaurus.prefetch(w)},N=new window.IntersectionObserver(e=>{e.forEach(e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(N.unobserve(t),N.disconnect(),n())})}),N.observe(t))},to:w||""},n&&{activeClassName:b}))}},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(0),r=n.n(o),a=n(46),i=n.n(a);function c({children:e}){return r.a.createElement("div",{className:i.a.root},e)}},238:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n(236),r=n(0),a=n.n(r),i=n(234),c=n(47),s=n.n(c);function l({title:e,description:t,link:n}){return a.a.createElement("div",{className:Object(i.a)("card-demo",s.a.root)},a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"card__header"},a.a.createElement("h3",null,e)),a.a.createElement("div",{className:"card__body"},a.a.createElement("p",null,t)),a.a.createElement("div",{className:"card__footer"},a.a.createElement(o.a,{className:"button button--secondary button--block",to:n},"Get Started"))))}},239:function(e,t,n){"use strict";var o=n(0);const r=Object(o.createContext)(void 0);t.a=r},240:function(e,t,n){"use strict";var o=n(0),r=n(239);t.a=function(){const e=Object(o.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},241:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=n(240),i=n(234),c=n(48),s=n.n(c);const l=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:c,values:m,groupId:p}=e,{tabGroupChoices:b,setTabGroupChoices:d}=Object(a.a)(),[f,g]=Object(o.useState)(c),[h,y]=Object(o.useState)(!1);if(null!=p){const e=b[p];null!=e&&e!==f&&m.some(t=>t.value===e)&&g(e)}const v=e=>{g(e),null!=p&&d(p,e)},O=[],w=e=>{e.metaKey||e.altKey||e.ctrlKey||y(!0)},j=()=>{y(!1)};return Object(o.useEffect)(()=>{window.addEventListener("keydown",w),window.addEventListener("mousedown",j)},[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},m.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":f===e}),style:h?{}:{outline:"none"},key:e,ref:e=>O.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(O,e.target,e),w(e)},onFocus:()=>v(e),onClick:()=>{v(e),y(!1)},onPointerDown:()=>y(!1)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(n).filter(e=>e.props.value===f)[0]))}},242:function(e,t,n){"use strict";var o=n(0),r=n.n(o);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);