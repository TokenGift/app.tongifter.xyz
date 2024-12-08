import{r as e,j as t,c as n,i as r,u as s,l as i,R as o,a,M as l,S as c,d,s as u,$ as m}from"./index-La_BdJCm.js";import{I as p}from"./image-p6r_qyGn.js";import{S as f}from"./index-szSiXgdb.js";import{i as v,a as _}from"./icon_refresh-9vnDdaeD.js";import h from"./index-CDkb2n7Q.js";import"./index-Bfiz3Bv-.js";import"./attach-properties-to-component-CClyKAqJ.js";import"./empty-D1Gmhsuc.js";import"./popup-B8GG5wjb.js";import"./icon_tgt-CrhvpaUb.js";import"./icon_token_ton-CiNinKlB.js";import"./icon_token_not-NeONbRwt.js";import"./index-gW0GDLLt.js";import"./useCustomNavigate-D8Zy9vSA.js";import"./SendOutline-Bgmr7Qan.js";const x="_avatar_8l6mm_20",w="_coin_icon_8l6mm_40",g="_list_item_8l6mm_43",y="_task_row_8l6mm_66",b="_task_column_8l6mm_81",j="_item_title_8l6mm_87",k="_item_content_8l6mm_96",N="_do_8l6mm_104",E="_center_row_8l6mm_116",I="_open_btn_8l6mm_127",T="_open_btn_border_8l6mm_140",S="_bottom_banner_widget_8l6mm_152",R="_bottom_banner_8l6mm_152",A="_bottom_content_8l6mm_176";var C=e.forwardRef((({as:e="div",...n},r)=>t.jsx(e,{...n,ref:r}))),O="cf-turnstile-script",P="onloadTurnstileCallback",F=e=>!!document.getElementById(e),L={normal:{width:300,height:65},compact:{width:150,height:140},invisible:{width:0,height:0,overflow:"hidden"},flexible:{minWidth:300,width:"100%",height:65},interactionOnly:{width:"fit-content",height:"auto",display:"flex"}};function B(e){if("invisible"!==e&&"interactionOnly"!==e)return e}var V,$="unloaded",D=new Promise(((e,t)=>{V={resolve:e,reject:t},"ready"===$&&e(void 0)})),U=e.forwardRef(((n,r)=>{let{scriptOptions:s,options:i={},siteKey:o,onWidgetLoad:a,onSuccess:l,onExpire:c,onError:d,onBeforeInteractive:u,onAfterInteractive:m,onUnsupported:p,onTimeout:f,onLoadScript:v,id:_,style:h,as:x="div",injectScript:w=!0,...g}=n,y=i.size,b=e.useCallback((()=>typeof y>"u"?{}:"execute"===i.execution?L.invisible:"interaction-only"===i.appearance?L.interactionOnly:L[y]),[i.execution,y,i.appearance]),[j,k]=e.useState(b()),N=e.useRef(null),[E,I]=e.useState(!1),T=e.useRef(),S=e.useRef(!1),R=_||"cf-turnstile",A=(null==s?void 0:s.id)||O,U=function(t=O){let[n,r]=e.useState(!1);return e.useEffect((()=>{let e=()=>{F(t)&&r(!0)},n=new MutationObserver(e);return n.observe(document,{childList:!0,subtree:!0}),e(),()=>{n.disconnect()}}),[t]),n}(A),G=(null==s?void 0:s.onLoadCallbackName)||P,M=i.appearance||"always",z=e.useMemo((()=>({sitekey:o,action:i.action,cData:i.cData,callback:e=>{S.current=!0,null==l||l(e)},"error-callback":d,"expired-callback":c,"before-interactive-callback":u,"after-interactive-callback":m,"unsupported-callback":p,theme:i.theme||"auto",language:i.language||"auto",tabindex:i.tabIndex,"response-field":i.responseField,"response-field-name":i.responseFieldName,size:B(y),retry:i.retry||"auto","retry-interval":i.retryInterval||8e3,"refresh-expired":i.refreshExpired||"auto","refresh-timeout":i.refreshTimeout||"auto",execution:i.execution||"render",appearance:i.appearance||"always","feedback-enabled":i.feedbackEnabled||!0,"timeout-callback":f})),[i.action,i.appearance,i.cData,i.execution,i.language,i.refreshExpired,i.responseField,i.responseFieldName,i.retry,i.retryInterval,i.tabIndex,i.theme,i.feedbackEnabled,i.refreshTimeout,o,y]),q=e.useCallback((()=>typeof window<"u"&&!!window.turnstile),[]);return e.useEffect((function(){w&&!E&&(({render:e="explicit",onLoadCallbackName:t=P,scriptOptions:{nonce:n="",defer:r=!0,async:s=!0,id:i="",appendTo:o,onError:a,crossOrigin:l=""}={}})=>{let c=i||O;if(F(c))return;let d=document.createElement("script");d.id=c,d.src=`https://challenges.cloudflare.com/turnstile/v0/api.js?onload=${t}&render=${e}`,document.querySelector(`script[src="${d.src}"]`)||(d.defer=!!r,d.async=!!s,n&&(d.nonce=n),l&&(d.crossOrigin=l),a&&(d.onerror=a,delete window[t]),("body"===o?document.body:document.getElementsByTagName("head")[0]).appendChild(d))})({onLoadCallbackName:G,scriptOptions:{...s,id:A}})}),[w,E,s,A]),e.useEffect((function(){"ready"!==$&&((e=P)=>("unloaded"===$&&($="loading",window[e]=()=>{V.resolve(),$="ready",delete window[e]}),D))(G).then((()=>I(!0))).catch(console.error)}),[]),e.useEffect((function(){if(!N.current||!E)return;let e=!1;return(async()=>{if(e||!N.current)return;let t=window.turnstile.render(N.current,z);T.current=t,T.current&&(null==a||a(T.current))})(),()=>{e=!0,T.current&&(window.turnstile.remove(T.current),S.current=!1)}}),[R,E,z]),e.useImperativeHandle(r,(()=>{let{turnstile:e}=window;return{getResponse(){if((null==e?void 0:e.getResponse)&&T.current&&q())return e.getResponse(T.current);console.warn("Turnstile has not been loaded")},getResponsePromise:async(e=3e4,t=100)=>new Promise(((n,r)=>{let s,i=async()=>{if(S.current&&window.turnstile&&T.current)try{let e=window.turnstile.getResponse(T.current);return s&&clearTimeout(s),e?n(e):r(new Error("No response received"))}catch(o){return s&&clearTimeout(s),console.warn("Failed to get response",o),r(new Error("Failed to get response"))}s||(s=setTimeout((()=>{s&&clearTimeout(s),r(new Error("Timeout"))}),e)),await new Promise((e=>setTimeout(e,t))),await i()};i()})),reset(){if((null==e?void 0:e.reset)&&T.current&&q()){"execute"===i.execution&&k(L.invisible);try{S.current=!1,e.reset(T.current)}catch(t){console.warn(`Failed to reset Turnstile widget ${T}`,t)}}else console.warn("Turnstile has not been loaded")},remove(){(null==e?void 0:e.remove)&&T.current&&q()?(k(L.invisible),S.current=!1,e.remove(T.current),T.current=null):console.warn("Turnstile has not been loaded")},render(){if(!(null==e?void 0:e.render)||!N.current||!q()||T.current)return void console.warn("Turnstile has not been loaded or container not found");let t=e.render(N.current,z);return T.current=t,T.current&&(null==a||a(T.current)),"execute"!==i.execution&&k(y?L[y]:{}),t},execute(){"execute"===i.execution?(null==e?void 0:e.execute)&&N.current&&T.current&&q()?(e.execute(N.current,z),k(y?L[y]:{})):console.warn("Turnstile has not been loaded or container not found"):console.warn('Execution mode is not set to "execute"')},isExpired:()=>(null==e?void 0:e.isExpired)&&T.current&&q()?e.isExpired(T.current):(console.warn("Turnstile has not been loaded"),!1)}}),[T,i.execution,y,z,N,q,E,a]),e.useEffect((()=>{U&&!E&&window.turnstile&&I(!0)}),[E,U]),e.useEffect((()=>{k(b())}),[i.execution,y,M]),e.useEffect((()=>{!U||"function"!=typeof v||v()}),[U]),t.jsx(C,{ref:N,as:x,id:R,style:{...j,...h},...g})}));U.displayName="Turnstile";const{VITE_APP_ENV:G}={BASE_URL:"/",DEV:!1,MODE:"prod",PROD:!0,SSR:!1,VITE_APP_ENV:"prod",VITE_BASE_URL:"https://api.tongifter.xyz"},{getGiftInfo:M,getTaskProgress:z,updateTask:q,openGift:H}=m("common"),K=n((e=>e.common))((n=>{var m,C,O;const{tgUserInfoRaw:P,tgUserInfo:F}=n,{location:L,pathname:B,search:V,hash:$}=r(),{t:D,i18n:K}=s(),[W]=i(),J=W.get("id"),Q=W.get("inviterId"),[X,Y]=e.useState("0x4AAAAAAA0Gfu6U8AVORjc0"),[Z,ee]=e.useState(!1),te=o.useRef(),[ne,re]=e.useState({}),[se,ie]=e.useState({}),[oe,ae]=e.useState(0),[le,ce]=e.useState(!1),[de,ue]=e.useState(!1),[me,pe]=e.useState(!1),fe=async()=>{const[e]=await z(P,{id:J});200===(null==e?void 0:e.code)&&ie(null==e?void 0:e.data)},ve=e=>{se.task.map((t=>t.taskId===e.taskId?{...t,...e}:t));let t={...se};ie(t)},_e=e=>{if(e)return e.completed?void 0:1===e.status?t.jsx(p,{className:w,src:_,width:32,height:32,placeholder:t.jsx(f.Paragraph,{style:{width:"100%"}}),onClick:t=>{t.stopPropagation(),he(e)},style:{borderRadius:10}}):2===e.status?t.jsx(c,{style:{"--size":"24px","--color":"red"}}):t.jsx("div",{className:N,children:D("receive_btn_do")})},he=async e=>{e.status=2,ve(e);const[t]=await q(P,{giftId:J,taskId:e.taskId});200===(null==t?void 0:t.code)&&fe()},xe=async()=>{ce(!1),pe(!0),ue(!0)},we=async()=>{var e;await fe(),se.completed?(null==(e=te.current)||e.render(),ee(!0)):d.show({content:D("receive_tips_tips_1"),position:"top"})},ge=()=>{"prod"!=G&&Y("1x00000000000000000000AA"),(async()=>{const[e]=await M(P,{id:J});200===(null==e?void 0:e.code)?re(null==e?void 0:e.data):d.show({content:D(null==e?void 0:e.message),position:"top"})})(),fe()};return a.useActivate((()=>{ge()})),e.useEffect((()=>{ge()}),[L]),e.useEffect((()=>{var e;null!=se.completed&&null!=ne.gift&&(99==ne.gift.status||ne.gift.userId==F.id?ae(2):(se.completed||(ae(1),de||(ce(!0),ue(!1))),se.completed&&(null==(e=ne.myAward)?void 0:e.surplusTimes)<=0&&ae(2),se.completed&&(null==ne.myAward||ne.myAward.surplusTimes>0)&&(ae(1),ce(!1),ue(!0))))}),[se,ne]),t.jsxs("div",{className:"warp",children:[0==oe?t.jsx("div",{className:"content1",style:{padding:"16px"},children:t.jsx(f,{className:A,animated:!0})}):null,1==oe?t.jsxs("div",{className:"content1",style:{padding:"16px"},children:[me?null:t.jsx("div",{className:A,style:{backgroundImage:`url(${null==(m=ne.gift)?void 0:m.coverImg})`}}),me?t.jsx("div",{className:A,style:{backgroundImage:`url(${null==(C=ne.gift)?void 0:C.coverImg})`},children:null==(O=se.task)?void 0:O.map(((e,n)=>t.jsxs("div",{className:g,onClick:()=>{(async e=>{e.status=1,ve(e),1==e.type&&l("web_app_open_tg_link",{path_full:e.value.replace("@","")}),2==e.type&&l("web_app_open_link",{url:e.value,try_instant_view:!1})})(e)},children:[t.jsxs("div",{className:y,children:[e.completed?t.jsx(p,{className:x,src:v,width:30,height:30,fit:"cover",style:{borderRadius:14}}):t.jsx(p,{className:x,src:"/img/icon_lock.Bp71GFIS.jpg",width:30,height:30,fit:"cover",style:{borderRadius:14}}),t.jsxs("div",{className:b,children:[t.jsx("span",{className:j,children:e.title}),t.jsx("span",{className:k,children:e.desc})]})]}),_e(e)]},n)))}):null,t.jsxs("div",{className:E,children:[de?t.jsx("div",{onClick:we,className:T,children:t.jsx("div",{onClick:we,className:I,children:D("receive_btn_receive")})}):null,le?t.jsx("div",{onClick:xe,className:T,children:t.jsx("div",{onClick:xe,className:I,children:D("receive_btn_open")})}):null]}),t.jsx("div",{className:S,children:t.jsx("div",{className:R,children:D("receive_tips_max")})})]}):null,2==oe?t.jsx("div",{className:"content1",style:{color:"#ffffff"},children:t.jsx(h,{giftId:J})}):null,Z?t.jsx("div",{className:"cf_turnstile_pop",onClick:e=>{ee(!1)},children:t.jsx("div",{className:"item",children:t.jsx(U,{ref:te,siteKey:X,options:{language:K.language},onSuccess:e=>{(async e=>{var t;if(console.log("path x",B,V,$),se.completed){ee(!1);const[n]=await H(P,{id:J,inviterId:Q,cfvt:e});200===(null==n?void 0:n.code)?(u(D("receive_tips_tips_2",{v1:null==n?void 0:n.data,v2:null==(t=ne.gift)?void 0:t.tokenSymbol}),1),ae(2)):u(null==n?void 0:n.message,3)}else u(D("receive_tips_tips_1"),3)})(e)},onClick:e=>{e.stopPropagation()}})})}):null]})}));export{K as default};
