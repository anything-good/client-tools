import{bk as P,bl as q,a as S,n as N,Y as F,au as Y,d as T,as as z,aj as x,an as E,at as U,ae as Z,aO as B,R as H,aA as J,ag as I,b9 as j,aZ as W,bm as K,bn as ee,bo as O}from"./index-41a18eb3.js";import{i as te}from"./is-browser-fc34c9a6.js";function se(e){if(typeof e=="number")return{"":e.toString()};const s={};return e.split(/ +/).forEach(r=>{if(r==="")return;const[n,t]=r.split(":");t===void 0?s[""]=n:s[n]=t}),s}function w(e,s){var r;if(e==null)return;const n=se(e);if(s===void 0)return n[""];if(typeof s=="string")return(r=n[s])!==null&&r!==void 0?r:n[""];if(Array.isArray(s)){for(let t=s.length-1;t>=0;--t){const i=s[t];if(i in n)return n[i]}return n[""]}else{let t,i=-1;return Object.keys(n).forEach(a=>{const l=Number(a);!Number.isNaN(l)&&s>=l&&l>=i&&(i=l,t=n[a])}),t}}function ne(e,s="default",r=[]){const t=e.$slots[s];return t===void 0?r:t()}function re(e){var s;const r=(s=e.dirs)===null||s===void 0?void 0:s.find(({dir:n})=>n===P);return!!(r&&r.value===!1)}const ie={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function oe(e){return`(min-width: ${e}px)`}const G={};function ae(e=ie){if(!q)return S(()=>[]);if(typeof window.matchMedia!="function")return S(()=>[]);const s=N({}),r=Object.keys(e),n=(t,i)=>{t.matches?s.value[i]=!0:s.value[i]=!1};return r.forEach(t=>{const i=e[t];let a,l;G[i]===void 0?(a=window.matchMedia(oe(i)),a.addEventListener?a.addEventListener("change",d=>{l.forEach(f=>{f(d,t)})}):a.addListener&&a.addListener(d=>{l.forEach(f=>{f(d,t)})}),l=new Set,G[i]={mql:a,cbs:l}):(a=G[i].mql,l=G[i].cbs),l.add(n),a.matches&&l.forEach(d=>{d(a,t)})}),F(()=>{r.forEach(t=>{const{cbs:i}=G[e[t]];i.has(n)&&i.delete(n)})}),S(()=>{const{value:t}=s;return r.filter(i=>t[i])})}const V=1,L=Y("n-grid"),Q=1,le={span:{type:[Number,String],default:Q},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}},ce=T({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:le,setup(){const{isSsrRef:e,xGapRef:s,itemStyleRef:r,overflowRef:n,layoutShiftDisabledRef:t}=z(L),i=U();return{overflow:n,itemStyle:r,layoutShiftDisabled:t,mergedXGap:S(()=>x(s.value||0)),deriveStyle:()=>{e.value;const{privateSpan:a=Q,privateShow:l=!0,privateColStart:d=void 0,privateOffset:f=0}=i.vnode.props,{value:$}=s,g=x($||0);return{display:l?"":"none",gridColumn:`${d??`span ${a}`} / span ${a}`,marginLeft:f?`calc((100% - (${a} - 1) * ${g}) / ${a} * ${f} + ${g} * ${f})`:""}}}},render(){var e,s;if(this.layoutShiftDisabled){const{span:r,offset:n,mergedXGap:t}=this;return E("div",{style:{gridColumn:`span ${r} / span ${r}`,marginLeft:n?`calc((100% - (${r} - 1) * ${t}) / ${r} * ${n} + ${t} * ${n})`:""}},this.$slots)}return E("div",{style:[this.itemStyle,this.deriveStyle()]},(s=(e=this.$slots).default)===null||s===void 0?void 0:s.call(e,{overflow:this.overflow}))}}),fe={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},X=24,A="__ssr__",ue={layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:X},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}},ve=T({name:"Grid",inheritAttrs:!1,props:ue,setup(e){const{mergedClsPrefixRef:s,mergedBreakpointsRef:r}=Z(e),n=/^\d+$/,t=N(void 0),i=ae(r?.value||fe),a=B(()=>!!(e.itemResponsive||!n.test(e.cols.toString())||!n.test(e.xGap.toString())||!n.test(e.yGap.toString()))),l=S(()=>{if(a.value)return e.responsive==="self"?t.value:i.value}),d=B(()=>{var u;return(u=Number(w(e.cols.toString(),l.value)))!==null&&u!==void 0?u:X}),f=B(()=>w(e.xGap.toString(),l.value)),$=B(()=>w(e.yGap.toString(),l.value)),g=u=>{t.value=u.contentRect.width},v=u=>{K(g,u)},b=N(!1),R=S(()=>{if(e.responsive==="self")return v}),p=N(!1),m=N();return H(()=>{const{value:u}=m;u&&u.hasAttribute(A)&&(u.removeAttribute(A),p.value=!0)}),J(L,{layoutShiftDisabledRef:I(e,"layoutShiftDisabled"),isSsrRef:p,itemStyleRef:I(e,"itemStyle"),xGapRef:f,overflowRef:b}),{isSsr:!te,contentEl:m,mergedClsPrefix:s,style:S(()=>e.layoutShiftDisabled?{width:"100%",display:"grid",gridTemplateColumns:`repeat(${e.cols}, minmax(0, 1fr))`,columnGap:x(e.xGap),rowGap:x(e.yGap)}:{width:"100%",display:"grid",gridTemplateColumns:`repeat(${d.value}, minmax(0, 1fr))`,columnGap:x(f.value),rowGap:x($.value)}),isResponsive:a,responsiveQuery:l,responsiveCols:d,handleResize:R,overflow:b}},render(){if(this.layoutShiftDisabled)return E("div",j({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);const e=()=>{var s,r,n,t,i,a,l;this.overflow=!1;const d=ee(ne(this)),f=[],{collapsed:$,collapsedRows:g,responsiveCols:v,responsiveQuery:b}=this;d.forEach(o=>{var C,h,c,y,D;if(((C=o?.type)===null||C===void 0?void 0:C.__GRID_ITEM__)!==!0)return;if(re(o)){const _=O(o);_.props?_.props.privateShow=!1:_.props={privateShow:!1},f.push({child:_,rawChildSpan:0});return}o.dirs=((h=o.dirs)===null||h===void 0?void 0:h.filter(({dir:_})=>_!==P))||null,((c=o.dirs)===null||c===void 0?void 0:c.length)===0&&(o.dirs=null);const M=O(o),k=Number((D=w((y=M.props)===null||y===void 0?void 0:y.span,b))!==null&&D!==void 0?D:V);k!==0&&f.push({child:M,rawChildSpan:k})});let R=0;const p=(s=f[f.length-1])===null||s===void 0?void 0:s.child;if(p?.props){const o=(r=p.props)===null||r===void 0?void 0:r.suffix;o!==void 0&&o!==!1&&(R=Number((t=w((n=p.props)===null||n===void 0?void 0:n.span,b))!==null&&t!==void 0?t:V),p.props.privateSpan=R,p.props.privateColStart=v+1-R,p.props.privateShow=(i=p.props.privateShow)!==null&&i!==void 0?i:!0)}let m=0,u=!1;for(const{child:o,rawChildSpan:C}of f){if(u&&(this.overflow=!0),!u){const h=Number((l=w((a=o.props)===null||a===void 0?void 0:a.offset,b))!==null&&l!==void 0?l:0),c=Math.min(C+h,v);if(o.props?(o.props.privateSpan=c,o.props.privateOffset=h):o.props={privateSpan:c,privateOffset:h},$){const y=m%v;c+y>v&&(m+=v-y),c+m+R>g*v?u=!0:m+=c}}u&&(o.props?o.props.privateShow!==!0&&(o.props.privateShow=!1):o.props={privateShow:!1})}return E("div",j({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style,[A]:this.isSsr||void 0},this.$attrs),f.map(({child:o})=>o))};return this.isResponsive&&this.responsive==="self"?E(W,{onResize:this.handleResize},{default:e}):e()}});export{ve as _,ce as a};
