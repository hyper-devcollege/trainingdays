(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{583:function(e,t,o){e.exports=o.p+"assets/img/bo3_architecture.fe265484.png"},584:function(e,t,o){e.exports=o.p+"assets/img/cdn_create.86d9ab5f.png"},585:function(e,t,o){e.exports=o.p+"assets/img/cdn_ttfb_storageaccount.c73f383e.png"},586:function(e,t,o){e.exports=o.p+"assets/img/cdn_ttfb_cdn.27fc23f5.png"},896:function(e,t,o){"use strict";o.r(t);var r=o(35),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"💎-breakout-3-optional-user-a-content-delivery-network-for-the-spa-💎"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#💎-breakout-3-optional-user-a-content-delivery-network-for-the-spa-💎"}},[e._v("#")]),e._v(" 💎 Breakout 3 (optional): User a Content Delivery Network for the SPA 💎")]),e._v(" "),r("p",[e._v("⏲️ "),r("em",[e._v("Est. time to complete: 30 min.")]),e._v(" ⏲️")]),e._v(" "),r("h2",{attrs:{id:"here-is-what-you-will-learn-🎯"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn-🎯"}},[e._v("#")]),e._v(" Here is what you will learn 🎯")]),e._v(" "),r("p",[e._v("Now that we have set up our application in Azure and the Single Page Application is running on an Azure Storage account, it is time show you how you "),r("em",[e._v("should")]),e._v(" host the static web app in "),r("strong",[e._v("a production environment")]),e._v(".")]),e._v(" "),r("p",[e._v("In this challenge you will:")]),e._v(" "),r("ul",[r("li",[e._v("Create an Azure Content Delivery Network endpoint to serve the frontent for your users")])]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("📝 This is an "),r("strong",[e._v("optional")]),e._v(" challenge and is not neccessary to complete the workshop.")])]),e._v(" "),r("h2",{attrs:{id:"table-of-contents"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[e._v("#")]),e._v(" Table Of Contents")]),e._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"#introduction"}},[e._v("Introduction")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#create-a-content-deliver-network-and-endpoint"}},[e._v("Create a Content Deliver Network / CDN Endpoint")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#wrap-up"}},[e._v("Wrap-Up")])])]),e._v(" "),r("h2",{attrs:{id:"introduction"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),r("p",[e._v("As you know by now, an Azure Storage Account is the cheapest option to host static content in Azure. You can even consider it to deliver your Single Page Application written in React, Angular, VueJS etc. to your endusers. Nevertheless, an Azure Storage Account lacks a few features like compression, geo-replication etc. that you can only achieve with a content delivery network. Fortunately, Azure has a service where you can operate your own CDN.")]),e._v(" "),r("p",[e._v("So for the application, you will provision a CDN and put it in front of the VueJS frontend to let the CDN serve the app. In the end, the architecture will look like that:")]),e._v(" "),r("p",[r("img",{attrs:{src:o(583),alt:"Architecture Day 2 - Breakout 3",title:"Architecture Day n - Breakout 3"}})]),e._v(" "),r("h2",{attrs:{id:"create-a-content-deliver-network-and-endpoint"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-a-content-deliver-network-and-endpoint"}},[e._v("#")]),e._v(" Create a Content Deliver Network and Endpoint")]),e._v(" "),r("p",[e._v('To create a Content Delivery Network, go to the Azure markeplace, search for "CDN" and hit the "Create" button. You will be guided by a wizard to setup the CDN. Please use the following parameters:')]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Name")]),e._v(" "),r("th",[e._v("Value")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Resource Group")]),e._v(" "),r("td",[e._v("Use the existing resource group, e.g. "),r("strong",[e._v("scm-breakout-rg")])])]),e._v(" "),r("tr",[r("td",[e._v("Name")]),e._v(" "),r("td",[e._v('Give the CDN a global unique name. In the example here, we chose "azcollege"')])]),e._v(" "),r("tr",[r("td",[e._v("Pricing Tier")]),e._v(" "),r("td",[e._v("Select "),r("em",[e._v("Standard Microsoft")]),e._v(" (there are others like Akamai or Verizon, you can of course choose whichever you like)")])])])]),e._v(" "),r("p",[e._v('In the "'),r("strong",[e._v("Endpoint settings")]),e._v('" section, select "Create a new CDN endpoint" and use the following parameters:')]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Name")]),e._v(" "),r("th",[e._v("Value")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("CDN endpoint name")]),e._v(" "),r("td",[e._v("Give the endpoint a global unique name")])]),e._v(" "),r("tr",[r("td",[e._v("Origin type")]),e._v(" "),r("td",[e._v("Select "),r("em",[e._v("Storage static website")])])]),e._v(" "),r("tr",[r("td",[e._v("Origin hostname")]),e._v(" "),r("td",[e._v("Select the endpoint of your static website")])])])]),e._v(" "),r("p",[r("img",{attrs:{src:o(584),alt:"Create a CDN and endpoint",title:"Create a CDN and endpoint"}})]),e._v(" "),r("p",[e._v("When the CDN and the corresponding endpoint for your application have been created, you need to wait a few minutes until it is ready. You can check by opening a browser and load the website at the newly created location. Here in this example, it is "),r("a",{attrs:{href:"https://azcollege.azureedge.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://azcollege.azureedge.net/"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("You now get the following benefits:")]),e._v(" "),r("ul",[r("li",[e._v("Global distribution of the web app by using the correspondig "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/cdn/cdn-pop-locations",target:"_blank",rel:"noopener noreferrer"}},[e._v("point-of-presence (POP) / edge datacenters"),r("OutboundLink")],1),e._v(". E.g. Microsoft CDN has over 130 locations worldwide.")]),e._v(" "),r("li",[e._v("Compression for html, text, js, json etc. files (with gzip / "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Brotli",target:"_blank",rel:"noopener noreferrer"}},[e._v("Brotli"),r("OutboundLink")],1),e._v(")")]),e._v(" "),r("li",[e._v("HTTP/2 support")]),e._v(" "),r("li",[e._v("Caching at the CDN level. You can also customize "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/cdn/cdn-how-caching-works",target:"_blank",rel:"noopener noreferrer"}},[e._v("how Azure CDN will cache your content"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Geo-filtering (if you want to)")]),e._v(" "),r("li",[e._v("A "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/cdn/cdn-standard-rules-engine-reference",target:"_blank",rel:"noopener noreferrer"}},[e._v("rules engine"),r("OutboundLink")],1),e._v(" for URL redirecting, rewriting, caching etc.")])]),e._v(" "),r("p",[e._v("If you open the developer tools in your browser (F12), you can see the difference in performance, e.g. regarding the TTFB (time-to-first-byte) numbers:")]),e._v(" "),r("p",[e._v("Azure Storage Account "),r("strong",[e._v("Static Website")]),e._v(" (62ms TTFB):")]),e._v(" "),r("p",[r("img",{attrs:{src:o(585),alt:"TTFB with Azure Storage Account",title:"TTFB with Azure Storage Account"}})]),e._v(" "),r("p",[e._v("Azure "),r("strong",[e._v("Content Delivery Network")]),e._v(" (16ms TTFB):")]),e._v(" "),r("p",[r("img",{attrs:{src:o(586),alt:"TTFB with Azure CDN",title:"TTFB with Azure CDN"}})]),e._v(" "),r("h2",{attrs:{id:"wrap-up"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wrap-up"}},[e._v("#")]),e._v(" Wrap-Up")]),e._v(" "),r("p",[e._v("Congrats 🎉! You just created a global Content Delivery Network for your single page application and enhanced the performance for your users without rewriting anything in the application itself. Users from all over the globe will now benefit from it as they get the content streamed from the nearest possible location!")]),e._v(" "),r("p",[e._v("You could also leverage another CDN endpoint e.g. for the contact images. But in that case, you would also need to adjust the way the URLs for the pictures are persisted. However, it is definetly possible and worth a try when running a production version of the app.")]),e._v(" "),r("p",[e._v("In this Breakout Challenge, you made use of:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.microsoft.com/azure/cdn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure CDN"),r("OutboundLink")],1)])]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/day2/challenges/05-challenge-bo-2.html"}},[e._v("◀ Previous challenge")]),e._v(" | "),r("RouterLink",{attrs:{to:"/day2/"}},[e._v("🔼 Day 2")]),e._v(" | "),r("RouterLink",{attrs:{to:"/day2/challenges/07-challenge-bo-4.html"}},[e._v("Next challenge ▶")])],1)])}),[],!1,null,null,null);t.default=n.exports}}]);