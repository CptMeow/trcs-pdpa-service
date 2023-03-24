import{m as Q,u as X,V as Z,a as W,g as Y}from"./VSliderTrack-01182020.js";import{c as ee,m as le,u as ae,f as te,V as se,a as oe}from"./VInput-354f6456.js";import{au as ue,k as b,aE as ne,B as q,aA as re,p as a,F as ie,$ as de,d as g,o as S,b as R,q as $,I as w,w as i,C as ce,m as d,R as m}from"./main-51fa4cdd.js";import{_ as me}from"./AppCardCode.vue_vue_type_style_index_0_lang-a8b7aa9a.js";import{a as k,V as pe}from"./VRow-4863209c.js";import"./transition-482c18b0.js";import"./vue.runtime.esm-bundler-23bef556.js";import"./VCard-6736eb7f.js";import"./VAvatar-57fab9ba.js";import"./VImg-7efce583.js";import"./VDivider-61df3248.js";const y=ue()({name:"VRangeSlider",props:{...ee(),...le(),...Q(),strict:Boolean,modelValue:{type:Array,default:()=>[0,0]}},emits:{"update:focused":t=>!0,"update:modelValue":t=>!0},setup(t,s){let{slots:u}=s;const e=b(),l=b(),x=b();function f(n){if(!e.value||!l.value)return;const r=Y(n,e.value.$el,t.direction),V=Y(n,l.value.$el,t.direction),v=Math.abs(r),c=Math.abs(V);return v<c||v===c&&r<0?e.value.$el:l.value.$el}const{activeThumbRef:p,hasLabels:I,max:F,min:P,mousePressed:E,onSliderMousedown:G,onSliderTouchstart:H,position:j,roundValue:J,trackContainerRef:K}=X({props:t,handleSliderMouseUp:n=>{var r;o.value=p.value===((r=e.value)==null?void 0:r.$el)?[n,o.value[1]]:[o.value[0],n]},handleMouseMove:n=>{var v,c,_,D;const[r,V]=o.value;!t.strict&&r===V&&r!==P.value&&(p.value=n>r?(v=l.value)==null?void 0:v.$el:(c=e.value)==null?void 0:c.$el,(_=p.value)==null||_.focus()),p.value===((D=e.value)==null?void 0:D.$el)?o.value=[Math.min(n,V),V]:o.value=[r,Math.max(r,n)]},getActiveThumb:f}),o=ne(t,"modelValue",void 0,n=>!n||!n.length?[0,0]:n.map(r=>J(r))),{isFocused:M,focus:z,blur:L}=ae(t),A=q(()=>j(o.value[0])),N=q(()=>j(o.value[1]));return re(()=>{const[n,r]=te(t),V=!!(t.label||u.label||u.prepend);return a(oe,de({class:["v-slider","v-range-slider",{"v-slider--has-labels":!!u["tick-label"]||I.value,"v-slider--focused":M.value,"v-slider--pressed":E.value,"v-slider--disabled":t.disabled}],ref:x},n,{focused:M.value}),{...u,prepend:V?v=>{var c,_;return a(ie,null,[((c=u.label)==null?void 0:c.call(u,v))??t.label?a(se,{class:"v-slider__label",text:t.label},null):void 0,(_=u.prepend)==null?void 0:_.call(u,v)])}:void 0,default:v=>{var D,O;let{id:c,messagesId:_}=v;return a("div",{class:"v-slider__container",onMousedown:G,onTouchstartPassive:H},[a("input",{id:`${c.value}_start`,name:t.name||c.value,disabled:t.disabled,readonly:t.readonly,tabindex:"-1",value:o.value[0]},null),a("input",{id:`${c.value}_stop`,name:t.name||c.value,disabled:t.disabled,readonly:t.readonly,tabindex:"-1",value:o.value[1]},null),a(Z,{ref:K,start:A.value,stop:N.value},{"tick-label":u["tick-label"]}),a(W,{ref:e,"aria-describedby":_.value,focused:M&&p.value===((D=e.value)==null?void 0:D.$el),modelValue:o.value[0],"onUpdate:modelValue":h=>o.value=[h,o.value[1]],onFocus:h=>{var T,C,U,B;z(),p.value=(T=e.value)==null?void 0:T.$el,o.value[0]===o.value[1]&&o.value[1]===P.value&&h.relatedTarget!==((C=l.value)==null?void 0:C.$el)&&((U=e.value)==null||U.$el.blur(),(B=l.value)==null||B.$el.focus())},onBlur:()=>{L(),p.value=void 0},min:P.value,max:o.value[1],position:A.value},{"thumb-label":u["thumb-label"]}),a(W,{ref:l,"aria-describedby":_.value,focused:M&&p.value===((O=l.value)==null?void 0:O.$el),modelValue:o.value[1],"onUpdate:modelValue":h=>o.value=[o.value[0],h],onFocus:h=>{var T,C,U,B;z(),p.value=(T=l.value)==null?void 0:T.$el,o.value[0]===o.value[1]&&o.value[0]===F.value&&h.relatedTarget!==((C=e.value)==null?void 0:C.$el)&&((U=l.value)==null||U.$el.blur(),(B=e.value)==null||B.$el.focus())},onBlur:()=>{L(),p.value=void 0},min:o.value[0],max:F.value,position:N.value},{"thumb-label":u["thumb-label"]})])}})}),{}}}),ve=g({__name:"DemoRangeSliderVertical",setup(t){const s=b([20,40]);return(u,e)=>(S(),R(y,{modelValue:$(s),"onUpdate:modelValue":e[0]||(e[0]=l=>w(s)?s.value=l:null),direction:"vertical"},null,8,["modelValue"]))}}),be=g({__name:"DemoRangeSliderThumbLabel",setup(t){const s=["Winter","Spring","Summer","Fall"],u=["bx-wind","bx-leaf","bxs-hot","bx-water"],e=b([1,2]);return(l,x)=>(S(),R(y,{modelValue:$(e),"onUpdate:modelValue":x[0]||(x[0]=f=>w(e)?e.value=f:null),tick:s,min:"0",max:"3",step:1,"show-ticks":"always","thumb-label":"","tick-size":"4"},{"thumb-label":i(({modelValue:f})=>[a(ce,{icon:u[f]},null,8,["icon"])]),_:1},8,["modelValue"]))}}),_e=g({__name:"DemoRangeSliderStep",setup(t){const s=b([20,40]);return(u,e)=>(S(),R(y,{modelValue:$(s),"onUpdate:modelValue":e[0]||(e[0]=l=>w(s)?s.value=l:null),step:"10"},null,8,["modelValue"]))}}),fe=g({__name:"DemoRangeSliderColor",setup(t){const s=b([10,60]);return(u,e)=>(S(),R(y,{modelValue:$(s),"onUpdate:modelValue":e[0]||(e[0]=l=>w(s)?s.value=l:null),color:"success","track-color":"secondary"},null,8,["modelValue"]))}}),Ve=g({__name:"DemoRangeSliderDisabled",setup(t){const s=b([30,60]);return(u,e)=>(S(),R(y,{modelValue:$(s),"onUpdate:modelValue":e[0]||(e[0]=l=>w(s)?s.value=l:null),disabled:"",label:"Disabled"},null,8,["modelValue"]))}}),he=g({__name:"DemoRangeSliderBasic",setup(t){const s=b([10,60]);return(u,e)=>(S(),R(y,{modelValue:$(s),"onUpdate:modelValue":e[0]||(e[0]=l=>w(s)?s.value=l:null)},null,8,["modelValue"]))}}),ge={ts:`<script setup lang="ts">
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`},Se={ts:`<script lang="ts" setup>
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
    track-color="secondary"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
    track-color="secondary"
  />
</template>
`},Re={ts:`<script lang="ts" setup>
const slidersValues = ref([30, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`,js:`<script setup>
const slidersValues = ref([
  30,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`},xe={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`},ke={ts:`<script lang="ts" setup>
const seasons = ['Winter', 'Spring', 'Summer', 'Fall']
const icons = ['bx-wind', 'bx-leaf', 'bxs-hot', 'bx-water']
const sliderValues = ref([1, 2])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`,js:`<script setup>
const seasons = [
  'Winter',
  'Spring',
  'Summer',
  'Fall',
]

const icons = [
  'bx-wind',
  'bx-leaf',
  'bxs-hot',
  'bx-water',
]

const sliderValues = ref([
  1,
  2,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`},$e={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`},we=d("p",null,[m("The "),d("code",null,"v-slider"),m(" component is a better visualization of the number input.")],-1),ye=d("p",null,[m("You cannot interact with "),d("code",null,"disabled"),m(" sliders.")],-1),De=d("p",null,[m("Use "),d("code",null,"color"),m(" prop to the sets the slider color. "),d("code",null,"track-color"),m(" prop to sets the color of slider's unfilled track.")],-1),Te=d("p",null,[d("code",null,"v-range-slider"),m(" can have steps other than 1. This can be helpful for some applications where you need to adjust values with more or less accuracy.")],-1),Ce=d("p",null,[m(" Using the "),d("code",null,"tick-labels"),m(" prop along with the "),d("code",null,"thumb-label"),m(" slot, you can create a very customized solution. ")],-1),Ue=d("p",null,[m("You can use the "),d("code",null,"vertical"),m(" prop to switch sliders to a vertical orientation. If you need to change the height of the slider, use css.")],-1),We=g({__name:"range-slider",setup(t){return(s,u)=>{const e=he,l=me,x=Ve,f=fe,p=_e,I=be,F=ve;return S(),R(pe,null,{default:i(()=>[a(k,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Basic",code:ge},{default:i(()=>[we,a(e)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Disabled",code:Re},{default:i(()=>[ye,a(x)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Color",code:Se},{default:i(()=>[De,a(f)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Step",code:xe},{default:i(()=>[Te,a(p)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Thumb label",code:ke},{default:i(()=>[Ce,a(I)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Vertical",code:$e},{default:i(()=>[Ue,a(F)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{We as default};
