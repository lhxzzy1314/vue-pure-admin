import{ag as a,I as o,bb as s,bt as p,bC as f,r as u,K as C}from"./index-a0fff168.js";const d=/^\d{6}$/,v=/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[()])+$)(?!^.*[\u4E00-\u9FA5].*$)([^(0-9a-zA-Z)]|[()]|[a-z]|[A-Z]|[0-9]){8,18}$/,$=a({password:[{validator:(i,r,e)=>{r===""?e(new Error(o(s("login.passwordReg")))):v.test(r)?e():e(new Error(o(s("login.passwordRuleReg"))))},trigger:"blur"}],verifyCode:[{validator:(i,r,e)=>{r===""?e(new Error(o(s("login.verifyCodeReg")))):p().verifyCode!==r?e(new Error(o(s("login.verifyCodeCorrectReg")))):e()},trigger:"blur"}]}),h=a({phone:[{validator:(i,r,e)=>{r===""?e(new Error(o(s("login.phoneReg")))):f(r)?e():e(new Error(o(s("login.phoneCorrectReg"))))},trigger:"blur"}],verifyCode:[{validator:(i,r,e)=>{r===""?e(new Error(o(s("login.verifyCodeReg")))):d.test(r)?e():e(new Error(o(s("login.verifyCodeSixReg"))))},trigger:"blur"}]}),I=a({phone:[{validator:(i,r,e)=>{r===""?e(new Error(o(s("login.phoneReg")))):f(r)?e():e(new Error(o(s("login.phoneCorrectReg"))))},trigger:"blur"}],verifyCode:[{validator:(i,r,e)=>{r===""?e(new Error(o(s("login.verifyCodeReg")))):d.test(r)?e():e(new Error(o(s("login.verifyCodeSixReg"))))},trigger:"blur"}],password:[{validator:(i,r,e)=>{r===""?e(new Error(o(s("login.passwordReg")))):v.test(r)?e():e(new Error(o(s("login.passwordRuleReg"))))},trigger:"blur"}]}),g=u(!1),t=u(null),l=u(""),A=()=>({isDisabled:g,timer:t,text:l,start:async(e,w,n=60)=>{if(!e)return;const R=C(n,!0);await e.validateField(w,E=>{E&&(clearInterval(t.value),g.value=!0,l.value=`${n}`,t.value=setInterval(()=>{n>0?(n-=1,l.value=`${n}`):(l.value="",g.value=!1,clearInterval(t.value),n=R)},1e3))})},end:()=>{l.value="",g.value=!1,clearInterval(t.value)}});export{I as a,$ as l,h as p,A as u};
