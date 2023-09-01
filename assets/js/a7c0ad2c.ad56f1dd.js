"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3222],{4285:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294);function i(e){let{children:t}=e;return r.createElement("span",{style:{color:"#017501"}},"<",t,">")}},7738:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var r=a(3117),i=(a(7294),a(3905));a(4285);const p={title:"StrapiFS (WIP)",slug:"/api/StrapiFS",tags:["module","public"],toc_min_heading_level:2,toc_max_heading_level:3},n="Strapi File System",o={unversionedId:"api/strapi-fs",id:"api/strapi-fs",title:"StrapiFS (WIP)",description:"Current state: Stable",source:"@site/docs/api/strapi-fs.mdx",sourceDirName:"api",slug:"/api/StrapiFS",permalink:"/api/StrapiFS",draft:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/api/strapi-fs.mdx",tags:[{label:"module",permalink:"/tags/module"},{label:"public",permalink:"/tags/public"}],version:"current",frontMatter:{title:"StrapiFS (WIP)",slug:"/api/StrapiFS",tags:["module","public"],toc_min_heading_level:2,toc_max_heading_level:3},sidebar:"api",previous:{title:"Startup Logger",permalink:"/api/StartupLogger"},next:{title:"Strapi server (WIP)",permalink:"/api/strapi-server"}},l={},s=[{value:"Module: StrapiFS",id:"module-strapifs",level:2},{value:"<code>createStrapiFs(strapi)</code>",id:"createstrapifsstrapi",level:3},{value:"<code>strapiFs.writeAppFile(optPath, data)</code>",id:"strapifswriteappfileoptpath-data",level:3},{value:"<code>strapiFs.writePluginFile(plugin, optPath, data)</code>",id:"strapifswritepluginfileplugin-optpath-data",level:3},{value:"<code>strapiFs.removeAppFile(optPath)</code>",id:"strapifsremoveappfileoptpath",level:3},{value:"<code>strapiFs.appendFile(optPath, data)</code>",id:"strapifsappendfileoptpath-data",level:3}],c={toc:s};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"strapi-file-system"},"Strapi File System"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Current state: ",(0,i.kt)("strong",{parentName:"p"},"Stable"))),(0,i.kt)("p",null,"The Strapi FS module is a wrapper around FS NodeJS module to manipulate local files."),(0,i.kt)("h2",{id:"module-strapifs"},"Module: StrapiFS"),(0,i.kt)("h3",{id:"createstrapifsstrapi"},(0,i.kt)("inlineCode",{parentName:"h3"},"createStrapiFs(strapi)")),(0,i.kt)("h3",{id:"strapifswriteappfileoptpath-data"},(0,i.kt)("inlineCode",{parentName:"h3"},"strapiFs.writeAppFile(optPath, data)")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Deprecated")),(0,i.kt)("h3",{id:"strapifswritepluginfileplugin-optpath-data"},(0,i.kt)("inlineCode",{parentName:"h3"},"strapiFs.writePluginFile(plugin, optPath, data)")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Deprecated")),(0,i.kt)("h3",{id:"strapifsremoveappfileoptpath"},(0,i.kt)("inlineCode",{parentName:"h3"},"strapiFs.removeAppFile(optPath)")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Deprecated")),(0,i.kt)("h3",{id:"strapifsappendfileoptpath-data"},(0,i.kt)("inlineCode",{parentName:"h3"},"strapiFs.appendFile(optPath, data)")))}d.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,p=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),m=i,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||p;return a?r.createElement(f,n(n({ref:t},c),{},{components:a})):r.createElement(f,n({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=a.length,n=new Array(p);n[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,n[1]=o;for(var s=2;s<p;s++)n[s]=a[s];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);