import{m as o}from"./index-8a2fe77b.js";import{b as r}from"./index-41a18eb3.js";const s={JVBERi0:"application/pdf",R0lGODdh:"image/gif",R0lGODlh:"image/gif",iVBORw0KGgo:"image/png","/9j/":"image/jpg"};function p({base64String:e}){const[,i]=e.match(/data:(.*?);base64/i)??[];if(i)return{mimeType:i};const t=r.find(s,(a,n)=>e.startsWith(n));return t?{mimeType:t}:{mimeType:void 0}}function l({mimeType:e,defaultExtension:i="txt"}){return e?o.extension(e)??i:i}function g({source:e,filename:i}){return{download(){if(e.value==="")throw new Error("Base64 string is empty");const{mimeType:t}=p({base64String:e.value}),a=t?e.value:`data:text/plain;base64,${e.value}`,n=i??`file.${l({mimeType:t})}`,m=document.createElement("a");m.href=a,m.download=n,m.click()}}}export{g as u};
