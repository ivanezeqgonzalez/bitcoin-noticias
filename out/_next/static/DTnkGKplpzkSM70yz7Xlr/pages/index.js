(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RNiq:function(e,a,t){"use strict";t.r(a);var c=t("ln6h"),s=t.n(c),n=t("q1tI"),r=t.n(n),i=t("pJ0N"),o=t("vcXL"),l=t.n(o),d=r.a.createElement,m=function(e){var a=e.precio,t=(a.market_cap,a.percent_change_1h),c=a.percent_change_7d,s=a.percent_change_24h,n=a.price;a.volume_24h;return d("div",{className:"card text-white bg-success mb-3"},d("div",{className:"card-header"},"Precio del Bitcoin"),d("div",{className:"card-body"},d("h4",{className:"card-title"},"Precio actual: $",n),d("div",{className:"d-md-flex justify-content-between"},d("p",{className:"card-text"},d("span",{className:"font-weight-bold"},"Ultima hora: "),t," %"),d("p",{className:"card-text"},d("span",{className:"font-weight-bold"},"Ultimas 24 horas: "),s," %"),d("p",{className:"card-text"},d("span",{className:"font-weight-bold"},"Ultimos 7 d\xedas: "),c," %"))))},u=r.a.createElement,p=function(e){var a=e.noticia,t=a.urlToImage,c=a.url,s=a.title,n=a.description,r=a.source,i="";return i=""!==t?u("img",{src:t,alt:s,className:"card-img-top"}):u("p",{className:"text-center my-5"},"Imagen no disponible"),u("div",{className:"col-md-6 col-12 mb-4"},u("div",{className:"card"},u("div",{className:"card-image"},i),u("div",{className:"card-body"},u("div",{className:"card-title"},s),u("div",{className:"card-text"},n),u("div",{className:"card-text"},r.name),u("a",{href:c,target:"_blank",className:"btn btn-primary d-block"},"Leer Noticia"))))},N=r.a.createElement,v=function(e){return console.log(e),N("div",{className:"row"},e.noticias.map((function(e){return N(p,{key:e.url,noticia:e})})))},f=r.a.createElement,h=function(){return f("div",{className:"card"},f("div",{className:"card-title text-center"},"Proximamente"),f("div",{className:"card-body"}))},b=r.a.createElement,w=function(){return b(h,null)},g=r.a.createElement,x=function(e){return g(i.a,null,g("div",{className:"row"},g("div",{className:"col-12"},g("h2",null,"Precio del Bitcoin"),g(m,{precio:e.precioBitcoin})),g("div",{className:"col-md-8"},g("h2",{className:"my-4"},"Noticias sobre Bitcoin"),g(v,{noticias:e.noticias})),g("div",{className:"col-md-4"},g("h2",{className:"my-4"},"Pr\xf3ximos Eventos Bitcoin"),g(w,null))))};x.getInitialProps=function(){var e,a,t,c;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.awrap(l()("https://api.coinmarketcap.com/v2/ticker/1"));case 2:return e=n.sent,n.next=5,s.a.awrap(l()("https://newsapi.org/v2/everything?q=bitcoin&from=2019-12-07&sortBy=publishedAt&apiKey=7734b178bf7049feb6541894ec1baa4f&language=es"));case 5:return a=n.sent,n.next=8,s.a.awrap(e.json());case 8:return t=n.sent,n.next=11,s.a.awrap(a.json());case 11:return c=n.sent,n.abrupt("return",{precioBitcoin:t.data.quotes.USD,noticias:c.articles});case 13:case"end":return n.stop()}}))};a.default=x},vcXL:function(e,a,t){"use strict";var c=self.fetch.bind(self);e.exports=c,e.exports.default=e.exports},vlRD:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["vlRD",0,1]]]);