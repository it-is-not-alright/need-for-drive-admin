"use strict";(self.webpackChunkneed_for_drive_admin=self.webpackChunkneed_for_drive_admin||[]).push([[559],{559:(e,r,t)=>{t.r(r),t.d(r,{default:()=>C});var n=t(379),a=t.n(n),i=t(795),o=t.n(i),l=t(569),u=t.n(l),c=t(565),s=t.n(c),f=t(216),d=t.n(f),g=t(589),v=t.n(g),m=t(264),h={};h.styleTagTransform=v(),h.setAttributes=s(),h.insert=u().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),a()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var p=t(294),b=t(309),y=t(157),S=t(488),j=t(15),k=t(189),w=t(241),Z=t(893);function x(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,i,o,l=[],u=!0,c=!1;try{if(i=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;u=!1}else for(;!(u=(n=i.call(t)).done)&&(l.push(n.value),l.length!==r);u=!0);}catch(e){c=!0,a=e}finally{try{if(!u&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw a}}return l}}(e,r)||function(e,r){if(e){if("string"==typeof e)return A(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?A(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}const C=function(){var e=(0,b.s0)(),r=x((0,p.useState)(w.Jl),2),t=r[0],n=r[1],a=x((0,p.useState)(w.Gg),2),i=a[0],o=a[1],l=x((0,p.useState)(w.Gg),2),u=l[0],c=l[1],s=function(e){return{value:e.trim(),error:""}};return(0,Z.jsx)("div",{id:"sign-in-page",className:"page",children:(0,Z.jsxs)(j.Z,{title:"Регистрация",linkLabel:"Вход",linkHref:S.F.LogIn,buttonLabel:"Создать",onSubmit:function(){var r=new y.Z;if(n(r.check(w.TE,t)),o(r.check(w.xf,i)),w.oi.pattern.target=new RegExp("^".concat(i.value,"$")),c(r.check(w.oi,u)),r.ok){var a="".concat(S.F.LogIn,"?").concat(w.n9,"=true");e(a)}},children:[(0,Z.jsx)(k.Z,{title:"Почта",value:t.value,error:t.error,onChange:function(e){n(s(e.target.value))}}),(0,Z.jsx)(k.Z,{title:"Пароль",isSecure:!0,value:i.value,error:i.error,onChange:function(e){o(s(e.target.value))}}),(0,Z.jsx)(k.Z,{title:"Подтвердите пароль",isSecure:!0,value:u.value,error:u.error,onChange:function(e){c(s(e.target.value))}})]})})}},264:(e,r,t)=>{t.d(r,{Z:()=>l});var n=t(81),a=t.n(n),i=t(645),o=t.n(i)()(a());o.push([e.id,"div#sign-in-page{display:grid;grid-template-columns:1fr minmax(auto, 25rem) 1fr;grid-template-rows:1fr auto 4fr}div#sign-in-page form.brand-form{grid-column:2;grid-row:2;margin:1rem}",""]);const l=o}}]);