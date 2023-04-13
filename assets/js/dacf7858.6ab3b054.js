"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[1062,9362,826],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),m=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=m(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(n),u=i,f=d["".concat(s,".").concat(u)]||d[u]||p[u]||r;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var m=2;m<r;m++)a[m]=n[m];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:(e,t,n)=>{function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!o(e)}n.d(t,{Z:()=>i,b:()=>o})},4996:(e,t,n)=>{n.d(t,{C:()=>r,Z:()=>a});var o=n(2263),i=n(3919);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,o.Z)();return{withBaseUrl:(n,o)=>function(e,t,n,{forcePrependBaseUrl:o=!1,absolute:r=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(o)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return r?e+a:a}(t,e,n,o)}}function a(e,t={}){const{withBaseUrl:n}=r();return n(e,t)}},8215:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(7294);const i=function({children:e,hidden:t,className:n}){return o.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},1395:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(7294),i=n(944),r=n(6010);const a="tabItem_1uMI",l="tabItemActive_2DSg";const s=37,m=39;const c=function(e){const{lazy:t,block:n,defaultValue:c,values:p,groupId:d,className:u}=e,{tabGroupChoices:f,setTabGroupChoices:g}=(0,i.Z)(),[h,k]=(0,o.useState)(c),v=o.Children.toArray(e.children),w=[];if(null!=d){const e=f[d];null!=e&&e!==h&&p.some((t=>t.value===e))&&k(e)}const y=e=>{const t=e.currentTarget,n=w.indexOf(t),o=p[n].value;k(o),null!=d&&(g(d,o),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:o,right:i}=e.getBoundingClientRect(),{innerHeight:r,innerWidth:a}=window;return t>=0&&i<=a&&o<=r&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((()=>t.classList.remove(l)),2e3))}),150))},b=e=>{var t;let n;switch(e.keyCode){case m:{const t=w.indexOf(e.target)+1;n=w[t]||w[0];break}case s:{const t=w.indexOf(e.target)-1;n=w[t]||w[w.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},u)},p.map((({value:e,label:t})=>o.createElement("li",{role:"tab",tabIndex:h===e?0:-1,"aria-selected":h===e,className:(0,r.Z)("tabs__item",a,{"tabs__item--active":h===e}),key:e,ref:e=>w.push(e),onKeyDown:b,onFocus:y,onClick:y},t)))),t?(0,o.cloneElement)(v.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}},9443:(e,t,n)=>{n.d(t,{Z:()=>o});const o=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(7294),i=n(9443);const r=function(){const e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},4340:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(7462),i=(n(7294),n(3905));const r={},a=void 0,l={unversionedId:"snippets/workflow-url",id:"snippets/workflow-url",isDocsHomePage:!1,title:"workflow-url",description:"https://apps.vertigisstudio.com/workflow/designer/#workflow=",source:"@site/docs/snippets/workflow-url.mdx",sourceDirName:"snippets",slug:"/snippets/workflow-url",permalink:"/docs/snippets/workflow-url",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/snippets/workflow-url.mdx",version:"current",frontMatter:{}},s=[],m={toc:s};function c({components:e,...t}){return(0,i.kt)("wrapper",(0,o.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("div",{class:"alert alert--secondary",role:"alert"},"https://apps.vertigisstudio.com/workflow/designer/#workflow=",(0,i.kt)("b",null,"44010fc421dd4659b74fb921e09ba594")),(0,i.kt)("br",null))}c.isMDXComponent=!0},9422:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(7462),i=(n(7294),n(3905));const r={},a=void 0,l={unversionedId:"workflow/snippets/prereqs-mobile",id:"workflow/snippets/prereqs-mobile",isDocsHomePage:!1,title:"prereqs-mobile",description:"Extending VertiGIS Studio Workflow for Mobile requires development and deployment of a custom VertiGIS Studio Mobile Application using the VertiGIS Studio Mobile SDK",source:"@site/docs/workflow/snippets/prereqs-mobile.mdx",sourceDirName:"workflow/snippets",slug:"/workflow/snippets/prereqs-mobile",permalink:"/docs/workflow/snippets/prereqs-mobile",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/workflow/snippets/prereqs-mobile.mdx",version:"current",frontMatter:{}},s=[],m={toc:s};function c({components:e,...t}){return(0,i.kt)("wrapper",(0,o.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Extending VertiGIS Studio Workflow for Mobile requires development and deployment of a custom VertiGIS Studio Mobile Application using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-overview"},"VertiGIS Studio Mobile SDK")))),(0,i.kt)("p",null,"Follow the instructions in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-mobile-overview"},"VertiGIS Studio Mobile SDK")," page to set up the environment for extending Workflow for VertiGIS Studio Mobile."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"A working knowledge of ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-ca/dotnet/csharp/"},"C#")," and ",(0,i.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/platform/dotnet-standard"},".NET Standard")," is recommended before extending Workflow for VertiGIS Studio Mobile"))))}c.isMDXComponent=!0},6621:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>p,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var o=n(7462),i=(n(7294),n(3905)),r=n(4996),a=n(1395),l=n(8215),s=n(9422),m=n(4340);const c={title:"Implement an Loading Indicator Form Element",description:"VertiGIS Studio Workflow - Build a custom form element that displays a loading indicator"},p=void 0,d={unversionedId:"workflow/tutorial-mobile-activity-indicator-form-element",id:"workflow/tutorial-mobile-activity-indicator-form-element",isDocsHomePage:!1,title:"Implement an Loading Indicator Form Element",description:"VertiGIS Studio Workflow - Build a custom form element that displays a loading indicator",source:"@site/docs/workflow/tutorial-mobile-activity-indicator-form-element.mdx",sourceDirName:"workflow",slug:"/workflow/tutorial-mobile-activity-indicator-form-element",permalink:"/docs/workflow/tutorial-mobile-activity-indicator-form-element",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/workflow/tutorial-mobile-activity-indicator-form-element.mdx",version:"current",frontMatter:{title:"Implement an Loading Indicator Form Element",description:"VertiGIS Studio Workflow - Build a custom form element that displays a loading indicator"},sidebar:"workflow",previous:{title:"Show a Callout on the Map with an Activity",permalink:"/docs/workflow/tutorial-mobile-show-map-callout"},next:{title:"SDK Overview",permalink:"/docs/workflow/sdk-server-overview"}},u=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Set up the Custom Form Element Skeleton",id:"set-up-the-custom-form-element-skeleton",children:[]},{value:"Set up a Form Element Registration Activity",id:"set-up-a-form-element-registration-activity",children:[]},{value:"Register the Form Element Registration Activity",id:"register-the-form-element-registration-activity",children:[]},{value:"Add the Loading Indicator",id:"add-the-loading-indicator",children:[]},{value:"Test your Activity",id:"test-your-activity",children:[]},{value:"Relevant SDK Sample",id:"relevant-sdk-sample",children:[]}],f={toc:u};function g({components:e,...t}){return(0,i.kt)("wrapper",(0,o.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Implementing a custom ",(0,i.kt)("a",{parentName:"p",href:"/docs/workflow/key-concepts#form-elements"},"form element")," allows you to augment the existing ",(0,i.kt)("a",{parentName:"p",href:"https://docs.vertigisstudio.com/workflow/latest/help/Default.htm#wf5/help/form-elements/auto-complete.htm%3FTocPath%3DForms%7CForm%2520Element%2520Reference%7C_____0"},"form elements that come with VertiGIS Studio Workflow"),".\nThis article will walk you through creating a form element that displays a loading indicator."),(0,i.kt)("img",{src:(0,r.Z)("img/workflow-mobile-custom-form-element-loading-indicator.png")}),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)(s.default,{mdxType:"MobilePrereqs"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Implementing a custom form element in VertiGIS Studio Mobile consists of three steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Creating the custom form element and implementing the UI."),(0,i.kt)("li",{parentName:"ol"},"Creating an activity which will register this form component with VertiGIS Studio Workflow."),(0,i.kt)("li",{parentName:"ol"},"Registering the activity with VertiGIS Studio Workflow and running it ",(0,i.kt)("strong",{parentName:"li"},"before")," using the custom form element.")),(0,i.kt)("h2",{id:"set-up-the-custom-form-element-skeleton"},"Set up the Custom Form Element Skeleton"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Using Visual Studio, create a new file, using the Xamarin Forms: Content View template. Name the file ",(0,i.kt)("inlineCode",{parentName:"li"},"LoadingIndicator.xaml"),", and place it in the platform agnostic project of the VertiGIS Studio Mobile ",(0,i.kt)("a",{parentName:"li",href:"/docs/mobile/sdk-overview"},"Quickstart"),"."),(0,i.kt)("li",{parentName:"ol"},"Change the base class to ",(0,i.kt)("inlineCode",{parentName:"li"},"ContentComponent")," both in the xaml and in the code-behind.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="App1/App1/workflow/LoadingIndicator.xaml"',title:'"App1/App1/workflow/LoadingIndicator.xaml"'},'<?xml version="1.0" encoding="UTF-8"?>\n// highlight-next-line\n<core:ContentComponent xmlns="http://xamarin.com/schemas/2014/forms"\n                       xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"\n                       xmlns:core="clr-namespace:VertiGIS.Mobile.Workflow.Core;assembly=VertiGIS.Mobile.Workflow"\n                       x:Class="App1.Workflow.LoadingIndicator">\n    <ContentView.Content>\n        <Label Text="Hello Xamarin.Forms!" />\n    </ContentView.Content>\n</core:ContentComponent>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="App1/App1/workflow/LoadingIndicator.xaml.cs"',title:'"App1/App1/workflow/LoadingIndicator.xaml.cs"'},"using VertiGIS.Mobile.Workflow.Core;\nusing Xamarin.Forms.Xaml;\n\nnamespace App1.Workflow\n{\n    [XamlCompilation(XamlCompilationOptions.Compile)]\n    // highlight-next-line\n    public partial class LoadingIndicator : ContentComponent\n    {\n        public LoadingIndicator(VertiGIS.Workflow.Runtime.Definition.Forms.Element element, string name)\n            : base(element, name)\n        {\n            InitializeComponent();\n        }\n    }\n}\n")),(0,i.kt)("h2",{id:"set-up-a-form-element-registration-activity"},"Set up a Form Element Registration Activity"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a new file ",(0,i.kt)("inlineCode",{parentName:"li"},"FormElementRegistrationActivity.cs")," in the platform agnostic project of the VertiGIS Studio Mobile ",(0,i.kt)("a",{parentName:"li",href:"/docs/mobile/sdk-overview"},"Quickstart"),"."),(0,i.kt)("li",{parentName:"ol"},"Add a new form registration activity that implements ",(0,i.kt)("inlineCode",{parentName:"li"},"RegisterCustomFormElementBase"),"."),(0,i.kt)("li",{parentName:"ol"},"Register the ",(0,i.kt)("inlineCode",{parentName:"li"},"LoadingIndicator")," form element in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Execute")," method of the activity.")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Only one form element registration activity is needed per app, as it can register multiple custom form elements.\nLearn more about ",(0,i.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-mobile-activity-reference"},"implementing custom activities"),"."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="App1/App1/workflow/FormElementRegistrationActivity.cs"',title:'"App1/App1/workflow/FormElementRegistrationActivity.cs"'},'using VertiGIS.Workflow.Runtime;\nusing VertiGIS.Workflow.Runtime.Activities.App;\nusing System.Collections.Generic;\nusing System.Threading.Tasks;\n\n[assembly: Export(typeof(FormElementRegistrationActivity))]\nnamespace App1.Workflow\n{\n    // highlight-next-line\n    class FormElementRegistrationActivity : RegisterCustomFormElementBase\n    {\n        public static string Action { get; } = "uuid:<uuid>::FormElementRegistrationActivity";\n\n        public override Task<IDictionary<string, object>> Execute(IDictionary<string, object> inputs, IActivityContext context)\n        {\n            IDictionary<string, object> result = new Dictionary<string, object>();\n            // highlight-next-line\n            Register("LoadingIndicator", typeof(LoadingIndicator), context);\n            return Task.FromResult(result);\n        }\n    }\n}\n')),(0,i.kt)("h2",{id:"register-the-form-element-registration-activity"},"Register the Form Element Registration Activity"),(0,i.kt)("p",null,"Register the ",(0,i.kt)("inlineCode",{parentName:"p"},"RegisterCustomFormElementBase")," class in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/workflow/tutorial-mobile-calculate-logarithm-activity#register-the-activity-with-the-iactivityhandlerfactory"},(0,i.kt)("inlineCode",{parentName:"a"},"IActivityHandlerFactory")," for the application"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Learn more about activity registration in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-mobile-activity-reference"},"activity reference"),"."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="App1/App1/workflow/ActivityLoader.cs"',title:'"App1/App1/workflow/ActivityLoader.cs"'},'using System;\nusing System.Collections.Generic;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing App1.Workflow;\nusing VertiGIS.Mobile.Composition;\nusing VertiGIS.Workflow.Runtime;\nusing VertiGIS.Workflow.Runtime.Definition;\nusing VertiGIS.Workflow.Runtime.Execution;\n\n[assembly: Export(typeof(ActivityLoader), SingleInstance = true, AsImplementedInterfaces = true)]\nnamespace App1.Workflow\n{\n    public class ActivityLoader : IActivityHandlerFactory\n    {\n        /// <summary>\n        /// Gets a mapping of action names to implementations of <see cref="IActivityHandler"/>s.\n        /// </summary>\n        private Dictionary<string, Func<IActivityHandler>> RegisteredActivities { get; } = new Dictionary<string, Func<IActivityHandler>>();\n\n        public ActivityLoader(Func<FormElementRegistrationActivity> formElementRegistrationActivityFactory)\n        {\n            // highlight-next-line\n            RegisteredActivities[FormElementRegistrationActivity.Action] = formElementRegistrationActivityFactory;\n        }\n\n        /// <summary>\n        /// Creates an <see cref="IActivityHandler"/>.\n        /// </summary>\n        /// <param name="action">The name of the action to create.</param>\n        /// <param name="token">The cancellation token.</param>\n        /// <param name="inspector">The <see cref="ProgramInspector"/> for the program.</param>\n        /// <returns>The activity handler for the given action.</returns>\n        public Task<IActivityHandler> Create(string action, CancellationToken token, ProgramInspector inspector = null)\n        {\n            if (action == null || token.IsCancellationRequested)\n            {\n                return Task.FromResult<IActivityHandler>(null);\n            }\n\n            if (RegisteredActivities.TryGetValue(action, out Func<IActivityHandler> handlerType))\n            {\n                return Task.FromResult(handlerType());\n            }\n            else\n            {\n                return Task.FromResult<IActivityHandler>(null);\n            }\n        }\n    }\n}\n\n\n')),(0,i.kt)("h2",{id:"add-the-loading-indicator"},"Add the Loading Indicator"),(0,i.kt)("p",null,"Next we can add the loading indicator to the form element xaml."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="App1/App1/workflow/LoadingIndicator.xaml.cs"',title:'"App1/App1/workflow/LoadingIndicator.xaml.cs"'},'<?xml version="1.0" encoding="UTF-8"?>\n<core:ContentComponent xmlns="http://xamarin.com/schemas/2014/forms"\n                       xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"\n                       xmlns:core="clr-namespace:VertiGIS.Mobile.Workflow.Core;assembly=VertiGIS.Mobile.Workflow"\n                       // highlight-next-line\n                       xmlns:views="clr-namespace:VertiGIS.Mobile.Toolkit.Views;assembly=VertiGIS.Mobile.Toolkit"\n                       x:Class="App1.Workflow.LoadingIndicator">\n    <ContentView.Content>\n        // highlight-next-line\n        <views:EnhancedActivityIndicator IsEnabled="{Binding IsEnabled}" IsRunning="True" HeightRequest="75" WidthRequest="75" Margin="10"/>\n    </ContentView.Content>\n</core:ContentComponent>\n')),(0,i.kt)("h2",{id:"test-your-activity"},"Test your Activity"),(0,i.kt)("p",null,"Now you can ",(0,i.kt)("a",{parentName:"p",href:"https://docs.vertigisstudio.com/mobileviewer/latest/admin-help/Default.htm#gmv/designer/add-a-workflow-to-an-app.htm"},"build a workflow for VertiGIS Studio Mobile")," that uses your new custom form element! It is ",(0,i.kt)("strong",{parentName:"p"},"essential")," that this custom activity be run before the custom form element is used. It is best practice to run the form element registration activity at the start of a workflow."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",null,"You can"," ",(0,i.kt)("a",{href:(0,r.Z)("workflows/mobile-custom-form-element.json"),download:"custom-form-element.json",target:"_blank"},"download this demo workflow")," ","that registers and displays the custom form element and",(0,i.kt)("a",{href:"https://docs.vertigisstudio.com/workflow/latest/help/Default.htm#wf5/help/import-export-workflows.htm",target:"_blank"}," ","import it into the VertiGIS Studio Workflow Designer."," ")))),(0,i.kt)("p",null,"Next you need to run the workflow you just created in your VertiGIS Studio Mobile SDK project."),(0,i.kt)("p",null,"You can do this by configuring the layout and app config to run a workflow. You will need to copy the ID of the the workflow you created into the app.json"),(0,i.kt)(m.default,{mdxType:"WorkflowUrlSnippet"}),(0,i.kt)(a.Z,{defaultValue:"config",values:[{label:"App Config",value:"config"},{label:"Layout",value:"layout"},{label:"UI",value:"ui"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"config",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="App1/App1/app.json"',title:'"App1/App1/app.json"'},'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["large"]\n        },\n        {\n            "$type": "workflow",\n            "id": "custom-workflow",\n            "title": "Custom Workflow",\n            "target": "#taskbar",\n            // highlight-next-line\n            "portalItem": "<your-workflow-id>"\n        },\n        {\n            "$type": "menu",\n            "id": "iwtm",\n            "items": [\n                {\n                    "title": "Run Custom Workflow",\n                    "isEnabled": true,\n                    "iconId": "workflow",\n                    "action": {\n                        "name": "workflow.run",\n                        "arguments": {\n                            "id": "custom-workflow"\n                        }\n                    }\n                }\n            ]\n        }\n    ]\n}\n'))),(0,i.kt)(l.Z,{value:"layout",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="App1/App1/layout-large.xml"',title:'"App1/App1/layout-large.xml"'},'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd">\n    <gxm:taskbar id="taskbar" orientation="vertical">\n        <map slot="main">\n            <stack margin="0.8" slot="top-right" halign="end">\n                <iwtm config="iwtm"/>\n            </stack>\n        </map>\n    </gxm:taskbar>\n</layout>\n'))),(0,i.kt)(l.Z,{value:"ui",mdxType:"TabItem"},(0,i.kt)("img",{src:(0,r.Z)("img/workflow-mobile-custom-form-element-loading-indicator.png")}))),(0,i.kt)("h2",{id:"relevant-sdk-sample"},"Relevant SDK Sample"),(0,i.kt)("p",null,"Check out the relevant VertiGIS Studio Mobile SDK Sample:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Workflow/CustomFormComponent"},"Custom Workflow Form Element"))))}g.isMDXComponent=!0},6010:(e,t,n)=>{function o(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:()=>i})}}]);