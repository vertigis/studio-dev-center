"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[8349],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=m(n),u=i,f=d["".concat(s,".").concat(u)]||d[u]||p[u]||o;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:i,a[1]=c;for(var m=2;m<o;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4725:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(7294),i=n(2389);function o(e){return e.replace("#/definitions/","")}function a(e){return`definition-${o(e)}`}function c(e,t){const n=o(e);if(!(n.startsWith("esri.rest-api")||n.startsWith("viewer-spec.SingleCommand")||n.startsWith("viewer-spec.SingleOperation")))return t.definitions[n]}function s(e){const{isArray:t,name:n,schema:i}=e,s=o(n),m=c(n,i);return m&&"object"===m.type?r.createElement("code",null,r.createElement("a",{href:`#${a(n)}`},s,t&&"[]")):r.createElement("code",null,s,t&&"[]")}function m(e,t,n){let i=e;if(!i.description)return null;if(i.description.toLocaleLowerCase().startsWith("see {@link")){let e;if(i.$ref)e=c(i.$ref,t);else{const n=i.description.toLocaleLowerCase().match(/(see {@link )([a-zA-Z\.]*)/),r=n?.[2].split(".")[0],o=n?.[2].split(".")[1];r&&o&&(e=t.definitions[r]?.properties?.[o])}e&&(i=e);const n=i.description?.toLocaleLowerCase().match(/see \{\@link [a-zA-Z\.}.]*/)?.[0];n&&(i.description=i.description.replace(n,""))}return i.description&&r.createElement("div",{className:n},i.description)}function l(e,t){return e.properties?r.createElement("div",{className:"margin-left--sm"},Object.entries(e.properties).map((n=>{let[i,o]=n;return r.createElement("div",{key:i,className:"margin-bottom--md"},r.createElement("div",{className:"margin-bottom--sm"},r.createElement("code",null,i),e.required?.includes(i)&&r.createElement("span",{className:"badge badge--secondary"},"Required")),r.createElement("div",{className:"margin-left--sm"},r.createElement(d,{definition:o,schema:t}),m(o,t,"margin-top--sm")))}))):null}function d(e){const{schema:t}=e;let n=e.definition;if("string"==typeof n){const e=c(n,t);console.warn("Couldn't find definition:",n),n=e}if(!n)return r.createElement("div",{style:{fontStyle:"italic"}},"There are no arguments");if(n.$ref){const e=c(n.$ref,t);return e&&"object"!==e.type?r.createElement(d,{definition:e,schema:t}):r.createElement(s,{name:n.$ref,schema:t})}if(n.type){if("string"===n.type&&n.enum){const e=n.enum.map((e=>`"${e}"`)).join(" | ");return r.createElement("code",null,e)}if("array"===n.type&&n.items){const e=e=>r.createElement(r.Fragment,null,e.map(((e,n)=>r.createElement("div",{key:`${e.$ref}-${n}`||n},r.createElement(d,{definition:e,schema:t}),"[]"))));if(Array.isArray(n.items))return e(n.items);if(Array.isArray(n.items.anyOf))return e(n.items.anyOf);if(n.items.$ref){const e=n.items.$ref;return r.createElement(s,{isArray:!0,name:e,schema:t})}return r.createElement("code",null,n.items.type,"[]")}if("object"===n.type)return(e=>e.properties&&2===Object.keys(e.properties).length&&2===e.required?.length&&"name"===e.required[0]&&"arguments"===e.required[1])(n)?null:n.properties?r.createElement(r.Fragment,null,r.createElement("code",null,"object"),l(n,t)):n.additionalProperties&&!0!==n.additionalProperties&&"string"===n.additionalProperties.type?r.createElement("code",null,n.additionalProperties.enum?.map((e=>`"${e}"`)).join(" | ")):r.createElement("code",null,"object");if(Array.isArray(n.type)){const e=n.type.filter((e=>"null"!==e));return 0===e.length?null:1===e.length?r.createElement("code",null,e[0]):r.createElement(r.Fragment,null,e.map((e=>r.createElement("div",{key:e},r.createElement("code",null,e)))))}return r.createElement("code",null,n.type)}if(n.anyOf){const e=n.anyOf.filter((e=>!("null"===e.type)));return r.createElement(r.Fragment,null,e.length>1&&r.createElement("div",null,"Any of:"),e.map(((e,n)=>r.createElement("div",{key:`${e.$ref}-${n}`||n},r.createElement(d,{definition:e,schema:t})))))}return r.createElement("code",null,"unknown")}function p(e){return!!e.$ref}function u(e){return e?.type?.includes("null")||e?.anyOf?.some(u)}function f(e){const{schema:t,type:n}=e,i=t.definitions;let a;a="command"===n?"viewer-spec.SingleCommand":"operation"===n?"viewer-spec.SingleOperation":"viewer-spec.Event";const c=i[a]?.anyOf?.filter(p).map((e=>o(e.$ref)));return c?r.createElement(r.Fragment,null,c.map((e=>{const o=i[e],a=function(e,t){return`${t}-${e}`}(e,n),c=i[`${e}:input`],s=i[`${e}:output`];return o?r.createElement("div",{key:e,className:"margin-bottom--lg"},r.createElement("h3",{id:a},e),m(o,t,"margin-bottom--md"),r.createElement("div",{className:"margin-bottom--md"},r.createElement("div",null,"Argument "+(!0===u(c)?"(optional)":"")),r.createElement("div",{className:"margin-left--sm"},r.createElement(d,{definition:c,schema:t}))),"operation"===n&&s&&r.createElement(r.Fragment,null,r.createElement("div",null,"Result"),r.createElement("div",{className:"margin-left--sm"},r.createElement(d,{definition:s,schema:t})))):null}))):null}function v(e){const{definitionName:t,schema:n}=e,i=o(t),s=c(t,n);if(!s)return null;if("object"!==s.type)return console.warn("Tried to render definition for non-object type",i),null;const d=a(i);return r.createElement("div",{className:"margin-bottom--lg"},r.createElement("h3",{id:d},i),m(s,n,"margin-bottom--md"),r.createElement("div",null,"Properties"),(!s.properties||0===Object.keys(s.properties).length)&&r.createElement("em",null,"This object doesn't currently contain any properties."),s.properties&&l(s,n))}function g(e){const{schema:t}=e,n=Object.entries(t.definitions).reduce(((e,t)=>{let[n,r]=t;return"object"===r.type?{...e,[n]:r}:e}),{});return r.createElement("div",null,Object.keys(n).sort(((e,t)=>{const n=e.toLocaleLowerCase().includes("modelproperties"),r=t.toLocaleLowerCase().includes("modelproperties");return n&&r?e.localeCompare(t):n?-1:r?1:e.localeCompare(t)})).map((e=>r.createElement(v,{key:e,definitionName:e,schema:t}))))}function y(e){const{schema:t,type:n}=e;return r.createElement(r.Fragment,null,("argument"===n||"config"===n)&&r.createElement(g,{schema:t}),"command"===n&&r.createElement(f,{schema:t,type:"command"}),"event"===n&&r.createElement(f,{schema:t,type:"event"}),"operation"===n&&r.createElement(f,{schema:t,type:"operation"}))}function h(e){return function(e){let{children:t,fallback:n}=e;return(0,i.Z)()?r.createElement(r.Fragment,null,t?.()):n??null}({children:()=>r.createElement(E,e)})}const b={web:{action:void 0,event:void 0,config:void 0},mobile:{action:void 0,event:void 0,config:void 0},common:{action:void 0,event:void 0,config:void 0}};function E(e){const{product:t,type:n}=e,[i,o]=(0,r.useState)();return(0,r.useEffect)((()=>{let e,r=!1;switch(n){case"command":case"operation":e="action";break;case"event":e="event";break;case"config":e="config"}return(async()=>{e&&!b[t][e]&&("config"===n?(b.common[e]=fetch("https://apps.vertigisstudio.com/web/common-app-config.schema.json"),b[t][e]=fetch(`https://apps.vertigisstudio.com/web/${t}-app-config.schema.json`)):b[t][e]=fetch(`https://apps.vertigisstudio.com/web/${t}-${e}.schema.json`));const i=[];if("config"===e){const e=await b.common.config,n=await b[t].config,r=await e.clone().json(),o=await n.clone().json();i.push(r),i.push(o)}else{const e=await b[t].action,n=await b[t].event,r=await e.clone().json(),o=await n.clone().json();i.push(r),i.push(o)}if(r)return;const a={$ref:"#/definitions/viewer-spec.ActionObject"},c={type:"string"},s={definitions:"config"!==n?{"viewer-spec.ActionObject":{properties:{name:{description:"The name of a command or operation.",type:"string"},arguments:{description:"The arguments for the command or operation.",type:"object"}},required:["name","arguments"],type:"object"},"viewer-spec.Action":{description:`An action to execute in the viewer; can be an action name, an action object, or a command chain (https://developers.vertigisstudio.com/docs/${t}/configuration-commands-operations/#command-chains). The list of valid action names are the names of the commands and operations listed in this document`,anyOf:[c,a,{items:{anyOf:[c,a]},type:"array"}]}}:{}};i.forEach((e=>{Object.keys(e.definitions).forEach((t=>{s.definitions[t]=e.definitions[t]}))})),o(s)})(),()=>{r=!0}}),[t]),(0,r.useEffect)((()=>{if(!i)return;const e=window.decodeURIComponent(window.location.hash);e&&document.getElementById(e.substring(1))?.scrollIntoView()}),[i]),i?r.createElement(y,{schema:i,type:n}):r.createElement("div",null,"Loading...")}},8955:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905)),o=n(4725);const a={title:"Commands, Operations and Events Reference",description:"VertiGIS Studio Mobile - Commands, Operations and Events API Reference"},c=void 0,s={unversionedId:"mobile/api-commands-operations-events",id:"mobile/api-commands-operations-events",title:"Commands, Operations and Events Reference",description:"VertiGIS Studio Mobile - Commands, Operations and Events API Reference",source:"@site/docs/mobile/api-commands-operations-events.mdx",sourceDirName:"mobile",slug:"/mobile/api-commands-operations-events",permalink:"/docs/mobile/api-commands-operations-events",draft:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/api-commands-operations-events.mdx",tags:[],version:"current",frontMatter:{title:"Commands, Operations and Events Reference",description:"VertiGIS Studio Mobile - Commands, Operations and Events API Reference"},sidebar:"mobile",previous:{title:"Build a Service that Fetches Dynamic Data",permalink:"/docs/mobile/tutorial-implement-service-fetch-dynamic-data"},next:{title:"Components and Services",permalink:"/docs/mobile/api-components"}},m={},l=[{value:"Commands",id:"commands",level:2},{value:"Operations",id:"operations",level:2},{value:"Events",id:"events",level:2},{value:"Argument Definitions",id:"argument-definitions",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Commands and operations are runnable, independent units of work within VertiGIS Studio Mobile. ",(0,i.kt)("a",{parentName:"p",href:"#commands"},"Commands")," are units of work which may take an input but do not produce an output, while ",(0,i.kt)("a",{parentName:"p",href:"#operations"},"operations")," differ because they produce output. You can learn more about commands and operations in our ",(0,i.kt)("a",{parentName:"p",href:"/docs/mobile/configuration-commands-operations"},"conceptual documentation")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#events"},"Events")," are distinct, discrete messaging about a change or update that occurs in the viewer. They can be used to initiate behaviors, communicate data changes, and more. Events themselves do not execute behavior, but merely provide messaging so subscribers can act on changes. You can learn more about events in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-events-reference"},"event reference")),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)(o.Z,{product:"mobile",type:"command",mdxType:"ViewerMessaging"}),(0,i.kt)("h2",{id:"operations"},"Operations"),(0,i.kt)(o.Z,{product:"mobile",type:"operation",mdxType:"ViewerMessaging"}),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)(o.Z,{product:"mobile",type:"event",mdxType:"ViewerMessaging"}),(0,i.kt)("h2",{id:"argument-definitions"},"Argument Definitions"),(0,i.kt)(o.Z,{product:"mobile",type:"argument",mdxType:"ViewerMessaging"}))}u.isMDXComponent=!0}}]);