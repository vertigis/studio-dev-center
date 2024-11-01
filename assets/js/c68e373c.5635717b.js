"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[1793,7248],{6622:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=t(4848),s=t(8453);const i={},r=void 0,a={id:"mobile/snippets/quickstart-prereqs",title:"quickstart-prereqs",description:"Check out and setup the VertiGIS Studio Mobile SDK Quickstart project.",source:"@site/docs/mobile/snippets/quickstart-prereqs.mdx",sourceDirName:"mobile/snippets",slug:"/mobile/snippets/quickstart-prereqs",permalink:"/docs/mobile/snippets/quickstart-prereqs",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/snippets/quickstart-prereqs.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[];function m(e){const n={a:"a",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(n.p,{children:["Check out and setup the ",(0,o.jsx)(n.a,{href:"/docs/mobile/sdk-overview",children:"VertiGIS Studio Mobile SDK Quickstart project"}),"."]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},371:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>x,contentTitle:()=>d,default:()=>f,frontMatter:()=>u,metadata:()=>h,toc:()=>g});var o=t(4848),s=t(8453),i=t(6025),r=t(1470),a=t(9365),l=t(106),c=t(6622),m=t(9389),p=t(556);const u={title:"Build a Custom Component with UI",description:"VertiGIS Studio Mobile - Learn how to implement a custom component with UI"},d=void 0,h={id:"mobile/tutorial-implement-component-with-ui",title:"Build a Custom Component with UI",description:"VertiGIS Studio Mobile - Learn how to implement a custom component with UI",source:"@site/docs/mobile/tutorial-implement-component-with-ui.mdx",sourceDirName:"mobile",slug:"/mobile/tutorial-implement-component-with-ui",permalink:"/docs/mobile/tutorial-implement-component-with-ui",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/tutorial-implement-component-with-ui.mdx",tags:[],version:"current",frontMatter:{title:"Build a Custom Component with UI",description:"VertiGIS Studio Mobile - Learn how to implement a custom component with UI"},sidebar:"mobile",previous:{title:"Build a Custom Command",permalink:"/docs/mobile/tutorial-implement-command-operation"},next:{title:"Pull Component Data from App Config",permalink:"/docs/mobile/tutorial-implement-component-participate-app-config"}},x={},g=[{value:"Prerequisites",id:"prerequisites",level:2},...c.toc,{value:"Create a Component Skeleton",id:"create-a-component-skeleton",level:2},{value:"Add the Component to your Layout",id:"add-the-component-to-your-layout",level:2},{value:"Use XAML to define your UI",id:"use-xaml-to-define-your-ui",level:2},{value:"Extend your Component with Custom Code",id:"extend-your-component-with-custom-code",level:2},{value:"Example: Progress Bar",id:"example-progress-bar",level:3},{value:"Relevant SDK Samples",id:"relevant-sdk-samples",level:2},{value:"Next Steps",id:"next-steps",level:2}];function b(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Did you know VertiGIS Studio Workflow allows you to ",(0,o.jsx)(n.a,{href:"https://docs.vertigisstudio.com/workflow/latest/help/forms.html",children:"create custom forms"})," you can present to an end user?"]})}),"\n",(0,o.jsxs)(n.p,{children:["Implementing a custom component in VertiGIS Studio Mobile gives you the highest degree of flexibility with what you can do. ",(0,o.jsx)(n.a,{href:"/docs/mobile/sdk-components-overview",children:"Components"})," can display custom, dynamic UI, register operation implementations, store persistent data, and more. They are also one of the most complex ways of customizing your VertiGIS Studio Mobile app, so it might be worthwhile to review simpler options like ",(0,o.jsx)(n.a,{href:"/docs/mobile/configuration-commands-operations",children:"Commands and Operations"})," or ",(0,o.jsx)(n.a,{href:"/docs/mobile/tutorial-display-custom-form",children:"Workflow"})," first."]}),"\n",(0,o.jsx)(n.p,{children:"By the end of this article, you'll have the knowledge to build a component that displays a progress bar that is advanced by a button."}),"\n",(0,o.jsx)(l.A,{src:(0,i.A)("video/component-with-ui-demo.webm")}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsx)(c.default,{}),"\n",(0,o.jsx)(n.h2,{id:"create-a-component-skeleton",children:"Create a Component Skeleton"}),"\n",(0,o.jsxs)(n.p,{children:["Create a new file ",(0,o.jsx)(n.code,{children:"components/CustomComponent.cs"})," under the platform agnostic project.\nIn the file, add a new component class ",(0,o.jsx)(n.code,{children:"CustomComponent"})," and ",(0,o.jsxs)(n.a,{href:"/docs/mobile/sdk-dependency-injection",children:["register it with ",(0,o.jsx)(n.strong,{children:"Autofac"})]}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cs",metastring:'title="App1/App1/components/CustomComponent.cs"',children:'using App1;\nusing App1.Components;\nusing VertiGIS.Mobile.Composition.Layout;\nusing System.Xml.Linq;\nusing Xamarin.Forms;\n\n// highlight-next-line\n[assembly: Component(typeof(CustomComponent), "custom-component", XmlNamespace = XmlNamespaces.App1Namespace)]\nnamespace App1.Components\n{\n    // highlight-next-line\n    class CustomComponent : ComponentBase\n    {\n        protected override VisualElement Create(XNode node)\n        {\n            return new Label(){ Text = "My Custom Component" };\n        }\n    }\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"add-the-component-to-your-layout",children:"Add the Component to your Layout"}),"\n",(0,o.jsxs)(n.p,{children:["First, the ",(0,o.jsx)(n.a,{href:"/docs/mobile/configuration-layout-getting-started",children:"layout"})," needs to be told where to find your component. In the assembly attribute of the ",(0,o.jsx)(n.code,{children:"CustomComponent"}),", we declared it to be part of the ",(0,o.jsx)(n.code,{children:"App1Namespace"})," which is defined in ",(0,o.jsx)(n.code,{children:"XmlNamespaces.cs"})," We need to add this ",(0,o.jsx)(n.a,{href:"/docs/mobile/configuration-layout-getting-started#namespaces",children:"xml namespace"})," as an attribute on the layout. In this example, it's added with the alias ",(0,o.jsx)(n.code,{children:"custom"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",metastring:'title="App1/App1/layout-large.xml',children:'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd"\n    // highlight-next-line\n    xmlns:custom="https://your.org/layout/app1">\n    <gxm:taskbar>\n        <map slot="main"/>\n    </gxm:taskbar>\n</layout>\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Now that the ",(0,o.jsx)(n.code,{children:"custom"})," namespace has been added, the component can be added to the layout. For this example, it was added into a ",(0,o.jsx)(n.a,{href:"/docs/mobile/configuration-layout-reference#panels",children:"Panel"})," that lives in the taskbar."]}),"\n",(0,o.jsxs)(r.A,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"User Interface",value:"ui"}],children:[(0,o.jsx)(a.A,{value:"layout",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd"\n    xmlns:custom="https://your.org/layout/app1">\n    <gxm:taskbar>\n        \x3c!--Taskbar / custom component--\x3e\n        <panel>\n            // highlight-next-line\n            <custom:custom-component icon="info"/>\n        </panel>\n        <map slot="main"/>\n    </gxm:taskbar>\n</layout>\n'})})}),(0,o.jsx)(a.A,{value:"ui",children:(0,o.jsx)("img",{src:(0,i.A)("img/mobile-custom-component-simple.png"),alt:"Custom Component with Text Block"})})]}),"\n",(0,o.jsx)(n.h2,{id:"use-xaml-to-define-your-ui",children:"Use XAML to define your UI"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/xaml/xaml-basics/",children:"XAML is a markup language created by Microsoft"}),", and one of the recommended patterns for defining UI in Xamarin Forms. We can modify our component to reference a ",(0,o.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/user-interface/controls/views",children:"XAML view"}),"."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Right click on the ",(0,o.jsx)(n.code,{children:"Components"}),' folder and select "Add" > "New Item" > "Content View"']}),"\n",(0,o.jsxs)(n.li,{children:["Rename the files and classes within to ",(0,o.jsx)(n.code,{children:"CustomComponentView.xaml"})," and ",(0,o.jsx)(n.code,{children:"CustomComponentView.xaml.cs"})]}),"\n",(0,o.jsxs)(n.li,{children:["Modify the ",(0,o.jsx)(n.code,{children:"CustomComponent"})," to return this new view for its content."]}),"\n"]}),"\n",(0,o.jsxs)(r.A,{defaultValue:"component",values:[{label:"Component",value:"component"},{label:"View",value:"view"},{label:"Code Behind",value:"code-behind"},{label:"UI",value:"ui"}],children:[(0,o.jsx)(a.A,{value:"component",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cs",metastring:'title="App1/App1/components/CustomComponent.cs"',children:'using App1;\nusing App1.Components;\nusing VertiGIS.Mobile.Composition.Layout;\nusing System.Xml.Linq;\nusing Xamarin.Forms;\n\n[assembly: Component(typeof(CustomComponent), "custom-component", XmlNamespace = XmlNamespaces.App1Namespace)]\nnamespace App1.Components\n{\n    class CustomComponent : ComponentBase\n    {\n        protected override VisualElement Create(XNode node)\n        {\n            // highlight-next-line\n            return new CustomComponentView();\n        }\n    }\n}\n\n'})})}),(0,o.jsx)(a.A,{value:"view",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",metastring:'title="App1/App1/components/CustomComponentView.xaml"',children:'<?xml version="1.0" encoding="UTF-8"?>\n<ContentView xmlns="http://xamarin.com/schemas/2014/forms"\n             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"\n             xmlns:d="http://xamarin.com/schemas/2014/forms/design"\n             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n             mc:Ignorable="d"\n             x:Class="App1.Components.CustomComponentView">\n  <ContentView.Content>\n      <StackLayout>\n          <Label Text="Hello Xamarin.Forms!" />\n      </StackLayout>\n  </ContentView.Content>\n</ContentView>\n'})})}),(0,o.jsx)(a.A,{value:"code-behind",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cs",metastring:'title="App1/App1/components/CustomComponentView.xaml.cs"',children:"using App1.Components;\nusing VertiGIS.Mobile.Composition;\nusing Xamarin.Forms;\nusing Xamarin.Forms.Xaml;\n\n[assembly: View(typeof(CustomComponentView))]\nnamespace App1.Components\n{\n    [XamlCompilation(XamlCompilationOptions.Compile)]\n    public partial class CustomComponentView : ContentView\n    {\n        public CustomComponentView()\n        {\n            InitializeComponent();\n        }\n    }\n}\n"})})}),(0,o.jsx)(a.A,{value:"ui",children:(0,o.jsx)("img",{src:(0,i.A)("img/mobile-custom-component-xamarin-view.png"),alt:"Custom Component with Text Block"})})]}),"\n",(0,o.jsx)(n.p,{children:"Congratulations! You've built a working component with UI that is exposed in Mobile."}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Learn about how to extend this component to ",(0,o.jsx)(n.a,{href:"/docs/mobile/tutorial-implement-component-participate-app-config",children:"participate in app config"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"extend-your-component-with-custom-code",children:"Extend your Component with Custom Code"}),"\n",(0,o.jsxs)(n.p,{children:["From here, you can implement your own business logic and interfaces, create custom ",(0,o.jsx)(n.a,{href:"/docs/mobile/sdk-commands-operations#implementing-commands-and-operations",children:"Commands and Operations"})," that are powered by and/or interact with your component, and much more. The ",(0,o.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/xaml/",children:"Xamarin Forms Documentation"})," has excellent guides to implementing user interfaces in Xaml."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["VertiGIS Studio Mobile comes with built-in ",(0,o.jsx)(n.a,{href:"https://github.com/vertigis/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Custom/GeocortexMobileElements",children:"Enhanced Components"})," that can ease development and styling of custom UI."]})}),"\n",(0,o.jsx)(n.h3,{id:"example-progress-bar",children:"Example: Progress Bar"}),"\n",(0,o.jsxs)(n.p,{children:["Here's an example of a component with a progress bar that is advanced on a button click. It uses a ",(0,o.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/xaml/xaml-basics/data-bindings-to-mvvm",children:"MVVM pattern"})," to power the user interface, as is best practice recommended by Xamarin."]}),"\n",(0,o.jsxs)(r.A,{defaultValue:"component",values:[{label:"Component",value:"component"},{label:"View",value:"view"},{label:"Code Behind",value:"code-behind"},{label:"View Model",value:"view-model"},{label:"User Interface",value:"ui"}],children:[(0,o.jsx)(a.A,{value:"component",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cs",metastring:'title="App1/App1/components/ProgressBarComponent.cs"',children:'using App1;\nusing App1.Components;\nusing VertiGIS.Mobile.Composition.Layout;\nusing System.Xml.Linq;\nusing Xamarin.Forms;\n\n[assembly: Component(typeof(ProgressBarComponent), "progress-bar-component", XmlNamespace = XmlNamespaces.App1Namespace)]\nnamespace App1.Components\n{\n    class ProgressBarComponent : ComponentBase\n    {\n        private View _view;\n\n        // The view is injected as a dependency\n        // highlight-next-line\n        public ProgressBarComponent(ProgressBarComponentView view)\n        {\n            _view = view;\n        }\n        protected override VisualElement Create(XNode node)\n        {\n            return _view;\n        }\n    }\n}\n'})})}),(0,o.jsx)(a.A,{value:"view",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",metastring:'title="App1/App1/components/ProgressBarComponentView.xaml',children:'<?xml version="1.0" encoding="UTF-8"?>\n<ContentView xmlns="http://xamarin.com/schemas/2014/forms"\n             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"\n             xmlns:d="http://xamarin.com/schemas/2014/forms/design"\n             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n             mc:Ignorable="d"\n             x:Class="App1.Components.ProgressBarComponentView">\n    <ContentView.Content>\n        <StackLayout Margin="20">\n            <StackLayout Spacing="20" IsVisible="{Binding WorkNotComplete}">\n                <Label Text="Click the button to advance the progress bar."></Label>\n                <Button Text="Do some work." Clicked="DoWork_Clicked"></Button>\n                <ProgressBar ProgressColor="Red" Progress="{Binding Progress}" />\n            </StackLayout>\n            <StackLayout Spacing="20" IsVisible="{Binding WorkComplete}">\n                <Label  Text="Work Complete"></Label>\n                <Button Text="Reset" Clicked="Reset_Clicked"></Button>\n            </StackLayout>\n        </StackLayout>\n    </ContentView.Content>\n</ContentView>\n'})})}),(0,o.jsx)(a.A,{value:"code-behind",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cs",metastring:'title="App1/App1/components/ProgressBarComponentView.xaml.cs"',children:'using App1.Components;\nusing VertiGIS.Mobile.Composition;\nusing VertiGIS.Mobile.Infrastructure.Messaging;\nusing System;\nusing Xamarin.Forms;\nusing Xamarin.Forms.Xaml;\n\n// Here, the view is registered with Autofac so it can be injected.\n// highlight-next-line\n[assembly: View(typeof(ProgressBarComponentView))]\nnamespace App1.Components\n{\n    [XamlCompilation(XamlCompilationOptions.Compile)]\n    public partial class ProgressBarComponentView : ContentView\n    {\n        private UIOperations _uiOperations;\n        public ProgressBarComponentViewModel ViewModel => BindingContext as ProgressBarComponentViewModel;\n        public ProgressBarComponentView(ProgressBarComponentViewModel viewModel, UIOperations uiOperations)\n        {\n            _uiOperations = uiOperations;\n            BindingContext = viewModel;\n            InitializeComponent();\n        }\n\n        private void DoWork_Clicked(object sender, EventArgs e)\n        {\n            if (!ViewModel.WorkComplete)\n            {\n                ViewModel.Progress += 0.2;\n                if (ViewModel.Progress >= 1.0)\n                {\n                    ViewModel.WorkComplete = true;\n                    _uiOperations.Alert.Execute(new UIAlertArgs() { Title = "Success", Message = "Work Complete", ButtonText = "Ok" });\n                }\n            }\n        }\n\n        private void Reset_Clicked(object sender, EventArgs e)\n        {\n            ViewModel.Progress = 0;\n            ViewModel.WorkComplete = false;\n        }\n    }\n}\n'})})}),(0,o.jsx)(a.A,{value:"view-model",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cs",metastring:'title="App1/App1/components/ProgressBarComponentViewModel.cs"',children:"using App1.Components;\nusing VertiGIS.Mobile.Composition;\nusing VertiGIS.Mobile.Composition.Views;\n\n// Here, the view model is registered with autofac so it can be injected\n// highlight-next-line\n[assembly: ViewModel(typeof(ProgressBarComponentViewModel))]\nnamespace App1.Components\n{\n    public class ProgressBarComponentViewModel : NotifyPropertyBase\n    {\n        private double _progress = 0;\n\n        private bool _workComplete = false;\n\n        public double Progress\n        {\n            get => _progress;\n            set => SetProperty(ref _progress, value);\n        }\n\n        public bool WorkComplete\n        {\n            get => _workComplete;\n            set\n            {\n                SetProperty(ref _workComplete, value);\n                OnPropertyChanged(nameof(WorkNotComplete));\n            }\n        }\n\n        public bool WorkNotComplete => !WorkComplete;\n    }\n}\n"})})}),(0,o.jsx)(a.A,{value:"ui",children:(0,o.jsx)(l.A,{src:(0,i.A)("video/component-with-ui-demo.webm")})})]}),"\n",(0,o.jsxs)(n.p,{children:["This example refactored the original example to use ",(0,o.jsx)(n.a,{href:"https://autofaccn.readthedocs.io/en/latest/register/registration.html",children:"Autofac dependency injection"})," to instantiate the View and ViewModel. Setting up your classes so dependencies are handled by Autofac in the constructor allows you to allow inject other VertiGIS Studio Mobile classes registered with Autofac, like how the ",(0,o.jsx)(n.code,{children:"UIOperations"})," class is injected into the view."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Learn more of this ViewModel's use of the VertiGIS Studio Mobile helper class ",(0,o.jsx)(n.a,{href:"/docs/mobile/sdk-components-viewmodel-helper-class",children:(0,o.jsx)(n.code,{children:"NotifyPropertyBase"})}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"relevant-sdk-samples",children:"Relevant SDK Samples"}),"\n",(0,o.jsx)(n.p,{children:"Check out the relevant VertiGIS Studio Mobile SDK Samples:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/vertigis/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Custom/Component",children:"Custom Component"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/vertigis/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Custom/XamlComponent",children:"Custom Component with XAML"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,o.jsxs)(p.A,{children:[(0,o.jsx)(m.A,{title:"Component Reference",description:"Learn more about components in VertiGIS Studio Mobile",link:(0,i.A)("docs/mobile/sdk-components-reference")}),(0,o.jsx)(m.A,{title:"Component and Service Interactions",description:"Learn how components and services interact in VertiGIS Studio Mobile",link:(0,i.A)("docs/mobile/sdk-component-service-interactions")}),(0,o.jsx)(m.A,{title:"Implement a Custom Service",description:"Learn how to implement a custom service using the VertiGIS Studio Mobile SDK",link:(0,i.A)("docs/mobile/sdk-services-create")})]})]})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(b,{...e})}):b(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>r});t(6540);var o=t(8215);const s={tabItem:"tabItem_Ymn6"};var i=t(4848);function r({children:e,hidden:n,className:t}){return(0,i.jsx)("div",{role:"tabpanel",className:(0,o.A)(s.tabItem,t),hidden:n,children:e})}},1470:(e,n,t)=>{t.d(n,{A:()=>j});var o=t(6540),s=t(8215),i=t(3104),r=t(6347),a=t(205),l=t(7485),c=t(1682),m=t(9466);function p(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return p(e).map((({props:{value:e,label:n,attributes:t,default:o}})=>({value:e,label:n,attributes:t,default:o})))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function d({value:e,tabValues:n}){return n.some((n=>n.value===e))}function h({queryString:e=!1,groupId:n}){const t=(0,r.W6)(),s=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,l.aZ)(s),(0,o.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})}),[s,t])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=u(e),[r,l]=(0,o.useState)((()=>function({defaultValue:e,tabValues:n}){if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!d({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[c,p]=h({queryString:t,groupId:s}),[x,g]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,s]=(0,m.Dv)(n);return[t,(0,o.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:s}),b=(()=>{const e=c??x;return d({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{b&&l(b)}),[b]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),g(e)}),[p,g,i]),tabValues:i}}var g=t(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(4848);function v({className:e,block:n,selectedValue:t,selectValue:o,tabValues:r}){const a=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),c=e=>{const n=e.currentTarget,s=a.indexOf(n),i=r[s].value;i!==t&&(l(n),o(i))},m=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},e),children:r.map((({value:e,label:n,attributes:o})=>(0,f.jsx)("li",{role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:e=>a.push(e),onKeyDown:m,onClick:c,...o,className:(0,s.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":t===e}),children:n??e},e)))})}function C({lazy:e,children:n,selectedValue:t}){const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=s.find((e=>e.props.value===t));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function w(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,f.jsx)(v,{...e,...n}),(0,f.jsx)(C,{...e,...n})]})}function j(e){const n=(0,g.A)();return(0,f.jsx)(w,{...e,children:p(e.children)},String(n))}},106:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);const o={video:"video_DXmL"};var s=t(4848);function i({src:e}){return(0,s.jsxs)("video",{autoPlay:!0,loop:!0,muted:!0,className:o.video,children:[(0,s.jsx)("source",{src:e,type:"video/webm"}),"Your browser does not support the video tag."]})}},9389:(e,n,t)=>{t.d(n,{A:()=>a});var o=t(8774),s=(t(6540),t(53));const i={root:"root_Uwqo"};var r=t(4848);function a({title:e,description:n,link:t}){return(0,r.jsx)("div",{className:(0,s.A)("card-demo",i.root),children:(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("div",{className:"card__header",children:(0,r.jsx)("h3",{children:e})}),(0,r.jsx)("div",{className:"card__body",children:(0,r.jsx)("p",{children:n})}),(0,r.jsx)("div",{className:"card__footer",children:(0,r.jsx)(o.A,{className:"button button--secondary button--block",to:t,children:"Get Started"})})]})})}},556:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);const o={root:"root_vxd5"};var s=t(4848);function i({children:e}){return(0,s.jsx)("div",{className:o.root,children:e})}},53:(e,n,t)=>{function o(e){var n,t,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=o(e[n]))&&(s&&(s+=" "),s+=t);else for(n in e)e[n]&&(s&&(s+=" "),s+=n);return s}t.d(n,{A:()=>s});const s=function(){for(var e,n,t=0,s="";t<arguments.length;)(e=arguments[t++])&&(n=o(e))&&(s&&(s+=" "),s+=n);return s}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(6540);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);