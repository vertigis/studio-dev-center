"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[1181],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),h=a,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||o;return n?i.createElement(u,r(r({ref:t},p),{},{components:n})):i.createElement(u,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6742:(e,t,n)=>{n.d(t,{Z:()=>d});var i=n(7294),a=n(3727),o=n(2263),r=n(3919),s=n(412);const l=(0,i.createContext)({collectLink:()=>{}});var c=n(4996),p=n(8780);const d=function({isNavLink:e,to:t,href:n,activeClassName:d,isActive:m,"data-noBrokenLinkCheck":h,autoAddBaseUrl:u=!0,...v}){var g;const{siteConfig:{trailingSlash:w}}=(0,o.Z)(),{withBaseUrl:k}=(0,c.C)(),f=(0,i.useContext)(l),x=t||n,b=(0,r.Z)(x),N=null==x?void 0:x.replace("pathname://","");let y=void 0!==N?(C=N,u&&(e=>e.startsWith("/"))(C)?k(C):C):void 0;var C;y&&b&&(y=(0,p.applyTrailingSlash)(y,w));const W=(0,i.useRef)(!1),M=e?a.OL:a.rU,O=s.Z.canUseIntersectionObserver;let j;(0,i.useEffect)((()=>(!O&&b&&null!=y&&window.docusaurus.prefetch(y),()=>{O&&j&&j.disconnect()})),[y,O,b]);const I=null!==(g=null==y?void 0:y.startsWith("#"))&&void 0!==g&&g,T=!y||!b||I;return y&&b&&!I&&!h&&f.collectLink(y),T?i.createElement("a",{href:y,...x&&!b&&{target:"_blank",rel:"noopener noreferrer"},...v}):i.createElement(M,{...v,onMouseEnter:()=>{W.current||null==y||(window.docusaurus.preload(y),W.current=!0)},innerRef:e=>{var t,n;O&&e&&b&&(t=e,n=()=>{null!=y&&window.docusaurus.prefetch(y)},j=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(j.unobserve(t),j.disconnect(),n())}))})),j.observe(t))},to:y||"",...e&&{isActive:m,activeClassName:d}})}},3919:(e,t,n)=>{function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}n.d(t,{Z:()=>a,b:()=>i})},4996:(e,t,n)=>{n.d(t,{C:()=>o,Z:()=>r});var i=n(2263),a=n(3919);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,i.Z)();return{withBaseUrl:(n,i)=>function(e,t,n,{forcePrependBaseUrl:i=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(i)return t+n;const r=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+r:r}(t,e,n,i)}}function r(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},8802:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),i="/"===n?"/":t?(a=n).endsWith("/")?a:`${a}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(n);var a;return e.replace(n,i)}},8780:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return i(a).default}});var o=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return i(o).default}})},9964:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},3339:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(7462),a=(n(7294),n(3905));n(6742);const o={title:"Mobile Generic Event Listener",author:"Kenneth Walker",authorTitle:"Software Developer",authorURL:"https://github.com/kewalker",authorImageURL:"https://github.com/kewalker.png",tags:["mobile","workflow"]},r=void 0,s={permalink:"/blog/2023/03/01/mobile-generic-event-listener",source:"@site/blog/2023-03-01-mobile-generic-event-listener.mdx",title:"Mobile Generic Event Listener",description:"VertiGIS Studio Mobile 5.22 includes an exciting new capability for working with commands, operations, and events. This capability allows app authors to execute custom, configured actions in response to events raised in Mobile. To opt in to this behavior, app authors register an event listener (subscriber) for any given Mobile event. When this event is raised in Mobile, the corresponding configured command or operation is invoked.",date:"2023-03-01T00:00:00.000Z",formattedDate:"March 1, 2023",tags:[{label:"mobile",permalink:"/blog/tags/mobile"},{label:"workflow",permalink:"/blog/tags/workflow"}],readingTime:7.055,truncated:!0,prevItem:{title:"Creating Custom Bands with the Inline SDK",permalink:"/blog/2023/06/20/inline-sdk"},nextItem:{title:"New Workflow Form Element API",permalink:"/blog/2021/03/22/new-workflow-element-api"}},l=[{value:"Register a Listener",id:"register-a-listener",children:[{value:"Wire up a new <code>Listener</code>",id:"wire-up-a-new-listener",children:[]}]},{value:"Command Chaining",id:"command-chaining",children:[]},{value:"Specify A Sender",id:"specify-a-sender",children:[]},{value:"Workflows and Context",id:"workflows-and-context",children:[{value:"A Workflow with Context",id:"a-workflow-with-context",children:[]}]},{value:"Raise Custom Events",id:"raise-custom-events",children:[{value:"Raise Event through Action",id:"raise-event-through-action",children:[]},{value:"Raise Event through Workflow",id:"raise-event-through-workflow",children:[]},{value:"Subscribe to Custom Event",id:"subscribe-to-custom-event",children:[]}]},{value:"In Closing",id:"in-closing",children:[]}],c={toc:l};function p({components:e,...t}){return(0,a.kt)("wrapper",(0,i.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"VertiGIS Studio Mobile ",(0,a.kt)("inlineCode",{parentName:"p"},"5.22")," includes an exciting new capability for working with commands, operations, and events. This capability allows app authors to execute custom, configured actions in response to events raised in Mobile. To opt in to this behavior, app authors register an event listener (subscriber) for any given Mobile event. When this event is raised in Mobile, the corresponding configured command or operation is invoked."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"To use these new features, you will need a ",(0,a.kt)("inlineCode",{parentName:"p"},"5.22+")," version of VertiGIS Studio Mobile."))),(0,a.kt)("p",null,"The new events capability can be exercised in a few ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#register-a-listener"},"Registering an event listener and action")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#command-chaining"},"Command chaining")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#specify-a-sender"},"Specifying a sender")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#workflows-and-context"},"Workflow and context")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#raise-custom-events"},"Raise custom event"))),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Want a complete list of events?")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Check out the ",(0,a.kt)("a",{parentName:"p",href:"https://developers.vertigisstudio.com/docs/mobile/api-commands-operations-events#events"},"Events")," for the complete list of eligible events that can be listened to."))),(0,a.kt)("h2",{id:"register-a-listener"},"Register a Listener"),(0,a.kt)("p",null,"To get started, you'll want to introduce a new item ",(0,a.kt)("inlineCode",{parentName:"p"},"$type")," into your ",(0,a.kt)("inlineCode",{parentName:"p"},"app.json")," configuration: the ",(0,a.kt)("inlineCode",{parentName:"p"},"event-listener"),". Today, you'll need to manually configure this app item and any respective listeners. Support for configuring listeners through Designer will be coming soon."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "$type": "event-listener",\n    "id": "custom-event-listener",\n    "listeners": [\n        // ... to be populated with listeners ...\n    ]\n}\n')),(0,a.kt)("h3",{id:"wire-up-a-new-listener"},"Wire up a new ",(0,a.kt)("inlineCode",{parentName:"h3"},"Listener")),(0,a.kt)("p",null,"With the new ",(0,a.kt)("inlineCode",{parentName:"p"},"event-listener")," app item, you register a listener to a given event and respond with a configured action. Below, we're taking advantage of the ",(0,a.kt)("a",{parentName:"p",href:"https://developers.vertigisstudio.com/docs/mobile/api-commands-operations-events/#event-map.viewpoint-changed"},"map.viewpoint-changed")," event. In particular, it's configured with the ",(0,a.kt)("a",{parentName:"p",href:"https://developers.vertigisstudio.com/docs/mobile/api-commands-operations-events#command-highlights.clear"},"highlights.clear")," command. When you pan the map, the ",(0,a.kt)("inlineCode",{parentName:"p"},"map.viewpoint-changed")," event is raised, and in turn, our ",(0,a.kt)("inlineCode",{parentName:"p"},"highlights.clear")," command is executed. No more highlights when we pan!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "$type": "event-listener",\n    "id": "custom-event-listener",\n    "listeners": [\n        {\n            "event": "map.viewpoint-changed",\n            "action": "highlights.clear"\n        }\n        // ... more listeners ...\n    ]\n}\n')),(0,a.kt)("p",null,"Of course, multiple listeners may be registered. They can listen to both distinct or duplicate events:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "$type": "event-listener",\n    "id": "custom-event-listener",\n    "listeners": [\n        {\n            "event": "map.viewpoint-changed",\n            "action": "highlights.clear"\n        },\n        {\n            "event": "map.viewpoint-changed",\n            "action": "highlights.clear-focus"\n        },\n        {\n            "event": "layers.visibility-changed",\n            "action": "log-viewer.display"\n        }\n        // ... more listeners ...\n    ]\n}\n')),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The event listener capability is only available after the map has begun initializing. Listeners for events that fire ",(0,a.kt)("em",{parentName:"p"},"before")," the ",(0,a.kt)("inlineCode",{parentName:"p"},"map.initializing")," event will not trigger any actions."))),(0,a.kt)("h2",{id:"command-chaining"},"Command Chaining"),(0,a.kt)("p",null,"We can pair event listening with ",(0,a.kt)("a",{parentName:"p",href:"https://developers.vertigisstudio.com/docs/mobile/configuration-commands-operations/#command-chains"},"Command Chains")," to react with multiple actions chained together. In the example below, we'll react to a map pan by both clearing highlights and closing the panel. Notice that we can mix the use of simple syntax with the dictionary syntax that can optionally provide arguments."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "$type": "event-listener",\n    "id": "custom-event-listener",\n    "listeners": [\n        {\n            "event": "map.viewpoint-changed",\n            "action": [\n                "highlights.clear",\n                {\n                    "name": "panel.close-host-panel",\n                    "arguments": {}\n                }\n            ]\n        }\n        // ... more listeners ...\n    ]\n}\n')),(0,a.kt)("h2",{id:"specify-a-sender"},"Specify A Sender"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"sender")," property to configure the listener such that it ",(0,a.kt)("strong",{parentName:"p"},"only")," reacts to those events that originate from the specified sender. A sender could correspond to a given component or service. Specifying the sender is optional."),(0,a.kt)("p",null,"Take the example below where two ",(0,a.kt)("inlineCode",{parentName:"p"},"map-extension"),"s are configured. Since ",(0,a.kt)("inlineCode",{parentName:"p"},"sender"),' is specified as "map-config-1", viewpoint changed events raised from this map will result in highlights being cleared. Viewpoint changed events raised from "map-config-2" are effectively ignored.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "$type": "map-extension",\n    "id": "map-config-1",\n    "webMap": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx1"\n    // ...\n},\n{\n    "$type": "map-extension",\n    "id": "map-config-2",\n    "webMap": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx2"\n    // ...\n},\n\n// ...\n\n{\n    "$type": "event-listener",\n    "id": "custom-event-listener",\n    "listeners": [\n        {\n            "event": "map.viewpoint-changed",\n            "sender": "item://map-extension/map-config-1",\n            "action": ["highlights.clear"]\n        },\n        // ... more listeners ...\n    ]\n}\n')),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"sender")," is omitted, any instance of the raised event will trigger the configured action."))),(0,a.kt)("h2",{id:"workflows-and-context"},"Workflows and Context"),(0,a.kt)("p",null,"Using this new capability, you can also configure a Studio Workflow as an action to invoke in response to an event being raised."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Want to learn more about Studio Workflow?")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Check out the overview to learn more about ",(0,a.kt)("a",{parentName:"p",href:"https://developers.vertigisstudio.com/docs/workflow/overview"},"Studio Workflow"),"."))),(0,a.kt)("p",null,"Below, we'll configure a ",(0,a.kt)("a",{parentName:"p",href:"https://developers.vertigisstudio.com/docs/mobile/api-commands-operations-events#command-workflow.run"},"workflow.run")," action and listen to a ",(0,a.kt)("a",{parentName:"p",href:"https://developers.vertigisstudio.com/docs/mobile/api-commands-operations-events#event-layers.visibility-changed"},"layers.visibility-changed")," event. Notice that we can specify arguments for our action, which in this case, will be the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," of a ",(0,a.kt)("inlineCode",{parentName:"p"},'$type: "workflow"')," item in ",(0,a.kt)("inlineCode",{parentName:"p"},"app.json")," configuration."),(0,a.kt)("p",null,"In this example, toggling an entry in the layer list will invoke the configured workflow."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "$type": "event-listener",\n    "id": "custom-event-listener",\n    "listeners": [\n        {\n            "event": "layers.visibility-changed",\n            "action": {\n                "name": "workflow.run",\n                "arguments": {\n                    "id": "visibility-workflow" // this id corresponds to the id of the workflow item that we want to invoke\n                }\n            }\n        },\n        // ... more listeners ...\n    ]\n},\n\n// ...\n\n{\n    // The corresponding Workflow that we want to invoke in response to an event.\n    "$type": "workflow",\n    "id": "visibility-workflow",\n    "title": "My Visibility Workflow",\n    "target": "auto",\n    "portalItem": "https://www.arcgis.com/sharing/rest/content/items/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",\n    "commandArgumentInput": "context"\n},\n')),(0,a.kt)("h3",{id:"a-workflow-with-context"},"A Workflow with Context"),(0,a.kt)("p",null,"Running a Workflow is a powerful way to react to events raised during an app session. Pairing a Workflow with the ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," capability gives us an opportunity to use an input from the event in the Workflow activity."),(0,a.kt)("p",null,"Notice below that the Workflow item specifies a ",(0,a.kt)("inlineCode",{parentName:"p"},"commandArgumentInput")," value of ",(0,a.kt)("inlineCode",{parentName:"p"},"context"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "$type": "workflow",\n    "commandArgumentInput": "context"\n    // ...\n},\n')),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"layers.visibility-changed")," event, we configure a Workflow as an action, being mindful of the ",(0,a.kt)("inlineCode",{parentName:"p"},"commandArgumentInput"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "$type": "event-listener",\n    "id": "custom-event-listener",\n    "listeners": [\n        {\n            "event": "layers.visibility-changed",\n            "action": {\n                "name": "workflow.run",\n                "arguments": {\n                    "id": "visibility-workflow" // this id corresponds to the id of the workflow item that we want to invoke\n                }\n            }\n        },\n        // ... more listeners ...\n    ]\n},\n\n// ...\n\n{\n    // The corresponding Workflow that we want to invoke in response to an event.\n    "$type": "workflow",\n    "id": "visibility-workflow",\n    "title": "My Visibility Workflow",\n    "target": "auto",\n    "portalItem": "https://www.arcgis.com/sharing/rest/content/items/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",\n    "commandArgumentInput": "context"\n},\n')),(0,a.kt)("p",null,"By specifying the ",(0,a.kt)("inlineCode",{parentName:"p"},"context"),", we're able to retrieve an input value within a Workflow using the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.vertigisstudio.com/workflow/latest/help/Default.htm#wf5/help/activities/get-workflow-inputs.htm#Get_Workflow_Inputs_Activity"},"Get Workflow Inputs")," activity."),(0,a.kt)("p",null,"In our Workflow, we would want to run ",(0,a.kt)("inlineCode",{parentName:"p"},"Get Workflow Inputs")," as our first activity to retrieve the input. Once we have the input as an object in our Workflow, we can access the ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," to start working with the input."),(0,a.kt)("p",null,"In the case of the ",(0,a.kt)("inlineCode",{parentName:"p"},"layers.visibility-changed")," event, we're able to retrieve and work with the ",(0,a.kt)("inlineCode",{parentName:"p"},"LayerContent")," as an input to our Workflow. Below is an example of how to access the ",(0,a.kt)("inlineCode",{parentName:"p"},"LayerContent")," from the ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," and get at the ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),", which could then be used in any subsequent activity, for example an alert or a query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"=$getWorkflowInputs1.inputs.context.LayerContent.id.toString()\n")),(0,a.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The value provided to ",(0,a.kt)("inlineCode",{parentName:"p"},"commandArgumentInput")," and the accessor used within the ",(0,a.kt)("inlineCode",{parentName:"p"},"Get Workflow Inputs")," activity object ",(0,a.kt)("strong",{parentName:"p"},"must")," match to correctly access an input (i.e. both ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," in this example)."))),(0,a.kt)("h2",{id:"raise-custom-events"},"Raise Custom Events"),(0,a.kt)("p",null,"While Mobile exposes a number of events that may be listened to, there are times where it would be beneficial to respond to events that ",(0,a.kt)("em",{parentName:"p"},"aren't")," raised out of the box. Fortunately, there are also capabilities that allow app authors to raise custom events."),(0,a.kt)("h3",{id:"raise-event-through-action"},"Raise Event through Action"),(0,a.kt)("p",null,"Using the new ",(0,a.kt)("a",{parentName:"p",href:"https://developers.vertigisstudio.com/docs/mobile/api-commands-operations-events#command-viewer.publish-event"},"viewer.publish-event")," command, a custom event can be raised. This action can be configured anywhere in the app that supports actions, like buttons, hooks, command chains, etc. Below is an example of a configured button action:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"action": {\n    "name": "viewer.publish-event",\n    "arguments": {\n        "name": "custom.raised-event",\n        "arguments": {}\n    }\n}\n')),(0,a.kt)("h3",{id:"raise-event-through-workflow"},"Raise Event through Workflow"),(0,a.kt)("p",null,"But what if we want to raise a custom event during execution of a Workflow? Using the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.vertigisstudio.com/workflow/latest/help/Default.htm#wf5/help/activities/publish-event.htm"},"Publish Event")," activity, it's possible to raise a custom event from anywhere in your Workflow logic. Simply provide the same custom event name to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Event Name")," input in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Publish Event")," activity. Arguments may also be provided. For the above example, that would be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"custom.raised-event\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Although not recommended, it's also possible to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"viewer.publish-event")," command and the ",(0,a.kt)("inlineCode",{parentName:"p"},"Publish Event")," activity to manually publish well-known Mobile events, i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"map.viewpoint-changed"),"."))),(0,a.kt)("h3",{id:"subscribe-to-custom-event"},"Subscribe to Custom Event"),(0,a.kt)("p",null,"Of course, publishing these events is only one side of the capabilities. Using the same mechanism introduced above, these custom raised events can be listened to, and configured with an action to invoke."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "$type": "event-listener",\n    "id": "custom-event-listener",\n    "listeners": [\n        {\n            "event": "custom.raised-event",\n            "action": "..."\n        }\n    ]\n}\n')),(0,a.kt)("p",null,"Custom events could in turn raise more events with the ",(0,a.kt)("inlineCode",{parentName:"p"},"viewer.publish-event"),", which could in turn be listened to. Together, the publishing and listening capabilities offer flexibility to respond to custom events with configured actions."),(0,a.kt)("h2",{id:"in-closing"},"In Closing"),(0,a.kt)("p",null,"We're excited to showcase these new capabilities for commands, operations, and events. We hope app authors can take advantage of them to create more responsive and exciting applications. Happy building!"))}p.isMDXComponent=!0}}]);