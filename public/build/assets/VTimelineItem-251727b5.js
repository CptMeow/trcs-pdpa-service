import{au as c,aS as I,aZ as b,av as V,aw as B,aT as P,bd as h,ay as a,B as f,aA as v,p as n,az as u,aC as D,b4 as _,bg as k,b2 as T,bj as $,b7 as g,b9 as R,b8 as j,C as N,bm as w,bn as E,k as S,z as L}from"./main-51fa4cdd.js";const x=c()({name:"VTimeline",props:{align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>e==null||["start","end"].includes(e)},lineInset:{type:[String,Number],default:0},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...I(),...b(),...V()},setup(e,d){let{slots:t}=d;const{themeClasses:r}=B(e),{densityClasses:s}=P(e);h({VTimelineDivider:{lineColor:a(e,"lineColor")},VTimelineItem:{density:a(e,"density"),lineInset:a(e,"lineInset")}});const o=f(()=>{const i=e.side?e.side:e.density!=="default"?"end":null;return i&&`v-timeline--side-${i}`}),l=f(()=>{const i=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return i;case"start":return i[0];case"end":return i[1];default:return null}});return v(()=>n(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,l.value,{"v-timeline--inset-line":!!e.lineInset},r.value,s.value,o.value],style:{"--v-timeline-line-thickness":u(e.lineThickness)}},t)),{}}}),O=c()({name:"VTimelineDivider",props:{dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:D,iconColor:String,lineColor:String,..._(),...k(),...T()},setup(e,d){let{slots:t}=d;const{sizeClasses:r,sizeStyles:s}=$(e,"v-timeline-divider__dot"),{backgroundColorStyles:o,backgroundColorClasses:l}=g(a(e,"dotColor")),{roundedClasses:i}=R(e,"v-timeline-divider__dot"),{elevationClasses:z}=j(e),{backgroundColorClasses:m,backgroundColorStyles:C}=g(a(e,"lineColor"));return h({VIcon:{color:a(e,"iconColor"),icon:a(e,"icon"),size:a(e,"size")}}),v(()=>{var y;return n("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot}]},[n("div",{class:["v-timeline-divider__before",m.value],style:C.value},null),!e.hideDot&&n("div",{key:"dot",class:["v-timeline-divider__dot",z.value,i.value,r.value],style:s.value},[n("div",{class:["v-timeline-divider__inner-dot",l.value,i.value],style:o.value},[((y=t.default)==null?void 0:y.call(t))??(e.icon?n(N,null,null):void 0)])]),n("div",{class:["v-timeline-divider__after",m.value],style:C.value},null)])}),{}}}),A=c()({name:"VTimelineItem",props:{density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:D,iconColor:String,lineInset:[Number,String],..._(),...T(),...k(),...b(),...w()},setup(e,d){let{slots:t}=d;const{dimensionStyles:r}=E(e),s=S(0),o=S();return L(o,l=>{var i;l&&(s.value=((i=l.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:i.getBoundingClientRect().width)??0)},{flush:"post"}),v(()=>{var l,i;return n("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot}],style:{"--v-timeline-dot-size":u(s.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${u(e.lineInset)})`:u(0)}},[n("div",{class:"v-timeline-item__body",style:r.value},[(l=t.default)==null?void 0:l.call(t)]),n(O,{ref:o,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:t.icon}),e.density!=="compact"&&n("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&((i=t.opposite)==null?void 0:i.call(t))])])}),{}}});export{x as V,A as a};