import{c as s,u as t,r as e,j as i,a as n,d as a,$ as o}from"./index-CXKFpczX.js";import{I as r}from"./image-B4A_z-lR.js";import{S as c,P as d,D as l,I as m}from"./input-8iOtEBCZ.js";import{H as h}from"./index-CKWd22nK.js";import{i as j}from"./icon_menu-CWW6Ti6G.js";import{i as u}from"./icon_token_ton-CiNinKlB.js";import{i as x}from"./icon_token_usdt-Vc1nzOUY.js";import{i as _,a as p,b as w,c as f,d as b}from"./icon_token_x-DqSqn68l.js";import{d as y}from"./index-CSco4dRo.js";import{$ as N}from"./useCustomNavigate-eFNRTvSc.js";import"./index-BSRuetrr.js";import"./attach-properties-to-component-CClyKAqJ.js";import"./use-props-value-BD19lTuy.js";const v="_content_body_1hzxj_1",k="_net_tips_1hzxj_14",S="_input_title_1hzxj_22",O="_input_1hzxj_22",T="_selector_1hzxj_93",g="_coin_icon_1hzxj_97",z="_send_btn_1hzxj_100",A="_center_row_1hzxj_113",W="_tip1_1hzxj_131",R="_row_1hzxj_143",D="_right_icon_1hzxj_148",I="_icon_1hzxj_154",{getWalletList:C,postWithdraw:E}=o("common"),G=s((s=>s.common))((s=>{const{tgUserInfoRaw:o}=s,G=N(),{t:K}=t(),[M,U]=e.useState([{key:"TON",icon:i.jsx(r,{src:u,width:22,style:{borderRadius:22}}),text:"TON",obj:u,balance:0,minAmount:1,minWithdraw:.01},{key:"USDT",icon:i.jsx(r,{src:x,width:22,style:{borderRadius:22}}),text:"USDT",obj:x,balance:0,minAmount:1,minWithdraw:.01},{key:"NOT",icon:i.jsx(r,{src:_,width:22,style:{borderRadius:22}}),text:"NOT",obj:_,balance:0,minAmount:1,minWithdraw:.01},{key:"STON",icon:i.jsx(r,{src:p,width:22,style:{borderRadius:22}}),text:"STON",obj:p,balance:0,minAmount:1,minWithdraw:.01},{key:"NIKO",icon:i.jsx(r,{src:w,width:22,style:{borderRadius:22}}),text:"NIKO",obj:w,balance:0,minAmount:1,minWithdraw:.01},{key:"DOGS",icon:i.jsx(r,{src:f,width:22,style:{borderRadius:22}}),text:"DOGS",obj:f,balance:0,minAmount:1,minWithdraw:.01},{key:"X",icon:i.jsx(r,{src:b,width:22,style:{borderRadius:22}}),text:"X",obj:b,balance:0,minAmount:1,minWithdraw:.01}]),[H,L]=e.useState({}),[P,X]=e.useState(!0),[$,F]=e.useState(1),[J,q]=e.useState(0),[B,Q]=e.useState(""),V=()=>{G("/withdrawRecord")},Y=()=>{(async()=>{const[s]=await C(o);if(200!==(null==s?void 0:s.code))return"";null==s||s.data.forEach((s=>{M.forEach((t=>{s.tokenSymbol===t.key&&(t.balance=s.balance,t.minAmount=s.minAmount,t.minWithdraw=s.minWithdraw,"TON"===s.tokenSymbol&&q(s.balance))}))})),L(M[0])})()};return n.useActivate((()=>{Y()})),e.useEffect((()=>{Y()}),[]),e.useEffect((()=>{X(J>.1)}),[H]),i.jsxs("div",{className:"warp",children:[i.jsx(h,{title:K("withdraw_title"),right:i.jsx("div",{className:D,children:i.jsx(r,{className:I,src:j,onClick:()=>V(),width:32,height:32,style:{borderRadius:10}})})}),i.jsxs("div",{className:"content",style:{display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[i.jsxs("div",{className:v,children:[i.jsxs(c,{children:[i.jsx("div",{className:k,children:"Network: TON (Mainnet)"}),i.jsx("div",{className:S,children:K("withdraw_tips_1")}),i.jsxs("div",{className:O,children:[i.jsx(d.Menu,{actions:M,placement:"bottom-start",onAction:s=>{L(s)},trigger:"click",children:i.jsxs("div",{className:R,children:[i.jsx(r,{className:g,src:H.obj,width:30,style:{borderRadius:22}}),i.jsx(l,{className:T,color:"#ffffff"})]})}),i.jsx(m,{style:{"--color":"#ffffff"},type:"number",min:.01,max:99999999.999,onChange:s=>F(s),value:$})]})]}),i.jsxs(c,{children:[i.jsx("div",{className:S,children:K("withdraw_tips_2")}),i.jsx("div",{className:O,children:i.jsx(m,{style:{"--color":"#ffffff","--font-size":"12px"},onChange:s=>Q(s),maxLength:120,value:B})})]}),i.jsx(c,{children:i.jsx("div",{className:R,children:i.jsxs("span",{className:W,children:[K("withdraw_tips_3")," ",H.balance," ",H.text]})})}),P?i.jsx(c,{children:i.jsx("div",{className:R,children:i.jsxs("span",{className:W,children:[K("withdraw_tips_4")," 0.1 TON"]})})}):null]}),i.jsx("div",{className:A,onClick:()=>(async()=>{try{if(y.Address.parseFriendly(B).isTestOnly)return void a.show({content:"Please use the TON mainnet wallet address.",position:"top"})}catch(t){return void a.show({content:"Invalid address.",position:"top"})}if((null==H?void 0:H.balance)<(null==H?void 0:H.minWithdraw))return void a.show({content:"Minimum withdrawal amount "+(null==H?void 0:H.minWithdraw)+" "+(null==H?void 0:H.key),position:"top"});if(J<.1)return void a.show({content:"The transaction fee is 0.1 ton, please confirm the balance.",position:"top"});const[s]=await E(o,{symbol:H.key,amount:$,receiveAddress:B});200===(null==s?void 0:s.code)?(a.show({content:"Success.",position:"top"}),V()):a.show({content:null==s?void 0:s.message,position:"top",duration:5e3})})(),children:i.jsx("div",{className:z,children:K("withdraw_tips_btn")})})]})]})}));export{G as default};
