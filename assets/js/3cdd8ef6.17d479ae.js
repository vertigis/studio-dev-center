"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[1295,5326],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6742:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7294),o=n(3727),i=n(2263),r=n(3919),s=n(412);const l=(0,a.createContext)({collectLink:()=>{}});var c=n(4996),u=n(8780);const d=function({isNavLink:e,to:t,href:n,activeClassName:d,isActive:p,"data-noBrokenLinkCheck":m,autoAddBaseUrl:g=!0,...f}){var h;const{siteConfig:{trailingSlash:v}}=(0,i.Z)(),{withBaseUrl:b}=(0,c.C)(),y=(0,a.useContext)(l),k=t||n,w=(0,r.Z)(k),N=null==k?void 0:k.replace("pathname://","");let x=void 0!==N?(C=N,g&&(e=>e.startsWith("/"))(C)?b(C):C):void 0;var C;x&&w&&(x=(0,u.applyTrailingSlash)(x,v));const T=(0,a.useRef)(!1),Z=e?o.OL:o.rU,O=s.Z.canUseIntersectionObserver;let E;(0,a.useEffect)((()=>(!O&&w&&null!=x&&window.docusaurus.prefetch(x),()=>{O&&E&&E.disconnect()})),[x,O,w]);const I=null!==(h=null==x?void 0:x.startsWith("#"))&&void 0!==h&&h,_=!x||!w||I;return x&&w&&!I&&!m&&y.collectLink(x),_?a.createElement("a",{href:x,...k&&!w&&{target:"_blank",rel:"noopener noreferrer"},...f}):a.createElement(Z,{...f,onMouseEnter:()=>{T.current||null==x||(window.docusaurus.preload(x),T.current=!0)},innerRef:e=>{var t,n;O&&e&&w&&(t=e,n=()=>{null!=x&&window.docusaurus.prefetch(x)},E=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t),E.disconnect(),n())}))})),E.observe(t))},to:x||"",...e&&{isActive:p,activeClassName:d}})}},3919:(e,t,n)=>{function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,{Z:()=>o,b:()=>a})},4996:(e,t,n)=>{n.d(t,{C:()=>i,Z:()=>r});var a=n(2263),o=n(3919);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(a)return t+n;const r=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+r:r}(t,e,n,a)}}function r(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},8215:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294);const o=function({children:e,hidden:t,className:n}){return a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},1395:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7294),o=n(944),i=n(6010);const r="tabItem_1uMI",s="tabItemActive_2DSg";const l=37,c=39;const u=function(e){const{lazy:t,block:n,defaultValue:u,values:d,groupId:p,className:m}=e,{tabGroupChoices:g,setTabGroupChoices:f}=(0,o.Z)(),[h,v]=(0,a.useState)(u),b=a.Children.toArray(e.children),y=[];if(null!=p){const e=g[p];null!=e&&e!==h&&d.some((t=>t.value===e))&&v(e)}const k=e=>{const t=e.currentTarget,n=y.indexOf(t),a=d[n].value;v(a),null!=p&&(f(p,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:o}=e.getBoundingClientRect(),{innerHeight:i,innerWidth:r}=window;return t>=0&&o<=r&&a<=i&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((()=>t.classList.remove(s)),2e3))}),150))},w=e=>{var t;let n;switch(e.keyCode){case c:{const t=y.indexOf(e.target)+1;n=y[t]||y[0];break}case l:{const t=y.indexOf(e.target)-1;n=y[t]||y[y.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},d.map((({value:e,label:t})=>a.createElement("li",{role:"tab",tabIndex:h===e?0:-1,"aria-selected":h===e,className:(0,i.Z)("tabs__item",r,{"tabs__item--active":h===e}),key:e,ref:e=>y.push(e),onKeyDown:w,onFocus:k,onClick:k},t)))),t?(0,a.cloneElement)(b.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}},9443:(e,t,n)=>{n.d(t,{Z:()=>a});const a=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),o=n(9443);const i=function(){const e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},8802:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),a="/"===n?"/":t?(o=n).endsWith("/")?o:`${o}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(n);var o;return e.replace(n,a)}},8780:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(o).default}});var i=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(i).default}})},9964:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1962:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(6742),o=n(7294),i=n(6010);const r="root_2PFE";function s({title:e,description:t,link:n}){return o.createElement("div",{className:(0,i.Z)("card-demo",r)},o.createElement("div",{className:"card"},o.createElement("div",{className:"card__header"},o.createElement("h3",null,e)),o.createElement("div",{className:"card__body"},o.createElement("p",null,t)),o.createElement("div",{className:"card__footer"},o.createElement(a.Z,{className:"button button--secondary button--block",to:n},"Get Started"))))}},7763:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294);const o="root_NqT0";function i({children:e}){return a.createElement("div",{className:o},e)}},6473:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const i={},r=void 0,s={unversionedId:"web/snippets/prereqs-layout-config-editing",id:"web/snippets/prereqs-layout-config-editing",isDocsHomePage:!1,title:"prereqs-layout-config-editing",description:"-   Follow along by setting up the VertiGIS Studio Web SDK and editing the minimal layout and app config provided.",source:"@site/docs/web/snippets/prereqs-layout-config-editing.mdx",sourceDirName:"web/snippets",slug:"/web/snippets/prereqs-layout-config-editing",permalink:"/docs/web/snippets/prereqs-layout-config-editing",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/snippets/prereqs-layout-config-editing.mdx",version:"current",frontMatter:{}},l=[],c={toc:l};function u({components:e,...t}){return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Follow along by setting up the ",(0,o.kt)("a",{parentName:"li",href:"/docs/web/sdk-overview"},"VertiGIS Studio Web SDK")," and editing the minimal layout and app config provided."),(0,o.kt)("li",{parentName:"ul"},"Check out the ",(0,o.kt)("a",{parentName:"li",href:"/docs/web/sdk-deployment#upload-app-config-and-layout-to-an-app-optional"},"deployment instructions")," to learn about how to deploy layout and app config to an application.")))}u.isMDXComponent=!0},9370:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>p,default:()=>h,frontMatter:()=>d,metadata:()=>m,toc:()=>g});var a=n(7462),o=(n(7294),n(3905)),i=n(4996),r=n(1395),s=n(8215),l=n(1962),c=n(7763),u=n(6473);const d={title:"Configure Button Click Behavior",description:"VertiGIS Studio Web - Learn how to run an existing command or operation on a button press"},p=void 0,m={unversionedId:"web/tutorial-configure-button-click",id:"web/tutorial-configure-button-click",isDocsHomePage:!1,title:"Configure Button Click Behavior",description:"VertiGIS Studio Web - Learn how to run an existing command or operation on a button press",source:"@site/docs/web/tutorial-configure-button-click.mdx",sourceDirName:"web",slug:"/web/tutorial-configure-button-click",permalink:"/docs/web/tutorial-configure-button-click",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/tutorial-configure-button-click.mdx",version:"current",frontMatter:{title:"Configure Button Click Behavior",description:"VertiGIS Studio Web - Learn how to run an existing command or operation on a button press"},sidebar:"web",previous:{title:"Commands and Operations",permalink:"/docs/web/configuration-commands-operations"},next:{title:"Change the Default Behavior of Components",permalink:"/docs/web/tutorial-change-default-behavior"}},g=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Add a Button to the Layout",id:"add-a-button-to-the-layout",children:[]},{value:"Link the Button to a Command in App Config",id:"link-the-button-to-a-command-in-app-config",children:[]},{value:"Pass Arguments to the Command",id:"pass-arguments-to-the-command",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],f={toc:g};function h({components:e,...t}){return(0,o.kt)("wrapper",(0,a.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article will guide you through how to add a button to the layout and configure it to run an action through the app config."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It's possible to configure a button with a command in the ",(0,o.kt)("a",{parentName:"p",href:"https://apps.vertigisstudio.com/web/designer/"},"VertiGIS Studio Web Designer"),". However, this tutorial demonstrates the concept of configuring behaviors using the app config directly."))),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)(u.default,{mdxType:"PrereqsLayoutConfigSnippet"}),(0,o.kt)("h2",{id:"add-a-button-to-the-layout"},"Add a Button to the Layout"),(0,o.kt)("p",null,"Let's create a layout with two components; a map, and a button positioned on the map."),(0,o.kt)(r.Z,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"UI",value:"ui"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"layout",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'},'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1" >\n  <map>\n    <button slot="top-center"/>\n  </map>\n</layout>\n'))),(0,o.kt)(s.Z,{value:"ui",mdxType:"TabItem"},(0,o.kt)("img",{src:(0,i.Z)("img/web-basic-button-on-map.png")}))),(0,o.kt)("h2",{id:"link-the-button-to-a-command-in-app-config"},"Link the Button to a Command in App Config"),(0,o.kt)("p",null,"Link the button to the layout using a ",(0,o.kt)("inlineCode",{parentName:"p"},"menu-item")," in app config, and configure it to run a basic command, ",(0,o.kt)("inlineCode",{parentName:"p"},"zoom-in"),"."),(0,o.kt)(r.Z,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"},{label:"UI",value:"ui"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"layout",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'},'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1" >\n  <map>\n    // highlight-next-line\n    <button config="button-config" slot="top-center"/>\n  </map>\n</layout>\n'))),(0,o.kt)(s.Z,{value:"config",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'},'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "menu-item",\n            // highlight-next-line\n            "id": "button-config",\n            "iconId": "zoom-in",\n            "title": "Zoom In",\n            "action": "map.zoom-in"\n        }\n    ]\n}\n'))),(0,o.kt)(s.Z,{value:"ui",mdxType:"TabItem"},(0,o.kt)("img",{src:(0,i.Z)("img/web-basic-button-with-command.png")}))),(0,o.kt)("h2",{id:"pass-arguments-to-the-command"},"Pass Arguments to the Command"),(0,o.kt)("p",null,"If the command you want to run takes arguments, you can pass them through the app config."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/configuration-commands-operations#configuring-commands-and-operations"},"commands and operations reference")," for more info on passing arguments."))),(0,o.kt)(r.Z,{defaultValue:"config",values:[{label:"App Config",value:"config"},{label:"UI",value:"ui"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"config",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'},'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "id": "button-config",\n            "iconId": "info",\n            "title": "Alert",\n            "action": {\n                "name": "ui.alert",\n                // highlight-start\n                "arguments": {\n                    "message": "Message from config."\n                }\n                // highlight-end\n            },\n            "$type": "menu-item"\n        }\n    ]\n}\n'))),(0,o.kt)(s.Z,{value:"ui",mdxType:"TabItem"},(0,o.kt)("img",{src:(0,i.Z)("img/web-basic-button-alert.png")}))),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)(c.Z,{mdxType:"UseCaseContainer"},(0,o.kt)(l.Z,{title:"Commands, Operations, and Events API",description:"Check out the available commands and operations",link:(0,i.Z)("docs/web/api-commands-operations-events"),mdxType:"UseCaseCard"}),(0,o.kt)(l.Z,{title:"Change Default Behavior with Commands and Operations",description:"Change built-in behavior or add new behavior using app config and layout",link:(0,i.Z)("docs/web/tutorial-change-default-behavior"),mdxType:"UseCaseCard"})))}h.isMDXComponent=!0},6010:(e,t,n)=>{function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:()=>o})}}]);