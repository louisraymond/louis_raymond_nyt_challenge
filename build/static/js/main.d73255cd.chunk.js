(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),s=(n(14),n(1)),i=n(2),l=n(4),u=n(3),h=n(5),m=(n(16),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={isClicked:!1},n.handleClick=function(){n.setState({isClicked:!n.state.isClicked})},n.getPhoto=function(e){if(0===e.length)return r.a.createElement("img",{alt:"",src:"https://myintuition.org/wp-content/uploads/2018/09/the-new-york-times-logo.jpg"});var t=[];return e.forEach(function(e){if("image"===e.type&&"thumbnail"===e.subType&&t.length<=1){var n="https://static01.nyt.com/".concat(e.url);t.push(n)}}),r.a.createElement("img",{alt:"",src:t[0]})},n.TitleOrInfo=function(e){return!0===e?r.a.createElement("div",{id:"storyCard",onClick:n.handleClick},r.a.createElement("p",{className:"snippet"},n.props.story.snippet),r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:n.props.story.web_url},"Click Here To Read The Story!")):r.a.createElement("div",{id:"storyCard",onClick:n.handleClick},r.a.createElement("h2",null,n.props.story.headline.main," "),n.getPhoto(n.props.story.multimedia))},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"story"},this.TitleOrInfo(this.state.isClicked))}}]),t}(r.a.Component)),p=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={stories:[],searchTerm:""},n.handleChange=function(e){n.setState({searchTerm:e.target.value})},n.submitSearch=function(){console.log(n.state.searchTerm)},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"fetchRequest",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";console.log(this.state.searchTerm);var n="https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=source:(%22The%20New%20York%20Times%22)".concat(t="&q="+t,"&sort=newest&api-key=W01gIBZNA12SAoUjGQ5Tvv9moSjSGshj");fetch(n).then(function(e){return e.json()}).then(function(t){e.setState({stories:t.response.docs})})}},{key:"componentDidMount",value:function(){this.fetchRequest()}},{key:"storyRender",value:function(e){return e.map(function(e){return r.a.createElement(m,{key:e.headline.main,className:"story",story:e})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"searchBarDiv"},r.a.createElement("img",{alt:"",src:"https://blueharvest.io/bundle/fd5e4e9ceeeb2801f3f86b21465237bc-327.png"}),r.a.createElement("h2",null,"Blue Harvest New York Times App"),r.a.createElement("input",{type:"text",id:"searchBar",placeholder:"Search Term Here",onChange:this.handleChange}),r.a.createElement("button",{className:"Button",onClick:function(t){return e.fetchRequest(e.state.searchTerm)}},"Search News! ")),r.a.createElement("div",{className:"container"},this.storyRender(this.state.stories)))}}]),t}(r.a.Component),d=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(18)}},[[8,2,1]]]);
//# sourceMappingURL=main.d73255cd.chunk.js.map