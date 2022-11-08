"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[5878],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},987:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),i=["components"],s={title:"Replay attacks",description:"Protection against replay attacks",sidebar_position:8},c="Protection against replay attacks for external messages",l={unversionedId:"develop/smart-contracts/replay-attacks-protection",id:"develop/smart-contracts/replay-attacks-protection",title:"Replay attacks",description:"Protection against replay attacks",source:"@site/../../src/develop/smart-contracts/30-replay-attacks-protection.md",sourceDirName:"develop/smart-contracts",slug:"/develop/smart-contracts/replay-attacks-protection",permalink:"/develop/smart-contracts/replay-attacks-protection",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/smart-contracts/30-replay-attacks-protection.md",tags:[],version:"current",lastUpdatedAt:1667886893,formattedLastUpdatedAt:"Nov 8, 2022",sidebarPosition:8,frontMatter:{title:"Replay attacks",description:"Protection against replay attacks",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Gas limits",permalink:"/develop/smart-contracts/gas-and-messages-limits"},next:{title:"Upgrade contracts",permalink:"/develop/smart-contracts/how-to-upgrade-contracts"}},p={},u=[],d={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"protection-against-replay-attacks-for-external-messages"},"Protection against replay attacks for external messages"),(0,o.kt)("p",null,"External messages can be in any format, for example, an external message could be a plain text without a signature or any data signed with a private key."),(0,o.kt)("p",null,"In the TON protocol itself, there is no built-in protection against validators including your message any number of times."),(0,o.kt)("p",null,"How can this be implemented? Validators can store all external messages and not allow the same message to be inserted into processing twice at the protocol level. But this approach is contrary to the philosophy of TON, because it leads to an ever-increasing tail of data that must be stored by validators and, in our network, all data must pay for its storage in the state."),(0,o.kt)("p",null,"So protection against replay attacks was shifted to smart contracts so that they can implement the protection that suits them."),(0,o.kt)("p",null,"Let me remind you how external messages work. You send a message to a contract out of nowhere, the validator gives it ",(0,o.kt)("inlineCode",{parentName:"p"},"10k gas")," credits and tries to apply it. If the contract agrees to do ",(0,o.kt)("inlineCode",{parentName:"p"},"tvm.accept()")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"10k gas")," then it will pay for the message and the transaction will go through. If there is no ",(0,o.kt)("inlineCode",{parentName:"p"},"tvm.accept()")," call or an exception occurs, then this message will not go to the block."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"TON-Solidity")," has built-in protection against replay attacks. It works at the ",(0,o.kt)("inlineCode",{parentName:"p"},"SDK")," + ",(0,o.kt)("inlineCode",{parentName:"p"},"ABI level"),". To work with a smart contract using sdk or tonos-cli, you need ",(0,o.kt)("inlineCode",{parentName:"p"},"contract.abi.json"),", a description of the functions and their variables, so that the SDK can properly package the call. This abi has a ",(0,o.kt)("inlineCode",{parentName:"p"},"header")," field where Solidity always writes at least :",(0,o.kt)("inlineCode",{parentName:"p"},"time")," when compiling. This is an instruction for the ",(0,o.kt)("inlineCode",{parentName:"p"},"SDK")," to apply a time to each external message, which will be used to protect against replay attacks."),(0,o.kt)("p",null,"Solidity, before processing an external message, performs a check, which can be understood as something similar to the following (pseudocode):"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This is not the actual code, so approach this skeptically")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"contract any {\n    uint64 hidden_ts_replay_variable;\n    \n    func beforeAnyExternalMessageProcessing() {\n        uint64 header_time = msg.header.time;\n        \n        require(uint64(now) + 3600 > header_time, 52);\n        require(hidden_ts_replay_variable < header_time, 52);\n        \n        hidden_ts_replay_variable = header_time;\n    }\n}\n")),(0,o.kt)("p",null,"As you can understand, this default check is very simple but will not work well if you want to send a bunch of parallel external messages to a contract. So you can always come up with a more comprehensive checking mechanism, for example something like ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/tonos-se/blob/9466178c356180577c0408882d32e1f3c1c34be7/contracts/giver_v2/GiverV2.sol#L51"},"this"),"."))}m.isMDXComponent=!0}}]);