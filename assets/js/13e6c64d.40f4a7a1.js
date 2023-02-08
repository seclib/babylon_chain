"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[3710],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=i,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||a;return n?o.createElement(m,r(r({ref:t},h),{},{components:n})):o.createElement(m,r({ref:t},h))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},73106:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(87462),i=(n(67294),n(3905));const a={id:"czconcierge",sidebar_label:"Zone Concierge Module",hide_table_of_contents:!0},r="CZ Concierge Module",s={unversionedId:"modules/czconcierge",id:"modules/czconcierge",title:"CZ Concierge Module",description:"\ud83d\udcd4 Learn what the Babylon Zone Concierge Module is and how it operates.",source:"@site/docs/modules/czconcierge.md",sourceDirName:"modules",slug:"/modules/czconcierge",permalink:"/docs/modules/czconcierge",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/modules/czconcierge.md",tags:[],version:"current",frontMatter:{id:"czconcierge",sidebar_label:"Zone Concierge Module",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"BTC Light Client",permalink:"/docs/modules/btclightclient"},next:{title:"Vigilante Submitter Program",permalink:"/docs/modules/submitter"}},l={},c=[{value:"Summary",id:"summary",level:2},{value:"Problem statement",id:"problem-statement",level:2},{value:"Design",id:"design",level:2},{value:"IBC light client for checkpointing Cosmos zones",id:"ibc-light-client-for-checkpointing-cosmos-zones",level:3},{value:"Intercepting and indexing headers from Cosmos zones",id:"intercepting-and-indexing-headers-from-cosmos-zones",level:3},{value:"Providing proofs that a header is finalized by Bitcoin",id:"providing-proofs-that-a-header-is-finalized-by-bitcoin",level:3},{value:"Further integrations",id:"further-integrations",level:2},{value:"Raising alarms upon dishonest majority attacks",id:"raising-alarms-upon-dishonest-majority-attacks",level:3},{value:"Reducing unbonding time",id:"reducing-unbonding-time",level:3}],h={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cz-concierge-module"},"CZ Concierge Module"),(0,i.kt)("p",null,"\ud83d\udcd4 Learn what the Babylon Zone Concierge Module is and how it operates."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"The zone concierge module is responsible for providing BTC timestamps to headers from other Cosmos zones.\nThese BTC timestamps allow Cosmos zones integrating with Babylon to achieve Bitcoin security, i.e., forking a Cosmos zone is as hard as forking Bitcoin.\nTo receive Cosmos zones' headers, the zone concierge module leverages the light clients in the IBC protocol.\nSpecifically, on top of the original ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go"},"IBC-Go")," implementation, Babylon adds a hook that forwards headers with a valid quorum certificate to the zone concierge module.\nUpon a header from IBC, zone concierge then stores the header's metadata in the KV store.\nWhen the epoch that stores this header's metadata is finalized by Bitcoin, the header is consequently finalized by Bitcoin as well."),(0,i.kt)("h2",{id:"problem-statement"},"Problem statement"),(0,i.kt)("p",null,"Babylon aims at providing Bitcoin security to other Cosmos zones.\nTo this end, Babylon needs to checkpoint itself to Bitcoin, and checkpoint other Cosmos zones to itself.\nThe {epoching, checkpointing, BTCCheckpoint, BTCLightclient} modules jointly provide the functionality of checkpointing Babylon to Bitcoin.\nThe zone concierge module and the IBC modules jointly provide the functionality of checkpointing Cosmos zones to Babylon."),(0,i.kt)("p",null,"In order to checkpoint Cosmos zones to Babylon, Babylon needs to receive, verify headers of Cosmos zones.\nBabylon will need to will checkpoint two types of headers: canonical headers and fork headers that have a quorum certificate, i.e., a set of signatures from validators with > 2/3 voting power.\nCheckpointing canonical headers allows Babylon to act as a canonical chain oracle.\nCheckpointing fork headers allows Babylon to identify dishonest majority attacks and slash equivocating validators.\nZone concierge will not checkpoint any header that does not have a quorum certificate."),(0,i.kt)("p",null,"Specifically, the zone concierge module aims at providing the following guarantees"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Timestamping headers:")," Babylon timestamps all Cosmos zones' headers with a valid quorum certificate from the IBC relayer, regardless whether they are on CZ canonical chains or not."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Verifiability of timestamps:")," For any CZ header, Babylon can provide a proof that the CZ header is checkpointed by {Babylon, BTC}, where the proof is verifiable assuming access to Babylon/BTC light clients.")),(0,i.kt)("p",null,"under the following assumptions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"BTC is always secure with the k-deep confirmation rule"),(0,i.kt)("li",{parentName:"ul"},"Babylon might have dishonest majority"),(0,i.kt)("li",{parentName:"ul"},"Cosmos zones might have dishonest majority"),(0,i.kt)("li",{parentName:"ul"},"There exists >=1 honest IBC relayer and >=1 vigilante {submitter, reporter}"),(0,i.kt)("li",{parentName:"ul"},"The network is synchronous (i.e., messages are delivered within a known time bound)")),(0,i.kt)("h2",{id:"design"},"Design"),(0,i.kt)("p",null,"Babylon implements the zone concierge module in order to checkpoint headers of Cosmos zones.\nSpecifically, the zone concierge module"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"leverages IBC light clients for receiving and verifying headers from Cosmos zones"),(0,i.kt)("li",{parentName:"ul"},"intercepts and indexes headers from Cosmos zones"),(0,i.kt)("li",{parentName:"ul"},"provides proofs that a header is finalized by Bitcoin")),(0,i.kt)("h3",{id:"ibc-light-client-for-checkpointing-cosmos-zones"},"IBC light client for checkpointing Cosmos zones"),(0,i.kt)("p",null,"Babylon leverages the IBC protocol to receive and verify headers of Cosmos zones.\nIn a pair of Cosmos zones with an IBC channel, each Cosmos zone maintains the counterparty zone's light client, exchanges IBC packets from each other, and verifies inclusions of IBC packets with assistance of the light client."),(0,i.kt)("p",null,"The light client allows a Cosmos zone to maintain a subset of headers from the counterparty zone in an IBC connection, such that the light client ensures"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Safety:")," The IBC light client is consistent with the counterparty zone's blockchain"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Liveness:")," The IBC light client keeps growing\nwhen the counterparty zone has > 2/3 honest voting power and there exists > 1 honest relayer.")),(0,i.kt)("p",null,"Verifying a header is done by a special ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2010.07031"},"quorum intersection mechanism"),": upon a header from the relayer, the light client checks whether the intersected voting power bewteen the quorum certificates of the current tip and the header is more than 1/3 of the voting power in the current tip.\nIf yes, then this ensures that there exists at least one honest validator in the header's quorum certificate, and this header is agreed by all honest validators.\nEach header of a Cosmos zone carries ",(0,i.kt)("inlineCode",{parentName:"p"},"AppHash"),", which is the root of the Merkle IAVL tree for the Cosmos zone's database.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"AppHash")," allows a light client to verify whether an IBC packet is included in the Cosmos zone's blockchain."),(0,i.kt)("p",null,"Since the IBC light client provides a consistent view of another Cosmos zone's canonical chain, it is also useful for checkpointing Cosmos zones, apart from verifying IBC packets.\nSpecifically, each header with a valid quorum certificate can be viewed as a timestamp, and the IBC light client can be viewed as a primitive for producing timestamps for any Cosmos zone.\nFollowing this principle, zone concierge reuses the IBC light clients to checkpointing Cosmos zones."),(0,i.kt)("h3",{id:"intercepting-and-indexing-headers-from-cosmos-zones"},"Intercepting and indexing headers from Cosmos zones"),(0,i.kt)("p",null,"Zone concierge relies on the IBC light clients to timestamp Cosmos zones.\nIn order to further timestamp headers of Cosmos zones to Babylon, zone concierge has to build an index that maps each header to the current epoch, which will be eventually finalized by Bitcoin.\nTo this end, zone concierge builds an index for each IBC light client, and thus each Cosmos zone.\nSpecifically, zone concierge intercepts each header from IBC light clients via hooks and indexes it, including the header's positions on the Cosmos zone and Babylon."),(0,i.kt)("p",null,"Note that zone concierge intercepts all headers that have a valid quorum certificate, including both canonical headers and fork headers.\nA fork header with a valid quorum certificate is a signal of the dishonest majority attack: the majority of validators are honest and sign conflicted headers.\nBabylon adopts a modified IBC light client that filters such conflicted headers and forwards them to zone concierge, such that Babylon can slash the double-signing validators."),(0,i.kt)("h3",{id:"providing-proofs-that-a-header-is-finalized-by-bitcoin"},"Providing proofs that a header is finalized by Bitcoin"),(0,i.kt)("p",null,"To supports applications that demand a BTC-finalized PoS chain, zone concierge will provide proofs that the headers are indeed finalized by Bitcoin.\nThe proof of a BTC-finalized header includes the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Proof that the header is included in a Babylon block"),(0,i.kt)("li",{parentName:"ol"},"Proof that the Babylon block is in an epoch"),(0,i.kt)("li",{parentName:"ol"},"Proof that the epoch has been sealed by this epoch's validator set"),(0,i.kt)("li",{parentName:"ol"},"Proof that the epoch's checkpoint has been submitted and finalized by Bitcoin")),(0,i.kt)("p",null,"The first proof is formed as a Merkle proof that the transaction including this header is in the Babylon block.\nThe second proof is formed as a Merkle proof that the block's ",(0,i.kt)("inlineCode",{parentName:"p"},"Apphash")," is committed to the Merkle root of ",(0,i.kt)("inlineCode",{parentName:"p"},"AppHash"),"s of all blocks in this epoch.\nThe third proof is formed as a BLS multi-signature jointly generated by the epoch's validator set.\nThe last proof is formed as Merkle proofs of two transactions that constitute a BTC checkpoint, same as in ",(0,i.kt)("a",{parentName:"p",href:"/docs/modules/btccheckpoint"},"BTCCheckpoint module"),"."),(0,i.kt)("h2",{id:"further-integrations"},"Further integrations"),(0,i.kt)("p",null,"The BTC-finalized PoS chain will enable a number of applications, such as raising alarms upon dishonest majority attacks and reducing the unbonding time period.\nThese use cases require new modules in the Cosmos zones, and will be developed by Babylon team in the future."),(0,i.kt)("h3",{id:"raising-alarms-upon-dishonest-majority-attacks"},"Raising alarms upon dishonest majority attacks"),(0,i.kt)("p",null,"Zone concierge timestamps both canonical headers and fork headers that have valid quorum certificates.\nSuch fork header signals an dishonest majority attack.\nBabylon can send this fork header back to the corresponding Cosmos zone, such that the Cosmos zone will get notified with this dishonest majority attack, thus will decide to stall and initiate a social consensus."),(0,i.kt)("h3",{id:"reducing-unbonding-time"},"Reducing unbonding time"),(0,i.kt)("p",null,"Zone concierge provides a BTC-finalized prefix for a Cosmos zone's blockchain.\nSuch BTC-finalized prefix resists against the long range attacks, thus unbonding requests in this prefix can be finished without raising any security issue.\nSince each epoch takes 100 BTC blocks (which is about 17 hours) to finalize, such BTC-assisted unbonding is significantly faster than the current 21-day unbonding period."))}d.isMDXComponent=!0}}]);