"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[6309],{1116:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var i=n(7624),s=n(2172),r=n(9532);const c={title:"Events Reference",description:"VertiGIS Studio Web - Events API Reference"},a=void 0,o={id:"web/api-events",title:"Events Reference",description:"VertiGIS Studio Web - Events API Reference",source:"@site/docs/web/api-events.mdx",sourceDirName:"web",slug:"/web/api-events",permalink:"/docs/web/api-events",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/api-events.mdx",tags:[],version:"current",frontMatter:{title:"Events Reference",description:"VertiGIS Studio Web - Events API Reference"},sidebar:"web",previous:{title:"Commands and Operations Reference",permalink:"/docs/web/api-commands-operations"},next:{title:"Argument Definition Reference",permalink:"/docs/web/api-argument-definitions"}},d={},l=[{value:"Events",id:"events",level:2}];function u(e){const t={a:"a",h2:"h2",p:"p",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"#events",children:"Events"})," are distinct, discrete messaging about a change or update that occurs in the viewer. They can be used to initiate behaviors, communicate data changes, and more. Events themselves do not execute behavior, but merely provide messaging so subscribers can act on changes. You can learn more about events in our ",(0,i.jsx)(t.a,{href:"/docs/web/sdk-events-overview",children:"conceptual documentation"})]}),"\n",(0,i.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,i.jsx)(r.c,{product:"web",type:"event"})]})}function p(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},9532:(e,t,n)=>{n.d(t,{c:()=>W});var i=n(656),s=n(1632),r=n.n(s),c=n(1504),a=n(6448),o=n(8104),d=n(1224),l=n(4784),u=n(4124);function p(e){return e.replace("#/definitions/","")}function m(e,t="web"){if(!e||""===e)return;const n=p(e);return"Features"===n||"Feature"===n?"docs/web/api-objects#features":"FeatureSource"===n?"docs/web/api-objects#featuresource":n.endsWith("Extension")?"docs/web/api-objects#extensions":window?.location.href.includes("api-argument-definitions")?`#definition-${n}`:`docs/${t}/api-argument-definitions#definition-${n}`}function h(e){return m(e)?.split("#")[1]}function f(e,t){const n=p(e);if(!n.startsWith("viewer-spec.SingleCommand")&&!n.startsWith("viewer-spec.SingleOperation"))return t.definitions[n]}function g(e){const t=e.slice(),n=[],i=t.findIndex((e=>"@vertigis.arcgis-extensions.data.Feature.Feature"===e.$ref));i>=0&&(t.splice(i,1),n.push("Feature"));const s=t.findIndex((e=>"@vertigis.arcgis-extensions.data.FeatureSet.FeatureSet"===e.$ref));s>=0&&(t.splice(s,1),n.push("FeatureSet"));const r=t.findIndex((e=>"@vertigis.arcgis-extensions.data.FeatureList.FeatureList"===e.$ref));r>=0&&(t.splice(r,1),n.push("FeatureList"));const c=t.findIndex((e=>"@vertigis.arcgis-extensions.data.FeatureStream.FeatureStream"===e.$ref));c>=0&&(t.splice(c,1),n.push("FeatureStream"));return t.filter((e=>"array"===e.type)).forEach((e=>{const t=e?.items?.anyOf?.slice();if(t){const i=t.findIndex((e=>"@vertigis.arcgis-extensions.data.Feature.Feature"===e.$ref));i>=0&&(t?.splice(i,1),n.push("Feature[]")),e.items.anyOf=t}})),t.splice(i>=0?i:0,0,{$ref:`@vertigis.api-docs.Features ${n.join(", ")}`}),t}var j=n(964),v=n(7624);const x=(e,t,n,i)=>(0,v.jsxs)("span",{children:[(0,v.jsx)("code",{children:t?(0,v.jsx)("a",{href:t,target:t.startsWith("http")?"_blank":"_self",onClick:()=>window.location.hash=i,children:e}):e}),n&&(0,v.jsx)("span",{className:"messaging-ref-type-name",children:n})]});function y(e){const{isArray:t,name:n,schema:i,linkId:s,product:r}=e,c=p(n),a=c.includes(" ")?c.split(/\s(.*)/)[1]:c,o=c.split(" ")[0].replace("/",".").split("."),d=o[o.length-1],l=f(n,i);if(l&&"object"===l.type)return x(t?`${d}[]`:d,(0,j.c)(m(n,r)),d!==a?a:void 0,s);if("Features"===d||"Feature"===d||"FeatureSource"===d||d.endsWith("Extension"))return x(t?`${d}[]`:d,(0,j.c)(m(d,r)),d!==a?a:void 0,s);if(a.startsWith("esri")&&!a.includes("rest-api")){const e=a.replace(".","/").split("/");return x(t?`${e[e.length-1]}[]`:e[e.length-1],`https://developers.arcgis.com/javascript/latest/api-reference/${e.join("-")}.html`,`@arcgis.core.${e.splice(1).join(".")}`,s)}return x(t?`${d}[]`:d,void 0,d!==a?a:void 0,s)}o.c.registerLanguage("javascript",d.c);const b=/{@link ?([\S\s]*?)}/,w=new RegExp(b,"g"),$=/([S|s]ee ?{@link ?)([\S\s]*?)}/,F=new l.qs((0,u.K)({highlight:e=>o.c.highlight(e,{language:"javascript"}).value})),k=e=>(0,v.jsx)("span",{dangerouslySetInnerHTML:{__html:e.includes("|\n|")||e.includes("```")?F.parse(e,{async:!1,breaks:!0}):F.parseInline(e,{async:!1,breaks:!0})}});function S(e,t,n,i){let{description:s}=e;if(!s)return;const r=s.match(w);if(!r)return(0,v.jsx)("div",{className:n,children:k(s)});if(1===r.length&&s.toLocaleLowerCase().match($)){const r=s.toLocaleLowerCase().match($)?.[2],c=e.$ref?f(e.$ref,t):(e=>{if(e?.includes(".")){const n=e?.split(".")[0],i=e?.split(".")[1];return n&&i&&t.definitions[n]?.properties?.[i]}if(e)return t.definitions[e]})(r);return c?S(c,t,n,i):void 0}return(0,v.jsx)("div",{className:n,children:r.flatMap(((e,n)=>((e,n)=>{const c=s?.indexOf(e)??0,a=s?.slice(0,c),o=s?.slice(c),d=e?.match(b);let l=(d?.[1]??d?.[2])?.trim();l?.includes("!")&&(l=l.split("!")[1]);const u=l?.startsWith("http"),p=l&&t.definitions[l]?(0,j.c)(m(l,i)):u?l:void 0,h=p?(0,v.jsx)("a",{href:p,target:u?"_blank":"_self",children:l}):l;return s=o?.slice(e.length),0===n?1===r.length?[(0,v.jsx)("span",{children:k(a)}),(0,v.jsx)("code",{children:h}),(0,v.jsx)(v.Fragment,{children:k(o?.slice(e.length))})]:[(0,v.jsx)("span",{children:k(a)}),(0,v.jsx)("code",{children:h}),(0,v.jsx)(v.Fragment,{children:k(s?.slice(0,s?.indexOf(r[n+1])))})]:s?.length>0?n<r.length-1?[(0,v.jsx)("code",{children:h}),(0,v.jsx)(v.Fragment,{children:k(s?.slice(0,s?.indexOf(r[n+1])))})]:[(0,v.jsx)("code",{children:h}),(0,v.jsx)(v.Fragment,{children:k(o?.slice(e.length))})]:[(0,v.jsx)("code",{children:h})]})(e,n)))})}function O(e,t,n,i){return e.properties?(0,v.jsx)("div",{className:"margin-left--sm",children:Object.entries(e.properties).map((([s,r])=>(0,v.jsxs)("div",{className:"margin-bottom--md",children:[(0,v.jsx)("div",{className:"margin-bottom--sm",children:(0,v.jsxs)("div",{className:"property-name-and-badges",children:[(0,v.jsx)("div",{role:"heading","aria-level":4,className:"monospaceHeader",children:s}),e.required?.includes(s)&&(0,v.jsx)("span",{className:"badge badge--secondary",children:"Required"})]})}),(0,v.jsxs)("div",{className:"margin-left--sm",children:[(0,v.jsx)(I,{definition:r,schema:t,linkId:h(n),product:i}),S(r,t,"margin-top--sm",i)]})]},s)))}):null}function I(e){const{schema:t,linkId:n,product:i}=e;let s=e.definition;if("string"==typeof s){const e=f(s,t);console.warn("Couldn't find definition:",s),s=e}if(!s)return(0,v.jsx)("div",{style:{fontStyle:"italic"},children:"There are no arguments"});if(s.$ref){const e=f(s.$ref,t);return e&&"object"!==e.type?(0,v.jsx)(I,{definition:e,schema:t,linkId:n,product:i}):(0,v.jsx)(y,{name:s.$ref,schema:t,linkId:n,product:i})}if(s.type){if("string"===s.type&&s.enum){const e=s.enum.map((e=>`"${e}"`)).join(" | ");return(0,v.jsx)("code",{children:e})}if("array"===s.type&&s.items){const e=e=>(0,v.jsx)(v.Fragment,{children:e.map(((e,s)=>(0,v.jsx)("div",{children:(0,v.jsx)(y,{isArray:!0,name:e.$ref??"",schema:t,linkId:n,product:i})},`${e.$ref}-${s}`||s)))});if(Array.isArray(s.items))return e(s.items);if(Array.isArray(s.items.anyOf))return e(s.items.anyOf);if(s.items.$ref){const e=s.items.$ref;return(0,v.jsx)(y,{isArray:!0,name:e,schema:t,linkId:n,product:i})}return(0,v.jsxs)("code",{children:[s.items.type,"[]"]})}if("object"===s.type)return(e=>e.properties&&2===Object.keys(e.properties).length&&2===e.required?.length&&"name"===e.required[0]&&"arguments"===e.required[1])(s)?null:s.properties?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("code",{children:"object"}),O(s,t,n,i)]}):s.additionalProperties&&!0!==s.additionalProperties&&"string"===s.additionalProperties.type?(0,v.jsx)("code",{children:s.additionalProperties.enum?.map((e=>`"${e}"`)).join(" | ")}):(0,v.jsx)("code",{children:"object"});if(Array.isArray(s.type)){const e=s.type.filter((e=>"null"!==e));return 0===e.length?null:1===e.length?(0,v.jsx)("code",{children:e[0]}):(0,v.jsx)(v.Fragment,{children:e.map((e=>(0,v.jsx)("div",{children:(0,v.jsx)("code",{children:e})},e)))})}return(0,v.jsx)("code",{children:s.type})}if(s.anyOf){const e=s.anyOf.filter((e=>!("null"===e.type)));return(0,v.jsxs)(v.Fragment,{children:[e.length>1&&(0,v.jsx)("div",{children:"Any of:"}),e.map(((e,s)=>(0,v.jsx)("div",{children:(0,v.jsx)(I,{definition:e,schema:t,linkId:n,product:i})},`${e.$ref}-${s}`||s)))]})}return(0,v.jsx)("code",{children:"unknown"})}function E(e){return!!e.$ref}function L(e){return e?.type?.includes("null")||e?.anyOf?.some(L)}function A(e){const{schema:t,type:n,product:i}=e,s=t.definitions;let r;r="command"===n?"viewer-spec.SingleCommand":"operation"===n?"viewer-spec.SingleOperation":"viewer-spec.Event";const c=s[r]?.anyOf?.filter(E).map((e=>p(e.$ref)));return c?(0,v.jsx)(v.Fragment,{children:c.map((e=>{const r=s[e],c=function(e,t){return`${t}-${e}`}(e,n),o=s[`${e}:input`],d=s[`${e}:output`];return r?(0,v.jsxs)("div",{className:"margin-bottom--lg",children:[(0,v.jsx)(a.c,{as:"h2",id:c,children:e}),S(r,t,"margin-bottom--md",i),(0,v.jsxs)("div",{className:"margin-bottom--md",children:[(0,v.jsx)("h3",{children:"Argument "+(!0===L(o)?"(optional)":"")}),(0,v.jsx)("div",{className:"margin-left--sm",children:(0,v.jsx)(I,{definition:o,schema:t,linkId:c,product:i})})]}),"operation"===n&&d&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{children:"Result"}),(0,v.jsx)("div",{className:"margin-left--sm",children:(0,v.jsx)(I,{definition:d,schema:t,linkId:c,product:i})})]})]},e):null}))}):null}function N(e){const{definitionName:t,schema:n,product:i}=e,s=p(t),r=s.replace("/",".").split("."),c=r[r.length-1],o=f(t,n);if(!o)return null;if("object"!==o.type)return console.warn("Tried to render definition for non-object type",s),null;const d=h(s);return(0,v.jsxs)("div",{className:"margin-bottom--lg",children:[(0,v.jsxs)("span",{children:[(0,v.jsx)(a.c,{as:"h2",id:d,children:c}),c!==s&&(0,v.jsx)("h5",{className:"messaging-definition-subheader",children:s})]}),S(o,n,"margin-bottom--md",i),(0,v.jsx)("h3",{children:"Properties"}),(!o.properties||0===Object.keys(o.properties).length)&&(0,v.jsx)("em",{children:"This object doesn't currently contain any properties."}),o.properties&&O(o,n,s,i)]})}function C(e){const{schema:t,product:n,type:i}=e,s=Object.entries(t.definitions).reduce(((e,[t,n])=>"object"===n.type?{...e,[t]:n}:e),{});return(0,v.jsx)("div",{children:Object.keys(s).filter((e=>"argument"===i?!e.toLocaleLowerCase().includes("modelproperties")&&!e.toLocaleLowerCase().endsWith(":input")&&!e.toLocaleLowerCase().endsWith(":output"):e.toLocaleLowerCase().includes("modelproperties"))).sort(((e,t)=>e.localeCompare(t))).map((e=>(0,v.jsx)(N,{definitionName:e,schema:t,product:n},e)))})}function R(e){const{schema:t,type:n,product:i}=e;return(0,v.jsxs)(v.Fragment,{children:[("argument"===n||"config"===n)&&(0,v.jsx)(C,{schema:t,product:i,type:n}),"command"===n&&(0,v.jsx)(A,{schema:t,type:"command",product:i}),"event"===n&&(0,v.jsx)(A,{schema:t,type:"event",product:i}),"operation"===n&&(0,v.jsx)(A,{schema:t,type:"operation",product:i})]})}function W(e){return(0,v.jsx)(i.c,{children:()=>(0,v.jsx)(P,{...e})})}const _={web:{action:void 0,event:void 0,config:void 0},mobile:{action:void 0,event:void 0,config:void 0},common:{action:void 0,event:void 0,config:void 0}},T=async(e,t)=>{let n;try{n=r().get(`${e}-${t}`)}catch(i){console.log(i)}if(!n){if(!_[e][t]){const n="config"===t?"app-config":t;_[e][t]=fetch(`https://apps.vertigisstudio.com/web/${e}-${n}.schema.json`)}const s=await _[e][t];if(n=await(s?.clone().json()),n)try{r().set(`${e}-${t}`,n,1440)}catch(i){console.error(i)}}return n};function P(e){const{product:t,type:n}=e,[i,s]=(0,c.useState)();return(0,c.useEffect)((()=>{let e,i=!1;switch(n){case"command":case"operation":e="action";break;case"event":e="event";break;case"argument":case"config":e="config"}return(async()=>{if(!e)return;let r,c,a,o;"config"===e&&(r=await T("common","config"),c=await T(t,"config")),"action"!==e&&"config"!==e||(a=await T("config"===e?"web":t,"action")),"event"!==e&&"config"!==e||(o=await T(t,"event"));const d=[];if(r&&d.push(r),c&&d.push(c),a&&d.push(a),o&&d.push(o),i)return;const l={$ref:"#/definitions/viewer-spec.ActionObject"},u={type:"string"},p={definitions:"config"!==n?{"viewer-spec.ActionObject":{properties:{name:{description:"The name of a command or operation.",type:"string"},arguments:{description:"The arguments for the command or operation.",type:"object"}},required:["name","arguments"],type:"object"},"viewer-spec.Action":{description:`An action to execute in the viewer; can be an action name, an action object, or a command chain (https://developers.vertigisstudio.com/docs/${t}/configuration-commands-operations/#command-chains). The list of valid action names are the names of the commands and operations listed in this document`,anyOf:[u,l,{items:{anyOf:[u,l]},type:"array"}]}}:{}};d.forEach((e=>{Object.keys(e.definitions).forEach((t=>{p.definitions[t]=function(e){if(!e)return!1;const t=e.map((e=>e.$ref));return!!(t.includes("@vertigis.arcgis-extensions.data.Feature.Feature")||t.includes("@vertigis.arcgis-extensions.data.FeatureSet.FeatureSet")||t.includes("@vertigis.arcgis-extensions.data.FeatureList.FeatureList")||t.includes("@vertigis.arcgis-extensions.data.FeatureStream.FeatureStream"))}(e.definitions[t].anyOf)?{...e.definitions[t],anyOf:g(e.definitions[t].anyOf)}:e.definitions[t]}))})),s(p)})(),()=>{i=!0}}),[t]),(0,c.useEffect)((()=>{if(!i)return;const e=window.decodeURIComponent(window.location.hash);e&&document.getElementById(e.substring(1))?.scrollIntoView()}),[i]),i?(0,v.jsx)(R,{schema:i,type:n,product:t}):(0,v.jsx)("div",{children:"Loading..."})}}}]);