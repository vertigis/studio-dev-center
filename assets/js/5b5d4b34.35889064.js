"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[3950],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=o,f=m["".concat(c,".").concat(u)]||m[u]||p[u]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3919:(e,t,n)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{Z:()=>o,b:()=>r})},4996:(e,t,n)=>{n.d(t,{C:()=>i,Z:()=>a});var r=n(2263),o=n(3919);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(r)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+a:a}(t,e,n,r)}}function a(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},8215:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294);const o=function({children:e,hidden:t,className:n}){return r.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},1395:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(7294),o=n(944),i=n(6010);const a="tabItem_1uMI",s="tabItemActive_2DSg";const c=37,l=39;const d=function(e){const{lazy:t,block:n,defaultValue:d,values:p,groupId:m,className:u}=e,{tabGroupChoices:f,setTabGroupChoices:v}=(0,o.Z)(),[h,b]=(0,r.useState)(d),g=r.Children.toArray(e.children),y=[];if(null!=m){const e=f[m];null!=e&&e!==h&&p.some((t=>t.value===e))&&b(e)}const w=e=>{const t=e.currentTarget,n=y.indexOf(t),r=p[n].value;b(r),null!=m&&(v(m,r),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:r,right:o}=e.getBoundingClientRect(),{innerHeight:i,innerWidth:a}=window;return t>=0&&o<=a&&r<=i&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((()=>t.classList.remove(s)),2e3))}),150))},k=e=>{var t;let n;switch(e.keyCode){case l:{const t=y.indexOf(e.target)+1;n=y[t]||y[0];break}case c:{const t=y.indexOf(e.target)-1;n=y[t]||y[y.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},u)},p.map((({value:e,label:t})=>r.createElement("li",{role:"tab",tabIndex:h===e?0:-1,"aria-selected":h===e,className:(0,i.Z)("tabs__item",a,{"tabs__item--active":h===e}),key:e,ref:e=>y.push(e),onKeyDown:k,onFocus:w,onClick:w},t)))),t?(0,r.cloneElement)(g.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}},9443:(e,t,n)=>{n.d(t,{Z:()=>r});const r=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),o=n(9443);const i=function(){const e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},4950:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));n(4996),n(1395),n(8215);const i={title:"Service Injection",description:"VertiGIS Studio Web - Injecting services into component models"},a=void 0,s={unversionedId:"web/sdk-components-injecting-services",id:"web/sdk-components-injecting-services",isDocsHomePage:!1,title:"Service Injection",description:"VertiGIS Studio Web - Injecting services into component models",source:"@site/docs/web/sdk-components-injecting-services.mdx",sourceDirName:"web",slug:"/web/sdk-components-injecting-services",permalink:"/docs/web/sdk-components-injecting-services",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/sdk-components-injecting-services.mdx",version:"current",frontMatter:{title:"Service Injection",description:"VertiGIS Studio Web - Injecting services into component models"},sidebar:"web",previous:{title:"Component Interactions",permalink:"/docs/web/sdk-components-interactions"},next:{title:"Component Styling",permalink:"/docs/web/sdk-components-styling"}},c=[],l={toc:c};function d({components:e,...t}){return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"VertiGIS Studio Web uses dependency injection as a way to obtain a reference to VertiGIS Studio Web ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/sdk-services-overview"},"services")," in your application. Services can be referenced from within a ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/sdk-components-reference#models"},"component model"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If a ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/sdk-commands-operations#implementing-commands-and-operations"},"custom command or operation")," can accomplish the behavior you need without a direct service reference, this is preferred to decrease the degree of coupling."))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@inject")," decorator can be used to reference a service from within your component model. The following example demonstrates injecting the ",(0,o.kt)("inlineCode",{parentName:"p"},"RegionService")," into a custom component model."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { ComponentModelBase } from "@vertigis/web/models";\nimport { RegionService } from "@vertigis/web/region";\n// highlight-next-line\nimport { FrameworkServiceType, inject } from "@vertigis/web/services";\n\nexport default class ExampleComponentModel extends ComponentModelBase {\n    // NOTE: This property isn\'t populated until the model is `initialized`.\n    // It is not available in the constructor of this model.\n    // highlight-start\n    @inject(FrameworkServiceType.REGION)\n    regionService: RegionService | undefined;\n    // highlight-end\n\n    private _distance = "100";\n\n    get distance(): string {\n        return this.regionService &&\n            this.regionService.measurementSystem === "metric"\n            ? `${this._distance} m`\n            : `${this._distance} ft`;\n    }\n}\n')),(0,o.kt)("p",null,"The property that the ",(0,o.kt)("inlineCode",{parentName:"p"},"@inject")," decorator is bound to ",(0,o.kt)("strong",{parentName:"p"},"will be populated during the ",(0,o.kt)("a",{parentName:"strong",href:"/docs/web/sdk-components-reference#initialization-and-teardown"},"initialization process"))," of the component model that the decorator was used in. The property value will be ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," until the component model is initialized."))}d.isMDXComponent=!0},6010:(e,t,n)=>{function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:()=>o})}}]);