(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[9983],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>u});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,g=p["".concat(c,".").concat(u)]||p[u]||m[u]||r;return n?o.createElement(g,i(i({ref:t},d),{},{components:n})):o.createElement(g,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2842:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>r,contentTitle:()=>i,metadata:()=>l,toc:()=>c,default:()=>d});var o=n(2122),a=(n(7294),n(3905));const r={title:"Advanced Model Binding",description:"VertiGIS Studio Mobile - Learn about advanced model binding with layout"},i=void 0,l={unversionedId:"mobile/configuration-advanced-model-binding",id:"mobile/configuration-advanced-model-binding",isDocsHomePage:!1,title:"Advanced Model Binding",description:"VertiGIS Studio Mobile - Learn about advanced model binding with layout",source:"@site/docs/mobile/configuration-advanced-model-binding.mdx",sourceDirName:"mobile",slug:"/mobile/configuration-advanced-model-binding",permalink:"/docs/mobile/configuration-advanced-model-binding",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/configuration-advanced-model-binding.mdx",version:"current",frontMatter:{title:"Advanced Model Binding",description:"VertiGIS Studio Mobile - Learn about advanced model binding with layout"},sidebar:"mobile",previous:{title:"Layout Reference",permalink:"/docs/mobile/configuration-layout-reference"},next:{title:"Getting Started",permalink:"/docs/mobile/configuration-app-config-getting-started"}},c=[{value:"Nested Model Imports",id:"nested-model-imports",children:[]}],s={toc:c};function d({components:e,...t}){return(0,a.kt)("wrapper",(0,o.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The scale bar component displays information about a particular map. More specifically, it is ",(0,a.kt)("strong",{parentName:"p"},"dependent")," on the data of a map model to display its values."),(0,a.kt)("p",null,"Components express this data dependency through interactions ",(0,a.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-component-service-interactions#interacting-with-the-mapview"},"through injecting the ",(0,a.kt)("inlineCode",{parentName:"a"},"MapView")),".\nThe specific map view that is injected is resolved through a model binding based on the layout hierarchy."),(0,a.kt)("h2",{id:"nested-model-imports"},"Nested Model Imports"),(0,a.kt)("p",null,"In previous layout examples, layouts were shown where components related to a map, such as zoom buttons, were nested within a map. It was assumed that the component would bind to the map it was placed in, but why?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'    <map config="map-1" slot="main">\n      <stack margin="0.5" slot="bottom-right" halign="end">\n        <zoom margin="0.8"/>\n        <geolocate margin="0.5" config="geolocate" /  >\n      </stack>\n    </map>\n')),(0,a.kt)("p",null,"Certain components, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"<zoom/>")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"<geolocate/>"),", require a ",(0,a.kt)("inlineCode",{parentName:"p"},"Map Model")," to function. To locate a ",(0,a.kt)("inlineCode",{parentName:"p"},"Map Model"),", the layout tree hierarchy will be searched upwards, starting at the requesting component. When a element in the layout is found that provides the required model, (in this case, the ",(0,a.kt)("inlineCode",{parentName:"p"},"<map/>")," component provides a Map Model), the requesting component will import the model. If the correct model is not found on an upwards search, a breadth first search will be performed from the root of the layout tree."),(0,a.kt)("p",null,"Take this more complicated layout for example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../../../../ViewerSpec/layout/layout-mobile.xsd\n      https://geocortex.com/layout/v1 ../../../layout-custom.xsd">\n  <gxm:taskbar id="taskbar" orientation="vertical">\n\n    \x3c!-- Taskbar main content --\x3e\n    <map config="map1" slot="main">\n      <gxm:geometry-toolbar slot="top-center-visible" config="geometry" margin="0.8" style="map-widget" active="false" />\n      <search-new-extent config="search" margin="0.8" slot="top-center-visible" active="false" />\n      <stack margin="0.8" slot="top-right" halign="end">\n        <iwtm config="iwtm">\n          <user slot="bottom"/>\n        </iwtm>\n      </stack>\n      <stack margin="0.5" slot="bottom-right" halign="end">\n        <zoom margin="0.5"/>\n        <button config="measure-action" icon="measure" style="map-widget" margin="0.5"/>\n        <geolocate margin="0.5" config="geolocate" />\n      </stack>\n      <gxm:version slot="bottom-left" margin="0.8"/>\n    </map>\n\n    \x3c!-- Taskbar / search --\x3e\n    <panel>\n      <stack >\n        <search config="search"/>\n        <results-list config="results" active="false" />\n      </stack>\n      <feature-details config="feature-details"/>\n      <gxm:update-feature/>\n      <gxm:add-related-feature />\n    </panel>\n\n    \x3c!-- Taskbar / layers --\x3e\n    <panel>\n      <layer-list />\n    </panel>\n\n    \x3c!-- Taskbar / add feature --\x3e\n    <panel>\n      <gxm:add-feature-select-layer config="edit"/>\n      <gxm:add-feature/>\n    </panel>\n</layout>\n')),(0,a.kt)("p",null,"This layout has components such as ",(0,a.kt)("inlineCode",{parentName:"p"},"<search/>")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"<gxm:add-feature/>")," which require the context of a specific map to function. However, these components are ",(0,a.kt)("strong",{parentName:"p"},"not")," nested within the ",(0,a.kt)("inlineCode",{parentName:"p"},"<map/>")," component in the app. Therefore, they will start a breadth first search to discover a map model import it."))}d.isMDXComponent=!0}}]);