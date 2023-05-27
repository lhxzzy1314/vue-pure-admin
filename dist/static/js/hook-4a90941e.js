import{ag as i,r as l,y as W,o as w,f as u,b as c,bx as z,bA as M}from"./index-a0fff168.js";import{m as T}from"./message-7fa706e9.js";import{b as S}from"./system-8281c35d.js";function Y(){const d=i({username:"",mobile:"",status:""}),r=l([]),n=l(!0),a=l({}),o=i({total:0,pageSize:10,currentPage:1,background:!0}),m=[{label:"序号",type:"index",width:70,fixed:"left"},{label:"用户编号",prop:"id",minWidth:130},{label:"用户名称",prop:"username",minWidth:130},{label:"用户昵称",prop:"nickname",minWidth:130},{label:"性别",prop:"sex",minWidth:90,cellRenderer:({row:e,props:t})=>u(c("el-tag"),{size:t.size,type:e.sex===1?"danger":"",effect:"plain"},{default:()=>[e.sex===1?"女":"男"]})},{label:"部门",prop:"dept",minWidth:90,formatter:({dept:e})=>e.name},{label:"手机号码",prop:"mobile",minWidth:90},{label:"状态",prop:"status",minWidth:90,cellRenderer:e=>{var t;return u(c("el-switch"),{size:e.props.size==="small"?"small":"default",loading:(t=a.value[e.index])==null?void 0:t.loading,modelValue:e.row.status,"onUpdate:modelValue":C=>e.row.status=C,"active-value":1,"inactive-value":0,"active-text":"已开启","inactive-text":"已关闭","inline-prompt":!0,onChange:()=>g(e)},null)}},{label:"创建时间",minWidth:90,prop:"createTime",formatter:({createTime:e})=>z(e).format("YYYY-MM-DD HH:mm:ss")},{label:"操作",fixed:"right",width:180,slot:"operation"}],p=W(()=>["!h-[20px]","reset-margin","!text-gray-500","dark:!text-white","dark:hover:!text-primary"]);function g({row:e,index:t}){M.confirm(`确认要<strong>${e.status===0?"停用":"启用"}</strong><strong style='color:var(--el-color-primary)'>${e.username}</strong>用户吗?`,"系统提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",dangerouslyUseHTMLString:!0,draggable:!0}).then(()=>{a.value[t]=Object.assign({},a.value[t],{loading:!0}),setTimeout(()=>{a.value[t]=Object.assign({},a.value[t],{loading:!1}),T("已成功修改用户状态",{type:"success"})},300)}).catch(()=>{e.status===0?e.status=1:e.status=0})}function h(e){}function f(e){}function b(e){}function v(e){}function x(e){}async function s(){n.value=!0;const{data:e}=await S();r.value=e.list,o.total=e.total,setTimeout(()=>{n.value=!1},500)}const y=e=>{e&&(e.resetFields(),s())};return w(()=>{s()}),{form:d,loading:n,columns:m,dataList:r,pagination:o,buttonClass:p,onSearch:s,resetForm:y,handleUpdate:h,handleDelete:f,handleSizeChange:b,handleCurrentChange:v,handleSelectionChange:x}}export{Y as useUser};
