import{dB as te,d as de,dC as pe,k as fe,dD as he,B as ve,r as me,o as W,b as N,w as k,p as A,q as w,s as ye,C as V,R as ne,x as re,n as se,at as be,L as xe,m as X,dE as Fe,I as Ae,H as ie,M as we}from"./main-51fa4cdd.js";import{r as ke}from"./vue.runtime.esm-bundler-23bef556.js";import{a as Se,b as $e,d as le,V as Ee}from"./VCard-6736eb7f.js";import{V as _e}from"./VDivider-61df3248.js";var J={},Ce={get exports(){return J},set exports(F){J=F}};(function(F){var S=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(o){var d=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,h=0,y={},i={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function a(e){return e instanceof f?new f(e.type,a(e.content),e.alias):Array.isArray(e)?e.map(a):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(a){return Object.prototype.toString.call(a).slice(8,-1)},objId:function(a){return a.__id||Object.defineProperty(a,"__id",{value:++h}),a.__id},clone:function a(e,t){t=t||{};var r,s;switch(i.util.type(e)){case"Object":if(s=i.util.objId(e),t[s])return t[s];r={},t[s]=r;for(var u in e)e.hasOwnProperty(u)&&(r[u]=a(e[u],t));return r;case"Array":return s=i.util.objId(e),t[s]?t[s]:(r=[],t[s]=r,e.forEach(function(g,l){r[l]=a(g,t)}),r);default:return e}},getLanguage:function(a){for(;a;){var e=d.exec(a.className);if(e)return e[1].toLowerCase();a=a.parentElement}return"none"},setLanguage:function(a,e){a.className=a.className.replace(RegExp(d,"gi"),""),a.classList.add("language-"+e)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(r){var a=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(a){var e=document.getElementsByTagName("script");for(var t in e)if(e[t].src==a)return e[t]}return null}},isActive:function(a,e,t){for(var r="no-"+e;a;){var s=a.classList;if(s.contains(e))return!0;if(s.contains(r))return!1;a=a.parentElement}return!!t}},languages:{plain:y,plaintext:y,text:y,txt:y,extend:function(a,e){var t=i.util.clone(i.languages[a]);for(var r in e)t[r]=e[r];return t},insertBefore:function(a,e,t,r){r=r||i.languages;var s=r[a],u={};for(var g in s)if(s.hasOwnProperty(g)){if(g==e)for(var l in t)t.hasOwnProperty(l)&&(u[l]=t[l]);t.hasOwnProperty(g)||(u[g]=s[g])}var p=r[a];return r[a]=u,i.languages.DFS(i.languages,function(b,T){T===p&&b!=a&&(this[b]=u)}),u},DFS:function a(e,t,r,s){s=s||{};var u=i.util.objId;for(var g in e)if(e.hasOwnProperty(g)){t.call(e,g,e[g],r||g);var l=e[g],p=i.util.type(l);p==="Object"&&!s[u(l)]?(s[u(l)]=!0,a(l,t,null,s)):p==="Array"&&!s[u(l)]&&(s[u(l)]=!0,a(l,t,g,s))}}},plugins:{},highlightAll:function(a,e){i.highlightAllUnder(document,a,e)},highlightAllUnder:function(a,e,t){var r={callback:t,container:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),i.hooks.run("before-all-elements-highlight",r);for(var s=0,u;u=r.elements[s++];)i.highlightElement(u,e===!0,r.callback)},highlightElement:function(a,e,t){var r=i.util.getLanguage(a),s=i.languages[r];i.util.setLanguage(a,r);var u=a.parentElement;u&&u.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(u,r);var g=a.textContent,l={element:a,language:r,grammar:s,code:g};function p(T){l.highlightedCode=T,i.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,i.hooks.run("after-highlight",l),i.hooks.run("complete",l),t&&t.call(l.element)}if(i.hooks.run("before-sanity-check",l),u=l.element.parentElement,u&&u.nodeName.toLowerCase()==="pre"&&!u.hasAttribute("tabindex")&&u.setAttribute("tabindex","0"),!l.code){i.hooks.run("complete",l),t&&t.call(l.element);return}if(i.hooks.run("before-highlight",l),!l.grammar){p(i.util.encode(l.code));return}if(e&&o.Worker){var b=new Worker(i.filename);b.onmessage=function(T){p(T.data)},b.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else p(i.highlight(l.code,l.grammar,l.language))},highlight:function(a,e,t){var r={code:a,grammar:e,language:t};if(i.hooks.run("before-tokenize",r),!r.grammar)throw new Error('The language "'+r.language+'" has no grammar.');return r.tokens=i.tokenize(r.code,r.grammar),i.hooks.run("after-tokenize",r),f.stringify(i.util.encode(r.tokens),r.language)},tokenize:function(a,e){var t=e.rest;if(t){for(var r in t)e[r]=t[r];delete e.rest}var s=new j;return z(s,s.head,a),C(a,s,e,s.head,0),P(s)},hooks:{all:{},add:function(a,e){var t=i.hooks.all;t[a]=t[a]||[],t[a].push(e)},run:function(a,e){var t=i.hooks.all[a];if(!(!t||!t.length))for(var r=0,s;s=t[r++];)s(e)}},Token:f};o.Prism=i;function f(a,e,t,r){this.type=a,this.content=e,this.alias=t,this.length=(r||"").length|0}f.stringify=function a(e,t){if(typeof e=="string")return e;if(Array.isArray(e)){var r="";return e.forEach(function(p){r+=a(p,t)}),r}var s={type:e.type,content:a(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t},u=e.alias;u&&(Array.isArray(u)?Array.prototype.push.apply(s.classes,u):s.classes.push(u)),i.hooks.run("wrap",s);var g="";for(var l in s.attributes)g+=" "+l+'="'+(s.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+g+">"+s.content+"</"+s.tag+">"};function $(a,e,t,r){a.lastIndex=e;var s=a.exec(t);if(s&&r&&s[1]){var u=s[1].length;s.index+=u,s[0]=s[0].slice(u)}return s}function C(a,e,t,r,s,u){for(var g in t)if(!(!t.hasOwnProperty(g)||!t[g])){var l=t[g];l=Array.isArray(l)?l:[l];for(var p=0;p<l.length;++p){if(u&&u.cause==g+","+p)return;var b=l[p],T=b.inside,K=!!b.lookbehind,Q=!!b.greedy,ue=b.alias;if(Q&&!b.pattern.global){var oe=b.pattern.toString().match(/[imsuy]*$/)[0];b.pattern=RegExp(b.pattern.source,oe+"g")}for(var ee=b.pattern||b,x=r.next,_=s;x!==e.tail&&!(u&&_>=u.reach);_+=x.value.length,x=x.next){var I=x.value;if(e.length>a.length)return;if(!(I instanceof f)){var M=1,E;if(Q){if(E=$(ee,_,a,K),!E||E.index>=a.length)break;var B=E.index,ge=E.index+E[0].length,L=_;for(L+=x.value.length;B>=L;)x=x.next,L+=x.value.length;if(L-=x.value.length,_=L,x.value instanceof f)continue;for(var D=x;D!==e.tail&&(L<ge||typeof D.value=="string");D=D.next)M++,L+=D.value.length;M--,I=a.slice(_,L),E.index-=_}else if(E=$(ee,0,I,K),!E)continue;var B=E.index,O=E[0],G=I.slice(0,B),ae=I.slice(B+O.length),U=_+I.length;u&&U>u.reach&&(u.reach=U);var R=x.prev;G&&(R=z(e,R,G),_+=G.length),q(e,R,M);var ce=new f(g,T?i.tokenize(O,T):O,ue,O);if(x=z(e,R,ce),ae&&z(e,x,ae),M>1){var Z={cause:g+","+p,reach:U};C(a,e,t,x.prev,_,Z),u&&Z.reach>u.reach&&(u.reach=Z.reach)}}}}}}function j(){var a={value:null,prev:null,next:null},e={value:null,prev:a,next:null};a.next=e,this.head=a,this.tail=e,this.length=0}function z(a,e,t){var r=e.next,s={value:t,prev:e,next:r};return e.next=s,r.prev=s,a.length++,s}function q(a,e,t){for(var r=e.next,s=0;s<t&&r!==a.tail;s++)r=r.next;e.next=r,r.prev=e,a.length-=s}function P(a){for(var e=[],t=a.head.next;t!==a.tail;)e.push(t.value),t=t.next;return e}if(!o.document)return o.addEventListener&&(i.disableWorkerMessageHandler||o.addEventListener("message",function(a){var e=JSON.parse(a.data),t=e.language,r=e.code,s=e.immediateClose;o.postMessage(i.highlight(r,i.languages[t],t)),s&&o.close()},!1)),i;var v=i.util.currentScript();v&&(i.filename=v.src,v.hasAttribute("data-manual")&&(i.manual=!0));function c(){i.manual||i.highlightAll()}if(!i.manual){var m=document.readyState;m==="loading"||m==="interactive"&&v&&v.defer?document.addEventListener("DOMContentLoaded",c):window.requestAnimationFrame?window.requestAnimationFrame(c):window.setTimeout(c,16)}return i}(S);F.exports&&(F.exports=n),typeof te<"u"&&(te.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(o){o.type==="entity"&&(o.attributes.title=o.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(d,h){var y={};y["language-"+h]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[h]},y.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:y}};i["language-"+h]={pattern:/[\s\S]+/,inside:n.languages[h]};var f={};f[d]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return d}),"i"),lookbehind:!0,greedy:!0,inside:i},n.languages.insertBefore("markup","cdata",f)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(o,d){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+o+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[d,"language-"+d],inside:n.languages[d]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(o){var d=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;o.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+d.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+d.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+d.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+d.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:d,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},o.languages.css.atrule.inside.rest=o.languages.css;var h=o.languages.markup;h&&(h.tag.addInlined("style","css"),h.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var o="Loading…",d=function(v,c){return"✖ Error "+v+" while fetching file: "+c},h="✖ Error: File does not exist or is empty",y={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},i="data-src-status",f="loading",$="loaded",C="failed",j="pre[data-src]:not(["+i+'="'+$+'"]):not(['+i+'="'+f+'"])';function z(v,c,m){var a=new XMLHttpRequest;a.open("GET",v,!0),a.onreadystatechange=function(){a.readyState==4&&(a.status<400&&a.responseText?c(a.responseText):a.status>=400?m(d(a.status,a.statusText)):m(h))},a.send(null)}function q(v){var c=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(v||"");if(c){var m=Number(c[1]),a=c[2],e=c[3];return a?e?[m,Number(e)]:[m,void 0]:[m,m]}}n.hooks.add("before-highlightall",function(v){v.selector+=", "+j}),n.hooks.add("before-sanity-check",function(v){var c=v.element;if(c.matches(j)){v.code="",c.setAttribute(i,f);var m=c.appendChild(document.createElement("CODE"));m.textContent=o;var a=c.getAttribute("data-src"),e=v.language;if(e==="none"){var t=(/\.(\w+)$/.exec(a)||[,"none"])[1];e=y[t]||t}n.util.setLanguage(m,e),n.util.setLanguage(c,e);var r=n.plugins.autoloader;r&&r.loadLanguages(e),z(a,function(s){c.setAttribute(i,$);var u=q(c.getAttribute("data-range"));if(u){var g=s.split(/\r\n?|\n/g),l=u[0],p=u[1]==null?g.length:u[1];l<0&&(l+=g.length),l=Math.max(0,Math.min(l-1,g.length)),p<0&&(p+=g.length),p=Math.max(0,Math.min(p,g.length)),s=g.slice(l,p).join(`
`),c.hasAttribute("data-start")||c.setAttribute("data-start",String(l+1))}m.textContent=s,n.highlightElement(m)},function(s){c.setAttribute(i,C),m.textContent=s})}}),n.plugins.fileHighlight={highlight:function(c){for(var m=(c||document).querySelectorAll(j),a=0,e;e=m[a++];)n.highlightElement(e)}};var P=!1;n.fileHighlight=function(){P||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),P=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Ce);function Te(F){return F&&typeof F=="object"&&"default"in F?F.default:F}var H=ke,Y=Te(J),Le=H.defineComponent({props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},setup:function(S,n){var o=n.slots,d=n.attrs,h=o&&o.default&&o.default()||[],y=S.code||h&&h.length?h[0].children:"",i=S.inline,f=S.language,$=Y.languages[f],C="language-".concat(f);return function(){return i?H.h("code",{class:[C],innerHTML:Y.highlight(y,$)}):H.h("pre",Object.assign({},d,{class:[d.class,C]}),[H.h("code",Object.assign({},d,{class:[d.class,C],innerHTML:Y.highlight(y,$)}))])}}}),ze=Le;const Ie={class:"d-flex justify-end"},je={class:"position-relative"},Oe=de({__name:"AppCardCode",props:{title:null,code:null,codeLanguage:{default:"markup"},noPadding:{type:Boolean,default:!1}},setup(F){const S=F,n=pe("preferredCodeLanguage","ts"),o=fe(!1),{copy:d,copied:h}=he({source:ve(()=>S.code[n.value])});return(y,i)=>{const f=me("IconBtn");return W(),N(Ee,null,{default:k(()=>[A(Se,null,{append:k(()=>[A(f,{color:w(o)?"primary":"default",class:ye(w(o)?"":"text-disabled"),onClick:i[0]||(i[0]=$=>o.value=!w(o))},{default:k(()=>[A(V,{size:"20",icon:"bx-code"})]),_:1},8,["color","class"])]),default:k(()=>[A($e,null,{default:k(()=>[ne(re(S.title),1)]),_:1})]),_:1}),F.noPadding?se(y.$slots,"default",{key:0}):(W(),N(le,{key:1},{default:k(()=>[se(y.$slots,"default")]),_:3})),A(be,null,{default:k(()=>[xe(X("div",null,[A(_e),A(le,{class:"d-flex gap-y-3 flex-column"},{default:k(()=>[X("div",Ie,[A(Fe,{modelValue:w(n),"onUpdate:modelValue":i[1]||(i[1]=$=>Ae(n)?n.value=$:null),mandatory:"",variant:"outlined",density:"compact"},{default:k(()=>[A(ie,{size:"x-small",value:"ts",color:w(n)==="ts"?"primary":"default"},{default:k(()=>[A(V,{size:"x-large",icon:"custom-typescript",color:w(n)==="ts"?"primary":"secondary"},null,8,["color"])]),_:1},8,["color"]),A(ie,{size:"x-small",value:"js",color:w(n)==="js"?"primary":"default"},{default:k(()=>[A(V,{size:"x-large",icon:"custom-javascript",color:w(n)==="js"?"primary":"secondary"},null,8,["color"])]),_:1},8,["color"])]),_:1},8,["modelValue"])]),X("div",je,[(W(),N(w(ze),{key:S.code[w(n)],language:S.codeLanguage},{default:k(()=>[ne(re(S.code[w(n)]),1)]),_:1},8,["language"])),A(f,{class:"position-absolute app-card-code-copy-icon",color:"white",onClick:i[2]||(i[2]=()=>{w(d)()})},{default:k(()=>[A(V,{icon:w(h)?"bx-check":"bx-copy",size:"20"},null,8,["icon"])]),_:1})])]),_:1})],512),[[we,w(o)]])]),_:1})]),_:3})}}});export{Oe as _};