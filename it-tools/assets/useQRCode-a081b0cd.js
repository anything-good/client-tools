import{i as Je}from"./is-browser-fc34c9a6.js";import{cw as ge,aV as _,an as n,d as K,af as we,au as me,aL as Qe,a5 as eo,cx as oo,ab as U,a8 as P,cy as ae,bQ as to,ad as no,ag as pe,n as L,P as xe,Y as be,a_ as D,as as Ce,a as io,ae as Se,al as ro,bS as ao,cz as so,bY as se,cA as lo,aB as V,F as le,aS as k,bk as uo,aQ as Y,b2 as co,cB as fo,bm as ho,R as ue,X as ce,aA as vo,v as go,L as H}from"./index-41a18eb3.js";import{u as wo}from"./use-locale-e263d48c.js";import{b as mo}from"./browser-e933942f.js";const po=(e,s)=>{if(!e)return;const i=document.createElement("a");i.href=e,s!==void 0&&(i.download=s),document.body.appendChild(i),i.click(),document.body.removeChild(i)};function xo(e,s,i,u){var a=-1,d=e==null?0:e.length;for(u&&d&&(i=e[++a]);++a<d;)i=s(i,e[a],a,e);return i}function bo(e){return function(s){return e?.[s]}}var Co={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},So=bo(Co);const Oo=So;var Lo=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Mo="\\u0300-\\u036f",Ro="\\ufe20-\\ufe2f",ko="\\u20d0-\\u20ff",Io=Mo+Ro+ko,Po="["+Io+"]",zo=RegExp(Po,"g");function yo(e){return e=ge(e),e&&e.replace(Lo,Oo).replace(zo,"")}var Ao=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function To(e){return e.match(Ao)||[]}var Eo=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Ho(e){return Eo.test(e)}var Oe="\\ud800-\\udfff",Do="\\u0300-\\u036f",Bo="\\ufe20-\\ufe2f",_o="\\u20d0-\\u20ff",$o=Do+Bo+_o,Le="\\u2700-\\u27bf",Me="a-z\\xdf-\\xf6\\xf8-\\xff",Zo="\\xac\\xb1\\xd7\\xf7",jo="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Wo="\\u2000-\\u206f",No=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Re="A-Z\\xc0-\\xd6\\xd8-\\xde",Uo="\\ufe0e\\ufe0f",ke=Zo+jo+Wo+No,Ie="['’]",de="["+ke+"]",Vo="["+$o+"]",Pe="\\d+",Yo="["+Le+"]",ze="["+Me+"]",ye="[^"+Oe+ke+Pe+Le+Me+Re+"]",Xo="\\ud83c[\\udffb-\\udfff]",Fo="(?:"+Vo+"|"+Xo+")",Go="[^"+Oe+"]",Ae="(?:\\ud83c[\\udde6-\\uddff]){2}",Te="[\\ud800-\\udbff][\\udc00-\\udfff]",E="["+Re+"]",Ko="\\u200d",fe="(?:"+ze+"|"+ye+")",qo="(?:"+E+"|"+ye+")",he="(?:"+Ie+"(?:d|ll|m|re|s|t|ve))?",ve="(?:"+Ie+"(?:D|LL|M|RE|S|T|VE))?",Ee=Fo+"?",He="["+Uo+"]?",Jo="(?:"+Ko+"(?:"+[Go,Ae,Te].join("|")+")"+He+Ee+")*",Qo="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",et="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ot=He+Ee+Jo,tt="(?:"+[Yo,Ae,Te].join("|")+")"+ot,nt=RegExp([E+"?"+ze+"+"+he+"(?="+[de,E,"$"].join("|")+")",qo+"+"+ve+"(?="+[de,E+fe,"$"].join("|")+")",E+"?"+fe+"+"+he,E+"+"+ve,et,Qo,Pe,tt].join("|"),"g");function it(e){return e.match(nt)||[]}function rt(e,s,i){return e=ge(e),s=i?void 0:s,s===void 0?Ho(e)?it(e):To(e):e.match(s)||[]}var at="['’]",st=RegExp(at,"g");function lt(e){return function(s){return xo(rt(yo(s).replace(st,"")),e,"")}}var ut=lt(function(e,s,i){return e+(i?"-":"")+s.toLowerCase()});const ct=ut,dt=_("rotateClockwise",n("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 12.7916 15.3658 15.2026 13 16.3265V14.5C13 14.2239 12.7761 14 12.5 14C12.2239 14 12 14.2239 12 14.5V17.5C12 17.7761 12.2239 18 12.5 18H15.5C15.7761 18 16 17.7761 16 17.5C16 17.2239 15.7761 17 15.5 17H13.8758C16.3346 15.6357 18 13.0128 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 10.2761 2.22386 10.5 2.5 10.5C2.77614 10.5 3 10.2761 3 10Z",fill:"currentColor"}),n("path",{d:"M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12ZM10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10C11 10.5523 10.5523 11 10 11Z",fill:"currentColor"}))),ft=_("rotateClockwise",n("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 12.7916 4.63419 15.2026 7 16.3265V14.5C7 14.2239 7.22386 14 7.5 14C7.77614 14 8 14.2239 8 14.5V17.5C8 17.7761 7.77614 18 7.5 18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H6.12422C3.66539 15.6357 2 13.0128 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 10.2761 17.7761 10.5 17.5 10.5C17.2239 10.5 17 10.2761 17 10Z",fill:"currentColor"}),n("path",{d:"M10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12ZM10 11C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11Z",fill:"currentColor"}))),ht=_("zoomIn",n("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M11.5 8.5C11.5 8.22386 11.2761 8 11 8H9V6C9 5.72386 8.77614 5.5 8.5 5.5C8.22386 5.5 8 5.72386 8 6V8H6C5.72386 8 5.5 8.22386 5.5 8.5C5.5 8.77614 5.72386 9 6 9H8V11C8 11.2761 8.22386 11.5 8.5 11.5C8.77614 11.5 9 11.2761 9 11V9H11C11.2761 9 11.5 8.77614 11.5 8.5Z",fill:"currentColor"}),n("path",{d:"M8.5 3C11.5376 3 14 5.46243 14 8.5C14 9.83879 13.5217 11.0659 12.7266 12.0196L16.8536 16.1464C17.0488 16.3417 17.0488 16.6583 16.8536 16.8536C16.68 17.0271 16.4106 17.0464 16.2157 16.9114L16.1464 16.8536L12.0196 12.7266C11.0659 13.5217 9.83879 14 8.5 14C5.46243 14 3 11.5376 3 8.5C3 5.46243 5.46243 3 8.5 3ZM8.5 4C6.01472 4 4 6.01472 4 8.5C4 10.9853 6.01472 13 8.5 13C10.9853 13 13 10.9853 13 8.5C13 6.01472 10.9853 4 8.5 4Z",fill:"currentColor"}))),vt=_("zoomOut",n("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M11 8C11.2761 8 11.5 8.22386 11.5 8.5C11.5 8.77614 11.2761 9 11 9H6C5.72386 9 5.5 8.77614 5.5 8.5C5.5 8.22386 5.72386 8 6 8H11Z",fill:"currentColor"}),n("path",{d:"M14 8.5C14 5.46243 11.5376 3 8.5 3C5.46243 3 3 5.46243 3 8.5C3 11.5376 5.46243 14 8.5 14C9.83879 14 11.0659 13.5217 12.0196 12.7266L16.1464 16.8536L16.2157 16.9114C16.4106 17.0464 16.68 17.0271 16.8536 16.8536C17.0488 16.6583 17.0488 16.3417 16.8536 16.1464L12.7266 12.0196C13.5217 11.0659 14 9.83879 14 8.5ZM4 8.5C4 6.01472 6.01472 4 8.5 4C10.9853 4 13 6.01472 13 8.5C13 10.9853 10.9853 13 8.5 13C6.01472 13 4 10.9853 4 8.5Z",fill:"currentColor"}))),gt=K({name:"ResizeSmall",render(){return n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},n("g",{fill:"none"},n("path",{d:"M5.5 4A1.5 1.5 0 0 0 4 5.5v1a.5.5 0 0 1-1 0v-1A2.5 2.5 0 0 1 5.5 3h1a.5.5 0 0 1 0 1h-1zM16 5.5A1.5 1.5 0 0 0 14.5 4h-1a.5.5 0 0 1 0-1h1A2.5 2.5 0 0 1 17 5.5v1a.5.5 0 0 1-1 0v-1zm0 9a1.5 1.5 0 0 1-1.5 1.5h-1a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 0-1 0v1zm-12 0A1.5 1.5 0 0 0 5.5 16h1.25a.5.5 0 0 1 0 1H5.5A2.5 2.5 0 0 1 3 14.5v-1.25a.5.5 0 0 1 1 0v1.25zM8.5 7A1.5 1.5 0 0 0 7 8.5v3A1.5 1.5 0 0 0 8.5 13h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 11.5 7h-3zM8 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3z",fill:"currentColor"})))}}),wt=Je&&"loading"in document.createElement("img"),mt=(e={})=>{var s;const{root:i=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(s=e.threshold)!==null&&s!==void 0?s:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof i=="string"?document.querySelector(i):i)||document.documentElement})}},X=new WeakMap,F=new WeakMap,G=new WeakMap,pt=(e,s,i)=>{if(!e)return()=>{};const u=mt(s),{root:a}=u.options;let d;const b=X.get(a);b?d=b:(d=new Map,X.set(a,d));let g,v;d.has(u.hash)?(v=d.get(u.hash),v[1].has(e)||(g=v[0],v[1].add(e),g.observe(e))):(g=new IntersectionObserver(w=>{w.forEach(z=>{if(z.isIntersecting){const M=F.get(z.target),R=G.get(z.target);M&&M(),R&&(R.value=!0)}})},u.options),g.observe(e),v=[g,new Set([e])],d.set(u.hash,v));let l=!1;const c=()=>{l||(F.delete(e),G.delete(e),l=!0,v[1].has(e)&&(v[0].unobserve(e),v[1].delete(e)),v[1].size<=0&&d.delete(u.hash),d.size||X.delete(a))};return F.set(e,c),G.set(e,i),c},De=Object.assign(Object.assign({},we.props),{onPreviewPrev:Function,onPreviewNext:Function,showToolbar:{type:Boolean,default:!0},showToolbarTooltip:Boolean}),Be=me("n-image");function xt(){return{toolbarIconColor:"rgba(255, 255, 255, .9)",toolbarColor:"rgba(0, 0, 0, .35)",toolbarBoxShadow:"none",toolbarBorderRadius:"24px"}}const bt=Qe({name:"Image",common:eo,peers:{Tooltip:oo},self:xt}),Ct=n("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M6 5C5.75454 5 5.55039 5.17688 5.50806 5.41012L5.5 5.5V14.5C5.5 14.7761 5.72386 15 6 15C6.24546 15 6.44961 14.8231 6.49194 14.5899L6.5 14.5V5.5C6.5 5.22386 6.27614 5 6 5ZM13.8536 5.14645C13.68 4.97288 13.4106 4.9536 13.2157 5.08859L13.1464 5.14645L8.64645 9.64645C8.47288 9.82001 8.4536 10.0894 8.58859 10.2843L8.64645 10.3536L13.1464 14.8536C13.3417 15.0488 13.6583 15.0488 13.8536 14.8536C14.0271 14.68 14.0464 14.4106 13.9114 14.2157L13.8536 14.1464L9.70711 10L13.8536 5.85355C14.0488 5.65829 14.0488 5.34171 13.8536 5.14645Z",fill:"currentColor"})),St=n("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M13.5 5C13.7455 5 13.9496 5.17688 13.9919 5.41012L14 5.5V14.5C14 14.7761 13.7761 15 13.5 15C13.2545 15 13.0504 14.8231 13.0081 14.5899L13 14.5V5.5C13 5.22386 13.2239 5 13.5 5ZM5.64645 5.14645C5.82001 4.97288 6.08944 4.9536 6.28431 5.08859L6.35355 5.14645L10.8536 9.64645C11.0271 9.82001 11.0464 10.0894 10.9114 10.2843L10.8536 10.3536L6.35355 14.8536C6.15829 15.0488 5.84171 15.0488 5.64645 14.8536C5.47288 14.68 5.4536 14.4106 5.58859 14.2157L5.64645 14.1464L9.79289 10L5.64645 5.85355C5.45118 5.65829 5.45118 5.34171 5.64645 5.14645Z",fill:"currentColor"})),Ot=n("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M4.089 4.216l.057-.07a.5.5 0 0 1 .638-.057l.07.057L10 9.293l5.146-5.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 .057.638l-.057.07L10.707 10l5.147 5.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057L10 10.707l-5.146 5.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1-.057-.638l.057-.07L9.293 10L4.146 4.854a.5.5 0 0 1-.057-.638l.057-.07l-.057.07z",fill:"currentColor"})),Lt=n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 1024 1024"},n("path",{fill:"currentColor",d:"M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"})),Mt=U([U("body >",[P("image-container","position: fixed;")]),P("image-preview-container",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 `),P("image-preview-overlay",`
 z-index: -1;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background: rgba(0, 0, 0, .3);
 `,[ae()]),P("image-preview-toolbar",`
 z-index: 1;
 position: absolute;
 left: 50%;
 transform: translateX(-50%);
 border-radius: var(--n-toolbar-border-radius);
 height: 48px;
 bottom: 40px;
 padding: 0 12px;
 background: var(--n-toolbar-color);
 box-shadow: var(--n-toolbar-box-shadow);
 color: var(--n-toolbar-icon-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[P("base-icon",`
 padding: 0 8px;
 font-size: 28px;
 cursor: pointer;
 `),ae()]),P("image-preview-wrapper",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 pointer-events: none;
 `,[to()]),P("image-preview",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: all;
 margin: auto;
 max-height: calc(100vh - 32px);
 max-width: calc(100vw - 32px);
 transition: transform .3s var(--n-bezier);
 `),P("image",`
 display: inline-flex;
 max-height: 100%;
 max-width: 100%;
 `,[no("preview-disabled",`
 cursor: pointer;
 `),U("img",`
 border-radius: inherit;
 `)])]),B=32,Rt=K({name:"ImagePreview",props:Object.assign(Object.assign({},De),{onNext:Function,onPrev:Function,clsPrefix:{type:String,required:!0}}),setup(e){const s=we("Image","-image",Mt,bt,e,pe(e,"clsPrefix"));let i=null;const u=L(null),a=L(null),d=L(void 0),b=L(!1),g=L(!1),{localeRef:v}=wo("Image");function l(){const{value:o}=a;if(!i||!o)return;const{style:r}=o,t=i.getBoundingClientRect(),f=t.left+t.width/2,h=t.top+t.height/2;r.transformOrigin=`${f}px ${h}px`}function c(o){var r,t;switch(o.key){case" ":o.preventDefault();break;case"ArrowLeft":(r=e.onPrev)===null||r===void 0||r.call(e);break;case"ArrowRight":(t=e.onNext)===null||t===void 0||t.call(e);break;case"Escape":ne();break}}xe(b,o=>{o?Y("keydown",document,c):D("keydown",document,c)}),be(()=>{D("keydown",document,c)});let w=0,z=0,M=0,R=0,$=0,Z=0,q=0,J=0,j=!1;function Q(o){const{clientX:r,clientY:t}=o;M=r-w,R=t-z,ho(S)}function _e(o){const{mouseUpClientX:r,mouseUpClientY:t,mouseDownClientX:f,mouseDownClientY:h}=o,x=f-r,C=h-t,O=`vertical${C>0?"Top":"Bottom"}`,I=`horizontal${x>0?"Left":"Right"}`;return{moveVerticalDirection:O,moveHorizontalDirection:I,deltaHorizontal:x,deltaVertical:C}}function ee(o){const{value:r}=u;if(!r)return{offsetX:0,offsetY:0};const t=r.getBoundingClientRect(),{moveVerticalDirection:f,moveHorizontalDirection:h,deltaHorizontal:x,deltaVertical:C}=o||{};let O=0,I=0;return t.width<=window.innerWidth?O=0:t.left>0?O=(t.width-window.innerWidth)/2:t.right<window.innerWidth?O=-(t.width-window.innerWidth)/2:h==="horizontalRight"?O=Math.min((t.width-window.innerWidth)/2,$-(x??0)):O=Math.max(-((t.width-window.innerWidth)/2),$-(x??0)),t.height<=window.innerHeight?I=0:t.top>0?I=(t.height-window.innerHeight)/2:t.bottom<window.innerHeight?I=-(t.height-window.innerHeight)/2:f==="verticalBottom"?I=Math.min((t.height-window.innerHeight)/2,Z-(C??0)):I=Math.max(-((t.height-window.innerHeight)/2),Z-(C??0)),{offsetX:O,offsetY:I}}function oe(o){D("mousemove",document,Q),D("mouseup",document,oe);const{clientX:r,clientY:t}=o;j=!1;const f=_e({mouseUpClientX:r,mouseUpClientY:t,mouseDownClientX:q,mouseDownClientY:J}),h=ee(f);M=h.offsetX,R=h.offsetY,S()}const m=Ce(Be,null);function $e(o){var r,t;if((t=(r=m?.previewedImgPropsRef.value)===null||r===void 0?void 0:r.onMousedown)===null||t===void 0||t.call(r,o),o.button!==0)return;const{clientX:f,clientY:h}=o;j=!0,w=f-M,z=h-R,$=M,Z=R,q=f,J=h,S(),Y("mousemove",document,Q),Y("mouseup",document,oe)}function Ze(o){var r,t;(t=(r=m?.previewedImgPropsRef.value)===null||r===void 0?void 0:r.onDblclick)===null||t===void 0||t.call(r,o);const f=te();p=p===f?1:f,S()}const W=1.5;let y=0,p=1,A=0;function N(){p=1,y=0}function je(){var o;N(),A=0,(o=e.onPrev)===null||o===void 0||o.call(e)}function We(){var o;N(),A=0,(o=e.onNext)===null||o===void 0||o.call(e)}function Ne(){A-=90,S()}function Ue(){A+=90,S()}function Ve(){const{value:o}=u;if(!o)return 1;const{innerWidth:r,innerHeight:t}=window,f=Math.max(1,o.naturalHeight/(t-B)),h=Math.max(1,o.naturalWidth/(r-B));return Math.max(3,f*2,h*2)}function te(){const{value:o}=u;if(!o)return 1;const{innerWidth:r,innerHeight:t}=window,f=o.naturalHeight/(t-B),h=o.naturalWidth/(r-B);return f<1&&h<1?1:Math.max(f,h)}function Ye(){const o=Ve();p<o&&(y+=1,p=Math.min(o,Math.pow(W,y)),S())}function Xe(){if(p>.5){const o=p;y-=1,p=Math.max(.5,Math.pow(W,y));const r=o-p;S(!1);const t=ee();p+=r,S(!1),p-=r,M=t.offsetX,R=t.offsetY,S()}}function Fe(){const o=d.value;o&&po(o,void 0)}function S(o=!0){var r;const{value:t}=u;if(!t)return;const{style:f}=t,h=co((r=m?.previewedImgPropsRef.value)===null||r===void 0?void 0:r.style);let x="";if(typeof h=="string")x=h+";";else for(const O in h)x+=`${ct(O)}: ${h[O]};`;const C=`transform-origin: center; transform: translateX(${M}px) translateY(${R}px) rotate(${A}deg) scale(${p});`;j?f.cssText=x+"cursor: grabbing; transition: none;"+C:f.cssText=x+"cursor: grab;"+C+(o?"":"transition: none;"),o||t.offsetHeight}function ne(){b.value=!b.value,g.value=!0}function Ge(){p=te(),y=Math.ceil(Math.log(p)/Math.log(W)),M=0,R=0,S()}const Ke={setPreviewSrc:o=>{d.value=o},setThumbnailEl:o=>{i=o},toggleShow:ne};function qe(o,r){if(e.showToolbarTooltip){const{value:t}=s;return n(fo,{to:!1,theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,keepAliveOnHover:!1},{default:()=>v.value[r],trigger:()=>o})}else return o}const ie=io(()=>{const{common:{cubicBezierEaseInOut:o},self:{toolbarIconColor:r,toolbarBorderRadius:t,toolbarBoxShadow:f,toolbarColor:h}}=s.value;return{"--n-bezier":o,"--n-toolbar-icon-color":r,"--n-toolbar-color":h,"--n-toolbar-border-radius":t,"--n-toolbar-box-shadow":f}}),{inlineThemeDisabled:re}=Se(),T=re?ro("image-preview",void 0,ie,e):void 0;return Object.assign({previewRef:u,previewWrapperRef:a,previewSrc:d,show:b,appear:ao(),displayed:g,previewedImgProps:m?.previewedImgPropsRef,handleWheel(o){o.preventDefault()},handlePreviewMousedown:$e,handlePreviewDblclick:Ze,syncTransformOrigin:l,handleAfterLeave:()=>{N(),A=0,g.value=!1},handleDragStart:o=>{var r,t;(t=(r=m?.previewedImgPropsRef.value)===null||r===void 0?void 0:r.onDragstart)===null||t===void 0||t.call(r,o),o.preventDefault()},zoomIn:Ye,zoomOut:Xe,handleDownloadClick:Fe,rotateCounterclockwise:Ne,rotateClockwise:Ue,handleSwitchPrev:je,handleSwitchNext:We,withTooltip:qe,resizeToOrignalImageSize:Ge,cssVars:re?void 0:ie,themeClass:T?.themeClass,onRender:T?.onRender},Ke)},render(){var e,s;const{clsPrefix:i}=this;return n(le,null,(s=(e=this.$slots).default)===null||s===void 0?void 0:s.call(e),n(so,{show:this.show},{default:()=>{var u;return this.show||this.displayed?((u=this.onRender)===null||u===void 0||u.call(this),se(n("div",{class:[`${i}-image-preview-container`,this.themeClass],style:this.cssVars,onWheel:this.handleWheel},n(V,{name:"fade-in-transition",appear:this.appear},{default:()=>this.show?n("div",{class:`${i}-image-preview-overlay`,onClick:this.toggleShow}):null}),this.showToolbar?n(V,{name:"fade-in-transition",appear:this.appear},{default:()=>{if(!this.show)return null;const{withTooltip:a}=this;return n("div",{class:`${i}-image-preview-toolbar`},this.onPrev?n(le,null,a(n(k,{clsPrefix:i,onClick:this.handleSwitchPrev},{default:()=>Ct}),"tipPrevious"),a(n(k,{clsPrefix:i,onClick:this.handleSwitchNext},{default:()=>St}),"tipNext")):null,a(n(k,{clsPrefix:i,onClick:this.rotateCounterclockwise},{default:()=>n(ft,null)}),"tipCounterclockwise"),a(n(k,{clsPrefix:i,onClick:this.rotateClockwise},{default:()=>n(dt,null)}),"tipClockwise"),a(n(k,{clsPrefix:i,onClick:this.resizeToOrignalImageSize},{default:()=>n(gt,null)}),"tipOriginalSize"),a(n(k,{clsPrefix:i,onClick:this.zoomOut},{default:()=>n(vt,null)}),"tipZoomOut"),a(n(k,{clsPrefix:i,onClick:this.zoomIn},{default:()=>n(ht,null)}),"tipZoomIn"),a(n(k,{clsPrefix:i,onClick:this.handleDownloadClick},{default:()=>Lt}),"tipDownload"),a(n(k,{clsPrefix:i,onClick:this.toggleShow},{default:()=>Ot}),"tipClose"))}}):null,n(V,{name:"fade-in-scale-up-transition",onAfterLeave:this.handleAfterLeave,appear:this.appear,onEnter:this.syncTransformOrigin,onBeforeLeave:this.syncTransformOrigin},{default:()=>{const{previewedImgProps:a={}}=this;return se(n("div",{class:`${i}-image-preview-wrapper`,ref:"previewWrapperRef"},n("img",Object.assign({},a,{draggable:!1,onMousedown:this.handlePreviewMousedown,onDblclick:this.handlePreviewDblclick,class:[`${i}-image-preview`,a.class],key:this.previewSrc,src:this.previewSrc,ref:"previewRef",onDragstart:this.handleDragStart}))),[[uo,this.show]])}})),[[lo,{enabled:this.show}]])):null}}))}}),kt=me("n-image-group"),It=Object.assign({alt:String,height:[String,Number],imgProps:Object,previewedImgProps:Object,lazy:Boolean,intersectionObserverOptions:Object,objectFit:{type:String,default:"fill"},previewSrc:String,fallbackSrc:String,width:[String,Number],src:String,previewDisabled:Boolean,loadDescription:String,onError:Function,onLoad:Function},De),Tt=K({name:"Image",props:It,inheritAttrs:!1,setup(e){const s=L(null),i=L(!1),u=L(null),a=Ce(kt,null),{mergedClsPrefixRef:d}=a||Se(e),b={click:()=>{if(e.previewDisabled||i.value)return;const l=e.previewSrc||e.src;if(a){a.setPreviewSrc(l),a.setThumbnailEl(s.value),a.toggleShow();return}const{value:c}=u;c&&(c.setPreviewSrc(l),c.setThumbnailEl(s.value),c.toggleShow())}},g=L(!e.lazy);ue(()=>{var l;(l=s.value)===null||l===void 0||l.setAttribute("data-group-id",a?.groupId||"")}),ue(()=>{if(e.lazy&&e.intersectionObserverOptions){let l;const c=ce(()=>{l?.(),l=void 0,l=pt(s.value,e.intersectionObserverOptions,g)});be(()=>{c(),l?.()})}}),ce(()=>{var l;e.src||((l=e.imgProps)===null||l===void 0||l.src),i.value=!1});const v=L(!1);return vo(Be,{previewedImgPropsRef:pe(e,"previewedImgProps")}),Object.assign({mergedClsPrefix:d,groupId:a?.groupId,previewInstRef:u,imageRef:s,showError:i,shouldStartLoading:g,loaded:v,mergedOnClick:l=>{var c,w;b.click(),(w=(c=e.imgProps)===null||c===void 0?void 0:c.onClick)===null||w===void 0||w.call(c,l)},mergedOnError:l=>{if(!g.value)return;i.value=!0;const{onError:c,imgProps:{onError:w}={}}=e;c?.(l),w?.(l)},mergedOnLoad:l=>{const{onLoad:c,imgProps:{onLoad:w}={}}=e;c?.(l),w?.(l),v.value=!0}},b)},render(){var e,s;const{mergedClsPrefix:i,imgProps:u={},loaded:a,$attrs:d,lazy:b}=this,g=(s=(e=this.$slots).placeholder)===null||s===void 0?void 0:s.call(e),v=this.src||u.src,l=n("img",Object.assign(Object.assign({},u),{ref:"imageRef",width:this.width||u.width,height:this.height||u.height,src:this.showError?this.fallbackSrc:b&&this.intersectionObserverOptions?this.shouldStartLoading?v:void 0:v,alt:this.alt||u.alt,"aria-label":this.alt||u.alt,onClick:this.mergedOnClick,onError:this.mergedOnError,onLoad:this.mergedOnLoad,loading:wt&&b&&!this.intersectionObserverOptions?"lazy":"eager",style:[u.style||"",g&&!a?{height:"0",width:"0",visibility:"hidden"}:"",{objectFit:this.objectFit}],"data-error":this.showError,"data-preview-src":this.previewSrc||this.src}));return n("div",Object.assign({},d,{role:"none",class:[d.class,`${i}-image`,(this.previewDisabled||this.showError)&&`${i}-image--preview-disabled`]}),this.groupId?l:n(Rt,{theme:this.theme,themeOverrides:this.themeOverrides,clsPrefix:i,ref:"previewInstRef",showToolbar:this.showToolbar,showToolbarTooltip:this.showToolbarTooltip},{default:()=>l}),!a&&g)}});function Et({text:e,color:{background:s,foreground:i},errorCorrectionLevel:u,options:a}){const d=L("");return xe([e,s,i,u].filter(go),async()=>{H(e)&&(d.value=await mo.toDataURL(H(e).trim(),{color:{dark:H(i),light:H(s),...a?.color},errorCorrectionLevel:H(u)??"M",...a}))},{immediate:!0}),{qrcode:d}}export{Tt as _,Et as u};
