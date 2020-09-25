(window.webpackJsonp=window.webpackJsonp||[]).push([[91,30,141],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return m})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return f}));var a=n(2),o=n(6),i=(n(0),n(223)),r=n(233),c=n(234),l=n(57),s=n(224),p=n(51),u={title:"Show a Callout on the Map with an Activity",description:"Geocortex Workflow - Access the map and show a callout through a custom activity."},m={unversionedId:"workflow/tutorial-mobile-show-map-callout",id:"workflow/tutorial-mobile-show-map-callout",isDocsHomePage:!1,title:"Show a Callout on the Map with an Activity",description:"Geocortex Workflow - Access the map and show a callout through a custom activity.",source:"@site/docs/workflow/tutorial-mobile-show-map-callout.mdx",slug:"/workflow/tutorial-mobile-show-map-callout",permalink:"/docs/workflow/tutorial-mobile-show-map-callout",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/tutorial-mobile-show-map-callout.mdx",version:"current",sidebar:"workflow",previous:{title:"Implement an Activity that Calculates a Logarithm",permalink:"/docs/workflow/tutorial-mobile-calculate-logarithm-activity"},next:{title:"Implement an Loading Indicator Form Element",permalink:"/docs/workflow/tutorial-mobile-activity-indicator-form-element"}},b=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Set up the Activity",id:"set-up-the-activity",children:[]},{value:"Access the <code>MapProviderBase</code>",id:"access-the-mapproviderbase",children:[]},{value:"Load the <code>MapView</code>",id:"load-the-mapview",children:[]},{value:"Add a Callout at the Map Center",id:"add-a-callout-at-the-map-center",children:[]},{value:"Test your Activity",id:"test-your-activity",children:[]}],d={rightToc:b};function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Some activities may need access to the map embedded in the Geocortex Mobile Application. The ",Object(i.b)("inlineCode",{parentName:"p"},"MapProviderBase")," class can be injected in an activity and used to access the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.arcgis.com/net/latest/uwp/api-reference/html/T_Esri_ArcGISRuntime_Mapping_Map.htm"}),"Map")," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.arcgis.com/net/latest/uwp/api-reference/html/T_Esri_ArcGISRuntime_UI_Controls_MapView.htm"}),"MapView")," for the application."),Object(i.b)("p",null,"This article will walk you through accessing the map from an activity and displaying a callout at the map center point."),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)(l.default,{mdxType:"MobilePrereqs"}),Object(i.b)("h2",{id:"set-up-the-activity"},"Set up the Activity"),Object(i.b)("p",null,"First, the basic activity needs to be setup and registered. Below is an example of an activity setup to take text to display in the map callout."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/workflow/sdk-mobile-activity-reference"}),"Learn more about custom activities"),"."))),Object(i.b)(r.a,{defaultValue:"activity",values:[{label:"Activity",value:"activity"},{label:"Registration",value:"registration"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"activity",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:'title="App1/App1/workflow/PlaceCalloutAtCenter.cs"',title:'"App1/App1/workflow/PlaceCalloutAtCenter.cs"'}),'using App1.Workflow;\nusing VertiGIS.Mobile.Composition;\nusing Geocortex.Workflow.GIS.ArcGISRuntime;\nusing Geocortex.Workflow.Runtime;\nusing System;\nusing System.Collections.Generic;\nusing System.Threading.Tasks;\n\n[assembly: Export(typeof(PlaceCalloutAtCenter))]\nnamespace App1.Workflow\n{\n    public class PlaceCalloutAtCenter : IActivityHandler\n    {\n        public static string Action { get; } = "your:unique:namespace::PlaceCalloutAtCenter";\n\n        public async Task<IDictionary<string, object>> Execute(IDictionary<string, object> inputs, IActivityContext context)\n        {\n            // highlight-next-line\n            var calloutText = (string)inputs["calloutText"];\n\n            return new Dictionary<string, object>();\n        }\n    }\n}\n'))),Object(i.b)(c.a,{value:"registration",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:'title="App1/App1/workflow/ActivityLoader.cs"',title:'"App1/App1/workflow/ActivityLoader.cs"'}),'using System;\nusing System.Collections.Generic;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing App1.Workflow;\nusing VertiGIS.Mobile.Composition;\nusing Geocortex.Workflow.Runtime;\nusing Geocortex.Workflow.Runtime.Definition;\nusing Geocortex.Workflow.Runtime.Execution;\n\n[assembly: Export(typeof(ActivityLoader), SingleInstance = true, AsImplementedInterfaces = true)]\nnamespace App1.Workflow\n{\n    public class ActivityLoader : IActivityHandlerFactory\n    {\n        /// <summary>\n        /// Gets a mapping of action names to implementations of <see cref="IActivityHandler"/>s.\n        /// </summary>\n        private Dictionary<string, Func<IActivityHandler>> RegisteredActivities { get; } = new Dictionary<string, Func<IActivityHandler>>();\n\n        public ActivityLoader(Func<PlaceCalloutAtCenter> placeCalloutAtCenterFactory)\n        {\n            RegisteredActivities[PlaceCalloutAtCenter.Action] = placeCalloutAtCenterFactory;\n        }\n\n        /// <summary>\n        /// Creates an <see cref="IActivityHandler"/>.\n        /// </summary>\n        /// <param name="action">The name of the action to create.</param>\n        /// <param name="token">The cancellation token.</param>\n        /// <param name="inspector">The <see cref="ProgramInspector"/> for the program.</param>\n        /// <returns>The activity handler for the given action.</returns>\n        public Task<IActivityHandler> Create(string action, CancellationToken token, ProgramInspector inspector = null)\n        {\n            if (action == null || token.IsCancellationRequested)\n            {\n                return Task.FromResult<IActivityHandler>(null);\n            }\n\n            if (RegisteredActivities.TryGetValue(action, out Func<IActivityHandler> handlerType))\n            {\n                return Task.FromResult(handlerType());\n            }\n            else\n            {\n                return Task.FromResult<IActivityHandler>(null);\n            }\n        }\n    }\n}\n\n\n')))),Object(i.b)("h2",{id:"access-the-mapproviderbase"},"Access the ",Object(i.b)("inlineCode",{parentName:"h2"},"MapProviderBase")),Object(i.b)("p",null,"Accessing the map for the application uses the built-in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/sdk-dependency-injection"}),"dependency injection pattern")," to inject a ",Object(i.b)("inlineCode",{parentName:"p"},"MapProviderBase")," class which exposes the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.arcgis.com/net/latest/uwp/api-reference/html/T_Esri_ArcGISRuntime_Mapping_Map.htm"}),"Map")," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.arcgis.com/net/latest/uwp/api-reference/html/T_Esri_ArcGISRuntime_UI_Controls_MapView.htm"}),"MapView"),"."),Object(i.b)("p",null,"To inject the MapProviderBase, add a new ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://autofaccn.readthedocs.io/en/latest/resolve/relationships.html#dynamic-instantiation-func-b"}),"Autofac factory")," property that injects a ",Object(i.b)("inlineCode",{parentName:"p"},"MapProviderBase")," into your custom activity."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:'title="App1/App1/workflow/PlaceCalloutAtCenter.cs"',title:'"App1/App1/workflow/PlaceCalloutAtCenter.cs"'}),'using App1.Workflow;\nusing VertiGIS.Mobile.Composition;\nusing Geocortex.Workflow.GIS.ArcGISRuntime;\nusing Geocortex.Workflow.Runtime;\nusing System;\nusing System.Collections.Generic;\nusing System.Threading.Tasks;\n\n[assembly: Export(typeof(PlaceCalloutAtCenter))]\nnamespace App1.Workflow\n{\n    public class PlaceCalloutAtCenter : IActivityHandler\n    {\n        public static string Action { get; } = "your:unique:namespace::PlaceCalloutAtCenter";\n\n        // highlight-start\n        [ProviderFactoryAttribute(typeof(MapProviderBase))]\n        public Func<MapProviderBase> MapProviderFactory { get; set; }\n        // highlight-end\n\n        public async Task<IDictionary<string, object>> Execute(IDictionary<string, object> inputs, IActivityContext context)\n        {\n            var calloutText = (string)inputs["calloutText"];\n\n            return new Dictionary<string, object>();\n        }\n    }\n}\n')),Object(i.b)("h2",{id:"load-the-mapview"},"Load the ",Object(i.b)("inlineCode",{parentName:"h2"},"MapView")),Object(i.b)("p",null,"Next, we need to load the ",Object(i.b)("inlineCode",{parentName:"p"},"MapView")," from the ",Object(i.b)("inlineCode",{parentName:"p"},"MapProviderFactory"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:'title="App1/App1/workflow/PlaceCalloutAtCenter.cs"',title:'"App1/App1/workflow/PlaceCalloutAtCenter.cs"'}),'using App1.Workflow;\nusing Esri.ArcGISRuntime.Mapping;\nusing Esri.ArcGISRuntime.Xamarin.Forms;\nusing VertiGIS.Mobile.Composition;\nusing Geocortex.Workflow.GIS.ArcGISRuntime;\nusing Geocortex.Workflow.Runtime;\nusing System;\nusing System.Collections.Generic;\nusing System.Threading.Tasks;\nusing VertiGIS.Mobile.Infrastructure.Workflow;\n\n[assembly: Export(typeof(PlaceCalloutAtCenter))]\nnamespace App1.Workflow\n{\n    public class PlaceCalloutAtCenter : IActivityHandler\n    {\n        public static string Action { get; } = "your:unique:namespace::PlaceCalloutAtCenter";\n\n        [ProviderFactoryAttribute(typeof(MapProviderBase))]\n        public Func<MapProviderBase> MapProviderFactory { get; set; }\n\n        public async Task<IDictionary<string, object>> Execute(IDictionary<string, object> inputs, IActivityContext context)\n        {\n            var calloutText = (string)inputs["calloutText"];\n\n            // highlight-start\n            // Get an instance of the MapProvider\n            var mapProvider = MapProviderFactory();\n            // Ensure the map has loaded\n            await mapProvider.Load();\n            // ArcGIS runtime Map\n            Map map = mapProvider.Map;\n            // ArcGIS runtime MapView\n            MapView mapView = (MapView)((WorkflowMapProvider)mapProvider).View;\n            // highlight-end\n\n            return new Dictionary<string, object>();\n        }\n    }\n}\n')),Object(i.b)("h2",{id:"add-a-callout-at-the-map-center"},"Add a Callout at the Map Center"),Object(i.b)("p",null,"Finally, we can use the ",Object(i.b)("inlineCode",{parentName:"p"},"MapView")," to get the map center and add a callout with the user's text."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Operations related to UI activities have to run in Xamarin's ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/essentials/main-thread"}),"main thread"),", else they will throw an error."))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:'title="App1/App1/workflow/PlaceCalloutAtCenter.cs"',title:'"App1/App1/workflow/PlaceCalloutAtCenter.cs"'}),'using App1.Workflow;\nusing VertiGIS.Mobile.Composition;\nusing Esri.ArcGISRuntime.Geometry;\nusing Esri.ArcGISRuntime.UI;\nusing Esri.ArcGISRuntime.Mapping;\nusing Esri.ArcGISRuntime.Xamarin.Forms;\nusing Geocortex.Workflow.GIS.ArcGISRuntime;\nusing Geocortex.Workflow.Runtime;\nusing System;\nusing System.Collections.Generic;\nusing System.Threading.Tasks;\nusing VertiGIS.Mobile.Infrastructure.Workflow;\n\n[assembly: Export(typeof(PlaceCalloutAtCenter))]\nnamespace App1.Workflow\n{\n    public class PlaceCalloutAtCenter : IActivityHandler\n    {\n        public static string Action { get; } = "your:unique:namespace::PlaceCalloutAtCenter";\n\n        [ProviderFactoryAttribute(typeof(MapProviderBase))]\n        public Func<MapProviderBase> MapProviderFactory { get; set; }\n\n        public async Task<IDictionary<string, object>> Execute(IDictionary<string, object> inputs, IActivityContext context)\n        {\n            var calloutText = (string)inputs["calloutText"];\n\n            // Get an instance of the MapProvider\n            dynamic mapProvider = MapProviderFactory();\n            // Ensure the map has loaded\n            await mapProvider.Load();\n            // ArcGIS runtime Map\n            Map map = mapProvider.Map;\n            // ArcGIS runtime MapView\n            MapView mapView = (MapView)((WorkflowMapProvider)mapProvider).View;\n\n            // highlight-start\n            Xamarin.Essentials.MainThread.BeginInvokeOnMainThread(() =>\n            {\n                var currentEnvelope = (Envelope)mapView.GetCurrentViewpoint(Esri.ArcGISRuntime.Mapping.ViewpointType.BoundingGeometry).TargetGeometry;\n\n                mapView.ShowCalloutAt(currentEnvelope.GetCenter(), new CalloutDefinition("Hey!", $"Listen! {calloutText}"));\n            });\n            // highlight-end\n\n            return new Dictionary<string, object>();\n        }\n    }\n}\n')),Object(i.b)("h2",{id:"test-your-activity"},"Test your Activity"),Object(i.b)("p",null,"Now you can ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.geocortex.com/mobileviewer/latest/admin-help/Default.htm#gmv/designer/add-a-workflow-to-an-app.htm"}),"build a workflow for Geocortex Mobile")," that uses your new activity!"),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you want your custom activity to show up with a friendly user interface in Geocortex Workflow Designer, check out ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/workflow/sdk-net-register-activities"}),"Registering .NET Activities with Geocortex Workflow Designer"),"."))),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activities/run-activity.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____167"}),Object(i.b)("inlineCode",{parentName:"a"},"RunActivity"))," activity can be used to execute your activity by the name defined in ",Object(i.b)("inlineCode",{parentName:"p"},"PlaceCalloutAtCenter.cs")," (for this example, ",Object(i.b)("inlineCode",{parentName:"p"},"your:unique:namespace::PlaceCalloutAtCenter"),")."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",null,"You can"," ",Object(i.b)("a",{href:Object(s.a)("workflows/mobile-show-map-callout.json"),download:"show-map-callout.json"},"download this demo workflow")," ","that runs the custom activity and",Object(i.b)("a",{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/import-export-workflows.htm",target:"_blank"}," ","import it into the Geocortex Workflow Designer."," ")))),Object(i.b)("p",null,"Next you need to run the workflow you just created in your Geocortex Mobile SDK project."),Object(i.b)("p",null,"You can do this by configuring the layout and app config to run a workflow. You will need to copy the ID of the the workflow you created into the app.json"),Object(i.b)(p.default,{mdxType:"WorkflowUrlSnippet"}),Object(i.b)(r.a,{defaultValue:"config",values:[{label:"App Config",value:"config"},{label:"Layout",value:"layout"},{label:"UI",value:"ui"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"config",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="App1/App1/app.json"',title:'"App1/App1/app.json"'}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["large"]\n        },\n        {\n            "$type": "workflow",\n            "id": "custom-workflow",\n            "title": "Custom Workflow",\n            "target": "#taskbar",\n            // highlight-next-line\n            "portalItem": "<your-workflow-id>"\n        },\n        {\n            "$type": "menu",\n            "id": "iwtm",\n            "items": [\n                {\n                    "title": "Run Custom Workflow",\n                    "isEnabled": true,\n                    "iconId": "workflow",\n                    "action": {\n                        "name": "workflow.run",\n                        "arguments": {\n                            "id": "custom-workflow"\n                        }\n                    }\n                }\n            ]\n        }\n    ]\n}\n'))),Object(i.b)(c.a,{value:"layout",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:'title="App1/App1/layout-large.xml"',title:'"App1/App1/layout-large.xml"'}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd">\n    <gxm:taskbar id="taskbar" orientation="vertical">\n        <map slot="main">\n            <stack margin="0.8" slot="top-right" halign="end">\n                <iwtm config="iwtm"/>\n            </stack>\n        </map>\n    </gxm:taskbar>\n</layout>\n'))),Object(i.b)(c.a,{value:"ui",mdxType:"TabItem"},Object(i.b)("img",{src:Object(s.a)("img/workflow-mobile-show-map-callout.png")}))))}f.isMDXComponent=!0},223:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,d=u["".concat(r,".").concat(b)]||u[b]||m[b]||i;return n?o.a.createElement(d,c(c({ref:t},s),{},{components:n})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<i;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},224:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}));var a=n(227),o=n(225);function i(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,r=i.forcePrependBaseUrl,c=void 0!==r&&r,l=i.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+p:p}(i,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},225:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}))},226:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},227:function(e,t,n){"use strict";var a=n(0),o=n(19);t.a=function(){var e=Object(a.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},231:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)(void 0);t.a=o},232:function(e,t,n){"use strict";var a=n(0),o=n(231);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},233:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(232),r=n(226),c=n(48),l=n.n(c),s=37,p=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,u=e.values,m=e.groupId,b=Object(i.a)(),d=b.tabGroupChoices,f=b.setTabGroupChoices,h=Object(a.useState)(c),v=h[0],w=h[1],g=Object(a.useState)(!1),y=g[0],j=g[1];if(null!=m){var O=d[m];null!=O&&O!==v&&u.some((function(e){return e.value===O}))&&w(O)}var A=function(e){w(e),null!=m&&f(m,e)},k=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||j(!0)},C=function(){j(!1)};return Object(a.useEffect)((function(){window.addEventListener("keydown",x),window.addEventListener("mousedown",C)}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t})},u.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(r.a)("tabs__item",l.a.tabItem,{"tabs__item--active":v===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e),x(e)},onFocus:function(){return A(t)},onClick:function(){A(t),j(!1)},onPointerDown:function(){return j(!1)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===v}))[0]))}},234:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}},51:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),o=n(6),i=(n(0),n(223)),r={},c={unversionedId:"snippets/workflow-url",id:"snippets/workflow-url",isDocsHomePage:!1,title:"workflow-url",description:"https://apps.geocortex.com/workflow/designer/#workflow=",source:"@site/docs/snippets/workflow-url.mdx",slug:"/snippets/workflow-url",permalink:"/docs/snippets/workflow-url",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/snippets/workflow-url.mdx",version:"current"},l=[],s={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{class:"alert alert--secondary",role:"alert"},"https://apps.geocortex.com/workflow/designer/#workflow=",Object(i.b)("b",null,"44010fc421dd4659b74fb921e09ba594")),Object(i.b)("br",null))}p.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),o=n(6),i=(n(0),n(223)),r={},c={unversionedId:"workflow/snippets/prereqs-mobile",id:"workflow/snippets/prereqs-mobile",isDocsHomePage:!1,title:"prereqs-mobile",description:"Extending Geocortex Workflow for Mobile requires development and deployment of a custom Geocortex Mobile Application using the Geocortex Mobile SDK",source:"@site/docs/workflow/snippets/prereqs-mobile.mdx",slug:"/workflow/snippets/prereqs-mobile",permalink:"/docs/workflow/snippets/prereqs-mobile",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/snippets/prereqs-mobile.mdx",version:"current"},l=[],s={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Extending Geocortex Workflow for Mobile requires development and deployment of a custom Geocortex Mobile Application using the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/sdk-overview"}),"Geocortex Mobile SDK")))),Object(i.b)("p",null,"Follow the instructions in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/workflow/sdk-mobile-overview"}),"Geocortex Mobile SDK")," page to set up the environment for extending Workflow for Geocortex Mobile."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"A working knowledge of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-ca/dotnet/csharp/"}),"C#")," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://dotnet.microsoft.com/platform/dotnet-standard"}),".NET Standard")," is recommended before extending Workflow for Geocortex Mobile"))))}p.isMDXComponent=!0}}]);