/*! For license information please see 7b53fc44.cdc7c5ed.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[23,9,25,42],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var o=n(1),a=n(9),i=(n(0),n(185)),r={},c={id:"mobile/snippets/prereqs",title:"prereqs",description:"## Prerequisites",source:"@site/docs/mobile/snippets/prereqs.mdx",permalink:"/dev-center/docs/mobile/snippets/prereqs",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/prereqs.mdx"},s=[{value:"Prerequisites",id:"prerequisites",children:[]}],m={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("p",null,"Download the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/dev-center/docs/mobile/quick-start"}),"Quick Start")," application and open it in Visual Studio."))}l.isMDXComponent=!0},129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var o=n(1),a=n(9),i=(n(0),n(185)),r={},c={id:"mobile/snippets/autofac",title:"autofac",description:":::note",source:"@site/docs/mobile/snippets/autofac.mdx",permalink:"/dev-center/docs/mobile/snippets/autofac",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/autofac.mdx"},s=[],m={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("div",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Geocortex Mobile uses ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://autofaccn.readthedocs.io/en/latest/index.html"}),"autofac")," to register, locate, and inject components and services. See ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/dev-center/docs/mobile/dependency-injection"}),"dependency injection")," for more info."))))}l.isMDXComponent=!0},133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var o=n(1),a=n(9),i=(n(0),n(185)),r={},c={id:"mobile/snippets/doomsday-cookie-clicker-view-model",title:"doomsday-cookie-clicker-view-model",description:"```csharp",source:"@site/docs/mobile/snippets/doomsday-cookie-clicker-view-model.mdx",permalink:"/dev-center/docs/mobile/snippets/doomsday-cookie-clicker-view-model",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/doomsday-cookie-clicker-view-model.mdx"},s=[],m={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-csharp"}),"using App1.Components;\nusing Geocortex.Mobile.Composition;\nusing Geocortex.Mobile.Composition.Views;\n\n[assembly: ViewModel(typeof(HarmlessComponentViewModel))]\nnamespace App1.Components\n{\n    public class HarmlessComponentViewModel : NotifyPropertyBase\n    {\n        private double _progress = 0;\n\n        private bool _isDoomsday = false;\n\n        public double Progress\n        {\n            get => _progress;\n            set => SetProperty(ref _progress, value);\n        }\n\n        public bool IsDoomsday\n        {\n            get => _isDoomsday;\n            set => SetProperty(ref _isDoomsday, value);\n        }\n    }\n}\n\n")))}l.isMDXComponent=!0},160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return h})),n.d(t,"default",(function(){return O}));var o=n(1),a=n(9),i=(n(0),n(185)),r=n(192),c=n(196),s=n(197),m=n(199),l=n(129),p=n(126),d=n(133),b={title:"Custom Component with a Visual Interface",description:"Geocortex Mobile - Learn how to implement a custom component with a visual interface"},u={id:"mobile/implement-component-with-ui",title:"Custom Component with a Visual Interface",description:"Geocortex Mobile - Learn how to implement a custom component with a visual interface",source:"@site/docs/mobile/implement-component-with-ui.mdx",permalink:"/dev-center/docs/mobile/implement-component-with-ui",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/implement-component-with-ui.mdx",sidebar:"mobile",previous:{title:"Custom Commands and Operations",permalink:"/dev-center/docs/mobile/implement-command-operation"},next:{title:"App Config for a Component",permalink:"/dev-center/docs/mobile/implement-component-participate-app-config"}},h=[{value:"Create a Component Skeleton",id:"create-a-component-skeleton",children:[]},{value:"Add the Component to your Layout",id:"add-the-component-to-your-layout",children:[]},{value:"Use XAML to define your UI",id:"use-xaml-to-define-your-ui",children:[]},{value:"Extend your Component with Custom Code",id:"extend-your-component-with-custom-code",children:[{value:"Example: Doomsday Cookie Clicker",id:"example-doomsday-cookie-clicker",children:[]}]}],v={rightToc:h};function O(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},v,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("div",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Did you know Geocortex Workflow allows you to ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/forms.htm#Overview_of_Forms%3FTocPath%3DForms%7COverview%2520of%2520Forms%7C_____0"}),"create custom forms")," you can present to an end user?"))),Object(i.b)("p",null,"Implementing a custom component in Mobile gives you one of the highest degrees of flexibility with what you can do. ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/dev-center/docs/mobile/concepts-components-services"}),"Components")," can display custom, dynamic UI, register operation implementations, store persistent data, and more. They are also one of the most complex ways of customizing your mobile app, so it might be worthwhile to simplier options like ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/dev-center/docs/mobile/concepts-commands-operations"}),"Commands and Operations")," or ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/dev-center/docs/mobile/change-default-search-behaviour"}),"Workflow")," first."),Object(i.b)(p.default,{mdxType:"PrereqsSnippet"}),Object(i.b)("h2",{id:"create-a-component-skeleton"},"Create a Component Skeleton"),Object(i.b)("p",null,"Create a new file ",Object(i.b)("inlineCode",{parentName:"p"},"Components/HarmlessComponent.cs")," under the platform agnostic project.\nIn the file, add a new component class ",Object(i.b)("inlineCode",{parentName:"p"},"HarmlessComponent")," and register it with ",Object(i.b)("strong",{parentName:"p"},"autofac")),Object(i.b)(l.default,{mdxType:"AutofacSnippet"}),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-csharp"}),'using App1;\nusing App1.Components;\nusing Geocortex.Mobile.Composition.Layout;\nusing System.Xml.Linq;\nusing Xamarin.Forms;\n\n[assembly: Component(typeof(HarmlessComponent), "harmless-component", XmlNamespace = XmlNamespaces.App1Namespace)]\nnamespace App1.Components\n{\n    class HarmlessComponent : ComponentBase\n    {\n        protected override VisualElement Create(XNode node)\n        {\n            return new Label(){ "My Custom Component" };\n        }\n    }\n}\n')),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("div",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The two key components of this snippet are the ",Object(i.b)("inlineCode",{parentName:"p"},"[assembly: Component(...)]")," tag and the class extension ",Object(i.b)("inlineCode",{parentName:"p"},"HarmlessComponent : ComponentBase"),". These two pieces register the component with Geocortex Mobile and cause it to be initialized on startup."))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("div",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"It's convention for the name of the component in the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/dev-center/docs/mobile/concepts-layout"}),Object(i.b)("inlineCode",{parentName:"a"},"layout"))," to be lower case and kebab case, i.e. ",Object(i.b)("inlineCode",{parentName:"p"},"harmless-component"),"."))),Object(i.b)("h2",{id:"add-the-component-to-your-layout"},"Add the Component to your Layout"),Object(i.b)("p",null,"First, the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/dev-center/docs/mobile/concepts-layout"}),"layout")," needs to be told where to find your component. ","*"," In order to find your component, you have to tell the layout what namespace it belongs too. In the assembly attribute of the ",Object(i.b)("inlineCode",{parentName:"p"},"HarmlessComponent"),", we declared it to be part of the ",Object(i.b)("inlineCode",{parentName:"p"},"App1Namespace")," which is defined in ",Object(i.b)("inlineCode",{parentName:"p"},"XmlNamespaces.cs")," We need to add this namespace as an attribute on the layout. In this example, it's added with the alias ",Object(i.b)("inlineCode",{parentName:"p"},"custom"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerFramework/layout/layout-mobile.xsd"\n    xmlns:custom="https://your.org/layout/app1">\n  ...\n</layout>\n')),Object(i.b)("p",null,"Now that the ",Object(i.b)("inlineCode",{parentName:"p"},"custom")," namespace has been added, the component can be added to the layout. For this example, it was added into a ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/dev-center/docs/mobile/concepts-layout#panels"}),"Panel")," that lives in the taskbar."),Object(i.b)(c.a,{defaultValue:"layout",values:[{label:"layout.xml",value:"layout"},{label:"User Interface",value:"ui"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"layout",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml"}),'<layout ...>\n  ...\n  <gxm:taskbar>\n    ...\n    \x3c!--Taskbar / custom component--\x3e\n    <panel>\n        <custom:harmless-component icon="warning"/>\n    </panel>\n  </gxm:taskbar>\n  ...\n</layout>\n'))),Object(i.b)(s.a,{value:"ui",mdxType:"TabItem"},Object(i.b)("img",{src:Object(r.a)("img/custom-component-with-ui-first-pass.png"),alt:"Custom Component with Text Block"}))),Object(i.b)("h2",{id:"use-xaml-to-define-your-ui"},"Use XAML to define your UI"),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/xaml/xaml-basics/"}),"XAML is a markup language created by Microsoft"),", and one of the reccomended patterns for defining UI in Xamarin Forms. We can modify our component to reference a ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/user-interface/controls/views"}),"XAML view"),"."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Right click on the ",Object(i.b)("inlineCode",{parentName:"li"},"Components"),' folder and select "Add" > "New Item" > "Content View"'),Object(i.b)("li",{parentName:"ol"},"Rename the files and classes within to ",Object(i.b)("inlineCode",{parentName:"li"},"HarmlessComponentView.xaml")," and ",Object(i.b)("inlineCode",{parentName:"li"},"HarmlessComponentView.xaml.cs")),Object(i.b)("li",{parentName:"ol"},"Modify the ",Object(i.b)("inlineCode",{parentName:"li"},"HarmlessComponent")," to return this new view for it's content.")),Object(i.b)(c.a,{defaultValue:"component",values:[{label:"HarmlessComponent.cs",value:"component"},{label:"HarmlessComponentView.xaml",value:"view"},{label:"HarmlessComponentView.xaml.cs",value:"code-behind"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"component",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-csharp"}),'using App1;\nusing App1.Components;\nusing Geocortex.Mobile.Composition.Layout;\nusing System.Xml.Linq;\nusing Xamarin.Forms;\n\n[assembly: Component(typeof(HarmlessComponent), "harmless-component", XmlNamespace = XmlNamespaces.App1Namespace)]\nnamespace App1.Components\n{\n    class HarmlessComponent : ComponentBase\n    {\n        protected override VisualElement Create(XNode node)\n        {\n            return new HarmlessComponentView();\n        }\n    }\n}\n\n'))),Object(i.b)(s.a,{value:"view",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8"?>\n<ContentView xmlns="http://xamarin.com/schemas/2014/forms"\n             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"\n             xmlns:d="http://xamarin.com/schemas/2014/forms/design"\n             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n             mc:Ignorable="d"\n             x:Class="App1.Components.HarmlessComponentView">\n  <ContentView.Content>\n      <StackLayout>\n          <Label Text="Hello Xamarin.Forms!" />\n      </StackLayout>\n  </ContentView.Content>\n</ContentView>\n'))),Object(i.b)(s.a,{value:"code-behind",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-csharp"}),"using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nusing Xamarin.Forms;\nusing Xamarin.Forms.Xaml;\n\n[assembly: View(typeof(HarmlessComponentView))]\nnamespace App1.Components\n{\n    [XamlCompilation(XamlCompilationOptions.Compile)]\n    public partial class HarmlessComponentView : ContentView\n    {\n        public HarmlessComponentView()\n        {\n            InitializeComponent();\n        }\n    }\n}\n")))),Object(i.b)("p",null,"Congradulations! You've now built a working component with UI that is exposed in Mobile."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("div",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Learn about how to extend this component to ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/dev-center/docs/mobile/implement-component-participate-app-config"}),"participate in app config"),"."))),Object(i.b)("h2",{id:"extend-your-component-with-custom-code"},"Extend your Component with Custom Code"),Object(i.b)("p",null,"From here, you can implement your own buisness logic and interfaces, create custom ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/dev-center/docs/mobile/implement-command-operation"}),"Commands and Operations")," that are powered by and/or interact with your component, and much more. ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/xaml/"}),"Xamarin Forms Documentation")," has excellent guides to implementing user interfaces in Xaml."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("div",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Mobile comes built in ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/mobile-sdk-samples/samples/mobile-elements"}),"Enhanced Components")," that can ease development and styling of custom UI"))),Object(i.b)("h3",{id:"example-doomsday-cookie-clicker"},"Example: Doomsday Cookie Clicker"),Object(i.b)("p",null,"Here's an example of the ",Object(i.b)("inlineCode",{parentName:"p"},"HarmlessComponent")," modified and extended to be not so harmless. It uses a ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/xaml/xaml-basics/data-bindings-to-mvvm"}),"MVVM pattern")," to power the user interface, as is best practice reccomended by Xamarin."),Object(i.b)(c.a,{defaultValue:"component",values:[{label:"Component",value:"component"},{label:"View",value:"view"},{label:"Code Behind",value:"code-behind"},{label:"View Model",value:"view-model"},{label:"User Interface",value:"ui"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"component",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-csharp"}),'using App1;\nusing App1.Components;\nusing Geocortex.Mobile.Composition.Layout;\nusing System.Xml.Linq;\nusing Xamarin.Forms;\n\n[assembly: Component(typeof(HarmlessComponent), "harmless-component", XmlNamespace = XmlNamespaces.App1Namespace)]\nnamespace App1.Components\n{\n    class HarmlessComponent : ComponentBase\n    {\n        protected override VisualElement Create(XNode node)\n        {\n            return new HarmlessComponentView(new HarmlessComponentViewModel())\n            {\n            };\n        }\n    }\n}\n'))),Object(i.b)(s.a,{value:"view",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8"?>\n<ContentView xmlns="http://xamarin.com/schemas/2014/forms"\n             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"\n             xmlns:d="http://xamarin.com/schemas/2014/forms/design"\n             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n             xmlns:local="clr-namespace:App1.Components"\n             mc:Ignorable="d"\n             x:Class="App1.Components.HarmlessComponentView">\n  <ContentView.Resources>\n    <ResourceDictionary>\n      <local:BooleanNegationConverter x:Key="BoolNegate" />\n    </ResourceDictionary>\n  </ContentView.Resources>\n  <ContentView.Content>\n        <StackLayout Margin="20">\n            <StackLayout Spacing="20" IsVisible="{Binding IsDoomsday, Converter={StaticResource BoolNegate}}">\n                <Label Text="Don\'t you dare click the button"></Label>\n                <Button Text="I said don\'t click me." Clicked="Button_Clicked" IsEnabled="{Binding IsDoomsday, Converter={StaticResource BoolNegate}}"></Button>\n                <ProgressBar ProgressColor="Red" Progress="{Binding Progress}" />\n            </StackLayout>\n            <StackLayout Spacing="20" IsVisible="{Binding IsDoomsday}">\n                <Label  FontSize="Large" TextColor="Red" Text="BOOM"></Label>\n                <Label  Text="Look what you did, now the world is ended and I didn\'t even get to finish my ice cream."></Label>\n            </StackLayout>\n        </StackLayout>\n  </ContentView.Content>\n</ContentView>\n'))),Object(i.b)(s.a,{value:"code-behind",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-csharp"}),'using App1.Components;\nusing Geocortex.Mobile.Composition;\nusing Geocortex.Mobile.Infrastructure.Messaging;\nusing System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nusing Xamarin.Forms;\nusing Xamarin.Forms.Xaml;\n\n[assembly: View(typeof(HarmlessComponentView))]\nnamespace App1.Components\n{\n    [XamlCompilation(XamlCompilationOptions.Compile)]\n    public partial class HarmlessComponentView : ContentView\n    {\n        private UIOperations _uiOperations;\n        public HarmlessComponentViewModel ViewModel => BindingContext as HarmlessComponentViewModel;\n        public HarmlessComponentView(HarmlessComponentViewModel viewModel, UIOperations uiOperations)\n        {\n            _uiOperations = uiOperations;\n            BindingContext = viewModel;\n            InitializeComponent();\n        }\n\n        private void Button_Clicked(object sender, EventArgs e)\n        {\n            if (!ViewModel.IsDoomsday)\n            {\n                ViewModel.Progress += 0.2;\n                if (ViewModel.Progress >= 1.0)\n                {\n                    ViewModel.IsDoomsday = true;\n                    _uiOperations.Alert.Execute(new UIAlertArgs() { Title = "Oh No....", Message = "What have you done....", ButtonText = "Accept your fate." });\n                }\n            }\n        }\n    }\n}\n'))),Object(i.b)(s.a,{value:"view-model",mdxType:"TabItem"},Object(i.b)(d.default,{mdxType:"DoomsdayCookieClickerViewModel"})),Object(i.b)(s.a,{value:"ui",mdxType:"TabItem"},Object(i.b)(m.a,{src:Object(r.a)("video/component-with-ui-demo.webm"),mdxType:"DemoVideo"}))),Object(i.b)("p",null,"This example refactored the original example to use ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://autofaccn.readthedocs.io/en/latest/register/registration.html"}),"autofac dependency injection")," to instantiate the View and ViewModel. Setting up your classes so dependencies are handled by autofac in the constructor allows you to allow inject other Geocortex Mobile classes registered with Autofac, like how the ",Object(i.b)("inlineCode",{parentName:"p"},"UIOperations")," class is injected into the view."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("div",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Learn more of this ViewModel's use of the Geocortex Mobile helper class ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/dev-center/docs/mobile/viewmodel-helper-class"}),Object(i.b)("inlineCode",{parentName:"a"},"NotifyPropertyBase"))))))}O.isMDXComponent=!0},185:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),l=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=l(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(n),b=o,u=p["".concat(r,".").concat(b)]||p[b]||d[b]||i;return n?a.a.createElement(u,c({ref:t},m,{components:n})):a.a.createElement(u,c({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var m=2;m<i;m++)r[m]=n[m];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},186:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)&&o.length){var r=a.apply(null,o);r&&e.push(r)}else if("object"===i)for(var c in o)n.call(o,c)&&o[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(o=function(){return a}.apply(t,[]))||(e.exports=o)}()},187:function(e,t,n){"use strict";var o=n(0),a=n(50);t.a=function(){return Object(o.useContext)(a.a)}},192:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(193);var o=n(187);function a(e){var t=(Object(o.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},193:function(e,t,n){"use strict";var o=n(17),a=n(36),i=n(194),r="".startsWith;o(o.P+o.F*n(195)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),o=String(e);return r?r.call(t,o,n):t.slice(n,n+o.length)===o}})},194:function(e,t,n){var o=n(69),a=n(23);e.exports=function(e,t,n){if(o(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},195:function(e,t,n){var o=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[o]=!1,!"/./"[e](t)}catch(a){}}return!0}},196:function(e,t,n){"use strict";n(24),n(19),n(20);var o=n(0),a=n.n(o),i=n(186),r=n.n(i),c=n(131),s=n.n(c),m=37,l=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,c=e.values,p=Object(o.useState)(i),d=p[0],b=p[1],u=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:r()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":d===t,className:r()("tab-item",s.a.tabItem,{"tab-item--active":d===t}),key:t,ref:function(e){return u.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case m:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(u,e.target,e)},onFocus:function(){return b(t)},onClick:function(){return b(t)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(n).filter((function(e){return e.props.value===d}))[0]))}},197:function(e,t,n){"use strict";var o=n(0),a=n.n(o);t.a=function(e){return a.a.createElement("div",null,e.children)}},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(0),a=n.n(o);function i(e){var t=e.src;return a.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0},a.a.createElement("source",{src:t,type:"video/webm"}),"Your browser does not support the video tag.")}}}]);