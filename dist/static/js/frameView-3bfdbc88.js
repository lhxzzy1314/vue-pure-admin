import{d as v,X as p,r as o,b5 as h,u as e,o as g,i as x,m as w,e as V,j as k,h as R,n as b,_ as y}from"./index-a0fff168.js";const B=["element-loading-text"],E=["src"],L=v({name:"FrameView",__name:"frameView",setup(S){var f,_,l;const{t:m}=p(),r=o(!0),t=h(),c=o(""),i=o(null);(f=e(t.meta))!=null&&f.frameSrc&&(c.value=(_=e(t.meta))==null?void 0:_.frameSrc),((l=e(t.meta))==null?void 0:l.frameLoading)===!1&&n();function n(){r.value=!1}function u(){b(()=>{const a=e(i);if(!a)return;const s=a;s.attachEvent?s.attachEvent("onload",()=>{n()}):a.onload=()=>{n()}})}return g(()=>{u()}),(a,s)=>{const d=x("loading");return w((V(),k("div",{class:"frame","element-loading-text":e(m)("status.hsLoad")},[R("iframe",{src:c.value,class:"frame-iframe",ref_key:"frameRef",ref:i},null,8,E)],8,B)),[[d,r.value]])}}});const I=y(L,[["__scopeId","data-v-94a6f1bc"]]);export{I as default};
