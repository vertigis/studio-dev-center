(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[939],{3905:(e,o,r)=>{"use strict";r.d(o,{Zo:()=>d,kt:()=>p});var n=r(7294);function t(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function a(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?a(Object(r),!0).forEach((function(o){t(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function l(e,o){if(null==e)return{};var r,n,t=function(e,o){if(null==e)return{};var r,n,t={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],o.indexOf(r)>=0||(t[r]=e[r]);return t}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=n.createContext({}),s=function(e){var o=n.useContext(c),r=o;return e&&(r="function"==typeof e?e(o):i(i({},o),e)),r},d=function(e){var o=s(e.components);return n.createElement(c.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},m=n.forwardRef((function(e,o){var r=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(r),p=t,g=m["".concat(c,".").concat(p)]||m[p]||u[p]||a;return r?n.createElement(g,i(i({ref:o},d),{},{components:r})):n.createElement(g,i({ref:o},d))}));function p(e,o){var r=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in o)hasOwnProperty.call(o,c)&&(l[c]=o[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3919:(e,o,r)=>{"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function t(e){return void 0!==e&&!n(e)}r.d(o,{b:()=>n,Z:()=>t})},4996:(e,o,r)=>{"use strict";r.d(o,{C:()=>a,Z:()=>i});var n=r(2263),t=r(3919);function a(){const{siteConfig:{baseUrl:e="/",url:o}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,o,r,{forcePrependBaseUrl:n=!1,absolute:a=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,t.b)(r))return r;if(n)return o+r;const i=r.startsWith(o)?r:o+r.replace(/^\//,"");return a?e+i:i}(o,e,r,n)}}function i(e,o={}){const{withBaseUrl:r}=a();return r(e,o)}},8215:(e,o,r)=>{"use strict";r.d(o,{Z:()=>t});var n=r(7294);const t=function({children:e,hidden:o,className:r}){return n.createElement("div",{role:"tabpanel",hidden:o,className:r},e)}},1395:(e,o,r)=>{"use strict";r.d(o,{Z:()=>d});var n=r(7294),t=r(944),a=r(6010);const i="tabItem_1uMI",l="tabItemActive_2DSg";const c=37,s=39;const d=function(e){const{lazy:o,block:r,defaultValue:d,values:u,groupId:m,className:p}=e,{tabGroupChoices:g,setTabGroupChoices:h}=(0,t.Z)(),[b,f]=(0,n.useState)(d),v=n.Children.toArray(e.children),C=[];if(null!=m){const e=g[m];null!=e&&e!==b&&u.some((o=>o.value===e))&&f(e)}const k=e=>{const o=e.currentTarget,r=C.indexOf(o),n=u[r].value;f(n),null!=m&&(h(m,n),setTimeout((()=>{(function(e){const{top:o,left:r,bottom:n,right:t}=e.getBoundingClientRect(),{innerHeight:a,innerWidth:i}=window;return o>=0&&t<=i&&n<=a&&r>=0})(o)||(o.scrollIntoView({block:"center",behavior:"smooth"}),o.classList.add(l),setTimeout((()=>o.classList.remove(l)),2e3))}),150))},y=e=>{var o;let r;switch(e.keyCode){case s:{const o=C.indexOf(e.target)+1;r=C[o]||C[0];break}case c:{const o=C.indexOf(e.target)-1;r=C[o]||C[C.length-1];break}}null==(o=r)||o.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},p)},u.map((({value:e,label:o})=>n.createElement("li",{role:"tab",tabIndex:b===e?0:-1,"aria-selected":b===e,className:(0,a.Z)("tabs__item",i,{"tabs__item--active":b===e}),key:e,ref:e=>C.push(e),onKeyDown:y,onFocus:k,onClick:k},o)))),o?(0,n.cloneElement)(v.filter((e=>e.props.value===b))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},v.map(((e,o)=>(0,n.cloneElement)(e,{key:o,hidden:e.props.value!==b})))))}},9443:(e,o,r)=>{"use strict";r.d(o,{Z:()=>n});const n=(0,r(7294).createContext)(void 0)},944:(e,o,r)=>{"use strict";r.d(o,{Z:()=>a});var n=r(7294),t=r(9443);const a=function(){const e=(0,n.useContext)(t.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},2982:(e,o,r)=>{"use strict";r.r(o),r.d(o,{frontMatter:()=>c,contentTitle:()=>s,metadata:()=>d,toc:()=>u,default:()=>p});var n=r(2122),t=(r(7294),r(3905)),a=r(4996),i=r(1395),l=r(8215);const c={title:"Configuring the Theme",description:"VertiGIS Studio Mobile - Configuring the application theme using app config"},s=void 0,d={unversionedId:"mobile/configuration-theme",id:"mobile/configuration-theme",isDocsHomePage:!1,title:"Configuring the Theme",description:"VertiGIS Studio Mobile - Configuring the application theme using app config",source:"@site/docs/mobile/configuration-theme.mdx",sourceDirName:"mobile",slug:"/mobile/configuration-theme",permalink:"/docs/mobile/configuration-theme",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/configuration-theme.mdx",version:"current",frontMatter:{title:"Configuring the Theme",description:"VertiGIS Studio Mobile - Configuring the application theme using app config"},sidebar:"mobile",previous:{title:"App Config Reference",permalink:"/docs/mobile/configuration-app-config-reference"},next:{title:"Commands and Operations",permalink:"/docs/mobile/configuration-commands-operations"}},u=[{value:"Customizing Theme Colors",id:"customizing-theme-colors",children:[]},{value:"Theme Color Reference",id:"theme-color-reference",children:[]},{value:"Relevant SDK Sample",id:"relevant-sdk-sample",children:[]}],m={toc:u};function p({components:e,...o}){return(0,t.kt)("wrapper",(0,n.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"VertiGIS Studio Mobile's appearance is built around two concepts: theme and ",(0,t.kt)("a",{parentName:"p",href:"/docs/mobile/configuration-layout-getting-started"},"layout"),". The theme controls the color scheme of the app, while the layout controls the organization of content."),(0,t.kt)("h3",{id:"customizing-theme-colors"},"Customizing Theme Colors"),(0,t.kt)("p",null,"Every color in a theme can be fully customized by editing the ",(0,t.kt)("inlineCode",{parentName:"p"},"colors")," property of a theme in the branding service configuration."),(0,t.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,t.kt)("div",{parentName:"div",className:"admonition-heading"},(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,t.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,t.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,t.kt)("div",{parentName:"div",className:"admonition-content"},(0,t.kt)("p",{parentName:"div"},"Color properties are defined using an array of RGBA values."))),(0,t.kt)(i.Z,{defaultValue:"config",values:[{label:"App Config",value:"config"},{label:"UI",value:"ui"}],mdxType:"Tabs"},(0,t.kt)(l.Z,{value:"config",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "schemaVersion": "1.0",\n  "items": [\n    ...\n    {\n      "$type": "branding",\n      "id": "branding",\n      "activeTheme": "custom-theme",\n      "themes": [\n        {\n        "id": "custom-theme",\n        "colors": {\n            "primaryBackground": [\n              50,\n              153,\n              168,\n              255\n            ]\n          }\n        }\n      ]\n    },\n    ...\n  ]\n}\n'))),(0,t.kt)(l.Z,{value:"ui",mdxType:"TabItem"},(0,t.kt)("img",{src:(0,a.Z)("img/mobile-customize-theme-blue.png")}))),(0,t.kt)("h3",{id:"theme-color-reference"},"Theme Color Reference"),(0,t.kt)("p",null,"Following is a list of every possible theme color that can be\nused in a VertiGIS Studio Mobile Application. Each of these colors can be\n",(0,t.kt)("a",{parentName:"p",href:"#customizing-theme-colors"},"customized")," and ",(0,t.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-components-styling"},"used in custom components")),(0,t.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,t.kt)("div",{parentName:"div",className:"admonition-heading"},(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,t.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,t.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,t.kt)("div",{parentName:"div",className:"admonition-content"},(0,t.kt)("p",{parentName:"div"},"Theme colors in mobile are added as ",(0,t.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/xaml/resource-dictionaries?WT.mc_id=docs-ch9-jamont#consume-resources-in-xaml"},"dynamic resources"),"."))),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-cs"},"Color accentIconBackground;\nColor accentIconBackgroundHover;\nColor accentIconBorder;\nColor accentIconBorderHover;\nColor accentIconForeground;\nColor accentIconForegroundHover;\nColor alertAmberBackground;\nColor alertAmberBackgroundHover;\nColor alertAmberBorder;\nColor alertAmberBorderHover;\nColor alertAmberForeground;\nColor alertAmberForegroundHover;\nColor alertAmberIcon;\nColor alertAmberIconHover;\nColor alertBackgroundDisabled;\nColor alertBorderDisabled;\nColor alertForegroundDisabled;\nColor alertGreenBackground;\nColor alertGreenBackgroundHover;\nColor alertGreenBorder;\nColor alertGreenBorderHover;\nColor alertGreenForeground;\nColor alertGreenForegroundHover;\nColor alertGreenIcon;\nColor alertGreenIconHover;\nColor alertIconDisabled;\nColor alertRedBackground;\nColor alertRedBackgroundHover;\nColor alertRedBorder;\nColor alertRedBorderHover;\nColor alertRedForeground;\nColor alertRedForegroundHover;\nColor alertRedIcon;\nColor alertRedIconHover;\nColor buttonBackground;\nColor buttonBackgroundDisabled;\nColor buttonBackgroundHover;\nColor buttonBorder;\nColor buttonBorderDisabled;\nColor buttonBorderHover;\nColor buttonForeground;\nColor buttonForegroundDisabled;\nColor buttonForegroundHover;\nColor buttonIcon;\nColor buttonIconDisabled;\nColor buttonIconHover;\nColor disabledIconFill;\nColor emphasizedButtonBackground;\nColor emphasizedButtonBackgroundDisabled;\nColor emphasizedButtonBackgroundHover;\nColor emphasizedButtonBorder;\nColor emphasizedButtonBorderDisabled;\nColor emphasizedButtonBorderHover;\nColor emphasizedButtonForeground;\nColor emphasizedButtonForegroundDisabled;\nColor emphasizedButtonForegroundHover;\nColor emphasizedButtonIcon;\nColor emphasizedButtonIconDisabled;\nColor emphasizedButtonIconHover;\nColor inlineTableBorder;\nColor inlineTableHeaderBackground;\nColor inlineTableRowBackground;\nColor inputBorder;\nColor itemHoverBackground;\nColor itemSelectedBackground;\nColor primaryAccent;\nColor primaryAccentDisabled;\nColor primaryAccentHover;\nColor primaryAccentLarge;\nColor primaryBackground;\nColor primaryBorder;\nColor primaryForeground;\nColor primaryForegroundDisabled;\nColor secondaryBackground;\nColor secondaryBorder;\nColor secondaryForeground;\nColor tabPrimaryForeground;\nColor tabSecondaryForeground;\n")),(0,t.kt)("h2",{id:"relevant-sdk-sample"},"Relevant SDK Sample"),(0,t.kt)("p",null,"The VertiGIS Studio Mobile SDK Samples has an example of ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/AppConfiguration/Theme"},"configuring the theme with the branding service"),"."))}p.isMDXComponent=!0},6010:(e,o,r)=>{"use strict";function n(e){var o,r,t="";if("string"==typeof e||"number"==typeof e)t+=e;else if("object"==typeof e)if(Array.isArray(e))for(o=0;o<e.length;o++)e[o]&&(r=n(e[o]))&&(t&&(t+=" "),t+=r);else for(o in e)e[o]&&(t&&(t+=" "),t+=o);return t}function t(){for(var e,o,r=0,t="";r<arguments.length;)(e=arguments[r++])&&(o=n(e))&&(t&&(t+=" "),t+=o);return t}r.d(o,{Z:()=>t})}}]);