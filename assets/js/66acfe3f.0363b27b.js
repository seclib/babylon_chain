"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[4594],{3905:(e,t,n)=>{n.d(t,{Zo:()=>b,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,b=a(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,y=u["".concat(s,".").concat(d)]||u[d]||p[d]||c;return n?o.createElement(y,i(i({ref:t},b),{},{components:n})):o.createElement(y,i({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var l=2;l<c;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9252:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const c={id:"babylond_query_btccheckpoint_epoch_submissions",sidebar_label:"babylond query btccheckpoint epoch-submissions",hide_table_of_contents:!0},i="babylond query btccheckpoint epoch-submissions",a={unversionedId:"cli/babylond/BabylondQuery/Babylond_query_btccheckpoint/babylond_query_btccheckpoint_epoch_submissions",id:"cli/babylond/BabylondQuery/Babylond_query_btccheckpoint/babylond_query_btccheckpoint_epoch_submissions",title:"babylond query btccheckpoint epoch-submissions",description:"Checkpoint all the submissions for the given epoch.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_btccheckpoint/Babylond_query_btccheckpoint_epoch_submissions.md",sourceDirName:"cli/babylond/BabylondQuery/Babylond_query_btccheckpoint",slug:"/cli/babylond/BabylondQuery/Babylond_query_btccheckpoint/babylond_query_btccheckpoint_epoch_submissions",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_btccheckpoint/babylond_query_btccheckpoint_epoch_submissions",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_btccheckpoint/Babylond_query_btccheckpoint_epoch_submissions.md",tags:[],version:"current",frontMatter:{id:"babylond_query_btccheckpoint_epoch_submissions",sidebar_label:"babylond query btccheckpoint epoch-submissions",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond query btccheckpoint btc-height",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_btccheckpoint/babylond_query_btccheckpoint_btc-height"},next:{title:"babylond query btccheckpoint params",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_btccheckpoint/babylond_query_btccheckpoint_params"}},s={},l=[{value:"query btccheckpoint epoch-submissions command",id:"query-btccheckpoint-epoch-submissions-command",level:2},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],b={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"babylond-query-btccheckpoint-epoch-submissions"},"babylond query btccheckpoint epoch-submissions"),(0,r.kt)("p",null,"Checkpoint all the submissions for the given epoch."),(0,r.kt)("h2",{id:"query-btccheckpoint-epoch-submissions-command"},"query btccheckpoint epoch-submissions command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"babylond query btccheckpoint epoch-submissions <epoch_number> [flags]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --height int      Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help            help for epoch-submissions\n      --node string     <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string   Output format (text|json) (default "text")\n')),(0,r.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}p.isMDXComponent=!0}}]);