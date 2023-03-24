import{d as b,k as R,r as $,o as i,b as u,w as t,q as C,c as A,p as e,ag as D,ah as N,m as o,n as V,C as r,J as S,D as m,R as l,x as g,at as x,L as w,M as O,I as Y,ar as E,F as L,a as P}from"./main-51fa4cdd.js";import{V as F,a as U,b as j,d as h}from"./VCard-6736eb7f.js";import{V as q}from"./VOverlay-20793165.js";import{a as _,V as J}from"./VRow-4863209c.js";import{V as M}from"./VTable-99a3e630.js";import{V as G}from"./VChip-d98b0377.js";import"./VAvatar-57fab9ba.js";import"./VImg-7efce583.js";import"./transition-482c18b0.js";import"./lazy-e0727b80.js";import"./easing-6b01f2d6.js";const H={key:0},K={class:"v-card-content"},Q=b({inheritAttrs:!1}),W=b({...Q,__name:"AppCardActions",props:{collapsed:{type:Boolean,default:!1},noActions:{type:Boolean,default:!1},actionCollapsed:{type:Boolean,default:!1},actionRefresh:{type:Boolean,default:!1},actionRemove:{type:Boolean,default:!1},title:{default:void 0}},emits:["collapsed","refresh","trash"],setup(a,{emit:f}){const c=a,s=R(c.collapsed),v=R(!1),n=R(!1),d=()=>{n.value=!1},B=()=>{s.value=!s.value,f("collapsed",s.value)},z=()=>{n.value=!0,f("refresh",d)},I=()=>{v.value=!0,f("trash")};return(p,k)=>{const y=$("IconBtn");return i(),u(x,null,{default:t(()=>[C(v)?m("",!0):(i(),A("div",H,[e(F,D(N(p.$attrs)),{default:t(()=>[e(U,null,{append:t(()=>[o("div",null,[V(p.$slots,"before-actions"),(!(a.actionRemove||a.actionRefresh)||a.actionCollapsed)&&!a.noActions?(i(),u(y,{key:0,onClick:B},{default:t(()=>[e(r,{size:"20",icon:"bx-chevron-up",style:S([{transform:C(s)?"rotate(-180deg)":null},{"transition-duration":"0.28s"}])},null,8,["style"])]),_:1})):m("",!0),(!(a.actionRemove||a.actionCollapsed)||a.actionRefresh)&&!a.noActions?(i(),u(y,{key:1,onClick:z},{default:t(()=>[e(r,{size:"20",icon:"bx-refresh"})]),_:1})):m("",!0),(!(a.actionRefresh||a.actionCollapsed)||a.actionRemove)&&!a.noActions?(i(),u(y,{key:2,onClick:I},{default:t(()=>[e(r,{size:"20",icon:"bx-x"})]),_:1})):m("",!0)])]),default:t(()=>[c.title||p.$slots.title?(i(),u(j,{key:0},{default:t(()=>[V(p.$slots,"title",{},()=>[l(g(c.title),1)])]),_:3})):m("",!0)]),_:3}),e(x,null,{default:t(()=>[w(o("div",K,[V(p.$slots,"default")],512),[[O,!C(s)]])]),_:3}),e(q,{modelValue:C(n),"onUpdate:modelValue":k[0]||(k[0]=T=>Y(n)?n.value=T:null),contained:"",persistent:"",class:"align-center justify-center"},{default:t(()=>[e(E,{indeterminate:""})]),_:1},8,["modelValue"])]),_:3},16)]))]),_:3})}}});const X=o("thead",null,[o("tr",null,[o("th",{scope:"col"}," ACTION "),o("th",{scope:"col"}," ICON "),o("th",{scope:"col"}," DETAILS ")])],-1),Z=o("p",null,[l("You can specifically add collapsible action using "),o("code",null,"actionCollapse"),l(" prop")],-1),ee=o("p",null,[l("You can specifically add refresh action using "),o("code",null,"actionRefresh"),l(" prop")],-1),te=o("p",null,[l("You can specifically add remove action using "),o("code",null,"actionRemove"),l(" prop")],-1),oe=o("p",null,[o("code",null,"app-card-actions"),l(" also provides "),o("code",null,"before-actions"),l(" and "),o("code",null,"after-actions"),l(" slot")],-1),le=o("span",null,"You can find more details in our documentation",-1),he=b({__name:"card-actions",setup(a){const f=[{action:"Collapse",icon:"bx-chevron-up",details:"Collapse card content using collapse action."},{action:"Refresh Content",icon:"bx-refresh",details:"Refresh your card content using refresh action."},{action:"Remove Card",icon:"bx-x",details:"Remove card from page using remove card action"}],c=s=>{setTimeout(s,3e3)};return(s,v)=>{const n=W;return i(),u(J,null,{default:t(()=>[e(_,{cols:"12"},{default:t(()=>[e(n,{title:"Cards Actions",onRefresh:c},{default:t(()=>[e(h,null,{default:t(()=>[e(M,null,{default:t(()=>[X,o("tbody",null,[(i(),A(L,null,P(f,d=>o("tr",{key:d.icon},[o("td",null,g(d.action),1),o("td",null,[e(r,{size:"20",icon:d.icon},null,8,["icon"])]),o("td",null,g(d.details),1)])),64))])]),_:1})]),_:1})]),_:1})]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(n,{"action-collapsed":"",title:"Collapsible"},{default:t(()=>[e(h,null,{default:t(()=>[Z,o("span",null,[l("Click on "),e(r,{size:"20",icon:"bx-chevron-up"}),l(" icon to see it in action")])]),_:1})]),_:1})]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Refresh Content","action-refresh":"",onRefresh:c},{default:t(()=>[e(h,null,{default:t(()=>[ee,o("span",null,[l("Click on "),e(r,{size:"20",icon:"bx-refresh"}),l(" icon to see it in action")])]),_:1})]),_:1})]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Remove Card","action-remove":""},{default:t(()=>[e(h,null,{default:t(()=>[te,o("span",null,[l("Click on "),e(r,{size:"20",icon:"bx-x"}),l(" icon to see it in action")])]),_:1})]),_:1})]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Slots",onRefresh:c},{"before-actions":t(()=>[e(G,{class:"me-3",color:"primary",size:"small"},{default:t(()=>[l(" 3 Updates ")]),_:1})]),default:t(()=>[e(h,null,{default:t(()=>[oe,le]),_:1})]),_:1})]),_:1})]),_:1})}}});export{he as default};