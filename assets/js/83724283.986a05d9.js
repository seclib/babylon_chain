"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[6842],{3905:(e,n,t)=>{t.d(n,{Zo:()=>h,kt:()=>d});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},h=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),y=c(t),d=o,b=y["".concat(s,".").concat(d)]||y[d]||u[d]||r;return t?a.createElement(b,i(i({ref:n},h),{},{components:t})):a.createElement(b,i({ref:n},h))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=y;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},88829:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=t(87462),o=(t(67294),t(3905));const r={id:"czintegrate",sidebar_label:"Integrate with Babylon",hide_table_of_contents:!0},i="Integrate with Babylon",l={unversionedId:"user-guides/btc-staking-testnet/czintegrate",id:"user-guides/btc-staking-testnet/czintegrate",title:"Integrate with Babylon",description:"Learn how to integrate a Cosmos Zone with Babylon.",source:"@site/docs/user-guides/btc-staking-testnet/integrate.md",sourceDirName:"user-guides/btc-staking-testnet",slug:"/user-guides/btc-staking-testnet/czintegrate",permalink:"/docs/user-guides/btc-staking-testnet/czintegrate",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user-guides/btc-staking-testnet/integrate.md",tags:[],version:"current",frontMatter:{id:"czintegrate",sidebar_label:"Integrate with Babylon",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Become a Vigilante",permalink:"/docs/user-guides/btc-staking-testnet/become-vigilante"},next:{title:"Become a Finality Provider",permalink:"/docs/user-guides/btc-staking-testnet/finality-providers/overview"}},s={},c=[{value:"Babylon IBC relayer",id:"babylon-ibc-relayer",level:2},{value:"Running a Babylon IBC relayer",id:"running-a-babylon-ibc-relayer",level:2},{value:"Install the Babylon Relayer",id:"install-the-babylon-relayer",level:3},{value:"Configure the Babylon Relayer",id:"configure-the-babylon-relayer",level:3},{value:"Create a key for the Babylon relayer",id:"create-a-key-for-the-babylon-relayer",level:3},{value:"Obtain Babylon Tokens",id:"obtain-babylon-tokens",level:3},{value:"Start the Babylon Relayer",id:"start-the-babylon-relayer",level:3},{value:"Check if the Integration is Successful",id:"check-if-the-integration-is-successful",level:3},{value:"Future Integration Phases",id:"future-integration-phases",level:2}],h={toc:c};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"integrate-with-babylon"},"Integrate with Babylon"),(0,o.kt)("p",null,"Learn how to integrate a Cosmos Zone with Babylon."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"At the moment, Babylon provides a canonical chain oracle for each integrated Cosmos zone,\nand allows anyone to query the canonical chains of integrated Cosmos zones and\nquery the fork headers created by a validator set with dishonest majority.\nIn the future, integrating Babylon will allows Cosmos zones to raise alarms upon\ndishonest majority attacks, and reduce the unbonding time."),(0,o.kt)("p",null,"In order to integrate a Cosmos zone to Babylon,\nthe first option would be sending an email to ",(0,o.kt)("a",{parentName:"p",href:"mailto:admin@babylonchain.io"},"the Babylon team"),",\nthen the Babylon team will deploy a relayer for your blockchain.\nAlternatively, anyone can integrate any Cosmos zone to Babylon\nby running an IBC relayer specialized for Babylon.\nThe special IBC relayer uses a subset of the IBC protocol,\nand there is no need to modify the integrated Cosmos zone's code,\nor have tokens in the integrated Cosmos zone."),(0,o.kt)("h2",{id:"babylon-ibc-relayer"},"Babylon IBC relayer"),(0,o.kt)("p",null,"In order to provide a canonical chain oracle for Cosmos zones,\nBabylon only needs to use a subset of IBC protocols.\nSpecifically, Babylon needs to maintain an IBC light client for the integrated Cosmos zone,\nbut not the other way.\nHowever, existing relayers, including the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/relayer"},"Go relayer"),"\nand the Rust Hermes relayer, are designed for the full IBC protocol stack with an emphasis on\nIBC packets, thus only provide functionalities for updating both IBC clients in two Cosmos zones and\nrelaying IBC packets among them."),(0,o.kt)("p",null,"To this end, the Babylon team has developed a special IBC relayer\nbased on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/relayer"},"the official IBC relayer in Golang"),".\nThe special IBC relayer allows one to maintain an IBC light client of a Cosmos zone in Babylon,\nand periodically forward headers of the Cosmos zone to Babylon.\nIt gives us the following advantages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Integrating a Cosmos zone to Babylon only needs Babylon accounts and tokens.\nAccounts and tokens of integrated Cosmos zones are not needed."),(0,o.kt)("li",{parentName:"ul"},"Integrating a Cosmos zone to Babylon incurs zero computational\nor storage overhead on integrated Cosmos zones.")),(0,o.kt)("h2",{id:"running-a-babylon-ibc-relayer"},"Running a Babylon IBC relayer"),(0,o.kt)("p",null,"Running a Babylon IBC relayer consists of the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install the Babylon Relayer"),(0,o.kt)("li",{parentName:"ol"},"Configure the Babylon Relayer"),(0,o.kt)("li",{parentName:"ol"},"Create a keyring for the Babylon relayer"),(0,o.kt)("li",{parentName:"ol"},"Obtain Babylon tokens"),(0,o.kt)("li",{parentName:"ol"},"Start the Babylon Relayer")),(0,o.kt)("h3",{id:"install-the-babylon-relayer"},"Install the Babylon Relayer"),(0,o.kt)("p",null,"The Babylon relayer is located at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/babylonchain/babylon-relayer"},"GitHub"),".\nPlease follow the documentation for installing it.\nIn summary, after cloning the repository,\nnavigate to the folder in which you cloned it,\ncheckout to the version you want to install (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"git checkout v0.3.0"),"),\nand execute,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ make install\n")),(0,o.kt)("p",null,"This will install the ",(0,o.kt)("inlineCode",{parentName:"p"},"babylon-relayer")," binary. You can verify that everything worked properly by running,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ babylon-relayer --help\nbabylon-relayer has:\n        1. Configuration management for Chains and Paths\n        2. Key management for managing multiple keys for multiple chains\n        3. Query and transaction functionality for IBC\n        4. Functionality for relaying headers from Cosmos Zones to Babylon periodically\n\n        NOTE: Most of the commands have aliases that make typing them much quicker\n                  (i.e. 'babylon-relayer tx', 'babylon-relayer q', etc...)\n\nUsage:\n  babylon-relayer [command]\n \n...output truncated\n")),(0,o.kt)("h3",{id:"configure-the-babylon-relayer"},"Configure the Babylon Relayer"),(0,o.kt)("p",null,"The default Babylon relayer home directory is ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.relayer"),".\nYou can specify a different Babylon relayer home directory through the ",(0,o.kt)("inlineCode",{parentName:"p"},"--home")," CLI flag.\nFor the purposes of this document and for simplicity,\nwe will assume that the home directory is ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.relayer"),"."),(0,o.kt)("p",null,"The configuration file for the relayer is located under the ",(0,o.kt)("inlineCode",{parentName:"p"},"$RELAYER_HOME/config/config.yaml"),".\nIn our case, ",(0,o.kt)("inlineCode",{parentName:"p"},"$RELAYER_HOME")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.relayer"),".\nAn example config file for integrating Osmosis testnet is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'global:\n    api-listen-addr: :5183\n    timeout: 20s\n    memo: ""\n    light-cache-size: 10\nchains:\n    # Name for the Babylon chain\n    babylon:\n        type: cosmos\n        value:\n            # REPLACEME: Name of the key in the keyring that will be used to send transactions to Babylon.\n            #            We will create this key on the next step.\n            key: babylon-relayer-key\n            # REPLACEME: The Chain ID of the Babylon network you want to connect to.\n            #            For example, for the current testnet, this is `bbn-test-2`\n            #            Note that this chain ID should be the same one you used for creating the keyring.\n            chain-id: bbn-test-2\n            # REPLACEME: The RPC endpoint of a node that runs on the Babylon network you want to connect to.\n            rpc-addr: https://rpc.testnet3.babylonchain.io:443\n            account-prefix: bbn\n            # The backend of the keyring you\'re using. Recall that this should always be `test`.\n            keyring-backend: test\n            # Gas prices and gas adjustment.\n            gas-adjustment: 1.5\n            gas-prices: 0.002ubbn\n            min-gas-amount: 0\n            debug: true\n            timeout: 10s\n            output-format: json\n            sign-mode: direct\n            extra-codecs: []\n    # Name for the chain to be integrated\n    osmosis:\n        type: cosmos\n        value:\n            # REPLACEME: The chain ID of the chain you want to integrate with Babylon\n            chain-id: osmo-test-4\n            # REPLACEME: The RPC endpoint of a node that runs on the network of the chain you want to integrate with Babylon.\n            rpc-addr: https://osmosis-testnet-rpc.allthatnode.com:26657/\n            keyring-backend: test\n            timeout: 10s\npaths:\n    # Name of the relayer path\n    osmosis:\n        # Chain IDs that this path will connect\n        # REPLACEME: Use the chain IDs For Babylon and the integrated chain you specified above.\n        src:\n            chain-id: bbn-test-2\n        dst:\n            chain-id: osmo-test-4\n')),(0,o.kt)("h3",{id:"create-a-key-for-the-babylon-relayer"},"Create a key for the Babylon relayer"),(0,o.kt)("p",null,"After specifying the configuration,\nwe need to create a keyring that will pay the transaction fees for sending\ntransactions to the Babylon chain."),(0,o.kt)("p",null,"We have two options:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a keyring from scratch")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ babylon-relayer keys add $BABYLON_NAME $BABYLON_KEY_NAME\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Import an already existing keyring. For this you're going to need the mnemonic")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ babylon-relayer keys restore $BABYLON_NAME $BABYLON_KEY_NAME "$MNEMONIC"\n')),(0,o.kt)("p",null,"In the above commands,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$BABYLON_NAME")," is the name assigned to the Babylon chain in the configuration file.\nIn the example configuration above this is ",(0,o.kt)("inlineCode",{parentName:"li"},"babylon"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$BABYLON_KEY_NAME")," is the name assigned to the key for Babylon in the configuration file.\nIn the example configuration above this is ",(0,o.kt)("inlineCode",{parentName:"li"},"babylon-relayer-key")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$MNEMONIC")," is the mnemonic for the key you want to import.")),(0,o.kt)("p",null,"To verify that your key has been included, you can execute:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ babylon-relayer keys list $BABYLON_NAME\n")),(0,o.kt)("p",null,"If all worked as expected, you should see the key address in the output."),(0,o.kt)("h3",{id:"obtain-babylon-tokens"},"Obtain Babylon Tokens"),(0,o.kt)("p",null,"Now it's time to obtain the tokens that will be used to pay for Babylon transaction fees\nfor relaying headers.\nThose funds should go to the address of the key you created on the previous step.\nYou can obtain funds through the faucet found in the Babylon Discord."),(0,o.kt)("h3",{id:"start-the-babylon-relayer"},"Start the Babylon Relayer"),(0,o.kt)("p",null,"To start the Babylon relayer,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ babylon-relayer keep-update-clients --interval $INTERVAL\n")),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"$INTERVAL")," is the interval for relaying a header (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"10m")," to denote 10 minutes per header)."),(0,o.kt)("h3",{id:"check-if-the-integration-is-successful"},"Check if the Integration is Successful"),(0,o.kt)("p",null,"After the above steps, the Cosmos zone has been integrated to Babylon.\nYou can do the following things to check the status of the integration:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check the Babylon node API\n",(0,o.kt)("inlineCode",{parentName:"li"},"http://lcd.testnet3.babylonchain.io/babylon/zoneconcierge/v1/chain_info/<your_chain_id>"),"\nthat shows the information of the Cosmos zone in Babylon's view."),(0,o.kt)("li",{parentName:"ul"},"Check whether ",(0,o.kt)("a",{parentName:"li",href:"https://babylonscan.io"},"BabylonScan")," shows\nthe information of the Cosmos zone or not.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"NOTE: one needs to submit a PR to Babylon's chain registry in order to be shown on BabylonScan")))),(0,o.kt)("h2",{id:"future-integration-phases"},"Future Integration Phases"),(0,o.kt)("p",null,"In the future, Babylon will enable further integration phases,\nsuch as raising alarms upon dishonest majority attacks and\nreducing the unbonding time period.\nSuch integrations will need IBC packets,\nthus require using the original IBC relayer\nrather than the above specialized one.\nPlease see ",(0,o.kt)("a",{parentName:"p",href:"/docs/developer-guides/modules/zoneconcierge"},"Zone Concierge")," for more details."))}u.isMDXComponent=!0}}]);