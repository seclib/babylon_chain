"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[3217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return n?o.createElement(k,r(r({ref:t},c),{},{components:n})):o.createElement(k,r({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var p=2;p<l;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const l={id:"installation",sidebar_label:"Installation Guide",sidebar_position:5,pagination_prev:null,pagination_next:null,custom_edit_url:null},r="Installation Guide",i={unversionedId:"installation",id:"installation",title:"Installation Guide",description:"This article provides an overview of installing and initializing the Babylon chain on your system.",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"installation",sidebar_label:"Installation Guide",sidebar_position:5,pagination_prev:null,pagination_next:null,custom_edit_url:null},sidebar:"docs"},s={},p=[{value:'Step 1: Install Golang <a id="step1"></a>',id:"step-1-install-golang-",level:2},{value:'Step 2: Clone Babylon Repository <a id="step2"></a>',id:"step-2-clone-babylon-repository-",level:2},{value:'Step 3: Initialize the Babylon Chain <a id="step3"></a>',id:"step-3-initialize-the-babylon-chain-",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation-guide"},"Installation Guide"),(0,a.kt)("p",null,"This article provides an overview of installing and initializing the Babylon chain on your system."),(0,a.kt)("p",null,"In this article:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#step1"},"Step 1: Install Golang")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#step2"},"Step 2: Clone Babylon Repository")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#step3"},"Step 3: Initialize the Babylon Chain"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://drive.google.com/uc?export=view&id=1aBku1Zd33aUIPWp3ox_7Wh59ON1HYzOa",alt:"Alt text"})),(0,a.kt)("h2",{id:"step-1-install-golang-"},"Step 1: Install Golang ",(0,a.kt)("a",{id:"step1"})),(0,a.kt)("admonition",{title:"Note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Babylon requires golang version 1.18 for Babylon to be installed on your system.")),(0,a.kt)("p",null,"Install Golang on your system by following the steps below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("a",{href:"https://golang.org/dl/"},"Golang official website")," and grab the tarball link of the golang version you want to use. Or use the following ",(0,a.kt)("strong",{parentName:"li"},"wget command")," to download and install Golang:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo wget https://go.dev/dl/go1.19.4.linux-amd64.tar.gz\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Extract the tarball to ",(0,a.kt)("strong",{parentName:"li"},"/usr/local")," directory by using the code below:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo tar -C /usr/local -xzf go1.19.4.linux-amd64.tar.gz\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"For the system-wide installation, add the ",(0,a.kt)("strong",{parentName:"li"},"go")," binary path to ",(0,a.kt)("strong",{parentName:"li"},".bashrc")," file ",(0,a.kt)("strong",{parentName:"li"},"/etc/profile")," by using the code below:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"export PATH=$PATH:/usr/local/go/bin\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Then, run the code below to apply the change:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"source ~/.bashrc\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Run the code below to check if Golang has been successfully installed:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"go version\n")),(0,a.kt)("p",null,"It will return the Golang version that you have installed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"go version go1.19.4 linux/amd64\n")),(0,a.kt)("h2",{id:"step-2-clone-babylon-repository-"},"Step 2: Clone Babylon Repository ",(0,a.kt)("a",{id:"step2"})),(0,a.kt)("p",null,"You need to clone Babylon\u2019s GitHub repository to install the Node. Follow the steps below to clone Babylon\u2019s repository:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open a folder to place the cloned file from the repository.  Insert the following code:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd /mnt/c/Users/(YourSystemUsername)/Documents/Babylon\n")),(0,a.kt)("admonition",{title:"Note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Change the ",(0,a.kt)("strong",{parentName:"p"},"YourSystemUsername")," into your ",(0,a.kt)("strong",{parentName:"p"},"System Username"),".")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Clone the repository")," by using the following code below:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://<tokenhere>@github.com/babylonchain/babylon.git\n")),(0,a.kt)("admonition",{title:"Note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Replace ",(0,a.kt)("strong",{parentName:"p"},"tokenhere")," with your own unique access token.")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter your ",(0,a.kt)("strong",{parentName:"p"},"GitHub username")," and ",(0,a.kt)("strong",{parentName:"p"},"password")," for the Github authentication process.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Successfully cloned the repository."))),(0,a.kt)("h2",{id:"step-3-initialize-the-babylon-chain-"},"Step 3: Initialize the Babylon Chain ",(0,a.kt)("a",{id:"step3"})),(0,a.kt)("p",null,"After cloning the Babylon repository, you must create the Babylon chain to start the Node. Follow the steps below to create the Babylon Chain:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open the cloned repository folder on your system:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd /mnt/c/Users/(YourSystemUsername)/Documents/Babylon/babylond\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Install Make")," by inserting the code below:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo apt install make\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Build the chain")," by inserting the code below on Ubuntu:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"make build\n")),(0,a.kt)("p",null,"It would return as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'go build -mod=readonly -tags "netgo ledger" -ldflags \'-X github.com/cosmos/cosmos-sdk/version.Name=babylon -X github.com/cosmos/cosmos-sdk/version.AppName=babylond -X github.com/cosmos/cosmos-sdk/version.Version=00924d4 -X github.com/cosmos/cosmos-sdk/version.Commit=00924d4e2cc401bdff89e6489ae301e00a865880 -X "github.com/cosmos/cosmos-sdk/version.BuildTags=netgo,ledger" -w -s\' -trimpath -o /mnt/c/Users/kakakepan/Documents/Babylond/babylon/build/ ./...\n')),(0,a.kt)("p",null,"Under the babylond build directory, a babylon executable will be created."),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"To ",(0,a.kt)("strong",{parentName:"li"},"install the Babylon executable")," to the Babylon chain, insert the code below:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"make install\n")),(0,a.kt)("p",null,"It would return as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'go install -mod=readonly -tags "netgo ledger" -ldflags \'-X github.com/cosmos/cosmos-sdk/version.Name=babylon -X github.com/cosmos/cosmos-sdk/version.AppName=babylond -X github.com/cosmos/cosmos-sdk/version.Version=00924d4 -X github.com/cosmos/cosmos-sdk/version.Commit=00924d4e2cc401bdff89e6489ae301e00a865880 -X "github.com/cosmos/cosmos-sdk/version.BuildTags=netgo,ledger" -w -s\' -trimpath  ./...\n')),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Initialize")," the chain by inserting the code below:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ ./build/babylond init chainName\n")),(0,a.kt)("admonition",{title:"Note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You may replace the ",(0,a.kt)("strong",{parentName:"p"},"chainName")," with any ",(0,a.kt)("strong",{parentName:"p"},"desired name"),".")),(0,a.kt)("p",null,"After the Babylon chain has been successfully initialized, a directory named ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.babylond")," will be created, allowing users to choose a different home directory with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--home")," flag."))}m.isMDXComponent=!0}}]);