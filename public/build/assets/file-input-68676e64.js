import{m as se,f as ce,V as ue}from"./VField-e7393660.js";import{m as pe,f as re,a as de}from"./VInput-354f6456.js";import{f as me}from"./forwardRefs-8f7055de.js";import{au as _e,aH as fe,aQ as he,aE as ve,B as I,dG as E,k as g,z as O,aA as Fe,aF as Ve,p as e,$ as N,F as P,bB as H,ae as be,d as A,o as p,b as r,q as L,I as Y,w as o,c as ge,a as Ie,R as t,x as ye,X as F,m as n}from"./main-51fa4cdd.js";import{V as q}from"./VChip-d98b0377.js";import{V as Ce}from"./VCounter-d16178d6.js";import{a as c,V as G}from"./VRow-4863209c.js";import{_ as we}from"./AppCardCode.vue_vue_type_style_index_0_lang-a8b7aa9a.js";import"./easing-6b01f2d6.js";import"./transition-482c18b0.js";import"./VAvatar-57fab9ba.js";import"./VImg-7efce583.js";import"./vue.runtime.esm-bundler-23bef556.js";import"./VCard-6736eb7f.js";import"./VDivider-61df3248.js";const u=_e()({name:"VFileInput",inheritAttrs:!1,props:{chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,hint:String,persistentHint:Boolean,placeholder:String,showSize:{type:[Boolean,Number],default:!1,validator:l=>typeof l=="boolean"||[1e3,1024].includes(l)},...pe({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:l=>fe(l).every(i=>i!=null&&typeof i=="object")},...se({clearable:!0})},emits:{"click:control":l=>!0,"mousedown:control":l=>!0,"update:modelValue":l=>!0},setup(l,i){let{attrs:_,emit:f,slots:a}=i;const{t:h}=he(),m=ve(l,"modelValue"),k=I(()=>typeof l.showSize!="boolean"?l.showSize:void 0),S=I(()=>(m.value??[]).reduce((s,d)=>{let{size:C=0}=d;return s+C},0)),x=I(()=>E(S.value,k.value)),y=I(()=>(m.value??[]).map(s=>{const{name:d="",size:C=0}=s;return l.showSize?`${d} (${E(C,k.value)})`:d})),j=I(()=>{var d;const s=((d=m.value)==null?void 0:d.length)??0;return l.showSize?h(l.counterSizeString,s,x.value):h(l.counterString,s)}),$=g(),B=g(),V=g(!1),v=g(),Q=I(()=>l.messages.length?l.messages:l.persistentHint?l.hint:"");function R(){var s;v.value!==document.activeElement&&((s=v.value)==null||s.focus()),V.value||(V.value=!0)}function W(s){H(l["onClick:prepend"],s),U(s)}function X(s){f("mousedown:control",s)}function U(s){var d;(d=v.value)==null||d.click(),f("click:control",s)}function J(s){s.stopPropagation(),R(),be(()=>{m.value=[],H(l["onClick:clear"],s)})}return O(m,s=>{(!Array.isArray(s)||!s.length)&&v.value&&(v.value.value="")}),Fe(()=>{const s=!!(a.counter||l.counter),d=!!(s||a.details),[C,K]=Ve(_),[{modelValue:zl,...Z}]=re(l),[ee]=ce(l);return e(de,N({ref:$,modelValue:m.value,"onUpdate:modelValue":w=>m.value=w,class:"v-file-input","onClick:prepend":W,"onClick:append":l["onClick:append"]},C,Z,{focused:V.value,messages:Q.value}),{...a,default:w=>{let{id:D,isDisabled:z,isDirty:M,isReadonly:le,isValid:te}=w;return e(ue,N({ref:B,"prepend-icon":l.prependIcon,onMousedown:X,onClick:U,"onClick:clear":J,"onClick:prependInner":l["onClick:prependInner"],"onClick:appendInner":l["onClick:appendInner"]},ee,{id:D.value,active:M.value||V.value,dirty:M.value,disabled:z.value,focused:V.value,error:te.value===!1}),{...a,default:ne=>{var T;let{props:{class:oe,...ae}}=ne;return e(P,null,[e("input",N({ref:v,type:"file",readonly:le.value,disabled:z.value,multiple:l.multiple,name:l.name,onClick:b=>{b.stopPropagation(),R()},onChange:b=>{if(!b.target)return;const ie=b.target;m.value=[...ie.files??[]]},onFocus:R,onBlur:()=>V.value=!1},ae,K),null),e("div",{class:oe},[!!((T=m.value)!=null&&T.length)&&(a.selection?a.selection({fileNames:y.value,totalBytes:S.value,totalBytesReadable:x.value}):l.chips?y.value.map(b=>e(q,{key:b,size:"small",color:l.color},{default:()=>[b]})):y.value.join(", "))])])}})},details:d?w=>{var D,z;return e(P,null,[(D=a.details)==null?void 0:D.call(a,w),s&&e(P,null,[e("span",null,null),e(Ce,{active:!!((z=m.value)!=null&&z.length),value:j.value},a.counter)])])}:void 0})}),me({},$,B,v)}}),ze=A({__name:"DemoFileInputLoading",setup(l){const i=g(),_=g(!0);return O(i,()=>{_.value=!i.value[0]}),(f,a)=>(p(),r(u,{modelValue:L(i),"onUpdate:modelValue":a[0]||(a[0]=h=>Y(i)?i.value=h:null),loading:L(_),color:"primary",label:"File input"},null,8,["modelValue","loading"]))}}),ke=A({__name:"DemoFileInputSelectionSlot",setup(l){const i=g([]);return(_,f)=>(p(),r(u,{modelValue:L(i),"onUpdate:modelValue":f[0]||(f[0]=a=>Y(i)?i.value=a:null),multiple:"",placeholder:"Upload your documents",label:"File input","prepend-icon":"bx-paperclip"},{selection:o(({fileNames:a})=>[(p(!0),ge(P,null,Ie(a,h=>(p(),r(q,{key:h,label:"",size:"small",variant:"outlined",color:"primary",class:"me-2"},{default:o(()=>[t(ye(h),1)]),_:2},1024))),128))]),_:1},8,["modelValue"]))}}),Se=A({__name:"DemoFileInputValidation",setup(l){const i=[_=>!_||!_.length||_[0].size<1e6||"Avatar size should be less than 1 MB!"];return(_,f)=>(p(),r(u,{rules:i,label:"Avatar",accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an avatar","prepend-icon":"bx-camera"}))}}),xe={};function $e(l,i){return p(),r(u,{"show-size":"",label:"File input"})}const Be=F(xe,[["render",$e]]),De={};function Pe(l,i){return p(),r(u,{label:"File input","prepend-icon":"bx-camera"})}const Ae=F(De,[["render",Pe]]),je={};function Re(l,i){return p(),r(u,{multiple:"",label:"File input"})}const Ne=F(je,[["render",Re]]),Le={};function Ue(l,i){return p(),r(u,{"show-size":"",counter:"",multiple:"",label:"File input"})}const Me=F(Le,[["render",Ue]]),Te={};function Ee(l,i){return p(),r(u,{chips:"",label:"File input w/ chips"})}const He=F(Te,[["render",Ee]]),Oe={};function Ye(l,i){return p(),r(u,{accept:"image/*",label:"File input"})}const qe=F(Oe,[["render",Ye]]),Ge={};function Qe(l,i){return p(),r(G,null,{default:o(()=>[e(c,{cols:"12",sm:"6"},{default:o(()=>[e(u,{label:"Outlined"})]),_:1}),e(c,{cols:"12",sm:"6"},{default:o(()=>[e(u,{label:"Filled",variant:"filled"})]),_:1}),e(c,{cols:"12",sm:"6"},{default:o(()=>[e(u,{label:"Solo",variant:"solo"})]),_:1}),e(c,{cols:"12",sm:"6"},{default:o(()=>[e(u,{label:"Plain",variant:"plain"})]),_:1}),e(c,{cols:"12",sm:"6"},{default:o(()=>[e(u,{label:"Underlined",variant:"underlined",density:"default"})]),_:1})]),_:1})}const We=F(Ge,[["render",Qe]]),Xe={};function Je(l,i){return p(),r(u,{label:"File input",density:"compact"})}const Ke=F(Xe,[["render",Je]]),Ze={};function el(l,i){return p(),r(u,{label:"File input"})}const ll=F(Ze,[["render",el]]),tl={ts:`<template>
  <VFileInput
    accept="image/*"
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    accept="image/*"
    label="File input"
  />
</template>
`},nl={ts:`<template>
  <VFileInput label="File input" />
</template>
`,js:`<template>
  <VFileInput label="File input" />
</template>
`},ol={ts:`<template>
  <VFileInput
    chips
    label="File input w/ chips"
  />
</template>
`,js:`<template>
  <VFileInput
    chips
    label="File input w/ chips"
  />
</template>
`},al={ts:`<template>
  <VFileInput
    show-size
    counter
    multiple
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    show-size
    counter
    multiple
    label="File input"
  />
</template>
`},il={ts:`<template>
  <VFileInput
    label="File input"
    density="compact"
  />
</template>
`,js:`<template>
  <VFileInput
    label="File input"
    density="compact"
  />
</template>
`},sl={ts:`<script setup lang="ts">
const file = ref()
const loading = ref(true)

watch(file, () => {
  loading.value = !file.value[0]
})
<\/script>

<template>
  <VFileInput
    v-model="file"
    :loading="loading"
    color="primary"
    label="File input"
  />
</template>
`,js:`<script setup>
const file = ref()
const loading = ref(true)

watch(file, () => {
  loading.value = !file.value[0]
})
<\/script>

<template>
  <VFileInput
    v-model="file"
    :loading="loading"
    color="primary"
    label="File input"
  />
</template>
`},cl={ts:`<template>
  <VFileInput
    multiple
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    multiple
    label="File input"
  />
</template>
`},ul={ts:`<template>
  <VFileInput
    label="File input"
    prepend-icon="bx-camera"
  />
</template>
`,js:`<template>
  <VFileInput
    label="File input"
    prepend-icon="bx-camera"
  />
</template>
`},pl={ts:`<script lang="ts" setup>
const files = ref<File[]>([])
<\/script>

<template>
  <VFileInput
    v-model="files"
    multiple
    placeholder="Upload your documents"
    label="File input"
    prepend-icon="bx-paperclip"
  >
    <template #selection="{ fileNames }">
      <template
        v-for="fileName in fileNames"
        :key="fileName"
      >
        <VChip
          label
          size="small"
          variant="outlined"
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </VChip>
      </template>
    </template>
  </VFileInput>
</template>
`,js:`<script setup>
const files = ref([])
<\/script>

<template>
  <VFileInput
    v-model="files"
    multiple
    placeholder="Upload your documents"
    label="File input"
    prepend-icon="bx-paperclip"
  >
    <template #selection="{ fileNames }">
      <template
        v-for="fileName in fileNames"
        :key="fileName"
      >
        <VChip
          label
          size="small"
          variant="outlined"
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </VChip>
      </template>
    </template>
  </VFileInput>
</template>
`},rl={ts:`<template>
  <VFileInput
    show-size
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    show-size
    label="File input"
  />
</template>
`},dl={ts:`<script lang="ts" setup>
const rules = [
  (fileList: FileList) => !fileList || !fileList.length || fileList[0].size < 1000000 || 'Avatar size should be less than 1 MB!',
]
<\/script>

<template>
  <VFileInput
    :rules="rules"
    label="Avatar"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-icon="bx-camera"
  />
</template>
`,js:`<script setup>
const rules = [fileList => !fileList || !fileList.length || fileList[0].size < 1000000 || 'Avatar size should be less than 1 MB!']
<\/script>

<template>
  <VFileInput
    :rules="rules"
    label="Avatar"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-icon="bx-camera"
  />
</template>
`},ml={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Plain"
        variant="plain"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Underlined"
        variant="underlined"
        density="default"
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
      <VFileInput label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Plain"
        variant="plain"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Underlined"
        variant="underlined"
        density="default"
      />
    </VCol>
  </VRow>
</template>
`},_l=n("p",null,[t("The "),n("code",null,"v-file-input"),t(" component is used to selecting files.")],-1),fl=n("p",null,[t("You can reduces the file input height with "),n("code",null,"density"),t(" prop. Available options are: "),n("code",null,"default"),t(", "),n("code",null,"comfortable"),t(", and "),n("code",null,"compact"),t(".")],-1),hl=n("p",null,[t("use "),n("code",null,"solo"),t(", "),n("code",null,"filled"),t(", "),n("code",null,"outlined"),t(", "),n("code",null,"plain"),t(" and "),n("code",null,"underlined"),t(" option of "),n("code",null,"variant"),t(" prop to change the look of file input.")],-1),vl=n("p",null,[n("code",null,"v-file-input"),t(" component can accept only specific media formats/file types if you want.")],-1),Fl=n("p",null,[t("Use "),n("code",null,"chip"),t(" prop to display the selected file as a chip.")],-1),Vl=n("p",null,[t("When using the "),n("code",null,"show-size"),t(" property along with "),n("code",null,"counter"),t(", the total number of files and size will be displayed under the input.")],-1),bl=n("p",null,[t(" The "),n("code",null,"v-file-input"),t(" can contain multiple files at the same time when using the "),n("code",null,"multiple"),t(" prop. ")],-1),gl=n("p",null,[t(" The "),n("code",null,"v-file-input"),t(" has a default "),n("code",null,"prepend-icon"),t(" that can be set on the component or adjusted globally. ")],-1),Il=n("p",null,[t("The displayed size of the selected file(s) can be configured with the "),n("code",null,"show-size"),t(" property.")],-1),yl=n("p",null,[t("You can use the "),n("code",null,"rules"),t(" prop to create your own custom validation parameters.")],-1),Cl=n("p",null,[t("Using the "),n("code",null,"selection"),t(" slot, you can customize the appearance of your input selections.")],-1),wl=n("p",null,[t("Use "),n("code",null,"loading"),t(" prop to displays linear progress bar.")],-1),El=A({__name:"file-input",setup(l){return(i,_)=>{const f=ll,a=we,h=Ke,m=We,k=qe,S=He,x=Me,y=Ne,j=Ae,$=Be,B=Se,V=ke,v=ze;return p(),r(G,{class:"match-height"},{default:o(()=>[e(c,{cols:"12",md:"6"},{default:o(()=>[e(a,{title:"Basic",code:nl},{default:o(()=>[_l,e(f)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(a,{title:"Density",code:il},{default:o(()=>[fl,e(h)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12"},{default:o(()=>[e(a,{title:"Variant",code:ml},{default:o(()=>[hl,e(m)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(a,{title:"Accept",code:tl},{default:o(()=>[vl,e(k)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(a,{title:"Chips",code:ol},{default:o(()=>[Fl,e(S)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(a,{title:"Counter",code:al},{default:o(()=>[Vl,e(x)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(a,{title:"Multiple",code:cl},{default:o(()=>[bl,e(y)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(a,{title:"Prepend icon",code:ul},{default:o(()=>[gl,e(j)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(a,{title:"Show size",code:rl},{default:o(()=>[Il,e($)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(a,{title:"Validation",code:dl},{default:o(()=>[yl,e(B)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(a,{title:"Selection slot",code:pl},{default:o(()=>[Cl,e(V)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(a,{title:"Loading",code:sl},{default:o(()=>[wl,e(v)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{El as default};
