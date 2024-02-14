"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[4436],{4748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=n(7624),a=n(2172);const i={title:"Advanced Model Binding",description:"VertiGIS Studio Web - Learn about advanced model binding with layout"},s=void 0,l={id:"web/configuration-advanced-model-binding",title:"Advanced Model Binding",description:"VertiGIS Studio Web - Learn about advanced model binding with layout",source:"@site/docs/web/configuration-advanced-model-binding.mdx",sourceDirName:"web",slug:"/web/configuration-advanced-model-binding",permalink:"/docs/web/configuration-advanced-model-binding",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/configuration-advanced-model-binding.mdx",tags:[],version:"current",frontMatter:{title:"Advanced Model Binding",description:"VertiGIS Studio Web - Learn about advanced model binding with layout"},sidebar:"web",previous:{title:"Layout Reference",permalink:"/docs/web/configuration-layout-reference"},next:{title:"Getting Started",permalink:"/docs/web/configuration-app-config-getting-started"}},r={},d=[{value:"Nested Model Imports",id:"nested-model-imports",level:3},{value:"The <code>models</code> Attribute",id:"the-models-attribute",level:3}];function c(e){const t={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Components often observe and modify the state of other components.\nConsider the following example:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-xml",children:'<map>\n    <scalebar slot="bottom-left"/>\n</map>\n'})}),"\n",(0,o.jsxs)(t.p,{children:["The scale bar component displays information about a particular map. More specifically, it is ",(0,o.jsx)(t.strong,{children:"dependent"})," on the data of a map model to display its values."]}),"\n",(0,o.jsx)(t.p,{children:'Components express this data dependency in the form of models that are marked as "imported" or "exported". If we know that the scale bar "imports" a particular type of model, and that the map "exports" the same type of model, we can resolve those dependencies simply by plugging exported models into the components that import them.'}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:'@exportModel\nexport class MapModel implements ComponentModel {\n    // ... map stuff ...\n}\n\nexport class ScaleBarModel implements ComponentModel {\n    @importModel("map-extension")\n    map: MapExtension | undefined;\n\n    // ... scale bar stuff ...\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"When the system places the scale bar into the layout, it will attempt to satisfy any model imports declared by the component. By default, this happens by walking up the tree from the location of the component being slotted and simply finding the first ancestor that exports a model with the matching type, like in the basic example above."}),"\n",(0,o.jsxs)(t.p,{children:["However, in the following example with two scale bars, how does each scale bar know which map model it corresponds to? Both are placed outside of a ",(0,o.jsx)(t.code,{children:"<map>"})," component, and there are two possible map models to bind to."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8" ?>\n<layout xmlns="https://geocortex.com/layout/v1">\n    <stack>\n      <split grow="1">\n        <map id="map-a" grow="1" margin="3"/>\n        <map id="map-b" grow="1" margin="3"/>\n      </split>\n      <split grow="1" valign="center" >\n          <scalebar id="a" grow="1" margin="3"/>\n          <scalebar id="b" grow="1" margin="3"/>\n      </split>\n    </stack>\n</layout>\n'})}),"\n",(0,o.jsxs)(t.p,{children:["We can explicitly bind each scale bar to the appropriate map with the ",(0,o.jsx)(t.code,{children:"models"})," attribute. The ",(0,o.jsx)(t.code,{children:"models"})," attribute will tell a component to look for an exported model on the component matched by the expression. In this example, the ",(0,o.jsx)(t.code,{children:"models"})," attributes are looking for components with the ",(0,o.jsx)(t.code,{children:"id"})," ",(0,o.jsx)(t.code,{children:"map-a"})," and ",(0,o.jsx)(t.code,{children:"map-b"})," respectively."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8" ?>\n<layout xmlns="https://geocortex.com/layout/v1">\n    <split>\n        <panel width="23" active="true">\n            <stack>\n                <split>\n                    <text text="Map A Scale Bar"></text>\n                    <scalebar id="a" models="#map-a"/>\n                </split>\n                <split>\n                    <text text="Map B Scale Bar"></text>\n                    <scalebar id="b" models="#map-b"/>\n                </split>\n            </stack>\n        </panel>\n        <map id="map-a"/>\n        <map id="map-b"/>\n    </split>\n</layout>\n'})}),"\n",(0,o.jsx)(t.h3,{id:"nested-model-imports",children:"Nested Model Imports"}),"\n",(0,o.jsx)(t.p,{children:"In previous layout examples, layouts were shown where components related to a map, such as zoom buttons, were nested within a map. It was assumed that the component would bind to the map it was placed in, but why?"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-xml",children:'    <map config="map1" slot="main">\n      <stack margin="0.5" slot="bottom-right" halign="end">\n        <zoom margin="0.8"/>\n        <geolocate id="geolocator" margin="0.5" config="geolocate" />\n      </stack>\n    </map>\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Certain components, such as ",(0,o.jsx)(t.code,{children:"<zoom/>"})," or ",(0,o.jsx)(t.code,{children:"<geolocate/>"}),", require a ",(0,o.jsx)(t.code,{children:"Map Model"})," to function. To locate a ",(0,o.jsx)(t.code,{children:"Map Model"}),", the layout tree hierarchy will be searched upwards, starting at the requesting component. When a element in the layout is found that provides the required model, (in this case, the ",(0,o.jsx)(t.code,{children:"<map/>"})," component provides a Map Model), the requesting component will import the model. If the correct model is not found on an upwards search, a breadth first search will be performed from the root of the layout tree."]}),"\n",(0,o.jsx)(t.p,{children:"Take this more complicated layout for example."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8" ?>\n<layout xmlns="https://geocortex.com/layout/v1">\n    <split resizable="true" width="26">\n        <map id="map-1" config="map-1" slot="main">\n            <iwtm config="iwtm" slot="top-right"/>\n            <stack margin="0.5" slot="bottom-right" halign="end">\n                <zoom margin="0.5"/>\n                <button config="measure-action" icon="measure" style="map-widget" margin="0.5"/>\n                <geolocate margin="0.5" config="geolocate" />\n            </stack>\n        </map>\n\n        <panel>\n            <stack>\n                <search config="search"/>\n                <results-list config="results" active="false" />\n            </stack>\n            <feature-details config="feature-details"/>\n        </panel>\n    </split>\n</layout>\n'})}),"\n",(0,o.jsxs)(t.p,{children:["This layout has a ",(0,o.jsx)(t.code,{children:"<search>"})," component which requires the context of a specific map to function. However, this component is ",(0,o.jsx)(t.strong,{children:"not"})," nested within the ",(0,o.jsx)(t.code,{children:"<map/>"})," component in the app. Therefore, it will start a breadth first search from the root of the layout to discover a map model and import it."]}),"\n",(0,o.jsxs)(t.h3,{id:"the-models-attribute",children:["The ",(0,o.jsx)(t.code,{children:"models"})," Attribute"]}),"\n",(0,o.jsx)(t.p,{children:"Sometimes, you can have multiple components that need to bind to the same model."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-xml",children:'<split>\n    <panel id="left-panel">\n        <scalebar active="true" models="#map"/>\n        <results-list models="#map"/>\n        <legend models="#map"/>\n    </panel>\n    <map id="map" />\n</split>\n'})}),"\n",(0,o.jsx)(t.p,{children:"To simplify this binding, we can take advantage of the default behavior of searching up the layout tree for the appropriate model and bind the map to the parent panel of the components which need to reference a map model."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8" ?>\n<layout xmlns="https://geocortex.com/layout/v1">\n    <split>\n        // highlight-next-line\n        <panel id="left-panel" models="#map">\n            <scalebar active="true"/>\n            <results-list />\n            <legend />\n        </panel>\n        <map id="map" />\n    </split>\n</layout>\n'})})]})}function p(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},2172:(e,t,n)=>{n.d(t,{I:()=>l,M:()=>s});var o=n(1504);const a={},i=o.createContext(a);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);