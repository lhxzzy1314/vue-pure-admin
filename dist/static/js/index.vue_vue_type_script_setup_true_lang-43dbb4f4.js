import{useColumns as w}from"./columns-402fbedf.js";import{d as N,b as u,e as U,j as k,f as e,w as a,u as l,a_ as m,g as o,h as _}from"./index-a0fff168.js";const B=_("p",{class:"text-sm"},"动态列：",-1),A=_("p",{class:"text-sm"},"表格大小：",-1),T=_("p",{class:"text-sm"},"分页大小：",-1),j=_("p",{class:"text-sm"},"分页的对齐方式：",-1),O=N({__name:"index",setup(y){const{loading:h,columns:b,dataList:C,hideVal:g,tableSize:d,pagination:s,loadingConfig:V,paginationAlign:p,paginationSmall:c,onChange:v,onSizeChange:z,onCurrentChange:x}=w();return(D,n)=>{const t=u("el-radio-button"),r=u("el-radio-group"),f=u("el-divider"),S=u("el-space"),P=u("pure-table");return U(),k("div",null,[e(S,{class:"float-right mb-4"},{default:a(()=>[B,e(r,{modelValue:l(g),"onUpdate:modelValue":n[0]||(n[0]=i=>m(g)?g.value=i:null),size:"small"},{default:a(()=>[e(t,{label:"nohide"},{default:a(()=>[o("不隐藏")]),_:1}),e(t,{label:"hideDate"},{default:a(()=>[o("隐藏日期")]),_:1}),e(t,{label:"hideName"},{default:a(()=>[o("隐藏姓名")]),_:1}),e(t,{label:"hideAddress"},{default:a(()=>[o("隐藏地址")]),_:1})]),_:1},8,["modelValue"]),e(f,{direction:"vertical"}),A,e(r,{modelValue:l(d),"onUpdate:modelValue":n[1]||(n[1]=i=>m(d)?d.value=i:null),size:"small"},{default:a(()=>[e(t,{label:"large"},{default:a(()=>[o("large")]),_:1}),e(t,{label:"default"},{default:a(()=>[o("default")]),_:1}),e(t,{label:"small"},{default:a(()=>[o("small")]),_:1})]),_:1},8,["modelValue"]),e(f,{direction:"vertical"}),T,e(r,{modelValue:l(c),"onUpdate:modelValue":n[2]||(n[2]=i=>m(c)?c.value=i:null),size:"small",onChange:l(v)},{default:a(()=>[e(t,{label:!1},{default:a(()=>[o("no small")]),_:1}),e(t,{label:!0},{default:a(()=>[o("small")]),_:1})]),_:1},8,["modelValue","onChange"]),e(f,{direction:"vertical"}),j,e(r,{modelValue:l(p),"onUpdate:modelValue":n[3]||(n[3]=i=>m(p)?p.value=i:null),size:"small"},{default:a(()=>[e(t,{label:"right"},{default:a(()=>[o("right")]),_:1}),e(t,{label:"center"},{default:a(()=>[o("center")]),_:1}),e(t,{label:"left"},{default:a(()=>[o("left")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(P,{border:"","row-key":"id",alignWhole:"center",showOverflowTooltip:"",size:l(d),loading:l(h),"loading-config":l(V),height:l(d)==="small"?352:440,data:l(C).slice((l(s).currentPage-1)*l(s).pageSize,l(s).currentPage*l(s).pageSize),columns:l(b),pagination:l(s),onPageSizeChange:l(z),onPageCurrentChange:l(x)},null,8,["size","loading","loading-config","height","data","columns","pagination","onPageSizeChange","onPageCurrentChange"])])}}});export{O as _};
