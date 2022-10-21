"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[1416],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6572:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:0},c="Deploy smart contracts with Locklift",s={unversionedId:"gs/firts-touch/locklift-sc",id:"gs/firts-touch/locklift-sc",title:"Deploy smart contracts with Locklift",description:"Prerequisite",source:"@site/../../src/gs/firts-touch/locklift-sc.md",sourceDirName:"gs/firts-touch",slug:"/gs/firts-touch/locklift-sc",permalink:"/gs/firts-touch/locklift-sc",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/gs/firts-touch/locklift-sc.md",tags:[],version:"current",lastUpdatedAt:1666367166,formattedLastUpdatedAt:"Oct 21, 2022",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"First Touch",permalink:"/gs/first-touch"},next:{title:"Deploy smart contracts with EverDev",permalink:"/gs/firts-touch/everdev-sc"}},p={},u=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Initialize the project",id:"initialize-the-project",level:2},{value:"The smart contract itself",id:"the-smart-contract-itself",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deploy-smart-contracts-with-locklift"},"Deploy smart contracts with Locklift"),(0,i.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,i.kt)("p",null,"Before all else, please ensure the following are installed."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Node JS \u2013 version 14 or later"),(0,i.kt)("li",{parentName:"ul"},"Docker \u2013 version 19 or later "),(0,i.kt)("li",{parentName:"ul"},"Everscale Solidity compiler (requires VC++ Runtime on Windows). ")),(0,i.kt)("h2",{id:"initialize-the-project"},"Initialize the project"),(0,i.kt)("p",null,"I. Let\u2019s initialize the project.\nTo do this, please run the following commands in the terminal: : ",(0,i.kt)("inlineCode",{parentName:"p"},"npx locklift init -f"),".",(0,i.kt)("br",{parentName:"p"}),"\n","For initializing in the current directory, refer to the following."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npx locklift init -f\n[INFO]  New Locklift project initialized in .\n[INFO]  Installing required dependencies...\n[INFO]  \nadded 12 packages, changed 1 package, and audited 181 packages in 8s\n\n23 packages are looking for funding\n  run `npm fund` for details\n\nfound 0 vulnerabilities\n\n[INFO]  LockLift initialized in . happy hacking!\n")),(0,i.kt)("p",null,"II. Good job! Let\u2019s initialize your test Locklift project with a smart-contract example:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"npx locklift init --path amazing-locklift-project")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npx locklift init --path amazing-locklift-project\n[INFO]  New Locklift project initialized in amazing-locklift-project\n[INFO]  Installing required dependencies...\n[INFO]  \nadded 180 packages, and audited 181 packages in 13s\n\n23 packages are looking for funding\n  run `npm fund` for details\n\nfound 0 vulnerabilities\n\n[INFO]  LockLift initialized in amazing-locklift-project happy hacking!\n")),(0,i.kt)("p",null,"You can see that your ",(0,i.kt)("inlineCode",{parentName:"p"},"Sample.sol")," smart contract appeared in the ",(0,i.kt)("inlineCode",{parentName:"p"},"amazing-locklift-project/contracts")," directory."),(0,i.kt)("p",null,"III. Now let's Generate keys using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/tonos-cli"},(0,i.kt)("strong",{parentName:"a"},"tonos-cli"))," (this utility comes with the everdev package) and then replace test keys with yours in line 75 of ",(0,i.kt)("inlineCode",{parentName:"p"},"locklift.config.ts"),"."),(0,i.kt)("p",null,"Use the command ",(0,i.kt)("inlineCode",{parentName:"p"},"tonos-cli genphrase"),"."),(0,i.kt)("p",null,"IV. This command uses TON Solidity Compiler and the TVM linker to build all smart contracts of the project:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"npx locklift build")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npx locklift build                                             \n[INFO]  Start downloading compiler version 0.62.0\n[INFO]  compiler version 0.62.0 successfully downloaded\n[INFO]  Start downloading lib version 0.62.0\n[INFO]  lib version 0.62.0 successfully downloaded\n[INFO]  Found 1 sources\n[INFO]  factorySource generated\n[INFO]  Built\n")),(0,i.kt)("p",null,"V. The command below runs the tests of the Mocha project.",(0,i.kt)("br",{parentName:"p"}),"\n","Run ",(0,i.kt)("inlineCode",{parentName:"p"},"npx locklift test --networklocal"),(0,i.kt)("br",{parentName:"p"}),"\n","The Locklift object will be configured and enabled automatically.\nYou don\u2019t need to import it manually:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npx locklift test --network local\n[INFO]  Found 1 sources\n[INFO]  factorySource generated\n[INFO]  Built\n\n\n  Test Sample contract\n    Contracts\n      \u2714 Load contract factory\n      \u2714 Deploy contract (192ms)\n      \u2714 Interact with contract (79ms)\n\n\n  3 passing (281ms)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"MochaJS")," is a JavaScript framework used for automated testing of apps. It can be used both on the Javascript server and in the browser. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ChaiJS")," is a library for Node JS, and like Mocha, it can also be used on the server or in the browser. Chai could be applied in conjunction with any library for testing."),(0,i.kt)("h2",{id:"the-smart-contract-itself"},"The smart contract itself"),(0,i.kt)("p",null,"Indicate Solidity Compiler version to avoid the possibility that new compilers will impact your code in the future."),(0,i.kt)("p",null,"You can access the EverX (ex., TON Labs) repository via ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tonlabs"},"this link"),".",(0,i.kt)("br",{parentName:"p"}),"\n","It will supply you with the compiler\u2019s source code, which you can use for free.",(0,i.kt)("br",{parentName:"p"}),"\n","For the Compiler API documentation, please follow ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/TON-Solidity-Compiler/blob/master/API.md"},"this link"),". "),(0,i.kt)("p",null,"Variables are usually declared in the class contract ",(0,i.kt)("inlineCode",{parentName:"p"},"{$CONTRACT-NAME} {}"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sol"},"pragma ever-solidity >= 0.61.2;\npragma AbiHeader expire;\npragma AbiHeader pubkey;\n\n// This is class that describes your smart contract.\ncontract First {\n    // Contact can have an instance verriables.\n    // In this example instance variable 'timestamp' is used to sote the time of 'constructor' or 'touch'\n    // function call\n    unit32 public timestamp;\n")),(0,i.kt)("p",null,"Let\u2019s examine the function ",(0,i.kt)("inlineCode",{parentName:"p"},"constructor() public {"),".",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Constructor")," is a function that is executed only once. Namely, when the smart contract is deployed on the blockchain."),(0,i.kt)("p",null,"Let\u2019s add the following variable to our contract uint32 public timestamp:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sol"},"pragma ever-solidity >= 0.61.2;\npragma AbiHeader expire;\npragma AbiHeader pubkey;\n\ncontract First {\n    uint16 static _nonce;\n    unit32 public timestamp;\n")),(0,i.kt)("p",null,"Now let\u2019s assign the value of the function ",(0,i.kt)("inlineCode",{parentName:"p"},"timestamp = now;"),"\nThis means that the function execution result will be included in the timestamp variable during deployment, which returns the current time in UnixTime format."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sol"},"    constructor(uint _state) public {\n        tvm.accept();\n\n        timestamp = now;\n")),(0,i.kt)("p",null,"Let\u2019s run our script on the test network:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"npx locklift run --network local --script scripts/1-deploy-sample.ts"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npx locklift run --network local --script scripts/1-deploy-sample.ts\n[INFO]  Found 1 sources\n[INFO]  factorySource generated\n[INFO]  Built\nSample deployed at: 0:069d34c52c000e52bfc53c3cf4eea58ba54802cb5f6073c81c3ed1dac14be9ea\n")),(0,i.kt)("p",null,"Now, you can see that the smart contract has been successfully compiled and deployed on the test network."),(0,i.kt)("p",null,"The address of the smart contract is the following: "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"0:069d34c52c000e52bfc53c3cf4eea58ba54802cb5f6073c81c3ed1dac14be9ea")))}m.isMDXComponent=!0}}]);