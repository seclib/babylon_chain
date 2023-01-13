"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[2653],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>b});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(t),b=o,p=s["".concat(i,".").concat(b)]||s[b]||y[b]||a;return t?r.createElement(p,c(c({ref:n},d),{},{components:t})):r.createElement(p,c({ref:n},d))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=s;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var u=2;u<a;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},4914:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>y,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const a={id:"babylond_query_account",sidebar_label:"babylond query account",hide_table_of_contents:!0},c="babylond query account",l={unversionedId:"cli/babylond/BabylondQuery/babylond_query_account",id:"cli/babylond/BabylondQuery/babylond_query_account",title:"babylond query account",description:"Querying for an account by the specified address.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_account.md",sourceDirName:"cli/babylond/BabylondQuery",slug:"/cli/babylond/BabylondQuery/babylond_query_account",permalink:"/docs/cli/babylond/BabylondQuery/babylond_query_account",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_account.md",tags:[],version:"current",frontMatter:{id:"babylond_query_account",sidebar_label:"babylond query account",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond Query",permalink:"/docs/cli/babylond/babylond_query"},next:{title:"babylond query auth",permalink:"/docs/cli/babylond/BabylondQuery/babylond_query_auth"}},i={},u=[{value:"query account command",id:"query-account-command",level:2},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],d={toc:u};function y(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"babylond-query-account"},"babylond query account"),(0,o.kt)("p",null,"Querying for an account by the specified address."),(0,o.kt)("h2",{id:"query-account-command"},"query account command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"babylond query account [address] [flags]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --height int      Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help            help for account\n      --node string     <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string   Output format (text|json) (default "text")\n')),(0,o.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'--chain-id string     The network chain ID\n--home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n--log_format string   The logging format (json|plain) (default "plain")\n--log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n--trace               print out full stack trace on errors\n')))}y.isMDXComponent=!0}}]);