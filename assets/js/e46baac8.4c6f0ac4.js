"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[6663,4072],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>c});var o=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},u=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(i),c=n,h=m["".concat(s,".").concat(c)]||m[c]||p[c]||a;return i?o.createElement(h,r(r({ref:t},u),{},{components:i})):o.createElement(h,r({ref:t},u))}));function c(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,r=new Array(a);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var d=2;d<a;d++)r[d]=i[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,i)}m.displayName="MDXCreateElement"},5664:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=i(7462),n=(i(7294),i(3905));const a={},r=void 0,l={unversionedId:"mobile/snippets/quickstart-prereqs",id:"mobile/snippets/quickstart-prereqs",isDocsHomePage:!1,title:"quickstart-prereqs",description:"Check out and setup the VertiGIS Studio Mobile SDK Quickstart project.",source:"@site/docs/mobile/snippets/quickstart-prereqs.mdx",sourceDirName:"mobile/snippets",slug:"/mobile/snippets/quickstart-prereqs",permalink:"/docs/mobile/snippets/quickstart-prereqs",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/snippets/quickstart-prereqs.mdx",version:"current",frontMatter:{}},s=[],d={toc:s};function u({components:e,...t}){return(0,n.kt)("wrapper",(0,o.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Check out and setup the ",(0,n.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-overview"},"VertiGIS Studio Mobile SDK Quickstart project"),"."))}u.isMDXComponent=!0},906:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=i(7462),n=(i(7294),i(3905)),a=i(5664);const r={title:"Add a Medium Layout",description:"VertiGIS Studio Mobile - Learn how to add a medium layout definition for tablets."},l=void 0,s={unversionedId:"mobile/tutorial-add-medium-layout",id:"mobile/tutorial-add-medium-layout",isDocsHomePage:!1,title:"Add a Medium Layout",description:"VertiGIS Studio Mobile - Learn how to add a medium layout definition for tablets.",source:"@site/docs/mobile/tutorial-add-medium-layout.mdx",sourceDirName:"mobile",slug:"/mobile/tutorial-add-medium-layout",permalink:"/docs/mobile/tutorial-add-medium-layout",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/tutorial-add-medium-layout.mdx",version:"current",frontMatter:{title:"Add a Medium Layout",description:"VertiGIS Studio Mobile - Learn how to add a medium layout definition for tablets."},sidebar:"mobile",previous:{title:"Customize the Theme",permalink:"/docs/mobile/tutorial-customize-application-theme"},next:{title:"Run a Workflow from App Config",permalink:"/docs/mobile/tutorial-run-workflow-app-config"}},d=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Create the Layout File",id:"create-the-layout-file",children:[]},{value:"Include the Layout File in each project",id:"include-the-layout-file-in-each-project",children:[{value:"Android",id:"android",children:[]},{value:"iOS",id:"ios",children:[]},{value:"UWP",id:"uwp",children:[]}]},{value:"Reference the Medium Layout in the <code>app.json</code>",id:"reference-the-medium-layout-in-the-appjson",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],u={toc:d};function p({components:e,...t}){return(0,n.kt)("wrapper",(0,o.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The VertiGIS Studio Mobile ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-mobile-quickstart"},"Quickstart")," comes with a ",(0,n.kt)("a",{parentName:"p",href:"/docs/mobile/configuration-layout-getting-started#device-form-factors"},"small and large layout"),". This tutorial will walk you through creating a medium form factor layout."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)(a.default,{mdxType:"QuickstartPrereqsSnippet"}),(0,n.kt)("h2",{id:"create-the-layout-file"},"Create the Layout File"),(0,n.kt)("p",null,"Add a new file ",(0,n.kt)("inlineCode",{parentName:"p"},"layout-medium.xml")," to the platform agnostic project."),(0,n.kt)("p",null,"Copy the content from ",(0,n.kt)("inlineCode",{parentName:"p"},"layout-large.xml")," into the ",(0,n.kt)("inlineCode",{parentName:"p"},"layout-medium.xml"),"."),(0,n.kt)("h2",{id:"include-the-layout-file-in-each-project"},"Include the Layout File in each project"),(0,n.kt)("p",null,"Add the ",(0,n.kt)("inlineCode",{parentName:"p"},"layout-medium.xml")," file as an asset to each project."),(0,n.kt)("h3",{id:"android"},"Android"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Add the existing file ",(0,n.kt)("inlineCode",{parentName:"li"},"layout-medium.xml")," ",(0,n.kt)("a",{parentName:"li",href:"https://jeremybytes.blogspot.com/2019/07/linking-files-in-visual-studio.html"},"as an link")," to the ",(0,n.kt)("inlineCode",{parentName:"li"},"Assets")," folder."),(0,n.kt)("li",{parentName:"ol"},"Ensure the build action for the file is ",(0,n.kt)("inlineCode",{parentName:"li"},"AndroidAsset"))),(0,n.kt)("h3",{id:"ios"},"iOS"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Add the existing file ",(0,n.kt)("inlineCode",{parentName:"li"},"layout-medium.xml")," ",(0,n.kt)("a",{parentName:"li",href:"https://jeremybytes.blogspot.com/2019/07/linking-files-in-visual-studio.html"},"as an link")," to the ",(0,n.kt)("inlineCode",{parentName:"li"},"Resources")," folder."),(0,n.kt)("li",{parentName:"ol"},"Ensure the build action for the file is ",(0,n.kt)("inlineCode",{parentName:"li"},"BundleResource"))),(0,n.kt)("h3",{id:"uwp"},"UWP"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Add the existing file ",(0,n.kt)("inlineCode",{parentName:"li"},"layout-medium.xml")," ",(0,n.kt)("a",{parentName:"li",href:"https://jeremybytes.blogspot.com/2019/07/linking-files-in-visual-studio.html"},"as an link")," to the ",(0,n.kt)("inlineCode",{parentName:"li"},"Assets")," folder."),(0,n.kt)("li",{parentName:"ol"},"Ensure the build action for the file is ",(0,n.kt)("inlineCode",{parentName:"li"},"Content"))),(0,n.kt)("h2",{id:"reference-the-medium-layout-in-the-appjson"},"Reference the Medium Layout in the ",(0,n.kt)("inlineCode",{parentName:"h2"},"app.json")),(0,n.kt)("p",null,"Add the new layout as an ",(0,n.kt)("strong",{parentName:"p"},"app item")," to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-edit-layout-app-config"},(0,n.kt)("inlineCode",{parentName:"a"},"app.json"))," that references the medium layout."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "$type": "layout",\n            "id": "tablet-layout",\n            "url": "resource://layout-medium.xml",\n            "tags": [ "medium" ]\n        },\n        ...\n    ]\n}\n')),(0,n.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"An easy way to test your new layout when developing on a Windows Device is to temporarily remove the small and large layouts from your ",(0,n.kt)("inlineCode",{parentName:"p"},"app.json"),"."))),(0,n.kt)("h2",{id:"next-steps"},"Next Steps"),(0,n.kt)("p",null,"You now have a medium layout defined for your application. Learn more about how ",(0,n.kt)("a",{parentName:"p",href:"/docs/mobile/configuration-layout-reference"},"layout")," works and customize this new layout to be optimized for a tablet screen size."))}p.isMDXComponent=!0}}]);