var y_=Object.defineProperty;var S_=(n,e,t)=>e in n?y_(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var gr=(n,e,t)=>S_(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ju(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Et={},fs=[],li=()=>{},M_=()=>!1,ml=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Zu=n=>n.startsWith("onUpdate:"),rn=Object.assign,Qu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},E_=Object.prototype.hasOwnProperty,pt=(n,e)=>E_.call(n,e),ze=Array.isArray,hs=n=>Oo(n)==="[object Map]",gl=n=>Oo(n)==="[object Set]",nh=n=>Oo(n)==="[object Date]",qe=n=>typeof n=="function",Ot=n=>typeof n=="string",Zn=n=>typeof n=="symbol",wt=n=>n!==null&&typeof n=="object",kp=n=>(wt(n)||qe(n))&&qe(n.then)&&qe(n.catch),Hp=Object.prototype.toString,Oo=n=>Hp.call(n),T_=n=>Oo(n).slice(8,-1),Vp=n=>Oo(n)==="[object Object]",ef=n=>Ot(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,oo=Ju(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_l=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},b_=/-(\w)/g,Bn=_l(n=>n.replace(b_,(e,t)=>t?t.toUpperCase():"")),A_=/\B([A-Z])/g,Hr=_l(n=>n.replace(A_,"-$1").toLowerCase()),vl=_l(n=>n.charAt(0).toUpperCase()+n.slice(1)),Bl=_l(n=>n?`on${vl(n)}`:""),or=(n,e)=>!Object.is(n,e),La=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},zp=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},$a=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let ih;const xl=()=>ih||(ih=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function yl(n){if(ze(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Ot(i)?L_(i):yl(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Ot(n)||wt(n))return n}const w_=/;(?![^(]*\))/g,R_=/:([^]+)/,C_=/\/\*[^]*?\*\//g;function L_(n){const e={};return n.replace(C_,"").split(w_).forEach(t=>{if(t){const i=t.split(R_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function go(n){let e="";if(Ot(n))e=n;else if(ze(n))for(let t=0;t<n.length;t++){const i=go(n[t]);i&&(e+=i+" ")}else if(wt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const I_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",P_=Ju(I_);function Gp(n){return!!n||n===""}function D_(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Sl(n[i],e[i]);return t}function Sl(n,e){if(n===e)return!0;let t=nh(n),i=nh(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Zn(n),i=Zn(e),t||i)return n===e;if(t=ze(n),i=ze(e),t||i)return t&&i?D_(n,e):!1;if(t=wt(n),i=wt(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Sl(n[o],e[o]))return!1}}return String(n)===String(e)}function N_(n,e){return n.findIndex(t=>Sl(t,e))}const Wp=n=>!!(n&&n.__v_isRef===!0),et=n=>Ot(n)?n:n==null?"":ze(n)||wt(n)&&(n.toString===Hp||!qe(n.toString))?Wp(n)?et(n.value):JSON.stringify(n,Xp,2):String(n),Xp=(n,e)=>Wp(e)?Xp(n,e.value):hs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[kl(i,s)+" =>"]=r,t),{})}:gl(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>kl(t))}:Zn(e)?kl(e):wt(e)&&!ze(e)&&!Vp(e)?String(e):e,kl=(n,e="")=>{var t;return Zn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _n;class jp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=_n,!e&&_n&&(this.index=(_n.scopes||(_n.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=_n;try{return _n=this,e()}finally{_n=t}}}on(){++this._on===1&&(this.prevScope=_n,_n=this)}off(){this._on>0&&--this._on===0&&(_n=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function U_(n){return new jp(n)}function O_(){return _n}let At;const Hl=new WeakSet;class $p{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,_n&&_n.active&&_n.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Hl.has(this)&&(Hl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||qp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,rh(this),Kp(this);const e=At,t=Kn;At=this,Kn=!0;try{return this.fn()}finally{Jp(this),At=e,Kn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)rf(e);this.deps=this.depsTail=void 0,rh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Hl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){kc(this)&&this.run()}get dirty(){return kc(this)}}let Yp=0,ao,lo;function qp(n,e=!1){if(n.flags|=8,e){n.next=lo,lo=n;return}n.next=ao,ao=n}function tf(){Yp++}function nf(){if(--Yp>0)return;if(lo){let e=lo;for(lo=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;ao;){let e=ao;for(ao=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Kp(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Jp(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),rf(i),F_(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function kc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Zp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Zp(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===_o)||(n.globalVersion=_o,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!kc(n))))return;n.flags|=2;const e=n.dep,t=At,i=Kn;At=n,Kn=!0;try{Kp(n);const r=n.fn(n._value);(e.version===0||or(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{At=t,Kn=i,Jp(n),n.flags&=-3}}function rf(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)rf(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function F_(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Kn=!0;const Qp=[];function ki(){Qp.push(Kn),Kn=!1}function Hi(){const n=Qp.pop();Kn=n===void 0?!0:n}function rh(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=At;At=void 0;try{e()}finally{At=t}}}let _o=0;class B_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class sf{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!At||!Kn||At===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==At)t=this.activeLink=new B_(At,this),At.deps?(t.prevDep=At.depsTail,At.depsTail.nextDep=t,At.depsTail=t):At.deps=At.depsTail=t,em(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=At.depsTail,t.nextDep=void 0,At.depsTail.nextDep=t,At.depsTail=t,At.deps===t&&(At.deps=i)}return t}trigger(e){this.version++,_o++,this.notify(e)}notify(e){tf();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{nf()}}}function em(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)em(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Hc=new WeakMap,Ur=Symbol(""),Vc=Symbol(""),vo=Symbol("");function en(n,e,t){if(Kn&&At){let i=Hc.get(n);i||Hc.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new sf),r.map=i,r.key=t),r.track()}}function Li(n,e,t,i,r,s){const o=Hc.get(n);if(!o){_o++;return}const a=l=>{l&&l.trigger()};if(tf(),e==="clear")o.forEach(a);else{const l=ze(n),c=l&&ef(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===vo||!Zn(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(vo)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ur)),hs(n)&&a(o.get(Vc)));break;case"delete":l||(a(o.get(Ur)),hs(n)&&a(o.get(Vc)));break;case"set":hs(n)&&a(o.get(Ur));break}}nf()}function Gr(n){const e=dt(n);return e===n?e:(en(e,"iterate",vo),Fn(n)?e:e.map(Yt))}function Ml(n){return en(n=dt(n),"iterate",vo),n}const k_={__proto__:null,[Symbol.iterator](){return Vl(this,Symbol.iterator,Yt)},concat(...n){return Gr(this).concat(...n.map(e=>ze(e)?Gr(e):e))},entries(){return Vl(this,"entries",n=>(n[1]=Yt(n[1]),n))},every(n,e){return _i(this,"every",n,e,void 0,arguments)},filter(n,e){return _i(this,"filter",n,e,t=>t.map(Yt),arguments)},find(n,e){return _i(this,"find",n,e,Yt,arguments)},findIndex(n,e){return _i(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return _i(this,"findLast",n,e,Yt,arguments)},findLastIndex(n,e){return _i(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return _i(this,"forEach",n,e,void 0,arguments)},includes(...n){return zl(this,"includes",n)},indexOf(...n){return zl(this,"indexOf",n)},join(n){return Gr(this).join(n)},lastIndexOf(...n){return zl(this,"lastIndexOf",n)},map(n,e){return _i(this,"map",n,e,void 0,arguments)},pop(){return Vs(this,"pop")},push(...n){return Vs(this,"push",n)},reduce(n,...e){return sh(this,"reduce",n,e)},reduceRight(n,...e){return sh(this,"reduceRight",n,e)},shift(){return Vs(this,"shift")},some(n,e){return _i(this,"some",n,e,void 0,arguments)},splice(...n){return Vs(this,"splice",n)},toReversed(){return Gr(this).toReversed()},toSorted(n){return Gr(this).toSorted(n)},toSpliced(...n){return Gr(this).toSpliced(...n)},unshift(...n){return Vs(this,"unshift",n)},values(){return Vl(this,"values",Yt)}};function Vl(n,e,t){const i=Ml(n),r=i[e]();return i!==n&&!Fn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const H_=Array.prototype;function _i(n,e,t,i,r,s){const o=Ml(n),a=o!==n&&!Fn(n),l=o[e];if(l!==H_[e]){const f=l.apply(n,s);return a?Yt(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,Yt(f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function sh(n,e,t,i){const r=Ml(n);let s=t;return r!==n&&(Fn(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,Yt(a),l,n)}),r[e](s,...i)}function zl(n,e,t){const i=dt(n);en(i,"iterate",vo);const r=i[e](...t);return(r===-1||r===!1)&&lf(t[0])?(t[0]=dt(t[0]),i[e](...t)):r}function Vs(n,e,t=[]){ki(),tf();const i=dt(n)[e].apply(n,t);return nf(),Hi(),i}const V_=Ju("__proto__,__v_isRef,__isVue"),tm=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Zn));function z_(n){Zn(n)||(n=String(n));const e=dt(this);return en(e,"has",n),e.hasOwnProperty(n)}class nm{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Z_:om:s?sm:rm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ze(e);if(!r){let l;if(o&&(l=k_[t]))return l;if(t==="hasOwnProperty")return z_}const a=Reflect.get(e,t,Kt(e)?e:i);return(Zn(t)?tm.has(t):V_(t))||(r||en(e,"get",t),s)?a:Kt(a)?o&&ef(t)?a:a.value:wt(a)?r?am(a):El(a):a}}class im extends nm{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=cr(s);if(!Fn(i)&&!cr(i)&&(s=dt(s),i=dt(i)),!ze(e)&&Kt(s)&&!Kt(i))return l?!1:(s.value=i,!0)}const o=ze(e)&&ef(t)?Number(t)<e.length:pt(e,t),a=Reflect.set(e,t,i,Kt(e)?e:r);return e===dt(r)&&(o?or(i,s)&&Li(e,"set",t,i):Li(e,"add",t,i)),a}deleteProperty(e,t){const i=pt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Li(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Zn(t)||!tm.has(t))&&en(e,"has",t),i}ownKeys(e){return en(e,"iterate",ze(e)?"length":Ur),Reflect.ownKeys(e)}}class G_ extends nm{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const W_=new im,X_=new G_,j_=new im(!0);const zc=n=>n,$o=n=>Reflect.getPrototypeOf(n);function $_(n,e,t){return function(...i){const r=this.__v_raw,s=dt(r),o=hs(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?zc:e?Ya:Yt;return!e&&en(s,"iterate",l?Vc:Ur),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Yo(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Y_(n,e){const t={get(r){const s=this.__v_raw,o=dt(s),a=dt(r);n||(or(r,a)&&en(o,"get",r),en(o,"get",a));const{has:l}=$o(o),c=e?zc:n?Ya:Yt;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&en(dt(r),"iterate",Ur),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=dt(s),a=dt(r);return n||(or(r,a)&&en(o,"has",r),en(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=dt(a),c=e?zc:n?Ya:Yt;return!n&&en(l,"iterate",Ur),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return rn(t,n?{add:Yo("add"),set:Yo("set"),delete:Yo("delete"),clear:Yo("clear")}:{add(r){!e&&!Fn(r)&&!cr(r)&&(r=dt(r));const s=dt(this);return $o(s).has.call(s,r)||(s.add(r),Li(s,"add",r,r)),this},set(r,s){!e&&!Fn(s)&&!cr(s)&&(s=dt(s));const o=dt(this),{has:a,get:l}=$o(o);let c=a.call(o,r);c||(r=dt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?or(s,u)&&Li(o,"set",r,s):Li(o,"add",r,s),this},delete(r){const s=dt(this),{has:o,get:a}=$o(s);let l=o.call(s,r);l||(r=dt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Li(s,"delete",r,void 0),c},clear(){const r=dt(this),s=r.size!==0,o=r.clear();return s&&Li(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=$_(r,n,e)}),t}function of(n,e){const t=Y_(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(pt(t,r)&&r in i?t:i,r,s)}const q_={get:of(!1,!1)},K_={get:of(!1,!0)},J_={get:of(!0,!1)};const rm=new WeakMap,sm=new WeakMap,om=new WeakMap,Z_=new WeakMap;function Q_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ev(n){return n.__v_skip||!Object.isExtensible(n)?0:Q_(T_(n))}function El(n){return cr(n)?n:af(n,!1,W_,q_,rm)}function tv(n){return af(n,!1,j_,K_,sm)}function am(n){return af(n,!0,X_,J_,om)}function af(n,e,t,i,r){if(!wt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=ev(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function ds(n){return cr(n)?ds(n.__v_raw):!!(n&&n.__v_isReactive)}function cr(n){return!!(n&&n.__v_isReadonly)}function Fn(n){return!!(n&&n.__v_isShallow)}function lf(n){return n?!!n.__v_raw:!1}function dt(n){const e=n&&n.__v_raw;return e?dt(e):n}function nv(n){return!pt(n,"__v_skip")&&Object.isExtensible(n)&&zp(n,"__v_skip",!0),n}const Yt=n=>wt(n)?El(n):n,Ya=n=>wt(n)?am(n):n;function Kt(n){return n?n.__v_isRef===!0:!1}function yt(n){return cm(n,!1)}function lm(n){return cm(n,!0)}function cm(n,e){return Kt(n)?n:new iv(n,e)}class iv{constructor(e,t){this.dep=new sf,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:dt(e),this._value=t?e:Yt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Fn(e)||cr(e);e=i?e:dt(e),or(e,t)&&(this._rawValue=e,this._value=i?e:Yt(e),this.dep.trigger())}}function st(n){return Kt(n)?n.value:n}const rv={get:(n,e,t)=>e==="__v_raw"?n:st(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Kt(r)&&!Kt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function um(n){return ds(n)?n:new Proxy(n,rv)}class sv{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new sf(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=_o-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&At!==this)return qp(this,!0),!0}get value(){const e=this.dep.track();return Zp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ov(n,e,t=!1){let i,r;return qe(n)?i=n:(i=n.get,r=n.set),new sv(i,r,t)}const qo={},qa=new WeakMap;let Ar;function av(n,e=!1,t=Ar){if(t){let i=qa.get(t);i||qa.set(t,i=[]),i.push(n)}}function lv(n,e,t=Et){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=v=>r?v:Fn(v)||r===!1||r===0?Ii(v,1):Ii(v);let u,f,h,p,_=!1,x=!1;if(Kt(n)?(f=()=>n.value,_=Fn(n)):ds(n)?(f=()=>c(n),_=!0):ze(n)?(x=!0,_=n.some(v=>ds(v)||Fn(v)),f=()=>n.map(v=>{if(Kt(v))return v.value;if(ds(v))return c(v);if(qe(v))return l?l(v,2):v()})):qe(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){ki();try{h()}finally{Hi()}}const v=Ar;Ar=u;try{return l?l(n,3,[p]):n(p)}finally{Ar=v}}:f=li,e&&r){const v=f,L=r===!0?1/0:r;f=()=>Ii(v(),L)}const m=O_(),d=()=>{u.stop(),m&&m.active&&Qu(m.effects,u)};if(s&&e){const v=e;e=(...L)=>{v(...L),d()}}let y=x?new Array(n.length).fill(qo):qo;const S=v=>{if(!(!(u.flags&1)||!u.dirty&&!v))if(e){const L=u.run();if(r||_||(x?L.some((I,R)=>or(I,y[R])):or(L,y))){h&&h();const I=Ar;Ar=u;try{const R=[L,y===qo?void 0:x&&y[0]===qo?[]:y,p];y=L,l?l(e,3,R):e(...R)}finally{Ar=I}}}else u.run()};return a&&a(S),u=new $p(f),u.scheduler=o?()=>o(S,!1):S,p=v=>av(v,!1,u),h=u.onStop=()=>{const v=qa.get(u);if(v){if(l)l(v,4);else for(const L of v)L();qa.delete(u)}},e?i?S(!0):y=u.run():o?o(S.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function Ii(n,e=1/0,t){if(e<=0||!wt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Kt(n))Ii(n.value,e,t);else if(ze(n))for(let i=0;i<n.length;i++)Ii(n[i],e,t);else if(gl(n)||hs(n))n.forEach(i=>{Ii(i,e,t)});else if(Vp(n)){for(const i in n)Ii(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ii(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fo(n,e,t,i){try{return i?n(...i):n()}catch(r){Tl(r,e,t)}}function fi(n,e,t,i){if(qe(n)){const r=Fo(n,e,t,i);return r&&kp(r)&&r.catch(s=>{Tl(s,e,t)}),r}if(ze(n)){const r=[];for(let s=0;s<n.length;s++)r.push(fi(n[s],e,t,i));return r}}function Tl(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Et;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){ki(),Fo(s,null,10,[n,l,c]),Hi();return}}cv(n,t,r,i,o)}function cv(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const un=[];let ri=-1;const ps=[];let tr=null,os=0;const fm=Promise.resolve();let Ka=null;function cf(n){const e=Ka||fm;return n?e.then(this?n.bind(this):n):e}function uv(n){let e=ri+1,t=un.length;for(;e<t;){const i=e+t>>>1,r=un[i],s=xo(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function uf(n){if(!(n.flags&1)){const e=xo(n),t=un[un.length-1];!t||!(n.flags&2)&&e>=xo(t)?un.push(n):un.splice(uv(e),0,n),n.flags|=1,hm()}}function hm(){Ka||(Ka=fm.then(pm))}function fv(n){ze(n)?ps.push(...n):tr&&n.id===-1?tr.splice(os+1,0,n):n.flags&1||(ps.push(n),n.flags|=1),hm()}function oh(n,e,t=ri+1){for(;t<un.length;t++){const i=un[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;un.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function dm(n){if(ps.length){const e=[...new Set(ps)].sort((t,i)=>xo(t)-xo(i));if(ps.length=0,tr){tr.push(...e);return}for(tr=e,os=0;os<tr.length;os++){const t=tr[os];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}tr=null,os=0}}const xo=n=>n.id==null?n.flags&2?-1:1/0:n.id;function pm(n){try{for(ri=0;ri<un.length;ri++){const e=un[ri];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Fo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ri<un.length;ri++){const e=un[ri];e&&(e.flags&=-2)}ri=-1,un.length=0,dm(),Ka=null,(un.length||ps.length)&&pm()}}let Wt=null,mm=null;function Ja(n){const e=Wt;return Wt=n,mm=n&&n.type.__scopeId||null,e}function Vr(n,e=Wt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&gh(-1);const s=Ja(e);let o;try{o=n(...r)}finally{Ja(s),i._d&&gh(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Dn(n,e){if(Wt===null)return n;const t=Cl(Wt),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=Et]=e[r];s&&(qe(s)&&(s={mounted:s,updated:s}),s.deep&&Ii(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function _r(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ki(),fi(l,t,8,[n.el,a,n,e]),Hi())}}const hv=Symbol("_vte"),dv=n=>n.__isTeleport;function ff(n,e){n.shapeFlag&6&&n.component?(n.transition=e,ff(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Rt(n,e){return qe(n)?rn({name:n.name},e,{setup:n}):n}function gm(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function pv(n){const e=Es(),t=lm(null);if(e){const r=e.refs===Et?e.refs={}:e.refs;Object.defineProperty(r,n,{enumerable:!0,get:()=>t.value,set:s=>t.value=s})}return t}function Za(n,e,t,i,r=!1){if(ze(n)){n.forEach((_,x)=>Za(_,e&&(ze(e)?e[x]:e),t,i,r));return}if(ms(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Za(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Cl(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Et?a.refs={}:a.refs,f=a.setupState,h=dt(f),p=f===Et?()=>!1:_=>pt(h,_);if(c!=null&&c!==l&&(Ot(c)?(u[c]=null,p(c)&&(f[c]=null)):Kt(c)&&(c.value=null)),qe(l))Fo(l,a,12,[o,u]);else{const _=Ot(l),x=Kt(l);if(_||x){const m=()=>{if(n.f){const d=_?p(l)?f[l]:u[l]:l.value;r?ze(d)&&Qu(d,s):ze(d)?d.includes(s)||d.push(s):_?(u[l]=[s],p(l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else _?(u[l]=o,p(l)&&(f[l]=o)):x&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,Tn(m,t)):m()}}}xl().requestIdleCallback;xl().cancelIdleCallback;const ms=n=>!!n.type.__asyncLoader,_m=n=>n.type.__isKeepAlive;function mv(n,e){vm(n,"a",e)}function gv(n,e){vm(n,"da",e)}function vm(n,e,t=qt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(bl(e,i,t),t){let r=t.parent;for(;r&&r.parent;)_m(r.parent.vnode)&&_v(i,e,t,r),r=r.parent}}function _v(n,e,t,i){const r=bl(e,n,i,!0);Al(()=>{Qu(i[e],r)},t)}function bl(n,e,t=qt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{ki();const a=ko(t),l=fi(e,t,n,o);return a(),Hi(),l});return i?r.unshift(s):r.push(s),s}}const Wi=n=>(e,t=qt)=>{(!Mo||n==="sp")&&bl(n,(...i)=>e(...i),t)},vv=Wi("bm"),Xi=Wi("m"),xv=Wi("bu"),yv=Wi("u"),xm=Wi("bum"),Al=Wi("um"),Sv=Wi("sp"),Mv=Wi("rtg"),Ev=Wi("rtc");function Tv(n,e=qt){bl("ec",n,e)}const bv="components",ym=Symbol.for("v-ndc");function wl(n){return Ot(n)?Av(bv,n,!1)||n:n||ym}function Av(n,e,t=!0,i=!1){const r=Wt||qt;if(r){const s=r.type;{const a=p0(s,!1);if(a&&(a===e||a===Bn(e)||a===vl(Bn(e))))return s}const o=ah(r[n]||s[n],e)||ah(r.appContext[n],e);return!o&&i?s:o}}function ah(n,e){return n&&(n[e]||n[Bn(e)]||n[vl(Bn(e))])}function An(n,e,t,i){let r;const s=t,o=ze(n);if(o||Ot(n)){const a=o&&ds(n);let l=!1,c=!1;a&&(l=!Fn(n),c=cr(n),n=Ml(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?Ya(Yt(n[u])):Yt(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(wt(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}function Ko(n,e,t={},i,r){if(Wt.ce||Wt.parent&&ms(Wt.parent)&&Wt.parent.ce)return e!=="default"&&(t.name=e),we(),Jt(Tt,null,[je("slot",t,i&&i())],64);let s=n[e];s&&s._c&&(s._d=!1),we();const o=s&&Sm(s(t)),a=t.key||o&&o.key,l=Jt(Tt,{key:(a&&!Zn(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||(i?i():[]),o&&n._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function Sm(n){return n.some(e=>So(e)?!(e.type===Vi||e.type===Tt&&!Sm(e.children)):!0)?n:null}const Gc=n=>n?Vm(n)?Cl(n):Gc(n.parent):null,co=rn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Gc(n.parent),$root:n=>Gc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Em(n),$forceUpdate:n=>n.f||(n.f=()=>{uf(n.update)}),$nextTick:n=>n.n||(n.n=cf.bind(n.proxy)),$watch:n=>Yv.bind(n)}),Gl=(n,e)=>n!==Et&&!n.__isScriptSetup&&pt(n,e),wv={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Gl(i,e))return o[e]=1,i[e];if(r!==Et&&pt(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&pt(c,e))return o[e]=3,s[e];if(t!==Et&&pt(t,e))return o[e]=4,t[e];Wc&&(o[e]=0)}}const u=co[e];let f,h;if(u)return e==="$attrs"&&en(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==Et&&pt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,pt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Gl(r,e)?(r[e]=t,!0):i!==Et&&pt(i,e)?(i[e]=t,!0):pt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==Et&&pt(n,o)||Gl(e,o)||(a=s[0])&&pt(a,o)||pt(i,o)||pt(co,o)||pt(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:pt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function lh(n){return ze(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Wc=!0;function Rv(n){const e=Em(n),t=n.proxy,i=n.ctx;Wc=!1,e.beforeCreate&&ch(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:_,activated:x,deactivated:m,beforeDestroy:d,beforeUnmount:y,destroyed:S,unmounted:v,render:L,renderTracked:I,renderTriggered:R,errorCaptured:D,serverPrefetch:E,expose:M,inheritAttrs:F,components:Y,directives:$,filters:ie}=e;if(c&&Cv(c,i,null),o)for(const q in o){const H=o[q];qe(H)&&(i[q]=H.bind(t))}if(r){const q=r.call(t,t);wt(q)&&(n.data=El(q))}if(Wc=!0,s)for(const q in s){const H=s[q],le=qe(H)?H.bind(t,t):qe(H.get)?H.get.bind(t,t):li,pe=!qe(H)&&qe(H.set)?H.set.bind(t):li,Ae=ir({get:le,set:pe});Object.defineProperty(i,q,{enumerable:!0,configurable:!0,get:()=>Ae.value,set:Be=>Ae.value=Be})}if(a)for(const q in a)Mm(a[q],i,t,q);if(l){const q=qe(l)?l.call(t):l;Reflect.ownKeys(q).forEach(H=>{Uv(H,q[H])})}u&&ch(u,n,"c");function B(q,H){ze(H)?H.forEach(le=>q(le.bind(t))):H&&q(H.bind(t))}if(B(vv,f),B(Xi,h),B(xv,p),B(yv,_),B(mv,x),B(gv,m),B(Tv,D),B(Ev,I),B(Mv,R),B(xm,y),B(Al,v),B(Sv,E),ze(M))if(M.length){const q=n.exposed||(n.exposed={});M.forEach(H=>{Object.defineProperty(q,H,{get:()=>t[H],set:le=>t[H]=le})})}else n.exposed||(n.exposed={});L&&n.render===li&&(n.render=L),F!=null&&(n.inheritAttrs=F),Y&&(n.components=Y),$&&(n.directives=$),E&&gm(n)}function Cv(n,e,t=li){ze(n)&&(n=Xc(n));for(const i in n){const r=n[i];let s;wt(r)?"default"in r?s=uo(r.from||i,r.default,!0):s=uo(r.from||i):s=uo(r),Kt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function ch(n,e,t){fi(ze(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Mm(n,e,t,i){let r=i.includes(".")?Om(t,i):()=>t[i];if(Ot(n)){const s=e[n];qe(s)&&Or(r,s)}else if(qe(n))Or(r,n.bind(t));else if(wt(n))if(ze(n))n.forEach(s=>Mm(s,e,t,i));else{const s=qe(n.handler)?n.handler.bind(t):e[n.handler];qe(s)&&Or(r,s,n)}}function Em(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Qa(l,c,o,!0)),Qa(l,e,o)),wt(e)&&s.set(e,l),l}function Qa(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Qa(n,s,t,!0),r&&r.forEach(o=>Qa(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Lv[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Lv={data:uh,props:fh,emits:fh,methods:io,computed:io,beforeCreate:an,created:an,beforeMount:an,mounted:an,beforeUpdate:an,updated:an,beforeDestroy:an,beforeUnmount:an,destroyed:an,unmounted:an,activated:an,deactivated:an,errorCaptured:an,serverPrefetch:an,components:io,directives:io,watch:Pv,provide:uh,inject:Iv};function uh(n,e){return e?n?function(){return rn(qe(n)?n.call(this,this):n,qe(e)?e.call(this,this):e)}:e:n}function Iv(n,e){return io(Xc(n),Xc(e))}function Xc(n){if(ze(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function an(n,e){return n?[...new Set([].concat(n,e))]:e}function io(n,e){return n?rn(Object.create(null),n,e):e}function fh(n,e){return n?ze(n)&&ze(e)?[...new Set([...n,...e])]:rn(Object.create(null),lh(n),lh(e??{})):e}function Pv(n,e){if(!n)return e;if(!e)return n;const t=rn(Object.create(null),n);for(const i in e)t[i]=an(n[i],e[i]);return t}function Tm(){return{app:null,config:{isNativeTag:M_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dv=0;function Nv(n,e){return function(i,r=null){qe(i)||(i=rn({},i)),r!=null&&!wt(r)&&(r=null);const s=Tm(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Dv++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:g0,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&qe(u.install)?(o.add(u),u.install(c,...f)):qe(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||je(i,r);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(p,u,h),l=!0,c._container=u,u.__vue_app__=c,Cl(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(fi(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=gs;gs=c;try{return u()}finally{gs=f}}};return c}}let gs=null;function Uv(n,e){if(qt){let t=qt.provides;const i=qt.parent&&qt.parent.provides;i===t&&(t=qt.provides=Object.create(i)),t[n]=e}}function uo(n,e,t=!1){const i=qt||Wt;if(i||gs){let r=gs?gs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&qe(e)?e.call(i&&i.proxy):e}}const bm={},Am=()=>Object.create(bm),wm=n=>Object.getPrototypeOf(n)===bm;function Ov(n,e,t,i=!1){const r={},s=Am();n.propsDefaults=Object.create(null),Rm(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:tv(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Fv(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=dt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Rl(n.emitsOptions,h))continue;const p=e[h];if(l)if(pt(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const _=Bn(h);r[_]=jc(l,a,_,p,n,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{Rm(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!pt(e,f)&&((u=Hr(f))===f||!pt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=jc(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!pt(e,f))&&(delete s[f],c=!0)}c&&Li(n.attrs,"set","")}function Rm(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(oo(l))continue;const c=e[l];let u;r&&pt(r,u=Bn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Rl(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=dt(t),c=a||Et;for(let u=0;u<s.length;u++){const f=s[u];t[f]=jc(r,l,f,c[f],n,!pt(c,f))}}return o}function jc(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=pt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&qe(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=ko(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Hr(t))&&(i=!0))}return i}const Bv=new WeakMap;function Cm(n,e,t=!1){const i=t?Bv:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!qe(n)){const u=f=>{l=!0;const[h,p]=Cm(f,e,!0);rn(o,h),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return wt(n)&&i.set(n,fs),fs;if(ze(s))for(let u=0;u<s.length;u++){const f=Bn(s[u]);hh(f)&&(o[f]=Et)}else if(s)for(const u in s){const f=Bn(u);if(hh(f)){const h=s[u],p=o[f]=ze(h)||qe(h)?{type:h}:rn({},h),_=p.type;let x=!1,m=!0;if(ze(_))for(let d=0;d<_.length;++d){const y=_[d],S=qe(y)&&y.name;if(S==="Boolean"){x=!0;break}else S==="String"&&(m=!1)}else x=qe(_)&&_.name==="Boolean";p[0]=x,p[1]=m,(x||pt(p,"default"))&&a.push(f)}}const c=[o,a];return wt(n)&&i.set(n,c),c}function hh(n){return n[0]!=="$"&&!oo(n)}const hf=n=>n[0]==="_"||n==="$stable",df=n=>ze(n)?n.map(si):[si(n)],kv=(n,e,t)=>{if(e._n)return e;const i=Vr((...r)=>df(e(...r)),t);return i._c=!1,i},Lm=(n,e,t)=>{const i=n._ctx;for(const r in n){if(hf(r))continue;const s=n[r];if(qe(s))e[r]=kv(r,s,i);else if(s!=null){const o=df(s);e[r]=()=>o}}},Im=(n,e)=>{const t=df(e);n.slots.default=()=>t},Pm=(n,e,t)=>{for(const i in e)(t||!hf(i))&&(n[i]=e[i])},Hv=(n,e,t)=>{const i=n.slots=Am();if(n.vnode.shapeFlag&32){const r=e._;r?(Pm(i,e,t),t&&zp(i,"_",r,!0)):Lm(e,i)}else e&&Im(n,e)},Vv=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=Et;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Pm(r,e,t):(s=!e.$stable,Lm(e,r)),o=e}else e&&(Im(n,e),o={default:1});if(s)for(const a in r)!hf(a)&&o[a]==null&&delete r[a]},Tn=t0;function zv(n){return Gv(n)}function Gv(n,e){const t=xl();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=li,insertStaticContent:_}=n,x=(N,O,b,se=null,ee=null,te=null,A=void 0,C=null,U=!!O.dynamicChildren)=>{if(N===O)return;N&&!zs(N,O)&&(se=ge(N),Be(N,ee,te,!0),N=null),O.patchFlag===-2&&(U=!1,O.dynamicChildren=null);const{type:V,ref:fe,shapeFlag:T}=O;switch(V){case Bo:m(N,O,b,se);break;case Vi:d(N,O,b,se);break;case Ia:N==null&&y(O,b,se,A);break;case Tt:Y(N,O,b,se,ee,te,A,C,U);break;default:T&1?L(N,O,b,se,ee,te,A,C,U):T&6?$(N,O,b,se,ee,te,A,C,U):(T&64||T&128)&&V.process(N,O,b,se,ee,te,A,C,U,Oe)}fe!=null&&ee&&Za(fe,N&&N.ref,te,O||N,!O)},m=(N,O,b,se)=>{if(N==null)i(O.el=a(O.children),b,se);else{const ee=O.el=N.el;O.children!==N.children&&c(ee,O.children)}},d=(N,O,b,se)=>{N==null?i(O.el=l(O.children||""),b,se):O.el=N.el},y=(N,O,b,se)=>{[N.el,N.anchor]=_(N.children,O,b,se,N.el,N.anchor)},S=({el:N,anchor:O},b,se)=>{let ee;for(;N&&N!==O;)ee=h(N),i(N,b,se),N=ee;i(O,b,se)},v=({el:N,anchor:O})=>{let b;for(;N&&N!==O;)b=h(N),r(N),N=b;r(O)},L=(N,O,b,se,ee,te,A,C,U)=>{O.type==="svg"?A="svg":O.type==="math"&&(A="mathml"),N==null?I(O,b,se,ee,te,A,C,U):E(N,O,ee,te,A,C,U)},I=(N,O,b,se,ee,te,A,C)=>{let U,V;const{props:fe,shapeFlag:T,transition:g,dirs:P}=N;if(U=N.el=o(N.type,te,fe&&fe.is,fe),T&8?u(U,N.children):T&16&&D(N.children,U,null,se,ee,Wl(N,te),A,C),P&&_r(N,null,se,"created"),R(U,N,N.scopeId,A,se),fe){for(const J in fe)J!=="value"&&!oo(J)&&s(U,J,null,fe[J],te,se);"value"in fe&&s(U,"value",null,fe.value,te),(V=fe.onVnodeBeforeMount)&&ni(V,se,N)}P&&_r(N,null,se,"beforeMount");const W=Wv(ee,g);W&&g.beforeEnter(U),i(U,O,b),((V=fe&&fe.onVnodeMounted)||W||P)&&Tn(()=>{V&&ni(V,se,N),W&&g.enter(U),P&&_r(N,null,se,"mounted")},ee)},R=(N,O,b,se,ee)=>{if(b&&p(N,b),se)for(let te=0;te<se.length;te++)p(N,se[te]);if(ee){let te=ee.subTree;if(O===te||Bm(te.type)&&(te.ssContent===O||te.ssFallback===O)){const A=ee.vnode;R(N,A,A.scopeId,A.slotScopeIds,ee.parent)}}},D=(N,O,b,se,ee,te,A,C,U=0)=>{for(let V=U;V<N.length;V++){const fe=N[V]=C?nr(N[V]):si(N[V]);x(null,fe,O,b,se,ee,te,A,C)}},E=(N,O,b,se,ee,te,A)=>{const C=O.el=N.el;let{patchFlag:U,dynamicChildren:V,dirs:fe}=O;U|=N.patchFlag&16;const T=N.props||Et,g=O.props||Et;let P;if(b&&vr(b,!1),(P=g.onVnodeBeforeUpdate)&&ni(P,b,O,N),fe&&_r(O,N,b,"beforeUpdate"),b&&vr(b,!0),(T.innerHTML&&g.innerHTML==null||T.textContent&&g.textContent==null)&&u(C,""),V?M(N.dynamicChildren,V,C,b,se,Wl(O,ee),te):A||H(N,O,C,null,b,se,Wl(O,ee),te,!1),U>0){if(U&16)F(C,T,g,b,ee);else if(U&2&&T.class!==g.class&&s(C,"class",null,g.class,ee),U&4&&s(C,"style",T.style,g.style,ee),U&8){const W=O.dynamicProps;for(let J=0;J<W.length;J++){const K=W[J],ve=T[K],ce=g[K];(ce!==ve||K==="value")&&s(C,K,ve,ce,ee,b)}}U&1&&N.children!==O.children&&u(C,O.children)}else!A&&V==null&&F(C,T,g,b,ee);((P=g.onVnodeUpdated)||fe)&&Tn(()=>{P&&ni(P,b,O,N),fe&&_r(O,N,b,"updated")},se)},M=(N,O,b,se,ee,te,A)=>{for(let C=0;C<O.length;C++){const U=N[C],V=O[C],fe=U.el&&(U.type===Tt||!zs(U,V)||U.shapeFlag&198)?f(U.el):b;x(U,V,fe,null,se,ee,te,A,!0)}},F=(N,O,b,se,ee)=>{if(O!==b){if(O!==Et)for(const te in O)!oo(te)&&!(te in b)&&s(N,te,O[te],null,ee,se);for(const te in b){if(oo(te))continue;const A=b[te],C=O[te];A!==C&&te!=="value"&&s(N,te,C,A,ee,se)}"value"in b&&s(N,"value",O.value,b.value,ee)}},Y=(N,O,b,se,ee,te,A,C,U)=>{const V=O.el=N?N.el:a(""),fe=O.anchor=N?N.anchor:a("");let{patchFlag:T,dynamicChildren:g,slotScopeIds:P}=O;P&&(C=C?C.concat(P):P),N==null?(i(V,b,se),i(fe,b,se),D(O.children||[],b,fe,ee,te,A,C,U)):T>0&&T&64&&g&&N.dynamicChildren?(M(N.dynamicChildren,g,b,ee,te,A,C),(O.key!=null||ee&&O===ee.subTree)&&Dm(N,O,!0)):H(N,O,b,fe,ee,te,A,C,U)},$=(N,O,b,se,ee,te,A,C,U)=>{O.slotScopeIds=C,N==null?O.shapeFlag&512?ee.ctx.activate(O,b,se,A,U):ie(O,b,se,ee,te,A,U):G(N,O,U)},ie=(N,O,b,se,ee,te,A)=>{const C=N.component=c0(N,se,ee);if(_m(N)&&(C.ctx.renderer=Oe),u0(C,!1,A),C.asyncDep){if(ee&&ee.registerDep(C,B,A),!N.el){const U=C.subTree=je(Vi);d(null,U,O,b)}}else B(C,N,O,b,ee,te,A)},G=(N,O,b)=>{const se=O.component=N.component;if(Qv(N,O,b))if(se.asyncDep&&!se.asyncResolved){q(se,O,b);return}else se.next=O,se.update();else O.el=N.el,se.vnode=O},B=(N,O,b,se,ee,te,A)=>{const C=()=>{if(N.isMounted){let{next:T,bu:g,u:P,parent:W,vnode:J}=N;{const Ee=Nm(N);if(Ee){T&&(T.el=J.el,q(N,T,A)),Ee.asyncDep.then(()=>{N.isUnmounted||C()});return}}let K=T,ve;vr(N,!1),T?(T.el=J.el,q(N,T,A)):T=J,g&&La(g),(ve=T.props&&T.props.onVnodeBeforeUpdate)&&ni(ve,W,T,J),vr(N,!0);const ce=ph(N),ye=N.subTree;N.subTree=ce,x(ye,ce,f(ye.el),ge(ye),N,ee,te),T.el=ce.el,K===null&&e0(N,ce.el),P&&Tn(P,ee),(ve=T.props&&T.props.onVnodeUpdated)&&Tn(()=>ni(ve,W,T,J),ee)}else{let T;const{el:g,props:P}=O,{bm:W,m:J,parent:K,root:ve,type:ce}=N,ye=ms(O);vr(N,!1),W&&La(W),!ye&&(T=P&&P.onVnodeBeforeMount)&&ni(T,K,O),vr(N,!0);{ve.ce&&ve.ce._injectChildStyle(ce);const Ee=N.subTree=ph(N);x(null,Ee,b,se,N,ee,te),O.el=Ee.el}if(J&&Tn(J,ee),!ye&&(T=P&&P.onVnodeMounted)){const Ee=O;Tn(()=>ni(T,K,Ee),ee)}(O.shapeFlag&256||K&&ms(K.vnode)&&K.vnode.shapeFlag&256)&&N.a&&Tn(N.a,ee),N.isMounted=!0,O=b=se=null}};N.scope.on();const U=N.effect=new $p(C);N.scope.off();const V=N.update=U.run.bind(U),fe=N.job=U.runIfDirty.bind(U);fe.i=N,fe.id=N.uid,U.scheduler=()=>uf(fe),vr(N,!0),V()},q=(N,O,b)=>{O.component=N;const se=N.vnode.props;N.vnode=O,N.next=null,Fv(N,O.props,se,b),Vv(N,O.children,b),ki(),oh(N),Hi()},H=(N,O,b,se,ee,te,A,C,U=!1)=>{const V=N&&N.children,fe=N?N.shapeFlag:0,T=O.children,{patchFlag:g,shapeFlag:P}=O;if(g>0){if(g&128){pe(V,T,b,se,ee,te,A,C,U);return}else if(g&256){le(V,T,b,se,ee,te,A,C,U);return}}P&8?(fe&16&&Re(V,ee,te),T!==V&&u(b,T)):fe&16?P&16?pe(V,T,b,se,ee,te,A,C,U):Re(V,ee,te,!0):(fe&8&&u(b,""),P&16&&D(T,b,se,ee,te,A,C,U))},le=(N,O,b,se,ee,te,A,C,U)=>{N=N||fs,O=O||fs;const V=N.length,fe=O.length,T=Math.min(V,fe);let g;for(g=0;g<T;g++){const P=O[g]=U?nr(O[g]):si(O[g]);x(N[g],P,b,null,ee,te,A,C,U)}V>fe?Re(N,ee,te,!0,!1,T):D(O,b,se,ee,te,A,C,U,T)},pe=(N,O,b,se,ee,te,A,C,U)=>{let V=0;const fe=O.length;let T=N.length-1,g=fe-1;for(;V<=T&&V<=g;){const P=N[V],W=O[V]=U?nr(O[V]):si(O[V]);if(zs(P,W))x(P,W,b,null,ee,te,A,C,U);else break;V++}for(;V<=T&&V<=g;){const P=N[T],W=O[g]=U?nr(O[g]):si(O[g]);if(zs(P,W))x(P,W,b,null,ee,te,A,C,U);else break;T--,g--}if(V>T){if(V<=g){const P=g+1,W=P<fe?O[P].el:se;for(;V<=g;)x(null,O[V]=U?nr(O[V]):si(O[V]),b,W,ee,te,A,C,U),V++}}else if(V>g)for(;V<=T;)Be(N[V],ee,te,!0),V++;else{const P=V,W=V,J=new Map;for(V=W;V<=g;V++){const Pe=O[V]=U?nr(O[V]):si(O[V]);Pe.key!=null&&J.set(Pe.key,V)}let K,ve=0;const ce=g-W+1;let ye=!1,Ee=0;const ae=new Array(ce);for(V=0;V<ce;V++)ae[V]=0;for(V=P;V<=T;V++){const Pe=N[V];if(ve>=ce){Be(Pe,ee,te,!0);continue}let De;if(Pe.key!=null)De=J.get(Pe.key);else for(K=W;K<=g;K++)if(ae[K-W]===0&&zs(Pe,O[K])){De=K;break}De===void 0?Be(Pe,ee,te,!0):(ae[De-W]=V+1,De>=Ee?Ee=De:ye=!0,x(Pe,O[De],b,null,ee,te,A,C,U),ve++)}const Te=ye?Xv(ae):fs;for(K=Te.length-1,V=ce-1;V>=0;V--){const Pe=W+V,De=O[Pe],_e=Pe+1<fe?O[Pe+1].el:se;ae[V]===0?x(null,De,b,_e,ee,te,A,C,U):ye&&(K<0||V!==Te[K]?Ae(De,b,_e,2):K--)}}},Ae=(N,O,b,se,ee=null)=>{const{el:te,type:A,transition:C,children:U,shapeFlag:V}=N;if(V&6){Ae(N.component.subTree,O,b,se);return}if(V&128){N.suspense.move(O,b,se);return}if(V&64){A.move(N,O,b,Oe);return}if(A===Tt){i(te,O,b);for(let T=0;T<U.length;T++)Ae(U[T],O,b,se);i(N.anchor,O,b);return}if(A===Ia){S(N,O,b);return}if(se!==2&&V&1&&C)if(se===0)C.beforeEnter(te),i(te,O,b),Tn(()=>C.enter(te),ee);else{const{leave:T,delayLeave:g,afterLeave:P}=C,W=()=>{N.ctx.isUnmounted?r(te):i(te,O,b)},J=()=>{T(te,()=>{W(),P&&P()})};g?g(te,W,J):J()}else i(te,O,b)},Be=(N,O,b,se=!1,ee=!1)=>{const{type:te,props:A,ref:C,children:U,dynamicChildren:V,shapeFlag:fe,patchFlag:T,dirs:g,cacheIndex:P}=N;if(T===-2&&(ee=!1),C!=null&&(ki(),Za(C,null,b,N,!0),Hi()),P!=null&&(O.renderCache[P]=void 0),fe&256){O.ctx.deactivate(N);return}const W=fe&1&&g,J=!ms(N);let K;if(J&&(K=A&&A.onVnodeBeforeUnmount)&&ni(K,O,N),fe&6)me(N.component,b,se);else{if(fe&128){N.suspense.unmount(b,se);return}W&&_r(N,null,O,"beforeUnmount"),fe&64?N.type.remove(N,O,b,Oe,se):V&&!V.hasOnce&&(te!==Tt||T>0&&T&64)?Re(V,O,b,!1,!0):(te===Tt&&T&384||!ee&&fe&16)&&Re(U,O,b),se&&ot(N)}(J&&(K=A&&A.onVnodeUnmounted)||W)&&Tn(()=>{K&&ni(K,O,N),W&&_r(N,null,O,"unmounted")},b)},ot=N=>{const{type:O,el:b,anchor:se,transition:ee}=N;if(O===Tt){re(b,se);return}if(O===Ia){v(N);return}const te=()=>{r(b),ee&&!ee.persisted&&ee.afterLeave&&ee.afterLeave()};if(N.shapeFlag&1&&ee&&!ee.persisted){const{leave:A,delayLeave:C}=ee,U=()=>A(b,te);C?C(N.el,te,U):U()}else te()},re=(N,O)=>{let b;for(;N!==O;)b=h(N),r(N),N=b;r(O)},me=(N,O,b)=>{const{bum:se,scope:ee,job:te,subTree:A,um:C,m:U,a:V,parent:fe,slots:{__:T}}=N;dh(U),dh(V),se&&La(se),fe&&ze(T)&&T.forEach(g=>{fe.renderCache[g]=void 0}),ee.stop(),te&&(te.flags|=8,Be(A,N,O,b)),C&&Tn(C,O),Tn(()=>{N.isUnmounted=!0},O),O&&O.pendingBranch&&!O.isUnmounted&&N.asyncDep&&!N.asyncResolved&&N.suspenseId===O.pendingId&&(O.deps--,O.deps===0&&O.resolve())},Re=(N,O,b,se=!1,ee=!1,te=0)=>{for(let A=te;A<N.length;A++)Be(N[A],O,b,se,ee)},ge=N=>{if(N.shapeFlag&6)return ge(N.component.subTree);if(N.shapeFlag&128)return N.suspense.next();const O=h(N.anchor||N.el),b=O&&O[hv];return b?h(b):O};let Le=!1;const Qe=(N,O,b)=>{N==null?O._vnode&&Be(O._vnode,null,null,!0):x(O._vnode||null,N,O,null,null,null,b),O._vnode=N,Le||(Le=!0,oh(),dm(),Le=!1)},Oe={p:x,um:Be,m:Ae,r:ot,mt:ie,mc:D,pc:H,pbc:M,n:ge,o:n};return{render:Qe,hydrate:void 0,createApp:Nv(Qe)}}function Wl({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function vr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Wv(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Dm(n,e,t=!1){const i=n.children,r=e.children;if(ze(i)&&ze(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=nr(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Dm(o,a)),a.type===Bo&&(a.el=o.el),a.type===Vi&&!a.el&&(a.el=o.el)}}function Xv(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Nm(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Nm(e)}function dh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const jv=Symbol.for("v-scx"),$v=()=>uo(jv);function Or(n,e,t){return Um(n,e,t)}function Um(n,e,t=Et){const{immediate:i,deep:r,flush:s,once:o}=t,a=rn({},t),l=e&&i||!e&&s!=="post";let c;if(Mo){if(s==="sync"){const p=$v();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=li,p.resume=li,p.pause=li,p}}const u=qt;a.call=(p,_,x)=>fi(p,u,_,x);let f=!1;s==="post"?a.scheduler=p=>{Tn(p,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,_)=>{_?p():uf(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=lv(n,e,a);return Mo&&(c?c.push(h):l&&h()),h}function Yv(n,e,t){const i=this.proxy,r=Ot(n)?n.includes(".")?Om(i,n):()=>i[n]:n.bind(i,i);let s;qe(e)?s=e:(s=e.handler,t=e);const o=ko(this),a=Um(r,s.bind(i),t);return o(),a}function Om(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const qv=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Bn(e)}Modifiers`]||n[`${Hr(e)}Modifiers`];function Kv(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Et;let r=t;const s=e.startsWith("update:"),o=s&&qv(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>Ot(u)?u.trim():u)),o.number&&(r=t.map($a)));let a,l=i[a=Bl(e)]||i[a=Bl(Bn(e))];!l&&s&&(l=i[a=Bl(Hr(e))]),l&&fi(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,fi(c,n,6,r)}}function Fm(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!qe(n)){const l=c=>{const u=Fm(c,e,!0);u&&(a=!0,rn(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(wt(n)&&i.set(n,null),null):(ze(s)?s.forEach(l=>o[l]=null):rn(o,s),wt(n)&&i.set(n,o),o)}function Rl(n,e){return!n||!ml(e)?!1:(e=e.slice(2).replace(/Once$/,""),pt(n,e[0].toLowerCase()+e.slice(1))||pt(n,Hr(e))||pt(n,e))}function ph(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:_,inheritAttrs:x}=n,m=Ja(n);let d,y;try{if(t.shapeFlag&4){const v=r||i,L=v;d=si(c.call(L,v,u,f,p,h,_)),y=a}else{const v=e;d=si(v.length>1?v(f,{attrs:a,slots:o,emit:l}):v(f,null)),y=e.props?a:Jv(a)}}catch(v){fo.length=0,Tl(v,n,1),d=je(Vi)}let S=d;if(y&&x!==!1){const v=Object.keys(y),{shapeFlag:L}=S;v.length&&L&7&&(s&&v.some(Zu)&&(y=Zv(y,s)),S=Ms(S,y,!1,!0))}return t.dirs&&(S=Ms(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&ff(S,t.transition),d=S,Ja(m),d}const Jv=n=>{let e;for(const t in n)(t==="class"||t==="style"||ml(t))&&((e||(e={}))[t]=n[t]);return e},Zv=(n,e)=>{const t={};for(const i in n)(!Zu(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Qv(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?mh(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!Rl(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?mh(i,o,c):!0:!!o;return!1}function mh(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Rl(t,s))return!0}return!1}function e0({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Bm=n=>n.__isSuspense;function t0(n,e){e&&e.pendingBranch?ze(n)?e.effects.push(...n):e.effects.push(n):fv(n)}const Tt=Symbol.for("v-fgt"),Bo=Symbol.for("v-txt"),Vi=Symbol.for("v-cmt"),Ia=Symbol.for("v-stc"),fo=[];let bn=null;function we(n=!1){fo.push(bn=n?null:[])}function n0(){fo.pop(),bn=fo[fo.length-1]||null}let yo=1;function gh(n,e=!1){yo+=n,n<0&&bn&&e&&(bn.hasOnce=!0)}function km(n){return n.dynamicChildren=yo>0?bn||fs:null,n0(),yo>0&&bn&&bn.push(n),n}function Ve(n,e,t,i,r,s){return km(ne(n,e,t,i,r,s,!0))}function Jt(n,e,t,i,r){return km(je(n,e,t,i,r,!0))}function So(n){return n?n.__v_isVNode===!0:!1}function zs(n,e){return n.type===e.type&&n.key===e.key}const Hm=({key:n})=>n??null,Pa=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ot(n)||Kt(n)||qe(n)?{i:Wt,r:n,k:e,f:!!t}:n:null);function ne(n,e=null,t=null,i=0,r=null,s=n===Tt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Hm(e),ref:e&&Pa(e),scopeId:mm,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Wt};return a?(pf(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Ot(t)?8:16),yo>0&&!o&&bn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&bn.push(l),l}const je=i0;function i0(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===ym)&&(n=Vi),So(n)){const a=Ms(n,e,!0);return t&&pf(a,t),yo>0&&!s&&bn&&(a.shapeFlag&6?bn[bn.indexOf(n)]=a:bn.push(a)),a.patchFlag=-2,a}if(m0(n)&&(n=n.__vccOpts),e){e=r0(e);let{class:a,style:l}=e;a&&!Ot(a)&&(e.class=go(a)),wt(l)&&(lf(l)&&!ze(l)&&(l=rn({},l)),e.style=yl(l))}const o=Ot(n)?1:Bm(n)?128:dv(n)?64:wt(n)?4:qe(n)?2:0;return ne(n,e,t,i,r,o,s,!0)}function r0(n){return n?lf(n)||wm(n)?rn({},n):n:null}function Ms(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?o0(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Hm(c),ref:e&&e.ref?t&&s?ze(s)?s.concat(Pa(e)):[s,Pa(e)]:Pa(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Tt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ms(n.ssContent),ssFallback:n.ssFallback&&Ms(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&ff(u,l.clone(u)),u}function el(n=" ",e=0){return je(Bo,null,n,e)}function s0(n,e){const t=je(Ia,null,n);return t.staticCount=e,t}function zi(n="",e=!1){return e?(we(),Jt(Vi,null,n)):je(Vi,null,n)}function si(n){return n==null||typeof n=="boolean"?je(Vi):ze(n)?je(Tt,null,n.slice()):So(n)?nr(n):je(Bo,null,String(n))}function nr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ms(n)}function pf(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ze(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),pf(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!wm(e)?e._ctx=Wt:r===3&&Wt&&(Wt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else qe(e)?(e={default:e,_ctx:Wt},t=32):(e=String(e),i&64?(t=16,e=[el(e)]):t=8);n.children=e,n.shapeFlag|=t}function o0(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=go([e.class,i.class]));else if(r==="style")e.style=yl([e.style,i.style]);else if(ml(r)){const s=e[r],o=i[r];o&&s!==o&&!(ze(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function ni(n,e,t,i=null){fi(n,e,7,[t,i])}const a0=Tm();let l0=0;function c0(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||a0,s={uid:l0++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new jp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cm(i,r),emitsOptions:Fm(i,r),emit:null,emitted:null,propsDefaults:Et,inheritAttrs:i.inheritAttrs,ctx:Et,data:Et,props:Et,attrs:Et,slots:Et,refs:Et,setupState:Et,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Kv.bind(null,s),n.ce&&n.ce(s),s}let qt=null;const Es=()=>qt||Wt;let tl,$c;{const n=xl(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};tl=e("__VUE_INSTANCE_SETTERS__",t=>qt=t),$c=e("__VUE_SSR_SETTERS__",t=>Mo=t)}const ko=n=>{const e=qt;return tl(n),n.scope.on(),()=>{n.scope.off(),tl(e)}},_h=()=>{qt&&qt.scope.off(),tl(null)};function Vm(n){return n.vnode.shapeFlag&4}let Mo=!1;function u0(n,e=!1,t=!1){e&&$c(e);const{props:i,children:r}=n.vnode,s=Vm(n);Ov(n,i,s,e),Hv(n,r,t||e);const o=s?f0(n,e):void 0;return e&&$c(!1),o}function f0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,wv);const{setup:i}=t;if(i){ki();const r=n.setupContext=i.length>1?d0(n):null,s=ko(n),o=Fo(i,n,0,[n.props,r]),a=kp(o);if(Hi(),s(),(a||n.sp)&&!ms(n)&&gm(n),a){if(o.then(_h,_h),e)return o.then(l=>{vh(n,l)}).catch(l=>{Tl(l,n,0)});n.asyncDep=o}else vh(n,o)}else zm(n)}function vh(n,e,t){qe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:wt(e)&&(n.setupState=um(e)),zm(n)}function zm(n,e,t){const i=n.type;n.render||(n.render=i.render||li);{const r=ko(n);ki();try{Rv(n)}finally{Hi(),r()}}}const h0={get(n,e){return en(n,"get",""),n[e]}};function d0(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,h0),slots:n.slots,emit:n.emit,expose:e}}function Cl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(um(nv(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in co)return co[t](n)},has(e,t){return t in e||t in co}})):n.proxy}function p0(n,e=!0){return qe(n)?n.displayName||n.name:n.name||e&&n.__name}function m0(n){return qe(n)&&"__vccOpts"in n}const ir=(n,e)=>ov(n,e,Mo);function Gm(n,e,t){const i=arguments.length;return i===2?wt(e)&&!ze(e)?So(e)?je(n,null,[e]):je(n,e):je(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&So(t)&&(t=[t]),je(n,e,t))}const g0="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Yc;const xh=typeof window<"u"&&window.trustedTypes;if(xh)try{Yc=xh.createPolicy("vue",{createHTML:n=>n})}catch{}const Wm=Yc?n=>Yc.createHTML(n):n=>n,_0="http://www.w3.org/2000/svg",v0="http://www.w3.org/1998/Math/MathML",Ri=typeof document<"u"?document:null,yh=Ri&&Ri.createElement("template"),x0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Ri.createElementNS(_0,n):e==="mathml"?Ri.createElementNS(v0,n):t?Ri.createElement(n,{is:t}):Ri.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Ri.createTextNode(n),createComment:n=>Ri.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ri.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{yh.innerHTML=Wm(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=yh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},y0=Symbol("_vtc");function S0(n,e,t){const i=n[y0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const nl=Symbol("_vod"),Xm=Symbol("_vsh"),M0={beforeMount(n,{value:e},{transition:t}){n[nl]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Gs(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Gs(n,!0),i.enter(n)):i.leave(n,()=>{Gs(n,!1)}):Gs(n,e))},beforeUnmount(n,{value:e}){Gs(n,e)}};function Gs(n,e){n.style.display=e?n[nl]:"none",n[Xm]=!e}const E0=Symbol(""),T0=/(^|;)\s*display\s*:/;function b0(n,e,t){const i=n.style,r=Ot(t);let s=!1;if(t&&!r){if(e)if(Ot(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Da(i,a,"")}else for(const o in e)t[o]==null&&Da(i,o,"");for(const o in t)o==="display"&&(s=!0),Da(i,o,t[o])}else if(r){if(e!==t){const o=i[E0];o&&(t+=";"+o),i.cssText=t,s=T0.test(t)}}else e&&n.removeAttribute("style");nl in n&&(n[nl]=s?i.display:"",n[Xm]&&(i.display="none"))}const Sh=/\s*!important$/;function Da(n,e,t){if(ze(t))t.forEach(i=>Da(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=A0(n,e);Sh.test(t)?n.setProperty(Hr(i),t.replace(Sh,""),"important"):n[i]=t}}const Mh=["Webkit","Moz","ms"],Xl={};function A0(n,e){const t=Xl[e];if(t)return t;let i=Bn(e);if(i!=="filter"&&i in n)return Xl[e]=i;i=vl(i);for(let r=0;r<Mh.length;r++){const s=Mh[r]+i;if(s in n)return Xl[e]=s}return e}const Eh="http://www.w3.org/1999/xlink";function Th(n,e,t,i,r,s=P_(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Eh,e.slice(6,e.length)):n.setAttributeNS(Eh,e,t):t==null||s&&!Gp(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Zn(t)?String(t):t)}function bh(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Wm(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Gp(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function Cr(n,e,t,i){n.addEventListener(e,t,i)}function w0(n,e,t,i){n.removeEventListener(e,t,i)}const Ah=Symbol("_vei");function R0(n,e,t,i,r=null){const s=n[Ah]||(n[Ah]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=C0(e);if(i){const c=s[e]=P0(i,r);Cr(n,a,c,l)}else o&&(w0(n,a,o,l),s[e]=void 0)}}const wh=/(?:Once|Passive|Capture)$/;function C0(n){let e;if(wh.test(n)){e={};let i;for(;i=n.match(wh);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Hr(n.slice(2)),e]}let jl=0;const L0=Promise.resolve(),I0=()=>jl||(L0.then(()=>jl=0),jl=Date.now());function P0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;fi(D0(i,t.value),e,5,[i])};return t.value=n,t.attached=I0(),t}function D0(n,e){if(ze(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Rh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,N0=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?S0(n,i,o):e==="style"?b0(n,t,i):ml(e)?Zu(e)||R0(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):U0(n,e,i,o))?(bh(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Th(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Ot(i))?bh(n,Bn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Th(n,e,i,o))};function U0(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Rh(e)&&qe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Rh(e)&&Ot(t)?!1:e in n}const il=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ze(e)?t=>La(e,t):e};function O0(n){n.target.composing=!0}function Ch(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const _s=Symbol("_assign"),vi={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[_s]=il(r);const s=i||r.props&&r.props.type==="number";Cr(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),s&&(a=$a(a)),n[_s](a)}),t&&Cr(n,"change",()=>{n.value=n.value.trim()}),e||(Cr(n,"compositionstart",O0),Cr(n,"compositionend",Ch),Cr(n,"change",Ch))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[_s]=il(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?$a(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},Lh={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const r=gl(e);Cr(n,"change",()=>{const s=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?$a(rl(o)):rl(o));n[_s](n.multiple?r?new Set(s):s:s[0]),n._assigning=!0,cf(()=>{n._assigning=!1})}),n[_s]=il(i)},mounted(n,{value:e}){Ih(n,e)},beforeUpdate(n,e,t){n[_s]=il(t)},updated(n,{value:e}){n._assigning||Ih(n,e)}};function Ih(n,e){const t=n.multiple,i=ze(e);if(!(t&&!i&&!gl(e))){for(let r=0,s=n.options.length;r<s;r++){const o=n.options[r],a=rl(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=N_(e,a)>-1}else o.selected=e.has(a);else if(Sl(rl(o),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function rl(n){return"_value"in n?n._value:n.value}const F0=rn({patchProp:N0},x0);let Ph;function B0(){return Ph||(Ph=zv(F0))}const k0=(...n)=>{const e=B0().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=V0(i);if(!r)return;const s=e._component;!qe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,H0(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function H0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function V0(n){return Ot(n)?document.querySelector(n):n}const z0={class:"button clickable glass"},G0={key:0,class:"material-symbols-outlined"},W0={key:1},sl=Rt({__name:"CustomButton",props:{content:{}},setup(n){const e=["arrow_drop_down","arrow_drop_up","colorize"];function t(i){return e.includes(i)}return(i,r)=>(we(),Ve("div",z0,[t(i.content)?(we(),Ve("span",G0,et(i.content),1)):(we(),Ve("p",W0,et(i.content),1))]))}}),X0={id:"navbar"},j0={id:"progress"},$0=Rt({__name:"NavBar",props:{canMoveForward:{type:Boolean},canMoveBackward:{type:Boolean}},emits:["moved"],setup(n,{emit:e}){const t=e;return(i,r)=>(we(),Ve("div",X0,[r[2]||(r[2]=s0('<div class="glass" data-v-e7d2f3d7><a href="https://github.com/Crhonopost" data-v-e7d2f3d7>Github</a><a href="cv" data-v-e7d2f3d7>CV</a><a href="https://www.linkedin.com/in/nathan-souvignet-a10732230/" data-v-e7d2f3d7>LinkedIn</a><a href="mailto:nath.souvignet@gmail.com" data-v-e7d2f3d7>Email</a></div>',1)),ne("div",j0,[i.canMoveForward?(we(),Jt(sl,{key:0,content:"arrow_drop_up",onClick:r[0]||(r[0]=s=>t("moved","f"))})):zi("",!0),i.canMoveBackward?(we(),Jt(sl,{key:1,content:"arrow_drop_down",onClick:r[1]||(r[1]=s=>t("moved","b"))})):zi("",!0)])]))}}),Rn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Y0=Rn($0,[["__scopeId","data-v-e7d2f3d7"]]),xi=1e3;function q0(){const n=yt(0);function e(r){n.value+=r==="f"?xi:-xi,n.value=Math.max(0,n.value);const s=n.value/xi;history.pushState({page:s},"",`/slide-${s}`)}window.addEventListener("popstate",r=>{r.state&&typeof r.state.page=="number"&&(n.value=r.state.page*xi)});function t(r){const s=r*xi-n.value,o=1-s/(xi*2),a=.1;let l=1;const c=-100;if(s<c){const u=c-s;l=Math.max(0,1-u/100)}else s>500&&(l=Math.max(0,1-(s-500)/200));return{transform:`
                translate(-50%, -50%)
                translateY(${-s*a}px)
                translateZ(${-s}px)
                scale(${o})
            `,opacity:l,zIndex:r}}function i(r){var l;const o=((((l=document.querySelector(".scene"))==null?void 0:l.childElementCount)||0)-1)*xi,a=n.value+(r==="f"?xi:-xi);return a>=0&&a<=o}return{scrollPosition:n,canScroll:i,moveOneSlide:e,getStyle:t}}const K0={class:"scene"},J0=Rt({__name:"DepthListComponent",setup(n,{expose:e}){const{getStyle:t,moveOneSlide:i,canScroll:r}=q0();return e({moveOneSlide:i,canScroll:r}),(s,o)=>{var a,l;return we(),Ve("div",K0,[(we(!0),Ve(Tt,null,An(((l=(a=s.$slots).default)==null?void 0:l.call(a))??[],(c,u)=>(we(),Ve("div",{class:"layer",key:u,style:yl(st(t)(u))},[(we(),Jt(wl(c)))],4))),128))])}}}),Z0=Rn(J0,[["__scopeId","data-v-7c55bec2"]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mf="177",Q0=0,Dh=1,ex=2,jm=1,tx=2,wi=3,Gi=0,xn=1,Xn=2,ar=0,vs=1,Nh=2,Uh=3,Oh=4,nx=5,Lr=100,ix=101,rx=102,sx=103,ox=104,ax=200,lx=201,cx=202,ux=203,qc=204,Kc=205,fx=206,hx=207,dx=208,px=209,mx=210,gx=211,_x=212,vx=213,xx=214,Jc=0,Zc=1,Qc=2,Ts=3,eu=4,tu=5,nu=6,iu=7,$m=0,yx=1,Sx=2,lr=0,Mx=1,Ex=2,Tx=3,bx=4,Ax=5,wx=6,Rx=7,Fh="attached",Cx="detached",Ym=300,bs=301,As=302,ru=303,su=304,Ll=306,kn=1e3,ai=1001,ol=1002,fn=1003,qm=1004,ro=1005,kt=1006,Na=1007,Pi=1008,hi=1009,Km=1010,Jm=1011,Eo=1012,gf=1013,Br=1014,Yn=1015,Ho=1016,_f=1017,vf=1018,To=1020,Zm=35902,Qm=1021,eg=1022,On=1023,bo=1026,Ao=1027,xf=1028,yf=1029,tg=1030,Sf=1031,Mf=1033,Ua=33776,Oa=33777,Fa=33778,Ba=33779,ou=35840,au=35841,lu=35842,cu=35843,uu=36196,fu=37492,hu=37496,du=37808,pu=37809,mu=37810,gu=37811,_u=37812,vu=37813,xu=37814,yu=37815,Su=37816,Mu=37817,Eu=37818,Tu=37819,bu=37820,Au=37821,ka=36492,wu=36494,Ru=36495,ng=36283,Cu=36284,Lu=36285,Iu=36286,wo=2300,Ro=2301,$l=2302,Bh=2400,kh=2401,Hh=2402,Lx=2500,Ix=0,ig=1,Pu=2,Px=3200,Dx=3201,rg=0,Nx=1,rr="",$t="srgb",pn="srgb-linear",al="linear",Mt="srgb",Wr=7680,Vh=519,Ux=512,Ox=513,Fx=514,sg=515,Bx=516,kx=517,Hx=518,Vx=519,Du=35044,zh="300 es",Di=2e3,ll=2001;class Ns{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gh=1234567;const ho=Math.PI/180,ws=180/Math.PI;function Jn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function tt(n,e,t){return Math.max(e,Math.min(t,n))}function Ef(n,e){return(n%e+e)%e}function zx(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Gx(n,e,t){return n!==e?(t-n)/(e-n):0}function po(n,e,t){return(1-t)*n+t*e}function Wx(n,e,t,i){return po(n,e,1-Math.exp(-t*i))}function Xx(n,e=1){return e-Math.abs(Ef(n,e*2)-e)}function jx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function $x(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Yx(n,e){return n+Math.floor(Math.random()*(e-n+1))}function qx(n,e){return n+Math.random()*(e-n)}function Kx(n){return n*(.5-Math.random())}function Jx(n){n!==void 0&&(Gh=n);let e=Gh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zx(n){return n*ho}function Qx(n){return n*ws}function ey(n){return(n&n-1)===0&&n!==0}function ty(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ny(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function iy(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*f,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function jn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ha={DEG2RAD:ho,RAD2DEG:ws,generateUUID:Jn,clamp:tt,euclideanModulo:Ef,mapLinear:zx,inverseLerp:Gx,lerp:po,damp:Wx,pingpong:Xx,smoothstep:jx,smootherstep:$x,randInt:Yx,randFloat:qx,randFloatSpread:Kx,seededRandom:Jx,degToRad:Zx,radToDeg:Qx,isPowerOfTwo:ey,ceilPowerOfTwo:ty,floorPowerOfTwo:ny,setQuaternionFromProperEuler:iy,normalize:vt,denormalize:jn};class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ur{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(f!==x||l!==h||c!==p||u!==_){let m=1-a;const d=l*h+c*p+u*_+f*x,y=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){const L=Math.sqrt(S),I=Math.atan2(L,d*y);m=Math.sin(m*I)/L,a=Math.sin(a*I)/L}const v=a*y;if(l=l*m+h*v,c=c*m+p*v,u=u*m+_*v,f=f*m+x*v,m===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=L,c*=L,u*=L,f*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+u*f+l*p-c*h,e[t+1]=l*_+u*h+c*f-a*p,e[t+2]=c*_+u*p+a*h-l*f,e[t+3]=u*_-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"YXZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"ZXY":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"ZYX":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"YZX":this._x=h*u*f+c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f-h*p*_;break;case"XZY":this._x=h*u*f-c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Yl.copy(this).projectOnVector(e),this.sub(Yl)}reflect(e){return this.sub(Yl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yl=new z,Wh=new ur;class Je{constructor(e,t,i,r,s,o,a,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],_=i[8],x=r[0],m=r[3],d=r[6],y=r[1],S=r[4],v=r[7],L=r[2],I=r[5],R=r[8];return s[0]=o*x+a*y+l*L,s[3]=o*m+a*S+l*I,s[6]=o*d+a*v+l*R,s[1]=c*x+u*y+f*L,s[4]=c*m+u*S+f*I,s[7]=c*d+u*v+f*R,s[2]=h*x+p*y+_*L,s[5]=h*m+p*S+_*I,s[8]=h*d+p*v+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,_=t*f+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ql.makeScale(e,t)),this}rotate(e){return this.premultiply(ql.makeRotation(-e)),this}translate(e,t){return this.premultiply(ql.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ql=new Je;function og(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Co(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ry(){const n=Co("canvas");return n.style.display="block",n}const Xh={};function xs(n){n in Xh||(Xh[n]=!0,console.warn(n))}function sy(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function oy(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ay(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const jh=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$h=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ly(){const n={enabled:!0,workingColorSpace:pn,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Mt&&(r.r=Oi(r.r),r.g=Oi(r.g),r.b=Oi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Mt&&(r.r=ys(r.r),r.g=ys(r.g),r.b=ys(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===rr?al:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return xs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return xs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[pn]:{primaries:e,whitePoint:i,transfer:al,toXYZ:jh,fromXYZ:$h,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$t},outputColorSpaceConfig:{drawingBufferColorSpace:$t}},[$t]:{primaries:e,whitePoint:i,transfer:Mt,toXYZ:jh,fromXYZ:$h,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$t}}}),n}const at=ly();function Oi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ys(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Xr;class cy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Xr===void 0&&(Xr=Co("canvas")),Xr.width=e.width,Xr.height=e.height;const r=Xr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Xr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Co("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Oi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Oi(t[i]/255)*255):t[i]=Oi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uy=0;class Tf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=Jn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Kl(r[o].image)):s.push(Kl(r[o]))}else s=Kl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Kl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?cy.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fy=0;const Jl=new z;class Xt extends Ns{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,i=ai,r=ai,s=kt,o=Pi,a=On,l=hi,c=Xt.DEFAULT_ANISOTROPY,u=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=Jn(),this.name="",this.source=new Tf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Jl).x}get height(){return this.source.getSize(Jl).y}get depth(){return this.source.getSize(Jl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ym)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kn:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case ol:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kn:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case ol:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Ym;Xt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,i=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],_=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,v=(p+1)/2,L=(d+1)/2,I=(u+h)/4,R=(f+x)/4,D=(_+m)/4;return S>v&&S>L?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=I/i,s=R/i):v>L?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=I/r,s=D/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=R/s,r=D/s),this.set(i,r,s,t),this}let y=Math.sqrt((m-_)*(m-_)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(f-x)/y,this.z=(h-u)/y,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hy extends Ns{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Xt(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Tf(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kr extends hy{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ag extends Xt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class dy extends Xt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ji{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zn):zn.fromBufferAttribute(s,o),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Jo.copy(i.boundingBox)),Jo.applyMatrix4(e.matrixWorld),this.union(Jo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ws),Zo.subVectors(this.max,Ws),jr.subVectors(e.a,Ws),$r.subVectors(e.b,Ws),Yr.subVectors(e.c,Ws),$i.subVectors($r,jr),Yi.subVectors(Yr,$r),xr.subVectors(jr,Yr);let t=[0,-$i.z,$i.y,0,-Yi.z,Yi.y,0,-xr.z,xr.y,$i.z,0,-$i.x,Yi.z,0,-Yi.x,xr.z,0,-xr.x,-$i.y,$i.x,0,-Yi.y,Yi.x,0,-xr.y,xr.x,0];return!Zl(t,jr,$r,Yr,Zo)||(t=[1,0,0,0,1,0,0,0,1],!Zl(t,jr,$r,Yr,Zo))?!1:(Qo.crossVectors($i,Yi),t=[Qo.x,Qo.y,Qo.z],Zl(t,jr,$r,Yr,Zo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yi=[new z,new z,new z,new z,new z,new z,new z,new z],zn=new z,Jo=new ji,jr=new z,$r=new z,Yr=new z,$i=new z,Yi=new z,xr=new z,Ws=new z,Zo=new z,Qo=new z,yr=new z;function Zl(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){yr.fromArray(n,s);const a=r.x*Math.abs(yr.x)+r.y*Math.abs(yr.y)+r.z*Math.abs(yr.z),l=e.dot(yr),c=t.dot(yr),u=i.dot(yr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const py=new ji,Xs=new z,Ql=new z;class pi{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):py.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xs.subVectors(e,this.center);const t=Xs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Xs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xs.copy(e.center).add(Ql)),this.expandByPoint(Xs.copy(e.center).sub(Ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Si=new z,ec=new z,ea=new z,qi=new z,tc=new z,ta=new z,nc=new z;class Il{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ec.copy(e).add(t).multiplyScalar(.5),ea.copy(t).sub(e).normalize(),qi.copy(this.origin).sub(ec);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ea),a=qi.dot(this.direction),l=-qi.dot(ea),c=qi.lengthSq(),u=Math.abs(1-o*o);let f,h,p,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const x=1/u;f*=x,h*=x,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ec).addScaledVector(ea,h),p}intersectSphere(e,t){Si.subVectors(e.center,this.origin);const i=Si.dot(this.direction),r=Si.dot(Si)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,i,r,s){tc.subVectors(t,e),ta.subVectors(i,e),nc.crossVectors(tc,ta);let o=this.direction.dot(nc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qi.subVectors(this.origin,e);const l=a*this.direction.dot(ta.crossVectors(qi,ta));if(l<0)return null;const c=a*this.direction.dot(tc.cross(qi));if(c<0||l+c>o)return null;const u=-a*qi.dot(nc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(e,t,i,r,s,o,a,l,c,u,f,h,p,_,x,m){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,p,_,x,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,p,_,x,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/qr.setFromMatrixColumn(e,0).length(),s=1/qr.setFromMatrixColumn(e,1).length(),o=1/qr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,_=a*u,x=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+_*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,_=c*u,x=c*f;t[0]=h+x*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,_=c*u,x=c*f;t[0]=h-x*a,t[4]=-o*f,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,_=a*u,x=a*f;t[0]=l*u,t[4]=_*c-p,t[8]=h*c+x,t[1]=l*f,t[5]=x*c+h,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=x-h*f,t[8]=_*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+_,t[10]=h-x*f}else if(e.order==="XZY"){const h=o*l,p=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+x,t[5]=o*u,t[9]=p*f-_,t[2]=_*f-p,t[6]=a*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(my,e,gy)}lookAt(e,t,i){const r=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Ki.crossVectors(i,Mn),Ki.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Ki.crossVectors(i,Mn)),Ki.normalize(),na.crossVectors(Mn,Ki),r[0]=Ki.x,r[4]=na.x,r[8]=Mn.x,r[1]=Ki.y,r[5]=na.y,r[9]=Mn.y,r[2]=Ki.z,r[6]=na.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],_=i[2],x=i[6],m=i[10],d=i[14],y=i[3],S=i[7],v=i[11],L=i[15],I=r[0],R=r[4],D=r[8],E=r[12],M=r[1],F=r[5],Y=r[9],$=r[13],ie=r[2],G=r[6],B=r[10],q=r[14],H=r[3],le=r[7],pe=r[11],Ae=r[15];return s[0]=o*I+a*M+l*ie+c*H,s[4]=o*R+a*F+l*G+c*le,s[8]=o*D+a*Y+l*B+c*pe,s[12]=o*E+a*$+l*q+c*Ae,s[1]=u*I+f*M+h*ie+p*H,s[5]=u*R+f*F+h*G+p*le,s[9]=u*D+f*Y+h*B+p*pe,s[13]=u*E+f*$+h*q+p*Ae,s[2]=_*I+x*M+m*ie+d*H,s[6]=_*R+x*F+m*G+d*le,s[10]=_*D+x*Y+m*B+d*pe,s[14]=_*E+x*$+m*q+d*Ae,s[3]=y*I+S*M+v*ie+L*H,s[7]=y*R+S*F+v*G+L*le,s[11]=y*D+S*Y+v*B+L*pe,s[15]=y*E+S*$+v*q+L*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],_=e[3],x=e[7],m=e[11],d=e[15];return _*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+x*(+t*l*p-t*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+t*c*f-t*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],_=e[12],x=e[13],m=e[14],d=e[15],y=f*m*c-x*h*c+x*l*p-a*m*p-f*l*d+a*h*d,S=_*h*c-u*m*c-_*l*p+o*m*p+u*l*d-o*h*d,v=u*x*c-_*f*c+_*a*p-o*x*p-u*a*d+o*f*d,L=_*f*l-u*x*l-_*a*h+o*x*h+u*a*m-o*f*m,I=t*y+i*S+r*v+s*L;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/I;return e[0]=y*R,e[1]=(x*h*s-f*m*s-x*r*p+i*m*p+f*r*d-i*h*d)*R,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*d+i*l*d)*R,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*R,e[4]=S*R,e[5]=(u*m*s-_*h*s+_*r*p-t*m*p-u*r*d+t*h*d)*R,e[6]=(_*l*s-o*m*s-_*r*c+t*m*c+o*r*d-t*l*d)*R,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*p+t*l*p)*R,e[8]=v*R,e[9]=(_*f*s-u*x*s-_*i*p+t*x*p+u*i*d-t*f*d)*R,e[10]=(o*x*s-_*a*s+_*i*c-t*x*c-o*i*d+t*a*d)*R,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*p-t*a*p)*R,e[12]=L*R,e[13]=(u*x*r-_*f*r+_*i*h-t*x*h-u*i*m+t*f*m)*R,e[14]=(_*a*r-o*x*r-_*i*l+t*x*l+o*i*m-t*a*m)*R,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,_=s*f,x=o*u,m=o*f,d=a*f,y=l*c,S=l*u,v=l*f,L=i.x,I=i.y,R=i.z;return r[0]=(1-(x+d))*L,r[1]=(p+v)*L,r[2]=(_-S)*L,r[3]=0,r[4]=(p-v)*I,r[5]=(1-(h+d))*I,r[6]=(m+y)*I,r[7]=0,r[8]=(_+S)*R,r[9]=(m-y)*R,r[10]=(1-(h+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=qr.set(r[0],r[1],r[2]).length();const o=qr.set(r[4],r[5],r[6]).length(),a=qr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gn.copy(this);const c=1/s,u=1/o,f=1/a;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=f,Gn.elements[9]*=f,Gn.elements[10]*=f,t.setFromRotationMatrix(Gn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Di){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,_;if(a===Di)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ll)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Di){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,p=(i+r)*u;let _,x;if(a===Di)_=(o+s)*f,x=-2*f;else if(a===ll)_=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const qr=new z,Gn=new Ke,my=new z(0,0,0),gy=new z(1,1,1),Ki=new z,na=new z,Mn=new z,Yh=new Ke,qh=new ur;class Qn{constructor(e=0,t=0,i=0,r=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Yh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qh.setFromEuler(this),this.setFromQuaternion(qh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class lg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _y=0;const Kh=new z,Kr=new ur,Mi=new Ke,ia=new z,js=new z,vy=new z,xy=new ur,Jh=new z(1,0,0),Zh=new z(0,1,0),Qh=new z(0,0,1),ed={type:"added"},yy={type:"removed"},Jr={type:"childadded",child:null},ic={type:"childremoved",child:null};class Dt extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new z,t=new Qn,i=new ur,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Je}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Kr.setFromAxisAngle(e,t),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(e,t){return Kr.setFromAxisAngle(e,t),this.quaternion.premultiply(Kr),this}rotateX(e){return this.rotateOnAxis(Jh,e)}rotateY(e){return this.rotateOnAxis(Zh,e)}rotateZ(e){return this.rotateOnAxis(Qh,e)}translateOnAxis(e,t){return Kh.copy(e).applyQuaternion(this.quaternion),this.position.add(Kh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jh,e)}translateY(e){return this.translateOnAxis(Zh,e)}translateZ(e){return this.translateOnAxis(Qh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ia.copy(e):ia.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(js,ia,this.up):Mi.lookAt(ia,js,this.up),this.quaternion.setFromRotationMatrix(Mi),r&&(Mi.extractRotation(r.matrixWorld),Kr.setFromRotationMatrix(Mi),this.quaternion.premultiply(Kr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ed),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yy),ic.child=e,this.dispatchEvent(ic),ic.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ed),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,e,vy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,xy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Dt.DEFAULT_UP=new z(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new z,Ei=new z,rc=new z,Ti=new z,Zr=new z,Qr=new z,td=new z,sc=new z,oc=new z,ac=new z,lc=new ut,cc=new ut,uc=new ut;class $n{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Wn.subVectors(e,t),r.cross(Wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Wn.subVectors(r,t),Ei.subVectors(i,t),rc.subVectors(e,t);const o=Wn.dot(Wn),a=Wn.dot(Ei),l=Wn.dot(rc),c=Ei.dot(Ei),u=Ei.dot(rc),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ti.x),l.addScaledVector(o,Ti.y),l.addScaledVector(a,Ti.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return lc.setScalar(0),cc.setScalar(0),uc.setScalar(0),lc.fromBufferAttribute(e,t),cc.fromBufferAttribute(e,i),uc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(lc,s.x),o.addScaledVector(cc,s.y),o.addScaledVector(uc,s.z),o}static isFrontFacing(e,t,i,r){return Wn.subVectors(i,t),Ei.subVectors(e,t),Wn.cross(Ei).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Wn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return $n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return $n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Zr.subVectors(r,i),Qr.subVectors(s,i),sc.subVectors(e,i);const l=Zr.dot(sc),c=Qr.dot(sc);if(l<=0&&c<=0)return t.copy(i);oc.subVectors(e,r);const u=Zr.dot(oc),f=Qr.dot(oc);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Zr,o);ac.subVectors(e,s);const p=Zr.dot(ac),_=Qr.dot(ac);if(_>=0&&p<=_)return t.copy(s);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Qr,a);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return td.subVectors(s,r),a=(f-u)/(f-u+(p-_)),t.copy(r).addScaledVector(td,a);const d=1/(m+x+h);return o=x*d,a=h*d,t.copy(i).addScaledVector(Zr,o).addScaledVector(Qr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},ra={h:0,s:0,l:0};function fc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class We{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=at.workingColorSpace){if(e=Ef(e,1),t=tt(t,0,1),i=tt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=fc(o,s,e+1/3),this.g=fc(o,s,e),this.b=fc(o,s,e-1/3)}return at.colorSpaceToWorking(this,r),this}setStyle(e,t=$t){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){const i=cg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return at.workingToColorSpace(Qt.copy(this),e),Math.round(tt(Qt.r*255,0,255))*65536+Math.round(tt(Qt.g*255,0,255))*256+Math.round(tt(Qt.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(Qt.copy(this),t);const i=Qt.r,r=Qt.g,s=Qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=$t){at.workingToColorSpace(Qt.copy(this),e);const t=Qt.r,i=Qt.g,r=Qt.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+t,Ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ji),e.getHSL(ra);const i=po(Ji.h,ra.h,t),r=po(Ji.s,ra.s,t),s=po(Ji.l,ra.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new We;We.NAMES=cg;let Sy=0;class ci extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=vs,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qc,this.blendDst=Kc,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(i.blending=this.blending),this.side!==Gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qc&&(i.blendSrc=this.blendSrc),this.blendDst!==Kc&&(i.blendDst=this.blendDst),this.blendEquation!==Lr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Pr extends ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=$m,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ft=new z,sa=new He;let My=0;class hn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:My++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Du,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)sa.fromBufferAttribute(this,t),sa.applyMatrix3(e),this.setXY(t,sa.x,sa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=jn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jn(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jn(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jn(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),r=vt(r,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Du&&(e.usage=this.usage),e}}class ug extends hn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class fg extends hn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class dn extends hn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ey=0;const Pn=new Ke,hc=new Dt,es=new z,En=new ji,$s=new ji,Gt=new z;class Cn extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(og(e)?fg:ug)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,i){return Pn.makeTranslation(e,t,i),this.applyMatrix4(Pn),this}scale(e,t,i){return Pn.makeScale(e,t,i),this.applyMatrix4(Pn),this}lookAt(e){return hc.lookAt(e),hc.updateMatrix(),this.applyMatrix4(hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new dn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];$s.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(En.min,$s.min),En.expandByPoint(Gt),Gt.addVectors(En.max,$s.max),En.expandByPoint(Gt)):(En.expandByPoint($s.min),En.expandByPoint($s.max))}En.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Gt.fromBufferAttribute(a,c),l&&(es.fromBufferAttribute(e,c),Gt.add(es)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new z,l[D]=new z;const c=new z,u=new z,f=new z,h=new He,p=new He,_=new He,x=new z,m=new z;function d(D,E,M){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,M),h.fromBufferAttribute(s,D),p.fromBufferAttribute(s,E),_.fromBufferAttribute(s,M),u.sub(c),f.sub(c),p.sub(h),_.sub(h);const F=1/(p.x*_.y-_.x*p.y);isFinite(F)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(F),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(F),a[D].add(x),a[E].add(x),a[M].add(x),l[D].add(m),l[E].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let D=0,E=y.length;D<E;++D){const M=y[D],F=M.start,Y=M.count;for(let $=F,ie=F+Y;$<ie;$+=3)d(e.getX($+0),e.getX($+1),e.getX($+2))}const S=new z,v=new z,L=new z,I=new z;function R(D){L.fromBufferAttribute(r,D),I.copy(L);const E=a[D];S.copy(E),S.sub(L.multiplyScalar(L.dot(E))).normalize(),v.crossVectors(I,E);const F=v.dot(l[D])<0?-1:1;o.setXYZW(D,S.x,S.y,S.z,F)}for(let D=0,E=y.length;D<E;++D){const M=y[D],F=M.start,Y=M.count;for(let $=F,ie=F+Y;$<ie;$+=3)R(e.getX($+0)),R(e.getX($+1)),R(e.getX($+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let d=0;d<u;d++)h[_++]=c[p++]}return new hn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Cn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nd=new Ke,Sr=new Il,oa=new pi,id=new z,aa=new z,la=new z,ca=new z,dc=new z,ua=new z,rd=new z,fa=new z;class vn extends Dt{constructor(e=new Cn,t=new Pr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ua.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(dc.fromBufferAttribute(f,e),o?ua.addScaledVector(dc,u):ua.addScaledVector(dc.sub(t),u))}t.add(ua)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(s),Sr.copy(e.ray).recast(e.near),!(oa.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(oa,id)===null||Sr.origin.distanceToSquared(id)>(e.far-e.near)**2))&&(nd.copy(s).invert(),Sr.copy(e.ray).applyMatrix4(nd),!(i.boundingBox!==null&&Sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Sr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const m=h[_],d=o[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=y,L=S;v<L;v+=3){const I=a.getX(v),R=a.getX(v+1),D=a.getX(v+2);r=ha(this,d,e,i,c,u,f,I,R,D),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const y=a.getX(m),S=a.getX(m+1),v=a.getX(m+2);r=ha(this,o,e,i,c,u,f,y,S,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const m=h[_],d=o[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=y,L=S;v<L;v+=3){const I=v,R=v+1,D=v+2;r=ha(this,d,e,i,c,u,f,I,R,D),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const y=m,S=m+1,v=m+2;r=ha(this,o,e,i,c,u,f,y,S,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Ty(n,e,t,i,r,s,o,a){let l;if(e.side===xn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Gi,a),l===null)return null;fa.copy(a),fa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(fa);return c<t.near||c>t.far?null:{distance:c,point:fa.clone(),object:n}}function ha(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,aa),n.getVertexPosition(l,la),n.getVertexPosition(c,ca);const u=Ty(n,e,t,i,aa,la,ca,rd);if(u){const f=new z;$n.getBarycoord(rd,aa,la,ca,f),r&&(u.uv=$n.getInterpolatedAttribute(r,a,l,c,f,new He)),s&&(u.uv1=$n.getInterpolatedAttribute(s,a,l,c,f,new He)),o&&(u.normal=$n.getInterpolatedAttribute(o,a,l,c,f,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new z,materialIndex:0};$n.getNormal(aa,la,ca,h.normal),u.face=h,u.barycoord=f}return u}class Vo extends Cn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new dn(c,3)),this.setAttribute("normal",new dn(u,3)),this.setAttribute("uv",new dn(f,2));function _(x,m,d,y,S,v,L,I,R,D,E){const M=v/R,F=L/D,Y=v/2,$=L/2,ie=I/2,G=R+1,B=D+1;let q=0,H=0;const le=new z;for(let pe=0;pe<B;pe++){const Ae=pe*F-$;for(let Be=0;Be<G;Be++){const ot=Be*M-Y;le[x]=ot*y,le[m]=Ae*S,le[d]=ie,c.push(le.x,le.y,le.z),le[x]=0,le[m]=0,le[d]=I>0?1:-1,u.push(le.x,le.y,le.z),f.push(Be/R),f.push(1-pe/D),q+=1}}for(let pe=0;pe<D;pe++)for(let Ae=0;Ae<R;Ae++){const Be=h+Ae+G*pe,ot=h+Ae+G*(pe+1),re=h+(Ae+1)+G*(pe+1),me=h+(Ae+1)+G*pe;l.push(Be,ot,me),l.push(ot,re,me),H+=6}a.addGroup(p,H,E),p+=H,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ln(n){const e={};for(let t=0;t<n.length;t++){const i=Rs(n[t]);for(const r in i)e[r]=i[r]}return e}function by(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function hg(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const Ay={clone:Rs,merge:ln};var wy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ry=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wy,this.fragmentShader=Ry,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=by(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class dg extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new z,sd=new He,od=new He;class tn extends dg{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ho*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,t){return this.getViewBounds(e,sd,od),t.subVectors(od,sd)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ho*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ts=-90,ns=1;class Cy extends Dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new tn(ts,ns,e,t);r.layers=this.layers,this.add(r);const s=new tn(ts,ns,e,t);s.layers=this.layers,this.add(s);const o=new tn(ts,ns,e,t);o.layers=this.layers,this.add(o);const a=new tn(ts,ns,e,t);a.layers=this.layers,this.add(a);const l=new tn(ts,ns,e,t);l.layers=this.layers,this.add(l);const c=new tn(ts,ns,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ll)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class pg extends Xt{constructor(e=[],t=bs,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ly extends kr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new pg(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Vo(5,5,5),s=new di({name:"CubemapFromEquirect",uniforms:Rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:ar});s.uniforms.tEquirect.value=t;const o=new vn(r,s),a=t.minFilter;return t.minFilter===Pi&&(t.minFilter=kt),new Cy(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Dr extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Iy={type:"move"};class pc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Iy)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Dr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class mg extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Py{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Du,this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const on=new z;class bf{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=jn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=jn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=jn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=jn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=jn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),r=vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),r=vt(r,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new hn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new bf(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ad=new z,ld=new ut,cd=new ut,Dy=new z,ud=new Ke,da=new z,mc=new pi,fd=new Ke,gc=new Il;class Ny extends vn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Fh,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ji),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,da),this.boundingBox.expandByPoint(da)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new pi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,da),this.boundingSphere.expandByPoint(da)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mc.copy(this.boundingSphere),mc.applyMatrix4(r),e.ray.intersectsSphere(mc)!==!1&&(fd.copy(r).invert(),gc.copy(e.ray).applyMatrix4(fd),!(this.boundingBox!==null&&gc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,gc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ut,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Fh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Cx?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;ld.fromBufferAttribute(r.attributes.skinIndex,e),cd.fromBufferAttribute(r.attributes.skinWeight,e),ad.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=cd.getComponent(s);if(o!==0){const a=ld.getComponent(s);ud.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Dy.copy(ad).applyMatrix4(ud),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class gg extends Dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Af extends Xt{constructor(e=null,t=1,i=1,r,s,o,a,l,c=fn,u=fn,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hd=new Ke,Uy=new Ke;class wf{constructor(e=[],t=[]){this.uuid=Jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ke;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Uy;hd.multiplyMatrices(a,t[s]),hd.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new wf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Af(t,e,e,On,Yn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new gg),this.bones.push(o),this.boneInverses.push(new Ke().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class Lo extends hn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const is=new Ke,dd=new Ke,pa=[],pd=new ji,Oy=new Ke,Ys=new vn,qs=new pi;class Rf extends vn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Lo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Oy)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ji),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,is),pd.copy(e.boundingBox).applyMatrix4(is),this.boundingBox.union(pd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,is),qs.copy(e.boundingSphere).applyMatrix4(is),this.boundingSphere.union(qs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Ys.geometry=this.geometry,Ys.material=this.material,Ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(i),e.ray.intersectsSphere(qs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,is),dd.multiplyMatrices(i,is),Ys.matrixWorld=dd,Ys.raycast(e,pa);for(let o=0,a=pa.length;o<a;o++){const l=pa[o];l.instanceId=s,l.object=this,t.push(l)}pa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Lo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Af(new Float32Array(r*this.count),r,this.count,xf,Yn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const _c=new z,Fy=new z,By=new Je;class wr{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=_c.subVectors(i,t).cross(Fy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(_c),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||By.getNormalMatrix(e),r=this.coplanarPoint(_c).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mr=new pi,ma=new z;class Cf{constructor(e=new wr,t=new wr,i=new wr,r=new wr,s=new wr,o=new wr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Di){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],_=r[9],x=r[10],m=r[11],d=r[12],y=r[13],S=r[14],v=r[15];if(i[0].setComponents(l-s,h-c,m-p,v-d).normalize(),i[1].setComponents(l+s,h+c,m+p,v+d).normalize(),i[2].setComponents(l+o,h+u,m+_,v+y).normalize(),i[3].setComponents(l-o,h-u,m-_,v-y).normalize(),i[4].setComponents(l-a,h-f,m-x,v-S).normalize(),t===Di)i[5].setComponents(l+a,h+f,m+x,v+S).normalize();else if(t===ll)i[5].setComponents(a,f,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(e){return Mr.center.set(0,0,0),Mr.radius=.7071067811865476,Mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ma.x=r.normal.x>0?e.max.x:e.min.x,ma.y=r.normal.y>0?e.max.y:e.min.y,ma.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ma)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _g extends ci{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const cl=new z,ul=new z,md=new Ke,Ks=new Il,ga=new pi,vc=new z,gd=new z;class Lf extends Dt{constructor(e=new Cn,t=new _g){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)cl.fromBufferAttribute(t,r-1),ul.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=cl.distanceTo(ul);e.setAttribute("lineDistance",new dn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ga.copy(i.boundingSphere),ga.applyMatrix4(r),ga.radius+=s,e.ray.intersectsSphere(ga)===!1)return;md.copy(r).invert(),Ks.copy(e.ray).applyMatrix4(md);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let x=p,m=_-1;x<m;x+=c){const d=u.getX(x),y=u.getX(x+1),S=_a(this,e,Ks,l,d,y,x);S&&t.push(S)}if(this.isLineLoop){const x=u.getX(_-1),m=u.getX(p),d=_a(this,e,Ks,l,x,m,_-1);d&&t.push(d)}}else{const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let x=p,m=_-1;x<m;x+=c){const d=_a(this,e,Ks,l,x,x+1,x);d&&t.push(d)}if(this.isLineLoop){const x=_a(this,e,Ks,l,_-1,p,_-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function _a(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(cl.fromBufferAttribute(a,r),ul.fromBufferAttribute(a,s),t.distanceSqToSegment(cl,ul,vc,gd)>i)return;vc.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(vc);if(!(c<e.near||c>e.far))return{distance:c,point:gd.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const _d=new z,vd=new z;class ky extends Lf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)_d.fromBufferAttribute(t,r),vd.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+_d.distanceTo(vd);e.setAttribute("lineDistance",new dn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Hy extends Lf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class vg extends ci{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xd=new Ke,Nu=new Il,va=new pi,xa=new z;class Vy extends Dt{constructor(e=new Cn,t=new vg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),va.copy(i.boundingSphere),va.applyMatrix4(r),va.radius+=s,e.ray.intersectsSphere(va)===!1)return;xd.copy(r).invert(),Nu.copy(e.ray).applyMatrix4(xd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=h,x=p;_<x;_++){const m=c.getX(_);xa.fromBufferAttribute(f,m),yd(xa,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=h,x=p;_<x;_++)xa.fromBufferAttribute(f,_),yd(xa,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function yd(n,e,t,i,r,s,o){const a=Nu.distanceSqToPoint(n);if(a<t){const l=new z;Nu.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class xg extends Xt{constructor(e,t,i=Br,r,s,o,a=fn,l=fn,c,u=bo,f=1){if(u!==bo&&u!==Ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class If extends Cn{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],h=[],p=[];let _=0;const x=[],m=i/2;let d=0;y(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new dn(f,3)),this.setAttribute("normal",new dn(h,3)),this.setAttribute("uv",new dn(p,2));function y(){const v=new z,L=new z;let I=0;const R=(t-e)/i;for(let D=0;D<=s;D++){const E=[],M=D/s,F=M*(t-e)+e;for(let Y=0;Y<=r;Y++){const $=Y/r,ie=$*l+a,G=Math.sin(ie),B=Math.cos(ie);L.x=F*G,L.y=-M*i+m,L.z=F*B,f.push(L.x,L.y,L.z),v.set(G,R,B).normalize(),h.push(v.x,v.y,v.z),p.push($,1-M),E.push(_++)}x.push(E)}for(let D=0;D<r;D++)for(let E=0;E<s;E++){const M=x[E][D],F=x[E+1][D],Y=x[E+1][D+1],$=x[E][D+1];(e>0||E!==0)&&(u.push(M,F,$),I+=3),(t>0||E!==s-1)&&(u.push(F,Y,$),I+=3)}c.addGroup(d,I,0),d+=I}function S(v){const L=_,I=new He,R=new z;let D=0;const E=v===!0?e:t,M=v===!0?1:-1;for(let Y=1;Y<=r;Y++)f.push(0,m*M,0),h.push(0,M,0),p.push(.5,.5),_++;const F=_;for(let Y=0;Y<=r;Y++){const ie=Y/r*l+a,G=Math.cos(ie),B=Math.sin(ie);R.x=E*B,R.y=m*M,R.z=E*G,f.push(R.x,R.y,R.z),h.push(0,M,0),I.x=G*.5+.5,I.y=B*.5*M+.5,p.push(I.x,I.y),_++}for(let Y=0;Y<r;Y++){const $=L+Y,ie=F+Y;v===!0?u.push(ie,ie+1,$):u.push(ie+1,ie,$),D+=3}c.addGroup(d,D,v===!0?1:2),d+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new If(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Us extends Cn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,p=[],_=[],x=[],m=[];for(let d=0;d<u;d++){const y=d*h-o;for(let S=0;S<c;S++){const v=S*f-s;_.push(v,-y,0),x.push(0,0,1),m.push(S/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<a;y++){const S=y+c*d,v=y+c*(d+1),L=y+1+c*(d+1),I=y+1+c*d;p.push(S,v,I),p.push(v,L,I)}this.setIndex(p),this.setAttribute("position",new dn(_,3)),this.setAttribute("normal",new dn(x,3)),this.setAttribute("uv",new dn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.width,e.height,e.widthSegments,e.heightSegments)}}class fl extends Cn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new z,h=new z,p=[],_=[],x=[],m=[];for(let d=0;d<=i;d++){const y=[],S=d/i;let v=0;d===0&&o===0?v=.5/t:d===i&&l===Math.PI&&(v=-.5/t);for(let L=0;L<=t;L++){const I=L/t;f.x=-e*Math.cos(r+I*s)*Math.sin(o+S*a),f.y=e*Math.cos(o+S*a),f.z=e*Math.sin(r+I*s)*Math.sin(o+S*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),m.push(I+v,1-S),y.push(c++)}u.push(y)}for(let d=0;d<i;d++)for(let y=0;y<t;y++){const S=u[d][y+1],v=u[d][y],L=u[d+1][y],I=u[d+1][y+1];(d!==0||o>0)&&p.push(S,v,I),(d!==i-1||l<Math.PI)&&p.push(v,L,I)}this.setIndex(p),this.setAttribute("position",new dn(_,3)),this.setAttribute("normal",new dn(x,3)),this.setAttribute("uv",new dn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Pf extends ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rg,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mi extends Pf{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class zy extends ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Px,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gy extends ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ya(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Wy(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Xy(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Sd(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function yg(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push(...o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class zo{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class jy extends zo{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bh,endingEnd:Bh}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case kh:s=e,a=2*t-i;break;case Hh:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case kh:o=e,l=2*i-t;break;case Hh:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,_=(i-t)/(r-t),x=_*_,m=x*_,d=-h*m+2*h*x-h*_,y=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*_+1,S=(-1-p)*m+(1.5+p)*x+.5*_,v=p*m-p*x;for(let L=0;L!==a;++L)s[L]=d*o[u+L]+y*o[c+L]+S*o[l+L]+v*o[f+L];return s}}class $y extends zo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),f=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*f+o[l+h]*u;return s}}class Yy extends zo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class ei{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ya(t,this.TimeBufferType),this.values=ya(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ya(e.times,Array),values:ya(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Yy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $y(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new jy(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case wo:t=this.InterpolantFactoryMethodDiscrete;break;case Ro:t=this.InterpolantFactoryMethodLinear;break;case $l:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wo;case this.InterpolantFactoryMethodLinear:return Ro;case this.InterpolantFactoryMethodSmooth:return $l}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&Wy(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===$l,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const f=a*i,h=f-i,p=f+i;for(let _=0;_!==i;++_){const x=t[f+_];if(x!==t[h+_]||x!==t[p+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*i,h=o*i;for(let p=0;p!==i;++p)t[h+p]=t[f+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}ei.prototype.ValueTypeName="";ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=Ro;class Os extends ei{constructor(e,t,i){super(e,t,i)}}Os.prototype.ValueTypeName="bool";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=wo;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;class Sg extends ei{constructor(e,t,i,r){super(e,t,i,r)}}Sg.prototype.ValueTypeName="color";class Cs extends ei{constructor(e,t,i,r){super(e,t,i,r)}}Cs.prototype.ValueTypeName="number";class qy extends zo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)ur.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Ls extends ei{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new qy(this.times,this.values,this.getValueSize(),e)}}Ls.prototype.ValueTypeName="quaternion";Ls.prototype.InterpolantFactoryMethodSmooth=void 0;class Fs extends ei{constructor(e,t,i){super(e,t,i)}}Fs.prototype.ValueTypeName="string";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=wo;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;class Is extends ei{constructor(e,t,i,r){super(e,t,i,r)}}Is.prototype.ValueTypeName="vector";class Ky{constructor(e="",t=-1,i=[],r=Lx){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Jn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(Zy(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(ei.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=Xy(l);l=Sd(l,1,u),c=Sd(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Cs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let h=r[f];h||(r[f]=h=[]),h.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(f,h,p,_,x){if(p.length!==0){const m=[],d=[];yg(p,m,d,_),m.length!==0&&x.push(new f(h,m,d))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const p={};let _;for(_=0;_<h.length;_++)if(h[_].morphTargets)for(let x=0;x<h[_].morphTargets.length;x++)p[h[_].morphTargets[x]]=-1;for(const x in p){const m=[],d=[];for(let y=0;y!==h[_].morphTargets.length;++y){const S=h[_];m.push(S.time),d.push(S.morphTarget===x?1:0)}r.push(new Cs(".morphTargetInfluence["+x+"]",m,d))}l=p.length*o}else{const p=".bones["+t[f].name+"]";i(Is,p+".position",h,"pos",r),i(Ls,p+".quaternion",h,"rot",r),i(Is,p+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Jy(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Cs;case"vector":case"vector2":case"vector3":case"vector4":return Is;case"color":return Sg;case"quaternion":return Ls;case"bool":case"boolean":return Os;case"string":return Fs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Zy(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Jy(n.type);if(n.times===void 0){const t=[],i=[];yg(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const sr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Qy{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const eS=new Qy;class Bs{constructor(e){this.manager=e!==void 0?e:eS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Bs.DEFAULT_MATERIAL_NAME="__DEFAULT";const bi={};class tS extends Error{constructor(e,t){super(e),this.response=t}}class Mg extends Bs{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=sr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(bi[e]!==void 0){bi[e].push({onLoad:t,onProgress:i,onError:r});return}bi[e]=[],bi[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=bi[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=h?parseInt(h):0,_=p!==0;let x=0;const m=new ReadableStream({start(d){y();function y(){f.read().then(({done:S,value:v})=>{if(S)d.close();else{x+=v.byteLength;const L=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:p});for(let I=0,R=u.length;I<R;I++){const D=u[I];D.onProgress&&D.onProgress(L)}d.enqueue(v),y()}},S=>{d.error(S)})}}});return new Response(m)}else throw new tS(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{sr.add(e,c);const u=bi[e];delete bi[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=bi[e];if(u===void 0)throw this.manager.itemError(e),c;delete bi[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class nS extends Bs{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=sr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Co("img");function l(){u(),sr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Go extends Bs{constructor(e){super(e)}load(e,t,i,r){const s=new Xt,o=new nS(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Df extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const xc=new Ke,Md=new z,Ed=new z;class Nf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cf,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Md.setFromMatrixPosition(e.matrixWorld),t.position.copy(Md),Ed.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ed),t.updateMatrixWorld(),xc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class iS extends Nf{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=ws*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class rS extends Df{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new iS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Td=new Ke,Js=new z,yc=new z;class sS extends Nf{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new He(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Js.setFromMatrixPosition(e.matrixWorld),i.position.copy(Js),yc.copy(i.position),yc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(yc),i.updateMatrixWorld(),r.makeTranslation(-Js.x,-Js.y,-Js.z),Td.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Td)}}class oS extends Df{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new sS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Uf extends dg{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class aS extends Nf{constructor(){super(new Uf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lS extends Df{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new aS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class mo{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Sc=new WeakMap;class cS extends Bs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=sr.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{if(Sc.has(o)===!0)r&&r(Sc.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return sr.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),Sc.set(l,c),sr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});sr.add(e,l),s.manager.itemStart(e)}}class uS extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Of="\\[\\]\\.:\\/",fS=new RegExp("["+Of+"]","g"),Ff="[^"+Of+"]",hS="[^"+Of.replace("\\.","")+"]",dS=/((?:WC+[\/:])*)/.source.replace("WC",Ff),pS=/(WCOD+)?/.source.replace("WCOD",hS),mS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ff),gS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ff),_S=new RegExp("^"+dS+pS+mS+gS+"$"),vS=["material","materials","bones","map"];class xS{constructor(e,t,i){const r=i||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class xt{constructor(e,t,i){this.path=t,this.parsedPath=i||xt.parseTrackName(t),this.node=xt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new xt.Composite(e,t,i):new xt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(fS,"")}static parseTrackName(e){const t=_S.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);vS.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=xt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}xt.Composite=xS;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function bd(n,e,t,i){const r=yS(i);switch(t){case Qm:return n*e;case xf:return n*e/r.components*r.byteLength;case yf:return n*e/r.components*r.byteLength;case tg:return n*e*2/r.components*r.byteLength;case Sf:return n*e*2/r.components*r.byteLength;case eg:return n*e*3/r.components*r.byteLength;case On:return n*e*4/r.components*r.byteLength;case Mf:return n*e*4/r.components*r.byteLength;case Ua:case Oa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Fa:case Ba:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case au:case cu:return Math.max(n,16)*Math.max(e,8)/4;case ou:case lu:return Math.max(n,8)*Math.max(e,8)/2;case uu:case fu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case hu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case du:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case pu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case mu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case gu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case _u:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case vu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case xu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case yu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Su:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Mu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Eu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Tu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case bu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Au:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ka:case wu:case Ru:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ng:case Cu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Lu:case Iu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yS(n){switch(n){case hi:case Km:return{byteLength:1,components:1};case Eo:case Jm:case Ho:return{byteLength:2,components:1};case _f:case vf:return{byteLength:2,components:4};case Br:case gf:case Yn:return{byteLength:4,components:1};case Zm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Eg(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function SS(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){const _=f[h],x=f[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++h,f[h]=x)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){const x=f[p];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var MS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ES=`#ifdef USE_ALPHAHASH
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
#endif`,TS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,RS=`#ifdef USE_AOMAP
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
#endif`,CS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,LS=`#ifdef USE_BATCHING
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
#endif`,IS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,US=`#ifdef USE_IRIDESCENCE
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
#endif`,OS=`#ifdef USE_BUMPMAP
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
#endif`,FS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,BS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,GS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,WS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,XS=`#define PI 3.141592653589793
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
} // validated`,jS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$S=`vec3 transformedNormal = objectNormal;
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
#endif`,YS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,KS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ZS="gl_FragColor = linearToOutputTexel( gl_FragColor );",QS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eM=`#ifdef USE_ENVMAP
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
#endif`,tM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nM=`#ifdef USE_ENVMAP
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
#endif`,iM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rM=`#ifdef USE_ENVMAP
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
#endif`,sM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cM=`#ifdef USE_GRADIENTMAP
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
}`,uM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dM=`uniform bool receiveShadow;
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
#endif`,pM=`#ifdef USE_ENVMAP
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
#endif`,mM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_M=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xM=`PhysicalMaterial material;
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
#endif`,yM=`struct PhysicalMaterial {
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
}`,SM=`
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
#endif`,MM=`#if defined( RE_IndirectDiffuse )
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
#endif`,EM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,TM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,LM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,IM=`#if defined( USE_POINTS_UV )
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
#endif`,PM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,DM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,UM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,OM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FM=`#ifdef USE_MORPHTARGETS
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
#endif`,BM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,HM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,VM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WM=`#ifdef USE_NORMALMAP
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
#endif`,XM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$M=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,JM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ZM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oE=`float getShadowMask() {
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
}`,aE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lE=`#ifdef USE_SKINNING
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
#endif`,cE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uE=`#ifdef USE_SKINNING
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
#endif`,fE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mE=`#ifdef USE_TRANSMISSION
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
#endif`,gE=`#ifdef USE_TRANSMISSION
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
#endif`,_E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ME=`uniform sampler2D t2D;
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
}`,EE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wE=`#include <common>
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
}`,RE=`#if DEPTH_PACKING == 3200
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
}`,CE=`#define DISTANCE
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
}`,LE=`#define DISTANCE
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
}`,IE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DE=`uniform float scale;
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
}`,NE=`uniform vec3 diffuse;
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
}`,UE=`#include <common>
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
}`,OE=`uniform vec3 diffuse;
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
}`,FE=`#define LAMBERT
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
}`,BE=`#define LAMBERT
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
}`,kE=`#define MATCAP
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
}`,HE=`#define MATCAP
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
}`,VE=`#define NORMAL
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
}`,zE=`#define NORMAL
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
}`,GE=`#define PHONG
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
}`,WE=`#define PHONG
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
}`,XE=`#define STANDARD
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
}`,jE=`#define STANDARD
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
}`,$E=`#define TOON
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
}`,YE=`#define TOON
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
}`,qE=`uniform float size;
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
}`,KE=`uniform vec3 diffuse;
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
}`,JE=`#include <common>
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
}`,ZE=`uniform vec3 color;
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
}`,QE=`uniform float rotation;
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
}`,eT=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:MS,alphahash_pars_fragment:ES,alphamap_fragment:TS,alphamap_pars_fragment:bS,alphatest_fragment:AS,alphatest_pars_fragment:wS,aomap_fragment:RS,aomap_pars_fragment:CS,batching_pars_vertex:LS,batching_vertex:IS,begin_vertex:PS,beginnormal_vertex:DS,bsdfs:NS,iridescence_fragment:US,bumpmap_pars_fragment:OS,clipping_planes_fragment:FS,clipping_planes_pars_fragment:BS,clipping_planes_pars_vertex:kS,clipping_planes_vertex:HS,color_fragment:VS,color_pars_fragment:zS,color_pars_vertex:GS,color_vertex:WS,common:XS,cube_uv_reflection_fragment:jS,defaultnormal_vertex:$S,displacementmap_pars_vertex:YS,displacementmap_vertex:qS,emissivemap_fragment:KS,emissivemap_pars_fragment:JS,colorspace_fragment:ZS,colorspace_pars_fragment:QS,envmap_fragment:eM,envmap_common_pars_fragment:tM,envmap_pars_fragment:nM,envmap_pars_vertex:iM,envmap_physical_pars_fragment:pM,envmap_vertex:rM,fog_vertex:sM,fog_pars_vertex:oM,fog_fragment:aM,fog_pars_fragment:lM,gradientmap_pars_fragment:cM,lightmap_pars_fragment:uM,lights_lambert_fragment:fM,lights_lambert_pars_fragment:hM,lights_pars_begin:dM,lights_toon_fragment:mM,lights_toon_pars_fragment:gM,lights_phong_fragment:_M,lights_phong_pars_fragment:vM,lights_physical_fragment:xM,lights_physical_pars_fragment:yM,lights_fragment_begin:SM,lights_fragment_maps:MM,lights_fragment_end:EM,logdepthbuf_fragment:TM,logdepthbuf_pars_fragment:bM,logdepthbuf_pars_vertex:AM,logdepthbuf_vertex:wM,map_fragment:RM,map_pars_fragment:CM,map_particle_fragment:LM,map_particle_pars_fragment:IM,metalnessmap_fragment:PM,metalnessmap_pars_fragment:DM,morphinstance_vertex:NM,morphcolor_vertex:UM,morphnormal_vertex:OM,morphtarget_pars_vertex:FM,morphtarget_vertex:BM,normal_fragment_begin:kM,normal_fragment_maps:HM,normal_pars_fragment:VM,normal_pars_vertex:zM,normal_vertex:GM,normalmap_pars_fragment:WM,clearcoat_normal_fragment_begin:XM,clearcoat_normal_fragment_maps:jM,clearcoat_pars_fragment:$M,iridescence_pars_fragment:YM,opaque_fragment:qM,packing:KM,premultiplied_alpha_fragment:JM,project_vertex:ZM,dithering_fragment:QM,dithering_pars_fragment:eE,roughnessmap_fragment:tE,roughnessmap_pars_fragment:nE,shadowmap_pars_fragment:iE,shadowmap_pars_vertex:rE,shadowmap_vertex:sE,shadowmask_pars_fragment:oE,skinbase_vertex:aE,skinning_pars_vertex:lE,skinning_vertex:cE,skinnormal_vertex:uE,specularmap_fragment:fE,specularmap_pars_fragment:hE,tonemapping_fragment:dE,tonemapping_pars_fragment:pE,transmission_fragment:mE,transmission_pars_fragment:gE,uv_pars_fragment:_E,uv_pars_vertex:vE,uv_vertex:xE,worldpos_vertex:yE,background_vert:SE,background_frag:ME,backgroundCube_vert:EE,backgroundCube_frag:TE,cube_vert:bE,cube_frag:AE,depth_vert:wE,depth_frag:RE,distanceRGBA_vert:CE,distanceRGBA_frag:LE,equirect_vert:IE,equirect_frag:PE,linedashed_vert:DE,linedashed_frag:NE,meshbasic_vert:UE,meshbasic_frag:OE,meshlambert_vert:FE,meshlambert_frag:BE,meshmatcap_vert:kE,meshmatcap_frag:HE,meshnormal_vert:VE,meshnormal_frag:zE,meshphong_vert:GE,meshphong_frag:WE,meshphysical_vert:XE,meshphysical_frag:jE,meshtoon_vert:$E,meshtoon_frag:YE,points_vert:qE,points_frag:KE,shadow_vert:JE,shadow_frag:ZE,sprite_vert:QE,sprite_frag:eT},xe={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},oi={basic:{uniforms:ln([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:ln([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new We(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:ln([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:ln([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:ln([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new We(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:ln([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:ln([xe.points,xe.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:ln([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:ln([xe.common,xe.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:ln([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:ln([xe.sprite,xe.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:ln([xe.common,xe.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:ln([xe.lights,xe.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};oi.physical={uniforms:ln([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Sa={r:0,b:0,g:0},Er=new Qn,tT=new Ke;function nT(n,e,t,i,r,s,o){const a=new We(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function _(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?t:e).get(v)),v}function x(S){let v=!1;const L=_(S);L===null?d(a,l):L&&L.isColor&&(d(L,1),v=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,v){const L=_(v);L&&(L.isCubeTexture||L.mapping===Ll)?(u===void 0&&(u=new vn(new Vo(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:Rs(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Er.copy(v.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(tT.makeRotationFromEuler(Er)),u.material.toneMapped=at.getTransfer(L.colorSpace)!==Mt,(f!==L||h!==L.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=L,h=L.version,p=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new vn(new Us(2,2),new di({name:"BackgroundMaterial",uniforms:Rs(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=at.getTransfer(L.colorSpace)!==Mt,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(f!==L||h!==L.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=L,h=L.version,p=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function d(S,v){S.getRGB(Sa,hg(n)),i.buffers.color.setClear(Sa.r,Sa.g,Sa.b,v,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),l=v,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,d(a,l)},render:x,addToRenderList:m,dispose:y}}function iT(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(M,F,Y,$,ie){let G=!1;const B=f($,Y,F);s!==B&&(s=B,c(s.object)),G=p(M,$,Y,ie),G&&_(M,$,Y,ie),ie!==null&&e.update(ie,n.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,v(M,F,Y,$),ie!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function f(M,F,Y){const $=Y.wireframe===!0;let ie=i[M.id];ie===void 0&&(ie={},i[M.id]=ie);let G=ie[F.id];G===void 0&&(G={},ie[F.id]=G);let B=G[$];return B===void 0&&(B=h(l()),G[$]=B),B}function h(M){const F=[],Y=[],$=[];for(let ie=0;ie<t;ie++)F[ie]=0,Y[ie]=0,$[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Y,attributeDivisors:$,object:M,attributes:{},index:null}}function p(M,F,Y,$){const ie=s.attributes,G=F.attributes;let B=0;const q=Y.getAttributes();for(const H in q)if(q[H].location>=0){const pe=ie[H];let Ae=G[H];if(Ae===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(Ae=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(Ae=M.instanceColor)),pe===void 0||pe.attribute!==Ae||Ae&&pe.data!==Ae.data)return!0;B++}return s.attributesNum!==B||s.index!==$}function _(M,F,Y,$){const ie={},G=F.attributes;let B=0;const q=Y.getAttributes();for(const H in q)if(q[H].location>=0){let pe=G[H];pe===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor));const Ae={};Ae.attribute=pe,pe&&pe.data&&(Ae.data=pe.data),ie[H]=Ae,B++}s.attributes=ie,s.attributesNum=B,s.index=$}function x(){const M=s.newAttributes;for(let F=0,Y=M.length;F<Y;F++)M[F]=0}function m(M){d(M,0)}function d(M,F){const Y=s.newAttributes,$=s.enabledAttributes,ie=s.attributeDivisors;Y[M]=1,$[M]===0&&(n.enableVertexAttribArray(M),$[M]=1),ie[M]!==F&&(n.vertexAttribDivisor(M,F),ie[M]=F)}function y(){const M=s.newAttributes,F=s.enabledAttributes;for(let Y=0,$=F.length;Y<$;Y++)F[Y]!==M[Y]&&(n.disableVertexAttribArray(Y),F[Y]=0)}function S(M,F,Y,$,ie,G,B){B===!0?n.vertexAttribIPointer(M,F,Y,ie,G):n.vertexAttribPointer(M,F,Y,$,ie,G)}function v(M,F,Y,$){x();const ie=$.attributes,G=Y.getAttributes(),B=F.defaultAttributeValues;for(const q in G){const H=G[q];if(H.location>=0){let le=ie[q];if(le===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(le=M.instanceColor)),le!==void 0){const pe=le.normalized,Ae=le.itemSize,Be=e.get(le);if(Be===void 0)continue;const ot=Be.buffer,re=Be.type,me=Be.bytesPerElement,Re=re===n.INT||re===n.UNSIGNED_INT||le.gpuType===gf;if(le.isInterleavedBufferAttribute){const ge=le.data,Le=ge.stride,Qe=le.offset;if(ge.isInstancedInterleavedBuffer){for(let Oe=0;Oe<H.locationSize;Oe++)d(H.location+Oe,ge.meshPerAttribute);M.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Oe=0;Oe<H.locationSize;Oe++)m(H.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,ot);for(let Oe=0;Oe<H.locationSize;Oe++)S(H.location+Oe,Ae/H.locationSize,re,pe,Le*me,(Qe+Ae/H.locationSize*Oe)*me,Re)}else{if(le.isInstancedBufferAttribute){for(let ge=0;ge<H.locationSize;ge++)d(H.location+ge,le.meshPerAttribute);M.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ge=0;ge<H.locationSize;ge++)m(H.location+ge);n.bindBuffer(n.ARRAY_BUFFER,ot);for(let ge=0;ge<H.locationSize;ge++)S(H.location+ge,Ae/H.locationSize,re,pe,Ae*me,Ae/H.locationSize*ge*me,Re)}}else if(B!==void 0){const pe=B[q];if(pe!==void 0)switch(pe.length){case 2:n.vertexAttrib2fv(H.location,pe);break;case 3:n.vertexAttrib3fv(H.location,pe);break;case 4:n.vertexAttrib4fv(H.location,pe);break;default:n.vertexAttrib1fv(H.location,pe)}}}}y()}function L(){D();for(const M in i){const F=i[M];for(const Y in F){const $=F[Y];for(const ie in $)u($[ie].object),delete $[ie];delete F[Y]}delete i[M]}}function I(M){if(i[M.id]===void 0)return;const F=i[M.id];for(const Y in F){const $=F[Y];for(const ie in $)u($[ie].object),delete $[ie];delete F[Y]}delete i[M.id]}function R(M){for(const F in i){const Y=i[F];if(Y[M.id]===void 0)continue;const $=Y[M.id];for(const ie in $)u($[ie].object),delete $[ie];delete Y[M.id]}}function D(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:I,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function rT(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];t.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let _=0;for(let x=0;x<f;x++)_+=u[x]*h[x];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function sT(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==On&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const D=R===Ho&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==hi&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Yn&&!D)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=_>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:L,maxSamples:I}}function oT(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new wr,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const y=s?0:i,S=y*4;let v=d.clippingState||null;l.value=v,v=u(_,h,S,p);for(let L=0;L!==S;++L)v[L]=t[L];d.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,_){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const d=p+x*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let S=0,v=p;S!==x;++S,v+=4)o.copy(f[S]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function aT(n){let e=new WeakMap;function t(o,a){return a===ru?o.mapping=bs:a===su&&(o.mapping=As),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ru||a===su)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ly(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const cs=4,Ad=[.125,.215,.35,.446,.526,.582],Ir=20,Mc=new Uf,wd=new We;let Ec=null,Tc=0,bc=0,Ac=!1;const Rr=(1+Math.sqrt(5))/2,rs=1/Rr,Rd=[new z(-Rr,rs,0),new z(Rr,rs,0),new z(-rs,0,Rr),new z(rs,0,Rr),new z(0,Rr,-rs),new z(0,Rr,rs),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],lT=new z;class Cd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=lT}=s;Ec=this._renderer.getRenderTarget(),Tc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),Ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Id(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ec,Tc,bc),this._renderer.xr.enabled=Ac,e.scissorTest=!1,Ma(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bs||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ec=this._renderer.getRenderTarget(),Tc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),Ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Ho,format:On,colorSpace:pn,depthBuffer:!1},r=Ld(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ld(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cT(s)),this._blurMaterial=uT(s,e,t)}return r}_compileMaterial(e){const t=new vn(this._lodPlanes[0],e);this._renderer.compile(t,Mc)}_sceneToCubeUV(e,t,i,r,s){const l=new tn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(wd),f.toneMapping=lr,f.autoClear=!1;const _=new Pr({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),x=new vn(new Vo,_);let m=!1;const d=e.background;d?d.isColor&&(_.color.copy(d),e.background=null,m=!0):(_.color.copy(wd),m=!0);for(let y=0;y<6;y++){const S=y%3;S===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):S===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const v=this._cubeSize;Ma(r,S*v,y>2?v:0,v,v),f.setRenderTarget(r),m&&f.render(x,l),f.render(e,l)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===bs||e.mapping===As;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Id());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new vn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ma(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Mc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Rd[(r-s-1)%Rd.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new vn(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ir-1),x=s/_,m=isFinite(s)?1+Math.floor(u*x):Ir;m>Ir&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ir}`);const d=[];let y=0;for(let R=0;R<Ir;++R){const D=R/x,E=Math.exp(-D*D/2);d.push(E),R===0?y+=E:R<m&&(y+=2*E)}for(let R=0;R<d.length;R++)d[R]=d[R]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=_,h.mipInt.value=S-i;const v=this._sizeLods[r],L=3*v*(r>S-cs?r-S+cs:0),I=4*(this._cubeSize-v);Ma(t,L,I,3*v,2*v),l.setRenderTarget(t),l.render(f,Mc)}}function cT(n){const e=[],t=[],i=[];let r=n;const s=n-cs+1+Ad.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-cs?l=Ad[o-n+cs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,x=3,m=2,d=1,y=new Float32Array(x*_*p),S=new Float32Array(m*_*p),v=new Float32Array(d*_*p);for(let I=0;I<p;I++){const R=I%3*2/3-1,D=I>2?0:-1,E=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];y.set(E,x*_*I),S.set(h,m*_*I);const M=[I,I,I,I,I,I];v.set(M,d*_*I)}const L=new Cn;L.setAttribute("position",new hn(y,x)),L.setAttribute("uv",new hn(S,m)),L.setAttribute("faceIndex",new hn(v,d)),e.push(L),r>cs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ld(n,e,t){const i=new kr(n,e,t);return i.texture.mapping=Ll,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ma(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function uT(n,e,t){const i=new Float32Array(Ir),r=new z(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bf(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Id(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bf(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Pd(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Bf(){return`

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
	`}function fT(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ru||l===su,u=l===bs||l===As;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Cd(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Cd(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function hT(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&xs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function dT(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,_=f.attributes.position;let x=0;if(p!==null){const y=p.array;x=p.version;for(let S=0,v=y.length;S<v;S+=3){const L=y[S+0],I=y[S+1],R=y[S+2];h.push(L,I,I,R,R,L)}}else if(_!==void 0){const y=_.array;x=_.version;for(let S=0,v=y.length/3-1;S<v;S+=3){const L=S+0,I=S+1,R=S+2;h.push(L,I,I,R,R,L)}}else return;const m=new(og(h)?fg:ug)(h,1);m.version=x;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function pT(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*o),t.update(p,i,1)}function c(h,p,_){_!==0&&(n.drawElementsInstanced(i,p,s,h*o,_),t.update(p,i,_))}function u(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];t.update(m,i,1)}function f(h,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,x,0,_);let d=0;for(let y=0;y<_;y++)d+=p[y]*x[y];t.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function mT(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function gT(n,e,t){const i=new WeakMap,r=new ut;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let M=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let v=0;_===!0&&(v=1),x===!0&&(v=2),m===!0&&(v=3);let L=a.attributes.position.count*v,I=1;L>e.maxTextureSize&&(I=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const R=new Float32Array(L*I*4*f),D=new ag(R,L,I,f);D.type=Yn,D.needsUpdate=!0;const E=v*4;for(let F=0;F<f;F++){const Y=d[F],$=y[F],ie=S[F],G=L*I*4*F;for(let B=0;B<Y.count;B++){const q=B*E;_===!0&&(r.fromBufferAttribute(Y,B),R[G+q+0]=r.x,R[G+q+1]=r.y,R[G+q+2]=r.z,R[G+q+3]=0),x===!0&&(r.fromBufferAttribute($,B),R[G+q+4]=r.x,R[G+q+5]=r.y,R[G+q+6]=r.z,R[G+q+7]=0),m===!0&&(r.fromBufferAttribute(ie,B),R[G+q+8]=r.x,R[G+q+9]=r.y,R[G+q+10]=r.z,R[G+q+11]=ie.itemSize===4?r.w:1)}}h={count:f,texture:D,size:new He(L,I)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function _T(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Tg=new Xt,Dd=new xg(1,1),bg=new ag,Ag=new dy,wg=new pg,Nd=[],Ud=[],Od=new Float32Array(16),Fd=new Float32Array(9),Bd=new Float32Array(4);function ks(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Nd[r];if(s===void 0&&(s=new Float32Array(r),Nd[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Pl(n,e){let t=Ud[e];t===void 0&&(t=new Int32Array(e),Ud[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function vT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function xT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2fv(this.addr,e),zt(t,e)}}function yT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;n.uniform3fv(this.addr,e),zt(t,e)}}function ST(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4fv(this.addr,e),zt(t,e)}}function MT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Vt(t,i))return;Bd.set(i),n.uniformMatrix2fv(this.addr,!1,Bd),zt(t,i)}}function ET(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Vt(t,i))return;Fd.set(i),n.uniformMatrix3fv(this.addr,!1,Fd),zt(t,i)}}function TT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Vt(t,i))return;Od.set(i),n.uniformMatrix4fv(this.addr,!1,Od),zt(t,i)}}function bT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function AT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2iv(this.addr,e),zt(t,e)}}function wT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3iv(this.addr,e),zt(t,e)}}function RT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4iv(this.addr,e),zt(t,e)}}function CT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function LT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2uiv(this.addr,e),zt(t,e)}}function IT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3uiv(this.addr,e),zt(t,e)}}function PT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4uiv(this.addr,e),zt(t,e)}}function DT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Dd.compareFunction=sg,s=Dd):s=Tg,t.setTexture2D(e||s,r)}function NT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ag,r)}function UT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||wg,r)}function OT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||bg,r)}function FT(n){switch(n){case 5126:return vT;case 35664:return xT;case 35665:return yT;case 35666:return ST;case 35674:return MT;case 35675:return ET;case 35676:return TT;case 5124:case 35670:return bT;case 35667:case 35671:return AT;case 35668:case 35672:return wT;case 35669:case 35673:return RT;case 5125:return CT;case 36294:return LT;case 36295:return IT;case 36296:return PT;case 35678:case 36198:case 36298:case 36306:case 35682:return DT;case 35679:case 36299:case 36307:return NT;case 35680:case 36300:case 36308:case 36293:return UT;case 36289:case 36303:case 36311:case 36292:return OT}}function BT(n,e){n.uniform1fv(this.addr,e)}function kT(n,e){const t=ks(e,this.size,2);n.uniform2fv(this.addr,t)}function HT(n,e){const t=ks(e,this.size,3);n.uniform3fv(this.addr,t)}function VT(n,e){const t=ks(e,this.size,4);n.uniform4fv(this.addr,t)}function zT(n,e){const t=ks(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function GT(n,e){const t=ks(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function WT(n,e){const t=ks(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function XT(n,e){n.uniform1iv(this.addr,e)}function jT(n,e){n.uniform2iv(this.addr,e)}function $T(n,e){n.uniform3iv(this.addr,e)}function YT(n,e){n.uniform4iv(this.addr,e)}function qT(n,e){n.uniform1uiv(this.addr,e)}function KT(n,e){n.uniform2uiv(this.addr,e)}function JT(n,e){n.uniform3uiv(this.addr,e)}function ZT(n,e){n.uniform4uiv(this.addr,e)}function QT(n,e,t){const i=this.cache,r=e.length,s=Pl(t,r);Vt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Tg,s[o])}function eb(n,e,t){const i=this.cache,r=e.length,s=Pl(t,r);Vt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ag,s[o])}function tb(n,e,t){const i=this.cache,r=e.length,s=Pl(t,r);Vt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||wg,s[o])}function nb(n,e,t){const i=this.cache,r=e.length,s=Pl(t,r);Vt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||bg,s[o])}function ib(n){switch(n){case 5126:return BT;case 35664:return kT;case 35665:return HT;case 35666:return VT;case 35674:return zT;case 35675:return GT;case 35676:return WT;case 5124:case 35670:return XT;case 35667:case 35671:return jT;case 35668:case 35672:return $T;case 35669:case 35673:return YT;case 5125:return qT;case 36294:return KT;case 36295:return JT;case 36296:return ZT;case 35678:case 36198:case 36298:case 36306:case 35682:return QT;case 35679:case 36299:case 36307:return eb;case 35680:case 36300:case 36308:case 36293:return tb;case 36289:case 36303:case 36311:case 36292:return nb}}class rb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=FT(t.type)}}class sb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ib(t.type)}}class ob{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const wc=/(\w+)(\])?(\[|\.)?/g;function kd(n,e){n.seq.push(e),n.map[e.id]=e}function ab(n,e,t){const i=n.name,r=i.length;for(wc.lastIndex=0;;){const s=wc.exec(i),o=wc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){kd(t,c===void 0?new rb(a,n,e):new sb(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new ob(a),kd(t,f)),t=f}}}class Va{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);ab(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Hd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const lb=37297;let cb=0;function ub(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Vd=new Je;function fb(n){at._getMatrix(Vd,at.workingColorSpace,n);const e=`mat3( ${Vd.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(n)){case al:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function zd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+ub(n.getShaderSource(e),o)}else return r}function hb(n,e){const t=fb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function db(n,e){let t;switch(e){case Mx:t="Linear";break;case Ex:t="Reinhard";break;case Tx:t="Cineon";break;case bx:t="ACESFilmic";break;case wx:t="AgX";break;case Rx:t="Neutral";break;case Ax:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ea=new z;function pb(){at.getLuminanceCoefficients(Ea);const n=Ea.x.toFixed(4),e=Ea.y.toFixed(4),t=Ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(so).join(`
`)}function gb(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function _b(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function so(n){return n!==""}function Gd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uu(n){return n.replace(vb,yb)}const xb=new Map;function yb(n,e){let t=Ze[e];if(t===void 0){const i=xb.get(e);if(i!==void 0)t=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Uu(t)}const Sb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xd(n){return n.replace(Sb,Mb)}function Mb(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function jd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Eb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===jm?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===tx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===wi&&(e="SHADOWMAP_TYPE_VSM"),e}function Tb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case bs:case As:e="ENVMAP_TYPE_CUBE";break;case Ll:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bb(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case As:e="ENVMAP_MODE_REFRACTION";break}return e}function Ab(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case $m:e="ENVMAP_BLENDING_MULTIPLY";break;case yx:e="ENVMAP_BLENDING_MIX";break;case Sx:e="ENVMAP_BLENDING_ADD";break}return e}function wb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Rb(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Eb(t),c=Tb(t),u=bb(t),f=Ab(t),h=wb(t),p=mb(t),_=gb(s),x=r.createProgram();let m,d,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(so).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(so).join(`
`),d.length>0&&(d+=`
`)):(m=[jd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),d=[jd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==lr?"#define TONE_MAPPING":"",t.toneMapping!==lr?Ze.tonemapping_pars_fragment:"",t.toneMapping!==lr?db("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,hb("linearToOutputTexel",t.outputColorSpace),pb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(so).join(`
`)),o=Uu(o),o=Gd(o,t),o=Wd(o,t),a=Uu(a),a=Gd(a,t),a=Wd(a,t),o=Xd(o),a=Xd(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const S=y+m+o,v=y+d+a,L=Hd(r,r.VERTEX_SHADER,S),I=Hd(r,r.FRAGMENT_SHADER,v);r.attachShader(x,L),r.attachShader(x,I),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(F){if(n.debug.checkShaderErrors){const Y=r.getProgramInfoLog(x).trim(),$=r.getShaderInfoLog(L).trim(),ie=r.getShaderInfoLog(I).trim();let G=!0,B=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,L,I);else{const q=zd(r,L,"vertex"),H=zd(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+Y+`
`+q+`
`+H)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):($===""||ie==="")&&(B=!1);B&&(F.diagnostics={runnable:G,programLog:Y,vertexShader:{log:$,prefix:m},fragmentShader:{log:ie,prefix:d}})}r.deleteShader(L),r.deleteShader(I),D=new Va(r,x),E=_b(r,x)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,lb)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cb++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=I,this}let Cb=0;class Lb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Ib(e),t.set(e,i)),i}}class Ib{constructor(e){this.id=Cb++,this.code=e,this.usedTimes=0}}function Pb(n,e,t,i,r,s,o){const a=new lg,l=new Lb,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,F,Y,$){const ie=Y.fog,G=$.geometry,B=E.isMeshStandardMaterial?Y.environment:null,q=(E.isMeshStandardMaterial?t:e).get(E.envMap||B),H=q&&q.mapping===Ll?q.image.height:null,le=_[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const pe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ae=pe!==void 0?pe.length:0;let Be=0;G.morphAttributes.position!==void 0&&(Be=1),G.morphAttributes.normal!==void 0&&(Be=2),G.morphAttributes.color!==void 0&&(Be=3);let ot,re,me,Re;if(le){const mt=oi[le];ot=mt.vertexShader,re=mt.fragmentShader}else ot=E.vertexShader,re=E.fragmentShader,l.update(E),me=l.getVertexShaderID(E),Re=l.getFragmentShaderID(E);const ge=n.getRenderTarget(),Le=n.state.buffers.depth.getReversed(),Qe=$.isInstancedMesh===!0,Oe=$.isBatchedMesh===!0,St=!!E.map,N=!!E.matcap,O=!!q,b=!!E.aoMap,se=!!E.lightMap,ee=!!E.bumpMap,te=!!E.normalMap,A=!!E.displacementMap,C=!!E.emissiveMap,U=!!E.metalnessMap,V=!!E.roughnessMap,fe=E.anisotropy>0,T=E.clearcoat>0,g=E.dispersion>0,P=E.iridescence>0,W=E.sheen>0,J=E.transmission>0,K=fe&&!!E.anisotropyMap,ve=T&&!!E.clearcoatMap,ce=T&&!!E.clearcoatNormalMap,ye=T&&!!E.clearcoatRoughnessMap,Ee=P&&!!E.iridescenceMap,ae=P&&!!E.iridescenceThicknessMap,Te=W&&!!E.sheenColorMap,Pe=W&&!!E.sheenRoughnessMap,De=!!E.specularMap,_e=!!E.specularColorMap,$e=!!E.specularIntensityMap,k=J&&!!E.transmissionMap,Se=J&&!!E.thicknessMap,ue=!!E.gradientMap,Ie=!!E.alphaMap,he=E.alphaTest>0,oe=!!E.alphaHash,Ne=!!E.extensions;let Ye=lr;E.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Ye=n.toneMapping);const Ct={shaderID:le,shaderType:E.type,shaderName:E.name,vertexShader:ot,fragmentShader:re,defines:E.defines,customVertexShaderID:me,customFragmentShaderID:Re,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Oe,batchingColor:Oe&&$._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&$.instanceColor!==null,instancingMorph:Qe&&$.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ge===null?n.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:pn,alphaToCoverage:!!E.alphaToCoverage,map:St,matcap:N,envMap:O,envMapMode:O&&q.mapping,envMapCubeUVHeight:H,aoMap:b,lightMap:se,bumpMap:ee,normalMap:te,displacementMap:h&&A,emissiveMap:C,normalMapObjectSpace:te&&E.normalMapType===Nx,normalMapTangentSpace:te&&E.normalMapType===rg,metalnessMap:U,roughnessMap:V,anisotropy:fe,anisotropyMap:K,clearcoat:T,clearcoatMap:ve,clearcoatNormalMap:ce,clearcoatRoughnessMap:ye,dispersion:g,iridescence:P,iridescenceMap:Ee,iridescenceThicknessMap:ae,sheen:W,sheenColorMap:Te,sheenRoughnessMap:Pe,specularMap:De,specularColorMap:_e,specularIntensityMap:$e,transmission:J,transmissionMap:k,thicknessMap:Se,gradientMap:ue,opaque:E.transparent===!1&&E.blending===vs&&E.alphaToCoverage===!1,alphaMap:Ie,alphaTest:he,alphaHash:oe,combine:E.combine,mapUv:St&&x(E.map.channel),aoMapUv:b&&x(E.aoMap.channel),lightMapUv:se&&x(E.lightMap.channel),bumpMapUv:ee&&x(E.bumpMap.channel),normalMapUv:te&&x(E.normalMap.channel),displacementMapUv:A&&x(E.displacementMap.channel),emissiveMapUv:C&&x(E.emissiveMap.channel),metalnessMapUv:U&&x(E.metalnessMap.channel),roughnessMapUv:V&&x(E.roughnessMap.channel),anisotropyMapUv:K&&x(E.anisotropyMap.channel),clearcoatMapUv:ve&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:ce&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&x(E.sheenRoughnessMap.channel),specularMapUv:De&&x(E.specularMap.channel),specularColorMapUv:_e&&x(E.specularColorMap.channel),specularIntensityMapUv:$e&&x(E.specularIntensityMap.channel),transmissionMapUv:k&&x(E.transmissionMap.channel),thicknessMapUv:Se&&x(E.thicknessMap.channel),alphaMapUv:Ie&&x(E.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(te||fe),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!G.attributes.uv&&(St||Ie),fog:!!ie,useFog:E.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Le,skinning:$.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Be,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ye,decodeVideoTexture:St&&E.map.isVideoTexture===!0&&at.getTransfer(E.map.colorSpace)===Mt,decodeVideoTextureEmissive:C&&E.emissiveMap.isVideoTexture===!0&&at.getTransfer(E.emissiveMap.colorSpace)===Mt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Xn,flipSided:E.side===xn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ne&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&E.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function d(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const F in E.defines)M.push(F),M.push(E.defines[F]);return E.isRawShaderMaterial===!1&&(y(M,E),S(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function y(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function S(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function v(E){const M=_[E.type];let F;if(M){const Y=oi[M];F=Ay.clone(Y.uniforms)}else F=E.uniforms;return F}function L(E,M){let F;for(let Y=0,$=u.length;Y<$;Y++){const ie=u[Y];if(ie.cacheKey===M){F=ie,++F.usedTimes;break}}return F===void 0&&(F=new Rb(n,M,E,s),u.push(F)),F}function I(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function R(E){l.remove(E)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:L,releaseProgram:I,releaseShaderCache:R,programs:u,dispose:D}}function Db(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Nb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function $d(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Yd(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,_,x,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:x,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=x,d.group=m),e++,d}function a(f,h,p,_,x,m){const d=o(f,h,p,_,x,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,_,x,m){const d=o(f,h,p,_,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||Nb),i.length>1&&i.sort(h||$d),r.length>1&&r.sort(h||$d)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Ub(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Yd,n.set(i,[o])):r>=s.length?(o=new Yd,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ob(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new We};break;case"SpotLight":t={position:new z,direction:new z,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function Fb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Bb=0;function kb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Hb(n){const e=new Ob,t=Fb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new Ke,o=new Ke;function a(c){let u=0,f=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,x=0,m=0,d=0,y=0,S=0,v=0,L=0,I=0,R=0;c.sort(kb);for(let E=0,M=c.length;E<M;E++){const F=c[E],Y=F.color,$=F.intensity,ie=F.distance,G=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)u+=Y.r*$,f+=Y.g*$,h+=Y.b*$;else if(F.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(F.sh.coefficients[B],$);R++}else if(F.isDirectionalLight){const B=e.get(F);if(B.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const q=F.shadow,H=t.get(F);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=G,i.directionalShadowMatrix[p]=F.shadow.matrix,y++}i.directional[p]=B,p++}else if(F.isSpotLight){const B=e.get(F);B.position.setFromMatrixPosition(F.matrixWorld),B.color.copy(Y).multiplyScalar($),B.distance=ie,B.coneCos=Math.cos(F.angle),B.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),B.decay=F.decay,i.spot[x]=B;const q=F.shadow;if(F.map&&(i.spotLightMap[L]=F.map,L++,q.updateMatrices(F),F.castShadow&&I++),i.spotLightMatrix[x]=q.matrix,F.castShadow){const H=t.get(F);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,i.spotShadow[x]=H,i.spotShadowMap[x]=G,v++}x++}else if(F.isRectAreaLight){const B=e.get(F);B.color.copy(Y).multiplyScalar($),B.halfWidth.set(F.width*.5,0,0),B.halfHeight.set(0,F.height*.5,0),i.rectArea[m]=B,m++}else if(F.isPointLight){const B=e.get(F);if(B.color.copy(F.color).multiplyScalar(F.intensity),B.distance=F.distance,B.decay=F.decay,F.castShadow){const q=F.shadow,H=t.get(F);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,H.shadowCameraNear=q.camera.near,H.shadowCameraFar=q.camera.far,i.pointShadow[_]=H,i.pointShadowMap[_]=G,i.pointShadowMatrix[_]=F.shadow.matrix,S++}i.point[_]=B,_++}else if(F.isHemisphereLight){const B=e.get(F);B.skyColor.copy(F.color).multiplyScalar($),B.groundColor.copy(F.groundColor).multiplyScalar($),i.hemi[d]=B,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const D=i.hash;(D.directionalLength!==p||D.pointLength!==_||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==d||D.numDirectionalShadows!==y||D.numPointShadows!==S||D.numSpotShadows!==v||D.numSpotMaps!==L||D.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=v+L-I,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=R,D.directionalLength=p,D.pointLength=_,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=d,D.numDirectionalShadows=y,D.numPointShadows=S,D.numSpotShadows=v,D.numSpotMaps=L,D.numLightProbes=R,i.version=Bb++)}function l(c,u){let f=0,h=0,p=0,_=0,x=0;const m=u.matrixWorldInverse;for(let d=0,y=c.length;d<y;d++){const S=c[d];if(S.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(S.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const v=i.rectArea[_];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const v=i.point[h];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),h++}else if(S.isHemisphereLight){const v=i.hemi[x];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function qd(n){const e=new Hb(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Vb(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new qd(n),e.set(r,[a])):s>=o.length?(a=new qd(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const zb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gb=`uniform sampler2D shadow_pass;
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
}`;function Wb(n,e,t){let i=new Cf;const r=new He,s=new He,o=new ut,a=new zy({depthPacking:Dx}),l=new Gy,c={},u=t.maxTextureSize,f={[Gi]:xn,[xn]:Gi,[Xn]:Xn},h=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:zb,fragmentShader:Gb}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Cn;_.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new vn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jm;let d=this.type;this.render=function(I,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const E=n.getRenderTarget(),M=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(ar),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const $=d!==wi&&this.type===wi,ie=d===wi&&this.type!==wi;for(let G=0,B=I.length;G<B;G++){const q=I[G],H=q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const le=H.getFrameExtents();if(r.multiply(le),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/le.x),r.x=s.x*le.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/le.y),r.y=s.y*le.y,H.mapSize.y=s.y)),H.map===null||$===!0||ie===!0){const Ae=this.type!==wi?{minFilter:fn,magFilter:fn}:{};H.map!==null&&H.map.dispose(),H.map=new kr(r.x,r.y,Ae),H.map.texture.name=q.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const pe=H.getViewportCount();for(let Ae=0;Ae<pe;Ae++){const Be=H.getViewport(Ae);o.set(s.x*Be.x,s.y*Be.y,s.x*Be.z,s.y*Be.w),Y.viewport(o),H.updateMatrices(q,Ae),i=H.getFrustum(),v(R,D,H.camera,q,this.type)}H.isPointLightShadow!==!0&&this.type===wi&&y(H,D),H.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(E,M,F)};function y(I,R){const D=e.update(x);h.defines.VSM_SAMPLES!==I.blurSamples&&(h.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new kr(r.x,r.y)),h.uniforms.shadow_pass.value=I.map.texture,h.uniforms.resolution.value=I.mapSize,h.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(R,null,D,h,x,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(R,null,D,p,x,null)}function S(I,R,D,E){let M=null;const F=D.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(F!==void 0)M=F;else if(M=D.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const Y=M.uuid,$=R.uuid;let ie=c[Y];ie===void 0&&(ie={},c[Y]=ie);let G=ie[$];G===void 0&&(G=M.clone(),ie[$]=G,R.addEventListener("dispose",L)),M=G}if(M.visible=R.visible,M.wireframe=R.wireframe,E===wi?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:f[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const Y=n.properties.get(M);Y.light=D}return M}function v(I,R,D,E,M){if(I.visible===!1)return;if(I.layers.test(R.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&M===wi)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,I.matrixWorld);const $=e.update(I),ie=I.material;if(Array.isArray(ie)){const G=$.groups;for(let B=0,q=G.length;B<q;B++){const H=G[B],le=ie[H.materialIndex];if(le&&le.visible){const pe=S(I,le,E,M);I.onBeforeShadow(n,I,R,D,$,pe,H),n.renderBufferDirect(D,null,$,pe,I,H),I.onAfterShadow(n,I,R,D,$,pe,H)}}}else if(ie.visible){const G=S(I,ie,E,M);I.onBeforeShadow(n,I,R,D,$,G,null),n.renderBufferDirect(D,null,$,G,I,null),I.onAfterShadow(n,I,R,D,$,G,null)}}const Y=I.children;for(let $=0,ie=Y.length;$<ie;$++)v(Y[$],R,D,E,M)}function L(I){I.target.removeEventListener("dispose",L);for(const D in c){const E=c[D],M=I.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const Xb={[Jc]:Zc,[Qc]:nu,[eu]:iu,[Ts]:tu,[Zc]:Jc,[nu]:Qc,[iu]:eu,[tu]:Ts};function jb(n,e){function t(){let k=!1;const Se=new ut;let ue=null;const Ie=new ut(0,0,0,0);return{setMask:function(he){ue!==he&&!k&&(n.colorMask(he,he,he,he),ue=he)},setLocked:function(he){k=he},setClear:function(he,oe,Ne,Ye,Ct){Ct===!0&&(he*=Ye,oe*=Ye,Ne*=Ye),Se.set(he,oe,Ne,Ye),Ie.equals(Se)===!1&&(n.clearColor(he,oe,Ne,Ye),Ie.copy(Se))},reset:function(){k=!1,ue=null,Ie.set(-1,0,0,0)}}}function i(){let k=!1,Se=!1,ue=null,Ie=null,he=null;return{setReversed:function(oe){if(Se!==oe){const Ne=e.get("EXT_clip_control");oe?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),Se=oe;const Ye=he;he=null,this.setClear(Ye)}},getReversed:function(){return Se},setTest:function(oe){oe?ge(n.DEPTH_TEST):Le(n.DEPTH_TEST)},setMask:function(oe){ue!==oe&&!k&&(n.depthMask(oe),ue=oe)},setFunc:function(oe){if(Se&&(oe=Xb[oe]),Ie!==oe){switch(oe){case Jc:n.depthFunc(n.NEVER);break;case Zc:n.depthFunc(n.ALWAYS);break;case Qc:n.depthFunc(n.LESS);break;case Ts:n.depthFunc(n.LEQUAL);break;case eu:n.depthFunc(n.EQUAL);break;case tu:n.depthFunc(n.GEQUAL);break;case nu:n.depthFunc(n.GREATER);break;case iu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ie=oe}},setLocked:function(oe){k=oe},setClear:function(oe){he!==oe&&(Se&&(oe=1-oe),n.clearDepth(oe),he=oe)},reset:function(){k=!1,ue=null,Ie=null,he=null,Se=!1}}}function r(){let k=!1,Se=null,ue=null,Ie=null,he=null,oe=null,Ne=null,Ye=null,Ct=null;return{setTest:function(mt){k||(mt?ge(n.STENCIL_TEST):Le(n.STENCIL_TEST))},setMask:function(mt){Se!==mt&&!k&&(n.stencilMask(mt),Se=mt)},setFunc:function(mt,Hn,gi){(ue!==mt||Ie!==Hn||he!==gi)&&(n.stencilFunc(mt,Hn,gi),ue=mt,Ie=Hn,he=gi)},setOp:function(mt,Hn,gi){(oe!==mt||Ne!==Hn||Ye!==gi)&&(n.stencilOp(mt,Hn,gi),oe=mt,Ne=Hn,Ye=gi)},setLocked:function(mt){k=mt},setClear:function(mt){Ct!==mt&&(n.clearStencil(mt),Ct=mt)},reset:function(){k=!1,Se=null,ue=null,Ie=null,he=null,oe=null,Ne=null,Ye=null,Ct=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],_=null,x=!1,m=null,d=null,y=null,S=null,v=null,L=null,I=null,R=new We(0,0,0),D=0,E=!1,M=null,F=null,Y=null,$=null,ie=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,q=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(H)[1]),B=q>=1):H.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),B=q>=2);let le=null,pe={};const Ae=n.getParameter(n.SCISSOR_BOX),Be=n.getParameter(n.VIEWPORT),ot=new ut().fromArray(Ae),re=new ut().fromArray(Be);function me(k,Se,ue,Ie){const he=new Uint8Array(4),oe=n.createTexture();n.bindTexture(k,oe),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ne=0;Ne<ue;Ne++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(Se,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(Se+Ne,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return oe}const Re={};Re[n.TEXTURE_2D]=me(n.TEXTURE_2D,n.TEXTURE_2D,1),Re[n.TEXTURE_CUBE_MAP]=me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[n.TEXTURE_2D_ARRAY]=me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Re[n.TEXTURE_3D]=me(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ge(n.DEPTH_TEST),o.setFunc(Ts),ee(!1),te(Dh),ge(n.CULL_FACE),b(ar);function ge(k){u[k]!==!0&&(n.enable(k),u[k]=!0)}function Le(k){u[k]!==!1&&(n.disable(k),u[k]=!1)}function Qe(k,Se){return f[k]!==Se?(n.bindFramebuffer(k,Se),f[k]=Se,k===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Se),k===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Se),!0):!1}function Oe(k,Se){let ue=p,Ie=!1;if(k){ue=h.get(Se),ue===void 0&&(ue=[],h.set(Se,ue));const he=k.textures;if(ue.length!==he.length||ue[0]!==n.COLOR_ATTACHMENT0){for(let oe=0,Ne=he.length;oe<Ne;oe++)ue[oe]=n.COLOR_ATTACHMENT0+oe;ue.length=he.length,Ie=!0}}else ue[0]!==n.BACK&&(ue[0]=n.BACK,Ie=!0);Ie&&n.drawBuffers(ue)}function St(k){return _!==k?(n.useProgram(k),_=k,!0):!1}const N={[Lr]:n.FUNC_ADD,[ix]:n.FUNC_SUBTRACT,[rx]:n.FUNC_REVERSE_SUBTRACT};N[sx]=n.MIN,N[ox]=n.MAX;const O={[ax]:n.ZERO,[lx]:n.ONE,[cx]:n.SRC_COLOR,[qc]:n.SRC_ALPHA,[mx]:n.SRC_ALPHA_SATURATE,[dx]:n.DST_COLOR,[fx]:n.DST_ALPHA,[ux]:n.ONE_MINUS_SRC_COLOR,[Kc]:n.ONE_MINUS_SRC_ALPHA,[px]:n.ONE_MINUS_DST_COLOR,[hx]:n.ONE_MINUS_DST_ALPHA,[gx]:n.CONSTANT_COLOR,[_x]:n.ONE_MINUS_CONSTANT_COLOR,[vx]:n.CONSTANT_ALPHA,[xx]:n.ONE_MINUS_CONSTANT_ALPHA};function b(k,Se,ue,Ie,he,oe,Ne,Ye,Ct,mt){if(k===ar){x===!0&&(Le(n.BLEND),x=!1);return}if(x===!1&&(ge(n.BLEND),x=!0),k!==nx){if(k!==m||mt!==E){if((d!==Lr||v!==Lr)&&(n.blendEquation(n.FUNC_ADD),d=Lr,v=Lr),mt)switch(k){case vs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nh:n.blendFunc(n.ONE,n.ONE);break;case Uh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Oh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case vs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Uh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Oh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}y=null,S=null,L=null,I=null,R.set(0,0,0),D=0,m=k,E=mt}return}he=he||Se,oe=oe||ue,Ne=Ne||Ie,(Se!==d||he!==v)&&(n.blendEquationSeparate(N[Se],N[he]),d=Se,v=he),(ue!==y||Ie!==S||oe!==L||Ne!==I)&&(n.blendFuncSeparate(O[ue],O[Ie],O[oe],O[Ne]),y=ue,S=Ie,L=oe,I=Ne),(Ye.equals(R)===!1||Ct!==D)&&(n.blendColor(Ye.r,Ye.g,Ye.b,Ct),R.copy(Ye),D=Ct),m=k,E=!1}function se(k,Se){k.side===Xn?Le(n.CULL_FACE):ge(n.CULL_FACE);let ue=k.side===xn;Se&&(ue=!ue),ee(ue),k.blending===vs&&k.transparent===!1?b(ar):b(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);const Ie=k.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),C(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):Le(n.SAMPLE_ALPHA_TO_COVERAGE)}function ee(k){M!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),M=k)}function te(k){k!==Q0?(ge(n.CULL_FACE),k!==F&&(k===Dh?n.cullFace(n.BACK):k===ex?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Le(n.CULL_FACE),F=k}function A(k){k!==Y&&(B&&n.lineWidth(k),Y=k)}function C(k,Se,ue){k?(ge(n.POLYGON_OFFSET_FILL),($!==Se||ie!==ue)&&(n.polygonOffset(Se,ue),$=Se,ie=ue)):Le(n.POLYGON_OFFSET_FILL)}function U(k){k?ge(n.SCISSOR_TEST):Le(n.SCISSOR_TEST)}function V(k){k===void 0&&(k=n.TEXTURE0+G-1),le!==k&&(n.activeTexture(k),le=k)}function fe(k,Se,ue){ue===void 0&&(le===null?ue=n.TEXTURE0+G-1:ue=le);let Ie=pe[ue];Ie===void 0&&(Ie={type:void 0,texture:void 0},pe[ue]=Ie),(Ie.type!==k||Ie.texture!==Se)&&(le!==ue&&(n.activeTexture(ue),le=ue),n.bindTexture(k,Se||Re[k]),Ie.type=k,Ie.texture=Se)}function T(){const k=pe[le];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function P(){try{n.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function W(){try{n.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function J(){try{n.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{n.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ce(){try{n.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ye(){try{n.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ee(){try{n.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ae(){try{n.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Te(k){ot.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),ot.copy(k))}function Pe(k){re.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),re.copy(k))}function De(k,Se){let ue=c.get(Se);ue===void 0&&(ue=new WeakMap,c.set(Se,ue));let Ie=ue.get(k);Ie===void 0&&(Ie=n.getUniformBlockIndex(Se,k.name),ue.set(k,Ie))}function _e(k,Se){const Ie=c.get(Se).get(k);l.get(Se)!==Ie&&(n.uniformBlockBinding(Se,Ie,k.__bindingPointIndex),l.set(Se,Ie))}function $e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},le=null,pe={},f={},h=new WeakMap,p=[],_=null,x=!1,m=null,d=null,y=null,S=null,v=null,L=null,I=null,R=new We(0,0,0),D=0,E=!1,M=null,F=null,Y=null,$=null,ie=null,ot.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ge,disable:Le,bindFramebuffer:Qe,drawBuffers:Oe,useProgram:St,setBlending:b,setMaterial:se,setFlipSided:ee,setCullFace:te,setLineWidth:A,setPolygonOffset:C,setScissorTest:U,activeTexture:V,bindTexture:fe,unbindTexture:T,compressedTexImage2D:g,compressedTexImage3D:P,texImage2D:Ee,texImage3D:ae,updateUBOMapping:De,uniformBlockBinding:_e,texStorage2D:ce,texStorage3D:ye,texSubImage2D:W,texSubImage3D:J,compressedTexSubImage2D:K,compressedTexSubImage3D:ve,scissor:Te,viewport:Pe,reset:$e}}function $b(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,g){return p?new OffscreenCanvas(T,g):Co("canvas")}function x(T,g,P){let W=1;const J=fe(T);if((J.width>P||J.height>P)&&(W=P/Math.max(J.width,J.height)),W<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const K=Math.floor(W*J.width),ve=Math.floor(W*J.height);f===void 0&&(f=_(K,ve));const ce=g?_(K,ve):f;return ce.width=K,ce.height=ve,ce.getContext("2d").drawImage(T,0,0,K,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+K+"x"+ve+")."),ce}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){n.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(T,g,P,W,J=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=g;if(g===n.RED&&(P===n.FLOAT&&(K=n.R32F),P===n.HALF_FLOAT&&(K=n.R16F),P===n.UNSIGNED_BYTE&&(K=n.R8)),g===n.RED_INTEGER&&(P===n.UNSIGNED_BYTE&&(K=n.R8UI),P===n.UNSIGNED_SHORT&&(K=n.R16UI),P===n.UNSIGNED_INT&&(K=n.R32UI),P===n.BYTE&&(K=n.R8I),P===n.SHORT&&(K=n.R16I),P===n.INT&&(K=n.R32I)),g===n.RG&&(P===n.FLOAT&&(K=n.RG32F),P===n.HALF_FLOAT&&(K=n.RG16F),P===n.UNSIGNED_BYTE&&(K=n.RG8)),g===n.RG_INTEGER&&(P===n.UNSIGNED_BYTE&&(K=n.RG8UI),P===n.UNSIGNED_SHORT&&(K=n.RG16UI),P===n.UNSIGNED_INT&&(K=n.RG32UI),P===n.BYTE&&(K=n.RG8I),P===n.SHORT&&(K=n.RG16I),P===n.INT&&(K=n.RG32I)),g===n.RGB_INTEGER&&(P===n.UNSIGNED_BYTE&&(K=n.RGB8UI),P===n.UNSIGNED_SHORT&&(K=n.RGB16UI),P===n.UNSIGNED_INT&&(K=n.RGB32UI),P===n.BYTE&&(K=n.RGB8I),P===n.SHORT&&(K=n.RGB16I),P===n.INT&&(K=n.RGB32I)),g===n.RGBA_INTEGER&&(P===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),P===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),P===n.UNSIGNED_INT&&(K=n.RGBA32UI),P===n.BYTE&&(K=n.RGBA8I),P===n.SHORT&&(K=n.RGBA16I),P===n.INT&&(K=n.RGBA32I)),g===n.RGB&&P===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),g===n.RGBA){const ve=J?al:at.getTransfer(W);P===n.FLOAT&&(K=n.RGBA32F),P===n.HALF_FLOAT&&(K=n.RGBA16F),P===n.UNSIGNED_BYTE&&(K=ve===Mt?n.SRGB8_ALPHA8:n.RGBA8),P===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),P===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function v(T,g){let P;return T?g===null||g===Br||g===To?P=n.DEPTH24_STENCIL8:g===Yn?P=n.DEPTH32F_STENCIL8:g===Eo&&(P=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Br||g===To?P=n.DEPTH_COMPONENT24:g===Yn?P=n.DEPTH_COMPONENT32F:g===Eo&&(P=n.DEPTH_COMPONENT16),P}function L(T,g){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==fn&&T.minFilter!==kt?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function I(T){const g=T.target;g.removeEventListener("dispose",I),D(g),g.isVideoTexture&&u.delete(g)}function R(T){const g=T.target;g.removeEventListener("dispose",R),M(g)}function D(T){const g=i.get(T);if(g.__webglInit===void 0)return;const P=T.source,W=h.get(P);if(W){const J=W[g.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(T),Object.keys(W).length===0&&h.delete(P)}i.remove(T)}function E(T){const g=i.get(T);n.deleteTexture(g.__webglTexture);const P=T.source,W=h.get(P);delete W[g.__cacheKey],o.memory.textures--}function M(T){const g=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(g.__webglFramebuffer[W]))for(let J=0;J<g.__webglFramebuffer[W].length;J++)n.deleteFramebuffer(g.__webglFramebuffer[W][J]);else n.deleteFramebuffer(g.__webglFramebuffer[W]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[W])}else{if(Array.isArray(g.__webglFramebuffer))for(let W=0;W<g.__webglFramebuffer.length;W++)n.deleteFramebuffer(g.__webglFramebuffer[W]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let W=0;W<g.__webglColorRenderbuffer.length;W++)g.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[W]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const P=T.textures;for(let W=0,J=P.length;W<J;W++){const K=i.get(P[W]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(P[W])}i.remove(T)}let F=0;function Y(){F=0}function $(){const T=F;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),F+=1,T}function ie(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function G(T,g){const P=i.get(T);if(T.isVideoTexture&&U(T),T.isRenderTargetTexture===!1&&T.version>0&&P.__version!==T.version){const W=T.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(P,T,g);return}}t.bindTexture(n.TEXTURE_2D,P.__webglTexture,n.TEXTURE0+g)}function B(T,g){const P=i.get(T);if(T.version>0&&P.__version!==T.version){Re(P,T,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,P.__webglTexture,n.TEXTURE0+g)}function q(T,g){const P=i.get(T);if(T.version>0&&P.__version!==T.version){Re(P,T,g);return}t.bindTexture(n.TEXTURE_3D,P.__webglTexture,n.TEXTURE0+g)}function H(T,g){const P=i.get(T);if(T.version>0&&P.__version!==T.version){ge(P,T,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+g)}const le={[kn]:n.REPEAT,[ai]:n.CLAMP_TO_EDGE,[ol]:n.MIRRORED_REPEAT},pe={[fn]:n.NEAREST,[qm]:n.NEAREST_MIPMAP_NEAREST,[ro]:n.NEAREST_MIPMAP_LINEAR,[kt]:n.LINEAR,[Na]:n.LINEAR_MIPMAP_NEAREST,[Pi]:n.LINEAR_MIPMAP_LINEAR},Ae={[Ux]:n.NEVER,[Vx]:n.ALWAYS,[Ox]:n.LESS,[sg]:n.LEQUAL,[Fx]:n.EQUAL,[Hx]:n.GEQUAL,[Bx]:n.GREATER,[kx]:n.NOTEQUAL};function Be(T,g){if(g.type===Yn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===kt||g.magFilter===Na||g.magFilter===ro||g.magFilter===Pi||g.minFilter===kt||g.minFilter===Na||g.minFilter===ro||g.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,le[g.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,le[g.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,le[g.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,pe[g.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,pe[g.minFilter]),g.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Ae[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===fn||g.minFilter!==ro&&g.minFilter!==Pi||g.type===Yn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function ot(T,g){let P=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",I));const W=g.source;let J=h.get(W);J===void 0&&(J={},h.set(W,J));const K=ie(g);if(K!==T.__cacheKey){J[K]===void 0&&(J[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,P=!0),J[K].usedTimes++;const ve=J[T.__cacheKey];ve!==void 0&&(J[T.__cacheKey].usedTimes--,ve.usedTimes===0&&E(g)),T.__cacheKey=K,T.__webglTexture=J[K].texture}return P}function re(T,g,P){return Math.floor(Math.floor(T/P)/g)}function me(T,g,P,W){const K=T.updateRanges;if(K.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,P,W,g.data);else{K.sort((ae,Te)=>ae.start-Te.start);let ve=0;for(let ae=1;ae<K.length;ae++){const Te=K[ve],Pe=K[ae],De=Te.start+Te.count,_e=re(Pe.start,g.width,4),$e=re(Te.start,g.width,4);Pe.start<=De+1&&_e===$e&&re(Pe.start+Pe.count-1,g.width,4)===_e?Te.count=Math.max(Te.count,Pe.start+Pe.count-Te.start):(++ve,K[ve]=Pe)}K.length=ve+1;const ce=n.getParameter(n.UNPACK_ROW_LENGTH),ye=n.getParameter(n.UNPACK_SKIP_PIXELS),Ee=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let ae=0,Te=K.length;ae<Te;ae++){const Pe=K[ae],De=Math.floor(Pe.start/4),_e=Math.ceil(Pe.count/4),$e=De%g.width,k=Math.floor(De/g.width),Se=_e,ue=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,$e),n.pixelStorei(n.UNPACK_SKIP_ROWS,k),t.texSubImage2D(n.TEXTURE_2D,0,$e,k,Se,ue,P,W,g.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ce),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ye),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ee)}}function Re(T,g,P){let W=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(W=n.TEXTURE_3D);const J=ot(T,g),K=g.source;t.bindTexture(W,T.__webglTexture,n.TEXTURE0+P);const ve=i.get(K);if(K.version!==ve.__version||J===!0){t.activeTexture(n.TEXTURE0+P);const ce=at.getPrimaries(at.workingColorSpace),ye=g.colorSpace===rr?null:at.getPrimaries(g.colorSpace),Ee=g.colorSpace===rr||ce===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let ae=x(g.image,!1,r.maxTextureSize);ae=V(g,ae);const Te=s.convert(g.format,g.colorSpace),Pe=s.convert(g.type);let De=S(g.internalFormat,Te,Pe,g.colorSpace,g.isVideoTexture);Be(W,g);let _e;const $e=g.mipmaps,k=g.isVideoTexture!==!0,Se=ve.__version===void 0||J===!0,ue=K.dataReady,Ie=L(g,ae);if(g.isDepthTexture)De=v(g.format===Ao,g.type),Se&&(k?t.texStorage2D(n.TEXTURE_2D,1,De,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,De,ae.width,ae.height,0,Te,Pe,null));else if(g.isDataTexture)if($e.length>0){k&&Se&&t.texStorage2D(n.TEXTURE_2D,Ie,De,$e[0].width,$e[0].height);for(let he=0,oe=$e.length;he<oe;he++)_e=$e[he],k?ue&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,_e.width,_e.height,Te,Pe,_e.data):t.texImage2D(n.TEXTURE_2D,he,De,_e.width,_e.height,0,Te,Pe,_e.data);g.generateMipmaps=!1}else k?(Se&&t.texStorage2D(n.TEXTURE_2D,Ie,De,ae.width,ae.height),ue&&me(g,ae,Te,Pe)):t.texImage2D(n.TEXTURE_2D,0,De,ae.width,ae.height,0,Te,Pe,ae.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){k&&Se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,De,$e[0].width,$e[0].height,ae.depth);for(let he=0,oe=$e.length;he<oe;he++)if(_e=$e[he],g.format!==On)if(Te!==null)if(k){if(ue)if(g.layerUpdates.size>0){const Ne=bd(_e.width,_e.height,g.format,g.type);for(const Ye of g.layerUpdates){const Ct=_e.data.subarray(Ye*Ne/_e.data.BYTES_PER_ELEMENT,(Ye+1)*Ne/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,Ye,_e.width,_e.height,1,Te,Ct)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,_e.width,_e.height,ae.depth,Te,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,De,_e.width,_e.height,ae.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?ue&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,_e.width,_e.height,ae.depth,Te,Pe,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,De,_e.width,_e.height,ae.depth,0,Te,Pe,_e.data)}else{k&&Se&&t.texStorage2D(n.TEXTURE_2D,Ie,De,$e[0].width,$e[0].height);for(let he=0,oe=$e.length;he<oe;he++)_e=$e[he],g.format!==On?Te!==null?k?ue&&t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,_e.width,_e.height,Te,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,he,De,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?ue&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,_e.width,_e.height,Te,Pe,_e.data):t.texImage2D(n.TEXTURE_2D,he,De,_e.width,_e.height,0,Te,Pe,_e.data)}else if(g.isDataArrayTexture)if(k){if(Se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,De,ae.width,ae.height,ae.depth),ue)if(g.layerUpdates.size>0){const he=bd(ae.width,ae.height,g.format,g.type);for(const oe of g.layerUpdates){const Ne=ae.data.subarray(oe*he/ae.data.BYTES_PER_ELEMENT,(oe+1)*he/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,oe,ae.width,ae.height,1,Te,Pe,Ne)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Te,Pe,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,ae.width,ae.height,ae.depth,0,Te,Pe,ae.data);else if(g.isData3DTexture)k?(Se&&t.texStorage3D(n.TEXTURE_3D,Ie,De,ae.width,ae.height,ae.depth),ue&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Te,Pe,ae.data)):t.texImage3D(n.TEXTURE_3D,0,De,ae.width,ae.height,ae.depth,0,Te,Pe,ae.data);else if(g.isFramebufferTexture){if(Se)if(k)t.texStorage2D(n.TEXTURE_2D,Ie,De,ae.width,ae.height);else{let he=ae.width,oe=ae.height;for(let Ne=0;Ne<Ie;Ne++)t.texImage2D(n.TEXTURE_2D,Ne,De,he,oe,0,Te,Pe,null),he>>=1,oe>>=1}}else if($e.length>0){if(k&&Se){const he=fe($e[0]);t.texStorage2D(n.TEXTURE_2D,Ie,De,he.width,he.height)}for(let he=0,oe=$e.length;he<oe;he++)_e=$e[he],k?ue&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Te,Pe,_e):t.texImage2D(n.TEXTURE_2D,he,De,Te,Pe,_e);g.generateMipmaps=!1}else if(k){if(Se){const he=fe(ae);t.texStorage2D(n.TEXTURE_2D,Ie,De,he.width,he.height)}ue&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,Pe,ae)}else t.texImage2D(n.TEXTURE_2D,0,De,Te,Pe,ae);m(g)&&d(W),ve.__version=K.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function ge(T,g,P){if(g.image.length!==6)return;const W=ot(T,g),J=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+P);const K=i.get(J);if(J.version!==K.__version||W===!0){t.activeTexture(n.TEXTURE0+P);const ve=at.getPrimaries(at.workingColorSpace),ce=g.colorSpace===rr?null:at.getPrimaries(g.colorSpace),ye=g.colorSpace===rr||ve===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ee=g.isCompressedTexture||g.image[0].isCompressedTexture,ae=g.image[0]&&g.image[0].isDataTexture,Te=[];for(let oe=0;oe<6;oe++)!Ee&&!ae?Te[oe]=x(g.image[oe],!0,r.maxCubemapSize):Te[oe]=ae?g.image[oe].image:g.image[oe],Te[oe]=V(g,Te[oe]);const Pe=Te[0],De=s.convert(g.format,g.colorSpace),_e=s.convert(g.type),$e=S(g.internalFormat,De,_e,g.colorSpace),k=g.isVideoTexture!==!0,Se=K.__version===void 0||W===!0,ue=J.dataReady;let Ie=L(g,Pe);Be(n.TEXTURE_CUBE_MAP,g);let he;if(Ee){k&&Se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,$e,Pe.width,Pe.height);for(let oe=0;oe<6;oe++){he=Te[oe].mipmaps;for(let Ne=0;Ne<he.length;Ne++){const Ye=he[Ne];g.format!==On?De!==null?k?ue&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne,0,0,Ye.width,Ye.height,De,Ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne,$e,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne,0,0,Ye.width,Ye.height,De,_e,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne,$e,Ye.width,Ye.height,0,De,_e,Ye.data)}}}else{if(he=g.mipmaps,k&&Se){he.length>0&&Ie++;const oe=fe(Te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,$e,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(ae){k?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Te[oe].width,Te[oe].height,De,_e,Te[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,$e,Te[oe].width,Te[oe].height,0,De,_e,Te[oe].data);for(let Ne=0;Ne<he.length;Ne++){const Ct=he[Ne].image[oe].image;k?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne+1,0,0,Ct.width,Ct.height,De,_e,Ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne+1,$e,Ct.width,Ct.height,0,De,_e,Ct.data)}}else{k?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,De,_e,Te[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,$e,De,_e,Te[oe]);for(let Ne=0;Ne<he.length;Ne++){const Ye=he[Ne];k?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne+1,0,0,De,_e,Ye.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne+1,$e,De,_e,Ye.image[oe])}}}m(g)&&d(n.TEXTURE_CUBE_MAP),K.__version=J.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Le(T,g,P,W,J,K){const ve=s.convert(P.format,P.colorSpace),ce=s.convert(P.type),ye=S(P.internalFormat,ve,ce,P.colorSpace),Ee=i.get(g),ae=i.get(P);if(ae.__renderTarget=g,!Ee.__hasExternalTextures){const Te=Math.max(1,g.width>>K),Pe=Math.max(1,g.height>>K);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,K,ye,Te,Pe,g.depth,0,ve,ce,null):t.texImage2D(J,K,ye,Te,Pe,0,ve,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),C(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,J,ae.__webglTexture,0,A(g)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,J,ae.__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Qe(T,g,P){if(n.bindRenderbuffer(n.RENDERBUFFER,T),g.depthBuffer){const W=g.depthTexture,J=W&&W.isDepthTexture?W.type:null,K=v(g.stencilBuffer,J),ve=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=A(g);C(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,K,g.width,g.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,K,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,K,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,T)}else{const W=g.textures;for(let J=0;J<W.length;J++){const K=W[J],ve=s.convert(K.format,K.colorSpace),ce=s.convert(K.type),ye=S(K.internalFormat,ve,ce,K.colorSpace),Ee=A(g);P&&C(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,ye,g.width,g.height):C(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,ye,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ye,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Oe(T,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(g.depthTexture);W.__renderTarget=g,(!W.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),G(g.depthTexture,0);const J=W.__webglTexture,K=A(g);if(g.depthTexture.format===bo)C(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(g.depthTexture.format===Ao)C(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function St(T){const g=i.get(T),P=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const W=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),W){const J=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,W.removeEventListener("dispose",J)};W.addEventListener("dispose",J),g.__depthDisposeCallback=J}g.__boundDepthTexture=W}if(T.depthTexture&&!g.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");const W=T.texture.mipmaps;W&&W.length>0?Oe(g.__webglFramebuffer[0],T):Oe(g.__webglFramebuffer,T)}else if(P){g.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[W]),g.__webglDepthbuffer[W]===void 0)g.__webglDepthbuffer[W]=n.createRenderbuffer(),Qe(g.__webglDepthbuffer[W],T,!1);else{const J=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=g.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,K)}}else{const W=T.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Qe(g.__webglDepthbuffer,T,!1);else{const J=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,K)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function N(T,g,P){const W=i.get(T);g!==void 0&&Le(W.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),P!==void 0&&St(T)}function O(T){const g=T.texture,P=i.get(T),W=i.get(g);T.addEventListener("dispose",R);const J=T.textures,K=T.isWebGLCubeRenderTarget===!0,ve=J.length>1;if(ve||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=g.version,o.memory.textures++),K){P.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer[ce]=[];for(let ye=0;ye<g.mipmaps.length;ye++)P.__webglFramebuffer[ce][ye]=n.createFramebuffer()}else P.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer=[];for(let ce=0;ce<g.mipmaps.length;ce++)P.__webglFramebuffer[ce]=n.createFramebuffer()}else P.__webglFramebuffer=n.createFramebuffer();if(ve)for(let ce=0,ye=J.length;ce<ye;ce++){const Ee=i.get(J[ce]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&C(T)===!1){P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let ce=0;ce<J.length;ce++){const ye=J[ce];P.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,P.__webglColorRenderbuffer[ce]);const Ee=s.convert(ye.format,ye.colorSpace),ae=s.convert(ye.type),Te=S(ye.internalFormat,Ee,ae,ye.colorSpace,T.isXRRenderTarget===!0),Pe=A(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Te,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,P.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),Qe(P.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Be(n.TEXTURE_CUBE_MAP,g);for(let ce=0;ce<6;ce++)if(g.mipmaps&&g.mipmaps.length>0)for(let ye=0;ye<g.mipmaps.length;ye++)Le(P.__webglFramebuffer[ce][ye],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ye);else Le(P.__webglFramebuffer[ce],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(g)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ce=0,ye=J.length;ce<ye;ce++){const Ee=J[ce],ae=i.get(Ee);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),Be(n.TEXTURE_2D,Ee),Le(P.__webglFramebuffer,T,Ee,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),m(Ee)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ce=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,W.__webglTexture),Be(ce,g),g.mipmaps&&g.mipmaps.length>0)for(let ye=0;ye<g.mipmaps.length;ye++)Le(P.__webglFramebuffer[ye],T,g,n.COLOR_ATTACHMENT0,ce,ye);else Le(P.__webglFramebuffer,T,g,n.COLOR_ATTACHMENT0,ce,0);m(g)&&d(ce),t.unbindTexture()}T.depthBuffer&&St(T)}function b(T){const g=T.textures;for(let P=0,W=g.length;P<W;P++){const J=g[P];if(m(J)){const K=y(T),ve=i.get(J).__webglTexture;t.bindTexture(K,ve),d(K),t.unbindTexture()}}}const se=[],ee=[];function te(T){if(T.samples>0){if(C(T)===!1){const g=T.textures,P=T.width,W=T.height;let J=n.COLOR_BUFFER_BIT;const K=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=i.get(T),ce=g.length>1;if(ce)for(let Ee=0;Ee<g.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const ye=T.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Ee=0;Ee<g.length;Ee++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ve.__webglColorRenderbuffer[Ee]);const ae=i.get(g[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ae,0)}n.blitFramebuffer(0,0,P,W,0,0,P,W,J,n.NEAREST),l===!0&&(se.length=0,ee.length=0,se.push(n.COLOR_ATTACHMENT0+Ee),T.depthBuffer&&T.resolveDepthBuffer===!1&&(se.push(K),ee.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ee)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let Ee=0;Ee<g.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,ve.__webglColorRenderbuffer[Ee]);const ae=i.get(g[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const g=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function A(T){return Math.min(r.maxSamples,T.samples)}function C(T){const g=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function U(T){const g=o.render.frame;u.get(T)!==g&&(u.set(T,g),T.update())}function V(T,g){const P=T.colorSpace,W=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||P!==pn&&P!==rr&&(at.getTransfer(P)===Mt?(W!==On||J!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),g}function fe(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=Y,this.setTexture2D=G,this.setTexture2DArray=B,this.setTexture3D=q,this.setTextureCube=H,this.rebindTextures=N,this.setupRenderTarget=O,this.updateRenderTargetMipmap=b,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=C}function Yb(n,e){function t(i,r=rr){let s;const o=at.getTransfer(r);if(i===hi)return n.UNSIGNED_BYTE;if(i===_f)return n.UNSIGNED_SHORT_4_4_4_4;if(i===vf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Zm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Km)return n.BYTE;if(i===Jm)return n.SHORT;if(i===Eo)return n.UNSIGNED_SHORT;if(i===gf)return n.INT;if(i===Br)return n.UNSIGNED_INT;if(i===Yn)return n.FLOAT;if(i===Ho)return n.HALF_FLOAT;if(i===Qm)return n.ALPHA;if(i===eg)return n.RGB;if(i===On)return n.RGBA;if(i===bo)return n.DEPTH_COMPONENT;if(i===Ao)return n.DEPTH_STENCIL;if(i===xf)return n.RED;if(i===yf)return n.RED_INTEGER;if(i===tg)return n.RG;if(i===Sf)return n.RG_INTEGER;if(i===Mf)return n.RGBA_INTEGER;if(i===Ua||i===Oa||i===Fa||i===Ba)if(o===Mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ua)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ua)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Oa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ba)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ou||i===au||i===lu||i===cu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ou)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===au)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===lu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===uu||i===fu||i===hu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===uu||i===fu)return o===Mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===hu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===du||i===pu||i===mu||i===gu||i===_u||i===vu||i===xu||i===yu||i===Su||i===Mu||i===Eu||i===Tu||i===bu||i===Au)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===du)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===mu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_u)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Su)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Eu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Tu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Au)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ka||i===wu||i===Ru)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ka)return o===Mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ru)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ng||i===Cu||i===Lu||i===Iu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ka)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Cu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Lu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Iu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===To?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const qb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kb=`
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

}`;class Jb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Xt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new di({vertexShader:qb,fragmentShader:Kb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vn(new Us(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zb extends Ns{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,_=null;const x=new Jb,m=t.getContextAttributes();let d=null,y=null;const S=[],v=[],L=new He;let I=null;const R=new tn;R.viewport=new ut;const D=new tn;D.viewport=new ut;const E=[R,D],M=new uS;let F=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let me=S[re];return me===void 0&&(me=new pc,S[re]=me),me.getTargetRaySpace()},this.getControllerGrip=function(re){let me=S[re];return me===void 0&&(me=new pc,S[re]=me),me.getGripSpace()},this.getHand=function(re){let me=S[re];return me===void 0&&(me=new pc,S[re]=me),me.getHandSpace()};function $(re){const me=v.indexOf(re.inputSource);if(me===-1)return;const Re=S[me];Re!==void 0&&(Re.update(re.inputSource,re.frame,c||o),Re.dispatchEvent({type:re.type,data:re.inputSource}))}function ie(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",G);for(let re=0;re<S.length;re++){const me=v[re];me!==null&&(v[re]=null,S[re].disconnect(me))}F=null,Y=null,x.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,y=null,ot.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,ge=null,Le=null;m.depth&&(Le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=m.stencil?Ao:bo,ge=m.stencil?To:Br);const Qe={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Qe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new kr(h.textureWidth,h.textureHeight,{format:On,type:hi,depthTexture:new xg(h.textureWidth,h.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Re),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new kr(p.framebufferWidth,p.framebufferHeight,{format:On,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ot.setContext(r),ot.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function G(re){for(let me=0;me<re.removed.length;me++){const Re=re.removed[me],ge=v.indexOf(Re);ge>=0&&(v[ge]=null,S[ge].disconnect(Re))}for(let me=0;me<re.added.length;me++){const Re=re.added[me];let ge=v.indexOf(Re);if(ge===-1){for(let Qe=0;Qe<S.length;Qe++)if(Qe>=v.length){v.push(Re),ge=Qe;break}else if(v[Qe]===null){v[Qe]=Re,ge=Qe;break}if(ge===-1)break}const Le=S[ge];Le&&Le.connect(Re)}}const B=new z,q=new z;function H(re,me,Re){B.setFromMatrixPosition(me.matrixWorld),q.setFromMatrixPosition(Re.matrixWorld);const ge=B.distanceTo(q),Le=me.projectionMatrix.elements,Qe=Re.projectionMatrix.elements,Oe=Le[14]/(Le[10]-1),St=Le[14]/(Le[10]+1),N=(Le[9]+1)/Le[5],O=(Le[9]-1)/Le[5],b=(Le[8]-1)/Le[0],se=(Qe[8]+1)/Qe[0],ee=Oe*b,te=Oe*se,A=ge/(-b+se),C=A*-b;if(me.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(C),re.translateZ(A),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Le[10]===-1)re.projectionMatrix.copy(me.projectionMatrix),re.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const U=Oe+A,V=St+A,fe=ee-C,T=te+(ge-C),g=N*St/V*U,P=O*St/V*U;re.projectionMatrix.makePerspective(fe,T,g,P,U,V),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function le(re,me){me===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(me.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let me=re.near,Re=re.far;x.texture!==null&&(x.depthNear>0&&(me=x.depthNear),x.depthFar>0&&(Re=x.depthFar)),M.near=D.near=R.near=me,M.far=D.far=R.far=Re,(F!==M.near||Y!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),F=M.near,Y=M.far),R.layers.mask=re.layers.mask|2,D.layers.mask=re.layers.mask|4,M.layers.mask=R.layers.mask|D.layers.mask;const ge=re.parent,Le=M.cameras;le(M,ge);for(let Qe=0;Qe<Le.length;Qe++)le(Le[Qe],ge);Le.length===2?H(M,R,D):M.projectionMatrix.copy(R.projectionMatrix),pe(re,M,ge)};function pe(re,me,Re){Re===null?re.matrix.copy(me.matrixWorld):(re.matrix.copy(Re.matrixWorld),re.matrix.invert(),re.matrix.multiply(me.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(me.projectionMatrix),re.projectionMatrixInverse.copy(me.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=ws*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(re){l=re,h!==null&&(h.fixedFoveation=re),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=re)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let Ae=null;function Be(re,me){if(u=me.getViewerPose(c||o),_=me,u!==null){const Re=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let ge=!1;Re.length!==M.cameras.length&&(M.cameras.length=0,ge=!0);for(let Oe=0;Oe<Re.length;Oe++){const St=Re[Oe];let N=null;if(p!==null)N=p.getViewport(St);else{const b=f.getViewSubImage(h,St);N=b.viewport,Oe===0&&(e.setRenderTargetTextures(y,b.colorTexture,b.depthStencilTexture),e.setRenderTarget(y))}let O=E[Oe];O===void 0&&(O=new tn,O.layers.enable(Oe),O.viewport=new ut,E[Oe]=O),O.matrix.fromArray(St.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(St.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(N.x,N.y,N.width,N.height),Oe===0&&(M.matrix.copy(O.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ge===!0&&M.cameras.push(O)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const Oe=f.getDepthInformation(Re[0]);Oe&&Oe.isValid&&Oe.texture&&x.init(e,Oe,r.renderState)}}for(let Re=0;Re<S.length;Re++){const ge=v[Re],Le=S[Re];ge!==null&&Le!==void 0&&Le.update(ge,me,c||o)}Ae&&Ae(re,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),_=null}const ot=new Eg;ot.setAnimationLoop(Be),this.setAnimationLoop=function(re){Ae=re},this.dispose=function(){}}}const Tr=new Qn,Qb=new Ke;function eA(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,hg(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,y,S,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),x(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,y,S):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===xn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===xn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const y=e.get(d),S=y.envMap,v=y.envMapRotation;S&&(m.envMap.value=S,Tr.copy(v),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),m.envMapRotation.value.setFromMatrix4(Qb.makeRotationFromEuler(Tr)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,y,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=S*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===xn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const y=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function tA(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const v=S.program;i.uniformBlockBinding(y,v)}function c(y,S){let v=r[y.id];v===void 0&&(_(y),v=u(y),r[y.id]=v,y.addEventListener("dispose",m));const L=S.program;i.updateUBOMapping(y,L);const I=e.render.frame;s[y.id]!==I&&(h(y),s[y.id]=I)}function u(y){const S=f();y.__bindingPointIndex=S;const v=n.createBuffer(),L=y.__size,I=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,L,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,v),v}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const S=r[y.id],v=y.uniforms,L=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let I=0,R=v.length;I<R;I++){const D=Array.isArray(v[I])?v[I]:[v[I]];for(let E=0,M=D.length;E<M;E++){const F=D[E];if(p(F,I,E,L)===!0){const Y=F.__offset,$=Array.isArray(F.value)?F.value:[F.value];let ie=0;for(let G=0;G<$.length;G++){const B=$[G],q=x(B);typeof B=="number"||typeof B=="boolean"?(F.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,Y+ie,F.__data)):B.isMatrix3?(F.__data[0]=B.elements[0],F.__data[1]=B.elements[1],F.__data[2]=B.elements[2],F.__data[3]=0,F.__data[4]=B.elements[3],F.__data[5]=B.elements[4],F.__data[6]=B.elements[5],F.__data[7]=0,F.__data[8]=B.elements[6],F.__data[9]=B.elements[7],F.__data[10]=B.elements[8],F.__data[11]=0):(B.toArray(F.__data,ie),ie+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Y,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,S,v,L){const I=y.value,R=S+"_"+v;if(L[R]===void 0)return typeof I=="number"||typeof I=="boolean"?L[R]=I:L[R]=I.clone(),!0;{const D=L[R];if(typeof I=="number"||typeof I=="boolean"){if(D!==I)return L[R]=I,!0}else if(D.equals(I)===!1)return D.copy(I),!0}return!1}function _(y){const S=y.uniforms;let v=0;const L=16;for(let R=0,D=S.length;R<D;R++){const E=Array.isArray(S[R])?S[R]:[S[R]];for(let M=0,F=E.length;M<F;M++){const Y=E[M],$=Array.isArray(Y.value)?Y.value:[Y.value];for(let ie=0,G=$.length;ie<G;ie++){const B=$[ie],q=x(B),H=v%L,le=H%q.boundary,pe=H+le;v+=le,pe!==0&&L-pe<q.storage&&(v+=L-pe),Y.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=v,v+=q.storage}}}const I=v%L;return I>0&&(v+=L-I),y.__size=v,y.__cache={},this}function x(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function d(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class Rg{constructor(e={}){const{canvas:t=ry(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,d=null;const y=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=lr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let L=!1;this._outputColorSpace=$t;let I=0,R=0,D=null,E=-1,M=null;const F=new ut,Y=new ut;let $=null;const ie=new We(0);let G=0,B=t.width,q=t.height,H=1,le=null,pe=null;const Ae=new ut(0,0,B,q),Be=new ut(0,0,B,q);let ot=!1;const re=new Cf;let me=!1,Re=!1;const ge=new Ke,Le=new Ke,Qe=new z,Oe=new ut,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let N=!1;function O(){return D===null?H:1}let b=i;function se(w,X){return t.getContext(w,X)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mf}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",oe,!1),b===null){const X="webgl2";if(b=se(X,w),b===null)throw se(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ee,te,A,C,U,V,fe,T,g,P,W,J,K,ve,ce,ye,Ee,ae,Te,Pe,De,_e,$e,k;function Se(){ee=new hT(b),ee.init(),_e=new Yb(b,ee),te=new sT(b,ee,e,_e),A=new jb(b,ee),te.reverseDepthBuffer&&h&&A.buffers.depth.setReversed(!0),C=new mT(b),U=new Db,V=new $b(b,ee,A,U,te,_e,C),fe=new aT(v),T=new fT(v),g=new SS(b),$e=new iT(b,g),P=new dT(b,g,C,$e),W=new _T(b,P,g,C),Te=new gT(b,te,V),ye=new oT(U),J=new Pb(v,fe,T,ee,te,$e,ye),K=new eA(v,U),ve=new Ub,ce=new Vb(ee),ae=new nT(v,fe,T,A,W,p,l),Ee=new Wb(v,W,te),k=new tA(b,C,te,A),Pe=new rT(b,ee,C),De=new pT(b,ee,C),C.programs=J.programs,v.capabilities=te,v.extensions=ee,v.properties=U,v.renderLists=ve,v.shadowMap=Ee,v.state=A,v.info=C}Se();const ue=new Zb(v,b);this.xr=ue,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const w=ee.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ee.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(w){w!==void 0&&(H=w,this.setSize(B,q,!1))},this.getSize=function(w){return w.set(B,q)},this.setSize=function(w,X,Z=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=w,q=X,t.width=Math.floor(w*H),t.height=Math.floor(X*H),Z===!0&&(t.style.width=w+"px",t.style.height=X+"px"),this.setViewport(0,0,w,X)},this.getDrawingBufferSize=function(w){return w.set(B*H,q*H).floor()},this.setDrawingBufferSize=function(w,X,Z){B=w,q=X,H=Z,t.width=Math.floor(w*Z),t.height=Math.floor(X*Z),this.setViewport(0,0,w,X)},this.getCurrentViewport=function(w){return w.copy(F)},this.getViewport=function(w){return w.copy(Ae)},this.setViewport=function(w,X,Z,Q){w.isVector4?Ae.set(w.x,w.y,w.z,w.w):Ae.set(w,X,Z,Q),A.viewport(F.copy(Ae).multiplyScalar(H).round())},this.getScissor=function(w){return w.copy(Be)},this.setScissor=function(w,X,Z,Q){w.isVector4?Be.set(w.x,w.y,w.z,w.w):Be.set(w,X,Z,Q),A.scissor(Y.copy(Be).multiplyScalar(H).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(w){A.setScissorTest(ot=w)},this.setOpaqueSort=function(w){le=w},this.setTransparentSort=function(w){pe=w},this.getClearColor=function(w){return w.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(w=!0,X=!0,Z=!0){let Q=0;if(w){let j=!1;if(D!==null){const de=D.texture.format;j=de===Mf||de===Sf||de===yf}if(j){const de=D.texture.type,Me=de===hi||de===Br||de===Eo||de===To||de===_f||de===vf,Ue=ae.getClearColor(),Ce=ae.getClearAlpha(),Ge=Ue.r,Xe=Ue.g,Fe=Ue.b;Me?(_[0]=Ge,_[1]=Xe,_[2]=Fe,_[3]=Ce,b.clearBufferuiv(b.COLOR,0,_)):(x[0]=Ge,x[1]=Xe,x[2]=Fe,x[3]=Ce,b.clearBufferiv(b.COLOR,0,x))}else Q|=b.COLOR_BUFFER_BIT}X&&(Q|=b.DEPTH_BUFFER_BIT),Z&&(Q|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),ae.dispose(),ve.dispose(),ce.dispose(),U.dispose(),fe.dispose(),T.dispose(),W.dispose(),$e.dispose(),k.dispose(),J.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",qf),ue.removeEventListener("sessionend",Kf),pr.stop()};function Ie(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const w=C.autoReset,X=Ee.enabled,Z=Ee.autoUpdate,Q=Ee.needsUpdate,j=Ee.type;Se(),C.autoReset=w,Ee.enabled=X,Ee.autoUpdate=Z,Ee.needsUpdate=Q,Ee.type=j}function oe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ne(w){const X=w.target;X.removeEventListener("dispose",Ne),Ye(X)}function Ye(w){Ct(w),U.remove(w)}function Ct(w){const X=U.get(w).programs;X!==void 0&&(X.forEach(function(Z){J.releaseProgram(Z)}),w.isShaderMaterial&&J.releaseShaderCache(w))}this.renderBufferDirect=function(w,X,Z,Q,j,de){X===null&&(X=St);const Me=j.isMesh&&j.matrixWorld.determinant()<0,Ue=p_(w,X,Z,Q,j);A.setMaterial(Q,Me);let Ce=Z.index,Ge=1;if(Q.wireframe===!0){if(Ce=P.getWireframeAttribute(Z),Ce===void 0)return;Ge=2}const Xe=Z.drawRange,Fe=Z.attributes.position;let rt=Xe.start*Ge,gt=(Xe.start+Xe.count)*Ge;de!==null&&(rt=Math.max(rt,de.start*Ge),gt=Math.min(gt,(de.start+de.count)*Ge)),Ce!==null?(rt=Math.max(rt,0),gt=Math.min(gt,Ce.count)):Fe!=null&&(rt=Math.max(rt,0),gt=Math.min(gt,Fe.count));const Pt=gt-rt;if(Pt<0||Pt===1/0)return;$e.setup(j,Q,Ue,Z,Ce);let Nt,lt=Pe;if(Ce!==null&&(Nt=g.get(Ce),lt=De,lt.setIndex(Nt)),j.isMesh)Q.wireframe===!0?(A.setLineWidth(Q.wireframeLinewidth*O()),lt.setMode(b.LINES)):lt.setMode(b.TRIANGLES);else if(j.isLine){let ke=Q.linewidth;ke===void 0&&(ke=1),A.setLineWidth(ke*O()),j.isLineSegments?lt.setMode(b.LINES):j.isLineLoop?lt.setMode(b.LINE_LOOP):lt.setMode(b.LINE_STRIP)}else j.isPoints?lt.setMode(b.POINTS):j.isSprite&&lt.setMode(b.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)xs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))lt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const ke=j._multiDrawStarts,jt=j._multiDrawCounts,ht=j._multiDrawCount,Vn=Ce?g.get(Ce).bytesPerElement:1,zr=U.get(Q).currentProgram.getUniforms();for(let Sn=0;Sn<ht;Sn++)zr.setValue(b,"_gl_DrawID",Sn),lt.render(ke[Sn]/Vn,jt[Sn])}else if(j.isInstancedMesh)lt.renderInstances(rt,Pt,j.count);else if(Z.isInstancedBufferGeometry){const ke=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,jt=Math.min(Z.instanceCount,ke);lt.renderInstances(rt,Pt,jt)}else lt.render(rt,Pt)};function mt(w,X,Z){w.transparent===!0&&w.side===Xn&&w.forceSinglePass===!1?(w.side=xn,w.needsUpdate=!0,jo(w,X,Z),w.side=Gi,w.needsUpdate=!0,jo(w,X,Z),w.side=Xn):jo(w,X,Z)}this.compile=function(w,X,Z=null){Z===null&&(Z=w),d=ce.get(Z),d.init(X),S.push(d),Z.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(d.pushLight(j),j.castShadow&&d.pushShadow(j))}),w!==Z&&w.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(d.pushLight(j),j.castShadow&&d.pushShadow(j))}),d.setupLights();const Q=new Set;return w.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const de=j.material;if(de)if(Array.isArray(de))for(let Me=0;Me<de.length;Me++){const Ue=de[Me];mt(Ue,Z,j),Q.add(Ue)}else mt(de,Z,j),Q.add(de)}),d=S.pop(),Q},this.compileAsync=function(w,X,Z=null){const Q=this.compile(w,X,Z);return new Promise(j=>{function de(){if(Q.forEach(function(Me){U.get(Me).currentProgram.isReady()&&Q.delete(Me)}),Q.size===0){j(w);return}setTimeout(de,10)}ee.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Hn=null;function gi(w){Hn&&Hn(w)}function qf(){pr.stop()}function Kf(){pr.start()}const pr=new Eg;pr.setAnimationLoop(gi),typeof self<"u"&&pr.setContext(self),this.setAnimationLoop=function(w){Hn=w,ue.setAnimationLoop(w),w===null?pr.stop():pr.start()},ue.addEventListener("sessionstart",qf),ue.addEventListener("sessionend",Kf),this.render=function(w,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(X),X=ue.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,X,D),d=ce.get(w,S.length),d.init(X),S.push(d),Le.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),re.setFromProjectionMatrix(Le),Re=this.localClippingEnabled,me=ye.init(this.clippingPlanes,Re),m=ve.get(w,y.length),m.init(),y.push(m),ue.enabled===!0&&ue.isPresenting===!0){const de=v.xr.getDepthSensingMesh();de!==null&&Ol(de,X,-1/0,v.sortObjects)}Ol(w,X,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(le,pe),N=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,N&&ae.addToRenderList(m,w),this.info.render.frame++,me===!0&&ye.beginShadows();const Z=d.state.shadowsArray;Ee.render(Z,w,X),me===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=m.opaque,j=m.transmissive;if(d.setupLights(),X.isArrayCamera){const de=X.cameras;if(j.length>0)for(let Me=0,Ue=de.length;Me<Ue;Me++){const Ce=de[Me];Zf(Q,j,w,Ce)}N&&ae.render(w);for(let Me=0,Ue=de.length;Me<Ue;Me++){const Ce=de[Me];Jf(m,w,Ce,Ce.viewport)}}else j.length>0&&Zf(Q,j,w,X),N&&ae.render(w),Jf(m,w,X);D!==null&&R===0&&(V.updateMultisampleRenderTarget(D),V.updateRenderTargetMipmap(D)),w.isScene===!0&&w.onAfterRender(v,w,X),$e.resetDefaultState(),E=-1,M=null,S.pop(),S.length>0?(d=S[S.length-1],me===!0&&ye.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Ol(w,X,Z,Q){if(w.visible===!1)return;if(w.layers.test(X.layers)){if(w.isGroup)Z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(X);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||re.intersectsSprite(w)){Q&&Oe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Le);const Me=W.update(w),Ue=w.material;Ue.visible&&m.push(w,Me,Ue,Z,Oe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||re.intersectsObject(w))){const Me=W.update(w),Ue=w.material;if(Q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Oe.copy(w.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Oe.copy(Me.boundingSphere.center)),Oe.applyMatrix4(w.matrixWorld).applyMatrix4(Le)),Array.isArray(Ue)){const Ce=Me.groups;for(let Ge=0,Xe=Ce.length;Ge<Xe;Ge++){const Fe=Ce[Ge],rt=Ue[Fe.materialIndex];rt&&rt.visible&&m.push(w,Me,rt,Z,Oe.z,Fe)}}else Ue.visible&&m.push(w,Me,Ue,Z,Oe.z,null)}}const de=w.children;for(let Me=0,Ue=de.length;Me<Ue;Me++)Ol(de[Me],X,Z,Q)}function Jf(w,X,Z,Q){const j=w.opaque,de=w.transmissive,Me=w.transparent;d.setupLightsView(Z),me===!0&&ye.setGlobalState(v.clippingPlanes,Z),Q&&A.viewport(F.copy(Q)),j.length>0&&Xo(j,X,Z),de.length>0&&Xo(de,X,Z),Me.length>0&&Xo(Me,X,Z),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function Zf(w,X,Z,Q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Q.id]===void 0&&(d.state.transmissionRenderTarget[Q.id]=new kr(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?Ho:hi,minFilter:Pi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const de=d.state.transmissionRenderTarget[Q.id],Me=Q.viewport||F;de.setSize(Me.z*v.transmissionResolutionScale,Me.w*v.transmissionResolutionScale);const Ue=v.getRenderTarget();v.setRenderTarget(de),v.getClearColor(ie),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),N&&ae.render(Z);const Ce=v.toneMapping;v.toneMapping=lr;const Ge=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),d.setupLightsView(Q),me===!0&&ye.setGlobalState(v.clippingPlanes,Q),Xo(w,Z,Q),V.updateMultisampleRenderTarget(de),V.updateRenderTargetMipmap(de),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let Fe=0,rt=X.length;Fe<rt;Fe++){const gt=X[Fe],Pt=gt.object,Nt=gt.geometry,lt=gt.material,ke=gt.group;if(lt.side===Xn&&Pt.layers.test(Q.layers)){const jt=lt.side;lt.side=xn,lt.needsUpdate=!0,Qf(Pt,Z,Q,Nt,lt,ke),lt.side=jt,lt.needsUpdate=!0,Xe=!0}}Xe===!0&&(V.updateMultisampleRenderTarget(de),V.updateRenderTargetMipmap(de))}v.setRenderTarget(Ue),v.setClearColor(ie,G),Ge!==void 0&&(Q.viewport=Ge),v.toneMapping=Ce}function Xo(w,X,Z){const Q=X.isScene===!0?X.overrideMaterial:null;for(let j=0,de=w.length;j<de;j++){const Me=w[j],Ue=Me.object,Ce=Me.geometry,Ge=Me.group;let Xe=Me.material;Xe.allowOverride===!0&&Q!==null&&(Xe=Q),Ue.layers.test(Z.layers)&&Qf(Ue,X,Z,Ce,Xe,Ge)}}function Qf(w,X,Z,Q,j,de){w.onBeforeRender(v,X,Z,Q,j,de),w.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(v,X,Z,Q,w,de),j.transparent===!0&&j.side===Xn&&j.forceSinglePass===!1?(j.side=xn,j.needsUpdate=!0,v.renderBufferDirect(Z,X,Q,j,w,de),j.side=Gi,j.needsUpdate=!0,v.renderBufferDirect(Z,X,Q,j,w,de),j.side=Xn):v.renderBufferDirect(Z,X,Q,j,w,de),w.onAfterRender(v,X,Z,Q,j,de)}function jo(w,X,Z){X.isScene!==!0&&(X=St);const Q=U.get(w),j=d.state.lights,de=d.state.shadowsArray,Me=j.state.version,Ue=J.getParameters(w,j.state,de,X,Z),Ce=J.getProgramCacheKey(Ue);let Ge=Q.programs;Q.environment=w.isMeshStandardMaterial?X.environment:null,Q.fog=X.fog,Q.envMap=(w.isMeshStandardMaterial?T:fe).get(w.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&w.envMap===null?X.environmentRotation:w.envMapRotation,Ge===void 0&&(w.addEventListener("dispose",Ne),Ge=new Map,Q.programs=Ge);let Xe=Ge.get(Ce);if(Xe!==void 0){if(Q.currentProgram===Xe&&Q.lightsStateVersion===Me)return th(w,Ue),Xe}else Ue.uniforms=J.getUniforms(w),w.onBeforeCompile(Ue,v),Xe=J.acquireProgram(Ue,Ce),Ge.set(Ce,Xe),Q.uniforms=Ue.uniforms;const Fe=Q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Fe.clippingPlanes=ye.uniform),th(w,Ue),Q.needsLights=g_(w),Q.lightsStateVersion=Me,Q.needsLights&&(Fe.ambientLightColor.value=j.state.ambient,Fe.lightProbe.value=j.state.probe,Fe.directionalLights.value=j.state.directional,Fe.directionalLightShadows.value=j.state.directionalShadow,Fe.spotLights.value=j.state.spot,Fe.spotLightShadows.value=j.state.spotShadow,Fe.rectAreaLights.value=j.state.rectArea,Fe.ltc_1.value=j.state.rectAreaLTC1,Fe.ltc_2.value=j.state.rectAreaLTC2,Fe.pointLights.value=j.state.point,Fe.pointLightShadows.value=j.state.pointShadow,Fe.hemisphereLights.value=j.state.hemi,Fe.directionalShadowMap.value=j.state.directionalShadowMap,Fe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Fe.spotShadowMap.value=j.state.spotShadowMap,Fe.spotLightMatrix.value=j.state.spotLightMatrix,Fe.spotLightMap.value=j.state.spotLightMap,Fe.pointShadowMap.value=j.state.pointShadowMap,Fe.pointShadowMatrix.value=j.state.pointShadowMatrix),Q.currentProgram=Xe,Q.uniformsList=null,Xe}function eh(w){if(w.uniformsList===null){const X=w.currentProgram.getUniforms();w.uniformsList=Va.seqWithValue(X.seq,w.uniforms)}return w.uniformsList}function th(w,X){const Z=U.get(w);Z.outputColorSpace=X.outputColorSpace,Z.batching=X.batching,Z.batchingColor=X.batchingColor,Z.instancing=X.instancing,Z.instancingColor=X.instancingColor,Z.instancingMorph=X.instancingMorph,Z.skinning=X.skinning,Z.morphTargets=X.morphTargets,Z.morphNormals=X.morphNormals,Z.morphColors=X.morphColors,Z.morphTargetsCount=X.morphTargetsCount,Z.numClippingPlanes=X.numClippingPlanes,Z.numIntersection=X.numClipIntersection,Z.vertexAlphas=X.vertexAlphas,Z.vertexTangents=X.vertexTangents,Z.toneMapping=X.toneMapping}function p_(w,X,Z,Q,j){X.isScene!==!0&&(X=St),V.resetTextureUnits();const de=X.fog,Me=Q.isMeshStandardMaterial?X.environment:null,Ue=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:pn,Ce=(Q.isMeshStandardMaterial?T:fe).get(Q.envMap||Me),Ge=Q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Xe=!!Z.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Fe=!!Z.morphAttributes.position,rt=!!Z.morphAttributes.normal,gt=!!Z.morphAttributes.color;let Pt=lr;Q.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Pt=v.toneMapping);const Nt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,lt=Nt!==void 0?Nt.length:0,ke=U.get(Q),jt=d.state.lights;if(me===!0&&(Re===!0||w!==M)){const sn=w===M&&Q.id===E;ye.setState(Q,w,sn)}let ht=!1;Q.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==jt.state.version||ke.outputColorSpace!==Ue||j.isBatchedMesh&&ke.batching===!1||!j.isBatchedMesh&&ke.batching===!0||j.isBatchedMesh&&ke.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&ke.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&ke.instancing===!1||!j.isInstancedMesh&&ke.instancing===!0||j.isSkinnedMesh&&ke.skinning===!1||!j.isSkinnedMesh&&ke.skinning===!0||j.isInstancedMesh&&ke.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&ke.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&ke.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&ke.instancingMorph===!1&&j.morphTexture!==null||ke.envMap!==Ce||Q.fog===!0&&ke.fog!==de||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ye.numPlanes||ke.numIntersection!==ye.numIntersection)||ke.vertexAlphas!==Ge||ke.vertexTangents!==Xe||ke.morphTargets!==Fe||ke.morphNormals!==rt||ke.morphColors!==gt||ke.toneMapping!==Pt||ke.morphTargetsCount!==lt)&&(ht=!0):(ht=!0,ke.__version=Q.version);let Vn=ke.currentProgram;ht===!0&&(Vn=jo(Q,X,j));let zr=!1,Sn=!1,Hs=!1;const It=Vn.getUniforms(),Ln=ke.uniforms;if(A.useProgram(Vn.program)&&(zr=!0,Sn=!0,Hs=!0),Q.id!==E&&(E=Q.id,Sn=!0),zr||M!==w){A.buffers.depth.getReversed()?(ge.copy(w.projectionMatrix),oy(ge),ay(ge),It.setValue(b,"projectionMatrix",ge)):It.setValue(b,"projectionMatrix",w.projectionMatrix),It.setValue(b,"viewMatrix",w.matrixWorldInverse);const mn=It.map.cameraPosition;mn!==void 0&&mn.setValue(b,Qe.setFromMatrixPosition(w.matrixWorld)),te.logarithmicDepthBuffer&&It.setValue(b,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&It.setValue(b,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Sn=!0,Hs=!0)}if(j.isSkinnedMesh){It.setOptional(b,j,"bindMatrix"),It.setOptional(b,j,"bindMatrixInverse");const sn=j.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),It.setValue(b,"boneTexture",sn.boneTexture,V))}j.isBatchedMesh&&(It.setOptional(b,j,"batchingTexture"),It.setValue(b,"batchingTexture",j._matricesTexture,V),It.setOptional(b,j,"batchingIdTexture"),It.setValue(b,"batchingIdTexture",j._indirectTexture,V),It.setOptional(b,j,"batchingColorTexture"),j._colorsTexture!==null&&It.setValue(b,"batchingColorTexture",j._colorsTexture,V));const In=Z.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&Te.update(j,Z,Vn),(Sn||ke.receiveShadow!==j.receiveShadow)&&(ke.receiveShadow=j.receiveShadow,It.setValue(b,"receiveShadow",j.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Ln.envMap.value=Ce,Ln.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&X.environment!==null&&(Ln.envMapIntensity.value=X.environmentIntensity),Sn&&(It.setValue(b,"toneMappingExposure",v.toneMappingExposure),ke.needsLights&&m_(Ln,Hs),de&&Q.fog===!0&&K.refreshFogUniforms(Ln,de),K.refreshMaterialUniforms(Ln,Q,H,q,d.state.transmissionRenderTarget[w.id]),Va.upload(b,eh(ke),Ln,V)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Va.upload(b,eh(ke),Ln,V),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&It.setValue(b,"center",j.center),It.setValue(b,"modelViewMatrix",j.modelViewMatrix),It.setValue(b,"normalMatrix",j.normalMatrix),It.setValue(b,"modelMatrix",j.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const sn=Q.uniformsGroups;for(let mn=0,Fl=sn.length;mn<Fl;mn++){const mr=sn[mn];k.update(mr,Vn),k.bind(mr,Vn)}}return Vn}function m_(w,X){w.ambientLightColor.needsUpdate=X,w.lightProbe.needsUpdate=X,w.directionalLights.needsUpdate=X,w.directionalLightShadows.needsUpdate=X,w.pointLights.needsUpdate=X,w.pointLightShadows.needsUpdate=X,w.spotLights.needsUpdate=X,w.spotLightShadows.needsUpdate=X,w.rectAreaLights.needsUpdate=X,w.hemisphereLights.needsUpdate=X}function g_(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(w,X,Z){const Q=U.get(w);Q.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),U.get(w.texture).__webglTexture=X,U.get(w.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:Z,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,X){const Z=U.get(w);Z.__webglFramebuffer=X,Z.__useDefaultFramebuffer=X===void 0};const __=b.createFramebuffer();this.setRenderTarget=function(w,X=0,Z=0){D=w,I=X,R=Z;let Q=!0,j=null,de=!1,Me=!1;if(w){const Ce=U.get(w);if(Ce.__useDefaultFramebuffer!==void 0)A.bindFramebuffer(b.FRAMEBUFFER,null),Q=!1;else if(Ce.__webglFramebuffer===void 0)V.setupRenderTarget(w);else if(Ce.__hasExternalTextures)V.rebindTextures(w,U.get(w.texture).__webglTexture,U.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Fe=w.depthTexture;if(Ce.__boundDepthTexture!==Fe){if(Fe!==null&&U.has(Fe)&&(w.width!==Fe.image.width||w.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(w)}}const Ge=w.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Me=!0);const Xe=U.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Xe[X])?j=Xe[X][Z]:j=Xe[X],de=!0):w.samples>0&&V.useMultisampledRTT(w)===!1?j=U.get(w).__webglMultisampledFramebuffer:Array.isArray(Xe)?j=Xe[Z]:j=Xe,F.copy(w.viewport),Y.copy(w.scissor),$=w.scissorTest}else F.copy(Ae).multiplyScalar(H).floor(),Y.copy(Be).multiplyScalar(H).floor(),$=ot;if(Z!==0&&(j=__),A.bindFramebuffer(b.FRAMEBUFFER,j)&&Q&&A.drawBuffers(w,j),A.viewport(F),A.scissor(Y),A.setScissorTest($),de){const Ce=U.get(w.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ce.__webglTexture,Z)}else if(Me){const Ce=U.get(w.texture),Ge=X;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ce.__webglTexture,Z,Ge)}else if(w!==null&&Z!==0){const Ce=U.get(w.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Ce.__webglTexture,Z)}E=-1},this.readRenderTargetPixels=function(w,X,Z,Q,j,de,Me,Ue=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=U.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Me!==void 0&&(Ce=Ce[Me]),Ce){A.bindFramebuffer(b.FRAMEBUFFER,Ce);try{const Ge=w.textures[Ue],Xe=Ge.format,Fe=Ge.type;if(!te.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=w.width-Q&&Z>=0&&Z<=w.height-j&&(w.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Ue),b.readPixels(X,Z,Q,j,_e.convert(Xe),_e.convert(Fe),de))}finally{const Ge=D!==null?U.get(D).__webglFramebuffer:null;A.bindFramebuffer(b.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(w,X,Z,Q,j,de,Me,Ue=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=U.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Me!==void 0&&(Ce=Ce[Me]),Ce)if(X>=0&&X<=w.width-Q&&Z>=0&&Z<=w.height-j){A.bindFramebuffer(b.FRAMEBUFFER,Ce);const Ge=w.textures[Ue],Xe=Ge.format,Fe=Ge.type;if(!te.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const rt=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,rt),b.bufferData(b.PIXEL_PACK_BUFFER,de.byteLength,b.STREAM_READ),w.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Ue),b.readPixels(X,Z,Q,j,_e.convert(Xe),_e.convert(Fe),0);const gt=D!==null?U.get(D).__webglFramebuffer:null;A.bindFramebuffer(b.FRAMEBUFFER,gt);const Pt=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await sy(b,Pt,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,rt),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,de),b.deleteBuffer(rt),b.deleteSync(Pt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,X=null,Z=0){const Q=Math.pow(2,-Z),j=Math.floor(w.image.width*Q),de=Math.floor(w.image.height*Q),Me=X!==null?X.x:0,Ue=X!==null?X.y:0;V.setTexture2D(w,0),b.copyTexSubImage2D(b.TEXTURE_2D,Z,0,0,Me,Ue,j,de),A.unbindTexture()};const v_=b.createFramebuffer(),x_=b.createFramebuffer();this.copyTextureToTexture=function(w,X,Z=null,Q=null,j=0,de=null){de===null&&(j!==0?(xs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=j,j=0):de=0);let Me,Ue,Ce,Ge,Xe,Fe,rt,gt,Pt;const Nt=w.isCompressedTexture?w.mipmaps[de]:w.image;if(Z!==null)Me=Z.max.x-Z.min.x,Ue=Z.max.y-Z.min.y,Ce=Z.isBox3?Z.max.z-Z.min.z:1,Ge=Z.min.x,Xe=Z.min.y,Fe=Z.isBox3?Z.min.z:0;else{const In=Math.pow(2,-j);Me=Math.floor(Nt.width*In),Ue=Math.floor(Nt.height*In),w.isDataArrayTexture?Ce=Nt.depth:w.isData3DTexture?Ce=Math.floor(Nt.depth*In):Ce=1,Ge=0,Xe=0,Fe=0}Q!==null?(rt=Q.x,gt=Q.y,Pt=Q.z):(rt=0,gt=0,Pt=0);const lt=_e.convert(X.format),ke=_e.convert(X.type);let jt;X.isData3DTexture?(V.setTexture3D(X,0),jt=b.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(V.setTexture2DArray(X,0),jt=b.TEXTURE_2D_ARRAY):(V.setTexture2D(X,0),jt=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,X.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,X.unpackAlignment);const ht=b.getParameter(b.UNPACK_ROW_LENGTH),Vn=b.getParameter(b.UNPACK_IMAGE_HEIGHT),zr=b.getParameter(b.UNPACK_SKIP_PIXELS),Sn=b.getParameter(b.UNPACK_SKIP_ROWS),Hs=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,Nt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Nt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ge),b.pixelStorei(b.UNPACK_SKIP_ROWS,Xe),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Fe);const It=w.isDataArrayTexture||w.isData3DTexture,Ln=X.isDataArrayTexture||X.isData3DTexture;if(w.isDepthTexture){const In=U.get(w),sn=U.get(X),mn=U.get(In.__renderTarget),Fl=U.get(sn.__renderTarget);A.bindFramebuffer(b.READ_FRAMEBUFFER,mn.__webglFramebuffer),A.bindFramebuffer(b.DRAW_FRAMEBUFFER,Fl.__webglFramebuffer);for(let mr=0;mr<Ce;mr++)It&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,U.get(w).__webglTexture,j,Fe+mr),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,U.get(X).__webglTexture,de,Pt+mr)),b.blitFramebuffer(Ge,Xe,Me,Ue,rt,gt,Me,Ue,b.DEPTH_BUFFER_BIT,b.NEAREST);A.bindFramebuffer(b.READ_FRAMEBUFFER,null),A.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(j!==0||w.isRenderTargetTexture||U.has(w)){const In=U.get(w),sn=U.get(X);A.bindFramebuffer(b.READ_FRAMEBUFFER,v_),A.bindFramebuffer(b.DRAW_FRAMEBUFFER,x_);for(let mn=0;mn<Ce;mn++)It?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,In.__webglTexture,j,Fe+mn):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,In.__webglTexture,j),Ln?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,sn.__webglTexture,de,Pt+mn):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,sn.__webglTexture,de),j!==0?b.blitFramebuffer(Ge,Xe,Me,Ue,rt,gt,Me,Ue,b.COLOR_BUFFER_BIT,b.NEAREST):Ln?b.copyTexSubImage3D(jt,de,rt,gt,Pt+mn,Ge,Xe,Me,Ue):b.copyTexSubImage2D(jt,de,rt,gt,Ge,Xe,Me,Ue);A.bindFramebuffer(b.READ_FRAMEBUFFER,null),A.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else Ln?w.isDataTexture||w.isData3DTexture?b.texSubImage3D(jt,de,rt,gt,Pt,Me,Ue,Ce,lt,ke,Nt.data):X.isCompressedArrayTexture?b.compressedTexSubImage3D(jt,de,rt,gt,Pt,Me,Ue,Ce,lt,Nt.data):b.texSubImage3D(jt,de,rt,gt,Pt,Me,Ue,Ce,lt,ke,Nt):w.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,de,rt,gt,Me,Ue,lt,ke,Nt.data):w.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,de,rt,gt,Nt.width,Nt.height,lt,Nt.data):b.texSubImage2D(b.TEXTURE_2D,de,rt,gt,Me,Ue,lt,ke,Nt);b.pixelStorei(b.UNPACK_ROW_LENGTH,ht),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Vn),b.pixelStorei(b.UNPACK_SKIP_PIXELS,zr),b.pixelStorei(b.UNPACK_SKIP_ROWS,Sn),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Hs),de===0&&X.generateMipmaps&&b.generateMipmap(jt),A.unbindTexture()},this.copyTextureToTexture3D=function(w,X,Z=null,Q=null,j=0){return xs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,X,Z,Q,j)},this.initRenderTarget=function(w){U.get(w).__webglFramebuffer===void 0&&V.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?V.setTextureCube(w,0):w.isData3DTexture?V.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?V.setTexture2DArray(w,0):V.setTexture2D(w,0),A.unbindTexture()},this.resetState=function(){I=0,R=0,D=null,A.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}const Cg="/assets/color-_BiSU7h5.jpg",nA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAGHaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49J++7vycgaWQ9J1c1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCc/Pg0KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyI+PHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj48cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0idXVpZDpmYWY1YmRkNS1iYTNkLTExZGEtYWQzMS1kMzNkNzUxODJmMWIiIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj48dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPjwvcmRmOkRlc2NyaXB0aW9uPjwvcmRmOlJERj48L3g6eG1wbWV0YT4NCjw/eHBhY2tldCBlbmQ9J3cnPz4slJgLAAABWUlEQVR4Xu2aSw7DMAgFce9/53RlKUJV6scvNjDLtzAwJlEVdRDRRYX58KAaLYAH1WgBPKhGC+BBNVoAD6oxon8JXtdzuTEGj1wJE/BvcE6UCDcB6MD/8BLi8g6wHp6cziSPDfBq9I7lNpgIiBj6FxYi1I/AW8OTUW21gLfRSlAJ0BbfAZWADIgF7HT7ml5EAjQFvZD2JBKwKxIJqQRIgAVILO8MLCAbkIATbh/tcVkAevApLAs4CeSyUgpAaAE8qEYL4EE1WgAPMoB8K1wWgBx6EssCsgIJOGEL0B4hARmBBaCGdwcWkI1UAiTbKRIgKeSNtCeRgN2QDk8aAWMMVeFdEAvIwvECtFto8geJCfItTot28ImpAAqQYDX4xPwRsG7wjsfZ5hvA0W6Ex9B33AVMUBHeg0/CBEyeREQNfSdcwG6YvwRPowXwoBotgAfVaAE8qEYL4EE1vt2JWmMHqEWCAAAAAElFTkSuQmCC",Lg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAABqSURBVGhD7c/BCcAwDARBK/337ASSDvJYDDMg0D13nW6e23u/4zgzc33vsQTUBNQE1ATUBNQE1ATUBNQE1ATUBNQE1ATUBNQE1ATUBNQE1ATUBNQE1ATUBNQE1ATUBNQE1ATUBNQE8MtaN1PXA3zp+LTbAAAAAElFTkSuQmCC",iA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACXSURBVHhe7dWxEcBADMMw77/0ZwBmA8h3aFiq8d3dwyVoEjQJmgRNgiZBk6BJ0CRoEjQJmgRNgiZBk6BJ0CRoEjQJmgRNgiZBk6BJ0CRoEjQJmgTNPfU2wAbYABtgA/y8BU2CJkGToEnQJGgSNAmaBE2CJkGToEnQJGgSNAmaBE2CJkGToEnQJGgSNAmaBE2CJkGToEmgfCXkSNG/2Y/BAAAAAElFTkSuQmCC",rA=`struct ColorGradient {\r
    vec3 color;\r
    float stamp;\r
};\r
\r
const int nbColors = 2;\r
\r
\r
uniform float scale;\r
uniform float colorTextureScale;\r
uniform float threshold;\r
uniform float thicknessBot;\r
uniform float thicknessTop;\r
uniform ColorGradient[nbColors] colors;\r
uniform bool useColorTexture;\r
uniform sampler2D shapeTexture;\r
uniform sampler2D colorTexture;\r
uniform sampler2D voronoise;\r
uniform vec3 clearColor;\r
\r
uniform vec2 uvOffset;\r
uniform bool applyFog;\r
\r
varying vec2 fragUV;\r
varying float sliceHeight;\r
varying float vFogDepth;\r
\r
\r
//////// taken from shaderToy\r
const uint k = 1103515245U;\r
vec3 hash33( uvec3 x )\r
{\r
    x = ((x>>8U)^x.yzx)*k;\r
    x = ((x>>8U)^x.yzx)*k;\r
    x = ((x>>8U)^x.yzx)*k;\r
    \r
    return vec3(x)*(1.0/float(0xffffffffU));\r
}\r
///////\r
\r
float map(float v, float l0, float h0, float ln, float hn){\r
    float num = (v - l0) * (hn - ln);\r
    float denom = h0 - l0;\r
    return ln + (num / denom);\r
}\r
vec2 map(vec2 v, vec2 l0, vec2 h0, vec2 ln, vec2 hn){\r
    vec2 num = (v - l0) * (hn - ln);\r
    vec2 denom = h0 - l0;\r
    return ln + (num / denom);\r
}\r
\r
vec2 toCenter(vec2 vec){\r
    return vec - vec2(0.5);\r
}\r
\r
vec2 fromCenter(vec2 vec){\r
    return vec + vec2(0.5);\r
}\r
\r
\r
vec3 toLinear(vec3 srgb) {\r
    return pow(srgb, vec3(2.2));\r
}\r
vec3 toSRGB(vec3 linear) {\r
    return pow(linear, vec3(1.0/2.2));\r
}\r
\r
void main() {\r
    vec2 UV = fragUV + uvOffset;\r
    UV = mod(UV, vec2(scale));\r
\r
\r
    vec2 scaledUV = UV * scale;\r
    vec2 newUV = fract(scaledUV);\r
    vec2 cellIdx = scaledUV - newUV;\r
\r
    float n1 = hash33(uvec3(cellIdx / scale, 0)).r;\r
    float n2 = hash33(uvec3(cellIdx / scale + vec2(37.0, 91.0), 0)).r;\r
    // float n2 = texture(voronoise, cellIdx / scale + vec2(37.0, 91.0)).r; // offset arbitraire\r
    vec2 strandOffset = vec2(n1, n2) * 0.5;\r
    newUV += strandOffset;\r
    \r
\r
    float maxHeight = hash33(uvec3(cellIdx, 0)).r + threshold;\r
    vec2 centeredUV = toCenter(newUV);\r
    \r
    // Calculate progression toward max reachable height\r
    float currentHeight = map(sliceHeight, 0.f, maxHeight, 0.f, 1.f);\r
\r
    float currentThickness = map(currentHeight, 0.f, 1.f, thicknessBot, thicknessTop);\r
    centeredUV /= currentThickness;\r
\r
    newUV = fromCenter(centeredUV);\r
\r
    if(sliceHeight > 0.f){\r
        if(texture(shapeTexture, newUV).r < 0.5) discard;\r
\r
        if (sliceHeight > maxHeight){ // || distFromCenter > thickness * (h - sliceHeight)) {\r
            discard;\r
        }\r
    }\r
\r
    vec3 finalColor;\r
    if(!useColorTexture){\r
        float progression = map(sliceHeight, colors[0].stamp, colors[1].stamp, 0.f, 1.f);        \r
        finalColor = mix(colors[0].color, colors[1].color, progression);\r
        // finalColor = vec3(mod(UV, vec2(1.0)), 0.5) *progression;\r
    } else {\r
        finalColor = texture(colorTexture, fragUV * colorTextureScale).rgb * sliceHeight;\r
    }\r
\r
    if(applyFog){\r
        vec3 srgb = pow(clearColor, vec3(1.0/2.2));\r
        float depth = length(fragUV - vec2(0.5));\r
        float viewRange = smoothstep(0.f, 1.f, depth * 8.f);\r
\r
        vec3 linearA = toLinear(finalColor);\r
        vec3 linearB = toLinear(srgb);\r
        vec3 mixedLinear = mix(linearA, linearB, viewRange);\r
        finalColor = toSRGB(mixedLinear);\r
    }\r
    gl_FragColor = vec4(finalColor, 1.0);\r
\r
\r
    // float fogFactor = smoothstep(fogNear, fogFar, vFogDepth);\r
    // gl_FragColor.rgb = mix(finalColor, fogColor, fogFactor);\r
}\r
`,sA=`attribute float offset;\r
attribute float height;\r
\r
varying vec2 fragUV;\r
varying float sliceHeight;\r
varying float vFogDepth;\r
\r
vec3 displacementDir = vec3(0,-1,0);\r
uniform float curvature;\r
uniform float displacementStrength;\r
uniform sampler2D heightMap;\r
\r
uniform vec2 rotationalForce;// = 0.05f;\r
\r
mat3 extractRotationMatrix( mat4 mat ) {\r
    return mat3( mat[0].xyz, mat[1].xyz, mat[2].xyz );\r
}\r
\r
vec3 getCameraPosition(mat4 viewMatrix) {\r
    mat3 rot = mat3(viewMatrix);\r
    vec3 t = vec3(viewMatrix[3]);\r
    return -transpose(rot) * t;\r
}\r
\r
void main() {\r
    fragUV = uv;\r
    sliceHeight = height;\r
    mat3 invRot = inverse(extractRotationMatrix(modelMatrix)); \r
\r
    vec3 tangent;\r
    if(normal.y >= 0.99f){\r
        tangent = cross(vec3(1, 0, 0), normal) ;\r
    } else {\r
        tangent = cross(vec3(0,1,0), normal);\r
    }\r
    vec3 up = cross(normal, tangent);\r
\r
    // float clampedRotationalForce = clamp(rotationalForce, -0.1f, 0.1f);\r
    vec3 rotationalVector = tangent * rotationalForce.x + up * rotationalForce.y;\r
    \r
    vec3 pos = position + texture(heightMap, uv).x * normal;\r
    pos += rotationalVector * height;\r
    pos += normal * offset * (1.f + length(rotationalVector));\r
    pos += invRot * displacementDir * displacementStrength * pow(height, curvature);\r
    \r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\r
}`;function Rc(n,e){return new He().copy(n).add(e)}function Cc(n,e){return new He().copy(n).sub(e)}function Ta(n,e){return new He().copy(n).multiplyScalar(e)}function Kd(n,e){return new He().copy(n).divideScalar(e)}const Jd=3.14159265359;class oA{constructor(e=4,t=.35,i=0,r){gr(this,"xp");gr(this,"y");gr(this,"yd");gr(this,"k1");gr(this,"k2");gr(this,"k3");const s=2*Jd*e;this.k1=t/(Jd*e),this.k2=1/(s*s),this.k3=i*t/s,this.xp=r,this.y=r,this.yd=new He(0,0)}update(e,t,i){i||(i=Kd(Cc(t,this.xp),e),this.xp=t),this.y=Rc(this.y,Ta(this.yd,e));const r=Cc(Cc(Rc(Ta(i,this.k3),t),this.y),Ta(this.yd,this.k1));return this.yd=Rc(Kd(Ta(r,e),this.k2),this.yd),(Number.isNaN(this.yd.x)||Number.isNaN(this.yd.y))&&(this.yd=new He(0,0)),this.y}}var gn=(n=>(n.LANGUAGE="language",n.TOOL="tool",n.NONE="none",n))(gn||{}),Fr=(n=>(n.ROUND="ROUND",n.SQUARE="SQUARE",n.PINATA="PINATA",n))(Fr||{});function za(){const i=new Uint8Array(400),r=new We(0,0,0),s=Math.floor(r.r*255),o=Math.floor(r.g*255),a=Math.floor(r.b*255);for(let c=0;c<100;c++){const u=c*4;i[u]=s,i[u+1]=o,i[u+2]=a,i[u+3]=255}const l=new Af(i,10,10);return l.needsUpdate=!0,l}function Zd(n,e="heightMap"){n.furMaterial.uniforms[e].value=za()}function Ga(n,e,t="heightMap"){n.furMaterial.uniforms[t].value=new Go().load(e,i=>{i.needsUpdate=!0,i.wrapS=kn,i.wrapT=kn,i.minFilter=kt,i.magFilter=kt,i.generateMipmaps=!1})}function Ou(n,e){let t="";if(e===Fr.ROUND)t=nA;else if(e===Fr.SQUARE)t=Lg;else if(e===Fr.PINATA)t=iA;else{console.error("Shape not found");return}n.furMaterial.uniforms.shapeTexture.value=new Go().load(t,i=>{i.wrapS=ai,i.wrapT=ai,i.minFilter=kt,i.magFilter=kt,i.generateMipmaps=!1,i.needsUpdate=!0})}const kf=()=>({scale:300,colorTextureScale:1,threshold:.5,thicknessTop:.01,thicknessBot:.85,curvature:3,displacementStrength:.01,colors:[{color:new z(0,0,0),stamp:0},{color:new z(.9,.5,.05),stamp:1}],nbInstances:30,totalHeight:.3,rotationalForce:new He(0,0),applyFog:!1,uvOffset:new He(0,0),useColorTexture:!1});function Ig(n,e=kf(),t=new We){const i=new di({uniforms:{voronoise:{value:za()},heightMap:{value:za()},shapeTexture:{value:new Go().load(Lg,s=>{s.wrapS=kn,s.wrapT=kn,s.minFilter=kt,s.magFilter=kt,s.generateMipmaps=!1})},scale:{value:e.scale},colorTextureScale:{value:e.colorTextureScale},threshold:{value:e.threshold},thicknessBot:{value:e.thicknessBot},thicknessTop:{value:e.thicknessTop},curvature:{value:e.curvature},displacementStrength:{value:e.displacementStrength},rotationalForce:{value:e.rotationalForce},colors:{value:e.colors},useColorTexture:{value:!1},colorTexture:{value:za()},clearColor:{value:t},uvOffset:{value:e.uvOffset},applyFog:{value:e.applyFog}},vertexShader:sA,fragmentShader:rA}),r={baseGeometry:n,properties:e,furMaterial:i,fur:new Rf(n,i,1),furPhysic:new oA(4,.35,0,new He(0,0))};return as(r),r}function Fu(n){const{furMaterial:e,properties:t}=n;for(const i in t)e.uniforms[i]&&(e.uniforms[i].value=t[i])}function aA(n){const e=new Cn().copy(n.baseGeometry),t=new Float32Array(n.properties.nbInstances);for(let r=0;r<n.properties.nbInstances;r++)t[r]=r/(n.properties.nbInstances-1)*n.properties.totalHeight/10;e.setAttribute("offset",new Lo(t,1));const i=new Float32Array(n.properties.nbInstances);for(let r=0;r<n.properties.nbInstances;r++)i[r]=r/(n.properties.nbInstances-1);e.setAttribute("height",new Lo(i,1)),n.fur.copy(new Rf(e,n.furMaterial,n.properties.nbInstances))}function as(n){n.fur&&n.fur.dispose(),aA(n)}const lA=`uniform sampler2D noiseTexture;\r
varying vec2 fragUV;\r
const float scale = 0.75f;\r
uniform float delta;\r
\r
\r
//////// taken from shaderToy\r
const uint k = 1103515245U;\r
vec3 hash33( uvec3 x )\r
{\r
    x = ((x>>8U)^x.yzx)*k;\r
    x = ((x>>8U)^x.yzx)*k;\r
    x = ((x>>8U)^x.yzx)*k;\r
    \r
    return vec3(x)*(1.0/float(0xffffffffU));\r
}\r
///////\r
\r
float R(float v, float l0, float h0, float ln, float hn){\r
    float num = (v - l0) * (hn - ln);\r
    float denom = h0 - l0;\r
    return ln + (num / denom);\r
}\r
\r
void main() {\r
    // vec3 rand = hash33(uvec3(fragUV.x * 50.0, 0, 0));\r
    float rayIntensity = texture(noiseTexture, vec2(fragUV.x, delta)).r;\r
\r
    float botIntensity = R(fragUV.y, 0.5f, 0.f, 1.f, 0.f);\r
    float intensity = rayIntensity * rayIntensity * botIntensity * scale;\r
    gl_FragColor = vec4(1,1,1, intensity);    \r
}\r
`,cA=`varying vec2 fragUV;\r
\r
void main() {\r
    fragUV = uv;\r
\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
}`,Bu="/assets/base_256-hilLT1wI.png";function uA(n,e,t){const i=new If(t,e,n,255),r=new di({fragmentShader:lA,vertexShader:cA,transparent:!0,side:Xn,uniforms:{noiseTexture:{value:new Go().load(Bu,s=>{s.wrapS=kn,s.wrapT=kn})},delta:{value:0}}});return new vn(i,r)}function fA(n){let e,t,i;const r=yt(0);let s=performance.now();const o=[],a=yt(kf()),l=new He,c=[],u=new He(0,0);function f(y){const S=new He(0,y=="front"?1:-1);u.add(S.multiplyScalar(1)),l.setX(y=="front"?.1:-.1)}function h(y,S,v){const L=S-y;return y+L*v}function p(){r.value=(performance.now()-s)/1e3,s=performance.now(),a.value.uvOffset.y+=u.y*r.value,a.value.uvOffset.y<0?a.value.uvOffset.y+=1:a.value.uvOffset.y>1&&(a.value.uvOffset.y-=1),u.y=h(u.y,0,r.value*10),m(r.value,l),l.setX(0),l.setY(0),o.forEach(y=>{Fu(y)}),c.forEach(y=>{y.uniforms.delta.value+=r.value*.01}),e&&t&&(i==null||i.render(e,t))}function _(y,S){e=new mg,t=new tn(75,y.width/y.height,.1,1e3),i=new Rg({canvas:y,context:S}),i.setSize(y.width,y.height),i.setAnimationLoop(p),i.setClearColor(new We(31/255,71/255,59/255))}function x(){t==null||t.translateZ(1),a.value.scale=2500,a.value.threshold=.1,a.value.displacementStrength=.01,a.value.thicknessBot=1,a.value.thicknessTop=1,a.value.totalHeight=1,a.value.nbInstances=45,a.value.colors[0].color=new z(.078,.22,.173),a.value.colors[1].color=new z(.325,.569,.235),a.value.applyFog=!0;const y=new Us(10,10).rotateX(Ha.degToRad(-90)).rotateY(Ha.degToRad(10)).translate(0,-.5,.5),S=Ig(y,a.value,i==null?void 0:i.getClearColor(new We));Ou(S,Fr.ROUND),Fu(S),e==null||e.add(S.fur),o.push(S),Ga(S,Cg,"colorTexture");const v=uA(6,1.5,.1);v.translateZ(-3),v.translateX(-4),v.translateY(3),v.rotateY(Ha.degToRad(90)),c.push(v.material),e==null||e.add(v)}function m(y,S){o.forEach(v=>{v.properties.rotationalForce=v.furPhysic.update(y,S)})}function d(y,S){t&&(t.aspect=y/S,t.updateProjectionMatrix(),i==null||i.setSize(y,S))}return{canva:n,delta:r,camera:t,movePlaine:f,initRender:_,initScene:x,resize:d}}const hA=Rt({__name:"SceneComponent",setup(n,{expose:e}){const t=yt(null),{movePlaine:i,initRender:r,initScene:s,resize:o}=fA(t);return Xi(()=>{if(window.addEventListener("resize",()=>{t.value&&(t.value.width=window.innerWidth,t.value.height=window.innerHeight,o(window.innerWidth,window.innerHeight))}),t.value instanceof HTMLCanvasElement){t.value.width=window.innerWidth,t.value.height=window.innerHeight;const a=t.value.getContext("webgl2");if(a)r(t.value,a),s();else throw new Error("WebGL2 context not available")}else console.error("Canvas reference is not an HTMLCanvasElement")}),e({movePlaine:i}),(a,l)=>(we(),Ve("canvas",{ref_key:"canva",ref:t,class:"fullscreen-canvas"},null,512))}}),dA=Rn(hA,[["__scopeId","data-v-c1fa78c0"]]),pA={class:"tag"},mA=Rt({__name:"TechnologieTagComponent",props:{name:{}},setup(n){return(e,t)=>(we(),Ve("div",pA,[ne("h4",null,et(e.name),1)]))}}),Pg=Rn(mA,[["__scopeId","data-v-4ecf1b1a"]]);function Dg(n){const e=n.scrollWidth>n.clientWidth,t=n.scrollHeight>n.clientHeight;return e||t}function nn(n){return n.charAt(0).toUpperCase()+n.slice(1)}/*!
  * shared v11.1.9
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */const hl=typeof window<"u",fr=(n,e=!1)=>e?Symbol.for(n):Symbol(n),gA=(n,e,t)=>_A({l:n,k:e,s:t}),_A=n=>JSON.stringify(n).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),Bt=n=>typeof n=="number"&&isFinite(n),vA=n=>Hf(n)==="[object Date]",Ps=n=>Hf(n)==="[object RegExp]",Dl=n=>it(n)&&Object.keys(n).length===0,Ht=Object.assign,xA=Object.create,bt=(n=null)=>xA(n);let Qd;const Nr=()=>Qd||(Qd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:bt());function ep(n){return n.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const yA=Object.prototype.hasOwnProperty;function qn(n,e){return yA.call(n,e)}const Ut=Array.isArray,Lt=n=>typeof n=="function",be=n=>typeof n=="string",ct=n=>typeof n=="boolean",ft=n=>n!==null&&typeof n=="object",SA=n=>ft(n)&&Lt(n.then)&&Lt(n.catch),Ng=Object.prototype.toString,Hf=n=>Ng.call(n),it=n=>Hf(n)==="[object Object]",MA=n=>n==null?"":Ut(n)||it(n)&&n.toString===Ng?JSON.stringify(n,null,2):String(n);function Vf(n,e=""){return n.reduce((t,i,r)=>r===0?t+i:t+e+i,"")}function EA(n,e){typeof console<"u"&&(console.warn("[intlify] "+n),e&&console.warn(e.stack))}const ba=n=>!ft(n)||Ut(n);function Wa(n,e){if(ba(n)||ba(e))throw new Error("Invalid value");const t=[{src:n,des:e}];for(;t.length;){const{src:i,des:r}=t.pop();Object.keys(i).forEach(s=>{s!=="__proto__"&&(ft(i[s])&&!ft(r[s])&&(r[s]=Array.isArray(i[s])?[]:bt()),ba(r[s])||ba(i[s])?r[s]=i[s]:t.push({src:i[s],des:r[s]}))})}}/*!
  * message-compiler v11.1.9
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function TA(n,e,t){return{line:n,column:e,offset:t}}function ku(n,e,t){return{start:n,end:e}}const _t={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14},bA=17;function Nl(n,e,t={}){const{domain:i,messages:r,args:s}=t,o=n,a=new SyntaxError(String(o));return a.code=n,e&&(a.location=e),a.domain=i,a}function AA(n){throw n}const Ai=" ",wA="\r",cn=`
`,RA="\u2028",CA="\u2029";function LA(n){const e=n;let t=0,i=1,r=1,s=0;const o=R=>e[R]===wA&&e[R+1]===cn,a=R=>e[R]===cn,l=R=>e[R]===CA,c=R=>e[R]===RA,u=R=>o(R)||a(R)||l(R)||c(R),f=()=>t,h=()=>i,p=()=>r,_=()=>s,x=R=>o(R)||l(R)||c(R)?cn:e[R],m=()=>x(t),d=()=>x(t+s);function y(){return s=0,u(t)&&(i++,r=0),o(t)&&t++,t++,r++,e[t]}function S(){return o(t+s)&&s++,s++,e[t+s]}function v(){t=0,i=1,r=1,s=0}function L(R=0){s=R}function I(){const R=t+s;for(;R!==t;)y();s=0}return{index:f,line:h,column:p,peekOffset:_,charAt:x,currentChar:m,currentPeek:d,next:y,peek:S,reset:v,resetPeek:L,skipToPeek:I}}const Qi=void 0,IA=".",tp="'",PA="tokenizer";function DA(n,e={}){const t=e.location!==!1,i=LA(n),r=()=>i.index(),s=()=>TA(i.line(),i.column(),i.index()),o=s(),a=r(),l={currentType:13,offset:a,startLoc:o,endLoc:o,lastType:13,lastOffset:a,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:u}=e;function f(A,C,U,...V){const fe=c();if(C.column+=U,C.offset+=U,u){const T=t?ku(fe.startLoc,C):null,g=Nl(A,T,{domain:PA,args:V});u(g)}}function h(A,C,U){A.endLoc=s(),A.currentType=C;const V={type:C};return t&&(V.loc=ku(A.startLoc,A.endLoc)),U!=null&&(V.value=U),V}const p=A=>h(A,13);function _(A,C){return A.currentChar()===C?(A.next(),C):(f(_t.EXPECTED_TOKEN,s(),0,C),"")}function x(A){let C="";for(;A.currentPeek()===Ai||A.currentPeek()===cn;)C+=A.currentPeek(),A.peek();return C}function m(A){const C=x(A);return A.skipToPeek(),C}function d(A){if(A===Qi)return!1;const C=A.charCodeAt(0);return C>=97&&C<=122||C>=65&&C<=90||C===95}function y(A){if(A===Qi)return!1;const C=A.charCodeAt(0);return C>=48&&C<=57}function S(A,C){const{currentType:U}=C;if(U!==2)return!1;x(A);const V=d(A.currentPeek());return A.resetPeek(),V}function v(A,C){const{currentType:U}=C;if(U!==2)return!1;x(A);const V=A.currentPeek()==="-"?A.peek():A.currentPeek(),fe=y(V);return A.resetPeek(),fe}function L(A,C){const{currentType:U}=C;if(U!==2)return!1;x(A);const V=A.currentPeek()===tp;return A.resetPeek(),V}function I(A,C){const{currentType:U}=C;if(U!==7)return!1;x(A);const V=A.currentPeek()===".";return A.resetPeek(),V}function R(A,C){const{currentType:U}=C;if(U!==8)return!1;x(A);const V=d(A.currentPeek());return A.resetPeek(),V}function D(A,C){const{currentType:U}=C;if(!(U===7||U===11))return!1;x(A);const V=A.currentPeek()===":";return A.resetPeek(),V}function E(A,C){const{currentType:U}=C;if(U!==9)return!1;const V=()=>{const T=A.currentPeek();return T==="{"?d(A.peek()):T==="@"||T==="|"||T===":"||T==="."||T===Ai||!T?!1:T===cn?(A.peek(),V()):F(A,!1)},fe=V();return A.resetPeek(),fe}function M(A){x(A);const C=A.currentPeek()==="|";return A.resetPeek(),C}function F(A,C=!0){const U=(fe=!1,T="")=>{const g=A.currentPeek();return g==="{"||g==="@"||!g?fe:g==="|"?!(T===Ai||T===cn):g===Ai?(A.peek(),U(!0,Ai)):g===cn?(A.peek(),U(!0,cn)):!0},V=U();return C&&A.resetPeek(),V}function Y(A,C){const U=A.currentChar();return U===Qi?Qi:C(U)?(A.next(),U):null}function $(A){const C=A.charCodeAt(0);return C>=97&&C<=122||C>=65&&C<=90||C>=48&&C<=57||C===95||C===36}function ie(A){return Y(A,$)}function G(A){const C=A.charCodeAt(0);return C>=97&&C<=122||C>=65&&C<=90||C>=48&&C<=57||C===95||C===36||C===45}function B(A){return Y(A,G)}function q(A){const C=A.charCodeAt(0);return C>=48&&C<=57}function H(A){return Y(A,q)}function le(A){const C=A.charCodeAt(0);return C>=48&&C<=57||C>=65&&C<=70||C>=97&&C<=102}function pe(A){return Y(A,le)}function Ae(A){let C="",U="";for(;C=H(A);)U+=C;return U}function Be(A){let C="";for(;;){const U=A.currentChar();if(U==="{"||U==="}"||U==="@"||U==="|"||!U)break;if(U===Ai||U===cn)if(F(A))C+=U,A.next();else{if(M(A))break;C+=U,A.next()}else C+=U,A.next()}return C}function ot(A){m(A);let C="",U="";for(;C=B(A);)U+=C;return A.currentChar()===Qi&&f(_t.UNTERMINATED_CLOSING_BRACE,s(),0),U}function re(A){m(A);let C="";return A.currentChar()==="-"?(A.next(),C+=`-${Ae(A)}`):C+=Ae(A),A.currentChar()===Qi&&f(_t.UNTERMINATED_CLOSING_BRACE,s(),0),C}function me(A){return A!==tp&&A!==cn}function Re(A){m(A),_(A,"'");let C="",U="";for(;C=Y(A,me);)C==="\\"?U+=ge(A):U+=C;const V=A.currentChar();return V===cn||V===Qi?(f(_t.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,s(),0),V===cn&&(A.next(),_(A,"'")),U):(_(A,"'"),U)}function ge(A){const C=A.currentChar();switch(C){case"\\":case"'":return A.next(),`\\${C}`;case"u":return Le(A,C,4);case"U":return Le(A,C,6);default:return f(_t.UNKNOWN_ESCAPE_SEQUENCE,s(),0,C),""}}function Le(A,C,U){_(A,C);let V="";for(let fe=0;fe<U;fe++){const T=pe(A);if(!T){f(_t.INVALID_UNICODE_ESCAPE_SEQUENCE,s(),0,`\\${C}${V}${A.currentChar()}`);break}V+=T}return`\\${C}${V}`}function Qe(A){return A!=="{"&&A!=="}"&&A!==Ai&&A!==cn}function Oe(A){m(A);let C="",U="";for(;C=Y(A,Qe);)U+=C;return U}function St(A){let C="",U="";for(;C=ie(A);)U+=C;return U}function N(A){const C=U=>{const V=A.currentChar();return V==="{"||V==="@"||V==="|"||V==="("||V===")"||!V||V===Ai?U:(U+=V,A.next(),C(U))};return C("")}function O(A){m(A);const C=_(A,"|");return m(A),C}function b(A,C){let U=null;switch(A.currentChar()){case"{":return C.braceNest>=1&&f(_t.NOT_ALLOW_NEST_PLACEHOLDER,s(),0),A.next(),U=h(C,2,"{"),m(A),C.braceNest++,U;case"}":return C.braceNest>0&&C.currentType===2&&f(_t.EMPTY_PLACEHOLDER,s(),0),A.next(),U=h(C,3,"}"),C.braceNest--,C.braceNest>0&&m(A),C.inLinked&&C.braceNest===0&&(C.inLinked=!1),U;case"@":return C.braceNest>0&&f(_t.UNTERMINATED_CLOSING_BRACE,s(),0),U=se(A,C)||p(C),C.braceNest=0,U;default:{let fe=!0,T=!0,g=!0;if(M(A))return C.braceNest>0&&f(_t.UNTERMINATED_CLOSING_BRACE,s(),0),U=h(C,1,O(A)),C.braceNest=0,C.inLinked=!1,U;if(C.braceNest>0&&(C.currentType===4||C.currentType===5||C.currentType===6))return f(_t.UNTERMINATED_CLOSING_BRACE,s(),0),C.braceNest=0,ee(A,C);if(fe=S(A,C))return U=h(C,4,ot(A)),m(A),U;if(T=v(A,C))return U=h(C,5,re(A)),m(A),U;if(g=L(A,C))return U=h(C,6,Re(A)),m(A),U;if(!fe&&!T&&!g)return U=h(C,12,Oe(A)),f(_t.INVALID_TOKEN_IN_PLACEHOLDER,s(),0,U.value),m(A),U;break}}return U}function se(A,C){const{currentType:U}=C;let V=null;const fe=A.currentChar();switch((U===7||U===8||U===11||U===9)&&(fe===cn||fe===Ai)&&f(_t.INVALID_LINKED_FORMAT,s(),0),fe){case"@":return A.next(),V=h(C,7,"@"),C.inLinked=!0,V;case".":return m(A),A.next(),h(C,8,".");case":":return m(A),A.next(),h(C,9,":");default:return M(A)?(V=h(C,1,O(A)),C.braceNest=0,C.inLinked=!1,V):I(A,C)||D(A,C)?(m(A),se(A,C)):R(A,C)?(m(A),h(C,11,St(A))):E(A,C)?(m(A),fe==="{"?b(A,C)||V:h(C,10,N(A))):(U===7&&f(_t.INVALID_LINKED_FORMAT,s(),0),C.braceNest=0,C.inLinked=!1,ee(A,C))}}function ee(A,C){let U={type:13};if(C.braceNest>0)return b(A,C)||p(C);if(C.inLinked)return se(A,C)||p(C);switch(A.currentChar()){case"{":return b(A,C)||p(C);case"}":return f(_t.UNBALANCED_CLOSING_BRACE,s(),0),A.next(),h(C,3,"}");case"@":return se(A,C)||p(C);default:{if(M(A))return U=h(C,1,O(A)),C.braceNest=0,C.inLinked=!1,U;if(F(A))return h(C,0,Be(A));break}}return U}function te(){const{currentType:A,offset:C,startLoc:U,endLoc:V}=l;return l.lastType=A,l.lastOffset=C,l.lastStartLoc=U,l.lastEndLoc=V,l.offset=r(),l.startLoc=s(),i.currentChar()===Qi?h(l,13):ee(i,l)}return{nextToken:te,currentOffset:r,currentPosition:s,context:c}}const NA="parser",UA=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function OA(n,e,t){switch(n){case"\\\\":return"\\";case"\\'":return"'";default:{const i=parseInt(e||t,16);return i<=55295||i>=57344?String.fromCodePoint(i):"�"}}}function FA(n={}){const e=n.location!==!1,{onError:t}=n;function i(d,y,S,v,...L){const I=d.currentPosition();if(I.offset+=v,I.column+=v,t){const R=e?ku(S,I):null,D=Nl(y,R,{domain:NA,args:L});t(D)}}function r(d,y,S){const v={type:d};return e&&(v.start=y,v.end=y,v.loc={start:S,end:S}),v}function s(d,y,S,v){e&&(d.end=y,d.loc&&(d.loc.end=S))}function o(d,y){const S=d.context(),v=r(3,S.offset,S.startLoc);return v.value=y,s(v,d.currentOffset(),d.currentPosition()),v}function a(d,y){const S=d.context(),{lastOffset:v,lastStartLoc:L}=S,I=r(5,v,L);return I.index=parseInt(y,10),d.nextToken(),s(I,d.currentOffset(),d.currentPosition()),I}function l(d,y){const S=d.context(),{lastOffset:v,lastStartLoc:L}=S,I=r(4,v,L);return I.key=y,d.nextToken(),s(I,d.currentOffset(),d.currentPosition()),I}function c(d,y){const S=d.context(),{lastOffset:v,lastStartLoc:L}=S,I=r(9,v,L);return I.value=y.replace(UA,OA),d.nextToken(),s(I,d.currentOffset(),d.currentPosition()),I}function u(d){const y=d.nextToken(),S=d.context(),{lastOffset:v,lastStartLoc:L}=S,I=r(8,v,L);return y.type!==11?(i(d,_t.UNEXPECTED_EMPTY_LINKED_MODIFIER,S.lastStartLoc,0),I.value="",s(I,v,L),{nextConsumeToken:y,node:I}):(y.value==null&&i(d,_t.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,ii(y)),I.value=y.value||"",s(I,d.currentOffset(),d.currentPosition()),{node:I})}function f(d,y){const S=d.context(),v=r(7,S.offset,S.startLoc);return v.value=y,s(v,d.currentOffset(),d.currentPosition()),v}function h(d){const y=d.context(),S=r(6,y.offset,y.startLoc);let v=d.nextToken();if(v.type===8){const L=u(d);S.modifier=L.node,v=L.nextConsumeToken||d.nextToken()}switch(v.type!==9&&i(d,_t.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,ii(v)),v=d.nextToken(),v.type===2&&(v=d.nextToken()),v.type){case 10:v.value==null&&i(d,_t.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,ii(v)),S.key=f(d,v.value||"");break;case 4:v.value==null&&i(d,_t.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,ii(v)),S.key=l(d,v.value||"");break;case 5:v.value==null&&i(d,_t.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,ii(v)),S.key=a(d,v.value||"");break;case 6:v.value==null&&i(d,_t.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,ii(v)),S.key=c(d,v.value||"");break;default:{i(d,_t.UNEXPECTED_EMPTY_LINKED_KEY,y.lastStartLoc,0);const L=d.context(),I=r(7,L.offset,L.startLoc);return I.value="",s(I,L.offset,L.startLoc),S.key=I,s(S,L.offset,L.startLoc),{nextConsumeToken:v,node:S}}}return s(S,d.currentOffset(),d.currentPosition()),{node:S}}function p(d){const y=d.context(),S=y.currentType===1?d.currentOffset():y.offset,v=y.currentType===1?y.endLoc:y.startLoc,L=r(2,S,v);L.items=[];let I=null;do{const E=I||d.nextToken();switch(I=null,E.type){case 0:E.value==null&&i(d,_t.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,ii(E)),L.items.push(o(d,E.value||""));break;case 5:E.value==null&&i(d,_t.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,ii(E)),L.items.push(a(d,E.value||""));break;case 4:E.value==null&&i(d,_t.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,ii(E)),L.items.push(l(d,E.value||""));break;case 6:E.value==null&&i(d,_t.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,ii(E)),L.items.push(c(d,E.value||""));break;case 7:{const M=h(d);L.items.push(M.node),I=M.nextConsumeToken||null;break}}}while(y.currentType!==13&&y.currentType!==1);const R=y.currentType===1?y.lastOffset:d.currentOffset(),D=y.currentType===1?y.lastEndLoc:d.currentPosition();return s(L,R,D),L}function _(d,y,S,v){const L=d.context();let I=v.items.length===0;const R=r(1,y,S);R.cases=[],R.cases.push(v);do{const D=p(d);I||(I=D.items.length===0),R.cases.push(D)}while(L.currentType!==13);return I&&i(d,_t.MUST_HAVE_MESSAGES_IN_PLURAL,S,0),s(R,d.currentOffset(),d.currentPosition()),R}function x(d){const y=d.context(),{offset:S,startLoc:v}=y,L=p(d);return y.currentType===13?L:_(d,S,v,L)}function m(d){const y=DA(d,Ht({},n)),S=y.context(),v=r(0,S.offset,S.startLoc);return e&&v.loc&&(v.loc.source=d),v.body=x(y),n.onCacheKey&&(v.cacheKey=n.onCacheKey(d)),S.currentType!==13&&i(y,_t.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,d[S.offset]||""),s(v,y.currentOffset(),y.currentPosition()),v}return{parse:m}}function ii(n){if(n.type===13)return"EOF";const e=(n.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function BA(n,e={}){const t={ast:n,helpers:new Set};return{context:()=>t,helper:s=>(t.helpers.add(s),s)}}function np(n,e){for(let t=0;t<n.length;t++)zf(n[t],e)}function zf(n,e){switch(n.type){case 1:np(n.cases,e),e.helper("plural");break;case 2:np(n.items,e);break;case 6:{zf(n.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function kA(n,e={}){const t=BA(n);t.helper("normalize"),n.body&&zf(n.body,t);const i=t.context();n.helpers=Array.from(i.helpers)}function HA(n){const e=n.body;return e.type===2?ip(e):e.cases.forEach(t=>ip(t)),n}function ip(n){if(n.items.length===1){const e=n.items[0];(e.type===3||e.type===9)&&(n.static=e.value,delete e.value)}else{const e=[];for(let t=0;t<n.items.length;t++){const i=n.items[t];if(!(i.type===3||i.type===9)||i.value==null)break;e.push(i.value)}if(e.length===n.items.length){n.static=Vf(e);for(let t=0;t<n.items.length;t++){const i=n.items[t];(i.type===3||i.type===9)&&delete i.value}}}}function ls(n){switch(n.t=n.type,n.type){case 0:{const e=n;ls(e.body),e.b=e.body,delete e.body;break}case 1:{const e=n,t=e.cases;for(let i=0;i<t.length;i++)ls(t[i]);e.c=t,delete e.cases;break}case 2:{const e=n,t=e.items;for(let i=0;i<t.length;i++)ls(t[i]);e.i=t,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=n;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=n;ls(e.key),e.k=e.key,delete e.key,e.modifier&&(ls(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=n;e.i=e.index,delete e.index;break}case 4:{const e=n;e.k=e.key,delete e.key;break}}delete n.type}function VA(n,e){const{filename:t,breakLineCode:i,needIndent:r}=e,s=e.location!==!1,o={filename:t,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:i,needIndent:r,indentLevel:0};s&&n.loc&&(o.source=n.loc.source);const a=()=>o;function l(x,m){o.code+=x}function c(x,m=!0){const d=m?i:"";l(r?d+"  ".repeat(x):d)}function u(x=!0){const m=++o.indentLevel;x&&c(m)}function f(x=!0){const m=--o.indentLevel;x&&c(m)}function h(){c(o.indentLevel)}return{context:a,push:l,indent:u,deindent:f,newline:h,helper:x=>`_${x}`,needIndent:()=>o.needIndent}}function zA(n,e){const{helper:t}=n;n.push(`${t("linked")}(`),Ds(n,e.key),e.modifier?(n.push(", "),Ds(n,e.modifier),n.push(", _type")):n.push(", undefined, _type"),n.push(")")}function GA(n,e){const{helper:t,needIndent:i}=n;n.push(`${t("normalize")}([`),n.indent(i());const r=e.items.length;for(let s=0;s<r&&(Ds(n,e.items[s]),s!==r-1);s++)n.push(", ");n.deindent(i()),n.push("])")}function WA(n,e){const{helper:t,needIndent:i}=n;if(e.cases.length>1){n.push(`${t("plural")}([`),n.indent(i());const r=e.cases.length;for(let s=0;s<r&&(Ds(n,e.cases[s]),s!==r-1);s++)n.push(", ");n.deindent(i()),n.push("])")}}function XA(n,e){e.body?Ds(n,e.body):n.push("null")}function Ds(n,e){const{helper:t}=n;switch(e.type){case 0:XA(n,e);break;case 1:WA(n,e);break;case 2:GA(n,e);break;case 6:zA(n,e);break;case 8:n.push(JSON.stringify(e.value),e);break;case 7:n.push(JSON.stringify(e.value),e);break;case 5:n.push(`${t("interpolate")}(${t("list")}(${e.index}))`,e);break;case 4:n.push(`${t("interpolate")}(${t("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:n.push(JSON.stringify(e.value),e);break;case 3:n.push(JSON.stringify(e.value),e);break}}const jA=(n,e={})=>{const t=be(e.mode)?e.mode:"normal",i=be(e.filename)?e.filename:"message.intl";e.sourceMap;const r=e.breakLineCode!=null?e.breakLineCode:t==="arrow"?";":`
`,s=e.needIndent?e.needIndent:t!=="arrow",o=n.helpers||[],a=VA(n,{filename:i,breakLineCode:r,needIndent:s});a.push(t==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),a.indent(s),o.length>0&&(a.push(`const { ${Vf(o.map(u=>`${u}: _${u}`),", ")} } = ctx`),a.newline()),a.push("return "),Ds(a,n),a.deindent(s),a.push("}"),delete n.helpers;const{code:l,map:c}=a.context();return{ast:n,code:l,map:c?c.toJSON():void 0}};function $A(n,e={}){const t=Ht({},e),i=!!t.jit,r=!!t.minify,s=t.optimize==null?!0:t.optimize,a=FA(t).parse(n);return i?(s&&HA(a),r&&ls(a),{ast:a,code:""}):(kA(a,t),jA(a,t))}/*!
  * core-base v11.1.9
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function YA(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Nr().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Nr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function ui(n){return ft(n)&&Gf(n)===0&&(qn(n,"b")||qn(n,"body"))}const Ug=["b","body"];function qA(n){return hr(n,Ug)}const Og=["c","cases"];function KA(n){return hr(n,Og,[])}const Fg=["s","static"];function JA(n){return hr(n,Fg)}const Bg=["i","items"];function ZA(n){return hr(n,Bg,[])}const kg=["t","type"];function Gf(n){return hr(n,kg)}const Hg=["v","value"];function Aa(n,e){const t=hr(n,Hg);if(t!=null)return t;throw Io(e)}const Vg=["m","modifier"];function QA(n){return hr(n,Vg)}const zg=["k","key"];function ew(n){const e=hr(n,zg);if(e)return e;throw Io(6)}function hr(n,e,t){for(let i=0;i<e.length;i++){const r=e[i];if(qn(n,r)&&n[r]!=null)return n[r]}return t}const Gg=[...Ug,...Og,...Fg,...Bg,...zg,...Vg,...Hg,...kg];function Io(n){return new Error(`unhandled node type: ${n}`)}function Lc(n){return t=>tw(t,n)}function tw(n,e){const t=qA(e);if(t==null)throw Io(0);if(Gf(t)===1){const s=KA(t);return n.plural(s.reduce((o,a)=>[...o,rp(n,a)],[]))}else return rp(n,t)}function rp(n,e){const t=JA(e);if(t!=null)return n.type==="text"?t:n.normalize([t]);{const i=ZA(e).reduce((r,s)=>[...r,Hu(n,s)],[]);return n.normalize(i)}}function Hu(n,e){const t=Gf(e);switch(t){case 3:return Aa(e,t);case 9:return Aa(e,t);case 4:{const i=e;if(qn(i,"k")&&i.k)return n.interpolate(n.named(i.k));if(qn(i,"key")&&i.key)return n.interpolate(n.named(i.key));throw Io(t)}case 5:{const i=e;if(qn(i,"i")&&Bt(i.i))return n.interpolate(n.list(i.i));if(qn(i,"index")&&Bt(i.index))return n.interpolate(n.list(i.index));throw Io(t)}case 6:{const i=e,r=QA(i),s=ew(i);return n.linked(Hu(n,s),r?Hu(n,r):void 0,n.type)}case 7:return Aa(e,t);case 8:return Aa(e,t);default:throw new Error(`unhandled node on format message part: ${t}`)}}const nw=n=>n;let wa=bt();function iw(n,e={}){let t=!1;const i=e.onError||AA;return e.onError=r=>{t=!0,i(r)},{...$A(n,e),detectError:t}}function rw(n,e){if(!__INTLIFY_DROP_MESSAGE_COMPILER__&&be(n)){ct(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||nw)(n),r=wa[i];if(r)return r;const{ast:s,detectError:o}=iw(n,{...e,location:!1,jit:!0}),a=Lc(s);return o?a:wa[i]=a}else{const t=n.cacheKey;if(t){const i=wa[t];return i||(wa[t]=Lc(n))}else return Lc(n)}}let Po=null;function sw(n){Po=n}function ow(n,e,t){Po&&Po.emit("i18n:init",{timestamp:Date.now(),i18n:n,version:e,meta:t})}const aw=lw("function:translate");function lw(n){return e=>Po&&Po.emit(n,e)}const Ni={INVALID_ARGUMENT:bA,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},cw=24;function Ui(n){return Nl(n,null,void 0)}function Wf(n,e){return e.locale!=null?sp(e.locale):sp(n.locale)}let Ic;function sp(n){if(be(n))return n;if(Lt(n)){if(n.resolvedOnce&&Ic!=null)return Ic;if(n.constructor.name==="Function"){const e=n();if(SA(e))throw Ui(Ni.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return Ic=e}else throw Ui(Ni.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw Ui(Ni.NOT_SUPPORT_LOCALE_TYPE)}function uw(n,e,t){return[...new Set([t,...Ut(e)?e:ft(e)?Object.keys(e):be(e)?[e]:[t]])]}function Wg(n,e,t){const i=be(t)?t:Do,r=n;r.__localeChainCache||(r.__localeChainCache=new Map);let s=r.__localeChainCache.get(i);if(!s){s=[];let o=[t];for(;Ut(o);)o=op(s,o,e);const a=Ut(e)||!it(e)?e:e.default?e.default:null;o=be(a)?[a]:a,Ut(o)&&op(s,o,!1),r.__localeChainCache.set(i,s)}return s}function op(n,e,t){let i=!0;for(let r=0;r<e.length&&ct(i);r++){const s=e[r];be(s)&&(i=fw(n,e[r],t))}return i}function fw(n,e,t){let i;const r=e.split("-");do{const s=r.join("-");i=hw(n,s,t),r.splice(-1,1)}while(r.length&&i===!0);return i}function hw(n,e,t){let i=!1;if(!n.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const r=e.replace(/!/g,"");n.push(r),(Ut(t)||it(t))&&t[r]&&(i=t[r])}return i}const dr=[];dr[0]={w:[0],i:[3,0],"[":[4],o:[7]};dr[1]={w:[1],".":[2],"[":[4],o:[7]};dr[2]={w:[2],i:[3,0],0:[3,0]};dr[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};dr[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};dr[5]={"'":[4,0],o:8,l:[5,0]};dr[6]={'"':[4,0],o:8,l:[6,0]};const dw=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function pw(n){return dw.test(n)}function mw(n){const e=n.charCodeAt(0),t=n.charCodeAt(n.length-1);return e===t&&(e===34||e===39)?n.slice(1,-1):n}function gw(n){if(n==null)return"o";switch(n.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return n;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function _w(n){const e=n.trim();return n.charAt(0)==="0"&&isNaN(parseInt(n))?!1:pw(e)?mw(e):"*"+e}function vw(n){const e=[];let t=-1,i=0,r=0,s,o,a,l,c,u,f;const h=[];h[0]=()=>{o===void 0?o=a:o+=a},h[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},h[2]=()=>{h[0](),r++},h[3]=()=>{if(r>0)r--,i=4,h[0]();else{if(r=0,o===void 0||(o=_w(o),o===!1))return!1;h[1]()}};function p(){const _=n[t+1];if(i===5&&_==="'"||i===6&&_==='"')return t++,a="\\"+_,h[0](),!0}for(;i!==null;)if(t++,s=n[t],!(s==="\\"&&p())){if(l=gw(s),f=dr[i],c=f[l]||f.l||8,c===8||(i=c[0],c[1]!==void 0&&(u=h[c[1]],u&&(a=s,u()===!1))))return;if(i===7)return e}}const ap=new Map;function xw(n,e){return ft(n)?n[e]:null}function yw(n,e){if(!ft(n))return null;let t=ap.get(e);if(t||(t=vw(e),t&&ap.set(e,t)),!t)return null;const i=t.length;let r=n,s=0;for(;s<i;){const o=t[s];if(Gg.includes(o)&&ui(r))return null;const a=r[o];if(a===void 0||Lt(r))return null;r=a,s++}return r}const Sw="11.1.9",Ul=-1,Do="en-US",lp="",cp=n=>`${n.charAt(0).toLocaleUpperCase()}${n.substr(1)}`;function Mw(){return{upper:(n,e)=>e==="text"&&be(n)?n.toUpperCase():e==="vnode"&&ft(n)&&"__v_isVNode"in n?n.children.toUpperCase():n,lower:(n,e)=>e==="text"&&be(n)?n.toLowerCase():e==="vnode"&&ft(n)&&"__v_isVNode"in n?n.children.toLowerCase():n,capitalize:(n,e)=>e==="text"&&be(n)?cp(n):e==="vnode"&&ft(n)&&"__v_isVNode"in n?cp(n.children):n}}let Xg;function Ew(n){Xg=n}let jg;function Tw(n){jg=n}let $g;function bw(n){$g=n}let Yg=null;const Aw=n=>{Yg=n},ww=()=>Yg;let qg=null;const up=n=>{qg=n},Rw=()=>qg;let fp=0;function Cw(n={}){const e=Lt(n.onWarn)?n.onWarn:EA,t=be(n.version)?n.version:Sw,i=be(n.locale)||Lt(n.locale)?n.locale:Do,r=Lt(i)?Do:i,s=Ut(n.fallbackLocale)||it(n.fallbackLocale)||be(n.fallbackLocale)||n.fallbackLocale===!1?n.fallbackLocale:r,o=it(n.messages)?n.messages:Pc(r),a=it(n.datetimeFormats)?n.datetimeFormats:Pc(r),l=it(n.numberFormats)?n.numberFormats:Pc(r),c=Ht(bt(),n.modifiers,Mw()),u=n.pluralRules||bt(),f=Lt(n.missing)?n.missing:null,h=ct(n.missingWarn)||Ps(n.missingWarn)?n.missingWarn:!0,p=ct(n.fallbackWarn)||Ps(n.fallbackWarn)?n.fallbackWarn:!0,_=!!n.fallbackFormat,x=!!n.unresolving,m=Lt(n.postTranslation)?n.postTranslation:null,d=it(n.processor)?n.processor:null,y=ct(n.warnHtmlMessage)?n.warnHtmlMessage:!0,S=!!n.escapeParameter,v=Lt(n.messageCompiler)?n.messageCompiler:Xg,L=Lt(n.messageResolver)?n.messageResolver:jg||xw,I=Lt(n.localeFallbacker)?n.localeFallbacker:$g||uw,R=ft(n.fallbackContext)?n.fallbackContext:void 0,D=n,E=ft(D.__datetimeFormatters)?D.__datetimeFormatters:new Map,M=ft(D.__numberFormatters)?D.__numberFormatters:new Map,F=ft(D.__meta)?D.__meta:{};fp++;const Y={version:t,cid:fp,locale:i,fallbackLocale:s,messages:o,modifiers:c,pluralRules:u,missing:f,missingWarn:h,fallbackWarn:p,fallbackFormat:_,unresolving:x,postTranslation:m,processor:d,warnHtmlMessage:y,escapeParameter:S,messageCompiler:v,messageResolver:L,localeFallbacker:I,fallbackContext:R,onWarn:e,__meta:F};return Y.datetimeFormats=a,Y.numberFormats=l,Y.__datetimeFormatters=E,Y.__numberFormatters=M,__INTLIFY_PROD_DEVTOOLS__&&ow(Y,t,F),Y}const Pc=n=>({[n]:bt()});function Xf(n,e,t,i,r){const{missing:s,onWarn:o}=n;if(s!==null){const a=s(n,t,e,r);return be(a)?a:e}else return e}function Zs(n,e,t){const i=n;i.__localeChainCache=new Map,n.localeFallbacker(n,t,e)}function Lw(n,e){return n===e?!1:n.split("-")[0]===e.split("-")[0]}function Iw(n,e){const t=e.indexOf(n);if(t===-1)return!1;for(let i=t+1;i<e.length;i++)if(Lw(n,e[i]))return!0;return!1}function hp(n,...e){const{datetimeFormats:t,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:o}=n,{__datetimeFormatters:a}=n,[l,c,u,f]=Vu(...e),h=ct(u.missingWarn)?u.missingWarn:n.missingWarn;ct(u.fallbackWarn)?u.fallbackWarn:n.fallbackWarn;const p=!!u.part,_=Wf(n,u),x=o(n,r,_);if(!be(l)||l==="")return new Intl.DateTimeFormat(_,f).format(c);let m={},d,y=null;const S="datetime format";for(let I=0;I<x.length&&(d=x[I],m=t[d]||{},y=m[l],!it(y));I++)Xf(n,l,d,h,S);if(!it(y)||!be(d))return i?Ul:l;let v=`${d}__${l}`;Dl(f)||(v=`${v}__${JSON.stringify(f)}`);let L=a.get(v);return L||(L=new Intl.DateTimeFormat(d,Ht({},y,f)),a.set(v,L)),p?L.formatToParts(c):L.format(c)}const Kg=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Vu(...n){const[e,t,i,r]=n,s=bt();let o=bt(),a;if(be(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw Ui(Ni.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();a=new Date(c);try{a.toISOString()}catch{throw Ui(Ni.INVALID_ISO_DATE_ARGUMENT)}}else if(vA(e)){if(isNaN(e.getTime()))throw Ui(Ni.INVALID_DATE_ARGUMENT);a=e}else if(Bt(e))a=e;else throw Ui(Ni.INVALID_ARGUMENT);return be(t)?s.key=t:it(t)&&Object.keys(t).forEach(l=>{Kg.includes(l)?o[l]=t[l]:s[l]=t[l]}),be(i)?s.locale=i:it(i)&&(o=i),it(r)&&(o=r),[s.key||"",a,s,o]}function dp(n,e,t){const i=n;for(const r in t){const s=`${e}__${r}`;i.__datetimeFormatters.has(s)&&i.__datetimeFormatters.delete(s)}}function pp(n,...e){const{numberFormats:t,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:o}=n,{__numberFormatters:a}=n,[l,c,u,f]=zu(...e),h=ct(u.missingWarn)?u.missingWarn:n.missingWarn;ct(u.fallbackWarn)?u.fallbackWarn:n.fallbackWarn;const p=!!u.part,_=Wf(n,u),x=o(n,r,_);if(!be(l)||l==="")return new Intl.NumberFormat(_,f).format(c);let m={},d,y=null;const S="number format";for(let I=0;I<x.length&&(d=x[I],m=t[d]||{},y=m[l],!it(y));I++)Xf(n,l,d,h,S);if(!it(y)||!be(d))return i?Ul:l;let v=`${d}__${l}`;Dl(f)||(v=`${v}__${JSON.stringify(f)}`);let L=a.get(v);return L||(L=new Intl.NumberFormat(d,Ht({},y,f)),a.set(v,L)),p?L.formatToParts(c):L.format(c)}const Jg=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function zu(...n){const[e,t,i,r]=n,s=bt();let o=bt();if(!Bt(e))throw Ui(Ni.INVALID_ARGUMENT);const a=e;return be(t)?s.key=t:it(t)&&Object.keys(t).forEach(l=>{Jg.includes(l)?o[l]=t[l]:s[l]=t[l]}),be(i)?s.locale=i:it(i)&&(o=i),it(r)&&(o=r),[s.key||"",a,s,o]}function mp(n,e,t){const i=n;for(const r in t){const s=`${e}__${r}`;i.__numberFormatters.has(s)&&i.__numberFormatters.delete(s)}}const Pw=n=>n,Dw=n=>"",Nw="text",Uw=n=>n.length===0?"":Vf(n),Ow=MA;function gp(n,e){return n=Math.abs(n),e===2?n?n>1?1:0:1:n?Math.min(n,2):0}function Fw(n){const e=Bt(n.pluralIndex)?n.pluralIndex:-1;return n.named&&(Bt(n.named.count)||Bt(n.named.n))?Bt(n.named.count)?n.named.count:Bt(n.named.n)?n.named.n:e:e}function Bw(n,e){e.count||(e.count=n),e.n||(e.n=n)}function kw(n={}){const e=n.locale,t=Fw(n),i=ft(n.pluralRules)&&be(e)&&Lt(n.pluralRules[e])?n.pluralRules[e]:gp,r=ft(n.pluralRules)&&be(e)&&Lt(n.pluralRules[e])?gp:void 0,s=d=>d[i(t,d.length,r)],o=n.list||[],a=d=>o[d],l=n.named||bt();Bt(n.pluralIndex)&&Bw(t,l);const c=d=>l[d];function u(d,y){const S=Lt(n.messages)?n.messages(d,!!y):ft(n.messages)?n.messages[d]:!1;return S||(n.parent?n.parent.message(d):Dw)}const f=d=>n.modifiers?n.modifiers[d]:Pw,h=it(n.processor)&&Lt(n.processor.normalize)?n.processor.normalize:Uw,p=it(n.processor)&&Lt(n.processor.interpolate)?n.processor.interpolate:Ow,_=it(n.processor)&&be(n.processor.type)?n.processor.type:Nw,m={list:a,named:c,plural:s,linked:(d,...y)=>{const[S,v]=y;let L="text",I="";y.length===1?ft(S)?(I=S.modifier||I,L=S.type||L):be(S)&&(I=S||I):y.length===2&&(be(S)&&(I=S||I),be(v)&&(L=v||L));const R=u(d,!0)(m),D=L==="vnode"&&Ut(R)&&I?R[0]:R;return I?f(I)(D,L):D},message:u,type:_,interpolate:p,normalize:h,values:Ht(bt(),o,l)};return m}const _p=()=>"",Un=n=>Lt(n);function vp(n,...e){const{fallbackFormat:t,postTranslation:i,unresolving:r,messageCompiler:s,fallbackLocale:o,messages:a}=n,[l,c]=Gu(...e),u=ct(c.missingWarn)?c.missingWarn:n.missingWarn,f=ct(c.fallbackWarn)?c.fallbackWarn:n.fallbackWarn,h=ct(c.escapeParameter)?c.escapeParameter:n.escapeParameter,p=!!c.resolvedMessage,_=be(c.default)||ct(c.default)?ct(c.default)?s?l:()=>l:c.default:t?s?l:()=>l:null,x=t||_!=null&&(be(_)||Lt(_)),m=Wf(n,c);h&&Hw(c);let[d,y,S]=p?[l,m,a[m]||bt()]:Zg(n,l,m,o,f,u),v=d,L=l;if(!p&&!(be(v)||ui(v)||Un(v))&&x&&(v=_,L=v),!p&&(!(be(v)||ui(v)||Un(v))||!be(y)))return r?Ul:l;let I=!1;const R=()=>{I=!0},D=Un(v)?v:Qg(n,l,y,v,L,R);if(I)return v;const E=Gw(n,y,S,c),M=kw(E),F=Vw(n,D,M),Y=i?i(F,l):F;if(__INTLIFY_PROD_DEVTOOLS__){const $={timestamp:Date.now(),key:be(l)?l:Un(v)?v.key:"",locale:y||(Un(v)?v.locale:""),format:be(v)?v:Un(v)?v.source:"",message:Y};$.meta=Ht({},n.__meta,ww()||{}),aw($)}return Y}function Hw(n){Ut(n.list)?n.list=n.list.map(e=>be(e)?ep(e):e):ft(n.named)&&Object.keys(n.named).forEach(e=>{be(n.named[e])&&(n.named[e]=ep(n.named[e]))})}function Zg(n,e,t,i,r,s){const{messages:o,onWarn:a,messageResolver:l,localeFallbacker:c}=n,u=c(n,i,t);let f=bt(),h,p=null;const _="translate";for(let x=0;x<u.length&&(h=u[x],f=o[h]||bt(),(p=l(f,e))===null&&(p=f[e]),!(be(p)||ui(p)||Un(p)));x++)if(!Iw(h,u)){const m=Xf(n,e,h,s,_);m!==e&&(p=m)}return[p,h,f]}function Qg(n,e,t,i,r,s){const{messageCompiler:o,warnHtmlMessage:a}=n;if(Un(i)){const c=i;return c.locale=c.locale||t,c.key=c.key||e,c}if(o==null){const c=()=>i;return c.locale=t,c.key=e,c}const l=o(i,zw(n,t,r,i,a,s));return l.locale=t,l.key=e,l.source=i,l}function Vw(n,e,t){return e(t)}function Gu(...n){const[e,t,i]=n,r=bt();if(!be(e)&&!Bt(e)&&!Un(e)&&!ui(e))throw Ui(Ni.INVALID_ARGUMENT);const s=Bt(e)?String(e):(Un(e),e);return Bt(t)?r.plural=t:be(t)?r.default=t:it(t)&&!Dl(t)?r.named=t:Ut(t)&&(r.list=t),Bt(i)?r.plural=i:be(i)?r.default=i:it(i)&&Ht(r,i),[s,r]}function zw(n,e,t,i,r,s){return{locale:e,key:t,warnHtmlMessage:r,onError:o=>{throw s&&s(o),o},onCacheKey:o=>gA(e,t,o)}}function Gw(n,e,t,i){const{modifiers:r,pluralRules:s,messageResolver:o,fallbackLocale:a,fallbackWarn:l,missingWarn:c,fallbackContext:u}=n,h={locale:e,modifiers:r,pluralRules:s,messages:(p,_)=>{let x=o(t,p);if(x==null&&(u||_)){const[,,m]=Zg(u||n,p,e,a,l,c);x=o(m,p)}if(be(x)||ui(x)){let m=!1;const y=Qg(n,p,e,x,p,()=>{m=!0});return m?_p:y}else return Un(x)?x:_p}};return n.processor&&(h.processor=n.processor),i.list&&(h.list=i.list),i.named&&(h.named=i.named),Bt(i.plural)&&(h.pluralIndex=i.plural),h}YA();/*!
  * vue-i18n v11.1.9
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */const Ww="11.1.9";function Xw(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(Nr().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(Nr().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Nr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Nr().__INTLIFY_PROD_DEVTOOLS__=!1)}const yn={UNEXPECTED_RETURN_TYPE:cw,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32};function wn(n,...e){return Nl(n,null,void 0)}const Wu=fr("__translateVNode"),Xu=fr("__datetimeParts"),ju=fr("__numberParts"),e_=fr("__setPluralRules"),t_=fr("__injectWithOption"),$u=fr("__dispose");function No(n){if(!ft(n)||ui(n))return n;for(const e in n)if(qn(n,e))if(!e.includes("."))ft(n[e])&&No(n[e]);else{const t=e.split("."),i=t.length-1;let r=n,s=!1;for(let o=0;o<i;o++){if(t[o]==="__proto__")throw new Error(`unsafe key: ${t[o]}`);if(t[o]in r||(r[t[o]]=bt()),!ft(r[t[o]])){s=!0;break}r=r[t[o]]}if(s||(ui(r)?Gg.includes(t[i])||delete n[e]:(r[t[i]]=n[e],delete n[e])),!ui(r)){const o=r[t[i]];ft(o)&&No(o)}}return n}function jf(n,e){const{messages:t,__i18n:i,messageResolver:r,flatJson:s}=e,o=it(t)?t:Ut(i)?bt():{[n]:bt()};if(Ut(i)&&i.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:l,resource:c}=a;l?(o[l]=o[l]||bt(),Wa(c,o[l])):Wa(c,o)}else be(a)&&Wa(JSON.parse(a),o)}),r==null&&s)for(const a in o)qn(o,a)&&No(o[a]);return o}function n_(n){return n.type}function i_(n,e,t){let i=ft(e.messages)?e.messages:bt();"__i18nGlobal"in t&&(i=jf(n.locale.value,{messages:i,__i18n:t.__i18nGlobal}));const r=Object.keys(i);r.length&&r.forEach(s=>{n.mergeLocaleMessage(s,i[s])});{if(ft(e.datetimeFormats)){const s=Object.keys(e.datetimeFormats);s.length&&s.forEach(o=>{n.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(ft(e.numberFormats)){const s=Object.keys(e.numberFormats);s.length&&s.forEach(o=>{n.mergeNumberFormat(o,e.numberFormats[o])})}}}function xp(n){return je(Bo,null,n,0)}const yp="__INTLIFY_META__",Sp=()=>[],jw=()=>!1;let Mp=0;function Ep(n){return(e,t,i,r)=>n(t,i,Es()||void 0,r)}const $w=()=>{const n=Es();let e=null;return n&&(e=n_(n)[yp])?{[yp]:e}:null};function $f(n={}){const{__root:e,__injectWithOption:t}=n,i=e===void 0,r=n.flatJson,s=hl?yt:lm;let o=ct(n.inheritLocale)?n.inheritLocale:!0;const a=s(e&&o?e.locale.value:be(n.locale)?n.locale:Do),l=s(e&&o?e.fallbackLocale.value:be(n.fallbackLocale)||Ut(n.fallbackLocale)||it(n.fallbackLocale)||n.fallbackLocale===!1?n.fallbackLocale:a.value),c=s(jf(a.value,n)),u=s(it(n.datetimeFormats)?n.datetimeFormats:{[a.value]:{}}),f=s(it(n.numberFormats)?n.numberFormats:{[a.value]:{}});let h=e?e.missingWarn:ct(n.missingWarn)||Ps(n.missingWarn)?n.missingWarn:!0,p=e?e.fallbackWarn:ct(n.fallbackWarn)||Ps(n.fallbackWarn)?n.fallbackWarn:!0,_=e?e.fallbackRoot:ct(n.fallbackRoot)?n.fallbackRoot:!0,x=!!n.fallbackFormat,m=Lt(n.missing)?n.missing:null,d=Lt(n.missing)?Ep(n.missing):null,y=Lt(n.postTranslation)?n.postTranslation:null,S=e?e.warnHtmlMessage:ct(n.warnHtmlMessage)?n.warnHtmlMessage:!0,v=!!n.escapeParameter;const L=e?e.modifiers:it(n.modifiers)?n.modifiers:{};let I=n.pluralRules||e&&e.pluralRules,R;R=(()=>{i&&up(null);const g={version:Ww,locale:a.value,fallbackLocale:l.value,messages:c.value,modifiers:L,pluralRules:I,missing:d===null?void 0:d,missingWarn:h,fallbackWarn:p,fallbackFormat:x,unresolving:!0,postTranslation:y===null?void 0:y,warnHtmlMessage:S,escapeParameter:v,messageResolver:n.messageResolver,messageCompiler:n.messageCompiler,__meta:{framework:"vue"}};g.datetimeFormats=u.value,g.numberFormats=f.value,g.__datetimeFormatters=it(R)?R.__datetimeFormatters:void 0,g.__numberFormatters=it(R)?R.__numberFormatters:void 0;const P=Cw(g);return i&&up(P),P})(),Zs(R,a.value,l.value);function E(){return[a.value,l.value,c.value,u.value,f.value]}const M=ir({get:()=>a.value,set:g=>{R.locale=g,a.value=g}}),F=ir({get:()=>l.value,set:g=>{R.fallbackLocale=g,l.value=g,Zs(R,a.value,g)}}),Y=ir(()=>c.value),$=ir(()=>u.value),ie=ir(()=>f.value);function G(){return Lt(y)?y:null}function B(g){y=g,R.postTranslation=g}function q(){return m}function H(g){g!==null&&(d=Ep(g)),m=g,R.missing=d}const le=(g,P,W,J,K,ve)=>{E();let ce;try{__INTLIFY_PROD_DEVTOOLS__,i||(R.fallbackContext=e?Rw():void 0),ce=g(R)}finally{__INTLIFY_PROD_DEVTOOLS__,i||(R.fallbackContext=void 0)}if(W!=="translate exists"&&Bt(ce)&&ce===Ul||W==="translate exists"&&!ce){const[ye,Ee]=P();return e&&_?J(e):K(ye)}else{if(ve(ce))return ce;throw wn(yn.UNEXPECTED_RETURN_TYPE)}};function pe(...g){return le(P=>Reflect.apply(vp,null,[P,...g]),()=>Gu(...g),"translate",P=>Reflect.apply(P.t,P,[...g]),P=>P,P=>be(P))}function Ae(...g){const[P,W,J]=g;if(J&&!ft(J))throw wn(yn.INVALID_ARGUMENT);return pe(P,W,Ht({resolvedMessage:!0},J||{}))}function Be(...g){return le(P=>Reflect.apply(hp,null,[P,...g]),()=>Vu(...g),"datetime format",P=>Reflect.apply(P.d,P,[...g]),()=>lp,P=>be(P)||Ut(P))}function ot(...g){return le(P=>Reflect.apply(pp,null,[P,...g]),()=>zu(...g),"number format",P=>Reflect.apply(P.n,P,[...g]),()=>lp,P=>be(P)||Ut(P))}function re(g){return g.map(P=>be(P)||Bt(P)||ct(P)?xp(String(P)):P)}const Re={normalize:re,interpolate:g=>g,type:"vnode"};function ge(...g){return le(P=>{let W;const J=P;try{J.processor=Re,W=Reflect.apply(vp,null,[J,...g])}finally{J.processor=null}return W},()=>Gu(...g),"translate",P=>P[Wu](...g),P=>[xp(P)],P=>Ut(P))}function Le(...g){return le(P=>Reflect.apply(pp,null,[P,...g]),()=>zu(...g),"number format",P=>P[ju](...g),Sp,P=>be(P)||Ut(P))}function Qe(...g){return le(P=>Reflect.apply(hp,null,[P,...g]),()=>Vu(...g),"datetime format",P=>P[Xu](...g),Sp,P=>be(P)||Ut(P))}function Oe(g){I=g,R.pluralRules=I}function St(g,P){return le(()=>{if(!g)return!1;const W=be(P)?P:a.value,J=b(W),K=R.messageResolver(J,g);return ui(K)||Un(K)||be(K)},()=>[g],"translate exists",W=>Reflect.apply(W.te,W,[g,P]),jw,W=>ct(W))}function N(g){let P=null;const W=Wg(R,l.value,a.value);for(let J=0;J<W.length;J++){const K=c.value[W[J]]||{},ve=R.messageResolver(K,g);if(ve!=null){P=ve;break}}return P}function O(g){const P=N(g);return P??(e?e.tm(g)||{}:{})}function b(g){return c.value[g]||{}}function se(g,P){if(r){const W={[g]:P};for(const J in W)qn(W,J)&&No(W[J]);P=W[g]}c.value[g]=P,R.messages=c.value}function ee(g,P){c.value[g]=c.value[g]||{};const W={[g]:P};if(r)for(const J in W)qn(W,J)&&No(W[J]);P=W[g],Wa(P,c.value[g]),R.messages=c.value}function te(g){return u.value[g]||{}}function A(g,P){u.value[g]=P,R.datetimeFormats=u.value,dp(R,g,P)}function C(g,P){u.value[g]=Ht(u.value[g]||{},P),R.datetimeFormats=u.value,dp(R,g,P)}function U(g){return f.value[g]||{}}function V(g,P){f.value[g]=P,R.numberFormats=f.value,mp(R,g,P)}function fe(g,P){f.value[g]=Ht(f.value[g]||{},P),R.numberFormats=f.value,mp(R,g,P)}Mp++,e&&hl&&(Or(e.locale,g=>{o&&(a.value=g,R.locale=g,Zs(R,a.value,l.value))}),Or(e.fallbackLocale,g=>{o&&(l.value=g,R.fallbackLocale=g,Zs(R,a.value,l.value))}));const T={id:Mp,locale:M,fallbackLocale:F,get inheritLocale(){return o},set inheritLocale(g){o=g,g&&e&&(a.value=e.locale.value,l.value=e.fallbackLocale.value,Zs(R,a.value,l.value))},get availableLocales(){return Object.keys(c.value).sort()},messages:Y,get modifiers(){return L},get pluralRules(){return I||{}},get isGlobal(){return i},get missingWarn(){return h},set missingWarn(g){h=g,R.missingWarn=h},get fallbackWarn(){return p},set fallbackWarn(g){p=g,R.fallbackWarn=p},get fallbackRoot(){return _},set fallbackRoot(g){_=g},get fallbackFormat(){return x},set fallbackFormat(g){x=g,R.fallbackFormat=x},get warnHtmlMessage(){return S},set warnHtmlMessage(g){S=g,R.warnHtmlMessage=g},get escapeParameter(){return v},set escapeParameter(g){v=g,R.escapeParameter=g},t:pe,getLocaleMessage:b,setLocaleMessage:se,mergeLocaleMessage:ee,getPostTranslationHandler:G,setPostTranslationHandler:B,getMissingHandler:q,setMissingHandler:H,[e_]:Oe};return T.datetimeFormats=$,T.numberFormats=ie,T.rt=Ae,T.te=St,T.tm=O,T.d=Be,T.n=ot,T.getDateTimeFormat=te,T.setDateTimeFormat=A,T.mergeDateTimeFormat=C,T.getNumberFormat=U,T.setNumberFormat=V,T.mergeNumberFormat=fe,T[t_]=t,T[Wu]=ge,T[Xu]=Qe,T[ju]=Le,T}function Yw(n){const e=be(n.locale)?n.locale:Do,t=be(n.fallbackLocale)||Ut(n.fallbackLocale)||it(n.fallbackLocale)||n.fallbackLocale===!1?n.fallbackLocale:e,i=Lt(n.missing)?n.missing:void 0,r=ct(n.silentTranslationWarn)||Ps(n.silentTranslationWarn)?!n.silentTranslationWarn:!0,s=ct(n.silentFallbackWarn)||Ps(n.silentFallbackWarn)?!n.silentFallbackWarn:!0,o=ct(n.fallbackRoot)?n.fallbackRoot:!0,a=!!n.formatFallbackMessages,l=it(n.modifiers)?n.modifiers:{},c=n.pluralizationRules,u=Lt(n.postTranslation)?n.postTranslation:void 0,f=be(n.warnHtmlInMessage)?n.warnHtmlInMessage!=="off":!0,h=!!n.escapeParameterHtml,p=ct(n.sync)?n.sync:!0;let _=n.messages;if(it(n.sharedMessages)){const L=n.sharedMessages;_=Object.keys(L).reduce((R,D)=>{const E=R[D]||(R[D]={});return Ht(E,L[D]),R},_||{})}const{__i18n:x,__root:m,__injectWithOption:d}=n,y=n.datetimeFormats,S=n.numberFormats,v=n.flatJson;return{locale:e,fallbackLocale:t,messages:_,flatJson:v,datetimeFormats:y,numberFormats:S,missing:i,missingWarn:r,fallbackWarn:s,fallbackRoot:o,fallbackFormat:a,modifiers:l,pluralRules:c,postTranslation:u,warnHtmlMessage:f,escapeParameter:h,messageResolver:n.messageResolver,inheritLocale:p,__i18n:x,__root:m,__injectWithOption:d}}function Yu(n={}){const e=$f(Yw(n)),{__extender:t}=n,i={id:e.id,get locale(){return e.locale.value},set locale(r){e.locale.value=r},get fallbackLocale(){return e.fallbackLocale.value},set fallbackLocale(r){e.fallbackLocale.value=r},get messages(){return e.messages.value},get datetimeFormats(){return e.datetimeFormats.value},get numberFormats(){return e.numberFormats.value},get availableLocales(){return e.availableLocales},get missing(){return e.getMissingHandler()},set missing(r){e.setMissingHandler(r)},get silentTranslationWarn(){return ct(e.missingWarn)?!e.missingWarn:e.missingWarn},set silentTranslationWarn(r){e.missingWarn=ct(r)?!r:r},get silentFallbackWarn(){return ct(e.fallbackWarn)?!e.fallbackWarn:e.fallbackWarn},set silentFallbackWarn(r){e.fallbackWarn=ct(r)?!r:r},get modifiers(){return e.modifiers},get formatFallbackMessages(){return e.fallbackFormat},set formatFallbackMessages(r){e.fallbackFormat=r},get postTranslation(){return e.getPostTranslationHandler()},set postTranslation(r){e.setPostTranslationHandler(r)},get sync(){return e.inheritLocale},set sync(r){e.inheritLocale=r},get warnHtmlInMessage(){return e.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(r){e.warnHtmlMessage=r!=="off"},get escapeParameterHtml(){return e.escapeParameter},set escapeParameterHtml(r){e.escapeParameter=r},get pluralizationRules(){return e.pluralRules||{}},__composer:e,t(...r){return Reflect.apply(e.t,e,[...r])},rt(...r){return Reflect.apply(e.rt,e,[...r])},te(r,s){return e.te(r,s)},tm(r){return e.tm(r)},getLocaleMessage(r){return e.getLocaleMessage(r)},setLocaleMessage(r,s){e.setLocaleMessage(r,s)},mergeLocaleMessage(r,s){e.mergeLocaleMessage(r,s)},d(...r){return Reflect.apply(e.d,e,[...r])},getDateTimeFormat(r){return e.getDateTimeFormat(r)},setDateTimeFormat(r,s){e.setDateTimeFormat(r,s)},mergeDateTimeFormat(r,s){e.mergeDateTimeFormat(r,s)},n(...r){return Reflect.apply(e.n,e,[...r])},getNumberFormat(r){return e.getNumberFormat(r)},setNumberFormat(r,s){e.setNumberFormat(r,s)},mergeNumberFormat(r,s){e.mergeNumberFormat(r,s)}};return i.__extender=t,i}function qw(n,e,t){return{beforeCreate(){const i=Es();if(!i)throw wn(yn.UNEXPECTED_ERROR);const r=this.$options;if(r.i18n){const s=r.i18n;if(r.__i18n&&(s.__i18n=r.__i18n),s.__root=e,this===this.$root)this.$i18n=Tp(n,s);else{s.__injectWithOption=!0,s.__extender=t.__vueI18nExtend,this.$i18n=Yu(s);const o=this.$i18n;o.__extender&&(o.__disposer=o.__extender(this.$i18n))}}else if(r.__i18n)if(this===this.$root)this.$i18n=Tp(n,r);else{this.$i18n=Yu({__i18n:r.__i18n,__injectWithOption:!0,__extender:t.__vueI18nExtend,__root:e});const s=this.$i18n;s.__extender&&(s.__disposer=s.__extender(this.$i18n))}else this.$i18n=n;r.__i18nGlobal&&i_(e,r,r),this.$t=(...s)=>this.$i18n.t(...s),this.$rt=(...s)=>this.$i18n.rt(...s),this.$te=(s,o)=>this.$i18n.te(s,o),this.$d=(...s)=>this.$i18n.d(...s),this.$n=(...s)=>this.$i18n.n(...s),this.$tm=s=>this.$i18n.tm(s),t.__setInstance(i,this.$i18n)},mounted(){},unmounted(){const i=Es();if(!i)throw wn(yn.UNEXPECTED_ERROR);const r=this.$i18n;delete this.$t,delete this.$rt,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,r.__disposer&&(r.__disposer(),delete r.__disposer,delete r.__extender),t.__deleteInstance(i),delete this.$i18n}}}function Tp(n,e){n.locale=e.locale||n.locale,n.fallbackLocale=e.fallbackLocale||n.fallbackLocale,n.missing=e.missing||n.missing,n.silentTranslationWarn=e.silentTranslationWarn||n.silentFallbackWarn,n.silentFallbackWarn=e.silentFallbackWarn||n.silentFallbackWarn,n.formatFallbackMessages=e.formatFallbackMessages||n.formatFallbackMessages,n.postTranslation=e.postTranslation||n.postTranslation,n.warnHtmlInMessage=e.warnHtmlInMessage||n.warnHtmlInMessage,n.escapeParameterHtml=e.escapeParameterHtml||n.escapeParameterHtml,n.sync=e.sync||n.sync,n.__composer[e_](e.pluralizationRules||n.pluralizationRules);const t=jf(n.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(t).forEach(i=>n.mergeLocaleMessage(i,t[i])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(i=>n.mergeDateTimeFormat(i,e.datetimeFormats[i])),e.numberFormats&&Object.keys(e.numberFormats).forEach(i=>n.mergeNumberFormat(i,e.numberFormats[i])),n}const Yf={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:n=>n==="parent"||n==="global",default:"parent"},i18n:{type:Object}};function Kw({slots:n},e){return e.length===1&&e[0]==="default"?(n.default?n.default():[]).reduce((i,r)=>[...i,...r.type===Tt?r.children:[r]],[]):e.reduce((t,i)=>{const r=n[i];return r&&(t[i]=r()),t},bt())}function r_(){return Tt}const Jw=Rt({name:"i18n-t",props:Ht({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:n=>Bt(n)||!isNaN(n)}},Yf),setup(n,e){const{slots:t,attrs:i}=e,r=n.i18n||ti({useScope:n.scope,__useComponent:!0});return()=>{const s=Object.keys(t).filter(f=>f[0]!=="_"),o=bt();n.locale&&(o.locale=n.locale),n.plural!==void 0&&(o.plural=be(n.plural)?+n.plural:n.plural);const a=Kw(e,s),l=r[Wu](n.keypath,a,o),c=Ht(bt(),i),u=be(n.tag)||ft(n.tag)?n.tag:r_();return Gm(u,c,l)}}}),bp=Jw;function Zw(n){return Ut(n)&&!be(n[0])}function s_(n,e,t,i){const{slots:r,attrs:s}=e;return()=>{const o={part:!0};let a=bt();n.locale&&(o.locale=n.locale),be(n.format)?o.key=n.format:ft(n.format)&&(be(n.format.key)&&(o.key=n.format.key),a=Object.keys(n.format).reduce((h,p)=>t.includes(p)?Ht(bt(),h,{[p]:n.format[p]}):h,bt()));const l=i(n.value,o,a);let c=[o.key];Ut(l)?c=l.map((h,p)=>{const _=r[h.type],x=_?_({[h.type]:h.value,index:p,parts:l}):[h.value];return Zw(x)&&(x[0].key=`${h.type}-${p}`),x}):be(l)&&(c=[l]);const u=Ht(bt(),s),f=be(n.tag)||ft(n.tag)?n.tag:r_();return Gm(f,u,c)}}const Qw=Rt({name:"i18n-n",props:Ht({value:{type:Number,required:!0},format:{type:[String,Object]}},Yf),setup(n,e){const t=n.i18n||ti({useScope:n.scope,__useComponent:!0});return s_(n,e,Jg,(...i)=>t[ju](...i))}}),Ap=Qw;function eR(n,e){const t=n;if(n.mode==="composition")return t.__getInstance(e)||n.global;{const i=t.__getInstance(e);return i!=null?i.__composer:n.global.__composer}}function tR(n){const e=o=>{const{instance:a,value:l}=o;if(!a||!a.$)throw wn(yn.UNEXPECTED_ERROR);const c=eR(n,a.$),u=wp(l);return[Reflect.apply(c.t,c,[...Rp(u)]),c]};return{created:(o,a)=>{const[l,c]=e(a);hl&&n.global===c&&(o.__i18nWatcher=Or(c.locale,()=>{a.instance&&a.instance.$forceUpdate()})),o.__composer=c,o.textContent=l},unmounted:o=>{hl&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:a})=>{if(o.__composer){const l=o.__composer,c=wp(a);o.textContent=Reflect.apply(l.t,l,[...Rp(c)])}},getSSRProps:o=>{const[a]=e(o);return{textContent:a}}}}function wp(n){if(be(n))return{path:n};if(it(n)){if(!("path"in n))throw wn(yn.REQUIRED_VALUE,"path");return n}else throw wn(yn.INVALID_VALUE)}function Rp(n){const{path:e,locale:t,args:i,choice:r,plural:s}=n,o={},a=i||{};return be(t)&&(o.locale=t),Bt(r)&&(o.plural=r),Bt(s)&&(o.plural=s),[e,a,o]}function nR(n,e,...t){const i=it(t[0])?t[0]:{};(ct(i.globalInstall)?i.globalInstall:!0)&&([bp.name,"I18nT"].forEach(s=>n.component(s,bp)),[Ap.name,"I18nN"].forEach(s=>n.component(s,Ap)),[Lp.name,"I18nD"].forEach(s=>n.component(s,Lp))),n.directive("t",tR(e))}const iR=fr("global-vue-i18n");function rR(n={}){const e=__VUE_I18N_LEGACY_API__&&ct(n.legacy)?n.legacy:__VUE_I18N_LEGACY_API__,t=ct(n.globalInjection)?n.globalInjection:!0,i=new Map,[r,s]=sR(n,e),o=fr("");function a(f){return i.get(f)||null}function l(f,h){i.set(f,h)}function c(f){i.delete(f)}const u={get mode(){return __VUE_I18N_LEGACY_API__&&e?"legacy":"composition"},async install(f,...h){if(f.__VUE_I18N_SYMBOL__=o,f.provide(f.__VUE_I18N_SYMBOL__,u),it(h[0])){const x=h[0];u.__composerExtend=x.__composerExtend,u.__vueI18nExtend=x.__vueI18nExtend}let p=null;!e&&t&&(p=dR(f,u.global)),__VUE_I18N_FULL_INSTALL__&&nR(f,u,...h),__VUE_I18N_LEGACY_API__&&e&&f.mixin(qw(s,s.__composer,u));const _=f.unmount;f.unmount=()=>{p&&p(),u.dispose(),_()}},get global(){return s},dispose(){r.stop()},__instances:i,__getInstance:a,__setInstance:l,__deleteInstance:c};return u}function ti(n={}){const e=Es();if(e==null)throw wn(yn.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw wn(yn.NOT_INSTALLED);const t=oR(e),i=lR(t),r=n_(e),s=aR(n,r);if(s==="global")return i_(i,n,r),i;if(s==="parent"){let l=cR(t,e,n.__useComponent);return l==null&&(l=i),l}const o=t;let a=o.__getInstance(e);if(a==null){const l=Ht({},n);"__i18n"in r&&(l.__i18n=r.__i18n),i&&(l.__root=i),a=$f(l),o.__composerExtend&&(a[$u]=o.__composerExtend(a)),fR(o,e,a),o.__setInstance(e,a)}return a}function sR(n,e){const t=U_(),i=__VUE_I18N_LEGACY_API__&&e?t.run(()=>Yu(n)):t.run(()=>$f(n));if(i==null)throw wn(yn.UNEXPECTED_ERROR);return[t,i]}function oR(n){const e=uo(n.isCE?iR:n.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw wn(n.isCE?yn.NOT_INSTALLED_WITH_PROVIDE:yn.UNEXPECTED_ERROR);return e}function aR(n,e){return Dl(n)?"__i18n"in e?"local":"global":n.useScope?n.useScope:"local"}function lR(n){return n.mode==="composition"?n.global:n.global.__composer}function cR(n,e,t=!1){let i=null;const r=e.root;let s=uR(e,t);for(;s!=null;){const o=n;if(n.mode==="composition")i=o.__getInstance(s);else if(__VUE_I18N_LEGACY_API__){const a=o.__getInstance(s);a!=null&&(i=a.__composer,t&&i&&!i[t_]&&(i=null))}if(i!=null||r===s)break;s=s.parent}return i}function uR(n,e=!1){return n==null?null:e&&n.vnode.ctx||n.parent}function fR(n,e,t){Xi(()=>{},e),Al(()=>{const i=t;n.__deleteInstance(e);const r=i[$u];r&&(r(),delete i[$u])},e)}const hR=["locale","fallbackLocale","availableLocales"],Cp=["t","rt","d","n","tm","te"];function dR(n,e){const t=Object.create(null);return hR.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s)throw wn(yn.UNEXPECTED_ERROR);const o=Kt(s.value)?{get(){return s.value.value},set(a){s.value.value=a}}:{get(){return s.get&&s.get()}};Object.defineProperty(t,r,o)}),n.config.globalProperties.$i18n=t,Cp.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s||!s.value)throw wn(yn.UNEXPECTED_ERROR);Object.defineProperty(n.config.globalProperties,`$${r}`,s)}),()=>{delete n.config.globalProperties.$i18n,Cp.forEach(r=>{delete n.config.globalProperties[`$${r}`]})}}const pR=Rt({name:"i18n-d",props:Ht({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Yf),setup(n,e){const t=n.i18n||ti({useScope:n.scope,__useComponent:!0});return s_(n,e,Kg,(...i)=>t[Xu](...i))}}),Lp=pR;Xw();Ew(rw);Tw(yw);bw(Wg);if(__INTLIFY_PROD_DEVTOOLS__){const n=Nr();n.__INTLIFY__=!0,sw(n.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const mR={class:"row"},gR={class:"project_context"},_R={class:"column end-align project_technologies"},vR={class:"column round"},xR={class:"technologies_list"},yR={class:"project_links"},SR=["href"],MR={class:"other"},Wo=Rt({__name:"ProjectSummary",props:{title:{},context:{},technologies:{},links:{}},setup(n){const{t:e}=ti(),t=yt(null);return Xi(()=>{t.value&&Dg(t.value)&&t.value.addEventListener("wheel",i=>{i.stopPropagation()})}),(i,r)=>{var s,o;return we(),Ve("div",{class:"glass item project_whole column",ref_key:"projectSummary",ref:t},[ne("div",mR,[ne("h1",null,et(i.title),1),ne("div",gR,[ne("h2",null,et(st(nn)(st(e)("titles.context"))),1),ne("p",null,et(i.context),1)]),ne("div",_R,[ne("div",vR,[ne("h2",null,et(st(nn)(st(e)("titles.technologies"))),1),ne("div",xR,[(we(!0),Ve(Tt,null,An(i.technologies,a=>(we(),Jt(Pg,{key:a,name:a},null,8,["name"]))),128))]),ne("div",yR,[ne("h2",null,et(st(nn)(st(e)("titles.links"))),1),ne("ul",null,[(we(!0),Ve(Tt,null,An(i.links,a=>(we(),Ve("li",{key:a.url},[ne("a",{href:a.url},et(a.name),9,SR)]))),128))])])])])]),r[0]||(r[0]=ne("div",{class:"separator_h"},null,-1)),ne("div",MR,[(we(!0),Ve(Tt,null,An(((o=(s=i.$slots).default)==null?void 0:o.call(s))??[],(a,l)=>(we(),Jt(wl(a),{key:l}))),128))])],512)}}}),ER="/assets/fox_realistic_wild_animal-BJWfeLxy.glb";function Ip(n,e){if(e===Ix)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Pu||e===ig){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===Pu)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class TR extends Bs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new CR(t)}),this.register(function(t){return new LR(t)}),this.register(function(t){return new kR(t)}),this.register(function(t){return new HR(t)}),this.register(function(t){return new VR(t)}),this.register(function(t){return new PR(t)}),this.register(function(t){return new DR(t)}),this.register(function(t){return new NR(t)}),this.register(function(t){return new UR(t)}),this.register(function(t){return new RR(t)}),this.register(function(t){return new OR(t)}),this.register(function(t){return new IR(t)}),this.register(function(t){return new BR(t)}),this.register(function(t){return new FR(t)}),this.register(function(t){return new AR(t)}),this.register(function(t){return new zR(t)}),this.register(function(t){return new GR(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=mo.extractUrlBase(e);o=mo.resolveURL(c,this.path)}else o=mo.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Mg(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===o_){try{o[nt.KHR_BINARY_GLTF]=new WR(e)}catch(f){r&&r(f);return}s=JSON.parse(o[nt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new i1(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const f=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(f){case nt.KHR_MATERIALS_UNLIT:o[f]=new wR;break;case nt.KHR_DRACO_MESH_COMPRESSION:o[f]=new XR(s,this.dracoLoader);break;case nt.KHR_TEXTURE_TRANSFORM:o[f]=new jR;break;case nt.KHR_MESH_QUANTIZATION:o[f]=new $R;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function bR(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const nt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class AR{constructor(e){this.parser=e,this.name=nt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new We(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],pn);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new lS(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new oS(u),c.distance=f;break;case"spot":c=new rS(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ci(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class wR{constructor(){this.name=nt.KHR_MATERIALS_UNLIT}getMaterialType(){return Pr}extendParams(e,t,i){const r=[];e.color=new We(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],pn),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,$t))}return Promise.all(r)}}class RR{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class CR{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new He(a,a)}return Promise.all(s)}}class LR{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class IR{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class PR{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new We(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],pn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,$t)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class DR{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class NR{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new We().setRGB(a[0],a[1],a[2],pn),Promise.all(s)}}class UR{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class OR{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new We().setRGB(a[0],a[1],a[2],pn),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,$t)),Promise.all(s)}}class FR{constructor(e){this.parser=e,this.name=nt.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class BR{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class kR{constructor(e){this.parser=e,this.name=nt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class HR{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}}class VR{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}}class zR{constructor(e){this.name=nt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,f=r.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,r.mode,r.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(p),u,f,h,r.mode,r.filter),p})})}else return null}}class GR{constructor(e){this.name=nt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==Nn.TRIANGLES&&c.mode!==Nn.TRIANGLE_STRIP&&c.mode!==Nn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,p=[];for(const _ of f){const x=new Ke,m=new z,d=new ur,y=new z(1,1,1),S=new Rf(_.geometry,_.material,h);for(let v=0;v<h;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&d.fromBufferAttribute(l.ROTATION,v),l.SCALE&&y.fromBufferAttribute(l.SCALE,v),S.setMatrixAt(v,x.compose(m,d,y));for(const v in l)if(v==="_COLOR_0"){const L=l[v];S.instanceColor=new Lo(L.array,L.itemSize,L.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&_.geometry.setAttribute(v,l[v]);Dt.prototype.copy.call(S,_),this.parser.assignFinalMaterial(S),p.push(S)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const o_="glTF",Qs=12,Pp={JSON:1313821514,BIN:5130562};class WR{constructor(e){this.name=nt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Qs),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==o_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Qs,s=new DataView(e,Qs);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Pp.JSON){const c=new Uint8Array(e,Qs+o,a);this.content=i.decode(c)}else if(l===Pp.BIN){const c=Qs+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class XR{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=nt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=qu[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=qu[u]||u.toLowerCase();if(o[u]!==void 0){const h=i.accessors[e.attributes[u]],p=Ss[h.componentType];c[f]=p.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f,h){r.decodeDracoFile(u,function(p){for(const _ in p.attributes){const x=p.attributes[_],m=l[_];m!==void 0&&(x.normalized=m)}f(p)},a,c,pn,h)})})}}class jR{constructor(){this.name=nt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class $R{constructor(){this.name=nt.KHR_MESH_QUANTIZATION}}class a_ extends zo{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,f=(i-t)/u,h=f*f,p=h*f,_=e*c,x=_-c,m=-2*p+3*h,d=p-h,y=1-m,S=d-h+f;for(let v=0;v!==a;v++){const L=o[x+v+a],I=o[x+v+l]*u,R=o[_+v+a],D=o[_+v]*u;s[v]=y*L+S*I+m*R+d*D}return s}}const YR=new ur;class qR extends a_{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return YR.fromArray(s).normalize().toArray(s),s}}const Nn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ss={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Dp={9728:fn,9729:kt,9984:qm,9985:Na,9986:ro,9987:Pi},Np={33071:ai,33648:ol,10497:kn},Dc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},qu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},er={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},KR={CUBICSPLINE:void 0,LINEAR:Ro,STEP:wo},Nc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function JR(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Pf({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gi})),n.DefaultMaterial}function br(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ci(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ZR(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(i){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):n.attributes.position;o.push(h)}if(r){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):n.attributes.normal;a.push(h)}if(s){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):n.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=f),s&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function QR(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function e1(n){let e;const t=n.extensions&&n.extensions[nt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Uc(t.attributes):e=n.indices+":"+Uc(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Uc(n.targets[i]);return e}function Uc(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Ku(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function t1(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const n1=new Ke;class i1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new bR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?this.textureLoader=new Go(this.options.manager):this.textureLoader=new cS(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Mg(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return br(s,a,r),Ci(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[nt.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(mo.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Dc[r.type],a=Ss[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new hn(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Dc[r.type],c=Ss[r.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,_=r.normalized===!0;let x,m;if(p&&p!==f){const d=Math.floor(h/p),y="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+d+":"+r.count;let S=t.cache.get(y);S||(x=new c(a,d*p,r.count*p/u),S=new Py(x,p/u),t.cache.add(y,S)),m=new bf(S,l,h%p/u,_)}else a===null?x=new c(r.count*l):x=new c(a,h,r.count*l),m=new hn(x,l,_);if(r.sparse!==void 0){const d=Dc.SCALAR,y=Ss[r.sparse.indices.componentType],S=r.sparse.indices.byteOffset||0,v=r.sparse.values.byteOffset||0,L=new y(o[1],S,r.sparse.count*d),I=new c(o[2],v,r.sparse.count*l);a!==null&&(m=new hn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,D=L.length;R<D;R++){const E=L[R];if(m.setX(E,I[R*l]),l>=2&&m.setY(E,I[R*l+1]),l>=3&&m.setZ(E,I[R*l+2]),l>=4&&m.setW(E,I[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(s.samplers||{})[o.sampler]||{};return u.magFilter=Dp[h.magFilter]||kt,u.minFilter=Dp[h.minFilter]||Pi,u.wrapS=Np[h.wrapS]||kn,u.wrapT=Np[h.wrapT]||kn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==fn&&u.minFilter!==kt,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,p){let _=h;t.isImageBitmapLoader===!0&&(_=function(x){const m=new Xt(x);m.needsUpdate=!0,h(m)}),t.load(mo.resolveURL(f,s.path),_,void 0,p)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),Ci(f,o),f.userData.mimeType=o.mimeType||t1(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[nt.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[nt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[nt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new vg,ci.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new _g,ci.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Pf}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[nt.KHR_MATERIALS_UNLIT]){const f=r[nt.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,s,t))}else{const f=s.pbrMetallicRoughness||{};if(a.color=new We(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],pn),a.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,$t)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Xn);const u=s.alphaMode||Nc.OPAQUE;if(u===Nc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Nc.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Pr&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new He(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;a.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&o!==Pr&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Pr){const f=s.emissiveFactor;a.emissive=new We().setRGB(f[0],f[1],f[2],pn)}return s.emissiveTexture!==void 0&&o!==Pr&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,$t)),Promise.all(c).then(function(){const f=new o(a);return s.name&&(f.name=s.name),Ci(f,s),t.associations.set(f,{materials:e}),s.extensions&&br(r,f,s),f})}createUniqueName(e){const t=xt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[nt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Up(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=e1(c),f=r[u];if(f)o.push(f.promise);else{let h;c.extensions&&c.extensions[nt.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=Up(new Cn,c,t),r[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?JR(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let p=0,_=u.length;p<_;p++){const x=u[p],m=o[p];let d;const y=c[p];if(m.mode===Nn.TRIANGLES||m.mode===Nn.TRIANGLE_STRIP||m.mode===Nn.TRIANGLE_FAN||m.mode===void 0)d=s.isSkinnedMesh===!0?new Ny(x,y):new vn(x,y),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===Nn.TRIANGLE_STRIP?d.geometry=Ip(d.geometry,ig):m.mode===Nn.TRIANGLE_FAN&&(d.geometry=Ip(d.geometry,Pu));else if(m.mode===Nn.LINES)d=new ky(x,y);else if(m.mode===Nn.LINE_STRIP)d=new Lf(x,y);else if(m.mode===Nn.LINE_LOOP)d=new Hy(x,y);else if(m.mode===Nn.POINTS)d=new Vy(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&QR(d,s),d.name=t.createUniqueName(s.name||"mesh_"+e),Ci(d,s),m.extensions&&br(r,d,m),t.assignFinalMaterial(d),f.push(d)}for(let p=0,_=f.length;p<_;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return s.extensions&&br(r,f[0],s),f[0];const h=new Dr;s.extensions&&br(r,h,s),t.associations.set(h,{meshes:e});for(let p=0,_=f.length;p<_;p++)h.add(f[p]);return h})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new tn(Ha.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Uf(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ci(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const h=new Ke;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new wf(a,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,h=r.channels.length;f<h;f++){const p=r.channels[f],_=r.samplers[p.sampler],x=p.target,m=x.node,d=r.parameters!==void 0?r.parameters[_.input]:_.input,y=r.parameters!==void 0?r.parameters[_.output]:_.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),l.push(this.getDependency("accessor",y)),c.push(_),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const h=f[0],p=f[1],_=f[2],x=f[3],m=f[4],d=[];for(let y=0,S=h.length;y<S;y++){const v=h[y],L=p[y],I=_[y],R=x[y],D=m[y];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const E=i._createAnimationTracks(v,L,I,R,D);if(E)for(let M=0;M<E.length;M++)d.push(E[M])}return new Ky(s,void 0,d)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(h,n1)});for(let p=0,_=f.length;p<_;p++)u.add(f[p]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new gg:c.length>1?u=new Dr:c.length===1?u=c[0]:u=new Dt,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(s.name&&(u.userData.name=s.name,u.name=o),Ci(u,s),s.extensions&&br(i,u,s),s.matrix!==void 0){const f=new Ke;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){const f=r.associations.get(u);r.associations.set(u,{...f})}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new Dr;i.name&&(s.name=r.createUniqueName(i.name)),Ci(s,i),i.extensions&&br(t,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)s.add(l[u]);const c=u=>{const f=new Map;for(const[h,p]of r.associations)(h instanceof ci||h instanceof Xt)&&f.set(h,p);return u.traverse(h=>{const p=r.associations.get(h);p!=null&&f.set(h,p)}),f};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];er[s.path]===er.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(er[s.path]){case er.weights:c=Cs;break;case er.rotation:c=Ls;break;case er.translation:case er.scale:c=Is;break;default:switch(i.itemSize){case 1:c=Cs;break;case 2:case 3:default:c=Is;break}break}const u=r.interpolation!==void 0?KR[r.interpolation]:Ro,f=this._getArrayFromAccessor(i);for(let h=0,p=l.length;h<p;h++){const _=new c(l[h]+"."+er[s.path],t.array,f,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Ku(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof Ls?qR:a_;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function r1(n,e,t){const i=e.attributes,r=new ji;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new z(l[0],l[1],l[2]),new z(c[0],c[1],c[2])),a.normalized){const u=Ku(Ss[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new z,l=new z;for(let c=0,u=s.length;c<u;c++){const f=s[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],p=h.min,_=h.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),h.normalized){const x=Ku(Ss[h.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new pi;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function Up(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=qu[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return at.workingColorSpace!==pn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${at.workingColorSpace}" not supported.`),Ci(n,e),r1(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?ZR(n,e.targets,t):n})}function Uo(n,e,t){return Math.max(e,Math.min(n,t))}function s1(n,e){if(typeof n=="string"||typeof e=="string")return n===e;for(const t in n)if(n[t]!==e[t])return!1;return!0}function Ra(n){const e=[],t=n.length>5?2:1;for(let i=1;i<n.length;i+=t){const r=n.substring(i,i+t).repeat(t%2+1),s=parseInt(r,16);e.push(i===3*t+1?s/255:s)}return e.length===3&&e.push(1),{r:e[0],g:e[1],b:e[2],a:e[3]}}function l_(n){const e=n.l/100,t=e+n.s/100*Math.min(e,1-e),i=t===0?0:200*(1-e/t);return{h:n.h,s:i,v:t*100,a:n.a}}function Xa(n){let e=n.h%360;e<0&&(e+=360);const t=n.s/100,i=n.l/100;return{r:Oc(0,e,t,i)*255,g:Oc(8,e,t,i)*255,b:Oc(4,e,t,i)*255,a:n.a}}function Oc(n,e,t,i){const r=(n+e/30)%12,s=t*Math.min(i,1-i);return i-s*Math.max(-1,Math.min(r-3,9-r,1))}function c_(n){const e=n.s/100,t=n.v/100,i=t*(1-e/2);return{h:n.h,s:i===0||i===1?0:(t-i)/Math.min(i,1-i)*100,l:i*100,a:n.a}}function u_(n){return{h:n.h,w:n.v*(100-n.s)/100,b:100-n.v,a:n.a}}function eo(n){return Xa(c_(n))}function ss(n){const e=n.w/100,t=n.b/100;let i,r;const s=e+t;return s>=1?(i=0,r=e/s):(r=1-t,i=(1-e/r)*100),{h:n.h,s:i,v:r*100,a:n.a}}function ja(n){const{r:e,g:t,b:i,a:r}=n,s=Math.min(e,t,i),o=Math.max(e,t,i),a=o-s,l=(o+s)/2;let c=0;a!==0&&(o===e?c=(t-i)/a+(t<i?6:0):o===t?c=(i-e)/a+2:o===i&&(c=(e-t)/a+4),c*=60);let u=0;return l!==0&&l!==255&&(u=(o-l)/Math.min(l,255-l)),{h:c,s:u*100,l:l/255*100,a:r}}function Ca(n){return"#"+Object.values(n).map((e,t)=>Math.round(t===3?e*255:e).toString(16).padStart(2,"0")).join("")}function to(n){return u_(l_(ja(n)))}const o1={hex:{hex:n=>n,hsl:n=>ja(Ra(n)),hsv:n=>ss(to(Ra(n))),hwb:n=>to(Ra(n)),rgb:Ra},hsl:{hex:n=>Ca(Xa(n)),hsl:n=>n,hsv:l_,hwb:n=>to(Xa(n)),rgb:Xa},hsv:{hex:n=>Ca(eo(n)),hsl:c_,hsv:n=>n,hwb:u_,rgb:eo},hwb:{hex:n=>Ca(eo(ss(n))),hsl:n=>ja(eo(ss(n))),hsv:ss,hwb:n=>n,rgb:n=>eo(ss(n))},rgb:{hex:Ca,hsl:ja,hsv:n=>ss(to(n)),hwb:to,rgb:n=>n}};function a1(n,e,t){return o1[n][e](t)}function l1(n,e){const t=n.toFixed(e);return t.includes(".")?t.replace(/\.?0+$/,""):t}const c1={deg:1,grad:.9,rad:180/Math.PI,turn:360},dl={from(n){return n.endsWith("%")?us.from(n,{referenceValue:1}):Fi.from(n,{min:0,max:1})},to(n){return Fi.to(n)}},Op={from(n){const e=n.match(/deg|g?rad|turn$/);if(e===null)return Fi.from(n);const t=e[0];return Fi.from(n.slice(0,-t.length))*c1[t]},to(n){return Fi.to(n)}},Fi={from(n,{min:e=Number.NEGATIVE_INFINITY,max:t=Number.POSITIVE_INFINITY}={}){return n.endsWith(".")?NaN:Uo(Number(n),e,t)},to(n){return l1(n,2)}},us={from(n,{referenceValue:e=100,min:t=0,max:i=100}={}){return n.endsWith("%")?Fi.from(n.slice(0,-1),{min:t,max:i})*e/100:NaN},to(n){return Fi.to(n)+"%"}},Fc={from(n){return n.endsWith("%")?us.from(n,{referenceValue:255}):Fi.from(n,{min:0,max:255})},to(n){return Fi.to(n)}},u1={hsl:{h:Op,s:us,l:us},hwb:{h:Op,w:us,b:us},rgb:{r:Fc,g:Fc,b:Fc}};function pl(n,e){return u1[n][e]}function Bc({format:n,color:e},t){if(n==="hex")return t&&[5,9].includes(e.length)?e.substring(0,e.length-(e.length-1)/4):e;const i=Object.entries(e).slice(0,t?3:4).map(([r,s])=>{const o=r==="a"?dl:pl(n,r);return(r==="a"?"/ ":"")+o.to(s)});return`${n}(${i.join(" ")})`}function f_(n){return/^#(?:(?:[A-F0-9]{2}){3,4}|[A-F0-9]{3,4})$/i.test(n)}function f1(n){return"r"in n?"rgb":"w"in n?"hwb":"v"in n?"hsv":"s"in n?"hsl":null}const Fp={hsl:["h","s","l","a"],hwb:["h","w","b","a"],rgb:["r","g","b","a"]};function h1(n){if(typeof n!="string"){const a=f1(n);return a===null?null:{format:a,color:n}}if(n.startsWith("#"))return f_(n)?{format:"hex",color:n}:null;if(!n.includes("(")){const a=document.createElement("canvas").getContext("2d");a.fillStyle=n;const l=a.fillStyle;return l==="#000000"&&n!=="black"?null:{format:"hex",color:l}}const[e,t]=n.split("("),i=e.substring(0,3);if(!(i in Fp))return null;const r=t.replace(/[,/)]/g," ").replace(/\s+/g," ").trim().split(" ");r.length===3&&r.push("1");const s=Fp[i],o=Object.fromEntries(s.map((a,l)=>{const c=a==="a"?dl:pl(i,a);return[a,c.from(r[l])]}));return{format:i,color:o}}function d1(n,e,t){const i=n.getBoundingClientRect(),r=e-i.left,s=t-i.top;return{x:i.width===0?0:Uo(r/i.width*100,0,100),y:i.height===0?0:Uo((1-s/i.height)*100,0,100)}}const p1={class:"vacp-range-input-group"},m1=["for"],g1={class:"vacp-range-input-label-text vacp-range-input-label-text--hue"},_1=["id","value"],v1=["for"],x1={class:"vacp-range-input-label-text vacp-range-input-label-text--alpha"},y1=["id","value"],S1={class:"vacp-color-inputs"},M1={class:"vacp-color-input-group"},E1=["for"],T1=["id","value"],b1=["id","for","onInput"],A1={class:"vacp-color-input-label-text"},w1=["id","value","onInput"],R1=Rt({__name:"ColorPicker",props:{color:{default:"#ffffffff"},copy:{type:Function,default:void 0},id:{default:"color-picker"},visibleFormats:{default:()=>["hex","hsl","hwb","rgb"]},defaultFormat:{default:"hsl"},alphaChannel:{default:"show"}},emits:["color-change","color-copy"],setup(n,{expose:e,emit:t}){const i=["hex","hsl","hsv","hwb","rgb"],r=n,s=t;e({copyColor:F});const o=yt(null),a=yt(null),l=yt(null);let c=!1;const u=yt(r.visibleFormats.includes(r.defaultFormat)?r.defaultFormat:r.visibleFormats[0]),f=El({hex:"#ffffffff",hsl:{h:0,s:0,l:100,a:1},hsv:{h:0,s:0,v:100,a:1},hwb:{h:0,w:100,b:0,a:1},rgb:{r:255,g:255,b:255,a:1}}),h=ir(function(){const G=u.value,B=f[G];return G.split("").map(q=>{const H=B[q];return{value:pl(G,q).to(H),channel:q,label:q.toUpperCase()}}).concat(r.alphaChannel==="show"?[{value:dl.to(B.a),channel:"a",label:"Alpha"}]:[])}),p=ir(function(){return r.alphaChannel==="hide"&&[5,9].includes(f.hex.length)?f.hex.substring(0,f.hex.length-(f.hex.length-1)/4):f.hex});Or(()=>r.color,I),Xi(function(){document.addEventListener("mousemove",y,{passive:!1}),document.addEventListener("touchmove",S,{passive:!1}),document.addEventListener("mouseup",d),document.addEventListener("touchend",d),I(r.color)}),xm(function(){document.removeEventListener("mousemove",y),document.removeEventListener("touchmove",S),document.removeEventListener("mouseup",d),document.removeEventListener("touchend",d)});function _(){const G=(r.visibleFormats.findIndex(B=>B===u.value)+1)%r.visibleFormats.length;u.value=r.visibleFormats[G]}function x(G){c=!0,y(G)}function m(G){c=!0,S(G)}function d(){c=!1}function y(G){G.buttons!==1||c===!1||!(a.value instanceof HTMLElement)||v(a.value,G.clientX,G.clientY)}function S(G){if(c===!1||!(a.value instanceof HTMLElement))return;G.preventDefault();const B=G.touches[0];v(a.value,B.clientX,B.clientY)}function v(G,B,q){const H=d1(G,B,q),le=Object.assign({},f.hsv);le.s=H.x,le.v=H.y,M("hsv",le)}function L(G){if(!["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"].includes(G.key))return;G.preventDefault();const B=["ArrowLeft","ArrowDown"].includes(G.key)?-1:1,q=["ArrowLeft","ArrowRight"].includes(G.key)?"s":"v",H=G.shiftKey?10:1,le=f.hsv[q]+B*H,pe=Object.assign({},f.hsv);pe[q]=Uo(le,0,100),M("hsv",pe)}function I(G){const B=h1(G);B!==null&&M(B.format,B.color)}function R(G,B){const q=G.currentTarget,H=Object.assign({},f.hsv);H[B]=Number(q.value),M("hsv",H)}function D(G){const B=G.target;f_(B.value)&&M("hex",B.value)}function E(G,B){const q=G.target,H=u.value,le=Object.assign({},f[H]),pe=(B==="a"?dl:pl(H,B)).from(q.value);Number.isNaN(pe)||pe===void 0||(le[B]=pe,M(H,le))}function M(G,B){let q=B;if(r.alphaChannel==="hide")if(typeof B!="string")B.a=1,q=B;else if([5,9].includes(B.length)){const H=(B.length-1)/4;q=B.substring(0,B.length-H)+"f".repeat(H)}else[4,7].includes(B.length)&&(q=B+"f".repeat((B.length-1)/3));if(!s1(f[G],q)){f[G]=q;for(const H of i)H!==G&&(f[H]=a1(G,H,q));s("color-change",$())}o.value instanceof HTMLElement&&a.value instanceof HTMLElement&&l.value instanceof HTMLElement&&Y(o.value,a.value,l.value)}async function F(){const G=f[u.value],B=r.alphaChannel==="hide",q=Bc({color:G,format:u.value},B);await(r.copy?r.copy:window.navigator.clipboard.writeText)(q),s("color-copy",$())}function Y(G,B,q){const H=Bc({format:"hsl",color:f.hsl},!0);G.style.setProperty("--vacp-color",H),B.style.position="relative",B.style.backgroundColor=`hsl(${f.hsl.h} 100% 50%)`,B.style.backgroundImage="linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent)",q.style.boxSizing="border-box",q.style.position="absolute",q.style.left=`${f.hsv.s}%`,q.style.bottom=`${f.hsv.v}%`}function $(){const G=r.alphaChannel==="hide",B=Bc({color:f[u.value],format:u.value},G);return{colors:f,cssColor:B}}function ie(G){if(!["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"].includes(G.key)||!G.shiftKey)return;const B=G.currentTarget,q=Number(B.step),H=["ArrowLeft","ArrowDown"].includes(G.key)?-1:1,le=Number(B.value)+H*q*10,pe=Uo(le,Number(B.min),Number(B.max));B.value=String(pe-H*q)}return(G,B)=>(we(),Ve("div",{ref_key:"colorPicker",ref:o,class:"vacp-color-picker"},[ne("div",{ref_key:"colorSpace",ref:a,class:"vacp-color-space",onMousedown:x,onTouchstart:m},[ne("div",{ref_key:"thumb",ref:l,class:"vacp-color-space-thumb",tabindex:"0","aria-label":"Color space thumb",onKeydown:L},null,544)],544),ne("div",p1,[ne("label",{class:"vacp-range-input-label vacp-range-input-label--hue",for:`${G.id}-hue-slider`},[ne("span",g1,[Ko(G.$slots,"hue-range-input-label",{},()=>[B[2]||(B[2]=el("Hue"))])]),ne("input",{id:`${G.id}-hue-slider`,class:"vacp-range-input vacp-range-input--hue",value:f.hsv.h,type:"range",min:"0",max:"360",step:"1",onKeydownPassive:ie,onInput:B[0]||(B[0]=q=>R(q,"h"))},null,40,_1)],8,m1),G.alphaChannel==="show"?(we(),Ve("label",{key:0,class:"vacp-range-input-label vacp-range-input-label--alpha",for:`${G.id}-alpha-slider`},[ne("span",x1,[Ko(G.$slots,"alpha-range-input-label",{},()=>[B[3]||(B[3]=el("Alpha"))])]),ne("input",{id:`${G.id}-alpha-slider`,class:"vacp-range-input vacp-range-input--alpha",value:f.hsv.a,type:"range",min:"0",max:"1",step:"0.01",onKeydownPassive:ie,onInput:B[1]||(B[1]=q=>R(q,"a"))},null,40,y1)],8,v1)):zi("",!0)]),ne("button",{class:"vacp-copy-button",type:"button",onClick:F},[Ko(G.$slots,"copy-button",{},()=>[B[4]||(B[4]=ne("span",{class:"vacp-visually-hidden"},"Copy color",-1)),B[5]||(B[5]=ne("svg",{class:"vacp-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",width:"24",height:"24",viewBox:"0 0 32 32"},[ne("path",{d:"M25.313 28v-18.688h-14.625v18.688h14.625zM25.313 6.688c1.438 0 2.688 1.188 2.688 2.625v18.688c0 1.438-1.25 2.688-2.688 2.688h-14.625c-1.438 0-2.688-1.25-2.688-2.688v-18.688c0-1.438 1.25-2.625 2.688-2.625h14.625zM21.313 1.313v2.688h-16v18.688h-2.625v-18.688c0-1.438 1.188-2.688 2.625-2.688h16z",fill:"currentColor"})],-1))])]),ne("div",S1,[ne("div",M1,[u.value==="hex"?(we(),Ve("label",{key:0,class:"vacp-color-input-label",for:`${G.id}-color-hex`},[B[6]||(B[6]=ne("span",{class:"vacp-color-input-label-text"}," Hex ",-1)),ne("input",{id:`${G.id}-color-hex`,class:"vacp-color-input",type:"text",value:p.value,onInput:D},null,40,T1)],8,E1)):(we(!0),Ve(Tt,{key:1},An(h.value,({value:q,channel:H,label:le})=>(we(),Ve("label",{id:`${G.id}-color-${u.value}-${H}-label`,key:`${G.id}-color-${u.value}-${H}-label`,class:"vacp-color-input-label",for:`${G.id}-color-${u.value}-${H}`,onInput:pe=>E(pe,H)},[ne("span",A1,et(le),1),ne("input",{id:`${G.id}-color-${u.value}-${H}`,class:"vacp-color-input",type:"text",value:q,onInput:pe=>E(pe,H)},null,40,w1)],40,b1))),128))]),G.visibleFormats.length>1?(we(),Ve("button",{key:0,class:"vacp-format-switch-button",type:"button",onClick:_},[Ko(G.$slots,"format-switch-button",{},()=>[B[7]||(B[7]=ne("span",{class:"vacp-visually-hidden"},"Switch format",-1)),B[8]||(B[8]=ne("svg",{class:"vacp-icon","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"15"},[ne("path",{d:"M8 15l5-5-1-1-4 2-4-2-1 1zm4-9l1-1-5-5-5 5 1 1 4-2z",fill:"currentColor"})],-1))])])):zi("",!0)])],512))}}),C1={id:"fur-editor"},L1={id:"shape-editor",ref:"shape-editor"},I1=["value","selected"],P1={ref:"viewport"},D1={id:"color-editor",ref:"color-editor"},N1={key:0},U1={key:0},O1={key:1},F1=0,B1=Rt({__name:"FurEditor",setup(n){const e=pv("viewport");function t(){return(y.value.useColorTexture?"Disable":"Enable")+" color texture"}const i=yt(1),r=yt();let s,o,a;const l=yt(0);let c=performance.now();const u=yt({x:0,y:0,z:0});yt({x:0,y:0,z:0});const f=yt("Sphere"),h=yt(Fr.ROUND),p=yt(new He(0,0)),_=new He(0,0),x=yt(new He(0,0));function m(){if(!o)return;const D=new Ke;D.makeRotationFromEuler(new Qn(u.value.x,u.value.y,0)),S.fur.setRotationFromMatrix(D)}function d(D){if(D.buttons!==1||!o)return;const E=.005;p.value.x=(D.movementX-_.x)*E,p.value.y=(D.movementY-_.y)*E,_.x=D.movementX,_.y=D.movementY,u.value.x+=D.movementY*E,u.value.y+=D.movementX*E,m()}const y=yt(kf());let S;window.onresize=function(){if(!o||!e.value||!a||!r.value)return;const D=r.value.clientWidth,E=r.value.clientHeight;e.value.width=D,e.value.height=E,o.aspect=D/E,o.updateProjectionMatrix(),a.setSize(D,E)};function v(D,E){const M=D.clientWidth,F=D.clientHeight;D.width=M,D.height=F,s=new mg,o=new tn(75,M/F,.1,1e3),a=new Rg({canvas:D,context:E}),a.setSize(M,F),o.position.z=i.value,o.position.x=F1;const Y=new fl(.5);S=Ig(Y),f.value="Sphere",S.properties.applyFog=!1,Ou(S,h.value),s==null||s.add(S.fur),Ga(S,Cg,"colorTexture"),Ga(S,Bu,"voronoise"),y.value=S.properties;function $(){l.value=(performance.now()-c)/1e3,c=performance.now(),S&&y&&(x.value=S.furPhysic.update(l.value,p.value),p.value=new He(0,0),y.value.rotationalForce=x.value,Fu(S)),s&&o&&(a==null||a.render(s,o))}a.setAnimationLoop($),D.addEventListener("mousemove",d),m()}async function L(D){return new Promise((E,M)=>{new TR().load(D,Y=>{Y.scene.traverse($=>{$.isMesh&&E($)}),M(new Error("No mesh found in GLTF"))})})}function I(){f.value=="Fox"?L(ER).then(D=>{D.geometry.rotateX(-90),S.baseGeometry=D.geometry,Zd(S),as(S)}).catch(D=>console.error(D)):f.value=="Plane"?(S.baseGeometry=new Us(5,5,40,40),Ga(S,Bu),as(S)):f.value=="Sphere"&&(S.baseGeometry=new fl(.5),Zd(S),as(S))}Xi(()=>{if(e.value instanceof HTMLCanvasElement){if(!e.value)throw new Error("Invalid canvas element provided");const D=e.value.getContext("webgl2");if(!D)throw new Error("WebGL2 context not available");v(e.value,D),o==null||o.updateProjectionMatrix()}else console.error("Canvas reference is not an HTMLCanvasElement")}),Al(()=>{var D;(D=e.value)==null||D.removeEventListener("mousemove",d)});const R=yt(!1);return(D,E)=>(we(),Ve("div",{id:"frame",ref_key:"frameRef",ref:r},[E[19]||(E[19]=ne("h1",null,"Fur editing",-1)),ne("div",C1,[ne("div",L1,[E[17]||(E[17]=ne("p",null,"Fur shape:",-1)),Dn(ne("select",{"onUpdate:modelValue":E[0]||(E[0]=M=>f.value=M),onChange:I},E[16]||(E[16]=[ne("option",null,"Fox",-1),ne("option",null,"Plane",-1),ne("option",null,"Sphere",-1)]),544),[[Lh,f.value]]),E[18]||(E[18]=ne("p",null,"Strand shape:",-1)),Dn(ne("select",{"onUpdate:modelValue":E[1]||(E[1]=M=>h.value=M),onChange:E[2]||(E[2]=()=>st(Ou)(st(S),h.value))},[(we(!0),Ve(Tt,null,An(Object.values(st(Fr)),M=>(we(),Ve("option",{key:M,value:M,selected:M===h.value},et(M),9,I1))),128))],544),[[Lh,h.value]]),ne("p",null,"Scale: "+et(y.value.scale),1),Dn(ne("input",{type:"range","onUpdate:modelValue":E[3]||(E[3]=M=>y.value.scale=M),min:"1",max:"1000",step:"1"},null,512),[[vi,y.value.scale]]),ne("p",null,"Thickness bottom: "+et(y.value.thicknessBot),1),Dn(ne("input",{type:"range","onUpdate:modelValue":E[4]||(E[4]=M=>y.value.thicknessBot=M),min:"0.01",max:"1",step:"0.01"},null,512),[[vi,y.value.thicknessBot]]),ne("p",null,"Thickness top: "+et(y.value.thicknessTop),1),Dn(ne("input",{type:"range","onUpdate:modelValue":E[5]||(E[5]=M=>y.value.thicknessTop=M),min:"0.01",max:"1",step:"0.01"},null,512),[[vi,y.value.thicknessTop]]),ne("p",null,"Threshold: "+et(y.value.threshold),1),Dn(ne("input",{type:"range","onUpdate:modelValue":E[6]||(E[6]=M=>y.value.threshold=M),min:"0",max:"1",step:"0.01"},null,512),[[vi,y.value.threshold]]),ne("p",null,"Number of Instances: "+et(y.value.nbInstances),1),Dn(ne("input",{type:"range","onUpdate:modelValue":E[7]||(E[7]=M=>y.value.nbInstances=M),min:"1",max:"100",step:"1",onChange:E[8]||(E[8]=()=>st(as)(st(S)))},null,544),[[vi,y.value.nbInstances]]),ne("p",null,"Total Height: "+et(y.value.totalHeight),1),Dn(ne("input",{type:"range","onUpdate:modelValue":E[9]||(E[9]=M=>y.value.totalHeight=M),min:"0.001",max:"1",step:"0.001",onChange:E[10]||(E[10]=()=>st(as)(st(S)))},null,544),[[vi,y.value.totalHeight]]),ne("p",null,"Curvature: "+et(y.value.curvature),1),Dn(ne("input",{type:"range","onUpdate:modelValue":E[11]||(E[11]=M=>y.value.curvature=M),min:"1",max:"20",step:"0.5"},null,512),[[vi,y.value.curvature]]),ne("p",null,"Roughness: "+et(y.value.displacementStrength),1),Dn(ne("input",{type:"range","onUpdate:modelValue":E[12]||(E[12]=M=>y.value.displacementStrength=M),min:"0",max:"0.5",step:"0.01"},null,512),[[vi,y.value.displacementStrength]])],512),ne("canvas",P1,null,512),ne("div",D1,[je(sl,{content:"colorize",onClick:E[13]||(E[13]=()=>R.value=!R.value)}),R.value?(we(),Ve("div",N1,[je(sl,{content:t(),onClick:E[14]||(E[14]=M=>y.value.useColorTexture=!y.value.useColorTexture)},null,8,["content"]),y.value.useColorTexture?(we(),Ve("div",U1,[ne("p",null,"Color texture scale: "+et(y.value.colorTextureScale),1),Dn(ne("input",{type:"range","onUpdate:modelValue":E[15]||(E[15]=M=>y.value.colorTextureScale=M),min:"0.01",max:"10",step:"0.01"},null,512),[[vi,y.value.colorTextureScale]])])):(we(),Ve("div",O1,[(we(!0),Ve(Tt,null,An(y.value.colors,(M,F)=>(we(),Ve("div",{key:F},[ne("p",null,et(F>0?"End":"Base")+" Color",1),R.value?(we(),Jt(st(R1),{key:0,class:"picker","default-format":"rgb",onColorChange:Y=>{if(!y.value)return;const{rgb:$}=Y.colors;M.color.x=$.r/255,M.color.y=$.g/255,M.color.z=$.b/255}},null,8,["onColorChange"])):zi("",!0)]))),128))]))])):zi("",!0)],512)])],512))}}),k1=Rt({__name:"ProjectShellTexturing",setup(n){return(e,t)=>(we(),Jt(Wo,{title:"Shell Texturing",context:`While building this website, I wanted to implement a small project to
                showcase my skills. I decided to create a shell texturing effect using WebGL and
                Three.js.`,technologies:["WebGL","Typescript","Three.js"],links:[{url:"https://github.com/Crhonopost/portfoliopengl",name:"Github"}]},{default:Vr(()=>[je(B1),t[0]||(t[0]=ne("h1",null,"Concerns",-1)),t[1]||(t[1]=ne("p",null,"Every strands are aligned which instantly break the illusion.",-1))]),_:1,__:[0,1]}))}}),H1={class:"project-section row"},V1=["src","alt"],z1={class:"column"},G1=["src","alt"],Bi=Rt({__name:"ProjectSection",props:{title:{},desc:{},imagePath:{},imageAlt:{},imageFirst:{type:Boolean}},setup(n){return(e,t)=>{var i,r;return we(),Ve("div",H1,[e.imageFirst?(we(),Ve("img",{key:0,class:"round",src:e.imagePath,alt:e.imageAlt},null,8,V1)):zi("",!0),ne("div",z1,[ne("h2",null,et(e.title),1),ne("p",null,[el(et(e.desc)+" ",1),(we(!0),Ve(Tt,null,An(((r=(i=e.$slots).default)==null?void 0:r.call(i))??[],(s,o)=>(we(),Jt(wl(s),{key:o}))),128))])]),e.imageFirst?zi("",!0):(we(),Ve("img",{key:1,class:"round",src:e.imagePath,alt:e.imageAlt},null,8,G1))])}}}),W1=Rt({__name:"ProjectRendering",setup(n){const{t:e}=ti();return(t,i)=>(we(),Jt(Wo,{title:st(nn)(st(e)("projects.rendering.title")),context:`In the context of my first year of master's degree, I had the opportunity to experiment on some rendering techniques.
        The first one being ray tracing (in deferred on the CPU) and the second being the render in real time of volumetric clouds with ray marching`,technologies:["C++","OpenGL","GLSL","ImGUI"],links:[{url:"https://github.com/TER-VOX/cloud",name:"Volumetric clouds"},{url:"https://github.com/Crhonopost/Ray-tracing",name:"Ray tracing"}]},{default:Vr(()=>[je(Bi,{title:"Ray tracing",desc:`During my first semester, I had the opportunity to work on the implementation of
            a simple ray tracer including an acceleration structure implementation. I worked
            on the implementation of ray tracing with ray-sphere, ray-plane, and
            ray-triangle collisions. The solution implements various effects such as
            refraction, reflection, and Beer-Lambert for lighting, as well as soft shadows.
            I also implemented a BVH as an acceleration structure to speed up the rendering
            of complex meshes.`,"image-path":"/projects/raytracing/refraction.png","image-alt":"Refraction test","image-first":!1}),je(Bi,{title:"Volume rendering",desc:`This project was an opportunity to discover different approaches to modeling
            (from noise, using particles) as well as rendering (using impostors to visualize
            particles, ray marching of a volume). I also had the opportunity to experiment
            with the geometry shader and compute shaders to minimize CPU-GPU communication
            in order to render particles efficiently.`,"image-path":"/projects/TER/moving_cloud.gif","image-alt":"Animated cloud","image-first":!0})]),_:1},8,["title"]))}}),X1={class:"caroussel"},j1=["src","alt"],$1=Rt({__name:"CarousselComponent",props:{images:{}},setup(n){return(e,t)=>(we(),Ve("div",X1,[(we(!0),Ve(Tt,null,An(e.images,(i,r)=>(we(),Ve("div",{key:r,class:"caroussel-item column"},[ne("img",{src:i.path,alt:i.desc,class:"round"},null,8,j1),ne("p",null,et(i.desc),1)]))),128))]))}}),h_=Rn($1,[["__scopeId","data-v-2913d9b9"]]),Y1=Rt({__name:"ProjectGameEngine",setup(n){const{t:e}=ti();return(t,i)=>(we(),Jt(Wo,{title:"Star Engine",context:`During the second semester of my first year of master's degree in Imagine at the\r
                Faculty of Sciences, I worked on a game engine project. Being passionate about video\r
                game creation, it was an excellent experience. Limited by the submission date, there\r
                is still much to add.`,technologies:["C++","OpenGL","GLSL","ImGUI"],links:[{url:"https://github.com/Crhonopost/Star-engine",name:"Github"}]},{default:Vr(()=>[je(Bi,{title:st(nn)(st(e)("titles.learning")),desc:`My goal was to build a general purpose game engine. Through this project, I\r
                    implemented an Entity-Component System,\r
                    PBR rendering, a lightweight editor for\r
                    debugging, and an early physics system handling collisions\r
                    (AABB, OBB, spheres, planes, rays, and rigid bodies collision reactions). It was\r
                    my first large-scale C++ project — a challenging but extremely rewarding\r
                    experience.`,"image-first":!1,"image-path":"./projects/gameengine/main_scene.png","image-alt":"Main menu of the game engine"},null,8,["title"]),je(h_,{images:[{path:"./projects/gameengine/init.gif",desc:"Some of the work done on the camera"},{path:"./projects/gameengine/moving.gif",desc:"Second example of camera"}],class:"caroussel"}),je(Bi,{title:"Next Steps",desc:`The first version taught me enough to start over. \r
                The upcoming V2 focuses on a stronger code architecture and takes inspiration\r
                from Godot’s design, emphasizing inheritance and composition over a pure ECS\r
                approach.`,"image-first":!0,"image-path":"./projects/gameengine/new_editor.png","image-alt":"New menu with a correct scene structure"}),i[0]||(i[0]=ne("div",{id:"list"},[ne("h3",null,"Some of the features I want to implement"),ne("ul",null,[ne("li",null,"Independent renderer exposing a clear API (done)"),ne("li",null,"Better resource and scene serialization management (done)"),ne("li",null,"Improved logging and debugging tools (done)"),ne("li",null,"Global illumination with light probes"),ne("li",null,"Physics rework and scripting support")])],-1))]),_:1,__:[0]}))}}),q1={id:"apropos"},K1={class:"glass"},J1=Rt({__name:"AproposComponent",setup(n){const{t:e}=ti();return(t,i)=>(we(),Ve("div",q1,[ne("div",K1,[ne("h1",null,et(st(nn)(st(e)("titles.about"))),1),ne("p",null,et(st(e)("contents.about")),1)])]))}}),Z1=Rn(J1,[["__scopeId","data-v-b0d856ba"]]),Q1={class:"glass skill"},eC=["src","alt","title"],tC=Rt({__name:"SkillComponent",props:{name:{},icon:{},anotation:{},isWeb:{type:Boolean}},setup(n){return(e,t)=>(we(),Ve("div",Q1,[ne("img",{src:e.icon,alt:e.name,title:e.name,class:"skill-icon"},null,8,eC)]))}}),Bp=Rn(tC,[["__scopeId","data-v-904f9580"]]),nC={id:"page"},iC={class:"skill-set-header"},rC={id:"skill-set-container"},sC={class:"skill-set"},oC={class:"skill-set"},aC=Rt({__name:"SkillSetComponent",props:{skills:{}},setup(n){const{t:e}=ti(),t=yt(!0);yt(gn.NONE);const i=yt(null),r=yt(1),s=a=>r.value<2?"":Math.floor(a/r.value)%2===1?"offset-row":"",o=()=>{if(i.value){const l=getComputedStyle(i.value).getPropertyValue("grid-template-columns").split(" ").length;r.value=l}};return Xi(()=>{cf(o),window.addEventListener("resize",o)}),(a,l)=>(we(),Ve("div",nC,[ne("div",iC,[ne("h2",null,et(st(nn)(st(e)("titles.skills"))),1),ne("p",null,et(st(nn)(st(e)("descriptions.skills"))),1)]),ne("div",rC,[ne("div",sC,[(we(!0),Ve(Tt,null,An(a.skills.filter(c=>!c.isWeb),(c,u)=>(we(),Ve("div",{key:c.name,class:go(s(u))},[je(Bp,{name:c.name,icon:c.icon,anotation:c.anotation,"is-web":c.isWeb},null,8,["name","icon","anotation","is-web"])],2))),128))]),Dn(ne("div",oC,[(we(!0),Ve(Tt,null,An(a.skills.filter(c=>c.isWeb),(c,u)=>(we(),Ve("div",{key:c.name,class:go(s(u))},[je(Bp,{name:c.name,icon:c.icon,anotation:c.anotation,"is-web":c.isWeb},null,8,["name","icon","anotation","is-web"])],2))),128))],512),[[M0,t.value]])])]))}}),lC=Rn(aC,[["__scopeId","data-v-d971d55a"]]),cC={class:"card"},uC=["src"],fC={class:"technologies"},hC={class:"right-offset"},dC={href:"#"},pC=Rt({__name:"ProjectShortComponent",props:{title:{},description:{},technologies:{},illustration:{}},setup(n){const{t:e}=ti();return(t,i)=>(we(),Ve("div",cC,[ne("h1",null,et(t.title),1),ne("img",{src:t.illustration,alt:"Project Illustration"},null,8,uC),ne("p",null,et(t.description),1),ne("div",fC,[(we(!0),Ve(Tt,null,An(t.technologies,r=>(we(),Jt(Pg,{class:"tag",key:r,name:r},null,8,["name"]))),128))]),ne("div",hC,[ne("a",dC,et(st(nn)(st(e)("viewMore"))),1)])]))}}),mC=Rn(pC,[["__scopeId","data-v-f71cdf61"]]),gC={id:"page"},_C=Rt({__name:"ProjectShorts",emits:["projectClicked"],setup(n,{emit:e}){const{t}=ti(),i=e,r=[{title:"Shell texturing",description:t("projects.shell.quickDesc"),technologies:["WebGL","Typescript","Three.js"],illustration:"./projects/shelltexturing/fur.png"},{title:nn(t("projects.engine.title")),description:t("projects.engine.quickDesc"),technologies:["OpenGL","C++"],illustration:"./projects/gameengine/illu_game.png"},{title:nn(t("projects.rendering.title")),description:t("projects.rendering.quickDesc"),technologies:["OpenGL","C++"],illustration:"/projects/TER/cloud-around.gif"},{title:nn(t("projects.games.title")),description:t("projects.games.quickDesc"),technologies:["Godot","Gdscript","C#"],illustration:"./projects/games/what.png"},{title:nn(t("projects.web.title")),description:t("projects.web.quickDesc"),technologies:["Vue.js","Node.js","PHP","SQL"],illustration:"./projects/web/satiscraftory.png"}],s=yt(null);return Xi(()=>{s!=null&&s.value&&Dg(s.value)&&s.value.addEventListener("wheel",o=>{o.stopPropagation()})}),(o,a)=>(we(),Ve("div",gC,[ne("h1",null,et(st(nn)(st(t)("titles.projects"))),1),ne("div",{class:"projects-container",ref_key:"projectContainer",ref:s},[(we(),Ve(Tt,null,An(r,(l,c)=>je(mC,{key:c,class:"glass clickable project",title:l.title,description:l.description,technologies:l.technologies,illustration:l.illustration,onClick:u=>i("projectClicked",c)},null,8,["title","description","technologies","illustration","onClick"])),64))],512)]))}}),vC=Rn(_C,[["__scopeId","data-v-74150f54"]]),xC=Rt({__name:"ProjectGames",setup(n){return(e,t)=>(we(),Jt(Wo,{title:"Games",context:"As a hobby I love making games. Most of the times it is more about implementing an idea rather than creating a full game",technologies:["Godot","C#","GDScript"],links:[{url:"https://ohhnyx.itch.io/dicecraft",name:"Game jam contribution"},{url:"https://github.com/Crhonopost/Behavior_tree_4.2",name:"Godot behavior tree plugin"}]},{default:Vr(()=>[je(Bi,{title:"Behavior tree",desc:`I created a behavior tree plugin for Godot 4.2 mono, which is available on the Asset
                Library. It allows you to create complex AI behaviors in a visual way, making it
                easier to manage and understand the logic behind AI actions. The plugin is
                straightforward and does not have much optimization.`,"image-path":"./projects/games/illu_behavior.png","image-alt":"Typical use of the behavior tree using composition in godot.","image-first":!1}),ne("div",null,[t[0]||(t[0]=ne("h2",null,"Dicecraft",-1)),t[1]||(t[1]=ne("p",null," I participated in a game jam where, as a team of 3, we created a game called Dicecraft. The game is about crafting dice in order to manipulate randomness and maximize combos and units spawn quantities to fight against an AI. The game lacks content and polish, but it was a fun project and the core mechanics are solid. ",-1)),t[2]||(t[2]=ne("a",{href:"https://ohhnyx.itch.io/dicecraft"},"Game link",-1)),je(h_,{images:[{path:"./projects/games/dice_main.png",desc:"Main menu, we must protect the left while attacking the right"},{path:"./projects/games/dice_throw.png",desc:"We attack by throwing our dice on the board"},{path:"./projects/games/dice_face_custom.png",desc:"Experience is gained by killing ennemies. When leveling up we can customize our dice or buy new one"}],class:"caroussel"})]),je(Bi,{title:"Other projects",desc:`I have worked on several other projects, but they act more as experiments or proofs
                of concept rather than full-fledged games. These projects include various mechanics
                from magic spells programming to 2D platformers about time control.`,"image-path":"./projects/games/glyphes.png","image-alt":"On the right is the interface to create spell. The result can be seen on the left in the scene. 3 symbols expand the water as we can see.","image-first":!0})]),_:1}))}}),yC={class:"studies-card"},SC=Rt({__name:"StudiesCard",props:{date:{},location:{},description:{}},setup(n){return(e,t)=>(we(),Ve("div",yC,[ne("div",null,[ne("h4",null,et(e.date),1),ne("h5",null,et(e.location),1)]),ne("h4",null,et(e.description),1)]))}}),no=Rn(SC,[["__scopeId","data-v-ad0bbfb9"]]),MC={id:"experiences"},EC={class:"glass"},TC={class:"glass",id:"pro"},bC=Rt({__name:"ExperiencesComponent",setup(n){const{t:e}=ti();return(t,i)=>(we(),Ve("div",MC,[ne("div",EC,[ne("h1",null,et(st(nn)(st(e)("titles.studies"))),1),je(no,{date:"2024 - 2026",location:"Faculté des sciences de Montpellier",description:"Master Imagine"}),i[0]||(i[0]=ne("div",{class:"separator_h"},null,-1)),je(no,{date:"2021 - 2024",location:"IUT de Montpellier",description:`BUT Informatique (parcours Réalisation
            d'Application: Développement, Validation)`}),i[1]||(i[1]=ne("div",{class:"separator_h"},null,-1)),je(no,{date:"2021",location:"Lycée Albert Einstein de Bagnols sur Cèze",description:"Bac général options NSI et Mathématiques expertes"})]),ne("div",TC,[ne("h1",null,et(st(nn)(st(e)("titles.professional"))),1),je(no,{date:"april - june 2024",location:"Andragogy (Sète)",description:"web developer internship"}),i[2]||(i[2]=ne("div",{class:"separator_h"},null,-1)),je(no,{date:"april 2023 - january 2024",location:"Kapix (Montpellier)",description:"web developer internship"})])]))}}),AC=Rn(bC,[["__scopeId","data-v-24d1d5e5"]]),wC=Rt({__name:"ProjectWeb",setup(n){return(e,t)=>(we(),Jt(Wo,{title:"Web",context:"During my studies, I had the opportunity to work on several web projects. It was a great way to learn about web technologies and how to create advanced web applications.",technologies:["Javascript / Typescript","Vue.js","Node.js","SQL","PHP"],links:[{url:"https://github.com/Projet-Web-Recette/Frontend-recette",name:"git SatisCraftory"},{url:"https://github.com/odilonv/explore",name:"git Explore"},{url:"https://github.com/Crhonopost/Rich-Vote",name:"git Rich Vote"}]},{default:Vr(()=>[je(Bi,{title:"SatisCraftory",desc:`The goal of this project was to make a web application providing receipes around a
                specific theme. Ours was about the game Satisfactory. I worked on the frontend part
                of the application, which included a minigame that I build entirely using Vue
                reactivity.`,"image-path":"/projects/web/satiscraftory.png","image-alt":"SatisCraftory screenshot","image-first":!1}),je(Bi,{title:"Explore",desc:`For this project, I worked on the backend part of a web application. Implementing
                pathfinding algorithms and database structure and optimization.`,"image-path":"/projects/web/explore_ui.png","image-alt":"Explore application screenshot","image-first":!0}),je(Bi,{title:"Rich Vote",desc:`I also worked on the backend of a web application for voting. The goal was to offer
                different ways to vote and tools to create and manages propositions.`,"image-path":"/projects/web/RichVote_liste.png","image-alt":"Rich Vote application screenshot","image-first":!1})]),_:1}))}}),RC={id:"layout"},CC=Rt({__name:"App",setup(n){const e=[{name:"C++",icon:"./logo/cpp.png",anotation:gn.LANGUAGE,isWeb:!1},{name:"GLSL",icon:"./logo/opengl.png",anotation:gn.LANGUAGE,isWeb:!1},{name:"Godot",icon:"./logo/godot.png",anotation:gn.TOOL,isWeb:!1},{name:"Java",icon:"./logo/java.png",anotation:gn.LANGUAGE,isWeb:!1},{name:"C#",icon:"./logo/csharp.png",anotation:gn.LANGUAGE,isWeb:!1},{name:"HTML",icon:"./logo/html.png",anotation:gn.LANGUAGE,isWeb:!0},{name:"CSS",icon:"./logo/css.png",anotation:gn.LANGUAGE,isWeb:!0},{name:"PostgreSQL",icon:"./logo/postgre.png",anotation:gn.LANGUAGE,isWeb:!0},{name:"TypeScript",icon:"./logo/ts.png",anotation:gn.LANGUAGE,isWeb:!0},{name:"NodeJS",icon:"./logo/node.png",anotation:gn.TOOL,isWeb:!0},{name:"VueJS",icon:"./logo/vue.png",anotation:gn.TOOL,isWeb:!0},{name:"NestJS",icon:"./logo/nest.png",anotation:gn.TOOL,isWeb:!0}],t=yt(),i=yt();function r(l){var c;if(!((c=t==null?void 0:t.value)!=null&&c.canScroll(l))){console.warn("Cannot scroll in this direction:",l);return}t==null||t.value.moveOneSlide(l),i!=null&&i.value&&i.value.movePlaine(l==="f"?"front":"back")}Xi(()=>{document.addEventListener("wheel",l=>{const c=l.deltaY<0?"f":"b";r(c),l.preventDefault()},{passive:!1})});function s(l){var c;a.value=l,(c=t==null?void 0:t.value)==null||c.moveOneSlide("f"),i==null||i.value.movePlaine("front")}const o=[k1,Y1,W1,xC,wC],a=yt(-1);return(l,c)=>{var u,f;return we(),Ve(Tt,null,[c[1]||(c[1]=ne("head",null,[ne("link",{href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined",rel:"stylesheet"})],-1)),ne("div",RC,[ne("header",null,[je(Y0,{onMoved:c[0]||(c[0]=h=>r(h)),"can-move-backward":(u=t.value)==null?void 0:u.canScroll("b"),"can-move-forward":(f=t.value)==null?void 0:f.canScroll("f")},null,8,["can-move-backward","can-move-forward"])]),ne("main",null,[je(dA,{ref_key:"sceneComponentRef",ref:i},null,512),je(Z0,{ref_key:"depthListRef",ref:t,id:"depth"},{default:Vr(()=>[je(Z1,{class:"item"}),je(AC),je(lC,{class:"item",skills:e}),je(vC,{class:"item",onProjectClicked:s}),a.value>=0?(we(),Jt(wl(o[a.value]),{key:0,class:"item"})):zi("",!0)]),_:1},512)])])],64)}}}),LC=Rn(CC,[["__scopeId","data-v-1721f04e"]]),IC=rR({legacy:!1,locale:"fr",fallbackLocale:"en",messages:{en:{hello:"hello",viewMore:"view more",titles:{about:"about",studies:"studies",professional:"professional",skills:"skills",projects:"projects",links:"links",technologies:"technologies",context:"context",learning:"learning"},descriptions:{skills:"Here are some of the skills I have acquired over the years."},contents:{about:"I'm Nathan Souvignet, a fourth-year Computer Science student with a strong passion for computer graphics and video game development. I enjoy bringing new ideas to life, especially by creating tools and features that empower artists and developers whether it's through innovative rendering techniques, gameplay mechanics, or engine systems. My experience spans C++, OpenGL, Godot, and web technologies, and I’m always eager to learn and experiment."},projects:{shell:{quickDesc:"A small implementation done for this portfolio"},rendering:{title:"rendering approaches",quickDesc:"Discovering ray tracing, fluid volume rendering with ray marching and other techniques"},engine:{title:"game engine",quickDesc:"Developing game engines"},games:{title:"game dev",quickDesc:"Some of my work surrounding game creation"},web:{title:"web dev",quickDesc:"Some of my work surrounding web development"}}},fr:{hello:"bonjour",viewMore:"voir plus",titles:{about:"à propos",studies:"études",professional:"professionnel",skills:"compétences",projects:"projets",links:"liens",technologies:"technologies",context:"contexte",learning:"apprentissage"},descriptions:{skills:"Quelques compétences que j'ai acquises au fil des années."},contents:{about:"Je m'appelle Nathan Souvignet, étudiant en quatrième année d’informatique, passionné par le graphisme informatique et le développement de jeux vidéo. J’aime donner vie à de nouvelles idées, notamment en créant des outils et des fonctionnalités qui facilitent le travail des artistes et des développeurs que ce soit par des techniques de rendu innovantes, des mécaniques de jeu ou des systèmes de moteur. J’ai de l’expérience en C++, OpenGL, Godot et technologies web, et je suis toujours motivé à apprendre et à expérimenter."},projects:{shell:{quickDesc:"Une implémentation rapide pour le portfolio"},rendering:{title:"techniques de rendu",quickDesc:"Découverte du ray tracing, du rendu volumique de fluide via ray marching et autres techniques"},engine:{title:"moteur de jeu",quickDesc:"Développement de moteurs de jeu"},games:{quickDesc:"D'autres projets autour de la création de jeux vidéo"},web:{quickDesc:"Quelques projets de développement web"}}}}}),d_=k0(LC);d_.use(IC);d_.mount("#app");
