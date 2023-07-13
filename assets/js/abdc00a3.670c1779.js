"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[6547,8512],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(o),u=i,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return o?n.createElement(h,a(a({ref:t},p),{},{components:o})):n.createElement(h,a({ref:t},p))}));function h(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},5858:(e,t,o)=>{o.d(t,{Z:()=>s});var n=o(9960),i=o(7294),r=o(6010);const a={root:"root_Uwqo"};function s(e){let{title:t,description:o,link:s}=e;return i.createElement("div",{className:(0,r.Z)("card-demo",a.root)},i.createElement("div",{className:"card"},i.createElement("div",{className:"card__header"},i.createElement("h3",null,t)),i.createElement("div",{className:"card__body"},i.createElement("p",null,o)),i.createElement("div",{className:"card__footer"},i.createElement(n.Z,{className:"button button--secondary button--block",to:s},"Get Started"))))}},7467:(e,t,o)=>{o.d(t,{Z:()=>r});var n=o(7294);const i={root:"root_vxd5"};function r(e){let{children:t}=e;return n.createElement("div",{className:i.root},t)}},7012:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var n=o(7462),i=(o(7294),o(3905)),r=o(4996),a=o(9801),s=o(5858),l=o(7467);const c={title:"SDK Overview",description:"VertiGIS Studio Web - Learn how to get started with the VertiGIS Studio Web SDK"},p=void 0,d={unversionedId:"web/sdk-overview",id:"web/sdk-overview",title:"SDK Overview",description:"VertiGIS Studio Web - Learn how to get started with the VertiGIS Studio Web SDK",source:"@site/docs/web/sdk-overview.mdx",sourceDirName:"web",slug:"/web/sdk-overview",permalink:"/docs/web/sdk-overview",draft:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/sdk-overview.mdx",tags:[],version:"current",frontMatter:{title:"SDK Overview",description:"VertiGIS Studio Web - Learn how to get started with the VertiGIS Studio Web SDK"},sidebar:"web",previous:{title:"Implement a Custom Form Element",permalink:"/docs/web/tutorial-implement-custom-form-elements"},next:{title:"SDK Samples",permalink:"/docs/web/sdk-samples"}},m={},u=[{value:"Overview",id:"overview",level:2},{value:"Extension Points",id:"extension-points",level:2},{value:"Components",id:"components",level:3},{value:"Services",id:"services",level:3},{value:"Commands and Operations",id:"commands-and-operations",level:3},{value:"Application Interactions",id:"application-interactions",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Project Structure",id:"project-structure",level:2},{value:"Library Entry Point",id:"library-entry-point",level:3},{value:"Development Patterns",id:"development-patterns",level:2},{value:"Next Steps",id:"next-steps",level:2}],h={toc:u},v="wrapper";function b(e){let{components:t,...o}=e;return(0,i.kt)(v,(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If the built-in configurability of VertiGIS Studio Web does not serve your purposes, then it might be time to dive into the VertiGIS Studio Web SDK. Building applications on top of the VertiGIS Studio Web SDK requires engaging in the development, testing, and deployment of custom code, so it's worthwhile to make sure your problem cannot be solved ",(0,i.kt)("a",{parentName:"p",href:"/docs/web/overview"},"with workflow or other advanced configuration"),"."),(0,i.kt)("p",null,"If you still think you need to use the VertiGIS Studio Web SDK, then let's get started!"),(0,i.kt)(a.default,{mdxType:"DesignerCallout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The VertiGIS Studio Web SDK provides a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/vertigis/vertigis-web-sdk"},"development toolkit")," for building ",(0,i.kt)("a",{parentName:"p",href:"/docs/web/sdk-components-create"},"custom components"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/web/sdk-services-create"},"services"),", and more into a package that can be deployed to VertiGIS Studio Web called a ",(0,i.kt)("em",{parentName:"p"},"library"),". Once the ",(0,i.kt)("em",{parentName:"p"},"library")," has been developed, it can then be ",(0,i.kt)("a",{parentName:"p",href:"/docs/web/sdk-deployment"},"deployed")," to your SaaS or on-premises environment."),(0,i.kt)("h2",{id:"extension-points"},"Extension Points"),(0,i.kt)("p",null,"There are three main extension points in the SDK:"),(0,i.kt)("h3",{id:"components"},"Components"),(0,i.kt)("p",null,"Components power the UI experience of VertiGIS Studio Web. Components are composed of a React Component and a backing data model. Layout files are composed of a nested hierarchy of components which are instantiated at runtime."),(0,i.kt)("h3",{id:"services"},"Services"),(0,i.kt)("p",null,"Services provide the shared infrastructure and core logic that power app behavior. Services do not have an associated UI, and there is only one instance of a service per application."),(0,i.kt)("h3",{id:"commands-and-operations"},"Commands and Operations"),(0,i.kt)("p",null,"Commands and operations provide a framework for executing application wide behavior. Services and components can both run and implement commands and operations, allowing for interaction and consistent behavior without tight coupling. Commands and operations can also be run ",(0,i.kt)("a",{parentName:"p",href:"/docs/web/tutorial-configure-button-click"},"in the app config")," and by ",(0,i.kt)("a",{parentName:"p",href:"https://docs.vertigisstudio.com/workflow/latest/help/Default.htm#wf5/help/activities/run-command.htm"},"Workflows"),". This can allow you to ",(0,i.kt)("a",{parentName:"p",href:"/docs/web/tutorial-change-default-behavior"},"customize the behavior of built-in components"),"."),(0,i.kt)("h2",{id:"application-interactions"},"Application Interactions"),(0,i.kt)("p",null,"Components, services, and commands and operations interact to form a VertiGIS Studio Web Application."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Services are used to implement application wide behavior, such as theming or authentication, and then expose that logic through commands and operations, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"ui.set-theme")," (implemented by the ",(0,i.kt)("inlineCode",{parentName:"li"},"BrandingService"),") or ",(0,i.kt)("inlineCode",{parentName:"li"},"auth.sign")," (implemented by the ",(0,i.kt)("inlineCode",{parentName:"li"},"AuthenticationService"),")."),(0,i.kt)("li",{parentName:"ul"},"Components can run commands and operations to interact with services or other components. Components can also implement commands and operations to allow themselves to be affected by other services and components."),(0,i.kt)("li",{parentName:"ul"},"Component and service interaction through commands and operations is preferred, but components and services can also be tightly coupled to each other through ",(0,i.kt)("a",{parentName:"li",href:"/docs/web/sdk-components-interactions#importing-models"},"model injection")," or ",(0,i.kt)("a",{parentName:"li",href:"/docs/web/sdk-services-injecting-services"},"service injection"),".")),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The latest LTS version of ",(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You can run ",(0,i.kt)("inlineCode",{parentName:"li"},"node -v")," in your terminal to check the version you have installed"))),(0,i.kt)("li",{parentName:"ul"},"A code editor of your choice. We recommend ",(0,i.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"Visual Studio Code"))),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"npx @vertigis/web-sdk@latest create <library-name>")," where ",(0,i.kt)("inlineCode",{parentName:"li"},"<library-name>")," is the name of the directory that will be created in the current working directory",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For example: ",(0,i.kt)("inlineCode",{parentName:"li"},"npx @vertigis/web-sdk@latest create test-lib")))),(0,i.kt)("li",{parentName:"ol"},"Open the ",(0,i.kt)("inlineCode",{parentName:"li"},"library-name")," directory in your favorite IDE. We recommend using Visual Studio Code for the best experience."),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"npm start")," to start the development server")),(0,i.kt)("p",null,"The running development server automatically detects changes to your source files. You can simply edit the layout, config, or custom code and the development server will automatically refresh the application with the latest changes."),(0,i.kt)("h2",{id:"project-structure"},"Project Structure"),(0,i.kt)("p",null,"The created project contains a few important directories:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"src")," directory, which contains your custom library code. We've included a sample component to get you started"),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"app")," directory, which contains a minimal development application ",(0,i.kt)("a",{parentName:"li",href:"/docs/web/key-concepts"},"layout and app config")," to be used for testing your custom code before deployment to production")),(0,i.kt)("h3",{id:"library-entry-point"},"Library Entry Point"),(0,i.kt)("p",null,"The VertiGIS Studio Web SDK compiles custom components, services, and commands and operations into a library. The library is defined by the registration function exported from ",(0,i.kt)("inlineCode",{parentName:"p"},"src/index.ts"),". This registration code informs VertiGIS Studio Web about the components, services, and commands and operations in your library so that they can be referenced in the app config and layout."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/index.ts"',title:'"src/index.ts"'},'export default function (registry: LibraryRegistry) {\n    registry.registerService({\n        id: "custom-service",\n        getService: (config) => new CustomService(config),\n    });\n    registry.registerComponent({\n        name: "custom-component",\n        namespace: "your.custom.namespace",\n        getComponentType: () => CustomComponent,\n        itemType: "custom-component-model",\n        title: "Custom Component",\n    });\n    registry.registerModel({\n        getModel: (config) => new CustomComponentModel(config),\n        itemType: "custom-component-model",\n    });\n    registry.registerCommand({\n        name: "my.custom-command",\n        serviceId: "custom-service",\n    });\n    registry.registerOperation({\n        name: "my.custom-operation",\n        serviceId: "custom-service",\n    });\n}\n')),(0,i.kt)("h2",{id:"development-patterns"},"Development Patterns"),(0,i.kt)("p",null,"If you are developing custom code that is mostly independent of app context, we suggest that you use the minimal layout and app config with only the required components."),(0,i.kt)("p",null,"If you need to develop custom code that requires the context of a custom application built in VertiGIS Studio Web Designer, take the following steps to import your SaaS or on-premises application into your local Web SDK environment."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open your application in VertiGIS Studio Web Designer."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://docs.vertigisstudio.com/webviewer/latest/admin-help/Default.htm#gwv/download-app-configuration.htm"},"Download the application configuration"),"."),(0,i.kt)("li",{parentName:"ol"},"Delete the contents of the ",(0,i.kt)("inlineCode",{parentName:"li"},"app")," directory."),(0,i.kt)("li",{parentName:"ol"},"Extract the contents to you in your Web SDK Applications ",(0,i.kt)("inlineCode",{parentName:"li"},"app")," directory, overwriting existing app config and layout."),(0,i.kt)("li",{parentName:"ol"},"Develop your custom code on top of your existing application.")),(0,i.kt)("admonition",{title:"Important",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You may need to rename the downloaded layout file to ",(0,i.kt)("inlineCode",{parentName:"p"},"layout.xml"),".")),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)(l.Z,{mdxType:"UseCaseContainer"},(0,i.kt)(s.Z,{title:"Create a Component",description:"Learn how to create a basic component",link:(0,r.Z)("docs/web/sdk-components-create"),mdxType:"UseCaseCard"}),(0,i.kt)(s.Z,{title:"Create a Service",description:"Learn how to create a basic service",link:(0,r.Z)("docs/web/sdk-services-create"),mdxType:"UseCaseCard"}),(0,i.kt)(s.Z,{title:"Deploy your Application",description:"Learn how to deploy your custom library, layout and app config",link:(0,r.Z)("docs/web/sdk-deployment"),mdxType:"UseCaseCard"}),(0,i.kt)(s.Z,{title:"SDK Samples",description:"Check out a collection of samples that demonstrate how to configure and customize VertiGIS Studio Web apps using the VertiGIS Studio Web SDK",link:(0,r.Z)("docs/web/sdk-samples"),mdxType:"UseCaseCard"})))}b.isMDXComponent=!0},9801:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=o(7462),i=(o(7294),o(3905));const r={},a=void 0,s={unversionedId:"web/snippets/designer-callout",id:"web/snippets/designer-callout",title:"designer-callout",description:"The VertiGIS Studio Web Designer allows you to edit your application's layout, configure custom behaviors for buttons and other UI components, and solve complex business problems through VertiGIS Studio Workflow. Many use cases can be solved through the VertiGIS Studio Web Designer and don't require custom development.",source:"@site/docs/web/snippets/designer-callout.mdx",sourceDirName:"web/snippets",slug:"/web/snippets/designer-callout",permalink:"/docs/web/snippets/designer-callout",draft:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/snippets/designer-callout.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[],p={toc:c},d="wrapper";function m(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Have you explored the VertiGIS Studio Web Designer?",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("a",{parentName:"p",href:"https://apps.vertigisstudio.com/web/designer/"},"VertiGIS Studio Web Designer")," allows you to edit your application's layout, configure custom behaviors for buttons and other UI components, and solve complex business problems through ",(0,i.kt)("a",{parentName:"p",href:"/docs/workflow/overview"},"VertiGIS Studio Workflow"),". Many use cases can be solved through the VertiGIS Studio Web Designer and don't require custom development.")))}m.isMDXComponent=!0}}]);