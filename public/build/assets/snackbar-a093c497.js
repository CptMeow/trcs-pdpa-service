import{au as F,bw as R,bJ as A,b4 as j,bh as q,av as L,aB as M,aE as H,bx as N,bK as J,aw as W,bi as z,b9 as h,k as V,z as D,af as K,aA as G,p as a,bk as Q,a$ as X,$ as U,d as _,o as x,c as y,w as t,R as e,H as u,q as S,I as p,C as B,F as w,b as Y,m as k}from"./main-51fa4cdd.js";import{m as Z,u as aa,f as ta,V as ea}from"./VOverlay-20793165.js";import{f as na}from"./forwardRefs-8f7055de.js";import{_ as la}from"./AppCardCode.vue_vue_type_style_index_0_lang-a8b7aa9a.js";import{a as g,V as ia}from"./VRow-4863209c.js";import"./lazy-e0727b80.js";import"./easing-6b01f2d6.js";import"./transition-482c18b0.js";import"./vue.runtime.esm-bundler-23bef556.js";import"./VCard-6736eb7f.js";import"./VAvatar-57fab9ba.js";import"./VImg-7efce583.js";import"./VDivider-61df3248.js";const f=F()({name:"VSnackbar",props:{multiLine:Boolean,timeout:{type:[Number,String],default:5e3},vertical:Boolean,...R({location:"bottom"}),...A(),...j(),...q(),...L(),...M(Z({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},emits:{"update:modelValue":m=>!0},setup(m,l){let{slots:c}=l;const n=H(m,"modelValue"),{locationStyles:i}=N(m),{positionClasses:b}=J(m),{scopeId:v}=aa(),{themeClasses:s}=W(m),{colorClasses:d,colorStyles:I,variantClasses:C}=z(m),{roundedClasses:o}=h(m),r=V();D(n,$),D(()=>m.timeout,$),K(()=>{n.value&&$()});let O=-1;function $(){window.clearTimeout(O);const T=Number(m.timeout);!n.value||T===-1||(O=window.setTimeout(()=>{n.value=!1},T))}function E(){window.clearTimeout(O)}return G(()=>{const[T]=ta(m);return a(ea,U({ref:r,class:["v-snackbar",{"v-snackbar--active":n.value,"v-snackbar--multi-line":m.multiLine&&!m.vertical,"v-snackbar--vertical":m.vertical},b.value]},T,{modelValue:n.value,"onUpdate:modelValue":P=>n.value=P,contentProps:U({class:["v-snackbar__wrapper",s.value,d.value,o.value,C.value],style:[i.value,I.value],onPointerenter:E,onPointerleave:$},T.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none"},v),{default:()=>[Q(!1,"v-snackbar"),c.default&&a("div",{class:"v-snackbar__content",role:"status","aria-live":"polite"},[c.default()]),c.actions&&a(X,{defaults:{VBtn:{variant:"text",ripple:!1}}},{default:()=>[a("div",{class:"v-snackbar__actions"},[c.actions()])]})],activator:c.activator})}),na({},r)}}),oa={class:"demo-space-x"},sa=_({__name:"DemoSnackbarTransition",setup(m){const l=V(!1),c=V(!1),n=V(!1);return(i,b)=>(x(),y("div",oa,[a(u,{onClick:b[0]||(b[0]=v=>l.value=!0)},{default:t(()=>[e(" fade snackbar ")]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":b[1]||(b[1]=v=>p(l)?l.value=v:null),transition:"fade-transition",location:"top start"},{default:t(()=>[e(" I'm a fade transition snackbar. ")]),_:1},8,["modelValue"]),a(u,{onClick:b[2]||(b[2]=v=>c.value=!0)},{default:t(()=>[e(" Scale snackbar ")]),_:1}),a(f,{modelValue:S(c),"onUpdate:modelValue":b[3]||(b[3]=v=>p(c)?c.value=v:null),transition:"scale-transition",location:"bottom end"},{default:t(()=>[e(" I'm a scale transition snackbar. ")]),_:1},8,["modelValue"]),a(u,{onClick:b[4]||(b[4]=v=>n.value=!0)},{default:t(()=>[e(" scroll y reverse ")]),_:1}),a(f,{modelValue:S(n),"onUpdate:modelValue":b[5]||(b[5]=v=>p(n)?n.value=v:null),transition:"scroll-y-reverse-transition",location:"top end"},{default:t(()=>[e(" I'm a scroll y reverse transition snackbar. ")]),_:1},8,["modelValue"])]))}}),ra={class:"demo-space-x"},ca=_({__name:"DemoSnackbarVariants",setup(m){const l=V(!1),c=V(!1),n=V(!1),i=V(!1),b=V(!1);return(v,s)=>(x(),y("div",ra,[a(u,{onClick:s[0]||(s[0]=d=>l.value=!0)},{default:t(()=>[e(" Default ")]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":s[1]||(s[1]=d=>p(l)?l.value=d:null),location:"top start"},{default:t(()=>[e(" Jelly chocolate bar candy canes apple pie. ")]),_:1},8,["modelValue"]),a(u,{onClick:s[2]||(s[2]=d=>c.value=!0)},{default:t(()=>[e(" tonal ")]),_:1}),a(f,{modelValue:S(c),"onUpdate:modelValue":s[3]||(s[3]=d=>p(c)?c.value=d:null),location:"top end",variant:"tonal"},{default:t(()=>[e(" Ice cream cake candy canes. ")]),_:1},8,["modelValue"]),a(u,{onClick:s[4]||(s[4]=d=>n.value=!0)},{default:t(()=>[e(" Text ")]),_:1}),a(f,{modelValue:S(n),"onUpdate:modelValue":s[5]||(s[5]=d=>p(n)?n.value=d:null),location:"end center",variant:"text"},{default:t(()=>[e(" Pie icing biscuit soufflé liquorice topping. ")]),_:1},8,["modelValue"]),a(u,{onClick:s[6]||(s[6]=d=>i.value=!0)},{default:t(()=>[e(" Outlined ")]),_:1}),a(f,{modelValue:S(i),"onUpdate:modelValue":s[7]||(s[7]=d=>p(i)?i.value=d:null),location:"bottom end",variant:"outlined",color:"error"},{default:t(()=>[e(" Oat cake caramels sesame snaps candy. ")]),_:1},8,["modelValue"]),a(u,{onClick:s[8]||(s[8]=d=>b.value=!0)},{default:t(()=>[e(" Flat ")]),_:1}),a(f,{modelValue:S(b),"onUpdate:modelValue":s[9]||(s[9]=d=>p(b)?b.value=d:null),location:"bottom start",variant:"flat",color:"error"},{default:t(()=>[e(" Oat cake caramels sesame snaps candy. ")]),_:1},8,["modelValue"])]))}}),ba={class:"demo-space-x"},ua=_({__name:"DemoSnackbarPosition",setup(m){const l=V(!1),c=V(!1),n=V(!1),i=V(!1),b=V(!1),v=V(!1),s=V(!1),d=V(!1),I=V(!1);return(C,o)=>(x(),y("div",ba,[a(u,{icon:"",variant:"text",onClick:o[0]||(o[0]=r=>c.value=!0)},{default:t(()=>[a(B,{icon:"bx-up-arrow-alt"})]),_:1}),a(f,{modelValue:S(c),"onUpdate:modelValue":o[1]||(o[1]=r=>p(c)?c.value=r:null),location:"top"},{default:t(()=>[e(" I'm a top snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:o[2]||(o[2]=r=>n.value=!0)},{default:t(()=>[a(B,{icon:"mdi-arrow-top-right"})]),_:1}),a(f,{modelValue:S(n),"onUpdate:modelValue":o[3]||(o[3]=r=>p(n)?n.value=r:null),location:"top end"},{default:t(()=>[e(" I'm a top right snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:o[4]||(o[4]=r=>s.value=!0)},{default:t(()=>[a(B,{icon:"bx-right-arrow-alt"})]),_:1}),a(f,{modelValue:S(s),"onUpdate:modelValue":o[5]||(o[5]=r=>p(s)?s.value=r:null),location:"end center"},{default:t(()=>[e(" I'm a center end snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:o[6]||(o[6]=r=>i.value=!0)},{default:t(()=>[a(B,{icon:"mdi-arrow-bottom-right"})]),_:1}),a(f,{modelValue:S(i),"onUpdate:modelValue":o[7]||(o[7]=r=>p(i)?i.value=r:null),location:"bottom end"},{default:t(()=>[e(" I'm a bottom end snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:o[8]||(o[8]=r=>b.value=!0)},{default:t(()=>[a(B,{icon:"bx-down-arrow-alt"})]),_:1}),a(f,{modelValue:S(b),"onUpdate:modelValue":o[9]||(o[9]=r=>p(b)?b.value=r:null)},{default:t(()=>[e(" I'm a bottom snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:o[10]||(o[10]=r=>v.value=!0)},{default:t(()=>[a(B,{icon:"mdi-arrow-bottom-left"})]),_:1}),a(f,{modelValue:S(v),"onUpdate:modelValue":o[11]||(o[11]=r=>p(v)?v.value=r:null),location:"bottom start"},{default:t(()=>[e(" I'm a bottom start snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:o[12]||(o[12]=r=>d.value=!0)},{default:t(()=>[a(B,{icon:"bx-left-arrow-alt"})]),_:1}),a(f,{modelValue:S(d),"onUpdate:modelValue":o[13]||(o[13]=r=>p(d)?d.value=r:null),location:"start center"},{default:t(()=>[e(" I'm a center start snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:o[14]||(o[14]=r=>l.value=!0)},{default:t(()=>[a(B,{icon:"mdi-arrow-top-left"})]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":o[15]||(o[15]=r=>p(l)?l.value=r:null),location:"top start"},{default:t(()=>[e(" I'm a top start snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:o[16]||(o[16]=r=>I.value=!0)},{default:t(()=>[a(B,{icon:"mdi-arrow-collapse-all"})]),_:1}),a(f,{modelValue:S(I),"onUpdate:modelValue":o[17]||(o[17]=r=>p(I)?I.value=r:null),location:"center"},{default:t(()=>[e(" I'm a center snackbar. ")]),_:1},8,["modelValue"])]))}}),ka=_({__name:"DemoSnackbarVertical",setup(m){const l=V(!1);return(c,n)=>(x(),y(w,null,[a(u,{onClick:n[0]||(n[0]=i=>l.value=!0)},{default:t(()=>[e(" Open Snackbar ")]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":n[3]||(n[3]=i=>p(l)?l.value=i:null),vertical:""},{actions:t(()=>[a(u,{color:"success",onClick:n[1]||(n[1]=i=>l.value=!1)},{default:t(()=>[e(" Undo ")]),_:1}),a(u,{color:"error",onClick:n[2]||(n[2]=i=>l.value=!1)},{default:t(()=>[e(" Close ")]),_:1})]),default:t(()=>[e(" Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy. ")]),_:1},8,["modelValue"])],64))}}),da=_({__name:"DemoSnackbarTimeout",setup(m){const l=V(!1);return(c,n)=>(x(),y(w,null,[a(u,{onClick:n[0]||(n[0]=i=>l.value=!0)},{default:t(()=>[e(" Open Snackbar ")]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":n[1]||(n[1]=i=>p(l)?l.value=i:null),timeout:2e3},{default:t(()=>[e(" My timeout is set to 2000. ")]),_:1},8,["modelValue"])],64))}}),Va=_({__name:"DemoSnackbarMultiLine",setup(m){const l=V(!1);return(c,n)=>(x(),y(w,null,[a(u,{onClick:n[0]||(n[0]=i=>l.value=!0)},{default:t(()=>[e(" Open Snackbar ")]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":n[2]||(n[2]=i=>p(l)?l.value=i:null),"multi-line":""},{actions:t(()=>[a(u,{onClick:n[1]||(n[1]=i=>l.value=!1)},{default:t(()=>[e(" Close ")]),_:1})]),default:t(()=>[e(" I am a multi-line snackbar. I can have more than one line. This is another line that is quite long. ")]),_:1},8,["modelValue"])],64))}}),ma=_({__name:"DemoSnackbarWithAction",setup(m){const l=V(!1);return(c,n)=>(x(),y(w,null,[a(u,{onClick:n[0]||(n[0]=i=>l.value=!0)},{default:t(()=>[e(" Open Snackbar ")]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":n[2]||(n[2]=i=>p(l)?l.value=i:null)},{actions:t(()=>[a(u,{onClick:n[1]||(n[1]=i=>l.value=!1)},{default:t(()=>[e(" Close ")]),_:1})]),default:t(()=>[e(" Hello, I'm a snackbar with actions. ")]),_:1},8,["modelValue"])],64))}}),Sa=_({__name:"DemoSnackbarBasic",setup(m){const l=V(!1);return(c,n)=>(x(),y(w,null,[a(u,{onClick:n[0]||(n[0]=i=>l.value=!0)},{default:t(()=>[e(" Open Snackbar ")]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":n[1]||(n[1]=i=>p(l)?l.value=i:null)},{default:t(()=>[e(" Hello, I'm a snackbar ")]),_:1},8,["modelValue"])],64))}}),pa={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- SnackBar -->
  <VSnackbar v-model="isSnackbarVisible">
    Hello, I'm a snackbar
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- SnackBar -->
  <VSnackbar v-model="isSnackbarVisible">
    Hello, I'm a snackbar
  </VSnackbar>
</template>
`},fa={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    multi-line
  >
    I am a multi-line snackbar. I can have more than one line. This is another line that is quite long.

    <template #actions>
      <VBtn @click="isSnackbarVisible = false">
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    multi-line
  >
    I am a multi-line snackbar. I can have more than one line. This is another line that is quite long.

    <template #actions>
      <VBtn @click="isSnackbarVisible = false">
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},va={ts:`<script lang="ts" setup>
const isSnackbarTopStartVisible = ref(false)
const isSnackbarTopVisible = ref(false)
const isSnackbarTopEndVisible = ref(false)
const isSnackbarBottomEndVisible = ref(false)
const isSnackbarBottomVisible = ref(false)
const isSnackbarBottomStartVisible = ref(false)
const isSnackbarEndVisible = ref(false)
const isSnackbarStartVisible = ref(false)
const isSnackbarCenteredVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- top  -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopVisible = true"
    >
      <VIcon icon="bx-up-arrow-alt" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopVisible"
      location="top"
    >
      I'm a top snackbar.
    </VSnackbar>

    <!-- top end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopEndVisible = true"
    >
      <VIcon icon="mdi-arrow-top-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopEndVisible"
      location="top end"
    >
      I'm a top right snackbar.
    </VSnackbar>

    <!-- center end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarEndVisible = true"
    >
      <VIcon icon="bx-right-arrow-alt" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarEndVisible"
      location="end center"
    >
      I'm a center end snackbar.
    </VSnackbar>

    <!-- bottom end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomEndVisible = true"
    >
      <VIcon icon="mdi-arrow-bottom-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomEndVisible"
      location="bottom end"
    >
      I'm a bottom end snackbar.
    </VSnackbar>

    <!-- bottom -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomVisible = true"
    >
      <VIcon icon="bx-down-arrow-alt" />
    </VBtn>

    <VSnackbar v-model="isSnackbarBottomVisible">
      I'm a bottom snackbar.
    </VSnackbar>

    <!-- bottom start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomStartVisible = true"
    >
      <VIcon icon="mdi-arrow-bottom-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomStartVisible"
      location="bottom start"
    >
      I'm a bottom start snackbar.
    </VSnackbar>

    <!-- center start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarStartVisible = true"
    >
      <VIcon icon="bx-left-arrow-alt" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarStartVisible"
      location="start center"
    >
      I'm a center start snackbar.
    </VSnackbar>

    <!-- top start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopStartVisible = true"
    >
      <VIcon icon="mdi-arrow-top-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopStartVisible"
      location="top start"
    >
      I'm a top start snackbar.
    </VSnackbar>

    <!-- center -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarCenteredVisible = true"
    >
      <VIcon icon="mdi-arrow-collapse-all" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarCenteredVisible"
      location="center"
    >
      I'm a center snackbar.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isSnackbarTopStartVisible = ref(false)
const isSnackbarTopVisible = ref(false)
const isSnackbarTopEndVisible = ref(false)
const isSnackbarBottomEndVisible = ref(false)
const isSnackbarBottomVisible = ref(false)
const isSnackbarBottomStartVisible = ref(false)
const isSnackbarEndVisible = ref(false)
const isSnackbarStartVisible = ref(false)
const isSnackbarCenteredVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- top  -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopVisible = true"
    >
      <VIcon icon="bx-up-arrow-alt" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopVisible"
      location="top"
    >
      I'm a top snackbar.
    </VSnackbar>

    <!-- top end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopEndVisible = true"
    >
      <VIcon icon="mdi-arrow-top-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopEndVisible"
      location="top end"
    >
      I'm a top right snackbar.
    </VSnackbar>

    <!-- center end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarEndVisible = true"
    >
      <VIcon icon="bx-right-arrow-alt" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarEndVisible"
      location="end center"
    >
      I'm a center end snackbar.
    </VSnackbar>

    <!-- bottom end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomEndVisible = true"
    >
      <VIcon icon="mdi-arrow-bottom-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomEndVisible"
      location="bottom end"
    >
      I'm a bottom end snackbar.
    </VSnackbar>

    <!-- bottom -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomVisible = true"
    >
      <VIcon icon="bx-down-arrow-alt" />
    </VBtn>

    <VSnackbar v-model="isSnackbarBottomVisible">
      I'm a bottom snackbar.
    </VSnackbar>

    <!-- bottom start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomStartVisible = true"
    >
      <VIcon icon="mdi-arrow-bottom-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomStartVisible"
      location="bottom start"
    >
      I'm a bottom start snackbar.
    </VSnackbar>

    <!-- center start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarStartVisible = true"
    >
      <VIcon icon="bx-left-arrow-alt" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarStartVisible"
      location="start center"
    >
      I'm a center start snackbar.
    </VSnackbar>

    <!-- top start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopStartVisible = true"
    >
      <VIcon icon="mdi-arrow-top-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopStartVisible"
      location="top start"
    >
      I'm a top start snackbar.
    </VSnackbar>

    <!-- center -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarCenteredVisible = true"
    >
      <VIcon icon="mdi-arrow-collapse-all" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarCenteredVisible"
      location="center"
    >
      I'm a center snackbar.
    </VSnackbar>
  </div>
</template>
`},Ba={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    :timeout="2000"
  >
    My timeout is set to 2000.
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    :timeout="2000"
  >
    My timeout is set to 2000.
  </VSnackbar>
</template>
`},_a={ts:`<script lang="ts" setup>
const isSnackbarFadeVisible = ref(false)
const isSnackbarScaleVisible = ref(false)
const isSnackbarScrollReverseVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- fade -->
    <VBtn @click="isSnackbarFadeVisible = true">
      fade snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarFadeVisible"
      transition="fade-transition"
      location="top start"
    >
      I'm a fade transition snackbar.
    </VSnackbar>

    <!-- scale -->
    <VBtn @click="isSnackbarScaleVisible = true">
      Scale snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScaleVisible"
      transition="scale-transition"
      location="bottom end"
    >
      I'm a scale transition snackbar.
    </VSnackbar>

    <!-- scroll y reverse -->
    <VBtn @click="isSnackbarScrollReverseVisible = true">
      scroll y reverse
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScrollReverseVisible"
      transition="scroll-y-reverse-transition"
      location="top end"
    >
      I'm a scroll y reverse transition snackbar.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isSnackbarFadeVisible = ref(false)
const isSnackbarScaleVisible = ref(false)
const isSnackbarScrollReverseVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- fade -->
    <VBtn @click="isSnackbarFadeVisible = true">
      fade snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarFadeVisible"
      transition="fade-transition"
      location="top start"
    >
      I'm a fade transition snackbar.
    </VSnackbar>

    <!-- scale -->
    <VBtn @click="isSnackbarScaleVisible = true">
      Scale snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScaleVisible"
      transition="scale-transition"
      location="bottom end"
    >
      I'm a scale transition snackbar.
    </VSnackbar>

    <!-- scroll y reverse -->
    <VBtn @click="isSnackbarScrollReverseVisible = true">
      scroll y reverse
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScrollReverseVisible"
      transition="scroll-y-reverse-transition"
      location="top end"
    >
      I'm a scroll y reverse transition snackbar.
    </VSnackbar>
  </div>
</template>
`},xa={ts:`<script lang="ts" setup>
const isDefaultSnackbarVisible = ref(false)
const isTonalSnackbarVisible = ref(false)
const isTextSnackbarVisible = ref(false)
const isOutlinedSnackbarVisible = ref(false)
const isFlatSnackbarVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- Default toggle btn -->
    <VBtn @click="isDefaultSnackbarVisible = true">
      Default
    </VBtn>

    <!-- Default snackbar -->
    <VSnackbar
      v-model="isDefaultSnackbarVisible"
      location="top start"
    >
      Jelly chocolate bar candy canes apple pie.
    </VSnackbar>

    <!-- tonal toggle btn -->
    <VBtn @click="isTonalSnackbarVisible = true">
      tonal
    </VBtn>

    <!-- tonal snackbar -->
    <VSnackbar
      v-model="isTonalSnackbarVisible"
      location="top end"
      variant="tonal"
    >
      Ice cream cake candy canes.
    </VSnackbar>

    <!-- Text toggle btn -->
    <VBtn @click="isTextSnackbarVisible = true">
      Text
    </VBtn>

    <!-- Text snackbar -->
    <VSnackbar
      v-model="isTextSnackbarVisible"
      location="end center"
      variant="text"
    >
      Pie icing biscuit soufflé liquorice topping.
    </VSnackbar>

    <!-- Outline toggle btn -->
    <VBtn @click="isOutlinedSnackbarVisible = true">
      Outlined
    </VBtn>

    <!-- Outline snackbar -->
    <VSnackbar
      v-model="isOutlinedSnackbarVisible"
      location="bottom end"
      variant="outlined"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>

    <!-- flat toggle btn -->
    <VBtn @click="isFlatSnackbarVisible = true">
      Flat
    </VBtn>

    <!-- flat snackbar -->
    <VSnackbar
      v-model="isFlatSnackbarVisible"
      location="bottom start"
      variant="flat"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isDefaultSnackbarVisible = ref(false)
const isTonalSnackbarVisible = ref(false)
const isTextSnackbarVisible = ref(false)
const isOutlinedSnackbarVisible = ref(false)
const isFlatSnackbarVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- Default toggle btn -->
    <VBtn @click="isDefaultSnackbarVisible = true">
      Default
    </VBtn>

    <!-- Default snackbar -->
    <VSnackbar
      v-model="isDefaultSnackbarVisible"
      location="top start"
    >
      Jelly chocolate bar candy canes apple pie.
    </VSnackbar>

    <!-- tonal toggle btn -->
    <VBtn @click="isTonalSnackbarVisible = true">
      tonal
    </VBtn>

    <!-- tonal snackbar -->
    <VSnackbar
      v-model="isTonalSnackbarVisible"
      location="top end"
      variant="tonal"
    >
      Ice cream cake candy canes.
    </VSnackbar>

    <!-- Text toggle btn -->
    <VBtn @click="isTextSnackbarVisible = true">
      Text
    </VBtn>

    <!-- Text snackbar -->
    <VSnackbar
      v-model="isTextSnackbarVisible"
      location="end center"
      variant="text"
    >
      Pie icing biscuit soufflé liquorice topping.
    </VSnackbar>

    <!-- Outline toggle btn -->
    <VBtn @click="isOutlinedSnackbarVisible = true">
      Outlined
    </VBtn>

    <!-- Outline snackbar -->
    <VSnackbar
      v-model="isOutlinedSnackbarVisible"
      location="bottom end"
      variant="outlined"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>

    <!-- flat toggle btn -->
    <VBtn @click="isFlatSnackbarVisible = true">
      Flat
    </VBtn>

    <!-- flat snackbar -->
    <VSnackbar
      v-model="isFlatSnackbarVisible"
      location="bottom start"
      variant="flat"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>
  </div>
</template>
`},Ia={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <VSnackbar
    v-model="isSnackbarVisible"
    vertical
  >
    Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy.

    <template #actions>
      <VBtn
        color="success"
        @click="isSnackbarVisible = false"
      >
        Undo
      </VBtn>

      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <VSnackbar
    v-model="isSnackbarVisible"
    vertical
  >
    Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy.

    <template #actions>
      <VBtn
        color="success"
        @click="isSnackbarVisible = false"
      >
        Undo
      </VBtn>

      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},ga={ts:`<script lang="ts" setup>
const isSnackbarVisibility = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisibility = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar v-model="isSnackbarVisibility">
    Hello, I'm a snackbar with actions.

    <template #actions>
      <VBtn @click="isSnackbarVisibility = false">
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisibility = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisibility = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar v-model="isSnackbarVisibility">
    Hello, I'm a snackbar with actions.

    <template #actions>
      <VBtn @click="isSnackbarVisibility = false">
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},ya=k("p",null,[e("The "),k("code",null,"v-snackbar"),e(" component is used to display a quick message to a user. Snackbars support positioning, removal delay, and callbacks.")],-1),Ta=k("p",null,[e("Use "),k("code",null,"actions"),e(" slot to add action button. A "),k("code",null,"v-snackbar"),e(" in its simplest form displays a temporary and closable notification to the user.")],-1),wa=k("p",null,[e("The "),k("code",null,"multi-line"),e(" property extends the height of the "),k("code",null,"v-snackbar"),e(" to give you a little more room for content.")],-1),Ca=k("p",null,[e("The "),k("code",null,"timeout"),e(" property lets you customize the delay before the "),k("code",null,"v-snackbar"),e(" is hidden.")],-1),$a=k("p",null,[e("The "),k("code",null,"vertical"),e(" property allows you to stack the content of your "),k("code",null,"v-snackbar"),e(".")],-1),Oa=k("p",null,[e("Use "),k("code",null,"location"),e(" prop to change the position of snackbar.")],-1),Da=k("p",null,[e("Apply different styles to the snackbar using props such as "),k("code",null,"shaped"),e(", "),k("code",null,"rounded"),e(", "),k("code",null,"color"),e(", "),k("code",null,"text"),e(", "),k("code",null,"outlined"),e(", "),k("code",null,"tile"),e(" and more.")],-1),Ua=k("p",null,"Use transition prop to sets the component transition.",-1),za=_({__name:"snackbar",setup(m){return(l,c)=>{const n=Sa,i=la,b=ma,v=Va,s=da,d=ka,I=ua,C=ca,o=sa;return x(),Y(ia,{class:"match-height"},{default:t(()=>[a(g,{cols:"12",md:"6"},{default:t(()=>[a(i,{title:"Basic",code:pa},{default:t(()=>[ya,a(n)]),_:1},8,["code"])]),_:1}),a(g,{cols:"12",md:"6"},{default:t(()=>[a(i,{title:"With Action",code:ga},{default:t(()=>[Ta,a(b)]),_:1},8,["code"])]),_:1}),a(g,{cols:"12",md:"6"},{default:t(()=>[a(i,{title:"Multi Line",code:fa},{default:t(()=>[wa,a(v)]),_:1},8,["code"])]),_:1}),a(g,{cols:"12",md:"6"},{default:t(()=>[a(i,{title:"Timeout",code:Ba},{default:t(()=>[Ca,a(s)]),_:1},8,["code"])]),_:1}),a(g,{cols:"12",md:"6"},{default:t(()=>[a(i,{title:"Vertical",code:Ia},{default:t(()=>[$a,a(d)]),_:1},8,["code"])]),_:1}),a(g,{cols:"12",md:"6"},{default:t(()=>[a(i,{title:"Position",code:va},{default:t(()=>[Oa,a(I)]),_:1},8,["code"])]),_:1}),a(g,{cols:"12",md:"6"},{default:t(()=>[a(i,{title:"Variants",code:xa},{default:t(()=>[Da,a(C)]),_:1},8,["code"])]),_:1}),a(g,{cols:"12",md:"6"},{default:t(()=>[a(i,{title:"Transition",code:_a},{default:t(()=>[Ua,a(o)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{za as default};
