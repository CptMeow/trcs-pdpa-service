import{d as _,k as h,r as V,o as v,c as y,m as a,p as e,q as t,h as i,V as l,w as o,v as d,R as p,x as b,Z as g,H as x,C as k}from"./main-51fa4cdd.js";import{a as w,b as C}from"./top-illustration-4431e55c.js";import{a as T,b as B,d as m,V as R}from"./VCard-6736eb7f.js";import{V as L}from"./VForm-b98dc196.js";import{V as S,a as N}from"./VRow-4863209c.js";import{V as j}from"./VTextField-04866304.js";import{b as u}from"./route-block-83d24a4e.js";import"./VAvatar-57fab9ba.js";import"./VImg-7efce583.js";import"./transition-482c18b0.js";import"./VInput-354f6456.js";import"./forwardRefs-8f7055de.js";/* empty css                   */import"./VField-e7393660.js";import"./easing-6b01f2d6.js";import"./VCounter-d16178d6.js";const E={class:"auth-wrapper d-flex align-center justify-center pa-4"},F={class:"position-relative"},H={class:"d-flex"},M=a("h6",{class:"text-h6 mb-1"}," Forgot Password? 🔒 ",-1),I=a("p",{class:"mb-0"}," Enter your email and we'll send you instructions to reset your password ",-1),P=a("span",null,"Back to login",-1),q=_({__name:"forgot-password-v1",setup(D){const r=h({email:""});return(s,n)=>{const c=V("RouterLink");return v(),y("div",E,[a("div",F,[e(t(l),{nodes:("h"in s?s.h:t(i))("div",{innerHTML:t(w)}),class:"text-primary auth-v1-top-shape d-none d-sm-block"},null,8,["nodes"]),e(t(l),{nodes:("h"in s?s.h:t(i))("div",{innerHTML:t(C)}),class:"auth-v1-bottom-shape d-none d-sm-block text-primary"},null,8,["nodes"]),e(R,{class:"auth-card pa-2","max-width":"448"},{default:o(()=>[e(T,{class:"justify-center"},{prepend:o(()=>[a("div",H,[e(t(l),{nodes:t(d).app.logo},null,8,["nodes"])])]),default:o(()=>[e(B,{class:"auth-title"},{default:o(()=>[p(b(t(d).app.title),1)]),_:1})]),_:1}),e(m,null,{default:o(()=>[M,I]),_:1}),e(m,null,{default:o(()=>[e(L,{onSubmit:n[1]||(n[1]=g(()=>{},["prevent"]))},{default:o(()=>[e(S,null,{default:o(()=>[e(N,{cols:"12"},{default:o(()=>[e(j,{modelValue:t(r).email,"onUpdate:modelValue":n[0]||(n[0]=f=>t(r).email=f),label:"Email",type:"email"},null,8,["modelValue"]),e(x,{block:"",type:"submit",class:"my-4"},{default:o(()=>[p(" Send Reset Link ")]),_:1}),e(c,{class:"d-flex align-center justify-center",to:{name:"pages-authentication-login-v1"}},{default:o(()=>[e(k,{icon:"bx-chevron-left",class:"flip-in-rtl"}),P]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])])}}});typeof u=="function"&&u(q);export{q as default};