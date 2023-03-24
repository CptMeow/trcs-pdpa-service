import{d as y,k as v,o as d,c as g,p as e,q as f,I as _,aq as s,w as l,m as r,x as P,X as h,b as L,af as k,aO as B,z as M,R as t}from"./main-51fa4cdd.js";import{_ as $}from"./AppCardCode.vue_vue_type_style_index_0_lang-a8b7aa9a.js";import{a as p,V as x}from"./VRow-4863209c.js";import"./vue.runtime.esm-bundler-23bef556.js";import"./VCard-6736eb7f.js";import"./VAvatar-57fab9ba.js";import"./VImg-7efce583.js";import"./transition-482c18b0.js";import"./VDivider-61df3248.js";const I={class:"demo-space-y"},D=y({__name:"DemoProgressLinearSlots",setup(m){const o=v(20),c=v(33),i=v(78);return(n,u)=>(d(),g("div",I,[e(s,{modelValue:f(i),"onUpdate:modelValue":u[0]||(u[0]=a=>_(i)?i.value=a:null),color:"primary",height:"8"},null,8,["modelValue"]),e(s,{modelValue:f(o),"onUpdate:modelValue":u[1]||(u[1]=a=>_(o)?o.value=a:null),color:"primary",height:"20"},{default:l(({value:a})=>[r("strong",null,P(Math.ceil(a))+"%",1)]),_:1},8,["modelValue"]),e(s,{modelValue:f(c),"onUpdate:modelValue":u[2]||(u[2]=a=>_(c)?c.value=a:null),height:"20",color:"primary"},{default:l(()=>[r("strong",null,P(Math.ceil(f(c)))+"%",1)]),_:1},8,["modelValue"])]))}}),U={},R={class:"demo-space-y"};function C(m,o){return d(),g("div",R,[e(s,{"model-value":"78",height:"8",color:"primary",rounded:""}),e(s,{"model-value":"20",color:"primary",height:"20",rounded:""}),e(s,{"model-value":"33",height:"20",color:"primary",rounded:""})])}const j=h(U,[["render",C]]),T={};function S(m,o){return d(),L(s,{color:"primary",indeterminate:"",reverse:""})}const N=h(T,[["render",S]]),q={};function z(m,o){return d(),L(s,{indeterminate:"",color:"primary"})}const A=h(q,[["render",z]]),E={class:"demo-space-y"},O=y({__name:"DemoProgressLinearBuffering",setup(m){const o=v(10),c=v(20),i=v(),n=()=>{clearInterval(i.value),i.value=setInterval(()=>{o.value+=Math.random()*(15-5)+5,c.value+=Math.random()*(15-5)+6},2e3)};return k(n),B(()=>{clearInterval(i.value)}),M(o,()=>{if(o.value<100)return!1;o.value=0,c.value=10,n()}),(u,a)=>(d(),g("div",E,[e(s,{modelValue:f(o),"onUpdate:modelValue":a[0]||(a[0]=V=>_(o)?o.value=V:null),color:"primary",height:"8","buffer-value":f(c)},null,8,["modelValue","buffer-value"])]))}}),X={},Y={class:"demo-space-y"};function F(m,o){return d(),g("div",Y,[e(s,{"model-value":"15","bg-color":"primary",color:"primary"}),e(s,{"model-value":"30","bg-color":"secondary",color:"secondary"}),e(s,{"model-value":"45","bg-color":"success",color:"success"})])}const G=h(X,[["render",F]]),H={ts:`<script setup lang="ts">
const modelValue = ref(10)
const bufferValue = ref(20)
const interval = ref()

const startBuffer = () => {
  clearInterval(interval.value)

  interval.value = setInterval(() => {
    modelValue.value += Math.random() * (15 - 5) + 5
    bufferValue.value += Math.random() * (15 - 5) + 6
  }, 2000)
}

onMounted(startBuffer)

onBeforeUnmount(() => {
  clearInterval(interval.value)
})

watch(modelValue, () => {
  if (modelValue.value < 100)
    return false

  modelValue.value = 0
  bufferValue.value = 10
  startBuffer()
})
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="modelValue"
      color="primary"
      height="8"
      :buffer-value="bufferValue"
    />
  </div>
</template>
`,js:`<script setup>
const modelValue = ref(10)
const bufferValue = ref(20)
const interval = ref()

const startBuffer = () => {
  clearInterval(interval.value)
  interval.value = setInterval(() => {
    modelValue.value += Math.random() * (15 - 5) + 5
    bufferValue.value += Math.random() * (15 - 5) + 6
  }, 2000)
}

onMounted(startBuffer)
onBeforeUnmount(() => {
  clearInterval(interval.value)
})
watch(modelValue, () => {
  if (modelValue.value < 100)
    return false
  modelValue.value = 0
  bufferValue.value = 10
  startBuffer()
})
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="modelValue"
      color="primary"
      height="8"
      :buffer-value="bufferValue"
    />
  </div>
</template>
`},J={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="15"
      bg-color="primary"
      color="primary"
    />

    <VProgressLinear
      model-value="30"
      bg-color="secondary"
      color="secondary"
    />

    <VProgressLinear
      model-value="45"
      bg-color="success"
      color="success"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="15"
      bg-color="primary"
      color="primary"
    />

    <VProgressLinear
      model-value="30"
      bg-color="secondary"
      color="secondary"
    />

    <VProgressLinear
      model-value="45"
      bg-color="success"
      color="success"
    />
  </div>
</template>
`},K={ts:`<template>
  <VProgressLinear
    indeterminate
    color="primary"
  />
</template>
`,js:`<template>
  <VProgressLinear
    indeterminate
    color="primary"
  />
</template>
`},Q={ts:`<template>
  <VProgressLinear
    color="primary"
    indeterminate
    reverse
  />
</template>
`,js:`<template>
  <VProgressLinear
    color="primary"
    indeterminate
    reverse
  />
</template>
`},W={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="78"
      height="8"
      color="primary"
      rounded
    />

    <VProgressLinear
      model-value="20"
      color="primary"
      height="20"
      rounded
    />

    <VProgressLinear
      model-value="33"
      height="20"
      color="primary"
      rounded
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="78"
      height="8"
      color="primary"
      rounded
    />

    <VProgressLinear
      model-value="20"
      color="primary"
      height="20"
      rounded
    />

    <VProgressLinear
      model-value="33"
      height="20"
      color="primary"
      rounded
    />
  </div>
</template>
`},Z={ts:`<script setup lang="ts">
const skill = ref(20)
const knowledge = ref(33)
const power = ref(78)
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="power"
      color="primary"
      height="8"
    />

    <VProgressLinear
      v-model="skill"
      color="primary"
      height="20"
    >
      <template #default="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </VProgressLinear>

    <VProgressLinear
      v-model="knowledge"
      height="20"
      color="primary"
    >
      <strong>{{ Math.ceil(knowledge) }}%</strong>
    </VProgressLinear>
  </div>
</template>
`,js:`<script setup>
const skill = ref(20)
const knowledge = ref(33)
const power = ref(78)
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="power"
      color="primary"
      height="8"
    />

    <VProgressLinear
      v-model="skill"
      color="primary"
      height="20"
    >
      <template #default="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </VProgressLinear>

    <VProgressLinear
      v-model="knowledge"
      height="20"
      color="primary"
    >
      <strong>{{ Math.ceil(knowledge) }}%</strong>
    </VProgressLinear>
  </div>
</template>
`},ee=r("p",null,[t("Use the props "),r("code",null,"color"),t(" and "),r("code",null,"background-color"),t(" to set colors.")],-1),oe=r("p",null,[t("The primary value is controlled by "),r("code",null,"v-model"),t(", whereas the buffer is controlled by the "),r("code",null,"buffer-value"),t(" prop.")],-1),re=r("p",null,[t("for continuously animating progress bar,use prop "),r("code",null,"indeterminate"),t(". This indicates continuous process. ")],-1),le=r("p",null,[t("Use prop "),r("code",null,"reverse"),t(" to animate continuously in reverse direction. The component also has RTL support.")],-1),te=r("p",null,[t("The "),r("code",null," rounded "),t(" prop is used to apply a border radius to the v-progress-linear component.")],-1),ae=r("p",null,[t("we can bind user input using "),r("code",null,"v-model"),t(".You can also use the default slot for the same.")],-1),ve=y({__name:"progress-linear",setup(m){return(o,c)=>{const i=G,n=$,u=O,a=A,V=N,b=j,w=D;return d(),L(x,{class:"match-height"},{default:l(()=>[e(p,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Color",code:J},{default:l(()=>[ee,e(i)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Buffering",code:H},{default:l(()=>[oe,e(u)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Indeterminate",code:K},{default:l(()=>[re,e(a)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Reversed",code:Q},{default:l(()=>[le,e(V)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Rounded",code:W},{default:l(()=>[te,e(b)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Slots",code:Z},{default:l(()=>[ae,e(w)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{ve as default};
