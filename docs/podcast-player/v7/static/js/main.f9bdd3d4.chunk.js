(this["webpackJsonppodcast-player"]=this["webpackJsonppodcast-player"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(6),a=n.n(i),l=(n(22),n(4)),s=(n(23),n(17)),o=(n(44),n(45),n(1));function u(e){var t=Object(c.useState)([]),n=Object(l.a)(t,2),r=n[0],i=n[1],a=Object(c.useState)(),u=Object(l.a)(a,2),d=u[0],h=u[1];Object(c.useEffect)((function(){fetch(e.rssfeed).then((function(e){return e.text()})).then((function(e){return(new window.DOMParser).parseFromString(e,"text/xml")})).then((function(e){var t=e.querySelectorAll("item"),n=[];t.forEach((function(e){n.push({pubDate:new Date(e.querySelector("pubDate").textContent),title:e.querySelector("title").innerHTML,mp3:e.querySelector("enclosure").getAttribute("url"),description:e.querySelector("description").textContent.replace(/(<([^>]+)>)/gi,"")})})),i(n)}))}),[e.rssfeed]);return Object(c.useEffect)((function(){d&&d.setQuickFilter(e.quickFilter)}),[d,e.quickFilter]),Object(o.jsx)("div",{className:"ag-theme-alpine",style:{height:e.height,width:e.width},children:Object(o.jsx)(s.AgGridReact,{reactUI:"true",onGridReady:function(e){h(e.api)},rowData:r,columnDefs:[{headerName:"Episode Title",field:"title",wrapText:!0,autoHeight:!0,flex:2,resizable:!0,filter:"agGridTextFilter"},{headerName:"Published",field:"pubDate",flex:1,sortable:!0,filter:"agDateColumnFilter"},{headerName:"Episode",field:"mp3",flex:1,cellRenderer:function(e){return'<audio controls preload="none" \n                                        style="height:2em; vertical-align: middle;">\n                                        <source src='.concat(e.value,' type="audio/mpeg" />\n                                    </audio>')}}],pagination:!0,paginationAutoPageSize:!0})})}var d=function(){var e=Object(c.useState)("https://feeds.simplecast.com/tOjNXec5"),t=Object(l.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(""),a=Object(l.a)(i,2),s=a[0],d=a[1],h=Object(c.useState)(""),j=Object(l.a)(h,2),p=j[0],f=j[1],b=Object(c.useState)([{name:"WebRush",url:"https://feeds.simplecast.com/tOjNXec5"},{name:"The Evil Tester Show",url:"https://feed.pod.co/the-evil-tester-show"},{name:"The Change log",url:"https://changelog.com/podcast/feed"},{name:"JS Party",url:"https://changelog.com/jsparty/feed"},{name:"Founders Talk",url:"https://changelog.com/founderstalk/feed"}]),m=Object(l.a)(b,2),g=m[0];return m[1],Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"Podcast Player"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"podcasts",children:"Choose a podcast:"}),Object(o.jsx)("select",{name:"podcasts",id:"podcasts",value:n,onChange:function(e){return r(e.target.value)},children:g.map((function(e){return Object(o.jsx)("option",{value:e.url,children:e.name},e.url)}))})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"rssFeedUrl",children:"RSS Feed URL:"}),Object(o.jsx)("input",{type:"text",id:"rssFeedUrl",name:"rssFeedUrl",style:{width:"50%"},value:n,onChange:function(e){return r(e.target.value)}}),Object(o.jsx)("button",{onClick:function(){var e=document.getElementById("rssFeedUrl").value;d(e)},children:"Load Feed"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"quickfilter",children:"Quick Filter:"}),Object(o.jsx)("input",{type:"text",id:"quickfilter",name:"quickfilter",style:{width:"30%"},value:p,onChange:function(e){f(e.target.value)}})]}),Object(o.jsx)("div",{children:Object(o.jsx)(u,{rssfeed:s,height:"500px",width:"100%",quickFilter:p})})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root")),h()}},[[47,1,2]]]);
//# sourceMappingURL=main.f9bdd3d4.chunk.js.map