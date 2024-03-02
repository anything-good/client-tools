import{d as D,n as C,a as y,p as R,s as g,o as B,e as T,i,w as _,f as p,cD as $,cE as h,g as n,v as x,t as N,l as A,m as k,y as E,x as O,A as S}from"./index-41a18eb3.js";import{_ as U}from"./InputNumber-e136a6b0.js";import{_ as j}from"./FormItem-acc1cde2.js";import"./use-locale-e263d48c.js";import"./use-form-item-77965135.js";import"./Button-047a56c3.js";import"./is-browser-fc34c9a6.js";import"./color-to-class-8578b472.js";import"./Remove-89552517.js";const m=1,d=3999;function P(e){if(e<m||e>d)return"";const t={M:1e3,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};let a="";for(const o in t)for(;e>=t[o];)a+=o,e-=t[o];return a}const z=/^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;function I(e){return z.test(e)}function G(e){if(!I(e))return null;const t={I:1,V:5,X:10,L:50,C:100,D:500,M:1e3};return[...e].reduce((a,o,r,c)=>t[c[r+1]]>t[o]?a-t[o]:a+t[o],0)}const W={flex:"","items-center":"","justify-between":""},q={class:"result"},F={flex:"","items-center":"","justify-between":""},H={class:"result"},J=D({__name:"roman-numeral-converter",setup(e){const t=C(42),a=y(()=>P(t.value)),{attrs:o}=R({source:t,rules:[{validator:u=>u>=m&&u<=d,message:`We can only convert numbers between ${m.toLocaleString()} and ${d.toLocaleString()}`}]}),r=C("XLII"),c=y(()=>G(r.value)),v=R({source:r,rules:[{validator:u=>I(u),message:"The input you entered is not a valid roman number"}]}),{copy:X}=g({source:a,text:"Roman number copied to the clipboard"}),{copy:M}=g({source:()=>String(c),text:"Arabic number copied to the clipboard"});return(u,s)=>{const V=U,w=j,f=k,b=E,L=O;return B(),T("div",null,[i(b,{title:"Arabic to roman"},{default:_(()=>[p("div",W,[i(w,$(h(n(o))),{default:_(()=>[i(V,{value:n(t),"onUpdate:value":s[0]||(s[0]=l=>x(t)?t.value=l:null),min:1,style:{width:"200px"},"show-button":!1},null,8,["value"])]),_:1},16),p("div",q,N(n(a)),1),i(f,{autofocus:"",disabled:n(o).validationStatus==="error",onClick:s[1]||(s[1]=l=>n(X)())},{default:_(()=>[A(" Copy ")]),_:1},8,["disabled"])])]),_:1}),i(b,{title:"Roman to arabic","mt-5":""},{default:_(()=>[p("div",F,[i(L,{value:n(r),"onUpdate:value":s[2]||(s[2]=l=>x(r)?r.value=l:null),style:{width:"200px"},validation:n(v)},null,8,["value","validation"]),p("div",H,N(n(c)),1),i(f,{disabled:!n(v).isValid,onClick:s[3]||(s[3]=l=>n(M)())},{default:_(()=>[A(" Copy ")]),_:1},8,["disabled"])])]),_:1})])}}});const st=S(J,[["__scopeId","data-v-b1e0d482"]]);export{st as default};