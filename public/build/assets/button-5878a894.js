import{d as f,k as x,o as i,b as v,w as o,p as t,H as e,q as p,I as D,dE as z,X as d,c as u,R as n,C as B,m as a,a7 as N,a8 as R}from"./main-51fa4cdd.js";import{a as s,V as b}from"./VRow-4863209c.js";import{_ as W}from"./AppCardCode.vue_vue_type_style_index_0_lang-a8b7aa9a.js";import{V as g}from"./VAlert-ea301a1d.js";import"./vue.runtime.esm-bundler-23bef556.js";import"./VCard-6736eb7f.js";import"./VAvatar-57fab9ba.js";import"./VImg-7efce583.js";import"./transition-482c18b0.js";import"./VDivider-61df3248.js";const U=f({__name:"DemoButtonGroup",setup(c){const l=x(1);return(V,_)=>(i(),v(z,{modelValue:p(l),"onUpdate:modelValue":_[0]||(_[0]=r=>D(l)?l.value=r:null),divided:"",color:"primary",variant:"outlined"},{default:o(()=>[t(e,{icon:"bx-align-left"}),t(e,{icon:"bx-align-middle"}),t(e,{icon:"bx-align-right"}),t(e,{icon:"bx-align-justify"})]),_:1},8,["modelValue"]))}}),O={},A={class:"demo-space-x"};function q(c,l){return i(),u("div",A,[t(e,{href:"https://themeselection.com/"},{default:o(()=>[n(" String Literal ")]),_:1}),t(e,{href:"https://themeselection.com/",target:"_blank",rel:"noopener noreferrer"},{default:o(()=>[n(" Open New Tab ")]),_:1})])}const G=d(O,[["render",q]]),Q={},Y={class:"demo-space-x"};function F(c,l){return i(),u("div",Y,[t(e,{to:"alert"},{default:o(()=>[n(" String Literal ")]),_:1}),t(e,{color:"warning",to:{path:"alert"}},{default:o(()=>[n(" Object Path ")]),_:1}),t(e,{color:"success",to:{name:"components-alert"}},{default:o(()=>[n(" Named Router ")]),_:1}),t(e,{color:"secondary",to:{path:"alert",query:{plan:"private"}}},{default:o(()=>[n(" With Query ")]),_:1})])}const H=d(Q,[["render",F]]),X=c=>(N("data-v-2a138241"),c=c(),R(),c),J={class:"demo-space-x"},K=X(()=>a("span",null,"Loading...",-1)),M={class:"custom-loader"},Z=f({__name:"DemoButtonLoaders",setup(c){const l=x([]),V=_=>{l.value[_]=!0,setTimeout(()=>{l.value[_]=!1},3e3)};return(_,r)=>(i(),u("div",J,[t(e,{loading:p(l)[0],disabled:p(l)[0],color:"primary",onClick:r[0]||(r[0]=m=>V(0))},{default:o(()=>[n(" Accept Terms ")]),_:1},8,["loading","disabled"]),t(e,{loading:p(l)[1],disabled:p(l)[1],color:"secondary",onClick:r[1]||(r[1]=m=>V(1))},{default:o(()=>[n(" Upload "),t(B,{end:"",icon:"bx-cloud-upload"})]),_:1},8,["loading","disabled"]),t(e,{loading:p(l)[2],disabled:p(l)[2],color:"success",onClick:r[2]||(r[2]=m=>V(2))},{loader:o(()=>[K]),default:o(()=>[n(" Loader slot ")]),_:1},8,["loading","disabled"]),t(e,{loading:p(l)[3],disabled:p(l)[3],color:"info",onClick:r[3]||(r[3]=m=>V(3))},{loader:o(()=>[a("span",M,[t(B,{icon:"bx-refresh"})])]),default:o(()=>[n(" Icon Loader ")]),_:1},8,["loading","disabled"]),t(e,{loading:p(l)[4],disabled:p(l)[4],color:"warning",icon:"bx-cloud-upload",onClick:r[4]||(r[4]=m=>V(4))},null,8,["loading","disabled"])]))}});const tt=d(Z,[["__scopeId","data-v-2a138241"]]),ot={};function nt(c,l){return i(),v(b,null,{default:o(()=>[t(s,{cols:"12",sm:"6"},{default:o(()=>[t(e,{block:""},{default:o(()=>[n(" Block Button ")]),_:1})]),_:1}),t(s,{cols:"12",sm:"6"},{default:o(()=>[t(e,{variant:"outlined",block:""},{default:o(()=>[n(" Block Button ")]),_:1})]),_:1})]),_:1})}const et=d(ot,[["render",nt]]),at={},lt={class:"demo-space-x"};function rt(c,l){return i(),u("div",lt,[t(e,{size:"x-large"},{default:o(()=>[n(" Extra large Button ")]),_:1}),t(e,{color:"success",size:"large"},{default:o(()=>[n(" Large Button ")]),_:1}),t(e,{color:"info"},{default:o(()=>[n(" Normal Button ")]),_:1}),t(e,{size:"small",color:"warning"},{default:o(()=>[n(" Small Button ")]),_:1}),t(e,{size:"x-small",color:"error"},{default:o(()=>[n(" Extra small Button ")]),_:1})])}const ct=d(at,[["render",rt]]),st={},it={class:"demo-space-x"};function dt(c,l){return i(),u("div",it,[t(e,{icon:"bx-briefcase",variant:"text"}),t(e,{icon:"bx-user-plus",variant:"text",color:"secondary"}),t(e,{icon:"bx-search",variant:"text",color:"success"}),t(e,{icon:"bx-like",variant:"text",color:"info"}),t(e,{icon:"bx-star",variant:"text",color:"warning"}),t(e,{icon:"bx-heart",variant:"text",color:"error"})])}const ut=d(st,[["render",dt]]),pt={},_t={class:"demo-space-x"};function Bt(c,l){return i(),u("div",_t,[t(e,null,{default:o(()=>[n(" Accept "),t(B,{end:"",icon:"bx-check-circle"})]),_:1}),t(e,{color:"secondary"},{default:o(()=>[t(B,{start:"",icon:"bx-minus-circle"}),n("Cancel ")]),_:1}),t(e,{color:"success"},{default:o(()=>[n(" Upload "),t(B,{end:"",icon:"bx-cloud-upload"})]),_:1}),t(e,{color:"info"},{default:o(()=>[t(B,{start:"",icon:"bx-left-arrow-alt"}),n(" Back ")]),_:1}),t(e,{color:"warning"},{default:o(()=>[t(B,{icon:"bx-wrench"})]),_:1}),t(e,{color:"error"},{default:o(()=>[t(B,{icon:"bx-block"})]),_:1})])}const Vt=d(pt,[["render",Bt]]),mt={},ft={class:"demo-space-x"};function vt(c,l){return i(),u("div",ft,[t(e,{variant:"tonal"},{default:o(()=>[n(" Primary ")]),_:1}),t(e,{color:"secondary",variant:"tonal"},{default:o(()=>[n(" Secondary ")]),_:1}),t(e,{color:"success",variant:"tonal"},{default:o(()=>[n(" Success ")]),_:1}),t(e,{color:"info",variant:"tonal"},{default:o(()=>[n(" Info ")]),_:1}),t(e,{color:"warning",variant:"tonal"},{default:o(()=>[n(" warning ")]),_:1}),t(e,{color:"error",variant:"tonal"},{default:o(()=>[n(" error ")]),_:1})])}const gt=d(mt,[["render",vt]]),xt={},bt={class:"demo-space-x"};function ht(c,l){return i(),u("div",bt,[t(e,{variant:"plain"},{default:o(()=>[n(" Primary ")]),_:1}),t(e,{color:"secondary",variant:"plain"},{default:o(()=>[n(" Secondary ")]),_:1}),t(e,{color:"success",variant:"plain"},{default:o(()=>[n(" Success ")]),_:1}),t(e,{color:"info",variant:"plain"},{default:o(()=>[n(" Info ")]),_:1}),t(e,{color:"warning",variant:"plain"},{default:o(()=>[n(" warning ")]),_:1}),t(e,{color:"error",variant:"plain"},{default:o(()=>[n(" error ")]),_:1})])}const yt=d(xt,[["render",ht]]),wt={},kt={class:"demo-space-x"};function St(c,l){return i(),u("div",kt,[t(e,{variant:"text"},{default:o(()=>[n(" Primary ")]),_:1}),t(e,{variant:"text",color:"secondary"},{default:o(()=>[n(" Secondary ")]),_:1}),t(e,{variant:"text",color:"success"},{default:o(()=>[n(" Success ")]),_:1}),t(e,{variant:"text",color:"info"},{default:o(()=>[n(" Info ")]),_:1}),t(e,{variant:"text",color:"warning"},{default:o(()=>[n(" Warning ")]),_:1}),t(e,{variant:"text",color:"error"},{default:o(()=>[n(" Error ")]),_:1})])}const It=d(wt,[["render",St]]),$t={},Tt={class:"demo-space-x"};function Et(c,l){return i(),u("div",Tt,[t(e,null,{default:o(()=>[n(" Normal Button ")]),_:1}),t(e,{rounded:"lg",color:"secondary"},{default:o(()=>[n(" Rounded Button ")]),_:1}),t(e,{rounded:0,color:"success"},{default:o(()=>[n(" Tile Button ")]),_:1}),t(e,{rounded:"pill",color:"info"},{default:o(()=>[n(" Pill Button ")]),_:1})])}const Ct=d($t,[["render",Et]]),Lt={},Pt={class:"demo-space-x"};function jt(c,l){return i(),u("div",Pt,[t(e,{variant:"flat"},{default:o(()=>[n(" primary ")]),_:1}),t(e,{variant:"flat",color:"secondary"},{default:o(()=>[n(" Secondary ")]),_:1}),t(e,{variant:"flat",color:"success"},{default:o(()=>[n(" Success ")]),_:1}),t(e,{variant:"flat",color:"info"},{default:o(()=>[n(" Info ")]),_:1}),t(e,{variant:"flat",color:"warning"},{default:o(()=>[n(" Warning ")]),_:1}),t(e,{variant:"flat",color:"error"},{default:o(()=>[n(" Error ")]),_:1})])}const Dt=d(Lt,[["render",jt]]),zt={},Nt={class:"demo-space-x"};function Rt(c,l){return i(),u("div",Nt,[t(e,{variant:"outlined"},{default:o(()=>[n(" Primary ")]),_:1}),t(e,{variant:"outlined",color:"secondary"},{default:o(()=>[n(" Secondary ")]),_:1}),t(e,{variant:"outlined",color:"success"},{default:o(()=>[n(" Success ")]),_:1}),t(e,{variant:"outlined",color:"info"},{default:o(()=>[n(" Info ")]),_:1}),t(e,{variant:"outlined",color:"warning"},{default:o(()=>[n(" Warning ")]),_:1}),t(e,{variant:"outlined",color:"error"},{default:o(()=>[n(" Error ")]),_:1})])}const Wt=d(zt,[["render",Rt]]),Ut={},Ot={class:"demo-space-x"};function At(c,l){return i(),u("div",Ot,[t(e,{color:"primary"},{default:o(()=>[n(" Primary ")]),_:1}),t(e,{color:"secondary"},{default:o(()=>[n(" Secondary ")]),_:1}),t(e,{color:"success"},{default:o(()=>[n(" Success ")]),_:1}),t(e,{color:"info"},{default:o(()=>[n(" Info ")]),_:1}),t(e,{color:"warning"},{default:o(()=>[n(" Warning ")]),_:1}),t(e,{color:"error"},{default:o(()=>[n(" Error ")]),_:1})])}const qt=d(Ut,[["render",At]]),Gt={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VBtn block>
        Block Button
      </VBtn>
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VBtn
        variant="outlined"
        block
      >
        Block Button
      </VBtn>
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VBtn block>
        Block Button
      </VBtn>
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VBtn
        variant="outlined"
        block
      >
        Block Button
      </VBtn>
    </VCol>
  </VRow>
</template>
`},Qt={ts:`<template>
  <div class="demo-space-x">
    <VBtn color="primary">
      Primary
    </VBtn>
    <VBtn color="secondary">
      Secondary
    </VBtn>
    <VBtn color="success">
      Success
    </VBtn>
    <VBtn color="info">
      Info
    </VBtn>
    <VBtn color="warning">
      Warning
    </VBtn>
    <VBtn color="error">
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn color="primary">
      Primary
    </VBtn>
    <VBtn color="secondary">
      Secondary
    </VBtn>
    <VBtn color="success">
      Success
    </VBtn>
    <VBtn color="info">
      Info
    </VBtn>
    <VBtn color="warning">
      Warning
    </VBtn>
    <VBtn color="error">
      Error
    </VBtn>
  </div>
</template>
`},Yt={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="flat">
      primary
    </VBtn>

    <VBtn
      variant="flat"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="flat"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="flat"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="flat"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="flat"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="flat">
      primary
    </VBtn>

    <VBtn
      variant="flat"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="flat"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="flat"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="flat"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="flat"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`},Ft={ts:`<script lang="ts" setup>
const toggleExclusive = ref(1)
<\/script>

<template>
  <VBtnToggle
    v-model="toggleExclusive"
    divided
    color="primary"
    variant="outlined"
  >
    <VBtn icon="bx-align-left" />
    <VBtn icon="bx-align-middle" />
    <VBtn icon="bx-align-right" />
    <VBtn icon="bx-align-justify" />
  </VBtnToggle>
</template>
`,js:`<script setup>
const toggleExclusive = ref(1)
<\/script>

<template>
  <VBtnToggle
    v-model="toggleExclusive"
    divided
    color="primary"
    variant="outlined"
  >
    <VBtn icon="bx-align-left" />
    <VBtn icon="bx-align-middle" />
    <VBtn icon="bx-align-right" />
    <VBtn icon="bx-align-justify" />
  </VBtnToggle>
</template>
`},Ht={ts:`<template>
  <div class="demo-space-x">
    <VBtn>
      Accept
      <VIcon
        end
        icon="bx-check-circle"
      />
    </VBtn>

    <VBtn color="secondary">
      <VIcon
        start
        icon="bx-minus-circle"
      />Cancel
    </VBtn>

    <VBtn color="success">
      Upload
      <VIcon
        end
        icon="bx-cloud-upload"
      />
    </VBtn>

    <VBtn color="info">
      <VIcon
        start
        icon="bx-left-arrow-alt"
      />
      Back
    </VBtn>

    <VBtn color="warning">
      <VIcon icon="bx-wrench" />
    </VBtn>

    <VBtn color="error">
      <VIcon icon="bx-block" />
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn>
      Accept
      <VIcon
        end
        icon="bx-check-circle"
      />
    </VBtn>

    <VBtn color="secondary">
      <VIcon
        start
        icon="bx-minus-circle"
      />Cancel
    </VBtn>

    <VBtn color="success">
      Upload
      <VIcon
        end
        icon="bx-cloud-upload"
      />
    </VBtn>

    <VBtn color="info">
      <VIcon
        start
        icon="bx-left-arrow-alt"
      />
      Back
    </VBtn>

    <VBtn color="warning">
      <VIcon icon="bx-wrench" />
    </VBtn>

    <VBtn color="error">
      <VIcon icon="bx-block" />
    </VBtn>
  </div>
</template>
`},Xt={ts:`<template>
  <div class="demo-space-x">
    <VBtn
      icon="bx-briefcase"
      variant="text"
    />

    <VBtn
      icon="bx-user-plus"
      variant="text"
      color="secondary"
    />

    <VBtn
      icon="bx-search"
      variant="text"
      color="success"
    />

    <VBtn
      icon="bx-like"
      variant="text"
      color="info"
    />

    <VBtn
      icon="bx-star"
      variant="text"
      color="warning"
    />

    <VBtn
      icon="bx-heart"
      variant="text"
      color="error"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn
      icon="bx-briefcase"
      variant="text"
    />

    <VBtn
      icon="bx-user-plus"
      variant="text"
      color="secondary"
    />

    <VBtn
      icon="bx-search"
      variant="text"
      color="success"
    />

    <VBtn
      icon="bx-like"
      variant="text"
      color="info"
    />

    <VBtn
      icon="bx-star"
      variant="text"
      color="warning"
    />

    <VBtn
      icon="bx-heart"
      variant="text"
      color="error"
    />
  </div>
</template>
`},Jt={ts:`<template>
  <div class="demo-space-x">
    <VBtn href="https://themeselection.com/">
      String Literal
    </VBtn>

    <VBtn
      href="https://themeselection.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open New Tab
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn href="https://themeselection.com/">
      String Literal
    </VBtn>

    <VBtn
      href="https://themeselection.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open New Tab
    </VBtn>
  </div>
</template>
`},Kt={ts:`<script lang="ts" setup>
const loadings = ref<boolean[]>([])

const load = (i: number) => {
  loadings.value[i] = true
  setTimeout(() => {
    loadings.value[i] = false
  }, 3000)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn
      :loading="loadings[0]"
      :disabled="loadings[0]"
      color="primary"
      @click="load(0)"
    >
      Accept Terms
    </VBtn>

    <VBtn
      :loading="loadings[1]"
      :disabled="loadings[1]"
      color="secondary"
      @click="load(1)"
    >
      Upload
      <VIcon
        end
        icon="bx-cloud-upload"
      />
    </VBtn>

    <VBtn
      :loading="loadings[2]"
      :disabled="loadings[2]"
      color="success"
      @click="load(2)"
    >
      Loader slot
      <template #loader>
        <span>Loading...</span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[3]"
      :disabled="loadings[3]"
      color="info"
      @click="load(3)"
    >
      Icon Loader
      <template #loader>
        <span class="custom-loader">
          <VIcon icon="bx-refresh" />
        </span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[4]"
      :disabled="loadings[4]"
      color="warning"
      icon="bx-cloud-upload"
      @click="load(4)"
    />
  </div>
</template>

  <style lang="scss" scoped>
  .custom-loader {
    display: flex;
    animation: loader 1s infinite;
  }

  @keyframes loader {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
  </style>
`,js:`<script setup>
const loadings = ref([])

const load = i => {
  loadings.value[i] = true
  setTimeout(() => {
    loadings.value[i] = false
  }, 3000)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn
      :loading="loadings[0]"
      :disabled="loadings[0]"
      color="primary"
      @click="load(0)"
    >
      Accept Terms
    </VBtn>

    <VBtn
      :loading="loadings[1]"
      :disabled="loadings[1]"
      color="secondary"
      @click="load(1)"
    >
      Upload
      <VIcon
        end
        icon="bx-cloud-upload"
      />
    </VBtn>

    <VBtn
      :loading="loadings[2]"
      :disabled="loadings[2]"
      color="success"
      @click="load(2)"
    >
      Loader slot
      <template #loader>
        <span>Loading...</span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[3]"
      :disabled="loadings[3]"
      color="info"
      @click="load(3)"
    >
      Icon Loader
      <template #loader>
        <span class="custom-loader">
          <VIcon icon="bx-refresh" />
        </span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[4]"
      :disabled="loadings[4]"
      color="warning"
      icon="bx-cloud-upload"
      @click="load(4)"
    />
  </div>
</template>

  <style lang="scss" scoped>
  .custom-loader {
    display: flex;
    animation: loader 1s infinite;
  }

  @keyframes loader {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
  </style>
`},Mt={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="outlined">
      Primary
    </VBtn>
    <VBtn
      variant="outlined"
      color="secondary"
    >
      Secondary
    </VBtn>
    <VBtn
      variant="outlined"
      color="success"
    >
      Success
    </VBtn>
    <VBtn
      variant="outlined"
      color="info"
    >
      Info
    </VBtn>
    <VBtn
      variant="outlined"
      color="warning"
    >
      Warning
    </VBtn>
    <VBtn
      variant="outlined"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="outlined">
      Primary
    </VBtn>
    <VBtn
      variant="outlined"
      color="secondary"
    >
      Secondary
    </VBtn>
    <VBtn
      variant="outlined"
      color="success"
    >
      Success
    </VBtn>
    <VBtn
      variant="outlined"
      color="info"
    >
      Info
    </VBtn>
    <VBtn
      variant="outlined"
      color="warning"
    >
      Warning
    </VBtn>
    <VBtn
      variant="outlined"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`},Zt={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="plain">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="plain"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="plain"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="plain"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="plain"
    >
      warning
    </VBtn>

    <VBtn
      color="error"
      variant="plain"
    >
      error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="plain">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="plain"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="plain"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="plain"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="plain"
    >
      warning
    </VBtn>

    <VBtn
      color="error"
      variant="plain"
    >
      error
    </VBtn>
  </div>
</template>
`},to={ts:`<template>
  <div class="demo-space-x">
    <VBtn>
      Normal Button
    </VBtn>
    <VBtn
      rounded="lg"
      color="secondary"
    >
      Rounded Button
    </VBtn>
    <VBtn
      :rounded="0"
      color="success"
    >
      Tile Button
    </VBtn>
    <VBtn
      rounded="pill"
      color="info"
    >
      Pill Button
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn>
      Normal Button
    </VBtn>
    <VBtn
      rounded="lg"
      color="secondary"
    >
      Rounded Button
    </VBtn>
    <VBtn
      :rounded="0"
      color="success"
    >
      Tile Button
    </VBtn>
    <VBtn
      rounded="pill"
      color="info"
    >
      Pill Button
    </VBtn>
  </div>
</template>
`},oo={ts:`<template>
  <div class="demo-space-x">
    <VBtn to="alert">
      String Literal
    </VBtn>

    <VBtn
      color="warning"
      :to="{ path: 'alert' }"
    >
      Object Path
    </VBtn>

    <VBtn
      color="success"
      :to="{ name: 'components-alert' }"
    >
      Named Router
    </VBtn>

    <VBtn
      color="secondary"
      :to="{ path: 'alert', query: { plan: 'private' } }"
    >
      With Query
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn to="alert">
      String Literal
    </VBtn>

    <VBtn
      color="warning"
      :to="{ path: 'alert' }"
    >
      Object Path
    </VBtn>

    <VBtn
      color="success"
      :to="{ name: 'components-alert' }"
    >
      Named Router
    </VBtn>

    <VBtn
      color="secondary"
      :to="{ path: 'alert', query: { plan: 'private' } }"
    >
      With Query
    </VBtn>
  </div>
</template>
`},no={ts:`<template>
  <div class="demo-space-x">
    <VBtn size="x-large">
      Extra large Button
    </VBtn>

    <VBtn
      color="success"
      size="large"
    >
      Large Button
    </VBtn>

    <VBtn color="info">
      Normal Button
    </VBtn>

    <VBtn
      size="small"
      color="warning"
    >
      Small Button
    </VBtn>

    <VBtn
      size="x-small"
      color="error"
    >
      Extra small Button
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn size="x-large">
      Extra large Button
    </VBtn>

    <VBtn
      color="success"
      size="large"
    >
      Large Button
    </VBtn>

    <VBtn color="info">
      Normal Button
    </VBtn>

    <VBtn
      size="small"
      color="warning"
    >
      Small Button
    </VBtn>

    <VBtn
      size="x-small"
      color="error"
    >
      Extra small Button
    </VBtn>
  </div>
</template>
`},eo={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="text">
      Primary
    </VBtn>

    <VBtn
      variant="text"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="text"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="text"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="text"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="text"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="text">
      Primary
    </VBtn>

    <VBtn
      variant="text"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="text"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="text"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="text"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="text"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`},ao={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="tonal">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="tonal"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="tonal"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="tonal"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="tonal"
    >
      warning
    </VBtn>

    <VBtn
      color="error"
      variant="tonal"
    >
      error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="tonal">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="tonal"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="tonal"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="tonal"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="tonal"
    >
      warning
    </VBtn>

    <VBtn
      color="error"
      variant="tonal"
    >
      error
    </VBtn>
  </div>
</template>
`},lo=a("p",null,[n("The "),a("code",null,"color"),n(" prop is used to change the background color of the alert.")],-1),ro=a("p",null,[n("The "),a("code",null,"outlined"),n(" variant option is used to create outlined buttons.")],-1),co=a("p",null,[n("The "),a("code",null,"flat"),n(" buttons still maintain their background color, but have no box shadow.")],-1),so=a("p",null,[n("Use the "),a("code",null,"rounded"),n(" prop to control the border radius of buttons.")],-1),io=a("p",null,[n("Use "),a("code",null,"text"),n(" variant option to create text button. Text buttons have no box shadow and no background.")],-1),uo=a("p",null,[n("Use "),a("code",null,"plain"),n(" variant option to a create a plain button. Plain buttons have a lower baseline opacity that reacts to hover and focus.")],-1),po=a("p",null,[n("Use "),a("code",null,"tonal"),n(" variant option to a create a light background button.")],-1),_o=a("p",null,"Icons can be used inside of buttons to add emphasis to the action.",-1),Bo=a("p",null,[n("Use "),a("code",null,"icon"),n(" prop to create button with icon only. This property makes the button rounded and applies the text prop styles.")],-1),Vo=a("p",null,"Buttons can be given different sizing options to fit a multitude of scenarios.",-1),mo=a("p",null,[n("The "),a("code",null,"block"),n(" prop allows buttons to extend the full available width.")],-1),fo=a("p",null,[n("Using the "),a("code",null,"loading"),n(" prop, you can notify a user that there is processing taking place. The default behavior is to use a "),a("code",null,"v-progress-circular"),n(" component but this can be customized.")],-1),vo=a("p",null,[n("Use "),a("code",null,"to"),n(" prop to create button with router support.")],-1),go=a("p",null,[n("Designates that the component is a link. This is automatic when using the "),a("code",null,"href"),n(" or "),a("code",null,"to"),n(" prop.")],-1),xo=a("p",null,[n(" Wrap buttons with the "),a("code",null,"v-btn-toggle"),n(" component to create a group button. You can add a visual divider between buttons with the "),a("code",null,"divided"),n(" prop. ")],-1),Co=f({__name:"button",setup(c){return(l,V)=>{const _=qt,r=W,m=Wt,h=Dt,y=Ct,w=It,k=yt,S=gt,I=Vt,$=ut,T=ct,E=et,C=tt,L=H,P=G,j=U;return i(),v(b,null,{default:o(()=>[t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Colors",code:Qt},{default:o(()=>[lo,t(_)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Outlined",code:Mt},{default:o(()=>[ro,t(m)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Flat",code:Yt},{default:o(()=>[co,t(h)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Rounded",code:to},{default:o(()=>[so,t(y)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Text",code:eo},{default:o(()=>[io,t(w)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Plain",code:Zt},{default:o(()=>[uo,t(k)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Tonal",code:ao},{default:o(()=>[po,t(S)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Icon",code:Ht},{default:o(()=>[_o,t(I)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Icon Only",code:Xt},{default:o(()=>[Bo,t($)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Sizing",code:no},{default:o(()=>[Vo,t(T)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Block",code:Gt},{default:o(()=>[mo,t(E)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Loaders",code:Kt},{default:o(()=>[fo,t(C)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Router",code:oo},{default:o(()=>[vo,t(g,{color:"warning",variant:"tonal",class:"mb-4"},{default:o(()=>[n(" Note: On click of the link button, You will get redirected to another page. ")]),_:1}),t(L)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Link",code:Jt},{default:o(()=>[go,t(g,{color:"warning",variant:"tonal",class:"mb-4"},{default:o(()=>[n(" Note: On click of the link button, You will get redirected to another page. ")]),_:1}),t(P)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Group",code:Ft},{default:o(()=>[xo,t(j)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Co as default};
