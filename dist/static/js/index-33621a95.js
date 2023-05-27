import{d as ee,a0 as ue,r as F,x as d,b as r,c as ne,w as l,e as le,h as p,g as u,f as e,u as _,a1 as c,N as te,a2 as D,F as R,L as A,a3 as B,a4 as oe}from"./index-a0fff168.js";import{m as a}from"./message-7fa706e9.js";import{_ as k}from"./form.vue_vue_type_script_setup_true_lang-5b82f2e1.js";const ce={class:"card-header"},ie={class:"font-medium"},fe=ee({name:"DialogPage",__name:"index",setup(re){const v=ue();function h(){c({title:"基本使用",contentRenderer:()=>e("p",null,[u("弹框内容-基本使用")])})}function b(){c({title:"可拖拽",draggable:!0,contentRenderer:()=>A("p","弹框内容-可拖拽")})}function g(){c({title:"全屏",fullscreen:!0,contentRenderer:()=>e("p",null,"弹框内容-全屏")})}function w(){c({title:"全屏按钮",fullscreenIcon:!0,contentRenderer:()=>e("p",null,[u("弹框内容-全屏按钮")])})}function $(){c({title:"无背景遮罩层",modal:!1,contentRenderer:()=>e("p",null,[u("弹框内容-无背景遮罩层")])})}function x(){c({title:"自定义弹出位置",top:"60vh",style:{marginRight:"20px"},contentRenderer:()=>e("p",null,[u("弹框内容-自定义弹出位置")])})}const I=te(()=>c({title:"延时2秒打开弹框",openDelay:2e3-600,contentRenderer:()=>e("p",null,[u("弹框内容-延时2秒打开弹框")])}),600);function y(){c({title:"延时2秒关闭弹框",closeDelay:2e3,contentRenderer:()=>e("p",null,[u("弹框内容-延时2秒关闭弹框")])})}function S(){c({title:"不显示右上角关闭按钮图标",showClose:!1,contentRenderer:()=>e("p",null,[u("弹框内容-不显示右上角关闭按钮图标")])})}function N(){c({title:"禁止通过键盘ESC关闭",closeOnPressEscape:!1,contentRenderer:()=>e("p",null,[u("弹框内容-禁止通过键盘ESC关闭")])})}function O(){c({title:"禁止通过点击modal关闭",closeOnClickModal:!1,contentRenderer:()=>e("p",null,[u("弹框内容-禁止通过点击modal关闭")])})}function T(){c({title:"隐藏底部取消、确定按钮",hideFooter:!0,contentRenderer:()=>e("p",null,[u("弹框内容-隐藏底部取消、确定按钮")])})}function z(){c({title:"自定义头部",showClose:!1,headerRenderer:({close:t,titleId:o,titleClass:i})=>e("div",{class:"flex flex-row justify-between"},[e("h4",{id:o,class:i},[u("自定义头部")]),e(r("el-button"),{type:"danger",onClick:t},{default:()=>[u("关闭")]})]),contentRenderer:()=>e("p",null,[u("弹框内容-自定义头部")])})}function M(){c({title:"自定义底部",footerRenderer:({options:t,index:o})=>e(r("el-button"),{onClick:()=>B(t,o)},{default:()=>[t.title,u("-"),o]}),contentRenderer:()=>e("p",null,[u("弹框内容-自定义底部")])})}function P(){c({title:"自定义底部按钮",footerButtons:[{label:"按钮1",size:"small",type:"success",btnClick:({dialog:{options:t,index:o},button:i})=>{B(t,o)}},{label:"按钮2",text:!0,bg:!0,btnClick:({dialog:{options:t,index:o},button:i})=>{B(t,o)}},{label:"按钮3",size:"large",type:"warning",btnClick:({dialog:{options:t,index:o},button:i})=>{B(t,o)}}],contentRenderer:()=>e("p",null,[u("弹框内容-自定义底部按钮")])})}function V(){c({title:"打开后的回调",open:({options:t,index:o})=>a({options:t,index:o}),contentRenderer:()=>e("p",null,[u("弹框内容-打开后的回调")])})}function H(){c({title:"关闭后的回调",closeCallBack:({options:t,index:o,args:i})=>{let n="";(i==null?void 0:i.command)==="cancel"?n="您点击了取消按钮":(i==null?void 0:i.command)==="sure"?n="您点击了确定按钮":n="您点击了右上角关闭按钮或者空白页",a(n)},contentRenderer:()=>e("p",null,[u("弹框内容-关闭后的回调")])})}function j(){c({title:"嵌套的弹框",contentRenderer:({index:t})=>e(r("el-button"),{onClick:()=>c({title:`第${t+1}个子弹框`,width:"40%",contentRenderer:({index:o})=>e(r("el-button"),{onClick:()=>c({title:`第${o+1}个子弹框`,width:"30%",contentRenderer:()=>e(R,null,[e(r("el-button"),{round:!0,onClick:()=>oe()},{default:()=>[u("哎呦，你干嘛，赶快关闭所有弹框")]})])})},{default:()=>[u("点击打开第"),o+1,u("个子弹框")]})})},{default:()=>[u("点击打开第"),t+1,u("个子弹框")]})})}function L(){const t=F(1);c({title:`第${t.value}页`,contentRenderer:()=>e(R,null,[e(r("el-button"),{disabled:!(t.value>1),onClick:()=>{t.value-=1,D(`第${t.value}页`)}},{default:()=>[u("上一页")]}),e(r("el-button"),{onClick:()=>{t.value+=1,D(`第${t.value}页`)}},{default:()=>[u("下一页")]})])})}function U(){c({width:"30%",title:"结合Form表单（第一种方式）",contentRenderer:()=>k,props:{formInline:{user:"菜虚鲲",region:"浙江"}},closeCallBack:({options:t,args:o})=>{const{formInline:i}=t.props,n=`姓名：${i.user} 城市：${i.region}`;(o==null?void 0:o.command)==="cancel"?a(`您点击了取消按钮，当前表单数据为 ${n}`):(o==null?void 0:o.command)==="sure"?a(`您点击了确定按钮，当前表单数据为 ${n}`):a(`您点击了右上角关闭按钮或者空白页，当前表单数据为 ${n}`)}})}const s=F({user:"菜虚鲲",region:"浙江"}),q=d(s.value);function G(){c({width:"30%",title:"结合Form表单（第二种方式）",contentRenderer:()=>A(k,{formInline:s.value}),closeCallBack:()=>{a(`当前表单数据为 姓名：${s.value.user} 城市：${s.value.region}`),s.value=d(q)}})}const C=F({user:"菜虚鲲",region:"浙江"}),J=d(C.value);function K(){c({width:"30%",title:"结合Form表单（第三种方式）",contentRenderer:()=>e(k,{formInline:C.value}),closeCallBack:()=>{a(`当前表单数据为 姓名：${C.value.user} 城市：${C.value.region}`),C.value=d(J)}})}const f=F({user:"菜虚鲲",region:"浙江"}),Q=d(f.value);function W(){c({width:"30%",title:"结合Form表单（第四种方式）",contentRenderer:()=>e(k,{formInline:f.value},null),closeCallBack:()=>{a(`当前表单数据为 姓名：${f.value.user} 城市：${f.value.region}`),f.value=d(Q)}})}function X(){c({title:"点击底部取消按钮的回调",contentRenderer:()=>e("p",null,[u("弹框内容-点击底部取消按钮的回调（会暂停弹框的关闭）")]),beforeCancel:(t,{options:o,index:i})=>{}})}function Y(){c({title:"点击底部确定按钮的回调",contentRenderer:()=>e("p",null,[u("弹框内容-点击底部确定按钮的回调（会暂停弹框的关闭，经常用于新增、编辑弹框内容后调用接口）")]),beforeSure:(t,{options:o,index:i})=>{}})}return(t,o)=>{const i=r("el-link"),n=r("el-button"),E=r("el-space"),m=r("el-divider"),Z=r("el-card");return le(),ne(Z,{shadow:"never"},{header:l(()=>[p("div",ce,[p("span",ie,[u(" 二次封装 element-plus 的 "),e(i,{href:"https://element-plus.org/zh-CN/component/dialog.html",target:"_blank",style:{margin:"0 4px 5px","font-size":"16px"}},{default:l(()=>[u(" Dialog ")]),_:1}),u(" ，采用函数式调用弹框组件（更多操作实例请参考 "),p("span",{class:"cursor-pointer text-primary",onClick:o[0]||(o[0]=ae=>_(v).push({name:"Dept"}))},"系统管理页面"),u(" ） ")])])]),default:l(()=>[e(E,{wrap:""},{default:l(()=>[e(n,{onClick:h},{default:l(()=>[u(" 基本使用 ")]),_:1}),e(n,{onClick:b},{default:l(()=>[u(" 可拖拽 ")]),_:1}),e(n,{onClick:g},{default:l(()=>[u(" 全屏 ")]),_:1}),e(n,{onClick:w},{default:l(()=>[u(" 全屏按钮 ")]),_:1}),e(n,{onClick:$},{default:l(()=>[u(" 无背景遮罩层 ")]),_:1}),e(n,{onClick:x},{default:l(()=>[u(" 自定义弹出位置 ")]),_:1}),e(n,{onClick:_(I)},{default:l(()=>[u(" 延时2秒打开弹框 ")]),_:1},8,["onClick"]),e(n,{onClick:y},{default:l(()=>[u(" 延时2秒关闭弹框 ")]),_:1}),e(n,{onClick:S},{default:l(()=>[u(" 不显示右上角关闭按钮图标 ")]),_:1}),e(n,{onClick:N},{default:l(()=>[u(" 禁止通过键盘ESC关闭 ")]),_:1}),e(n,{onClick:O},{default:l(()=>[u(" 禁止通过点击modal关闭 ")]),_:1}),e(n,{onClick:T},{default:l(()=>[u(" 隐藏底部取消、确定按钮 ")]),_:1}),e(n,{onClick:z},{default:l(()=>[u(" 自定义头部 ")]),_:1}),e(n,{onClick:M},{default:l(()=>[u(" 自定义底部 ")]),_:1}),e(n,{onClick:P},{default:l(()=>[u(" 自定义底部按钮 ")]),_:1}),e(n,{onClick:V},{default:l(()=>[u(" 打开后的回调 ")]),_:1}),e(n,{onClick:H},{default:l(()=>[u(" 关闭后的回调 ")]),_:1}),e(n,{onClick:j},{default:l(()=>[u(" 嵌套的弹框 ")]),_:1}),e(n,{onClick:L},{default:l(()=>[u(" 更改弹框自身属性值 ")]),_:1})]),_:1}),e(m),e(E,{wrap:""},{default:l(()=>[e(n,{onClick:U},{default:l(()=>[u(" 结合Form表单（第一种方式） ")]),_:1}),e(n,{onClick:G},{default:l(()=>[u(" 结合Form表单（第二种方式） ")]),_:1}),e(n,{onClick:K},{default:l(()=>[u(" 结合Form表单（第三种方式） ")]),_:1}),e(n,{onClick:W},{default:l(()=>[u(" 结合Form表单（第四种方式） ")]),_:1})]),_:1}),e(m),e(E,{wrap:""},{default:l(()=>[e(n,{onClick:X},{default:l(()=>[u(" 点击底部取消按钮的回调（会暂停弹框的关闭） ")]),_:1}),e(n,{onClick:Y},{default:l(()=>[u(" 点击底部确定按钮的回调（会暂停弹框的关闭，经常用于新增、编辑弹框内容后调用接口） ")]),_:1})]),_:1})]),_:1})}}});export{fe as default};
