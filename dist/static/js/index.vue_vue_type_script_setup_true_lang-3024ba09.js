import{useColumns as x}from"./columns-d4201fdf.js";import{d as k,r as c,b as t,e as y,c as R,w as r,h as V,f as p,u as e,g as v,a_ as S}from"./index-a0fff168.js";const w={class:"w-[600px] m-4"},P=k({__name:"index",setup(T){const l=c(),n=c(),{columns:i,pagination:a,selectValue:o,tableDataEdit:u,onClear:m,onSure:_,removeTag:d,handleSelectionChange:f}=x(l,n);return(z,s)=>{const g=t("pure-table"),b=t("el-button"),C=t("el-select");return y(),R(C,{class:"w-[160px]",ref_key:"selectRef",ref:l,modelValue:e(o),"onUpdate:modelValue":s[0]||(s[0]=h=>S(o)?o.value=h:null),placeholder:"请选择",clearable:"",multiple:"","collapse-tags":"","collapse-tags-tooltip":"",onRemoveTag:e(d),onClear:e(m)},{empty:r(()=>[V("div",w,[p(g,{ref_key:"tableRef",ref:n,height:"355","row-key":"id","header-cell-style":{background:"#f5f7fa",color:"#303133"},data:e(u).slice((e(a).currentPage-1)*e(a).pageSize,e(a).currentPage*e(a).pageSize),columns:e(i),pagination:e(a),onSelectionChange:e(f)},null,8,["data","columns","pagination","onSelectionChange"]),p(b,{class:"absolute bottom-[17px]",type:"primary",size:"small",text:"",bg:"",onClick:e(_)},{default:r(()=>[v(" 确定 ")]),_:1},8,["onClick"])])]),_:1},8,["modelValue","onRemoveTag","onClear"])}}});export{P as _};
