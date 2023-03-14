"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[2294],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294);const o=function({children:e,hidden:t,className:n}){return a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},1395:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(7294),o=n(944),i=n(6010);const s="tabItem_1uMI",r="tabItemActive_2DSg";const l=37,c=39;const p=function(e){const{lazy:t,block:n,defaultValue:p,values:m,groupId:d,className:u}=e,{tabGroupChoices:h,setTabGroupChoices:f}=(0,o.Z)(),[g,v]=(0,a.useState)(p),b=a.Children.toArray(e.children),k=[];if(null!=d){const e=h[d];null!=e&&e!==g&&m.some((t=>t.value===e))&&v(e)}const y=e=>{const t=e.currentTarget,n=k.indexOf(t),a=m[n].value;v(a),null!=d&&(f(d,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:o}=e.getBoundingClientRect(),{innerHeight:i,innerWidth:s}=window;return t>=0&&o<=s&&a<=i&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(r),setTimeout((()=>t.classList.remove(r)),2e3))}),150))},N=e=>{var t;let n;switch(e.keyCode){case c:{const t=k.indexOf(e.target)+1;n=k[t]||k[0];break}case l:{const t=k.indexOf(e.target)-1;n=k[t]||k[k.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},u)},m.map((({value:e,label:t})=>a.createElement("li",{role:"tab",tabIndex:g===e?0:-1,"aria-selected":g===e,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":g===e}),key:e,ref:e=>k.push(e),onKeyDown:N,onFocus:y,onClick:y},t)))),t?(0,a.cloneElement)(b.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}},9443:(e,t,n)=>{n.d(t,{Z:()=>a});const a=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),o=n(9443);const i=function(){const e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},9023:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var a=n(7462),o=(n(7294),n(3905)),i=n(1395),s=n(8215);const r={title:"Dependency Injection",description:"VertiGIS Studio Mobile - Learn about dependency injection in VertiGIS Studio Mobile"},l=void 0,c={unversionedId:"mobile/sdk-dependency-injection",id:"mobile/sdk-dependency-injection",isDocsHomePage:!1,title:"Dependency Injection",description:"VertiGIS Studio Mobile - Learn about dependency injection in VertiGIS Studio Mobile",source:"@site/docs/mobile/sdk-dependency-injection.mdx",sourceDirName:"mobile",slug:"/mobile/sdk-dependency-injection",permalink:"/docs/mobile/sdk-dependency-injection",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/sdk-dependency-injection.mdx",version:"current",frontMatter:{title:"Dependency Injection",description:"VertiGIS Studio Mobile - Learn about dependency injection in VertiGIS Studio Mobile"},sidebar:"mobile",previous:{title:"Events Reference",permalink:"/docs/mobile/sdk-events-reference"},next:{title:"Component and Service Interactions",permalink:"/docs/mobile/sdk-component-service-interactions"}},p=[{value:"Components and Services",id:"components-and-services",children:[]},{value:"List of Registration Assembly Attributes",id:"list-of-registration-assembly-attributes",children:[{value:"<code>Export</code>",id:"export",children:[]},{value:"<code>Component</code>",id:"component",children:[]},{value:"<code>AppItemComponent</code>",id:"appitemcomponent",children:[]},{value:"<code>Service</code>",id:"service",children:[]},{value:"<code>AppItem</code>",id:"appitem",children:[]},{value:"<code>View</code>",id:"view",children:[]},{value:"<code>ViewModel</code>",id:"viewmodel",children:[]}]},{value:"Managing Sub-Dependencies",id:"managing-sub-dependencies",children:[]},{value:"Relevant SDK Sample",id:"relevant-sdk-sample",children:[]}],m={toc:p};function d({components:e,...t}){return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you are new to the concepts of ",(0,o.kt)("strong",{parentName:"p"},"inversion of control")," and ",(0,o.kt)("strong",{parentName:"p"},"dependency injection"),", check out ",(0,o.kt)("a",{parentName:"p",href:"https://martinfowler.com/articles/injection.html"},"this article by Martin Fowler"),"."))),(0,o.kt)("p",null,"VertiGIS Studio Mobile relies heavily on inversion of control patterns to inject dependencies into its components and services. Under the hood, VertiGIS Studio Mobile uses ",(0,o.kt)("a",{parentName:"p",href:"https://autofaccn.readthedocs.io/en/latest/index.html"},"Autofac")," to register and inject components, services and other classes. To inject a dependency into a class in VertiGIS Studio Mobile, two things must happen."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The class to be injected must register itself with the autofac container."),(0,o.kt)("li",{parentName:"ol"},"The class that requires the dependency must accept a concrete class or abstract interface in its constructor as a placeholder for the injected class.")),(0,o.kt)("p",null,"A good example of this pattern is the ",(0,o.kt)("inlineCode",{parentName:"p"},"AlertOperations")," class in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/tutorial-implement-command-operation"},"commands and operation")," tutorial ."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"using App1.Services.AlertOperations;\nusing VertiGIS.Mobile.Composition;\nusing VertiGIS.Mobile.Composition.Messaging;\nusing VertiGIS.Mobile.Infrastructure.Messaging;\n\n[assembly: Export(typeof(AlertOperations), SingleInstance = true)]\nnamespace App1.Services.AlertOperations\n{\n    class AlertOperations : OperationsBase\n    {\n        public AlertOperations(IOperationRegistry operationRegistry)\n            : base(operationRegistry)\n        {\n        }\n    }\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This class both registers itself as a dependency, and has dependencies injected itself."),(0,o.kt)("li",{parentName:"ul"},"The assembly attribute ",(0,o.kt)("inlineCode",{parentName:"li"},"Export")," is part of the VertiGIS Studio Mobile SDK, and registers the class with Autofac as a singleton."),(0,o.kt)("li",{parentName:"ul"},"The constructor of the class takes an object of the type ",(0,o.kt)("inlineCode",{parentName:"li"},"IOperationRegistry"),". This dependency will be resolved by Autofac at runtime ",(0,o.kt)("strong",{parentName:"li"},"when")," ",(0,o.kt)("inlineCode",{parentName:"li"},"AlertOperations")," is injected by another class. Chaining dependency injection in this manner is both a common and best practice pattern in VertiGIS Studio Mobile.")),(0,o.kt)("p",null,"This is an example of a class that injects ",(0,o.kt)("inlineCode",{parentName:"p"},"AlertOperations"),", which will in turn inject an ",(0,o.kt)("inlineCode",{parentName:"p"},"IOperationRegistry")," into itself."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"[assembly: Service(typeof(CustomService), PropertiesAutowired = true)]\nnamespace App1.Services\n{\n    class CustomService : ServiceBase\n    {\n        public CustomService(AlertOperations AlertOperations)\n            :base()\n        {\n            ...\n        }\n    }\n    ...\n}\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Autofac has a number of ways to inject dependencies, including factory functions which can dynamically spin up instances of a class or lazy wrappers for dependencies. For details, check out ",(0,o.kt)("a",{parentName:"p",href:"https://autofaccn.readthedocs.io/en/latest/resolve/relationships.html"},"the Autofac documentation.")))),(0,o.kt)("h2",{id:"components-and-services"},"Components and Services"),(0,o.kt)("p",null,"Components and services in VertiGIS Studio Mobile are almost always initialized by Autofac. This means that they can inject any class that has been registered with Autofac in their constructor, allowing classes used for behavior like ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/configuration-commands-operations"},"commands and operations")," to be easily shared and loosely coupled to many components and services. Root level components (components that are instantiated from a layout definition) must ",(0,o.kt)("strong",{parentName:"p"},"always")," register with Autofac to be correctly initialized, and it is best practice to use dependency injection to initialize instances of any other custom classes, services or components that the root level component depends on."),(0,o.kt)("h2",{id:"list-of-registration-assembly-attributes"},"List of Registration Assembly Attributes"),(0,o.kt)("p",null,"There's a number of different VertiGIS Studio Mobile specific assembly attributes which allow classes to register themselves with VertiGIS Studio Mobile's Autofac container."),(0,o.kt)("h3",{id:"export"},(0,o.kt)("inlineCode",{parentName:"h3"},"Export")),(0,o.kt)("p",null,"Used for registering a generic class with Autofac."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"[assembly: Export(typeof(MyCustomClass))]\n")),(0,o.kt)("h3",{id:"component"},(0,o.kt)("inlineCode",{parentName:"h3"},"Component")),(0,o.kt)("p",null,"Used for registering a component that ",(0,o.kt)("strong",{parentName:"p"},"does not")," consume configuration. For a more detailed example, see the tutorial on ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/tutorial-implement-component-with-ui#create-a-component-skeleton"},"implementing a custom component"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'[assembly: Component(typeof(MyCustomComponent), "my-custom-component")]\n')),(0,o.kt)("h3",{id:"appitemcomponent"},(0,o.kt)("inlineCode",{parentName:"h3"},"AppItemComponent")),(0,o.kt)("p",null,"Used for registering a component that ",(0,o.kt)("strong",{parentName:"p"},"does")," consume configuration. For a more detailed example, see the tutorial on ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/tutorial-implement-component-participate-app-config#consume-the-configuration-in-the-component"},"implementing a custom component with configuration"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'[assembly: AppItemComponent(typeof(MyCustomComponent), "my-custom-component", MyCustomComponentConfiguration.ConfigItemtype)]\n')),(0,o.kt)("h3",{id:"service"},(0,o.kt)("inlineCode",{parentName:"h3"},"Service")),(0,o.kt)("p",null,"Used for registering a service. For a more detailed example, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-services-create"},"create a service"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"[assembly: Service(typeof(CustomService))]\n")),(0,o.kt)("h3",{id:"appitem"},(0,o.kt)("inlineCode",{parentName:"h3"},"AppItem")),(0,o.kt)("p",null,"Used for registering the definition for an ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/configuration-app-config-reference#app-items"},"app item")," with VertiGIS Studio Mobile. For a more detailed example, see the tutorial on ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/tutorial-implement-component-participate-app-config#create-a-skeleton-app-config-definition"},"implementing a custom component with app configuration"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"[assembly: AppItem(CustomAppItem.AppItemType, typeof(CustomAppItem))]\n")),(0,o.kt)("h3",{id:"view"},(0,o.kt)("inlineCode",{parentName:"h3"},"View")),(0,o.kt)("p",null,"Used for registering a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/enterprise-application-patterns/mvvm"},"view")," with VertiGIS Studio Mobile. For a more detailed example see the tutorial on ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/tutorial-implement-component-with-ui#use-xaml-to-define-your-ui"},"implementing a custom component with UI"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"[assembly: View(typeof(CustomView))]\n")),(0,o.kt)("h3",{id:"viewmodel"},(0,o.kt)("inlineCode",{parentName:"h3"},"ViewModel")),(0,o.kt)("p",null,"Used for registering a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/enterprise-application-patterns/mvvm"},"view model")," with VertiGIS Studio Mobile. For a more detailed example see the tutorial on ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/tutorial-implement-component-with-ui#example-progress-bar"},"implementing a custom component with UI"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"[assembly: ViewModel(typeof(CustomViewModel))]\n")),(0,o.kt)("h2",{id:"managing-sub-dependencies"},"Managing Sub-Dependencies"),(0,o.kt)("p",null,"Sometimes, you may may want to split code associated with a component or service into multiple classes for individual views, utility functions, etc. Each of these classes may have dependencies on global classes registered with Autofac, such as operations, but only the registered component is instantiated by dependency injection, so only the component class can inject these global classes. One solution is to have the component class inject all the dependencies of its associated classes and pass them to the class constructors, but this pattern introduces unnecessary boilerplate and coupling. Instead, if the component class creates instances of associated classes through dependency injection, then Autofac will automatically resolve any dependencies the associated class has."),(0,o.kt)("p",null,"In the example below, the ",(0,o.kt)("inlineCode",{parentName:"p"},"RelatedClass")," has a global dependency, ",(0,o.kt)("inlineCode",{parentName:"p"},"MapOperations"),". In order to resolve this dependency, the ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomComponent")," creates an instance of the ",(0,o.kt)("inlineCode",{parentName:"p"},"RelatedClass")," through dependency injection."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Autofac allows for the injection of ",(0,o.kt)("a",{parentName:"p",href:"https://autofaccn.readthedocs.io/en/latest/resolve/relationships.html#supported-relationship-types"},"factory functions for classes, partially resolved class constructors, and more"),"."))),(0,o.kt)(i.Z,{defaultValue:"related",values:[{label:"Related Class",value:"related"},{label:"Component",value:"component"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"related",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"using VertiGIS.Mobile.Composition;\nusing VertiGIS.Mobile.Infrastructure.Messaging;\nusing VertiGIS.Mobile.Samples.Samples.Custom.Component;\n\n// highlight-next-line\n[assembly: Export(typeof(RelatedClass))]\nnamespace VertiGIS.Mobile.Samples.Samples.Custom.Component\n{\n    internal class RelatedClass\n    {\n        private MapOperations _mapOperations;\n\n        // highlight-next-line\n        public RelatedClass(MapOperations mapOperations)\n        {\n            _mapOperations = mapOperations;\n        }\n    }\n}\n"))),(0,o.kt)(s.Z,{value:"component",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using VertiGIS.Mobile.Samples;\nusing VertiGIS.Mobile.Samples.Samples.Custom.Component;\nusing VertiGIS.Mobile.Composition.Layout;\nusing System.Xml.Linq;\nusing Xamarin.Forms;\n\n[assembly: Component(typeof(CustomComponent), "component", XmlNamespace = XmlNamespaces.SamplesNamespace)]\nnamespace VertiGIS.Mobile.Samples.Samples.Custom.Component\n{\n    internal class CustomComponent : ComponentBase\n    {\n        private RelatedClass _relatedClass;\n\n        // highlight-next-line\n        public CustomComponent(RelatedClass relatedClass)\n        {\n            _relatedClass = relatedClass;\n        }\n\n        protected override VisualElement Create(XNode node)\n        {\n            return new Label()\n            {\n                Text = "Hello, World!",\n                HorizontalTextAlignment = TextAlignment.Center\n            };\n        }\n    }\n}\n')))),(0,o.kt)("h2",{id:"relevant-sdk-sample"},"Relevant SDK Sample"),(0,o.kt)("p",null,"Check out the VertiGIS Studio Mobile SDK Sample for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Conceptual/DependencyInjection"},"dependency injection"),"."))}d.isMDXComponent=!0},6010:(e,t,n)=>{function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:()=>o})}}]);