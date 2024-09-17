"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[6900],{4972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var i=n(7624),s=n(2172),a=n(964),o=n(1268),l=n(5388);const r={title:"Layout Reference",description:"VertiGIS Studio Mobile - Layout Reference"},c=void 0,d={id:"mobile/configuration-layout-reference",title:"Layout Reference",description:"VertiGIS Studio Mobile - Layout Reference",source:"@site/docs/mobile/configuration-layout-reference.mdx",sourceDirName:"mobile",slug:"/mobile/configuration-layout-reference",permalink:"/docs/mobile/configuration-layout-reference",draft:!1,unlisted:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/configuration-layout-reference.mdx",tags:[],version:"current",frontMatter:{title:"Layout Reference",description:"VertiGIS Studio Mobile - Layout Reference"},sidebar:"mobile",previous:{title:"Getting Started",permalink:"/docs/mobile/configuration-layout-getting-started"},next:{title:"Advanced Model Binding",permalink:"/docs/mobile/configuration-advanced-model-binding"}},h={},u=[{value:"Autocomplete Properties",id:"autocomplete-properties",level:2},{value:"Basic Attributes",id:"basic-attributes",level:2},{value:"<code>id</code>",id:"id",level:3},{value:"<code>config</code>",id:"config",level:3},{value:"<code>active</code>",id:"active",level:3},{value:"Core Layout Components",id:"core-layout-components",level:2},{value:"Stacks and Splits",id:"stacks-and-splits",level:3},{value:"Panels",id:"panels",level:3},{value:"Activation",id:"activation",level:4},{value:"Deactivation",id:"deactivation",level:4},{value:"Taskbar",id:"taskbar",level:3},{value:"Presentation Attributes",id:"presentation-attributes",level:2},{value:"<code>margin</code>",id:"margin",level:3},{value:"<code>padding</code>",id:"padding",level:3},{value:"<code>width</code>",id:"width",level:3},{value:"<code>height</code>",id:"height",level:3},{value:"<code>grow</code>",id:"grow",level:3},{value:"<code>halign</code> (Horizontal Align)",id:"halign-horizontal-align",level:3},{value:"<code>valign</code> (Vertical Align)",id:"valign-vertical-align",level:3},{value:"Alignments Effect on cross-axis stretching",id:"alignments-effect-on-cross-axis-stretching",level:3}];function p(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"autocomplete-properties",children:"Autocomplete Properties"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"layout-*.xml"})," files that come with the ",(0,i.jsx)(t.a,{href:"https://github.com/vertigis/vertigis-mobile-quickstart",children:"Quickstart"})," reference an xml schema. This XML schema allows Visual Studio to autocomplete property names and provide linting for types. Two attributes on the layout, ",(0,i.jsx)(t.code,{children:"xmlns:xsi"}),", and ",(0,i.jsx)(t.code,{children:"xsi:schemaLocation"})," allow this to happen. If you move the ",(0,i.jsx)(t.code,{children:"layout-*.xml"})," files, you will need to adjust the relative reference to the layout schema for autocomplete to still function."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"ViewerFramework"})," folder containing the schema will not be created until an initial build has been run."]})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd">\n    ...\n</layout>\n'})}),"\n",(0,i.jsx)(t.h2,{id:"basic-attributes",children:"Basic Attributes"}),"\n",(0,i.jsxs)(t.p,{children:["This is a reference for the attributes available to all components in an app layout. All components support these attributes, as well as any custom attributes the component defines. Some of these attributes are accessible through the ",(0,i.jsx)(t.a,{href:"https://apps.vertigisstudio.com/mobile/designer/",children:"VertiGIS Studio Mobile Designer"}),", and the rest can be configured through layout."]}),"\n",(0,i.jsx)(t.p,{children:"All attributes are specified as string values, and parsed into their respective types by VertiGIS Studio Mobile"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'\x3c!-- string attribute --\x3e\n<stack id="some-id"/>\n\x3c!-- number attribute --\x3e\n<stack margin="3"/>\n\x3c!-- boolean attribute --\x3e\n<stack active="false"/>\n'})}),"\n",(0,i.jsx)(t.h3,{id:"id",children:(0,i.jsx)(t.code,{children:"id"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Type"}),": ",(0,i.jsx)(t.code,{children:"string"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"Description"}),": Used to uniquely identify the component in the layout."]}),"\n",(0,i.jsx)(t.h3,{id:"config",children:(0,i.jsx)(t.code,{children:"config"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Type"}),": ",(0,i.jsx)(t.code,{children:"string"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"Description"}),": Used to bind a component to an item in the app config. See ",(0,i.jsx)(t.a,{href:"/docs/mobile/configuration-app-config-getting-started#linking-layout-to-app-config",children:"linking layout app config"})," for more details."]}),"\n",(0,i.jsx)(t.h3,{id:"active",children:(0,i.jsx)(t.code,{children:"active"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Type"}),": ",(0,i.jsx)(t.code,{children:"boolean"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"Description"}),": Used to mark a component as initially active and visible."]}),"\n",(0,i.jsx)(t.h2,{id:"core-layout-components",children:"Core Layout Components"}),"\n",(0,i.jsx)(t.p,{children:"The following is a reference for the main components used for visual organization in the layout."}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["All of these components are available for use in the ",(0,i.jsx)(t.a,{href:"https://apps.vertigisstudio.com/mobile/designer/",children:"VertiGIS Studio Mobile\nDesigner"}),"."]})}),"\n",(0,i.jsx)(t.h3,{id:"stacks-and-splits",children:"Stacks and Splits"}),"\n",(0,i.jsx)(t.p,{children:"Stacks and splits are used to partition the viewer into rectangular sectors, each filled with whichever components you desire."}),"\n",(0,i.jsx)(t.p,{children:"The best way to think of stacks is that every item within them is being ordered top to bottom:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'<stack>\n    <text text="item1"/>\n    <text text="item2"/>\n    <text text="item3"/>\n</stack>\n'})}),"\n",(0,i.jsx)("img",{className:"stackSplitImage",src:(0,a.c)("img/stack-split-1.png")}),"\n",(0,i.jsx)(t.p,{children:"The best way to think of splits is that every item within them is being ordered left to right:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'<split>\n    <text text="item1"/>\n    <text text="item2"/>\n    <text text="item3"/>\n</split>\n'})}),"\n",(0,i.jsx)("img",{className:"stackSplitImage",src:(0,a.c)("img/stack-split-2.png")}),"\n",(0,i.jsx)(t.p,{children:"When creating complex layouts with embedded stacks and splits, it's good to picture building it from the inside out:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'<stack>\n    <split>\n        <text text="item1"/>\n        <stack>\n            <text text="item2"/>\n            <text text="item3"/>\n        </stack>\n    </split>\n    <split>\n        <text text="item4"/>\n        <text text="item5"/>\n        <text text="item6"/>\n    </split>\n</stack>\n'})}),"\n",(0,i.jsx)(t.p,{children:"We start by building the first inner-most stack:"}),"\n",(0,i.jsx)("img",{className:"stackSplitImage",src:(0,a.c)("img/stack-split-4.png")}),"\n",(0,i.jsx)(t.p,{children:"Then slot that into the split one level up:"}),"\n",(0,i.jsx)("img",{className:"stackSplitImage",src:(0,a.c)("img/stack-split-5.png")}),"\n",(0,i.jsx)(t.p,{children:"We then build the next split:"}),"\n",(0,i.jsx)("img",{className:"stackSplitImage",src:(0,a.c)("img/stack-split-6.png")}),"\n",(0,i.jsx)(t.p,{children:"And finally slot those two splits into the outer-most stack:"}),"\n",(0,i.jsx)("img",{className:"stackSplitImage",src:(0,a.c)("img/stack-split-3.png")}),"\n",(0,i.jsx)(t.h3,{id:"panels",children:"Panels"}),"\n",(0,i.jsx)(t.p,{children:"Panels are a container component that enable hierarchical navigation between different components."}),"\n",(0,i.jsxs)(o.c,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"Stack",value:"stack"},{label:"Feature Details",value:"feature-details"}],children:[(0,i.jsx)(l.c,{value:"layout",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'<panel>\n    <stack>\n        <search config="search"/>\n        <results-list config="results" active="false" />\n    </stack>\n    <feature-details config="feature-details"/>\n</panel>\n'})})}),(0,i.jsx)(l.c,{value:"stack",children:(0,i.jsx)("img",{src:(0,a.c)("img/mobile-panel-one.png")})}),(0,i.jsx)(l.c,{value:"feature-details",children:(0,i.jsx)("img",{src:(0,a.c)("img/mobile-panel-two.png")})})]}),"\n",(0,i.jsxs)(t.p,{children:["This ",(0,i.jsx)(t.code,{children:"search-panel"})," has two root components:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["A stack containing a ",(0,i.jsx)(t.code,{children:"<search>"})," and a ",(0,i.jsx)(t.code,{children:"<results-list>"})]}),"\n",(0,i.jsxs)(t.li,{children:["A ",(0,i.jsx)(t.code,{children:"<feature-details>"})]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["When you first open the panel, the first component in the panel that is not explicitly set to ",(0,i.jsx)(t.code,{children:'active="false"'})," is activated. In this example, it's the ",(0,i.jsx)(t.code,{children:"<stack>"})," component containing a ",(0,i.jsx)(t.code,{children:"<search>"})," and ",(0,i.jsx)(t.code,{children:"<results-list>"}),".\nWhen a feature in the results list is opened, the ",(0,i.jsx)(t.code,{children:"<feature-details>"})," component will be activated. At this point, the panel takes over the activation of the component. It will display the new component in the place of the existing component, and provide a back button to navigate to the previous component. The activation and deactivation algorithms for a panel rely on the concept of a stacking order of components laid on top of each other, with the first component being the bottommost, and the last being the topmost. In the example above, the ",(0,i.jsx)(t.code,{children:"<stack>"})," containing ",(0,i.jsx)(t.code,{children:"<search>"})," is the lowest, while the ",(0,i.jsx)(t.code,{children:"<feature-details>"})," is the topmost."]}),"\n",(0,i.jsx)(t.h4,{id:"activation",children:"Activation"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["If the target component exists in the panel, then deactivate components above it until the target component is active","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Else, the target component must be deactivated, so activate it and place it above the existing component"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"deactivation",children:"Deactivation"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["If the component is the topmost element (it is active), then deactivate it.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Else, the component is already inactive"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["The default ",(0,i.jsx)(t.code,{children:"layout-large.xml"})," in the VertiGIS Studio Mobile ",(0,i.jsx)(t.a,{href:"https://github.com/vertigis/vertigis-mobile-quickstart",children:"Quickstart"})," has examples of multiple panels that live in the taskbar."]})}),"\n",(0,i.jsx)(t.h3,{id:"taskbar",children:"Taskbar"}),"\n",(0,i.jsx)(t.p,{children:"The taskbar is a major organizational element in VertiGIS Studio Mobile Apps. It provides an expandable menu designed for mobile form factors that hosts panels with dynamic content."}),"\n",(0,i.jsxs)(t.p,{children:["Every taskbar has a ",(0,i.jsx)(t.code,{children:"main"})," slot, which hosts the primary content, usually a map."]}),"\n",(0,i.jsxs)(o.c,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"User Interface",value:"ui"}],children:[(0,i.jsx)(l.c,{value:"layout",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd">\n  <gxm:taskbar id="taskbar" orientation="vertical">\n\n    \x3c!-- Taskbar main content --\x3e\n    <map slot="main"/>\n\n  </gxm:taskbar>\n</layout>\n\n'})})}),(0,i.jsx)(l.c,{value:"ui",children:(0,i.jsx)("img",{src:(0,a.c)("img/mobile-taskbar-simple.png")})})]}),"\n",(0,i.jsx)(t.p,{children:"Items that live in the sidebar can be defined within the taskbar component, and typically consist of Panels containing other components, like a results list, or a workflow container."}),"\n",(0,i.jsxs)(o.c,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"User Interface",value:"ui"}],children:[(0,i.jsx)(l.c,{value:"layout",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd">\n  <gxm:taskbar id="taskbar" orientation="vertical">\n\n    \x3c!-- Taskbar main content --\x3e\n    <map config="map1" slot="main"/>\n\n    \x3c!-- Taskbar / search --\x3e\n    <panel>\n      <stack id="search">\n        <search config="search"/>\n        <results-list config="results" active="false" />\n      </stack>\n      <feature-details config="feature-details"/>\n    </panel>\n\n    \x3c!-- Taskbar / layers --\x3e\n    <panel id="layers">\n      <layer-list />\n    </panel>\n\n    \x3c!--Taskbar / workflow--\x3e\n    <panel>\n      <workflow config="workflow" icon="workflow"/>\n    </panel>\n  </gxm:taskbar>\n</layout>\n'})})}),(0,i.jsx)(l.c,{value:"ui",children:(0,i.jsx)("img",{src:(0,a.c)("img/mobile-taskbar-complex.png")})})]}),"\n",(0,i.jsx)(t.h2,{id:"presentation-attributes",children:"Presentation Attributes"}),"\n",(0,i.jsxs)(t.p,{children:["Components support a number of presentation attributes to adjust their positioning and styling in the application after slotting. Some of these presentation attributes are accessible through the ",(0,i.jsx)(t.a,{href:"https://apps.vertigisstudio.com/mobile/designer/",children:"VertiGIS Studio Mobile Designer"}),", and the rest must be configured through layout."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"All dimensional units are expressed in 'em's, where 1 em is equal to the current font size."})}),"\n",(0,i.jsx)(t.h3,{id:"margin",children:(0,i.jsx)(t.code,{children:"margin"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Type"}),": ",(0,i.jsx)(t.code,{children:"number"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"Description"}),": Sets the size of the white space outside of the component.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"Example"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'<map margin="1.5"/> \x3c!-- Sets the margin on a map to be equal to 1.5em. This would be 22.5 pts high if the current font size is 15 --\x3e\n'})}),"\n",(0,i.jsx)(t.h3,{id:"padding",children:(0,i.jsx)(t.code,{children:"padding"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Type"}),": ",(0,i.jsx)(t.code,{children:"number"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"Description"}),": Sets the size of the white space between a component and its content.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"Applies to"}),": This attribute will only apply to components with children.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"Example"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'<stack padding="0.5"/> \x3c!-- Sets the padding on a stack to be equal to 0.5em. This would be 7.5 pts high if the current font size is 15 --\x3e\n'})}),"\n",(0,i.jsx)(t.h3,{id:"width",children:(0,i.jsx)(t.code,{children:"width"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Type"}),": ",(0,i.jsx)(t.code,{children:"number"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"Default value"}),": If a width is not set, then the width shall be the natural width of the component or a dynamic size based on the ",(0,i.jsx)(t.code,{children:"grow"})," and alignment attributes.\n",(0,i.jsx)(t.strong,{children:"Description"}),": Sets the width of a component."]}),"\n",(0,i.jsx)(t.h3,{id:"height",children:(0,i.jsx)(t.code,{children:"height"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Type"}),": ",(0,i.jsx)(t.code,{children:"number"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"Description"}),": Sets the height of a component.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"Example"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'\x3c!-- Sets the width of a map to 30em, and the height to 20em. --\x3e\n<map width="30" height="20"/>\n'})}),"\n",(0,i.jsx)(t.h3,{id:"grow",children:(0,i.jsx)(t.code,{children:"grow"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Type"}),": ",(0,i.jsx)(t.code,{children:"number"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"Description"}),": Sets whether or not a component's width or height will grow over its parents primary axis. Components with a grow of 0 will fill to their natural or requested height. Components with a specified grow will fill up a percentage of the remaining space equal to their grow value divided by the total grow of all sibling components (including the component in question).",(0,i.jsx)(t.br,{}),"\n",'The default value for a component varies by component. For most components, if no grow value is specified, they will default to a grow value of "0". The following components however will have a default grow value of "1":']}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Map"}),"\n",(0,i.jsx)(t.li,{children:"Stack"}),"\n",(0,i.jsx)(t.li,{children:"Split"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Applies to"}),": All components may specify this value, but it will only take effect if the component is a child of a split or a stack. For stacks, grow indicates how the child grows along the vertical axis. For splits, grow indicates how the child grows along the horizontal axis.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"Example"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'<stack>\n    \x3c!-- Heading will take up whatever vertical space it requires, and will occupy its natural width. --\x3e\n    <text content="Heading"/>\n    \x3c!-- The first map will occupy 1/3 of the remaining vertical space, and will occupy the full width available. --\x3e\n    <map grow="1"/>\n    \x3c!-- The first map will occupy 2/3 of the remaining vertical space, and will occupy the full width available. --\x3e\n    <map grow="2"/>\n</stack>\n'})}),"\n",(0,i.jsxs)(t.h3,{id:"halign-horizontal-align",children:[(0,i.jsx)(t.code,{children:"halign"})," (Horizontal Align)"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Type"}),": ",(0,i.jsx)(t.code,{children:'"start" | "center" | "end"'}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"Description"}),": Describes how the content of a component is aligned ",(0,i.jsx)(t.strong,{children:"horizontally"}),". For stacks and splits, the content is the child components. For a component like text, the content is the text itself."]}),"\n",(0,i.jsxs)(t.h3,{id:"valign-vertical-align",children:[(0,i.jsx)(t.code,{children:"valign"})," (Vertical Align)"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Type"}),": ",(0,i.jsx)(t.code,{children:'"start" | "center" | "end"'}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"Description"}),": Describes how the content of a component is aligned ",(0,i.jsx)(t.strong,{children:"vertically"}),". For stacks and splits, the content is the child components. For a component like text, the content is the text itself."]}),"\n",(0,i.jsx)(t.h3,{id:"alignments-effect-on-cross-axis-stretching",children:"Alignments Effect on cross-axis stretching"}),"\n",(0,i.jsxs)(t.p,{children:["All components will stretch across the cross-axis if the corresponding alignment attribute (",(0,i.jsx)(t.code,{children:"halign"})," for stacks, ",(0,i.jsx)(t.code,{children:"valign"})," for splits) is not set on the parent of that component. But if a cross-axis alignment is set, then they will no longer stretch across the cross axis (otherwise the effect of alignment would not be observed).",(0,i.jsx)(t.br,{}),"\n","Some components will stretch across the cross-axis even if the cross-axis alignment is set on the parent: map, stack, split."]})]})}function m(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},5388:(e,t,n)=>{n.d(t,{c:()=>o});n(1504);var i=n(4064);const s={tabItem:"tabItem_Ymn6"};var a=n(7624);function o({children:e,hidden:t,className:n}){return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.c)(s.tabItem,n),hidden:t,children:e})}},1268:(e,t,n)=>{n.d(t,{c:()=>w});var i=n(1504),s=n(4064),a=n(3943),o=n(5592),l=n(5288),r=n(632),c=n(7128),d=n(1148);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return h(e).map((({props:{value:e,label:t,attributes:n,default:i}})=>({value:e,label:t,attributes:n,default:i})))}(n);return function(e){const t=(0,c.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p({value:e,tabValues:t}){return t.some((t=>t.value===e))}function m({queryString:e=!1,groupId:t}){const n=(0,o.Uz)(),s=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,r._M)(s),(0,i.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=u(e),[o,r]=(0,i.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,h]=m({queryString:n,groupId:s}),[x,g]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,s]=(0,d.IN)(t);return[n,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:s}),f=(()=>{const e=c??x;return p({value:e,tabValues:a})?e:null})();(0,l.c)((()=>{f&&r(f)}),[f]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);r(e),h(e),g(e)}),[h,g,a]),tabValues:a}}var g=n(3664);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(7624);function j({className:e,block:t,selectedValue:n,selectValue:i,tabValues:o}){const l=[],{blockElementScrollPositionUntilNextRender:r}=(0,a.MV)(),c=e=>{const t=e.currentTarget,s=l.indexOf(t),a=o[s].value;a!==n&&(r(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.c)("tabs",{"tabs--block":t},e),children:o.map((({value:e,label:t,attributes:i})=>(0,b.jsx)("li",{role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,ref:e=>l.push(e),onKeyDown:d,onClick:c,...i,className:(0,s.c)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":n===e}),children:t??e},e)))})}function v({lazy:e,children:t,selectedValue:n}){const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=s.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function y(e){const t=x(e);return(0,b.jsxs)("div",{className:(0,s.c)("tabs-container",f.tabList),children:[(0,b.jsx)(j,{...e,...t}),(0,b.jsx)(v,{...e,...t})]})}function w(e){const t=(0,g.c)();return(0,b.jsx)(y,{...e,children:h(e.children)},String(t))}},2172:(e,t,n)=>{n.d(t,{I:()=>l,M:()=>o});var i=n(1504);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);