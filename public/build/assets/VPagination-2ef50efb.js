import{k as R,c2 as K,au as W,aC as P,b1 as q,aS as G,b2 as H,b4 as O,bg as Q,aZ as U,av as X,bh as Z,aE as j,aQ as J,b5 as Y,aw as aa,ao as ea,bd as A,c3 as ta,B as b,c4 as k,ay as f,aA as ia,p as o,H as m,$ as h,c5 as $,ae as B}from"./main-51fa4cdd.js";function la(){const a=R([]);K(()=>a.value=[]);function V(n,_){a.value[_]=n}return{refs:a,updateRef:V}}const sa=W()({name:"VPagination",props:{activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:a=>a.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:a=>a%1===0},totalVisible:[Number,String],firstIcon:{type:P,default:"$first"},prevIcon:{type:P,default:"$prev"},nextIcon:{type:P,default:"$next"},lastIcon:{type:P,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...q(),...G(),...H(),...O(),...Q(),...U({tag:"nav"}),...X(),...Z({variant:"text"})},emits:{"update:modelValue":a=>!0,first:a=>!0,prev:a=>!0,next:a=>!0,last:a=>!0},setup(a,V){let{slots:n,emit:_}=V;const l=j(a,"modelValue"),{t:g,n:C}=J(),{isRtl:x}=Y(),{themeClasses:w}=aa(a),{width:D}=ea(),p=R(-1);A(void 0,{scoped:!0});const{resizeRef:F}=ta(e=>{if(!e.length)return;const{target:t,contentRect:i}=e[0],r=t.querySelector(".v-pagination__list > *");if(!r)return;const v=i.width,L=r.offsetWidth+parseFloat(getComputedStyle(r).marginRight)*2;p.value=I(v,L)}),s=b(()=>parseInt(a.length,10)),u=b(()=>parseInt(a.start,10)),c=b(()=>a.totalVisible?parseInt(a.totalVisible,10):p.value>=0?p.value:I(D.value,58));function I(e,t){const i=a.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((e-t*i)/t).toFixed(2)))}const M=b(()=>{if(s.value<=0||isNaN(s.value)||s.value>Number.MAX_SAFE_INTEGER)return[];if(c.value<=1)return[l.value];if(s.value<=c.value)return k(s.value,u.value);const e=c.value%2===0,t=e?c.value/2:Math.floor(c.value/2),i=e?t:t+1,r=s.value-t;if(i-l.value>=0)return[...k(Math.max(1,c.value-1),u.value),a.ellipsis,s.value];if(l.value-r>=(e?1:0)){const v=c.value-1,L=s.value-v+u.value;return[u.value,a.ellipsis,...k(v,L)]}else{const v=Math.max(1,c.value-3),L=v===1?l.value:l.value-Math.ceil(v/2)+u.value;return[u.value,a.ellipsis,...k(v,L),a.ellipsis,s.value]}});function y(e,t,i){e.preventDefault(),l.value=t,i&&_(i,t)}const{refs:N,updateRef:z}=la();A({VPaginationBtn:{color:f(a,"color"),border:f(a,"border"),density:f(a,"density"),size:f(a,"size"),variant:f(a,"variant"),rounded:f(a,"rounded"),elevation:f(a,"elevation")}});const E=b(()=>M.value.map((e,t)=>{const i=r=>z(r,t);if(typeof e=="string")return{isActive:!1,key:`ellipsis-${t}`,page:e,props:{ref:i,ellipsis:!0,icon:!0,disabled:!0}};{const r=e===l.value;return{isActive:r,key:e,page:C(e),props:{ref:i,ellipsis:!1,icon:!0,disabled:!!a.disabled||a.length<2,color:r?a.activeColor:a.color,ariaCurrent:r,ariaLabel:g(r?a.currentPageAriaLabel:a.pageAriaLabel,e),onClick:v=>y(v,e)}}}})),d=b(()=>{const e=!!a.disabled||l.value<=u.value,t=!!a.disabled||l.value>=u.value+s.value-1;return{first:a.showFirstLastPage?{icon:x.value?a.lastIcon:a.firstIcon,onClick:i=>y(i,u.value,"first"),disabled:e,ariaLabel:g(a.firstAriaLabel),ariaDisabled:e}:void 0,prev:{icon:x.value?a.nextIcon:a.prevIcon,onClick:i=>y(i,l.value-1,"prev"),disabled:e,ariaLabel:g(a.previousAriaLabel),ariaDisabled:e},next:{icon:x.value?a.prevIcon:a.nextIcon,onClick:i=>y(i,l.value+1,"next"),disabled:t,ariaLabel:g(a.nextAriaLabel),ariaDisabled:t},last:a.showFirstLastPage?{icon:x.value?a.firstIcon:a.lastIcon,onClick:i=>y(i,u.value+s.value-1,"last"),disabled:t,ariaLabel:g(a.lastAriaLabel),ariaDisabled:t}:void 0}});function S(){var t;const e=l.value-u.value;(t=N.value[e])==null||t.$el.focus()}function T(e){e.key===$.left&&!a.disabled&&l.value>a.start?(l.value=l.value-1,B(S)):e.key===$.right&&!a.disabled&&l.value<u.value+s.value-1&&(l.value=l.value+1,B(S))}return ia(()=>o(a.tag,{ref:F,class:["v-pagination",w.value],role:"navigation","aria-label":g(a.ariaLabel),onKeydown:T,"data-test":"v-pagination-root"},{default:()=>[o("ul",{class:"v-pagination__list"},[a.showFirstLastPage&&o("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[n.first?n.first(d.value.first):o(m,h({_as:"VPaginationBtn"},d.value.first),null)]),o("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[n.prev?n.prev(d.value.prev):o(m,h({_as:"VPaginationBtn"},d.value.prev),null)]),E.value.map((e,t)=>o("li",{key:e.key,class:["v-pagination__item",{"v-pagination__item--is-active":e.isActive}],"data-test":"v-pagination-item"},[n.item?n.item(e):o(m,h({_as:"VPaginationBtn"},e.props),{default:()=>[e.page]})])),o("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[n.next?n.next(d.value.next):o(m,h({_as:"VPaginationBtn"},d.value.next),null)]),a.showFirstLastPage&&o("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[n.last?n.last(d.value.last):o(m,h({_as:"VPaginationBtn"},d.value.last),null)])])]})),{}}});export{sa as V};