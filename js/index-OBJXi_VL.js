import{c as e,r as s,u as i,n as a,a as n,j as t,t as l,p as r,e as c,b as o,$ as d}from"./index-Ci8s7B5i.js";import{E as _}from"./empty-CEuQ2_Ak.js";import{I as m}from"./image-D5s1CrYP.js";import{P as p}from"./popup-BGxXWg2O.js";import{S as h}from"./index-DyIzR6B2.js";import{i as u}from"./icon_tgt-CrhvpaUb.js";import{i as v}from"./icon_token_usdt-Vc1nzOUY.js";import{i as x}from"./icon_token_ton-CiNinKlB.js";import{c as f}from"./index-BiEWZKr3.js";import{$ as j}from"./useCustomNavigate-BLM3kPMT.js";import{S as g,L as b}from"./SendOutline-D-T2aoxA.js";import"./index-BvLHmlOy.js";import"./attach-properties-to-component-CClyKAqJ.js";const N="_row_1nib6_8",w="_result_stamp_empty_1nib6_15",y="_balance_widget_1nib6_37",k="_tip_box_1nib6_45",S="_has_more_tips_1nib6_50",C="_tip_1nib6_45",T="_balance_name_1nib6_60",A="_balance_name_after_1nib6_68",I="_balance_1nib6_37",G="_token_symbol_1nib6_78",R="_column_1nib6_88",U="_record_item_1nib6_94",H="_receive_record_1nib6_102",B="_row_sb_1nib6_116",P="_coin_balance_1nib6_124",L="_coin_amount_1nib6_132",M="_time_1nib6_136",O="_count_1nib6_140",z="_share_btn_1nib6_144",E="_share_pop_1nib6_158",V="_share_column_center_1nib6_164",$="_share_title_1nib6_170",q="_share_describe_1nib6_175",D="_share_row_sb_1nib6_185",W="_share_icon_bg_1nib6_193",F="_share_header_titile_1nib6_206",Q="_share_to_group_1nib6_209",{getReceivedHistoryMainLimit:J}=d("common"),K=s.memo((function(e){var d,K,X,Y,Z,ee,se,ie,ae,ne,te,le;const{tgUserInfoRaw:re,tgUserInfo:ce,giftInfoPre:oe}=e,{t:de}=i(),_e=j(),[me,pe]=s.useState(!1),[he,ue]=s.useState({}),[ve,xe]=s.useState(null),[fe,je]=s.useState(0),[ge]=a(),be=ge.get("id"),Ne=async()=>{o("web_app_switch_inline_query",{query:r(be,ce.id),chat_types:["users","users","groups","channels"]})},we=()=>{(async()=>{ue(oe),99==oe.gift.status?je(2):(je(1),oe.gift.userId==ce.id&&je(3))})(),(async()=>{const[e]=await J(re,{id:be});200===(null==e?void 0:e.code)&&xe(null==e?void 0:e.data)})()};return n.useActivate((()=>{we()}),[oe]),s.useEffect((()=>{we()}),[oe]),t.jsxs("div",{className:"warp",children:[t.jsx("div",{className:y,style:{backgroundImage:`url(${null==(d=he.gift)?void 0:d.coverImg})`}}),t.jsxs("div",{className:R,children:[t.jsxs("span",{className:T,children:[null==(K=he.gift)?void 0:K.title," ",t.jsx("span",{className:A,children:de("receive_detail_for_you")})]}),t.jsxs("div",{className:N,children:[t.jsx(m,{src:(ye=null==(X=he.gift)?void 0:X.tokenSymbol,"TGT"==ye?u:"USDT"==ye?v:"TON"==ye?x:void 0),width:26}),t.jsxs("span",{className:I,children:[null!=he.myAward&&ce.id!=(null==he?void 0:he.gift.userId)?he.myAward.totalReward:null==(Y=he.gift)?void 0:Y.totalAmount,t.jsxs("span",{className:G,children:[" ",null==(Z=he.gift)?void 0:Z.tokenSymbol]})]}),t.jsx(m,{onClick:()=>{_e("/me")},src:"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='1200'%20height='1200'%20viewBox='0%200%20512%20512'%20fill='none'%20class='h-full%20w-full'%20id='iconWithBackground'%3e%3crect%20id='r4'%20width='512'%20height='512'%20x='0'%20y='0'%20rx='80'%20fill='url(%23linearGradient-iconWithBackground)'%20stroke='%23000000'%20stroke-width='0'%20stroke-opacity='100%25'%20paint-order='stroke'/%3e%3cdefs%3e%3clinearGradient%20id='linearGradient-iconWithBackground'%20gradientUnits='userSpaceOnUse'%20gradientTransform='rotate(0)'%20style='transform-origin:center%20center'%3e%3cstop%20stop-color='%231CDFAE'/%3e%3cstop%20offset='1'%20stop-color='%233C6DE1'/%3e%3c/linearGradient%3e%3cradialGradient%20id='glare'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(256)%20rotate(90)%20scale(512)'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3cclipPath%20id='clip'%3e%3cuse%20xlink:href='%23r4'/%3e%3c/clipPath%3e%3c/defs%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='340'%20height='340'%20viewBox='0%200%2024%2024'%20x='86'%20y='86'%3e%3cpath%20fill='%23ffffff'%20d='M19.5%207H18V6a3.003%203.003%200%200%200-3-3H4.5A2.502%202.502%200%200%200%202%205.5V18a3.003%203.003%200%200%200%203%203h14.5a2.502%202.502%200%200%200%202.5-2.5v-9A2.502%202.502%200%200%200%2019.5%207zm-15-3H15a2.003%202.003%200%200%201%202%202v1H4.5a1.5%201.5%200%201%201%200-3zM21%2016h-2a2%202%200%200%201%200-4h2v4zm0-5h-2a3%203%200%201%200%200%206h2v1.5a1.5%201.5%200%200%201-1.5%201.5H5a2.003%202.003%200%200%201-2-2V7.499c.432.326.959.502%201.5.501h15A1.5%201.5%200%200%201%2021%209.5V11z'/%3e%3c/svg%3e%3c/svg%3e",width:36})]})]}),t.jsxs("div",{className:"content1",children:[t.jsx("div",{className:k,children:t.jsxs("span",{className:C,children:[de("receive_detail_tips_1")," ",null==(ee=he.gift)?void 0:ee.recvQuantity,"/",null==(se=he.gift)?void 0:se.totalQuantity," ",l(null==(ie=he.gift)?void 0:ie.recvAmount,3),"/",l(null==(ae=he.gift)?void 0:ae.totalAmount,3)," ",null==(ne=he.gift)?void 0:ne.tokenSymbol]})}),t.jsx("div",{className:"ma-10"}),99==(null==(te=he.gift)?void 0:te.status)&&t.jsx("div",{className:w}),null==ve?t.jsx(h.Paragraph,{lineCount:10,animated:!0}):null,null==ve?void 0:ve.map(((e,s)=>{var i;return t.jsxs("div",{className:H,children:[t.jsx(m,{src:`https://api.multiavatar.com/${e.userId}.png`,style:{borderRadius:40},width:40,height:33}),t.jsxs("div",{className:U,children:[t.jsxs("div",{className:B,children:[t.jsx("span",{className:P,children:e.firstName}),t.jsxs("span",{className:L,children:["+",e.totalReward," ",null==(i=he.gift)?void 0:i.tokenSymbol]})]}),t.jsxs("div",{className:B,children:[t.jsx("span",{className:M,children:e.createTime}),t.jsxs("span",{className:O,children:["+",e.totalTimes-e.surplusTimes," ",de("receive_detail_times")]})]})]})]},s)})),0==(null==ve?void 0:ve.length)?t.jsx("div",{className:"pt-20",children:t.jsx(_,{description:"Nobody"})}):null,(null==ve?void 0:ve.length)>=25?t.jsx("div",{className:S,children:de("receive_detail_more_tips")}):null]}),t.jsx(p,{visible:me,onMaskClick:()=>{pe(!1)},bodyStyle:{borderTopLeftRadius:"15px",borderTopRightRadius:"15px"},destroyOnClose:!0,children:t.jsx("div",{className:E,children:t.jsxs("div",{className:V,children:[t.jsx("span",{className:$,children:de("receive_share_pop_title")}),t.jsx("span",{className:q,children:de("receive_share_pop_tips_1",{v1:null==(le=he.gift)?void 0:le.invitePreUser})}),t.jsxs("div",{className:D,children:[t.jsxs("div",{className:V,onClick:()=>{Ne()},children:[t.jsx("div",{className:W,children:t.jsx(g,{color:"#ff5284"})}),t.jsx("span",{className:q,children:de("receive_share_pop_btn_to_link")})]}),t.jsxs("div",{className:V,onClick:()=>(async()=>{f("@tokengiftbot "+r(be,ce.id)),c.show({content:"Link copied!",position:"top"})})(),children:[t.jsx("div",{className:W,children:t.jsx(b,{color:"#ff5284"})}),t.jsx("span",{className:q,children:de("receive_share_pop_tips_copy_url")})]})]}),t.jsx("div",{className:Q,onClick:()=>{Ne()},children:t.jsx("span",{className:F,children:de("receive_share_pop_btn_to_chat")})})]})})}),1==fe?t.jsx("div",{className:z,onClick:()=>{pe(!0)},children:t.jsx("span",{className:F,children:de("receive_detail_btn_agen")})}):null,2==fe?t.jsx("div",{className:z,onClick:()=>{_e("/")},children:t.jsx("span",{className:F,children:de("receive_detail_btn")})}):null,3==fe?t.jsx("div",{className:z,onClick:()=>{(async()=>{Ne()})()},children:t.jsx("span",{className:F,children:de("receive_share_btn_to_user")})}):null]});var ye})),X=e((e=>e.common))(K);export{X as default};
