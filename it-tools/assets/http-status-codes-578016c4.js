import{d as k,n as B,S as b,a3 as d,a as w,o as t,e as o,i as F,g as p,v as S,F as m,r as f,x as C,f as c,t as a,c as z,w as N,y as R}from"./index-41a18eb3.js";const T={"mb-2":"","text-xl":""},V={"text-lg":"","font-bold":""},D={"op-70":""},L=k({__name:"http-status-codes",setup(E){const e=B(""),{searchResult:h}=b({search:e,data:d.flatMap(({codes:u,category:s})=>u.map(n=>({...n,category:s}))),options:{keys:[{name:"code",weight:3},{name:"name",weight:2},"description","category"]}}),v=w(()=>e.value?[{category:"Search results",codes:h.value}]:d);return(u,s)=>{const n=C,g=R;return t(),o("div",null,[F(n,{value:p(e),"onUpdate:value":s[0]||(s[0]=r=>S(e)?e.value=r:null),placeholder:"Search http status...",autofocus:"","raw-text":"","mb-10":""},null,8,["value"]),(t(!0),o(m,null,f(p(v),({codes:r,category:l})=>(t(),o("div",{key:l,"mb-8":""},[c("div",T,a(l),1),(t(!0),o(m,null,f(r,({code:i,description:x,name:y,type:_})=>(t(),z(g,{key:i,"mb-2":""},{default:N(()=>[c("div",V,a(i)+" "+a(y),1),c("div",D,a(x)+" "+a(_!=="HTTP"?`For ${_}.`:""),1)]),_:2},1024))),128))]))),128))])}}});export{L as default};
