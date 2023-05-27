import{Z as se,P as de}from"./index-a0fff168.js";import{r as pe}from"./vue.runtime.esm-bundler-9d0863e9.js";var ne={exports:{}};(function(oe,fe){(function(Q,K){oe.exports=K(pe)})(se,function(Q){return function(){var K={789:function(p){p.exports=Q}},Y={};function w(p){var C=Y[p];if(C!==void 0)return C.exports;var v=Y[p]={exports:{}};return K[p](v,v.exports,w),v.exports}w.d=function(p,C){for(var v in C)w.o(C,v)&&!w.o(p,v)&&Object.defineProperty(p,v,{enumerable:!0,get:C[v]})},w.o=function(p,C){return Object.prototype.hasOwnProperty.call(p,C)},w.r=function(p){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(p,"__esModule",{value:!0})};var H={};return function(){function p(e,t){(t==null||t>e.length)&&(t=e.length);for(var o=0,l=new Array(t);o<t;o++)l[o]=e[o];return l}function C(e,t){if(e){if(typeof e=="string")return p(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return o==="Object"&&e.constructor&&(o=e.constructor.name),o==="Map"||o==="Set"?Array.from(e):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?p(e,t):void 0}}function v(e){return function(t){if(Array.isArray(t))return p(t)}(e)||function(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}(e)||C(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function F(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}w.r(H),w.d(H,{default:function(){return ie}});var r=w(789),re=(0,r.defineComponent)({props:{data:{required:!0,type:String},onClick:Function},render:function(){var e=this.data,t=this.onClick;return(0,r.createVNode)("span",{class:"vjs-tree-brackets",onClick:t},[e])}}),ae=(0,r.defineComponent)({emits:["change","update:modelValue"],props:{checked:{type:Boolean,default:!1},isMultiple:Boolean,onChange:Function},setup:function(e,t){var o=t.emit;return{uiType:(0,r.computed)(function(){return e.isMultiple?"checkbox":"radio"}),model:(0,r.computed)({get:function(){return e.checked},set:function(l){return o("update:modelValue",l)}})}},render:function(){var e=this.uiType,t=this.model,o=this.$emit;return(0,r.createVNode)("label",{class:["vjs-check-controller",t?"is-checked":""],onClick:function(l){return l.stopPropagation()}},[(0,r.createVNode)("span",{class:"vjs-check-controller-inner is-".concat(e)},null),(0,r.createVNode)("input",{checked:t,class:"vjs-check-controller-original is-".concat(e),type:e,onChange:function(){return o("change",t)}},null)])}}),le=(0,r.defineComponent)({props:{nodeType:{required:!0,type:String},onClick:Function},render:function(){var e=this.nodeType,t=this.onClick,o=e==="objectStart"||e==="arrayStart";return o||e==="objectCollapsed"||e==="arrayCollapsed"?(0,r.createVNode)("span",{class:"vjs-carets vjs-carets-".concat(o?"open":"close"),onClick:t},[(0,r.createVNode)("svg",{viewBox:"0 0 1024 1024",focusable:"false","data-icon":"caret-down",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},[(0,r.createVNode)("path",{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"},null)])]):null}});function M(e){return M=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(e)}function z(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function x(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"root",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,l=arguments.length>3?arguments[3]:void 0,h=l||{},m=h.key,O=h.index,s=h.type,k=s===void 0?"content":s,y=h.showComma,V=y!==void 0&&y,N=h.length,T=N===void 0?1:N,B=z(e);if(B==="array"){var D=R(e.map(function(b,i,n){return x(b,"".concat(t,"[").concat(i,"]"),o+1,{index:i,showComma:i!==n.length-1,length:T,type:k})}));return[x("[",t,o,{showComma:!1,key:m,length:e.length,type:"arrayStart"})[0]].concat(D,x("]",t,o,{showComma:V,length:e.length,type:"arrayEnd"})[0])}if(B==="object"){var P=Object.keys(e),E=R(P.map(function(b,i,n){return x(e[b],/^[a-zA-Z_]\w*$/.test(b)?"".concat(t,".").concat(b):"".concat(t,'["').concat(b,'"]'),o+1,{key:b,showComma:i!==n.length-1,length:T,type:k})}));return[x("{",t,o,{showComma:!1,key:m,index:O,length:P.length,type:"objectStart"})[0]].concat(E,x("}",t,o,{showComma:V,length:P.length,type:"objectEnd"})[0])}return[{content:e,level:o,key:m,index:O,path:t,showComma:V,length:T,type:k}]}function R(e){if(typeof Array.prototype.flat=="function")return e.flat();for(var t=v(e),o=[];t.length;){var l=t.shift();Array.isArray(l)?t.unshift.apply(t,v(l)):o.push(l)}return o}function $(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new WeakMap;if(e==null)return e;if(e instanceof Date)return new Date(e);if(e instanceof RegExp)return new RegExp(e);if(M(e)!=="object")return e;if(t.get(e))return t.get(e);if(Array.isArray(e)){var o=e.map(function(m){return $(m,t)});return t.set(e,o),o}var l={};for(var h in e)l[h]=$(e[h],t);return t.set(e,l),l}function _(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(h){return Object.getOwnPropertyDescriptor(e,h).enumerable})),o.push.apply(o,l)}return o}function W(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?_(Object(o),!0).forEach(function(l){F(e,l,o[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):_(Object(o)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(o,l))})}return e}var Z={showLength:{type:Boolean,default:!1},showDoubleQuotes:{type:Boolean,default:!0},renderNodeKey:Function,renderNodeValue:Function,selectableType:String,showSelectController:{type:Boolean,default:!1},showLine:{type:Boolean,default:!0},showLineNumber:{type:Boolean,default:!1},selectOnClickNode:{type:Boolean,default:!0},nodeSelectable:{type:Function,default:function(){return!0}},highlightSelectedNode:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!1},showKeyValueSpace:{type:Boolean,default:!0},editable:{type:Boolean,default:!1},editableTrigger:{type:String,default:"click"},onNodeClick:{type:Function},onBracketsClick:{type:Function},onIconClick:{type:Function},onValueChange:{type:Function}},ce=(0,r.defineComponent)({name:"TreeNode",props:W(W({},Z),{},{node:{type:Object,required:!0},collapsed:Boolean,checked:Boolean,style:Object,onSelectedChange:{type:Function}}),emits:["nodeClick","bracketsClick","iconClick","selectedChange","valueChange"],setup:function(e,t){var o=t.emit,l=(0,r.computed)(function(){return z(e.node.content)}),h=(0,r.computed)(function(){return"vjs-value vjs-value-".concat(l.value)}),m=(0,r.computed)(function(){return e.showDoubleQuotes?'"'.concat(e.node.key,'"'):e.node.key}),O=(0,r.computed)(function(){return e.selectableType==="multiple"}),s=(0,r.computed)(function(){return e.selectableType==="single"}),k=(0,r.computed)(function(){return e.nodeSelectable(e.node)&&(O.value||s.value)}),y=(0,r.reactive)({editing:!1}),V=function(i){var n,a,c=(a=(n=i.target)===null||n===void 0?void 0:n.value)==="null"?null:a==="undefined"?void 0:a==="true"||a!=="false"&&(a[0]+a[a.length-1]==='""'||a[0]+a[a.length-1]==="''"?a.slice(1,-1):typeof Number(a)=="number"&&!isNaN(Number(a))||a==="NaN"?Number(a):a);o("valueChange",c,e.node.path)},N=(0,r.computed)(function(){var i,n=(i=e.node)===null||i===void 0?void 0:i.content;return n===null?n="null":n===void 0&&(n="undefined"),l.value==="string"?'"'.concat(n,'"'):n+""}),T=function(){var i=e.renderNodeValue;return i?i({node:e.node,defaultValue:N.value}):N.value},B=function(){o("bracketsClick",!e.collapsed,e.node.path)},D=function(){o("iconClick",!e.collapsed,e.node.path)},P=function(){o("selectedChange",e.node)},E=function(){o("nodeClick",e.node),k.value&&e.selectOnClickNode&&o("selectedChange",e.node)},b=function(i){if(e.editable&&!y.editing){y.editing=!0;var n=function a(c){var u;c.target!==i.target&&((u=c.target)===null||u===void 0?void 0:u.parentElement)!==i.target&&(y.editing=!1,document.removeEventListener("click",a))};document.removeEventListener("click",n),document.addEventListener("click",n)}};return function(){var i,n=e.node;return(0,r.createVNode)("div",{class:{"vjs-tree-node":!0,"has-selector":e.showSelectController,"has-carets":e.showIcon,"is-highlight":e.highlightSelectedNode&&e.checked},onClick:E,style:e.style},[e.showLineNumber&&(0,r.createVNode)("span",{class:"vjs-node-index"},[n.id+1]),e.showSelectController&&k.value&&n.type!=="objectEnd"&&n.type!=="arrayEnd"&&(0,r.createVNode)(ae,{isMultiple:O.value,checked:e.checked,onChange:P},null),(0,r.createVNode)("div",{class:"vjs-indent"},[Array.from(Array(n.level)).map(function(a,c){return(0,r.createVNode)("div",{key:c,class:{"vjs-indent-unit":!0,"has-line":e.showLine}},null)}),e.showIcon&&(0,r.createVNode)(le,{nodeType:n.type,onClick:D},null)]),n.key&&(0,r.createVNode)("span",{class:"vjs-key"},[(i=e.renderNodeKey,i?i({node:e.node,defaultKey:m.value||""}):m.value),(0,r.createVNode)("span",{class:"vjs-colon"},[":".concat(e.showKeyValueSpace?" ":"")])]),(0,r.createVNode)("span",null,[n.type!=="content"&&n.content?(0,r.createVNode)(re,{data:n.content.toString(),onClick:B},null):(0,r.createVNode)("span",{class:h.value,onClick:!e.editable||e.editableTrigger&&e.editableTrigger!=="click"?void 0:b,onDblclick:e.editable&&e.editableTrigger==="dblclick"?b:void 0},[e.editable&&y.editing?(0,r.createVNode)("input",{value:N.value,onChange:V,style:{padding:"3px 8px",border:"1px solid #eee",boxShadow:"none",boxSizing:"border-box",borderRadius:5,fontFamily:"inherit"}},null):T()]),n.showComma&&(0,r.createVNode)("span",null,[","]),e.showLength&&e.collapsed&&(0,r.createVNode)("span",{class:"vjs-comment"},[(0,r.createTextVNode)(" // "),n.length,(0,r.createTextVNode)(" items ")])])])}}});function G(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(h){return Object.getOwnPropertyDescriptor(e,h).enumerable})),o.push.apply(o,l)}return o}function g(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?G(Object(o),!0).forEach(function(l){F(e,l,o[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):G(Object(o)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(o,l))})}return e}var ie=(0,r.defineComponent)({name:"Tree",props:g(g({},Z),{},{data:{type:[String,Number,Boolean,Array,Object],default:null},deep:{type:Number,default:1/0},pathCollapsible:{type:Function,default:function(){return!1}},rootPath:{type:String,default:"root"},virtual:{type:Boolean,default:!1},height:{type:Number,default:400},itemHeight:{type:Number,default:20},selectedValue:{type:[String,Array],default:function(){return""}},collapsedOnClickBrackets:{type:Boolean,default:!0},style:Object,onSelectedChange:{type:Function}}),slots:["renderNodeKey","renderNodeValue"],emits:["nodeClick","bracketsClick","iconClick","selectedChange","update:selectedValue","update:data"],setup:function(e,t){var o=t.emit,l=t.slots,h=(0,r.ref)(),m=(0,r.computed)(function(){return x(e.data,e.rootPath)}),O=function(n){return m.value.reduce(function(a,c){var u,d=c.level>=n,f=(u=e.pathCollapsible)===null||u===void 0?void 0:u.call(e,c);return c.type!=="objectStart"&&c.type!=="arrayStart"||!d&&!f?a:g(g({},a),{},F({},c.path,1))},{})},s=(0,r.reactive)({translateY:0,visibleData:null,hiddenPaths:O(e.deep)}),k=(0,r.computed)(function(){for(var n=null,a=[],c=m.value.length,u=0;u<c;u++){var d=g(g({},m.value[u]),{},{id:u}),f=s.hiddenPaths[d.path];if(n&&n.path===d.path){var j=n.type==="objectStart",I=g(g(g({},d),n),{},{showComma:d.showComma,content:j?"{...}":"[...]",type:j?"objectCollapsed":"arrayCollapsed"});n=null,a.push(I)}else{if(f&&!n){n=d;continue}if(n)continue;a.push(d)}}return a}),y=(0,r.computed)(function(){var n=e.selectedValue;return n&&e.selectableType==="multiple"&&Array.isArray(n)?n:[n]}),V=(0,r.computed)(function(){return!e.selectableType||e.selectOnClickNode||e.showSelectController?"":"When selectableType is not null, selectOnClickNode and showSelectController cannot be false at the same time, because this will cause the selection to fail."}),N=function(){var n=k.value;if(e.virtual){var a,c=e.height/e.itemHeight,u=((a=h.value)===null||a===void 0?void 0:a.scrollTop)||0,d=Math.floor(u/e.itemHeight),f=d<0?0:d+c>n.length?n.length-c:d;f<0&&(f=0);var j=f+c;s.translateY=f*e.itemHeight,s.visibleData=n.filter(function(I,L){return L>=f&&L<j})}else s.visibleData=n},T=function(){N()},B=function(n){var a,c,u=n.path,d=e.selectableType;if(d==="multiple"){var f=y.value.findIndex(function(S){return S===u}),j=v(y.value);f!==-1?j.splice(f,1):j.push(u),o("update:selectedValue",j),o("selectedChange",j,v(y.value))}else if(d==="single"&&y.value[0]!==u){var I=(a=y.value,c=1,function(S){if(Array.isArray(S))return S}(a)||function(S,U){var A=S==null?null:typeof Symbol<"u"&&S[Symbol.iterator]||S["@@iterator"];if(A!=null){var X,ee,q=[],J=!0,te=!1;try{for(A=A.call(S);!(J=(X=A.next()).done)&&(q.push(X.value),!U||q.length!==U);J=!0);}catch(ue){te=!0,ee=ue}finally{try{J||A.return==null||A.return()}finally{if(te)throw ee}}return q}}(a,c)||C(a,c)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}())[0],L=u;o("update:selectedValue",L),o("selectedChange",L,I)}},D=function(n){o("nodeClick",n)},P=function(n,a){if(n)s.hiddenPaths=g(g({},s.hiddenPaths),{},F({},a,1));else{var c=g({},s.hiddenPaths);delete c[a],s.hiddenPaths=c}},E=function(n,a){e.collapsedOnClickBrackets&&P(n,a),o("bracketsClick",n)},b=function(n,a){P(n,a),o("iconClick",n)},i=function(n,a){var c=$(e.data),u=e.rootPath;new Function("data","val","data".concat(a.slice(u.length),"=val"))(c,n),o("update:data",c)};return(0,r.watchEffect)(function(){V.value&&function(n){throw new Error("[VueJSONPretty] ".concat(n))}(V.value)}),(0,r.watchEffect)(function(){k.value&&N()}),(0,r.watch)(function(){return e.deep},function(n){n&&(s.hiddenPaths=O(n))}),function(){var n,a,c=(n=e.renderNodeKey)!==null&&n!==void 0?n:l.renderNodeKey,u=(a=e.renderNodeValue)!==null&&a!==void 0?a:l.renderNodeValue,d=s.visibleData&&s.visibleData.map(function(f){return(0,r.createVNode)(ce,{key:f.id,node:f,collapsed:!!s.hiddenPaths[f.path],showDoubleQuotes:e.showDoubleQuotes,showLength:e.showLength,checked:y.value.includes(f.path),selectableType:e.selectableType,showLine:e.showLine,showLineNumber:e.showLineNumber,showSelectController:e.showSelectController,selectOnClickNode:e.selectOnClickNode,nodeSelectable:e.nodeSelectable,highlightSelectedNode:e.highlightSelectedNode,editable:e.editable,editableTrigger:e.editableTrigger,showIcon:e.showIcon,showKeyValueSpace:e.showKeyValueSpace,renderNodeKey:c,renderNodeValue:u,onNodeClick:D,onBracketsClick:E,onIconClick:b,onSelectedChange:B,onValueChange:i,style:e.itemHeight&&e.itemHeight!==20?{lineHeight:"".concat(e.itemHeight,"px")}:{}},null)});return(0,r.createVNode)("div",{ref:h,class:{"vjs-tree":!0,"is-virtual":e.virtual},onScroll:e.virtual?T:void 0,style:e.showLineNumber?g({paddingLeft:"".concat(12*Number(m.value.length.toString().length),"px")},e.style):e.style},[e.virtual?(0,r.createVNode)("div",{class:"vjs-tree-list",style:{height:"".concat(e.height,"px")}},[(0,r.createVNode)("div",{class:"vjs-tree-list-holder",style:{height:"".concat(k.value.length*e.itemHeight,"px")}},[(0,r.createVNode)("div",{class:"vjs-tree-list-holder-inner",style:{transform:"translateY(".concat(s.translateY,"px)")}},[d])])]):d])}}})}(),H}()})})(ne);var he=ne.exports;const ge=de(he);export{ge as V};
