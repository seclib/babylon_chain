"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[4715],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(t),f=a,h=m["".concat(s,".").concat(f)]||m[f]||c[f]||r;return t?i.createElement(h,o(o({ref:n},d),{},{components:t})):i.createElement(h,o({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9023:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=t(87462),a=(t(67294),t(3905));const r={id:"finality-provider",title:"Finality Provider",sidebar_label:"Finality Provider"},o=void 0,l={unversionedId:"user-guides/finality-providers/finality-provider",id:"user-guides/finality-providers/finality-provider",title:"Finality Provider",description:"This software is unreleased; CLI options may change in the official release.",source:"@site/docs/user-guides/finality-providers/finality-provider.md",sourceDirName:"user-guides/finality-providers",slug:"/user-guides/finality-providers/finality-provider",permalink:"/docs/user-guides/finality-providers/finality-provider",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user-guides/finality-providers/finality-provider.md",tags:[],version:"current",frontMatter:{id:"finality-provider",title:"Finality Provider",sidebar_label:"Finality Provider"},sidebar:"docs",previous:{title:"EOTS Manager",permalink:"/docs/user-guides/finality-providers/eots-manager"},next:{title:"Developer Guides",permalink:"/docs/developer-guides/overview"}},s={},p=[{value:"1. Overview",id:"1-overview",level:2},{value:"2. Configuration",id:"2-configuration",level:2},{value:"3. Starting the Finality Provider Daemon",id:"3-starting-the-finality-provider-daemon",level:2},{value:"4. Create and Register a Finality Provider",id:"4-create-and-register-a-finality-provider",level:2}],d={toc:p};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This software is unreleased; CLI options may change in the official release.")),(0,a.kt)("h2",{id:"1-overview"},"1. Overview"),(0,a.kt)("p",null,"The Finality Provider Daemon is responsible for\nmonitoring for new Babylon blocks,\ncommitting public randomness for the blocks it\nintends to provide finality signatures for, and\nsubmitting finality signatures."),(0,a.kt)("p",null,"The daemon can manage and perform the following operations for multiple\nfinality providers:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Creation and Registration"),": Creates and registers finality\nproviders to Babylon."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"EOTS Randomness Commitment"),": The daemon monitors the Babylon chain and\ncommits EOTS public randomness for every Babylon block each\nfinality provider intends to vote for. The commit intervals can be specified\nin the configuration.\nThe EOTS public randomness is retrieved through the finality provider daemon's\nconnection with the ",(0,a.kt)("a",{parentName:"li",href:"/docs/user-guides/finality-providers/eots-manager"},"EOTS daemon"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Finality Votes Submission"),": The daemon monitors the Babylon chain\nand produces finality votes for each block each maintained finality provider\nhas committed to vote for.")),(0,a.kt)("p",null,"The daemon is controlled by the ",(0,a.kt)("inlineCode",{parentName:"p"},"fpd")," tool.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"fpcli")," tool implements commands for interacting with the daemon."),(0,a.kt)("h2",{id:"2-configuration"},"2. Configuration"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"fpd init")," command initializes a home directory for the\nfinality provider daemon.\nThis directory is created in the default home location or in a\nlocation specified by the ",(0,a.kt)("inlineCode",{parentName:"p"},"--home")," flag."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ fpd init --home /path/to/fpd/home/\n")),(0,a.kt)("p",null,"After initialization, the home directory will have the following structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ls /path/to/fpd/home/\n  \u251c\u2500\u2500 fpd.conf # Fpd-specific configuration file.\n  \u251c\u2500\u2500 logs     # Fpd logs\n")),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"--home")," flag is not specified, then the default home directory\nwill be used. For different operating systems, those are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"MacOS")," ",(0,a.kt)("inlineCode",{parentName:"li"},"~/Library/Application Support/Fpd")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Linux")," ",(0,a.kt)("inlineCode",{parentName:"li"},"~/.Fpd")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Windows")," ",(0,a.kt)("inlineCode",{parentName:"li"},"C:\\Users\\<username>\\AppData\\Local\\Fpd"))),(0,a.kt)("p",null,"Below are some important parameters of the ",(0,a.kt)("inlineCode",{parentName:"p"},"fpd.conf")," file."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),":\nThe finality provider daemon requires the existence of a keyring that contains\nan account with Babylon token funds to pay for transactions.\nThe configuration below requires to point to the path where this keyring is stored\nand specify the account name under the ",(0,a.kt)("inlineCode",{parentName:"p"},"KeyDirectory")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Key")," config values respectively."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Address of the EOTS Daemon\nEOTSManagerAddress = 127.0.0.1:15813\n\n# Babylon specific parameters\n\n# Babylon chain ID\nChainID = chain-test\n\n# Babylon node RPC endpoint\nRPCAddr = http://localhost:26657\n\n# Babylon node gRPC endpoint\nGRPCAddr = https://localhost:9090\n\n# Name of the key in the keyring to use for signing transactions\nKey = <finality-provider-key-name>\n\n# Type of keyring to use,\n# supported backends - (os|file|kwallet|pass|test|memory)\n# ref https://docs.cosmos.network/v0.46/run-node/keyring.html#available-backends-for-the-keyring\nKeyringBackend = test\n\n# Directory where keys will be retrieved from and stored\nKeyDirectory = /path/to/fpd/home\n")),(0,a.kt)("p",null,"To see the complete list of configuration options, check the ",(0,a.kt)("inlineCode",{parentName:"p"},"fpd.conf")," file."),(0,a.kt)("h2",{id:"3-starting-the-finality-provider-daemon"},"3. Starting the Finality Provider Daemon"),(0,a.kt)("p",null,"You can start the finality provider daemon using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ fpd --home /path/to/fpd/home\n")),(0,a.kt)("p",null,"This will start the RPC server at the address specified in the configuration under\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"RawRPCListeners")," field. A custom address can also be specified using\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpclisten")," flag."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ fpd --rpclisten \'localhost:8082\'\n\ntime="2023-11-26T16:37:00-05:00" level=info msg="successfully connected to a remote EOTS manager at 127.0.0.1:8081"\ntime="2023-11-26T16:37:00-05:00" level=info msg="Starting Finality Provider App"\ntime="2023-11-26T16:37:00-05:00" level=info msg="Version: 0.2.2-alpha commit=, build=production, logging=default, debuglevel=info"\ntime="2023-11-26T16:37:00-05:00" level=info msg="Starting RPC Server"\ntime="2023-11-26T16:37:00-05:00" level=info msg="RPC server listening on 127.0.0.1:8082"\ntime="2023-11-26T16:37:00-05:00" level=info msg="Finality Provider Daemon is fully active!"\n')),(0,a.kt)("p",null,"All the available CLI options can be viewed using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," flag. These options\ncan also be set in the configuration file."),(0,a.kt)("h2",{id:"4-create-and-register-a-finality-provider"},"4. Create and Register a Finality Provider"),(0,a.kt)("p",null,"A finality provider named ",(0,a.kt)("inlineCode",{parentName:"p"},"my-finality-provider")," can be created in the internal\nstorage (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/etcd-io/bbolt"},"bolt db"),")\nthrough the ",(0,a.kt)("inlineCode",{parentName:"p"},"fpcli create-finality-provider")," command.\nThis finality provider is associated with a BTC public key which\nserves as its unique identifier and\na Babylon account to which staking rewards will be directed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ fpcli create-finality-provider --key-name my-finality-provider \\\n                --chain-id chain-test --passphrase mypassphrase\n{\n    "btc_pk": "903fab42070622c551b188c983ce05a31febcab300244daf7d752aba2173e786"\n}\n')),(0,a.kt)("p",null,"The finality provider can be registered with Babylon through\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"register-finality-provider")," command.\nThe output contains the hash of the Babylon\nfinality provider registration transaction."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ fpcli register-finality-provider \\\n                 --btc-pk 903fab42070622c551b188c983ce05a31febcab300244daf7d752aba\n{\n    "tx_hash": "800AE5BBDADE974C5FA5BD44336C7F1A952FAB9F5F9B43F7D4850BA449319BAA"\n}\n')),(0,a.kt)("p",null,"To verify that your finality provider has been created,\nwe can check the finality providers that are managed by the daemon and their status.\nThese can be listed through the ",(0,a.kt)("inlineCode",{parentName:"p"},"fpcli list-finality-providers")," command.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"status")," field can receive the following values:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1"),": The finality provider is active and has received no delegations yet"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"2"),": The finality provider is active and has staked BTC tokens"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"3"),": The finality provider is inactive (i.e. had staked BTC tokens in the past but not\nanymore OR has been slashed)")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"last_committed_height")," field is the Babylon height up to which the finality provider\nhas committed EOTS randomness"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ fpcli list-finality-providers\n{\n    "finality-providers": [\n        ...\n        {\n            "babylon_pk_hex": "0251259b5c88d6ac79d86615220a8111ebb238047df0689357274f004fba3e5a89",\n            "btc_pk_hex": "903fab42070622c551b188c983ce05a31febcab300244daf7d752aba2173e786",\n            "last_committed_height": 265,\n            "status": 1\n        }\n    ]\n}\n')))}c.isMDXComponent=!0}}]);