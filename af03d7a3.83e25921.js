(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{257:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return u}));var a=n(2),o=n(9),i=(n(0),n(299)),c=n(305),s=n(311),m=n(310),p=n(323),l=n(324),r={title:"Component Reference",description:"Geocortex Mobile - Reference for custom components in Geocortex Mobile"},b={id:"mobile/sdk-components-reference",isDocsHomePage:!1,title:"Component Reference",description:"Geocortex Mobile - Reference for custom components in Geocortex Mobile",source:"@site/docs/mobile/sdk-components-reference.mdx",permalink:"/docs/mobile/sdk-components-reference",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/sdk-components-reference.mdx",sidebar:"mobile",previous:{title:"Create a Component",permalink:"/docs/mobile/sdk-components-create"},next:{title:"View Model Helper Class",permalink:"/docs/mobile/sdk-components-viewmodel-helper-class"}},d=[{value:"Component Registration",id:"component-registration",children:[]},{value:"Components and Layout",id:"components-and-layout",children:[]},{value:"Component Anatomy",id:"component-anatomy",children:[{value:"Component Class",id:"component-class",children:[]},{value:"XAML View",id:"xaml-view",children:[]},{value:"View Model",id:"view-model",children:[]}]},{value:"Configuration Models",id:"configuration-models",children:[{value:"Component Defaults",id:"component-defaults",children:[]},{value:"Initialization and Teardown",id:"initialization-and-teardown",children:[]}]},{value:"Component Lifecycle",id:"component-lifecycle",children:[{value:"Activation and Deactivation",id:"activation-and-deactivation",children:[]}]},{value:"Relevant SDK Samples",id:"relevant-sdk-samples",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],h={rightToc:d};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Did you know Geocortex Workflow allows you to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/forms.htm#Overview_of_Forms%3FTocPath%3DForms%7COverview%2520of%2520Forms%7C_____0"}),"create custom forms")," you can present to an end user?"))),Object(i.b)("p",null,"Implementing a custom component in Geocortex Mobile gives you the highest degree of flexibility with what you can do. Components can display custom, dynamic UI, register operation implementations, store persistent data, and more. They are also one of the most complex ways of customizing your mobile app, so it might be worthwhile to review simpler options like ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/configuration-commands-operations"}),"Commands and Operations")," or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/tutorial-change-default-map-click-behavior"}),"Workflow")," first."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'[assembly: Component(typeof(CustomComponent), "custom-component", XmlNamespace = XmlNamespaces.App1Namespace)]\nnamespace App1.Components\n{\n    class CustomComponent : ComponentBase\n    {\n        protected override VisualElement Create(XNode node)\n        {\n            return new Label(){ Text = "My Custom Component" };\n        }\n    }\n}\n')),Object(i.b)("h2",{id:"component-registration"},"Component Registration"),Object(i.b)("p",null,"Geocortex Mobile uses\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://autofaccn.readthedocs.io/en/latest/index.html"}),"Autofac")," to register,\nlocate, and inject components, services and other classes."),Object(i.b)("p",null,"Each component class is registered with the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/sdk-dependency-injection#component"}),Object(i.b)("inlineCode",{parentName:"a"},"Component")," assembly attribute")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"It's convention for the name of the component in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/configuration-layout-reference"}),Object(i.b)("inlineCode",{parentName:"a"},"layout"))," to be lower case and kebab case, i.e. ",Object(i.b)("inlineCode",{parentName:"p"},"custom-component"),"."))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'// highlight-next-line\n[assembly: Component(typeof(CustomComponent), "custom-component", XmlNamespace = XmlNamespaces.App1Namespace)]\nnamespace App1.Components\n{\n    // highlight-next-line\n    class CustomComponent : ComponentBase\n    {\n        ...\n    }\n}\n')),Object(i.b)("h2",{id:"components-and-layout"},"Components and Layout"),Object(i.b)("p",null,"Once a component has been registered, it can be used in a layout by referring it by name and namespace."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd"\n    // highlight-start\n    xmlns:custom="https://your.org/layout/app1">\n    <custom:custom-component/>\n    // highlight-end\n</layout>\n')),Object(i.b)("h2",{id:"component-anatomy"},"Component Anatomy"),Object(i.b)("p",null,"Geocortex Mobile is built on top of the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/"}),"Xamarin Platform"),". In general, ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/xaml/"}),"XAML Views")," are used to define reactive component UI. Component Views in Geocortex Mobile are built with the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/xaml/xaml-basics/data-bindings-to-mvvm"}),"Model-View-ViewModel (MVVM) pattern"),". The model for components is usually either ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/configuration-app-config-getting-started"}),"app config")," or a service hosting shared application data."),Object(i.b)("h3",{id:"component-class"},"Component Class"),Object(i.b)("p",null,"Each instance of a component class directly correlates to a component in the layout. A component class extends ",Object(i.b)("inlineCode",{parentName:"p"},"ComponentBase")," and renders visual elements. As seen in the example below, components can provide their UI inline, but it is recommended that components render an associated XAML view instead."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'[assembly: Component(typeof(CustomComponent), "custom-component", XmlNamespace = XmlNamespaces.App1Namespace)]\nnamespace App1.Components\n{\n    class CustomComponent : ComponentBase\n    {\n        protected override VisualElement Create(XNode node)\n        {\n            return new Label(){ Text = "My Custom Component" };\n        }\n    }\n}\n')),Object(i.b)("h4",{id:"component-dependencies"},"Component Dependencies"),Object(i.b)("p",null,"Components are instantiated by ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/sdk-dependency-injection"}),"dependency injection")," when the layout is rendered. This means that a component can also list dependencies that have been registered with autofac, such as the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/sdk-component-service-interactions"}),Object(i.b)("inlineCode",{parentName:"a"},"ILayoutModel<MapView>"))," in its constructor, and have them be passed at runtime. This also means that if a class associated with a component has application dependencies, such as a reference to the ",Object(i.b)("inlineCode",{parentName:"p"},"MapOperations")," for map interactions, then the component will either need to provide that dependency somehow."),Object(i.b)("p",null,"The preferred way to provide sub-dependencies to classes associated with components is to instantiate those associated classes with dependency injection also. Check out ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/sdk-dependency-injection#managing-sub-dependencies"}),"managing sub-dependencies")," for an example."),Object(i.b)("h3",{id:"xaml-view"},"XAML View"),Object(i.b)("p",null,'XAML views and their respective "code-behind" are responsible for the presentation concerns of a component. Check out a ',Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Custom/XamlComponent"}),"complete example in the SDK samples"),"."),Object(i.b)("p",null,"XAML views can use any ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/xaml/xaml-controls"}),"XAML Controls")," along with built-in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/sdk-components-styling#using-geocortex-mobile-xaml-elements"}),"Geocortex Mobile XAML Elements and styling"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8"?>\n<ContentView xmlns="http://xamarin.com/schemas/2014/forms"\n             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"\n             xmlns:d="http://xamarin.com/schemas/2014/forms/design"\n             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n             mc:Ignorable="d"\n             x:Class="Geocortex.Mobile.Samples.Samples.Custom.XamlComponent.XamlComponentView">\n    <ContentView.Content>\n        <StackLayout Margin="5">\n            <Label Text="Hello XAML Component!" />\n            <Label Text="This component view is created using a XAML view." />\n        </StackLayout>\n    </ContentView.Content>\n</ContentView>\n')),Object(i.b)("h3",{id:"view-model"},"View Model"),Object(i.b)("p",null,"Component view models are responsible for populating properties with data for the view to bind to. The data for the view model is usually provided by the component class, which can consume app config or other data from the application through ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/sdk-dependency-injection"}),"dependency injection"),". View models can use commands and operations to interact with application services and other components."),Object(i.b)("p",null,"Check out this example of a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/CustomSamples/BreadCrumbs"}),"component with a view model"),"."),Object(i.b)("h2",{id:"configuration-models"},"Configuration Models"),Object(i.b)("p",null,"Every component is bound to specific ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/configuration-app-config-reference#app-items"}),Object(i.b)("strong",{parentName:"a"},"item type")),", and each item type is bound to a class ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/sdk-dependency-injection#appitem"}),"registered as an ",Object(i.b)("inlineCode",{parentName:"a"},"AppItem")," with autofac"),". This class instantiates itself with values from the app config in its constructor, acting as a configuration model. The component class then consumes this configuration model, and then passes the appropriate values to the view and view model."),Object(i.b)(p.a,{defaultValue:"model",values:[{label:"App Item Model",value:"model"},{label:"Component",value:"component"},{label:"App Config",value:"config"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"component",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'// highlight-next-line\n[assembly: AppItemComponent(typeof(CustomComponent), "component-with-config", "my-app-item", XmlNamespace = XmlNamespaces.App1Namespace)]\nnamespace VertiGIS.Mobile.Samples.Samples.Custom.Component\n{\n    // highlight-next-line\n    internal class CustomComponent : AppItemComponentBase<MyAppItem>\n    {\n        private readonly IAppItem<MyAppItem> _appItemResolver;\n\n        private CustomComponentViewModel _viewModel;\n        private CustomComponentView _view;\n\n        // highlight-next-line\n        public CustomComponent(IAppItem<MyAppItem> itemResolver, Func<CustomComponentViewModel, CustomComponentView> viewFactory, CustomComponentViewModel viewModel)\n            : base(itemResolver)\n        {\n            _appItemResolver = itemResolver;\n\n            _viewModel = viewModel;\n            _view = viewFactory(viewModel);\n        }\n\n        protected override VisualElement Create(XNode node)\n        {\n            return _view;\n        }\n\n        protected override async Task DoInitializeAsync()\n        {\n            // highlight-start\n            var item = await _appItemResolver.ResolveAsync();\n            _viewModel.Text = item.ConfigText;\n            // highlight-end\n        }\n    }\n}\n'))),Object(i.b)(l.a,{value:"model",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'// highlight-next-line\n[assembly: AppItem(MyAppItem.ConfigItemtype, typeof(MyAppItem))]\nnamespace VertiGIS.Mobile.Samples.Samples.Custom.ComponentConfiguration\n{\n    public class MyAppItem : VisualAppItem\n    {\n        // highlight-next-line\n        public const string ConfigItemtype = "my-app-item";\n\n        public string ConfigText { get; private set; }\n\n        public MyAppItem()\n            : this(Guid.NewGuid().ToString())\n        {\n        }\n\n        public MyAppItem(string id)\n            : this(new Properties { ["id"] = id })\n        {\n        }\n\n        public MyAppItem(Properties properties) :\n            base(properties, ConfigItemtype)\n        {\n            // highlight-start\n            if (properties.TryGetValue("text", out var text))\n            {\n                ConfigText = text as string ?? "Default text.";\n            }\n            // highlight-end\n        }\n    }\n}\n'))),Object(i.b)(l.a,{value:"config",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "schemaVersion": "1.0",\n\n  "items": [\n    ...\n    {\n      "$type": "my-app-item",\n      "id": "some-unique-id",\n      "title": "My Title"\n    }\n    ...\n  ]\n}\n')))),Object(i.b)("h3",{id:"component-defaults"},"Component Defaults"),Object(i.b)("p",null,"Most components support the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/configuration-app-config-getting-started#linking-layout-to-app-config"}),Object(i.b)("inlineCode",{parentName:"a"},"config")," attribute")," in the layout, which links a component to configuration in the app config JSON. However, many configuration models have default values they can supply for initialization instead of relying on a value to exist in the config. Any ",Object(i.b)("inlineCode",{parentName:"p"},"AppItem")," class can provide default values through the ",Object(i.b)("inlineCode",{parentName:"p"},"CreateDefault")," method. This method should return an instance of the ",Object(i.b)("inlineCode",{parentName:"p"},"AppItem")," which represents the default values."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'[assembly: AppItem(MyAppItem.ConfigItemtype, typeof(MyAppItem))]\nnamespace VertiGIS.Mobile.Samples.Samples.Custom.ComponentConfiguration\n{\n    public class MyAppItem : VisualAppItem\n    {\n        public const string ConfigItemtype = "my-app-item";\n\n        ...\n\n        // highlight-start\n        public override object CreateDefault()\n        {\n            return new MyAppItem();\n        }\n        // highlight-end\n    }\n}\n')),Object(i.b)("p",null,"This pattern is what allows you to place a map with no config in the layout and have it render a default map."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd">\n    <map/> \x3c!-- The map component is populated with values from the MapExtension\'s `CreateDefault` function. --\x3e\n</layout>\n')),Object(i.b)("h3",{id:"initialization-and-teardown"},"Initialization and Teardown"),Object(i.b)("p",null,"Components have an initialization method, which can be used to perform asynchronous startup logic, and a teardown method, which can be used to free resources when a component is removed from the layout."),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Always call ",Object(i.b)("inlineCode",{parentName:"p"},"base.Dispose(disposing)")," when overriding the ",Object(i.b)("inlineCode",{parentName:"p"},"Dispose")," method. ",Object(i.b)("inlineCode",{parentName:"p"},"ComponentBase")," already implements ",Object(i.b)("inlineCode",{parentName:"p"},"IDisposable")," and ",Object(i.b)("inlineCode",{parentName:"p"},"IDisposableTracker"),", so only override the ",Object(i.b)("inlineCode",{parentName:"p"},"Dispose")," method if you have created new managed resources which need to be cleaned up."))),Object(i.b)("p",null,"To learn more about memory management in Geocortex Mobile, check out ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/sdk-memory-leaks"}),"this article"),", and the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Conceptual/Disposal"}),"relevant SDK sample"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'[assembly: Component(typeof(CustomComponent), "component", XmlNamespace = XmlNamespaces.SamplesNamespace)]\nnamespace VertiGIS.Mobile.Samples.Samples.Custom.Component\n{\n    internal class CustomComponent : ComponentBase\n    {\n        private bool disposed = false;\n\n        public CustomComponent()\n        {\n        }\n\n        ...\n\n        protected override async Task DoInitializeAsync()\n        {\n            // Initialization code.\n            // ...\n        }\n\n        protected override void Dispose(bool disposing)\n        {\n            if (disposed)\n            {\n                return;\n            }\n\n            if (disposing)\n            {\n                // Clean up managed resources.\n                // ...\n            }\n\n            // Clean up unmanaged resources.\n            // ...\n\n            base.Dispose(disposing);\n\n            disposed = true;\n        }\n    }\n}\n')),Object(i.b)("h2",{id:"component-lifecycle"},"Component Lifecycle"),Object(i.b)("p",null,"When a Geocortex Mobile Application boots up, the set of components which are in the layout are created. Next, any components that are initially active, depending on the layout, will be activated and initialized. ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/configuration-layout-reference#panels"}),"Components like the ",Object(i.b)("inlineCode",{parentName:"a"},"Panel"))," will only activate their first child."),Object(i.b)("h3",{id:"activation-and-deactivation"},"Activation and Deactivation"),Object(i.b)("p",null,"Custom code can listen and react to a components activation or deactivation by subscribing to the ",Object(i.b)("inlineCode",{parentName:"p"},"ui.activated")," or ",Object(i.b)("inlineCode",{parentName:"p"},"ui.deactivated")," event. The ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/api-commands-operations-events#events"}),Object(i.b)("inlineCode",{parentName:"a"},"ui.*")," events")," contain various events relating to the component lifecycle."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"UIOperations")," class contains implements the commands ",Object(i.b)("inlineCode",{parentName:"p"},"ui.activate")," and ",Object(i.b)("inlineCode",{parentName:"p"},"ui.deactivate")," which can be used to examine and manipulate the activation state of components."))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"class CustomComponent : ComponentBase\n{\n    public CustomComponent(UIEvents uiEvents)\n    {\n        uiEvents.ComponentActivated.Subscribe(_onComponentActivated, this);\n        uiEvents.ComponentDeactivated.Subscribe(_onComponentDeactivated, this);\n\n    private async void _onComponentActivated(string id)\n    {\n        // ... react to component activation.\n    }\n\n    private async void _onComponentDeactivated(string id)\n    {\n        // ... react to component deactivation.\n    }\n    ...\n}\n\n")),Object(i.b)("h2",{id:"relevant-sdk-samples"},"Relevant SDK Samples"),Object(i.b)("p",null,"Check out the relevant Geocortex Mobile SDK Samples:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Custom/Component"}),"Custom Component"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Custom/ComponentConfiguration"}),"Component with Configuration"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Custom/XamlComponent"}),"Component with XAML UI")))),Object(i.b)("h2",{id:"next-steps"},"Next Steps"),Object(i.b)(m.a,{mdxType:"UseCaseContainer"},Object(i.b)(s.a,{title:"Learn how to use Commands and Operations with Components",description:"Learn how to run and implement commands and operations with custom components",link:Object(c.a)("docs/mobile/sdk-commands-operations"),mdxType:"UseCaseCard"}),Object(i.b)(s.a,{title:"Learn about Component Interactions",description:"Learn about how components and services can interact with each other",link:Object(c.a)("docs/mobile/sdk-component-service-interactions"),mdxType:"UseCaseCard"}),Object(i.b)(s.a,{title:"Create a Component with a Complex UI",description:"Follow along with a more in depth component example",link:Object(c.a)("docs/mobile/tutorial-implement-component-with-ui"),mdxType:"UseCaseCard"}),Object(i.b)(s.a,{title:"Create a Component that Consumes App Config",description:"Learn more about writing components that consume configuration values.",link:Object(c.a)("docs/mobile/tutorial-implement-component-participate-app-config"),mdxType:"UseCaseCard"})))}u.isMDXComponent=!0},310:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),o=n.n(a),i=n(129),c=n.n(i);function s(e){var t=e.children;return o.a.createElement("div",{className:c.a.root},t)}},311:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));n(312);var a=n(306),o=n(0),i=n.n(o),c=n(301),s=n(130),m=n.n(s);function p(e){var t=e.title,n=e.description,o=e.link;return i.a.createElement("div",{className:Object(c.a)("card-demo",m.a.root)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h3",null,t)),i.a.createElement("div",{className:"card__body"},i.a.createElement("p",null,n)),i.a.createElement("div",{className:"card__footer"},i.a.createElement(a.a,{className:"button button--secondary button--block",to:o},"Get Started"))))}}}]);