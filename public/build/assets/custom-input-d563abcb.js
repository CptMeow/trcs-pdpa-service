import{a as _,V as v}from"./VRow-4863209c.js";import{V as f}from"./VInput-354f6456.js";import{V as w}from"./VCheckbox-05dd61ba.js";import{d as b,k as g,bp as I,z as y,q as i,o as a,b as m,w as n,c as x,F as R,a as V,$ as W,p as c,s as $,m as r,I as p,D as h,X as j,C as S,x as C}from"./main-51fa4cdd.js";import{a as U,V as D}from"./VRadioGroup-806c447b.js";import{V as B}from"./VSpacer-cb64da4c.js";import{_ as L}from"./AppCardCode.vue_vue_type_style_index_0_lang-a8b7aa9a.js";import"./transition-482c18b0.js";import"./VCheckboxBtn-af15d0af.js";import"./VSelectionControl-3a741587.js";import"./VAvatar-57fab9ba.js";import"./VImg-7efce583.js";import"./vue.runtime.esm-bundler-23bef556.js";import"./VCard-6736eb7f.js";import"./VDivider-61df3248.js";const A=["src"],P=b({__name:"CustomCheckboxesWithImage",props:{selectedCheckbox:null,checkboxContent:null,gridColumn:null},emits:["update:selectedCheckbox"],setup(u,{emit:d}){const o=u,t=g(structuredClone(I(o.selectedCheckbox)));return y(t,()=>{d("update:selectedCheckbox",t.value)}),(l,s)=>o.checkboxContent&&i(t)?(a(),m(v,{key:0,modelValue:i(t),"onUpdate:modelValue":s[1]||(s[1]=e=>p(t)?t.value=e:null)},{default:n(()=>[(a(!0),x(R,null,V(o.checkboxContent,e=>(a(),m(_,W({key:e.value},u.gridColumn),{default:n(()=>[c(f,{class:$(["custom-input custom-checkbox rounded cursor-pointer",i(t).includes(e.value)?"active":""])},{default:n(()=>[r("div",null,[c(w,{modelValue:i(t),"onUpdate:modelValue":s[0]||(s[0]=k=>p(t)?t.value=k:null),value:e.value},null,8,["modelValue","value"])]),r("img",{src:e.bgImage,alt:"bg-img",class:"custom-checkbox-image"},null,8,A)]),_:2},1032,["class"])]),_:2},1040))),128))]),_:1},8,["modelValue"])):h("",!0)}});const N=j(P,[["__scopeId","data-v-a052bb40"]]),G="/build/assets/background-1-ceba94e3.jpg",F="/build/assets/background-2-d22b51b2.jpg",z="/build/assets/background-3-fdf5581c.jpg",T=b({__name:"DemoCustomInputCustomCheckboxesWithImage",setup(u){const d=[{bgImage:G,value:"basic"},{bgImage:F,value:"premium"},{bgImage:z,value:"enterprise"}],o=g(["basic"]);return(t,l)=>{const s=N;return a(),m(s,{"selected-checkbox":i(o),"onUpdate:selectedCheckbox":l[0]||(l[0]=e=>p(o)?o.value=e:null),"checkbox-content":d,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-checkbox"])}}}),q=["src"],X=b({__name:"CustomRadiosWithImage",props:{selectedRadio:null,radioContent:null,gridColumn:null},emits:["update:selectedRadio"],setup(u,{emit:d}){const o=u,t=g(structuredClone(I(o.selectedRadio)));return y(t,()=>{d("update:selectedRadio",t.value)}),(l,s)=>o.radioContent?(a(),m(D,{key:0,modelValue:i(t),"onUpdate:modelValue":s[0]||(s[0]=e=>p(t)?t.value=e:null)},{default:n(()=>[c(v,null,{default:n(()=>[(a(!0),x(R,null,V(o.radioContent,e=>(a(),m(_,W({key:e.bgImage},u.gridColumn),{default:n(()=>[c(f,{class:$(["custom-input custom-radio rounded cursor-pointer",i(t)===e.value?"active":""])},{default:n(()=>[r("img",{src:e.bgImage,alt:"bg-img",class:"custom-radio-image"},null,8,q),c(U,{value:e.value},null,8,["value"])]),_:2},1032,["class"])]),_:2},1040))),128))]),_:1})]),_:1},8,["modelValue"])):h("",!0)}});const H=j(X,[["__scopeId","data-v-d96cf14c"]]),J=b({__name:"DemoCustomInputCustomRadiosWithImage",setup(u){const d=[{bgImage:G,value:"basic"},{bgImage:F,value:"premium"},{bgImage:z,value:"enterprise"}],o=g("basic");return(t,l)=>{const s=H;return a(),m(s,{"selected-radio":i(o),"onUpdate:selectedRadio":l[0]||(l[0]=e=>p(o)?o.value=e:null),"radio-content":d,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-radio"])}}}),K={class:"d-flex flex-column align-center text-center gap-2"},M={class:"cr-title text-base"},Q={class:"text-sm mb-0"},Y=b({__name:"CustomCheckboxesWithIcon",props:{selectedCheckbox:null,checkboxContent:null,gridColumn:null},emits:["update:selectedCheckbox"],setup(u,{emit:d}){const o=u,t=g(structuredClone(I(o.selectedCheckbox)));return y(t,()=>{d("update:selectedCheckbox",t.value)}),(l,s)=>o.checkboxContent&&i(t)?(a(),m(v,{key:0,modelValue:i(t),"onUpdate:modelValue":s[1]||(s[1]=e=>p(t)?t.value=e:null)},{default:n(()=>[(a(!0),x(R,null,V(o.checkboxContent,e=>(a(),m(_,W({key:e.title},u.gridColumn),{default:n(()=>[c(f,{class:$(["custom-input custom-checkbox rounded cursor-pointer",i(t).includes(e.value)?"active":""])},{default:n(()=>[r("div",K,[c(S,{size:"32",icon:e.icon,class:"text-high-emphasis"},null,8,["icon"]),r("h6",M,C(e.title),1),r("p",Q,C(e.desc),1)]),r("div",null,[c(w,{modelValue:i(t),"onUpdate:modelValue":s[0]||(s[0]=k=>p(t)?t.value=k:null),value:e.value},null,8,["modelValue","value"])])]),_:2},1032,["class"])]),_:2},1040))),128))]),_:1},8,["modelValue"])):h("",!0)}});const Z=j(Y,[["__scopeId","data-v-4b9193f9"]]),ee=b({__name:"DemoCustomInputCustomCheckboxesWithIcon",setup(u){const d=[{title:"Backup",desc:"Backup every file from your project.",value:"backup",icon:"bx-server"},{title:"Encrypt",desc:"Translate your data to encrypted text.",value:"encrypt",icon:"bx-shield"},{title:"Site Lock",desc:"Security tool to protect your website.",value:"site-lock",icon:"bx-lock-alt"}],o=g(["basic"]);return(t,l)=>{const s=Z;return a(),m(s,{"selected-checkbox":i(o),"onUpdate:selectedCheckbox":l[0]||(l[0]=e=>p(o)?o.value=e:null),"checkbox-content":d,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-checkbox"])}}}),te={class:"d-flex flex-column align-center text-center gap-2"},oe={class:"cr-title text-base"},se={class:"text-sm mb-0"},ce=b({__name:"CustomRadiosWithIcon",props:{selectedRadio:null,radioContent:null,gridColumn:null},emits:["update:selectedRadio"],setup(u,{emit:d}){const o=u,t=g(structuredClone(I(o.selectedRadio)));return y(t,()=>{d("update:selectedRadio",t.value)}),(l,s)=>o.radioContent?(a(),m(D,{key:0,modelValue:i(t),"onUpdate:modelValue":s[0]||(s[0]=e=>p(t)?t.value=e:null)},{default:n(()=>[c(v,null,{default:n(()=>[(a(!0),x(R,null,V(o.radioContent,e=>(a(),m(_,W({key:e.title},u.gridColumn),{default:n(()=>[c(f,{class:$(["custom-input custom-radio rounded cursor-pointer",i(t)===e.value?"active":""])},{default:n(()=>[r("div",te,[c(S,{size:"32",icon:e.icon,class:"text-high-emphasis"},null,8,["icon"]),r("h6",oe,C(e.title),1),r("p",se,C(e.desc),1)]),r("div",null,[c(U,{value:e.value},null,8,["value"])])]),_:2},1032,["class"])]),_:2},1040))),128))]),_:1})]),_:1},8,["modelValue"])):h("",!0)}});const ne=j(ce,[["__scopeId","data-v-dba9d899"]]),le=b({__name:"DemoCustomInputCustomRadiosWithIcon",setup(u){const d=[{title:"Starter",desc:"A simple start for everyone.",value:"starter",icon:"bx-rocket"},{title:"Standard",desc:"For small to medium businesses.",value:"standard",icon:"bx-user"},{title:"Enterprise",desc:"Solution for big organizations.",value:"enterprise",icon:"bx-crown"}],o=g("basic");return(t,l)=>{const s=ne;return a(),m(s,{"selected-radio":i(o),"onUpdate:selectedRadio":l[0]||(l[0]=e=>p(o)?o.value=e:null),"radio-content":d,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-radio"])}}}),ae={class:"flex-grow-1"},ue={class:"d-flex align-center mb-1"},de={class:"cr-title text-base"},ie={key:0},re={class:"text-sm mb-0"},me=b({__name:"CustomCheckboxes",props:{selectedCheckbox:null,checkboxContent:null,gridColumn:null},emits:["update:selectedCheckbox"],setup(u,{emit:d}){const o=u,t=g(structuredClone(I(o.selectedCheckbox)));return y(t,()=>{d("update:selectedCheckbox",t.value)}),(l,s)=>o.checkboxContent&&i(t)?(a(),m(v,{key:0,modelValue:i(t),"onUpdate:modelValue":s[1]||(s[1]=e=>p(t)?t.value=e:null)},{default:n(()=>[(a(!0),x(R,null,V(o.checkboxContent,e=>(a(),m(_,W({key:e.title},u.gridColumn),{default:n(()=>[c(f,{class:$(["custom-input custom-checkbox rounded cursor-pointer",i(t).includes(e.value)?"active":""])},{default:n(()=>[r("div",null,[c(w,{modelValue:i(t),"onUpdate:modelValue":s[0]||(s[0]=k=>p(t)?t.value=k:null),value:e.value},null,8,["modelValue","value"])]),r("div",ae,[r("div",ue,[r("h6",de,C(e.title),1),c(B),e.subtitle?(a(),x("span",ie,C(e.subtitle),1)):h("",!0)]),r("p",re,C(e.desc),1)])]),_:2},1032,["class"])]),_:2},1040))),128))]),_:1},8,["modelValue"])):h("",!0)}});const pe=j(me,[["__scopeId","data-v-b5ca5916"]]),be=b({__name:"DemoCustomInputCustomCheckboxes",setup(u){const d=[{title:"Discount",subtitle:"20%",desc:"Wow! Get 20% off on your next purchase!",value:"discount"},{title:"Updates",subtitle:"Free",desc:"Get Updates regarding related products.",value:"updates"}],o=g(["basic"]);return(t,l)=>{const s=pe;return a(),m(s,{"selected-checkbox":i(o),"onUpdate:selectedCheckbox":l[0]||(l[0]=e=>p(o)?o.value=e:null),"checkbox-content":d,"grid-column":{sm:"6",cols:"12"}},null,8,["selected-checkbox"])}}}),_e={class:"flex-grow-1"},ge={class:"d-flex align-center mb-1"},Ce={class:"cr-title text-base"},xe={key:0},he={class:"text-sm mb-0"},ke=b({__name:"CustomRadios",props:{selectedRadio:null,radioContent:null,gridColumn:null},emits:["update:selectedRadio"],setup(u,{emit:d}){const o=u,t=g(structuredClone(I(o.selectedRadio)));return y(t,()=>{d("update:selectedRadio",t.value)}),(l,s)=>o.radioContent?(a(),m(D,{key:0,modelValue:i(t),"onUpdate:modelValue":s[0]||(s[0]=e=>p(t)?t.value=e:null)},{default:n(()=>[c(v,null,{default:n(()=>[(a(!0),x(R,null,V(o.radioContent,e=>(a(),m(_,W({key:e.title},u.gridColumn),{default:n(()=>[c(f,{class:$(["custom-input custom-radio rounded cursor-pointer",i(t)===e.value?"active":""])},{default:n(()=>[r("div",null,[c(U,{value:e.value},null,8,["value"])]),r("div",_e,[r("div",ge,[r("h6",Ce,C(e.title),1),c(B),e.subtitle?(a(),x("span",xe,C(e.subtitle),1)):h("",!0)]),r("p",he,C(e.desc),1)])]),_:2},1032,["class"])]),_:2},1040))),128))]),_:1})]),_:1},8,["modelValue"])):h("",!0)}});const ve=j(ke,[["__scopeId","data-v-07e48be5"]]),fe=b({__name:"DemoCustomInputCustomRadios",setup(u){const d=[{title:"Basic",desc:"Get 2 projects with 2 team members.",value:"basic"},{title:"Premium",subtitle:"$5.00",desc:"Get 8 projects with 8 team members.",value:"premium"}],o=g("basic");return(t,l)=>{const s=ve;return a(),m(s,{"selected-radio":i(o),"onUpdate:selectedRadio":l[0]||(l[0]=e=>p(o)?o.value=e:null),"radio-content":d,"grid-column":{sm:"6",cols:"12"}},null,8,["selected-radio"])}}}),Ie={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const checkboxContent: CustomInputContent[] = [
  {
    title: 'Discount',
    subtitle: '20%',
    desc: 'Wow! Get 20% off on your next purchase!',
    value: 'discount',
  },
  {
    title: 'Updates',
    subtitle: 'Free',
    desc: 'Get Updates regarding related products.',
    value: 'updates',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxes
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`,js:`<script setup>
const checkboxContent = [
  {
    title: 'Discount',
    subtitle: '20%',
    desc: 'Wow! Get 20% off on your next purchase!',
    value: 'discount',
  },
  {
    title: 'Updates',
    subtitle: 'Free',
    desc: 'Get Updates regarding related products.',
    value: 'updates',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxes
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`},ye={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const checkboxContent: CustomInputContent[] = [
  {
    title: 'Backup',
    desc: 'Backup every file from your project.',
    value: 'backup',
    icon: 'bx-server',
  },
  {
    title: 'Encrypt',
    desc: 'Translate your data to encrypted text.',
    value: 'encrypt',
    icon: 'bx-shield',
  },
  {
    title: 'Site Lock',
    desc: 'Security tool to protect your website.',
    value: 'site-lock',
    icon: 'bx-lock-alt',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithIcon
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
const checkboxContent = [
  {
    title: 'Backup',
    desc: 'Backup every file from your project.',
    value: 'backup',
    icon: 'bx-server',
  },
  {
    title: 'Encrypt',
    desc: 'Translate your data to encrypted text.',
    value: 'encrypt',
    icon: 'bx-shield',
  },
  {
    title: 'Site Lock',
    desc: 'Security tool to protect your website.',
    value: 'site-lock',
    icon: 'bx-lock-alt',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithIcon
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},Re={ts:`<script setup lang="ts">
import bg1 from '@images/pages/background-1.jpg'
import bg2 from '@images/pages/background-2.jpg'
import bg3 from '@images/pages/background-3.jpg'

const checkboxContent: { bgImage: string; value: string }[] = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithImage
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
import bg1 from '@images/pages/background-1.jpg'
import bg2 from '@images/pages/background-2.jpg'
import bg3 from '@images/pages/background-3.jpg'

const checkboxContent = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithImage
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},Ve={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const radioContent: CustomInputContent[] = [
  {
    title: 'Basic',
    desc: 'Get 2 projects with 2 team members.',
    value: 'basic',
  },
  {
    title: 'Premium',
    subtitle: '$5.00',
    desc: 'Get 8 projects with 8 team members.',
    value: 'premium',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadios
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`,js:`<script setup>
const radioContent = [
  {
    title: 'Basic',
    desc: 'Get 2 projects with 2 team members.',
    value: 'basic',
  },
  {
    title: 'Premium',
    subtitle: '$5.00',
    desc: 'Get 8 projects with 8 team members.',
    value: 'premium',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadios
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`},We={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const radioContent: CustomInputContent[] = [
  {
    title: 'Starter',
    desc: 'A simple start for everyone.',
    value: 'starter',
    icon: 'bx-rocket',
  },
  {
    title: 'Standard',
    desc: 'For small to medium businesses.',
    value: 'standard',
    icon: 'bx-user',
  },
  {
    title: 'Enterprise',
    desc: 'Solution for big organizations.',
    value: 'enterprise',
    icon: 'bx-crown',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithIcon
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
const radioContent = [
  {
    title: 'Starter',
    desc: 'A simple start for everyone.',
    value: 'starter',
    icon: 'bx-rocket',
  },
  {
    title: 'Standard',
    desc: 'For small to medium businesses.',
    value: 'standard',
    icon: 'bx-user',
  },
  {
    title: 'Enterprise',
    desc: 'Solution for big organizations.',
    value: 'enterprise',
    icon: 'bx-crown',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithIcon
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},$e={ts:`<script setup lang="ts">
import bg1 from '@images/pages/background-1.jpg'
import bg2 from '@images/pages/background-2.jpg'
import bg3 from '@images/pages/background-3.jpg'

const radioContent: { bgImage: string; value: string }[] = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithImage
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
import bg1 from '@images/pages/background-1.jpg'
import bg2 from '@images/pages/background-2.jpg'
import bg3 from '@images/pages/background-3.jpg'

const radioContent = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithImage
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},Te=b({__name:"custom-input",setup(u){return(d,o)=>{const t=fe,l=L,s=be,e=le,k=ee,E=J,O=T;return a(),m(v,null,{default:n(()=>[c(_,{cols:"12",md:"6"},{default:n(()=>[c(l,{title:"Custom Radios",code:Ve},{default:n(()=>[c(t)]),_:1},8,["code"])]),_:1}),c(_,{cols:"12",md:"6"},{default:n(()=>[c(l,{title:"Custom Checkboxes",code:Ie},{default:n(()=>[c(s)]),_:1},8,["code"])]),_:1}),c(_,{cols:"12",md:"6"},{default:n(()=>[c(l,{title:"Custom Radios With Icon",code:We},{default:n(()=>[c(e)]),_:1},8,["code"])]),_:1}),c(_,{cols:"12",md:"6"},{default:n(()=>[c(l,{title:"Custom Checkboxes With Icon",code:ye},{default:n(()=>[c(k)]),_:1},8,["code"])]),_:1}),c(_,{cols:"12",md:"6"},{default:n(()=>[c(l,{title:"Custom Radios With Image",code:$e},{default:n(()=>[c(E)]),_:1},8,["code"])]),_:1}),c(_,{cols:"12",md:"6"},{default:n(()=>[c(l,{title:"Custom Checkboxes With Image",code:Re},{default:n(()=>[c(O)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Te as default};
