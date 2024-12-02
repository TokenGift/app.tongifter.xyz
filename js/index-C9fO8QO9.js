import{r as e,R as t,j as s,c as n,i,u as r,l as o,a,M as c,d as u,$ as l}from"./index-DTG9YMIi.js";import{I as p}from"./image-CM4b01W6.js";import{S as d}from"./index-ByaqqEJM.js";import{i as h}from"./icon_complete-BbzkC_ol.js";import f from"./index-BCKFO74f.js";import{$ as m}from"./useCustomNavigate-DAuOxLCD.js";import"./index-C-57Hrwd.js";import"./attach-properties-to-component-CClyKAqJ.js";import"./empty-tcH6w6f2.js";import"./popup-DjxYbCix.js";import"./icon_tgt-CrhvpaUb.js";import"./icon_token_ton-CiNinKlB.js";import"./icon_token_not-NeONbRwt.js";import"./index-BZbEJgEA.js";import"./SendOutline-CTcXorwx.js";const y="_avatar_1c1a8_20",g="_list_item_1c1a8_43",v="_task_row_1c1a8_66",b="_task_column_1c1a8_81",w="_item_title_1c1a8_87",_="_item_content_1c1a8_96",k="_do_1c1a8_104",x="_center_row_1c1a8_116",C="_open_btn_1c1a8_127",E="_open_btn_border_1c1a8_140",T="_bottom_banner_widget_1c1a8_152",S="_bottom_banner_1c1a8_152",j="_bottom_content_1c1a8_176";function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},N.apply(this,arguments)}var P={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(e){},onComplete:function(e){},preStringTyped:function(e,t){},onStringTyped:function(e,t){},onLastStringBackspaced:function(e){},onTypingPaused:function(e,t){},onTypingResumed:function(e,t){},onReset:function(e){},onStop:function(e,t){},onStart:function(e,t){},onDestroy:function(e){}},I=new(function(){function e(){}var t=e.prototype;return t.load=function(e,t,s){if(e.el="string"==typeof s?document.querySelector(s):s,e.options=N({},P,t),e.isInput="input"===e.el.tagName.toLowerCase(),e.attr=e.options.attr,e.bindInputFocusEvents=e.options.bindInputFocusEvents,e.showCursor=!e.isInput&&e.options.showCursor,e.cursorChar=e.options.cursorChar,e.cursorBlinking=!0,e.elContent=e.attr?e.el.getAttribute(e.attr):e.el.textContent,e.contentType=e.options.contentType,e.typeSpeed=e.options.typeSpeed,e.startDelay=e.options.startDelay,e.backSpeed=e.options.backSpeed,e.smartBackspace=e.options.smartBackspace,e.backDelay=e.options.backDelay,e.fadeOut=e.options.fadeOut,e.fadeOutClass=e.options.fadeOutClass,e.fadeOutDelay=e.options.fadeOutDelay,e.isPaused=!1,e.strings=e.options.strings.map((function(e){return e.trim()})),e.stringsElement="string"==typeof e.options.stringsElement?document.querySelector(e.options.stringsElement):e.options.stringsElement,e.stringsElement){e.strings=[],e.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var n=Array.prototype.slice.apply(e.stringsElement.children),i=n.length;if(i)for(var r=0;r<i;r+=1)e.strings.push(n[r].innerHTML.trim())}for(var o in e.strPos=0,e.currentElContent=this.getCurrentElContent(e),e.currentElContent&&e.currentElContent.length>0&&(e.strPos=e.currentElContent.length-1,e.strings.unshift(e.currentElContent)),e.sequence=[],e.strings)e.sequence[o]=o;e.arrayPos=0,e.stopNum=0,e.loop=e.options.loop,e.loopCount=e.options.loopCount,e.curLoop=0,e.shuffle=e.options.shuffle,e.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},e.typingComplete=!1,e.autoInsertCss=e.options.autoInsertCss,e.autoInsertCss&&(this.appendCursorAnimationCss(e),this.appendFadeOutAnimationCss(e))},t.getCurrentElContent=function(e){return e.attr?e.el.getAttribute(e.attr):e.isInput?e.el.value:"html"===e.contentType?e.el.innerHTML:e.el.textContent},t.appendCursorAnimationCss=function(e){var t="data-typed-js-cursor-css";if(e.showCursor&&!document.querySelector("["+t+"]")){var s=document.createElement("style");s.setAttribute(t,"true"),s.innerHTML="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ",document.body.appendChild(s)}},t.appendFadeOutAnimationCss=function(e){var t="data-typed-fadeout-js-css";if(e.fadeOut&&!document.querySelector("["+t+"]")){var s=document.createElement("style");s.setAttribute(t,"true"),s.innerHTML="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ",document.body.appendChild(s)}},e}()),O=new(function(){function e(){}var t=e.prototype;return t.typeHtmlChars=function(e,t,s){if("html"!==s.contentType)return t;var n=e.substring(t).charAt(0);if("<"===n||"&"===n){var i;for(i="<"===n?">":";";e.substring(t+1).charAt(0)!==i&&!(1+ ++t>e.length););t++}return t},t.backSpaceHtmlChars=function(e,t,s){if("html"!==s.contentType)return t;var n=e.substring(t).charAt(0);if(">"===n||";"===n){var i;for(i=">"===n?"<":"&";e.substring(t-1).charAt(0)!==i&&!(--t<0););t--}return t},e}()),A=function(){function e(e,t){I.load(this,t,e),this.begin()}var t=e.prototype;return t.toggle=function(){this.pause.status?this.start():this.stop()},t.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},t.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},t.destroy=function(){this.reset(!1),this.options.onDestroy(this)},t.reset=function(e){void 0===e&&(e=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,e&&(this.insertCursor(),this.options.onReset(this),this.begin())},t.begin=function(){var e=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){0===e.strPos?e.typewrite(e.strings[e.sequence[e.arrayPos]],e.strPos):e.backspace(e.strings[e.sequence[e.arrayPos]],e.strPos)}),this.startDelay)},t.typewrite=function(e,t){var s=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var n=this.humanizer(this.typeSpeed),i=1;!0!==this.pause.status?this.timeout=setTimeout((function(){t=O.typeHtmlChars(e,t,s);var n=0,r=e.substring(t);if("^"===r.charAt(0)&&/^\^\d+/.test(r)){var o=1;o+=(r=/\d+/.exec(r)[0]).length,n=parseInt(r),s.temporaryPause=!0,s.options.onTypingPaused(s.arrayPos,s),e=e.substring(0,t)+e.substring(t+o),s.toggleBlinking(!0)}if("`"===r.charAt(0)){for(;"`"!==e.substring(t+i).charAt(0)&&(i++,!(t+i>e.length)););var a=e.substring(0,t),c=e.substring(a.length+1,t+i),u=e.substring(t+i+1);e=a+c+u,i--}s.timeout=setTimeout((function(){s.toggleBlinking(!1),t>=e.length?s.doneTyping(e,t):s.keepTyping(e,t,i),s.temporaryPause&&(s.temporaryPause=!1,s.options.onTypingResumed(s.arrayPos,s))}),n)}),n):this.setPauseStatus(e,t,!0)},t.keepTyping=function(e,t,s){0===t&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var n=e.substring(0,t+=s);this.replaceText(n),this.typewrite(e,t)},t.doneTyping=function(e,t){var s=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){s.backspace(e,t)}),this.backDelay))},t.backspace=function(e,t){var s=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var n=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){t=O.backSpaceHtmlChars(e,t,s);var n=e.substring(0,t);if(s.replaceText(n),s.smartBackspace){var i=s.strings[s.arrayPos+1];s.stopNum=i&&n===i.substring(0,t)?t:0}t>s.stopNum?(t--,s.backspace(e,t)):t<=s.stopNum&&(s.arrayPos++,s.arrayPos===s.strings.length?(s.arrayPos=0,s.options.onLastStringBackspaced(),s.shuffleStringsIfNeeded(),s.begin()):s.typewrite(s.strings[s.sequence[s.arrayPos]],t))}),n)}else this.setPauseStatus(e,t,!1)},t.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},t.setPauseStatus=function(e,t,s){this.pause.typewrite=s,this.pause.curString=e,this.pause.curStrPos=t},t.toggleBlinking=function(e){this.cursor&&(this.pause.status||this.cursorBlinking!==e&&(this.cursorBlinking=e,e?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},t.humanizer=function(e){return Math.round(Math.random()*e/2)+e},t.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))},t.initFadeOut=function(){var e=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){e.arrayPos++,e.replaceText(""),e.strings.length>e.arrayPos?e.typewrite(e.strings[e.sequence[e.arrayPos]],0):(e.typewrite(e.strings[0],0),e.arrayPos=0)}),this.fadeOutDelay)},t.replaceText=function(e){this.attr?this.el.setAttribute(this.attr,e):this.isInput?this.el.value=e:"html"===this.contentType?this.el.innerHTML=e:this.el.textContent=e},t.bindFocusEvents=function(){var e=this;this.isInput&&(this.el.addEventListener("focus",(function(t){e.stop()})),this.el.addEventListener("blur",(function(t){e.el.value&&0!==e.el.value.length||e.start()})))},t.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},e}();e.memo((({style:s,className:n,typedRef:i,parseRef:r,stopped:o,children:a,startWhenVisible:c,...u})=>{const l=e.useRef(null),p=e.useMemo((()=>{var e;return[...Object.values(u).filter((e=>"boolean"==typeof e||"number"==typeof e||"string"==typeof e)),null==(e=u.strings)?void 0:e.join(",")]}),[u]);e.useEffect((()=>{const e=r&&r(l)||l.current,t=new A(e,{...u});if((o||c)&&(null==t||t.stop()),c){const s=new IntersectionObserver((([e])=>{e.isIntersecting&&(null==t||t.start(),s.disconnect())}));s.observe(e)}return i&&t&&i(t),()=>{t.destroy()}}),p);const d=a?t.cloneElement(a,{ref:l}):t.createElement("span",{style:s,ref:l});return t.createElement("span",{style:s,className:n,"data-testid":"react-typed"},d)}));var B=e.forwardRef((({as:e="div",...t},n)=>s.jsx(e,{...t,ref:n}))),L="cf-turnstile-script",R="onloadTurnstileCallback",D=e=>!!document.getElementById(e),F={normal:{width:300,height:65},compact:{width:150,height:140},invisible:{width:0,height:0,overflow:"hidden"},flexible:{minWidth:300,width:"100%",height:65},interactionOnly:{width:"fit-content",height:"auto",display:"flex"}};function M(e){if("invisible"!==e&&"interactionOnly"!==e)return e}var q,H="unloaded",V=new Promise(((e,t)=>{q={resolve:e,reject:t},"ready"===H&&e(void 0)})),$=e.forwardRef(((t,n)=>{let{scriptOptions:i,options:r={},siteKey:o,onWidgetLoad:a,onSuccess:c,onExpire:u,onError:l,onBeforeInteractive:p,onAfterInteractive:d,onUnsupported:h,onTimeout:f,onLoadScript:m,id:y,style:g,as:v="div",injectScript:b=!0,...w}=t,_=r.size,k=e.useCallback((()=>typeof _>"u"?{}:"execute"===r.execution?F.invisible:"interaction-only"===r.appearance?F.interactionOnly:F[_]),[r.execution,_,r.appearance]),[x,C]=e.useState(k()),E=e.useRef(null),[T,S]=e.useState(!1),j=e.useRef(),N=e.useRef(!1),P=y||"cf-turnstile",I=(null==i?void 0:i.id)||L,O=function(t=L){let[s,n]=e.useState(!1);return e.useEffect((()=>{let e=()=>{D(t)&&n(!0)},s=new MutationObserver(e);return s.observe(document,{childList:!0,subtree:!0}),e(),()=>{s.disconnect()}}),[t]),s}(I),A=(null==i?void 0:i.onLoadCallbackName)||R,$=r.appearance||"always",U=e.useMemo((()=>({sitekey:o,action:r.action,cData:r.cData,callback:e=>{N.current=!0,null==c||c(e)},"error-callback":l,"expired-callback":u,"before-interactive-callback":p,"after-interactive-callback":d,"unsupported-callback":h,theme:r.theme||"auto",language:r.language||"auto",tabindex:r.tabIndex,"response-field":r.responseField,"response-field-name":r.responseFieldName,size:M(_),retry:r.retry||"auto","retry-interval":r.retryInterval||8e3,"refresh-expired":r.refreshExpired||"auto","refresh-timeout":r.refreshTimeout||"auto",execution:r.execution||"render",appearance:r.appearance||"always","feedback-enabled":r.feedbackEnabled||!0,"timeout-callback":f})),[r.action,r.appearance,r.cData,r.execution,r.language,r.refreshExpired,r.responseField,r.responseFieldName,r.retry,r.retryInterval,r.tabIndex,r.theme,r.feedbackEnabled,r.refreshTimeout,o,_]),z=e.useCallback((()=>typeof window<"u"&&!!window.turnstile),[]);return e.useEffect((function(){b&&!T&&(({render:e="explicit",onLoadCallbackName:t=R,scriptOptions:{nonce:s="",defer:n=!0,async:i=!0,id:r="",appendTo:o,onError:a,crossOrigin:c=""}={}})=>{let u=r||L;if(D(u))return;let l=document.createElement("script");l.id=u,l.src=`https://challenges.cloudflare.com/turnstile/v0/api.js?onload=${t}&render=${e}`,document.querySelector(`script[src="${l.src}"]`)||(l.defer=!!n,l.async=!!i,s&&(l.nonce=s),c&&(l.crossOrigin=c),a&&(l.onerror=a,delete window[t]),("body"===o?document.body:document.getElementsByTagName("head")[0]).appendChild(l))})({onLoadCallbackName:A,scriptOptions:{...i,id:I}})}),[b,T,i,I]),e.useEffect((function(){"ready"!==H&&((e=R)=>("unloaded"===H&&(H="loading",window[e]=()=>{q.resolve(),H="ready",delete window[e]}),V))(A).then((()=>S(!0))).catch(console.error)}),[]),e.useEffect((function(){if(!E.current||!T)return;let e=!1;return(async()=>{if(e||!E.current)return;let t=window.turnstile.render(E.current,U);j.current=t,j.current&&(null==a||a(j.current))})(),()=>{e=!0,j.current&&(window.turnstile.remove(j.current),N.current=!1)}}),[P,T,U]),e.useImperativeHandle(n,(()=>{let{turnstile:e}=window;return{getResponse(){if((null==e?void 0:e.getResponse)&&j.current&&z())return e.getResponse(j.current);console.warn("Turnstile has not been loaded")},getResponsePromise:async(e=3e4,t=100)=>new Promise(((s,n)=>{let i,r=async()=>{if(N.current&&window.turnstile&&j.current)try{let e=window.turnstile.getResponse(j.current);return i&&clearTimeout(i),e?s(e):n(new Error("No response received"))}catch(o){return i&&clearTimeout(i),console.warn("Failed to get response",o),n(new Error("Failed to get response"))}i||(i=setTimeout((()=>{i&&clearTimeout(i),n(new Error("Timeout"))}),e)),await new Promise((e=>setTimeout(e,t))),await r()};r()})),reset(){if((null==e?void 0:e.reset)&&j.current&&z()){"execute"===r.execution&&C(F.invisible);try{N.current=!1,e.reset(j.current)}catch(t){console.warn(`Failed to reset Turnstile widget ${j}`,t)}}else console.warn("Turnstile has not been loaded")},remove(){(null==e?void 0:e.remove)&&j.current&&z()?(C(F.invisible),N.current=!1,e.remove(j.current),j.current=null):console.warn("Turnstile has not been loaded")},render(){if(!(null==e?void 0:e.render)||!E.current||!z()||j.current)return void console.warn("Turnstile has not been loaded or container not found");let t=e.render(E.current,U);return j.current=t,j.current&&(null==a||a(j.current)),"execute"!==r.execution&&C(_?F[_]:{}),t},execute(){"execute"===r.execution?(null==e?void 0:e.execute)&&E.current&&j.current&&z()?(e.execute(E.current,U),C(_?F[_]:{})):console.warn("Turnstile has not been loaded or container not found"):console.warn('Execution mode is not set to "execute"')},isExpired:()=>(null==e?void 0:e.isExpired)&&j.current&&z()?e.isExpired(j.current):(console.warn("Turnstile has not been loaded"),!1)}}),[j,r.execution,_,U,E,z,T,a]),e.useEffect((()=>{O&&!T&&window.turnstile&&S(!0)}),[T,O]),e.useEffect((()=>{C(k())}),[r.execution,_,$]),e.useEffect((()=>{!O||"function"!=typeof m||m()}),[O]),s.jsx(B,{ref:E,as:v,id:P,style:{...x,...g},...w})}));$.displayName="Turnstile";const{VITE_APP_ENV:U}={BASE_URL:"/",DEV:!1,MODE:"prod",PROD:!0,SSR:!1,VITE_APP_ENV:"prod",VITE_BASE_URL:"https://api.tongifter.xyz"},{getGiftInfo:z,getTaskProgress:G,updateTask:W,openGift:K}=l("common"),Y=n((e=>e.common))((n=>{var l,N,P;const{tgUserInfoRaw:I,tgUserInfo:O}=n,A=i(),{t:B,i18n:L}=r(),[R]=o(),D=R.get("id"),F=R.get("inviterId"),[M,q]=e.useState("0x4AAAAAAA0Gfu6U8AVORjc0"),[H,V]=e.useState(!1),Y=t.useRef();m();const[J,Q]=e.useState({}),[X,Z]=e.useState({}),[ee,te]=e.useState(0),[se,ne]=e.useState(!1),[ie,re]=e.useState(!1),[oe,ae]=e.useState(!1),[ce,ue]=e.useState(!1),le=async()=>{const[e]=await z(I,{id:D});200===(null==e?void 0:e.code)?Q(null==e?void 0:e.data):u.show({content:B(null==e?void 0:e.message),position:"top"})},pe=async()=>{ue(!0);const[e]=await G(I,{id:D});200===(null==e?void 0:e.code)&&Z(null==e?void 0:e.data),ue(!1)},de=async()=>{ne(!1),ae(!0),re(!0)},he=async()=>{var e;await pe(),X.completed?(null==(e=Y.current)||e.render(),V(!0)):u.show({content:B("receive_tips_tips_1"),position:"top"})},fe=()=>{"prod"!=U&&q("1x00000000000000000000AA"),le(),pe()};return a.useActivate((()=>{fe()})),e.useEffect((()=>{fe()}),[A]),e.useEffect((()=>{var e;null!=X.completed&&null!=J.gift&&(99==J.gift.status||J.gift.userId==O.id?te(2):(X.completed||(te(1),ie||(ne(!0),re(!1))),X.completed&&(null==(e=J.myAward)?void 0:e.surplusTimes)<=0&&te(2),X.completed&&(null==J.myAward||J.myAward.surplusTimes>0)&&(te(1),ne(!1),re(!0))))}),[X,J]),s.jsxs("div",{className:"warp",children:[0==ee?s.jsx("div",{className:"content1",style:{padding:"16px"},children:s.jsx(d,{className:j,animated:!0})}):null,1==ee?s.jsxs("div",{className:"content1",style:{padding:"16px"},children:[oe?null:s.jsx("div",{className:j,style:{backgroundImage:`url(${null==(l=J.gift)?void 0:l.coverImg})`}}),oe?s.jsx("div",{className:j,style:{backgroundImage:`url(${null==(N=J.gift)?void 0:N.coverImg})`},children:null==(P=X.task)?void 0:P.map(((e,t)=>s.jsxs("div",{className:g,children:[s.jsxs("div",{className:v,children:[e.completed?s.jsx(p,{className:y,src:h,width:30,height:30,fit:"cover",style:{borderRadius:14}}):s.jsx(p,{className:y,src:"/img/icon_lock.Bp71GFIS.jpg",width:30,height:30,fit:"cover",style:{borderRadius:14}}),s.jsxs("div",{className:b,children:[s.jsx("span",{className:w,children:e.title}),s.jsx("span",{className:_,children:e.desc})]})]}),e.completed?s.jsx("div",{}):s.jsx("div",{className:k,onClick:()=>{(async e=>{1==e.type&&c("web_app_open_tg_link",{path_full:e.value.replace("@","")}),2==e.type&&c("web_app_open_link",{url:e.value,try_instant_view:!0}),await W(I,{giftId:D,taskId:e.taskId})})(e)},children:B("receive_btn_do")})]},t)))}):null,s.jsxs("div",{className:x,children:[ie?s.jsx("div",{onClick:he,className:E,children:s.jsx("div",{onClick:he,className:C,children:B("receive_btn_receive")})}):null,se?s.jsx("div",{onClick:de,className:E,children:s.jsx("div",{onClick:de,className:C,children:B("receive_btn_open")})}):null]}),s.jsx("div",{className:T,children:s.jsx("div",{className:S,children:B("receive_tips_max")})})]}):null,2==ee?s.jsx("div",{className:"content1",style:{color:"#ffffff"},children:s.jsx(f,{giftInfoPre:J})}):null,H?s.jsx("div",{className:"cf_turnstile_pop",onClick:e=>{V(!1)},children:s.jsx("div",{className:"item",children:s.jsx($,{ref:Y,siteKey:M,options:{language:L.language},onSuccess:e=>{(async e=>{var t;if(X.completed){V(!1);const[s]=await K(I,{id:D,inviterId:F,cfvt:e});200===(null==s?void 0:s.code)?(u.show({content:B("receive_tips_tips_2")+(null==s?void 0:s.data)+""+(null==(t=J.gift)?void 0:t.tokenSymbol),position:"top"}),confetti({particleCount:100,spread:70,origin:{y:.6}}),le(),te(2)):u.show({content:null==s?void 0:s.message,position:"top"})}else u.show({content:B("receive_tips_tips_1"),position:"top"})})(e)},onClick:e=>{e.stopPropagation()}})})}):null]})}));export{Y as default};
