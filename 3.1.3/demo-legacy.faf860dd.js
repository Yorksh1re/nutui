System.register(["./mobile-legacy.a4d5ddc7.js","./vendor-legacy.d2a5cd34.js","./index-legacy.3b57dd3a.js"],(function(e){"use strict";var l,n,c,a,u,t,d,o,h;return{setters:[function(e){l=e.c},function(e){n=e.m,c=e.W,a=e.r,u=e.o,t=e.e,d=e.j,o=e.k,h=e.g},function(){}],execute:function(){const{createDemo:s}=l("switch");var m=e("default",s({setup(){let{proxy:e}=c();const l=n(!0),a=n(!0);return{checked:l,checkedAsync:a,change:(l,n)=>{e.$toast.text(`触发了change事件，开关状态：${l}`)},changeAsync:(l,n)=>{e.$toast.text(`2秒后异步触发 ${l}`),setTimeout((()=>{a.value=l}),2e3)}}}}));const g={class:"demo"},i=h("h2",null,"基础用法",-1),r=h("h2",null,"禁用状态",-1),V=h("h2",null,"change事件",-1),k=h("h2",null,"异步控制",-1),f=h("h2",null,"自定义颜色",-1),v=h("h2",null,"支持文字",-1);m.render=function(e,l,n,c,h,s){const m=a("nut-switch"),C=a("nut-cell");return u(),t("div",g,[i,d(C,null,{default:o((()=>[d(m,{modelValue:e.checked,"onUpdate:modelValue":l[0]||(l[0]=l=>e.checked=l)},null,8,["modelValue"])])),_:1}),r,d(C,null,{default:o((()=>[d(m,{modelValue:e.checked,"onUpdate:modelValue":l[1]||(l[1]=l=>e.checked=l),disable:""},null,8,["modelValue"])])),_:1}),V,d(C,null,{default:o((()=>[d(m,{modelValue:e.checked,"onUpdate:modelValue":l[2]||(l[2]=l=>e.checked=l),onChange:e.change},null,8,["modelValue","onChange"])])),_:1}),k,d(C,null,{default:o((()=>[d(m,{"model-value":e.checkedAsync,onChange:e.changeAsync},null,8,["model-value","onChange"])])),_:1}),f,d(C,null,{default:o((()=>[d(m,{modelValue:e.checked,"onUpdate:modelValue":l[3]||(l[3]=l=>e.checked=l),onChange:e.switchChange,"active-color":"blue"},null,8,["modelValue","onChange"])])),_:1}),v,d(C,null,{default:o((()=>[d(m,{modelValue:e.checked,"onUpdate:modelValue":l[4]||(l[4]=l=>e.checked=l),onChange:e.switchChange,"active-text":"开","inactive-text":"关"},null,8,["modelValue","onChange"])])),_:1})])}}}}));