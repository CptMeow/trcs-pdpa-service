import{a as x,V as C}from"./VRow-4863209c.js";import{V as b}from"./VCheckbox-05dd61ba.js";import{V as _}from"./VTextField-04866304.js";import{d as k,k as m,o as h,c as v,p as e,w as i,q as a,I as u,F as V,b as g,m as s,R as d,$ as O,Z as I,x as U,a as $}from"./main-51fa4cdd.js";import{V as z}from"./VTooltip-869457c6.js";import{_ as D}from"./AppCardCode.vue_vue_type_style_index_0_lang-a8b7aa9a.js";import"./VInput-354f6456.js";import"./transition-482c18b0.js";import"./VCheckboxBtn-af15d0af.js";import"./VSelectionControl-3a741587.js";/* empty css                   */import"./VField-e7393660.js";import"./easing-6b01f2d6.js";import"./VImg-7efce583.js";import"./forwardRefs-8f7055de.js";import"./VCounter-d16178d6.js";import"./VOverlay-20793165.js";import"./lazy-e0727b80.js";import"./vue.runtime.esm-bundler-23bef556.js";import"./VCard-6736eb7f.js";import"./VAvatar-57fab9ba.js";import"./VDivider-61df3248.js";const J=k({__name:"DemoCheckboxInlineTextField",setup(f){const o=m(!0),t=m(!1);return(r,l)=>(h(),v(V,null,[e(C,null,{default:i(()=>[e(x,{sm:"1",cols:"2"},{default:i(()=>[e(b,{modelValue:a(o),"onUpdate:modelValue":l[0]||(l[0]=c=>u(o)?o.value=c:null)},null,8,["modelValue"])]),_:1}),e(x,{sm:"11",cols:"10"},{default:i(()=>[e(_,{label:"Include files"})]),_:1})]),_:1}),e(C,null,{default:i(()=>[e(x,{cols:"2",sm:"1"},{default:i(()=>[e(b,{modelValue:a(t),"onUpdate:modelValue":l[1]||(l[1]=c=>u(t)?t.value=c:null)},null,8,["modelValue"])]),_:1}),e(x,{cols:"10",sm:"11"},{default:i(()=>[e(_,{disabled:!a(t),label:"I only work if you check the box"},null,8,["disabled"])]),_:1})]),_:1})],64))}}),A=k({__name:"DemoCheckboxLabelSlot",setup(f){const o=m(!1);return(t,r)=>(h(),g(b,{modelValue:a(o),"onUpdate:modelValue":r[1]||(r[1]=l=>u(o)?o.value=l:null)},{label:i(()=>[s("div",null,[d(" I agree that "),e(z,{location:"bottom"},{activator:i(({props:l})=>[s("a",O({href:"https://vuetifyjs.com/",target:"_blank",rel:"noopener noreferrer"},l,{onClick:r[0]||(r[0]=I(()=>{},["stop"]))})," Vuetify ",16)]),default:i(()=>[d(" Opens in new window ")]),_:1}),d(" is awesome ")])]),_:1},8,["modelValue"]))}}),F={class:"demo-space-x"},j=k({__name:"DemoCheckboxStates",setup(f){const o=m(!0),t=m(!0),r=m(!0),l=m(!1);return(c,n)=>(h(),v("div",F,[e(b,{modelValue:a(o),"onUpdate:modelValue":n[0]||(n[0]=p=>u(o)?o.value=p:null),label:"On"},null,8,["modelValue"]),e(b,{modelValue:a(l),"onUpdate:modelValue":n[1]||(n[1]=p=>u(l)?l.value=p:null),label:"Off"},null,8,["modelValue"]),e(b,{indeterminate:a(t),"onUpdate:indeterminate":n[2]||(n[2]=p=>u(t)?t.value=p:null),modelValue:a(t),"onUpdate:modelValue":n[3]||(n[3]=p=>u(t)?t.value=p:null),label:"Indeterminate"},null,8,["indeterminate","modelValue"]),e(b,{"model-value":a(r),disabled:"",label:"On disabled"},null,8,["model-value"]),e(b,{disabled:"",label:"Off disabled"})]))}}),E={class:"demo-space-x"},R=k({__name:"DemoCheckboxCheckboxValue",setup(f){const o=m(1),t=m("Show");return(r,l)=>(h(),v("div",E,[e(b,{modelValue:a(o),"onUpdate:modelValue":l[0]||(l[0]=c=>u(o)?o.value=c:null),"true-value":1,"false-value":0,label:`${a(o).toString()}`},null,8,["modelValue","label"]),e(b,{modelValue:a(t),"onUpdate:modelValue":l[1]||(l[1]=c=>u(t)?t.value=c:null),"true-value":"Show","false-value":"Hide",color:"success",label:`${a(t).toString()}`},null,8,["modelValue","label"])]))}}),B={class:"demo-space-x"},M=k({__name:"DemoCheckboxIcon",setup(f){const o=m(!0),t=m(!0),r=m(!0),l=c=>{const n=c.toString();return n.charAt(0).toUpperCase()+n.slice(1)};return(c,n)=>(h(),v("div",B,[e(b,{modelValue:a(o),"onUpdate:modelValue":n[0]||(n[0]=p=>u(o)?o.value=p:null),label:l(a(o)),"true-icon":"bx-check","false-icon":"bx-x"},null,8,["modelValue","label"]),e(b,{modelValue:a(t),"onUpdate:modelValue":n[1]||(n[1]=p=>u(t)?t.value=p:null),label:l(a(t)),"true-icon":"bx-alarm","false-icon":"bx-alarm-off",color:"success"},null,8,["modelValue","label"]),e(b,{modelValue:a(r),"onUpdate:modelValue":n[2]||(n[2]=p=>u(r)?r.value=p:null),label:l(a(r)),"true-icon":"bxs-check-circle","false-icon":"bxs-x-circle",color:"error"},null,8,["modelValue","label"])]))}}),H={class:"demo-space-x"},P={class:"mt-1"},N=k({__name:"DemoCheckboxModelAsArray",setup(f){const o=m(["John"]);return(t,r)=>(h(),v(V,null,[s("div",H,[e(b,{modelValue:a(o),"onUpdate:modelValue":r[0]||(r[0]=l=>u(o)?o.value=l:null),label:"John",value:"John"},null,8,["modelValue"]),e(b,{modelValue:a(o),"onUpdate:modelValue":r[1]||(r[1]=l=>u(o)?o.value=l:null),label:"Jacob",color:"success",value:"Jacob"},null,8,["modelValue"]),e(b,{modelValue:a(o),"onUpdate:modelValue":r[2]||(r[2]=l=>u(o)?o.value=l:null),label:"Johnson",color:"info",value:"Johnson"},null,8,["modelValue"])]),s("p",P,U(a(o)),1)],64))}}),W={class:"demo-space-x"},q=k({__name:"DemoCheckboxColors",setup(f){const o=m(["Primary","Secondary","Success","Info","Warning","Error"]),t=m([]);return(r,l)=>(h(),v("div",W,[(h(!0),v(V,null,$(a(o),c=>(h(),g(b,{key:c,modelValue:a(t),"onUpdate:modelValue":l[0]||(l[0]=n=>u(t)?t.value=n:null),label:c,color:c.toLowerCase(),value:c},null,8,["modelValue","label","color","value"]))),128))]))}}),Y={class:"demo-space-x"},Z=k({__name:"DemoCheckboxDensity",setup(f){const o=m(!0),t=m(!1),r=l=>{const c=l.toString();return c.charAt(0).toUpperCase()+c.slice(1)};return(l,c)=>(h(),v("div",Y,[e(b,{modelValue:a(o),"onUpdate:modelValue":c[0]||(c[0]=n=>u(o)?o.value=n:null),density:"compact",label:r(a(o))},null,8,["modelValue","label"]),e(b,{modelValue:a(t),"onUpdate:modelValue":c[1]||(c[1]=n=>u(t)?t.value=n:null),density:"compact",label:r(a(t))},null,8,["modelValue","label"])]))}}),G={class:"demo-space-x"},K=k({__name:"DemoCheckboxBasic",setup(f){const o=m(!0),t=m(!1),r=l=>{const c=l.toString();return c.charAt(0).toUpperCase()+c.slice(1)};return(l,c)=>(h(),v("div",G,[e(b,{modelValue:a(o),"onUpdate:modelValue":c[0]||(c[0]=n=>u(o)?o.value=n:null),label:r(a(o))},null,8,["modelValue","label"]),e(b,{modelValue:a(t),"onUpdate:modelValue":c[1]||(c[1]=n=>u(t)?t.value=n:null),label:r(a(t))},null,8,["modelValue","label"])]))}}),Q={ts:`<script lang="ts" setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)

const capitalizedLabel = (label: boolean) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkboxOne"
      :label="capitalizedLabel(checkboxOne)"
    />

    <VCheckbox
      v-model="checkboxTwo"
      :label="capitalizedLabel(checkboxTwo)"
    />
  </div>
</template>
`,js:`<script setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)

const capitalizedLabel = label => {
  const convertLabelText = label.toString()
  
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkboxOne"
      :label="capitalizedLabel(checkboxOne)"
    />

    <VCheckbox
      v-model="checkboxTwo"
      :label="capitalizedLabel(checkboxTwo)"
    />
  </div>
</template>
`},X={ts:`<script lang="ts" setup>
const checkbox = ref(1)
const checkboxString = ref('Show')
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkbox"
      :true-value="1"
      :false-value="0"
      :label="\`\${checkbox.toString()}\`"
    />

    <VCheckbox
      v-model="checkboxString"
      true-value="Show"
      false-value="Hide"
      color="success"
      :label="\`\${checkboxString.toString()}\`"
    />
  </div>
</template>
`,js:`<script setup>
const checkbox = ref(1)
const checkboxString = ref('Show')
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkbox"
      :true-value="1"
      :false-value="0"
      :label="\`\${checkbox.toString()}\`"
    />

    <VCheckbox
      v-model="checkboxString"
      true-value="Show"
      false-value="Hide"
      color="success"
      :label="\`\${checkboxString.toString()}\`"
    />
  </div>
</template>
`},ee={ts:`<script lang="ts" setup>
const colorCheckbox = ref(['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error'])
const selectedCheckbox = ref([])
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-for="color in colorCheckbox"
      :key="color"
      v-model="selectedCheckbox"
      :label="color"
      :color="color.toLowerCase()"
      :value="color"
    />
  </div>
</template>
`,js:`<script setup>
const colorCheckbox = ref([
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
])

const selectedCheckbox = ref([])
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-for="color in colorCheckbox"
      :key="color"
      v-model="selectedCheckbox"
      :label="color"
      :color="color.toLowerCase()"
      :value="color"
    />
  </div>
</template>
`},le={ts:`<script lang="ts" setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)

const capitalizedLabel = (label: boolean) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkboxOne"
      density="compact"
      :label="capitalizedLabel(checkboxOne)"
    />

    <VCheckbox
      v-model="checkboxTwo"
      density="compact"
      :label="capitalizedLabel(checkboxTwo)"
    />
  </div>
</template>
`,js:`<script setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)

const capitalizedLabel = label => {
  const convertLabelText = label.toString()
  
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkboxOne"
      density="compact"
      :label="capitalizedLabel(checkboxOne)"
    />

    <VCheckbox
      v-model="checkboxTwo"
      density="compact"
      :label="capitalizedLabel(checkboxTwo)"
    />
  </div>
</template>
`},oe={ts:`<script lang="ts" setup>
const toggleCheckboxOne = ref(true)
const toggleCheckboxTwo = ref(true)
const toggleCheckboxThree = ref(true)

const capitalizedLabel = (label: boolean) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="toggleCheckboxOne"
      :label="capitalizedLabel(toggleCheckboxOne)"
      true-icon="bx-check"
      false-icon="bx-x"
    />

    <VCheckbox
      v-model="toggleCheckboxTwo"
      :label="capitalizedLabel(toggleCheckboxTwo)"
      true-icon="bx-alarm"
      false-icon="bx-alarm-off"
      color="success"
    />

    <VCheckbox
      v-model="toggleCheckboxThree"
      :label="capitalizedLabel(toggleCheckboxThree)"
      true-icon="bxs-check-circle"
      false-icon="bxs-x-circle"
      color="error"
    />
  </div>
</template>
`,js:`<script setup>
const toggleCheckboxOne = ref(true)
const toggleCheckboxTwo = ref(true)
const toggleCheckboxThree = ref(true)

const capitalizedLabel = label => {
  const convertLabelText = label.toString()
  
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="toggleCheckboxOne"
      :label="capitalizedLabel(toggleCheckboxOne)"
      true-icon="bx-check"
      false-icon="bx-x"
    />

    <VCheckbox
      v-model="toggleCheckboxTwo"
      :label="capitalizedLabel(toggleCheckboxTwo)"
      true-icon="bx-alarm"
      false-icon="bx-alarm-off"
      color="success"
    />

    <VCheckbox
      v-model="toggleCheckboxThree"
      :label="capitalizedLabel(toggleCheckboxThree)"
      true-icon="bxs-check-circle"
      false-icon="bxs-x-circle"
      color="error"
    />
  </div>
</template>
`},te={ts:`<script lang="ts" setup>
const includeFiles = ref(true)
const isInputEnabled = ref(false)
<\/script>

<template>
  <VRow>
    <VCol
      sm="1"
      cols="2"
    >
      <VCheckbox v-model="includeFiles" />
    </VCol>

    <VCol
      sm="11"
      cols="10"
    >
      <VTextField label="Include files" />
    </VCol>
  </VRow>

  <VRow>
    <VCol
      cols="2"
      sm="1"
    >
      <VCheckbox v-model="isInputEnabled" />
    </VCol>

    <VCol
      cols="10"
      sm="11"
    >
      <VTextField
        :disabled="!isInputEnabled"
        label="I only work if you check the box"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const includeFiles = ref(true)
const isInputEnabled = ref(false)
<\/script>

<template>
  <VRow>
    <VCol
      sm="1"
      cols="2"
    >
      <VCheckbox v-model="includeFiles" />
    </VCol>

    <VCol
      sm="11"
      cols="10"
    >
      <VTextField label="Include files" />
    </VCol>
  </VRow>

  <VRow>
    <VCol
      cols="2"
      sm="1"
    >
      <VCheckbox v-model="isInputEnabled" />
    </VCol>

    <VCol
      cols="10"
      sm="11"
    >
      <VTextField
        :disabled="!isInputEnabled"
        label="I only work if you check the box"
      />
    </VCol>
  </VRow>
</template>
`},ce={ts:`<script lang="ts" setup>
const checkbox = ref(false)
<\/script>

<template>
  <VCheckbox v-model="checkbox">
    <template #label>
      <div>
        I agree that
        <VTooltip location="bottom">
          <template #activator="{ props }">
            <a
              href="https://vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              v-bind="props"
              @click.stop
            >
              Vuetify
            </a>
          </template>
          Opens in new window
        </VTooltip>
        is awesome
      </div>
    </template>
  </VCheckbox>
</template>
`,js:`<script setup>
const checkbox = ref(false)
<\/script>

<template>
  <VCheckbox v-model="checkbox">
    <template #label>
      <div>
        I agree that
        <VTooltip location="bottom">
          <template #activator="{ props }">
            <a
              href="https://vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              v-bind="props"
              @click.stop
            >
              Vuetify
            </a>
          </template>
          Opens in new window
        </VTooltip>
        is awesome
      </div>
    </template>
  </VCheckbox>
</template>
`},ae={ts:`<script lang="ts" setup>
const selected = ref(['John'])
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="selected"
      label="John"
      value="John"
    />

    <VCheckbox
      v-model="selected"
      label="Jacob"
      color="success"
      value="Jacob"
    />

    <VCheckbox
      v-model="selected"
      label="Johnson"
      color="info"
      value="Johnson"
    />
  </div>

  <p class="mt-1">
    {{ selected }}
  </p>
</template>
`,js:`<script setup>
const selected = ref(['John'])
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="selected"
      label="John"
      value="John"
    />

    <VCheckbox
      v-model="selected"
      label="Jacob"
      color="success"
      value="Jacob"
    />

    <VCheckbox
      v-model="selected"
      label="Johnson"
      color="info"
      value="Johnson"
    />
  </div>

  <p class="mt-1">
    {{ selected }}
  </p>
</template>
`},se={ts:`<script setup lang="ts">
const toggleCheckbox = ref(true)
const toggleIndeterminateCheckbox = ref(true)
const disabledCheckbox = ref(true)
const toggleOffCheckbox = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="toggleCheckbox"
      label="On"
    />

    <VCheckbox
      v-model="toggleOffCheckbox"
      label="Off"
    />

    <VCheckbox
      v-model:indeterminate="toggleIndeterminateCheckbox"
      v-model="toggleIndeterminateCheckbox"
      label="Indeterminate"
    />

    <VCheckbox
      :model-value="disabledCheckbox"
      disabled
      label="On disabled"
    />

    <VCheckbox
      disabled
      label="Off disabled"
    />
  </div>
</template>
`,js:`<script setup>
const toggleCheckbox = ref(true)
const toggleIndeterminateCheckbox = ref(true)
const disabledCheckbox = ref(true)
const toggleOffCheckbox = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="toggleCheckbox"
      label="On"
    />

    <VCheckbox
      v-model="toggleOffCheckbox"
      label="Off"
    />

    <VCheckbox
      v-model:indeterminate="toggleIndeterminateCheckbox"
      v-model="toggleIndeterminateCheckbox"
      label="Indeterminate"
    />

    <VCheckbox
      :model-value="disabledCheckbox"
      disabled
      label="On disabled"
    />

    <VCheckbox
      disabled
      label="Off disabled"
    />
  </div>
</template>
`},ne=s("p",null,[s("code",null,"v-checkbox"),d(" in its simplest form provides a toggle between 2 values.")],-1),re=s("p",null,[d("Use "),s("code",null,"density"),d(" prop to reduces the input height. Available options are: "),s("code",null,"default"),d(", "),s("code",null,"comfortable"),d(", and "),s("code",null,"compact"),d(".")],-1),de=s("p",null,[d("Checkboxes can be colored by using any of the builtin colors and contextual names using the "),s("code",null,"color"),d(" prop.")],-1),ie=s("p",null,[d("Multiple "),s("code",null,"v-checkbox"),d("'s can share the same "),s("code",null,"v-model"),d(" by using an array.")],-1),be=s("p",null,[d("Use "),s("code",null,"false-icon"),d(" and "),s("code",null,"true-icon"),d(" prop to change the icon on the checkbox.")],-1),ue=s("p",null,[d("Use "),s("code",null,"false-value"),d(" and "),s("code",null,"true-value"),d(" prop to sets value for truthy and falsy state")],-1),me=s("p",null,[s("code",null,"v-checkbox"),d(" can have different states such as "),s("code",null,"default"),d(", "),s("code",null,"disabled"),d(", and "),s("code",null,"indeterminate"),d(".")],-1),pe=s("p",null,[d("Checkbox labels can be defined in "),s("code",null,"label"),d(" slot - that will allow to use HTML content.")],-1),xe=s("p",null,[d("You can place "),s("code",null,"v-checkbox"),d(" in line with other components such as "),s("code",null,"v-text-field"),d(".")],-1),je=k({__name:"checkbox",setup(f){return(o,t)=>{const r=K,l=D,c=Z,n=q,p=N,T=M,w=R,L=j,y=A,S=J;return h(),g(C,{class:"match-height"},{default:i(()=>[e(x,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Basic",code:Q},{default:i(()=>[ne,e(r)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Density",code:le},{default:i(()=>[re,e(c)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Colors",code:ee},{default:i(()=>[de,e(n)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Model as array",code:ae},{default:i(()=>[ie,e(p)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Icon",code:oe},{default:i(()=>[be,e(T)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Checkbox Value",code:X},{default:i(()=>[ue,e(w)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"States",code:se},{default:i(()=>[me,e(L)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Label Slot",code:ce},{default:i(()=>[pe,e(y)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Inline text-field",code:te},{default:i(()=>[xe,e(S)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{je as default};
