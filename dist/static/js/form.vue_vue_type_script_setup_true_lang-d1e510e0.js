import{ag as _,d as v,r as d,b as u,e as V,c as b,w as a,f as o,u as g}from"./index-a0fff168.js";const k=_({name:[{required:!0,message:"角色名称为必填项",trigger:"blur"}],code:[{required:!0,message:"角色标识为必填项",trigger:"blur"}]}),R=v({__name:"form",props:{formInline:{default:()=>({name:"",code:"",remark:""})}},setup(s,{expose:p}){const f=s,m=d(),e=d(f.formInline);function c(){return m.value}return p({getRef:c}),(x,l)=>{const n=u("el-input"),t=u("el-form-item"),i=u("el-form");return V(),b(i,{ref_key:"ruleFormRef",ref:m,model:e.value,rules:g(k),"label-width":"82px"},{default:a(()=>[o(t,{label:"角色名称",prop:"name"},{default:a(()=>[o(n,{modelValue:e.value.name,"onUpdate:modelValue":l[0]||(l[0]=r=>e.value.name=r),clearable:"",placeholder:"请输入角色名称"},null,8,["modelValue"])]),_:1}),o(t,{label:"角色标识",prop:"code"},{default:a(()=>[o(n,{modelValue:e.value.code,"onUpdate:modelValue":l[1]||(l[1]=r=>e.value.code=r),clearable:"",placeholder:"请输入角色标识"},null,8,["modelValue"])]),_:1}),o(t,{label:"备注"},{default:a(()=>[o(n,{modelValue:e.value.remark,"onUpdate:modelValue":l[2]||(l[2]=r=>e.value.remark=r),placeholder:"请输入备注信息",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])}}});export{R as _};
