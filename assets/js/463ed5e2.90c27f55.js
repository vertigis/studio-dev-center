"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[8928],{4532:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>b,frontMatter:()=>d,metadata:()=>v,toc:()=>u});var s=n(7624),i=n(2172),r=n(964),o=n(7528),c=n(7160);const d={title:"Events Overview",sidebar_label:"Overview",description:"VertiGIS Studio Web - Overview of events"},a=void 0,v={id:"web/sdk-events-overview",title:"Events Overview",description:"VertiGIS Studio Web - Overview of events",source:"@site/docs/web/sdk-events-overview.mdx",sourceDirName:"web",slug:"/web/sdk-events-overview",permalink:"/docs/web/sdk-events-overview",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/sdk-events-overview.mdx",tags:[],version:"current",frontMatter:{title:"Events Overview",sidebar_label:"Overview",description:"VertiGIS Studio Web - Overview of events"},sidebar:"web",previous:{title:"Service Injection",permalink:"/docs/web/sdk-services-injecting-services"},next:{title:"Events Reference",permalink:"/docs/web/sdk-events-reference"}},l={},u=[{value:"Next Steps",id:"next-steps",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Events"})," are distinct, discrete messaging about a change or update that occurs in the viewer. They can be published or subscribed to by any ",(0,s.jsx)(t.a,{href:"/docs/web/sdk-components-overview",children:"component"})," or ",(0,s.jsx)(t.a,{href:"/docs/web/sdk-services-overview",children:"service"}),", and can be used to initiate behaviors, communicate data changes, and more. Events themselves do not execute behavior, but merely provide messaging so subscribers can act on changes."]}),"\n",(0,s.jsxs)(t.p,{children:["Events are internal to VertiGIS Studio Web, so they can only be consumed by custom code. Custom components can access events through ",(0,s.jsx)(t.a,{href:"/docs/web/sdk-events-reference#component-models-1",children:"their models"})," or through the ",(0,s.jsx)(t.a,{href:"/docs/web/sdk-components-ui-context",children:"UIContext"}),". Custom services can publish or subscribe to built-in or custom events ",(0,s.jsx)(t.a,{href:"/docs/web/sdk-events-reference#services-1",children:"through the MessageBus"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The full list of existing events available in VertiGIS Studio Web can be ",(0,s.jsx)(t.a,{href:"/docs/web/api-commands-operations-events#events",children:"found in the API documentation"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Events in VertiGIS Studio Web are grouped by categories, such as ",(0,s.jsx)(t.code,{children:"ui"})," or ",(0,s.jsx)(t.code,{children:"viewer"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"ui.activated\ncoordinates.coordinate-systems-changed\nviewer.layout-changed\nauth.sign-in-failed\n"})}),"\n",(0,s.jsx)(t.p,{children:"Events can publish custom arguments with information about the change they are communicating."}),"\n",(0,s.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsxs)(c.c,{children:[(0,s.jsx)(o.c,{title:"Subscribing to Existing Events",description:"Learn how to subscribe to an existing event",link:(0,r.c)("docs/web/tutorial-events-subscribe")}),(0,s.jsx)(o.c,{title:"Events API",description:"Check out the full list of Events available in VertiGIS Studio Web",link:(0,r.c)("docs/web/api-commands-operations-events#events")}),(0,s.jsx)(o.c,{title:"Implementing Custom Events",description:"Learn how to implement a custom Event.",link:(0,r.c)("docs/web/sdk-events-reference#creating-custom-events")})]})]})}function b(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},7528:(e,t,n)=>{n.d(t,{c:()=>c});var s=n(867),i=(n(1504),n(4971));const r={root:"root_Uwqo"};var o=n(7624);function c({title:e,description:t,link:n}){return(0,o.jsx)("div",{className:(0,i.c)("card-demo",r.root),children:(0,o.jsxs)("div",{className:"card",children:[(0,o.jsx)("div",{className:"card__header",children:(0,o.jsx)("h3",{children:e})}),(0,o.jsx)("div",{className:"card__body",children:(0,o.jsx)("p",{children:t})}),(0,o.jsx)("div",{className:"card__footer",children:(0,o.jsx)(s.c,{className:"button button--secondary button--block",to:n,children:"Get Started"})})]})})}},7160:(e,t,n)=>{n.d(t,{c:()=>r});n(1504);const s={root:"root_vxd5"};var i=n(7624);function r({children:e}){return(0,i.jsx)("div",{className:s.root,children:e})}},4971:(e,t,n)=>{function s(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=s(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}n.d(t,{c:()=>i});const i=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=s(e))&&(i&&(i+=" "),i+=t);return i}},2172:(e,t,n)=>{n.d(t,{I:()=>c,M:()=>o});var s=n(1504);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);