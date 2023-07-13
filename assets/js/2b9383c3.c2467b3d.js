"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[4922],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=o,m=p["".concat(c,".").concat(u)]||p[u]||v[u]||i;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5858:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(9960),o=n(7294),i=n(6010);const a={root:"root_Uwqo"};function s(e){let{title:t,description:n,link:s}=e;return o.createElement("div",{className:(0,i.Z)("card-demo",a.root)},o.createElement("div",{className:"card"},o.createElement("div",{className:"card__header"},o.createElement("h3",null,t)),o.createElement("div",{className:"card__body"},o.createElement("p",null,n)),o.createElement("div",{className:"card__footer"},o.createElement(r.Z,{className:"button button--secondary button--block",to:s},"Get Started"))))}},7467:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294);const o={root:"root_vxd5"};function i(e){let{children:t}=e;return r.createElement("div",{className:o.root},t)}},8007:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>v});var r=n(7462),o=(n(7294),n(3905)),i=n(4996),a=n(5858),s=n(7467);const c={title:"Events Overview",sidebar_label:"Overview",description:"VertiGIS Studio Mobile - Overview of events"},l=void 0,d={unversionedId:"mobile/sdk-events-overview",id:"mobile/sdk-events-overview",title:"Events Overview",description:"VertiGIS Studio Mobile - Overview of events",source:"@site/docs/mobile/sdk-events-overview.mdx",sourceDirName:"mobile",slug:"/mobile/sdk-events-overview",permalink:"/docs/mobile/sdk-events-overview",draft:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/sdk-events-overview.mdx",tags:[],version:"current",frontMatter:{title:"Events Overview",sidebar_label:"Overview",description:"VertiGIS Studio Mobile - Overview of events"},sidebar:"mobile",previous:{title:"Service Reference",permalink:"/docs/mobile/sdk-services-reference"},next:{title:"Events Reference",permalink:"/docs/mobile/sdk-events-reference"}},p={},v=[{value:"Next Steps",id:"next-steps",level:2}],u={toc:v},m="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Events")," are distinct, discrete messaging about a change or update that occurs in the viewer. They can be published or subscribed to by any component, service or ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-components-reference#xaml-view"},"view")," registered with VertiGIS Studio Mobile, and can be used to initiate behaviors, communicate data changes, and more. Events themselves do not execute behavior, but merely provide messaging so subscribers can act on changes."),(0,o.kt)("p",null,"Events are internal to VertiGIS Studio Mobile, so they can only be consumed by custom code. Custom components and services can access events through ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-dependency-injection"},"dependency injection"),"."),(0,o.kt)("p",null,"The full list of existing events available in VertiGIS Studio Mobile can be ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/api-commands-operations-events#events"},"found in the API documentation"),"."),(0,o.kt)("p",null,"Events in VertiGIS Studio Mobile are grouped by categories, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"app")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"geolocation"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"app.activated\napp.backgrounded\ngeolocation.position-changed\ngeolocation.position-lost\n")),(0,o.kt)("p",null,"Events can publish custom arguments with information about the change they are communicating."),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)(s.Z,{mdxType:"UseCaseContainer"},(0,o.kt)(a.Z,{title:"Check out the Event Reference",description:"Take a deep dive into events in the VertiGIS Studio Mobile SDK",link:(0,i.Z)("docs/mobile/sdk-events-reference"),mdxType:"UseCaseCard"}),(0,o.kt)(a.Z,{title:"Events API",description:"Check out the full list of Events available in VertiGIS Studio Mobile",link:(0,i.Z)("docs/mobile/api-commands-operations-events#events"),mdxType:"UseCaseCard"})))}b.isMDXComponent=!0}}]);