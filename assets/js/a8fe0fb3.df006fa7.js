"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[2044],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=d(n),u=r,b=g["".concat(s,".").concat(u)]||g[u]||f[u]||o;return n?a.createElement(b,i(i({ref:t},c),{},{components:n})):a.createElement(b,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4270:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={id:"babylond_tx_feegrant_grant",sidebar_label:"babylond tx feegrant grant",hide_table_of_contents:!0},i="babylond tx feegrant grant",l={unversionedId:"cli/babylond/Babylond_tx/Babylond_tx_feegrant/babylond_tx_feegrant_grant",id:"cli/babylond/Babylond_tx/Babylond_tx_feegrant/babylond_tx_feegrant_grant",title:"babylond tx feegrant grant",description:"Grant authorization for fee allowance to an address.",source:"@site/docs/cli/babylond/Babylond_tx/Babylond_tx_feegrant/Babylond_tx_feegrant_grant.md",sourceDirName:"cli/babylond/Babylond_tx/Babylond_tx_feegrant",slug:"/cli/babylond/Babylond_tx/Babylond_tx_feegrant/babylond_tx_feegrant_grant",permalink:"/docs/cli/babylond/Babylond_tx/Babylond_tx_feegrant/babylond_tx_feegrant_grant",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/Babylond_tx/Babylond_tx_feegrant/Babylond_tx_feegrant_grant.md",tags:[],version:"current",frontMatter:{id:"babylond_tx_feegrant_grant",sidebar_label:"babylond tx feegrant grant",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond tx feegrant",permalink:"/docs/cli/babylond/Babylond_tx/babylond_tx_feegrant"},next:{title:"babylond tx feegrant revoke",permalink:"/docs/cli/babylond/Babylond_tx/Babylond_tx_feegrant/babylond_tx_feegrant_revoke"}},s={},d=[{value:"tx feegrant grant command",id:"tx-feegrant-grant-command",level:2},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],c={toc:d};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"babylond-tx-feegrant-grant"},"babylond tx feegrant grant"),(0,r.kt)("p",null,"Grant authorization for fee allowance to an address."),(0,r.kt)("h2",{id:"tx-feegrant-grant-command"},"tx feegrant grant command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"babylond tx feegrant grant [granter_key_or_address] [grantee] [flags]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  -a, --account-number uint        The account number of the signing account (offline mode only)\n      --allowed-messages strings   Set of allowed messages for fee allowance\n      --aux                        Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string      Transaction broadcasting mode (sync|async|block) (default "sync")\n      --dry-run                    ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --expiration string          The RFC 3339 timestamp after which the grant expires for the user\n      --fee-granter string         Fee granter grants fees for the transaction\n      --fee-payer string           Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string                Fees to pay along with transaction; eg: 10uatom\n      --from string                Name or address of private key with which to sign\n      --gas string                 gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float       adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string          Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only              Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                       help for grant\n      --keyring-backend string     Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "os")\n      --keyring-dir string         The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                     Use a connected Ledger device\n      --node string                <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")\n      --note string                Note to add a description to the transaction (previously --memo)\n      --offline                    Offline mode (does not allow any online functionality)\n  -o, --output string              Output format (text|json) (default "json")\n      --period int                 period specifies the time duration(in seconds) in which period_limit coins can be spent before that allowance is reset (ex: 3600)\n      --period-limit string        period limit specifies the maximum number of coins that can be spent in the period\n  -s, --sequence uint              The sequence number of the signing account (offline mode only)\n      --sign-mode string           Choose sign mode (direct|amino-json|direct-aux), this is an advanced feature\n      --spend-limit string         Spend limit specifies the max limit can be used, if not mentioned there is no limit\n      --timeout-height uint        Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string                 Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n  -y, --yes                        Skip tx broadcasting prompt confirmation\n')),(0,r.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}f.isMDXComponent=!0}}]);