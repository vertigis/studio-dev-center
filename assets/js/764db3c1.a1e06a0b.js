(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[2493,385],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(h,r(r({ref:t},p),{},{components:n})):o.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6742:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var o=n(7294),a=n(3727),i=n(2263),r=n(3919),s=n(412);const l=(0,o.createContext)({collectLink:()=>{}});var c=n(4996),p=n(8780);const d=function({isNavLink:e,to:t,href:n,activeClassName:d,isActive:u,"data-noBrokenLinkCheck":m,autoAddBaseUrl:h=!0,...f}){var g;const{siteConfig:{trailingSlash:v}}=(0,i.Z)(),{withBaseUrl:k}=(0,c.C)(),b=(0,o.useContext)(l),w=t||n,y=(0,r.Z)(w),N=null==w?void 0:w.replace("pathname://","");let x=void 0!==N?(C=N,h&&(e=>e.startsWith("/"))(C)?k(C):C):void 0;var C;x&&y&&(x=(0,p.applyTrailingSlash)(x,v));const S=(0,o.useRef)(!1),T=e?a.OL:a.rU,O=s.Z.canUseIntersectionObserver;let E;(0,o.useEffect)((()=>(!O&&y&&null!=x&&window.docusaurus.prefetch(x),()=>{O&&E&&E.disconnect()})),[x,O,y]);const M=null!==(g=null==x?void 0:x.startsWith("#"))&&void 0!==g&&g,P=!x||!y||M;return x&&y&&!M&&!m&&b.collectLink(x),P?o.createElement("a",{href:x,...w&&!y&&{target:"_blank",rel:"noopener noreferrer"},...f}):o.createElement(T,{...f,onMouseEnter:()=>{S.current||null==x||(window.docusaurus.preload(x),S.current=!0)},innerRef:e=>{var t,n;O&&e&&y&&(t=e,n=()=>{null!=x&&window.docusaurus.prefetch(x)},E=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t),E.disconnect(),n())}))})),E.observe(t))},to:x||"",...e&&{isActive:u,activeClassName:d}})}},3919:(e,t,n)=>{"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!o(e)}n.d(t,{b:()=>o,Z:()=>a})},4996:(e,t,n)=>{"use strict";n.d(t,{C:()=>i,Z:()=>r});var o=n(2263),a=n(3919);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,o.Z)();return{withBaseUrl:(n,o)=>function(e,t,n,{forcePrependBaseUrl:o=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(o)return t+n;const r=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+r:r}(t,e,n,o)}}function r(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),o="/"===n?"/":t?(a=n).endsWith("/")?a:`${a}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(n);var a;return e.replace(n,o)}},8780:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return o(a).default}});var i=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return o(i).default}})},9964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1962:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var o=n(6742),a=n(7294),i=n(6010);const r="root_2PFE";function s({title:e,description:t,link:n}){return a.createElement("div",{className:(0,i.Z)("card-demo",r)},a.createElement("div",{className:"card"},a.createElement("div",{className:"card__header"},a.createElement("h3",null,e)),a.createElement("div",{className:"card__body"},a.createElement("p",null,t)),a.createElement("div",{className:"card__footer"},a.createElement(o.Z,{className:"button button--secondary button--block",to:n},"Get Started"))))}},7763:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(7294);const a="root_NqT0";function i({children:e}){return o.createElement("div",{className:a},e)}},8909:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>p,metadata:()=>d,toc:()=>u,default:()=>h});var o=n(2122),a=(n(7294),n(3905)),i=n(4996),r=n(1962),s=n(7763),l=n(7466);const c={title:"Layout",sidebar_label:"Getting Started",description:"VertiGIS Studio Web - Learn about layout concepts"},p=void 0,d={unversionedId:"web/configuration-layout-getting-started",id:"web/configuration-layout-getting-started",isDocsHomePage:!1,title:"Layout",description:"VertiGIS Studio Web - Learn about layout concepts",source:"@site/docs/web/configuration-layout-getting-started.mdx",sourceDirName:"web",slug:"/web/configuration-layout-getting-started",permalink:"/docs/web/configuration-layout-getting-started",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/configuration-layout-getting-started.mdx",version:"current",frontMatter:{title:"Layout",sidebar_label:"Getting Started",description:"VertiGIS Studio Web - Learn about layout concepts"},sidebar:"web",previous:{title:"Key Concepts",permalink:"/docs/web/key-concepts"},next:{title:"Layout Reference",permalink:"/docs/web/configuration-layout-reference"}},u=[{value:"Slotting",id:"slotting",children:[]},{value:"Stacks and Splits",id:"stacks-and-splits",children:[]},{value:"Spacing",id:"spacing",children:[]},{value:"Panels",id:"panels",children:[]},{value:"Models",id:"models",children:[]},{value:"Namespaces",id:"namespaces",children:[]},{value:"Next Steps: Components and App Config",id:"next-steps-components-and-app-config",children:[]}],m={toc:u};function h({components:e,...t}){return(0,a.kt)("wrapper",(0,o.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Before learning about layout...")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Check out the ",(0,a.kt)("a",{parentName:"p",href:"/docs/web/key-concepts"},"Key Concepts"),"."))),(0,a.kt)("p",null,"A layout consists of declarative XML that defines an applications visual structure and data sources. Think of it as the blueprints on which a VertiGIS Studio Web Application is built."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1">\n    <map>\n        <zoom margin="0.5"/>\n    </map>\n</layout>\n')),(0,a.kt)("p",null,"The example above first declares a ",(0,a.kt)("inlineCode",{parentName:"p"},"<map>")," component that uses the default map configuration.\nNext, a ",(0,a.kt)("inlineCode",{parentName:"p"},"<zoom>")," component is added ",(0,a.kt)("strong",{parentName:"p"},"within")," the map component. This does two things:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Visually places the element inside the map"),(0,a.kt)("li",{parentName:"ol"},"Tells the zoom widget to act upon ",(0,a.kt)("a",{parentName:"li",href:"/docs/web/configuration-advanced-model-binding"},"the map it is placed in"))),(0,a.kt)(l.default,{mdxType:"FollowAlongSnippet"}),(0,a.kt)("p",null,"The basic example shown above will place a zoom widget somewhere inside a map. But what if you want the zoom widget to be in the top right corner? At the bottom center of the map? How does the map know where to place it?"),(0,a.kt)("h2",{id:"slotting"},"Slotting"),(0,a.kt)("p",null,"The position of a component within its parent is controlled by what slot it is placed into."),(0,a.kt)("p",null,"For example, this configuration will place the zoom widget in the top right of the map."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8" ?>\n<layout xmlns="https://geocortex.com/layout/v1">\n    <map>\n        // highlight-next-line\n        <zoom padding="0.5" slot="top-right"/>\n    </map>\n</layout>\n')),(0,a.kt)("p",null,"If a slot configuration is not given, the component will slot itself into a default position. Each component defines its own slots - not every slot will work for every component."),(0,a.kt)("p",null,"Slots control how one element fits into another, but how do we control how sibling elements position themselves? The answer is stacks and splits."),(0,a.kt)("h2",{id:"stacks-and-splits"},"Stacks and Splits"),(0,a.kt)("p",null,"The basic ",(0,a.kt)("inlineCode",{parentName:"p"},"stack")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"split")," components form building blocks that layout authors can use to vertically or horizontally partition components and blocks of rich text to form simple and complex user interfaces alike."),(0,a.kt)("p",null,"For a deeper dive into stacks and splits, ",(0,a.kt)("a",{parentName:"p",href:"/docs/web/configuration-layout-reference#stacks-and-splits"},"check out the API reference"),"."),(0,a.kt)("h2",{id:"spacing"},"Spacing"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/web/configuration-layout-reference#presentation-attributes"},"presentation attributes")," for details on margin, padding, content organization and alignment in your layout."),(0,a.kt)("h2",{id:"panels"},"Panels"),(0,a.kt)("p",null,"Another core concept that VertiGIS Studio Web uses to organize elements in a layout is ",(0,a.kt)("strong",{parentName:"p"},"panels"),".\nPanels are a container component that enable hierarchal navigation between different components."),(0,a.kt)("p",null,"For a deeper dive into Panels, ",(0,a.kt)("a",{parentName:"p",href:"/docs/web/configuration-layout-reference#panels"},"check out the API reference"),"."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"These are just a few examples of the building blocks available to help you organize the layout of your Application. Leveraging these simple primitives correctly also means responsive apps that work on various screen sizes. You can also use tabs, expanders, and much more. See the ",(0,a.kt)("a",{parentName:"p",href:"/docs/web/configuration-layout-reference#core-layout-components"},"Component Reference")," for a full listing."))),(0,a.kt)("h2",{id:"models"},"Models"),(0,a.kt)("p",null,"Components often observe, modify or react to the state of other components.\nConsider the following example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<map>\n    <scalebar slot="bottom-left"/>\n</map>\n')),(0,a.kt)("p",null,"The scale bar component displays information about a particular map. More specifically, it is ",(0,a.kt)("strong",{parentName:"p"},"dependent")," on the data of a map to display its values."),(0,a.kt)("p",null,"Each component has a corresponding ",(0,a.kt)("strong",{parentName:"p"},"model")," which is responsible for the data underlying the component. For example, the model for the map component contains the ArcGIS API Map object, and other information about the current state of the map."),(0,a.kt)("p",null,"The scalebar satisfies its dependency on the map by ",(0,a.kt)("a",{parentName:"p",href:"/docs/web/sdk-components-interactions#interacting-with-components-through-models"},"importing the map model"),"."),(0,a.kt)("p",null,"Components can react to changes or mutate values on other components through these models. For example, if the scale of the map changes when it is zoomed, then the scalebar will react to the change in the map model and update its displayed values."),(0,a.kt)("p",null,"For more information on models, ",(0,a.kt)("a",{parentName:"p",href:"/docs/web/sdk-components-reference#models"},"check out the component SDK reference")," and this deeper dive into ",(0,a.kt)("a",{parentName:"p",href:"/docs/web/configuration-advanced-model-binding"},"model binding in the layout"),"."),(0,a.kt)("h2",{id:"namespaces"},"Namespaces"),(0,a.kt)("p",null,"Every component in the xml file has a definition that lives in an xml namespace. All the components discussed to this point have lived in the ",(0,a.kt)("inlineCode",{parentName:"p"},"https://geocortex.com/layout/v1")," namespace."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<layout xmlns="https://geocortex.com/layout/v1">\n    <map/>\n</layout>\n')),(0,a.kt)("p",null,"VertiGIS Studio Web has a specific namespace ",(0,a.kt)("inlineCode",{parentName:"p"},"https://geocortex.com/layout/web/v1")," in which components like ",(0,a.kt)("inlineCode",{parentName:"p"},"<bookmarks>")," live. You can add this namespace to your layout to use these components."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<layout xmlns="https://geocortex.com/layout/v1"\n        // highlight-next-line\n        xmlns:web="https://geocortex.com/layout/web/v1">\n    <map>\n        <web:bookmarks slot="bottom-right" />\n        <web:scale-input slot="bottom-left" />\n    </map>\n</layout>\n')),(0,a.kt)("p",null,"When adding custom components, you will need to ",(0,a.kt)("a",{parentName:"p",href:"/docs/web/sdk-components-reference#components-and-layout"},"add their custom namespace")," to your xml definition."),(0,a.kt)("h2",{id:"next-steps-components-and-app-config"},"Next Steps: Components and App Config"),(0,a.kt)("p",null,"In our examples so far, xml elements like ",(0,a.kt)("inlineCode",{parentName:"p"},"<text>")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"<stack>")," have been used. Each of these xml elements corresponds to a Component in VertiGIS Studio Web. Each component has its own configuration, such as the ",(0,a.kt)("inlineCode",{parentName:"p"},"text")," property for ",(0,a.kt)("inlineCode",{parentName:"p"},"<text>")," elements. Most components have required configuration, and this configuration is defined in an App, specifically, in the ",(0,a.kt)("inlineCode",{parentName:"p"},"app.json")," file. This allows a separation of the visual structure of how components appear in the viewer, and the functional content these components host. Combining layouts with app configuration allows you to create powerful, flexible applications with responsive, declarative layouts."),(0,a.kt)(s.Z,{mdxType:"UseCaseContainer"},(0,a.kt)(r.Z,{title:"App Config",description:"Learn about app configuration and its interaction with layout",link:(0,i.Z)("docs/web/configuration-app-config-getting-started"),mdxType:"UseCaseCard"}),(0,a.kt)(r.Z,{title:"Component Models",description:"Take a deeper dive into the relationship between components and models in the layout",link:(0,i.Z)("docs/web/configuration-advanced-model-binding"),mdxType:"UseCaseCard"}),(0,a.kt)(r.Z,{title:"Core Component Reference",description:"Learn more about core layout components like stacks and splits",link:(0,i.Z)("docs/web/configuration-layout-reference#core-layout-components"),mdxType:"UseCaseCard"}),(0,a.kt)(r.Z,{title:"Component Attribute Reference",description:"See the full list of attributes available to all components",link:(0,i.Z)("docs/web/configuration-layout-reference"),mdxType:"UseCaseCard"})))}h.isMDXComponent=!0},7466:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>r,metadata:()=>s,toc:()=>l,default:()=>p});var o=n(2122),a=(n(7294),n(3905));const i={},r=void 0,s={unversionedId:"web/snippets/follow-along",id:"web/snippets/follow-along",isDocsHomePage:!1,title:"follow-along",description:"Download and setup the VertiGIS Studio Web SDK and edit the minimal layout and app config provided.",source:"@site/docs/web/snippets/follow-along.mdx",sourceDirName:"web/snippets",slug:"/web/snippets/follow-along",permalink:"/docs/web/snippets/follow-along",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/snippets/follow-along.mdx",version:"current",frontMatter:{}},l=[],c={toc:l};function p({components:e,...t}){return(0,a.kt)("wrapper",(0,o.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Want to follow along?")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Download and setup the ",(0,a.kt)("a",{parentName:"p",href:"/docs/web/sdk-overview"},"VertiGIS Studio Web SDK")," and edit the minimal layout and app config provided."))))}p.isMDXComponent=!0},6010:(e,t,n)=>{"use strict";function o(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:()=>a})}}]);