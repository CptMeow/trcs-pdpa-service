import{m as v,u as C,f as P,a as A}from"./VInput-354f6456.js";import{m as B,f as I,V as g}from"./VCheckboxBtn-af15d0af.js";import{au as F,aD as y,B as $,aA as D,aF as R,p as t,$ as o}from"./main-51fa4cdd.js";const w=F()({name:"VCheckbox",inheritAttrs:!1,props:{...v(),...B()},emits:{"update:focused":e=>!0},setup(e,a){let{attrs:r,slots:s}=a;const{isFocused:u,focus:c,blur:n}=C(e),i=y(),d=$(()=>e.id||`checkbox-${i}`);return D(()=>{const[l,p]=R(r),[m,_]=P(e),[b,N]=I(e);return t(A,o({class:"v-checkbox"},l,m,{id:d.value,focused:u.value}),{...s,default:f=>{let{id:k,messagesId:h,isDisabled:x,isReadonly:V}=f;return t(g,o(b,{id:k.value,"aria-describedby":h.value,disabled:x.value,readonly:V.value},p,{onFocus:c,onBlur:n}),s)}})}),{}}});export{w as V};