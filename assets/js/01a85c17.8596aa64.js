"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[8412],{9452:(e,s,t)=>{t.d(s,{c:()=>v});var a=t(1504),i=t(4064),r=t(7468),n=t(1432),l=t(867),c=t(4357),o=t(5592),d=t(3376);function m(e){const{pathname:s}=(0,o.IT)();return(0,a.useMemo)((()=>e.filter((e=>function(e,s){return!(e.unlisted&&!(0,d.Sc)(e.permalink,s))}(e,s)))),[e,s])}const g={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var u=t(7624);function h({sidebar:e}){const s=m(e.items);return(0,u.jsx)("aside",{className:"col col--3",children:(0,u.jsxs)("nav",{className:(0,i.c)(g.sidebar,"thin-scrollbar"),"aria-label":(0,c.G)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,u.jsx)("div",{className:(0,i.c)(g.sidebarItemTitle,"margin-bottom--md"),children:e.title}),(0,u.jsx)("ul",{className:(0,i.c)(g.sidebarItemList,"clean-list"),children:s.map((e=>(0,u.jsx)("li",{className:g.sidebarItem,children:(0,u.jsx)(l.c,{isNavLink:!0,to:e.permalink,className:g.sidebarItemLink,activeClassName:g.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var b=t(5168);function p({sidebar:e}){const s=m(e.items);return(0,u.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,u.jsx)("li",{className:"menu__list-item",children:(0,u.jsx)(l.c,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function j(e){return(0,u.jsx)(b.Mx,{component:p,props:e})}function x({sidebar:e}){const s=(0,n.U)();return e?.items.length?"mobile"===s?(0,u.jsx)(j,{sidebar:e}):(0,u.jsx)(h,{sidebar:e}):null}function v(e){const{sidebar:s,toc:t,children:a,...n}=e,l=s&&s.items.length>0;return(0,u.jsx)(r.c,{...n,children:(0,u.jsx)("div",{className:"container margin-vert--lg",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)(x,{sidebar:s}),(0,u.jsx)("main",{className:(0,i.c)("col",{"col--7":l,"col--9 col--offset-1":!l}),itemScope:!0,itemType:"https://schema.org/Blog",children:a}),t&&(0,u.jsx)("div",{className:"col col--2",children:t})]})})})}},3024:(e,s,t)=>{t.r(s),t.d(s,{default:()=>p});t(1504);var a=t(4064),i=t(4357);const r=()=>(0,i.G)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var n=t(5008),l=t(5864),c=t(9452),o=t(3020),d=t(6448);const m={tag:"tag_Nnez"};var g=t(7624);function u({letterEntry:e}){return(0,g.jsxs)("article",{children:[(0,g.jsx)(d.c,{as:"h2",id:e.letter,children:e.letter}),(0,g.jsx)("ul",{className:"padding--none",children:e.tags.map((e=>(0,g.jsx)("li",{className:m.tag,children:(0,g.jsx)(o.c,{...e})},e.permalink)))}),(0,g.jsx)("hr",{})]})}function h({tags:e}){const s=function(e){const s={};return Object.values(e).forEach((e=>{const t=function(e){return e[0].toUpperCase()}(e.label);s[t]??=[],s[t].push(e)})),Object.entries(s).sort((([e],[s])=>e.localeCompare(s))).map((([e,s])=>({letter:e,tags:s.sort(((e,s)=>e.label.localeCompare(s.label)))})))}(e);return(0,g.jsx)("section",{className:"margin-vert--lg",children:s.map((e=>(0,g.jsx)(u,{letterEntry:e},e.letter)))})}var b=t(8712);function p({tags:e,sidebar:s}){const t=r();return(0,g.jsxs)(n.cr,{className:(0,a.c)(l.W.wrapper.blogPages,l.W.page.blogTagsListPage),children:[(0,g.jsx)(n.U7,{title:t}),(0,g.jsx)(b.c,{tag:"blog_tags_list"}),(0,g.jsxs)(c.c,{sidebar:s,children:[(0,g.jsx)(d.c,{as:"h1",children:t}),(0,g.jsx)(h,{tags:e})]})]})}},3020:(e,s,t)=>{t.d(s,{c:()=>l});t(1504);var a=t(4064),i=t(867);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var n=t(7624);function l({permalink:e,label:s,count:t}){return(0,n.jsxs)(i.c,{href:e,className:(0,a.c)(r.tag,t?r.tagWithCount:r.tagRegular),children:[s,t&&(0,n.jsx)("span",{children:t})]})}}}]);