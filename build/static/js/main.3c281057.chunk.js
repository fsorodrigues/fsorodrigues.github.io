(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(53)},32:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),i=a(55),s=a(12),l=a(17),m=(a(28),a(31),a(32),a(2)),u=a(3),h=a(5),p=a(4),d=a(6),b=a(19),f=a(56),E=a(57),j=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,Object.assign({},this.props,{className:"nav-link",activeClassName:"active"}))}}]),t}(n.Component),v=a(18),O=a.n(v),g=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"renderTags",value:function(){return this.props.data.tags.map(function(e){return r.a.createElement("code",{key:e,className:"p-1 rounded-lg mr-2 tag"},e)})}},{key:"render",value:function(){var e={background:"url(./media/".concat(this.props.data.slug,".png)"),backgroundSize:"cover"},t=this.props.data.url;return r.a.createElement("div",{className:"d-flex portfolio-item mb-4"},r.a.createElement("a",{href:t},r.a.createElement("div",{className:"thumb-container mr-3"},r.a.createElement("div",{className:"img-container rounded-lg",style:e}))),r.a.createElement("div",null,r.a.createElement("h6",{className:"badge badge-custom"},this.props.data.publication),r.a.createElement("a",{href:t},r.a.createElement("h6",null,this.props.data.title)),r.a.createElement("p",null,this.props.data.description),r.a.createElement("div",{className:"mb-4"},this.renderTags())))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fetchItems()}},{key:"fetchItems",value:function(){var e=this;fetch("https://mysterious-sands-79444.herokuapp.com/api/search/stories").then(function(e){return e.json()}).then(function(e){return e.data.sort(function(e,t){return e.tier-t.tier})}).then(function(t){return e.setState({data:t})})}},{key:"renderItems",value:function(){return this.state.data.map(function(e){return r.a.createElement(g,{key:e.slug,data:e})})}},{key:"render",value:function(){return this.state.data?r.a.createElement("div",{className:"portfolio"},this.renderItems()):r.a.createElement("div",{className:"portfolio"},r.a.createElement("p",null,"Oh, the perks of free accounts... I promise my code works, alright?"),r.a.createElement(O.a,{name:"pacman"}),r.a.createElement("p",null,"Cut me a little slack this time and wait for Heroku to initialize my API. It takes less than 30 seconds."))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fetchItems()}},{key:"fetchItems",value:function(){var e=this;fetch("https://mysterious-sands-79444.herokuapp.com/api/search/about").then(function(e){return e.json()}).then(function(t){return e.setState({data:t.data.filter(function(e){return"about-me"===e.section})[0].text})})}},{key:"renderItems",value:function(){return this.state.data.map(function(e,t){return r.a.createElement("p",{key:t},e)})}},{key:"render",value:function(){return this.state.data?r.a.createElement("div",{className:"about-container"},this.renderItems()):r.a.createElement("div",{className:"about-container"},r.a.createElement("p",null,"loading..."))}}]),t}(n.Component),N=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("nav",{className:"mb-4"},r.a.createElement("ul",{className:"nav nav-tabs"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(j,{to:"/home",exact:!0},"My work")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(j,{to:"/home/about-me"},"More about me")))),r.a.createElement(b.a,{path:"".concat(this.props.match.path),exact:!0,component:y}),r.a.createElement(b.a,{path:"".concat(this.props.match.path,"/about-me"),component:k}))}}]),t}(n.Component),w=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-container"},r.a.createElement("p",{className:"mb-4"},"Hi! I'm ",r.a.createElement("strong",null,"Felippe Rodrigues"),". I use ",r.a.createElement("code",{className:"p-1 rounded-lg"},"data")," and ",r.a.createElement("code",{className:"p-1 rounded-lg"},"code")," to make journalism."),r.a.createElement("p",{className:"mb-4"},"I currently work at ",r.a.createElement("a",{href:"https://www.vtdigger.org"},"VTDigger.org")," as a visual journalist. I'm a front-end developer and data geek too. My reporting and graphics can also be seen on ",r.a.createElement("a",{href:"https://www.politifact.com"},"PolitiFact"),", ",r.a.createElement("a",{href:"https://www.insideclimatenews.org/"},"InsideClimate News"),", ",r.a.createElement("a",{href:"https://www.smithsonianmag.com/"},"Smithsonian Mag"),", among others."))}}]),t}(n.Component),I=a(15),C=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer-container mt-5"},r.a.createElement("ul",{className:"list-group list-group-horizontal justify-content-around border-top"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("h3",null,r.a.createElement(I.a,{icon:["fab","twitter"]}))),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("h3",null,r.a.createElement(I.a,{icon:["fab","github"]})))))}}]),t}(n.Component),x=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"entry-content col-12 col-sm-10 col-md-8 col-lg-6 mb-5"},r.a.createElement(w,null),r.a.createElement(N,{match:this.props.match}),r.a.createElement(C,null))}}]),t}(n.Component),M=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"admin-content col-12"},r.a.createElement("h3",null,"Admin"))}}]),t}(n.Component),S=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row d-flex flex-column align-items-center"},r.a.createElement(b.a,{path:"/",exact:!0,render:function(){return r.a.createElement(f.a,{to:"/home"})}}),r.a.createElement(b.a,{path:"/home",component:x}),r.a.createElement(b.a,{path:"/admin",component:M}))}}]),t}(n.Component);s.b.add(l.a),o.a.render(r.a.createElement("div",{className:"container-fluid mt-5 mb-4"},r.a.createElement(i.a,null,r.a.createElement(S,null))),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.3c281057.chunk.js.map