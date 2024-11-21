import{s as e,A as t,r as n,m as r,f as i,R as o,h as a,_ as c,D as l,o as u}from"./index-D2zR-L_O.js";import{_ as s,a as f,b as d,c as v,u as m,d as h}from"./index-Bip4Ld7A.js";var p=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},y="object"==typeof e&&e&&e.Object===Object&&e,g="object"==typeof self&&self&&self.Object===Object&&self,b=y||g||Function("return this")(),E=b,w=function(){return E.Date.now()},j=/\s/;var x=function(e){for(var t=e.length;t--&&j.test(e.charAt(t)););return t},S=/^\s+/;var T=function(e){return e?e.slice(0,x(e)+1).replace(S,""):e},O=b.Symbol,M=O,N=Object.prototype,k=N.hasOwnProperty,R=N.toString,C=M?M.toStringTag:void 0;var I=function(e){var t=k.call(e,C),n=e[C];try{e[C]=void 0;var r=!0}catch(o){}var i=R.call(e);return r&&(t?e[C]=n:delete e[C]),i},W=Object.prototype.toString;var $=I,A=function(e){return W.call(e)},B=O?O.toStringTag:void 0;var D=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":B&&B in Object(e)?$(e):A(e)},L=function(e){return null!=e&&"object"==typeof e};var F=T,P=p,_=function(e){return"symbol"==typeof e||L(e)&&"[object Symbol]"==D(e)},H=/^[-+]0x[0-9a-f]+$/i,U=/^0b[01]+$/i,q=/^0o[0-7]+$/i,z=parseInt;var G=p,J=w,K=function(e){if("number"==typeof e)return e;if(_(e))return NaN;if(P(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=P(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=F(e);var n=U.test(e);return n||q.test(e)?z(e.slice(2),n?2:8):H.test(e)?NaN:+e},Q=Math.max,V=Math.min;var X=function(e,t,n){var r,i,o,a,c,l,u=0,s=!1,f=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=r,o=i;return r=i=void 0,u=t,a=e.apply(o,n)}function m(e){var n=e-l;return void 0===l||n>=t||n<0||f&&e-u>=o}function h(){var e=J();if(m(e))return p(e);c=setTimeout(h,function(e){var n=t-(e-l);return f?V(n,o-(e-u)):n}(e))}function p(e){return c=void 0,d&&r?v(e):(r=i=void 0,a)}function y(){var e=J(),n=m(e);if(r=arguments,i=this,l=e,n){if(void 0===c)return function(e){return u=e,c=setTimeout(h,t),s?v(e):a}(l);if(f)return clearTimeout(c),c=setTimeout(h,t),v(l)}return void 0===c&&(c=setTimeout(h,t)),a}return t=K(t)||0,G(n)&&(s=!!n.leading,o=(f="maxWait"in n)?Q(K(n.maxWait)||0,t):o,d="trailing"in n?!!n.trailing:d),y.cancel=function(){void 0!==c&&clearTimeout(c),u=0,r=l=i=c=void 0},y.flush=function(){return void 0===c?a:p(J())},y},Y=p;const Z=t((function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),X(e,t,{leading:r,maxWait:t,trailing:i})}));const ee={default:"var(--adm-color-weak)",primary:"var(--adm-color-primary)",white:"var(--adm-color-white)"},te={color:"default"},ne=n.memo((e=>{var t;const n=r(te,e);return i(n,o.createElement("div",{style:{color:null!==(t=ee[n.color])&&void 0!==t?t:n.color},className:a("adm-loading","adm-dot-loading")},o.createElement("svg",{height:"1em",viewBox:"0 0 100 40",style:{verticalAlign:"-0.125em"}},o.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},o.createElement("g",{transform:"translate(-100.000000, -71.000000)"},o.createElement("g",{transform:"translate(95.000000, 71.000000)"},o.createElement("g",{transform:"translate(5.000000, 0.000000)"},[0,1,2].map((e=>o.createElement("rect",{key:e,fill:"currentColor",x:20+26*e,y:"16",width:"8",height:"8",rx:"2"},o.createElement("animate",{attributeName:"y",from:"16",to:"16",dur:"2s",begin:.2*e+"s",repeatCount:"indefinite",values:"16; 6; 26; 16; 16",keyTimes:"0; 0.1; 0.3; 0.4; 1"})))))))))))}));const re="adm-infinite-scroll",ie={threshold:250,children:(e,t,n)=>o.createElement(ae,{hasMore:e,failed:t,retry:n})},oe=e=>{const t=r(ie,e),[a,u]=n.useState(!1),p=function(e){var t=this,r=n.useRef(!1);return n.useCallback((function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];return s(t,void 0,void 0,(function(){return f(this,(function(t){switch(t.label){case 0:if(r.current)return[2];r.current=!0,t.label=1;case 1:return t.trys.push([1,3,4,5]),[4,e.apply(void 0,d([],v(n),!1))];case 2:return[2,t.sent()];case 3:throw t.sent();case 4:return r.current=!1,[7];case 5:return[2]}}))}))}),[e])}((e=>c(void 0,void 0,void 0,(function*(){try{yield t.loadMore(e)}catch(n){throw u(!0),n}})))),y=n.useRef(null),[g,b]=n.useState({}),E=n.useRef(g),[w,j]=n.useState(),{run:x}=(S={wait:100,leading:!0,trailing:!0},O=m((()=>c(void 0,void 0,void 0,(function*(){if(E.current!==g)return;if(!t.hasMore)return;const e=y.current;if(!e)return;if(!e.offsetParent)return;const n=l(e);if(j(n),!n)return;const r=e.getBoundingClientRect().top,i=function(e){return e===window}(n)?window.innerHeight:n.getBoundingClientRect().bottom;if(i>=r-t.threshold){const e={};E.current=e;try{yield p(!1),b(e)}catch(o){}}})))),M=null!==(T=null==S?void 0:S.wait)&&void 0!==T?T:1e3,N=n.useMemo((function(){return Z((function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return O.current.apply(O,d([],v(e),!1))}),M,S)}),[]),h((function(){N.cancel()})),{run:N,cancel:N.cancel,flush:N.flush});var S,T,O,M,N;return n.useEffect((()=>{x()})),n.useEffect((()=>{if(y.current&&w)return w.addEventListener("scroll",e),()=>{w.removeEventListener("scroll",e)};function e(){x()}}),[w]),i(t,o.createElement("div",{className:re,ref:y},"function"==typeof t.children?t.children(t.hasMore,a,(function(){return c(this,void 0,void 0,(function*(){u(!1);try{yield p(!0),b(E.current)}catch(e){}}))})):t.children))},ae=e=>{const{locale:t}=u();return e.hasMore?e.failed?o.createElement("span",null,o.createElement("span",{className:`${re}-failed-text`},t.InfiniteScroll.failedToLoad),o.createElement("a",{onClick:()=>{e.retry()}},t.InfiniteScroll.retry)):o.createElement(o.Fragment,null,o.createElement("span",null,t.common.loading),o.createElement(ne,null)):o.createElement("span",null,t.InfiniteScroll.noMore)};export{ne as D,oe as I};
