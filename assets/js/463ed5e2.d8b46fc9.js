"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[4118],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},v="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),v=l(n),p=o,m=v["".concat(c,".").concat(p)]||v[p]||u[p]||s;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[v]="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5858:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(9960),o=n(7294),s=n(6010);const i={root:"root_Uwqo"};function a(e){let{title:t,description:n,link:a}=e;return o.createElement("div",{className:(0,s.Z)("card-demo",i.root)},o.createElement("div",{className:"card"},o.createElement("div",{className:"card__header"},o.createElement("h3",null,t)),o.createElement("div",{className:"card__body"},o.createElement("p",null,n)),o.createElement("div",{className:"card__footer"},o.createElement(r.Z,{className:"button button--secondary button--block",to:a},"Get Started"))))}},7467:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294);const o={root:"root_vxd5"};function s(e){let{children:t}=e;return r.createElement("div",{className:o.root},t)}},4556:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>l,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var r=n(7462),o=(n(7294),n(3905)),s=n(4996),i=n(5858),a=n(7467);const c={title:"Events Overview",sidebar_label:"Overview",description:"VertiGIS Studio Web - Overview of events"},l=void 0,d={unversionedId:"web/sdk-events-overview",id:"web/sdk-events-overview",title:"Events Overview",description:"VertiGIS Studio Web - Overview of events",source:"@site/docs/web/sdk-events-overview.mdx",sourceDirName:"web",slug:"/web/sdk-events-overview",permalink:"/docs/web/sdk-events-overview",draft:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/sdk-events-overview.mdx",tags:[],version:"current",frontMatter:{title:"Events Overview",sidebar_label:"Overview",description:"VertiGIS Studio Web - Overview of events"},sidebar:"web",previous:{title:"Service Injection",permalink:"/docs/web/sdk-services-injecting-services"},next:{title:"Events Reference",permalink:"/docs/web/sdk-events-reference"}},v={},u=[{value:"Next Steps",id:"next-steps",level:2}],p={toc:u},m="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Events")," are distinct, discrete messaging about a change or update that occurs in the viewer. They can be published or subscribed to by any ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/sdk-components-overview"},"component")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/sdk-services-overview"},"service"),", and can be used to initiate behaviors, communicate data changes, and more. Events themselves do not execute behavior, but merely provide messaging so subscribers can act on changes."),(0,o.kt)("p",null,"Events are internal to VertiGIS Studio Web, so they can only be consumed by custom code. Custom components can access events through ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/sdk-events-reference#component-models-1"},"their models")," or through the ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/sdk-components-ui-context"},"UIContext"),". Custom services can publish or subscribe to built-in or custom events ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/sdk-events-reference#services-1"},"through the MessageBus"),"."),(0,o.kt)("p",null,"The full list of existing events available in VertiGIS Studio Web can be ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/api-commands-operations-events#events"},"found in the API documentation"),"."),(0,o.kt)("p",null,"Events in VertiGIS Studio Web are grouped by categories, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"ui")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"viewer"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ui.activated\ncoordinates.coordinate-systems-changed\nviewer.layout-changed\nauth.sign-in-failed\n")),(0,o.kt)("p",null,"Events can publish custom arguments with information about the change they are communicating."),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)(a.Z,{mdxType:"UseCaseContainer"},(0,o.kt)(i.Z,{title:"Subscribing to Existing Events",description:"Learn how to subscribe to an existing event",link:(0,s.Z)("docs/web/tutorial-events-subscribe"),mdxType:"UseCaseCard"}),(0,o.kt)(i.Z,{title:"Events API",description:"Check out the full list of Events available in VertiGIS Studio Web",link:(0,s.Z)("docs/web/api-commands-operations-events#events"),mdxType:"UseCaseCard"}),(0,o.kt)(i.Z,{title:"Implementing Custom Events",description:"Learn how to implement a custom Event.",link:(0,s.Z)("docs/web/sdk-events-reference#creating-custom-events"),mdxType:"UseCaseCard"})))}b.isMDXComponent=!0}}]);