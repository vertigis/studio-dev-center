(window.webpackJsonp=window.webpackJsonp||[]).push([[19,25],{126:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return i})),r.d(n,"rightToc",(function(){return d})),r.d(n,"default",(function(){return u}));var o=r(1),t=r(9),a=(r(0),r(185)),c={},i={id:"mobile/snippets/prereqs",title:"prereqs",description:"## Prerequisites",source:"@site/docs/mobile/snippets/prereqs.mdx",permalink:"/dev-center/docs/mobile/snippets/prereqs",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/prereqs.mdx"},d=[{value:"Prerequisites",id:"prerequisites",children:[]}],l={rightToc:d};function u(e){var n=e.components,r=Object(t.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(a.b)("p",null,"Download the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/dev-center/docs/mobile/quick-start"}),"Quick Start")," application and open it in Visual Studio."))}u.isMDXComponent=!0},156:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return d})),r.d(n,"rightToc",(function(){return l})),r.d(n,"default",(function(){return b}));var o=r(1),t=r(9),a=(r(0),r(185)),c=r(126),i={title:"Customize the Look and Feel",description:"Geocortex Mobile - Learn how to customize the look and feel of your Geocortex Mobile application"},d={id:"mobile/look-and-feel",title:"Customize the Look and Feel",description:"Geocortex Mobile - Learn how to customize the look and feel of your Geocortex Mobile application",source:"@site/docs/mobile/look-and-feel.mdx",permalink:"/dev-center/docs/mobile/look-and-feel",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/look-and-feel.mdx",sidebar:"mobile",previous:{title:"Change Default Application Behaviour",permalink:"/dev-center/docs/mobile/change-default-behaviour"},next:{title:"Add a Medium Layout",permalink:"/dev-center/docs/mobile/add-medium-layout"}},l=[{value:"Theming with the Branding Component",id:"theming-with-the-branding-component",children:[]},{value:"Changing the Visual Layout of an Application",id:"changing-the-visual-layout-of-an-application",children:[]},{value:"Changing or Adding Icons",id:"changing-or-adding-icons",children:[]}],u={rightToc:l};function b(e){var n=e.components,r=Object(t.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Geocortex Mobile's appearance is built around two concepts: theme and ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/dev-center/docs/mobile/concepts-layout"}),"layout"),"."),Object(a.b)("p",null,"The theme controls the color scheme of the app. The color scheme for different themes is defined in branding component of the the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/dev-center/docs/mobile/concepts-app-config"}),"app config"),". This example is built around ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/dev-center/docs/mobile/quick-start#editing-the-layout-and-app-config"}),"editing the app json of the quick start")," project."),Object(a.b)(c.default,{mdxType:"PrereqsSnippet"}),Object(a.b)("h3",{id:"theming-with-the-branding-component"},"Theming with the Branding Component"),Object(a.b)("p",null,"This example shows two pre-defined themes that are included with Mobile, light and dark. Custom themes can be added to Mobile's included themes, and selected by changing ",Object(a.b)("inlineCode",{parentName:"p"},"activeTheme")," property of the branding component.\nThe branding component can be found and edited in the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/dev-center/docs/mobile/quick-start#editing-the-layout-and-app-config"}),Object(a.b)("inlineCode",{parentName:"a"},"app.json")),"."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("div",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Color properties can be excluded from a theme; The application will choose a default color instead."))),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'    {\n      "$type": "branding",\n      "id": "branding",\n      "activeTheme": "light",\n      "themes": [\n        {\n          "id": "dark",\n          "colors": {\n            "emphasizedButtonBackground": [ 26, 114, 196, 255 ],\n            "emphasizedButtonBackgroundDisabled": [ 137, 184, 228, 255 ],\n            "emphasizedButtonBackgroundHover": [ 227, 239, 249, 255 ],\n            "emphasizedButtonBorder": [ 181, 211, 238, 255 ],\n            "emphasizedButtonBorderDisabled": [ 19, 85, 147, 255 ],\n            "emphasizedButtonBorderHover": [ 26, 114, 196, 255 ],\n            "emphasizedButtonForeground": [ 255, 255, 255, 255 ],\n            "emphasizedButtonForegroundDisabled": [ 19, 85, 147, 255 ],\n            "emphasizedButtonForegroundHover": [ 23, 100, 171, 255 ],\n            "emphasizedButtonIcon": [ 255, 255, 255, 255 ],\n            "emphasizedButtonIconDisabled": [ 19, 85, 147, 255 ],\n            "emphasizedButtonIconHover": [ 26, 114, 196, 255 ],\n            "buttonBackground": [ 64, 64, 68, 255 ],\n            "buttonBackgroundDisabled": [ 114, 114, 121, 255 ],\n            "buttonBackgroundHover": [ 255, 255, 255, 255 ],\n            "buttonBorder": [ 196, 196, 201, 255 ],\n            "buttonBorderDisabled": [ 173, 173, 180, 255 ],\n            "buttonBorderHover": [ 26, 114, 196, 255 ],\n            "buttonForeground": [ 255, 255, 255, 255 ],\n            "buttonForegroundDisabled": [ 196, 196, 201, 255 ],\n            "buttonForegroundHover": [ 26, 114, 196, 255 ],\n            "buttonIcon": [ 255, 255, 255, 255 ],\n            "buttonIconDisabled": [ 196, 196, 201, 255 ],\n            "buttonIconHover": [ 26, 114, 196, 255 ],\n            "inputBorder": [ 196, 196, 201, 255 ],\n            "primaryAccent": [ 227, 239, 249, 255 ],\n            "primaryAccentDisabled": [ 130, 130, 138, 255 ],\n            "primaryAccentHover": [ 196, 196, 201, 255 ],\n            "primaryAccentLarge": [ 137, 184, 228, 255 ],\n            "primaryBackground": [ 81, 81, 86, 255 ],\n            "primaryBorder": [ 114, 114, 121, 255 ],\n            "primaryForeground": [ 255, 255, 255, 255 ],\n            "primaryForegroundDisabled": [ 130, 130, 138, 255 ],\n            "secondaryBackground": [ 64, 64, 68, 255 ],\n            "secondaryBorder": [ 97, 97, 103, 255 ],\n            "secondaryForeground": [ 196, 196, 201, 255 ],\n            "tabPrimaryForeground": [ 196, 196, 201, 255 ],\n            "tabSecondaryForeground": [ 255, 255, 255, 255 ],\n            "inlineTableHeaderBackground": [ 64, 64, 68, 255 ],\n            "inlineTableRowBackground": [ 97, 97, 103, 255 ],\n            "inlineTableBorder": [ 130, 130, 138, 255 ],\n            "accentIconBackground": [ 255, 255, 255, 255 ],\n            "accentIconForeground": [ 26, 114, 196, 255 ],\n            "accentIconBackgroundHover": [ 255, 255, 255, 255 ],\n            "accentIconBorder": [ 255, 255, 255, 255 ],\n            "accentIconBorderHover": [ 255, 255, 255, 255 ],\n            "accentIconForegroundHover": [ 26, 114, 196, 255 ],\n            "disabledIconFill": [ 130, 130, 138, 255 ],\n            "alertAmberBackground": [ 191, 83, 0, 255 ],\n            "alertAmberBackgroundHover": [ 255, 255, 255, 255 ],\n            "alertAmberBorder": [ 191, 83, 0, 255 ],\n            "alertAmberBorderHover": [ 191, 83, 0, 255 ],\n            "alertAmberForeground": [ 255, 255, 255, 255 ],\n            "alertAmberForegroundHover": [ 191, 83, 0, 255 ],\n            "alertAmberIcon": [ 255, 255, 255, 255 ],\n            "alertAmberIconHover": [ 191, 83, 0, 255 ],\n            "alertBackgroundDisabled": [ 114, 114, 121, 255 ],\n            "alertBorderDisabled": [ 114, 114, 121, 255 ],\n            "alertForegroundDisabled": [ 196, 196, 201, 255 ],\n            "alertIconDisabled": [ 196, 196, 201, 255 ],\n            "alertGreenBackground": [ 0, 128, 64, 255 ],\n            "alertGreenBackgroundHover": [ 255, 255, 255, 255 ],\n            "alertGreenBorder": [ 0, 128, 64, 255 ],\n            "alertGreenBorderHover": [ 0, 128, 64, 255 ],\n            "alertGreenForeground": [ 255, 255, 255, 255 ],\n            "alertGreenForegroundHover": [ 0, 128, 64, 255 ],\n            "alertGreenIcon": [ 255, 255, 255, 255 ],\n            "alertGreenIconHover": [ 0, 128, 64, 255 ],\n            "alertRedBackground": [ 178, 34, 34, 255 ],\n            "alertRedBackgroundHover": [ 255, 255, 255, 255 ],\n            "alertRedBorder": [ 178, 34, 34, 255 ],\n            "alertRedBorderHover": [ 178, 34, 34, 255 ],\n            "alertRedForeground": [ 255, 255, 255, 255 ],\n            "alertRedForegroundHover": [ 178, 34, 34, 255 ],\n            "alertRedIcon": [ 255, 255, 255, 255 ],\n            "alertRedIconHover": [ 178, 34, 34, 255 ],\n            "itemSelectedBackground": [ 16, 71, 122, 255 ],\n            "itemHoverBackground": [ 26, 114, 196, 255 ]\n          }\n        },\n        {\n          "id": "light",\n          "colors": {\n            "emphasizedButtonBackground": [ 26, 114, 196, 255 ],\n            "emphasizedButtonBackgroundDisabled": [ 181, 211, 238, 255 ],\n            "emphasizedButtonBackgroundHover": [ 227, 239, 249, 255 ],\n            "emphasizedButtonBorder": [ 26, 114, 196, 255 ],\n            "emphasizedButtonBorderDisabled": [ 181, 211, 238, 255 ],\n            "emphasizedButtonBorderHover": [ 26, 114, 196, 255 ],\n            "emphasizedButtonForeground": [ 255, 255, 255, 255 ],\n            "emphasizedButtonForegroundDisabled": [ 19, 85, 147, 255 ],\n            "emphasizedButtonForegroundHover": [ 19, 85, 147, 255 ],\n            "emphasizedButtonIcon": [ 255, 255, 255, 255 ],\n            "emphasizedButtonIconDisabled": [ 19, 85, 147, 255 ],\n            "emphasizedButtonIconHover": [ 26, 114, 196, 255 ],\n            "buttonBackground": [ 255, 255, 255, 255 ],\n            "buttonBackgroundDisabled": [ 219, 219, 222, 255 ],\n            "buttonBackgroundHover": [ 26, 114, 196, 255 ],\n            "buttonBorder": [ 114, 114, 121, 255 ],\n            "buttonBorderDisabled": [ 173, 173, 180, 255 ],\n            "buttonBorderHover": [ 255, 255, 255, 255 ],\n            "buttonForeground": [ 26, 114, 196, 255 ],\n            "buttonForegroundDisabled": [ 151, 151, 159, 255 ],\n            "buttonForegroundHover": [ 255, 255, 255, 255 ],\n            "buttonIcon": [ 26, 114, 196, 255 ],\n            "buttonIconHover": [ 255, 255, 255, 255 ],\n            "buttonIconDisabled": [ 151, 151, 159, 255 ],\n            "inputBorder": [ 114, 114, 121, 255 ],\n            "primaryAccent": [ 26, 114, 196, 255 ],\n            "primaryAccentDisabled": [ 151, 151, 159, 255 ],\n            "primaryAccentHover": [ 114, 114, 121, 255 ],\n            "primaryAccentLarge": [ 26, 114, 196, 255 ],\n            "primaryBackground": [ 255, 255, 255, 255 ],\n            "primaryBorder": [ 219, 219, 222, 255 ],\n            "primaryForeground": [ 64, 64, 68, 255 ],\n            "primaryForegroundDisabled": [ 196, 196, 201, 255 ],\n            "secondaryBackground": [ 242, 242, 243, 255 ],\n            "secondaryBorder": [ 196, 196, 201, 255 ],\n            "secondaryForeground": [ 81, 81, 86, 255 ],\n            "tabPrimaryForeground": [ 26, 114, 196, 255 ],\n            "tabSecondaryForeground": [ 64, 64, 68, 255 ],\n            "inlineTableHeaderBackground": [ 219, 219, 222, 255 ],\n            "inlineTableRowBackground": [ 242, 242, 243, 255 ],\n            "inlineTableBorder": [ 196, 196, 201, 255 ],\n            "accentIconBackground": [ 255, 255, 255, 255 ],\n            "accentIconForeground": [ 26, 114, 196, 255 ],\n            "accentIconBackgroundHover": [ 255, 255, 255, 255 ],\n            "accentIconBorder": [ 114, 114, 121, 255 ],\n            "accentIconBorderHover": [ 114, 114, 121, 255 ],\n            "accentIconForegroundHover": [ 26, 114, 196, 255 ],\n            "disabledIconFill": [ 130, 130, 138, 255 ],\n            "alertAmberBackground": [ 191, 83, 0, 255 ],\n            "alertAmberBackgroundHover": [ 255, 255, 255, 255 ],\n            "alertAmberBorder": [ 191, 83, 0, 255 ],\n            "alertAmberBorderHover": [ 191, 83, 0, 255 ],\n            "alertAmberForeground": [ 255, 255, 255, 255 ],\n            "alertAmberForegroundHover": [ 191, 83, 0, 255 ],\n            "alertAmberIcon": [ 255, 255, 255, 255 ],\n            "alertAmberIconHover": [ 191, 83, 0, 255 ],\n            "alertBackgroundDisabled": [ 219, 219, 222, 255 ],\n            "alertBorderDisabled": [ 219, 219, 222, 255 ],\n            "alertForegroundDisabled": [ 151, 151, 159, 255 ],\n            "alertIconDisabled": [ 151, 151, 159, 255 ],\n            "alertGreenBackground": [ 0, 128, 64, 255 ],\n            "alertGreenBackgroundHover": [ 255, 255, 255, 255 ],\n            "alertGreenBorder": [ 0, 128, 64, 255 ],\n            "alertGreenBorderHover": [ 0, 128, 64, 255 ],\n            "alertGreenForeground": [ 255, 255, 255, 255 ],\n            "alertGreenForegroundHover": [ 0, 128, 64, 255 ],\n            "alertGreenIcon": [ 255, 255, 255, 255 ],\n            "alertGreenIconHover": [ 0, 128, 64, 255 ],\n            "alertRedBackground": [ 178, 34, 34, 255 ],\n            "alertRedBackgroundHover": [ 255, 255, 255, 255 ],\n            "alertRedBorder": [ 178, 34, 34, 255 ],\n            "alertRedBorderHover": [ 178, 34, 34, 255 ],\n            "alertRedForeground": [ 255, 255, 255, 255 ],\n            "alertRedForegroundHover": [ 178, 34, 34, 255 ],\n            "alertRedIcon": [ 255, 255, 255, 255 ],\n            "alertRedIconHover": [ 178, 34, 34, 255 ],\n            "itemSelectedBackground": [ 227, 239, 249, 255 ],\n            "itemHoverBackground": [ 137, 184, 228, 255 ]\n          }\n        }\n      ]\n    },\n')),Object(a.b)("h3",{id:"changing-the-visual-layout-of-an-application"},"Changing the Visual Layout of an Application"),Object(a.b)("p",null,"How elements are laid out in a Geocortex Mobile Application is defined by an apps layout. ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/dev-center/docs/mobile/concepts-layout"}),"This article")," will teach you how to configure an app's layout and how to leverage it to customize the appearance of Geocortex Mobile. Further styling within the layout can be done using ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/dev-center/docs/mobile/concepts-advanced-layout#presentation-attributes"}),"presentation attributes"),"."),Object(a.b)("h3",{id:"changing-or-adding-icons"},"Changing or Adding Icons"),Object(a.b)("h4",{id:"coming-soon"},"Coming Soon..."),Object(a.b)("p",null,"This documentation is under active development."))}b.isMDXComponent=!0},185:function(e,n,r){"use strict";r.d(n,"a",(function(){return b})),r.d(n,"b",(function(){return m}));var o=r(0),t=r.n(o);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function d(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=t.a.createContext({}),u=function(e){var n=t.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i({},n,{},e)),r},b=function(e){var n=u(e.components);return t.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},s=Object(o.forwardRef)((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),b=u(r),s=o,m=b["".concat(c,".").concat(s)]||b[s]||p[s]||a;return r?t.a.createElement(m,i({ref:n},l,{components:r})):t.a.createElement(m,i({ref:n},l))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=s;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return t.a.createElement.apply(null,c)}return t.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);