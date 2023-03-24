import{c as A}from"./VAvatar-57fab9ba.js";import{au as D,aC as I,aS as L,bm as w,b2 as E,bw as R,bJ as z,b4 as F,aZ as O,av as j,bh as H,aE as J,B as s,aw as K,bi as M,aT as N,bn as Q,b8 as Z,bx as q,bK as G,b9 as U,ax as W,ay as X,aQ as Y,p as t,bk as p,a$ as u,C as ee,H as ae}from"./main-51fa4cdd.js";const te=A("v-alert-title"),le=["success","info","warning","error"],oe=D()({name:"VAlert",props:{border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:I,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>le.includes(e)},...L(),...w(),...E(),...R(),...z(),...F(),...O(),...j(),...H({variant:"flat"})},emits:{"update:modelValue":e=>!0},setup(e,d){let{slots:a}=d;const n=J(e,"modelValue"),l=s(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),v=s(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:m}=K(e),{colorClasses:b,colorStyles:y,variantClasses:f}=M(v),{densityClasses:C}=N(e),{dimensionStyles:V}=Q(e),{elevationClasses:k}=Z(e),{locationStyles:x}=q(e),{positionClasses:P}=G(e),{roundedClasses:S}=U(e),{textColorClasses:g,textColorStyles:_}=W(X(e,"borderColor")),{t:T}=Y(),o=s(()=>({"aria-label":T(e.closeLabel),onClick(r){n.value=!1}}));return()=>{const r=!!(a.prepend||l.value),h=!!(a.title||e.title),B=!!(e.text||a.text),$=!!(a.close||e.closable);return n.value&&t(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},m.value,b.value,C.value,k.value,P.value,S.value,f.value],style:[y.value,V.value,x.value],role:"alert"},{default:()=>{var i;return[p(!1,"v-alert"),e.border&&t("div",{key:"border",class:["v-alert__border",g.value],style:_.value},null),r&&t(u,{key:"prepend",defaults:{VIcon:{density:e.density,icon:l.value,size:e.prominent?44:28}}},{default:()=>[t("div",{class:"v-alert__prepend"},[a.prepend?a.prepend():l.value&&t(ee,null,null)])]}),t("div",{class:"v-alert__content"},[h&&t(te,{key:"title"},{default:()=>[a.title?a.title():e.title]}),B&&(a.text?a.text():e.text),(i=a.default)==null?void 0:i.call(a)]),a.append&&t("div",{key:"append",class:"v-alert__append"},[a.append()]),$&&t(u,{key:"close",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var c;return[t("div",{class:"v-alert__close"},[((c=a.close)==null?void 0:c.call(a,{props:o.value}))??t(ae,o.value,null)])]}})]}})}}});export{oe as V,te as a};