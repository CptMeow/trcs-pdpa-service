import{V as _}from"./VTextField-04866304.js";import{d as y,k as s,o as n,c as p,m as c,F as g,a as h,b as v,$ as k,q as b}from"./main-51fa4cdd.js";const w=c("h6",{class:"text-base font-weight-bold mb-3"}," Type your 6 digit security code ",-1),B=y({__name:"AppOtpInput",props:{totalInput:{default:6},default:{default:""}},emits:["updateOtp"],setup(i,{emit:d}){const r=i,o=s([]),a=s(null);o.value=r.default.split("");const f={style:"max-width: 54px; text-align: center;"},m=(e,t)=>{if(e.code!=="Tab"&&e.code!=="ArrowRight"&&e.code!=="ArrowLeft"&&e.preventDefault(),e.code==="Backspace"&&(o.value[t-1]="",a.value!==null&&t>1)){const l=a.value.children[t-2].querySelector("input");l&&l.focus()}if(/^([0-9])$/.test(e.key)&&(o.value[t-1]=e.key,a.value!==null&&t!==0&&t<a.value.children.length)){const l=a.value.children[t].querySelector("input");l&&l.focus()}d("updateOtp",o.value.join(""))};return(e,t)=>(n(),p("div",null,[w,c("div",{ref_key:"refOtpComp",ref:a,class:"d-flex align-center gap-4"},[(n(!0),p(g,null,h(r.totalInput,u=>(n(),v(_,k({key:u,"model-value":b(o)[u-1]},f,{maxlength:"1",onKeydown:l=>m(l,u)}),null,16,["model-value","onKeydown"]))),128))],512)]))}});export{B as _};