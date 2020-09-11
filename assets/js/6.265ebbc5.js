(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{355:function(e,t,a){e.exports=a.p+"assets/img/rplace.39a64ca5.png"},356:function(e,t,a){e.exports=a.p+"assets/img/pixel-demo.a4f6abd1.png"},395:function(e,t,a){"use strict";a.r(t);var s=a(42),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"pixel-demo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pixel-demo"}},[e._v("#")]),e._v(" Pixel Demo")]),e._v(" "),s("p",[e._v("This demo is roughly based on "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Place_(Reddit)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reddit's\nr/Place"),s("OutboundLink")],1),e._v(", but has a\nnumber of additional features that showcase the unique affordances of\nthe Agoric platform, including: higher-order contracts, easy creation\nof new assets, and safe code reusability.")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[s("img",{attrs:{src:a(355),alt:"Reddit's r/place"}})])])]),e._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("em",[e._v("Reddit's r/place as a social experiment in cooperation")])])])])]),e._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[s("img",{attrs:{src:a(356),alt:"Pixel Gallery"}})])])]),e._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("em",[e._v("The testnet pixel demo. Slightly fewer pixels.")])])])])]),e._v(" "),s("p",[e._v("The pixel demo runs on "),s("a",{attrs:{href:"https://github.com/Agoric/cosmic-swingset#agorics-cosmic-swingset",target:"_blank",rel:"noopener noreferrer"}},[e._v("our private testnet"),s("OutboundLink")],1),e._v(". For instructions on how to\nrun a local, off-chain version for yourself, please see "),s("a",{attrs:{href:"https://github.com/Agoric/cosmic-swingset#different-scenarios",target:"_blank",rel:"noopener noreferrer"}},[e._v("Scenario 3\nhere"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),s("p",[e._v("In the pixel demo, the goal is to be able to amass enough pixels to\ndraw a design on a pixel canvas. You start out empty-handed, with no\nmoney and no pixels to your name. However, you do have access to the "),s("em",[e._v("gallery")]),e._v(", the\nadministrator of the canvas. The gallery has a handful of\nmethods that allow you to obtain a few pixels for free, color them,\nsell them, and buy more.")]),e._v(" "),s("p",[e._v("To access the gallery, type "),s("code",[e._v("home.gallery")]),e._v(" in the REPL. "),s("code",[e._v("home.gallery")]),e._v("\nis a remote object (what we call a "),s("em",[e._v("presence")]),e._v("). It actually lives in\nanother environment (what we call a "),s("em",[e._v("vat")]),e._v("). Instead of "),s("code",[e._v("obj.foo()")]),e._v(", we\ncan write "),s("code",[e._v("E(obj).foo()")]),e._v(" or the syntactic sugar, "),s("code",[e._v("obj~.foo()")]),e._v(" and get a\npromise for the result. We call this syntactic sugar "),s("a",{attrs:{href:"https://github.com/Agoric/proposal-wavy-dot",target:"_blank",rel:"noopener noreferrer"}},[e._v("'wavy dot'"),s("OutboundLink")],1),e._v('. The syntax\nmeans "deliver the message foo() to the actual object asynchronously,\nin its own turn, wherever and whenever it is, even if it is local."\nUsing '),s("code",[e._v("E")]),e._v(" or "),s("code",[e._v("~.")]),e._v(", you can talk asynchronously to local and remote objects\nin exactly the same way. For example, the first thing you might want\nto do is tap the gallery faucet to get a pixel for free:")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("px "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" home"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("gallery"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("~")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("tapFaucet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),s("p",[s("code",[e._v("tapFaucet")]),e._v(" returns a pixel and saves it under "),s("code",[e._v("px")]),e._v(". The pixel that you receive is\nactually in the form of an ERTP payment. "),s("RouterLink",{attrs:{to:"/ertp/guide/"}},[e._v("ERTP")]),e._v(" (Electronic Rights Transfer Protocol)\nis our smart contract framework for handling transferable objects.\nPayments have a few functions. Let's call "),s("code",[e._v("getBalance()")]),e._v(" on our payment\nto see which pixel we received.")],1),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("px"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("~")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("getBalance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),s("p",[e._v("You might see something like:")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"label"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"assay"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Presence "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("15")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"allegedName"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"pixels"')]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"units"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"x"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"y"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("The "),s("code",[e._v("units")]),e._v(" tells us which pixels we've received. "),s("code",[e._v("{ x:1, y:4 }")]),e._v("\nmeans that we got a pixel that is in the fifth row ("),s("code",[e._v("y:4")]),e._v(") and 2 pixels\nfrom the left ("),s("code",[e._v("x:1")]),e._v("). To color the pixel, we need to get the use\nobject from the payment. You can think of the use object as a regular\nJavaScript object that just happens to be associated with an ERTP\npayment.")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("use "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" px"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("~")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("getUse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),s("p",[e._v("Your use object will be stored under "),s("code",[e._v("use")]),e._v(". Now we\ncan use it to color.")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("use"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("~")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("changeColorAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'#FF69B4'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),s("p",[e._v("The following commands show a pixel being obtained from the faucet,\ngetting the 'use' object, coloring the pixel, and selling a pixel to the gallery through an\nescrow smart contract.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("px = home.gallery~.tapFaucet();\npx~.getBalance();\nuse = px~.getUse();\nuse~.changeColorAll('yellow');\npx2 = home.gallery~.tapFaucet();\nasset2 = px2~.getBalance();\nasset2.then(a => home.gallery~.pricePixelUnitOps(a));\nhostInvite = home.gallery~.sellToGallery(asset2);\nseat = hostInvite~.host~.redeem(hostInvite~.inviteP);\noffered = seat~.offer(px2);\nassays = home.gallery~.getAssays();\npxPurse = assays~.pixelAssay~.makeEmptyPurse();\ndustPurse = assays~.dustAssay~.makeEmptyPurse();\ncollected = offered.then(_ => home.gallery~.collectFromGallery(seat, dustPurse, pxPurse, 'my escrow'));\ncollected.then(_ => dustPurse~.getBalance());\n")])])]),s("p",[e._v("Woohoo! We're now a few dust richer than when we started.")]),e._v(" "),s("p",[e._v("Learn more about ERTP and our pixel demo "),s("a",{attrs:{href:"https://github.com/Agoric/ERTP",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("To see the contracts you've uploaded "),s("a",{attrs:{href:"https://github.com/Agoric/cosmic-swingset/blob/master/lib/ag-solo/contracts/README-contract.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("as per the README"),s("OutboundLink")],1),e._v(", try:")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("home"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("uploads"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("~")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("list")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\nhome"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("uploads"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("~")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'encouragementBot'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("~")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("spawn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("~")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("encourageMe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Person'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),s("h2",{attrs:{id:"initial-endowments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initial-endowments"}},[e._v("#")]),e._v(" Initial Endowments")]),e._v(" "),s("p",[e._v("When a client is started up, it has a few items in a record named home.")]),e._v(" "),s("ul",[s("li",[e._v("gallery: the Pixel Gallery, described above")]),e._v(" "),s("li",[e._v("purse: a purse that can hold pixel Dust")]),e._v(" "),s("li",[e._v("moolah: a purse that starts out with 1000 "),s("code",[e._v("moolah")])]),e._v(" "),s("li",[e._v("sharingService: a service that makes it possible to pass capabilities between vats")]),e._v(" "),s("li",[e._v("canvasStatePublisher: a service with the message subscribe(callback)")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/Agoric/cosmic-swingset/blob/master/lib/ag-solo/contracts/README-contract.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("uploads"),s("OutboundLink")],1),e._v(": a private directory\nof contracts you've uploaded")]),e._v(" "),s("li",[e._v("registrar: a public directory for published objects")]),e._v(" "),s("li",[e._v("localTimerService and chainTimerService: tools for scheduling")]),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/zoe/guide/"}},[e._v("zoe")]),e._v(": support for contracts with Offer-Safety Enforcement")],1)]),e._v(" "),s("h3",{attrs:{id:"sharingservice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sharingservice"}},[e._v("#")]),e._v(" sharingService")]),e._v(" "),s("p",[s("code",[e._v("home.sharingService")]),e._v(" is a service that lets you connect to\nother vats that are connected to the same remote chain vat. sharingService\nhas three methods: "),s("code",[e._v("createSharedMap(name)")]),e._v(", "),s("code",[e._v("grabSharedMap(name)")]),e._v(", and\n"),s("code",[e._v("validate(sharedMap)")]),e._v(". These allow you to create a SharedMap which you can\nuse to pass items to and from another vat. The sharingService's\nmethods are designed to allow you to share a newly created sharedMap\nwith one other vat, after which the name can't be reused.")]),e._v(" "),s("p",[e._v("The way to use it is to call "),s("code",[e._v("createSharedMap()")]),e._v("with a name that you share\nwith someone else. They then call "),s("code",[e._v("grabSharedMap")]),e._v("() and pass the name you\ngave. If they get a valid SharedMap, then you have a private\nchannel. If they don't get it, then someone else must have tried to\ngrab the name first, and you can discard that one and try again.")]),e._v(" "),s("p",[e._v("Once you each have an end, either of you can call "),s("code",[e._v("addEntry(key, value)")]),e._v("\nto store an object, which the other party can retrieve with\n"),s("code",[e._v("lookup(key)")]),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"canvasstatepublisher"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#canvasstatepublisher"}},[e._v("#")]),e._v(" canvasStatePublisher")]),e._v(" "),s("p",[s("code",[e._v("home.canvasStatePublisher")]),e._v(" has a "),s("code",[e._v("subscribe()")]),e._v(" method, which takes a callback\nfunction. When the state of the pixel gallery changes, the callback's\n"),s("code",[e._v("notify()")]),e._v(" method is called with the new state.")])])}),[],!1,null,null,null);t.default=n.exports}}]);