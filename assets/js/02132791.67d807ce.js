"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[7734],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=d(n),m=a,h=f["".concat(s,".").concat(m)]||f[m]||c[m]||r;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},44840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const r={id:"finality-provider",title:"Finality Provider",sidebar_label:"Finality Provider"},o=void 0,l={unversionedId:"user-guides/btc-staking-testnet/finality-providers/finality-provider",id:"user-guides/btc-staking-testnet/finality-providers/finality-provider",title:"Finality Provider",description:"1. Overview",source:"@site/docs/user-guides/btc-staking-testnet/finality-providers/finality-provider.md",sourceDirName:"user-guides/btc-staking-testnet/finality-providers",slug:"/user-guides/btc-staking-testnet/finality-providers/finality-provider",permalink:"/docs/user-guides/btc-staking-testnet/finality-providers/finality-provider",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user-guides/btc-staking-testnet/finality-providers/finality-provider.md",tags:[],version:"current",frontMatter:{id:"finality-provider",title:"Finality Provider",sidebar_label:"Finality Provider"},sidebar:"docs",previous:{title:"EOTS Manager",permalink:"/docs/user-guides/btc-staking-testnet/finality-providers/eots-manager"},next:{title:"Stake with BTC Staker CLI",permalink:"/docs/user-guides/btc-staking-testnet/become-btc-staker"}},s={},d=[{value:"1. Overview",id:"1-overview",level:2},{value:"2. Configuration",id:"2-configuration",level:2},{value:"3. Add key for the consumer chain",id:"3-add-key-for-the-consumer-chain",level:2},{value:"4. Starting the Finality Provider Daemon",id:"4-starting-the-finality-provider-daemon",level:2},{value:"5. Create and Register a Finality Provider",id:"5-create-and-register-a-finality-provider",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-overview"},"1. Overview"),(0,a.kt)("p",null,"The Finality Provider Daemon is responsible for monitoring for new Babylon blocks,\ncommitting public randomness for the blocks it intends to provide finality signatures\nfor, and submitting finality signatures."),(0,a.kt)("p",null,"The daemon can manage and perform the following operations for multiple finality\nproviders:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Creation and Registration"),": Creates and registers finality providers to\nBabylon."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"EOTS Randomness Commitment"),": The daemon monitors the Babylon chain and commits\nEOTS public randomness for every Babylon block each finality provider intends to\nvote for. The commit intervals can be specified in the configuration. The EOTS\npublic randomness is retrieved through the finality provider daemon's connection\nwith the ",(0,a.kt)("a",{parentName:"li",href:"/docs/user-guides/btc-staking-testnet/finality-providers/eots-manager"},"EOTS daemon"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Finality Votes Submission"),": The daemon monitors the Babylon chain and produces\nfinality votes for each block each maintained finality provider has committed to\nvote for.")),(0,a.kt)("p",null,"The daemon is controlled by the ",(0,a.kt)("inlineCode",{parentName:"p"},"fpd")," tool. The ",(0,a.kt)("inlineCode",{parentName:"p"},"fpcli")," tool implements commands for\ninteracting with the daemon."),(0,a.kt)("h2",{id:"2-configuration"},"2. Configuration"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"fpd init")," command initializes a home directory for the finality provider daemon.\nThis directory is created in the default home location or in a location specified by\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"--home")," flag."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"fpd init --home /path/to/fpd/home/\n")),(0,a.kt)("p",null,"After initialization, the home directory will have the following structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ls /path/to/fpd/home/\n  \u251c\u2500\u2500 fpd.conf # Fpd-specific configuration file.\n  \u251c\u2500\u2500 logs     # Fpd logs\n")),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"--home")," flag is not specified, then the default home directory will be used.\nFor different operating systems, those are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"MacOS")," ",(0,a.kt)("inlineCode",{parentName:"li"},"~/Users/<username>/Library/Application Support/Fpd")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Linux")," ",(0,a.kt)("inlineCode",{parentName:"li"},"~/.Fpd")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Windows")," ",(0,a.kt)("inlineCode",{parentName:"li"},"C:\\Users\\<username>\\AppData\\Local\\Fpd"))),(0,a.kt)("p",null,"Below are some important parameters of the ",(0,a.kt)("inlineCode",{parentName:"p"},"fpd.conf")," file."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),":\nThe configuration below requires to point to the path where this keyring is\nstored ",(0,a.kt)("inlineCode",{parentName:"p"},"KeyDirectory"),". This ",(0,a.kt)("inlineCode",{parentName:"p"},"Key")," field stores the key name used for interacting with\nthe consumer chain and will be specified along with the\n",(0,a.kt)("inlineCode",{parentName:"p"},"KeyringBackend")," field in the next ",(0,a.kt)("a",{parentName:"p",href:"#3-add-key-for-the-consumer-chain"},"step"),". So we\ncan ignore the setting of the two fields in this step."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[Application Options]\n# RPC Address of the EOTS Daemon\nEOTSManagerAddress = 127.0.0.1:12582\n\n# RPC Address of the Finality Provider Daemon\nRpcListener = 127.0.0.1:12581\n\n[babylon]\n# Name of the key to sign transactions with\nKey = <finality-provider-key-name>\n\n# Chain id of the chain to connect to\n# Please verify the `ChainID` from the Babylon RPC node https://rpc.testnet3.babylonchain.io/status\nChainID = bbn-test-3\n\n# RPC Address of Babylon node\nRPCAddr = http://127.0.0.1:26657\n\n# GRPC Address of Babylon node\nGRPCAddr = https://127.0.0.1:9090\n\n# Directory to store keys in\nKeyDirectory = /path/to/fpd/home\n")),(0,a.kt)("p",null,"To see the complete list of configuration options, check the ",(0,a.kt)("inlineCode",{parentName:"p"},"fpd.conf")," file."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Additional Notes:")),(0,a.kt)("p",null,"If you encounter any gas-related errors while performing staking operations, consider\nadjusting the ",(0,a.kt)("inlineCode",{parentName:"p"},"GasAdjustment")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"GasPrices")," parameters. For example, you can set:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"GasAdjustment = 1.5\nGasPrices = 0.002ubbn\n")),(0,a.kt)("h2",{id:"3-add-key-for-the-consumer-chain"},"3. Add key for the consumer chain"),(0,a.kt)("p",null,"The finality provider daemon requires the existence of a keyring that contains an\naccount with Babylon token funds to pay for transactions. This key will be also used\nto pay for fees of transactions to the consumer chain."),(0,a.kt)("p",null,"Use the following command to add the key:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"fpd keys add --key-name my-finality-provider --chain-id bbn-test-3\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": Please verify the ",(0,a.kt)("inlineCode",{parentName:"p"},"chain-id")," from the Babylon RPC\nnode ",(0,a.kt)("a",{parentName:"p",href:"https://rpc.testnet3.babylonchain.io/status"},"https://rpc.testnet3.babylonchain.io/status")),(0,a.kt)("p",null,"After executing the above command, the key name will be saved in the config file\ncreated in ",(0,a.kt)("a",{parentName:"p",href:"#2-configuration"},"step"),"."),(0,a.kt)("h2",{id:"4-starting-the-finality-provider-daemon"},"4. Starting the Finality Provider Daemon"),(0,a.kt)("p",null,"You can start the finality provider daemon using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"fpd start --home /path/to/fpd/home\n")),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"--home")," flag is not specified, then the default home location will be used."),(0,a.kt)("p",null,"This will start the Finality provider RPC server at the address specified\nin ",(0,a.kt)("inlineCode",{parentName:"p"},"fpd.conf")," under the ",(0,a.kt)("inlineCode",{parentName:"p"},"RpcListener")," field, which has a default value\nof ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:12581"),". You can change this value in the configuration file or override\nthis value and specify a custom address using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-listener")," flag."),(0,a.kt)("p",null,"This will also start all the registered finality provider instances except for\nslashed ones added in ",(0,a.kt)("a",{parentName:"p",href:"#5-create-and-register-a-finality-provider"},"step"),". To start\nthe daemon with a specific finality provider instance, use the\n",(0,a.kt)("inlineCode",{parentName:"p"},"--btc-pk")," flag followed by the hex string of the BTC public key of the finality\nprovider (",(0,a.kt)("inlineCode",{parentName:"p"},"btc_pk_hex"),") obtained\nin ",(0,a.kt)("a",{parentName:"p",href:"#5-create-and-register-a-finality-provider"},"step"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'fpd start\n\n2024-02-08T18:43:00.705008Z info successfully connected to a remote EOTS manager {"address": "127.0.0.1:12582"}\n2024-02-08T18:43:00.712995Z info Starting FinalityProviderApp\n2024-02-08T18:43:00.716682Z info RPC server listening {"address": "127.0.0.1:12581"}\n2024-02-08T18:43:00.716979Z info Finality Provider Daemon is fully active!\n')),(0,a.kt)("p",null,"All the available CLI options can be viewed using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," flag. These options\ncan also be set in the configuration file."),(0,a.kt)("h2",{id:"5-create-and-register-a-finality-provider"},"5. Create and Register a Finality Provider"),(0,a.kt)("p",null,"We create a finality provider instance through the\n",(0,a.kt)("inlineCode",{parentName:"p"},"fpcli create-finality-provider")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"fpcli cfp")," command. The created instance is\nassociated with a BTC public key which serves as its unique identifier and a Babylon\naccount to which staking rewards will be directed. Note that if the ",(0,a.kt)("inlineCode",{parentName:"p"},"--key-name")," flag\nis not specified, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Key")," field of config specified\nin ",(0,a.kt)("a",{parentName:"p",href:"#3-add-key-for-the-consumer-chain"},"step")," will be used."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'fpcli create-finality-provider --key-name my-finality-provider \\\n                --chain-id bbn-test-3 --moniker my-name\n{\n    "babylon_pk_hex": "02face5996b2792114677604ec9dfad4fe66eeace3df92dab834754add5bdd7077",\n    "btc_pk_hex": "d0fc4db48643fbb4339dc4bbf15f272411716b0d60f18bdfeb3861544bf5ef63",\n    "description": {\n        "moniker": "my-name"\n    },\n    "status": "CREATED"\n}\n')),(0,a.kt)("p",null,"We register a created finality provider in Babylon through\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"fpcli register-finality-provider")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"fpcli rfp")," command. The output contains\nthe hash of the Babylon finality provider registration transaction."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'fpcli register-finality-provider \\\n  --btc-pk d0fc4db48643fbb4339dc4bbf15f272411716b0d60f18bdfeb3861544bf5ef63\n{\n  "tx_hash": "800AE5BBDADE974C5FA5BD44336C7F1A952FAB9F5F9B43F7D4850BA449319BAA"\n}\n\n')),(0,a.kt)("p",null,"A finality provider instance will be initiated and start running right after the\nfinality provider is successfully registered in Babylon."),(0,a.kt)("p",null,"We can view the status of all the running finality providers through\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"fpcli list-finality-providers")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"fpcli ls")," command. The ",(0,a.kt)("inlineCode",{parentName:"p"},"status")," field can\nreceive the following values:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CREATED"),": The finality provider is created but not registered yet"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"REGISTERED"),": The finality provider is registered but has not received any active\ndelegations yet"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ACTIVE"),": The finality provider has active delegations and is empowered to send\nfinality signatures"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"INACTIVE"),": The finality provider used to be ACTIVE but the voting power is reduced\nto zero"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SLASHED"),": The finality provider is slashed due to malicious behavior")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'fpcli list-finality-providers\n{\n    "finality-providers": [\n        ...\n        {\n            "babylon_pk_hex": "02face5996b2792114677604ec9dfad4fe66eeace3df92dab834754add5bdd7077",\n            "btc_pk_hex": "d0fc4db48643fbb4339dc4bbf15f272411716b0d60f18bdfeb3861544bf5ef63",\n            "description": {\n                "moniker": "my-name"\n            },\n            "last_vote_height": 1\n            "status": "REGISTERED"\n        }\n    ]\n}\n')))}c.isMDXComponent=!0}}]);