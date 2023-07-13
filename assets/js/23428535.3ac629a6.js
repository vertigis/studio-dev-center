"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[8784],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,y=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return n?i.createElement(y,o(o({ref:t},u),{},{components:n})):i.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(7294),r=n(6010);const a={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return i.createElement("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>A});var i=n(7462),r=n(7294),a=n(6010),o=n(2466),c=n(6550),l=n(1980),s=n(7392),u=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:r}}=e;return{value:t,label:n,attributes:i,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:n}=e;const i=(0,c.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,a=m(e),[o,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:a}))),[l,s]=y({queryString:n,groupId:i}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,a]=(0,u.Nk)(n);return[i,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:i}),v=(()=>{const e=l??p;return d({value:e,tabValues:a})?e:null})();(0,r.useLayoutEffect)((()=>{v&&c(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),s(e),f(e)}),[s,f,a]),tabValues:a}}var v=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:c,selectValue:l,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),i=s[n].value;i!==c&&(p(t),l(i))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,i.Z)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},o,{className:(0,a.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":c===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i}))))}function k(e){const t=f(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",b.tabList)},r.createElement(g,(0,i.Z)({},e,t)),r.createElement(h,(0,i.Z)({},e,t)))}function A(e){const t=(0,v.Z)();return r.createElement(k,(0,i.Z)({key:String(t)},e))}},5380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var i=n(7462),r=(n(7294),n(3905)),a=n(4866),o=n(5162);const c={title:"Workflow Activity Reference",sidebar_label:"Activity Reference",description:"VertiGIS Studio Workflow - Reference for workflow activities for VertiGIS Studio Mobile"},l=void 0,s={unversionedId:"workflow/sdk-mobile-activity-reference",id:"workflow/sdk-mobile-activity-reference",title:"Workflow Activity Reference",description:"VertiGIS Studio Workflow - Reference for workflow activities for VertiGIS Studio Mobile",source:"@site/docs/workflow/sdk-mobile-activity-reference.mdx",sourceDirName:"workflow",slug:"/workflow/sdk-mobile-activity-reference",permalink:"/docs/workflow/sdk-mobile-activity-reference",draft:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/workflow/sdk-mobile-activity-reference.mdx",tags:[],version:"current",frontMatter:{title:"Workflow Activity Reference",sidebar_label:"Activity Reference",description:"VertiGIS Studio Workflow - Reference for workflow activities for VertiGIS Studio Mobile"},sidebar:"workflow",previous:{title:"Create an Activity",permalink:"/docs/workflow/sdk-mobile-create-activity"},next:{title:"Form Element Reference",permalink:"/docs/workflow/sdk-mobile-form-reference"}},u={},p=[{value:"Registering Activities",id:"registering-activities",level:2},{value:"Access VertiGIS Studio Mobile Functionality",id:"access-vertigis-studio-mobile-functionality",level:2},{value:"Access the Application Map",id:"access-the-application-map",level:2}],m={toc:p},d="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the VertiGIS Studio Workflow .NET SDK, activities are represented as simple classes with an ",(0,r.kt)("inlineCode",{parentName:"p"},"Execute")," method."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Use a unique prefix on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Action")," property to avoid it conflicting with someone else's custom activities.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'[assembly: Export(typeof(CustomActivity))]\nnamespace App1.Workflow\n{\n    public class CustomActivity : IActivityHandler\n    {\n        public static string Action { get; } = "uuid:<uuid>::CustomActivity";\n\n        public Task<IDictionary<string, object>> Execute(IDictionary<string, object> inputs, IActivityContext context)\n        {\n            return Task.FromResult((IDictionary<string, object>)new Dictionary<string, object>(){\n                ["result"] = "value"\n            });\n        }\n    }\n}\n')),(0,r.kt)("h2",{id:"registering-activities"},"Registering Activities"),(0,r.kt)("p",null,"Every VertiGIS Studio Mobile application that implements custom workflow activities needs to implement an ",(0,r.kt)("inlineCode",{parentName:"p"},"IActivityHandlerFactory"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"IActivityHandlerFactory")," is responsible for registering the custom activities with VertiGIS Studio Mobile so they can be created by VertiGIS Studio Workflow at runtime."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ActivityLoader")," registers custom activities in its constructor. Only one instance of the loader is required per VertiGIS Studio Mobile Application, as it can register multiple activities."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Two key components of this snippet are the ",(0,r.kt)("inlineCode",{parentName:"p"},"[assembly: Export(...)]")," tag and the class extension ",(0,r.kt)("inlineCode",{parentName:"p"},"ActivityLoader : IActivityHandlerFactory"),". These two pieces register the ",(0,r.kt)("inlineCode",{parentName:"p"},"ActivityLoader")," with VertiGIS Studio Mobile and cause it to be initialized on startup.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="App1/App1/ActivityLoader.cs"',title:'"App1/App1/ActivityLoader.cs"'},'using System;\nusing System.Collections.Generic;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing VertiGIS.Mobile.Composition;\nusing VertiGIS.Workflow.Runtime;\nusing VertiGIS.Workflow.Runtime.Definition;\nusing VertiGIS.Workflow.Runtime.Execution;\nusing App1.Workflow;\n\n[assembly: Export(typeof(ActivityLoader), SingleInstance = true, AsImplementedInterfaces = true)]\nnamespace App1.Workflow\n{\n    public class ActivityLoader : IActivityHandlerFactory\n    {\n        /// <summary>\n        /// Gets a mapping of action names to implementations of <see cref="IActivityHandler"/>s.\n        /// </summary>\n        private Dictionary<string, Func<IActivityHandler>> RegisteredActivities { get; } = new Dictionary<string, Func<IActivityHandler>>();\n\n        public ActivityLoader(Func<CustomActivity> customActivityFactory)\n        {\n            RegisteredActivities[CustomActivity.Action] = customActivityFactory;\n        }\n\n        /// <summary>\n        /// Creates an <see cref="IActivityHandler"/>.\n        /// </summary>\n        /// <param name="action">The name of the action to create.</param>\n        /// <param name="token">The cancellation token.</param>\n        /// <param name="inspector">The <see cref="ProgramInspector"/> for the program.</param>\n        /// <returns>The activity handler for the given action.</returns>\n        public Task<IActivityHandler> Create(string action, CancellationToken token, ProgramInspector inspector = null)\n        {\n            if (action == null || token.IsCancellationRequested)\n            {\n                return Task.FromResult<IActivityHandler>(null);\n            }\n\n            if (RegisteredActivities.TryGetValue(action, out Func<IActivityHandler> handlerType))\n            {\n                return Task.FromResult(handlerType());\n            }\n            else\n            {\n                return Task.FromResult<IActivityHandler>(null);\n            }\n        }\n    }\n}\n')),(0,r.kt)("h2",{id:"access-vertigis-studio-mobile-functionality"},"Access VertiGIS Studio Mobile Functionality"),(0,r.kt)("p",null,"You can access VertiGIS Studio Mobile functionality in custom workflow activities by using the built-in ",(0,r.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-dependency-injection"},"dependency injection pattern")," to inject shared VertiGIS Studio Mobile ",(0,r.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-services-overview"},"services")," such as the ",(0,r.kt)("inlineCode",{parentName:"p"},"UIOperations")," service."),(0,r.kt)("p",null,"First, add the class you want to inject to the constructor of the custom activity."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'// highlight-next-line\n[assembly: Export(typeof(DisplayGeocortexMobileAlert))]\nnamespace App1.Workflow\n{\n    public class DisplayGeocortexMobileAlert : IActivityHandler\n    {\n        private UIOperations _uiOperations;\n\n        public static string Action { get; } = "uuid:<uuid>::DisplayGeocortexMobileAlert";\n\n        // highlight-next-line\n        public DisplayGeocortexMobileAlert(UIOperations uiOperations)\n        {\n            _uiOperations = uiOperations;\n        }\n\n        public Task<IDictionary<string, object>> Execute(IDictionary<string, object> inputs, IActivityContext context)\n        {\n            return Task.FromResult((IDictionary<string, object>)new Dictionary<string, object>());\n        }\n    }\n}\n')),(0,r.kt)("p",null,"Next, ",(0,r.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-dependency-injection"},"inject the activity")," into the ",(0,r.kt)("inlineCode",{parentName:"p"},"IActivityHandlerFactory")," for the application."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Since the ",(0,r.kt)("inlineCode",{parentName:"p"},"DisplayGeocortexMobileAlert")," activity is injected into the ",(0,r.kt)("inlineCode",{parentName:"p"},"IActivityHandlerFactory")," with Autofac, its dependency on the ",(0,r.kt)("inlineCode",{parentName:"p"},"UIOperations")," class will be be resolved by Autofac.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public class ActivityLoader : IActivityHandlerFactory\n{\n    ...\n\n    // highlight-next-line\n    public ActivityLoader(Func<DisplayGeocortexMobileAlert> displayGeocortexMobileAlertFactory)\n    {\n        RegisteredActivities[DisplayGeocortexMobileAlert.Action] = displayGeocortexMobileAlertFactory;\n    }\n    ...\n}\n")),(0,r.kt)("p",null,"Finally, you can implement your activity using the referenced VertiGIS Studio Mobile class."),(0,r.kt)(a.Z,{defaultValue:"custom-activity",values:[{label:"Custom Activity",value:"custom-activity"},{label:"IActivityHandlerFactory",value:"activity-loader"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"custom-activity",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using App1.Workflow;\nusing VertiGIS.Mobile.Composition;\nusing VertiGIS.Mobile.Infrastructure.Messaging;\nusing VertiGIS.Workflow.Runtime;\nusing System.Collections.Generic;\nusing System.Threading.Tasks;\n\n[assembly: Export(typeof(DisplayGeocortexMobileAlert))]\nnamespace App1.Workflow\n{\n    public class DisplayGeocortexMobileAlert : IActivityHandler\n    {\n        private UIOperations _uiOperations;\n\n        public static string Action { get; } = "uuid:<uuid>::DisplayGeocortexMobileAlert";\n\n        public DisplayGeocortexMobileAlert(UIOperations uiOperations)\n        {\n            _uiOperations = uiOperations;\n        }\n\n        public async Task<IDictionary<string, object>> Execute(IDictionary<string, object> inputs, IActivityContext context)\n        {\n            await _uiOperations.Alert.ExecuteAsync(new UIAlertArgs() { Title = "It\'s dangerous to go alone.", Message = "Take this!", ButtonText = "*take sword*" });\n\n            return new Dictionary<string, object>();\n        }\n    }\n}\n'))),(0,r.kt)(o.Z,{value:"activity-loader",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using App1.Samples.Workflow.CustomActivity;\nusing System;\nusing System.Collections.Generic;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing VertiGIS.Mobile.Composition;\nusing VertiGIS.Workflow.Runtime;\nusing VertiGIS.Workflow.Runtime.Definition;\nusing VertiGIS.Workflow.Runtime.Execution;\nusing App1.Workflow;\n\n[assembly: Export(typeof(ActivityLoader), SingleInstance = true, AsImplementedInterfaces = true)]\nnamespace App1.Samples.Workflow.CustomActivity\n{\n    public class ActivityLoader : IActivityHandlerFactory\n    {\n        /// <summary>\n        /// Gets a mapping of action names to implementations of <see cref="IActivityHandler"/>s.\n        /// </summary>\n        private Dictionary<string, Func<IActivityHandler>> RegisteredActivities { get; } = new Dictionary<string, Func<IActivityHandler>>();\n\n        public ActivityLoader(Func<DisplayGeocortexMobileAlert> displayGeocortexMobileAlertFactory)\n        {\n            RegisteredActivities[DisplayGeocortexMobileAlert.Action] = displayGeocortexMobileAlertFactory;\n        }\n\n        /// <summary>\n        /// Creates an <see cref="IActivityHandler"/>.\n        /// </summary>\n        /// <param name="action">The name of the action to create.</param>\n        /// <param name="token">The cancellation token.</param>\n        /// <param name="inspector">The <see cref="ProgramInspector"/> for the program.</param>\n        /// <returns>The activity handler for the given action.</returns>\n        public Task<IActivityHandler> Create(string action, CancellationToken token, ProgramInspector inspector = null)\n        {\n            if (action == null || token.IsCancellationRequested)\n            {\n                return Task.FromResult<IActivityHandler>(null);\n            }\n\n            if (RegisteredActivities.TryGetValue(action, out Func<IActivityHandler> handlerType))\n            {\n                return Task.FromResult(handlerType());\n            }\n            else\n            {\n                return Task.FromResult<IActivityHandler>(null);\n            }\n        }\n    }\n}\n')))),(0,r.kt)("h2",{id:"access-the-application-map"},"Access the Application Map"),(0,r.kt)("p",null,"The map of the host application can be accessed through ",(0,r.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-dependency-injection"},"dependency injection "),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"MapProviderBase")," class which exposes the ",(0,r.kt)("a",{parentName:"p",href:"https://developers.arcgis.com/net/latest/uwp/api-reference/html/T_Esri_ArcGISRuntime_Mapping_Map.htm"},"Map")," and ",(0,r.kt)("a",{parentName:"p",href:"https://developers.arcgis.com/net/latest/uwp/api-reference/html/T_Esri_ArcGISRuntime_UI_Controls_MapView.htm"},"MapView")," can be injected with the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProviderFactoryAttribute"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For a complete example, check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/workflow/tutorial-mobile-show-map-callout"},"Show Callout on Map")," custom activity tutorial.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'[assembly: Export(typeof(CustomActivity))]\nnamespace App1.Workflow\n{\n    public class CustomActivity : IActivityHandler\n    {\n        // highlight-start\n        [ProviderFactoryAttribute(typeof(MapProviderBase))]\n        public Func<MapProviderBase> MapProviderFactory { get; set; }\n        // highlight-end\n\n        public static string Action { get; } = "uuid:<uuid>::CustomActivity";\n\n        public Task<IDictionary<string, object>> Execute(IDictionary<string, object> inputs, IActivityContext context)\n        {\n            // highlight-start\n            var mapProvider = MapProviderFactory();\n            await mapProvider.Load();\n            var map = mapProvider.Map;\n            var mapView = (MapView)((WorkflowMapProvider)mapProvider).View;\n            // highlight-end\n\n            // ...\n\n            return new Dictionary<string, object>();\n        }\n    }\n}\n')))}y.isMDXComponent=!0}}]);