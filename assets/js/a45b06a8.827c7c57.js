(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[9857,3131,3381],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=l(n),u=s,v=p["".concat(c,".").concat(u)]||p[u]||m[u]||i;return n?r.createElement(v,a(a({ref:t},d),{},{components:n})):r.createElement(v,a({ref:t},d))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,a=new Array(i);a[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6742:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(7294),s=n(3727),i=n(2263),a=n(3919),o=n(412);const c=(0,r.createContext)({collectLink:()=>{}});var l=n(4996),d=n(8780);const m=function({isNavLink:e,to:t,href:n,activeClassName:m,isActive:p,"data-noBrokenLinkCheck":u,autoAddBaseUrl:v=!0,...f}){var w;const{siteConfig:{trailingSlash:h}}=(0,i.Z)(),{withBaseUrl:g}=(0,l.C)(),b=(0,r.useContext)(c),y=t||n,k=(0,a.Z)(y),N=null==y?void 0:y.replace("pathname://","");let C=void 0!==N?(S=N,v&&(e=>e.startsWith("/"))(S)?g(S):S):void 0;var S;C&&k&&(C=(0,d.applyTrailingSlash)(C,h));const x=(0,r.useRef)(!1),T=e?s.OL:s.rU,I=o.Z.canUseIntersectionObserver;let D;(0,r.useEffect)((()=>(!I&&k&&null!=C&&window.docusaurus.prefetch(C),()=>{I&&D&&D.disconnect()})),[C,I,k]);const M=null!==(w=null==C?void 0:C.startsWith("#"))&&void 0!==w&&w,E=!C||!k||M;return C&&k&&!M&&!u&&b.collectLink(C),E?r.createElement("a",{href:C,...y&&!k&&{target:"_blank",rel:"noopener noreferrer"},...f}):r.createElement(T,{...f,onMouseEnter:()=>{x.current||null==C||(window.docusaurus.preload(C),x.current=!0)},innerRef:e=>{var t,n;I&&e&&k&&(t=e,n=()=>{null!=C&&window.docusaurus.prefetch(C)},D=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.unobserve(t),D.disconnect(),n())}))})),D.observe(t))},to:C||"",...e&&{isActive:p,activeClassName:m}})}},3919:(e,t,n)=>{"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function s(e){return void 0!==e&&!r(e)}n.d(t,{b:()=>r,Z:()=>s})},4996:(e,t,n)=>{"use strict";n.d(t,{C:()=>i,Z:()=>a});var r=n(2263),s=n(3919);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,s.b)(n))return n;if(r)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+a:a}(t,e,n,r)}}function a(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},8215:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(7294);const s=function({children:e,hidden:t,className:n}){return r.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},1395:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(7294),s=n(944),i=n(6010);const a="tabItem_1uMI",o="tabItemActive_2DSg";const c=37,l=39;const d=function(e){const{lazy:t,block:n,defaultValue:d,values:m,groupId:p,className:u}=e,{tabGroupChoices:v,setTabGroupChoices:f}=(0,s.Z)(),[w,h]=(0,r.useState)(d),g=r.Children.toArray(e.children),b=[];if(null!=p){const e=v[p];null!=e&&e!==w&&m.some((t=>t.value===e))&&h(e)}const y=e=>{const t=e.currentTarget,n=b.indexOf(t),r=m[n].value;h(r),null!=p&&(f(p,r),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:r,right:s}=e.getBoundingClientRect(),{innerHeight:i,innerWidth:a}=window;return t>=0&&s<=a&&r<=i&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((()=>t.classList.remove(o)),2e3))}),150))},k=e=>{var t;let n;switch(e.keyCode){case l:{const t=b.indexOf(e.target)+1;n=b[t]||b[0];break}case c:{const t=b.indexOf(e.target)-1;n=b[t]||b[b.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},u)},m.map((({value:e,label:t})=>r.createElement("li",{role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,className:(0,i.Z)("tabs__item",a,{"tabs__item--active":w===e}),key:e,ref:e=>b.push(e),onKeyDown:k,onFocus:y,onClick:y},t)))),t?(0,r.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}},9443:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(7294),s=n(9443);const i=function(){const e=(0,r.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),r="/"===n?"/":t?(s=n).endsWith("/")?s:`${s}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(n);var s;return e.replace(n,r)}},8780:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var s=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(s).default}});var i=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},9964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1962:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(6742),s=n(7294),i=n(6010);const a="root_2PFE";function o({title:e,description:t,link:n}){return s.createElement("div",{className:(0,i.Z)("card-demo",a)},s.createElement("div",{className:"card"},s.createElement("div",{className:"card__header"},s.createElement("h3",null,e)),s.createElement("div",{className:"card__body"},s.createElement("p",null,t)),s.createElement("div",{className:"card__footer"},s.createElement(r.Z,{className:"button button--secondary button--block",to:n},"Get Started"))))}},7763:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(7294);const s="root_NqT0";function i({children:e}){return r.createElement("div",{className:s},e)}},3923:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>a,metadata:()=>o,toc:()=>c,default:()=>d});var r=n(2122),s=(n(7294),n(3905));const i={},a=void 0,o={unversionedId:"web/snippets/framework-components",id:"web/snippets/framework-components",isDocsHomePage:!1,title:"framework-components",description:"This example uses VertiGIS Studio Web layout components",source:"@site/docs/web/snippets/framework-components.mdx",sourceDirName:"web/snippets",slug:"/web/snippets/framework-components",permalink:"/docs/web/snippets/framework-components",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/snippets/framework-components.mdx",version:"current",frontMatter:{}},c=[],l={toc:c};function d({components:e,...t}){return(0,s.kt)("wrapper",(0,r.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"This example uses VertiGIS Studio Web layout components"))))}d.isMDXComponent=!0},6088:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>a,metadata:()=>o,toc:()=>c,default:()=>d});var r=n(2122),s=(n(7294),n(3905));const i={},a=void 0,o={unversionedId:"web/snippets/prereqs-custom-code",id:"web/snippets/prereqs-custom-code",isDocsHomePage:!1,title:"prereqs-custom-code",description:"-   Download and setup the VertiGIS Studio Web SDK.",source:"@site/docs/web/snippets/prereqs-custom-code.mdx",sourceDirName:"web/snippets",slug:"/web/snippets/prereqs-custom-code",permalink:"/docs/web/snippets/prereqs-custom-code",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/snippets/prereqs-custom-code.mdx",version:"current",frontMatter:{}},c=[],l={toc:c};function d({components:e,...t}){return(0,s.kt)("wrapper",(0,r.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Download and setup the ",(0,s.kt)("a",{parentName:"li",href:"/docs/web/sdk-overview"},"VertiGIS Studio Web SDK"),"."),(0,s.kt)("li",{parentName:"ul"},"Check out the ",(0,s.kt)("a",{parentName:"li",href:"/docs/web/sdk-deployment#uploading-custom-code-to-an-app"},"deployment instructions")," to learn more about deploying custom code to a VertiGIS Studio Web App.")))}d.isMDXComponent=!0},5277:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>u,metadata:()=>v,toc:()=>f,default:()=>h});var r=n(2122),s=(n(7294),n(3905)),i=n(4996),a=n(1962),o=n(7763),c=n(6088),l=n(3923),d=n(1395),m=n(8215);const p={title:"Manage Dynamic Data with a Service",description:"VertiGIS Studio Web - Implement a service that manages dynamic data for a component"},u=void 0,v={unversionedId:"web/tutorial-service-dynamic-data",id:"web/tutorial-service-dynamic-data",isDocsHomePage:!1,title:"Manage Dynamic Data with a Service",description:"VertiGIS Studio Web - Implement a service that manages dynamic data for a component",source:"@site/docs/web/tutorial-service-dynamic-data.mdx",sourceDirName:"web",slug:"/web/tutorial-service-dynamic-data",permalink:"/docs/web/tutorial-service-dynamic-data",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/tutorial-service-dynamic-data.mdx",version:"current",frontMatter:{title:"Manage Dynamic Data with a Service",description:"VertiGIS Studio Web - Implement a service that manages dynamic data for a component"},sidebar:"web",previous:{title:"Using the canExecute Command Hook",permalink:"/docs/web/tutorial-command-can-execute"},next:{title:"Commands, Operations and Events Reference",permalink:"/docs/web/api-commands-operations-events"}},f=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Create and Register the Service",id:"create-and-register-the-service",children:[]},{value:"Mock a Sporadically Updated Data Source",id:"mock-a-sporadically-updated-data-source",children:[]},{value:"Consume the Data in the Component",id:"consume-the-data-in-the-component",children:[]},{value:"Complete Example",id:"complete-example",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],w={toc:f};function h({components:e,...t}){return(0,s.kt)("wrapper",(0,r.Z)({},w,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"When extending VertiGIS Studio Web, you may find yourself creating multiple ",(0,s.kt)("a",{parentName:"p",href:"/docs/web/sdk-components-overview"},"components")," that have a shared concern, like a data source, or a REST endpoint call. Shared concerns like this present a good use case for creating a ",(0,s.kt)("a",{parentName:"p",href:"/docs/web/sdk-services-create"},"custom service"),".\nImplementing a custom service in VertiGIS Studio Web allows you to implement logic and shared resources that are available on startup to any component. Custom Services are also the recommended way of registering implementations for ",(0,s.kt)("a",{parentName:"p",href:"/docs/web/sdk-commands-operations#implementing-commands-and-operations"},"custom commands and operations"),"."),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)(c.default,{mdxType:"PrereqsCustomCodeSnippet"}),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("p",null,"In this article, we will build a custom service that mocks a periodic fetch of data from a REST endpoint and stores that data for consumption by components. This service will populate a list of news items which will be consumed by a news feed component."),(0,s.kt)("h2",{id:"create-and-register-the-service"},"Create and Register the Service"),(0,s.kt)("p",null,"Create a new folder structure with the following files. These files define a new service and export it from the ",(0,s.kt)("inlineCode",{parentName:"p"},"CustomService")," folder."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"src/services/CustomDataService/CustomDataService.ts")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"src/services/CustomDataService/index.ts"))),(0,s.kt)(d.Z,{defaultValue:"service",values:[{label:"Service",value:"service"},{label:"Index",value:"index"}],mdxType:"Tabs"},(0,s.kt)(m.Z,{value:"service",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/services/CustomDataService/CustomDataService.ts"',title:'"src/services/CustomDataService/CustomDataService.ts"'},'import { ServiceBase } from "@vertigis/web/services";\n\nexport default class CustomDataService extends ServiceBase {}\n'))),(0,s.kt)(m.Z,{value:"index",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/services/CustomDataService/index.ts"',title:'"src/services/CustomDataService/index.ts"'},'export { default } from "./CustomDataService";\n')))),(0,s.kt)("p",null,"Every service needs to be registered with the Web SDK in order to be discovered and initialized."),(0,s.kt)("p",null,"Add a call to ",(0,s.kt)("inlineCode",{parentName:"p"},"registerService")," in ",(0,s.kt)("inlineCode",{parentName:"p"},"src/index.ts"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'export default function(registry: LibraryRegistry) {\n    ...\n    registry.registerService({\n        id: "custom-service",\n        getService: (config) => new CustomService(config),\n    })\n    ...\n}\n')),(0,s.kt)("h2",{id:"mock-a-sporadically-updated-data-source"},"Mock a Sporadically Updated Data Source"),(0,s.kt)("p",null,"The purpose of this service will be to create a mock data source for the a news feed component. We can mock a sporadically updated news feed data source, simulating what a real news feed, with data arriving at unknown intervals, might behave like. This service will expose a single public property, ",(0,s.kt)("inlineCode",{parentName:"p"},"newsItems")," which will act as a dynamic data source for the news feed component."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/services/CustomDataService/CustomDataService.ts"',title:'"src/services/CustomDataService/CustomDataService.ts"'},'import { ServiceBase } from "@vertigis/web/services";\nimport Collection from "esri/core/Collection";\n\nconst newsItems = [\n    "New fire hydrant installed at Main and 5th.",\n    "Pipe burst at 4th and Broadview",\n    "Fire hydrant reported as needs maintenance by citizen.",\n    "Crack in road on the Johnson Street Bridge",\n    "Fire Hydrant vandalized in front of City Hall",\n];\n\nexport default class CustomDataService extends ServiceBase {\n    private _curIndex = 0;\n\n    // highlight-next-line\n    newsItems: Collection<string> = new Collection<string>();\n\n    private async _fetchRecentNews() {\n        // REST request for a news item would go here.\n        return newsItems[this._curIndex++ % newsItems.length];\n    }\n\n    // In a real application, you would want to subscribe to a\n    // data source and not use polling.\n    private _startPollingForNewItems() {\n        const fetchNewsLoop = async () => {\n            const newNews = await this._fetchRecentNews();\n            let curTime = new Date().toTimeString().split("GMT")[0];\n            this.newsItems.unshift(`${curTime}- ${newNews}`);\n            setTimeout(fetchNewsLoop, Math.random() * 6000);\n        };\n\n        fetchNewsLoop();\n    }\n\n    // highlight-start\n    protected _onInitialize(): Promise<void> {\n        super._onInitialize();\n        this._startPollingForNewItems();\n    }\n    // highlight-end\n}\n')),(0,s.kt)("h2",{id:"consume-the-data-in-the-component"},"Consume the Data in the Component"),(0,s.kt)("p",null,"Now that we have the news feed data being populated by a service, we need to consume that data in the news feed component.\nFollowing the best practices for implementing components, the news item data should be managed by the news feed model. Component Models can ",(0,s.kt)("a",{parentName:"p",href:"/docs/web/sdk-components-injecting-services"},"inject services")," as properties, and doing so allows us to directly access the dynamically updated ",(0,s.kt)("inlineCode",{parentName:"p"},"newsItems")," property on the service."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/components/NewsFeed//NewsFeedModel.ts"',title:'"src/components/NewsFeed//NewsFeedModel.ts"'},'import {\n    ComponentModelBase,\n    serializable,\n} from "@vertigis/web/models";\nimport Collection from "esri/core/Collection";\nimport CustomDataService from "../../services/CustomDataService";\nimport { inject } from "@vertigis/web/services";\n\n@serializable\nexport default class NewsFeedModel extends ComponentModelBase {\n    @inject("custom-data-service")\n    customDataService: CustomDataService | undefined;\n\n    /**\n     * Collection of items to display in the news feed\n     */\n    get newsItems(): Collection<string> {\n        if (\n            this.customDataService &&\n            this.customDataService.newsItems !== undefined\n        ) {\n            return this.customDataService.newsItems;\n        } else {\n            this.messages.commands.ui.displayNotification.execute({\n                message:\n                    "Could not retrieve news items from dynamic data source.",\n            });\n        }\n    }\n}\n')),(0,s.kt)("h2",{id:"complete-example"},"Complete Example"),(0,s.kt)("p",null,"Finally, we can bring it all together, and add the news item component and styling to the application. The news feed component watches for changes on the news feed model's ",(0,s.kt)("inlineCode",{parentName:"p"},"newsItems")," property, which is in turn linked to the custom service's ",(0,s.kt)("inlineCode",{parentName:"p"},"newsItems")," property. In this way, we've built a service which exposes shared data to components. Multiple news feed components could be created, and they would all rely on a single copy of the news items. For more information on how the news feed component was built, see the article on ",(0,s.kt)("a",{parentName:"p",href:"/docs/web/tutorial-implement-component-with-ui"},"custom components")," and ",(0,s.kt)("a",{parentName:"p",href:"/docs/web/tutorial-implement-component-participate-app-config"},"linking app config to custom components"),"."),(0,s.kt)(l.default,{mdxType:"FrameworkComponentsSnippet"}),(0,s.kt)(d.Z,{defaultValue:"component",values:[{label:"News Feed Component",value:"component"},{label:"News Feed Model",value:"model"},{label:"Css",value:"css"},{label:"Data Service",value:"service"},{label:"Registration",value:"index"},{label:"UI",value:"ui"}],mdxType:"Tabs"},(0,s.kt)(m.Z,{value:"service",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/services/CustomDataService/CustomDataService.ts"',title:'"src/services/CustomDataService/CustomDataService.ts"'},'import { ServiceBase } from "@vertigis/web/services";\nimport Collection from "esri/core/Collection";\n\nconst newsItems = [\n    "New fire hydrant installed at Main and 5th.",\n    "Pipe burst at 4th and Broadview",\n    "Fire hydrant reported as needs maintenance by citizen.",\n    "Crack in road on the Johnson Street Bridge",\n    "Fire Hydrant vandalized in front of City Hall",\n];\n\nexport default class CustomDataService extends ServiceBase {\n    private _curIndex = 0;\n\n    newsItems: Collection<string> = new Collection<string>();\n\n    private async _fetchRecentNews() {\n        // REST request for a news item would go here.\n        return newsItems[this._curIndex++ % newsItems.length];\n    }\n\n    private _startPollingForNewItems() {\n        const fetchNewsLoop = async () => {\n            const newNews = await this._fetchRecentNews();\n            const curTime = new Date().toTimeString().split("GMT")[0];\n            this.newsItems.unshift(`${curTime}- ${newNews}`);\n            setTimeout(fetchNewsLoop, Math.random() * 6000);\n        };\n\n        fetchNewsLoop();\n    }\n\n    protected _onInitialize(): Promise<void> {\n        super._onInitialize();\n        this._startPollingForNewItems();\n    }\n}\n'))),(0,s.kt)(m.Z,{value:"component",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/component/NewsFeed/NewsFeed.tsx"',title:'"src/component/NewsFeed/NewsFeed.tsx"'},'import React from "react";\nimport {\n    LayoutElement,\n    LayoutElementProperties,\n} from "@vertigis/web/components";\nimport "./NewsFeed.css";\nimport { NewsFeedModel } from ".";\nimport { useWatchCollectionAndRerender } from "@vertigis/web/ui/hooks";\nimport List from "@vertigis/web/ui/List";\nimport ListItem from "@vertigis/web/ui/ListItem";\nimport TitleBar from "@vertigis/web/ui/TitleBar";\nimport "./NewsFeed.css";\nimport Typography from "@vertigis/web/ui/Typography";\n\nexport default function NewsFeed(\n    props: LayoutElementProperties<NewsFeedModel>\n) {\n    const { model } = props;\n\n    useWatchCollectionAndRerender(model.newsItems);\n\n    return (\n        <LayoutElement {...props}>\n            <List className="news-item-list">\n                <TitleBar text="Recent News" />\n                {model.newsItems.toArray().map((news, idx) => (\n                    <ListItem key={idx}>\n                        <Typography>{news}</Typography>\n                    </ListItem>\n                ))}\n            </List>\n        </LayoutElement>\n    );\n}\n'))),(0,s.kt)(m.Z,{value:"model",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/component/NewsFeed/NewsFeedModel.ts"',title:'"src/component/NewsFeed/NewsFeedModel.ts"'},'import {\n    ComponentModelBase,\n    serializable,\n} from "@vertigis/web/models";\nimport Collection from "esri/core/Collection";\nimport CustomDataService from "../../services/CustomDataService";\nimport { inject } from "@vertigis/web/services";\n\n@serializable\nexport default class NewsFeedModel extends ComponentModelBase {\n    @inject("custom-data-service")\n    customDataService: CustomDataService | undefined;\n\n    /**\n     * Collection of items to display in the news feed\n     */\n    get newsItems(): Collection<string> {\n        if (\n            this.customDataService &&\n            this.customDataService.newsItems !== undefined\n        ) {\n            return this.customDataService.newsItems;\n        } else {\n            this.messages.commands.ui.displayNotification.execute({\n                message:\n                    "Could not retrieve news items from dynamic data source.",\n            });\n        }\n    }\n}\n'))),(0,s.kt)(m.Z,{value:"css",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="src/components/NewsFeed/NewsFeed.css"',title:'"src/components/NewsFeed/NewsFeed.css"'},".news-item-list {\n    max-height: 15em;\n    overflow: scroll;\n    padding: 1em;\n}\n"))),(0,s.kt)(m.Z,{value:"index",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/index.ts"',title:'"src/index.ts"'},'import CustomDataService from "./services/CustomDataService";\nimport NewsFeed, { NewsFeedModel } from "./components/NewsFeed";\nimport { LibraryRegistry } from "@vertigis/web/config";\n\nexport default function (registry: LibraryRegistry) {\n    registry.registerService({\n        // highlight-next-line\n        id: "custom-data-service",\n        getService: (config) => new CustomDataService(config),\n    });\n    registry.registerComponent({\n        name: "news-feed",\n        namespace: "your.custom.namespace",\n        getComponentType: () => NewsFeed,\n        itemType: "news-feed-model",\n        title: "News Feed",\n    });\n    registry.registerModel({\n        getModel: (config) => new NewsFeedModel(config),\n        itemType: "news-feed-model",\n    });\n}\n'))),(0,s.kt)(m.Z,{value:"ui",mdxType:"TabItem"},(0,s.kt)("img",{src:(0,i.Z)("img/web-implement-service-example.png")}))),(0,s.kt)("h2",{id:"next-steps"},"Next Steps"),(0,s.kt)(o.Z,{mdxType:"UseCaseContainer"},(0,s.kt)(a.Z,{title:"Check out the Component Reference",description:"Take a deep dive into components in the VertiGIS Studio Web SDK",link:(0,i.Z)("docs/web/sdk-components-reference"),mdxType:"UseCaseCard"}),(0,s.kt)(a.Z,{title:"Check out the Service Reference",description:"Take a deep dive into services in the VertiGIS Studio Web SDK",link:(0,i.Z)("docs/web/sdk-services-reference"),mdxType:"UseCaseCard"}),(0,s.kt)(a.Z,{title:"Learn more about Referencing Services in Components",description:"Learn the dependency injection pattern for referencing services",link:(0,i.Z)("docs/web/sdk-components-injecting-services"),mdxType:"UseCaseCard"})))}h.isMDXComponent=!0},6010:(e,t,n)=>{"use strict";function r(e){var t,n,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(s&&(s+=" "),s+=n);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}function s(){for(var e,t,n=0,s="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(s&&(s+=" "),s+=t);return s}n.d(t,{Z:()=>s})}}]);