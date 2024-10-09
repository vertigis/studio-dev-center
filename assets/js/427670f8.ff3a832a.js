"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[5960,3536],{1836:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>u,contentTitle:()=>c,default:()=>v,frontMatter:()=>l,metadata:()=>h,toc:()=>p});var o=n(7624),t=n(2172),s=n(964),r=n(4556),a=n(7528),d=n(7160);const l={title:"SDK Overview",description:"VertiGIS Studio Mobile - Learn how to get started with the VertiGIS Studio Mobile SDK"},c=void 0,h={id:"mobile/sdk-overview",title:"SDK Overview",description:"VertiGIS Studio Mobile - Learn how to get started with the VertiGIS Studio Mobile SDK",source:"@site/docs/mobile/sdk-overview.mdx",sourceDirName:"mobile",slug:"/mobile/sdk-overview",permalink:"/docs/mobile/sdk-overview",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/sdk-overview.mdx",tags:[],version:"current",frontMatter:{title:"SDK Overview",description:"VertiGIS Studio Mobile - Learn how to get started with the VertiGIS Studio Mobile SDK"},sidebar:"mobile",previous:{title:"Implement a Custom Activity",permalink:"/docs/mobile/tutorial-implement-custom-activity"},next:{title:"Edit the Layout and App Config",permalink:"/docs/mobile/sdk-edit-layout-app-config"}},u={},p=[...r.toc,{value:"Overview",id:"overview",level:2},{value:"Extension Points",id:"extension-points",level:2},{value:"Components",id:"components",level:3},{value:"Services",id:"services",level:3},{value:"Commands and Operations",id:"commands-and-operations",level:3},{value:"Application Interactions",id:"application-interactions",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Windows",id:"windows",level:3},{value:"iOS",id:"ios",level:3},{value:"Android",id:"android",level:3},{value:"Getting Up and Running",id:"getting-up-and-running",level:2},{value:"Build and run for Windows 10",id:"build-and-run-for-windows-10",level:3},{value:"Build and run for Android",id:"build-and-run-for-android",level:3},{value:"Build and run for iOS",id:"build-and-run-for-ios",level:3},{value:"Anatomy of the Quickstart",id:"anatomy-of-the-quickstart",level:2},{value:"VertiGIS Studio Mobile SDK Packages",id:"vertigis-studio-mobile-sdk-packages",level:3},{value:"Development Patterns",id:"development-patterns",level:2},{value:"Next Steps",id:"next-steps",level:2}];function m(e){const i={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i.p,{children:["If the built-in configurability of VertiGIS Studio Mobile does not serve your purposes, then it might be time to dive into the VertiGIS Studio Mobile SDK. Building applications on top of the VertiGIS Studio Mobile SDK requires engaging in the development, testing, and deployment of custom code, so it's worthwhile to make sure your problem cannot be solved ",(0,o.jsx)(i.a,{href:"/docs/mobile/overview",children:"with workflow or other advanced configuration"}),"."]}),"\n",(0,o.jsx)(i.p,{children:"If you still think you need to use the VertiGIS Studio Mobile SDK, then let's get started!"}),"\n",(0,o.jsx)(r.default,{}),"\n",(0,o.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsxs)(i.p,{children:["The VertiGIS Studio Mobile SDK provides ",(0,o.jsx)(i.a,{href:"#vertigis-studio-mobile-sdk-packages",children:"various nuget packages"})," for building a custom VertiGIS Studio Mobile application. Applications can extend VertiGIS Studio Mobile by developing custom components, services, commands and operations, and more using these packages."]}),"\n",(0,o.jsx)(i.h2,{id:"extension-points",children:"Extension Points"}),"\n",(0,o.jsx)(i.p,{children:"There are three main extension points in the SDK:"}),"\n",(0,o.jsx)(i.h3,{id:"components",children:"Components"}),"\n",(0,o.jsx)(i.p,{children:"Components power the UI experience of VertiGIS Studio Mobile. Components usually consist of a C# class registered with VertiGIS Studio Mobile that has an associated XAML view. Layout files are composed of a nested hierarchy of components which are instantiated at runtime."}),"\n",(0,o.jsx)(i.h3,{id:"services",children:"Services"}),"\n",(0,o.jsx)(i.p,{children:"Services provide the shared infrastructure and core logic that power app behavior. Services do not have an associated UI, and there is only one instance of a service per application."}),"\n",(0,o.jsx)(i.h3,{id:"commands-and-operations",children:"Commands and Operations"}),"\n",(0,o.jsxs)(i.p,{children:["Commands and operations provide a framework for executing application wide behavior. Services and components can both run and implement commands and operations, allowing for interaction and consistent behavior without tight coupling. Commands and operations can also be run ",(0,o.jsx)(i.a,{href:"/docs/mobile/tutorial-configure-button-click",children:"in the app config"})," and by ",(0,o.jsx)(i.a,{href:"https://docs.vertigisstudio.com/workflow/latest/help/run-command.html",children:"Workflows"}),". This can allow you to ",(0,o.jsx)(i.a,{href:"/docs/mobile/tutorial-change-default-behavior",children:"customize the behavior of built-in components"}),"."]}),"\n",(0,o.jsx)(i.h2,{id:"application-interactions",children:"Application Interactions"}),"\n",(0,o.jsx)(i.p,{children:"Components, services, and commands and operations interact to form a VertiGIS Studio Mobile Application."}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["Services are used to implement application wide behavior, such as theming or authentication, and then expose that logic through commands and operations, such as ",(0,o.jsx)(i.code,{children:"ui.set-theme"})," (implemented by the ",(0,o.jsx)(i.code,{children:"BrandingService"}),") or ",(0,o.jsx)(i.code,{children:"auth.sign"})," (implemented by the ",(0,o.jsx)(i.code,{children:"AuthenticationService"}),")."]}),"\n",(0,o.jsx)(i.li,{children:"Components can run commands and operations to interact with services or other components. Components can also implement commands and operations to allow themselves to be affected by other services and components."}),"\n",(0,o.jsxs)(i.li,{children:["Component and service interaction through commands and operations is preferred, but components and services can also be tightly coupled to each other through ",(0,o.jsx)(i.a,{href:"/docs/mobile/sdk-dependency-injection",children:"dependency injection"}),"."]}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"requirements",children:"Requirements"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"Visual Studio 2019 or higher on Windows is the only officially supported development environment for the VertiGIS Studio Mobile SDK. Other development environments may be possible, but have not been verified."}),"\n"]}),"\n",(0,o.jsx)(i.h3,{id:"windows",children:"Windows"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["Windows 10 - To run the app on Windows 10, you must have Fall Creators Update installed on your Windows development PC.","\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"The SDK targets Windows 10, version 1809 (10.0; Build 17763) or later."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.h3,{id:"ios",children:"iOS"}),"\n",(0,o.jsxs)(i.p,{children:["To be able to build iOS applications, you must have a Mac; Windows cannot build iOS applications.",(0,o.jsx)(i.br,{}),"\n","Setup is required to allow Visual Studio on Windows to use the Mac to build the iOS project."]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["See: ",(0,o.jsx)(i.a,{href:"https://docs.microsoft.com/en-us/xamarin/ios/get-started/installation/windows/",children:"iOS Build on Windows"})]}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"Required software on the Mac:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"XCode"}),"\n",(0,o.jsx)(i.li,{children:"Visual Studio for Mac"}),"\n"]}),"\n",(0,o.jsxs)(i.p,{children:["See the ",(0,o.jsx)(i.a,{href:"https://docs.microsoft.com/en-us/xamarin/ios/deploy-test/",children:"Xamarin guide"})," on deploying and testing iOS apps for more details."]}),"\n",(0,o.jsx)(i.h3,{id:"android",children:"Android"}),"\n",(0,o.jsxs)(i.p,{children:["No extra setup is required. You can install your emulator of choice, or debug on a physical device. See the ",(0,o.jsx)(i.a,{href:"https://docs.microsoft.com/en-us/xamarin/android/deploy-test/",children:"Xamarin guide"})," on deploying and testing Android apps for more detail."]}),"\n",(0,o.jsx)(i.h2,{id:"getting-up-and-running",children:"Getting Up and Running"}),"\n",(0,o.jsxs)(i.p,{children:["A ",(0,o.jsx)(i.a,{href:"https://github.com/vertigis/vertigis-mobile-quickstart",children:"VertiGIS Studio Mobile Quickstart"})," is provided, which is a basic VertiGIS Studio Mobile application. This Quickstart is essentially a ",(0,o.jsx)(i.a,{href:"https://docs.microsoft.com/en-us/xamarin/get-started/Quickstarts/single-page?pivots=windows",children:"Xamarin Forms Quickstart Application"})," that initializes and boots VertiGIS Studio Mobile on each platform. To get up and running, simply check out the ",(0,o.jsx)(i.a,{href:"https://github.com/vertigis/vertigis-mobile-quickstart",children:"Mobile Quickstart Repository"})," and start the solution on the appropriate platform."]}),"\n",(0,o.jsx)(i.admonition,{title:"Important",type:"info",children:(0,o.jsxs)(i.p,{children:["VertiGIS Studio Mobile is built on ",(0,o.jsx)(i.a,{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/",children:"Xamarin Forms"}),", a framework for building cross platform native apps. As a consequence, building non trivial extensions to VertiGIS Studio Mobile will require some Xamarin development knowledge."]})}),"\n",(0,o.jsx)(i.h3,{id:"build-and-run-for-windows-10",children:"Build and run for Windows 10"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["Set ",(0,o.jsx)(i.strong,{children:"App1.UWP"})," as your startup project."]}),"\n",(0,o.jsxs)(i.li,{children:["Change the architecture from ",(0,o.jsx)(i.em,{children:"Any CPU"})," to ",(0,o.jsx)(i.em,{children:"x86"})," or ",(0,o.jsx)(i.em,{children:"x64"}),"."]}),"\n",(0,o.jsx)(i.li,{children:"Build and run."}),"\n"]}),"\n",(0,o.jsx)(i.h3,{id:"build-and-run-for-android",children:"Build and run for Android"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["Set ",(0,o.jsx)(i.strong,{children:"App1.Android"})," as your startup project."]}),"\n",(0,o.jsxs)(i.li,{children:["Choose your target device or emulator from the run dropdown in the toolbar.","\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"Please note that building and deploying to an emulator is faster than using a device."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.li,{children:"Build and run."}),"\n"]}),"\n",(0,o.jsx)(i.admonition,{type:"note",children:(0,o.jsx)(i.p,{children:"This build can also be run from Visual Studio for Mac."})}),"\n",(0,o.jsx)(i.h3,{id:"build-and-run-for-ios",children:"Build and run for iOS"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["Set ",(0,o.jsx)(i.strong,{children:"App1.iOS"})," as your startup project."]}),"\n",(0,o.jsxs)(i.li,{children:["Ensure you are ",(0,o.jsx)(i.a,{href:"https://docs.microsoft.com/en-us/xamarin/ios/get-started/installation/windows/connecting-to-mac/",children:"paired with a Mac"})]}),"\n",(0,o.jsxs)(i.li,{children:["Choose your target device (must be plugged into Mac) or simulator from the run dropdown in the toolbar.","\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"Please note that building and deploying to a simulator is faster than using a device."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.li,{children:"Build and run."}),"\n"]}),"\n",(0,o.jsx)(i.admonition,{type:"note",children:(0,o.jsx)(i.p,{children:"This build can also be run from Visual Studio for Mac."})}),"\n",(0,o.jsx)(i.h2,{id:"anatomy-of-the-quickstart",children:"Anatomy of the Quickstart"}),"\n",(0,o.jsxs)(i.p,{children:["The Quickstart is composed of four projects, one for each platform, and a common project that is shared by all platforms. This is a standard Xamarin Forms setup, as described ",(0,o.jsx)(i.a,{href:"https://docs.microsoft.com/en-us/xamarin/get-started/Quickstarts/deepdive?pivots=windows#anatomy-of-a-xamarinforms-application",children:"in their documentation"}),". Changes have been made to each project to support the ",(0,o.jsx)(i.a,{href:"/docs/mobile/sdk-quickstart-reference#entry-points",children:"bootstrapping of a VertiGIS Studio Mobile application"})," using the SDK."]}),"\n",(0,o.jsx)(i.h3,{id:"vertigis-studio-mobile-sdk-packages",children:"VertiGIS Studio Mobile SDK Packages"}),"\n",(0,o.jsx)(i.p,{children:"The VertiGIS Studio Mobile SDK is composed of VertiGIS Studio packages:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"Vertigis Mobile"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"This package is the heart of the Mobile SDK, and powers the interface and interactions of a Mobile Xamarin Application."}),"\n",(0,o.jsxs)(i.li,{children:["This package includes the ",(0,o.jsx)(i.code,{children:"VertiGIS.ArcGISExtensions"})," namespace, an API for working with foundational VertiGIS Studio models, configuration, Esri's ArcGIS types, etc."]}),"\n",(0,o.jsxs)(i.li,{children:["This package includes the ",(0,o.jsx)(i.code,{children:"VertiGIS.Mobile.Workflow"})," namespace, which includes components and renderers for VertiGIS Studio Workflow controls in a Mobile app."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"VertiGIS Studio Workflow"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["VertiGIS Studio Mobile heavily relies on ",(0,o.jsx)(i.a,{href:"/docs/workflow/overview",children:"VertiGIS Studio Workflow"})," to power its functionality."]}),"\n",(0,o.jsx)(i.li,{children:"VertiGIS Studio Workflow is itself composed of many packages (Image Activities, GIS, Runtime)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"development-patterns",children:"Development Patterns"}),"\n",(0,o.jsxs)(i.p,{children:["For the most part, the VertiGIS Studio Mobile project follows the development practices outlined in ",(0,o.jsx)(i.a,{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/enterprise-application-patterns/",children:"Enterprise Application Patterns using Xamarin.Forms"}),"."]}),"\n",(0,o.jsxs)(i.p,{children:["One major deviation from usual Xamarin Development patterns is that ",(0,o.jsx)(i.a,{href:"https://autofac.org/",children:"Autofac"})," is used as the Dependency Injection framework."]}),"\n",(0,o.jsx)(i.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,o.jsxs)(d.c,{children:[(0,o.jsx)(a.c,{title:"Create a Component",description:"Learn how to create a basic component",link:(0,s.c)("docs/mobile/sdk-components-create")}),(0,o.jsx)(a.c,{title:"Create a Service",description:"Learn how to create a basic service",link:(0,s.c)("docs/mobile/sdk-services-create")}),(0,o.jsx)(a.c,{title:"Deploy your Application",description:"Learn how to deploy your custom library, layout and app config",link:(0,s.c)("docs/mobile/sdk-deployment")})]})]})}function v(e={}){const{wrapper:i}={...(0,t.M)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},4556:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=n(7624),t=n(2172);const s={},r=void 0,a={id:"mobile/snippets/designer-callout",title:"designer-callout",description:"The VertiGIS Studio Mobile Designer allows you to edit your application's layout, configure custom behaviors for buttons and other UI components, and solve complex business problems through VertiGIS Studio Workflow. Many use cases can be solved through the VertiGIS Studio Mobile Designer and don't require custom development.",source:"@site/docs/mobile/snippets/designer-callout.mdx",sourceDirName:"mobile/snippets",slug:"/mobile/snippets/designer-callout",permalink:"/docs/mobile/snippets/designer-callout",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/snippets/designer-callout.mdx",tags:[],version:"current",frontMatter:{}},d={},l=[];function c(e){const i={a:"a",admonition:"admonition",p:"p",...(0,t.M)(),...e.components};return(0,o.jsx)(i.admonition,{title:"Have you explored the VertiGIS Studio Mobile Designer?",type:"note",children:(0,o.jsxs)(i.p,{children:["The ",(0,o.jsx)(i.a,{href:"https://apps.vertigisstudio.com/mobile/designer/",children:"VertiGIS Studio Mobile Designer"})," allows you to edit your application's layout, configure custom behaviors for buttons and other UI components, and solve complex business problems through ",(0,o.jsx)(i.a,{href:"/docs/workflow/overview",children:"VertiGIS Studio Workflow"}),". Many use cases can be solved through the VertiGIS Studio Mobile Designer and don't require custom development."]})})}function h(e={}){const{wrapper:i}={...(0,t.M)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},7528:(e,i,n)=>{n.d(i,{c:()=>a});var o=n(867),t=(n(1504),n(4971));const s={root:"root_Uwqo"};var r=n(7624);function a({title:e,description:i,link:n}){return(0,r.jsx)("div",{className:(0,t.c)("card-demo",s.root),children:(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("div",{className:"card__header",children:(0,r.jsx)("h3",{children:e})}),(0,r.jsx)("div",{className:"card__body",children:(0,r.jsx)("p",{children:i})}),(0,r.jsx)("div",{className:"card__footer",children:(0,r.jsx)(o.c,{className:"button button--secondary button--block",to:n,children:"Get Started"})})]})})}},7160:(e,i,n)=>{n.d(i,{c:()=>s});n(1504);const o={root:"root_vxd5"};var t=n(7624);function s({children:e}){return(0,t.jsx)("div",{className:o.root,children:e})}},4971:(e,i,n)=>{function o(e){var i,n,t="";if("string"==typeof e||"number"==typeof e)t+=e;else if("object"==typeof e)if(Array.isArray(e))for(i=0;i<e.length;i++)e[i]&&(n=o(e[i]))&&(t&&(t+=" "),t+=n);else for(i in e)e[i]&&(t&&(t+=" "),t+=i);return t}n.d(i,{c:()=>t});const t=function(){for(var e,i,n=0,t="";n<arguments.length;)(e=arguments[n++])&&(i=o(e))&&(t&&(t+=" "),t+=i);return t}},2172:(e,i,n)=>{n.d(i,{I:()=>a,M:()=>r});var o=n(1504);const t={},s=o.createContext(t);function r(e){const i=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(s.Provider,{value:i},e.children)}}}]);