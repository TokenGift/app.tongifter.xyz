import{R as e,r as t,m as n,e as o,f as a,_ as l,l as i,n as s,o as r,p as c,q as d,t as u,v as m,x as p,y as v,A as f,z as _,B as y,j as g,c as b,i as h,u as x,C as w,a as k,M as C,S as E,D as j,s as N,$ as T,d as S}from"./index-C_3ddLij.js";import{D as O}from"./dot-loading-Dc4BvsHn.js";import{i as A}from"./validate-DV_5QMAi.js";import{u as I,I as R}from"./image-en54bmCk.js";import{d as $,u as P}from"./popup-dVRP-wxK.js";import{a as M}from"./attach-properties-to-component-CClyKAqJ.js";import{S as B}from"./index-COGjNMLd.js";import{i as D,a as z}from"./icon_refresh-9vnDdaeD.js";import F from"./index-C-NwjaXH.js";import"./index-DByWGvKe.js";import"./empty-DXvMl_kY.js";import"./icon_tgt-CrhvpaUb.js";import"./icon_token_ton-CiNinKlB.js";import"./icon_token_x-BgQHK46Y.js";import"./index-DVjk0rFN.js";import"./useCustomNavigate-CjqF2jov.js";import"./SendOutline-oEvOGT3-.js";const L="adm-button",U={color:"default",fill:"solid",block:!1,loading:!1,loadingIcon:e.createElement(O,{color:"currentColor"}),type:"button",shape:"default",size:"middle"},V=t.forwardRef(((i,s)=>{const r=n(U,i),[c,d]=t.useState(!1),u=t.useRef(null),m="auto"===r.loading?c:r.loading,p=r.disabled||m;t.useImperativeHandle(s,(()=>({get nativeElement(){return u.current}})));return o(r,e.createElement("button",{ref:u,type:r.type,onClick:e=>l(void 0,void 0,void 0,(function*(){if(!r.onClick)return;const t=r.onClick(e);if(A(t))try{d(!0),yield t,d(!1)}catch(n){throw d(!1),n}})),className:a(L,{[`${L}-${r.color}`]:r.color,[`${L}-block`]:r.block,[`${L}-disabled`]:p,[`${L}-fill-outline`]:"outline"===r.fill,[`${L}-fill-none`]:"none"===r.fill,[`${L}-mini`]:"mini"===r.size,[`${L}-small`]:"small"===r.size,[`${L}-large`]:"large"===r.size,[`${L}-loading`]:m},`${L}-shape-${r.shape}`),disabled:p,onMouseDown:r.onMouseDown,onMouseUp:r.onMouseUp,onTouchStart:r.onTouchStart,onTouchEnd:r.onTouchEnd},m?e.createElement("div",{className:`${L}-loading-wrapper`},r.loadingIcon,r.loadingText):e.createElement("span",null,r.children)))})),G="adm-center-popup",q=Object.assign(Object.assign({},$),{getContainer:null}),H=l=>{const{popup:f={}}=i(),_=n(q,f,l),y=s(),g=r({scale:_.visible?1:.8,opacity:_.visible?1:0,config:{mass:1.2,tension:200,friction:25,clamp:!0},onRest:()=>{var e,t;y.current||(h(_.visible),_.visible?null===(e=_.afterShow)||void 0===e||e.call(_):null===(t=_.afterClose)||void 0===t||t.call(_))}}),[b,h]=t.useState(_.visible);I((()=>{_.visible&&h(!0)}),[_.visible]);const x=t.useRef(null);c(x,_.disableBodyScroll&&b);const w=P(b&&_.visible),k=e.createElement("div",{className:a(`${G}-body`,_.bodyClassName),style:_.bodyStyle},_.children),C=d(_.stopPropagation,o(_,e.createElement("div",{className:G,style:{display:b?void 0:"none",pointerEvents:b?void 0:"none"}},_.mask&&e.createElement(u,{visible:w,forceRender:_.forceRender,destroyOnClose:_.destroyOnClose,onMaskClick:e=>{var t,n;null===(t=_.onMaskClick)||void 0===t||t.call(_,e),_.closeOnMaskClick&&(null===(n=_.onClose)||void 0===n||n.call(_))},style:_.maskStyle,className:a(`${G}-mask`,_.maskClassName),disableBodyScroll:!1,stopPropagation:_.stopPropagation}),e.createElement("div",{className:`${G}-wrap`,role:_.role,"aria-label":_["aria-label"]},e.createElement(m.div,{style:Object.assign(Object.assign({},g),{pointerEvents:g.opacity.to((e=>1===e?"unset":"none"))}),ref:x},_.showCloseButton&&e.createElement("a",{className:a(`${G}-close`,"adm-plain-anchor"),onClick:()=>{var e;null===(e=_.onClose)||void 0===e||e.call(_)}},_.closeIcon),k)))));return e.createElement(p,{active:b,forceRender:_.forceRender,destroyOnClose:_.destroyOnClose},v(_.getContainer,C))},K=t=>{const{action:n}=t;return o(t.action,e.createElement(V,{key:n.key,onClick:t.onAction,className:a("adm-dialog-button",{"adm-dialog-button-bold":n.bold}),fill:"none",shape:"rectangular",block:!0,color:n.danger?"danger":"primary",loading:"auto",disabled:n.disabled},n.text))},W={actions:[],closeOnAction:!1,closeOnMaskClick:!1,getContainer:null},J=t=>{const o=n(W,t),i=e.createElement(e.Fragment,null,!!o.image&&e.createElement("div",{className:Q("image-container")},e.createElement(R,{src:o.image,alt:"dialog header image",width:"100%"})),!!o.header&&e.createElement("div",{className:Q("header")},e.createElement(f,null,o.header)),!!o.title&&e.createElement("div",{className:Q("title")},o.title),e.createElement("div",{className:a(Q("content"),!o.content&&Q("content-empty"))},"string"==typeof o.content?e.createElement(f,null,o.content):o.content),e.createElement("div",{className:Q("footer")},o.actions.map(((t,n)=>{const a=Array.isArray(t)?t:[t];return e.createElement("div",{className:Q("action-row"),key:n},a.map(((t,n)=>e.createElement(K,{key:t.key,action:t,onAction:()=>l(void 0,void 0,void 0,(function*(){var e,a,l;yield Promise.all([null===(e=t.onClick)||void 0===e?void 0:e.call(t),null===(a=o.onAction)||void 0===a?void 0:a.call(o,t,n)]),o.closeOnAction&&(null===(l=o.onClose)||void 0===l||l.call(o))}))}))))}))));return e.createElement(H,{className:a(Q(),o.className),style:o.style,afterClose:o.afterClose,afterShow:o.afterShow,onMaskClick:o.closeOnMaskClick?()=>{var e;null===(e=o.onClose)||void 0===e||e.call(o)}:void 0,visible:o.visible,getContainer:o.getContainer,bodyStyle:o.bodyStyle,bodyClassName:a(Q("body"),o.image&&Q("with-image"),o.bodyClassName),maskStyle:o.maskStyle,maskClassName:o.maskClassName,stopPropagation:o.stopPropagation,disableBodyScroll:o.disableBodyScroll,destroyOnClose:o.destroyOnClose,forceRender:o.forceRender,role:"dialog","aria-label":o["aria-label"]},i)};function Q(e=""){return"adm-dialog"+(e&&"-")+e}const X=new Set;function Y(t){const n=_(e.createElement(J,Object.assign({},t,{afterClose:()=>{var e;X.delete(n.close),null===(e=t.afterClose)||void 0===e||e.call(t)}})));return X.add(n.close),n}const Z={confirmText:"确认",cancelText:"取消"};const ee=M(J,{show:Y,alert:function(e){const t={confirmText:y().locale.Dialog.ok},o=n(t,e);return new Promise((e=>{Y(Object.assign(Object.assign({},o),{closeOnAction:!0,actions:[{key:"confirm",text:o.confirmText}],onAction:o.onConfirm,onClose:()=>{var t;null===(t=o.onClose)||void 0===t||t.call(o),e()}}))}))},confirm:function(e){const{locale:t}=y(),o=n(Z,{confirmText:t.common.confirm,cancelText:t.common.cancel},e);return new Promise((e=>{Y(Object.assign(Object.assign({},o),{closeOnAction:!0,onClose:()=>{var t;null===(t=o.onClose)||void 0===t||t.call(o),e(!1)},actions:[[{key:"cancel",text:o.cancelText,onClick:()=>l(this,void 0,void 0,(function*(){var t;yield null===(t=o.onCancel)||void 0===t?void 0:t.call(o),e(!1)}))},{key:"confirm",text:o.confirmText,bold:!0,onClick:()=>l(this,void 0,void 0,(function*(){var t;yield null===(t=o.onConfirm)||void 0===t?void 0:t.call(o),e(!0)}))}]]}))}))},clear:function(){X.forEach((e=>{e()}))}}),te="_avatar_ceno8_20",ne="_coin_icon_ceno8_40",oe="_list_item_ceno8_43",ae="_task_row_ceno8_66",le="_task_column_ceno8_81",ie="_item_title_ceno8_87",se="_item_content_ceno8_96",re="_do_ceno8_104",ce="_center_row_ceno8_116",de="_open_btn_ceno8_127",ue="_open_btn_border_ceno8_140",me="_bottom_banner_widget_ceno8_152",pe="_bottom_banner_ceno8_152",ve="_bottom_content_ceno8_177";var fe=t.forwardRef((({as:e="div",...t},n)=>g.jsx(e,{...t,ref:n}))),_e="cf-turnstile-script",ye="onloadTurnstileCallback",ge=e=>!!document.getElementById(e),be={normal:{width:300,height:65},compact:{width:150,height:140},invisible:{width:0,height:0,overflow:"hidden"},flexible:{minWidth:300,width:"100%",height:65},interactionOnly:{width:"fit-content",height:"auto",display:"flex"}};function he(e){if("invisible"!==e&&"interactionOnly"!==e)return e}var xe,we="unloaded",ke=new Promise(((e,t)=>{xe={resolve:e,reject:t},"ready"===we&&e(void 0)})),Ce=t.forwardRef(((e,n)=>{let{scriptOptions:o,options:a={},siteKey:l,onWidgetLoad:i,onSuccess:s,onExpire:r,onError:c,onBeforeInteractive:d,onAfterInteractive:u,onUnsupported:m,onTimeout:p,onLoadScript:v,id:f,style:_,as:y="div",injectScript:b=!0,...h}=e,x=a.size,w=t.useCallback((()=>typeof x>"u"?{}:"execute"===a.execution?be.invisible:"interaction-only"===a.appearance?be.interactionOnly:be[x]),[a.execution,x,a.appearance]),[k,C]=t.useState(w()),E=t.useRef(null),[j,N]=t.useState(!1),T=t.useRef(),S=t.useRef(!1),O=f||"cf-turnstile",A=(null==o?void 0:o.id)||_e,I=function(e=_e){let[n,o]=t.useState(!1);return t.useEffect((()=>{let t=()=>{ge(e)&&o(!0)},n=new MutationObserver(t);return n.observe(document,{childList:!0,subtree:!0}),t(),()=>{n.disconnect()}}),[e]),n}(A),R=(null==o?void 0:o.onLoadCallbackName)||ye,$=a.appearance||"always",P=t.useMemo((()=>({sitekey:l,action:a.action,cData:a.cData,callback:e=>{S.current=!0,null==s||s(e)},"error-callback":c,"expired-callback":r,"before-interactive-callback":d,"after-interactive-callback":u,"unsupported-callback":m,theme:a.theme||"auto",language:a.language||"auto",tabindex:a.tabIndex,"response-field":a.responseField,"response-field-name":a.responseFieldName,size:he(x),retry:a.retry||"auto","retry-interval":a.retryInterval||8e3,"refresh-expired":a.refreshExpired||"auto","refresh-timeout":a.refreshTimeout||"auto",execution:a.execution||"render",appearance:a.appearance||"always","feedback-enabled":a.feedbackEnabled||!0,"timeout-callback":p})),[a.action,a.appearance,a.cData,a.execution,a.language,a.refreshExpired,a.responseField,a.responseFieldName,a.retry,a.retryInterval,a.tabIndex,a.theme,a.feedbackEnabled,a.refreshTimeout,l,x]),M=t.useCallback((()=>typeof window<"u"&&!!window.turnstile),[]);return t.useEffect((function(){b&&!j&&(({render:e="explicit",onLoadCallbackName:t=ye,scriptOptions:{nonce:n="",defer:o=!0,async:a=!0,id:l="",appendTo:i,onError:s,crossOrigin:r=""}={}})=>{let c=l||_e;if(ge(c))return;let d=document.createElement("script");d.id=c,d.src=`https://challenges.cloudflare.com/turnstile/v0/api.js?onload=${t}&render=${e}`,document.querySelector(`script[src="${d.src}"]`)||(d.defer=!!o,d.async=!!a,n&&(d.nonce=n),r&&(d.crossOrigin=r),s&&(d.onerror=s,delete window[t]),("body"===i?document.body:document.getElementsByTagName("head")[0]).appendChild(d))})({onLoadCallbackName:R,scriptOptions:{...o,id:A}})}),[b,j,o,A]),t.useEffect((function(){"ready"!==we&&((e=ye)=>("unloaded"===we&&(we="loading",window[e]=()=>{xe.resolve(),we="ready",delete window[e]}),ke))(R).then((()=>N(!0))).catch(console.error)}),[]),t.useEffect((function(){if(!E.current||!j)return;let e=!1;return(async()=>{if(e||!E.current)return;let t=window.turnstile.render(E.current,P);T.current=t,T.current&&(null==i||i(T.current))})(),()=>{e=!0,T.current&&(window.turnstile.remove(T.current),S.current=!1)}}),[O,j,P]),t.useImperativeHandle(n,(()=>{let{turnstile:e}=window;return{getResponse(){if((null==e?void 0:e.getResponse)&&T.current&&M())return e.getResponse(T.current);console.warn("Turnstile has not been loaded")},getResponsePromise:async(e=3e4,t=100)=>new Promise(((n,o)=>{let a,l=async()=>{if(S.current&&window.turnstile&&T.current)try{let e=window.turnstile.getResponse(T.current);return a&&clearTimeout(a),e?n(e):o(new Error("No response received"))}catch(i){return a&&clearTimeout(a),console.warn("Failed to get response",i),o(new Error("Failed to get response"))}a||(a=setTimeout((()=>{a&&clearTimeout(a),o(new Error("Timeout"))}),e)),await new Promise((e=>setTimeout(e,t))),await l()};l()})),reset(){if((null==e?void 0:e.reset)&&T.current&&M()){"execute"===a.execution&&C(be.invisible);try{S.current=!1,e.reset(T.current)}catch(t){console.warn(`Failed to reset Turnstile widget ${T}`,t)}}else console.warn("Turnstile has not been loaded")},remove(){(null==e?void 0:e.remove)&&T.current&&M()?(C(be.invisible),S.current=!1,e.remove(T.current),T.current=null):console.warn("Turnstile has not been loaded")},render(){if(!(null==e?void 0:e.render)||!E.current||!M()||T.current)return void console.warn("Turnstile has not been loaded or container not found");let t=e.render(E.current,P);return T.current=t,T.current&&(null==i||i(T.current)),"execute"!==a.execution&&C(x?be[x]:{}),t},execute(){"execute"===a.execution?(null==e?void 0:e.execute)&&E.current&&T.current&&M()?(e.execute(E.current,P),C(x?be[x]:{})):console.warn("Turnstile has not been loaded or container not found"):console.warn('Execution mode is not set to "execute"')},isExpired:()=>(null==e?void 0:e.isExpired)&&T.current&&M()?e.isExpired(T.current):(console.warn("Turnstile has not been loaded"),!1)}}),[T,a.execution,x,P,E,M,j,i]),t.useEffect((()=>{I&&!j&&window.turnstile&&N(!0)}),[j,I]),t.useEffect((()=>{C(w())}),[a.execution,x,$]),t.useEffect((()=>{!I||"function"!=typeof v||v()}),[I]),g.jsx(fe,{ref:E,as:y,id:O,style:{...k,..._},...h})}));Ce.displayName="Turnstile";const{VITE_APP_ENV:Ee}={BASE_URL:"/",DEV:!1,MODE:"prod",PROD:!0,SSR:!1,VITE_APP_ENV:"prod",VITE_BASE_URL:"https://api.tongifter.xyz"},{getGiftInfo:je,getTaskProgress:Ne,updateTask:Te,openGift:Se}=T("common"),Oe=b((e=>e.common))((n=>{var o,a,l,i,s;const{tgUserInfoRaw:r,tgUserInfo:c}=n,{location:d,pathname:u,search:m,hash:p}=h(),{t:v,i18n:f}=x(),[_]=w(),y=_.get("id"),b=_.get("inviterId"),[T,O]=t.useState("0x4AAAAAAA0Gfu6U8AVORjc0"),[A,I]=t.useState(!1),$=e.useRef(),[P,M]=t.useState({}),[L,U]=t.useState({}),[V,G]=t.useState(0),[q,H]=t.useState(!1),[K,W]=t.useState(!1),[J,Q]=t.useState(!1),X=async()=>{const[e]=await Ne(r,{id:y});200===(null==e?void 0:e.code)&&U(null==e?void 0:e.data)},Y=e=>{L.task.map((t=>t.taskId===e.taskId?{...t,...e}:t));let t={...L};U(t)},Z=e=>{if(e)return e.completed?void 0:1===e.status?g.jsx(R,{className:ne,src:z,width:32,height:32,placeholder:g.jsx(B.Paragraph,{style:{width:"100%"}}),onClick:t=>{t.stopPropagation(),fe(e)},style:{borderRadius:10}}):2===e.status?g.jsx(E,{style:{"--size":"24px","--color":"red"}}):g.jsx("div",{className:re,children:v("receive_btn_do")})},fe=async e=>{e.status=2,Y(e);const[t]=await Te(r,{giftId:y,taskId:e.taskId});200===(null==t?void 0:t.code)&&X()},_e=async()=>{H(!1),Q(!0),W(!0)},ye=async()=>{var e;await X(),L.completed?(null==(e=$.current)||e.render(),I(!0)):N(v("receive_tips_tips_1"),3)},ge=()=>{"prod"!=Ee&&O("1x00000000000000000000AA"),(async()=>{const[e]=await je(r,{id:y});200===(null==e?void 0:e.code)?M(null==e?void 0:e.data):S.show({content:v(null==e?void 0:e.message),position:"top"})})(),X()};return k.useActivate((()=>{ge()})),t.useEffect((()=>{ge()}),[d]),t.useEffect((()=>{var e;null!=L.completed&&null!=P.gift&&(99==P.gift.status||P.gift.userId==c.id?G(2):(L.completed||(G(1),K||(H(!0),W(!1))),L.completed&&(null==(e=P.myAward)?void 0:e.surplusTimes)<=0&&G(2),L.completed&&(null==P.myAward||P.myAward.surplusTimes>0)&&(G(1),H(!1),W(!0))))}),[L,P]),g.jsxs("div",{className:"warp",children:[0==V?g.jsx("div",{className:"content1",style:{padding:"16px"},children:g.jsx(B,{className:ve,animated:!0})}):null,1==V?g.jsxs("div",{className:"content1",style:{padding:"16px"},children:[J?null:g.jsx("div",{className:ve,style:{backgroundImage:`url(${null==(o=P.gift)?void 0:o.coverImg})`}}),J?g.jsx("div",{className:ve,style:{backgroundImage:`url(${null==(a=P.gift)?void 0:a.coverImg})`},children:null==(l=L.task)?void 0:l.map(((e,t)=>g.jsxs("div",{className:oe,onClick:()=>{(async e=>{e.status=1,Y(e),1==e.type&&C("web_app_open_tg_link",{path_full:e.value.replace("@","")}),2==e.type&&C("web_app_open_link",{url:e.value,try_instant_view:!1})})(e)},children:[g.jsxs("div",{className:ae,children:[e.completed?g.jsx(R,{className:te,src:D,width:30,height:30,fit:"cover",style:{borderRadius:14}}):g.jsx(R,{className:te,src:"/img/icon_lock.Bp71GFIS.jpg",width:30,height:30,fit:"cover",style:{borderRadius:14}}),g.jsxs("div",{className:le,children:[g.jsx("span",{className:ie,children:e.title}),g.jsx("span",{className:se,children:e.desc})]})]}),Z(e)]},t)))}):null,g.jsxs("div",{className:ce,children:[K?g.jsx("div",{onClick:async()=>{var e,t,n;if(L.completed)if((null==(e=P.myAward)?void 0:e.surplusTimes)>0)if("prod"!=Ee)ee.confirm({content:v("add_recive_more_confirm_content",{v1:null==(t=P.myAward)?void 0:t.surplusTimes}),cancelText:v("add_recive_more_confirm_cancel_text"),confirmText:v("add_recive_more_confirm_confirm_text"),onConfirm:()=>{alert(1)}});else{C("web_app_open_popup",{title:v("add_recive_more_confirm_tips"),message:v("add_recive_more_confirm_content",{v1:null==(n=P.myAward)?void 0:n.surplusTimes}),buttons:[{id:"0x0ok",type:"default",text:v("add_recive_more_confirm_confirm_text")},{id:"0x0close",type:"default",text:v("add_recive_more_confirm_cancel_text")}]});const e=j("popup_closed",(t=>{e(),"0x0ok"===t.button_id&&ye()}))}else ye()},className:ue,children:g.jsx("div",{className:de,children:v("receive_btn_receive")})}):null,q?g.jsx("div",{onClick:_e,className:ue,children:g.jsx("div",{onClick:_e,className:de,children:v("receive_btn_open")})}):null]}),(null==(i=P.myAward)?void 0:i.surplusTimes)>0?g.jsx("div",{className:me,children:g.jsx("div",{className:pe,children:v("add_recive_more_open_tips",{v1:null==(s=P.myAward)?void 0:s.surplusTimes})})}):null]}):null,2==V?g.jsx("div",{className:"content1",style:{color:"#ffffff"},children:g.jsx(F,{giftId:y})}):null,A?g.jsx("div",{className:"cf_turnstile_pop",onClick:e=>{I(!1)},children:g.jsx("div",{className:"item",children:g.jsx(Ce,{ref:$,siteKey:T,options:{language:f.language},onSuccess:e=>{(async e=>{var t;if(L.completed){I(!1);const[n]=await Se(r,{id:y,inviterId:b,cfvt:e});200===(null==n?void 0:n.code)?(N(v("receive_tips_tips_2",{v1:null==n?void 0:n.data,v2:null==(t=P.gift)?void 0:t.tokenSymbol}),1),G(2)):N(null==n?void 0:n.message,3)}else N(v("receive_tips_tips_1"),3)})(e)},onClick:e=>{e.stopPropagation()}})})}):null]})}));export{Oe as default};
