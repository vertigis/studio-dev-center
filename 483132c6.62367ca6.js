(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{173:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(1),o=n(9),c=(n(0),n(214)),i={title:"Dependency Injection",description:"Geocortex Mobile - Learn about dependency injection in Geocortex Mobile"},r={id:"mobile/dependency-injection",title:"Dependency Injection",description:"Geocortex Mobile - Learn about dependency injection in Geocortex Mobile",source:"@site/docs/mobile/dependency-injection.mdx",permalink:"/dev-center/docs/mobile/dependency-injection",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/dependency-injection.mdx",sidebar:"mobile",previous:{title:"SDK Samples",permalink:"/dev-center/docs/mobile/samples"},next:{title:"View Model Helper Class",permalink:"/dev-center/docs/mobile/viewmodel-helper-class"}},s=[{value:"Components and Services",id:"components-and-services",children:[]},{value:"List of Registration Assembly Attributes",id:"list-of-registration-assembly-attributes",children:[{value:"<code>Export</code>",id:"export",children:[]},{value:"<code>Component</code>",id:"component",children:[]},{value:"<code>AppItemComponent</code>",id:"appitemcomponent",children:[]},{value:"<code>Service</code>",id:"service",children:[]},{value:"<code>AppItem</code>",id:"appitem",children:[]},{value:"<code>View</code>",id:"view",children:[]},{value:"<code>ViewModel</code>",id:"viewmodel",children:[]}]}],p={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"If your new to the concepts of ",Object(c.b)("strong",{parentName:"p"},"inversion of control")," and ",Object(c.b)("strong",{parentName:"p"},"dependency injection"),", check out ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://martinfowler.com/articles/injection.html"}),"this article by Martin Fowler")))),Object(c.b)("p",null,"Geocortex Mobile relies heavily on inversion of control patterns to inject dependencies into it's ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/dev-center/docs/mobile/concepts-components-services"}),"components and services"),". Under the hood, Geocortex Mobile uses ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://autofaccn.readthedocs.io/en/latest/index.html"}),"autofac")," to register and inject components, services and other classes. To inject a dependency into a class in Geocortex Mobile, two things must happen."),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"The class to be injected must register itself with the autofac container"),Object(c.b)("li",{parentName:"ol"},"The class that requires the dependency must accept a concrete class or abstract interface in it's constructor as a placeholder for the injected class.")),Object(c.b)("p",null,"A good example of this pattern is the ",Object(c.b)("inlineCode",{parentName:"p"},"AlertOperations")," class in the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/dev-center/docs/mobile/implement-command-operation"}),"commands and operation")," use case."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),"using App1.Services.AlertOperations;\nusing Geocortex.Mobile.Composition;\nusing Geocortex.Mobile.Composition.Messaging;\nusing Geocortex.Mobile.Infrastructure.Messaging;\n\n[assembly: Export(typeof(AlertOperations), SingleInstance = true)]\nnamespace App1.Services.AlertOperations\n{\n    class AlertOperations : OperationsBase\n    {\n        public AlertOperations(IOperationRegistry operationRegistry)\n            : base(operationRegistry)\n        {\n        }\n    }\n}\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"This class both registers itself as a dependency, and has dependencies injected itself."),Object(c.b)("li",{parentName:"ul"},"The assembly attribute ",Object(c.b)("inlineCode",{parentName:"li"},"Export")," is part of the Geocortex Mobile SDK, and registers the class with autofac as a singleton."),Object(c.b)("li",{parentName:"ul"},"The constructor of the class takes an object of the type ",Object(c.b)("inlineCode",{parentName:"li"},"IOperationRegistry"),". This dependency will be resolved by autofac at runtime ",Object(c.b)("strong",{parentName:"li"},"when")," ",Object(c.b)("inlineCode",{parentName:"li"},"AlertOperations")," is injected by another class. Chaining dependency injection in this manner is both a common and best practice pattern in Geocortex Mobile.")),Object(c.b)("p",null,"This is an example of a class that injects ",Object(c.b)("inlineCode",{parentName:"p"},"AlertOperations"),", which will in turn inject an ",Object(c.b)("inlineCode",{parentName:"p"},"IOperationRegistry")," into itself."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),"[assembly: Service(typeof(CustomService), PropertiesAutowired = true)]\nnamespace App1.Services\n{\n    class CustomService : ServiceBase\n    {\n        public CustomService(AlertOperations AlertOperations)\n            :base()\n        {\n            ...\n        }\n    }\n    ...\n}\n")),Object(c.b)("h2",{id:"components-and-services"},"Components and Services"),Object(c.b)("p",null,"Components and services in Geocortex Mobile are almost always initialized by autofac. This means that they can inject any class that has been registered with autofac in their constructor, allowing classes used for behaviour like ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/dev-center/docs/mobile/concepts-commands-operations"}),"commands and operations")," to be easily shared and loosely coupled to many components and services. Root level components (components that are instantiated from a layout definition) must ",Object(c.b)("strong",{parentName:"p"},"always")," register with autofac to be correctly initialized, and it is best practice to use dependency injection to initalize instances of any other custom classes, services or components that the root level component depends on."),Object(c.b)("h2",{id:"list-of-registration-assembly-attributes"},"List of Registration Assembly Attributes"),Object(c.b)("p",null,"There's a number of different Geocortex Mobile specific assembly attributes which allow classes to register themselves with Geocortex Mobile's autofac container."),Object(c.b)("h3",{id:"export"},Object(c.b)("inlineCode",{parentName:"h3"},"Export")),Object(c.b)("p",null,"Used for registering a generic class with autofac."),Object(c.b)("h4",{id:"example"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),"[assembly: Export(typeof(MyCustomClass))]\n")),Object(c.b)("h3",{id:"component"},Object(c.b)("inlineCode",{parentName:"h3"},"Component")),Object(c.b)("p",null,"Used for registering a component that ",Object(c.b)("strong",{parentName:"p"},"does not")," consume configuration. For a more detailed example, see the use case on ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/dev-center/docs/mobile/implement-component-with-ui#create-a-component-skeleton"}),"implementing a custom component"),"."),Object(c.b)("h4",{id:"example-1"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'[assembly: Component(typeof(MyCustomComponent), "my-custom-component")]\n')),Object(c.b)("h3",{id:"appitemcomponent"},Object(c.b)("inlineCode",{parentName:"h3"},"AppItemComponent")),Object(c.b)("p",null,"Used for registering a component that ",Object(c.b)("strong",{parentName:"p"},"does")," consume configuration. For a more detailed example, see the use case on ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/dev-center/docs/mobile/implement-component-participate-app-config#consume-the-configuration-in-the-component"}),"implementing a custom component with configuration"),"."),Object(c.b)("h4",{id:"example-2"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'[assembly: AppItemComponent(typeof(MyCustomComponent), "my-custom-component", MyCustomComponentConfiguration.ConfigItemtype)]\n')),Object(c.b)("h3",{id:"service"},Object(c.b)("inlineCode",{parentName:"h3"},"Service")),Object(c.b)("p",null,"Used for registering a service. For a more detailed example, see the use case on ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/dev-center/docs/mobile/implement-service#create-a-new-service"}),"implementing a custom service"),"."),Object(c.b)("h4",{id:"example-3"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),"[assembly: Service(typeof(CustomService))]\n")),Object(c.b)("h3",{id:"appitem"},Object(c.b)("inlineCode",{parentName:"h3"},"AppItem")),Object(c.b)("p",null,"Used for registering the definition for an ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/dev-center/docs/mobile/concepts-app-config#anatomy-of-an-app-config"}),"app item")," with Geocortex Mobile. For a more detailed example, see the use case on ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/dev-center/docs/mobile/implement-component-participate-app-config#create-a-skeleton-app-config-definition"}),"implementing a custom component with app configuration"),"."),Object(c.b)("h4",{id:"example-4"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),"[assembly: AppItem(CustomAppItem.AppItemType, typeof(CustomAppItem))]\n")),Object(c.b)("h3",{id:"view"},Object(c.b)("inlineCode",{parentName:"h3"},"View")),Object(c.b)("p",null,"Used for registering a ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/enterprise-application-patterns/mvvm"}),"view")," with Geocortex Mobile. For a more detailed example see the use case on ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/dev-center/docs/mobile/implement-component-with-ui#use-xaml-to-define-your-ui"}),"implementing a custom component with UI"),"."),Object(c.b)("h4",{id:"example-5"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),"[assembly: View(typeof(CustomView))]\n")),Object(c.b)("h3",{id:"viewmodel"},Object(c.b)("inlineCode",{parentName:"h3"},"ViewModel")),Object(c.b)("p",null,"Used for registering a ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/enterprise-application-patterns/mvvm"}),"view model")," with Geocortex Mobile. For a more detailed example see the use case on ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/dev-center/docs/mobile/implement-component-with-ui#example-doomsday-cookie-clicker"}),"implementing a custom component with UI"),"."),Object(c.b)("h4",{id:"example-6"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),"[assembly: ViewModel(typeof(CustomViewModel))]\n")))}l.isMDXComponent=!0},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r({},t,{},e)),n},m=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,u=m["".concat(i,".").concat(d)]||m[d]||b[d]||c;return n?o.a.createElement(u,r({ref:t},p,{components:n})):o.a.createElement(u,r({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var p=2;p<c;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);