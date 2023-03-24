import{d as S,B as w,r as B,o as m,b as I,w as a,p as e,C as p,L as _,q as u,R as c,x as d,M as v,P as $,c as h,F as k,a as L,D as P,m as g,s as R,Z as T,H as A,$ as M,k as E,a0 as z,a1 as F,a2 as D}from"./main-51fa4cdd.js";import{a as O}from"./formatters-8376cbd9.js";import{V as x}from"./VBadge-3a3d37af.js";import{V as U}from"./VMenu-c40ddae7.js";import{V as H,a as W,b as Y,c as j}from"./VCard-6736eb7f.js";import{V as q}from"./VTooltip-869457c6.js";import{V as C}from"./VDivider-61df3248.js";import{V as Z,a as y,b as N,c as G}from"./VList-f23cbc26.js";import{V as J}from"./VListItemAction-3a27ad5c.js";import{V as K}from"./VAvatar-57fab9ba.js";const Q={key:0},X={class:"text-xs text-disabled"},ee={class:"d-flex flex-column align-center gap-4"},te={style:{width:"28px",height:"28px"}},ae=S({__name:"Notifications",props:{notifications:null,badgeProps:{default:void 0},location:{default:"bottom end"}},emits:["read","unread","remove","click:notification"],setup(b,{emit:n}){const o=b,r=w(()=>o.notifications.some(l=>l.isSeen===!0)),f=()=>{const l=o.notifications.map(s=>s.id);r.value?n("unread",l):n("read",l)};return(l,s)=>{const i=B("IconBtn");return m(),I(x,M({"model-value":!!o.badgeProps},o.badgeProps),{default:a(()=>[e(i,null,{default:a(()=>[e(x,{dot:"","model-value":o.notifications.some(t=>!t.isSeen),color:"error",bordered:"","offset-x":"1","offset-y":"1"},{default:a(()=>[e(p,{size:"22",icon:"bx-bell"})]),_:1},8,["model-value"]),e(U,{activator:"parent",width:"380px",location:o.location,offset:"14px","close-on-content-click":!1},{default:a(()=>[e(H,{class:"d-flex flex-column"},{default:a(()=>[e(W,{class:"notification-section"},{append:a(()=>[_(e(i,{onClick:f},{default:a(()=>[e(p,{icon:u(r)?"bx-envelope":"bx-envelope-open"},null,8,["icon"]),e(q,{activator:"parent",location:"start"},{default:a(()=>[c(d(u(r)?"Mark all as unread":"Mark all as read"),1)]),_:1})]),_:1},512),[[v,o.notifications.length]])]),default:a(()=>[e(Y,{class:"text-lg"},{default:a(()=>[c(" Notifications ")]),_:1})]),_:1}),e(C),e(u($),{options:{wheelPropagation:!1},style:{"max-height":"23.75rem"}},{default:a(()=>[e(Z,{class:"py-0"},{default:a(()=>[(m(!0),h(k,null,L(o.notifications,t=>(m(),h(k,{key:t.title},[e(y,{link:"",lines:"one","min-height":"66px",class:"list-item-hover-class",onClick:V=>l.$emit("click:notification",t)},{prepend:a(()=>[e(J,{start:""},{default:a(()=>[e(K,{color:t.color||"primary",image:t.img||void 0,icon:t.icon||void 0,size:"40",variant:"tonal"},{default:a(()=>[t.text?(m(),h("span",Q,d(u(O)(t.text)),1)):P("",!0)]),_:2},1032,["color","image","icon"])]),_:2},1024)]),append:a(()=>[g("div",ee,[e(x,{dot:"",color:t.isSeen?"#a8aaae":"primary",class:R(`${t.isSeen?"visible-in-hover":""} ms-1`),onClick:T(V=>l.$emit(t.isSeen?"unread":"read",[t.id]),["stop"])},null,8,["color","class","onClick"]),g("div",te,[e(i,{size:"x-small",class:"visible-in-hover",onClick:V=>l.$emit("remove",t.id)},{default:a(()=>[e(p,{size:"20",icon:"bx-x"})]),_:2},1032,["onClick"])])])]),default:a(()=>[e(N,null,{default:a(()=>[c(d(t.title),1)]),_:2},1024),e(G,null,{default:a(()=>[c(d(t.subtitle),1)]),_:2},1024),g("span",X,d(t.time),1)]),_:2},1032,["onClick"]),e(C)],64))),128)),_(e(y,{class:"text-center text-medium-emphasis",style:{height:"56px"}},{default:a(()=>[e(N,null,{default:a(()=>[c("No Notification Found!")]),_:1})]),_:1},512),[[v,!o.notifications.length]])]),_:1})]),_:1}),_(e(j,{class:"notification-footer"},{default:a(()=>[e(A,{block:""},{default:a(()=>[c(" VIEW ALL NOTIFICATIONS ")]),_:1})]),_:1},512),[[v,o.notifications.length]])]),_:1})]),_:1},8,["location"])]),_:1})]),_:1},16,["model-value"])}}});const oe="/build/assets/paypal-01b645d1.svg",pe=S({__name:"NavBarNotifications",setup(b){const n=E([{id:1,img:z,title:"Congratulation Flora! 🎉",subtitle:"Won the monthly best seller badge",time:"Today",isSeen:!0},{id:2,text:"Tom Holland",title:"New user registered.",subtitle:"5 hours ago",time:"Yesterday",isSeen:!1},{id:3,img:F,title:"New message received 👋🏻",subtitle:"You have 10 unread messages",time:"11 Aug",isSeen:!0},{id:4,img:oe,title:"Paypal",subtitle:"Received Payment",time:"25 May",isSeen:!1,color:"error"},{id:5,img:D,title:"Received Order 📦",subtitle:"New order received from john",time:"19 Mar",isSeen:!0}]),o=s=>{n.value.forEach((i,t)=>{s===i.id&&n.value.splice(t,1)})},r=s=>{n.value.forEach(i=>{s.forEach(t=>{t===i.id&&(i.isSeen=!0)})})},f=s=>{n.value.forEach(i=>{s.forEach(t=>{t===i.id&&(i.isSeen=!1)})})},l=s=>{s.isSeen||r([s.id])};return(s,i)=>{const t=ae;return m(),I(t,{notifications:u(n),onRemove:o,onRead:r,onUnread:f,"onClick:notification":l},null,8,["notifications"])}}});export{pe as _};
