import{d as f,k as V,B as $,o as _,c as R,m as a,x as T,q as n,p as e,w as l,b,J as D,D as I,K as M,C as L,H as k,I as u,F as U,a7 as O,a8 as E,X as g,R as c}from"./main-51fa4cdd.js";import{V as Y}from"./VAvatar-57fab9ba.js";import{V as p}from"./VSlider-fe1de63a.js";import{a as N}from"./VImg-7efce583.js";import{a as m,V as h}from"./VRow-4863209c.js";import{V as w}from"./VTextField-04866304.js";import{_ as G}from"./AppCardCode.vue_vue_type_style_index_0_lang-a8b7aa9a.js";import"./VSliderTrack-01182020.js";import"./VInput-354f6456.js";import"./transition-482c18b0.js";/* empty css                   */import"./VField-e7393660.js";import"./easing-6b01f2d6.js";import"./forwardRefs-8f7055de.js";import"./VCounter-d16178d6.js";import"./vue.runtime.esm-bundler-23bef556.js";import"./VCard-6736eb7f.js";import"./VDivider-61df3248.js";const q=v=>(O("data-v-6f6676b3"),v=v(),E(),v),H={class:"d-flex justify-space-between ma-4"},J=["textContent"],K=q(()=>a("span",{class:"subheading font-weight-light me-1"},"BPM",-1)),X=f({__name:"DemoSliderAppendAndPrepend",setup(v){const t=V(40),s=40,i=218,d=V(!1),o=$(()=>t.value<100?"primary":t.value<125?"success":t.value<140?"info":t.value<175?"warning":"error"),r=$(()=>`${60/t.value}s`),y=()=>{t.value>s&&(t.value-=1)},S=()=>{t.value<i&&(t.value+=1)};return(z,x)=>(_(),R(U,null,[a("div",H,[a("div",null,[a("span",{class:"text-6xl font-weight-light",textContent:T(n(t))},null,8,J),K,e(M,null,{default:l(()=>[n(d)?(_(),b(Y,{key:0,color:n(o),style:D({animationDuration:n(r)}),class:"mb-1 v-avatar--metronome",size:"12"},null,8,["color","style"])):I("",!0)]),_:1})]),a("div",null,[e(k,{color:n(o),icon:"",elevation:"0",onClick:x[0]||(x[0]=C=>d.value=!n(d))},{default:l(()=>[e(L,{size:"large",icon:n(d)?"bx-pause":"bx-play"},null,8,["icon"])]),_:1},8,["color"])])]),e(p,{modelValue:n(t),"onUpdate:modelValue":x[1]||(x[1]=C=>u(t)?t.value=C:null),color:n(o),step:1,min:s,max:i,"track-color":"secondary"},{prepend:l(()=>[e(k,{size:"small",variant:"text",icon:"bx-minus",color:n(o),onClick:y},null,8,["color"])]),append:l(()=>[e(k,{size:"small",variant:"text",icon:"bx-plus",color:n(o),onClick:S},null,8,["color"])]),_:1},8,["modelValue","color"])],64))}});const Q=g(X,[["__scopeId","data-v-6f6676b3"]]),W={style:{width:"3rem"}},Z={style:{width:"3rem"}},ee={style:{width:"3rem"}},le=f({__name:"DemoSliderAppendTextField",setup(v){const t=V(161),s=V(105),i=V(255);return(d,o)=>(_(),R(U,null,[e(N,{style:D({background:`rgb(${n(t)}, ${n(s)}, ${n(i)})`}),height:"150px"},null,8,["style"]),e(h,{class:"mt-5"},{default:l(()=>[e(m,{cols:"12"},{default:l(()=>[e(p,{modelValue:n(t),"onUpdate:modelValue":o[1]||(o[1]=r=>u(t)?t.value=r:null),max:255,step:1,"prepend-icon":"mdi-alpha-r"},{append:l(()=>[a("div",W,[e(w,{modelValue:n(t),"onUpdate:modelValue":o[0]||(o[0]=r=>u(t)?t.value=r:null),type:"number",variant:"underlined",max:255},null,8,["modelValue"])])]),_:1},8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[e(p,{modelValue:n(s),"onUpdate:modelValue":o[3]||(o[3]=r=>u(s)?s.value=r:null),max:255,step:1,"prepend-icon":"mdi-alpha-g"},{append:l(()=>[a("div",Z,[e(w,{modelValue:n(s),"onUpdate:modelValue":o[2]||(o[2]=r=>u(s)?s.value=r:null),type:"number",variant:"underlined",max:255},null,8,["modelValue"])])]),_:1},8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[e(p,{modelValue:n(i),"onUpdate:modelValue":o[5]||(o[5]=r=>u(i)?i.value=r:null),max:255,step:1,"prepend-icon":"mdi-alpha-b"},{append:l(()=>[a("div",ee,[e(w,{modelValue:n(i),"onUpdate:modelValue":o[4]||(o[4]=r=>u(i)?i.value=r:null),type:"number",variant:"underlined",max:255},null,8,["modelValue"])])]),_:1},8,["modelValue"])]),_:1})]),_:1})],64))}}),te=f({__name:"DemoSliderVertical",setup(v){const t=V(10);return(s,i)=>(_(),b(p,{modelValue:n(t),"onUpdate:modelValue":i[0]||(i[0]=d=>u(t)?t.value=d:null),direction:"vertical"},null,8,["modelValue"]))}}),oe=a("div",{class:"text-caption"}," Show ticks when using slider ",-1),ae=a("div",{class:"text-caption"}," Always show ticks ",-1),se=a("div",{class:"text-caption"}," Tick size ",-1),ne=a("div",{class:"text-caption"}," Tick labels ",-1),ie=f({__name:"DemoSliderTicks",setup(v){const t=V(0),s=V(1),i={0:"Figs",1:"Lemon",2:"Pear",3:"Apple"};return(d,o)=>(_(),b(h,null,{default:l(()=>[e(m,{cols:"12"},{default:l(()=>[oe,e(p,{modelValue:n(t),"onUpdate:modelValue":o[0]||(o[0]=r=>u(t)?t.value=r:null),step:10,"show-ticks":""},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[ae,e(p,{modelValue:n(t),"onUpdate:modelValue":o[1]||(o[1]=r=>u(t)?t.value=r:null),step:10,"show-ticks":"always"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[se,e(p,{modelValue:n(t),"onUpdate:modelValue":o[2]||(o[2]=r=>u(t)?t.value=r:null),step:10,"show-ticks":"always","tick-size":"4"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[ne,e(p,{modelValue:n(s),"onUpdate:modelValue":o[3]||(o[3]=r=>u(s)?s.value=r:null),ticks:i,max:3,step:"1","show-ticks":"always","tick-size":"4"},null,8,["modelValue"])]),_:1})]),_:1}))}}),de=a("div",{class:"text-caption"}," Show thumb when using slider ",-1),re=a("div",{class:"text-caption"}," Always show thumb label ",-1),ce=a("div",{class:"text-caption"}," Custom thumb size ",-1),me=a("div",{class:"text-caption"}," Custom thumb label ",-1),ue=f({__name:"DemoSliderThumb",setup(v){const t=["😭","😢","☹️","🙁","😐","🙂","😊","😁","😄","😍"],s=V(45);return(i,d)=>(_(),b(h,null,{default:l(()=>[e(m,{cols:"12"},{default:l(()=>[de,e(p,{modelValue:n(s),"onUpdate:modelValue":d[0]||(d[0]=o=>u(s)?s.value=o:null),"thumb-label":""},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[re,e(p,{modelValue:n(s),"onUpdate:modelValue":d[1]||(d[1]=o=>u(s)?s.value=o:null),"thumb-label":"always"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[ce,e(p,{modelValue:n(s),"onUpdate:modelValue":d[2]||(d[2]=o=>u(s)?s.value=o:null),"thumb-size":30,"thumb-label":"always"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[me,e(p,{modelValue:n(s),"onUpdate:modelValue":d[3]||(d[3]=o=>u(s)?s.value=o:null),"thumb-label":"always"},{"thumb-label":l(({modelValue:o})=>[c(T(t[Math.min(Math.floor(o/10),9)]),1)]),_:1},8,["modelValue"])]),_:1})]),_:1}))}}),pe={};function Ve(v,t){return _(),b(p,{step:10,"show-ticks":"","thumb-size":13,"tick-size":3,"track-size":2})}const ve=g(pe,[["render",Ve]]),_e=f({__name:"DemoSliderMinAndMax",setup(v){const t=V(-50),s=V(90),i=V(40);return(d,o)=>(_(),b(p,{modelValue:n(i),"onUpdate:modelValue":o[1]||(o[1]=r=>u(i)?i.value=r:null),max:n(s),min:n(t),step:1},{append:l(()=>[e(w,{modelValue:n(i),"onUpdate:modelValue":o[0]||(o[0]=r=>u(i)?i.value=r:null),variant:"underlined",type:"number",style:{width:"60px"}},null,8,["modelValue"])]),_:1},8,["modelValue","max","min"]))}}),be=f({__name:"DemoSliderValidation",setup(v){const t=V(30),s=[i=>i<=40||"Only 40 in stock"];return(i,d)=>(_(),b(p,{modelValue:n(t),"onUpdate:modelValue":d[0]||(d[0]=o=>u(t)?t.value=o:null),error:n(t)>40,rules:s,step:10,"thumb-label":"always","show-ticks":""},null,8,["modelValue","error"]))}}),fe=f({__name:"DemoSliderStep",setup(v){const t=V(0);return(s,i)=>(_(),b(p,{modelValue:n(t),"onUpdate:modelValue":i[0]||(i[0]=d=>u(t)?t.value=d:null),min:0,max:1,step:.2,"thumb-label":""},null,8,["modelValue","step"]))}}),he=f({__name:"DemoSliderIcons",setup(v){const t=V(0),s=V(0),i=V(10);return(d,o)=>(_(),b(h,null,{default:l(()=>[e(m,{cols:"12"},{default:l(()=>[e(p,{modelValue:n(t),"onUpdate:modelValue":o[0]||(o[0]=r=>u(t)?t.value=r:null),"prepend-icon":"bxs-volume-full"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[e(p,{modelValue:n(s),"onUpdate:modelValue":o[1]||(o[1]=r=>u(s)?s.value=r:null),"append-icon":"bx-alarm"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[e(p,{modelValue:n(i),"onUpdate:modelValue":o[2]||(o[2]=r=>u(i)?i.value=r:null),"append-icon":"bx-zoom-in","prepend-icon":"bx-zoom-out"},null,8,["modelValue"])]),_:1})]),_:1}))}}),xe=a("div",{class:"text-caption"}," color ",-1),Ce=a("div",{class:"text-caption"}," track-color ",-1),we=a("div",{class:"text-caption"}," thumb-color ",-1),ye=f({__name:"DemoSliderColors",setup(v){const t=V(25),s=V(75),i=V(50);return(d,o)=>(_(),b(h,null,{default:l(()=>[e(m,{cols:"12"},{default:l(()=>[xe,e(p,{modelValue:n(t),"onUpdate:modelValue":o[0]||(o[0]=r=>u(t)?t.value=r:null),color:"error"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[Ce,e(p,{modelValue:n(s),"onUpdate:modelValue":o[1]||(o[1]=r=>u(s)?s.value=r:null),"track-color":"error"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[we,e(p,{modelValue:n(i),"onUpdate:modelValue":o[2]||(o[2]=r=>u(i)?i.value=r:null),"thumb-color":"error","thumb-label":"always"},null,8,["modelValue"])]),_:1})]),_:1}))}}),Se={},ke=a("div",{class:"text-caption"}," Disabled ",-1),ge=a("div",{class:"text-caption"}," Readonly ",-1);function ze(v,t){return _(),b(h,null,{default:l(()=>[e(m,{cols:"12"},{default:l(()=>[ke,e(p,{disabled:"",label:"Disabled","model-value":30})]),_:1}),e(m,{cols:"12"},{default:l(()=>[ge,e(p,{readonly:"",label:"Readonly","model-value":30})]),_:1})]),_:1})}const $e=g(Se,[["render",ze]]),Re=f({__name:"DemoSliderBasic",setup(v){const t=V(30);return(s,i)=>(_(),b(h,null,{default:l(()=>[e(m,{cols:"12"},{default:l(()=>[e(p)]),_:1}),e(m,{cols:"12"},{default:l(()=>[e(p,{modelValue:n(t),"onUpdate:modelValue":i[0]||(i[0]=d=>u(t)?t.value=d:null)},null,8,["modelValue"])]),_:1})]),_:1}))}}),Te={ts:`<script lang="ts" setup>
const bpm = ref(40)
const min = 40
const max = 218
const isPlaying = ref(false)

const color = computed(() => {
  if (bpm.value < 100)
    return 'primary'
  if (bpm.value < 125)
    return 'success'
  if (bpm.value < 140)
    return 'info'
  if (bpm.value < 175)
    return 'warning'

  return 'error'
})

const animationDuration = computed(() => {
  return \`\${60 / bpm.value}s\`
})

const decrement = () => {
  if (bpm.value > min)
    bpm.value -= 1
}

const increment = () => {
  if (bpm.value < max)
    bpm.value += 1
}
<\/script>

<template>
  <div class="d-flex justify-space-between ma-4">
    <div>
      <span
        class="text-6xl font-weight-light"
        v-text="bpm"
      />
      <span class="subheading font-weight-light me-1">BPM</span>

      <VFadeTransition>
        <VAvatar
          v-if="isPlaying"
          :color="color"
          :style="{
            animationDuration,
          }"
          class="mb-1 v-avatar--metronome"
          size="12"
        />
      </VFadeTransition>
    </div>

    <div>
      <VBtn
        :color="color"
        icon
        elevation="0"
        @click="isPlaying = !isPlaying"
      >
        <VIcon
          size="large"
          :icon="isPlaying ? 'bx-pause' : 'bx-play'"
        />
      </VBtn>
    </div>
  </div>

  <VSlider
    v-model="bpm"
    :color="color"
    :step="1"
    :min="min"
    :max="max"
    track-color="secondary"
  >
    <template #prepend>
      <VBtn
        size="small"
        variant="text"
        icon="bx-minus"
        :color="color"
        @click="decrement"
      />
    </template>

    <template #append>
      <VBtn
        size="small"
        variant="text"
        icon="bx-plus"
        :color="color"
        @click="increment"
      />
    </template>
  </VSlider>
</template>

<style lang="scss" scoped>
  @keyframes metronome-example {
    from {
      transform: scale(0.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-name: metronome-example;
  }
</style>
`,js:`<script setup>
const bpm = ref(40)
const min = 40
const max = 218
const isPlaying = ref(false)

const color = computed(() => {
  if (bpm.value < 100)
    return 'primary'
  if (bpm.value < 125)
    return 'success'
  if (bpm.value < 140)
    return 'info'
  if (bpm.value < 175)
    return 'warning'
  
  return 'error'
})

const animationDuration = computed(() => {
  return \`\${ 60 / bpm.value }s\`
})

const decrement = () => {
  if (bpm.value > min)
    bpm.value -= 1
}

const increment = () => {
  if (bpm.value < max)
    bpm.value += 1
}
<\/script>

<template>
  <div class="d-flex justify-space-between ma-4">
    <div>
      <span
        class="text-6xl font-weight-light"
        v-text="bpm"
      />
      <span class="subheading font-weight-light me-1">BPM</span>

      <VFadeTransition>
        <VAvatar
          v-if="isPlaying"
          :color="color"
          :style="{
            animationDuration,
          }"
          class="mb-1 v-avatar--metronome"
          size="12"
        />
      </VFadeTransition>
    </div>

    <div>
      <VBtn
        :color="color"
        icon
        elevation="0"
        @click="isPlaying = !isPlaying"
      >
        <VIcon
          size="large"
          :icon="isPlaying ? 'bx-pause' : 'bx-play'"
        />
      </VBtn>
    </div>
  </div>

  <VSlider
    v-model="bpm"
    :color="color"
    :step="1"
    :min="min"
    :max="max"
    track-color="secondary"
  >
    <template #prepend>
      <VBtn
        size="small"
        variant="text"
        icon="bx-minus"
        :color="color"
        @click="decrement"
      />
    </template>

    <template #append>
      <VBtn
        size="small"
        variant="text"
        icon="bx-plus"
        :color="color"
        @click="increment"
      />
    </template>
  </VSlider>
</template>

<style lang="scss" scoped>
  @keyframes metronome-example {
    from {
      transform: scale(0.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-name: metronome-example;
  }
</style>
`},De={ts:`<script lang="ts" setup>
const redColorValue = ref(161)
const greenColorValue = ref(105)
const blueColorValue = ref(255)
<\/script>

<template>
  <VResponsive
    :style="{ background: \`rgb(\${redColorValue}, \${greenColorValue}, \${blueColorValue})\` }"
    height="150px"
  />

  <VRow class="mt-5">
    <VCol cols="12">
      <!-- R -->
      <VSlider
        v-model="redColorValue"
        :max="255"
        :step="1"
        prepend-icon="mdi-alpha-r"
      >
        <template #append>
          <div style="width: 3rem;">
            <VTextField
              v-model="redColorValue"
              type="number"
              variant="underlined"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>

    <VCol cols="12">
      <!-- G -->
      <VSlider
        v-model="greenColorValue"
        :max="255"
        :step="1"
        prepend-icon="mdi-alpha-g"
      >
        <template #append>
          <div style="width: 3rem;">
            <VTextField
              v-model="greenColorValue"
              type="number"
              variant="underlined"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>

    <VCol cols="12">
      <!-- B -->
      <VSlider
        v-model="blueColorValue"
        :max="255"
        :step="1"
        prepend-icon="mdi-alpha-b"
      >
        <template #append>
          <div style="width: 3rem;">
            <VTextField
              v-model="blueColorValue"
              type="number"
              variant="underlined"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const redColorValue = ref(161)
const greenColorValue = ref(105)
const blueColorValue = ref(255)
<\/script>

<template>
  <VResponsive
    :style="{ background: \`rgb(\${redColorValue}, \${greenColorValue}, \${blueColorValue})\` }"
    height="150px"
  />

  <VRow class="mt-5">
    <VCol cols="12">
      <!-- R -->
      <VSlider
        v-model="redColorValue"
        :max="255"
        :step="1"
        prepend-icon="mdi-alpha-r"
      >
        <template #append>
          <div style="width: 3rem;">
            <VTextField
              v-model="redColorValue"
              type="number"
              variant="underlined"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>

    <VCol cols="12">
      <!-- G -->
      <VSlider
        v-model="greenColorValue"
        :max="255"
        :step="1"
        prepend-icon="mdi-alpha-g"
      >
        <template #append>
          <div style="width: 3rem;">
            <VTextField
              v-model="greenColorValue"
              type="number"
              variant="underlined"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>

    <VCol cols="12">
      <!-- B -->
      <VSlider
        v-model="blueColorValue"
        :max="255"
        :step="1"
        prepend-icon="mdi-alpha-b"
      >
        <template #append>
          <div style="width: 3rem;">
            <VTextField
              v-model="blueColorValue"
              type="number"
              variant="underlined"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`},Ue={ts:`<script setup lang="ts">
const sliderValue = ref(30)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="sliderValue"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const sliderValue = ref(30)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="sliderValue"
      />
    </VCol>
  </VRow>
</template>
`},Ae={ts:`<script lang="ts" setup>
const sliderColorValue = ref(25)
const sliderTrackColorValue = ref(75)
const sliderThumbColorValue = ref(50)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        color
      </div>
      <VSlider
        v-model="sliderColorValue"
        color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        track-color
      </div>
      <VSlider
        v-model="sliderTrackColorValue"
        track-color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        thumb-color
      </div>
      <VSlider
        v-model="sliderThumbColorValue"
        thumb-color="error"
        thumb-label="always"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const sliderColorValue = ref(25)
const sliderTrackColorValue = ref(75)
const sliderThumbColorValue = ref(50)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        color
      </div>
      <VSlider
        v-model="sliderColorValue"
        color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        track-color
      </div>
      <VSlider
        v-model="sliderTrackColorValue"
        track-color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        thumb-color
      </div>
      <VSlider
        v-model="sliderThumbColorValue"
        thumb-color="error"
        thumb-label="always"
      />
    </VCol>
  </VRow>
</template>
`},Be={ts:`<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Disabled
      </div>
      <VSlider
        disabled
        label="Disabled"
        :model-value="30"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Readonly
      </div>
      <VSlider
        readonly
        label="Readonly"
        :model-value="30"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Disabled
      </div>
      <VSlider
        disabled
        label="Disabled"
        :model-value="30"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Readonly
      </div>
      <VSlider
        readonly
        label="Readonly"
        :model-value="30"
      />
    </VCol>
  </VRow>
</template>
`},Fe={ts:`<script lang="ts" setup>
const mediaSlider = ref(0)
const alarmSlider = ref(0)
const zoomInOut = ref(10)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider
        v-model="mediaSlider"
        prepend-icon="bxs-volume-full"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="alarmSlider"
        append-icon="bx-alarm"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="zoomInOut"
        append-icon="bx-zoom-in"
        prepend-icon="bx-zoom-out"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const mediaSlider = ref(0)
const alarmSlider = ref(0)
const zoomInOut = ref(10)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider
        v-model="mediaSlider"
        prepend-icon="bxs-volume-full"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="alarmSlider"
        append-icon="bx-alarm"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="zoomInOut"
        append-icon="bx-zoom-in"
        prepend-icon="bx-zoom-out"
      />
    </VCol>
  </VRow>
</template>
`},je={ts:`<script lang="ts" setup>
const min = ref(-50)
const max = ref(90)
const slider = ref(40)
<\/script>

<template>
  <VSlider
    v-model="slider"
    :max="max"
    :min="min"
    :step="1"
  >
    <template #append>
      <VTextField
        v-model="slider"
        variant="underlined"
        type="number"
        style="width: 60px ;"
      />
    </template>
  </VSlider>
</template>
`,js:`<script setup>
const min = ref(-50)
const max = ref(90)
const slider = ref(40)
<\/script>

<template>
  <VSlider
    v-model="slider"
    :max="max"
    :min="min"
    :step="1"
  >
    <template #append>
      <VTextField
        v-model="slider"
        variant="underlined"
        type="number"
        style="width: 60px ;"
      />
    </template>
  </VSlider>
</template>
`},Pe={ts:`<template>
  <VSlider
    :step="10"
    show-ticks
    :thumb-size="13"
    :tick-size="3"
    :track-size="2"
  />
</template>
`,js:`<template>
  <VSlider
    :step="10"
    show-ticks
    :thumb-size="13"
    :tick-size="3"
    :track-size="2"
  />
</template>
`},Ie={ts:`<script lang="ts" setup>
const value = ref(0)
<\/script>

<template>
  <VSlider
    v-model="value"
    :min="0"
    :max="1"
    :step="0.2"
    thumb-label
  />
</template>
`,js:`<script setup>
const value = ref(0)
<\/script>

<template>
  <VSlider
    v-model="value"
    :min="0"
    :max="1"
    :step="0.2"
    thumb-label
  />
</template>
`},Me={ts:`<script lang="ts" setup>
const satisfactionEmojis = ['😭', '😢', '☹️', '🙁', '😐', '🙂', '😊', '😁', '😄', '😍']
const slider = ref(45)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show thumb when using slider
      </div>
      <VSlider
        v-model="slider"
        thumb-label
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb size
      </div>
      <VSlider
        v-model="slider"
        :thumb-size="30"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      >
        <template #thumb-label="{ modelValue }">
          {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const satisfactionEmojis = [
  '😭',
  '😢',
  '☹️',
  '🙁',
  '😐',
  '🙂',
  '😊',
  '😁',
  '😄',
  '😍',
]

const slider = ref(45)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show thumb when using slider
      </div>
      <VSlider
        v-model="slider"
        thumb-label
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb size
      </div>
      <VSlider
        v-model="slider"
        :thumb-size="30"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      >
        <template #thumb-label="{ modelValue }">
          {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`},Le={ts:`<script lang="ts" setup>
const value = ref(0)
const fruits = ref(1)
const ticksLabels = { 0: 'Figs', 1: 'Lemon', 2: 'Pear', 3: 'Apple' }
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show ticks when using slider
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show ticks
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick size
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick labels
      </div>
      <VSlider
        v-model="fruits"
        :ticks="ticksLabels"
        :max="3"
        step="1"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const value = ref(0)
const fruits = ref(1)

const ticksLabels = {
  0: 'Figs',
  1: 'Lemon',
  2: 'Pear',
  3: 'Apple',
}
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show ticks when using slider
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show ticks
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick size
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick labels
      </div>
      <VSlider
        v-model="fruits"
        :ticks="ticksLabels"
        :max="3"
        step="1"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>
  </VRow>
</template>
`},Oe={ts:`<script lang="ts" setup>
const value = ref(30)
const rules = [(v: number) => v <= 40 || 'Only 40 in stock']
<\/script>

<template>
  <VSlider
    v-model="value"
    :error="value > 40"
    :rules="rules"
    :step="10"
    thumb-label="always"
    show-ticks
  />
</template>
`,js:`<script setup>
const value = ref(30)
const rules = [v => v <= 40 || 'Only 40 in stock']
<\/script>

<template>
  <VSlider
    v-model="value"
    :error="value > 40"
    :rules="rules"
    :step="10"
    thumb-label="always"
    show-ticks
  />
</template>
`},Ee={ts:`<script lang="ts" setup>
const value = ref(10)
<\/script>

<template>
  <VSlider
    v-model="value"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const value = ref(10)
<\/script>

<template>
  <VSlider
    v-model="value"
    direction="vertical"
  />
</template>
`},Ye=a("p",null,[c("The "),a("code",null,"v-slider"),c(" component is a better visualization of the number input.")],-1),Ne=a("p",null,[c("You cannot interact with "),a("code",null,"disabled"),c(" and "),a("code",null,"readonly"),c(" sliders.")],-1),Ge=a("p",null,[c("You can set the colors of the slider using the props "),a("code",null,"color"),c(", "),a("code",null,"track-color"),c(" and "),a("code",null,"thumb-color"),c(".")],-1),qe=a("p",null,[c("You can add icons to the slider with the "),a("code",null,"append-icon"),c(" and "),a("code",null,"prepend-icon"),c(" props.")],-1),He=a("p",null,[c("Using the "),a("code",null,"step"),c(" prop you can control the precision of the slider, and how much it should move each step.")],-1),Je=a("p",null,[c("Vuetify includes simple validation through the "),a("code",null,"rules"),c(" prop.")],-1),Ke=a("p",null,[c("You can set "),a("code",null,"min"),c(" and "),a("code",null,"max"),c(" values of sliders.")],-1),Xe=a("p",null,[c("Use "),a("code",null,"thumb-size"),c(", "),a("code",null,"tick-size"),c(", and "),a("code",null,"track-size"),c(" prop to increase and decrease the size of thumb, tick and track. ")],-1),Qe=a("p",null,[c("You can display a thumb label while sliding or always with the "),a("code",null,"thumb-label"),c(" prop.")],-1),We=a("p",null,"Tick marks represent predetermined values to which the user can move the slider.",-1),Ze=a("p",null,[c(" You can use the "),a("code",null,"vertical"),c(" prop to switch sliders to a vertical orientation. ")],-1),el=a("p",null,[c("Sliders can be combined with other components in its "),a("code",null,"append"),c(" slot, such as "),a("code",null,"v-text-field"),c(", to add additional functionality to the component.")],-1),ll=a("p",null,[c("Use slots such as "),a("code",null,"append"),c(" and "),a("code",null,"prepend"),c(" to easily customize the "),a("code",null,"v-slider"),c(" to fit any situation.")],-1),xl=f({__name:"slider",setup(v){return(t,s)=>{const i=Re,d=G,o=$e,r=ye,y=he,S=fe,z=be,x=_e,C=ve,A=ue,B=ie,F=te,j=le,P=Q;return _(),b(h,{class:"match-height"},{default:l(()=>[e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Basic",code:Ue},{default:l(()=>[Ye,e(i)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Disabled and Readonly",code:Be},{default:l(()=>[Ne,e(o)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Colors",code:Ae},{default:l(()=>[Ge,e(r)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Icons",code:Fe},{default:l(()=>[qe,e(y)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Step",code:Ie},{default:l(()=>[He,e(S)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Validation",code:Oe},{default:l(()=>[Je,e(z)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Min and Max",code:je},{default:l(()=>[Ke,e(x)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Size",code:Pe},{default:l(()=>[Xe,e(C)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Thumb",code:Me},{default:l(()=>[Qe,e(A)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Ticks",code:Le},{default:l(()=>[We,e(B)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Vertical",code:Ee},{default:l(()=>[Ze,e(F)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Append text field",code:De},{default:l(()=>[el,e(j)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Append and prepend",code:Te},{default:l(()=>[ll,e(P)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{xl as default};
