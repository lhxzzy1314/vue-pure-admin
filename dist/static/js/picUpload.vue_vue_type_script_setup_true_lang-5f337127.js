import{T as c,E as f}from"./index.esm-3101bd3b.js";import{d as m,b1 as p,r as g,a as _,e as v,j as C,f as n,u as r}from"./index-a0fff168.js";const h={class:"wangeditor"},d="default",b=m({name:"picUpload",__name:"picUpload",setup(y){const a=p(),l=g("<p>仅提供代码参考，暂不可上传图片，可根据实际业务改写</p>"),s={excludeKeys:"fullScreen"},t={placeholder:"请输入内容...",MENU_CONF:{}};t.MENU_CONF.uploadImage={server:"",fieldName:"file",allowedFileTypes:["image/png","image/jpg","image/jpeg"],customInsert(e,o){e.data.url&&setTimeout(()=>{o(e.data.url)},2e3)}};const i=e=>{a.value=e};return _(()=>{const e=a.value;e!=null&&e.destroy()}),(e,o)=>(v(),C("div",h,[n(r(c),{editor:a.value,defaultConfig:s,mode:d,style:{"border-bottom":"1px solid #ccc"}},null,8,["editor"]),n(r(f),{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=u=>l.value=u),defaultConfig:t,mode:d,style:{height:"500px","overflow-y":"hidden"},onOnCreated:i},null,8,["modelValue"])]))}});export{b as _};
