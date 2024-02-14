"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[6776],{6800:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var s=t(7624),n=t(2172);const i={title:"View Model Helper Class",description:"VertiGIS Studio Mobile - Learn about the base class for ViewModels in mobile, NotifyPropertyBase"},r=void 0,l={id:"mobile/sdk-components-viewmodel-helper-class",title:"View Model Helper Class",description:"VertiGIS Studio Mobile - Learn about the base class for ViewModels in mobile, NotifyPropertyBase",source:"@site/docs/mobile/sdk-components-viewmodel-helper-class.mdx",sourceDirName:"mobile",slug:"/mobile/sdk-components-viewmodel-helper-class",permalink:"/docs/mobile/sdk-components-viewmodel-helper-class",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/sdk-components-viewmodel-helper-class.mdx",tags:[],version:"current",frontMatter:{title:"View Model Helper Class",description:"VertiGIS Studio Mobile - Learn about the base class for ViewModels in mobile, NotifyPropertyBase"},sidebar:"mobile",previous:{title:"Component Reference",permalink:"/docs/mobile/sdk-components-reference"},next:{title:"Component Styling",permalink:"/docs/mobile/sdk-components-styling"}},a={},p=[{value:"Relevant SDK Sample",id:"relevant-sdk-sample",level:2}];function d(e){const o={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:["As per ",(0,s.jsx)(o.a,{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/xaml/xaml-basics/data-bindings-to-mvvm#a-simple-viewmodel",children:".NET and Xamarin Forms guidelines"}),", ViewModels usually implement the ",(0,s.jsx)(o.code,{children:"INotifyPropertyChanged"})," interface to inform the view of changes to the data model. This involves a lot of boilerplate, so VertiGIS Studio Mobile has a class, ",(0,s.jsx)(o.code,{children:"NotifyPropertyBase"}),", which handles the boilerplate and simplifies your code."]}),"\n",(0,s.jsxs)(o.p,{children:["The ViewModel of the ",(0,s.jsx)(o.a,{href:"/docs/mobile/tutorial-implement-component-with-ui#example-progress-bar",children:"progress bar custom component"})," is a good example of this pattern."]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-cs",children:"using App1.Components;\nusing VertiGIS.Mobile.Composition;\nusing VertiGIS.Mobile.Composition.Views;\n\n[assembly: ViewModel(typeof(ProgressBarComponentViewModel))]\nnamespace App1.Components\n{\n    public class ProgressBarComponentViewModel : NotifyPropertyBase\n    {\n        private double _progress = 0;\n\n        private bool _workComplete = false;\n\n        public double Progress\n        {\n            get => _progress;\n            set => SetProperty(ref _progress, value);\n        }\n\n        public bool WorkComplete\n        {\n            get => _workComplete;\n            set\n            {\n                SetProperty(ref _workComplete, value);\n                OnPropertyChanged(nameof(WorkNotComplete));\n            }\n        }\n\n        public bool WorkNotComplete => !WorkComplete;\n    }\n}\n"})}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.code,{children:"NotifyPropertyBase"})," implements ",(0,s.jsx)(o.code,{children:"INotifyPropertyChanged"})," for you and provides a helper function, ",(0,s.jsx)(o.code,{children:"SetProperty"}),". This helper function will ensure that ",(0,s.jsx)(o.code,{children:"OnPropertyChanged"})," is called if the value has changed and that the underlying field is set."]}),"\n",(0,s.jsx)(o.h2,{id:"relevant-sdk-sample",children:"Relevant SDK Sample"}),"\n",(0,s.jsxs)(o.p,{children:["The VertiGIS Studio Mobile SDK Samples has an example of a ",(0,s.jsx)(o.a,{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/CustomSamples/BreadCrumbs",children:"breadcrumbs component that uses a viewmodel"}),"."]})]})}function c(e={}){const{wrapper:o}={...(0,n.M)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},2172:(e,o,t)=>{t.d(o,{I:()=>l,M:()=>r});var s=t(1504);const n={},i=s.createContext(n);function r(e){const o=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(i.Provider,{value:o},e.children)}}}]);