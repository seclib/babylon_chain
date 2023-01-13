"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[2378],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>b});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(t),b=a,p=m["".concat(s,".").concat(b)]||m[b]||y[b]||o;return t?r.createElement(p,l(l({ref:n},d),{},{components:t})):r.createElement(p,l({ref:n},d))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1727:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={id:"babylondkeysrename",sidebar_label:"babylond keys rename",hide_table_of_contents:!0},l="babylond keys rename",i={unversionedId:"cli/babylond/keys/babylondkeysrename",id:"cli/babylond/keys/babylondkeysrename",title:"babylond keys rename",description:"Rename an existing key name that is stored on the local keybase.",source:"@site/docs/cli/babylond/keys/babylondkeysrename.md",sourceDirName:"cli/babylond/keys",slug:"/cli/babylond/keys/babylondkeysrename",permalink:"/docs/cli/babylond/keys/babylondkeysrename",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/keys/babylondkeysrename.md",tags:[],version:"current",frontMatter:{id:"babylondkeysrename",sidebar_label:"babylond keys rename",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond keys parse",permalink:"/docs/cli/babylond/keys/babylondkeysparse"},next:{title:"babylond keys show",permalink:"/docs/cli/babylond/keys/babylondkeysshow"}},s={},c=[{value:"keys rename command",id:"keys-rename-command",level:2},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],d={toc:c};function y(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"babylond-keys-rename"},"babylond keys rename"),(0,a.kt)("p",null,"Rename an existing key name that is stored on the local keybase."),(0,a.kt)("h2",{id:"keys-rename-command"},"keys rename command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"babylond keys rename <old_name> <new_name> [flags]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -h, --help   help for rename\n  -y, --yes    Skip confirmation prompt when renaming offline or ledger key references\n\n")),(0,a.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --home string              The application home directory (default "/home/<yourSystemUsername>/.babylond")\n      --keyring-backend string   Select keyring\'s backend (os|file|test) (default "os")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --log_format string        The logging format (json|plain) (default "plain")\n      --log_level string         The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --output string            Output format (text|json) (default "text")\n      --trace                    print out full stack trace on errors\n')))}y.isMDXComponent=!0}}]);