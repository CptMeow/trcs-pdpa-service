/* empty css                   */import{m as U,f as $,V as q}from"./VField-e7393660.js";import{m as G,u as J,f as K,a as Q}from"./VInput-354f6456.js";import{I as W}from"./VImg-7efce583.js";import{f as X}from"./forwardRefs-8f7055de.js";import{aI as Y,au as Z,aE as ee,B as f,k as x,aA as te,aF as ne,p as n,$ as V,L as le,bo as ae,F as g,bA as ue,ae as oe,bB as ie,aV as re}from"./main-51fa4cdd.js";import{V as se}from"./VCounter-d16178d6.js";const ce=["color","file","time","date","datetime-local","week","month"],de=Y({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,type:{type:String,default:"text"},...G(),...U()},"v-text-field"),fe=Z()({name:"VTextField",directives:{Intersect:W},inheritAttrs:!1,props:de(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,P){let{attrs:v,emit:k,slots:l}=P;const a=ee(e,"modelValue"),{isFocused:u,focus:b,blur:B}=J(e),w=f(()=>typeof e.counterValue=="function"?e.counterValue(a.value):(a.value??"").toString().length),A=f(()=>{if(v.maxlength)return v.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function S(t,m){var o,c;!e.autofocus||!t||(c=(o=m[0].target)==null?void 0:o.focus)==null||c.call(o)}const p=x(),C=x(),i=x(),D=f(()=>ce.includes(e.type)||e.persistentPlaceholder||u.value),R=f(()=>e.messages.length?e.messages:u.value||e.persistentHint?e.hint:"");function s(){var t;i.value!==document.activeElement&&((t=i.value)==null||t.focus()),u.value||b()}function T(t){k("mousedown:control",t),t.target!==i.value&&(s(),t.preventDefault())}function _(t){s(),k("click:control",t)}function N(t){t.stopPropagation(),s(),oe(()=>{a.value=null,ie(e["onClick:clear"],t)})}function E(t){a.value=t.target.value}return te(()=>{const t=!!(l.counter||e.counter||e.counterValue),m=!!(t||l.details),[o,c]=ne(v),[{modelValue:ve,...M}]=K(e),[H]=$(e);return n(Q,V({ref:p,modelValue:a.value,"onUpdate:modelValue":r=>a.value=r,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)}],"onClick:prepend":e["onClick:prepend"],"onClick:append":e["onClick:append"]},o,M,{focused:u.value,messages:R.value}),{...l,default:r=>{let{id:d,isDisabled:h,isDirty:F,isReadonly:j,isValid:z}=r;return n(q,V({ref:C,onMousedown:T,onClick:_,"onClick:clear":N,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},H,{id:d.value,active:D.value||F.value,dirty:F.value||e.dirty,disabled:h.value,focused:u.value,error:z.value===!1}),{...l,default:L=>{let{props:{class:y,...O}}=L;const I=le(n("input",V({ref:i,value:a.value,onInput:E,autofocus:e.autofocus,readonly:j.value,disabled:h.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:s,onBlur:B},O,c),null),[[ae("intersect"),{handler:S},null,{once:!0}]]);return n(g,null,[e.prefix&&n("span",{class:"v-text-field__prefix"},[e.prefix]),l.default?n("div",{class:y,"data-no-activator":""},[l.default(),I]):ue(I,{class:y}),e.suffix&&n("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:m?r=>{var d;return n(g,null,[(d=l.details)==null?void 0:d.call(l,r),t&&n(g,null,[n("span",null,null),n(se,{active:e.persistentCounter||u.value,value:w.value,max:A.value},l.counter)])])}:void 0})}),X({},p,C,i)}});function he(e){return re(e,Object.keys(fe.props))}export{fe as V,he as f,de as m};