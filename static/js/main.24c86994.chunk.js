(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(53)},31:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(18),r=n.n(c),s=(n(31),n(7)),i=n(8),l=n(10),u=n(6),d=n(9),p=(n(32),n(55)),h=n(56),m=n(24),v=n(3),b=n.n(v),g=n(11),f=n(16),y=(n(34),function(e){var t=e.movie;return o.a.createElement(f.a,{style:{backgroundImage:"url(https://image.tmdb.org/t/p/w500".concat(t.poster_path,")")},to:"/movie/".concat(t.id)},t.title)}),k="61235ac9e4979ee2d0f4a4baf05eeef4",x={fetchMovies:function(e,t){return w.apply(this,arguments)},getMovieById:function(e){return _.apply(this,arguments)}};function w(){return(w=Object(g.a)(b.a.mark(function e(t,n){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(k,"&query=").concat(t,"&page=").concat(n));case 2:return a=e.sent,e.next=5,a.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function _(){return(_=Object(g.a)(b.a.mark(function e(t){var n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?&api_key=").concat(k,"&append_to_response=videos"));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}n(37);var E=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={movies:[],page:1},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.movies;return o.a.createElement("div",null,o.a.createElement("div",{className:"search"},o.a.createElement("input",{type:"text",placeholder:"search movie"}),o.a.createElement("button",{onClick:this.loadMovies.bind(this)},"search")),o.a.createElement("div",{className:"movie-list"},e.length>0&&e.map(function(e){return o.a.createElement(y,{movie:e,key:e.id})})))}},{key:"componentDidMount",value:function(){var e=Object(g.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadMoviesByCat();case 2:t=e.sent,this.setState({movies:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"loadMoviesByCat",value:function(){var e=Object(g.a)(b.a.mark(function e(){var t,n=arguments;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.length>0&&void 0!==n[0]?n[0]:"now-playing",e.next=3,fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=61235ac9e4979ee2d0f4a4baf05eeef4&language=en-US&page=1");case 3:return t=e.sent,e.next=6,t.json();case 6:return t=e.sent,e.abrupt("return",t.results);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"loadMovies",value:function(){var e=Object(g.a)(b.a.mark(function e(){var t,n,a,o=arguments;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:1,n=document.querySelector("input").value,e.next=4,x.fetchMovies(n,t);case 4:a=e.sent,this.setState({movies:a.results});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(a.Component),O=n(54),j=(n(38),n(19)),S=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(j.a,{videoId:this.props.videoId,opts:{playerVars:{autoplay:0}},onReady:this._onReady})}},{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"_onReady",value:function(e){e.target.pauseVideo()}}]),t}(o.a.Component),F=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={movie:null,playTrailer:!1,videoId:""},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.movie,n=e.videoId;return o.a.createElement("div",{className:"movie"},t&&n&&o.a.createElement("div",{className:"movie-container",style:{backgroundImage:"url(https://image.tmdb.org/t/p/w500".concat(t.backdrop_path,")")}},o.a.createElement("div",{className:"movie-header"},o.a.createElement("h1",null,t.title),o.a.createElement("div",null,o.a.createElement(O.a,{className:"btn-back",to:"/"},"Go Back"),"IMDB rate :",o.a.createElement("span",{className:"rate"},t.vote_average))),o.a.createElement("div",{className:"movie-details"},o.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:""}),o.a.createElement("p",{className:"desc"},t.overview)),o.a.createElement(S,{videoId:n})))}},{key:"componentDidMount",value:function(){var e=Object(g.a)(b.a.mark(function e(){var t,n,a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,x.getMovieById(t);case 3:n=e.sent,a=n.videos.results[0].key,this.setState({movie:n,videoId:a});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(a.Component),C=function(){return o.a.createElement("nav",null,o.a.createElement(O.a,{to:"/"},"Home"))},M=n(23);console.log("in a11y");var L=document.createElement("template");L.innerHTML='\n<style>\n  :host {\n    display: block;\n    font-family: sans-serif;\n    text-align: right;\n    position: fixed;\n    bottom: 10px;\n    right: 10px;\n    box-sizing: border-box;\n    z-index: 99;\n  }\n\n  :host.cursor {\n    cursor: url(./cursor.svg), auto;\n  }\n\n  .btn-a11y {\n    border: none;\n    cursor: pointer;\n    position: fixed;\n    bottom: 10px;\n    right:0;\n    background-color: transparent;\n  }\n\n  .a11y-menu {\n    list-style: none;\n    position: relative;\n    bottom: 60px;\n    padding: unset;\n    margin: unset;\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    grid-template-rows: repeat(3,100px);\n  }\n\n  .a11y-menu:after {\n    content: \' \';\n    position: absolute;\n    height: 0;\n    width: 0;\n    bottom: -20px;\n    right: 9px;\n    border: 10px solid transparent;\n    border-top-color: #333;\n  }\n  \n  .a11y-s1 li button:focus {\n    border: dashed 4px #c00 !important;\n  }\n\n  li {\n    position: relative;\n  }\n\n  .active-stage {\n    position: absolute; \n    top: 5px;\n    right: 5px;\n    background-color: green;\n    border-radius: 50%;\n    height: 25px;\n    width: 25px;\n    color: white;\n    text-align: center;\n  }\n\n  li button {\n    margin: unset;\n    outline: unset;\n    width: 100%;\n    height: -webkit-fill-available;\n    padding: 5px;\n    // border: 1px solid black;\n    background-color: white;\n    line-height: inherit;\n    font-size: inherit;\n    cursor: pointer;\n    transition: all .3s;\n  }\n\n  li button:hover,li button:focus {\n    background-color: rgb(197, 238, 255);\n  }\n\n  li:focus {\n    outline: unset;\n  }\n\n  .hide {\n    display : none;\n  }\n  \n</style>\n\n<button class="btn-a11y" aria-label="a11y menu button">\n  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="48" height="48" viewBox="0 0 119.81 139.81">\n    <circle cx="60" cy="60" r="60" fill="blue"/>\n    <path fill="#FFFFFF" stroke="black" stroke-width="2" d="M61.819,0.004C27.976-0.395,0.16,26.298,0.001,60.469c-0.158,33.974,27.06,61.323,60.731,61.323c33.746,0.009,60.964-26.923,61.077-60.63C121.924,27.252,94.89,0.394,61.819,0.004z M60.36,109.973c-27.076-0.13-48.64-22.091-48.64-48.966C11.707,33.968,33.25,11.91,60.319,11.591c27.67-0.325,49.806,22.09,49.785,49.369C110.083,88.384,88.163,110.106,60.36,109.973z"/>\n    <path fill="#FFFFFF" stroke="black" stroke-width="1" d="M91.854,42.835c-0.849-0.341-1.736-0.434-2.637-0.425c-4.025,0.043-8.023,0.503-12.029,0.817c-8.109,0.636-16.222,1.053-24.354,0.63c-6.756-0.351-13.507-0.802-20.261-1.19c-0.4-0.023-0.548-0.232-0.707-0.516c-0.134-0.239-0.251-0.43-0.574-0.147c-0.696,0.608-1.481,1.12-2.141,1.762c-1.379,1.341-1.076,3.027,0.658,3.88c0.919,0.452,1.923,0.634,2.924,0.748c4.282,0.489,8.588,0.696,12.881,1.051c2.213,0.183,4.462,0.076,6.628,0.686c1.809,0.51,2.688,1.638,2.789,3.515c0.025,0.461,0.038,0.929-0.011,1.387c-0.219,2.011-0.455,4.021-0.698,6.03c-0.656,5.396-1.457,10.768-2.695,16.067c-1.392,5.962-3.209,11.813-4.662,17.76c-0.225,0.92-0.142,1.752,0.173,2.62c0.636,1.756,0.605,1.68,2.43,1.382c2.189-0.357,3.417-1.566,4.147-3.64c1.998-5.676,3.46-11.491,4.779-17.349c0.422-1.874,0.865-3.734,2.587-4.994c0.709,1.098,1.829,1.934,2.18,3.342c1.565,6.274,3.291,12.505,5.151,18.699c0.42,1.401,1.133,2.665,2.234,3.656c1.077,0.97,2.374,0.902,3.594,0.445c1.016-0.38,1.051-1.445,1.097-2.365c0.064-1.298-0.415-2.5-0.83-3.696c-3.854-11.115-6.249-22.533-7.092-34.267c-0.128-1.781-0.329-3.568-0.073-5.366c0.277-1.95,1.195-3.06,3.102-3.617c0.925-0.27,1.875-0.349,2.826-0.401c4.879-0.267,9.76-0.514,14.64-0.777c1.48-0.08,2.938-0.289,4.255-1.037c0.89-0.506,1.472-1.248,1.415-2.312C93.519,44.076,92.932,43.268,91.854,42.835z"/>\n    <path fill="#FFFFFF" stroke="black" stroke-width="1" d="M60.836,40.646c5.599,0.032,10.036-4.362,10.068-9.969c0.032-5.533-4.361-10.086-9.755-10.112c-5.678-0.027-10.238,4.36-10.27,9.881C50.846,36.101,55.251,40.614,60.836,40.646z"/>\n  </svg>\n</button>\n\n<ul class="a11y-menu hide">\n  <li class="desaturate"> \n    <span class="active-stage hide"></span>\n    <button aria-label="desaturate">\n        Desaturate\n    </button>\n  </li>\n  <li class="contrast"> \n    <span class="active-stage hide"></span>\n    <button aria-label="contrast">\n      Contrast \n    </button>\n  </li>\n  <li class="keyboard"> \n    <span class="active-stage hide">\u221a</span>\n    <button aria-label="keyboard">\n      Keyboard \n    </button>\n  </li>\n  <li class="cursor">\n    <span class="active-stage hide">\u221a</span>\n    <button aria-label="cursor">\n      Cursor\n    </button>\n  </li>\n  <li class="zoom">\n    <span class="active-stage hide"></span>\n    <button aria-label="zoom">\n      Zoom\n    </button>\n  </li>\n  <li class="font">\n    <span class="active-stage hide">\u221a</span>\n    <button aria-label="font">\n      Font\n    </button>\n  </li>\n</ul>\n';var I=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this)))._shadowRoot=e.attachShadow({mode:"open"}),e._shadowRoot.appendChild(L.content.cloneNode(!0)),e.$a11yButton=e._shadowRoot.querySelector("button"),e.$a11yButton.addEventListener("click",function(){return e._toggleMenu()}),e.$menu=e._shadowRoot.querySelector("ul"),e.$menu.addEventListener("click",function(t){return e._toggleStyle(t.target.parentElement.classList[0])}),localStorage.a11y?(e.state=JSON.parse(localStorage.a11y),e._setStyleFromStorage()):e.state={zoom:{classPrefix:"a11y-s4",count:0,max:3},contrast:{classPrefix:"a11y-s3",count:0,max:2},desaturate:{classPrefix:"a11y-s5",count:0,max:2},cursor:{classPrefix:"a11y-s2",active:!1},font:{classPrefix:"a11y-font",active:!1},keyboard:{active:!1}},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"_setStyleFromStorage",value:function(){for(var e in this.state)if("cursor"!==e&&"font"!==e&&"keyboard"!==e){var t=this.state[e].count;if(t){document.documentElement.classList.add("".concat(this.state[e].classPrefix,"-").concat(t));var n=this._shadowRoot.querySelector(".".concat(e," span"));n.textContent=t,n.classList.remove("hide")}}else this._checkIsActive(e)}},{key:"_toggleMenu",value:function(){this.$menu.classList.toggle("hide")}},{key:"_toggleStyle",value:function(e){switch(e){case"desaturate":case"contrast":case"zoom":this._toggleStyleByType(e);break;case"keyboard":this._toggleKeyboard();break;case"cursor":this._toggleOnceOnly("cursor");break;case"font":this._toggleOnceOnly("font")}this._saveToStorage()}},{key:"_toggleKeyboard",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$menu.classList.toggle("a11y-s1"),this._toggleStageSpan("keyboard"),e&&(this.state.keyboard.active=!this.state.keyboard.active);["A","INPUT","BUTTON"].reduce(function(e,t){return e.concat(Array.from(document.documentElement.querySelectorAll(t)))},[]).forEach(function(e){e.tabIndex=0,e.classList.toggle("a11y-s1")})}},{key:"_toggleOnceOnly",value:function(e){var t=this.state[e];document.documentElement.classList.toggle(t.classPrefix),this._toggleStageSpan(e),t.active=!t.active}},{key:"_checkIsActive",value:function(e){var t=this.state[e];if("keyboard"===e&&t.active)return this._toggleKeyboard(!1);t.active&&(this._shadowRoot.querySelector(".".concat(e," span")).classList.remove("hide"),document.documentElement.classList.add(t.classPrefix))}},{key:"_toggleStyleByType",value:function(e){var t=this.state[e],n=t.classPrefix,a=document.documentElement.classList;a.remove("".concat(n,"-").concat(t.count));var o=this._shadowRoot.querySelector(".".concat(e," span"));this._setTypeCount.call(t,o),t.count?(o.classList.remove("hide"),a.add("".concat(n,"-").concat(t.count))):o.classList.add("hide")}},{key:"_setTypeCount",value:function(e){this.count<=this.max?this.count+=1:this.count=0,e.textContent=this.count}},{key:"_toggleStageSpan",value:function(e){this._shadowRoot.querySelector(".".concat(e," span")).classList.toggle("hide")}},{key:"_saveToStorage",value:function(){localStorage.a11y=JSON.stringify(this.state)}}]),t}(Object(M.a)(HTMLElement));window.customElements.define("a11y-menu",I);n(52);var B=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(p.a,null,o.a.createElement("div",null,o.a.createElement("a11y-menu",null),o.a.createElement(C,null),o.a.createElement(h.a,null,o.a.createElement(m.a,{path:"/",exact:!0,component:E}),o.a.createElement(m.a,{path:"/movie/:id",component:F}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.24c86994.chunk.js.map