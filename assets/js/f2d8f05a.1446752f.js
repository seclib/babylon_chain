"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[6680],{3905:(e,n,r)=>{r.d(n,{Zo:()=>y,kt:()=>s});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),b=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},y=function(e){var n=b(e.components);return t.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),u=b(r),s=o,p=u["".concat(c,".").concat(s)]||u[s]||d[s]||a;return r?t.createElement(p,l(l({ref:n},y),{},{components:r})):t.createElement(p,l({ref:n},y))}));function s(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var b=2;b<a;b++)l[b]=r[b];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5246:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>b});var t=r(7462),o=(r(7294),r(3905));const a={id:"Babylond_query_ibc_client",sidebar_label:"babylond query ibc client",hide_table_of_contents:!0},l="babylond query ibc client",i={unversionedId:"cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client",id:"cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client",title:"babylond query ibc client",description:"Querying subcommands for the IBC client module.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client.md",sourceDirName:"cli/babylond/BabylondQuery/Babylond_query_ibc",slug:"/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client.md",tags:[],version:"current",frontMatter:{id:"Babylond_query_ibc_client",sidebar_label:"babylond query ibc client",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond query ibc channel unreceived-packets",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_unreceived-packets"},next:{title:"babylond query ibc client consensus-state",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client/Babylond_query_ibc_client_consensus-state"}},c={},b=[{value:"query ibc client commands",id:"query-ibc-client-commands",level:2},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],y={toc:b};function d(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},y,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"babylond-query-ibc-client"},"babylond query ibc client"),(0,o.kt)("p",null,"Querying subcommands for the IBC client module."),(0,o.kt)("h2",{id:"query-ibc-client-commands"},"query ibc client commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"babylond query ibc client [flags]\nbabylond query ibc client [command]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-h, --help   help for client\n")),(0,o.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}d.isMDXComponent=!0}}]);