import{au as h,aS as d,aZ as v,av as b,aw as m,aT as f,aA as u,p as t,az as c}from"./main-51fa4cdd.js";const x=h()({name:"VTable",props:{fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...d(),...v(),...b()},setup(a,i){let{slots:e}=i;const{themeClasses:n}=m(a),{densityClasses:s}=f(a);return u(()=>t(a.tag,{class:["v-table",{"v-table--fixed-height":!!a.height,"v-table--fixed-header":a.fixedHeader,"v-table--fixed-footer":a.fixedFooter,"v-table--has-top":!!e.top,"v-table--has-bottom":!!e.bottom,"v-table--hover":a.hover},n.value,s.value]},{default:()=>{var o,l,r;return[(o=e.top)==null?void 0:o.call(e),e.default?t("div",{class:"v-table__wrapper",style:{height:c(a.height)}},[t("table",null,[e.default()])]):(l=e.wrapper)==null?void 0:l.call(e),(r=e.bottom)==null?void 0:r.call(e)]}})),{}}});export{x as V};