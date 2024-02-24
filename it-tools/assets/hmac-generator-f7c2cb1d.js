import{d as b,n as p,a as A,s as g,o as y,e as B,i as l,g as n,v as o,f,w as C,l as M,x as k,Z as E,m as w}from"./index-41a18eb3.js";import{_ as U}from"./InputCopyable.vue_vue_type_script_setup_true_lang-aa2560ac.js";import{c as a}from"./index-b586f859.js";import{c as D}from"./hash-text.service-9de4e2c4.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./___vite-browser-external_commonjs-proxy-b782e73f.js";const P={flex:"","flex-col":"","gap-4":""},T={flex:"","gap-2":""},N={flex:"","justify-center":""},F=b({__name:"hmac-generator",setup(R){const v={MD5:a.HmacMD5,RIPEMD160:a.HmacRIPEMD160,SHA1:a.HmacSHA1,SHA3:a.HmacSHA3,SHA224:a.HmacSHA224,SHA256:a.HmacSHA256,SHA384:a.HmacSHA384,SHA512:a.HmacSHA512};function d(m,e){return e==="Bin"?D(m.toString(a.enc.Hex)):m.toString(a.enc[e])}const s=p(""),u=p(""),c=p("SHA256"),r=p("Hex"),i=A(()=>d(v[c.value](s.value,u.value),r.value)),{copy:x}=g({source:i});return(m,e)=>{const _=k,H=E,h=U,S=w;return y(),B("div",P,[l(_,{value:n(s),"onUpdate:value":e[0]||(e[0]=t=>o(s)?s.value=t:null),multiline:"","raw-text":"",placeholder:"Plain text to compute the hash...",rows:"3",autosize:"",autofocus:"",label:"Plain text to compute the hash"},null,8,["value"]),l(_,{value:n(u),"onUpdate:value":e[1]||(e[1]=t=>o(u)?u.value=t:null),"raw-text":"",placeholder:"Enter the secret key...",label:"Secret key",clearable:""},null,8,["value"]),f("div",T,[l(H,{value:n(c),"onUpdate:value":e[2]||(e[2]=t=>o(c)?c.value=t:null),label:"Hashing function","flex-1":"",placeholder:"Select an hashing function...",options:Object.keys(v).map(t=>({label:t,value:t}))},null,8,["value","options"]),l(H,{value:n(r),"onUpdate:value":e[3]||(e[3]=t=>o(r)?r.value=t:null),label:"Output encoding","flex-1":"",placeholder:"Select the result encoding...",options:[{label:"Binary (base 2)",value:"Bin"},{label:"Hexadecimal (base 16)",value:"Hex"},{label:"Base64 (base 64)",value:"Base64"},{label:"Base64-url (base 64 with url safe chars)",value:"Base64url"}]},null,8,["value","options"])]),l(h,{value:n(i),"onUpdate:value":e[4]||(e[4]=t=>o(i)?i.value=t:null),type:"textarea",placeholder:"The result of the HMAC...",label:"HMAC of your text"},null,8,["value"]),f("div",N,[l(S,{onClick:e[5]||(e[5]=t=>n(x)())},{default:C(()=>[M(" Copy HMAC ")]),_:1})])])}}});export{F as default};
