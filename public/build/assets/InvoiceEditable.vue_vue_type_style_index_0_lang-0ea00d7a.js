import{_ as S}from"./AppDateTimePicker.vue_vue_type_style_index_0_lang-c623f7fa.js";import{a as m,V as $}from"./VRow-4863209c.js";import{V as T}from"./VSelect-51189d3d.js";import{V as U}from"./VTextarea-8e940474.js";import{V}from"./VTextField-04866304.js";import{V as I}from"./VTooltip-869457c6.js";import{d as B,k as C,bp as R,z as k,B as z,r as Y,o as v,c as g,m as t,p as e,w as l,q as i,I as j,R as x,x as d,s as b,C as E,F as N,b as F,V as M,v as A,D as H,a as L,H as O}from"./main-51fa4cdd.js";import{V as P,d as h}from"./VCard-6736eb7f.js";import{u as q}from"./useInvoiceStore-3d8a1dee.js";import{V as f}from"./VDivider-61df3248.js";const W={class:"add-products-header mb-2 d-none d-md-flex ps-5 pe-16"},G=t("h6",{class:"text-sm"}," Item ",-1),J=t("h6",{class:"text-sm"}," Cost ",-1),K=t("h6",{class:"text-sm"}," Hours ",-1),Q=t("h6",{class:"text-sm"}," Price ",-1),X={class:"pa-5 flex-grow-1"},Z={class:"text-body-2 mt-4"},tt=t("p",{class:"mb-1"}," Discount ",-1),et=t("span",null,"0%",-1),st={class:"mx-2"},ot={class:"my-2"},lt=t("span",{class:"d-inline d-md-none"},"Price: ",-1),at={class:"text-body-1"},dt=B({__name:"InvoiceProductEdit",props:{id:null,data:{default:()=>({title:"App Design",cost:24,hours:1,description:"Designed UI kit & app pages."})}},emits:["removeProduct","totalAmount"],setup(w,{emit:s}){const y=w,_=[{title:"App Design",cost:24,hours:1,description:"Designed UI kit & app pages."},{title:"App Customization",cost:26,hours:1,description:"Customization & Bug Fixes."},{title:"ABC Template",cost:28,hours:1,description:"Vuetify admin template."},{title:"App Development",cost:32,hours:1,description:"Native App Development."}],u=C("App Customization"),c=C(structuredClone(R(y.data)));k(u,()=>{const p=_.filter(o=>o.title===u.value);c.value=p[0]});const n=()=>{s("removeProduct",y.id)},a=z(()=>Number(c.value.cost)*Number(c.value.hours));return k(a,()=>{s("totalAmount",a.value)},{immediate:!0}),(p,o)=>{const D=Y("IconBtn");return v(),g(N,null,[t("div",W,[e($,{class:"font-weight-medium"},{default:l(()=>[e(m,{cols:"12",md:"6"},{default:l(()=>[G]),_:1}),e(m,{cols:"12",md:"2"},{default:l(()=>[J]),_:1}),e(m,{cols:"12",md:"2"},{default:l(()=>[K]),_:1}),e(m,{cols:"12",md:"2"},{default:l(()=>[Q]),_:1})]),_:1})]),e(P,{flat:"",border:"",class:"d-flex flex-sm-row flex-column-reverse"},{default:l(()=>[t("div",X,[e($,null,{default:l(()=>[e(m,{cols:"12",md:"6"},{default:l(()=>[e(T,{modelValue:i(u),"onUpdate:modelValue":o[0]||(o[0]=r=>j(u)?u.value=r:null),items:_,density:"compact","item-title":"title","item-value":"title",placeholder:"Select Item",class:"mb-3"},null,8,["modelValue"]),e(U,{modelValue:i(c).description,"onUpdate:modelValue":o[1]||(o[1]=r=>i(c).description=r),rows:"3",placeholder:"Description"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12",md:"2",sm:"4"},{default:l(()=>[e(V,{modelValue:i(c).cost,"onUpdate:modelValue":o[2]||(o[2]=r=>i(c).cost=r),density:"compact",type:"number",placeholder:"Cost"},null,8,["modelValue"]),t("div",Z,[tt,et,t("span",st,[x(" 0% "),e(I,{activator:"parent"},{default:l(()=>[x("Tax 1")]),_:1})]),t("span",null,[x(" 0% "),e(I,{activator:"parent"},{default:l(()=>[x("Tax 2")]),_:1})])])]),_:1}),e(m,{cols:"12",md:"2",sm:"4"},{default:l(()=>[e(V,{modelValue:i(c).hours,"onUpdate:modelValue":o[3]||(o[3]=r=>i(c).hours=r),density:"compact",type:"number",placeholder:"Hours"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12",md:"2",sm:"4"},{default:l(()=>[t("p",ot,[lt,t("span",at,"$"+d(i(a)),1)])]),_:1})]),_:1})]),t("div",{class:b(["d-flex flex-column item-actions pa-1",p.$vuetify.display.smAndUp?"border-s":"border-b"])},[e(D,{size:"30",onClick:n},{default:l(()=>[e(E,{size:20,icon:"bx-x"})]),_:1})],2)]),_:1})],64)}}}),nt={class:"mb-6"},it={class:"d-flex align-center mb-6"},ct={class:"app-title"},mt=t("p",{class:"mb-0"}," Office 149, 450 South Brand Brooklyn ",-1),ut=t("p",{class:"mb-0"}," San Diego County, CA 91905, USA ",-1),rt=t("p",{class:"mb-0"}," +1 (123) 456 7891, +44 (876) 543 2198 ",-1),pt={class:"mb-3"},_t={class:"d-flex align-center font-weight-medium justify-sm-end text-xl mb-3"},ht=t("span",{class:"me-3",style:{width:"6rem"}},"Invoice:",-1),ft={class:"d-flex align-center justify-sm-end mb-3"},vt=t("span",{class:"me-3",style:{width:"6rem"}},"Date Issued:",-1),xt={class:"d-flex align-center justify-sm-end mb-0"},bt=t("span",{class:"me-3",style:{width:"6rem"}},"Due Date:",-1),Vt={class:"mb-4 mb-md-0",style:{width:"15.5rem"}},yt=t("h6",{class:"text-sm font-weight-medium mb-3"}," Invoice To: ",-1),gt={class:"mb-1"},wt={class:"mb-1"},Dt={key:0,class:"mb-1"},Ct={class:"mb-1"},$t={class:"mb-1"},It=t("h6",{class:"text-sm font-weight-medium mb-3"}," Bill To: ",-1),kt={class:"pt-1"},At=t("td",{class:"pe-6"}," Total Due: ",-1),Tt={class:"pt-1"},Ut=t("td",{class:"pe-6"}," Bank Name: ",-1),Bt={class:"pt-1"},Nt=t("td",{class:"pe-6"}," Country: ",-1),Pt={class:"pt-1"},St=t("td",{class:"pe-6"}," IBAN: ",-1),Rt={class:"pt-1"},zt=t("td",{class:"pe-6"}," SWIFT Code: ",-1),Yt={class:"mb-6 mb-sm-0"},jt={class:"d-flex align-center mb-4"},Et=t("h6",{class:"text-sm font-weight-semibold me-2"}," Salesperson: ",-1),Ft={class:"w-100"},Mt=t("td",{class:"pe-16"}," Subtotal: ",-1),Ht=t("h6",{class:"text-sm"}," $1800 ",-1),Lt=[Ht],Ot=t("td",{class:"pe-16"}," Discount: ",-1),qt=t("h6",{class:"text-sm"}," $28 ",-1),Wt=[qt],Gt=t("td",{class:"pe-16"}," Tax: ",-1),Jt=t("h6",{class:"text-sm"}," 21% ",-1),Kt=[Jt],Qt={class:"w-100"},Xt=t("td",null,"Total:",-1),Zt=t("h6",{class:"text-sm"}," $1690 ",-1),te=[Zt],ee=t("p",{class:"font-weight-semibold mb-2"}," Note: ",-1),re=B({__name:"InvoiceEditable",props:{data:null},setup(w){const s=w,y=q(),_=C([]);y.fetchClients().then(n=>{_.value=n.data}).catch(n=>{console.log(n)});const u=()=>{s.data.purchasedProducts.push({title:"App Design",cost:24,hours:1,description:"Designed UI kit & app pages."})},c=n=>{s.data.purchasedProducts.splice(n,1)};return(n,a)=>{const p=S;return v(),F(P,null,{default:l(()=>[e(h,{class:"d-flex flex-wrap justify-space-between gap-y-5 flex-column flex-sm-row pa-sm-10 pb-5"},{default:l(()=>[t("div",nt,[t("div",it,[e(i(M),{nodes:i(A).app.logo,class:"me-2"},null,8,["nodes"]),t("h6",ct,d(i(A).app.title),1)]),mt,ut,rt]),t("div",pt,[t("h6",_t,[ht,t("span",null,[e(V,{modelValue:s.data.invoice.id,"onUpdate:modelValue":a[0]||(a[0]=o=>s.data.invoice.id=o),disabled:"",prefix:"#",density:"compact",style:{width:"9.5rem"}},null,8,["modelValue"])])]),t("p",ft,[vt,e(p,{modelValue:s.data.invoice.issuedDate,"onUpdate:modelValue":a[1]||(a[1]=o=>s.data.invoice.issuedDate=o),density:"compact",placeholder:"YYYY-MM-DD",style:{width:"9.5rem"},config:{position:"auto right"}},null,8,["modelValue"])]),t("p",xt,[bt,t("span",null,[e(p,{modelValue:s.data.invoice.dueDate,"onUpdate:modelValue":a[2]||(a[2]=o=>s.data.invoice.dueDate=o),density:"compact",placeholder:"YYYY-MM-DD",style:{width:"9.5rem"},config:{position:"auto right"}},null,8,["modelValue"])])])])]),_:1}),e(f,{class:"mb-4"}),e(h,{class:"d-flex flex-wrap gap-y-5 justify-space-between flex-column flex-sm-row px-sm-10"},{default:l(()=>[t("div",Vt,[yt,e(T,{modelValue:s.data.invoice.client,"onUpdate:modelValue":a[3]||(a[3]=o=>s.data.invoice.client=o),items:i(_),"item-title":"name","item-value":"name",placeholder:"Select Customer","return-object":"",class:"mb-4",density:"compact"},null,8,["modelValue","items"]),t("p",gt,d(s.data.invoice.client.name),1),t("p",wt,d(s.data.invoice.client.company),1),s.data.invoice.client.address?(v(),g("p",Dt,d(s.data.invoice.client.address)+", "+d(s.data.invoice.client.country),1)):H("",!0),t("p",Ct,d(s.data.invoice.client.contact),1),t("p",$t,d(s.data.invoice.client.companyEmail),1)]),t("div",null,[It,t("table",null,[t("tbody",null,[t("tr",kt,[At,t("td",null,d(s.data.paymentDetails.totalDue),1)]),t("tr",Tt,[Ut,t("td",null,d(s.data.paymentDetails.bankName),1)]),t("tr",Bt,[Nt,t("td",null,d(s.data.paymentDetails.country),1)]),t("tr",Pt,[St,t("td",null,d(s.data.paymentDetails.iban),1)]),t("tr",Rt,[zt,t("td",null,d(s.data.paymentDetails.swiftCode),1)])])])])]),_:1}),e(f),e(h,{class:"add-products-form"},{default:l(()=>[(v(!0),g(N,null,L(s.data.purchasedProducts,(o,D)=>(v(),g("div",{key:o.title,class:"mb-4"},[e(dt,{id:D,data:o,onRemoveProduct:c},null,8,["id","data"])]))),128)),e(O,{size:"small","prepend-icon":"bx-plus",onClick:u},{default:l(()=>[x(" Add Item ")]),_:1})]),_:1}),e(f,{class:"my-2"}),e(h,{class:"d-flex justify-space-between flex-wrap flex-column flex-sm-row"},{default:l(()=>[t("div",Yt,[t("div",jt,[Et,e(V,{modelValue:s.data.salesperson,"onUpdate:modelValue":a[4]||(a[4]=o=>s.data.salesperson=o),density:"compact",style:{width:"8rem"}},null,8,["modelValue"])]),e(V,{modelValue:s.data.thanksNote,"onUpdate:modelValue":a[5]||(a[5]=o=>s.data.thanksNote=o),density:"compact",placeholder:"Thanks for your business"},null,8,["modelValue"])]),t("div",null,[t("table",Ft,[t("tr",null,[Mt,t("td",{class:b(n.$vuetify.locale.isRtl?"text-start":"text-end")},Lt,2)]),t("tr",null,[Ot,t("td",{class:b(n.$vuetify.locale.isRtl?"text-start":"text-end")},Wt,2)]),t("tr",null,[Gt,t("td",{class:b(n.$vuetify.locale.isRtl?"text-start":"text-end")},Kt,2)])]),e(f,{class:"mt-4 mb-3"}),t("table",Qt,[t("tr",null,[Xt,t("td",{class:b(n.$vuetify.locale.isRtl?"text-start":"text-end")},te,2)])])])]),_:1}),e(f,{class:"mt-2"}),e(h,null,{default:l(()=>[ee,e(U,{modelValue:s.data.note,"onUpdate:modelValue":a[6]||(a[6]=o=>s.data.note=o),rows:2},null,8,["modelValue"])]),_:1})]),_:1})}}});export{re as _};
