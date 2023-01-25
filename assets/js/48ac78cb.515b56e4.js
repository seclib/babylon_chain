"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[1849],{3905:(t,e,o)=>{o.d(e,{Zo:()=>y,kt:()=>s});var n=o(7294);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var u=n.createContext({}),d=function(t){var e=n.useContext(u),o=e;return t&&(o="function"==typeof t?t(e):a(a({},e),t)),o},y=function(t){var e=d(t.components);return n.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},b=n.forwardRef((function(t,e){var o=t.components,r=t.mdxType,i=t.originalType,u=t.parentName,y=l(t,["components","mdxType","originalType","parentName"]),b=d(o),s=r,m=b["".concat(u,".").concat(s)]||b[s]||c[s]||i;return o?n.createElement(m,a(a({ref:e},y),{},{components:o})):n.createElement(m,a({ref:e},y))}));function s(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=o.length,a=new Array(i);a[0]=b;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:r,a[1]=l;for(var d=2;d<i;d++)a[d]=o[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}b.displayName="MDXCreateElement"},4980:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=o(7462),r=(o(7294),o(3905));const i={id:"babylond_query_distribution_community-pool",sidebar_label:"babylond query distribution community-pool",hide_table_of_contents:!0},a="babylond query distribution community-pool",l={unversionedId:"cli/babylond/BabylondQuery/Babylond_query_distribution/babylond_query_distribution_community-pool",id:"cli/babylond/BabylondQuery/Babylond_query_distribution/babylond_query_distribution_community-pool",title:"babylond query distribution community-pool",description:"Querying the amount of coins in the community pool.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_distribution/Babylond_query_distribution_community-pool.md",sourceDirName:"cli/babylond/BabylondQuery/Babylond_query_distribution",slug:"/cli/babylond/BabylondQuery/Babylond_query_distribution/babylond_query_distribution_community-pool",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_distribution/babylond_query_distribution_community-pool",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_distribution/Babylond_query_distribution_community-pool.md",tags:[],version:"current",frontMatter:{id:"babylond_query_distribution_community-pool",sidebar_label:"babylond query distribution community-pool",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond query distribution commission",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_distribution/babylond_query_distribution_commission"},next:{title:"babylond query distribution params",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_distribution/babylond_query_distribution_params"}},u={},d=[{value:"query distribution community-pool command",id:"query-distribution-community-pool-command",level:2},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],y={toc:d};function c(t){let{components:e,...o}=t;return(0,r.kt)("wrapper",(0,n.Z)({},y,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"babylond-query-distribution-community-pool"},"babylond query distribution community-pool"),(0,r.kt)("p",null,"Querying the amount of coins in the community pool."),(0,r.kt)("h2",{id:"query-distribution-community-pool-command"},"query distribution community-pool command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"babylond query distribution community-pool [flags]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --height int      Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help            help for community-pool\n      --node string     <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string   Output format (text|json) (default "text")\n')),(0,r.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}c.isMDXComponent=!0}}]);