import{R as s}from"./index-78f2015b.js";import{ag as C,bC as k,bG as I,d as R,r as v,b as d,e as c,c as B,w as l,f as e,u,h as E,E as V,j as F,ab as N,C as S}from"./index-a0fff168.js";import{u as D}from"./hooks-25488e49.js";const O=C({name:[{required:!0,message:"部门名称为必填项",trigger:"blur"}],phone:[{validator:(i,m,r)=>{m===""||k(m)?r():r(new Error("请输入正确的手机号码格式"))},trigger:"blur"}],email:[{validator:(i,m,r)=>{m===""||I(m)?r():r(new Error("请输入正确的邮箱格式"))},trigger:"blur"}]}),P={key:0},H=R({__name:"form",props:{formInline:{default:()=>({higherDeptOptions:[],parentId:0,name:"",principal:"",phone:"",email:"",sort:0,status:1,remark:""})}},setup(i,{expose:m}){const r=i,f=v(),{switchStyle:b}=D(),a=v(r.formInline);function g(){return f.value}return m({getRef:g}),(j,t)=>{const x=d("el-cascader"),n=d("el-form-item"),p=d("el-input"),h=d("el-input-number"),w=d("el-switch"),y=d("el-row"),U=d("el-form");return c(),B(U,{ref_key:"ruleFormRef",ref:f,model:a.value,rules:u(O),"label-width":"82px"},{default:l(()=>[e(y,{gutter:30},{default:l(()=>[e(u(s),null,{default:l(()=>[e(n,{label:"上级部门"},{default:l(()=>[e(x,{class:"w-full",modelValue:a.value.parentId,"onUpdate:modelValue":t[0]||(t[0]=o=>a.value.parentId=o),options:a.value.higherDeptOptions,props:{value:"id",label:"name",emitPath:!1,checkStrictly:!0},clearable:"",filterable:"",placeholder:"请选择上级部门"},{default:l(({node:o,data:_})=>[E("span",null,V(_.name),1),o.isLeaf?N("",!0):(c(),F("span",P," ("+V(_.children.length)+") ",1))]),_:1},8,["modelValue","options"])]),_:1})]),_:1}),e(u(s),{value:12,xs:24,sm:24},{default:l(()=>[e(n,{label:"部门名称",prop:"name"},{default:l(()=>[e(p,{modelValue:a.value.name,"onUpdate:modelValue":t[1]||(t[1]=o=>a.value.name=o),clearable:"",placeholder:"请输入部门名称"},null,8,["modelValue"])]),_:1})]),_:1}),e(u(s),{value:12,xs:24,sm:24},{default:l(()=>[e(n,{label:"部门负责人"},{default:l(()=>[e(p,{modelValue:a.value.principal,"onUpdate:modelValue":t[2]||(t[2]=o=>a.value.principal=o),clearable:"",placeholder:"请输入部门负责人"},null,8,["modelValue"])]),_:1})]),_:1}),e(u(s),{value:12,xs:24,sm:24},{default:l(()=>[e(n,{label:"手机号",prop:"phone"},{default:l(()=>[e(p,{modelValue:a.value.phone,"onUpdate:modelValue":t[3]||(t[3]=o=>a.value.phone=o),clearable:"",placeholder:"请输入手机号"},null,8,["modelValue"])]),_:1})]),_:1}),e(u(s),{value:12,xs:24,sm:24},{default:l(()=>[e(n,{label:"邮箱",prop:"email"},{default:l(()=>[e(p,{modelValue:a.value.email,"onUpdate:modelValue":t[4]||(t[4]=o=>a.value.email=o),clearable:"",placeholder:"请输入邮箱"},null,8,["modelValue"])]),_:1})]),_:1}),e(u(s),{value:12,xs:24,sm:24},{default:l(()=>[e(n,{label:"排序"},{default:l(()=>[e(h,{modelValue:a.value.sort,"onUpdate:modelValue":t[5]||(t[5]=o=>a.value.sort=o),min:0,max:9999,"controls-position":"right"},null,8,["modelValue"])]),_:1})]),_:1}),e(u(s),{value:12,xs:24,sm:24},{default:l(()=>[e(n,{label:"部门状态"},{default:l(()=>[e(w,{modelValue:a.value.status,"onUpdate:modelValue":t[6]||(t[6]=o=>a.value.status=o),"inline-prompt":"","active-value":1,"inactive-value":0,"active-text":"启用","inactive-text":"停用",style:S(u(b))},null,8,["modelValue","style"])]),_:1})]),_:1}),e(u(s),null,{default:l(()=>[e(n,{label:"备注"},{default:l(()=>[e(p,{modelValue:a.value.remark,"onUpdate:modelValue":t[7]||(t[7]=o=>a.value.remark=o),placeholder:"请输入备注信息",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])}}});export{H as _};
