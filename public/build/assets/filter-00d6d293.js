import{aI as b,B as L,k as v,a4 as j,q as K,aH as w,bv as I}from"./main-51fa4cdd.js";const O=(t,r,e)=>t==null||r==null?-1:t.toString().toLocaleLowerCase().indexOf(r.toString().toLocaleLowerCase()),A=b({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function S(t,r,e){var d;const f=[],h=(e==null?void 0:e.default)??O,i=e!=null&&e.filterKeys?w(e.filterKeys):!1,u=Object.keys((e==null?void 0:e.customKeyFilter)??{}).length;if(!(t!=null&&t.length))return f;e:for(let c=0;c<t.length;c++){const a=t[c],m={},n={};let l=-1;if(r&&!(e!=null&&e.noFilter)){if(typeof a=="object"){const k=i||Object.keys(a);for(const F of k){const M=I(a,F,a),y=(d=e==null?void 0:e.customKeyFilter)==null?void 0:d[F];if(l=y?y(M,r,a):h(M,r,a),l!==-1&&l!==!1)y?m[F]=l:n[F]=l;else if((e==null?void 0:e.filterMode)==="every")continue e}}else l=h(a,r,a),l!==-1&&l!==!1&&(n.title=l);const s=Object.keys(n).length,g=Object.keys(m).length;if(!s&&!g||(e==null?void 0:e.filterMode)==="union"&&g!==u&&!s||(e==null?void 0:e.filterMode)==="intersection"&&(g!==u||!s))continue}f.push({index:c,matches:{...n,...m}})}return f}function B(t,r,e,f){const h=L(()=>typeof(e==null?void 0:e.value)!="string"&&typeof(e==null?void 0:e.value)!="number"?"":String(e.value)),i=v([]),u=v(new Map);j(()=>{i.value=[],u.value=new Map;const c=K(r);S(c,h.value,{customKeyFilter:t.customKeyFilter,default:t.customFilter,filterKeys:K(f==null?void 0:f.filterKeys)??t.filterKeys,filterMode:t.filterMode,noFilter:t.noFilter}).forEach(m=>{let{index:n,matches:l}=m;const s=c[n];i.value.push(s),u.value.set(s.value,l)})});function d(c){return u.value.get(c.value)}return{filteredItems:i,filteredMatches:u,getMatches:d}}export{A as m,B as u};
