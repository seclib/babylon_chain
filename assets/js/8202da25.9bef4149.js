"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[1906],{3905:(n,e,t)=>{t.d(e,{Zo:()=>s,kt:()=>y});var o=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},a=Object.keys(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var d=o.createContext({}),u=function(n){var e=o.useContext(d),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},s=function(n){var e=u(n.components);return o.createElement(d.Provider,{value:e},n.children)},g={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},b=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,a=n.originalType,d=n.parentName,s=l(n,["components","mdxType","originalType","parentName"]),b=u(t),y=r,c=b["".concat(d,".").concat(y)]||b[y]||g[y]||a;return t?o.createElement(c,i(i({ref:e},s),{},{components:t})):o.createElement(c,i({ref:e},s))}));function y(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var a=t.length,i=new Array(a);i[0]=b;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=n,l.mdxType="string"==typeof n?n:r,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}b.displayName="MDXCreateElement"},3167:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=t(7462),r=(t(7294),t(3905));const a={id:"babylond_query_staking_unbounding-delegations-from",sidebar_label:"babylond query staking unbonding-delegations-from",hide_table_of_contents:!0},i="babylond query staking unbonding-delegations-from",l={unversionedId:"cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_unbounding-delegations-from",id:"cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_unbounding-delegations-from",title:"babylond query staking unbonding-delegations-from",description:"Querying all unbonding delegations from a validator.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_staking/Babylond_query_staking_unbounding-delegations-from.md",sourceDirName:"cli/babylond/BabylondQuery/Babylond_query_staking",slug:"/cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_unbounding-delegations-from",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_unbounding-delegations-from",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_staking/Babylond_query_staking_unbounding-delegations-from.md",tags:[],version:"current",frontMatter:{id:"babylond_query_staking_unbounding-delegations-from",sidebar_label:"babylond query staking unbonding-delegations-from",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond query staking unbonding-delegations",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_unbounding-delegations"},next:{title:"babylond query staking validator",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_validator"}},d={},u=[{value:"query staking unbonding-delegations-from command",id:"query-staking-unbonding-delegations-from-command",level:2},{value:"Example Command",id:"example-command",level:3},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],s={toc:u};function g(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,o.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"babylond-query-staking-unbonding-delegations-from"},"babylond query staking unbonding-delegations-from"),(0,r.kt)("p",null,"Querying all unbonding delegations from a validator."),(0,r.kt)("h2",{id:"query-staking-unbonding-delegations-from-command"},"query staking unbonding-delegations-from command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"babylond query staking unbonding-delegations-from [validator-addr] [flags]\n")),(0,r.kt)("h3",{id:"example-command"},"Example Command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ babylond query staking unbonding-delegations-from babylondloper1tthjut3ccd8ay0zduzj64hwre2fxs9loophjj\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --count-total       count total number of records in unbonding delegations to query for\n      --height int        Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help              help for unbonding-delegations-from\n      --limit uint        pagination limit of unbonding delegations to query for (default 100)\n      --node string       <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n      --offset uint       pagination offset of unbonding delegations to query for\n  -o, --output string     Output format (text|json) (default "text")\n      --page uint         pagination page of unbonding delegations to query for. This sets offset to a multiple of limit (default 1)\n      --page-key string   pagination page-key of unbonding delegations to query for\n      --reverse           results are sorted in descending order\n')),(0,r.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}g.isMDXComponent=!0}}]);