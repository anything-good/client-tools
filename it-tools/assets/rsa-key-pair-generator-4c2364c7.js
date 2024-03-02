import{d as v,n as P,p as h,o as k,e as g,f as o,i as a,w as u,g as r,v as x,b9 as K,l as w,F as C,m as B}from"./index-41a18eb3.js";import{l as m}from"./index-67855496.js";import{T as c}from"./TextareaCopyable-043bd5cc.js";import{a as T}from"./defaults-4d6daddf.js";import{a as V}from"./computedRefreshable-904ce31a.js";import{_ as R}from"./InputNumber-e136a6b0.js";import{_ as A}from"./FormItem-acc1cde2.js";import"./___vite-browser-external_commonjs-proxy-b782e73f.js";import"./Copy-306dd1f6.js";import"./Scrollbar-3fc9c164.js";import"./use-locale-e263d48c.js";import"./use-form-item-77965135.js";import"./Button-047a56c3.js";import"./is-browser-fc34c9a6.js";import"./color-to-class-8578b472.js";import"./Remove-89552517.js";const N="/assets/prime.worker.min-e367bd53.js";function E({bits:n=2048}){return new Promise((e,t)=>m.pki.rsa.generateKeyPair({bits:n,workerScript:N},(s,i)=>{if(s){t(s);return}e(i)}))}async function F(n={}){const{privateKey:e,publicKey:t}=await E(n);return{publicKeyPem:m.pki.publicKeyToPem(t),privateKeyPem:m.pki.privateKeyToPem(e)}}const j={style:{flex:"0 0 100%"}},D={"item-style":"flex: 1 1 0",style:{"max-width":"600px"},"mx-auto":"",flex:"","gap-3":""},O=o("h3",null,"Public key",-1),S=o("h3",null,"Private key",-1),te=v({__name:"rsa-key-pair-generator",setup(n){const e=P(2048),t={publicKeyPem:"",privateKeyPem:""},{attrs:s}=h({source:e,rules:[{message:"Bits should be 256 <= bits <= 16384 and be a multiple of 8",validator:l=>l>=256&&l<=16384&&l%8===0}]}),[i,_]=V(()=>T(()=>F({bits:e.value}),t),t);return(l,p)=>{const f=R,d=A,y=B;return k(),g(C,null,[o("div",j,[o("div",D,[a(d,K({label:"Bits :"},r(s),{"label-placement":"left","label-width":"100"}),{default:u(()=>[a(f,{value:r(e),"onUpdate:value":p[0]||(p[0]=b=>x(e)?e.value=b:null),min:"256",max:"16384",step:"8"},null,8,["value"])]),_:1},16),a(y,{onClick:r(_)},{default:u(()=>[w(" Refresh key-pair ")]),_:1},8,["onClick"])])]),o("div",null,[O,a(c,{value:r(i).publicKeyPem},null,8,["value"])]),o("div",null,[S,a(c,{value:r(i).privateKeyPem},null,8,["value"])])],64)}}});export{te as default};