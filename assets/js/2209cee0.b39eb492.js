"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[5677],{4385:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=r(4848),i=r(8453);r(6025),r(1470),r(9365);const s={title:"Service Injection",description:"VertiGIS Studio Web - Injecting services into custom services"},a=void 0,o={id:"web/sdk-services-injecting-services",title:"Service Injection",description:"VertiGIS Studio Web - Injecting services into custom services",source:"@site/docs/web/sdk-services-injecting-services.mdx",sourceDirName:"web",slug:"/web/sdk-services-injecting-services",permalink:"/docs/web/sdk-services-injecting-services",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/sdk-services-injecting-services.mdx",tags:[],version:"current",frontMatter:{title:"Service Injection",description:"VertiGIS Studio Web - Injecting services into custom services"},sidebar:"web",previous:{title:"Service Reference",permalink:"/docs/web/sdk-services-reference"},next:{title:"Overview",permalink:"/docs/web/sdk-events-overview"}},c={},u=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["VertiGIS Studio Web uses dependency injection as a way to obtain a reference to VertiGIS Studio Web ",(0,n.jsx)(t.a,{href:"/docs/web/sdk-services-overview",children:"services"})," in your application. Services can be referenced from other services."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["If a ",(0,n.jsx)(t.a,{href:"/docs/web/sdk-commands-operations#implementing-commands-and-operations",children:"custom command or operation"})," can accomplish the behavior you need without a direct service reference, this is preferred to decrease the degree of coupling."]})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"@inject"})," decorator can be used to reference a service from within your custom service. The following example demonstrates injecting the ",(0,n.jsx)(t.code,{children:"RegionService"})," into a custom service."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:'import { ServiceBase } from "@vertigis/web/services";\nimport { RegionService } from "@vertigis/web/region";\nimport { FrameworkServiceType, inject } from "@vertigis/web/services";\n\nexport default class CustomDataService extends ServiceBase {\n    // NOTE: This property isn\'t populated until the service is `initialized`.\n    // It is not available in the constructor of this service.\n    // highlight-start\n    @inject(FrameworkServiceType.REGION)\n    regionService: RegionService | undefined;\n    // highlight-end\n\n    private _distance = "100";\n\n    get distance(): string {\n        return this.regionService &&\n            this.regionService.measurementSystem === "metric"\n            ? `${this._distance} m`\n            : `${this._distance} ft`;\n    }\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["The property that the ",(0,n.jsx)(t.code,{children:"@inject"})," decorator is bound to ",(0,n.jsxs)(t.strong,{children:["will be populated during the ",(0,n.jsx)(t.a,{href:"/docs/web/sdk-components-reference#initialization-and-teardown",children:"initialization process"})]})," of the service that the decorator was used in. The property value will be ",(0,n.jsx)(t.code,{children:"undefined"})," until the service is initialized."]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},9365:(e,t,r)=>{r.d(t,{A:()=>a});r(6540);var n=r(8215);const i={tabItem:"tabItem_Ymn6"};var s=r(4848);function a({children:e,hidden:t,className:r}){return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,r),hidden:t,children:e})}},1470:(e,t,r)=>{r.d(t,{A:()=>S});var n=r(6540),i=r(8215),s=r(3104),a=r(6347),o=r(205),c=r(7485),u=r(1682),l=r(9466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function v(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((({props:{value:e,label:t,attributes:r,default:n}})=>({value:e,label:t,attributes:r,default:n})))}(r);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h({value:e,tabValues:t}){return t.some((t=>t.value===e))}function p({queryString:e=!1,groupId:t}){const r=(0,a.W6)(),i=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,c.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:i}=e,s=v(e),[a,c]=(0,n.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,d]=p({queryString:r,groupId:i}),[m,b]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,i]=(0,l.Dv)(t);return[r,(0,n.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:i}),f=(()=>{const e=u??m;return h({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{f&&c(f)}),[f]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=r(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(4848);function w({className:e,block:t,selectedValue:r,selectValue:n,tabValues:a}){const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,i=o.indexOf(t),s=a[i].value;s!==r&&(c(t),n(s))},l=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},e),children:a.map((({value:e,label:t,attributes:n})=>(0,g.jsx)("li",{role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>o.push(e),onKeyDown:l,onClick:u,...n,className:(0,i.A)("tabs__item",f.tabItem,n?.className,{"tabs__item--active":r===e}),children:t??e},e)))})}function j({lazy:e,children:t,selectedValue:r}){const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=i.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function x(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,g.jsx)(w,{...e,...t}),(0,g.jsx)(j,{...e,...t})]})}function S(e){const t=(0,b.A)();return(0,g.jsx)(x,{...e,children:d(e.children)},String(t))}},8453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>o});var n=r(6540);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);