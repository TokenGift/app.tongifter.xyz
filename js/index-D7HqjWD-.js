import{c as s,u as e,r as a,j as i,$ as n}from"./index-C7cfov-h.js";import{D as c}from"./divider-CCKSNPIs.js";import{I as r}from"./image-D_HcNWBo.js";import{P as l}from"./popup-Vx2bWGT4.js";import{i as t}from"./icon_arrow_right-DxHMhT-M.js";import"./index-DOPLuK98.js";const o="_list_item_13uvi_1",d="_column_pop_13uvi_14",m="_item_title_13uvi_20",j="_type_selector_13uvi_29",h="_type_selector_item_13uvi_33",{changeLan:u}=n("common"),_=s((s=>s.common))((s=>{const{tgUserInfoRaw:n}=s,{t:_,i18n:x}=e(),[v,p]=a.useState(!1),k=s=>{p(!1),x.language!=s&&(x.changeLanguage(s),g(s))},g=async s=>{const[e]=await u(n,{lang:s});if(200!==(null==e?void 0:e.code))return"";null==e||e.data.forEach((s=>{tokens.forEach((e=>{s.tokenSymbol===e.key&&(e.balance=s.balance)}))})),setTokens([...tokens]),setSelectToken(tokens[0]),start()};return a.useEffect((()=>{}),[]),i.jsxs("div",{className:"warp",children:[i.jsx("div",{className:"content",children:i.jsxs("div",{className:o,onClick:()=>p(!0),children:[i.jsx("div",{className:d,children:i.jsx("span",{className:m,children:(()=>{switch(x.language.toUpperCase()){case"EN":return"English";case"ZH":return"简体中文";case"TW":return"繁體中文";case"KO":return"한국어";case"JA":return"日本語";case"FR":return"Français"}})()})}),i.jsx(r,{src:t,width:10,height:16})]})}),i.jsx(l,{visible:v,onMaskClick:()=>{p(!1)},destroyOnClose:!0,children:i.jsxs("div",{className:j,children:[i.jsx("div",{className:h,onClick:()=>{k("en")},children:"English"}),i.jsx(c,{}),i.jsx("div",{className:h,onClick:()=>{k("zh")},children:"简体中文"}),i.jsx(c,{}),i.jsx("div",{className:h,onClick:()=>{k("tw")},children:"繁體中文"}),i.jsx(c,{}),i.jsx("div",{className:h,onClick:()=>{k("ko")},children:"한국어"}),i.jsx(c,{}),i.jsx("div",{className:h,onClick:()=>{k("ja")},children:"日本語"}),i.jsx(c,{}),i.jsx("div",{className:h,onClick:()=>{k("fr")},children:"Français"})]})})]})}));export{_ as default};
