System.register(["./mobile-legacy.6811e004.js","./vendor-legacy.2021e78c.js","./index-legacy.e2e8d971.js"],(function(e){"use strict";var n,s,l,o,t,r,c,d,a,u,i;return{setters:[function(e){n=e.c},function(e){s=e.s,l=e.x,o=e.r,t=e.o,r=e.c,c=e.f,d=e.F,a=e.g,u=e.t,i=e.q},function(){}],execute:function(){const{createDemo:f}=n("pullrefresh");var h=e("default",f({props:{},setup:()=>({refresh:e=>{console.log("上拉加载"),setTimeout((()=>{e()}),1e3)},downRefresh:e=>{console.log("下拉刷新"),setTimeout((()=>{e()}),1e3)}})}));const v=i("data-v-564240d4");s("data-v-564240d4");const p={class:"demo"},R=c("h2",null,"纵向",-1),w={class:"vertical"},m={class:"content",id:"pull"},g={class:"main"},y=c("h2",null,"横向",-1),_={class:"horizontal"},D={class:"contentH",id:"pullH"},H={class:"mainH"};l();const j=v(((e,n,s,l,i,f)=>{const h=o("nut-pullrefresh"),j=o("nut-cell");return t(),r("div",p,[R,c(j,null,{default:v((()=>[c("div",w,[c(h,{onRefresh:e.refresh,onDownRefresh:e.downRefresh,useWindow:!1,containerId:"pull"},{default:v((()=>[c("div",m,[c("div",g,[(t(),r(d,null,a([1,2,3,4,5,6,7,8,9],(e=>c("div",{class:"pull-data",key:e},"我是测试数据 "+u(e),1))),64))])])])),_:1},8,["onRefresh","onDownRefresh"])])])),_:1}),y,c(j,null,{default:v((()=>[c("div",_,[c(h,{onRefresh:e.refresh,onDownRefresh:e.downRefresh,useWindow:!1,containerId:"pullH",direction:"horizontal"},{default:v((()=>[c("div",D,[c("div",H,[(t(),r(d,null,a([1,2,3,4,5,6,7,8,9],(e=>c("div",{class:"pull-data",key:e},"我是测试数据 "+u(e),1))),64))])])])),_:1},8,["onRefresh","onDownRefresh"])])])),_:1})])}));h.render=j,h.__scopeId="data-v-564240d4"}}}));