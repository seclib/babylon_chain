"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[8106],{3905:(e,n,t)=>{t.d(n,{Zo:()=>y,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),b=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},y=function(e){var n=b(e.components);return a.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),u=b(t),m=r,s=u["".concat(i,".").concat(m)]||u[m]||c[m]||o;return t?a.createElement(s,d(d({ref:n},y),{},{components:t})):a.createElement(s,d({ref:n},y))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,d=new Array(o);d[0]=u;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,d[1]=l;for(var b=2;b<o;b++)d[b]=t[b];return a.createElement.apply(null,d)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},26234:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>b});var a=t(87462),r=(t(67294),t(3905));const o={id:"babylond_query_bank_denom_metadata",sidebar_label:"babylond query bank denom-metadata",hide_table_of_contents:!0},d="babylond query bank denom-metadata",l={unversionedId:"cli/babylond/BabylondQuery/Babylond_query_bank/babylond_query_bank_denom_metadata",id:"cli/babylond/BabylondQuery/Babylond_query_bank/babylond_query_bank_denom_metadata",title:"babylond query bank denom-metadata",description:"Querying the client metadata for the coin denominations.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_bank/Babylond_query_bank_denom_metadata.md",sourceDirName:"cli/babylond/BabylondQuery/Babylond_query_bank",slug:"/cli/babylond/BabylondQuery/Babylond_query_bank/babylond_query_bank_denom_metadata",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_bank/babylond_query_bank_denom_metadata",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_bank/Babylond_query_bank_denom_metadata.md",tags:[],version:"current",frontMatter:{id:"babylond_query_bank_denom_metadata",sidebar_label:"babylond query bank denom-metadata",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond query bank balances",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_bank/babylond_query_bank_balances"},next:{title:"babylond query bank total",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_bank/babylond_query_bank_total"}},i={},b=[{value:"query bank denom-metadata command",id:"query-bank-denom-metadata-command",level:2},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],y={toc:b};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"babylond-query-bank-denom-metadata"},"babylond query bank denom-metadata"),(0,r.kt)("p",null,"Querying the client metadata for the coin denominations."),(0,r.kt)("h2",{id:"query-bank-denom-metadata-command"},"query bank denom-metadata command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"babylond query bank denom-metadata [flags]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --denom string    The specific denomination to query client metadata for\n      --height int      Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help            help for denom-metadata\n      --node string     <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string   Output format (text|json) (default "text")\n')),(0,r.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}c.isMDXComponent=!0}}]);