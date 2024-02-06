"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[2407],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),g=a,m=c["".concat(s,".").concat(g)]||c[g]||u[g]||r;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},24168:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const r={id:"overview",title:"Become a Finality Provider",sidebar_label:"Become a Finality Provider"},o=void 0,l={unversionedId:"user-guides/btc-staking-testnet/finality-providers/overview",id:"user-guides/btc-staking-testnet/finality-providers/overview",title:"Become a Finality Provider",description:"A toolset crafted for the creation and",source:"@site/docs/user-guides/btc-staking-testnet/finality-providers/overview.md",sourceDirName:"user-guides/btc-staking-testnet/finality-providers",slug:"/user-guides/btc-staking-testnet/finality-providers/overview",permalink:"/docs/user-guides/btc-staking-testnet/finality-providers/overview",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user-guides/btc-staking-testnet/finality-providers/overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"Become a Finality Provider",sidebar_label:"Become a Finality Provider"},sidebar:"docs",previous:{title:"Become a Validator",permalink:"/docs/user-guides/btc-staking-testnet/become-validator"},next:{title:"EOTS Manager",permalink:"/docs/user-guides/btc-staking-testnet/finality-providers/eots-manager"}},s={},d=[{value:"1. Overview",id:"1-overview",level:2},{value:"2. Installation",id:"2-installation",level:2},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Downloading the code",id:"downloading-the-code",level:4},{value:"Building and installing the binary",id:"building-and-installing-the-binary",level:4},{value:"3. Setting up a finality provider",id:"3-setting-up-a-finality-provider",level:2},{value:"3.1. Setting up a Babylon Full Node",id:"31-setting-up-a-babylon-full-node",level:4},{value:"3.2. Setting up the EOTS Manager",id:"32-setting-up-the-eots-manager",level:4},{value:"3.3. Setting up a Finality Provider",id:"33-setting-up-a-finality-provider",level:4},{value:"4. Delegations &amp; Rewards",id:"4-delegations--rewards",level:2}],p={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A toolset crafted for the creation and\nmanagement of Finality Providers."),(0,a.kt)("h2",{id:"1-overview"},"1. Overview"),(0,a.kt)("p",null,"Finality providers are responsible for voting\nat a finality round on top of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cometbft/cometbft"},"CometBFT"),".\nSimilar to any native PoS validator,\na finality provider can receive voting power delegations from BTC stakers, and\ncan earn commission from the staking rewards denominated in Babylon tokens."),(0,a.kt)("p",null,"The finality provider toolset does not have\nany special hardware requirements\nand can operate on standard mid-sized machines\nrunning a UNIX-flavored operating system.\nIt consists of the following programs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Babylon full node"),": An instance of a Babylon node connecting to\nthe Babylon network. Running one is not a strict requirement,\nbut it is recommended for security compared to trusting a third-party RPC node."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Extractable One-Time Signature (EOTS) manager"),":\nA daemon responsible for securely maintaining the finality provider\u2019s\nprivate key and producing extractable one time signatures from it."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Finality Provider"),": A daemon managing the finality provider.\nIt connects to the EOTS manager to generate EOTS public randomness and\nfinality votes for Babylon blocks, which it submits to Babylon through\nthe node connection.")),(0,a.kt)("p",null,"The following graphic demonstrates the interconnections between the above programs:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Finality Provider Interconnections",src:n(70531).Z,width:"1101",height:"528"})),(0,a.kt)("h2",{id:"2-installation"},"2. Installation"),(0,a.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"This project requires Go version 1.21 or later."),(0,a.kt)("p",null,"Install Go by following the instructions on\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://golang.org/doc/install"},"official Go installation guide"),"."),(0,a.kt)("h4",{id:"downloading-the-code"},"Downloading the code"),(0,a.kt)("p",null,"To get started, clone the repository to your local machine from Github:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/babylonchain/finality-provider.git\n")),(0,a.kt)("p",null,"You can choose a specific version from\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/babylonchain/finality-provider/releases"},"official releases page")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd finality-provider # cd into the project directory\ngit checkout <release-tag>\n")),(0,a.kt)("h4",{id:"building-and-installing-the-binary"},"Building and installing the binary"),(0,a.kt)("p",null,"At the top-level directory of the project"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"make install\n")),(0,a.kt)("p",null,"The above command will build and install the following binaries to\n",(0,a.kt)("inlineCode",{parentName:"p"},"$GOPATH/bin"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"eotsd"),": The daemon program for the EOTS manager."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fpd"),": The daemon program for the finality-provider."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fpcli"),": The CLI tool for interacting with the finality-provider daemon.")),(0,a.kt)("p",null,"If your shell cannot find the installed binaries, make sure ",(0,a.kt)("inlineCode",{parentName:"p"},"$GOPATH/bin")," is in\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"$PATH")," of your shell. Usually these commands will do the job"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export PATH=$HOME/go/bin:$PATH\necho 'export PATH=$HOME/go/bin:$PATH' >> ~/.profile\n")),(0,a.kt)("p",null,"To build without installing,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"make build\n")),(0,a.kt)("p",null,"The above command will put the built binaries in a build directory with the\nfollowing structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ls build\n    \u251c\u2500\u2500 eotsd\n    \u251c\u2500\u2500 fpcli\n    \u2514\u2500\u2500 fpd\n")),(0,a.kt)("h2",{id:"3-setting-up-a-finality-provider"},"3. Setting up a finality provider"),(0,a.kt)("h4",{id:"31-setting-up-a-babylon-full-node"},"3.1. Setting up a Babylon Full Node"),(0,a.kt)("p",null,"Before setting up the finality provider toolset,\nan operator must ensure a working connection with a Babylon full node.\nIt is highly recommended that operators run their own node to avoid\ntrusting third parties. Instructions on how to set up a full Babylon node\ncan be found in\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.babylonchain.io/docs/user-guides/btc-timestamping-testnet/setup-node"},"the Babylon documentation"),"."),(0,a.kt)("p",null,"The finality provider requires a Babylon keyring with loaded funds to be attached to it\nin order to be able to send transactions to Babylon.\nTo setup such a keyring, follow the instructions in\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.babylonchain.io/docs/user-guides/btc-timestamping-testnet/getting-funds"},"the Babylon documentation"),"."),(0,a.kt)("h4",{id:"32-setting-up-the-eots-manager"},"3.2. Setting up the EOTS Manager"),(0,a.kt)("p",null,"After a node and a keyring have been set up,\nthe operator can set up and run the\nExtractable One Time Signature (EOTS) manager daemon.\nA complete overview of the EOTS manager, its operation, and\nits configuration options can be found in the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/user-guides/btc-staking-testnet/finality-providers/eots-manager"},"EOTS Manager page")),(0,a.kt)("h4",{id:"33-setting-up-a-finality-provider"},"3.3. Setting up a Finality Provider"),(0,a.kt)("p",null,"The last step is to set up and run\nthe finality daemon.\nA complete overview of the finality daemon, its operation, and\nits configuration options can be found in the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/user-guides/btc-staking-testnet/finality-providers/finality-provider"},"Finality page"),"."),(0,a.kt)("h2",{id:"4-delegations--rewards"},"4. Delegations & Rewards"),(0,a.kt)("p",null,"A finality provider receives BTC delegations through delegators\ninteracting with Babylon and choosing it as the recipient of their delegations.\nTo perform a self-delegation,\nthe operator can either visit the staking web app we provide,\nor run the Babylon ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/babylonchain/btc-staker"},"BTC Staker program")," once.\nThe BTC staker connects to a Bitcoin wallet and Babylon to perform delegations."))}u.isMDXComponent=!0},70531:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/finality-toolset-9c0d5efdc590d6f89e65d9a08e6799f4.png"}}]);