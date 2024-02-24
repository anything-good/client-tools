import{d as C,n as k,a as w,o as i,e as p,i as o,w as s,l as t,g as n,v as T,t as d,f as e,F as y,r as f,H as E,cs as S,Z as H,y as K,c as F}from"./index-41a18eb3.js";import{m as _}from"./index-8a2fe77b.js";import{_ as U}from"./Tag-2ad58d60.js";import{_ as D}from"./Table-7595d774.js";import"./___vite-browser-external_commonjs-proxy-b782e73f.js";import"./color-to-class-8578b472.js";const I=e("div",{style:{opacity:"0.8"}}," Know which file extensions are associated to a mime-type ",-1),L={key:0},R={style:{"margin-top":"10px"}},Z=e("div",{style:{opacity:"0.8"}}," Know which mime type is associated to a file extension ",-1),$={key:0},q={style:{"margin-top":"10px"}},z=e("thead",null,[e("tr",null,[e("th",null,"Mime types"),e("th",null,"Extensions")])],-1),Y=C({__name:"mime-types",setup(A){const M=Object.entries(_.extensions).map(([a,u])=>({mimeType:a,extensions:u})),N=Object.keys(_.extensions).map(a=>({label:a,value:a})),m=k(void 0),h=w(()=>m.value?_.extensions[m.value]:[]),O=Object.keys(_.types).map(a=>({label:`.${a}`,value:a})),r=k(void 0),B=w(()=>r.value?_.types[r.value]:[]);return(a,u)=>{const x=S,v=H,c=U,g=K,V=D;return i(),p(y,null,[o(g,null,{default:s(()=>[o(x,{style:{"margin-bottom":"0"}},{default:s(()=>[t(" Mime type to extension ")]),_:1}),I,o(v,{value:n(m),"onUpdate:value":u[0]||(u[0]=l=>T(m)?m.value=l:null),searchable:"","my-4":"",options:n(N),placeholder:"Select your mimetype here... (ex: application/pdf)"},null,8,["value","options"]),n(h).length>0?(i(),p("div",L,[t(" Extensions of files with the "),o(c,{round:"",bordered:!1},{default:s(()=>[t(d(n(m)),1)]),_:1}),t(" mime-type: "),e("div",R,[(i(!0),p(y,null,f(n(h),l=>(i(),F(c,{key:l,round:"",bordered:!1,type:"primary",style:{"margin-right":"10px"}},{default:s(()=>[t(" ."+d(l),1)]),_:2},1024))),128))])])):E("",!0)]),_:1}),o(g,null,{default:s(()=>[o(x,{style:{"margin-bottom":"0"}},{default:s(()=>[t(" File extension to mime type ")]),_:1}),Z,o(v,{value:n(r),"onUpdate:value":u[1]||(u[1]=l=>T(r)?r.value=l:null),searchable:"","my-4":"",options:n(O),placeholder:"Select your mimetype here... (ex: application/pdf)"},null,8,["value","options"]),n(r)?(i(),p("div",$,[t(" Mime type associated to the extension "),o(c,{round:"",bordered:!1},{default:s(()=>[t(d(n(r)),1)]),_:1}),t(" file extension: "),e("div",q,[o(c,{round:"",bordered:!1,type:"primary",style:{"margin-right":"10px"}},{default:s(()=>[t(d(n(B)),1)]),_:1})])])):E("",!0)]),_:1}),e("div",null,[o(V,null,{default:s(()=>[z,e("tbody",null,[(i(!0),p(y,null,f(n(M),({mimeType:l,extensions:j})=>(i(),p("tr",{key:l},[e("td",null,d(l),1),e("td",null,[(i(!0),p(y,null,f(j,b=>(i(),F(c,{key:b,round:"",bordered:!1,style:{"margin-right":"10px"}},{default:s(()=>[t(" ."+d(b),1)]),_:2},1024))),128))])]))),128))])]),_:1})])],64)}}});export{Y as default};
