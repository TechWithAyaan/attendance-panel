function yT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function vT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var zy={exports:{}},tu={},Wy={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uo=Symbol.for("react.element"),_T=Symbol.for("react.portal"),wT=Symbol.for("react.fragment"),ET=Symbol.for("react.strict_mode"),TT=Symbol.for("react.profiler"),IT=Symbol.for("react.provider"),ST=Symbol.for("react.context"),AT=Symbol.for("react.forward_ref"),RT=Symbol.for("react.suspense"),CT=Symbol.for("react.memo"),PT=Symbol.for("react.lazy"),lm=Symbol.iterator;function kT(t){return t===null||typeof t!="object"?null:(t=lm&&t[lm]||t["@@iterator"],typeof t=="function"?t:null)}var Hy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qy=Object.assign,Ky={};function ss(t,e,n){this.props=t,this.context=e,this.refs=Ky,this.updater=n||Hy}ss.prototype.isReactComponent={};ss.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ss.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Gy(){}Gy.prototype=ss.prototype;function gd(t,e,n){this.props=t,this.context=e,this.refs=Ky,this.updater=n||Hy}var yd=gd.prototype=new Gy;yd.constructor=gd;qy(yd,ss.prototype);yd.isPureReactComponent=!0;var um=Array.isArray,Qy=Object.prototype.hasOwnProperty,vd={current:null},Yy={key:!0,ref:!0,__self:!0,__source:!0};function Xy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Qy.call(e,r)&&!Yy.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Uo,type:t,key:s,ref:o,props:i,_owner:vd.current}}function xT(t,e){return{$$typeof:Uo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _d(t){return typeof t=="object"&&t!==null&&t.$$typeof===Uo}function NT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var cm=/\/+/g;function ac(t,e){return typeof t=="object"&&t!==null&&t.key!=null?NT(""+t.key):e.toString(36)}function Ha(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Uo:case _T:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ac(o,0):r,um(i)?(n="",t!=null&&(n=t.replace(cm,"$&/")+"/"),Ha(i,e,n,"",function(c){return c})):i!=null&&(_d(i)&&(i=xT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(cm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",um(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+ac(s,l);o+=Ha(s,e,n,u,i)}else if(u=kT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+ac(s,l++),o+=Ha(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ta(t,e,n){if(t==null)return t;var r=[],i=0;return Ha(t,r,"","",function(s){return e.call(n,s,i++)}),r}function DT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ft={current:null},qa={transition:null},OT={ReactCurrentDispatcher:ft,ReactCurrentBatchConfig:qa,ReactCurrentOwner:vd};function Jy(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:Ta,forEach:function(t,e,n){Ta(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ta(t,function(){e++}),e},toArray:function(t){return Ta(t,function(e){return e})||[]},only:function(t){if(!_d(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=ss;ne.Fragment=wT;ne.Profiler=TT;ne.PureComponent=gd;ne.StrictMode=ET;ne.Suspense=RT;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OT;ne.act=Jy;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=qy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=vd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Qy.call(e,u)&&!Yy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Uo,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:ST,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:IT,_context:t},t.Consumer=t};ne.createElement=Xy;ne.createFactory=function(t){var e=Xy.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:AT,render:t}};ne.isValidElement=_d;ne.lazy=function(t){return{$$typeof:PT,_payload:{_status:-1,_result:t},_init:DT}};ne.memo=function(t,e){return{$$typeof:CT,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=qa.transition;qa.transition={};try{t()}finally{qa.transition=e}};ne.unstable_act=Jy;ne.useCallback=function(t,e){return ft.current.useCallback(t,e)};ne.useContext=function(t){return ft.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return ft.current.useDeferredValue(t)};ne.useEffect=function(t,e){return ft.current.useEffect(t,e)};ne.useId=function(){return ft.current.useId()};ne.useImperativeHandle=function(t,e,n){return ft.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return ft.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return ft.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return ft.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return ft.current.useReducer(t,e,n)};ne.useRef=function(t){return ft.current.useRef(t)};ne.useState=function(t){return ft.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return ft.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return ft.current.useTransition()};ne.version="18.3.1";Wy.exports=ne;var O=Wy.exports;const Zy=vT(O),VT=yT({__proto__:null,default:Zy},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LT=O,MT=Symbol.for("react.element"),bT=Symbol.for("react.fragment"),jT=Object.prototype.hasOwnProperty,FT=LT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,UT={key:!0,ref:!0,__self:!0,__source:!0};function ev(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)jT.call(e,r)&&!UT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:MT,type:t,key:s,ref:o,props:i,_owner:FT.current}}tu.Fragment=bT;tu.jsx=ev;tu.jsxs=ev;zy.exports=tu;var p=zy.exports,qc={},tv={exports:{}},xt={},nv={exports:{}},rv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,G){var J=B.length;B.push(G);e:for(;0<J;){var W=J-1>>>1,X=B[W];if(0<i(X,G))B[W]=G,B[J]=X,J=W;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var G=B[0],J=B.pop();if(J!==G){B[0]=J;e:for(var W=0,X=B.length,te=X>>>1;W<te;){var _e=2*(W+1)-1,at=B[_e],It=_e+1,St=B[It];if(0>i(at,J))It<X&&0>i(St,at)?(B[W]=St,B[It]=J,W=It):(B[W]=at,B[_e]=J,W=_e);else if(It<X&&0>i(St,J))B[W]=St,B[It]=J,W=It;else break e}}return G}function i(B,G){var J=B.sortIndex-G.sortIndex;return J!==0?J:B.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,m=null,g=3,R=!1,C=!1,k=!1,D=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(B){for(var G=n(c);G!==null;){if(G.callback===null)r(c);else if(G.startTime<=B)r(c),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(c)}}function V(B){if(k=!1,S(B),!C)if(n(u)!==null)C=!0,Dt(j);else{var G=n(c);G!==null&&Ot(V,G.startTime-B)}}function j(B,G){C=!1,k&&(k=!1,I(v),v=-1),R=!0;var J=g;try{for(S(G),m=n(u);m!==null&&(!(m.expirationTime>G)||B&&!P());){var W=m.callback;if(typeof W=="function"){m.callback=null,g=m.priorityLevel;var X=W(m.expirationTime<=G);G=t.unstable_now(),typeof X=="function"?m.callback=X:m===n(u)&&r(u),S(G)}else r(u);m=n(u)}if(m!==null)var te=!0;else{var _e=n(c);_e!==null&&Ot(V,_e.startTime-G),te=!1}return te}finally{m=null,g=J,R=!1}}var M=!1,T=null,v=-1,_=5,E=-1;function P(){return!(t.unstable_now()-E<_)}function x(){if(T!==null){var B=t.unstable_now();E=B;var G=!0;try{G=T(!0,B)}finally{G?A():(M=!1,T=null)}}else M=!1}var A;if(typeof w=="function")A=function(){w(x)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,je=be.port2;be.port1.onmessage=x,A=function(){je.postMessage(null)}}else A=function(){D(x,0)};function Dt(B){T=B,M||(M=!0,A())}function Ot(B,G){v=D(function(){B(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){C||R||(C=!0,Dt(j))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var J=g;g=G;try{return B()}finally{g=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,G){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var J=g;g=B;try{return G()}finally{g=J}},t.unstable_scheduleCallback=function(B,G,J){var W=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?W+J:W):J=W,B){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=J+X,B={id:f++,callback:G,priorityLevel:B,startTime:J,expirationTime:X,sortIndex:-1},J>W?(B.sortIndex=J,e(c,B),n(u)===null&&B===n(c)&&(k?(I(v),v=-1):k=!0,Ot(V,J-W))):(B.sortIndex=X,e(u,B),C||R||(C=!0,Dt(j))),B},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(B){var G=g;return function(){var J=g;g=G;try{return B.apply(this,arguments)}finally{g=J}}}})(rv);nv.exports=rv;var $T=nv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BT=O,kt=$T;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var iv=new Set,co={};function oi(t,e){Wi(t,e),Wi(t+"Capture",e)}function Wi(t,e){for(co[t]=e,t=0;t<e.length;t++)iv.add(e[t])}var Cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kc=Object.prototype.hasOwnProperty,zT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hm={},dm={};function WT(t){return Kc.call(dm,t)?!0:Kc.call(hm,t)?!1:zT.test(t)?dm[t]=!0:(hm[t]=!0,!1)}function HT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function qT(t,e,n,r){if(e===null||typeof e>"u"||HT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ge[t]=new pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ge[e]=new pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ge[t]=new pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ge[t]=new pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ge[t]=new pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ge[t]=new pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ge[t]=new pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ge[t]=new pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ge[t]=new pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var wd=/[\-:]([a-z])/g;function Ed(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(wd,Ed);Ge[e]=new pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(wd,Ed);Ge[e]=new pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(wd,Ed);Ge[e]=new pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ge[t]=new pt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ge.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ge[t]=new pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Td(t,e,n,r){var i=Ge.hasOwnProperty(e)?Ge[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(qT(e,n,i,r)&&(n=null),r||i===null?WT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Mn=BT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ia=Symbol.for("react.element"),Ei=Symbol.for("react.portal"),Ti=Symbol.for("react.fragment"),Id=Symbol.for("react.strict_mode"),Gc=Symbol.for("react.profiler"),sv=Symbol.for("react.provider"),ov=Symbol.for("react.context"),Sd=Symbol.for("react.forward_ref"),Qc=Symbol.for("react.suspense"),Yc=Symbol.for("react.suspense_list"),Ad=Symbol.for("react.memo"),Gn=Symbol.for("react.lazy"),av=Symbol.for("react.offscreen"),fm=Symbol.iterator;function Ns(t){return t===null||typeof t!="object"?null:(t=fm&&t[fm]||t["@@iterator"],typeof t=="function"?t:null)}var Te=Object.assign,lc;function Us(t){if(lc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);lc=e&&e[1]||""}return`
`+lc+t}var uc=!1;function cc(t,e){if(!t||uc)return"";uc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{uc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Us(t):""}function KT(t){switch(t.tag){case 5:return Us(t.type);case 16:return Us("Lazy");case 13:return Us("Suspense");case 19:return Us("SuspenseList");case 0:case 2:case 15:return t=cc(t.type,!1),t;case 11:return t=cc(t.type.render,!1),t;case 1:return t=cc(t.type,!0),t;default:return""}}function Xc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ti:return"Fragment";case Ei:return"Portal";case Gc:return"Profiler";case Id:return"StrictMode";case Qc:return"Suspense";case Yc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ov:return(t.displayName||"Context")+".Consumer";case sv:return(t._context.displayName||"Context")+".Provider";case Sd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ad:return e=t.displayName||null,e!==null?e:Xc(t.type)||"Memo";case Gn:e=t._payload,t=t._init;try{return Xc(t(e))}catch{}}return null}function GT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xc(e);case 8:return e===Id?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function QT(t){var e=lv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Sa(t){t._valueTracker||(t._valueTracker=QT(t))}function uv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=lv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function fl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Jc(t,e){var n=e.checked;return Te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function pm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=wr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function cv(t,e){e=e.checked,e!=null&&Td(t,"checked",e,!1)}function Zc(t,e){cv(t,e);var n=wr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?eh(t,e.type,n):e.hasOwnProperty("defaultValue")&&eh(t,e.type,wr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function mm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function eh(t,e,n){(e!=="number"||fl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var $s=Array.isArray;function Vi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+wr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function th(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function gm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if($s(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:wr(n)}}function hv(t,e){var n=wr(e.value),r=wr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ym(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function dv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?dv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Aa,fv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Aa=Aa||document.createElement("div"),Aa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Aa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ho(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ys={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},YT=["Webkit","ms","Moz","O"];Object.keys(Ys).forEach(function(t){YT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ys[e]=Ys[t]})});function pv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ys.hasOwnProperty(t)&&Ys[t]?(""+e).trim():e+"px"}function mv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=pv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var XT=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rh(t,e){if(e){if(XT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function ih(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sh=null;function Rd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var oh=null,Li=null,Mi=null;function vm(t){if(t=zo(t)){if(typeof oh!="function")throw Error(U(280));var e=t.stateNode;e&&(e=ou(e),oh(t.stateNode,t.type,e))}}function gv(t){Li?Mi?Mi.push(t):Mi=[t]:Li=t}function yv(){if(Li){var t=Li,e=Mi;if(Mi=Li=null,vm(t),e)for(t=0;t<e.length;t++)vm(e[t])}}function vv(t,e){return t(e)}function _v(){}var hc=!1;function wv(t,e,n){if(hc)return t(e,n);hc=!0;try{return vv(t,e,n)}finally{hc=!1,(Li!==null||Mi!==null)&&(_v(),yv())}}function fo(t,e){var n=t.stateNode;if(n===null)return null;var r=ou(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var ah=!1;if(Cn)try{var Ds={};Object.defineProperty(Ds,"passive",{get:function(){ah=!0}}),window.addEventListener("test",Ds,Ds),window.removeEventListener("test",Ds,Ds)}catch{ah=!1}function JT(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Xs=!1,pl=null,ml=!1,lh=null,ZT={onError:function(t){Xs=!0,pl=t}};function eI(t,e,n,r,i,s,o,l,u){Xs=!1,pl=null,JT.apply(ZT,arguments)}function tI(t,e,n,r,i,s,o,l,u){if(eI.apply(this,arguments),Xs){if(Xs){var c=pl;Xs=!1,pl=null}else throw Error(U(198));ml||(ml=!0,lh=c)}}function ai(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ev(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _m(t){if(ai(t)!==t)throw Error(U(188))}function nI(t){var e=t.alternate;if(!e){if(e=ai(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return _m(i),t;if(s===r)return _m(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function Tv(t){return t=nI(t),t!==null?Iv(t):null}function Iv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Iv(t);if(e!==null)return e;t=t.sibling}return null}var Sv=kt.unstable_scheduleCallback,wm=kt.unstable_cancelCallback,rI=kt.unstable_shouldYield,iI=kt.unstable_requestPaint,Ce=kt.unstable_now,sI=kt.unstable_getCurrentPriorityLevel,Cd=kt.unstable_ImmediatePriority,Av=kt.unstable_UserBlockingPriority,gl=kt.unstable_NormalPriority,oI=kt.unstable_LowPriority,Rv=kt.unstable_IdlePriority,nu=null,an=null;function aI(t){if(an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(nu,t,void 0,(t.current.flags&128)===128)}catch{}}var Qt=Math.clz32?Math.clz32:cI,lI=Math.log,uI=Math.LN2;function cI(t){return t>>>=0,t===0?32:31-(lI(t)/uI|0)|0}var Ra=64,Ca=4194304;function Bs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function yl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Bs(l):(s&=o,s!==0&&(r=Bs(s)))}else o=n&~i,o!==0?r=Bs(o):s!==0&&(r=Bs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Qt(e),i=1<<n,r|=t[n],e&=~i;return r}function hI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Qt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=hI(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function uh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Cv(){var t=Ra;return Ra<<=1,!(Ra&4194240)&&(Ra=64),t}function dc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function $o(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qt(e),t[e]=n}function fI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Qt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Pd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Qt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ue=0;function Pv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var kv,kd,xv,Nv,Dv,ch=!1,Pa=[],ar=null,lr=null,ur=null,po=new Map,mo=new Map,Yn=[],pI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Em(t,e){switch(t){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":po.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(e.pointerId)}}function Os(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=zo(e),e!==null&&kd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function mI(t,e,n,r,i){switch(e){case"focusin":return ar=Os(ar,t,e,n,r,i),!0;case"dragenter":return lr=Os(lr,t,e,n,r,i),!0;case"mouseover":return ur=Os(ur,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return po.set(s,Os(po.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,mo.set(s,Os(mo.get(s)||null,t,e,n,r,i)),!0}return!1}function Ov(t){var e=$r(t.target);if(e!==null){var n=ai(e);if(n!==null){if(e=n.tag,e===13){if(e=Ev(n),e!==null){t.blockedOn=e,Dv(t.priority,function(){xv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ka(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=hh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);sh=r,n.target.dispatchEvent(r),sh=null}else return e=zo(n),e!==null&&kd(e),t.blockedOn=n,!1;e.shift()}return!0}function Tm(t,e,n){Ka(t)&&n.delete(e)}function gI(){ch=!1,ar!==null&&Ka(ar)&&(ar=null),lr!==null&&Ka(lr)&&(lr=null),ur!==null&&Ka(ur)&&(ur=null),po.forEach(Tm),mo.forEach(Tm)}function Vs(t,e){t.blockedOn===e&&(t.blockedOn=null,ch||(ch=!0,kt.unstable_scheduleCallback(kt.unstable_NormalPriority,gI)))}function go(t){function e(i){return Vs(i,t)}if(0<Pa.length){Vs(Pa[0],t);for(var n=1;n<Pa.length;n++){var r=Pa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ar!==null&&Vs(ar,t),lr!==null&&Vs(lr,t),ur!==null&&Vs(ur,t),po.forEach(e),mo.forEach(e),n=0;n<Yn.length;n++)r=Yn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Yn.length&&(n=Yn[0],n.blockedOn===null);)Ov(n),n.blockedOn===null&&Yn.shift()}var bi=Mn.ReactCurrentBatchConfig,vl=!0;function yI(t,e,n,r){var i=ue,s=bi.transition;bi.transition=null;try{ue=1,xd(t,e,n,r)}finally{ue=i,bi.transition=s}}function vI(t,e,n,r){var i=ue,s=bi.transition;bi.transition=null;try{ue=4,xd(t,e,n,r)}finally{ue=i,bi.transition=s}}function xd(t,e,n,r){if(vl){var i=hh(t,e,n,r);if(i===null)Tc(t,e,r,_l,n),Em(t,r);else if(mI(i,t,e,n,r))r.stopPropagation();else if(Em(t,r),e&4&&-1<pI.indexOf(t)){for(;i!==null;){var s=zo(i);if(s!==null&&kv(s),s=hh(t,e,n,r),s===null&&Tc(t,e,r,_l,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Tc(t,e,r,null,n)}}var _l=null;function hh(t,e,n,r){if(_l=null,t=Rd(r),t=$r(t),t!==null)if(e=ai(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ev(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _l=t,null}function Vv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sI()){case Cd:return 1;case Av:return 4;case gl:case oI:return 16;case Rv:return 536870912;default:return 16}default:return 16}}var rr=null,Nd=null,Ga=null;function Lv(){if(Ga)return Ga;var t,e=Nd,n=e.length,r,i="value"in rr?rr.value:rr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ga=i.slice(t,1<r?1-r:void 0)}function Qa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ka(){return!0}function Im(){return!1}function Nt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ka:Im,this.isPropagationStopped=Im,this}return Te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ka)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ka)},persist:function(){},isPersistent:ka}),e}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dd=Nt(os),Bo=Te({},os,{view:0,detail:0}),_I=Nt(Bo),fc,pc,Ls,ru=Te({},Bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Od,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ls&&(Ls&&t.type==="mousemove"?(fc=t.screenX-Ls.screenX,pc=t.screenY-Ls.screenY):pc=fc=0,Ls=t),fc)},movementY:function(t){return"movementY"in t?t.movementY:pc}}),Sm=Nt(ru),wI=Te({},ru,{dataTransfer:0}),EI=Nt(wI),TI=Te({},Bo,{relatedTarget:0}),mc=Nt(TI),II=Te({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),SI=Nt(II),AI=Te({},os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),RI=Nt(AI),CI=Te({},os,{data:0}),Am=Nt(CI),PI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function NI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=xI[t])?!!e[t]:!1}function Od(){return NI}var DI=Te({},Bo,{key:function(t){if(t.key){var e=PI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Qa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?kI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Od,charCode:function(t){return t.type==="keypress"?Qa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),OI=Nt(DI),VI=Te({},ru,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rm=Nt(VI),LI=Te({},Bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Od}),MI=Nt(LI),bI=Te({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),jI=Nt(bI),FI=Te({},ru,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),UI=Nt(FI),$I=[9,13,27,32],Vd=Cn&&"CompositionEvent"in window,Js=null;Cn&&"documentMode"in document&&(Js=document.documentMode);var BI=Cn&&"TextEvent"in window&&!Js,Mv=Cn&&(!Vd||Js&&8<Js&&11>=Js),Cm=" ",Pm=!1;function bv(t,e){switch(t){case"keyup":return $I.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ii=!1;function zI(t,e){switch(t){case"compositionend":return jv(e);case"keypress":return e.which!==32?null:(Pm=!0,Cm);case"textInput":return t=e.data,t===Cm&&Pm?null:t;default:return null}}function WI(t,e){if(Ii)return t==="compositionend"||!Vd&&bv(t,e)?(t=Lv(),Ga=Nd=rr=null,Ii=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Mv&&e.locale!=="ko"?null:e.data;default:return null}}var HI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function km(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!HI[t.type]:e==="textarea"}function Fv(t,e,n,r){gv(r),e=wl(e,"onChange"),0<e.length&&(n=new Dd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Zs=null,yo=null;function qI(t){Yv(t,0)}function iu(t){var e=Ri(t);if(uv(e))return t}function KI(t,e){if(t==="change")return e}var Uv=!1;if(Cn){var gc;if(Cn){var yc="oninput"in document;if(!yc){var xm=document.createElement("div");xm.setAttribute("oninput","return;"),yc=typeof xm.oninput=="function"}gc=yc}else gc=!1;Uv=gc&&(!document.documentMode||9<document.documentMode)}function Nm(){Zs&&(Zs.detachEvent("onpropertychange",$v),yo=Zs=null)}function $v(t){if(t.propertyName==="value"&&iu(yo)){var e=[];Fv(e,yo,t,Rd(t)),wv(qI,e)}}function GI(t,e,n){t==="focusin"?(Nm(),Zs=e,yo=n,Zs.attachEvent("onpropertychange",$v)):t==="focusout"&&Nm()}function QI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return iu(yo)}function YI(t,e){if(t==="click")return iu(e)}function XI(t,e){if(t==="input"||t==="change")return iu(e)}function JI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Xt=typeof Object.is=="function"?Object.is:JI;function vo(t,e){if(Xt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Kc.call(e,i)||!Xt(t[i],e[i]))return!1}return!0}function Dm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Om(t,e){var n=Dm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dm(n)}}function Bv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Bv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function zv(){for(var t=window,e=fl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fl(t.document)}return e}function Ld(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ZI(t){var e=zv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Bv(n.ownerDocument.documentElement,n)){if(r!==null&&Ld(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Om(n,s);var o=Om(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var eS=Cn&&"documentMode"in document&&11>=document.documentMode,Si=null,dh=null,eo=null,fh=!1;function Vm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fh||Si==null||Si!==fl(r)||(r=Si,"selectionStart"in r&&Ld(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),eo&&vo(eo,r)||(eo=r,r=wl(dh,"onSelect"),0<r.length&&(e=new Dd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Si)))}function xa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ai={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionend:xa("Transition","TransitionEnd")},vc={},Wv={};Cn&&(Wv=document.createElement("div").style,"AnimationEvent"in window||(delete Ai.animationend.animation,delete Ai.animationiteration.animation,delete Ai.animationstart.animation),"TransitionEvent"in window||delete Ai.transitionend.transition);function su(t){if(vc[t])return vc[t];if(!Ai[t])return t;var e=Ai[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Wv)return vc[t]=e[n];return t}var Hv=su("animationend"),qv=su("animationiteration"),Kv=su("animationstart"),Gv=su("transitionend"),Qv=new Map,Lm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(t,e){Qv.set(t,e),oi(e,[t])}for(var _c=0;_c<Lm.length;_c++){var wc=Lm[_c],tS=wc.toLowerCase(),nS=wc[0].toUpperCase()+wc.slice(1);Rr(tS,"on"+nS)}Rr(Hv,"onAnimationEnd");Rr(qv,"onAnimationIteration");Rr(Kv,"onAnimationStart");Rr("dblclick","onDoubleClick");Rr("focusin","onFocus");Rr("focusout","onBlur");Rr(Gv,"onTransitionEnd");Wi("onMouseEnter",["mouseout","mouseover"]);Wi("onMouseLeave",["mouseout","mouseover"]);Wi("onPointerEnter",["pointerout","pointerover"]);Wi("onPointerLeave",["pointerout","pointerover"]);oi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));oi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));oi("onBeforeInput",["compositionend","keypress","textInput","paste"]);oi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));oi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));oi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rS=new Set("cancel close invalid load scroll toggle".split(" ").concat(zs));function Mm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,tI(r,e,void 0,t),t.currentTarget=null}function Yv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Mm(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Mm(i,l,c),s=u}}}if(ml)throw t=lh,ml=!1,lh=null,t}function pe(t,e){var n=e[vh];n===void 0&&(n=e[vh]=new Set);var r=t+"__bubble";n.has(r)||(Xv(e,t,2,!1),n.add(r))}function Ec(t,e,n){var r=0;e&&(r|=4),Xv(n,t,r,e)}var Na="_reactListening"+Math.random().toString(36).slice(2);function _o(t){if(!t[Na]){t[Na]=!0,iv.forEach(function(n){n!=="selectionchange"&&(rS.has(n)||Ec(n,!1,t),Ec(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Na]||(e[Na]=!0,Ec("selectionchange",!1,e))}}function Xv(t,e,n,r){switch(Vv(e)){case 1:var i=yI;break;case 4:i=vI;break;default:i=xd}n=i.bind(null,e,n,t),i=void 0,!ah||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Tc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=$r(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}wv(function(){var c=s,f=Rd(n),m=[];e:{var g=Qv.get(t);if(g!==void 0){var R=Dd,C=t;switch(t){case"keypress":if(Qa(n)===0)break e;case"keydown":case"keyup":R=OI;break;case"focusin":C="focus",R=mc;break;case"focusout":C="blur",R=mc;break;case"beforeblur":case"afterblur":R=mc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Sm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=EI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=MI;break;case Hv:case qv:case Kv:R=SI;break;case Gv:R=jI;break;case"scroll":R=_I;break;case"wheel":R=UI;break;case"copy":case"cut":case"paste":R=RI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Rm}var k=(e&4)!==0,D=!k&&t==="scroll",I=k?g!==null?g+"Capture":null:g;k=[];for(var w=c,S;w!==null;){S=w;var V=S.stateNode;if(S.tag===5&&V!==null&&(S=V,I!==null&&(V=fo(w,I),V!=null&&k.push(wo(w,V,S)))),D)break;w=w.return}0<k.length&&(g=new R(g,C,null,n,f),m.push({event:g,listeners:k}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",R=t==="mouseout"||t==="pointerout",g&&n!==sh&&(C=n.relatedTarget||n.fromElement)&&($r(C)||C[Pn]))break e;if((R||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,R?(C=n.relatedTarget||n.toElement,R=c,C=C?$r(C):null,C!==null&&(D=ai(C),C!==D||C.tag!==5&&C.tag!==6)&&(C=null)):(R=null,C=c),R!==C)){if(k=Sm,V="onMouseLeave",I="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(k=Rm,V="onPointerLeave",I="onPointerEnter",w="pointer"),D=R==null?g:Ri(R),S=C==null?g:Ri(C),g=new k(V,w+"leave",R,n,f),g.target=D,g.relatedTarget=S,V=null,$r(f)===c&&(k=new k(I,w+"enter",C,n,f),k.target=S,k.relatedTarget=D,V=k),D=V,R&&C)t:{for(k=R,I=C,w=0,S=k;S;S=yi(S))w++;for(S=0,V=I;V;V=yi(V))S++;for(;0<w-S;)k=yi(k),w--;for(;0<S-w;)I=yi(I),S--;for(;w--;){if(k===I||I!==null&&k===I.alternate)break t;k=yi(k),I=yi(I)}k=null}else k=null;R!==null&&bm(m,g,R,k,!1),C!==null&&D!==null&&bm(m,D,C,k,!0)}}e:{if(g=c?Ri(c):window,R=g.nodeName&&g.nodeName.toLowerCase(),R==="select"||R==="input"&&g.type==="file")var j=KI;else if(km(g))if(Uv)j=XI;else{j=QI;var M=GI}else(R=g.nodeName)&&R.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=YI);if(j&&(j=j(t,c))){Fv(m,j,n,f);break e}M&&M(t,g,c),t==="focusout"&&(M=g._wrapperState)&&M.controlled&&g.type==="number"&&eh(g,"number",g.value)}switch(M=c?Ri(c):window,t){case"focusin":(km(M)||M.contentEditable==="true")&&(Si=M,dh=c,eo=null);break;case"focusout":eo=dh=Si=null;break;case"mousedown":fh=!0;break;case"contextmenu":case"mouseup":case"dragend":fh=!1,Vm(m,n,f);break;case"selectionchange":if(eS)break;case"keydown":case"keyup":Vm(m,n,f)}var T;if(Vd)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Ii?bv(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(Mv&&n.locale!=="ko"&&(Ii||v!=="onCompositionStart"?v==="onCompositionEnd"&&Ii&&(T=Lv()):(rr=f,Nd="value"in rr?rr.value:rr.textContent,Ii=!0)),M=wl(c,v),0<M.length&&(v=new Am(v,t,null,n,f),m.push({event:v,listeners:M}),T?v.data=T:(T=jv(n),T!==null&&(v.data=T)))),(T=BI?zI(t,n):WI(t,n))&&(c=wl(c,"onBeforeInput"),0<c.length&&(f=new Am("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:c}),f.data=T))}Yv(m,e)})}function wo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function wl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=fo(t,n),s!=null&&r.unshift(wo(t,s,i)),s=fo(t,e),s!=null&&r.push(wo(t,s,i))),t=t.return}return r}function yi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function bm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=fo(n,s),u!=null&&o.unshift(wo(n,u,l))):i||(u=fo(n,s),u!=null&&o.push(wo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var iS=/\r\n?/g,sS=/\u0000|\uFFFD/g;function jm(t){return(typeof t=="string"?t:""+t).replace(iS,`
`).replace(sS,"")}function Da(t,e,n){if(e=jm(e),jm(t)!==e&&n)throw Error(U(425))}function El(){}var ph=null,mh=null;function gh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yh=typeof setTimeout=="function"?setTimeout:void 0,oS=typeof clearTimeout=="function"?clearTimeout:void 0,Fm=typeof Promise=="function"?Promise:void 0,aS=typeof queueMicrotask=="function"?queueMicrotask:typeof Fm<"u"?function(t){return Fm.resolve(null).then(t).catch(lS)}:yh;function lS(t){setTimeout(function(){throw t})}function Ic(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),go(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);go(e)}function cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Um(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var as=Math.random().toString(36).slice(2),nn="__reactFiber$"+as,Eo="__reactProps$"+as,Pn="__reactContainer$"+as,vh="__reactEvents$"+as,uS="__reactListeners$"+as,cS="__reactHandles$"+as;function $r(t){var e=t[nn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pn]||n[nn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Um(t);t!==null;){if(n=t[nn])return n;t=Um(t)}return e}t=n,n=t.parentNode}return null}function zo(t){return t=t[nn]||t[Pn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ri(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function ou(t){return t[Eo]||null}var _h=[],Ci=-1;function Cr(t){return{current:t}}function ye(t){0>Ci||(t.current=_h[Ci],_h[Ci]=null,Ci--)}function de(t,e){Ci++,_h[Ci]=t.current,t.current=e}var Er={},st=Cr(Er),_t=Cr(!1),Gr=Er;function Hi(t,e){var n=t.type.contextTypes;if(!n)return Er;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function wt(t){return t=t.childContextTypes,t!=null}function Tl(){ye(_t),ye(st)}function $m(t,e,n){if(st.current!==Er)throw Error(U(168));de(st,e),de(_t,n)}function Jv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,GT(t)||"Unknown",i));return Te({},n,r)}function Il(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Er,Gr=st.current,de(st,t),de(_t,_t.current),!0}function Bm(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=Jv(t,e,Gr),r.__reactInternalMemoizedMergedChildContext=t,ye(_t),ye(st),de(st,t)):ye(_t),de(_t,n)}var vn=null,au=!1,Sc=!1;function Zv(t){vn===null?vn=[t]:vn.push(t)}function hS(t){au=!0,Zv(t)}function Pr(){if(!Sc&&vn!==null){Sc=!0;var t=0,e=ue;try{var n=vn;for(ue=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}vn=null,au=!1}catch(i){throw vn!==null&&(vn=vn.slice(t+1)),Sv(Cd,Pr),i}finally{ue=e,Sc=!1}}return null}var Pi=[],ki=0,Sl=null,Al=0,Lt=[],Mt=0,Qr=null,_n=1,wn="";function jr(t,e){Pi[ki++]=Al,Pi[ki++]=Sl,Sl=t,Al=e}function e_(t,e,n){Lt[Mt++]=_n,Lt[Mt++]=wn,Lt[Mt++]=Qr,Qr=t;var r=_n;t=wn;var i=32-Qt(r)-1;r&=~(1<<i),n+=1;var s=32-Qt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,_n=1<<32-Qt(e)+i|n<<i|r,wn=s+t}else _n=1<<s|n<<i|r,wn=t}function Md(t){t.return!==null&&(jr(t,1),e_(t,1,0))}function bd(t){for(;t===Sl;)Sl=Pi[--ki],Pi[ki]=null,Al=Pi[--ki],Pi[ki]=null;for(;t===Qr;)Qr=Lt[--Mt],Lt[Mt]=null,wn=Lt[--Mt],Lt[Mt]=null,_n=Lt[--Mt],Lt[Mt]=null}var Pt=null,Ct=null,ve=!1,qt=null;function t_(t,e){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function zm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pt=t,Ct=cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pt=t,Ct=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qr!==null?{id:_n,overflow:wn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pt=t,Ct=null,!0):!1;default:return!1}}function wh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Eh(t){if(ve){var e=Ct;if(e){var n=e;if(!zm(t,e)){if(wh(t))throw Error(U(418));e=cr(n.nextSibling);var r=Pt;e&&zm(t,e)?t_(r,n):(t.flags=t.flags&-4097|2,ve=!1,Pt=t)}}else{if(wh(t))throw Error(U(418));t.flags=t.flags&-4097|2,ve=!1,Pt=t}}}function Wm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pt=t}function Oa(t){if(t!==Pt)return!1;if(!ve)return Wm(t),ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!gh(t.type,t.memoizedProps)),e&&(e=Ct)){if(wh(t))throw n_(),Error(U(418));for(;e;)t_(t,e),e=cr(e.nextSibling)}if(Wm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ct=cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ct=null}}else Ct=Pt?cr(t.stateNode.nextSibling):null;return!0}function n_(){for(var t=Ct;t;)t=cr(t.nextSibling)}function qi(){Ct=Pt=null,ve=!1}function jd(t){qt===null?qt=[t]:qt.push(t)}var dS=Mn.ReactCurrentBatchConfig;function Ms(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function Va(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Hm(t){var e=t._init;return e(t._payload)}function r_(t){function e(I,w){if(t){var S=I.deletions;S===null?(I.deletions=[w],I.flags|=16):S.push(w)}}function n(I,w){if(!t)return null;for(;w!==null;)e(I,w),w=w.sibling;return null}function r(I,w){for(I=new Map;w!==null;)w.key!==null?I.set(w.key,w):I.set(w.index,w),w=w.sibling;return I}function i(I,w){return I=pr(I,w),I.index=0,I.sibling=null,I}function s(I,w,S){return I.index=S,t?(S=I.alternate,S!==null?(S=S.index,S<w?(I.flags|=2,w):S):(I.flags|=2,w)):(I.flags|=1048576,w)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,w,S,V){return w===null||w.tag!==6?(w=Nc(S,I.mode,V),w.return=I,w):(w=i(w,S),w.return=I,w)}function u(I,w,S,V){var j=S.type;return j===Ti?f(I,w,S.props.children,V,S.key):w!==null&&(w.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Gn&&Hm(j)===w.type)?(V=i(w,S.props),V.ref=Ms(I,w,S),V.return=I,V):(V=nl(S.type,S.key,S.props,null,I.mode,V),V.ref=Ms(I,w,S),V.return=I,V)}function c(I,w,S,V){return w===null||w.tag!==4||w.stateNode.containerInfo!==S.containerInfo||w.stateNode.implementation!==S.implementation?(w=Dc(S,I.mode,V),w.return=I,w):(w=i(w,S.children||[]),w.return=I,w)}function f(I,w,S,V,j){return w===null||w.tag!==7?(w=qr(S,I.mode,V,j),w.return=I,w):(w=i(w,S),w.return=I,w)}function m(I,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Nc(""+w,I.mode,S),w.return=I,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ia:return S=nl(w.type,w.key,w.props,null,I.mode,S),S.ref=Ms(I,null,w),S.return=I,S;case Ei:return w=Dc(w,I.mode,S),w.return=I,w;case Gn:var V=w._init;return m(I,V(w._payload),S)}if($s(w)||Ns(w))return w=qr(w,I.mode,S,null),w.return=I,w;Va(I,w)}return null}function g(I,w,S,V){var j=w!==null?w.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return j!==null?null:l(I,w,""+S,V);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ia:return S.key===j?u(I,w,S,V):null;case Ei:return S.key===j?c(I,w,S,V):null;case Gn:return j=S._init,g(I,w,j(S._payload),V)}if($s(S)||Ns(S))return j!==null?null:f(I,w,S,V,null);Va(I,S)}return null}function R(I,w,S,V,j){if(typeof V=="string"&&V!==""||typeof V=="number")return I=I.get(S)||null,l(w,I,""+V,j);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Ia:return I=I.get(V.key===null?S:V.key)||null,u(w,I,V,j);case Ei:return I=I.get(V.key===null?S:V.key)||null,c(w,I,V,j);case Gn:var M=V._init;return R(I,w,S,M(V._payload),j)}if($s(V)||Ns(V))return I=I.get(S)||null,f(w,I,V,j,null);Va(w,V)}return null}function C(I,w,S,V){for(var j=null,M=null,T=w,v=w=0,_=null;T!==null&&v<S.length;v++){T.index>v?(_=T,T=null):_=T.sibling;var E=g(I,T,S[v],V);if(E===null){T===null&&(T=_);break}t&&T&&E.alternate===null&&e(I,T),w=s(E,w,v),M===null?j=E:M.sibling=E,M=E,T=_}if(v===S.length)return n(I,T),ve&&jr(I,v),j;if(T===null){for(;v<S.length;v++)T=m(I,S[v],V),T!==null&&(w=s(T,w,v),M===null?j=T:M.sibling=T,M=T);return ve&&jr(I,v),j}for(T=r(I,T);v<S.length;v++)_=R(T,I,v,S[v],V),_!==null&&(t&&_.alternate!==null&&T.delete(_.key===null?v:_.key),w=s(_,w,v),M===null?j=_:M.sibling=_,M=_);return t&&T.forEach(function(P){return e(I,P)}),ve&&jr(I,v),j}function k(I,w,S,V){var j=Ns(S);if(typeof j!="function")throw Error(U(150));if(S=j.call(S),S==null)throw Error(U(151));for(var M=j=null,T=w,v=w=0,_=null,E=S.next();T!==null&&!E.done;v++,E=S.next()){T.index>v?(_=T,T=null):_=T.sibling;var P=g(I,T,E.value,V);if(P===null){T===null&&(T=_);break}t&&T&&P.alternate===null&&e(I,T),w=s(P,w,v),M===null?j=P:M.sibling=P,M=P,T=_}if(E.done)return n(I,T),ve&&jr(I,v),j;if(T===null){for(;!E.done;v++,E=S.next())E=m(I,E.value,V),E!==null&&(w=s(E,w,v),M===null?j=E:M.sibling=E,M=E);return ve&&jr(I,v),j}for(T=r(I,T);!E.done;v++,E=S.next())E=R(T,I,v,E.value,V),E!==null&&(t&&E.alternate!==null&&T.delete(E.key===null?v:E.key),w=s(E,w,v),M===null?j=E:M.sibling=E,M=E);return t&&T.forEach(function(x){return e(I,x)}),ve&&jr(I,v),j}function D(I,w,S,V){if(typeof S=="object"&&S!==null&&S.type===Ti&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Ia:e:{for(var j=S.key,M=w;M!==null;){if(M.key===j){if(j=S.type,j===Ti){if(M.tag===7){n(I,M.sibling),w=i(M,S.props.children),w.return=I,I=w;break e}}else if(M.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Gn&&Hm(j)===M.type){n(I,M.sibling),w=i(M,S.props),w.ref=Ms(I,M,S),w.return=I,I=w;break e}n(I,M);break}else e(I,M);M=M.sibling}S.type===Ti?(w=qr(S.props.children,I.mode,V,S.key),w.return=I,I=w):(V=nl(S.type,S.key,S.props,null,I.mode,V),V.ref=Ms(I,w,S),V.return=I,I=V)}return o(I);case Ei:e:{for(M=S.key;w!==null;){if(w.key===M)if(w.tag===4&&w.stateNode.containerInfo===S.containerInfo&&w.stateNode.implementation===S.implementation){n(I,w.sibling),w=i(w,S.children||[]),w.return=I,I=w;break e}else{n(I,w);break}else e(I,w);w=w.sibling}w=Dc(S,I.mode,V),w.return=I,I=w}return o(I);case Gn:return M=S._init,D(I,w,M(S._payload),V)}if($s(S))return C(I,w,S,V);if(Ns(S))return k(I,w,S,V);Va(I,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,w!==null&&w.tag===6?(n(I,w.sibling),w=i(w,S),w.return=I,I=w):(n(I,w),w=Nc(S,I.mode,V),w.return=I,I=w),o(I)):n(I,w)}return D}var Ki=r_(!0),i_=r_(!1),Rl=Cr(null),Cl=null,xi=null,Fd=null;function Ud(){Fd=xi=Cl=null}function $d(t){var e=Rl.current;ye(Rl),t._currentValue=e}function Th(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ji(t,e){Cl=t,Fd=xi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vt=!0),t.firstContext=null)}function Ut(t){var e=t._currentValue;if(Fd!==t)if(t={context:t,memoizedValue:e,next:null},xi===null){if(Cl===null)throw Error(U(308));xi=t,Cl.dependencies={lanes:0,firstContext:t}}else xi=xi.next=t;return e}var Br=null;function Bd(t){Br===null?Br=[t]:Br.push(t)}function s_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Bd(e)):(n.next=i.next,i.next=n),e.interleaved=n,kn(t,r)}function kn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Qn=!1;function zd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function o_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Sn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function hr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,kn(t,n)}return i=r.interleaved,i===null?(e.next=e,Bd(r)):(e.next=i.next,i.next=e),r.interleaved=e,kn(t,n)}function Ya(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pd(t,n)}}function qm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Pl(t,e,n,r){var i=t.updateQueue;Qn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,f=c=u=null,l=s;do{var g=l.lane,R=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:R,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,k=l;switch(g=e,R=n,k.tag){case 1:if(C=k.payload,typeof C=="function"){m=C.call(R,m,g);break e}m=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=k.payload,g=typeof C=="function"?C.call(R,m,g):C,g==null)break e;m=Te({},m,g);break e;case 2:Qn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else R={eventTime:R,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=R,u=m):f=f.next=R,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Xr|=o,t.lanes=o,t.memoizedState=m}}function Km(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var Wo={},ln=Cr(Wo),To=Cr(Wo),Io=Cr(Wo);function zr(t){if(t===Wo)throw Error(U(174));return t}function Wd(t,e){switch(de(Io,e),de(To,t),de(ln,Wo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:nh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=nh(e,t)}ye(ln),de(ln,e)}function Gi(){ye(ln),ye(To),ye(Io)}function a_(t){zr(Io.current);var e=zr(ln.current),n=nh(e,t.type);e!==n&&(de(To,t),de(ln,n))}function Hd(t){To.current===t&&(ye(ln),ye(To))}var we=Cr(0);function kl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ac=[];function qd(){for(var t=0;t<Ac.length;t++)Ac[t]._workInProgressVersionPrimary=null;Ac.length=0}var Xa=Mn.ReactCurrentDispatcher,Rc=Mn.ReactCurrentBatchConfig,Yr=0,Ee=null,De=null,Ue=null,xl=!1,to=!1,So=0,fS=0;function Ze(){throw Error(U(321))}function Kd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Xt(t[n],e[n]))return!1;return!0}function Gd(t,e,n,r,i,s){if(Yr=s,Ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Xa.current=t===null||t.memoizedState===null?yS:vS,t=n(r,i),to){s=0;do{if(to=!1,So=0,25<=s)throw Error(U(301));s+=1,Ue=De=null,e.updateQueue=null,Xa.current=_S,t=n(r,i)}while(to)}if(Xa.current=Nl,e=De!==null&&De.next!==null,Yr=0,Ue=De=Ee=null,xl=!1,e)throw Error(U(300));return t}function Qd(){var t=So!==0;return So=0,t}function tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?Ee.memoizedState=Ue=t:Ue=Ue.next=t,Ue}function $t(){if(De===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var e=Ue===null?Ee.memoizedState:Ue.next;if(e!==null)Ue=e,De=t;else{if(t===null)throw Error(U(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Ue===null?Ee.memoizedState=Ue=t:Ue=Ue.next=t}return Ue}function Ao(t,e){return typeof e=="function"?e(t):e}function Cc(t){var e=$t(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=De,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var f=c.lane;if((Yr&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Ee.lanes|=f,Xr|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Xt(r,e.memoizedState)||(vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ee.lanes|=s,Xr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Pc(t){var e=$t(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Xt(s,e.memoizedState)||(vt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function l_(){}function u_(t,e){var n=Ee,r=$t(),i=e(),s=!Xt(r.memoizedState,i);if(s&&(r.memoizedState=i,vt=!0),r=r.queue,Yd(d_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,Ro(9,h_.bind(null,n,r,i,e),void 0,null),$e===null)throw Error(U(349));Yr&30||c_(n,e,i)}return i}function c_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function h_(t,e,n,r){e.value=n,e.getSnapshot=r,f_(e)&&p_(t)}function d_(t,e,n){return n(function(){f_(e)&&p_(t)})}function f_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Xt(t,n)}catch{return!0}}function p_(t){var e=kn(t,1);e!==null&&Yt(e,t,1,-1)}function Gm(t){var e=tn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:t},e.queue=t,t=t.dispatch=gS.bind(null,Ee,t),[e.memoizedState,t]}function Ro(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function m_(){return $t().memoizedState}function Ja(t,e,n,r){var i=tn();Ee.flags|=t,i.memoizedState=Ro(1|e,n,void 0,r===void 0?null:r)}function lu(t,e,n,r){var i=$t();r=r===void 0?null:r;var s=void 0;if(De!==null){var o=De.memoizedState;if(s=o.destroy,r!==null&&Kd(r,o.deps)){i.memoizedState=Ro(e,n,s,r);return}}Ee.flags|=t,i.memoizedState=Ro(1|e,n,s,r)}function Qm(t,e){return Ja(8390656,8,t,e)}function Yd(t,e){return lu(2048,8,t,e)}function g_(t,e){return lu(4,2,t,e)}function y_(t,e){return lu(4,4,t,e)}function v_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function __(t,e,n){return n=n!=null?n.concat([t]):null,lu(4,4,v_.bind(null,e,t),n)}function Xd(){}function w_(t,e){var n=$t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function E_(t,e){var n=$t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function T_(t,e,n){return Yr&21?(Xt(n,e)||(n=Cv(),Ee.lanes|=n,Xr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vt=!0),t.memoizedState=n)}function pS(t,e){var n=ue;ue=n!==0&&4>n?n:4,t(!0);var r=Rc.transition;Rc.transition={};try{t(!1),e()}finally{ue=n,Rc.transition=r}}function I_(){return $t().memoizedState}function mS(t,e,n){var r=fr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},S_(t))A_(e,n);else if(n=s_(t,e,n,r),n!==null){var i=ht();Yt(n,t,r,i),R_(n,e,r)}}function gS(t,e,n){var r=fr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(S_(t))A_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Xt(l,o)){var u=e.interleaved;u===null?(i.next=i,Bd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=s_(t,e,i,r),n!==null&&(i=ht(),Yt(n,t,r,i),R_(n,e,r))}}function S_(t){var e=t.alternate;return t===Ee||e!==null&&e===Ee}function A_(t,e){to=xl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function R_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pd(t,n)}}var Nl={readContext:Ut,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},yS={readContext:Ut,useCallback:function(t,e){return tn().memoizedState=[t,e===void 0?null:e],t},useContext:Ut,useEffect:Qm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ja(4194308,4,v_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ja(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ja(4,2,t,e)},useMemo:function(t,e){var n=tn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=tn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=mS.bind(null,Ee,t),[r.memoizedState,t]},useRef:function(t){var e=tn();return t={current:t},e.memoizedState=t},useState:Gm,useDebugValue:Xd,useDeferredValue:function(t){return tn().memoizedState=t},useTransition:function(){var t=Gm(!1),e=t[0];return t=pS.bind(null,t[1]),tn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ee,i=tn();if(ve){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),$e===null)throw Error(U(349));Yr&30||c_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Qm(d_.bind(null,r,s,t),[t]),r.flags|=2048,Ro(9,h_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=tn(),e=$e.identifierPrefix;if(ve){var n=wn,r=_n;n=(r&~(1<<32-Qt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=So++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=fS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},vS={readContext:Ut,useCallback:w_,useContext:Ut,useEffect:Yd,useImperativeHandle:__,useInsertionEffect:g_,useLayoutEffect:y_,useMemo:E_,useReducer:Cc,useRef:m_,useState:function(){return Cc(Ao)},useDebugValue:Xd,useDeferredValue:function(t){var e=$t();return T_(e,De.memoizedState,t)},useTransition:function(){var t=Cc(Ao)[0],e=$t().memoizedState;return[t,e]},useMutableSource:l_,useSyncExternalStore:u_,useId:I_,unstable_isNewReconciler:!1},_S={readContext:Ut,useCallback:w_,useContext:Ut,useEffect:Yd,useImperativeHandle:__,useInsertionEffect:g_,useLayoutEffect:y_,useMemo:E_,useReducer:Pc,useRef:m_,useState:function(){return Pc(Ao)},useDebugValue:Xd,useDeferredValue:function(t){var e=$t();return De===null?e.memoizedState=t:T_(e,De.memoizedState,t)},useTransition:function(){var t=Pc(Ao)[0],e=$t().memoizedState;return[t,e]},useMutableSource:l_,useSyncExternalStore:u_,useId:I_,unstable_isNewReconciler:!1};function Wt(t,e){if(t&&t.defaultProps){e=Te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ih(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var uu={isMounted:function(t){return(t=t._reactInternals)?ai(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ht(),i=fr(t),s=Sn(r,i);s.payload=e,n!=null&&(s.callback=n),e=hr(t,s,i),e!==null&&(Yt(e,t,i,r),Ya(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ht(),i=fr(t),s=Sn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=hr(t,s,i),e!==null&&(Yt(e,t,i,r),Ya(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ht(),r=fr(t),i=Sn(n,r);i.tag=2,e!=null&&(i.callback=e),e=hr(t,i,r),e!==null&&(Yt(e,t,r,n),Ya(e,t,r))}};function Ym(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!vo(n,r)||!vo(i,s):!0}function C_(t,e,n){var r=!1,i=Er,s=e.contextType;return typeof s=="object"&&s!==null?s=Ut(s):(i=wt(e)?Gr:st.current,r=e.contextTypes,s=(r=r!=null)?Hi(t,i):Er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=uu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Xm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&uu.enqueueReplaceState(e,e.state,null)}function Sh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},zd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ut(s):(s=wt(e)?Gr:st.current,i.context=Hi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ih(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&uu.enqueueReplaceState(i,i.state,null),Pl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Qi(t,e){try{var n="",r=e;do n+=KT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function kc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ah(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var wS=typeof WeakMap=="function"?WeakMap:Map;function P_(t,e,n){n=Sn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ol||(Ol=!0,Lh=r),Ah(t,e)},n}function k_(t,e,n){n=Sn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ah(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ah(t,e),typeof r!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Jm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new wS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=VS.bind(null,t,e,n),e.then(t,t))}function Zm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function eg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Sn(-1,1),e.tag=2,hr(n,e,1))),n.lanes|=1),t)}var ES=Mn.ReactCurrentOwner,vt=!1;function ct(t,e,n,r){e.child=t===null?i_(e,null,n,r):Ki(e,t.child,n,r)}function tg(t,e,n,r,i){n=n.render;var s=e.ref;return ji(e,i),r=Gd(t,e,n,r,s,i),n=Qd(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xn(t,e,i)):(ve&&n&&Md(e),e.flags|=1,ct(t,e,r,i),e.child)}function ng(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!of(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,x_(t,e,s,r,i)):(t=nl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:vo,n(o,r)&&t.ref===e.ref)return xn(t,e,i)}return e.flags|=1,t=pr(s,r),t.ref=e.ref,t.return=e,e.child=t}function x_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(vo(s,r)&&t.ref===e.ref)if(vt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(vt=!0);else return e.lanes=t.lanes,xn(t,e,i)}return Rh(t,e,n,r,i)}function N_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Di,Rt),Rt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,de(Di,Rt),Rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(Di,Rt),Rt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,de(Di,Rt),Rt|=r;return ct(t,e,i,n),e.child}function D_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Rh(t,e,n,r,i){var s=wt(n)?Gr:st.current;return s=Hi(e,s),ji(e,i),n=Gd(t,e,n,r,s,i),r=Qd(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xn(t,e,i)):(ve&&r&&Md(e),e.flags|=1,ct(t,e,n,i),e.child)}function rg(t,e,n,r,i){if(wt(n)){var s=!0;Il(e)}else s=!1;if(ji(e,i),e.stateNode===null)Za(t,e),C_(e,n,r),Sh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ut(c):(c=wt(n)?Gr:st.current,c=Hi(e,c));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Xm(e,o,r,c),Qn=!1;var g=e.memoizedState;o.state=g,Pl(e,r,o,i),u=e.memoizedState,l!==r||g!==u||_t.current||Qn?(typeof f=="function"&&(Ih(e,n,f,r),u=e.memoizedState),(l=Qn||Ym(e,n,l,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,o_(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Wt(e.type,l),o.props=c,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ut(u):(u=wt(n)?Gr:st.current,u=Hi(e,u));var R=n.getDerivedStateFromProps;(f=typeof R=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&Xm(e,o,r,u),Qn=!1,g=e.memoizedState,o.state=g,Pl(e,r,o,i);var C=e.memoizedState;l!==m||g!==C||_t.current||Qn?(typeof R=="function"&&(Ih(e,n,R,r),C=e.memoizedState),(c=Qn||Ym(e,n,c,r,g,C,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Ch(t,e,n,r,s,i)}function Ch(t,e,n,r,i,s){D_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Bm(e,n,!1),xn(t,e,s);r=e.stateNode,ES.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ki(e,t.child,null,s),e.child=Ki(e,null,l,s)):ct(t,e,l,s),e.memoizedState=r.state,i&&Bm(e,n,!0),e.child}function O_(t){var e=t.stateNode;e.pendingContext?$m(t,e.pendingContext,e.pendingContext!==e.context):e.context&&$m(t,e.context,!1),Wd(t,e.containerInfo)}function ig(t,e,n,r,i){return qi(),jd(i),e.flags|=256,ct(t,e,n,r),e.child}var Ph={dehydrated:null,treeContext:null,retryLane:0};function kh(t){return{baseLanes:t,cachePool:null,transitions:null}}function V_(t,e,n){var r=e.pendingProps,i=we.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),de(we,i&1),t===null)return Eh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=du(o,r,0,null),t=qr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=kh(n),e.memoizedState=Ph,t):Jd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return TS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=pr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=pr(l,s):(s=qr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?kh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ph,r}return s=t.child,t=s.sibling,r=pr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Jd(t,e){return e=du({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function La(t,e,n,r){return r!==null&&jd(r),Ki(e,t.child,null,n),t=Jd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function TS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=kc(Error(U(422))),La(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=du({mode:"visible",children:r.children},i,0,null),s=qr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ki(e,t.child,null,o),e.child.memoizedState=kh(o),e.memoizedState=Ph,s);if(!(e.mode&1))return La(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=kc(s,r,void 0),La(t,e,o,r)}if(l=(o&t.childLanes)!==0,vt||l){if(r=$e,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,kn(t,i),Yt(r,t,i,-1))}return sf(),r=kc(Error(U(421))),La(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=LS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ct=cr(i.nextSibling),Pt=e,ve=!0,qt=null,t!==null&&(Lt[Mt++]=_n,Lt[Mt++]=wn,Lt[Mt++]=Qr,_n=t.id,wn=t.overflow,Qr=e),e=Jd(e,r.children),e.flags|=4096,e)}function sg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Th(t.return,e,n)}function xc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function L_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ct(t,e,r.children,n),r=we.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sg(t,n,e);else if(t.tag===19)sg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(de(we,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&kl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),xc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&kl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}xc(e,!0,n,null,s);break;case"together":xc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Za(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function xn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function IS(t,e,n){switch(e.tag){case 3:O_(e),qi();break;case 5:a_(e);break;case 1:wt(e.type)&&Il(e);break;case 4:Wd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;de(Rl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(de(we,we.current&1),e.flags|=128,null):n&e.child.childLanes?V_(t,e,n):(de(we,we.current&1),t=xn(t,e,n),t!==null?t.sibling:null);de(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return L_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(we,we.current),r)break;return null;case 22:case 23:return e.lanes=0,N_(t,e,n)}return xn(t,e,n)}var M_,xh,b_,j_;M_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xh=function(){};b_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,zr(ln.current);var s=null;switch(n){case"input":i=Jc(t,i),r=Jc(t,r),s=[];break;case"select":i=Te({},i,{value:void 0}),r=Te({},r,{value:void 0}),s=[];break;case"textarea":i=th(t,i),r=th(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=El)}rh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(co.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(co.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&pe("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};j_=function(t,e,n,r){n!==r&&(e.flags|=4)};function bs(t,e){if(!ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function SS(t,e,n){var r=e.pendingProps;switch(bd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(e),null;case 1:return wt(e.type)&&Tl(),et(e),null;case 3:return r=e.stateNode,Gi(),ye(_t),ye(st),qd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Oa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qt!==null&&(jh(qt),qt=null))),xh(t,e),et(e),null;case 5:Hd(e);var i=zr(Io.current);if(n=e.type,t!==null&&e.stateNode!=null)b_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return et(e),null}if(t=zr(ln.current),Oa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[nn]=e,r[Eo]=s,t=(e.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(i=0;i<zs.length;i++)pe(zs[i],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":pm(r,s),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},pe("invalid",r);break;case"textarea":gm(r,s),pe("invalid",r)}rh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Da(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Da(r.textContent,l,t),i=["children",""+l]):co.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&pe("scroll",r)}switch(n){case"input":Sa(r),mm(r,s,!0);break;case"textarea":Sa(r),ym(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=El)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=dv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[nn]=e,t[Eo]=r,M_(t,e,!1,!1),e.stateNode=t;e:{switch(o=ih(n,r),n){case"dialog":pe("cancel",t),pe("close",t),i=r;break;case"iframe":case"object":case"embed":pe("load",t),i=r;break;case"video":case"audio":for(i=0;i<zs.length;i++)pe(zs[i],t);i=r;break;case"source":pe("error",t),i=r;break;case"img":case"image":case"link":pe("error",t),pe("load",t),i=r;break;case"details":pe("toggle",t),i=r;break;case"input":pm(t,r),i=Jc(t,r),pe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Te({},r,{value:void 0}),pe("invalid",t);break;case"textarea":gm(t,r),i=th(t,r),pe("invalid",t);break;default:i=r}rh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?mv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&fv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ho(t,u):typeof u=="number"&&ho(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(co.hasOwnProperty(s)?u!=null&&s==="onScroll"&&pe("scroll",t):u!=null&&Td(t,s,u,o))}switch(n){case"input":Sa(t),mm(t,r,!1);break;case"textarea":Sa(t),ym(t);break;case"option":r.value!=null&&t.setAttribute("value",""+wr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Vi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Vi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=El)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return et(e),null;case 6:if(t&&e.stateNode!=null)j_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=zr(Io.current),zr(ln.current),Oa(e)){if(r=e.stateNode,n=e.memoizedProps,r[nn]=e,(s=r.nodeValue!==n)&&(t=Pt,t!==null))switch(t.tag){case 3:Da(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Da(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nn]=e,e.stateNode=r}return et(e),null;case 13:if(ye(we),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&Ct!==null&&e.mode&1&&!(e.flags&128))n_(),qi(),e.flags|=98560,s=!1;else if(s=Oa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[nn]=e}else qi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;et(e),s=!1}else qt!==null&&(jh(qt),qt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||we.current&1?Le===0&&(Le=3):sf())),e.updateQueue!==null&&(e.flags|=4),et(e),null);case 4:return Gi(),xh(t,e),t===null&&_o(e.stateNode.containerInfo),et(e),null;case 10:return $d(e.type._context),et(e),null;case 17:return wt(e.type)&&Tl(),et(e),null;case 19:if(ye(we),s=e.memoizedState,s===null)return et(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)bs(s,!1);else{if(Le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=kl(t),o!==null){for(e.flags|=128,bs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return de(we,we.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ce()>Yi&&(e.flags|=128,r=!0,bs(s,!1),e.lanes=4194304)}else{if(!r)if(t=kl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),bs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ve)return et(e),null}else 2*Ce()-s.renderingStartTime>Yi&&n!==1073741824&&(e.flags|=128,r=!0,bs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ce(),e.sibling=null,n=we.current,de(we,r?n&1|2:n&1),e):(et(e),null);case 22:case 23:return rf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Rt&1073741824&&(et(e),e.subtreeFlags&6&&(e.flags|=8192)):et(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function AS(t,e){switch(bd(e),e.tag){case 1:return wt(e.type)&&Tl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Gi(),ye(_t),ye(st),qd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Hd(e),null;case 13:if(ye(we),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));qi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ye(we),null;case 4:return Gi(),null;case 10:return $d(e.type._context),null;case 22:case 23:return rf(),null;case 24:return null;default:return null}}var Ma=!1,rt=!1,RS=typeof WeakSet=="function"?WeakSet:Set,H=null;function Ni(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(t,e,r)}else n.current=null}function Nh(t,e,n){try{n()}catch(r){Ae(t,e,r)}}var og=!1;function CS(t,e){if(ph=vl,t=zv(),Ld(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,m=t,g=null;t:for(;;){for(var R;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(R=m.firstChild)!==null;)g=m,m=R;for(;;){if(m===t)break t;if(g===n&&++c===i&&(l=o),g===s&&++f===r&&(u=o),(R=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=R}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(mh={focusedElem:t,selectionRange:n},vl=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var k=C.memoizedProps,D=C.memoizedState,I=e.stateNode,w=I.getSnapshotBeforeUpdate(e.elementType===e.type?k:Wt(e.type,k),D);I.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(V){Ae(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return C=og,og=!1,C}function no(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Nh(e,n,s)}i=i.next}while(i!==r)}}function cu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Dh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function F_(t){var e=t.alternate;e!==null&&(t.alternate=null,F_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[nn],delete e[Eo],delete e[vh],delete e[uS],delete e[cS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function U_(t){return t.tag===5||t.tag===3||t.tag===4}function ag(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||U_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Oh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=El));else if(r!==4&&(t=t.child,t!==null))for(Oh(t,e,n),t=t.sibling;t!==null;)Oh(t,e,n),t=t.sibling}function Vh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Vh(t,e,n),t=t.sibling;t!==null;)Vh(t,e,n),t=t.sibling}var ze=null,Ht=!1;function Wn(t,e,n){for(n=n.child;n!==null;)$_(t,e,n),n=n.sibling}function $_(t,e,n){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(nu,n)}catch{}switch(n.tag){case 5:rt||Ni(n,e);case 6:var r=ze,i=Ht;ze=null,Wn(t,e,n),ze=r,Ht=i,ze!==null&&(Ht?(t=ze,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&(Ht?(t=ze,n=n.stateNode,t.nodeType===8?Ic(t.parentNode,n):t.nodeType===1&&Ic(t,n),go(t)):Ic(ze,n.stateNode));break;case 4:r=ze,i=Ht,ze=n.stateNode.containerInfo,Ht=!0,Wn(t,e,n),ze=r,Ht=i;break;case 0:case 11:case 14:case 15:if(!rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Nh(n,e,o),i=i.next}while(i!==r)}Wn(t,e,n);break;case 1:if(!rt&&(Ni(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ae(n,e,l)}Wn(t,e,n);break;case 21:Wn(t,e,n);break;case 22:n.mode&1?(rt=(r=rt)||n.memoizedState!==null,Wn(t,e,n),rt=r):Wn(t,e,n);break;default:Wn(t,e,n)}}function lg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new RS),e.forEach(function(r){var i=MS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function zt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ze=l.stateNode,Ht=!1;break e;case 3:ze=l.stateNode.containerInfo,Ht=!0;break e;case 4:ze=l.stateNode.containerInfo,Ht=!0;break e}l=l.return}if(ze===null)throw Error(U(160));$_(s,o,i),ze=null,Ht=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ae(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)B_(e,t),e=e.sibling}function B_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zt(e,t),en(t),r&4){try{no(3,t,t.return),cu(3,t)}catch(k){Ae(t,t.return,k)}try{no(5,t,t.return)}catch(k){Ae(t,t.return,k)}}break;case 1:zt(e,t),en(t),r&512&&n!==null&&Ni(n,n.return);break;case 5:if(zt(e,t),en(t),r&512&&n!==null&&Ni(n,n.return),t.flags&32){var i=t.stateNode;try{ho(i,"")}catch(k){Ae(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&cv(i,s),ih(l,o);var c=ih(l,s);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?mv(i,m):f==="dangerouslySetInnerHTML"?fv(i,m):f==="children"?ho(i,m):Td(i,f,m,c)}switch(l){case"input":Zc(i,s);break;case"textarea":hv(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var R=s.value;R!=null?Vi(i,!!s.multiple,R,!1):g!==!!s.multiple&&(s.defaultValue!=null?Vi(i,!!s.multiple,s.defaultValue,!0):Vi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Eo]=s}catch(k){Ae(t,t.return,k)}}break;case 6:if(zt(e,t),en(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Ae(t,t.return,k)}}break;case 3:if(zt(e,t),en(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{go(e.containerInfo)}catch(k){Ae(t,t.return,k)}break;case 4:zt(e,t),en(t);break;case 13:zt(e,t),en(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(tf=Ce())),r&4&&lg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(rt=(c=rt)||f,zt(e,t),rt=c):zt(e,t),en(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(H=t,f=t.child;f!==null;){for(m=H=f;H!==null;){switch(g=H,R=g.child,g.tag){case 0:case 11:case 14:case 15:no(4,g,g.return);break;case 1:Ni(g,g.return);var C=g.stateNode;if(typeof C.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(k){Ae(r,n,k)}}break;case 5:Ni(g,g.return);break;case 22:if(g.memoizedState!==null){cg(m);continue}}R!==null?(R.return=g,H=R):cg(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=pv("display",o))}catch(k){Ae(t,t.return,k)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(k){Ae(t,t.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:zt(e,t),en(t),r&4&&lg(t);break;case 21:break;default:zt(e,t),en(t)}}function en(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(U_(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ho(i,""),r.flags&=-33);var s=ag(t);Vh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=ag(t);Oh(t,l,o);break;default:throw Error(U(161))}}catch(u){Ae(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function PS(t,e,n){H=t,z_(t)}function z_(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ma;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||rt;l=Ma;var c=rt;if(Ma=o,(rt=u)&&!c)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?hg(i):u!==null?(u.return=o,H=u):hg(i);for(;s!==null;)H=s,z_(s),s=s.sibling;H=i,Ma=l,rt=c}ug(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):ug(t)}}function ug(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rt||cu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!rt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Wt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Km(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Km(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&go(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}rt||e.flags&512&&Dh(e)}catch(g){Ae(e,e.return,g)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function cg(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function hg(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{cu(4,e)}catch(u){Ae(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ae(e,i,u)}}var s=e.return;try{Dh(e)}catch(u){Ae(e,s,u)}break;case 5:var o=e.return;try{Dh(e)}catch(u){Ae(e,o,u)}}}catch(u){Ae(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var kS=Math.ceil,Dl=Mn.ReactCurrentDispatcher,Zd=Mn.ReactCurrentOwner,Ft=Mn.ReactCurrentBatchConfig,oe=0,$e=null,xe=null,qe=0,Rt=0,Di=Cr(0),Le=0,Co=null,Xr=0,hu=0,ef=0,ro=null,gt=null,tf=0,Yi=1/0,yn=null,Ol=!1,Lh=null,dr=null,ba=!1,ir=null,Vl=0,io=0,Mh=null,el=-1,tl=0;function ht(){return oe&6?Ce():el!==-1?el:el=Ce()}function fr(t){return t.mode&1?oe&2&&qe!==0?qe&-qe:dS.transition!==null?(tl===0&&(tl=Cv()),tl):(t=ue,t!==0||(t=window.event,t=t===void 0?16:Vv(t.type)),t):1}function Yt(t,e,n,r){if(50<io)throw io=0,Mh=null,Error(U(185));$o(t,n,r),(!(oe&2)||t!==$e)&&(t===$e&&(!(oe&2)&&(hu|=n),Le===4&&Xn(t,qe)),Et(t,r),n===1&&oe===0&&!(e.mode&1)&&(Yi=Ce()+500,au&&Pr()))}function Et(t,e){var n=t.callbackNode;dI(t,e);var r=yl(t,t===$e?qe:0);if(r===0)n!==null&&wm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&wm(n),e===1)t.tag===0?hS(dg.bind(null,t)):Zv(dg.bind(null,t)),aS(function(){!(oe&6)&&Pr()}),n=null;else{switch(Pv(r)){case 1:n=Cd;break;case 4:n=Av;break;case 16:n=gl;break;case 536870912:n=Rv;break;default:n=gl}n=X_(n,W_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function W_(t,e){if(el=-1,tl=0,oe&6)throw Error(U(327));var n=t.callbackNode;if(Fi()&&t.callbackNode!==n)return null;var r=yl(t,t===$e?qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ll(t,r);else{e=r;var i=oe;oe|=2;var s=q_();($e!==t||qe!==e)&&(yn=null,Yi=Ce()+500,Hr(t,e));do try{DS();break}catch(l){H_(t,l)}while(!0);Ud(),Dl.current=s,oe=i,xe!==null?e=0:($e=null,qe=0,e=Le)}if(e!==0){if(e===2&&(i=uh(t),i!==0&&(r=i,e=bh(t,i))),e===1)throw n=Co,Hr(t,0),Xn(t,r),Et(t,Ce()),n;if(e===6)Xn(t,r);else{if(i=t.current.alternate,!(r&30)&&!xS(i)&&(e=Ll(t,r),e===2&&(s=uh(t),s!==0&&(r=s,e=bh(t,s))),e===1))throw n=Co,Hr(t,0),Xn(t,r),Et(t,Ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Fr(t,gt,yn);break;case 3:if(Xn(t,r),(r&130023424)===r&&(e=tf+500-Ce(),10<e)){if(yl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ht(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=yh(Fr.bind(null,t,gt,yn),e);break}Fr(t,gt,yn);break;case 4:if(Xn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Qt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kS(r/1960))-r,10<r){t.timeoutHandle=yh(Fr.bind(null,t,gt,yn),r);break}Fr(t,gt,yn);break;case 5:Fr(t,gt,yn);break;default:throw Error(U(329))}}}return Et(t,Ce()),t.callbackNode===n?W_.bind(null,t):null}function bh(t,e){var n=ro;return t.current.memoizedState.isDehydrated&&(Hr(t,e).flags|=256),t=Ll(t,e),t!==2&&(e=gt,gt=n,e!==null&&jh(e)),t}function jh(t){gt===null?gt=t:gt.push.apply(gt,t)}function xS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Xt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xn(t,e){for(e&=~ef,e&=~hu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qt(e),r=1<<n;t[n]=-1,e&=~r}}function dg(t){if(oe&6)throw Error(U(327));Fi();var e=yl(t,0);if(!(e&1))return Et(t,Ce()),null;var n=Ll(t,e);if(t.tag!==0&&n===2){var r=uh(t);r!==0&&(e=r,n=bh(t,r))}if(n===1)throw n=Co,Hr(t,0),Xn(t,e),Et(t,Ce()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Fr(t,gt,yn),Et(t,Ce()),null}function nf(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(Yi=Ce()+500,au&&Pr())}}function Jr(t){ir!==null&&ir.tag===0&&!(oe&6)&&Fi();var e=oe;oe|=1;var n=Ft.transition,r=ue;try{if(Ft.transition=null,ue=1,t)return t()}finally{ue=r,Ft.transition=n,oe=e,!(oe&6)&&Pr()}}function rf(){Rt=Di.current,ye(Di)}function Hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,oS(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(bd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Tl();break;case 3:Gi(),ye(_t),ye(st),qd();break;case 5:Hd(r);break;case 4:Gi();break;case 13:ye(we);break;case 19:ye(we);break;case 10:$d(r.type._context);break;case 22:case 23:rf()}n=n.return}if($e=t,xe=t=pr(t.current,null),qe=Rt=e,Le=0,Co=null,ef=hu=Xr=0,gt=ro=null,Br!==null){for(e=0;e<Br.length;e++)if(n=Br[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Br=null}return t}function H_(t,e){do{var n=xe;try{if(Ud(),Xa.current=Nl,xl){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xl=!1}if(Yr=0,Ue=De=Ee=null,to=!1,So=0,Zd.current=null,n===null||n.return===null){Le=1,Co=e,xe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=qe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var R=Zm(o);if(R!==null){R.flags&=-257,eg(R,o,l,s,e),R.mode&1&&Jm(s,c,e),e=R,u=c;var C=e.updateQueue;if(C===null){var k=new Set;k.add(u),e.updateQueue=k}else C.add(u);break e}else{if(!(e&1)){Jm(s,c,e),sf();break e}u=Error(U(426))}}else if(ve&&l.mode&1){var D=Zm(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),eg(D,o,l,s,e),jd(Qi(u,l));break e}}s=u=Qi(u,l),Le!==4&&(Le=2),ro===null?ro=[s]:ro.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=P_(s,u,e);qm(s,I);break e;case 1:l=u;var w=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(dr===null||!dr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=k_(s,l,e);qm(s,V);break e}}s=s.return}while(s!==null)}G_(n)}catch(j){e=j,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(!0)}function q_(){var t=Dl.current;return Dl.current=Nl,t===null?Nl:t}function sf(){(Le===0||Le===3||Le===2)&&(Le=4),$e===null||!(Xr&268435455)&&!(hu&268435455)||Xn($e,qe)}function Ll(t,e){var n=oe;oe|=2;var r=q_();($e!==t||qe!==e)&&(yn=null,Hr(t,e));do try{NS();break}catch(i){H_(t,i)}while(!0);if(Ud(),oe=n,Dl.current=r,xe!==null)throw Error(U(261));return $e=null,qe=0,Le}function NS(){for(;xe!==null;)K_(xe)}function DS(){for(;xe!==null&&!rI();)K_(xe)}function K_(t){var e=Y_(t.alternate,t,Rt);t.memoizedProps=t.pendingProps,e===null?G_(t):xe=e,Zd.current=null}function G_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=AS(n,e),n!==null){n.flags&=32767,xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Le=6,xe=null;return}}else if(n=SS(n,e,Rt),n!==null){xe=n;return}if(e=e.sibling,e!==null){xe=e;return}xe=e=t}while(e!==null);Le===0&&(Le=5)}function Fr(t,e,n){var r=ue,i=Ft.transition;try{Ft.transition=null,ue=1,OS(t,e,n,r)}finally{Ft.transition=i,ue=r}return null}function OS(t,e,n,r){do Fi();while(ir!==null);if(oe&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(fI(t,s),t===$e&&(xe=$e=null,qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ba||(ba=!0,X_(gl,function(){return Fi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ft.transition,Ft.transition=null;var o=ue;ue=1;var l=oe;oe|=4,Zd.current=null,CS(t,n),B_(n,t),ZI(mh),vl=!!ph,mh=ph=null,t.current=n,PS(n),iI(),oe=l,ue=o,Ft.transition=s}else t.current=n;if(ba&&(ba=!1,ir=t,Vl=i),s=t.pendingLanes,s===0&&(dr=null),aI(n.stateNode),Et(t,Ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ol)throw Ol=!1,t=Lh,Lh=null,t;return Vl&1&&t.tag!==0&&Fi(),s=t.pendingLanes,s&1?t===Mh?io++:(io=0,Mh=t):io=0,Pr(),null}function Fi(){if(ir!==null){var t=Pv(Vl),e=Ft.transition,n=ue;try{if(Ft.transition=null,ue=16>t?16:t,ir===null)var r=!1;else{if(t=ir,ir=null,Vl=0,oe&6)throw Error(U(331));var i=oe;for(oe|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(H=c;H!==null;){var f=H;switch(f.tag){case 0:case 11:case 15:no(8,f,s)}var m=f.child;if(m!==null)m.return=f,H=m;else for(;H!==null;){f=H;var g=f.sibling,R=f.return;if(F_(f),f===c){H=null;break}if(g!==null){g.return=R,H=g;break}H=R}}}var C=s.alternate;if(C!==null){var k=C.child;if(k!==null){C.child=null;do{var D=k.sibling;k.sibling=null,k=D}while(k!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:no(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,H=I;break e}H=s.return}}var w=t.current;for(H=w;H!==null;){o=H;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,H=S;else e:for(o=w;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:cu(9,l)}}catch(j){Ae(l,l.return,j)}if(l===o){H=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,H=V;break e}H=l.return}}if(oe=i,Pr(),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(nu,t)}catch{}r=!0}return r}finally{ue=n,Ft.transition=e}}return!1}function fg(t,e,n){e=Qi(n,e),e=P_(t,e,1),t=hr(t,e,1),e=ht(),t!==null&&($o(t,1,e),Et(t,e))}function Ae(t,e,n){if(t.tag===3)fg(t,t,n);else for(;e!==null;){if(e.tag===3){fg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dr===null||!dr.has(r))){t=Qi(n,t),t=k_(e,t,1),e=hr(e,t,1),t=ht(),e!==null&&($o(e,1,t),Et(e,t));break}}e=e.return}}function VS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ht(),t.pingedLanes|=t.suspendedLanes&n,$e===t&&(qe&n)===n&&(Le===4||Le===3&&(qe&130023424)===qe&&500>Ce()-tf?Hr(t,0):ef|=n),Et(t,e)}function Q_(t,e){e===0&&(t.mode&1?(e=Ca,Ca<<=1,!(Ca&130023424)&&(Ca=4194304)):e=1);var n=ht();t=kn(t,e),t!==null&&($o(t,e,n),Et(t,n))}function LS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Q_(t,n)}function MS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),Q_(t,n)}var Y_;Y_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_t.current)vt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vt=!1,IS(t,e,n);vt=!!(t.flags&131072)}else vt=!1,ve&&e.flags&1048576&&e_(e,Al,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Za(t,e),t=e.pendingProps;var i=Hi(e,st.current);ji(e,n),i=Gd(null,e,r,t,i,n);var s=Qd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wt(r)?(s=!0,Il(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zd(e),i.updater=uu,e.stateNode=i,i._reactInternals=e,Sh(e,r,t,n),e=Ch(null,e,r,!0,s,n)):(e.tag=0,ve&&s&&Md(e),ct(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Za(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=jS(r),t=Wt(r,t),i){case 0:e=Rh(null,e,r,t,n);break e;case 1:e=rg(null,e,r,t,n);break e;case 11:e=tg(null,e,r,t,n);break e;case 14:e=ng(null,e,r,Wt(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Rh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),rg(t,e,r,i,n);case 3:e:{if(O_(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,o_(t,e),Pl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Qi(Error(U(423)),e),e=ig(t,e,r,n,i);break e}else if(r!==i){i=Qi(Error(U(424)),e),e=ig(t,e,r,n,i);break e}else for(Ct=cr(e.stateNode.containerInfo.firstChild),Pt=e,ve=!0,qt=null,n=i_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qi(),r===i){e=xn(t,e,n);break e}ct(t,e,r,n)}e=e.child}return e;case 5:return a_(e),t===null&&Eh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,gh(r,i)?o=null:s!==null&&gh(r,s)&&(e.flags|=32),D_(t,e),ct(t,e,o,n),e.child;case 6:return t===null&&Eh(e),null;case 13:return V_(t,e,n);case 4:return Wd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ki(e,null,r,n):ct(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),tg(t,e,r,i,n);case 7:return ct(t,e,e.pendingProps,n),e.child;case 8:return ct(t,e,e.pendingProps.children,n),e.child;case 12:return ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,de(Rl,r._currentValue),r._currentValue=o,s!==null)if(Xt(s.value,o)){if(s.children===i.children&&!_t.current){e=xn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Sn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Th(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Th(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ct(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ji(e,n),i=Ut(i),r=r(i),e.flags|=1,ct(t,e,r,n),e.child;case 14:return r=e.type,i=Wt(r,e.pendingProps),i=Wt(r.type,i),ng(t,e,r,i,n);case 15:return x_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Za(t,e),e.tag=1,wt(r)?(t=!0,Il(e)):t=!1,ji(e,n),C_(e,r,i),Sh(e,r,i,n),Ch(null,e,r,!0,t,n);case 19:return L_(t,e,n);case 22:return N_(t,e,n)}throw Error(U(156,e.tag))};function X_(t,e){return Sv(t,e)}function bS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(t,e,n,r){return new bS(t,e,n,r)}function of(t){return t=t.prototype,!(!t||!t.isReactComponent)}function jS(t){if(typeof t=="function")return of(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Sd)return 11;if(t===Ad)return 14}return 2}function pr(t,e){var n=t.alternate;return n===null?(n=jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function nl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")of(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ti:return qr(n.children,i,s,e);case Id:o=8,i|=8;break;case Gc:return t=jt(12,n,e,i|2),t.elementType=Gc,t.lanes=s,t;case Qc:return t=jt(13,n,e,i),t.elementType=Qc,t.lanes=s,t;case Yc:return t=jt(19,n,e,i),t.elementType=Yc,t.lanes=s,t;case av:return du(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case sv:o=10;break e;case ov:o=9;break e;case Sd:o=11;break e;case Ad:o=14;break e;case Gn:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=jt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function qr(t,e,n,r){return t=jt(7,t,r,e),t.lanes=n,t}function du(t,e,n,r){return t=jt(22,t,r,e),t.elementType=av,t.lanes=n,t.stateNode={isHidden:!1},t}function Nc(t,e,n){return t=jt(6,t,null,e),t.lanes=n,t}function Dc(t,e,n){return e=jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function FS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dc(0),this.expirationTimes=dc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function af(t,e,n,r,i,s,o,l,u){return t=new FS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=jt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zd(s),t}function US(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ei,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function J_(t){if(!t)return Er;t=t._reactInternals;e:{if(ai(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(wt(n))return Jv(t,n,e)}return e}function Z_(t,e,n,r,i,s,o,l,u){return t=af(n,r,!0,t,i,s,o,l,u),t.context=J_(null),n=t.current,r=ht(),i=fr(n),s=Sn(r,i),s.callback=e??null,hr(n,s,i),t.current.lanes=i,$o(t,i,r),Et(t,r),t}function fu(t,e,n,r){var i=e.current,s=ht(),o=fr(i);return n=J_(n),e.context===null?e.context=n:e.pendingContext=n,e=Sn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=hr(i,e,o),t!==null&&(Yt(t,i,o,s),Ya(t,i,o)),o}function Ml(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function pg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function lf(t,e){pg(t,e),(t=t.alternate)&&pg(t,e)}function $S(){return null}var ew=typeof reportError=="function"?reportError:function(t){console.error(t)};function uf(t){this._internalRoot=t}pu.prototype.render=uf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));fu(t,e,null,null)};pu.prototype.unmount=uf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Jr(function(){fu(null,t,null,null)}),e[Pn]=null}};function pu(t){this._internalRoot=t}pu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Nv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yn.length&&e!==0&&e<Yn[n].priority;n++);Yn.splice(n,0,t),n===0&&Ov(t)}};function cf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function mu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function mg(){}function BS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Ml(o);s.call(c)}}var o=Z_(e,r,t,0,null,!1,!1,"",mg);return t._reactRootContainer=o,t[Pn]=o.current,_o(t.nodeType===8?t.parentNode:t),Jr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Ml(u);l.call(c)}}var u=af(t,0,!1,null,null,!1,!1,"",mg);return t._reactRootContainer=u,t[Pn]=u.current,_o(t.nodeType===8?t.parentNode:t),Jr(function(){fu(e,u,n,r)}),u}function gu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Ml(o);l.call(u)}}fu(e,o,t,i)}else o=BS(n,e,t,i,r);return Ml(o)}kv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Bs(e.pendingLanes);n!==0&&(Pd(e,n|1),Et(e,Ce()),!(oe&6)&&(Yi=Ce()+500,Pr()))}break;case 13:Jr(function(){var r=kn(t,1);if(r!==null){var i=ht();Yt(r,t,1,i)}}),lf(t,1)}};kd=function(t){if(t.tag===13){var e=kn(t,134217728);if(e!==null){var n=ht();Yt(e,t,134217728,n)}lf(t,134217728)}};xv=function(t){if(t.tag===13){var e=fr(t),n=kn(t,e);if(n!==null){var r=ht();Yt(n,t,e,r)}lf(t,e)}};Nv=function(){return ue};Dv=function(t,e){var n=ue;try{return ue=t,e()}finally{ue=n}};oh=function(t,e,n){switch(e){case"input":if(Zc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ou(r);if(!i)throw Error(U(90));uv(r),Zc(r,i)}}}break;case"textarea":hv(t,n);break;case"select":e=n.value,e!=null&&Vi(t,!!n.multiple,e,!1)}};vv=nf;_v=Jr;var zS={usingClientEntryPoint:!1,Events:[zo,Ri,ou,gv,yv,nf]},js={findFiberByHostInstance:$r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},WS={bundleType:js.bundleType,version:js.version,rendererPackageName:js.rendererPackageName,rendererConfig:js.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Tv(t),t===null?null:t.stateNode},findFiberByHostInstance:js.findFiberByHostInstance||$S,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ja.isDisabled&&ja.supportsFiber)try{nu=ja.inject(WS),an=ja}catch{}}xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zS;xt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cf(e))throw Error(U(200));return US(t,e,null,n)};xt.createRoot=function(t,e){if(!cf(t))throw Error(U(299));var n=!1,r="",i=ew;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=af(t,1,!1,null,null,n,!1,r,i),t[Pn]=e.current,_o(t.nodeType===8?t.parentNode:t),new uf(e)};xt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=Tv(e),t=t===null?null:t.stateNode,t};xt.flushSync=function(t){return Jr(t)};xt.hydrate=function(t,e,n){if(!mu(e))throw Error(U(200));return gu(null,t,e,!0,n)};xt.hydrateRoot=function(t,e,n){if(!cf(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=ew;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Z_(e,null,t,1,n??null,i,!1,s,o),t[Pn]=e.current,_o(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new pu(e)};xt.render=function(t,e,n){if(!mu(e))throw Error(U(200));return gu(null,t,e,!1,n)};xt.unmountComponentAtNode=function(t){if(!mu(t))throw Error(U(40));return t._reactRootContainer?(Jr(function(){gu(null,null,t,!1,function(){t._reactRootContainer=null,t[Pn]=null})}),!0):!1};xt.unstable_batchedUpdates=nf;xt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!mu(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return gu(t,e,n,!1,r)};xt.version="18.3.1-next-f1338f8080-20240426";function tw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tw)}catch(t){console.error(t)}}tw(),tv.exports=xt;var HS=tv.exports,gg=HS;qc.createRoot=gg.createRoot,qc.hydrateRoot=gg.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Po(){return Po=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Po.apply(this,arguments)}var sr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(sr||(sr={}));const yg="popstate";function qS(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Fh("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:bl(i)}return GS(e,n,null,t)}function Pe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function hf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function KS(){return Math.random().toString(36).substr(2,8)}function vg(t,e){return{usr:t.state,key:t.key,idx:e}}function Fh(t,e,n,r){return n===void 0&&(n=null),Po({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ls(e):e,{state:n,key:e&&e.key||r||KS()})}function bl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ls(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function GS(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=sr.Pop,u=null,c=f();c==null&&(c=0,o.replaceState(Po({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function m(){l=sr.Pop;let D=f(),I=D==null?null:D-c;c=D,u&&u({action:l,location:k.location,delta:I})}function g(D,I){l=sr.Push;let w=Fh(k.location,D,I);c=f()+1;let S=vg(w,c),V=k.createHref(w);try{o.pushState(S,"",V)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(V)}s&&u&&u({action:l,location:k.location,delta:1})}function R(D,I){l=sr.Replace;let w=Fh(k.location,D,I);c=f();let S=vg(w,c),V=k.createHref(w);o.replaceState(S,"",V),s&&u&&u({action:l,location:k.location,delta:0})}function C(D){let I=i.location.origin!=="null"?i.location.origin:i.location.href,w=typeof D=="string"?D:bl(D);return w=w.replace(/ $/,"%20"),Pe(I,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,I)}let k={get action(){return l},get location(){return t(i,o)},listen(D){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(yg,m),u=D,()=>{i.removeEventListener(yg,m),u=null}},createHref(D){return e(i,D)},createURL:C,encodeLocation(D){let I=C(D);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:g,replace:R,go(D){return o.go(D)}};return k}var _g;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(_g||(_g={}));function QS(t,e,n){return n===void 0&&(n="/"),YS(t,e,n)}function YS(t,e,n,r){let i=typeof e=="string"?ls(e):e,s=df(i.pathname||"/",n);if(s==null)return null;let o=nw(t);XS(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=uA(s);l=oA(o[u],c)}return l}function nw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Pe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=mr([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(Pe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),nw(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:iA(c,s.index),routesMeta:f})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of rw(s.path))i(s,o,u)}),e}function rw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=rw(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function XS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:sA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const JS=/^:[\w-]+$/,ZS=3,eA=2,tA=1,nA=10,rA=-2,wg=t=>t==="*";function iA(t,e){let n=t.split("/"),r=n.length;return n.some(wg)&&(r+=rA),e&&(r+=eA),n.filter(i=>!wg(i)).reduce((i,s)=>i+(JS.test(s)?ZS:s===""?tA:nA),r)}function sA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function oA(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",m=aA({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f),g=u.route;if(!m)return null;Object.assign(i,m.params),o.push({params:i,pathname:mr([s,m.pathname]),pathnameBase:pA(mr([s,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(s=mr([s,m.pathnameBase]))}return o}function aA(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=lA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,f,m)=>{let{paramName:g,isOptional:R}=f;if(g==="*"){let k=l[m]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const C=l[m];return R&&!C?c[g]=void 0:c[g]=(C||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function lA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),hf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function uA(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return hf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function df(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const cA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hA=t=>cA.test(t);function dA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ls(t):t,s;if(n)if(hA(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),hf(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Eg(n.substring(1),"/"):s=Eg(n,e)}else s=e;return{pathname:s,search:mA(r),hash:gA(i)}}function Eg(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Oc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function fA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ff(t,e){let n=fA(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function pf(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ls(t):(i=Po({},t),Pe(!i.pathname||!i.pathname.includes("?"),Oc("?","pathname","search",i)),Pe(!i.pathname||!i.pathname.includes("#"),Oc("#","pathname","hash",i)),Pe(!i.search||!i.search.includes("#"),Oc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let m=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}l=m>=0?e[m]:"/"}let u=dA(i,l),c=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}const mr=t=>t.join("/").replace(/\/\/+/g,"/"),pA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),mA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,gA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function yA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const iw=["post","put","patch","delete"];new Set(iw);const vA=["get",...iw];new Set(vA);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ko(){return ko=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ko.apply(this,arguments)}const mf=O.createContext(null),_A=O.createContext(null),kr=O.createContext(null),yu=O.createContext(null),bn=O.createContext({outlet:null,matches:[],isDataRoute:!1}),sw=O.createContext(null);function wA(t,e){let{relative:n}=e===void 0?{}:e;us()||Pe(!1);let{basename:r,navigator:i}=O.useContext(kr),{hash:s,pathname:o,search:l}=aw(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:mr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function us(){return O.useContext(yu)!=null}function Ho(){return us()||Pe(!1),O.useContext(yu).location}function ow(t){O.useContext(kr).static||O.useLayoutEffect(t)}function xr(){let{isDataRoute:t}=O.useContext(bn);return t?VA():EA()}function EA(){us()||Pe(!1);let t=O.useContext(mf),{basename:e,future:n,navigator:r}=O.useContext(kr),{matches:i}=O.useContext(bn),{pathname:s}=Ho(),o=JSON.stringify(ff(i,n.v7_relativeSplatPath)),l=O.useRef(!1);return ow(()=>{l.current=!0}),O.useCallback(function(c,f){if(f===void 0&&(f={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let m=pf(c,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:mr([e,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[e,r,o,s,t])}function TA(){let{matches:t}=O.useContext(bn),e=t[t.length-1];return e?e.params:{}}function aw(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=O.useContext(kr),{matches:i}=O.useContext(bn),{pathname:s}=Ho(),o=JSON.stringify(ff(i,r.v7_relativeSplatPath));return O.useMemo(()=>pf(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function IA(t,e){return SA(t,e)}function SA(t,e,n,r){us()||Pe(!1);let{navigator:i}=O.useContext(kr),{matches:s}=O.useContext(bn),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Ho(),f;if(e){var m;let D=typeof e=="string"?ls(e):e;u==="/"||(m=D.pathname)!=null&&m.startsWith(u)||Pe(!1),f=D}else f=c;let g=f.pathname||"/",R=g;if(u!=="/"){let D=u.replace(/^\//,"").split("/");R="/"+g.replace(/^\//,"").split("/").slice(D.length).join("/")}let C=QS(t,{pathname:R}),k=kA(C&&C.map(D=>Object.assign({},D,{params:Object.assign({},l,D.params),pathname:mr([u,i.encodeLocation?i.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?u:mr([u,i.encodeLocation?i.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),s,n,r);return e&&k?O.createElement(yu.Provider,{value:{location:ko({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:sr.Pop}},k):k}function AA(){let t=OA(),e=yA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:i},n):null,null)}const RA=O.createElement(AA,null);class CA extends O.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?O.createElement(bn.Provider,{value:this.props.routeContext},O.createElement(sw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function PA(t){let{routeContext:e,match:n,children:r}=t,i=O.useContext(mf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(bn.Provider,{value:e},r)}function kA(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);f>=0||Pe(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let m=o[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=f),m.route.id){let{loaderData:g,errors:R}=n,C=m.route.loader&&g[m.route.id]===void 0&&(!R||R[m.route.id]===void 0);if(m.route.lazy||C){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,m,g)=>{let R,C=!1,k=null,D=null;n&&(R=l&&m.route.id?l[m.route.id]:void 0,k=m.route.errorElement||RA,u&&(c<0&&g===0?(LA("route-fallback"),C=!0,D=null):c===g&&(C=!0,D=m.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,g+1)),w=()=>{let S;return R?S=k:C?S=D:m.route.Component?S=O.createElement(m.route.Component,null):m.route.element?S=m.route.element:S=f,O.createElement(PA,{match:m,routeContext:{outlet:f,matches:I,isDataRoute:n!=null},children:S})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?O.createElement(CA,{location:n.location,revalidation:n.revalidation,component:k,error:R,children:w(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):w()},null)}var lw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(lw||{}),uw=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(uw||{});function xA(t){let e=O.useContext(mf);return e||Pe(!1),e}function NA(t){let e=O.useContext(_A);return e||Pe(!1),e}function DA(t){let e=O.useContext(bn);return e||Pe(!1),e}function cw(t){let e=DA(),n=e.matches[e.matches.length-1];return n.route.id||Pe(!1),n.route.id}function OA(){var t;let e=O.useContext(sw),n=NA(),r=cw();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function VA(){let{router:t}=xA(lw.UseNavigateStable),e=cw(uw.UseNavigateStable),n=O.useRef(!1);return ow(()=>{n.current=!0}),O.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ko({fromRouteId:e},s)))},[t,e])}const Tg={};function LA(t,e,n){Tg[t]||(Tg[t]=!0)}function MA(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Uh(t){let{to:e,replace:n,state:r,relative:i}=t;us()||Pe(!1);let{future:s,static:o}=O.useContext(kr),{matches:l}=O.useContext(bn),{pathname:u}=Ho(),c=xr(),f=pf(e,ff(l,s.v7_relativeSplatPath),u,i==="path"),m=JSON.stringify(f);return O.useEffect(()=>c(JSON.parse(m),{replace:n,state:r,relative:i}),[c,m,i,n,r]),null}function Kn(t){Pe(!1)}function bA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=sr.Pop,navigator:s,static:o=!1,future:l}=t;us()&&Pe(!1);let u=e.replace(/^\/*/,"/"),c=O.useMemo(()=>({basename:u,navigator:s,static:o,future:ko({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=ls(r));let{pathname:f="/",search:m="",hash:g="",state:R=null,key:C="default"}=r,k=O.useMemo(()=>{let D=df(f,u);return D==null?null:{location:{pathname:D,search:m,hash:g,state:R,key:C},navigationType:i}},[u,f,m,g,R,C,i]);return k==null?null:O.createElement(kr.Provider,{value:c},O.createElement(yu.Provider,{children:n,value:k}))}function jA(t){let{children:e,location:n}=t;return IA($h(e),n)}new Promise(()=>{});function $h(t,e){e===void 0&&(e=[]);let n=[];return O.Children.forEach(t,(r,i)=>{if(!O.isValidElement(r))return;let s=[...e,i];if(r.type===O.Fragment){n.push.apply(n,$h(r.props.children,s));return}r.type!==Kn&&Pe(!1),!r.props.index||!r.props.children||Pe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=$h(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bh(){return Bh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bh.apply(this,arguments)}function FA(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function UA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function $A(t,e){return t.button===0&&(!e||e==="_self")&&!UA(t)}const BA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],zA="6";try{window.__reactRouterVersion=zA}catch{}const WA="startTransition",Ig=VT[WA];function HA(t){let{basename:e,children:n,future:r,window:i}=t,s=O.useRef();s.current==null&&(s.current=qS({window:i,v5Compat:!0}));let o=s.current,[l,u]=O.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},f=O.useCallback(m=>{c&&Ig?Ig(()=>u(m)):u(m)},[u,c]);return O.useLayoutEffect(()=>o.listen(f),[o,f]),O.useEffect(()=>MA(r),[r]),O.createElement(bA,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const qA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",KA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hw=O.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:f,viewTransition:m}=e,g=FA(e,BA),{basename:R}=O.useContext(kr),C,k=!1;if(typeof c=="string"&&KA.test(c)&&(C=c,qA))try{let S=new URL(window.location.href),V=c.startsWith("//")?new URL(S.protocol+c):new URL(c),j=df(V.pathname,R);V.origin===S.origin&&j!=null?c=j+V.search+V.hash:k=!0}catch{}let D=wA(c,{relative:i}),I=GA(c,{replace:o,state:l,target:u,preventScrollReset:f,relative:i,viewTransition:m});function w(S){r&&r(S),S.defaultPrevented||I(S)}return O.createElement("a",Bh({},g,{href:C||D,onClick:k||s?r:w,ref:n,target:u}))});var Sg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Sg||(Sg={}));var Ag;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ag||(Ag={}));function GA(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=xr(),c=Ho(),f=aw(t,{relative:o});return O.useCallback(m=>{if($A(m,n)){m.preventDefault();let g=r!==void 0?r:bl(c)===bl(f);u(t,{replace:g,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,f,r,i,n,t,s,o,l])}let QA={data:""},YA=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||QA},XA=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,JA=/\/\*[^]*?\*\/|  +/g,Rg=/\n+/g,Jn=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?Jn(o,s):s+"{"+Jn(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=Jn(o,e?e.replace(/([^,])+/g,l=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,l):l?l+" "+u:u)):s):o!=null&&(s=s[1]=="-"?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Jn.p?Jn.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},Hn={},dw=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+dw(t[n]);return e}return t},ZA=(t,e,n,r,i)=>{let s=dw(t),o=Hn[s]||(Hn[s]=(u=>{let c=0,f=11;for(;c<u.length;)f=101*f+u.charCodeAt(c++)>>>0;return"go"+f})(s));if(!Hn[o]){let u=s!==t?t:(c=>{let f,m,g=[{}];for(;f=XA.exec(c.replace(JA,""));)f[4]?g.shift():f[3]?(m=f[3].replace(Rg," ").trim(),g.unshift(g[0][m]=g[0][m]||{})):g[0][f[1]]=f[2].replace(Rg," ").trim();return g[0]})(t);Hn[o]=Jn(i?{["@keyframes "+o]:u}:u,n?"":"."+o)}let l=n&&Hn.g;return n&&(Hn.g=Hn[o]),((u,c,f,m)=>{m?c.data=c.data.replace(m,u):c.data.indexOf(u)===-1&&(c.data=f?u+c.data:c.data+u)})(Hn[o],e,r,l),o},eR=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let l=o(n),u=l&&l.props&&l.props.className||/^go/.test(l)&&l;o=u?"."+u:l&&typeof l=="object"?l.props?"":Jn(l,""):l===!1?"":l}return r+i+(o??"")},"");function vu(t){let e=this||{},n=t.call?t(e.p):t;return ZA(n.unshift?n.raw?eR(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,YA(e.target),e.g,e.o,e.k)}let fw,zh,Wh;vu.bind({g:1});let Nn=vu.bind({k:1});function tR(t,e,n,r){Jn.p=e,fw=t,zh=n,Wh=r}function Nr(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let l=Object.assign({},s),u=l.className||i.className;n.p=Object.assign({theme:zh&&zh()},l),n.o=/go\d/.test(u),l.className=vu.apply(n,r)+(u?" "+u:"");let c=t;return t[0]&&(c=l.as||t,delete l.as),Wh&&c[0]&&Wh(l),fw(c,l)}return i}}var nR=t=>typeof t=="function",jl=(t,e)=>nR(t)?t(e):t,rR=(()=>{let t=0;return()=>(++t).toString()})(),pw=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),iR=20,gf="default",mw=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return mw(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:i}=e;return{...t,toasts:t.toasts.map(o=>o.id===i||i===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+s}))}}},rl=[],gw={toasts:[],pausedAt:void 0,settings:{toastLimit:iR}},rn={},yw=(t,e=gf)=>{rn[e]=mw(rn[e]||gw,t),rl.forEach(([n,r])=>{n===e&&r(rn[e])})},vw=t=>Object.keys(rn).forEach(e=>yw(t,e)),sR=t=>Object.keys(rn).find(e=>rn[e].toasts.some(n=>n.id===t)),_u=(t=gf)=>e=>{yw(e,t)},oR={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},aR=(t={},e=gf)=>{let[n,r]=O.useState(rn[e]||gw),i=O.useRef(rn[e]);O.useEffect(()=>(i.current!==rn[e]&&r(rn[e]),rl.push([e,r]),()=>{let o=rl.findIndex(([l])=>l===e);o>-1&&rl.splice(o,1)}),[e]);let s=n.toasts.map(o=>{var l,u,c;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((l=t[o.type])==null?void 0:l.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((u=t[o.type])==null?void 0:u.duration)||(t==null?void 0:t.duration)||oR[o.type],style:{...t.style,...(c=t[o.type])==null?void 0:c.style,...o.style}}});return{...n,toasts:s}},lR=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||rR()}),qo=t=>(e,n)=>{let r=lR(e,t,n);return _u(r.toasterId||sR(r.id))({type:2,toast:r}),r.id},Ve=(t,e)=>qo("blank")(t,e);Ve.error=qo("error");Ve.success=qo("success");Ve.loading=qo("loading");Ve.custom=qo("custom");Ve.dismiss=(t,e)=>{let n={type:3,toastId:t};e?_u(e)(n):vw(n)};Ve.dismissAll=t=>Ve.dismiss(void 0,t);Ve.remove=(t,e)=>{let n={type:4,toastId:t};e?_u(e)(n):vw(n)};Ve.removeAll=t=>Ve.remove(void 0,t);Ve.promise=(t,e,n)=>{let r=Ve.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(i=>{let s=e.success?jl(e.success,i):void 0;return s?Ve.success(s,{id:r,...n,...n==null?void 0:n.success}):Ve.dismiss(r),i}).catch(i=>{let s=e.error?jl(e.error,i):void 0;s?Ve.error(s,{id:r,...n,...n==null?void 0:n.error}):Ve.dismiss(r)}),t};var uR=1e3,cR=(t,e="default")=>{let{toasts:n,pausedAt:r}=aR(t,e),i=O.useRef(new Map).current,s=O.useCallback((m,g=uR)=>{if(i.has(m))return;let R=setTimeout(()=>{i.delete(m),o({type:4,toastId:m})},g);i.set(m,R)},[]);O.useEffect(()=>{if(r)return;let m=Date.now(),g=n.map(R=>{if(R.duration===1/0)return;let C=(R.duration||0)+R.pauseDuration-(m-R.createdAt);if(C<0){R.visible&&Ve.dismiss(R.id);return}return setTimeout(()=>Ve.dismiss(R.id,e),C)});return()=>{g.forEach(R=>R&&clearTimeout(R))}},[n,r,e]);let o=O.useCallback(_u(e),[e]),l=O.useCallback(()=>{o({type:5,time:Date.now()})},[o]),u=O.useCallback((m,g)=>{o({type:1,toast:{id:m,height:g}})},[o]),c=O.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),f=O.useCallback((m,g)=>{let{reverseOrder:R=!1,gutter:C=8,defaultPosition:k}=g||{},D=n.filter(S=>(S.position||k)===(m.position||k)&&S.height),I=D.findIndex(S=>S.id===m.id),w=D.filter((S,V)=>V<I&&S.visible).length;return D.filter(S=>S.visible).slice(...R?[w+1]:[0,w]).reduce((S,V)=>S+(V.height||0)+C,0)},[n]);return O.useEffect(()=>{n.forEach(m=>{if(m.dismissed)s(m.id,m.removeDelay);else{let g=i.get(m.id);g&&(clearTimeout(g),i.delete(m.id))}})},[n,s]),{toasts:n,handlers:{updateHeight:u,startPause:l,endPause:c,calculateOffset:f}}},hR=Nn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,dR=Nn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,fR=Nn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,pR=Nr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${hR} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${dR} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${fR} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,mR=Nn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,gR=Nr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${mR} 1s linear infinite;
`,yR=Nn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,vR=Nn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,_R=Nr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${yR} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${vR} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,wR=Nr("div")`
  position: absolute;
`,ER=Nr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,TR=Nn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,IR=Nr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${TR} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,SR=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?O.createElement(IR,null,e):e:n==="blank"?null:O.createElement(ER,null,O.createElement(gR,{...r}),n!=="loading"&&O.createElement(wR,null,n==="error"?O.createElement(pR,{...r}):O.createElement(_R,{...r})))},AR=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,RR=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,CR="0%{opacity:0;} 100%{opacity:1;}",PR="0%{opacity:1;} 100%{opacity:0;}",kR=Nr("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,xR=Nr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,NR=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=pw()?[CR,PR]:[AR(n),RR(n)];return{animation:e?`${Nn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Nn(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},DR=O.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?NR(t.position||e||"top-center",t.visible):{opacity:0},s=O.createElement(SR,{toast:t}),o=O.createElement(xR,{...t.ariaProps},jl(t.message,t));return O.createElement(kR,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):O.createElement(O.Fragment,null,s,o))});tR(O.createElement);var OR=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=O.useCallback(o=>{if(o){let l=()=>{let u=o.getBoundingClientRect().height;r(t,u)};l(),new MutationObserver(l).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return O.createElement("div",{ref:s,className:e,style:n},i)},VR=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:pw()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},LR=vu`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Fa=16,MR=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,toasterId:s,containerStyle:o,containerClassName:l})=>{let{toasts:u,handlers:c}=cR(n,s);return O.createElement("div",{"data-rht-toaster":s||"",style:{position:"fixed",zIndex:9999,top:Fa,left:Fa,right:Fa,bottom:Fa,pointerEvents:"none",...o},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},u.map(f=>{let m=f.position||e,g=c.calculateOffset(f,{reverseOrder:t,gutter:r,defaultPosition:e}),R=VR(m,g);return O.createElement(OR,{id:f.id,key:f.id,onHeightUpdate:c.updateHeight,className:f.visible?LR:"",style:R},f.type==="custom"?jl(f.message,f):i?i(f):O.createElement(DR,{toast:f,position:m}))}))},me=Ve,Cg={};/**
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
 */const _w=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},bR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ww={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|c>>6,R=c&63;u||(R=64,o||(g=64)),r.push(n[f],n[m],n[g],n[R])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_w(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):bR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||m==null)throw new jR;const g=s<<2|l>>4;if(r.push(g),c!==64){const R=l<<4&240|c>>2;if(r.push(R),m!==64){const C=c<<6&192|m;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class jR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const FR=function(t){const e=_w(t);return ww.encodeByteArray(e,!0)},Fl=function(t){return FR(t).replace(/\./g,"")},Ew=function(t){try{return ww.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function UR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $R=()=>UR().__FIREBASE_DEFAULTS__,BR=()=>{if(typeof process>"u"||typeof Cg>"u")return;const t=Cg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ew(t[1]);return e&&JSON.parse(e)},wu=()=>{try{return $R()||BR()||zR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Tw=t=>{var e,n;return(n=(e=wu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},WR=t=>{const e=Tw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Iw=()=>{var t;return(t=wu())===null||t===void 0?void 0:t.config},Sw=t=>{var e;return(e=wu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class HR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function qR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Fl(JSON.stringify(n)),Fl(JSON.stringify(o)),""].join(".")}/**
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
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function KR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function GR(){var t;const e=(t=wu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function QR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function YR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function XR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function JR(){const t=ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ZR(){return!GR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function eC(){try{return typeof indexedDB=="object"}catch{return!1}}function tC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const nC="FirebaseError";class jn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=nC,Object.setPrototypeOf(this,jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ko.prototype.create)}}class Ko{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?rC(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new jn(i,l,r)}}function rC(t,e){return t.replace(iC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const iC=/\{\$([^}]+)}/g;function sC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ul(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Pg(s)&&Pg(o)){if(!Ul(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Pg(t){return t!==null&&typeof t=="object"}/**
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
 */function Go(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ws(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Hs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function oC(t,e){const n=new aC(t,e);return n.subscribe.bind(n)}class aC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");lC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Vc),i.error===void 0&&(i.error=Vc),i.complete===void 0&&(i.complete=Vc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Vc(){}/**
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
 */function dt(t){return t&&t._delegate?t._delegate:t}class Zr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ur="[DEFAULT]";/**
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
 */class uC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new HR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hC(e))try{this.getOrInitializeService({instanceIdentifier:Ur})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ur){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ur){return this.instances.has(e)}getOptions(e=Ur){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ur){return this.component?this.component.multipleInstances?e:Ur:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cC(t){return t===Ur?void 0:t}function hC(t){return t.instantiationMode==="EAGER"}/**
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
 */class dC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new uC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const fC={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},pC=ie.INFO,mC={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},gC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=mC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yf{constructor(e){this.name=e,this._logLevel=pC,this._logHandler=gC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const yC=(t,e)=>e.some(n=>t instanceof n);let kg,xg;function vC(){return kg||(kg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _C(){return xg||(xg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Aw=new WeakMap,Hh=new WeakMap,Rw=new WeakMap,Lc=new WeakMap,vf=new WeakMap;function wC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(gr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Aw.set(n,t)}).catch(()=>{}),vf.set(e,t),e}function EC(t){if(Hh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Hh.set(t,e)}let qh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Rw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function TC(t){qh=t(qh)}function IC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Mc(this),e,...n);return Rw.set(r,e.sort?e.sort():[e]),gr(r)}:_C().includes(t)?function(...e){return t.apply(Mc(this),e),gr(Aw.get(this))}:function(...e){return gr(t.apply(Mc(this),e))}}function SC(t){return typeof t=="function"?IC(t):(t instanceof IDBTransaction&&EC(t),yC(t,vC())?new Proxy(t,qh):t)}function gr(t){if(t instanceof IDBRequest)return wC(t);if(Lc.has(t))return Lc.get(t);const e=SC(t);return e!==t&&(Lc.set(t,e),vf.set(e,t)),e}const Mc=t=>vf.get(t);function AC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=gr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(gr(o.result),u.oldVersion,u.newVersion,gr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const RC=["get","getKey","getAll","getAllKeys","count"],CC=["put","add","delete","clear"],bc=new Map;function Ng(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bc.get(e))return bc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=CC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||RC.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return bc.set(e,s),s}TC(t=>({...t,get:(e,n,r)=>Ng(e,n)||t.get(e,n,r),has:(e,n)=>!!Ng(e,n)||t.has(e,n)}));/**
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
 */class PC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function kC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kh="@firebase/app",Dg="0.10.13";/**
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
 */const Dn=new yf("@firebase/app"),xC="@firebase/app-compat",NC="@firebase/analytics-compat",DC="@firebase/analytics",OC="@firebase/app-check-compat",VC="@firebase/app-check",LC="@firebase/auth",MC="@firebase/auth-compat",bC="@firebase/database",jC="@firebase/data-connect",FC="@firebase/database-compat",UC="@firebase/functions",$C="@firebase/functions-compat",BC="@firebase/installations",zC="@firebase/installations-compat",WC="@firebase/messaging",HC="@firebase/messaging-compat",qC="@firebase/performance",KC="@firebase/performance-compat",GC="@firebase/remote-config",QC="@firebase/remote-config-compat",YC="@firebase/storage",XC="@firebase/storage-compat",JC="@firebase/firestore",ZC="@firebase/vertexai-preview",eP="@firebase/firestore-compat",tP="firebase",nP="10.14.1";/**
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
 */const Gh="[DEFAULT]",rP={[Kh]:"fire-core",[xC]:"fire-core-compat",[DC]:"fire-analytics",[NC]:"fire-analytics-compat",[VC]:"fire-app-check",[OC]:"fire-app-check-compat",[LC]:"fire-auth",[MC]:"fire-auth-compat",[bC]:"fire-rtdb",[jC]:"fire-data-connect",[FC]:"fire-rtdb-compat",[UC]:"fire-fn",[$C]:"fire-fn-compat",[BC]:"fire-iid",[zC]:"fire-iid-compat",[WC]:"fire-fcm",[HC]:"fire-fcm-compat",[qC]:"fire-perf",[KC]:"fire-perf-compat",[GC]:"fire-rc",[QC]:"fire-rc-compat",[YC]:"fire-gcs",[XC]:"fire-gcs-compat",[JC]:"fire-fst",[eP]:"fire-fst-compat",[ZC]:"fire-vertex","fire-js":"fire-js",[tP]:"fire-js-all"};/**
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
 */const $l=new Map,iP=new Map,Qh=new Map;function Og(t,e){try{t.container.addComponent(e)}catch(n){Dn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xi(t){const e=t.name;if(Qh.has(e))return Dn.debug(`There were multiple attempts to register component ${e}.`),!1;Qh.set(e,t);for(const n of $l.values())Og(n,t);for(const n of iP.values())Og(n,t);return!0}function _f(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function sn(t){return t.settings!==void 0}/**
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
 */const sP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yr=new Ko("app","Firebase",sP);/**
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
 */class oP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yr.create("app-deleted",{appName:this._name})}}/**
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
 */const cs=nP;function Cw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Gh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw yr.create("bad-app-name",{appName:String(i)});if(n||(n=Iw()),!n)throw yr.create("no-options");const s=$l.get(i);if(s){if(Ul(n,s.options)&&Ul(r,s.config))return s;throw yr.create("duplicate-app",{appName:i})}const o=new dC(i);for(const u of Qh.values())o.addComponent(u);const l=new oP(n,r,o);return $l.set(i,l),l}function Pw(t=Gh){const e=$l.get(t);if(!e&&t===Gh&&Iw())return Cw();if(!e)throw yr.create("no-app",{appName:t});return e}function vr(t,e,n){var r;let i=(r=rP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dn.warn(l.join(" "));return}Xi(new Zr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const aP="firebase-heartbeat-database",lP=1,xo="firebase-heartbeat-store";let jc=null;function kw(){return jc||(jc=AC(aP,lP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(xo)}catch(n){console.warn(n)}}}}).catch(t=>{throw yr.create("idb-open",{originalErrorMessage:t.message})})),jc}async function uP(t){try{const n=(await kw()).transaction(xo),r=await n.objectStore(xo).get(xw(t));return await n.done,r}catch(e){if(e instanceof jn)Dn.warn(e.message);else{const n=yr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dn.warn(n.message)}}}async function Vg(t,e){try{const r=(await kw()).transaction(xo,"readwrite");await r.objectStore(xo).put(e,xw(t)),await r.done}catch(n){if(n instanceof jn)Dn.warn(n.message);else{const r=yr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dn.warn(r.message)}}}function xw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const cP=1024,hP=30*24*60*60*1e3;class dP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Lg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=hP}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Dn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Lg(),{heartbeatsToSend:r,unsentEntries:i}=fP(this._heartbeatsCache.heartbeats),s=Fl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Dn.warn(n),""}}}function Lg(){return new Date().toISOString().substring(0,10)}function fP(t,e=cP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Mg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Mg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class pP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eC()?tC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await uP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Mg(t){return Fl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function mP(t){Xi(new Zr("platform-logger",e=>new PC(e),"PRIVATE")),Xi(new Zr("heartbeat",e=>new dP(e),"PRIVATE")),vr(Kh,Dg,t),vr(Kh,Dg,"esm2017"),vr("fire-js","")}mP("");function wf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Nw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gP=Nw,Dw=new Ko("auth","Firebase",Nw());/**
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
 */const Bl=new yf("@firebase/auth");function yP(t,...e){Bl.logLevel<=ie.WARN&&Bl.warn(`Auth (${cs}): ${t}`,...e)}function il(t,...e){Bl.logLevel<=ie.ERROR&&Bl.error(`Auth (${cs}): ${t}`,...e)}/**
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
 */function Jt(t,...e){throw Ef(t,...e)}function un(t,...e){return Ef(t,...e)}function Ow(t,e,n){const r=Object.assign(Object.assign({},gP()),{[e]:n});return new Ko("auth","Firebase",r).create(e,{appName:t.name})}function An(t){return Ow(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ef(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Dw.create(t,...e)}function Q(t,e,...n){if(!t)throw Ef(e,...n)}function En(t){const e="INTERNAL ASSERTION FAILED: "+t;throw il(e),new Error(e)}function On(t,e){t||En(e)}/**
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
 */function Yh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function vP(){return bg()==="http:"||bg()==="https:"}function bg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function _P(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vP()||YR()||"connection"in navigator)?navigator.onLine:!0}function wP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Qo{constructor(e,n){this.shortDelay=e,this.longDelay=n,On(n>e,"Short delay should be less than long delay!"),this.isMobile=KR()||XR()}get(){return _P()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Tf(t,e){On(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Vw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;En("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;En("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;En("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const EP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const TP=new Qo(3e4,6e4);function Dr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Or(t,e,n,r,i={}){return Lw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Go(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return QR()||(c.referrerPolicy="no-referrer"),Vw.fetch()(Mw(t,t.config.apiHost,n,l),c)})}async function Lw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},EP),e);try{const i=new SP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ua(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ua(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ua(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ua(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ow(t,f,c);Jt(t,f)}}catch(i){if(i instanceof jn)throw i;Jt(t,"network-request-failed",{message:String(i)})}}async function Yo(t,e,n,r,i={}){const s=await Or(t,e,n,r,i);return"mfaPendingCredential"in s&&Jt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Mw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Tf(t.config,i):`${t.config.apiScheme}://${i}`}function IP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class SP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(un(this.auth,"network-request-failed")),TP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ua(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=un(t,e,r);return i.customData._tokenResponse=n,i}function jg(t){return t!==void 0&&t.enterprise!==void 0}class AP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return IP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function RP(t,e){return Or(t,"GET","/v2/recaptchaConfig",Dr(t,e))}/**
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
 */async function CP(t,e){return Or(t,"POST","/v1/accounts:delete",e)}async function bw(t,e){return Or(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function so(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function PP(t,e=!1){const n=dt(t),r=await n.getIdToken(e),i=If(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:so(Fc(i.auth_time)),issuedAtTime:so(Fc(i.iat)),expirationTime:so(Fc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Fc(t){return Number(t)*1e3}function If(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return il("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ew(n);return i?JSON.parse(i):(il("Failed to decode base64 JWT payload"),null)}catch(i){return il("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Fg(t){const e=If(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function No(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof jn&&kP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function kP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class xP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Xh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=so(this.lastLoginAt),this.creationTime=so(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await No(t,bw(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?jw(s.providerUserInfo):[],l=DP(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?c:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Xh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function NP(t){const e=dt(t);await zl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function DP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function jw(t){return t.map(e=>{var{providerId:n}=e,r=wf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function OP(t,e){const n=await Lw(t,{},async()=>{const r=Go({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Mw(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Vw.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function VP(t,e){return Or(t,"POST","/v2/accounts:revokeToken",Dr(t,e))}/**
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
 */class Ui{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=Fg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await OP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ui;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ui,this.toJSON())}_performRefresh(){return En("not implemented")}}/**
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
 */function qn(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Tn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=wf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Xh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await No(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return PP(this,e)}reload(){return NP(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Tn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await zl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(sn(this.auth.app))return Promise.reject(An(this.auth));const e=await this.getIdToken();return await No(this,CP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,R=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:S,emailVerified:V,isAnonymous:j,providerData:M,stsTokenManager:T}=n;Q(S&&T,e,"internal-error");const v=Ui.fromJSON(this.name,T);Q(typeof S=="string",e,"internal-error"),qn(m,e.name),qn(g,e.name),Q(typeof V=="boolean",e,"internal-error"),Q(typeof j=="boolean",e,"internal-error"),qn(R,e.name),qn(C,e.name),qn(k,e.name),qn(D,e.name),qn(I,e.name),qn(w,e.name);const _=new Tn({uid:S,auth:e,email:g,emailVerified:V,displayName:m,isAnonymous:j,photoURL:C,phoneNumber:R,tenantId:k,stsTokenManager:v,createdAt:I,lastLoginAt:w});return M&&Array.isArray(M)&&(_.providerData=M.map(E=>Object.assign({},E))),D&&(_._redirectEventId=D),_}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ui;i.updateFromServerResponse(n);const s=new Tn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await zl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?jw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ui;l.updateFromIdToken(r);const u=new Tn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Xh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const Ug=new Map;function In(t){On(t instanceof Function,"Expected a class definition");let e=Ug.get(t);return e?(On(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ug.set(t,e),e)}/**
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
 */class Fw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Fw.type="NONE";const $g=Fw;/**
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
 */function sl(t,e,n){return`firebase:${t}:${e}:${n}`}class $i{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=sl(this.userKey,i.apiKey,s),this.fullPersistenceKey=sl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new $i(In($g),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||In($g);const o=sl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){const m=Tn._fromJSON(e,f);c!==s&&(l=m),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new $i(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new $i(s,e,r))}}/**
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
 */function Bg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Uw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hw(e))return"Blackberry";if(qw(e))return"Webos";if($w(e))return"Safari";if((e.includes("chrome/")||Bw(e))&&!e.includes("edge/"))return"Chrome";if(Ww(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Uw(t=ot()){return/firefox\//i.test(t)}function $w(t=ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Bw(t=ot()){return/crios\//i.test(t)}function zw(t=ot()){return/iemobile/i.test(t)}function Ww(t=ot()){return/android/i.test(t)}function Hw(t=ot()){return/blackberry/i.test(t)}function qw(t=ot()){return/webos/i.test(t)}function Sf(t=ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function LP(t=ot()){var e;return Sf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function MP(){return JR()&&document.documentMode===10}function Kw(t=ot()){return Sf(t)||Ww(t)||qw(t)||Hw(t)||/windows phone/i.test(t)||zw(t)}/**
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
 */function Gw(t,e=[]){let n;switch(t){case"Browser":n=Bg(ot());break;case"Worker":n=`${Bg(ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${cs}/${r}`}/**
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
 */class bP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function jP(t,e={}){return Or(t,"GET","/v2/passwordPolicy",Dr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const FP=6;class UP{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:FP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class $P{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zg(this),this.idTokenSubscription=new zg(this),this.beforeStateQueue=new bP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=In(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await $i.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await bw(this,{idToken:e}),r=await Tn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(sn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(sn(this.app))return Promise.reject(An(this));const n=e?dt(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return sn(this.app)?Promise.reject(An(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return sn(this.app)?Promise.reject(An(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(In(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jP(this),n=new UP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ko("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await VP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&In(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await $i.create(this,[In(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&yP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function li(t){return dt(t)}class zg{constructor(e){this.auth=e,this.observer=null,this.addObserver=oC(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Eu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function BP(t){Eu=t}function Qw(t){return Eu.loadJS(t)}function zP(){return Eu.recaptchaEnterpriseScript}function WP(){return Eu.gapiScript}function HP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const qP="recaptcha-enterprise",KP="NO_RECAPTCHA";class GP{constructor(e){this.type=qP,this.auth=li(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{RP(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new AP(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;jg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(KP)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&jg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=zP();u.length!==0&&(u+=l),Qw(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Wg(t,e,n,r=!1){const i=new GP(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Jh(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Wg(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Wg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function QP(t,e){const n=_f(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ul(s,e??{}))return i;Jt(i,"already-initialized")}return n.initialize({options:e})}function YP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(In);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function XP(t,e,n){const r=li(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Yw(e),{host:o,port:l}=JP(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),ZP()}function Yw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function JP(t){const e=Yw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Hg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Hg(o)}}}function Hg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ZP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Af{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return En("not implemented")}_getIdTokenResponse(e){return En("not implemented")}_linkToIdToken(e,n){return En("not implemented")}_getReauthenticationResolver(e){return En("not implemented")}}async function e1(t,e){return Or(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function t1(t,e){return Yo(t,"POST","/v1/accounts:signInWithPassword",Dr(t,e))}/**
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
 */async function n1(t,e){return Yo(t,"POST","/v1/accounts:signInWithEmailLink",Dr(t,e))}async function r1(t,e){return Yo(t,"POST","/v1/accounts:signInWithEmailLink",Dr(t,e))}/**
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
 */class Do extends Af{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Do(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Do(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jh(e,n,"signInWithPassword",t1);case"emailLink":return n1(e,{email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jh(e,r,"signUpPassword",e1);case"emailLink":return r1(e,{idToken:n,email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Bi(t,e){return Yo(t,"POST","/v1/accounts:signInWithIdp",Dr(t,e))}/**
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
 */const i1="http://localhost";class ei extends Af{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ei(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=wf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ei(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Bi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Bi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Bi(e,n)}buildRequest(){const e={requestUri:i1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Go(n)}return e}}/**
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
 */function s1(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function o1(t){const e=Ws(Hs(t)).link,n=e?Ws(Hs(e)).deep_link_id:null,r=Ws(Hs(t)).deep_link_id;return(r?Ws(Hs(r)).link:null)||r||n||e||t}class Rf{constructor(e){var n,r,i,s,o,l;const u=Ws(Hs(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=s1((i=u.mode)!==null&&i!==void 0?i:null);Q(c&&f&&m,"argument-error"),this.apiKey=c,this.operation=m,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=o1(e);try{return new Rf(n)}catch{return null}}}/**
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
 */class hs{constructor(){this.providerId=hs.PROVIDER_ID}static credential(e,n){return Do._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Rf.parseLink(n);return Q(r,"argument-error"),Do._fromEmailAndCode(e,r.code,r.tenantId)}}hs.PROVIDER_ID="password";hs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";hs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Xw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Xo extends Xw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Zn extends Xo{constructor(){super("facebook.com")}static credential(e){return ei._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zn.PROVIDER_ID="facebook.com";/**
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
 */class er extends Xo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ei._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return er.credential(n,r)}catch{return null}}}er.GOOGLE_SIGN_IN_METHOD="google.com";er.PROVIDER_ID="google.com";/**
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
 */class tr extends Xo{constructor(){super("github.com")}static credential(e){return ei._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.GITHUB_SIGN_IN_METHOD="github.com";tr.PROVIDER_ID="github.com";/**
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
 */class nr extends Xo{constructor(){super("twitter.com")}static credential(e,n){return ei._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return nr.credential(n,r)}catch{return null}}}nr.TWITTER_SIGN_IN_METHOD="twitter.com";nr.PROVIDER_ID="twitter.com";/**
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
 */async function a1(t,e){return Yo(t,"POST","/v1/accounts:signUp",Dr(t,e))}/**
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
 */class ti{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Tn._fromIdTokenResponse(e,r,i),o=qg(r);return new ti({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=qg(r);return new ti({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function qg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Wl extends jn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Wl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Wl(e,n,r,i)}}function Jw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Wl._fromErrorAndOperation(t,s,e,r):s})}async function l1(t,e,n=!1){const r=await No(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ti._forOperation(t,"link",r)}/**
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
 */async function u1(t,e,n=!1){const{auth:r}=t;if(sn(r.app))return Promise.reject(An(r));const i="reauthenticate";try{const s=await No(t,Jw(r,i,e,t),n);Q(s.idToken,r,"internal-error");const o=If(s.idToken);Q(o,r,"internal-error");const{sub:l}=o;return Q(t.uid===l,r,"user-mismatch"),ti._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Jt(r,"user-mismatch"),s}}/**
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
 */async function Zw(t,e,n=!1){if(sn(t.app))return Promise.reject(An(t));const r="signIn",i=await Jw(t,r,e),s=await ti._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function c1(t,e){return Zw(li(t),e)}/**
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
 */async function eE(t){const e=li(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function h1(t,e,n){if(sn(t.app))return Promise.reject(An(t));const r=li(t),o=await Jh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",a1).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&eE(t),u}),l=await ti._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function tE(t,e,n){return sn(t.app)?Promise.reject(An(t)):c1(dt(t),hs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&eE(t),r})}function d1(t,e,n,r){return dt(t).onIdTokenChanged(e,n,r)}function f1(t,e,n){return dt(t).beforeAuthStateChanged(e,n)}function p1(t,e,n,r){return dt(t).onAuthStateChanged(e,n,r)}function nE(t){return dt(t).signOut()}const Hl="__sak";/**
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
 */class rE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hl,"1"),this.storage.removeItem(Hl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const m1=1e3,g1=10;class iE extends rE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Kw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);MP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,g1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},m1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}iE.type="LOCAL";const y1=iE;/**
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
 */class sE extends rE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}sE.type="SESSION";const oE=sE;/**
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
 */function v1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Tu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Tu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await v1(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Tu.receivers=[];/**
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
 */function Cf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class _1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Cf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function cn(){return window}function w1(t){cn().location.href=t}/**
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
 */function aE(){return typeof cn().WorkerGlobalScope<"u"&&typeof cn().importScripts=="function"}async function E1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function T1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function I1(){return aE()?self:null}/**
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
 */const lE="firebaseLocalStorageDb",S1=1,ql="firebaseLocalStorage",uE="fbase_key";class Jo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Iu(t,e){return t.transaction([ql],e?"readwrite":"readonly").objectStore(ql)}function A1(){const t=indexedDB.deleteDatabase(lE);return new Jo(t).toPromise()}function Zh(){const t=indexedDB.open(lE,S1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ql,{keyPath:uE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ql)?e(r):(r.close(),await A1(),e(await Zh()))})})}async function Kg(t,e,n){const r=Iu(t,!0).put({[uE]:e,value:n});return new Jo(r).toPromise()}async function R1(t,e){const n=Iu(t,!1).get(e),r=await new Jo(n).toPromise();return r===void 0?null:r.value}function Gg(t,e){const n=Iu(t,!0).delete(e);return new Jo(n).toPromise()}const C1=800,P1=3;class cE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>P1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return aE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tu._getInstance(I1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await E1(),!this.activeServiceWorker)return;this.sender=new _1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||T1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zh();return await Kg(e,Hl,"1"),await Gg(e,Hl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>R1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Iu(i,!1).getAll();return new Jo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),C1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cE.type="LOCAL";const k1=cE;new Qo(3e4,6e4);/**
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
 */function x1(t,e){return e?In(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Pf extends Af{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Bi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Bi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function N1(t){return Zw(t.auth,new Pf(t),t.bypassAuthState)}function D1(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),u1(n,new Pf(t),t.bypassAuthState)}async function O1(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),l1(n,new Pf(t),t.bypassAuthState)}/**
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
 */class hE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return N1;case"linkViaPopup":case"linkViaRedirect":return O1;case"reauthViaPopup":case"reauthViaRedirect":return D1;default:Jt(this.auth,"internal-error")}}resolve(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const V1=new Qo(2e3,1e4);class Oi extends hE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Oi.currentPopupAction&&Oi.currentPopupAction.cancel(),Oi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){On(this.filter.length===1,"Popup operations only handle one event");const e=Cf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Oi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,V1.get())};e()}}Oi.currentPopupAction=null;/**
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
 */const L1="pendingRedirect",ol=new Map;class M1 extends hE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ol.get(this.auth._key());if(!e){try{const r=await b1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ol.set(this.auth._key(),e)}return this.bypassAuthState||ol.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function b1(t,e){const n=U1(e),r=F1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function j1(t,e){ol.set(t._key(),e)}function F1(t){return In(t._redirectPersistence)}function U1(t){return sl(L1,t.config.apiKey,t.name)}async function $1(t,e,n=!1){if(sn(t.app))return Promise.reject(An(t));const r=li(t),i=x1(r,e),o=await new M1(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const B1=10*60*1e3;class z1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!W1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!dE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(un(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=B1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qg(e))}saveEventToCache(e){this.cachedEventUids.add(Qg(e)),this.lastProcessedEventTime=Date.now()}}function Qg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function W1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dE(t);default:return!1}}/**
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
 */async function H1(t,e={}){return Or(t,"GET","/v1/projects",e)}/**
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
 */const q1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,K1=/^https?/;async function G1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await H1(t);for(const n of e)try{if(Q1(n))return}catch{}Jt(t,"unauthorized-domain")}function Q1(t){const e=Yh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!K1.test(n))return!1;if(q1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Y1=new Qo(3e4,6e4);function Yg(){const t=cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function X1(t){return new Promise((e,n)=>{var r,i,s;function o(){Yg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yg(),n(un(t,"network-request-failed"))},timeout:Y1.get()})}if(!((i=(r=cn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=cn().gapi)===null||s===void 0)&&s.load)o();else{const l=HP("iframefcb");return cn()[l]=()=>{gapi.load?o():n(un(t,"network-request-failed"))},Qw(`${WP()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw al=null,e})}let al=null;function J1(t){return al=al||X1(t),al}/**
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
 */const Z1=new Qo(5e3,15e3),ek="__/auth/iframe",tk="emulator/auth/iframe",nk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ik(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Tf(e,tk):`https://${t.config.authDomain}/${ek}`,r={apiKey:e.apiKey,appName:t.name,v:cs},i=rk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Go(r).slice(1)}`}async function sk(t){const e=await J1(t),n=cn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:ik(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=un(t,"network-request-failed"),l=cn().setTimeout(()=>{s(o)},Z1.get());function u(){cn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const ok={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ak=500,lk=600,uk="_blank",ck="http://localhost";class Xg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hk(t,e,n,r=ak,i=lk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},ok),{width:r.toString(),height:i.toString(),top:s,left:o}),c=ot().toLowerCase();n&&(l=Bw(c)?uk:n),Uw(c)&&(e=e||ck,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[R,C])=>`${g}${R}=${C},`,"");if(LP(c)&&l!=="_self")return dk(e||"",l),new Xg(null);const m=window.open(e||"",l,f);Q(m,t,"popup-blocked");try{m.focus()}catch{}return new Xg(m)}function dk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const fk="__/auth/handler",pk="emulator/auth/handler",mk=encodeURIComponent("fac");async function Jg(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:cs,eventId:i};if(e instanceof Xw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",sC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Xo){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${mk}=${encodeURIComponent(u)}`:"";return`${gk(t)}?${Go(l).slice(1)}${c}`}function gk({config:t}){return t.emulator?Tf(t,pk):`https://${t.authDomain}/${fk}`}/**
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
 */const Uc="webStorageSupport";class yk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=oE,this._completeRedirectFn=$1,this._overrideRedirectResult=j1}async _openPopup(e,n,r,i){var s;On((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Jg(e,n,r,Yh(),i);return hk(e,o,Cf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Jg(e,n,r,Yh(),i);return w1(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(On(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await sk(e),r=new z1(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Uc,{type:Uc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Uc];o!==void 0&&n(!!o),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=G1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Kw()||$w()||Sf()}}const vk=yk;var Zg="@firebase/auth",ey="1.7.9";/**
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
 */class _k{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function wk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ek(t){Xi(new Zr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gw(t)},c=new $P(r,i,s,u);return YP(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Xi(new Zr("auth-internal",e=>{const n=li(e.getProvider("auth").getImmediate());return(r=>new _k(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),vr(Zg,ey,wk(t)),vr(Zg,ey,"esm2017")}/**
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
 */const Tk=5*60,Ik=Sw("authIdTokenMaxAge")||Tk;let ty=null;const Sk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ik)return;const i=n==null?void 0:n.token;ty!==i&&(ty=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ak(t=Pw()){const e=_f(t,"auth");if(e.isInitialized())return e.getImmediate();const n=QP(t,{popupRedirectResolver:vk,persistence:[k1,y1,oE]}),r=Sw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Sk(s.toString());f1(n,o,()=>o(n.currentUser)),d1(n,l=>o(l))}}const i=Tw("auth");return i&&XP(n,`http://${i}`),n}function Rk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}BP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=un("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Rk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ek("Browser");var ny=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kr,fE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,v){function _(){}_.prototype=v.prototype,T.D=v.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(E,P,x){for(var A=Array(arguments.length-2),be=2;be<arguments.length;be++)A[be-2]=arguments[be];return v.prototype[P].apply(E,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,v,_){_||(_=0);var E=Array(16);if(typeof v=="string")for(var P=0;16>P;++P)E[P]=v.charCodeAt(_++)|v.charCodeAt(_++)<<8|v.charCodeAt(_++)<<16|v.charCodeAt(_++)<<24;else for(P=0;16>P;++P)E[P]=v[_++]|v[_++]<<8|v[_++]<<16|v[_++]<<24;v=T.g[0],_=T.g[1],P=T.g[2];var x=T.g[3],A=v+(x^_&(P^x))+E[0]+3614090360&4294967295;v=_+(A<<7&4294967295|A>>>25),A=x+(P^v&(_^P))+E[1]+3905402710&4294967295,x=v+(A<<12&4294967295|A>>>20),A=P+(_^x&(v^_))+E[2]+606105819&4294967295,P=x+(A<<17&4294967295|A>>>15),A=_+(v^P&(x^v))+E[3]+3250441966&4294967295,_=P+(A<<22&4294967295|A>>>10),A=v+(x^_&(P^x))+E[4]+4118548399&4294967295,v=_+(A<<7&4294967295|A>>>25),A=x+(P^v&(_^P))+E[5]+1200080426&4294967295,x=v+(A<<12&4294967295|A>>>20),A=P+(_^x&(v^_))+E[6]+2821735955&4294967295,P=x+(A<<17&4294967295|A>>>15),A=_+(v^P&(x^v))+E[7]+4249261313&4294967295,_=P+(A<<22&4294967295|A>>>10),A=v+(x^_&(P^x))+E[8]+1770035416&4294967295,v=_+(A<<7&4294967295|A>>>25),A=x+(P^v&(_^P))+E[9]+2336552879&4294967295,x=v+(A<<12&4294967295|A>>>20),A=P+(_^x&(v^_))+E[10]+4294925233&4294967295,P=x+(A<<17&4294967295|A>>>15),A=_+(v^P&(x^v))+E[11]+2304563134&4294967295,_=P+(A<<22&4294967295|A>>>10),A=v+(x^_&(P^x))+E[12]+1804603682&4294967295,v=_+(A<<7&4294967295|A>>>25),A=x+(P^v&(_^P))+E[13]+4254626195&4294967295,x=v+(A<<12&4294967295|A>>>20),A=P+(_^x&(v^_))+E[14]+2792965006&4294967295,P=x+(A<<17&4294967295|A>>>15),A=_+(v^P&(x^v))+E[15]+1236535329&4294967295,_=P+(A<<22&4294967295|A>>>10),A=v+(P^x&(_^P))+E[1]+4129170786&4294967295,v=_+(A<<5&4294967295|A>>>27),A=x+(_^P&(v^_))+E[6]+3225465664&4294967295,x=v+(A<<9&4294967295|A>>>23),A=P+(v^_&(x^v))+E[11]+643717713&4294967295,P=x+(A<<14&4294967295|A>>>18),A=_+(x^v&(P^x))+E[0]+3921069994&4294967295,_=P+(A<<20&4294967295|A>>>12),A=v+(P^x&(_^P))+E[5]+3593408605&4294967295,v=_+(A<<5&4294967295|A>>>27),A=x+(_^P&(v^_))+E[10]+38016083&4294967295,x=v+(A<<9&4294967295|A>>>23),A=P+(v^_&(x^v))+E[15]+3634488961&4294967295,P=x+(A<<14&4294967295|A>>>18),A=_+(x^v&(P^x))+E[4]+3889429448&4294967295,_=P+(A<<20&4294967295|A>>>12),A=v+(P^x&(_^P))+E[9]+568446438&4294967295,v=_+(A<<5&4294967295|A>>>27),A=x+(_^P&(v^_))+E[14]+3275163606&4294967295,x=v+(A<<9&4294967295|A>>>23),A=P+(v^_&(x^v))+E[3]+4107603335&4294967295,P=x+(A<<14&4294967295|A>>>18),A=_+(x^v&(P^x))+E[8]+1163531501&4294967295,_=P+(A<<20&4294967295|A>>>12),A=v+(P^x&(_^P))+E[13]+2850285829&4294967295,v=_+(A<<5&4294967295|A>>>27),A=x+(_^P&(v^_))+E[2]+4243563512&4294967295,x=v+(A<<9&4294967295|A>>>23),A=P+(v^_&(x^v))+E[7]+1735328473&4294967295,P=x+(A<<14&4294967295|A>>>18),A=_+(x^v&(P^x))+E[12]+2368359562&4294967295,_=P+(A<<20&4294967295|A>>>12),A=v+(_^P^x)+E[5]+4294588738&4294967295,v=_+(A<<4&4294967295|A>>>28),A=x+(v^_^P)+E[8]+2272392833&4294967295,x=v+(A<<11&4294967295|A>>>21),A=P+(x^v^_)+E[11]+1839030562&4294967295,P=x+(A<<16&4294967295|A>>>16),A=_+(P^x^v)+E[14]+4259657740&4294967295,_=P+(A<<23&4294967295|A>>>9),A=v+(_^P^x)+E[1]+2763975236&4294967295,v=_+(A<<4&4294967295|A>>>28),A=x+(v^_^P)+E[4]+1272893353&4294967295,x=v+(A<<11&4294967295|A>>>21),A=P+(x^v^_)+E[7]+4139469664&4294967295,P=x+(A<<16&4294967295|A>>>16),A=_+(P^x^v)+E[10]+3200236656&4294967295,_=P+(A<<23&4294967295|A>>>9),A=v+(_^P^x)+E[13]+681279174&4294967295,v=_+(A<<4&4294967295|A>>>28),A=x+(v^_^P)+E[0]+3936430074&4294967295,x=v+(A<<11&4294967295|A>>>21),A=P+(x^v^_)+E[3]+3572445317&4294967295,P=x+(A<<16&4294967295|A>>>16),A=_+(P^x^v)+E[6]+76029189&4294967295,_=P+(A<<23&4294967295|A>>>9),A=v+(_^P^x)+E[9]+3654602809&4294967295,v=_+(A<<4&4294967295|A>>>28),A=x+(v^_^P)+E[12]+3873151461&4294967295,x=v+(A<<11&4294967295|A>>>21),A=P+(x^v^_)+E[15]+530742520&4294967295,P=x+(A<<16&4294967295|A>>>16),A=_+(P^x^v)+E[2]+3299628645&4294967295,_=P+(A<<23&4294967295|A>>>9),A=v+(P^(_|~x))+E[0]+4096336452&4294967295,v=_+(A<<6&4294967295|A>>>26),A=x+(_^(v|~P))+E[7]+1126891415&4294967295,x=v+(A<<10&4294967295|A>>>22),A=P+(v^(x|~_))+E[14]+2878612391&4294967295,P=x+(A<<15&4294967295|A>>>17),A=_+(x^(P|~v))+E[5]+4237533241&4294967295,_=P+(A<<21&4294967295|A>>>11),A=v+(P^(_|~x))+E[12]+1700485571&4294967295,v=_+(A<<6&4294967295|A>>>26),A=x+(_^(v|~P))+E[3]+2399980690&4294967295,x=v+(A<<10&4294967295|A>>>22),A=P+(v^(x|~_))+E[10]+4293915773&4294967295,P=x+(A<<15&4294967295|A>>>17),A=_+(x^(P|~v))+E[1]+2240044497&4294967295,_=P+(A<<21&4294967295|A>>>11),A=v+(P^(_|~x))+E[8]+1873313359&4294967295,v=_+(A<<6&4294967295|A>>>26),A=x+(_^(v|~P))+E[15]+4264355552&4294967295,x=v+(A<<10&4294967295|A>>>22),A=P+(v^(x|~_))+E[6]+2734768916&4294967295,P=x+(A<<15&4294967295|A>>>17),A=_+(x^(P|~v))+E[13]+1309151649&4294967295,_=P+(A<<21&4294967295|A>>>11),A=v+(P^(_|~x))+E[4]+4149444226&4294967295,v=_+(A<<6&4294967295|A>>>26),A=x+(_^(v|~P))+E[11]+3174756917&4294967295,x=v+(A<<10&4294967295|A>>>22),A=P+(v^(x|~_))+E[2]+718787259&4294967295,P=x+(A<<15&4294967295|A>>>17),A=_+(x^(P|~v))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+v&4294967295,T.g[1]=T.g[1]+(P+(A<<21&4294967295|A>>>11))&4294967295,T.g[2]=T.g[2]+P&4294967295,T.g[3]=T.g[3]+x&4294967295}r.prototype.u=function(T,v){v===void 0&&(v=T.length);for(var _=v-this.blockSize,E=this.B,P=this.h,x=0;x<v;){if(P==0)for(;x<=_;)i(this,T,x),x+=this.blockSize;if(typeof T=="string"){for(;x<v;)if(E[P++]=T.charCodeAt(x++),P==this.blockSize){i(this,E),P=0;break}}else for(;x<v;)if(E[P++]=T[x++],P==this.blockSize){i(this,E),P=0;break}}this.h=P,this.o+=v},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var v=1;v<T.length-8;++v)T[v]=0;var _=8*this.o;for(v=T.length-8;v<T.length;++v)T[v]=_&255,_/=256;for(this.u(T),T=Array(16),v=_=0;4>v;++v)for(var E=0;32>E;E+=8)T[_++]=this.g[v]>>>E&255;return T};function s(T,v){var _=l;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=v(T)}function o(T,v){this.h=v;for(var _=[],E=!0,P=T.length-1;0<=P;P--){var x=T[P]|0;E&&x==v||(_[P]=x,E=!1)}this.g=_}var l={};function u(T){return-128<=T&&128>T?s(T,function(v){return new o([v|0],0>v?-1:0)}):new o([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return m;if(0>T)return D(c(-T));for(var v=[],_=1,E=0;T>=_;E++)v[E]=T/_|0,_*=4294967296;return new o(v,0)}function f(T,v){if(T.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(T.charAt(0)=="-")return D(f(T.substring(1),v));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=c(Math.pow(v,8)),E=m,P=0;P<T.length;P+=8){var x=Math.min(8,T.length-P),A=parseInt(T.substring(P,P+x),v);8>x?(x=c(Math.pow(v,x)),E=E.j(x).add(c(A))):(E=E.j(_),E=E.add(c(A)))}return E}var m=u(0),g=u(1),R=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-D(this).m();for(var T=0,v=1,_=0;_<this.g.length;_++){var E=this.i(_);T+=(0<=E?E:4294967296+E)*v,v*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(C(this))return"0";if(k(this))return"-"+D(this).toString(T);for(var v=c(Math.pow(T,6)),_=this,E="";;){var P=V(_,v).g;_=I(_,P.j(v));var x=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=P,C(_))return x+E;for(;6>x.length;)x="0"+x;E=x+E}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function C(T){if(T.h!=0)return!1;for(var v=0;v<T.g.length;v++)if(T.g[v]!=0)return!1;return!0}function k(T){return T.h==-1}t.l=function(T){return T=I(this,T),k(T)?-1:C(T)?0:1};function D(T){for(var v=T.g.length,_=[],E=0;E<v;E++)_[E]=~T.g[E];return new o(_,~T.h).add(g)}t.abs=function(){return k(this)?D(this):this},t.add=function(T){for(var v=Math.max(this.g.length,T.g.length),_=[],E=0,P=0;P<=v;P++){var x=E+(this.i(P)&65535)+(T.i(P)&65535),A=(x>>>16)+(this.i(P)>>>16)+(T.i(P)>>>16);E=A>>>16,x&=65535,A&=65535,_[P]=A<<16|x}return new o(_,_[_.length-1]&-2147483648?-1:0)};function I(T,v){return T.add(D(v))}t.j=function(T){if(C(this)||C(T))return m;if(k(this))return k(T)?D(this).j(D(T)):D(D(this).j(T));if(k(T))return D(this.j(D(T)));if(0>this.l(R)&&0>T.l(R))return c(this.m()*T.m());for(var v=this.g.length+T.g.length,_=[],E=0;E<2*v;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(var P=0;P<T.g.length;P++){var x=this.i(E)>>>16,A=this.i(E)&65535,be=T.i(P)>>>16,je=T.i(P)&65535;_[2*E+2*P]+=A*je,w(_,2*E+2*P),_[2*E+2*P+1]+=x*je,w(_,2*E+2*P+1),_[2*E+2*P+1]+=A*be,w(_,2*E+2*P+1),_[2*E+2*P+2]+=x*be,w(_,2*E+2*P+2)}for(E=0;E<v;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=v;E<2*v;E++)_[E]=0;return new o(_,0)};function w(T,v){for(;(T[v]&65535)!=T[v];)T[v+1]+=T[v]>>>16,T[v]&=65535,v++}function S(T,v){this.g=T,this.h=v}function V(T,v){if(C(v))throw Error("division by zero");if(C(T))return new S(m,m);if(k(T))return v=V(D(T),v),new S(D(v.g),D(v.h));if(k(v))return v=V(T,D(v)),new S(D(v.g),v.h);if(30<T.g.length){if(k(T)||k(v))throw Error("slowDivide_ only works with positive integers.");for(var _=g,E=v;0>=E.l(T);)_=j(_),E=j(E);var P=M(_,1),x=M(E,1);for(E=M(E,2),_=M(_,2);!C(E);){var A=x.add(E);0>=A.l(T)&&(P=P.add(_),x=A),E=M(E,1),_=M(_,1)}return v=I(T,P.j(v)),new S(P,v)}for(P=m;0<=T.l(v);){for(_=Math.max(1,Math.floor(T.m()/v.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),x=c(_),A=x.j(v);k(A)||0<A.l(T);)_-=E,x=c(_),A=x.j(v);C(x)&&(x=g),P=P.add(x),T=I(T,A)}return new S(P,T)}t.A=function(T){return V(this,T).h},t.and=function(T){for(var v=Math.max(this.g.length,T.g.length),_=[],E=0;E<v;E++)_[E]=this.i(E)&T.i(E);return new o(_,this.h&T.h)},t.or=function(T){for(var v=Math.max(this.g.length,T.g.length),_=[],E=0;E<v;E++)_[E]=this.i(E)|T.i(E);return new o(_,this.h|T.h)},t.xor=function(T){for(var v=Math.max(this.g.length,T.g.length),_=[],E=0;E<v;E++)_[E]=this.i(E)^T.i(E);return new o(_,this.h^T.h)};function j(T){for(var v=T.g.length+1,_=[],E=0;E<v;E++)_[E]=T.i(E)<<1|T.i(E-1)>>>31;return new o(_,T.h)}function M(T,v){var _=v>>5;v%=32;for(var E=T.g.length-_,P=[],x=0;x<E;x++)P[x]=0<v?T.i(x+_)>>>v|T.i(x+_+1)<<32-v:T.i(x+_);return new o(P,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,fE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,Kr=o}).apply(typeof ny<"u"?ny:typeof self<"u"?self:typeof window<"u"?window:{});var $a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pE,qs,mE,ll,ed,gE,yE,vE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof $a=="object"&&$a];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var d=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var N=a[y];if(!(N in d))break e;d=d[N]}a=a[a.length-1],y=d[a],h=h(y),h!=y&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var d=0,y=!1,N={next:function(){if(!y&&d<a.length){var L=d++;return{value:h(L,a[L]),done:!1}}return y=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function m(a,h,d){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,y),a.apply(h,N)}}return function(){return a.apply(h,arguments)}}function g(a,h,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function R(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var y=d.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function C(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(y,N,L){for(var $=Array(arguments.length-2),he=2;he<arguments.length;he++)$[he-2]=arguments[he];return h.prototype[N].apply(y,$)}}function k(a){const h=a.length;if(0<h){const d=Array(h);for(let y=0;y<h;y++)d[y]=a[y];return d}return[]}function D(a,h){for(let d=1;d<arguments.length;d++){const y=arguments[d];if(u(y)){const N=a.length||0,L=y.length||0;a.length=N+L;for(let $=0;$<L;$++)a[N+$]=y[$]}else a.push(y)}}class I{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function w(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function V(a){return V[" "](a),a}V[" "]=function(){};var j=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function M(a,h,d){for(const y in a)h.call(d,a[y],y,a)}function T(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function v(a){const h={};for(const d in a)h[d]=a[d];return h}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,h){let d,y;for(let N=1;N<arguments.length;N++){y=arguments[N];for(d in y)a[d]=y[d];for(let L=0;L<_.length;L++)d=_[L],Object.prototype.hasOwnProperty.call(y,d)&&(a[d]=y[d])}}function P(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function x(a){l.setTimeout(()=>{throw a},0)}function A(){var a=G;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class be{constructor(){this.h=this.g=null}add(h,d){const y=je.get();y.set(h,d),this.h?this.h.next=y:this.g=y,this.h=y}}var je=new I(()=>new Dt,a=>a.reset());class Dt{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ot,B=!1,G=new be,J=()=>{const a=l.Promise.resolve(void 0);Ot=()=>{a.then(W)}};var W=()=>{for(var a;a=A();){try{a.h.call(a.g)}catch(d){x(d)}var h=je;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}B=!1};function X(){this.s=this.s,this.C=this.C}X.prototype.s=!1,X.prototype.ma=function(){this.s||(this.s=!0,this.N())},X.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function te(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}te.prototype.h=function(){this.defaultPrevented=!0};var _e=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a}();function at(a,h){if(te.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(j){e:{try{V(h.nodeName);var N=!0;break e}catch{}N=!1}N||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:It[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&at.aa.h.call(this)}}C(at,te);var It={2:"touch",3:"pen",4:"mouse"};at.prototype.h=function(){at.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var St="closure_listenable_"+(1e6*Math.random()|0),Fn=0;function di(a,h,d,y,N){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!y,this.ha=N,this.key=++Fn,this.da=this.fa=!1}function Vt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Un(a){this.src=a,this.g={},this.h=0}Un.prototype.add=function(a,h,d,y,N){var L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);var $=Fu(a,h,y,N);return-1<$?(h=a[$],d||(h.fa=!1)):(h=new di(h,this.src,L,!!y,N),h.fa=d,a.push(h)),h};function ju(a,h){var d=h.type;if(d in a.g){var y=a.g[d],N=Array.prototype.indexOf.call(y,h,void 0),L;(L=0<=N)&&Array.prototype.splice.call(y,N,1),L&&(Vt(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Fu(a,h,d,y){for(var N=0;N<a.length;++N){var L=a[N];if(!L.da&&L.listener==h&&L.capture==!!d&&L.ha==y)return N}return-1}var Uu="closure_lm_"+(1e6*Math.random()|0),$u={};function up(a,h,d,y,N){if(Array.isArray(h)){for(var L=0;L<h.length;L++)up(a,h[L],d,y,N);return null}return d=dp(d),a&&a[St]?a.K(h,d,c(y)?!!y.capture:!1,N):B0(a,h,d,!1,y,N)}function B0(a,h,d,y,N,L){if(!h)throw Error("Invalid event type");var $=c(N)?!!N.capture:!!N,he=zu(a);if(he||(a[Uu]=he=new Un(a)),d=he.add(h,d,y,$,L),d.proxy)return d;if(y=z0(),d.proxy=y,y.src=a,y.listener=d,a.addEventListener)_e||(N=$),N===void 0&&(N=!1),a.addEventListener(h.toString(),y,N);else if(a.attachEvent)a.attachEvent(hp(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return d}function z0(){function a(d){return h.call(a.src,a.listener,d)}const h=W0;return a}function cp(a,h,d,y,N){if(Array.isArray(h))for(var L=0;L<h.length;L++)cp(a,h[L],d,y,N);else y=c(y)?!!y.capture:!!y,d=dp(d),a&&a[St]?(a=a.i,h=String(h).toString(),h in a.g&&(L=a.g[h],d=Fu(L,d,y,N),-1<d&&(Vt(L[d]),Array.prototype.splice.call(L,d,1),L.length==0&&(delete a.g[h],a.h--)))):a&&(a=zu(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Fu(h,d,y,N)),(d=-1<a?h[a]:null)&&Bu(d))}function Bu(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[St])ju(h.i,a);else{var d=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(d,y,a.capture):h.detachEvent?h.detachEvent(hp(d),y):h.addListener&&h.removeListener&&h.removeListener(y),(d=zu(h))?(ju(d,a),d.h==0&&(d.src=null,h[Uu]=null)):Vt(a)}}}function hp(a){return a in $u?$u[a]:$u[a]="on"+a}function W0(a,h){if(a.da)a=!0;else{h=new at(h,this);var d=a.listener,y=a.ha||a.src;a.fa&&Bu(a),a=d.call(y,h)}return a}function zu(a){return a=a[Uu],a instanceof Un?a:null}var Wu="__closure_events_fn_"+(1e9*Math.random()>>>0);function dp(a){return typeof a=="function"?a:(a[Wu]||(a[Wu]=function(h){return a.handleEvent(h)}),a[Wu])}function Ye(){X.call(this),this.i=new Un(this),this.M=this,this.F=null}C(Ye,X),Ye.prototype[St]=!0,Ye.prototype.removeEventListener=function(a,h,d,y){cp(this,a,h,d,y)};function lt(a,h){var d,y=a.F;if(y)for(d=[];y;y=y.F)d.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new te(h,a);else if(h instanceof te)h.target=h.target||a;else{var N=h;h=new te(y,a),E(h,N)}if(N=!0,d)for(var L=d.length-1;0<=L;L--){var $=h.g=d[L];N=oa($,y,!0,h)&&N}if($=h.g=a,N=oa($,y,!0,h)&&N,N=oa($,y,!1,h)&&N,d)for(L=0;L<d.length;L++)$=h.g=d[L],N=oa($,y,!1,h)&&N}Ye.prototype.N=function(){if(Ye.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],y=0;y<d.length;y++)Vt(d[y]);delete a.g[h],a.h--}}this.F=null},Ye.prototype.K=function(a,h,d,y){return this.i.add(String(a),h,!1,d,y)},Ye.prototype.L=function(a,h,d,y){return this.i.add(String(a),h,!0,d,y)};function oa(a,h,d,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var N=!0,L=0;L<h.length;++L){var $=h[L];if($&&!$.da&&$.capture==d){var he=$.listener,Be=$.ha||$.src;$.fa&&ju(a.i,$),N=he.call(Be,y)!==!1&&N}}return N&&!y.defaultPrevented}function fp(a,h,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function pp(a){a.g=fp(()=>{a.g=null,a.i&&(a.i=!1,pp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class H0 extends X{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:pp(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vs(a){X.call(this),this.h=a,this.g={}}C(vs,X);var mp=[];function gp(a){M(a.g,function(h,d){this.g.hasOwnProperty(d)&&Bu(h)},a),a.g={}}vs.prototype.N=function(){vs.aa.N.call(this),gp(this)},vs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hu=l.JSON.stringify,q0=l.JSON.parse,K0=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function qu(){}qu.prototype.h=null;function yp(a){return a.h||(a.h=a.i())}function vp(){}var _s={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ku(){te.call(this,"d")}C(Ku,te);function Gu(){te.call(this,"c")}C(Gu,te);var Vr={},_p=null;function aa(){return _p=_p||new Ye}Vr.La="serverreachability";function wp(a){te.call(this,Vr.La,a)}C(wp,te);function ws(a){const h=aa();lt(h,new wp(h))}Vr.STAT_EVENT="statevent";function Ep(a,h){te.call(this,Vr.STAT_EVENT,a),this.stat=h}C(Ep,te);function ut(a){const h=aa();lt(h,new Ep(h,a))}Vr.Ma="timingevent";function Tp(a,h){te.call(this,Vr.Ma,a),this.size=h}C(Tp,te);function Es(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Ts(){this.g=!0}Ts.prototype.xa=function(){this.g=!1};function G0(a,h,d,y,N,L){a.info(function(){if(a.g)if(L)for(var $="",he=L.split("&"),Be=0;Be<he.length;Be++){var ae=he[Be].split("=");if(1<ae.length){var Xe=ae[0];ae=ae[1];var Je=Xe.split("_");$=2<=Je.length&&Je[1]=="type"?$+(Xe+"="+ae+"&"):$+(Xe+"=redacted&")}}else $=null;else $=L;return"XMLHTTP REQ ("+y+") [attempt "+N+"]: "+h+`
`+d+`
`+$})}function Q0(a,h,d,y,N,L,$){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+N+"]: "+h+`
`+d+`
`+L+" "+$})}function fi(a,h,d,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+X0(a,d)+(y?" "+y:"")})}function Y0(a,h){a.info(function(){return"TIMEOUT: "+h})}Ts.prototype.info=function(){};function X0(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var y=d[a];if(!(2>y.length)){var N=y[1];if(Array.isArray(N)&&!(1>N.length)){var L=N[0];if(L!="noop"&&L!="stop"&&L!="close")for(var $=1;$<N.length;$++)N[$]=""}}}}return Hu(d)}catch{return h}}var la={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ip={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Qu;function ua(){}C(ua,qu),ua.prototype.g=function(){return new XMLHttpRequest},ua.prototype.i=function(){return{}},Qu=new ua;function $n(a,h,d,y){this.j=a,this.i=h,this.l=d,this.R=y||1,this.U=new vs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Sp}function Sp(){this.i=null,this.g="",this.h=!1}var Ap={},Yu={};function Xu(a,h,d){a.L=1,a.v=fa(mn(h)),a.m=d,a.P=!0,Rp(a,null)}function Rp(a,h){a.F=Date.now(),ca(a),a.A=mn(a.v);var d=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),Up(d.i,"t",y),a.C=0,d=a.j.J,a.h=new Sp,a.g=im(a.j,d?h:null,!a.m),0<a.O&&(a.M=new H0(g(a.Y,a,a.g),a.O)),h=a.U,d=a.g,y=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(mp[0]=N.toString()),N=mp);for(var L=0;L<N.length;L++){var $=up(d,N[L],y||h.handleEvent,!1,h.h||h);if(!$)break;h.g[$.key]=$}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),ws(),G0(a.i,a.u,a.A,a.l,a.R,a.m)}$n.prototype.ca=function(a){a=a.target;const h=this.M;h&&gn(a)==3?h.j():this.Y(a)},$n.prototype.Y=function(a){try{if(a==this.g)e:{const Je=gn(this.g);var h=this.g.Ba();const gi=this.g.Z();if(!(3>Je)&&(Je!=3||this.g&&(this.h.h||this.g.oa()||Kp(this.g)))){this.J||Je!=4||h==7||(h==8||0>=gi?ws(3):ws(2)),Ju(this);var d=this.g.Z();this.X=d;t:if(Cp(this)){var y=Kp(this.g);a="";var N=y.length,L=gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Lr(this),Is(this);var $="";break t}this.h.i=new l.TextDecoder}for(h=0;h<N;h++)this.h.h=!0,a+=this.h.i.decode(y[h],{stream:!(L&&h==N-1)});y.length=0,this.h.g+=a,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=d==200,Q0(this.i,this.u,this.A,this.l,this.R,Je,d),this.o){if(this.T&&!this.K){t:{if(this.g){var he,Be=this.g;if((he=Be.g?Be.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(he)){var ae=he;break t}}ae=null}if(d=ae)fi(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Zu(this,d);else{this.o=!1,this.s=3,ut(12),Lr(this),Is(this);break e}}if(this.P){d=!0;let Bt;for(;!this.J&&this.C<$.length;)if(Bt=J0(this,$),Bt==Yu){Je==4&&(this.s=4,ut(14),d=!1),fi(this.i,this.l,null,"[Incomplete Response]");break}else if(Bt==Ap){this.s=4,ut(15),fi(this.i,this.l,$,"[Invalid Chunk]"),d=!1;break}else fi(this.i,this.l,Bt,null),Zu(this,Bt);if(Cp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Je!=4||$.length!=0||this.h.h||(this.s=1,ut(16),d=!1),this.o=this.o&&d,!d)fi(this.i,this.l,$,"[Invalid Chunked Response]"),Lr(this),Is(this);else if(0<$.length&&!this.W){this.W=!0;var Xe=this.j;Xe.g==this&&Xe.ba&&!Xe.M&&(Xe.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),sc(Xe),Xe.M=!0,ut(11))}}else fi(this.i,this.l,$,null),Zu(this,$);Je==4&&Lr(this),this.o&&!this.J&&(Je==4?em(this.j,this):(this.o=!1,ca(this)))}else mT(this.g),d==400&&0<$.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),Lr(this),Is(this)}}}catch{}finally{}};function Cp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function J0(a,h){var d=a.C,y=h.indexOf(`
`,d);return y==-1?Yu:(d=Number(h.substring(d,y)),isNaN(d)?Ap:(y+=1,y+d>h.length?Yu:(h=h.slice(y,y+d),a.C=y+d,h)))}$n.prototype.cancel=function(){this.J=!0,Lr(this)};function ca(a){a.S=Date.now()+a.I,Pp(a,a.I)}function Pp(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Es(g(a.ba,a),h)}function Ju(a){a.B&&(l.clearTimeout(a.B),a.B=null)}$n.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Y0(this.i,this.A),this.L!=2&&(ws(),ut(17)),Lr(this),this.s=2,Is(this)):Pp(this,this.S-a)};function Is(a){a.j.G==0||a.J||em(a.j,a)}function Lr(a){Ju(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,gp(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Zu(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||ec(d.h,a))){if(!a.K&&ec(d.h,a)&&d.G==3){try{var y=d.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var N=y;if(N[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)_a(d),ya(d);else break e;ic(d),ut(18)}}else d.za=N[1],0<d.za-d.T&&37500>N[2]&&d.F&&d.v==0&&!d.C&&(d.C=Es(g(d.Za,d),6e3));if(1>=Np(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else br(d,11)}else if((a.K||d.g==a)&&_a(d),!w(h))for(N=d.Da.g.parse(h),h=0;h<N.length;h++){let ae=N[h];if(d.T=ae[0],ae=ae[1],d.G==2)if(ae[0]=="c"){d.K=ae[1],d.ia=ae[2];const Xe=ae[3];Xe!=null&&(d.la=Xe,d.j.info("VER="+d.la));const Je=ae[4];Je!=null&&(d.Aa=Je,d.j.info("SVER="+d.Aa));const gi=ae[5];gi!=null&&typeof gi=="number"&&0<gi&&(y=1.5*gi,d.L=y,d.j.info("backChannelRequestTimeoutMs_="+y)),y=d;const Bt=a.g;if(Bt){const Ea=Bt.g?Bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ea){var L=y.h;L.g||Ea.indexOf("spdy")==-1&&Ea.indexOf("quic")==-1&&Ea.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(tc(L,L.h),L.h=null))}if(y.D){const oc=Bt.g?Bt.g.getResponseHeader("X-HTTP-Session-Id"):null;oc&&(y.ya=oc,fe(y.I,y.D,oc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),y=d;var $=a;if(y.qa=rm(y,y.J?y.ia:null,y.W),$.K){Dp(y.h,$);var he=$,Be=y.L;Be&&(he.I=Be),he.B&&(Ju(he),ca(he)),y.g=$}else Jp(y);0<d.i.length&&va(d)}else ae[0]!="stop"&&ae[0]!="close"||br(d,7);else d.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?br(d,7):rc(d):ae[0]!="noop"&&d.l&&d.l.ta(ae),d.v=0)}}ws(4)}catch{}}var Z0=class{constructor(a,h){this.g=a,this.map=h}};function kp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function xp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Np(a){return a.h?1:a.g?a.g.size:0}function ec(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function tc(a,h){a.g?a.g.add(h):a.h=h}function Dp(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}kp.prototype.cancel=function(){if(this.i=Op(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Op(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return k(a.i)}function eT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],d=a.length,y=0;y<d;y++)h.push(a[y]);return h}h=[],d=0;for(y in a)h[d++]=a[y];return h}function tT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const y in a)h[d++]=y;return h}}}function Vp(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=tT(a),y=eT(a),N=y.length,L=0;L<N;L++)h.call(void 0,y[L],d&&d[L],a)}var Lp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nT(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var y=a[d].indexOf("="),N=null;if(0<=y){var L=a[d].substring(0,y);N=a[d].substring(y+1)}else L=a[d];h(L,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Mr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Mr){this.h=a.h,ha(this,a.j),this.o=a.o,this.g=a.g,da(this,a.s),this.l=a.l;var h=a.i,d=new Rs;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),Mp(this,d),this.m=a.m}else a&&(h=String(a).match(Lp))?(this.h=!1,ha(this,h[1]||"",!0),this.o=Ss(h[2]||""),this.g=Ss(h[3]||"",!0),da(this,h[4]),this.l=Ss(h[5]||"",!0),Mp(this,h[6]||"",!0),this.m=Ss(h[7]||"")):(this.h=!1,this.i=new Rs(null,this.h))}Mr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(As(h,bp,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(As(h,bp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(As(d,d.charAt(0)=="/"?sT:iT,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",As(d,aT)),a.join("")};function mn(a){return new Mr(a)}function ha(a,h,d){a.j=d?Ss(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function da(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Mp(a,h,d){h instanceof Rs?(a.i=h,lT(a.i,a.h)):(d||(h=As(h,oT)),a.i=new Rs(h,a.h))}function fe(a,h,d){a.i.set(h,d)}function fa(a){return fe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ss(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function As(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,rT),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function rT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var bp=/[#\/\?@]/g,iT=/[#\?:]/g,sT=/[#\?]/g,oT=/[#\?@]/g,aT=/#/g;function Rs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Bn(a){a.g||(a.g=new Map,a.h=0,a.i&&nT(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Rs.prototype,t.add=function(a,h){Bn(this),this.i=null,a=pi(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function jp(a,h){Bn(a),h=pi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Fp(a,h){return Bn(a),h=pi(a,h),a.g.has(h)}t.forEach=function(a,h){Bn(this),this.g.forEach(function(d,y){d.forEach(function(N){a.call(h,N,y,this)},this)},this)},t.na=function(){Bn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let y=0;y<h.length;y++){const N=a[y];for(let L=0;L<N.length;L++)d.push(h[y])}return d},t.V=function(a){Bn(this);let h=[];if(typeof a=="string")Fp(this,a)&&(h=h.concat(this.g.get(pi(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return Bn(this),this.i=null,a=pi(this,a),Fp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Up(a,h,d){jp(a,h),0<d.length&&(a.i=null,a.g.set(pi(a,h),k(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var y=h[d];const L=encodeURIComponent(String(y)),$=this.V(y);for(y=0;y<$.length;y++){var N=L;$[y]!==""&&(N+="="+encodeURIComponent(String($[y]))),a.push(N)}}return this.i=a.join("&")};function pi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function lT(a,h){h&&!a.j&&(Bn(a),a.i=null,a.g.forEach(function(d,y){var N=y.toLowerCase();y!=N&&(jp(this,y),Up(this,N,d))},a)),a.j=h}function uT(a,h){const d=new Ts;if(l.Image){const y=new Image;y.onload=R(zn,d,"TestLoadImage: loaded",!0,h,y),y.onerror=R(zn,d,"TestLoadImage: error",!1,h,y),y.onabort=R(zn,d,"TestLoadImage: abort",!1,h,y),y.ontimeout=R(zn,d,"TestLoadImage: timeout",!1,h,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function cT(a,h){const d=new Ts,y=new AbortController,N=setTimeout(()=>{y.abort(),zn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(L=>{clearTimeout(N),L.ok?zn(d,"TestPingServer: ok",!0,h):zn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),zn(d,"TestPingServer: error",!1,h)})}function zn(a,h,d,y,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),y(d)}catch{}}function hT(){this.g=new K0}function dT(a,h,d){const y=d||"";try{Vp(a,function(N,L){let $=N;c(N)&&($=Hu(N)),h.push(y+L+"="+encodeURIComponent($))})}catch(N){throw h.push(y+"type="+encodeURIComponent("_badmap")),N}}function pa(a){this.l=a.Ub||null,this.j=a.eb||!1}C(pa,qu),pa.prototype.g=function(){return new ma(this.l,this.j)},pa.prototype.i=function(a){return function(){return a}}({});function ma(a,h){Ye.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(ma,Ye),t=ma.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Ps(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ps(this)),this.g&&(this.readyState=3,Ps(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;$p(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function $p(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Cs(this):Ps(this),this.readyState==3&&$p(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Cs(this))},t.Qa=function(a){this.g&&(this.response=a,Cs(this))},t.ga=function(){this.g&&Cs(this)};function Cs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ps(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Ps(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ma.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Bp(a){let h="";return M(a,function(d,y){h+=y,h+=":",h+=d,h+=`\r
`}),h}function nc(a,h,d){e:{for(y in d){var y=!1;break e}y=!0}y||(d=Bp(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):fe(a,h,d))}function Se(a){Ye.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Se,Ye);var fT=/^https?$/i,pT=["POST","PUT"];t=Se.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Qu.g(),this.v=this.o?yp(this.o):yp(Qu),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(L){zp(this,L);return}if(a=d||"",d=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var N in y)d.set(N,y[N]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const L of y.keys())d.set(L,y.get(L));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(d.keys()).find(L=>L.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(pT,h,void 0))||y||N||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,$]of d)this.g.setRequestHeader(L,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{qp(this),this.u=!0,this.g.send(a),this.u=!1}catch(L){zp(this,L)}};function zp(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Wp(a),ga(a)}function Wp(a){a.A||(a.A=!0,lt(a,"complete"),lt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,lt(this,"complete"),lt(this,"abort"),ga(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ga(this,!0)),Se.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Hp(this):this.bb())},t.bb=function(){Hp(this)};function Hp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||gn(a)!=4||a.Z()!=2)){if(a.u&&gn(a)==4)fp(a.Ea,0,a);else if(lt(a,"readystatechange"),gn(a)==4){a.h=!1;try{const $=a.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var y;if(y=$===0){var N=String(a.D).match(Lp)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),y=!fT.test(N?N.toLowerCase():"")}d=y}if(d)lt(a,"complete"),lt(a,"success");else{a.m=6;try{var L=2<gn(a)?a.g.statusText:""}catch{L=""}a.l=L+" ["+a.Z()+"]",Wp(a)}}finally{ga(a)}}}}function ga(a,h){if(a.g){qp(a);const d=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||lt(a,"ready");try{d.onreadystatechange=y}catch{}}}function qp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function gn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<gn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),q0(h)}};function Kp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function mT(a){const h={};a=(a.g&&2<=gn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(w(a[y]))continue;var d=P(a[y]);const N=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const L=h[N]||[];h[N]=L,L.push(d)}T(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ks(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Gp(a){this.Aa=0,this.i=[],this.j=new Ts,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ks("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ks("baseRetryDelayMs",5e3,a),this.cb=ks("retryDelaySeedMs",1e4,a),this.Wa=ks("forwardChannelMaxRetries",2,a),this.wa=ks("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new kp(a&&a.concurrentRequestLimit),this.Da=new hT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Gp.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,y){ut(0),this.W=a,this.H=h||{},d&&y!==void 0&&(this.H.OSID=d,this.H.OAID=y),this.F=this.X,this.I=rm(this,null,this.W),va(this)};function rc(a){if(Qp(a),a.G==3){var h=a.U++,d=mn(a.I);if(fe(d,"SID",a.K),fe(d,"RID",h),fe(d,"TYPE","terminate"),xs(a,d),h=new $n(a,a.j,h),h.L=2,h.v=fa(mn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=im(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ca(h)}nm(a)}function ya(a){a.g&&(sc(a),a.g.cancel(),a.g=null)}function Qp(a){ya(a),a.u&&(l.clearTimeout(a.u),a.u=null),_a(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function va(a){if(!xp(a.h)&&!a.s){a.s=!0;var h=a.Ga;Ot||J(),B||(Ot(),B=!0),G.add(h,a),a.B=0}}function gT(a,h){return Np(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Es(g(a.Ga,a,h),tm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new $n(this,this.j,a);let L=this.o;if(this.S&&(L?(L=v(L),E(L,this.S)):L=this.S),this.m!==null||this.O||(N.H=L,L=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var y=this.i[d];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Xp(this,N,h),d=mn(this.I),fe(d,"RID",a),fe(d,"CVER",22),this.D&&fe(d,"X-HTTP-Session-Id",this.D),xs(this,d),L&&(this.O?h="headers="+encodeURIComponent(String(Bp(L)))+"&"+h:this.m&&nc(d,this.m,L)),tc(this.h,N),this.Ua&&fe(d,"TYPE","init"),this.P?(fe(d,"$req",h),fe(d,"SID","null"),N.T=!0,Xu(N,d,null)):Xu(N,d,h),this.G=2}}else this.G==3&&(a?Yp(this,a):this.i.length==0||xp(this.h)||Yp(this))};function Yp(a,h){var d;h?d=h.l:d=a.U++;const y=mn(a.I);fe(y,"SID",a.K),fe(y,"RID",d),fe(y,"AID",a.T),xs(a,y),a.m&&a.o&&nc(y,a.m,a.o),d=new $n(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Xp(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),tc(a.h,d),Xu(d,y,h)}function xs(a,h){a.H&&M(a.H,function(d,y){fe(h,y,d)}),a.l&&Vp({},function(d,y){fe(h,y,d)})}function Xp(a,h,d){d=Math.min(a.i.length,d);var y=a.l?g(a.l.Na,a.l,a):null;e:{var N=a.i;let L=-1;for(;;){const $=["count="+d];L==-1?0<d?(L=N[0].g,$.push("ofs="+L)):L=0:$.push("ofs="+L);let he=!0;for(let Be=0;Be<d;Be++){let ae=N[Be].g;const Xe=N[Be].map;if(ae-=L,0>ae)L=Math.max(0,N[Be].g-100),he=!1;else try{dT(Xe,$,"req"+ae+"_")}catch{y&&y(Xe)}}if(he){y=$.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,y}function Jp(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Ot||J(),B||(Ot(),B=!0),G.add(h,a),a.v=0}}function ic(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Es(g(a.Fa,a),tm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Zp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Es(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),ya(this),Zp(this))};function sc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Zp(a){a.g=new $n(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=mn(a.qa);fe(h,"RID","rpc"),fe(h,"SID",a.K),fe(h,"AID",a.T),fe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&fe(h,"TO",a.ja),fe(h,"TYPE","xmlhttp"),xs(a,h),a.m&&a.o&&nc(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=fa(mn(h)),d.m=null,d.P=!0,Rp(d,a)}t.Za=function(){this.C!=null&&(this.C=null,ya(this),ic(this),ut(19))};function _a(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function em(a,h){var d=null;if(a.g==h){_a(a),sc(a),a.g=null;var y=2}else if(ec(a.h,h))d=h.D,Dp(a.h,h),y=1;else return;if(a.G!=0){if(h.o)if(y==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var N=a.B;y=aa(),lt(y,new Tp(y,d)),va(a)}else Jp(a);else if(N=h.s,N==3||N==0&&0<h.X||!(y==1&&gT(a,h)||y==2&&ic(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),N){case 1:br(a,5);break;case 4:br(a,10);break;case 3:br(a,6);break;default:br(a,2)}}}function tm(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function br(a,h){if(a.j.info("Error code "+h),h==2){var d=g(a.fb,a),y=a.Xa;const N=!y;y=new Mr(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ha(y,"https"),fa(y),N?uT(y.toString(),d):cT(y.toString(),d)}else ut(2);a.G=0,a.l&&a.l.sa(h),nm(a),Qp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function nm(a){if(a.G=0,a.ka=[],a.l){const h=Op(a.h);(h.length!=0||a.i.length!=0)&&(D(a.ka,h),D(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function rm(a,h,d){var y=d instanceof Mr?mn(d):new Mr(d);if(y.g!="")h&&(y.g=h+"."+y.g),da(y,y.s);else{var N=l.location;y=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;var L=new Mr(null);y&&ha(L,y),h&&(L.g=h),N&&da(L,N),d&&(L.l=d),y=L}return d=a.D,h=a.ya,d&&h&&fe(y,d,h),fe(y,"VER",a.la),xs(a,y),y}function im(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Se(new pa({eb:d})):new Se(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function sm(){}t=sm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function wa(){}wa.prototype.g=function(a,h){return new At(a,h)};function At(a,h){Ye.call(this),this.g=new Gp(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!w(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!w(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new mi(this)}C(At,Ye),At.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){rc(this.g)},At.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Hu(a),a=d);h.i.push(new Z0(h.Ya++,a)),h.G==3&&va(h)},At.prototype.N=function(){this.g.l=null,delete this.j,rc(this.g),delete this.g,At.aa.N.call(this)};function om(a){Ku.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}C(om,Ku);function am(){Gu.call(this),this.status=1}C(am,Gu);function mi(a){this.g=a}C(mi,sm),mi.prototype.ua=function(){lt(this.g,"a")},mi.prototype.ta=function(a){lt(this.g,new om(a))},mi.prototype.sa=function(a){lt(this.g,new am)},mi.prototype.ra=function(){lt(this.g,"b")},wa.prototype.createWebChannel=wa.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,vE=function(){return new wa},yE=function(){return aa()},gE=Vr,ed={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},la.NO_ERROR=0,la.TIMEOUT=8,la.HTTP_ERROR=6,ll=la,Ip.COMPLETE="complete",mE=Ip,vp.EventType=_s,_s.OPEN="a",_s.CLOSE="b",_s.ERROR="c",_s.MESSAGE="d",Ye.prototype.listen=Ye.prototype.K,qs=vp,Se.prototype.listenOnce=Se.prototype.L,Se.prototype.getLastError=Se.prototype.Ka,Se.prototype.getLastErrorCode=Se.prototype.Ba,Se.prototype.getStatus=Se.prototype.Z,Se.prototype.getResponseJson=Se.prototype.Oa,Se.prototype.getResponseText=Se.prototype.oa,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Ha,pE=Se}).apply(typeof $a<"u"?$a:typeof self<"u"?self:typeof window<"u"?window:{});const ry="@firebase/firestore";/**
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
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
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
 */let ds="10.14.0";/**
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
 */const ni=new yf("@firebase/firestore");function Fs(){return ni.logLevel}function q(t,...e){if(ni.logLevel<=ie.DEBUG){const n=e.map(kf);ni.debug(`Firestore (${ds}): ${t}`,...n)}}function Vn(t,...e){if(ni.logLevel<=ie.ERROR){const n=e.map(kf);ni.error(`Firestore (${ds}): ${t}`,...n)}}function Ji(t,...e){if(ni.logLevel<=ie.WARN){const n=e.map(kf);ni.warn(`Firestore (${ds}): ${t}`,...n)}}function kf(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${ds}) INTERNAL ASSERTION FAILED: `+t;throw Vn(e),new Error(e)}function ce(t,e){t||Y()}function ee(t,e){return t}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends jn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Rn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class _E{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ck{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class Pk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class kk{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ce(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Rn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Rn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Rn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ce(typeof r.accessToken=="string"),new _E(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string"),new nt(e)}}class xk{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Nk{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new xk(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Dk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ok{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ce(this.o===void 0);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ce(typeof n.token=="string"),this.R=n.token,new Dk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Vk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class wE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Vk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function Zi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Me(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Me(0,0))}static max(){return new Z(new Me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Oo{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Oo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Oo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ge extends Oo{construct(e,n,r){return new ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const Lk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends Oo{construct(e,n,r){return new He(e,n,r)}static isValidIdentifier(e){return Lk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new He(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new z(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new z(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new z(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new He(n)}static emptyPath(){return new He([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(ge.fromString(e))}static fromName(e){return new K(ge.fromString(e).popFirst(5))}static empty(){return new K(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new ge(e.slice()))}}function Mk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new Me(n+1,0):new Me(n,r));return new Tr(i,K.empty(),e)}function bk(t){return new Tr(t.readTime,t.key,-1)}class Tr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Tr(Z.min(),K.empty(),-1)}static max(){return new Tr(Z.max(),K.empty(),-1)}}function jk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
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
 */const Fk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Uk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Zo(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==Fk)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function $k(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ea(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class xf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}xf.oe=-1;function Su(t){return t==null}function Kl(t){return t===0&&1/t==-1/0}function Bk(t){return typeof t=="number"&&Number.isInteger(t)&&!Kl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function iy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function EE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ie{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new Ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ba(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ba(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ba(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ba(this.root,e,this.comparator,!0)}}class Ba{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??We.RED,this.left=i??We.EMPTY,this.right=s??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new We(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return We.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,i,s){return this}insert(e,n,r){return new We(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ke{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new sy(this.data.getIterator())}getIteratorFrom(e){return new sy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ke(this.comparator);return n.data=e,n}}class sy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Gt{constructor(e){this.fields=e,e.sort(He.comparator)}static empty(){return new Gt([])}unionWith(e){let n=new Ke(He.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Gt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Zi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class TE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new TE("Invalid base64 string: "+s):s}}(e);return new Qe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const zk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ir(t){if(ce(!!t),typeof t=="string"){let e=0;const n=zk.exec(t);if(ce(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Re(t.seconds),nanos:Re(t.nanos)}}function Re(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ri(t){return typeof t=="string"?Qe.fromBase64String(t):Qe.fromUint8Array(t)}/**
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
 */function Nf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Df(t){const e=t.mapValue.fields.__previous_value__;return Nf(e)?Df(e):e}function Vo(t){const e=Ir(t.mapValue.fields.__local_write_time__.timestampValue);return new Me(e.seconds,e.nanos)}/**
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
 */class Wk{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class Lo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Lo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Lo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const za={mapValue:{}};function ii(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Nf(t)?4:qk(t)?9007199254740991:Hk(t)?10:11:Y()}function pn(t,e){if(t===e)return!0;const n=ii(t);if(n!==ii(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Vo(t).isEqual(Vo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ir(i.timestampValue),l=Ir(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ri(i.bytesValue).isEqual(ri(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Re(i.geoPointValue.latitude)===Re(s.geoPointValue.latitude)&&Re(i.geoPointValue.longitude)===Re(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Re(i.integerValue)===Re(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Re(i.doubleValue),l=Re(s.doubleValue);return o===l?Kl(o)===Kl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Zi(t.arrayValue.values||[],e.arrayValue.values||[],pn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(iy(o)!==iy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!pn(o[u],l[u])))return!1;return!0}(t,e);default:return Y()}}function Mo(t,e){return(t.values||[]).find(n=>pn(n,e))!==void 0}function es(t,e){if(t===e)return 0;const n=ii(t),r=ii(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Re(s.integerValue||s.doubleValue),u=Re(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return oy(t.timestampValue,e.timestampValue);case 4:return oy(Vo(t),Vo(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(s,o){const l=ri(s),u=ri(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=le(l[c],u[c]);if(f!==0)return f}return le(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=le(Re(s.latitude),Re(o.latitude));return l!==0?l:le(Re(s.longitude),Re(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ay(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,f;const m=s.fields||{},g=o.fields||{},R=(l=m.value)===null||l===void 0?void 0:l.arrayValue,C=(u=g.value)===null||u===void 0?void 0:u.arrayValue,k=le(((c=R==null?void 0:R.values)===null||c===void 0?void 0:c.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:ay(R,C)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===za.mapValue&&o===za.mapValue)return 0;if(s===za.mapValue)return 1;if(o===za.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=le(u[m],f[m]);if(g!==0)return g;const R=es(l[u[m]],c[f[m]]);if(R!==0)return R}return le(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Y()}}function oy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=Ir(t),r=Ir(e),i=le(n.seconds,r.seconds);return i!==0?i:le(n.nanos,r.nanos)}function ay(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=es(n[i],r[i]);if(s)return s}return le(n.length,r.length)}function ts(t){return td(t)}function td(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ir(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ri(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=td(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${td(n.fields[o])}`;return i+"}"}(t.mapValue):Y()}function ly(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function nd(t){return!!t&&"integerValue"in t}function Of(t){return!!t&&"arrayValue"in t}function uy(t){return!!t&&"nullValue"in t}function cy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ul(t){return!!t&&"mapValue"in t}function Hk(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function oo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return fs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=oo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=oo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function qk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ul(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=oo(n)}setAll(e){let n=He.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=oo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ul(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ul(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){fs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new bt(oo(this.value))}}function IE(t){const e=[];return fs(t.fields,(n,r)=>{const i=new He([n]);if(ul(r)){const s=IE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Gt(e)}/**
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
 */class it{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new it(e,0,Z.min(),Z.min(),Z.min(),bt.empty(),0)}static newFoundDocument(e,n,r,i){return new it(e,1,n,Z.min(),r,i,0)}static newNoDocument(e,n){return new it(e,2,n,Z.min(),Z.min(),bt.empty(),0)}static newUnknownDocument(e,n){return new it(e,3,n,Z.min(),Z.min(),bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof it&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Gl{constructor(e,n){this.position=e,this.inclusive=n}}function hy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=es(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function dy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class bo{constructor(e,n="asc"){this.field=e,this.dir=n}}function Kk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class SE{}class Ne extends SE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Qk(e,n,r):n==="array-contains"?new Jk(e,r):n==="in"?new Zk(e,r):n==="not-in"?new ex(e,r):n==="array-contains-any"?new tx(e,r):new Ne(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Yk(e,r):new Xk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(es(n,this.value)):n!==null&&ii(this.value)===ii(n)&&this.matchesComparison(es(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Zt extends SE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Zt(e,n)}matches(e){return AE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function AE(t){return t.op==="and"}function RE(t){return Gk(t)&&AE(t)}function Gk(t){for(const e of t.filters)if(e instanceof Zt)return!1;return!0}function rd(t){if(t instanceof Ne)return t.field.canonicalString()+t.op.toString()+ts(t.value);if(RE(t))return t.filters.map(e=>rd(e)).join(",");{const e=t.filters.map(n=>rd(n)).join(",");return`${t.op}(${e})`}}function CE(t,e){return t instanceof Ne?function(r,i){return i instanceof Ne&&r.op===i.op&&r.field.isEqual(i.field)&&pn(r.value,i.value)}(t,e):t instanceof Zt?function(r,i){return i instanceof Zt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&CE(o,i.filters[l]),!0):!1}(t,e):void Y()}function PE(t){return t instanceof Ne?function(n){return`${n.field.canonicalString()} ${n.op} ${ts(n.value)}`}(t):t instanceof Zt?function(n){return n.op.toString()+" {"+n.getFilters().map(PE).join(" ,")+"}"}(t):"Filter"}class Qk extends Ne{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class Yk extends Ne{constructor(e,n){super(e,"in",n),this.keys=kE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Xk extends Ne{constructor(e,n){super(e,"not-in",n),this.keys=kE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function kE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class Jk extends Ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Of(n)&&Mo(n.arrayValue,this.value)}}class Zk extends Ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Mo(this.value.arrayValue,n)}}class ex extends Ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(Mo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Mo(this.value.arrayValue,n)}}class tx extends Ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Of(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Mo(this.value.arrayValue,r))}}/**
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
 */class nx{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function fy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new nx(t,e,n,r,i,s,o)}function Vf(t){const e=ee(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>rd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Su(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ts(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ts(r)).join(",")),e.ue=n}return e.ue}function Lf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Kk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!CE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!dy(t.startAt,e.startAt)&&dy(t.endAt,e.endAt)}function id(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ps{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function rx(t,e,n,r,i,s,o,l){return new ps(t,e,n,r,i,s,o,l)}function Mf(t){return new ps(t)}function py(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function xE(t){return t.collectionGroup!==null}function ao(t){const e=ee(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ke(He.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new bo(s,r))}),n.has(He.keyField().canonicalString())||e.ce.push(new bo(He.keyField(),r))}return e.ce}function hn(t){const e=ee(t);return e.le||(e.le=ix(e,ao(t))),e.le}function ix(t,e){if(t.limitType==="F")return fy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new bo(i.field,s)});const n=t.endAt?new Gl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Gl(t.startAt.position,t.startAt.inclusive):null;return fy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function sd(t,e){const n=t.filters.concat([e]);return new ps(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function od(t,e,n){return new ps(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Au(t,e){return Lf(hn(t),hn(e))&&t.limitType===e.limitType}function NE(t){return`${Vf(hn(t))}|lt:${t.limitType}`}function vi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>PE(i)).join(", ")}]`),Su(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ts(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ts(i)).join(",")),`Target(${r})`}(hn(t))}; limitType=${t.limitType})`}function Ru(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ao(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=hy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,ao(r),i)||r.endAt&&!function(o,l,u){const c=hy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,ao(r),i))}(t,e)}function sx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function DE(t){return(e,n)=>{let r=!1;for(const i of ao(t)){const s=ox(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ox(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?es(u,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
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
 */class ms{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){fs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return EE(this.inner)}size(){return this.innerSize}}/**
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
 */const ax=new Ie(K.comparator);function Ln(){return ax}const OE=new Ie(K.comparator);function Ks(...t){let e=OE;for(const n of t)e=e.insert(n.key,n);return e}function VE(t){let e=OE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Wr(){return lo()}function LE(){return lo()}function lo(){return new ms(t=>t.toString(),(t,e)=>t.isEqual(e))}const lx=new Ie(K.comparator),ux=new Ke(K.comparator);function re(...t){let e=ux;for(const n of t)e=e.add(n);return e}const cx=new Ke(le);function hx(){return cx}/**
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
 */function bf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Kl(e)?"-0":e}}function ME(t){return{integerValue:""+t}}function dx(t,e){return Bk(e)?ME(e):bf(t,e)}/**
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
 */class Cu{constructor(){this._=void 0}}function fx(t,e,n){return t instanceof Ql?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Nf(s)&&(s=Df(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof jo?jE(t,e):t instanceof Fo?FE(t,e):function(i,s){const o=bE(i,s),l=my(o)+my(i.Pe);return nd(o)&&nd(i.Pe)?ME(l):bf(i.serializer,l)}(t,e)}function px(t,e,n){return t instanceof jo?jE(t,e):t instanceof Fo?FE(t,e):n}function bE(t,e){return t instanceof Yl?function(r){return nd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ql extends Cu{}class jo extends Cu{constructor(e){super(),this.elements=e}}function jE(t,e){const n=UE(e);for(const r of t.elements)n.some(i=>pn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Fo extends Cu{constructor(e){super(),this.elements=e}}function FE(t,e){let n=UE(e);for(const r of t.elements)n=n.filter(i=>!pn(i,r));return{arrayValue:{values:n}}}class Yl extends Cu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function my(t){return Re(t.integerValue||t.doubleValue)}function UE(t){return Of(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function mx(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof jo&&i instanceof jo||r instanceof Fo&&i instanceof Fo?Zi(r.elements,i.elements,pn):r instanceof Yl&&i instanceof Yl?pn(r.Pe,i.Pe):r instanceof Ql&&i instanceof Ql}(t.transform,e.transform)}class gx{constructor(e,n){this.version=e,this.transformResults=n}}class dn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new dn}static exists(e){return new dn(void 0,e)}static updateTime(e){return new dn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function cl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Pu{}function $E(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new zE(t.key,dn.none()):new ta(t.key,t.data,dn.none());{const n=t.data,r=bt.empty();let i=new Ke(He.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ui(t.key,r,new Gt(i.toArray()),dn.none())}}function yx(t,e,n){t instanceof ta?function(i,s,o){const l=i.value.clone(),u=yy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ui?function(i,s,o){if(!cl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=yy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(BE(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function uo(t,e,n,r){return t instanceof ta?function(s,o,l,u){if(!cl(s.precondition,o))return l;const c=s.value.clone(),f=vy(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ui?function(s,o,l,u){if(!cl(s.precondition,o))return l;const c=vy(s.fieldTransforms,u,o),f=o.data;return f.setAll(BE(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return cl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function vx(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=bE(r.transform,i||null);s!=null&&(n===null&&(n=bt.empty()),n.set(r.field,s))}return n||null}function gy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Zi(r,i,(s,o)=>mx(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ta extends Pu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ui extends Pu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function BE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function yy(t,e,n){const r=new Map;ce(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,px(o,l,n[i]))}return r}function vy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,fx(s,o,e))}return r}class zE extends Pu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _x extends Pu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class wx{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&yx(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=uo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=uo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=LE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=$E(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&Zi(this.mutations,e.mutations,(n,r)=>gy(n,r))&&Zi(this.baseMutations,e.baseMutations,(n,r)=>gy(n,r))}}class jf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ce(e.mutations.length===r.length);let i=function(){return lx}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new jf(e,n,r,i)}}/**
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
 */class Ex{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Tx{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ke,se;function Ix(t){switch(t){default:return Y();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function WE(t){if(t===void 0)return Vn("GRPC error has no .code"),b.UNKNOWN;switch(t){case ke.OK:return b.OK;case ke.CANCELLED:return b.CANCELLED;case ke.UNKNOWN:return b.UNKNOWN;case ke.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case ke.INTERNAL:return b.INTERNAL;case ke.UNAVAILABLE:return b.UNAVAILABLE;case ke.UNAUTHENTICATED:return b.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case ke.NOT_FOUND:return b.NOT_FOUND;case ke.ALREADY_EXISTS:return b.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return b.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case ke.ABORTED:return b.ABORTED;case ke.OUT_OF_RANGE:return b.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return b.UNIMPLEMENTED;case ke.DATA_LOSS:return b.DATA_LOSS;default:return Y()}}(se=ke||(ke={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Sx(){return new TextEncoder}/**
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
 */const Ax=new Kr([4294967295,4294967295],0);function _y(t){const e=Sx().encode(t),n=new fE;return n.update(e),new Uint8Array(n.digest())}function wy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Kr([n,r],0),new Kr([i,s],0)]}class Ff{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Gs(`Invalid padding: ${n}`);if(r<0)throw new Gs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Gs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Gs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Kr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Kr.fromNumber(r)));return i.compare(Ax)===1&&(i=new Kr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=_y(e),[r,i]=wy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ff(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=_y(e),[r,i]=wy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Gs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ku{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,na.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ku(Z.min(),i,new Ie(le),Ln(),re())}}class na{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new na(r,n,re(),re(),re())}}/**
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
 */class hl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class HE{constructor(e,n){this.targetId=e,this.me=n}}class qE{constructor(e,n,r=Qe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ey{constructor(){this.fe=0,this.ge=Iy(),this.pe=Qe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=re(),n=re(),r=re();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new na(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Iy()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ce(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Rx{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ln(),this.qe=Ty(),this.Qe=new Ie(le)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(id(s))if(r===0){const o=new K(s.path);this.Ue(n,o,it.newNoDocument(o,Z.min()))}else ce(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=ri(r).toUint8Array()}catch(u){if(u instanceof TE)return Ji("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Ff(o,i,s)}catch(u){return Ji(u instanceof Gs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&id(l.target)){const u=new K(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,it.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=re();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new ku(e,n,this.Qe,this.ke,r);return this.ke=Ln(),this.qe=Ty(),this.Qe=new Ie(le),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Ey,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ke(le),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ey),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Ty(){return new Ie(K.comparator)}function Iy(){return new Ie(K.comparator)}const Cx={asc:"ASCENDING",desc:"DESCENDING"},Px={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},kx={and:"AND",or:"OR"};class xx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ad(t,e){return t.useProto3Json||Su(e)?e:{value:e}}function Xl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function KE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Nx(t,e){return Xl(t,e.toTimestamp())}function fn(t){return ce(!!t),Z.fromTimestamp(function(n){const r=Ir(n);return new Me(r.seconds,r.nanos)}(t))}function Uf(t,e){return ld(t,e).canonicalString()}function ld(t,e){const n=function(i){return new ge(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function GE(t){const e=ge.fromString(t);return ce(ZE(e)),e}function ud(t,e){return Uf(t.databaseId,e.path)}function $c(t,e){const n=GE(e);if(n.get(1)!==t.databaseId.projectId)throw new z(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(YE(n))}function QE(t,e){return Uf(t.databaseId,e)}function Dx(t){const e=GE(t);return e.length===4?ge.emptyPath():YE(e)}function cd(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function YE(t){return ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Sy(t,e,n){return{name:ud(t,e),fields:n.value.mapValue.fields}}function Ox(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(ce(f===void 0||typeof f=="string"),Qe.fromBase64String(f||"")):(ce(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Qe.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?b.UNKNOWN:WE(c.code);return new z(f,c.message||"")}(o);n=new qE(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=$c(t,r.document.name),s=fn(r.document.updateTime),o=r.document.createTime?fn(r.document.createTime):Z.min(),l=new bt({mapValue:{fields:r.document.fields}}),u=it.newFoundDocument(i,s,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new hl(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=$c(t,r.document),s=r.readTime?fn(r.readTime):Z.min(),o=it.newNoDocument(i,s),l=r.removedTargetIds||[];n=new hl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=$c(t,r.document),s=r.removedTargetIds||[];n=new hl([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Tx(i,s),l=r.targetId;n=new HE(l,o)}}return n}function Vx(t,e){let n;if(e instanceof ta)n={update:Sy(t,e.key,e.value)};else if(e instanceof zE)n={delete:ud(t,e.key)};else if(e instanceof ui)n={update:Sy(t,e.key,e.data),updateMask:zx(e.fieldMask)};else{if(!(e instanceof _x))return Y();n={verify:ud(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Ql)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof jo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Fo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Yl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Nx(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(t,e.precondition)),n}function Lx(t,e){return t&&t.length>0?(ce(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?fn(i.updateTime):fn(s);return o.isEqual(Z.min())&&(o=fn(s)),new gx(o,i.transformResults||[])}(n,e))):[]}function Mx(t,e){return{documents:[QE(t,e.path)]}}function bx(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=QE(t,i);const s=function(c){if(c.length!==0)return JE(Zt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(g){return{field:_i(g.field),direction:Ux(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=ad(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function jx(t){let e=Dx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ce(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const g=XE(m);return g instanceof Zt&&RE(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(C){return new bo(wi(C.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,Su(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,R=m.values||[];return new Gl(R,g)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const g=!m.before,R=m.values||[];return new Gl(R,g)}(n.endAt)),rx(e,i,o,s,l,"F",u,c)}function Fx(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function XE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=wi(n.unaryFilter.field);return Ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=wi(n.unaryFilter.field);return Ne.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=wi(n.unaryFilter.field);return Ne.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=wi(n.unaryFilter.field);return Ne.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return Ne.create(wi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Zt.create(n.compositeFilter.filters.map(r=>XE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function Ux(t){return Cx[t]}function $x(t){return Px[t]}function Bx(t){return kx[t]}function _i(t){return{fieldPath:t.canonicalString()}}function wi(t){return He.fromServerFormat(t.fieldPath)}function JE(t){return t instanceof Ne?function(n){if(n.op==="=="){if(cy(n.value))return{unaryFilter:{field:_i(n.field),op:"IS_NAN"}};if(uy(n.value))return{unaryFilter:{field:_i(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(cy(n.value))return{unaryFilter:{field:_i(n.field),op:"IS_NOT_NAN"}};if(uy(n.value))return{unaryFilter:{field:_i(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_i(n.field),op:$x(n.op),value:n.value}}}(t):t instanceof Zt?function(n){const r=n.getFilters().map(i=>JE(i));return r.length===1?r[0]:{compositeFilter:{op:Bx(n.op),filters:r}}}(t):Y()}function zx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ZE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class or{constructor(e,n,r,i,s=Z.min(),o=Z.min(),l=Qe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new or(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Wx{constructor(e){this.ct=e}}function Hx(t){const e=jx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?od(e,e.limit,"L"):e}/**
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
 */class qx{constructor(){this.un=new Kx}addToCollectionParentIndex(e,n){return this.un.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Tr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Tr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class Kx{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ke(ge.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ke(ge.comparator)).toArray()}}/**
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
 */class ns{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ns(0)}static kn(){return new ns(-1)}}/**
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
 */class Gx{constructor(){this.changes=new ms(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,it.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Qx{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Yx{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&uo(r.mutation,i,Gt.empty(),Me.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=Wr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ks();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Wr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Ln();const o=lo(),l=function(){return lo()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof ui)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),uo(f.mutation,c,f.mutation.getFieldMask(),Me.now())):o.set(c.key,Gt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>{var m;return l.set(c,new Qx(f,(m=o.get(c))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=lo();let i=new Ie((o,l)=>o-l),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||Gt.empty();f=l.applyToLocalView(c,f),r.set(u,f);const m=(i.get(l.batchId)||re()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,m=LE();f.forEach(g=>{if(!s.has(g)){const R=$E(n.get(g),r.get(g));R!==null&&m.set(g,R),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):xE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(Wr());let l=-1,u=s;return o.next(c=>F.forEach(c,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?F.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,re())).next(f=>({batchId:l,changes:VE(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=Ks();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ks();return this.indexManager.getCollectionParents(e,s).next(l=>F.forEach(l,u=>{const c=function(m,g){return new ps(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,it.newInvalidDocument(f)))});let l=Ks();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&uo(f.mutation,c,Gt.empty(),Me.now()),Ru(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class Xx{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return F.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:fn(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:Hx(i.bundledQuery),readTime:fn(i.readTime)}}(n)),F.resolve()}}/**
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
 */class Jx{constructor(){this.overlays=new Ie(K.comparator),this.Ir=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Wr();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=Wr(),s=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ie((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=Wr(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=Wr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=i)););return F.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Ex(n,r));let s=this.Ir.get(n);s===void 0&&(s=re(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Zx{constructor(){this.sessionToken=Qe.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
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
 */class $f{constructor(){this.Tr=new Ke(Fe.Er),this.dr=new Ke(Fe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Fe(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Fe(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new K(new ge([])),r=new Fe(n,e),i=new Fe(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new K(new ge([])),r=new Fe(n,e),i=new Fe(n,e+1);let s=re();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Fe(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Fe{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return K.comparator(e.key,n.key)||le(e.wr,n.wr)}static Ar(e,n){return le(e.wr,n.wr)||K.comparator(e.key,n.key)}}/**
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
 */class eN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ke(Fe.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new wx(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Fe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Fe(n,0),i=new Fe(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ke(le);return n.forEach(i=>{const s=new Fe(i,0),o=new Fe(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new Fe(new K(s),0);let l=new Ke(le);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),F.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ce(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return F.forEach(n.mutations,i=>{const s=new Fe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Fe(n,0),i=this.br.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class tN{constructor(e){this.Mr=e,this.docs=function(){return new Ie(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():it.newInvalidDocument(n))}getEntries(e,n){let r=Ln();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():it.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Ln();const o=n.path,l=new K(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||jk(bk(f),r)<=0||(i.has(f.key)||Ru(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y()}Or(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new nN(this)}getSize(e){return F.resolve(this.size)}}class nN extends Gx{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class rN{constructor(e){this.persistence=e,this.Nr=new ms(n=>Vf(n),Lf),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Lr=0,this.Br=new $f,this.targetCount=0,this.kr=ns.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),F.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ns(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Kn(n),F.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Br.containsKey(n))}}/**
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
 */class iN{constructor(e,n){this.qr={},this.overlays={},this.Qr=new xf(0),this.Kr=!1,this.Kr=!0,this.$r=new Zx,this.referenceDelegate=e(this),this.Ur=new rN(this),this.indexManager=new qx,this.remoteDocumentCache=function(i){return new tN(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Wx(n),this.Gr=new Xx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Jx,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new eN(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new sN(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return F.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class sN extends Uk{constructor(e){super(),this.currentSequenceNumber=e}}class Bf{constructor(e){this.persistence=e,this.Jr=new $f,this.Yr=null}static Zr(e){return new Bf(e)}get Xr(){if(this.Yr)return this.Yr;throw Y()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,r=>{const i=K.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Z.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return F.or([()=>F.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class zf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new zf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class oN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class aN{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return ZR()?8:$k(ot())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new oN;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Fs()<=ie.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",vi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(Fs()<=ie.DEBUG&&q("QueryEngine","Query:",vi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Fs()<=ie.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",vi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,hn(n))):F.resolve())}Yi(e,n){if(py(n))return F.resolve(null);let r=hn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=od(n,null,"F"),r=hn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,od(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return py(n)||i.isEqual(Z.min())?F.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?F.resolve(null):(Fs()<=ie.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),vi(n)),this.rs(e,o,n,Mk(i,-1)).next(l=>l))})}ts(e,n){let r=new Ke(DE(e));return n.forEach((i,s)=>{Ru(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Fs()<=ie.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",vi(n)),this.Ji.getDocumentsMatchingQuery(e,n,Tr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class lN{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ie(le),this._s=new ms(s=>Vf(s),Lf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Yx(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function uN(t,e,n,r){return new lN(t,e,n,r)}async function e0(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=re();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function cN(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const m=c.batch,g=m.keys();let R=F.resolve();return g.forEach(C=>{R=R.next(()=>f.getEntry(u,C)).next(k=>{const D=c.docVersions.get(C);ce(D!==null),k.version.compareTo(D)<0&&(m.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),f.addEntry(k)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=re();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function t0(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function hN(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,m)=>{const g=i.get(m);if(!g)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,m)));let R=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?R=R.withResumeToken(Qe.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,r)),i=i.insert(m,R),function(k,D,I){return k.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(g,R,f)&&l.push(n.Ur.updateTargetData(s,R))});let u=Ln(),c=re();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(dN(s,o,e.documentUpdates).next(f=>{u=f.Ps,c=f.Is})),!r.isEqual(Z.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(m=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return F.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function dN(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Ln();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Z.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function fN(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function pN(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new or(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function hd(t,e,n){const r=ee(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ea(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Ay(t,e,n){const r=ee(t);let i=Z.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const m=ee(u),g=m._s.get(f);return g!==void 0?F.resolve(m.os.get(g)):m.Ur.getTargetData(c,f)}(r,o,hn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?s:re())).next(l=>(mN(r,sx(e),l),{documents:l,Ts:s})))}function mN(t,e,n){let r=t.us.get(e)||Z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Ry{constructor(){this.activeTargetIds=hx()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class gN{constructor(){this.so=new Ry,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Ry,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class yN{_o(e){}shutdown(){}}/**
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
 */class Cy{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Wa=null;function Bc(){return Wa===null?Wa=function(){return 268435456+Math.round(2147483648*Math.random())}():Wa++,"0x"+Wa.toString(16)}/**
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
 */const vN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class _N{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const tt="WebChannelConnection";class wN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Bc(),u=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(f=>(q("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Ji("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ds}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=vN[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Bc();return new Promise((o,l)=>{const u=new pE;u.setWithCredentials(!0),u.listenOnce(mE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ll.NO_ERROR:const f=u.getResponseJson();q(tt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case ll.TIMEOUT:q(tt,`RPC '${e}' ${s} timed out`),l(new z(b.DEADLINE_EXCEEDED,"Request time out"));break;case ll.HTTP_ERROR:const m=u.getStatus();if(q(tt,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const R=g==null?void 0:g.error;if(R&&R.status&&R.message){const C=function(D){const I=D.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(I)>=0?I:b.UNKNOWN}(R.status);l(new z(C,R.message))}else l(new z(b.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new z(b.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{q(tt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);q(tt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Bc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=vE(),l=yE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");q(tt,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=o.createWebChannel(f,u);let g=!1,R=!1;const C=new _N({Io:D=>{R?q(tt,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(g||(q(tt,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),q(tt,`RPC '${e}' stream ${i} sending:`,D),m.send(D))},To:()=>m.close()}),k=(D,I,w)=>{D.listen(I,S=>{try{w(S)}catch(V){setTimeout(()=>{throw V},0)}})};return k(m,qs.EventType.OPEN,()=>{R||(q(tt,`RPC '${e}' stream ${i} transport opened.`),C.yo())}),k(m,qs.EventType.CLOSE,()=>{R||(R=!0,q(tt,`RPC '${e}' stream ${i} transport closed`),C.So())}),k(m,qs.EventType.ERROR,D=>{R||(R=!0,Ji(tt,`RPC '${e}' stream ${i} transport errored:`,D),C.So(new z(b.UNAVAILABLE,"The operation could not be completed")))}),k(m,qs.EventType.MESSAGE,D=>{var I;if(!R){const w=D.data[0];ce(!!w);const S=w,V=S.error||((I=S[0])===null||I===void 0?void 0:I.error);if(V){q(tt,`RPC '${e}' stream ${i} received error:`,V);const j=V.status;let M=function(_){const E=ke[_];if(E!==void 0)return WE(E)}(j),T=V.message;M===void 0&&(M=b.INTERNAL,T="Unknown error status: "+j+" with message "+V.message),R=!0,C.So(new z(M,T)),m.close()}else q(tt,`RPC '${e}' stream ${i} received:`,w),C.bo(w)}}),k(l,gE.STAT_EVENT,D=>{D.stat===ed.PROXY?q(tt,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===ed.NOPROXY&&q(tt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function zc(){return typeof document<"u"?document:null}/**
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
 */function xu(t){return new xx(t,!0)}/**
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
 */class n0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class r0{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new n0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(Vn(n.toString()),Vn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new z(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class EN extends r0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=Ox(this.serializer,e),r=function(s){if(!("targetChange"in s))return Z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?fn(o.readTime):Z.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=cd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=id(u)?{documents:Mx(s,u)}:{query:bx(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=KE(s,o.resumeToken);const c=ad(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Z.min())>0){l.readTime=Xl(s,o.snapshotVersion.toTimestamp());const c=ad(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=Fx(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=cd(this.serializer),n.removeTarget=e,this.a_(n)}}class TN extends r0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ce(!!e.streamToken),this.lastStreamToken=e.streamToken,ce(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=Lx(e.writeResults,e.commitTime),r=fn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=cd(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Vx(this.serializer,r))};this.a_(n)}}/**
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
 */class IN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new z(b.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,ld(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(b.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,ld(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(b.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class SN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Vn(n),this.D_=!1):q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class AN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ci(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=ee(u);c.L_.add(4),await ra(c),c.q_.set("Unknown"),c.L_.delete(4),await Nu(c)}(this))})}),this.q_=new SN(r,i)}}async function Nu(t){if(ci(t))for(const e of t.B_)await e(!0)}async function ra(t){for(const e of t.B_)await e(!1)}function i0(t,e){const n=ee(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Kf(n)?qf(n):gs(n).r_()&&Hf(n,e))}function Wf(t,e){const n=ee(t),r=gs(n);n.N_.delete(e),r.r_()&&s0(n,e),n.N_.size===0&&(r.r_()?r.o_():ci(n)&&n.q_.set("Unknown"))}function Hf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}gs(t).A_(e)}function s0(t,e){t.Q_.xe(e),gs(t).R_(e)}function qf(t){t.Q_=new Rx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),gs(t).start(),t.q_.v_()}function Kf(t){return ci(t)&&!gs(t).n_()&&t.N_.size>0}function ci(t){return ee(t).L_.size===0}function o0(t){t.Q_=void 0}async function RN(t){t.q_.set("Online")}async function CN(t){t.N_.forEach((e,n)=>{Hf(t,e)})}async function PN(t,e){o0(t),Kf(t)?(t.q_.M_(e),qf(t)):t.q_.set("Unknown")}async function kN(t,e,n){if(t.q_.set("Online"),e instanceof qE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Jl(t,r)}else if(e instanceof hl?t.Q_.Ke(e):e instanceof HE?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Z.min()))try{const r=await t0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(c);f&&s.N_.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(Qe.EMPTY_BYTE_STRING,f.snapshotVersion)),s0(s,u);const m=new or(f.target,u,c,f.sequenceNumber);Hf(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await Jl(t,r)}}async function Jl(t,e,n){if(!ea(e))throw e;t.L_.add(1),await ra(t),t.q_.set("Offline"),n||(n=()=>t0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Nu(t)})}function a0(t,e){return e().catch(n=>Jl(t,n,e))}async function Du(t){const e=ee(t),n=Sr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;xN(e);)try{const i=await fN(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,NN(e,i)}catch(i){await Jl(e,i)}l0(e)&&u0(e)}function xN(t){return ci(t)&&t.O_.length<10}function NN(t,e){t.O_.push(e);const n=Sr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function l0(t){return ci(t)&&!Sr(t).n_()&&t.O_.length>0}function u0(t){Sr(t).start()}async function DN(t){Sr(t).p_()}async function ON(t){const e=Sr(t);for(const n of t.O_)e.m_(n.mutations)}async function VN(t,e,n){const r=t.O_.shift(),i=jf.from(r,e,n);await a0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Du(t)}async function LN(t,e){e&&Sr(t).V_&&await async function(r,i){if(function(o){return Ix(o)&&o!==b.ABORTED}(i.code)){const s=r.O_.shift();Sr(r).s_(),await a0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Du(r)}}(t,e),l0(t)&&u0(t)}async function Py(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=ci(n);n.L_.add(3),await ra(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Nu(n)}async function MN(t,e){const n=ee(t);e?(n.L_.delete(2),await Nu(n)):e||(n.L_.add(2),await ra(n),n.q_.set("Unknown"))}function gs(t){return t.K_||(t.K_=function(n,r,i){const s=ee(n);return s.w_(),new EN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:RN.bind(null,t),Ro:CN.bind(null,t),mo:PN.bind(null,t),d_:kN.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Kf(t)?qf(t):t.q_.set("Unknown")):(await t.K_.stop(),o0(t))})),t.K_}function Sr(t){return t.U_||(t.U_=function(n,r,i){const s=ee(n);return s.w_(),new TN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:DN.bind(null,t),mo:LN.bind(null,t),f_:ON.bind(null,t),g_:VN.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Du(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Gf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Rn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Gf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qf(t,e){if(Vn("AsyncQueue",`${e}: ${t}`),ea(t))return new z(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class zi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Ks(),this.sortedSet=new Ie(this.comparator)}static emptySet(e){return new zi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof zi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new zi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class ky{constructor(){this.W_=new Ie(K.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Y():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class rs{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new rs(e,n,zi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Au(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class bN{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class jN{constructor(){this.queries=xy(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ee(n),s=i.queries;i.queries=xy(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new z(b.ABORTED,"Firestore shutting down"))}}function xy(){return new ms(t=>NE(t),Au)}async function c0(t,e){const n=ee(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new bN,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Qf(o,`Initialization of query '${vi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Yf(n)}async function h0(t,e){const n=ee(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function FN(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Yf(n)}function UN(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Yf(t){t.Y_.forEach(e=>{e.next()})}var dd,Ny;(Ny=dd||(dd={})).ea="default",Ny.Cache="cache";class d0{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new rs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=rs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==dd.Cache}}/**
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
 */class f0{constructor(e){this.key=e}}class p0{constructor(e){this.key=e}}class $N{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=re(),this.mutatedKeys=re(),this.Aa=DE(e),this.Ra=new zi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new ky,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const g=i.get(f),R=Ru(this.query,m)?m:null,C=!!g&&this.mutatedKeys.has(g.key),k=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let D=!1;g&&R?g.data.isEqual(R.data)?C!==k&&(r.track({type:3,doc:R}),D=!0):this.ga(g,R)||(r.track({type:2,doc:R}),D=!0,(u&&this.Aa(R,u)>0||c&&this.Aa(R,c)<0)&&(l=!0)):!g&&R?(r.track({type:0,doc:R}),D=!0):g&&!R&&(r.track({type:1,doc:g}),D=!0,(u||c)&&(l=!0)),D&&(R?(o=o.add(R),s=k?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(R,C){const k=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return k(R)-k(C)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new rs(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new ky,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=re(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new p0(r))}),this.da.forEach(r=>{e.has(r)||n.push(new f0(r))}),n}ba(e){this.Ta=e.Ts,this.da=re();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return rs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class BN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class zN{constructor(e){this.key=e,this.va=!1}}class WN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ms(l=>NE(l),Au),this.Ma=new Map,this.xa=new Set,this.Oa=new Ie(K.comparator),this.Na=new Map,this.La=new $f,this.Ba={},this.ka=new Map,this.qa=ns.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function HN(t,e,n=!0){const r=w0(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await m0(r,e,n,!0),i}async function qN(t,e){const n=w0(t);await m0(n,e,!0,!1)}async function m0(t,e,n,r){const i=await pN(t.localStore,hn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await KN(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&i0(t.remoteStore,i),l}async function KN(t,e,n,r,i){t.Ka=(m,g,R)=>async function(k,D,I,w){let S=D.view.ma(I);S.ns&&(S=await Ay(k.localStore,D.query,!1).then(({documents:T})=>D.view.ma(T,S)));const V=w&&w.targetChanges.get(D.targetId),j=w&&w.targetMismatches.get(D.targetId)!=null,M=D.view.applyChanges(S,k.isPrimaryClient,V,j);return Oy(k,D.targetId,M.wa),M.snapshot}(t,m,g,R);const s=await Ay(t.localStore,e,!0),o=new $N(e,s.Ts),l=o.ma(s.documents),u=na.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Oy(t,n,c.wa);const f=new BN(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function GN(t,e,n){const r=ee(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Au(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await hd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Wf(r.remoteStore,i.targetId),fd(r,i.targetId)}).catch(Zo)):(fd(r,i.targetId),await hd(r.localStore,i.targetId,!0))}async function QN(t,e){const n=ee(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Wf(n.remoteStore,r.targetId))}async function YN(t,e,n){const r=rD(t);try{const i=await function(o,l){const u=ee(o),c=Me.now(),f=l.reduce((R,C)=>R.add(C.key),re());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let C=Ln(),k=re();return u.cs.getEntries(R,f).next(D=>{C=D,C.forEach((I,w)=>{w.isValidDocument()||(k=k.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,C)).next(D=>{m=D;const I=[];for(const w of l){const S=vx(w,m.get(w.key).overlayedDocument);S!=null&&I.push(new ui(w.key,S,IE(S.value.mapValue),dn.exists(!0)))}return u.mutationQueue.addMutationBatch(R,c,I,l)}).next(D=>{g=D;const I=D.applyToLocalDocumentSet(m,k);return u.documentOverlayCache.saveOverlays(R,D.batchId,I)})}).then(()=>({batchId:g.batchId,changes:VE(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ie(le)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await ia(r,i.changes),await Du(r.remoteStore)}catch(i){const s=Qf(i,"Failed to persist write");n.reject(s)}}async function g0(t,e){const n=ee(t);try{const r=await hN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ce(o.va):i.removedDocuments.size>0&&(ce(o.va),o.va=!1))}),await ia(n,r,e)}catch(r){await Zo(r)}}function Dy(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ee(o);u.onlineState=l;let c=!1;u.queries.forEach((f,m)=>{for(const g of m.j_)g.Z_(l)&&(c=!0)}),c&&Yf(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function XN(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ie(K.comparator);o=o.insert(s,it.newNoDocument(s,Z.min()));const l=re().add(s),u=new ku(Z.min(),new Map,new Ie(le),o,l);await g0(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Xf(r)}else await hd(r.localStore,e,!1).then(()=>fd(r,e,n)).catch(Zo)}async function JN(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await cN(n.localStore,e);v0(n,r,null),y0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ia(n,i)}catch(i){await Zo(i)}}async function ZN(t,e,n){const r=ee(t);try{const i=await function(o,l){const u=ee(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(ce(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);v0(r,e,n),y0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ia(r,i)}catch(i){await Zo(i)}}function y0(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function v0(t,e,n){const r=ee(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function fd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||_0(t,r)})}function _0(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Wf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Xf(t))}function Oy(t,e,n){for(const r of n)r instanceof f0?(t.La.addReference(r.key,e),eD(t,r)):r instanceof p0?(q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||_0(t,r.key)):Y()}function eD(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(q("SyncEngine","New document in limbo: "+n),t.xa.add(r),Xf(t))}function Xf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new K(ge.fromString(e)),r=t.qa.next();t.Na.set(r,new zN(n)),t.Oa=t.Oa.insert(n,r),i0(t.remoteStore,new or(hn(Mf(n.path)),r,"TargetPurposeLimboResolution",xf.oe))}}async function ia(t,e,n){const r=ee(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){i.push(c);const m=zf.Wi(u.targetId,c);s.push(m)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const f=ee(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>F.forEach(c,g=>F.forEach(g.$i,R=>f.persistence.referenceDelegate.addReference(m,g.targetId,R)).next(()=>F.forEach(g.Ui,R=>f.persistence.referenceDelegate.removeReference(m,g.targetId,R)))))}catch(m){if(!ea(m))throw m;q("LocalStore","Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const R=f.os.get(g),C=R.snapshotVersion,k=R.withLastLimboFreeSnapshotVersion(C);f.os=f.os.insert(g,k)}}}(r.localStore,s))}async function tD(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await e0(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new z(b.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ia(n,r.hs)}}function nD(t,e){const n=ee(t),r=n.Na.get(e);if(r&&r.va)return re().add(r.key);{let i=re();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function w0(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=g0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=XN.bind(null,e),e.Ca.d_=FN.bind(null,e.eventManager),e.Ca.$a=UN.bind(null,e.eventManager),e}function rD(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=JN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ZN.bind(null,e),e}class Zl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=xu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return uN(this.persistence,new aN,e.initialUser,this.serializer)}Ga(e){return new iN(Bf.Zr,this.serializer)}Wa(e){return new gN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Zl.provider={build:()=>new Zl};class pd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Dy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=tD.bind(null,this.syncEngine),await MN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new jN}()}createDatastore(e){const n=xu(e.databaseInfo.databaseId),r=function(s){return new wN(s)}(e.databaseInfo);return function(s,o,l,u){return new IN(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new AN(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Dy(this.syncEngine,n,0),function(){return Cy.D()?new Cy:new yN}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,f){const m=new WN(i,s,o,l,u,c);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ee(i);q("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await ra(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}pd.provider={build:()=>new pd};/**
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
 */class E0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Vn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class iD{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=nt.UNAUTHENTICATED,this.clientId=wE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Qf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Wc(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await e0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Vy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await sD(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Py(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Py(e.remoteStore,i)),t._onlineComponents=e}async function sD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Wc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===b.FAILED_PRECONDITION||i.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ji("Error using user provided cache. Falling back to memory cache: "+n),await Wc(t,new Zl)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await Wc(t,new Zl);return t._offlineComponents}async function T0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await Vy(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await Vy(t,new pd))),t._onlineComponents}function oD(t){return T0(t).then(e=>e.syncEngine)}async function I0(t){const e=await T0(t),n=e.eventManager;return n.onListen=HN.bind(null,e.syncEngine),n.onUnlisten=GN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=qN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=QN.bind(null,e.syncEngine),n}function aD(t,e,n={}){const r=new Rn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new E0({next:g=>{f.Za(),o.enqueueAndForget(()=>h0(s,m));const R=g.docs.has(l);!R&&g.fromCache?c.reject(new z(b.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&g.fromCache&&u&&u.source==="server"?c.reject(new z(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new d0(Mf(l.path),f,{includeMetadataChanges:!0,_a:!0});return c0(s,m)}(await I0(t),t.asyncQueue,e,n,r)),r.promise}function lD(t,e,n={}){const r=new Rn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new E0({next:g=>{f.Za(),o.enqueueAndForget(()=>h0(s,m)),g.fromCache&&u.source==="server"?c.reject(new z(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new d0(l,f,{includeMetadataChanges:!0,_a:!0});return c0(s,m)}(await I0(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function S0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Ly=new Map;/**
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
 */function A0(t,e,n){if(!n)throw new z(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function uD(t,e,n,r){if(e===!0&&r===!0)throw new z(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function My(t){if(!K.isDocumentKey(t))throw new z(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function by(t){if(K.isDocumentKey(t))throw new z(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ou(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function Ar(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ou(t);throw new z(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class jy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=S0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new z(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new z(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new z(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Vu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ck;switch(r.type){case"firstParty":return new Nk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ly.get(n);r&&(q("ComponentProvider","Removing Datastore"),Ly.delete(n),r.terminate())}(this),Promise.resolve()}}function cD(t,e,n,r={}){var i;const s=(t=Ar(t,Vu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ji("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=nt.MOCK_USER;else{l=qR(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new z(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new nt(c)}t._authCredentials=new Pk(new _E(l,u))}}/**
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
 */class hi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new hi(this.firestore,e,this._query)}}class Tt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _r(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tt(this.firestore,e,this._key)}}class _r extends hi{constructor(e,n,r){super(e,n,Mf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new K(e))}withConverter(e){return new _r(this.firestore,e,this._path)}}function mt(t,e,...n){if(t=dt(t),A0("collection","path",e),t instanceof Vu){const r=ge.fromString(e,...n);return by(r),new _r(t,null,r)}{if(!(t instanceof Tt||t instanceof _r))throw new z(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return by(r),new _r(t.firestore,null,r)}}function ys(t,e,...n){if(t=dt(t),arguments.length===1&&(e=wE.newId()),A0("doc","path",e),t instanceof Vu){const r=ge.fromString(e,...n);return My(r),new Tt(t,null,new K(r))}{if(!(t instanceof Tt||t instanceof _r))throw new z(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return My(r),new Tt(t.firestore,t instanceof _r?t.converter:null,new K(r))}}/**
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
 */class Fy{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new n0(this,"async_queue_retry"),this.Vu=()=>{const r=zc();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=zc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=zc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Rn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ea(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Vn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Gf.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Y()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class sa extends Vu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Fy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Fy(e),this._firestoreClient=void 0,await e}}}function hD(t,e){const n=typeof t=="object"?t:Pw(),r=typeof t=="string"?t:"(default)",i=_f(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=WR("firestore");s&&cD(i,...s)}return i}function Jf(t){if(t._terminated)throw new z(b.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||dD(t),t._firestoreClient}function dD(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,f){return new Wk(l,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,S0(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new iD(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class is{constructor(e){this._byteString=e}static fromBase64String(e){try{return new is(Qe.fromBase64String(e))}catch(n){throw new z(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new is(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Zf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class R0{constructor(e){this._methodName=e}}/**
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
 */class ep{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class tp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const fD=/^__.*__$/;class pD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ui(e,this.data,this.fieldMask,n,this.fieldTransforms):new ta(e,this.data,n,this.fieldTransforms)}}function C0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class np{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new np(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return eu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(C0(this.Cu)&&fD.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class mD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||xu(e)}Qu(e,n,r,i=!1){return new np({Cu:e,methodName:n,qu:r,path:He.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rp(t){const e=t._freezeSettings(),n=xu(t._databaseId);return new mD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function P0(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);N0("Data must be an object, but it was:",o,r);const l=k0(r,o);let u,c;if(s.merge)u=new Gt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const g=yD(e,m,n);if(!o.contains(g))throw new z(b.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);_D(f,g)||f.push(g)}u=new Gt(f),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new pD(new bt(l),u,c)}function gD(t,e,n,r=!1){return ip(n,t.Qu(r?4:3,e))}function ip(t,e){if(x0(t=dt(t)))return N0("Unsupported field value:",e,t),k0(t,e);if(t instanceof R0)return function(r,i){if(!C0(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=ip(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=dt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return dx(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Me.fromDate(r);return{timestampValue:Xl(i.serializer,s)}}if(r instanceof Me){const s=new Me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Xl(i.serializer,s)}}if(r instanceof ep)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof is)return{bytesValue:KE(i.serializer,r._byteString)};if(r instanceof Tt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Uf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof tp)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return bf(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Ou(r)}`)}(t,e)}function k0(t,e){const n={};return EE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fs(t,(r,i)=>{const s=ip(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function x0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Me||t instanceof ep||t instanceof is||t instanceof Tt||t instanceof R0||t instanceof tp)}function N0(t,e,n){if(!x0(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Ou(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function yD(t,e,n){if((e=dt(e))instanceof Zf)return e._internalPath;if(typeof e=="string")return D0(t,e);throw eu("Field path arguments must be of type string or ",t,!1,void 0,n)}const vD=new RegExp("[~\\*/\\[\\]]");function D0(t,e,n){if(e.search(vD)>=0)throw eu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Zf(...e.split("."))._internalPath}catch{throw eu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function eu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new z(b.INVALID_ARGUMENT,l+t+u)}function _D(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class O0{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Lu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wD extends O0{data(){return super.data()}}function Lu(t,e){return typeof e=="string"?D0(t,e):e instanceof Zf?e._internalPath:e._delegate._internalPath}/**
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
 */function ED(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sp{}class V0 extends sp{}function on(t,e,...n){let r=[];e instanceof sp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof op).length,l=s.filter(u=>u instanceof Mu).length;if(o>1||o>0&&l>0)throw new z(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Mu extends V0{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Mu(e,n,r)}_apply(e){const n=this._parse(e);return L0(e._query,n),new hi(e.firestore,e.converter,sd(e._query,n))}_parse(e){const n=rp(e.firestore);return function(s,o,l,u,c,f,m){let g;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new z(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){$y(m,f);const R=[];for(const C of m)R.push(Uy(u,s,C));g={arrayValue:{values:R}}}else g=Uy(u,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||$y(m,f),g=gD(l,o,m,f==="in"||f==="not-in");return Ne.create(c,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function yt(t,e,n){const r=e,i=Lu("where",t);return Mu._create(i,r,n)}class op extends sp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new op(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Zt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)L0(o,u),o=sd(o,u)}(e._query,n),new hi(e.firestore,e.converter,sd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ap extends V0{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new ap(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new z(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new z(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new bo(s,o)}(e._query,this._field,this._direction);return new hi(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ps(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function TD(t,e="asc"){const n=e,r=Lu("orderBy",t);return ap._create(r,n)}function Uy(t,e,n){if(typeof(n=dt(n))=="string"){if(n==="")throw new z(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xE(e)&&n.indexOf("/")!==-1)throw new z(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ge.fromString(n));if(!K.isDocumentKey(r))throw new z(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ly(t,new K(r))}if(n instanceof Tt)return ly(t,n._key);throw new z(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ou(n)}.`)}function $y(t,e){if(!Array.isArray(t)||t.length===0)throw new z(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function L0(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class ID{convertValue(e,n="none"){switch(ii(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ri(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return fs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Re(o.doubleValue));return new tp(s)}convertGeoPoint(e){return new ep(Re(e.latitude),Re(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Df(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Vo(e));default:return null}}convertTimestamp(e){const n=Ir(e);return new Me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ge.fromString(e);ce(ZE(r));const i=new Lo(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||Vn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function M0(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Qs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class b0 extends O0{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new dl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Lu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class dl extends b0{data(e={}){return super.data(e)}}class SD{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Qs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new dl(this._firestore,this._userDataWriter,r.key,r,new Qs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new dl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Qs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new dl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Qs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:AD(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function AD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}/**
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
 */function bu(t){t=Ar(t,Tt);const e=Ar(t.firestore,sa);return aD(Jf(e),t._key).then(n=>CD(e,t,n))}class j0 extends ID{constructor(e){super(),this.firestore=e}convertBytes(e){return new is(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,n)}}function Kt(t){t=Ar(t,hi);const e=Ar(t.firestore,sa),n=Jf(e),r=new j0(e);return ED(t._query),lD(n,t._query).then(i=>new SD(e,r,t,i))}function RD(t,e,n){t=Ar(t,Tt);const r=Ar(t.firestore,sa),i=M0(t.converter,e);return F0(r,[P0(rp(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,dn.none())])}function md(t,e){const n=Ar(t.firestore,sa),r=ys(t),i=M0(t.converter,e);return F0(n,[P0(rp(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,dn.exists(!1))]).then(()=>r)}function F0(t,e){return function(r,i){const s=new Rn;return r.asyncQueue.enqueueAndForget(async()=>YN(await oD(r),i,s)),s.promise}(Jf(t),e)}function CD(t,e,n){const r=n.docs.get(e._key),i=new j0(t);return new b0(t,i,e._key,r,new Qs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){ds=i})(cs),Xi(new Zr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new sa(new kk(r.getProvider("auth-internal")),new Ok(r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new z(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lo(c.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),vr(ry,"4.7.3",e),vr(ry,"4.7.3","esm2017")})();var PD="firebase",kD="10.14.1";/**
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
 */vr(PD,kD,"app");const xD={apiKey:"AIzaSyAzcWJu2NEBhsNmjT8nDpH4hIGE1DORM-I",authDomain:"attendance-project-e933b.firebaseapp.com",projectId:"attendance-project-e933b",storageBucket:"attendance-project-e933b.firebasestorage.app",messagingSenderId:"183623814607",appId:"1:183623814607:web:46edd371c8492ca701d6ba"},U0=Cw(xD),si=Ak(U0),Oe=hD(U0),$0=O.createContext(null);function ND({children:t}){const[e,n]=O.useState(null),[r,i]=O.useState(null),[s,o]=O.useState(!0);return O.useEffect(()=>p1(si,async u=>{if(n(u),u){const c=await bu(ys(Oe,"users",u.uid));i(c.exists()?c.data():null)}else i(null);o(!1)}),[]),p.jsx($0.Provider,{value:{user:e,userData:r,loading:s},children:t})}function lp(){return O.useContext($0)}function DD(){const[t,e]=O.useState({email:"",password:""}),[n,r]=O.useState(!1),i=xr(),s=async o=>{o.preventDefault(),r(!0);try{const l=await tE(si,t.email,t.password),c=(await bu(ys(Oe,"users",l.user.uid))).data();me.success(`Welcome back, ${c==null?void 0:c.name}!`),i("/dashboard")}catch{me.error("Invalid email or password")}finally{r(!1)}};return p.jsxs("div",{className:"auth-bg",children:[p.jsx("div",{className:"admin-link-bar",children:p.jsx("a",{href:"/admin-login",className:"admin-top-btn",children:"🔐 Admin Login"})}),p.jsxs("div",{className:"auth-card",children:[p.jsxs("div",{className:"auth-logo",children:[p.jsx("div",{className:"auth-logo-icon",children:"🏢"}),p.jsx("h1",{children:"Attendance System"}),p.jsx("p",{children:"Sign in to your account"})]}),p.jsxs("form",{onSubmit:s,className:"auth-form",children:[p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Email Address"}),p.jsx("input",{type:"email",placeholder:"you@example.com",value:t.email,onChange:o=>e({...t,email:o.target.value}),required:!0})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Password"}),p.jsx("input",{type:"password",placeholder:"••••••••",value:t.password,onChange:o=>e({...t,password:o.target.value}),required:!0})]}),p.jsx("button",{type:"submit",className:"btn-primary",disabled:n,children:n?"Signing in...":"Sign In"})]}),p.jsxs("p",{className:"auth-footer",children:["Don't have an account? ",p.jsx(hw,{to:"/signup",children:"Sign Up"})]})]})]})}function OD(){const[t,e]=O.useState({email:"",password:""}),[n,r]=O.useState(!1),i=xr(),s=async o=>{o.preventDefault(),r(!0);try{const l=await tE(si,t.email,t.password),c=(await bu(ys(Oe,"users",l.user.uid))).data();if((c==null?void 0:c.role)!=="admin"){me.error("Access denied — Admin only"),await si.signOut(),r(!1);return}me.success(`Welcome, ${c==null?void 0:c.name}!`),i("/admin")}catch{me.error("Invalid email or password")}finally{r(!1)}};return p.jsx("div",{className:"auth-bg admin-bg",children:p.jsxs("div",{className:"auth-card",children:[p.jsxs("div",{className:"auth-logo",children:[p.jsx("div",{className:"auth-logo-icon",children:"🔐"}),p.jsx("h1",{children:"Admin Login"}),p.jsx("p",{children:"Only authorized admins can access"})]}),p.jsx("div",{className:"admin-login-badge",children:"🛡️ Restricted Area"}),p.jsxs("form",{onSubmit:s,className:"auth-form",children:[p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Admin Email"}),p.jsx("input",{type:"email",placeholder:"admin@example.com",value:t.email,onChange:o=>e({...t,email:o.target.value}),required:!0})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Password"}),p.jsx("input",{type:"password",placeholder:"••••••••",value:t.password,onChange:o=>e({...t,password:o.target.value}),required:!0})]}),p.jsx("button",{type:"submit",className:"btn-primary btn-admin",disabled:n,children:n?"Verifying...":"🔐 Admin Sign In"})]}),p.jsxs("p",{className:"auth-footer",children:["Employee? ",p.jsx("a",{href:"/login",children:"Go to Employee Login"})]})]})})}function VD(){return String(Math.floor(1e3+Math.random()*9e3))}function LD(){const[t,e]=O.useState({name:"",email:"",phone:"",cnic:"",department:"",password:"",confirm:""}),[n,r]=O.useState(!1),i=xr(),s=async l=>{if(l.preventDefault(),t.password!==t.confirm){me.error("Passwords do not match");return}if(t.password.length<6){me.error("Password must be at least 6 characters");return}r(!0);try{const u=await h1(si,t.email,t.password),c=VD();await RD(ys(Oe,"users",u.user.uid),{uid:u.user.uid,name:t.name,email:t.email,phone:t.phone,cnic:t.cnic,role:"employee",department:t.department,employeeCode:c,salaryPerDay:500,createdAt:new Date().toISOString(),status:"active"}),me.success(`Account created! Your Employee Code: ${c}`),i("/dashboard")}catch(u){u.code==="auth/email-already-in-use"?me.error("Email is already registered"):u.code==="auth/network-request-failed"?me.error("Check your internet connection"):me.error(`Error: ${u.message}`)}finally{r(!1)}},o=l=>u=>e({...t,[l]:u.target.value});return p.jsx("div",{className:"auth-bg",children:p.jsxs("div",{className:"auth-card auth-card-wide",children:[p.jsxs("div",{className:"auth-logo",children:[p.jsx("div",{className:"auth-logo-icon",children:"🏢"}),p.jsx("h1",{children:"Create Account"}),p.jsx("p",{children:"Fill in your details to register"})]}),p.jsxs("form",{onSubmit:s,className:"auth-form",children:[p.jsxs("div",{className:"form-row",children:[p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Full Name *"}),p.jsx("input",{type:"text",placeholder:"Muhammad Ali",value:t.name,onChange:o("name"),required:!0})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Email Address *"}),p.jsx("input",{type:"email",placeholder:"you@example.com",value:t.email,onChange:o("email"),required:!0})]})]}),p.jsxs("div",{className:"form-row",children:[p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Phone Number *"}),p.jsx("input",{type:"tel",placeholder:"03001234567",value:t.phone,onChange:o("phone"),required:!0})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"CNIC"}),p.jsx("input",{type:"text",placeholder:"42101-1234567-1",value:t.cnic,onChange:o("cnic")})]})]}),p.jsx("div",{className:"form-row",children:p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Department"}),p.jsx("input",{type:"text",placeholder:"Sales / IT / HR...",value:t.department,onChange:o("department")})]})}),p.jsxs("div",{className:"form-row",children:[p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Password *"}),p.jsx("input",{type:"password",placeholder:"Min 6 characters",value:t.password,onChange:o("password"),required:!0})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Confirm Password *"}),p.jsx("input",{type:"password",placeholder:"Repeat password",value:t.confirm,onChange:o("confirm"),required:!0})]})]}),p.jsx("button",{type:"submit",className:"btn-primary",disabled:n,children:n?"Creating Account...":"Create Account"})]}),p.jsxs("p",{className:"auth-footer",children:["Already have an account? ",p.jsx(hw,{to:"/login",children:"Sign In"})]})]})})}const By=500;function MD(){var je,Dt,Ot,B,G,J;const{userData:t}=lp(),e=xr(),[n,r]=O.useState("users"),[i,s]=O.useState([]),[o,l]=O.useState(!0),[u,c]=O.useState(""),[f,m]=O.useState(null),[g,R]=O.useState(""),[C,k]=O.useState(!1),[D,I]=O.useState(null),[w,S]=O.useState(""),[V,j]=O.useState(""),[M,T]=O.useState(0),[v,_]=O.useState(!1);O.useEffect(()=>{E()},[]);async function E(){l(!0);try{const X=(await Kt(mt(Oe,"users"))).docs.map(te=>({id:te.id,...te.data()}));s(X.filter(te=>te.role!=="admin"))}catch{me.error("Failed to load employees")}l(!1)}async function P(){if(!u||u.length!==4){me.error("Please enter a valid 4-digit code");return}k(!0);try{const W=on(mt(Oe,"users"),yt("employeeCode","==",u)),X=await Kt(W);if(X.empty){me.error("No employee found with this code"),m(null),k(!1);return}const te=X.docs[0],_e={id:te.id,...te.data()},at=new Date().toISOString().split("T")[0],It=on(mt(Oe,"attendance"),yt("uid","==",_e.id),yt("date","==",at)),St=await Kt(It);if(St.empty){const Fn=new Date,di=Fn.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"});await md(mt(Oe,"attendance"),{uid:_e.id,name:_e.name,employeeCode:_e.employeeCode,date:at,month:at.slice(0,7),checkInTime:di,timestamp:Fn.toISOString(),salaryEarned:By}),m({user:_e,alreadyCheckedIn:!1,time:di}),me.success(`Check-in recorded for ${_e.name}`),c("")}else{const Fn=St.docs[0].data();m({user:_e,alreadyCheckedIn:!0,time:Fn.checkInTime}),me("Already checked in today",{icon:"ℹ️"})}}catch(W){me.error("Error: "+W.message)}k(!1)}async function x(W){I(W),S(""),j(""),T(0),_(!0);try{const X=new Date().toISOString().slice(0,7),te=on(mt(Oe,"attendance"),yt("uid","==",W.id),yt("month","==",X)),at=(await Kt(te)).docs.reduce((Vt,Un)=>Vt+(Un.data().salaryEarned||0),0),It=on(mt(Oe,"salaryHistory"),yt("uid","==",W.id)),Fn=(await Kt(It)).docs.map(Vt=>Vt.data()).filter(Vt=>Vt.month===X).reduce((Vt,Un)=>Vt+(Un.amount||0),0),di=Math.max(0,at-Fn);T(di)}catch(X){console.error(X)}_(!1)}async function A(){if(!w||isNaN(w)){me.error("Please enter a valid amount");return}if(Number(w)>M){me.error(`Cannot exceed pending amount — Max: Rs. ${M.toLocaleString()}`);return}try{await md(mt(Oe,"salaryHistory"),{uid:D.id,name:D.name,amount:Number(w),note:V,paidAt:new Date().toISOString(),month:new Date().toISOString().slice(0,7)}),me.success(`Rs. ${Number(w).toLocaleString()} paid to ${D.name}`),I(null),S(""),j("")}catch{me.error("Failed to record salary payment")}}const be=i.filter(W=>{var X,te,_e;return((X=W.name)==null?void 0:X.toLowerCase().includes(g.toLowerCase()))||((te=W.email)==null?void 0:te.toLowerCase().includes(g.toLowerCase()))||((_e=W.employeeCode)==null?void 0:_e.includes(g))});return p.jsxs("div",{className:"admin-layout",children:[p.jsxs("aside",{className:"sidebar",children:[p.jsxs("div",{className:"sidebar-brand",children:[p.jsx("span",{children:"🏢"}),p.jsx("span",{children:"Admin Panel"})]}),p.jsxs("nav",{className:"sidebar-nav",children:[p.jsxs("button",{className:n==="users"?"active":"",onClick:()=>r("users"),children:[p.jsx("span",{children:"👥"})," Employees"]}),p.jsxs("button",{className:n==="attendance"?"active":"",onClick:()=>r("attendance"),children:[p.jsx("span",{children:"📋"})," Attendance"]})]}),p.jsxs("div",{className:"sidebar-footer",children:[p.jsxs("div",{className:"admin-info",children:[p.jsx("div",{className:"admin-avatar",children:(Dt=(je=t==null?void 0:t.name)==null?void 0:je[0])==null?void 0:Dt.toUpperCase()}),p.jsxs("div",{children:[p.jsx("div",{className:"admin-name",children:t==null?void 0:t.name}),p.jsx("div",{className:"admin-role",children:"Administrator"})]})]}),p.jsx("button",{className:"logout-btn",onClick:()=>{nE(si),e("/admin-login")},children:"🚪 Logout"})]})]}),p.jsxs("main",{className:"admin-main",children:[n==="users"&&p.jsxs("div",{children:[p.jsxs("div",{className:"page-header",children:[p.jsxs("div",{children:[p.jsx("h2",{children:"Employees"}),p.jsxs("p",{children:[i.length," total employees registered"]})]}),p.jsx("input",{className:"search-input",placeholder:"🔍 Search by name, email or code...",value:g,onChange:W=>R(W.target.value)})]}),o?p.jsx("div",{className:"loading-cards",children:[1,2,3].map(W=>p.jsx("div",{className:"skeleton-card"},W))}):be.length===0?p.jsxs("div",{className:"empty-state-box",children:[p.jsx("div",{className:"empty-icon",children:"👥"}),p.jsx("h3",{children:"No employees found"}),p.jsx("p",{children:"Employees will appear here once they sign up"})]}):p.jsx("div",{className:"users-grid",children:be.map(W=>{var X,te;return p.jsxs("div",{className:"user-card",onClick:()=>e(`/admin/user/${W.id}`),children:[p.jsxs("div",{className:"user-card-header",children:[p.jsx("div",{className:"user-avatar",children:(te=(X=W.name)==null?void 0:X[0])==null?void 0:te.toUpperCase()}),p.jsxs("div",{className:"user-badge",children:["#",W.employeeCode]})]}),p.jsxs("div",{className:"user-card-body",children:[p.jsx("h3",{children:W.name}),p.jsxs("p",{className:"user-email",children:["✉️ ",W.email]}),p.jsxs("p",{className:"user-phone",children:["📞 ",W.phone]}),W.department&&p.jsxs("p",{className:"user-dept",children:["🏷️ ",W.department]})]}),p.jsxs("div",{className:"user-card-footer",children:[p.jsx("span",{className:`status-badge ${W.status==="active"?"active":"inactive"}`,children:W.status||"active"}),p.jsx("button",{className:"pay-btn",onClick:_e=>{_e.stopPropagation(),x(W)},children:"💰 Pay Salary"})]})]},W.id)})})]}),n==="attendance"&&p.jsxs("div",{children:[p.jsx("div",{className:"page-header",children:p.jsxs("div",{children:[p.jsx("h2",{children:"Attendance Check-In"}),p.jsx("p",{children:"Enter employee 4-digit code to mark attendance"})]})}),p.jsxs("div",{className:"att-layout",children:[p.jsxs("div",{className:"checkin-card",children:[p.jsx("div",{className:"checkin-icon",children:"📲"}),p.jsx("h3",{children:"Mark Attendance"}),p.jsx("p",{className:"checkin-hint",children:"Ask employee for their 4-digit code"}),p.jsx("div",{className:"code-boxes",onClick:()=>document.getElementById("codeInput").focus(),children:[0,1,2,3].map(W=>p.jsx("div",{className:`code-box ${u[W]?"filled":""} ${u.length===W?"active":""}`,children:u[W]||""},W))}),p.jsx("input",{id:"codeInput",type:"tel",inputMode:"numeric",maxLength:4,placeholder:"Type code here",value:u,onChange:W=>{const X=W.target.value.replace(/\D/g,"").slice(0,4);c(X),m(null)},className:"code-real-input",autoFocus:!0}),p.jsx("button",{className:"btn-checkin-full",onClick:P,disabled:C||u.length!==4,children:C?"⏳ Processing...":"✅ Mark Attendance"}),f&&p.jsxs("div",{className:`checkin-result ${f.alreadyCheckedIn?"warn":"ok"}`,children:[p.jsx("div",{className:"result-av",children:(B=(Ot=f.user.name)==null?void 0:Ot[0])==null?void 0:B.toUpperCase()}),p.jsxs("div",{className:"result-right",children:[p.jsx("strong",{children:f.user.name}),p.jsx("span",{children:f.user.department||"Employee"}),p.jsx("span",{className:"result-time-text",children:f.alreadyCheckedIn?`⚠️ Already checked in at ${f.time}`:`✅ Checked in at ${f.time}`}),!f.alreadyCheckedIn&&p.jsxs("span",{className:"result-earn",children:["💰 Rs. ",By," earned today"]})]})]})]}),p.jsx(bD,{})]})]})]}),D&&p.jsx("div",{className:"modal-overlay",onClick:()=>I(null),children:p.jsxs("div",{className:"modal",onClick:W=>W.stopPropagation(),children:[p.jsxs("div",{className:"modal-header",children:[p.jsx("div",{className:"modal-av",children:(J=(G=D.name)==null?void 0:G[0])==null?void 0:J.toUpperCase()}),p.jsxs("div",{children:[p.jsx("h3",{children:D.name}),p.jsx("p",{children:"Record Salary Payment"})]})]}),v?p.jsx("div",{className:"modal-loading",children:"Calculating pending salary..."}):p.jsxs("div",{className:"modal-pending-info",children:[p.jsx("span",{children:"Pending this month"}),p.jsxs("span",{className:`modal-pending-val ${M===0?"zero":""}`,children:["Rs. ",M.toLocaleString()]})]}),M===0&&!v?p.jsx("div",{className:"modal-fully-paid",children:"✅ Salary fully paid for this month"}):p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"form-group",style:{marginTop:16},children:[p.jsxs("label",{children:["Amount (Rs.) — Max: Rs. ",M.toLocaleString()]}),p.jsx("input",{type:"number",placeholder:`e.g. ${M}`,value:w,max:M,min:1,onChange:W=>S(W.target.value)})]}),p.jsxs("div",{className:"form-group",style:{marginTop:12},children:[p.jsx("label",{children:"Note (optional)"}),p.jsx("input",{type:"text",placeholder:"e.g. May salary",value:V,onChange:W=>j(W.target.value)})]}),M>0&&p.jsxs("button",{className:"btn-autofill-modal",onClick:()=>S(String(M)),children:["⚡ Fill Full Pending — Rs. ",M.toLocaleString()]})]}),p.jsxs("div",{className:"modal-actions",children:[p.jsx("button",{className:"btn-cancel",onClick:()=>I(null),children:"Cancel"}),M>0&&!v&&p.jsx("button",{className:"btn-primary",onClick:A,children:"💰 Pay Now"})]})]})})]})}function bD(){const[t,e]=O.useState([]),[n,r]=O.useState(new Date().toISOString().slice(0,7)),[i,s]=O.useState(!1);return O.useEffect(()=>{async function o(){s(!0);try{const l=on(mt(Oe,"attendance"),yt("month","==",n),TD("timestamp","desc")),u=await Kt(l);e(u.docs.map(c=>c.data()))}catch{try{const l=on(mt(Oe,"attendance"),yt("month","==",n)),c=(await Kt(l)).docs.map(f=>f.data());c.sort((f,m)=>new Date(m.timestamp)-new Date(f.timestamp)),e(c)}catch{}}s(!1)}o()},[n]),p.jsxs("div",{className:"att-log-card",children:[p.jsxs("div",{className:"log-header",children:[p.jsx("h3",{children:"📋 Attendance Log"}),p.jsx("input",{type:"month",value:n,onChange:o=>r(o.target.value),className:"month-picker"})]}),p.jsx("div",{className:"log-table-wrap",children:i?p.jsx("div",{className:"log-loading",children:"Loading records..."}):p.jsxs("table",{className:"log-table",children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Employee"}),p.jsx("th",{children:"Code"}),p.jsx("th",{children:"Date"}),p.jsx("th",{children:"Check-In"}),p.jsx("th",{children:"Salary"})]})}),p.jsxs("tbody",{children:[t.map((o,l)=>p.jsxs("tr",{children:[p.jsx("td",{children:p.jsx("strong",{children:o.name})}),p.jsx("td",{children:p.jsx("span",{className:"code-badge",children:o.employeeCode})}),p.jsx("td",{children:o.date}),p.jsx("td",{children:o.checkInTime}),p.jsxs("td",{className:"salary-cell",children:["Rs. ",o.salaryEarned]})]},l)),t.length===0&&p.jsx("tr",{children:p.jsx("td",{colSpan:5,className:"empty-row",children:"No records for this month"})})]})]})})]})}function jD(){var T,v;const{uid:t}=TA(),e=xr(),[n,r]=O.useState(null),[i,s]=O.useState([]),[o,l]=O.useState([]),[u,c]=O.useState(new Date().toISOString().slice(0,7)),[f,m]=O.useState(!0),[g,R]=O.useState(""),[C,k]=O.useState(""),[D,I]=O.useState(!1);O.useEffect(()=>{async function _(){const E=await bu(ys(Oe,"users",t));E.exists()&&r({id:E.id,...E.data()}),m(!1)}_()},[t]),O.useEffect(()=>{w()},[t,u]);async function w(){try{const _=on(mt(Oe,"attendance"),yt("uid","==",t),yt("month","==",u)),P=(await Kt(_)).docs.map(je=>je.data());P.sort((je,Dt)=>new Date(Dt.date)-new Date(je.date)),s(P);const x=on(mt(Oe,"salaryHistory"),yt("uid","==",t)),be=(await Kt(x)).docs.map(je=>je.data());be.sort((je,Dt)=>new Date(Dt.paidAt)-new Date(je.paidAt)),l(be)}catch(_){console.error(_.message)}}async function S(_){_.preventDefault();const E=Number(g);if(!g||isNaN(E)||E<=0){me.error("Please enter a valid amount");return}if(E>M){me.error(`Cannot exceed pending amount — Max: Rs. ${M.toLocaleString()}`);return}I(!0);try{await md(mt(Oe,"salaryHistory"),{uid:n.id,name:n.name,amount:E,note:C,paidAt:new Date().toISOString(),month:u}),me.success(`Rs. ${E.toLocaleString()} paid successfully ✅`),R(""),k(""),await w()}catch{me.error("Failed to record payment")}I(!1)}if(f)return p.jsx("div",{className:"loading-screen",children:p.jsx("div",{className:"spinner"})});if(!n)return p.jsx("div",{className:"ud-error",children:"Employee not found"});const V=i.reduce((_,E)=>_+(E.salaryEarned||0),0),j=o.filter(_=>_.month===u).reduce((_,E)=>_+(E.amount||0),0),M=Math.max(0,V-j);return p.jsxs("div",{className:"ud-page",children:[p.jsx("div",{className:"ud-topbar",children:p.jsx("button",{className:"back-btn",onClick:()=>e("/admin"),children:"← Back to Admin"})}),p.jsxs("div",{className:"ud-container",children:[p.jsxs("div",{className:"ud-hero",children:[p.jsxs("div",{className:"ud-hero-top",children:[p.jsx("div",{className:"ud-avatar",children:(v=(T=n.name)==null?void 0:T[0])==null?void 0:v.toUpperCase()}),p.jsxs("div",{className:"ud-hero-name",children:[p.jsx("h2",{children:n.name}),p.jsxs("span",{className:"ud-code-badge",children:["Code: ",n.employeeCode]})]})]}),p.jsxs("div",{className:"ud-hero-body",children:[p.jsxs("div",{className:"ud-detail-item",children:[p.jsx("span",{className:"ud-detail-label",children:"📧 Email"}),p.jsx("span",{children:n.email})]}),p.jsxs("div",{className:"ud-detail-item",children:[p.jsx("span",{className:"ud-detail-label",children:"📞 Phone"}),p.jsx("span",{children:n.phone||"—"})]}),p.jsxs("div",{className:"ud-detail-item",children:[p.jsx("span",{className:"ud-detail-label",children:"🪪 CNIC"}),p.jsx("span",{children:n.cnic||"—"})]}),p.jsxs("div",{className:"ud-detail-item",children:[p.jsx("span",{className:"ud-detail-label",children:"🏷️ Department"}),p.jsx("span",{children:n.department||"—"})]}),p.jsxs("div",{className:"ud-detail-item",children:[p.jsx("span",{className:"ud-detail-label",children:"👤 Role"}),p.jsx("span",{className:"capitalize",children:n.role})]}),p.jsxs("div",{className:"ud-detail-item",children:[p.jsx("span",{className:"ud-detail-label",children:"📅 Joined"}),p.jsx("span",{children:n.createdAt?new Date(n.createdAt).toLocaleDateString("en-US"):"—"})]}),p.jsxs("div",{className:"ud-detail-item",children:[p.jsx("span",{className:"ud-detail-label",children:"💵 Salary / Day"}),p.jsxs("span",{children:["Rs. ",n.salaryPerDay||500]})]}),p.jsxs("div",{className:"ud-detail-item",children:[p.jsx("span",{className:"ud-detail-label",children:"🔘 Status"}),p.jsx("span",{className:`status-badge ${n.status==="active"?"active":"inactive"}`,children:n.status||"active"})]})]})]}),p.jsxs("div",{className:"ud-month-bar",children:[p.jsx("h3",{children:"Monthly Overview"}),p.jsx("input",{type:"month",value:u,onChange:_=>c(_.target.value),className:"month-picker"})]}),p.jsxs("div",{className:"ud-stats-row",children:[p.jsxs("div",{className:"ud-stat-card green",children:[p.jsx("div",{className:"ud-stat-icon",children:"📅"}),p.jsxs("div",{children:[p.jsx("div",{className:"ud-stat-value",children:i.length}),p.jsx("div",{className:"ud-stat-label",children:"Days Present"})]})]}),p.jsxs("div",{className:"ud-stat-card blue",children:[p.jsx("div",{className:"ud-stat-icon",children:"💰"}),p.jsxs("div",{children:[p.jsxs("div",{className:"ud-stat-value",children:["Rs. ",V.toLocaleString()]}),p.jsx("div",{className:"ud-stat-label",children:"Total Earned"})]})]}),p.jsxs("div",{className:"ud-stat-card purple",children:[p.jsx("div",{className:"ud-stat-icon",children:"✅"}),p.jsxs("div",{children:[p.jsxs("div",{className:"ud-stat-value",children:["Rs. ",j.toLocaleString()]}),p.jsx("div",{className:"ud-stat-label",children:"Salary Paid"})]})]}),p.jsxs("div",{className:"ud-stat-card orange",children:[p.jsx("div",{className:"ud-stat-icon",children:"⏳"}),p.jsxs("div",{children:[p.jsxs("div",{className:"ud-stat-value",children:["Rs. ",M.toLocaleString()]}),p.jsx("div",{className:"ud-stat-label",children:"Pending"})]})]})]}),p.jsxs("div",{className:"ud-bottom-row",children:[p.jsxs("div",{className:"ud-pay-card",children:[p.jsxs("div",{className:"ud-pay-card-header",children:[p.jsx("span",{children:"💸"}),p.jsxs("div",{children:[p.jsx("h3",{children:"Pay Salary"}),p.jsx("p",{children:u})]})]}),p.jsxs("div",{className:"ud-pay-summary",children:[p.jsxs("div",{className:"ud-pay-row",children:[p.jsx("span",{children:"Total Earned"}),p.jsxs("span",{className:"earned-val",children:["Rs. ",V.toLocaleString()]})]}),p.jsxs("div",{className:"ud-pay-row",children:[p.jsx("span",{children:"Already Paid"}),p.jsxs("span",{className:"paid-val",children:["Rs. ",j.toLocaleString()]})]}),p.jsx("div",{className:"ud-pay-divider"}),p.jsxs("div",{className:"ud-pay-row pending-row",children:[p.jsx("span",{children:"Pending"}),p.jsxs("span",{className:"pending-val",children:["Rs. ",M.toLocaleString()]})]})]}),p.jsxs("form",{onSubmit:S,className:"ud-pay-form",children:[p.jsxs("div",{className:"ud-pay-input-group",children:[p.jsx("label",{children:"Amount (Rs.)"}),p.jsx("input",{type:"number",placeholder:M>0?`Max: Rs. ${M}`:"No pending amount",value:g,onChange:_=>R(_.target.value),min:"1",max:M,disabled:M===0})]}),p.jsxs("div",{className:"ud-pay-input-group",children:[p.jsx("label",{children:"Note (optional)"}),p.jsx("input",{type:"text",placeholder:"e.g. May salary",value:C,onChange:_=>k(_.target.value),disabled:M===0})]}),M>0&&p.jsxs("button",{type:"button",className:"btn-autofill",onClick:()=>R(String(M)),children:["⚡ Fill Full Pending — Rs. ",M.toLocaleString()]}),p.jsx("button",{type:"submit",className:"btn-pay-now",disabled:D||M===0,children:M===0?"✅ Fully Paid":D?"Processing...":"💸 Pay Now"})]})]}),p.jsxs("div",{className:"ud-tables-col",children:[p.jsxs("div",{className:"ud-table-card",children:[p.jsxs("h3",{children:["📅 Attendance — ",u]}),p.jsx("div",{className:"table-wrap",children:p.jsxs("table",{className:"ud-table",children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"#"}),p.jsx("th",{children:"Date"}),p.jsx("th",{children:"Check-In Time"}),p.jsx("th",{children:"Earned"})]})}),p.jsxs("tbody",{children:[i.map((_,E)=>p.jsxs("tr",{children:[p.jsx("td",{children:E+1}),p.jsx("td",{children:_.date}),p.jsx("td",{children:_.checkInTime}),p.jsxs("td",{className:"salary-cell",children:["Rs. ",_.salaryEarned]})]},E)),i.length===0&&p.jsx("tr",{children:p.jsx("td",{colSpan:4,className:"empty-row",children:"No attendance records this month"})})]})]})})]}),p.jsxs("div",{className:"ud-table-card",children:[p.jsx("h3",{children:"💰 Salary Payment History"}),p.jsx("div",{className:"table-wrap",children:p.jsxs("table",{className:"ud-table",children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Date"}),p.jsx("th",{children:"Month"}),p.jsx("th",{children:"Amount"}),p.jsx("th",{children:"Note"})]})}),p.jsxs("tbody",{children:[o.map((_,E)=>{var P;return p.jsxs("tr",{children:[p.jsx("td",{children:new Date(_.paidAt).toLocaleDateString("en-US")}),p.jsx("td",{children:_.month}),p.jsxs("td",{className:"salary-cell",children:["Rs. ",(P=_.amount)==null?void 0:P.toLocaleString()]}),p.jsx("td",{children:_.note||"—"})]},E)}),o.length===0&&p.jsx("tr",{children:p.jsx("td",{colSpan:4,className:"empty-row",children:"No salary payments recorded yet"})})]})]})})]})]})]})]})]})}function FD(){var g,R;const{user:t,userData:e}=lp(),n=xr(),[r,i]=O.useState([]),[s,o]=O.useState([]),[l,u]=O.useState(new Date().toISOString().slice(0,7));O.useEffect(()=>{if(!t)return;async function C(){try{const k=on(mt(Oe,"attendance"),yt("uid","==",t.uid),yt("month","==",l)),I=(await Kt(k)).docs.map(j=>j.data());I.sort((j,M)=>new Date(M.date)-new Date(j.date)),i(I);const w=on(mt(Oe,"salaryHistory"),yt("uid","==",t.uid)),V=(await Kt(w)).docs.map(j=>j.data());V.sort((j,M)=>new Date(M.paidAt)-new Date(j.paidAt)),o(V)}catch(k){console.error("Dashboard error:",k.message)}}C()},[t,l]);const c=r.reduce((C,k)=>C+(k.salaryEarned||0),0),f=s.filter(C=>C.month===l).reduce((C,k)=>C+(k.amount||0),0),m=Math.max(0,c-f);return p.jsxs("div",{className:"dash-page",children:[p.jsxs("header",{className:"dash-header",children:[p.jsxs("div",{className:"dash-header-left",children:[p.jsx("div",{className:"dash-logo",children:"🏢"}),p.jsxs("div",{children:[p.jsx("h1",{children:"My Dashboard"}),p.jsxs("p",{children:["Welcome back, ",e==null?void 0:e.name]})]})]}),p.jsx("button",{className:"dash-logout",onClick:()=>{nE(si),n("/login")},children:"🚪 Sign Out"})]}),p.jsxs("div",{className:"dash-container",children:[p.jsxs("div",{className:"dash-profile",children:[p.jsx("div",{className:"dash-avatar",children:(R=(g=e==null?void 0:e.name)==null?void 0:g[0])==null?void 0:R.toUpperCase()}),p.jsxs("div",{className:"dash-profile-details",children:[p.jsx("h2",{children:e==null?void 0:e.name}),p.jsxs("div",{className:"dash-info-row",children:[p.jsxs("span",{children:["📧 ",e==null?void 0:e.email]}),p.jsxs("span",{children:["📞 ",e==null?void 0:e.phone]}),(e==null?void 0:e.department)&&p.jsxs("span",{children:["🏷️ ",e==null?void 0:e.department]})]})]}),p.jsxs("div",{className:"dash-emp-code",children:[p.jsx("div",{className:"code-label",children:"Your Employee Code"}),p.jsx("div",{className:"code-value",children:e==null?void 0:e.employeeCode}),p.jsx("div",{className:"code-hint",children:"Show this to admin for check-in"})]})]}),p.jsxs("div",{className:"dash-month-bar",children:[p.jsx("h3",{children:"Monthly Summary"}),p.jsx("input",{type:"month",value:l,onChange:C=>u(C.target.value),className:"month-picker"})]}),p.jsxs("div",{className:"dash-stats",children:[p.jsxs("div",{className:"dash-stat green",children:[p.jsx("div",{className:"stat-icon",children:"📅"}),p.jsx("div",{className:"stat-val",children:r.length}),p.jsx("div",{className:"stat-lbl",children:"Days Present"})]}),p.jsxs("div",{className:"dash-stat blue",children:[p.jsx("div",{className:"stat-icon",children:"💰"}),p.jsxs("div",{className:"stat-val",children:["Rs. ",c.toLocaleString()]}),p.jsx("div",{className:"stat-lbl",children:"Total Earned"})]}),p.jsxs("div",{className:"dash-stat purple",children:[p.jsx("div",{className:"stat-icon",children:"✅"}),p.jsxs("div",{className:"stat-val",children:["Rs. ",f.toLocaleString()]}),p.jsx("div",{className:"stat-lbl",children:"Salary Received"})]}),p.jsxs("div",{className:"dash-stat orange",children:[p.jsx("div",{className:"stat-icon",children:"⏳"}),p.jsxs("div",{className:"stat-val",children:["Rs. ",m.toLocaleString()]}),p.jsx("div",{className:"stat-lbl",children:"Pending"})]})]}),p.jsxs("div",{className:"dash-tables",children:[p.jsxs("div",{className:"dash-table-card",children:[p.jsxs("h3",{children:["Attendance — ",l]}),p.jsx("div",{className:"table-wrap",children:p.jsxs("table",{className:"ud-table",children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"#"}),p.jsx("th",{children:"Date"}),p.jsx("th",{children:"Check-In Time"}),p.jsx("th",{children:"Earned"})]})}),p.jsxs("tbody",{children:[r.map((C,k)=>p.jsxs("tr",{children:[p.jsx("td",{children:k+1}),p.jsx("td",{children:C.date}),p.jsx("td",{children:C.checkInTime}),p.jsxs("td",{className:"salary-cell",children:["Rs. ",C.salaryEarned]})]},k)),r.length===0&&p.jsx("tr",{children:p.jsx("td",{colSpan:4,className:"empty-row",children:"No attendance records this month"})})]})]})})]}),p.jsxs("div",{className:"dash-table-card",children:[p.jsx("h3",{children:"Salary Payment History"}),p.jsx("div",{className:"table-wrap",children:p.jsxs("table",{className:"ud-table",children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Date"}),p.jsx("th",{children:"Month"}),p.jsx("th",{children:"Amount"}),p.jsx("th",{children:"Note"})]})}),p.jsxs("tbody",{children:[s.map((C,k)=>{var D;return p.jsxs("tr",{children:[p.jsx("td",{children:new Date(C.paidAt).toLocaleDateString("en-US")}),p.jsx("td",{children:C.month}),p.jsxs("td",{className:"salary-cell",children:["Rs. ",(D=C.amount)==null?void 0:D.toLocaleString()]}),p.jsx("td",{children:C.note||"—"})]},k)}),s.length===0&&p.jsx("tr",{children:p.jsx("td",{colSpan:4,className:"empty-row",children:"No salary payments yet"})})]})]})})]})]})]})]})}function Hc({children:t,adminOnly:e=!1}){const{user:n,userData:r,loading:i}=lp();return i?p.jsx("div",{className:"loading-screen",children:p.jsx("div",{className:"spinner"})}):n?e&&(r==null?void 0:r.role)!=="admin"?p.jsx(Uh,{to:"/dashboard"}):t:p.jsx(Uh,{to:"/login"})}function UD(){return p.jsx(ND,{children:p.jsxs(HA,{children:[p.jsx(MR,{position:"top-right",toastOptions:{duration:3e3}}),p.jsxs(jA,{children:[p.jsx(Kn,{path:"/login",element:p.jsx(DD,{})}),p.jsx(Kn,{path:"/signup",element:p.jsx(LD,{})}),p.jsx(Kn,{path:"/dashboard",element:p.jsx(Hc,{children:p.jsx(FD,{})})}),p.jsx(Kn,{path:"/admin-login",element:p.jsx(OD,{})}),p.jsx(Kn,{path:"/admin",element:p.jsx(Hc,{adminOnly:!0,children:p.jsx(MD,{})})}),p.jsx(Kn,{path:"/admin/user/:uid",element:p.jsx(Hc,{adminOnly:!0,children:p.jsx(jD,{})})}),p.jsx(Kn,{path:"*",element:p.jsx(Uh,{to:"/login"})})]})]})})}qc.createRoot(document.getElementById("root")).render(p.jsx(Zy.StrictMode,{children:p.jsx(UD,{})}));
