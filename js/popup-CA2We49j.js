import{R as t,a0 as e,r as s,l as i,m as n,f as o,p as r,n as a,o as c,q as l,e as u,v as h,x as d,y as p,z as f}from"./index-CAWxz8tD.js";import{u as v}from"./image-QO9SbbK7.js";const m={closeOnMaskClick:!1,closeIcon:t.createElement(e,null),destroyOnClose:!1,disableBodyScroll:!0,forceRender:!1,getContainer:()=>document.body,mask:!0,showCloseButton:!1,stopPropagation:["click"],visible:!1};function g(t){const[e,i]=s.useState(t);return v((()=>{i(t)}),[t]),e}const b={toVector:(t,e)=>(void 0===t&&(t=e),Array.isArray(t)?t:[t,t]),add:(t,e)=>[t[0]+e[0],t[1]+e[1]],sub:(t,e)=>[t[0]-e[0],t[1]-e[1]],addTo(t,e){t[0]+=e[0],t[1]+=e[1]},subTo(t,e){t[0]-=e[0],t[1]-=e[1]}};function y(t,e,s){return 0===e||Math.abs(e)===1/0?Math.pow(t,5*s):t*e*s/(e+s*t)}function _(t,e,s,i=.15){return 0===i?function(t,e,s){return Math.max(e,Math.min(t,s))}(t,e,s):t<e?-y(e-t,s-e,i)+e:t>s?+y(t-s,s-e,i)+s:t}function w(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var s=t[Symbol.toPrimitive];if(void 0!==s){var i=s.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}function k(t,e,s){return(e=w(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function S(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function O(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?S(Object(s),!0).forEach((function(e){k(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):S(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}const T={pointer:{start:"down",change:"move",end:"up"},mouse:{start:"down",change:"move",end:"up"},touch:{start:"start",change:"move",end:"end"},gesture:{start:"start",change:"change",end:"end"}};function x(t){return t?t[0].toUpperCase()+t.slice(1):""}const C=["enter","leave"];function D(t,e="",s=!1){const i=T[t],n=i&&i[e]||e;return"on"+x(t)+x(n)+(function(t=!1,e){return t&&!C.includes(e)}(s,n)?"Capture":"")}const P=["gotpointercapture","lostpointercapture"];function E(t){let e=t.substring(2).toLowerCase();const s=!!~e.indexOf("passive");s&&(e=e.replace("passive",""));const i=P.includes(e)?"capturecapture":"capture",n=!!~e.indexOf(i);return n&&(e=e.replace("capture","")),{device:e,capture:n,passive:s}}function M(t){return"touches"in t}function A(t){return M(t)?"touch":"pointerType"in t?t.pointerType:"mouse"}function I(t){return M(t)?function(t){return"touchend"===t.type||"touchcancel"===t.type?t.changedTouches:t.targetTouches}(t)[0]:t}function j(t){return function(t){return Array.from(t.touches).filter((e=>{var s,i;return e.target===t.currentTarget||(null===(s=t.currentTarget)||void 0===s||null===(i=s.contains)||void 0===i?void 0:i.call(s,e.target))}))}(t).map((t=>t.identifier))}function K(t){const e=I(t);return M(t)?e.identifier:e.pointerId}function B(t){const e=I(t);return[e.clientX,e.clientY]}function L(t,...e){return"function"==typeof t?t(...e):t}function V(){}function R(...t){return 0===t.length?V:1===t.length?t[0]:function(){let e;for(const s of t)e=s.apply(this,arguments)||e;return e}}function U(t,e){return Object.assign({},e,t||{})}class H{constructor(t,e,s){this.ctrl=t,this.args=e,this.key=s,this.state||(this.state={},this.computeValues([0,0]),this.computeInitial(),this.init&&this.init(),this.reset())}get state(){return this.ctrl.state[this.key]}set state(t){this.ctrl.state[this.key]=t}get shared(){return this.ctrl.state.shared}get eventStore(){return this.ctrl.gestureEventStores[this.key]}get timeoutStore(){return this.ctrl.gestureTimeoutStores[this.key]}get config(){return this.ctrl.config[this.key]}get sharedConfig(){return this.ctrl.config.shared}get handler(){return this.ctrl.handlers[this.key]}reset(){const{state:t,shared:e,ingKey:s,args:i}=this;e[s]=t._active=t.active=t._blocked=t._force=!1,t._step=[!1,!1],t.intentional=!1,t._movement=[0,0],t._distance=[0,0],t._direction=[0,0],t._delta=[0,0],t._bounds=[[-1/0,1/0],[-1/0,1/0]],t.args=i,t.axis=void 0,t.memo=void 0,t.elapsedTime=t.timeDelta=0,t.direction=[0,0],t.distance=[0,0],t.overflow=[0,0],t._movementBound=[!1,!1],t.velocity=[0,0],t.movement=[0,0],t.delta=[0,0],t.timeStamp=0}start(t){const e=this.state,s=this.config;e._active||(this.reset(),this.computeInitial(),e._active=!0,e.target=t.target,e.currentTarget=t.currentTarget,e.lastOffset=s.from?L(s.from,e):e.offset,e.offset=e.lastOffset,e.startTime=e.timeStamp=t.timeStamp)}computeValues(t){const e=this.state;e._values=t,e.values=this.config.transform(t)}computeInitial(){const t=this.state;t._initial=t._values,t.initial=t.values}compute(t){const{state:e,config:s,shared:i}=this;e.args=this.args;let n=0;if(t&&(e.event=t,s.preventDefault&&t.cancelable&&e.event.preventDefault(),e.type=t.type,i.touches=this.ctrl.pointerIds.size||this.ctrl.touchIds.size,i.locked=!!document.pointerLockElement,Object.assign(i,function(t){const e={};if("buttons"in t&&(e.buttons=t.buttons),"shiftKey"in t){const{shiftKey:s,altKey:i,metaKey:n,ctrlKey:o}=t;Object.assign(e,{shiftKey:s,altKey:i,metaKey:n,ctrlKey:o})}return e}(t)),i.down=i.pressed=i.buttons%2==1||i.touches>0,n=t.timeStamp-e.timeStamp,e.timeStamp=t.timeStamp,e.elapsedTime=e.timeStamp-e.startTime),e._active){const t=e._delta.map(Math.abs);b.addTo(e._distance,t)}this.axisIntent&&this.axisIntent(t);const[o,r]=e._movement,[a,c]=s.threshold,{_step:l,values:u}=e;if(s.hasCustomTransform?(!1===l[0]&&(l[0]=Math.abs(o)>=a&&u[0]),!1===l[1]&&(l[1]=Math.abs(r)>=c&&u[1])):(!1===l[0]&&(l[0]=Math.abs(o)>=a&&Math.sign(o)*a),!1===l[1]&&(l[1]=Math.abs(r)>=c&&Math.sign(r)*c)),e.intentional=!1!==l[0]||!1!==l[1],!e.intentional)return;const h=[0,0];if(s.hasCustomTransform){const[t,e]=u;h[0]=!1!==l[0]?t-l[0]:0,h[1]=!1!==l[1]?e-l[1]:0}else h[0]=!1!==l[0]?o-l[0]:0,h[1]=!1!==l[1]?r-l[1]:0;this.restrictToAxis&&!e._blocked&&this.restrictToAxis(h);const d=e.offset,p=e._active&&!e._blocked||e.active;p&&(e.first=e._active&&!e.active,e.last=!e._active&&e.active,e.active=i[this.ingKey]=e._active,t&&(e.first&&("bounds"in s&&(e._bounds=L(s.bounds,e)),this.setup&&this.setup()),e.movement=h,this.computeOffset()));const[f,v]=e.offset,[[m,g],[y,w]]=e._bounds;e.overflow=[f<m?-1:f>g?1:0,v<y?-1:v>w?1:0],e._movementBound[0]=!!e.overflow[0]&&(!1===e._movementBound[0]?e._movement[0]:e._movementBound[0]),e._movementBound[1]=!!e.overflow[1]&&(!1===e._movementBound[1]?e._movement[1]:e._movementBound[1]);const k=e._active&&s.rubberband||[0,0];if(e.offset=function(t,[e,s],[i,n]){const[[o,r],[a,c]]=t;return[_(e,o,r,i),_(s,a,c,n)]}(e._bounds,e.offset,k),e.delta=b.sub(e.offset,d),this.computeMovement(),p&&(!e.last||n>32)){e.delta=b.sub(e.offset,d);const t=e.delta.map(Math.abs);b.addTo(e.distance,t),e.direction=e.delta.map(Math.sign),e._direction=e._delta.map(Math.sign),!e.first&&n>0&&(e.velocity=[t[0]/n,t[1]/n],e.timeDelta=n)}}emit(){const t=this.state,e=this.shared,s=this.config;if(t._active||this.clean(),(t._blocked||!t.intentional)&&!t._force&&!s.triggerAllEvents)return;const i=this.handler(O(O(O({},e),t),{},{[this.aliasKey]:t.values}));void 0!==i&&(t.memo=i)}clean(){this.eventStore.clean(),this.timeoutStore.clean()}}class $ extends H{constructor(...t){super(...t),k(this,"aliasKey","xy")}reset(){super.reset(),this.state.axis=void 0}init(){this.state.offset=[0,0],this.state.lastOffset=[0,0]}computeOffset(){this.state.offset=b.add(this.state.lastOffset,this.state.movement)}computeMovement(){this.state.movement=b.sub(this.state.offset,this.state.lastOffset)}axisIntent(t){const e=this.state,s=this.config;if(!e.axis&&t){const i="object"==typeof s.axisThreshold?s.axisThreshold[A(t)]:s.axisThreshold;e.axis=function([t,e],s){const i=Math.abs(t),n=Math.abs(e);return i>n&&i>s?"x":n>i&&n>s?"y":void 0}(e._movement,i)}e._blocked=(s.lockDirection||!!s.axis)&&!e.axis||!!s.axis&&s.axis!==e.axis}restrictToAxis(t){if(this.config.axis||this.config.lockDirection)switch(this.state.axis){case"x":t[1]=0;break;case"y":t[0]=0}}}const N=t=>t,z={enabled:(t=!0)=>t,eventOptions:(t,e,s)=>O(O({},s.shared.eventOptions),t),preventDefault:(t=!1)=>t,triggerAllEvents:(t=!1)=>t,rubberband(t=0){switch(t){case!0:return[.15,.15];case!1:return[0,0];default:return b.toVector(t)}},from:t=>"function"==typeof t?t:null!=t?b.toVector(t):void 0,transform(t,e,s){const i=t||s.shared.transform;return this.hasCustomTransform=!!i,i||N},threshold:t=>b.toVector(t,0)},q=O(O({},z),{},{axis(t,e,{axis:s}){if(this.lockDirection="lock"===s,!this.lockDirection)return s},axisThreshold:(t=0)=>t,bounds(t={}){if("function"==typeof t)return e=>q.bounds(t(e));if("current"in t)return()=>t.current;if("function"==typeof HTMLElement&&t instanceof HTMLElement)return t;const{left:e=-1/0,right:s=1/0,top:i=-1/0,bottom:n=1/0}=t;return[[e,s],[i,n]]}}),X={ArrowRight:(t,e=1)=>[t*e,0],ArrowLeft:(t,e=1)=>[-1*t*e,0],ArrowUp:(t,e=1)=>[0,-1*t*e],ArrowDown:(t,e=1)=>[0,t*e]};const Y="undefined"!=typeof window&&window.document&&window.document.createElement;function G(){return Y&&"ontouchstart"in window}const W={isBrowser:Y,gesture:function(){try{return"constructor"in GestureEvent}catch(t){return!1}}(),touch:G(),touchscreen:G()||Y&&window.navigator.maxTouchPoints>1,pointer:Y&&"onpointerdown"in window,pointerLock:Y&&"exitPointerLock"in window.document},F={mouse:0,touch:0,pen:8},J=O(O({},q),{},{device(t,e,{pointer:{touch:s=!1,lock:i=!1,mouse:n=!1}={}}){return this.pointerLock=i&&W.pointerLock,W.touch&&s?"touch":this.pointerLock?"mouse":W.pointer&&!n?"pointer":W.touch?"touch":"mouse"},preventScrollAxis(t,e,{preventScroll:s}){if(this.preventScrollDelay="number"==typeof s?s:s||void 0===s&&t?250:void 0,W.touchscreen&&!1!==s)return t||(void 0!==s?"y":void 0)},pointerCapture(t,e,{pointer:{capture:s=!0,buttons:i=1,keys:n=!0}={}}){return this.pointerButtons=i,this.keys=n,!this.pointerLock&&"pointer"===this.device&&s},threshold(t,e,{filterTaps:s=!1,tapsThreshold:i=3,axis:n}){const o=b.toVector(t,s?i:n?1:0);return this.filterTaps=s,this.tapsThreshold=i,o},swipe({velocity:t=.5,distance:e=50,duration:s=250}={}){return{velocity:this.transform(b.toVector(t)),distance:this.transform(b.toVector(e)),duration:s}},delay(t=0){switch(t){case!0:return 180;case!1:return 0;default:return t}},axisThreshold:t=>t?O(O({},F),t):F,keyboardDisplacement:(t=10)=>t});O(O({},z),{},{device(t,e,{shared:s,pointer:{touch:i=!1}={}}){if(s.target&&!W.touch&&W.gesture)return"gesture";if(W.touch&&i)return"touch";if(W.touchscreen){if(W.pointer)return"pointer";if(W.touch)return"touch"}},bounds(t,e,{scaleBounds:s={},angleBounds:i={}}){const n=t=>{const e=U(L(s,t),{min:-1/0,max:1/0});return[e.min,e.max]},o=t=>{const e=U(L(i,t),{min:-1/0,max:1/0});return[e.min,e.max]};return"function"!=typeof s&&"function"!=typeof i?[n(),o()]:t=>[n(t),o(t)]},threshold(t,e,s){this.lockDirection="lock"===s.axis;return b.toVector(t,this.lockDirection?[.1,3]:0)},modifierKey:t=>void 0===t?"ctrlKey":t,pinchOnWheel:(t=!0)=>t}),O(O({},q),{},{mouseOnly:(t=!0)=>t}),O(O({},q),{},{mouseOnly:(t=!0)=>t});const Q=new Map,Z=new Map;const tt={key:"drag",engine:class extends ${constructor(...t){super(...t),k(this,"ingKey","dragging")}reset(){super.reset();const t=this.state;t._pointerId=void 0,t._pointerActive=!1,t._keyboardActive=!1,t._preventScroll=!1,t._delayed=!1,t.swipe=[0,0],t.tap=!1,t.canceled=!1,t.cancel=this.cancel.bind(this)}setup(){const t=this.state;if(t._bounds instanceof HTMLElement){const e=t._bounds.getBoundingClientRect(),s=t.currentTarget.getBoundingClientRect(),i={left:e.left-s.left+t.offset[0],right:e.right-s.right+t.offset[0],top:e.top-s.top+t.offset[1],bottom:e.bottom-s.bottom+t.offset[1]};t._bounds=q.bounds(i)}}cancel(){const t=this.state;t.canceled||(t.canceled=!0,t._active=!1,setTimeout((()=>{this.compute(),this.emit()}),0))}setActive(){this.state._active=this.state._pointerActive||this.state._keyboardActive}clean(){this.pointerClean(),this.state._pointerActive=!1,this.state._keyboardActive=!1,super.clean()}pointerDown(t){const e=this.config,s=this.state;if(null!=t.buttons&&(Array.isArray(e.pointerButtons)?!e.pointerButtons.includes(t.buttons):-1!==e.pointerButtons&&e.pointerButtons!==t.buttons))return;const i=this.ctrl.setEventIds(t);e.pointerCapture&&t.target.setPointerCapture(t.pointerId),i&&i.size>1&&s._pointerActive||(this.start(t),this.setupPointer(t),s._pointerId=K(t),s._pointerActive=!0,this.computeValues(B(t)),this.computeInitial(),e.preventScrollAxis&&"mouse"!==A(t)?(s._active=!1,this.setupScrollPrevention(t)):e.delay>0?(this.setupDelayTrigger(t),e.triggerAllEvents&&(this.compute(t),this.emit())):this.startPointerDrag(t))}startPointerDrag(t){const e=this.state;e._active=!0,e._preventScroll=!0,e._delayed=!1,this.compute(t),this.emit()}pointerMove(t){const e=this.state,s=this.config;if(!e._pointerActive)return;const i=K(t);if(void 0!==e._pointerId&&i!==e._pointerId)return;const n=B(t);return document.pointerLockElement===t.target?e._delta=[t.movementX,t.movementY]:(e._delta=b.sub(n,e._values),this.computeValues(n)),b.addTo(e._movement,e._delta),this.compute(t),e._delayed&&e.intentional?(this.timeoutStore.remove("dragDelay"),e.active=!1,void this.startPointerDrag(t)):s.preventScrollAxis&&!e._preventScroll?e.axis?e.axis===s.preventScrollAxis||"xy"===s.preventScrollAxis?(e._active=!1,void this.clean()):(this.timeoutStore.remove("startPointerDrag"),void this.startPointerDrag(t)):void 0:void this.emit()}pointerUp(t){this.ctrl.setEventIds(t);try{this.config.pointerCapture&&t.target.hasPointerCapture(t.pointerId)&&t.target.releasePointerCapture(t.pointerId)}catch(r){}const e=this.state,s=this.config;if(!e._active||!e._pointerActive)return;const i=K(t);if(void 0!==e._pointerId&&i!==e._pointerId)return;this.state._pointerActive=!1,this.setActive(),this.compute(t);const[n,o]=e._distance;if(e.tap=n<=s.tapsThreshold&&o<=s.tapsThreshold,e.tap&&s.filterTaps)e._force=!0;else{const[t,i]=e._delta,[n,o]=e._movement,[r,a]=s.swipe.velocity,[c,l]=s.swipe.distance,u=s.swipe.duration;if(e.elapsedTime<u){const s=Math.abs(t/e.timeDelta),u=Math.abs(i/e.timeDelta);s>r&&Math.abs(n)>c&&(e.swipe[0]=Math.sign(t)),u>a&&Math.abs(o)>l&&(e.swipe[1]=Math.sign(i))}}this.emit()}pointerClick(t){!this.state.tap&&t.detail>0&&(t.preventDefault(),t.stopPropagation())}setupPointer(t){const e=this.config,s=e.device;e.pointerLock&&t.currentTarget.requestPointerLock(),e.pointerCapture||(this.eventStore.add(this.sharedConfig.window,s,"change",this.pointerMove.bind(this)),this.eventStore.add(this.sharedConfig.window,s,"end",this.pointerUp.bind(this)),this.eventStore.add(this.sharedConfig.window,s,"cancel",this.pointerUp.bind(this)))}pointerClean(){this.config.pointerLock&&document.pointerLockElement===this.state.currentTarget&&document.exitPointerLock()}preventScroll(t){this.state._preventScroll&&t.cancelable&&t.preventDefault()}setupScrollPrevention(t){this.state._preventScroll=!1,function(t){"persist"in t&&"function"==typeof t.persist&&t.persist()}(t);const e=this.eventStore.add(this.sharedConfig.window,"touch","change",this.preventScroll.bind(this),{passive:!1});this.eventStore.add(this.sharedConfig.window,"touch","end",e),this.eventStore.add(this.sharedConfig.window,"touch","cancel",e),this.timeoutStore.add("startPointerDrag",this.startPointerDrag.bind(this),this.config.preventScrollDelay,t)}setupDelayTrigger(t){this.state._delayed=!0,this.timeoutStore.add("dragDelay",(()=>{this.state._step=[0,0],this.startPointerDrag(t)}),this.config.delay)}keyDown(t){const e=X[t.key];if(e){const s=this.state,i=t.shiftKey?10:t.altKey?.1:1;this.start(t),s._delta=e(this.config.keyboardDisplacement,i),s._keyboardActive=!0,b.addTo(s._movement,s._delta),this.compute(t),this.emit()}}keyUp(t){t.key in X&&(this.state._keyboardActive=!1,this.setActive(),this.compute(t),this.emit())}bind(t){const e=this.config.device;t(e,"start",this.pointerDown.bind(this)),this.config.pointerCapture&&(t(e,"change",this.pointerMove.bind(this)),t(e,"end",this.pointerUp.bind(this)),t(e,"cancel",this.pointerUp.bind(this)),t("lostPointerCapture","",this.pointerUp.bind(this))),this.config.keys&&(t("key","down",this.keyDown.bind(this)),t("key","up",this.keyUp.bind(this))),this.config.filterTaps&&t("click","",this.pointerClick.bind(this),{capture:!0,passive:!1})}},resolver:J};function et(t,e){if(null==t)return{};var s,i,n=function(t,e){if(null==t)return{};var s,i,n={},o=Object.keys(t);for(i=0;i<o.length;i++)s=o[i],e.indexOf(s)>=0||(n[s]=t[s]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)s=o[i],e.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(t,s)&&(n[s]=t[s])}return n}const st={target(t){if(t)return()=>"current"in t?t.current:t},enabled:(t=!0)=>t,window:(t=(W.isBrowser?window:void 0))=>t,eventOptions:({passive:t=!0,capture:e=!1}={})=>({passive:t,capture:e}),transform:t=>t},it=["target","eventOptions","window","enabled","transform"];function nt(t={},e){const s={};for(const[i,n]of Object.entries(e))switch(typeof n){case"function":s[i]=n.call(s,t[i],i,t);break;case"object":s[i]=nt(t[i],n);break;case"boolean":n&&(s[i]=t[i])}return s}class ot{constructor(t,e){k(this,"_listeners",new Set),this._ctrl=t,this._gestureKey=e}add(t,e,s,i,n){const o=this._listeners,r=function(t,e=""){const s=T[t];return t+(s&&s[e]||e)}(e,s),a=O(O({},this._gestureKey?this._ctrl.config[this._gestureKey].eventOptions:{}),n);t.addEventListener(r,i,a);const c=()=>{t.removeEventListener(r,i,a),o.delete(c)};return o.add(c),c}clean(){this._listeners.forEach((t=>t())),this._listeners.clear()}}class rt{constructor(){k(this,"_timeouts",new Map)}add(t,e,s=140,...i){this.remove(t),this._timeouts.set(t,window.setTimeout(e,s,...i))}remove(t){const e=this._timeouts.get(t);e&&window.clearTimeout(e)}clean(){this._timeouts.forEach((t=>{window.clearTimeout(t)})),this._timeouts.clear()}}class at{constructor(t){k(this,"gestures",new Set),k(this,"_targetEventStore",new ot(this)),k(this,"gestureEventStores",{}),k(this,"gestureTimeoutStores",{}),k(this,"handlers",{}),k(this,"config",{}),k(this,"pointerIds",new Set),k(this,"touchIds",new Set),k(this,"state",{shared:{shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1}}),function(t,e){e.drag&&ct(t,"drag");e.wheel&&ct(t,"wheel");e.scroll&&ct(t,"scroll");e.move&&ct(t,"move");e.pinch&&ct(t,"pinch");e.hover&&ct(t,"hover")}(this,t)}setEventIds(t){return M(t)?(this.touchIds=new Set(j(t)),this.touchIds):"pointerId"in t?("pointerup"===t.type||"pointercancel"===t.type?this.pointerIds.delete(t.pointerId):"pointerdown"===t.type&&this.pointerIds.add(t.pointerId),this.pointerIds):void 0}applyHandlers(t,e){this.handlers=t,this.nativeHandlers=e}applyConfig(t,e){this.config=function(t,e,s={}){const i=t,{target:n,eventOptions:o,window:r,enabled:a,transform:c}=i,l=et(i,it);if(s.shared=nt({target:n,eventOptions:o,window:r,enabled:a,transform:c},st),e){const t=Z.get(e);s[e]=nt(O({shared:s.shared},l),t)}else for(const u in l){const t=Z.get(u);t&&(s[u]=nt(O({shared:s.shared},l[u]),t))}return s}(t,e,this.config)}clean(){this._targetEventStore.clean();for(const t of this.gestures)this.gestureEventStores[t].clean(),this.gestureTimeoutStores[t].clean()}effect(){return this.config.shared.target&&this.bind(),()=>this._targetEventStore.clean()}bind(...t){const e=this.config.shared,s={};let i;if(!e.target||(i=e.target(),i)){if(e.enabled){for(const e of this.gestures){const n=this.config[e],o=lt(s,n.eventOptions,!!i);if(n.enabled){new(Q.get(e))(this,t,e).bind(o)}}const n=lt(s,e.eventOptions,!!i);for(const e in this.nativeHandlers)n(e,"",(s=>this.nativeHandlers[e](O(O({},this.state.shared),{},{event:s,args:t}))),void 0,!0)}for(const t in s)s[t]=R(...s[t]);if(!i)return s;for(const t in s){const{device:e,capture:n,passive:o}=E(t);this._targetEventStore.add(i,e,"",s[t],{capture:n,passive:o})}}}}function ct(t,e){t.gestures.add(e),t.gestureEventStores[e]=new ot(t,e),t.gestureTimeoutStores[e]=new rt}const lt=(t,e,s)=>(i,n,o,r={},a=!1)=>{var c,l;const u=null!==(c=r.capture)&&void 0!==c?c:e.capture,h=null!==(l=r.passive)&&void 0!==l?l:e.passive;let d=a?i:D(i,n,u);s&&h&&(d+="Passive"),t[d]=t[d]||[],t[d].push(o)};function ut(e,s){var i;return i=tt,Q.set(i.key,i.engine),Z.set(i.key,i.resolver),function(e,s={},i,n){const o=t.useMemo((()=>new at(e)),[]);if(o.applyHandlers(e,n),o.applyConfig(s,i),t.useEffect(o.effect.bind(o)),t.useEffect((()=>o.clean.bind(o)),[]),void 0===s.target)return o.bind.bind(o)}({drag:e},s||{},"drag")}const ht="adm-popup",dt=Object.assign(Object.assign({},m),{closeOnSwipe:!1,position:"bottom"}),pt=e=>{const{locale:m,popup:b={}}=i(),y=n(dt,b,e),_=o(`${ht}-body`,y.bodyClassName,`${ht}-body-position-${y.position}`),[w,k]=s.useState(y.visible),S=s.useRef(null);r(S,!(!y.disableBodyScroll||!w)&&"strict"),v((()=>{y.visible&&k(!0)}),[y.visible]);const O=a(),{percent:T}=c({percent:y.visible?0:100,config:{precision:.1,mass:.4,tension:300,friction:30},onRest:()=>{var t,e;O.current||(k(y.visible),y.visible?null===(t=y.afterShow)||void 0===t||t.call(y):null===(e=y.afterClose)||void 0===e||e.call(y))}}),x=ut((({swipe:[,t]})=>{var e;y.closeOnSwipe&&(1===t&&"bottom"===y.position||-1===t&&"top"===y.position)&&(null===(e=y.onClose)||void 0===e||e.call(y))}),{axis:"y",enabled:["top","bottom"].includes(y.position)}),C=g(w&&y.visible),D=l(y.stopPropagation,u(y,t.createElement("div",Object.assign({className:ht,onClick:y.onClick,style:{display:w?void 0:"none",touchAction:["top","bottom"].includes(y.position)?"none":"auto"}},x()),y.mask&&t.createElement(h,{visible:C,forceRender:y.forceRender,destroyOnClose:y.destroyOnClose,onMaskClick:t=>{var e,s;null===(e=y.onMaskClick)||void 0===e||e.call(y,t),y.closeOnMaskClick&&(null===(s=y.onClose)||void 0===s||s.call(y))},className:y.maskClassName,style:y.maskStyle,disableBodyScroll:!1,stopPropagation:y.stopPropagation}),t.createElement(d.div,{className:_,style:Object.assign(Object.assign({},y.bodyStyle),{pointerEvents:T.to((t=>0===t?"unset":"none")),transform:T.to((t=>"bottom"===y.position?`translate(0, ${t}%)`:"top"===y.position?`translate(0, -${t}%)`:"left"===y.position?`translate(-${t}%, 0)`:"right"===y.position?`translate(${t}%, 0)`:"none"))}),ref:S},y.showCloseButton&&t.createElement("a",{className:o(`${ht}-close-icon`,"adm-plain-anchor"),onClick:()=>{var t;null===(t=y.onClose)||void 0===t||t.call(y)},role:"button","aria-label":m.common.close},y.closeIcon),y.children))));return t.createElement(p,{active:w,forceRender:y.forceRender,destroyOnClose:y.destroyOnClose},f(y.getContainer,D))};export{pt as P,m as d,g as u};
