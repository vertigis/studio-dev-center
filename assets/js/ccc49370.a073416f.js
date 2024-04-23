"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[6344],{4068:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});n(1504);var i=n(4064),a=n(3368),o=n(5864),r=n(3152),s=n(9452),l=n(7590),c=n(4357),d=n(308),u=n(7624);function m(e){const{nextItem:t,prevItem:n}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.G)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,u.jsx)(d.c,{...n,subLabel:(0,u.jsx)(c.c,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),t&&(0,u.jsx)(d.c,{...t,subLabel:(0,u.jsx)(c.c,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function g(){const{assets:e,metadata:t}=(0,r.g)(),{title:n,description:i,date:o,tags:s,authors:l,frontMatter:c}=t,{keywords:d}=c,m=e.image??c.image;return(0,u.jsxs)(a.U7,{title:n,description:i,keywords:d,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:o}),l.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:l.map((e=>e.url)).filter(Boolean).join(",")}),s.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:s.map((e=>e.label)).join(",")})]})}var h=n(6952),f=n(624);function p(){const e=(0,f.C)();return(0,u.jsx)(h.c,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var v=n(5124),x=n(1528);function b({sidebar:e,children:t}){const{metadata:n,toc:i}=(0,r.g)(),{nextItem:a,prevItem:o,frontMatter:c,unlisted:d}=n,{hide_table_of_contents:g,toc_min_heading_level:h,toc_max_heading_level:f}=c;return(0,u.jsxs)(s.c,{sidebar:e,toc:!g&&i.length>0?(0,u.jsx)(v.c,{toc:i,minHeadingLevel:h,maxHeadingLevel:f}):void 0,children:[d&&(0,u.jsx)(x.c,{}),(0,u.jsx)(l.c,{children:t}),(a||o)&&(0,u.jsx)(m,{nextItem:a,prevItem:o})]})}function j(e){const t=e.content;return(0,u.jsx)(r.E,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(a.cr,{className:(0,i.c)(o.W.wrapper.blogPages,o.W.page.blogPostPage),children:[(0,u.jsx)(g,{}),(0,u.jsx)(p,{}),(0,u.jsx)(b,{sidebar:e.sidebar,children:(0,u.jsx)(t,{})})]})})}},5124:(e,t,n)=>{n.d(t,{c:()=>c});n(1504);var i=n(4064),a=n(3088);const o={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var r=n(7624);const s="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c({className:e,...t}){return(0,r.jsx)("div",{className:(0,i.c)(o.tableOfContents,"thin-scrollbar",e),children:(0,r.jsx)(a.c,{...t,linkClassName:s,linkActiveClassName:l})})}},3088:(e,t,n)=>{n.d(t,{c:()=>f});var i=n(1504),a=n(1824);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const i=n.slice(2,e.level);e.parentIndex=Math.max(...i),n[e.level]=t}));const i=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):i.push(a)})),i}function r({toc:e,minHeadingLevel:t,maxHeadingLevel:n}){return e.flatMap((e=>{const i=r({toc:e.children,minHeadingLevel:t,maxHeadingLevel:n});return function(e){return e.level>=t&&e.level<=n}(e)?[{...e,children:i}]:i}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function l(e,{anchorTopOffset:t}){const n=e.find((e=>s(e).top>=t));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(n))?n:e[e.indexOf(n)-1]??null}return e[e.length-1]??null}function c(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.y)();return(0,i.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,i.useRef)(void 0),n=c();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:r}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),s=function({minHeadingLevel:e,maxHeadingLevel:t}){const n=[];for(let i=e;i<=t;i+=1)n.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:o,maxHeadingLevel:r}),c=l(s,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])}var u=n(867),m=n(7624);function g({toc:e,className:t,linkClassName:n,isChild:i}){return e.length?(0,m.jsx)("ul",{className:i?void 0:t,children:e.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.c,{to:`#${e.id}`,className:n??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(g,{isChild:!0,toc:e.children,className:t,linkClassName:n})]},e.id)))}):null}const h=i.memo(g);function f({toc:e,className:t="table-of-contents table-of-contents__left-border",linkClassName:n="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:l,maxHeadingLevel:c,...u}){const g=(0,a.y)(),f=l??g.tableOfContents.minHeadingLevel,p=c??g.tableOfContents.maxHeadingLevel,v=function({toc:e,minHeadingLevel:t,maxHeadingLevel:n}){return(0,i.useMemo)((()=>r({toc:o(e),minHeadingLevel:t,maxHeadingLevel:n})),[e,t,n])}({toc:e,minHeadingLevel:f,maxHeadingLevel:p});return d((0,i.useMemo)((()=>{if(n&&s)return{linkClassName:n,linkActiveClassName:s,minHeadingLevel:f,maxHeadingLevel:p}}),[n,s,f,p])),(0,m.jsx)(h,{toc:v,className:t,linkClassName:n,...u})}},1528:(e,t,n)=>{n.d(t,{c:()=>g});n(1504);var i=n(4064),a=n(4357),o=n(6952),r=n(7624);function s(){return(0,r.jsx)(a.c,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,r.jsx)(a.c,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(o.c,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(5864),u=n(304);function m({className:e}){return(0,r.jsx)(u.c,{type:"caution",title:(0,r.jsx)(s,{}),className:(0,i.c)(e,d.W.common.unlistedBanner),children:(0,r.jsx)(l,{})})}function g(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(m,{...e})]})}},624:(e,t,n)=>{n.d(t,{Q:()=>d,C:()=>u});var i=n(964),a=n(8264),o=n(5308);var r=n(3152);const s=e=>new Date(e).toISOString();function l(e){const t=e.map(m);return{author:1===t.length?t[0]:t}}function c(e,t,n){return e?{image:g({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${n}`})}:{}}function d(e){const{siteConfig:t}=(0,a.c)(),{withBaseUrl:n}=(0,i.E)(),{metadata:{blogDescription:o,blogTitle:r,permalink:d}}=e,u=`${t.url}${d}`;return{"@context":"https://schema.org","@type":"Blog","@id":u,mainEntityOfPage:u,headline:r,description:o,blogPost:e.items.map((e=>function(e,t,n){const{assets:i,frontMatter:a,metadata:o}=e,{date:r,title:d,description:u,lastUpdatedAt:m}=o,g=i.image??a.image,h=a.keywords??[],f=`${t.url}${o.permalink}`,p=m?s(m):void 0;return{"@type":"BlogPosting","@id":f,mainEntityOfPage:f,url:f,headline:d,name:d,description:u,datePublished:r,...p?{dateModified:p}:{},...l(o.authors),...c(g,n,d),...h?{keywords:h}:{}}}(e.content,t,n)))}}function u(){const e=function(){const e=(0,o.c)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:n}=(0,r.g)(),{siteConfig:d}=(0,a.c)(),{withBaseUrl:u}=(0,i.E)(),{date:m,title:g,description:h,frontMatter:f,lastUpdatedAt:p}=n,v=t.image??f.image,x=f.keywords??[],b=p?s(p):void 0,j=`${d.url}${n.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":j,mainEntityOfPage:j,url:j,headline:g,name:g,description:h,datePublished:m,...b?{dateModified:b}:{},...l(n.authors),...c(v,u,g),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${d.url}${e.blogBasePath}`,name:e.blogTitle}}}function m(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function g({imageUrl:e,caption:t}){return{"@type":"ImageObject","@id":e,url:e,contentUrl:e,caption:t}}}}]);