import{useDept as I}from"./hook-ecee16aa.js";import{R as N,D as P,P as U}from"./refresh-73f2443f.js";import{u as i}from"./hooks-076ae729.js";import{d as z}from"./edit-pen-37b5ced2.js";import{d as E}from"./search-cc37b371.js";import{d as F}from"./add-circle-line-a03ff6bd.js";import{d as L,r as y,c as a,f as O,k as j,g as o,w as t,u as e,h as m,_ as q}from"./index-4d06789b.js";import"./form.vue_vue_type_script_setup_true_lang-bd7dab32.js";import"./index-35f5de36.js";import"./hooks-4c352989.js";import"./message-27bfab89.js";import"./system-8b209df3.js";import"./epTheme-fafb4a78.js";import"./sortable.esm-e674cde8.js";const A={class:"main"},G=L({name:"Dept",__name:"index",setup(H){const d=y(),_=y(),{form:r,loading:u,columns:k,dataList:x,onSearch:f,resetForm:C,openDialog:b,handleDelete:h,handleSelectionChange:R}=I();return(J,n)=>{var v;const w=a("el-input"),p=a("el-form-item"),g=a("el-option"),V=a("el-select"),s=a("el-button"),$=a("el-form"),D=a("el-popconfirm"),S=a("pure-table");return O(),j("div",A,[o($,{ref_key:"formRef",ref:d,inline:!0,model:e(r),class:"search-form bg-bg_color w-[99/100] pl-8 pt-[12px]"},{default:t(()=>[o(p,{label:"部门名称：",prop:"name"},{default:t(()=>[o(w,{modelValue:e(r).name,"onUpdate:modelValue":n[0]||(n[0]=l=>e(r).name=l),placeholder:"请输入部门名称",clearable:"",class:"!w-[200px]"},null,8,["modelValue"])]),_:1}),o(p,{label:"状态：",prop:"status"},{default:t(()=>[o(V,{modelValue:e(r).status,"onUpdate:modelValue":n[1]||(n[1]=l=>e(r).status=l),placeholder:"请选择状态",clearable:"",class:"!w-[180px]"},{default:t(()=>[o(g,{label:"启用",value:1}),o(g,{label:"停用",value:0})]),_:1},8,["modelValue"])]),_:1}),o(p,null,{default:t(()=>[o(s,{type:"primary",icon:e(i)(e(E)),loading:e(u),onClick:e(f)},{default:t(()=>[m(" 搜索 ")]),_:1},8,["icon","loading","onClick"]),o(s,{icon:e(i)(e(N)),onClick:n[2]||(n[2]=l=>e(C)(d.value))},{default:t(()=>[m(" 重置 ")]),_:1},8,["icon"])]),_:1})]),_:1},8,["model"]),o(e(U),{title:"部门列表（仅演示，操作后不生效）",columns:e(k),tableRef:(v=_.value)==null?void 0:v.getTableRef(),onRefresh:e(f)},{buttons:t(()=>[o(s,{type:"primary",icon:e(i)(e(F)),onClick:n[3]||(n[3]=l=>e(b)())},{default:t(()=>[m(" 新增部门 ")]),_:1},8,["icon"])]),default:t(({size:l,dynamicColumns:T})=>[o(S,{ref_key:"tableRef",ref:_,border:"","align-whole":"center","row-key":"id",showOverflowTooltip:"","table-layout":"auto","default-expand-all":"",loading:e(u),size:l,data:e(x),columns:T,"header-cell-style":{background:"var(--el-table-row-hover-bg-color)",color:"var(--el-text-color-primary)"},onSelectionChange:e(R)},{operation:t(({row:c})=>[o(s,{class:"reset-margin",link:"",type:"primary",size:l,icon:e(i)(e(z)),onClick:B=>e(b)("编辑",c)},{default:t(()=>[m(" 编辑 ")]),_:2},1032,["size","icon","onClick"]),o(D,{title:`是否确认删除部门名称为${c.name}的这条数据`,onConfirm:B=>e(h)(c)},{reference:t(()=>[o(s,{class:"reset-margin",link:"",type:"primary",size:l,icon:e(i)(e(P))},{default:t(()=>[m(" 删除 ")]),_:2},1032,["size","icon"])]),_:2},1032,["title","onConfirm"])]),_:2},1032,["loading","size","data","columns","header-cell-style","onSelectionChange"])]),_:1},8,["columns","tableRef","onRefresh"])])}}});const se=q(G,[["__scopeId","data-v-906e12a1"]]);export{se as default};
