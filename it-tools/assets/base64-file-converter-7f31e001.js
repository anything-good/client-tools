import{d as F,n as p,p as B,q as w,s as C,o as V,e as h,i as e,w as s,g as n,v as k,f,l as m,F as I,x as D,m as N,y as U,z as $,A as j}from"./index-41a18eb3.js";import{u as q}from"./downloadBase64-bb65751c.js";import{i as z}from"./base64-94c6bba0.js";import"./index-8a2fe77b.js";import"./___vite-browser-external_commonjs-proxy-b782e73f.js";const A={flex:"","justify-center":""},E={flex:"","justify-center":""},P=F({__name:"base64-file-converter",setup(R){const o=p(""),{download:v}=q({source:o}),l=B({source:o,rules:[{message:"Invalid base 64 string",validator:t=>z(t.trim())}]});function b(){if(l.isValid)try{v()}catch{}}const r=p(),{base64:u}=w(r),{copy:y}=C({source:u,text:"Base64 string copied to the clipboard"});async function g(t){t&&(r.value=t)}return(t,a)=>{const _=D,c=N,d=U,x=$;return V(),h(I,null,[e(d,{title:"Base64 to file"},{default:s(()=>[e(_,{value:n(o),"onUpdate:value":a[0]||(a[0]=i=>k(o)?o.value=i:null),multiline:"",placeholder:"Put your base64 file string here...",rows:"5",validation:n(l),"mb-2":""},null,8,["value","validation"]),f("div",A,[e(c,{disabled:n(o)===""||!n(l).isValid,onClick:a[1]||(a[1]=i=>b())},{default:s(()=>[m(" Download file ")]),_:1},8,["disabled"])])]),_:1}),e(d,{title:"File to base64"},{default:s(()=>[e(x,{title:"Drag and drop a file here, or click to select a file",onFileUpload:g}),e(_,{value:n(u),multiline:"",readonly:"",placeholder:"File in base64 will be here",rows:"5","my-2":""},null,8,["value"]),f("div",E,[e(c,{onClick:a[2]||(a[2]=i=>n(y)())},{default:s(()=>[m(" Copy ")]),_:1})])]),_:1})],64)}}});const L=j(P,[["__scopeId","data-v-7721e582"]]);export{L as default};
