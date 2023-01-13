"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[2636],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=l(t),u=a,b=g["".concat(c,".").concat(u)]||g[u]||m[u]||i;return t?o.createElement(b,r(r({ref:n},d),{},{components:t})):o.createElement(b,r({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=g;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=t[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},11226:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=t(87462),a=(t(67294),t(3905));const i={id:"babylond_tx_checkpointing_submit",sidebar_label:"babylond tx checkpointing submit",hide_table_of_contents:!0},r="babylond tx checkpointing submit",s={unversionedId:"cli/babylond/Babylond_tx/Babylond_tx_checkpointing/babylond_tx_checkpointing_submit",id:"cli/babylond/Babylond_tx/Babylond_tx_checkpointing/babylond_tx_checkpointing_submit",title:"babylond tx checkpointing submit",description:"Submit a BLS signature.",source:"@site/docs/cli/babylond/Babylond_tx/Babylond_tx_checkpointing/Babylond_tx_checkpointing_submit.md",sourceDirName:"cli/babylond/Babylond_tx/Babylond_tx_checkpointing",slug:"/cli/babylond/Babylond_tx/Babylond_tx_checkpointing/babylond_tx_checkpointing_submit",permalink:"/docs/cli/babylond/Babylond_tx/Babylond_tx_checkpointing/babylond_tx_checkpointing_submit",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/Babylond_tx/Babylond_tx_checkpointing/Babylond_tx_checkpointing_submit.md",tags:[],version:"current",frontMatter:{id:"babylond_tx_checkpointing_submit",sidebar_label:"babylond tx checkpointing submit",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond tx checkpointing create-validator",permalink:"/docs/cli/babylond/Babylond_tx/Babylond_tx_checkpointing/babylond_tx_checkpointing_create-validator"},next:{title:"babylond tx crisis",permalink:"/docs/cli/babylond/Babylond_tx/babylond_tx_crisis"}},c={},l=[{value:"tx checkpointing submit command",id:"tx-checkpointing-submit-command",level:2},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],d={toc:l};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"babylond-tx-checkpointing-submit"},"babylond tx checkpointing submit"),(0,a.kt)("p",null,"Submit a BLS signature."),(0,a.kt)("h2",{id:"tx-checkpointing-submit-command"},"tx checkpointing submit command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"babylond tx checkpointing submit [epoch_number] [last_commit_hash] [bls_sig] [signer address] [flags]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/kakakepan/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n\nUse "babylond tx checkpointing [command] --help" for more information about a command.\nkakakepan@DESKTOP-58G3HHU:/mnt/c/Users/kakakepan/Documents/Babylond/babylon$ ./build/babylond tx checkpointing create-validator\npanic: could not create directory "": mkdir : no such file or directory\n\ngoroutine 1 [running]:\ngithub.com/tendermint/tendermint/config.EnsureRoot({0x0, 0x0})\n        github.com/tendermint/tendermint@v0.34.24/config/toml.go:35 +0x1f6\ngithub.com/cosmos/cosmos-sdk/server.interceptConfigs(0xc000feb520, {0x2228f87, 0x2ae1}, {0x1ec6660, 0xc0014ed8c0}, 0xc00016cf00)\n        github.com/cosmos/cosmos-sdk@v0.46.6/server/util.go:204 +0x354\ngithub.com/cosmos/cosmos-sdk/server.InterceptConfigsPreRunHandler(0x0?, {0x2228f87, 0x2ae1}, {0x1ec6660, 0xc0014ed8c0}, 0x0?)\n        github.com/cosmos/cosmos-sdk@v0.46.6/server/util.go:137 +0x305\ngithub.com/babylonchain/babylon/cmd/babylond/cmd.NewRootCmd.func1(0xc000fb0900, {0x1?, 0x2bbbeb0?, 0x1?})\n        github.com/babylonchain/babylon/cmd/babylond/cmd/root.go:79 +0x2ae\ngithub.com/tendermint/tendermint/libs/cli.concatCobraCmdFuncs.func1(0xc000fb0900?, {0x3cc75e0, 0x0, 0x0})\n        github.com/tendermint/tendermint@v0.34.24/libs/cli/setup.go:118 +0x62\ngithub.com/spf13/cobra.(*Command).execute(0xc000fb0900, {0x3cc75e0, 0x0, 0x0})\n        github.com/spf13/cobra@v1.6.0/command.go:891 +0x739\ngithub.com/spf13/cobra.(*Command).ExecuteC(0xc0004e6c00)\n        github.com/spf13/cobra@v1.6.0/command.go:1040 +0x3bd\ngithub.com/spf13/cobra.(*Command).Execute(...)\n        github.com/spf13/cobra@v1.6.0/command.go:968\ngithub.com/spf13/cobra.(*Command).ExecuteContext(...)\n        github.com/spf13/cobra@v1.6.0/command.go:961\ngithub.com/cosmos/cosmos-sdk/server/cmd.Execute(0xdd3c638e3ea023cf?, {0x0, 0x0}, {0xc001133a00, 0x19})\n        github.com/cosmos/cosmos-sdk@v0.46.6/server/cmd/execute.go:36 +0x20f\nmain.main()\n        github.com/babylonchain/babylon/cmd/babylond/main.go:18 +0x35\nkakakepan@DESKTOP-58G3HHU:/mnt/c/Users/kakakepan/Documents/Babylond/babylon$ ./build/babylond tx checkpointing create-validator -p\nError: unknown shorthand flag: \'p\' in -p\nUsage:\n  babylond tx checkpointing create-validator [flags]\n\nFlags:\n  -a, --account-number uint                 The account number of the signing account (offline mode only)\n      --amount string                       Amount of coins to bond\n      --aux                                 Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string               Transaction broadcasting mode (sync|async|block) (default "sync")\n      --commission-max-change-rate string   The maximum commission change rate percentage (per day)\n      --commission-max-rate string          The maximum commission rate percentage\n      --commission-rate string              The initial commission rate percentage\n      --details string                      The validator\'s (optional) details\n      --dry-run                             ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string                  Fee granter grants fees for the transaction\n      --fee-payer string                    Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string                         Fees to pay along with transaction; eg: 10uatom\n      --from string                         Name or address of private key with which to sign\n      --gas string                          gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float                adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string                   Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only                       Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                                help for create-validator\n      --home string                         The node home directory\n      --identity string                     The optional identity signature (ex. UPort or Keybase)\n      --ip string                           The node\'s public IP. It takes effect only when used in combination with --generate-only\n      --keyring-backend string              Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "os")\n      --keyring-dir string                  The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                              Use a connected Ledger device\n      --min-self-delegation string          The minimum self delegation required on the validator\n      --moniker string                      The validator\'s name\n      --node string                         <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")\n      --node-id string                      The node\'s ID\n      --note string                         Note to add a description to the transaction (previously --memo)\n      --offline                             Offline mode (does not allow any online functionality)\n  -o, --output string                       Output format (text|json) (default "json")\n      --pubkey string                       The validator\'s Protobuf JSON encoded public key\n      --security-contact string             The validator\'s (optional) security contact email\n  -s, --sequence uint                       The sequence number of the signing account (offline mode only)\n      --sign-mode string                    Choose sign mode (direct|amino-json|direct-aux), this is an advanced feature\n      --timeout-height uint                 Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string                          Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n      --website string                      The validator\'s (optional) website\n  -y, --yes                                 Skip tx broadcasting prompt confirmation\n\nGlobal Flags:\n      --chain-id string     The network chain ID\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n\nkakakepan@DESKTOP-58G3HHU:/mnt/c/Users/kakakepan/Documents/Babylond/babylon$ ./build/babylond tx checkpointing submit -y\nError: accepts 4 arg(s), received 0\nUsage:\n  babylond tx checkpointing submit [epoch_number] [last_commit_hash] [bls_sig] [signer address] [flags]\n\nFlags:\n  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --aux                      Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async|block) (default "sync")\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                     help for submit\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "os")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                   Use a connected Ledger device\n      --node string              <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -o, --output string            Output format (text|json) (default "json")\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux), this is an advanced feature\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n')),(0,a.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}m.isMDXComponent=!0}}]);