(this["webpackJsonprandon-quote-generator"]=this["webpackJsonprandon-quote-generator"]||[]).push([[0],{11:function(t,e,o){t.exports=o(21)},17:function(t,e,o){},19:function(t,e,o){t.exports=o.p+"static/media/logo.5d5d9eef.svg"},20:function(t,e,o){},21:function(t,e,o){"use strict";o.r(e);var a=o(0),r=o.n(a),n=o(5),s=o.n(n),i=(o(16),o(17),o(2)),l=o.n(i),c=o(6),u=o(7),m=o(8),h=o(1),d=o(10),p=o(9),g=(o(19),o(20),o(4),function(t){Object(d.a)(o,t);var e=Object(p.a)(o);function o(t){var a;return Object(u.a)(this,o),(a=e.call(this,t)).setRandomQuoteFromApi=Object(c.a)(l.a.mark((function t(){var e,o,r,n,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");case 2:return e=t.sent,t.next=5,e.json();case 5:o=t.sent,r=o.quotes,n=r.length,s=Math.floor(Math.random()*(n-1)+1),a.setState({randomQuote:r[s].quote,randomAuthor:r[s].author});case 10:case"end":return t.stop()}}),t)}))),a.state={primaryColor:"brown",randomQuote:"Every strike brings me closer to the home run",randomAuthor:"Pavan",quoteStyle:"h3 p-4 bg-transition",openingQuoteMarkStyle:"fa fa-quote-left bg-transition",closingQuoteMarkStyle:"fa fa-quote-right bg-transition",authorStyle:"float-right pr-4 pt-2 font-weight-normal bg-transition"},a.setRandomQuoteFromApi=a.setRandomQuoteFromApi.bind(Object(h.a)(a)),a.setRandomBackgroundColor=a.setRandomBackgroundColor.bind(Object(h.a)(a)),a.callToSetRandomQuoteAndColor=a.callToSetRandomQuoteAndColor.bind(Object(h.a)(a)),a}return Object(m.a)(o,[{key:"setRandomBackgroundColor",value:function(){var t="hsl("+360*Math.random()+",70%,50%)";this.setState({primaryColor:t})}},{key:"callToSetRandomQuoteAndColor",value:function(){var t=this;this.setState({quoteStyle:this.state.quoteStyle+" quote-transition",openingQuoteMarkStyle:this.state.openingQuoteMarkStyle+" quote-transition",closingQuoteMarkStyle:this.state.closingQuoteMarkStyle+" quote-transition",authorStyle:this.state.authorStyle+" quote-transition"}),setTimeout((function(){t.setState({quoteStyle:"h3 p-4 bg-transition",openingQuoteMarkStyle:"fa fa-quote-left bg-transition",closingQuoteMarkStyle:"fa fa-quote-right bg-transition",authorStyle:"float-right pr-4 pt-2 font-weight-normal bg-transition"})}),2200),this.setRandomQuoteFromApi(),this.setRandomBackgroundColor()}},{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid vh-100 bg-transition",style:{backgroundColor:this.state.primaryColor}},r.a.createElement("div",{className:"col-sm-12 col-lg-4 bg-black rounded mx-auto text-center p-3 bg-white quote-container",id:"quote-box",style:{height:"auto",position:"relative",top:"37%"}},r.a.createElement("p",{className:"col-md-12"},r.a.createElement("i",{className:this.state.openingQuoteMarkStyle,style:{fontSize:"1.5rem",color:this.state.primaryColor}}),r.a.createElement("span",{className:this.state.quoteStyle,style:{color:this.state.primaryColor},id:"text"},this.state.randomQuote),r.a.createElement("i",{className:this.state.closingQuoteMarkStyle,style:{fontSize:"1.5rem",color:this.state.primaryColor}})),r.a.createElement("p",{className:this.state.authorStyle,id:"author",style:{position:"relative",bottom:"1rem",color:this.state.primaryColor}},"-",this.state.randomAuthor),r.a.createElement("br",null),r.a.createElement("div",{className:"btn-group w-100"},r.a.createElement("button",{className:"rounded ml-2 p-0 bg-transition",style:{width:"3rem",backgroundColor:this.state.primaryColor}},r.a.createElement("a",{id:"tweet-quote",href:"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=".concat(this.state.randomQuote)},r.a.createElement("i",{className:"fa fa-twitter",style:{fontSize:"1.5rem",color:"white"}}))),r.a.createElement("button",{className:"rounded ml-2 p-0 bg-transition",style:{width:"3rem",backgroundColor:this.state.primaryColor}},r.a.createElement("a",{href:"https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Jesus&content=".concat(this.state.randomQuote,"buttons&shareSource=tumblr_share_button")},r.a.createElement("i",{className:"fa fa-tumblr",style:{fontSize:"1.5rem",color:"white"}}))),r.a.createElement("button",{id:"new-quote",className:"float-right ml-auto px-2 py-1 mr-2 rounded bg-transition",style:{width:"6.5rem",backgroundColor:this.state.primaryColor,color:"white"},onClick:this.callToSetRandomQuoteAndColor},r.a.createElement("span",{className:"align-center"},"New Quote")))))}}]),o}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=document.createElement("script");f.setAttribute("src","https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"),document.head.appendChild(f),s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.e9bff8ee.chunk.js.map