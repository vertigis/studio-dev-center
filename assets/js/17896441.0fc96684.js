(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[7918],{6742:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var a=n(7294),r=n(3727),i=n(2263),l=n(3919),s=n(412);const o=(0,a.createContext)({collectLink:()=>{}});var c=n(4996),d=n(8780);const u=function({isNavLink:e,to:t,href:n,activeClassName:u,isActive:m,"data-noBrokenLinkCheck":v,autoAddBaseUrl:h=!0,...p}){var f;const{siteConfig:{trailingSlash:g}}=(0,i.Z)(),{withBaseUrl:E}=(0,c.C)(),b=(0,a.useContext)(o),_=t||n,L=(0,l.Z)(_),w=null==_?void 0:_.replace("pathname://","");let y=void 0!==w?(Z=w,h&&(e=>e.startsWith("/"))(Z)?E(Z):Z):void 0;var Z;y&&L&&(y=(0,d.applyTrailingSlash)(y,g));const N=(0,a.useRef)(!1),U=e?r.OL:r.rU,k=s.Z.canUseIntersectionObserver;let T;(0,a.useEffect)((()=>(!k&&L&&null!=y&&window.docusaurus.prefetch(y),()=>{k&&T&&T.disconnect()})),[y,k,L]);const C=null!==(f=null==y?void 0:y.startsWith("#"))&&void 0!==f&&f,A=!y||!L||C;return y&&L&&!C&&!v&&b.collectLink(y),A?a.createElement("a",{href:y,..._&&!L&&{target:"_blank",rel:"noopener noreferrer"},...p}):a.createElement(U,{...p,onMouseEnter:()=>{N.current||null==y||(window.docusaurus.preload(y),N.current=!0)},innerRef:e=>{var t,n;k&&e&&L&&(t=e,n=()=>{null!=y&&window.docusaurus.prefetch(y)},T=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(T.unobserve(t),T.disconnect(),n())}))})),T.observe(t))},to:y||"",...e&&{isActive:m,activeClassName:u}})}},3919:(e,t,n)=>{"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:()=>a,Z:()=>r})},4996:(e,t,n)=>{"use strict";n.d(t,{C:()=>i,Z:()=>l});var a=n(2263),r=n(3919);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+l:l}(t,e,n,a)}}function l(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},2049:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>N});var a=n(7294),r=n(6742),i=n(4973);const l=function(e){const{metadata:t}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},a.createElement("div",{className:"pagination-nav__item"},t.previous&&a.createElement(r.Z,{className:"pagination-nav__link",to:t.previous.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&a.createElement(r.Z,{className:"pagination-nav__link",to:t.next.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))};var s=n(2263),o=n(907),c=n(9732);function d({siteTitle:e,versionLabel:t}){return a.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:e,versionLabel:a.createElement("b",null,t)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")}function u({siteTitle:e,versionLabel:t}){return a.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:e,versionLabel:a.createElement("b",null,t)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}function m({versionLabel:e,to:t,onClick:n}){return a.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label userd to tell the user that he's browsing an unmaintained doc version",values:{versionLabel:e,latestVersionLink:a.createElement("b",null,a.createElement(r.Z,{to:t,onClick:n},a.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}const v=function(){const{siteConfig:{title:e}}=(0,s.Z)(),{pluginId:t}=(0,o.gA)({failfast:!0}),{savePreferredVersionName:n}=(0,c.J)(t),r=(0,o.zu)(t),{latestDocSuggestion:i,latestVersionSuggestion:l}=(0,o.Jo)(t);if(!l)return a.createElement(a.Fragment,null);const v=i??(h=l).docs.find((e=>e.id===h.mainDocId));var h;return a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},a.createElement("div",null,"current"===r.name?a.createElement(d,{siteTitle:e,versionLabel:r.label}):a.createElement(u,{siteTitle:e,versionLabel:r.label})),a.createElement("div",{className:"margin-top--md"},a.createElement(m,{versionLabel:l.label,to:v.path,onClick:()=>n(l.name)})))};var h=n(1217);function p({lastUpdatedAt:e,formattedLastUpdatedAt:t}){return a.createElement(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*e).toISOString()},t))}}," on {date}")}function f({lastUpdatedBy:e}){return a.createElement(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,e)}}," by {user}")}function g({lastUpdatedAt:e,formattedLastUpdatedAt:t,lastUpdatedBy:n}){return a.createElement(a.Fragment,null,a.createElement(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:e&&t?a.createElement(p,{lastUpdatedAt:e,formattedLastUpdatedAt:t}):"",byUser:n?a.createElement(f,{lastUpdatedBy:n}):""}},"Last updated{atDate}{byUser}"),!1)}var E=n(571),b=n(6146),_=n(6159),L=n(6010);const w="docItemContainer_33ec",y="lastUpdated_3DPF",Z="docItemCol_3FnS";const N=function(e){const{content:t}=e,{metadata:n,frontMatter:r}=t,{image:i,keywords:s,hide_title:c,hide_table_of_contents:d}=r,{description:u,title:m,editUrl:p,lastUpdatedAt:f,formattedLastUpdatedAt:N,lastUpdatedBy:U}=n,{pluginId:k}=(0,o.gA)({failfast:!0}),T=(0,o.gB)(k),C=(0,o.zu)(k),A=T.length>1,B=!c&&void 0===t.contentTitle;return a.createElement(a.Fragment,null,a.createElement(h.Z,{title:m,description:u,keywords:s,image:i}),a.createElement("div",{className:"row"},a.createElement("div",{className:(0,L.Z)("col",{[Z]:!d})},a.createElement(v,null),a.createElement("div",{className:w},a.createElement("article",null,A&&a.createElement("span",{className:"badge badge--secondary"},"Version: ",C.label),a.createElement("div",{className:"markdown"},B&&a.createElement(_.N,null,m),a.createElement(t,null)),(p||f||U)&&a.createElement("footer",{className:"row docusaurus-mt-lg"},a.createElement("div",{className:"col"},p&&a.createElement(b.Z,{editUrl:p})),a.createElement("div",{className:(0,L.Z)("col",y)},(f||U)&&a.createElement(g,{lastUpdatedAt:f,formattedLastUpdatedAt:N,lastUpdatedBy:U})))),a.createElement(l,{metadata:n}))),!d&&t.toc&&a.createElement("div",{className:"col col--3"},a.createElement(E.Z,{toc:t.toc}))))}},6146:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(7294),r=n(4973),i=n(2122),l=n(6010);const s="iconEdit_2_ui",o=({className:e,...t})=>a.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(s,e),"aria-hidden":"true"},t),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})));function c({editUrl:e}){return a.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener"},a.createElement(o,null),a.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},6159:(e,t,n)=>{"use strict";n.d(t,{N:()=>d,Z:()=>u});var a=n(2122),r=n(7294),i=n(6010),l=n(4973),s=n(9732);const o="enhancedAnchor_2LWZ",c="h1Heading_27L5",d=function({...e}){return r.createElement("header",null,r.createElement("h1",(0,a.Z)({},e,{id:void 0,className:c}),e.children))},u=e=>{return"h1"===e?d:(t=e,function({id:e,...n}){const{navbar:{hideOnScroll:a}}=(0,s.LU)();return e?r.createElement(t,n,r.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,i.Z)("anchor",{[o]:!a}),id:e}),n.children,r.createElement("a",{className:"hash-link",href:`#${e}`,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.createElement(t,n)});var t}},1217:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(7294),r=n(9105),i=n(9732),l=n(4996);function s({title:e,description:t,keywords:n,image:s}){const{image:o}=(0,i.LU)(),c=(0,i.pe)(e),d=(0,l.Z)(s||o,{absolute:!0});return a.createElement(r.Z,null,e&&a.createElement("title",null,c),e&&a.createElement("meta",{property:"og:title",content:c}),t&&a.createElement("meta",{name:"description",content:t}),t&&a.createElement("meta",{property:"og:description",content:t}),n&&a.createElement("meta",{name:"keywords",content:Array.isArray(n)?n.join(","):n}),d&&a.createElement("meta",{property:"og:image",content:d}),d&&a.createElement("meta",{name:"twitter:image",content:d}))}},571:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(7294),r=n(6010);const i=function(e,t,n){const[r,i]=(0,a.useState)(void 0);(0,a.useEffect)((()=>{function a(){const a=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=n}));if(t){if(t.getBoundingClientRect().top>=n){return e[e.indexOf(t)-1]??t}return t}return e[e.length-1]}();if(a){let n=0,l=!1;const s=document.getElementsByClassName(e);for(;n<s.length&&!l;){const e=s[n],{href:o}=e,c=decodeURIComponent(o.substring(o.indexOf("#")+1));a.id===c&&(r&&r.classList.remove(t),e.classList.add(t),i(e),l=!0),n+=1}}}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}))},l="tableOfContents_35-E",s="table-of-contents__link";function o({toc:e,isChild:t}){return e.length?a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:s,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(o,{isChild:!0,toc:e.children}))))):null}const c=function({toc:e}){return i(s,"table-of-contents__link--active",100),a.createElement("div",{className:(0,r.Z)(l,"thin-scrollbar")},a.createElement(o,{toc:e}))}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),a="/"===n?"/":t?(r=n).endsWith("/")?r:`${r}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(n);var r;return e.replace(n,a)}},8780:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var i=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(i).default}})},9964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}}}]);