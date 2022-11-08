"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[9267],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,v=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(v,o(o({ref:t},p),{},{components:n})):a.createElement(v,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(4334),l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),r=n(7294),l=n(4334),o=n(2389),i=n(7392),s=n(7094),c=n(2466),p="tabList__CuJ",u="tabItem_LNqP";function d(e){var t,n,o=e.lazy,d=e.block,m=e.defaultValue,v=e.values,h=e.groupId,k=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=v?v:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.l)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==y&&!f.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),N=w.tabGroupChoices,x=w.setTabGroupChoices,T=(0,r.useState)(y),E=T[0],C=T[1],D=[],A=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var O=N[h];null!=O&&O!==E&&f.some((function(e){return e.value===O}))&&C(O)}var I=function(e){var t=e.currentTarget,n=D.indexOf(t),a=f[n].value;a!==E&&(A(t),C(a),null!=h&&x(h,String(a)))},j=function(e){var t,n=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":var a,r=D.indexOf(e.currentTarget)+1;n=null!=(a=D[r])?a:D[0];break;case"ArrowLeft":var l,o=D.indexOf(e.currentTarget)-1;n=null!=(l=D[o])?l:D[D.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},k)},f.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return D.push(e)},onKeyDown:j,onClick:I},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(g.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},7360:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return m}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),o=n(5488),i=n(5162),s=["components"],c={sidebar_position:2,description:"Get started by creating a new DApp using EverDev"},p="Deploy smart contracts with EverDev",u={unversionedId:"develop/tutorial/everdev-sc",id:"develop/tutorial/everdev-sc",title:"Deploy smart contracts with EverDev",description:"Get started by creating a new DApp using EverDev",source:"@site/../../src/develop/tutorial/everdev-sc.md",sourceDirName:"develop/tutorial",slug:"/develop/tutorial/everdev-sc",permalink:"/develop/tutorial/everdev-sc",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/tutorial/everdev-sc.md",tags:[],version:"current",lastUpdatedAt:1667886893,formattedLastUpdatedAt:"Nov 8, 2022",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Get started by creating a new DApp using EverDev"},sidebar:"tutorialSidebar",previous:{title:"Deploy smart contracts with Locklift",permalink:"/develop/tutorial/locklift-sc"},next:{title:"Smart Digital Assets",permalink:"/develop/tutorial/smart-digital-assets"}},d={},m=[{value:"What you can learn",id:"what-you-can-learn",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"Generate a new project",id:"generate-a-new-project",level:2},{value:"Configure Giver",id:"configure-giver",level:3},{value:"Generate a new smart-contract",id:"generate-a-new-smart-contract",level:2},{value:"Compile smart-contract",id:"compile-smart-contract",level:2},{value:"Deploy smart-contract",id:"deploy-smart-contract",level:2},{value:"Generate the key pair for deploy contract",id:"generate-the-key-pair-for-deploy-contract",level:3},{value:"Deploy",id:"deploy",level:3},{value:"Address smart-contract",id:"address-smart-contract",level:2},{value:"Interact with smart-contract",id:"interact-with-smart-contract",level:2}],v={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"deploy-smart-contracts-with-everdev"},"Deploy smart contracts with EverDev"),(0,l.kt)("p",null,"This guide is designed for developers interested in smart-contracts programming, irrespective of their prior experience in blockchain development.",(0,l.kt)("br",{parentName:"p"}),"\n","Thanks to our well structured step by step guidance, developers will gradually learn all the information needed to start deploying and interacting with smart-contracts. "),(0,l.kt)("p",null,"In the interest of developers, Everscale network puts at their disposal smart-contracts programming using developer-friendly languages: ",(0,l.kt)("strong",{parentName:"p"},"Solidity")," and ",(0,l.kt)("strong",{parentName:"p"},"C++"),"."),(0,l.kt)("p",null,"It should be noted that for developers experienced with Python or other languages such as C, C++, JavaScript, and C#, starting programming smart-contracts will be of maximum ease due to syntax similarity.",(0,l.kt)("br",{parentName:"p"}),"\n","Familiarity with the mentioned programming languages will help developers make sense of differences in smart-contract languages."),(0,l.kt)("p",null,"Before proceeding with the launch of your Dapp, let us first go through an overview explaining what technical information needed for up-to-date smart-contracts programming we prepared for our developers."),(0,l.kt)("h2",{id:"what-you-can-learn"},"What you can learn"),(0,l.kt)("p",null,"Experienced developers with advanced knowledge of Solidity programming language and solid understanding of Ethereum blockchain design, are advised to consult our ",(0,l.kt)("a",{parentName:"p",href:"../../learn/"},"Learn section")," where all necessary technical information is provided in a comprehensive way. "),(0,l.kt)("p",null,"For those with no prior knowledge of smart contracts, as well as for intermediaries and advanced developers who strive to learn new things in the blockchain industry, we recommend you to consult our ",(0,l.kt)("a",{parentName:"p",href:"/develop/debots/getting-started"},"DeBots page"),".",(0,l.kt)("br",{parentName:"p"}),"\n","DeBots, in essence, is an intuitive, no prior knowledge required interface for smart contracts on the Everscale blockchain."),(0,l.kt)("p",null,"Having studied the information provided above, now, let's start our DApp launch."),(0,l.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://nodejs.org"},"Node.js >= 14.x installed"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},"Node Version Manager (NVM)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/coreybutler/nvm-windows"},"NVM-windows")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/#download-and-install"},"Docker >= 19.x installed and running"))),(0,l.kt)("h2",{id:"generate-a-new-project"},"Generate a new project"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir my-project && cd $_\nnpm init --force\nnpm install --save everdev\n")),(0,l.kt)("h3",{id:"configure-giver"},"Configure Giver"),(0,l.kt)("p",null,"Giver wallet that will sponsor ",(0,l.kt)("strong",{parentName:"p"},"EVER")," for deploy operation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Configure shared private key:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev signer add giver 172af540e43a524763dd53b26a066d472a97c4de37d5498170564510608250c3\n")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"local",label:"local",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Set Local Blockchain ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/tonos-se"},"SE (Startup Edition)")," as the default network:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Startup ",(0,l.kt)("inlineCode",{parentName:"strong"},"SE")," at this step, you may have to wait until the docker image is downloaded:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev se start\n")),(0,l.kt)("p",null,"A local network explorer is available at ",(0,l.kt)("a",{parentName:"p",href:"http://localhost"},"localhost")," check it."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Setup giver:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"address=0:b5e9240fc2d2f1ff8cbb1d1dee7fb7cae155e5f6320e585fcc685698994a19a5\nnpx everdev network giver se $address --signer giver\n"))),(0,l.kt)(i.Z,{value:"devnet",label:"devnet",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Setup endpoint:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev network add devnet https://devnet-sandbox.evercloud.dev\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Setup giver:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"address=0:b5e9240fc2d2f1ff8cbb1d1dee7fb7cae155e5f6320e585fcc685698994a19a5\nnpx everdev network giver devnet $address --signer giver\n")))),(0,l.kt)("h2",{id:"generate-a-new-smart-contract"},"Generate a new smart-contract"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev sol create App\n")),(0,l.kt)("p",null,"You got ",(0,l.kt)("inlineCode",{parentName:"p"},"App.sol"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma ton-solidity >= 0.35.0;\npragma AbiHeader expire;\n\n// This is class that describes you smart contract.\ncontract App {\n    // Contract can have an instance variables.\n    // In this example instance variable `timestamp`\n    // is used to store the time of `constructor`\n    // or `touch` function call.\n    uint32 public timestamp;\n\n    // Contract can have a `constructor`. \n    // The function that will be called when contract will be deployed to the blockchain.\n    // In this example constructor adds current time to the instance variable.\n    // All contracts need call `tvm.accept()` for succeeded deploy.\n    constructor() public {\n        // Check that contract's public key is set\n        require(tvm.pubkey() != 0, 101);\n        // Check that message has signature (msg.pubkey() is not zero) and\n        // message is signed with the owner's private key\n        require(msg.pubkey() == tvm.pubkey(), 102);\n        // The current smart contract agrees to buy some gas to finish the\n        // current transaction. This actions required to process external\n        // messages, which bring no value (hence no gas) with themselves.\n        tvm.accept();\n\n        timestamp = now;\n    }\n\n    function renderHelloWorld () public pure returns (string) {\n        return 'helloWorld';\n    }\n\n    // Updates variable `timestamp` with current blockchain time.\n    function touch() external {\n        // Each function that accepts external message must check that\n        // message is correctly signed.\n        require(msg.pubkey() == tvm.pubkey(), 102);\n        // Tells to the TVM that we accept this message.\n        tvm.accept();\n        // Update timestamp\n        timestamp = now;\n    }\n\n    function sendValue(address dest, uint128 amount, bool bounce) public view {\n        require(msg.pubkey() == tvm.pubkey(), 102);\n        tvm.accept();\n        // It allows to make a transfer with arbitrary settings\n        dest.transfer(amount, bounce, 0);\n    }\n}\n")),(0,l.kt)("p",null,"For more about ",(0,l.kt)("a",{parentName:"p",href:"https://docs.soliditylang.org/en/v0.8.10/structure-of-a-contract.html"},"Solidity")," and specific of ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/TON-Solidity-Compiler/blob/master/API.md"},"Everscale Solidity")),(0,l.kt)("h2",{id:"compile-smart-contract"},"Compile smart-contract"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev sol compile App.sol\n")),(0,l.kt)("p",null,"You are got:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"App.abi.json")," \u2014 ",(0,l.kt)("strong",{parentName:"li"},"ABI")," ",(0,l.kt)("inlineCode",{parentName:"li"},"*.abi.json")," file \u2014 a file that describes the contract interface, the methods and parameters used to interact with it, for detail see ",(0,l.kt)("a",{parentName:"li",href:"https://docs.ton.dev/86757ecb2/p/40ba94-abi-specification-v2"},"ABI Specification V2"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"App.tvc")," \u2014 ",(0,l.kt)("strong",{parentName:"li"},"TVC")," ",(0,l.kt)("inlineCode",{parentName:"li"},"*.tvc")," file \u2014 the compiled smart contract file. Used only when generating contract address and deploying contract code to the blockchain.")),(0,l.kt)("h2",{id:"deploy-smart-contract"},"Deploy smart-contract"),(0,l.kt)("h3",{id:"generate-the-key-pair-for-deploy-contract"},"Generate the key pair for deploy contract"),(0,l.kt)("p",null,"Key pair file \u2014 used calculate address contracts. In ",(0,l.kt)("inlineCode",{parentName:"p"},"--sign")," parameter the corresponding seed phrase may be used instead of it."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev signer generate coder\nnpx everdev signer default coder\n")),(0,l.kt)("h3",{id:"deploy"},"Deploy"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," ",(0,l.kt)("strong",{parentName:"p"},"EVER")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"1000000000")," ",(0,l.kt)("strong",{parentName:"p"},"nano EVER"))),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"local",label:"local",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev contract deploy --network se --value 1000000000 App\n"))),(0,l.kt)(i.Z,{value:"devnet",label:"devnet",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev contract deploy --network devnet --value 1000000000 App\n")))),(0,l.kt)("h2",{id:"address-smart-contract"},"Address smart-contract"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Address of smart-contract is calculated from ",(0,l.kt)("inlineCode",{parentName:"strong"},"TVC")," and signer (",(0,l.kt)("inlineCode",{parentName:"strong"},"coder"),") public:")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"local",label:"local",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev contract info --network se --signer coder App\n"))),(0,l.kt)(i.Z,{value:"devnet",label:"devnet",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev contract info --network devnet --signer coder App\n")))),(0,l.kt)("h2",{id:"interact-with-smart-contract"},"Interact with smart-contract"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Read:")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"local",label:"local",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev contract run-local --network se App renderHelloWorld\nnpx everdev contract run-local --network se App timestamp\n"))),(0,l.kt)(i.Z,{value:"devnet",label:"devnet",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev contract run-local --network devnet App renderHelloWorld\nnpx everdev contract run-local --network devnet App timestamp\n")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Write:")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"local",label:"local",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev contract run --network se --signer coder App touch\n"))),(0,l.kt)(i.Z,{value:"devnet",label:"devnet",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev contract run --network devnet --signer coder App touch\n")))),(0,l.kt)("p",null,"For more details see: ",(0,l.kt)("a",{parentName:"p",href:"/develop/tools/overview"},"Get started with Development Tools"),"."))}h.isMDXComponent=!0}}]);