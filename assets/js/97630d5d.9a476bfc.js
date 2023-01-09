"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[7157],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(t),u=o,y=s["".concat(i,".").concat(u)]||s[u]||b[u]||a;return t?r.createElement(y,l(l({ref:n},d),{},{components:t})):r.createElement(y,l({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=s;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},2260:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>b,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={id:"babylond",sidebar_label:"Babylond App",hide_table_of_contents:!0},l="Babylond App",c={unversionedId:"cli/babylond/babylond",id:"cli/babylond/babylond",title:"Babylond App",description:"Babylon Application",source:"@site/docs/cli/babylond/babylond.md",sourceDirName:"cli/babylond",slug:"/cli/babylond/",permalink:"/docs/cli/babylond/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/babylond.md",tags:[],version:"current",frontMatter:{id:"babylond",sidebar_label:"Babylond App",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"CLI Command Overview",permalink:"/docs/cli/babylond/cli"},next:{title:"Babylond_add-genesis-account",permalink:"/docs/cli/babylond/babylondaddgenesisaccount"}},i={},p=[],d={toc:p};function b(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"babylond-app"},"Babylond App"),(0,o.kt)("p",null,"Babylon Application"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'-h, --help                help for babylond\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"babylond [command] --help" for more information about a command.\n')))}b.isMDXComponent=!0}}]);