(globalThis.webpackChunkgeocortex_dev_center=globalThis.webpackChunkgeocortex_dev_center||[]).push([[7541,6025],{3905:(e,t,o)=>{"use strict";o.d(t,{Zo:()=>p,kt:()=>u});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(o),u=n,m=f["".concat(c,".").concat(u)]||f[u]||d[u]||i;return o?r.createElement(m,a(a({ref:t},p),{},{components:o})):r.createElement(m,a({ref:t},p))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=o[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},6742:(e,t,o)=>{"use strict";o.d(t,{Z:()=>d});var r=o(7294),n=o(3727),i=o(2263),a=o(3919),s=o(412);const c=(0,r.createContext)({collectLink:()=>{}});var l=o(4996),p=o(8780);const d=function({isNavLink:e,to:t,href:o,activeClassName:d,isActive:f,"data-noBrokenLinkCheck":u,autoAddBaseUrl:m=!0,...w}){var h;const{siteConfig:{trailingSlash:k}}=(0,i.Z)(),{withBaseUrl:v}=(0,l.C)(),g=(0,r.useContext)(c),b=t||o,y=(0,a.Z)(b),x=null==b?void 0:b.replace("pathname://","");let N=void 0!==x?(W=x,m&&(e=>e.startsWith("/"))(W)?v(W):W):void 0;var W;N&&y&&(N=(0,p.applyTrailingSlash)(N,k));const G=(0,r.useRef)(!1),_=e?n.OL:n.rU,D=s.Z.canUseIntersectionObserver;let T;(0,r.useEffect)((()=>(!D&&y&&null!=N&&window.docusaurus.prefetch(N),()=>{D&&T&&T.disconnect()})),[N,D,y]);const C=null!==(h=null==N?void 0:N.startsWith("#"))&&void 0!==h&&h,M=!N||!y||C;return N&&y&&!C&&!u&&g.collectLink(N),M?r.createElement("a",{href:N,...b&&!y&&{target:"_blank",rel:"noopener noreferrer"},...w}):r.createElement(_,{...w,onMouseEnter:()=>{G.current||null==N||(window.docusaurus.preload(N),G.current=!0)},innerRef:e=>{var t,o;D&&e&&y&&(t=e,o=()=>{null!=N&&window.docusaurus.prefetch(N)},T=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(T.unobserve(t),T.disconnect(),o())}))})),T.observe(t))},to:N||"",...e&&{isActive:f,activeClassName:d}})}},3919:(e,t,o)=>{"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}o.d(t,{b:()=>r,Z:()=>n})},4996:(e,t,o)=>{"use strict";o.d(t,{C:()=>i,Z:()=>a});var r=o(2263),n=o(3919);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(o,r)=>function(e,t,o,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!o)return o;if(o.startsWith("#"))return o;if((0,n.b)(o))return o;if(r)return t+o;const a=o.startsWith(t)?o:t+o.replace(/^\//,"");return i?e+a:a}(t,e,o,r)}}function a(e,t={}){const{withBaseUrl:o}=i();return o(e,t)}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[o]=e.split(/[#?]/),r="/"===o?"/":t?(n=o).endsWith("/")?n:`${n}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(o);var n;return e.replace(o,r)}},8780:function(e,t,o){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var n=o(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(n).default}});var i=o(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},9964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1962:(e,t,o)=>{"use strict";o.d(t,{Z:()=>s});var r=o(6742),n=o(7294),i=o(6010);const a="root_2PFE";function s({title:e,description:t,link:o}){return n.createElement("div",{className:(0,i.Z)("card-demo",a)},n.createElement("div",{className:"card"},n.createElement("div",{className:"card__header"},n.createElement("h3",null,e)),n.createElement("div",{className:"card__body"},n.createElement("p",null,t)),n.createElement("div",{className:"card__footer"},n.createElement(r.Z,{className:"button button--secondary button--block",to:o},"Get Started"))))}},7763:(e,t,o)=>{"use strict";o.d(t,{Z:()=>i});var r=o(7294);const n="root_NqT0";function i({children:e}){return r.createElement("div",{className:n},e)}},1113:(e,t,o)=>{"use strict";o.r(t),o.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>d,toc:()=>f,default:()=>m});var r=o(2122),n=(o(7294),o(3905)),i=o(4996),a=o(1962),s=o(7763),c=o(2023);const l={title:"Key Concepts",description:"Geocortex Workflow - Learn about key concepts."},p=void 0,d={unversionedId:"workflow/key-concepts",id:"workflow/key-concepts",isDocsHomePage:!1,title:"Key Concepts",description:"Geocortex Workflow - Learn about key concepts.",source:"@site/docs/workflow/key-concepts.mdx",sourceDirName:"workflow",slug:"/workflow/key-concepts",permalink:"/docs/workflow/key-concepts",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/key-concepts.mdx",version:"current",frontMatter:{title:"Key Concepts",description:"Geocortex Workflow - Learn about key concepts."},sidebar:"workflow",previous:{title:"Overview",permalink:"/docs/workflow/overview"},next:{title:"SDK Overview",permalink:"/docs/workflow/sdk-web-overview"}},f=[{value:"Workflow",id:"workflow",children:[]},{value:"Activities",id:"activities",children:[]},{value:"Form Elements",id:"form-elements",children:[]},{value:"Geocortex Workflow Designer and Runtime",id:"geocortex-workflow-designer-and-runtime",children:[]},{value:"Geocortex Workflow Hosts",id:"geocortex-workflow-hosts",children:[]},{value:"Activity Packs",id:"activity-packs",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],u={toc:f};function m({components:e,...t}){return(0,n.kt)("wrapper",(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(c.default,{mdxType:"DesignerCallout"}),(0,n.kt)("p",null,"Geocortex Workflow is a flexible tool for automating business processes. It allows you to create ",(0,n.kt)("strong",{parentName:"p"},"workflows"),", which are composed of various ",(0,n.kt)("strong",{parentName:"p"},"activities"),", control flow elements such as loops, and forms that enable user interaction. Workflows can run on different platforms, including ",(0,n.kt)("a",{parentName:"p",href:"https://www.geocortex.com/products/gxw/"},"Geocortex Web"),", ",(0,n.kt)("a",{parentName:"p",href:"https://www.geocortex.com/products/gxm/"},"Geocortex Mobile"),", on a business server, or in ",(0,n.kt)("a",{parentName:"p",href:"https://www.esri.com/en-us/arcgis/products/web-appbuilder/overview"},"Web AppBuilder for ArcGIS"),"."),(0,n.kt)("h2",{id:"workflow"},"Workflow"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"workflow")," is a collection of connected activities and forms, and is created using Geocortex Workflow Designer. Workflows are generic and not tied to a platform by default, but certain activities and features will only work in certain platforms."),(0,n.kt)("h2",{id:"activities"},"Activities"),(0,n.kt)("p",null,"Activities are the building blocks of a workflow. Each activity represents a unit of work. For example, Geocortex Workflow provides activities to set the map extent, perform geocoding, and gather input from the user. In all, Geocortex Workflow ",(0,n.kt)("a",{parentName:"p",href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activity-reference.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____0"},"provides over 200 activities")," for building workflows."),(0,n.kt)("p",null,"Most activities have inputs - the values that the activity operates on, and outputs - the results of the activity's operations. When you add an activity to a workflow, you customize the activity by configuring the activity's inputs. The outputs are computed when the workflow runs."),(0,n.kt)("p",null,"Activities have metadata that Geocortex Workflow Designer presents to an end user for easy workflow creation. This metadata can be defined in an ",(0,n.kt)("strong",{parentName:"p"},"activity pack"),". They also have an implementation, which powers the behavior of the activity. This implementation is defined in the appropriate language for the target platform; activities for web applications are defined in TypeScript, and activities for Geocortex Mobile applications are defined in C#."),(0,n.kt)("h2",{id:"form-elements"},"Form Elements"),(0,n.kt)("p",null,"Some platforms have UI, like Geocortex Web or Geocortex Mobile, and can use forms to facilitate end user interaction. Geocortex Workflow ",(0,n.kt)("a",{parentName:"p",href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/form-element-reference.htm?TocPath=Forms%257CForm%2520Element%2520Reference%257C_____0"},"provides over twenty configurable ",(0,n.kt)("strong",{parentName:"a"},"form elements"))," for building forms, like the Auto Complete, Geometry Picker, Date Picker, Number Slider, and Text Area elements. Just as activities are the building blocks of workflows, form elements are the building blocks of forms."),(0,n.kt)("h2",{id:"geocortex-workflow-designer-and-runtime"},"Geocortex Workflow Designer and Runtime"),(0,n.kt)("p",null,"Geocortex Workflow includes a powerful tool for building workflows, Geocortex Workflow Designer. Designer's drag-and-drop interface and library of predefined activities simplify the process of creating custom functionality for your web mapping applications, without programming. Geocortex Workflow Designer uses activity definitions to produce workflows."),(0,n.kt)("p",null,"When a workflow is run, the workflow definition is read and executed by the ",(0,n.kt)("strong",{parentName:"p"},"workflow runtime"),". The runtime is responsible for locating the activity implementation definitions, and executing them with the inputs defined in the workflow definitions. Each ",(0,n.kt)("strong",{parentName:"p"},"workflow host")," has a different runtime:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Geocortex Web and Web AppBuilder for ArcGIS use the JavaScript workflow runtime"),(0,n.kt)("li",{parentName:"ul"},"Geocortex Mobile and Geocortex Workflow Server use the .NET workflow runtime")),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Types of Workflows")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Workflows are classified as ",(0,n.kt)("strong",{parentName:"p"},"client")," and ",(0,n.kt)("a",{parentName:"p",href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/server-workflows.htm%3FTocPath%3DServer%2520Workflows%7C_____0"},(0,n.kt)("strong",{parentName:"a"},"server workflows")),". Client workflows support visual elements such as forms and prompts, and can be run on platforms with a visual interface, such as Geocortex Web or Geocortex Mobile. Server workflows do not support forms, prompts, or other visual elements, and can only be run on Geocortex Workflow Server, which has no visual interface. However, server workflows have a number of unique capabilities, such as the ability to connect to a database or mail server."))),(0,n.kt)("h2",{id:"geocortex-workflow-hosts"},"Geocortex Workflow Hosts"),(0,n.kt)("p",null,"Geocortex Workflow, is a cross platform product. If an environment supports a version of the workflow runtime it, is called a ",(0,n.kt)("strong",{parentName:"p"},"workflow host"),"."),(0,n.kt)("p",null,"The current existing workflow hosts are:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Web Applications")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Geocortex Web (client)"),(0,n.kt)("li",{parentName:"ul"},"Geocortex Viewer for HTML5 (client)"),(0,n.kt)("li",{parentName:"ul"},"Web AppBuilder for ArcGIS (client)")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".NET Applications")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Geocortex Mobile (client)"),(0,n.kt)("li",{parentName:"ul"},"Geocortex Workflow Server (server)")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/hosting.htm%3FTocPath%3DConfigure%2520Host%2520Applications%7C_____0"},"Learn more about the different workflow hosts")," or about ",(0,n.kt)("a",{parentName:"p",href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/run-in-different-environments.htm#Run_a_Workflow_in_Different_Environments%3FTocPath%3DRun%2520a%2520Workflow%2520in%2520Different%2520Environments%7C_____0"},"adapting workflows to different environments"),"."),(0,n.kt)("h2",{id:"activity-packs"},"Activity Packs"),(0,n.kt)("p",null,"An activity pack defines a collection of activities that Geocortex Workflow Designer is aware of. An activity pack defines the metadata for one or more activities so that it can participate in the Geocortex Workflow Designer interface."),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"If the activities are targeted for web platforms, the activity pack can also define activity implementations and form elements otherwise, activity implementations and form elements are defined on the target platform."))),(0,n.kt)("p",null,"Activity packs must be registered as an ArcGIS item, and this makes them ",(0,n.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-web-overview#sharing-the-activity-pack"},"shareable with other workflow authors"),"."),(0,n.kt)("h2",{id:"next-steps"},"Next Steps"),(0,n.kt)(s.Z,{mdxType:"UseCaseContainer"},(0,n.kt)(a.Z,{title:"Get Started with the Web Applications SDK",description:"Build custom activities and form elements with the Web Applications SDK",link:(0,i.Z)("docs/workflow/sdk-web-overview"),mdxType:"UseCaseCard"}),(0,n.kt)(a.Z,{title:"Get Started with the Geocortex Mobile SDK",description:"Build custom activities and form elements with the Geocortex Mobile SDK",link:(0,i.Z)("docs/workflow/sdk-mobile-overview"),mdxType:"UseCaseCard"}),(0,n.kt)(a.Z,{title:"Get Started with Geocortex Workflow Server",description:"Build custom activities for a server environment with Geocortex Workflow Server",link:(0,i.Z)("docs/workflow/sdk-server-overview"),mdxType:"UseCaseCard"})))}m.isMDXComponent=!0},2023:(e,t,o)=>{"use strict";o.r(t),o.d(t,{frontMatter:()=>i,contentTitle:()=>a,metadata:()=>s,toc:()=>c,default:()=>p});var r=o(2122),n=(o(7294),o(3905));const i={},a=void 0,s={unversionedId:"workflow/snippets/designer-callout",id:"workflow/snippets/designer-callout",isDocsHomePage:!1,title:"designer-callout",description:"The Geocortex Workflow Designer has a wide range of built-in activities you can use to satisfy your business case. You can take the behavior of workflow even further by running the commands and operations available in Geocortex Web and Geocortex Mobile.",source:"@site/docs/workflow/snippets/designer-callout.mdx",sourceDirName:"workflow/snippets",slug:"/workflow/snippets/designer-callout",permalink:"/docs/workflow/snippets/designer-callout",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/snippets/designer-callout.mdx",version:"current",frontMatter:{}},c=[],l={toc:c};function p({components:e,...t}){return(0,n.kt)("wrapper",(0,r.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Have you explored the Geocortex Workflow Designer?")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"The ",(0,n.kt)("a",{parentName:"p",href:"https://apps.geocortex.com/workflow/designer/"},"Geocortex Workflow Designer")," has a wide range of built-in activities you can use to satisfy your business case. You can take the behavior of workflow even further by running the commands and operations available in ",(0,n.kt)("a",{parentName:"p",href:"/docs/web/configuration-commands-operations"},"Geocortex Web")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/mobile/configuration-commands-operations"},"Geocortex Mobile"),"."))))}p.isMDXComponent=!0},6010:(e,t,o)=>{"use strict";function r(e){var t,o,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=r(e[t]))&&(n&&(n+=" "),n+=o);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,o=0,n="";o<arguments.length;)(e=arguments[o++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}o.d(t,{Z:()=>n})}}]);