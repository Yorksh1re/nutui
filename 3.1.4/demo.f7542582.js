import{c as e}from"./mobile.93604890.js";import{B as s,C as l,r as o,o as n,e as a,j as r,k as t,g as d,F as i,i as u,t as f}from"./vendor.b923255f.js";import"./index.639e5353.js";const{createDemo:c}=e("pullrefresh");var h=c({props:{},setup:()=>({refresh:e=>{console.log("上拉加载"),setTimeout((()=>{e()}),1e3)},downRefresh:e=>{console.log("下拉刷新"),setTimeout((()=>{e()}),1e3)}})});s("data-v-02779db4");const p={class:"demo full"},v=d("h2",null,"纵向",-1),m={class:"vertical"},R={class:"content",id:"pull"},w={class:"main"},_=d("h2",null,"横向",-1),D={class:"horizontal"},b={class:"contentH",id:"pullH"},j={class:"mainH"};l(),h.render=function(e,s,l,c,h,H){const g=o("nut-pullrefresh"),k=o("nut-cell");return n(),a("div",p,[v,r(k,null,{default:t((()=>[d("div",m,[r(g,{onRefresh:e.refresh,onDownRefresh:e.downRefresh,useWindow:!1,containerId:"pull"},{default:t((()=>[d("div",R,[d("div",w,[(n(),a(i,null,u([1,2,3,4,5,6,7,8,9],(e=>d("div",{class:"pull-data",key:e},"我是测试数据 "+f(e),1))),64))])])])),_:1},8,["onRefresh","onDownRefresh"])])])),_:1}),_,r(k,null,{default:t((()=>[d("div",D,[r(g,{onRefresh:e.refresh,onDownRefresh:e.downRefresh,useWindow:!1,containerId:"pullH",direction:"horizontal"},{default:t((()=>[d("div",b,[d("div",j,[(n(),a(i,null,u([1,2,3,4,5,6,7,8,9],(e=>d("div",{class:"pull-data",key:e},"我是测试数据 "+f(e),1))),64))])])])),_:1},8,["onRefresh","onDownRefresh"])])])),_:1})])},h.__scopeId="data-v-02779db4";export{h as default};