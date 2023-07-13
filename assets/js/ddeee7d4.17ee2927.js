"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[907,2006],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>h});var r=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function p(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(i),y=a,h=d["".concat(l,".").concat(y)]||d[y]||m[y]||o;return i?r.createElement(h,n(n({ref:t},s),{},{components:i})):r.createElement(h,n({ref:t},s))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,n=new Array(o);n[0]=y;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:a,n[1]=p;for(var c=2;c<o;c++)n[c]=i[c];return r.createElement.apply(null,n)}return r.createElement.apply(null,i)}y.displayName="MDXCreateElement"},2349:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=i(7462),a=(i(7294),i(3905));const o={},n=void 0,p={unversionedId:"workflow/snippets/prereqs-web",id:"workflow/snippets/prereqs-web",title:"prereqs-web",description:"Follow the instructions in the Web Applications SDK page to set up your development environment.",source:"@site/docs/workflow/snippets/prereqs-web.mdx",sourceDirName:"workflow/snippets",slug:"/workflow/snippets/prereqs-web",permalink:"/docs/workflow/snippets/prereqs-web",draft:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/workflow/snippets/prereqs-web.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[],s={toc:c},d="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Follow the instructions in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-web-overview"},"Web Applications SDK")," page to set up your development environment."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"A working knowledge of ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," is recommended before extending Workflow for web-based hosts.")))}m.isMDXComponent=!0},22:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var r=i(7462),a=(i(7294),i(3905)),o=i(2349),n=i(4996);const p={title:"Add a Layer to a Map with an Activity",description:"VertiGIS Studio Workflow - Learn how to access and mutate the application map"},l=void 0,c={unversionedId:"workflow/tutorial-web-add-layer-to-map",id:"workflow/tutorial-web-add-layer-to-map",title:"Add a Layer to a Map with an Activity",description:"VertiGIS Studio Workflow - Learn how to access and mutate the application map",source:"@site/docs/workflow/tutorial-web-add-layer-to-map.mdx",sourceDirName:"workflow",slug:"/workflow/tutorial-web-add-layer-to-map",permalink:"/docs/workflow/tutorial-web-add-layer-to-map",draft:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/workflow/tutorial-web-add-layer-to-map.mdx",tags:[],version:"current",frontMatter:{title:"Add a Layer to a Map with an Activity",description:"VertiGIS Studio Workflow - Learn how to access and mutate the application map"},sidebar:"workflow",previous:{title:"Implement an Activity that Calculates a Logarithm",permalink:"/docs/workflow/tutorial-web-calculate-logarithm-activity"},next:{title:"Implement an activity that creates a QR Code image using a Third Party Library",permalink:"/docs/workflow/tutorial-web-qr-code-activity"}},s={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup the Activity",id:"setup-the-activity",level:2},{value:"Modify the Activity to Access App Properties",id:"modify-the-activity-to-access-app-properties",level:2},{value:"Use the MapProvider to get the map",id:"use-the-mapprovider-to-get-the-map",level:2},{value:"Add a New Map Layer with the Activity",id:"add-a-new-map-layer-with-the-activity",level:2},{value:"Deploy the Activity",id:"deploy-the-activity",level:2},{value:"Test the Activity",id:"test-the-activity",level:2}],m={toc:d},y="wrapper";function h(e){let{components:t,...i}=e;return(0,a.kt)(y,(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Some activities may need access to resources like the map. The ",(0,a.kt)("inlineCode",{parentName:"p"},"@activate(MapProvider)")," pattern can be used to get the current map during the execution of your activity."),(0,a.kt)("p",null,"This article will walk you through creating a custom activity that adds a new layer to the map."),(0,a.kt)("img",{src:(0,n.Z)("img/workflow-web-add-layer.png")}),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)(o.default,{mdxType:"WebPrereqs"}),(0,a.kt)("h2",{id:"setup-the-activity"},"Setup the Activity"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open up a terminal shell in the SDK folder."),(0,a.kt)("li",{parentName:"ol"},"Run the command ",(0,a.kt)("inlineCode",{parentName:"li"},"npm run generate")," and create a new activity ",(0,a.kt)("inlineCode",{parentName:"li"},"AddLayerToMap"),".")),(0,a.kt)("h2",{id:"modify-the-activity-to-access-app-properties"},"Modify the Activity to Access App Properties"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add imports for ",(0,a.kt)("inlineCode",{parentName:"li"},"MapProvider"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"activate"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"IActivityContext"),"."),(0,a.kt)("li",{parentName:"ol"},"Add the ",(0,a.kt)("inlineCode",{parentName:"li"},"@activate(MapProvider)")," decorator to the ",(0,a.kt)("inlineCode",{parentName:"li"},"execute")," method."),(0,a.kt)("li",{parentName:"ol"},"Modify the ",(0,a.kt)("inlineCode",{parentName:"li"},"execute")," method to mark it as ",(0,a.kt)("inlineCode",{parentName:"li"},"async")," and return a ",(0,a.kt)("inlineCode",{parentName:"li"},"Promise"),"."),(0,a.kt)("li",{parentName:"ol"},"Modify the ",(0,a.kt)("inlineCode",{parentName:"li"},"execute")," method to include the ",(0,a.kt)("inlineCode",{parentName:"li"},"context")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"type")," parameters.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/activities/AddLayerToMap.ts"',title:'"src/activities/AddLayerToMap.ts"'},'import type { IActivityHandler } from "@geocortex/workflow";\n// highlight-start\nimport { MapProvider } from "@geocortex/workflow/activities/arcgis/MapProvider";\nimport { activate } from "@geocortex/workflow/Hooks";\nimport type { IActivityContext } from "@geocortex/workflow/IActivityHandler";\n// highlight-end\n\n/**\n * @supportedApps GWV\n * @category Custom Activities\n * @description An activity which adds a graphics layer to a map.\n */\n// highlight-next-line\n@activate(MapProvider)\nexport class AddLayerToMap implements IActivityHandler {\n    /** Perform the execution logic of the activity. */\n    // highlight-start\n    async execute(\n        inputs: object,\n        context: IActivityContext,\n        type: typeof MapProvider\n    ): Promise<void> {\n        // highlight-end\n        return;\n    }\n}\n')),(0,a.kt)("h2",{id:"use-the-mapprovider-to-get-the-map"},"Use the MapProvider to get the map"),(0,a.kt)("p",null,"Next, we create the ",(0,a.kt)("inlineCode",{parentName:"p"},"MapProvider"),", load it asynchronously, and use it to get the map."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/activities/AddLayerToMap.ts"',title:'"src/activities/AddLayerToMap.ts"'},'import type { IActivityHandler } from "@geocortex/workflow";\nimport { MapProvider } from "@geocortex/workflow/activities/arcgis/MapProvider";\nimport { activate } from "@geocortex/workflow/Hooks";\nimport type { IActivityContext } from "@geocortex/workflow/IActivityHandler";\n\n/**\n * @supportedApps GWV\n * @category Custom Activities\n * @description An activity which adds a graphics layer to a map.\n */\n@activate(MapProvider)\nexport class AddLayerToMap implements IActivityHandler {\n    /** Perform the execution logic of the activity. */\n    async execute(\n        inputs: object,\n        context: IActivityContext,\n        type: typeof MapProvider\n    ): Promise<void> {\n        // highlight-start\n        const mapProvider = type.create();\n        await mapProvider.load();\n\n        const map = mapProvider.map;\n        if (!map) {\n            throw new Error("map is required");\n        }\n        // highlight-end\n\n        return;\n    }\n}\n')),(0,a.kt)("h2",{id:"add-a-new-map-layer-with-the-activity"},"Add a New Map Layer with the Activity"),(0,a.kt)("p",null,"Next, we use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-web-integrating-the-arcgis-api"},"ArcGIS API for JavaScript")," to create a graphics layer and add it to the map."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This activity assumes that it will be running in VertiGIS Studio Web, and so ",(0,a.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-web-integrating-the-arcgis-api#add-arcgis-api-for-javascript-typings"},"it uses the 4.x ArcGIS API for JavaScript"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/activities/AddLayerToMap.ts"',title:'"src/activities/AddLayerToMap.ts"'},'import type { IActivityHandler } from "@geocortex/workflow";\nimport { MapProvider } from "@geocortex/workflow/activities/arcgis/MapProvider";\nimport { activate } from "@geocortex/workflow/Hooks";\nimport type { IActivityContext } from "@geocortex/workflow/IActivityHandler";\n// highlight-start\nimport * as Graphic from "esri/Graphic";\nimport * as GraphicsLayer from "esri/layers/GraphicsLayer";\nimport * as Polyline from "esri/geometry/Polyline";\nimport * as LineSymbol from "esri/symbols/LineSymbol";\n// highlight-end\n\n/**\n * @supportedApps GWV\n * @category Custom Activities\n * @description An activity which adds a graphics layer to a map.\n */\n@activate(MapProvider)\nexport class AddLayerToMap implements IActivityHandler {\n    /** Perform the execution logic of the activity. */\n    async execute(\n        inputs: object,\n        context: IActivityContext,\n        type: typeof MapProvider\n    ): Promise<void> {\n        const mapProvider = type.create();\n        await mapProvider.load();\n\n        const map = mapProvider.map;\n        if (!map) {\n            throw new Error("map is required");\n        }\n\n        // highlight-start\n        var polylineGraphic = new Graphic({\n            geometry: new Polyline({\n                paths: [\n                    [\n                        [-111.3, 52.68],\n                        [-98, 49.5],\n                        [-93.94, 29.89],\n                    ],\n                ],\n            }),\n            symbol: new LineSymbol({\n                color: [226, 119, 40],\n                width: 4,\n            }),\n        });\n\n        var graphicsLayer = new GraphicsLayer({\n            graphics: [polylineGraphic],\n        });\n\n        map.add(graphicsLayer);\n        // highlight-end\n    }\n}\n')),(0,a.kt)("h2",{id:"deploy-the-activity"},"Deploy the Activity"),(0,a.kt)("p",null,"Follow the instructions to ",(0,a.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-web-overview#deployment"},"build and deploy the activity pack"),"."),(0,a.kt)("h2",{id:"test-the-activity"},"Test the Activity"),(0,a.kt)("p",null,"Once your activity pack is hosted and registered, your custom activity should appear in the activity toolbox in VertiGIS Studio Workflow Designer alongside the built-in activities, and can be used in the graphical interface like any other activity."),(0,a.kt)("p",null,"Now you can build a workflow that uses your new custom activity!"),(0,a.kt)("img",{src:(0,n.Z)("img/workflow-web-add-layer.png")}))}h.isMDXComponent=!0}}]);