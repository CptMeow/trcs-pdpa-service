import{V as u}from"./VAutocomplete-33ba2536.js";import{d as g,k as b,o as h,b as f,q as p,I as C,w as t,p as e,dH as N,C as T,z as I,$ as A,ai as D,aj as F,a2 as W,a0 as G,a1 as L,ak as R,al as H,am as E,m as i,R as l}from"./main-51fa4cdd.js";import{V as q}from"./VChip-d98b0377.js";import{a as z}from"./VList-f23cbc26.js";import{V as O}from"./VAvatar-57fab9ba.js";import{a as c,V as y}from"./VRow-4863209c.js";import{_ as P}from"./AppCardCode.vue_vue_type_style_index_0_lang-a8b7aa9a.js";import"./VSelect-51189d3d.js";import"./VTextField-04866304.js";/* empty css                   */import"./VField-e7393660.js";import"./VInput-354f6456.js";import"./transition-482c18b0.js";import"./easing-6b01f2d6.js";import"./VImg-7efce583.js";import"./forwardRefs-8f7055de.js";import"./VCounter-d16178d6.js";import"./dialog-transition-a7db0454.js";import"./VMenu-c40ddae7.js";import"./VOverlay-20793165.js";import"./lazy-e0727b80.js";import"./VCheckboxBtn-af15d0af.js";import"./VSelectionControl-3a741587.js";import"./filter-00d6d293.js";import"./VDivider-61df3248.js";import"./vue.runtime.esm-bundler-23bef556.js";import"./VCard-6736eb7f.js";const $=g({__name:"DemoAutocompleteValidation",setup(_){const a=["foo","bar","fizz","buzz"],s=b(["foo"]),m=[o=>!!o.length||"Select at least one option."];return(o,n)=>(h(),f(u,{modelValue:p(s),"onUpdate:modelValue":n[0]||(n[0]=r=>C(s)?s.value=r:null),items:a,rules:m,multiple:""},null,8,["modelValue"]))}}),U=g({__name:"DemoAutocompleteStateSelector",setup(_){const a=b(!1),s=b(null),m=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];return(o,n)=>(h(),f(u,{modelValue:p(s),"onUpdate:modelValue":n[1]||(n[1]=r=>C(s)?s.value=r:null),hint:p(a)?"Click the icon to save":"Click the icon to edit",items:m,readonly:!p(a),label:`State — ${p(a)?"Editable":"Readonly"}`,"persistent-hint":"","prepend-icon":"bxs-city","menu-props":{maxHeight:"200px"}},{append:t(()=>[e(N,{mode:"out-in"},{default:t(()=>[(h(),f(T,{key:`icon-${p(a)}`,color:p(a)?"success":"info",icon:p(a)?"bx-check":"bx-edit",onClick:n[0]||(n[0]=r=>a.value=!p(a))},null,8,["color","icon"]))]),_:1})]),_:1},8,["modelValue","hint","readonly","label"]))}}),j=g({__name:"DemoAutocompleteAsyncItems",setup(_){const a=b(!1),s=b(),m=b(null),o=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],n=b(o),r=v=>{a.value=!0,setTimeout(()=>{n.value=o.filter(d=>(d||"").toLowerCase().includes((v||"").toLowerCase())),a.value=!1},500)};return I(s,v=>{v&&v!==m.value&&r(v)}),(v,d)=>(h(),f(u,{modelValue:p(m),"onUpdate:modelValue":d[0]||(d[0]=V=>C(m)?m.value=V:null),search:p(s),"onUpdate:search":d[1]||(d[1]=V=>C(s)?s.value=V:null),loading:p(a),items:p(n),label:"What state are you from?",variant:"underlined","menu-props":{maxHeight:"200px"}},null,8,["modelValue","search","loading","items"]))}}),Y=g({__name:"DemoAutocompleteSlots",setup(_){const a=b(["Sandra Adams","Britta Holt"]),s=[{name:"Sandra Adams",avatar:D},{name:"Ali Connors",avatar:F},{name:"Trevor Hansen",avatar:W},{name:"Tucker Smith",avatar:G},{name:"Britta Holt",avatar:L},{name:"Jane Smith ",avatar:R},{name:"John Smith",avatar:H},{name:"Sandra Williams",avatar:E}];return(m,o)=>(h(),f(u,{modelValue:p(a),"onUpdate:modelValue":o[0]||(o[0]=n=>C(a)?a.value=n:null),chips:"","closable-chips":"",multiple:"",items:s,"item-title":"name","item-value":"name",label:"Select"},{chip:t(({props:n,item:r})=>[e(q,A(n,{"prepend-avatar":r.raw.avatar,text:r.raw.name}),null,16,["prepend-avatar","text"])]),item:t(({props:n,item:r})=>{var v;return[e(z,A(n,{title:(v=r==null?void 0:r.raw)==null?void 0:v.name}),{prepend:t(()=>{var d;return[e(O,{size:"30",image:(d=r==null?void 0:r.raw)==null?void 0:d.avatar},null,8,["image"])]}),_:2},1040,["title"])]}),_:1},8,["modelValue"]))}}),B=g({__name:"DemoAutocompleteCustomFilter",setup(_){const a=[{name:"Florida",abbr:"FL",id:1},{name:"Georgia",abbr:"GA",id:2},{name:"Nebraska",abbr:"NE",id:3},{name:"California",abbr:"CA",id:4},{name:"New York",abbr:"NY",id:5}];function s(m,o,n){const r=n.title.toLowerCase(),v=n.value.toLowerCase(),d=o.toLocaleLowerCase();return r.includes(d)||v.includes(d)}return(m,o)=>(h(),f(u,{label:"States",items:a,"custom-filter":s,"item-title":"name","item-value":"abbr"}))}}),J=g({__name:"DemoAutocompleteChips",setup(_){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(s,m)=>(h(),f(u,{label:"States",items:a,chips:"",multiple:""}))}}),K=g({__name:"DemoAutocompleteClearable",setup(_){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(s,m)=>(h(),f(u,{label:"States",items:a,multiple:"",clearable:""}))}}),X=g({__name:"DemoAutocompleteMultiple",setup(_){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(s,m)=>(h(),f(u,{label:"States",items:a,multiple:""}))}}),Q=g({__name:"DemoAutocompleteVariant",setup(_){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(s,m)=>(h(),f(y,null,{default:t(()=>[e(c,{cols:"12",md:"6"},{default:t(()=>[e(u,{variant:"solo",label:"solo",items:a})]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(u,{variant:"outlined",label:"outlined",items:a})]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(u,{variant:"underlined",label:"underlined",items:a})]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(u,{variant:"filled",label:"filled",items:a})]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(u,{variant:"plain",label:"plain",items:a})]),_:1})]),_:1}))}}),Z=g({__name:"DemoAutocompleteDensity",setup(_){const a=b(["Florida"]),s=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(m,o)=>(h(),f(u,{modelValue:p(a),"onUpdate:modelValue":o[0]||(o[0]=n=>C(a)?a.value=n:null),label:"States",density:"compact",items:s},null,8,["modelValue"]))}}),ee=g({__name:"DemoAutocompleteBasic",setup(_){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(s,m)=>(h(),f(u,{label:"States",items:a}))}}),ae={ts:`<script setup lang="ts">
const loading = ref(false)
const search = ref()
const select = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const items = ref(states)

const querySelections = (query: string) => {
  loading.value = true

  // Simulated ajax query
  setTimeout(() => {
    items.value = states.filter(state => (state || '').toLowerCase().includes((query || '').toLowerCase()))
    loading.value = false
  }, 500)
}

watch(search, query => {
  query && query !== select.value && querySelections(query)
})
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    v-model:search="search"
    :loading="loading"
    :items="items"
    label="What state are you from?"
    variant="underlined"
    :menu-props="{ maxHeight: '200px' }"
  />
</template>
`,js:`<script setup>
const loading = ref(false)
const search = ref()
const select = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const items = ref(states)

const querySelections = query => {
  loading.value = true

  // Simulated ajax query
  setTimeout(() => {
    items.value = states.filter(state => (state || '').toLowerCase().includes((query || '').toLowerCase()))
    loading.value = false
  }, 500)
}

watch(search, query => {
  query && query !== select.value && querySelections(query)
})
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    v-model:search="search"
    :loading="loading"
    :items="items"
    label="What state are you from?"
    variant="underlined"
    :menu-props="{ maxHeight: '200px' }"
  />
</template>
`},te={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
  />
</template>
`},oe={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    chips
    multiple
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    chips
    multiple
  />
</template>
`},ie={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    multiple
    clearable
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    multiple
    clearable
  />
</template>
`},se={ts:`<script setup lang="ts">
const states = [
  { name: 'Florida', abbr: 'FL', id: 1 },
  { name: 'Georgia', abbr: 'GA', id: 2 },
  { name: 'Nebraska', abbr: 'NE', id: 3 },
  { name: 'California', abbr: 'CA', id: 4 },
  { name: 'New York', abbr: 'NY', id: 5 },
]

function customFilter(item: string, queryText: string, itemText: any) {
  const textOne = itemText.title.toLowerCase()
  const textTwo = itemText.value.toLowerCase()
  const searchText = queryText.toLocaleLowerCase()

  return textOne.includes(searchText) || textTwo.includes(searchText)
}
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="states"
    :custom-filter="customFilter"
    item-title="name"
    item-value="abbr"
  />
</template>
`,js:`<script setup>
const states = [
  {
    name: 'Florida',
    abbr: 'FL',
    id: 1,
  },
  {
    name: 'Georgia',
    abbr: 'GA',
    id: 2,
  },
  {
    name: 'Nebraska',
    abbr: 'NE',
    id: 3,
  },
  {
    name: 'California',
    abbr: 'CA',
    id: 4,
  },
  {
    name: 'New York',
    abbr: 'NY',
    id: 5,
  },
]

function customFilter(item, queryText, itemText) {
  const textOne = itemText.title.toLowerCase()
  const textTwo = itemText.value.toLowerCase()
  const searchText = queryText.toLocaleLowerCase()
  
  return textOne.includes(searchText) || textTwo.includes(searchText)
}
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="states"
    :custom-filter="customFilter"
    item-title="name"
    item-value="abbr"
  />
</template>
`},le={ts:`<script setup lang="ts">
const select = ref(['Florida'])
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    label="States"
    density="compact"
    :items="items"
  />
</template>
`,js:`<script setup>
const select = ref(['Florida'])

const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    label="States"
    density="compact"
    :items="items"
  />
</template>
`},ne={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    multiple
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    multiple
  />
</template>
`},re={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'

const friends = ref(['Sandra Adams', 'Britta Holt'])

const people = [
  { name: 'Sandra Adams', avatar: avatar1 },
  { name: 'Ali Connors', avatar: avatar2 },
  { name: 'Trevor Hansen', avatar: avatar3 },
  { name: 'Tucker Smith', avatar: avatar4 },
  { name: 'Britta Holt', avatar: avatar5 },
  { name: 'Jane Smith ', avatar: avatar6 },
  { name: 'John Smith', avatar: avatar7 },
  { name: 'Sandra Williams', avatar: avatar8 },
]
<\/script>

<template>
  <VAutocomplete
    v-model="friends"
    chips
    closable-chips
    multiple
    :items="people"
    item-title="name"
    item-value="name"
    label="Select"
  >
    <template #chip="{ props, item }">
      <VChip
        v-bind="props"
        :prepend-avatar="item.raw.avatar"
        :text="item.raw.name"
      />
    </template>

    <template #item="{ props, item }">
      <VListItem
        v-bind="props"
        :title="item?.raw?.name"
      >
        <template #prepend>
          <VAvatar
            size="30"
            :image="item?.raw?.avatar"
          />
        </template>
      </VListItem>
    </template>
  </VAutocomplete>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'

const friends = ref([
  'Sandra Adams',
  'Britta Holt',
])

const people = [
  {
    name: 'Sandra Adams',
    avatar: avatar1,
  },
  {
    name: 'Ali Connors',
    avatar: avatar2,
  },
  {
    name: 'Trevor Hansen',
    avatar: avatar3,
  },
  {
    name: 'Tucker Smith',
    avatar: avatar4,
  },
  {
    name: 'Britta Holt',
    avatar: avatar5,
  },
  {
    name: 'Jane Smith ',
    avatar: avatar6,
  },
  {
    name: 'John Smith',
    avatar: avatar7,
  },
  {
    name: 'Sandra Williams',
    avatar: avatar8,
  },
]
<\/script>

<template>
  <VAutocomplete
    v-model="friends"
    chips
    closable-chips
    multiple
    :items="people"
    item-title="name"
    item-value="name"
    label="Select"
  >
    <template #chip="{ props, item }">
      <VChip
        v-bind="props"
        :prepend-avatar="item.raw.avatar"
        :text="item.raw.name"
      />
    </template>

    <template #item="{ props, item }">
      <VListItem
        v-bind="props"
        :title="item?.raw?.name"
      >
        <template #prepend>
          <VAvatar
            size="30"
            :image="item?.raw?.avatar"
          />
        </template>
      </VListItem>
    </template>
  </VAutocomplete>
</template>
`},me={ts:`<script setup lang="ts">
const isEditing = ref(false)
const selectedState = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    v-model="selectedState"
    :hint="!isEditing ? 'Click the icon to edit' : 'Click the icon to save'"
    :items="states"
    :readonly="!isEditing"
    :label="\`State — \${isEditing ? 'Editable' : 'Readonly'}\`"
    persistent-hint
    prepend-icon="bxs-city"
    :menu-props="{ maxHeight: '200px' }"
  >
    <template #append>
      <VSlideXReverseTransition mode="out-in">
        <VIcon
          :key="\`icon-\${isEditing}\`"
          :color="isEditing ? 'success' : 'info'"
          :icon="isEditing ? 'bx-check' : 'bx-edit'"
          @click="isEditing = !isEditing"
        />
      </VSlideXReverseTransition>
    </template>
  </VAutocomplete>
</template>
`,js:`<script setup>
const isEditing = ref(false)
const selectedState = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    v-model="selectedState"
    :hint="!isEditing ? 'Click the icon to edit' : 'Click the icon to save'"
    :items="states"
    :readonly="!isEditing"
    :label="\`State — \${isEditing ? 'Editable' : 'Readonly'}\`"
    persistent-hint
    prepend-icon="bxs-city"
    :menu-props="{ maxHeight: '200px' }"
  >
    <template #append>
      <VSlideXReverseTransition mode="out-in">
        <VIcon
          :key="\`icon-\${isEditing}\`"
          :color="isEditing ? 'success' : 'info'"
          :icon="isEditing ? 'bx-check' : 'bx-edit'"
          @click="isEditing = !isEditing"
        />
      </VSlideXReverseTransition>
    </template>
  </VAutocomplete>
</template>
`},ce={ts:`<script setup lang="ts">
const items = ['foo', 'bar', 'fizz', 'buzz']
const values = ref(['foo'])
const nameRules = [(v: string) => !!v.length || 'Select at least one option.']
<\/script>

<template>
  <VAutocomplete
    v-model="values"
    :items="items"
    :rules="nameRules"
    multiple
  />
</template>
`,js:`<script setup>
const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const values = ref(['foo'])
const nameRules = [v => !!v.length || 'Select at least one option.']
<\/script>

<template>
  <VAutocomplete
    v-model="values"
    :items="items"
    :rules="nameRules"
    multiple
  />
</template>
`},pe={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 solo variant  -->
      <VAutocomplete
        variant="solo"
        label="solo"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 outlined variant -->
      <VAutocomplete
        variant="outlined"
        label="outlined"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 underlined variant -->
      <VAutocomplete
        variant="underlined"
        label="underlined"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 filled variant  -->
      <VAutocomplete
        variant="filled"
        label="filled"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!--  👉 plain variant -->
      <VAutocomplete
        variant="plain"
        label="plain"
        :items="items"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 solo variant  -->
      <VAutocomplete
        variant="solo"
        label="solo"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 outlined variant -->
      <VAutocomplete
        variant="outlined"
        label="outlined"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 underlined variant -->
      <VAutocomplete
        variant="underlined"
        label="underlined"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 filled variant  -->
      <VAutocomplete
        variant="filled"
        label="filled"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!--  👉 plain variant -->
      <VAutocomplete
        variant="plain"
        label="plain"
        :items="items"
      />
    </VCol>
  </VRow>
</template>
`},ue=i("p",null,[l(" The "),i("code",null," v-autocomplete "),l(" component offers simple and flexible type-ahead functionality. This is useful when searching large sets of data or even dynamically fetching information from an API. ")],-1),de=i("p",null,[l(" You can use "),i("code",null," density "),l(" prop to adjusts vertical spacing within the component. Available options are: "),i("code",null,"default"),l(", "),i("code",null,"comfortable"),l(", and "),i("code",null,"compact"),l(". ")],-1),ve=i("p",null,[l("Use "),i("code",null,"solo"),l(", "),i("code",null,"outlined"),l(", "),i("code",null,"underlined"),l(", "),i("code",null,"filled"),l(" and "),i("code",null,"plain"),l(" options of "),i("code",null,"variant"),l(" prop to change the look of Autocomplete. ")],-1),he=i("p",null,[l("Use "),i("code",null,"multiple"),l(" prop to select multiple. Accepts array for value")],-1),fe=i("p",null,[l("Use "),i("code",null,"clearable"),l(" prop to add input clear functionality.")],-1),ge=i("p",null,[l("Use "),i("code",null," chips "),l(" prop to use chips in select.")],-1),_e=i("p",null,[l("The "),i("code",null," custom-filter "),l(" prop can be used to filter each individual item with custom logic.In example we will filter state based on their name and abbreviations ")],-1),be=i("p",null,"With the power of slots, you can customize the visual output of the select. In this example we add a profile picture for both the chips and list items using their props. ",-1),Ce=i("p",null,"Sometimes you need to load data externally based upon a search query. ",-1),Ve=i("p",null,"Using a combination of v-autocomplete slots and transitions, you can create a stylish toggle able autocomplete field such as below state selector.",-1),Ae=i("p",null,[l("Use "),i("code",null,"rules"),l(" prop to validate autocomplete. Accepts a mixed array of types function, boolean and string. Functions pass an input value as an argument and must return either true / false or a string containing an error message.")],-1),Ke=g({__name:"autocomplete",setup(_){return(a,s)=>{const m=ee,o=P,n=Z,r=Q,v=X,d=K,V=J,x=B,S=Y,w=j,k=U,M=$;return h(),f(y,{class:"match-height"},{default:t(()=>[e(c,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Basic",code:te},{default:t(()=>[ue,e(m)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Density",code:le},{default:t(()=>[de,e(n)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"12"},{default:t(()=>[e(o,{title:"Variant",code:pe},{default:t(()=>[ve,e(r)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Multiple",code:ne},{default:t(()=>[he,e(v)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Clearable",code:ie},{default:t(()=>[fe,e(d)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Chips",code:oe},{default:t(()=>[ge,e(V)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Custom-Filter",code:se},{default:t(()=>[_e,e(x)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Slots",code:re},{default:t(()=>[be,e(S)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Async items",code:ae},{default:t(()=>[Ce,e(w)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"State Selector",code:me},{default:t(()=>[Ve,e(k)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"validation",code:ce},{default:t(()=>[Ae,e(M)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Ke as default};
