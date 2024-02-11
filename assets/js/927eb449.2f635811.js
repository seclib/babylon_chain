"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[4831],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),m=o,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},76497:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));const r={id:"become-validator",sidebar_label:"Become a Validator",hide_table_of_contents:!0},i="Become a Validator",s={unversionedId:"user-guides/btc-staking-testnet/become-validator",id:"user-guides/btc-staking-testnet/become-validator",title:"Become a Validator",description:"Learn how to become a Validator for Babylon.",source:"@site/docs/user-guides/btc-staking-testnet/become-validator.md",sourceDirName:"user-guides/btc-staking-testnet",slug:"/user-guides/btc-staking-testnet/become-validator",permalink:"/docs/user-guides/btc-staking-testnet/become-validator",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user-guides/btc-staking-testnet/become-validator.md",tags:[],version:"current",frontMatter:{id:"become-validator",sidebar_label:"Become a Validator",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Getting Testnet Tokens",permalink:"/docs/user-guides/btc-staking-testnet/getting-funds"},next:{title:"Become a Finality Provider",permalink:"/docs/user-guides/btc-staking-testnet/finality-providers/overview"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"1. Create a Keyring and Get Funds",id:"1-create-a-keyring-and-get-funds",level:2},{value:"2. Create a BLS key",id:"2-create-a-bls-key",level:2},{value:"3. Modify the Configuration",id:"3-modify-the-configuration",level:2},{value:"4. Create the Validator",id:"4-create-the-validator",level:2},{value:"5. Verify your Validator",id:"5-verify-your-validator",level:2}],c={toc:d};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"become-a-validator"},"Become a Validator"),(0,o.kt)("p",null,"Learn how to become a Validator for Babylon."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Having a full node setup and synced by following this ",(0,o.kt)("a",{parentName:"p",href:"/docs/user-guides/btc-staking-testnet/setup-node"},"guide")),(0,o.kt)("h2",{id:"1-create-a-keyring-and-get-funds"},"1. Create a Keyring and Get Funds"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/user-guides/btc-staking-testnet/getting-funds"},"Getting Testnet Tokens")," page contains detailed instructions\non how to create a keyring and get funds for it through a faucet."),(0,o.kt)("h2",{id:"2-create-a-bls-key"},"2. Create a BLS key"),(0,o.kt)("p",null,"Validators are expected to submit a BLS signature at the end of each epoch.\nTo do that, a validator needs to have a BLS key pair to sign information with."),(0,o.kt)("p",null,"Using the address that you created on the previous step (",(0,o.kt)("inlineCode",{parentName:"p"},"$ADDR")," variable):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"babylond create-bls-key $ADDR\n")),(0,o.kt)("p",null,"This command will create a BLS key and add it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.babylond/config/priv_validator_key.json"),".\nThis is the same file that stores the private key that the validator uses to sign blocks.\nPlease ensure that this file is secured properly."),(0,o.kt)("p",null,"After creating a BLS key, you need to restart your node to load this key into\nmemory. If you followed the ",(0,o.kt)("a",{parentName:"p",href:"/docs/user-guides/btc-staking-testnet/setup-node"},"setting up a node guide"),", you\nwould have to"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"sudo systemctl stop babylond\nsudo systemctl start babylond\n")),(0,o.kt)("h2",{id:"3-modify-the-configuration"},"3. Modify the Configuration"),(0,o.kt)("p",null,"It is strongly recommended to modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"timeout_commit")," value\nunder ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.babylond/config/config.toml"),". This value specifies\nhow long a validator will wait before commiting a block before starting\non a new height. More information can be found ",(0,o.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/v0.33/tendermint-core/configuration.html#consensus-timeouts-explained"},"here"),".\nGiven that Babylon aims to have a 10 second time between blocks, set this value\nto:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'timeout_commit = "10s"\n')),(0,o.kt)("h2",{id:"4-create-the-validator"},"4. Create the Validator"),(0,o.kt)("p",null,"Contrary to a vanilla Cosmos SDK chain, a validator for Babylon is created through\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"babylond tx checkpointing create-validator")," command.\nThis command expects that a BLS validator key exists under the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.babylond/config/priv_validator_key.json"),"."),(0,o.kt)("p",null,"To create the validator (using sample parameters):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'# Note the variables\n# - $CHAIN_ID the chain ID\n# - $VAL_KEY the name of the key (with a test keyring backend) used for the validator\nbabylond tx checkpointing create-validator /path/to/validator.json \\\n    --chain-id="$CHAIN_ID" \\\n    --gas="auto" \\\n    --gas-adjustment="1.5" \\\n    --gas-prices="0.025ubbn" \\\n    --from=$VAL_KEY\n')),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"/path/to/validator.json")," contains"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'# - $AMOUNT the amount to delegate in ubbn, e.g. 1000000ubbn (must be less than the delegator\'s balance, and unit must be included)\n{\n  "pubkey": {"@type":"/cosmos.crypto.ed25519.PubKey","key":"BnbwFpeONLqvWqJb3qaUbL5aoIcW3fSuAp9nT3z5f20="},\n  "amount": "$AMOUNT",\n  "moniker": "my-moniker",\n  "website": "https://myweb.site",\n  "security": "security-contact@gmail.com",\n  "details": "description of your validator",\n  "commission-rate": "0.10",\n  "commission-max-rate": "0.20",\n  "commission-max-change-rate": "0.01",\n  "min-self-delegation": "1"\n}\n')),(0,o.kt)("p",null,"and ",(0,o.kt)("inlineCode",{parentName:"p"},"pubkey")," can be obtained through the following command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"babylond tendermint show-validator\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Note: In order to become an active validator, you need to have more ",(0,o.kt)("inlineCode",{parentName:"p"},"ubbn"),"\ntokens bonded than the last validator ordered by the tokens bonded (or the\nvalidator set to not be full) as well as have at least ",(0,o.kt)("inlineCode",{parentName:"p"},"1000000ubbn")," bonded.")),(0,o.kt)("h2",{id:"5-verify-your-validator"},"5. Verify your Validator"),(0,o.kt)("p",null,"On the Babylon system,\none can become a validator only after an epoch ends.\nFor the testnet, an epoch lasts for around 1 hour."),(0,o.kt)("p",null,"To verify that you have become a validator, first find your validator address:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"babylond keys show $KEYNAME -a --bech val\n")),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"$KEYNAME")," is the name of the key that you used for the self-delegation (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"my-key")," on our example).\nThis will return an address which you can use as the ",(0,o.kt)("inlineCode",{parentName:"p"},"$ADDR")," variable to perform the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"babylond query staking validator $ADDR\n")),(0,o.kt)("p",null,"If all goes well, you should see a response indicating the parameters that you specified\non the ",(0,o.kt)("inlineCode",{parentName:"p"},"create-validator")," transaction."),(0,o.kt)("p",null,"After the epoch ends and if you have enough stake to be an active validator,\nperforming this query will return you a status ",(0,o.kt)("inlineCode",{parentName:"p"},"BOND_STATUS_BONDED"),".\nCongrats! You are now a validator on the Babylon system."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you want to delegate, redelegate, unbond or cancel-unbond, please use the wrapped messages in the\ncheckpointing and epoching modules as the messages in staking module are disabled.\nRead more ",(0,o.kt)("a",{parentName:"p",href:"/docs/developer-guides/modules/epoching#delaying-wrapped-messages-to-the-end-of-epochs"},"here"))))}u.isMDXComponent=!0}}]);