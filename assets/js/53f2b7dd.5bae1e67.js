"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[7448,3381,2290],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(7462),a=n(7294),o=n(6010),i=n(2466),s=n(6550),l=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,u]=g({queryString:n,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),b=(()=>{const e=l??p;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var b=n(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==s&&(p(t),l(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function k(e){const t=(0,b.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},5858:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(9960),a=n(7294),o=n(6010);const i={root:"root_Uwqo"};function s(e){let{title:t,description:n,link:s}=e;return a.createElement("div",{className:(0,o.Z)("card-demo",i.root)},a.createElement("div",{className:"card"},a.createElement("div",{className:"card__header"},a.createElement("h3",null,t)),a.createElement("div",{className:"card__body"},a.createElement("p",null,n)),a.createElement("div",{className:"card__footer"},a.createElement(r.Z,{className:"button button--secondary button--block",to:s},"Get Started"))))}},7467:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294);const a={root:"root_vxd5"};function o(e){let{children:t}=e;return r.createElement("div",{className:a.root},t)}},379:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>b,frontMatter:()=>u,metadata:()=>p,toc:()=>m});var r=n(7462),a=(n(7294),n(3905)),o=n(4996),i=(n(4866),n(5162),n(5858)),s=n(7467),l=(n(9190),n(7508));const u={title:"Internationalization",description:"VertiGIS Studio Web - Learn how to translate a components user facing text"},c=void 0,p={unversionedId:"web/sdk-components-internationalization",id:"web/sdk-components-internationalization",title:"Internationalization",description:"VertiGIS Studio Web - Learn how to translate a components user facing text",source:"@site/docs/web/sdk-components-internationalization.mdx",sourceDirName:"web",slug:"/web/sdk-components-internationalization",permalink:"/docs/web/sdk-components-internationalization",draft:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/sdk-components-internationalization.mdx",tags:[],version:"current",frontMatter:{title:"Internationalization",description:"VertiGIS Studio Web - Learn how to translate a components user facing text"},sidebar:"web",previous:{title:"Component Styling",permalink:"/docs/web/sdk-components-styling"},next:{title:"Overview",permalink:"/docs/web/sdk-services-overview"}},d={},m=[{value:"Providing Language Strings for a Component",id:"providing-language-strings-for-a-component",level:2},{value:"Next Steps",id:"next-steps",level:2}],g={toc:m},f="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.default,{mdxType:"TranslationCallout"}),(0,a.kt)("h2",{id:"providing-language-strings-for-a-component"},"Providing Language Strings for a Component"),(0,a.kt)("p",null,"When developing ",(0,a.kt)("a",{parentName:"p",href:"/docs/web/sdk-components-create"},"custom components"),", user facing language strings are sometimes introduced. If these strings need to be translated, you can ",(0,a.kt)("a",{parentName:"p",href:"/docs/web/sdk-internationalization"},"register new language resource files")," with the appropriate translations."),(0,a.kt)("p",null,"Language strings can be referenced by key in a custom component and either used with a VertiGIS Studio Web layout component, which will automatically translate them, or manually translated with the ",(0,a.kt)("inlineCode",{parentName:"p"},"translate")," function on the ",(0,a.kt)("a",{parentName:"p",href:"/docs/web/sdk-components-ui-context"},"UIContext"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useContext } from "react";\nimport { LayoutElement } from "@vertigis/web/components";\n// highlight-start\nimport { UIContext } from "@vertigis/web/ui";\nimport Typography from "@vertigis/web/ui/Typography";\n// highlight-end\n\nexport default function ComponentWithLanguageStrings(props) {\n    // highlight-next-line\n    const { translate } = useContext(UIContext);\n\n    return (\n        <LayoutElement\n            {...props}\n            style={{ backgroundColor: "white" }}\n        >\n            // highlight-start // This component automatically\n            translates the language string.\n            <Typography\n                variant="h1"\n                text="language-some-component-string"\n            />\n            // Manually translate the language key.\n            <h1>{translate("language-some-component-string")}</h1>\n            // highlight-end\n        </LayoutElement>\n    );\n}\n')),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)(s.Z,{mdxType:"UseCaseContainer"},(0,a.kt)(i.Z,{title:"Learn how to Define Language Strings",description:"Learn how to define and register language resources",link:(0,o.Z)("docs/web/sdk-internationalization"),mdxType:"UseCaseCard"}),(0,a.kt)(i.Z,{title:"Learn how to use Language Strings in App Config",description:"Learn how to use built-in or custom language strings in the app config",link:(0,o.Z)("docs/web/configuration-app-config-reference#internationalization"),mdxType:"UseCaseCard"})))}b.isMDXComponent=!0},9190:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={},i=void 0,s={unversionedId:"web/snippets/prereqs-custom-code",id:"web/snippets/prereqs-custom-code",title:"prereqs-custom-code",description:"-   Download and setup the VertiGIS Studio Web SDK.",source:"@site/docs/web/snippets/prereqs-custom-code.mdx",sourceDirName:"web/snippets",slug:"/web/snippets/prereqs-custom-code",permalink:"/docs/web/snippets/prereqs-custom-code",draft:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/snippets/prereqs-custom-code.mdx",tags:[],version:"current",frontMatter:{}},l={},u=[],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Download and setup the ",(0,a.kt)("a",{parentName:"li",href:"/docs/web/sdk-overview"},"VertiGIS Studio Web SDK"),"."),(0,a.kt)("li",{parentName:"ul"},"Check out the ",(0,a.kt)("a",{parentName:"li",href:"/docs/web/sdk-deployment#uploading-custom-code-to-an-app"},"deployment instructions")," to learn more about deploying custom code to a VertiGIS Studio Web App.")))}d.isMDXComponent=!0},7508:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={},i=void 0,s={unversionedId:"web/snippets/translation-callout",id:"web/snippets/translation-callout",title:"translation-callout",description:"Existing language strings for an application can be customized for any language in the VertiGIS Studio Web Designer. To provide a complete translation in an entirely new locale for VertiGIS Studio Web, please contact us.",source:"@site/docs/web/snippets/translation-callout.mdx",sourceDirName:"web/snippets",slug:"/web/snippets/translation-callout",permalink:"/docs/web/snippets/translation-callout",draft:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/snippets/translation-callout.mdx",tags:[],version:"current",frontMatter:{}},l={},u=[],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Existing language strings for an application can be ",(0,a.kt)("a",{parentName:"p",href:"https://docs.vertigisstudio.com/webviewer/latest/admin-help/Default.htm#gwv/internationalization.htm"},"customized for any language in the VertiGIS Studio Web Designer"),". To provide a complete translation in an entirely new locale for VertiGIS Studio Web, please ",(0,a.kt)("a",{parentName:"p",href:"https://www.vertigisstudio.com/contact/"},"contact us"),".")))}d.isMDXComponent=!0}}]);