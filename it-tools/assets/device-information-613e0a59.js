import{d as b,c3 as y,a as e,o as n,e as o,r as s,F as r,i as c,w as a,c as _,f as d,t as u,l as k,c4 as $,y as B,A as S}from"./index-41a18eb3.js";import{a as z,_ as C}from"./Grid-e5202c13.js";import"./is-browser-fc34c9a6.js";const D={class:"label"},I={class:"value"},N={key:1,class:"undefined-value"},P=b({__name:"device-information",setup(V){const{width:p,height:v}=y(),m=[{name:"Screen",information:[{label:"Screen size",value:e(()=>`${window.screen.availWidth} x ${window.screen.availHeight}`)},{label:"Orientation",value:e(()=>window.screen.orientation.type)},{label:"Orientation angle",value:e(()=>`${window.screen.orientation.angle}°`)},{label:"Color depth",value:e(()=>`${window.screen.colorDepth} bits`)},{label:"Pixel ratio",value:e(()=>`${window.devicePixelRatio} dppx`)},{label:"Window size",value:e(()=>`${p.value} x ${v.value}`)}]},{name:"Device",information:[{label:"Browser vendor",value:e(()=>navigator.vendor)},{label:"Languages",value:e(()=>navigator.languages.join(", "))},{label:"Platform",value:e(()=>navigator.platform)},{label:"User agent",value:e(()=>navigator.userAgent)}]}];return(W,A)=>{const g=$,f=z,w=C,h=B;return n(),o(r,null,s(m,({name:t,information:x})=>c(h,{key:t,title:t},{default:a(()=>[c(w,{cols:"1 400:2","x-gap":"12","y-gap":"12"},{default:a(()=>[(n(!0),o(r,null,s(x,({label:i,value:{value:l}})=>(n(),_(f,{key:i,class:"information"},{default:a(()=>[d("div",D,u(i),1),d("div",I,[l?(n(),_(g,{key:0},{default:a(()=>[k(u(l),1)]),_:2},1024)):(n(),o("div",N," unknown "))])]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["title"])),64)}}});const j=S(P,[["__scopeId","data-v-3d05d2aa"]]);export{j as default};