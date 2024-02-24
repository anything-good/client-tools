import{b as m,d as N,n as c,a as V,o as B,e as A,i as a,w as p,g as e,v,c as D,l as h,t as E,H,b9 as u,f as O,x as U,y as S,A as T}from"./index-41a18eb3.js";import{_ as i}from"./InputCopyable.vue_vue_type_script_setup_true_lang-aa2560ac.js";import{c as x}from"./integer-base-converter.model-81b950ae.js";import{_ as j}from"./InputNumber-e136a6b0.js";import{_ as M}from"./FormItem-acc1cde2.js";import{_ as R}from"./Alert-350d6dea.js";import{_ as W}from"./Divider-f9a244b2.js";import{_ as q}from"./InputGroupLabel-13a34cb5.js";import{_ as z}from"./InputGroup-333a778c.js";import"./use-locale-e263d48c.js";import"./use-form-item-77965135.js";import"./Button-047a56c3.js";import"./is-browser-fc34c9a6.js";import"./color-to-class-8578b472.js";import"./Remove-89552517.js";function F(f){try{f();return}catch(l){return m.isString(l)?l:m.isError(l)||m.isObject(l)&&m.has(l,"message")?l.message:"An error as occurred."}}const G={flex:"","items-baseline":""},J=N({__name:"integer-base-converter",setup(f){const l={labelPosition:"left",labelWidth:"170px",labelAlign:"right",readonly:!0,"mb-2":""},n=c("42"),o=c(10),r=c(42);function s(...b){try{return x(...b)}catch{return""}}const d=V(()=>F(()=>x({value:n.value,fromBase:o.value,toBase:r.value})));return(b,t)=>{const y=U,g=j,w=M,C=R,$=W,k=q,P=z,I=S;return B(),A("div",null,[a(I,null,{default:p(()=>[a(y,{value:e(n),"onUpdate:value":t[0]||(t[0]=_=>v(n)?n.value=_:null),label:"Input number",placeholder:"Put your number here (ex: 42)","label-position":"left","label-width":"110px","mb-2":"","label-align":"right"},null,8,["value"]),a(w,{label:"Input base","label-placement":"left","label-width":"110","show-feedback":!1},{default:p(()=>[a(g,{value:e(o),"onUpdate:value":t[1]||(t[1]=_=>v(o)?o.value=_:null),max:"64",min:"2",placeholder:"Put your input base here (ex: 10)","w-full":""},null,8,["value"])]),_:1}),e(d)?(B(),D(C,{key:0,style:{"margin-top":"25px"},type:"error"},{default:p(()=>[h(E(e(d)),1)]),_:1})):H("",!0),a($),a(i,u({label:"Binary (2)"},l,{value:s({value:e(n),fromBase:e(o),toBase:2}),placeholder:"Binary version will be here..."}),null,16,["value"]),a(i,u({label:"Octal (8)"},l,{value:s({value:e(n),fromBase:e(o),toBase:8}),placeholder:"Octal version will be here..."}),null,16,["value"]),a(i,u({label:"Decimal (10)"},l,{value:s({value:e(n),fromBase:e(o),toBase:10}),placeholder:"Decimal version will be here..."}),null,16,["value"]),a(i,u({label:"Hexadecimal (16)"},l,{value:s({value:e(n),fromBase:e(o),toBase:16}),placeholder:"Hexadecimal version will be here..."}),null,16,["value"]),a(i,u({label:"Base64 (64)"},l,{value:s({value:e(n),fromBase:e(o),toBase:64}),placeholder:"Base64 version will be here..."}),null,16,["value"]),O("div",G,[a(P,{style:{width:"160px","margin-right":"10px"}},{default:p(()=>[a(k,null,{default:p(()=>[h(" Custom: ")]),_:1}),a(g,{value:e(r),"onUpdate:value":t[2]||(t[2]=_=>v(r)?r.value=_:null),max:"64",min:"2"},null,8,["value"])]),_:1}),a(i,u({"flex-1":""},l,{value:s({value:e(n),fromBase:e(o),toBase:e(r)}),placeholder:`Base ${e(r)} will be here...`}),null,16,["value","placeholder"])])]),_:1})])}}});const ie=T(J,[["__scopeId","data-v-0baf61ec"]]);export{ie as default};
