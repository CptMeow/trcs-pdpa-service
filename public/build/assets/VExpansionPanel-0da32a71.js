import{au as x,bC as T,aZ as g,av as w,bD as A,aw as _,B as c,bd as B,ay as m,aA as b,p as l,aI as L,aC as y,bs as D,aL as P,b7 as S,L as V,bo as R,C as G,M as $,at as j,b2 as z,bE as F,b4 as J,bF as M,b8 as N,b9 as O,aJ as Z}from"./main-51fa4cdd.js";import{m as C,u as q}from"./lazy-e0727b80.js";const r=Symbol.for("vuetify:v-expansion-panel"),H=["default","accordion","inset","popout"],X=x()({name:"VExpansionPanels",props:{color:String,variant:{type:String,default:"default",validator:e=>H.includes(e)},readonly:Boolean,...T(),...g(),...w()},emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:n}=o;A(e,r);const{themeClasses:a}=_(e),i=c(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return B({VExpansionPanel:{color:m(e,"color")},VExpansionPanelTitle:{readonly:m(e,"readonly")}}),b(()=>l(e.tag,{class:["v-expansion-panels",a.value,i.value]},n)),{}}}),E=L({color:String,expandIcon:{type:y,default:"$expand"},collapseIcon:{type:y,default:"$collapse"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean},"v-expansion-panel-title"),K=x()({name:"VExpansionPanelTitle",directives:{Ripple:D},props:{...E()},setup(e,o){let{slots:n}=o;const a=P(r);if(!a)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:i,backgroundColorStyles:u}=S(e,"color"),d=c(()=>({collapseIcon:e.collapseIcon,disabled:a.disabled.value,expanded:a.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return b(()=>{var v;return V(l("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":a.isSelected.value},i.value],style:u.value,type:"button",tabindex:a.disabled.value?-1:void 0,disabled:a.disabled.value,"aria-expanded":a.isSelected.value,onClick:e.readonly?void 0:a.toggle},[l("span",{class:"v-expansion-panel-title__overlay"},null),(v=n.default)==null?void 0:v.call(n,d.value),!e.hideActions&&l("span",{class:"v-expansion-panel-title__icon"},[n.actions?n.actions(d.value):l(G,{icon:a.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[R("ripple"),e.ripple]])}),{}}}),Q=x()({name:"VExpansionPanelText",props:{...C()},setup(e,o){let{slots:n}=o;const a=P(r);if(!a)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:i,onAfterLeave:u}=q(e,a.isSelected);return b(()=>l(j,{onAfterLeave:u},{default:()=>{var d;return[V(l("div",{class:"v-expansion-panel-text"},[n.default&&i.value&&l("div",{class:"v-expansion-panel-text__wrapper"},[(d=n.default)==null?void 0:d.call(n)])]),[[$,a.isSelected.value]])]}})),{}}}),Y=x()({name:"VExpansionPanel",props:{title:String,text:String,bgColor:String,...z(),...F(),...C(),...J(),...g(),...E()},emits:{"group:selected":e=>!0},setup(e,o){let{slots:n}=o;const a=M(e,r),{backgroundColorClasses:i,backgroundColorStyles:u}=S(e,"bgColor"),{elevationClasses:d}=N(e),{roundedClasses:v}=O(e),I=c(()=>(a==null?void 0:a.disabled.value)||e.disabled),f=c(()=>a.group.items.value.reduce((s,t,p)=>(a.group.selected.value.includes(t.id)&&s.push(p),s),[])),h=c(()=>{const s=a.group.items.value.findIndex(t=>t.id===a.id);return!a.isSelected.value&&f.value.some(t=>t-s===1)}),k=c(()=>{const s=a.group.items.value.findIndex(t=>t.id===a.id);return!a.isSelected.value&&f.value.some(t=>t-s===-1)});return Z(r,a),b(()=>{const s=!!(n.text||e.text),t=!!(n.title||e.title);return l(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":a.isSelected.value,"v-expansion-panel--before-active":h.value,"v-expansion-panel--after-active":k.value,"v-expansion-panel--disabled":I.value},v.value,i.value],style:u.value,"aria-expanded":a.isSelected.value},{default:()=>{var p;return[l("div",{class:["v-expansion-panel__shadow",...d.value]},null),t&&l(K,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[n.title?n.title():e.title]}),s&&l(Q,{key:"text",eager:e.eager},{default:()=>[n.text?n.text():e.text]}),(p=n.default)==null?void 0:p.call(n)]}})}),{}}});export{X as V,Y as a,K as b,Q as c};