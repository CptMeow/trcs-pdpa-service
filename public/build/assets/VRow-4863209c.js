import{aY as u,au as S,aZ as b,B as C,h as N}from"./main-51fa4cdd.js";const c=["sm","md","lg","xl","xxl"],j=(()=>c.reduce((t,l)=>(t[l]={type:[Boolean,String,Number],default:!1},t),{}))(),k=(()=>c.reduce((t,l)=>(t["offset"+u(l)]={type:[String,Number],default:null},t),{}))(),v=(()=>c.reduce((t,l)=>(t["order"+u(l)]={type:[String,Number],default:null},t),{}))(),y={col:Object.keys(j),offset:Object.keys(k),order:Object.keys(v)};function P(t,l,e){let a=t;if(!(e==null||e===!1)){if(l){const n=l.replace(t,"");a+=`-${n}`}return t==="col"&&(a="v-"+a),t==="col"&&(e===""||e===!0)||(a+=`-${e}`),a.toLowerCase()}}const x=["auto","start","end","center","baseline","stretch"],M=S()({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...j,offset:{type:[String,Number],default:null},...k,order:{type:[String,Number],default:null},...v,alignSelf:{type:String,default:null,validator:t=>x.includes(t)},...b()},setup(t,l){let{slots:e}=l;const a=C(()=>{const n=[];let s;for(s in y)y[s].forEach(o=>{const i=t[o],g=P(s,o,i);g&&n.push(g)});const r=n.some(o=>o.startsWith("v-col-"));return n.push({"v-col":!r||!t.cols,[`v-col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),n});return()=>{var n;return N(t.tag,{class:a.value},(n=e.default)==null?void 0:n.call(e))}}}),G=["sm","md","lg","xl","xxl"],f=["start","end","center"],L=["space-between","space-around","space-evenly"];function d(t,l){return G.reduce((e,a)=>(e[t+u(a)]=l(),e),{})}const O=[...f,"baseline","stretch"],$=t=>O.includes(t),V=d("align",()=>({type:String,default:null,validator:$})),_=[...f,...L],h=t=>_.includes(t),w=d("justify",()=>({type:String,default:null,validator:h})),B=[...f,...L,"stretch"],E=t=>B.includes(t),A=d("alignContent",()=>({type:String,default:null,validator:E})),m={align:Object.keys(V),justify:Object.keys(w),alignContent:Object.keys(A)},I={align:"align",justify:"justify",alignContent:"align-content"};function T(t,l,e){let a=I[t];if(e!=null){if(l){const n=l.replace(t,"");a+=`-${n}`}return a+=`-${e}`,a.toLowerCase()}}const R=S()({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:$},...V,justify:{type:String,default:null,validator:h},...w,alignContent:{type:String,default:null,validator:E},...A,...b()},setup(t,l){let{slots:e}=l;const a=C(()=>{const n=[];let s;for(s in m)m[s].forEach(r=>{const o=t[r],i=T(s,r,o);i&&n.push(i)});return n.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),n});return()=>{var n;return N(t.tag,{class:["v-row",a.value]},(n=e.default)==null?void 0:n.call(e))}}});export{R as V,M as a};
