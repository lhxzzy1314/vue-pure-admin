import{d as c,r as d,b as o,e as f,c as i,w as t,f as e}from"./index-a0fff168.js";const w=c({__name:"form",props:{formInline:{default:()=>({user:"",region:""})}},setup(m){const l=d(m.formInline);return(V,n)=>{const u=o("el-input"),s=o("el-form-item"),a=o("el-option"),p=o("el-select"),_=o("el-form");return f(),i(_,{model:l.value},{default:t(()=>[e(s,{label:"姓名"},{default:t(()=>[e(u,{class:"!w-[220px]",modelValue:l.value.user,"onUpdate:modelValue":n[0]||(n[0]=r=>l.value.user=r),placeholder:"请输入姓名"},null,8,["modelValue"])]),_:1}),e(s,{label:"城市"},{default:t(()=>[e(p,{class:"!w-[220px]",modelValue:l.value.region,"onUpdate:modelValue":n[1]||(n[1]=r=>l.value.region=r),placeholder:"请选择城市"},{default:t(()=>[e(a,{label:"上海",value:"上海"}),e(a,{label:"浙江",value:"浙江"}),e(a,{label:"深圳",value:"深圳"})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])}}});export{w as _};
