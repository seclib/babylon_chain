"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[3243],{3905:(e,o,t)=>{t.d(o,{Zo:()=>s,kt:()=>c});var n=t(7294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),p=function(e){var o=n.useContext(d),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},s=function(e){var o=p(e.components);return n.createElement(d.Provider,{value:o},e.children)},y={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},u=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),c=r,b=u["".concat(d,".").concat(c)]||u[c]||y[c]||a;return t?n.createElement(b,i(i({ref:o},s),{},{components:t})):n.createElement(b,i({ref:o},s))}));function c(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var d in o)hasOwnProperty.call(o,d)&&(l[d]=o[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7405:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const a={id:"babylond_query_gov_deposit",sidebar_label:"babylond query gov deposit",hide_table_of_contents:!0},i="babylond query gov deposit",l={unversionedId:"cli/babylond/BabylondQuery/Babylond_query_gov/babylond_query_gov_deposit",id:"cli/babylond/BabylondQuery/Babylond_query_gov/babylond_query_gov_deposit",title:"babylond query gov deposit",description:"Querying details for a deposit on a proposal by the specified identifier.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_gov/Babylond_query_gov_deposit.md",sourceDirName:"cli/babylond/BabylondQuery/Babylond_query_gov",slug:"/cli/babylond/BabylondQuery/Babylond_query_gov/babylond_query_gov_deposit",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_gov/babylond_query_gov_deposit",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_gov/Babylond_query_gov_deposit.md",tags:[],version:"current",frontMatter:{id:"babylond_query_gov_deposit",sidebar_label:"babylond query gov deposit",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond query gov",permalink:"/docs/cli/babylond/BabylondQuery/babylond_query_gov"},next:{title:"babylond query gov deposits",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_gov/babylond_query_gov_deposits"}},d={},p=[{value:"query gov deposit command",id:"query-gov-deposit-command",level:2},{value:"Example Command",id:"example-command",level:3},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],s={toc:p};function y(e){let{components:o,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"babylond-query-gov-deposit"},"babylond query gov deposit"),(0,r.kt)("p",null,"Querying details for a deposit on a proposal by the specified identifier."),(0,r.kt)("h2",{id:"query-gov-deposit-command"},"query gov deposit command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"babylond query gov deposit [proposal-id] [depositer-addr] [flags]\n")),(0,r.kt)("h3",{id:"example-command"},"Example Command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ babylond query gov deposit 2 cosmos1skjwj5whet0lpe65opo4rpq03hjxlwd123456\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --height int      Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help            help for deposit\n      --node string     <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string   Output format (text|json) (default "text")\n')),(0,r.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}y.isMDXComponent=!0}}]);