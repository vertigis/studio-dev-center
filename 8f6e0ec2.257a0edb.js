(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{241:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return m}));var r=n(2),a=n(9),i=(n(0),n(297)),o=n(369),c={title:"Commands, Operations and Events Reference",description:"Geocortex Mobile - Commands, Operations and Events API Reference"},s={id:"mobile/api-commands-operations-events",isDocsHomePage:!1,title:"Commands, Operations and Events Reference",description:"Geocortex Mobile - Commands, Operations and Events API Reference",source:"@site/docs/mobile/api-commands-operations-events.mdx",permalink:"/docs/mobile/api-commands-operations-events",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/api-commands-operations-events.mdx",sidebar:"mobile",previous:{title:"Build a Service that Fetches Dynamic Data",permalink:"/docs/mobile/tutorial-implement-service-fetch-dynamic-data"}},u=[{value:"Commands",id:"commands",children:[]},{value:"Operations",id:"operations",children:[]},{value:"Events",id:"events",children:[]},{value:"Argument Definitions",id:"argument-definitions",children:[]}],l={rightToc:u};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Commands and operations are runnable, independent units of work within Geocortex Mobile. ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#commands"}),"Commands")," are units of work which may take an input but do not produce an output, while ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#operations"}),"operations")," differ because they produce output. You can learn more about commands and operations in our ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/mobile/configuration-commands-operations"}),"conceptual documentation")),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#events"}),"Events")," are distinct, discrete messaging about a change or update that occurs in the viewer. They can be used to initiate behaviors, communicate data changes, and more. Events themselves do not execute behavior, but merely provide messaging so subscribers can act on changes. You can learn more about events in the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/mobile/sdk-events-reference"}),"event reference")),Object(i.b)("h2",{id:"commands"},"Commands"),Object(i.b)(o.a,{product:"mobile",type:"command",mdxType:"ViewerMessaging"}),Object(i.b)("h2",{id:"operations"},"Operations"),Object(i.b)(o.a,{product:"mobile",type:"operation",mdxType:"ViewerMessaging"}),Object(i.b)("h2",{id:"events"},"Events"),Object(i.b)(o.a,{product:"mobile",type:"event",mdxType:"ViewerMessaging"}),Object(i.b)("h2",{id:"argument-definitions"},"Argument Definitions"),Object(i.b)(o.a,{product:"mobile",type:"argument",mdxType:"ViewerMessaging"}))}m.isMDXComponent=!0},316:function(e,t,n){"use strict";var r=n(12),a=n(79)(!0);r(r.P,"Array",{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n(78)("includes")},317:function(e,t,n){"use strict";var r=n(12),a=n(322);r(r.P+r.F*n(323)("includes"),"String",{includes:function(e){return!!~a(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},318:function(e,t,n){"use strict";var r=n(9),a=n(0),i=n.n(a),o=n(298),c=n(308),s=(n(153),n(154)),u=n.n(s);t.a=function(e){return function(t){var n,a=t.id,s=Object(r.a)(t,["id"]),l=Object(c.a)().siteConfig,m=(l=void 0===l?{}:l).themeConfig,d=(m=void 0===m?{}:m).navbar,f=(d=void 0===d?{}:d).hideOnScroll,p=void 0!==f&&f;return a?i.a.createElement(e,s,i.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:Object(o.a)("anchor",(n={},n[u.a.enhancedAnchor]=!p,n)),id:a}),s.children,i.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+a,title:"Direct link to heading"},"#")):i.a.createElement(e,s)}}},330:function(e,t,n){var r=function(e){"use strict";var t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function c(e,t,n,r){var a=t&&t.prototype instanceof l?t:l,i=Object.create(a.prototype),o=new O(r||[]);return i._invoke=function(e,t,n){var r="suspendedStart";return function(a,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw i;return x()}for(n.method=a,n.arg=i;;){var o=n.delegate;if(o){var c=b(o,n);if(c){if(c===u)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,o),i}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(r){return{type:"throw",arg:r}}}e.wrap=c;var u={};function l(){}function m(){}function d(){}var f={};f[a]=function(){return this};var p=Object.getPrototypeOf,h=p&&p(p(j([])));h&&h!==t&&n.call(h,a)&&(f=h);var v=d.prototype=l.prototype=Object.create(f);function y(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function g(e,t){var r;this._invoke=function(a,i){function o(){return new t((function(r,o){!function r(a,i,o,c){var u=s(e[a],e,i);if("throw"!==u.type){var l=u.arg,m=l.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then((function(e){r("next",e,o,c)}),(function(e){r("throw",e,o,c)})):t.resolve(m).then((function(e){l.value=e,o(l)}),(function(e){return r("throw",e,o,c)}))}c(u.arg)}(a,i,r,o)}))}return r=r?r.then(o,o):o()}}function b(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=s(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:x}}function x(){return{value:void 0,done:!0}}return m.prototype=v.constructor=d,d.constructor=m,d[o]=m.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,o in e||(e[o]="GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},y(g.prototype),g.prototype[i]=function(){return this},e.AsyncIterator=g,e.async=function(t,n,r,a,i){void 0===i&&(i=Promise);var o=new g(c(t,n,r,a),i);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},y(v),v[o]="Generator",v[a]=function(){return this},v.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return o.type="throw",o.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),w(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;w(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}(e.exports);try{regeneratorRuntime=r}catch(a){Function("r","regeneratorRuntime = r")(r)}},331:function(e,t,n){var r=n(12),a=n(84)(!0);r(r.S,"Object",{entries:function(e){return a(e)}})},362:function(e,t,n){e.exports=n(330)},363:function(e,t,n){var r=n(27).f,a=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in a||n(10)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},364:function(e,t,n){"use strict";var r=n(12),a=n(33),i=n(29),o=n(13),c=[].sort,s=[1,2,3];r(r.P+r.F*(o((function(){s.sort(void 0)}))||!o((function(){s.sort(null)}))||!n(365)(c)),"Array",{sort:function(e){return void 0===e?c.call(i(this)):c.call(i(this),a(e))}})},365:function(e,t,n){"use strict";var r=n(13);e.exports=function(e,t){return!!e&&r((function(){t?e.call(null,(function(){}),1):e.call(null)}))}},369:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var r=n(362),a=n.n(r);n(51),n(330);function i(e,t,n,r,a,i,o){try{var c=e[i](o),s=c.value}catch(u){return void n(u)}c.done?t(s):Promise.resolve(s).then(r,a)}var o=n(0),c=n.n(o),s=n(16);var u=function(e){var t=e.children,n=e.fallback;return s.a.canUseDOM&&null!=t?c.a.createElement(c.a.Fragment,null,t()):n||null},l=(n(316),n(317),n(318));n(363),n(321),n(77);function m(e){return e.replace("#/definitions/","")}function d(e){return"definition-"+m(e)}function f(e,t){var n=m(e);if(!n.startsWith("esri.rest-api"))return t.definitions[n]}function p(e){var t=e.isArray,n=e.name,r=e.schema,a=m(n),i=f(n,r);return i&&"object"===i.type?c.a.createElement("code",null,c.a.createElement("a",{href:"#"+d(n)},a,t&&"[]")):c.a.createElement("code",null,a,t&&"[]")}function h(e){var t=e.schema,n=e.definition;if("string"==typeof n){var r=f(name,t);console.warn("Couldn't find definition:",n),n=r}if(!n)return c.a.createElement("div",{style:{fontStyle:"italic"}},"There are no arguments");if(n.$ref){var a=f(n.$ref,t);return a&&"object"!==a.type?c.a.createElement(h,{definition:a,schema:t}):c.a.createElement(p,{name:n.$ref,schema:t})}if(n.type){if("string"===n.type&&n.enum){var i=n.enum.map((function(e){return'"'+e+'"'})).join(" | ");return c.a.createElement("code",null,i)}if("array"===n.type&&n.items){var o=function(e){return c.a.createElement(c.a.Fragment,null,e.map((function(e,n){return c.a.createElement("div",{key:e.$ref||n},c.a.createElement(h,{definition:e,schema:t}),"[]")})))};if(Array.isArray(n.items))return o(n.items);if(Array.isArray(n.items.anyOf))return o(n.items.anyOf);if(n.items.$ref){var s=n.items.$ref;return c.a.createElement(p,{isArray:!0,name:s,schema:t})}return c.a.createElement("code",null,n.items.type,"[]")}if("object"===n.type)return c.a.createElement("code",null,"unknown");if(Array.isArray(n.type)){var u=n.type.filter((function(e){return"null"!==e}));return 0===u.length?null:1===u.length?c.a.createElement("code",null,u[0]):c.a.createElement(c.a.Fragment,null,u.map((function(e){return c.a.createElement("div",{key:e},c.a.createElement("code",null,e))})))}return c.a.createElement("code",null,n.type)}if(n.anyOf){var l=n.anyOf.filter((function(e){return!("null"===e.type)}));return c.a.createElement(c.a.Fragment,null,l.length>1&&c.a.createElement("div",null,"Any of:"),l.map((function(e,n){return c.a.createElement("div",{key:e.$ref||n},c.a.createElement(h,{definition:e,schema:t}))})))}return c.a.createElement("code",null,"unknown")}var v=Object(l.a)("h3");function y(e){return!!e.$ref}function g(e){var t,n;return(null==e||null===(t=e.type)||void 0===t?void 0:t.includes("null"))||(null==e||null===(n=e.anyOf)||void 0===n?void 0:n.some(g))}function b(e){var t,n,r=e.schema,a=e.type,i=r.definitions,o=null===(t=i["command"===a?"viewer-spec.SingleCommand":"operation"===a?"viewer-spec.SingleOperation":"viewer-spec.Event"])||void 0===t||null===(n=t.anyOf)||void 0===n?void 0:n.filter(y).map((function(e){return m(e.$ref)}));return o?c.a.createElement(c.a.Fragment,null,o.map((function(e){var t=i[e],n=function(e,t){return t+"-"+e}(e,a),o=i[e+":input"],s=i[e+":output"];return t?c.a.createElement("div",{key:e,className:"margin-bottom--lg"},c.a.createElement(v,{id:n},e),t.description&&c.a.createElement("div",{className:"margin-bottom--md"},t.description),c.a.createElement("div",{className:"margin-bottom--md"},c.a.createElement("div",null,"Argument "+(!0===g(o)?"(optional)":"")),c.a.createElement("div",{className:"margin-left--sm"},c.a.createElement(h,{definition:o,schema:r}))),"operation"===a&&s&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,"Result"),c.a.createElement("div",{className:"margin-left--sm"},c.a.createElement(h,{definition:s,schema:r})))):null}))):null}n(52),n(364),n(26),n(22),n(21),n(331);var E=Object(l.a)("h3");function w(e){var t=e.definitionName,n=e.schema,r=m(t),a=f(t,n);if(!a)return null;if("object"!==a.type)return console.warn("Tried to render definition for non-object type",r),null;var i=d(r);return c.a.createElement("div",{className:"margin-bottom--lg"},c.a.createElement(E,{id:i},r),a.description&&c.a.createElement("div",{className:"margin-bottom--md"},a.description),c.a.createElement("div",null,"Properties"),(!a.properties||0===Object.keys(a.properties).length)&&c.a.createElement("em",null,"This object doesn't currently contain any properties."),a.properties&&c.a.createElement("div",{className:"margin-left--sm"},Object.entries(a.properties).map((function(e){var t,r=e[0],i=e[1];return c.a.createElement("div",{key:r,className:"margin-bottom--md"},c.a.createElement("div",{className:"margin-bottom--sm"},c.a.createElement("code",null,r),(null===(t=a.required)||void 0===t?void 0:t.includes(r))&&c.a.createElement("span",{className:"badge badge--secondary"},"Required")),c.a.createElement("div",{className:"margin-left--sm"},c.a.createElement(h,{definition:i,schema:n}),i.description&&c.a.createElement("div",{className:"margin-top--sm"},i.description)))}))))}function O(e){var t=e.schema,n=Object.entries(t.definitions).reduce((function(e,t){var n,r=t[0],a=t[1];return"object"===a.type?Object.assign({},e,((n={})[r]=a,n)):e}),{});return c.a.createElement("div",null,Object.keys(n).sort((function(e,t){return e.localeCompare(t)})).map((function(e){return c.a.createElement(w,{key:e,definitionName:e,schema:t})})))}function j(e){var t=e.schema,n=e.type;return c.a.createElement(c.a.Fragment,null,"argument"===n&&c.a.createElement(O,{schema:t}),"command"===n&&c.a.createElement(b,{schema:t,type:"command"}),"event"===n&&c.a.createElement(b,{schema:t,type:"event"}),"operation"===n&&c.a.createElement(b,{schema:t,type:"operation"}))}function x(e){return c.a.createElement(u,null,(function(){return c.a.createElement(L,e)}))}var k={web:{action:void 0,event:void 0},mobile:{action:void 0,event:void 0}};function L(e){var t=e.product,n=e.type,r=Object(o.useState)(),s=r[0],u=r[1];return Object(o.useEffect)((function(){var e,r=!1,o="command"===n||"operation"===n?"action":"event"===n?"event":void 0;return(e=a.a.mark((function e(){var n,i,c,s,l,m,d,f,p;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o&&!k[t][o]&&(k[t][o]=fetch("https://apps.geocortex.com/webviewer/"+t+"-"+o+".schema.json")),e.next=3,k[t].action;case 3:return n=e.sent,e.next=6,k[t].event;case 6:if(i=e.sent,!r){e.next=9;break}return e.abrupt("return");case 9:return e.next=11,n.clone().json();case 11:return c=e.sent,e.next=14,i.clone().json();case 14:if(s=e.sent,!r){e.next=17;break}return e.abrupt("return");case 17:l={properties:{name:{description:"The name of a command or operation.",type:"string"},arguments:{description:"The arguments for the command or operation.",type:"object"}},required:["name","arguments"],type:"object"},f={description:"An action to execute in the viewer; can be an action name, an action object, or a command chain (https://developers.geocortex.com/docs/"+t+"/configuration-commands-operations/#command-chains). The list of valid action names are the names of the commands and operations listed in this document",anyOf:[d={type:"string"},m={$ref:"#/definitions/viewer-spec.ActionObject"},{items:{anyOf:[d,m]},type:"array"}]},p={definitions:Object.assign({},c.definitions,s.definitions,{"viewer-spec.ActionObject":l,"viewer-spec.Action":f})},u(p);case 23:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){i(o,r,a,c,s,"next",e)}function s(e){i(o,r,a,c,s,"throw",e)}c(void 0)}))})(),function(){r=!0}}),[t]),Object(o.useEffect)((function(){if(s){var e,t=window.decodeURIComponent(window.location.hash);if(t)null===(e=document.getElementById(t.substring(1)))||void 0===e||e.scrollIntoView()}}),[s]),s?c.a.createElement(j,{schema:s,type:n}):c.a.createElement("div",null,"Loading...")}}}]);