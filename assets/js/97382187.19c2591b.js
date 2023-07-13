"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[1181],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=o,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||a;return n?i.createElement(d,r(r({ref:t},c),{},{components:n})):i.createElement(d,r({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2719:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=n(7462),o=(n(7294),n(3905));n(9960);const a={title:"Mobile Generic Event Listener",author:"Kenneth Walker",authorTitle:"Software Developer",authorURL:"https://github.com/kewalker",authorImageURL:"https://github.com/kewalker.png",tags:["mobile","workflow"]},r=void 0,s={permalink:"/blog/2023/03/01/mobile-generic-event-listener",source:"@site/blog/2023-03-01-mobile-generic-event-listener.mdx",title:"Mobile Generic Event Listener",description:"VertiGIS Studio Mobile 5.22 includes an exciting new capability for working with commands, operations, and events. This capability allows app authors to execute custom, configured actions in response to events raised in Mobile. To opt in to this behavior, app authors register an event listener (subscriber) for any given Mobile event. When this event is raised in Mobile, the corresponding configured command or operation is invoked.",date:"2023-03-01T00:00:00.000Z",formattedDate:"March 1, 2023",tags:[{label:"mobile",permalink:"/blog/tags/mobile"},{label:"workflow",permalink:"/blog/tags/workflow"}],readingTime:7.065,hasTruncateMarker:!0,authors:[{name:"Kenneth Walker",title:"Software Developer",url:"https://github.com/kewalker",imageURL:"https://github.com/kewalker.png"}],frontMatter:{title:"Mobile Generic Event Listener",author:"Kenneth Walker",authorTitle:"Software Developer",authorURL:"https://github.com/kewalker",authorImageURL:"https://github.com/kewalker.png",tags:["mobile","workflow"]},prevItem:{title:"Creating Custom Bands with the Inline SDK",permalink:"/blog/2023/06/20/inline-sdk"},nextItem:{title:"New Workflow Form Element API",permalink:"/blog/2021/03/22/new-workflow-element-api"}},l={authorsImageUrls:[void 0]},p=[{value:"Register a Listener",id:"register-a-listener",level:2},{value:"Wire up a new <code>Listener</code>",id:"wire-up-a-new-listener",level:3},{value:"Command Chaining",id:"command-chaining",level:2},{value:"Specify A Sender",id:"specify-a-sender",level:2},{value:"Workflows and Context",id:"workflows-and-context",level:2},{value:"A Workflow with Context",id:"a-workflow-with-context",level:3},{value:"Raise Custom Events",id:"raise-custom-events",level:2},{value:"Raise Event through Action",id:"raise-event-through-action",level:3},{value:"Raise Event through Workflow",id:"raise-event-through-workflow",level:3},{value:"Subscribe to Custom Event",id:"subscribe-to-custom-event",level:3},{value:"In Closing",id:"in-closing",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"VertiGIS Studio Mobile ",(0,o.kt)("inlineCode",{parentName:"p"},"5.22")," includes an exciting new capability for working with commands, operations, and events. This capability allows app authors to execute custom, configured actions in response to events raised in Mobile. To opt in to this behavior, app authors register an event listener (subscriber) for any given Mobile event. When this event is raised in Mobile, the corresponding configured command or operation is invoked."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"To use these new features, you will need a ",(0,o.kt)("inlineCode",{parentName:"p"},"5.22+")," version of VertiGIS Studio Mobile.")),(0,o.kt)("p",null,"The new events capability can be exercised in a few ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#register-a-listener"},"Registering an event listener and action")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#command-chaining"},"Command chaining")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#specify-a-sender"},"Specifying a sender")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#workflows-and-context"},"Workflow and context")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#raise-custom-events"},"Raise custom event"))),(0,o.kt)("admonition",{title:"Want a complete list of events?",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.vertigisstudio.com/docs/mobile/api-commands-operations-events#events"},"Events")," for the complete list of eligible events that can be listened to.")),(0,o.kt)("h2",{id:"register-a-listener"},"Register a Listener"),(0,o.kt)("p",null,"To get started, you'll want to introduce a new item ",(0,o.kt)("inlineCode",{parentName:"p"},"$type")," into your ",(0,o.kt)("inlineCode",{parentName:"p"},"app.json")," configuration: the ",(0,o.kt)("inlineCode",{parentName:"p"},"event-listener"),". Today, you'll need to manually configure this app item and any respective listeners. Support for configuring listeners through Designer will be coming soon."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "$type": "event-listener",\n    "id": "custom-event-listener",\n    "listeners": [\n        // ... to be populated with listeners ...\n    ]\n}\n')),(0,o.kt)("h3",{id:"wire-up-a-new-listener"},"Wire up a new ",(0,o.kt)("inlineCode",{parentName:"h3"},"Listener")),(0,o.kt)("p",null,"With the new ",(0,o.kt)("inlineCode",{parentName:"p"},"event-listener")," app item, you register a listener to a given event and respond with a configured action. Below, we're taking advantage of the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.vertigisstudio.com/docs/mobile/api-commands-operations-events/#event-map.viewpoint-changed"},"map.viewpoint-changed")," event. In particular, it's configured with the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.vertigisstudio.com/docs/mobile/api-commands-operations-events#command-highlights.clear"},"highlights.clear")," command. When you pan the map, the ",(0,o.kt)("inlineCode",{parentName:"p"},"map.viewpoint-changed")," event is raised, and in turn, our ",(0,o.kt)("inlineCode",{parentName:"p"},"highlights.clear")," command is executed. No more highlights when we pan!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "$type": "event-listener",\n    "id": "custom-event-listener",\n    "listeners": [\n        {\n            "event": "map.viewpoint-changed",\n            "action": "highlights.clear"\n        }\n        // ... more listeners ...\n    ]\n}\n')),(0,o.kt)("p",null,"Of course, multiple listeners may be registered. They can listen to both distinct or duplicate events:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "$type": "event-listener",\n    "id": "custom-event-listener",\n    "listeners": [\n        {\n            "event": "map.viewpoint-changed",\n            "action": "highlights.clear"\n        },\n        {\n            "event": "map.viewpoint-changed",\n            "action": "highlights.clear-focus"\n        },\n        {\n            "event": "layers.visibility-changed",\n            "action": "log-viewer.display"\n        }\n        // ... more listeners ...\n    ]\n}\n')),(0,o.kt)("admonition",{title:"Warning",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"The event listener capability is only available after the map has begun initializing. Listeners for events that fire ",(0,o.kt)("em",{parentName:"p"},"before")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"map.initializing")," event will not trigger any actions.")),(0,o.kt)("h2",{id:"command-chaining"},"Command Chaining"),(0,o.kt)("p",null,"We can pair event listening with ",(0,o.kt)("a",{parentName:"p",href:"https://developers.vertigisstudio.com/docs/mobile/configuration-commands-operations/#command-chains"},"Command Chains")," to react with multiple actions chained together. In the example below, we'll react to a map pan by both clearing highlights and closing the panel. Notice that we can mix the use of simple syntax with the dictionary syntax that can optionally provide arguments."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "$type": "event-listener",\n    "id": "custom-event-listener",\n    "listeners": [\n        {\n            "event": "map.viewpoint-changed",\n            "action": [\n                "highlights.clear",\n                {\n                    "name": "panel.close-host-panel",\n                    "arguments": {}\n                }\n            ]\n        }\n        // ... more listeners ...\n    ]\n}\n')),(0,o.kt)("h2",{id:"specify-a-sender"},"Specify A Sender"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"sender")," property to configure the listener such that it ",(0,o.kt)("strong",{parentName:"p"},"only")," reacts to those events that originate from the specified sender. A sender could correspond to a given component or service. Specifying the sender is optional."),(0,o.kt)("p",null,"Take the example below where two ",(0,o.kt)("inlineCode",{parentName:"p"},"map-extension"),"s are configured. Since ",(0,o.kt)("inlineCode",{parentName:"p"},"sender"),' is specified as "map-config-1", viewpoint changed events raised from this map will result in highlights being cleared. Viewpoint changed events raised from "map-config-2" are effectively ignored.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "$type": "map-extension",\n    "id": "map-config-1",\n    "webMap": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx1"\n    // ...\n},\n{\n    "$type": "map-extension",\n    "id": "map-config-2",\n    "webMap": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx2"\n    // ...\n},\n\n// ...\n\n{\n    "$type": "event-listener",\n    "id": "custom-event-listener",\n    "listeners": [\n        {\n            "event": "map.viewpoint-changed",\n            "sender": "item://map-extension/map-config-1",\n            "action": ["highlights.clear"]\n        },\n        // ... more listeners ...\n    ]\n}\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"sender")," is omitted, any instance of the raised event will trigger the configured action.")),(0,o.kt)("h2",{id:"workflows-and-context"},"Workflows and Context"),(0,o.kt)("p",null,"Using this new capability, you can also configure a Studio Workflow as an action to invoke in response to an event being raised."),(0,o.kt)("admonition",{title:"Want to learn more about Studio Workflow?",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Check out the overview to learn more about ",(0,o.kt)("a",{parentName:"p",href:"https://developers.vertigisstudio.com/docs/workflow/overview"},"Studio Workflow"),".")),(0,o.kt)("p",null,"Below, we'll configure a ",(0,o.kt)("a",{parentName:"p",href:"https://developers.vertigisstudio.com/docs/mobile/api-commands-operations-events#command-workflow.run"},"workflow.run")," action and listen to a ",(0,o.kt)("a",{parentName:"p",href:"https://developers.vertigisstudio.com/docs/mobile/api-commands-operations-events#event-layers.visibility-changed"},"layers.visibility-changed")," event. Notice that we can specify arguments for our action, which in this case, will be the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," of a ",(0,o.kt)("inlineCode",{parentName:"p"},'$type: "workflow"')," item in ",(0,o.kt)("inlineCode",{parentName:"p"},"app.json")," configuration."),(0,o.kt)("p",null,"In this example, toggling an entry in the layer list will invoke the configured workflow."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "$type": "event-listener",\n    "id": "custom-event-listener",\n    "listeners": [\n        {\n            "event": "layers.visibility-changed",\n            "action": {\n                "name": "workflow.run",\n                "arguments": {\n                    "id": "visibility-workflow" // this id corresponds to the id of the workflow item that we want to invoke\n                }\n            }\n        },\n        // ... more listeners ...\n    ]\n},\n\n// ...\n\n{\n    // The corresponding Workflow that we want to invoke in response to an event.\n    "$type": "workflow",\n    "id": "visibility-workflow",\n    "title": "My Visibility Workflow",\n    "target": "auto",\n    "portalItem": "https://www.arcgis.com/sharing/rest/content/items/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",\n    "commandArgumentInput": "context"\n},\n')),(0,o.kt)("h3",{id:"a-workflow-with-context"},"A Workflow with Context"),(0,o.kt)("p",null,"Running a Workflow is a powerful way to react to events raised during an app session. Pairing a Workflow with the ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," capability gives us an opportunity to use an input from the event in the Workflow activity."),(0,o.kt)("p",null,"Notice below that the Workflow item specifies a ",(0,o.kt)("inlineCode",{parentName:"p"},"commandArgumentInput")," value of ",(0,o.kt)("inlineCode",{parentName:"p"},"context"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "$type": "workflow",\n    "commandArgumentInput": "context"\n    // ...\n},\n')),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"layers.visibility-changed")," event, we configure a Workflow as an action, being mindful of the ",(0,o.kt)("inlineCode",{parentName:"p"},"commandArgumentInput"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "$type": "event-listener",\n    "id": "custom-event-listener",\n    "listeners": [\n        {\n            "event": "layers.visibility-changed",\n            "action": {\n                "name": "workflow.run",\n                "arguments": {\n                    "id": "visibility-workflow" // this id corresponds to the id of the workflow item that we want to invoke\n                }\n            }\n        },\n        // ... more listeners ...\n    ]\n},\n\n// ...\n\n{\n    // The corresponding Workflow that we want to invoke in response to an event.\n    "$type": "workflow",\n    "id": "visibility-workflow",\n    "title": "My Visibility Workflow",\n    "target": "auto",\n    "portalItem": "https://www.arcgis.com/sharing/rest/content/items/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",\n    "commandArgumentInput": "context"\n},\n')),(0,o.kt)("p",null,"By specifying the ",(0,o.kt)("inlineCode",{parentName:"p"},"context"),", we're able to retrieve an input value within a Workflow using the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.vertigisstudio.com/workflow/latest/help/Default.htm#wf5/help/activities/get-workflow-inputs.htm#Get_Workflow_Inputs_Activity"},"Get Workflow Inputs")," activity."),(0,o.kt)("p",null,"In our Workflow, we would want to run ",(0,o.kt)("inlineCode",{parentName:"p"},"Get Workflow Inputs")," as our first activity to retrieve the input. Once we have the input as an object in our Workflow, we can access the ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," to start working with the input."),(0,o.kt)("p",null,"In the case of the ",(0,o.kt)("inlineCode",{parentName:"p"},"layers.visibility-changed")," event, we're able to retrieve and work with the ",(0,o.kt)("inlineCode",{parentName:"p"},"LayerContent")," as an input to our Workflow. Below is an example of how to access the ",(0,o.kt)("inlineCode",{parentName:"p"},"LayerContent")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," and get at the ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),", which could then be used in any subsequent activity, for example an alert or a query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"=$getWorkflowInputs1.inputs.context.LayerContent.id.toString()\n")),(0,o.kt)("admonition",{title:"Important",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The value provided to ",(0,o.kt)("inlineCode",{parentName:"p"},"commandArgumentInput")," and the accessor used within the ",(0,o.kt)("inlineCode",{parentName:"p"},"Get Workflow Inputs")," activity object ",(0,o.kt)("strong",{parentName:"p"},"must")," match to correctly access an input (i.e. both ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," in this example).")),(0,o.kt)("h2",{id:"raise-custom-events"},"Raise Custom Events"),(0,o.kt)("p",null,"While Mobile exposes a number of events that may be listened to, there are times where it would be beneficial to respond to events that ",(0,o.kt)("em",{parentName:"p"},"aren't")," raised out of the box. Fortunately, there are also capabilities that allow app authors to raise custom events."),(0,o.kt)("h3",{id:"raise-event-through-action"},"Raise Event through Action"),(0,o.kt)("p",null,"Using the new ",(0,o.kt)("a",{parentName:"p",href:"https://developers.vertigisstudio.com/docs/mobile/api-commands-operations-events#command-viewer.publish-event"},"viewer.publish-event")," command, a custom event can be raised. This action can be configured anywhere in the app that supports actions, like buttons, hooks, command chains, etc. Below is an example of a configured button action:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"action": {\n    "name": "viewer.publish-event",\n    "arguments": {\n        "name": "custom.raised-event",\n        "arguments": {}\n    }\n}\n')),(0,o.kt)("h3",{id:"raise-event-through-workflow"},"Raise Event through Workflow"),(0,o.kt)("p",null,"But what if we want to raise a custom event during execution of a Workflow? Using the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.vertigisstudio.com/workflow/latest/help/Default.htm#wf5/help/activities/publish-event.htm"},"Publish Event")," activity, it's possible to raise a custom event from anywhere in your Workflow logic. Simply provide the same custom event name to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Event Name")," input in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Publish Event")," activity. Arguments may also be provided. For the above example, that would be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"custom.raised-event\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Although not recommended, it's also possible to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"viewer.publish-event")," command and the ",(0,o.kt)("inlineCode",{parentName:"p"},"Publish Event")," activity to manually publish well-known Mobile events, i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"map.viewpoint-changed"),".")),(0,o.kt)("h3",{id:"subscribe-to-custom-event"},"Subscribe to Custom Event"),(0,o.kt)("p",null,"Of course, publishing these events is only one side of the capabilities. Using the same mechanism introduced above, these custom raised events can be listened to, and configured with an action to invoke."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "$type": "event-listener",\n    "id": "custom-event-listener",\n    "listeners": [\n        {\n            "event": "custom.raised-event",\n            "action": "..."\n        }\n    ]\n}\n')),(0,o.kt)("p",null,"Custom events could in turn raise more events with the ",(0,o.kt)("inlineCode",{parentName:"p"},"viewer.publish-event"),", which could in turn be listened to. Together, the publishing and listening capabilities offer flexibility to respond to custom events with configured actions."),(0,o.kt)("h2",{id:"in-closing"},"In Closing"),(0,o.kt)("p",null,"We're excited to showcase these new capabilities for commands, operations, and events. We hope app authors can take advantage of them to create more responsive and exciting applications. Happy building!"))}u.isMDXComponent=!0}}]);