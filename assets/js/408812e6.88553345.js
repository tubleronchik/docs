"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[4891],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),f=r,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(4334),o="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(3117),r=a(7294),o=a(4334),i=a(2389),l=a(7392),s=a(7094),c=a(2466),u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,a,i=e.lazy,p=e.block,f=e.defaultValue,m=e.values,b=e.groupId,h=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.l)(k,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===f?f:null!=(t=null!=f?f:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:v[0].props.value;if(null!==y&&!k.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),N=w.tabGroupChoices,D=w.setTabGroupChoices,B=(0,r.useState)(y),T=B[0],E=B[1],x=[],O=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var C=N[b];null!=C&&C!==T&&k.some((function(e){return e.value===C}))&&E(C)}var I=function(e){var t=e.currentTarget,a=x.indexOf(t),n=k[a].value;n!==T&&(O(t),E(n),null!=b&&D(b,String(n)))},_=function(e){var t,a=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":var n,r=x.indexOf(e.currentTarget)+1;a=null!=(n=x[r])?n:x[0];break;case"ArrowLeft":var o,i=x.indexOf(e.currentTarget)-1;a=null!=(o=x[i])?o:x[x.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},h)},k.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return x.push(e)},onKeyDown:_,onClick:I},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function f(e){var t=(0,i.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},4087:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return f}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),i=a(5488),l=a(5162),s=["components"],c={sidebar_position:0},u="Getting started",d={unversionedId:"develop/debots/getting-started",id:"develop/debots/getting-started",title:"Getting started",description:"EverX DeBots Github repository https://github.com/tonlabs/debots",source:"@site/../../src/develop/debots/getting-started.md",sourceDirName:"develop/debots",slug:"/develop/debots/getting-started",permalink:"/develop/debots/getting-started",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/debots/getting-started.md",tags:[],version:"current",lastUpdatedAt:1667886893,formattedLastUpdatedAt:"Nov 8, 2022",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"DeBots",permalink:"/develop/debots"},next:{title:"DeBrowser",permalink:"/develop/debots/debrowser"}},p={},f=[{value:"What is a DeBot?",id:"what-is-a-debot",level:2},{value:"Basic terms",id:"basic-terms",level:2},{value:"DeBot interfaces",id:"debot-interfaces",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"DeBots",id:"debots",level:2},{value:"How to try DeBot",id:"how-to-try-debot",level:2},{value:"DeBot <code>DEvergence</code>",id:"debot-devergence",level:3},{value:"DeBot <code>Multisig</code>",id:"debot-multisig",level:3}],m={toc:f};function b(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting started"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"EverX DeBots Github repository ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/debots"},"https://github.com/tonlabs/debots"))),(0,o.kt)("h2",{id:"what-is-a-debot"},"What is a DeBot?"),(0,o.kt)("p",null,"DeBot (Decentralized Bot) is an intuitive, no-prior-knowledge-required interface for interacting with smart contracts on Everscale Blockchain."),(0,o.kt)("p",null,"Blockchain technology is complex and can be hard to learn for users without prior experience with it. With DeBots, our goal is twofold: simplify user's experience with the  blockchain, and streamline the development process of blockchain-based services. It should be noted that this is achieved by maintaining the highest level of security. "),(0,o.kt)("p",null,"At its most basic, a DeBot is a secure chat-based interface that allows a user to interact with a smart contract on the blockchain and access its various functions in the form of a dialogue."),(0,o.kt)("h2",{id:"basic-terms"},"Basic terms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"DeBot")," \u2014 a smart contract facilitating conversation-like communication flow with a target smart contract."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Target smart contract")," \u2014 the smart contract for which a DeBot is created. The DeBot is an interface to this smart contract."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"DeBot browser")," \u2014 a program that executes the DeBot and parses its answer using DeBot protocol."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"DeBot protocol")," \u2014 a set of rules describing the communication between a browser and the DeBot. Namely, it describes how to call DeBot functions and interpret its answers.")),(0,o.kt)("p",null,"Debots are deployed on the Everscale blockchain and the browser is being managed by the user. The code is simply downloaded and runs inside the engine."),(0,o.kt)("h2",{id:"debot-interfaces"},"DeBot interfaces"),(0,o.kt)("p",null,"To fulfill their functions as a user's interface, DeBots must be able to facilitate a number of interactions between the user, the user's device and the target smart contract on the blockchain:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"receive input from users;"),(0,o.kt)("li",{parentName:"ul"},"query info about other smart contracts;"),(0,o.kt)("li",{parentName:"ul"},"query transactions and messages;"),(0,o.kt)("li",{parentName:"ul"},"receive data from external subsystems (like file systems) and external devices (like NFC, camera and so on);"),(0,o.kt)("li",{parentName:"ul"},"call external function libraries that allow you to do operations that are not supported by VM. For example, work with json, convert numbers to string and vice versa, encrypt/decrypt/sign data.")),(0,o.kt)("p",null,"These needs are covered in various DeBot Interfaces (DInterfaces) which can be used in DeBots and which must be supported in DeBot Browsers."),(0,o.kt)("p",null,"To use an interface, the DeBot should import a source file with the DInterface declaration and call its methods like any other smart contract methods in Everscale \u2014 by sending internal messages to an interface address, which is unique and explicitly defined for every interface."),(0,o.kt)("p",null,"Every DInterface must be discussed and accepted by DeBot Interface Specifications (DIS) Consortium before it can be used in DeBots. All accepted interfaces are published by ",(0,o.kt)("a",{parentName:"p",href:"/learn/decentralization/debot-consortium"},"DeBot Interface Specifications Consortium"),"."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To build DeBots install ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/everdev"},(0,o.kt)("inlineCode",{parentName:"a"},"everdev")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g everdev\n")),(0,o.kt)("p",null,"To run and debug DeBots install ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/tonos-cli"},(0,o.kt)("inlineCode",{parentName:"a"},"tonos-cli")),":"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For run DeBots ",(0,o.kt)("strong",{parentName:"p"},"required")," ",(0,o.kt)("inlineCode",{parentName:"p"},"tonos-cli")," version >= ",(0,o.kt)("inlineCode",{parentName:"p"},"0.11.4"),".")),(0,o.kt)("p",null,"Install using ",(0,o.kt)("inlineCode",{parentName:"p"},"everdev"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx everdev tonos-cli install\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx everdev tonos-cli set --version 0.26.2\n")),(0,o.kt)("p",null,"Or download binaries from here:"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"linux",label:"Linux",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://sdkbinaries.tonlabs.io/tonos-cli-0_26_2-linux.zip"},"http://sdkbinaries.tonlabs.io/tonos-cli-0_26_2-linux.zip"))),(0,o.kt)(l.Z,{value:"macos",label:"MacOS",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://sdkbinaries.tonlabs.io/tonos-cli-0_26_2-darwin.zip"},"http://sdkbinaries.tonlabs.io/tonos-cli-0_26_2-darwin.zip"))),(0,o.kt)(l.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://sdkbinaries.tonlabs.io/tonos-cli-0_26_2-win32.zip"},"http://sdkbinaries.tonlabs.io/tonos-cli-0_26_2-win32.zip")))),(0,o.kt)("h2",{id:"debots"},"DeBots"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/debots/tree/main/helloworld"},(0,o.kt)("inlineCode",{parentName:"a"},"Hello"))," \u2014 Hello World DeBot. Can be used as a template for new DeBots."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/debots/tree/main/multisig"},(0,o.kt)("inlineCode",{parentName:"a"},"Multisig"))," \u2014 DeBot for multi-signature wallet (multisig). Uses several basic DeBot interfaces: Terminal, AddressInput, AmountInput, ConfirmInput. It supports all functions of the multisig wallet contract, such as submitting and confirming transactions and viewing wallet information."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/everscale-contest/hackathon2022-tezos-DEvergence"},(0,o.kt)("inlineCode",{parentName:"a"},"DEvergence"))," \u2014 DeBot for the Ever Surf App which the user employs to connect to a Tezos wallet and transact. DeBots are smart contracts with a chat interface similar to those on Telegram.")),(0,o.kt)("h2",{id:"how-to-try-debot"},"How to try DeBot"),(0,o.kt)("p",null,"You can start by trying out ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/debots/tree/main/multisig"},(0,o.kt)("inlineCode",{parentName:"a"},"multisig"))," DeBot. It's already deployed to ",(0,o.kt)("a",{parentName:"p",href:"https://net.ever.live/"},"net.ever.live")," and can be called through any DeBot browser that supports it."),(0,o.kt)("p",null,"To try it out in Ever Surf, go to ",(0,o.kt)("a",{parentName:"p",href:"https://ever.surf/"},"https://ever.surf/")," or in ",(0,o.kt)("inlineCode",{parentName:"p"},"tonos-cli")," call:"),(0,o.kt)("h3",{id:"debot-devergence"},"DeBot ",(0,o.kt)("inlineCode",{parentName:"h3"},"DEvergence")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tonos-cli config --url eri01.net.everos.dev\ntonos-cli debot fetch 0:38a53a8bff83c57b6334f369d5ff678bdaa2b8e229d9b5552dfdda2b4d90cf92\n")),(0,o.kt)("p",null,"or in Ever Surf ",(0,o.kt)("a",{parentName:"p",href:"https://uri.ever.surf/debot/0:38a53a8bff83c57b6334f369d5ff678bdaa2b8e229d9b5552dfdda2b4d90cf92?net=devnet"},"0:38a53a8bff83c57b6334f369d5ff678bdaa2b8e229d9b5552dfdda2b4d90cf92")),(0,o.kt)("h3",{id:"debot-multisig"},"DeBot ",(0,o.kt)("inlineCode",{parentName:"h3"},"Multisig")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tonos-cli config --url eri01.net.everos.dev\ntonos-cli debot fetch 0:c69a0ed4a11b467ec1a981f29139dc3ff6af47eeacd2cd93e67a6cfc6f771cfb\n")),(0,o.kt)("p",null,"or in Ever Surf ",(0,o.kt)("a",{parentName:"p",href:"https://uri.ever.surf/debot/0:c69a0ed4a11b467ec1a981f29139dc3ff6af47eeacd2cd93e67a6cfc6f771cfb?net=devnet"},"0:c69a0ed4a11b467ec1a981f29139dc3ff6af47eeacd2cd93e67a6cfc6f771cfb")),(0,o.kt)("p",null,"If you do not have a multisig wallet to try it out with, you can use the following test wallet address and seed phrase:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"address: 0:66e01d6df5a8d7677d9ab2daf7f258f1e2a7fe73da5320300395f99e01dc3b5f\nseed phrase: final axis aware because grace sort giant defy dragon blouse motor virus\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Please don't empty out its balance, so others can try it out too.")))}b.isMDXComponent=!0}}]);