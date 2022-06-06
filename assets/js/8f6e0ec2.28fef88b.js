(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[8349],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>m,kt:()=>p});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=l(n),p=i,f=u["".concat(s,".").concat(p)]||u[p]||d[p]||o;return n?r.createElement(f,a(a({ref:t},m),{},{components:n})):r.createElement(f,a({ref:t},m))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6159:(e,t,n)=>{"use strict";n.d(t,{N:()=>m,Z:()=>d});var r=n(2122),i=n(7294),o=n(6010),a=n(4973),c=n(9732);const s="enhancedAnchor_2LWZ",l="h1Heading_27L5",m=function({...e}){return i.createElement("header",null,i.createElement("h1",(0,r.Z)({},e,{id:void 0,className:l}),e.children))},d=e=>{return"h1"===e?m:(t=e,function({id:e,...n}){const{navbar:{hideOnScroll:r}}=(0,c.LU)();return e?i.createElement(t,n,i.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,o.Z)("anchor",{[s]:!r}),id:e}),n.children,i.createElement("a",{className:"hash-link",href:`#${e}`,title:(0,a.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):i.createElement(t,n)});var t}},1383:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var r=n(7294),i=n(2263);const o=function({children:e,fallback:t}){const{isClient:n}=(0,i.Z)();return n&&null!=e?r.createElement(r.Fragment,null,e()):t||null};var a=n(6159);function c(e){return e.replace("#/definitions/","")}function s(e){return`definition-${c(e)}`}function l(e,t){const n=c(e);if(!(n.startsWith("esri.rest-api")||n.startsWith("viewer-spec.SingleCommand")||n.startsWith("viewer-spec.SingleOperation")))return t.definitions[n]}function m(e){const{isArray:t,name:n,schema:i}=e,o=c(n),a=l(n,i);return a&&"object"===a.type?r.createElement("code",null,r.createElement("a",{href:`#${s(n)}`},o,t&&"[]")):r.createElement("code",null,o,t&&"[]")}function d(e,t,n){let i=e;if(!i.description)return null;if(i.description.toLocaleLowerCase().startsWith("see {@link")){var o,a;let e;if(i.$ref)e=l(i.$ref,t);else{const n=i.description.toLocaleLowerCase().match(/(see {@link )([a-zA-Z\.]*)/),r=null==n?void 0:n[2].split(".")[0],o=null==n?void 0:n[2].split(".")[1];var c,s;if(r&&o)e=null==(c=t.definitions[r])||null==(s=c.properties)?void 0:s[o]}e&&(i=e);const n=null==(o=i.description)||null==(a=o.toLocaleLowerCase().match(/see \{\@link [a-zA-Z\.}.]*/))?void 0:a[0];n&&(i.description=i.description.replace(n,""))}return i.description&&r.createElement("div",{className:n},i.description)}function u(e,t){return e.properties?r.createElement("div",{className:"margin-left--sm"},Object.entries(e.properties).map((([n,i])=>{var o;return r.createElement("div",{key:n,className:"margin-bottom--md"},r.createElement("div",{className:"margin-bottom--sm"},r.createElement("code",null,n),(null==(o=e.required)?void 0:o.includes(n))&&r.createElement("span",{className:"badge badge--secondary"},"Required")),r.createElement("div",{className:"margin-left--sm"},r.createElement(p,{definition:i,schema:t}),d(i,t,"margin-top--sm")))}))):null}function p(e){const{schema:t}=e;let n=e.definition;if("string"==typeof n){const e=l(n,t);console.warn("Couldn't find definition:",n),n=e}if(!n)return r.createElement("div",{style:{fontStyle:"italic"}},"There are no arguments");if(n.$ref){const e=l(n.$ref,t);return e&&"object"!==e.type?r.createElement(p,{definition:e,schema:t}):r.createElement(m,{name:n.$ref,schema:t})}if(n.type){if("string"===n.type&&n.enum){const e=n.enum.map((e=>`"${e}"`)).join(" | ");return r.createElement("code",null,e)}if("array"===n.type&&n.items){const e=e=>r.createElement(r.Fragment,null,e.map(((e,n)=>r.createElement("div",{key:`${e.$ref}-${n}`||n},r.createElement(p,{definition:e,schema:t}),"[]"))));if(Array.isArray(n.items))return e(n.items);if(Array.isArray(n.items.anyOf))return e(n.items.anyOf);if(n.items.$ref){const e=n.items.$ref;return r.createElement(m,{isArray:!0,name:e,schema:t})}return r.createElement("code",null,n.items.type,"[]")}if("object"===n.type){if((e=>{var t;return e.properties&&2===Object.keys(e.properties).length&&2===(null==(t=e.required)?void 0:t.length)&&"name"===e.required[0]&&"arguments"===e.required[1]})(n))return null;if(n.properties)return r.createElement(r.Fragment,null,r.createElement("code",null,"object"),u(n,t));var i;if(n.additionalProperties&&!0!==n.additionalProperties)if("string"===n.additionalProperties.type)return r.createElement("code",null,null==(i=n.additionalProperties.enum)?void 0:i.map((e=>`"${e}"`)).join(" | "));return r.createElement("code",null,"object")}if(Array.isArray(n.type)){const e=n.type.filter((e=>"null"!==e));return 0===e.length?null:1===e.length?r.createElement("code",null,e[0]):r.createElement(r.Fragment,null,e.map((e=>r.createElement("div",{key:e},r.createElement("code",null,e)))))}return r.createElement("code",null,n.type)}if(n.anyOf){const e=n.anyOf.filter((e=>!("null"===e.type)));return r.createElement(r.Fragment,null,e.length>1&&r.createElement("div",null,"Any of:"),e.map(((e,n)=>r.createElement("div",{key:`${e.$ref}-${n}`||n},r.createElement(p,{definition:e,schema:t})))))}return r.createElement("code",null,"unknown")}const f=(0,a.Z)("h3");function v(e){return!!e.$ref}function h(e){var t,n;return(null==e||null==(t=e.type)?void 0:t.includes("null"))||(null==e||null==(n=e.anyOf)?void 0:n.some(h))}function g(e){var t,n;const{schema:i,type:o}=e,a=i.definitions;let s;s="command"===o?"viewer-spec.SingleCommand":"operation"===o?"viewer-spec.SingleOperation":"viewer-spec.Event";const l=null==(t=a[s])||null==(n=t.anyOf)?void 0:n.filter(v).map((e=>c(e.$ref)));return l?r.createElement(r.Fragment,null,l.map((e=>{const t=a[e],n=function(e,t){return`${t}-${e}`}(e,o),c=a[`${e}:input`],s=a[`${e}:output`];return t?r.createElement("div",{key:e,className:"margin-bottom--lg"},r.createElement(f,{id:n},e),d(t,i,"margin-bottom--md"),r.createElement("div",{className:"margin-bottom--md"},r.createElement("div",null,"Argument "+(!0===h(c)?"(optional)":"")),r.createElement("div",{className:"margin-left--sm"},r.createElement(p,{definition:c,schema:i}))),"operation"===o&&s&&r.createElement(r.Fragment,null,r.createElement("div",null,"Result"),r.createElement("div",{className:"margin-left--sm"},r.createElement(p,{definition:s,schema:i})))):null}))):null}const y=(0,a.Z)("h3");function b(e){const{definitionName:t,schema:n}=e,i=c(t),o=l(t,n);if(!o)return null;if("object"!==o.type)return console.warn("Tried to render definition for non-object type",i),null;const a=s(i);return r.createElement("div",{className:"margin-bottom--lg"},r.createElement(y,{id:a},i),d(o,n,"margin-bottom--md"),r.createElement("div",null,"Properties"),(!o.properties||0===Object.keys(o.properties).length)&&r.createElement("em",null,"This object doesn't currently contain any properties."),o.properties&&u(o,n))}function E(e){const{schema:t}=e,n=Object.entries(t.definitions).reduce(((e,[t,n])=>"object"===n.type?{...e,[t]:n}:e),{});return r.createElement("div",null,Object.keys(n).sort(((e,t)=>{const n=e.toLocaleLowerCase().includes("modelproperties"),r=t.toLocaleLowerCase().includes("modelproperties");return n&&r?e.localeCompare(t):n?-1:r?1:e.localeCompare(t)})).map((e=>r.createElement(b,{key:e,definitionName:e,schema:t}))))}function w(e){const{schema:t,type:n}=e;return r.createElement(r.Fragment,null,("argument"===n||"config"===n)&&r.createElement(E,{schema:t}),"command"===n&&r.createElement(g,{schema:t,type:"command"}),"event"===n&&r.createElement(g,{schema:t,type:"event"}),"operation"===n&&r.createElement(g,{schema:t,type:"operation"}))}function O(e){return o({children:()=>r.createElement(j,e)})}const k={web:{action:void 0,event:void 0,config:void 0},mobile:{action:void 0,event:void 0,config:void 0},common:{action:void 0,event:void 0,config:void 0}};function j(e){const{product:t,type:n}=e,[i,o]=(0,r.useState)();return(0,r.useEffect)((()=>{let e,r=!1;switch(n){case"command":case"operation":e="action";break;case"event":e="event";break;case"config":e="config"}return(async()=>{e&&!k[t][e]&&("config"===n?(k.common[e]=fetch("https://apps.geocortex.com/webviewer/common-app-config.schema.json"),k[t][e]=fetch(`https://apps.geocortex.com/webviewer/${t}-app-config.schema.json`)):k[t][e]=fetch(`https://apps.geocortex.com/webviewer/${t}-${e}.schema.json`));const i=[];if("config"===e){const e=await k.common.config,n=await k[t].config,r=await e.clone().json(),o=await n.clone().json();i.push(r),i.push(o)}else{const e=await k[t].action,n=await k[t].event,r=await e.clone().json(),o=await n.clone().json();i.push(r),i.push(o)}if(r)return;const a={$ref:"#/definitions/viewer-spec.ActionObject"},c={type:"string"},s={definitions:"config"!==n?{"viewer-spec.ActionObject":{properties:{name:{description:"The name of a command or operation.",type:"string"},arguments:{description:"The arguments for the command or operation.",type:"object"}},required:["name","arguments"],type:"object"},"viewer-spec.Action":{description:`An action to execute in the viewer; can be an action name, an action object, or a command chain (https://developers.geocortex.com/docs/${t}/configuration-commands-operations/#command-chains). The list of valid action names are the names of the commands and operations listed in this document`,anyOf:[c,a,{items:{anyOf:[c,a]},type:"array"}]}}:{}};i.forEach((e=>{Object.keys(e.definitions).forEach((t=>{s.definitions[t]=e.definitions[t]}))})),o(s)})(),()=>{r=!0}}),[t]),(0,r.useEffect)((()=>{if(!i)return;const e=window.decodeURIComponent(window.location.hash);var t;e&&(null==(t=document.getElementById(e.substring(1)))||t.scrollIntoView())}),[i]),i?r.createElement(w,{schema:i,type:n}):r.createElement("div",null,"Loading...")}},1718:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>c,metadata:()=>s,toc:()=>l,default:()=>d});var r=n(2122),i=(n(7294),n(3905)),o=n(1383);const a={title:"Commands, Operations and Events Reference",description:"VertiGIS Studio Mobile - Commands, Operations and Events API Reference"},c=void 0,s={unversionedId:"mobile/api-commands-operations-events",id:"mobile/api-commands-operations-events",isDocsHomePage:!1,title:"Commands, Operations and Events Reference",description:"VertiGIS Studio Mobile - Commands, Operations and Events API Reference",source:"@site/docs/mobile/api-commands-operations-events.mdx",sourceDirName:"mobile",slug:"/mobile/api-commands-operations-events",permalink:"/docs/mobile/api-commands-operations-events",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/api-commands-operations-events.mdx",version:"current",frontMatter:{title:"Commands, Operations and Events Reference",description:"VertiGIS Studio Mobile - Commands, Operations and Events API Reference"},sidebar:"mobile",previous:{title:"Build a Service that Fetches Dynamic Data",permalink:"/docs/mobile/tutorial-implement-service-fetch-dynamic-data"},next:{title:"Components and Services",permalink:"/docs/mobile/api-components"}},l=[{value:"Commands",id:"commands",children:[]},{value:"Operations",id:"operations",children:[]},{value:"Events",id:"events",children:[]},{value:"Argument Definitions",id:"argument-definitions",children:[]}],m={toc:l};function d({components:e,...t}){return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Commands and operations are runnable, independent units of work within VertiGIS Studio Mobile. ",(0,i.kt)("a",{parentName:"p",href:"#commands"},"Commands")," are units of work which may take an input but do not produce an output, while ",(0,i.kt)("a",{parentName:"p",href:"#operations"},"operations")," differ because they produce output. You can learn more about commands and operations in our ",(0,i.kt)("a",{parentName:"p",href:"/docs/mobile/configuration-commands-operations"},"conceptual documentation")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#events"},"Events")," are distinct, discrete messaging about a change or update that occurs in the viewer. They can be used to initiate behaviors, communicate data changes, and more. Events themselves do not execute behavior, but merely provide messaging so subscribers can act on changes. You can learn more about events in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-events-reference"},"event reference")),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)(o.Z,{product:"mobile",type:"command",mdxType:"ViewerMessaging"}),(0,i.kt)("h2",{id:"operations"},"Operations"),(0,i.kt)(o.Z,{product:"mobile",type:"operation",mdxType:"ViewerMessaging"}),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)(o.Z,{product:"mobile",type:"event",mdxType:"ViewerMessaging"}),(0,i.kt)("h2",{id:"argument-definitions"},"Argument Definitions"),(0,i.kt)(o.Z,{product:"mobile",type:"argument",mdxType:"ViewerMessaging"}))}d.isMDXComponent=!0}}]);