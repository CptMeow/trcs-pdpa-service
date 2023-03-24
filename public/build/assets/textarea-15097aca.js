import{V as n}from"./VTextarea-8e940474.js";import{d as m,k as V,o as i,b as u,q as x,I as w,X as _,w as o,p as e,m as t,R as l}from"./main-51fa4cdd.js";import{a,V as h}from"./VRow-4863209c.js";import{_ as z}from"./AppCardCode.vue_vue_type_style_index_0_lang-a8b7aa9a.js";/* empty css                   */import"./VField-e7393660.js";import"./VInput-354f6456.js";import"./transition-482c18b0.js";import"./easing-6b01f2d6.js";import"./VImg-7efce583.js";import"./forwardRefs-8f7055de.js";import"./VCounter-d16178d6.js";import"./vue.runtime.esm-bundler-23bef556.js";import"./VCard-6736eb7f.js";import"./VAvatar-57fab9ba.js";import"./VDivider-61df3248.js";const $=m({__name:"DemoTextareaValidation",setup(d){const r=V("Hello!"),p=[c=>c.length<=25||"Max 25 characters"];return(c,s)=>(i(),u(n,{modelValue:x(r),"onUpdate:modelValue":s[0]||(s[0]=b=>w(r)?r.value=b:null),label:"Validation",rules:p,rows:"2"},null,8,["modelValue"]))}}),j=m({__name:"DemoTextareaNoResize",setup(d){const r=V("Marshmallow tiramisu pie dessert gingerbread tart caramels marzipan oat cake. Muffin sesame snaps cupcake bonbon cookie tiramisu. Pudding biscuit gingerbread halvah lollipop jelly-o cookie.");return(p,c)=>(i(),u(n,{modelValue:x(r),"onUpdate:modelValue":c[0]||(c[0]=s=>w(r)?r.value=s:null),label:"Text","no-resize":"",rows:"2"},null,8,["modelValue"]))}}),H={};function U(d,r){return i(),u(h,null,{default:o(()=>[e(a,{cols:"12",sm:"6"},{default:o(()=>[e(n,{label:"One row","auto-grow":"",rows:"1","row-height":"15"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:o(()=>[e(n,{"auto-grow":"",label:"Two rows",rows:"2","row-height":"20"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:o(()=>[e(n,{label:"Three rows","auto-grow":"",rows:"3","row-height":"25"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:o(()=>[e(n,{"auto-grow":"",label:"Four rows",rows:"4","row-height":"30"})]),_:1})]),_:1})}const A=_(H,[["render",U]]),M={};function B(d,r){return i(),u(h,null,{default:o(()=>[e(a,{cols:"12"},{default:o(()=>[e(n,{label:"prepend-icon",rows:"1","prepend-icon":"bx-comment"})]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(n,{"append-icon":"bx-comment",label:"append-icon",rows:"1"})]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(n,{"prepend-inner-icon":"bx-comment",label:"prepend-inner-icon",rows:"1"})]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(n,{"append-inner-icon":"bx-comment",label:"append-inner-icon",rows:"1"})]),_:1})]),_:1})}const G=_(M,[["render",B]]),F=m({__name:"DemoTextareaCounter",setup(d){const r=V("Hello!");return(p,c)=>(i(),u(n,{modelValue:x(r),"onUpdate:modelValue":c[0]||(c[0]=s=>w(r)?r.value=s:null),counter:"",label:"Text"},null,8,["modelValue"]))}}),N=m({__name:"DemoTextareaClearable",setup(d){const r=V("This is clearable text.");return(p,c)=>(i(),u(n,{modelValue:x(r),"onUpdate:modelValue":c[0]||(c[0]=s=>w(r)?r.value=s:null),clearable:"","clear-icon":"bx-x-circle",label:"Text"},null,8,["modelValue"]))}}),O={};function P(d,r){return i(),u(n,{autocomplete:"email",label:"Email"})}const S=_(O,[["render",P]]),W={};function E(d,r){return i(),u(h,null,{default:o(()=>[e(a,{cols:"12"},{default:o(()=>[e(n,{disabled:"",label:"Disabled",hint:"Hint text",rows:"2"})]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(n,{readonly:"",rows:"2",label:"Readonly",hint:"Hint text"})]),_:1})]),_:1})}const I=_(W,[["render",E]]),q={};function X(d,r){return i(),u(h,null,{default:o(()=>[e(a,{cols:"12",sm:"6"},{default:o(()=>[e(n,{label:"Default",rows:"2"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:o(()=>[e(n,{label:"Solo",rows:"2",variant:"solo"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:o(()=>[e(n,{label:"Filled",rows:"2",variant:"filled"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:o(()=>[e(n,{label:"Outlined",rows:"2",variant:"outlined"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:o(()=>[e(n,{label:"Underlined",rows:"2",variant:"underlined"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:o(()=>[e(n,{label:"Plain",rows:"2",variant:"plain"})]),_:1})]),_:1})}const Y=_(q,[["render",X]]),J=m({__name:"DemoTextareaAutoGrow",setup(d){const r=V("The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.");return(p,c)=>(i(),u(n,{modelValue:x(r),"onUpdate:modelValue":c[0]||(c[0]=s=>w(r)?r.value=s:null),label:"Auto Grow","auto-grow":""},null,8,["modelValue"]))}}),K={};function L(d,r){return i(),u(n,{label:"Default"})}const Q=_(K,[["render",L]]),Z={ts:`<script setup lang="ts">
const textareaValue = ref('The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    label="Auto Grow"
    auto-grow
  />
</template>
`,js:`<script setup>
const textareaValue = ref('The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    label="Auto Grow"
    auto-grow
  />
</template>
`},ee={ts:`<template>
  <VTextarea label="Default" />
</template>
`,js:`<template>
  <VTextarea label="Default" />
</template>
`},oe={ts:`<template>
  <VTextarea
    autocomplete="email"
    label="Email"
  />
</template>
`,js:`<template>
  <VTextarea
    autocomplete="email"
    label="Email"
  />
</template>
`},te={ts:`<script setup lang="ts">
const textareaValue = ref('This is clearable text.')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    clearable
    clear-icon="bx-x-circle"
    label="Text"
  />
</template>
`,js:`<script setup>
const textareaValue = ref('This is clearable text.')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    clearable
    clear-icon="bx-x-circle"
    label="Text"
  />
</template>
`},le={ts:`<script lang="ts" setup>
const textareaValue = ref('Hello!')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    counter
    label="Text"
  />
</template>
`,js:`<script setup>
const textareaValue = ref('Hello!')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    counter
    label="Text"
  />
</template>
`},ae={ts:`<template>
  <VRow>
    <VCol cols="12">
      <VTextarea
        label="prepend-icon"
        rows="1"
        prepend-icon="bx-comment"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        append-icon="bx-comment"
        label="append-icon"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        prepend-inner-icon="bx-comment"
        label="prepend-inner-icon"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        append-inner-icon="bx-comment"
        label="append-inner-icon"
        rows="1"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <VTextarea
        label="prepend-icon"
        rows="1"
        prepend-icon="bx-comment"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        append-icon="bx-comment"
        label="append-icon"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        prepend-inner-icon="bx-comment"
        label="prepend-inner-icon"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        append-inner-icon="bx-comment"
        label="append-inner-icon"
        rows="1"
      />
    </VCol>
  </VRow>
</template>
`},re={ts:`<script lang="ts" setup>
const value = ref('Marshmallow tiramisu pie dessert gingerbread tart caramels marzipan oat cake. Muffin sesame snaps cupcake bonbon cookie tiramisu. Pudding biscuit gingerbread halvah lollipop jelly-o cookie.')
<\/script>

<template>
  <VTextarea
    v-model="value"
    label="Text"
    no-resize
    rows="2"
  />
</template>
`,js:`<script setup>
const value = ref('Marshmallow tiramisu pie dessert gingerbread tart caramels marzipan oat cake. Muffin sesame snaps cupcake bonbon cookie tiramisu. Pudding biscuit gingerbread halvah lollipop jelly-o cookie.')
<\/script>

<template>
  <VTextarea
    v-model="value"
    label="Text"
    no-resize
    rows="2"
  />
</template>
`},ne={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="One row"
        auto-grow
        rows="1"
        row-height="15"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        auto-grow
        label="Two rows"
        rows="2"
        row-height="20"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Three rows"
        auto-grow
        rows="3"
        row-height="25"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        auto-grow
        label="Four rows"
        rows="4"
        row-height="30"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="One row"
        auto-grow
        rows="1"
        row-height="15"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        auto-grow
        label="Two rows"
        rows="2"
        row-height="20"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Three rows"
        auto-grow
        rows="3"
        row-height="25"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        auto-grow
        label="Four rows"
        rows="4"
        row-height="30"
      />
    </VCol>
  </VRow>
</template>
`},se={ts:`<template>
  <VRow>
    <VCol cols="12">
      <VTextarea
        disabled
        label="Disabled"
        hint="Hint text"
        rows="2"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        readonly
        rows="2"
        label="Readonly"
        hint="Hint text"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <VTextarea
        disabled
        label="Disabled"
        hint="Hint text"
        rows="2"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        readonly
        rows="2"
        label="Readonly"
        hint="Hint text"
      />
    </VCol>
  </VRow>
</template>
`},ce={ts:`<script lang="ts" setup>
const textareaValue = ref('Hello!')
const rules = [(v: string) => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    label="Validation"
    :rules="rules"
    rows="2"
  />
</template>
`,js:`<script setup>
const textareaValue = ref('Hello!')
const rules = [v => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    label="Validation"
    :rules="rules"
    rows="2"
  />
</template>
`},ie={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Default"
        rows="2"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Solo"
        rows="2"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Filled"
        rows="2"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Outlined"
        rows="2"
        variant="outlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Underlined"
        rows="2"
        variant="underlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Plain"
        rows="2"
        variant="plain"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Default"
        rows="2"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Solo"
        rows="2"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Filled"
        rows="2"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Outlined"
        rows="2"
        variant="outlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Underlined"
        rows="2"
        variant="underlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Plain"
        rows="2"
        variant="plain"
      />
    </VCol>
  </VRow>
</template>
`},ue=t("p",null," v-textarea in its simplest form is a multi-line text-field, useful for larger amounts of text. ",-1),de=t("p",null,[l("When using the "),t("code",null,"auto-grow"),l(" prop, textarea's will automatically increase in size when the contained text exceeds its size.")],-1),pe=t("p",null,[l("Use "),t("code",null,"filled"),l(", "),t("code",null,"plain"),l(", "),t("code",null,"outlined"),l(", "),t("code",null,"solo"),l(" and "),t("code",null,"underlined"),l(" option of "),t("code",null,"variant"),l(" prop to change the look of file input.")],-1),me=t("p",null,[l("Use "),t("code",null,"disabled"),l(" and "),t("code",null,"readonly"),l(" prop to change the state of textarea.")],-1),_e=t("p",null,[l(" The "),t("code",null,"autocomplete"),l(" prop gives you the option to enable the browser to predict user input. ")],-1),Ve=t("p",null,[l("You can clear the text from a "),t("code",null,"v-textarea"),l(" by using the "),t("code",null,"clearable"),l(" prop, and customize the icon used with the "),t("code",null,"clearable-icon"),l(" prop.")],-1),xe=t("p",null,[l(" The "),t("code",null,"counter"),l(" prop informs the user of a character limit for the "),t("code",null,"v-textarea"),l(". ")],-1),we=t("p",null,[l("The "),t("code",null,"append-icon"),l(", "),t("code",null,"prepend-icon"),l(", "),t("code",null,"append-inner-icon"),l(" and "),t("code",null,"prepend-inner-icon"),l(" props help add context to v-textarea.")],-1),he=t("p",null,[l("The "),t("code",null,"rows"),l(" prop allows you to define how many rows the textarea has, when combined with the "),t("code",null,"row-height"),l(" prop you can further customize your rows by defining their height.")],-1),be=t("p",null,[t("code",null,"v-textarea"),l("'s have the option to remain the same size regardless of their content's size, using the "),t("code",null,"no-resize"),l(" prop.")],-1),fe=t("p",null,[l("Use "),t("code",null,"rules"),l(" prop to validate the textarea.")],-1),Ge=m({__name:"textarea",setup(d){return(r,p)=>{const c=Q,s=z,b=J,f=Y,T=I,C=S,g=N,v=F,R=G,D=A,y=j,k=$;return i(),u(h,{class:"match-height"},{default:o(()=>[e(a,{cols:"12",md:"6"},{default:o(()=>[e(s,{title:"Basic",code:ee},{default:o(()=>[ue,e(c)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(s,{title:"Auto Grow",code:Z},{default:o(()=>[de,e(b)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(s,{title:"Variant",code:ie},{default:o(()=>[pe,e(f)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(s,{title:"States",code:se},{default:o(()=>[me,e(T)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(s,{title:"Browser autocomplete",code:oe},{default:o(()=>[_e,e(C)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(s,{title:"Clearable",code:te},{default:o(()=>[Ve,e(g)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(s,{title:"Counter",code:le},{default:o(()=>[xe,e(v)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(s,{title:"Icons",code:ae},{default:o(()=>[we,e(R)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(s,{title:"Rows",code:ne},{default:o(()=>[he,e(D)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(s,{title:"No resize",code:re},{default:o(()=>[be,e(y)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(s,{title:"Validation",code:ce},{default:o(()=>[fe,e(k)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Ge as default};
