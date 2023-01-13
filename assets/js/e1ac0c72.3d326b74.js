"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[2720],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=d(t),u=i,f=b["".concat(c,".").concat(u)]||b[u]||p[u]||o;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},684:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=t(7462),i=(t(7294),t(3905));const o={id:"babylondinit",sidebar_label:"babylond init",hide_table_of_contents:!0},a="babylond init",l={unversionedId:"cli/babylond/babylondinit",id:"cli/babylond/babylondinit",title:"babylond init",description:"Initialize private validator, p2p, genesis, and application configuration files.",source:"@site/docs/cli/babylond/babylondinit.md",sourceDirName:"cli/babylond",slug:"/cli/babylond/babylondinit",permalink:"/docs/cli/babylond/babylondinit",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/babylondinit.md",tags:[],version:"current",frontMatter:{id:"babylondinit",sidebar_label:"babylond init",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond help",permalink:"/docs/cli/babylond/babylondhelp"},next:{title:"babylond keys",permalink:"/docs/cli/babylond/keys/babylondkeys"}},c={},d=[{value:"init command",id:"init-command",level:2},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],s={toc:d};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"babylond-init"},"babylond init"),(0,i.kt)("p",null,"Initialize private validator, p2p, genesis, and application configuration files."),(0,i.kt)("h2",{id:"init-command"},"init command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"babylond init [moniker] [flags]\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      --chain-id string             genesis file chain-id, if left blank will be randomly created\n  -h, --help                        help for init\n      --home string                 node's home directory (default \"/home/<yourSystemUsername>/.babylond\")\n  -o, --overwrite                   overwrite the genesis.json file\n      --recover                     provide seed phrase to recover existing key instead of creating\n      --staking-bond-denom string   genesis file staking bond denomination, if left blank default value is 'stake'\n")),(0,i.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'--log_format string   The logging format (json|plain) (default "plain")\n--log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n --trace               print out full stack trace on errors\n')))}p.isMDXComponent=!0}}]);