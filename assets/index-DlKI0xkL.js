var Wv=Object.defineProperty;var jv=(n,e,t)=>e in n?Wv(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var en=(n,e,t)=>jv(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function kf(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Tt={},Ls=[],Si=()=>{},Zm=()=>!1,Kl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Hf=n=>n.startsWith("onUpdate:"),ln=Object.assign,Vf=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Xv=Object.prototype.hasOwnProperty,_t=(n,e)=>Xv.call(n,e),We=Array.isArray,Ps=n=>fa(n)==="[object Map]",Jl=n=>fa(n)==="[object Set]",Jd=n=>fa(n)==="[object Date]",Je=n=>typeof n=="function",Ut=n=>typeof n=="string",ui=n=>typeof n=="symbol",Rt=n=>n!==null&&typeof n=="object",Qm=n=>(Rt(n)||Je(n))&&Je(n.then)&&Je(n.catch),eg=Object.prototype.toString,fa=n=>eg.call(n),$v=n=>fa(n).slice(8,-1),tg=n=>fa(n)==="[object Object]",zf=n=>Ut(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Lo=kf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zl=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},qv=/-\w/g,$n=Zl(n=>n.replace(qv,e=>e.slice(1).toUpperCase())),Yv=/\B([A-Z])/g,os=Zl(n=>n.replace(Yv,"-$1").toLowerCase()),Ql=Zl(n=>n.charAt(0).toUpperCase()+n.slice(1)),_c=Zl(n=>n?`on${Ql(n)}`:""),Sr=(n,e)=>!Object.is(n,e),ul=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},ng=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Rl=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Zd;const ec=()=>Zd||(Zd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ji(n){if(We(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Ut(i)?Qv(i):Ji(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Ut(n)||Rt(n))return n}const Kv=/;(?![^(]*\))/g,Jv=/:([^]+)/,Zv=/\/\*[^]*?\*\//g;function Qv(n){const e={};return n.replace(Zv,"").split(Kv).forEach(t=>{if(t){const i=t.split(Jv);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function mn(n){let e="";if(Ut(n))e=n;else if(We(n))for(let t=0;t<n.length;t++){const i=mn(n[t]);i&&(e+=i+" ")}else if(Rt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}function Qd(n){if(!n)return null;let{class:e,style:t}=n;return e&&!Ut(e)&&(n.class=mn(e)),t&&(n.style=Ji(t)),n}const e0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",t0=kf(e0);function ig(n){return!!n||n===""}function n0(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=tc(n[i],e[i]);return t}function tc(n,e){if(n===e)return!0;let t=Jd(n),i=Jd(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=ui(n),i=ui(e),t||i)return n===e;if(t=We(n),i=We(e),t||i)return t&&i?n0(n,e):!1;if(t=Rt(n),i=Rt(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!tc(n[o],e[o]))return!1}}return String(n)===String(e)}function i0(n,e){return n.findIndex(t=>tc(t,e))}const rg=n=>!!(n&&n.__v_isRef===!0),$e=n=>Ut(n)?n:n==null?"":We(n)||Rt(n)&&(n.toString===eg||!Je(n.toString))?rg(n)?$e(n.value):JSON.stringify(n,sg,2):String(n),sg=(n,e)=>rg(e)?sg(n,e.value):Ps(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[vc(i,s)+" =>"]=r,t),{})}:Jl(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>vc(t))}:ui(e)?vc(e):Rt(e)&&!We(e)&&!tg(e)?String(e):e,vc=(n,e="")=>{var t;return ui(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bn;class og{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=bn,!e&&bn&&(this.index=(bn.scopes||(bn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=bn;try{return bn=this,e()}finally{bn=t}}}on(){++this._on===1&&(this.prevScope=bn,bn=this)}off(){this._on>0&&--this._on===0&&(bn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function r0(n){return new og(n)}function s0(){return bn}let Ct;const xc=new WeakSet;class ag{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,bn&&bn.active&&bn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,xc.has(this)&&(xc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||cg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,eh(this),ug(this);const e=Ct,t=li;Ct=this,li=!0;try{return this.fn()}finally{fg(this),Ct=e,li=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)jf(e);this.deps=this.depsTail=void 0,eh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?xc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Su(this)&&this.run()}get dirty(){return Su(this)}}let lg=0,Po,Io;function cg(n,e=!1){if(n.flags|=8,e){n.next=Io,Io=n;return}n.next=Po,Po=n}function Gf(){lg++}function Wf(){if(--lg>0)return;if(Io){let e=Io;for(Io=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Po;){let e=Po;for(Po=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function ug(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function fg(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),jf(i),o0(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Su(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(dg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function dg(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Go)||(n.globalVersion=Go,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Su(n))))return;n.flags|=2;const e=n.dep,t=Ct,i=li;Ct=n,li=!0;try{ug(n);const r=n.fn(n._value);(e.version===0||Sr(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ct=t,li=i,fg(n),n.flags&=-3}}function jf(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)jf(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function o0(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let li=!0;const hg=[];function nr(){hg.push(li),li=!1}function ir(){const n=hg.pop();li=n===void 0?!0:n}function eh(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ct;Ct=void 0;try{e()}finally{Ct=t}}}let Go=0;class a0{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Xf{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ct||!li||Ct===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ct)t=this.activeLink=new a0(Ct,this),Ct.deps?(t.prevDep=Ct.depsTail,Ct.depsTail.nextDep=t,Ct.depsTail=t):Ct.deps=Ct.depsTail=t,pg(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Ct.depsTail,t.nextDep=void 0,Ct.depsTail.nextDep=t,Ct.depsTail=t,Ct.deps===t&&(Ct.deps=i)}return t}trigger(e){this.version++,Go++,this.notify(e)}notify(e){Gf();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Wf()}}}function pg(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)pg(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const bu=new WeakMap,Qr=Symbol(""),Mu=Symbol(""),Wo=Symbol("");function sn(n,e,t){if(li&&Ct){let i=bu.get(n);i||bu.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Xf),r.map=i,r.key=t),r.track()}}function ji(n,e,t,i,r,s){const o=bu.get(n);if(!o){Go++;return}const a=l=>{l&&l.trigger()};if(Gf(),e==="clear")o.forEach(a);else{const l=We(n),c=l&&zf(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===Wo||!ui(d)&&d>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Wo)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Qr)),Ps(n)&&a(o.get(Mu)));break;case"delete":l||(a(o.get(Qr)),Ps(n)&&a(o.get(Mu)));break;case"set":Ps(n)&&a(o.get(Qr));break}}Wf()}function ls(n){const e=gt(n);return e===n?e:(sn(e,"iterate",Wo),jn(n)?e:e.map(Kt))}function nc(n){return sn(n=gt(n),"iterate",Wo),n}const l0={__proto__:null,[Symbol.iterator](){return yc(this,Symbol.iterator,Kt)},concat(...n){return ls(this).concat(...n.map(e=>We(e)?ls(e):e))},entries(){return yc(this,"entries",n=>(n[1]=Kt(n[1]),n))},every(n,e){return Di(this,"every",n,e,void 0,arguments)},filter(n,e){return Di(this,"filter",n,e,t=>t.map(Kt),arguments)},find(n,e){return Di(this,"find",n,e,Kt,arguments)},findIndex(n,e){return Di(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Di(this,"findLast",n,e,Kt,arguments)},findLastIndex(n,e){return Di(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Di(this,"forEach",n,e,void 0,arguments)},includes(...n){return Sc(this,"includes",n)},indexOf(...n){return Sc(this,"indexOf",n)},join(n){return ls(this).join(n)},lastIndexOf(...n){return Sc(this,"lastIndexOf",n)},map(n,e){return Di(this,"map",n,e,void 0,arguments)},pop(){return co(this,"pop")},push(...n){return co(this,"push",n)},reduce(n,...e){return th(this,"reduce",n,e)},reduceRight(n,...e){return th(this,"reduceRight",n,e)},shift(){return co(this,"shift")},some(n,e){return Di(this,"some",n,e,void 0,arguments)},splice(...n){return co(this,"splice",n)},toReversed(){return ls(this).toReversed()},toSorted(n){return ls(this).toSorted(n)},toSpliced(...n){return ls(this).toSpliced(...n)},unshift(...n){return co(this,"unshift",n)},values(){return yc(this,"values",Kt)}};function yc(n,e,t){const i=nc(n),r=i[e]();return i!==n&&!jn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const c0=Array.prototype;function Di(n,e,t,i,r,s){const o=nc(n),a=o!==n&&!jn(n),l=o[e];if(l!==c0[e]){const f=l.apply(n,s);return a?Kt(f):f}let c=t;o!==n&&(a?c=function(f,d){return t.call(this,Kt(f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function th(n,e,t,i){const r=nc(n);let s=t;return r!==n&&(jn(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,Kt(a),l,n)}),r[e](s,...i)}function Sc(n,e,t){const i=gt(n);sn(i,"iterate",Wo);const r=i[e](...t);return(r===-1||r===!1)&&Yf(t[0])?(t[0]=gt(t[0]),i[e](...t)):r}function co(n,e,t=[]){nr(),Gf();const i=gt(n)[e].apply(n,t);return Wf(),ir(),i}const u0=kf("__proto__,__v_isRef,__isVue"),mg=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ui));function f0(n){ui(n)||(n=String(n));const e=gt(this);return sn(e,"has",n),e.hasOwnProperty(n)}class gg{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?S0:yg:s?xg:vg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=We(e);if(!r){let l;if(o&&(l=l0[t]))return l;if(t==="hasOwnProperty")return f0}const a=Reflect.get(e,t,Zt(e)?e:i);if((ui(t)?mg.has(t):u0(t))||(r||sn(e,"get",t),s))return a;if(Zt(a)){const l=o&&zf(t)?a:a.value;return r&&Rt(l)?Tu(l):l}return Rt(a)?r?Tu(a):ic(a):a}}class _g extends gg{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=Er(s);if(!jn(i)&&!Er(i)&&(s=gt(s),i=gt(i)),!We(e)&&Zt(s)&&!Zt(i))return l||(s.value=i),!0}const o=We(e)&&zf(t)?Number(t)<e.length:_t(e,t),a=Reflect.set(e,t,i,Zt(e)?e:r);return e===gt(r)&&(o?Sr(i,s)&&ji(e,"set",t,i):ji(e,"add",t,i)),a}deleteProperty(e,t){const i=_t(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&ji(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!ui(t)||!mg.has(t))&&sn(e,"has",t),i}ownKeys(e){return sn(e,"iterate",We(e)?"length":Qr),Reflect.ownKeys(e)}}class d0 extends gg{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const h0=new _g,p0=new d0,m0=new _g(!0);const Eu=n=>n,Ta=n=>Reflect.getPrototypeOf(n);function g0(n,e,t){return function(...i){const r=this.__v_raw,s=gt(r),o=Ps(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Eu:e?Cl:Kt;return!e&&sn(s,"iterate",l?Mu:Qr),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Aa(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function _0(n,e){const t={get(r){const s=this.__v_raw,o=gt(s),a=gt(r);n||(Sr(r,a)&&sn(o,"get",r),sn(o,"get",a));const{has:l}=Ta(o),c=e?Eu:n?Cl:Kt;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&sn(gt(r),"iterate",Qr),r.size},has(r){const s=this.__v_raw,o=gt(s),a=gt(r);return n||(Sr(r,a)&&sn(o,"has",r),sn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=gt(a),c=e?Eu:n?Cl:Kt;return!n&&sn(l,"iterate",Qr),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return ln(t,n?{add:Aa("add"),set:Aa("set"),delete:Aa("delete"),clear:Aa("clear")}:{add(r){!e&&!jn(r)&&!Er(r)&&(r=gt(r));const s=gt(this);return Ta(s).has.call(s,r)||(s.add(r),ji(s,"add",r,r)),this},set(r,s){!e&&!jn(s)&&!Er(s)&&(s=gt(s));const o=gt(this),{has:a,get:l}=Ta(o);let c=a.call(o,r);c||(r=gt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Sr(s,u)&&ji(o,"set",r,s):ji(o,"add",r,s),this},delete(r){const s=gt(this),{has:o,get:a}=Ta(s);let l=o.call(s,r);l||(r=gt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&ji(s,"delete",r,void 0),c},clear(){const r=gt(this),s=r.size!==0,o=r.clear();return s&&ji(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=g0(r,n,e)}),t}function $f(n,e){const t=_0(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(_t(t,r)&&r in i?t:i,r,s)}const v0={get:$f(!1,!1)},x0={get:$f(!1,!0)},y0={get:$f(!0,!1)};const vg=new WeakMap,xg=new WeakMap,yg=new WeakMap,S0=new WeakMap;function b0(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function M0(n){return n.__v_skip||!Object.isExtensible(n)?0:b0($v(n))}function ic(n){return Er(n)?n:qf(n,!1,h0,v0,vg)}function E0(n){return qf(n,!1,m0,x0,xg)}function Tu(n){return qf(n,!0,p0,y0,yg)}function qf(n,e,t,i,r){if(!Rt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=M0(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function Is(n){return Er(n)?Is(n.__v_raw):!!(n&&n.__v_isReactive)}function Er(n){return!!(n&&n.__v_isReadonly)}function jn(n){return!!(n&&n.__v_isShallow)}function Yf(n){return n?!!n.__v_raw:!1}function gt(n){const e=n&&n.__v_raw;return e?gt(e):n}function T0(n){return!_t(n,"__v_skip")&&Object.isExtensible(n)&&ng(n,"__v_skip",!0),n}const Kt=n=>Rt(n)?ic(n):n,Cl=n=>Rt(n)?Tu(n):n;function Zt(n){return n?n.__v_isRef===!0:!1}function Ze(n){return bg(n,!1)}function Sg(n){return bg(n,!0)}function bg(n,e){return Zt(n)?n:new A0(n,e)}class A0{constructor(e,t){this.dep=new Xf,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:gt(e),this._value=t?e:Kt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||jn(e)||Er(e);e=i?e:gt(e),Sr(e,t)&&(this._rawValue=e,this._value=i?e:Kt(e),this.dep.trigger())}}function me(n){return Zt(n)?n.value:n}const w0={get:(n,e,t)=>e==="__v_raw"?n:me(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Zt(r)&&!Zt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Mg(n){return Is(n)?n:new Proxy(n,w0)}class R0{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Xf(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Go-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ct!==this)return cg(this,!0),!0}get value(){const e=this.dep.track();return dg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function C0(n,e,t=!1){let i,r;return Je(n)?i=n:(i=n.get,r=n.set),new R0(i,r,t)}const wa={},Ll=new WeakMap;let Vr;function L0(n,e=!1,t=Vr){if(t){let i=Ll.get(t);i||Ll.set(t,i=[]),i.push(n)}}function P0(n,e,t=Tt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=_=>r?_:jn(_)||r===!1||r===0?Xi(_,1):Xi(_);let u,f,d,p,g=!1,v=!1;if(Zt(n)?(f=()=>n.value,g=jn(n)):Is(n)?(f=()=>c(n),g=!0):We(n)?(v=!0,g=n.some(_=>Is(_)||jn(_)),f=()=>n.map(_=>{if(Zt(_))return _.value;if(Is(_))return c(_);if(Je(_))return l?l(_,2):_()})):Je(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){nr();try{d()}finally{ir()}}const _=Vr;Vr=u;try{return l?l(n,3,[p]):n(p)}finally{Vr=_}}:f=Si,e&&r){const _=f,A=r===!0?1/0:r;f=()=>Xi(_(),A)}const m=s0(),h=()=>{u.stop(),m&&m.active&&Vf(m.effects,u)};if(s&&e){const _=e;e=(...A)=>{_(...A),h()}}let S=v?new Array(n.length).fill(wa):wa;const y=_=>{if(!(!(u.flags&1)||!u.dirty&&!_))if(e){const A=u.run();if(r||g||(v?A.some((C,T)=>Sr(C,S[T])):Sr(A,S))){d&&d();const C=Vr;Vr=u;try{const T=[A,S===wa?void 0:v&&S[0]===wa?[]:S,p];S=A,l?l(e,3,T):e(...T)}finally{Vr=C}}}else u.run()};return a&&a(y),u=new ag(f),u.scheduler=o?()=>o(y,!1):y,p=_=>L0(_,!1,u),d=u.onStop=()=>{const _=Ll.get(u);if(_){if(l)l(_,4);else for(const A of _)A();Ll.delete(u)}},e?i?y(!0):S=u.run():o?o(y.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function Xi(n,e=1/0,t){if(e<=0||!Rt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Zt(n))Xi(n.value,e,t);else if(We(n))for(let i=0;i<n.length;i++)Xi(n[i],e,t);else if(Jl(n)||Ps(n))n.forEach(i=>{Xi(i,e,t)});else if(tg(n)){for(const i in n)Xi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Xi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function da(n,e,t,i){try{return i?n(...i):n()}catch(r){rc(r,e,t)}}function Ai(n,e,t,i){if(Je(n)){const r=da(n,e,t,i);return r&&Qm(r)&&r.catch(s=>{rc(s,e,t)}),r}if(We(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Ai(n[s],e,t,i));return r}}function rc(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Tt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){nr(),da(s,null,10,[n,l,c]),ir();return}}I0(n,t,r,i,o)}function I0(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const pn=[];let _i=-1;const Ds=[];let _r=null,As=0;const Eg=Promise.resolve();let Pl=null;function Yr(n){const e=Pl||Eg;return n?e.then(this?n.bind(this):n):e}function D0(n){let e=_i+1,t=pn.length;for(;e<t;){const i=e+t>>>1,r=pn[i],s=jo(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Kf(n){if(!(n.flags&1)){const e=jo(n),t=pn[pn.length-1];!t||!(n.flags&2)&&e>=jo(t)?pn.push(n):pn.splice(D0(e),0,n),n.flags|=1,Tg()}}function Tg(){Pl||(Pl=Eg.then(wg))}function N0(n){We(n)?Ds.push(...n):_r&&n.id===-1?_r.splice(As+1,0,n):n.flags&1||(Ds.push(n),n.flags|=1),Tg()}function nh(n,e,t=_i+1){for(;t<pn.length;t++){const i=pn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;pn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Ag(n){if(Ds.length){const e=[...new Set(Ds)].sort((t,i)=>jo(t)-jo(i));if(Ds.length=0,_r){_r.push(...e);return}for(_r=e,As=0;As<_r.length;As++){const t=_r[As];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}_r=null,As=0}}const jo=n=>n.id==null?n.flags&2?-1:1/0:n.id;function wg(n){try{for(_i=0;_i<pn.length;_i++){const e=pn[_i];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),da(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;_i<pn.length;_i++){const e=pn[_i];e&&(e.flags&=-2)}_i=-1,pn.length=0,Ag(),Pl=null,(pn.length||Ds.length)&&wg()}}let Jt=null,Rg=null;function Il(n){const e=Jt;return Jt=n,Rg=n&&n.type.__scopeId||null,e}function ar(n,e=Jt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Ul(-1);const s=Il(e);let o;try{o=n(...r)}finally{Il(s),i._d&&Ul(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Vn(n,e){if(Jt===null)return n;const t=ac(Jt),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=Tt]=e[r];s&&(Je(s)&&(s={mounted:s,updated:s}),s.deep&&Xi(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ir(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(nr(),Ai(l,t,8,[n.el,a,n,e]),ir())}}const Cg=Symbol("_vte"),U0=n=>n.__isTeleport,Do=n=>n&&(n.disabled||n.disabled===""),ih=n=>n&&(n.defer||n.defer===""),rh=n=>typeof SVGElement<"u"&&n instanceof SVGElement,sh=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,Au=(n,e)=>{const t=n&&n.to;return Ut(t)?e?e(t):null:t},Lg={name:"Teleport",__isTeleport:!0,process(n,e,t,i,r,s,o,a,l,c){const{mc:u,pc:f,pbc:d,o:{insert:p,querySelector:g,createText:v,createComment:m}}=c,h=Do(e.props);let{shapeFlag:S,children:y,dynamicChildren:_}=e;if(n==null){const A=e.el=v(""),C=e.anchor=v("");p(A,t,i),p(C,t,i);const T=(M,b)=>{S&16&&u(y,M,b,r,s,o,a,l)},N=()=>{const M=e.target=Au(e.props,g),b=Pg(M,e,v,p);M&&(o!=="svg"&&rh(M)?o="svg":o!=="mathml"&&sh(M)&&(o="mathml"),r&&r.isCE&&(r.ce._teleportTargets||(r.ce._teleportTargets=new Set)).add(M),h||(T(M,b),fl(e,!1)))};h&&(T(t,C),fl(e,!0)),ih(e.props)?(e.el.__isMounted=!1,hn(()=>{N(),delete e.el.__isMounted},s)):N()}else{if(ih(e.props)&&n.el.__isMounted===!1){hn(()=>{Lg.process(n,e,t,i,r,s,o,a,l,c)},s);return}e.el=n.el,e.targetStart=n.targetStart;const A=e.anchor=n.anchor,C=e.target=n.target,T=e.targetAnchor=n.targetAnchor,N=Do(n.props),M=N?t:C,b=N?A:T;if(o==="svg"||rh(C)?o="svg":(o==="mathml"||sh(C))&&(o="mathml"),_?(d(n.dynamicChildren,_,M,r,s,o,a),td(n,e,!0)):l||f(n,e,M,b,r,s,o,a,!1),h)N?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):Ra(e,t,A,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const D=e.target=Au(e.props,g);D&&Ra(e,D,null,c,0)}else N&&Ra(e,C,T,c,1);fl(e,h)}},remove(n,e,t,{um:i,o:{remove:r}},s){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:f,props:d}=n;if(f&&(r(c),r(u)),s&&r(l),o&16){const p=s||!Do(d);for(let g=0;g<a.length;g++){const v=a[g];i(v,e,t,p,!!v.dynamicChildren)}}},move:Ra,hydrate:O0};function Ra(n,e,t,{o:{insert:i},m:r},s=2){s===0&&i(n.targetAnchor,e,t);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=n,f=s===2;if(f&&i(o,e,t),(!f||Do(u))&&l&16)for(let d=0;d<c.length;d++)r(c[d],e,t,2);f&&i(a,e,t)}function O0(n,e,t,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},f){function d(v,m,h,S){m.anchor=f(o(v),m,a(v),t,i,r,s),m.targetStart=h,m.targetAnchor=S}const p=e.target=Au(e.props,l),g=Do(e.props);if(p){const v=p._lpa||p.firstChild;if(e.shapeFlag&16)if(g)d(n,e,v,v&&o(v));else{e.anchor=o(n);let m=v;for(;m;){if(m&&m.nodeType===8){if(m.data==="teleport start anchor")e.targetStart=m;else if(m.data==="teleport anchor"){e.targetAnchor=m,p._lpa=e.targetAnchor&&o(e.targetAnchor);break}}m=o(m)}e.targetAnchor||Pg(p,e,u,c),f(v&&o(v),e,p,t,i,r,s)}fl(e,g)}else g&&e.shapeFlag&16&&d(n,e,n,o(n));return e.anchor&&o(e.anchor)}const F0=Lg;function fl(n,e){const t=n.ctx;if(t&&t.ut){let i,r;for(e?(i=n.el,r=n.anchor):(i=n.targetStart,r=n.targetAnchor);i&&i!==r;)i.nodeType===1&&i.setAttribute("data-v-owner",t.uid),i=i.nextSibling;t.ut()}}function Pg(n,e,t,i){const r=e.targetStart=t(""),s=e.targetAnchor=t("");return r[Cg]=s,n&&(i(r,n),i(s,n)),s}const B0=Symbol("_leaveCb");function Jf(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Jf(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function vt(n,e){return Je(n)?ln({name:n.name},e,{setup:n}):n}function Ig(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Dg(n){const e=ns(),t=Sg(null);if(e){const r=e.refs===Tt?e.refs={}:e.refs;Object.defineProperty(r,n,{enumerable:!0,get:()=>t.value,set:s=>t.value=s})}return t}const Dl=new WeakMap;function No(n,e,t,i,r=!1){if(We(n)){n.forEach((g,v)=>No(g,e&&(We(e)?e[v]:e),t,i,r));return}if(Ns(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&No(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?ac(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Tt?a.refs={}:a.refs,f=a.setupState,d=gt(f),p=f===Tt?Zm:g=>_t(d,g);if(c!=null&&c!==l){if(oh(e),Ut(c))u[c]=null,p(c)&&(f[c]=null);else if(Zt(c)){c.value=null;const g=e;g.k&&(u[g.k]=null)}}if(Je(l))da(l,a,12,[o,u]);else{const g=Ut(l),v=Zt(l);if(g||v){const m=()=>{if(n.f){const h=g?p(l)?f[l]:u[l]:l.value;if(r)We(h)&&Vf(h,s);else if(We(h))h.includes(s)||h.push(s);else if(g)u[l]=[s],p(l)&&(f[l]=u[l]);else{const S=[s];l.value=S,n.k&&(u[n.k]=S)}}else g?(u[l]=o,p(l)&&(f[l]=o)):v&&(l.value=o,n.k&&(u[n.k]=o))};if(o){const h=()=>{m(),Dl.delete(n)};h.id=-1,Dl.set(n,h),hn(h,t)}else oh(n),m()}}}function oh(n){const e=Dl.get(n);e&&(e.flags|=8,Dl.delete(n))}ec().requestIdleCallback;ec().cancelIdleCallback;const Ns=n=>!!n.type.__asyncLoader,Ng=n=>n.type.__isKeepAlive;function k0(n,e){Ug(n,"a",e)}function H0(n,e){Ug(n,"da",e)}function Ug(n,e,t=an){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(sc(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Ng(r.parent.vnode)&&V0(i,e,t,r),r=r.parent}}function V0(n,e,t,i){const r=sc(e,n,i,!0);di(()=>{Vf(i[e],r)},t)}function sc(n,e,t=an,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{nr();const a=ma(t),l=Ai(e,t,n,o);return a(),ir(),l});return i?r.unshift(s):r.push(s),s}}const lr=n=>(e,t=an)=>{(!Yo||n==="sp")&&sc(n,(...i)=>e(...i),t)},z0=lr("bm"),Cn=lr("m"),G0=lr("bu"),W0=lr("u"),Zf=lr("bum"),di=lr("um"),j0=lr("sp"),X0=lr("rtg"),$0=lr("rtc");function q0(n,e=an){sc("ec",n,e)}const Y0="components",Og=Symbol.for("v-ndc");function ha(n){return Ut(n)?K0(Y0,n,!1)||n:n||Og}function K0(n,e,t=!0,i=!1){const r=Jt||an;if(r){const s=r.type;{const a=Fx(s,!1);if(a&&(a===e||a===$n(e)||a===Ql($n(e))))return s}const o=ah(r[n]||s[n],e)||ah(r.appContext[n],e);return!o&&i?s:o}}function ah(n,e){return n&&(n[e]||n[$n(e)]||n[Ql($n(e))])}function En(n,e,t,i){let r;const s=t,o=We(n);if(o||Ut(n)){const a=o&&Is(n);let l=!1,c=!1;a&&(l=!jn(n),c=Er(n),n=nc(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?Cl(Kt(n[u])):Kt(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(Rt(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}function jr(n,e,t={},i,r){if(Jt.ce||Jt.parent&&Ns(Jt.parent)&&Jt.parent.ce){const c=Object.keys(t).length>0;return e!=="default"&&(t.name=e),_e(),Bt(Mt,null,[ze("slot",t,i&&i())],c?-2:64)}let s=n[e];s&&s._c&&(s._d=!1),_e();const o=s&&Fg(s(t)),a=t.key||o&&o.key,l=Bt(Mt,{key:(a&&!ui(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||(i?i():[]),o&&n._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function Fg(n){return n.some(e=>$o(e)?!(e.type===rr||e.type===Mt&&!Fg(e.children)):!0)?n:null}const wu=n=>n?n_(n)?ac(n):wu(n.parent):null,Uo=ln(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>wu(n.parent),$root:n=>wu(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>kg(n),$forceUpdate:n=>n.f||(n.f=()=>{Kf(n.update)}),$nextTick:n=>n.n||(n.n=Yr.bind(n.proxy)),$watch:n=>vx.bind(n)}),bc=(n,e)=>n!==Tt&&!n.__isScriptSetup&&_t(n,e),J0={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(bc(i,e))return o[e]=1,i[e];if(r!==Tt&&_t(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&_t(c,e))return o[e]=3,s[e];if(t!==Tt&&_t(t,e))return o[e]=4,t[e];Ru&&(o[e]=0)}}const u=Uo[e];let f,d;if(u)return e==="$attrs"&&sn(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==Tt&&_t(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,_t(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return bc(r,e)?(r[e]=t,!0):i!==Tt&&_t(i,e)?(i[e]=t,!0):_t(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s,type:o}},a){let l,c;return!!(t[a]||n!==Tt&&a[0]!=="$"&&_t(n,a)||bc(e,a)||(l=s[0])&&_t(l,a)||_t(i,a)||_t(Uo,a)||_t(r.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:_t(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function lh(n){return We(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ru=!0;function Z0(n){const e=kg(n),t=n.proxy,i=n.ctx;Ru=!1,e.beforeCreate&&ch(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:g,activated:v,deactivated:m,beforeDestroy:h,beforeUnmount:S,destroyed:y,unmounted:_,render:A,renderTracked:C,renderTriggered:T,errorCaptured:N,serverPrefetch:M,expose:b,inheritAttrs:D,components:W,directives:F,filters:k}=e;if(c&&Q0(c,i,null),o)for(const Z in o){const $=o[Z];Je($)&&(i[Z]=$.bind(t))}if(r){const Z=r.call(t,t);Rt(Z)&&(n.data=ic(Z))}if(Ru=!0,s)for(const Z in s){const $=s[Z],ce=Je($)?$.bind(t,t):Je($.get)?$.get.bind(t,t):Si,ve=!Je($)&&Je($.set)?$.set.bind(t):Si,Te=ni({get:ce,set:ve});Object.defineProperty(i,Z,{enumerable:!0,configurable:!0,get:()=>Te.value,set:ke=>Te.value=ke})}if(a)for(const Z in a)Bg(a[Z],i,t,Z);if(l){const Z=Je(l)?l.call(t):l;Reflect.ownKeys(Z).forEach($=>{sx($,Z[$])})}u&&ch(u,n,"c");function G(Z,$){We($)?$.forEach(ce=>Z(ce.bind(t))):$&&Z($.bind(t))}if(G(z0,f),G(Cn,d),G(G0,p),G(W0,g),G(k0,v),G(H0,m),G(q0,N),G($0,C),G(X0,T),G(Zf,S),G(di,_),G(j0,M),We(b))if(b.length){const Z=n.exposed||(n.exposed={});b.forEach($=>{Object.defineProperty(Z,$,{get:()=>t[$],set:ce=>t[$]=ce,enumerable:!0})})}else n.exposed||(n.exposed={});A&&n.render===Si&&(n.render=A),D!=null&&(n.inheritAttrs=D),W&&(n.components=W),F&&(n.directives=F),M&&Ig(n)}function Q0(n,e,t=Si){We(n)&&(n=Cu(n));for(const i in n){const r=n[i];let s;Rt(r)?"default"in r?s=Oo(r.from||i,r.default,!0):s=Oo(r.from||i):s=Oo(r),Zt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function ch(n,e,t){Ai(We(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Bg(n,e,t,i){let r=i.includes(".")?Jg(t,i):()=>t[i];if(Ut(n)){const s=e[n];Je(s)&&Zi(r,s)}else if(Je(n))Zi(r,n.bind(t));else if(Rt(n))if(We(n))n.forEach(s=>Bg(s,e,t,i));else{const s=Je(n.handler)?n.handler.bind(t):e[n.handler];Je(s)&&Zi(r,s,n)}}function kg(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Nl(l,c,o,!0)),Nl(l,e,o)),Rt(e)&&s.set(e,l),l}function Nl(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Nl(n,s,t,!0),r&&r.forEach(o=>Nl(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=ex[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const ex={data:uh,props:fh,emits:fh,methods:wo,computed:wo,beforeCreate:fn,created:fn,beforeMount:fn,mounted:fn,beforeUpdate:fn,updated:fn,beforeDestroy:fn,beforeUnmount:fn,destroyed:fn,unmounted:fn,activated:fn,deactivated:fn,errorCaptured:fn,serverPrefetch:fn,components:wo,directives:wo,watch:nx,provide:uh,inject:tx};function uh(n,e){return e?n?function(){return ln(Je(n)?n.call(this,this):n,Je(e)?e.call(this,this):e)}:e:n}function tx(n,e){return wo(Cu(n),Cu(e))}function Cu(n){if(We(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function fn(n,e){return n?[...new Set([].concat(n,e))]:e}function wo(n,e){return n?ln(Object.create(null),n,e):e}function fh(n,e){return n?We(n)&&We(e)?[...new Set([...n,...e])]:ln(Object.create(null),lh(n),lh(e??{})):e}function nx(n,e){if(!n)return e;if(!e)return n;const t=ln(Object.create(null),n);for(const i in e)t[i]=fn(n[i],e[i]);return t}function Hg(){return{app:null,config:{isNativeTag:Zm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ix=0;function rx(n,e){return function(i,r=null){Je(i)||(i=ln({},i)),r!=null&&!Rt(r)&&(r=null);const s=Hg(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:ix++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:kx,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Je(u.install)?(o.add(u),u.install(c,...f)):Je(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||ze(i,r);return p.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(p,u,d),l=!0,c._container=u,u.__vue_app__=c,ac(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Ai(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Us;Us=c;try{return u()}finally{Us=f}}};return c}}let Us=null;function sx(n,e){if(an){let t=an.provides;const i=an.parent&&an.parent.provides;i===t&&(t=an.provides=Object.create(i)),t[n]=e}}function Oo(n,e,t=!1){const i=ns();if(i||Us){let r=Us?Us._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Je(e)?e.call(i&&i.proxy):e}}const Vg={},zg=()=>Object.create(Vg),Gg=n=>Object.getPrototypeOf(n)===Vg;function ox(n,e,t,i=!1){const r={},s=zg();n.propsDefaults=Object.create(null),Wg(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:E0(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function ax(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=gt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(oc(n.emitsOptions,d))continue;const p=e[d];if(l)if(_t(s,d))p!==s[d]&&(s[d]=p,c=!0);else{const g=$n(d);r[g]=Lu(l,a,g,p,n,!1)}else p!==s[d]&&(s[d]=p,c=!0)}}}else{Wg(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!_t(e,f)&&((u=os(f))===f||!_t(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Lu(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!_t(e,f))&&(delete s[f],c=!0)}c&&ji(n.attrs,"set","")}function Wg(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Lo(l))continue;const c=e[l];let u;r&&_t(r,u=$n(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:oc(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=gt(t),c=a||Tt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Lu(r,l,f,c[f],n,!_t(c,f))}}return o}function Lu(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=_t(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Je(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=ma(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===os(t))&&(i=!0))}return i}const lx=new WeakMap;function jg(n,e,t=!1){const i=t?lx:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Je(n)){const u=f=>{l=!0;const[d,p]=jg(f,e,!0);ln(o,d),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return Rt(n)&&i.set(n,Ls),Ls;if(We(s))for(let u=0;u<s.length;u++){const f=$n(s[u]);dh(f)&&(o[f]=Tt)}else if(s)for(const u in s){const f=$n(u);if(dh(f)){const d=s[u],p=o[f]=We(d)||Je(d)?{type:d}:ln({},d),g=p.type;let v=!1,m=!0;if(We(g))for(let h=0;h<g.length;++h){const S=g[h],y=Je(S)&&S.name;if(y==="Boolean"){v=!0;break}else y==="String"&&(m=!1)}else v=Je(g)&&g.name==="Boolean";p[0]=v,p[1]=m,(v||_t(p,"default"))&&a.push(f)}}const c=[o,a];return Rt(n)&&i.set(n,c),c}function dh(n){return n[0]!=="$"&&!Lo(n)}const Qf=n=>n==="_"||n==="_ctx"||n==="$stable",ed=n=>We(n)?n.map(vi):[vi(n)],cx=(n,e,t)=>{if(e._n)return e;const i=ar((...r)=>ed(e(...r)),t);return i._c=!1,i},Xg=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Qf(r))continue;const s=n[r];if(Je(s))e[r]=cx(r,s,i);else if(s!=null){const o=ed(s);e[r]=()=>o}}},$g=(n,e)=>{const t=ed(e);n.slots.default=()=>t},qg=(n,e,t)=>{for(const i in e)(t||!Qf(i))&&(n[i]=e[i])},ux=(n,e,t)=>{const i=n.slots=zg();if(n.vnode.shapeFlag&32){const r=e._;r?(qg(i,e,t),t&&ng(i,"_",r,!0)):Xg(e,i)}else e&&$g(n,e)},fx=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=Tt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:qg(r,e,t):(s=!e.$stable,Xg(e,r)),o=e}else e&&($g(n,e),o={default:1});if(s)for(const a in r)!Qf(a)&&o[a]==null&&delete r[a]},hn=Ax;function dx(n){return hx(n)}function hx(n,e){const t=ec();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=Si,insertStaticContent:g}=n,v=(U,B,w,se=null,ee=null,ne=null,R=void 0,P=null,O=!!B.dynamicChildren)=>{if(U===B)return;U&&!uo(U,B)&&(se=ge(U),ke(U,ee,ne,!0),U=null),B.patchFlag===-2&&(O=!1,B.dynamicChildren=null);const{type:H,ref:le,shapeFlag:E}=B;switch(H){case pa:m(U,B,w,se);break;case rr:h(U,B,w,se);break;case Ec:U==null&&S(B,w,se,R);break;case Mt:W(U,B,w,se,ee,ne,R,P,O);break;default:E&1?A(U,B,w,se,ee,ne,R,P,O):E&6?F(U,B,w,se,ee,ne,R,P,O):(E&64||E&128)&&H.process(U,B,w,se,ee,ne,R,P,O,Fe)}le!=null&&ee?No(le,U&&U.ref,ne,B||U,!B):le==null&&U&&U.ref!=null&&No(U.ref,null,ne,U,!0)},m=(U,B,w,se)=>{if(U==null)i(B.el=a(B.children),w,se);else{const ee=B.el=U.el;B.children!==U.children&&c(ee,B.children)}},h=(U,B,w,se)=>{U==null?i(B.el=l(B.children||""),w,se):B.el=U.el},S=(U,B,w,se)=>{[U.el,U.anchor]=g(U.children,B,w,se,U.el,U.anchor)},y=({el:U,anchor:B},w,se)=>{let ee;for(;U&&U!==B;)ee=d(U),i(U,w,se),U=ee;i(B,w,se)},_=({el:U,anchor:B})=>{let w;for(;U&&U!==B;)w=d(U),r(U),U=w;r(B)},A=(U,B,w,se,ee,ne,R,P,O)=>{B.type==="svg"?R="svg":B.type==="math"&&(R="mathml"),U==null?C(B,w,se,ee,ne,R,P,O):M(U,B,ee,ne,R,P,O)},C=(U,B,w,se,ee,ne,R,P)=>{let O,H;const{props:le,shapeFlag:E,transition:x,dirs:I}=U;if(O=U.el=o(U.type,ne,le&&le.is,le),E&8?u(O,U.children):E&16&&N(U.children,O,null,se,ee,Mc(U,ne),R,P),I&&Ir(U,null,se,"created"),T(O,U,U.scopeId,R,se),le){for(const J in le)J!=="value"&&!Lo(J)&&s(O,J,null,le[J],ne,se);"value"in le&&s(O,"value",null,le.value,ne),(H=le.onVnodeBeforeMount)&&pi(H,se,U)}I&&Ir(U,null,se,"beforeMount");const j=px(ee,x);j&&x.beforeEnter(O),i(O,B,w),((H=le&&le.onVnodeMounted)||j||I)&&hn(()=>{H&&pi(H,se,U),j&&x.enter(O),I&&Ir(U,null,se,"mounted")},ee)},T=(U,B,w,se,ee)=>{if(w&&p(U,w),se)for(let ne=0;ne<se.length;ne++)p(U,se[ne]);if(ee){let ne=ee.subTree;if(B===ne||Qg(ne.type)&&(ne.ssContent===B||ne.ssFallback===B)){const R=ee.vnode;T(U,R,R.scopeId,R.slotScopeIds,ee.parent)}}},N=(U,B,w,se,ee,ne,R,P,O=0)=>{for(let H=O;H<U.length;H++){const le=U[H]=P?vr(U[H]):vi(U[H]);v(null,le,B,w,se,ee,ne,R,P)}},M=(U,B,w,se,ee,ne,R)=>{const P=B.el=U.el;let{patchFlag:O,dynamicChildren:H,dirs:le}=B;O|=U.patchFlag&16;const E=U.props||Tt,x=B.props||Tt;let I;if(w&&Dr(w,!1),(I=x.onVnodeBeforeUpdate)&&pi(I,w,B,U),le&&Ir(B,U,w,"beforeUpdate"),w&&Dr(w,!0),(E.innerHTML&&x.innerHTML==null||E.textContent&&x.textContent==null)&&u(P,""),H?b(U.dynamicChildren,H,P,w,se,Mc(B,ee),ne):R||$(U,B,P,null,w,se,Mc(B,ee),ne,!1),O>0){if(O&16)D(P,E,x,w,ee);else if(O&2&&E.class!==x.class&&s(P,"class",null,x.class,ee),O&4&&s(P,"style",E.style,x.style,ee),O&8){const j=B.dynamicProps;for(let J=0;J<j.length;J++){const Y=j[J],ye=E[Y],ue=x[Y];(ue!==ye||Y==="value")&&s(P,Y,ye,ue,ee,w)}}O&1&&U.children!==B.children&&u(P,B.children)}else!R&&H==null&&D(P,E,x,w,ee);((I=x.onVnodeUpdated)||le)&&hn(()=>{I&&pi(I,w,B,U),le&&Ir(B,U,w,"updated")},se)},b=(U,B,w,se,ee,ne,R)=>{for(let P=0;P<B.length;P++){const O=U[P],H=B[P],le=O.el&&(O.type===Mt||!uo(O,H)||O.shapeFlag&198)?f(O.el):w;v(O,H,le,null,se,ee,ne,R,!0)}},D=(U,B,w,se,ee)=>{if(B!==w){if(B!==Tt)for(const ne in B)!Lo(ne)&&!(ne in w)&&s(U,ne,B[ne],null,ee,se);for(const ne in w){if(Lo(ne))continue;const R=w[ne],P=B[ne];R!==P&&ne!=="value"&&s(U,ne,P,R,ee,se)}"value"in w&&s(U,"value",B.value,w.value,ee)}},W=(U,B,w,se,ee,ne,R,P,O)=>{const H=B.el=U?U.el:a(""),le=B.anchor=U?U.anchor:a("");let{patchFlag:E,dynamicChildren:x,slotScopeIds:I}=B;I&&(P=P?P.concat(I):I),U==null?(i(H,w,se),i(le,w,se),N(B.children||[],w,le,ee,ne,R,P,O)):E>0&&E&64&&x&&U.dynamicChildren?(b(U.dynamicChildren,x,w,ee,ne,R,P),(B.key!=null||ee&&B===ee.subTree)&&td(U,B,!0)):$(U,B,w,le,ee,ne,R,P,O)},F=(U,B,w,se,ee,ne,R,P,O)=>{B.slotScopeIds=P,U==null?B.shapeFlag&512?ee.ctx.activate(B,w,se,R,O):k(B,w,se,ee,ne,R,O):K(U,B,O)},k=(U,B,w,se,ee,ne,R)=>{const P=U.component=Ix(U,se,ee);if(Ng(U)&&(P.ctx.renderer=Fe),Dx(P,!1,R),P.asyncDep){if(ee&&ee.registerDep(P,G,R),!U.el){const O=P.subTree=ze(rr);h(null,O,B,w),U.placeholder=O.el}}else G(P,U,B,w,ee,ne,R)},K=(U,B,w)=>{const se=B.component=U.component;if(Ex(U,B,w))if(se.asyncDep&&!se.asyncResolved){Z(se,B,w);return}else se.next=B,se.update();else B.el=U.el,se.vnode=B},G=(U,B,w,se,ee,ne,R)=>{const P=()=>{if(U.isMounted){let{next:E,bu:x,u:I,parent:j,vnode:J}=U;{const Re=Yg(U);if(Re){E&&(E.el=J.el,Z(U,E,R)),Re.asyncDep.then(()=>{U.isUnmounted||P()});return}}let Y=E,ye;Dr(U,!1),E?(E.el=J.el,Z(U,E,R)):E=J,x&&ul(x),(ye=E.props&&E.props.onVnodeBeforeUpdate)&&pi(ye,j,E,J),Dr(U,!0);const ue=ph(U),be=U.subTree;U.subTree=ue,v(be,ue,f(be.el),ge(be),U,ee,ne),E.el=ue.el,Y===null&&Tx(U,ue.el),I&&hn(I,ee),(ye=E.props&&E.props.onVnodeUpdated)&&hn(()=>pi(ye,j,E,J),ee)}else{let E;const{el:x,props:I}=B,{bm:j,m:J,parent:Y,root:ye,type:ue}=U,be=Ns(B);Dr(U,!1),j&&ul(j),!be&&(E=I&&I.onVnodeBeforeMount)&&pi(E,Y,B),Dr(U,!0);{ye.ce&&ye.ce._def.shadowRoot!==!1&&ye.ce._injectChildStyle(ue);const Re=U.subTree=ph(U);v(null,Re,w,se,U,ee,ne),B.el=Re.el}if(J&&hn(J,ee),!be&&(E=I&&I.onVnodeMounted)){const Re=B;hn(()=>pi(E,Y,Re),ee)}(B.shapeFlag&256||Y&&Ns(Y.vnode)&&Y.vnode.shapeFlag&256)&&U.a&&hn(U.a,ee),U.isMounted=!0,B=w=se=null}};U.scope.on();const O=U.effect=new ag(P);U.scope.off();const H=U.update=O.run.bind(O),le=U.job=O.runIfDirty.bind(O);le.i=U,le.id=U.uid,O.scheduler=()=>Kf(le),Dr(U,!0),H()},Z=(U,B,w)=>{B.component=U;const se=U.vnode.props;U.vnode=B,U.next=null,ax(U,B.props,se,w),fx(U,B.children,w),nr(),nh(U),ir()},$=(U,B,w,se,ee,ne,R,P,O=!1)=>{const H=U&&U.children,le=U?U.shapeFlag:0,E=B.children,{patchFlag:x,shapeFlag:I}=B;if(x>0){if(x&128){ve(H,E,w,se,ee,ne,R,P,O);return}else if(x&256){ce(H,E,w,se,ee,ne,R,P,O);return}}I&8?(le&16&&Ae(H,ee,ne),E!==H&&u(w,E)):le&16?I&16?ve(H,E,w,se,ee,ne,R,P,O):Ae(H,ee,ne,!0):(le&8&&u(w,""),I&16&&N(E,w,se,ee,ne,R,P,O))},ce=(U,B,w,se,ee,ne,R,P,O)=>{U=U||Ls,B=B||Ls;const H=U.length,le=B.length,E=Math.min(H,le);let x;for(x=0;x<E;x++){const I=B[x]=O?vr(B[x]):vi(B[x]);v(U[x],I,w,null,ee,ne,R,P,O)}H>le?Ae(U,ee,ne,!0,!1,E):N(B,w,se,ee,ne,R,P,O,E)},ve=(U,B,w,se,ee,ne,R,P,O)=>{let H=0;const le=B.length;let E=U.length-1,x=le-1;for(;H<=E&&H<=x;){const I=U[H],j=B[H]=O?vr(B[H]):vi(B[H]);if(uo(I,j))v(I,j,w,null,ee,ne,R,P,O);else break;H++}for(;H<=E&&H<=x;){const I=U[E],j=B[x]=O?vr(B[x]):vi(B[x]);if(uo(I,j))v(I,j,w,null,ee,ne,R,P,O);else break;E--,x--}if(H>E){if(H<=x){const I=x+1,j=I<le?B[I].el:se;for(;H<=x;)v(null,B[H]=O?vr(B[H]):vi(B[H]),w,j,ee,ne,R,P,O),H++}}else if(H>x)for(;H<=E;)ke(U[H],ee,ne,!0),H++;else{const I=H,j=H,J=new Map;for(H=j;H<=x;H++){const De=B[H]=O?vr(B[H]):vi(B[H]);De.key!=null&&J.set(De.key,H)}let Y,ye=0;const ue=x-j+1;let be=!1,Re=0;const ae=new Array(ue);for(H=0;H<ue;H++)ae[H]=0;for(H=I;H<=E;H++){const De=U[H];if(ye>=ue){ke(De,ee,ne,!0);continue}let Ne;if(De.key!=null)Ne=J.get(De.key);else for(Y=j;Y<=x;Y++)if(ae[Y-j]===0&&uo(De,B[Y])){Ne=Y;break}Ne===void 0?ke(De,ee,ne,!0):(ae[Ne-j]=H+1,Ne>=Re?Re=Ne:be=!0,v(De,B[Ne],w,null,ee,ne,R,P,O),ye++)}const Ce=be?mx(ae):Ls;for(Y=Ce.length-1,H=ue-1;H>=0;H--){const De=j+H,Ne=B[De],xe=B[De+1],je=De+1<le?xe.el||xe.placeholder:se;ae[H]===0?v(null,Ne,w,je,ee,ne,R,P,O):be&&(Y<0||H!==Ce[Y]?Te(Ne,w,je,2):Y--)}}},Te=(U,B,w,se,ee=null)=>{const{el:ne,type:R,transition:P,children:O,shapeFlag:H}=U;if(H&6){Te(U.component.subTree,B,w,se);return}if(H&128){U.suspense.move(B,w,se);return}if(H&64){R.move(U,B,w,Fe);return}if(R===Mt){i(ne,B,w);for(let E=0;E<O.length;E++)Te(O[E],B,w,se);i(U.anchor,B,w);return}if(R===Ec){y(U,B,w);return}if(se!==2&&H&1&&P)if(se===0)P.beforeEnter(ne),i(ne,B,w),hn(()=>P.enter(ne),ee);else{const{leave:E,delayLeave:x,afterLeave:I}=P,j=()=>{U.ctx.isUnmounted?r(ne):i(ne,B,w)},J=()=>{ne._isLeaving&&ne[B0](!0),E(ne,()=>{j(),I&&I()})};x?x(ne,j,J):J()}else i(ne,B,w)},ke=(U,B,w,se=!1,ee=!1)=>{const{type:ne,props:R,ref:P,children:O,dynamicChildren:H,shapeFlag:le,patchFlag:E,dirs:x,cacheIndex:I}=U;if(E===-2&&(ee=!1),P!=null&&(nr(),No(P,null,w,U,!0),ir()),I!=null&&(B.renderCache[I]=void 0),le&256){B.ctx.deactivate(U);return}const j=le&1&&x,J=!Ns(U);let Y;if(J&&(Y=R&&R.onVnodeBeforeUnmount)&&pi(Y,B,U),le&6)de(U.component,w,se);else{if(le&128){U.suspense.unmount(w,se);return}j&&Ir(U,null,B,"beforeUnmount"),le&64?U.type.remove(U,B,w,Fe,se):H&&!H.hasOnce&&(ne!==Mt||E>0&&E&64)?Ae(H,B,w,!1,!0):(ne===Mt&&E&384||!ee&&le&16)&&Ae(O,B,w),se&&it(U)}(J&&(Y=R&&R.onVnodeUnmounted)||j)&&hn(()=>{Y&&pi(Y,B,U),j&&Ir(U,null,B,"unmounted")},w)},it=U=>{const{type:B,el:w,anchor:se,transition:ee}=U;if(B===Mt){re(w,se);return}if(B===Ec){_(U);return}const ne=()=>{r(w),ee&&!ee.persisted&&ee.afterLeave&&ee.afterLeave()};if(U.shapeFlag&1&&ee&&!ee.persisted){const{leave:R,delayLeave:P}=ee,O=()=>R(w,ne);P?P(U.el,ne,O):O()}else ne()},re=(U,B)=>{let w;for(;U!==B;)w=d(U),r(U),U=w;r(B)},de=(U,B,w)=>{const{bum:se,scope:ee,job:ne,subTree:R,um:P,m:O,a:H}=U;hh(O),hh(H),se&&ul(se),ee.stop(),ne&&(ne.flags|=8,ke(R,U,B,w)),P&&hn(P,B),hn(()=>{U.isUnmounted=!0},B)},Ae=(U,B,w,se=!1,ee=!1,ne=0)=>{for(let R=ne;R<U.length;R++)ke(U[R],B,w,se,ee)},ge=U=>{if(U.shapeFlag&6)return ge(U.component.subTree);if(U.shapeFlag&128)return U.suspense.next();const B=d(U.anchor||U.el),w=B&&B[Cg];return w?d(w):B};let we=!1;const tt=(U,B,w)=>{U==null?B._vnode&&ke(B._vnode,null,null,!0):v(B._vnode||null,U,B,null,null,null,w),B._vnode=U,we||(we=!0,nh(),Ag(),we=!1)},Fe={p:v,um:ke,m:Te,r:it,mt:k,mc:N,pc:$,pbc:b,n:ge,o:n};return{render:tt,hydrate:void 0,createApp:rx(tt)}}function Mc({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Dr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function px(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function td(n,e,t=!1){const i=n.children,r=e.children;if(We(i)&&We(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=vr(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&td(o,a)),a.type===pa&&a.patchFlag!==-1&&(a.el=o.el),a.type===rr&&!a.el&&(a.el=o.el)}}function mx(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Yg(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Yg(e)}function hh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const gx=Symbol.for("v-scx"),_x=()=>Oo(gx);function Zi(n,e,t){return Kg(n,e,t)}function Kg(n,e,t=Tt){const{immediate:i,deep:r,flush:s,once:o}=t,a=ln({},t),l=e&&i||!e&&s!=="post";let c;if(Yo){if(s==="sync"){const p=_x();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Si,p.resume=Si,p.pause=Si,p}}const u=an;a.call=(p,g,v)=>Ai(p,u,g,v);let f=!1;s==="post"?a.scheduler=p=>{hn(p,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,g)=>{g?p():Kf(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=P0(n,e,a);return Yo&&(c?c.push(d):l&&d()),d}function vx(n,e,t){const i=this.proxy,r=Ut(n)?n.includes(".")?Jg(i,n):()=>i[n]:n.bind(i,i);let s;Je(e)?s=e:(s=e.handler,t=e);const o=ma(this),a=Kg(r,s.bind(i),t);return o(),a}function Jg(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const xx=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${$n(e)}Modifiers`]||n[`${os(e)}Modifiers`];function yx(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Tt;let r=t;const s=e.startsWith("update:"),o=s&&xx(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>Ut(u)?u.trim():u)),o.number&&(r=t.map(Rl)));let a,l=i[a=_c(e)]||i[a=_c($n(e))];!l&&s&&(l=i[a=_c(os(e))]),l&&Ai(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Ai(c,n,6,r)}}const Sx=new WeakMap;function Zg(n,e,t=!1){const i=t?Sx:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Je(n)){const l=c=>{const u=Zg(c,e,!0);u&&(a=!0,ln(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(Rt(n)&&i.set(n,null),null):(We(s)?s.forEach(l=>o[l]=null):ln(o,s),Rt(n)&&i.set(n,o),o)}function oc(n,e){return!n||!Kl(e)?!1:(e=e.slice(2).replace(/Once$/,""),_t(n,e[0].toLowerCase()+e.slice(1))||_t(n,os(e))||_t(n,e))}function ph(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:g,inheritAttrs:v}=n,m=Il(n);let h,S;try{if(t.shapeFlag&4){const _=r||i,A=_;h=vi(c.call(A,_,u,f,p,d,g)),S=a}else{const _=e;h=vi(_.length>1?_(f,{attrs:a,slots:o,emit:l}):_(f,null)),S=e.props?a:bx(a)}}catch(_){Fo.length=0,rc(_,n,1),h=ze(rr)}let y=h;if(S&&v!==!1){const _=Object.keys(S),{shapeFlag:A}=y;_.length&&A&7&&(s&&_.some(Hf)&&(S=Mx(S,s)),y=Vs(y,S,!1,!0))}return t.dirs&&(y=Vs(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&Jf(y,t.transition),h=y,Il(m),h}const bx=n=>{let e;for(const t in n)(t==="class"||t==="style"||Kl(t))&&((e||(e={}))[t]=n[t]);return e},Mx=(n,e)=>{const t={};for(const i in n)(!Hf(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Ex(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?mh(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!oc(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?mh(i,o,c):!0:!!o;return!1}function mh(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!oc(t,s))return!0}return!1}function Tx({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Qg=n=>n.__isSuspense;function Ax(n,e){e&&e.pendingBranch?We(n)?e.effects.push(...n):e.effects.push(n):N0(n)}const Mt=Symbol.for("v-fgt"),pa=Symbol.for("v-txt"),rr=Symbol.for("v-cmt"),Ec=Symbol.for("v-stc"),Fo=[];let Dn=null;function _e(n=!1){Fo.push(Dn=n?null:[])}function wx(){Fo.pop(),Dn=Fo[Fo.length-1]||null}let Xo=1;function Ul(n,e=!1){Xo+=n,n<0&&Dn&&e&&(Dn.hasOnce=!0)}function e_(n){return n.dynamicChildren=Xo>0?Dn||Ls:null,wx(),Xo>0&&Dn&&Dn.push(n),n}function Be(n,e,t,i,r,s){return e_(ie(n,e,t,i,r,s,!0))}function Bt(n,e,t,i,r){return e_(ze(n,e,t,i,r,!0))}function $o(n){return n?n.__v_isVNode===!0:!1}function uo(n,e){return n.type===e.type&&n.key===e.key}const t_=({key:n})=>n??null,dl=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ut(n)||Zt(n)||Je(n)?{i:Jt,r:n,k:e,f:!!t}:n:null);function ie(n,e=null,t=null,i=0,r=null,s=n===Mt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&t_(e),ref:e&&dl(e),scopeId:Rg,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Jt};return a?(nd(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Ut(t)?8:16),Xo>0&&!o&&Dn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Dn.push(l),l}const ze=Rx;function Rx(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Og)&&(n=rr),$o(n)){const a=Vs(n,e,!0);return t&&nd(a,t),Xo>0&&!s&&Dn&&(a.shapeFlag&6?Dn[Dn.indexOf(n)]=a:Dn.push(a)),a.patchFlag=-2,a}if(Bx(n)&&(n=n.__vccOpts),e){e=Pu(e);let{class:a,style:l}=e;a&&!Ut(a)&&(e.class=mn(a)),Rt(l)&&(Yf(l)&&!We(l)&&(l=ln({},l)),e.style=Ji(l))}const o=Ut(n)?1:Qg(n)?128:U0(n)?64:Rt(n)?4:Je(n)?2:0;return ie(n,e,t,i,r,o,s,!0)}function Pu(n){return n?Yf(n)||Gg(n)?ln({},n):n:null}function Vs(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?Cx(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&t_(c),ref:e&&e.ref?t&&s?We(s)?s.concat(dl(e)):[s,dl(e)]:dl(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Mt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Vs(n.ssContent),ssFallback:n.ssFallback&&Vs(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Jf(u,l.clone(u)),u}function qo(n=" ",e=0){return ze(pa,null,n,e)}function Xt(n="",e=!1){return e?(_e(),Bt(rr,null,n)):ze(rr,null,n)}function vi(n){return n==null||typeof n=="boolean"?ze(rr):We(n)?ze(Mt,null,n.slice()):$o(n)?vr(n):ze(pa,null,String(n))}function vr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Vs(n)}function nd(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(We(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),nd(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Gg(e)?e._ctx=Jt:r===3&&Jt&&(Jt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Je(e)?(e={default:e,_ctx:Jt},t=32):(e=String(e),i&64?(t=16,e=[qo(e)]):t=8);n.children=e,n.shapeFlag|=t}function Cx(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=mn([e.class,i.class]));else if(r==="style")e.style=Ji([e.style,i.style]);else if(Kl(r)){const s=e[r],o=i[r];o&&s!==o&&!(We(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function pi(n,e,t,i=null){Ai(n,e,7,[t,i])}const Lx=Hg();let Px=0;function Ix(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Lx,s={uid:Px++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new og(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jg(i,r),emitsOptions:Zg(i,r),emit:null,emitted:null,propsDefaults:Tt,inheritAttrs:i.inheritAttrs,ctx:Tt,data:Tt,props:Tt,attrs:Tt,slots:Tt,refs:Tt,setupState:Tt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=yx.bind(null,s),n.ce&&n.ce(s),s}let an=null;const ns=()=>an||Jt;let Ol,Iu;{const n=ec(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Ol=e("__VUE_INSTANCE_SETTERS__",t=>an=t),Iu=e("__VUE_SSR_SETTERS__",t=>Yo=t)}const ma=n=>{const e=an;return Ol(n),n.scope.on(),()=>{n.scope.off(),Ol(e)}},gh=()=>{an&&an.scope.off(),Ol(null)};function n_(n){return n.vnode.shapeFlag&4}let Yo=!1;function Dx(n,e=!1,t=!1){e&&Iu(e);const{props:i,children:r}=n.vnode,s=n_(n);ox(n,i,s,e),ux(n,r,t||e);const o=s?Nx(n,e):void 0;return e&&Iu(!1),o}function Nx(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,J0);const{setup:i}=t;if(i){nr();const r=n.setupContext=i.length>1?Ox(n):null,s=ma(n),o=da(i,n,0,[n.props,r]),a=Qm(o);if(ir(),s(),(a||n.sp)&&!Ns(n)&&Ig(n),a){if(o.then(gh,gh),e)return o.then(l=>{_h(n,l)}).catch(l=>{rc(l,n,0)});n.asyncDep=o}else _h(n,o)}else i_(n)}function _h(n,e,t){Je(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Rt(e)&&(n.setupState=Mg(e)),i_(n)}function i_(n,e,t){const i=n.type;n.render||(n.render=i.render||Si);{const r=ma(n);nr();try{Z0(n)}finally{ir(),r()}}}const Ux={get(n,e){return sn(n,"get",""),n[e]}};function Ox(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Ux),slots:n.slots,emit:n.emit,expose:e}}function ac(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Mg(T0(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Uo)return Uo[t](n)},has(e,t){return t in e||t in Uo}})):n.proxy}function Fx(n,e=!0){return Je(n)?n.displayName||n.name:n.name||e&&n.__name}function Bx(n){return Je(n)&&"__vccOpts"in n}const ni=(n,e)=>C0(n,e,Yo);function r_(n,e,t){try{Ul(-1);const i=arguments.length;return i===2?Rt(e)&&!We(e)?$o(e)?ze(n,null,[e]):ze(n,e):ze(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&$o(t)&&(t=[t]),ze(n,e,t))}finally{Ul(1)}}const kx="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Du;const vh=typeof window<"u"&&window.trustedTypes;if(vh)try{Du=vh.createPolicy("vue",{createHTML:n=>n})}catch{}const s_=Du?n=>Du.createHTML(n):n=>n,Hx="http://www.w3.org/2000/svg",Vx="http://www.w3.org/1998/Math/MathML",Gi=typeof document<"u"?document:null,xh=Gi&&Gi.createElement("template"),zx={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Gi.createElementNS(Hx,n):e==="mathml"?Gi.createElementNS(Vx,n):t?Gi.createElement(n,{is:t}):Gi.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Gi.createTextNode(n),createComment:n=>Gi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Gi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{xh.innerHTML=s_(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=xh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Gx=Symbol("_vtc");function Wx(n,e,t){const i=n[Gx];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Fl=Symbol("_vod"),o_=Symbol("_vsh"),jx={name:"show",beforeMount(n,{value:e},{transition:t}){n[Fl]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):fo(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),fo(n,!0),i.enter(n)):i.leave(n,()=>{fo(n,!1)}):fo(n,e))},beforeUnmount(n,{value:e}){fo(n,e)}};function fo(n,e){n.style.display=e?n[Fl]:"none",n[o_]=!e}const Xx=Symbol(""),$x=/(?:^|;)\s*display\s*:/;function qx(n,e,t){const i=n.style,r=Ut(t);let s=!1;if(t&&!r){if(e)if(Ut(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&hl(i,a,"")}else for(const o in e)t[o]==null&&hl(i,o,"");for(const o in t)o==="display"&&(s=!0),hl(i,o,t[o])}else if(r){if(e!==t){const o=i[Xx];o&&(t+=";"+o),i.cssText=t,s=$x.test(t)}}else e&&n.removeAttribute("style");Fl in n&&(n[Fl]=s?i.display:"",n[o_]&&(i.display="none"))}const yh=/\s*!important$/;function hl(n,e,t){if(We(t))t.forEach(i=>hl(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Yx(n,e);yh.test(t)?n.setProperty(os(i),t.replace(yh,""),"important"):n[i]=t}}const Sh=["Webkit","Moz","ms"],Tc={};function Yx(n,e){const t=Tc[e];if(t)return t;let i=$n(e);if(i!=="filter"&&i in n)return Tc[e]=i;i=Ql(i);for(let r=0;r<Sh.length;r++){const s=Sh[r]+i;if(s in n)return Tc[e]=s}return e}const bh="http://www.w3.org/1999/xlink";function Mh(n,e,t,i,r,s=t0(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(bh,e.slice(6,e.length)):n.setAttributeNS(bh,e,t):t==null||s&&!ig(t)?n.removeAttribute(e):n.setAttribute(e,s?"":ui(t)?String(t):t)}function Eh(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?s_(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=ig(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function Xr(n,e,t,i){n.addEventListener(e,t,i)}function Kx(n,e,t,i){n.removeEventListener(e,t,i)}const Th=Symbol("_vei");function Jx(n,e,t,i,r=null){const s=n[Th]||(n[Th]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Zx(e);if(i){const c=s[e]=ty(i,r);Xr(n,a,c,l)}else o&&(Kx(n,a,o,l),s[e]=void 0)}}const Ah=/(?:Once|Passive|Capture)$/;function Zx(n){let e;if(Ah.test(n)){e={};let i;for(;i=n.match(Ah);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):os(n.slice(2)),e]}let Ac=0;const Qx=Promise.resolve(),ey=()=>Ac||(Qx.then(()=>Ac=0),Ac=Date.now());function ty(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Ai(ny(i,t.value),e,5,[i])};return t.value=n,t.attached=ey(),t}function ny(n,e){if(We(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const wh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,iy=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?Wx(n,i,o):e==="style"?qx(n,t,i):Kl(e)?Hf(e)||Jx(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ry(n,e,i,o))?(Eh(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Mh(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Ut(i))?Eh(n,$n(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Mh(n,e,i,o))};function ry(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&wh(e)&&Je(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return wh(e)&&Ut(t)?!1:e in n}const Bl=n=>{const e=n.props["onUpdate:modelValue"]||!1;return We(e)?t=>ul(e,t):e};function sy(n){n.target.composing=!0}function Rh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Os=Symbol("_assign"),Ni={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[Os]=Bl(r);const s=i||r.props&&r.props.type==="number";Xr(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),s&&(a=Rl(a)),n[Os](a)}),t&&Xr(n,"change",()=>{n.value=n.value.trim()}),e||(Xr(n,"compositionstart",sy),Xr(n,"compositionend",Rh),Xr(n,"change",Rh))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[Os]=Bl(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?Rl(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},Ch={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const r=Jl(e);Xr(n,"change",()=>{const s=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?Rl(kl(o)):kl(o));n[Os](n.multiple?r?new Set(s):s:s[0]),n._assigning=!0,Yr(()=>{n._assigning=!1})}),n[Os]=Bl(i)},mounted(n,{value:e}){Lh(n,e)},beforeUpdate(n,e,t){n[Os]=Bl(t)},updated(n,{value:e}){n._assigning||Lh(n,e)}};function Lh(n,e){const t=n.multiple,i=We(e);if(!(t&&!i&&!Jl(e))){for(let r=0,s=n.options.length;r<s;r++){const o=n.options[r],a=kl(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=i0(e,a)>-1}else o.selected=e.has(a);else if(tc(kl(o),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function kl(n){return"_value"in n?n._value:n.value}const oy=["ctrl","shift","alt","meta"],ay={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>oy.some(t=>n[`${t}Key`]&&!e.includes(t))},ly=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((r,...s)=>{for(let o=0;o<e.length;o++){const a=ay[e[o]];if(a&&a(r,e))return}return n(r,...s)}))},cy=ln({patchProp:iy},zx);let Ph;function uy(){return Ph||(Ph=dx(cy))}const fy=((...n)=>{const e=uy().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=hy(i);if(!r)return;const s=e._component;!Je(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,dy(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function dy(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function hy(n){return Ut(n)?document.querySelector(n):n}const py={key:0,class:"material-symbols-outlined"},my={key:1},Qi=vt({__name:"CustomButton",props:{content:{},disable:{type:Boolean,default:!1}},setup(n){const e=["arrow_drop_down","arrow_drop_up","colorize","unfold_more_double","language","account_circle"];function t(i){return e.includes(i)}return(i,r)=>(_e(),Be("div",{class:mn(["button glass",n.disable?"disable":"enable clickable"])},[t(n.content)?(_e(),Be("span",py,$e(n.content),1)):(_e(),Be("p",my,$e(n.content),1))],2))}}),gy=vt({__name:"QuickLinks",emits:["clickedOutside"],setup(n,{emit:e}){const t=e,i=Ze(null);function r(s){i.value&&!i.value.contains(s.target)&&t("clickedOutside")}return Cn(()=>document.addEventListener("click",r)),di(()=>document.removeEventListener("click",r)),(s,o)=>(_e(),Be("div",{ref_key:"menu",ref:i,class:"glass column"},[...o[0]||(o[0]=[ie("a",{href:"https://github.com/Crhonopost",target:"_blank"},"Github",-1),ie("a",{href:"cv.pdf",target:"_blank"},"CV",-1),ie("a",{href:"https://www.linkedin.com/in/nathan-souvignet-a10732230/",target:"_blank"},"LinkedIn",-1),ie("a",{href:"mailto:nath.souvignet@gmail.com"},"Email",-1)])],512))}});/*!
  * shared v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function _y(n,e){typeof console<"u"&&(console.warn("[intlify] "+n),e&&console.warn(e.stack))}const Hl=typeof window<"u",Tr=(n,e=!1)=>e?Symbol.for(n):Symbol(n),vy=(n,e,t)=>xy({l:n,k:e,s:t}),xy=n=>JSON.stringify(n).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),Ht=n=>typeof n=="number"&&isFinite(n),yy=n=>id(n)==="[object Date]",zs=n=>id(n)==="[object RegExp]",lc=n=>ot(n)&&Object.keys(n).length===0,zt=Object.assign,Sy=Object.create,wt=(n=null)=>Sy(n);let Ih;const Kr=()=>Ih||(Ih=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:wt());function Dh(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2F;").replace(/=/g,"&#x3D;")}function Nh(n){return n.replace(/&(?![a-zA-Z0-9#]{2,6};)/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function by(n){return n=n.replace(/(\w+)\s*=\s*"([^"]*)"/g,(i,r,s)=>`${r}="${Nh(s)}"`),n=n.replace(/(\w+)\s*=\s*'([^']*)'/g,(i,r,s)=>`${r}='${Nh(s)}'`),/\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(n)&&(n=n.replace(/(\s+)(on)(\w+\s*=)/gi,"$1&#111;n$3")),[/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,/(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach(i=>{n=n.replace(i,"$1javascript&#58;")}),n}const My=Object.prototype.hasOwnProperty;function oi(n,e){return My.call(n,e)}const Ft=Array.isArray,Pt=n=>typeof n=="function",Le=n=>typeof n=="string",ft=n=>typeof n=="boolean",ht=n=>n!==null&&typeof n=="object",Ey=n=>ht(n)&&Pt(n.then)&&Pt(n.catch),a_=Object.prototype.toString,id=n=>a_.call(n),ot=n=>id(n)==="[object Object]",Ty=n=>n==null?"":Ft(n)||ot(n)&&n.toString===a_?JSON.stringify(n,null,2):String(n);function rd(n,e=""){return n.reduce((t,i,r)=>r===0?t+i:t+e+i,"")}const Ca=n=>!ht(n)||Ft(n);function pl(n,e){if(Ca(n)||Ca(e))throw new Error("Invalid value");const t=[{src:n,des:e}];for(;t.length;){const{src:i,des:r}=t.pop();Object.keys(i).forEach(s=>{s!=="__proto__"&&(ht(i[s])&&!ht(r[s])&&(r[s]=Array.isArray(i[s])?[]:wt()),Ca(r[s])||Ca(i[s])?r[s]=i[s]:t.push({src:i[s],des:r[s]}))})}}/*!
  * message-compiler v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function Ay(n,e,t){return{line:n,column:e,offset:t}}function Nu(n,e,t){return{start:n,end:e}}const mt={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14},wy=17;function cc(n,e,t={}){const{domain:i,messages:r,args:s}=t,o=n,a=new SyntaxError(String(o));return a.code=n,e&&(a.location=e),a.domain=i,a}function Ry(n){throw n}const mi=" ",Cy="\r",rn=`
`,Ly="\u2028",Py="\u2029";function Iy(n){const e=n;let t=0,i=1,r=1,s=0;const o=T=>e[T]===Cy&&e[T+1]===rn,a=T=>e[T]===rn,l=T=>e[T]===Py,c=T=>e[T]===Ly,u=T=>o(T)||a(T)||l(T)||c(T),f=()=>t,d=()=>i,p=()=>r,g=()=>s,v=T=>o(T)||l(T)||c(T)?rn:e[T],m=()=>v(t),h=()=>v(t+s);function S(){return s=0,u(t)&&(i++,r=0),o(t)&&t++,t++,r++,e[t]}function y(){return o(t+s)&&s++,s++,e[t+s]}function _(){t=0,i=1,r=1,s=0}function A(T=0){s=T}function C(){const T=t+s;for(;T!==t;)S();s=0}return{index:f,line:d,column:p,peekOffset:g,charAt:v,currentChar:m,currentPeek:h,next:S,peek:y,reset:_,resetPeek:A,skipToPeek:C}}const Ui=void 0,Dy=".",Uh="'",Ny="tokenizer";function Uy(n,e={}){const t=e.location!==!1,i=Iy(n),r=()=>i.index(),s=()=>Ay(i.line(),i.column(),i.index()),o=s(),a=r(),l={currentType:13,offset:a,startLoc:o,endLoc:o,lastType:13,lastOffset:a,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:u}=e;function f(R,P,O,...H){const le=c();if(P.column+=O,P.offset+=O,u){const E=t?Nu(le.startLoc,P):null,x=cc(R,E,{domain:Ny,args:H});u(x)}}function d(R,P,O){R.endLoc=s(),R.currentType=P;const H={type:P};return t&&(H.loc=Nu(R.startLoc,R.endLoc)),O!=null&&(H.value=O),H}const p=R=>d(R,13);function g(R,P){return R.currentChar()===P?(R.next(),P):(f(mt.EXPECTED_TOKEN,s(),0,P),"")}function v(R){let P="";for(;R.currentPeek()===mi||R.currentPeek()===rn;)P+=R.currentPeek(),R.peek();return P}function m(R){const P=v(R);return R.skipToPeek(),P}function h(R){if(R===Ui)return!1;const P=R.charCodeAt(0);return P>=97&&P<=122||P>=65&&P<=90||P===95}function S(R){if(R===Ui)return!1;const P=R.charCodeAt(0);return P>=48&&P<=57}function y(R,P){const{currentType:O}=P;if(O!==2)return!1;v(R);const H=h(R.currentPeek());return R.resetPeek(),H}function _(R,P){const{currentType:O}=P;if(O!==2)return!1;v(R);const H=R.currentPeek()==="-"?R.peek():R.currentPeek(),le=S(H);return R.resetPeek(),le}function A(R,P){const{currentType:O}=P;if(O!==2)return!1;v(R);const H=R.currentPeek()===Uh;return R.resetPeek(),H}function C(R,P){const{currentType:O}=P;if(O!==7)return!1;v(R);const H=R.currentPeek()===".";return R.resetPeek(),H}function T(R,P){const{currentType:O}=P;if(O!==8)return!1;v(R);const H=h(R.currentPeek());return R.resetPeek(),H}function N(R,P){const{currentType:O}=P;if(!(O===7||O===11))return!1;v(R);const H=R.currentPeek()===":";return R.resetPeek(),H}function M(R,P){const{currentType:O}=P;if(O!==9)return!1;const H=()=>{const E=R.currentPeek();return E==="{"?h(R.peek()):E==="@"||E==="|"||E===":"||E==="."||E===mi||!E?!1:E===rn?(R.peek(),H()):D(R,!1)},le=H();return R.resetPeek(),le}function b(R){v(R);const P=R.currentPeek()==="|";return R.resetPeek(),P}function D(R,P=!0){const O=(le=!1,E="")=>{const x=R.currentPeek();return x==="{"||x==="@"||!x?le:x==="|"?!(E===mi||E===rn):x===mi?(R.peek(),O(!0,mi)):x===rn?(R.peek(),O(!0,rn)):!0},H=O();return P&&R.resetPeek(),H}function W(R,P){const O=R.currentChar();return O===Ui?Ui:P(O)?(R.next(),O):null}function F(R){const P=R.charCodeAt(0);return P>=97&&P<=122||P>=65&&P<=90||P>=48&&P<=57||P===95||P===36}function k(R){return W(R,F)}function K(R){const P=R.charCodeAt(0);return P>=97&&P<=122||P>=65&&P<=90||P>=48&&P<=57||P===95||P===36||P===45}function G(R){return W(R,K)}function Z(R){const P=R.charCodeAt(0);return P>=48&&P<=57}function $(R){return W(R,Z)}function ce(R){const P=R.charCodeAt(0);return P>=48&&P<=57||P>=65&&P<=70||P>=97&&P<=102}function ve(R){return W(R,ce)}function Te(R){let P="",O="";for(;P=$(R);)O+=P;return O}function ke(R){let P="";for(;;){const O=R.currentChar();if(O==="{"||O==="}"||O==="@"||O==="|"||!O)break;if(O===mi||O===rn)if(D(R))P+=O,R.next();else{if(b(R))break;P+=O,R.next()}else P+=O,R.next()}return P}function it(R){m(R);let P="",O="";for(;P=G(R);)O+=P;const H=R.currentChar();if(H&&H!=="}"&&H!==Ui&&H!==mi&&H!==rn&&H!=="　"){const le=Fe(R);return f(mt.INVALID_TOKEN_IN_PLACEHOLDER,s(),0,O+le),O+le}return R.currentChar()===Ui&&f(mt.UNTERMINATED_CLOSING_BRACE,s(),0),O}function re(R){m(R);let P="";return R.currentChar()==="-"?(R.next(),P+=`-${Te(R)}`):P+=Te(R),R.currentChar()===Ui&&f(mt.UNTERMINATED_CLOSING_BRACE,s(),0),P}function de(R){return R!==Uh&&R!==rn}function Ae(R){m(R),g(R,"'");let P="",O="";for(;P=W(R,de);)P==="\\"?O+=ge(R):O+=P;const H=R.currentChar();return H===rn||H===Ui?(f(mt.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,s(),0),H===rn&&(R.next(),g(R,"'")),O):(g(R,"'"),O)}function ge(R){const P=R.currentChar();switch(P){case"\\":case"'":return R.next(),`\\${P}`;case"u":return we(R,P,4);case"U":return we(R,P,6);default:return f(mt.UNKNOWN_ESCAPE_SEQUENCE,s(),0,P),""}}function we(R,P,O){g(R,P);let H="";for(let le=0;le<O;le++){const E=ve(R);if(!E){f(mt.INVALID_UNICODE_ESCAPE_SEQUENCE,s(),0,`\\${P}${H}${R.currentChar()}`);break}H+=E}return`\\${P}${H}`}function tt(R){return R!=="{"&&R!=="}"&&R!==mi&&R!==rn}function Fe(R){m(R);let P="",O="";for(;P=W(R,tt);)O+=P;return O}function ct(R){let P="",O="";for(;P=k(R);)O+=P;return O}function U(R){const P=O=>{const H=R.currentChar();return H==="{"||H==="@"||H==="|"||H==="("||H===")"||!H||H===mi?O:(O+=H,R.next(),P(O))};return P("")}function B(R){m(R);const P=g(R,"|");return m(R),P}function w(R,P){let O=null;switch(R.currentChar()){case"{":return P.braceNest>=1&&f(mt.NOT_ALLOW_NEST_PLACEHOLDER,s(),0),R.next(),O=d(P,2,"{"),m(R),P.braceNest++,O;case"}":return P.braceNest>0&&P.currentType===2&&f(mt.EMPTY_PLACEHOLDER,s(),0),R.next(),O=d(P,3,"}"),P.braceNest--,P.braceNest>0&&m(R),P.inLinked&&P.braceNest===0&&(P.inLinked=!1),O;case"@":return P.braceNest>0&&f(mt.UNTERMINATED_CLOSING_BRACE,s(),0),O=se(R,P)||p(P),P.braceNest=0,O;default:{let le=!0,E=!0,x=!0;if(b(R))return P.braceNest>0&&f(mt.UNTERMINATED_CLOSING_BRACE,s(),0),O=d(P,1,B(R)),P.braceNest=0,P.inLinked=!1,O;if(P.braceNest>0&&(P.currentType===4||P.currentType===5||P.currentType===6))return f(mt.UNTERMINATED_CLOSING_BRACE,s(),0),P.braceNest=0,ee(R,P);if(le=y(R,P))return O=d(P,4,it(R)),m(R),O;if(E=_(R,P))return O=d(P,5,re(R)),m(R),O;if(x=A(R,P))return O=d(P,6,Ae(R)),m(R),O;if(!le&&!E&&!x)return O=d(P,12,Fe(R)),f(mt.INVALID_TOKEN_IN_PLACEHOLDER,s(),0,O.value),m(R),O;break}}return O}function se(R,P){const{currentType:O}=P;let H=null;const le=R.currentChar();switch((O===7||O===8||O===11||O===9)&&(le===rn||le===mi)&&f(mt.INVALID_LINKED_FORMAT,s(),0),le){case"@":return R.next(),H=d(P,7,"@"),P.inLinked=!0,H;case".":return m(R),R.next(),d(P,8,".");case":":return m(R),R.next(),d(P,9,":");default:return b(R)?(H=d(P,1,B(R)),P.braceNest=0,P.inLinked=!1,H):C(R,P)||N(R,P)?(m(R),se(R,P)):T(R,P)?(m(R),d(P,11,ct(R))):M(R,P)?(m(R),le==="{"?w(R,P)||H:d(P,10,U(R))):(O===7&&f(mt.INVALID_LINKED_FORMAT,s(),0),P.braceNest=0,P.inLinked=!1,ee(R,P))}}function ee(R,P){let O={type:13};if(P.braceNest>0)return w(R,P)||p(P);if(P.inLinked)return se(R,P)||p(P);switch(R.currentChar()){case"{":return w(R,P)||p(P);case"}":return f(mt.UNBALANCED_CLOSING_BRACE,s(),0),R.next(),d(P,3,"}");case"@":return se(R,P)||p(P);default:{if(b(R))return O=d(P,1,B(R)),P.braceNest=0,P.inLinked=!1,O;if(D(R))return d(P,0,ke(R));break}}return O}function ne(){const{currentType:R,offset:P,startLoc:O,endLoc:H}=l;return l.lastType=R,l.lastOffset=P,l.lastStartLoc=O,l.lastEndLoc=H,l.offset=r(),l.startLoc=s(),i.currentChar()===Ui?d(l,13):ee(i,l)}return{nextToken:ne,currentOffset:r,currentPosition:s,context:c}}const Oy="parser",Fy=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function By(n,e,t){switch(n){case"\\\\":return"\\";case"\\'":return"'";default:{const i=parseInt(e||t,16);return i<=55295||i>=57344?String.fromCodePoint(i):"�"}}}function ky(n={}){const e=n.location!==!1,{onError:t}=n;function i(h,S,y,_,...A){const C=h.currentPosition();if(C.offset+=_,C.column+=_,t){const T=e?Nu(y,C):null,N=cc(S,T,{domain:Oy,args:A});t(N)}}function r(h,S,y){const _={type:h};return e&&(_.start=S,_.end=S,_.loc={start:y,end:y}),_}function s(h,S,y,_){e&&(h.end=S,h.loc&&(h.loc.end=y))}function o(h,S){const y=h.context(),_=r(3,y.offset,y.startLoc);return _.value=S,s(_,h.currentOffset(),h.currentPosition()),_}function a(h,S){const y=h.context(),{lastOffset:_,lastStartLoc:A}=y,C=r(5,_,A);return C.index=parseInt(S,10),h.nextToken(),s(C,h.currentOffset(),h.currentPosition()),C}function l(h,S){const y=h.context(),{lastOffset:_,lastStartLoc:A}=y,C=r(4,_,A);return C.key=S,h.nextToken(),s(C,h.currentOffset(),h.currentPosition()),C}function c(h,S){const y=h.context(),{lastOffset:_,lastStartLoc:A}=y,C=r(9,_,A);return C.value=S.replace(Fy,By),h.nextToken(),s(C,h.currentOffset(),h.currentPosition()),C}function u(h){const S=h.nextToken(),y=h.context(),{lastOffset:_,lastStartLoc:A}=y,C=r(8,_,A);return S.type!==11?(i(h,mt.UNEXPECTED_EMPTY_LINKED_MODIFIER,y.lastStartLoc,0),C.value="",s(C,_,A),{nextConsumeToken:S,node:C}):(S.value==null&&i(h,mt.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,gi(S)),C.value=S.value||"",s(C,h.currentOffset(),h.currentPosition()),{node:C})}function f(h,S){const y=h.context(),_=r(7,y.offset,y.startLoc);return _.value=S,s(_,h.currentOffset(),h.currentPosition()),_}function d(h){const S=h.context(),y=r(6,S.offset,S.startLoc);let _=h.nextToken();if(_.type===8){const A=u(h);y.modifier=A.node,_=A.nextConsumeToken||h.nextToken()}switch(_.type!==9&&i(h,mt.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,gi(_)),_=h.nextToken(),_.type===2&&(_=h.nextToken()),_.type){case 10:_.value==null&&i(h,mt.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,gi(_)),y.key=f(h,_.value||"");break;case 4:_.value==null&&i(h,mt.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,gi(_)),y.key=l(h,_.value||"");break;case 5:_.value==null&&i(h,mt.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,gi(_)),y.key=a(h,_.value||"");break;case 6:_.value==null&&i(h,mt.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,gi(_)),y.key=c(h,_.value||"");break;default:{i(h,mt.UNEXPECTED_EMPTY_LINKED_KEY,S.lastStartLoc,0);const A=h.context(),C=r(7,A.offset,A.startLoc);return C.value="",s(C,A.offset,A.startLoc),y.key=C,s(y,A.offset,A.startLoc),{nextConsumeToken:_,node:y}}}return s(y,h.currentOffset(),h.currentPosition()),{node:y}}function p(h){const S=h.context(),y=S.currentType===1?h.currentOffset():S.offset,_=S.currentType===1?S.endLoc:S.startLoc,A=r(2,y,_);A.items=[];let C=null;do{const M=C||h.nextToken();switch(C=null,M.type){case 0:M.value==null&&i(h,mt.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,gi(M)),A.items.push(o(h,M.value||""));break;case 5:M.value==null&&i(h,mt.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,gi(M)),A.items.push(a(h,M.value||""));break;case 4:M.value==null&&i(h,mt.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,gi(M)),A.items.push(l(h,M.value||""));break;case 6:M.value==null&&i(h,mt.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,gi(M)),A.items.push(c(h,M.value||""));break;case 7:{const b=d(h);A.items.push(b.node),C=b.nextConsumeToken||null;break}}}while(S.currentType!==13&&S.currentType!==1);const T=S.currentType===1?S.lastOffset:h.currentOffset(),N=S.currentType===1?S.lastEndLoc:h.currentPosition();return s(A,T,N),A}function g(h,S,y,_){const A=h.context();let C=_.items.length===0;const T=r(1,S,y);T.cases=[],T.cases.push(_);do{const N=p(h);C||(C=N.items.length===0),T.cases.push(N)}while(A.currentType!==13);return C&&i(h,mt.MUST_HAVE_MESSAGES_IN_PLURAL,y,0),s(T,h.currentOffset(),h.currentPosition()),T}function v(h){const S=h.context(),{offset:y,startLoc:_}=S,A=p(h);return S.currentType===13?A:g(h,y,_,A)}function m(h){const S=Uy(h,zt({},n)),y=S.context(),_=r(0,y.offset,y.startLoc);return e&&_.loc&&(_.loc.source=h),_.body=v(S),n.onCacheKey&&(_.cacheKey=n.onCacheKey(h)),y.currentType!==13&&i(S,mt.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,h[y.offset]||""),s(_,S.currentOffset(),S.currentPosition()),_}return{parse:m}}function gi(n){if(n.type===13)return"EOF";const e=(n.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function Hy(n,e={}){const t={ast:n,helpers:new Set};return{context:()=>t,helper:s=>(t.helpers.add(s),s)}}function Oh(n,e){for(let t=0;t<n.length;t++)sd(n[t],e)}function sd(n,e){switch(n.type){case 1:Oh(n.cases,e),e.helper("plural");break;case 2:Oh(n.items,e);break;case 6:{sd(n.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function Vy(n,e={}){const t=Hy(n);t.helper("normalize"),n.body&&sd(n.body,t);const i=t.context();n.helpers=Array.from(i.helpers)}function zy(n){const e=n.body;return e.type===2?Fh(e):e.cases.forEach(t=>Fh(t)),n}function Fh(n){if(n.items.length===1){const e=n.items[0];(e.type===3||e.type===9)&&(n.static=e.value,delete e.value)}else{const e=[];for(let t=0;t<n.items.length;t++){const i=n.items[t];if(!(i.type===3||i.type===9)||i.value==null)break;e.push(i.value)}if(e.length===n.items.length){n.static=rd(e);for(let t=0;t<n.items.length;t++){const i=n.items[t];(i.type===3||i.type===9)&&delete i.value}}}}function ws(n){switch(n.t=n.type,n.type){case 0:{const e=n;ws(e.body),e.b=e.body,delete e.body;break}case 1:{const e=n,t=e.cases;for(let i=0;i<t.length;i++)ws(t[i]);e.c=t,delete e.cases;break}case 2:{const e=n,t=e.items;for(let i=0;i<t.length;i++)ws(t[i]);e.i=t,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=n;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=n;ws(e.key),e.k=e.key,delete e.key,e.modifier&&(ws(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=n;e.i=e.index,delete e.index;break}case 4:{const e=n;e.k=e.key,delete e.key;break}}delete n.type}function Gy(n,e){const{filename:t,breakLineCode:i,needIndent:r}=e,s=e.location!==!1,o={filename:t,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:i,needIndent:r,indentLevel:0};s&&n.loc&&(o.source=n.loc.source);const a=()=>o;function l(v,m){o.code+=v}function c(v,m=!0){const h=m?i:"";l(r?h+"  ".repeat(v):h)}function u(v=!0){const m=++o.indentLevel;v&&c(m)}function f(v=!0){const m=--o.indentLevel;v&&c(m)}function d(){c(o.indentLevel)}return{context:a,push:l,indent:u,deindent:f,newline:d,helper:v=>`_${v}`,needIndent:()=>o.needIndent}}function Wy(n,e){const{helper:t}=n;n.push(`${t("linked")}(`),Gs(n,e.key),e.modifier?(n.push(", "),Gs(n,e.modifier),n.push(", _type")):n.push(", undefined, _type"),n.push(")")}function jy(n,e){const{helper:t,needIndent:i}=n;n.push(`${t("normalize")}([`),n.indent(i());const r=e.items.length;for(let s=0;s<r&&(Gs(n,e.items[s]),s!==r-1);s++)n.push(", ");n.deindent(i()),n.push("])")}function Xy(n,e){const{helper:t,needIndent:i}=n;if(e.cases.length>1){n.push(`${t("plural")}([`),n.indent(i());const r=e.cases.length;for(let s=0;s<r&&(Gs(n,e.cases[s]),s!==r-1);s++)n.push(", ");n.deindent(i()),n.push("])")}}function $y(n,e){e.body?Gs(n,e.body):n.push("null")}function Gs(n,e){const{helper:t}=n;switch(e.type){case 0:$y(n,e);break;case 1:Xy(n,e);break;case 2:jy(n,e);break;case 6:Wy(n,e);break;case 8:n.push(JSON.stringify(e.value),e);break;case 7:n.push(JSON.stringify(e.value),e);break;case 5:n.push(`${t("interpolate")}(${t("list")}(${e.index}))`,e);break;case 4:n.push(`${t("interpolate")}(${t("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:n.push(JSON.stringify(e.value),e);break;case 3:n.push(JSON.stringify(e.value),e);break}}const qy=(n,e={})=>{const t=Le(e.mode)?e.mode:"normal",i=Le(e.filename)?e.filename:"message.intl";e.sourceMap;const r=e.breakLineCode!=null?e.breakLineCode:t==="arrow"?";":`
`,s=e.needIndent?e.needIndent:t!=="arrow",o=n.helpers||[],a=Gy(n,{filename:i,breakLineCode:r,needIndent:s});a.push(t==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),a.indent(s),o.length>0&&(a.push(`const { ${rd(o.map(u=>`${u}: _${u}`),", ")} } = ctx`),a.newline()),a.push("return "),Gs(a,n),a.deindent(s),a.push("}"),delete n.helpers;const{code:l,map:c}=a.context();return{ast:n,code:l,map:c?c.toJSON():void 0}};function Yy(n,e={}){const t=zt({},e),i=!!t.jit,r=!!t.minify,s=t.optimize==null?!0:t.optimize,a=ky(t).parse(n);return i?(s&&zy(a),r&&ws(a),{ast:a,code:""}):(Vy(a,t),qy(a,t))}/*!
  * core-base v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function Ky(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Kr().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Kr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function bi(n){return ht(n)&&od(n)===0&&(oi(n,"b")||oi(n,"body"))}const l_=["b","body"];function Jy(n){return Ar(n,l_)}const c_=["c","cases"];function Zy(n){return Ar(n,c_,[])}const u_=["s","static"];function Qy(n){return Ar(n,u_)}const f_=["i","items"];function eS(n){return Ar(n,f_,[])}const d_=["t","type"];function od(n){return Ar(n,d_)}const h_=["v","value"];function La(n,e){const t=Ar(n,h_);if(t!=null)return t;throw Ko(e)}const p_=["m","modifier"];function tS(n){return Ar(n,p_)}const m_=["k","key"];function nS(n){const e=Ar(n,m_);if(e)return e;throw Ko(6)}function Ar(n,e,t){for(let i=0;i<e.length;i++){const r=e[i];if(oi(n,r)&&n[r]!=null)return n[r]}return t}const g_=[...l_,...c_,...u_,...f_,...m_,...p_,...h_,...d_];function Ko(n){return new Error(`unhandled node type: ${n}`)}function wc(n){return t=>iS(t,n)}function iS(n,e){const t=Jy(e);if(t==null)throw Ko(0);if(od(t)===1){const s=Zy(t);return n.plural(s.reduce((o,a)=>[...o,Bh(n,a)],[]))}else return Bh(n,t)}function Bh(n,e){const t=Qy(e);if(t!=null)return n.type==="text"?t:n.normalize([t]);{const i=eS(e).reduce((r,s)=>[...r,Uu(n,s)],[]);return n.normalize(i)}}function Uu(n,e){const t=od(e);switch(t){case 3:return La(e,t);case 9:return La(e,t);case 4:{const i=e;if(oi(i,"k")&&i.k)return n.interpolate(n.named(i.k));if(oi(i,"key")&&i.key)return n.interpolate(n.named(i.key));throw Ko(t)}case 5:{const i=e;if(oi(i,"i")&&Ht(i.i))return n.interpolate(n.list(i.i));if(oi(i,"index")&&Ht(i.index))return n.interpolate(n.list(i.index));throw Ko(t)}case 6:{const i=e,r=tS(i),s=nS(i);return n.linked(Uu(n,s),r?Uu(n,r):void 0,n.type)}case 7:return La(e,t);case 8:return La(e,t);default:throw new Error(`unhandled node on format message part: ${t}`)}}const rS=n=>n;let Pa=wt();function sS(n,e={}){let t=!1;const i=e.onError||Ry;return e.onError=r=>{t=!0,i(r)},{...Yy(n,e),detectError:t}}function oS(n,e){if(!__INTLIFY_DROP_MESSAGE_COMPILER__&&Le(n)){ft(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||rS)(n),r=Pa[i];if(r)return r;const{ast:s,detectError:o}=sS(n,{...e,location:!1,jit:!0}),a=wc(s);return o?a:Pa[i]=a}else{const t=n.cacheKey;if(t){const i=Pa[t];return i||(Pa[t]=wc(n))}else return wc(n)}}let Jo=null;function aS(n){Jo=n}function lS(n,e,t){Jo&&Jo.emit("i18n:init",{timestamp:Date.now(),i18n:n,version:e,meta:t})}const cS=uS("function:translate");function uS(n){return e=>Jo&&Jo.emit(n,e)}const $i={INVALID_ARGUMENT:wy,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},fS=24;function qi(n){return cc(n,null,void 0)}function ad(n,e){return e.locale!=null?kh(e.locale):kh(n.locale)}let Rc;function kh(n){if(Le(n))return n;if(Pt(n)){if(n.resolvedOnce&&Rc!=null)return Rc;if(n.constructor.name==="Function"){const e=n();if(Ey(e))throw qi($i.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return Rc=e}else throw qi($i.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw qi($i.NOT_SUPPORT_LOCALE_TYPE)}function dS(n,e,t){return[...new Set([t,...Ft(e)?e:ht(e)?Object.keys(e):Le(e)?[e]:[t]])]}function __(n,e,t){const i=Le(t)?t:Zo,r=n;r.__localeChainCache||(r.__localeChainCache=new Map);let s=r.__localeChainCache.get(i);if(!s){s=[];let o=[t];for(;Ft(o);)o=Hh(s,o,e);const a=Ft(e)||!ot(e)?e:e.default?e.default:null;o=Le(a)?[a]:a,Ft(o)&&Hh(s,o,!1),r.__localeChainCache.set(i,s)}return s}function Hh(n,e,t){let i=!0;for(let r=0;r<e.length&&ft(i);r++){const s=e[r];Le(s)&&(i=hS(n,e[r],t))}return i}function hS(n,e,t){let i;const r=e.split("-");do{const s=r.join("-");i=pS(n,s,t),r.splice(-1,1)}while(r.length&&i===!0);return i}function pS(n,e,t){let i=!1;if(!n.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const r=e.replace(/!/g,"");n.push(r),(Ft(t)||ot(t))&&t[r]&&(i=t[r])}return i}const wr=[];wr[0]={w:[0],i:[3,0],"[":[4],o:[7]};wr[1]={w:[1],".":[2],"[":[4],o:[7]};wr[2]={w:[2],i:[3,0],0:[3,0]};wr[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};wr[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};wr[5]={"'":[4,0],o:8,l:[5,0]};wr[6]={'"':[4,0],o:8,l:[6,0]};const mS=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function gS(n){return mS.test(n)}function _S(n){const e=n.charCodeAt(0),t=n.charCodeAt(n.length-1);return e===t&&(e===34||e===39)?n.slice(1,-1):n}function vS(n){if(n==null)return"o";switch(n.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return n;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function xS(n){const e=n.trim();return n.charAt(0)==="0"&&isNaN(parseInt(n))?!1:gS(e)?_S(e):"*"+e}function yS(n){const e=[];let t=-1,i=0,r=0,s,o,a,l,c,u,f;const d=[];d[0]=()=>{o===void 0?o=a:o+=a},d[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},d[2]=()=>{d[0](),r++},d[3]=()=>{if(r>0)r--,i=4,d[0]();else{if(r=0,o===void 0||(o=xS(o),o===!1))return!1;d[1]()}};function p(){const g=n[t+1];if(i===5&&g==="'"||i===6&&g==='"')return t++,a="\\"+g,d[0](),!0}for(;i!==null;)if(t++,s=n[t],!(s==="\\"&&p())){if(l=vS(s),f=wr[i],c=f[l]||f.l||8,c===8||(i=c[0],c[1]!==void 0&&(u=d[c[1]],u&&(a=s,u()===!1))))return;if(i===7)return e}}const Vh=new Map;function SS(n,e){return ht(n)?n[e]:null}function bS(n,e){if(!ht(n))return null;let t=Vh.get(e);if(t||(t=yS(e),t&&Vh.set(e,t)),!t)return null;const i=t.length;let r=n,s=0;for(;s<i;){const o=t[s];if(g_.includes(o)&&bi(r))return null;const a=r[o];if(a===void 0||Pt(r))return null;r=a,s++}return r}const MS="11.1.12",uc=-1,Zo="en-US",zh="",Gh=n=>`${n.charAt(0).toLocaleUpperCase()}${n.substr(1)}`;function ES(){return{upper:(n,e)=>e==="text"&&Le(n)?n.toUpperCase():e==="vnode"&&ht(n)&&"__v_isVNode"in n?n.children.toUpperCase():n,lower:(n,e)=>e==="text"&&Le(n)?n.toLowerCase():e==="vnode"&&ht(n)&&"__v_isVNode"in n?n.children.toLowerCase():n,capitalize:(n,e)=>e==="text"&&Le(n)?Gh(n):e==="vnode"&&ht(n)&&"__v_isVNode"in n?Gh(n.children):n}}let v_;function TS(n){v_=n}let x_;function AS(n){x_=n}let y_;function wS(n){y_=n}let S_=null;const RS=n=>{S_=n},CS=()=>S_;let b_=null;const Wh=n=>{b_=n},LS=()=>b_;let jh=0;function PS(n={}){const e=Pt(n.onWarn)?n.onWarn:_y,t=Le(n.version)?n.version:MS,i=Le(n.locale)||Pt(n.locale)?n.locale:Zo,r=Pt(i)?Zo:i,s=Ft(n.fallbackLocale)||ot(n.fallbackLocale)||Le(n.fallbackLocale)||n.fallbackLocale===!1?n.fallbackLocale:r,o=ot(n.messages)?n.messages:Cc(r),a=ot(n.datetimeFormats)?n.datetimeFormats:Cc(r),l=ot(n.numberFormats)?n.numberFormats:Cc(r),c=zt(wt(),n.modifiers,ES()),u=n.pluralRules||wt(),f=Pt(n.missing)?n.missing:null,d=ft(n.missingWarn)||zs(n.missingWarn)?n.missingWarn:!0,p=ft(n.fallbackWarn)||zs(n.fallbackWarn)?n.fallbackWarn:!0,g=!!n.fallbackFormat,v=!!n.unresolving,m=Pt(n.postTranslation)?n.postTranslation:null,h=ot(n.processor)?n.processor:null,S=ft(n.warnHtmlMessage)?n.warnHtmlMessage:!0,y=!!n.escapeParameter,_=Pt(n.messageCompiler)?n.messageCompiler:v_,A=Pt(n.messageResolver)?n.messageResolver:x_||SS,C=Pt(n.localeFallbacker)?n.localeFallbacker:y_||dS,T=ht(n.fallbackContext)?n.fallbackContext:void 0,N=n,M=ht(N.__datetimeFormatters)?N.__datetimeFormatters:new Map,b=ht(N.__numberFormatters)?N.__numberFormatters:new Map,D=ht(N.__meta)?N.__meta:{};jh++;const W={version:t,cid:jh,locale:i,fallbackLocale:s,messages:o,modifiers:c,pluralRules:u,missing:f,missingWarn:d,fallbackWarn:p,fallbackFormat:g,unresolving:v,postTranslation:m,processor:h,warnHtmlMessage:S,escapeParameter:y,messageCompiler:_,messageResolver:A,localeFallbacker:C,fallbackContext:T,onWarn:e,__meta:D};return W.datetimeFormats=a,W.numberFormats=l,W.__datetimeFormatters=M,W.__numberFormatters=b,__INTLIFY_PROD_DEVTOOLS__&&lS(W,t,D),W}const Cc=n=>({[n]:wt()});function ld(n,e,t,i,r){const{missing:s,onWarn:o}=n;if(s!==null){const a=s(n,t,e,r);return Le(a)?a:e}else return e}function ho(n,e,t){const i=n;i.__localeChainCache=new Map,n.localeFallbacker(n,t,e)}function IS(n,e){return n===e?!1:n.split("-")[0]===e.split("-")[0]}function DS(n,e){const t=e.indexOf(n);if(t===-1)return!1;for(let i=t+1;i<e.length;i++)if(IS(n,e[i]))return!0;return!1}function Xh(n,...e){const{datetimeFormats:t,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:o}=n,{__datetimeFormatters:a}=n,[l,c,u,f]=Ou(...e),d=ft(u.missingWarn)?u.missingWarn:n.missingWarn;ft(u.fallbackWarn)?u.fallbackWarn:n.fallbackWarn;const p=!!u.part,g=ad(n,u),v=o(n,r,g);if(!Le(l)||l==="")return new Intl.DateTimeFormat(g,f).format(c);let m={},h,S=null;const y="datetime format";for(let C=0;C<v.length&&(h=v[C],m=t[h]||{},S=m[l],!ot(S));C++)ld(n,l,h,d,y);if(!ot(S)||!Le(h))return i?uc:l;let _=`${h}__${l}`;lc(f)||(_=`${_}__${JSON.stringify(f)}`);let A=a.get(_);return A||(A=new Intl.DateTimeFormat(h,zt({},S,f)),a.set(_,A)),p?A.formatToParts(c):A.format(c)}const M_=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Ou(...n){const[e,t,i,r]=n,s=wt();let o=wt(),a;if(Le(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw qi($i.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();a=new Date(c);try{a.toISOString()}catch{throw qi($i.INVALID_ISO_DATE_ARGUMENT)}}else if(yy(e)){if(isNaN(e.getTime()))throw qi($i.INVALID_DATE_ARGUMENT);a=e}else if(Ht(e))a=e;else throw qi($i.INVALID_ARGUMENT);return Le(t)?s.key=t:ot(t)&&Object.keys(t).forEach(l=>{M_.includes(l)?o[l]=t[l]:s[l]=t[l]}),Le(i)?s.locale=i:ot(i)&&(o=i),ot(r)&&(o=r),[s.key||"",a,s,o]}function $h(n,e,t){const i=n;for(const r in t){const s=`${e}__${r}`;i.__datetimeFormatters.has(s)&&i.__datetimeFormatters.delete(s)}}function qh(n,...e){const{numberFormats:t,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:o}=n,{__numberFormatters:a}=n,[l,c,u,f]=Fu(...e),d=ft(u.missingWarn)?u.missingWarn:n.missingWarn;ft(u.fallbackWarn)?u.fallbackWarn:n.fallbackWarn;const p=!!u.part,g=ad(n,u),v=o(n,r,g);if(!Le(l)||l==="")return new Intl.NumberFormat(g,f).format(c);let m={},h,S=null;const y="number format";for(let C=0;C<v.length&&(h=v[C],m=t[h]||{},S=m[l],!ot(S));C++)ld(n,l,h,d,y);if(!ot(S)||!Le(h))return i?uc:l;let _=`${h}__${l}`;lc(f)||(_=`${_}__${JSON.stringify(f)}`);let A=a.get(_);return A||(A=new Intl.NumberFormat(h,zt({},S,f)),a.set(_,A)),p?A.formatToParts(c):A.format(c)}const E_=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Fu(...n){const[e,t,i,r]=n,s=wt();let o=wt();if(!Ht(e))throw qi($i.INVALID_ARGUMENT);const a=e;return Le(t)?s.key=t:ot(t)&&Object.keys(t).forEach(l=>{E_.includes(l)?o[l]=t[l]:s[l]=t[l]}),Le(i)?s.locale=i:ot(i)&&(o=i),ot(r)&&(o=r),[s.key||"",a,s,o]}function Yh(n,e,t){const i=n;for(const r in t){const s=`${e}__${r}`;i.__numberFormatters.has(s)&&i.__numberFormatters.delete(s)}}const NS=n=>n,US=n=>"",OS="text",FS=n=>n.length===0?"":rd(n),BS=Ty;function Kh(n,e){return n=Math.abs(n),e===2?n?n>1?1:0:1:n?Math.min(n,2):0}function kS(n){const e=Ht(n.pluralIndex)?n.pluralIndex:-1;return n.named&&(Ht(n.named.count)||Ht(n.named.n))?Ht(n.named.count)?n.named.count:Ht(n.named.n)?n.named.n:e:e}function HS(n,e){e.count||(e.count=n),e.n||(e.n=n)}function VS(n={}){const e=n.locale,t=kS(n),i=ht(n.pluralRules)&&Le(e)&&Pt(n.pluralRules[e])?n.pluralRules[e]:Kh,r=ht(n.pluralRules)&&Le(e)&&Pt(n.pluralRules[e])?Kh:void 0,s=h=>h[i(t,h.length,r)],o=n.list||[],a=h=>o[h],l=n.named||wt();Ht(n.pluralIndex)&&HS(t,l);const c=h=>l[h];function u(h,S){const y=Pt(n.messages)?n.messages(h,!!S):ht(n.messages)?n.messages[h]:!1;return y||(n.parent?n.parent.message(h):US)}const f=h=>n.modifiers?n.modifiers[h]:NS,d=ot(n.processor)&&Pt(n.processor.normalize)?n.processor.normalize:FS,p=ot(n.processor)&&Pt(n.processor.interpolate)?n.processor.interpolate:BS,g=ot(n.processor)&&Le(n.processor.type)?n.processor.type:OS,m={list:a,named:c,plural:s,linked:(h,...S)=>{const[y,_]=S;let A="text",C="";S.length===1?ht(y)?(C=y.modifier||C,A=y.type||A):Le(y)&&(C=y||C):S.length===2&&(Le(y)&&(C=y||C),Le(_)&&(A=_||A));const T=u(h,!0)(m),N=A==="vnode"&&Ft(T)&&C?T[0]:T;return C?f(C)(N,A):N},message:u,type:g,interpolate:p,normalize:d,values:zt(wt(),o,l)};return m}const Jh=()=>"",Gn=n=>Pt(n);function Zh(n,...e){const{fallbackFormat:t,postTranslation:i,unresolving:r,messageCompiler:s,fallbackLocale:o,messages:a}=n,[l,c]=Bu(...e),u=ft(c.missingWarn)?c.missingWarn:n.missingWarn,f=ft(c.fallbackWarn)?c.fallbackWarn:n.fallbackWarn,d=ft(c.escapeParameter)?c.escapeParameter:n.escapeParameter,p=!!c.resolvedMessage,g=Le(c.default)||ft(c.default)?ft(c.default)?s?l:()=>l:c.default:t?s?l:()=>l:null,v=t||g!=null&&(Le(g)||Pt(g)),m=ad(n,c);d&&zS(c);let[h,S,y]=p?[l,m,a[m]||wt()]:T_(n,l,m,o,f,u),_=h,A=l;if(!p&&!(Le(_)||bi(_)||Gn(_))&&v&&(_=g,A=_),!p&&(!(Le(_)||bi(_)||Gn(_))||!Le(S)))return r?uc:l;let C=!1;const T=()=>{C=!0},N=Gn(_)?_:A_(n,l,S,_,A,T);if(C)return _;const M=jS(n,S,y,c),b=VS(M),D=GS(n,N,b);let W=i?i(D,l):D;if(d&&Le(W)&&(W=by(W)),__INTLIFY_PROD_DEVTOOLS__){const F={timestamp:Date.now(),key:Le(l)?l:Gn(_)?_.key:"",locale:S||(Gn(_)?_.locale:""),format:Le(_)?_:Gn(_)?_.source:"",message:W};F.meta=zt({},n.__meta,CS()||{}),cS(F)}return W}function zS(n){Ft(n.list)?n.list=n.list.map(e=>Le(e)?Dh(e):e):ht(n.named)&&Object.keys(n.named).forEach(e=>{Le(n.named[e])&&(n.named[e]=Dh(n.named[e]))})}function T_(n,e,t,i,r,s){const{messages:o,onWarn:a,messageResolver:l,localeFallbacker:c}=n,u=c(n,i,t);let f=wt(),d,p=null;const g="translate";for(let v=0;v<u.length&&(d=u[v],f=o[d]||wt(),(p=l(f,e))===null&&(p=f[e]),!(Le(p)||bi(p)||Gn(p)));v++)if(!DS(d,u)){const m=ld(n,e,d,s,g);m!==e&&(p=m)}return[p,d,f]}function A_(n,e,t,i,r,s){const{messageCompiler:o,warnHtmlMessage:a}=n;if(Gn(i)){const c=i;return c.locale=c.locale||t,c.key=c.key||e,c}if(o==null){const c=(()=>i);return c.locale=t,c.key=e,c}const l=o(i,WS(n,t,r,i,a,s));return l.locale=t,l.key=e,l.source=i,l}function GS(n,e,t){return e(t)}function Bu(...n){const[e,t,i]=n,r=wt();if(!Le(e)&&!Ht(e)&&!Gn(e)&&!bi(e))throw qi($i.INVALID_ARGUMENT);const s=Ht(e)?String(e):(Gn(e),e);return Ht(t)?r.plural=t:Le(t)?r.default=t:ot(t)&&!lc(t)?r.named=t:Ft(t)&&(r.list=t),Ht(i)?r.plural=i:Le(i)?r.default=i:ot(i)&&zt(r,i),[s,r]}function WS(n,e,t,i,r,s){return{locale:e,key:t,warnHtmlMessage:r,onError:o=>{throw s&&s(o),o},onCacheKey:o=>vy(e,t,o)}}function jS(n,e,t,i){const{modifiers:r,pluralRules:s,messageResolver:o,fallbackLocale:a,fallbackWarn:l,missingWarn:c,fallbackContext:u}=n,d={locale:e,modifiers:r,pluralRules:s,messages:(p,g)=>{let v=o(t,p);if(v==null&&(u||g)){const[,,m]=T_(u||n,p,e,a,l,c);v=o(m,p)}if(Le(v)||bi(v)){let m=!1;const S=A_(n,p,e,v,p,()=>{m=!0});return m?Jh:S}else return Gn(v)?v:Jh}};return n.processor&&(d.processor=n.processor),i.list&&(d.list=i.list),i.named&&(d.named=i.named),Ht(i.plural)&&(d.pluralIndex=i.plural),d}Ky();/*!
  * vue-i18n v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */const XS="11.1.12";function $S(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(Kr().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(Kr().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Kr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Kr().__INTLIFY_PROD_DEVTOOLS__=!1)}const Rn={UNEXPECTED_RETURN_TYPE:fS,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32};function Nn(n,...e){return cc(n,null,void 0)}const ku=Tr("__translateVNode"),Hu=Tr("__datetimeParts"),Vu=Tr("__numberParts"),w_=Tr("__setPluralRules"),R_=Tr("__injectWithOption"),zu=Tr("__dispose");function Qo(n){if(!ht(n)||bi(n))return n;for(const e in n)if(oi(n,e))if(!e.includes("."))ht(n[e])&&Qo(n[e]);else{const t=e.split("."),i=t.length-1;let r=n,s=!1;for(let o=0;o<i;o++){if(t[o]==="__proto__")throw new Error(`unsafe key: ${t[o]}`);if(t[o]in r||(r[t[o]]=wt()),!ht(r[t[o]])){s=!0;break}r=r[t[o]]}if(s||(bi(r)?g_.includes(t[i])||delete n[e]:(r[t[i]]=n[e],delete n[e])),!bi(r)){const o=r[t[i]];ht(o)&&Qo(o)}}return n}function cd(n,e){const{messages:t,__i18n:i,messageResolver:r,flatJson:s}=e,o=ot(t)?t:Ft(i)?wt():{[n]:wt()};if(Ft(i)&&i.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:l,resource:c}=a;l?(o[l]=o[l]||wt(),pl(c,o[l])):pl(c,o)}else Le(a)&&pl(JSON.parse(a),o)}),r==null&&s)for(const a in o)oi(o,a)&&Qo(o[a]);return o}function C_(n){return n.type}function L_(n,e,t){let i=ht(e.messages)?e.messages:wt();"__i18nGlobal"in t&&(i=cd(n.locale.value,{messages:i,__i18n:t.__i18nGlobal}));const r=Object.keys(i);r.length&&r.forEach(s=>{n.mergeLocaleMessage(s,i[s])});{if(ht(e.datetimeFormats)){const s=Object.keys(e.datetimeFormats);s.length&&s.forEach(o=>{n.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(ht(e.numberFormats)){const s=Object.keys(e.numberFormats);s.length&&s.forEach(o=>{n.mergeNumberFormat(o,e.numberFormats[o])})}}}function Qh(n){return ze(pa,null,n,0)}const ep="__INTLIFY_META__",tp=()=>[],qS=()=>!1;let np=0;function ip(n){return((e,t,i,r)=>n(t,i,ns()||void 0,r))}const YS=()=>{const n=ns();let e=null;return n&&(e=C_(n)[ep])?{[ep]:e}:null};function ud(n={}){const{__root:e,__injectWithOption:t}=n,i=e===void 0,r=n.flatJson,s=Hl?Ze:Sg;let o=ft(n.inheritLocale)?n.inheritLocale:!0;const a=s(e&&o?e.locale.value:Le(n.locale)?n.locale:Zo),l=s(e&&o?e.fallbackLocale.value:Le(n.fallbackLocale)||Ft(n.fallbackLocale)||ot(n.fallbackLocale)||n.fallbackLocale===!1?n.fallbackLocale:a.value),c=s(cd(a.value,n)),u=s(ot(n.datetimeFormats)?n.datetimeFormats:{[a.value]:{}}),f=s(ot(n.numberFormats)?n.numberFormats:{[a.value]:{}});let d=e?e.missingWarn:ft(n.missingWarn)||zs(n.missingWarn)?n.missingWarn:!0,p=e?e.fallbackWarn:ft(n.fallbackWarn)||zs(n.fallbackWarn)?n.fallbackWarn:!0,g=e?e.fallbackRoot:ft(n.fallbackRoot)?n.fallbackRoot:!0,v=!!n.fallbackFormat,m=Pt(n.missing)?n.missing:null,h=Pt(n.missing)?ip(n.missing):null,S=Pt(n.postTranslation)?n.postTranslation:null,y=e?e.warnHtmlMessage:ft(n.warnHtmlMessage)?n.warnHtmlMessage:!0,_=!!n.escapeParameter;const A=e?e.modifiers:ot(n.modifiers)?n.modifiers:{};let C=n.pluralRules||e&&e.pluralRules,T;T=(()=>{i&&Wh(null);const x={version:XS,locale:a.value,fallbackLocale:l.value,messages:c.value,modifiers:A,pluralRules:C,missing:h===null?void 0:h,missingWarn:d,fallbackWarn:p,fallbackFormat:v,unresolving:!0,postTranslation:S===null?void 0:S,warnHtmlMessage:y,escapeParameter:_,messageResolver:n.messageResolver,messageCompiler:n.messageCompiler,__meta:{framework:"vue"}};x.datetimeFormats=u.value,x.numberFormats=f.value,x.__datetimeFormatters=ot(T)?T.__datetimeFormatters:void 0,x.__numberFormatters=ot(T)?T.__numberFormatters:void 0;const I=PS(x);return i&&Wh(I),I})(),ho(T,a.value,l.value);function M(){return[a.value,l.value,c.value,u.value,f.value]}const b=ni({get:()=>a.value,set:x=>{T.locale=x,a.value=x}}),D=ni({get:()=>l.value,set:x=>{T.fallbackLocale=x,l.value=x,ho(T,a.value,x)}}),W=ni(()=>c.value),F=ni(()=>u.value),k=ni(()=>f.value);function K(){return Pt(S)?S:null}function G(x){S=x,T.postTranslation=x}function Z(){return m}function $(x){x!==null&&(h=ip(x)),m=x,T.missing=h}const ce=(x,I,j,J,Y,ye)=>{M();let ue;try{__INTLIFY_PROD_DEVTOOLS__,i||(T.fallbackContext=e?LS():void 0),ue=x(T)}finally{__INTLIFY_PROD_DEVTOOLS__,i||(T.fallbackContext=void 0)}if(j!=="translate exists"&&Ht(ue)&&ue===uc||j==="translate exists"&&!ue){const[be,Re]=I();return e&&g?J(e):Y(be)}else{if(ye(ue))return ue;throw Nn(Rn.UNEXPECTED_RETURN_TYPE)}};function ve(...x){return ce(I=>Reflect.apply(Zh,null,[I,...x]),()=>Bu(...x),"translate",I=>Reflect.apply(I.t,I,[...x]),I=>I,I=>Le(I))}function Te(...x){const[I,j,J]=x;if(J&&!ht(J))throw Nn(Rn.INVALID_ARGUMENT);return ve(I,j,zt({resolvedMessage:!0},J||{}))}function ke(...x){return ce(I=>Reflect.apply(Xh,null,[I,...x]),()=>Ou(...x),"datetime format",I=>Reflect.apply(I.d,I,[...x]),()=>zh,I=>Le(I)||Ft(I))}function it(...x){return ce(I=>Reflect.apply(qh,null,[I,...x]),()=>Fu(...x),"number format",I=>Reflect.apply(I.n,I,[...x]),()=>zh,I=>Le(I)||Ft(I))}function re(x){return x.map(I=>Le(I)||Ht(I)||ft(I)?Qh(String(I)):I)}const Ae={normalize:re,interpolate:x=>x,type:"vnode"};function ge(...x){return ce(I=>{let j;const J=I;try{J.processor=Ae,j=Reflect.apply(Zh,null,[J,...x])}finally{J.processor=null}return j},()=>Bu(...x),"translate",I=>I[ku](...x),I=>[Qh(I)],I=>Ft(I))}function we(...x){return ce(I=>Reflect.apply(qh,null,[I,...x]),()=>Fu(...x),"number format",I=>I[Vu](...x),tp,I=>Le(I)||Ft(I))}function tt(...x){return ce(I=>Reflect.apply(Xh,null,[I,...x]),()=>Ou(...x),"datetime format",I=>I[Hu](...x),tp,I=>Le(I)||Ft(I))}function Fe(x){C=x,T.pluralRules=C}function ct(x,I){return ce(()=>{if(!x)return!1;const j=Le(I)?I:a.value,J=w(j),Y=T.messageResolver(J,x);return bi(Y)||Gn(Y)||Le(Y)},()=>[x],"translate exists",j=>Reflect.apply(j.te,j,[x,I]),qS,j=>ft(j))}function U(x){let I=null;const j=__(T,l.value,a.value);for(let J=0;J<j.length;J++){const Y=c.value[j[J]]||{},ye=T.messageResolver(Y,x);if(ye!=null){I=ye;break}}return I}function B(x){const I=U(x);return I??(e?e.tm(x)||{}:{})}function w(x){return c.value[x]||{}}function se(x,I){if(r){const j={[x]:I};for(const J in j)oi(j,J)&&Qo(j[J]);I=j[x]}c.value[x]=I,T.messages=c.value}function ee(x,I){c.value[x]=c.value[x]||{};const j={[x]:I};if(r)for(const J in j)oi(j,J)&&Qo(j[J]);I=j[x],pl(I,c.value[x]),T.messages=c.value}function ne(x){return u.value[x]||{}}function R(x,I){u.value[x]=I,T.datetimeFormats=u.value,$h(T,x,I)}function P(x,I){u.value[x]=zt(u.value[x]||{},I),T.datetimeFormats=u.value,$h(T,x,I)}function O(x){return f.value[x]||{}}function H(x,I){f.value[x]=I,T.numberFormats=f.value,Yh(T,x,I)}function le(x,I){f.value[x]=zt(f.value[x]||{},I),T.numberFormats=f.value,Yh(T,x,I)}np++,e&&Hl&&(Zi(e.locale,x=>{o&&(a.value=x,T.locale=x,ho(T,a.value,l.value))}),Zi(e.fallbackLocale,x=>{o&&(l.value=x,T.fallbackLocale=x,ho(T,a.value,l.value))}));const E={id:np,locale:b,fallbackLocale:D,get inheritLocale(){return o},set inheritLocale(x){o=x,x&&e&&(a.value=e.locale.value,l.value=e.fallbackLocale.value,ho(T,a.value,l.value))},get availableLocales(){return Object.keys(c.value).sort()},messages:W,get modifiers(){return A},get pluralRules(){return C||{}},get isGlobal(){return i},get missingWarn(){return d},set missingWarn(x){d=x,T.missingWarn=d},get fallbackWarn(){return p},set fallbackWarn(x){p=x,T.fallbackWarn=p},get fallbackRoot(){return g},set fallbackRoot(x){g=x},get fallbackFormat(){return v},set fallbackFormat(x){v=x,T.fallbackFormat=v},get warnHtmlMessage(){return y},set warnHtmlMessage(x){y=x,T.warnHtmlMessage=x},get escapeParameter(){return _},set escapeParameter(x){_=x,T.escapeParameter=x},t:ve,getLocaleMessage:w,setLocaleMessage:se,mergeLocaleMessage:ee,getPostTranslationHandler:K,setPostTranslationHandler:G,getMissingHandler:Z,setMissingHandler:$,[w_]:Fe};return E.datetimeFormats=F,E.numberFormats=k,E.rt=Te,E.te=ct,E.tm=B,E.d=ke,E.n=it,E.getDateTimeFormat=ne,E.setDateTimeFormat=R,E.mergeDateTimeFormat=P,E.getNumberFormat=O,E.setNumberFormat=H,E.mergeNumberFormat=le,E[R_]=t,E[ku]=ge,E[Hu]=tt,E[Vu]=we,E}function KS(n){const e=Le(n.locale)?n.locale:Zo,t=Le(n.fallbackLocale)||Ft(n.fallbackLocale)||ot(n.fallbackLocale)||n.fallbackLocale===!1?n.fallbackLocale:e,i=Pt(n.missing)?n.missing:void 0,r=ft(n.silentTranslationWarn)||zs(n.silentTranslationWarn)?!n.silentTranslationWarn:!0,s=ft(n.silentFallbackWarn)||zs(n.silentFallbackWarn)?!n.silentFallbackWarn:!0,o=ft(n.fallbackRoot)?n.fallbackRoot:!0,a=!!n.formatFallbackMessages,l=ot(n.modifiers)?n.modifiers:{},c=n.pluralizationRules,u=Pt(n.postTranslation)?n.postTranslation:void 0,f=Le(n.warnHtmlInMessage)?n.warnHtmlInMessage!=="off":!0,d=!!n.escapeParameterHtml,p=ft(n.sync)?n.sync:!0;let g=n.messages;if(ot(n.sharedMessages)){const A=n.sharedMessages;g=Object.keys(A).reduce((T,N)=>{const M=T[N]||(T[N]={});return zt(M,A[N]),T},g||{})}const{__i18n:v,__root:m,__injectWithOption:h}=n,S=n.datetimeFormats,y=n.numberFormats,_=n.flatJson;return{locale:e,fallbackLocale:t,messages:g,flatJson:_,datetimeFormats:S,numberFormats:y,missing:i,missingWarn:r,fallbackWarn:s,fallbackRoot:o,fallbackFormat:a,modifiers:l,pluralRules:c,postTranslation:u,warnHtmlMessage:f,escapeParameter:d,messageResolver:n.messageResolver,inheritLocale:p,__i18n:v,__root:m,__injectWithOption:h}}function Gu(n={}){const e=ud(KS(n)),{__extender:t}=n,i={id:e.id,get locale(){return e.locale.value},set locale(r){e.locale.value=r},get fallbackLocale(){return e.fallbackLocale.value},set fallbackLocale(r){e.fallbackLocale.value=r},get messages(){return e.messages.value},get datetimeFormats(){return e.datetimeFormats.value},get numberFormats(){return e.numberFormats.value},get availableLocales(){return e.availableLocales},get missing(){return e.getMissingHandler()},set missing(r){e.setMissingHandler(r)},get silentTranslationWarn(){return ft(e.missingWarn)?!e.missingWarn:e.missingWarn},set silentTranslationWarn(r){e.missingWarn=ft(r)?!r:r},get silentFallbackWarn(){return ft(e.fallbackWarn)?!e.fallbackWarn:e.fallbackWarn},set silentFallbackWarn(r){e.fallbackWarn=ft(r)?!r:r},get modifiers(){return e.modifiers},get formatFallbackMessages(){return e.fallbackFormat},set formatFallbackMessages(r){e.fallbackFormat=r},get postTranslation(){return e.getPostTranslationHandler()},set postTranslation(r){e.setPostTranslationHandler(r)},get sync(){return e.inheritLocale},set sync(r){e.inheritLocale=r},get warnHtmlInMessage(){return e.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(r){e.warnHtmlMessage=r!=="off"},get escapeParameterHtml(){return e.escapeParameter},set escapeParameterHtml(r){e.escapeParameter=r},get pluralizationRules(){return e.pluralRules||{}},__composer:e,t(...r){return Reflect.apply(e.t,e,[...r])},rt(...r){return Reflect.apply(e.rt,e,[...r])},te(r,s){return e.te(r,s)},tm(r){return e.tm(r)},getLocaleMessage(r){return e.getLocaleMessage(r)},setLocaleMessage(r,s){e.setLocaleMessage(r,s)},mergeLocaleMessage(r,s){e.mergeLocaleMessage(r,s)},d(...r){return Reflect.apply(e.d,e,[...r])},getDateTimeFormat(r){return e.getDateTimeFormat(r)},setDateTimeFormat(r,s){e.setDateTimeFormat(r,s)},mergeDateTimeFormat(r,s){e.mergeDateTimeFormat(r,s)},n(...r){return Reflect.apply(e.n,e,[...r])},getNumberFormat(r){return e.getNumberFormat(r)},setNumberFormat(r,s){e.setNumberFormat(r,s)},mergeNumberFormat(r,s){e.mergeNumberFormat(r,s)}};return i.__extender=t,i}function JS(n,e,t){return{beforeCreate(){const i=ns();if(!i)throw Nn(Rn.UNEXPECTED_ERROR);const r=this.$options;if(r.i18n){const s=r.i18n;if(r.__i18n&&(s.__i18n=r.__i18n),s.__root=e,this===this.$root)this.$i18n=rp(n,s);else{s.__injectWithOption=!0,s.__extender=t.__vueI18nExtend,this.$i18n=Gu(s);const o=this.$i18n;o.__extender&&(o.__disposer=o.__extender(this.$i18n))}}else if(r.__i18n)if(this===this.$root)this.$i18n=rp(n,r);else{this.$i18n=Gu({__i18n:r.__i18n,__injectWithOption:!0,__extender:t.__vueI18nExtend,__root:e});const s=this.$i18n;s.__extender&&(s.__disposer=s.__extender(this.$i18n))}else this.$i18n=n;r.__i18nGlobal&&L_(e,r,r),this.$t=(...s)=>this.$i18n.t(...s),this.$rt=(...s)=>this.$i18n.rt(...s),this.$te=(s,o)=>this.$i18n.te(s,o),this.$d=(...s)=>this.$i18n.d(...s),this.$n=(...s)=>this.$i18n.n(...s),this.$tm=s=>this.$i18n.tm(s),t.__setInstance(i,this.$i18n)},mounted(){},unmounted(){const i=ns();if(!i)throw Nn(Rn.UNEXPECTED_ERROR);const r=this.$i18n;delete this.$t,delete this.$rt,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,r.__disposer&&(r.__disposer(),delete r.__disposer,delete r.__extender),t.__deleteInstance(i),delete this.$i18n}}}function rp(n,e){n.locale=e.locale||n.locale,n.fallbackLocale=e.fallbackLocale||n.fallbackLocale,n.missing=e.missing||n.missing,n.silentTranslationWarn=e.silentTranslationWarn||n.silentFallbackWarn,n.silentFallbackWarn=e.silentFallbackWarn||n.silentFallbackWarn,n.formatFallbackMessages=e.formatFallbackMessages||n.formatFallbackMessages,n.postTranslation=e.postTranslation||n.postTranslation,n.warnHtmlInMessage=e.warnHtmlInMessage||n.warnHtmlInMessage,n.escapeParameterHtml=e.escapeParameterHtml||n.escapeParameterHtml,n.sync=e.sync||n.sync,n.__composer[w_](e.pluralizationRules||n.pluralizationRules);const t=cd(n.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(t).forEach(i=>n.mergeLocaleMessage(i,t[i])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(i=>n.mergeDateTimeFormat(i,e.datetimeFormats[i])),e.numberFormats&&Object.keys(e.numberFormats).forEach(i=>n.mergeNumberFormat(i,e.numberFormats[i])),n}const fd={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:n=>n==="parent"||n==="global",default:"parent"},i18n:{type:Object}};function ZS({slots:n},e){return e.length===1&&e[0]==="default"?(n.default?n.default():[]).reduce((i,r)=>[...i,...r.type===Mt?r.children:[r]],[]):e.reduce((t,i)=>{const r=n[i];return r&&(t[i]=r()),t},wt())}function P_(){return Mt}const QS=vt({name:"i18n-t",props:zt({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:n=>Ht(n)||!isNaN(n)}},fd),setup(n,e){const{slots:t,attrs:i}=e,r=n.i18n||Qt({useScope:n.scope,__useComponent:!0});return()=>{const s=Object.keys(t).filter(f=>f[0]!=="_"),o=wt();n.locale&&(o.locale=n.locale),n.plural!==void 0&&(o.plural=Le(n.plural)?+n.plural:n.plural);const a=ZS(e,s),l=r[ku](n.keypath,a,o),c=zt(wt(),i),u=Le(n.tag)||ht(n.tag)?n.tag:P_();return r_(u,c,l)}}}),sp=QS;function eb(n){return Ft(n)&&!Le(n[0])}function I_(n,e,t,i){const{slots:r,attrs:s}=e;return()=>{const o={part:!0};let a=wt();n.locale&&(o.locale=n.locale),Le(n.format)?o.key=n.format:ht(n.format)&&(Le(n.format.key)&&(o.key=n.format.key),a=Object.keys(n.format).reduce((d,p)=>t.includes(p)?zt(wt(),d,{[p]:n.format[p]}):d,wt()));const l=i(n.value,o,a);let c=[o.key];Ft(l)?c=l.map((d,p)=>{const g=r[d.type],v=g?g({[d.type]:d.value,index:p,parts:l}):[d.value];return eb(v)&&(v[0].key=`${d.type}-${p}`),v}):Le(l)&&(c=[l]);const u=zt(wt(),s),f=Le(n.tag)||ht(n.tag)?n.tag:P_();return r_(f,u,c)}}const tb=vt({name:"i18n-n",props:zt({value:{type:Number,required:!0},format:{type:[String,Object]}},fd),setup(n,e){const t=n.i18n||Qt({useScope:n.scope,__useComponent:!0});return I_(n,e,E_,(...i)=>t[Vu](...i))}}),op=tb;function nb(n,e){const t=n;if(n.mode==="composition")return t.__getInstance(e)||n.global;{const i=t.__getInstance(e);return i!=null?i.__composer:n.global.__composer}}function ib(n){const e=o=>{const{instance:a,value:l}=o;if(!a||!a.$)throw Nn(Rn.UNEXPECTED_ERROR);const c=nb(n,a.$),u=ap(l);return[Reflect.apply(c.t,c,[...lp(u)]),c]};return{created:(o,a)=>{const[l,c]=e(a);Hl&&n.global===c&&(o.__i18nWatcher=Zi(c.locale,()=>{a.instance&&a.instance.$forceUpdate()})),o.__composer=c,o.textContent=l},unmounted:o=>{Hl&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:a})=>{if(o.__composer){const l=o.__composer,c=ap(a);o.textContent=Reflect.apply(l.t,l,[...lp(c)])}},getSSRProps:o=>{const[a]=e(o);return{textContent:a}}}}function ap(n){if(Le(n))return{path:n};if(ot(n)){if(!("path"in n))throw Nn(Rn.REQUIRED_VALUE,"path");return n}else throw Nn(Rn.INVALID_VALUE)}function lp(n){const{path:e,locale:t,args:i,choice:r,plural:s}=n,o={},a=i||{};return Le(t)&&(o.locale=t),Ht(r)&&(o.plural=r),Ht(s)&&(o.plural=s),[e,a,o]}function rb(n,e,...t){const i=ot(t[0])?t[0]:{};(ft(i.globalInstall)?i.globalInstall:!0)&&([sp.name,"I18nT"].forEach(s=>n.component(s,sp)),[op.name,"I18nN"].forEach(s=>n.component(s,op)),[up.name,"I18nD"].forEach(s=>n.component(s,up))),n.directive("t",ib(e))}const sb=Tr("global-vue-i18n");function ob(n={}){const e=__VUE_I18N_LEGACY_API__&&ft(n.legacy)?n.legacy:__VUE_I18N_LEGACY_API__,t=ft(n.globalInjection)?n.globalInjection:!0,i=new Map,[r,s]=ab(n,e),o=Tr("");function a(f){return i.get(f)||null}function l(f,d){i.set(f,d)}function c(f){i.delete(f)}const u={get mode(){return __VUE_I18N_LEGACY_API__&&e?"legacy":"composition"},async install(f,...d){if(f.__VUE_I18N_SYMBOL__=o,f.provide(f.__VUE_I18N_SYMBOL__,u),ot(d[0])){const v=d[0];u.__composerExtend=v.__composerExtend,u.__vueI18nExtend=v.__vueI18nExtend}let p=null;!e&&t&&(p=mb(f,u.global)),__VUE_I18N_FULL_INSTALL__&&rb(f,u,...d),__VUE_I18N_LEGACY_API__&&e&&f.mixin(JS(s,s.__composer,u));const g=f.unmount;f.unmount=()=>{p&&p(),u.dispose(),g()}},get global(){return s},dispose(){r.stop()},__instances:i,__getInstance:a,__setInstance:l,__deleteInstance:c};return u}function Qt(n={}){const e=ns();if(e==null)throw Nn(Rn.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw Nn(Rn.NOT_INSTALLED);const t=lb(e),i=ub(t),r=C_(e),s=cb(n,r);if(s==="global")return L_(i,n,r),i;if(s==="parent"){let l=fb(t,e,n.__useComponent);return l==null&&(l=i),l}const o=t;let a=o.__getInstance(e);if(a==null){const l=zt({},n);"__i18n"in r&&(l.__i18n=r.__i18n),i&&(l.__root=i),a=ud(l),o.__composerExtend&&(a[zu]=o.__composerExtend(a)),hb(o,e,a),o.__setInstance(e,a)}return a}function ab(n,e){const t=r0(),i=__VUE_I18N_LEGACY_API__&&e?t.run(()=>Gu(n)):t.run(()=>ud(n));if(i==null)throw Nn(Rn.UNEXPECTED_ERROR);return[t,i]}function lb(n){const e=Oo(n.isCE?sb:n.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw Nn(n.isCE?Rn.NOT_INSTALLED_WITH_PROVIDE:Rn.UNEXPECTED_ERROR);return e}function cb(n,e){return lc(n)?"__i18n"in e?"local":"global":n.useScope?n.useScope:"local"}function ub(n){return n.mode==="composition"?n.global:n.global.__composer}function fb(n,e,t=!1){let i=null;const r=e.root;let s=db(e,t);for(;s!=null;){const o=n;if(n.mode==="composition")i=o.__getInstance(s);else if(__VUE_I18N_LEGACY_API__){const a=o.__getInstance(s);a!=null&&(i=a.__composer,t&&i&&!i[R_]&&(i=null))}if(i!=null||r===s)break;s=s.parent}return i}function db(n,e=!1){return n==null?null:e&&n.vnode.ctx||n.parent}function hb(n,e,t){Cn(()=>{},e),di(()=>{const i=t;n.__deleteInstance(e);const r=i[zu];r&&(r(),delete i[zu])},e)}const pb=["locale","fallbackLocale","availableLocales"],cp=["t","rt","d","n","tm","te"];function mb(n,e){const t=Object.create(null);return pb.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s)throw Nn(Rn.UNEXPECTED_ERROR);const o=Zt(s.value)?{get(){return s.value.value},set(a){s.value.value=a}}:{get(){return s.get&&s.get()}};Object.defineProperty(t,r,o)}),n.config.globalProperties.$i18n=t,cp.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s||!s.value)throw Nn(Rn.UNEXPECTED_ERROR);Object.defineProperty(n.config.globalProperties,`$${r}`,s)}),()=>{delete n.config.globalProperties.$i18n,cp.forEach(r=>{delete n.config.globalProperties[`$${r}`]})}}const gb=vt({name:"i18n-d",props:zt({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},fd),setup(n,e){const t=n.i18n||Qt({useScope:n.scope,__useComponent:!0});return I_(n,e,M_,(...i)=>t[Hu](...i))}}),up=gb;$S();TS(oS);AS(bS);wS(__);if(__INTLIFY_PROD_DEVTOOLS__){const n=Kr();n.__INTLIFY__=!0,aS(n.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const _b={id:"lang"},fp=vt({__name:"LangSelection",setup(n){const{locale:e}=Qt();function t(r){e.value=r,i.value=!1}const i=Ze(!1);return(r,s)=>(_e(),Be("div",_b,[i.value?Xt("",!0):(_e(),Bt(Qi,{key:0,content:"language",onClick:s[0]||(s[0]=o=>i.value=!i.value),disable:!1,class:"btn"})),i.value?(_e(),Be("div",{key:1,class:mn({slideIn:i.value})},[ze(Qi,{content:"en",onClick:s[1]||(s[1]=o=>t("en")),disable:!1,class:"btn"}),ze(Qi,{content:"fr",onClick:s[2]||(s[2]=o=>t("fr")),disable:!1,class:"btn"})],2)):Xt("",!0)]))}}),vb={id:"navbar"},xb={id:"progress",class:"column"},yb=vt({__name:"NavBar",props:{canMoveForward:{type:Boolean},canMoveBackward:{type:Boolean}},emits:["moved"],setup(n,{expose:e,emit:t}){const i=t,r=Ze(0);function s(c){r.value=c}e({setNavIdx:s}),Cn(()=>{document.addEventListener("wheel",c=>{const u=c.deltaY<0?1:-1;r.value+=u,i("moved",r.value),c.preventDefault()},{passive:!1})});const o=Ze(!1),a=Ze(window.innerWidth<700),l=()=>a.value=window.innerWidth<700;return window.addEventListener("resize",l),di(()=>window.removeEventListener("resize",l)),(c,u)=>(_e(),Be("div",vb,[!a.value||o.value?(_e(),Bt(gy,{key:0,onClickedOutside:u[0]||(u[0]=()=>{a.value&&o.value&&(o.value=!1)})})):Xt("",!0),a.value&&!o.value?(_e(),Bt(Qi,{key:1,content:"account_circle",disable:!1,onClick:u[1]||(u[1]=ly(f=>o.value=!0,["stop"])),id:"profile-btn"})):Xt("",!0),a.value?Xt("",!0):(_e(),Bt(fp,{key:2})),ie("div",xb,[ze(Qi,{disable:!n.canMoveForward,content:"arrow_drop_up",onClick:u[2]||(u[2]=()=>{r.value++,i("moved",r.value)})},null,8,["disable"]),ze(Qi,{disable:!n.canMoveBackward,content:"arrow_drop_down",onClick:u[3]||(u[3]=()=>{r.value--,i("moved",r.value)})},null,8,["disable"])]),a.value?(_e(),Bt(fp,{key:3})):Xt("",!0)]))}}),On=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Sb=On(yb,[["__scopeId","data-v-bdb0b539"]]),dp=1e3;function bb(){const n=Ze(0);function e(o){n.value+=o==="f"?1:-1,n.value=Math.max(0,n.value)}function t(o){var l;const a=((l=document.querySelector(".scene"))==null?void 0:l.childElementCount)||0;n.value=o,n.value=Math.min(Math.max(0,n.value),a)}window.addEventListener("popstate",o=>{o.state&&typeof o.state.page=="number"&&(n.value=o.state.page)});function i(o){const a=(o-n.value)*dp,l=1-a/(dp*2),c=.1;let u=1;const f=-100;if(a<f){const d=f-a;u=Math.max(0,1-d/100)}else a>500&&(u=Math.max(0,1-(a-500)/200));return{transform:`
                translate(-50%, -50%)
                translateY(${-a*c}px)
                translateZ(${-a}px)
                scale(${l})
            `,opacity:u,zIndex:o}}function r(o){var c;const a=((c=document.querySelector(".scene"))==null?void 0:c.childElementCount)||0,l=n.value+(o==="f"?1:-1);return l>=0&&l<a-1}function s(o){var l;const a=((l=document.querySelector(".scene"))==null?void 0:l.childElementCount)||0;return o>=0&&o<a-1}return{scrollPosition:n,canScroll:r,canScrollTo:s,moveOneSlide:e,moveToSlide:t,getStyle:i}}const Mb={class:"scene"},Eb=vt({__name:"DepthListComponent",setup(n,{expose:e}){const{getStyle:t,moveOneSlide:i,moveToSlide:r,canScroll:s,canScrollTo:o}=bb();return e({moveToSlide:r,moveOneSlide:i,canScroll:s,canScrollTo:o}),(a,l)=>{var c,u;return _e(),Be("div",Mb,[(_e(!0),Be(Mt,null,En(((u=(c=a.$slots).default)==null?void 0:u.call(c))??[],(f,d)=>(_e(),Be("div",{class:"layer",key:d,style:Ji(me(t)(d))},[(_e(),Bt(ha(f)))],4))),128))])}}}),Tb=On(Eb,[["__scopeId","data-v-97e8f874"]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dd="177",Ab=0,hp=1,wb=2,D_=1,Rb=2,zi=3,sr=0,Tn=1,ii=2,br=0,Fs=1,pp=2,mp=3,gp=4,Cb=5,$r=100,Lb=101,Pb=102,Ib=103,Db=104,Nb=200,Ub=201,Ob=202,Fb=203,Wu=204,ju=205,Bb=206,kb=207,Hb=208,Vb=209,zb=210,Gb=211,Wb=212,jb=213,Xb=214,Xu=0,$u=1,qu=2,Ws=3,Yu=4,Ku=5,Ju=6,Zu=7,N_=0,$b=1,qb=2,Mr=0,Yb=1,Kb=2,Jb=3,Zb=4,Qb=5,eM=6,tM=7,_p="attached",nM="detached",U_=300,js=301,Xs=302,Qu=303,ef=304,fc=306,qn=1e3,yi=1001,Vl=1002,gn=1003,O_=1004,Ro=1005,Vt=1006,ml=1007,Yi=1008,wi=1009,F_=1010,B_=1011,ea=1012,hd=1013,is=1014,ai=1015,ga=1016,pd=1017,md=1018,ta=1020,k_=35902,H_=1021,V_=1022,Wn=1023,na=1026,ia=1027,gd=1028,_d=1029,z_=1030,vd=1031,xd=1033,gl=33776,_l=33777,vl=33778,xl=33779,tf=35840,nf=35841,rf=35842,sf=35843,of=36196,af=37492,lf=37496,cf=37808,uf=37809,ff=37810,df=37811,hf=37812,pf=37813,mf=37814,gf=37815,_f=37816,vf=37817,xf=37818,yf=37819,Sf=37820,bf=37821,yl=36492,Mf=36494,Ef=36495,G_=36283,Tf=36284,Af=36285,wf=36286,ra=2300,sa=2301,Lc=2302,vp=2400,xp=2401,yp=2402,iM=2500,rM=0,W_=1,Rf=2,sM=3200,oM=3201,j_=0,aM=1,xr="",Yt="srgb",xn="srgb-linear",zl="linear",Et="srgb",cs=7680,Sp=519,lM=512,cM=513,uM=514,X_=515,fM=516,dM=517,hM=518,pM=519,Cf=35044,bp="300 es",Ki=2e3,Gl=2001;class no{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mp=1234567;const Bo=Math.PI/180,$s=180/Math.PI;function ci(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function rt(n,e,t){return Math.max(e,Math.min(t,n))}function yd(n,e){return(n%e+e)%e}function mM(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function gM(n,e,t){return n!==e?(t-n)/(e-n):0}function ko(n,e,t){return(1-t)*n+t*e}function _M(n,e,t,i){return ko(n,e,1-Math.exp(-t*i))}function vM(n,e=1){return e-Math.abs(yd(n,e*2)-e)}function xM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function yM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function SM(n,e){return n+Math.floor(Math.random()*(e-n+1))}function bM(n,e){return n+Math.random()*(e-n)}function MM(n){return n*(.5-Math.random())}function EM(n){n!==void 0&&(Mp=n);let e=Mp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function TM(n){return n*Bo}function AM(n){return n*$s}function wM(n){return(n&n-1)===0&&n!==0}function RM(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function CM(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function LM(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*f,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ri(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function St(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Sl={DEG2RAD:Bo,RAD2DEG:$s,generateUUID:ci,clamp:rt,euclideanModulo:yd,mapLinear:mM,inverseLerp:gM,lerp:ko,damp:_M,pingpong:vM,smoothstep:xM,smootherstep:yM,randInt:SM,randFloat:bM,randFloatSpread:MM,seededRandom:EM,degToRad:TM,radToDeg:AM,isPowerOfTwo:wM,ceilPowerOfTwo:RM,floorPowerOfTwo:CM,setQuaternionFromProperEuler:LM,normalize:St,denormalize:ri};class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Rr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==d||c!==p||u!==g){let m=1-a;const h=l*d+c*p+u*g+f*v,S=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const A=Math.sqrt(y),C=Math.atan2(A,h*S);m=Math.sin(m*C)/A,a=Math.sin(a*C)/A}const _=a*S;if(l=l*m+d*_,c=c*m+p*_,u=u*m+g*_,f=f*m+v*_,m===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*p-c*d,e[t+1]=l*g+u*d+c*f-a*p,e[t+2]=c*g+u*p+a*d-l*f,e[t+3]=u*g-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"YZX":this._x=d*u*f+c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f-d*p*g;break;case"XZY":this._x=d*u*f-c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ep.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ep.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Pc.copy(this).projectOnVector(e),this.sub(Pc)}reflect(e){return this.sub(Pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pc=new z,Ep=new Rr;class et{constructor(e,t,i,r,s,o,a,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],v=r[0],m=r[3],h=r[6],S=r[1],y=r[4],_=r[7],A=r[2],C=r[5],T=r[8];return s[0]=o*v+a*S+l*A,s[3]=o*m+a*y+l*C,s[6]=o*h+a*_+l*T,s[1]=c*v+u*S+f*A,s[4]=c*m+u*y+f*C,s[7]=c*h+u*_+f*T,s[2]=d*v+p*S+g*A,s[5]=d*m+p*y+g*C,s[8]=d*h+p*_+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,g=t*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ic.makeScale(e,t)),this}rotate(e){return this.premultiply(Ic.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ic.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ic=new et;function $_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function oa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function PM(){const n=oa("canvas");return n.style.display="block",n}const Tp={};function Bs(n){n in Tp||(Tp[n]=!0,console.warn(n))}function IM(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function DM(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function NM(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ap=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wp=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function UM(){const n={enabled:!0,workingColorSpace:xn,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Et&&(r.r=er(r.r),r.g=er(r.g),r.b=er(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Et&&(r.r=ks(r.r),r.g=ks(r.g),r.b=ks(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===xr?zl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Bs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Bs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[xn]:{primaries:e,whitePoint:i,transfer:zl,toXYZ:Ap,fromXYZ:wp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:i,transfer:Et,toXYZ:Ap,fromXYZ:wp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),n}const lt=UM();function er(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ks(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let us;class OM{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{us===void 0&&(us=oa("canvas")),us.width=e.width,us.height=e.height;const r=us.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=us}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=oa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=er(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(er(t[i]/255)*255):t[i]=er(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let FM=0;class Sd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:FM++}),this.uuid=ci(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Dc(r[o].image)):s.push(Dc(r[o]))}else s=Dc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Dc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?OM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let BM=0;const Nc=new z;class $t extends no{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,i=yi,r=yi,s=Vt,o=Yi,a=Wn,l=wi,c=$t.DEFAULT_ANISOTROPY,u=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BM++}),this.uuid=ci(),this.name="",this.source=new Sd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Nc).x}get height(){return this.source.getSize(Nc).y}get depth(){return this.source.getSize(Nc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==U_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qn:e.x=e.x-Math.floor(e.x);break;case yi:e.x=e.x<0?0:1;break;case Vl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qn:e.y=e.y-Math.floor(e.y);break;case yi:e.y=e.y<0?0:1;break;case Vl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=U_;$t.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,i=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,_=(p+1)/2,A=(h+1)/2,C=(u+d)/4,T=(f+v)/4,N=(g+m)/4;return y>_&&y>A?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=C/i,s=T/i):_>A?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=C/r,s=N/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=T/s,r=N/s),this.set(i,r,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-v)/S,this.z=(d-u)/S,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kM extends no{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new $t(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Sd(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rs extends kM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class q_ extends $t{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class HM extends $t{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cr{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qn):Qn.fromBufferAttribute(s,o),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ia.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ia.copy(i.boundingBox)),Ia.applyMatrix4(e.matrixWorld),this.union(Ia)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(po),Da.subVectors(this.max,po),fs.subVectors(e.a,po),ds.subVectors(e.b,po),hs.subVectors(e.c,po),ur.subVectors(ds,fs),fr.subVectors(hs,ds),Nr.subVectors(fs,hs);let t=[0,-ur.z,ur.y,0,-fr.z,fr.y,0,-Nr.z,Nr.y,ur.z,0,-ur.x,fr.z,0,-fr.x,Nr.z,0,-Nr.x,-ur.y,ur.x,0,-fr.y,fr.x,0,-Nr.y,Nr.x,0];return!Uc(t,fs,ds,hs,Da)||(t=[1,0,0,0,1,0,0,0,1],!Uc(t,fs,ds,hs,Da))?!1:(Na.crossVectors(ur,fr),t=[Na.x,Na.y,Na.z],Uc(t,fs,ds,hs,Da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Oi=[new z,new z,new z,new z,new z,new z,new z,new z],Qn=new z,Ia=new cr,fs=new z,ds=new z,hs=new z,ur=new z,fr=new z,Nr=new z,po=new z,Da=new z,Na=new z,Ur=new z;function Uc(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ur.fromArray(n,s);const a=r.x*Math.abs(Ur.x)+r.y*Math.abs(Ur.y)+r.z*Math.abs(Ur.z),l=e.dot(Ur),c=t.dot(Ur),u=i.dot(Ur);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const VM=new cr,mo=new z,Oc=new z;class Li{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):VM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mo.subVectors(e,this.center);const t=mo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(mo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mo.copy(e.center).add(Oc)),this.expandByPoint(mo.copy(e.center).sub(Oc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Fi=new z,Fc=new z,Ua=new z,dr=new z,Bc=new z,Oa=new z,kc=new z;class dc{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Fc.copy(e).add(t).multiplyScalar(.5),Ua.copy(t).sub(e).normalize(),dr.copy(this.origin).sub(Fc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ua),a=dr.dot(this.direction),l=-dr.dot(Ua),c=dr.lengthSq(),u=Math.abs(1-o*o);let f,d,p,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const v=1/u;f*=v,d*=v,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Fc).addScaledVector(Ua,d),p}intersectSphere(e,t){Fi.subVectors(e.center,this.origin);const i=Fi.dot(this.direction),r=Fi.dot(Fi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,i,r,s){Bc.subVectors(t,e),Oa.subVectors(i,e),kc.crossVectors(Bc,Oa);let o=this.direction.dot(kc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;dr.subVectors(this.origin,e);const l=a*this.direction.dot(Oa.crossVectors(dr,Oa));if(l<0)return null;const c=a*this.direction.dot(Bc.cross(dr));if(c<0||l+c>o)return null;const u=-a*dr.dot(kc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,t,i,r,s,o,a,l,c,u,f,d,p,g,v,m){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,d,p,g,v,m)}set(e,t,i,r,s,o,a,l,c,u,f,d,p,g,v,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ps.setFromMatrixColumn(e,0).length(),s=1/ps.setFromMatrixColumn(e,1).length(),o=1/ps.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,g=c*u,v=c*f;t[0]=d+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,g=c*u,v=c*f;t[0]=d-v*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+v,t[1]=l*f,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-d*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+g,t[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+v,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zM,e,GM)}lookAt(e,t,i){const r=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),hr.crossVectors(i,Pn),hr.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),hr.crossVectors(i,Pn)),hr.normalize(),Fa.crossVectors(Pn,hr),r[0]=hr.x,r[4]=Fa.x,r[8]=Pn.x,r[1]=hr.y,r[5]=Fa.y,r[9]=Pn.y,r[2]=hr.z,r[6]=Fa.z,r[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],h=i[14],S=i[3],y=i[7],_=i[11],A=i[15],C=r[0],T=r[4],N=r[8],M=r[12],b=r[1],D=r[5],W=r[9],F=r[13],k=r[2],K=r[6],G=r[10],Z=r[14],$=r[3],ce=r[7],ve=r[11],Te=r[15];return s[0]=o*C+a*b+l*k+c*$,s[4]=o*T+a*D+l*K+c*ce,s[8]=o*N+a*W+l*G+c*ve,s[12]=o*M+a*F+l*Z+c*Te,s[1]=u*C+f*b+d*k+p*$,s[5]=u*T+f*D+d*K+p*ce,s[9]=u*N+f*W+d*G+p*ve,s[13]=u*M+f*F+d*Z+p*Te,s[2]=g*C+v*b+m*k+h*$,s[6]=g*T+v*D+m*K+h*ce,s[10]=g*N+v*W+m*G+h*ve,s[14]=g*M+v*F+m*Z+h*Te,s[3]=S*C+y*b+_*k+A*$,s[7]=S*T+y*D+_*K+A*ce,s[11]=S*N+y*W+_*G+A*ve,s[15]=S*M+y*F+_*Z+A*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],h=e[15];return g*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+v*(+t*l*p-t*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+t*c*f-t*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-t*l*f+t*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],h=e[15],S=f*m*c-v*d*c+v*l*p-a*m*p-f*l*h+a*d*h,y=g*d*c-u*m*c-g*l*p+o*m*p+u*l*h-o*d*h,_=u*v*c-g*f*c+g*a*p-o*v*p-u*a*h+o*f*h,A=g*f*l-u*v*l-g*a*d+o*v*d+u*a*m-o*f*m,C=t*S+i*y+r*_+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=S*T,e[1]=(v*d*s-f*m*s-v*r*p+i*m*p+f*r*h-i*d*h)*T,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*h+i*l*h)*T,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*T,e[4]=y*T,e[5]=(u*m*s-g*d*s+g*r*p-t*m*p-u*r*h+t*d*h)*T,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*h-t*l*h)*T,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*p+t*l*p)*T,e[8]=_*T,e[9]=(g*f*s-u*v*s-g*i*p+t*v*p+u*i*h-t*f*h)*T,e[10]=(o*v*s-g*a*s+g*i*c-t*v*c-o*i*h+t*a*h)*T,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*p-t*a*p)*T,e[12]=A*T,e[13]=(u*v*r-g*f*r+g*i*d-t*v*d-u*i*m+t*f*m)*T,e[14]=(g*a*r-o*v*r-g*i*l+t*v*l+o*i*m-t*a*m)*T,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*d+t*a*d)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,g=s*f,v=o*u,m=o*f,h=a*f,S=l*c,y=l*u,_=l*f,A=i.x,C=i.y,T=i.z;return r[0]=(1-(v+h))*A,r[1]=(p+_)*A,r[2]=(g-y)*A,r[3]=0,r[4]=(p-_)*C,r[5]=(1-(d+h))*C,r[6]=(m+S)*C,r[7]=0,r[8]=(g+y)*T,r[9]=(m-S)*T,r[10]=(1-(d+v))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ps.set(r[0],r[1],r[2]).length();const o=ps.set(r[4],r[5],r[6]).length(),a=ps.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ei.copy(this);const c=1/s,u=1/o,f=1/a;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=u,ei.elements[5]*=u,ei.elements[6]*=u,ei.elements[8]*=f,ei.elements[9]*=f,ei.elements[10]*=f,t.setFromRotationMatrix(ei),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Ki){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let p,g;if(a===Ki)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Gl)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Ki){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),d=(t+e)*c,p=(i+r)*u;let g,v;if(a===Ki)g=(o+s)*f,v=-2*f;else if(a===Gl)g=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ps=new z,ei=new Qe,zM=new z(0,0,0),GM=new z(1,1,1),hr=new z,Fa=new z,Pn=new z,Rp=new Qe,Cp=new Rr;class fi{constructor(e=0,t=0,i=0,r=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Rp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cp.setFromEuler(this),this.setFromQuaternion(Cp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class Y_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let WM=0;const Lp=new z,ms=new Rr,Bi=new Qe,Ba=new z,go=new z,jM=new z,XM=new Rr,Pp=new z(1,0,0),Ip=new z(0,1,0),Dp=new z(0,0,1),Np={type:"added"},$M={type:"removed"},gs={type:"childadded",child:null},Hc={type:"childremoved",child:null};class Nt extends no{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WM++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new z,t=new fi,i=new Rr,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qe},normalMatrix:{value:new et}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Y_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(Pp,e)}rotateY(e){return this.rotateOnAxis(Ip,e)}rotateZ(e){return this.rotateOnAxis(Dp,e)}translateOnAxis(e,t){return Lp.copy(e).applyQuaternion(this.quaternion),this.position.add(Lp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pp,e)}translateY(e){return this.translateOnAxis(Ip,e)}translateZ(e){return this.translateOnAxis(Dp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ba.copy(e):Ba.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(go,Ba,this.up):Bi.lookAt(Ba,go,this.up),this.quaternion.setFromRotationMatrix(Bi),r&&(Bi.extractRotation(r.matrixWorld),ms.setFromRotationMatrix(Bi),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Np),gs.child=e,this.dispatchEvent(gs),gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($M),Hc.child=e,this.dispatchEvent(Hc),Hc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Np),gs.child=e,this.dispatchEvent(gs),gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,e,jM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,XM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Nt.DEFAULT_UP=new z(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new z,ki=new z,Vc=new z,Hi=new z,_s=new z,vs=new z,Up=new z,zc=new z,Gc=new z,Wc=new z,jc=new dt,Xc=new dt,$c=new dt;class si{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ti.subVectors(e,t),r.cross(ti);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ti.subVectors(r,t),ki.subVectors(i,t),Vc.subVectors(e,t);const o=ti.dot(ti),a=ti.dot(ki),l=ti.dot(Vc),c=ki.dot(ki),u=ki.dot(Vc),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Hi.x),l.addScaledVector(o,Hi.y),l.addScaledVector(a,Hi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return jc.setScalar(0),Xc.setScalar(0),$c.setScalar(0),jc.fromBufferAttribute(e,t),Xc.fromBufferAttribute(e,i),$c.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(jc,s.x),o.addScaledVector(Xc,s.y),o.addScaledVector($c,s.z),o}static isFrontFacing(e,t,i,r){return ti.subVectors(i,t),ki.subVectors(e,t),ti.cross(ki).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),ti.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return si.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;_s.subVectors(r,i),vs.subVectors(s,i),zc.subVectors(e,i);const l=_s.dot(zc),c=vs.dot(zc);if(l<=0&&c<=0)return t.copy(i);Gc.subVectors(e,r);const u=_s.dot(Gc),f=vs.dot(Gc);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(_s,o);Wc.subVectors(e,s);const p=_s.dot(Wc),g=vs.dot(Wc);if(g>=0&&p<=g)return t.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(vs,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Up.subVectors(s,r),a=(f-u)/(f-u+(p-g)),t.copy(r).addScaledVector(Up,a);const h=1/(m+v+d);return o=v*h,a=d*h,t.copy(i).addScaledVector(_s,o).addScaledVector(vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const K_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},ka={h:0,s:0,l:0};function qc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=lt.workingColorSpace){if(e=yd(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=qc(o,s,e+1/3),this.g=qc(o,s,e),this.b=qc(o,s,e-1/3)}return lt.colorSpaceToWorking(this,r),this}setStyle(e,t=Yt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const i=K_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return lt.workingToColorSpace(nn.copy(this),e),Math.round(rt(nn.r*255,0,255))*65536+Math.round(rt(nn.g*255,0,255))*256+Math.round(rt(nn.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(nn.copy(this),t);const i=nn.r,r=nn.g,s=nn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Yt){lt.workingToColorSpace(nn.copy(this),e);const t=nn.r,i=nn.g,r=nn.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+t,pr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(pr),e.getHSL(ka);const i=ko(pr.h,ka.h,t),r=ko(pr.s,ka.s,t),s=ko(pr.l,ka.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new qe;qe.NAMES=K_;let qM=0;class Mi extends no{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qM++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=Fs,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wu,this.blendDst=ju,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(i.blending=this.blending),this.side!==sr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wu&&(i.blendSrc=this.blendSrc),this.blendDst!==ju&&(i.blendDst=this.blendDst),this.blendEquation!==$r&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Jr extends Mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=N_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kt=new z,Ha=new Ge;let YM=0;class _n{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:YM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Cf,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ha.fromBufferAttribute(this,t),Ha.applyMatrix3(e),this.setXY(t,Ha.x,Ha.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ri(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=St(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array),r=St(r,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cf&&(e.usage=this.usage),e}}class J_ extends _n{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Z_ extends _n{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class vn extends _n{constructor(e,t,i){super(new Float32Array(e),t,i)}}let KM=0;const Hn=new Qe,Yc=new Nt,xs=new z,In=new cr,_o=new cr,jt=new z;class Fn extends no{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($_(e)?Z_:J_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new et().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,i){return Hn.makeTranslation(e,t,i),this.applyMatrix4(Hn),this}scale(e,t,i){return Hn.makeScale(e,t,i),this.applyMatrix4(Hn),this}lookAt(e){return Yc.lookAt(e),Yc.updateMatrix(),this.applyMatrix4(Yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new vn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];In.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];_o.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(In.min,_o.min),In.expandByPoint(jt),jt.addVectors(In.max,_o.max),In.expandByPoint(jt)):(In.expandByPoint(_o.min),In.expandByPoint(_o.max))}In.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(jt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)jt.fromBufferAttribute(a,c),l&&(xs.fromBufferAttribute(e,c),jt.add(xs)),r=Math.max(r,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new z,l[N]=new z;const c=new z,u=new z,f=new z,d=new Ge,p=new Ge,g=new Ge,v=new z,m=new z;function h(N,M,b){c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,b),d.fromBufferAttribute(s,N),p.fromBufferAttribute(s,M),g.fromBufferAttribute(s,b),u.sub(c),f.sub(c),p.sub(d),g.sub(d);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(D),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(D),a[N].add(v),a[M].add(v),a[b].add(v),l[N].add(m),l[M].add(m),l[b].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let N=0,M=S.length;N<M;++N){const b=S[N],D=b.start,W=b.count;for(let F=D,k=D+W;F<k;F+=3)h(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const y=new z,_=new z,A=new z,C=new z;function T(N){A.fromBufferAttribute(r,N),C.copy(A);const M=a[N];y.copy(M),y.sub(A.multiplyScalar(A.dot(M))).normalize(),_.crossVectors(C,M);const D=_.dot(l[N])<0?-1:1;o.setXYZW(N,y.x,y.y,y.z,D)}for(let N=0,M=S.length;N<M;++N){const b=S[N],D=b.start,W=b.count;for(let F=D,k=D+W;F<k;F+=3)T(e.getX(F+0)),T(e.getX(F+1)),T(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _n(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let h=0;h<u;h++)d[g++]=c[p++]}return new _n(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Fn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Op=new Qe,Or=new dc,Va=new Li,Fp=new z,za=new z,Ga=new z,Wa=new z,Kc=new z,ja=new z,Bp=new z,Xa=new z;class Mn extends Nt{constructor(e=new Fn,t=new Jr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ja.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Kc.fromBufferAttribute(f,e),o?ja.addScaledVector(Kc,u):ja.addScaledVector(Kc.sub(t),u))}t.add(ja)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Va.copy(i.boundingSphere),Va.applyMatrix4(s),Or.copy(e.ray).recast(e.near),!(Va.containsPoint(Or.origin)===!1&&(Or.intersectSphere(Va,Fp)===null||Or.origin.distanceToSquared(Fp)>(e.far-e.near)**2))&&(Op.copy(s).invert(),Or.copy(e.ray).applyMatrix4(Op),!(i.boundingBox!==null&&Or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Or)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],h=o[m.materialIndex],S=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=S,A=y;_<A;_+=3){const C=a.getX(_),T=a.getX(_+1),N=a.getX(_+2);r=$a(this,h,e,i,c,u,f,C,T,N),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const S=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);r=$a(this,o,e,i,c,u,f,S,y,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],h=o[m.materialIndex],S=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=S,A=y;_<A;_+=3){const C=_,T=_+1,N=_+2;r=$a(this,h,e,i,c,u,f,C,T,N),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const S=m,y=m+1,_=m+2;r=$a(this,o,e,i,c,u,f,S,y,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function JM(n,e,t,i,r,s,o,a){let l;if(e.side===Tn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===sr,a),l===null)return null;Xa.copy(a),Xa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Xa);return c<t.near||c>t.far?null:{distance:c,point:Xa.clone(),object:n}}function $a(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,za),n.getVertexPosition(l,Ga),n.getVertexPosition(c,Wa);const u=JM(n,e,t,i,za,Ga,Wa,Bp);if(u){const f=new z;si.getBarycoord(Bp,za,Ga,Wa,f),r&&(u.uv=si.getInterpolatedAttribute(r,a,l,c,f,new Ge)),s&&(u.uv1=si.getInterpolatedAttribute(s,a,l,c,f,new Ge)),o&&(u.normal=si.getInterpolatedAttribute(o,a,l,c,f,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new z,materialIndex:0};si.getNormal(za,Ga,Wa,d.normal),u.face=d,u.barycoord=f}return u}class _a extends Fn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new vn(c,3)),this.setAttribute("normal",new vn(u,3)),this.setAttribute("uv",new vn(f,2));function g(v,m,h,S,y,_,A,C,T,N,M){const b=_/T,D=A/N,W=_/2,F=A/2,k=C/2,K=T+1,G=N+1;let Z=0,$=0;const ce=new z;for(let ve=0;ve<G;ve++){const Te=ve*D-F;for(let ke=0;ke<K;ke++){const it=ke*b-W;ce[v]=it*S,ce[m]=Te*y,ce[h]=k,c.push(ce.x,ce.y,ce.z),ce[v]=0,ce[m]=0,ce[h]=C>0?1:-1,u.push(ce.x,ce.y,ce.z),f.push(ke/T),f.push(1-ve/N),Z+=1}}for(let ve=0;ve<N;ve++)for(let Te=0;Te<T;Te++){const ke=d+Te+K*ve,it=d+Te+K*(ve+1),re=d+(Te+1)+K*(ve+1),de=d+(Te+1)+K*ve;l.push(ke,it,de),l.push(it,re,de),$+=6}a.addGroup(p,$,M),p+=$,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function dn(n){const e={};for(let t=0;t<n.length;t++){const i=qs(n[t]);for(const r in i)e[r]=i[r]}return e}function ZM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Q_(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const QM={clone:qs,merge:dn};var eE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends Mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eE,this.fragmentShader=tE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=ZM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ev extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mr=new z,kp=new Ge,Hp=new Ge;class on extends ev{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$s*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $s*2*Math.atan(Math.tan(Bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,t){return this.getViewBounds(e,kp,Hp),t.subVectors(Hp,kp)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ys=-90,Ss=1;class nE extends Nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new on(ys,Ss,e,t);r.layers=this.layers,this.add(r);const s=new on(ys,Ss,e,t);s.layers=this.layers,this.add(s);const o=new on(ys,Ss,e,t);o.layers=this.layers,this.add(o);const a=new on(ys,Ss,e,t);a.layers=this.layers,this.add(a);const l=new on(ys,Ss,e,t);l.layers=this.layers,this.add(l);const c=new on(ys,Ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ki)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class tv extends $t{constructor(e=[],t=js,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class iE extends rs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new tv(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new _a(5,5,5),s=new Ri({name:"CubemapFromEquirect",uniforms:qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:br});s.uniforms.tEquirect.value=t;const o=new Mn(r,s),a=t.minFilter;return t.minFilter===Yi&&(t.minFilter=Vt),new nE(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Zr extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rE={type:"move"};class Jc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Zr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class nv extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class sE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Cf,this.updateRanges=[],this.version=0,this.uuid=ci()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const un=new z;class bd{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ri(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=St(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ri(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),i=St(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),i=St(i,this.array),r=St(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),i=St(i,this.array),r=St(r,this.array),s=St(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new _n(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new bd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Vp=new z,zp=new dt,Gp=new dt,oE=new z,Wp=new Qe,qa=new z,Zc=new Li,jp=new Qe,Qc=new dc;class aE extends Mn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=_p,this.bindMatrix=new Qe,this.bindMatrixInverse=new Qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new cr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,qa),this.boundingBox.expandByPoint(qa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Li),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,qa),this.boundingSphere.expandByPoint(qa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zc.copy(this.boundingSphere),Zc.applyMatrix4(r),e.ray.intersectsSphere(Zc)!==!1&&(jp.copy(r).invert(),Qc.copy(e.ray).applyMatrix4(jp),!(this.boundingBox!==null&&Qc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Qc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new dt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===_p?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===nM?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;zp.fromBufferAttribute(r.attributes.skinIndex,e),Gp.fromBufferAttribute(r.attributes.skinWeight,e),Vp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Gp.getComponent(s);if(o!==0){const a=zp.getComponent(s);Wp.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(oE.copy(Vp).applyMatrix4(Wp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class iv extends Nt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Md extends $t{constructor(e=null,t=1,i=1,r,s,o,a,l,c=gn,u=gn,f,d){super(null,o,a,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xp=new Qe,lE=new Qe;class Ed{constructor(e=[],t=[]){this.uuid=ci(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Qe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:lE;Xp.multiplyMatrices(a,t[s]),Xp.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Ed(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Md(t,e,e,Wn,ai);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new iv),this.bones.push(o),this.boneInverses.push(new Qe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class aa extends _n{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const bs=new Qe,$p=new Qe,Ya=[],qp=new cr,cE=new Qe,vo=new Mn,xo=new Li;class Td extends Mn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new aa(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,cE)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new cr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,bs),qp.copy(e.boundingBox).applyMatrix4(bs),this.boundingBox.union(qp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Li),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,bs),xo.copy(e.boundingSphere).applyMatrix4(bs),this.boundingSphere.union(xo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(vo.geometry=this.geometry,vo.material=this.material,vo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xo.copy(this.boundingSphere),xo.applyMatrix4(i),e.ray.intersectsSphere(xo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,bs),$p.multiplyMatrices(i,bs),vo.matrixWorld=$p,vo.raycast(e,Ya);for(let o=0,a=Ya.length;o<a;o++){const l=Ya[o];l.instanceId=s,l.object=this,t.push(l)}Ya.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new aa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Md(new Float32Array(r*this.count),r,this.count,gd,ai));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const eu=new z,uE=new z,fE=new et;class zr{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=eu.subVectors(i,t).cross(uE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(eu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||fE.getNormalMatrix(e),r=this.coplanarPoint(eu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fr=new Li,Ka=new z;class Ad{constructor(e=new zr,t=new zr,i=new zr,r=new zr,s=new zr,o=new zr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ki){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],g=r[9],v=r[10],m=r[11],h=r[12],S=r[13],y=r[14],_=r[15];if(i[0].setComponents(l-s,d-c,m-p,_-h).normalize(),i[1].setComponents(l+s,d+c,m+p,_+h).normalize(),i[2].setComponents(l+o,d+u,m+g,_+S).normalize(),i[3].setComponents(l-o,d-u,m-g,_-S).normalize(),i[4].setComponents(l-a,d-f,m-v,_-y).normalize(),t===Ki)i[5].setComponents(l+a,d+f,m+v,_+y).normalize();else if(t===Gl)i[5].setComponents(a,f,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(e){return Fr.center.set(0,0,0),Fr.radius=.7071067811865476,Fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ka.x=r.normal.x>0?e.max.x:e.min.x,Ka.y=r.normal.y>0?e.max.y:e.min.y,Ka.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ka)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rv extends Mi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wl=new z,jl=new z,Yp=new Qe,yo=new dc,Ja=new Li,tu=new z,Kp=new z;class wd extends Nt{constructor(e=new Fn,t=new rv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Wl.fromBufferAttribute(t,r-1),jl.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Wl.distanceTo(jl);e.setAttribute("lineDistance",new vn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(r),Ja.radius+=s,e.ray.intersectsSphere(Ja)===!1)return;Yp.copy(r).invert(),yo.copy(e.ray).applyMatrix4(Yp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const h=u.getX(v),S=u.getX(v+1),y=Za(this,e,yo,l,h,S,v);y&&t.push(y)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(p),h=Za(this,e,yo,l,v,m,g-1);h&&t.push(h)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const h=Za(this,e,yo,l,v,v+1,v);h&&t.push(h)}if(this.isLineLoop){const v=Za(this,e,yo,l,g-1,p,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Za(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(Wl.fromBufferAttribute(a,r),jl.fromBufferAttribute(a,s),t.distanceSqToSegment(Wl,jl,tu,Kp)>i)return;tu.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(tu);if(!(c<e.near||c>e.far))return{distance:c,point:Kp.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Jp=new z,Zp=new z;class dE extends wd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Jp.fromBufferAttribute(t,r),Zp.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Jp.distanceTo(Zp);e.setAttribute("lineDistance",new vn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hE extends wd{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class sv extends Mi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Qp=new Qe,Lf=new dc,Qa=new Li,el=new z;class pE extends Nt{constructor(e=new Fn,t=new sv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qa.copy(i.boundingSphere),Qa.applyMatrix4(r),Qa.radius+=s,e.ray.intersectsSphere(Qa)===!1)return;Qp.copy(r).invert(),Lf.copy(e.ray).applyMatrix4(Qp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,v=p;g<v;g++){const m=c.getX(g);el.fromBufferAttribute(f,m),em(el,m,l,r,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=d,v=p;g<v;g++)el.fromBufferAttribute(f,g),em(el,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function em(n,e,t,i,r,s,o){const a=Lf.distanceSqToPoint(n);if(a<t){const l=new z;Lf.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ov extends $t{constructor(e,t,i=is,r,s,o,a=gn,l=gn,c,u=na,f=1){if(u!==na&&u!==ia)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Sd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Rd extends Fn{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],p=[];let g=0;const v=[],m=i/2;let h=0;S(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new vn(f,3)),this.setAttribute("normal",new vn(d,3)),this.setAttribute("uv",new vn(p,2));function S(){const _=new z,A=new z;let C=0;const T=(t-e)/i;for(let N=0;N<=s;N++){const M=[],b=N/s,D=b*(t-e)+e;for(let W=0;W<=r;W++){const F=W/r,k=F*l+a,K=Math.sin(k),G=Math.cos(k);A.x=D*K,A.y=-b*i+m,A.z=D*G,f.push(A.x,A.y,A.z),_.set(K,T,G).normalize(),d.push(_.x,_.y,_.z),p.push(F,1-b),M.push(g++)}v.push(M)}for(let N=0;N<r;N++)for(let M=0;M<s;M++){const b=v[M][N],D=v[M+1][N],W=v[M+1][N+1],F=v[M][N+1];(e>0||M!==0)&&(u.push(b,D,F),C+=3),(t>0||M!==s-1)&&(u.push(D,W,F),C+=3)}c.addGroup(h,C,0),h+=C}function y(_){const A=g,C=new Ge,T=new z;let N=0;const M=_===!0?e:t,b=_===!0?1:-1;for(let W=1;W<=r;W++)f.push(0,m*b,0),d.push(0,b,0),p.push(.5,.5),g++;const D=g;for(let W=0;W<=r;W++){const k=W/r*l+a,K=Math.cos(k),G=Math.sin(k);T.x=M*G,T.y=m*b,T.z=M*K,f.push(T.x,T.y,T.z),d.push(0,b,0),C.x=K*.5+.5,C.y=G*.5*b+.5,p.push(C.x,C.y),g++}for(let W=0;W<r;W++){const F=A+W,k=D+W;_===!0?u.push(k,k+1,F):u.push(k+1,k,F),N+=3}c.addGroup(h,N,_===!0?1:2),h+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rd(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class io extends Fn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=t/l,p=[],g=[],v=[],m=[];for(let h=0;h<u;h++){const S=h*d-o;for(let y=0;y<c;y++){const _=y*f-s;g.push(_,-S,0),v.push(0,0,1),m.push(y/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let S=0;S<a;S++){const y=S+c*h,_=S+c*(h+1),A=S+1+c*(h+1),C=S+1+c*h;p.push(y,_,C),p.push(_,A,C)}this.setIndex(p),this.setAttribute("position",new vn(g,3)),this.setAttribute("normal",new vn(v,3)),this.setAttribute("uv",new vn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xl extends Fn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new z,d=new z,p=[],g=[],v=[],m=[];for(let h=0;h<=i;h++){const S=[],y=h/i;let _=0;h===0&&o===0?_=.5/t:h===i&&l===Math.PI&&(_=-.5/t);for(let A=0;A<=t;A++){const C=A/t;f.x=-e*Math.cos(r+C*s)*Math.sin(o+y*a),f.y=e*Math.cos(o+y*a),f.z=e*Math.sin(r+C*s)*Math.sin(o+y*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(C+_,1-y),S.push(c++)}u.push(S)}for(let h=0;h<i;h++)for(let S=0;S<t;S++){const y=u[h][S+1],_=u[h][S],A=u[h+1][S],C=u[h+1][S+1];(h!==0||o>0)&&p.push(y,_,C),(h!==i-1||l<Math.PI)&&p.push(_,A,C)}this.setIndex(p),this.setAttribute("position",new vn(g,3)),this.setAttribute("normal",new vn(v,3)),this.setAttribute("uv",new vn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Cd extends Mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=j_,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pi extends Cd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class mE extends Mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gE extends Mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function tl(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function _E(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function vE(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function tm(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function av(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push(...o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class va{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class xE extends va{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vp,endingEnd:vp}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case xp:s=e,a=2*t-i;break;case yp:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case xp:o=e,l=2*i-t;break;case yp:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),v=g*g,m=v*g,h=-d*m+2*d*v-d*g,S=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,y=(-1-p)*m+(1.5+p)*v+.5*g,_=p*m-p*v;for(let A=0;A!==a;++A)s[A]=h*o[u+A]+S*o[c+A]+y*o[l+A]+_*o[f+A];return s}}class yE extends va{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),f=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*f+o[l+d]*u;return s}}class SE extends va{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class hi{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=tl(t,this.TimeBufferType),this.values=tl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:tl(e.times,Array),values:tl(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new SE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ra:t=this.InterpolantFactoryMethodDiscrete;break;case sa:t=this.InterpolantFactoryMethodLinear;break;case Lc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ra;case this.InterpolantFactoryMethodLinear:return sa;case this.InterpolantFactoryMethodSmooth:return Lc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&_E(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Lc,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const f=a*i,d=f-i,p=f+i;for(let g=0;g!==i;++g){const v=t[f+g];if(v!==t[d+g]||v!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*i,d=o*i;for(let p=0;p!==i;++p)t[d+p]=t[f+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}hi.prototype.ValueTypeName="";hi.prototype.TimeBufferType=Float32Array;hi.prototype.ValueBufferType=Float32Array;hi.prototype.DefaultInterpolation=sa;class ro extends hi{constructor(e,t,i){super(e,t,i)}}ro.prototype.ValueTypeName="bool";ro.prototype.ValueBufferType=Array;ro.prototype.DefaultInterpolation=ra;ro.prototype.InterpolantFactoryMethodLinear=void 0;ro.prototype.InterpolantFactoryMethodSmooth=void 0;class lv extends hi{constructor(e,t,i,r){super(e,t,i,r)}}lv.prototype.ValueTypeName="color";class Ys extends hi{constructor(e,t,i,r){super(e,t,i,r)}}Ys.prototype.ValueTypeName="number";class bE extends va{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Rr.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Ks extends hi{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new bE(this.times,this.values,this.getValueSize(),e)}}Ks.prototype.ValueTypeName="quaternion";Ks.prototype.InterpolantFactoryMethodSmooth=void 0;class so extends hi{constructor(e,t,i){super(e,t,i)}}so.prototype.ValueTypeName="string";so.prototype.ValueBufferType=Array;so.prototype.DefaultInterpolation=ra;so.prototype.InterpolantFactoryMethodLinear=void 0;so.prototype.InterpolantFactoryMethodSmooth=void 0;class Js extends hi{constructor(e,t,i,r){super(e,t,i,r)}}Js.prototype.ValueTypeName="vector";class ME{constructor(e="",t=-1,i=[],r=iM){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=ci(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(TE(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(hi.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=vE(l);l=tm(l,1,u),c=tm(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Ys(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let d=r[f];d||(r[f]=d=[]),d.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(f,d,p,g,v){if(p.length!==0){const m=[],h=[];av(p,m,h,g),m.length!==0&&v.push(new f(d,m,h))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const d=c[f].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)p[d[g].morphTargets[v]]=-1;for(const v in p){const m=[],h=[];for(let S=0;S!==d[g].morphTargets.length;++S){const y=d[g];m.push(y.time),h.push(y.morphTarget===v?1:0)}r.push(new Ys(".morphTargetInfluence["+v+"]",m,h))}l=p.length*o}else{const p=".bones["+t[f].name+"]";i(Js,p+".position",d,"pos",r),i(Ks,p+".quaternion",d,"rot",r),i(Js,p+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function EE(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ys;case"vector":case"vector2":case"vector3":case"vector4":return Js;case"color":return lv;case"quaternion":return Ks;case"bool":case"boolean":return ro;case"string":return so}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function TE(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=EE(n.type);if(n.times===void 0){const t=[],i=[];av(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const yr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class AE{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const wE=new AE;class oo{constructor(e){this.manager=e!==void 0?e:wE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}oo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Vi={};class RE extends Error{constructor(e,t){super(e),this.response=t}}class cv extends oo{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=yr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Vi[e]!==void 0){Vi[e].push({onLoad:t,onProgress:i,onError:r});return}Vi[e]=[],Vi[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Vi[e],f=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let v=0;const m=new ReadableStream({start(h){S();function S(){f.read().then(({done:y,value:_})=>{if(y)h.close();else{v+=_.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let C=0,T=u.length;C<T;C++){const N=u[C];N.onProgress&&N.onProgress(A)}h.enqueue(_),S()}},y=>{h.error(y)})}}});return new Response(m)}else throw new RE(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{yr.add(e,c);const u=Vi[e];delete Vi[e];for(let f=0,d=u.length;f<d;f++){const p=u[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Vi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Vi[e];for(let f=0,d=u.length;f<d;f++){const p=u[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class CE extends oo{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=yr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=oa("img");function l(){u(),yr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class xa extends oo{constructor(e){super(e)}load(e,t,i,r){const s=new $t,o=new CE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Ld extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const nu=new Qe,nm=new z,im=new z;class Pd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=wi,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ad,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;nm.setFromMatrixPosition(e.matrixWorld),t.position.copy(nm),im.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(im),t.updateMatrixWorld(),nu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(nu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class LE extends Pd{constructor(){super(new on(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=$s*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class PE extends Ld{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new LE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const rm=new Qe,So=new z,iu=new z;class IE extends Pd{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ge(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),So.setFromMatrixPosition(e.matrixWorld),i.position.copy(So),iu.copy(i.position),iu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(iu),i.updateMatrixWorld(),r.makeTranslation(-So.x,-So.y,-So.z),rm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rm)}}class DE extends Ld{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new IE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Id extends ev{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class NE extends Pd{constructor(){super(new Id(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class UE extends Ld{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new NE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ho{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const ru=new WeakMap;class OE extends oo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=yr.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{if(ru.has(o)===!0)r&&r(ru.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return yr.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),ru.set(l,c),yr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});yr.add(e,l),s.manager.itemStart(e)}}class FE extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Dd="\\[\\]\\.:\\/",BE=new RegExp("["+Dd+"]","g"),Nd="[^"+Dd+"]",kE="[^"+Dd.replace("\\.","")+"]",HE=/((?:WC+[\/:])*)/.source.replace("WC",Nd),VE=/(WCOD+)?/.source.replace("WCOD",kE),zE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nd),GE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nd),WE=new RegExp("^"+HE+VE+zE+GE+"$"),jE=["material","materials","bones","map"];class XE{constructor(e,t,i){const r=i||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class bt{constructor(e,t,i){this.path=t,this.parsedPath=i||bt.parseTrackName(t),this.node=bt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new bt.Composite(e,t,i):new bt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(BE,"")}static parseTrackName(e){const t=WE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);jE.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=bt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}bt.Composite=XE;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function sm(n,e,t,i){const r=$E(i);switch(t){case H_:return n*e;case gd:return n*e/r.components*r.byteLength;case _d:return n*e/r.components*r.byteLength;case z_:return n*e*2/r.components*r.byteLength;case vd:return n*e*2/r.components*r.byteLength;case V_:return n*e*3/r.components*r.byteLength;case Wn:return n*e*4/r.components*r.byteLength;case xd:return n*e*4/r.components*r.byteLength;case gl:case _l:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case vl:case xl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nf:case sf:return Math.max(n,16)*Math.max(e,8)/4;case tf:case rf:return Math.max(n,8)*Math.max(e,8)/2;case of:case af:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case lf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case uf:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ff:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case df:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case hf:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case pf:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case mf:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case gf:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case _f:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case vf:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case xf:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case yf:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Sf:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case bf:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case yl:case Mf:case Ef:return Math.ceil(n/4)*Math.ceil(e/4)*16;case G_:case Tf:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Af:case wf:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $E(n){switch(n){case wi:case F_:return{byteLength:1,components:1};case ea:case B_:case ga:return{byteLength:2,components:1};case pd:case md:return{byteLength:2,components:4};case is:case hd:case ai:return{byteLength:4,components:1};case k_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function uv(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function qE(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],v=f[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const v=f[p];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var YE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,KE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,JE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ZE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,rT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,aT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_T=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ST=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,MT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ET=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TT="gl_FragColor = linearToOutputTexel( gl_FragColor );",AT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,RT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,CT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,LT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,IT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,DT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,NT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,UT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,OT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,FT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,BT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,VT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,GT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,WT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,XT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$T=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,YT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,KT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ZT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,aA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_A=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,SA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,MA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,EA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,TA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,AA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,PA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,IA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,DA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,NA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,UA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,OA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,BA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,VA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,GA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,WA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,XA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$A=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ew=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,iw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ow=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,aw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_w=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Mw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ew=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Aw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ww=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:YE,alphahash_pars_fragment:KE,alphamap_fragment:JE,alphamap_pars_fragment:ZE,alphatest_fragment:QE,alphatest_pars_fragment:eT,aomap_fragment:tT,aomap_pars_fragment:nT,batching_pars_vertex:iT,batching_vertex:rT,begin_vertex:sT,beginnormal_vertex:oT,bsdfs:aT,iridescence_fragment:lT,bumpmap_pars_fragment:cT,clipping_planes_fragment:uT,clipping_planes_pars_fragment:fT,clipping_planes_pars_vertex:dT,clipping_planes_vertex:hT,color_fragment:pT,color_pars_fragment:mT,color_pars_vertex:gT,color_vertex:_T,common:vT,cube_uv_reflection_fragment:xT,defaultnormal_vertex:yT,displacementmap_pars_vertex:ST,displacementmap_vertex:bT,emissivemap_fragment:MT,emissivemap_pars_fragment:ET,colorspace_fragment:TT,colorspace_pars_fragment:AT,envmap_fragment:wT,envmap_common_pars_fragment:RT,envmap_pars_fragment:CT,envmap_pars_vertex:LT,envmap_physical_pars_fragment:VT,envmap_vertex:PT,fog_vertex:IT,fog_pars_vertex:DT,fog_fragment:NT,fog_pars_fragment:UT,gradientmap_pars_fragment:OT,lightmap_pars_fragment:FT,lights_lambert_fragment:BT,lights_lambert_pars_fragment:kT,lights_pars_begin:HT,lights_toon_fragment:zT,lights_toon_pars_fragment:GT,lights_phong_fragment:WT,lights_phong_pars_fragment:jT,lights_physical_fragment:XT,lights_physical_pars_fragment:$T,lights_fragment_begin:qT,lights_fragment_maps:YT,lights_fragment_end:KT,logdepthbuf_fragment:JT,logdepthbuf_pars_fragment:ZT,logdepthbuf_pars_vertex:QT,logdepthbuf_vertex:eA,map_fragment:tA,map_pars_fragment:nA,map_particle_fragment:iA,map_particle_pars_fragment:rA,metalnessmap_fragment:sA,metalnessmap_pars_fragment:oA,morphinstance_vertex:aA,morphcolor_vertex:lA,morphnormal_vertex:cA,morphtarget_pars_vertex:uA,morphtarget_vertex:fA,normal_fragment_begin:dA,normal_fragment_maps:hA,normal_pars_fragment:pA,normal_pars_vertex:mA,normal_vertex:gA,normalmap_pars_fragment:_A,clearcoat_normal_fragment_begin:vA,clearcoat_normal_fragment_maps:xA,clearcoat_pars_fragment:yA,iridescence_pars_fragment:SA,opaque_fragment:bA,packing:MA,premultiplied_alpha_fragment:EA,project_vertex:TA,dithering_fragment:AA,dithering_pars_fragment:wA,roughnessmap_fragment:RA,roughnessmap_pars_fragment:CA,shadowmap_pars_fragment:LA,shadowmap_pars_vertex:PA,shadowmap_vertex:IA,shadowmask_pars_fragment:DA,skinbase_vertex:NA,skinning_pars_vertex:UA,skinning_vertex:OA,skinnormal_vertex:FA,specularmap_fragment:BA,specularmap_pars_fragment:kA,tonemapping_fragment:HA,tonemapping_pars_fragment:VA,transmission_fragment:zA,transmission_pars_fragment:GA,uv_pars_fragment:WA,uv_pars_vertex:jA,uv_vertex:XA,worldpos_vertex:$A,background_vert:qA,background_frag:YA,backgroundCube_vert:KA,backgroundCube_frag:JA,cube_vert:ZA,cube_frag:QA,depth_vert:ew,depth_frag:tw,distanceRGBA_vert:nw,distanceRGBA_frag:iw,equirect_vert:rw,equirect_frag:sw,linedashed_vert:ow,linedashed_frag:aw,meshbasic_vert:lw,meshbasic_frag:cw,meshlambert_vert:uw,meshlambert_frag:fw,meshmatcap_vert:dw,meshmatcap_frag:hw,meshnormal_vert:pw,meshnormal_frag:mw,meshphong_vert:gw,meshphong_frag:_w,meshphysical_vert:vw,meshphysical_frag:xw,meshtoon_vert:yw,meshtoon_frag:Sw,points_vert:bw,points_frag:Mw,shadow_vert:Ew,shadow_frag:Tw,sprite_vert:Aw,sprite_frag:ww},Se={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},xi={basic:{uniforms:dn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:dn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new qe(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:dn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:dn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:dn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new qe(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:dn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:dn([Se.points,Se.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:dn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:dn([Se.common,Se.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:dn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:dn([Se.sprite,Se.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:dn([Se.common,Se.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:dn([Se.lights,Se.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};xi.physical={uniforms:dn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const nl={r:0,b:0,g:0},Br=new fi,Rw=new Qe;function Cw(n,e,t,i,r,s,o){const a=new qe(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function v(y){let _=!1;const A=g(y);A===null?h(a,l):A&&A.isColor&&(h(A,1),_=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,_){const A=g(_);A&&(A.isCubeTexture||A.mapping===fc)?(u===void 0&&(u=new Mn(new _a(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:qs(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,T,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Br.copy(_.backgroundRotation),Br.x*=-1,Br.y*=-1,Br.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Rw.makeRotationFromEuler(Br)),u.material.toneMapped=lt.getTransfer(A.colorSpace)!==Et,(f!==A||d!==A.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=A,d=A.version,p=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Mn(new io(2,2),new Ri({name:"BackgroundMaterial",uniforms:qs(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=lt.getTransfer(A.colorSpace)!==Et,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||d!==A.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=A,d=A.version,p=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function h(y,_){y.getRGB(nl,Q_(n)),i.buffers.color.setClear(nl.r,nl.g,nl.b,_,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),l=_,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,h(a,l)},render:v,addToRenderList:m,dispose:S}}function Lw(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(b,D,W,F,k){let K=!1;const G=f(F,W,D);s!==G&&(s=G,c(s.object)),K=p(b,F,W,k),K&&g(b,F,W,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,_(b,D,W,F),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function f(b,D,W){const F=W.wireframe===!0;let k=i[b.id];k===void 0&&(k={},i[b.id]=k);let K=k[D.id];K===void 0&&(K={},k[D.id]=K);let G=K[F];return G===void 0&&(G=d(l()),K[F]=G),G}function d(b){const D=[],W=[],F=[];for(let k=0;k<t;k++)D[k]=0,W[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:W,attributeDivisors:F,object:b,attributes:{},index:null}}function p(b,D,W,F){const k=s.attributes,K=D.attributes;let G=0;const Z=W.getAttributes();for(const $ in Z)if(Z[$].location>=0){const ve=k[$];let Te=K[$];if(Te===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(Te=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(Te=b.instanceColor)),ve===void 0||ve.attribute!==Te||Te&&ve.data!==Te.data)return!0;G++}return s.attributesNum!==G||s.index!==F}function g(b,D,W,F){const k={},K=D.attributes;let G=0;const Z=W.getAttributes();for(const $ in Z)if(Z[$].location>=0){let ve=K[$];ve===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(ve=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(ve=b.instanceColor));const Te={};Te.attribute=ve,ve&&ve.data&&(Te.data=ve.data),k[$]=Te,G++}s.attributes=k,s.attributesNum=G,s.index=F}function v(){const b=s.newAttributes;for(let D=0,W=b.length;D<W;D++)b[D]=0}function m(b){h(b,0)}function h(b,D){const W=s.newAttributes,F=s.enabledAttributes,k=s.attributeDivisors;W[b]=1,F[b]===0&&(n.enableVertexAttribArray(b),F[b]=1),k[b]!==D&&(n.vertexAttribDivisor(b,D),k[b]=D)}function S(){const b=s.newAttributes,D=s.enabledAttributes;for(let W=0,F=D.length;W<F;W++)D[W]!==b[W]&&(n.disableVertexAttribArray(W),D[W]=0)}function y(b,D,W,F,k,K,G){G===!0?n.vertexAttribIPointer(b,D,W,k,K):n.vertexAttribPointer(b,D,W,F,k,K)}function _(b,D,W,F){v();const k=F.attributes,K=W.getAttributes(),G=D.defaultAttributeValues;for(const Z in K){const $=K[Z];if($.location>=0){let ce=k[Z];if(ce===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(ce=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(ce=b.instanceColor)),ce!==void 0){const ve=ce.normalized,Te=ce.itemSize,ke=e.get(ce);if(ke===void 0)continue;const it=ke.buffer,re=ke.type,de=ke.bytesPerElement,Ae=re===n.INT||re===n.UNSIGNED_INT||ce.gpuType===hd;if(ce.isInterleavedBufferAttribute){const ge=ce.data,we=ge.stride,tt=ce.offset;if(ge.isInstancedInterleavedBuffer){for(let Fe=0;Fe<$.locationSize;Fe++)h($.location+Fe,ge.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Fe=0;Fe<$.locationSize;Fe++)m($.location+Fe);n.bindBuffer(n.ARRAY_BUFFER,it);for(let Fe=0;Fe<$.locationSize;Fe++)y($.location+Fe,Te/$.locationSize,re,ve,we*de,(tt+Te/$.locationSize*Fe)*de,Ae)}else{if(ce.isInstancedBufferAttribute){for(let ge=0;ge<$.locationSize;ge++)h($.location+ge,ce.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ge=0;ge<$.locationSize;ge++)m($.location+ge);n.bindBuffer(n.ARRAY_BUFFER,it);for(let ge=0;ge<$.locationSize;ge++)y($.location+ge,Te/$.locationSize,re,ve,Te*de,Te/$.locationSize*ge*de,Ae)}}else if(G!==void 0){const ve=G[Z];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv($.location,ve);break;case 3:n.vertexAttrib3fv($.location,ve);break;case 4:n.vertexAttrib4fv($.location,ve);break;default:n.vertexAttrib1fv($.location,ve)}}}}S()}function A(){N();for(const b in i){const D=i[b];for(const W in D){const F=D[W];for(const k in F)u(F[k].object),delete F[k];delete D[W]}delete i[b]}}function C(b){if(i[b.id]===void 0)return;const D=i[b.id];for(const W in D){const F=D[W];for(const k in F)u(F[k].object),delete F[k];delete D[W]}delete i[b.id]}function T(b){for(const D in i){const W=i[D];if(W[b.id]===void 0)continue;const F=W[b.id];for(const k in F)u(F[k].object),delete F[k];delete W[b.id]}}function N(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function Pw(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];t.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v]*d[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Iw(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Wn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const N=T===ga&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==wi&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ai&&!N)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:A,maxSamples:C}}function Dw(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new zr,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const S=s?0:i,y=S*4;let _=h.clippingState||null;l.value=_,_=u(g,d,y,p);for(let A=0;A!==y;++A)_[A]=t[A];h.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const h=p+v*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<h)&&(m=new Float32Array(h));for(let y=0,_=p;y!==v;++y,_+=4)o.copy(f[y]).applyMatrix4(S,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Nw(n){let e=new WeakMap;function t(o,a){return a===Qu?o.mapping=js:a===ef&&(o.mapping=Xs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Qu||a===ef)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new iE(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Rs=4,om=[.125,.215,.35,.446,.526,.582],qr=20,su=new Id,am=new qe;let ou=null,au=0,lu=0,cu=!1;const Gr=(1+Math.sqrt(5))/2,Ms=1/Gr,lm=[new z(-Gr,Ms,0),new z(Gr,Ms,0),new z(-Ms,0,Gr),new z(Ms,0,Gr),new z(0,Gr,-Ms),new z(0,Gr,Ms),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],Uw=new z;class cm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=Uw}=s;ou=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),lu=this._renderer.getActiveMipmapLevel(),cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ou,au,lu),this._renderer.xr.enabled=cu,e.scissorTest=!1,il(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===js||e.mapping===Xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ou=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),lu=this._renderer.getActiveMipmapLevel(),cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:ga,format:Wn,colorSpace:xn,depthBuffer:!1},r=um(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=um(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ow(s)),this._blurMaterial=Fw(s,e,t)}return r}_compileMaterial(e){const t=new Mn(this._lodPlanes[0],e);this._renderer.compile(t,su)}_sceneToCubeUV(e,t,i,r,s){const l=new on(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(am),f.toneMapping=Mr,f.autoClear=!1;const g=new Jr({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),v=new Mn(new _a,g);let m=!1;const h=e.background;h?h.isColor&&(g.color.copy(h),e.background=null,m=!0):(g.color.copy(am),m=!0);for(let S=0;S<6;S++){const y=S%3;y===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):y===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));const _=this._cubeSize;il(r,y*_,S>2?_:0,_,_),f.setRenderTarget(r),m&&f.render(v,l),f.render(e,l)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=p,f.autoClear=d,e.background=h}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===js||e.mapping===Xs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Mn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;il(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,su)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=lm[(r-s-1)%lm.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Mn(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*qr-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):qr;m>qr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qr}`);const h=[];let S=0;for(let T=0;T<qr;++T){const N=T/v,M=Math.exp(-N*N/2);h.push(M),T===0?S+=M:T<m&&(S+=2*M)}for(let T=0;T<h.length;T++)h[T]=h[T]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const _=this._sizeLods[r],A=3*_*(r>y-Rs?r-y+Rs:0),C=4*(this._cubeSize-_);il(t,A,C,3*_,2*_),l.setRenderTarget(t),l.render(f,su)}}function Ow(n){const e=[],t=[],i=[];let r=n;const s=n-Rs+1+om.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Rs?l=om[o-n+Rs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,v=3,m=2,h=1,S=new Float32Array(v*g*p),y=new Float32Array(m*g*p),_=new Float32Array(h*g*p);for(let C=0;C<p;C++){const T=C%3*2/3-1,N=C>2?0:-1,M=[T,N,0,T+2/3,N,0,T+2/3,N+1,0,T,N,0,T+2/3,N+1,0,T,N+1,0];S.set(M,v*g*C),y.set(d,m*g*C);const b=[C,C,C,C,C,C];_.set(b,h*g*C)}const A=new Fn;A.setAttribute("position",new _n(S,v)),A.setAttribute("uv",new _n(y,m)),A.setAttribute("faceIndex",new _n(_,h)),e.push(A),r>Rs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function um(n,e,t){const i=new rs(n,e,t);return i.texture.mapping=fc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function il(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Fw(n,e,t){const i=new Float32Array(qr),r=new z(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function fm(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function dm(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function Ud(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Bw(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Qu||l===ef,u=l===js||l===Xs;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new cm(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new cm(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function kw(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Bs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Hw(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,g=f.attributes.position;let v=0;if(p!==null){const S=p.array;v=p.version;for(let y=0,_=S.length;y<_;y+=3){const A=S[y+0],C=S[y+1],T=S[y+2];d.push(A,C,C,T,T,A)}}else if(g!==void 0){const S=g.array;v=g.version;for(let y=0,_=S.length/3-1;y<_;y+=3){const A=y+0,C=y+1,T=y+2;d.push(A,C,C,T,T,A)}}else return;const m=new($_(d)?Z_:J_)(d,1);m.version=v;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Vw(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,s,d*o),t.update(p,i,1)}function c(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,d*o,g),t.update(p,i,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];t.update(m,i,1)}function f(d,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,v,0,g);let h=0;for(let S=0;S<g;S++)h+=p[S]*v[S];t.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function zw(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Gw(n,e,t){const i=new WeakMap,r=new dt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let b=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var p=b;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let A=a.attributes.position.count*_,C=1;A>e.maxTextureSize&&(C=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const T=new Float32Array(A*C*4*f),N=new q_(T,A,C,f);N.type=ai,N.needsUpdate=!0;const M=_*4;for(let D=0;D<f;D++){const W=h[D],F=S[D],k=y[D],K=A*C*4*D;for(let G=0;G<W.count;G++){const Z=G*M;g===!0&&(r.fromBufferAttribute(W,G),T[K+Z+0]=r.x,T[K+Z+1]=r.y,T[K+Z+2]=r.z,T[K+Z+3]=0),v===!0&&(r.fromBufferAttribute(F,G),T[K+Z+4]=r.x,T[K+Z+5]=r.y,T[K+Z+6]=r.z,T[K+Z+7]=0),m===!0&&(r.fromBufferAttribute(k,G),T[K+Z+8]=r.x,T[K+Z+9]=r.y,T[K+Z+10]=r.z,T[K+Z+11]=k.itemSize===4?r.w:1)}}d={count:f,texture:N,size:new Ge(A,C)},i.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Ww(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const fv=new $t,hm=new ov(1,1),dv=new q_,hv=new HM,pv=new tv,pm=[],mm=[],gm=new Float32Array(16),_m=new Float32Array(9),vm=new Float32Array(4);function ao(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=pm[r];if(s===void 0&&(s=new Float32Array(r),pm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function hc(n,e){let t=mm[e];t===void 0&&(t=new Int32Array(e),mm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function jw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Xw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2fv(this.addr,e),Wt(t,e)}}function $w(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;n.uniform3fv(this.addr,e),Wt(t,e)}}function qw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4fv(this.addr,e),Wt(t,e)}}function Yw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,i))return;vm.set(i),n.uniformMatrix2fv(this.addr,!1,vm),Wt(t,i)}}function Kw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,i))return;_m.set(i),n.uniformMatrix3fv(this.addr,!1,_m),Wt(t,i)}}function Jw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,i))return;gm.set(i),n.uniformMatrix4fv(this.addr,!1,gm),Wt(t,i)}}function Zw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Qw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2iv(this.addr,e),Wt(t,e)}}function eR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3iv(this.addr,e),Wt(t,e)}}function tR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4iv(this.addr,e),Wt(t,e)}}function nR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function iR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2uiv(this.addr,e),Wt(t,e)}}function rR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3uiv(this.addr,e),Wt(t,e)}}function sR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4uiv(this.addr,e),Wt(t,e)}}function oR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(hm.compareFunction=X_,s=hm):s=fv,t.setTexture2D(e||s,r)}function aR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||hv,r)}function lR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||pv,r)}function cR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||dv,r)}function uR(n){switch(n){case 5126:return jw;case 35664:return Xw;case 35665:return $w;case 35666:return qw;case 35674:return Yw;case 35675:return Kw;case 35676:return Jw;case 5124:case 35670:return Zw;case 35667:case 35671:return Qw;case 35668:case 35672:return eR;case 35669:case 35673:return tR;case 5125:return nR;case 36294:return iR;case 36295:return rR;case 36296:return sR;case 35678:case 36198:case 36298:case 36306:case 35682:return oR;case 35679:case 36299:case 36307:return aR;case 35680:case 36300:case 36308:case 36293:return lR;case 36289:case 36303:case 36311:case 36292:return cR}}function fR(n,e){n.uniform1fv(this.addr,e)}function dR(n,e){const t=ao(e,this.size,2);n.uniform2fv(this.addr,t)}function hR(n,e){const t=ao(e,this.size,3);n.uniform3fv(this.addr,t)}function pR(n,e){const t=ao(e,this.size,4);n.uniform4fv(this.addr,t)}function mR(n,e){const t=ao(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function gR(n,e){const t=ao(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function _R(n,e){const t=ao(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function vR(n,e){n.uniform1iv(this.addr,e)}function xR(n,e){n.uniform2iv(this.addr,e)}function yR(n,e){n.uniform3iv(this.addr,e)}function SR(n,e){n.uniform4iv(this.addr,e)}function bR(n,e){n.uniform1uiv(this.addr,e)}function MR(n,e){n.uniform2uiv(this.addr,e)}function ER(n,e){n.uniform3uiv(this.addr,e)}function TR(n,e){n.uniform4uiv(this.addr,e)}function AR(n,e,t){const i=this.cache,r=e.length,s=hc(t,r);Gt(i,s)||(n.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||fv,s[o])}function wR(n,e,t){const i=this.cache,r=e.length,s=hc(t,r);Gt(i,s)||(n.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||hv,s[o])}function RR(n,e,t){const i=this.cache,r=e.length,s=hc(t,r);Gt(i,s)||(n.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||pv,s[o])}function CR(n,e,t){const i=this.cache,r=e.length,s=hc(t,r);Gt(i,s)||(n.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||dv,s[o])}function LR(n){switch(n){case 5126:return fR;case 35664:return dR;case 35665:return hR;case 35666:return pR;case 35674:return mR;case 35675:return gR;case 35676:return _R;case 5124:case 35670:return vR;case 35667:case 35671:return xR;case 35668:case 35672:return yR;case 35669:case 35673:return SR;case 5125:return bR;case 36294:return MR;case 36295:return ER;case 36296:return TR;case 35678:case 36198:case 36298:case 36306:case 35682:return AR;case 35679:case 36299:case 36307:return wR;case 35680:case 36300:case 36308:case 36293:return RR;case 36289:case 36303:case 36311:case 36292:return CR}}class PR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=uR(t.type)}}class IR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=LR(t.type)}}class DR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const uu=/(\w+)(\])?(\[|\.)?/g;function xm(n,e){n.seq.push(e),n.map[e.id]=e}function NR(n,e,t){const i=n.name,r=i.length;for(uu.lastIndex=0;;){const s=uu.exec(i),o=uu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){xm(t,c===void 0?new PR(a,n,e):new IR(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new DR(a),xm(t,f)),t=f}}}class bl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);NR(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function ym(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const UR=37297;let OR=0;function FR(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Sm=new et;function BR(n){lt._getMatrix(Sm,lt.workingColorSpace,n);const e=`mat3( ${Sm.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(n)){case zl:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function bm(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+FR(n.getShaderSource(e),o)}else return r}function kR(n,e){const t=BR(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function HR(n,e){let t;switch(e){case Yb:t="Linear";break;case Kb:t="Reinhard";break;case Jb:t="Cineon";break;case Zb:t="ACESFilmic";break;case eM:t="AgX";break;case tM:t="Neutral";break;case Qb:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const rl=new z;function VR(){lt.getLuminanceCoefficients(rl);const n=rl.x.toFixed(4),e=rl.y.toFixed(4),t=rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zR(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function GR(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function WR(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Co(n){return n!==""}function Mm(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Em(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pf(n){return n.replace(jR,$R)}const XR=new Map;function $R(n,e){let t=nt[e];if(t===void 0){const i=XR.get(e);if(i!==void 0)t=nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Pf(t)}const qR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tm(n){return n.replace(qR,YR)}function YR(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Am(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function KR(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===D_?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Rb?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===zi&&(e="SHADOWMAP_TYPE_VSM"),e}function JR(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case js:case Xs:e="ENVMAP_TYPE_CUBE";break;case fc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ZR(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Xs:e="ENVMAP_MODE_REFRACTION";break}return e}function QR(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case N_:e="ENVMAP_BLENDING_MULTIPLY";break;case $b:e="ENVMAP_BLENDING_MIX";break;case qb:e="ENVMAP_BLENDING_ADD";break}return e}function e1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function t1(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=KR(t),c=JR(t),u=ZR(t),f=QR(t),d=e1(t),p=zR(t),g=GR(s),v=r.createProgram();let m,h,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Co).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Co).join(`
`),h.length>0&&(h+=`
`)):(m=[Am(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),h=[Am(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mr?"#define TONE_MAPPING":"",t.toneMapping!==Mr?nt.tonemapping_pars_fragment:"",t.toneMapping!==Mr?HR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,kR("linearToOutputTexel",t.outputColorSpace),VR(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Co).join(`
`)),o=Pf(o),o=Mm(o,t),o=Em(o,t),a=Pf(a),a=Mm(a,t),a=Em(a,t),o=Tm(o),a=Tm(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===bp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=S+m+o,_=S+h+a,A=ym(r,r.VERTEX_SHADER,y),C=ym(r,r.FRAGMENT_SHADER,_);r.attachShader(v,A),r.attachShader(v,C),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function T(D){if(n.debug.checkShaderErrors){const W=r.getProgramInfoLog(v).trim(),F=r.getShaderInfoLog(A).trim(),k=r.getShaderInfoLog(C).trim();let K=!0,G=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,A,C);else{const Z=bm(r,A,"vertex"),$=bm(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+W+`
`+Z+`
`+$)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(F===""||k==="")&&(G=!1);G&&(D.diagnostics={runnable:K,programLog:W,vertexShader:{log:F,prefix:m},fragmentShader:{log:k,prefix:h}})}r.deleteShader(A),r.deleteShader(C),N=new bl(r,v),M=WR(r,v)}let N;this.getUniforms=function(){return N===void 0&&T(this),N};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(v,UR)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=OR++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=C,this}let n1=0;class i1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new r1(e),t.set(e,i)),i}}class r1{constructor(e){this.id=n1++,this.code=e,this.usedTimes=0}}function s1(n,e,t,i,r,s,o){const a=new Y_,l=new i1,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,b,D,W,F){const k=W.fog,K=F.geometry,G=M.isMeshStandardMaterial?W.environment:null,Z=(M.isMeshStandardMaterial?t:e).get(M.envMap||G),$=Z&&Z.mapping===fc?Z.image.height:null,ce=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const ve=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Te=ve!==void 0?ve.length:0;let ke=0;K.morphAttributes.position!==void 0&&(ke=1),K.morphAttributes.normal!==void 0&&(ke=2),K.morphAttributes.color!==void 0&&(ke=3);let it,re,de,Ae;if(ce){const xt=xi[ce];it=xt.vertexShader,re=xt.fragmentShader}else it=M.vertexShader,re=M.fragmentShader,l.update(M),de=l.getVertexShaderID(M),Ae=l.getFragmentShaderID(M);const ge=n.getRenderTarget(),we=n.state.buffers.depth.getReversed(),tt=F.isInstancedMesh===!0,Fe=F.isBatchedMesh===!0,ct=!!M.map,U=!!M.matcap,B=!!Z,w=!!M.aoMap,se=!!M.lightMap,ee=!!M.bumpMap,ne=!!M.normalMap,R=!!M.displacementMap,P=!!M.emissiveMap,O=!!M.metalnessMap,H=!!M.roughnessMap,le=M.anisotropy>0,E=M.clearcoat>0,x=M.dispersion>0,I=M.iridescence>0,j=M.sheen>0,J=M.transmission>0,Y=le&&!!M.anisotropyMap,ye=E&&!!M.clearcoatMap,ue=E&&!!M.clearcoatNormalMap,be=E&&!!M.clearcoatRoughnessMap,Re=I&&!!M.iridescenceMap,ae=I&&!!M.iridescenceThicknessMap,Ce=j&&!!M.sheenColorMap,De=j&&!!M.sheenRoughnessMap,Ne=!!M.specularMap,xe=!!M.specularColorMap,je=!!M.specularIntensityMap,V=J&&!!M.transmissionMap,Me=J&&!!M.thicknessMap,fe=!!M.gradientMap,Ie=!!M.alphaMap,he=M.alphaTest>0,oe=!!M.alphaHash,Ue=!!M.extensions;let Ke=Mr;M.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Ke=n.toneMapping);const Lt={shaderID:ce,shaderType:M.type,shaderName:M.name,vertexShader:it,fragmentShader:re,defines:M.defines,customVertexShaderID:de,customFragmentShaderID:Ae,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Fe,batchingColor:Fe&&F._colorsTexture!==null,instancing:tt,instancingColor:tt&&F.instanceColor!==null,instancingMorph:tt&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ge===null?n.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:xn,alphaToCoverage:!!M.alphaToCoverage,map:ct,matcap:U,envMap:B,envMapMode:B&&Z.mapping,envMapCubeUVHeight:$,aoMap:w,lightMap:se,bumpMap:ee,normalMap:ne,displacementMap:d&&R,emissiveMap:P,normalMapObjectSpace:ne&&M.normalMapType===aM,normalMapTangentSpace:ne&&M.normalMapType===j_,metalnessMap:O,roughnessMap:H,anisotropy:le,anisotropyMap:Y,clearcoat:E,clearcoatMap:ye,clearcoatNormalMap:ue,clearcoatRoughnessMap:be,dispersion:x,iridescence:I,iridescenceMap:Re,iridescenceThicknessMap:ae,sheen:j,sheenColorMap:Ce,sheenRoughnessMap:De,specularMap:Ne,specularColorMap:xe,specularIntensityMap:je,transmission:J,transmissionMap:V,thicknessMap:Me,gradientMap:fe,opaque:M.transparent===!1&&M.blending===Fs&&M.alphaToCoverage===!1,alphaMap:Ie,alphaTest:he,alphaHash:oe,combine:M.combine,mapUv:ct&&v(M.map.channel),aoMapUv:w&&v(M.aoMap.channel),lightMapUv:se&&v(M.lightMap.channel),bumpMapUv:ee&&v(M.bumpMap.channel),normalMapUv:ne&&v(M.normalMap.channel),displacementMapUv:R&&v(M.displacementMap.channel),emissiveMapUv:P&&v(M.emissiveMap.channel),metalnessMapUv:O&&v(M.metalnessMap.channel),roughnessMapUv:H&&v(M.roughnessMap.channel),anisotropyMapUv:Y&&v(M.anisotropyMap.channel),clearcoatMapUv:ye&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:ue&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:De&&v(M.sheenRoughnessMap.channel),specularMapUv:Ne&&v(M.specularMap.channel),specularColorMapUv:xe&&v(M.specularColorMap.channel),specularIntensityMapUv:je&&v(M.specularIntensityMap.channel),transmissionMapUv:V&&v(M.transmissionMap.channel),thicknessMapUv:Me&&v(M.thicknessMap.channel),alphaMapUv:Ie&&v(M.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(ne||le),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!K.attributes.uv&&(ct||Ie),fog:!!k,useFog:M.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:we,skinning:F.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:ke,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ke,decodeVideoTexture:ct&&M.map.isVideoTexture===!0&&lt.getTransfer(M.map.colorSpace)===Et,decodeVideoTextureEmissive:P&&M.emissiveMap.isVideoTexture===!0&&lt.getTransfer(M.emissiveMap.colorSpace)===Et,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ii,flipSided:M.side===Tn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ue&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&M.extensions.multiDraw===!0||Fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Lt.vertexUv1s=c.has(1),Lt.vertexUv2s=c.has(2),Lt.vertexUv3s=c.has(3),c.clear(),Lt}function h(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)b.push(D),b.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(S(b,M),y(b,M),b.push(n.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function S(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function y(M,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),M.push(a.mask)}function _(M){const b=g[M.type];let D;if(b){const W=xi[b];D=QM.clone(W.uniforms)}else D=M.uniforms;return D}function A(M,b){let D;for(let W=0,F=u.length;W<F;W++){const k=u[W];if(k.cacheKey===b){D=k,++D.usedTimes;break}}return D===void 0&&(D=new t1(n,b,M,s),u.push(D)),D}function C(M){if(--M.usedTimes===0){const b=u.indexOf(M);u[b]=u[u.length-1],u.pop(),M.destroy()}}function T(M){l.remove(M)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:_,acquireProgram:A,releaseProgram:C,releaseShaderCache:T,programs:u,dispose:N}}function o1(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function a1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function wm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Rm(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,p,g,v,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=v,h.group=m),e++,h}function a(f,d,p,g,v,m){const h=o(f,d,p,g,v,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(f,d,p,g,v,m){const h=o(f,d,p,g,v,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||a1),i.length>1&&i.sort(d||wm),r.length>1&&r.sort(d||wm)}function u(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function l1(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Rm,n.set(i,[o])):r>=s.length?(o=new Rm,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function c1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new qe};break;case"SpotLight":t={position:new z,direction:new z,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function u1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let f1=0;function d1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function h1(n){const e=new c1,t=u1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new Qe,o=new Qe;function a(c){let u=0,f=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,g=0,v=0,m=0,h=0,S=0,y=0,_=0,A=0,C=0,T=0;c.sort(d1);for(let M=0,b=c.length;M<b;M++){const D=c[M],W=D.color,F=D.intensity,k=D.distance,K=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=W.r*F,f+=W.g*F,d+=W.b*F;else if(D.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(D.sh.coefficients[G],F);T++}else if(D.isDirectionalLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Z=D.shadow,$=t.get(D);$.shadowIntensity=Z.intensity,$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,i.directionalShadow[p]=$,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=D.shadow.matrix,S++}i.directional[p]=G,p++}else if(D.isSpotLight){const G=e.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(W).multiplyScalar(F),G.distance=k,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,i.spot[v]=G;const Z=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,Z.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[v]=Z.matrix,D.castShadow){const $=t.get(D);$.shadowIntensity=Z.intensity,$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,i.spotShadow[v]=$,i.spotShadowMap[v]=K,_++}v++}else if(D.isRectAreaLight){const G=e.get(D);G.color.copy(W).multiplyScalar(F),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=G,m++}else if(D.isPointLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){const Z=D.shadow,$=t.get(D);$.shadowIntensity=Z.intensity,$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,$.shadowCameraNear=Z.camera.near,$.shadowCameraFar=Z.camera.far,i.pointShadow[g]=$,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=D.shadow.matrix,y++}i.point[g]=G,g++}else if(D.isHemisphereLight){const G=e.get(D);G.skyColor.copy(D.color).multiplyScalar(F),G.groundColor.copy(D.groundColor).multiplyScalar(F),i.hemi[h]=G,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const N=i.hash;(N.directionalLength!==p||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==m||N.hemiLength!==h||N.numDirectionalShadows!==S||N.numPointShadows!==y||N.numSpotShadows!==_||N.numSpotMaps!==A||N.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=_+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=T,N.directionalLength=p,N.pointLength=g,N.spotLength=v,N.rectAreaLength=m,N.hemiLength=h,N.numDirectionalShadows=S,N.numPointShadows=y,N.numSpotShadows=_,N.numSpotMaps=A,N.numLightProbes=T,i.version=f1++)}function l(c,u){let f=0,d=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let h=0,S=c.length;h<S;h++){const y=c[h];if(y.isDirectionalLight){const _=i.directional[f];_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),f++}else if(y.isSpotLight){const _=i.spot[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const _=i.point[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Cm(n){const e=new h1(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function p1(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Cm(n),e.set(r,[a])):s>=o.length?(a=new Cm(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const m1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _1(n,e,t){let i=new Ad;const r=new Ge,s=new Ge,o=new dt,a=new mE({depthPacking:oM}),l=new gE,c={},u=t.maxTextureSize,f={[sr]:Tn,[Tn]:sr,[ii]:ii},d=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:m1,fragmentShader:g1}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Fn;g.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Mn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=D_;let h=this.type;this.render=function(C,T,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const M=n.getRenderTarget(),b=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),W=n.state;W.setBlending(br),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const F=h!==zi&&this.type===zi,k=h===zi&&this.type!==zi;for(let K=0,G=C.length;K<G;K++){const Z=C[K],$=Z.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const ce=$.getFrameExtents();if(r.multiply(ce),s.copy($.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ce.x),r.x=s.x*ce.x,$.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ce.y),r.y=s.y*ce.y,$.mapSize.y=s.y)),$.map===null||F===!0||k===!0){const Te=this.type!==zi?{minFilter:gn,magFilter:gn}:{};$.map!==null&&$.map.dispose(),$.map=new rs(r.x,r.y,Te),$.map.texture.name=Z.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const ve=$.getViewportCount();for(let Te=0;Te<ve;Te++){const ke=$.getViewport(Te);o.set(s.x*ke.x,s.y*ke.y,s.x*ke.z,s.y*ke.w),W.viewport(o),$.updateMatrices(Z,Te),i=$.getFrustum(),_(T,N,$.camera,Z,this.type)}$.isPointLightShadow!==!0&&this.type===zi&&S($,N),$.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(M,b,D)};function S(C,T){const N=e.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new rs(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(T,null,N,d,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(T,null,N,p,v,null)}function y(C,T,N,M){let b=null;const D=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)b=D;else if(b=N.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const W=b.uuid,F=T.uuid;let k=c[W];k===void 0&&(k={},c[W]=k);let K=k[F];K===void 0&&(K=b.clone(),k[F]=K,T.addEventListener("dispose",A)),b=K}if(b.visible=T.visible,b.wireframe=T.wireframe,M===zi?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:f[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,N.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const W=n.properties.get(b);W.light=N}return b}function _(C,T,N,M,b){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===zi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);const F=e.update(C),k=C.material;if(Array.isArray(k)){const K=F.groups;for(let G=0,Z=K.length;G<Z;G++){const $=K[G],ce=k[$.materialIndex];if(ce&&ce.visible){const ve=y(C,ce,M,b);C.onBeforeShadow(n,C,T,N,F,ve,$),n.renderBufferDirect(N,null,F,ve,C,$),C.onAfterShadow(n,C,T,N,F,ve,$)}}}else if(k.visible){const K=y(C,k,M,b);C.onBeforeShadow(n,C,T,N,F,K,null),n.renderBufferDirect(N,null,F,K,C,null),C.onAfterShadow(n,C,T,N,F,K,null)}}const W=C.children;for(let F=0,k=W.length;F<k;F++)_(W[F],T,N,M,b)}function A(C){C.target.removeEventListener("dispose",A);for(const N in c){const M=c[N],b=C.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}const v1={[Xu]:$u,[qu]:Ju,[Yu]:Zu,[Ws]:Ku,[$u]:Xu,[Ju]:qu,[Zu]:Yu,[Ku]:Ws};function x1(n,e){function t(){let V=!1;const Me=new dt;let fe=null;const Ie=new dt(0,0,0,0);return{setMask:function(he){fe!==he&&!V&&(n.colorMask(he,he,he,he),fe=he)},setLocked:function(he){V=he},setClear:function(he,oe,Ue,Ke,Lt){Lt===!0&&(he*=Ke,oe*=Ke,Ue*=Ke),Me.set(he,oe,Ue,Ke),Ie.equals(Me)===!1&&(n.clearColor(he,oe,Ue,Ke),Ie.copy(Me))},reset:function(){V=!1,fe=null,Ie.set(-1,0,0,0)}}}function i(){let V=!1,Me=!1,fe=null,Ie=null,he=null;return{setReversed:function(oe){if(Me!==oe){const Ue=e.get("EXT_clip_control");oe?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),Me=oe;const Ke=he;he=null,this.setClear(Ke)}},getReversed:function(){return Me},setTest:function(oe){oe?ge(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(oe){fe!==oe&&!V&&(n.depthMask(oe),fe=oe)},setFunc:function(oe){if(Me&&(oe=v1[oe]),Ie!==oe){switch(oe){case Xu:n.depthFunc(n.NEVER);break;case $u:n.depthFunc(n.ALWAYS);break;case qu:n.depthFunc(n.LESS);break;case Ws:n.depthFunc(n.LEQUAL);break;case Yu:n.depthFunc(n.EQUAL);break;case Ku:n.depthFunc(n.GEQUAL);break;case Ju:n.depthFunc(n.GREATER);break;case Zu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ie=oe}},setLocked:function(oe){V=oe},setClear:function(oe){he!==oe&&(Me&&(oe=1-oe),n.clearDepth(oe),he=oe)},reset:function(){V=!1,fe=null,Ie=null,he=null,Me=!1}}}function r(){let V=!1,Me=null,fe=null,Ie=null,he=null,oe=null,Ue=null,Ke=null,Lt=null;return{setTest:function(xt){V||(xt?ge(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(xt){Me!==xt&&!V&&(n.stencilMask(xt),Me=xt)},setFunc:function(xt,Jn,Ii){(fe!==xt||Ie!==Jn||he!==Ii)&&(n.stencilFunc(xt,Jn,Ii),fe=xt,Ie=Jn,he=Ii)},setOp:function(xt,Jn,Ii){(oe!==xt||Ue!==Jn||Ke!==Ii)&&(n.stencilOp(xt,Jn,Ii),oe=xt,Ue=Jn,Ke=Ii)},setLocked:function(xt){V=xt},setClear:function(xt){Lt!==xt&&(n.clearStencil(xt),Lt=xt)},reset:function(){V=!1,Me=null,fe=null,Ie=null,he=null,oe=null,Ue=null,Ke=null,Lt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],g=null,v=!1,m=null,h=null,S=null,y=null,_=null,A=null,C=null,T=new qe(0,0,0),N=0,M=!1,b=null,D=null,W=null,F=null,k=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Z=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec($)[1]),G=Z>=1):$.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),G=Z>=2);let ce=null,ve={};const Te=n.getParameter(n.SCISSOR_BOX),ke=n.getParameter(n.VIEWPORT),it=new dt().fromArray(Te),re=new dt().fromArray(ke);function de(V,Me,fe,Ie){const he=new Uint8Array(4),oe=n.createTexture();n.bindTexture(V,oe),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ue=0;Ue<fe;Ue++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(Me,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(Me+Ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return oe}const Ae={};Ae[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),Ae[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ae[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ge(n.DEPTH_TEST),o.setFunc(Ws),ee(!1),ne(hp),ge(n.CULL_FACE),w(br);function ge(V){u[V]!==!0&&(n.enable(V),u[V]=!0)}function we(V){u[V]!==!1&&(n.disable(V),u[V]=!1)}function tt(V,Me){return f[V]!==Me?(n.bindFramebuffer(V,Me),f[V]=Me,V===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Me),V===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Me),!0):!1}function Fe(V,Me){let fe=p,Ie=!1;if(V){fe=d.get(Me),fe===void 0&&(fe=[],d.set(Me,fe));const he=V.textures;if(fe.length!==he.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let oe=0,Ue=he.length;oe<Ue;oe++)fe[oe]=n.COLOR_ATTACHMENT0+oe;fe.length=he.length,Ie=!0}}else fe[0]!==n.BACK&&(fe[0]=n.BACK,Ie=!0);Ie&&n.drawBuffers(fe)}function ct(V){return g!==V?(n.useProgram(V),g=V,!0):!1}const U={[$r]:n.FUNC_ADD,[Lb]:n.FUNC_SUBTRACT,[Pb]:n.FUNC_REVERSE_SUBTRACT};U[Ib]=n.MIN,U[Db]=n.MAX;const B={[Nb]:n.ZERO,[Ub]:n.ONE,[Ob]:n.SRC_COLOR,[Wu]:n.SRC_ALPHA,[zb]:n.SRC_ALPHA_SATURATE,[Hb]:n.DST_COLOR,[Bb]:n.DST_ALPHA,[Fb]:n.ONE_MINUS_SRC_COLOR,[ju]:n.ONE_MINUS_SRC_ALPHA,[Vb]:n.ONE_MINUS_DST_COLOR,[kb]:n.ONE_MINUS_DST_ALPHA,[Gb]:n.CONSTANT_COLOR,[Wb]:n.ONE_MINUS_CONSTANT_COLOR,[jb]:n.CONSTANT_ALPHA,[Xb]:n.ONE_MINUS_CONSTANT_ALPHA};function w(V,Me,fe,Ie,he,oe,Ue,Ke,Lt,xt){if(V===br){v===!0&&(we(n.BLEND),v=!1);return}if(v===!1&&(ge(n.BLEND),v=!0),V!==Cb){if(V!==m||xt!==M){if((h!==$r||_!==$r)&&(n.blendEquation(n.FUNC_ADD),h=$r,_=$r),xt)switch(V){case Fs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pp:n.blendFunc(n.ONE,n.ONE);break;case mp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Fs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pp:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case mp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}S=null,y=null,A=null,C=null,T.set(0,0,0),N=0,m=V,M=xt}return}he=he||Me,oe=oe||fe,Ue=Ue||Ie,(Me!==h||he!==_)&&(n.blendEquationSeparate(U[Me],U[he]),h=Me,_=he),(fe!==S||Ie!==y||oe!==A||Ue!==C)&&(n.blendFuncSeparate(B[fe],B[Ie],B[oe],B[Ue]),S=fe,y=Ie,A=oe,C=Ue),(Ke.equals(T)===!1||Lt!==N)&&(n.blendColor(Ke.r,Ke.g,Ke.b,Lt),T.copy(Ke),N=Lt),m=V,M=!1}function se(V,Me){V.side===ii?we(n.CULL_FACE):ge(n.CULL_FACE);let fe=V.side===Tn;Me&&(fe=!fe),ee(fe),V.blending===Fs&&V.transparent===!1?w(br):w(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),s.setMask(V.colorWrite);const Ie=V.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),P(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function ee(V){b!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),b=V)}function ne(V){V!==Ab?(ge(n.CULL_FACE),V!==D&&(V===hp?n.cullFace(n.BACK):V===wb?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),D=V}function R(V){V!==W&&(G&&n.lineWidth(V),W=V)}function P(V,Me,fe){V?(ge(n.POLYGON_OFFSET_FILL),(F!==Me||k!==fe)&&(n.polygonOffset(Me,fe),F=Me,k=fe)):we(n.POLYGON_OFFSET_FILL)}function O(V){V?ge(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function H(V){V===void 0&&(V=n.TEXTURE0+K-1),ce!==V&&(n.activeTexture(V),ce=V)}function le(V,Me,fe){fe===void 0&&(ce===null?fe=n.TEXTURE0+K-1:fe=ce);let Ie=ve[fe];Ie===void 0&&(Ie={type:void 0,texture:void 0},ve[fe]=Ie),(Ie.type!==V||Ie.texture!==Me)&&(ce!==fe&&(n.activeTexture(fe),ce=fe),n.bindTexture(V,Me||Ae[V]),Ie.type=V,Ie.texture=Me)}function E(){const V=ve[ce];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function j(){try{n.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function J(){try{n.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ye(){try{n.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ue(){try{n.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function be(){try{n.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Re(){try{n.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ae(){try{n.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ce(V){it.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),it.copy(V))}function De(V){re.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),re.copy(V))}function Ne(V,Me){let fe=c.get(Me);fe===void 0&&(fe=new WeakMap,c.set(Me,fe));let Ie=fe.get(V);Ie===void 0&&(Ie=n.getUniformBlockIndex(Me,V.name),fe.set(V,Ie))}function xe(V,Me){const Ie=c.get(Me).get(V);l.get(Me)!==Ie&&(n.uniformBlockBinding(Me,Ie,V.__bindingPointIndex),l.set(Me,Ie))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ce=null,ve={},f={},d=new WeakMap,p=[],g=null,v=!1,m=null,h=null,S=null,y=null,_=null,A=null,C=null,T=new qe(0,0,0),N=0,M=!1,b=null,D=null,W=null,F=null,k=null,it.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ge,disable:we,bindFramebuffer:tt,drawBuffers:Fe,useProgram:ct,setBlending:w,setMaterial:se,setFlipSided:ee,setCullFace:ne,setLineWidth:R,setPolygonOffset:P,setScissorTest:O,activeTexture:H,bindTexture:le,unbindTexture:E,compressedTexImage2D:x,compressedTexImage3D:I,texImage2D:Re,texImage3D:ae,updateUBOMapping:Ne,uniformBlockBinding:xe,texStorage2D:ue,texStorage3D:be,texSubImage2D:j,texSubImage3D:J,compressedTexSubImage2D:Y,compressedTexSubImage3D:ye,scissor:Ce,viewport:De,reset:je}}function y1(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ge,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,x){return p?new OffscreenCanvas(E,x):oa("canvas")}function v(E,x,I){let j=1;const J=le(E);if((J.width>I||J.height>I)&&(j=I/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Y=Math.floor(j*J.width),ye=Math.floor(j*J.height);f===void 0&&(f=g(Y,ye));const ue=x?g(Y,ye):f;return ue.width=Y,ue.height=ye,ue.getContext("2d").drawImage(E,0,0,Y,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+ye+")."),ue}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),E;return E}function m(E){return E.generateMipmaps}function h(E){n.generateMipmap(E)}function S(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(E,x,I,j,J=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Y=x;if(x===n.RED&&(I===n.FLOAT&&(Y=n.R32F),I===n.HALF_FLOAT&&(Y=n.R16F),I===n.UNSIGNED_BYTE&&(Y=n.R8)),x===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(Y=n.R8UI),I===n.UNSIGNED_SHORT&&(Y=n.R16UI),I===n.UNSIGNED_INT&&(Y=n.R32UI),I===n.BYTE&&(Y=n.R8I),I===n.SHORT&&(Y=n.R16I),I===n.INT&&(Y=n.R32I)),x===n.RG&&(I===n.FLOAT&&(Y=n.RG32F),I===n.HALF_FLOAT&&(Y=n.RG16F),I===n.UNSIGNED_BYTE&&(Y=n.RG8)),x===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(Y=n.RG8UI),I===n.UNSIGNED_SHORT&&(Y=n.RG16UI),I===n.UNSIGNED_INT&&(Y=n.RG32UI),I===n.BYTE&&(Y=n.RG8I),I===n.SHORT&&(Y=n.RG16I),I===n.INT&&(Y=n.RG32I)),x===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),I===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),I===n.UNSIGNED_INT&&(Y=n.RGB32UI),I===n.BYTE&&(Y=n.RGB8I),I===n.SHORT&&(Y=n.RGB16I),I===n.INT&&(Y=n.RGB32I)),x===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),I===n.UNSIGNED_INT&&(Y=n.RGBA32UI),I===n.BYTE&&(Y=n.RGBA8I),I===n.SHORT&&(Y=n.RGBA16I),I===n.INT&&(Y=n.RGBA32I)),x===n.RGB&&I===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),x===n.RGBA){const ye=J?zl:lt.getTransfer(j);I===n.FLOAT&&(Y=n.RGBA32F),I===n.HALF_FLOAT&&(Y=n.RGBA16F),I===n.UNSIGNED_BYTE&&(Y=ye===Et?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function _(E,x){let I;return E?x===null||x===is||x===ta?I=n.DEPTH24_STENCIL8:x===ai?I=n.DEPTH32F_STENCIL8:x===ea&&(I=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===is||x===ta?I=n.DEPTH_COMPONENT24:x===ai?I=n.DEPTH_COMPONENT32F:x===ea&&(I=n.DEPTH_COMPONENT16),I}function A(E,x){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==gn&&E.minFilter!==Vt?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function C(E){const x=E.target;x.removeEventListener("dispose",C),N(x),x.isVideoTexture&&u.delete(x)}function T(E){const x=E.target;x.removeEventListener("dispose",T),b(x)}function N(E){const x=i.get(E);if(x.__webglInit===void 0)return;const I=E.source,j=d.get(I);if(j){const J=j[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(E),Object.keys(j).length===0&&d.delete(I)}i.remove(E)}function M(E){const x=i.get(E);n.deleteTexture(x.__webglTexture);const I=E.source,j=d.get(I);delete j[x.__cacheKey],o.memory.textures--}function b(E){const x=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let J=0;J<x.__webglFramebuffer[j].length;J++)n.deleteFramebuffer(x.__webglFramebuffer[j][J]);else n.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)n.deleteFramebuffer(x.__webglFramebuffer[j]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const I=E.textures;for(let j=0,J=I.length;j<J;j++){const Y=i.get(I[j]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(I[j])}i.remove(E)}let D=0;function W(){D=0}function F(){const E=D;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),D+=1,E}function k(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function K(E,x){const I=i.get(E);if(E.isVideoTexture&&O(E),E.isRenderTargetTexture===!1&&E.version>0&&I.__version!==E.version){const j=E.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(I,E,x);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+x)}function G(E,x){const I=i.get(E);if(E.version>0&&I.__version!==E.version){Ae(I,E,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+x)}function Z(E,x){const I=i.get(E);if(E.version>0&&I.__version!==E.version){Ae(I,E,x);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+x)}function $(E,x){const I=i.get(E);if(E.version>0&&I.__version!==E.version){ge(I,E,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+x)}const ce={[qn]:n.REPEAT,[yi]:n.CLAMP_TO_EDGE,[Vl]:n.MIRRORED_REPEAT},ve={[gn]:n.NEAREST,[O_]:n.NEAREST_MIPMAP_NEAREST,[Ro]:n.NEAREST_MIPMAP_LINEAR,[Vt]:n.LINEAR,[ml]:n.LINEAR_MIPMAP_NEAREST,[Yi]:n.LINEAR_MIPMAP_LINEAR},Te={[lM]:n.NEVER,[pM]:n.ALWAYS,[cM]:n.LESS,[X_]:n.LEQUAL,[uM]:n.EQUAL,[hM]:n.GEQUAL,[fM]:n.GREATER,[dM]:n.NOTEQUAL};function ke(E,x){if(x.type===ai&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Vt||x.magFilter===ml||x.magFilter===Ro||x.magFilter===Yi||x.minFilter===Vt||x.minFilter===ml||x.minFilter===Ro||x.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,ce[x.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ce[x.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ce[x.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ve[x.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ve[x.minFilter]),x.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Te[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===gn||x.minFilter!==Ro&&x.minFilter!==Yi||x.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function it(E,x){let I=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",C));const j=x.source;let J=d.get(j);J===void 0&&(J={},d.set(j,J));const Y=k(x);if(Y!==E.__cacheKey){J[Y]===void 0&&(J[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),J[Y].usedTimes++;const ye=J[E.__cacheKey];ye!==void 0&&(J[E.__cacheKey].usedTimes--,ye.usedTimes===0&&M(x)),E.__cacheKey=Y,E.__webglTexture=J[Y].texture}return I}function re(E,x,I){return Math.floor(Math.floor(E/I)/x)}function de(E,x,I,j){const Y=E.updateRanges;if(Y.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,I,j,x.data);else{Y.sort((ae,Ce)=>ae.start-Ce.start);let ye=0;for(let ae=1;ae<Y.length;ae++){const Ce=Y[ye],De=Y[ae],Ne=Ce.start+Ce.count,xe=re(De.start,x.width,4),je=re(Ce.start,x.width,4);De.start<=Ne+1&&xe===je&&re(De.start+De.count-1,x.width,4)===xe?Ce.count=Math.max(Ce.count,De.start+De.count-Ce.start):(++ye,Y[ye]=De)}Y.length=ye+1;const ue=n.getParameter(n.UNPACK_ROW_LENGTH),be=n.getParameter(n.UNPACK_SKIP_PIXELS),Re=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let ae=0,Ce=Y.length;ae<Ce;ae++){const De=Y[ae],Ne=Math.floor(De.start/4),xe=Math.ceil(De.count/4),je=Ne%x.width,V=Math.floor(Ne/x.width),Me=xe,fe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,je),n.pixelStorei(n.UNPACK_SKIP_ROWS,V),t.texSubImage2D(n.TEXTURE_2D,0,je,V,Me,fe,I,j,x.data)}E.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ue),n.pixelStorei(n.UNPACK_SKIP_PIXELS,be),n.pixelStorei(n.UNPACK_SKIP_ROWS,Re)}}function Ae(E,x,I){let j=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=n.TEXTURE_3D);const J=it(E,x),Y=x.source;t.bindTexture(j,E.__webglTexture,n.TEXTURE0+I);const ye=i.get(Y);if(Y.version!==ye.__version||J===!0){t.activeTexture(n.TEXTURE0+I);const ue=lt.getPrimaries(lt.workingColorSpace),be=x.colorSpace===xr?null:lt.getPrimaries(x.colorSpace),Re=x.colorSpace===xr||ue===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let ae=v(x.image,!1,r.maxTextureSize);ae=H(x,ae);const Ce=s.convert(x.format,x.colorSpace),De=s.convert(x.type);let Ne=y(x.internalFormat,Ce,De,x.colorSpace,x.isVideoTexture);ke(j,x);let xe;const je=x.mipmaps,V=x.isVideoTexture!==!0,Me=ye.__version===void 0||J===!0,fe=Y.dataReady,Ie=A(x,ae);if(x.isDepthTexture)Ne=_(x.format===ia,x.type),Me&&(V?t.texStorage2D(n.TEXTURE_2D,1,Ne,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Ne,ae.width,ae.height,0,Ce,De,null));else if(x.isDataTexture)if(je.length>0){V&&Me&&t.texStorage2D(n.TEXTURE_2D,Ie,Ne,je[0].width,je[0].height);for(let he=0,oe=je.length;he<oe;he++)xe=je[he],V?fe&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,xe.width,xe.height,Ce,De,xe.data):t.texImage2D(n.TEXTURE_2D,he,Ne,xe.width,xe.height,0,Ce,De,xe.data);x.generateMipmaps=!1}else V?(Me&&t.texStorage2D(n.TEXTURE_2D,Ie,Ne,ae.width,ae.height),fe&&de(x,ae,Ce,De)):t.texImage2D(n.TEXTURE_2D,0,Ne,ae.width,ae.height,0,Ce,De,ae.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){V&&Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Ne,je[0].width,je[0].height,ae.depth);for(let he=0,oe=je.length;he<oe;he++)if(xe=je[he],x.format!==Wn)if(Ce!==null)if(V){if(fe)if(x.layerUpdates.size>0){const Ue=sm(xe.width,xe.height,x.format,x.type);for(const Ke of x.layerUpdates){const Lt=xe.data.subarray(Ke*Ue/xe.data.BYTES_PER_ELEMENT,(Ke+1)*Ue/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,Ke,xe.width,xe.height,1,Ce,Lt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,xe.width,xe.height,ae.depth,Ce,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,Ne,xe.width,xe.height,ae.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?fe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,xe.width,xe.height,ae.depth,Ce,De,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,Ne,xe.width,xe.height,ae.depth,0,Ce,De,xe.data)}else{V&&Me&&t.texStorage2D(n.TEXTURE_2D,Ie,Ne,je[0].width,je[0].height);for(let he=0,oe=je.length;he<oe;he++)xe=je[he],x.format!==Wn?Ce!==null?V?fe&&t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,xe.width,xe.height,Ce,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,he,Ne,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?fe&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,xe.width,xe.height,Ce,De,xe.data):t.texImage2D(n.TEXTURE_2D,he,Ne,xe.width,xe.height,0,Ce,De,xe.data)}else if(x.isDataArrayTexture)if(V){if(Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Ne,ae.width,ae.height,ae.depth),fe)if(x.layerUpdates.size>0){const he=sm(ae.width,ae.height,x.format,x.type);for(const oe of x.layerUpdates){const Ue=ae.data.subarray(oe*he/ae.data.BYTES_PER_ELEMENT,(oe+1)*he/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,oe,ae.width,ae.height,1,Ce,De,Ue)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Ce,De,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,ae.width,ae.height,ae.depth,0,Ce,De,ae.data);else if(x.isData3DTexture)V?(Me&&t.texStorage3D(n.TEXTURE_3D,Ie,Ne,ae.width,ae.height,ae.depth),fe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Ce,De,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,ae.width,ae.height,ae.depth,0,Ce,De,ae.data);else if(x.isFramebufferTexture){if(Me)if(V)t.texStorage2D(n.TEXTURE_2D,Ie,Ne,ae.width,ae.height);else{let he=ae.width,oe=ae.height;for(let Ue=0;Ue<Ie;Ue++)t.texImage2D(n.TEXTURE_2D,Ue,Ne,he,oe,0,Ce,De,null),he>>=1,oe>>=1}}else if(je.length>0){if(V&&Me){const he=le(je[0]);t.texStorage2D(n.TEXTURE_2D,Ie,Ne,he.width,he.height)}for(let he=0,oe=je.length;he<oe;he++)xe=je[he],V?fe&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Ce,De,xe):t.texImage2D(n.TEXTURE_2D,he,Ne,Ce,De,xe);x.generateMipmaps=!1}else if(V){if(Me){const he=le(ae);t.texStorage2D(n.TEXTURE_2D,Ie,Ne,he.width,he.height)}fe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ce,De,ae)}else t.texImage2D(n.TEXTURE_2D,0,Ne,Ce,De,ae);m(x)&&h(j),ye.__version=Y.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function ge(E,x,I){if(x.image.length!==6)return;const j=it(E,x),J=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+I);const Y=i.get(J);if(J.version!==Y.__version||j===!0){t.activeTexture(n.TEXTURE0+I);const ye=lt.getPrimaries(lt.workingColorSpace),ue=x.colorSpace===xr?null:lt.getPrimaries(x.colorSpace),be=x.colorSpace===xr||ye===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Re=x.isCompressedTexture||x.image[0].isCompressedTexture,ae=x.image[0]&&x.image[0].isDataTexture,Ce=[];for(let oe=0;oe<6;oe++)!Re&&!ae?Ce[oe]=v(x.image[oe],!0,r.maxCubemapSize):Ce[oe]=ae?x.image[oe].image:x.image[oe],Ce[oe]=H(x,Ce[oe]);const De=Ce[0],Ne=s.convert(x.format,x.colorSpace),xe=s.convert(x.type),je=y(x.internalFormat,Ne,xe,x.colorSpace),V=x.isVideoTexture!==!0,Me=Y.__version===void 0||j===!0,fe=J.dataReady;let Ie=A(x,De);ke(n.TEXTURE_CUBE_MAP,x);let he;if(Re){V&&Me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,je,De.width,De.height);for(let oe=0;oe<6;oe++){he=Ce[oe].mipmaps;for(let Ue=0;Ue<he.length;Ue++){const Ke=he[Ue];x.format!==Wn?Ne!==null?V?fe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue,0,0,Ke.width,Ke.height,Ne,Ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue,je,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue,0,0,Ke.width,Ke.height,Ne,xe,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue,je,Ke.width,Ke.height,0,Ne,xe,Ke.data)}}}else{if(he=x.mipmaps,V&&Me){he.length>0&&Ie++;const oe=le(Ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,je,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(ae){V?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ce[oe].width,Ce[oe].height,Ne,xe,Ce[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,je,Ce[oe].width,Ce[oe].height,0,Ne,xe,Ce[oe].data);for(let Ue=0;Ue<he.length;Ue++){const Lt=he[Ue].image[oe].image;V?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue+1,0,0,Lt.width,Lt.height,Ne,xe,Lt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue+1,je,Lt.width,Lt.height,0,Ne,xe,Lt.data)}}else{V?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ne,xe,Ce[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,je,Ne,xe,Ce[oe]);for(let Ue=0;Ue<he.length;Ue++){const Ke=he[Ue];V?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue+1,0,0,Ne,xe,Ke.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue+1,je,Ne,xe,Ke.image[oe])}}}m(x)&&h(n.TEXTURE_CUBE_MAP),Y.__version=J.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function we(E,x,I,j,J,Y){const ye=s.convert(I.format,I.colorSpace),ue=s.convert(I.type),be=y(I.internalFormat,ye,ue,I.colorSpace),Re=i.get(x),ae=i.get(I);if(ae.__renderTarget=x,!Re.__hasExternalTextures){const Ce=Math.max(1,x.width>>Y),De=Math.max(1,x.height>>Y);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,Y,be,Ce,De,x.depth,0,ye,ue,null):t.texImage2D(J,Y,be,Ce,De,0,ye,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),P(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,J,ae.__webglTexture,0,R(x)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,J,ae.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function tt(E,x,I){if(n.bindRenderbuffer(n.RENDERBUFFER,E),x.depthBuffer){const j=x.depthTexture,J=j&&j.isDepthTexture?j.type:null,Y=_(x.stencilBuffer,J),ye=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=R(x);P(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,Y,x.width,x.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,Y,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Y,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,E)}else{const j=x.textures;for(let J=0;J<j.length;J++){const Y=j[J],ye=s.convert(Y.format,Y.colorSpace),ue=s.convert(Y.type),be=y(Y.internalFormat,ye,ue,Y.colorSpace),Re=R(x);I&&P(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,be,x.width,x.height):P(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re,be,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,be,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Fe(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(x.depthTexture);j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);const J=j.__webglTexture,Y=R(x);if(x.depthTexture.format===na)P(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(x.depthTexture.format===ia)P(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function ct(E){const x=i.get(E),I=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){const j=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=j}if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const j=E.texture.mipmaps;j&&j.length>0?Fe(x.__webglFramebuffer[0],E):Fe(x.__webglFramebuffer,E)}else if(I){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=n.createRenderbuffer(),tt(x.__webglDepthbuffer[j],E,!1);else{const J=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,Y)}}else{const j=E.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),tt(x.__webglDepthbuffer,E,!1);else{const J=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,Y)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function U(E,x,I){const j=i.get(E);x!==void 0&&we(j.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&ct(E)}function B(E){const x=E.texture,I=i.get(E),j=i.get(x);E.addEventListener("dispose",T);const J=E.textures,Y=E.isWebGLCubeRenderTarget===!0,ye=J.length>1;if(ye||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=x.version,o.memory.textures++),Y){I.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer[ue]=[];for(let be=0;be<x.mipmaps.length;be++)I.__webglFramebuffer[ue][be]=n.createFramebuffer()}else I.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer=[];for(let ue=0;ue<x.mipmaps.length;ue++)I.__webglFramebuffer[ue]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(ye)for(let ue=0,be=J.length;ue<be;ue++){const Re=i.get(J[ue]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&P(E)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ue=0;ue<J.length;ue++){const be=J[ue];I.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[ue]);const Re=s.convert(be.format,be.colorSpace),ae=s.convert(be.type),Ce=y(be.internalFormat,Re,ae,be.colorSpace,E.isXRRenderTarget===!0),De=R(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Ce,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,I.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),tt(I.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),ke(n.TEXTURE_CUBE_MAP,x);for(let ue=0;ue<6;ue++)if(x.mipmaps&&x.mipmaps.length>0)for(let be=0;be<x.mipmaps.length;be++)we(I.__webglFramebuffer[ue][be],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,be);else we(I.__webglFramebuffer[ue],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(x)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let ue=0,be=J.length;ue<be;ue++){const Re=J[ue],ae=i.get(Re);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),ke(n.TEXTURE_2D,Re),we(I.__webglFramebuffer,E,Re,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),m(Re)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ue=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,j.__webglTexture),ke(ue,x),x.mipmaps&&x.mipmaps.length>0)for(let be=0;be<x.mipmaps.length;be++)we(I.__webglFramebuffer[be],E,x,n.COLOR_ATTACHMENT0,ue,be);else we(I.__webglFramebuffer,E,x,n.COLOR_ATTACHMENT0,ue,0);m(x)&&h(ue),t.unbindTexture()}E.depthBuffer&&ct(E)}function w(E){const x=E.textures;for(let I=0,j=x.length;I<j;I++){const J=x[I];if(m(J)){const Y=S(E),ye=i.get(J).__webglTexture;t.bindTexture(Y,ye),h(Y),t.unbindTexture()}}}const se=[],ee=[];function ne(E){if(E.samples>0){if(P(E)===!1){const x=E.textures,I=E.width,j=E.height;let J=n.COLOR_BUFFER_BIT;const Y=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(E),ue=x.length>1;if(ue)for(let Re=0;Re<x.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const be=E.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Re=0;Re<x.length;Re++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Re]);const ae=i.get(x[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ae,0)}n.blitFramebuffer(0,0,I,j,0,0,I,j,J,n.NEAREST),l===!0&&(se.length=0,ee.length=0,se.push(n.COLOR_ATTACHMENT0+Re),E.depthBuffer&&E.resolveDepthBuffer===!1&&(se.push(Y),ee.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ee)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let Re=0;Re<x.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Re]);const ae=i.get(x[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const x=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function R(E){return Math.min(r.maxSamples,E.samples)}function P(E){const x=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function O(E){const x=o.render.frame;u.get(E)!==x&&(u.set(E,x),E.update())}function H(E,x){const I=E.colorSpace,j=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||I!==xn&&I!==xr&&(lt.getTransfer(I)===Et?(j!==Wn||J!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),x}function le(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=W,this.setTexture2D=K,this.setTexture2DArray=G,this.setTexture3D=Z,this.setTextureCube=$,this.rebindTextures=U,this.setupRenderTarget=B,this.updateRenderTargetMipmap=w,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=we,this.useMultisampledRTT=P}function S1(n,e){function t(i,r=xr){let s;const o=lt.getTransfer(r);if(i===wi)return n.UNSIGNED_BYTE;if(i===pd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===md)return n.UNSIGNED_SHORT_5_5_5_1;if(i===k_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===F_)return n.BYTE;if(i===B_)return n.SHORT;if(i===ea)return n.UNSIGNED_SHORT;if(i===hd)return n.INT;if(i===is)return n.UNSIGNED_INT;if(i===ai)return n.FLOAT;if(i===ga)return n.HALF_FLOAT;if(i===H_)return n.ALPHA;if(i===V_)return n.RGB;if(i===Wn)return n.RGBA;if(i===na)return n.DEPTH_COMPONENT;if(i===ia)return n.DEPTH_STENCIL;if(i===gd)return n.RED;if(i===_d)return n.RED_INTEGER;if(i===z_)return n.RG;if(i===vd)return n.RG_INTEGER;if(i===xd)return n.RGBA_INTEGER;if(i===gl||i===_l||i===vl||i===xl)if(o===Et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===gl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_l)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===gl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_l)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tf||i===nf||i===rf||i===sf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===tf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===of||i===af||i===lf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===of||i===af)return o===Et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===lf)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===cf||i===uf||i===ff||i===df||i===hf||i===pf||i===mf||i===gf||i===_f||i===vf||i===xf||i===yf||i===Sf||i===bf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===cf)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===uf)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ff)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===df)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hf)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pf)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mf)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gf)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_f)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vf)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xf)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yf)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sf)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bf)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yl||i===Mf||i===Ef)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===yl)return o===Et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ef)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===G_||i===Tf||i===Af||i===wf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===yl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Tf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Af)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ta?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const b1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class E1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new $t,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ri({vertexShader:b1,fragmentShader:M1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mn(new io(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class T1 extends no{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,g=null;const v=new E1,m=t.getContextAttributes();let h=null,S=null;const y=[],_=[],A=new Ge;let C=null;const T=new on;T.viewport=new dt;const N=new on;N.viewport=new dt;const M=[T,N],b=new FE;let D=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let de=y[re];return de===void 0&&(de=new Jc,y[re]=de),de.getTargetRaySpace()},this.getControllerGrip=function(re){let de=y[re];return de===void 0&&(de=new Jc,y[re]=de),de.getGripSpace()},this.getHand=function(re){let de=y[re];return de===void 0&&(de=new Jc,y[re]=de),de.getHandSpace()};function F(re){const de=_.indexOf(re.inputSource);if(de===-1)return;const Ae=y[de];Ae!==void 0&&(Ae.update(re.inputSource,re.frame,c||o),Ae.dispatchEvent({type:re.type,data:re.inputSource}))}function k(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",K);for(let re=0;re<y.length;re++){const de=_[re];de!==null&&(_[re]=null,y[re].disconnect(de))}D=null,W=null,v.reset(),e.setRenderTarget(h),p=null,d=null,f=null,r=null,S=null,it.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",k),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,ge=null,we=null;m.depth&&(we=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=m.stencil?ia:na,ge=m.stencil?ta:is);const tt={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(tt),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new rs(d.textureWidth,d.textureHeight,{format:Wn,type:wi,depthTexture:new ov(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Ae),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new rs(p.framebufferWidth,p.framebufferHeight,{format:Wn,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),it.setContext(r),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(re){for(let de=0;de<re.removed.length;de++){const Ae=re.removed[de],ge=_.indexOf(Ae);ge>=0&&(_[ge]=null,y[ge].disconnect(Ae))}for(let de=0;de<re.added.length;de++){const Ae=re.added[de];let ge=_.indexOf(Ae);if(ge===-1){for(let tt=0;tt<y.length;tt++)if(tt>=_.length){_.push(Ae),ge=tt;break}else if(_[tt]===null){_[tt]=Ae,ge=tt;break}if(ge===-1)break}const we=y[ge];we&&we.connect(Ae)}}const G=new z,Z=new z;function $(re,de,Ae){G.setFromMatrixPosition(de.matrixWorld),Z.setFromMatrixPosition(Ae.matrixWorld);const ge=G.distanceTo(Z),we=de.projectionMatrix.elements,tt=Ae.projectionMatrix.elements,Fe=we[14]/(we[10]-1),ct=we[14]/(we[10]+1),U=(we[9]+1)/we[5],B=(we[9]-1)/we[5],w=(we[8]-1)/we[0],se=(tt[8]+1)/tt[0],ee=Fe*w,ne=Fe*se,R=ge/(-w+se),P=R*-w;if(de.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(P),re.translateZ(R),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),we[10]===-1)re.projectionMatrix.copy(de.projectionMatrix),re.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const O=Fe+R,H=ct+R,le=ee-P,E=ne+(ge-P),x=U*ct/H*O,I=B*ct/H*O;re.projectionMatrix.makePerspective(le,E,x,I,O,H),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function ce(re,de){de===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(de.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let de=re.near,Ae=re.far;v.texture!==null&&(v.depthNear>0&&(de=v.depthNear),v.depthFar>0&&(Ae=v.depthFar)),b.near=N.near=T.near=de,b.far=N.far=T.far=Ae,(D!==b.near||W!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),D=b.near,W=b.far),T.layers.mask=re.layers.mask|2,N.layers.mask=re.layers.mask|4,b.layers.mask=T.layers.mask|N.layers.mask;const ge=re.parent,we=b.cameras;ce(b,ge);for(let tt=0;tt<we.length;tt++)ce(we[tt],ge);we.length===2?$(b,T,N):b.projectionMatrix.copy(T.projectionMatrix),ve(re,b,ge)};function ve(re,de,Ae){Ae===null?re.matrix.copy(de.matrixWorld):(re.matrix.copy(Ae.matrixWorld),re.matrix.invert(),re.matrix.multiply(de.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(de.projectionMatrix),re.projectionMatrixInverse.copy(de.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=$s*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(re){l=re,d!==null&&(d.fixedFoveation=re),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=re)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let Te=null;function ke(re,de){if(u=de.getViewerPose(c||o),g=de,u!==null){const Ae=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let ge=!1;Ae.length!==b.cameras.length&&(b.cameras.length=0,ge=!0);for(let Fe=0;Fe<Ae.length;Fe++){const ct=Ae[Fe];let U=null;if(p!==null)U=p.getViewport(ct);else{const w=f.getViewSubImage(d,ct);U=w.viewport,Fe===0&&(e.setRenderTargetTextures(S,w.colorTexture,w.depthStencilTexture),e.setRenderTarget(S))}let B=M[Fe];B===void 0&&(B=new on,B.layers.enable(Fe),B.viewport=new dt,M[Fe]=B),B.matrix.fromArray(ct.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(ct.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(U.x,U.y,U.width,U.height),Fe===0&&(b.matrix.copy(B.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ge===!0&&b.cameras.push(B)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const Fe=f.getDepthInformation(Ae[0]);Fe&&Fe.isValid&&Fe.texture&&v.init(e,Fe,r.renderState)}}for(let Ae=0;Ae<y.length;Ae++){const ge=_[Ae],we=y[Ae];ge!==null&&we!==void 0&&we.update(ge,de,c||o)}Te&&Te(re,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),g=null}const it=new uv;it.setAnimationLoop(ke),this.setAnimationLoop=function(re){Te=re},this.dispose=function(){}}}const kr=new fi,A1=new Qe;function w1(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Q_(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,S,y,_){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,_)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),v(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,S,y):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Tn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Tn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const S=e.get(h),y=S.envMap,_=S.envMapRotation;y&&(m.envMap.value=y,kr.copy(_),kr.x*=-1,kr.y*=-1,kr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),m.envMapRotation.value.setFromMatrix4(A1.makeRotationFromEuler(kr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,S,y){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*S,m.scale.value=y*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,S){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Tn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const S=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function R1(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const _=y.program;i.uniformBlockBinding(S,_)}function c(S,y){let _=r[S.id];_===void 0&&(g(S),_=u(S),r[S.id]=_,S.addEventListener("dispose",m));const A=y.program;i.updateUBOMapping(S,A);const C=e.render.frame;s[S.id]!==C&&(d(S),s[S.id]=C)}function u(S){const y=f();S.__bindingPointIndex=y;const _=n.createBuffer(),A=S.__size,C=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,A,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,_),_}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const y=r[S.id],_=S.uniforms,A=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let C=0,T=_.length;C<T;C++){const N=Array.isArray(_[C])?_[C]:[_[C]];for(let M=0,b=N.length;M<b;M++){const D=N[M];if(p(D,C,M,A)===!0){const W=D.__offset,F=Array.isArray(D.value)?D.value:[D.value];let k=0;for(let K=0;K<F.length;K++){const G=F[K],Z=v(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,W+k,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):(G.toArray(D.__data,k),k+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(S,y,_,A){const C=S.value,T=y+"_"+_;if(A[T]===void 0)return typeof C=="number"||typeof C=="boolean"?A[T]=C:A[T]=C.clone(),!0;{const N=A[T];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return A[T]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function g(S){const y=S.uniforms;let _=0;const A=16;for(let T=0,N=y.length;T<N;T++){const M=Array.isArray(y[T])?y[T]:[y[T]];for(let b=0,D=M.length;b<D;b++){const W=M[b],F=Array.isArray(W.value)?W.value:[W.value];for(let k=0,K=F.length;k<K;k++){const G=F[k],Z=v(G),$=_%A,ce=$%Z.boundary,ve=$+ce;_+=ce,ve!==0&&A-ve<Z.storage&&(_+=A-ve),W.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=_,_+=Z.storage}}}const C=_%A;return C>0&&(_+=A-C),S.__size=_,S.__cache={},this}function v(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function h(){for(const S in r)n.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class mv{constructor(e={}){const{canvas:t=PM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,h=null;const S=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let A=!1;this._outputColorSpace=Yt;let C=0,T=0,N=null,M=-1,b=null;const D=new dt,W=new dt;let F=null;const k=new qe(0);let K=0,G=t.width,Z=t.height,$=1,ce=null,ve=null;const Te=new dt(0,0,G,Z),ke=new dt(0,0,G,Z);let it=!1;const re=new Ad;let de=!1,Ae=!1;const ge=new Qe,we=new Qe,tt=new z,Fe=new dt,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let U=!1;function B(){return N===null?$:1}let w=i;function se(L,X){return t.getContext(L,X)}try{const L={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${dd}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",oe,!1),w===null){const X="webgl2";if(w=se(X,L),w===null)throw se(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let ee,ne,R,P,O,H,le,E,x,I,j,J,Y,ye,ue,be,Re,ae,Ce,De,Ne,xe,je,V;function Me(){ee=new kw(w),ee.init(),xe=new S1(w,ee),ne=new Iw(w,ee,e,xe),R=new x1(w,ee),ne.reverseDepthBuffer&&d&&R.buffers.depth.setReversed(!0),P=new zw(w),O=new o1,H=new y1(w,ee,R,O,ne,xe,P),le=new Nw(_),E=new Bw(_),x=new qE(w),je=new Lw(w,x),I=new Hw(w,x,P,je),j=new Ww(w,I,x,P),Ce=new Gw(w,ne,H),be=new Dw(O),J=new s1(_,le,E,ee,ne,je,be),Y=new w1(_,O),ye=new l1,ue=new p1(ee),ae=new Cw(_,le,E,R,j,p,l),Re=new _1(_,j,ne),V=new R1(w,P,ne,R),De=new Pw(w,ee,P),Ne=new Vw(w,ee,P),P.programs=J.programs,_.capabilities=ne,_.extensions=ee,_.properties=O,_.renderLists=ye,_.shadowMap=Re,_.state=R,_.info=P}Me();const fe=new T1(_,w);this.xr=fe,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const L=ee.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=ee.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(L){L!==void 0&&($=L,this.setSize(G,Z,!1))},this.getSize=function(L){return L.set(G,Z)},this.setSize=function(L,X,Q=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=L,Z=X,t.width=Math.floor(L*$),t.height=Math.floor(X*$),Q===!0&&(t.style.width=L+"px",t.style.height=X+"px"),this.setViewport(0,0,L,X)},this.getDrawingBufferSize=function(L){return L.set(G*$,Z*$).floor()},this.setDrawingBufferSize=function(L,X,Q){G=L,Z=X,$=Q,t.width=Math.floor(L*Q),t.height=Math.floor(X*Q),this.setViewport(0,0,L,X)},this.getCurrentViewport=function(L){return L.copy(D)},this.getViewport=function(L){return L.copy(Te)},this.setViewport=function(L,X,Q,te){L.isVector4?Te.set(L.x,L.y,L.z,L.w):Te.set(L,X,Q,te),R.viewport(D.copy(Te).multiplyScalar($).round())},this.getScissor=function(L){return L.copy(ke)},this.setScissor=function(L,X,Q,te){L.isVector4?ke.set(L.x,L.y,L.z,L.w):ke.set(L,X,Q,te),R.scissor(W.copy(ke).multiplyScalar($).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(L){R.setScissorTest(it=L)},this.setOpaqueSort=function(L){ce=L},this.setTransparentSort=function(L){ve=L},this.getClearColor=function(L){return L.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(L=!0,X=!0,Q=!0){let te=0;if(L){let q=!1;if(N!==null){const pe=N.texture.format;q=pe===xd||pe===vd||pe===_d}if(q){const pe=N.texture.type,Ee=pe===wi||pe===is||pe===ea||pe===ta||pe===pd||pe===md,Oe=ae.getClearColor(),Pe=ae.getClearAlpha(),Xe=Oe.r,Ye=Oe.g,He=Oe.b;Ee?(g[0]=Xe,g[1]=Ye,g[2]=He,g[3]=Pe,w.clearBufferuiv(w.COLOR,0,g)):(v[0]=Xe,v[1]=Ye,v[2]=He,v[3]=Pe,w.clearBufferiv(w.COLOR,0,v))}else te|=w.COLOR_BUFFER_BIT}X&&(te|=w.DEPTH_BUFFER_BIT),Q&&(te|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),ae.dispose(),ye.dispose(),ue.dispose(),O.dispose(),le.dispose(),E.dispose(),j.dispose(),je.dispose(),V.dispose(),J.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Wd),fe.removeEventListener("sessionend",jd),Lr.stop()};function Ie(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const L=P.autoReset,X=Re.enabled,Q=Re.autoUpdate,te=Re.needsUpdate,q=Re.type;Me(),P.autoReset=L,Re.enabled=X,Re.autoUpdate=Q,Re.needsUpdate=te,Re.type=q}function oe(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Ue(L){const X=L.target;X.removeEventListener("dispose",Ue),Ke(X)}function Ke(L){Lt(L),O.remove(L)}function Lt(L){const X=O.get(L).programs;X!==void 0&&(X.forEach(function(Q){J.releaseProgram(Q)}),L.isShaderMaterial&&J.releaseShaderCache(L))}this.renderBufferDirect=function(L,X,Q,te,q,pe){X===null&&(X=ct);const Ee=q.isMesh&&q.matrixWorld.determinant()<0,Oe=Bv(L,X,Q,te,q);R.setMaterial(te,Ee);let Pe=Q.index,Xe=1;if(te.wireframe===!0){if(Pe=I.getWireframeAttribute(Q),Pe===void 0)return;Xe=2}const Ye=Q.drawRange,He=Q.attributes.position;let at=Ye.start*Xe,yt=(Ye.start+Ye.count)*Xe;pe!==null&&(at=Math.max(at,pe.start*Xe),yt=Math.min(yt,(pe.start+pe.count)*Xe)),Pe!==null?(at=Math.max(at,0),yt=Math.min(yt,Pe.count)):He!=null&&(at=Math.max(at,0),yt=Math.min(yt,He.count));const Dt=yt-at;if(Dt<0||Dt===1/0)return;je.setup(q,te,Oe,Q,Pe);let Ot,ut=De;if(Pe!==null&&(Ot=x.get(Pe),ut=Ne,ut.setIndex(Ot)),q.isMesh)te.wireframe===!0?(R.setLineWidth(te.wireframeLinewidth*B()),ut.setMode(w.LINES)):ut.setMode(w.TRIANGLES);else if(q.isLine){let Ve=te.linewidth;Ve===void 0&&(Ve=1),R.setLineWidth(Ve*B()),q.isLineSegments?ut.setMode(w.LINES):q.isLineLoop?ut.setMode(w.LINE_LOOP):ut.setMode(w.LINE_STRIP)}else q.isPoints?ut.setMode(w.POINTS):q.isSprite&&ut.setMode(w.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Bs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))ut.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ve=q._multiDrawStarts,qt=q._multiDrawCounts,pt=q._multiDrawCount,Zn=Pe?x.get(Pe).bytesPerElement:1,as=O.get(te).currentProgram.getUniforms();for(let Ln=0;Ln<pt;Ln++)as.setValue(w,"_gl_DrawID",Ln),ut.render(Ve[Ln]/Zn,qt[Ln])}else if(q.isInstancedMesh)ut.renderInstances(at,Dt,q.count);else if(Q.isInstancedBufferGeometry){const Ve=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,qt=Math.min(Q.instanceCount,Ve);ut.renderInstances(at,Dt,qt)}else ut.render(at,Dt)};function xt(L,X,Q){L.transparent===!0&&L.side===ii&&L.forceSinglePass===!1?(L.side=Tn,L.needsUpdate=!0,Ea(L,X,Q),L.side=sr,L.needsUpdate=!0,Ea(L,X,Q),L.side=ii):Ea(L,X,Q)}this.compile=function(L,X,Q=null){Q===null&&(Q=L),h=ue.get(Q),h.init(X),y.push(h),Q.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(h.pushLight(q),q.castShadow&&h.pushShadow(q))}),L!==Q&&L.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(h.pushLight(q),q.castShadow&&h.pushShadow(q))}),h.setupLights();const te=new Set;return L.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const pe=q.material;if(pe)if(Array.isArray(pe))for(let Ee=0;Ee<pe.length;Ee++){const Oe=pe[Ee];xt(Oe,Q,q),te.add(Oe)}else xt(pe,Q,q),te.add(pe)}),h=y.pop(),te},this.compileAsync=function(L,X,Q=null){const te=this.compile(L,X,Q);return new Promise(q=>{function pe(){if(te.forEach(function(Ee){O.get(Ee).currentProgram.isReady()&&te.delete(Ee)}),te.size===0){q(L);return}setTimeout(pe,10)}ee.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Jn=null;function Ii(L){Jn&&Jn(L)}function Wd(){Lr.stop()}function jd(){Lr.start()}const Lr=new uv;Lr.setAnimationLoop(Ii),typeof self<"u"&&Lr.setContext(self),this.setAnimationLoop=function(L){Jn=L,fe.setAnimationLoop(L),L===null?Lr.stop():Lr.start()},fe.addEventListener("sessionstart",Wd),fe.addEventListener("sessionend",jd),this.render=function(L,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(X),X=fe.getCamera()),L.isScene===!0&&L.onBeforeRender(_,L,X,N),h=ue.get(L,y.length),h.init(X),y.push(h),we.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),re.setFromProjectionMatrix(we),Ae=this.localClippingEnabled,de=be.init(this.clippingPlanes,Ae),m=ye.get(L,S.length),m.init(),S.push(m),fe.enabled===!0&&fe.isPresenting===!0){const pe=_.xr.getDepthSensingMesh();pe!==null&&mc(pe,X,-1/0,_.sortObjects)}mc(L,X,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ce,ve),U=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,U&&ae.addToRenderList(m,L),this.info.render.frame++,de===!0&&be.beginShadows();const Q=h.state.shadowsArray;Re.render(Q,L,X),de===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=m.opaque,q=m.transmissive;if(h.setupLights(),X.isArrayCamera){const pe=X.cameras;if(q.length>0)for(let Ee=0,Oe=pe.length;Ee<Oe;Ee++){const Pe=pe[Ee];$d(te,q,L,Pe)}U&&ae.render(L);for(let Ee=0,Oe=pe.length;Ee<Oe;Ee++){const Pe=pe[Ee];Xd(m,L,Pe,Pe.viewport)}}else q.length>0&&$d(te,q,L,X),U&&ae.render(L),Xd(m,L,X);N!==null&&T===0&&(H.updateMultisampleRenderTarget(N),H.updateRenderTargetMipmap(N)),L.isScene===!0&&L.onAfterRender(_,L,X),je.resetDefaultState(),M=-1,b=null,y.pop(),y.length>0?(h=y[y.length-1],de===!0&&be.setGlobalState(_.clippingPlanes,h.state.camera)):h=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function mc(L,X,Q,te){if(L.visible===!1)return;if(L.layers.test(X.layers)){if(L.isGroup)Q=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(X);else if(L.isLight)h.pushLight(L),L.castShadow&&h.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||re.intersectsSprite(L)){te&&Fe.setFromMatrixPosition(L.matrixWorld).applyMatrix4(we);const Ee=j.update(L),Oe=L.material;Oe.visible&&m.push(L,Ee,Oe,Q,Fe.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||re.intersectsObject(L))){const Ee=j.update(L),Oe=L.material;if(te&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Fe.copy(L.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Fe.copy(Ee.boundingSphere.center)),Fe.applyMatrix4(L.matrixWorld).applyMatrix4(we)),Array.isArray(Oe)){const Pe=Ee.groups;for(let Xe=0,Ye=Pe.length;Xe<Ye;Xe++){const He=Pe[Xe],at=Oe[He.materialIndex];at&&at.visible&&m.push(L,Ee,at,Q,Fe.z,He)}}else Oe.visible&&m.push(L,Ee,Oe,Q,Fe.z,null)}}const pe=L.children;for(let Ee=0,Oe=pe.length;Ee<Oe;Ee++)mc(pe[Ee],X,Q,te)}function Xd(L,X,Q,te){const q=L.opaque,pe=L.transmissive,Ee=L.transparent;h.setupLightsView(Q),de===!0&&be.setGlobalState(_.clippingPlanes,Q),te&&R.viewport(D.copy(te)),q.length>0&&Ma(q,X,Q),pe.length>0&&Ma(pe,X,Q),Ee.length>0&&Ma(Ee,X,Q),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function $d(L,X,Q,te){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[te.id]===void 0&&(h.state.transmissionRenderTarget[te.id]=new rs(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?ga:wi,minFilter:Yi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));const pe=h.state.transmissionRenderTarget[te.id],Ee=te.viewport||D;pe.setSize(Ee.z*_.transmissionResolutionScale,Ee.w*_.transmissionResolutionScale);const Oe=_.getRenderTarget();_.setRenderTarget(pe),_.getClearColor(k),K=_.getClearAlpha(),K<1&&_.setClearColor(16777215,.5),_.clear(),U&&ae.render(Q);const Pe=_.toneMapping;_.toneMapping=Mr;const Xe=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),h.setupLightsView(te),de===!0&&be.setGlobalState(_.clippingPlanes,te),Ma(L,Q,te),H.updateMultisampleRenderTarget(pe),H.updateRenderTargetMipmap(pe),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let He=0,at=X.length;He<at;He++){const yt=X[He],Dt=yt.object,Ot=yt.geometry,ut=yt.material,Ve=yt.group;if(ut.side===ii&&Dt.layers.test(te.layers)){const qt=ut.side;ut.side=Tn,ut.needsUpdate=!0,qd(Dt,Q,te,Ot,ut,Ve),ut.side=qt,ut.needsUpdate=!0,Ye=!0}}Ye===!0&&(H.updateMultisampleRenderTarget(pe),H.updateRenderTargetMipmap(pe))}_.setRenderTarget(Oe),_.setClearColor(k,K),Xe!==void 0&&(te.viewport=Xe),_.toneMapping=Pe}function Ma(L,X,Q){const te=X.isScene===!0?X.overrideMaterial:null;for(let q=0,pe=L.length;q<pe;q++){const Ee=L[q],Oe=Ee.object,Pe=Ee.geometry,Xe=Ee.group;let Ye=Ee.material;Ye.allowOverride===!0&&te!==null&&(Ye=te),Oe.layers.test(Q.layers)&&qd(Oe,X,Q,Pe,Ye,Xe)}}function qd(L,X,Q,te,q,pe){L.onBeforeRender(_,X,Q,te,q,pe),L.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),q.onBeforeRender(_,X,Q,te,L,pe),q.transparent===!0&&q.side===ii&&q.forceSinglePass===!1?(q.side=Tn,q.needsUpdate=!0,_.renderBufferDirect(Q,X,te,q,L,pe),q.side=sr,q.needsUpdate=!0,_.renderBufferDirect(Q,X,te,q,L,pe),q.side=ii):_.renderBufferDirect(Q,X,te,q,L,pe),L.onAfterRender(_,X,Q,te,q,pe)}function Ea(L,X,Q){X.isScene!==!0&&(X=ct);const te=O.get(L),q=h.state.lights,pe=h.state.shadowsArray,Ee=q.state.version,Oe=J.getParameters(L,q.state,pe,X,Q),Pe=J.getProgramCacheKey(Oe);let Xe=te.programs;te.environment=L.isMeshStandardMaterial?X.environment:null,te.fog=X.fog,te.envMap=(L.isMeshStandardMaterial?E:le).get(L.envMap||te.environment),te.envMapRotation=te.environment!==null&&L.envMap===null?X.environmentRotation:L.envMapRotation,Xe===void 0&&(L.addEventListener("dispose",Ue),Xe=new Map,te.programs=Xe);let Ye=Xe.get(Pe);if(Ye!==void 0){if(te.currentProgram===Ye&&te.lightsStateVersion===Ee)return Kd(L,Oe),Ye}else Oe.uniforms=J.getUniforms(L),L.onBeforeCompile(Oe,_),Ye=J.acquireProgram(Oe,Pe),Xe.set(Pe,Ye),te.uniforms=Oe.uniforms;const He=te.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(He.clippingPlanes=be.uniform),Kd(L,Oe),te.needsLights=Hv(L),te.lightsStateVersion=Ee,te.needsLights&&(He.ambientLightColor.value=q.state.ambient,He.lightProbe.value=q.state.probe,He.directionalLights.value=q.state.directional,He.directionalLightShadows.value=q.state.directionalShadow,He.spotLights.value=q.state.spot,He.spotLightShadows.value=q.state.spotShadow,He.rectAreaLights.value=q.state.rectArea,He.ltc_1.value=q.state.rectAreaLTC1,He.ltc_2.value=q.state.rectAreaLTC2,He.pointLights.value=q.state.point,He.pointLightShadows.value=q.state.pointShadow,He.hemisphereLights.value=q.state.hemi,He.directionalShadowMap.value=q.state.directionalShadowMap,He.directionalShadowMatrix.value=q.state.directionalShadowMatrix,He.spotShadowMap.value=q.state.spotShadowMap,He.spotLightMatrix.value=q.state.spotLightMatrix,He.spotLightMap.value=q.state.spotLightMap,He.pointShadowMap.value=q.state.pointShadowMap,He.pointShadowMatrix.value=q.state.pointShadowMatrix),te.currentProgram=Ye,te.uniformsList=null,Ye}function Yd(L){if(L.uniformsList===null){const X=L.currentProgram.getUniforms();L.uniformsList=bl.seqWithValue(X.seq,L.uniforms)}return L.uniformsList}function Kd(L,X){const Q=O.get(L);Q.outputColorSpace=X.outputColorSpace,Q.batching=X.batching,Q.batchingColor=X.batchingColor,Q.instancing=X.instancing,Q.instancingColor=X.instancingColor,Q.instancingMorph=X.instancingMorph,Q.skinning=X.skinning,Q.morphTargets=X.morphTargets,Q.morphNormals=X.morphNormals,Q.morphColors=X.morphColors,Q.morphTargetsCount=X.morphTargetsCount,Q.numClippingPlanes=X.numClippingPlanes,Q.numIntersection=X.numClipIntersection,Q.vertexAlphas=X.vertexAlphas,Q.vertexTangents=X.vertexTangents,Q.toneMapping=X.toneMapping}function Bv(L,X,Q,te,q){X.isScene!==!0&&(X=ct),H.resetTextureUnits();const pe=X.fog,Ee=te.isMeshStandardMaterial?X.environment:null,Oe=N===null?_.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:xn,Pe=(te.isMeshStandardMaterial?E:le).get(te.envMap||Ee),Xe=te.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ye=!!Q.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),He=!!Q.morphAttributes.position,at=!!Q.morphAttributes.normal,yt=!!Q.morphAttributes.color;let Dt=Mr;te.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Dt=_.toneMapping);const Ot=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ut=Ot!==void 0?Ot.length:0,Ve=O.get(te),qt=h.state.lights;if(de===!0&&(Ae===!0||L!==b)){const cn=L===b&&te.id===M;be.setState(te,L,cn)}let pt=!1;te.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==qt.state.version||Ve.outputColorSpace!==Oe||q.isBatchedMesh&&Ve.batching===!1||!q.isBatchedMesh&&Ve.batching===!0||q.isBatchedMesh&&Ve.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ve.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ve.instancing===!1||!q.isInstancedMesh&&Ve.instancing===!0||q.isSkinnedMesh&&Ve.skinning===!1||!q.isSkinnedMesh&&Ve.skinning===!0||q.isInstancedMesh&&Ve.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ve.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ve.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ve.instancingMorph===!1&&q.morphTexture!==null||Ve.envMap!==Pe||te.fog===!0&&Ve.fog!==pe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==be.numPlanes||Ve.numIntersection!==be.numIntersection)||Ve.vertexAlphas!==Xe||Ve.vertexTangents!==Ye||Ve.morphTargets!==He||Ve.morphNormals!==at||Ve.morphColors!==yt||Ve.toneMapping!==Dt||Ve.morphTargetsCount!==ut)&&(pt=!0):(pt=!0,Ve.__version=te.version);let Zn=Ve.currentProgram;pt===!0&&(Zn=Ea(te,X,q));let as=!1,Ln=!1,lo=!1;const It=Zn.getUniforms(),Bn=Ve.uniforms;if(R.useProgram(Zn.program)&&(as=!0,Ln=!0,lo=!0),te.id!==M&&(M=te.id,Ln=!0),as||b!==L){R.buffers.depth.getReversed()?(ge.copy(L.projectionMatrix),DM(ge),NM(ge),It.setValue(w,"projectionMatrix",ge)):It.setValue(w,"projectionMatrix",L.projectionMatrix),It.setValue(w,"viewMatrix",L.matrixWorldInverse);const yn=It.map.cameraPosition;yn!==void 0&&yn.setValue(w,tt.setFromMatrixPosition(L.matrixWorld)),ne.logarithmicDepthBuffer&&It.setValue(w,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&It.setValue(w,"isOrthographic",L.isOrthographicCamera===!0),b!==L&&(b=L,Ln=!0,lo=!0)}if(q.isSkinnedMesh){It.setOptional(w,q,"bindMatrix"),It.setOptional(w,q,"bindMatrixInverse");const cn=q.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),It.setValue(w,"boneTexture",cn.boneTexture,H))}q.isBatchedMesh&&(It.setOptional(w,q,"batchingTexture"),It.setValue(w,"batchingTexture",q._matricesTexture,H),It.setOptional(w,q,"batchingIdTexture"),It.setValue(w,"batchingIdTexture",q._indirectTexture,H),It.setOptional(w,q,"batchingColorTexture"),q._colorsTexture!==null&&It.setValue(w,"batchingColorTexture",q._colorsTexture,H));const kn=Q.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&Ce.update(q,Q,Zn),(Ln||Ve.receiveShadow!==q.receiveShadow)&&(Ve.receiveShadow=q.receiveShadow,It.setValue(w,"receiveShadow",q.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Bn.envMap.value=Pe,Bn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&X.environment!==null&&(Bn.envMapIntensity.value=X.environmentIntensity),Ln&&(It.setValue(w,"toneMappingExposure",_.toneMappingExposure),Ve.needsLights&&kv(Bn,lo),pe&&te.fog===!0&&Y.refreshFogUniforms(Bn,pe),Y.refreshMaterialUniforms(Bn,te,$,Z,h.state.transmissionRenderTarget[L.id]),bl.upload(w,Yd(Ve),Bn,H)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(bl.upload(w,Yd(Ve),Bn,H),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&It.setValue(w,"center",q.center),It.setValue(w,"modelViewMatrix",q.modelViewMatrix),It.setValue(w,"normalMatrix",q.normalMatrix),It.setValue(w,"modelMatrix",q.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const cn=te.uniformsGroups;for(let yn=0,gc=cn.length;yn<gc;yn++){const Pr=cn[yn];V.update(Pr,Zn),V.bind(Pr,Zn)}}return Zn}function kv(L,X){L.ambientLightColor.needsUpdate=X,L.lightProbe.needsUpdate=X,L.directionalLights.needsUpdate=X,L.directionalLightShadows.needsUpdate=X,L.pointLights.needsUpdate=X,L.pointLightShadows.needsUpdate=X,L.spotLights.needsUpdate=X,L.spotLightShadows.needsUpdate=X,L.rectAreaLights.needsUpdate=X,L.hemisphereLights.needsUpdate=X}function Hv(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(L,X,Q){const te=O.get(L);te.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),O.get(L.texture).__webglTexture=X,O.get(L.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:Q,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,X){const Q=O.get(L);Q.__webglFramebuffer=X,Q.__useDefaultFramebuffer=X===void 0};const Vv=w.createFramebuffer();this.setRenderTarget=function(L,X=0,Q=0){N=L,C=X,T=Q;let te=!0,q=null,pe=!1,Ee=!1;if(L){const Pe=O.get(L);if(Pe.__useDefaultFramebuffer!==void 0)R.bindFramebuffer(w.FRAMEBUFFER,null),te=!1;else if(Pe.__webglFramebuffer===void 0)H.setupRenderTarget(L);else if(Pe.__hasExternalTextures)H.rebindTextures(L,O.get(L.texture).__webglTexture,O.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const He=L.depthTexture;if(Pe.__boundDepthTexture!==He){if(He!==null&&O.has(He)&&(L.width!==He.image.width||L.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(L)}}const Xe=L.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ee=!0);const Ye=O.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Ye[X])?q=Ye[X][Q]:q=Ye[X],pe=!0):L.samples>0&&H.useMultisampledRTT(L)===!1?q=O.get(L).__webglMultisampledFramebuffer:Array.isArray(Ye)?q=Ye[Q]:q=Ye,D.copy(L.viewport),W.copy(L.scissor),F=L.scissorTest}else D.copy(Te).multiplyScalar($).floor(),W.copy(ke).multiplyScalar($).floor(),F=it;if(Q!==0&&(q=Vv),R.bindFramebuffer(w.FRAMEBUFFER,q)&&te&&R.drawBuffers(L,q),R.viewport(D),R.scissor(W),R.setScissorTest(F),pe){const Pe=O.get(L.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+X,Pe.__webglTexture,Q)}else if(Ee){const Pe=O.get(L.texture),Xe=X;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Pe.__webglTexture,Q,Xe)}else if(L!==null&&Q!==0){const Pe=O.get(L.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Pe.__webglTexture,Q)}M=-1},this.readRenderTargetPixels=function(L,X,Q,te,q,pe,Ee,Oe=0){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=O.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ee!==void 0&&(Pe=Pe[Ee]),Pe){R.bindFramebuffer(w.FRAMEBUFFER,Pe);try{const Xe=L.textures[Oe],Ye=Xe.format,He=Xe.type;if(!ne.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=L.width-te&&Q>=0&&Q<=L.height-q&&(L.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Oe),w.readPixels(X,Q,te,q,xe.convert(Ye),xe.convert(He),pe))}finally{const Xe=N!==null?O.get(N).__webglFramebuffer:null;R.bindFramebuffer(w.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(L,X,Q,te,q,pe,Ee,Oe=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=O.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ee!==void 0&&(Pe=Pe[Ee]),Pe)if(X>=0&&X<=L.width-te&&Q>=0&&Q<=L.height-q){R.bindFramebuffer(w.FRAMEBUFFER,Pe);const Xe=L.textures[Oe],Ye=Xe.format,He=Xe.type;if(!ne.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,at),w.bufferData(w.PIXEL_PACK_BUFFER,pe.byteLength,w.STREAM_READ),L.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Oe),w.readPixels(X,Q,te,q,xe.convert(Ye),xe.convert(He),0);const yt=N!==null?O.get(N).__webglFramebuffer:null;R.bindFramebuffer(w.FRAMEBUFFER,yt);const Dt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await IM(w,Dt,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,at),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,pe),w.deleteBuffer(at),w.deleteSync(Dt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,X=null,Q=0){const te=Math.pow(2,-Q),q=Math.floor(L.image.width*te),pe=Math.floor(L.image.height*te),Ee=X!==null?X.x:0,Oe=X!==null?X.y:0;H.setTexture2D(L,0),w.copyTexSubImage2D(w.TEXTURE_2D,Q,0,0,Ee,Oe,q,pe),R.unbindTexture()};const zv=w.createFramebuffer(),Gv=w.createFramebuffer();this.copyTextureToTexture=function(L,X,Q=null,te=null,q=0,pe=null){pe===null&&(q!==0?(Bs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=q,q=0):pe=0);let Ee,Oe,Pe,Xe,Ye,He,at,yt,Dt;const Ot=L.isCompressedTexture?L.mipmaps[pe]:L.image;if(Q!==null)Ee=Q.max.x-Q.min.x,Oe=Q.max.y-Q.min.y,Pe=Q.isBox3?Q.max.z-Q.min.z:1,Xe=Q.min.x,Ye=Q.min.y,He=Q.isBox3?Q.min.z:0;else{const kn=Math.pow(2,-q);Ee=Math.floor(Ot.width*kn),Oe=Math.floor(Ot.height*kn),L.isDataArrayTexture?Pe=Ot.depth:L.isData3DTexture?Pe=Math.floor(Ot.depth*kn):Pe=1,Xe=0,Ye=0,He=0}te!==null?(at=te.x,yt=te.y,Dt=te.z):(at=0,yt=0,Dt=0);const ut=xe.convert(X.format),Ve=xe.convert(X.type);let qt;X.isData3DTexture?(H.setTexture3D(X,0),qt=w.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(H.setTexture2DArray(X,0),qt=w.TEXTURE_2D_ARRAY):(H.setTexture2D(X,0),qt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,X.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,X.unpackAlignment);const pt=w.getParameter(w.UNPACK_ROW_LENGTH),Zn=w.getParameter(w.UNPACK_IMAGE_HEIGHT),as=w.getParameter(w.UNPACK_SKIP_PIXELS),Ln=w.getParameter(w.UNPACK_SKIP_ROWS),lo=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Ot.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ot.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Xe),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ye),w.pixelStorei(w.UNPACK_SKIP_IMAGES,He);const It=L.isDataArrayTexture||L.isData3DTexture,Bn=X.isDataArrayTexture||X.isData3DTexture;if(L.isDepthTexture){const kn=O.get(L),cn=O.get(X),yn=O.get(kn.__renderTarget),gc=O.get(cn.__renderTarget);R.bindFramebuffer(w.READ_FRAMEBUFFER,yn.__webglFramebuffer),R.bindFramebuffer(w.DRAW_FRAMEBUFFER,gc.__webglFramebuffer);for(let Pr=0;Pr<Pe;Pr++)It&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,O.get(L).__webglTexture,q,He+Pr),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,O.get(X).__webglTexture,pe,Dt+Pr)),w.blitFramebuffer(Xe,Ye,Ee,Oe,at,yt,Ee,Oe,w.DEPTH_BUFFER_BIT,w.NEAREST);R.bindFramebuffer(w.READ_FRAMEBUFFER,null),R.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(q!==0||L.isRenderTargetTexture||O.has(L)){const kn=O.get(L),cn=O.get(X);R.bindFramebuffer(w.READ_FRAMEBUFFER,zv),R.bindFramebuffer(w.DRAW_FRAMEBUFFER,Gv);for(let yn=0;yn<Pe;yn++)It?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,kn.__webglTexture,q,He+yn):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,kn.__webglTexture,q),Bn?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,cn.__webglTexture,pe,Dt+yn):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,cn.__webglTexture,pe),q!==0?w.blitFramebuffer(Xe,Ye,Ee,Oe,at,yt,Ee,Oe,w.COLOR_BUFFER_BIT,w.NEAREST):Bn?w.copyTexSubImage3D(qt,pe,at,yt,Dt+yn,Xe,Ye,Ee,Oe):w.copyTexSubImage2D(qt,pe,at,yt,Xe,Ye,Ee,Oe);R.bindFramebuffer(w.READ_FRAMEBUFFER,null),R.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Bn?L.isDataTexture||L.isData3DTexture?w.texSubImage3D(qt,pe,at,yt,Dt,Ee,Oe,Pe,ut,Ve,Ot.data):X.isCompressedArrayTexture?w.compressedTexSubImage3D(qt,pe,at,yt,Dt,Ee,Oe,Pe,ut,Ot.data):w.texSubImage3D(qt,pe,at,yt,Dt,Ee,Oe,Pe,ut,Ve,Ot):L.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,pe,at,yt,Ee,Oe,ut,Ve,Ot.data):L.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,pe,at,yt,Ot.width,Ot.height,ut,Ot.data):w.texSubImage2D(w.TEXTURE_2D,pe,at,yt,Ee,Oe,ut,Ve,Ot);w.pixelStorei(w.UNPACK_ROW_LENGTH,pt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Zn),w.pixelStorei(w.UNPACK_SKIP_PIXELS,as),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ln),w.pixelStorei(w.UNPACK_SKIP_IMAGES,lo),pe===0&&X.generateMipmaps&&w.generateMipmap(qt),R.unbindTexture()},this.copyTextureToTexture3D=function(L,X,Q=null,te=null,q=0){return Bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,X,Q,te,q)},this.initRenderTarget=function(L){O.get(L).__webglFramebuffer===void 0&&H.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?H.setTextureCube(L,0):L.isData3DTexture?H.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?H.setTexture2DArray(L,0):H.setTexture2D(L,0),R.unbindTexture()},this.resetState=function(){C=0,T=0,N=null,R.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}const gv="/assets/color-_BiSU7h5.jpg",C1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAGHaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49J++7vycgaWQ9J1c1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCc/Pg0KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyI+PHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj48cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0idXVpZDpmYWY1YmRkNS1iYTNkLTExZGEtYWQzMS1kMzNkNzUxODJmMWIiIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj48dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPjwvcmRmOkRlc2NyaXB0aW9uPjwvcmRmOlJERj48L3g6eG1wbWV0YT4NCjw/eHBhY2tldCBlbmQ9J3cnPz4slJgLAAABWUlEQVR4Xu2aSw7DMAgFce9/53RlKUJV6scvNjDLtzAwJlEVdRDRRYX58KAaLYAH1WgBPKhGC+BBNVoAD6oxon8JXtdzuTEGj1wJE/BvcE6UCDcB6MD/8BLi8g6wHp6cziSPDfBq9I7lNpgIiBj6FxYi1I/AW8OTUW21gLfRSlAJ0BbfAZWADIgF7HT7ml5EAjQFvZD2JBKwKxIJqQRIgAVILO8MLCAbkIATbh/tcVkAevApLAs4CeSyUgpAaAE8qEYL4EE1WgAPMoB8K1wWgBx6EssCsgIJOGEL0B4hARmBBaCGdwcWkI1UAiTbKRIgKeSNtCeRgN2QDk8aAWMMVeFdEAvIwvECtFto8geJCfItTot28ImpAAqQYDX4xPwRsG7wjsfZ5hvA0W6Ex9B33AVMUBHeg0/CBEyeREQNfSdcwG6YvwRPowXwoBotgAfVaAE8qEYL4EE1vt2JWmMHqEWCAAAAAElFTkSuQmCC",_v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAABqSURBVGhD7c/BCcAwDARBK/337ASSDvJYDDMg0D13nW6e23u/4zgzc33vsQTUBNQE1ATUBNQE1ATUBNQE1ATUBNQE1ATUBNQE1ATUBNQE1ATUBNQE1ATUBNQE1ATUBNQE1ATUBNQE8MtaN1PXA3zp+LTbAAAAAElFTkSuQmCC",L1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACXSURBVHhe7dWxEcBADMMw77/0ZwBmA8h3aFiq8d3dwyVoEjQJmgRNgiZBk6BJ0CRoEjQJmgRNgiZBk6BJ0CRoEjQJmgRNgiZBk6BJ0CRoEjQJmgTNPfU2wAbYABtgA/y8BU2CJkGToEnQJGgSNAmaBE2CJkGToEnQJGgSNAmaBE2CJkGToEnQJGgSNAmaBE2CJkGToEmgfCXkSNG/2Y/BAAAAAElFTkSuQmCC",P1=`struct ColorGradient {
    vec3 color;
    float stamp;
};

const int nbColors = 2;


uniform float scale;
uniform float colorTextureScale;
uniform float threshold;
uniform float thicknessBot;
uniform float thicknessTop;
uniform ColorGradient[nbColors] colors;
uniform bool useColorTexture;
uniform sampler2D shapeTexture;
uniform sampler2D colorTexture;
uniform sampler2D voronoise;
uniform vec3 clearColor;

uniform vec2 uvOffset;
uniform bool applyFog;

varying vec2 fragUV;
varying float sliceHeight;
varying float vFogDepth;


//////// taken from shaderToy
const uint k = 1103515245U;
vec3 hash33( uvec3 x )
{
    x = ((x>>8U)^x.yzx)*k;
    x = ((x>>8U)^x.yzx)*k;
    x = ((x>>8U)^x.yzx)*k;
    
    return vec3(x)*(1.0/float(0xffffffffU));
}

// https://www.shadertoy.com/view/dtyGWR
uint hash(uint s) {
    s ^= 2747636419u;
    s *= 2654435769u;
    s ^= s >> 16;
    s *= 2654435769u;
    s ^= s >> 16;
    s *= 2654435769u;
    return s;
}
float randS(uint s) {
    uint rn = hash(s);
    rn %= 1000000000u;
    float rs = float(rn);
    rs /= 1000000000.0;
    return rs;
}
///////

float map(float v, float l0, float h0, float ln, float hn){
    float num = (v - l0) * (hn - ln);
    float denom = h0 - l0;
    return ln + (num / denom);
}
vec2 map(vec2 v, vec2 l0, vec2 h0, vec2 ln, vec2 hn){
    vec2 num = (v - l0) * (hn - ln);
    vec2 denom = h0 - l0;
    return ln + (num / denom);
}

vec2 toCenter(vec2 vec){
    return vec - vec2(0.5);
}

vec2 fromCenter(vec2 vec){
    return vec + vec2(0.5);
}


vec3 toLinear(vec3 srgb) {
    return pow(srgb, vec3(2.2));
}
vec3 toSRGB(vec3 linear) {
    return pow(linear, vec3(1.0/2.2));
}

void main() {
    vec2 UV = fragUV + uvOffset;
    UV = mod(UV, vec2(scale));


    vec2 scaledUV = UV * scale;
    vec2 newUV = fract(scaledUV);
    vec2 cellIdx = scaledUV - newUV;

    float n1 = hash33(uvec3(cellIdx / scale, 0)).r;
    float n2 = hash33(uvec3(cellIdx / scale + vec2(37.0, 91.0), 0)).r;
    // float n2 = texture(voronoise, cellIdx / scale + vec2(37.0, 91.0)).r; // offset arbitraire
    vec2 strandOffset = vec2(n1, n2) * 0.5;

    // float randNum = randS(uint((cellIdx.x + sin(cellIdx.y)) * 10.f)) * 0.5f;
    newUV += strandOffset;
    

    float maxHeight = hash33(uvec3(cellIdx, 0)).r + threshold;
    vec2 centeredUV = toCenter(newUV);
    
    // Calculate progression toward max reachable height
    float currentHeight = map(sliceHeight, 0.f, maxHeight, 0.f, 1.f);

    float currentThickness = map(currentHeight, 0.f, 1.f, thicknessBot, thicknessTop);
    centeredUV /= currentThickness;

    newUV = fromCenter(centeredUV);

    if(sliceHeight > 0.f){
        if(texture(shapeTexture, newUV).r < 0.5) discard;

        if (sliceHeight > maxHeight){ // || distFromCenter > thickness * (h - sliceHeight)) {
            discard;
        }
    }

    vec3 finalColor;
    if(!useColorTexture){
        float progression = map(sliceHeight, colors[0].stamp, colors[1].stamp, 0.f, 1.f);        
        finalColor = mix(colors[0].color, colors[1].color, progression);
        // finalColor = vec3(mod(UV, vec2(1.0)), 0.5) *progression;
    } else {
        finalColor = texture(colorTexture, fragUV * colorTextureScale).rgb * sliceHeight;
    }

    if(applyFog){
        vec3 srgb = pow(clearColor, vec3(1.0/2.2));
        float depth = length(fragUV - vec2(0.5));
        float viewRange = smoothstep(0.f, 1.f, depth * 8.f);

        vec3 linearA = toLinear(finalColor);
        vec3 linearB = toLinear(srgb);
        vec3 mixedLinear = mix(linearA, linearB, viewRange);
        finalColor = toSRGB(mixedLinear);
    }
    gl_FragColor = vec4(finalColor, 1.0);


    // float fogFactor = smoothstep(fogNear, fogFar, vFogDepth);
    // gl_FragColor.rgb = mix(finalColor, fogColor, fogFactor);
}
`,I1=`attribute float offset;
attribute float height;

varying vec2 fragUV;
varying float sliceHeight;
varying float vFogDepth;

vec3 displacementDir = vec3(0,-1,0);
uniform float curvature;
uniform float displacementStrength;
uniform sampler2D heightMap;

uniform vec2 rotationalForce;// = 0.05f;

mat3 extractRotationMatrix( mat4 mat ) {
    return mat3( mat[0].xyz, mat[1].xyz, mat[2].xyz );
}

vec3 getCameraPosition(mat4 viewMatrix) {
    mat3 rot = mat3(viewMatrix);
    vec3 t = vec3(viewMatrix[3]);
    return -transpose(rot) * t;
}

void main() {
    fragUV = uv;
    sliceHeight = height;
    mat3 invRot = inverse(extractRotationMatrix(modelMatrix)); 

    vec3 tangent;
    if(normal.y >= 0.99f){
        tangent = cross(vec3(1, 0, 0), normal) ;
    } else {
        tangent = cross(vec3(0,1,0), normal);
    }
    vec3 up = cross(normal, tangent);

    // float clampedRotationalForce = clamp(rotationalForce, -0.1f, 0.1f);
    vec3 rotationalVector = tangent * rotationalForce.x + up * rotationalForce.y;
    
    vec3 pos = position + texture(heightMap, uv).x * normal;
    pos += rotationalVector * height;
    pos += normal * offset * (1.f + length(rotationalVector));
    pos += invRot * displacementDir * displacementStrength * pow(height, curvature);
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}`;function fu(n,e){return new Ge().copy(n).add(e)}function du(n,e){return new Ge().copy(n).sub(e)}function sl(n,e){return new Ge().copy(n).multiplyScalar(e)}function Lm(n,e){return new Ge().copy(n).divideScalar(e)}const Pm=3.14159265359;class D1{constructor(e=4,t=.35,i=0,r){en(this,"xp");en(this,"y");en(this,"yd");en(this,"k1");en(this,"k2");en(this,"k3");const s=2*Pm*e;this.k1=t/(Pm*e),this.k2=1/(s*s),this.k3=i*t/s,this.xp=r,this.y=r,this.yd=new Ge(0,0)}update(e,t,i){i||(i=Lm(du(t,this.xp),e),this.xp=t),this.y=fu(this.y,sl(this.yd,e));const r=du(du(fu(sl(i,this.k3),t),this.y),sl(this.yd,this.k1));return this.yd=fu(Lm(sl(r,e),this.k2),this.yd),(Number.isNaN(this.yd.x)||Number.isNaN(this.yd.y))&&(this.yd=new Ge(0,0)),this.y}}var Sn=(n=>(n.LANGUAGE="language",n.TOOL="tool",n.NONE="none",n))(Sn||{}),es=(n=>(n.ROUND="ROUND",n.SQUARE="SQUARE",n.PINATA="PINATA",n))(es||{});function Ml(){const i=new Uint8Array(400),r=new qe(0,0,0),s=Math.floor(r.r*255),o=Math.floor(r.g*255),a=Math.floor(r.b*255);for(let c=0;c<100;c++){const u=c*4;i[u]=s,i[u+1]=o,i[u+2]=a,i[u+3]=255}const l=new Md(i,10,10);return l.needsUpdate=!0,l}function hu(n,e="heightMap"){n.furMaterial.uniforms[e].value=Ml()}function El(n,e,t="heightMap"){n.furMaterial.uniforms[t].value=new xa().load(e,i=>{i.needsUpdate=!0,i.wrapS=qn,i.wrapT=qn,i.minFilter=Vt,i.magFilter=Vt,i.generateMipmaps=!1})}function If(n,e){let t="";if(e===es.ROUND)t=C1;else if(e===es.SQUARE)t=_v;else if(e===es.PINATA)t=L1;else{console.error("Shape not found");return}n.furMaterial.uniforms.shapeTexture.value=new xa().load(t,i=>{i.wrapS=yi,i.wrapT=yi,i.minFilter=Vt,i.magFilter=Vt,i.generateMipmaps=!1,i.needsUpdate=!0})}const Od=()=>({scale:300,colorTextureScale:1,threshold:.5,thicknessTop:.01,thicknessBot:.85,curvature:3,displacementStrength:.01,colors:[{color:new z(0,0,0),stamp:0},{color:new z(.9,.5,.05),stamp:1}],nbInstances:30,totalHeight:.3,rotationalForce:new Ge(0,0),applyFog:!1,uvOffset:new Ge(0,0),useColorTexture:!1});function vv(n,e=Od(),t=new qe){const i=new Ri({uniforms:{voronoise:{value:Ml()},heightMap:{value:Ml()},shapeTexture:{value:new xa().load(_v,s=>{s.wrapS=qn,s.wrapT=qn,s.minFilter=Vt,s.magFilter=Vt,s.generateMipmaps=!1})},scale:{value:e.scale},colorTextureScale:{value:e.colorTextureScale},threshold:{value:e.threshold},thicknessBot:{value:e.thicknessBot},thicknessTop:{value:e.thicknessTop},curvature:{value:e.curvature},displacementStrength:{value:e.displacementStrength},rotationalForce:{value:e.rotationalForce},colors:{value:e.colors},useColorTexture:{value:!1},colorTexture:{value:Ml()},clearColor:{value:t},uvOffset:{value:e.uvOffset},applyFog:{value:e.applyFog}},vertexShader:I1,fragmentShader:P1}),r={baseGeometry:n,properties:e,furMaterial:i,fur:new Td(n,i,1),furPhysic:new D1(4,.35,0,new Ge(0,0))};return Wr(r),r}function Df(n){const{furMaterial:e,properties:t}=n;for(const i in t)e.uniforms[i]&&(e.uniforms[i].value=t[i])}function N1(n){const e=new Fn().copy(n.baseGeometry),t=new Float32Array(n.properties.nbInstances);for(let r=0;r<n.properties.nbInstances;r++)t[r]=r/(n.properties.nbInstances-1)*n.properties.totalHeight/10;e.setAttribute("offset",new aa(t,1));const i=new Float32Array(n.properties.nbInstances);for(let r=0;r<n.properties.nbInstances;r++)i[r]=r/(n.properties.nbInstances-1);e.setAttribute("height",new aa(i,1)),n.fur.copy(new Td(e,n.furMaterial,n.properties.nbInstances))}function Wr(n){n.fur&&n.fur.dispose(),N1(n)}const U1=`uniform sampler2D noiseTexture;
varying vec2 fragUV;
const float scale = 0.75f;
uniform float delta;


//////// taken from shaderToy
const uint k = 1103515245U;
vec3 hash33( uvec3 x )
{
    x = ((x>>8U)^x.yzx)*k;
    x = ((x>>8U)^x.yzx)*k;
    x = ((x>>8U)^x.yzx)*k;
    
    return vec3(x)*(1.0/float(0xffffffffU));
}
///////

float R(float v, float l0, float h0, float ln, float hn){
    float num = (v - l0) * (hn - ln);
    float denom = h0 - l0;
    return ln + (num / denom);
}

void main() {
    // vec3 rand = hash33(uvec3(fragUV.x * 50.0, 0, 0));
    float rayIntensity = texture(noiseTexture, vec2(fragUV.x, delta)).r;

    float botIntensity = R(fragUV.y, 0.5f, 0.f, 1.f, 0.f);
    float intensity = rayIntensity * rayIntensity * botIntensity * scale;
    gl_FragColor = vec4(1,1,1, intensity);    
}
`,O1=`varying vec2 fragUV;

void main() {
    fragUV = uv;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Nf="/assets/base_256-hilLT1wI.png";function F1(n,e,t){const i=new Rd(t,e,n,255),r=new Ri({fragmentShader:U1,vertexShader:O1,transparent:!0,side:ii,uniforms:{noiseTexture:{value:new xa().load(Nf,s=>{s.wrapS=qn,s.wrapT=qn})},delta:{value:0}}});return new Mn(i,r)}function B1(n){let e,t,i;const r=Ze(0);let s=performance.now();const o=[],a=Ze(Od()),l=new Ge,c=[],u=new Ge(0,0);function f(y){const _=new Ge(0,y=="front"?1:-1);u.add(_.multiplyScalar(1)),l.setX(y=="front"?.1:-.1)}function d(y,_,A){const C=_-y;return y+C*A}function p(){r.value=(performance.now()-s)/1e3,s=performance.now(),a.value.uvOffset.y+=u.y*r.value,a.value.uvOffset.y<0?a.value.uvOffset.y+=1:a.value.uvOffset.y>1&&(a.value.uvOffset.y-=1),u.y=d(u.y,0,r.value*10),h(r.value,l),l.setX(0),l.setY(0),o.forEach(y=>{Df(y)}),c.forEach(y=>{y.uniforms.delta.value+=r.value*.01}),e&&t&&(i==null||i.render(e,t))}function g(y,_){e=new nv,t=new on(75,y.width/y.height,.1,1e3),i=new mv({canvas:y,context:_}),i.setSize(y.width,y.height),i.setAnimationLoop(p),i.setClearColor(new qe(31/255,71/255,59/255)),t==null||t.translateZ(1)}function v(y,_){a.value.scale=500,a.value.threshold=.1,a.value.displacementStrength=.01,a.value.thicknessBot=1,a.value.thicknessTop=.8,a.value.totalHeight=_,a.value.nbInstances=y,a.value.colors[0].color=new z(.078,.22,.173),a.value.colors[1].color=new z(.325,.569,.235),a.value.applyFog=!0;const A=new io(10,10).rotateX(Sl.degToRad(-90)).rotateY(Sl.degToRad(10)).translate(0,-.5,.5),C=vv(A,a.value,i==null?void 0:i.getClearColor(new qe));If(C,es.ROUND),Df(C),e==null||e.add(C.fur),o.push(C),El(C,gv,"colorTexture");const T=F1(6,1.5,.1);T.translateZ(-3),T.translateX(-4),T.translateY(3),T.rotateY(Sl.degToRad(90)),c.push(T.material),e==null||e.add(T)}function m(){e==null||e.clear()}function h(y,_){o.forEach(A=>{A.properties.rotationalForce=A.furPhysic.update(y,_)})}function S(y,_){t&&(t.aspect=y/_,t.updateProjectionMatrix(),i==null||i.setSize(y,_))}return{canva:n,delta:r,camera:t,movePlaine:f,initRender:g,initScene:v,clearScene:m,resize:S}}const k1=vt({__name:"SceneComponent",setup(n,{expose:e}){const t=Ze(null),{movePlaine:i,initRender:r,initScene:s,clearScene:o,resize:a}=B1(t);function l(){o(),s(15,.7)}return Cn(()=>{if(window.addEventListener("resize",()=>{t.value&&(t.value.width=window.innerWidth,t.value.height=window.innerHeight,a(window.innerWidth,window.innerHeight))}),t.value instanceof HTMLCanvasElement){t.value.width=window.innerWidth,t.value.height=window.innerHeight;const c=t.value.getContext("webgl2");if(c)r(t.value,c),s(45,1);else throw new Error("WebGL2 context not available")}else console.error("Canvas reference is not an HTMLCanvasElement")}),e({movePlaine:i,optimize:l}),(c,u)=>(_e(),Be("canvas",{ref_key:"canva",ref:t,class:"fullscreen-canvas"},null,512))}}),H1=On(k1,[["__scopeId","data-v-1e8b2887"]]),V1={class:"tag"},z1=vt({__name:"TechnologieTagComponent",props:{name:{}},setup(n){return(e,t)=>(_e(),Be("div",V1,[ie("h4",null,$e(n.name),1)]))}}),xv=On(z1,[["__scopeId","data-v-74bbfa86"]]);function yv(n){const e=n.scrollWidth>n.clientWidth,t=n.scrollHeight>n.clientHeight;return e||t}function At(n){return n.charAt(0).toUpperCase()+n.slice(1)}const G1={class:"project_context"},W1={class:"column"},j1={class:"technologies_list column"},X1={key:0,class:"project_links"},$1=["href"],q1={class:"other"},ya=vt({__name:"ProjectSummary",props:{title:{},context:{},technologies:{},links:{}},setup(n){const{t:e}=Qt(),t=Ze(null);Cn(()=>{t.value&&yv(t.value)&&t.value.addEventListener("wheel",s=>{s.stopPropagation()})});const i=Ze(window.innerWidth<1300),r=()=>i.value=window.innerWidth<1300;return window.addEventListener("resize",r),di(()=>window.removeEventListener("resize",r)),(s,o)=>{var a,l;return _e(),Be("div",{class:"glass item project_whole column",ref_key:"projectSummary",ref:t},[ie("div",{class:mn({row:!i.value,column:i.value}),id:"project-header"},[ie("h1",null,$e(n.title),1),ie("div",G1,[ie("h2",null,$e(me(At)(me(e)("titles.context"))),1),ie("p",null,$e(n.context),1)]),ie("div",{class:mn(["end-align project_technologies",{row:i.value,column:!i.value}])},[ie("div",W1,[ie("h2",null,$e(me(At)(me(e)("titles.technologies"))),1),ie("div",j1,[(_e(!0),Be(Mt,null,En(n.technologies,c=>(_e(),Bt(xv,{key:c,name:c},null,8,["name"]))),128))])]),n.links.length>0?(_e(),Be("div",X1,[ie("h2",null,$e(me(At)(me(e)("titles.links"))),1),ie("ul",null,[(_e(!0),Be(Mt,null,En(n.links,c=>(_e(),Be("li",{key:c.url},[ie("a",{href:c.url},$e(c.name),9,$1)]))),128))])])):Xt("",!0)],2)],2),o[0]||(o[0]=ie("div",{class:"separator_h"},null,-1)),ie("div",q1,[(_e(!0),Be(Mt,null,En(((l=(a=s.$slots).default)==null?void 0:l.call(a))??[],(c,u)=>(_e(),Bt(ha(c),{key:u}))),128))])],512)}}}),Im="/assets/fox_realistic_wild_animal-BJWfeLxy.glb";function Dm(n,e){if(e===rM)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Rf||e===W_){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===Rf)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class Y1 extends oo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new eC(t)}),this.register(function(t){return new tC(t)}),this.register(function(t){return new uC(t)}),this.register(function(t){return new fC(t)}),this.register(function(t){return new dC(t)}),this.register(function(t){return new iC(t)}),this.register(function(t){return new rC(t)}),this.register(function(t){return new sC(t)}),this.register(function(t){return new oC(t)}),this.register(function(t){return new Q1(t)}),this.register(function(t){return new aC(t)}),this.register(function(t){return new nC(t)}),this.register(function(t){return new cC(t)}),this.register(function(t){return new lC(t)}),this.register(function(t){return new J1(t)}),this.register(function(t){return new hC(t)}),this.register(function(t){return new pC(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Ho.extractUrlBase(e);o=Ho.resolveURL(c,this.path)}else o=Ho.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new cv(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Sv){try{o[st.KHR_BINARY_GLTF]=new mC(e)}catch(f){r&&r(f);return}s=JSON.parse(o[st.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new RC(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const f=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(f){case st.KHR_MATERIALS_UNLIT:o[f]=new Z1;break;case st.KHR_DRACO_MESH_COMPRESSION:o[f]=new gC(s,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:o[f]=new _C;break;case st.KHR_MESH_QUANTIZATION:o[f]=new vC;break;default:d.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function K1(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class J1{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new qe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],xn);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new UE(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new DE(u),c.distance=f;break;case"spot":c=new PE(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Wi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class Z1{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return Jr}extendParams(e,t,i){const r=[];e.color=new qe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],xn),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,Yt))}return Promise.all(r)}}class Q1{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class eC{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ge(a,a)}return Promise.all(s)}}class tC{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class nC{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class iC{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new qe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],xn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Yt)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class rC{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class sC{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new qe().setRGB(a[0],a[1],a[2],xn),Promise.all(s)}}class oC{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class aC{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new qe().setRGB(a[0],a[1],a[2],xn),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Yt)),Promise.all(s)}}class lC{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class cC{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class uC{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class fC{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}}class dC{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}}class hC{constructor(e){this.name=st.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,f=r.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,d,r.mode,r.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(p),u,f,d,r.mode,r.filter),p})})}else return null}}class pC{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==zn.TRIANGLES&&c.mode!==zn.TRIANGLE_STRIP&&c.mode!==zn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],d=c[0].count,p=[];for(const g of f){const v=new Qe,m=new z,h=new Rr,S=new z(1,1,1),y=new Td(g.geometry,g.material,d);for(let _=0;_<d;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&h.fromBufferAttribute(l.ROTATION,_),l.SCALE&&S.fromBufferAttribute(l.SCALE,_),y.setMatrixAt(_,v.compose(m,h,S));for(const _ in l)if(_==="_COLOR_0"){const A=l[_];y.instanceColor=new aa(A.array,A.itemSize,A.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,l[_]);Nt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),p.push(y)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Sv="glTF",bo=12,Nm={JSON:1313821514,BIN:5130562};class mC{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,bo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Sv)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-bo,s=new DataView(e,bo);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Nm.JSON){const c=new Uint8Array(e,bo+o,a);this.content=i.decode(c)}else if(l===Nm.BIN){const c=bo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class gC{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=Uf[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=Uf[u]||u.toLowerCase();if(o[u]!==void 0){const d=i.accessors[e.attributes[u]],p=Hs[d.componentType];c[f]=p.name,l[f]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f,d){r.decodeDracoFile(u,function(p){for(const g in p.attributes){const v=p.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}f(p)},a,c,xn,d)})})}}class _C{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class vC{constructor(){this.name=st.KHR_MESH_QUANTIZATION}}class bv extends va{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,f=(i-t)/u,d=f*f,p=d*f,g=e*c,v=g-c,m=-2*p+3*d,h=p-d,S=1-m,y=h-d+f;for(let _=0;_!==a;_++){const A=o[v+_+a],C=o[v+_+l]*u,T=o[g+_+a],N=o[g+_]*u;s[_]=S*A+y*C+m*T+h*N}return s}}const xC=new Rr;class yC extends bv{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return xC.fromArray(s).normalize().toArray(s),s}}const zn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Hs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Um={9728:gn,9729:Vt,9984:O_,9985:ml,9986:Ro,9987:Yi},Om={33071:yi,33648:Vl,10497:qn},pu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Uf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},gr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},SC={CUBICSPLINE:void 0,LINEAR:sa,STEP:ra},mu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function bC(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Cd({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:sr})),n.DefaultMaterial}function Hr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Wi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function MC(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(i){const d=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):n.attributes.position;o.push(d)}if(r){const d=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):n.attributes.normal;a.push(d)}if(s){const d=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],d=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=f),s&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function EC(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function TC(n){let e;const t=n.extensions&&n.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+gu(t.attributes):e=n.indices+":"+gu(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+gu(n.targets[i]);return e}function gu(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Of(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function AC(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const wC=new Qe;class RC{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new K1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?this.textureLoader=new xa(this.options.manager):this.textureLoader=new OE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new cv(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Hr(s,a,r),Wi(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(Ho.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=pu[r.type],a=Hs[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new _n(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=pu[r.type],c=Hs[r.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,d=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let v,m;if(p&&p!==f){const h=Math.floor(d/p),S="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+h+":"+r.count;let y=t.cache.get(S);y||(v=new c(a,h*p,r.count*p/u),y=new sE(v,p/u),t.cache.add(S,y)),m=new bd(y,l,d%p/u,g)}else a===null?v=new c(r.count*l):v=new c(a,d,r.count*l),m=new _n(v,l,g);if(r.sparse!==void 0){const h=pu.SCALAR,S=Hs[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,_=r.sparse.values.byteOffset||0,A=new S(o[1],y,r.sparse.count*h),C=new c(o[2],_,r.sparse.count*l);a!==null&&(m=new _n(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,N=A.length;T<N;T++){const M=A[T];if(m.setX(M,C[T*l]),l>=2&&m.setY(M,C[T*l+1]),l>=3&&m.setZ(M,C[T*l+2]),l>=4&&m.setW(M,C[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return u.magFilter=Um[d.magFilter]||Vt,u.minFilter=Um[d.minFilter]||Yi,u.wrapS=Om[d.wrapS]||qn,u.wrapT=Om[d.wrapT]||qn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==gn&&u.minFilter!==Vt,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const d=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(v){const m=new $t(v);m.needsUpdate=!0,d(m)}),t.load(Ho.resolveURL(f,s.path),g,void 0,p)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),Wi(f,o),f.userData.mimeType=o.mimeType||AC(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[st.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new sv,Mi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new rv,Mi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Cd}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[st.KHR_MATERIALS_UNLIT]){const f=r[st.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,s,t))}else{const f=s.pbrMetallicRoughness||{};if(a.color=new qe(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const d=f.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],xn),a.opacity=d[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,Yt)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=ii);const u=s.alphaMode||mu.OPAQUE;if(u===mu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===mu.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Jr&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ge(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;a.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&o!==Jr&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Jr){const f=s.emissiveFactor;a.emissive=new qe().setRGB(f[0],f[1],f[2],xn)}return s.emissiveTexture!==void 0&&o!==Jr&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Yt)),Promise.all(c).then(function(){const f=new o(a);return s.name&&(f.name=s.name),Wi(f,s),t.associations.set(f,{materials:e}),s.extensions&&Hr(r,f,s),f})}createUniqueName(e){const t=bt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Fm(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=TC(c),f=r[u];if(f)o.push(f.promise);else{let d;c.extensions&&c.extensions[st.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Fm(new Fn,c,t),r[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?bC(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let p=0,g=u.length;p<g;p++){const v=u[p],m=o[p];let h;const S=c[p];if(m.mode===zn.TRIANGLES||m.mode===zn.TRIANGLE_STRIP||m.mode===zn.TRIANGLE_FAN||m.mode===void 0)h=s.isSkinnedMesh===!0?new aE(v,S):new Mn(v,S),h.isSkinnedMesh===!0&&h.normalizeSkinWeights(),m.mode===zn.TRIANGLE_STRIP?h.geometry=Dm(h.geometry,W_):m.mode===zn.TRIANGLE_FAN&&(h.geometry=Dm(h.geometry,Rf));else if(m.mode===zn.LINES)h=new dE(v,S);else if(m.mode===zn.LINE_STRIP)h=new wd(v,S);else if(m.mode===zn.LINE_LOOP)h=new hE(v,S);else if(m.mode===zn.POINTS)h=new pE(v,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(h.geometry.morphAttributes).length>0&&EC(h,s),h.name=t.createUniqueName(s.name||"mesh_"+e),Wi(h,s),m.extensions&&Hr(r,h,m),t.assignFinalMaterial(h),f.push(h)}for(let p=0,g=f.length;p<g;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return s.extensions&&Hr(r,f[0],s),f[0];const d=new Zr;s.extensions&&Hr(r,d,s),t.associations.set(d,{meshes:e});for(let p=0,g=f.length;p<g;p++)d.add(f[p]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new on(Sl.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Id(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Wi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const d=new Qe;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ed(a,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,d=r.channels.length;f<d;f++){const p=r.channels[f],g=r.samplers[p.sampler],v=p.target,m=v.node,h=r.parameters!==void 0?r.parameters[g.input]:g.input,S=r.parameters!==void 0?r.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",h)),l.push(this.getDependency("accessor",S)),c.push(g),u.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const d=f[0],p=f[1],g=f[2],v=f[3],m=f[4],h=[];for(let S=0,y=d.length;S<y;S++){const _=d[S],A=p[S],C=g[S],T=v[S],N=m[S];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();const M=i._createAnimationTracks(_,A,C,T,N);if(M)for(let b=0;b<M.length;b++)h.push(M[b])}return new ME(s,void 0,h)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],f=c[1],d=c[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,wC)});for(let p=0,g=f.length;p<g;p++)u.add(f[p]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new iv:c.length>1?u=new Zr:c.length===1?u=c[0]:u=new Nt,u!==c[0])for(let f=0,d=c.length;f<d;f++)u.add(c[f]);if(s.name&&(u.userData.name=s.name,u.name=o),Wi(u,s),s.extensions&&Hr(i,u,s),s.matrix!==void 0){const f=new Qe;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){const f=r.associations.get(u);r.associations.set(u,{...f})}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new Zr;i.name&&(s.name=r.createUniqueName(i.name)),Wi(s,i),i.extensions&&Hr(t,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)s.add(l[u]);const c=u=>{const f=new Map;for(const[d,p]of r.associations)(d instanceof Mi||d instanceof $t)&&f.set(d,p);return u.traverse(d=>{const p=r.associations.get(d);p!=null&&f.set(d,p)}),f};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];gr[s.path]===gr.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(gr[s.path]){case gr.weights:c=Ys;break;case gr.rotation:c=Ks;break;case gr.translation:case gr.scale:c=Js;break;default:switch(i.itemSize){case 1:c=Ys;break;case 2:case 3:default:c=Js;break}break}const u=r.interpolation!==void 0?SC[r.interpolation]:sa,f=this._getArrayFromAccessor(i);for(let d=0,p=l.length;d<p;d++){const g=new c(l[d]+"."+gr[s.path],t.array,f,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Of(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof Ks?yC:bv;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function CC(n,e,t){const i=e.attributes,r=new cr;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new z(l[0],l[1],l[2]),new z(c[0],c[1],c[2])),a.normalized){const u=Of(Hs[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new z,l=new z;for(let c=0,u=s.length;c<u;c++){const f=s[c];if(f.POSITION!==void 0){const d=t.json.accessors[f.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const v=Of(Hs[d.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new Li;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function Fm(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=Uf[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return lt.workingColorSpace!==xn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${lt.workingColorSpace}" not supported.`),Wi(n,e),CC(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?MC(n,e.targets,t):n})}function la(n,e,t){return Math.max(e,Math.min(n,t))}function LC(n,e){if(typeof n=="string"||typeof e=="string")return n===e;for(const t in n)if(n[t]!==e[t])return!1;return!0}function ol(n){const e=[],t=n.length>5?2:1;for(let i=1;i<n.length;i+=t){const r=n.substring(i,i+t).repeat(t%2+1),s=parseInt(r,16);e.push(i===3*t+1?s/255:s)}return e.length===3&&e.push(1),{r:e[0],g:e[1],b:e[2],a:e[3]}}function Mv(n){const e=n.l/100,t=e+n.s/100*Math.min(e,1-e),i=t===0?0:200*(1-e/t);return{h:n.h,s:i,v:t*100,a:n.a}}function Tl(n){let e=n.h%360;e<0&&(e+=360);const t=n.s/100,i=n.l/100;return{r:_u(0,e,t,i)*255,g:_u(8,e,t,i)*255,b:_u(4,e,t,i)*255,a:n.a}}function _u(n,e,t,i){const r=(n+e/30)%12,s=t*Math.min(i,1-i);return i-s*Math.max(-1,Math.min(r-3,9-r,1))}function Ev(n){const e=n.s/100,t=n.v/100,i=t*(1-e/2);return{h:n.h,s:i===0||i===1?0:(t-i)/Math.min(i,1-i)*100,l:i*100,a:n.a}}function Tv(n){return{h:n.h,w:n.v*(100-n.s)/100,b:100-n.v,a:n.a}}function Mo(n){return Tl(Ev(n))}function Es(n){const e=n.w/100,t=n.b/100;let i,r;const s=e+t;return s>=1?(i=0,r=e/s):(r=1-t,i=(1-e/r)*100),{h:n.h,s:i,v:r*100,a:n.a}}function Al(n){const{r:e,g:t,b:i,a:r}=n,s=Math.min(e,t,i),o=Math.max(e,t,i),a=o-s,l=(o+s)/2;let c=0;a!==0&&(o===e?c=(t-i)/a+(t<i?6:0):o===t?c=(i-e)/a+2:o===i&&(c=(e-t)/a+4),c*=60);let u=0;return l!==0&&l!==255&&(u=(o-l)/Math.min(l,255-l)),{h:c,s:u*100,l:l/255*100,a:r}}function al(n){return"#"+Object.values(n).map((e,t)=>Math.round(t===3?e*255:e).toString(16).padStart(2,"0")).join("")}function Eo(n){return Tv(Mv(Al(n)))}const PC={hex:{hex:n=>n,hsl:n=>Al(ol(n)),hsv:n=>Es(Eo(ol(n))),hwb:n=>Eo(ol(n)),rgb:ol},hsl:{hex:n=>al(Tl(n)),hsl:n=>n,hsv:Mv,hwb:n=>Eo(Tl(n)),rgb:Tl},hsv:{hex:n=>al(Mo(n)),hsl:Ev,hsv:n=>n,hwb:Tv,rgb:Mo},hwb:{hex:n=>al(Mo(Es(n))),hsl:n=>Al(Mo(Es(n))),hsv:Es,hwb:n=>n,rgb:n=>Mo(Es(n))},rgb:{hex:al,hsl:Al,hsv:n=>Es(Eo(n)),hwb:Eo,rgb:n=>n}};function IC(n,e,t){return PC[n][e](t)}function DC(n,e){const t=n.toFixed(e);return t.includes(".")?t.replace(/\.?0+$/,""):t}const NC={deg:1,grad:.9,rad:180/Math.PI,turn:360},$l={from(n){return n.endsWith("%")?Cs.from(n,{referenceValue:1}):tr.from(n,{min:0,max:1})},to(n){return tr.to(n)}},Bm={from(n){const e=n.match(/deg|g?rad|turn$/);if(e===null)return tr.from(n);const t=e[0];return tr.from(n.slice(0,-t.length))*NC[t]},to(n){return tr.to(n)}},tr={from(n,{min:e=Number.NEGATIVE_INFINITY,max:t=Number.POSITIVE_INFINITY}={}){return n.endsWith(".")?NaN:la(Number(n),e,t)},to(n){return DC(n,2)}},Cs={from(n,{referenceValue:e=100,min:t=0,max:i=100}={}){return n.endsWith("%")?tr.from(n.slice(0,-1),{min:t,max:i})*e/100:NaN},to(n){return tr.to(n)+"%"}},vu={from(n){return n.endsWith("%")?Cs.from(n,{referenceValue:255}):tr.from(n,{min:0,max:255})},to(n){return tr.to(n)}},UC={hsl:{h:Bm,s:Cs,l:Cs},hwb:{h:Bm,w:Cs,b:Cs},rgb:{r:vu,g:vu,b:vu}};function ql(n,e){return UC[n][e]}function xu({format:n,color:e},t){if(n==="hex")return t&&[5,9].includes(e.length)?e.substring(0,e.length-(e.length-1)/4):e;const i=Object.entries(e).slice(0,t?3:4).map(([r,s])=>{const o=r==="a"?$l:ql(n,r);return(r==="a"?"/ ":"")+o.to(s)});return`${n}(${i.join(" ")})`}function Av(n){return/^#(?:(?:[A-F0-9]{2}){3,4}|[A-F0-9]{3,4})$/i.test(n)}function OC(n){return"r"in n?"rgb":"w"in n?"hwb":"v"in n?"hsv":"s"in n?"hsl":null}const km={hsl:["h","s","l","a"],hwb:["h","w","b","a"],rgb:["r","g","b","a"]};function FC(n){if(typeof n!="string"){const a=OC(n);return a===null?null:{format:a,color:n}}if(n.startsWith("#"))return Av(n)?{format:"hex",color:n}:null;if(!n.includes("(")){const a=document.createElement("canvas").getContext("2d");a.fillStyle=n;const l=a.fillStyle;return l==="#000000"&&n!=="black"?null:{format:"hex",color:l}}const[e,t]=n.split("("),i=e.substring(0,3);if(!(i in km))return null;const r=t.replace(/[,/)]/g," ").replace(/\s+/g," ").trim().split(" ");r.length===3&&r.push("1");const s=km[i],o=Object.fromEntries(s.map((a,l)=>{const c=a==="a"?$l:ql(i,a);return[a,c.from(r[l])]}));return{format:i,color:o}}function BC(n,e,t){const i=n.getBoundingClientRect(),r=e-i.left,s=t-i.top;return{x:i.width===0?0:la(r/i.width*100,0,100),y:i.height===0?0:la((1-s/i.height)*100,0,100)}}const kC={class:"vacp-range-input-group"},HC=["for"],VC={class:"vacp-range-input-label-text vacp-range-input-label-text--hue"},zC=["id","value"],GC=["for"],WC={class:"vacp-range-input-label-text vacp-range-input-label-text--alpha"},jC=["id","value"],XC={class:"vacp-actions"},$C={class:"vacp-color-inputs"},qC={class:"vacp-color-input-group"},YC=["for"],KC=["id","value"],JC=["id","for","onInput"],ZC={class:"vacp-color-input-label-text"},QC=["id","value","onInput"],eL=vt({__name:"ColorPicker",props:{color:{default:"#ffffffff"},copy:{type:Function,default:void 0},id:{default:"color-picker"},visibleFormats:{default:()=>["hex","hsl","hwb","rgb"]},defaultFormat:{default:"hsl"},alphaChannel:{default:"show"}},emits:["color-change","color-copy"],setup(n,{expose:e,emit:t}){const i=["hex","hsl","hsv","hwb","rgb"],r=n,s=t;e({copyColor:b,switchFormat:p});const o=Dg("colorSpaceRef");let a=!1;const l=Ze(r.visibleFormats.includes(r.defaultFormat)?r.defaultFormat:r.visibleFormats[0]),c=ic({hex:"#ffffffff",hsl:{h:0,s:0,l:100,a:1},hsv:{h:0,s:0,v:100,a:1},hwb:{h:0,w:100,b:0,a:1},rgb:{r:255,g:255,b:255,a:1}}),u=ni(function(){const F=l.value,k=c[F];return F.split("").map(K=>{const G=k[K];return{value:ql(F,K).to(G),channel:K,label:K.toUpperCase()}}).concat(r.alphaChannel==="show"?[{value:$l.to(k.a),channel:"a",label:"Alpha"}]:[])}),f=ni(function(){return r.alphaChannel==="hide"&&[5,9].includes(c.hex.length)?c.hex.substring(0,c.hex.length-(c.hex.length-1)/4):c.hex}),d=ni(function(){return c.hsv});Zi(()=>r.color,A),Cn(function(){document.addEventListener("pointermove",h,{passive:!1}),document.addEventListener("touchmove",S,{passive:!1}),document.addEventListener("pointerup",m),document.addEventListener("touchend",m),A(r.color)}),Zf(function(){document.removeEventListener("pointermove",h),document.removeEventListener("touchmove",S),document.removeEventListener("pointerup",m),document.removeEventListener("touchend",m)});function p(){const F=(r.visibleFormats.findIndex(k=>k===l.value)+1)%r.visibleFormats.length;l.value=r.visibleFormats[F]}function g(F){a=!0,h(F)}function v(F){a=!0,S(F)}function m(){a=!1}function h(F){F.buttons!==1||!a||!(o.value instanceof HTMLElement)||y(o.value,F.clientX,F.clientY)}function S(F){if(!a||!(o.value instanceof HTMLElement))return;F.preventDefault();const k=F.touches[0];y(o.value,k.clientX,k.clientY)}function y(F,k,K){const G=BC(F,k,K),Z=Object.assign({},c.hsv);Z.s=G.x,Z.v=G.y,M("hsv",Z)}function _(F){if(!["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"].includes(F.key))return;F.preventDefault();const k=["ArrowLeft","ArrowDown"].includes(F.key)?-1:1,K=["ArrowLeft","ArrowRight"].includes(F.key)?"s":"v",G=F.shiftKey?10:1,Z=c.hsv[K]+k*G,$=Object.assign({},c.hsv);$[K]=la(Z,0,100),M("hsv",$)}function A(F){const k=FC(F);k!==null&&M(k.format,k.color)}function C(F,k){const K=F.currentTarget,G=Object.assign({},c.hsv);G[k]=Number(K.value),M("hsv",G)}function T(F){const k=F.target;Av(k.value)&&M("hex",k.value)}function N(F,k){const K=F.target,G=l.value,Z=Object.assign({},c[G]),$=(k==="a"?$l:ql(G,k)).from(K.value);Number.isNaN($)||(Z[k]=$,M(G,Z))}function M(F,k){let K=k;if(r.alphaChannel==="hide")if(typeof k!="string")k.a=1,K=k;else if([5,9].includes(k.length)){const G=(k.length-1)/4;K=k.substring(0,k.length-G)+"f".repeat(G)}else[4,7].includes(k.length)&&(K=k+"f".repeat((k.length-1)/3));if(!LC(c[F],K)){c[F]=K;for(const G of i)G!==F&&(c[G]=IC(F,G,K));s("color-change",D())}}async function b(){const F=c[l.value],k=r.alphaChannel==="hide",K=xu({color:F,format:l.value},k);await(r.copy?r.copy:G=>window.navigator.clipboard.writeText(G))(K),s("color-copy",D())}function D(){const F=r.alphaChannel==="hide",k=xu({color:c[l.value],format:l.value},F);return{colors:c,cssColor:k}}function W(F){if(!["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"].includes(F.key)||!F.shiftKey)return;const k=F.currentTarget,K=Number(k.step),G=["ArrowLeft","ArrowDown"].includes(F.key)?-1:1,Z=Number(k.value)+G*K*10,$=la(Z,Number(k.min),Number(k.max));k.value=String($-G*K)}return(F,k)=>(_e(),Be("div",{class:"vacp-color-picker",style:Ji(`--vacp-color: ${me(xu)({format:"hsl",color:c.hsl},!0)}`)},[ie("div",{ref:"colorSpaceRef",class:"vacp-color-space",style:Ji(`position: relative; background: linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent); background-color: hsl(${d.value.h} 100% 50%)`),onPointerdown:g,onTouchstart:v},[ie("div",{ref:"thumb",class:"vacp-color-space-thumb",tabindex:"0","aria-label":"Color space thumb",style:Ji(`box-sizing: border-box; position: absolute; left: ${d.value.s}%; bottom: ${d.value.v}%;`),onKeydown:_},null,36)],36),ie("div",kC,[ie("label",{class:"vacp-range-input-label vacp-range-input-label--hue",for:`${F.id}-hue-slider`},[ie("span",VC,[jr(F.$slots,"hue-range-input-label",{},()=>[k[2]||(k[2]=qo("Hue",-1))])]),ie("input",{id:`${F.id}-hue-slider`,class:"vacp-range-input vacp-range-input--hue",value:c.hsv.h,type:"range",min:"0",max:"360",step:"1",onKeydownPassive:W,onInput:k[0]||(k[0]=K=>C(K,"h"))},null,40,zC)],8,HC),F.alphaChannel==="show"?(_e(),Be("label",{key:0,class:"vacp-range-input-label vacp-range-input-label--alpha",for:`${F.id}-alpha-slider`},[ie("span",WC,[jr(F.$slots,"alpha-range-input-label",{},()=>[k[3]||(k[3]=qo("Alpha",-1))])]),ie("input",{id:`${F.id}-alpha-slider`,class:"vacp-range-input vacp-range-input--alpha",value:c.hsv.a,type:"range",min:"0",max:"1",step:"0.01",onKeydownPassive:W,onInput:k[1]||(k[1]=K=>C(K,"a"))},null,40,jC)],8,GC)):Xt("",!0)]),ie("div",XC,[ie("button",{class:"vacp-copy-button",type:"button",onClick:b},[jr(F.$slots,"copy-button",{},()=>[k[4]||(k[4]=ie("span",{class:"vacp-visually-hidden"},"Copy color",-1)),k[5]||(k[5]=ie("svg",{class:"vacp-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",width:"24",height:"24",viewBox:"0 0 32 32"},[ie("path",{d:"M25.313 28v-18.688h-14.625v18.688h14.625zM25.313 6.688c1.438 0 2.688 1.188 2.688 2.625v18.688c0 1.438-1.25 2.688-2.688 2.688h-14.625c-1.438 0-2.688-1.25-2.688-2.688v-18.688c0-1.438 1.25-2.625 2.688-2.625h14.625zM21.313 1.313v2.688h-16v18.688h-2.625v-18.688c0-1.438 1.188-2.688 2.625-2.688h16z",fill:"currentColor"})],-1))])]),jr(F.$slots,"actions")]),ie("div",$C,[ie("div",qC,[l.value==="hex"?(_e(),Be("label",{key:0,class:"vacp-color-input-label",for:`${F.id}-color-hex`},[k[6]||(k[6]=ie("span",{class:"vacp-color-input-label-text"}," Hex ",-1)),ie("input",{id:`${F.id}-color-hex`,class:"vacp-color-input",type:"text",value:f.value,onInput:T},null,40,KC)],8,YC)):(_e(!0),Be(Mt,{key:1},En(u.value,({value:K,channel:G,label:Z})=>(_e(),Be("label",{id:`${F.id}-color-${l.value}-${G}-label`,key:`${F.id}-color-${l.value}-${G}-label`,class:"vacp-color-input-label",for:`${F.id}-color-${l.value}-${G}`,onInput:$=>N($,G)},[ie("span",ZC,$e(Z),1),ie("input",{id:`${F.id}-color-${l.value}-${G}`,class:"vacp-color-input",type:"text",value:K,onInput:$=>N($,G)},null,40,QC)],40,JC))),128))]),F.visibleFormats.length>1?(_e(),Be("button",{key:0,class:"vacp-format-switch-button",type:"button",onClick:p},[jr(F.$slots,"format-switch-button",{},()=>[k[7]||(k[7]=ie("span",{class:"vacp-visually-hidden"},"Switch format",-1)),k[8]||(k[8]=ie("svg",{class:"vacp-icon","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"15"},[ie("path",{d:"M8 15l5-5-1-1-4 2-4-2-1 1zm4-9l1-1-5-5-5 5 1 1 4-2z",fill:"currentColor"})],-1))])])):Xt("",!0)])],4))}}),tL={id:"fur-editor"},nL={id:"shape-editor",ref:"shape-editor"},iL=["value","selected"],rL={ref:"viewport"},sL={id:"color-editor",ref:"color-editor"},oL={key:0},aL={key:0},lL={key:1},cL=0,uL=vt({__name:"FurEditor",setup(n){const{t:e}=Qt(),t=Dg("viewport");function i(){return(y.value.useColorTexture?"Disable":"Enable")+" color texture"}const r=Ze(1),s=Ze();let o,a,l;const c=Ze(0);let u=performance.now();const f=Ze({x:0,y:0,z:0}),d=Ze("Fox"),p=Ze(es.ROUND),g=Ze(new Ge(0,0)),v=new Ge(0,0),m=Ze(new Ge(0,0));function h(){if(!a)return;const M=new Qe;M.makeRotationFromEuler(new fi(f.value.x,f.value.y,0)),_.fur.setRotationFromMatrix(M)}function S(M){if(M.buttons!==1||!a)return;const b=.005;g.value.x=(M.movementX-v.x)*b,g.value.y=(M.movementY-v.y)*b,v.x=M.movementX,v.y=M.movementY,f.value.x+=M.movementY*b,f.value.y+=M.movementX*b,h()}const y=Ze(Od());let _;window.onresize=function(){if(!a||!t.value||!l||!s.value)return;const M=s.value.clientWidth,b=s.value.clientHeight;t.value.width=M,t.value.height=b,a.aspect=M/b,a.updateProjectionMatrix(),l.setSize(M,b)};function A(M,b){const D=M.clientWidth,W=M.clientHeight;M.width=D,M.height=W,o=new nv,a=new on(75,D/W,.1,1e3),l=new mv({canvas:M,context:b}),l.setSize(D,W),a.position.z=r.value,a.position.x=cL;const F=new Xl(.5);_=vv(F),d.value="Fox",C(Im).then(K=>{K.geometry.rotateX(-90),_.baseGeometry=K.geometry,hu(_),Wr(_)}).catch(K=>console.error(K)),_.properties.applyFog=!1,If(_,p.value),o==null||o.add(_.fur),El(_,gv,"colorTexture"),El(_,Nf,"voronoise"),y.value=_.properties,y.value.useColorTexture=!0,y.value.colorTextureScale=5.75,y.value.thicknessTop=.1,y.value.thicknessBot=1,y.value.scale=245;function k(){c.value=(performance.now()-u)/1e3,u=performance.now(),_&&y&&(m.value=_.furPhysic.update(c.value,g.value),g.value=new Ge(0,0),y.value.rotationalForce=m.value,Df(_)),o&&a&&(l==null||l.render(o,a))}l.setAnimationLoop(k),M.addEventListener("mousemove",S),h()}async function C(M){return new Promise((b,D)=>{new Y1().load(M,F=>{F.scene.traverse(k=>{k.isMesh&&b(k)}),D(new Error("No mesh found in GLTF"))})})}function T(){d.value=="Fox"?C(Im).then(M=>{M.geometry.rotateX(-90),_.baseGeometry=M.geometry,hu(_),Wr(_)}).catch(M=>console.error(M)):d.value=="Plane"?(_.baseGeometry=new io(5,5,40,40),El(_,Nf),Wr(_)):d.value=="Sphere"&&(_.baseGeometry=new Xl(.5),hu(_),Wr(_))}Cn(()=>{if(t.value instanceof HTMLCanvasElement){if(!t.value)throw new Error("Invalid canvas element provided");const M=t.value.getContext("webgl2");if(!M)throw new Error("WebGL2 context not available");A(t.value,M),a==null||a.updateProjectionMatrix()}else console.error("Canvas reference is not an HTMLCanvasElement")}),di(()=>{var M;(M=t.value)==null||M.removeEventListener("mousemove",S)});const N=Ze(!1);return(M,b)=>(_e(),Be("div",{id:"frame",ref_key:"frameRef",ref:s},[ie("h1",null,$e(me(At)(me(e)("titles.fur_editor"))),1),ie("div",tL,[ie("div",nL,[b[17]||(b[17]=ie("p",null,"Fur shape:",-1)),Vn(ie("select",{"onUpdate:modelValue":b[0]||(b[0]=D=>d.value=D),onChange:T},[...b[16]||(b[16]=[ie("option",null,"Fox",-1),ie("option",null,"Sphere",-1)])],544),[[Ch,d.value]]),b[18]||(b[18]=ie("p",null,"Strand shape:",-1)),Vn(ie("select",{"onUpdate:modelValue":b[1]||(b[1]=D=>p.value=D),onChange:b[2]||(b[2]=()=>me(If)(me(_),p.value))},[(_e(!0),Be(Mt,null,En(Object.values(me(es)),D=>(_e(),Be("option",{key:D,value:D,selected:D===p.value},$e(D),9,iL))),128))],544),[[Ch,p.value]]),ie("p",null,"Scale: "+$e(y.value.scale),1),Vn(ie("input",{type:"range","onUpdate:modelValue":b[3]||(b[3]=D=>y.value.scale=D),min:"1",max:"1000",step:"1"},null,512),[[Ni,y.value.scale]]),ie("p",null,"Thickness bottom: "+$e(y.value.thicknessBot),1),Vn(ie("input",{type:"range","onUpdate:modelValue":b[4]||(b[4]=D=>y.value.thicknessBot=D),min:"0.01",max:"1",step:"0.01"},null,512),[[Ni,y.value.thicknessBot]]),ie("p",null,"Thickness top: "+$e(y.value.thicknessTop),1),Vn(ie("input",{type:"range","onUpdate:modelValue":b[5]||(b[5]=D=>y.value.thicknessTop=D),min:"0.01",max:"1",step:"0.01"},null,512),[[Ni,y.value.thicknessTop]]),ie("p",null,"Threshold: "+$e(y.value.threshold),1),Vn(ie("input",{type:"range","onUpdate:modelValue":b[6]||(b[6]=D=>y.value.threshold=D),min:"0",max:"1",step:"0.01"},null,512),[[Ni,y.value.threshold]]),ie("p",null,"Number of Instances: "+$e(y.value.nbInstances),1),Vn(ie("input",{type:"range","onUpdate:modelValue":b[7]||(b[7]=D=>y.value.nbInstances=D),min:"1",max:"100",step:"1",onChange:b[8]||(b[8]=()=>me(Wr)(me(_)))},null,544),[[Ni,y.value.nbInstances]]),ie("p",null,"Total Height: "+$e(y.value.totalHeight),1),Vn(ie("input",{type:"range","onUpdate:modelValue":b[9]||(b[9]=D=>y.value.totalHeight=D),min:"0.001",max:"1",step:"0.001",onChange:b[10]||(b[10]=()=>me(Wr)(me(_)))},null,544),[[Ni,y.value.totalHeight]]),ie("p",null,"Curvature: "+$e(y.value.curvature),1),Vn(ie("input",{type:"range","onUpdate:modelValue":b[11]||(b[11]=D=>y.value.curvature=D),min:"1",max:"20",step:"0.5"},null,512),[[Ni,y.value.curvature]]),ie("p",null,"Roughness: "+$e(y.value.displacementStrength),1),Vn(ie("input",{type:"range","onUpdate:modelValue":b[12]||(b[12]=D=>y.value.displacementStrength=D),min:"0",max:"0.5",step:"0.01"},null,512),[[Ni,y.value.displacementStrength]])],512),ie("canvas",rL,null,512),ie("div",sL,[ze(Qi,{content:"colorize",onClick:b[13]||(b[13]=()=>N.value=!N.value),disable:!1}),N.value?(_e(),Be("div",oL,[ze(Qi,{content:i(),onClick:b[14]||(b[14]=D=>y.value.useColorTexture=!y.value.useColorTexture),disable:!1},null,8,["content"]),y.value.useColorTexture?(_e(),Be("div",aL,[ie("p",null,"Color texture scale: "+$e(y.value.colorTextureScale),1),Vn(ie("input",{type:"range","onUpdate:modelValue":b[15]||(b[15]=D=>y.value.colorTextureScale=D),min:"0.01",max:"10",step:"0.01"},null,512),[[Ni,y.value.colorTextureScale]])])):(_e(),Be("div",lL,[(_e(!0),Be(Mt,null,En(y.value.colors,(D,W)=>(_e(),Be("div",{key:W},[ie("p",null,$e(W>0?"End":"Base")+" Color",1),N.value?(_e(),Bt(me(eL),{key:0,class:"picker","default-format":"rgb",onColorChange:F=>{if(!y.value)return;const{rgb:k}=F.colors;D.color.x=k.r/255,D.color.y=k.g/255,D.color.z=k.b/255}},null,8,["onColorChange"])):Xt("",!0)]))),128))]))])):Xt("",!0)],512)])],512))}}),fL={id:"shelldifftitle"},dL={id:"shelldiff"},hL=vt({__name:"ProjectShellTexturing",setup(n){const{t:e}=Qt();return(t,i)=>(_e(),Bt(ya,{title:"Shell Texturing",context:me(e)("projects.shell.context"),technologies:["WebGL","Typescript","Three.js"],links:[{url:"https://github.com/Crhonopost/Crhonopost.github.io",name:"Github"}]},{default:ar(()=>[ze(uL),ie("h1",fL,$e(me(At)(me(e)("titles.difficulties"))),1),ie("p",dL,$e(me(e)("projects.shell.difficulties")),1)]),_:1},8,["context"]))}}),pL=["src","alt"],mL={class:"column"},gL=["src","alt"],Ei=vt({__name:"ProjectSection",props:{title:{},desc:{},imagePath:{},imageAlt:{},imageFirst:{type:Boolean}},setup(n){const e=Ze(window.innerWidth<1200),t=()=>e.value=window.innerWidth<1200;return window.addEventListener("resize",t),di(()=>window.removeEventListener("resize",t)),(i,r)=>{var s,o;return _e(),Be("div",{class:mn(["project-section",{row:!e.value,column:e.value}])},[n.imageFirst||e.value?(_e(),Be("img",{key:0,class:"round",src:n.imagePath,alt:n.imageAlt},null,8,pL)):Xt("",!0),ie("div",mL,[ie("h2",null,$e(n.title),1),ie("p",null,[qo($e(n.desc)+" ",1),(_e(!0),Be(Mt,null,En(((o=(s=i.$slots).default)==null?void 0:o.call(s))??[],(a,l)=>(_e(),Bt(ha(a),{key:l}))),128))])]),!n.imageFirst&&!e.value?(_e(),Be("img",{key:1,class:"round",src:n.imagePath,alt:n.imageAlt},null,8,gL)):Xt("",!0)],2)}}}),_L=vt({__name:"ProjectRendering",setup(n){const{t:e}=Qt();return(t,i)=>(_e(),Bt(ya,{title:me(At)(me(e)("projects.rendering.title")),context:me(e)("projects.rendering.context"),technologies:["C++","OpenGL","GLSL","ImGUI"],links:[]},{default:ar(()=>[ze(Ei,{title:"Ray tracing",desc:me(e)("projects.rendering.ray_tracing_desc"),"image-path":"/projects/raytracing/refraction.png","image-alt":"Refraction test","image-first":!1},null,8,["desc"]),ze(Ei,{title:"Volume rendering",desc:me(e)("projects.rendering.volume_desc"),"image-path":"/projects/TER/moving_cloud.gif","image-alt":"Animated cloud","image-first":!0},null,8,["desc"])]),_:1},8,["title","context"]))}}),vL=["src","alt"],xL=vt({__name:"CarousselComponent",props:{images:{}},setup(n){const e=Ze(window.innerWidth<1e3),t=()=>e.value=window.innerWidth<1e3;return window.addEventListener("resize",t),di(()=>window.removeEventListener("resize",t)),(i,r)=>(_e(),Be("div",{class:mn(["caroussel",{column:e.value}])},[(_e(!0),Be(Mt,null,En(n.images,(s,o)=>(_e(),Be("div",{key:o,class:"caroussel-item column"},[ie("img",{src:s.path,alt:s.desc,class:"round"},null,8,vL),ie("p",null,$e(s.desc),1)]))),128))],2))}}),yL=On(xL,[["__scopeId","data-v-24dd3d31"]]),SL={id:"list"},bL=vt({__name:"ProjectGameEngine",setup(n){const{t:e,tm:t}=Qt(),i=()=>t("projects.engine.features_list");return(r,s)=>(_e(),Bt(ya,{title:"Star Engine",context:me(e)("projects.engine.context"),technologies:["C++","OpenGL","GLSL","ImGUI"],links:[{url:"https://github.com/Crhonopost/Star-engine",name:"Github V1"},{url:"https://github.com/Godon-t/galaxy-engine",name:"Github V2"}]},{default:ar(()=>[ze(Ei,{title:me(At)(me(e)("titles.learning")),desc:me(e)("projects.engine.learnings"),"image-first":!1,"image-path":"./projects/gameengine/main_scene.png","image-alt":"Main menu of the game engine"},null,8,["title","desc"]),ze(yL,{images:[{path:"./projects/gameengine/init.gif",desc:me(e)("projects.engine.img_desc_0")},{path:"./projects/gameengine/moving.gif",desc:me(e)("projects.engine.img_desc_1")}],class:"caroussel"},null,8,["images"]),ze(Ei,{title:me(At)(me(e)("titles.next_steps")),desc:me(e)("projects.engine.next_steps"),"image-first":!0,"image-path":"./projects/gameengine/new_editor.png","image-alt":"New menu with a correct scene structure"},null,8,["title","desc"]),ie("div",SL,[ie("h2",null,$e(me(e)("projects.engine.features_list_title")),1),ie("ul",null,[(_e(!0),Be(Mt,null,En(i(),(o,a)=>(_e(),Be("li",{key:a},$e(o),1))),128))])])]),_:1},8,["context"]))}}),ML={id:"apropos"},EL={class:"glass",id:"apropos-text"},TL=vt({__name:"AproposComponent",setup(n){const{t:e}=Qt();return(t,i)=>(_e(),Be("div",ML,[ie("div",EL,[ie("h1",null,$e(me(At)(me(e)("titles.about"))),1),ie("p",null,$e(me(e)("contents.about")),1)])]))}}),AL=On(TL,[["__scopeId","data-v-62e7fae3"]]),wL={class:"glass skill"},RL=["src","alt","title"],CL=vt({__name:"SkillComponent",props:{name:{},icon:{},anotation:{},isWeb:{type:Boolean}},setup(n){return(e,t)=>(_e(),Be("div",wL,[ie("img",{src:n.icon,alt:n.name,title:n.name,class:"skill-icon"},null,8,RL)]))}}),Hm=On(CL,[["__scopeId","data-v-387d787a"]]),LL={id:"page"},PL={class:"skill-set-header"},IL={id:"skill-set-container"},DL={class:"skill-set"},NL={class:"skill-set"},UL=vt({__name:"SkillSetComponent",props:{skills:{}},setup(n){const{t:e}=Qt(),t=Ze(!0);Ze(Sn.NONE);const i=Ze(null),r=Ze(1),s=a=>r.value<2?"":Math.floor(a/r.value)%2===1?"offset-row":"",o=()=>{if(i.value){const l=getComputedStyle(i.value).getPropertyValue("grid-template-columns").split(" ").length;r.value=l}};return Cn(()=>{Yr(o),window.addEventListener("resize",o)}),(a,l)=>(_e(),Be("div",LL,[ie("div",PL,[ie("h2",null,$e(me(At)(me(e)("titles.skills"))),1),ie("p",null,$e(me(At)(me(e)("descriptions.skills"))),1)]),ie("div",IL,[ie("div",DL,[(_e(!0),Be(Mt,null,En(n.skills.filter(c=>!c.isWeb),(c,u)=>(_e(),Be("div",{key:c.name,class:mn(s(u))},[ze(Hm,{name:c.name,icon:c.icon,anotation:c.anotation,"is-web":c.isWeb},null,8,["name","icon","anotation","is-web"])],2))),128))]),Vn(ie("div",NL,[(_e(!0),Be(Mt,null,En(n.skills.filter(c=>c.isWeb),(c,u)=>(_e(),Be("div",{key:c.name,class:mn(s(u))},[ze(Hm,{name:c.name,icon:c.icon,anotation:c.anotation,"is-web":c.isWeb},null,8,["name","icon","anotation","is-web"])],2))),128))],512),[[jx,t.value]])])]))}}),OL=On(UL,[["__scopeId","data-v-22f1c5a4"]]),FL={class:"card column"},BL=["src"],kL={class:"technologies"},HL={class:"right-offset"},VL={href:"#"},zL=vt({__name:"ProjectShortComponent",props:{title:{},description:{},technologies:{},illustration:{}},setup(n){const{t:e}=Qt();return(t,i)=>(_e(),Be("div",FL,[ie("h2",null,$e(n.title),1),ie("img",{src:n.illustration,alt:"Project Illustration"},null,8,BL),ie("p",null,$e(n.description),1),ie("div",kL,[(_e(!0),Be(Mt,null,En(n.technologies,r=>(_e(),Bt(xv,{class:"tag",key:r,name:r},null,8,["name"]))),128))]),ie("div",HL,[ie("a",VL,$e(me(At)(me(e)("viewMore"))),1)])]))}}),GL=On(zL,[["__scopeId","data-v-8e0c5c04"]]),WL={id:"page"},jL=vt({__name:"ProjectShorts",emits:["projectClicked"],setup(n,{emit:e}){const{t}=Qt(),i=e,r=[{title:()=>"Shell texturing",description:()=>t("projects.shell.quickDesc"),technologies:["WebGL","Typescript","Three.js"],illustration:"./projects/shelltexturing/fur.png"},{title:()=>At(t("projects.engine.title")),description:()=>t("projects.engine.quickDesc"),technologies:["OpenGL","C++"],illustration:"./projects/gameengine/illu_game.png"},{title:()=>At(t("projects.rendering.title")),description:()=>t("projects.rendering.quickDesc"),technologies:["OpenGL","C++"],illustration:"/projects/TER/cloud-around.gif"},{title:()=>At(t("projects.games.title")),description:()=>t("projects.games.quickDesc"),technologies:["Godot","Gdscript","C#"],illustration:"./projects/games/what.gif"},{title:()=>At(t("projects.web.title")),description:()=>t("projects.web.quickDesc"),technologies:["Vue.js","Node.js","PHP","SQL"],illustration:"./projects/web/satiscraftory.png"}],s=Ze(null);return Cn(()=>{s!=null&&s.value&&yv(s.value)&&s.value.addEventListener("wheel",o=>{o.stopPropagation()})}),(o,a)=>(_e(),Be("div",WL,[ie("h1",null,$e(me(At)(me(t)("titles.projects"))),1),ie("div",{class:"projects-container",ref_key:"projectContainer",ref:s},[(_e(),Be(Mt,null,En(r,(l,c)=>ze(GL,{key:c,class:"glass clickable project",title:l.title(),description:l.description(),technologies:l.technologies,illustration:l.illustration,onClick:u=>i("projectClicked",c)},null,8,["title","description","technologies","illustration","onClick"])),64))],512)]))}}),XL=On(jL,[["__scopeId","data-v-96aec954"]]),$L=vt({__name:"ProjectGames",setup(n){const{t:e}=Qt();return(t,i)=>(_e(),Bt(ya,{title:me(At)(me(e)("projects.games.title")),context:me(e)("projects.games.context"),technologies:["Godot","C#","GDScript"],links:[{url:"https://ohhnyx.itch.io/dicecraft",name:"Game jam contribution"},{url:"https://github.com/Crhonopost/Behavior_tree_4.2",name:"Godot behavior tree plugin"}]},{default:ar(()=>[ze(Ei,{title:me(e)("projects.games.behavior_title"),desc:me(e)("projects.games.behavior_desc"),"image-path":"./projects/games/illu_behavior.png","image-alt":"Typical use of the behavior tree using composition in godot.","image-first":!1},null,8,["title","desc"]),ze(Ei,{title:"Dicecraft",desc:me(e)("projects.games.dicecraft_desc"),"image-path":"./projects/games/dice_throw_edited.png","image-alt":"You must protect the left while attacking the right by throwing your dice on the board.","image-first":!0},null,8,["desc"]),ze(Ei,{title:me(At)(me(e)("projects.games.other_title")),desc:me(e)("projects.games.other_desc"),"image-path":"./projects/games/glyphes.png","image-alt":"Spell creation game illustration","image-first":!1},null,8,["title","desc"])]),_:1},8,["title","context"]))}}),qL={class:"studies-card"},YL=vt({__name:"StudiesCard",props:{date:{},location:{},description:{}},setup(n){return(e,t)=>(_e(),Be("div",qL,[ie("div",null,[ie("h3",null,$e(n.date),1),ie("h3",null,$e(n.location),1)]),ie("h2",null,$e(n.description),1)]))}}),To=On(YL,[["__scopeId","data-v-b76b155b"]]),Ts=()=>{};function wv(n){return typeof n=="function"?n():n&&typeof n=="object"&&"value"in n?n.value:n}function ll(n){return wv(n)}const KL=typeof window>"u"||!window.navigator?!1:/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||window.navigator.maxTouchPoints>2&&/iPad|Macintosh/.test(window.navigator.userAgent);function yu(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}let Vm=!1;function JL(n,e,t={}){const{window:i=typeof globalThis<"u"?globalThis.window:void 0,ignore:r=[],capture:s=!0,detectIframe:o=!1,controls:a=!1}=t;if(!i)return a?{stop:Ts,cancel:Ts,trigger:Ts}:Ts;if(KL&&!Vm){Vm=!0;const g={passive:!0};Array.from(i.document.body.children).forEach(v=>v.addEventListener("click",Ts,g)),i.document.documentElement.addEventListener("click",Ts,g)}let l=!0;const c=g=>wv(r).some(v=>{if(typeof v=="string")return Array.from(i.document.querySelectorAll(v)).some(m=>m===g.target||g.composedPath().includes(m));{const m=ll(v);return m&&(g.target===m||g.composedPath().includes(m))}}),u=g=>{if(!g.target)return;const v=ll(n);if(v&&!(v===g.target||g.composedPath().includes(v))){if("detail"in g&&g.detail===0&&(l=!c(g)),!l){l=!0;return}e(g)}};let f=!1;const d=[yu(i,"click",g=>{f||(f=!0,setTimeout(()=>{f=!1},0),u(g))},{passive:!0,capture:s}),yu(i,"pointerdown",g=>{const v=ll(n);l=!c(g)&&!!(v&&!g.composedPath().includes(v))},{passive:!0}),o&&yu(i,"blur",g=>{setTimeout(()=>{var v;const m=ll(n);((v=i.document.activeElement)==null?void 0:v.tagName)==="IFRAME"&&!(m!=null&&m.contains(i.document.activeElement))&&e(g)},0)},{passive:!0})].filter(Boolean),p=()=>d.forEach(g=>g());return a?{stop:p,cancel:()=>{l=!1},trigger:g=>{l=!0,u(g),l=!1}}:p}var An="top",Yn="bottom",Kn="right",wn="left",Fd="auto",Sa=[An,Yn,Kn,wn],Zs="start",ca="end",ZL="clippingParents",Rv="viewport",Ao="popper",QL="reference",zm=Sa.reduce(function(n,e){return n.concat([e+"-"+Zs,e+"-"+ca])},[]),Cv=[].concat(Sa,[Fd]).reduce(function(n,e){return n.concat([e,e+"-"+Zs,e+"-"+ca])},[]),eP="beforeRead",tP="read",nP="afterRead",iP="beforeMain",rP="main",sP="afterMain",oP="beforeWrite",aP="write",lP="afterWrite",cP=[eP,tP,nP,iP,rP,sP,oP,aP,lP];function Ci(n){return n?(n.nodeName||"").toLowerCase():null}function Un(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var e=n.ownerDocument;return e&&e.defaultView||window}return n}function ss(n){var e=Un(n).Element;return n instanceof e||n instanceof Element}function Xn(n){var e=Un(n).HTMLElement;return n instanceof e||n instanceof HTMLElement}function Bd(n){if(typeof ShadowRoot>"u")return!1;var e=Un(n).ShadowRoot;return n instanceof e||n instanceof ShadowRoot}function uP(n){var e=n.state;Object.keys(e.elements).forEach(function(t){var i=e.styles[t]||{},r=e.attributes[t]||{},s=e.elements[t];!Xn(s)||!Ci(s)||(Object.assign(s.style,i),Object.keys(r).forEach(function(o){var a=r[o];a===!1?s.removeAttribute(o):s.setAttribute(o,a===!0?"":a)}))})}function fP(n){var e=n.state,t={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,t.popper),e.styles=t,e.elements.arrow&&Object.assign(e.elements.arrow.style,t.arrow),function(){Object.keys(e.elements).forEach(function(i){var r=e.elements[i],s=e.attributes[i]||{},o=Object.keys(e.styles.hasOwnProperty(i)?e.styles[i]:t[i]),a=o.reduce(function(l,c){return l[c]="",l},{});!Xn(r)||!Ci(r)||(Object.assign(r.style,a),Object.keys(s).forEach(function(l){r.removeAttribute(l)}))})}}const dP={name:"applyStyles",enabled:!0,phase:"write",fn:uP,effect:fP,requires:["computeStyles"]};function Ti(n){return n.split("-")[0]}var ts=Math.max,Yl=Math.min,Qs=Math.round;function Ff(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function Lv(){return!/^((?!chrome|android).)*safari/i.test(Ff())}function eo(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!1);var i=n.getBoundingClientRect(),r=1,s=1;e&&Xn(n)&&(r=n.offsetWidth>0&&Qs(i.width)/n.offsetWidth||1,s=n.offsetHeight>0&&Qs(i.height)/n.offsetHeight||1);var o=ss(n)?Un(n):window,a=o.visualViewport,l=!Lv()&&t,c=(i.left+(l&&a?a.offsetLeft:0))/r,u=(i.top+(l&&a?a.offsetTop:0))/s,f=i.width/r,d=i.height/s;return{width:f,height:d,top:u,right:c+f,bottom:u+d,left:c,x:c,y:u}}function kd(n){var e=eo(n),t=n.offsetWidth,i=n.offsetHeight;return Math.abs(e.width-t)<=1&&(t=e.width),Math.abs(e.height-i)<=1&&(i=e.height),{x:n.offsetLeft,y:n.offsetTop,width:t,height:i}}function Pv(n,e){var t=e.getRootNode&&e.getRootNode();if(n.contains(e))return!0;if(t&&Bd(t)){var i=e;do{if(i&&n.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function or(n){return Un(n).getComputedStyle(n)}function hP(n){return["table","td","th"].indexOf(Ci(n))>=0}function Cr(n){return((ss(n)?n.ownerDocument:n.document)||window.document).documentElement}function pc(n){return Ci(n)==="html"?n:n.assignedSlot||n.parentNode||(Bd(n)?n.host:null)||Cr(n)}function Gm(n){return!Xn(n)||or(n).position==="fixed"?null:n.offsetParent}function pP(n){var e=/firefox/i.test(Ff()),t=/Trident/i.test(Ff());if(t&&Xn(n)){var i=or(n);if(i.position==="fixed")return null}var r=pc(n);for(Bd(r)&&(r=r.host);Xn(r)&&["html","body"].indexOf(Ci(r))<0;){var s=or(r);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||e&&s.willChange==="filter"||e&&s.filter&&s.filter!=="none")return r;r=r.parentNode}return null}function ba(n){for(var e=Un(n),t=Gm(n);t&&hP(t)&&or(t).position==="static";)t=Gm(t);return t&&(Ci(t)==="html"||Ci(t)==="body"&&or(t).position==="static")?e:t||pP(n)||e}function Hd(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function Vo(n,e,t){return ts(n,Yl(e,t))}function mP(n,e,t){var i=Vo(n,e,t);return i>t?t:i}function Iv(){return{top:0,right:0,bottom:0,left:0}}function Dv(n){return Object.assign({},Iv(),n)}function Nv(n,e){return e.reduce(function(t,i){return t[i]=n,t},{})}var gP=function(n,e){return n=typeof n=="function"?n(Object.assign({},e.rects,{placement:e.placement})):n,Dv(typeof n!="number"?n:Nv(n,Sa))};function _P(n){var e,t=n.state,i=n.name,r=n.options,s=t.elements.arrow,o=t.modifiersData.popperOffsets,a=Ti(t.placement),l=Hd(a),c=[wn,Kn].indexOf(a)>=0,u=c?"height":"width";if(!(!s||!o)){var f=gP(r.padding,t),d=kd(s),p=l==="y"?An:wn,g=l==="y"?Yn:Kn,v=t.rects.reference[u]+t.rects.reference[l]-o[l]-t.rects.popper[u],m=o[l]-t.rects.reference[l],h=ba(s),S=h?l==="y"?h.clientHeight||0:h.clientWidth||0:0,y=v/2-m/2,_=f[p],A=S-d[u]-f[g],C=S/2-d[u]/2+y,T=Vo(_,C,A),N=l;t.modifiersData[i]=(e={},e[N]=T,e.centerOffset=T-C,e)}}function vP(n){var e=n.state,t=n.options,i=t.element,r=i===void 0?"[data-popper-arrow]":i;r!=null&&(typeof r=="string"&&(r=e.elements.popper.querySelector(r),!r)||Pv(e.elements.popper,r)&&(e.elements.arrow=r))}const xP={name:"arrow",enabled:!0,phase:"main",fn:_P,effect:vP,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function to(n){return n.split("-")[1]}var yP={top:"auto",right:"auto",bottom:"auto",left:"auto"};function SP(n,e){var t=n.x,i=n.y,r=e.devicePixelRatio||1;return{x:Qs(t*r)/r||0,y:Qs(i*r)/r||0}}function Wm(n){var e,t=n.popper,i=n.popperRect,r=n.placement,s=n.variation,o=n.offsets,a=n.position,l=n.gpuAcceleration,c=n.adaptive,u=n.roundOffsets,f=n.isFixed,d=o.x,p=d===void 0?0:d,g=o.y,v=g===void 0?0:g,m=typeof u=="function"?u({x:p,y:v}):{x:p,y:v};p=m.x,v=m.y;var h=o.hasOwnProperty("x"),S=o.hasOwnProperty("y"),y=wn,_=An,A=window;if(c){var C=ba(t),T="clientHeight",N="clientWidth";if(C===Un(t)&&(C=Cr(t),or(C).position!=="static"&&a==="absolute"&&(T="scrollHeight",N="scrollWidth")),C=C,r===An||(r===wn||r===Kn)&&s===ca){_=Yn;var M=f&&C===A&&A.visualViewport?A.visualViewport.height:C[T];v-=M-i.height,v*=l?1:-1}if(r===wn||(r===An||r===Yn)&&s===ca){y=Kn;var b=f&&C===A&&A.visualViewport?A.visualViewport.width:C[N];p-=b-i.width,p*=l?1:-1}}var D=Object.assign({position:a},c&&yP),W=u===!0?SP({x:p,y:v},Un(t)):{x:p,y:v};if(p=W.x,v=W.y,l){var F;return Object.assign({},D,(F={},F[_]=S?"0":"",F[y]=h?"0":"",F.transform=(A.devicePixelRatio||1)<=1?"translate("+p+"px, "+v+"px)":"translate3d("+p+"px, "+v+"px, 0)",F))}return Object.assign({},D,(e={},e[_]=S?v+"px":"",e[y]=h?p+"px":"",e.transform="",e))}function bP(n){var e=n.state,t=n.options,i=t.gpuAcceleration,r=i===void 0?!0:i,s=t.adaptive,o=s===void 0?!0:s,a=t.roundOffsets,l=a===void 0?!0:a,c={placement:Ti(e.placement),variation:to(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:r,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Wm(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Wm(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const MP={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:bP,data:{}};var cl={passive:!0};function EP(n){var e=n.state,t=n.instance,i=n.options,r=i.scroll,s=r===void 0?!0:r,o=i.resize,a=o===void 0?!0:o,l=Un(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&c.forEach(function(u){u.addEventListener("scroll",t.update,cl)}),a&&l.addEventListener("resize",t.update,cl),function(){s&&c.forEach(function(u){u.removeEventListener("scroll",t.update,cl)}),a&&l.removeEventListener("resize",t.update,cl)}}const TP={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:EP,data:{}};var AP={left:"right",right:"left",bottom:"top",top:"bottom"};function wl(n){return n.replace(/left|right|bottom|top/g,function(e){return AP[e]})}var wP={start:"end",end:"start"};function jm(n){return n.replace(/start|end/g,function(e){return wP[e]})}function Vd(n){var e=Un(n),t=e.pageXOffset,i=e.pageYOffset;return{scrollLeft:t,scrollTop:i}}function zd(n){return eo(Cr(n)).left+Vd(n).scrollLeft}function RP(n,e){var t=Un(n),i=Cr(n),r=t.visualViewport,s=i.clientWidth,o=i.clientHeight,a=0,l=0;if(r){s=r.width,o=r.height;var c=Lv();(c||!c&&e==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}return{width:s,height:o,x:a+zd(n),y:l}}function CP(n){var e,t=Cr(n),i=Vd(n),r=(e=n.ownerDocument)==null?void 0:e.body,s=ts(t.scrollWidth,t.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),o=ts(t.scrollHeight,t.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),a=-i.scrollLeft+zd(n),l=-i.scrollTop;return or(r||t).direction==="rtl"&&(a+=ts(t.clientWidth,r?r.clientWidth:0)-s),{width:s,height:o,x:a,y:l}}function Gd(n){var e=or(n),t=e.overflow,i=e.overflowX,r=e.overflowY;return/auto|scroll|overlay|hidden/.test(t+r+i)}function Uv(n){return["html","body","#document"].indexOf(Ci(n))>=0?n.ownerDocument.body:Xn(n)&&Gd(n)?n:Uv(pc(n))}function zo(n,e){var t;e===void 0&&(e=[]);var i=Uv(n),r=i===((t=n.ownerDocument)==null?void 0:t.body),s=Un(i),o=r?[s].concat(s.visualViewport||[],Gd(i)?i:[]):i,a=e.concat(o);return r?a:a.concat(zo(pc(o)))}function Bf(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function LP(n,e){var t=eo(n,!1,e==="fixed");return t.top=t.top+n.clientTop,t.left=t.left+n.clientLeft,t.bottom=t.top+n.clientHeight,t.right=t.left+n.clientWidth,t.width=n.clientWidth,t.height=n.clientHeight,t.x=t.left,t.y=t.top,t}function Xm(n,e,t){return e===Rv?Bf(RP(n,t)):ss(e)?LP(e,t):Bf(CP(Cr(n)))}function PP(n){var e=zo(pc(n)),t=["absolute","fixed"].indexOf(or(n).position)>=0,i=t&&Xn(n)?ba(n):n;return ss(i)?e.filter(function(r){return ss(r)&&Pv(r,i)&&Ci(r)!=="body"}):[]}function IP(n,e,t,i){var r=e==="clippingParents"?PP(n):[].concat(e),s=[].concat(r,[t]),o=s[0],a=s.reduce(function(l,c){var u=Xm(n,c,i);return l.top=ts(u.top,l.top),l.right=Yl(u.right,l.right),l.bottom=Yl(u.bottom,l.bottom),l.left=ts(u.left,l.left),l},Xm(n,o,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Ov(n){var e=n.reference,t=n.element,i=n.placement,r=i?Ti(i):null,s=i?to(i):null,o=e.x+e.width/2-t.width/2,a=e.y+e.height/2-t.height/2,l;switch(r){case An:l={x:o,y:e.y-t.height};break;case Yn:l={x:o,y:e.y+e.height};break;case Kn:l={x:e.x+e.width,y:a};break;case wn:l={x:e.x-t.width,y:a};break;default:l={x:e.x,y:e.y}}var c=r?Hd(r):null;if(c!=null){var u=c==="y"?"height":"width";switch(s){case Zs:l[c]=l[c]-(e[u]/2-t[u]/2);break;case ca:l[c]=l[c]+(e[u]/2-t[u]/2);break}}return l}function ua(n,e){e===void 0&&(e={});var t=e,i=t.placement,r=i===void 0?n.placement:i,s=t.strategy,o=s===void 0?n.strategy:s,a=t.boundary,l=a===void 0?ZL:a,c=t.rootBoundary,u=c===void 0?Rv:c,f=t.elementContext,d=f===void 0?Ao:f,p=t.altBoundary,g=p===void 0?!1:p,v=t.padding,m=v===void 0?0:v,h=Dv(typeof m!="number"?m:Nv(m,Sa)),S=d===Ao?QL:Ao,y=n.rects.popper,_=n.elements[g?S:d],A=IP(ss(_)?_:_.contextElement||Cr(n.elements.popper),l,u,o),C=eo(n.elements.reference),T=Ov({reference:C,element:y,placement:r}),N=Bf(Object.assign({},y,T)),M=d===Ao?N:C,b={top:A.top-M.top+h.top,bottom:M.bottom-A.bottom+h.bottom,left:A.left-M.left+h.left,right:M.right-A.right+h.right},D=n.modifiersData.offset;if(d===Ao&&D){var W=D[r];Object.keys(b).forEach(function(F){var k=[Kn,Yn].indexOf(F)>=0?1:-1,K=[An,Yn].indexOf(F)>=0?"y":"x";b[F]+=W[K]*k})}return b}function DP(n,e){e===void 0&&(e={});var t=e,i=t.placement,r=t.boundary,s=t.rootBoundary,o=t.padding,a=t.flipVariations,l=t.allowedAutoPlacements,c=l===void 0?Cv:l,u=to(i),f=u?a?zm:zm.filter(function(g){return to(g)===u}):Sa,d=f.filter(function(g){return c.indexOf(g)>=0});d.length===0&&(d=f);var p=d.reduce(function(g,v){return g[v]=ua(n,{placement:v,boundary:r,rootBoundary:s,padding:o})[Ti(v)],g},{});return Object.keys(p).sort(function(g,v){return p[g]-p[v]})}function NP(n){if(Ti(n)===Fd)return[];var e=wl(n);return[jm(n),e,jm(e)]}function UP(n){var e=n.state,t=n.options,i=n.name;if(!e.modifiersData[i]._skip){for(var r=t.mainAxis,s=r===void 0?!0:r,o=t.altAxis,a=o===void 0?!0:o,l=t.fallbackPlacements,c=t.padding,u=t.boundary,f=t.rootBoundary,d=t.altBoundary,p=t.flipVariations,g=p===void 0?!0:p,v=t.allowedAutoPlacements,m=e.options.placement,h=Ti(m),S=h===m,y=l||(S||!g?[wl(m)]:NP(m)),_=[m].concat(y).reduce(function(re,de){return re.concat(Ti(de)===Fd?DP(e,{placement:de,boundary:u,rootBoundary:f,padding:c,flipVariations:g,allowedAutoPlacements:v}):de)},[]),A=e.rects.reference,C=e.rects.popper,T=new Map,N=!0,M=_[0],b=0;b<_.length;b++){var D=_[b],W=Ti(D),F=to(D)===Zs,k=[An,Yn].indexOf(W)>=0,K=k?"width":"height",G=ua(e,{placement:D,boundary:u,rootBoundary:f,altBoundary:d,padding:c}),Z=k?F?Kn:wn:F?Yn:An;A[K]>C[K]&&(Z=wl(Z));var $=wl(Z),ce=[];if(s&&ce.push(G[W]<=0),a&&ce.push(G[Z]<=0,G[$]<=0),ce.every(function(re){return re})){M=D,N=!1;break}T.set(D,ce)}if(N)for(var ve=g?3:1,Te=function(re){var de=_.find(function(Ae){var ge=T.get(Ae);if(ge)return ge.slice(0,re).every(function(we){return we})});if(de)return M=de,"break"},ke=ve;ke>0;ke--){var it=Te(ke);if(it==="break")break}e.placement!==M&&(e.modifiersData[i]._skip=!0,e.placement=M,e.reset=!0)}}const OP={name:"flip",enabled:!0,phase:"main",fn:UP,requiresIfExists:["offset"],data:{_skip:!1}};function $m(n,e,t){return t===void 0&&(t={x:0,y:0}),{top:n.top-e.height-t.y,right:n.right-e.width+t.x,bottom:n.bottom-e.height+t.y,left:n.left-e.width-t.x}}function qm(n){return[An,Kn,Yn,wn].some(function(e){return n[e]>=0})}function FP(n){var e=n.state,t=n.name,i=e.rects.reference,r=e.rects.popper,s=e.modifiersData.preventOverflow,o=ua(e,{elementContext:"reference"}),a=ua(e,{altBoundary:!0}),l=$m(o,i),c=$m(a,r,s),u=qm(l),f=qm(c);e.modifiersData[t]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:f},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":f})}const BP={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:FP};function kP(n,e,t){var i=Ti(n),r=[wn,An].indexOf(i)>=0?-1:1,s=typeof t=="function"?t(Object.assign({},e,{placement:n})):t,o=s[0],a=s[1];return o=o||0,a=(a||0)*r,[wn,Kn].indexOf(i)>=0?{x:a,y:o}:{x:o,y:a}}function HP(n){var e=n.state,t=n.options,i=n.name,r=t.offset,s=r===void 0?[0,0]:r,o=Cv.reduce(function(u,f){return u[f]=kP(f,e.rects,s),u},{}),a=o[e.placement],l=a.x,c=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[i]=o}const VP={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:HP};function zP(n){var e=n.state,t=n.name;e.modifiersData[t]=Ov({reference:e.rects.reference,element:e.rects.popper,placement:e.placement})}const GP={name:"popperOffsets",enabled:!0,phase:"read",fn:zP,data:{}};function WP(n){return n==="x"?"y":"x"}function jP(n){var e=n.state,t=n.options,i=n.name,r=t.mainAxis,s=r===void 0?!0:r,o=t.altAxis,a=o===void 0?!1:o,l=t.boundary,c=t.rootBoundary,u=t.altBoundary,f=t.padding,d=t.tether,p=d===void 0?!0:d,g=t.tetherOffset,v=g===void 0?0:g,m=ua(e,{boundary:l,rootBoundary:c,padding:f,altBoundary:u}),h=Ti(e.placement),S=to(e.placement),y=!S,_=Hd(h),A=WP(_),C=e.modifiersData.popperOffsets,T=e.rects.reference,N=e.rects.popper,M=typeof v=="function"?v(Object.assign({},e.rects,{placement:e.placement})):v,b=typeof M=="number"?{mainAxis:M,altAxis:M}:Object.assign({mainAxis:0,altAxis:0},M),D=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,W={x:0,y:0};if(C){if(s){var F,k=_==="y"?An:wn,K=_==="y"?Yn:Kn,G=_==="y"?"height":"width",Z=C[_],$=Z+m[k],ce=Z-m[K],ve=p?-N[G]/2:0,Te=S===Zs?T[G]:N[G],ke=S===Zs?-N[G]:-T[G],it=e.elements.arrow,re=p&&it?kd(it):{width:0,height:0},de=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Iv(),Ae=de[k],ge=de[K],we=Vo(0,T[G],re[G]),tt=y?T[G]/2-ve-we-Ae-b.mainAxis:Te-we-Ae-b.mainAxis,Fe=y?-T[G]/2+ve+we+ge+b.mainAxis:ke+we+ge+b.mainAxis,ct=e.elements.arrow&&ba(e.elements.arrow),U=ct?_==="y"?ct.clientTop||0:ct.clientLeft||0:0,B=(F=D==null?void 0:D[_])!=null?F:0,w=Z+tt-B-U,se=Z+Fe-B,ee=Vo(p?Yl($,w):$,Z,p?ts(ce,se):ce);C[_]=ee,W[_]=ee-Z}if(a){var ne,R=_==="x"?An:wn,P=_==="x"?Yn:Kn,O=C[A],H=A==="y"?"height":"width",le=O+m[R],E=O-m[P],x=[An,wn].indexOf(h)!==-1,I=(ne=D==null?void 0:D[A])!=null?ne:0,j=x?le:O-T[H]-N[H]-I+b.altAxis,J=x?O+T[H]+N[H]-I-b.altAxis:E,Y=p&&x?mP(j,O,J):Vo(p?j:le,O,p?J:E);C[A]=Y,W[A]=Y-O}e.modifiersData[i]=W}}const XP={name:"preventOverflow",enabled:!0,phase:"main",fn:jP,requiresIfExists:["offset"]};function $P(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function qP(n){return n===Un(n)||!Xn(n)?Vd(n):$P(n)}function YP(n){var e=n.getBoundingClientRect(),t=Qs(e.width)/n.offsetWidth||1,i=Qs(e.height)/n.offsetHeight||1;return t!==1||i!==1}function KP(n,e,t){t===void 0&&(t=!1);var i=Xn(e),r=Xn(e)&&YP(e),s=Cr(e),o=eo(n,r,t),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(i||!i&&!t)&&((Ci(e)!=="body"||Gd(s))&&(a=qP(e)),Xn(e)?(l=eo(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):s&&(l.x=zd(s))),{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function JP(n){var e=new Map,t=new Set,i=[];n.forEach(function(s){e.set(s.name,s)});function r(s){t.add(s.name);var o=[].concat(s.requires||[],s.requiresIfExists||[]);o.forEach(function(a){if(!t.has(a)){var l=e.get(a);l&&r(l)}}),i.push(s)}return n.forEach(function(s){t.has(s.name)||r(s)}),i}function ZP(n){var e=JP(n);return cP.reduce(function(t,i){return t.concat(e.filter(function(r){return r.phase===i}))},[])}function QP(n){var e;return function(){return e||(e=new Promise(function(t){Promise.resolve().then(function(){e=void 0,t(n())})})),e}}function eI(n){var e=n.reduce(function(t,i){var r=t[i.name];return t[i.name]=r?Object.assign({},r,i,{options:Object.assign({},r.options,i.options),data:Object.assign({},r.data,i.data)}):i,t},{});return Object.keys(e).map(function(t){return e[t]})}var Ym={placement:"bottom",modifiers:[],strategy:"absolute"};function Km(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return!e.some(function(i){return!(i&&typeof i.getBoundingClientRect=="function")})}function tI(n){n===void 0&&(n={});var e=n,t=e.defaultModifiers,i=t===void 0?[]:t,r=e.defaultOptions,s=r===void 0?Ym:r;return function(o,a,l){l===void 0&&(l=s);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ym,s),modifiersData:{},elements:{reference:o,popper:a},attributes:{},styles:{}},u=[],f=!1,d={state:c,setOptions:function(v){var m=typeof v=="function"?v(c.options):v;g(),c.options=Object.assign({},s,c.options,m),c.scrollParents={reference:ss(o)?zo(o):o.contextElement?zo(o.contextElement):[],popper:zo(a)};var h=ZP(eI([].concat(i,c.options.modifiers)));return c.orderedModifiers=h.filter(function(S){return S.enabled}),p(),d.update()},forceUpdate:function(){if(!f){var v=c.elements,m=v.reference,h=v.popper;if(Km(m,h)){c.rects={reference:KP(m,ba(h),c.options.strategy==="fixed"),popper:kd(h)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(N){return c.modifiersData[N.name]=Object.assign({},N.data)});for(var S=0;S<c.orderedModifiers.length;S++){if(c.reset===!0){c.reset=!1,S=-1;continue}var y=c.orderedModifiers[S],_=y.fn,A=y.options,C=A===void 0?{}:A,T=y.name;typeof _=="function"&&(c=_({state:c,options:C,name:T,instance:d})||c)}}}},update:QP(function(){return new Promise(function(v){d.forceUpdate(),v(c)})}),destroy:function(){g(),f=!0}};if(!Km(o,a))return d;d.setOptions(l).then(function(v){!f&&l.onFirstUpdate&&l.onFirstUpdate(v)});function p(){c.orderedModifiers.forEach(function(v){var m=v.name,h=v.options,S=h===void 0?{}:h,y=v.effect;if(typeof y=="function"){var _=y({state:c,name:m,instance:d,options:S}),A=function(){};u.push(_||A)}})}function g(){u.forEach(function(v){return v()}),u=[]}return d}}var nI=[TP,GP,MP,dP,VP,OP,XP,xP,BP],iI=tI({defaultModifiers:nI});function rI(n,e=[0,8],t,i={}){const r=Ze(null),s=Ze(null),o=Ze(null),a=Ze(n),l=Ze(!1);let c=null,u=null;const f=()=>{c&&(clearTimeout(c),c=null),u&&(clearTimeout(u),u=null)},d=async()=>{var _;r.value&&s.value&&((_=o.value)==null||_.destroy(),await Yr(),o.value=iI(r.value,s.value,{placement:n,strategy:"absolute",modifiers:[{name:"offset",options:{offset:e}},{name:"preventOverflow",options:{boundary:"viewport",padding:8}},{name:"flip",options:{fallbackPlacements:["top","bottom","left","right"]}},{name:"arrow",options:{element:".tooltip-arrow",padding:8}},{name:"updateActualPlacement",enabled:!0,phase:"afterWrite",fn({state:A}){a.value=A.placement}}]}))},p=async()=>{f(),l.value||(c=window.setTimeout(async()=>{var _;l.value=!0,await Yr(),s.value&&(await d(),(_=i.onShow)==null||_.call(i),setTimeout(()=>{var A;(A=o.value)==null||A.forceUpdate()},0))},t==="hover"?150:0))},g=()=>{f(),l.value&&(u=window.setTimeout(()=>{var _,A;l.value=!1,(_=o.value)==null||_.destroy(),o.value=null,(A=i.onHide)==null||A.call(i)},t==="hover"?100:0))},v=()=>{l.value?g():p()},m=()=>{var _;(_=o.value)==null||_.forceUpdate()},h=()=>{f(),o.value&&(o.value.destroy(),o.value=null)},S=()=>{t==="hover"&&p()},y=()=>{t==="hover"&&g()};return Cn(async()=>{var _,A,C;await Yr(),t==="click"&&((_=r.value)==null||_.addEventListener("click",v)),t==="hover"&&((A=r.value)==null||A.addEventListener("mouseenter",S),(C=r.value)==null||C.addEventListener("mouseleave",y)),JL(s,()=>{l.value&&t==="click"&&g()})}),Zf(()=>{var _,A,C;h(),t==="click"&&((_=r.value)==null||_.removeEventListener("click",v)),t==="hover"&&((A=r.value)==null||A.removeEventListener("mouseenter",S),(C=r.value)==null||C.removeEventListener("mouseleave",y))}),Zi(()=>n,()=>{l.value&&d()}),Zi(l,_=>{t==="hover"&&Yr(()=>{_&&s.value&&(s.value.addEventListener("mouseenter",S),s.value.addEventListener("mouseleave",y))})}),{triggerRef:r,containerRef:s,popperInstance:o,actualPlacement:a,isOpen:l,initializePopper:d,updatePopper:m,destroyPopper:h,showTooltip:p,hideTooltip:g}}const sI={class:"tooltip-wrapper"},oI={class:"tooltip-content"},aI=vt({__name:"ToolTip",props:{content:{default:""},placement:{default:"bottom-end"},offset:{default:()=>[0,8]},trigger:{default:"hover"},arrow:{type:Boolean,default:!0},triggerClass:{},className:{},contentClass:{},teleport:{type:Boolean,default:!0},styles:{}},emits:["onShow","onHide"],setup(n,{emit:e}){const t=n,i=e,{triggerRef:r,containerRef:s,actualPlacement:o,initializePopper:a,destroyPopper:l,isOpen:c}=rI(t.placement,t.offset,t.trigger,{onShow:()=>i("onShow"),onHide:()=>i("onHide")}),u=ni(()=>{if(!t.arrow)return"";const f=o.value;return f.includes("top")?"tooltip-arrow--bottom":f.includes("bottom")?"tooltip-arrow--top":f.includes("left")?"tooltip-arrow--right":f.includes("right")?"tooltip-arrow--left":"tooltip-arrow--top"});return Cn(()=>{a()}),di(()=>{l()}),(f,d)=>(_e(),Be("div",sI,[ie("span",{ref_key:"triggerRef",ref:r,class:mn(["tooltip-trigger",f.triggerClass])},[jr(f.$slots,"trigger",Qd(Pu({isOpen:me(c)})))],2),me(c)?(_e(),Bt(ha(f.teleport?F0:"div"),{key:0,to:"body"},{default:ar(()=>[me(c)?(_e(),Be("div",{key:0,style:Ji(f.styles),ref_key:"containerRef",ref:s,class:mn(["tooltip-container tooltip-container--open",f.className]),role:"tooltip","aria-hidden":"true"},[ie("div",oI,[jr(f.$slots,"default",Qd(Pu({isOpen:me(c)})),()=>[qo($e(f.content),1)])]),f.arrow?(_e(),Be("div",{key:0,class:mn(["tooltip-arrow",u.value])},null,2)):Xt("",!0)],6)):Xt("",!0)]),_:3})):Xt("",!0)]))}}),lI={id:"experiences"},cI={class:"glass column"},uI={class:"glass",id:"pro"},fI=vt({__name:"ExperiencesComponent",setup(n){const{t:e}=Qt();return(t,i)=>(_e(),Be("div",lI,[ie("div",cI,[ie("h1",null,$e(me(At)(me(e)("titles.studies"))),1),ze(To,{date:"2024 - 2026",location:"Faculté des sciences de Montpellier",description:"Master Imagine"}),i[0]||(i[0]=ie("div",{class:"separator_h"},null,-1)),ze(me(aI),{content:"Réalisation d'Application, Développement et Validation"},{trigger:ar(()=>[ze(To,{date:"2021 - 2024",location:"IUT de Montpellier",description:"BUT Informatique (parcours RACDV)"})]),_:1}),i[1]||(i[1]=ie("div",{class:"separator_h"},null,-1)),ze(To,{date:"2021",location:"Lycée Albert Einstein de Bagnols sur Cèze",description:"Bac général options NSI et Mathématiques expertes"})]),ie("div",uI,[ie("h1",null,$e(me(At)(me(e)("titles.professional"))),1),ze(To,{date:`${me(At)(me(e)("dates.april"))} - ${me(At)(me(e)("dates.june"))} 2024`,location:"Andragogy (Sète)",description:me(At)(me(e)("experiences.professional.job_andragogy"))},null,8,["date","description"]),i[2]||(i[2]=ie("div",{class:"separator_h"},null,-1)),ze(To,{date:`${me(At)(me(e)("dates.april"))} 2023 - ${me(At)(me(e)("dates.january"))} 2024`,location:"Kapix (Montpellier)",description:me(At)(me(e)("experiences.professional.job_kapix"))},null,8,["date","description"])])]))}}),dI=On(fI,[["__scopeId","data-v-e2920f77"]]),hI=vt({__name:"ProjectWeb",setup(n){const{t:e}=Qt();return(t,i)=>(_e(),Bt(ya,{title:me(At)(me(e)("projects.web.title")),context:me(e)("projects.web.context"),technologies:["Javascript / Typescript","Vue.js","Node.js","SQL","PHP"],links:[{url:"https://github.com/Projet-Web-Recette/Frontend-recette",name:"git SatisCraftory"},{url:"https://github.com/odilonv/explore",name:"git Explore"},{url:"https://github.com/Crhonopost/Rich-Vote",name:"git Rich Vote"}]},{default:ar(()=>[ze(Ei,{title:"SatisCraftory",desc:me(e)("projects.web.satiscraftory_desc"),"image-path":"/projects/web/satiscraftory.png","image-alt":"SatisCraftory screenshot","image-first":!1},null,8,["desc"]),ze(Ei,{title:"Explore",desc:me(e)("projects.web.explore_desc"),"image-path":"/projects/web/explore_ui.png","image-alt":"Explore application screenshot","image-first":!0},null,8,["desc"]),ze(Ei,{title:"Rich Vote",desc:me(e)("projects.web.rich_desc"),"image-path":"/projects/web/RichVote_liste.png","image-alt":"Rich Vote application screenshot","image-first":!1},null,8,["desc"])]),_:1},8,["title","context"]))}});class pI{constructor(e=!0){en(this,"fps",0);en(this,"frameCount",0);en(this,"lastTime",performance.now());en(this,"fpsUpdateInterval",500);en(this,"lastFpsUpdate",0);en(this,"callbacks",[]);en(this,"fpsHistory",[]);en(this,"historySize",10);en(this,"averageFps",60);this.enabled=e,e&&this.startMonitoring()}startMonitoring(){const e=t=>{if(this.frameCount++,t-this.lastFpsUpdate>=this.fpsUpdateInterval){const i=Math.round(this.frameCount*1e3/(t-this.lastFpsUpdate));this.frameCount=0,this.lastFpsUpdate=t,this.updateFpsHistory(i),this.fps=i,this.callbacks.forEach(r=>r(this.fps,this.averageFps))}this.lastTime=t,requestAnimationFrame(e)};requestAnimationFrame(e)}updateFpsHistory(e){this.fpsHistory.push(e),this.fpsHistory.length>this.historySize?(this.fpsHistory.shift(),this.averageFps=Math.round(this.fpsHistory.reduce((t,i)=>t+i,0)/this.fpsHistory.length)):this.averageFps=-1}onFPSUpdate(e){return this.callbacks.push(e),()=>{const t=this.callbacks.indexOf(e);t>-1&&this.callbacks.splice(t,1)}}getCurrentFPS(){return this.fps}dispose(){this.callbacks=[]}}const mI=new pI,gI={key:0,id:"performance-banner",class:"performance-banner"},_I={class:"banner-content"},vI={class:"banner-text"},xI={class:"banner-title"},yI={class:"banner-description"},SI={class:"banner-description"},bI={class:"banner-actions"},Jm=40,MI=vt({__name:"PerformancePopup",emits:["lowerResolution"],setup(n,{emit:e}){const{t}=Qt(),i=e,r=Ze(60);let s=0;const o=Ze(0),a=mI.onFPSUpdate((g,v)=>{if(r.value=v,r.value>Jm&&c.value)c.value=!1,u=!1;else if(u)return;r.value>-1&&r.value<Jm&&(c.value=!0,u=!0)});function l(){const g=performance.now();o.value=Math.round(g-s),s=g,requestAnimationFrame(l)}Cn(()=>{s=performance.now(),l()}),di(()=>{a()});const c=Ze(!1);let u=!1;function f(){i("lowerResolution"),c.value=!1}function d(){c.value=!1}const p=ni(()=>({title:t("performances.title",{fps:r.value}),optimize:t("performances.optimize"),proposition:t("performances.proposition"),note:t("performances.note")}));return(g,v)=>c.value?(_e(),Be("div",gI,[ie("div",_I,[v[0]||(v[0]=ie("div",{class:"banner-icon"},"⚡",-1)),ie("div",vI,[ie("span",xI,$e(p.value.title),1),ie("span",yI,$e(p.value.proposition),1),ie("span",SI,$e(p.value.note),1)]),ie("div",bI,[ze(Qi,{disable:!1,content:me(t)("performances.optimize"),class:"btn-optimize",onClick:f},null,8,["content"]),ie("button",{class:"btn-dismiss",onClick:d}," x ")])])])):Xt("",!0)}}),EI={id:"layout"},TI=vt({__name:"App",setup(n){const e=[{name:"C++",icon:"./logo/cpp.png",anotation:Sn.LANGUAGE,isWeb:!1},{name:"GLSL",icon:"./logo/opengl.png",anotation:Sn.LANGUAGE,isWeb:!1},{name:"Godot",icon:"./logo/godot.png",anotation:Sn.TOOL,isWeb:!1},{name:"Java",icon:"./logo/java.png",anotation:Sn.LANGUAGE,isWeb:!1},{name:"C#",icon:"./logo/csharp.png",anotation:Sn.LANGUAGE,isWeb:!1},{name:"HTML",icon:"./logo/html.png",anotation:Sn.LANGUAGE,isWeb:!0},{name:"CSS",icon:"./logo/css.png",anotation:Sn.LANGUAGE,isWeb:!0},{name:"PostgreSQL",icon:"./logo/postgre.png",anotation:Sn.LANGUAGE,isWeb:!0},{name:"TypeScript",icon:"./logo/ts.png",anotation:Sn.LANGUAGE,isWeb:!0},{name:"NodeJS",icon:"./logo/node.png",anotation:Sn.TOOL,isWeb:!0},{name:"VueJS",icon:"./logo/vue.png",anotation:Sn.TOOL,isWeb:!0},{name:"NestJS",icon:"./logo/nest.png",anotation:Sn.TOOL,isWeb:!0}],t=Ze(),i=Ze(),r=Ze();let s=0;function o(u,f){var g,v,m;const d=f!=null;if(!((g=i==null?void 0:i.value)!=null&&g.canScrollTo(u))&&!d)return console.warn("Cannot scroll to:",u),(v=t.value)==null||v.setNavIdx(s),!1;const p=new URL(window.location.href);return p.searchParams.set("s",u.toString()),d?p.searchParams.set("p",f.toString()):p.searchParams.delete("p"),history.pushState({page:u},"",p),(m=i==null?void 0:i.value)==null||m.moveToSlide(u),r!=null&&r.value&&r.value.movePlaine(u-s>0?"front":"back"),s=u,!0}function a(u){var d;o(4,u)&&((d=t.value)==null||d.setNavIdx(4),c.value=u,r==null||r.value.movePlaine("front"))}const l=[hL,bL,_L,$L,hI],c=Ze(-1);return Cn(()=>{var v;if(!i.value)return;const u=new URLSearchParams(window.location.search),f=parseInt(u.get("s")||"0",10),d=parseInt(u.get("p")||"-1",10),p=isNaN(f)?0:f,g=isNaN(d)?null:d;i.value.moveToSlide(p),s=p,(v=t.value)==null||v.setNavIdx(s),g!==null&&p===4&&a(g)}),(u,f)=>{var d,p,g;return _e(),Be(Mt,null,[f[1]||(f[1]=ie("head",null,[ie("link",{href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined",rel:"stylesheet"})],-1)),ie("div",EI,[ie("header",null,[ze(Sb,{ref_key:"navRef",ref:t,onMoved:f[0]||(f[0]=v=>o(v,null)),"can-move-backward":(d=i.value)==null?void 0:d.canScroll("b"),"can-move-forward":(p=i.value)==null?void 0:p.canScroll("f"),"page-count":4},null,8,["can-move-backward","can-move-forward"])]),ie("main",null,[ze(MI,{onLowerResolution:(g=r.value)==null?void 0:g.optimize},null,8,["onLowerResolution"]),ze(H1,{ref_key:"sceneComponentRef",ref:r},null,512),ze(Tb,{ref_key:"depthListRef",ref:i,id:"depth"},{default:ar(()=>[ze(AL,{class:"item"}),ze(dI),ze(OL,{class:"item",skills:e}),ze(XL,{class:"item",onProjectClicked:a}),c.value>=0?(_e(),Bt(ha(l[c.value]),{key:0,class:"item"})):Xt("",!0)]),_:1},512)])])],64)}}}),AI=On(TI,[["__scopeId","data-v-01b95e8a"]]),wI=ob({legacy:!1,locale:"fr",fallbackLocale:"en",messages:{en:{hello:"hello",viewMore:"view more",dates:{january:"january",april:"april",june:"june"},titles:{about:"about",studies:"studies",professional:"professional",skills:"skills",projects:"projects",links:"links",technologies:"technologies",context:"context",learning:"learning",difficulties:"difficulties",next_steps:"next steps",fur_editor:"fur editor"},experiences:{professional:{job_andragogy:"web developer internship",job_kapix:"web developer internship"}},descriptions:{skills:"Here are some of the skills I have acquired over the years."},contents:{about:"I'm Nathan Souvignet, a fourth-year Computer Science student with a strong passion for computer graphics and video game development. I enjoy bringing new ideas to life, especially by creating tools and features that empower end users and developers to help them go further faster whether it's through rendering techniques, gameplay mechanics, or engine systems. My experience spans C++, OpenGL, Godot, and web technologies, and I’m always eager to learn and experiment."},projects:{shell:{quickDesc:"A small implementation done for this portfolio",context:"While building this website, I wanted to implement a small project to showcase my skills. I decided to create a shell texturing effect using WebGL and Three.js.",difficulties:"For now, all strands are perfectly aligned within the fur, which creates an unnatural grid-like pattern. I tried adding a random offset to each strand, but I'm still unsure how to achieve a more organic UV scaling. Another possible solution would be to adjust the root texture by adding fake 2D strands to hide the visible starting points."},rendering:{title:"rendering approaches",quickDesc:"Discovering ray tracing, fluid volume rendering with ray marching and other techniques",context:"In the context of my first year of master's degree, I had the opportunity to experiment on some rendering techniques. The first one being ray tracing (in deferred on the CPU) and the second being the render and simulation in real time of volumetric clouds",ray_tracing_desc:"I had the opportunity to work on the implementation of a simple ray tracer. I worked on implementing different intersections between ray and shapes as well as various effects such as refraction, reflection, and Beer-Lambert for lighting, as well as soft shadows. I also implemented a BVH as an acceleration structure to speed up the rendering of complex meshes.",volume_desc:"This project was an opportunity to discover different approaches to modeling (from noise, using particles) as well as rendering (using impostors to visualize particles, ray marching of a volume). I also had the opportunity to experiment with the geometry shader and compute shaders to minimize CPU-GPU communication in order to render particles efficiently. "},engine:{title:"game engine",quickDesc:"Developing game engines",context:"During the second semester of my first year of master's degree in Imagine at the Faculty of Sciences, I worked on a game engine project. Being passionate about video game creation, it was an excellent experience. Limited by the submission date, there is still much to add.",learnings:"My goal was to build a general purpose game engine. Through this project, I implemented an Entity-Component System, PBR rendering, a lightweight editor for debugging, and an early physics system handling collisions (AABB, OBB, spheres, planes, rays, and rigid bodies collision reactions). It was my first large-scale C++ project — a challenging but extremely rewarding experience. ",img_desc_0:"Some of the work done on the camera",img_desc_1:"Second example of camera",next_steps:"The first version taught me enough to start over. The upcoming V2 focuses on a stronger code architecture and takes inspiration from Godot's design, emphasizing inheritance and composition over a pure ECS approach.",features_list_title:"Some of the features I want to implement",features_list:["Independent renderer exposing a clear API (done)","Better resource and scene serialization management (done)","Improved logging and debugging tools (done)","Global illumination with light probes","Physics rework","Scripting support"]},games:{title:"game dev",quickDesc:"Some of my work surrounding game creation",context:"As a hobby I love making games. Most of the times it is more about implementing an idea rather than creating a full game",behavior_title:"Behavior tree",behavior_desc:"I created a behavior tree addon for Godot 4.2 mono. It allows you to create complex AI behaviors in a visual way, making it easier to manage and understand the logic behind AI actions. In the illustration on the right, for example, we can see the use of the extension within Godot's scene tree: if a node in the 'FollowMouse' action sequence fails, the system will then switch to the 'GoHome' sequence.",dicecraft_desc:"I participated in a game jam where, as a team of 3, we created a game called Dicecraft. The game is about crafting dice in order to manipulate randomness and maximize combos and units spawn quantities to fight against an AI. The game lacks content and polish, but it was a fun project and the core mechanics are solid.",other_title:"other projects",other_desc:"I have worked on several other projects, but they act more as experiments or proofs of concept rather than full-fledged games. These projects include various mechanics from 2D platformers about time control to magic spells programming. The illustration on the right come from my spell programming game. There is an interface to create spell and the result can be seen on the left in the scene. Symbol type and orientation matter, here we are expanding water with 3 symbols."},web:{title:"web dev",quickDesc:"Some of my work surrounding web development",context:"During my studies, I had the opportunity to work on several web projects. It was a great way to learn about web technologies and how to create advanced web applications.",satiscraftory_desc:"The goal of this project was to make a web application providing receipes around a specific theme. Ours was about the game Satisfactory. I worked on the frontend part of the application, which included a minigame that I build entirely using Vue.js reactivity.",explore_desc:"For this project, I worked on the backend part of a web application. Implementing pathfinding algorithms and database structure and optimization.",rich_desc:"I also worked on the backend of a web application for voting. The goal was to offer different ways to vote and tools to create and manages propositions."}},performances:{title:"Performance issues (avg: {fps} FPS)",optimize:"optimize",proposition:"Switch to performance mode?",note:"Some browsers may provide better performance."}},fr:{hello:"bonjour",viewMore:"voir plus",dates:{january:"janvier",april:"avril",june:"juin"},titles:{about:"à propos",studies:"études",professional:"professionnel",skills:"compétences",projects:"projets",links:"liens",technologies:"technologies",context:"contexte",learning:"apprentissage",difficulties:"difficultés",next_steps:"prochaines étapes",fur_editor:"éditeur de fourrure"},experiences:{professional:{job_andragogy:"stage de développeur web",job_kapix:"alternance de développeur web"}},descriptions:{skills:"Quelques compétences que j'ai acquises au fil des années."},contents:{about:"Je m'appelle Nathan Souvignet, étudiant en quatrième année d'informatique, passionné par le graphisme informatique et le développement de jeux vidéo. J'aime donner vie à de nouvelles idées, notamment en créant des outils et des fonctionnalités qui facilitent le travail des artistes et des développeurs que ce soit par des techniques de rendu innovantes, des mécaniques de jeu ou des systèmes de moteur. J’ai de l’expérience en C++, OpenGL, Godot et technologies web, et je suis toujours motivé à apprendre et à expérimenter."},projects:{shell:{quickDesc:"Une implémentation rapide pour le portfolio",context:"En développant ce site web, j'ai voulu implémenter cette technique de rendu de fourrure qui avait l'air amusante. L'idée est de superposer plusieurs couches du même mesh et de ne pas afficher certains pixels du mesh pour donner l'impression qu'il y a un volume. Alors qu'en réalité il s'agit juste de plusieurs tranches superposées. Pour cette implémentation j'ai utilisé three.js et webgl.",difficulties:"Pour l'instant, tous les poils sont parfaitement alignés, ce qui crée un motif en grille peu naturel. J'ai essayé d'ajouter un décalage aléatoire à chaque poil, mais je ne sais pas encore comment obtenir un rendu plus organique au niveau du redimensionnement des UV. Une autre solution serait de modifier la texture des racines en y ajoutant de faux poils en 2D afin de masquer les points de départ visibles."},rendering:{title:"techniques de rendu",quickDesc:"Découverte du ray tracing, du rendu volumique de fluide via ray marching et autres techniques",context:"Au cours de ma première année de master, j'ai eu l'opportunité de découvrir de nouvelles approches de rendu. J'ai par exemple implémenté du ray tracing sur CPU (en rendu déféré), j'ai également pu faire de la simulation et du rendu en temps réel de nuages volumétriques avec des imposteurs et du ray marching",ray_tracing_desc:"J'ai eu l'occasion de travailler sur la mise en œuvre d'un ray tracer simple sur CPU. J'ai développé différentes intersections entre les rayons et les formes, ainsi que plusieurs effets tels que la réfraction, la réflexion, la loi de Beer-Lambert pour l'éclairage, et les ombres douces. J'ai également implémenté une structure d'accélération BVH afin d'accélérer le rendu de maillages complexes.",volume_desc:"Ce projet a été l'occasion de découvrir différentes approches de modélisation (à partir de bruit, ou à l'aide de particules), ainsi que de rendu (utilisation d'imposteurs pour visualiser les particules, et ray marching de volume). J'ai également pu expérimenter avec le geometry shader et les compute shaders afin de réduire la communication entre le CPU et le GPU, et ainsi rendre les particules de manière plus efficace."},engine:{title:"moteur de jeu",quickDesc:"Développement de moteurs de jeu",context:"Durant le second semestre de mon master, j'ai eu l'occasion de développer un moteur de jeu. Ayant toujours été passionné par la création de jeux vidéos, ça a été une super expérience. Cependant, en raison de la contrainte de temps imposée par le projet, beaucoup de concessions ont dû être faites.",learnings:"Mon objectif était de concevoir un moteur de jeu polyvalent et réutilisable pour différents types de jeux. J'ai donc tenté d'implémenter des composants similaires à ceux que j'avais utilisés dans le moteur Godot, au sein de mon Entity Component System (ECS). En plus de l'ECS, le projet comprenait un rendu basé sur la physique (PBR), un éditeur de scène léger pour faciliter le débogage, ainsi qu'un système de simulation physique et de gestion des collisions simple. Ce fut mon premier grand projet en C++, une expérience très enrichissante.",img_desc_0:"Illustration du fonctionnement du système de caméra",img_desc_1:"Deuxième exemple de caméra",next_steps:"Ma première tentative m'a tellement appris que j'ai dû recommencer de zéro. La prochaine version du moteur de jeu possède une structure de code claire et facilement codable en s'inspirant de temps à autres de l'architecture de Godot. Dans cette version, pas d'ECS mais une approche plus traditionnelle axée autour de l'héritage ainsi que la composition.",features_list_title:"Quelques fonctionnalités que je compte implémenter",features_list:["Un renderer indépendant exposant une API (fait)","Meilleur système de gestion des ressources ainsi qu'une solution de sauvegarde et de chargement des scenes fonctionnelle (fait)","Amélioration des outils de logging et de debug (fait)","Illumination globale à l'aide de sondes","Nouvelle simulation physique","Support des scripts"]},games:{title:"jeux",quickDesc:"D'autres projets autour de la création de jeux vidéo",context:"J'aime développer des jeux dans mon temps libre. Bien qu'il s'agisse généralement de tester des concepts plus que de faire un jeu complet",behavior_title:"Arbre de comportement",behavior_desc:"J'ai développé un addon pour godot 4.2 mono. Il s'agit d'une implémentation d'arbre de comportement qui permet de créer facilement des comportements d'IA complexes à l'aide d'un arbre. Sur l'illustration à droite par exemple on peut voir l'utilisation de l'extension dans le graphe de scène de Godot, si un noeud de la séquence d'actions 'FollowMouse' échoue, alors on passera à la séquence 'GoHome'.",dicecraft_desc:"J'ai participé à une game jam durant laquelle, en équipe de trois, nous avons créé un jeu appelé Dicecraft. Le principe du jeu est de fabriquer des dés afin de manipuler l'aléatoire et de maximiser les combos et la quantité d'unités invoquées par les lancés de dés pour affronter une IA. Le jeu manque de finition, mais ce fut un projet amusant, et les mécaniques de base sont solides.",other_title:"autres projets",other_desc:"Je travaille sur plusieurs autres projets, mais rien de très présentable. Ils vont d'un platformer 2D utilisant le contrôle du temps pour réussir les puzzles à un jeu de programmation de sort magiques. L'illustration sur la droite illustre ce concept de programmation magique, le joueur dispose des symboles sur un cercle d'invocation, la forme et le sens des symboles impactent l'effet produit. Ici on a 3 dilatations appliquées à un sort d'eau, ce qui donne ce triangle."},web:{quickDesc:"Quelques projets de développement web",context:"Au cours de mes études, j'ai eu l'occasion de travailler sur plusieurs projets web principalement sur du backend. En plus d'avoir énormément appris sur les technologies utiles au développement web ça a été l'occasion pour moi de m'entraîner dans un environnement professionel.",satiscraftory_desc:"L'objectif était de faire un site web avec plusieurs services connectés à un même frontend. J'ai principalement contribué en réalisant un mini jeu entièrement en utilisant la réactivité de Vue.js sans webgl. La thématique du projet était de proposer une sorte de wiki pour les constructions faisables dans le jeu 'Satisfactory'.",explore_desc:"Pour ce projet, j'ai travaillé sur le backend avec du PHP et une librairie postgis de PostgreSQL. Il a fallu implémenter un algorithme de pathfinding ainsi que des optimisations pour charger le plus rapidement un chemin optimal entre 2 points (ou plus avec des étapes)",rich_desc:"J'ai également travaillé sur le backend de cette application web. Le but était de faire un site sur lequel les utilisateurs pouvaient proposer des sujets ainsi que des propositions pour répondre à ces problématiques. Le choix de la meilleure réponse dépendait d'un système de vote et de différentes phases de rédaction où les gens pouvaient écrire en collaboration. J'ai donc travaillé sur la base de données pour rendre tout cela possible."}},performances:{title:"Problèmes de performances (moy: {fps} FPS)",optimize:"optimiser",proposition:"Passer en mode performance?",note:"D'autres navigateurs peuvent obtenir de meilleurs performances."}}}}),Fv=fy(AI);Fv.use(wI);Fv.mount("#app");
