(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function my(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var b={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vo=Symbol.for("react.element"),JS=Symbol.for("react.portal"),ZS=Symbol.for("react.fragment"),e_=Symbol.for("react.strict_mode"),t_=Symbol.for("react.profiler"),n_=Symbol.for("react.provider"),r_=Symbol.for("react.context"),i_=Symbol.for("react.forward_ref"),s_=Symbol.for("react.suspense"),o_=Symbol.for("react.memo"),a_=Symbol.for("react.lazy"),Em=Symbol.iterator;function l_(t){return t===null||typeof t!="object"?null:(t=Em&&t[Em]||t["@@iterator"],typeof t=="function"?t:null)}var gy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yy=Object.assign,vy={};function cs(t,e,n){this.props=t,this.context=e,this.refs=vy,this.updater=n||gy}cs.prototype.isReactComponent={};cs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};cs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function wy(){}wy.prototype=cs.prototype;function Xd(t,e,n){this.props=t,this.context=e,this.refs=vy,this.updater=n||gy}var Jd=Xd.prototype=new wy;Jd.constructor=Xd;yy(Jd,cs.prototype);Jd.isPureReactComponent=!0;var Sm=Array.isArray,Ey=Object.prototype.hasOwnProperty,Zd={current:null},Sy={key:!0,ref:!0,__self:!0,__source:!0};function _y(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ey.call(e,r)&&!Sy.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Vo,type:t,key:s,ref:o,props:i,_owner:Zd.current}}function u_(t,e){return{$$typeof:Vo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ef(t){return typeof t=="object"&&t!==null&&t.$$typeof===Vo}function c_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var _m=/\/+/g;function xc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?c_(""+t.key):e.toString(36)}function Xa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Vo:case JS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+xc(o,0):r,Sm(i)?(n="",t!=null&&(n=t.replace(_m,"$&/")+"/"),Xa(i,e,n,"",function(u){return u})):i!=null&&(ef(i)&&(i=u_(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(_m,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Sm(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+xc(s,a);o+=Xa(s,e,n,l,i)}else if(l=l_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+xc(s,a++),o+=Xa(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function _a(t,e,n){if(t==null)return t;var r=[],i=0;return Xa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function h_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ct={current:null},Ja={transition:null},d_={ReactCurrentDispatcher:Ct,ReactCurrentBatchConfig:Ja,ReactCurrentOwner:Zd};re.Children={map:_a,forEach:function(t,e,n){_a(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return _a(t,function(){e++}),e},toArray:function(t){return _a(t,function(e){return e})||[]},only:function(t){if(!ef(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=cs;re.Fragment=ZS;re.Profiler=t_;re.PureComponent=Xd;re.StrictMode=e_;re.Suspense=s_;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=d_;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=yy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Zd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ey.call(e,l)&&!Sy.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Vo,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:r_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:n_,_context:t},t.Consumer=t};re.createElement=_y;re.createFactory=function(t){var e=_y.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:i_,render:t}};re.isValidElement=ef;re.lazy=function(t){return{$$typeof:a_,_payload:{_status:-1,_result:t},_init:h_}};re.memo=function(t,e){return{$$typeof:o_,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=Ja.transition;Ja.transition={};try{t()}finally{Ja.transition=e}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(t,e){return Ct.current.useCallback(t,e)};re.useContext=function(t){return Ct.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return Ct.current.useDeferredValue(t)};re.useEffect=function(t,e){return Ct.current.useEffect(t,e)};re.useId=function(){return Ct.current.useId()};re.useImperativeHandle=function(t,e,n){return Ct.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return Ct.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return Ct.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return Ct.current.useMemo(t,e)};re.useReducer=function(t,e,n){return Ct.current.useReducer(t,e,n)};re.useRef=function(t){return Ct.current.useRef(t)};re.useState=function(t){return Ct.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return Ct.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return Ct.current.useTransition()};re.version="18.2.0";(function(t){t.exports=re})(b);const rn=my(b.exports);var wh={},ky={exports:{}},zt={},Cy={exports:{}},xy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,G){var K=O.length;O.push(G);e:for(;0<K;){var ve=K-1>>>1,P=O[ve];if(0<i(P,G))O[ve]=G,O[K]=P,K=ve;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var G=O[0],K=O.pop();if(K!==G){O[0]=K;e:for(var ve=0,P=O.length,M=P>>>1;ve<M;){var F=2*(ve+1)-1,q=O[F],S=F+1,ie=O[S];if(0>i(q,K))S<P&&0>i(ie,q)?(O[ve]=ie,O[S]=K,ve=S):(O[ve]=q,O[F]=K,ve=F);else if(S<P&&0>i(ie,K))O[ve]=ie,O[S]=K,ve=S;else break e}}return G}function i(O,G){var K=O.sortIndex-G.sortIndex;return K!==0?K:O.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,g=!1,v=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(O){for(var G=n(u);G!==null;){if(G.callback===null)r(u);else if(G.startTime<=O)r(u),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(u)}}function E(O){if(w=!1,m(O),!v)if(n(l)!==null)v=!0,hn(C);else{var G=n(u);G!==null&&yt(E,G.startTime-O)}}function C(O,G){v=!1,w&&(w=!1,p(k),k=-1),g=!0;var K=d;try{for(m(G),h=n(l);h!==null&&(!(h.expirationTime>G)||O&&!ae());){var ve=h.callback;if(typeof ve=="function"){h.callback=null,d=h.priorityLevel;var P=ve(h.expirationTime<=G);G=t.unstable_now(),typeof P=="function"?h.callback=P:h===n(l)&&r(l),m(G)}else r(l);h=n(l)}if(h!==null)var M=!0;else{var F=n(u);F!==null&&yt(E,F.startTime-G),M=!1}return M}finally{h=null,d=K,g=!1}}var A=!1,$=null,k=-1,L=5,V=-1;function ae(){return!(t.unstable_now()-V<L)}function fe(){if($!==null){var O=t.unstable_now();V=O;var G=!0;try{G=$(!0,O)}finally{G?ye():(A=!1,$=null)}}else A=!1}var ye;if(typeof f=="function")ye=function(){f(fe)};else if(typeof MessageChannel<"u"){var Fe=new MessageChannel,Se=Fe.port2;Fe.port1.onmessage=fe,ye=function(){Se.postMessage(null)}}else ye=function(){_(fe,0)};function hn(O){$=O,A||(A=!0,ye())}function yt(O,G){k=_(function(){O(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,hn(C))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(d){case 1:case 2:case 3:var G=3;break;default:G=d}var K=d;d=G;try{return O()}finally{d=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,G){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var K=d;d=O;try{return G()}finally{d=K}},t.unstable_scheduleCallback=function(O,G,K){var ve=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ve+K:ve):K=ve,O){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=K+P,O={id:c++,callback:G,priorityLevel:O,startTime:K,expirationTime:P,sortIndex:-1},K>ve?(O.sortIndex=K,e(u,O),n(l)===null&&O===n(u)&&(w?(p(k),k=-1):w=!0,yt(E,K-ve))):(O.sortIndex=P,e(l,O),v||g||(v=!0,hn(C))),O},t.unstable_shouldYield=ae,t.unstable_wrapCallback=function(O){var G=d;return function(){var K=d;d=G;try{return O.apply(this,arguments)}finally{d=K}}}})(xy);(function(t){t.exports=xy})(Cy);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ty=b.exports,Ft=Cy.exports;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Iy=new Set,oo={};function li(t,e){Wi(t,e),Wi(t+"Capture",e)}function Wi(t,e){for(oo[t]=e,t=0;t<e.length;t++)Iy.add(e[t])}var Pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eh=Object.prototype.hasOwnProperty,f_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,km={},Cm={};function p_(t){return Eh.call(Cm,t)?!0:Eh.call(km,t)?!1:f_.test(t)?Cm[t]=!0:(km[t]=!0,!1)}function m_(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function g_(t,e,n,r){if(e===null||typeof e>"u"||m_(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ot[t]=new xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ot[e]=new xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ot[t]=new xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ot[t]=new xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ot[t]=new xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ot[t]=new xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ot[t]=new xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ot[t]=new xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ot[t]=new xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var tf=/[\-:]([a-z])/g;function nf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(tf,nf);ot[e]=new xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(tf,nf);ot[e]=new xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(tf,nf);ot[e]=new xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ot[t]=new xt(t,1,!1,t.toLowerCase(),null,!1,!1)});ot.xlinkHref=new xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ot[t]=new xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function rf(t,e,n,r){var i=ot.hasOwnProperty(e)?ot[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(g_(e,n,i,r)&&(n=null),r||i===null?p_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var jn=Ty.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ka=Symbol.for("react.element"),vi=Symbol.for("react.portal"),wi=Symbol.for("react.fragment"),sf=Symbol.for("react.strict_mode"),Sh=Symbol.for("react.profiler"),by=Symbol.for("react.provider"),Ay=Symbol.for("react.context"),of=Symbol.for("react.forward_ref"),_h=Symbol.for("react.suspense"),kh=Symbol.for("react.suspense_list"),af=Symbol.for("react.memo"),Kn=Symbol.for("react.lazy"),Ny=Symbol.for("react.offscreen"),xm=Symbol.iterator;function ks(t){return t===null||typeof t!="object"?null:(t=xm&&t[xm]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Object.assign,Tc;function Ps(t){if(Tc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Tc=e&&e[1]||""}return`
`+Tc+t}var Ic=!1;function bc(t,e){if(!t||Ic)return"";Ic=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ic=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ps(t):""}function y_(t){switch(t.tag){case 5:return Ps(t.type);case 16:return Ps("Lazy");case 13:return Ps("Suspense");case 19:return Ps("SuspenseList");case 0:case 2:case 15:return t=bc(t.type,!1),t;case 11:return t=bc(t.type.render,!1),t;case 1:return t=bc(t.type,!0),t;default:return""}}function Ch(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case wi:return"Fragment";case vi:return"Portal";case Sh:return"Profiler";case sf:return"StrictMode";case _h:return"Suspense";case kh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ay:return(t.displayName||"Context")+".Consumer";case by:return(t._context.displayName||"Context")+".Provider";case of:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case af:return e=t.displayName||null,e!==null?e:Ch(t.type)||"Memo";case Kn:e=t._payload,t=t._init;try{return Ch(t(e))}catch{}}return null}function v_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ch(e);case 8:return e===sf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function vr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Oy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function w_(t){var e=Oy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ca(t){t._valueTracker||(t._valueTracker=w_(t))}function Ry(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Oy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function vl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xh(t,e){var n=e.checked;return Ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Tm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=vr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Py(t,e){e=e.checked,e!=null&&rf(t,"checked",e,!1)}function Th(t,e){Py(t,e);var n=vr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ih(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ih(t,e.type,vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Im(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ih(t,e,n){(e!=="number"||vl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ds=Array.isArray;function Di(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+vr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function bh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return Ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function bm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(Ds(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:vr(n)}}function Dy(t,e){var n=vr(e.value),r=vr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Am(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function $y(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ah(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?$y(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xa,Ly=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xa=xa||document.createElement("div"),xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ao(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Vs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},E_=["Webkit","ms","Moz","O"];Object.keys(Vs).forEach(function(t){E_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Vs[e]=Vs[t]})});function My(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Vs.hasOwnProperty(t)&&Vs[t]?(""+e).trim():e+"px"}function Fy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=My(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var S_=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nh(t,e){if(e){if(S_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function Oh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rh=null;function lf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ph=null,$i=null,Li=null;function Nm(t){if(t=Ho(t)){if(typeof Ph!="function")throw Error(x(280));var e=t.stateNode;e&&(e=Eu(e),Ph(t.stateNode,t.type,e))}}function Uy(t){$i?Li?Li.push(t):Li=[t]:$i=t}function zy(){if($i){var t=$i,e=Li;if(Li=$i=null,Nm(t),e)for(t=0;t<e.length;t++)Nm(e[t])}}function Vy(t,e){return t(e)}function jy(){}var Ac=!1;function By(t,e,n){if(Ac)return t(e,n);Ac=!0;try{return Vy(t,e,n)}finally{Ac=!1,($i!==null||Li!==null)&&(jy(),zy())}}function lo(t,e){var n=t.stateNode;if(n===null)return null;var r=Eu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var Dh=!1;if(Pn)try{var Cs={};Object.defineProperty(Cs,"passive",{get:function(){Dh=!0}}),window.addEventListener("test",Cs,Cs),window.removeEventListener("test",Cs,Cs)}catch{Dh=!1}function __(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var js=!1,wl=null,El=!1,$h=null,k_={onError:function(t){js=!0,wl=t}};function C_(t,e,n,r,i,s,o,a,l){js=!1,wl=null,__.apply(k_,arguments)}function x_(t,e,n,r,i,s,o,a,l){if(C_.apply(this,arguments),js){if(js){var u=wl;js=!1,wl=null}else throw Error(x(198));El||(El=!0,$h=u)}}function ui(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Hy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Om(t){if(ui(t)!==t)throw Error(x(188))}function T_(t){var e=t.alternate;if(!e){if(e=ui(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Om(i),t;if(s===r)return Om(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function Wy(t){return t=T_(t),t!==null?Gy(t):null}function Gy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Gy(t);if(e!==null)return e;t=t.sibling}return null}var Ky=Ft.unstable_scheduleCallback,Rm=Ft.unstable_cancelCallback,I_=Ft.unstable_shouldYield,b_=Ft.unstable_requestPaint,Pe=Ft.unstable_now,A_=Ft.unstable_getCurrentPriorityLevel,uf=Ft.unstable_ImmediatePriority,qy=Ft.unstable_UserBlockingPriority,Sl=Ft.unstable_NormalPriority,N_=Ft.unstable_LowPriority,Qy=Ft.unstable_IdlePriority,gu=null,mn=null;function O_(t){if(mn&&typeof mn.onCommitFiberRoot=="function")try{mn.onCommitFiberRoot(gu,t,void 0,(t.current.flags&128)===128)}catch{}}var sn=Math.clz32?Math.clz32:D_,R_=Math.log,P_=Math.LN2;function D_(t){return t>>>=0,t===0?32:31-(R_(t)/P_|0)|0}var Ta=64,Ia=4194304;function $s(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _l(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=$s(a):(s&=o,s!==0&&(r=$s(s)))}else o=n&~i,o!==0?r=$s(o):s!==0&&(r=$s(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-sn(e),i=1<<n,r|=t[n],e&=~i;return r}function $_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function L_(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-sn(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=$_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Lh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Yy(){var t=Ta;return Ta<<=1,(Ta&4194240)===0&&(Ta=64),t}function Nc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function jo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-sn(e),t[e]=n}function M_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-sn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function cf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-sn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var me=0;function Xy(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Jy,hf,Zy,ev,tv,Mh=!1,ba=[],rr=null,ir=null,sr=null,uo=new Map,co=new Map,Qn=[],F_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pm(t,e){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":uo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":co.delete(e.pointerId)}}function xs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ho(e),e!==null&&hf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function U_(t,e,n,r,i){switch(e){case"focusin":return rr=xs(rr,t,e,n,r,i),!0;case"dragenter":return ir=xs(ir,t,e,n,r,i),!0;case"mouseover":return sr=xs(sr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return uo.set(s,xs(uo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,co.set(s,xs(co.get(s)||null,t,e,n,r,i)),!0}return!1}function nv(t){var e=Lr(t.target);if(e!==null){var n=ui(e);if(n!==null){if(e=n.tag,e===13){if(e=Hy(n),e!==null){t.blockedOn=e,tv(t.priority,function(){Zy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Za(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Fh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Rh=r,n.target.dispatchEvent(r),Rh=null}else return e=Ho(n),e!==null&&hf(e),t.blockedOn=n,!1;e.shift()}return!0}function Dm(t,e,n){Za(t)&&n.delete(e)}function z_(){Mh=!1,rr!==null&&Za(rr)&&(rr=null),ir!==null&&Za(ir)&&(ir=null),sr!==null&&Za(sr)&&(sr=null),uo.forEach(Dm),co.forEach(Dm)}function Ts(t,e){t.blockedOn===e&&(t.blockedOn=null,Mh||(Mh=!0,Ft.unstable_scheduleCallback(Ft.unstable_NormalPriority,z_)))}function ho(t){function e(i){return Ts(i,t)}if(0<ba.length){Ts(ba[0],t);for(var n=1;n<ba.length;n++){var r=ba[n];r.blockedOn===t&&(r.blockedOn=null)}}for(rr!==null&&Ts(rr,t),ir!==null&&Ts(ir,t),sr!==null&&Ts(sr,t),uo.forEach(e),co.forEach(e),n=0;n<Qn.length;n++)r=Qn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Qn.length&&(n=Qn[0],n.blockedOn===null);)nv(n),n.blockedOn===null&&Qn.shift()}var Mi=jn.ReactCurrentBatchConfig,kl=!0;function V_(t,e,n,r){var i=me,s=Mi.transition;Mi.transition=null;try{me=1,df(t,e,n,r)}finally{me=i,Mi.transition=s}}function j_(t,e,n,r){var i=me,s=Mi.transition;Mi.transition=null;try{me=4,df(t,e,n,r)}finally{me=i,Mi.transition=s}}function df(t,e,n,r){if(kl){var i=Fh(t,e,n,r);if(i===null)zc(t,e,r,Cl,n),Pm(t,r);else if(U_(i,t,e,n,r))r.stopPropagation();else if(Pm(t,r),e&4&&-1<F_.indexOf(t)){for(;i!==null;){var s=Ho(i);if(s!==null&&Jy(s),s=Fh(t,e,n,r),s===null&&zc(t,e,r,Cl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else zc(t,e,r,null,n)}}var Cl=null;function Fh(t,e,n,r){if(Cl=null,t=lf(r),t=Lr(t),t!==null)if(e=ui(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Hy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Cl=t,null}function rv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(A_()){case uf:return 1;case qy:return 4;case Sl:case N_:return 16;case Qy:return 536870912;default:return 16}default:return 16}}var tr=null,ff=null,el=null;function iv(){if(el)return el;var t,e=ff,n=e.length,r,i="value"in tr?tr.value:tr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return el=i.slice(t,1<r?1-r:void 0)}function tl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Aa(){return!0}function $m(){return!1}function Vt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Aa:$m,this.isPropagationStopped=$m,this}return Ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Aa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Aa)},persist:function(){},isPersistent:Aa}),e}var hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pf=Vt(hs),Bo=Ae({},hs,{view:0,detail:0}),B_=Vt(Bo),Oc,Rc,Is,yu=Ae({},Bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Is&&(Is&&t.type==="mousemove"?(Oc=t.screenX-Is.screenX,Rc=t.screenY-Is.screenY):Rc=Oc=0,Is=t),Oc)},movementY:function(t){return"movementY"in t?t.movementY:Rc}}),Lm=Vt(yu),H_=Ae({},yu,{dataTransfer:0}),W_=Vt(H_),G_=Ae({},Bo,{relatedTarget:0}),Pc=Vt(G_),K_=Ae({},hs,{animationName:0,elapsedTime:0,pseudoElement:0}),q_=Vt(K_),Q_=Ae({},hs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Y_=Vt(Q_),X_=Ae({},hs,{data:0}),Mm=Vt(X_),J_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ek={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ek[t])?!!e[t]:!1}function mf(){return tk}var nk=Ae({},Bo,{key:function(t){if(t.key){var e=J_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Z_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mf,charCode:function(t){return t.type==="keypress"?tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rk=Vt(nk),ik=Ae({},yu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fm=Vt(ik),sk=Ae({},Bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mf}),ok=Vt(sk),ak=Ae({},hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),lk=Vt(ak),uk=Ae({},yu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ck=Vt(uk),hk=[9,13,27,32],gf=Pn&&"CompositionEvent"in window,Bs=null;Pn&&"documentMode"in document&&(Bs=document.documentMode);var dk=Pn&&"TextEvent"in window&&!Bs,sv=Pn&&(!gf||Bs&&8<Bs&&11>=Bs),Um=String.fromCharCode(32),zm=!1;function ov(t,e){switch(t){case"keyup":return hk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function av(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ei=!1;function fk(t,e){switch(t){case"compositionend":return av(e);case"keypress":return e.which!==32?null:(zm=!0,Um);case"textInput":return t=e.data,t===Um&&zm?null:t;default:return null}}function pk(t,e){if(Ei)return t==="compositionend"||!gf&&ov(t,e)?(t=iv(),el=ff=tr=null,Ei=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return sv&&e.locale!=="ko"?null:e.data;default:return null}}var mk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!mk[t.type]:e==="textarea"}function lv(t,e,n,r){Uy(r),e=xl(e,"onChange"),0<e.length&&(n=new pf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Hs=null,fo=null;function gk(t){wv(t,0)}function vu(t){var e=ki(t);if(Ry(e))return t}function yk(t,e){if(t==="change")return e}var uv=!1;if(Pn){var Dc;if(Pn){var $c="oninput"in document;if(!$c){var jm=document.createElement("div");jm.setAttribute("oninput","return;"),$c=typeof jm.oninput=="function"}Dc=$c}else Dc=!1;uv=Dc&&(!document.documentMode||9<document.documentMode)}function Bm(){Hs&&(Hs.detachEvent("onpropertychange",cv),fo=Hs=null)}function cv(t){if(t.propertyName==="value"&&vu(fo)){var e=[];lv(e,fo,t,lf(t)),By(gk,e)}}function vk(t,e,n){t==="focusin"?(Bm(),Hs=e,fo=n,Hs.attachEvent("onpropertychange",cv)):t==="focusout"&&Bm()}function wk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vu(fo)}function Ek(t,e){if(t==="click")return vu(e)}function Sk(t,e){if(t==="input"||t==="change")return vu(e)}function _k(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ln=typeof Object.is=="function"?Object.is:_k;function po(t,e){if(ln(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Eh.call(e,i)||!ln(t[i],e[i]))return!1}return!0}function Hm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wm(t,e){var n=Hm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hm(n)}}function hv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?hv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function dv(){for(var t=window,e=vl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vl(t.document)}return e}function yf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function kk(t){var e=dv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&hv(n.ownerDocument.documentElement,n)){if(r!==null&&yf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Wm(n,s);var o=Wm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ck=Pn&&"documentMode"in document&&11>=document.documentMode,Si=null,Uh=null,Ws=null,zh=!1;function Gm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zh||Si==null||Si!==vl(r)||(r=Si,"selectionStart"in r&&yf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ws&&po(Ws,r)||(Ws=r,r=xl(Uh,"onSelect"),0<r.length&&(e=new pf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Si)))}function Na(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var _i={animationend:Na("Animation","AnimationEnd"),animationiteration:Na("Animation","AnimationIteration"),animationstart:Na("Animation","AnimationStart"),transitionend:Na("Transition","TransitionEnd")},Lc={},fv={};Pn&&(fv=document.createElement("div").style,"AnimationEvent"in window||(delete _i.animationend.animation,delete _i.animationiteration.animation,delete _i.animationstart.animation),"TransitionEvent"in window||delete _i.transitionend.transition);function wu(t){if(Lc[t])return Lc[t];if(!_i[t])return t;var e=_i[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in fv)return Lc[t]=e[n];return t}var pv=wu("animationend"),mv=wu("animationiteration"),gv=wu("animationstart"),yv=wu("transitionend"),vv=new Map,Km="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(t,e){vv.set(t,e),li(e,[t])}for(var Mc=0;Mc<Km.length;Mc++){var Fc=Km[Mc],xk=Fc.toLowerCase(),Tk=Fc[0].toUpperCase()+Fc.slice(1);Cr(xk,"on"+Tk)}Cr(pv,"onAnimationEnd");Cr(mv,"onAnimationIteration");Cr(gv,"onAnimationStart");Cr("dblclick","onDoubleClick");Cr("focusin","onFocus");Cr("focusout","onBlur");Cr(yv,"onTransitionEnd");Wi("onMouseEnter",["mouseout","mouseover"]);Wi("onMouseLeave",["mouseout","mouseover"]);Wi("onPointerEnter",["pointerout","pointerover"]);Wi("onPointerLeave",["pointerout","pointerover"]);li("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));li("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));li("onBeforeInput",["compositionend","keypress","textInput","paste"]);li("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));li("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));li("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ls="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ik=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ls));function qm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,x_(r,e,void 0,t),t.currentTarget=null}function wv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;qm(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;qm(i,a,u),s=l}}}if(El)throw t=$h,El=!1,$h=null,t}function _e(t,e){var n=e[Wh];n===void 0&&(n=e[Wh]=new Set);var r=t+"__bubble";n.has(r)||(Ev(e,t,2,!1),n.add(r))}function Uc(t,e,n){var r=0;e&&(r|=4),Ev(n,t,r,e)}var Oa="_reactListening"+Math.random().toString(36).slice(2);function mo(t){if(!t[Oa]){t[Oa]=!0,Iy.forEach(function(n){n!=="selectionchange"&&(Ik.has(n)||Uc(n,!1,t),Uc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Oa]||(e[Oa]=!0,Uc("selectionchange",!1,e))}}function Ev(t,e,n,r){switch(rv(e)){case 1:var i=V_;break;case 4:i=j_;break;default:i=df}n=i.bind(null,e,n,t),i=void 0,!Dh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function zc(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Lr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}By(function(){var u=s,c=lf(n),h=[];e:{var d=vv.get(t);if(d!==void 0){var g=pf,v=t;switch(t){case"keypress":if(tl(n)===0)break e;case"keydown":case"keyup":g=rk;break;case"focusin":v="focus",g=Pc;break;case"focusout":v="blur",g=Pc;break;case"beforeblur":case"afterblur":g=Pc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Lm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=W_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=ok;break;case pv:case mv:case gv:g=q_;break;case yv:g=lk;break;case"scroll":g=B_;break;case"wheel":g=ck;break;case"copy":case"cut":case"paste":g=Y_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Fm}var w=(e&4)!==0,_=!w&&t==="scroll",p=w?d!==null?d+"Capture":null:d;w=[];for(var f=u,m;f!==null;){m=f;var E=m.stateNode;if(m.tag===5&&E!==null&&(m=E,p!==null&&(E=lo(f,p),E!=null&&w.push(go(f,E,m)))),_)break;f=f.return}0<w.length&&(d=new g(d,v,null,n,c),h.push({event:d,listeners:w}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==Rh&&(v=n.relatedTarget||n.fromElement)&&(Lr(v)||v[Dn]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?Lr(v):null,v!==null&&(_=ui(v),v!==_||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(w=Lm,E="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=Fm,E="onPointerLeave",p="onPointerEnter",f="pointer"),_=g==null?d:ki(g),m=v==null?d:ki(v),d=new w(E,f+"leave",g,n,c),d.target=_,d.relatedTarget=m,E=null,Lr(c)===u&&(w=new w(p,f+"enter",v,n,c),w.target=m,w.relatedTarget=_,E=w),_=E,g&&v)t:{for(w=g,p=v,f=0,m=w;m;m=fi(m))f++;for(m=0,E=p;E;E=fi(E))m++;for(;0<f-m;)w=fi(w),f--;for(;0<m-f;)p=fi(p),m--;for(;f--;){if(w===p||p!==null&&w===p.alternate)break t;w=fi(w),p=fi(p)}w=null}else w=null;g!==null&&Qm(h,d,g,w,!1),v!==null&&_!==null&&Qm(h,_,v,w,!0)}}e:{if(d=u?ki(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var C=yk;else if(Vm(d))if(uv)C=Sk;else{C=wk;var A=vk}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=Ek);if(C&&(C=C(t,u))){lv(h,C,n,c);break e}A&&A(t,d,u),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&Ih(d,"number",d.value)}switch(A=u?ki(u):window,t){case"focusin":(Vm(A)||A.contentEditable==="true")&&(Si=A,Uh=u,Ws=null);break;case"focusout":Ws=Uh=Si=null;break;case"mousedown":zh=!0;break;case"contextmenu":case"mouseup":case"dragend":zh=!1,Gm(h,n,c);break;case"selectionchange":if(Ck)break;case"keydown":case"keyup":Gm(h,n,c)}var $;if(gf)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Ei?ov(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(sv&&n.locale!=="ko"&&(Ei||k!=="onCompositionStart"?k==="onCompositionEnd"&&Ei&&($=iv()):(tr=c,ff="value"in tr?tr.value:tr.textContent,Ei=!0)),A=xl(u,k),0<A.length&&(k=new Mm(k,t,null,n,c),h.push({event:k,listeners:A}),$?k.data=$:($=av(n),$!==null&&(k.data=$)))),($=dk?fk(t,n):pk(t,n))&&(u=xl(u,"onBeforeInput"),0<u.length&&(c=new Mm("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=$))}wv(h,e)})}function go(t,e,n){return{instance:t,listener:e,currentTarget:n}}function xl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=lo(t,n),s!=null&&r.unshift(go(t,s,i)),s=lo(t,e),s!=null&&r.push(go(t,s,i))),t=t.return}return r}function fi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Qm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=lo(n,s),l!=null&&o.unshift(go(n,l,a))):i||(l=lo(n,s),l!=null&&o.push(go(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var bk=/\r\n?/g,Ak=/\u0000|\uFFFD/g;function Ym(t){return(typeof t=="string"?t:""+t).replace(bk,`
`).replace(Ak,"")}function Ra(t,e,n){if(e=Ym(e),Ym(t)!==e&&n)throw Error(x(425))}function Tl(){}var Vh=null,jh=null;function Bh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hh=typeof setTimeout=="function"?setTimeout:void 0,Nk=typeof clearTimeout=="function"?clearTimeout:void 0,Xm=typeof Promise=="function"?Promise:void 0,Ok=typeof queueMicrotask=="function"?queueMicrotask:typeof Xm<"u"?function(t){return Xm.resolve(null).then(t).catch(Rk)}:Hh;function Rk(t){setTimeout(function(){throw t})}function Vc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ho(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ho(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Jm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ds=Math.random().toString(36).slice(2),pn="__reactFiber$"+ds,yo="__reactProps$"+ds,Dn="__reactContainer$"+ds,Wh="__reactEvents$"+ds,Pk="__reactListeners$"+ds,Dk="__reactHandles$"+ds;function Lr(t){var e=t[pn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Dn]||n[pn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Jm(t);t!==null;){if(n=t[pn])return n;t=Jm(t)}return e}t=n,n=t.parentNode}return null}function Ho(t){return t=t[pn]||t[Dn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ki(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function Eu(t){return t[yo]||null}var Gh=[],Ci=-1;function xr(t){return{current:t}}function ke(t){0>Ci||(t.current=Gh[Ci],Gh[Ci]=null,Ci--)}function we(t,e){Ci++,Gh[Ci]=t.current,t.current=e}var wr={},mt=xr(wr),Rt=xr(!1),qr=wr;function Gi(t,e){var n=t.type.contextTypes;if(!n)return wr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Pt(t){return t=t.childContextTypes,t!=null}function Il(){ke(Rt),ke(mt)}function Zm(t,e,n){if(mt.current!==wr)throw Error(x(168));we(mt,e),we(Rt,n)}function Sv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,v_(t)||"Unknown",i));return Ae({},n,r)}function bl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||wr,qr=mt.current,we(mt,t),we(Rt,Rt.current),!0}function eg(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=Sv(t,e,qr),r.__reactInternalMemoizedMergedChildContext=t,ke(Rt),ke(mt),we(mt,t)):ke(Rt),we(Rt,n)}var kn=null,Su=!1,jc=!1;function _v(t){kn===null?kn=[t]:kn.push(t)}function $k(t){Su=!0,_v(t)}function Tr(){if(!jc&&kn!==null){jc=!0;var t=0,e=me;try{var n=kn;for(me=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}kn=null,Su=!1}catch(i){throw kn!==null&&(kn=kn.slice(t+1)),Ky(uf,Tr),i}finally{me=e,jc=!1}}return null}var xi=[],Ti=0,Al=null,Nl=0,Bt=[],Ht=0,Qr=null,xn=1,Tn="";function Rr(t,e){xi[Ti++]=Nl,xi[Ti++]=Al,Al=t,Nl=e}function kv(t,e,n){Bt[Ht++]=xn,Bt[Ht++]=Tn,Bt[Ht++]=Qr,Qr=t;var r=xn;t=Tn;var i=32-sn(r)-1;r&=~(1<<i),n+=1;var s=32-sn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,xn=1<<32-sn(e)+i|n<<i|r,Tn=s+t}else xn=1<<s|n<<i|r,Tn=t}function vf(t){t.return!==null&&(Rr(t,1),kv(t,1,0))}function wf(t){for(;t===Al;)Al=xi[--Ti],xi[Ti]=null,Nl=xi[--Ti],xi[Ti]=null;for(;t===Qr;)Qr=Bt[--Ht],Bt[Ht]=null,Tn=Bt[--Ht],Bt[Ht]=null,xn=Bt[--Ht],Bt[Ht]=null}var Mt=null,Lt=null,Ce=!1,nn=null;function Cv(t,e){var n=Wt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function tg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Mt=t,Lt=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Mt=t,Lt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qr!==null?{id:xn,overflow:Tn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Wt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Mt=t,Lt=null,!0):!1;default:return!1}}function Kh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qh(t){if(Ce){var e=Lt;if(e){var n=e;if(!tg(t,e)){if(Kh(t))throw Error(x(418));e=or(n.nextSibling);var r=Mt;e&&tg(t,e)?Cv(r,n):(t.flags=t.flags&-4097|2,Ce=!1,Mt=t)}}else{if(Kh(t))throw Error(x(418));t.flags=t.flags&-4097|2,Ce=!1,Mt=t}}}function ng(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Mt=t}function Pa(t){if(t!==Mt)return!1;if(!Ce)return ng(t),Ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Bh(t.type,t.memoizedProps)),e&&(e=Lt)){if(Kh(t))throw xv(),Error(x(418));for(;e;)Cv(t,e),e=or(e.nextSibling)}if(ng(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Lt=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Lt=null}}else Lt=Mt?or(t.stateNode.nextSibling):null;return!0}function xv(){for(var t=Lt;t;)t=or(t.nextSibling)}function Ki(){Lt=Mt=null,Ce=!1}function Ef(t){nn===null?nn=[t]:nn.push(t)}var Lk=jn.ReactCurrentBatchConfig;function en(t,e){if(t&&t.defaultProps){e=Ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ol=xr(null),Rl=null,Ii=null,Sf=null;function _f(){Sf=Ii=Rl=null}function kf(t){var e=Ol.current;ke(Ol),t._currentValue=e}function Qh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Fi(t,e){Rl=t,Sf=Ii=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Nt=!0),t.firstContext=null)}function Qt(t){var e=t._currentValue;if(Sf!==t)if(t={context:t,memoizedValue:e,next:null},Ii===null){if(Rl===null)throw Error(x(308));Ii=t,Rl.dependencies={lanes:0,firstContext:t}}else Ii=Ii.next=t;return e}var Mr=null;function Cf(t){Mr===null?Mr=[t]:Mr.push(t)}function Tv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Cf(e)):(n.next=i.next,i.next=n),e.interleaved=n,$n(t,r)}function $n(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qn=!1;function xf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Iv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function On(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ar(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(oe&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,$n(t,n)}return i=r.interleaved,i===null?(e.next=e,Cf(r)):(e.next=i.next,i.next=e),r.interleaved=e,$n(t,n)}function nl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cf(t,n)}}function rg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Pl(t,e,n,r){var i=t.updateQueue;qn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,w=a;switch(d=e,g=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){h=v.call(g,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,d=typeof v=="function"?v.call(g,h,d):v,d==null)break e;h=Ae({},h,d);break e;case 2:qn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Xr|=o,t.lanes=o,t.memoizedState=h}}function ig(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var bv=new Ty.Component().refs;function Yh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _u={isMounted:function(t){return(t=t._reactInternals)?ui(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=_t(),i=ur(t),s=On(r,i);s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,i),e!==null&&(on(e,t,i,r),nl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=_t(),i=ur(t),s=On(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,i),e!==null&&(on(e,t,i,r),nl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=_t(),r=ur(t),i=On(n,r);i.tag=2,e!=null&&(i.callback=e),e=ar(t,i,r),e!==null&&(on(e,t,r,n),nl(e,t,r))}};function sg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!po(n,r)||!po(i,s):!0}function Av(t,e,n){var r=!1,i=wr,s=e.contextType;return typeof s=="object"&&s!==null?s=Qt(s):(i=Pt(e)?qr:mt.current,r=e.contextTypes,s=(r=r!=null)?Gi(t,i):wr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_u,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function og(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&_u.enqueueReplaceState(e,e.state,null)}function Xh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=bv,xf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Qt(s):(s=Pt(e)?qr:mt.current,i.context=Gi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Yh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&_u.enqueueReplaceState(i,i.state,null),Pl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function bs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===bv&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function Da(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ag(t){var e=t._init;return e(t._payload)}function Nv(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=cr(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,E){return f===null||f.tag!==6?(f=Qc(m,p.mode,E),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,E){var C=m.type;return C===wi?c(p,f,m.props.children,E,m.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Kn&&ag(C)===f.type)?(E=i(f,m.props),E.ref=bs(p,f,m),E.return=p,E):(E=ll(m.type,m.key,m.props,null,p.mode,E),E.ref=bs(p,f,m),E.return=p,E)}function u(p,f,m,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Yc(m,p.mode,E),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,E,C){return f===null||f.tag!==7?(f=Wr(m,p.mode,E,C),f.return=p,f):(f=i(f,m),f.return=p,f)}function h(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Qc(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ka:return m=ll(f.type,f.key,f.props,null,p.mode,m),m.ref=bs(p,null,f),m.return=p,m;case vi:return f=Yc(f,p.mode,m),f.return=p,f;case Kn:var E=f._init;return h(p,E(f._payload),m)}if(Ds(f)||ks(f))return f=Wr(f,p.mode,m,null),f.return=p,f;Da(p,f)}return null}function d(p,f,m,E){var C=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:a(p,f,""+m,E);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ka:return m.key===C?l(p,f,m,E):null;case vi:return m.key===C?u(p,f,m,E):null;case Kn:return C=m._init,d(p,f,C(m._payload),E)}if(Ds(m)||ks(m))return C!==null?null:c(p,f,m,E,null);Da(p,m)}return null}function g(p,f,m,E,C){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(m)||null,a(f,p,""+E,C);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ka:return p=p.get(E.key===null?m:E.key)||null,l(f,p,E,C);case vi:return p=p.get(E.key===null?m:E.key)||null,u(f,p,E,C);case Kn:var A=E._init;return g(p,f,m,A(E._payload),C)}if(Ds(E)||ks(E))return p=p.get(m)||null,c(f,p,E,C,null);Da(f,E)}return null}function v(p,f,m,E){for(var C=null,A=null,$=f,k=f=0,L=null;$!==null&&k<m.length;k++){$.index>k?(L=$,$=null):L=$.sibling;var V=d(p,$,m[k],E);if(V===null){$===null&&($=L);break}t&&$&&V.alternate===null&&e(p,$),f=s(V,f,k),A===null?C=V:A.sibling=V,A=V,$=L}if(k===m.length)return n(p,$),Ce&&Rr(p,k),C;if($===null){for(;k<m.length;k++)$=h(p,m[k],E),$!==null&&(f=s($,f,k),A===null?C=$:A.sibling=$,A=$);return Ce&&Rr(p,k),C}for($=r(p,$);k<m.length;k++)L=g($,p,k,m[k],E),L!==null&&(t&&L.alternate!==null&&$.delete(L.key===null?k:L.key),f=s(L,f,k),A===null?C=L:A.sibling=L,A=L);return t&&$.forEach(function(ae){return e(p,ae)}),Ce&&Rr(p,k),C}function w(p,f,m,E){var C=ks(m);if(typeof C!="function")throw Error(x(150));if(m=C.call(m),m==null)throw Error(x(151));for(var A=C=null,$=f,k=f=0,L=null,V=m.next();$!==null&&!V.done;k++,V=m.next()){$.index>k?(L=$,$=null):L=$.sibling;var ae=d(p,$,V.value,E);if(ae===null){$===null&&($=L);break}t&&$&&ae.alternate===null&&e(p,$),f=s(ae,f,k),A===null?C=ae:A.sibling=ae,A=ae,$=L}if(V.done)return n(p,$),Ce&&Rr(p,k),C;if($===null){for(;!V.done;k++,V=m.next())V=h(p,V.value,E),V!==null&&(f=s(V,f,k),A===null?C=V:A.sibling=V,A=V);return Ce&&Rr(p,k),C}for($=r(p,$);!V.done;k++,V=m.next())V=g($,p,k,V.value,E),V!==null&&(t&&V.alternate!==null&&$.delete(V.key===null?k:V.key),f=s(V,f,k),A===null?C=V:A.sibling=V,A=V);return t&&$.forEach(function(fe){return e(p,fe)}),Ce&&Rr(p,k),C}function _(p,f,m,E){if(typeof m=="object"&&m!==null&&m.type===wi&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ka:e:{for(var C=m.key,A=f;A!==null;){if(A.key===C){if(C=m.type,C===wi){if(A.tag===7){n(p,A.sibling),f=i(A,m.props.children),f.return=p,p=f;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Kn&&ag(C)===A.type){n(p,A.sibling),f=i(A,m.props),f.ref=bs(p,A,m),f.return=p,p=f;break e}n(p,A);break}else e(p,A);A=A.sibling}m.type===wi?(f=Wr(m.props.children,p.mode,E,m.key),f.return=p,p=f):(E=ll(m.type,m.key,m.props,null,p.mode,E),E.ref=bs(p,f,m),E.return=p,p=E)}return o(p);case vi:e:{for(A=m.key;f!==null;){if(f.key===A)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Yc(m,p.mode,E),f.return=p,p=f}return o(p);case Kn:return A=m._init,_(p,f,A(m._payload),E)}if(Ds(m))return v(p,f,m,E);if(ks(m))return w(p,f,m,E);Da(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=Qc(m,p.mode,E),f.return=p,p=f),o(p)):n(p,f)}return _}var qi=Nv(!0),Ov=Nv(!1),Wo={},gn=xr(Wo),vo=xr(Wo),wo=xr(Wo);function Fr(t){if(t===Wo)throw Error(x(174));return t}function Tf(t,e){switch(we(wo,e),we(vo,t),we(gn,Wo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ah(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ah(e,t)}ke(gn),we(gn,e)}function Qi(){ke(gn),ke(vo),ke(wo)}function Rv(t){Fr(wo.current);var e=Fr(gn.current),n=Ah(e,t.type);e!==n&&(we(vo,t),we(gn,n))}function If(t){vo.current===t&&(ke(gn),ke(vo))}var Ie=xr(0);function Dl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bc=[];function bf(){for(var t=0;t<Bc.length;t++)Bc[t]._workInProgressVersionPrimary=null;Bc.length=0}var rl=jn.ReactCurrentDispatcher,Hc=jn.ReactCurrentBatchConfig,Yr=0,be=null,Ue=null,We=null,$l=!1,Gs=!1,Eo=0,Mk=0;function ct(){throw Error(x(321))}function Af(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ln(t[n],e[n]))return!1;return!0}function Nf(t,e,n,r,i,s){if(Yr=s,be=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,rl.current=t===null||t.memoizedState===null?Vk:jk,t=n(r,i),Gs){s=0;do{if(Gs=!1,Eo=0,25<=s)throw Error(x(301));s+=1,We=Ue=null,e.updateQueue=null,rl.current=Bk,t=n(r,i)}while(Gs)}if(rl.current=Ll,e=Ue!==null&&Ue.next!==null,Yr=0,We=Ue=be=null,$l=!1,e)throw Error(x(300));return t}function Of(){var t=Eo!==0;return Eo=0,t}function fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?be.memoizedState=We=t:We=We.next=t,We}function Yt(){if(Ue===null){var t=be.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var e=We===null?be.memoizedState:We.next;if(e!==null)We=e,Ue=t;else{if(t===null)throw Error(x(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},We===null?be.memoizedState=We=t:We=We.next=t}return We}function So(t,e){return typeof e=="function"?e(t):e}function Wc(t){var e=Yt(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=Ue,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Yr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,be.lanes|=c,Xr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,ln(r,e.memoizedState)||(Nt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,be.lanes|=s,Xr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gc(t){var e=Yt(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ln(s,e.memoizedState)||(Nt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Pv(){}function Dv(t,e){var n=be,r=Yt(),i=e(),s=!ln(r.memoizedState,i);if(s&&(r.memoizedState=i,Nt=!0),r=r.queue,Rf(Mv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,_o(9,Lv.bind(null,n,r,i,e),void 0,null),Ge===null)throw Error(x(349));(Yr&30)!==0||$v(n,e,i)}return i}function $v(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Lv(t,e,n,r){e.value=n,e.getSnapshot=r,Fv(e)&&Uv(t)}function Mv(t,e,n){return n(function(){Fv(e)&&Uv(t)})}function Fv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ln(t,n)}catch{return!0}}function Uv(t){var e=$n(t,1);e!==null&&on(e,t,1,-1)}function lg(t){var e=fn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:So,lastRenderedState:t},e.queue=t,t=t.dispatch=zk.bind(null,be,t),[e.memoizedState,t]}function _o(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function zv(){return Yt().memoizedState}function il(t,e,n,r){var i=fn();be.flags|=t,i.memoizedState=_o(1|e,n,void 0,r===void 0?null:r)}function ku(t,e,n,r){var i=Yt();r=r===void 0?null:r;var s=void 0;if(Ue!==null){var o=Ue.memoizedState;if(s=o.destroy,r!==null&&Af(r,o.deps)){i.memoizedState=_o(e,n,s,r);return}}be.flags|=t,i.memoizedState=_o(1|e,n,s,r)}function ug(t,e){return il(8390656,8,t,e)}function Rf(t,e){return ku(2048,8,t,e)}function Vv(t,e){return ku(4,2,t,e)}function jv(t,e){return ku(4,4,t,e)}function Bv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Hv(t,e,n){return n=n!=null?n.concat([t]):null,ku(4,4,Bv.bind(null,e,t),n)}function Pf(){}function Wv(t,e){var n=Yt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Af(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Gv(t,e){var n=Yt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Af(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Kv(t,e,n){return(Yr&21)===0?(t.baseState&&(t.baseState=!1,Nt=!0),t.memoizedState=n):(ln(n,e)||(n=Yy(),be.lanes|=n,Xr|=n,t.baseState=!0),e)}function Fk(t,e){var n=me;me=n!==0&&4>n?n:4,t(!0);var r=Hc.transition;Hc.transition={};try{t(!1),e()}finally{me=n,Hc.transition=r}}function qv(){return Yt().memoizedState}function Uk(t,e,n){var r=ur(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qv(t))Yv(e,n);else if(n=Tv(t,e,n,r),n!==null){var i=_t();on(n,t,r,i),Xv(n,e,r)}}function zk(t,e,n){var r=ur(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qv(t))Yv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,ln(a,o)){var l=e.interleaved;l===null?(i.next=i,Cf(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Tv(t,e,i,r),n!==null&&(i=_t(),on(n,t,r,i),Xv(n,e,r))}}function Qv(t){var e=t.alternate;return t===be||e!==null&&e===be}function Yv(t,e){Gs=$l=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Xv(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cf(t,n)}}var Ll={readContext:Qt,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useInsertionEffect:ct,useLayoutEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useMutableSource:ct,useSyncExternalStore:ct,useId:ct,unstable_isNewReconciler:!1},Vk={readContext:Qt,useCallback:function(t,e){return fn().memoizedState=[t,e===void 0?null:e],t},useContext:Qt,useEffect:ug,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,il(4194308,4,Bv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return il(4194308,4,t,e)},useInsertionEffect:function(t,e){return il(4,2,t,e)},useMemo:function(t,e){var n=fn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=fn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Uk.bind(null,be,t),[r.memoizedState,t]},useRef:function(t){var e=fn();return t={current:t},e.memoizedState=t},useState:lg,useDebugValue:Pf,useDeferredValue:function(t){return fn().memoizedState=t},useTransition:function(){var t=lg(!1),e=t[0];return t=Fk.bind(null,t[1]),fn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=be,i=fn();if(Ce){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),Ge===null)throw Error(x(349));(Yr&30)!==0||$v(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ug(Mv.bind(null,r,s,t),[t]),r.flags|=2048,_o(9,Lv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=fn(),e=Ge.identifierPrefix;if(Ce){var n=Tn,r=xn;n=(r&~(1<<32-sn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Eo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Mk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},jk={readContext:Qt,useCallback:Wv,useContext:Qt,useEffect:Rf,useImperativeHandle:Hv,useInsertionEffect:Vv,useLayoutEffect:jv,useMemo:Gv,useReducer:Wc,useRef:zv,useState:function(){return Wc(So)},useDebugValue:Pf,useDeferredValue:function(t){var e=Yt();return Kv(e,Ue.memoizedState,t)},useTransition:function(){var t=Wc(So)[0],e=Yt().memoizedState;return[t,e]},useMutableSource:Pv,useSyncExternalStore:Dv,useId:qv,unstable_isNewReconciler:!1},Bk={readContext:Qt,useCallback:Wv,useContext:Qt,useEffect:Rf,useImperativeHandle:Hv,useInsertionEffect:Vv,useLayoutEffect:jv,useMemo:Gv,useReducer:Gc,useRef:zv,useState:function(){return Gc(So)},useDebugValue:Pf,useDeferredValue:function(t){var e=Yt();return Ue===null?e.memoizedState=t:Kv(e,Ue.memoizedState,t)},useTransition:function(){var t=Gc(So)[0],e=Yt().memoizedState;return[t,e]},useMutableSource:Pv,useSyncExternalStore:Dv,useId:qv,unstable_isNewReconciler:!1};function Yi(t,e){try{var n="",r=e;do n+=y_(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Kc(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function Jh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Hk=typeof WeakMap=="function"?WeakMap:Map;function Jv(t,e,n){n=On(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Fl||(Fl=!0,ld=r),Jh(t,e)},n}function Zv(t,e,n){n=On(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Jh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Jh(t,e),typeof r!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function cg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Hk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=iC.bind(null,t,e,n),e.then(t,t))}function hg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function dg(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=On(-1,1),e.tag=2,ar(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var Wk=jn.ReactCurrentOwner,Nt=!1;function vt(t,e,n,r){e.child=t===null?Ov(e,null,n,r):qi(e,t.child,n,r)}function fg(t,e,n,r,i){n=n.render;var s=e.ref;return Fi(e,i),r=Nf(t,e,n,r,s,i),n=Of(),t!==null&&!Nt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ln(t,e,i)):(Ce&&n&&vf(e),e.flags|=1,vt(t,e,r,i),e.child)}function pg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Vf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,e1(t,e,s,r,i)):(t=ll(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:po,n(o,r)&&t.ref===e.ref)return Ln(t,e,i)}return e.flags|=1,t=cr(s,r),t.ref=e.ref,t.return=e,e.child=t}function e1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(po(s,r)&&t.ref===e.ref)if(Nt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Nt=!0);else return e.lanes=t.lanes,Ln(t,e,i)}return Zh(t,e,n,r,i)}function t1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(Ai,$t),$t|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,we(Ai,$t),$t|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,we(Ai,$t),$t|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,we(Ai,$t),$t|=r;return vt(t,e,i,n),e.child}function n1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Zh(t,e,n,r,i){var s=Pt(n)?qr:mt.current;return s=Gi(e,s),Fi(e,i),n=Nf(t,e,n,r,s,i),r=Of(),t!==null&&!Nt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ln(t,e,i)):(Ce&&r&&vf(e),e.flags|=1,vt(t,e,n,i),e.child)}function mg(t,e,n,r,i){if(Pt(n)){var s=!0;bl(e)}else s=!1;if(Fi(e,i),e.stateNode===null)sl(t,e),Av(e,n,r),Xh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Qt(u):(u=Pt(n)?qr:mt.current,u=Gi(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&og(e,o,r,u),qn=!1;var d=e.memoizedState;o.state=d,Pl(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Rt.current||qn?(typeof c=="function"&&(Yh(e,n,c,r),l=e.memoizedState),(a=qn||sg(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Iv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:en(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Qt(l):(l=Pt(n)?qr:mt.current,l=Gi(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&og(e,o,r,l),qn=!1,d=e.memoizedState,o.state=d,Pl(e,r,o,i);var v=e.memoizedState;a!==h||d!==v||Rt.current||qn?(typeof g=="function"&&(Yh(e,n,g,r),v=e.memoizedState),(u=qn||sg(e,n,u,r,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return ed(t,e,n,r,s,i)}function ed(t,e,n,r,i,s){n1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&eg(e,n,!1),Ln(t,e,s);r=e.stateNode,Wk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=qi(e,t.child,null,s),e.child=qi(e,null,a,s)):vt(t,e,a,s),e.memoizedState=r.state,i&&eg(e,n,!0),e.child}function r1(t){var e=t.stateNode;e.pendingContext?Zm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Zm(t,e.context,!1),Tf(t,e.containerInfo)}function gg(t,e,n,r,i){return Ki(),Ef(i),e.flags|=256,vt(t,e,n,r),e.child}var td={dehydrated:null,treeContext:null,retryLane:0};function nd(t){return{baseLanes:t,cachePool:null,transitions:null}}function i1(t,e,n){var r=e.pendingProps,i=Ie.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),we(Ie,i&1),t===null)return qh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Tu(o,r,0,null),t=Wr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=nd(n),e.memoizedState=td,t):Df(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Gk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=cr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=cr(a,s):(s=Wr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?nd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=td,r}return s=t.child,t=s.sibling,r=cr(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Df(t,e){return e=Tu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function $a(t,e,n,r){return r!==null&&Ef(r),qi(e,t.child,null,n),t=Df(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Gk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Kc(Error(x(422))),$a(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Tu({mode:"visible",children:r.children},i,0,null),s=Wr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&qi(e,t.child,null,o),e.child.memoizedState=nd(o),e.memoizedState=td,s);if((e.mode&1)===0)return $a(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(x(419)),r=Kc(s,r,void 0),$a(t,e,o,r)}if(a=(o&t.childLanes)!==0,Nt||a){if(r=Ge,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,$n(t,i),on(r,t,i,-1))}return zf(),r=Kc(Error(x(421))),$a(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=sC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Lt=or(i.nextSibling),Mt=e,Ce=!0,nn=null,t!==null&&(Bt[Ht++]=xn,Bt[Ht++]=Tn,Bt[Ht++]=Qr,xn=t.id,Tn=t.overflow,Qr=e),e=Df(e,r.children),e.flags|=4096,e)}function yg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Qh(t.return,e,n)}function qc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function s1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(vt(t,e,r.children,n),r=Ie.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&yg(t,n,e);else if(t.tag===19)yg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(we(Ie,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Dl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),qc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Dl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}qc(e,!0,n,null,s);break;case"together":qc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function sl(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ln(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Kk(t,e,n){switch(e.tag){case 3:r1(e),Ki();break;case 5:Rv(e);break;case 1:Pt(e.type)&&bl(e);break;case 4:Tf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;we(Ol,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(we(Ie,Ie.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?i1(t,e,n):(we(Ie,Ie.current&1),t=Ln(t,e,n),t!==null?t.sibling:null);we(Ie,Ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return s1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(Ie,Ie.current),r)break;return null;case 22:case 23:return e.lanes=0,t1(t,e,n)}return Ln(t,e,n)}var o1,rd,a1,l1;o1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rd=function(){};a1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Fr(gn.current);var s=null;switch(n){case"input":i=xh(t,i),r=xh(t,r),s=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),s=[];break;case"textarea":i=bh(t,i),r=bh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Tl)}Nh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(oo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(oo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&_e("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};l1=function(t,e,n,r){n!==r&&(e.flags|=4)};function As(t,e){if(!Ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function qk(t,e,n){var r=e.pendingProps;switch(wf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(e),null;case 1:return Pt(e.type)&&Il(),ht(e),null;case 3:return r=e.stateNode,Qi(),ke(Rt),ke(mt),bf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Pa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,nn!==null&&(hd(nn),nn=null))),rd(t,e),ht(e),null;case 5:If(e);var i=Fr(wo.current);if(n=e.type,t!==null&&e.stateNode!=null)a1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return ht(e),null}if(t=Fr(gn.current),Pa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[pn]=e,r[yo]=s,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<Ls.length;i++)_e(Ls[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":Tm(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":bm(r,s),_e("invalid",r)}Nh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ra(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ra(r.textContent,a,t),i=["children",""+a]):oo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":Ca(r),Im(r,s,!0);break;case"textarea":Ca(r),Am(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Tl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=$y(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[pn]=e,t[yo]=r,o1(t,e,!1,!1),e.stateNode=t;e:{switch(o=Oh(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ls.length;i++)_e(Ls[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":Tm(t,r),i=xh(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),_e("invalid",t);break;case"textarea":bm(t,r),i=bh(t,r),_e("invalid",t);break;default:i=r}Nh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Fy(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ly(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ao(t,l):typeof l=="number"&&ao(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_e("scroll",t):l!=null&&rf(t,s,l,o))}switch(n){case"input":Ca(t),Im(t,r,!1);break;case"textarea":Ca(t),Am(t);break;case"option":r.value!=null&&t.setAttribute("value",""+vr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Di(t,!!r.multiple,s,!1):r.defaultValue!=null&&Di(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Tl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ht(e),null;case 6:if(t&&e.stateNode!=null)l1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=Fr(wo.current),Fr(gn.current),Pa(e)){if(r=e.stateNode,n=e.memoizedProps,r[pn]=e,(s=r.nodeValue!==n)&&(t=Mt,t!==null))switch(t.tag){case 3:Ra(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ra(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pn]=e,e.stateNode=r}return ht(e),null;case 13:if(ke(Ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ce&&Lt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)xv(),Ki(),e.flags|=98560,s=!1;else if(s=Pa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[pn]=e}else Ki(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ht(e),s=!1}else nn!==null&&(hd(nn),nn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Ie.current&1)!==0?ze===0&&(ze=3):zf())),e.updateQueue!==null&&(e.flags|=4),ht(e),null);case 4:return Qi(),rd(t,e),t===null&&mo(e.stateNode.containerInfo),ht(e),null;case 10:return kf(e.type._context),ht(e),null;case 17:return Pt(e.type)&&Il(),ht(e),null;case 19:if(ke(Ie),s=e.memoizedState,s===null)return ht(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)As(s,!1);else{if(ze!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Dl(t),o!==null){for(e.flags|=128,As(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return we(Ie,Ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pe()>Xi&&(e.flags|=128,r=!0,As(s,!1),e.lanes=4194304)}else{if(!r)if(t=Dl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),As(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ce)return ht(e),null}else 2*Pe()-s.renderingStartTime>Xi&&n!==1073741824&&(e.flags|=128,r=!0,As(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pe(),e.sibling=null,n=Ie.current,we(Ie,r?n&1|2:n&1),e):(ht(e),null);case 22:case 23:return Uf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?($t&1073741824)!==0&&(ht(e),e.subtreeFlags&6&&(e.flags|=8192)):ht(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function Qk(t,e){switch(wf(e),e.tag){case 1:return Pt(e.type)&&Il(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qi(),ke(Rt),ke(mt),bf(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return If(e),null;case 13:if(ke(Ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));Ki()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ke(Ie),null;case 4:return Qi(),null;case 10:return kf(e.type._context),null;case 22:case 23:return Uf(),null;case 24:return null;default:return null}}var La=!1,dt=!1,Yk=typeof WeakSet=="function"?WeakSet:Set,U=null;function bi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(t,e,r)}else n.current=null}function id(t,e,n){try{n()}catch(r){Oe(t,e,r)}}var vg=!1;function Xk(t,e){if(Vh=kl,t=dv(),yf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(jh={focusedElem:t,selectionRange:n},kl=!1,U=e;U!==null;)if(e=U,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,U=t;else for(;U!==null;){e=U;try{var v=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,_=v.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?w:en(e.type,w),_);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(E){Oe(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,U=t;break}U=e.return}return v=vg,vg=!1,v}function Ks(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&id(e,n,s)}i=i.next}while(i!==r)}}function Cu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function sd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function u1(t){var e=t.alternate;e!==null&&(t.alternate=null,u1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pn],delete e[yo],delete e[Wh],delete e[Pk],delete e[Dk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function c1(t){return t.tag===5||t.tag===3||t.tag===4}function wg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||c1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function od(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Tl));else if(r!==4&&(t=t.child,t!==null))for(od(t,e,n),t=t.sibling;t!==null;)od(t,e,n),t=t.sibling}function ad(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ad(t,e,n),t=t.sibling;t!==null;)ad(t,e,n),t=t.sibling}var Ze=null,tn=!1;function Wn(t,e,n){for(n=n.child;n!==null;)h1(t,e,n),n=n.sibling}function h1(t,e,n){if(mn&&typeof mn.onCommitFiberUnmount=="function")try{mn.onCommitFiberUnmount(gu,n)}catch{}switch(n.tag){case 5:dt||bi(n,e);case 6:var r=Ze,i=tn;Ze=null,Wn(t,e,n),Ze=r,tn=i,Ze!==null&&(tn?(t=Ze,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ze.removeChild(n.stateNode));break;case 18:Ze!==null&&(tn?(t=Ze,n=n.stateNode,t.nodeType===8?Vc(t.parentNode,n):t.nodeType===1&&Vc(t,n),ho(t)):Vc(Ze,n.stateNode));break;case 4:r=Ze,i=tn,Ze=n.stateNode.containerInfo,tn=!0,Wn(t,e,n),Ze=r,tn=i;break;case 0:case 11:case 14:case 15:if(!dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&id(n,e,o),i=i.next}while(i!==r)}Wn(t,e,n);break;case 1:if(!dt&&(bi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Oe(n,e,a)}Wn(t,e,n);break;case 21:Wn(t,e,n);break;case 22:n.mode&1?(dt=(r=dt)||n.memoizedState!==null,Wn(t,e,n),dt=r):Wn(t,e,n);break;default:Wn(t,e,n)}}function Eg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Yk),e.forEach(function(r){var i=oC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Zt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ze=a.stateNode,tn=!1;break e;case 3:Ze=a.stateNode.containerInfo,tn=!0;break e;case 4:Ze=a.stateNode.containerInfo,tn=!0;break e}a=a.return}if(Ze===null)throw Error(x(160));h1(s,o,i),Ze=null,tn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Oe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)d1(e,t),e=e.sibling}function d1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Zt(e,t),dn(t),r&4){try{Ks(3,t,t.return),Cu(3,t)}catch(w){Oe(t,t.return,w)}try{Ks(5,t,t.return)}catch(w){Oe(t,t.return,w)}}break;case 1:Zt(e,t),dn(t),r&512&&n!==null&&bi(n,n.return);break;case 5:if(Zt(e,t),dn(t),r&512&&n!==null&&bi(n,n.return),t.flags&32){var i=t.stateNode;try{ao(i,"")}catch(w){Oe(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Py(i,s),Oh(a,o);var u=Oh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Fy(i,h):c==="dangerouslySetInnerHTML"?Ly(i,h):c==="children"?ao(i,h):rf(i,c,h,u)}switch(a){case"input":Th(i,s);break;case"textarea":Dy(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Di(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?Di(i,!!s.multiple,s.defaultValue,!0):Di(i,!!s.multiple,s.multiple?[]:"",!1))}i[yo]=s}catch(w){Oe(t,t.return,w)}}break;case 6:if(Zt(e,t),dn(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){Oe(t,t.return,w)}}break;case 3:if(Zt(e,t),dn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ho(e.containerInfo)}catch(w){Oe(t,t.return,w)}break;case 4:Zt(e,t),dn(t);break;case 13:Zt(e,t),dn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Mf=Pe())),r&4&&Eg(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(dt=(u=dt)||c,Zt(e,t),dt=u):Zt(e,t),dn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(U=t,c=t.child;c!==null;){for(h=U=c;U!==null;){switch(d=U,g=d.child,d.tag){case 0:case 11:case 14:case 15:Ks(4,d,d.return);break;case 1:bi(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){Oe(r,n,w)}}break;case 5:bi(d,d.return);break;case 22:if(d.memoizedState!==null){_g(h);continue}}g!==null?(g.return=d,U=g):_g(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=My("display",o))}catch(w){Oe(t,t.return,w)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){Oe(t,t.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Zt(e,t),dn(t),r&4&&Eg(t);break;case 21:break;default:Zt(e,t),dn(t)}}function dn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(c1(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ao(i,""),r.flags&=-33);var s=wg(t);ad(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=wg(t);od(t,a,o);break;default:throw Error(x(161))}}catch(l){Oe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Jk(t,e,n){U=t,f1(t)}function f1(t,e,n){for(var r=(t.mode&1)!==0;U!==null;){var i=U,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||La;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||dt;a=La;var u=dt;if(La=o,(dt=l)&&!u)for(U=i;U!==null;)o=U,l=o.child,o.tag===22&&o.memoizedState!==null?kg(i):l!==null?(l.return=o,U=l):kg(i);for(;s!==null;)U=s,f1(s),s=s.sibling;U=i,La=a,dt=u}Sg(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,U=s):Sg(t)}}function Sg(t){for(;U!==null;){var e=U;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:dt||Cu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!dt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:en(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ig(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ig(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&ho(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}dt||e.flags&512&&sd(e)}catch(d){Oe(e,e.return,d)}}if(e===t){U=null;break}if(n=e.sibling,n!==null){n.return=e.return,U=n;break}U=e.return}}function _g(t){for(;U!==null;){var e=U;if(e===t){U=null;break}var n=e.sibling;if(n!==null){n.return=e.return,U=n;break}U=e.return}}function kg(t){for(;U!==null;){var e=U;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Cu(4,e)}catch(l){Oe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Oe(e,i,l)}}var s=e.return;try{sd(e)}catch(l){Oe(e,s,l)}break;case 5:var o=e.return;try{sd(e)}catch(l){Oe(e,o,l)}}}catch(l){Oe(e,e.return,l)}if(e===t){U=null;break}var a=e.sibling;if(a!==null){a.return=e.return,U=a;break}U=e.return}}var Zk=Math.ceil,Ml=jn.ReactCurrentDispatcher,$f=jn.ReactCurrentOwner,Gt=jn.ReactCurrentBatchConfig,oe=0,Ge=null,Le=null,rt=0,$t=0,Ai=xr(0),ze=0,ko=null,Xr=0,xu=0,Lf=0,qs=null,bt=null,Mf=0,Xi=1/0,_n=null,Fl=!1,ld=null,lr=null,Ma=!1,nr=null,Ul=0,Qs=0,ud=null,ol=-1,al=0;function _t(){return(oe&6)!==0?Pe():ol!==-1?ol:ol=Pe()}function ur(t){return(t.mode&1)===0?1:(oe&2)!==0&&rt!==0?rt&-rt:Lk.transition!==null?(al===0&&(al=Yy()),al):(t=me,t!==0||(t=window.event,t=t===void 0?16:rv(t.type)),t)}function on(t,e,n,r){if(50<Qs)throw Qs=0,ud=null,Error(x(185));jo(t,n,r),((oe&2)===0||t!==Ge)&&(t===Ge&&((oe&2)===0&&(xu|=n),ze===4&&Yn(t,rt)),Dt(t,r),n===1&&oe===0&&(e.mode&1)===0&&(Xi=Pe()+500,Su&&Tr()))}function Dt(t,e){var n=t.callbackNode;L_(t,e);var r=_l(t,t===Ge?rt:0);if(r===0)n!==null&&Rm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Rm(n),e===1)t.tag===0?$k(Cg.bind(null,t)):_v(Cg.bind(null,t)),Ok(function(){(oe&6)===0&&Tr()}),n=null;else{switch(Xy(r)){case 1:n=uf;break;case 4:n=qy;break;case 16:n=Sl;break;case 536870912:n=Qy;break;default:n=Sl}n=S1(n,p1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function p1(t,e){if(ol=-1,al=0,(oe&6)!==0)throw Error(x(327));var n=t.callbackNode;if(Ui()&&t.callbackNode!==n)return null;var r=_l(t,t===Ge?rt:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=zl(t,r);else{e=r;var i=oe;oe|=2;var s=g1();(Ge!==t||rt!==e)&&(_n=null,Xi=Pe()+500,Hr(t,e));do try{nC();break}catch(a){m1(t,a)}while(1);_f(),Ml.current=s,oe=i,Le!==null?e=0:(Ge=null,rt=0,e=ze)}if(e!==0){if(e===2&&(i=Lh(t),i!==0&&(r=i,e=cd(t,i))),e===1)throw n=ko,Hr(t,0),Yn(t,r),Dt(t,Pe()),n;if(e===6)Yn(t,r);else{if(i=t.current.alternate,(r&30)===0&&!eC(i)&&(e=zl(t,r),e===2&&(s=Lh(t),s!==0&&(r=s,e=cd(t,s))),e===1))throw n=ko,Hr(t,0),Yn(t,r),Dt(t,Pe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:Pr(t,bt,_n);break;case 3:if(Yn(t,r),(r&130023424)===r&&(e=Mf+500-Pe(),10<e)){if(_l(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){_t(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Hh(Pr.bind(null,t,bt,_n),e);break}Pr(t,bt,_n);break;case 4:if(Yn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-sn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Zk(r/1960))-r,10<r){t.timeoutHandle=Hh(Pr.bind(null,t,bt,_n),r);break}Pr(t,bt,_n);break;case 5:Pr(t,bt,_n);break;default:throw Error(x(329))}}}return Dt(t,Pe()),t.callbackNode===n?p1.bind(null,t):null}function cd(t,e){var n=qs;return t.current.memoizedState.isDehydrated&&(Hr(t,e).flags|=256),t=zl(t,e),t!==2&&(e=bt,bt=n,e!==null&&hd(e)),t}function hd(t){bt===null?bt=t:bt.push.apply(bt,t)}function eC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ln(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yn(t,e){for(e&=~Lf,e&=~xu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-sn(e),r=1<<n;t[n]=-1,e&=~r}}function Cg(t){if((oe&6)!==0)throw Error(x(327));Ui();var e=_l(t,0);if((e&1)===0)return Dt(t,Pe()),null;var n=zl(t,e);if(t.tag!==0&&n===2){var r=Lh(t);r!==0&&(e=r,n=cd(t,r))}if(n===1)throw n=ko,Hr(t,0),Yn(t,e),Dt(t,Pe()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Pr(t,bt,_n),Dt(t,Pe()),null}function Ff(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(Xi=Pe()+500,Su&&Tr())}}function Jr(t){nr!==null&&nr.tag===0&&(oe&6)===0&&Ui();var e=oe;oe|=1;var n=Gt.transition,r=me;try{if(Gt.transition=null,me=1,t)return t()}finally{me=r,Gt.transition=n,oe=e,(oe&6)===0&&Tr()}}function Uf(){$t=Ai.current,ke(Ai)}function Hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Nk(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(wf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Il();break;case 3:Qi(),ke(Rt),ke(mt),bf();break;case 5:If(r);break;case 4:Qi();break;case 13:ke(Ie);break;case 19:ke(Ie);break;case 10:kf(r.type._context);break;case 22:case 23:Uf()}n=n.return}if(Ge=t,Le=t=cr(t.current,null),rt=$t=e,ze=0,ko=null,Lf=xu=Xr=0,bt=qs=null,Mr!==null){for(e=0;e<Mr.length;e++)if(n=Mr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Mr=null}return t}function m1(t,e){do{var n=Le;try{if(_f(),rl.current=Ll,$l){for(var r=be.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}$l=!1}if(Yr=0,We=Ue=be=null,Gs=!1,Eo=0,$f.current=null,n===null||n.return===null){ze=1,ko=e,Le=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=rt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=hg(o);if(g!==null){g.flags&=-257,dg(g,o,a,s,e),g.mode&1&&cg(s,u,e),e=g,l=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(l),e.updateQueue=w}else v.add(l);break e}else{if((e&1)===0){cg(s,u,e),zf();break e}l=Error(x(426))}}else if(Ce&&a.mode&1){var _=hg(o);if(_!==null){(_.flags&65536)===0&&(_.flags|=256),dg(_,o,a,s,e),Ef(Yi(l,a));break e}}s=l=Yi(l,a),ze!==4&&(ze=2),qs===null?qs=[s]:qs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Jv(s,l,e);rg(s,p);break e;case 1:a=l;var f=s.type,m=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(lr===null||!lr.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Zv(s,a,e);rg(s,E);break e}}s=s.return}while(s!==null)}v1(n)}catch(C){e=C,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(1)}function g1(){var t=Ml.current;return Ml.current=Ll,t===null?Ll:t}function zf(){(ze===0||ze===3||ze===2)&&(ze=4),Ge===null||(Xr&268435455)===0&&(xu&268435455)===0||Yn(Ge,rt)}function zl(t,e){var n=oe;oe|=2;var r=g1();(Ge!==t||rt!==e)&&(_n=null,Hr(t,e));do try{tC();break}catch(i){m1(t,i)}while(1);if(_f(),oe=n,Ml.current=r,Le!==null)throw Error(x(261));return Ge=null,rt=0,ze}function tC(){for(;Le!==null;)y1(Le)}function nC(){for(;Le!==null&&!I_();)y1(Le)}function y1(t){var e=E1(t.alternate,t,$t);t.memoizedProps=t.pendingProps,e===null?v1(t):Le=e,$f.current=null}function v1(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=qk(n,e,$t),n!==null){Le=n;return}}else{if(n=Qk(n,e),n!==null){n.flags&=32767,Le=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ze=6,Le=null;return}}if(e=e.sibling,e!==null){Le=e;return}Le=e=t}while(e!==null);ze===0&&(ze=5)}function Pr(t,e,n){var r=me,i=Gt.transition;try{Gt.transition=null,me=1,rC(t,e,n,r)}finally{Gt.transition=i,me=r}return null}function rC(t,e,n,r){do Ui();while(nr!==null);if((oe&6)!==0)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(M_(t,s),t===Ge&&(Le=Ge=null,rt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ma||(Ma=!0,S1(Sl,function(){return Ui(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Gt.transition,Gt.transition=null;var o=me;me=1;var a=oe;oe|=4,$f.current=null,Xk(t,n),d1(n,t),kk(jh),kl=!!Vh,jh=Vh=null,t.current=n,Jk(n),b_(),oe=a,me=o,Gt.transition=s}else t.current=n;if(Ma&&(Ma=!1,nr=t,Ul=i),s=t.pendingLanes,s===0&&(lr=null),O_(n.stateNode),Dt(t,Pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Fl)throw Fl=!1,t=ld,ld=null,t;return(Ul&1)!==0&&t.tag!==0&&Ui(),s=t.pendingLanes,(s&1)!==0?t===ud?Qs++:(Qs=0,ud=t):Qs=0,Tr(),null}function Ui(){if(nr!==null){var t=Xy(Ul),e=Gt.transition,n=me;try{if(Gt.transition=null,me=16>t?16:t,nr===null)var r=!1;else{if(t=nr,nr=null,Ul=0,(oe&6)!==0)throw Error(x(331));var i=oe;for(oe|=4,U=t.current;U!==null;){var s=U,o=s.child;if((U.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(U=u;U!==null;){var c=U;switch(c.tag){case 0:case 11:case 15:Ks(8,c,s)}var h=c.child;if(h!==null)h.return=c,U=h;else for(;U!==null;){c=U;var d=c.sibling,g=c.return;if(u1(c),c===u){U=null;break}if(d!==null){d.return=g,U=d;break}U=g}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var _=w.sibling;w.sibling=null,w=_}while(w!==null)}}U=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,U=o;else e:for(;U!==null;){if(s=U,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Ks(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,U=p;break e}U=s.return}}var f=t.current;for(U=f;U!==null;){o=U;var m=o.child;if((o.subtreeFlags&2064)!==0&&m!==null)m.return=o,U=m;else e:for(o=f;U!==null;){if(a=U,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Cu(9,a)}}catch(C){Oe(a,a.return,C)}if(a===o){U=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,U=E;break e}U=a.return}}if(oe=i,Tr(),mn&&typeof mn.onPostCommitFiberRoot=="function")try{mn.onPostCommitFiberRoot(gu,t)}catch{}r=!0}return r}finally{me=n,Gt.transition=e}}return!1}function xg(t,e,n){e=Yi(n,e),e=Jv(t,e,1),t=ar(t,e,1),e=_t(),t!==null&&(jo(t,1,e),Dt(t,e))}function Oe(t,e,n){if(t.tag===3)xg(t,t,n);else for(;e!==null;){if(e.tag===3){xg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(lr===null||!lr.has(r))){t=Yi(n,t),t=Zv(e,t,1),e=ar(e,t,1),t=_t(),e!==null&&(jo(e,1,t),Dt(e,t));break}}e=e.return}}function iC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=_t(),t.pingedLanes|=t.suspendedLanes&n,Ge===t&&(rt&n)===n&&(ze===4||ze===3&&(rt&130023424)===rt&&500>Pe()-Mf?Hr(t,0):Lf|=n),Dt(t,e)}function w1(t,e){e===0&&((t.mode&1)===0?e=1:(e=Ia,Ia<<=1,(Ia&130023424)===0&&(Ia=4194304)));var n=_t();t=$n(t,e),t!==null&&(jo(t,e,n),Dt(t,n))}function sC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),w1(t,n)}function oC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),w1(t,n)}var E1;E1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Rt.current)Nt=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Nt=!1,Kk(t,e,n);Nt=(t.flags&131072)!==0}else Nt=!1,Ce&&(e.flags&1048576)!==0&&kv(e,Nl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;sl(t,e),t=e.pendingProps;var i=Gi(e,mt.current);Fi(e,n),i=Nf(null,e,r,t,i,n);var s=Of();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Pt(r)?(s=!0,bl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,xf(e),i.updater=_u,e.stateNode=i,i._reactInternals=e,Xh(e,r,t,n),e=ed(null,e,r,!0,s,n)):(e.tag=0,Ce&&s&&vf(e),vt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(sl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=lC(r),t=en(r,t),i){case 0:e=Zh(null,e,r,t,n);break e;case 1:e=mg(null,e,r,t,n);break e;case 11:e=fg(null,e,r,t,n);break e;case 14:e=pg(null,e,r,en(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:en(r,i),Zh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:en(r,i),mg(t,e,r,i,n);case 3:e:{if(r1(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Iv(t,e),Pl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Yi(Error(x(423)),e),e=gg(t,e,r,n,i);break e}else if(r!==i){i=Yi(Error(x(424)),e),e=gg(t,e,r,n,i);break e}else for(Lt=or(e.stateNode.containerInfo.firstChild),Mt=e,Ce=!0,nn=null,n=Ov(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ki(),r===i){e=Ln(t,e,n);break e}vt(t,e,r,n)}e=e.child}return e;case 5:return Rv(e),t===null&&qh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Bh(r,i)?o=null:s!==null&&Bh(r,s)&&(e.flags|=32),n1(t,e),vt(t,e,o,n),e.child;case 6:return t===null&&qh(e),null;case 13:return i1(t,e,n);case 4:return Tf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=qi(e,null,r,n):vt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:en(r,i),fg(t,e,r,i,n);case 7:return vt(t,e,e.pendingProps,n),e.child;case 8:return vt(t,e,e.pendingProps.children,n),e.child;case 12:return vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,we(Ol,r._currentValue),r._currentValue=o,s!==null)if(ln(s.value,o)){if(s.children===i.children&&!Rt.current){e=Ln(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=On(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Qh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Qh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}vt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Fi(e,n),i=Qt(i),r=r(i),e.flags|=1,vt(t,e,r,n),e.child;case 14:return r=e.type,i=en(r,e.pendingProps),i=en(r.type,i),pg(t,e,r,i,n);case 15:return e1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:en(r,i),sl(t,e),e.tag=1,Pt(r)?(t=!0,bl(e)):t=!1,Fi(e,n),Av(e,r,i),Xh(e,r,i,n),ed(null,e,r,!0,t,n);case 19:return s1(t,e,n);case 22:return t1(t,e,n)}throw Error(x(156,e.tag))};function S1(t,e){return Ky(t,e)}function aC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wt(t,e,n,r){return new aC(t,e,n,r)}function Vf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function lC(t){if(typeof t=="function")return Vf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===of)return 11;if(t===af)return 14}return 2}function cr(t,e){var n=t.alternate;return n===null?(n=Wt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ll(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Vf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case wi:return Wr(n.children,i,s,e);case sf:o=8,i|=8;break;case Sh:return t=Wt(12,n,e,i|2),t.elementType=Sh,t.lanes=s,t;case _h:return t=Wt(13,n,e,i),t.elementType=_h,t.lanes=s,t;case kh:return t=Wt(19,n,e,i),t.elementType=kh,t.lanes=s,t;case Ny:return Tu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case by:o=10;break e;case Ay:o=9;break e;case of:o=11;break e;case af:o=14;break e;case Kn:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=Wt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Wr(t,e,n,r){return t=Wt(7,t,r,e),t.lanes=n,t}function Tu(t,e,n,r){return t=Wt(22,t,r,e),t.elementType=Ny,t.lanes=n,t.stateNode={isHidden:!1},t}function Qc(t,e,n){return t=Wt(6,t,null,e),t.lanes=n,t}function Yc(t,e,n){return e=Wt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function uC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nc(0),this.expirationTimes=Nc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function jf(t,e,n,r,i,s,o,a,l){return t=new uC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Wt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xf(s),t}function cC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function _1(t){if(!t)return wr;t=t._reactInternals;e:{if(ui(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Pt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(Pt(n))return Sv(t,n,e)}return e}function k1(t,e,n,r,i,s,o,a,l){return t=jf(n,r,!0,t,i,s,o,a,l),t.context=_1(null),n=t.current,r=_t(),i=ur(n),s=On(r,i),s.callback=e!=null?e:null,ar(n,s,i),t.current.lanes=i,jo(t,i,r),Dt(t,r),t}function Iu(t,e,n,r){var i=e.current,s=_t(),o=ur(i);return n=_1(n),e.context===null?e.context=n:e.pendingContext=n,e=On(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ar(i,e,o),t!==null&&(on(t,i,o,s),nl(t,i,o)),o}function Vl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Tg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Bf(t,e){Tg(t,e),(t=t.alternate)&&Tg(t,e)}function hC(){return null}var C1=typeof reportError=="function"?reportError:function(t){console.error(t)};function Hf(t){this._internalRoot=t}bu.prototype.render=Hf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));Iu(t,e,null,null)};bu.prototype.unmount=Hf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Jr(function(){Iu(null,t,null,null)}),e[Dn]=null}};function bu(t){this._internalRoot=t}bu.prototype.unstable_scheduleHydration=function(t){if(t){var e=ev();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qn.length&&e!==0&&e<Qn[n].priority;n++);Qn.splice(n,0,t),n===0&&nv(t)}};function Wf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Au(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ig(){}function dC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Vl(o);s.call(u)}}var o=k1(e,r,t,0,null,!1,!1,"",Ig);return t._reactRootContainer=o,t[Dn]=o.current,mo(t.nodeType===8?t.parentNode:t),Jr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Vl(l);a.call(u)}}var l=jf(t,0,!1,null,null,!1,!1,"",Ig);return t._reactRootContainer=l,t[Dn]=l.current,mo(t.nodeType===8?t.parentNode:t),Jr(function(){Iu(e,l,n,r)}),l}function Nu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Vl(o);a.call(l)}}Iu(e,o,t,i)}else o=dC(n,e,t,i,r);return Vl(o)}Jy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=$s(e.pendingLanes);n!==0&&(cf(e,n|1),Dt(e,Pe()),(oe&6)===0&&(Xi=Pe()+500,Tr()))}break;case 13:Jr(function(){var r=$n(t,1);if(r!==null){var i=_t();on(r,t,1,i)}}),Bf(t,1)}};hf=function(t){if(t.tag===13){var e=$n(t,134217728);if(e!==null){var n=_t();on(e,t,134217728,n)}Bf(t,134217728)}};Zy=function(t){if(t.tag===13){var e=ur(t),n=$n(t,e);if(n!==null){var r=_t();on(n,t,e,r)}Bf(t,e)}};ev=function(){return me};tv=function(t,e){var n=me;try{return me=t,e()}finally{me=n}};Ph=function(t,e,n){switch(e){case"input":if(Th(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Eu(r);if(!i)throw Error(x(90));Ry(r),Th(r,i)}}}break;case"textarea":Dy(t,n);break;case"select":e=n.value,e!=null&&Di(t,!!n.multiple,e,!1)}};Vy=Ff;jy=Jr;var fC={usingClientEntryPoint:!1,Events:[Ho,ki,Eu,Uy,zy,Ff]},Ns={findFiberByHostInstance:Lr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},pC={bundleType:Ns.bundleType,version:Ns.version,rendererPackageName:Ns.rendererPackageName,rendererConfig:Ns.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Wy(t),t===null?null:t.stateNode},findFiberByHostInstance:Ns.findFiberByHostInstance||hC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fa.isDisabled&&Fa.supportsFiber)try{gu=Fa.inject(pC),mn=Fa}catch{}}zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fC;zt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wf(e))throw Error(x(200));return cC(t,e,null,n)};zt.createRoot=function(t,e){if(!Wf(t))throw Error(x(299));var n=!1,r="",i=C1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=jf(t,1,!1,null,null,n,!1,r,i),t[Dn]=e.current,mo(t.nodeType===8?t.parentNode:t),new Hf(e)};zt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=Wy(e),t=t===null?null:t.stateNode,t};zt.flushSync=function(t){return Jr(t)};zt.hydrate=function(t,e,n){if(!Au(e))throw Error(x(200));return Nu(null,t,e,!0,n)};zt.hydrateRoot=function(t,e,n){if(!Wf(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=C1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=k1(e,null,t,1,n!=null?n:null,i,!1,s,o),t[Dn]=e.current,mo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new bu(e)};zt.render=function(t,e,n){if(!Au(e))throw Error(x(200));return Nu(null,t,e,!1,n)};zt.unmountComponentAtNode=function(t){if(!Au(t))throw Error(x(40));return t._reactRootContainer?(Jr(function(){Nu(null,null,t,!1,function(){t._reactRootContainer=null,t[Dn]=null})}),!0):!1};zt.unstable_batchedUpdates=Ff;zt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Au(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return Nu(t,e,n,!1,r)};zt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=zt})(ky);var bg=ky.exports;wh.createRoot=bg.createRoot,wh.hydrateRoot=bg.hydrateRoot;function jl(){return jl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},jl.apply(this,arguments)}var Ur;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ur||(Ur={}));var Ag=function(t){return t},Ng="beforeunload",mC="hashchange",gC="popstate";function yC(t){t===void 0&&(t={});var e=t,n=e.window,r=n===void 0?document.defaultView:n,i=r.history;function s(){var k=Er(r.location.hash.substr(1)),L=k.pathname,V=L===void 0?"/":L,ae=k.search,fe=ae===void 0?"":ae,ye=k.hash,Fe=ye===void 0?"":ye,Se=i.state||{};return[Se.idx,Ag({pathname:V,search:fe,hash:Fe,state:Se.usr||null,key:Se.key||"default"})]}var o=null;function a(){if(o)g.call(o),o=null;else{var k=Ur.Pop,L=s(),V=L[0],ae=L[1];if(g.length){if(V!=null){var fe=c-V;fe&&(o={action:k,location:ae,retry:function(){A(fe*-1)}},A(fe))}}else m(k)}}r.addEventListener(gC,a),r.addEventListener(mC,function(){var k=s(),L=k[1];Ys(L)!==Ys(h)&&a()});var l=Ur.Pop,u=s(),c=u[0],h=u[1],d=Rg(),g=Rg();c==null&&(c=0,i.replaceState(jl({},i.state,{idx:c}),""));function v(){var k=document.querySelector("base"),L="";if(k&&k.getAttribute("href")){var V=r.location.href,ae=V.indexOf("#");L=ae===-1?V:V.slice(0,ae)}return L}function w(k){return v()+"#"+(typeof k=="string"?k:Ys(k))}function _(k,L){return L===void 0&&(L=null),Ag(jl({pathname:h.pathname,hash:"",search:""},typeof k=="string"?Er(k):k,{state:L,key:vC()}))}function p(k,L){return[{usr:k.state,key:k.key,idx:L},w(k)]}function f(k,L,V){return!g.length||(g.call({action:k,location:L,retry:V}),!1)}function m(k){l=k;var L=s();c=L[0],h=L[1],d.call({action:l,location:h})}function E(k,L){var V=Ur.Push,ae=_(k,L);function fe(){E(k,L)}if(f(V,ae,fe)){var ye=p(ae,c+1),Fe=ye[0],Se=ye[1];try{i.pushState(Fe,"",Se)}catch{r.location.assign(Se)}m(V)}}function C(k,L){var V=Ur.Replace,ae=_(k,L);function fe(){C(k,L)}if(f(V,ae,fe)){var ye=p(ae,c),Fe=ye[0],Se=ye[1];i.replaceState(Fe,"",Se),m(V)}}function A(k){i.go(k)}var $={get action(){return l},get location(){return h},createHref:w,push:E,replace:C,go:A,back:function(){A(-1)},forward:function(){A(1)},listen:function(L){return d.push(L)},block:function(L){var V=g.push(L);return g.length===1&&r.addEventListener(Ng,Og),function(){V(),g.length||r.removeEventListener(Ng,Og)}}};return $}function Og(t){t.preventDefault(),t.returnValue=""}function Rg(){var t=[];return{get length(){return t.length},push:function(n){return t.push(n),function(){t=t.filter(function(r){return r!==n})}},call:function(n){t.forEach(function(r){return r&&r(n)})}}}function vC(){return Math.random().toString(36).substr(2,8)}function Ys(t){var e=t.pathname,n=e===void 0?"/":e,r=t.search,i=r===void 0?"":r,s=t.hash,o=s===void 0?"":s;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function Er(t){var e={};if(t){var n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));var r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Gf=b.exports.createContext(null),Kf=b.exports.createContext(null),Go=b.exports.createContext({outlet:null,matches:[]});function un(t,e){if(!t)throw new Error(e)}function wC(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Er(e):e,i=I1(r.pathname||"/",n);if(i==null)return null;let s=x1(t);EC(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=AC(s[a],i);return o}function x1(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(r)||un(!1),o.relativePath=o.relativePath.slice(r.length));let a=hr([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(i.index===!0&&un(!1),x1(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:IC(a,i.index),routesMeta:l})}),e}function EC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:bC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const SC=/^:\w+$/,_C=3,kC=2,CC=1,xC=10,TC=-2,Pg=t=>t==="*";function IC(t,e){let n=t.split("/"),r=n.length;return n.some(Pg)&&(r+=TC),e&&(r+=kC),n.filter(i=>!Pg(i)).reduce((i,s)=>i+(SC.test(s)?_C:s===""?CC:xC),r)}function bC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function AC(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=NC({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:hr([i,c.pathname]),pathnameBase:b1(hr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=hr([i,c.pathnameBase]))}return s}function NC(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=OC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=RC(a[h]||""),u},{}),pathname:s,pathnameBase:o,pattern:t}}function OC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,e?void 0:"i"),r]}function RC(t,e){try{return decodeURIComponent(t)}catch{return t}}function PC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Er(t):t;return{pathname:n?n.startsWith("/")?n:DC(n,e):e,search:LC(r),hash:MC(i)}}function DC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function T1(t,e,n){let r=typeof t=="string"?Er(t):t,i=t===""||r.pathname===""?"/":r.pathname,s;if(i==null)s=n;else{let a=e.length-1;if(i.startsWith("..")){let l=i.split("/");for(;l[0]==="..";)l.shift(),a-=1;r.pathname=l.join("/")}s=a>=0?e[a]:"/"}let o=PC(r,s);return i&&i!=="/"&&i.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function $C(t){return t===""||t.pathname===""?"/":typeof t=="string"?Er(t).pathname:t.pathname}function I1(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&n!=="/"?null:t.slice(e.length)||"/"}const hr=t=>t.join("/").replace(/\/\/+/g,"/"),b1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),LC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,MC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function FC(t){fs()||un(!1);let{basename:e,navigator:n}=b.exports.useContext(Gf),{hash:r,pathname:i,search:s}=A1(t),o=i;if(e!=="/"){let a=$C(t),l=a!=null&&a.endsWith("/");o=i==="/"?e+(l?"/":""):hr([e,i])}return n.createHref({pathname:o,search:s,hash:r})}function fs(){return b.exports.useContext(Kf)!=null}function Ou(){return fs()||un(!1),b.exports.useContext(Kf).location}function En(){fs()||un(!1);let{basename:t,navigator:e}=b.exports.useContext(Gf),{matches:n}=b.exports.useContext(Go),{pathname:r}=Ou(),i=JSON.stringify(n.map(a=>a.pathnameBase)),s=b.exports.useRef(!1);return b.exports.useEffect(()=>{s.current=!0}),b.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=T1(a,JSON.parse(i),r);t!=="/"&&(u.pathname=hr([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state)},[t,e,i,r])}function UC(){let{matches:t}=b.exports.useContext(Go),e=t[t.length-1];return e?e.params:{}}function A1(t){let{matches:e}=b.exports.useContext(Go),{pathname:n}=Ou(),r=JSON.stringify(e.map(i=>i.pathnameBase));return b.exports.useMemo(()=>T1(t,JSON.parse(r),n),[t,r,n])}function zC(t,e){fs()||un(!1);let{matches:n}=b.exports.useContext(Go),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let s=r?r.pathnameBase:"/";r&&r.route;let o=Ou(),a;if(e){var l;let d=typeof e=="string"?Er(e):e;s==="/"||((l=d.pathname)==null?void 0:l.startsWith(s))||un(!1),a=d}else a=o;let u=a.pathname||"/",c=s==="/"?u:u.slice(s.length)||"/",h=wC(t,{pathname:c});return VC(h&&h.map(d=>Object.assign({},d,{params:Object.assign({},i,d.params),pathname:hr([s,d.pathname]),pathnameBase:d.pathnameBase==="/"?s:hr([s,d.pathnameBase])})),n)}function VC(t,e){return e===void 0&&(e=[]),t==null?null:t.reduceRight((n,r,i)=>b.exports.createElement(Go.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:e.concat(t.slice(0,i+1))}}),null)}function jC(t){let{to:e,replace:n,state:r}=t;fs()||un(!1);let i=En();return b.exports.useEffect(()=>{i(e,{replace:n,state:r})}),null}function gi(t){un(!1)}function BC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ur.Pop,navigator:s,static:o=!1}=t;fs()&&un(!1);let a=b1(e),l=b.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Er(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:g="default"}=r,v=b.exports.useMemo(()=>{let w=I1(u,a);return w==null?null:{pathname:w,search:c,hash:h,state:d,key:g}},[a,u,c,h,d,g]);return v==null?null:b.exports.createElement(Gf.Provider,{value:l},b.exports.createElement(Kf.Provider,{children:n,value:{location:v,navigationType:i}}))}function HC(t){let{children:e,location:n}=t;return zC(dd(e),n)}function dd(t){let e=[];return b.exports.Children.forEach(t,n=>{if(!b.exports.isValidElement(n))return;if(n.type===b.exports.Fragment){e.push.apply(e,dd(n.props.children));return}n.type!==gi&&un(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=dd(n.props.children)),e.push(r)}),e}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fd(){return fd=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fd.apply(this,arguments)}function WC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const GC=["onClick","reloadDocument","replace","state","target","to"];function KC(t){let{basename:e,children:n,window:r}=t,i=b.exports.useRef();i.current==null&&(i.current=yC({window:r}));let s=i.current,[o,a]=b.exports.useState({action:s.action,location:s.location});return b.exports.useLayoutEffect(()=>s.listen(a),[s]),b.exports.createElement(BC,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}function qC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}const Ko=b.exports.forwardRef(function(e,n){let{onClick:r,reloadDocument:i,replace:s=!1,state:o,target:a,to:l}=e,u=WC(e,GC),c=FC(l),h=QC(l,{replace:s,state:o,target:a});function d(g){r&&r(g),!g.defaultPrevented&&!i&&h(g)}return b.exports.createElement("a",fd({},u,{href:c,onClick:d,ref:n,target:a}))});function QC(t,e){let{target:n,replace:r,state:i}=e===void 0?{}:e,s=En(),o=Ou(),a=A1(t);return b.exports.useCallback(l=>{if(l.button===0&&(!n||n==="_self")&&!qC(l)){l.preventDefault();let u=!!r||Ys(o)===Ys(a);s(t,{replace:u,state:i})}},[o,s,a,r,i,n,t])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},YC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},O1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(n[c],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(N1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):YC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},XC=function(t){const e=N1(t);return O1.encodeByteArray(e,!0)},R1=function(t){return XC(t).replace(/\./g,"")},JC=function(t){try{return O1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function P1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ke())}function D1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ex(){return Ke().indexOf("Electron/")>=0}function L1(){const t=Ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tx(){return Ke().indexOf("MSAppHost/")>=0}function nx(){return typeof indexedDB=="object"}function rx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ix="FirebaseError";class Bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ix,Object.setPrototypeOf(this,Bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qo.prototype.create)}}class qo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?sx(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Bn(i,a,r)}}function sx(t,e){return t.replace(ox,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ox=/\{\$([^}]+)}/g;function ax(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Bl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Dg(s)&&Dg(o)){if(!Bl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Dg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ms(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Fs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function lx(t,e){const n=new ux(t,e);return n.subscribe.bind(n)}class ux{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");cx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Xc),i.error===void 0&&(i.error=Xc),i.complete===void 0&&(i.complete=Xc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t){return t&&t._delegate?t._delegate:t}class Zr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ZC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fx(e))try{this.getOrInitializeService({instanceIdentifier:Dr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Dr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dr){return this.instances.has(e)}getOptions(e=Dr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Dr){return this.component?this.component.multipleInstances?e:Dr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dx(t){return t===Dr?void 0:t}function fx(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const mx={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},gx=ue.INFO,yx={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},vx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=yx[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qf{constructor(e){this.name=e,this._logLevel=gx,this._logHandler=vx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const wx=(t,e)=>e.some(n=>t instanceof n);let $g,Lg;function Ex(){return $g||($g=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sx(){return Lg||(Lg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const M1=new WeakMap,pd=new WeakMap,F1=new WeakMap,Jc=new WeakMap,Qf=new WeakMap;function _x(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(dr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&M1.set(n,t)}).catch(()=>{}),Qf.set(e,t),e}function kx(t){if(pd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});pd.set(t,e)}let md={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||F1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Cx(t){md=t(md)}function xx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Zc(this),e,...n);return F1.set(r,e.sort?e.sort():[e]),dr(r)}:Sx().includes(t)?function(...e){return t.apply(Zc(this),e),dr(M1.get(this))}:function(...e){return dr(t.apply(Zc(this),e))}}function Tx(t){return typeof t=="function"?xx(t):(t instanceof IDBTransaction&&kx(t),wx(t,Ex())?new Proxy(t,md):t)}function dr(t){if(t instanceof IDBRequest)return _x(t);if(Jc.has(t))return Jc.get(t);const e=Tx(t);return e!==t&&(Jc.set(t,e),Qf.set(e,t)),e}const Zc=t=>Qf.get(t);function Ix(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=dr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(dr(o.result),l.oldVersion,l.newVersion,dr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const bx=["get","getKey","getAll","getAllKeys","count"],Ax=["put","add","delete","clear"],eh=new Map;function Mg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(eh.get(e))return eh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Ax.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||bx.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return eh.set(e,s),s}Cx(t=>({...t,get:(e,n,r)=>Mg(e,n)||t.get(e,n,r),has:(e,n)=>!!Mg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ox(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ox(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gd="@firebase/app",Fg="0.7.32";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=new qf("@firebase/app"),Rx="@firebase/app-compat",Px="@firebase/analytics-compat",Dx="@firebase/analytics",$x="@firebase/app-check-compat",Lx="@firebase/app-check",Mx="@firebase/auth",Fx="@firebase/auth-compat",Ux="@firebase/database",zx="@firebase/database-compat",Vx="@firebase/functions",jx="@firebase/functions-compat",Bx="@firebase/installations",Hx="@firebase/installations-compat",Wx="@firebase/messaging",Gx="@firebase/messaging-compat",Kx="@firebase/performance",qx="@firebase/performance-compat",Qx="@firebase/remote-config",Yx="@firebase/remote-config-compat",Xx="@firebase/storage",Jx="@firebase/storage-compat",Zx="@firebase/firestore",eT="@firebase/firestore-compat",tT="firebase",nT="9.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1="[DEFAULT]",rT={[gd]:"fire-core",[Rx]:"fire-core-compat",[Dx]:"fire-analytics",[Px]:"fire-analytics-compat",[Lx]:"fire-app-check",[$x]:"fire-app-check-compat",[Mx]:"fire-auth",[Fx]:"fire-auth-compat",[Ux]:"fire-rtdb",[zx]:"fire-rtdb-compat",[Vx]:"fire-fn",[jx]:"fire-fn-compat",[Bx]:"fire-iid",[Hx]:"fire-iid-compat",[Wx]:"fire-fcm",[Gx]:"fire-fcm-compat",[Kx]:"fire-perf",[qx]:"fire-perf-compat",[Qx]:"fire-rc",[Yx]:"fire-rc-compat",[Xx]:"fire-gcs",[Jx]:"fire-gcs-compat",[Zx]:"fire-fst",[eT]:"fire-fst-compat","fire-js":"fire-js",[tT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=new Map,yd=new Map;function iT(t,e){try{t.container.addComponent(e)}catch(n){ei.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ji(t){const e=t.name;if(yd.has(e))return ei.debug(`There were multiple attempts to register component ${e}.`),!1;yd.set(e,t);for(const n of Hl.values())iT(n,t);return!0}function Yf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ti=new qo("app","Firebase",sT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ti.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo=nT;function aT(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:U1,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw ti.create("bad-app-name",{appName:String(r)});const i=Hl.get(r);if(i){if(Bl(t,i.options)&&Bl(n,i.config))return i;throw ti.create("duplicate-app",{appName:r})}const s=new px(r);for(const a of yd.values())s.addComponent(a);const o=new oT(t,n,s);return Hl.set(r,o),o}function z1(t=U1){const e=Hl.get(t);if(!e)throw ti.create("no-app",{appName:t});return e}function fr(t,e,n){var r;let i=(r=rT[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ei.warn(a.join(" "));return}Ji(new Zr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT="firebase-heartbeat-database",uT=1,Co="firebase-heartbeat-store";let th=null;function V1(){return th||(th=Ix(lT,uT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Co)}}}).catch(t=>{throw ti.create("idb-open",{originalErrorMessage:t.message})})),th}async function cT(t){var e;try{return(await V1()).transaction(Co).objectStore(Co).get(j1(t))}catch(n){if(n instanceof Bn)ei.warn(n.message);else{const r=ti.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});ei.warn(r.message)}}}async function Ug(t,e){var n;try{const i=(await V1()).transaction(Co,"readwrite");return await i.objectStore(Co).put(e,j1(t)),i.done}catch(r){if(r instanceof Bn)ei.warn(r.message);else{const i=ti.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});ei.warn(i.message)}}}function j1(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT=1024,dT=30*24*60*60*1e3;class fT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=zg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=dT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=zg(),{heartbeatsToSend:n,unsentEntries:r}=pT(this._heartbeatsCache.heartbeats),i=R1(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function zg(){return new Date().toISOString().substring(0,10)}function pT(t,e=hT){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Vg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Vg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class mT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nx()?rx().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await cT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ug(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ug(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Vg(t){return R1(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(t){Ji(new Zr("platform-logger",e=>new Nx(e),"PRIVATE")),Ji(new Zr("heartbeat",e=>new fT(e),"PRIVATE")),fr(gd,Fg,t),fr(gd,Fg,"esm2017"),fr("fire-js","")}gT("");var yT="firebase",vT="9.9.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fr(yT,vT,"app");var wT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},z,Xf=Xf||{},Y=wT||self;function Wl(){}function vd(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Xo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ET(t){return Object.prototype.hasOwnProperty.call(t,nh)&&t[nh]||(t[nh]=++ST)}var nh="closure_uid_"+(1e9*Math.random()>>>0),ST=0;function _T(t,e,n){return t.call.apply(t.bind,arguments)}function kT(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function it(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?it=_T:it=kT,it.apply(null,arguments)}function Ua(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function lt(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Ir(){this.s=this.s,this.o=this.o}var CT=0;Ir.prototype.s=!1;Ir.prototype.na=function(){!this.s&&(this.s=!0,this.M(),CT!=0)&&ET(this)};Ir.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const B1=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},H1=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function xT(t){e:{var e=gI;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function jg(t){return Array.prototype.concat.apply([],arguments)}function Jf(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Gl(t){return/^[\s\xa0]*$/.test(t)}var Bg=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function wt(t,e){return t.indexOf(e)!=-1}function rh(t,e){return t<e?-1:t>e?1:0}var Et;e:{var Hg=Y.navigator;if(Hg){var Wg=Hg.userAgent;if(Wg){Et=Wg;break e}}Et=""}function Zf(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function W1(t){const e={};for(const n in t)e[n]=t[n];return e}var Gg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function G1(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Gg.length;s++)n=Gg[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ep(t){return ep[" "](t),t}ep[" "]=Wl;function TT(t){var e=AT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var IT=wt(Et,"Opera"),Zi=wt(Et,"Trident")||wt(Et,"MSIE"),K1=wt(Et,"Edge"),wd=K1||Zi,q1=wt(Et,"Gecko")&&!(wt(Et.toLowerCase(),"webkit")&&!wt(Et,"Edge"))&&!(wt(Et,"Trident")||wt(Et,"MSIE"))&&!wt(Et,"Edge"),bT=wt(Et.toLowerCase(),"webkit")&&!wt(Et,"Edge");function Q1(){var t=Y.document;return t?t.documentMode:void 0}var Kl;e:{var ih="",sh=function(){var t=Et;if(q1)return/rv:([^\);]+)(\)|;)/.exec(t);if(K1)return/Edge\/([\d\.]+)/.exec(t);if(Zi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(bT)return/WebKit\/(\S+)/.exec(t);if(IT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(sh&&(ih=sh?sh[1]:""),Zi){var oh=Q1();if(oh!=null&&oh>parseFloat(ih)){Kl=String(oh);break e}}Kl=ih}var AT={};function NT(){return TT(function(){let t=0;const e=Bg(String(Kl)).split("."),n=Bg("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=rh(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||rh(i[2].length==0,s[2].length==0)||rh(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Ed;if(Y.document&&Zi){var Kg=Q1();Ed=Kg||parseInt(Kl,10)||void 0}else Ed=void 0;var OT=Ed,RT=function(){if(!Y.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Y.addEventListener("test",Wl,e),Y.removeEventListener("test",Wl,e)}catch{}return t}();function pt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}pt.prototype.h=function(){this.defaultPrevented=!0};function xo(t,e){if(pt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(q1){e:{try{ep(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:PT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&xo.Z.h.call(this)}}lt(xo,pt);var PT={2:"touch",3:"pen",4:"mouse"};xo.prototype.h=function(){xo.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Jo="closure_listenable_"+(1e6*Math.random()|0),DT=0;function $T(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++DT,this.ca=this.fa=!1}function Ru(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Pu(t){this.src=t,this.g={},this.h=0}Pu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=_d(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new $T(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function Sd(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=B1(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ru(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function _d(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var tp="closure_lm_"+(1e6*Math.random()|0),ah={};function Y1(t,e,n,r,i){if(r&&r.once)return J1(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Y1(t,e[s],n,r,i);return null}return n=ip(n),t&&t[Jo]?t.N(e,n,Xo(r)?!!r.capture:!!r,i):X1(t,e,n,!1,r,i)}function X1(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Xo(i)?!!i.capture:!!i,a=rp(t);if(a||(t[tp]=a=new Pu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=LT(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)RT||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(ew(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function LT(){function t(n){return e.call(t.src,t.listener,n)}var e=MT;return t}function J1(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)J1(t,e[s],n,r,i);return null}return n=ip(n),t&&t[Jo]?t.O(e,n,Xo(r)?!!r.capture:!!r,i):X1(t,e,n,!0,r,i)}function Z1(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Z1(t,e[s],n,r,i);else r=Xo(r)?!!r.capture:!!r,n=ip(n),t&&t[Jo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=_d(s,n,r,i),-1<n&&(Ru(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=rp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=_d(e,n,r,i)),(n=-1<t?e[t]:null)&&np(n))}function np(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Jo])Sd(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(ew(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=rp(e))?(Sd(n,t),n.h==0&&(n.src=null,e[tp]=null)):Ru(t)}}}function ew(t){return t in ah?ah[t]:ah[t]="on"+t}function MT(t,e){if(t.ca)t=!0;else{e=new xo(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&np(t),t=n.call(r,e)}return t}function rp(t){return t=t[tp],t instanceof Pu?t:null}var lh="__closure_events_fn_"+(1e9*Math.random()>>>0);function ip(t){return typeof t=="function"?t:(t[lh]||(t[lh]=function(e){return t.handleEvent(e)}),t[lh])}function qe(){Ir.call(this),this.i=new Pu(this),this.P=this,this.I=null}lt(qe,Ir);qe.prototype[Jo]=!0;qe.prototype.removeEventListener=function(t,e,n,r){Z1(this,t,e,n,r)};function st(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new pt(e,t);else if(e instanceof pt)e.target=e.target||t;else{var i=e;e=new pt(r,t),G1(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=za(o,r,!0,e)&&i}if(o=e.g=t,i=za(o,r,!0,e)&&i,i=za(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=za(o,r,!1,e)&&i}qe.prototype.M=function(){if(qe.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ru(n[r]);delete t.g[e],t.h--}}this.I=null};qe.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};qe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function za(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&Sd(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var sp=Y.JSON.stringify;function FT(){var t=nw;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class UT{constructor(){this.h=this.g=null}add(e,n){const r=tw.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var tw=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new zT,t=>t.reset());class zT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function VT(t){Y.setTimeout(()=>{throw t},0)}function op(t,e){kd||jT(),Cd||(kd(),Cd=!0),nw.add(t,e)}var kd;function jT(){var t=Y.Promise.resolve(void 0);kd=function(){t.then(BT)}}var Cd=!1,nw=new UT;function BT(){for(var t;t=FT();){try{t.h.call(t.g)}catch(n){VT(n)}var e=tw;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Cd=!1}function Du(t,e){qe.call(this),this.h=t||1,this.g=e||Y,this.j=it(this.kb,this),this.l=Date.now()}lt(Du,qe);z=Du.prototype;z.da=!1;z.S=null;z.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),st(this,"tick"),this.da&&(ap(this),this.start()))}};z.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ap(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}z.M=function(){Du.Z.M.call(this),ap(this),delete this.g};function lp(t,e,n){if(typeof t=="function")n&&(t=it(t,n));else if(t&&typeof t.handleEvent=="function")t=it(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Y.setTimeout(t,e||0)}function rw(t){t.g=lp(()=>{t.g=null,t.i&&(t.i=!1,rw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class HT extends Ir{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:rw(this)}M(){super.M(),this.g&&(Y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function To(t){Ir.call(this),this.h=t,this.g={}}lt(To,Ir);var qg=[];function iw(t,e,n,r){Array.isArray(n)||(n&&(qg[0]=n.toString()),n=qg);for(var i=0;i<n.length;i++){var s=Y1(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function sw(t){Zf(t.g,function(e,n){this.g.hasOwnProperty(n)&&np(e)},t),t.g={}}To.prototype.M=function(){To.Z.M.call(this),sw(this)};To.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function $u(){this.g=!0}$u.prototype.Aa=function(){this.g=!1};function WT(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function GT(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ni(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+qT(t,n)+(r?" "+r:"")})}function KT(t,e){t.info(function(){return"TIMEOUT: "+e})}$u.prototype.info=function(){};function qT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return sp(n)}catch{return e}}var ci={},Qg=null;function Lu(){return Qg=Qg||new qe}ci.Ma="serverreachability";function ow(t){pt.call(this,ci.Ma,t)}lt(ow,pt);function Io(t){const e=Lu();st(e,new ow(e))}ci.STAT_EVENT="statevent";function aw(t,e){pt.call(this,ci.STAT_EVENT,t),this.stat=e}lt(aw,pt);function St(t){const e=Lu();st(e,new aw(e,t))}ci.Na="timingevent";function lw(t,e){pt.call(this,ci.Na,t),this.size=e}lt(lw,pt);function Zo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Y.setTimeout(function(){t()},e)}var Mu={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},uw={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function up(){}up.prototype.h=null;function Yg(t){return t.h||(t.h=t.i())}function cw(){}var ea={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function cp(){pt.call(this,"d")}lt(cp,pt);function hp(){pt.call(this,"c")}lt(hp,pt);var xd;function Fu(){}lt(Fu,up);Fu.prototype.g=function(){return new XMLHttpRequest};Fu.prototype.i=function(){return{}};xd=new Fu;function ta(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new To(this),this.P=QT,t=wd?125:void 0,this.W=new Du(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new hw}function hw(){this.i=null,this.g="",this.h=!1}var QT=45e3,Td={},ql={};z=ta.prototype;z.setTimeout=function(t){this.P=t};function Id(t,e,n){t.K=1,t.v=zu(Mn(e)),t.s=n,t.U=!0,dw(t,null)}function dw(t,e){t.F=Date.now(),na(t),t.A=Mn(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),ww(n.h,"t",r),t.C=0,n=t.l.H,t.h=new hw,t.g=Uw(t.l,n?e:null,!t.s),0<t.O&&(t.L=new HT(it(t.Ia,t,t.g),t.O)),iw(t.V,t.g,"readystatechange",t.gb),e=t.H?W1(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Io(),WT(t.j,t.u,t.A,t.m,t.X,t.s)}z.gb=function(t){t=t.target;const e=this.L;e&&In(t)==3?e.l():this.Ia(t)};z.Ia=function(t){try{if(t==this.g)e:{const c=In(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||wd||this.g&&(this.h.h||this.g.ga()||e0(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?Io(3):Io(2)),Uu(this);var n=this.g.ba();this.N=n;t:if(fw(this)){var r=e0(this.g);t="";var i=r.length,s=In(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){zr(this),Xs(this);var o="";break t}this.h.i=new Y.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,GT(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Gl(a)){var u=a;break t}}u=null}if(n=u)Ni(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,bd(this,n);else{this.i=!1,this.o=3,St(12),zr(this),Xs(this);break e}}this.U?(pw(this,c,o),wd&&this.i&&c==3&&(iw(this.V,this.W,"tick",this.fb),this.W.start())):(Ni(this.j,this.m,o,null),bd(this,o)),c==4&&zr(this),this.i&&!this.I&&(c==4?$w(this.l,this):(this.i=!1,na(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,St(12)):(this.o=0,St(13)),zr(this),Xs(this)}}}catch{}finally{}};function fw(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function pw(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=YT(t,n),i==ql){e==4&&(t.o=4,St(14),r=!1),Ni(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Td){t.o=4,St(15),Ni(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ni(t.j,t.m,i,null),bd(t,i);fw(t)&&i!=ql&&i!=Td&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,St(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ep(e),e.L=!0,St(11))):(Ni(t.j,t.m,n,"[Invalid Chunked Response]"),zr(t),Xs(t))}z.fb=function(){if(this.g){var t=In(this.g),e=this.g.ga();this.C<e.length&&(Uu(this),pw(this,t,e),this.i&&t!=4&&na(this))}};function YT(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?ql:(n=Number(e.substring(n,r)),isNaN(n)?Td:(r+=1,r+n>e.length?ql:(e=e.substr(r,n),t.C=r+n,e)))}z.cancel=function(){this.I=!0,zr(this)};function na(t){t.Y=Date.now()+t.P,mw(t,t.P)}function mw(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Zo(it(t.eb,t),e)}function Uu(t){t.B&&(Y.clearTimeout(t.B),t.B=null)}z.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(KT(this.j,this.A),this.K!=2&&(Io(),St(17)),zr(this),this.o=2,Xs(this)):mw(this,this.Y-t)};function Xs(t){t.l.G==0||t.I||$w(t.l,t)}function zr(t){Uu(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ap(t.W),sw(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function bd(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Ad(n.i,t))){if(n.I=t.N,!t.J&&Ad(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Jl(n),Bu(n);else break e;wp(n),St(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Zo(it(n.ab,n),6e3));if(1>=_w(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Vr(n,11)}else if((t.J||n.g==t)&&Jl(n),!Gl(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const c=u[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;!s.g&&(wt(v,"spdy")||wt(v,"quic")||wt(v,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(pp(s,s.h),s.h=null))}if(r.D){const w=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.sa=w,xe(r.F,r.D,w))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=Fw(r,r.H?r.la:null,r.W),o.J){kw(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(Uu(a),na(a)),r.g=o}else Pw(r);0<n.l.length&&Hu(n)}else u[0]!="stop"&&u[0]!="close"||Vr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Vr(n,7):vp(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}Io(4)}catch{}}function XT(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(vd(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function dp(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(vd(t)||typeof t=="string")H1(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(vd(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=XT(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function ps(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof ps)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}z=ps.prototype;z.R=function(){fp(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};z.T=function(){return fp(this),this.g.concat()};function fp(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];ni(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],ni(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}z.get=function(t,e){return ni(this.h,t)?this.h[t]:e};z.set=function(t,e){ni(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};z.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function ni(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var gw=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function JT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ri(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ri){this.g=e!==void 0?e:t.g,Ql(this,t.j),this.s=t.s,Yl(this,t.i),Xl(this,t.m),this.l=t.l,e=t.h;var n=new bo;n.i=e.i,e.g&&(n.g=new ps(e.g),n.h=e.h),Xg(this,n),this.o=t.o}else t&&(n=String(t).match(gw))?(this.g=!!e,Ql(this,n[1]||"",!0),this.s=Js(n[2]||""),Yl(this,n[3]||"",!0),Xl(this,n[4]),this.l=Js(n[5]||"",!0),Xg(this,n[6]||"",!0),this.o=Js(n[7]||"")):(this.g=!!e,this.h=new bo(null,this.g))}ri.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Us(e,Jg,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Us(e,Jg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Us(n,n.charAt(0)=="/"?rI:nI,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Us(n,sI)),t.join("")};function Mn(t){return new ri(t)}function Ql(t,e,n){t.j=n?Js(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Yl(t,e,n){t.i=n?Js(e,!0):e}function Xl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Xg(t,e,n){e instanceof bo?(t.h=e,oI(t.h,t.g)):(n||(e=Us(e,iI)),t.h=new bo(e,t.g))}function xe(t,e,n){t.h.set(e,n)}function zu(t){return xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ZT(t){return t instanceof ri?Mn(t):new ri(t,void 0)}function eI(t,e,n,r){var i=new ri(null,void 0);return t&&Ql(i,t),e&&Yl(i,e),n&&Xl(i,n),r&&(i.l=r),i}function Js(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Us(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,tI),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function tI(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Jg=/[#\/\?@]/g,nI=/[#\?:]/g,rI=/[#\?]/g,iI=/[#\?@]/g,sI=/#/g;function bo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function br(t){t.g||(t.g=new ps,t.h=0,t.i&&JT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}z=bo.prototype;z.add=function(t,e){br(this),this.i=null,t=ms(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function yw(t,e){br(t),e=ms(t,e),ni(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,ni(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&fp(t)))}function vw(t,e){return br(t),e=ms(t,e),ni(t.g.h,e)}z.forEach=function(t,e){br(this),this.g.forEach(function(n,r){H1(n,function(i){t.call(e,i,r,this)},this)},this)};z.T=function(){br(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};z.R=function(t){br(this);var e=[];if(typeof t=="string")vw(this,t)&&(e=jg(e,this.g.get(ms(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=jg(e,t[n])}return e};z.set=function(t,e){return br(this),this.i=null,t=ms(this,t),vw(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};z.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function ww(t,e,n){yw(t,e),0<n.length&&(t.i=null,t.g.set(ms(t,e),Jf(n)),t.h+=n.length)}z.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function ms(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function oI(t,e){e&&!t.j&&(br(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(yw(this,r),ww(this,i,n))},t)),t.j=e}var aI=class{constructor(t,e){this.h=t,this.g=e}};function Ew(t){this.l=t||lI,Y.PerformanceNavigationTiming?(t=Y.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Y.g&&Y.g.Ea&&Y.g.Ea()&&Y.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var lI=10;function Sw(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function _w(t){return t.h?1:t.g?t.g.size:0}function Ad(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function pp(t,e){t.g?t.g.add(e):t.h=e}function kw(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ew.prototype.cancel=function(){if(this.i=Cw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Cw(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Jf(t.i)}function mp(){}mp.prototype.stringify=function(t){return Y.JSON.stringify(t,void 0)};mp.prototype.parse=function(t){return Y.JSON.parse(t,void 0)};function uI(){this.g=new mp}function cI(t,e,n){const r=n||"";try{dp(t,function(i,s){let o=i;Xo(i)&&(o=sp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function hI(t,e){const n=new $u;if(Y.Image){const r=new Image;r.onload=Ua(Va,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ua(Va,n,r,"TestLoadImage: error",!1,e),r.onabort=Ua(Va,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ua(Va,n,r,"TestLoadImage: timeout",!1,e),Y.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Va(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function ra(t){this.l=t.$b||null,this.j=t.ib||!1}lt(ra,up);ra.prototype.g=function(){return new Vu(this.l,this.j)};ra.prototype.i=function(t){return function(){return t}}({});function Vu(t,e){qe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=gp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}lt(Vu,qe);var gp=0;z=Vu.prototype;z.open=function(t,e){if(this.readyState!=gp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ao(this)};z.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Y).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};z.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ia(this)),this.readyState=gp};z.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ao(this)),this.g&&(this.readyState=3,Ao(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof Y.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xw(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function xw(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}z.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ia(this):Ao(this),this.readyState==3&&xw(this)}};z.Ua=function(t){this.g&&(this.response=this.responseText=t,ia(this))};z.Ta=function(t){this.g&&(this.response=t,ia(this))};z.ha=function(){this.g&&ia(this)};function ia(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ao(t)}z.setRequestHeader=function(t,e){this.v.append(t,e)};z.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};z.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ao(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Vu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var dI=Y.JSON.parse;function Me(t){qe.call(this),this.headers=new ps,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Tw,this.K=this.L=!1}lt(Me,qe);var Tw="",fI=/^https?$/i,pI=["POST","PUT"];z=Me.prototype;z.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():xd.g(),this.C=this.u?Yg(this.u):Yg(xd),this.g.onreadystatechange=it(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Zg(this,s);return}t=n||"";const i=new ps(this.headers);r&&dp(r,function(s,o){i.set(o,s)}),r=xT(i.T()),n=Y.FormData&&t instanceof Y.FormData,!(0<=B1(pI,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Aw(this),0<this.B&&((this.K=mI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=it(this.pa,this)):this.A=lp(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Zg(this,s)}};function mI(t){return Zi&&NT()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function gI(t){return t.toLowerCase()=="content-type"}z.pa=function(){typeof Xf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,st(this,"timeout"),this.abort(8))};function Zg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Iw(t),ju(t)}function Iw(t){t.D||(t.D=!0,st(t,"complete"),st(t,"error"))}z.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,st(this,"complete"),st(this,"abort"),ju(this))};z.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ju(this,!0)),Me.Z.M.call(this)};z.Fa=function(){this.s||(this.F||this.v||this.l?bw(this):this.cb())};z.cb=function(){bw(this)};function bw(t){if(t.h&&typeof Xf<"u"&&(!t.C[1]||In(t)!=4||t.ba()!=2)){if(t.v&&In(t)==4)lp(t.Fa,0,t);else if(st(t,"readystatechange"),In(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(gw)[1]||null;if(!i&&Y.self&&Y.self.location){var s=Y.self.location.protocol;i=s.substr(0,s.length-1)}r=!fI.test(i?i.toLowerCase():"")}n=r}if(n)st(t,"complete"),st(t,"success");else{t.m=6;try{var o=2<In(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Iw(t)}}finally{ju(t)}}}}function ju(t,e){if(t.g){Aw(t);const n=t.g,r=t.C[0]?Wl:null;t.g=null,t.C=null,e||st(t,"ready");try{n.onreadystatechange=r}catch{}}}function Aw(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Y.clearTimeout(t.A),t.A=null)}function In(t){return t.g?t.g.readyState:0}z.ba=function(){try{return 2<In(this)?this.g.status:-1}catch{return-1}};z.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};z.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),dI(e)}};function e0(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Tw:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}z.Da=function(){return this.m};z.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function yI(t){let e="";return Zf(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function yp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=yI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):xe(t,e,n))}function Os(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Nw(t){this.za=0,this.l=[],this.h=new $u,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Os("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Os("baseRetryDelayMs",5e3,t),this.$a=Os("retryDelaySeedMs",1e4,t),this.Ya=Os("forwardChannelMaxRetries",2,t),this.ra=Os("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Ew(t&&t.concurrentRequestLimit),this.Ca=new uI,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}z=Nw.prototype;z.ma=8;z.G=1;function vp(t){if(Ow(t),t.G==3){var e=t.V++,n=Mn(t.F);xe(n,"SID",t.J),xe(n,"RID",e),xe(n,"TYPE","terminate"),sa(t,n),e=new ta(t,t.h,e,void 0),e.K=2,e.v=zu(Mn(n)),n=!1,Y.navigator&&Y.navigator.sendBeacon&&(n=Y.navigator.sendBeacon(e.v.toString(),"")),!n&&Y.Image&&(new Image().src=e.v,n=!0),n||(e.g=Uw(e.l,null),e.g.ea(e.v)),e.F=Date.now(),na(e)}Mw(t)}z.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Bu(t){t.g&&(Ep(t),t.g.cancel(),t.g=null)}function Ow(t){Bu(t),t.u&&(Y.clearTimeout(t.u),t.u=null),Jl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Y.clearTimeout(t.m),t.m=null)}function uh(t,e){t.l.push(new aI(t.Za++,e)),t.G==3&&Hu(t)}function Hu(t){Sw(t.i)||t.m||(t.m=!0,op(t.Ha,t),t.C=0)}function vI(t,e){return _w(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Zo(it(t.Ha,t,e),Lw(t,t.C)),t.C++,!0)}z.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new ta(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=W1(s),G1(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Rw(this,i,e),n=Mn(this.F),xe(n,"RID",t),xe(n,"CVER",22),this.D&&xe(n,"X-HTTP-Session-Id",this.D),sa(this,n),this.o&&s&&yp(n,this.o,s),pp(this.i,i),this.Ra&&xe(n,"TYPE","init"),this.ja?(xe(n,"$req",e),xe(n,"SID","null"),i.$=!0,Id(i,n,null)):Id(i,n,e),this.G=2}}else this.G==3&&(t?t0(this,t):this.l.length==0||Sw(this.i)||t0(this))};function t0(t,e){var n;e?n=e.m:n=t.V++;const r=Mn(t.F);xe(r,"SID",t.J),xe(r,"RID",n),xe(r,"AID",t.U),sa(t,r),t.o&&t.s&&yp(r,t.o,t.s),n=new ta(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Rw(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),pp(t.i,n),Id(n,r,e)}function sa(t,e){t.j&&dp({},function(n,r){xe(e,r,n)})}function Rw(t,e,n){n=Math.min(t.l.length,n);var r=t.j?it(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{cI(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function Pw(t){t.g||t.u||(t.Y=1,op(t.Ga,t),t.A=0)}function wp(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Zo(it(t.Ga,t),Lw(t,t.A)),t.A++,!0)}z.Ga=function(){if(this.u=null,Dw(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Zo(it(this.bb,this),t)}};z.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,St(10),Bu(this),Dw(this))};function Ep(t){t.B!=null&&(Y.clearTimeout(t.B),t.B=null)}function Dw(t){t.g=new ta(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Mn(t.oa);xe(e,"RID","rpc"),xe(e,"SID",t.J),xe(e,"CI",t.N?"0":"1"),xe(e,"AID",t.U),sa(t,e),xe(e,"TYPE","xmlhttp"),t.o&&t.s&&yp(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=zu(Mn(e)),n.s=null,n.U=!0,dw(n,t)}z.ab=function(){this.v!=null&&(this.v=null,Bu(this),wp(this),St(19))};function Jl(t){t.v!=null&&(Y.clearTimeout(t.v),t.v=null)}function $w(t,e){var n=null;if(t.g==e){Jl(t),Ep(t),t.g=null;var r=2}else if(Ad(t.i,e))n=e.D,kw(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Lu(),st(r,new lw(r,n)),Hu(t)}else Pw(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&vI(t,e)||r==2&&wp(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Vr(t,5);break;case 4:Vr(t,10);break;case 3:Vr(t,6);break;default:Vr(t,2)}}}function Lw(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Vr(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=it(t.jb,t);n||(n=new ri("//www.google.com/images/cleardot.gif"),Y.location&&Y.location.protocol=="http"||Ql(n,"https"),zu(n)),hI(n.toString(),r)}else St(2);t.G=0,t.j&&t.j.va(e),Mw(t),Ow(t)}z.jb=function(t){t?(this.h.info("Successfully pinged google.com"),St(2)):(this.h.info("Failed to ping google.com"),St(1))};function Mw(t){t.G=0,t.I=-1,t.j&&((Cw(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Jf(t.l),t.l.length=0),t.j.ua())}function Fw(t,e,n){let r=ZT(n);if(r.i!="")e&&Yl(r,e+"."+r.i),Xl(r,r.m);else{const i=Y.location;r=eI(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&Zf(t.aa,function(i,s){xe(r,s,i)}),e=t.D,n=t.sa,e&&n&&xe(r,e,n),xe(r,"VER",t.ma),sa(t,r),r}function Uw(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Me(new ra({ib:!0})):new Me(t.qa),e.L=t.H,e}function zw(){}z=zw.prototype;z.xa=function(){};z.wa=function(){};z.va=function(){};z.ua=function(){};z.Oa=function(){};function Zl(){if(Zi&&!(10<=Number(OT)))throw Error("Environmental error: no available transport.")}Zl.prototype.g=function(t,e){return new Ut(t,e)};function Ut(t,e){qe.call(this),this.g=new Nw(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Gl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Gl(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new gs(this)}lt(Ut,qe);Ut.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),op(it(t.hb,t,e))),St(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Fw(t,null,t.W),Hu(t)};Ut.prototype.close=function(){vp(this.g)};Ut.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,uh(this.g,e)}else this.v?(e={},e.__data__=sp(t),uh(this.g,e)):uh(this.g,t)};Ut.prototype.M=function(){this.g.j=null,delete this.j,vp(this.g),delete this.g,Ut.Z.M.call(this)};function Vw(t){cp.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}lt(Vw,cp);function jw(){hp.call(this),this.status=1}lt(jw,hp);function gs(t){this.g=t}lt(gs,zw);gs.prototype.xa=function(){st(this.g,"a")};gs.prototype.wa=function(t){st(this.g,new Vw(t))};gs.prototype.va=function(t){st(this.g,new jw)};gs.prototype.ua=function(){st(this.g,"b")};Zl.prototype.createWebChannel=Zl.prototype.g;Ut.prototype.send=Ut.prototype.u;Ut.prototype.open=Ut.prototype.m;Ut.prototype.close=Ut.prototype.close;Mu.NO_ERROR=0;Mu.TIMEOUT=8;Mu.HTTP_ERROR=6;uw.COMPLETE="complete";cw.EventType=ea;ea.OPEN="a";ea.CLOSE="b";ea.ERROR="c";ea.MESSAGE="d";qe.prototype.listen=qe.prototype.N;Me.prototype.listenOnce=Me.prototype.O;Me.prototype.getLastError=Me.prototype.La;Me.prototype.getLastErrorCode=Me.prototype.Da;Me.prototype.getStatus=Me.prototype.ba;Me.prototype.getResponseJson=Me.prototype.Qa;Me.prototype.getResponseText=Me.prototype.ga;Me.prototype.send=Me.prototype.ea;var wI=function(){return new Zl},EI=function(){return Lu()},ch=Mu,SI=uw,_I=ci,n0={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},kI=ra,ja=cw,CI=Me;const r0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ys="9.9.4";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=new qf("@firebase/firestore");function i0(){return ii.logLevel}function B(t,...e){if(ii.logLevel<=ue.DEBUG){const n=e.map(Sp);ii.debug(`Firestore (${ys}): ${t}`,...n)}}function Fn(t,...e){if(ii.logLevel<=ue.ERROR){const n=e.map(Sp);ii.error(`Firestore (${ys}): ${t}`,...n)}}function s0(t,...e){if(ii.logLevel<=ue.WARN){const n=e.map(Sp);ii.warn(`Firestore (${ys}): ${t}`,...n)}}function Sp(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t="Unexpected state"){const e=`FIRESTORE (${ys}) INTERNAL ASSERTION FAILED: `+t;throw Fn(e),new Error(e)}function Ee(t,e){t||J()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class TI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(It.UNAUTHENTICATED))}shutdown(){}}class II{constructor(e){this.t=e,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new pr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new pr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new pr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ee(typeof r.accessToken=="string"),new xI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ee(e===null||typeof e=="string"),new It(e)}}class bI{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=It.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Ee(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class AI{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new bI(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class NI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class OI{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ee(typeof n.token=="string"),this.A=n.token,new NI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=RI(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function de(t,e){return t<e?-1:t>e?1:0}function es(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ve(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new Ve(0,0))}static max(){return new te(new Ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return No.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof No?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends No{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const PI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends No{construct(e,n,r){return new ft(e,n,r)}static isValidIdentifier(e){return PI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ft(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new W(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new W(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(n)}static emptyPath(){return new ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(Te.fromString(e))}static fromName(e){return new H(Te.fromString(e).popFirst(5))}static empty(){return new H(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new Te(e.slice()))}}function DI(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=te.fromTimestamp(r===1e9?new Ve(n+1,0):new Ve(n,r));return new Sr(i,H.empty(),e)}function $I(t){return new Sr(t.readTime,t.key,-1)}class Sr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Sr(te.min(),H.empty(),-1)}static max(){return new Sr(te.max(),H.empty(),-1)}}function LI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class FI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oa(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==MI)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,r)=>{n(e)})}static reject(e){return new T((n,r)=>{r(e)})}static waitFor(e){return new T((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=T.resolve(!1);for(const r of e)n=n.next(i=>i?T.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new T((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new T((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function aa(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function hi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Hw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_p.at=-1;class Be{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ba(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ba(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ba(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ba(this.root,e,this.comparator,!0)}}class Ba{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:et.RED,this.left=i!=null?i:et.EMPTY,this.right=s!=null?s:et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new et(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return et.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(t,e,n,r,i){return this}insert(t,e,n){return new et(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new a0(this.data.getIterator())}getIteratorFrom(e){return new a0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new je(this.comparator);return n.data=e,n}}class a0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new Kt([])}unionWith(e){let n=new je(ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return es(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new at(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const UI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _r(t){if(Ee(!!t),typeof t=="string"){let e=0;const n=UI.exec(t);if(Ee(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:$e(t.seconds),nanos:$e(t.nanos)}}function $e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ts(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Gw(t){const e=t.mapValue.fields.__previous_value__;return Ww(e)?Gw(e):e}function Oo(t){const e=_r(t.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Ro{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ro("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ro&&e.projectId===this.projectId&&e.database===this.database}}function Wu(t){return t==null}function eu(t){return t===0&&1/t==-1/0}function VI(t){return typeof t=="number"&&Number.isInteger(t)&&!eu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function si(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ww(t)?4:jI(t)?9007199254740991:10:J()}function wn(t,e){if(t===e)return!0;const n=si(t);if(n!==si(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Oo(t).isEqual(Oo(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=_r(r.timestampValue),o=_r(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ts(r.bytesValue).isEqual(ts(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return $e(r.geoPointValue.latitude)===$e(i.geoPointValue.latitude)&&$e(r.geoPointValue.longitude)===$e(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return $e(r.integerValue)===$e(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=$e(r.doubleValue),o=$e(i.doubleValue);return s===o?eu(s)===eu(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return es(t.arrayValue.values||[],e.arrayValue.values||[],wn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(o0(s)!==o0(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!wn(s[a],o[a])))return!1;return!0}(t,e);default:return J()}}function Po(t,e){return(t.values||[]).find(n=>wn(n,e))!==void 0}function ns(t,e){if(t===e)return 0;const n=si(t),r=si(e);if(n!==r)return de(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=$e(i.integerValue||i.doubleValue),a=$e(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return l0(t.timestampValue,e.timestampValue);case 4:return l0(Oo(t),Oo(e));case 5:return de(t.stringValue,e.stringValue);case 6:return function(i,s){const o=ts(i),a=ts(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=de(o[l],a[l]);if(u!==0)return u}return de(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=de($e(i.latitude),$e(s.latitude));return o!==0?o:de($e(i.longitude),$e(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=ns(o[l],a[l]);if(u)return u}return de(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Ha.mapValue&&s===Ha.mapValue)return 0;if(i===Ha.mapValue)return 1;if(s===Ha.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=de(a[c],u[c]);if(h!==0)return h;const d=ns(o[a[c]],l[u[c]]);if(d!==0)return d}return de(a.length,u.length)}(t.mapValue,e.mapValue);default:throw J()}}function l0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=_r(t),r=_r(e),i=de(n.seconds,r.seconds);return i!==0?i:de(n.nanos,r.nanos)}function zi(t){return Nd(t)}function Nd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=_r(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ts(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,H.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Nd(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Nd(r.fields[a])}`;return s+"}"}(t.mapValue):J();var e,n}function Od(t){return!!t&&"integerValue"in t}function kp(t){return!!t&&"arrayValue"in t}function u0(t){return!!t&&"nullValue"in t}function c0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ul(t){return!!t&&"mapValue"in t}function Zs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return hi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Zs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Zs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function jI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ul(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Zs(n)}setAll(e){let n=ft.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Zs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ul(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ul(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){hi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new At(Zs(this.value))}}function Kw(t){const e=[];return hi(t.fields,(n,r)=>{const i=new ft([n]);if(ul(r)){const s=Kw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Kt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new nt(e,0,te.min(),te.min(),At.empty(),0)}static newFoundDocument(e,n,r){return new nt(e,1,n,te.min(),r,0)}static newNoDocument(e,n){return new nt(e,2,n,te.min(),At.empty(),0)}static newUnknownDocument(e,n){return new nt(e,3,n,te.min(),At.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function h0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new BI(t,e,n,r,i,s,o)}function Cp(t){const e=Z(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+zi(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Wu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>zi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>zi(r)).join(",")),e.ht=n}return e.ht}function HI(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${zi(r.value)}`;var r}).join(", ")}]`),Wu(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>zi(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>zi(n)).join(",")),`Target(${e})`}function xp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!JI(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!wn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!f0(t.startAt,e.startAt)&&f0(t.endAt,e.endAt)}function Rd(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Ot extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new WI(e,n,r):n==="array-contains"?new qI(e,r):n==="in"?new QI(e,r):n==="not-in"?new YI(e,r):n==="array-contains-any"?new XI(e,r):new Ot(e,n,r)}static lt(e,n,r){return n==="in"?new GI(e,r):new KI(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(ns(n,this.value)):n!==null&&si(this.value)===si(n)&&this.ft(ns(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class WI extends Ot{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.ft(n)}}class GI extends Ot{constructor(e,n){super(e,"in",n),this.keys=qw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class KI extends Ot{constructor(e,n){super(e,"not-in",n),this.keys=qw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function qw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class qI extends Ot{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return kp(n)&&Po(n.arrayValue,this.value)}}class QI extends Ot{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Po(this.value.arrayValue,n)}}class YI extends Ot{constructor(e,n){super(e,"not-in",n)}matches(e){if(Po(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Po(this.value.arrayValue,n)}}class XI extends Ot{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!kp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Po(this.value.arrayValue,r))}}class tu{constructor(e,n){this.position=e,this.inclusive=n}}class eo{constructor(e,n="asc"){this.field=e,this.dir=n}}function JI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function d0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=ns(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function f0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function ZI(t,e,n,r,i,s,o,a){return new Gu(t,e,n,r,i,s,o,a)}function Qw(t){return new Gu(t)}function p0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function e2(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function t2(t){for(const e of t.filters)if(e.dt())return e.field;return null}function n2(t){return t.collectionGroup!==null}function Do(t){const e=Z(t);if(e._t===null){e._t=[];const n=t2(e),r=e2(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new eo(n)),e._t.push(new eo(ft.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new eo(ft.keyField(),s))}}}return e._t}function Un(t){const e=Z(t);if(!e.wt)if(e.limitType==="F")e.wt=h0(e.path,e.collectionGroup,Do(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Do(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new eo(s.field,o))}const r=e.endAt?new tu(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new tu(e.startAt.position,e.startAt.inclusive):null;e.wt=h0(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function Pd(t,e,n){return new Gu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ku(t,e){return xp(Un(t),Un(e))&&t.limitType===e.limitType}function Yw(t){return`${Cp(Un(t))}|lt:${t.limitType}`}function Dd(t){return`Query(target=${HI(Un(t))}; limitType=${t.limitType})`}function Tp(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):H.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=d0(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Do(n),r)||n.endAt&&!function(i,s,o){const a=d0(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Do(n),r))}(t,e)}function r2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Xw(t){return(e,n)=>{let r=!1;for(const i of Do(t)){const s=i2(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function i2(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?ns(a,l):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:eu(e)?"-0":e}}function Zw(t){return{integerValue:""+t}}function s2(t,e){return VI(e)?Zw(e):Jw(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(){this._=void 0}}function o2(t,e,n){return t instanceof nu?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof $o?tE(t,e):t instanceof Lo?nE(t,e):function(r,i){const s=eE(r,i),o=m0(s)+m0(r.yt);return Od(s)&&Od(r.yt)?Zw(o):Jw(r.It,o)}(t,e)}function a2(t,e,n){return t instanceof $o?tE(t,e):t instanceof Lo?nE(t,e):n}function eE(t,e){return t instanceof ru?Od(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class nu extends qu{}class $o extends qu{constructor(e){super(),this.elements=e}}function tE(t,e){const n=rE(e);for(const r of t.elements)n.some(i=>wn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Lo extends qu{constructor(e){super(),this.elements=e}}function nE(t,e){let n=rE(e);for(const r of t.elements)n=n.filter(i=>!wn(i,r));return{arrayValue:{values:n}}}class ru extends qu{constructor(e,n){super(),this.It=e,this.yt=n}}function m0(t){return $e(t.integerValue||t.doubleValue)}function rE(t){return kp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function l2(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof $o&&r instanceof $o||n instanceof Lo&&r instanceof Lo?es(n.elements,r.elements,wn):n instanceof ru&&r instanceof ru?wn(n.yt,r.yt):n instanceof nu&&r instanceof nu}(t.transform,e.transform)}class u2{constructor(e,n){this.version=e,this.transformResults=n}}class an{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new an}static exists(e){return new an(void 0,e)}static updateTime(e){return new an(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function cl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Qu{}function iE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ip(t.key,an.none()):new la(t.key,t.data,an.none());{const n=t.data,r=At.empty();let i=new je(ft.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ar(t.key,r,new Kt(i.toArray()),an.none())}}function c2(t,e,n){t instanceof la?function(r,i,s){const o=r.value.clone(),a=y0(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ar?function(r,i,s){if(!cl(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=y0(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(sE(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function to(t,e,n,r){return t instanceof la?function(i,s,o,a){if(!cl(i.precondition,s))return o;const l=i.value.clone(),u=v0(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ar?function(i,s,o,a){if(!cl(i.precondition,s))return o;const l=v0(i.fieldTransforms,a,s),u=s.data;return u.setAll(sE(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return cl(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function h2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=eE(r.transform,i||null);s!=null&&(n===null&&(n=At.empty()),n.set(r.field,s))}return n||null}function g0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&es(n,r,(i,s)=>l2(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class la extends Qu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ar extends Qu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function sE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function y0(t,e,n){const r=new Map;Ee(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,a2(o,a,n[i]))}return r}function v0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,o2(s,o,e))}return r}class Ip extends Qu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class d2 extends Qu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De,se;function p2(t){switch(t){default:return J();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function oE(t){if(t===void 0)return Fn("GRPC error has no .code"),I.UNKNOWN;switch(t){case De.OK:return I.OK;case De.CANCELLED:return I.CANCELLED;case De.UNKNOWN:return I.UNKNOWN;case De.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case De.INTERNAL:return I.INTERNAL;case De.UNAVAILABLE:return I.UNAVAILABLE;case De.UNAUTHENTICATED:return I.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case De.NOT_FOUND:return I.NOT_FOUND;case De.ALREADY_EXISTS:return I.ALREADY_EXISTS;case De.PERMISSION_DENIED:return I.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case De.ABORTED:return I.ABORTED;case De.OUT_OF_RANGE:return I.OUT_OF_RANGE;case De.UNIMPLEMENTED:return I.UNIMPLEMENTED;case De.DATA_LOSS:return I.DATA_LOSS;default:return J()}}(se=De||(De={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){hi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Hw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m2=new Be(H.comparator);function zn(){return m2}const aE=new Be(H.comparator);function zs(...t){let e=aE;for(const n of t)e=e.insert(n.key,n);return e}function lE(t){let e=aE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function jr(){return no()}function uE(){return no()}function no(){return new vs(t=>t.toString(),(t,e)=>t.isEqual(e))}const g2=new Be(H.comparator),y2=new je(H.comparator);function ne(...t){let e=y2;for(const n of t)e=e.add(n);return e}const v2=new je(de);function cE(){return v2}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,ua.createSynthesizedTargetChangeForCurrentChange(e,n)),new Yu(te.min(),r,cE(),zn(),ne())}}class ua{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new ua(at.EMPTY_BYTE_STRING,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n,r,i){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=i}}class hE{constructor(e,n){this.targetId=e,this.At=n}}class dE{constructor(e,n,r=at.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class w0{constructor(){this.Rt=0,this.bt=S0(),this.Pt=at.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=ne(),n=ne(),r=ne();return this.bt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:J()}}),new ua(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=S0()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Mt(e){this.Vt=!0,this.bt=this.bt.remove(e)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class w2{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=zn(),this.qt=E0(),this.Kt=new je(de)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,r=e.At.count,i=this.Xt(n);if(i){const s=i.target;if(Rd(s))if(r===0){const o=new H(s.path);this.jt(n,o,nt.newNoDocument(o,te.min()))}else Ee(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&Rd(a.target)){const l=new H(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,nt.newNoDocument(l,e))}s.Dt&&(n.set(o,s.xt()),s.Nt())}});let r=ne();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new Yu(e,n,this.Kt,this.Ut,r);return this.Ut=zn(),this.qt=E0(),this.Kt=new je(de),i}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Mt(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.zt(e).Ot()}zt(e){let n=this.Lt.get(e);return n||(n=new w0,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new je(de),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new w0),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function E0(){return new Be(H.comparator)}function S0(){return new Be(H.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E2=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),S2=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class _2{constructor(e,n){this.databaseId=e,this.gt=n}}function iu(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fE(t,e){return t.gt?e.toBase64():e.toUint8Array()}function k2(t,e){return iu(t,e.toTimestamp())}function Rn(t){return Ee(!!t),te.fromTimestamp(function(e){const n=_r(e);return new Ve(n.seconds,n.nanos)}(t))}function bp(t,e){return function(n){return new Te(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function pE(t){const e=Te.fromString(t);return Ee(yE(e)),e}function $d(t,e){return bp(t.databaseId,e.path)}function hh(t,e){const n=pE(e);if(n.get(1)!==t.databaseId.projectId)throw new W(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(mE(n))}function Ld(t,e){return bp(t.databaseId,e)}function C2(t){const e=pE(t);return e.length===4?Te.emptyPath():mE(e)}function Md(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function mE(t){return Ee(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function _0(t,e,n){return{name:$d(t,e),fields:n.value.mapValue.fields}}function x2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.gt?(Ee(u===void 0||typeof u=="string"),at.fromBase64String(u||"")):(Ee(u===void 0||u instanceof Uint8Array),at.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?I.UNKNOWN:oE(l.code);return new W(u,l.message||"")}(o);n=new dE(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=hh(t,r.document.name),s=Rn(r.document.updateTime),o=new At({mapValue:{fields:r.document.fields}}),a=nt.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new hl(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=hh(t,r.document),s=r.readTime?Rn(r.readTime):te.min(),o=nt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new hl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=hh(t,r.document),s=r.removedTargetIds||[];n=new hl([],s,i,null)}else{if(!("filter"in e))return J();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new f2(i),o=r.targetId;n=new hE(o,s)}}return n}function T2(t,e){let n;if(e instanceof la)n={update:_0(t,e.key,e.value)};else if(e instanceof Ip)n={delete:$d(t,e.key)};else if(e instanceof Ar)n={update:_0(t,e.key,e.data),updateMask:L2(e.fieldMask)};else{if(!(e instanceof d2))return J();n={verify:$d(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof nu)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof $o)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Lo)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ru)return{fieldPath:s.field.canonicalString(),increment:o.yt};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:k2(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:J()}(t,e.precondition)),n}function I2(t,e){return t&&t.length>0?(Ee(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Rn(r.updateTime):Rn(i);return s.isEqual(te.min())&&(s=Rn(i)),new u2(s,r.transformResults||[])}(n,e))):[]}function b2(t,e){return{documents:[Ld(t,e.path)]}}function A2(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Ld(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ld(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(h){if(h.op==="=="){if(c0(h.value))return{unaryFilter:{field:pi(h.field),op:"IS_NAN"}};if(u0(h.value))return{unaryFilter:{field:pi(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(c0(h.value))return{unaryFilter:{field:pi(h.field),op:"IS_NOT_NAN"}};if(u0(h.value))return{unaryFilter:{field:pi(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pi(h.field),op:P2(h.op),value:h.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:pi(c.field),direction:R2(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.gt||Wu(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function N2(t){let e=C2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ee(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=gE(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new eo(Oi(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Wu(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new tu(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new tu(d,h)}(n.endAt)),ZI(e,i,o,s,a,"F",l,u)}function O2(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return J()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function gE(t){return t?t.unaryFilter!==void 0?[$2(t)]:t.fieldFilter!==void 0?[D2(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>gE(e)).reduce((e,n)=>e.concat(n)):J():[]}function R2(t){return E2[t]}function P2(t){return S2[t]}function pi(t){return{fieldPath:t.canonicalString()}}function Oi(t){return ft.fromServerFormat(t.fieldPath)}function D2(t){return Ot.create(Oi(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(t.fieldFilter.op),t.fieldFilter.value)}function $2(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Oi(t.unaryFilter.field);return Ot.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Oi(t.unaryFilter.field);return Ot.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Oi(t.unaryFilter.field);return Ot.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Oi(t.unaryFilter.field);return Ot.create(i,"!=",{nullValue:"NULL_VALUE"});default:return J()}}function L2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function yE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&c2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=to(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=to(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=uE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=iE(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&es(this.mutations,e.mutations,(n,r)=>g0(n,r))&&es(this.baseMutations,e.baseMutations,(n,r)=>g0(n,r))}}class Ap{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ee(e.mutations.length===r.length);let i=g2;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ap(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,n,r,i,s=te.min(),o=te.min(),a=at.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Gr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(e){this.re=e}}function z2(t){const e=N2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Pd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(){this.Ye=new j2}addToCollectionParentIndex(e,n){return this.Ye.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(Sr.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(Sr.min())}updateCollectionGroup(e,n,r){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class j2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new je(Te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new je(Te.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new rs(0)}static vn(){return new rs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(){this.changes=new vs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?T.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&to(r.mutation,i,Kt.empty(),Ve.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=jr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=zs();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=jr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=zn();const o=no(),a=no();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Ar)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),to(c.mutation,u,c.mutation.getFieldMask(),Ve.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new H2(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=no();let i=new Be((o,a)=>o-a),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Kt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||ne()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=uE();c.forEach(d=>{if(!s.has(d)){const g=iE(n.get(d),r.get(d));g!==null&&h.set(d,g),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return T.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return H.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):n2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):T.resolve(jr());let a=-1,l=s;return o.next(u=>T.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?T.resolve():this.getBaseDocument(e,c,h).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,ne())).next(c=>({batchId:a,changes:lE(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=zs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=zs();return this.indexManager.getCollectionParents(e,i).next(o=>T.forEach(o,a=>{const l=function(u,c){return new Gu(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,nt.newInvalidDocument(u)))});let o=zs();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&to(u.mutation,l,Kt.empty(),Ve.now()),Tp(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):T.resolve(nt.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G2{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return T.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Rn(r.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:z2(r.bundledQuery),readTime:Rn(r.readTime)}}(n)),T.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K2{constructor(){this.overlays=new Be(H.comparator),this.es=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const r=jr();return T.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ue(e,n,s)}),T.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),T.resolve()}getOverlaysForCollection(e,n,r){const i=jr(),s=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return T.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Be((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=jr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=jr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return T.resolve(a)}ue(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new F2(n,r));let s=this.es.get(n);s===void 0&&(s=ne(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(){this.ns=new je(He.ss),this.rs=new je(He.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new He(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new He(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new H(new Te([])),r=new He(n,e),i=new He(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new H(new Te([])),r=new He(n,e),i=new He(n,e+1);let s=ne();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new He(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class He{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return H.comparator(e.key,n.key)||de(e._s,n._s)}static os(e,n){return de(e._s,n._s)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new je(He.ss)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new M2(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new He(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return T.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new He(n,0),i=new He(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),T.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new je(de);return n.forEach(i=>{const s=new He(i,0),o=new He(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),T.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new He(new H(s),0);let a=new je(de);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),T.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ee(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return T.forEach(n.mutations,i=>{const s=new He(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new He(n,0),i=this.gs.firstAfterOrEqual(r);return T.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(e){this.Es=e,this.docs=new Be(H.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return T.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(e,n){let r=zn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():nt.newInvalidDocument(i))}),T.resolve(r)}getAllFromCollection(e,n,r){let i=zn();const s=new H(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||LI($I(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return T.resolve(i)}getAllFromCollectionGroup(e,n,r,i){J()}As(e,n){return T.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Y2(this)}getSize(e){return T.resolve(this.size)}}class Y2 extends B2{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),T.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{constructor(e){this.persistence=e,this.Rs=new vs(n=>Cp(n),xp),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Np,this.targetCount=0,this.vs=rs.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),T.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new rs(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.Dn(n),T.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),T.waitFor(s).next(()=>i)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return T.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),T.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),T.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),T.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return T.resolve(r)}containsKey(e,n){return T.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new _p(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new X2(this),this.indexManager=new V2,this.remoteDocumentCache=function(r){return new Q2(r)}(r=>this.referenceDelegate.xs(r)),this.It=new U2(n),this.Ns=new G2(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new K2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new q2(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){B("MemoryPersistence","Starting transaction:",e);const i=new Z2(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Ms(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Os(e,n){return T.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class Z2 extends FI{constructor(e){super(),this.currentSequenceNumber=e}}class Op{constructor(e){this.persistence=e,this.Fs=new Np,this.$s=null}static Bs(e){return new Op(e)}get Ls(){if(this.$s)return this.$s;throw J()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),T.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),T.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Ms(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Ls,r=>{const i=H.fromPath(r);return this.Us(e,i).next(s=>{s||n.removeEntry(i,te.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return T.or([()=>T.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Rp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Mi(e,n,i,r)).next(s=>s||this.Oi(e,n))}ki(e,n){if(p0(n))return T.resolve(null);let r=Un(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Pd(n,null,"F"),r=Un(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,Pd(n,null,"F")):this.Bi(e,u,n,l)}))})))}Mi(e,n,r,i){return p0(n)||i.isEqual(te.min())?this.Oi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Oi(e,n):(i0()<=ue.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Dd(n)),this.Bi(e,o,n,DI(i,-1)))})}Fi(e,n){let r=new je(Xw(e));return n.forEach((i,s)=>{Tp(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(e,n){return i0()<=ue.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Dd(n)),this.Ni.getDocumentsMatchingQuery(e,n,Sr.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new Be(de),this.qi=new vs(s=>Cp(s),xp),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new W2(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function nb(t,e,n,r){return new tb(t,e,n,r)}async function vE(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ne();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function rb(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=T.resolve();return h.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(v=>{const w=l.docVersions.get(g);Ee(w!==null),v.version.compareTo(w)<0&&(c.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=ne();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function wE(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function ib(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let g=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(at.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(h,g),function(v,w,_){return v.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(d,g,c)&&a.push(n.Cs.updateTargetData(s,g))});let l=zn(),u=ne();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(sb(s,o,e.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(te.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return T.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ui=i,s))}function sb(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=zn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(te.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):B("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function ob(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ab(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,T.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new Gr(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function Fd(t,e,n){const r=Z(t),i=r.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!aa(o))throw o;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function k0(t,e,n){const r=Z(t);let i=te.min(),s=ne();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=Z(a),h=c.qi.get(u);return h!==void 0?T.resolve(c.Ui.get(h)):c.Cs.getTargetData(l,u)}(r,o,Un(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:te.min(),n?s:ne())).next(a=>(lb(r,r2(e),a),{documents:a,Hi:s})))}function lb(t,e,n){let r=te.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class C0{constructor(){this.activeTargetIds=cE()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ub{constructor(){this.Lr=new C0,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new C0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,r,i,s){const o=this.ao(e,n);B("RestConnection","Sending: ",o,r);const a={};return this.ho(a,i,s),this.lo(e,o,a,r).then(l=>(B("RestConnection","Received: ",l),l),l=>{throw s0("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}fo(e,n,r,i,s,o){return this.co(e,n,r,i,s)}ho(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ys,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ao(e,n){const r=hb[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,r,i){return new Promise((s,o)=>{const a=new CI;a.listenOnce(SI.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case ch.NO_ERROR:const u=a.getResponseJson();B("Connection","XHR received:",JSON.stringify(u)),s(u);break;case ch.TIMEOUT:B("Connection",'RPC "'+e+'" timed out'),o(new W(I.DEADLINE_EXCEEDED,"Request time out"));break;case ch.HTTP_ERROR:const c=a.getStatus();if(B("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(g){const v=g.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(v)>=0?v:I.UNKNOWN}(h.status);o(new W(d,h.message))}else o(new W(I.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new W(I.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{B("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}_o(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=wI(),o=EI(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new kI({})),this.ho(a.initMessageHeaders,n,r),P1()||$1()||ex()||L1()||tx()||D1()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=i.join("");B("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new db({Hr:v=>{h?B("Connection","Not sending because WebChannel is closed:",v):(c||(B("Connection","Opening WebChannel transport."),u.open(),c=!0),B("Connection","WebChannel sending:",v),u.send(v))},Jr:()=>u.close()}),g=(v,w,_)=>{v.listen(w,p=>{try{_(p)}catch(f){setTimeout(()=>{throw f},0)}})};return g(u,ja.EventType.OPEN,()=>{h||B("Connection","WebChannel transport opened.")}),g(u,ja.EventType.CLOSE,()=>{h||(h=!0,B("Connection","WebChannel transport closed"),d.io())}),g(u,ja.EventType.ERROR,v=>{h||(h=!0,s0("Connection","WebChannel transport errored:",v),d.io(new W(I.UNAVAILABLE,"The operation could not be completed")))}),g(u,ja.EventType.MESSAGE,v=>{var w;if(!h){const _=v.data[0];Ee(!!_);const p=_,f=p.error||((w=p[0])===null||w===void 0?void 0:w.error);if(f){B("Connection","WebChannel received error:",f);const m=f.status;let E=function(A){const $=De[A];if($!==void 0)return oE($)}(m),C=f.message;E===void 0&&(E=I.INTERNAL,C="Unknown error status: "+m+" with message "+f.message),h=!0,d.io(new W(E,C)),u.close()}else B("Connection","WebChannel received:",_),d.ro(_)}}),g(o,_I.STAT_EVENT,v=>{v.stat===n0.PROXY?B("Connection","Detected buffering proxy"):v.stat===n0.NOPROXY&&B("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function dh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(t){return new _2(t,!0)}class EE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.wo=r,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,n-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.Po=r,this.vo=i,this.Vo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new EE(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(Fn(n.toString()),Fn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new W(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pb extends SE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.It=s}jo(e,n){return this.Vo._o("Listen",e,n)}onMessage(e){this.xo.reset();const n=x2(this.It,e),r=function(i){if(!("targetChange"in i))return te.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?te.min():s.readTime?Rn(s.readTime):te.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=Md(this.It),n.addTarget=function(i,s){let o;const a=s.target;return o=Rd(a)?{documents:b2(i,a)}:{query:A2(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=fE(i,s.resumeToken):s.snapshotVersion.compareTo(te.min())>0&&(o.readTime=iu(i,s.snapshotVersion.toTimestamp())),o}(this.It,e);const r=O2(this.It,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=Md(this.It),n.removeTarget=e,this.Bo(n)}}class mb extends SE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.It=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.Vo._o("Write",e,n)}onMessage(e){if(Ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=I2(e.writeResults,e.commitTime),r=Rn(e.commitTime);return this.listener.Zo(r,n)}return Ee(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Md(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>T2(this.It,r))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.Vo=r,this.It=i,this.nu=!1}su(){if(this.nu)throw new W(I.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.Vo.co(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(I.UNKNOWN,i.toString())})}fo(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.Vo.fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(I.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class yb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Fn(n),this.ou=!1):B("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.qr(o=>{r.enqueueAndForget(async()=>{di(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=Z(a);l._u.add(4),await ca(l),l.gu.set("Unknown"),l._u.delete(4),await Ju(l)}(this))})}),this.gu=new yb(r,i)}}async function Ju(t){if(di(t))for(const e of t.wu)await e(!0)}async function ca(t){for(const e of t.wu)await e(!1)}function _E(t,e){const n=Z(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),$p(n)?Dp(n):ws(n).ko()&&Pp(n,e))}function kE(t,e){const n=Z(t),r=ws(n);n.du.delete(e),r.ko()&&CE(n,e),n.du.size===0&&(r.ko()?r.Fo():di(n)&&n.gu.set("Unknown"))}function Pp(t,e){t.yu.Ot(e.targetId),ws(t).zo(e)}function CE(t,e){t.yu.Ot(e),ws(t).Ho(e)}function Dp(t){t.yu=new w2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),ws(t).start(),t.gu.uu()}function $p(t){return di(t)&&!ws(t).No()&&t.du.size>0}function di(t){return Z(t)._u.size===0}function xE(t){t.yu=void 0}async function wb(t){t.du.forEach((e,n)=>{Pp(t,e)})}async function Eb(t,e){xE(t),$p(t)?(t.gu.hu(e),Dp(t)):t.gu.set("Unknown")}async function Sb(t,e,n){if(t.gu.set("Online"),e instanceof dE&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await su(t,r)}else if(e instanceof hl?t.yu.Gt(e):e instanceof hE?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(te.min()))try{const r=await wE(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.te(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(l);u&&i.du.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(at.EMPTY_BYTE_STRING,l.snapshotVersion)),CE(i,a);const u=new Gr(l.target,a,1,l.sequenceNumber);Pp(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){B("RemoteStore","Failed to raise snapshot:",r),await su(t,r)}}async function su(t,e,n){if(!aa(e))throw e;t._u.add(1),await ca(t),t.gu.set("Offline"),n||(n=()=>wE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Ju(t)})}function TE(t,e){return e().catch(n=>su(t,n,e))}async function Zu(t){const e=Z(t),n=kr(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;_b(e);)try{const i=await ob(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,kb(e,i)}catch(i){await su(e,i)}IE(e)&&bE(e)}function _b(t){return di(t)&&t.fu.length<10}function kb(t,e){t.fu.push(e);const n=kr(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function IE(t){return di(t)&&!kr(t).No()&&t.fu.length>0}function bE(t){kr(t).start()}async function Cb(t){kr(t).eu()}async function xb(t){const e=kr(t);for(const n of t.fu)e.Xo(n.mutations)}async function Tb(t,e,n){const r=t.fu.shift(),i=Ap.from(r,e,n);await TE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Zu(t)}async function Ib(t,e){e&&kr(t).Yo&&await async function(n,r){if(i=r.code,p2(i)&&i!==I.ABORTED){const s=n.fu.shift();kr(n).Oo(),await TE(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Zu(n)}var i}(t,e),IE(t)&&bE(t)}async function T0(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const r=di(n);n._u.add(3),await ca(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Ju(n)}async function bb(t,e){const n=Z(t);e?(n._u.delete(2),await Ju(n)):e||(n._u.add(2),await ca(n),n.gu.set("Unknown"))}function ws(t){return t.pu||(t.pu=function(e,n,r){const i=Z(e);return i.su(),new pb(n,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:wb.bind(null,t),Zr:Eb.bind(null,t),Wo:Sb.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),$p(t)?Dp(t):t.gu.set("Unknown")):(await t.pu.stop(),xE(t))})),t.pu}function kr(t){return t.Iu||(t.Iu=function(e,n,r){const i=Z(e);return i.su(),new mb(n,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:Cb.bind(null,t),Zr:Ib.bind(null,t),tu:xb.bind(null,t),Zo:Tb.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Oo(),await Zu(t)):(await t.Iu.stop(),t.fu.length>0&&(B("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Lp(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Mp(t,e){if(Fn("AsyncQueue",`${e}: ${t}`),aa(t))return new W(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=zs(),this.sortedSet=new Be(this.comparator)}static emptySet(e){return new Vi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Vi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Vi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(){this.Tu=new Be(H.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):J():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class is{constructor(e,n,r,i,s,o,a,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new is(e,n,Vi.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ku(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(){this.Au=void 0,this.listeners=[]}}class Nb{constructor(){this.queries=new vs(e=>Yw(e),Ku),this.onlineState="Unknown",this.Ru=new Set}}async function Ob(t,e){const n=Z(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Ab),i)try{s.Au=await n.onListen(r)}catch(o){const a=Mp(o,`Initialization of query '${Dd(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&Fp(n)}async function Rb(t,e){const n=Z(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Pb(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&Fp(n)}function Db(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Fp(t){t.Ru.forEach(e=>{e.next()})}class $b{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new is(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=is.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e){this.key=e}}class NE{constructor(e){this.key=e}}class Lb{constructor(e,n){this.query=e,this.Lu=n,this.Uu=null,this.current=!1,this.qu=ne(),this.mutatedKeys=ne(),this.Ku=Xw(e),this.Gu=new Vi(this.Ku)}get Qu(){return this.Lu}ju(e,n){const r=n?n.Wu:new I0,i=n?n.Gu:this.Gu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),g=Tp(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),w=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let _=!1;d&&g?d.data.isEqual(g.data)?v!==w&&(r.track({type:3,doc:g}),_=!0):this.zu(d,g)||(r.track({type:2,doc:g}),_=!0,(l&&this.Ku(g,l)>0||u&&this.Ku(g,u)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),_=!0):d&&!g&&(r.track({type:1,doc:d}),_=!0,(l||u)&&(a=!0)),_&&(g?(o=o.add(g),s=w?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Gu:o,Wu:r,$i:a,mutatedKeys:s}}zu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.Wu.Eu();s.sort((u,c)=>function(h,d){const g=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return g(h)-g(d)}(u.type,c.type)||this.Ku(u.doc,c.doc)),this.Hu(r);const o=n?this.Ju():[],a=this.qu.size===0&&this.current?1:0,l=a!==this.Uu;return this.Uu=a,s.length!==0||l?{snapshot:new is(this.query,e.Gu,i,s,e.mutatedKeys,a===0,l,!1),Yu:o}:{Yu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new I0,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.qu;this.qu=ne(),this.Gu.forEach(r=>{this.Xu(r.key)&&(this.qu=this.qu.add(r.key))});const n=[];return e.forEach(r=>{this.qu.has(r)||n.push(new NE(r))}),this.qu.forEach(r=>{e.has(r)||n.push(new AE(r))}),n}Zu(e){this.Lu=e.Hi,this.qu=ne();const n=this.ju(e.documents);return this.applyChanges(n,!0)}tc(){return is.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.Uu===0)}}class Mb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Fb{constructor(e){this.key=e,this.ec=!1}}class Ub{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new vs(a=>Yw(a),Ku),this.ic=new Map,this.rc=new Set,this.oc=new Be(H.comparator),this.uc=new Map,this.cc=new Np,this.ac={},this.hc=new Map,this.lc=rs.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function zb(t,e){const n=Yb(t);let r,i;const s=n.sc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const o=await ab(n.localStore,Un(e));n.isPrimaryClient&&_E(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Vb(n,e,r,a==="current")}return i}async function Vb(t,e,n,r){t.dc=(c,h,d)=>async function(g,v,w,_){let p=v.view.ju(w);p.$i&&(p=await k0(g.localStore,v.query,!1).then(({documents:E})=>v.view.ju(E,p)));const f=_&&_.targetChanges.get(v.targetId),m=v.view.applyChanges(p,g.isPrimaryClient,f);return A0(g,v.targetId,m.Yu),m.snapshot}(t,c,h,d);const i=await k0(t.localStore,e,!0),s=new Lb(e,i.Hi),o=s.ju(i.documents),a=ua.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),l=s.applyChanges(o,t.isPrimaryClient,a);A0(t,n,l.Yu);const u=new Mb(e,n,s);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function jb(t,e){const n=Z(t),r=n.sc.get(e),i=n.ic.get(r.targetId);if(i.length>1)return n.ic.set(r.targetId,i.filter(s=>!Ku(s,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Fd(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),kE(n.remoteStore,r.targetId),Ud(n,r.targetId)}).catch(oa)):(Ud(n,r.targetId),await Fd(n.localStore,r.targetId,!0))}async function Bb(t,e,n){const r=Xb(t);try{const i=await function(s,o){const a=Z(s),l=Ve.now(),u=o.reduce((d,g)=>d.add(g.key),ne());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=zn(),v=ne();return a.Gi.getEntries(d,u).next(w=>{g=w,g.forEach((_,p)=>{p.isValidDocument()||(v=v.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(w=>{c=w;const _=[];for(const p of o){const f=h2(p,c.get(p.key).overlayedDocument);f!=null&&_.push(new Ar(p.key,f,Kw(f.value.mapValue),an.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,_,o)}).next(w=>{h=w;const _=w.applyToLocalDocumentSet(c,v);return a.documentOverlayCache.saveOverlays(d,w.batchId,_)})}).then(()=>({batchId:h.batchId,changes:lE(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.ac[s.currentUser.toKey()];l||(l=new Be(de)),l=l.insert(o,a),s.ac[s.currentUser.toKey()]=l}(r,i.batchId,n),await ha(r,i.changes),await Zu(r.remoteStore)}catch(i){const s=Mp(i,"Failed to persist write");n.reject(s)}}async function OE(t,e){const n=Z(t);try{const r=await ib(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.uc.get(s);o&&(Ee(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?Ee(o.ec):i.removedDocuments.size>0&&(Ee(o.ec),o.ec=!1))}),await ha(n,r,e)}catch(r){await oa(r)}}function b0(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.sc.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=Z(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.bu(o)&&(l=!0)}),l&&Fp(a)}(r.eventManager,e),i.length&&r.nc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Hb(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.uc.get(e),s=i&&i.key;if(s){let o=new Be(H.comparator);o=o.insert(s,nt.newNoDocument(s,te.min()));const a=ne().add(s),l=new Yu(te.min(),new Map,new je(de),o,a);await OE(r,l),r.oc=r.oc.remove(s),r.uc.delete(e),Up(r)}else await Fd(r.localStore,e,!1).then(()=>Ud(r,e,n)).catch(oa)}async function Wb(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await rb(n.localStore,e);PE(n,r,null),RE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ha(n,i)}catch(i){await oa(i)}}async function Gb(t,e,n){const r=Z(t);try{const i=await function(s,o){const a=Z(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(Ee(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);PE(r,e,n),RE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ha(r,i)}catch(i){await oa(i)}}function RE(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function PE(t,e,n){const r=Z(t);let i=r.ac[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ac[r.currentUser.toKey()]=i}}function Ud(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ic.get(e))t.sc.delete(r),n&&t.nc._c(r,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.ls(e).forEach(r=>{t.cc.containsKey(r)||DE(t,r)})}function DE(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(kE(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Up(t))}function A0(t,e,n){for(const r of n)r instanceof AE?(t.cc.addReference(r.key,e),Kb(t,r)):r instanceof NE?(B("SyncEngine","Document no longer in limbo: "+r.key),t.cc.removeReference(r.key,e),t.cc.containsKey(r.key)||DE(t,r.key)):J()}function Kb(t,e){const n=e.key,r=n.path.canonicalString();t.oc.get(n)||t.rc.has(r)||(B("SyncEngine","New document in limbo: "+n),t.rc.add(r),Up(t))}function Up(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new H(Te.fromString(e)),r=t.lc.next();t.uc.set(r,new Fb(n)),t.oc=t.oc.insert(n,r),_E(t.remoteStore,new Gr(Un(Qw(n.path)),r,2,_p.at))}}async function ha(t,e,n){const r=Z(t),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,l)=>{o.push(r.dc(l,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),i.push(u);const c=Rp.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.nc.Wo(i),await async function(a,l){const u=Z(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>T.forEach(l,h=>T.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>T.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!aa(c))throw c;B("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ui.get(h),g=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(g);u.Ui=u.Ui.insert(h,v)}}}(r.localStore,s))}async function qb(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const r=await vE(n.localStore,e);n.currentUser=e,function(i,s){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new W(I.CANCELLED,s))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ha(n,r.ji)}}function Qb(t,e){const n=Z(t),r=n.uc.get(e);if(r&&r.ec)return ne().add(r.key);{let i=ne();const s=n.ic.get(e);if(!s)return i;for(const o of s){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function Yb(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=OE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Qb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Hb.bind(null,e),e.nc.Wo=Pb.bind(null,e.eventManager),e.nc._c=Db.bind(null,e.eventManager),e}function Xb(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Wb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Gb.bind(null,e),e}class Jb{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Xu(e.databaseInfo.databaseId),this.sharedClientState=this.mc(e),this.persistence=this.gc(e),await this.persistence.start(),this.localStore=this.yc(e),this.gcScheduler=this.Ic(e,this.localStore),this.indexBackfillerScheduler=this.Tc(e,this.localStore)}Ic(e,n){return null}Tc(e,n){return null}yc(e){return nb(this.persistence,new eb,e.initialUser,this.It)}gc(e){return new J2(Op.Bs,this.It)}mc(e){return new ub}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Zb{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>b0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=qb.bind(null,this.syncEngine),await bb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Nb}createDatastore(e){const n=Xu(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new fb(i));var i;return function(s,o,a,l){return new gb(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>b0(this.syncEngine,a,0),o=x0.C()?new x0:new cb,new vb(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new Ub(r,i,s,o,a,l);return u&&(c.fc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Z(e);B("RemoteStore","RemoteStore shutting down."),n._u.add(5),await ca(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ac(this.observer.next,e)}error(e){this.observer.error?this.Ac(this.observer.error,e):Fn("Uncaught Error in snapshot listener:",e)}Rc(){this.muted=!0}Ac(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=It.UNAUTHENTICATED,this.clientId=Bw.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{B("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(B("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Mp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function nA(t,e){t.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await vE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function rA(t,e){t.asyncQueue.verifyOperationInProgress();const n=await iA(t);B("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>T0(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>T0(e.remoteStore,s)),t.onlineComponents=e}async function iA(t){return t.offlineComponents||(B("FirestoreClient","Using default OfflineComponentProvider"),await nA(t,new Jb)),t.offlineComponents}async function $E(t){return t.onlineComponents||(B("FirestoreClient","Using default OnlineComponentProvider"),await rA(t,new Zb)),t.onlineComponents}function sA(t){return $E(t).then(e=>e.syncEngine)}async function oA(t){const e=await $E(t),n=e.eventManager;return n.onListen=zb.bind(null,e.syncEngine),n.onUnlisten=jb.bind(null,e.syncEngine),n}function aA(t,e,n={}){const r=new pr;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new eA({next:h=>{s.enqueueAndForget(()=>Rb(i,c)),h.fromCache&&a.source==="server"?l.reject(new W(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new $b(o,u,{includeMetadataChanges:!0,Nu:!0});return Ob(i,c)}(await oA(t),t.asyncQueue,e,n,r)),r.promise}const N0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(t,e,n){if(!n)throw new W(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function lA(t,e,n,r){if(e===!0&&r===!0)throw new W(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function O0(t){if(!H.isDocumentKey(t))throw new W(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function R0(t){if(H.isDocumentKey(t))throw new W(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function zp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function ss(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zp(t);throw new W(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new W(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,lA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new P0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new W(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new P0(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new TI;switch(n.type){case"gapi":const r=n.client;return new AI(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new W(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=N0.get(e);n&&(B("ComponentProvider","Removing Datastore"),N0.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qt(this.firestore,e,this._key)}}class ec{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ec(this.firestore,e,this._query)}}class mr extends ec{constructor(e,n,r){super(e,n,Qw(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qt(this.firestore,null,new H(e))}withConverter(e){return new mr(this.firestore,e,this._path)}}function ou(t,e,...n){if(t=kt(t),LE("collection","path",e),t instanceof Vp){const r=Te.fromString(e,...n);return R0(r),new mr(t,null,r)}{if(!(t instanceof qt||t instanceof mr))throw new W(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return R0(r),new mr(t.firestore,null,r)}}function zd(t,e,...n){if(t=kt(t),arguments.length===1&&(e=Bw.R()),LE("doc","path",e),t instanceof Vp){const r=Te.fromString(e,...n);return O0(r),new qt(t,null,new H(r))}{if(!(t instanceof qt||t instanceof mr))throw new W(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return O0(r),new qt(t.firestore,t instanceof mr?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new EE(this,"async_queue_retry"),this.jc=()=>{const n=dh();n&&B("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.bo()};const e=dh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Wc(),this.zc(e)}enterRestrictedMode(e){if(!this.Lc){this.Lc=!0,this.Gc=e||!1;const n=dh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Wc(),this.Lc)return new Promise(()=>{});const n=new pr;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Bc.push(e),this.Hc()))}async Hc(){if(this.Bc.length!==0){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(e){if(!aa(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(e){const n=this.$c.then(()=>(this.Kc=!0,e().catch(r=>{this.qc=r,this.Kc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Fn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Kc=!1,r))));return this.$c=n,n}enqueueAfterDelay(e,n,r){this.Wc(),this.Qc.indexOf(e)>-1&&(n=0);const i=Lp.createAndSchedule(this,e,n,r,s=>this.Jc(s));return this.Uc.push(i),i}Wc(){this.qc&&J()}verifyOperationInProgress(){}async Yc(){let e;do e=this.$c,await e;while(e!==this.$c)}Xc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}Zc(e){return this.Yc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Yc()})}ta(e){this.Qc.push(e)}Jc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class da extends Vp{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new uA,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||FE(this),this._firestoreClient.terminate()}}function cA(t,e){const n=typeof t=="object"?t:z1(),r=typeof t=="string"?t:e||"(default)";return Yf(n,"firestore").getImmediate({identifier:r})}function ME(t){return t._firestoreClient||FE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function FE(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new zI(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new tA(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this._byteString=e}static fromBase64String(e){try{return new os(at.fromBase64String(e))}catch(n){throw new W(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new os(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA=/^__.*__$/;class dA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ar(e,this.data,this.fieldMask,n,this.fieldTransforms):new la(e,this.data,n,this.fieldTransforms)}}class UE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ar(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function zE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class Hp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ea(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(e){return new Hp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.sa({path:r,ra:!1});return i.oa(e),i}ua(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.sa({path:r,ra:!1});return i.ea(),i}ca(e){return this.sa({path:void 0,ra:!0})}aa(e){return au(e,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ea(){if(this.path)for(let e=0;e<this.path.length;e++)this.oa(this.path.get(e))}oa(e){if(e.length===0)throw this.aa("Document fields must not be empty");if(zE(this.na)&&hA.test(e))throw this.aa('Document fields cannot begin and end with "__"')}}class fA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||Xu(e)}fa(e,n,r,i=!1){return new Hp({na:e,methodName:n,la:r,path:ft.emptyPath(),ra:!1,ha:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function VE(t){const e=t._freezeSettings(),n=Xu(t._databaseId);return new fA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function pA(t,e,n,r,i,s={}){const o=t.fa(s.merge||s.mergeFields?2:0,e,n,i);Wp("Data must be an object, but it was:",o,r);const a=jE(r,o);let l,u;if(s.merge)l=new Kt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Vd(e,h,n);if(!o.contains(d))throw new W(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);HE(c,d)||c.push(d)}l=new Kt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new dA(new At(a),l,u)}class nc extends jp{_toFieldTransform(e){if(e.na!==2)throw e.na===1?e.aa(`${this._methodName}() can only appear at the top level of your update data`):e.aa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof nc}}function mA(t,e,n,r){const i=t.fa(1,e,n);Wp("Data must be an object, but it was:",i,r);const s=[],o=At.empty();hi(r,(l,u)=>{const c=Gp(e,l,n);u=kt(u);const h=i.ua(c);if(u instanceof nc)s.push(c);else{const d=rc(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Kt(s);return new UE(o,a,i.fieldTransforms)}function gA(t,e,n,r,i,s){const o=t.fa(1,e,n),a=[Vd(e,r,n)],l=[i];if(s.length%2!=0)throw new W(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Vd(e,s[d])),l.push(s[d+1]);const u=[],c=At.empty();for(let d=a.length-1;d>=0;--d)if(!HE(u,a[d])){const g=a[d];let v=l[d];v=kt(v);const w=o.ua(g);if(v instanceof nc)u.push(g);else{const _=rc(v,w);_!=null&&(u.push(g),c.set(g,_))}}const h=new Kt(u);return new UE(c,h,o.fieldTransforms)}function rc(t,e){if(BE(t=kt(t)))return Wp("Unsupported field value:",e,t),jE(t,e);if(t instanceof jp)return function(n,r){if(!zE(r.na))throw r.aa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.aa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ra&&e.na!==4)throw e.aa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=rc(o,r.ca(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=kt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return s2(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ve.fromDate(n);return{timestampValue:iu(r.It,i)}}if(n instanceof Ve){const i=new Ve(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:iu(r.It,i)}}if(n instanceof Bp)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof os)return{bytesValue:fE(r.It,n._byteString)};if(n instanceof qt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.aa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:bp(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.aa(`Unsupported field value: ${zp(n)}`)}(t,e)}function jE(t,e){const n={};return Hw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hi(t,(r,i)=>{const s=rc(i,e.ia(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function BE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof Bp||t instanceof os||t instanceof qt||t instanceof jp)}function Wp(t,e,n){if(!BE(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=zp(n);throw r==="an object"?e.aa(t+" a custom object"):e.aa(t+" "+r)}}function Vd(t,e,n){if((e=kt(e))instanceof tc)return e._internalPath;if(typeof e=="string")return Gp(t,e);throw au("Field path arguments must be of type string or ",t,!1,void 0,n)}const yA=new RegExp("[~\\*/\\[\\]]");function Gp(t,e,n){if(e.search(yA)>=0)throw au(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new tc(...e.split("."))._internalPath}catch{throw au(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function au(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new W(I.INVALID_ARGUMENT,a+t+l)}function HE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(GE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class vA extends WE{data(){return super.data()}}function GE(t,e){return typeof e=="string"?Gp(t,e):e instanceof tc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wA extends WE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new dl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(GE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class dl extends wA{data(e={}){return super.data(e)}}class EA{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Wa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new dl(this._firestore,this._userDataWriter,r.key,r,new Wa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new dl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Wa(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new dl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Wa(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:SA(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function SA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{convertValue(e,n="none"){switch(si(e)){case 0:return null;case 1:return e.booleanValue;case 2:return $e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ts(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw J()}}convertObject(e,n){const r={};return hi(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Bp($e(e.latitude),$e(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Gw(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Oo(e));default:return null}}convertTimestamp(e){const n=_r(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);Ee(yE(r));const i=new Ro(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||Fn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class xA extends kA{constructor(e){super(),this.firestore=e}convertBytes(e){return new os(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new qt(this.firestore,null,n)}}function Kp(t){t=ss(t,ec);const e=ss(t.firestore,da),n=ME(e),r=new xA(e);return _A(t._query),aA(n,t._query).then(i=>new EA(e,r,t,i))}function TA(t,e,n,...r){t=ss(t,qt);const i=ss(t.firestore,da),s=VE(i);let o;return o=typeof(e=kt(e))=="string"||e instanceof tc?gA(s,"updateDoc",t._key,e,n,r):mA(s,"updateDoc",t._key,e),qp(i,[o.toMutation(t._key,an.exists(!0))])}function IA(t){return qp(ss(t.firestore,da),[new Ip(t._key,an.none())])}function bA(t,e){const n=ss(t.firestore,da),r=zd(t),i=CA(t.converter,e);return qp(n,[pA(VE(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,an.exists(!1))]).then(()=>r)}function qp(t,e){return function(n,r){const i=new pr;return n.asyncQueue.enqueueAndForget(async()=>Bb(await sA(n),r,i)),i.promise}(ME(t),e)}(function(t,e=!0){(function(n){ys=n})(Yo),Ji(new Zr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new da(new II(n.getProvider("auth-internal")),new OI(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new W(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ro(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),fr(r0,"3.4.15",t),fr(r0,"3.4.15","esm2017")})();function Qp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function KE(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const AA=KE,qE=new qo("auth","Firebase",KE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0=new qf("@firebase/auth");function fl(t,...e){D0.logLevel<=ue.ERROR&&D0.error(`Auth (${Yo}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t,...e){throw Yp(t,...e)}function yn(t,...e){return Yp(t,...e)}function QE(t,e,n){const r=Object.assign(Object.assign({},AA()),{[e]:n});return new qo("auth","Firebase",r).create(e,{appName:t.name})}function NA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Xt(t,"argument-error"),QE(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Yp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return qE.create(t,...e)}function Q(t,e,...n){if(!t)throw Yp(e,...n)}function bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fl(e),new Error(e)}function Vn(t,e){t||bn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0=new Map;function An(t){Vn(t instanceof Function,"Expected a class definition");let e=$0.get(t);return e?(Vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$0.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OA(t,e){const n=Yf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Bl(s,e!=null?e:{}))return i;Xt(i,"already-initialized")}return n.initialize({options:e})}function RA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(An);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function PA(){return L0()==="http:"||L0()==="https:"}function L0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(PA()||D1()||"connection"in navigator)?navigator.onLine:!0}function $A(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vn(n>e,"Short delay should be less than long delay!"),this.isMobile=P1()||$1()}get(){return DA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(t,e){Vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA=new fa(3e4,6e4);function pa(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ma(t,e,n,r,i={}){return XE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Qo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),YE.fetch()(JE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function XE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},LA),e);try{const i=new FA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ga(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ga(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ga(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ga(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw QE(t,c,u);Xt(t,c)}}catch(i){if(i instanceof Bn)throw i;Xt(t,"network-request-failed")}}async function ga(t,e,n,r,i={}){const s=await ma(t,e,n,r,i);return"mfaPendingCredential"in s&&Xt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function JE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Xp(t.config,i):`${t.config.apiScheme}://${i}`}class FA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(yn(this.auth,"network-request-failed")),MA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ga(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=yn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UA(t,e){return ma(t,"POST","/v1/accounts:delete",e)}async function zA(t,e){return ma(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VA(t,e=!1){const n=kt(t),r=await n.getIdToken(e),i=Jp(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ro(fh(i.auth_time)),issuedAtTime:ro(fh(i.iat)),expirationTime:ro(fh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function fh(t){return Number(t)*1e3}function Jp(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return fl("JWT malformed, contained fewer than 3 sections"),null;try{const s=JC(r);return s?JSON.parse(s):(fl("Failed to decode base64 JWT payload"),null)}catch(s){return fl("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function jA(t){const e=Jp(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Bn&&BA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function BA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ro(this.lastLoginAt),this.creationTime=ro(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Mo(t,zA(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?KA(s.providerUserInfo):[],a=GA(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ZE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function WA(t){const e=kt(t);await lu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function GA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function KA(t){return t.map(e=>{var{providerId:n}=e,r=Qp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qA(t,e){const n=await XE(t,{},async()=>{const r=Qo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=JE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",YE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await qA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Fo;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fo,this.toJSON())}_performRefresh(){return bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Qp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new HA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ZE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Mo(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return VA(this,e)}reload(){return WA(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Kr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await lu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Mo(this,UA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:E,isAnonymous:C,providerData:A,stsTokenManager:$}=n;Q(m&&$,e,"internal-error");const k=Fo.fromJSON(this.name,$);Q(typeof m=="string",e,"internal-error"),Gn(h,e.name),Gn(d,e.name),Q(typeof E=="boolean",e,"internal-error"),Q(typeof C=="boolean",e,"internal-error"),Gn(g,e.name),Gn(v,e.name),Gn(w,e.name),Gn(_,e.name),Gn(p,e.name),Gn(f,e.name);const L=new Kr({uid:m,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:C,photoURL:v,phoneNumber:g,tenantId:w,stsTokenManager:k,createdAt:p,lastLoginAt:f});return A&&Array.isArray(A)&&(L.providerData=A.map(V=>Object.assign({},V))),_&&(L._redirectEventId=_),L}static async _fromIdTokenResponse(e,n,r=!1){const i=new Fo;i.updateFromServerResponse(n);const s=new Kr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await lu(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}eS.type="NONE";const M0=eS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(t,e,n){return`firebase:${t}:${e}:${n}`}class ji{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=pl(this.userKey,i.apiKey,s),this.fullPersistenceKey=pl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ji(An(M0),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||An(M0);const o=pl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Kr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ji(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ji(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sS(e))return"Blackberry";if(oS(e))return"Webos";if(Zp(e))return"Safari";if((e.includes("chrome/")||nS(e))&&!e.includes("edge/"))return"Chrome";if(iS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tS(t=Ke()){return/firefox\//i.test(t)}function Zp(t=Ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nS(t=Ke()){return/crios\//i.test(t)}function rS(t=Ke()){return/iemobile/i.test(t)}function iS(t=Ke()){return/android/i.test(t)}function sS(t=Ke()){return/blackberry/i.test(t)}function oS(t=Ke()){return/webos/i.test(t)}function ic(t=Ke()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function QA(t=Ke()){var e;return ic(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function YA(){return L1()&&document.documentMode===10}function aS(t=Ke()){return ic(t)||iS(t)||oS(t)||sS(t)||/windows phone/i.test(t)||rS(t)}function XA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(t,e=[]){let n;switch(t){case"Browser":n=F0(Ke());break;case"Worker":n=`${F0(Ke())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Yo}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new U0(this),this.idTokenSubscription=new U0(this),this.beforeStateQueue=new JA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qE,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=An(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ji.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await lu(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$A()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?kt(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(An(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&An(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await ji.create(this,[An(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Q(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ya(t){return kt(t)}class U0{constructor(e){this.auth=e,this.observer=null,this.addObserver=lx(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bn("not implemented")}_getIdTokenResponse(e){return bn("not implemented")}_linkToIdToken(e,n){return bn("not implemented")}_getReauthenticationResolver(e){return bn("not implemented")}}async function eN(t,e){return ma(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tN(t,e){return ga(t,"POST","/v1/accounts:signInWithPassword",pa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nN(t,e){return ga(t,"POST","/v1/accounts:signInWithEmailLink",pa(t,e))}async function rN(t,e){return ga(t,"POST","/v1/accounts:signInWithEmailLink",pa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo extends em{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Uo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Uo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return tN(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return nN(e,{email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return eN(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return rN(e,{idToken:n,email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bi(t,e){return ga(t,"POST","/v1/accounts:signInWithIdp",pa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN="http://localhost";class oi extends em{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new oi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Qp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new oi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Bi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Bi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Bi(e,n)}buildRequest(){const e={requestUri:iN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function oN(t){const e=Ms(Fs(t)).link,n=e?Ms(Fs(e)).deep_link_id:null,r=Ms(Fs(t)).deep_link_id;return(r?Ms(Fs(r)).link:null)||r||n||e||t}class tm{constructor(e){var n,r,i,s,o,a;const l=Ms(Fs(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=sN((i=l.mode)!==null&&i!==void 0?i:null);Q(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=oN(e);try{return new tm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(){this.providerId=Es.PROVIDER_ID}static credential(e,n){return Uo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=tm.parseLink(n);return Q(r,"argument-error"),Uo._fromEmailAndCode(e,r.code,r.tenantId)}}Es.PROVIDER_ID="password";Es.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Es.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va extends nm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends va{constructor(){super("facebook.com")}static credential(e){return oi._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends va{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return oi._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Cn.credential(n,r)}catch{return null}}}Cn.GOOGLE_SIGN_IN_METHOD="google.com";Cn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends va{constructor(){super("github.com")}static credential(e){return oi._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends va{constructor(){super("twitter.com")}static credential(e,n){return oi._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.TWITTER_SIGN_IN_METHOD="twitter.com";Zn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aN(t,e){return ga(t,"POST","/v1/accounts:signUp",pa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Kr._fromIdTokenResponse(e,r,i),o=z0(r);return new ai({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=z0(r);return new ai({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function z0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu extends Bn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,uu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new uu(e,n,r,i)}}function uS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?uu._fromErrorAndOperation(t,s,e,r):s})}async function lN(t,e,n=!1){const r=await Mo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ai._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uN(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await Mo(t,uS(i,s,e,t),n);Q(o.idToken,i,"internal-error");const a=Jp(o.idToken);Q(a,i,"internal-error");const{sub:l}=a;return Q(t.uid===l,i,"user-mismatch"),ai._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Xt(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cS(t,e,n=!1){const r="signIn",i=await uS(t,r,e),s=await ai._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function cN(t,e){return cS(ya(t),e)}async function hN(t,e,n){const r=ya(t),i=await aN(r,{returnSecureToken:!0,email:e,password:n}),s=await ai._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function dN(t,e,n){return cN(kt(t),Es.credential(e,n))}function fN(t,e,n,r){return kt(t).onAuthStateChanged(e,n,r)}function pN(t){return kt(t).signOut()}const cu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(cu,"1"),this.storage.removeItem(cu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mN(){const t=Ke();return Zp(t)||ic(t)}const gN=1e3,yN=10;class dS extends hS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=mN()&&XA(),this.fallbackToPolling=aS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);YA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,yN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},gN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}dS.type="LOCAL";const vN=dS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS extends hS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}fS.type="SESSION";const pS=fS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wN(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new sc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await wN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=rm("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(){return window}function SN(t){vn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mS(){return typeof vn().WorkerGlobalScope<"u"&&typeof vn().importScripts=="function"}async function _N(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function CN(){return mS()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS="firebaseLocalStorageDb",xN=1,hu="firebaseLocalStorage",yS="fbase_key";class wa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function oc(t,e){return t.transaction([hu],e?"readwrite":"readonly").objectStore(hu)}function TN(){const t=indexedDB.deleteDatabase(gS);return new wa(t).toPromise()}function Bd(){const t=indexedDB.open(gS,xN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(hu,{keyPath:yS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(hu)?e(r):(r.close(),await TN(),e(await Bd()))})})}async function V0(t,e,n){const r=oc(t,!0).put({[yS]:e,value:n});return new wa(r).toPromise()}async function IN(t,e){const n=oc(t,!1).get(e),r=await new wa(n).toPromise();return r===void 0?null:r.value}function j0(t,e){const n=oc(t,!0).delete(e);return new wa(n).toPromise()}const bN=800,AN=3;class vS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>AN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sc._getInstance(CN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await _N(),!this.activeServiceWorker)return;this.sender=new EN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bd();return await V0(e,cu,"1"),await j0(e,cu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>V0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>IN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>j0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=oc(i,!1).getAll();return new wa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vS.type="LOCAL";const NN=vS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ON(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function RN(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=yn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",ON().appendChild(r)})}function PN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new fa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wS(t,e){return e?An(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im extends em{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Bi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Bi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function DN(t){return cS(t.auth,new im(t),t.bypassAuthState)}function $N(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),uN(n,new im(t),t.bypassAuthState)}async function LN(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),lN(n,new im(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return DN;case"linkViaPopup":case"linkViaRedirect":return LN;case"reauthViaPopup":case"reauthViaRedirect":return $N;default:Xt(this.auth,"internal-error")}}resolve(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN=new fa(2e3,1e4);class Ri extends ES{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ri.currentPopupAction&&Ri.currentPopupAction.cancel(),Ri.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){Vn(this.filter.length===1,"Popup operations only handle one event");const e=rm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ri.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,MN.get())};e()}}Ri.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN="pendingRedirect",ml=new Map;class UN extends ES{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ml.get(this.auth._key());if(!e){try{const r=await zN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ml.set(this.auth._key(),e)}return this.bypassAuthState||ml.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zN(t,e){const n=_S(e),r=SS(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function VN(t,e){return SS(t)._set(_S(e),"true")}function jN(t,e){ml.set(t._key(),e)}function SS(t){return An(t._redirectPersistence)}function _S(t){return pl(FN,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BN(t,e,n){return HN(t,e,n)}async function HN(t,e,n){const r=ya(t);NA(t,e,nm);const i=wS(r,n);return await VN(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function WN(t,e,n=!1){const r=ya(t),i=wS(r,e),o=await new UN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN=10*60*1e3;class KN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!kS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(yn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GN&&this.cachedEventUids.clear(),this.cachedEventUids.has(B0(e))}saveEventToCache(e){this.cachedEventUids.add(B0(e)),this.lastProcessedEventTime=Date.now()}}function B0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function kS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kS(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QN(t,e={}){return ma(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,XN=/^https?/;async function JN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await QN(t);for(const n of e)try{if(ZN(n))return}catch{}Xt(t,"unauthorized-domain")}function ZN(t){const e=jd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!XN.test(n))return!1;if(YN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eO=new fa(3e4,6e4);function H0(){const t=vn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tO(t){return new Promise((e,n)=>{var r,i,s;function o(){H0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{H0(),n(yn(t,"network-request-failed"))},timeout:eO.get()})}if(!((i=(r=vn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=vn().gapi)===null||s===void 0)&&s.load)o();else{const a=PN("iframefcb");return vn()[a]=()=>{gapi.load?o():n(yn(t,"network-request-failed"))},RN(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw gl=null,e})}let gl=null;function nO(t){return gl=gl||tO(t),gl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rO=new fa(5e3,15e3),iO="__/auth/iframe",sO="emulator/auth/iframe",oO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lO(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Xp(e,sO):`https://${t.config.authDomain}/${iO}`,r={apiKey:e.apiKey,appName:t.name,v:Yo},i=aO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Qo(r).slice(1)}`}async function uO(t){const e=await nO(t),n=vn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:lO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=yn(t,"network-request-failed"),a=vn().setTimeout(()=>{s(o)},rO.get());function l(){vn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hO=500,dO=600,fO="_blank",pO="http://localhost";class W0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mO(t,e,n,r=hO,i=dO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},cO),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ke().toLowerCase();n&&(a=nS(u)?fO:n),tS(u)&&(e=e||pO,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,v])=>`${d}${g}=${v},`,"");if(QA(u)&&a!=="_self")return gO(e||"",a),new W0(null);const h=window.open(e||"",a,c);Q(h,t,"popup-blocked");try{h.focus()}catch{}return new W0(h)}function gO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yO="__/auth/handler",vO="emulator/auth/handler";function G0(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Yo,eventId:i};if(e instanceof nm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ax(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof va){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${wO(t)}?${Qo(a).slice(1)}`}function wO({config:t}){return t.emulator?Xp(t,vO):`https://${t.authDomain}/${yO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph="webStorageSupport";class EO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pS,this._completeRedirectFn=WN,this._overrideRedirectResult=jN}async _openPopup(e,n,r,i){var s;Vn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=G0(e,n,r,jd(),i);return mO(e,o,rm())}async _openRedirect(e,n,r,i){return await this._originValidation(e),SN(G0(e,n,r,jd(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Vn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await uO(e),r=new KN(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ph,{type:ph},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ph];o!==void 0&&n(!!o),Xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=JN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return aS()||Zp()||ic()}}const SO=EO;var K0="@firebase/auth",q0="0.20.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _O{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function CO(t){Ji(new Zr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{Q(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),Q(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lS(t)},c=new ZA(a,l,u);return RA(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ji(new Zr("auth-internal",e=>{const n=ya(e.getProvider("auth").getImmediate());return(r=>new _O(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fr(K0,q0,kO(t)),fr(K0,q0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xO(t=z1()){const e=Yf(t,"auth");return e.isInitialized()?e.getImmediate():OA(t,{popupRedirectResolver:SO,persistence:[NN,vN,pS]})}CO("Browser");const TO={apiKey:"AIzaSyB_tCELwJvFTBHZiByBbQpSj_6_dlu_R4Y",authDomain:"min-notes-89eaf.firebaseapp.com",projectId:"min-notes-89eaf",storageBucket:"min-notes-89eaf.appspot.com",messagingSenderId:"330046385037",appId:"1:330046385037:web:901910e862abfb41c0ebc4"},CS=aT(TO),Rs=xO(CS),$r=cA(CS);var ac={exports:{}},lc={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IO=b.exports,bO=Symbol.for("react.element"),AO=Symbol.for("react.fragment"),NO=Object.prototype.hasOwnProperty,OO=IO.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,RO={key:!0,ref:!0,__self:!0,__source:!0};function xS(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)NO.call(e,r)&&!RO.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:bO,type:t,key:s,ref:o,props:i,_owner:OO.current}}lc.Fragment=AO;lc.jsx=xS;lc.jsxs=xS;(function(t){t.exports=lc})(ac);const Sn=ac.exports.Fragment,y=ac.exports.jsx,D=ac.exports.jsxs,TS=b.exports.createContext(),PO=({children:t})=>{const[e,n]=b.exports.useState({});b.exports.useState(!0);const[r,i]=b.exports.useState(""),[s,o]=b.exports.useState(""),[a,l]=b.exports.useState(""),u=async()=>{const f=new Cn;try{await BN(Rs,f)}catch(m){l(m.message),setTimeout(()=>{l("")},5e3)}},c=()=>{pN(Rs)},h=async(f,m)=>{try{await dN(Rs,f,m)}catch(E){o(E.message),setTimeout(()=>{o("")},5e3)}},d=async(f,m)=>{try{await hN(Rs,f,m)}catch(E){i(E.message),setTimeout(()=>{i("")},5e3)}},g=f=>{const m=bA(ou($r,e.uid),f);console.log(m.id)},v=()=>Kp(ou($r,e.uid)),w=(f,m,E,C)=>{const A=zd($r,f,m);TA(A,{title:C,body:E})},_=f=>{IA(zd($r,e.uid,f))},p=()=>{console.log("Hola mundo"),console.log({db:$r,user:e.uid}),firebase.firestore().collection(coleccion).get().then(m=>{const E=firebase.firestore().batch();return m.forEach(C=>{E.delete(C.ref)}),E.commit()}).catch(m=>{console.error("Error al obtener documentos de la colecci\xF3n:",m)})};return b.exports.useEffect(()=>{const f=fN(Rs,m=>{n(m)});return()=>{f()}},[]),b.exports.useEffect(()=>{},[]),y(TS.Provider,{value:{user:e,googleSigIn:u,SignOut:c,SignInWithEmail:h,CreateUserWithEmail:d,GetDocs:v,AddDoc:g,UpdateDoc:w,DeleteDoc:_,DeleteAllDoc:p,createUserError:r,signInError:s,googleSignError:a},children:t})},Nr=()=>b.exports.useContext(TS),DO=({children:t})=>{const{user:e}=Nr();return e?t:y(jC,{to:"/signin"})};var sm={},uc={},om={exports:{}},$O="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",LO=$O,MO=LO;function IS(){}function bS(){}bS.resetWarningCache=IS;var FO=function(){function t(r,i,s,o,a,l){if(l!==MO){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:bS,resetWarningCache:IS};return n.PropTypes=n,n};om.exports=FO();var cc={},tt={};Object.defineProperty(tt,"__esModule",{value:!0});tt.disabledIconStyle=tt.disabledStyle=tt.hoverStyle=tt.svgStyle=tt.iconStyle=tt.lightStyle=tt.darkStyle=void 0;function Q0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function AS(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Q0(Object(n),!0).forEach(function(r){UO(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Q0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function UO(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var NS={height:"50px",width:"240px",border:"none",textAlign:"center",verticalAlign:"center",boxShadow:"0 2px 4px 0 rgba(0,0,0,.25)",fontSize:"16px",lineHeight:"48px",display:"block",borderRadius:"1px",transition:"background-color .218s, border-color .218s, box-shadow .218s",fontFamily:"Roboto,arial,sans-serif",cursor:"pointer",userSelect:"none"},zO=AS({backgroundColor:"#4285f4",color:"#fff"},NS);tt.darkStyle=zO;var VO=AS({backgroundColor:"#fff",color:"rgba(0,0,0,.54)"},NS);tt.lightStyle=VO;var jO={width:"48px",height:"48px",textAlign:"center",verticalAlign:"center",display:"block",marginTop:"1px",marginLeft:"1px",float:"left",backgroundColor:"#fff",borderRadius:"1px",whiteSpace:"nowrap"};tt.iconStyle=jO;var BO={width:"48px",height:"48px",display:"block"};tt.svgStyle=BO;var HO={boxShadow:"0 0 3px 3px rgba(66,133,244,.3)",transition:"background-color .218s, border-color .218s, box-shadow .218s"};tt.hoverStyle=HO;var WO={backgroundColor:"rgba(37, 5, 5, .08)",color:"rgba(0, 0, 0, .40)",cursor:"not-allowed"};tt.disabledStyle=WO;var GO={backgroundColor:"transparent"};tt.disabledIconStyle=GO;Object.defineProperty(cc,"__esModule",{value:!0});cc.GoogleIcon=void 0;var N=OS(b.exports),Y0=OS(om.exports),Hi=tt;function OS(t){return t&&t.__esModule?t:{default:t}}function X0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function KO(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?X0(Object(n),!0).forEach(function(r){qO(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):X0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function qO(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var QO=N.default.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"46px",height:"46px",viewBox:"0 0 46 46",style:Hi.svgStyle},N.default.createElement("defs",null,N.default.createElement("filter",{x:"-50%",y:"-50%",width:"200%",height:"200%",filterUnits:"objectBoundingBox",id:"filter-1"},N.default.createElement("feOffset",{dx:"0",dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}),N.default.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),N.default.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0",in:"shadowBlurOuter1",type:"matrix",result:"shadowMatrixOuter1"}),N.default.createElement("feOffset",{dx:"0",dy:"0",in:"SourceAlpha",result:"shadowOffsetOuter2"}),N.default.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter2",result:"shadowBlurOuter2"}),N.default.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0",in:"shadowBlurOuter2",type:"matrix",result:"shadowMatrixOuter2"}),N.default.createElement("feMerge",null,N.default.createElement("feMergeNode",{in:"shadowMatrixOuter1"}),N.default.createElement("feMergeNode",{in:"shadowMatrixOuter2"}),N.default.createElement("feMergeNode",{in:"SourceGraphic"}))),N.default.createElement("rect",{id:"path-2",x:"0",y:"0",width:"40",height:"40",rx:"2"}),N.default.createElement("rect",{id:"path-3",x:"5",y:"5",width:"38",height:"38",rx:"1"})),N.default.createElement("g",{id:"Google-Button",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},N.default.createElement("g",{id:"9-PATCH",transform:"translate(-608.000000, -219.000000)"}),N.default.createElement("g",{id:"btn_google_dark_normal",transform:"translate(-1.000000, -1.000000)"},N.default.createElement("g",{id:"button",transform:"translate(4.000000, 4.000000)",filter:"url(#filter-1)"},N.default.createElement("g",{id:"button-bg"},N.default.createElement("use",{fill:"#4285F4",fillRule:"evenodd"}),N.default.createElement("use",{fill:"none"}),N.default.createElement("use",{fill:"none"}),N.default.createElement("use",{fill:"none"}))),N.default.createElement("g",{id:"button-bg-copy"},N.default.createElement("use",{fill:"#FFFFFF",fillRule:"evenodd"}),N.default.createElement("use",{fill:"none"}),N.default.createElement("use",{fill:"none"}),N.default.createElement("use",{fill:"none"})),N.default.createElement("g",{id:"logo_googleg_48dp",transform:"translate(15.000000, 15.000000)"},N.default.createElement("path",{d:"M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z",id:"Shape",fill:"#4285F4"}),N.default.createElement("path",{d:"M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z",id:"Shape",fill:"#34A853"}),N.default.createElement("path",{d:"M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z",id:"Shape",fill:"#FBBC05"}),N.default.createElement("path",{d:"M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z",id:"Shape",fill:"#EA4335"}),N.default.createElement("path",{d:"M0,0 L18,0 L18,18 L0,18 L0,0 Z",id:"Shape"})),N.default.createElement("g",{id:"handles_square"})))),YO=N.default.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"46px",height:"46px",viewBox:"0 0 46 46",style:Hi.svgStyle},N.default.createElement("defs",null,N.default.createElement("filter",{x:"-50%",y:"-50%",width:"200%",height:"200%",filterUnits:"objectBoundingBox",id:"filter-1"},N.default.createElement("feOffset",{dx:"0",dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}),N.default.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),N.default.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0",in:"shadowBlurOuter1",type:"matrix",result:"shadowMatrixOuter1"}),N.default.createElement("feOffset",{dx:"0",dy:"0",in:"SourceAlpha",result:"shadowOffsetOuter2"}),N.default.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter2",result:"shadowBlurOuter2"}),N.default.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0",in:"shadowBlurOuter2",type:"matrix",result:"shadowMatrixOuter2"}),N.default.createElement("feMerge",null,N.default.createElement("feMergeNode",{in:"shadowMatrixOuter1"}),N.default.createElement("feMergeNode",{in:"shadowMatrixOuter2"}),N.default.createElement("feMergeNode",{in:"SourceGraphic"}))),N.default.createElement("rect",{id:"path-2",x:"0",y:"0",width:"40",height:"40",rx:"2"})),N.default.createElement("g",{id:"Google-Button",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},N.default.createElement("g",{id:"9-PATCH",transform:"translate(-608.000000, -160.000000)"}),N.default.createElement("g",{id:"btn_google_light_normal",transform:"translate(-1.000000, -1.000000)"},N.default.createElement("g",{id:"button",transform:"translate(4.000000, 4.000000)",filter:"url(#filter-1)"},N.default.createElement("g",{id:"button-bg"},N.default.createElement("use",{fill:"#FFFFFF",fillRule:"evenodd"}),N.default.createElement("use",{fill:"none"}),N.default.createElement("use",{fill:"none"}),N.default.createElement("use",{fill:"none"}))),N.default.createElement("g",{id:"logo_googleg_48dp",transform:"translate(15.000000, 15.000000)"},N.default.createElement("path",{d:"M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z",id:"Shape",fill:"#4285F4"}),N.default.createElement("path",{d:"M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z",id:"Shape",fill:"#34A853"}),N.default.createElement("path",{d:"M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z",id:"Shape",fill:"#FBBC05"}),N.default.createElement("path",{d:"M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z",id:"Shape",fill:"#EA4335"}),N.default.createElement("path",{d:"M0,0 L18,0 L18,18 L0,18 L0,0 Z",id:"Shape"})),N.default.createElement("g",{id:"handles_square"})))),XO=N.default.createElement("svg",{width:"46px",height:"46px",viewBox:"0 0 46 46",version:"1.1",xmlns:"http://www.w3.org/2000/svg",style:Hi.svgStyle},N.default.createElement("defs",null,N.default.createElement("rect",{id:"path-1",x:"0",y:"0",width:"40",height:"40",rx:"2"})),N.default.createElement("g",{id:"Google-Button",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},N.default.createElement("g",{id:"9-PATCH",transform:"translate(-788.000000, -219.000000)"}),N.default.createElement("g",{id:"btn_google_dark_disabled",transform:"translate(-1.000000, -1.000000)"},N.default.createElement("g",{id:"button",transform:"translate(4.000000, 4.000000)"},N.default.createElement("g",{id:"button-bg"},N.default.createElement("use",{fillOpacity:"0.08",fill:"#000000",fillRule:"evenodd"}),N.default.createElement("use",{fill:"none"}),N.default.createElement("use",{fill:"none"}),N.default.createElement("use",{fill:"none"}))),N.default.createElement("path",{d:"M24.001,25.71 L24.001,22.362 L32.425,22.362 C32.551,22.929 32.65,23.46 32.65,24.207 C32.65,29.346 29.203,33 24.01,33 C19.042,33 15.01,28.968 15.01,24 C15.01,19.032 19.042,15 24.01,15 C26.44,15 28.474,15.891 30.031,17.349 L27.475,19.833 C26.827,19.221 25.693,18.501 24.01,18.501 C21.031,18.501 18.601,20.976 18.601,24.009 C18.601,27.042 21.031,29.517 24.01,29.517 C27.457,29.517 28.726,27.132 28.96,25.719 L24.001,25.719 L24.001,25.71 Z",id:"Shape-Copy",fillOpacity:"0.4",fill:"#000000"}),N.default.createElement("g",{id:"handles_square"})))),am=function(e){var n=e.disabled,r=e.type;return N.default.createElement("div",{style:n?KO({},Hi.iconStyle,{},Hi.disabledIconStyle):Hi.iconStyle},n?XO:r==="dark"?QO:YO)};cc.GoogleIcon=am;am.propTypes={disabled:Y0.default.bool,type:Y0.default.oneOf(["light","dark"])};am.defaultProps={type:"dark"};Object.defineProperty(uc,"__esModule",{value:!0});uc.default=void 0;var Ka=eR(b.exports),mi=ZO(om.exports),JO=cc,qa=tt;function ZO(t){return t&&t.__esModule?t:{default:t}}function RS(){if(typeof WeakMap!="function")return null;var t=new WeakMap;return RS=function(){return t},t}function eR(t){if(t&&t.__esModule)return t;if(t===null||io(t)!=="object"&&typeof t!="function")return{default:t};var e=RS();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var s=r?Object.getOwnPropertyDescriptor(t,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=t[i]}return n.default=t,e&&e.set(t,n),n}function io(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?io=function(n){return typeof n}:io=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},io(t)}function Hd(){return Hd=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Hd.apply(this,arguments)}function tR(t,e){if(t==null)return{};var n=nR(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function nR(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function J0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function mh(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?J0(Object(n),!0).forEach(function(r){er(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):J0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function rR(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Z0(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function iR(t,e,n){return e&&Z0(t.prototype,e),n&&Z0(t,n),t}function sR(t){return function(){var e=du(t),n;if(aR()){var r=du(this).constructor;n=Reflect.construct(e,arguments,r)}else n=e.apply(this,arguments);return oR(this,n)}}function oR(t,e){return e&&(io(e)==="object"||typeof e=="function")?e:yi(t)}function yi(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function aR(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function du(t){return du=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},du(t)}function lR(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Wd(t,e)}function Wd(t,e){return Wd=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Wd(t,e)}function er(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var lm=function(t){lR(n,t);var e=sR(n);function n(){var r;rR(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),er(yi(r),"state",{hovered:!1}),er(yi(r),"getStyle",function(a){var l=r.props.type==="dark"?qa.darkStyle:qa.lightStyle;return r.state.hovered?mh({},l,{},qa.hoverStyle,{},a):r.props.disabled?mh({},l,{},qa.disabledStyle,{},a):mh({},l,{},a)}),er(yi(r),"mouseOver",function(){r.props.disabled||r.setState({hovered:!0})}),er(yi(r),"mouseOut",function(){r.props.disabled||r.setState({hovered:!1})}),er(yi(r),"click",function(a){r.props.disabled||r.props.onClick(a)}),r}return iR(n,[{key:"render",value:function(){var i=this.props,s=i.label,o=i.style,a=tR(i,["label","style"]);return Ka.default.createElement("div",Hd({},a,{role:"button",onClick:this.click,style:this.getStyle(o),onMouseOver:this.mouseOver,onMouseOut:this.mouseOut}),Ka.default.createElement(JO.GoogleIcon,this.props),Ka.default.createElement("span",null,s))}}]),n}(Ka.PureComponent);uc.default=lm;er(lm,"propTypes",{label:mi.default.string,disabled:mi.default.bool,tabIndex:mi.default.number,onClick:mi.default.func,type:mi.default.oneOf(["light","dark"]),style:mi.default.object});er(lm,"defaultProps",{label:"Sign in with Google",disabled:!1,type:"dark",tabIndex:0,onClick:function(){}});(function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"GoogleButton",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return e.default}});var e=n(uc);function n(r){return r&&r.__esModule?r:{default:r}}})(sm);const uR=my(sm);var hc={exports:{}},ge={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qe=typeof Symbol=="function"&&Symbol.for,um=Qe?Symbol.for("react.element"):60103,cm=Qe?Symbol.for("react.portal"):60106,dc=Qe?Symbol.for("react.fragment"):60107,fc=Qe?Symbol.for("react.strict_mode"):60108,pc=Qe?Symbol.for("react.profiler"):60114,mc=Qe?Symbol.for("react.provider"):60109,gc=Qe?Symbol.for("react.context"):60110,hm=Qe?Symbol.for("react.async_mode"):60111,yc=Qe?Symbol.for("react.concurrent_mode"):60111,vc=Qe?Symbol.for("react.forward_ref"):60112,wc=Qe?Symbol.for("react.suspense"):60113,cR=Qe?Symbol.for("react.suspense_list"):60120,Ec=Qe?Symbol.for("react.memo"):60115,Sc=Qe?Symbol.for("react.lazy"):60116,hR=Qe?Symbol.for("react.block"):60121,dR=Qe?Symbol.for("react.fundamental"):60117,fR=Qe?Symbol.for("react.responder"):60118,pR=Qe?Symbol.for("react.scope"):60119;function jt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case um:switch(t=t.type,t){case hm:case yc:case dc:case pc:case fc:case wc:return t;default:switch(t=t&&t.$$typeof,t){case gc:case vc:case Sc:case Ec:case mc:return t;default:return e}}case cm:return e}}}function PS(t){return jt(t)===yc}ge.AsyncMode=hm;ge.ConcurrentMode=yc;ge.ContextConsumer=gc;ge.ContextProvider=mc;ge.Element=um;ge.ForwardRef=vc;ge.Fragment=dc;ge.Lazy=Sc;ge.Memo=Ec;ge.Portal=cm;ge.Profiler=pc;ge.StrictMode=fc;ge.Suspense=wc;ge.isAsyncMode=function(t){return PS(t)||jt(t)===hm};ge.isConcurrentMode=PS;ge.isContextConsumer=function(t){return jt(t)===gc};ge.isContextProvider=function(t){return jt(t)===mc};ge.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===um};ge.isForwardRef=function(t){return jt(t)===vc};ge.isFragment=function(t){return jt(t)===dc};ge.isLazy=function(t){return jt(t)===Sc};ge.isMemo=function(t){return jt(t)===Ec};ge.isPortal=function(t){return jt(t)===cm};ge.isProfiler=function(t){return jt(t)===pc};ge.isStrictMode=function(t){return jt(t)===fc};ge.isSuspense=function(t){return jt(t)===wc};ge.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===dc||t===yc||t===pc||t===fc||t===wc||t===cR||typeof t=="object"&&t!==null&&(t.$$typeof===Sc||t.$$typeof===Ec||t.$$typeof===mc||t.$$typeof===gc||t.$$typeof===vc||t.$$typeof===dR||t.$$typeof===fR||t.$$typeof===pR||t.$$typeof===hR)};ge.typeOf=jt;(function(t){t.exports=ge})(hc);function mR(t){function e(P,M,F,q,S){for(var ie=0,R=0,Ne=0,ce=0,pe,ee,Ye=0,Tt=0,le,ut=le=pe=0,he=0,Xe=0,Ss=0,Je=0,Sa=F.length,_s=Sa-1,Jt,X="",Re="",kc="",Cc="",Hn;he<Sa;){if(ee=F.charCodeAt(he),he===_s&&R+ce+Ne+ie!==0&&(R!==0&&(ee=R===47?10:47),ce=Ne=ie=0,Sa++,_s++),R+ce+Ne+ie===0){if(he===_s&&(0<Xe&&(X=X.replace(d,"")),0<X.trim().length)){switch(ee){case 32:case 9:case 59:case 13:case 10:break;default:X+=F.charAt(he)}ee=59}switch(ee){case 123:for(X=X.trim(),pe=X.charCodeAt(0),le=1,Je=++he;he<Sa;){switch(ee=F.charCodeAt(he)){case 123:le++;break;case 125:le--;break;case 47:switch(ee=F.charCodeAt(he+1)){case 42:case 47:e:{for(ut=he+1;ut<_s;++ut)switch(F.charCodeAt(ut)){case 47:if(ee===42&&F.charCodeAt(ut-1)===42&&he+2!==ut){he=ut+1;break e}break;case 10:if(ee===47){he=ut+1;break e}}he=ut}}break;case 91:ee++;case 40:ee++;case 34:case 39:for(;he++<_s&&F.charCodeAt(he)!==ee;);}if(le===0)break;he++}switch(le=F.substring(Je,he),pe===0&&(pe=(X=X.replace(h,"").trim()).charCodeAt(0)),pe){case 64:switch(0<Xe&&(X=X.replace(d,"")),ee=X.charCodeAt(1),ee){case 100:case 109:case 115:case 45:Xe=M;break;default:Xe=hn}if(le=e(M,Xe,le,ee,S+1),Je=le.length,0<O&&(Xe=n(hn,X,Ss),Hn=a(3,le,Xe,M,ye,fe,Je,ee,S,q),X=Xe.join(""),Hn!==void 0&&(Je=(le=Hn.trim()).length)===0&&(ee=0,le="")),0<Je)switch(ee){case 115:X=X.replace(A,o);case 100:case 109:case 45:le=X+"{"+le+"}";break;case 107:X=X.replace(f,"$1 $2"),le=X+"{"+le+"}",le=Se===1||Se===2&&s("@"+le,3)?"@-webkit-"+le+"@"+le:"@"+le;break;default:le=X+le,q===112&&(le=(Re+=le,""))}else le="";break;default:le=e(M,n(M,X,Ss),le,q,S+1)}kc+=le,le=Ss=Xe=ut=pe=0,X="",ee=F.charCodeAt(++he);break;case 125:case 59:if(X=(0<Xe?X.replace(d,""):X).trim(),1<(Je=X.length))switch(ut===0&&(pe=X.charCodeAt(0),pe===45||96<pe&&123>pe)&&(Je=(X=X.replace(" ",":")).length),0<O&&(Hn=a(1,X,M,P,ye,fe,Re.length,q,S,q))!==void 0&&(Je=(X=Hn.trim()).length)===0&&(X="\0\0"),pe=X.charCodeAt(0),ee=X.charCodeAt(1),pe){case 0:break;case 64:if(ee===105||ee===99){Cc+=X+F.charAt(he);break}default:X.charCodeAt(Je-1)!==58&&(Re+=i(X,pe,ee,X.charCodeAt(2)))}Ss=Xe=ut=pe=0,X="",ee=F.charCodeAt(++he)}}switch(ee){case 13:case 10:R===47?R=0:1+pe===0&&q!==107&&0<X.length&&(Xe=1,X+="\0"),0<O*K&&a(0,X,M,P,ye,fe,Re.length,q,S,q),fe=1,ye++;break;case 59:case 125:if(R+ce+Ne+ie===0){fe++;break}default:switch(fe++,Jt=F.charAt(he),ee){case 9:case 32:if(ce+ie+R===0)switch(Ye){case 44:case 58:case 9:case 32:Jt="";break;default:ee!==32&&(Jt=" ")}break;case 0:Jt="\\0";break;case 12:Jt="\\f";break;case 11:Jt="\\v";break;case 38:ce+R+ie===0&&(Xe=Ss=1,Jt="\f"+Jt);break;case 108:if(ce+R+ie+Fe===0&&0<ut)switch(he-ut){case 2:Ye===112&&F.charCodeAt(he-3)===58&&(Fe=Ye);case 8:Tt===111&&(Fe=Tt)}break;case 58:ce+R+ie===0&&(ut=he);break;case 44:R+Ne+ce+ie===0&&(Xe=1,Jt+="\r");break;case 34:case 39:R===0&&(ce=ce===ee?0:ce===0?ee:ce);break;case 91:ce+R+Ne===0&&ie++;break;case 93:ce+R+Ne===0&&ie--;break;case 41:ce+R+ie===0&&Ne--;break;case 40:if(ce+R+ie===0){if(pe===0)switch(2*Ye+3*Tt){case 533:break;default:pe=1}Ne++}break;case 64:R+Ne+ce+ie+ut+le===0&&(le=1);break;case 42:case 47:if(!(0<ce+ie+Ne))switch(R){case 0:switch(2*ee+3*F.charCodeAt(he+1)){case 235:R=47;break;case 220:Je=he,R=42}break;case 42:ee===47&&Ye===42&&Je+2!==he&&(F.charCodeAt(Je+2)===33&&(Re+=F.substring(Je,he+1)),Jt="",R=0)}}R===0&&(X+=Jt)}Tt=Ye,Ye=ee,he++}if(Je=Re.length,0<Je){if(Xe=M,0<O&&(Hn=a(2,Re,Xe,P,ye,fe,Je,q,S,q),Hn!==void 0&&(Re=Hn).length===0))return Cc+Re+kc;if(Re=Xe.join(",")+"{"+Re+"}",Se*Fe!==0){switch(Se!==2||s(Re,2)||(Fe=0),Fe){case 111:Re=Re.replace(E,":-moz-$1")+Re;break;case 112:Re=Re.replace(m,"::-webkit-input-$1")+Re.replace(m,"::-moz-$1")+Re.replace(m,":-ms-input-$1")+Re}Fe=0}}return Cc+Re+kc}function n(P,M,F){var q=M.trim().split(_);M=q;var S=q.length,ie=P.length;switch(ie){case 0:case 1:var R=0;for(P=ie===0?"":P[0]+" ";R<S;++R)M[R]=r(P,M[R],F).trim();break;default:var Ne=R=0;for(M=[];R<S;++R)for(var ce=0;ce<ie;++ce)M[Ne++]=r(P[ce]+" ",q[R],F).trim()}return M}function r(P,M,F){var q=M.charCodeAt(0);switch(33>q&&(q=(M=M.trim()).charCodeAt(0)),q){case 38:return M.replace(p,"$1"+P.trim());case 58:return P.trim()+M.replace(p,"$1"+P.trim());default:if(0<1*F&&0<M.indexOf("\f"))return M.replace(p,(P.charCodeAt(0)===58?"":"$1")+P.trim())}return P+M}function i(P,M,F,q){var S=P+";",ie=2*M+3*F+4*q;if(ie===944){P=S.indexOf(":",9)+1;var R=S.substring(P,S.length-1).trim();return R=S.substring(0,P).trim()+R+";",Se===1||Se===2&&s(R,1)?"-webkit-"+R+R:R}if(Se===0||Se===2&&!s(S,1))return S;switch(ie){case 1015:return S.charCodeAt(10)===97?"-webkit-"+S+S:S;case 951:return S.charCodeAt(3)===116?"-webkit-"+S+S:S;case 963:return S.charCodeAt(5)===110?"-webkit-"+S+S:S;case 1009:if(S.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+S+S;case 978:return"-webkit-"+S+"-moz-"+S+S;case 1019:case 983:return"-webkit-"+S+"-moz-"+S+"-ms-"+S+S;case 883:if(S.charCodeAt(8)===45)return"-webkit-"+S+S;if(0<S.indexOf("image-set(",11))return S.replace(ae,"$1-webkit-$2")+S;break;case 932:if(S.charCodeAt(4)===45)switch(S.charCodeAt(5)){case 103:return"-webkit-box-"+S.replace("-grow","")+"-webkit-"+S+"-ms-"+S.replace("grow","positive")+S;case 115:return"-webkit-"+S+"-ms-"+S.replace("shrink","negative")+S;case 98:return"-webkit-"+S+"-ms-"+S.replace("basis","preferred-size")+S}return"-webkit-"+S+"-ms-"+S+S;case 964:return"-webkit-"+S+"-ms-flex-"+S+S;case 1023:if(S.charCodeAt(8)!==99)break;return R=S.substring(S.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+R+"-webkit-"+S+"-ms-flex-pack"+R+S;case 1005:return v.test(S)?S.replace(g,":-webkit-")+S.replace(g,":-moz-")+S:S;case 1e3:switch(R=S.substring(13).trim(),M=R.indexOf("-")+1,R.charCodeAt(0)+R.charCodeAt(M)){case 226:R=S.replace(C,"tb");break;case 232:R=S.replace(C,"tb-rl");break;case 220:R=S.replace(C,"lr");break;default:return S}return"-webkit-"+S+"-ms-"+R+S;case 1017:if(S.indexOf("sticky",9)===-1)break;case 975:switch(M=(S=P).length-10,R=(S.charCodeAt(M)===33?S.substring(0,M):S).substring(P.indexOf(":",7)+1).trim(),ie=R.charCodeAt(0)+(R.charCodeAt(7)|0)){case 203:if(111>R.charCodeAt(8))break;case 115:S=S.replace(R,"-webkit-"+R)+";"+S;break;case 207:case 102:S=S.replace(R,"-webkit-"+(102<ie?"inline-":"")+"box")+";"+S.replace(R,"-webkit-"+R)+";"+S.replace(R,"-ms-"+R+"box")+";"+S}return S+";";case 938:if(S.charCodeAt(5)===45)switch(S.charCodeAt(6)){case 105:return R=S.replace("-items",""),"-webkit-"+S+"-webkit-box-"+R+"-ms-flex-"+R+S;case 115:return"-webkit-"+S+"-ms-flex-item-"+S.replace(k,"")+S;default:return"-webkit-"+S+"-ms-flex-line-pack"+S.replace("align-content","").replace(k,"")+S}break;case 973:case 989:if(S.charCodeAt(3)!==45||S.charCodeAt(4)===122)break;case 931:case 953:if(V.test(P)===!0)return(R=P.substring(P.indexOf(":")+1)).charCodeAt(0)===115?i(P.replace("stretch","fill-available"),M,F,q).replace(":fill-available",":stretch"):S.replace(R,"-webkit-"+R)+S.replace(R,"-moz-"+R.replace("fill-",""))+S;break;case 962:if(S="-webkit-"+S+(S.charCodeAt(5)===102?"-ms-"+S:"")+S,F+q===211&&S.charCodeAt(13)===105&&0<S.indexOf("transform",10))return S.substring(0,S.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+S}return S}function s(P,M){var F=P.indexOf(M===1?":":"{"),q=P.substring(0,M!==3?F:10);return F=P.substring(F+1,P.length-1),G(M!==2?q:q.replace(L,"$1"),F,M)}function o(P,M){var F=i(M,M.charCodeAt(0),M.charCodeAt(1),M.charCodeAt(2));return F!==M+";"?F.replace($," or ($1)").substring(4):"("+M+")"}function a(P,M,F,q,S,ie,R,Ne,ce,pe){for(var ee=0,Ye=M,Tt;ee<O;++ee)switch(Tt=yt[ee].call(c,P,Ye,F,q,S,ie,R,Ne,ce,pe)){case void 0:case!1:case!0:case null:break;default:Ye=Tt}if(Ye!==M)return Ye}function l(P){switch(P){case void 0:case null:O=yt.length=0;break;default:if(typeof P=="function")yt[O++]=P;else if(typeof P=="object")for(var M=0,F=P.length;M<F;++M)l(P[M]);else K=!!P|0}return l}function u(P){return P=P.prefix,P!==void 0&&(G=null,P?typeof P!="function"?Se=1:(Se=2,G=P):Se=0),u}function c(P,M){var F=P;if(33>F.charCodeAt(0)&&(F=F.trim()),ve=F,F=[ve],0<O){var q=a(-1,M,F,F,ye,fe,0,0,0,0);q!==void 0&&typeof q=="string"&&(M=q)}var S=e(hn,F,M,0,0);return 0<O&&(q=a(-2,S,F,F,ye,fe,S.length,0,0,0),q!==void 0&&(S=q)),ve="",Fe=0,fe=ye=1,S}var h=/^\0+/g,d=/[\0\r\f]/g,g=/: */g,v=/zoo|gra/,w=/([,: ])(transform)/g,_=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,m=/::(place)/g,E=/:(read-only)/g,C=/[svh]\w+-[tblr]{2}/,A=/\(\s*(.*)\s*\)/g,$=/([\s\S]*?);/g,k=/-self|flex-/g,L=/[^]*?(:[rp][el]a[\w-]+)[^]*/,V=/stretch|:\s*\w+\-(?:conte|avail)/,ae=/([^-])(image-set\()/,fe=1,ye=1,Fe=0,Se=1,hn=[],yt=[],O=0,G=null,K=0,ve="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var gR={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function yR(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var vR=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ey=yR(function(t){return vR.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),dm=hc.exports,wR={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ER={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},SR={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},DS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},fm={};fm[dm.ForwardRef]=SR;fm[dm.Memo]=DS;function ty(t){return dm.isMemo(t)?DS:fm[t.$$typeof]||wR}var _R=Object.defineProperty,kR=Object.getOwnPropertyNames,ny=Object.getOwnPropertySymbols,CR=Object.getOwnPropertyDescriptor,xR=Object.getPrototypeOf,ry=Object.prototype;function $S(t,e,n){if(typeof e!="string"){if(ry){var r=xR(e);r&&r!==ry&&$S(t,r,n)}var i=kR(e);ny&&(i=i.concat(ny(e)));for(var s=ty(t),o=ty(e),a=0;a<i.length;++a){var l=i[a];if(!ER[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=CR(e,l);try{_R(t,l,u)}catch{}}}}return t}var TR=$S;function Nn(){return(Nn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var iy=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},Gd=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!hc.exports.typeOf(t)},fu=Object.freeze([]),gr=Object.freeze({});function zo(t){return typeof t=="function"}function sy(t){return t.displayName||t.name||"Component"}function pm(t){return t&&typeof t.styledComponentId=="string"}var as=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",mm=typeof window<"u"&&"HTMLElement"in window,IR=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1);function Ea(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var bR=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&Ea(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),yl=new Map,pu=new Map,so=1,Qa=function(t){if(yl.has(t))return yl.get(t);for(;pu.has(so);)so++;var e=so++;return yl.set(t,e),pu.set(e,t),e},AR=function(t){return pu.get(t)},NR=function(t,e){e>=so&&(so=e+1),yl.set(t,e),pu.set(e,t)},OR="style["+as+'][data-styled-version="5.3.5"]',RR=new RegExp("^"+as+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),PR=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},DR=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(RR);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(NR(u,l),PR(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},$R=function(){return typeof window<"u"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},LS=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(as))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(as,"active"),r.setAttribute("data-styled-version","5.3.5");var o=$R();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},LR=function(){function t(n){var r=this.element=LS(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}Ea(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),MR=function(){function t(n){var r=this.element=LS(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),FR=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),oy=mm,UR={isServer:!mm,useCSSOMInjection:!IR},MS=function(){function t(n,r,i){n===void 0&&(n=gr),r===void 0&&(r={}),this.options=Nn({},UR,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&mm&&oy&&(oy=!1,function(s){for(var o=document.querySelectorAll(OR),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(as)!=="active"&&(DR(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return Qa(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(Nn({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new FR(o):s?new LR(o):new MR(o),new bR(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(Qa(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Qa(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Qa(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=AR(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=as+".g"+o+'[id="'+a+'"]',h="";l!==void 0&&l.forEach(function(d){d.length>0&&(h+=d+",")}),s+=""+u+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),zR=/(a)(d)/gi,ay=function(t){return String.fromCharCode(t+(t>25?39:97))};function Kd(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=ay(e%52)+n;return(ay(e%52)+n).replace(zR,"$1-$2")}var Pi=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},FS=function(t){return Pi(5381,t)};function VR(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(zo(n)&&!pm(n))return!1}return!0}var jR=FS("5.3.5"),BR=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&VR(e),this.componentId=n,this.baseHash=Pi(jR,n),this.baseStyle=r,MS.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=ls(this.rules,e,n,r).join(""),a=Kd(Pi(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=Pi(this.baseHash,r.hash),h="",d=0;d<u;d++){var g=this.rules[d];if(typeof g=="string")h+=g;else if(g){var v=ls(g,e,n,r),w=Array.isArray(v)?v.join(""):v;c=Pi(c,w+d),h+=w}}if(h){var _=Kd(c>>>0);if(!n.hasNameForId(i,_)){var p=r(h,"."+_,void 0,i);n.insertRules(i,_,p)}s.push(_)}}return s.join(" ")},t}(),HR=/^\s*\/\/.*$/gm,WR=[":","[",".","#"];function GR(t){var e,n,r,i,s=t===void 0?gr:t,o=s.options,a=o===void 0?gr:o,l=s.plugins,u=l===void 0?fu:l,c=new mR(a),h=[],d=function(w){function _(p){if(p)try{w(p+"}")}catch{}}return function(p,f,m,E,C,A,$,k,L,V){switch(p){case 1:if(L===0&&f.charCodeAt(0)===64)return w(f+";"),"";break;case 2:if(k===0)return f+"/*|*/";break;case 3:switch(k){case 102:case 112:return w(m[0]+f),"";default:return f+(V===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(_)}}}(function(w){h.push(w)}),g=function(w,_,p){return _===0&&WR.indexOf(p[n.length])!==-1||p.match(i)?w:"."+e};function v(w,_,p,f){f===void 0&&(f="&");var m=w.replace(HR,""),E=_&&p?p+" "+_+" { "+m+" }":m;return e=f,n=_,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(p||!_?"":_,E)}return c.use([].concat(u,[function(w,_,p){w===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,g))},d,function(w){if(w===-2){var _=h;return h=[],_}}])),v.hash=u.length?u.reduce(function(w,_){return _.name||Ea(15),Pi(w,_.name)},5381).toString():"",v}var US=rn.createContext();US.Consumer;var zS=rn.createContext(),KR=(zS.Consumer,new MS),qd=GR();function qR(){return b.exports.useContext(US)||KR}function QR(){return b.exports.useContext(zS)||qd}var VS=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=qd);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return Ea(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=qd),this.name+e.hash},t}(),YR=/([A-Z])/,XR=/([A-Z])/g,JR=/^ms-/,ZR=function(t){return"-"+t.toLowerCase()};function ly(t){return YR.test(t)?t.replace(XR,ZR).replace(JR,"-ms-"):t}var uy=function(t){return t==null||t===!1||t===""};function ls(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=ls(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(uy(t))return"";if(pm(t))return"."+t.styledComponentId;if(zo(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return ls(l,e,n,r)}var u;return t instanceof VS?n?(t.inject(n,r),t.getName(r)):t:Gd(t)?function c(h,d){var g,v,w=[];for(var _ in h)h.hasOwnProperty(_)&&!uy(h[_])&&(Array.isArray(h[_])&&h[_].isCss||zo(h[_])?w.push(ly(_)+":",h[_],";"):Gd(h[_])?w.push.apply(w,c(h[_],_)):w.push(ly(_)+": "+(g=_,(v=h[_])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||g in gR?String(v).trim():v+"px")+";"));return d?[d+" {"].concat(w,["}"]):w}(t):t.toString()}var cy=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function jS(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return zo(t)||Gd(t)?cy(ls(iy(fu,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:cy(ls(iy(t,n)))}var eP=function(t,e,n){return n===void 0&&(n=gr),t.theme!==n.theme&&t.theme||e||n.theme},tP=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,nP=/(^-|-$)/g;function gh(t){return t.replace(tP,"-").replace(nP,"")}var BS=function(t){return Kd(FS(t)>>>0)};function Ya(t){return typeof t=="string"&&!0}var Qd=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},rP=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function iP(t,e,n){var r=t[n];Qd(e)&&Qd(r)?HS(r,e):t[n]=e}function HS(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(Qd(o))for(var a in o)rP(a)&&iP(t,o[a],a)}return t}var WS=rn.createContext();WS.Consumer;var yh={};function GS(t,e,n){var r=pm(t),i=!Ya(t),s=e.attrs,o=s===void 0?fu:s,a=e.componentId,l=a===void 0?function(f,m){var E=typeof f!="string"?"sc":gh(f);yh[E]=(yh[E]||0)+1;var C=E+"-"+BS("5.3.5"+E+yh[E]);return m?m+"-"+C:C}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(f){return Ya(f)?"styled."+f:"Styled("+sy(f)+")"}(t):u,h=e.displayName&&e.componentId?gh(e.displayName)+"-"+e.componentId:e.componentId||l,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,g=e.shouldForwardProp;r&&t.shouldForwardProp&&(g=e.shouldForwardProp?function(f,m,E){return t.shouldForwardProp(f,m,E)&&e.shouldForwardProp(f,m,E)}:t.shouldForwardProp);var v,w=new BR(n,h,r?t.componentStyle:void 0),_=w.isStatic&&o.length===0,p=function(f,m){return function(E,C,A,$){var k=E.attrs,L=E.componentStyle,V=E.defaultProps,ae=E.foldedComponentIds,fe=E.shouldForwardProp,ye=E.styledComponentId,Fe=E.target,Se=function(q,S,ie){q===void 0&&(q=gr);var R=Nn({},S,{theme:q}),Ne={};return ie.forEach(function(ce){var pe,ee,Ye,Tt=ce;for(pe in zo(Tt)&&(Tt=Tt(R)),Tt)R[pe]=Ne[pe]=pe==="className"?(ee=Ne[pe],Ye=Tt[pe],ee&&Ye?ee+" "+Ye:ee||Ye):Tt[pe]}),[R,Ne]}(eP(C,b.exports.useContext(WS),V)||gr,C,k),hn=Se[0],yt=Se[1],O=function(q,S,ie,R){var Ne=qR(),ce=QR(),pe=S?q.generateAndInjectStyles(gr,Ne,ce):q.generateAndInjectStyles(ie,Ne,ce);return pe}(L,$,hn),G=A,K=yt.$as||C.$as||yt.as||C.as||Fe,ve=Ya(K),P=yt!==C?Nn({},C,{},yt):C,M={};for(var F in P)F[0]!=="$"&&F!=="as"&&(F==="forwardedAs"?M.as=P[F]:(fe?fe(F,ey,K):!ve||ey(F))&&(M[F]=P[F]));return C.style&&yt.style!==C.style&&(M.style=Nn({},C.style,{},yt.style)),M.className=Array.prototype.concat(ae,ye,O!==ye?O:null,C.className,yt.className).filter(Boolean).join(" "),M.ref=G,b.exports.createElement(K,M)}(v,f,m,_)};return p.displayName=c,(v=rn.forwardRef(p)).attrs=d,v.componentStyle=w,v.displayName=c,v.shouldForwardProp=g,v.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):fu,v.styledComponentId=h,v.target=r?t.target:t,v.withComponent=function(f){var m=e.componentId,E=function(A,$){if(A==null)return{};var k,L,V={},ae=Object.keys(A);for(L=0;L<ae.length;L++)k=ae[L],$.indexOf(k)>=0||(V[k]=A[k]);return V}(e,["componentId"]),C=m&&m+"-"+(Ya(f)?f:gh(sy(f)));return GS(f,Nn({},E,{attrs:d,componentId:C}),n)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?HS({},t.defaultProps,f):f}}),v.toString=function(){return"."+v.styledComponentId},i&&TR(v,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var Yd=function(t){return function e(n,r,i){if(i===void 0&&(i=gr),!hc.exports.isValidElementType(r))return Ea(1,String(r));var s=function(){return n(r,i,jS.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,Nn({},i,{},o))},s.attrs=function(o){return e(n,r,Nn({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(GS,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){Yd[t]=Yd(t)});function gt(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=jS.apply(void 0,[t].concat(n)).join(""),s=BS(i);return new VS(s,i)}const j=Yd,sP=gt`
0%{opacity:1;}
100%{opacity:0;visibility:hidden}
`,oP=j.div`
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #00000099;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${sP} 0.3s ${t=>t.start} ease both;
`,gm=t=>y(oP,{start:t.start,children:y("span",{className:"loader"})}),aP=gt`
  0%{bottom:5rem;opacity:0;}
  100%{bottom:1rem;opacity:1;}
`,lP=j.div`
  position: fixed;
  width: 300px;
  right: 1rem;
  bottom: 5rem;
  opacity: 0;
  height: auto;
  font-weight: bold;
  text-align: center;
  animation: ${aP} 0.2s ease-in-out both;

  p {
    margin: 0;
    padding: 1rem;
    border-radius: 0.25rem;
  }

  & .error {
    background-color: red;
  }

  & .success {
    background-color: green;
  }
`,us=t=>y(lP,{children:y("p",{className:t.final,children:t.children})}),uP=j.div`
  width:100%;
  height:100%;
  background-color:var(--background-color);
  position:absolute;
  top:0;
  z-index:1 !important;
  overflow:hidden;

  *{
    pointer-events:none;
    z-index:1 !important;
  }

  *::after{
    content: "";
    display: block;
    position:absolute;
    filter: blur(86px);
    border-radius: 50%;
  }

  .top::after {
    background-color: var(--background-bubble-up);
    height: 550px;
    width: 550px;
    left: -415px;
    top: -133px;
  }

  .middle::after {
    background-color: var(--background-bubble-middle);
    height: 494px;
    width: 494px;
    right: -332px;
    top: -324px;
  }

  .bottom::after {
    background-color: var(--background-bubble-down);
    height: 282px;
    width: 282px;
    right: -132px;
    top: 461px;
  }

  @media (min-width:800px){
    position:relative;
  }
`,mu=()=>D(uP,{children:[y("div",{className:"top"}),y("div",{className:"middle"}),y("div",{className:"bottom"})]}),_c=t=>{const[e,n]=b.exports.useState(!1);return b.exports.useEffect(()=>{const r=()=>{window.innerWidth<t?n(!0):n(!1)};return window.addEventListener("resize",r),r(),()=>window.removeEventListener("resize",r)},[t]),e},cP=j.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width:100%;
color:var(--font-color);

  *{
  z-index:2;
  }

  .display{
  display:block;
  }

  .subsection {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    padding:1rem;

    div:nth-child(2) {
      width: 100% !important;
    }

    article{
      display:flex;
      align-items:center;
      justify-content:space-between;
      width:100%;
      margin:0;

      p{
        color:var(--font-color);
      }

      a{
        color:var(--font-color);
        font-weight:bold;
    }
  }
  }

  a {
    color: whitesmoke;
    text-decoration: none;
    font-weight: bold;
  }

  .signin-form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding:1rem;
          padding-bottom: 0rem;
  }

  .wellcome {
    color: var(--font-color);
    margin: 0;
  }

  .submit-button {
    padding: 1rem;
    background-color: transparent;
    border: none;
    border: solid thin var(--no-grey);
    color: grey;
    background-color: #ddd2;
  }

  .submit-button:active {
    transform: scale(0.95);
  }

  .hr-sect {
    display: flex;
    flex-basis: 100%;
    align-items: center;
    color: #fff2;
    margin: 1rem;
    margin-top: 0rem;
  }

  .hr-sect:before,
  .hr-sect:after {
    content: "";
    flex-grow: 1;
    background: #fff2;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 8px;
  }

  @media (min-width: 800px) {
    align-items: center;
    flex:1;


    //a:nth-child(2) {
      //visibility: hidden;
    //}

    input[type="submit"]:hover {
      transform: scale(1.1);
      cursor: pointer;
          }

          .signin-form{
            width:350px;
            padding:0;
          }

      .subsection{
        article{
          width:350px;
        }
      }

  }
`,hP=j.span`
  font-weight: bold;
  font-size: 1.2rem;
  position: absolute;
  left: 1rem;
  top: 1rem;
`,dP=j.div`
  display: flex;
  justify-content: center;
`,fP=j.div`
display: none;
color:var(--font-color);


@media (min-width: 800px) {
    display: grid;
    place-items:center;
    flex: 1;
    overflow: hidden;


  article{
    width:300px;
    position:absolute;
    z-index:4;
  }
  }
`,pP=()=>{const[t,e]=b.exports.useState(""),[n,r]=b.exports.useState(""),i=En(),{googleSigIn:s,user:o,SignInWithEmail:a,signInError:l,googleSignError:u}=Nr(),c=_c(800),h=async()=>{try{await s()}catch(g){console.log(g)}},d=async g=>{g.preventDefault();try{await a(t,n)}catch(v){console.log(v)}};return b.exports.useEffect(()=>{o!=null&&i("/")},[o]),y(Sn,{children:D(dP,{children:[D(fP,{children:[D("article",{children:[y("h3",{children:"Wellcome back"}),y("p",{children:"Welcome back! We are glad to see you back in our here. We hope that your previous experiences have been good and that you find our platform even more intuitive and easy to use on this occasion. We are here to help you organize your ideas and thoughts. Have a great experience!"})]}),y(mu,{})]}),D(cP,{children:[y(gm,{start:".3s"}),y(hP,{className:"",children:"Min notes"}),l&&y(us,{final:"error",children:l}),u&&y(us,{children:u}),D("div",{className:"signin-form",children:[y("span",{className:"wellcome",children:c?"Wellcome back":"Login"}),D("form",{onSubmit:d,children:[y("div",{className:"input",children:y("input",{type:"email",placeholder:"Email",onChange:g=>e(g.target.value)})}),y("div",{className:"input",children:y("input",{type:"password",placeholder:"Password",onChange:g=>r(g.target.value)})}),y("input",{type:"submit",value:"Sig in",className:"submit-button"})]})]}),D("div",{className:"subsection",children:[y("div",{className:"hr-sect",children:"Or"}),y(uR,{onClick:h}),D("article",{children:[y("p",{children:"Dont have an account yet?"}),y(Ko,{to:"/signup",children:"Sign up here"})]})]}),c?y(mu,{}):""]})]})})},mP=gt`
0%{opacity:1;}
100%{opacity:0;visibility:hidden}
`,gP=j.div`
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #00000099;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${mP} 0.3s ${t=>t.start} ease both;
`,yP=t=>y(gP,{start:t.start,children:y("span",{className:"loader"})}),vP=j.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;
  color: var(--font-color);

  * {
    z-index: 2;
  }

  .display {
    display: block;
  }

  .subsection {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    padding: 1rem;

    div:nth-child(2) {
      width: 100% !important;
    }

    article {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin: 0;

      p {
        color: var(--font-color);
      }

      a {
        color: var(--font-color);
        font-weight: bold;
      }
    }
  }

  a {
    color: whitesmoke;
    text-decoration: none;
    font-weight: bold;
  }

  .signin-form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
    padding-bottom: 0rem;
  }

  .wellcome {
    color: var(--font-color);
    margin: 0;
  }

  .submit-button {
    padding: 1rem;
    background-color: transparent;
    border: none;
    border: solid thin var(--no-grey);
    color: grey;
    background-color: #ddd2;
  }

  .submit-button:active {
    transform: scale(0.95);
  }

  .hr-sect {
    display: flex;
    flex-basis: 100%;
    align-items: center;
    color: #fff2;
    margin: 1rem;
    margin-top: 0rem;
  }

  .hr-sect:before,
  .hr-sect:after {
    content: '';
    flex-grow: 1;
    background: #fff2;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 8px;
  }

  @media (min-width: 800px) {
    align-items: center;
    flex: 1;

    //a:nth-child(2) {
    //visibility: hidden;
    //}

    input[type='submit']:hover {
      transform: scale(1.1);
      cursor: pointer;
    }

    .signin-form {
      width: 350px;
      padding: 0;
    }

    .subsection {
      article {
        width: 350px;
      }
    }
  }
`,wP=j.span`
  font-weight: bold;
  font-size: 1.2rem;
  position: absolute;
  left: 1rem;
  top: 1rem;
`,EP=j.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
`,SP=j.div`
    display: grid;
    place-items:center;
    flex: 1;
    overflow: hidden;
color:var(--font-color);


  article{
    width:300px;
    position:absolute;
    z-index:4;
  }
  }
`,_P=()=>{const{user:t,CreateUserWithEmail:e,googleSigIn:n,createUserError:r,googleSignError:i}=Nr(),[s,o]=b.exports.useState(""),[a,l]=b.exports.useState(""),u=En(),c=_c(800),h=async g=>{g.preventDefault(),e(s,a)},d=async()=>{try{await n()}catch(g){console.log(g)}};return b.exports.useEffect(()=>{t!=null&&u("/")},[t]),y(Sn,{children:D(EP,{children:[D(SP,{children:[D("article",{children:[y("h3",{children:"Wellcome"}),D("p",{children:["Hello! We're glad to have you here. We know there are many applications available, so we appreciate you choosing ours. We hope you enjoy the functionality and simplicity of our platform. Please enter your credentials to start exploring.",y("br",{}),"After doing so, you will be redirected to the application within your account, now available and configured for your immediate use."]})]}),y(mu,{})]}),D(vP,{children:[r&&y(us,{final:"error",children:r}),i&&y(us,{final:"error",children:i}),y(yP,{start:".3s"}),y(wP,{children:"Min notes"}),y("div",{className:"signin-form",children:D("form",{onSubmit:h,children:[y("span",{className:"wellcome",children:"Create an account"}),y("div",{className:"input",children:y("input",{type:"email",placeholder:"Email",onChange:g=>o(g.target.value)})}),y("div",{className:"input",children:y("input",{type:"password",placeholder:"password",onChange:g=>l(g.target.value)})}),y("input",{type:"submit",value:"Sig up",className:"submit-button"})]})}),D("div",{className:"subsection",children:[y("div",{className:"hr-sect",children:"Or"}),y(sm.GoogleButton,{onClick:d}),D("article",{children:[y("p",{children:"Already have an account?"}),y(Ko,{to:"/signin",children:"Sig in here"})]})]}),c?y(mu,{}):""]})]})})},kP=gt`
0%{width:0%}
100%{width:100%}
`;j.header`
  width: 100%;

  h1 {
    color: red;
  }

  * {
    font-size: 32px !important;
  }

  .add-background-transition {
    background-color: #c78dd0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 0%;
    position: absolute;
    z-index: 2;
  }

  .background-transition-expand {
    animation: ${kP} 0.5s ease-in both;
  }

  > article {
    display: flex;
    justify-content: space-between;
    align-items: end;
    position: relative;
    width: min(100%, 800px);

    .header-subsection {
      display: flex;
    }
  }

  #a {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .up-header {
    animation: upHeader 0.5s ease both;
  }

  .down-header {
    animation: downHeader 0.5s ease both;
  }

  .masonry-grid {
    max-width: 1200px;
    margin: 0 auto;
    columns: 5 180px;
    column-gap: 0.5rem;
    position: relative;
  }

  .add {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
  }

  .no-notes {
    width: 100%;
    text-align: center;

    h3 {
      color: #3b3b3b;
    }
  }

  .no-notes-cont {
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search-container {
    position: fixed;
    background-color: #0009;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    display: flex;
    items-align: center;

    textarea {
      width: 100%;
      background-color: transparent;
      color: white;
      font-weight: bold;
      padding: 1rem;
      line-height: 2.5rem;
      resize: none;
      border: none;
      outline: none;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    textarea::placeholder {
      color: #fff9;
    }

    div {
      align-items: start;
      border-radius: 0;
      width: 100px;

      span {
        font-weight: bold;
      }
    }
  }

  .desktop-add {
    display: none;
  }

  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //width: min(100%, 700px);

    article {
      //width:100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .add {
      position: absolute;
      bottom: 1rem;
    }

    .general-container {
      //width: 1000px;
      max-height: auto;
      //position:relative;
    }

    .mobile-add {
      display: none;
    }

    .desktop-add {
      display: flex;
    }
  }
`;var KS={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},hy=rn.createContext&&rn.createContext(KS),yr=globalThis&&globalThis.__assign||function(){return yr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},yr.apply(this,arguments)},CP=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function qS(t){return t&&t.map(function(e,n){return rn.createElement(e.tag,yr({key:n},e.attr),qS(e.child))})}function cn(t){return function(e){return y(xP,{...yr({attr:yr({},t.attr)},e),children:qS(t.child)})}}function xP(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=CP(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),D("svg",{...yr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:yr(yr({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),children:[s&&y("title",{children:s}),t.children]})};return hy!==void 0?y(hy.Consumer,{children:function(n){return e(n)}}):e(KS)}function TP(t){return cn({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}}]})(t)}function IP(t){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z",fill:"currentColor"}},{tag:"path",attr:{d:"M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12Z",fill:"currentColor"}},{tag:"path",attr:{d:"M6 20C7.10457 20 8 19.1046 8 18C8 16.8954 7.10457 16 6 16C4.89543 16 4 16.8954 4 18C4 19.1046 4.89543 20 6 20Z",fill:"currentColor"}},{tag:"path",attr:{d:"M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z",fill:"currentColor"}},{tag:"path",attr:{d:"M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z",fill:"currentColor"}},{tag:"path",attr:{d:"M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z",fill:"currentColor"}},{tag:"path",attr:{d:"M18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8Z",fill:"currentColor"}},{tag:"path",attr:{d:"M20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12Z",fill:"currentColor"}},{tag:"path",attr:{d:"M18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C16.8954 16 16 16.8954 16 18C16 19.1046 16.8954 20 18 20Z",fill:"currentColor"}}]})(t)}const bP=gt`
0%{max-height:5px}
100%{max-height:100%}
`,ym=j.hr`
  width: 100%;
  border-top: none;
  border-color: ${t=>t.textColorContrast?t.textColorContrast:"var(--divisor-line-color)"};
  margin-top: 0rem;
  margin-bottom: 0;
  position: relative;
  ${t=>t.downHeader&&"animation: downHeader 0.5s ease both"}
`,AP=j.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  transition: none !important;
  border: none;
  color: var(--font-color);
  //padding:0 !important;

  & svg {
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,Br=j.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  border: none;
  border-left: solid thin
    ${t=>t.left||t.both?t.textColorContrast+"70":"transparent"};
  border-right: solid thin
    ${t=>t.right||t.both?t.textColorContrast+"70":"transparent"};
  transition: none !important;
padding:0;

color: ${t=>t.configOpen&&t.textColorContrast};
background-color: ${t=>t.configOpen&&t.textColorContrast+"20"};

a{
  padding:0;
}

  button {
    background-color: red;
  }

  &:active {
    background-color: red;
  }

  &  svg {
    color: ${t=>t.textColorContrast?t.textColorContrast+"70":"var(--font-color)"};
    margin:.75rem;
    transition:none !important;
  }


  &:hover svg{
    //color: ${t=>t.textColorContrast?t.textColorContrast:"var(--font-color)"};
  }

  &:hover{
    background-color:${t=>t.textColorContrast?t.textColorContrast+"20":"red"};
  }

  & svg {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .option-container {
    background-color: var(--option-background);
    position: fixed;
    top: 70px;
    display: flex;
    flex-direction: column;
    border-radius: 0.25rem;
    //height:${t=>t.open?"5px":"100%"};
    animation: ${bP} 0.5s ease-in-out both;
    border: solid thin #2d2f33;
    color:var(--font-color);
    width:150px;
    padding:.5rem;

    article * {
      pointer-events: none;
    }

    article svg{
      color:red;
    color:var(--font-color);
      margin:0;
      width: 20px;
      height: 20px;
    }

    article {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      position: relative;
      padding: 0.5rem;
      transition: none;
      border-radius:.25rem;
    }

    article:hover {
      background-color: #262626;
    }
  }

  .color-picker {
    div {
      width: 20px;
      height: 20px;
    }
  }

  //.option-container::before {
    //content: '';
    //width: 10px;
    //height: 10px;
    //background-color: var(--option-background);
    //position: absolute;
    //top: -5px;
    //left: 45px;
    //transform: rotate(45deg);
  //}
`,NP=j.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: min(100%, var(--max-width-desktop));
  position:relative;
margin-top:${t=>t.home?"1rem":"0"};
  animation: downHeader 0.5s ease both;

  &.up-header {
    animation: upHeader 0.5s ease both;
  }

  h1 {
    margin: 0;
    color: var(--font-color);
  }

  .header-subsection {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  
`,vm=t=>{const{home:e,className:n,children:r}=t;return y(Sn,{children:y(NP,{home:e,className:n?"up-header":"down-header",children:r})})},OP=t=>{const{query:e,searchVisible:n,setSearchVisible:r,setMenu:i}=t;return En(),_c(800),y(vm,{className:e&&"up-header",home:!0,children:D("article",{className:`${n?"up-header":"down-header"}`,style:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",position:"relative"},children:[y("h1",{children:"All notes"}),y("div",{className:"header-subsection",children:y(AP,{tc:"#F6F1E9",onClick:()=>i(!0),translate:"no",children:y(IP,{})})})]})})},RP=j.div`
  position: fixed;
  background-color: #0009;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  items-align: center;

  textarea {
    width: 100%;
    background-color: transparent;
    font-size: 3rem;
    color: white;
    font-weight: bold;
    padding: 1rem;
    line-height: 2.5rem;
    resize: none;
    border: none;
    outline: none;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  textarea::placeholder {
    color: #fff9;
  }

  div {
    align-items: start;
    border-radius: 0;
    width: 100px;

    span {
      font-size: 3rem;
      font-weight: bold;
    }
  }
`,PP=t=>{const{query:e,setQuery:n,setSearchVisible:r}=t;return D(RP,{children:[y("textarea",{autoFocus:!0,className:"search-input",role:"textbox",defaultValue:e,onKeyUp:o=>{n(o.target.value)},onKeyDown:o=>{o.keyCode===13&&r(!1)},placeholder:"Search something..."}),y("div",{className:"icon-button",onClick:()=>r(!1),translate:"no",children:y("span",{className:"material-symbols-outlined",children:"check"})})]})},DP=j.div`
    width:100%;
    text-align:center;

    h3 {
      color: #3b3b3b;
    }
`,$P=()=>D(DP,{children:[y("h3",{children:"You dont have any notes :( or maybe it is still loading"}),y("h3",{children:'So click the " + " button to create a new note'})]}),LP=j.article`
  width: min(100%,  var(--max-width-desktop));
  margin: 1rem auto 1rem auto;
  display: flex;
  gap: 0.5rem;
  box-sizing: border-box;
  position: relative;
  animation: downHeader 0.5s ease both;

  &.up-header {
    animation: upHeader 0.5s ease both;
  }

  button,
  div {
    flex: 1;
    border: none;
    outline: none;
    border-radius: 0.5rem;
  }

  *:focus {
    outline: none;
  }

  .input {
    flex: 5;
    background-color: #262626;
    padding: 0.75rem;

    svg {
      color: #787878;
      font-size: 1.5rem;
    }

    input {
      height: 100%;
      padding: 0;
      border: none;
      font-size: 1.25rem;
      caret-color: var(--complement-color);
      color: var(--font-color);

      &::placeholder {
        color: #787878;
      }
    }
  }
`,MP=j.button`
    color: var(--font-color);
    font-size: 24px;
    background-color: #262626;
    display:flex;
align-items:center;
justify-content:center;
gap:.5rem;
font-size:1.25rem;

svg{
  font-size:inherit;
}

  &:hover {
    background-color: var(--complement-color);
  }

`,FP=t=>{const{query:e,setQuery:n,data:r,handdleAdd:i}=t,s=En();return D(LP,{className:e&&"up-header",children:[y(MP,{onClick:()=>i(s),children:y("span",{children:"New"})}),D("div",{className:"input",children:[y(TP,{}),y("input",{type:"text",placeholder:"Search...",onKeyUp:o=>n(o.target.value),autoComplete:"off",spellCheck:"false"})]})]})};function UP(t){return cn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z"}}]}]})(t)}function zP(t){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M19.85 8.75l4.15.83v4.84l-4.15.83 2.35 3.52-3.43 3.43-3.52-2.35-.83 4.15H9.58l-.83-4.15-3.52 2.35-3.43-3.43 2.35-3.52L0 14.42V9.58l4.15-.83L1.8 5.23 5.23 1.8l3.52 2.35L9.58 0h4.84l.83 4.15 3.52-2.35 3.43 3.43-2.35 3.52zm-1.57 5.07l4-.81v-2l-4-.81-.54-1.3 2.29-3.43-1.43-1.43-3.43 2.29-1.3-.54-.81-4h-2l-.81 4-1.3.54-3.43-2.29-1.43 1.43L6.38 8.9l-.54 1.3-4 .81v2l4 .81.54 1.3-2.29 3.43 1.43 1.43 3.43-2.29 1.3.54.81 4h2l.81-4 1.3-.54 3.43 2.29 1.43-1.43-2.29-3.43.54-1.3zm-8.186-4.672A3.43 3.43 0 0 1 12 8.57 3.44 3.44 0 0 1 15.43 12a3.43 3.43 0 1 1-5.336-2.852zm.956 4.274c.281.188.612.288.95.288A1.7 1.7 0 0 0 13.71 12a1.71 1.71 0 1 0-2.66 1.422z"}}]})(t)}gt`
0%{right:-350px}
100%{right:0;}
`;const dy=gt`
0%{opacity:0}
100%{opacity:1;}
`,VP=j.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
width:100%;
height:100%;
pointer-events:none !important;
opacity:0;
transition:all .5s 1s ease;
${t=>t.menu&&`
  opacity: 1;
  pointer-events:auto !important;
  background-color: transparent;
  `}
`;j.span`
  background-image: linear-gradient(#cb1bf9, #6a05df);
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  //color:#1a1c20;
  //font-weight:bold;
`;j.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:.75rem;
  border:solid thin transparent;
    
&:hover{
  border-color:${t=>t.hover?" var(--complement-color)":"transparent"};
  border-radius:.5rem;
}

    h3{
      margin:0;
      font-size:16px;
    }

    svg{
      //font-size:1.25rem;
    }

      .add-button{
        display:flex;
        justify-content:center;
        align-items:center;
        background-color:#2D2F33;
        padding:.25rem;
        width:25px;
        height:25px;
        font-size:24px;
        font-weight:600;
        border-radius:.25rem;
      }
    
  }

  &:has(div) div{
    display:flex;
    align-items:center;
    gap:1rem;
  }

  //.delete{
    ////border:solid thin #dc3545;
    //border:solid 1px transparent !important;
      ////border-radius:.5rem;
    ////color:#dc3545;

    //svg{
      //font-size:1.2rem;
    //}

  //}

`;const jP=j.div`
@media (max-width: 700px) {
  position:fixed;
}

color:var(--font-color);
  position: absolute;
height:100vh;
width:100vw;
overflow:hidden;
display:flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  //opacity: 0;
pointer-events:none;
  background-color: #00000000;
transition:all .5s ease;
${t=>t.menu&&`
  opacity: 1;
pointer-events:auto;
  background-color: #00000080;
  `}

  .upgrade{
    background-color:#13151750;
    position:sticky;
    bottom:0;
    padding-top:0;
    backdrop-filter: blur(20px);
    border-top:dashed 1px grey;

    & > div > div{
  padding:0;
  padding-top:1rem;
}
  }

article{
  padding:1rem;

  p{
    color:grey;
  }
}

  > div {
pointer-events:auto;
  right:-350px;
transition:all .5s ease;
${t=>t.menu&&`
  right:0;
  `}
  }

& .open{
  //opacity: 1;
//pointer-events:none;
  //background-color: #00000080;
  //animation: ${dy} 0.5s ease both;
}

  & .open div{
  }

& .close{
  //opacity: 0;
  //background-color: #00000000;
  //animation: ${dy} 0.5s ease both;
}

  & .close div{
  //right:-300px;
  }



hr{
  border-top:none;
  border-color:#2d2f3350;
}

  .row{
  }

  .delete{
    border:solid 1px transparent;

    svg{
      font-size:1.2rem;
    }
  }

  .delete:hover{
    color:#dc3545;
    border:solid 1px #dc3545;
  background-color:#dc354520;
  }

  .count{
  }

  button{
    //cursor:pointer;
    background-color:transparent;
    align-items:center;
    padding:.75rem;

    &:hover{
    background-color:#2d2f33;
      border-radius:.5rem;
    }

    h3{
      margin:0;
    }

    figure{
      width:50px;
      height:50px;
      margin:0;
      border-radius:.3rem;
      display:grid;
      place-items:center;
      color:#1a1c20;
      flex:1;
    }
  }

  button:has(div) div{
    display:flex;
    align-items:center;
    gap:1rem;
  }

`;j.figure`
  background-color: ${t=>t.bg?t.bg:"red"};
`;const BP=j.div`
  position: relative;
  top: 0;
  bottom: 0;
  right: -350px;
  background-color: #1a1c20;
  width: 275px;
  overflow-y: scroll;

  * {
    //pointer-events:none;
  }

  .color_count_container{
    padding:0;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    margin-top:.5rem;
  }

  .color_count{
    display:inline !important;
    width:auto;
    padding:0;
  }

  .patterns_container{
display: grid;
  grid-template-columns:repeat(2, 1fr);
  grid-gap: .5rem;

    div{
      //width:30px;
      height:40px;
      background-color:red;
      border-radius:.25rem;
    }
  }
`;j.button`
  background-color: var(--complement-color) !important;
  height: 60px;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid thin #ddd2 !important;
  transition: filter .s ease-in;
  filter: drop-shadow(0px 0px 0px #0064ae);

  &:hover {
    filter: drop-shadow(0px 0px 50px #0064ae);
  }

  span {
    width: 100%;
    font-size: 1rem;
  }
`;const HP=[{hex_code:"#DDDDDD",color_name:"Gainsboro",use_advice:"Goals or objectives."},{hex_code:"#C78DD0",color_name:"Plum",use_advice:"Expanding knowledge."},{hex_code:"#F5A38A",color_name:"Dark Salmon",use_advice:"Urgent or highly important."},{hex_code:"#F3C57D",color_name:"Sandy Brown",use_advice:" Reminders."},{hex_code:"#DDE595",color_name:"Khabi",use_advice:"relaxation-related."},{hex_code:"#7BD5E1",color_name:"Light Sky Blue",use_advice:"Creativity or inspiration."}],WP=j.figure`
  padding: 1rem;
  margin: 1rem;
  background-color: #e75332;
  border-radius: 0.5rem;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  gap: 0;
zoom:.8;

  * {
    padding: 0;
    margin: 0;
  }

  header {
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .main_top {
      display: flex;
      align-items: end;
      gap: 0.5rem;

      h1 {
        font-size: 5rem;
        position: relative;
        top: 20px;
        font-weight: 300;
      }
    }

    .main_bottom {
      h2 {
        font-weight: 300;
      }
    }

    .grid {
      display: flex;
      justify-content: space-between;
    }
  }

  footer {
    margin-top: 1rem;
    margin-bottom: 1rem;
    height: 60px;
    border-radius: 0.5rem;
    border: dashed thin white;
  }

p{
  font-size:.8rem;
}
`,GP=t=>{const{quantity:e,words:n,characters:r,tags:i}=t.countForKnowledge;return D(WP,{children:[y("header",{children:y("h3",{children:"all u need to know"})}),D("main",{children:[D("div",{className:"main_top",children:[y("h1",{children:e}),y("span",{children:"notes"})]}),D("div",{className:"main_bottom grid",children:[D("div",{children:[y("span",{children:"words"}),y("h2",{children:n})]}),D("div",{children:[y("span",{children:"characters"}),y("h2",{children:r})]}),D("div",{children:[y("span",{children:"tags"}),y("h2",{children:"0"})]})]})]}),y("footer",{}),y("p",{children:"this panel will show u information constantly"})]})},KP=j.figure`
color:black;
  padding: 1rem;
  padding-top: 0;
  margin: 0rem;
  display: flex;
  flex-direction: column;
  //height:350px;
  gap: 1rem;
  box-sizing: border-box;
  //grid-template-column:auto;
  //grid-template-areas:
  //"first first first second second"
  //"first first first second second"
  //"first first first second second"
  //"first first first third third"
  //"first first first third third"
  //"first first first third third"
  //"first first first fourth fourth"
  //"first first first fourth fourth"
  //"fifth fifth sixth sixth seventh"
  //"fifth fifth sixth sixth seventh";
zoom:.8;

div{
  border-radius:.25rem;
}

  .top {
    display: flex;
    gap:1rem;
    height:250px;

    &>div:nth-child(1){
      //background-color:${t=>t.sort?t.sort:"purple"};
      //position:relative;
      //flex:3;
    }

    &>div:nth-child(2){
      flex:2;

      display:flex;
      flex-direction:column;
      gap:1rem;

      & *{
        flex:2;
      }

      & div:nth-child(3){
        flex:1;
      }
    }
  }

div{

  h1,h2,p{
  font-weight:100;
  margin:.5rem;
  }

  p{
    color:#0009;
  }
}


  .f1{
    display:flex;
    flex-direction:column;
    justify-content:space-between;

    p{
      color:#0009;
    }

    h1{
      font-size:3rem;
    }

    & *{
      margin:0;
      padding:0;
      margin:.75rem;
    }
  }
  .f2,.f3{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
  }
  .f3{}
  .f4{}
  .f5{}
  .f6{}
  .f7{}

  .bottom {
    display: flex;
      width:100%;
    gap:1rem;
    height:50px;

    & * {
      flex:2;
    }

      & div:nth-child(3){
        flex:1;
      }
  }

  & > div {
    margin: 0;
    padding: 0;
    border-radius: 0.25rem;
  }
`,Or=j.div`
      background-color:${t=>t.sort?t.sort:"transparent"};
border:${t=>t.sort?"none":"dashed 2px grey"};
      position:relative;
      flex:3;
`,qP=t=>{var r,i,s,o,a,l,u,c,h,d,g,v,w,_,p,f,m;const{countForKnowledge:e}=t,n=Object.entries(e.countByColor).sort(([E,C],[A,$])=>$-C);return D(KP,{children:[D("div",{className:"top",children:[D(Or,{className:"f1",sort:(r=n[0])==null?void 0:r[0],children:[D("p",{children:["The background color : ",(i=n[0])==null?void 0:i[0]," is the most used"]}),y("h1",{children:(s=n[0])==null?void 0:s[1]})]}),D("div",{children:[D(Or,{className:"f2",sort:(o=n[1])==null?void 0:o[0],children:[y("p",{children:(a=n[1])==null?void 0:a[0]}),y("h2",{children:(l=n[1])==null?void 0:l[1]})]}),D(Or,{className:"f3",sort:(u=n[2])==null?void 0:u[0],children:[y("p",{children:(c=n[2])==null?void 0:c[0]}),y("h2",{children:(h=n[2])==null?void 0:h[1]})]}),y(Or,{className:"f4",sort:(d=n[3])==null?void 0:d[0],children:y("h2",{children:(g=n[3])==null?void 0:g[1]})})]})]}),D("div",{className:"bottom",children:[y(Or,{className:"f5",sort:(v=n[4])==null?void 0:v[0],children:y("h2",{children:(w=n[4])==null?void 0:w[1]})}),y(Or,{className:"f6",sort:(_=n[5])==null?void 0:_[0],children:y("h2",{children:(p=n[5])==null?void 0:p[1]})}),y(Or,{className:"f7",sort:(f=n[6])==null?void 0:f[0],children:y("h2",{children:(m=n[6])==null?void 0:m[1]})})]})]})},QP=j.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;
zoom:.8;

  button {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1rem;
    border: solid thin #fff5;
    color: #fff5;
    cursor: pointer;
  border-radius: 0.5rem;
  }
`,YP=j.button`
  font-size: 1.5rem;

  &:hover {
    background-color: var(--font-color) !important;
    color: black;
  }

  svg {
    font-size: 1.5rem;
  }
`;function XP(t){return cn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"}}]})(t)}function JP(t){return cn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M12.83 352h262.34A12.82 12.82 0 0 0 288 339.17v-38.34A12.82 12.82 0 0 0 275.17 288H12.83A12.82 12.82 0 0 0 0 300.83v38.34A12.82 12.82 0 0 0 12.83 352zm0-256h262.34A12.82 12.82 0 0 0 288 83.17V44.83A12.82 12.82 0 0 0 275.17 32H12.83A12.82 12.82 0 0 0 0 44.83v38.34A12.82 12.82 0 0 0 12.83 96zM432 160H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0 256H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"}}]})(t)}function ZP(t){return cn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 224h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm416 192H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm3.17-384H172.83A12.82 12.82 0 0 0 160 44.83v38.34A12.82 12.82 0 0 0 172.83 96h262.34A12.82 12.82 0 0 0 448 83.17V44.83A12.82 12.82 0 0 0 435.17 32zm0 256H172.83A12.82 12.82 0 0 0 160 300.83v38.34A12.82 12.82 0 0 0 172.83 352h262.34A12.82 12.82 0 0 0 448 339.17v-38.34A12.82 12.82 0 0 0 435.17 288z"}}]})(t)}function eD(t){return cn({tag:"svg",attr:{viewBox:"0 0 16 17"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M12 9V7H8V5h4V3l4 3-4 3zm-2 3H6V3L2 1h8v3h1V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v11.38c0 .39.22.73.55.91L6 16.01V13h4c.55 0 1-.45 1-1V8h-1v4z"}}]})(t)}const tD=gt`
0%{opacity:0}
100%{opacity:1;}
`,nD=j.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  z-index:2;
  justify-content: center;
  align-items: center;
  background-color: #24242420;
  animation: ${tD} 0.2s ease both;

  .content-container {
    background-color: #2b2b2b;
    padding: 2rem;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
    border-radius: 0.5rem;

    div {
      display: flex;
      gap: 0.5rem;

      button {
        width: 8rem;
        height: 2rem;
        background-color: #1b1b1b;
        border: none;
        color: whitesmoke !important;
        font-weight: bold;
        border-radius: 0.25rem;
        cursor: pointer;
      }

      button:nth-child(1) {
        background-color: #dc3545;
      }
    }
  }
`,rD=t=>{const{setState:e,message:n,action:r}=t;return y("div",{children:y(nD,{onClick:()=>e(!1),children:D("div",{className:"content-container",children:[y("p",{children:n}),D("div",{children:[y("button",{onClick:r,children:"Yes"}),y("button",{onClick:()=>e(!1),children:"No"})]})]})})})},iD=t=>{const[e,n]=b.exports.useState(!1),{user:r,SignOut:i}=Nr();return D(Sn,{children:[e&&y(rD,{message:"Do you wanna sign out ?",action:async()=>{try{await i()}catch(o){console.log(o)}},setState:n}),y(QP,{children:D(YP,{onClick:o=>n(!0),children:[y(eD,{}),y("span",{children:"Log out"})]})})]})},sD=gt`
0%{transform:scale(.9);opacity:0}
100%{transform:scale(1);opacity:1}
`,oD=gt`
0%{transform:scale(1);opacity:1}
100%{transform:scale(.9);opacity:0}
`,aD=j.div`
background-color:#1a1c20;

border-radius:.5rem;
position:relative;
//top:50%;
//left:50%;
//transform:translate(-50%,-50%);
transition:all .3s ease-in-out both;
animation:${sD} .3s ease-in-out;

&.close{
animation:${oD} .3s ease-in-out both;
}
`,lD=j.figure`
span{
display:flex;
  align-items:end;
gap:.25rem;
}

b{

  background-color: rgb(243,243,243);
    color: rgb(33,33,33);
    margin-left: 2px;
    padding-top: 1px;
    padding-bottom: 1px;
    padding-left: 4px;
    padding-right: 4px;
    border-radius: 3px;
    border: solid 1px #ccc;
    border-bottom-color: #bbb;
    box-shadow: inset 0 -1px 0 #bbb;
    font-family: monospace;
    font-size: 11px;

    background-color: #1d1d1f;
    border: solid 1px black;
    box-shadow: none;
    color: white;
`,uD=["<span><b>o</b>,<b>j</b> New note</span>","<span><b>o</b>,<b>j</b> New note</span>","<span><b>o</b>,<b>j</b> New note</span>","<span><b>o</b>,<b>j</b> New note</span>","<span><b>o</b>,<b>j</b> New note</span>","<span><b>o</b>,<b>j</b> New note</span>","<span><b>o</b>,<b>j</b> New note</span>"],cD=t=>{const{setShortcutsModal:e,shortcutsModal:n}=t,r=i=>{i.target.classList.add("close"),setTimeout(()=>{e(!1)},300)};return y(aD,{onClick:i=>r(i),shortcutsModal:n,children:uD.map(i=>y(lD,{dangerouslySetInnerHTML:{__html:i}}))})},hD=gt`
0%{transform:scale(.9);opacity:0}
100%{transform:scale(1);opacity:1}
`,dD=gt`
0%{transform:scale(1);opacity:1}
100%{transform:scale(.9);opacity:0}
`,fD=j.div`
background-color:red;
height:200px;
width:200px;

border-radius:.5rem;
position:relative;
//top:50%;
//left:50%;
//transform:translate(-50%,-50%);
transition:all .3s ease-in-out both;
animation:${hD} .3s ease-in-out;

&.close{
animation:${dD} .3s ease-in-out both;
}
`,pD=t=>{const{setTagsModal:e,tagsModal:n}=t,r=i=>{i.target.classList.add("close"),setTimeout(()=>{e(!1)},300)};return y(fD,{onClick:i=>r(i),tagsModal:n})},mD=t=>{const{setMenu:e,menu:n,data:r,handdleAdd:i}=t;b.exports.useState({});const[s,o]=b.exports.useState(!1),[a,l]=b.exports.useState(!1),[u,c]=b.exports.useState({quantity:0,words:0,characters:0,countByColor:{}});Nr(),En(),b.exports.useEffect(()=>{r.length!=0&&(c(w=>({...w,quantity:r.length,words:g(r),characters:d(r),countByColor:h(r)})),console.log(r))},[r]);const h=w=>w.reduce((_,p)=>{const{background_color:f}=p;return _[f]=(_[f]||0)+1,_},{});function d(w){let _=0;return w.forEach(p=>{p.hasOwnProperty("body")&&typeof p.body=="string"&&(_+=p.body.length)}),_}function g(w){let _=0;return w.forEach(p=>{p.hasOwnProperty("body")&&typeof p.body=="string"&&(console.log(p.body.split(" ").length),_+=p.body.split(" ").length)}),_}return y(Sn,{children:D(jP,{menu:n,id:"bg-menu",children:[D(VP,{onClick:w=>{w.target.parentNode===document.querySelector("#bg-menu")&&(e(!1),o(!1),l(!1))},menu:n,children:[s&&y(cD,{setShortcutsModal:o,shortcutsModal:s}),a&&y(pD,{setTagsModal:l,tagsModal:a})]}),D(BP,{children:[y(GP,{countForKnowledge:u}),y(qP,{countForKnowledge:u}),y(iD,{setTagsModal:l,setShortcutsModal:o,setMenu:e})]})]})})},gD={color:"red",textDecoration:"none",display:"block"},yD=j.article`
  background-color: ${t=>t.bg};
  border-radius: 0.25rem;
  text-align: left;
  color: #141414;
  margin-bottom: 0.5rem;
  break-inside: avoid;

  * {
    margin: 0;
  }

  span {
    color: #0009;
    font-size: 0.8rem;
    display: block;
    padding: 0.5rem 1rem 1rem 1rem;
  }

  p {
    margin-bottom: 0.5rem;
    line-height: 1.1rem;
    padding: 1rem 1rem 0 1rem;
  }

  a {
    text-decoration: none;
    color: #141414;
  }
`,vD=t=>{const{background_color:e,title:n,date:r,key:i,id:s,text_align:o}=t;return y(Ko,{to:`/note/${s}`,style:gD,children:D(yD,{bg:e,children:[y("p",{children:n}),y(ym,{textColorContrast:" #0009"}),y("span",{children:r})]})})},wD=j.div`
  width: min(100%, var(--max-width-desktop));
  margin: 0 auto;
  columns: 5 180px;
  column-gap: 0.5rem;
  position: relative;

  animation: ${t=>t.query?"upHeader":"downHeader"} 0.5s ease
    both;

  ${t=>!t.dataLength&&`
    height:5rem;
    display:flex;
    justify-content:center;
    align-items:center;
  `}

@media (max-width: 700px) {
  columns: 5 140px;
}
`,ED=j.div`
  background-color: #dddddd;
  top: 0;
  bottom: 0;
  right: 0;
  width: 0%;
  position: absolute;
  z-index: 2;
  transition: width 0.5s ease-in-out;
  ${t=>t.addTransition&&"width:100%"}
`,SD=j.div`
  width: 100%;
  padding: 0 1rem;

  .add {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
  }

  .no_notes {
    width: 100%;
    text-align: center;

    h3 {
      color: #3b3b3b;
    }
  }

  .no_notes_cont {
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .desktop_add {
    display: none;
  }

  @media (min-width: 700px) {
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 0;

    header {
      justify-content: space-between;
    }

    .add {
      position: absolute;
      bottom: 1rem;
    }

    .general_container {
      max-height: auto;
    }

    .mobile_add {
      display: none;
    }

    .desktop_add {
      display: flex;
    }
  }
`,_D=({children:t})=>{const[e,n]=b.exports.useState(!1),[r,i]=b.exports.useState(!1),[s,o]=b.exports.useState([]),[a,l]=b.exports.useState(""),[u,c]=b.exports.useState(!1),{user:h}=Nr(),d=En(),g=_c(800);b.exports.useEffect(()=>{h===null&&d("/signin")},[h]),b.exports.useEffect(()=>{(async()=>{const E=await Kp(ou($r,`${h.uid}`));o(E.docs.map(C=>({...C.data(),id:C.id})))})()},[h]);const v=s.filter(E=>E.title.toLowerCase().includes(a.toLowerCase()))&&s.filter(E=>E.body.toLowerCase().includes(a.toLowerCase())),w=()=>{c(!0),setTimeout(()=>{d("/new")},600)},_={setMenu:i,menu:r,data:s,handdleAdd:w},p={query:a,setQuery:l,data:s,handdleAdd:w},f={query:a,searchVisible:e,setSearchVisible:n,setMenu:i},m={query:a,setQuery:l,setSearchVisible:n};return D(Sn,{children:[y(mD,{..._}),D(SD,{children:[y(ED,{id:"add_background_transition",addTransition:u}),y(gm,{start:".5s"}),e&&y(PP,{...m}),y(OP,{...f}),y(FP,{...p}),y(wD,{query:a,dataLength:s.length,children:s.length!==0?v.map(E=>y(vD,{...E},E.id)):y($P,{})}),g&&y("button",{onClick:w,className:"icon_button add",translate:"no"}),y("div",{children:t})]})]})},kD=gt`
  0%{opacity:0}
100%{opacity:1}
`,CD=j.div`
  min-height: 100vh;
  transition: background-color 1s ease;
  font-family:Outfit;
  background-color: ${t=>t.backgroundColor};

  *{
    animation:${kD} 1s ease;
  }

  header *,
  .form,.hr {
    transition: all 0.2s ease-in-out;
  }

  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    header {
      justify-content: space-between;
    }

    .general-container {
      width: 100%;
      max-height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;j.header`
    display: flex;
  justify-content: space-between;
  align-items:center;
  width: min(100%,var(--max-width-desktop));

  .header-subsection {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;function QS(t){return cn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"}}]})(t)}function YS(t){return cn({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}}]})(t)}const xD=t=>{b.exports.useState(!1),b.exports.useState(!1);const{setVisible:e,handdleAddDoc:n,setConfigPanelOpen:r,configPanelOpen:i,noteContent:s}=t;return D(Sn,{children:[D(vm,{color:s.background_color,children:[y(Br,{both:!0,textColorContrast:`${s.text_color_contrast}`,children:y(Ko,{to:"/",translate:"no",children:y(QS,{})})}),D("div",{className:"header-subsection",children:[y(Br,{textColorContrast:`${s.text_color_contrast}`,left:!0,translate:"no",onClick:()=>r(!i),configOpen:i,children:y(zP,{})}),y(Br,{textColorContrast:`${s.text_color_contrast}`,right:!0,onClick:n,translate:"no",children:y(YS,{})})]})]}),y(ym,{fadeIn:!0,opac:!0,textColorContrast:`${s.text_color_contrast}`,style:{borderColor:`${s.text_color_contrast}70`}})]})},TD=j.textarea`
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
  display: block;
  resize: none;
  overflow: hidden;
  width: 100%;
  height: 49vh;
  padding-bottom: 2rem;
  border: none;
  outline: none;
  font-size: 24px;
  text-align: ${t=>t.textAlign&&t.textAlign};
  font-family: Outfit;
  color: ${t=>t.textColorContrast}70;
  transition: color 1s ease;

  &::placeholder {
    color: ${t=>t.textColorContrast}70;
    transition: color 1s ease;
  }

  &:focus {
    color: ${t=>t.textColorContrast};
  }
`,fy=32,XS=t=>{const{placeholder:e,spellCheck:n,defaultValue:r,textAlign:i,setNoteContent:s,noteContent:o,textColorContrast:a}=t,l=rn.useRef(null),[u,c]=rn.useState(""),h=d=>c(d.target.value);return rn.useLayoutEffect(()=>{l.current.style.height="inherit",l.current.style.height=`${Math.max(l.current.scrollHeight,fy)}px`},[u]),y(Sn,{children:y(TD,{onChange:h,placeholder:e,ref:l,spellCheck:n,onKeyUp:d=>{s(g=>({...g,body:u}))},textColorContrast:a||t.noteContent.text_color_contrast,style:{minHeight:fy,resize:"none"},defaultValue:r||u,textAlign:i||t.noteContent.text_align})})},ID=gt`
0%{top:3rem;opacity:0;}
100%{top:0;opacity:1;}
`,bD=j.blockquote`
  border: none;
  outline: none;
  width: 100%;
  display: block;
  resize: none;
  text-align: ${t=>t.textAlign&&t.textAlign};

  line-height: 1;
  font-size: var(--font-size-title);
  font-weight: bold;
  line-height: 1;
  margin: 21.44px 0;
  color: ${t=>t.contentEditable?t.textColorContrast+70:t.textColorContrast};
  transition: color 1s ease;

  //opacity: 0;
  //position: relative;
  //animation: ${t=>t.contenteditable?"none":ID} 0.5s 1s
    //ease-in-out both;

  &:focus {
    color: ${t=>t.textColorContrast};
  }

  &[contenteditable]:empty::before {
    content: 'Title';
    color: ${t=>t.textColorContrast}70;
    transition: color 1s ease;
  }

  &[contenteditable]:empty::before {
    content: 'Title';
    color: ${t=>t.textColorContrast}70;
    transition: color 1s ease;
  }

@media (max-width: 800px) {
  font-size:3rem !important;
}
`,wm=t=>{const{setNoteContent:e,noteContent:n,editable:r,content:i}=t,s=b.exports.useRef(i),o=a=>{e(l=>({...l,title:a.target.textContent}))};return y(bD,{spellCheck:"false",role:"textbox",textColorContrast:n.text_color_contrast,contentEditable:r,suppressContentEditableWarning:!0,textAlign:n.text_align,onKeyPress:a=>o(a),children:i?s.current?s.current:i:""})},AD=j.div`
  transition: all 0.8s ease-in-out;
  width: min(100%, var(--max-width-desktop));
  font-family:Outfit;


@media (max-width: 700px) {
  padding:.5rem;
}
`,ND=t=>{const{setNoteContent:e,noteContent:n}=t;return y(AD,{children:D("form",{children:[y(wm,{editable:!0,setNoteContent:e,noteContent:n}),y(XS,{placeholder:"Type something...",spellCheck:"false",setNoteContent:e,noteContent:n})]})})},OD=j.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
gap:.5rem;
  border: none;
  background-color: transparent;
  color: var(--font-color);
padding:.5rem;
cursor:pointer;

&:hover{
  background-color:#2d2f33;
  border-radius:.25rem;
};

&>article{
  display:flex;
  flex-direction:row !important;
  gap:.5rem !important;
}

article{
  display:flex;
  align-items:start;
  flex-direction:column;
  gap:0;

  *{
    margin:0;
  }

span{
  font-size:16px;
  font-weight:700;
}

p{
  text-align:left;
  font-size:14px;
}
}


  div {
    width: 40px;
    height: 40px;
    //background-color: ${t=>{var e;return(e=t.hex_code)!=null?e:red}};
    background-color:${t=>{var e;return(e=t.hex_code)!=null?e:red}};
    border-radius:.25rem;
  }

  .checked{
    width:10px;
    height:10px;
    border-radius:50%;
    background-color:${t=>t.checked?"var(--complement-color)":"#40414b"};
  }

input{
  display:none;
}
`,RD=t=>{const{color_name:e,hex_code:n,use_advice:r,handleBackgroundChange:i,selectedBackground:s,index:o}=t;return D(OD,{hex_code:n,onClick:()=>i(o,n),checked:s===o,children:[D("article",{children:[y("div",{className:"color_thum"}),D("article",{children:[y("span",{children:e}),y("p",{children:r})]})]}),y("input",{type:"radio",name:"option",checked:s===o}),y("article",{className:"checked"})]})},PD=j.figure`
  position: fixed;
  bottom: 0.5rem;
  right: ${t=>t.open?".5rem":"-100%"};
  //opacity: ${t=>t.open?"1":"0"};
  //visibility: ${t=>t.open?"visible":"hidden"};
  margin: 0;
  color: white;
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: all 0.5s ease-in-out;
zoom:.9;

  * {
    margin: 0;
  }
`,py=j.main`
  background-color: #1a1c20;
  padding: 1rem;
  border-radius: 0.5rem;
  color: var(--font-color);

  p {
    font-size: 0.9rem;
    opacity: 0.4;
  }

  & article {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
`,DD=j.article`
  .background_option_section {
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
  }
`,$D=j.article``;j.footer`
  background-color: blue;
  display: flex;

  article {
  }
`;const LD=j.div``,MD=j.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 1.75rem;
  margin: 0.5rem 0;
  border-radius: 0.25rem;
  border: dashed thin #2d2f33;
  padding: 0.25rem;
  gap: 0.25rem;
`,vh=j.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.25rem 0.5rem;
  border-radius: inherit;
background-color:${t=>t.checked?"#2d2f33":"transparent"};
cursor:pointer;

  input {
    display: none;
  }

  &:hover {
    background-color: #2d2f33;
  }

  
`,FD=t=>{const{setNoteContent:e,handleTextAlignChange:n,selectedTextAlign:r}=t;return y(LD,{children:D(MD,{children:[D(vh,{checked:r===0,onClick:()=>n(0,"left"),children:[y(JP,{}),y("input",{type:"radio",name:"option",checked:r===0})]}),D(vh,{checked:r===1,onClick:()=>n(1,"center"),children:[y(XP,{}),y("input",{type:"radio",name:"option",checked:r===1})]}),D(vh,{checked:r===2,onClick:()=>n(2,"right"),children:[y(ZP,{}),y("input",{type:"radio",name:"option",checked:r===2})]})]})})},UD=t=>{const{configPanelOpen:e,setNoteContent:n,noteContent:r}=t,[i,s]=b.exports.useState(0),[o,a]=b.exports.useState(0),l=(c,h)=>{n(d=>({...d,background_color:h})),s(c)},u=(c,h)=>{n(d=>({...d,text_align:h})),a(c)};return D(PD,{open:e,children:[y(py,{children:D(DD,{children:[y("h3",{children:"Background"}),y("p",{children:"Customize note background color for note thumbnail display on the home screen."}),y("div",{className:"background_option_section",children:HP.map((c,h)=>y(RD,{index:h,selectedBackground:i,handleBackgroundChange:l,color_name:c.color_name,hex_code:c.hex_code,use_advice:c.use_advice},h))})]})}),y(py,{children:D($D,{children:[y("h3",{children:"Text"}),y("p",{children:"Customize note text properties for the body, excluding the title."}),y(FD,{setNoteContent:n,handleTextAlignChange:u,selectedTextAlign:o})]})})]})},zD=t=>{const n=["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()],r=t.getDate(),i=t.getFullYear();return`${n} ${r}, ${i}`},VD=()=>{const[t,e]=b.exports.useState({date:"",title:"",body:"",background_color:"#DDDDDD",text_color_contrast:"#1b1b1b",text_align:"left"}),[n,r]=b.exports.useState(""),[i,s]=b.exports.useState(!1),[o,a]=b.exports.useState(!1),{AddDoc:l}=Nr(),u=En(),c=async()=>{t.title&&t.body?(t.date=zD(new Date),await l(t),u("/")):(r("You cannot save a note without title or body"),setTimeout(()=>{r("")},5e3))};b.exports.useEffect(()=>{["#7BD5E1","#DDE595","#DDDDDD","#F3C57D"].includes(t.background_color)?e(w=>({...w,text_color_contrast:"#1b1b1b"})):e(w=>({...w,text_color_contrast:"#F6F1E9"}))},[t.background_color]);const h={setVisible:s,handdleAddDoc:c,setConfigPanelOpen:a,configPanelOpen:o,setNoteContent:e,noteContent:t},d={setNoteContent:e,noteContent:t},g={configPanelOpen:o,setNoteContent:e,noteContent:t};return D(Sn,{children:[D(CD,{backgroundColor:t.background_color,textAlign:t.text_align,id:"new",children:[y(us,{children:"hola mundo"}),D("div",{className:"general-container",children:[y(xD,{...h}),y(ND,{...d})]})]}),y(UD,{...g})]})},jD=gt`
0%{top:3rem;opacity:0;}
100%{top:0;opacity:1;}
`,BD=j.div`
  background-color: ${t=>t.backgroundColor};
  min-height: 100vh;
  width: 100%;

  //*{
  //border:solid thin red;
  //}

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: min(100%, var(--max-width-desktop));
    margin: auto;

    div {
      display: flex;
      gap: 0.25rem;
    }
  }

  .note-content {
    color: ${t=>t.textColorContrast};
    margin:1rem;

    * {
      position: relative;
      opacity: 0;
    }

    * {
      animation: ${jD} 0.5s 1s ease-in-out both;
    }

    & p {
      animation-delay: 1.5s;
    }
  }

  h1 {
    line-height: 2rem;
    line-break: break-word;
  }

  span {
    //color: whitesmoke;
  }

  a {
    text-decoration: none;
  }

  .body {
    white-space: pre-wrap;
    font-size: var(--font-size-pharag);
  }

  .edit-enable {
    display: flex;
    flex-direction: column;
    width: min(100%, 800px);
  }

  .title {
    font-size: var(--font-size-title);
    content: 'Title';
    margin: 3rem 0;
    line-height: 1;
    font-weight: bold;
    margin: 21.44px 0;
    outline: none;
    color: ${t=>t.tc}70;
    transition: color 1s ease;
  }

  .title:focus {
    color: ${t=>t.tc};
  }

  .body:focus {
    color: ${t=>t.tc};
  }

  .title[contenteditable]:empty::before {
    content: 'Title';
    color: ${t=>t.tc}70;
  }

  .date {
    font-size: var(--font-size-pharag);
    color: ${t=>t.tc};
    display: block;
    text-decoration:underline;
    //border-bottom:thin solid ;
  }

  .date-edit {
    color: ${t=>t.tc}70;
  }

  textarea {
    margin: 16px 0;
    width: 100%;
    height: 49vh;
    resize: none;
    padding-bottom: 2rem;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: var(--font-size-pharag);
    color: ${t=>t.tc}70;
    transition: color 1s ease;
  }

  textarea::placeholder {
    color: ${t=>t.tc}70;
  }

  textarea:focus {
    color: ${t=>t.tc};
  }

  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    header {
      justify-content: space-between;
    }

    .general-container {
      //max-height: auto;
      //position:relative;
    }

    .note-content {
      width: min(100%, var(--max-width-desktop));
      margin: auto;
    }
  }

`,HD=gt`
0%{opacity:0}
100%{opacity:1;}
`,WD=j.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  z-index:2;
  justify-content: center;
  align-items: center;
  background-color: #24242420;
  animation: ${HD} 0.2s ease both;

  .content-container {
    background-color: #2b2b2b;
    padding: 2rem;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
    border-radius: 0.5rem;

    div {
      display: flex;
      gap: 0.5rem;

      button {
        width: 8rem;
        height: 2rem;
        background-color: #1b1b1b;
        border: none;
        color: whitesmoke !important;
        font-weight: bold;
        border-radius: 0.25rem;
        cursor: pointer;
      }

      button:nth-child(1) {
        background-color: #dc3545;
      }
    }
  }
`,GD=t=>{const{setState:e,message:n,action:r}=t;return y("div",{children:y(WD,{onClick:()=>e(!1),children:D("div",{className:"content-container",children:[y("p",{children:n}),D("div",{children:[y("button",{onClick:r,children:"Yes"}),y("button",{onClick:()=>e(!1),children:"No"})]})]})})})};j.header`
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      gap: 0.25rem;
    }
`;function KD(t){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}},{tag:"path",attr:{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"}}]})(t)}const qD=t=>D(Sn,{children:[D(vm,{children:[y(Br,{both:!0,textColorContrast:`${t.noteContent.text_color_contrast}`,children:y(Ko,{to:"/",translate:"no",children:y(QS,{})})}),D("div",{children:[y(Br,{left:!0,textColorContrast:`${t.noteContent.text_color_contrast}`,children:y("div",{translate:"no",to:"/",onClick:()=>t.setDeleteMessage(!0),children:y(UP,{})})}),t.activeEdit?y(Br,{right:!0,textColorContrast:`${t.noteContent.text_color_contrast}`,children:y("div",{to:"/",onClick:t.handdleUpdate,translate:"no",children:y(YS,{})})}):y(Br,{right:!0,textColorContrast:`${t.noteContent.text_color_contrast}`,children:y("div",{to:"/",onClick:()=>t.setActiveEdit(!t.activeEdit),translate:"no",children:y(KD,{})})})]})]}),y(ym,{downHeader:!0,textColorContrast:`${t.noteContent.text_color_contrast}`})]}),QD=j.div`
  .note-content {
    color: ${t=>t.tc};
    margin:5rem;
  }

  h1 {
    line-height: 2rem;
    line-break: break-word;
    font-size:var(--font-size-title);
  }

  span {
    //color: whitesmoke;
  }

  a {
    text-decoration: none;
  }

  .body {
    font-size:var(--font-size-pharag);
    white-space: pre-wrap;
    font-weight:400px;
  }

  .edit-enable {
    display: flex;
    flex-direction: column;
  }

  .title {
    font-size: var(--font-size-title);
    content: "Title";
    margin: 3rem 0;
    line-height: 1;
    font-weight: bold;
    margin: 21.44px 0;
    outline: none;
    color: ${t=>t.tc}70;
    transition: color 1s ease;
  }

  .title:focus {
    color: ${t=>t.tc};
  }

  .body:focus {
    color: ${t=>t.tc};
  }

  .title[contenteditable]:empty::before {
    content: "Title";
    color: ${t=>t.tc}70;
  }

  .date {
    color: ${t=>t.tc};
    white-space: pre-wrap;
    font-weight:400px;
    font-size:var(--font-size-pharag);
  }

  .date-edit {
    color: ${t=>t.tc}70;
    white-space: pre-wrap;
    font-weight:400px;
    font-size:var(--font-size-pharag);
  }

  textarea {
    margin: 16px 0;
    width: 100%;
    height: 49vh;
    resize: none;
    padding-bottom: 2rem;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: var(--font-size-pharag);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: ${t=>t.tc}70;
    transition: color 1s ease;
  }

  textarea::placeholder {
    color: ${t=>t.tc}70;
  }

  textarea:focus {
    color: ${t=>t.tc};
  }

  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    header {
      justify-content: space-between;
    }

    .general-container {
      width: 700px;
      max-height: auto;
      //position:relative;
    }
  }
`,YD=t=>y(QD,{className:"note-content edit-enable",noteContent:t.noteContent,children:D("div",{className:"note-content edit-enable",children:[y(wm,{editable:!0,setNoteContent:t.setNoteContent,noteContent:t.noteContent,content:t.noteContent.title}),y(XS,{placeholder:"Type something...",spellCheck:"false",textColorContrast:t.noteContent.text_color_contrast,defaultValue:t.noteContent.body,textAlign:t.noteContent.text_align,setNoteContent:t.setNoteContent})]})}),XD=()=>{b.exports.useState([]);const[t,e]=b.exports.useState({}),{id:n}=UC(),{user:r,UpdateDoc:i,DeleteDoc:s}=Nr(),[o,a]=b.exports.useState(!1),[l,u]=b.exports.useState(t.title),[c,h]=b.exports.useState(""),[d,g]=b.exports.useState(!1),[v,w]=b.exports.useState(!1),_=En();b.exports.useEffect(()=>{(async()=>{(await Kp(ou($r,`${r.uid}`))).docs.map(C=>C.id===n&&e(C.data()))})()},[]);const p=async()=>{await i(r.uid,n,c||t.body,l||t.title),a(!o),w(!0),setTimeout(()=>{w(!1)},2e3)},f=async()=>{try{await s(n),await _("/")}catch(m){console.log(m)}g(!1)};return b.exports.useEffect(()=>{},[o]),D(BD,{backgroundColor:t.background_color,textColorContrast:t.text_color_contrast,children:[y(gm,{start:".5s"}),d&&y(GD,{message:"Are you sure that do u wanna delete this note?",action:f,setState:g}),D("div",{className:"general-container",style:{width:"100vw"},children:[v&&y(us,{final:"success",children:"Note updated successfully"}),y(qD,{setDeleteMessage:g,handdleUpdate:p,activeEdit:o,noteContent:t,setActiveEdit:a}),o?y(YD,{noteContent:t,setNoteContent:e,activeEdit:o}):D("div",{className:"note-content",children:[y(wm,{content:l!=null?l:t.title,editable:!1,textAlign:t.text_align,noteContent:t}),y("span",{className:"date",style:{textAlign:t.text_align},children:t.date}),y("p",{className:"body",style:{textAlign:t.text_align},children:c||t.body})]})]})]})};function JD(){return y("div",{children:y(PO,{children:y(KC,{children:D(HC,{children:[y(gi,{path:"/",element:y(DO,{children:y(_D,{})})}),y(gi,{path:"/new",element:y(VD,{})}),y(gi,{path:"/note/:id",element:y(XD,{})}),y(gi,{path:"/signin",element:y(pP,{})}),y(gi,{path:"/signup",element:y(_P,{})})]})})})})}wh.createRoot(document.getElementById("root")).render(y(rn.StrictMode,{children:y(JD,{})}));
