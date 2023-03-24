import{_ as ee}from"./CardStatisticsVertical.vue_vue_type_script_setup_true_lang-b8766242.js";import{_ as $}from"./MoreBtn.vue_vue_type_script_setup_true_lang-7e6c527b.js";import{V as T}from"./vue3-apexcharts.common-150539d6.js";import{d as v,A,B as k,an as r,o as _,b as y,w as t,m as a,p as e,R as m,q as b,c as M,F as P,a as V,C,x as d,ai as U,am as Y,X as H,ao as G,ap as R,ar as te,a1 as ae,aj as se,a2 as oe,a7 as K,a8 as X,s as re}from"./main-51fa4cdd.js";import{d as w,V as S,a as B,b as O,e as le}from"./VCard-6736eb7f.js";import{V as ne}from"./VRating-64827022.js";import{V as I}from"./VChip-d98b0377.js";import{u as L}from"./useGenerateImageVariant-2066d24a.js";import{V as q}from"./VTable-99a3e630.js";import{V as J}from"./VAvatar-57fab9ba.js";import{V as D}from"./VImg-7efce583.js";import{V as N,a as W,b as F,c as z}from"./VList-f23cbc26.js";import{a as ie}from"./arrow-star-44a1533c.js";import{o as ce,x as ue,m as de,a as pe,b as me,h as fe,f as _e,c as he,g as ge,C as be}from"./xiaomi-band-ef58384d.js";import{d as Z}from"./desktop-warning-ed588720.js";import{V as j,a as g}from"./VRow-4863209c.js";import{V as E}from"./VListItemAction-3a27ad5c.js";import{c as ye}from"./cube-secondary-7b8ce392.js";import"./VSpacer-cb64da4c.js";import"./VMenu-c40ddae7.js";import"./forwardRefs-8f7055de.js";import"./VOverlay-20793165.js";import"./lazy-e0727b80.js";import"./easing-6b01f2d6.js";import"./transition-482c18b0.js";import"./dialog-transition-a7db0454.js";import"./vue.runtime.esm-bundler-23bef556.js";import"./VDivider-61df3248.js";import"./usa-8b8895de.js";const xe={class:"me-n3 mt-n1"},ve={class:"d-flex align-center gap-3 mb-3"},Se=a("h3",{class:"text-h3"}," 4.0 ",-1),$e={class:"d-flex align-center gap-3"},ke=a("span",null,"Points from last month",-1),Ce=v({__name:"CrmCustomerRatings",setup(f){const i=A(),n=[{name:"Last Month",data:[20,54,22,40,20,25,16,22]},{name:"This Month",data:[20,38,27,65,43,48,32,70]}],u=k(()=>{const l=i.current.value.colors,o=i.current.value.variables,s=`rgba(${r(String(l["on-surface"]))},${o["disabled-opacity"]})`,p=`rgba(${r(String(o["border-color"]))},${o["border-opacity"]})`;return{chart:{parentHeightOffset:0,toolbar:{show:!1},dropShadow:{top:14,blur:4,left:0,enabled:!0,opacity:.04,enabledOnSeries:[1],color:"#000"}},grid:{show:!1,padding:{left:-7,top:-37,right:34,bottom:10}},legend:{show:!1},colors:[p,`rgba(${r(String(l.primary))}, 1)`],markers:{size:6,strokeWidth:5,strokeOpacity:1,hover:{size:6},colors:["transparent"],strokeColors:"transparent",discrete:[{size:6,seriesIndex:1,fillColor:"#fff",strokeColor:l.primary,dataPointIndex:n[0].data.length-1},{size:6,seriesIndex:1,dataPointIndex:3,fillColor:"#fff",strokeColor:"#000"}]},stroke:{width:[3,5],curve:"smooth",lineCap:"round",dashArray:[8,0]},xaxis:{axisTicks:{show:!1},axisBorder:{show:!1},categories:["","Jan","Feb","Mar","Apr","May","Jun","Jul"],labels:{style:{fontSize:"1rem",colors:s,fontFamily:"Public Sans"}}},yaxis:{labels:{show:!1}}}}),c=[{title:"Share",value:"share"},{title:"Refresh",value:"refresh"},{title:"Delete",value:"delete"}];return(l,o)=>{const s=$;return _(),y(S,{title:"Customer Ratings"},{append:t(()=>[a("div",xe,[e(s,{"menu-list":c})])]),default:t(()=>[e(w,null,{default:t(()=>[a("div",ve,[Se,e(ne,{"model-value":4,readonly:"",density:"compact"})]),a("div",$e,[e(I,{label:"",density:"compact",color:"primary"},{default:t(()=>[m(" +5.0 ")]),_:1}),ke])]),_:1}),e(b(T),{type:"line",height:217,options:b(u),series:n},null,8,["options"])]),_:1})}}}),we="/build/assets/avatar-14-42fb1e47.png",Te="/build/assets/avatar-15-f680b283.png",Ae="/build/assets/avatar-9-c7fd5517.png",Me="/build/assets/mastercard-dark-c8d76bbf.png",Pe="/build/assets/mastercard-light-a13fcd15.png",Ve="/build/assets/paypal-dark-e81fa01a.png",Be="/build/assets/paypal-light-5158fd44.png",Oe="/build/assets/visa-dark-262b88ab.png",Je="/build/assets/visa-light-28260aa4.png",Ie=a("thead",null,[a("tr",{class:"text-uppercase"},[a("th",null," Customer "),a("th",null," Amount "),a("th",null," Status "),a("th",null," Paid By "),a("th",{class:"text-center"}," Actions ")])],-1),Re={class:"d-flex align-center gap-3 py-2",style:{"min-height":"60px"}},Le={class:"text-base font-weight-medium"},Ne={class:"text-base"},We={class:"text-center"},Fe=v({__name:"CrmCustomerTable",setup(f){const i=L(Pe,Me),n=L(Je,Oe),u=L(Be,Ve),c=[{amount:459.65,status:"paid",paidBy:"mastercard",email:"jok@puc.co.uk",customerName:"Henry Barnes",avatarSrc:U},{amount:93.81,paidBy:"visa",status:"pending",email:"sami@lelo.com",customerName:"Herman Holland",avatarSrc:Te},{paidBy:"visa",amount:934.34,status:"pending",email:"initus@odemi.com",customerName:"Hallie Warner",avatarSrc:Ae},{status:"paid",amount:794.97,paidBy:"paypal",email:"tum@upkesja.gov",customerName:"John Davidson",avatarSrc:we},{amount:19.49,status:"paid",paidBy:"mastercard",email:"wipare@tin.com",customerName:"Cora Schmidt"},{amount:636.27,paidBy:"paypal",status:"failed",email:"nur@kaomor.edu",customerName:"Betty Ross",avatarSrc:Y}],l=s=>s==="paid"?"success":s==="pending"?"warning":s==="failed"?"error":"secondary",o=s=>s==="mastercard"?i.value:s==="visa"?n.value:s==="paypal"?u.value:"";return(s,p)=>{const h=$;return _(),y(S,null,{default:t(()=>[e(q,{class:"text-no-wrap"},{default:t(()=>[Ie,a("tbody",null,[(_(),M(P,null,V(c,x=>a("tr",{key:x.customerName},[a("td",Re,[e(J,{color:"secondary",variant:"tonal"},{default:t(()=>[x.avatarSrc?(_(),y(D,{key:0,src:x.avatarSrc},null,8,["src"])):(_(),y(C,{key:1,icon:"bxs-user"}))]),_:2},1024),a("div",null,[a("h6",Le,d(x.customerName),1),a("span",null,d(x.email),1)])]),a("td",null,[a("span",Ne,"$"+d(x.amount),1)]),a("td",null,[e(I,{label:"",density:"compact",color:l(x.status)},{default:t(()=>[m(d(x.status),1)]),_:2},1032,["color"])]),a("td",null,[e(D,{height:"30",src:o(x.paidBy)},null,8,["src"])]),a("td",We,[e(h)])])),64))])]),_:1})]),_:1})}}}),ze={class:"me-n3 mt-n8"},je={class:"text-sm text-medium-emphasis"},He=v({__name:"CrmEarningReport",setup(f){const i=A(),n=[{data:[32,98,61,41,88,47,71]}],u=k(()=>{const o=i.current.value.colors,s=i.current.value.variables,p=`rgba(${r(String(o["on-surface"]))},${s["disabled-opacity"]})`;return{chart:{parentHeightOffset:0,toolbar:{show:!1}},plotOptions:{bar:{borderRadius:4,distributed:!0,columnWidth:"52%",endingShape:"rounded",startingShape:"rounded"}},legend:{show:!1},tooltip:{enabled:!1},dataLabels:{enabled:!1},colors:[`rgba(${r(String(o.primary))}, 0.1)`,`rgba(${r(String(o.primary))}, 0.1)`,`rgba(${r(String(o.primary))}, 0.1)`,`rgba(${r(String(o.primary))}, 0.1)`,`rgba(${r(String(o.primary))}, 1)`,`rgba(${r(String(o.primary))}, 0.1)`,`rgba(${r(String(o.primary))}, 0.1)`],states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},xaxis:{categories:["Mo","Tu","We","Th","Fr","Sa","Su"],axisTicks:{show:!1},axisBorder:{show:!1},tickPlacement:"on",labels:{style:{fontSize:"15px",colors:p,fontFamily:"Public Sans"}}},yaxis:{show:!1},grid:{show:!1,padding:{top:-5,left:-14,right:-16,bottom:-12}}}}),c=[{amount:"$1,619",percentage:18.6,title:"Net Profit",avatarColor:"primary",subtitle:"12.4k Sales",avatarIcon:"bx-trending-up"},{amount:"$3,571",percentage:39.6,title:"Total Income",avatarColor:"success",subtitle:"Sales, Affiliation",avatarIcon:"bx-dollar"},{amount:"$430",percentage:52.8,title:"Total Expenses",avatarColor:"secondary",subtitle:"ADVT, Marketing",avatarIcon:"bx-credit-card"}],l=[{title:"Share",value:"Share"},{title:"Refresh",value:"Refresh"},{title:"Update",value:"Update"}];return(o,s)=>{const p=$;return _(),y(S,null,{default:t(()=>[e(B,null,{append:t(()=>[a("div",ze,[e(p,{"menu-list":l})])]),default:t(()=>[e(O,{class:"mb-1"},{default:t(()=>[m(" Earning Report ")]),_:1}),e(le,null,{default:t(()=>[m("Weekly Earnings Overview")]),_:1})]),_:1}),e(w,{class:"pb-4"},{default:t(()=>[e(N,{class:"card-list mb-3"},{default:t(()=>[(_(),M(P,null,V(c,h=>e(W,{key:h.title},{prepend:t(()=>[e(J,{rounded:"",variant:"tonal",color:h.avatarColor},{default:t(()=>[e(C,{size:"24",icon:h.avatarIcon},null,8,["icon"])]),_:2},1032,["color"])]),append:t(()=>[a("div",je,[a("span",null,d(h.amount),1),e(C,{color:"success",icon:"bx-chevron-up"}),a("span",null,d(h.percentage)+"%",1)])]),default:t(()=>[e(F,null,{default:t(()=>[m(d(h.title),1)]),_:2},1024),e(z,{class:"text-disabled"},{default:t(()=>[m(d(h.subtitle),1)]),_:2},1024)]),_:2},1024)),64))]),_:1}),e(b(T),{type:"bar",height:175,options:b(u),series:n},null,8,["options"])]),_:1})]),_:1})}}});const De=H(He,[["__scopeId","data-v-977cd3c8"]]),Ee={class:"d-flex flex-column justify-space-between"},Ue=a("div",null,[a("h6",{class:"text-h6"}," Generated Leads "),a("span",{class:"text-sm"},"Monthly Report")],-1),Ye=a("h5",{class:"text-h5"}," 4,234 ",-1),Ge={class:"text-success text-sm"},Ke=a("span",null,"22.3%",-1),Xe=v({__name:"CrmGeneratedLeads",setup(f){const i=A(),n=[23,27,22,28],u=k(()=>{const c=i.current.value.colors,l=i.current.value.variables,o=`rgba(${r(String(c["on-surface"]))},${l["medium-emphasis-opacity"]})`,s=`rgba(${r(String(c["on-surface"]))},${l["high-emphasis-opacity"]})`;return{stroke:{width:0},colors:[`rgba(${r(String(c.success))}, 0.75)`,`rgba(${r(String(c.success))}, 0.5)`,`rgba(${r(String(c.success))}, 0.25)`,`rgba(${r(String(c.success))}, 1)`],legend:{show:!1},tooltip:{enabled:!1},dataLabels:{enabled:!1},labels:["1st Week","2nd Week","3rd Week","4th Week"],states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},grid:{padding:{top:-10,bottom:-10}},plotOptions:{pie:{customScale:.8,expandOnClick:!1,donut:{size:"73%",labels:{show:!0,name:{offsetY:22,color:o,fontFamily:"Public Sans"},value:{offsetY:-17,fontWeight:500,fontSize:"26px",formatter:p=>`${p}%`,color:s,fontFamily:"Public Sans"},total:{show:!0,label:"Average",fontSize:"16px",color:o,fontFamily:"Public Sans",formatter:()=>`${n.reduce((p,h)=>p+h,0)/n.length}%`}}}}}}});return(c,l)=>(_(),y(S,null,{default:t(()=>[e(w,{class:"d-flex justify-space-between"},{default:t(()=>[a("div",Ee,[Ue,a("div",null,[Ye,a("div",Ge,[e(C,{size:"18",icon:"bx-up-arrow-alt",class:"me-1"}),Ke])])]),a("div",null,[e(b(T),{type:"donut",height:179,width:150,options:b(u),series:n},null,8,["options"])])]),_:1})]),_:1}))}}),qe={class:"me-n3 mt-n8"},Ze=v({__name:"CrmSalesActivity",setup(f){const i=A(),n=G(),u=[{name:"Product A",data:[77,50,59,67,48,84,64]},{name:"Product B",data:[20,23,27,27,30,18,25]}],c=k(()=>{const o=i.current.value.colors,s=i.current.value.variables,p=`rgba(${r(String(o["on-surface"]))},${s["disabled-opacity"]})`;return{chart:{stacked:!0,parentHeightOffset:0,toolbar:{show:!1}},legend:{show:!1},dataLabels:{enabled:!1},stroke:{width:6,lineCap:"round",colors:[o.surface]},colors:[`rgba(${r(String(o.error))}, 1)`,`rgba(${r(String(o.secondary))}, 1)`],states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},grid:{show:!1,padding:{left:8,top:-45,right:6,bottom:7}},plotOptions:{bar:{borderRadius:10,columnWidth:"36%",endingShape:"rounded",startingShape:"rounded"}},xaxis:{axisTicks:{show:!1},crosshairs:{opacity:0},axisBorder:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","Jul"],labels:{style:{fontSize:"14px",colors:p,fontFamily:"Public Sans"}}},yaxis:{show:!1},responsive:[{breakpoint:n.thresholds.value.xl,options:{plotOptions:{bar:{columnWidth:"45%"}}}},{breakpoint:1300,options:{plotOptions:{bar:{columnWidth:"50%"}}}},{breakpoint:n.thresholds.value.lg,options:{plotOptions:{bar:{columnWidth:"45%"}}}},{breakpoint:n.thresholds.value.md,options:{plotOptions:{bar:{columnWidth:"48%"}}}},{breakpoint:700,options:{plotOptions:{bar:{columnWidth:"50%"}}}},{breakpoint:550,options:{plotOptions:{bar:{columnWidth:"40%"}}}},{breakpoint:400,options:{plotOptions:{bar:{columnWidth:"45%"}}}},{breakpoint:375,options:{plotOptions:{bar:{columnWidth:"50%"}}}}]}}),l=[{title:"Share",value:"share"},{title:"Refresh",value:"refresh"},{title:"Delete",value:"delete"}];return(o,s)=>{const p=$;return _(),y(S,{title:"Overview & Sales Activity",subtitle:"Check out each column for more details"},{append:t(()=>[a("div",qe,[e(p,{"menu-list":l})])]),default:t(()=>[e(b(T),{type:"bar",height:308,options:b(c),series:u},null,8,["options"])]),_:1})}}}),Qe={class:"mb-0"},et=a("span",{class:"text-sm"},"Than last year",-1),tt={class:"me-n3 mt-n8"},at=v({__name:"CrmSalesAnalytics",setup(f){const i=A(),n=[{name:"1k",data:[{x:"Jan",y:"250"},{x:"Feb",y:"350"},{x:"Mar",y:"220"},{x:"Apr",y:"290"},{x:"May",y:"650"},{x:"Jun",y:"260"},{x:"Jul",y:"274"},{x:"Aug",y:"850"}]},{name:"2k",data:[{x:"Jan",y:"750"},{x:"Feb",y:"3350"},{x:"Mar",y:"1220"},{x:"Apr",y:"1290"},{x:"May",y:"1650"},{x:"Jun",y:"1260"},{x:"Jul",y:"1274"},{x:"Aug",y:"850"}]},{name:"3k",data:[{x:"Jan",y:"375"},{x:"Feb",y:"1350"},{x:"Mar",y:"3220"},{x:"Apr",y:"2290"},{x:"May",y:"2650"},{x:"Jun",y:"2260"},{x:"Jul",y:"1274"},{x:"Aug",y:"815"}]},{name:"4k",data:[{x:"Jan",y:"575"},{x:"Feb",y:"1350"},{x:"Mar",y:"2220"},{x:"Apr",y:"3290"},{x:"May",y:"3650"},{x:"Jun",y:"2260"},{x:"Jul",y:"1274"},{x:"Aug",y:"315"}]},{name:"5k",data:[{x:"Jan",y:"875"},{x:"Feb",y:"1350"},{x:"Mar",y:"2220"},{x:"Apr",y:"3290"},{x:"May",y:"3650"},{x:"Jun",y:"2260"},{x:"Jul",y:"1274"},{x:"Aug",y:"965"}]},{name:"6k",data:[{x:"Jan",y:"575"},{x:"Feb",y:"1350"},{x:"Mar",y:"2220"},{x:"Apr",y:"2290"},{x:"May",y:"2650"},{x:"Jun",y:"3260"},{x:"Jul",y:"1274"},{x:"Aug",y:"815"}]},{name:"7k",data:[{x:"Jan",y:"575"},{x:"Feb",y:"1350"},{x:"Mar",y:"1220"},{x:"Apr",y:"1290"},{x:"May",y:"1650"},{x:"Jun",y:"1260"},{x:"Jul",y:"3274"},{x:"Aug",y:"815"}]},{name:"8k",data:[{x:"Jan",y:"575"},{x:"Feb",y:"350"},{x:"Mar",y:"220"},{x:"Apr",y:"290"},{x:"May",y:"650"},{x:"Jun",y:"260"},{x:"Jul",y:"274"},{x:"Aug",y:"815"}]}],u=k(()=>{const l=i.current.value.colors,o=i.current.value.variables,s=`rgba(${r(String(l["on-surface"]))},${o["disabled-opacity"]})`;return{chart:{offsetX:3,parentHeightOffset:0,toolbar:{show:!1}},stroke:{width:5,colors:[l.surface]},legend:{show:!1},dataLabels:{enabled:!1},colors:[`rgba(${r(String(l.primary))}, 1)`],states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},grid:{padding:{top:-30,right:25,bottom:3}},xaxis:{axisTicks:{show:!1},axisBorder:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"],crosshairs:{stroke:{color:"transparent"}},labels:{style:{fontSize:"14px",colors:s,fontFamily:"Public Sans"}}},yaxis:{labels:{style:{fontSize:"14px",colors:s,fontFamily:"Public Sans"}}},plotOptions:{heatmap:{radius:6,enableShades:!1,colorScale:{ranges:[{from:0,to:1e3,name:"1K",color:R(`rgba(${r(String(l.primary))}, 0.2)`)},{from:1001,to:2e3,name:"2K",color:R(`rgba(${r(String(l.primary))}, 0.4)`)},{from:2001,to:3e3,name:"3K",color:R(`rgba(${r(String(l.primary))}, 0.6)`)},{from:3001,to:4e3,name:"4K",color:R(`rgba(${r(String(l.primary))}, 1)`)}]}}}}}),c=[{title:"Share",value:"share"},{title:"Refresh",value:"refresh"},{title:"Delete",value:"delete"}];return(l,o)=>{const s=$;return _(),y(S,null,{default:t(()=>[e(B,null,{append:t(()=>[a("div",tt,[e(s,{"menu-list":c})])]),default:t(()=>[e(O,{class:"mb-1"},{default:t(()=>[m(" Sales Analytics ")]),_:1}),a("p",Qe,[e(I,{label:"",color:"success",density:"compact",class:"me-1"},{default:t(()=>[m(" +42.6% ")]),_:1}),et])]),_:1}),e(b(T),{type:"heatmap",height:370,options:b(u),series:n,class:"mt-lg-4"},null,8,["options"])]),_:1})}}}),st={class:"me-n3 mt-n1"},ot={class:"d-flex flex-column align-center gap-y-2 flex-wrap"},rt=a("span",{class:"text-sm"},"Conversion Ratio",-1),lt=a("span",{class:"text-sm"},"Total requirements",-1),nt=v({__name:"CrmSalesStats",setup(f){const i=A(),n=G(),u=[75],c=k(()=>{const s=i.current.value.colors,p=i.current.value.variables,h=`rgba(${r(String(s["on-surface"]))},${p["disabled-opacity"]})`,x=`rgba(${r(String(s["on-surface"]))},${p["high-emphasis-opacity"]})`;return{chart:{sparkline:{enabled:!0}},labels:["Sales"],stroke:{lineCap:"round"},colors:[`rgba(${r(String(s.success))}, 1)`],states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},plotOptions:{radialBar:{hollow:{size:"78%",imageWidth:72,imageHeight:53,imageOffsetY:-40,imageClipped:!1,image:ie},track:{strokeWidth:"45px",background:`rgba(${r(String(s["grey-100"]))}, 1)`},dataLabels:{name:{offsetY:50,color:h},value:{offsetY:10,fontWeight:500,fontSize:"32px",color:x,fontFamily:"Public Sans"}}}}}}),l=[{title:"Share",value:"share"},{title:"Refresh",value:"refresh"},{title:"Delete",value:"delete"}],o=k(()=>n.width.value<1380&&n.width.value>1279?"300":n.width.value<755&&n.width.value>600||n.width.value<395?"240":"340");return(s,p)=>{const h=$;return _(),y(S,{title:"Sales Stats"},{append:t(()=>[a("div",st,[e(h,{"menu-list":l})])]),default:t(()=>[e(w,null,{default:t(()=>[e(b(T),{id:"sales-stats-chart",type:"radialBar",options:b(c),series:u,height:b(o)},null,8,["options","height"]),a("div",ot,[a("div",null,[e(C,{size:"13",icon:"bxs-circle",color:"success",class:"me-2"}),rt]),a("div",null,[e(C,{size:"13",icon:"bxs-circle",color:"disabled",class:"me-2"}),lt])])]),_:1})]),_:1})}}}),it=f=>(K("data-v-35df9548"),f=f(),X(),f),ct={class:"me-n3 mt-n2"},ut=it(()=>a("thead",null,[a("tr",{class:"text-uppercase"},[a("th",{scope:"col",class:"table-spacing border-0"}," Name "),a("th",{scope:"col",class:"table-spacing border-0"}," Project "),a("th",{scope:"col",class:"table-spacing border-0"}," Tasks "),a("th",{scope:"col",class:"table-spacing border-0 text-center"}," Progress ")])],-1)),dt={class:"table-spacing border-0"},pt={class:"d-flex"},mt={class:"text-base font-weight-medium"},ft={class:"text-sm text-disabled"},_t={class:"table-spacing border-0"},ht={class:"table-spacing border-0"},gt={class:"table-spacing text-center border-0"},bt=v({__name:"CrmTeamMembers",setup(f){const i=[{profilePic:U,name:"Dean Hogan",designation:"IOS developer",project:"Zipper",projectIndication:"primary",task:"87/135",progress:65},{profilePic:Y,name:"Hilda Rice",designation:"Laravel developer",project:"Brandi",projectIndication:"success",task:"340/420",progress:75},{profilePic:ae,name:"Andrew O'Brien",designation:"React developer",project:"Payers",projectIndication:"warning",task:"50/82",progress:55},{profilePic:se,name:"Eleanor Price",designation:"Angular developer",project:"Citibank",projectIndication:"error",task:"98/260",progress:60},{profilePic:oe,name:"Carl Oliver",designation:"VueJs developer",project:"Aviator",projectIndication:"secondary",task:"12/25",progress:60}],n=[{title:"Share",value:"Share"},{title:"Refresh",value:"Refresh"},{title:"Update",value:"Update"}];return(u,c)=>{const l=$;return _(),y(S,null,{default:t(()=>[e(B,{class:"pb-1"},{append:t(()=>[a("div",ct,[e(l,{"menu-list":n})])]),default:t(()=>[e(O,null,{default:t(()=>[m("Team Members")]),_:1})]),_:1}),e(q,{class:"text-no-wrap"},{default:t(()=>[ut,a("tbody",null,[(_(),M(P,null,V(i,o=>a("tr",{key:o.name},[a("td",dt,[a("div",pt,[e(J,{size:"38",image:o.profilePic,class:"me-3"},null,8,["image"]),a("div",null,[a("h6",mt,d(o.name),1),a("span",ft,d(o.designation),1)])])]),a("td",_t,[e(I,{label:"",density:"compact",color:o.projectIndication},{default:t(()=>[m(d(o.project),1)]),_:2},1032,["color"])]),a("td",ht,[a("span",null,d(o.task),1)]),a("td",gt,[e(te,{color:o.projectIndication,"model-value":o.progress},null,8,["color","model-value"])])])),64))])]),_:1})]),_:1})}}});const yt=H(bt,[["__scopeId","data-v-35df9548"]]),Q=f=>(K("data-v-ce36f056"),f=f(),X(),f),xt=Q(()=>a("span",{class:"text-primary"},"Sales",-1)),vt={class:"me-n3 mt-n2"},St=Q(()=>a("span",{class:"text-primary"},"Volume",-1)),$t={class:"me-n3 mt-n2"},kt={class:"text-medium-emphasis me-2"},Ct=v({__name:"CrmTopProducts",setup(f){const i=[{title:"Oneplus Nord",subtitle:"Oneplus",amount:"$98,348",logo:ce},{title:"Smart Band 4",subtitle:"Xiaomi",amount:"$15,459",logo:ue},{title:"Surface Pro X",subtitle:"Microsoft",amount:"$4,589",logo:de},{title:"iPhone 13",subtitle:"Apple",amount:"$84,345",logo:pe},{title:"Bluetooth Earphone",subtitle:"Beats",amount:"$10,3748",logo:me}],n=[{subtitle:"HP",amount:"12.4k",title:"ENVY Laptop",differenceNumber:12.4,logo:fe},{title:"Apple",amount:"74.9k",subtitle:"iMac Pro",differenceNumber:-8.5,logo:Z},{amount:"4.4k",subtitle:"Fitbit",title:"Smart Watch",differenceNumber:17.6,logo:_e},{amount:"12.34k",subtitle:"Oneplus",title:"Oneplus Nord",differenceNumber:13.9,logo:he},{amount:"8.65k",title:"Pixel 4a",subtitle:"Google",differenceNumber:-11.8,logo:ge}],u=[{title:"Share",value:"Share"},{title:"Refresh",value:"Refresh"},{title:"Update",value:"Update"}];return(c,l)=>{const o=$;return _(),y(S,null,{default:t(()=>[e(j,{"no-gutters":""},{default:t(()=>[e(g,{cols:"12",sm:"6",class:re(c.$vuetify.display.smAndUp?"border-e":"border-b")},{default:t(()=>[e(B,null,{append:t(()=>[a("div",vt,[e(o,{"menu-list":u})])]),default:t(()=>[e(O,null,{default:t(()=>[m("Top Products by "),xt]),_:1})]),_:1}),e(w,{class:"pt-6"},{default:t(()=>[e(N,{class:"card-list"},{default:t(()=>[(_(),M(P,null,V(i,s=>e(W,{key:s.logo},{prepend:t(()=>[e(J,{start:"",rounded:"",image:s.logo},null,8,["image"])]),append:t(()=>[e(E,{class:"text-medium-emphasis"},{default:t(()=>[m(d(s.amount),1)]),_:2},1024)]),default:t(()=>[e(F,{class:"mb-1"},{default:t(()=>[m(d(s.title),1)]),_:2},1024),e(z,{class:"text-disabled"},{default:t(()=>[m(d(s.subtitle),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1},8,["class"]),e(g,{cols:"12",sm:"6"},{default:t(()=>[e(B,null,{append:t(()=>[a("div",$t,[e(o,{"menu-list":u})])]),default:t(()=>[e(O,null,{default:t(()=>[m("Top Products by "),St]),_:1})]),_:1}),e(w,{class:"pt-6"},{default:t(()=>[e(N,{class:"card-list"},{default:t(()=>[(_(),M(P,null,V(n,s=>e(W,{key:s.logo},{prepend:t(()=>[e(J,{start:"",rounded:"",image:s.logo},null,8,["image"])]),append:t(()=>[e(E,null,{default:t(()=>[a("span",kt,d(s.amount),1),e(I,{label:"",density:"compact",color:s.differenceNumber>0?"success":"error"},{default:t(()=>[m(d(s.differenceNumber)+"% ",1)]),_:2},1032,["color"])]),_:2},1024)]),default:t(()=>[e(F,{class:"mb-1"},{default:t(()=>[m(d(s.title),1)]),_:2},1024),e(z,{class:"text-disabled"},{default:t(()=>[m(d(s.subtitle),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});const wt=H(Ct,[["__scopeId","data-v-ce36f056"]]),aa=v({__name:"crm",setup(f){return(i,n)=>{const u=ee;return _(),y(j,null,{default:t(()=>[e(g,{cols:"12",sm:"6",lg:"4"},{default:t(()=>[e(Ce)]),_:1}),e(g,{cols:"12",sm:"6",lg:"4"},{default:t(()=>[e(Ze)]),_:1}),e(g,{cols:"12",lg:"4"},{default:t(()=>[e(j,null,{default:t(()=>[e(g,{cols:"12",sm:"6",md:"3",lg:"6"},{default:t(()=>[e(u,{title:"Revenue",image:b(Z),stats:"$42,389",change:52.18},null,8,["image","change"])]),_:1}),e(g,{cols:"12",sm:"6",md:"3",lg:"6"},{default:t(()=>[e(u,{title:"Order",image:b(ye),stats:"$1,286",change:-13.24},null,8,["image","change"])]),_:1}),e(g,{cols:"12",md:"6",lg:"12"},{default:t(()=>[e(Xe)]),_:1})]),_:1})]),_:1}),e(g,{cols:"12",lg:"8"},{default:t(()=>[e(wt)]),_:1}),e(g,{cols:"12",sm:"6",lg:"4"},{default:t(()=>[e(De)]),_:1}),e(g,{cols:"12",sm:"6",lg:"4"},{default:t(()=>[e(at)]),_:1}),e(g,{cols:"12",sm:"6",lg:"4"},{default:t(()=>[e(be)]),_:1}),e(g,{cols:"12",sm:"6",lg:"4"},{default:t(()=>[e(nt)]),_:1}),e(g,{cols:"12",md:"5"},{default:t(()=>[e(yt)]),_:1}),e(g,{cols:"12",md:"7"},{default:t(()=>[e(Fe)]),_:1})]),_:1})}}});export{aa as default};
