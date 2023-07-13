"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[6313],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,v=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(v,o(o({ref:t},u),{},{components:r})):n.createElement(v,o({ref:t},u))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),i=r(6010);const a={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(a.tabItem,o),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(7462),i=r(7294),a=r(6010),o=r(2466),s=r(6550),c=r(1980),l=r(7392),u=r(12);function d(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:i}}=e;return{value:t,label:r,attributes:n,default:i}}))}function p(e){const{values:t,children:r}=e;return(0,i.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.k6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c._X)(a),(0,i.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=p(e),[o,s]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,l]=v({queryString:r,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,u.Nk)(r);return[n,(0,i.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),b=(()=>{const e=c??d;return m({value:e,tabValues:a})?e:null})();(0,i.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),l(e),f(e)}),[l,f,a]),tabValues:a}}var b=r(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:r,selectedValue:s,selectValue:c,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,r=u.indexOf(t),n=l[r].value;n!==s&&(d(t),c(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t)},l.map((e=>{let{value:t,label:r,attributes:o}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},o,{className:(0,a.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":s===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:n}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=f(e);return i.createElement("div",{className:(0,a.Z)("tabs-container",h.tabList)},i.createElement(g,(0,n.Z)({},e,t)),i.createElement(y,(0,n.Z)({},e,t)))}function k(e){const t=(0,b.Z)();return i.createElement(w,(0,n.Z)({key:String(t)},e))}},2701:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));r(4996),r(4866),r(5162);const a={title:"Service Injection",description:"VertiGIS Studio Web - Injecting services into custom services"},o=void 0,s={unversionedId:"web/sdk-services-injecting-services",id:"web/sdk-services-injecting-services",title:"Service Injection",description:"VertiGIS Studio Web - Injecting services into custom services",source:"@site/docs/web/sdk-services-injecting-services.mdx",sourceDirName:"web",slug:"/web/sdk-services-injecting-services",permalink:"/docs/web/sdk-services-injecting-services",draft:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/sdk-services-injecting-services.mdx",tags:[],version:"current",frontMatter:{title:"Service Injection",description:"VertiGIS Studio Web - Injecting services into custom services"},sidebar:"web",previous:{title:"Service Reference",permalink:"/docs/web/sdk-services-reference"},next:{title:"Overview",permalink:"/docs/web/sdk-events-overview"}},c={},l=[],u={toc:l},d="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"VertiGIS Studio Web uses dependency injection as a way to obtain a reference to VertiGIS Studio Web ",(0,i.kt)("a",{parentName:"p",href:"/docs/web/sdk-services-overview"},"services")," in your application. Services can be referenced from other services."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If a ",(0,i.kt)("a",{parentName:"p",href:"/docs/web/sdk-commands-operations#implementing-commands-and-operations"},"custom command or operation")," can accomplish the behavior you need without a direct service reference, this is preferred to decrease the degree of coupling.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@inject")," decorator can be used to reference a service from within your custom service. The following example demonstrates injecting the ",(0,i.kt)("inlineCode",{parentName:"p"},"RegionService")," into a custom service."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { ServiceBase } from "@vertigis/web/services";\nimport { RegionService } from "@vertigis/web/region";\nimport { FrameworkServiceType, inject } from "@vertigis/web/services";\n\nexport default class CustomDataService extends ServiceBase {\n    // NOTE: This property isn\'t populated until the service is `initialized`.\n    // It is not available in the constructor of this service.\n    // highlight-start\n    @inject(FrameworkServiceType.REGION)\n    regionService: RegionService | undefined;\n    // highlight-end\n\n    private _distance = "100";\n\n    get distance(): string {\n        return this.regionService &&\n            this.regionService.measurementSystem === "metric"\n            ? `${this._distance} m`\n            : `${this._distance} ft`;\n    }\n}\n')),(0,i.kt)("p",null,"The property that the ",(0,i.kt)("inlineCode",{parentName:"p"},"@inject")," decorator is bound to ",(0,i.kt)("strong",{parentName:"p"},"will be populated during the ",(0,i.kt)("a",{parentName:"strong",href:"/docs/web/sdk-components-reference#initialization-and-teardown"},"initialization process"))," of the service that the decorator was used in. The property value will be ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," until the service is initialized."))}p.isMDXComponent=!0}}]);