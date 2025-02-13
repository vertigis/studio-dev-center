"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[560],{8576:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var o=n(4848),r=n(8453);const s={title:"Workflow Form Element Reference",sidebar_label:"Form Element Reference",description:"VertiGIS Studio Workflow - Reference for workflow form elements for web applications"},i=void 0,l={id:"workflow/sdk-mobile-form-reference",title:"Workflow Form Element Reference",description:"VertiGIS Studio Workflow - Reference for workflow form elements for web applications",source:"@site/docs/workflow/sdk-mobile-form-reference.mdx",sourceDirName:"workflow",slug:"/workflow/sdk-mobile-form-reference",permalink:"/docs/workflow/sdk-mobile-form-reference",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/workflow/sdk-mobile-form-reference.mdx",tags:[],version:"current",frontMatter:{title:"Workflow Form Element Reference",sidebar_label:"Form Element Reference",description:"VertiGIS Studio Workflow - Reference for workflow form elements for web applications"},sidebar:"workflow",previous:{title:"Activity Reference",permalink:"/docs/workflow/sdk-mobile-activity-reference"},next:{title:"Reference a Third Party Library",permalink:"/docs/workflow/sdk-mobile-reference-third-party-library"}},m={},a=[{value:"Registering Form Elements",id:"registering-form-elements",level:2},{value:"Using Form Elements",id:"using-form-elements",level:2},{value:"Raising Form Events",id:"raising-form-events",level:2},{value:"Access Properties of Custom Form Elements",id:"access-properties-of-custom-form-elements",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["In the VertiGIS Studio Workflow .NET SDK, all custom form elements must implement ",(0,o.jsx)(t.code,{children:"IFormComponent"}),". However, it is typically easier to extend the ",(0,o.jsx)(t.code,{children:"ContentComponent"})," class, which is the recommended practice. The examples shown here extend ",(0,o.jsx)(t.code,{children:"ContentComponent"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-xml",metastring:'title="App1/App1/workflow/CustomFormElement.xaml"',children:'<?xml version="1.0" encoding="UTF-8"?>\n<core:ContentComponent xmlns="http://schemas.microsoft.com/dotnet/2021/maui"\n                       xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"\n                       xmlns:core="clr-namespace:VertiGIS.Mobile.Workflow.Core;assembly=VertiGIS.Mobile.Workflow"\n                       xmlns:views="clr-namespace:VertiGIS.Mobile.Toolkit.Views;assembly=VertiGIS.Mobile.Toolkit"\n                       x:Class="App1.Workflow.CustomFormElement">\n    <Label Text="I\'m a custom form element"/>\n</core:ContentComponent>\n'})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cs",metastring:'title="App1/App1/workflow/CustomFormElement.xaml.cs"',children:"namespace App1.Workflow\n{\n    [XamlCompilation(XamlCompilationOptions.Compile)]\n    public partial class CustomFormElement : ContentComponent\n    {\n        public CustomFormElement(VertiGIS.Workflow.Runtime.Definition.Forms.Element element, string name)\n            : base(element, name)\n        {\n            InitializeComponent();\n        }\n    }\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"registering-form-elements",children:"Registering Form Elements"}),"\n",(0,o.jsxs)(t.p,{children:["Form Elements must be registered through a ",(0,o.jsxs)(t.a,{href:"/docs/workflow/sdk-mobile-activity-reference#registering-activities",children:["custom workflow activity that extends ",(0,o.jsx)(t.code,{children:"RegisterCustomFormElementBase"})]}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cs",metastring:'title="App1/App1/workflow/RegisterComponent.cs"',children:'[assembly: Export(typeof(RegisterCustomFormElements))]\nnamespace App1.Workflow\n{\n    class RegisterCustomFormElements : RegisterCustomFormElementBase\n    {\n        public static string Action { get; } = "CustomFormElement";\n\n        public override Task<IDictionary<string, object?>> Execute(IDictionary<string, object?> inputs, IActivityContext context)\n        {\n            Register("CustomFormElement", typeof(CustomFormElement), context);\n            return Task.FromResult((IDictionary<string, object?>)new Dictionary<string, object?>());\n        }\n    }\n}\n'})}),"\n",(0,o.jsx)(t.h2,{id:"using-form-elements",children:"Using Form Elements"}),"\n",(0,o.jsxs)(t.p,{children:["Custom form elements can be used in a form through the special ",(0,o.jsx)(t.a,{href:"https://docs.vertigisstudio.com/workflow/latest/help/custom.html",children:'"custom" form element'}),". This form element displays custom form elements by referencing them by the ",(0,o.jsx)(t.code,{children:"id"})," they were registered with."]}),"\n",(0,o.jsx)(t.admonition,{title:"Important",type:"info",children:(0,o.jsxs)(t.p,{children:["Custom form elements will ",(0,o.jsx)(t.strong,{children:"only"})," be available to a workflow if the form element registration activity is run beforehand. It's best practice to run the form element registration activity at the start of a workflow."]})}),"\n",(0,o.jsx)(t.h2,{id:"raising-form-events",children:"Raising Form Events"}),"\n",(0,o.jsxs)(t.p,{children:["VertiGIS Studio Workflow form elements can raise ",(0,o.jsx)(t.a,{href:"https://docs.vertigisstudio.com/workflow/latest/help/form-events.html",children:"events"}),". A custom form element can also raise events, including a custom event type."]}),"\n",(0,o.jsxs)(t.p,{children:["Events are raised through the ",(0,o.jsx)(t.code,{children:"OnEventRaised"})," method of the form component. The following custom form element demonstrates how various form events can be raised."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-xml",metastring:'title="App1/App1/workflow/CustomFormComponent.xaml"',children:'<?xml version="1.0" encoding="UTF-8"?>\n<core:ContentComponent  xmlns:core="clr-namespace:VertiGIS.Mobile.Workflow.Core;assembly=VertiGIS.Mobile.Workflow"\n                        xmlns="http://schemas.microsoft.com/dotnet/2021/maui"\n                        xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"\n                        xmlns:views="clr-namespace:VertiGIS.Mobile.Toolkit.Views;assembly=VertiGIS.Mobile.Toolkit"\n                        x:Class="App1.Workflow.CustomFormComponent">\n    <VerticalStackLayout>\n        <views:EnhancedButton Text="Raise Clicked Event" Clicked="RaiseClickedEvent"/>\n        <views:EnhancedButton Text="Raise Changed Event" Clicked="RaiseChangedEvent"/>\n        <views:EnhancedButton Text="Raise Custom Event" Clicked="RaiseCustomEvent"/>\n    </VerticalStackLayout>\n</core:ContentComponent>\n'})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cs",metastring:'title="App1/App1/workflow/CustomFormComponent.xaml.cs"',children:'namespace App1.Workflow\n{\n    [XamlCompilation(XamlCompilationOptions.Compile)]\n    public partial class CustomFormComponent : ContentComponent\n    {\n        public CustomFormComponent(VertiGIS.Workflow.Runtime.Definition.Forms.Element element, string name)\n            : base(element, name)\n        {\n            InitializeComponent();\n        }\n\n        private void RaiseClickedEvent(object sender, EventArgs e)\n        {\n            RaiseEvent(new Event()\n            {\n                Type = Event.CLICKED\n            });\n        }\n\n        private void RaiseChangedEvent(object sender, EventArgs e)\n        {\n            RaiseEvent(new Event()\n            {\n                Type = Event.CHANGED\n            });\n        }\n\n        private void RaiseCustomEvent(object sender, EventArgs e)\n        {\n            RaiseEvent(new Event()\n            {\n                Type = Event.CUSTOM,\n                Argument = "Custom Argument"\n            });\n        }\n    }\n}\n'})}),"\n",(0,o.jsx)(t.h2,{id:"access-properties-of-custom-form-elements",children:"Access Properties of Custom Form Elements"}),"\n",(0,o.jsxs)(t.p,{children:["A custom form element may produce a value that a workflow needs to access at runtime. You can set a property on the ",(0,o.jsx)(t.code,{children:"this.Element"})," object to expose that value to the form."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-xml",metastring:'title="App1/App1/workflow/CustomFormComponent.xaml"',children:'<?xml version="1.0" encoding="UTF-8"?>\n<core:ContentComponent  xmlns:core="clr-namespace:VertiGIS.Mobile.Workflow.Core;assembly=VertiGIS.Mobile.Workflow"\n                        xmlns="http://schemas.microsoft.com/dotnet/2021/maui"\n                        xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"\n                        xmlns:views="clr-namespace:VertiGIS.Mobile.Toolkit.Views;assembly=VertiGIS.Mobile.Toolkit"\n                        x:Class="App1.Workflow.CustomFormComponent">\n    <VerticalStackLayout>\n        <Label>\n            <Label.FormattedText>\n                <FormattedString>\n                    <Span Text="This form element has a value of: "/>\n                    <Span Text="{Binding Element.Value}"/>\n                </FormattedString>\n            </Label.FormattedText>\n        </Label>\n    </VerticalStackLayout>\n</core:ContentComponent>\n'})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cs",metastring:'title="App1/App1/workflow/CustomFormComponent.xaml.cs"',children:"namespace App1.Workflow\n{\n    [XamlCompilation(XamlCompilationOptions.Compile)]\n    public partial class CustomFormComponent : ContentComponent\n    {\n        public CustomFormComponent(VertiGIS.Workflow.Runtime.Definition.Forms.Element element, string name)\n            : base(element, name)\n        {\n            BindingContext = this;\n            Element.Value = 42;\n            InitializeComponent();\n        }\n    }\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["You can then use the ",(0,o.jsx)(t.a,{href:"https://docs.vertigisstudio.com/workflow/latest/help/get-form-element-property.html",children:"Get Form Element Property"})," activity to access the ",(0,o.jsx)(t.code,{children:"Value"})," property, along with ",(0,o.jsx)(t.a,{href:"https://docs.vertigisstudio.com/workflow/latest/help/custom.html?anchor=custom_form_element_properties",children:"other properties supported by custom form elements"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var o=n(6540);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);