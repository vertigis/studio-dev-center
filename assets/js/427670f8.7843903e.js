"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[6931,4985],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>h});var o=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=o.createContext({}),d=function(e){var t=o.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(i),m=n,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||a;return i?o.createElement(h,r(r({ref:t},p),{},{components:i})):o.createElement(h,r({ref:t},p))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,r=new Array(a);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,r[1]=s;for(var d=2;d<a;d++)r[d]=i[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,i)}m.displayName="MDXCreateElement"},5858:(e,t,i)=>{i.d(t,{Z:()=>s});var o=i(9960),n=i(7294),a=i(6010);const r={root:"root_Uwqo"};function s(e){let{title:t,description:i,link:s}=e;return n.createElement("div",{className:(0,a.Z)("card-demo",r.root)},n.createElement("div",{className:"card"},n.createElement("div",{className:"card__header"},n.createElement("h3",null,t)),n.createElement("div",{className:"card__body"},n.createElement("p",null,i)),n.createElement("div",{className:"card__footer"},n.createElement(o.Z,{className:"button button--secondary button--block",to:s},"Get Started"))))}},7467:(e,t,i)=>{i.d(t,{Z:()=>a});var o=i(7294);const n={root:"root_vxd5"};function a(e){let{children:t}=e;return o.createElement("div",{className:n.root},t)}},415:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>v,frontMatter:()=>d,metadata:()=>u,toc:()=>m});var o=i(7462),n=(i(7294),i(3905)),a=i(4996),r=i(1693),s=i(5858),l=i(7467);const d={title:"SDK Overview",description:"VertiGIS Studio Mobile - Learn how to get started with the VertiGIS Studio Mobile SDK"},p=void 0,u={unversionedId:"mobile/sdk-overview",id:"mobile/sdk-overview",title:"SDK Overview",description:"VertiGIS Studio Mobile - Learn how to get started with the VertiGIS Studio Mobile SDK",source:"@site/docs/mobile/sdk-overview.mdx",sourceDirName:"mobile",slug:"/mobile/sdk-overview",permalink:"/docs/mobile/sdk-overview",draft:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/sdk-overview.mdx",tags:[],version:"current",frontMatter:{title:"SDK Overview",description:"VertiGIS Studio Mobile - Learn how to get started with the VertiGIS Studio Mobile SDK"},sidebar:"mobile",previous:{title:"Implement a Custom Activity",permalink:"/docs/mobile/tutorial-implement-custom-activity"},next:{title:"Edit the Layout and App Config",permalink:"/docs/mobile/sdk-edit-layout-app-config"}},c={},m=[{value:"Overview",id:"overview",level:2},{value:"Extension Points",id:"extension-points",level:2},{value:"Components",id:"components",level:3},{value:"Services",id:"services",level:3},{value:"Commands and Operations",id:"commands-and-operations",level:3},{value:"Application Interactions",id:"application-interactions",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Windows",id:"windows",level:3},{value:"iOS",id:"ios",level:3},{value:"Android",id:"android",level:3},{value:"Getting Up and Running",id:"getting-up-and-running",level:2},{value:"Build and run for Windows 10",id:"build-and-run-for-windows-10",level:3},{value:"Build and run for Android",id:"build-and-run-for-android",level:3},{value:"Build and run for iOS",id:"build-and-run-for-ios",level:3},{value:"Anatomy of the Quickstart",id:"anatomy-of-the-quickstart",level:2},{value:"VertiGIS Studio Mobile SDK Packages",id:"vertigis-studio-mobile-sdk-packages",level:3},{value:"Development Patterns",id:"development-patterns",level:2},{value:"Next Steps",id:"next-steps",level:2}],h={toc:m},k="wrapper";function v(e){let{components:t,...i}=e;return(0,n.kt)(k,(0,o.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"If the built-in configurability of VertiGIS Studio Mobile does not serve your purposes, then it might be time to dive into the VertiGIS Studio Mobile SDK. Building applications on top of the VertiGIS Studio Mobile SDK requires engaging in the development, testing, and deployment of custom code, so it's worthwhile to make sure your problem cannot be solved ",(0,n.kt)("a",{parentName:"p",href:"/docs/mobile/overview"},"with workflow or other advanced configuration"),"."),(0,n.kt)("p",null,"If you still think you need to use the VertiGIS Studio Mobile SDK, then let's get started!"),(0,n.kt)(r.default,{mdxType:"DesignerCallout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The VertiGIS Studio Mobile SDK provides ",(0,n.kt)("a",{parentName:"p",href:"#vertigis-studio-mobile-sdk-packages"},"various nuget packages")," for building a custom VertiGIS Studio Mobile application. Applications can extend VertiGIS Studio Mobile by developing custom components, services, commands and operations, and more using these packages."),(0,n.kt)("h2",{id:"extension-points"},"Extension Points"),(0,n.kt)("p",null,"There are three main extension points in the SDK:"),(0,n.kt)("h3",{id:"components"},"Components"),(0,n.kt)("p",null,"Components power the UI experience of VertiGIS Studio Mobile. Components usually consist of a C# class registered with VertiGIS Studio Mobile that has an associated XAML view. Layout files are composed of a nested hierarchy of components which are instantiated at runtime."),(0,n.kt)("h3",{id:"services"},"Services"),(0,n.kt)("p",null,"Services provide the shared infrastructure and core logic that power app behavior. Services do not have an associated UI, and there is only one instance of a service per application."),(0,n.kt)("h3",{id:"commands-and-operations"},"Commands and Operations"),(0,n.kt)("p",null,"Commands and operations provide a framework for executing application wide behavior. Services and components can both run and implement commands and operations, allowing for interaction and consistent behavior without tight coupling. Commands and operations can also be run ",(0,n.kt)("a",{parentName:"p",href:"/docs/mobile/tutorial-configure-button-click"},"in the app config")," and by ",(0,n.kt)("a",{parentName:"p",href:"https://docs.vertigisstudio.com/workflow/latest/help/Default.htm#wf5/help/activities/run-command.htm"},"Workflows"),". This can allow you to ",(0,n.kt)("a",{parentName:"p",href:"/docs/mobile/tutorial-change-default-behavior"},"customize the behavior of built-in components"),"."),(0,n.kt)("h2",{id:"application-interactions"},"Application Interactions"),(0,n.kt)("p",null,"Components, services, and commands and operations interact to form a VertiGIS Studio Mobile Application."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Services are used to implement application wide behavior, such as theming or authentication, and then expose that logic through commands and operations, such as ",(0,n.kt)("inlineCode",{parentName:"li"},"ui.set-theme")," (implemented by the ",(0,n.kt)("inlineCode",{parentName:"li"},"BrandingService"),") or ",(0,n.kt)("inlineCode",{parentName:"li"},"auth.sign")," (implemented by the ",(0,n.kt)("inlineCode",{parentName:"li"},"AuthenticationService"),")."),(0,n.kt)("li",{parentName:"ul"},"Components can run commands and operations to interact with services or other components. Components can also implement commands and operations to allow themselves to be affected by other services and components."),(0,n.kt)("li",{parentName:"ul"},"Component and service interaction through commands and operations is preferred, but components and services can also be tightly coupled to each other through ",(0,n.kt)("a",{parentName:"li",href:"/docs/mobile/sdk-dependency-injection"},"dependency injection"),".")),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Visual Studio 2019 or higher on Windows is the only officially supported development environment for the VertiGIS Studio Mobile SDK. Other development environments may be possible, but have not been verified.")),(0,n.kt)("h3",{id:"windows"},"Windows"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Windows 10 - To run the app on Windows 10, you must have Fall Creators Update installed on your Windows development PC.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The SDK targets Windows 10, version 1809 (10.0; Build 17763) or later.")))),(0,n.kt)("h3",{id:"ios"},"iOS"),(0,n.kt)("p",null,"To be able to build iOS applications, you must have a Mac; Windows cannot build iOS applications.",(0,n.kt)("br",{parentName:"p"}),"\n","Setup is required to allow Visual Studio on Windows to use the Mac to build the iOS project."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"See: ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/xamarin/ios/get-started/installation/windows/"},"iOS Build on Windows"))),(0,n.kt)("p",null,"Required software on the Mac:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"XCode"),(0,n.kt)("li",{parentName:"ul"},"Visual Studio for Mac")),(0,n.kt)("p",null,"See the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/xamarin/ios/deploy-test/"},"Xamarin guide")," on deploying and testing iOS apps for more details."),(0,n.kt)("h3",{id:"android"},"Android"),(0,n.kt)("p",null,"No extra setup is required. You can install your emulator of choice, or debug on a physical device. See the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/xamarin/android/deploy-test/"},"Xamarin guide")," on deploying and testing Android apps for more detail."),(0,n.kt)("h2",{id:"getting-up-and-running"},"Getting Up and Running"),(0,n.kt)("p",null,"A ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-mobile-quickstart"},"VertiGIS Studio Mobile Quickstart")," is provided, which is a basic VertiGIS Studio Mobile application. This Quickstart is essentially a ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/xamarin/get-started/Quickstarts/single-page?pivots=windows"},"Xamarin Forms Quickstart Application")," that initializes and boots VertiGIS Studio Mobile on each platform. To get up and running, simply check out the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-mobile-quickstart"},"Mobile Quickstart Repository")," and start the solution on the appropriate platform."),(0,n.kt)("admonition",{title:"Important",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"VertiGIS Studio Mobile is built on ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/"},"Xamarin Forms"),", a framework for building cross platform native apps. As a consequence, building non trivial extensions to VertiGIS Studio Mobile will require some Xamarin development knowledge.")),(0,n.kt)("h3",{id:"build-and-run-for-windows-10"},"Build and run for Windows 10"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Set ",(0,n.kt)("strong",{parentName:"li"},"App1.UWP")," as your startup project."),(0,n.kt)("li",{parentName:"ul"},"Change the architecture from ",(0,n.kt)("em",{parentName:"li"},"Any CPU")," to ",(0,n.kt)("em",{parentName:"li"},"x86")," or ",(0,n.kt)("em",{parentName:"li"},"x64"),"."),(0,n.kt)("li",{parentName:"ul"},"Build and run.")),(0,n.kt)("h3",{id:"build-and-run-for-android"},"Build and run for Android"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Set ",(0,n.kt)("strong",{parentName:"li"},"App1.Android")," as your startup project."),(0,n.kt)("li",{parentName:"ul"},"Choose your target device or emulator from the run dropdown in the toolbar.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Please note that building and deploying to an emulator is faster than using a device."))),(0,n.kt)("li",{parentName:"ul"},"Build and run.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This build can also be run from Visual Studio for Mac.")),(0,n.kt)("h3",{id:"build-and-run-for-ios"},"Build and run for iOS"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Set ",(0,n.kt)("strong",{parentName:"li"},"App1.iOS")," as your startup project."),(0,n.kt)("li",{parentName:"ul"},"Ensure you are ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/xamarin/ios/get-started/installation/windows/connecting-to-mac/"},"paired with a Mac")),(0,n.kt)("li",{parentName:"ul"},"Choose your target device (must be plugged into Mac) or simulator from the run dropdown in the toolbar.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Please note that building and deploying to a simulator is faster than using a device."))),(0,n.kt)("li",{parentName:"ul"},"Build and run.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This build can also be run from Visual Studio for Mac.")),(0,n.kt)("h2",{id:"anatomy-of-the-quickstart"},"Anatomy of the Quickstart"),(0,n.kt)("p",null,"The Quickstart is composed of four projects, one for each platform, and a common project that is shared by all platforms. This is a standard Xamarin Forms setup, as described ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/xamarin/get-started/Quickstarts/deepdive?pivots=windows#anatomy-of-a-xamarinforms-application"},"in their documentation"),". Changes have been made to each project to support the ",(0,n.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-quickstart-reference#entry-points"},"bootstrapping of a VertiGIS Studio Mobile application")," using the SDK."),(0,n.kt)("h3",{id:"vertigis-studio-mobile-sdk-packages"},"VertiGIS Studio Mobile SDK Packages"),(0,n.kt)("p",null,"The VertiGIS Studio Mobile SDK is composed of VertiGIS Studio packages:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Vertigis Mobile"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This package is the heart of the Mobile SDK, and powers the interface and interactions of a Mobile Xamarin Application."),(0,n.kt)("li",{parentName:"ul"},"This package includes the ",(0,n.kt)("inlineCode",{parentName:"li"},"VertiGIS.ArcGISExtensions")," namespace, an API for working with foundational VertiGIS Studio models, configuration, Esri's ArcGIS types, etc."),(0,n.kt)("li",{parentName:"ul"},"This package includes the ",(0,n.kt)("inlineCode",{parentName:"li"},"VertiGIS.Mobile.Workflow")," namespace, which includes components and renderers for VertiGIS Studio Workflow controls in a Mobile app."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"VertiGIS Studio Workflow"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"VertiGIS Studio Mobile heavily relies on ",(0,n.kt)("a",{parentName:"li",href:"/docs/workflow/overview"},"VertiGIS Studio Workflow")," to power its functionality."),(0,n.kt)("li",{parentName:"ul"},"VertiGIS Studio Workflow is itself composed of many packages (Image Activities, GIS, Runtime).")))),(0,n.kt)("h2",{id:"development-patterns"},"Development Patterns"),(0,n.kt)("p",null,"For the most part, the VertiGIS Studio Mobile project follows the development practices outlined in ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/enterprise-application-patterns/"},"Enterprise Application Patterns using Xamarin.Forms"),"."),(0,n.kt)("p",null,"One major deviation from usual Xamarin Development patterns is that ",(0,n.kt)("a",{parentName:"p",href:"https://autofac.org/"},"Autofac")," is used as the Dependency Injection framework."),(0,n.kt)("h2",{id:"next-steps"},"Next Steps"),(0,n.kt)(l.Z,{mdxType:"UseCaseContainer"},(0,n.kt)(s.Z,{title:"Create a Component",description:"Learn how to create a basic component",link:(0,a.Z)("docs/mobile/sdk-components-create"),mdxType:"UseCaseCard"}),(0,n.kt)(s.Z,{title:"Create a Service",description:"Learn how to create a basic service",link:(0,a.Z)("docs/mobile/sdk-services-create"),mdxType:"UseCaseCard"}),(0,n.kt)(s.Z,{title:"Deploy your Application",description:"Learn how to deploy your custom library, layout and app config",link:(0,a.Z)("docs/mobile/sdk-deployment"),mdxType:"UseCaseCard"})))}v.isMDXComponent=!0},1693:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=i(7462),n=(i(7294),i(3905));const a={},r=void 0,s={unversionedId:"mobile/snippets/designer-callout",id:"mobile/snippets/designer-callout",title:"designer-callout",description:"The VertiGIS Studio Mobile Designer allows you to edit your application's layout, configure custom behaviors for buttons and other UI components, and solve complex business problems through VertiGIS Studio Workflow. Many use cases can be solved through the VertiGIS Studio Mobile Designer and don't require custom development.",source:"@site/docs/mobile/snippets/designer-callout.mdx",sourceDirName:"mobile/snippets",slug:"/mobile/snippets/designer-callout",permalink:"/docs/mobile/snippets/designer-callout",draft:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/snippets/designer-callout.mdx",tags:[],version:"current",frontMatter:{}},l={},d=[],p={toc:d},u="wrapper";function c(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"Have you explored the VertiGIS Studio Mobile Designer?",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("a",{parentName:"p",href:"https://apps.vertigisstudio.com/mobile/designer/"},"VertiGIS Studio Mobile Designer")," allows you to edit your application's layout, configure custom behaviors for buttons and other UI components, and solve complex business problems through ",(0,n.kt)("a",{parentName:"p",href:"/docs/workflow/overview"},"VertiGIS Studio Workflow"),". Many use cases can be solved through the VertiGIS Studio Mobile Designer and don't require custom development.")))}c.isMDXComponent=!0}}]);