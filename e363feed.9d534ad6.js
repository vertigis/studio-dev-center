/*! For license information please see e363feed.9d534ad6.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{194:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return f}));var n=r(1),o=r(9),c=(r(0),r(209)),a=r(215),i=r(216),u={title:"SDK Samples",description:"Geocortex Mobile - Learn about the Geocortex Mobile SDK Samples project"},s={id:"mobile/samples",title:"SDK Samples",description:"Geocortex Mobile - Learn about the Geocortex Mobile SDK Samples project",source:"@site/docs/mobile/samples.mdx",permalink:"/dev-center/docs/mobile/samples",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/samples.mdx",sidebar:"mobile",previous:{title:"Quick Start",permalink:"/dev-center/docs/mobile/quick-start"},next:{title:"Dependency Injection",permalink:"/dev-center/docs/mobile/dependency-injection"}},l=[],p={rightToc:l};function f(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Alongside the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/geocortex/quick-start"}),"Quick Start Project"),", a ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/geocortex/sdk-samples"}),"SDK Samples project")," has been created which contains a number of examples of using the SDK to extend Geocortex Mobile. Running the project displays a selector which lets you explore the live samples."),Object(c.b)(i.a,{mdxType:"UseCaseContainer"},Object(c.b)(a.a,{title:"Quick Start",description:"Check out the Geocortex Mobile SDK Quick Start Project.",link:"https://github.com/geocortex/mobile-quick-start",mdxType:"UseCaseCard"}),Object(c.b)(a.a,{title:"SDK Samples",description:"Check out the Geocortex Mobile SDK Samples Project.",link:"https://github.com/geocortex/mobile-sdk-samples",mdxType:"UseCaseCard"})))}f.isMDXComponent=!0},209:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,m=p["".concat(a,".").concat(d)]||p[d]||f[d]||c;return r?o.a.createElement(m,i({ref:t},s,{components:r})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var s=2;s<c;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},210:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var a=o.apply(null,n);a&&e.push(a)}else if("object"===c)for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},211:function(e,t,r){"use strict";var n=r(1),o=r(0),c=r.n(o),a=r(36),i=r(212),u=r(24),s=r.n(u);t.a=function(e){var t,r=e.to,u=e.href,l=r||u,p=Object(i.a)(l),f=Object(o.useRef)(!1),d=s.a.canUseIntersectionObserver;return Object(o.useEffect)((function(){return!d&&p&&window.docusaurus.prefetch(l),function(){d&&t&&t.disconnect()}}),[l,d,p]),l&&p?c.a.createElement(a.b,Object(n.a)({},e,{onMouseEnter:function(){f.current||(window.docusaurus.preload(l),f.current=!0)},innerRef:function(e){var r,n;d&&e&&p&&(r=e,n=function(){window.docusaurus.prefetch(l)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){r===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(r),t.disconnect(),n())}))}))).observe(r))},to:l})):c.a.createElement("a",Object(n.a)({},e,{href:l}))}},212:function(e,t,r){"use strict";function n(e){return/^\/(?!\/)/.test(e)}r.d(t,"a",(function(){return n}))},213:function(e,t,r){"use strict";r(214)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},214:function(e,t,r){var n=r(17),o=r(18),c=r(23),a=/"/g,i=function(e,t,r,n){var o=String(c(e)),i="<"+t;return""!==r&&(i+=" "+r+'="'+String(n).replace(a,"&quot;")+'"'),i+">"+o+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(i),n(n.P+n.F*o((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},215:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));r(213);var n=r(211),o=r(0),c=r.n(o),a=r(210),i=r.n(a),u=r(125),s=r.n(u);function l(e){var t=e.title,r=e.description,o=e.link;return c.a.createElement("div",{className:i()("card-demo",s.a.root)},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card__header"},c.a.createElement("h3",null,t)),c.a.createElement("div",{className:"card__body"},c.a.createElement("p",null,r)),c.a.createElement("div",{className:"card__footer"},c.a.createElement(n.a,{className:"button button--secondary button--block",to:o},"Get Started"))))}},216:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(0),o=r.n(n),c=r(210),a=r.n(c),i=r(126),u=r.n(i);function s(e){var t=e.children;return o.a.createElement("div",{className:a()(u.a.root)},t)}}}]);