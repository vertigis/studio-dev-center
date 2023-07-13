"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[9094,4072],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),m=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,h=c["".concat(l,".").concat(d)]||c[d]||u[d]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var m=2;m<r;m++)i[m]=n[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(7294),a=n(6010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var o=n(7462),a=n(7294),r=n(6010),i=n(2466),s=n(6550),l=n(1980),m=n(7392),p=n(12);function c(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:a}}=e;return{value:t,label:n,attributes:o,default:a}}))}function u(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,m.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const o=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(o.location.search);t.set(r,e),o.replace({...o.location,search:t.toString()})}),[r,o])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,r=u(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:r}))),[l,m]=h({queryString:n,groupId:o}),[c,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,p.Nk)(n);return[o,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:o}),g=(()=>{const e=l??c;return d({value:e,tabValues:r})?e:null})();(0,a.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),m(e),b(e)}),[m,b,r]),tabValues:r}}var g=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function C(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:m}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const t=e.currentTarget,n=p.indexOf(t),o=m[n].value;o!==s&&(c(t),l(o))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},m.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:u},i,{className:(0,r.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:o}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function v(e){const t=b(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",f.tabList)},a.createElement(C,(0,o.Z)({},e,t)),a.createElement(k,(0,o.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return a.createElement(v,(0,o.Z)({key:String(t)},e))}},1524:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(7294);const a={video:"video_DXmL"};function r(e){let{src:t}=e;return o.createElement("video",{autoPlay:!0,loop:!0,muted:!0,className:a.video},o.createElement("source",{src:t,type:"video/webm"}),"Your browser does not support the video tag.")}},5858:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(9960),a=n(7294),r=n(6010);const i={root:"root_Uwqo"};function s(e){let{title:t,description:n,link:s}=e;return a.createElement("div",{className:(0,r.Z)("card-demo",i.root)},a.createElement("div",{className:"card"},a.createElement("div",{className:"card__header"},a.createElement("h3",null,t)),a.createElement("div",{className:"card__body"},a.createElement("p",null,n)),a.createElement("div",{className:"card__footer"},a.createElement(o.Z,{className:"button button--secondary button--block",to:s},"Get Started"))))}},7467:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(7294);const a={root:"root_vxd5"};function r(e){let{children:t}=e;return o.createElement("div",{className:a.root},t)}},9096:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var o=n(7462),a=(n(7294),n(3905));const r={},i=void 0,s={unversionedId:"mobile/snippets/quickstart-prereqs",id:"mobile/snippets/quickstart-prereqs",title:"quickstart-prereqs",description:"Check out and setup the VertiGIS Studio Mobile SDK Quickstart project.",source:"@site/docs/mobile/snippets/quickstart-prereqs.mdx",sourceDirName:"mobile/snippets",slug:"/mobile/snippets/quickstart-prereqs",permalink:"/docs/mobile/snippets/quickstart-prereqs",draft:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/snippets/quickstart-prereqs.mdx",tags:[],version:"current",frontMatter:{}},l={},m=[],p={toc:m},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Check out and setup the ",(0,a.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-overview"},"VertiGIS Studio Mobile SDK Quickstart project"),"."))}u.isMDXComponent=!0},4286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>d,default:()=>k,frontMatter:()=>u,metadata:()=>h,toc:()=>g});var o=n(7462),a=(n(7294),n(3905)),r=n(4996),i=n(4866),s=n(5162),l=n(1524),m=n(9096),p=n(5858),c=n(7467);const u={title:"Build a Custom Component with UI",description:"VertiGIS Studio Mobile - Learn how to implement a custom component with UI"},d=void 0,h={unversionedId:"mobile/tutorial-implement-component-with-ui",id:"mobile/tutorial-implement-component-with-ui",title:"Build a Custom Component with UI",description:"VertiGIS Studio Mobile - Learn how to implement a custom component with UI",source:"@site/docs/mobile/tutorial-implement-component-with-ui.mdx",sourceDirName:"mobile",slug:"/mobile/tutorial-implement-component-with-ui",permalink:"/docs/mobile/tutorial-implement-component-with-ui",draft:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/tutorial-implement-component-with-ui.mdx",tags:[],version:"current",frontMatter:{title:"Build a Custom Component with UI",description:"VertiGIS Studio Mobile - Learn how to implement a custom component with UI"},sidebar:"mobile",previous:{title:"Build a Custom Command",permalink:"/docs/mobile/tutorial-implement-command-operation"},next:{title:"Pull Component Data from App Config",permalink:"/docs/mobile/tutorial-implement-component-participate-app-config"}},b={},g=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a Component Skeleton",id:"create-a-component-skeleton",level:2},{value:"Add the Component to your Layout",id:"add-the-component-to-your-layout",level:2},{value:"Use XAML to define your UI",id:"use-xaml-to-define-your-ui",level:2},{value:"Extend your Component with Custom Code",id:"extend-your-component-with-custom-code",level:2},{value:"Example: Progress Bar",id:"example-progress-bar",level:3},{value:"Relevant SDK Samples",id:"relevant-sdk-samples",level:2},{value:"Next Steps",id:"next-steps",level:2}],f={toc:g},C="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(C,(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Did you know VertiGIS Studio Workflow allows you to ",(0,a.kt)("a",{parentName:"p",href:"https://docs.vertigisstudio.com/workflow/latest/help/Default.htm#wf5/help/forms.htm#Overview_of_Forms%3FTocPath%3DForms%7COverview%2520of%2520Forms%7C_____0"},"create custom forms")," you can present to an end user?")),(0,a.kt)("p",null,"Implementing a custom component in VertiGIS Studio Mobile gives you the highest degree of flexibility with what you can do. ",(0,a.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-components-overview"},"Components")," can display custom, dynamic UI, register operation implementations, store persistent data, and more. They are also one of the most complex ways of customizing your VertiGIS Studio Mobile app, so it might be worthwhile to review simpler options like ",(0,a.kt)("a",{parentName:"p",href:"/docs/mobile/configuration-commands-operations"},"Commands and Operations")," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/mobile/tutorial-display-custom-form"},"Workflow")," first."),(0,a.kt)("p",null,"By the end of this article, you'll have the knowledge to build a component that displays a progress bar that is advanced by a button."),(0,a.kt)(l.Z,{src:(0,r.Z)("video/component-with-ui-demo.webm"),mdxType:"DemoVideo"}),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)(m.default,{mdxType:"QuickstartPrereqsSnippet"}),(0,a.kt)("h2",{id:"create-a-component-skeleton"},"Create a Component Skeleton"),(0,a.kt)("p",null,"Create a new file ",(0,a.kt)("inlineCode",{parentName:"p"},"components/CustomComponent.cs")," under the platform agnostic project.\nIn the file, add a new component class ",(0,a.kt)("inlineCode",{parentName:"p"},"CustomComponent")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-dependency-injection"},"register it with ",(0,a.kt)("strong",{parentName:"a"},"Autofac")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="App1/App1/components/CustomComponent.cs"',title:'"App1/App1/components/CustomComponent.cs"'},'using App1;\nusing App1.Components;\nusing VertiGIS.Mobile.Composition.Layout;\nusing System.Xml.Linq;\nusing Xamarin.Forms;\n\n// highlight-next-line\n[assembly: Component(typeof(CustomComponent), "custom-component", XmlNamespace = XmlNamespaces.App1Namespace)]\nnamespace App1.Components\n{\n    // highlight-next-line\n    class CustomComponent : ComponentBase\n    {\n        protected override VisualElement Create(XNode node)\n        {\n            return new Label(){ Text = "My Custom Component" };\n        }\n    }\n}\n')),(0,a.kt)("h2",{id:"add-the-component-to-your-layout"},"Add the Component to your Layout"),(0,a.kt)("p",null,"First, the ",(0,a.kt)("a",{parentName:"p",href:"/docs/mobile/configuration-layout-getting-started"},"layout")," needs to be told where to find your component. In the assembly attribute of the ",(0,a.kt)("inlineCode",{parentName:"p"},"CustomComponent"),", we declared it to be part of the ",(0,a.kt)("inlineCode",{parentName:"p"},"App1Namespace")," which is defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"XmlNamespaces.cs")," We need to add this ",(0,a.kt)("a",{parentName:"p",href:"/docs/mobile/configuration-layout-getting-started#namespaces"},"xml namespace")," as an attribute on the layout. In this example, it's added with the alias ",(0,a.kt)("inlineCode",{parentName:"p"},"custom"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="App1/App1/layout-large.xml',title:'"App1/App1/layout-large.xml'},'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd"\n    // highlight-next-line\n    xmlns:custom="https://your.org/layout/app1">\n    <gxm:taskbar>\n        <map slot="main"/>\n    </gxm:taskbar>\n</layout>\n')),(0,a.kt)("p",null,"Now that the ",(0,a.kt)("inlineCode",{parentName:"p"},"custom")," namespace has been added, the component can be added to the layout. For this example, it was added into a ",(0,a.kt)("a",{parentName:"p",href:"/docs/mobile/configuration-layout-reference#panels"},"Panel")," that lives in the taskbar."),(0,a.kt)(i.Z,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"User Interface",value:"ui"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"layout",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd"\n    xmlns:custom="https://your.org/layout/app1">\n    <gxm:taskbar>\n        \x3c!--Taskbar / custom component--\x3e\n        <panel>\n            // highlight-next-line\n            <custom:custom-component icon="info"/>\n        </panel>\n        <map slot="main"/>\n    </gxm:taskbar>\n</layout>\n'))),(0,a.kt)(s.Z,{value:"ui",mdxType:"TabItem"},(0,a.kt)("img",{src:(0,r.Z)("img/mobile-custom-component-simple.png"),alt:"Custom Component with Text Block"}))),(0,a.kt)("h2",{id:"use-xaml-to-define-your-ui"},"Use XAML to define your UI"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/xaml/xaml-basics/"},"XAML is a markup language created by Microsoft"),", and one of the recommended patterns for defining UI in Xamarin Forms. We can modify our component to reference a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/user-interface/controls/views"},"XAML view"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Right click on the ",(0,a.kt)("inlineCode",{parentName:"li"},"Components"),' folder and select "Add" > "New Item" > "Content View"'),(0,a.kt)("li",{parentName:"ol"},"Rename the files and classes within to ",(0,a.kt)("inlineCode",{parentName:"li"},"CustomComponentView.xaml")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"CustomComponentView.xaml.cs")),(0,a.kt)("li",{parentName:"ol"},"Modify the ",(0,a.kt)("inlineCode",{parentName:"li"},"CustomComponent")," to return this new view for its content.")),(0,a.kt)(i.Z,{defaultValue:"component",values:[{label:"Component",value:"component"},{label:"View",value:"view"},{label:"Code Behind",value:"code-behind"},{label:"UI",value:"ui"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"component",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="App1/App1/components/CustomComponent.cs"',title:'"App1/App1/components/CustomComponent.cs"'},'using App1;\nusing App1.Components;\nusing VertiGIS.Mobile.Composition.Layout;\nusing System.Xml.Linq;\nusing Xamarin.Forms;\n\n[assembly: Component(typeof(CustomComponent), "custom-component", XmlNamespace = XmlNamespaces.App1Namespace)]\nnamespace App1.Components\n{\n    class CustomComponent : ComponentBase\n    {\n        protected override VisualElement Create(XNode node)\n        {\n            // highlight-next-line\n            return new CustomComponentView();\n        }\n    }\n}\n\n'))),(0,a.kt)(s.Z,{value:"view",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="App1/App1/components/CustomComponentView.xaml"',title:'"App1/App1/components/CustomComponentView.xaml"'},'<?xml version="1.0" encoding="UTF-8"?>\n<ContentView xmlns="http://xamarin.com/schemas/2014/forms"\n             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"\n             xmlns:d="http://xamarin.com/schemas/2014/forms/design"\n             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n             mc:Ignorable="d"\n             x:Class="App1.Components.CustomComponentView">\n  <ContentView.Content>\n      <StackLayout>\n          <Label Text="Hello Xamarin.Forms!" />\n      </StackLayout>\n  </ContentView.Content>\n</ContentView>\n'))),(0,a.kt)(s.Z,{value:"code-behind",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="App1/App1/components/CustomComponentView.xaml.cs"',title:'"App1/App1/components/CustomComponentView.xaml.cs"'},"using App1.Components;\nusing VertiGIS.Mobile.Composition;\nusing Xamarin.Forms;\nusing Xamarin.Forms.Xaml;\n\n[assembly: View(typeof(CustomComponentView))]\nnamespace App1.Components\n{\n    [XamlCompilation(XamlCompilationOptions.Compile)]\n    public partial class CustomComponentView : ContentView\n    {\n        public CustomComponentView()\n        {\n            InitializeComponent();\n        }\n    }\n}\n"))),(0,a.kt)(s.Z,{value:"ui",mdxType:"TabItem"},(0,a.kt)("img",{src:(0,r.Z)("img/mobile-custom-component-xamarin-view.png"),alt:"Custom Component with Text Block"}))),(0,a.kt)("p",null,"Congratulations! You've built a working component with UI that is exposed in Mobile."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Learn about how to extend this component to ",(0,a.kt)("a",{parentName:"p",href:"/docs/mobile/tutorial-implement-component-participate-app-config"},"participate in app config"),".")),(0,a.kt)("h2",{id:"extend-your-component-with-custom-code"},"Extend your Component with Custom Code"),(0,a.kt)("p",null,"From here, you can implement your own business logic and interfaces, create custom ",(0,a.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-commands-operations#implementing-commands-and-operations"},"Commands and Operations")," that are powered by and/or interact with your component, and much more. The ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/xaml/"},"Xamarin Forms Documentation")," has excellent guides to implementing user interfaces in Xaml."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"VertiGIS Studio Mobile comes with built-in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Custom/GeocortexMobileElements"},"Enhanced Components")," that can ease development and styling of custom UI.")),(0,a.kt)("h3",{id:"example-progress-bar"},"Example: Progress Bar"),(0,a.kt)("p",null,"Here's an example of a component with a progress bar that is advanced on a button click. It uses a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/xaml/xaml-basics/data-bindings-to-mvvm"},"MVVM pattern")," to power the user interface, as is best practice recommended by Xamarin."),(0,a.kt)(i.Z,{defaultValue:"component",values:[{label:"Component",value:"component"},{label:"View",value:"view"},{label:"Code Behind",value:"code-behind"},{label:"View Model",value:"view-model"},{label:"User Interface",value:"ui"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"component",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="App1/App1/components/ProgressBarComponent.cs"',title:'"App1/App1/components/ProgressBarComponent.cs"'},'using App1;\nusing App1.Components;\nusing VertiGIS.Mobile.Composition.Layout;\nusing System.Xml.Linq;\nusing Xamarin.Forms;\n\n[assembly: Component(typeof(ProgressBarComponent), "progress-bar-component", XmlNamespace = XmlNamespaces.App1Namespace)]\nnamespace App1.Components\n{\n    class ProgressBarComponent : ComponentBase\n    {\n        private View _view;\n\n        // The view is injected as a dependency\n        // highlight-next-line\n        public ProgressBarComponent(ProgressBarComponentView view)\n        {\n            _view = view;\n        }\n        protected override VisualElement Create(XNode node)\n        {\n            return _view;\n        }\n    }\n}\n'))),(0,a.kt)(s.Z,{value:"view",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="App1/App1/components/ProgressBarComponentView.xaml',title:'"App1/App1/components/ProgressBarComponentView.xaml'},'<?xml version="1.0" encoding="UTF-8"?>\n<ContentView xmlns="http://xamarin.com/schemas/2014/forms"\n             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"\n             xmlns:d="http://xamarin.com/schemas/2014/forms/design"\n             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n             mc:Ignorable="d"\n             x:Class="App1.Components.ProgressBarComponentView">\n    <ContentView.Content>\n        <StackLayout Margin="20">\n            <StackLayout Spacing="20" IsVisible="{Binding WorkNotComplete}">\n                <Label Text="Click the button to advance the progress bar."></Label>\n                <Button Text="Do some work." Clicked="DoWork_Clicked"></Button>\n                <ProgressBar ProgressColor="Red" Progress="{Binding Progress}" />\n            </StackLayout>\n            <StackLayout Spacing="20" IsVisible="{Binding WorkComplete}">\n                <Label  Text="Work Complete"></Label>\n                <Button Text="Reset" Clicked="Reset_Clicked"></Button>\n            </StackLayout>\n        </StackLayout>\n    </ContentView.Content>\n</ContentView>\n'))),(0,a.kt)(s.Z,{value:"code-behind",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="App1/App1/components/ProgressBarComponentView.xaml.cs"',title:'"App1/App1/components/ProgressBarComponentView.xaml.cs"'},'using App1.Components;\nusing VertiGIS.Mobile.Composition;\nusing VertiGIS.Mobile.Infrastructure.Messaging;\nusing System;\nusing Xamarin.Forms;\nusing Xamarin.Forms.Xaml;\n\n// Here, the view is registered with Autofac so it can be injected.\n// highlight-next-line\n[assembly: View(typeof(ProgressBarComponentView))]\nnamespace App1.Components\n{\n    [XamlCompilation(XamlCompilationOptions.Compile)]\n    public partial class ProgressBarComponentView : ContentView\n    {\n        private UIOperations _uiOperations;\n        public ProgressBarComponentViewModel ViewModel => BindingContext as ProgressBarComponentViewModel;\n        public ProgressBarComponentView(ProgressBarComponentViewModel viewModel, UIOperations uiOperations)\n        {\n            _uiOperations = uiOperations;\n            BindingContext = viewModel;\n            InitializeComponent();\n        }\n\n        private void DoWork_Clicked(object sender, EventArgs e)\n        {\n            if (!ViewModel.WorkComplete)\n            {\n                ViewModel.Progress += 0.2;\n                if (ViewModel.Progress >= 1.0)\n                {\n                    ViewModel.WorkComplete = true;\n                    _uiOperations.Alert.Execute(new UIAlertArgs() { Title = "Success", Message = "Work Complete", ButtonText = "Ok" });\n                }\n            }\n        }\n\n        private void Reset_Clicked(object sender, EventArgs e)\n        {\n            ViewModel.Progress = 0;\n            ViewModel.WorkComplete = false;\n        }\n    }\n}\n'))),(0,a.kt)(s.Z,{value:"view-model",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="App1/App1/components/ProgressBarComponentViewModel.cs"',title:'"App1/App1/components/ProgressBarComponentViewModel.cs"'},"using App1.Components;\nusing VertiGIS.Mobile.Composition;\nusing VertiGIS.Mobile.Composition.Views;\n\n// Here, the view model is registered with autofac so it can be injected\n// highlight-next-line\n[assembly: ViewModel(typeof(ProgressBarComponentViewModel))]\nnamespace App1.Components\n{\n    public class ProgressBarComponentViewModel : NotifyPropertyBase\n    {\n        private double _progress = 0;\n\n        private bool _workComplete = false;\n\n        public double Progress\n        {\n            get => _progress;\n            set => SetProperty(ref _progress, value);\n        }\n\n        public bool WorkComplete\n        {\n            get => _workComplete;\n            set\n            {\n                SetProperty(ref _workComplete, value);\n                OnPropertyChanged(nameof(WorkNotComplete));\n            }\n        }\n\n        public bool WorkNotComplete => !WorkComplete;\n    }\n}\n"))),(0,a.kt)(s.Z,{value:"ui",mdxType:"TabItem"},(0,a.kt)(l.Z,{src:(0,r.Z)("video/component-with-ui-demo.webm"),mdxType:"DemoVideo"}))),(0,a.kt)("p",null,"This example refactored the original example to use ",(0,a.kt)("a",{parentName:"p",href:"https://autofaccn.readthedocs.io/en/latest/register/registration.html"},"Autofac dependency injection")," to instantiate the View and ViewModel. Setting up your classes so dependencies are handled by Autofac in the constructor allows you to allow inject other VertiGIS Studio Mobile classes registered with Autofac, like how the ",(0,a.kt)("inlineCode",{parentName:"p"},"UIOperations")," class is injected into the view."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Learn more of this ViewModel's use of the VertiGIS Studio Mobile helper class ",(0,a.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-components-viewmodel-helper-class"},(0,a.kt)("inlineCode",{parentName:"a"},"NotifyPropertyBase")),".")),(0,a.kt)("h2",{id:"relevant-sdk-samples"},"Relevant SDK Samples"),(0,a.kt)("p",null,"Check out the relevant VertiGIS Studio Mobile SDK Samples:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Custom/Component"},"Custom Component"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Custom/XamlComponent"},"Custom Component with XAML")))),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)(c.Z,{mdxType:"UseCaseContainer"},(0,a.kt)(p.Z,{title:"Component Reference",description:"Learn more about components in VertiGIS Studio Mobile",link:(0,r.Z)("docs/mobile/sdk-components-reference"),mdxType:"UseCaseCard"}),(0,a.kt)(p.Z,{title:"Component and Service Interactions",description:"Learn how components and services interact in VertiGIS Studio Mobile",link:(0,r.Z)("docs/mobile/sdk-component-service-interactions"),mdxType:"UseCaseCard"}),(0,a.kt)(p.Z,{title:"Implement a Custom Service",description:"Learn how to implement a custom service using the VertiGIS Studio Mobile SDK",link:(0,r.Z)("docs/mobile/sdk-services-create"),mdxType:"UseCaseCard"})))}k.isMDXComponent=!0}}]);