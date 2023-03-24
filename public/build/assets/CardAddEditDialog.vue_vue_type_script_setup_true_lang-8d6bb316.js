import{_ as A}from"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-a4bc536e.js";import{d as w,k as D,bp as y,o as h,b as U,w as l,p as e,Z as B,q as u,I as _,m as f,H as V,R as m,C,c as T,s as P,F as z,a as G,x,z as j}from"./main-51fa4cdd.js";import{V as k,d as S,a as N,b as M,e as I}from"./VCard-6736eb7f.js";import{V as E}from"./VForm-b98dc196.js";import{V as v}from"./VTextField-04866304.js";import{V as $}from"./VDialog-f442c287.js";import{V as q}from"./VImg-7efce583.js";import{V as O,a as Q,b as Y}from"./VList-f23cbc26.js";import{V as H,a as g}from"./VRow-4863209c.js";import{V as W}from"./VSwitch-036015f0.js";const Z={class:"d-flex flex-wrap justify-end gap-3"},J=w({__name:"EnableOneTimePasswordDialog",props:{mobileNumber:null,isDialogVisible:{type:Boolean}},emits:["update:isDialogVisible","submit"],setup(b,{emit:p}){const s=b,t=D(structuredClone(y(s.mobileNumber))),c=()=>{t.value&&(p("submit",t.value),p("update:isDialogVisible",!1))},d=()=>{t.value=structuredClone(y(s.mobileNumber)),p("update:isDialogVisible",!1)};return(a,n)=>{const o=A;return h(),U($,{"max-width":"600","model-value":s.isDialogVisible,"onUpdate:modelValue":n[2]||(n[2]=i=>a.$emit("update:isDialogVisible",i))},{default:l(()=>[e(k,{title:"Verify Your Mobile Number for SMS",subtitle:"Enter your mobile phone number with country code and  we will send you a verification code.",class:"pa-5 pa-sm-8"},{default:l(()=>[e(o,{variant:"text",size:"small",onClick:d}),e(S,null,{default:l(()=>[e(E,{onSubmit:n[1]||(n[1]=B(()=>{},["prevent"]))},{default:l(()=>[e(v,{modelValue:u(t),"onUpdate:modelValue":n[0]||(n[0]=i=>_(t)?t.value=i:null),name:"mobile",label:"Phone Number",type:"number",class:"mb-4"},null,8,["modelValue"]),f("div",Z,[e(V,{color:"secondary",variant:"tonal",onClick:d},{default:l(()=>[m(" Cancel ")]),_:1}),e(V,{type:"submit",onClick:c},{default:l(()=>[m(" continue "),e(C,{end:"",icon:"bx-chevron-right",class:"flip-in-rtl"})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"])}}}),K="/build/assets/themeselection-qr-05c27a74.png",X=f("h6",{class:"text-h6 font-weight-medium mb-3"}," Authenticator Apps ",-1),ee=f("p",{class:"mb-6"}," Using an authenticator app like Google Authenticator, Microsoft Authenticator, Authy, or 1Password, scan the QR code. It will generate a 6 digit code for you to enter below. ",-1),le={class:"my-6"},te={class:"d-flex justify-end flex-wrap gap-3"},ae=w({__name:"AddAuthenticatorAppDialog",props:{authCode:null,isDialogVisible:{type:Boolean}},emits:["update:isDialogVisible","submit"],setup(b,{emit:p}){const s=b,t=D(structuredClone(y(s.authCode))),c=()=>{t.value&&(p("submit",t.value),p("update:isDialogVisible",!1))},d=()=>{t.value=structuredClone(y(s.authCode)),p("update:isDialogVisible",!1)};return(a,n)=>{const o=A;return h(),U($,{"max-width":"600","model-value":s.isDialogVisible,"onUpdate:modelValue":n[2]||(n[2]=i=>a.$emit("update:isDialogVisible",i))},{default:l(()=>[e(k,{class:"pa-5 pa-sm-8"},{default:l(()=>[e(o,{variant:"text",size:"small",onClick:d}),e(N,null,{default:l(()=>[e(M,{class:"text-h5 font-weight-medium text-center"},{default:l(()=>[m(" Add Authenticator App ")]),_:1})]),_:1}),e(S,{class:"pt-6"},{default:l(()=>[X,ee,f("div",le,[e(q,{width:"122",src:u(K),class:"mx-auto"},null,8,["src"])]),e(E,{onSubmit:n[1]||(n[1]=B(()=>{},["prevent"]))},{default:l(()=>[e(v,{modelValue:u(t),"onUpdate:modelValue":n[0]||(n[0]=i=>_(t)?t.value=i:null),name:"auth-code",label:"Enter Authentication Code",class:"mb-4"},null,8,["modelValue"]),f("div",te,[e(V,{color:"secondary",variant:"tonal",onClick:d},{default:l(()=>[m(" Cancel ")]),_:1}),e(V,{type:"submit",onClick:c},{default:l(()=>[m(" Continue "),e(C,{end:"",icon:"bx-chevron-right",class:"flip-in-rtl"})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"])}}}),oe={class:"text-base mb-0"},se={class:"text-end"},Ve=w({__name:"TwoFactorAuthDialog",props:{isDialogVisible:{type:Boolean,default:!1},smsCode:{default:""},authAppCode:{default:""}},emits:["update:isDialogVisible"],setup(b,{emit:p}){const s=b,t=[{icon:"bx-cog",title:"Authenticator Apps",subtitle:"Get code from an app like Google Authenticator or Microsoft Authenticator.",method:"authApp"},{icon:"bx-message",title:"SMS",subtitle:"We will send a code via SMS if you need to use your backup login method.",method:"sms"}],c=D(["authApp"]),d=D(!1),a=D(!1),n=()=>{c.value[0]==="authApp"&&(d.value=!0,a.value=!1,p("update:isDialogVisible",!1)),c.value[0]==="sms"&&(d.value=!1,a.value=!0,p("update:isDialogVisible",!1))};return(o,i)=>{const F=A,R=ae,L=J;return h(),T(z,null,[e($,{"max-width":"900","model-value":s.isDialogVisible,"onUpdate:modelValue":i[2]||(i[2]=r=>o.$emit("update:isDialogVisible",r))},{default:l(()=>[e(k,{class:"pa-5 pa-sm-8"},{default:l(()=>[e(F,{variant:"text",size:"small",onClick:i[0]||(i[0]=r=>o.$emit("update:isDialogVisible",!1))}),e(N,{class:"text-center"},{default:l(()=>[e(M,{class:"text-h5 mb-2"},{default:l(()=>[m(" Select Authentication Method ")]),_:1}),e(I,null,{default:l(()=>[m(" You also need to select a method by which the proxy authenticates to the directory serve. ")]),_:1})]),_:1}),e(S,null,{default:l(()=>[e(O,{selected:u(c),"onUpdate:selected":i[1]||(i[1]=r=>_(c)?c.value=r:null),mandatory:"",class:P(["card-list auth-method-card",o.$vuetify.display.xs?"responsive-card":""])},{default:l(()=>[(h(),T(z,null,G(t,r=>e(Q,{key:r.title,rounded:"",border:"",value:r.method,class:P(["py-5 px-6 my-6",u(c)[0]===r.method?"bg-light-primary border-primary border-opacity-100":"bg-var-theme-background"])},{prepend:l(()=>[e(C,{icon:r.icon,size:"38",class:"me-4"},null,8,["icon"])]),default:l(()=>[e(Y,{class:"text-xl font-weight-medium mb-1"},{default:l(()=>[m(x(r.title),1)]),_:2},1024),f("p",oe,x(r.subtitle),1)]),_:2},1032,["value","class"])),64))]),_:1},8,["selected","class"]),f("div",se,[e(V,{onClick:n},{default:l(()=>[m(" continue "),e(C,{end:"",icon:"bx-chevron-right",class:"flip-in-rtl"})]),_:1})])]),_:1})]),_:1})]),_:1},8,["model-value"]),e(R,{isDialogVisible:u(d),"onUpdate:isDialogVisible":i[3]||(i[3]=r=>_(d)?d.value=r:null),"auth-code":s.authAppCode},null,8,["isDialogVisible","auth-code"]),e(L,{isDialogVisible:u(a),"onUpdate:isDialogVisible":i[4]||(i[4]=r=>_(a)?a.value=r:null),"mobile-number":s.smsCode},null,8,["isDialogVisible","mobile-number"])],64)}}});const ge=w({__name:"CardAddEditDialog",props:{cardDetails:{default:()=>({number:"",name:"",expiry:"",cvv:"",isPrimary:!1,type:""})},isDialogVisible:{type:Boolean}},emits:["submit","update:isDialogVisible"],setup(b,{emit:p}){const s=b,t=D(structuredClone(y(s.cardDetails)));j(s,()=>{t.value=structuredClone(y(s.cardDetails))});const c=()=>{p("submit",t.value)};return(d,a)=>{const n=A;return h(),U($,{width:d.$vuetify.display.smAndDown?"auto":650,"model-value":s.isDialogVisible,"onUpdate:modelValue":a[8]||(a[8]=o=>d.$emit("update:isDialogVisible",o))},{default:l(()=>[e(k,{class:"pa-5 pa-sm-8"},{default:l(()=>[e(n,{variant:"text",size:"small",onClick:a[0]||(a[0]=o=>d.$emit("update:isDialogVisible",!1))}),e(N,{class:"text-center"},{default:l(()=>[e(M,{class:"text-2xl mb-3"},{default:l(()=>[m(x(s.cardDetails.name?"Edit Card":"Add New Card"),1)]),_:1}),e(I,null,{default:l(()=>[m(x(s.cardDetails.name?"Edit your saved card details":"Add your saved card details"),1)]),_:1})]),_:1}),e(S,{class:"mt-6"},{default:l(()=>[e(E,{onSubmit:a[7]||(a[7]=B(()=>{},["prevent"]))},{default:l(()=>[e(H,null,{default:l(()=>[e(g,{cols:"12"},{default:l(()=>[e(v,{modelValue:u(t).number,"onUpdate:modelValue":a[1]||(a[1]=o=>u(t).number=o),label:"Card Number",type:"number"},null,8,["modelValue"])]),_:1}),e(g,{cols:"12",md:"6"},{default:l(()=>[e(v,{modelValue:u(t).name,"onUpdate:modelValue":a[2]||(a[2]=o=>u(t).name=o),label:"Name"},null,8,["modelValue"])]),_:1}),e(g,{cols:"6",md:"3"},{default:l(()=>[e(v,{modelValue:u(t).expiry,"onUpdate:modelValue":a[3]||(a[3]=o=>u(t).expiry=o),label:"Expiry Date"},null,8,["modelValue"])]),_:1}),e(g,{cols:"6",md:"3"},{default:l(()=>[e(v,{modelValue:u(t).cvv,"onUpdate:modelValue":a[4]||(a[4]=o=>u(t).cvv=o),type:"number",label:"CVV Code"},null,8,["modelValue"])]),_:1}),e(g,{cols:"12"},{default:l(()=>[e(W,{modelValue:u(t).isPrimary,"onUpdate:modelValue":a[5]||(a[5]=o=>u(t).isPrimary=o),label:"Set as primary card"},null,8,["modelValue"])]),_:1}),e(g,{cols:"12",class:"text-center"},{default:l(()=>[e(V,{class:"me-3",type:"submit",onClick:c},{default:l(()=>[m(" Submit ")]),_:1}),e(V,{color:"secondary",variant:"tonal",onClick:a[6]||(a[6]=o=>d.$emit("update:isDialogVisible",!1))},{default:l(()=>[m(" Cancel ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["width","model-value"])}}});export{ge as _,Ve as a};
