"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[3298],{3905:(e,n,r)=>{r.d(n,{Zo:()=>y,kt:()=>s});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),b=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},y=function(e){var n=b(e.components);return t.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,y=c(e,["components","mdxType","originalType","parentName"]),u=b(r),s=a,p=u["".concat(i,".").concat(s)]||u[s]||d[s]||o;return r?t.createElement(p,l(l({ref:n},y),{},{components:r})):t.createElement(p,l({ref:n},y))}));function s(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var b=2;b<o;b++)l[b]=r[b];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5867:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>b});var t=r(7462),a=(r(7294),r(3905));const o={id:"Babylond_query_ibc_channel",sidebar_label:"babylond query ibc channel",hide_table_of_contents:!0},l="babylond query ibc channel",c={unversionedId:"cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel",id:"cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel",title:"babylond query ibc channel",description:"Querying commands for the ibc channel module.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel.md",sourceDirName:"cli/babylond/BabylondQuery/Babylond_query_ibc",slug:"/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel.md",tags:[],version:"current",frontMatter:{id:"Babylond_query_ibc_channel",sidebar_label:"babylond query ibc channel",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond query ibc",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_ibc"},next:{title:"babylond query ibc channel channels",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_channels"}},i={},b=[{value:"query ibc channel commands",id:"query-ibc-channel-commands",level:2},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],y={toc:b};function d(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},y,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"babylond-query-ibc-channel"},"babylond query ibc channel"),(0,a.kt)("p",null,"Querying commands for the ibc channel module."),(0,a.kt)("h2",{id:"query-ibc-channel-commands"},"query ibc channel commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"babylond query ibc channel [flags]\nbabylond query ibc channel [command]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-h, --help   help for channel\n")),(0,a.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}d.isMDXComponent=!0}}]);