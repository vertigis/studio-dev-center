(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[5035,7499],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>d});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),l=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?i.createElement(f,r(r({ref:t},c),{},{components:n})):i.createElement(f,r({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3919:(e,t,n)=>{"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}n.d(t,{b:()=>i,Z:()=>a})},4996:(e,t,n)=>{"use strict";n.d(t,{C:()=>o,Z:()=>r});var i=n(2263),a=n(3919);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,i.Z)();return{withBaseUrl:(n,i)=>function(e,t,n,{forcePrependBaseUrl:i=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(i)return t+n;const r=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+r:r}(t,e,n,i)}}function r(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},8215:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var i=n(7294);const a=function({children:e,hidden:t,className:n}){return i.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},1395:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var i=n(7294),a=n(944),o=n(6010);const r="tabItem_1uMI",s="tabItemActive_2DSg";const p=37,l=39;const c=function(e){const{lazy:t,block:n,defaultValue:c,values:m,groupId:u,className:d}=e,{tabGroupChoices:f,setTabGroupChoices:g}=(0,a.Z)(),[h,b]=(0,i.useState)(c),y=i.Children.toArray(e.children),k=[];if(null!=u){const e=f[u];null!=e&&e!==h&&m.some((t=>t.value===e))&&b(e)}const v=e=>{const t=e.currentTarget,n=k.indexOf(t),i=m[n].value;b(i),null!=u&&(g(u,i),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:i,right:a}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:r}=window;return t>=0&&a<=r&&i<=o&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((()=>t.classList.remove(s)),2e3))}),150))},w=e=>{var t;let n;switch(e.keyCode){case l:{const t=k.indexOf(e.target)+1;n=k[t]||k[0];break}case p:{const t=k.indexOf(e.target)-1;n=k[t]||k[k.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},d)},m.map((({value:e,label:t})=>i.createElement("li",{role:"tab",tabIndex:h===e?0:-1,"aria-selected":h===e,className:(0,o.Z)("tabs__item",r,{"tabs__item--active":h===e}),key:e,ref:e=>k.push(e),onKeyDown:w,onFocus:v,onClick:v},t)))),t?(0,i.cloneElement)(y.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}},9443:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});const i=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var i=n(7294),a=n(9443);const o=function(){const e=(0,i.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},2514:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>r,metadata:()=>s,toc:()=>p,default:()=>c});var i=n(2122),a=(n(7294),n(3905));const o={},r=void 0,s={unversionedId:"snippets/app-item",id:"snippets/app-item",isDocsHomePage:!1,title:"app-item",description:"An app config file is composed of a list of app items. App items can potentially be anything. Each app item has an item $type, which viewer is aware of and knows how to locate and load. They usually they represent configuration for components, maps, portal items, or shared data. All item app configuration is specified within the items array of the app.json file.",source:"@site/docs/snippets/app-item.mdx",sourceDirName:"snippets",slug:"/snippets/app-item",permalink:"/docs/snippets/app-item",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/snippets/app-item.mdx",version:"current",frontMatter:{}},p=[],l={toc:p};function c({components:e,...t}){return(0,a.kt)("wrapper",(0,i.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"An app config file is composed of a list of ",(0,a.kt)("strong",{parentName:"p"},"app items"),". App items can potentially be anything. Each app item has an ",(0,a.kt)("strong",{parentName:"p"},"item ",(0,a.kt)("inlineCode",{parentName:"strong"},"$type")),", which viewer is aware of and knows how to locate and load. They usually they represent configuration for components, maps, portal items, or shared data. All item app configuration is specified within the ",(0,a.kt)("inlineCode",{parentName:"p"},"items")," array of the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"app.json"))," file."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Each component can only load a certain ",(0,a.kt)("inlineCode",{parentName:"p"},"$type")," of app item which corresponds to it. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"<map>")," components can only load app items of type ",(0,a.kt)("inlineCode",{parentName:"p"},"map-extension")," as their configuration."))))}c.isMDXComponent=!0},5555:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>m,toc:()=>u,default:()=>f});var i=n(2122),a=(n(7294),n(3905)),o=n(4996),r=n(2514),s=n(1395),p=n(8215);const l={title:"App Config Reference",description:"VertiGIS Studio Web - Reference for App Config"},c=void 0,m={unversionedId:"web/configuration-app-config-reference",id:"web/configuration-app-config-reference",isDocsHomePage:!1,title:"App Config Reference",description:"VertiGIS Studio Web - Reference for App Config",source:"@site/docs/web/configuration-app-config-reference.mdx",sourceDirName:"web",slug:"/web/configuration-app-config-reference",permalink:"/docs/web/configuration-app-config-reference",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/configuration-app-config-reference.mdx",version:"current",frontMatter:{title:"App Config Reference",description:"VertiGIS Studio Web - Reference for App Config"},sidebar:"web",previous:{title:"Getting Started",permalink:"/docs/web/configuration-app-config-getting-started"},next:{title:"Configuring the Theme",permalink:"/docs/web/configuration-theme"}},u=[{value:"<code>schemaVersion</code> property",id:"schemaversion-property",children:[]},{value:"App Items",id:"app-items",children:[{value:"Custom App Items",id:"custom-app-items",children:[]}]},{value:"Item URIs",id:"item-uris",children:[]},{value:"Reusing Config",id:"reusing-config",children:[]},{value:"Internationalization",id:"internationalization",children:[]}],d={toc:u};function f({components:e,...t}){return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"schemaversion-property"},(0,a.kt)("inlineCode",{parentName:"h2"},"schemaVersion")," property"),(0,a.kt)("p",null,"The property ",(0,a.kt)("inlineCode",{parentName:"p"},"schemaVersion")," should always be present in an ",(0,a.kt)("inlineCode",{parentName:"p"},"app.json")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "schemaVersion": "1.0",\n\n  "items": [...]\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"schemaVersion")," property is a required property that informs VertiGIS Studio Web what version of app config you are using. This allows for the schema to be updated in future releases without breaking old configuration."),(0,a.kt)("h2",{id:"app-items"},"App Items"),(0,a.kt)(r.default,{mdxType:"AppItemSnippet"}),(0,a.kt)("h3",{id:"custom-app-items"},"Custom App Items"),(0,a.kt)("p",null,"Custom App items in VertiGIS Studio Web are most commonly defined by creating a configurable ",(0,a.kt)("a",{parentName:"p",href:"/docs/web/sdk-components-reference#configuration"},"component model")," or a ",(0,a.kt)("a",{parentName:"p",href:"/docs/web/sdk-services-reference#models-and-configuration"},"configurable service"),". Registering the model or service with VertiGIS Studio Web defines a new app item type which can be used in the app config."),(0,a.kt)("h2",{id:"item-uris"},"Item URIs"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Item URIs")," are a commonly used pattern in the ",(0,a.kt)("inlineCode",{parentName:"p"},"app.json")," to uniquely identify and reference app items. They take the format"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"item://<item-type>/<item-id>")),(0,a.kt)("p",null,"For example, the item URI for the following item is ",(0,a.kt)("inlineCode",{parentName:"p"},"item://menu-item/feature-actions")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$type": "menu",\n  "id": "feature-actions",\n  "items": [...]\n}\n')),(0,a.kt)("p",null,"These item URIs can be used by app items to include other app items as property values, allowing reuse."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "$type": "feature-details",\n    "id": "feature-details",\n    "featureActions": "item://menu/feature-actions"\n}\n')),(0,a.kt)("h2",{id:"reusing-config"},"Reusing Config"),(0,a.kt)("p",null,"The same config can be used for multiple items in a layout. For example, this allows you to reuse the same button in multiple locations in the App."),(0,a.kt)(s.Z,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"},{label:"UI",value:"ui"}],mdxType:"Tabs"},(0,a.kt)(p.Z,{value:"layout",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8" ?>\n<layout xmlns="https://geocortex.com/layout/v1">\n  <split resizable="true">\n    <panel width="30">\n        <stack margin="0.5">\n            // highlight-next-line\n          <button icon="info" config="do-something" margin="0.5" id="do-something-1"></button>\n        </stack>\n    </panel>\n    <map slot="main">\n        // highlight-next-line\n      <button icon="info" config="do-something" slot="top-center" margin="0.5" id="do-something-2"></button>\n    </map>\n  </split>\n</layout>\n'))),(0,a.kt)(p.Z,{value:"config",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "menu-item",\n            // highlight-next-line\n            "id": "do-something",\n            "isEnabled": true,\n            "iconId": "info",\n            "action": {\n                "name": "ui.alert",\n                "arguments": {\n                    "title": "Something?",\n                    "message": "Fine, I did it",\n                    "buttonText": "OK"\n                }\n            }\n        }\n    ]\n}\n'))),(0,a.kt)(p.Z,{value:"ui",mdxType:"TabItem"},(0,a.kt)("img",{src:(0,o.Z)("img/web-app-config-basic.png")}))),(0,a.kt)("p",null,"In addition, multiple components can use the same configuration type. For example, components like the ",(0,a.kt)("inlineCode",{parentName:"p"},"<iwtm>"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<button>")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<toolbar>")," all use the ",(0,a.kt)("inlineCode",{parentName:"p"},"menu-item")," type in some manner for their configuration. Custom components can also adopt existing item types as their ",(0,a.kt)("a",{parentName:"p",href:"/docs/web/sdk-components-reference#models"},"models"),"."),(0,a.kt)("h2",{id:"internationalization"},"Internationalization"),(0,a.kt)("p",null,"All language strings used for properties in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/web/configuration-app-config-getting-started"},"app config"),', like "title" or "description", are automatically translated by the application.'),(0,a.kt)("p",null,"Learn more about how to ",(0,a.kt)("a",{parentName:"p",href:"/docs/web/sdk-internationalization"},"use and create language resources"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "$type": "menu-item",\n            "id": "zoom-to-extent",\n            "iconId": "zoom-extent",\n            "title": "language-zoom-extent-title",\n            "description": "language-zoom-extent-description",\n            "action": "map.zoom-to-layer-extent"\n        },\n        ...\n    ]\n}\n')))}f.isMDXComponent=!0},6010:(e,t,n)=>{"use strict";function i(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:()=>a})}}]);