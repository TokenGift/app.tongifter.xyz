import{r as e,c as t,u as s,j as i,a as o,d as n,$ as a}from"./index-BEQcC8u1.js";import{I as r}from"./image-BpqIT1GZ.js";import{S as l,I as c,P as d,D as m}from"./input-DuOKIO5g.js";import{H as f}from"./index-DdlqH7x6.js";import{i as w}from"./icon_menu-CWW6Ti6G.js";import{i as h}from"./icon_token_ton-CiNinKlB.js";import{i as p,a as u}from"./icon_token_not-NeONbRwt.js";import{i as j,a as x,b as _,c as b}from"./icon_token_x-DdpvgONB.js";import{$ as y}from"./useCustomNavigate-CzvRSbKJ.js";import"./index-CNksvY4w.js";import"./attach-properties-to-component-CClyKAqJ.js";import"./use-props-value-DHAic5qH.js";function N(t){return e.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},t,{style:Object.assign({verticalAlign:"-0.125em"},t.style),className:["antd-mobile-icon",t.className].filter(Boolean).join(" ")}),e.createElement("g",{id:"ArrowDownCircleOutline-ArrowDownCircleOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},e.createElement("g",{id:"ArrowDownCircleOutline-编组"},e.createElement("rect",{id:"ArrowDownCircleOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),e.createElement("path",{d:"M24,2 C36.1502645,2 46,11.8497355 46,24 C46,36.1502645 36.1502645,46 24,46 C11.8497355,46 2,36.1502645 2,24 C2,11.8497355 11.8497355,2 24,2 Z M24,5 C13.5065898,5 5,13.5065898 5,24 C5,34.4934102 13.5065898,43 24,43 C34.4934102,43 43,34.4934102 43,24 C43,13.5065898 34.4934102,5 24,5 Z M25.5,14 L25.5,28.097 L32,22.2362695 L32,26.2702695 L25.0579139,32.5311619 L24.9262865,32.6372074 C24.6996726,32.7997327 24.4388835,32.8912244 24.1739045,32.9124553 L24.000383,32.9163061 C23.6709115,32.9280882 23.3377817,32.8318325 23.0583752,32.6260597 L22.9420861,32.5311619 L16,26.2702695 L16,22.2362695 L22.5,28.099 L22.5,14 L25.5,14 Z",id:"ArrowDownCircleOutline-形状结合",fill:"currentColor",fillRule:"nonzero"}))))}const v="_content_body_fp6t7_1",g="_input_title_fp6t7_22",C="_input_fp6t7_22",k="_selector_fp6t7_93",O="_coin_icon_fp6t7_97",A="_send_btn_fp6t7_100",L="_center_row_fp6t7_113",S="_row_fp6t7_143",F="_right_icon_fp6t7_148",R="_icon_fp6t7_154",{getWalletList:D,postWithdraw:T}=a("common"),E=t((e=>e.common))((t=>{const{tgUserInfoRaw:a}=t,T=y(),{t:E}=s(),[I,G]=e.useState([{key:"TON",icon:i.jsx(r,{src:h,width:22,style:{borderRadius:22}}),text:"TON",obj:h,balance:0,minAmount:1,withdrawFee:.01},{key:"USDT",icon:i.jsx(r,{src:p,width:22,style:{borderRadius:22}}),text:"USDT",obj:p,disabled:!1,balance:0,minAmount:1,withdrawFee:.01},{key:"NOT",icon:i.jsx(r,{src:u,width:22,style:{borderRadius:22}}),text:"NOT",obj:u,disabled:!1,balance:0,minAmount:1,withdrawFee:.01},{key:"STON",icon:i.jsx(r,{src:j,width:22,style:{borderRadius:22}}),text:"STON",obj:j,disabled:!0,balance:0,minAmount:1,withdrawFee:.01},{key:"NIKO",icon:i.jsx(r,{src:x,width:22,style:{borderRadius:22}}),text:"NIKO",obj:x,disabled:!1,balance:0,minAmount:1,withdrawFee:.01},{key:"DOGS",icon:i.jsx(r,{src:_,width:22,style:{borderRadius:22}}),text:"DOGS",obj:_,disabled:!1,balance:0,minAmount:1,withdrawFee:.01},{key:"X",icon:i.jsx(r,{src:b,width:22,style:{borderRadius:22}}),text:"X",obj:b,disabled:!0,balance:0,minAmount:1,withdrawFee:.01}]),[M,U]=e.useState({}),[W,X]=e.useState(0),[Z,$]=e.useState(""),[z,B]=e.useState("????"),H=()=>{(async()=>{const[e]=await D(a);if(200!==(null==e?void 0:e.code))return"";null==e||e.data.forEach((e=>{"TGT"===e.tokenSymbol&&X(e.balance)})),U(I[0])})()};return o.useActivate((()=>{H()})),e.useEffect((()=>{H()}),[]),i.jsxs("div",{className:"warp",children:[i.jsx(f,{title:E("swap_title"),right:i.jsx("div",{className:F,children:i.jsx(r,{className:R,src:w,onClick:()=>{T("/tokenRecord")},width:32,height:32,style:{borderRadius:10}})})}),i.jsxs("div",{className:"content",style:{display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[i.jsxs("div",{className:v,children:[i.jsxs(l,{children:[i.jsxs("div",{className:g,children:[E("swap_tips_1")," ",W]}),i.jsx("div",{className:C,children:i.jsx(c,{style:{"--color":"#ffffff"},onChange:e=>(e=>{let t=parseInt(e);t>0?(t>W&&(t=W),$(t)):$("")})(e),maxLength:120,type:"number",min:.01,max:99999999.999,placeholder:E("swap_placeho_1",{v1:`${W}`}),value:Z})})]}),i.jsxs(l,{children:[i.jsx("div",{className:g,children:i.jsx(N,{color:"#ffffff",fontSize:28})}),i.jsxs("div",{className:C,children:[i.jsx(d.Menu,{actions:I,placement:"bottom-start",onAction:e=>{U(e)},trigger:"click",children:i.jsxs("div",{className:S,children:[i.jsx(r,{className:O,src:M.obj,width:30,style:{borderRadius:22}}),i.jsx(m,{className:k,color:"#ffffff"})]})}),i.jsx(c,{style:{"--color":"#ffffff"},disabled:!0,value:z})]})]})]}),i.jsx("div",{className:L,onClick:()=>(async()=>{W<=1e3?n.show({content:"TGT balance not less than 1000!",position:"top"}):n.show({content:"Coming soon!",position:"top"})})(),children:i.jsx("div",{className:A,children:E("swap_btn")})})]})]})}));export{E as default};
