import{_ as H,a as J}from"./AddEditAddressDialog.vue_vue_type_script_setup_true_lang-a3188373.js";import{_ as Z,a as X}from"./CardAddEditDialog.vue_vue_type_script_setup_true_lang-8d6bb316.js";import{_ as F}from"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-a4bc536e.js";import{d as P,o as C,b as U,w as a,p as e,c as E,F as A,a as j,C as u,m as i,x as w,Z as I,H as d,R as s,ag as ee,ah as ae,ai as te,aj as ie,a2 as le,a0 as se,a1 as oe,ak as ne,al as re,am as de,k as h,q as r,I as V}from"./main-51fa4cdd.js";import{V as b,d as f,a as D,b as y}from"./VCard-6736eb7f.js";import{V as N,a as v}from"./VRow-4863209c.js";import{V as z}from"./VAvatar-57fab9ba.js";import{V as ue}from"./VDivider-61df3248.js";import{V as B}from"./VForm-b98dc196.js";import{V as R}from"./VTextField-04866304.js";import{V as M}from"./VDialog-f442c287.js";import{_ as me}from"./PricingPlanDialog.vue_vue_type_script_setup_true_lang-2c17a4ad.js";import{V as ce}from"./VAutocomplete-33ba2536.js";import{a as S,V as T,b as L,c as pe}from"./VList-f23cbc26.js";import{V as fe}from"./VMenu-c40ddae7.js";import"./VSelect-51189d3d.js";import"./forwardRefs-8f7055de.js";import"./transition-482c18b0.js";import"./VInput-354f6456.js";import"./dialog-transition-a7db0454.js";import"./easing-6b01f2d6.js";import"./VCheckboxBtn-af15d0af.js";import"./VSelectionControl-3a741587.js";import"./VChip-d98b0377.js";import"./VSwitch-036015f0.js";import"./VTextarea-8e940474.js";/* empty css                   */import"./VField-e7393660.js";import"./VImg-7efce583.js";import"./VCounter-d16178d6.js";import"./VOverlay-20793165.js";import"./lazy-e0727b80.js";import"./AppPricing-627706a0.js";import"./filter-00d6d293.js";const _e=i("h5",{class:"text-h5 text-center mb-3"}," Refer & Earn ",-1),ge=i("p",{class:"text-body-2 text-center"}," Invite your friend to sneat, if they sign up, you and your friend will get 30 days free trial ",-1),xe={class:"text-base mt-2 mb-3"},be={class:"text-sm"},ve=i("h6",{class:"text-h6 mb-4"}," Invite your friends ",-1),he=i("p",{class:"text-sm mb-2"}," Enter your friend's email address and invite them to join Sneat 😍 ",-1),Ve=i("h6",{class:"text-h6 mb-4 mt-8"}," Share the referral link ",-1),De=i("p",{class:"text-sm mb-2"}," You can also copy and send it or share it on your social media. 🚀 ",-1),ye={class:"d-flex gap-3 mx-auto"},we=P({__name:"ReferAndEarnDialog",props:{isDialogVisible:{type:Boolean}},emits:["update:isDialogVisible"],setup($,{emit:c}){const _=$,g=m=>{c("update:isDialogVisible",m)},p=[{icon:"bx-message",title:"Send Invitation 👍🏻",subtitle:"Send your referral link to your friend"},{icon:"bx-file",title:"Registration 😎",subtitle:"Let them register to our services"},{icon:"bx-gift",title:"Free Trial  🎉",subtitle:"Your friend will get 30 days free trial"}];return(m,n)=>{const x=F;return C(),U(M,{"model-value":_.isDialogVisible,"max-width":"900","onUpdate:modelValue":g},{default:a(()=>[e(b,{class:"refer-and-earn-dialog"},{default:a(()=>[e(x,{variant:"text",size:"small",onClick:n[0]||(n[0]=o=>c("update:isDialogVisible",!1))}),e(f,{class:"pa-5 pa-sm-13"},{default:a(()=>[_e,ge,e(N,{class:"text-center mt-6"},{default:a(()=>[(C(),E(A,null,j(p,o=>e(v,{key:o.title,cols:"12",sm:"4"},{default:a(()=>[e(z,{variant:"tonal",size:"100",color:"primary"},{default:a(()=>[e(u,{size:"40",icon:o.icon},null,8,["icon"])]),_:2},1024),i("h6",xe,w(o.title),1),i("span",be,w(o.subtitle),1)]),_:2},1024)),64))]),_:1})]),_:1}),e(ue),e(f,{class:"pa-5 pa-sm-13"},{default:a(()=>[ve,he,e(B,{class:"d-flex align-center gap-4",onSubmit:n[1]||(n[1]=I(()=>{},["prevent"]))},{default:a(()=>[e(R,{density:"compact",placeholder:"johnDoe@gmail.com"}),e(d,{type:"submit"},{default:a(()=>[s(" Submit ")]),_:1})]),_:1}),Ve,De,e(B,{class:"d-flex align-center flex-wrap gap-3",onSubmit:n[2]||(n[2]=I(()=>{},["prevent"]))},{default:a(()=>[e(R,{density:"compact",placeholder:"http://referral.link",class:"refer-link-input me-1"},{"append-inner":a(()=>[e(d,{variant:"text"},{default:a(()=>[s(" COPY LINK ")]),_:1})]),_:1}),i("div",ye,[e(d,{icon:"",class:"rounded",color:"#3B5998",size:"40"},{default:a(()=>[e(u,{color:"white",icon:"bxl-facebook-circle"})]),_:1}),e(d,{icon:"",class:"rounded",color:"#55ACEE",size:"40"},{default:a(()=>[e(u,{color:"white",icon:"bxl-twitter"})]),_:1}),e(d,{icon:"",class:"rounded",color:"#007BB6",size:"40"},{default:a(()=>[e(u,{color:"white",icon:"bxl-linkedin-square"})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"])}}});const Ce=i("h5",{class:"text-h5 text-center mb-3"}," Share Project ",-1),ke=i("p",{class:"text-body-2 text-center"}," Share project with a team members ",-1),$e=i("p",{class:"text-xl font-weight-medium mb-2"}," Add Members ",-1),Se=i("h6",{class:"text-h6 mb-4 mt-8"}," 8 Members ",-1),Ee={class:"d-none d-sm-block"},Ae={class:"d-flex align-center justify-space-between flex-wrap gap-3 mt-4"},je={class:"text-sm font-weight-semibold d-flex align-start"},ze=i("span",null,"Public to Sneat - ThemeSelection",-1),Pe=P({__name:"ShareProjectDialog",props:{isDialogVisible:{type:Boolean}},emits:["update:isDialogVisible"],setup($,{emit:c}){const _=$,g=m=>{c("update:isDialogVisible",m)},p=[{avatar:te,name:"Lester Palmer",email:"jerrod98@gmail.com",permission:"Can Edit"},{avatar:ie,name:"Mattie Blair",email:"prudence.boehm@yahoo.com",permission:"Owner"},{avatar:le,name:"Marvin Wheeler",email:"rumet@jujpejah.net",permission:"Can Comment"},{avatar:se,name:"Nannie Ford",email:"negza@nuv.io",permission:"Can View"},{avatar:oe,name:"Julian Murphy",email:"lunebame@umdomgu.net",permission:"Can Edit"},{avatar:ne,name:"Sophie Gilbert",email:"ha@sugit.gov",permission:"Can View"},{avatar:re,name:"Chris Watkins",email:"zokap@mak.org",permission:"Can Comment"},{avatar:de,name:"Adelaide Nichols",email:"ujinomu@jigo.com",permission:"Can Edit"}];return(m,n)=>{const x=F;return C(),U(M,{"model-value":_.isDialogVisible,"max-width":"900","onUpdate:modelValue":g},{default:a(()=>[e(b,{class:"share-project-dialog pa-5 pa-sm-8"},{default:a(()=>[e(x,{variant:"text",size:"small",onClick:n[0]||(n[0]=o=>c("update:isDialogVisible",!1))}),e(f,null,{default:a(()=>[Ce,ke,$e,e(ce,{items:p,"item-title":"name","item-value":"name",placeholder:"Add project members...",density:"compact"},{item:a(({props:o,item:k})=>[e(S,ee(ae(o)),{prepend:a(()=>[e(z,{image:k.raw.avatar,size:"30"},null,8,["image"])]),_:2},1040)]),_:1}),Se,e(T,{class:"card-list"},{default:a(()=>[(C(),E(A,null,j(p,o=>e(S,{key:o.name},{prepend:a(()=>[e(z,{image:o.avatar},null,8,["image"])]),append:a(()=>[e(d,{variant:"plain",color:"default",icon:m.$vuetify.display.xs},{default:a(()=>[i("span",Ee,w(o.permission),1),e(u,{icon:"bx-chevron-down"}),e(fe,{activator:"parent"},{default:a(()=>[e(T,{selected:[o.permission]},{default:a(()=>[(C(),E(A,null,j(["Owner","Can Edit","Can Comment","Can View"],(k,t)=>e(S,{key:t,value:k},{default:a(()=>[e(L,null,{default:a(()=>[s(w(k),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:2},1032,["selected"])]),_:2},1024)]),_:2},1032,["icon"])]),default:a(()=>[e(L,{class:"text-sm"},{default:a(()=>[s(w(o.name),1)]),_:2},1024),e(pe,null,{default:a(()=>[s(w(o.email),1)]),_:2},1024)]),_:2},1024)),64))]),_:1}),i("div",Ae,[i("h6",je,[e(u,{icon:"bx-group",class:"me-2",size:"22"}),ze]),e(d,{variant:"text","prepend-icon":"bx-link"},{default:a(()=>[s(" Copy Project Link ")]),_:1})])]),_:1})]),_:1})]),_:1},8,["model-value"])}}});const Ue=i("p",{class:"text-base"}," Quickly collect the credit card details, built in input mask and form validation support. ",-1),Ie=i("p",{class:"text-base"}," Quickly collect the credit card details, built in input mask and form validation support. ",-1),Be=i("p",{class:"text-base"}," Elegant pricing options dialog popup example, easy to use in any page. ",-1),Re=i("p",{class:"text-base"}," Use Refer & Earn modal to encourage your exiting customers refer their friends & colleague. ",-1),Te=i("p",{class:"text-base"}," Ready to use form to collect user address data with validation and custom input support. ",-1),Le=i("p",{class:"text-base"}," Enhance your application security by enabling two factor authentication. ",-1),Fe=i("p",{class:"text-base"}," Enhance your application security by enabling two factor authentication. ",-1),Va=P({__name:"index",setup($){const c=h(!1),_=h(!1),g=h(!1),p=h(!1),m=h(!1),n=h(!1),x=h(!1),o={id:110,fullName:"Selena Kyle",company:"pixinvent",role:"Web developer",username:"charwomen1940",country:"USA",contact:"(829) 537-0057",email:"irena.dubrovna@wayne.com",currentPlan:"",status:"active",avatar:"",taskDone:null,projectDone:null,taxId:"Tax-8894",language:"English"};return(k,t)=>{const O=Pe,W=Z,Y=me,q=we,K=H,Q=X,G=J;return C(),U(N,{class:"match-height"},{default:a(()=>[e(v,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(b,{class:"text-high-emphasis text-center"},{default:a(()=>[e(D,{class:"d-flex flex-column gap-2"},{prepend:a(()=>[e(u,{size:"34",icon:"bx-file"})]),default:a(()=>[e(y,null,{default:a(()=>[s("Share Project")]),_:1})]),_:1}),e(f,null,{default:a(()=>[Ue,e(d,{onClick:t[0]||(t[0]=l=>n.value=!r(n))},{default:a(()=>[s(" Show ")]),_:1})]),_:1}),e(O,{isDialogVisible:r(n),"onUpdate:isDialogVisible":t[1]||(t[1]=l=>V(n)?n.value=l:null)},null,8,["isDialogVisible"])]),_:1})]),_:1}),e(v,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(b,{class:"text-high-emphasis text-center"},{default:a(()=>[e(D,{class:"d-flex flex-column gap-2"},{prepend:a(()=>[e(u,{size:"34",icon:"bx-credit-card"})]),default:a(()=>[e(y,null,{default:a(()=>[s("Add New Card")]),_:1})]),_:1}),e(f,null,{default:a(()=>[Ie,e(d,{onClick:t[2]||(t[2]=l=>c.value=!r(c))},{default:a(()=>[s(" Show ")]),_:1})]),_:1}),e(W,{isDialogVisible:r(c),"onUpdate:isDialogVisible":t[3]||(t[3]=l=>V(c)?c.value=l:null)},null,8,["isDialogVisible"])]),_:1})]),_:1}),e(v,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(b,{class:"text-high-emphasis text-center"},{default:a(()=>[e(D,{class:"d-flex flex-column gap-2"},{prepend:a(()=>[e(u,{size:"34",icon:"bx-dollar"})]),default:a(()=>[e(y,null,{default:a(()=>[s("Pricing")]),_:1})]),_:1}),e(f,null,{default:a(()=>[Be,e(d,{onClick:t[4]||(t[4]=l=>_.value=!r(_))},{default:a(()=>[s(" Show ")]),_:1})]),_:1}),e(Y,{"is-dialog-visible":r(_),"onUpdate:isDialogVisible":t[5]||(t[5]=l=>V(_)?_.value=l:null)},null,8,["is-dialog-visible"])]),_:1})]),_:1}),e(v,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(b,{class:"text-high-emphasis text-center"},{default:a(()=>[e(D,{class:"d-flex flex-column gap-2"},{prepend:a(()=>[e(u,{size:"34",icon:"bx-gift"})]),default:a(()=>[e(y,null,{default:a(()=>[s("Refer & Earn")]),_:1})]),_:1}),e(f,null,{default:a(()=>[Re,e(d,{onClick:t[6]||(t[6]=l=>x.value=!r(x))},{default:a(()=>[s(" Show ")]),_:1})]),_:1}),e(q,{"is-dialog-visible":r(x),"onUpdate:isDialogVisible":t[7]||(t[7]=l=>V(x)?x.value=l:null)},null,8,["is-dialog-visible"])]),_:1})]),_:1}),e(v,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(b,{class:"text-high-emphasis text-center"},{default:a(()=>[e(D,{class:"d-flex flex-column gap-2"},{prepend:a(()=>[e(u,{size:"34",icon:"bx-home"})]),default:a(()=>[e(y,null,{default:a(()=>[s("Add New Address")]),_:1})]),_:1}),e(f,null,{default:a(()=>[Te,e(d,{onClick:t[8]||(t[8]=l=>g.value=!r(g))},{default:a(()=>[s(" Show ")]),_:1})]),_:1}),e(K,{isDialogVisible:r(g),"onUpdate:isDialogVisible":t[9]||(t[9]=l=>V(g)?g.value=l:null)},null,8,["isDialogVisible"])]),_:1})]),_:1}),e(v,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(b,{class:"text-high-emphasis text-center"},{default:a(()=>[e(D,{class:"d-flex flex-column gap-2"},{prepend:a(()=>[e(u,{size:"34",icon:"bx-lock-alt"})]),default:a(()=>[e(y,null,{default:a(()=>[s("Two Factor Auth")]),_:1})]),_:1}),e(f,null,{default:a(()=>[Le,e(d,{onClick:t[10]||(t[10]=l=>p.value=!r(p))},{default:a(()=>[s(" Show ")]),_:1})]),_:1}),e(Q,{isDialogVisible:r(p),"onUpdate:isDialogVisible":t[11]||(t[11]=l=>V(p)?p.value=l:null)},null,8,["isDialogVisible"])]),_:1})]),_:1}),e(v,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(b,{class:"text-high-emphasis text-center"},{default:a(()=>[e(D,{class:"d-flex flex-column gap-2"},{prepend:a(()=>[e(u,{size:"34",icon:"bx-lock-alt"})]),default:a(()=>[e(y,null,{default:a(()=>[s("Edit User Info")]),_:1})]),_:1}),e(f,null,{default:a(()=>[Fe,e(d,{onClick:t[12]||(t[12]=l=>m.value=!r(m))},{default:a(()=>[s(" Show ")]),_:1})]),_:1}),e(G,{isDialogVisible:r(m),"onUpdate:isDialogVisible":t[13]||(t[13]=l=>V(m)?m.value=l:null),"user-data":o},null,8,["isDialogVisible"])]),_:1})]),_:1})]),_:1})}}});export{Va as default};
