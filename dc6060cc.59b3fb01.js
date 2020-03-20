(window.webpackJsonp=window.webpackJsonp||[]).push([[34,25],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(1),i=n(9),o=(n(0),n(185)),a={},c={id:"mobile/snippets/prereqs",title:"prereqs",description:"## Prerequisites",source:"@site/docs/mobile/snippets/prereqs.mdx",permalink:"/dev-center/docs/mobile/snippets/prereqs",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/prereqs.mdx"},s=[{value:"Prerequisites",id:"prerequisites",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"Download the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/dev-center/docs/mobile/quick-start"}),"Quick Start")," application and open it in Visual Studio."))}l.isMDXComponent=!0},170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(1),i=n(9),o=(n(0),n(185)),a=n(126),c={title:"Internationalization"},s={id:"mobile/internationalization",title:"Internationalization",description:'import PrereqsSnippet from "./snippets/prereqs.mdx";',source:"@site/docs/mobile/internationalization.mdx",permalink:"/dev-center/docs/mobile/internationalization",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/internationalization.mdx",sidebar:"mobile",previous:{title:"Add a Medium Layout",permalink:"/dev-center/docs/mobile/add-medium-layout"},next:{title:"Display a Custom Form with Geocortex Workflow",permalink:"/dev-center/docs/mobile/display-custom-form"}},p=[{value:"Specifying a Default Language",id:"specifying-a-default-language",children:[]},{value:"Adding New Cultures for Existing Language Strings",id:"adding-new-cultures-for-existing-language-strings",children:[]},{value:"Overriding Language Strings per Component",id:"overriding-language-strings-per-component",children:[]}],l={rightToc:p};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Geocortex Mobile, being a Xamarin Forms Application, comes with built in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/app-fundamentals/localization/text?pivots=windows"}),"support for full internationalization")," of existing and new language strings."),Object(o.b)(a.default,{mdxType:"PrereqsSnippet"}),Object(o.b)("h2",{id:"specifying-a-default-language"},"Specifying a Default Language"),Object(o.b)("p",null,"Xamarin forms describes how to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/app-fundamentals/localization/text?pivots=windows#specify-the-default-culture"}),"specify a default language for your app"),"."),Object(o.b)("h2",{id:"adding-new-cultures-for-existing-language-strings"},"Adding New Cultures for Existing Language Strings"),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/dev-center/docs/mobile/quick-start"}),"Quick Start")," project comes with multiple AppResources files in the root of the platform agnostic project to provide an example of adding a culture to your application."),Object(o.b)("h2",{id:"overriding-language-strings-per-component"},"Overriding Language Strings per Component"),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/dev-center/docs/mobile/samples"}),"SDK Samples")," project includes a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mobile-sdk-samples/samples/internationalization"}),"internationalization example")," which demonstrates how to configure resource files on a component level."))}u.isMDXComponent=!0},185:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(a,".").concat(m)]||u[m]||d[m]||o;return n?i.a.createElement(f,c({ref:t},p,{components:n})):i.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);