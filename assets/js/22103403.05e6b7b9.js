"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[4002],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?i.createElement(f,a(a({ref:t},p),{},{components:r})):i.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6747:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=r(7462),n=(r(7294),r(3905));const o={title:"Quickstart Reference",description:"VertiGIS Studio Mobile - Learn more about the VertiGIS Studio Mobile SDK Quickstart Project"},a=void 0,l={unversionedId:"mobile/sdk-quickstart-reference",id:"mobile/sdk-quickstart-reference",title:"Quickstart Reference",description:"VertiGIS Studio Mobile - Learn more about the VertiGIS Studio Mobile SDK Quickstart Project",source:"@site/docs/mobile/sdk-quickstart-reference.mdx",sourceDirName:"mobile",slug:"/mobile/sdk-quickstart-reference",permalink:"/docs/mobile/sdk-quickstart-reference",draft:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/sdk-quickstart-reference.mdx",tags:[],version:"current",frontMatter:{title:"Quickstart Reference",description:"VertiGIS Studio Mobile - Learn more about the VertiGIS Studio Mobile SDK Quickstart Project"},sidebar:"mobile",previous:{title:"Edit the Layout and App Config",permalink:"/docs/mobile/sdk-edit-layout-app-config"},next:{title:"SDK Samples",permalink:"/docs/mobile/sdk-samples"}},s={},c=[{value:"Entry Points",id:"entry-points",level:2},{value:"Android",id:"android",level:4},{value:"iOS",id:"ios",level:4},{value:"Universal Windows",id:"universal-windows",level:4},{value:"Error Handling",id:"error-handling",level:2},{value:"Referencing Third Party Libraries",id:"referencing-third-party-libraries",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"entry-points"},"Entry Points"),(0,n.kt)("p",null,"Each platform has platform specific setup and an entry point, after which they all bootstrap the application through the platform agnostic project. In the platform agnostic project, the ",(0,n.kt)("inlineCode",{parentName:"p"},"OnStart")," method of ",(0,n.kt)("inlineCode",{parentName:"p"},"App.cs")," calls the VertiGIS Studio Mobile SDK Bootstrapper, and loads and displays the application with the given ",(0,n.kt)("inlineCode",{parentName:"p"},"app.json")," configuration."),(0,n.kt)("h4",{id:"android"},"Android"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"OnCreate")," method of the ",(0,n.kt)("inlineCode",{parentName:"p"},"MainActivity.cs")," file in the Android specific project handles Android specific setup."),(0,n.kt)("h4",{id:"ios"},"iOS"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"FinishedLaunching")," method of the ",(0,n.kt)("inlineCode",{parentName:"p"},"AppDelegate.cs")," in the iOS specific project handles iOS specific setup."),(0,n.kt)("h4",{id:"universal-windows"},"Universal Windows"),(0,n.kt)("p",null,"The constructors of the ",(0,n.kt)("inlineCode",{parentName:"p"},"App.xaml.cs")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"MainPage.xaml.cs")," files in the UWP specific project handles Windows specific setup."),(0,n.kt)("h2",{id:"error-handling"},"Error Handling"),(0,n.kt)("p",null,"In each of the platform specific setups, there is a call to the ",(0,n.kt)("inlineCode",{parentName:"p"},"HandleExceptions")," method. This method tells VertiGIS Studio Mobile to handle exceptions and display an Error. If you need to have control over global error handling, you can remove the call to ",(0,n.kt)("inlineCode",{parentName:"p"},"HandleExceptions")," and implement your own global exception handling for the Xamarin Application. ",(0,n.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/39503390/global-exception-handling-in-xamarin-cross-platform"},"This Stack Overflow post")," is a good starting point for implementing global error handling."),(0,n.kt)("h2",{id:"referencing-third-party-libraries"},"Referencing Third Party Libraries"),(0,n.kt)("p",null,"The VertiGIS Studio Mobile Quickstart is simply a ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/xamarin/get-started/Quickstarts/deepdive?pivots=windows"},".NET Xamarin Forms project")," so you can add dependencies to it like any other .NET project."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The VertiGIS Studio Mobile SDK relies on exact versions of ",(0,n.kt)("a",{parentName:"p",href:"https://developers.arcgis.com/arcgis-runtime/"},"ArcGIS Runtime")," and ",(0,n.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/apps/xamarin/xamarin-forms"},"Xamarin Forms")," NuGet packages.")))}u.isMDXComponent=!0}}]);