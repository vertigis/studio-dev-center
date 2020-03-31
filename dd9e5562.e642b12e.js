/*! For license information please see dd9e5562.e642b12e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[55,59],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return l}));var o=n(1),r=n(9),i=(n(0),n(209)),a={},c={id:"workflow/snippets/prereqs-mobile",title:"prereqs-mobile",description:":::important",source:"@site/docs/workflow/snippets/prereqs-mobile.mdx",permalink:"/dev-center/docs/workflow/snippets/prereqs-mobile",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/snippets/prereqs-mobile.mdx"},m=[],s={rightToc:m};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("div",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Extending Geocortex Workflow for Mobile requires development and deployment of a custom Geocortex Mobile Application using the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/dev-center/docs/mobile/quick-start"}),"Geocortex Mobile SDK")))),Object(i.b)("p",null,"Follow the instructions in the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/dev-center/docs/workflow/getting-started-mobile"}),"Geocortex Mobile SDK")," page setup the enviroment for extending Workflow for Geocortex Mobile."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("div",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"A working knowledge of ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://dotnet.microsoft.com/"}),"C# and the .NET platform")," is recommended before extending Workflow for Geocortex Mobile"))))}l.isMDXComponent=!0},192:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var o=n(1),r=n(9),i=(n(0),n(209)),a=(n(218),n(219)),c=n(220),m=n(131),s={title:"Implement a Custom Form Element for Geocortex Mobile",sidebar_label:"Implement a Custom Form Element",description:"Geocortex Workflow - Implement custom form elements for Geocortex Mobile"},l={id:"workflow/implement-custom-form-elements-mobile",title:"Implement a Custom Form Element for Geocortex Mobile",description:"Geocortex Workflow - Implement custom form elements for Geocortex Mobile",source:"@site/docs/workflow/implement-custom-form-elements-mobile.mdx",permalink:"/dev-center/docs/workflow/implement-custom-form-elements-mobile",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/implement-custom-form-elements-mobile.mdx",sidebar_label:"Implement a Custom Form Element",sidebar:"workflow",previous:{title:"Access App Properties in an Activity",permalink:"/dev-center/docs/workflow/access-app-properties-mobile"},next:{title:"Reference a Third Party Library through the Geocortex Mobile SDK",permalink:"/dev-center/docs/workflow/reference-third-party-library-mobile"}},p=[{value:"Scope",id:"scope",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Setup the Custom Form Element Skeleton",id:"setup-the-custom-form-element-skeleton",children:[]},{value:"Setup a Form Element Registration Activity",id:"setup-a-form-element-registration-activity",children:[]},{value:"Register the Form Element Registration Activity",id:"register-the-form-element-registration-activity",children:[{value:"Example: Enhanced Activity Indicator Form Element",id:"example-enhanced-activity-indicator-form-element",children:[]}]},{value:"Raising Form Events",id:"raising-form-events",children:[{value:"Example: Custom Form Element that Raises Events",id:"example-custom-form-element-that-raises-events",children:[]}]},{value:"Get Properties of Custom Form Elements at Runtime",id:"get-properties-of-custom-form-elements-at-runtime",children:[]}],u={rightToc:p};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Implementing a custom ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/dev-center/docs/workflow/concepts-key-concepts#activities-and-form-elements"}),"form element")," allows you to augment the existing ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/form-elements/auto-complete.htm%3FTocPath%3DForms%7CForm%2520Element%2520Reference%7C_____0"}),"form elements that come with Geocortex Workflow"),"."),Object(i.b)("h2",{id:"scope"},"Scope"),Object(i.b)("p",null,"This article applies to building workflow form elements that will be run on ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.geocortex.com/products/gxm/"}),"Geocortex Mobile"),"."),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)(m.default,{mdxType:"MobilePrereqs"}),Object(i.b)("p",null,"It is suggested that you ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/dev-center/docs/workflow/implement-custom-activity-mobile"}),"implement a custom activity")," before trying to implement a custom form element."),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"Implementing a custom form element in Geocortex Mobile consists of three steps:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Creating the custom form element and implementing the UI."),Object(i.b)("li",{parentName:"ol"},"Creating an activity which will register this form component with Geocortex Workflow."),Object(i.b)("li",{parentName:"ol"},"Registering the activity with Geocortex Workflow and running it using the custom form element.")),Object(i.b)("h2",{id:"setup-the-custom-form-element-skeleton"},"Setup the Custom Form Element Skeleton"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Create a new file ",Object(i.b)("inlineCode",{parentName:"li"},"CustomFormComponent")," in the platform agnostic project of the Geocortex Mobile ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"/dev-center/docs/mobile/quick-start"}),"quick start"),"."),Object(i.b)("li",{parentName:"ol"},"Add a new skeleton form element that implements ",Object(i.b)("inlineCode",{parentName:"li"},"FormComponent"),".")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-csharp"}),'using Geocortex.Workflow.Forms.Components;\nusing Xamarin.Forms;\n\nnamespace App1.Workflow\n{\n    public class CustomFormComponent : FormComponent\n    {\n        private readonly View _view;\n\n        public CustomFormComponent(Geocortex.Workflow.Runtime.Definition.Forms.Element element, string name)\n            : base(element, name)\n        {\n            _view = new Label() { Text = "I\'m a custom form component!" };\n\n            Add(new GenericComponent(_view));\n        }\n\n        public override void Render()\n        {\n            base.Render();\n            _view.IsEnabled = IsEnabled;\n        }\n    }\n}\n')),Object(i.b)("h2",{id:"setup-a-form-element-registration-activity"},"Setup a Form Element Registration Activity"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Create a new file ",Object(i.b)("inlineCode",{parentName:"li"},"FormElementRegistrationActivity")," in the platform agnostic project of the Geocortex Mobile ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"/dev-center/docs/mobile/quick-start"}),"quick start"),"."),Object(i.b)("li",{parentName:"ol"},"Add a new form registration activity that implements ",Object(i.b)("inlineCode",{parentName:"li"},"RegisterCustomFormElementBase"),".")),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("div",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Only one form element registration activity is needed per app, as it can register multiple custom form elements."))),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-csharp"}),'using Geocortex.Workflow.Runtime;\nusing Geocortex.Workflow.Runtime.Activities.App;\nusing System.Collections.Generic;\nusing System.Threading.Tasks;\n\nnamespace App1.Workflow\n{\n    class FormElementRegistrationActivity : RegisterCustomFormElementBase\n    {\n        public static string Action { get; } = "custom:wf:helpers::FormElementRegistrationActivity";\n\n        public override Task<IDictionary<string, object>> Execute(IDictionary<string, object> inputs, IActivityContext context)\n        {\n            IDictionary<string, object> result = new Dictionary<string, object>();\n            Register("CustomFormComponent", typeof(CustomFormComponent), context);\n            return Task.FromResult(result);\n        }\n    }\n}\n')),Object(i.b)("h2",{id:"register-the-form-element-registration-activity"},"Register the Form Element Registration Activity"),Object(i.b)("p",null,"Register the ",Object(i.b)("inlineCode",{parentName:"p"},"RegisterCustomFormElementBase")," class in the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/dev-center/docs/workflow/implement-custom-activity-mobile#register-the-activity-with-the-iactivityhandlerfactory"}),Object(i.b)("inlineCode",{parentName:"a"},"IActivityHandlerFactory")," for the application"),". Now you can ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.geocortex.com/mobileviewer/latest/admin-help/Default.htm#gmv/designer/add-a-workflow-to-an-app.htm"}),"build a workflow for Geocortex Mobile")," that uses your new custom form element!"),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("div",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"It is ",Object(i.b)("strong",{parentName:"p"},"essential")," that this custom activity be run before the custom form element is used. It is best practice to run the form element registration activity at the start of a workflow."))),Object(i.b)("h3",{id:"example-enhanced-activity-indicator-form-element"},"Example: Enhanced Activity Indicator Form Element"),Object(i.b)("p",null,"This example demonstrates a form element that displays an enhanced activity indicator. ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/geocortex/sdk-samples/workflow/custom-form-element"}),"Check it out")," in the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/dev-center/docs/mobile/samples"}),"Geocortex Mobile SDK Samples"),"."),Object(i.b)(a.a,{defaultValue:"custom-form-element",values:[{label:"Custom Form Element",value:"custom-form-element"},{label:"Form Element Registration Activity",value:"form-element-registration"},{label:"IActivityHandlerFactor",value:"activity-loader"},{label:"User Interface",value:"ui"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"custom-form-element",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-csharp"}),"using Geocortex.Mobile.Infrastructure.UI;\nusing Geocortex.Workflow.Forms.Components;\n\nnamespace App1.Workflow\n{\n    class EnhancedActivityIndicatorElement : FormComponent\n    {\n        private readonly EnhancedActivityIndicator _view;\n\n        public EnhancedActivityIndicatorElement(Geocortex.Workflow.Runtime.Definition.Forms.Element element, string name)\n            : base (element, name)\n        {\n            _view = new EnhancedActivityIndicator()\n            {\n                IsRunning = true,\n                HeightRequest = 75,\n                WidthRequest = 75,\n                Margin = 10\n            };\n\n            Add(new GenericComponent(_view));\n        }\n\n        public override void Render()\n        {\n            base.Render();\n            _view.IsEnabled = IsEnabled;\n        }\n    }\n}\n"))),Object(i.b)(c.a,{value:"form-element-registration",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-csharp"}),'using Geocortex.Workflow.Runtime;\nusing Geocortex.Workflow.Runtime.Activities.App;\nusing System.Collections.Generic;\nusing System.Threading.Tasks;\n\nnamespace App1.Workflow\n{\n    class FormElementRegistrationActivity : RegisterCustomFormElementBase\n    {\n        public static string Action { get; } = "custom:wf:helpers::FormElementRegistrationActivity";\n\n        public override Task<IDictionary<string, object>> Execute(IDictionary<string, object> inputs, IActivityContext context)\n        {\n            IDictionary<string, object> result = new Dictionary<string, object>();\n            Register("EnhancedActivityIndicatorElement", typeof(EnhancedActivityIndicatorElement), context);\n            return Task.FromResult(result);\n        }\n    }\n}\n'))),Object(i.b)(c.a,{value:"activity-loader",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-csharp"}),'using System;\nusing System.Collections.Generic;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing App1.Samples.Workflow.CustomActivity;\nusing Geocortex.Mobile.Composition;\nusing Geocortex.Workflow.Runtime;\nusing Geocortex.Workflow.Runtime.Definition;\nusing Geocortex.Workflow.Runtime.Execution;\n\n[assembly: Export(typeof(ActivityLoader), SingleInstance = true, AsImplementedInterfaces = true)]\nnamespace App1.Workflow\n{\n    public class ActivityLoader : IActivityHandlerFactory\n    {\n        /// <summary>\n        /// Gets a mapping of action names to implementations of <see cref="IActivityHandler"/>s.\n        /// </summary>\n        private Dictionary<string, Func<IActivityHandler>> RegisteredActivities { get; } = new Dictionary<string, Func<IActivityHandler>>();\n\n        public ActivityLoader()\n        {\n            RegisteredActivities[FormElementRegistrationActivity.Action] = () => new FormElementRegistrationActivity();\n        }\n\n        /// <summary>\n        /// Creates an <see cref="IActivityHandler"/>.\n        /// </summary>\n        /// <param name="action">The name of the action to create.</param>\n        /// <param name="token">The cancellation token.</param>\n        /// <param name="inspector">The <see cref="ProgramInspector"/> for the program.</param>\n        /// <returns>The activity handler for the given action.</returns>\n        public Task<IActivityHandler> Create(string action, CancellationToken token, ProgramInspector inspector = null)\n        {\n            if (action == null || token.IsCancellationRequested)\n            {\n                return Task.FromResult<IActivityHandler>(null);\n            }\n\n            if (RegisteredActivities.TryGetValue(action, out Func<IActivityHandler> handlerType))\n            {\n                return Task.FromResult(handlerType());\n            }\n            else\n            {\n                return Task.FromResult<IActivityHandler>(null);\n            }\n        }\n    }\n}\n'))),Object(i.b)(c.a,{value:"ui",mdxType:"TabItem"})),Object(i.b)("h2",{id:"raising-form-events"},"Raising Form Events"),Object(i.b)("p",null,"Built in Geocortex Workflow Form elements can raise ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/forms.htm#Events%3FTocPath%3DForms%7COverview%2520of%2520Forms%7CEvents%7C_____0"}),"events"),". A custom form element can also raise events, including a custom event type."),Object(i.b)("h3",{id:"example-custom-form-element-that-raises-events"},"Example: Custom Form Element that Raises Events"),Object(i.b)("p",null,"The follow custom form element demonstrates how various form events can be raised."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-csharp"}),'using Geocortex.Workflow.Forms.Components;\nusing Xamarin.Forms;\n\nnamespace App1.Workflow\n{\n    class RaisingEventsFormComponent : FormComponent\n    {\n        private readonly View _view;\n\n        public RaisingEventsFormComponent(Geocortex.Workflow.Runtime.Definition.Forms.Element element, string name)\n            : base (element, name)\n        {\n            var layout = new StackLayout();\n            layout.Children.Add(new Button() {\n                Text = "Raise Click",\n                Command = new Command(() =>\n                {\n                    OnEventRaised(new Geocortex.Workflow.Runtime.Forms.Event()\n                    {\n                        Value = "OnClick Event button",\n                        Type = Geocortex.Workflow.Runtime.Forms.Event.CLICKED\n                    });\n                })\n            });\n\n            layout.Children.Add(new Button()\n            {\n                Text = "Raise Changed",\n                Command = new Command(() =>\n                {\n                    OnEventRaised(new Geocortex.Workflow.Runtime.Forms.Event()\n                    {\n                        Value = "OnChange Event button",\n                        Type = Geocortex.Workflow.Runtime.Forms.Event.CHANGED\n                    });\n                })\n            });\n\n            layout.Children.Add(new Button()\n            {\n                Text = "Raise Custom",\n                Command = new Command(() =>\n                {\n                    OnEventRaised(new Geocortex.Workflow.Runtime.Forms.Event()\n                    {\n                        Type = Geocortex.Workflow.Runtime.Forms.Event.CUSTOM\n                    });\n                })\n            });\n\n            _view = layout;\n\n            Add(new GenericComponent(_view));\n        }\n\n        public override void Render()\n        {\n            base.Render();\n            _view.IsEnabled = IsEnabled;\n        }\n    }\n}\n')),Object(i.b)("h2",{id:"get-properties-of-custom-form-elements-at-runtime"},"Get Properties of Custom Form Elements at Runtime"),Object(i.b)("p",null,"A custom form element may produce a value that a workflow needs to access at runtime. You can set a property on the ",Object(i.b)("inlineCode",{parentName:"p"},"props.element")," object to expose that value to the form."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-csharp"}),'class CustomFormComponent : FormComponent\n{\n    ...\n    public CustomFormComponent(Geocortex.Workflow.Runtime.Definition.Forms.Element element, string name)\n            : base (element, name)\n    {\n        var layout = new Button()\n        {\n            Text = "Set Form Element Value",\n            Command = new Command(() =>\n            {\n                this.Element.Value = "Some Output Value";\n            })\n        };\n\n        _view = layout;\n\n        Add(new GenericComponent(_view));\n    }\n    ...\n}\n')),Object(i.b)("p",null,"You can then use an ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/expressions.htm"}),"expression")," in Geocortex Workflow Designer to access the custom property of the form element. For example, to access the ",Object(i.b)("inlineCode",{parentName:"p"},"value")," property you can use an expression like ",Object(i.b)("inlineCode",{parentName:"p"},"=$form1.state.custom1.value"),"."))}b.isMDXComponent=!0},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),p=l(n),b=o,d=p["".concat(a,".").concat(b)]||p[b]||u[b]||i;return n?r.a.createElement(d,c({ref:t},s,{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},210:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)&&o.length){var a=r.apply(null,o);a&&e.push(a)}else if("object"===i)for(var c in o)n.call(o,c)&&o[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},217:function(e,t,n){"use strict";var o=n(0),r=n(50);t.a=function(){return Object(o.useContext)(r.a)}},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(221);var o=n(217);function r(e){var t=(Object(o.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},219:function(e,t,n){"use strict";n(25),n(19),n(20);var o=n(0),r=n.n(o),i=n(210),a=n.n(i),c=n(129),m=n.n(c),s=37,l=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,c=e.values,p=Object(o.useState)(i),u=p[0],b=p[1],d=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:a()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===t,className:a()("tab-item",m.a.tabItem,{"tab-item--active":u===t}),key:t,ref:function(e){return d.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(d,e.target,e)},onFocus:function(){return b(t)},onClick:function(){return b(t)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(n).filter((function(e){return e.props.value===u}))[0]))}},220:function(e,t,n){"use strict";var o=n(0),r=n.n(o);t.a=function(e){return r.a.createElement("div",null,e.children)}},221:function(e,t,n){"use strict";var o=n(17),r=n(37),i=n(222),a="".startsWith;o(o.P+o.F*n(223)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),o=String(e);return a?a.call(t,o,n):t.slice(n,n+o.length)===o}})},222:function(e,t,n){var o=n(69),r=n(23);e.exports=function(e,t,n){if(o(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(e))}},223:function(e,t,n){var o=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[o]=!1,!"/./"[e](t)}catch(r){}}return!0}}}]);