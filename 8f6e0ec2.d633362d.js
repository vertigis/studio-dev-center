(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return m})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),i=(n(0),n(218)),o=n(243),c={title:"Commands, Operations and Events Reference",description:"Geocortex Mobile - Commands, Operations and Events API Reference"},m={unversionedId:"mobile/api-commands-operations-events",id:"mobile/api-commands-operations-events",isDocsHomePage:!1,title:"Commands, Operations and Events Reference",description:"Geocortex Mobile - Commands, Operations and Events API Reference",source:"@site/docs/mobile/api-commands-operations-events.mdx",permalink:"/docs/mobile/api-commands-operations-events",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/api-commands-operations-events.mdx",sidebar:"mobile",previous:{title:"Build a Service that Fetches Dynamic Data",permalink:"/docs/mobile/tutorial-implement-service-fetch-dynamic-data"}},s=[{value:"Commands",id:"commands",children:[]},{value:"Operations",id:"operations",children:[]},{value:"Events",id:"events",children:[]},{value:"Argument Definitions",id:"argument-definitions",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Commands and operations are runnable, independent units of work within Geocortex Mobile. ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#commands"}),"Commands")," are units of work which may take an input but do not produce an output, while ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#operations"}),"operations")," differ because they produce output. You can learn more about commands and operations in our ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/configuration-commands-operations"}),"conceptual documentation")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#events"}),"Events")," are distinct, discrete messaging about a change or update that occurs in the viewer. They can be used to initiate behaviors, communicate data changes, and more. Events themselves do not execute behavior, but merely provide messaging so subscribers can act on changes. You can learn more about events in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/sdk-events-reference"}),"event reference")),Object(i.b)("h2",{id:"commands"},"Commands"),Object(i.b)(o.a,{product:"mobile",type:"command",mdxType:"ViewerMessaging"}),Object(i.b)("h2",{id:"operations"},"Operations"),Object(i.b)(o.a,{product:"mobile",type:"operation",mdxType:"ViewerMessaging"}),Object(i.b)("h2",{id:"events"},"Events"),Object(i.b)(o.a,{product:"mobile",type:"event",mdxType:"ViewerMessaging"}),Object(i.b)("h2",{id:"argument-definitions"},"Argument Definitions"),Object(i.b)(o.a,{product:"mobile",type:"argument",mdxType:"ViewerMessaging"}))}u.isMDXComponent=!0},243:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var a=n(260),r=n.n(a),i=n(261),o=n(262),c=n(0),m=n.n(c),s=n(231);function l(e){return e.replace("#/definitions/","")}function u(e){return"definition-"+l(e)}function d(e,t){var n=l(e);if(!n.startsWith("esri.rest-api"))return t.definitions[n]}function p(e){var t=e.isArray,n=e.name,a=e.schema,r=l(n),i=d(n,a);return i&&"object"===i.type?m.a.createElement("code",null,m.a.createElement("a",{href:"#"+u(n)},r,t&&"[]")):m.a.createElement("code",null,r,t&&"[]")}function f(e){var t=e.schema,n=e.definition;if("string"==typeof n){var a=d(name,t);console.warn("Couldn't find definition:",n),n=a}if(!n)return m.a.createElement("div",{style:{fontStyle:"italic"}},"There are no arguments");if(n.$ref){var r=d(n.$ref,t);return r&&"object"!==r.type?m.a.createElement(f,{definition:r,schema:t}):m.a.createElement(p,{name:n.$ref,schema:t})}if(n.type){if("string"===n.type&&n.enum){var i=n.enum.map((function(e){return'"'+e+'"'})).join(" | ");return m.a.createElement("code",null,i)}if("array"===n.type&&n.items){var o=function(e){return m.a.createElement(m.a.Fragment,null,e.map((function(e,n){return m.a.createElement("div",{key:e.$ref||n},m.a.createElement(f,{definition:e,schema:t}),"[]")})))};if(Array.isArray(n.items))return o(n.items);if(Array.isArray(n.items.anyOf))return o(n.items.anyOf);if(n.items.$ref){var c=n.items.$ref;return m.a.createElement(p,{isArray:!0,name:c,schema:t})}return m.a.createElement("code",null,n.items.type,"[]")}if("object"===n.type)return m.a.createElement("code",null,"unknown");if(Array.isArray(n.type)){var s=n.type.filter((function(e){return"null"!==e}));return 0===s.length?null:1===s.length?m.a.createElement("code",null,s[0]):m.a.createElement(m.a.Fragment,null,s.map((function(e){return m.a.createElement("div",{key:e},m.a.createElement("code",null,e))})))}return m.a.createElement("code",null,n.type)}if(n.anyOf){var l=n.anyOf.filter((function(e){return!("null"===e.type)}));return m.a.createElement(m.a.Fragment,null,l.length>1&&m.a.createElement("div",null,"Any of:"),l.map((function(e,n){return m.a.createElement("div",{key:e.$ref||n},m.a.createElement(f,{definition:e,schema:t}))})))}return m.a.createElement("code",null,"unknown")}var v=Object(s.a)("h3");function b(e){return!!e.$ref}function h(e){var t,n;return(null==e||null===(t=e.type)||void 0===t?void 0:t.includes("null"))||(null==e||null===(n=e.anyOf)||void 0===n?void 0:n.some(h))}function y(e){var t,n,a=e.schema,r=e.type,i=a.definitions,o=null===(t=i["command"===r?"viewer-spec.SingleCommand":"operation"===r?"viewer-spec.SingleOperation":"viewer-spec.Event"])||void 0===t||null===(n=t.anyOf)||void 0===n?void 0:n.filter(b).map((function(e){return l(e.$ref)}));return o?m.a.createElement(m.a.Fragment,null,o.map((function(e){var t=i[e],n=function(e,t){return t+"-"+e}(e,r),o=i[e+":input"],c=i[e+":output"];return t?m.a.createElement("div",{key:e,className:"margin-bottom--lg"},m.a.createElement(v,{id:n},e),t.description&&m.a.createElement("div",{className:"margin-bottom--md"},t.description),m.a.createElement("div",{className:"margin-bottom--md"},m.a.createElement("div",null,"Argument "+(!0===h(o)?"(optional)":"")),m.a.createElement("div",{className:"margin-left--sm"},m.a.createElement(f,{definition:o,schema:a}))),"operation"===r&&c&&m.a.createElement(m.a.Fragment,null,m.a.createElement("div",null,"Result"),m.a.createElement("div",{className:"margin-left--sm"},m.a.createElement(f,{definition:c,schema:a})))):null}))):null}var g=Object(s.a)("h3");function E(e){var t=e.definitionName,n=e.schema,a=l(t),r=d(t,n);if(!r)return null;if("object"!==r.type)return console.warn("Tried to render definition for non-object type",a),null;var i=u(a);return m.a.createElement("div",{className:"margin-bottom--lg"},m.a.createElement(g,{id:i},a),r.description&&m.a.createElement("div",{className:"margin-bottom--md"},r.description),m.a.createElement("div",null,"Properties"),(!r.properties||0===Object.keys(r.properties).length)&&m.a.createElement("em",null,"This object doesn't currently contain any properties."),r.properties&&m.a.createElement("div",{className:"margin-left--sm"},Object.entries(r.properties).map((function(e){var t,a=e[0],i=e[1];return m.a.createElement("div",{key:a,className:"margin-bottom--md"},m.a.createElement("div",{className:"margin-bottom--sm"},m.a.createElement("code",null,a),(null===(t=r.required)||void 0===t?void 0:t.includes(a))&&m.a.createElement("span",{className:"badge badge--secondary"},"Required")),m.a.createElement("div",{className:"margin-left--sm"},m.a.createElement(f,{definition:i,schema:n}),i.description&&m.a.createElement("div",{className:"margin-top--sm"},i.description)))}))))}function O(e){var t=e.schema,n=Object.entries(t.definitions).reduce((function(e,t){var n,a=t[0],r=t[1];return"object"===r.type?Object.assign({},e,((n={})[a]=r,n)):e}),{});return m.a.createElement("div",null,Object.keys(n).sort((function(e,t){return e.localeCompare(t)})).map((function(e){return m.a.createElement(E,{key:e,definitionName:e,schema:t})})))}function j(e){var t=e.schema,n=e.type;return m.a.createElement(m.a.Fragment,null,"argument"===n&&m.a.createElement(O,{schema:t}),"command"===n&&m.a.createElement(y,{schema:t,type:"command"}),"event"===n&&m.a.createElement(y,{schema:t,type:"event"}),"operation"===n&&m.a.createElement(y,{schema:t,type:"operation"}))}function w(e){return Object(o.a)({children:function(){return m.a.createElement(k,e)}})||null}var x={web:{action:void 0,event:void 0},mobile:{action:void 0,event:void 0}};function k(e){var t=e.product,n=e.type,a=Object(c.useState)(),o=a[0],s=a[1];return Object(c.useEffect)((function(){var e=!1,a="command"===n||"operation"===n?"action":"event"===n?"event":void 0;return Object(i.a)(r.a.mark((function n(){var i,o,c,m,l,u,d,p,f;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a&&!x[t][a]&&(x[t][a]=fetch("https://apps.geocortex.com/webviewer/"+t+"-"+a+".schema.json")),n.next=3,x[t].action;case 3:return i=n.sent,n.next=6,x[t].event;case 6:if(o=n.sent,!e){n.next=9;break}return n.abrupt("return");case 9:return n.next=11,i.clone().json();case 11:return c=n.sent,n.next=14,o.clone().json();case 14:if(m=n.sent,!e){n.next=17;break}return n.abrupt("return");case 17:l={properties:{name:{description:"The name of a command or operation.",type:"string"},arguments:{description:"The arguments for the command or operation.",type:"object"}},required:["name","arguments"],type:"object"},p={description:"An action to execute in the viewer; can be an action name, an action object, or a command chain (https://developers.geocortex.com/docs/"+t+"/configuration-commands-operations/#command-chains). The list of valid action names are the names of the commands and operations listed in this document",anyOf:[d={type:"string"},u={$ref:"#/definitions/viewer-spec.ActionObject"},{items:{anyOf:[d,u]},type:"array"}]},f={definitions:Object.assign({},c.definitions,m.definitions,{"viewer-spec.ActionObject":l,"viewer-spec.Action":p})},s(f);case 23:case"end":return n.stop()}}),n)})))(),function(){e=!0}}),[t]),Object(c.useEffect)((function(){if(o){var e,t=window.decodeURIComponent(window.location.hash);if(t)null===(e=document.getElementById(t.substring(1)))||void 0===e||e.scrollIntoView()}}),[o]),o?m.a.createElement(j,{schema:o,type:n}):m.a.createElement("div",null,"Loading...")}}}]);