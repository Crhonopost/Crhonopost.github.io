var qm=Object.defineProperty;var $m=(t,e,n)=>e in t?qm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Xn=(t,e,n)=>$m(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Yc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const vt={},Zr=[],ti=()=>{},vh=()=>!1,Ca=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Kc=t=>t.startsWith("onUpdate:"),Yt=Object.assign,Zc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ym=Object.prototype.hasOwnProperty,ft=(t,e)=>Ym.call(t,e),Xe=Array.isArray,Jr=t=>Pa(t)==="[object Map]",xh=t=>Pa(t)==="[object Set]",qe=t=>typeof t=="function",Ct=t=>typeof t=="string",Di=t=>typeof t=="symbol",Tt=t=>t!==null&&typeof t=="object",Sh=t=>(Tt(t)||qe(t))&&qe(t.then)&&qe(t.catch),Eh=Object.prototype.toString,Pa=t=>Eh.call(t),Km=t=>Pa(t).slice(8,-1),Mh=t=>Pa(t)==="[object Object]",Jc=t=>Ct(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Os=Yc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),La=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Zm=/-\w/g,Cn=La(t=>t.replace(Zm,e=>e.slice(1).toUpperCase())),Jm=/\B([A-Z])/g,Rr=La(t=>t.replace(Jm,"-$1").toLowerCase()),Ia=La(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ka=La(t=>t?`on${Ia(t)}`:""),Wi=(t,e)=>!Object.is(t,e),Za=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},yh=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Qm=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ku;const Da=()=>Ku||(Ku=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xs(t){if(Xe(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Ct(i)?ig(i):xs(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Ct(t)||Tt(t))return t}const eg=/;(?![^(]*\))/g,tg=/:([^]+)/,ng=/\/\*[^]*?\*\//g;function ig(t){const e={};return t.replace(ng,"").split(eg).forEach(n=>{if(n){const i=n.split(tg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Hn(t){let e="";if(Ct(t))e=t;else if(Xe(t))for(let n=0;n<t.length;n++){const i=Hn(t[n]);i&&(e+=i+" ")}else if(Tt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Zu(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Ct(e)&&(t.class=Hn(e)),n&&(t.style=xs(n)),t}const rg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sg=Yc(rg);function bh(t){return!!t||t===""}const Th=t=>!!(t&&t.__v_isRef===!0),dt=t=>Ct(t)?t:t==null?"":Xe(t)||Tt(t)&&(t.toString===Eh||!qe(t.toString))?Th(t)?dt(t.value):JSON.stringify(t,Ah,2):String(t),Ah=(t,e)=>Th(e)?Ah(t,e.value):Jr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[Ja(i,s)+" =>"]=r,n),{})}:xh(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ja(n))}:Di(e)?Ja(e):Tt(e)&&!Xe(e)&&!Mh(e)?String(e):e,Ja=(t,e="")=>{var n;return Di(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let on;class wh{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=on,!e&&on&&(this.index=(on.scopes||(on.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=on;try{return on=this,e()}finally{on=n}}}on(){++this._on===1&&(this.prevScope=on,on=this)}off(){this._on>0&&--this._on===0&&(on=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function og(t){return new wh(t)}function ag(){return on}let xt;const Qa=new WeakSet;class Rh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,on&&on.active&&on.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Qa.has(this)&&(Qa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ph(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ju(this),Lh(this);const e=xt,n=Vn;xt=this,Vn=!0;try{return this.fn()}finally{Ih(this),xt=e,Vn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)tu(e);this.deps=this.depsTail=void 0,Ju(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Qa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){kl(this)&&this.run()}get dirty(){return kl(this)}}let Ch=0,Fs,Bs;function Ph(t,e=!1){if(t.flags|=8,e){t.next=Bs,Bs=t;return}t.next=Fs,Fs=t}function Qc(){Ch++}function eu(){if(--Ch>0)return;if(Bs){let e=Bs;for(Bs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Fs;){let e=Fs;for(Fs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Lh(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ih(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),tu(i),lg(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function kl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Dh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Dh(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===$s)||(t.globalVersion=$s,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!kl(t))))return;t.flags|=2;const e=t.dep,n=xt,i=Vn;xt=t,Vn=!0;try{Lh(t);const r=t.fn(t._value);(e.version===0||Wi(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{xt=n,Vn=i,Ih(t),t.flags&=-3}}function tu(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)tu(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function lg(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Vn=!0;const Uh=[];function Ai(){Uh.push(Vn),Vn=!1}function wi(){const t=Uh.pop();Vn=t===void 0?!0:t}function Ju(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=xt;xt=void 0;try{e()}finally{xt=n}}}let $s=0;class cg{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class nu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!xt||!Vn||xt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==xt)n=this.activeLink=new cg(xt,this),xt.deps?(n.prevDep=xt.depsTail,xt.depsTail.nextDep=n,xt.depsTail=n):xt.deps=xt.depsTail=n,Nh(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=xt.depsTail,n.nextDep=void 0,xt.depsTail.nextDep=n,xt.depsTail=n,xt.deps===n&&(xt.deps=i)}return n}trigger(e){this.version++,$s++,this.notify(e)}notify(e){Qc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{eu()}}}function Nh(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Nh(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Hl=new WeakMap,yr=Symbol(""),Vl=Symbol(""),Ys=Symbol("");function qt(t,e,n){if(Vn&&xt){let i=Hl.get(t);i||Hl.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new nu),r.map=i,r.key=n),r.track()}}function xi(t,e,n,i,r,s){const o=Hl.get(t);if(!o){$s++;return}const a=l=>{l&&l.trigger()};if(Qc(),e==="clear")o.forEach(a);else{const l=Xe(t),c=l&&Jc(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===Ys||!Di(h)&&h>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Ys)),e){case"add":l?c&&a(o.get("length")):(a(o.get(yr)),Jr(t)&&a(o.get(Vl)));break;case"delete":l||(a(o.get(yr)),Jr(t)&&a(o.get(Vl)));break;case"set":Jr(t)&&a(o.get(yr));break}}eu()}function Pr(t){const e=ut(t);return e===t?e:(qt(e,"iterate",Ys),wn(t)?e:e.map(Vt))}function Ua(t){return qt(t=ut(t),"iterate",Ys),t}const ug={__proto__:null,[Symbol.iterator](){return el(this,Symbol.iterator,Vt)},concat(...t){return Pr(this).concat(...t.map(e=>Xe(e)?Pr(e):e))},entries(){return el(this,"entries",t=>(t[1]=Vt(t[1]),t))},every(t,e){return ui(this,"every",t,e,void 0,arguments)},filter(t,e){return ui(this,"filter",t,e,n=>n.map(Vt),arguments)},find(t,e){return ui(this,"find",t,e,Vt,arguments)},findIndex(t,e){return ui(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ui(this,"findLast",t,e,Vt,arguments)},findLastIndex(t,e){return ui(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ui(this,"forEach",t,e,void 0,arguments)},includes(...t){return tl(this,"includes",t)},indexOf(...t){return tl(this,"indexOf",t)},join(t){return Pr(this).join(t)},lastIndexOf(...t){return tl(this,"lastIndexOf",t)},map(t,e){return ui(this,"map",t,e,void 0,arguments)},pop(){return bs(this,"pop")},push(...t){return bs(this,"push",t)},reduce(t,...e){return Qu(this,"reduce",t,e)},reduceRight(t,...e){return Qu(this,"reduceRight",t,e)},shift(){return bs(this,"shift")},some(t,e){return ui(this,"some",t,e,void 0,arguments)},splice(...t){return bs(this,"splice",t)},toReversed(){return Pr(this).toReversed()},toSorted(t){return Pr(this).toSorted(t)},toSpliced(...t){return Pr(this).toSpliced(...t)},unshift(...t){return bs(this,"unshift",t)},values(){return el(this,"values",Vt)}};function el(t,e,n){const i=Ua(t),r=i[e]();return i!==t&&!wn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=n(s.value)),s}),r}const fg=Array.prototype;function ui(t,e,n,i,r,s){const o=Ua(t),a=o!==t&&!wn(t),l=o[e];if(l!==fg[e]){const f=l.apply(t,s);return a?Vt(f):f}let c=n;o!==t&&(a?c=function(f,h){return n.call(this,Vt(f),h,t)}:n.length>2&&(c=function(f,h){return n.call(this,f,h,t)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Qu(t,e,n,i){const r=Ua(t);let s=n;return r!==t&&(wn(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,Vt(a),l,t)}),r[e](s,...i)}function tl(t,e,n){const i=ut(t);qt(i,"iterate",Ys);const r=i[e](...n);return(r===-1||r===!1)&&ou(n[0])?(n[0]=ut(n[0]),i[e](...n)):r}function bs(t,e,n=[]){Ai(),Qc();const i=ut(t)[e].apply(t,n);return eu(),wi(),i}const dg=Yc("__proto__,__v_isRef,__isVue"),Oh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Di));function hg(t){Di(t)||(t=String(t));const e=ut(this);return qt(e,"has",t),e.hasOwnProperty(t)}class Fh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?yg:Vh:s?Hh:kh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Xe(e);if(!r){let l;if(o&&(l=ug[n]))return l;if(n==="hasOwnProperty")return hg}const a=Reflect.get(e,n,Gt(e)?e:i);if((Di(n)?Oh.has(n):dg(n))||(r||qt(e,"get",n),s))return a;if(Gt(a)){const l=o&&Jc(n)?a:a.value;return r&&Tt(l)?Gl(l):l}return Tt(a)?r?Gl(a):ru(a):a}}class Bh extends Fh{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=Yi(s);if(!wn(i)&&!Yi(i)&&(s=ut(s),i=ut(i)),!Xe(e)&&Gt(s)&&!Gt(i))return l||(s.value=i),!0}const o=Xe(e)&&Jc(n)?Number(n)<e.length:ft(e,n),a=Reflect.set(e,n,i,Gt(e)?e:r);return e===ut(r)&&(o?Wi(i,s)&&xi(e,"set",n,i):xi(e,"add",n,i)),a}deleteProperty(e,n){const i=ft(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&xi(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Di(n)||!Oh.has(n))&&qt(e,"has",n),i}ownKeys(e){return qt(e,"iterate",Xe(e)?"length":yr),Reflect.ownKeys(e)}}class pg extends Fh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const mg=new Bh,gg=new pg,_g=new Bh(!0);const zl=t=>t,wo=t=>Reflect.getPrototypeOf(t);function vg(t,e,n){return function(...i){const r=this.__v_raw,s=ut(r),o=Jr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?zl:e?ga:Vt;return!e&&qt(s,"iterate",l?Vl:yr),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Ro(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function xg(t,e){const n={get(r){const s=this.__v_raw,o=ut(s),a=ut(r);t||(Wi(r,a)&&qt(o,"get",r),qt(o,"get",a));const{has:l}=wo(o),c=e?zl:t?ga:Vt;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&qt(ut(r),"iterate",yr),r.size},has(r){const s=this.__v_raw,o=ut(s),a=ut(r);return t||(Wi(r,a)&&qt(o,"has",r),qt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=ut(a),c=e?zl:t?ga:Vt;return!t&&qt(l,"iterate",yr),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Yt(n,t?{add:Ro("add"),set:Ro("set"),delete:Ro("delete"),clear:Ro("clear")}:{add(r){!e&&!wn(r)&&!Yi(r)&&(r=ut(r));const s=ut(this);return wo(s).has.call(s,r)||(s.add(r),xi(s,"add",r,r)),this},set(r,s){!e&&!wn(s)&&!Yi(s)&&(s=ut(s));const o=ut(this),{has:a,get:l}=wo(o);let c=a.call(o,r);c||(r=ut(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Wi(s,u)&&xi(o,"set",r,s):xi(o,"add",r,s),this},delete(r){const s=ut(this),{has:o,get:a}=wo(s);let l=o.call(s,r);l||(r=ut(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&xi(s,"delete",r,void 0),c},clear(){const r=ut(this),s=r.size!==0,o=r.clear();return s&&xi(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=vg(r,t,e)}),n}function iu(t,e){const n=xg(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(ft(n,r)&&r in i?n:i,r,s)}const Sg={get:iu(!1,!1)},Eg={get:iu(!1,!0)},Mg={get:iu(!0,!1)};const kh=new WeakMap,Hh=new WeakMap,Vh=new WeakMap,yg=new WeakMap;function bg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Tg(t){return t.__v_skip||!Object.isExtensible(t)?0:bg(Km(t))}function ru(t){return Yi(t)?t:su(t,!1,mg,Sg,kh)}function Ag(t){return su(t,!1,_g,Eg,Hh)}function Gl(t){return su(t,!0,gg,Mg,Vh)}function su(t,e,n,i,r){if(!Tt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=Tg(t);if(s===0)return t;const o=r.get(t);if(o)return o;const a=new Proxy(t,s===2?i:n);return r.set(t,a),a}function Qr(t){return Yi(t)?Qr(t.__v_raw):!!(t&&t.__v_isReactive)}function Yi(t){return!!(t&&t.__v_isReadonly)}function wn(t){return!!(t&&t.__v_isShallow)}function ou(t){return t?!!t.__v_raw:!1}function ut(t){const e=t&&t.__v_raw;return e?ut(e):t}function wg(t){return!ft(t,"__v_skip")&&Object.isExtensible(t)&&yh(t,"__v_skip",!0),t}const Vt=t=>Tt(t)?ru(t):t,ga=t=>Tt(t)?Gl(t):t;function Gt(t){return t?t.__v_isRef===!0:!1}function bt(t){return zh(t,!1)}function Rg(t){return zh(t,!0)}function zh(t,e){return Gt(t)?t:new Cg(t,e)}class Cg{constructor(e,n){this.dep=new nu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ut(e),this._value=n?e:Vt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||wn(e)||Yi(e);e=i?e:ut(e),Wi(e,n)&&(this._rawValue=e,this._value=i?e:Vt(e),this.dep.trigger())}}function Te(t){return Gt(t)?t.value:t}const Pg={get:(t,e,n)=>e==="__v_raw"?t:Te(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Gt(r)&&!Gt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Gh(t){return Qr(t)?t:new Proxy(t,Pg)}class Lg{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new nu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=$s-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&xt!==this)return Ph(this,!0),!0}get value(){const e=this.dep.track();return Dh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ig(t,e,n=!1){let i,r;return qe(t)?i=t:(i=t.get,r=t.set),new Lg(i,r,n)}const Co={},_a=new WeakMap;let hr;function Dg(t,e=!1,n=hr){if(n){let i=_a.get(n);i||_a.set(n,i=[]),i.push(t)}}function Ug(t,e,n=vt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,c=_=>r?_:wn(_)||r===!1||r===0?Si(_,1):Si(_);let u,f,h,p,v=!1,x=!1;if(Gt(t)?(f=()=>t.value,v=wn(t)):Qr(t)?(f=()=>c(t),v=!0):Xe(t)?(x=!0,v=t.some(_=>Qr(_)||wn(_)),f=()=>t.map(_=>{if(Gt(_))return _.value;if(Qr(_))return c(_);if(qe(_))return l?l(_,2):_()})):qe(t)?e?f=l?()=>l(t,2):t:f=()=>{if(h){Ai();try{h()}finally{wi()}}const _=hr;hr=u;try{return l?l(t,3,[p]):t(p)}finally{hr=_}}:f=ti,e&&r){const _=f,C=r===!0?1/0:r;f=()=>Si(_(),C)}const g=ag(),d=()=>{u.stop(),g&&g.active&&Zc(g.effects,u)};if(s&&e){const _=e;e=(...C)=>{_(...C),d()}}let S=x?new Array(t.length).fill(Co):Co;const M=_=>{if(!(!(u.flags&1)||!u.dirty&&!_))if(e){const C=u.run();if(r||v||(x?C.some((P,w)=>Wi(P,S[w])):Wi(C,S))){h&&h();const P=hr;hr=u;try{const w=[C,S===Co?void 0:x&&S[0]===Co?[]:S,p];S=C,l?l(e,3,w):e(...w)}finally{hr=P}}}else u.run()};return a&&a(M),u=new Rh(f),u.scheduler=o?()=>o(M,!1):M,p=_=>Dg(_,!1,u),h=u.onStop=()=>{const _=_a.get(u);if(_){if(l)l(_,4);else for(const C of _)C();_a.delete(u)}},e?i?M(!0):S=u.run():o?o(M.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function Si(t,e=1/0,n){if(e<=0||!Tt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Gt(t))Si(t.value,e,n);else if(Xe(t))for(let i=0;i<t.length;i++)Si(t[i],e,n);else if(xh(t)||Jr(t))t.forEach(i=>{Si(i,e,n)});else if(Mh(t)){for(const i in t)Si(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Si(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function po(t,e,n,i){try{return i?t(...i):t()}catch(r){Na(r,e,n)}}function ai(t,e,n,i){if(qe(t)){const r=po(t,e,n,i);return r&&Sh(r)&&r.catch(s=>{Na(s,e,n)}),r}if(Xe(t)){const r=[];for(let s=0;s<t.length;s++)r.push(ai(t[s],e,n,i));return r}}function Na(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||vt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(s){Ai(),po(s,null,10,[t,l,c]),wi();return}}Ng(t,n,r,i,o)}function Ng(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const tn=[];let Yn=-1;const es=[];let Vi=null,jr=0;const Wh=Promise.resolve();let va=null;function Yr(t){const e=va||Wh;return t?e.then(this?t.bind(this):t):e}function Og(t){let e=Yn+1,n=tn.length;for(;e<n;){const i=e+n>>>1,r=tn[i],s=Ks(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function au(t){if(!(t.flags&1)){const e=Ks(t),n=tn[tn.length-1];!n||!(t.flags&2)&&e>=Ks(n)?tn.push(t):tn.splice(Og(e),0,t),t.flags|=1,Xh()}}function Xh(){va||(va=Wh.then(qh))}function Fg(t){Xe(t)?es.push(...t):Vi&&t.id===-1?Vi.splice(jr+1,0,t):t.flags&1||(es.push(t),t.flags|=1),Xh()}function ef(t,e,n=Yn+1){for(;n<tn.length;n++){const i=tn[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;tn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function jh(t){if(es.length){const e=[...new Set(es)].sort((n,i)=>Ks(n)-Ks(i));if(es.length=0,Vi){Vi.push(...e);return}for(Vi=e,jr=0;jr<Vi.length;jr++){const n=Vi[jr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Vi=null,jr=0}}const Ks=t=>t.id==null?t.flags&2?-1:1/0:t.id;function qh(t){try{for(Yn=0;Yn<tn.length;Yn++){const e=tn[Yn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),po(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Yn<tn.length;Yn++){const e=tn[Yn];e&&(e.flags&=-2)}Yn=-1,tn.length=0,jh(),va=null,(tn.length||es.length)&&qh()}}let zt=null,$h=null;function xa(t){const e=zt;return zt=t,$h=t&&t.type.__scopeId||null,e}function Zi(t,e=zt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Ma(-1);const s=xa(e);let o;try{o=t(...r)}finally{xa(s),i._d&&Ma(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Bg(t,e){if(zt===null)return t;const n=Ba(zt),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=vt]=e[r];s&&(qe(s)&&(s={mounted:s,updated:s}),s.deep&&Si(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function sr(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Ai(),ai(l,n,8,[t.el,a,t,e]),wi())}}const Yh=Symbol("_vte"),kg=t=>t.__isTeleport,ks=t=>t&&(t.disabled||t.disabled===""),tf=t=>t&&(t.defer||t.defer===""),nf=t=>typeof SVGElement<"u"&&t instanceof SVGElement,rf=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Wl=(t,e)=>{const n=t&&t.to;return Ct(n)?e?e(n):null:n},Kh={name:"Teleport",__isTeleport:!0,process(t,e,n,i,r,s,o,a,l,c){const{mc:u,pc:f,pbc:h,o:{insert:p,querySelector:v,createText:x,createComment:g}}=c,d=ks(e.props);let{shapeFlag:S,children:M,dynamicChildren:_}=e;if(t==null){const C=e.el=x(""),P=e.anchor=x("");p(C,n,i),p(P,n,i);const w=(A,y)=>{S&16&&u(M,A,y,r,s,o,a,l)},N=()=>{const A=e.target=Wl(e.props,v),y=Zh(A,e,x,p);A&&(o!=="svg"&&nf(A)?o="svg":o!=="mathml"&&rf(A)&&(o="mathml"),r&&r.isCE&&(r.ce._teleportTargets||(r.ce._teleportTargets=new Set)).add(A),d||(w(A,y),ra(e,!1)))};d&&(w(n,P),ra(e,!0)),tf(e.props)?(e.el.__isMounted=!1,en(()=>{N(),delete e.el.__isMounted},s)):N()}else{if(tf(e.props)&&t.el.__isMounted===!1){en(()=>{Kh.process(t,e,n,i,r,s,o,a,l,c)},s);return}e.el=t.el,e.targetStart=t.targetStart;const C=e.anchor=t.anchor,P=e.target=t.target,w=e.targetAnchor=t.targetAnchor,N=ks(t.props),A=N?n:P,y=N?C:w;if(o==="svg"||nf(P)?o="svg":(o==="mathml"||rf(P))&&(o="mathml"),_?(h(t.dynamicChildren,_,A,r,s,o,a),fu(t,e,!0)):l||f(t,e,A,y,r,s,o,a,!1),d)N?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Po(e,n,C,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const O=e.target=Wl(e.props,v);O&&Po(e,O,null,c,0)}else N&&Po(e,P,w,c,1);ra(e,d)}},remove(t,e,n,{um:i,o:{remove:r}},s){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:f,props:h}=t;if(f&&(r(c),r(u)),s&&r(l),o&16){const p=s||!ks(h);for(let v=0;v<a.length;v++){const x=a[v];i(x,e,n,p,!!x.dynamicChildren)}}},move:Po,hydrate:Hg};function Po(t,e,n,{o:{insert:i},m:r},s=2){s===0&&i(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,f=s===2;if(f&&i(o,e,n),(!f||ks(u))&&l&16)for(let h=0;h<c.length;h++)r(c[h],e,n,2);f&&i(a,e,n)}function Hg(t,e,n,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},f){function h(x,g,d,S){g.anchor=f(o(x),g,a(x),n,i,r,s),g.targetStart=d,g.targetAnchor=S}const p=e.target=Wl(e.props,l),v=ks(e.props);if(p){const x=p._lpa||p.firstChild;if(e.shapeFlag&16)if(v)h(t,e,x,x&&o(x));else{e.anchor=o(t);let g=x;for(;g;){if(g&&g.nodeType===8){if(g.data==="teleport start anchor")e.targetStart=g;else if(g.data==="teleport anchor"){e.targetAnchor=g,p._lpa=e.targetAnchor&&o(e.targetAnchor);break}}g=o(g)}e.targetAnchor||Zh(p,e,u,c),f(x&&o(x),e,p,n,i,r,s)}ra(e,v)}else v&&e.shapeFlag&16&&h(t,e,t,o(t));return e.anchor&&o(e.anchor)}const Vg=Kh;function ra(t,e){const n=t.ctx;if(n&&n.ut){let i,r;for(e?(i=t.el,r=t.anchor):(i=t.targetStart,r=t.targetAnchor);i&&i!==r;)i.nodeType===1&&i.setAttribute("data-v-owner",n.uid),i=i.nextSibling;n.ut()}}function Zh(t,e,n,i){const r=e.targetStart=n(""),s=e.targetAnchor=n("");return r[Yh]=s,t&&(i(r,t),i(s,t)),s}const zg=Symbol("_leaveCb");function lu(t,e){t.shapeFlag&6&&t.component?(t.transition=e,lu(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function At(t,e){return qe(t)?Yt({name:t.name},e,{setup:t}):t}function Jh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const Sa=new WeakMap;function Hs(t,e,n,i,r=!1){if(Xe(t)){t.forEach((v,x)=>Hs(v,e&&(Xe(e)?e[x]:e),n,i,r));return}if(ts(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Hs(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?Ba(i.component):i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===vt?a.refs={}:a.refs,f=a.setupState,h=ut(f),p=f===vt?vh:v=>ft(h,v);if(c!=null&&c!==l){if(sf(e),Ct(c))u[c]=null,p(c)&&(f[c]=null);else if(Gt(c)){c.value=null;const v=e;v.k&&(u[v.k]=null)}}if(qe(l))po(l,a,12,[o,u]);else{const v=Ct(l),x=Gt(l);if(v||x){const g=()=>{if(t.f){const d=v?p(l)?f[l]:u[l]:l.value;if(r)Xe(d)&&Zc(d,s);else if(Xe(d))d.includes(s)||d.push(s);else if(v)u[l]=[s],p(l)&&(f[l]=u[l]);else{const S=[s];l.value=S,t.k&&(u[t.k]=S)}}else v?(u[l]=o,p(l)&&(f[l]=o)):x&&(l.value=o,t.k&&(u[t.k]=o))};if(o){const d=()=>{g(),Sa.delete(t)};d.id=-1,Sa.set(t,d),en(d,n)}else sf(t),g()}}}function sf(t){const e=Sa.get(t);e&&(e.flags|=8,Sa.delete(t))}Da().requestIdleCallback;Da().cancelIdleCallback;const ts=t=>!!t.type.__asyncLoader,Qh=t=>t.type.__isKeepAlive;function Gg(t,e){ep(t,"a",e)}function Wg(t,e){ep(t,"da",e)}function ep(t,e,n=$t){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Oa(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Qh(r.parent.vnode)&&Xg(i,e,n,r),r=r.parent}}function Xg(t,e,n,i){const r=Oa(e,t,i,!0);mo(()=>{Zc(i[e],r)},n)}function Oa(t,e,n=$t,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{Ai();const a=vo(n),l=ai(e,n,t,o);return a(),wi(),l});return i?r.unshift(s):r.push(s),s}}const Ui=t=>(e,n=$t)=>{(!Qs||t==="sp")&&Oa(t,(...i)=>e(...i),n)},jg=Ui("bm"),Wn=Ui("m"),qg=Ui("bu"),$g=Ui("u"),tp=Ui("bum"),mo=Ui("um"),Yg=Ui("sp"),Kg=Ui("rtg"),Zg=Ui("rtc");function Jg(t,e=$t){Oa("ec",t,e)}const Qg="components",np=Symbol.for("v-ndc");function go(t){return Ct(t)?e_(Qg,t,!1)||t:t||np}function e_(t,e,n=!0,i=!1){const r=zt||$t;if(r){const s=r.type;{const a=z_(s,!1);if(a&&(a===e||a===Cn(e)||a===Ia(Cn(e))))return s}const o=of(r[t]||s[t],e)||of(r.appContext[t],e);return!o&&i?s:o}}function of(t,e){return t&&(t[e]||t[Cn(e)]||t[Ia(Cn(e))])}function zn(t,e,n,i){let r;const s=n,o=Xe(t);if(o||Ct(t)){const a=o&&Qr(t);let l=!1,c=!1;a&&(l=!wn(t),c=Yi(t),t=Ua(t)),r=new Array(t.length);for(let u=0,f=t.length;u<f;u++)r[u]=e(l?c?ga(Vt(t[u])):Vt(t[u]):t[u],u,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(Tt(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}function af(t,e,n={},i,r){if(zt.ce||zt.parent&&ts(zt.parent)&&zt.parent.ce){const c=Object.keys(n).length>0;return e!=="default"&&(n.name=e),Be(),un(Et,null,[Ve("slot",n,i&&i())],c?-2:64)}let s=t[e];s&&s._c&&(s._d=!1),Be();const o=s&&ip(s(n)),a=n.key||o&&o.key,l=un(Et,{key:(a&&!Di(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||(i?i():[]),o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function ip(t){return t.some(e=>Js(e)?!(e.type===Ri||e.type===Et&&!ip(e.children)):!0)?t:null}const Xl=t=>t?Mp(t)?Ba(t):Xl(t.parent):null,Vs=Yt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Xl(t.parent),$root:t=>Xl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>sp(t),$forceUpdate:t=>t.f||(t.f=()=>{au(t.update)}),$nextTick:t=>t.n||(t.n=Yr.bind(t.proxy)),$watch:t=>M_.bind(t)}),nl=(t,e)=>t!==vt&&!t.__isScriptSetup&&ft(t,e),t_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(nl(i,e))return o[e]=1,i[e];if(r!==vt&&ft(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&ft(c,e))return o[e]=3,s[e];if(n!==vt&&ft(n,e))return o[e]=4,n[e];jl&&(o[e]=0)}}const u=Vs[e];let f,h;if(u)return e==="$attrs"&&qt(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==vt&&ft(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,ft(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return nl(r,e)?(r[e]=n,!0):i!==vt&&ft(i,e)?(i[e]=n,!0):ft(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s,type:o}},a){let l,c;return!!(n[a]||t!==vt&&a[0]!=="$"&&ft(t,a)||nl(e,a)||(l=s[0])&&ft(l,a)||ft(i,a)||ft(Vs,a)||ft(r.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ft(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function lf(t){return Xe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let jl=!0;function n_(t){const e=sp(t),n=t.proxy,i=t.ctx;jl=!1,e.beforeCreate&&cf(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:v,activated:x,deactivated:g,beforeDestroy:d,beforeUnmount:S,destroyed:M,unmounted:_,render:C,renderTracked:P,renderTriggered:w,errorCaptured:N,serverPrefetch:A,expose:y,inheritAttrs:O,components:G,directives:W,filters:te}=e;if(c&&i_(c,i,null),o)for(const Q in o){const j=o[Q];qe(j)&&(i[Q]=j.bind(n))}if(r){const Q=r.call(n,n);Tt(Q)&&(t.data=ru(Q))}if(jl=!0,s)for(const Q in s){const j=s[Q],le=qe(j)?j.bind(n,n):qe(j.get)?j.get.bind(n,n):ti,me=!qe(j)&&qe(j.set)?j.set.bind(n):ti,Me=gr({get:le,set:me});Object.defineProperty(i,Q,{enumerable:!0,configurable:!0,get:()=>Me.value,set:Fe=>Me.value=Fe})}if(a)for(const Q in a)rp(a[Q],i,n,Q);if(l){const Q=qe(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(j=>{c_(j,Q[j])})}u&&cf(u,t,"c");function $(Q,j){Xe(j)?j.forEach(le=>Q(le.bind(n))):j&&Q(j.bind(n))}if($(jg,f),$(Wn,h),$(qg,p),$($g,v),$(Gg,x),$(Wg,g),$(Jg,N),$(Zg,P),$(Kg,w),$(tp,S),$(mo,_),$(Yg,A),Xe(y))if(y.length){const Q=t.exposed||(t.exposed={});y.forEach(j=>{Object.defineProperty(Q,j,{get:()=>n[j],set:le=>n[j]=le,enumerable:!0})})}else t.exposed||(t.exposed={});C&&t.render===ti&&(t.render=C),O!=null&&(t.inheritAttrs=O),G&&(t.components=G),W&&(t.directives=W),A&&Jh(t)}function i_(t,e,n=ti){Xe(t)&&(t=ql(t));for(const i in t){const r=t[i];let s;Tt(r)?"default"in r?s=zs(r.from||i,r.default,!0):s=zs(r.from||i):s=zs(r),Gt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function cf(t,e,n){ai(Xe(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function rp(t,e,n,i){let r=i.includes(".")?_p(n,i):()=>n[i];if(Ct(t)){const s=e[t];qe(s)&&Xi(r,s)}else if(qe(t))Xi(r,t.bind(n));else if(Tt(t))if(Xe(t))t.forEach(s=>rp(s,e,n,i));else{const s=qe(t.handler)?t.handler.bind(n):e[t.handler];qe(s)&&Xi(r,s,t)}}function sp(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Ea(l,c,o,!0)),Ea(l,e,o)),Tt(e)&&s.set(e,l),l}function Ea(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Ea(t,s,n,!0),r&&r.forEach(o=>Ea(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=r_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const r_={data:uf,props:ff,emits:ff,methods:Us,computed:Us,beforeCreate:Zt,created:Zt,beforeMount:Zt,mounted:Zt,beforeUpdate:Zt,updated:Zt,beforeDestroy:Zt,beforeUnmount:Zt,destroyed:Zt,unmounted:Zt,activated:Zt,deactivated:Zt,errorCaptured:Zt,serverPrefetch:Zt,components:Us,directives:Us,watch:o_,provide:uf,inject:s_};function uf(t,e){return e?t?function(){return Yt(qe(t)?t.call(this,this):t,qe(e)?e.call(this,this):e)}:e:t}function s_(t,e){return Us(ql(t),ql(e))}function ql(t){if(Xe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Zt(t,e){return t?[...new Set([].concat(t,e))]:e}function Us(t,e){return t?Yt(Object.create(null),t,e):e}function ff(t,e){return t?Xe(t)&&Xe(e)?[...new Set([...t,...e])]:Yt(Object.create(null),lf(t),lf(e??{})):e}function o_(t,e){if(!t)return e;if(!e)return t;const n=Yt(Object.create(null),t);for(const i in e)n[i]=Zt(t[i],e[i]);return n}function op(){return{app:null,config:{isNativeTag:vh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let a_=0;function l_(t,e){return function(i,r=null){qe(i)||(i=Yt({},i)),r!=null&&!Tt(r)&&(r=null);const s=op(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:a_++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:W_,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&qe(u.install)?(o.add(u),u.install(c,...f)):qe(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||Ve(i,r);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),t(p,u,h),l=!0,c._container=u,u.__vue_app__=c,Ba(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ai(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=ns;ns=c;try{return u()}finally{ns=f}}};return c}}let ns=null;function c_(t,e){if($t){let n=$t.provides;const i=$t.parent&&$t.parent.provides;i===n&&(n=$t.provides=Object.create(i)),n[t]=e}}function zs(t,e,n=!1){const i=as();if(i||ns){let r=ns?ns._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&qe(e)?e.call(i&&i.proxy):e}}const ap={},lp=()=>Object.create(ap),cp=t=>Object.getPrototypeOf(t)===ap;function u_(t,e,n,i=!1){const r={},s=lp();t.propsDefaults=Object.create(null),up(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:Ag(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function f_(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=ut(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Fa(t.emitsOptions,h))continue;const p=e[h];if(l)if(ft(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const v=Cn(h);r[v]=$l(l,a,v,p,t,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{up(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!ft(e,f)&&((u=Rr(f))===f||!ft(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=$l(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!ft(e,f))&&(delete s[f],c=!0)}c&&xi(t.attrs,"set","")}function up(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Os(l))continue;const c=e[l];let u;r&&ft(r,u=Cn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Fa(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=ut(n),c=a||vt;for(let u=0;u<s.length;u++){const f=s[u];n[f]=$l(r,l,f,c[f],t,!ft(c,f))}}return o}function $l(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=ft(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&qe(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=vo(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Rr(n))&&(i=!0))}return i}const d_=new WeakMap;function fp(t,e,n=!1){const i=n?d_:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!qe(t)){const u=f=>{l=!0;const[h,p]=fp(f,e,!0);Yt(o,h),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return Tt(t)&&i.set(t,Zr),Zr;if(Xe(s))for(let u=0;u<s.length;u++){const f=Cn(s[u]);df(f)&&(o[f]=vt)}else if(s)for(const u in s){const f=Cn(u);if(df(f)){const h=s[u],p=o[f]=Xe(h)||qe(h)?{type:h}:Yt({},h),v=p.type;let x=!1,g=!0;if(Xe(v))for(let d=0;d<v.length;++d){const S=v[d],M=qe(S)&&S.name;if(M==="Boolean"){x=!0;break}else M==="String"&&(g=!1)}else x=qe(v)&&v.name==="Boolean";p[0]=x,p[1]=g,(x||ft(p,"default"))&&a.push(f)}}const c=[o,a];return Tt(t)&&i.set(t,c),c}function df(t){return t[0]!=="$"&&!Os(t)}const cu=t=>t==="_"||t==="_ctx"||t==="$stable",uu=t=>Xe(t)?t.map(Kn):[Kn(t)],h_=(t,e,n)=>{if(e._n)return e;const i=Zi((...r)=>uu(e(...r)),n);return i._c=!1,i},dp=(t,e,n)=>{const i=t._ctx;for(const r in t){if(cu(r))continue;const s=t[r];if(qe(s))e[r]=h_(r,s,i);else if(s!=null){const o=uu(s);e[r]=()=>o}}},hp=(t,e)=>{const n=uu(e);t.slots.default=()=>n},pp=(t,e,n)=>{for(const i in e)(n||!cu(i))&&(t[i]=e[i])},p_=(t,e,n)=>{const i=t.slots=lp();if(t.vnode.shapeFlag&32){const r=e._;r?(pp(i,e,n),n&&yh(i,"_",r,!0)):dp(e,i)}else e&&hp(t,e)},m_=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=vt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:pp(r,e,n):(s=!e.$stable,dp(e,r)),o=e}else e&&(hp(t,e),o={default:1});if(s)for(const a in r)!cu(a)&&o[a]==null&&delete r[a]},en=P_;function g_(t){return __(t)}function __(t,e){const n=Da();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=ti,insertStaticContent:v}=t,x=(D,F,b,re=null,Z=null,ee=null,T=void 0,L=null,U=!!F.dynamicChildren)=>{if(D===F)return;D&&!Ts(D,F)&&(re=pe(D),Fe(D,Z,ee,!0),D=null),F.patchFlag===-2&&(U=!1,F.dynamicChildren=null);const{type:B,ref:ae,shapeFlag:E}=F;switch(B){case _o:g(D,F,b,re);break;case Ri:d(D,F,b,re);break;case sa:D==null&&S(F,b,re,T);break;case Et:G(D,F,b,re,Z,ee,T,L,U);break;default:E&1?C(D,F,b,re,Z,ee,T,L,U):E&6?W(D,F,b,re,Z,ee,T,L,U):(E&64||E&128)&&B.process(D,F,b,re,Z,ee,T,L,U,Oe)}ae!=null&&Z?Hs(ae,D&&D.ref,ee,F||D,!F):ae==null&&D&&D.ref!=null&&Hs(D.ref,null,ee,D,!0)},g=(D,F,b,re)=>{if(D==null)i(F.el=a(F.children),b,re);else{const Z=F.el=D.el;F.children!==D.children&&c(Z,F.children)}},d=(D,F,b,re)=>{D==null?i(F.el=l(F.children||""),b,re):F.el=D.el},S=(D,F,b,re)=>{[D.el,D.anchor]=v(D.children,F,b,re,D.el,D.anchor)},M=({el:D,anchor:F},b,re)=>{let Z;for(;D&&D!==F;)Z=h(D),i(D,b,re),D=Z;i(F,b,re)},_=({el:D,anchor:F})=>{let b;for(;D&&D!==F;)b=h(D),r(D),D=b;r(F)},C=(D,F,b,re,Z,ee,T,L,U)=>{F.type==="svg"?T="svg":F.type==="math"&&(T="mathml"),D==null?P(F,b,re,Z,ee,T,L,U):A(D,F,Z,ee,T,L,U)},P=(D,F,b,re,Z,ee,T,L)=>{let U,B;const{props:ae,shapeFlag:E,transition:m,dirs:I}=D;if(U=D.el=o(D.type,ee,ae&&ae.is,ae),E&8?u(U,D.children):E&16&&N(D.children,U,null,re,Z,il(D,ee),T,L),I&&sr(D,null,re,"created"),w(U,D,D.scopeId,T,re),ae){for(const q in ae)q!=="value"&&!Os(q)&&s(U,q,null,ae[q],ee,re);"value"in ae&&s(U,"value",null,ae.value,ee),(B=ae.onVnodeBeforeMount)&&jn(B,re,D)}I&&sr(D,null,re,"beforeMount");const H=v_(Z,m);H&&m.beforeEnter(U),i(U,F,b),((B=ae&&ae.onVnodeMounted)||H||I)&&en(()=>{B&&jn(B,re,D),H&&m.enter(U),I&&sr(D,null,re,"mounted")},Z)},w=(D,F,b,re,Z)=>{if(b&&p(D,b),re)for(let ee=0;ee<re.length;ee++)p(D,re[ee]);if(Z){let ee=Z.subTree;if(F===ee||xp(ee.type)&&(ee.ssContent===F||ee.ssFallback===F)){const T=Z.vnode;w(D,T,T.scopeId,T.slotScopeIds,Z.parent)}}},N=(D,F,b,re,Z,ee,T,L,U=0)=>{for(let B=U;B<D.length;B++){const ae=D[B]=L?zi(D[B]):Kn(D[B]);x(null,ae,F,b,re,Z,ee,T,L)}},A=(D,F,b,re,Z,ee,T)=>{const L=F.el=D.el;let{patchFlag:U,dynamicChildren:B,dirs:ae}=F;U|=D.patchFlag&16;const E=D.props||vt,m=F.props||vt;let I;if(b&&or(b,!1),(I=m.onVnodeBeforeUpdate)&&jn(I,b,F,D),ae&&sr(F,D,b,"beforeUpdate"),b&&or(b,!0),(E.innerHTML&&m.innerHTML==null||E.textContent&&m.textContent==null)&&u(L,""),B?y(D.dynamicChildren,B,L,b,re,il(F,Z),ee):T||j(D,F,L,null,b,re,il(F,Z),ee,!1),U>0){if(U&16)O(L,E,m,b,Z);else if(U&2&&E.class!==m.class&&s(L,"class",null,m.class,Z),U&4&&s(L,"style",E.style,m.style,Z),U&8){const H=F.dynamicProps;for(let q=0;q<H.length;q++){const X=H[q],_e=E[X],ce=m[X];(ce!==_e||X==="value")&&s(L,X,_e,ce,Z,b)}}U&1&&D.children!==F.children&&u(L,F.children)}else!T&&B==null&&O(L,E,m,b,Z);((I=m.onVnodeUpdated)||ae)&&en(()=>{I&&jn(I,b,F,D),ae&&sr(F,D,b,"updated")},re)},y=(D,F,b,re,Z,ee,T)=>{for(let L=0;L<F.length;L++){const U=D[L],B=F[L],ae=U.el&&(U.type===Et||!Ts(U,B)||U.shapeFlag&198)?f(U.el):b;x(U,B,ae,null,re,Z,ee,T,!0)}},O=(D,F,b,re,Z)=>{if(F!==b){if(F!==vt)for(const ee in F)!Os(ee)&&!(ee in b)&&s(D,ee,F[ee],null,Z,re);for(const ee in b){if(Os(ee))continue;const T=b[ee],L=F[ee];T!==L&&ee!=="value"&&s(D,ee,L,T,Z,re)}"value"in b&&s(D,"value",F.value,b.value,Z)}},G=(D,F,b,re,Z,ee,T,L,U)=>{const B=F.el=D?D.el:a(""),ae=F.anchor=D?D.anchor:a("");let{patchFlag:E,dynamicChildren:m,slotScopeIds:I}=F;I&&(L=L?L.concat(I):I),D==null?(i(B,b,re),i(ae,b,re),N(F.children||[],b,ae,Z,ee,T,L,U)):E>0&&E&64&&m&&D.dynamicChildren?(y(D.dynamicChildren,m,b,Z,ee,T,L),(F.key!=null||Z&&F===Z.subTree)&&fu(D,F,!0)):j(D,F,b,ae,Z,ee,T,L,U)},W=(D,F,b,re,Z,ee,T,L,U)=>{F.slotScopeIds=L,D==null?F.shapeFlag&512?Z.ctx.activate(F,b,re,T,U):te(F,b,re,Z,ee,T,U):ie(D,F,U)},te=(D,F,b,re,Z,ee,T)=>{const L=D.component=F_(D,re,Z);if(Qh(D)&&(L.ctx.renderer=Oe),B_(L,!1,T),L.asyncDep){if(Z&&Z.registerDep(L,$,T),!D.el){const U=L.subTree=Ve(Ri);d(null,U,F,b),D.placeholder=U.el}}else $(L,D,F,b,Z,ee,T)},ie=(D,F,b)=>{const re=F.component=D.component;if(R_(D,F,b))if(re.asyncDep&&!re.asyncResolved){Q(re,F,b);return}else re.next=F,re.update();else F.el=D.el,re.vnode=F},$=(D,F,b,re,Z,ee,T)=>{const L=()=>{if(D.isMounted){let{next:E,bu:m,u:I,parent:H,vnode:q}=D;{const Ae=mp(D);if(Ae){E&&(E.el=q.el,Q(D,E,T)),Ae.asyncDep.then(()=>{D.isUnmounted||L()});return}}let X=E,_e;or(D,!1),E?(E.el=q.el,Q(D,E,T)):E=q,m&&Za(m),(_e=E.props&&E.props.onVnodeBeforeUpdate)&&jn(_e,H,E,q),or(D,!0);const ce=pf(D),xe=D.subTree;D.subTree=ce,x(xe,ce,f(xe.el),pe(xe),D,Z,ee),E.el=ce.el,X===null&&C_(D,ce.el),I&&en(I,Z),(_e=E.props&&E.props.onVnodeUpdated)&&en(()=>jn(_e,H,E,q),Z)}else{let E;const{el:m,props:I}=F,{bm:H,m:q,parent:X,root:_e,type:ce}=D,xe=ts(F);or(D,!1),H&&Za(H),!xe&&(E=I&&I.onVnodeBeforeMount)&&jn(E,X,F),or(D,!0);{_e.ce&&_e.ce._def.shadowRoot!==!1&&_e.ce._injectChildStyle(ce);const Ae=D.subTree=pf(D);x(null,Ae,b,re,D,Z,ee),F.el=Ae.el}if(q&&en(q,Z),!xe&&(E=I&&I.onVnodeMounted)){const Ae=F;en(()=>jn(E,X,Ae),Z)}(F.shapeFlag&256||X&&ts(X.vnode)&&X.vnode.shapeFlag&256)&&D.a&&en(D.a,Z),D.isMounted=!0,F=b=re=null}};D.scope.on();const U=D.effect=new Rh(L);D.scope.off();const B=D.update=U.run.bind(U),ae=D.job=U.runIfDirty.bind(U);ae.i=D,ae.id=D.uid,U.scheduler=()=>au(ae),or(D,!0),B()},Q=(D,F,b)=>{F.component=D;const re=D.vnode.props;D.vnode=F,D.next=null,f_(D,F.props,re,b),m_(D,F.children,b),Ai(),ef(D),wi()},j=(D,F,b,re,Z,ee,T,L,U=!1)=>{const B=D&&D.children,ae=D?D.shapeFlag:0,E=F.children,{patchFlag:m,shapeFlag:I}=F;if(m>0){if(m&128){me(B,E,b,re,Z,ee,T,L,U);return}else if(m&256){le(B,E,b,re,Z,ee,T,L,U);return}}I&8?(ae&16&&ye(B,Z,ee),E!==B&&u(b,E)):ae&16?I&16?me(B,E,b,re,Z,ee,T,L,U):ye(B,Z,ee,!0):(ae&8&&u(b,""),I&16&&N(E,b,re,Z,ee,T,L,U))},le=(D,F,b,re,Z,ee,T,L,U)=>{D=D||Zr,F=F||Zr;const B=D.length,ae=F.length,E=Math.min(B,ae);let m;for(m=0;m<E;m++){const I=F[m]=U?zi(F[m]):Kn(F[m]);x(D[m],I,b,null,Z,ee,T,L,U)}B>ae?ye(D,Z,ee,!0,!1,E):N(F,b,re,Z,ee,T,L,U,E)},me=(D,F,b,re,Z,ee,T,L,U)=>{let B=0;const ae=F.length;let E=D.length-1,m=ae-1;for(;B<=E&&B<=m;){const I=D[B],H=F[B]=U?zi(F[B]):Kn(F[B]);if(Ts(I,H))x(I,H,b,null,Z,ee,T,L,U);else break;B++}for(;B<=E&&B<=m;){const I=D[E],H=F[m]=U?zi(F[m]):Kn(F[m]);if(Ts(I,H))x(I,H,b,null,Z,ee,T,L,U);else break;E--,m--}if(B>E){if(B<=m){const I=m+1,H=I<ae?F[I].el:re;for(;B<=m;)x(null,F[B]=U?zi(F[B]):Kn(F[B]),b,H,Z,ee,T,L,U),B++}}else if(B>m)for(;B<=E;)Fe(D[B],Z,ee,!0),B++;else{const I=B,H=B,q=new Map;for(B=H;B<=m;B++){const Ie=F[B]=U?zi(F[B]):Kn(F[B]);Ie.key!=null&&q.set(Ie.key,B)}let X,_e=0;const ce=m-H+1;let xe=!1,Ae=0;const oe=new Array(ce);for(B=0;B<ce;B++)oe[B]=0;for(B=I;B<=E;B++){const Ie=D[B];if(_e>=ce){Fe(Ie,Z,ee,!0);continue}let De;if(Ie.key!=null)De=q.get(Ie.key);else for(X=H;X<=m;X++)if(oe[X-H]===0&&Ts(Ie,F[X])){De=X;break}De===void 0?Fe(Ie,Z,ee,!0):(oe[De-H]=B+1,De>=Ae?Ae=De:xe=!0,x(Ie,F[De],b,null,Z,ee,T,L,U),_e++)}const we=xe?x_(oe):Zr;for(X=we.length-1,B=ce-1;B>=0;B--){const Ie=H+B,De=F[Ie],ge=F[Ie+1],ze=Ie+1<ae?ge.el||ge.placeholder:re;oe[B]===0?x(null,De,b,ze,Z,ee,T,L,U):xe&&(X<0||B!==we[X]?Me(De,b,ze,2):X--)}}},Me=(D,F,b,re,Z=null)=>{const{el:ee,type:T,transition:L,children:U,shapeFlag:B}=D;if(B&6){Me(D.component.subTree,F,b,re);return}if(B&128){D.suspense.move(F,b,re);return}if(B&64){T.move(D,F,b,Oe);return}if(T===Et){i(ee,F,b);for(let E=0;E<U.length;E++)Me(U[E],F,b,re);i(D.anchor,F,b);return}if(T===sa){M(D,F,b);return}if(re!==2&&B&1&&L)if(re===0)L.beforeEnter(ee),i(ee,F,b),en(()=>L.enter(ee),Z);else{const{leave:E,delayLeave:m,afterLeave:I}=L,H=()=>{D.ctx.isUnmounted?r(ee):i(ee,F,b)},q=()=>{ee._isLeaving&&ee[zg](!0),E(ee,()=>{H(),I&&I()})};m?m(ee,H,q):q()}else i(ee,F,b)},Fe=(D,F,b,re=!1,Z=!1)=>{const{type:ee,props:T,ref:L,children:U,dynamicChildren:B,shapeFlag:ae,patchFlag:E,dirs:m,cacheIndex:I}=D;if(E===-2&&(Z=!1),L!=null&&(Ai(),Hs(L,null,b,D,!0),wi()),I!=null&&(F.renderCache[I]=void 0),ae&256){F.ctx.deactivate(D);return}const H=ae&1&&m,q=!ts(D);let X;if(q&&(X=T&&T.onVnodeBeforeUnmount)&&jn(X,F,D),ae&6)fe(D.component,b,re);else{if(ae&128){D.suspense.unmount(b,re);return}H&&sr(D,null,F,"beforeUnmount"),ae&64?D.type.remove(D,F,b,Oe,re):B&&!B.hasOnce&&(ee!==Et||E>0&&E&64)?ye(B,F,b,!1,!0):(ee===Et&&E&384||!Z&&ae&16)&&ye(U,F,b),re&&Je(D)}(q&&(X=T&&T.onVnodeUnmounted)||H)&&en(()=>{X&&jn(X,F,D),H&&sr(D,null,F,"unmounted")},b)},Je=D=>{const{type:F,el:b,anchor:re,transition:Z}=D;if(F===Et){ne(b,re);return}if(F===sa){_(D);return}const ee=()=>{r(b),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(D.shapeFlag&1&&Z&&!Z.persisted){const{leave:T,delayLeave:L}=Z,U=()=>T(b,ee);L?L(D.el,ee,U):U()}else ee()},ne=(D,F)=>{let b;for(;D!==F;)b=h(D),r(D),D=b;r(F)},fe=(D,F,b)=>{const{bum:re,scope:Z,job:ee,subTree:T,um:L,m:U,a:B}=D;hf(U),hf(B),re&&Za(re),Z.stop(),ee&&(ee.flags|=8,Fe(T,D,F,b)),L&&en(L,F),en(()=>{D.isUnmounted=!0},F)},ye=(D,F,b,re=!1,Z=!1,ee=0)=>{for(let T=ee;T<D.length;T++)Fe(D[T],F,b,re,Z)},pe=D=>{if(D.shapeFlag&6)return pe(D.component.subTree);if(D.shapeFlag&128)return D.suspense.next();const F=h(D.anchor||D.el),b=F&&F[Yh];return b?h(b):F};let be=!1;const Ke=(D,F,b)=>{D==null?F._vnode&&Fe(F._vnode,null,null,!0):x(F._vnode||null,D,F,null,null,null,b),F._vnode=D,be||(be=!0,ef(),jh(),be=!1)},Oe={p:x,um:Fe,m:Me,r:Je,mt:te,mc:N,pc:j,pbc:y,n:pe,o:t};return{render:Ke,hydrate:void 0,createApp:l_(Ke)}}function il({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function or({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function v_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function fu(t,e,n=!1){const i=t.children,r=e.children;if(Xe(i)&&Xe(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=zi(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&fu(o,a)),a.type===_o&&a.patchFlag!==-1&&(a.el=o.el),a.type===Ri&&!a.el&&(a.el=o.el)}}function x_(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function mp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:mp(e)}function hf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const S_=Symbol.for("v-scx"),E_=()=>zs(S_);function Xi(t,e,n){return gp(t,e,n)}function gp(t,e,n=vt){const{immediate:i,deep:r,flush:s,once:o}=n,a=Yt({},n),l=e&&i||!e&&s!=="post";let c;if(Qs){if(s==="sync"){const p=E_();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=ti,p.resume=ti,p.pause=ti,p}}const u=$t;a.call=(p,v,x)=>ai(p,u,v,x);let f=!1;s==="post"?a.scheduler=p=>{en(p,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,v)=>{v?p():au(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=Ug(t,e,a);return Qs&&(c?c.push(h):l&&h()),h}function M_(t,e,n){const i=this.proxy,r=Ct(t)?t.includes(".")?_p(i,t):()=>i[t]:t.bind(i,i);let s;qe(e)?s=e:(s=e.handler,n=e);const o=vo(this),a=gp(r,s.bind(i),n);return o(),a}function _p(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const y_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Cn(e)}Modifiers`]||t[`${Rr(e)}Modifiers`];function b_(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||vt;let r=n;const s=e.startsWith("update:"),o=s&&y_(i,e.slice(7));o&&(o.trim&&(r=n.map(u=>Ct(u)?u.trim():u)),o.number&&(r=n.map(Qm)));let a,l=i[a=Ka(e)]||i[a=Ka(Cn(e))];!l&&s&&(l=i[a=Ka(Rr(e))]),l&&ai(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ai(c,t,6,r)}}const T_=new WeakMap;function vp(t,e,n=!1){const i=n?T_:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!qe(t)){const l=c=>{const u=vp(c,e,!0);u&&(a=!0,Yt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(Tt(t)&&i.set(t,null),null):(Xe(s)?s.forEach(l=>o[l]=null):Yt(o,s),Tt(t)&&i.set(t,o),o)}function Fa(t,e){return!t||!Ca(e)?!1:(e=e.slice(2).replace(/Once$/,""),ft(t,e[0].toLowerCase()+e.slice(1))||ft(t,Rr(e))||ft(t,e))}function pf(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:v,inheritAttrs:x}=t,g=xa(t);let d,S;try{if(n.shapeFlag&4){const _=r||i,C=_;d=Kn(c.call(C,_,u,f,p,h,v)),S=a}else{const _=e;d=Kn(_.length>1?_(f,{attrs:a,slots:o,emit:l}):_(f,null)),S=e.props?a:A_(a)}}catch(_){Gs.length=0,Na(_,t,1),d=Ve(Ri)}let M=d;if(S&&x!==!1){const _=Object.keys(S),{shapeFlag:C}=M;_.length&&C&7&&(s&&_.some(Kc)&&(S=w_(S,s)),M=os(M,S,!1,!0))}return n.dirs&&(M=os(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&lu(M,n.transition),d=M,xa(g),d}const A_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ca(n))&&((e||(e={}))[n]=t[n]);return e},w_=(t,e)=>{const n={};for(const i in t)(!Kc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function R_(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?mf(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!Fa(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?mf(i,o,c):!0:!!o;return!1}function mf(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Fa(n,s))return!0}return!1}function C_({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const xp=t=>t.__isSuspense;function P_(t,e){e&&e.pendingBranch?Xe(t)?e.effects.push(...t):e.effects.push(t):Fg(t)}const Et=Symbol.for("v-fgt"),_o=Symbol.for("v-txt"),Ri=Symbol.for("v-cmt"),sa=Symbol.for("v-stc"),Gs=[];let gn=null;function Be(t=!1){Gs.push(gn=t?null:[])}function L_(){Gs.pop(),gn=Gs[Gs.length-1]||null}let Zs=1;function Ma(t,e=!1){Zs+=t,t<0&&gn&&e&&(gn.hasOnce=!0)}function Sp(t){return t.dynamicChildren=Zs>0?gn||Zr:null,L_(),Zs>0&&gn&&gn.push(t),t}function $e(t,e,n,i,r,s){return Sp(Ce(t,e,n,i,r,s,!0))}function un(t,e,n,i,r){return Sp(Ve(t,e,n,i,r,!0))}function Js(t){return t?t.__v_isVNode===!0:!1}function Ts(t,e){return t.type===e.type&&t.key===e.key}const Ep=({key:t})=>t??null,oa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ct(t)||Gt(t)||qe(t)?{i:zt,r:t,k:e,f:!!n}:t:null);function Ce(t,e=null,n=null,i=0,r=null,s=t===Et?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ep(e),ref:e&&oa(e),scopeId:$h,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:zt};return a?(hu(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Ct(n)?8:16),Zs>0&&!o&&gn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&gn.push(l),l}const Ve=I_;function I_(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===np)&&(t=Ri),Js(t)){const a=os(t,e,!0);return n&&hu(a,n),Zs>0&&!s&&gn&&(a.shapeFlag&6?gn[gn.indexOf(t)]=a:gn.push(a)),a.patchFlag=-2,a}if(G_(t)&&(t=t.__vccOpts),e){e=Yl(e);let{class:a,style:l}=e;a&&!Ct(a)&&(e.class=Hn(a)),Tt(l)&&(ou(l)&&!Xe(l)&&(l=Yt({},l)),e.style=xs(l))}const o=Ct(t)?1:xp(t)?128:kg(t)?64:Tt(t)?4:qe(t)?2:0;return Ce(t,e,n,i,r,o,s,!0)}function Yl(t){return t?ou(t)||cp(t)?Yt({},t):t:null}function os(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?U_(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Ep(c),ref:e&&e.ref?n&&s?Xe(s)?s.concat(oa(e)):[s,oa(e)]:oa(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Et?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&os(t.ssContent),ssFallback:t.ssFallback&&os(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&lu(u,l.clone(u)),u}function du(t=" ",e=0){return Ve(_o,null,t,e)}function D_(t,e){const n=Ve(sa,null,t);return n.staticCount=e,n}function ji(t="",e=!1){return e?(Be(),un(Ri,null,t)):Ve(Ri,null,t)}function Kn(t){return t==null||typeof t=="boolean"?Ve(Ri):Xe(t)?Ve(Et,null,t.slice()):Js(t)?zi(t):Ve(_o,null,String(t))}function zi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:os(t)}function hu(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Xe(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),hu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!cp(e)?e._ctx=zt:r===3&&zt&&(zt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else qe(e)?(e={default:e,_ctx:zt},n=32):(e=String(e),i&64?(n=16,e=[du(e)]):n=8);t.children=e,t.shapeFlag|=n}function U_(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Hn([e.class,i.class]));else if(r==="style")e.style=xs([e.style,i.style]);else if(Ca(r)){const s=e[r],o=i[r];o&&s!==o&&!(Xe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function jn(t,e,n,i=null){ai(t,e,7,[n,i])}const N_=op();let O_=0;function F_(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||N_,s={uid:O_++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new wh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fp(i,r),emitsOptions:vp(i,r),emit:null,emitted:null,propsDefaults:vt,inheritAttrs:i.inheritAttrs,ctx:vt,data:vt,props:vt,attrs:vt,slots:vt,refs:vt,setupState:vt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=b_.bind(null,s),t.ce&&t.ce(s),s}let $t=null;const as=()=>$t||zt;let ya,Kl;{const t=Da(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};ya=e("__VUE_INSTANCE_SETTERS__",n=>$t=n),Kl=e("__VUE_SSR_SETTERS__",n=>Qs=n)}const vo=t=>{const e=$t;return ya(t),t.scope.on(),()=>{t.scope.off(),ya(e)}},gf=()=>{$t&&$t.scope.off(),ya(null)};function Mp(t){return t.vnode.shapeFlag&4}let Qs=!1;function B_(t,e=!1,n=!1){e&&Kl(e);const{props:i,children:r}=t.vnode,s=Mp(t);u_(t,i,s,e),p_(t,r,n||e);const o=s?k_(t,e):void 0;return e&&Kl(!1),o}function k_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,t_);const{setup:i}=n;if(i){Ai();const r=t.setupContext=i.length>1?V_(t):null,s=vo(t),o=po(i,t,0,[t.props,r]),a=Sh(o);if(wi(),s(),(a||t.sp)&&!ts(t)&&Jh(t),a){if(o.then(gf,gf),e)return o.then(l=>{_f(t,l)}).catch(l=>{Na(l,t,0)});t.asyncDep=o}else _f(t,o)}else yp(t)}function _f(t,e,n){qe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Tt(e)&&(t.setupState=Gh(e)),yp(t)}function yp(t,e,n){const i=t.type;t.render||(t.render=i.render||ti);{const r=vo(t);Ai();try{n_(t)}finally{wi(),r()}}}const H_={get(t,e){return qt(t,"get",""),t[e]}};function V_(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,H_),slots:t.slots,emit:t.emit,expose:e}}function Ba(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Gh(wg(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Vs)return Vs[n](t)},has(e,n){return n in e||n in Vs}})):t.proxy}function z_(t,e=!0){return qe(t)?t.displayName||t.name:t.name||e&&t.__name}function G_(t){return qe(t)&&"__vccOpts"in t}const gr=(t,e)=>Ig(t,e,Qs);function bp(t,e,n){try{Ma(-1);const i=arguments.length;return i===2?Tt(e)&&!Xe(e)?Js(e)?Ve(t,null,[e]):Ve(t,e):Ve(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Js(n)&&(n=[n]),Ve(t,e,n))}finally{Ma(1)}}const W_="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zl;const vf=typeof window<"u"&&window.trustedTypes;if(vf)try{Zl=vf.createPolicy("vue",{createHTML:t=>t})}catch{}const Tp=Zl?t=>Zl.createHTML(t):t=>t,X_="http://www.w3.org/2000/svg",j_="http://www.w3.org/1998/Math/MathML",vi=typeof document<"u"?document:null,xf=vi&&vi.createElement("template"),q_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?vi.createElementNS(X_,t):e==="mathml"?vi.createElementNS(j_,t):n?vi.createElement(t,{is:n}):vi.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>vi.createTextNode(t),createComment:t=>vi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>vi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{xf.innerHTML=Tp(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=xf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},$_=Symbol("_vtc");function Y_(t,e,n){const i=t[$_];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ba=Symbol("_vod"),Ap=Symbol("_vsh"),K_={name:"show",beforeMount(t,{value:e},{transition:n}){t[ba]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):As(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),As(t,!0),i.enter(t)):i.leave(t,()=>{As(t,!1)}):As(t,e))},beforeUnmount(t,{value:e}){As(t,e)}};function As(t,e){t.style.display=e?t[ba]:"none",t[Ap]=!e}const Z_=Symbol(""),J_=/(?:^|;)\s*display\s*:/;function Q_(t,e,n){const i=t.style,r=Ct(n);let s=!1;if(n&&!r){if(e)if(Ct(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&aa(i,a,"")}else for(const o in e)n[o]==null&&aa(i,o,"");for(const o in n)o==="display"&&(s=!0),aa(i,o,n[o])}else if(r){if(e!==n){const o=i[Z_];o&&(n+=";"+o),i.cssText=n,s=J_.test(n)}}else e&&t.removeAttribute("style");ba in t&&(t[ba]=s?i.display:"",t[Ap]&&(i.display="none"))}const Sf=/\s*!important$/;function aa(t,e,n){if(Xe(n))n.forEach(i=>aa(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=ev(t,e);Sf.test(n)?t.setProperty(Rr(i),n.replace(Sf,""),"important"):t[i]=n}}const Ef=["Webkit","Moz","ms"],rl={};function ev(t,e){const n=rl[e];if(n)return n;let i=Cn(e);if(i!=="filter"&&i in t)return rl[e]=i;i=Ia(i);for(let r=0;r<Ef.length;r++){const s=Ef[r]+i;if(s in t)return rl[e]=s}return e}const Mf="http://www.w3.org/1999/xlink";function yf(t,e,n,i,r,s=sg(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Mf,e.slice(6,e.length)):t.setAttributeNS(Mf,e,n):n==null||s&&!bh(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Di(n)?String(n):n)}function bf(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Tp(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=bh(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function tv(t,e,n,i){t.addEventListener(e,n,i)}function nv(t,e,n,i){t.removeEventListener(e,n,i)}const Tf=Symbol("_vei");function iv(t,e,n,i,r=null){const s=t[Tf]||(t[Tf]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=rv(e);if(i){const c=s[e]=av(i,r);tv(t,a,c,l)}else o&&(nv(t,a,o,l),s[e]=void 0)}}const Af=/(?:Once|Passive|Capture)$/;function rv(t){let e;if(Af.test(t)){e={};let i;for(;i=t.match(Af);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Rr(t.slice(2)),e]}let sl=0;const sv=Promise.resolve(),ov=()=>sl||(sv.then(()=>sl=0),sl=Date.now());function av(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;ai(lv(i,n.value),e,5,[i])};return n.value=t,n.attached=ov(),n}function lv(t,e){if(Xe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const wf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,cv=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?Y_(t,i,o):e==="style"?Q_(t,n,i):Ca(e)?Kc(e)||iv(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):uv(t,e,i,o))?(bf(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&yf(t,e,i,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ct(i))?bf(t,Cn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),yf(t,e,i,o))};function uv(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&wf(e)&&qe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return wf(e)&&Ct(n)?!1:e in t}const fv=Yt({patchProp:cv},q_);let Rf;function dv(){return Rf||(Rf=g_(fv))}const hv=((...t)=>{const e=dv().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=mv(i);if(!r)return;const s=e._component;!qe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,pv(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function pv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function mv(t){return Ct(t)?document.querySelector(t):t}const gv={key:0,class:"material-symbols-outlined"},_v={key:1},_r=At({__name:"CustomButton",props:{content:{},disable:{type:Boolean,default:!1}},setup(t){const e=["arrow_drop_down","arrow_drop_up","colorize","unfold_more_double","language"];function n(i){return e.includes(i)}return(i,r)=>(Be(),$e("div",{class:Hn(["button glass",t.disable?"disable":"enable clickable"])},[n(t.content)?(Be(),$e("span",gv,dt(t.content),1)):(Be(),$e("p",_v,dt(t.content),1))],2))}});/*!
  * shared v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function vv(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}const Ta=typeof window<"u",Ji=(t,e=!1)=>e?Symbol.for(t):Symbol(t),xv=(t,e,n)=>Sv({l:t,k:e,s:n}),Sv=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),Ut=t=>typeof t=="number"&&isFinite(t),Ev=t=>pu(t)==="[object Date]",ls=t=>pu(t)==="[object RegExp]",ka=t=>Qe(t)&&Object.keys(t).length===0,Ot=Object.assign,Mv=Object.create,_t=(t=null)=>Mv(t);let Cf;const Sr=()=>Cf||(Cf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:_t());function Pf(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2F;").replace(/=/g,"&#x3D;")}function Lf(t){return t.replace(/&(?![a-zA-Z0-9#]{2,6};)/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function yv(t){return t=t.replace(/(\w+)\s*=\s*"([^"]*)"/g,(i,r,s)=>`${r}="${Lf(s)}"`),t=t.replace(/(\w+)\s*=\s*'([^']*)'/g,(i,r,s)=>`${r}='${Lf(s)}'`),/\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(t)&&(t=t.replace(/(\s+)(on)(\w+\s*=)/gi,"$1&#111;n$3")),[/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,/(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach(i=>{t=t.replace(i,"$1javascript&#58;")}),t}const bv=Object.prototype.hasOwnProperty;function Bn(t,e){return bv.call(t,e)}const Lt=Array.isArray,yt=t=>typeof t=="function",Re=t=>typeof t=="string",ot=t=>typeof t=="boolean",at=t=>t!==null&&typeof t=="object",Tv=t=>at(t)&&yt(t.then)&&yt(t.catch),wp=Object.prototype.toString,pu=t=>wp.call(t),Qe=t=>pu(t)==="[object Object]",Av=t=>t==null?"":Lt(t)||Qe(t)&&t.toString===wp?JSON.stringify(t,null,2):String(t);function mu(t,e=""){return t.reduce((n,i,r)=>r===0?n+i:n+e+i,"")}const Lo=t=>!at(t)||Lt(t);function la(t,e){if(Lo(t)||Lo(e))throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:i,des:r}=n.pop();Object.keys(i).forEach(s=>{s!=="__proto__"&&(at(i[s])&&!at(r[s])&&(r[s]=Array.isArray(i[s])?[]:_t()),Lo(r[s])||Lo(i[s])?r[s]=i[s]:n.push({src:i[s],des:r[s]}))})}}/*!
  * message-compiler v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function wv(t,e,n){return{line:t,column:e,offset:n}}function Jl(t,e,n){return{start:t,end:e}}const ct={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14},Rv=17;function Ha(t,e,n={}){const{domain:i,messages:r,args:s}=n,o=t,a=new SyntaxError(String(o));return a.code=t,e&&(a.location=e),a.domain=i,a}function Cv(t){throw t}const qn=" ",Pv="\r",jt=`
`,Lv="\u2028",Iv="\u2029";function Dv(t){const e=t;let n=0,i=1,r=1,s=0;const o=w=>e[w]===Pv&&e[w+1]===jt,a=w=>e[w]===jt,l=w=>e[w]===Iv,c=w=>e[w]===Lv,u=w=>o(w)||a(w)||l(w)||c(w),f=()=>n,h=()=>i,p=()=>r,v=()=>s,x=w=>o(w)||l(w)||c(w)?jt:e[w],g=()=>x(n),d=()=>x(n+s);function S(){return s=0,u(n)&&(i++,r=0),o(n)&&n++,n++,r++,e[n]}function M(){return o(n+s)&&s++,s++,e[n+s]}function _(){n=0,i=1,r=1,s=0}function C(w=0){s=w}function P(){const w=n+s;for(;w!==n;)S();s=0}return{index:f,line:h,column:p,peekOffset:v,charAt:x,currentChar:g,currentPeek:d,next:S,peek:M,reset:_,resetPeek:C,skipToPeek:P}}const fi=void 0,Uv=".",If="'",Nv="tokenizer";function Ov(t,e={}){const n=e.location!==!1,i=Dv(t),r=()=>i.index(),s=()=>wv(i.line(),i.column(),i.index()),o=s(),a=r(),l={currentType:13,offset:a,startLoc:o,endLoc:o,lastType:13,lastOffset:a,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:u}=e;function f(T,L,U,...B){const ae=c();if(L.column+=U,L.offset+=U,u){const E=n?Jl(ae.startLoc,L):null,m=Ha(T,E,{domain:Nv,args:B});u(m)}}function h(T,L,U){T.endLoc=s(),T.currentType=L;const B={type:L};return n&&(B.loc=Jl(T.startLoc,T.endLoc)),U!=null&&(B.value=U),B}const p=T=>h(T,13);function v(T,L){return T.currentChar()===L?(T.next(),L):(f(ct.EXPECTED_TOKEN,s(),0,L),"")}function x(T){let L="";for(;T.currentPeek()===qn||T.currentPeek()===jt;)L+=T.currentPeek(),T.peek();return L}function g(T){const L=x(T);return T.skipToPeek(),L}function d(T){if(T===fi)return!1;const L=T.charCodeAt(0);return L>=97&&L<=122||L>=65&&L<=90||L===95}function S(T){if(T===fi)return!1;const L=T.charCodeAt(0);return L>=48&&L<=57}function M(T,L){const{currentType:U}=L;if(U!==2)return!1;x(T);const B=d(T.currentPeek());return T.resetPeek(),B}function _(T,L){const{currentType:U}=L;if(U!==2)return!1;x(T);const B=T.currentPeek()==="-"?T.peek():T.currentPeek(),ae=S(B);return T.resetPeek(),ae}function C(T,L){const{currentType:U}=L;if(U!==2)return!1;x(T);const B=T.currentPeek()===If;return T.resetPeek(),B}function P(T,L){const{currentType:U}=L;if(U!==7)return!1;x(T);const B=T.currentPeek()===".";return T.resetPeek(),B}function w(T,L){const{currentType:U}=L;if(U!==8)return!1;x(T);const B=d(T.currentPeek());return T.resetPeek(),B}function N(T,L){const{currentType:U}=L;if(!(U===7||U===11))return!1;x(T);const B=T.currentPeek()===":";return T.resetPeek(),B}function A(T,L){const{currentType:U}=L;if(U!==9)return!1;const B=()=>{const E=T.currentPeek();return E==="{"?d(T.peek()):E==="@"||E==="|"||E===":"||E==="."||E===qn||!E?!1:E===jt?(T.peek(),B()):O(T,!1)},ae=B();return T.resetPeek(),ae}function y(T){x(T);const L=T.currentPeek()==="|";return T.resetPeek(),L}function O(T,L=!0){const U=(ae=!1,E="")=>{const m=T.currentPeek();return m==="{"||m==="@"||!m?ae:m==="|"?!(E===qn||E===jt):m===qn?(T.peek(),U(!0,qn)):m===jt?(T.peek(),U(!0,jt)):!0},B=U();return L&&T.resetPeek(),B}function G(T,L){const U=T.currentChar();return U===fi?fi:L(U)?(T.next(),U):null}function W(T){const L=T.charCodeAt(0);return L>=97&&L<=122||L>=65&&L<=90||L>=48&&L<=57||L===95||L===36}function te(T){return G(T,W)}function ie(T){const L=T.charCodeAt(0);return L>=97&&L<=122||L>=65&&L<=90||L>=48&&L<=57||L===95||L===36||L===45}function $(T){return G(T,ie)}function Q(T){const L=T.charCodeAt(0);return L>=48&&L<=57}function j(T){return G(T,Q)}function le(T){const L=T.charCodeAt(0);return L>=48&&L<=57||L>=65&&L<=70||L>=97&&L<=102}function me(T){return G(T,le)}function Me(T){let L="",U="";for(;L=j(T);)U+=L;return U}function Fe(T){let L="";for(;;){const U=T.currentChar();if(U==="{"||U==="}"||U==="@"||U==="|"||!U)break;if(U===qn||U===jt)if(O(T))L+=U,T.next();else{if(y(T))break;L+=U,T.next()}else L+=U,T.next()}return L}function Je(T){g(T);let L="",U="";for(;L=$(T);)U+=L;const B=T.currentChar();if(B&&B!=="}"&&B!==fi&&B!==qn&&B!==jt&&B!=="　"){const ae=Oe(T);return f(ct.INVALID_TOKEN_IN_PLACEHOLDER,s(),0,U+ae),U+ae}return T.currentChar()===fi&&f(ct.UNTERMINATED_CLOSING_BRACE,s(),0),U}function ne(T){g(T);let L="";return T.currentChar()==="-"?(T.next(),L+=`-${Me(T)}`):L+=Me(T),T.currentChar()===fi&&f(ct.UNTERMINATED_CLOSING_BRACE,s(),0),L}function fe(T){return T!==If&&T!==jt}function ye(T){g(T),v(T,"'");let L="",U="";for(;L=G(T,fe);)L==="\\"?U+=pe(T):U+=L;const B=T.currentChar();return B===jt||B===fi?(f(ct.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,s(),0),B===jt&&(T.next(),v(T,"'")),U):(v(T,"'"),U)}function pe(T){const L=T.currentChar();switch(L){case"\\":case"'":return T.next(),`\\${L}`;case"u":return be(T,L,4);case"U":return be(T,L,6);default:return f(ct.UNKNOWN_ESCAPE_SEQUENCE,s(),0,L),""}}function be(T,L,U){v(T,L);let B="";for(let ae=0;ae<U;ae++){const E=me(T);if(!E){f(ct.INVALID_UNICODE_ESCAPE_SEQUENCE,s(),0,`\\${L}${B}${T.currentChar()}`);break}B+=E}return`\\${L}${B}`}function Ke(T){return T!=="{"&&T!=="}"&&T!==qn&&T!==jt}function Oe(T){g(T);let L="",U="";for(;L=G(T,Ke);)U+=L;return U}function it(T){let L="",U="";for(;L=te(T);)U+=L;return U}function D(T){const L=U=>{const B=T.currentChar();return B==="{"||B==="@"||B==="|"||B==="("||B===")"||!B||B===qn?U:(U+=B,T.next(),L(U))};return L("")}function F(T){g(T);const L=v(T,"|");return g(T),L}function b(T,L){let U=null;switch(T.currentChar()){case"{":return L.braceNest>=1&&f(ct.NOT_ALLOW_NEST_PLACEHOLDER,s(),0),T.next(),U=h(L,2,"{"),g(T),L.braceNest++,U;case"}":return L.braceNest>0&&L.currentType===2&&f(ct.EMPTY_PLACEHOLDER,s(),0),T.next(),U=h(L,3,"}"),L.braceNest--,L.braceNest>0&&g(T),L.inLinked&&L.braceNest===0&&(L.inLinked=!1),U;case"@":return L.braceNest>0&&f(ct.UNTERMINATED_CLOSING_BRACE,s(),0),U=re(T,L)||p(L),L.braceNest=0,U;default:{let ae=!0,E=!0,m=!0;if(y(T))return L.braceNest>0&&f(ct.UNTERMINATED_CLOSING_BRACE,s(),0),U=h(L,1,F(T)),L.braceNest=0,L.inLinked=!1,U;if(L.braceNest>0&&(L.currentType===4||L.currentType===5||L.currentType===6))return f(ct.UNTERMINATED_CLOSING_BRACE,s(),0),L.braceNest=0,Z(T,L);if(ae=M(T,L))return U=h(L,4,Je(T)),g(T),U;if(E=_(T,L))return U=h(L,5,ne(T)),g(T),U;if(m=C(T,L))return U=h(L,6,ye(T)),g(T),U;if(!ae&&!E&&!m)return U=h(L,12,Oe(T)),f(ct.INVALID_TOKEN_IN_PLACEHOLDER,s(),0,U.value),g(T),U;break}}return U}function re(T,L){const{currentType:U}=L;let B=null;const ae=T.currentChar();switch((U===7||U===8||U===11||U===9)&&(ae===jt||ae===qn)&&f(ct.INVALID_LINKED_FORMAT,s(),0),ae){case"@":return T.next(),B=h(L,7,"@"),L.inLinked=!0,B;case".":return g(T),T.next(),h(L,8,".");case":":return g(T),T.next(),h(L,9,":");default:return y(T)?(B=h(L,1,F(T)),L.braceNest=0,L.inLinked=!1,B):P(T,L)||N(T,L)?(g(T),re(T,L)):w(T,L)?(g(T),h(L,11,it(T))):A(T,L)?(g(T),ae==="{"?b(T,L)||B:h(L,10,D(T))):(U===7&&f(ct.INVALID_LINKED_FORMAT,s(),0),L.braceNest=0,L.inLinked=!1,Z(T,L))}}function Z(T,L){let U={type:13};if(L.braceNest>0)return b(T,L)||p(L);if(L.inLinked)return re(T,L)||p(L);switch(T.currentChar()){case"{":return b(T,L)||p(L);case"}":return f(ct.UNBALANCED_CLOSING_BRACE,s(),0),T.next(),h(L,3,"}");case"@":return re(T,L)||p(L);default:{if(y(T))return U=h(L,1,F(T)),L.braceNest=0,L.inLinked=!1,U;if(O(T))return h(L,0,Fe(T));break}}return U}function ee(){const{currentType:T,offset:L,startLoc:U,endLoc:B}=l;return l.lastType=T,l.lastOffset=L,l.lastStartLoc=U,l.lastEndLoc=B,l.offset=r(),l.startLoc=s(),i.currentChar()===fi?h(l,13):Z(i,l)}return{nextToken:ee,currentOffset:r,currentPosition:s,context:c}}const Fv="parser",Bv=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function kv(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const i=parseInt(e||n,16);return i<=55295||i>=57344?String.fromCodePoint(i):"�"}}}function Hv(t={}){const e=t.location!==!1,{onError:n}=t;function i(d,S,M,_,...C){const P=d.currentPosition();if(P.offset+=_,P.column+=_,n){const w=e?Jl(M,P):null,N=Ha(S,w,{domain:Fv,args:C});n(N)}}function r(d,S,M){const _={type:d};return e&&(_.start=S,_.end=S,_.loc={start:M,end:M}),_}function s(d,S,M,_){e&&(d.end=S,d.loc&&(d.loc.end=M))}function o(d,S){const M=d.context(),_=r(3,M.offset,M.startLoc);return _.value=S,s(_,d.currentOffset(),d.currentPosition()),_}function a(d,S){const M=d.context(),{lastOffset:_,lastStartLoc:C}=M,P=r(5,_,C);return P.index=parseInt(S,10),d.nextToken(),s(P,d.currentOffset(),d.currentPosition()),P}function l(d,S){const M=d.context(),{lastOffset:_,lastStartLoc:C}=M,P=r(4,_,C);return P.key=S,d.nextToken(),s(P,d.currentOffset(),d.currentPosition()),P}function c(d,S){const M=d.context(),{lastOffset:_,lastStartLoc:C}=M,P=r(9,_,C);return P.value=S.replace(Bv,kv),d.nextToken(),s(P,d.currentOffset(),d.currentPosition()),P}function u(d){const S=d.nextToken(),M=d.context(),{lastOffset:_,lastStartLoc:C}=M,P=r(8,_,C);return S.type!==11?(i(d,ct.UNEXPECTED_EMPTY_LINKED_MODIFIER,M.lastStartLoc,0),P.value="",s(P,_,C),{nextConsumeToken:S,node:P}):(S.value==null&&i(d,ct.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,$n(S)),P.value=S.value||"",s(P,d.currentOffset(),d.currentPosition()),{node:P})}function f(d,S){const M=d.context(),_=r(7,M.offset,M.startLoc);return _.value=S,s(_,d.currentOffset(),d.currentPosition()),_}function h(d){const S=d.context(),M=r(6,S.offset,S.startLoc);let _=d.nextToken();if(_.type===8){const C=u(d);M.modifier=C.node,_=C.nextConsumeToken||d.nextToken()}switch(_.type!==9&&i(d,ct.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,$n(_)),_=d.nextToken(),_.type===2&&(_=d.nextToken()),_.type){case 10:_.value==null&&i(d,ct.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,$n(_)),M.key=f(d,_.value||"");break;case 4:_.value==null&&i(d,ct.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,$n(_)),M.key=l(d,_.value||"");break;case 5:_.value==null&&i(d,ct.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,$n(_)),M.key=a(d,_.value||"");break;case 6:_.value==null&&i(d,ct.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,$n(_)),M.key=c(d,_.value||"");break;default:{i(d,ct.UNEXPECTED_EMPTY_LINKED_KEY,S.lastStartLoc,0);const C=d.context(),P=r(7,C.offset,C.startLoc);return P.value="",s(P,C.offset,C.startLoc),M.key=P,s(M,C.offset,C.startLoc),{nextConsumeToken:_,node:M}}}return s(M,d.currentOffset(),d.currentPosition()),{node:M}}function p(d){const S=d.context(),M=S.currentType===1?d.currentOffset():S.offset,_=S.currentType===1?S.endLoc:S.startLoc,C=r(2,M,_);C.items=[];let P=null;do{const A=P||d.nextToken();switch(P=null,A.type){case 0:A.value==null&&i(d,ct.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,$n(A)),C.items.push(o(d,A.value||""));break;case 5:A.value==null&&i(d,ct.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,$n(A)),C.items.push(a(d,A.value||""));break;case 4:A.value==null&&i(d,ct.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,$n(A)),C.items.push(l(d,A.value||""));break;case 6:A.value==null&&i(d,ct.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,$n(A)),C.items.push(c(d,A.value||""));break;case 7:{const y=h(d);C.items.push(y.node),P=y.nextConsumeToken||null;break}}}while(S.currentType!==13&&S.currentType!==1);const w=S.currentType===1?S.lastOffset:d.currentOffset(),N=S.currentType===1?S.lastEndLoc:d.currentPosition();return s(C,w,N),C}function v(d,S,M,_){const C=d.context();let P=_.items.length===0;const w=r(1,S,M);w.cases=[],w.cases.push(_);do{const N=p(d);P||(P=N.items.length===0),w.cases.push(N)}while(C.currentType!==13);return P&&i(d,ct.MUST_HAVE_MESSAGES_IN_PLURAL,M,0),s(w,d.currentOffset(),d.currentPosition()),w}function x(d){const S=d.context(),{offset:M,startLoc:_}=S,C=p(d);return S.currentType===13?C:v(d,M,_,C)}function g(d){const S=Ov(d,Ot({},t)),M=S.context(),_=r(0,M.offset,M.startLoc);return e&&_.loc&&(_.loc.source=d),_.body=x(S),t.onCacheKey&&(_.cacheKey=t.onCacheKey(d)),M.currentType!==13&&i(S,ct.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,d[M.offset]||""),s(_,S.currentOffset(),S.currentPosition()),_}return{parse:g}}function $n(t){if(t.type===13)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function Vv(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:s=>(n.helpers.add(s),s)}}function Df(t,e){for(let n=0;n<t.length;n++)gu(t[n],e)}function gu(t,e){switch(t.type){case 1:Df(t.cases,e),e.helper("plural");break;case 2:Df(t.items,e);break;case 6:{gu(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function zv(t,e={}){const n=Vv(t);n.helper("normalize"),t.body&&gu(t.body,n);const i=n.context();t.helpers=Array.from(i.helpers)}function Gv(t){const e=t.body;return e.type===2?Uf(e):e.cases.forEach(n=>Uf(n)),t}function Uf(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const i=t.items[n];if(!(i.type===3||i.type===9)||i.value==null)break;e.push(i.value)}if(e.length===t.items.length){t.static=mu(e);for(let n=0;n<t.items.length;n++){const i=t.items[n];(i.type===3||i.type===9)&&delete i.value}}}}function qr(t){switch(t.t=t.type,t.type){case 0:{const e=t;qr(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,n=e.cases;for(let i=0;i<n.length;i++)qr(n[i]);e.c=n,delete e.cases;break}case 2:{const e=t,n=e.items;for(let i=0;i<n.length;i++)qr(n[i]);e.i=n,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;qr(e.key),e.k=e.key,delete e.key,e.modifier&&(qr(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}}delete t.type}function Wv(t,e){const{filename:n,breakLineCode:i,needIndent:r}=e,s=e.location!==!1,o={filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:i,needIndent:r,indentLevel:0};s&&t.loc&&(o.source=t.loc.source);const a=()=>o;function l(x,g){o.code+=x}function c(x,g=!0){const d=g?i:"";l(r?d+"  ".repeat(x):d)}function u(x=!0){const g=++o.indentLevel;x&&c(g)}function f(x=!0){const g=--o.indentLevel;x&&c(g)}function h(){c(o.indentLevel)}return{context:a,push:l,indent:u,deindent:f,newline:h,helper:x=>`_${x}`,needIndent:()=>o.needIndent}}function Xv(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),cs(t,e.key),e.modifier?(t.push(", "),cs(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function jv(t,e){const{helper:n,needIndent:i}=t;t.push(`${n("normalize")}([`),t.indent(i());const r=e.items.length;for(let s=0;s<r&&(cs(t,e.items[s]),s!==r-1);s++)t.push(", ");t.deindent(i()),t.push("])")}function qv(t,e){const{helper:n,needIndent:i}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(i());const r=e.cases.length;for(let s=0;s<r&&(cs(t,e.cases[s]),s!==r-1);s++)t.push(", ");t.deindent(i()),t.push("])")}}function $v(t,e){e.body?cs(t,e.body):t.push("null")}function cs(t,e){const{helper:n}=t;switch(e.type){case 0:$v(t,e);break;case 1:qv(t,e);break;case 2:jv(t,e);break;case 6:Xv(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break}}const Yv=(t,e={})=>{const n=Re(e.mode)?e.mode:"normal",i=Re(e.filename)?e.filename:"message.intl";e.sourceMap;const r=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,s=e.needIndent?e.needIndent:n!=="arrow",o=t.helpers||[],a=Wv(t,{filename:i,breakLineCode:r,needIndent:s});a.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),a.indent(s),o.length>0&&(a.push(`const { ${mu(o.map(u=>`${u}: _${u}`),", ")} } = ctx`),a.newline()),a.push("return "),cs(a,t),a.deindent(s),a.push("}"),delete t.helpers;const{code:l,map:c}=a.context();return{ast:t,code:l,map:c?c.toJSON():void 0}};function Kv(t,e={}){const n=Ot({},e),i=!!n.jit,r=!!n.minify,s=n.optimize==null?!0:n.optimize,a=Hv(n).parse(t);return i?(s&&Gv(a),r&&qr(a),{ast:a,code:""}):(zv(a,n),Yv(a,n))}/*!
  * core-base v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function Zv(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Sr().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Sr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function ni(t){return at(t)&&_u(t)===0&&(Bn(t,"b")||Bn(t,"body"))}const Rp=["b","body"];function Jv(t){return Qi(t,Rp)}const Cp=["c","cases"];function Qv(t){return Qi(t,Cp,[])}const Pp=["s","static"];function e0(t){return Qi(t,Pp)}const Lp=["i","items"];function t0(t){return Qi(t,Lp,[])}const Ip=["t","type"];function _u(t){return Qi(t,Ip)}const Dp=["v","value"];function Io(t,e){const n=Qi(t,Dp);if(n!=null)return n;throw eo(e)}const Up=["m","modifier"];function n0(t){return Qi(t,Up)}const Np=["k","key"];function i0(t){const e=Qi(t,Np);if(e)return e;throw eo(6)}function Qi(t,e,n){for(let i=0;i<e.length;i++){const r=e[i];if(Bn(t,r)&&t[r]!=null)return t[r]}return n}const Op=[...Rp,...Cp,...Pp,...Lp,...Np,...Up,...Dp,...Ip];function eo(t){return new Error(`unhandled node type: ${t}`)}function ol(t){return n=>r0(n,t)}function r0(t,e){const n=Jv(e);if(n==null)throw eo(0);if(_u(n)===1){const s=Qv(n);return t.plural(s.reduce((o,a)=>[...o,Nf(t,a)],[]))}else return Nf(t,n)}function Nf(t,e){const n=e0(e);if(n!=null)return t.type==="text"?n:t.normalize([n]);{const i=t0(e).reduce((r,s)=>[...r,Ql(t,s)],[]);return t.normalize(i)}}function Ql(t,e){const n=_u(e);switch(n){case 3:return Io(e,n);case 9:return Io(e,n);case 4:{const i=e;if(Bn(i,"k")&&i.k)return t.interpolate(t.named(i.k));if(Bn(i,"key")&&i.key)return t.interpolate(t.named(i.key));throw eo(n)}case 5:{const i=e;if(Bn(i,"i")&&Ut(i.i))return t.interpolate(t.list(i.i));if(Bn(i,"index")&&Ut(i.index))return t.interpolate(t.list(i.index));throw eo(n)}case 6:{const i=e,r=n0(i),s=i0(i);return t.linked(Ql(t,s),r?Ql(t,r):void 0,t.type)}case 7:return Io(e,n);case 8:return Io(e,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const s0=t=>t;let Do=_t();function o0(t,e={}){let n=!1;const i=e.onError||Cv;return e.onError=r=>{n=!0,i(r)},{...Kv(t,e),detectError:n}}function a0(t,e){if(!__INTLIFY_DROP_MESSAGE_COMPILER__&&Re(t)){ot(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||s0)(t),r=Do[i];if(r)return r;const{ast:s,detectError:o}=o0(t,{...e,location:!1,jit:!0}),a=ol(s);return o?a:Do[i]=a}else{const n=t.cacheKey;if(n){const i=Do[n];return i||(Do[n]=ol(t))}else return ol(t)}}let to=null;function l0(t){to=t}function c0(t,e,n){to&&to.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const u0=f0("function:translate");function f0(t){return e=>to&&to.emit(t,e)}const Ei={INVALID_ARGUMENT:Rv,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},d0=24;function Mi(t){return Ha(t,null,void 0)}function vu(t,e){return e.locale!=null?Of(e.locale):Of(t.locale)}let al;function Of(t){if(Re(t))return t;if(yt(t)){if(t.resolvedOnce&&al!=null)return al;if(t.constructor.name==="Function"){const e=t();if(Tv(e))throw Mi(Ei.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return al=e}else throw Mi(Ei.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw Mi(Ei.NOT_SUPPORT_LOCALE_TYPE)}function h0(t,e,n){return[...new Set([n,...Lt(e)?e:at(e)?Object.keys(e):Re(e)?[e]:[n]])]}function Fp(t,e,n){const i=Re(n)?n:no,r=t;r.__localeChainCache||(r.__localeChainCache=new Map);let s=r.__localeChainCache.get(i);if(!s){s=[];let o=[n];for(;Lt(o);)o=Ff(s,o,e);const a=Lt(e)||!Qe(e)?e:e.default?e.default:null;o=Re(a)?[a]:a,Lt(o)&&Ff(s,o,!1),r.__localeChainCache.set(i,s)}return s}function Ff(t,e,n){let i=!0;for(let r=0;r<e.length&&ot(i);r++){const s=e[r];Re(s)&&(i=p0(t,e[r],n))}return i}function p0(t,e,n){let i;const r=e.split("-");do{const s=r.join("-");i=m0(t,s,n),r.splice(-1,1)}while(r.length&&i===!0);return i}function m0(t,e,n){let i=!1;if(!t.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const r=e.replace(/!/g,"");t.push(r),(Lt(n)||Qe(n))&&n[r]&&(i=n[r])}return i}const er=[];er[0]={w:[0],i:[3,0],"[":[4],o:[7]};er[1]={w:[1],".":[2],"[":[4],o:[7]};er[2]={w:[2],i:[3,0],0:[3,0]};er[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};er[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};er[5]={"'":[4,0],o:8,l:[5,0]};er[6]={'"':[4,0],o:8,l:[6,0]};const g0=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function _0(t){return g0.test(t)}function v0(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function x0(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function S0(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:_0(e)?v0(e):"*"+e}function E0(t){const e=[];let n=-1,i=0,r=0,s,o,a,l,c,u,f;const h=[];h[0]=()=>{o===void 0?o=a:o+=a},h[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},h[2]=()=>{h[0](),r++},h[3]=()=>{if(r>0)r--,i=4,h[0]();else{if(r=0,o===void 0||(o=S0(o),o===!1))return!1;h[1]()}};function p(){const v=t[n+1];if(i===5&&v==="'"||i===6&&v==='"')return n++,a="\\"+v,h[0](),!0}for(;i!==null;)if(n++,s=t[n],!(s==="\\"&&p())){if(l=x0(s),f=er[i],c=f[l]||f.l||8,c===8||(i=c[0],c[1]!==void 0&&(u=h[c[1]],u&&(a=s,u()===!1))))return;if(i===7)return e}}const Bf=new Map;function M0(t,e){return at(t)?t[e]:null}function y0(t,e){if(!at(t))return null;let n=Bf.get(e);if(n||(n=E0(e),n&&Bf.set(e,n)),!n)return null;const i=n.length;let r=t,s=0;for(;s<i;){const o=n[s];if(Op.includes(o)&&ni(r))return null;const a=r[o];if(a===void 0||yt(r))return null;r=a,s++}return r}const b0="11.1.12",Va=-1,no="en-US",kf="",Hf=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function T0(){return{upper:(t,e)=>e==="text"&&Re(t)?t.toUpperCase():e==="vnode"&&at(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&Re(t)?t.toLowerCase():e==="vnode"&&at(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&Re(t)?Hf(t):e==="vnode"&&at(t)&&"__v_isVNode"in t?Hf(t.children):t}}let Bp;function A0(t){Bp=t}let kp;function w0(t){kp=t}let Hp;function R0(t){Hp=t}let Vp=null;const C0=t=>{Vp=t},P0=()=>Vp;let zp=null;const Vf=t=>{zp=t},L0=()=>zp;let zf=0;function I0(t={}){const e=yt(t.onWarn)?t.onWarn:vv,n=Re(t.version)?t.version:b0,i=Re(t.locale)||yt(t.locale)?t.locale:no,r=yt(i)?no:i,s=Lt(t.fallbackLocale)||Qe(t.fallbackLocale)||Re(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:r,o=Qe(t.messages)?t.messages:ll(r),a=Qe(t.datetimeFormats)?t.datetimeFormats:ll(r),l=Qe(t.numberFormats)?t.numberFormats:ll(r),c=Ot(_t(),t.modifiers,T0()),u=t.pluralRules||_t(),f=yt(t.missing)?t.missing:null,h=ot(t.missingWarn)||ls(t.missingWarn)?t.missingWarn:!0,p=ot(t.fallbackWarn)||ls(t.fallbackWarn)?t.fallbackWarn:!0,v=!!t.fallbackFormat,x=!!t.unresolving,g=yt(t.postTranslation)?t.postTranslation:null,d=Qe(t.processor)?t.processor:null,S=ot(t.warnHtmlMessage)?t.warnHtmlMessage:!0,M=!!t.escapeParameter,_=yt(t.messageCompiler)?t.messageCompiler:Bp,C=yt(t.messageResolver)?t.messageResolver:kp||M0,P=yt(t.localeFallbacker)?t.localeFallbacker:Hp||h0,w=at(t.fallbackContext)?t.fallbackContext:void 0,N=t,A=at(N.__datetimeFormatters)?N.__datetimeFormatters:new Map,y=at(N.__numberFormatters)?N.__numberFormatters:new Map,O=at(N.__meta)?N.__meta:{};zf++;const G={version:n,cid:zf,locale:i,fallbackLocale:s,messages:o,modifiers:c,pluralRules:u,missing:f,missingWarn:h,fallbackWarn:p,fallbackFormat:v,unresolving:x,postTranslation:g,processor:d,warnHtmlMessage:S,escapeParameter:M,messageCompiler:_,messageResolver:C,localeFallbacker:P,fallbackContext:w,onWarn:e,__meta:O};return G.datetimeFormats=a,G.numberFormats=l,G.__datetimeFormatters=A,G.__numberFormatters=y,__INTLIFY_PROD_DEVTOOLS__&&c0(G,n,O),G}const ll=t=>({[t]:_t()});function xu(t,e,n,i,r){const{missing:s,onWarn:o}=t;if(s!==null){const a=s(t,n,e,r);return Re(a)?a:e}else return e}function ws(t,e,n){const i=t;i.__localeChainCache=new Map,t.localeFallbacker(t,n,e)}function D0(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function U0(t,e){const n=e.indexOf(t);if(n===-1)return!1;for(let i=n+1;i<e.length;i++)if(D0(t,e[i]))return!0;return!1}function Gf(t,...e){const{datetimeFormats:n,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:o}=t,{__datetimeFormatters:a}=t,[l,c,u,f]=ec(...e),h=ot(u.missingWarn)?u.missingWarn:t.missingWarn;ot(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const p=!!u.part,v=vu(t,u),x=o(t,r,v);if(!Re(l)||l==="")return new Intl.DateTimeFormat(v,f).format(c);let g={},d,S=null;const M="datetime format";for(let P=0;P<x.length&&(d=x[P],g=n[d]||{},S=g[l],!Qe(S));P++)xu(t,l,d,h,M);if(!Qe(S)||!Re(d))return i?Va:l;let _=`${d}__${l}`;ka(f)||(_=`${_}__${JSON.stringify(f)}`);let C=a.get(_);return C||(C=new Intl.DateTimeFormat(d,Ot({},S,f)),a.set(_,C)),p?C.formatToParts(c):C.format(c)}const Gp=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function ec(...t){const[e,n,i,r]=t,s=_t();let o=_t(),a;if(Re(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw Mi(Ei.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();a=new Date(c);try{a.toISOString()}catch{throw Mi(Ei.INVALID_ISO_DATE_ARGUMENT)}}else if(Ev(e)){if(isNaN(e.getTime()))throw Mi(Ei.INVALID_DATE_ARGUMENT);a=e}else if(Ut(e))a=e;else throw Mi(Ei.INVALID_ARGUMENT);return Re(n)?s.key=n:Qe(n)&&Object.keys(n).forEach(l=>{Gp.includes(l)?o[l]=n[l]:s[l]=n[l]}),Re(i)?s.locale=i:Qe(i)&&(o=i),Qe(r)&&(o=r),[s.key||"",a,s,o]}function Wf(t,e,n){const i=t;for(const r in n){const s=`${e}__${r}`;i.__datetimeFormatters.has(s)&&i.__datetimeFormatters.delete(s)}}function Xf(t,...e){const{numberFormats:n,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:o}=t,{__numberFormatters:a}=t,[l,c,u,f]=tc(...e),h=ot(u.missingWarn)?u.missingWarn:t.missingWarn;ot(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const p=!!u.part,v=vu(t,u),x=o(t,r,v);if(!Re(l)||l==="")return new Intl.NumberFormat(v,f).format(c);let g={},d,S=null;const M="number format";for(let P=0;P<x.length&&(d=x[P],g=n[d]||{},S=g[l],!Qe(S));P++)xu(t,l,d,h,M);if(!Qe(S)||!Re(d))return i?Va:l;let _=`${d}__${l}`;ka(f)||(_=`${_}__${JSON.stringify(f)}`);let C=a.get(_);return C||(C=new Intl.NumberFormat(d,Ot({},S,f)),a.set(_,C)),p?C.formatToParts(c):C.format(c)}const Wp=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function tc(...t){const[e,n,i,r]=t,s=_t();let o=_t();if(!Ut(e))throw Mi(Ei.INVALID_ARGUMENT);const a=e;return Re(n)?s.key=n:Qe(n)&&Object.keys(n).forEach(l=>{Wp.includes(l)?o[l]=n[l]:s[l]=n[l]}),Re(i)?s.locale=i:Qe(i)&&(o=i),Qe(r)&&(o=r),[s.key||"",a,s,o]}function jf(t,e,n){const i=t;for(const r in n){const s=`${e}__${r}`;i.__numberFormatters.has(s)&&i.__numberFormatters.delete(s)}}const N0=t=>t,O0=t=>"",F0="text",B0=t=>t.length===0?"":mu(t),k0=Av;function qf(t,e){return t=Math.abs(t),e===2?t?t>1?1:0:1:t?Math.min(t,2):0}function H0(t){const e=Ut(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(Ut(t.named.count)||Ut(t.named.n))?Ut(t.named.count)?t.named.count:Ut(t.named.n)?t.named.n:e:e}function V0(t,e){e.count||(e.count=t),e.n||(e.n=t)}function z0(t={}){const e=t.locale,n=H0(t),i=at(t.pluralRules)&&Re(e)&&yt(t.pluralRules[e])?t.pluralRules[e]:qf,r=at(t.pluralRules)&&Re(e)&&yt(t.pluralRules[e])?qf:void 0,s=d=>d[i(n,d.length,r)],o=t.list||[],a=d=>o[d],l=t.named||_t();Ut(t.pluralIndex)&&V0(n,l);const c=d=>l[d];function u(d,S){const M=yt(t.messages)?t.messages(d,!!S):at(t.messages)?t.messages[d]:!1;return M||(t.parent?t.parent.message(d):O0)}const f=d=>t.modifiers?t.modifiers[d]:N0,h=Qe(t.processor)&&yt(t.processor.normalize)?t.processor.normalize:B0,p=Qe(t.processor)&&yt(t.processor.interpolate)?t.processor.interpolate:k0,v=Qe(t.processor)&&Re(t.processor.type)?t.processor.type:F0,g={list:a,named:c,plural:s,linked:(d,...S)=>{const[M,_]=S;let C="text",P="";S.length===1?at(M)?(P=M.modifier||P,C=M.type||C):Re(M)&&(P=M||P):S.length===2&&(Re(M)&&(P=M||P),Re(_)&&(C=_||C));const w=u(d,!0)(g),N=C==="vnode"&&Lt(w)&&P?w[0]:w;return P?f(P)(N,C):N},message:u,type:v,interpolate:p,normalize:h,values:Ot(_t(),o,l)};return g}const $f=()=>"",Tn=t=>yt(t);function Yf(t,...e){const{fallbackFormat:n,postTranslation:i,unresolving:r,messageCompiler:s,fallbackLocale:o,messages:a}=t,[l,c]=nc(...e),u=ot(c.missingWarn)?c.missingWarn:t.missingWarn,f=ot(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,h=ot(c.escapeParameter)?c.escapeParameter:t.escapeParameter,p=!!c.resolvedMessage,v=Re(c.default)||ot(c.default)?ot(c.default)?s?l:()=>l:c.default:n?s?l:()=>l:null,x=n||v!=null&&(Re(v)||yt(v)),g=vu(t,c);h&&G0(c);let[d,S,M]=p?[l,g,a[g]||_t()]:Xp(t,l,g,o,f,u),_=d,C=l;if(!p&&!(Re(_)||ni(_)||Tn(_))&&x&&(_=v,C=_),!p&&(!(Re(_)||ni(_)||Tn(_))||!Re(S)))return r?Va:l;let P=!1;const w=()=>{P=!0},N=Tn(_)?_:jp(t,l,S,_,C,w);if(P)return _;const A=j0(t,S,M,c),y=z0(A),O=W0(t,N,y);let G=i?i(O,l):O;if(h&&Re(G)&&(G=yv(G)),__INTLIFY_PROD_DEVTOOLS__){const W={timestamp:Date.now(),key:Re(l)?l:Tn(_)?_.key:"",locale:S||(Tn(_)?_.locale:""),format:Re(_)?_:Tn(_)?_.source:"",message:G};W.meta=Ot({},t.__meta,P0()||{}),u0(W)}return G}function G0(t){Lt(t.list)?t.list=t.list.map(e=>Re(e)?Pf(e):e):at(t.named)&&Object.keys(t.named).forEach(e=>{Re(t.named[e])&&(t.named[e]=Pf(t.named[e]))})}function Xp(t,e,n,i,r,s){const{messages:o,onWarn:a,messageResolver:l,localeFallbacker:c}=t,u=c(t,i,n);let f=_t(),h,p=null;const v="translate";for(let x=0;x<u.length&&(h=u[x],f=o[h]||_t(),(p=l(f,e))===null&&(p=f[e]),!(Re(p)||ni(p)||Tn(p)));x++)if(!U0(h,u)){const g=xu(t,e,h,s,v);g!==e&&(p=g)}return[p,h,f]}function jp(t,e,n,i,r,s){const{messageCompiler:o,warnHtmlMessage:a}=t;if(Tn(i)){const c=i;return c.locale=c.locale||n,c.key=c.key||e,c}if(o==null){const c=(()=>i);return c.locale=n,c.key=e,c}const l=o(i,X0(t,n,r,i,a,s));return l.locale=n,l.key=e,l.source=i,l}function W0(t,e,n){return e(n)}function nc(...t){const[e,n,i]=t,r=_t();if(!Re(e)&&!Ut(e)&&!Tn(e)&&!ni(e))throw Mi(Ei.INVALID_ARGUMENT);const s=Ut(e)?String(e):(Tn(e),e);return Ut(n)?r.plural=n:Re(n)?r.default=n:Qe(n)&&!ka(n)?r.named=n:Lt(n)&&(r.list=n),Ut(i)?r.plural=i:Re(i)?r.default=i:Qe(i)&&Ot(r,i),[s,r]}function X0(t,e,n,i,r,s){return{locale:e,key:n,warnHtmlMessage:r,onError:o=>{throw s&&s(o),o},onCacheKey:o=>xv(e,n,o)}}function j0(t,e,n,i){const{modifiers:r,pluralRules:s,messageResolver:o,fallbackLocale:a,fallbackWarn:l,missingWarn:c,fallbackContext:u}=t,h={locale:e,modifiers:r,pluralRules:s,messages:(p,v)=>{let x=o(n,p);if(x==null&&(u||v)){const[,,g]=Xp(u||t,p,e,a,l,c);x=o(g,p)}if(Re(x)||ni(x)){let g=!1;const S=jp(t,p,e,x,p,()=>{g=!0});return g?$f:S}else return Tn(x)?x:$f}};return t.processor&&(h.processor=t.processor),i.list&&(h.list=i.list),i.named&&(h.named=i.named),Ut(i.plural)&&(h.pluralIndex=i.plural),h}Zv();/*!
  * vue-i18n v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */const q0="11.1.12";function $0(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(Sr().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(Sr().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Sr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Sr().__INTLIFY_PROD_DEVTOOLS__=!1)}const fn={UNEXPECTED_RETURN_TYPE:d0,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32};function vn(t,...e){return Ha(t,null,void 0)}const ic=Ji("__translateVNode"),rc=Ji("__datetimeParts"),sc=Ji("__numberParts"),qp=Ji("__setPluralRules"),$p=Ji("__injectWithOption"),oc=Ji("__dispose");function io(t){if(!at(t)||ni(t))return t;for(const e in t)if(Bn(t,e))if(!e.includes("."))at(t[e])&&io(t[e]);else{const n=e.split("."),i=n.length-1;let r=t,s=!1;for(let o=0;o<i;o++){if(n[o]==="__proto__")throw new Error(`unsafe key: ${n[o]}`);if(n[o]in r||(r[n[o]]=_t()),!at(r[n[o]])){s=!0;break}r=r[n[o]]}if(s||(ni(r)?Op.includes(n[i])||delete t[e]:(r[n[i]]=t[e],delete t[e])),!ni(r)){const o=r[n[i]];at(o)&&io(o)}}return t}function Su(t,e){const{messages:n,__i18n:i,messageResolver:r,flatJson:s}=e,o=Qe(n)?n:Lt(i)?_t():{[t]:_t()};if(Lt(i)&&i.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:l,resource:c}=a;l?(o[l]=o[l]||_t(),la(c,o[l])):la(c,o)}else Re(a)&&la(JSON.parse(a),o)}),r==null&&s)for(const a in o)Bn(o,a)&&io(o[a]);return o}function Yp(t){return t.type}function Kp(t,e,n){let i=at(e.messages)?e.messages:_t();"__i18nGlobal"in n&&(i=Su(t.locale.value,{messages:i,__i18n:n.__i18nGlobal}));const r=Object.keys(i);r.length&&r.forEach(s=>{t.mergeLocaleMessage(s,i[s])});{if(at(e.datetimeFormats)){const s=Object.keys(e.datetimeFormats);s.length&&s.forEach(o=>{t.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(at(e.numberFormats)){const s=Object.keys(e.numberFormats);s.length&&s.forEach(o=>{t.mergeNumberFormat(o,e.numberFormats[o])})}}}function Kf(t){return Ve(_o,null,t,0)}const Zf="__INTLIFY_META__",Jf=()=>[],Y0=()=>!1;let Qf=0;function ed(t){return((e,n,i,r)=>t(n,i,as()||void 0,r))}const K0=()=>{const t=as();let e=null;return t&&(e=Yp(t)[Zf])?{[Zf]:e}:null};function Eu(t={}){const{__root:e,__injectWithOption:n}=t,i=e===void 0,r=t.flatJson,s=Ta?bt:Rg;let o=ot(t.inheritLocale)?t.inheritLocale:!0;const a=s(e&&o?e.locale.value:Re(t.locale)?t.locale:no),l=s(e&&o?e.fallbackLocale.value:Re(t.fallbackLocale)||Lt(t.fallbackLocale)||Qe(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:a.value),c=s(Su(a.value,t)),u=s(Qe(t.datetimeFormats)?t.datetimeFormats:{[a.value]:{}}),f=s(Qe(t.numberFormats)?t.numberFormats:{[a.value]:{}});let h=e?e.missingWarn:ot(t.missingWarn)||ls(t.missingWarn)?t.missingWarn:!0,p=e?e.fallbackWarn:ot(t.fallbackWarn)||ls(t.fallbackWarn)?t.fallbackWarn:!0,v=e?e.fallbackRoot:ot(t.fallbackRoot)?t.fallbackRoot:!0,x=!!t.fallbackFormat,g=yt(t.missing)?t.missing:null,d=yt(t.missing)?ed(t.missing):null,S=yt(t.postTranslation)?t.postTranslation:null,M=e?e.warnHtmlMessage:ot(t.warnHtmlMessage)?t.warnHtmlMessage:!0,_=!!t.escapeParameter;const C=e?e.modifiers:Qe(t.modifiers)?t.modifiers:{};let P=t.pluralRules||e&&e.pluralRules,w;w=(()=>{i&&Vf(null);const m={version:q0,locale:a.value,fallbackLocale:l.value,messages:c.value,modifiers:C,pluralRules:P,missing:d===null?void 0:d,missingWarn:h,fallbackWarn:p,fallbackFormat:x,unresolving:!0,postTranslation:S===null?void 0:S,warnHtmlMessage:M,escapeParameter:_,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};m.datetimeFormats=u.value,m.numberFormats=f.value,m.__datetimeFormatters=Qe(w)?w.__datetimeFormatters:void 0,m.__numberFormatters=Qe(w)?w.__numberFormatters:void 0;const I=I0(m);return i&&Vf(I),I})(),ws(w,a.value,l.value);function A(){return[a.value,l.value,c.value,u.value,f.value]}const y=gr({get:()=>a.value,set:m=>{w.locale=m,a.value=m}}),O=gr({get:()=>l.value,set:m=>{w.fallbackLocale=m,l.value=m,ws(w,a.value,m)}}),G=gr(()=>c.value),W=gr(()=>u.value),te=gr(()=>f.value);function ie(){return yt(S)?S:null}function $(m){S=m,w.postTranslation=m}function Q(){return g}function j(m){m!==null&&(d=ed(m)),g=m,w.missing=d}const le=(m,I,H,q,X,_e)=>{A();let ce;try{__INTLIFY_PROD_DEVTOOLS__,i||(w.fallbackContext=e?L0():void 0),ce=m(w)}finally{__INTLIFY_PROD_DEVTOOLS__,i||(w.fallbackContext=void 0)}if(H!=="translate exists"&&Ut(ce)&&ce===Va||H==="translate exists"&&!ce){const[xe,Ae]=I();return e&&v?q(e):X(xe)}else{if(_e(ce))return ce;throw vn(fn.UNEXPECTED_RETURN_TYPE)}};function me(...m){return le(I=>Reflect.apply(Yf,null,[I,...m]),()=>nc(...m),"translate",I=>Reflect.apply(I.t,I,[...m]),I=>I,I=>Re(I))}function Me(...m){const[I,H,q]=m;if(q&&!at(q))throw vn(fn.INVALID_ARGUMENT);return me(I,H,Ot({resolvedMessage:!0},q||{}))}function Fe(...m){return le(I=>Reflect.apply(Gf,null,[I,...m]),()=>ec(...m),"datetime format",I=>Reflect.apply(I.d,I,[...m]),()=>kf,I=>Re(I)||Lt(I))}function Je(...m){return le(I=>Reflect.apply(Xf,null,[I,...m]),()=>tc(...m),"number format",I=>Reflect.apply(I.n,I,[...m]),()=>kf,I=>Re(I)||Lt(I))}function ne(m){return m.map(I=>Re(I)||Ut(I)||ot(I)?Kf(String(I)):I)}const ye={normalize:ne,interpolate:m=>m,type:"vnode"};function pe(...m){return le(I=>{let H;const q=I;try{q.processor=ye,H=Reflect.apply(Yf,null,[q,...m])}finally{q.processor=null}return H},()=>nc(...m),"translate",I=>I[ic](...m),I=>[Kf(I)],I=>Lt(I))}function be(...m){return le(I=>Reflect.apply(Xf,null,[I,...m]),()=>tc(...m),"number format",I=>I[sc](...m),Jf,I=>Re(I)||Lt(I))}function Ke(...m){return le(I=>Reflect.apply(Gf,null,[I,...m]),()=>ec(...m),"datetime format",I=>I[rc](...m),Jf,I=>Re(I)||Lt(I))}function Oe(m){P=m,w.pluralRules=P}function it(m,I){return le(()=>{if(!m)return!1;const H=Re(I)?I:a.value,q=b(H),X=w.messageResolver(q,m);return ni(X)||Tn(X)||Re(X)},()=>[m],"translate exists",H=>Reflect.apply(H.te,H,[m,I]),Y0,H=>ot(H))}function D(m){let I=null;const H=Fp(w,l.value,a.value);for(let q=0;q<H.length;q++){const X=c.value[H[q]]||{},_e=w.messageResolver(X,m);if(_e!=null){I=_e;break}}return I}function F(m){const I=D(m);return I??(e?e.tm(m)||{}:{})}function b(m){return c.value[m]||{}}function re(m,I){if(r){const H={[m]:I};for(const q in H)Bn(H,q)&&io(H[q]);I=H[m]}c.value[m]=I,w.messages=c.value}function Z(m,I){c.value[m]=c.value[m]||{};const H={[m]:I};if(r)for(const q in H)Bn(H,q)&&io(H[q]);I=H[m],la(I,c.value[m]),w.messages=c.value}function ee(m){return u.value[m]||{}}function T(m,I){u.value[m]=I,w.datetimeFormats=u.value,Wf(w,m,I)}function L(m,I){u.value[m]=Ot(u.value[m]||{},I),w.datetimeFormats=u.value,Wf(w,m,I)}function U(m){return f.value[m]||{}}function B(m,I){f.value[m]=I,w.numberFormats=f.value,jf(w,m,I)}function ae(m,I){f.value[m]=Ot(f.value[m]||{},I),w.numberFormats=f.value,jf(w,m,I)}Qf++,e&&Ta&&(Xi(e.locale,m=>{o&&(a.value=m,w.locale=m,ws(w,a.value,l.value))}),Xi(e.fallbackLocale,m=>{o&&(l.value=m,w.fallbackLocale=m,ws(w,a.value,l.value))}));const E={id:Qf,locale:y,fallbackLocale:O,get inheritLocale(){return o},set inheritLocale(m){o=m,m&&e&&(a.value=e.locale.value,l.value=e.fallbackLocale.value,ws(w,a.value,l.value))},get availableLocales(){return Object.keys(c.value).sort()},messages:G,get modifiers(){return C},get pluralRules(){return P||{}},get isGlobal(){return i},get missingWarn(){return h},set missingWarn(m){h=m,w.missingWarn=h},get fallbackWarn(){return p},set fallbackWarn(m){p=m,w.fallbackWarn=p},get fallbackRoot(){return v},set fallbackRoot(m){v=m},get fallbackFormat(){return x},set fallbackFormat(m){x=m,w.fallbackFormat=x},get warnHtmlMessage(){return M},set warnHtmlMessage(m){M=m,w.warnHtmlMessage=m},get escapeParameter(){return _},set escapeParameter(m){_=m,w.escapeParameter=m},t:me,getLocaleMessage:b,setLocaleMessage:re,mergeLocaleMessage:Z,getPostTranslationHandler:ie,setPostTranslationHandler:$,getMissingHandler:Q,setMissingHandler:j,[qp]:Oe};return E.datetimeFormats=W,E.numberFormats=te,E.rt=Me,E.te=it,E.tm=F,E.d=Fe,E.n=Je,E.getDateTimeFormat=ee,E.setDateTimeFormat=T,E.mergeDateTimeFormat=L,E.getNumberFormat=U,E.setNumberFormat=B,E.mergeNumberFormat=ae,E[$p]=n,E[ic]=pe,E[rc]=Ke,E[sc]=be,E}function Z0(t){const e=Re(t.locale)?t.locale:no,n=Re(t.fallbackLocale)||Lt(t.fallbackLocale)||Qe(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,i=yt(t.missing)?t.missing:void 0,r=ot(t.silentTranslationWarn)||ls(t.silentTranslationWarn)?!t.silentTranslationWarn:!0,s=ot(t.silentFallbackWarn)||ls(t.silentFallbackWarn)?!t.silentFallbackWarn:!0,o=ot(t.fallbackRoot)?t.fallbackRoot:!0,a=!!t.formatFallbackMessages,l=Qe(t.modifiers)?t.modifiers:{},c=t.pluralizationRules,u=yt(t.postTranslation)?t.postTranslation:void 0,f=Re(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,h=!!t.escapeParameterHtml,p=ot(t.sync)?t.sync:!0;let v=t.messages;if(Qe(t.sharedMessages)){const C=t.sharedMessages;v=Object.keys(C).reduce((w,N)=>{const A=w[N]||(w[N]={});return Ot(A,C[N]),w},v||{})}const{__i18n:x,__root:g,__injectWithOption:d}=t,S=t.datetimeFormats,M=t.numberFormats,_=t.flatJson;return{locale:e,fallbackLocale:n,messages:v,flatJson:_,datetimeFormats:S,numberFormats:M,missing:i,missingWarn:r,fallbackWarn:s,fallbackRoot:o,fallbackFormat:a,modifiers:l,pluralRules:c,postTranslation:u,warnHtmlMessage:f,escapeParameter:h,messageResolver:t.messageResolver,inheritLocale:p,__i18n:x,__root:g,__injectWithOption:d}}function ac(t={}){const e=Eu(Z0(t)),{__extender:n}=t,i={id:e.id,get locale(){return e.locale.value},set locale(r){e.locale.value=r},get fallbackLocale(){return e.fallbackLocale.value},set fallbackLocale(r){e.fallbackLocale.value=r},get messages(){return e.messages.value},get datetimeFormats(){return e.datetimeFormats.value},get numberFormats(){return e.numberFormats.value},get availableLocales(){return e.availableLocales},get missing(){return e.getMissingHandler()},set missing(r){e.setMissingHandler(r)},get silentTranslationWarn(){return ot(e.missingWarn)?!e.missingWarn:e.missingWarn},set silentTranslationWarn(r){e.missingWarn=ot(r)?!r:r},get silentFallbackWarn(){return ot(e.fallbackWarn)?!e.fallbackWarn:e.fallbackWarn},set silentFallbackWarn(r){e.fallbackWarn=ot(r)?!r:r},get modifiers(){return e.modifiers},get formatFallbackMessages(){return e.fallbackFormat},set formatFallbackMessages(r){e.fallbackFormat=r},get postTranslation(){return e.getPostTranslationHandler()},set postTranslation(r){e.setPostTranslationHandler(r)},get sync(){return e.inheritLocale},set sync(r){e.inheritLocale=r},get warnHtmlInMessage(){return e.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(r){e.warnHtmlMessage=r!=="off"},get escapeParameterHtml(){return e.escapeParameter},set escapeParameterHtml(r){e.escapeParameter=r},get pluralizationRules(){return e.pluralRules||{}},__composer:e,t(...r){return Reflect.apply(e.t,e,[...r])},rt(...r){return Reflect.apply(e.rt,e,[...r])},te(r,s){return e.te(r,s)},tm(r){return e.tm(r)},getLocaleMessage(r){return e.getLocaleMessage(r)},setLocaleMessage(r,s){e.setLocaleMessage(r,s)},mergeLocaleMessage(r,s){e.mergeLocaleMessage(r,s)},d(...r){return Reflect.apply(e.d,e,[...r])},getDateTimeFormat(r){return e.getDateTimeFormat(r)},setDateTimeFormat(r,s){e.setDateTimeFormat(r,s)},mergeDateTimeFormat(r,s){e.mergeDateTimeFormat(r,s)},n(...r){return Reflect.apply(e.n,e,[...r])},getNumberFormat(r){return e.getNumberFormat(r)},setNumberFormat(r,s){e.setNumberFormat(r,s)},mergeNumberFormat(r,s){e.mergeNumberFormat(r,s)}};return i.__extender=n,i}function J0(t,e,n){return{beforeCreate(){const i=as();if(!i)throw vn(fn.UNEXPECTED_ERROR);const r=this.$options;if(r.i18n){const s=r.i18n;if(r.__i18n&&(s.__i18n=r.__i18n),s.__root=e,this===this.$root)this.$i18n=td(t,s);else{s.__injectWithOption=!0,s.__extender=n.__vueI18nExtend,this.$i18n=ac(s);const o=this.$i18n;o.__extender&&(o.__disposer=o.__extender(this.$i18n))}}else if(r.__i18n)if(this===this.$root)this.$i18n=td(t,r);else{this.$i18n=ac({__i18n:r.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const s=this.$i18n;s.__extender&&(s.__disposer=s.__extender(this.$i18n))}else this.$i18n=t;r.__i18nGlobal&&Kp(e,r,r),this.$t=(...s)=>this.$i18n.t(...s),this.$rt=(...s)=>this.$i18n.rt(...s),this.$te=(s,o)=>this.$i18n.te(s,o),this.$d=(...s)=>this.$i18n.d(...s),this.$n=(...s)=>this.$i18n.n(...s),this.$tm=s=>this.$i18n.tm(s),n.__setInstance(i,this.$i18n)},mounted(){},unmounted(){const i=as();if(!i)throw vn(fn.UNEXPECTED_ERROR);const r=this.$i18n;delete this.$t,delete this.$rt,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,r.__disposer&&(r.__disposer(),delete r.__disposer,delete r.__extender),n.__deleteInstance(i),delete this.$i18n}}}function td(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[qp](e.pluralizationRules||t.pluralizationRules);const n=Su(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(i=>t.mergeLocaleMessage(i,n[i])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(i=>t.mergeDateTimeFormat(i,e.datetimeFormats[i])),e.numberFormats&&Object.keys(e.numberFormats).forEach(i=>t.mergeNumberFormat(i,e.numberFormats[i])),t}const Mu={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function Q0({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((i,r)=>[...i,...r.type===Et?r.children:[r]],[]):e.reduce((n,i)=>{const r=t[i];return r&&(n[i]=r()),n},_t())}function Zp(){return Et}const ex=At({name:"i18n-t",props:Ot({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>Ut(t)||!isNaN(t)}},Mu),setup(t,e){const{slots:n,attrs:i}=e,r=t.i18n||dn({useScope:t.scope,__useComponent:!0});return()=>{const s=Object.keys(n).filter(f=>f[0]!=="_"),o=_t();t.locale&&(o.locale=t.locale),t.plural!==void 0&&(o.plural=Re(t.plural)?+t.plural:t.plural);const a=Q0(e,s),l=r[ic](t.keypath,a,o),c=Ot(_t(),i),u=Re(t.tag)||at(t.tag)?t.tag:Zp();return bp(u,c,l)}}}),nd=ex;function tx(t){return Lt(t)&&!Re(t[0])}function Jp(t,e,n,i){const{slots:r,attrs:s}=e;return()=>{const o={part:!0};let a=_t();t.locale&&(o.locale=t.locale),Re(t.format)?o.key=t.format:at(t.format)&&(Re(t.format.key)&&(o.key=t.format.key),a=Object.keys(t.format).reduce((h,p)=>n.includes(p)?Ot(_t(),h,{[p]:t.format[p]}):h,_t()));const l=i(t.value,o,a);let c=[o.key];Lt(l)?c=l.map((h,p)=>{const v=r[h.type],x=v?v({[h.type]:h.value,index:p,parts:l}):[h.value];return tx(x)&&(x[0].key=`${h.type}-${p}`),x}):Re(l)&&(c=[l]);const u=Ot(_t(),s),f=Re(t.tag)||at(t.tag)?t.tag:Zp();return bp(f,u,c)}}const nx=At({name:"i18n-n",props:Ot({value:{type:Number,required:!0},format:{type:[String,Object]}},Mu),setup(t,e){const n=t.i18n||dn({useScope:t.scope,__useComponent:!0});return Jp(t,e,Wp,(...i)=>n[sc](...i))}}),id=nx;function ix(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const i=n.__getInstance(e);return i!=null?i.__composer:t.global.__composer}}function rx(t){const e=o=>{const{instance:a,value:l}=o;if(!a||!a.$)throw vn(fn.UNEXPECTED_ERROR);const c=ix(t,a.$),u=rd(l);return[Reflect.apply(c.t,c,[...sd(u)]),c]};return{created:(o,a)=>{const[l,c]=e(a);Ta&&t.global===c&&(o.__i18nWatcher=Xi(c.locale,()=>{a.instance&&a.instance.$forceUpdate()})),o.__composer=c,o.textContent=l},unmounted:o=>{Ta&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:a})=>{if(o.__composer){const l=o.__composer,c=rd(a);o.textContent=Reflect.apply(l.t,l,[...sd(c)])}},getSSRProps:o=>{const[a]=e(o);return{textContent:a}}}}function rd(t){if(Re(t))return{path:t};if(Qe(t)){if(!("path"in t))throw vn(fn.REQUIRED_VALUE,"path");return t}else throw vn(fn.INVALID_VALUE)}function sd(t){const{path:e,locale:n,args:i,choice:r,plural:s}=t,o={},a=i||{};return Re(n)&&(o.locale=n),Ut(r)&&(o.plural=r),Ut(s)&&(o.plural=s),[e,a,o]}function sx(t,e,...n){const i=Qe(n[0])?n[0]:{};(ot(i.globalInstall)?i.globalInstall:!0)&&([nd.name,"I18nT"].forEach(s=>t.component(s,nd)),[id.name,"I18nN"].forEach(s=>t.component(s,id)),[ad.name,"I18nD"].forEach(s=>t.component(s,ad))),t.directive("t",rx(e))}const ox=Ji("global-vue-i18n");function ax(t={}){const e=__VUE_I18N_LEGACY_API__&&ot(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,n=ot(t.globalInjection)?t.globalInjection:!0,i=new Map,[r,s]=lx(t,e),o=Ji("");function a(f){return i.get(f)||null}function l(f,h){i.set(f,h)}function c(f){i.delete(f)}const u={get mode(){return __VUE_I18N_LEGACY_API__&&e?"legacy":"composition"},async install(f,...h){if(f.__VUE_I18N_SYMBOL__=o,f.provide(f.__VUE_I18N_SYMBOL__,u),Qe(h[0])){const x=h[0];u.__composerExtend=x.__composerExtend,u.__vueI18nExtend=x.__vueI18nExtend}let p=null;!e&&n&&(p=gx(f,u.global)),__VUE_I18N_FULL_INSTALL__&&sx(f,u,...h),__VUE_I18N_LEGACY_API__&&e&&f.mixin(J0(s,s.__composer,u));const v=f.unmount;f.unmount=()=>{p&&p(),u.dispose(),v()}},get global(){return s},dispose(){r.stop()},__instances:i,__getInstance:a,__setInstance:l,__deleteInstance:c};return u}function dn(t={}){const e=as();if(e==null)throw vn(fn.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw vn(fn.NOT_INSTALLED);const n=cx(e),i=fx(n),r=Yp(e),s=ux(t,r);if(s==="global")return Kp(i,t,r),i;if(s==="parent"){let l=dx(n,e,t.__useComponent);return l==null&&(l=i),l}const o=n;let a=o.__getInstance(e);if(a==null){const l=Ot({},t);"__i18n"in r&&(l.__i18n=r.__i18n),i&&(l.__root=i),a=Eu(l),o.__composerExtend&&(a[oc]=o.__composerExtend(a)),px(o,e,a),o.__setInstance(e,a)}return a}function lx(t,e){const n=og(),i=__VUE_I18N_LEGACY_API__&&e?n.run(()=>ac(t)):n.run(()=>Eu(t));if(i==null)throw vn(fn.UNEXPECTED_ERROR);return[n,i]}function cx(t){const e=zs(t.isCE?ox:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw vn(t.isCE?fn.NOT_INSTALLED_WITH_PROVIDE:fn.UNEXPECTED_ERROR);return e}function ux(t,e){return ka(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function fx(t){return t.mode==="composition"?t.global:t.global.__composer}function dx(t,e,n=!1){let i=null;const r=e.root;let s=hx(e,n);for(;s!=null;){const o=t;if(t.mode==="composition")i=o.__getInstance(s);else if(__VUE_I18N_LEGACY_API__){const a=o.__getInstance(s);a!=null&&(i=a.__composer,n&&i&&!i[$p]&&(i=null))}if(i!=null||r===s)break;s=s.parent}return i}function hx(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function px(t,e,n){Wn(()=>{},e),mo(()=>{const i=n;t.__deleteInstance(e);const r=i[oc];r&&(r(),delete i[oc])},e)}const mx=["locale","fallbackLocale","availableLocales"],od=["t","rt","d","n","tm","te"];function gx(t,e){const n=Object.create(null);return mx.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s)throw vn(fn.UNEXPECTED_ERROR);const o=Gt(s.value)?{get(){return s.value.value},set(a){s.value.value=a}}:{get(){return s.get&&s.get()}};Object.defineProperty(n,r,o)}),t.config.globalProperties.$i18n=n,od.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s||!s.value)throw vn(fn.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${r}`,s)}),()=>{delete t.config.globalProperties.$i18n,od.forEach(r=>{delete t.config.globalProperties[`$${r}`]})}}const _x=At({name:"i18n-d",props:Ot({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Mu),setup(t,e){const n=t.i18n||dn({useScope:t.scope,__useComponent:!0});return Jp(t,e,Gp,(...i)=>n[rc](...i))}}),ad=_x;$0();A0(a0);w0(y0);R0(Fp);if(__INTLIFY_PROD_DEVTOOLS__){const t=Sr();t.__INTLIFY__=!0,l0(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const vx={id:"navbar"},xx={id:"lang"},Sx={id:"progress",class:"column"},Ex=At({__name:"NavBar",props:{canMoveForward:{type:Boolean},canMoveBackward:{type:Boolean}},emits:["moved"],setup(t,{expose:e,emit:n}){const i=n,r=bt(0);function s(c){r.value=c}e({setNavIdx:s}),Wn(()=>{document.addEventListener("wheel",c=>{const u=c.deltaY<0?1:-1;r.value+=u,i("moved",r.value),c.preventDefault()},{passive:!1})});const{locale:o}=dn();function a(c){o.value=c,l.value=!1}const l=bt(!1);return(c,u)=>(Be(),$e("div",vx,[u[5]||(u[5]=D_('<div class="glass column" data-v-cd64fa27><a href="https://github.com/Crhonopost" target="_blank" data-v-cd64fa27>Github</a><a href="cv.pdf" target="_blank" data-v-cd64fa27>CV</a><a href="https://www.linkedin.com/in/nathan-souvignet-a10732230/" target="_blank" data-v-cd64fa27>LinkedIn</a><a href="mailto:nath.souvignet@gmail.com" data-v-cd64fa27>Email</a></div>',1)),Ce("div",xx,[Ve(_r,{content:"language",onClick:u[0]||(u[0]=f=>l.value=!l.value),disable:!1}),l.value?(Be(),$e("div",{key:0,class:Hn({slideIn:l.value})},[Ve(_r,{content:"en",onClick:u[1]||(u[1]=f=>a("en")),disable:!1}),Ve(_r,{content:"fr",onClick:u[2]||(u[2]=f=>a("fr")),disable:!1})],2)):ji("",!0)]),Ce("div",Sx,[Ve(_r,{disable:!t.canMoveForward,content:"arrow_drop_up",onClick:u[3]||(u[3]=()=>{r.value++,i("moved",r.value)})},null,8,["disable"]),Ve(_r,{disable:!t.canMoveBackward,content:"arrow_drop_down",onClick:u[4]||(u[4]=()=>{r.value--,i("moved",r.value)})},null,8,["disable"])])]))}}),Sn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},Mx=Sn(Ex,[["__scopeId","data-v-cd64fa27"]]),ld=1e3;function yx(){const t=bt(0);function e(o){t.value+=o==="f"?1:-1,t.value=Math.max(0,t.value)}function n(o){var l;const a=((l=document.querySelector(".scene"))==null?void 0:l.childElementCount)||0;t.value=o,t.value=Math.min(Math.max(0,t.value),a)}window.addEventListener("popstate",o=>{o.state&&typeof o.state.page=="number"&&(t.value=o.state.page)});function i(o){const a=(o-t.value)*ld,l=1-a/(ld*2),c=.1;let u=1;const f=-100;if(a<f){const h=f-a;u=Math.max(0,1-h/100)}else a>500&&(u=Math.max(0,1-(a-500)/200));return{transform:`
                translate(-50%, -50%)
                translateY(${-a*c}px)
                translateZ(${-a}px)
                scale(${l})
            `,opacity:u,zIndex:o}}function r(o){var c;const a=((c=document.querySelector(".scene"))==null?void 0:c.childElementCount)||0,l=t.value+(o==="f"?1:-1);return l>=0&&l<a-1}function s(o){var l;const a=((l=document.querySelector(".scene"))==null?void 0:l.childElementCount)||0;return o>=0&&o<a-1}return{scrollPosition:t,canScroll:r,canScrollTo:s,moveOneSlide:e,moveToSlide:n,getStyle:i}}const bx={class:"scene"},Tx=At({__name:"DepthListComponent",setup(t,{expose:e}){const{getStyle:n,moveOneSlide:i,moveToSlide:r,canScroll:s,canScrollTo:o}=yx();return e({moveToSlide:r,moveOneSlide:i,canScroll:s,canScrollTo:o}),(a,l)=>{var c,u;return Be(),$e("div",bx,[(Be(!0),$e(Et,null,zn(((u=(c=a.$slots).default)==null?void 0:u.call(c))??[],(f,h)=>(Be(),$e("div",{class:"layer",key:h,style:xs(Te(n)(h))},[(Be(),un(go(f)))],4))),128))])}}}),Ax=Sn(Tx,[["__scopeId","data-v-b092037e"]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yu="177",wx=0,cd=1,Rx=2,Qp=1,Cx=2,_i=3,Ki=0,an=1,Jn=2,qi=0,is=1,ud=2,fd=3,dd=4,Px=5,vr=100,Lx=101,Ix=102,Dx=103,Ux=104,Nx=200,Ox=201,Fx=202,Bx=203,lc=204,cc=205,kx=206,Hx=207,Vx=208,zx=209,Gx=210,Wx=211,Xx=212,jx=213,qx=214,uc=0,fc=1,dc=2,us=3,hc=4,pc=5,mc=6,gc=7,em=0,$x=1,Yx=2,$i=0,Kx=1,Zx=2,Jx=3,Qx=4,eS=5,tS=6,nS=7,tm=300,fs=301,ds=302,_c=303,vc=304,za=306,ro=1e3,Er=1001,xc=1002,Gn=1003,iS=1004,Uo=1005,Qn=1006,cl=1007,Mr=1008,Ci=1009,nm=1010,im=1011,so=1012,bu=1013,Tr=1014,yi=1015,xo=1016,Tu=1017,Au=1018,oo=1020,rm=35902,sm=1021,om=1022,kn=1023,ao=1026,lo=1027,am=1028,wu=1029,lm=1030,Ru=1031,Cu=1033,ca=33776,ua=33777,fa=33778,da=33779,Sc=35840,Ec=35841,Mc=35842,yc=35843,bc=36196,Tc=37492,Ac=37496,wc=37808,Rc=37809,Cc=37810,Pc=37811,Lc=37812,Ic=37813,Dc=37814,Uc=37815,Nc=37816,Oc=37817,Fc=37818,Bc=37819,kc=37820,Hc=37821,ha=36492,Vc=36494,zc=36495,cm=36283,Gc=36284,Wc=36285,Xc=36286,rS=3200,sS=3201,oS=0,aS=1,Gi="",bn="srgb",hs="srgb-linear",Aa="linear",gt="srgb",Lr=7680,hd=519,lS=512,cS=513,uS=514,um=515,fS=516,dS=517,hS=518,pS=519,pd=35044,md="300 es",bi=2e3,wa=2001;class Ss{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gd=1234567;const Ws=Math.PI/180,co=180/Math.PI;function Es(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function et(t,e,n){return Math.max(e,Math.min(n,t))}function Pu(t,e){return(t%e+e)%e}function mS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function gS(t,e,n){return t!==e?(n-t)/(e-t):0}function Xs(t,e,n){return(1-n)*t+n*e}function _S(t,e,n,i){return Xs(t,e,1-Math.exp(-n*i))}function vS(t,e=1){return e-Math.abs(Pu(t,e*2)-e)}function xS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function SS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function ES(t,e){return t+Math.floor(Math.random()*(e-t+1))}function MS(t,e){return t+Math.random()*(e-t)}function yS(t){return t*(.5-Math.random())}function bS(t){t!==void 0&&(gd=t);let e=gd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function TS(t){return t*Ws}function AS(t){return t*co}function wS(t){return(t&t-1)===0&&t!==0}function RS(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function CS(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function PS(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*f,l*h,a*c);break;case"YZY":t.set(l*h,a*u,l*f,a*c);break;case"ZXZ":t.set(l*f,l*h,a*u,a*c);break;case"XZX":t.set(a*u,l*v,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*v,a*c);break;case"ZYZ":t.set(l*v,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function $r(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const LS={DEG2RAD:Ws,RAD2DEG:co,generateUUID:Es,clamp:et,euclideanModulo:Pu,mapLinear:mS,inverseLerp:gS,lerp:Xs,damp:_S,pingpong:vS,smoothstep:xS,smootherstep:SS,randInt:ES,randFloat:MS,randFloatSpread:yS,seededRandom:bS,degToRad:TS,radToDeg:AS,isPowerOfTwo:wS,ceilPowerOfTwo:RS,floorPowerOfTwo:CS,setQuaternionFromProperEuler:PS,normalize:Jt,denormalize:$r};class nt{constructor(e=0,n=0){nt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class So{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=v,e[n+3]=x;return}if(f!==x||l!==h||c!==p||u!==v){let g=1-a;const d=l*h+c*p+u*v+f*x,S=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const C=Math.sqrt(M),P=Math.atan2(C,d*S);g=Math.sin(g*P)/C,a=Math.sin(a*P)/C}const _=a*S;if(l=l*g+h*_,c=c*g+p*_,u=u*g+v*_,f=f*g+x*_,g===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+u*f+l*p-c*h,e[n+1]=l*v+u*h+c*f-a*p,e[n+2]=c*v+u*p+a*h-l*f,e[n+3]=u*v-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"YXZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"ZXY":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"ZYX":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"YZX":this._x=h*u*f+c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f-h*p*v;break;case"XZY":this._x=h*u*f-c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,n=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(_d.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(_d.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ul.copy(this).projectOnVector(e),this.sub(ul)}reflect(e){return this.sub(ul.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ul=new Y,_d=new So;class Ye{constructor(e,n,i,r,s,o,a,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],v=i[8],x=r[0],g=r[3],d=r[6],S=r[1],M=r[4],_=r[7],C=r[2],P=r[5],w=r[8];return s[0]=o*x+a*S+l*C,s[3]=o*g+a*M+l*P,s[6]=o*d+a*_+l*w,s[1]=c*x+u*S+f*C,s[4]=c*g+u*M+f*P,s[7]=c*d+u*_+f*w,s[2]=h*x+p*S+v*C,s[5]=h*g+p*M+v*P,s[8]=h*d+p*_+v*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,v=n*f+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(fl.makeScale(e,n)),this}rotate(e){return this.premultiply(fl.makeRotation(-e)),this}translate(e,n){return this.premultiply(fl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fl=new Ye;function fm(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function uo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function IS(){const t=uo("canvas");return t.style.display="block",t}const vd={};function rs(t){t in vd||(vd[t]=!0,console.warn(t))}function DS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function US(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function NS(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const xd=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sd=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function OS(){const t={enabled:!0,workingColorSpace:hs,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===gt&&(r.r=Ti(r.r),r.g=Ti(r.g),r.b=Ti(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gt&&(r.r=ss(r.r),r.g=ss(r.g),r.b=ss(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Gi?Aa:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return rs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return rs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[hs]:{primaries:e,whitePoint:i,transfer:Aa,toXYZ:xd,fromXYZ:Sd,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:xd,fromXYZ:Sd,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}}),t}const st=OS();function Ti(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ss(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ir;class FS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ir===void 0&&(Ir=uo("canvas")),Ir.width=e.width,Ir.height=e.height;const r=Ir.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ir}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=uo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ti(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ti(n[i]/255)*255):n[i]=Ti(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let BS=0;class Lu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:BS++}),this.uuid=Es(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(dl(r[o].image)):s.push(dl(r[o]))}else s=dl(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function dl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?FS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kS=0;const hl=new Y;class nn extends Ss{constructor(e=nn.DEFAULT_IMAGE,n=nn.DEFAULT_MAPPING,i=Er,r=Er,s=Qn,o=Mr,a=kn,l=Ci,c=nn.DEFAULT_ANISOTROPY,u=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=Es(),this.name="",this.source=new Lu(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(hl).x}get height(){return this.source.getSize(hl).y}get depth(){return this.source.getSize(hl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ro:e.x=e.x-Math.floor(e.x);break;case Er:e.x=e.x<0?0:1;break;case xc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ro:e.y=e.y-Math.floor(e.y);break;case Er:e.y=e.y<0?0:1;break;case xc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=tm;nn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,n=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],v=l[9],x=l[2],g=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(c+1)/2,_=(p+1)/2,C=(d+1)/2,P=(u+h)/4,w=(f+x)/4,N=(v+g)/4;return M>_&&M>C?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=P/i,s=w/i):_>C?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=P/r,s=N/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=w/s,r=N/s),this.set(i,r,s,n),this}let S=Math.sqrt((g-v)*(g-v)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(g-v)/S,this.y=(f-x)/S,this.z=(h-u)/S,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this.w=et(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this.w=et(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class HS extends Ss{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new It(0,0,e,n),this.scissorTest=!1,this.viewport=new It(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new nn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Lu(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends HS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class dm extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class VS extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Eo{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Un.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Un.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Un.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Un):Un.fromBufferAttribute(s,o),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),No.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),No.copy(i.boundingBox)),No.applyMatrix4(e.matrixWorld),this.union(No)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rs),Oo.subVectors(this.max,Rs),Dr.subVectors(e.a,Rs),Ur.subVectors(e.b,Rs),Nr.subVectors(e.c,Rs),Ni.subVectors(Ur,Dr),Oi.subVectors(Nr,Ur),ar.subVectors(Dr,Nr);let n=[0,-Ni.z,Ni.y,0,-Oi.z,Oi.y,0,-ar.z,ar.y,Ni.z,0,-Ni.x,Oi.z,0,-Oi.x,ar.z,0,-ar.x,-Ni.y,Ni.x,0,-Oi.y,Oi.x,0,-ar.y,ar.x,0];return!pl(n,Dr,Ur,Nr,Oo)||(n=[1,0,0,0,1,0,0,0,1],!pl(n,Dr,Ur,Nr,Oo))?!1:(Fo.crossVectors(Ni,Oi),n=[Fo.x,Fo.y,Fo.z],pl(n,Dr,Ur,Nr,Oo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const di=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Un=new Y,No=new Eo,Dr=new Y,Ur=new Y,Nr=new Y,Ni=new Y,Oi=new Y,ar=new Y,Rs=new Y,Oo=new Y,Fo=new Y,lr=new Y;function pl(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){lr.fromArray(t,s);const a=r.x*Math.abs(lr.x)+r.y*Math.abs(lr.y)+r.z*Math.abs(lr.z),l=e.dot(lr),c=n.dot(lr),u=i.dot(lr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const zS=new Eo,Cs=new Y,ml=new Y;class Iu{constructor(e=new Y,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):zS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cs.subVectors(e,this.center);const n=Cs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Cs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ml.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cs.copy(e.center).add(ml)),this.expandByPoint(Cs.copy(e.center).sub(ml))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const hi=new Y,gl=new Y,Bo=new Y,Fi=new Y,_l=new Y,ko=new Y,vl=new Y;class GS{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=hi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,n),hi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){gl.copy(e).add(n).multiplyScalar(.5),Bo.copy(n).sub(e).normalize(),Fi.copy(this.origin).sub(gl);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Bo),a=Fi.dot(this.direction),l=-Fi.dot(Bo),c=Fi.lengthSq(),u=Math.abs(1-o*o);let f,h,p,v;if(u>0)if(f=o*l-a,h=o*a-l,v=s*u,f>=0)if(h>=-v)if(h<=v){const x=1/u;f*=x,h*=x,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(gl).addScaledVector(Bo,h),p}intersectSphere(e,n){hi.subVectors(e.center,this.origin);const i=hi.dot(this.direction),r=hi.dot(hi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,n,i,r,s){_l.subVectors(n,e),ko.subVectors(i,e),vl.crossVectors(_l,ko);let o=this.direction.dot(vl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fi.subVectors(this.origin,e);const l=a*this.direction.dot(ko.crossVectors(Fi,ko));if(l<0)return null;const c=a*this.direction.dot(_l.cross(Fi));if(c<0||l+c>o)return null;const u=-a*Fi.dot(vl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(e,n,i,r,s,o,a,l,c,u,f,h,p,v,x,g){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,h,p,v,x,g)}set(e,n,i,r,s,o,a,l,c,u,f,h,p,v,x,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=v,d[11]=x,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Or.setFromMatrixColumn(e,0).length(),s=1/Or.setFromMatrixColumn(e,1).length(),o=1/Or.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,v=a*u,x=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+v*c,n[5]=h-x*c,n[9]=-a*l,n[2]=x-h*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,v=c*u,x=c*f;n[0]=h+x*a,n[4]=v*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-v,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,v=c*u,x=c*f;n[0]=h-x*a,n[4]=-o*f,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*u,n[9]=x-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,v=a*u,x=a*f;n[0]=l*u,n[4]=v*c-p,n[8]=h*c+x,n[1]=l*f,n[5]=x*c+h,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,v=a*l,x=a*c;n[0]=l*u,n[4]=x-h*f,n[8]=v*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+v,n[10]=h-x*f}else if(e.order==="XZY"){const h=o*l,p=o*c,v=a*l,x=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+x,n[5]=o*u,n[9]=p*f-v,n[2]=v*f-p,n[6]=a*u,n[10]=x*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(WS,e,XS)}lookAt(e,n,i){const r=this.elements;return pn.subVectors(e,n),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Bi.crossVectors(i,pn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Bi.crossVectors(i,pn)),Bi.normalize(),Ho.crossVectors(pn,Bi),r[0]=Bi.x,r[4]=Ho.x,r[8]=pn.x,r[1]=Bi.y,r[5]=Ho.y,r[9]=pn.y,r[2]=Bi.z,r[6]=Ho.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],v=i[2],x=i[6],g=i[10],d=i[14],S=i[3],M=i[7],_=i[11],C=i[15],P=r[0],w=r[4],N=r[8],A=r[12],y=r[1],O=r[5],G=r[9],W=r[13],te=r[2],ie=r[6],$=r[10],Q=r[14],j=r[3],le=r[7],me=r[11],Me=r[15];return s[0]=o*P+a*y+l*te+c*j,s[4]=o*w+a*O+l*ie+c*le,s[8]=o*N+a*G+l*$+c*me,s[12]=o*A+a*W+l*Q+c*Me,s[1]=u*P+f*y+h*te+p*j,s[5]=u*w+f*O+h*ie+p*le,s[9]=u*N+f*G+h*$+p*me,s[13]=u*A+f*W+h*Q+p*Me,s[2]=v*P+x*y+g*te+d*j,s[6]=v*w+x*O+g*ie+d*le,s[10]=v*N+x*G+g*$+d*me,s[14]=v*A+x*W+g*Q+d*Me,s[3]=S*P+M*y+_*te+C*j,s[7]=S*w+M*O+_*ie+C*le,s[11]=S*N+M*G+_*$+C*me,s[15]=S*A+M*W+_*Q+C*Me,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],v=e[3],x=e[7],g=e[11],d=e[15];return v*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+x*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+g*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-n*l*f+n*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],v=e[12],x=e[13],g=e[14],d=e[15],S=f*g*c-x*h*c+x*l*p-a*g*p-f*l*d+a*h*d,M=v*h*c-u*g*c-v*l*p+o*g*p+u*l*d-o*h*d,_=u*x*c-v*f*c+v*a*p-o*x*p-u*a*d+o*f*d,C=v*f*l-u*x*l-v*a*h+o*x*h+u*a*g-o*f*g,P=n*S+i*M+r*_+s*C;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/P;return e[0]=S*w,e[1]=(x*h*s-f*g*s-x*r*p+i*g*p+f*r*d-i*h*d)*w,e[2]=(a*g*s-x*l*s+x*r*c-i*g*c-a*r*d+i*l*d)*w,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*w,e[4]=M*w,e[5]=(u*g*s-v*h*s+v*r*p-n*g*p-u*r*d+n*h*d)*w,e[6]=(v*l*s-o*g*s-v*r*c+n*g*c+o*r*d-n*l*d)*w,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*p+n*l*p)*w,e[8]=_*w,e[9]=(v*f*s-u*x*s-v*i*p+n*x*p+u*i*d-n*f*d)*w,e[10]=(o*x*s-v*a*s+v*i*c-n*x*c-o*i*d+n*a*d)*w,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*w,e[12]=C*w,e[13]=(u*x*r-v*f*r+v*i*h-n*x*h-u*i*g+n*f*g)*w,e[14]=(v*a*r-o*x*r-v*i*l+n*x*l+o*i*g-n*a*g)*w,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*h+n*a*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,v=s*f,x=o*u,g=o*f,d=a*f,S=l*c,M=l*u,_=l*f,C=i.x,P=i.y,w=i.z;return r[0]=(1-(x+d))*C,r[1]=(p+_)*C,r[2]=(v-M)*C,r[3]=0,r[4]=(p-_)*P,r[5]=(1-(h+d))*P,r[6]=(g+S)*P,r[7]=0,r[8]=(v+M)*w,r[9]=(g-S)*w,r[10]=(1-(h+x))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Or.set(r[0],r[1],r[2]).length();const o=Or.set(r[4],r[5],r[6]).length(),a=Or.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const c=1/s,u=1/o,f=1/a;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=u,Nn.elements[5]*=u,Nn.elements[6]*=u,Nn.elements[8]*=f,Nn.elements[9]*=f,Nn.elements[10]*=f,n.setFromRotationMatrix(Nn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=bi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,v;if(a===bi)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===wa)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=bi){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),h=(n+e)*c,p=(i+r)*u;let v,x;if(a===bi)v=(o+s)*f,x=-2*f;else if(a===wa)v=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Or=new Y,Nn=new Nt,WS=new Y(0,0,0),XS=new Y(1,1,1),Bi=new Y,Ho=new Y,pn=new Y,Ed=new Nt,Md=new So;class Pi{constructor(e=0,n=0,i=0,r=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Ed.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ed,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Md.setFromEuler(this),this.setFromQuaternion(Md,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class hm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jS=0;const yd=new Y,Fr=new So,pi=new Nt,Vo=new Y,Ps=new Y,qS=new Y,$S=new So,bd=new Y(1,0,0),Td=new Y(0,1,0),Ad=new Y(0,0,1),wd={type:"added"},YS={type:"removed"},Br={type:"childadded",child:null},xl={type:"childremoved",child:null};class _n extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=Es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const e=new Y,n=new Pi,i=new So,r=new Y(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Nt},normalMatrix:{value:new Ye}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Fr.setFromAxisAngle(e,n),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(e,n){return Fr.setFromAxisAngle(e,n),this.quaternion.premultiply(Fr),this}rotateX(e){return this.rotateOnAxis(bd,e)}rotateY(e){return this.rotateOnAxis(Td,e)}rotateZ(e){return this.rotateOnAxis(Ad,e)}translateOnAxis(e,n){return yd.copy(e).applyQuaternion(this.quaternion),this.position.add(yd.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(bd,e)}translateY(e){return this.translateOnAxis(Td,e)}translateZ(e){return this.translateOnAxis(Ad,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Vo.copy(e):Vo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Ps,Vo,this.up):pi.lookAt(Vo,Ps,this.up),this.quaternion.setFromRotationMatrix(pi),r&&(pi.extractRotation(r.matrixWorld),Fr.setFromRotationMatrix(pi),this.quaternion.premultiply(Fr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wd),Br.child=e,this.dispatchEvent(Br),Br.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(YS),xl.child=e,this.dispatchEvent(xl),xl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wd),Br.child=e,this.dispatchEvent(Br),Br.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,e,qS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,$S,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}_n.DEFAULT_UP=new Y(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new Y,mi=new Y,Sl=new Y,gi=new Y,kr=new Y,Hr=new Y,Rd=new Y,El=new Y,Ml=new Y,yl=new Y,bl=new It,Tl=new It,Al=new It;class Fn{constructor(e=new Y,n=new Y,i=new Y){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),On.subVectors(e,n),r.cross(On);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){On.subVectors(r,n),mi.subVectors(i,n),Sl.subVectors(e,n);const o=On.dot(On),a=On.dot(mi),l=On.dot(Sl),c=mi.dot(mi),u=mi.dot(Sl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,v=(o*u-a*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gi.x),l.addScaledVector(o,gi.y),l.addScaledVector(a,gi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return bl.setScalar(0),Tl.setScalar(0),Al.setScalar(0),bl.fromBufferAttribute(e,n),Tl.fromBufferAttribute(e,i),Al.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(bl,s.x),o.addScaledVector(Tl,s.y),o.addScaledVector(Al,s.z),o}static isFrontFacing(e,n,i,r){return On.subVectors(i,n),mi.subVectors(e,n),On.cross(mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),On.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Fn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Fn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;kr.subVectors(r,i),Hr.subVectors(s,i),El.subVectors(e,i);const l=kr.dot(El),c=Hr.dot(El);if(l<=0&&c<=0)return n.copy(i);Ml.subVectors(e,r);const u=kr.dot(Ml),f=Hr.dot(Ml);if(u>=0&&f<=u)return n.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(kr,o);yl.subVectors(e,s);const p=kr.dot(yl),v=Hr.dot(yl);if(v>=0&&p<=v)return n.copy(s);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(Hr,a);const g=u*v-p*f;if(g<=0&&f-u>=0&&p-v>=0)return Rd.subVectors(s,r),a=(f-u)/(f-u+(p-v)),n.copy(r).addScaledVector(Rd,a);const d=1/(g+x+h);return o=x*d,a=h*d,n.copy(i).addScaledVector(kr,o).addScaledVector(Hr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},zo={h:0,s:0,l:0};function wl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class mt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=st.workingColorSpace){if(e=Pu(e,1),n=et(n,0,1),i=et(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=wl(o,s,e+1/3),this.g=wl(o,s,e),this.b=wl(o,s,e-1/3)}return st.colorSpaceToWorking(this,r),this}setStyle(e,n=bn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=bn){const i=pm[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return st.workingToColorSpace(Xt.copy(this),e),Math.round(et(Xt.r*255,0,255))*65536+Math.round(et(Xt.g*255,0,255))*256+Math.round(et(Xt.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.workingToColorSpace(Xt.copy(this),n);const i=Xt.r,r=Xt.g,s=Xt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=st.workingColorSpace){return st.workingToColorSpace(Xt.copy(this),n),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=bn){st.workingToColorSpace(Xt.copy(this),e);const n=Xt.r,i=Xt.g,r=Xt.b;return e!==bn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+n,ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ki),e.getHSL(zo);const i=Xs(ki.h,zo.h,n),r=Xs(ki.s,zo.s,n),s=Xs(ki.l,zo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new mt;mt.NAMES=pm;let KS=0;class Ga extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=Es(),this.name="",this.type="Material",this.blending=is,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lc,this.blendDst=cc,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==is&&(i.blending=this.blending),this.side!==Ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==lc&&(i.blendSrc=this.blendSrc),this.blendDst!==cc&&(i.blendDst=this.blendDst),this.blendEquation!==vr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==us&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Lr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Lr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class mm extends Ga{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=em,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new Y,Go=new nt;let ZS=0;class ii{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ZS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=pd,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Go.fromBufferAttribute(this,n),Go.applyMatrix3(e),this.setXY(n,Go.x,Go.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix3(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix4(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyNormalMatrix(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.transformDirection(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=$r(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=$r(n,this.array)),n}setX(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=$r(n,this.array)),n}setY(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=$r(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=$r(n,this.array)),n}setW(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pd&&(e.usage=this.usage),e}}class gm extends ii{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class _m extends ii{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ri extends ii{constructor(e,n,i){super(new Float32Array(e),n,i)}}let JS=0;const yn=new Nt,Rl=new _n,Vr=new Y,mn=new Eo,Ls=new Eo,kt=new Y;class tr extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=Es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fm(e)?_m:gm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,n,i){return yn.makeTranslation(e,n,i),this.applyMatrix4(yn),this}scale(e,n,i){return yn.makeScale(e,n,i),this.applyMatrix4(yn),this}lookAt(e){return Rl.lookAt(e),Rl.updateMatrix(),this.applyMatrix4(Rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vr).negate(),this.translate(Vr.x,Vr.y,Vr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ri(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Eo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Iu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ls.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(mn.min,Ls.min),mn.expandByPoint(kt),kt.addVectors(mn.max,Ls.max),mn.expandByPoint(kt)):(mn.expandByPoint(Ls.min),mn.expandByPoint(Ls.max))}mn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)kt.fromBufferAttribute(a,c),l&&(Vr.fromBufferAttribute(e,c),kt.add(Vr)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ii(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new Y,l[N]=new Y;const c=new Y,u=new Y,f=new Y,h=new nt,p=new nt,v=new nt,x=new Y,g=new Y;function d(N,A,y){c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,A),f.fromBufferAttribute(i,y),h.fromBufferAttribute(s,N),p.fromBufferAttribute(s,A),v.fromBufferAttribute(s,y),u.sub(c),f.sub(c),p.sub(h),v.sub(h);const O=1/(p.x*v.y-v.x*p.y);isFinite(O)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(O),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(O),a[N].add(x),a[A].add(x),a[y].add(x),l[N].add(g),l[A].add(g),l[y].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let N=0,A=S.length;N<A;++N){const y=S[N],O=y.start,G=y.count;for(let W=O,te=O+G;W<te;W+=3)d(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const M=new Y,_=new Y,C=new Y,P=new Y;function w(N){C.fromBufferAttribute(r,N),P.copy(C);const A=a[N];M.copy(A),M.sub(C.multiplyScalar(C.dot(A))).normalize(),_.crossVectors(P,A);const O=_.dot(l[N])<0?-1:1;o.setXYZW(N,M.x,M.y,M.z,O)}for(let N=0,A=S.length;N<A;++N){const y=S[N],O=y.start,G=y.count;for(let W=O,te=O+G;W<te;W+=3)w(e.getX(W+0)),w(e.getX(W+1)),w(e.getX(W+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ii(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new Y,s=new Y,o=new Y,a=new Y,l=new Y,c=new Y,u=new Y,f=new Y;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),x=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,g),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)kt.fromBufferAttribute(e,n),kt.normalize(),e.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let d=0;d<u;d++)h[v++]=c[p++]}return new ii(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new tr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cd=new Nt,cr=new GS,Wo=new Iu,Pd=new Y,Xo=new Y,jo=new Y,qo=new Y,Cl=new Y,$o=new Y,Ld=new Y,Yo=new Y;class ei extends _n{constructor(e=new tr,n=new mm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){$o.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Cl.fromBufferAttribute(f,e),o?$o.addScaledVector(Cl,u):$o.addScaledVector(Cl.sub(n),u))}n.add($o)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wo.copy(i.boundingSphere),Wo.applyMatrix4(s),cr.copy(e.ray).recast(e.near),!(Wo.containsPoint(cr.origin)===!1&&(cr.intersectSphere(Wo,Pd)===null||cr.origin.distanceToSquared(Pd)>(e.far-e.near)**2))&&(Cd.copy(s).invert(),cr.copy(e.ray).applyMatrix4(Cd),!(i.boundingBox!==null&&cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,cr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const g=h[v],d=o[g.materialIndex],S=Math.max(g.start,p.start),M=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let _=S,C=M;_<C;_+=3){const P=a.getX(_),w=a.getX(_+1),N=a.getX(_+2);r=Ko(this,d,e,i,c,u,f,P,w,N),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let g=v,d=x;g<d;g+=3){const S=a.getX(g),M=a.getX(g+1),_=a.getX(g+2);r=Ko(this,o,e,i,c,u,f,S,M,_),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const g=h[v],d=o[g.materialIndex],S=Math.max(g.start,p.start),M=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let _=S,C=M;_<C;_+=3){const P=_,w=_+1,N=_+2;r=Ko(this,d,e,i,c,u,f,P,w,N),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=v,d=x;g<d;g+=3){const S=g,M=g+1,_=g+2;r=Ko(this,o,e,i,c,u,f,S,M,_),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function QS(t,e,n,i,r,s,o,a){let l;if(e.side===an?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ki,a),l===null)return null;Yo.copy(a),Yo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Yo);return c<n.near||c>n.far?null:{distance:c,point:Yo.clone(),object:t}}function Ko(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Xo),t.getVertexPosition(l,jo),t.getVertexPosition(c,qo);const u=QS(t,e,n,i,Xo,jo,qo,Ld);if(u){const f=new Y;Fn.getBarycoord(Ld,Xo,jo,qo,f),r&&(u.uv=Fn.getInterpolatedAttribute(r,a,l,c,f,new nt)),s&&(u.uv1=Fn.getInterpolatedAttribute(s,a,l,c,f,new nt)),o&&(u.normal=Fn.getInterpolatedAttribute(o,a,l,c,f,new Y),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new Y,materialIndex:0};Fn.getNormal(Xo,jo,qo,h.normal),u.face=h,u.barycoord=f}return u}class Mo extends tr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ri(c,3)),this.setAttribute("normal",new ri(u,3)),this.setAttribute("uv",new ri(f,2));function v(x,g,d,S,M,_,C,P,w,N,A){const y=_/w,O=C/N,G=_/2,W=C/2,te=P/2,ie=w+1,$=N+1;let Q=0,j=0;const le=new Y;for(let me=0;me<$;me++){const Me=me*O-W;for(let Fe=0;Fe<ie;Fe++){const Je=Fe*y-G;le[x]=Je*S,le[g]=Me*M,le[d]=te,c.push(le.x,le.y,le.z),le[x]=0,le[g]=0,le[d]=P>0?1:-1,u.push(le.x,le.y,le.z),f.push(Fe/w),f.push(1-me/N),Q+=1}}for(let me=0;me<N;me++)for(let Me=0;Me<w;Me++){const Fe=h+Me+ie*me,Je=h+Me+ie*(me+1),ne=h+(Me+1)+ie*(me+1),fe=h+(Me+1)+ie*me;l.push(Fe,Je,fe),l.push(Je,ne,fe),j+=6}a.addGroup(p,j,A),p+=j,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ps(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Qt(t){const e={};for(let n=0;n<t.length;n++){const i=ps(t[n]);for(const r in i)e[r]=i[r]}return e}function eE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function vm(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const tE={clone:ps,merge:Qt};var nE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends Ga{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nE,this.fragmentShader=iE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=eE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class xm extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=bi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new Y,Id=new nt,Dd=new nt;class An extends xm{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=co*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return co*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,n){return this.getViewBounds(e,Id,Dd),n.subVectors(Dd,Id)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ws*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const zr=-90,Gr=1;class rE extends _n{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new An(zr,Gr,e,n);r.layers=this.layers,this.add(r);const s=new An(zr,Gr,e,n);s.layers=this.layers,this.add(s);const o=new An(zr,Gr,e,n);o.layers=this.layers,this.add(o);const a=new An(zr,Gr,e,n);a.layers=this.layers,this.add(a);const l=new An(zr,Gr,e,n);l.layers=this.layers,this.add(l);const c=new An(zr,Gr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===bi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Sm extends nn{constructor(e=[],n=fs,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sE extends Ar{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Sm(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Mo(5,5,5),s=new Li({name:"CubemapFromEquirect",uniforms:ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:qi});s.uniforms.tEquirect.value=n;const o=new ei(r,s),a=n.minFilter;return n.minFilter===Mr&&(n.minFilter=Qn),new rE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class Zo extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oE={type:"move"};class Pl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const g=n.getJointPose(x,i),d=this._getHandJoint(c,x);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(oE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Zo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class aE extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ll=new Y,lE=new Y,cE=new Ye;class pr{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ll.subVectors(i,n).cross(lE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ll),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||cE.getNormalMatrix(e),r=this.coplanarPoint(Ll).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new Iu,Jo=new Y;class Em{constructor(e=new pr,n=new pr,i=new pr,r=new pr,s=new pr,o=new pr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=bi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],v=r[9],x=r[10],g=r[11],d=r[12],S=r[13],M=r[14],_=r[15];if(i[0].setComponents(l-s,h-c,g-p,_-d).normalize(),i[1].setComponents(l+s,h+c,g+p,_+d).normalize(),i[2].setComponents(l+o,h+u,g+v,_+S).normalize(),i[3].setComponents(l-o,h-u,g-v,_-S).normalize(),i[4].setComponents(l-a,h-f,g-x,_-M).normalize(),n===bi)i[5].setComponents(l+a,h+f,g+x,_+M).normalize();else if(n===wa)i[5].setComponents(a,f,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Jo.x=r.normal.x>0?e.max.x:e.min.x,Jo.y=r.normal.y>0?e.max.y:e.min.y,Jo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Jo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mm extends nn{constructor(e,n,i=Tr,r,s,o,a=Gn,l=Gn,c,u=ao,f=1){if(u!==ao&&u!==lo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:f};super(h,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Du extends tr{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],h=[],p=[];let v=0;const x=[],g=i/2;let d=0;S(),o===!1&&(e>0&&M(!0),n>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new ri(f,3)),this.setAttribute("normal",new ri(h,3)),this.setAttribute("uv",new ri(p,2));function S(){const _=new Y,C=new Y;let P=0;const w=(n-e)/i;for(let N=0;N<=s;N++){const A=[],y=N/s,O=y*(n-e)+e;for(let G=0;G<=r;G++){const W=G/r,te=W*l+a,ie=Math.sin(te),$=Math.cos(te);C.x=O*ie,C.y=-y*i+g,C.z=O*$,f.push(C.x,C.y,C.z),_.set(ie,w,$).normalize(),h.push(_.x,_.y,_.z),p.push(W,1-y),A.push(v++)}x.push(A)}for(let N=0;N<r;N++)for(let A=0;A<s;A++){const y=x[A][N],O=x[A+1][N],G=x[A+1][N+1],W=x[A][N+1];(e>0||A!==0)&&(u.push(y,O,W),P+=3),(n>0||A!==s-1)&&(u.push(O,G,W),P+=3)}c.addGroup(d,P,0),d+=P}function M(_){const C=v,P=new nt,w=new Y;let N=0;const A=_===!0?e:n,y=_===!0?1:-1;for(let G=1;G<=r;G++)f.push(0,g*y,0),h.push(0,y,0),p.push(.5,.5),v++;const O=v;for(let G=0;G<=r;G++){const te=G/r*l+a,ie=Math.cos(te),$=Math.sin(te);w.x=A*$,w.y=g*y,w.z=A*ie,f.push(w.x,w.y,w.z),h.push(0,y,0),P.x=ie*.5+.5,P.y=$*.5*y+.5,p.push(P.x,P.y),v++}for(let G=0;G<r;G++){const W=C+G,te=O+G;_===!0?u.push(te,te+1,W):u.push(te+1,te,W),N+=3}c.addGroup(d,N,_===!0?1:2),d+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Du(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wa extends tr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=n/l,p=[],v=[],x=[],g=[];for(let d=0;d<u;d++){const S=d*h-o;for(let M=0;M<c;M++){const _=M*f-s;v.push(_,-S,0),x.push(0,0,1),g.push(M/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<a;S++){const M=S+c*d,_=S+c*(d+1),C=S+1+c*(d+1),P=S+1+c*d;p.push(M,_,P),p.push(_,C,P)}this.setIndex(p),this.setAttribute("position",new ri(v,3)),this.setAttribute("normal",new ri(x,3)),this.setAttribute("uv",new ri(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.width,e.height,e.widthSegments,e.heightSegments)}}class uE extends Ga{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fE extends Ga{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ud={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class dE{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],v=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}}const hE=new dE;class Uu{constructor(e){this.manager=e!==void 0?e:hE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Uu.DEFAULT_MATERIAL_NAME="__DEFAULT";class pE extends Uu{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ud.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=uo("img");function l(){u(),Ud.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class mE extends Uu{constructor(e){super(e)}load(e,n,i,r){const s=new nn,o=new pE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class gE extends xm{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class _E extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Nd(t,e,n,i){const r=vE(i);switch(n){case sm:return t*e;case am:return t*e/r.components*r.byteLength;case wu:return t*e/r.components*r.byteLength;case lm:return t*e*2/r.components*r.byteLength;case Ru:return t*e*2/r.components*r.byteLength;case om:return t*e*3/r.components*r.byteLength;case kn:return t*e*4/r.components*r.byteLength;case Cu:return t*e*4/r.components*r.byteLength;case ca:case ua:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case fa:case da:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ec:case yc:return Math.max(t,16)*Math.max(e,8)/4;case Sc:case Mc:return Math.max(t,8)*Math.max(e,8)/2;case bc:case Tc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ac:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case wc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Cc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ic:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Uc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Nc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Fc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Bc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case kc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Hc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ha:case Vc:case zc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case cm:case Gc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Wc:case Xc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function vE(t){switch(t){case Ci:case nm:return{byteLength:1,components:1};case so:case im:case xo:return{byteLength:2,components:1};case Tu:case Au:return{byteLength:2,components:4};case Tr:case bu:case yi:return{byteLength:4,components:1};case rm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ym(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function xE(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<f.length;p++){const v=f[h],x=f[p];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++h,f[h]=x)}f.length=h+1;for(let p=0,v=f.length;p<v;p++){const x=f[p];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var SE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,EE=`#ifdef USE_ALPHAHASH
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
#endif`,ME=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AE=`#ifdef USE_AOMAP
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
#endif`,wE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RE=`#ifdef USE_BATCHING
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
#endif`,CE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,IE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,DE=`#ifdef USE_IRIDESCENCE
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
#endif`,UE=`#ifdef USE_BUMPMAP
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
#endif`,NE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,OE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,HE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,VE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,GE=`#define PI 3.141592653589793
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
} // validated`,WE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,XE=`vec3 transformedNormal = objectNormal;
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
#endif`,jE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$E=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KE="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,JE=`#ifdef USE_ENVMAP
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
#endif`,QE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eM=`#ifdef USE_ENVMAP
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
#endif`,tM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nM=`#ifdef USE_ENVMAP
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
#endif`,iM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aM=`#ifdef USE_GRADIENTMAP
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
}`,lM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fM=`uniform bool receiveShadow;
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
#endif`,dM=`#ifdef USE_ENVMAP
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
#endif`,hM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_M=`PhysicalMaterial material;
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
#endif`,vM=`struct PhysicalMaterial {
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
}`,xM=`
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
#endif`,SM=`#if defined( RE_IndirectDiffuse )
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
#endif`,MM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,AM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,CM=`#if defined( USE_POINTS_UV )
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
#endif`,LM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,IM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NM=`#ifdef USE_MORPHTARGETS
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
#endif`,OM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,BM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zM=`#ifdef USE_NORMALMAP
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
#endif`,GM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jM=`#ifdef USE_IRIDESCENCEMAP
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
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$M=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,YM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ey=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ty=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ny=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ry=`float getShadowMask() {
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
}`,sy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oy=`#ifdef USE_SKINNING
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
#endif`,ay=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ly=`#ifdef USE_SKINNING
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
#endif`,cy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hy=`#ifdef USE_TRANSMISSION
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
#endif`,py=`#ifdef USE_TRANSMISSION
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
#endif`,my=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sy=`uniform sampler2D t2D;
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
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,My=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,by=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ty=`#include <common>
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
}`,Ay=`#if DEPTH_PACKING == 3200
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
}`,wy=`#define DISTANCE
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
}`,Ry=`#define DISTANCE
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
}`,Cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Py=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ly=`uniform float scale;
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
}`,Iy=`uniform vec3 diffuse;
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
}`,Dy=`#include <common>
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
}`,Uy=`uniform vec3 diffuse;
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
}`,Ny=`#define LAMBERT
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
}`,Oy=`#define LAMBERT
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
}`,Fy=`#define MATCAP
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
}`,By=`#define MATCAP
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
}`,ky=`#define NORMAL
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
}`,Hy=`#define NORMAL
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
}`,Vy=`#define PHONG
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
}`,zy=`#define PHONG
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
}`,Gy=`#define STANDARD
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
}`,Wy=`#define STANDARD
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
}`,Xy=`#define TOON
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
}`,jy=`#define TOON
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
}`,qy=`uniform float size;
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
}`,$y=`uniform vec3 diffuse;
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
}`,Yy=`#include <common>
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
}`,Ky=`uniform vec3 color;
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
}`,Zy=`uniform float rotation;
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
}`,Jy=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:SE,alphahash_pars_fragment:EE,alphamap_fragment:ME,alphamap_pars_fragment:yE,alphatest_fragment:bE,alphatest_pars_fragment:TE,aomap_fragment:AE,aomap_pars_fragment:wE,batching_pars_vertex:RE,batching_vertex:CE,begin_vertex:PE,beginnormal_vertex:LE,bsdfs:IE,iridescence_fragment:DE,bumpmap_pars_fragment:UE,clipping_planes_fragment:NE,clipping_planes_pars_fragment:OE,clipping_planes_pars_vertex:FE,clipping_planes_vertex:BE,color_fragment:kE,color_pars_fragment:HE,color_pars_vertex:VE,color_vertex:zE,common:GE,cube_uv_reflection_fragment:WE,defaultnormal_vertex:XE,displacementmap_pars_vertex:jE,displacementmap_vertex:qE,emissivemap_fragment:$E,emissivemap_pars_fragment:YE,colorspace_fragment:KE,colorspace_pars_fragment:ZE,envmap_fragment:JE,envmap_common_pars_fragment:QE,envmap_pars_fragment:eM,envmap_pars_vertex:tM,envmap_physical_pars_fragment:dM,envmap_vertex:nM,fog_vertex:iM,fog_pars_vertex:rM,fog_fragment:sM,fog_pars_fragment:oM,gradientmap_pars_fragment:aM,lightmap_pars_fragment:lM,lights_lambert_fragment:cM,lights_lambert_pars_fragment:uM,lights_pars_begin:fM,lights_toon_fragment:hM,lights_toon_pars_fragment:pM,lights_phong_fragment:mM,lights_phong_pars_fragment:gM,lights_physical_fragment:_M,lights_physical_pars_fragment:vM,lights_fragment_begin:xM,lights_fragment_maps:SM,lights_fragment_end:EM,logdepthbuf_fragment:MM,logdepthbuf_pars_fragment:yM,logdepthbuf_pars_vertex:bM,logdepthbuf_vertex:TM,map_fragment:AM,map_pars_fragment:wM,map_particle_fragment:RM,map_particle_pars_fragment:CM,metalnessmap_fragment:PM,metalnessmap_pars_fragment:LM,morphinstance_vertex:IM,morphcolor_vertex:DM,morphnormal_vertex:UM,morphtarget_pars_vertex:NM,morphtarget_vertex:OM,normal_fragment_begin:FM,normal_fragment_maps:BM,normal_pars_fragment:kM,normal_pars_vertex:HM,normal_vertex:VM,normalmap_pars_fragment:zM,clearcoat_normal_fragment_begin:GM,clearcoat_normal_fragment_maps:WM,clearcoat_pars_fragment:XM,iridescence_pars_fragment:jM,opaque_fragment:qM,packing:$M,premultiplied_alpha_fragment:YM,project_vertex:KM,dithering_fragment:ZM,dithering_pars_fragment:JM,roughnessmap_fragment:QM,roughnessmap_pars_fragment:ey,shadowmap_pars_fragment:ty,shadowmap_pars_vertex:ny,shadowmap_vertex:iy,shadowmask_pars_fragment:ry,skinbase_vertex:sy,skinning_pars_vertex:oy,skinning_vertex:ay,skinnormal_vertex:ly,specularmap_fragment:cy,specularmap_pars_fragment:uy,tonemapping_fragment:fy,tonemapping_pars_fragment:dy,transmission_fragment:hy,transmission_pars_fragment:py,uv_pars_fragment:my,uv_pars_vertex:gy,uv_vertex:_y,worldpos_vertex:vy,background_vert:xy,background_frag:Sy,backgroundCube_vert:Ey,backgroundCube_frag:My,cube_vert:yy,cube_frag:by,depth_vert:Ty,depth_frag:Ay,distanceRGBA_vert:wy,distanceRGBA_frag:Ry,equirect_vert:Cy,equirect_frag:Py,linedashed_vert:Ly,linedashed_frag:Iy,meshbasic_vert:Dy,meshbasic_frag:Uy,meshlambert_vert:Ny,meshlambert_frag:Oy,meshmatcap_vert:Fy,meshmatcap_frag:By,meshnormal_vert:ky,meshnormal_frag:Hy,meshphong_vert:Vy,meshphong_frag:zy,meshphysical_vert:Gy,meshphysical_frag:Wy,meshtoon_vert:Xy,meshtoon_frag:jy,points_vert:qy,points_frag:$y,shadow_vert:Yy,shadow_frag:Ky,sprite_vert:Zy,sprite_frag:Jy},ve={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Zn={basic:{uniforms:Qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new mt(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Qt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Qt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new mt(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Qt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Qt([ve.points,ve.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Qt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Qt([ve.common,ve.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Qt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Qt([ve.sprite,ve.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Qt([ve.common,ve.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Qt([ve.lights,ve.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Zn.physical={uniforms:Qt([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Qo={r:0,b:0,g:0},fr=new Pi,Qy=new Nt;function eb(t,e,n,i,r,s,o){const a=new mt(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function v(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?n:e).get(_)),_}function x(M){let _=!1;const C=v(M);C===null?d(a,l):C&&C.isColor&&(d(C,1),_=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(M,_){const C=v(_);C&&(C.isCubeTexture||C.mapping===za)?(u===void 0&&(u=new ei(new Mo(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:ps(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,w,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),fr.copy(_.backgroundRotation),fr.x*=-1,fr.y*=-1,fr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Qy.makeRotationFromEuler(fr)),u.material.toneMapped=st.getTransfer(C.colorSpace)!==gt,(f!==C||h!==C.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=C,h=C.version,p=t.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new ei(new Wa(2,2),new Li({name:"BackgroundMaterial",uniforms:ps(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=st.getTransfer(C.colorSpace)!==gt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||h!==C.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=C,h=C.version,p=t.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function d(M,_){M.getRGB(Qo,vm(t)),i.buffers.color.setClear(Qo.r,Qo.g,Qo.b,_,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,_=1){a.set(M),l=_,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,d(a,l)},render:x,addToRenderList:g,dispose:S}}function tb(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(y,O,G,W,te){let ie=!1;const $=f(W,G,O);s!==$&&(s=$,c(s.object)),ie=p(y,W,G,te),ie&&v(y,W,G,te),te!==null&&e.update(te,t.ELEMENT_ARRAY_BUFFER),(ie||o)&&(o=!1,_(y,O,G,W),te!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function u(y){return t.deleteVertexArray(y)}function f(y,O,G){const W=G.wireframe===!0;let te=i[y.id];te===void 0&&(te={},i[y.id]=te);let ie=te[O.id];ie===void 0&&(ie={},te[O.id]=ie);let $=ie[W];return $===void 0&&($=h(l()),ie[W]=$),$}function h(y){const O=[],G=[],W=[];for(let te=0;te<n;te++)O[te]=0,G[te]=0,W[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:W,object:y,attributes:{},index:null}}function p(y,O,G,W){const te=s.attributes,ie=O.attributes;let $=0;const Q=G.getAttributes();for(const j in Q)if(Q[j].location>=0){const me=te[j];let Me=ie[j];if(Me===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(Me=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(Me=y.instanceColor)),me===void 0||me.attribute!==Me||Me&&me.data!==Me.data)return!0;$++}return s.attributesNum!==$||s.index!==W}function v(y,O,G,W){const te={},ie=O.attributes;let $=0;const Q=G.getAttributes();for(const j in Q)if(Q[j].location>=0){let me=ie[j];me===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(me=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(me=y.instanceColor));const Me={};Me.attribute=me,me&&me.data&&(Me.data=me.data),te[j]=Me,$++}s.attributes=te,s.attributesNum=$,s.index=W}function x(){const y=s.newAttributes;for(let O=0,G=y.length;O<G;O++)y[O]=0}function g(y){d(y,0)}function d(y,O){const G=s.newAttributes,W=s.enabledAttributes,te=s.attributeDivisors;G[y]=1,W[y]===0&&(t.enableVertexAttribArray(y),W[y]=1),te[y]!==O&&(t.vertexAttribDivisor(y,O),te[y]=O)}function S(){const y=s.newAttributes,O=s.enabledAttributes;for(let G=0,W=O.length;G<W;G++)O[G]!==y[G]&&(t.disableVertexAttribArray(G),O[G]=0)}function M(y,O,G,W,te,ie,$){$===!0?t.vertexAttribIPointer(y,O,G,te,ie):t.vertexAttribPointer(y,O,G,W,te,ie)}function _(y,O,G,W){x();const te=W.attributes,ie=G.getAttributes(),$=O.defaultAttributeValues;for(const Q in ie){const j=ie[Q];if(j.location>=0){let le=te[Q];if(le===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(le=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(le=y.instanceColor)),le!==void 0){const me=le.normalized,Me=le.itemSize,Fe=e.get(le);if(Fe===void 0)continue;const Je=Fe.buffer,ne=Fe.type,fe=Fe.bytesPerElement,ye=ne===t.INT||ne===t.UNSIGNED_INT||le.gpuType===bu;if(le.isInterleavedBufferAttribute){const pe=le.data,be=pe.stride,Ke=le.offset;if(pe.isInstancedInterleavedBuffer){for(let Oe=0;Oe<j.locationSize;Oe++)d(j.location+Oe,pe.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Oe=0;Oe<j.locationSize;Oe++)g(j.location+Oe);t.bindBuffer(t.ARRAY_BUFFER,Je);for(let Oe=0;Oe<j.locationSize;Oe++)M(j.location+Oe,Me/j.locationSize,ne,me,be*fe,(Ke+Me/j.locationSize*Oe)*fe,ye)}else{if(le.isInstancedBufferAttribute){for(let pe=0;pe<j.locationSize;pe++)d(j.location+pe,le.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let pe=0;pe<j.locationSize;pe++)g(j.location+pe);t.bindBuffer(t.ARRAY_BUFFER,Je);for(let pe=0;pe<j.locationSize;pe++)M(j.location+pe,Me/j.locationSize,ne,me,Me*fe,Me/j.locationSize*pe*fe,ye)}}else if($!==void 0){const me=$[Q];if(me!==void 0)switch(me.length){case 2:t.vertexAttrib2fv(j.location,me);break;case 3:t.vertexAttrib3fv(j.location,me);break;case 4:t.vertexAttrib4fv(j.location,me);break;default:t.vertexAttrib1fv(j.location,me)}}}}S()}function C(){N();for(const y in i){const O=i[y];for(const G in O){const W=O[G];for(const te in W)u(W[te].object),delete W[te];delete O[G]}delete i[y]}}function P(y){if(i[y.id]===void 0)return;const O=i[y.id];for(const G in O){const W=O[G];for(const te in W)u(W[te].object),delete W[te];delete O[G]}delete i[y.id]}function w(y){for(const O in i){const G=i[O];if(G[y.id]===void 0)continue;const W=G[y.id];for(const te in W)u(W[te].object),delete W[te];delete G[y.id]}}function N(){A(),o=!0,s!==r&&(s=r,c(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:A,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:g,disableUnusedAttributes:S}}function nb(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let v=0;v<f;v++)p+=u[v];n.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],u[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let v=0;for(let x=0;x<f;x++)v+=u[x]*h[x];n.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ib(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==kn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const N=w===xo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Ci&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==yi&&!N)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),S=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=v>0,P=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:C,maxSamples:P}}function rb(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new pr,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){const v=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,d=t.get(f);if(!r||v===null||v.length===0||s&&!g)s?u(null):c();else{const S=s?0:i,M=S*4;let _=d.clippingState||null;l.value=_,_=u(v,h,M,p);for(let C=0;C!==M;++C)_[C]=n[C];d.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,v){const x=f!==null?f.length:0;let g=null;if(x!==0){if(g=l.value,v!==!0||g===null){const d=p+x*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<d)&&(g=new Float32Array(d));for(let M=0,_=p;M!==x;++M,_+=4)o.copy(f[M]).applyMatrix4(S,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function sb(t){let e=new WeakMap;function n(o,a){return a===_c?o.mapping=fs:a===vc&&(o.mapping=ds),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===_c||a===vc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new sE(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Kr=4,Od=[.125,.215,.35,.446,.526,.582],xr=20,Il=new gE,Fd=new mt;let Dl=null,Ul=0,Nl=0,Ol=!1;const mr=(1+Math.sqrt(5))/2,Wr=1/mr,Bd=[new Y(-mr,Wr,0),new Y(mr,Wr,0),new Y(-Wr,0,mr),new Y(Wr,0,mr),new Y(0,mr,-Wr),new Y(0,mr,Wr),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)],ob=new Y;class kd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=ob}=s;Dl=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel(),Ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dl,Ul,Nl),this._renderer.xr.enabled=Ol,e.scissorTest=!1,ea(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===fs||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dl=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel(),Ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:xo,format:kn,colorSpace:hs,depthBuffer:!1},r=Hd(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hd(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ab(s)),this._blurMaterial=lb(s,e,n)}return r}_compileMaterial(e){const n=new ei(this._lodPlanes[0],e);this._renderer.compile(n,Il)}_sceneToCubeUV(e,n,i,r,s){const l=new An(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Fd),f.toneMapping=$i,f.autoClear=!1;const v=new mm({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),x=new ei(new Mo,v);let g=!1;const d=e.background;d?d.isColor&&(v.color.copy(d),e.background=null,g=!0):(v.color.copy(Fd),g=!0);for(let S=0;S<6;S++){const M=S%3;M===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):M===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));const _=this._cubeSize;ea(r,M*_,S>2?_:0,_,_),f.setRenderTarget(r),g&&f.render(x,l),f.render(e,l)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=d}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===fs||e.mapping===ds;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ei(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ea(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Il)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Bd[(r-s-1)%Bd.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ei(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*xr-1),x=s/v,g=isFinite(s)?1+Math.floor(u*x):xr;g>xr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${xr}`);const d=[];let S=0;for(let w=0;w<xr;++w){const N=w/x,A=Math.exp(-N*N/2);d.push(A),w===0?S+=A:w<g&&(S+=2*A)}for(let w=0;w<d.length;w++)d[w]=d[w]/S;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=v,h.mipInt.value=M-i;const _=this._sizeLods[r],C=3*_*(r>M-Kr?r-M+Kr:0),P=4*(this._cubeSize-_);ea(n,C,P,3*_,2*_),l.setRenderTarget(n),l.render(f,Il)}}function ab(t){const e=[],n=[],i=[];let r=t;const s=t-Kr+1+Od.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Kr?l=Od[o-t+Kr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,v=6,x=3,g=2,d=1,S=new Float32Array(x*v*p),M=new Float32Array(g*v*p),_=new Float32Array(d*v*p);for(let P=0;P<p;P++){const w=P%3*2/3-1,N=P>2?0:-1,A=[w,N,0,w+2/3,N,0,w+2/3,N+1,0,w,N,0,w+2/3,N+1,0,w,N+1,0];S.set(A,x*v*P),M.set(h,g*v*P);const y=[P,P,P,P,P,P];_.set(y,d*v*P)}const C=new tr;C.setAttribute("position",new ii(S,x)),C.setAttribute("uv",new ii(M,g)),C.setAttribute("faceIndex",new ii(_,d)),e.push(C),r>Kr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Hd(t,e,n){const i=new Ar(t,e,n);return i.texture.mapping=za,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ea(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function lb(t,e,n){const i=new Float32Array(xr),r=new Y(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Nu(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Vd(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nu(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function zd(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Nu(){return`

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
	`}function cb(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===_c||l===vc,u=l===fs||l===ds;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new kd(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new kd(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function ub(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&rs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function fb(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,v=f.attributes.position;let x=0;if(p!==null){const S=p.array;x=p.version;for(let M=0,_=S.length;M<_;M+=3){const C=S[M+0],P=S[M+1],w=S[M+2];h.push(C,P,P,w,w,C)}}else if(v!==void 0){const S=v.array;x=v.version;for(let M=0,_=S.length/3-1;M<_;M+=3){const C=M+0,P=M+1,w=M+2;h.push(C,P,P,w,w,C)}}else return;const g=new(fm(h)?_m:gm)(h,1);g.version=x;const d=s.get(f);d&&e.remove(d),s.set(f,g)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function db(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,h*o,v),n.update(p,i,v))}function u(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,v);let g=0;for(let d=0;d<v;d++)g+=p[d];n.update(g,i,1)}function f(h,p,v,x){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],x[d]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,x,0,v);let d=0;for(let S=0;S<v;S++)d+=p[S]*x[S];n.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function hb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function pb(t,e,n){const i=new WeakMap,r=new It;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let y=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;h!==void 0&&h.texture.dispose();const v=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let _=0;v===!0&&(_=1),x===!0&&(_=2),g===!0&&(_=3);let C=a.attributes.position.count*_,P=1;C>e.maxTextureSize&&(P=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const w=new Float32Array(C*P*4*f),N=new dm(w,C,P,f);N.type=yi,N.needsUpdate=!0;const A=_*4;for(let O=0;O<f;O++){const G=d[O],W=S[O],te=M[O],ie=C*P*4*O;for(let $=0;$<G.count;$++){const Q=$*A;v===!0&&(r.fromBufferAttribute(G,$),w[ie+Q+0]=r.x,w[ie+Q+1]=r.y,w[ie+Q+2]=r.z,w[ie+Q+3]=0),x===!0&&(r.fromBufferAttribute(W,$),w[ie+Q+4]=r.x,w[ie+Q+5]=r.y,w[ie+Q+6]=r.z,w[ie+Q+7]=0),g===!0&&(r.fromBufferAttribute(te,$),w[ie+Q+8]=r.x,w[ie+Q+9]=r.y,w[ie+Q+10]=r.z,w[ie+Q+11]=te.itemSize===4?r.w:1)}}h={count:f,texture:N,size:new nt(C,P)},i.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const x=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function mb(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const bm=new nn,Gd=new Mm(1,1),Tm=new dm,Am=new VS,wm=new Sm,Wd=[],Xd=[],jd=new Float32Array(16),qd=new Float32Array(9),$d=new Float32Array(4);function Ms(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Wd[r];if(s===void 0&&(s=new Float32Array(r),Wd[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Xa(t,e){let n=Xd[e];n===void 0&&(n=new Int32Array(e),Xd[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function gb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function _b(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),Bt(n,e)}}function vb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),Bt(n,e)}}function xb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),Bt(n,e)}}function Sb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Bt(n,e)}else{if(Ft(n,i))return;$d.set(i),t.uniformMatrix2fv(this.addr,!1,$d),Bt(n,i)}}function Eb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Bt(n,e)}else{if(Ft(n,i))return;qd.set(i),t.uniformMatrix3fv(this.addr,!1,qd),Bt(n,i)}}function Mb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Bt(n,e)}else{if(Ft(n,i))return;jd.set(i),t.uniformMatrix4fv(this.addr,!1,jd),Bt(n,i)}}function yb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function bb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),Bt(n,e)}}function Tb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),Bt(n,e)}}function Ab(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),Bt(n,e)}}function wb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Rb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),Bt(n,e)}}function Cb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),Bt(n,e)}}function Pb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),Bt(n,e)}}function Lb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Gd.compareFunction=um,s=Gd):s=bm,n.setTexture2D(e||s,r)}function Ib(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Am,r)}function Db(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||wm,r)}function Ub(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Tm,r)}function Nb(t){switch(t){case 5126:return gb;case 35664:return _b;case 35665:return vb;case 35666:return xb;case 35674:return Sb;case 35675:return Eb;case 35676:return Mb;case 5124:case 35670:return yb;case 35667:case 35671:return bb;case 35668:case 35672:return Tb;case 35669:case 35673:return Ab;case 5125:return wb;case 36294:return Rb;case 36295:return Cb;case 36296:return Pb;case 35678:case 36198:case 36298:case 36306:case 35682:return Lb;case 35679:case 36299:case 36307:return Ib;case 35680:case 36300:case 36308:case 36293:return Db;case 36289:case 36303:case 36311:case 36292:return Ub}}function Ob(t,e){t.uniform1fv(this.addr,e)}function Fb(t,e){const n=Ms(e,this.size,2);t.uniform2fv(this.addr,n)}function Bb(t,e){const n=Ms(e,this.size,3);t.uniform3fv(this.addr,n)}function kb(t,e){const n=Ms(e,this.size,4);t.uniform4fv(this.addr,n)}function Hb(t,e){const n=Ms(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Vb(t,e){const n=Ms(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function zb(t,e){const n=Ms(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Gb(t,e){t.uniform1iv(this.addr,e)}function Wb(t,e){t.uniform2iv(this.addr,e)}function Xb(t,e){t.uniform3iv(this.addr,e)}function jb(t,e){t.uniform4iv(this.addr,e)}function qb(t,e){t.uniform1uiv(this.addr,e)}function $b(t,e){t.uniform2uiv(this.addr,e)}function Yb(t,e){t.uniform3uiv(this.addr,e)}function Kb(t,e){t.uniform4uiv(this.addr,e)}function Zb(t,e,n){const i=this.cache,r=e.length,s=Xa(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||bm,s[o])}function Jb(t,e,n){const i=this.cache,r=e.length,s=Xa(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Am,s[o])}function Qb(t,e,n){const i=this.cache,r=e.length,s=Xa(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||wm,s[o])}function eT(t,e,n){const i=this.cache,r=e.length,s=Xa(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Tm,s[o])}function tT(t){switch(t){case 5126:return Ob;case 35664:return Fb;case 35665:return Bb;case 35666:return kb;case 35674:return Hb;case 35675:return Vb;case 35676:return zb;case 5124:case 35670:return Gb;case 35667:case 35671:return Wb;case 35668:case 35672:return Xb;case 35669:case 35673:return jb;case 5125:return qb;case 36294:return $b;case 36295:return Yb;case 36296:return Kb;case 35678:case 36198:case 36298:case 36306:case 35682:return Zb;case 35679:case 36299:case 36307:return Jb;case 35680:case 36300:case 36308:case 36293:return Qb;case 36289:case 36303:case 36311:case 36292:return eT}}class nT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Nb(n.type)}}class iT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=tT(n.type)}}class rT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Fl=/(\w+)(\])?(\[|\.)?/g;function Yd(t,e){t.seq.push(e),t.map[e.id]=e}function sT(t,e,n){const i=t.name,r=i.length;for(Fl.lastIndex=0;;){const s=Fl.exec(i),o=Fl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Yd(n,c===void 0?new nT(a,t,e):new iT(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new rT(a),Yd(n,f)),n=f}}}class pa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);sT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Kd(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const oT=37297;let aT=0;function lT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Zd=new Ye;function cT(t){st._getMatrix(Zd,st.workingColorSpace,t);const e=`mat3( ${Zd.elements.map(n=>n.toFixed(4))} )`;switch(st.getTransfer(t)){case Aa:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Jd(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+lT(t.getShaderSource(e),o)}else return r}function uT(t,e){const n=cT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function fT(t,e){let n;switch(e){case Kx:n="Linear";break;case Zx:n="Reinhard";break;case Jx:n="Cineon";break;case Qx:n="ACESFilmic";break;case tS:n="AgX";break;case nS:n="Neutral";break;case eS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ta=new Y;function dT(){st.getLuminanceCoefficients(ta);const t=ta.x.toFixed(4),e=ta.y.toFixed(4),n=ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function pT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function mT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ns(t){return t!==""}function Qd(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function eh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gT=/^[ \t]*#include +<([\w\d./]+)>/gm;function jc(t){return t.replace(gT,vT)}const _T=new Map;function vT(t,e){let n=Ze[e];if(n===void 0){const i=_T.get(e);if(i!==void 0)n=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return jc(n)}const xT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function th(t){return t.replace(xT,ST)}function ST(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function nh(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ET(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Qp?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Cx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===_i&&(e="SHADOWMAP_TYPE_VSM"),e}function MT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case fs:case ds:e="ENVMAP_TYPE_CUBE";break;case za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ds:e="ENVMAP_MODE_REFRACTION";break}return e}function bT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case em:e="ENVMAP_BLENDING_MULTIPLY";break;case $x:e="ENVMAP_BLENDING_MIX";break;case Yx:e="ENVMAP_BLENDING_ADD";break}return e}function TT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function AT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=ET(n),c=MT(n),u=yT(n),f=bT(n),h=TT(n),p=hT(n),v=pT(s),x=r.createProgram();let g,d,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ns).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ns).join(`
`),d.length>0&&(d+=`
`)):(g=[nh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),d=[nh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==$i?"#define TONE_MAPPING":"",n.toneMapping!==$i?Ze.tonemapping_pars_fragment:"",n.toneMapping!==$i?fT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,uT("linearToOutputTexel",n.outputColorSpace),dT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ns).join(`
`)),o=jc(o),o=Qd(o,n),o=eh(o,n),a=jc(a),a=Qd(a,n),a=eh(a,n),o=th(o),a=th(a),n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",n.glslVersion===md?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===md?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=S+g+o,_=S+d+a,C=Kd(r,r.VERTEX_SHADER,M),P=Kd(r,r.FRAGMENT_SHADER,_);r.attachShader(x,C),r.attachShader(x,P),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function w(O){if(t.debug.checkShaderErrors){const G=r.getProgramInfoLog(x).trim(),W=r.getShaderInfoLog(C).trim(),te=r.getShaderInfoLog(P).trim();let ie=!0,$=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(ie=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,C,P);else{const Q=Jd(r,C,"vertex"),j=Jd(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+G+`
`+Q+`
`+j)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(W===""||te==="")&&($=!1);$&&(O.diagnostics={runnable:ie,programLog:G,vertexShader:{log:W,prefix:g},fragmentShader:{log:te,prefix:d}})}r.deleteShader(C),r.deleteShader(P),N=new pa(r,x),A=mT(r,x)}let N;this.getUniforms=function(){return N===void 0&&w(this),N};let A;this.getAttributes=function(){return A===void 0&&w(this),A};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,oT)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=aT++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=P,this}let wT=0;class RT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new CT(e),n.set(e,i)),i}}class CT{constructor(e){this.id=wT++,this.code=e,this.usedTimes=0}}function PT(t,e,n,i,r,s,o){const a=new hm,l=new RT,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(A){return c.add(A),A===0?"uv":`uv${A}`}function g(A,y,O,G,W){const te=G.fog,ie=W.geometry,$=A.isMeshStandardMaterial?G.environment:null,Q=(A.isMeshStandardMaterial?n:e).get(A.envMap||$),j=Q&&Q.mapping===za?Q.image.height:null,le=v[A.type];A.precision!==null&&(p=r.getMaxPrecision(A.precision),p!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",p,"instead."));const me=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Me=me!==void 0?me.length:0;let Fe=0;ie.morphAttributes.position!==void 0&&(Fe=1),ie.morphAttributes.normal!==void 0&&(Fe=2),ie.morphAttributes.color!==void 0&&(Fe=3);let Je,ne,fe,ye;if(le){const ht=Zn[le];Je=ht.vertexShader,ne=ht.fragmentShader}else Je=A.vertexShader,ne=A.fragmentShader,l.update(A),fe=l.getVertexShaderID(A),ye=l.getFragmentShaderID(A);const pe=t.getRenderTarget(),be=t.state.buffers.depth.getReversed(),Ke=W.isInstancedMesh===!0,Oe=W.isBatchedMesh===!0,it=!!A.map,D=!!A.matcap,F=!!Q,b=!!A.aoMap,re=!!A.lightMap,Z=!!A.bumpMap,ee=!!A.normalMap,T=!!A.displacementMap,L=!!A.emissiveMap,U=!!A.metalnessMap,B=!!A.roughnessMap,ae=A.anisotropy>0,E=A.clearcoat>0,m=A.dispersion>0,I=A.iridescence>0,H=A.sheen>0,q=A.transmission>0,X=ae&&!!A.anisotropyMap,_e=E&&!!A.clearcoatMap,ce=E&&!!A.clearcoatNormalMap,xe=E&&!!A.clearcoatRoughnessMap,Ae=I&&!!A.iridescenceMap,oe=I&&!!A.iridescenceThicknessMap,we=H&&!!A.sheenColorMap,Ie=H&&!!A.sheenRoughnessMap,De=!!A.specularMap,ge=!!A.specularColorMap,ze=!!A.specularIntensityMap,k=q&&!!A.transmissionMap,Se=q&&!!A.thicknessMap,ue=!!A.gradientMap,Le=!!A.alphaMap,de=A.alphaTest>0,se=!!A.alphaHash,Ue=!!A.extensions;let je=$i;A.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(je=t.toneMapping);const Mt={shaderID:le,shaderType:A.type,shaderName:A.name,vertexShader:Je,fragmentShader:ne,defines:A.defines,customVertexShaderID:fe,customFragmentShaderID:ye,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:p,batching:Oe,batchingColor:Oe&&W._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&W.instanceColor!==null,instancingMorph:Ke&&W.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:pe===null?t.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:hs,alphaToCoverage:!!A.alphaToCoverage,map:it,matcap:D,envMap:F,envMapMode:F&&Q.mapping,envMapCubeUVHeight:j,aoMap:b,lightMap:re,bumpMap:Z,normalMap:ee,displacementMap:h&&T,emissiveMap:L,normalMapObjectSpace:ee&&A.normalMapType===aS,normalMapTangentSpace:ee&&A.normalMapType===oS,metalnessMap:U,roughnessMap:B,anisotropy:ae,anisotropyMap:X,clearcoat:E,clearcoatMap:_e,clearcoatNormalMap:ce,clearcoatRoughnessMap:xe,dispersion:m,iridescence:I,iridescenceMap:Ae,iridescenceThicknessMap:oe,sheen:H,sheenColorMap:we,sheenRoughnessMap:Ie,specularMap:De,specularColorMap:ge,specularIntensityMap:ze,transmission:q,transmissionMap:k,thicknessMap:Se,gradientMap:ue,opaque:A.transparent===!1&&A.blending===is&&A.alphaToCoverage===!1,alphaMap:Le,alphaTest:de,alphaHash:se,combine:A.combine,mapUv:it&&x(A.map.channel),aoMapUv:b&&x(A.aoMap.channel),lightMapUv:re&&x(A.lightMap.channel),bumpMapUv:Z&&x(A.bumpMap.channel),normalMapUv:ee&&x(A.normalMap.channel),displacementMapUv:T&&x(A.displacementMap.channel),emissiveMapUv:L&&x(A.emissiveMap.channel),metalnessMapUv:U&&x(A.metalnessMap.channel),roughnessMapUv:B&&x(A.roughnessMap.channel),anisotropyMapUv:X&&x(A.anisotropyMap.channel),clearcoatMapUv:_e&&x(A.clearcoatMap.channel),clearcoatNormalMapUv:ce&&x(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&x(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&x(A.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&x(A.iridescenceThicknessMap.channel),sheenColorMapUv:we&&x(A.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&x(A.sheenRoughnessMap.channel),specularMapUv:De&&x(A.specularMap.channel),specularColorMapUv:ge&&x(A.specularColorMap.channel),specularIntensityMapUv:ze&&x(A.specularIntensityMap.channel),transmissionMapUv:k&&x(A.transmissionMap.channel),thicknessMapUv:Se&&x(A.thicknessMap.channel),alphaMapUv:Le&&x(A.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(ee||ae),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!ie.attributes.uv&&(it||Le),fog:!!te,useFog:A.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:be,skinning:W.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Fe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:t.shadowMap.enabled&&O.length>0,shadowMapType:t.shadowMap.type,toneMapping:je,decodeVideoTexture:it&&A.map.isVideoTexture===!0&&st.getTransfer(A.map.colorSpace)===gt,decodeVideoTextureEmissive:L&&A.emissiveMap.isVideoTexture===!0&&st.getTransfer(A.emissiveMap.colorSpace)===gt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Jn,flipSided:A.side===an,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ue&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&A.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function d(A){const y=[];if(A.shaderID?y.push(A.shaderID):(y.push(A.customVertexShaderID),y.push(A.customFragmentShaderID)),A.defines!==void 0)for(const O in A.defines)y.push(O),y.push(A.defines[O]);return A.isRawShaderMaterial===!1&&(S(y,A),M(y,A),y.push(t.outputColorSpace)),y.push(A.customProgramCacheKey),y.join()}function S(A,y){A.push(y.precision),A.push(y.outputColorSpace),A.push(y.envMapMode),A.push(y.envMapCubeUVHeight),A.push(y.mapUv),A.push(y.alphaMapUv),A.push(y.lightMapUv),A.push(y.aoMapUv),A.push(y.bumpMapUv),A.push(y.normalMapUv),A.push(y.displacementMapUv),A.push(y.emissiveMapUv),A.push(y.metalnessMapUv),A.push(y.roughnessMapUv),A.push(y.anisotropyMapUv),A.push(y.clearcoatMapUv),A.push(y.clearcoatNormalMapUv),A.push(y.clearcoatRoughnessMapUv),A.push(y.iridescenceMapUv),A.push(y.iridescenceThicknessMapUv),A.push(y.sheenColorMapUv),A.push(y.sheenRoughnessMapUv),A.push(y.specularMapUv),A.push(y.specularColorMapUv),A.push(y.specularIntensityMapUv),A.push(y.transmissionMapUv),A.push(y.thicknessMapUv),A.push(y.combine),A.push(y.fogExp2),A.push(y.sizeAttenuation),A.push(y.morphTargetsCount),A.push(y.morphAttributeCount),A.push(y.numDirLights),A.push(y.numPointLights),A.push(y.numSpotLights),A.push(y.numSpotLightMaps),A.push(y.numHemiLights),A.push(y.numRectAreaLights),A.push(y.numDirLightShadows),A.push(y.numPointLightShadows),A.push(y.numSpotLightShadows),A.push(y.numSpotLightShadowsWithMaps),A.push(y.numLightProbes),A.push(y.shadowMapType),A.push(y.toneMapping),A.push(y.numClippingPlanes),A.push(y.numClipIntersection),A.push(y.depthPacking)}function M(A,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),A.push(a.mask)}function _(A){const y=v[A.type];let O;if(y){const G=Zn[y];O=tE.clone(G.uniforms)}else O=A.uniforms;return O}function C(A,y){let O;for(let G=0,W=u.length;G<W;G++){const te=u[G];if(te.cacheKey===y){O=te,++O.usedTimes;break}}return O===void 0&&(O=new AT(t,y,A,s),u.push(O)),O}function P(A){if(--A.usedTimes===0){const y=u.indexOf(A);u[y]=u[u.length-1],u.pop(),A.destroy()}}function w(A){l.remove(A)}function N(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:_,acquireProgram:C,releaseProgram:P,releaseShaderCache:w,programs:u,dispose:N}}function LT(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function IT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function ih(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function rh(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,v,x,g){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:v,renderOrder:f.renderOrder,z:x,group:g},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=v,d.renderOrder=f.renderOrder,d.z=x,d.group=g),e++,d}function a(f,h,p,v,x,g){const d=o(f,h,p,v,x,g);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(f,h,p,v,x,g){const d=o(f,h,p,v,x,g);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(f,h){n.length>1&&n.sort(f||IT),i.length>1&&i.sort(h||ih),r.length>1&&r.sort(h||ih)}function u(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function DT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new rh,t.set(i,[o])):r>=s.length?(o=new rh,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function UT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new mt};break;case"SpotLight":n={position:new Y,direction:new Y,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new mt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":n={color:new mt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return t[e.id]=n,n}}}function NT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let OT=0;function FT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function BT(t){const e=new UT,n=NT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);const r=new Y,s=new Nt,o=new Nt;function a(c){let u=0,f=0,h=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,v=0,x=0,g=0,d=0,S=0,M=0,_=0,C=0,P=0,w=0;c.sort(FT);for(let A=0,y=c.length;A<y;A++){const O=c[A],G=O.color,W=O.intensity,te=O.distance,ie=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)u+=G.r*W,f+=G.g*W,h+=G.b*W;else if(O.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(O.sh.coefficients[$],W);w++}else if(O.isDirectionalLight){const $=e.get(O);if($.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const Q=O.shadow,j=n.get(O);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,i.directionalShadow[p]=j,i.directionalShadowMap[p]=ie,i.directionalShadowMatrix[p]=O.shadow.matrix,S++}i.directional[p]=$,p++}else if(O.isSpotLight){const $=e.get(O);$.position.setFromMatrixPosition(O.matrixWorld),$.color.copy(G).multiplyScalar(W),$.distance=te,$.coneCos=Math.cos(O.angle),$.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),$.decay=O.decay,i.spot[x]=$;const Q=O.shadow;if(O.map&&(i.spotLightMap[C]=O.map,C++,Q.updateMatrices(O),O.castShadow&&P++),i.spotLightMatrix[x]=Q.matrix,O.castShadow){const j=n.get(O);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,i.spotShadow[x]=j,i.spotShadowMap[x]=ie,_++}x++}else if(O.isRectAreaLight){const $=e.get(O);$.color.copy(G).multiplyScalar(W),$.halfWidth.set(O.width*.5,0,0),$.halfHeight.set(0,O.height*.5,0),i.rectArea[g]=$,g++}else if(O.isPointLight){const $=e.get(O);if($.color.copy(O.color).multiplyScalar(O.intensity),$.distance=O.distance,$.decay=O.decay,O.castShadow){const Q=O.shadow,j=n.get(O);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,j.shadowCameraNear=Q.camera.near,j.shadowCameraFar=Q.camera.far,i.pointShadow[v]=j,i.pointShadowMap[v]=ie,i.pointShadowMatrix[v]=O.shadow.matrix,M++}i.point[v]=$,v++}else if(O.isHemisphereLight){const $=e.get(O);$.skyColor.copy(O.color).multiplyScalar(W),$.groundColor.copy(O.groundColor).multiplyScalar(W),i.hemi[d]=$,d++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const N=i.hash;(N.directionalLength!==p||N.pointLength!==v||N.spotLength!==x||N.rectAreaLength!==g||N.hemiLength!==d||N.numDirectionalShadows!==S||N.numPointShadows!==M||N.numSpotShadows!==_||N.numSpotMaps!==C||N.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=g,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=_+C-P,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=w,N.directionalLength=p,N.pointLength=v,N.spotLength=x,N.rectAreaLength=g,N.hemiLength=d,N.numDirectionalShadows=S,N.numPointShadows=M,N.numSpotShadows=_,N.numSpotMaps=C,N.numLightProbes=w,i.version=OT++)}function l(c,u){let f=0,h=0,p=0,v=0,x=0;const g=u.matrixWorldInverse;for(let d=0,S=c.length;d<S;d++){const M=c[d];if(M.isDirectionalLight){const _=i.directional[f];_.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),f++}else if(M.isSpotLight){const _=i.spot[p];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),p++}else if(M.isRectAreaLight){const _=i.rectArea[v];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),o.identity(),s.copy(M.matrixWorld),s.premultiply(g),o.extractRotation(s),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),v++}else if(M.isPointLight){const _=i.point[h];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),h++}else if(M.isHemisphereLight){const _=i.hemi[x];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function sh(t){const e=new BT(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function kT(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new sh(t),e.set(r,[a])):s>=o.length?(a=new sh(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const HT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VT=`uniform sampler2D shadow_pass;
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
}`;function zT(t,e,n){let i=new Em;const r=new nt,s=new nt,o=new It,a=new uE({depthPacking:sS}),l=new fE,c={},u=n.maxTextureSize,f={[Ki]:an,[an]:Ki,[Jn]:Jn},h=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:HT,fragmentShader:VT}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new tr;v.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ei(v,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qp;let d=this.type;this.render=function(P,w,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;const A=t.getRenderTarget(),y=t.getActiveCubeFace(),O=t.getActiveMipmapLevel(),G=t.state;G.setBlending(qi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const W=d!==_i&&this.type===_i,te=d===_i&&this.type!==_i;for(let ie=0,$=P.length;ie<$;ie++){const Q=P[ie],j=Q.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const le=j.getFrameExtents();if(r.multiply(le),s.copy(j.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/le.x),r.x=s.x*le.x,j.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/le.y),r.y=s.y*le.y,j.mapSize.y=s.y)),j.map===null||W===!0||te===!0){const Me=this.type!==_i?{minFilter:Gn,magFilter:Gn}:{};j.map!==null&&j.map.dispose(),j.map=new Ar(r.x,r.y,Me),j.map.texture.name=Q.name+".shadowMap",j.camera.updateProjectionMatrix()}t.setRenderTarget(j.map),t.clear();const me=j.getViewportCount();for(let Me=0;Me<me;Me++){const Fe=j.getViewport(Me);o.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),G.viewport(o),j.updateMatrices(Q,Me),i=j.getFrustum(),_(w,N,j.camera,Q,this.type)}j.isPointLightShadow!==!0&&this.type===_i&&S(j,N),j.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(A,y,O)};function S(P,w){const N=e.update(x);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ar(r.x,r.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(w,null,N,h,x,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(w,null,N,p,x,null)}function M(P,w,N,A){let y=null;const O=N.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(O!==void 0)y=O;else if(y=N.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const G=y.uuid,W=w.uuid;let te=c[G];te===void 0&&(te={},c[G]=te);let ie=te[W];ie===void 0&&(ie=y.clone(),te[W]=ie,w.addEventListener("dispose",C)),y=ie}if(y.visible=w.visible,y.wireframe=w.wireframe,A===_i?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:f[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,N.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const G=t.properties.get(y);G.light=N}return y}function _(P,w,N,A,y){if(P.visible===!1)return;if(P.layers.test(w.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===_i)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,P.matrixWorld);const W=e.update(P),te=P.material;if(Array.isArray(te)){const ie=W.groups;for(let $=0,Q=ie.length;$<Q;$++){const j=ie[$],le=te[j.materialIndex];if(le&&le.visible){const me=M(P,le,A,y);P.onBeforeShadow(t,P,w,N,W,me,j),t.renderBufferDirect(N,null,W,me,P,j),P.onAfterShadow(t,P,w,N,W,me,j)}}}else if(te.visible){const ie=M(P,te,A,y);P.onBeforeShadow(t,P,w,N,W,ie,null),t.renderBufferDirect(N,null,W,ie,P,null),P.onAfterShadow(t,P,w,N,W,ie,null)}}const G=P.children;for(let W=0,te=G.length;W<te;W++)_(G[W],w,N,A,y)}function C(P){P.target.removeEventListener("dispose",C);for(const N in c){const A=c[N],y=P.target.uuid;y in A&&(A[y].dispose(),delete A[y])}}}const GT={[uc]:fc,[dc]:mc,[hc]:gc,[us]:pc,[fc]:uc,[mc]:dc,[gc]:hc,[pc]:us};function WT(t,e){function n(){let k=!1;const Se=new It;let ue=null;const Le=new It(0,0,0,0);return{setMask:function(de){ue!==de&&!k&&(t.colorMask(de,de,de,de),ue=de)},setLocked:function(de){k=de},setClear:function(de,se,Ue,je,Mt){Mt===!0&&(de*=je,se*=je,Ue*=je),Se.set(de,se,Ue,je),Le.equals(Se)===!1&&(t.clearColor(de,se,Ue,je),Le.copy(Se))},reset:function(){k=!1,ue=null,Le.set(-1,0,0,0)}}}function i(){let k=!1,Se=!1,ue=null,Le=null,de=null;return{setReversed:function(se){if(Se!==se){const Ue=e.get("EXT_clip_control");se?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),Se=se;const je=de;de=null,this.setClear(je)}},getReversed:function(){return Se},setTest:function(se){se?pe(t.DEPTH_TEST):be(t.DEPTH_TEST)},setMask:function(se){ue!==se&&!k&&(t.depthMask(se),ue=se)},setFunc:function(se){if(Se&&(se=GT[se]),Le!==se){switch(se){case uc:t.depthFunc(t.NEVER);break;case fc:t.depthFunc(t.ALWAYS);break;case dc:t.depthFunc(t.LESS);break;case us:t.depthFunc(t.LEQUAL);break;case hc:t.depthFunc(t.EQUAL);break;case pc:t.depthFunc(t.GEQUAL);break;case mc:t.depthFunc(t.GREATER);break;case gc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Le=se}},setLocked:function(se){k=se},setClear:function(se){de!==se&&(Se&&(se=1-se),t.clearDepth(se),de=se)},reset:function(){k=!1,ue=null,Le=null,de=null,Se=!1}}}function r(){let k=!1,Se=null,ue=null,Le=null,de=null,se=null,Ue=null,je=null,Mt=null;return{setTest:function(ht){k||(ht?pe(t.STENCIL_TEST):be(t.STENCIL_TEST))},setMask:function(ht){Se!==ht&&!k&&(t.stencilMask(ht),Se=ht)},setFunc:function(ht,In,ci){(ue!==ht||Le!==In||de!==ci)&&(t.stencilFunc(ht,In,ci),ue=ht,Le=In,de=ci)},setOp:function(ht,In,ci){(se!==ht||Ue!==In||je!==ci)&&(t.stencilOp(ht,In,ci),se=ht,Ue=In,je=ci)},setLocked:function(ht){k=ht},setClear:function(ht){Mt!==ht&&(t.clearStencil(ht),Mt=ht)},reset:function(){k=!1,Se=null,ue=null,Le=null,de=null,se=null,Ue=null,je=null,Mt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],v=null,x=!1,g=null,d=null,S=null,M=null,_=null,C=null,P=null,w=new mt(0,0,0),N=0,A=!1,y=null,O=null,G=null,W=null,te=null;const ie=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,Q=0;const j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(j)[1]),$=Q>=1):j.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),$=Q>=2);let le=null,me={};const Me=t.getParameter(t.SCISSOR_BOX),Fe=t.getParameter(t.VIEWPORT),Je=new It().fromArray(Me),ne=new It().fromArray(Fe);function fe(k,Se,ue,Le){const de=new Uint8Array(4),se=t.createTexture();t.bindTexture(k,se),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ue=0;Ue<ue;Ue++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(Se,0,t.RGBA,1,1,Le,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(Se+Ue,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return se}const ye={};ye[t.TEXTURE_2D]=fe(t.TEXTURE_2D,t.TEXTURE_2D,1),ye[t.TEXTURE_CUBE_MAP]=fe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[t.TEXTURE_2D_ARRAY]=fe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ye[t.TEXTURE_3D]=fe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(t.DEPTH_TEST),o.setFunc(us),Z(!1),ee(cd),pe(t.CULL_FACE),b(qi);function pe(k){u[k]!==!0&&(t.enable(k),u[k]=!0)}function be(k){u[k]!==!1&&(t.disable(k),u[k]=!1)}function Ke(k,Se){return f[k]!==Se?(t.bindFramebuffer(k,Se),f[k]=Se,k===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=Se),k===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=Se),!0):!1}function Oe(k,Se){let ue=p,Le=!1;if(k){ue=h.get(Se),ue===void 0&&(ue=[],h.set(Se,ue));const de=k.textures;if(ue.length!==de.length||ue[0]!==t.COLOR_ATTACHMENT0){for(let se=0,Ue=de.length;se<Ue;se++)ue[se]=t.COLOR_ATTACHMENT0+se;ue.length=de.length,Le=!0}}else ue[0]!==t.BACK&&(ue[0]=t.BACK,Le=!0);Le&&t.drawBuffers(ue)}function it(k){return v!==k?(t.useProgram(k),v=k,!0):!1}const D={[vr]:t.FUNC_ADD,[Lx]:t.FUNC_SUBTRACT,[Ix]:t.FUNC_REVERSE_SUBTRACT};D[Dx]=t.MIN,D[Ux]=t.MAX;const F={[Nx]:t.ZERO,[Ox]:t.ONE,[Fx]:t.SRC_COLOR,[lc]:t.SRC_ALPHA,[Gx]:t.SRC_ALPHA_SATURATE,[Vx]:t.DST_COLOR,[kx]:t.DST_ALPHA,[Bx]:t.ONE_MINUS_SRC_COLOR,[cc]:t.ONE_MINUS_SRC_ALPHA,[zx]:t.ONE_MINUS_DST_COLOR,[Hx]:t.ONE_MINUS_DST_ALPHA,[Wx]:t.CONSTANT_COLOR,[Xx]:t.ONE_MINUS_CONSTANT_COLOR,[jx]:t.CONSTANT_ALPHA,[qx]:t.ONE_MINUS_CONSTANT_ALPHA};function b(k,Se,ue,Le,de,se,Ue,je,Mt,ht){if(k===qi){x===!0&&(be(t.BLEND),x=!1);return}if(x===!1&&(pe(t.BLEND),x=!0),k!==Px){if(k!==g||ht!==A){if((d!==vr||_!==vr)&&(t.blendEquation(t.FUNC_ADD),d=vr,_=vr),ht)switch(k){case is:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ud:t.blendFunc(t.ONE,t.ONE);break;case fd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case dd:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case is:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ud:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case fd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case dd:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}S=null,M=null,C=null,P=null,w.set(0,0,0),N=0,g=k,A=ht}return}de=de||Se,se=se||ue,Ue=Ue||Le,(Se!==d||de!==_)&&(t.blendEquationSeparate(D[Se],D[de]),d=Se,_=de),(ue!==S||Le!==M||se!==C||Ue!==P)&&(t.blendFuncSeparate(F[ue],F[Le],F[se],F[Ue]),S=ue,M=Le,C=se,P=Ue),(je.equals(w)===!1||Mt!==N)&&(t.blendColor(je.r,je.g,je.b,Mt),w.copy(je),N=Mt),g=k,A=!1}function re(k,Se){k.side===Jn?be(t.CULL_FACE):pe(t.CULL_FACE);let ue=k.side===an;Se&&(ue=!ue),Z(ue),k.blending===is&&k.transparent===!1?b(qi):b(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);const Le=k.stencilWrite;a.setTest(Le),Le&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),L(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?pe(t.SAMPLE_ALPHA_TO_COVERAGE):be(t.SAMPLE_ALPHA_TO_COVERAGE)}function Z(k){y!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),y=k)}function ee(k){k!==wx?(pe(t.CULL_FACE),k!==O&&(k===cd?t.cullFace(t.BACK):k===Rx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):be(t.CULL_FACE),O=k}function T(k){k!==G&&($&&t.lineWidth(k),G=k)}function L(k,Se,ue){k?(pe(t.POLYGON_OFFSET_FILL),(W!==Se||te!==ue)&&(t.polygonOffset(Se,ue),W=Se,te=ue)):be(t.POLYGON_OFFSET_FILL)}function U(k){k?pe(t.SCISSOR_TEST):be(t.SCISSOR_TEST)}function B(k){k===void 0&&(k=t.TEXTURE0+ie-1),le!==k&&(t.activeTexture(k),le=k)}function ae(k,Se,ue){ue===void 0&&(le===null?ue=t.TEXTURE0+ie-1:ue=le);let Le=me[ue];Le===void 0&&(Le={type:void 0,texture:void 0},me[ue]=Le),(Le.type!==k||Le.texture!==Se)&&(le!==ue&&(t.activeTexture(ue),le=ue),t.bindTexture(k,Se||ye[k]),Le.type=k,Le.texture=Se)}function E(){const k=me[le];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function m(){try{t.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function I(){try{t.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function H(){try{t.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function q(){try{t.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function X(){try{t.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _e(){try{t.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ce(){try{t.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(){try{t.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ae(){try{t.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function oe(){try{t.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function we(k){Je.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),Je.copy(k))}function Ie(k){ne.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),ne.copy(k))}function De(k,Se){let ue=c.get(Se);ue===void 0&&(ue=new WeakMap,c.set(Se,ue));let Le=ue.get(k);Le===void 0&&(Le=t.getUniformBlockIndex(Se,k.name),ue.set(k,Le))}function ge(k,Se){const Le=c.get(Se).get(k);l.get(Se)!==Le&&(t.uniformBlockBinding(Se,Le,k.__bindingPointIndex),l.set(Se,Le))}function ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},le=null,me={},f={},h=new WeakMap,p=[],v=null,x=!1,g=null,d=null,S=null,M=null,_=null,C=null,P=null,w=new mt(0,0,0),N=0,A=!1,y=null,O=null,G=null,W=null,te=null,Je.set(0,0,t.canvas.width,t.canvas.height),ne.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:pe,disable:be,bindFramebuffer:Ke,drawBuffers:Oe,useProgram:it,setBlending:b,setMaterial:re,setFlipSided:Z,setCullFace:ee,setLineWidth:T,setPolygonOffset:L,setScissorTest:U,activeTexture:B,bindTexture:ae,unbindTexture:E,compressedTexImage2D:m,compressedTexImage3D:I,texImage2D:Ae,texImage3D:oe,updateUBOMapping:De,uniformBlockBinding:ge,texStorage2D:ce,texStorage3D:xe,texSubImage2D:H,texSubImage3D:q,compressedTexSubImage2D:X,compressedTexSubImage3D:_e,scissor:we,viewport:Ie,reset:ze}}function XT(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,m){return p?new OffscreenCanvas(E,m):uo("canvas")}function x(E,m,I){let H=1;const q=ae(E);if((q.width>I||q.height>I)&&(H=I/Math.max(q.width,q.height)),H<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const X=Math.floor(H*q.width),_e=Math.floor(H*q.height);f===void 0&&(f=v(X,_e));const ce=m?v(X,_e):f;return ce.width=X,ce.height=_e,ce.getContext("2d").drawImage(E,0,0,X,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+X+"x"+_e+")."),ce}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),E;return E}function g(E){return E.generateMipmaps}function d(E){t.generateMipmap(E)}function S(E){return E.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?t.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(E,m,I,H,q=!1){if(E!==null){if(t[E]!==void 0)return t[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let X=m;if(m===t.RED&&(I===t.FLOAT&&(X=t.R32F),I===t.HALF_FLOAT&&(X=t.R16F),I===t.UNSIGNED_BYTE&&(X=t.R8)),m===t.RED_INTEGER&&(I===t.UNSIGNED_BYTE&&(X=t.R8UI),I===t.UNSIGNED_SHORT&&(X=t.R16UI),I===t.UNSIGNED_INT&&(X=t.R32UI),I===t.BYTE&&(X=t.R8I),I===t.SHORT&&(X=t.R16I),I===t.INT&&(X=t.R32I)),m===t.RG&&(I===t.FLOAT&&(X=t.RG32F),I===t.HALF_FLOAT&&(X=t.RG16F),I===t.UNSIGNED_BYTE&&(X=t.RG8)),m===t.RG_INTEGER&&(I===t.UNSIGNED_BYTE&&(X=t.RG8UI),I===t.UNSIGNED_SHORT&&(X=t.RG16UI),I===t.UNSIGNED_INT&&(X=t.RG32UI),I===t.BYTE&&(X=t.RG8I),I===t.SHORT&&(X=t.RG16I),I===t.INT&&(X=t.RG32I)),m===t.RGB_INTEGER&&(I===t.UNSIGNED_BYTE&&(X=t.RGB8UI),I===t.UNSIGNED_SHORT&&(X=t.RGB16UI),I===t.UNSIGNED_INT&&(X=t.RGB32UI),I===t.BYTE&&(X=t.RGB8I),I===t.SHORT&&(X=t.RGB16I),I===t.INT&&(X=t.RGB32I)),m===t.RGBA_INTEGER&&(I===t.UNSIGNED_BYTE&&(X=t.RGBA8UI),I===t.UNSIGNED_SHORT&&(X=t.RGBA16UI),I===t.UNSIGNED_INT&&(X=t.RGBA32UI),I===t.BYTE&&(X=t.RGBA8I),I===t.SHORT&&(X=t.RGBA16I),I===t.INT&&(X=t.RGBA32I)),m===t.RGB&&I===t.UNSIGNED_INT_5_9_9_9_REV&&(X=t.RGB9_E5),m===t.RGBA){const _e=q?Aa:st.getTransfer(H);I===t.FLOAT&&(X=t.RGBA32F),I===t.HALF_FLOAT&&(X=t.RGBA16F),I===t.UNSIGNED_BYTE&&(X=_e===gt?t.SRGB8_ALPHA8:t.RGBA8),I===t.UNSIGNED_SHORT_4_4_4_4&&(X=t.RGBA4),I===t.UNSIGNED_SHORT_5_5_5_1&&(X=t.RGB5_A1)}return(X===t.R16F||X===t.R32F||X===t.RG16F||X===t.RG32F||X===t.RGBA16F||X===t.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function _(E,m){let I;return E?m===null||m===Tr||m===oo?I=t.DEPTH24_STENCIL8:m===yi?I=t.DEPTH32F_STENCIL8:m===so&&(I=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===Tr||m===oo?I=t.DEPTH_COMPONENT24:m===yi?I=t.DEPTH_COMPONENT32F:m===so&&(I=t.DEPTH_COMPONENT16),I}function C(E,m){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==Gn&&E.minFilter!==Qn?Math.log2(Math.max(m.width,m.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?m.mipmaps.length:1}function P(E){const m=E.target;m.removeEventListener("dispose",P),N(m),m.isVideoTexture&&u.delete(m)}function w(E){const m=E.target;m.removeEventListener("dispose",w),y(m)}function N(E){const m=i.get(E);if(m.__webglInit===void 0)return;const I=E.source,H=h.get(I);if(H){const q=H[m.__cacheKey];q.usedTimes--,q.usedTimes===0&&A(E),Object.keys(H).length===0&&h.delete(I)}i.remove(E)}function A(E){const m=i.get(E);t.deleteTexture(m.__webglTexture);const I=E.source,H=h.get(I);delete H[m.__cacheKey],o.memory.textures--}function y(E){const m=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(m.__webglFramebuffer[H]))for(let q=0;q<m.__webglFramebuffer[H].length;q++)t.deleteFramebuffer(m.__webglFramebuffer[H][q]);else t.deleteFramebuffer(m.__webglFramebuffer[H]);m.__webglDepthbuffer&&t.deleteRenderbuffer(m.__webglDepthbuffer[H])}else{if(Array.isArray(m.__webglFramebuffer))for(let H=0;H<m.__webglFramebuffer.length;H++)t.deleteFramebuffer(m.__webglFramebuffer[H]);else t.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&t.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&t.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let H=0;H<m.__webglColorRenderbuffer.length;H++)m.__webglColorRenderbuffer[H]&&t.deleteRenderbuffer(m.__webglColorRenderbuffer[H]);m.__webglDepthRenderbuffer&&t.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const I=E.textures;for(let H=0,q=I.length;H<q;H++){const X=i.get(I[H]);X.__webglTexture&&(t.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(I[H])}i.remove(E)}let O=0;function G(){O=0}function W(){const E=O;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),O+=1,E}function te(E){const m=[];return m.push(E.wrapS),m.push(E.wrapT),m.push(E.wrapR||0),m.push(E.magFilter),m.push(E.minFilter),m.push(E.anisotropy),m.push(E.internalFormat),m.push(E.format),m.push(E.type),m.push(E.generateMipmaps),m.push(E.premultiplyAlpha),m.push(E.flipY),m.push(E.unpackAlignment),m.push(E.colorSpace),m.join()}function ie(E,m){const I=i.get(E);if(E.isVideoTexture&&U(E),E.isRenderTargetTexture===!1&&E.version>0&&I.__version!==E.version){const H=E.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(I,E,m);return}}n.bindTexture(t.TEXTURE_2D,I.__webglTexture,t.TEXTURE0+m)}function $(E,m){const I=i.get(E);if(E.version>0&&I.__version!==E.version){ye(I,E,m);return}n.bindTexture(t.TEXTURE_2D_ARRAY,I.__webglTexture,t.TEXTURE0+m)}function Q(E,m){const I=i.get(E);if(E.version>0&&I.__version!==E.version){ye(I,E,m);return}n.bindTexture(t.TEXTURE_3D,I.__webglTexture,t.TEXTURE0+m)}function j(E,m){const I=i.get(E);if(E.version>0&&I.__version!==E.version){pe(I,E,m);return}n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+m)}const le={[ro]:t.REPEAT,[Er]:t.CLAMP_TO_EDGE,[xc]:t.MIRRORED_REPEAT},me={[Gn]:t.NEAREST,[iS]:t.NEAREST_MIPMAP_NEAREST,[Uo]:t.NEAREST_MIPMAP_LINEAR,[Qn]:t.LINEAR,[cl]:t.LINEAR_MIPMAP_NEAREST,[Mr]:t.LINEAR_MIPMAP_LINEAR},Me={[lS]:t.NEVER,[pS]:t.ALWAYS,[cS]:t.LESS,[um]:t.LEQUAL,[uS]:t.EQUAL,[hS]:t.GEQUAL,[fS]:t.GREATER,[dS]:t.NOTEQUAL};function Fe(E,m){if(m.type===yi&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===Qn||m.magFilter===cl||m.magFilter===Uo||m.magFilter===Mr||m.minFilter===Qn||m.minFilter===cl||m.minFilter===Uo||m.minFilter===Mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(E,t.TEXTURE_WRAP_S,le[m.wrapS]),t.texParameteri(E,t.TEXTURE_WRAP_T,le[m.wrapT]),(E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY)&&t.texParameteri(E,t.TEXTURE_WRAP_R,le[m.wrapR]),t.texParameteri(E,t.TEXTURE_MAG_FILTER,me[m.magFilter]),t.texParameteri(E,t.TEXTURE_MIN_FILTER,me[m.minFilter]),m.compareFunction&&(t.texParameteri(E,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(E,t.TEXTURE_COMPARE_FUNC,Me[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Gn||m.minFilter!==Uo&&m.minFilter!==Mr||m.type===yi&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");t.texParameterf(E,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function Je(E,m){let I=!1;E.__webglInit===void 0&&(E.__webglInit=!0,m.addEventListener("dispose",P));const H=m.source;let q=h.get(H);q===void 0&&(q={},h.set(H,q));const X=te(m);if(X!==E.__cacheKey){q[X]===void 0&&(q[X]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,I=!0),q[X].usedTimes++;const _e=q[E.__cacheKey];_e!==void 0&&(q[E.__cacheKey].usedTimes--,_e.usedTimes===0&&A(m)),E.__cacheKey=X,E.__webglTexture=q[X].texture}return I}function ne(E,m,I){return Math.floor(Math.floor(E/I)/m)}function fe(E,m,I,H){const X=E.updateRanges;if(X.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,m.width,m.height,I,H,m.data);else{X.sort((oe,we)=>oe.start-we.start);let _e=0;for(let oe=1;oe<X.length;oe++){const we=X[_e],Ie=X[oe],De=we.start+we.count,ge=ne(Ie.start,m.width,4),ze=ne(we.start,m.width,4);Ie.start<=De+1&&ge===ze&&ne(Ie.start+Ie.count-1,m.width,4)===ge?we.count=Math.max(we.count,Ie.start+Ie.count-we.start):(++_e,X[_e]=Ie)}X.length=_e+1;const ce=t.getParameter(t.UNPACK_ROW_LENGTH),xe=t.getParameter(t.UNPACK_SKIP_PIXELS),Ae=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,m.width);for(let oe=0,we=X.length;oe<we;oe++){const Ie=X[oe],De=Math.floor(Ie.start/4),ge=Math.ceil(Ie.count/4),ze=De%m.width,k=Math.floor(De/m.width),Se=ge,ue=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(t.UNPACK_SKIP_ROWS,k),n.texSubImage2D(t.TEXTURE_2D,0,ze,k,Se,ue,I,H,m.data)}E.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ce),t.pixelStorei(t.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ae)}}function ye(E,m,I){let H=t.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(H=t.TEXTURE_2D_ARRAY),m.isData3DTexture&&(H=t.TEXTURE_3D);const q=Je(E,m),X=m.source;n.bindTexture(H,E.__webglTexture,t.TEXTURE0+I);const _e=i.get(X);if(X.version!==_e.__version||q===!0){n.activeTexture(t.TEXTURE0+I);const ce=st.getPrimaries(st.workingColorSpace),xe=m.colorSpace===Gi?null:st.getPrimaries(m.colorSpace),Ae=m.colorSpace===Gi||ce===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let oe=x(m.image,!1,r.maxTextureSize);oe=B(m,oe);const we=s.convert(m.format,m.colorSpace),Ie=s.convert(m.type);let De=M(m.internalFormat,we,Ie,m.colorSpace,m.isVideoTexture);Fe(H,m);let ge;const ze=m.mipmaps,k=m.isVideoTexture!==!0,Se=_e.__version===void 0||q===!0,ue=X.dataReady,Le=C(m,oe);if(m.isDepthTexture)De=_(m.format===lo,m.type),Se&&(k?n.texStorage2D(t.TEXTURE_2D,1,De,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,De,oe.width,oe.height,0,we,Ie,null));else if(m.isDataTexture)if(ze.length>0){k&&Se&&n.texStorage2D(t.TEXTURE_2D,Le,De,ze[0].width,ze[0].height);for(let de=0,se=ze.length;de<se;de++)ge=ze[de],k?ue&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,ge.width,ge.height,we,Ie,ge.data):n.texImage2D(t.TEXTURE_2D,de,De,ge.width,ge.height,0,we,Ie,ge.data);m.generateMipmaps=!1}else k?(Se&&n.texStorage2D(t.TEXTURE_2D,Le,De,oe.width,oe.height),ue&&fe(m,oe,we,Ie)):n.texImage2D(t.TEXTURE_2D,0,De,oe.width,oe.height,0,we,Ie,oe.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){k&&Se&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Le,De,ze[0].width,ze[0].height,oe.depth);for(let de=0,se=ze.length;de<se;de++)if(ge=ze[de],m.format!==kn)if(we!==null)if(k){if(ue)if(m.layerUpdates.size>0){const Ue=Nd(ge.width,ge.height,m.format,m.type);for(const je of m.layerUpdates){const Mt=ge.data.subarray(je*Ue/ge.data.BYTES_PER_ELEMENT,(je+1)*Ue/ge.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,je,ge.width,ge.height,1,we,Mt)}m.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,0,ge.width,ge.height,oe.depth,we,ge.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,de,De,ge.width,ge.height,oe.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?ue&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,0,ge.width,ge.height,oe.depth,we,Ie,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,de,De,ge.width,ge.height,oe.depth,0,we,Ie,ge.data)}else{k&&Se&&n.texStorage2D(t.TEXTURE_2D,Le,De,ze[0].width,ze[0].height);for(let de=0,se=ze.length;de<se;de++)ge=ze[de],m.format!==kn?we!==null?k?ue&&n.compressedTexSubImage2D(t.TEXTURE_2D,de,0,0,ge.width,ge.height,we,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,de,De,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?ue&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,ge.width,ge.height,we,Ie,ge.data):n.texImage2D(t.TEXTURE_2D,de,De,ge.width,ge.height,0,we,Ie,ge.data)}else if(m.isDataArrayTexture)if(k){if(Se&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Le,De,oe.width,oe.height,oe.depth),ue)if(m.layerUpdates.size>0){const de=Nd(oe.width,oe.height,m.format,m.type);for(const se of m.layerUpdates){const Ue=oe.data.subarray(se*de/oe.data.BYTES_PER_ELEMENT,(se+1)*de/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,se,oe.width,oe.height,1,we,Ie,Ue)}m.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,we,Ie,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,oe.width,oe.height,oe.depth,0,we,Ie,oe.data);else if(m.isData3DTexture)k?(Se&&n.texStorage3D(t.TEXTURE_3D,Le,De,oe.width,oe.height,oe.depth),ue&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,we,Ie,oe.data)):n.texImage3D(t.TEXTURE_3D,0,De,oe.width,oe.height,oe.depth,0,we,Ie,oe.data);else if(m.isFramebufferTexture){if(Se)if(k)n.texStorage2D(t.TEXTURE_2D,Le,De,oe.width,oe.height);else{let de=oe.width,se=oe.height;for(let Ue=0;Ue<Le;Ue++)n.texImage2D(t.TEXTURE_2D,Ue,De,de,se,0,we,Ie,null),de>>=1,se>>=1}}else if(ze.length>0){if(k&&Se){const de=ae(ze[0]);n.texStorage2D(t.TEXTURE_2D,Le,De,de.width,de.height)}for(let de=0,se=ze.length;de<se;de++)ge=ze[de],k?ue&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,we,Ie,ge):n.texImage2D(t.TEXTURE_2D,de,De,we,Ie,ge);m.generateMipmaps=!1}else if(k){if(Se){const de=ae(oe);n.texStorage2D(t.TEXTURE_2D,Le,De,de.width,de.height)}ue&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,we,Ie,oe)}else n.texImage2D(t.TEXTURE_2D,0,De,we,Ie,oe);g(m)&&d(H),_e.__version=X.version,m.onUpdate&&m.onUpdate(m)}E.__version=m.version}function pe(E,m,I){if(m.image.length!==6)return;const H=Je(E,m),q=m.source;n.bindTexture(t.TEXTURE_CUBE_MAP,E.__webglTexture,t.TEXTURE0+I);const X=i.get(q);if(q.version!==X.__version||H===!0){n.activeTexture(t.TEXTURE0+I);const _e=st.getPrimaries(st.workingColorSpace),ce=m.colorSpace===Gi?null:st.getPrimaries(m.colorSpace),xe=m.colorSpace===Gi||_e===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ae=m.isCompressedTexture||m.image[0].isCompressedTexture,oe=m.image[0]&&m.image[0].isDataTexture,we=[];for(let se=0;se<6;se++)!Ae&&!oe?we[se]=x(m.image[se],!0,r.maxCubemapSize):we[se]=oe?m.image[se].image:m.image[se],we[se]=B(m,we[se]);const Ie=we[0],De=s.convert(m.format,m.colorSpace),ge=s.convert(m.type),ze=M(m.internalFormat,De,ge,m.colorSpace),k=m.isVideoTexture!==!0,Se=X.__version===void 0||H===!0,ue=q.dataReady;let Le=C(m,Ie);Fe(t.TEXTURE_CUBE_MAP,m);let de;if(Ae){k&&Se&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,ze,Ie.width,Ie.height);for(let se=0;se<6;se++){de=we[se].mipmaps;for(let Ue=0;Ue<de.length;Ue++){const je=de[Ue];m.format!==kn?De!==null?k?ue&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue,0,0,je.width,je.height,De,je.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue,ze,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue,0,0,je.width,je.height,De,ge,je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue,ze,je.width,je.height,0,De,ge,je.data)}}}else{if(de=m.mipmaps,k&&Se){de.length>0&&Le++;const se=ae(we[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,ze,se.width,se.height)}for(let se=0;se<6;se++)if(oe){k?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,we[se].width,we[se].height,De,ge,we[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ze,we[se].width,we[se].height,0,De,ge,we[se].data);for(let Ue=0;Ue<de.length;Ue++){const Mt=de[Ue].image[se].image;k?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue+1,0,0,Mt.width,Mt.height,De,ge,Mt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue+1,ze,Mt.width,Mt.height,0,De,ge,Mt.data)}}else{k?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,De,ge,we[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ze,De,ge,we[se]);for(let Ue=0;Ue<de.length;Ue++){const je=de[Ue];k?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue+1,0,0,De,ge,je.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue+1,ze,De,ge,je.image[se])}}}g(m)&&d(t.TEXTURE_CUBE_MAP),X.__version=q.version,m.onUpdate&&m.onUpdate(m)}E.__version=m.version}function be(E,m,I,H,q,X){const _e=s.convert(I.format,I.colorSpace),ce=s.convert(I.type),xe=M(I.internalFormat,_e,ce,I.colorSpace),Ae=i.get(m),oe=i.get(I);if(oe.__renderTarget=m,!Ae.__hasExternalTextures){const we=Math.max(1,m.width>>X),Ie=Math.max(1,m.height>>X);q===t.TEXTURE_3D||q===t.TEXTURE_2D_ARRAY?n.texImage3D(q,X,xe,we,Ie,m.depth,0,_e,ce,null):n.texImage2D(q,X,xe,we,Ie,0,_e,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,E),L(m)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,H,q,oe.__webglTexture,0,T(m)):(q===t.TEXTURE_2D||q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,H,q,oe.__webglTexture,X),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ke(E,m,I){if(t.bindRenderbuffer(t.RENDERBUFFER,E),m.depthBuffer){const H=m.depthTexture,q=H&&H.isDepthTexture?H.type:null,X=_(m.stencilBuffer,q),_e=m.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=T(m);L(m)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,X,m.width,m.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,X,m.width,m.height):t.renderbufferStorage(t.RENDERBUFFER,X,m.width,m.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,_e,t.RENDERBUFFER,E)}else{const H=m.textures;for(let q=0;q<H.length;q++){const X=H[q],_e=s.convert(X.format,X.colorSpace),ce=s.convert(X.type),xe=M(X.internalFormat,_e,ce,X.colorSpace),Ae=T(m);I&&L(m)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,xe,m.width,m.height):L(m)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,xe,m.width,m.height):t.renderbufferStorage(t.RENDERBUFFER,xe,m.width,m.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Oe(E,m){if(m&&m.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,E),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const H=i.get(m.depthTexture);H.__renderTarget=m,(!H.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),ie(m.depthTexture,0);const q=H.__webglTexture,X=T(m);if(m.depthTexture.format===ao)L(m)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0,X):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0);else if(m.depthTexture.format===lo)L(m)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0,X):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function it(E){const m=i.get(E),I=E.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==E.depthTexture){const H=E.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),H){const q=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,H.removeEventListener("dispose",q)};H.addEventListener("dispose",q),m.__depthDisposeCallback=q}m.__boundDepthTexture=H}if(E.depthTexture&&!m.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const H=E.texture.mipmaps;H&&H.length>0?Oe(m.__webglFramebuffer[0],E):Oe(m.__webglFramebuffer,E)}else if(I){m.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(n.bindFramebuffer(t.FRAMEBUFFER,m.__webglFramebuffer[H]),m.__webglDepthbuffer[H]===void 0)m.__webglDepthbuffer[H]=t.createRenderbuffer(),Ke(m.__webglDepthbuffer[H],E,!1);else{const q=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=m.__webglDepthbuffer[H];t.bindRenderbuffer(t.RENDERBUFFER,X),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,X)}}else{const H=E.texture.mipmaps;if(H&&H.length>0?n.bindFramebuffer(t.FRAMEBUFFER,m.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=t.createRenderbuffer(),Ke(m.__webglDepthbuffer,E,!1);else{const q=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=m.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,X),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,X)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function D(E,m,I){const H=i.get(E);m!==void 0&&be(H.__webglFramebuffer,E,E.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),I!==void 0&&it(E)}function F(E){const m=E.texture,I=i.get(E),H=i.get(m);E.addEventListener("dispose",w);const q=E.textures,X=E.isWebGLCubeRenderTarget===!0,_e=q.length>1;if(_e||(H.__webglTexture===void 0&&(H.__webglTexture=t.createTexture()),H.__version=m.version,o.memory.textures++),X){I.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(m.mipmaps&&m.mipmaps.length>0){I.__webglFramebuffer[ce]=[];for(let xe=0;xe<m.mipmaps.length;xe++)I.__webglFramebuffer[ce][xe]=t.createFramebuffer()}else I.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){I.__webglFramebuffer=[];for(let ce=0;ce<m.mipmaps.length;ce++)I.__webglFramebuffer[ce]=t.createFramebuffer()}else I.__webglFramebuffer=t.createFramebuffer();if(_e)for(let ce=0,xe=q.length;ce<xe;ce++){const Ae=i.get(q[ce]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=t.createTexture(),o.memory.textures++)}if(E.samples>0&&L(E)===!1){I.__webglMultisampledFramebuffer=t.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ce=0;ce<q.length;ce++){const xe=q[ce];I.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,I.__webglColorRenderbuffer[ce]);const Ae=s.convert(xe.format,xe.colorSpace),oe=s.convert(xe.type),we=M(xe.internalFormat,Ae,oe,xe.colorSpace,E.isXRRenderTarget===!0),Ie=T(E);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,we,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,I.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),E.depthBuffer&&(I.__webglDepthRenderbuffer=t.createRenderbuffer(),Ke(I.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(X){n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture),Fe(t.TEXTURE_CUBE_MAP,m);for(let ce=0;ce<6;ce++)if(m.mipmaps&&m.mipmaps.length>0)for(let xe=0;xe<m.mipmaps.length;xe++)be(I.__webglFramebuffer[ce][xe],E,m,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,xe);else be(I.__webglFramebuffer[ce],E,m,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);g(m)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(_e){for(let ce=0,xe=q.length;ce<xe;ce++){const Ae=q[ce],oe=i.get(Ae);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),Fe(t.TEXTURE_2D,Ae),be(I.__webglFramebuffer,E,Ae,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),g(Ae)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ce=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,H.__webglTexture),Fe(ce,m),m.mipmaps&&m.mipmaps.length>0)for(let xe=0;xe<m.mipmaps.length;xe++)be(I.__webglFramebuffer[xe],E,m,t.COLOR_ATTACHMENT0,ce,xe);else be(I.__webglFramebuffer,E,m,t.COLOR_ATTACHMENT0,ce,0);g(m)&&d(ce),n.unbindTexture()}E.depthBuffer&&it(E)}function b(E){const m=E.textures;for(let I=0,H=m.length;I<H;I++){const q=m[I];if(g(q)){const X=S(E),_e=i.get(q).__webglTexture;n.bindTexture(X,_e),d(X),n.unbindTexture()}}}const re=[],Z=[];function ee(E){if(E.samples>0){if(L(E)===!1){const m=E.textures,I=E.width,H=E.height;let q=t.COLOR_BUFFER_BIT;const X=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,_e=i.get(E),ce=m.length>1;if(ce)for(let Ae=0;Ae<m.length;Ae++)n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const xe=E.texture.mipmaps;xe&&xe.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Ae=0;Ae<m.length;Ae++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(q|=t.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(q|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,_e.__webglColorRenderbuffer[Ae]);const oe=i.get(m[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,oe,0)}t.blitFramebuffer(0,0,I,H,0,0,I,H,q,t.NEAREST),l===!0&&(re.length=0,Z.length=0,re.push(t.COLOR_ATTACHMENT0+Ae),E.depthBuffer&&E.resolveDepthBuffer===!1&&(re.push(X),Z.push(X),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Z)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,re))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let Ae=0;Ae<m.length;Ae++){n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,_e.__webglColorRenderbuffer[Ae]);const oe=i.get(m[Ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,oe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const m=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[m])}}}function T(E){return Math.min(r.maxSamples,E.samples)}function L(E){const m=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function U(E){const m=o.render.frame;u.get(E)!==m&&(u.set(E,m),E.update())}function B(E,m){const I=E.colorSpace,H=E.format,q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||I!==hs&&I!==Gi&&(st.getTransfer(I)===gt?(H!==kn||q!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),m}function ae(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=G,this.setTexture2D=ie,this.setTexture2DArray=$,this.setTexture3D=Q,this.setTextureCube=j,this.rebindTextures=D,this.setupRenderTarget=F,this.updateRenderTargetMipmap=b,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=be,this.useMultisampledRTT=L}function jT(t,e){function n(i,r=Gi){let s;const o=st.getTransfer(r);if(i===Ci)return t.UNSIGNED_BYTE;if(i===Tu)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Au)return t.UNSIGNED_SHORT_5_5_5_1;if(i===rm)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===nm)return t.BYTE;if(i===im)return t.SHORT;if(i===so)return t.UNSIGNED_SHORT;if(i===bu)return t.INT;if(i===Tr)return t.UNSIGNED_INT;if(i===yi)return t.FLOAT;if(i===xo)return t.HALF_FLOAT;if(i===sm)return t.ALPHA;if(i===om)return t.RGB;if(i===kn)return t.RGBA;if(i===ao)return t.DEPTH_COMPONENT;if(i===lo)return t.DEPTH_STENCIL;if(i===am)return t.RED;if(i===wu)return t.RED_INTEGER;if(i===lm)return t.RG;if(i===Ru)return t.RG_INTEGER;if(i===Cu)return t.RGBA_INTEGER;if(i===ca||i===ua||i===fa||i===da)if(o===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ca)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ca)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ua)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===da)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sc||i===Ec||i===Mc||i===yc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Sc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ec)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Mc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bc||i===Tc||i===Ac)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===bc||i===Tc)return o===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ac)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===wc||i===Rc||i===Cc||i===Pc||i===Lc||i===Ic||i===Dc||i===Uc||i===Nc||i===Oc||i===Fc||i===Bc||i===kc||i===Hc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===wc)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rc)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cc)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pc)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Lc)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ic)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Dc)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Uc)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nc)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Oc)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fc)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bc)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kc)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hc)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ha||i===Vc||i===zc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ha)return o===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cm||i===Gc||i===Wc||i===Xc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ha)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Gc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===oo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const qT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$T=`
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

}`;class YT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new nn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Li({vertexShader:qT,fragmentShader:$T,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ei(new Wa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class KT extends Ss{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,v=null;const x=new YT,g=n.getContextAttributes();let d=null,S=null;const M=[],_=[],C=new nt;let P=null;const w=new An;w.viewport=new It;const N=new An;N.viewport=new It;const A=[w,N],y=new _E;let O=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let fe=M[ne];return fe===void 0&&(fe=new Pl,M[ne]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ne){let fe=M[ne];return fe===void 0&&(fe=new Pl,M[ne]=fe),fe.getGripSpace()},this.getHand=function(ne){let fe=M[ne];return fe===void 0&&(fe=new Pl,M[ne]=fe),fe.getHandSpace()};function W(ne){const fe=_.indexOf(ne.inputSource);if(fe===-1)return;const ye=M[fe];ye!==void 0&&(ye.update(ne.inputSource,ne.frame,c||o),ye.dispatchEvent({type:ne.type,data:ne.inputSource}))}function te(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",ie);for(let ne=0;ne<M.length;ne++){const fe=_[ne];fe!==null&&(_[ne]=null,M[ne].disconnect(fe))}O=null,G=null,x.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,S=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",te),r.addEventListener("inputsourceschange",ie),g.xrCompatible!==!0&&await n.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,pe=null,be=null;g.depth&&(be=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ye=g.stencil?lo:ao,pe=g.stencil?oo:Tr);const Ke={colorFormat:n.RGBA8,depthFormat:be,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Ke),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new Ar(h.textureWidth,h.textureHeight,{format:kn,type:Ci,depthTexture:new Mm(h.textureWidth,h.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ye={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ye),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Ar(p.framebufferWidth,p.framebufferHeight,{format:kn,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Je.setContext(r),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ie(ne){for(let fe=0;fe<ne.removed.length;fe++){const ye=ne.removed[fe],pe=_.indexOf(ye);pe>=0&&(_[pe]=null,M[pe].disconnect(ye))}for(let fe=0;fe<ne.added.length;fe++){const ye=ne.added[fe];let pe=_.indexOf(ye);if(pe===-1){for(let Ke=0;Ke<M.length;Ke++)if(Ke>=_.length){_.push(ye),pe=Ke;break}else if(_[Ke]===null){_[Ke]=ye,pe=Ke;break}if(pe===-1)break}const be=M[pe];be&&be.connect(ye)}}const $=new Y,Q=new Y;function j(ne,fe,ye){$.setFromMatrixPosition(fe.matrixWorld),Q.setFromMatrixPosition(ye.matrixWorld);const pe=$.distanceTo(Q),be=fe.projectionMatrix.elements,Ke=ye.projectionMatrix.elements,Oe=be[14]/(be[10]-1),it=be[14]/(be[10]+1),D=(be[9]+1)/be[5],F=(be[9]-1)/be[5],b=(be[8]-1)/be[0],re=(Ke[8]+1)/Ke[0],Z=Oe*b,ee=Oe*re,T=pe/(-b+re),L=T*-b;if(fe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(L),ne.translateZ(T),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),be[10]===-1)ne.projectionMatrix.copy(fe.projectionMatrix),ne.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const U=Oe+T,B=it+T,ae=Z-L,E=ee+(pe-L),m=D*it/B*U,I=F*it/B*U;ne.projectionMatrix.makePerspective(ae,E,m,I,U,B),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function le(ne,fe){fe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(fe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let fe=ne.near,ye=ne.far;x.texture!==null&&(x.depthNear>0&&(fe=x.depthNear),x.depthFar>0&&(ye=x.depthFar)),y.near=N.near=w.near=fe,y.far=N.far=w.far=ye,(O!==y.near||G!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),O=y.near,G=y.far),w.layers.mask=ne.layers.mask|2,N.layers.mask=ne.layers.mask|4,y.layers.mask=w.layers.mask|N.layers.mask;const pe=ne.parent,be=y.cameras;le(y,pe);for(let Ke=0;Ke<be.length;Ke++)le(be[Ke],pe);be.length===2?j(y,w,N):y.projectionMatrix.copy(w.projectionMatrix),me(ne,y,pe)};function me(ne,fe,ye){ye===null?ne.matrix.copy(fe.matrixWorld):(ne.matrix.copy(ye.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(fe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(fe.projectionMatrix),ne.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=co*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(ne){l=ne,h!==null&&(h.fixedFoveation=ne),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ne)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let Me=null;function Fe(ne,fe){if(u=fe.getViewerPose(c||o),v=fe,u!==null){const ye=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let pe=!1;ye.length!==y.cameras.length&&(y.cameras.length=0,pe=!0);for(let Oe=0;Oe<ye.length;Oe++){const it=ye[Oe];let D=null;if(p!==null)D=p.getViewport(it);else{const b=f.getViewSubImage(h,it);D=b.viewport,Oe===0&&(e.setRenderTargetTextures(S,b.colorTexture,b.depthStencilTexture),e.setRenderTarget(S))}let F=A[Oe];F===void 0&&(F=new An,F.layers.enable(Oe),F.viewport=new It,A[Oe]=F),F.matrix.fromArray(it.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(it.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(D.x,D.y,D.width,D.height),Oe===0&&(y.matrix.copy(F.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),pe===!0&&y.cameras.push(F)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const Oe=f.getDepthInformation(ye[0]);Oe&&Oe.isValid&&Oe.texture&&x.init(e,Oe,r.renderState)}}for(let ye=0;ye<M.length;ye++){const pe=_[ye],be=M[ye];pe!==null&&be!==void 0&&be.update(pe,fe,c||o)}Me&&Me(ne,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),v=null}const Je=new ym;Je.setAnimationLoop(Fe),this.setAnimationLoop=function(ne){Me=ne},this.dispose=function(){}}}const dr=new Pi,ZT=new Nt;function JT(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,vm(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,S,M,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),f(g,d)):d.isMeshPhongMaterial?(s(g,d),u(g,d)):d.isMeshStandardMaterial?(s(g,d),h(g,d),d.isMeshPhysicalMaterial&&p(g,d,_)):d.isMeshMatcapMaterial?(s(g,d),v(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),x(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,S,M):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===an&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===an&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const S=e.get(d),M=S.envMap,_=S.envMapRotation;M&&(g.envMap.value=M,dr.copy(_),dr.x*=-1,dr.y*=-1,dr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),g.envMapRotation.value.setFromMatrix4(ZT.makeRotationFromEuler(dr)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,S,M){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*S,g.scale.value=M*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,S){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===an&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,d){d.matcap&&(g.matcap.value=d.matcap)}function x(g,d){const S=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function QT(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){const _=M.program;i.uniformBlockBinding(S,_)}function c(S,M){let _=r[S.id];_===void 0&&(v(S),_=u(S),r[S.id]=_,S.addEventListener("dispose",g));const C=M.program;i.updateUBOMapping(S,C);const P=e.render.frame;s[S.id]!==P&&(h(S),s[S.id]=P)}function u(S){const M=f();S.__bindingPointIndex=M;const _=t.createBuffer(),C=S.__size,P=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,_),t.bufferData(t.UNIFORM_BUFFER,C,P),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,M,_),_}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const M=r[S.id],_=S.uniforms,C=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let P=0,w=_.length;P<w;P++){const N=Array.isArray(_[P])?_[P]:[_[P]];for(let A=0,y=N.length;A<y;A++){const O=N[A];if(p(O,P,A,C)===!0){const G=O.__offset,W=Array.isArray(O.value)?O.value:[O.value];let te=0;for(let ie=0;ie<W.length;ie++){const $=W[ie],Q=x($);typeof $=="number"||typeof $=="boolean"?(O.__data[0]=$,t.bufferSubData(t.UNIFORM_BUFFER,G+te,O.__data)):$.isMatrix3?(O.__data[0]=$.elements[0],O.__data[1]=$.elements[1],O.__data[2]=$.elements[2],O.__data[3]=0,O.__data[4]=$.elements[3],O.__data[5]=$.elements[4],O.__data[6]=$.elements[5],O.__data[7]=0,O.__data[8]=$.elements[6],O.__data[9]=$.elements[7],O.__data[10]=$.elements[8],O.__data[11]=0):($.toArray(O.__data,te),te+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,G,O.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(S,M,_,C){const P=S.value,w=M+"_"+_;if(C[w]===void 0)return typeof P=="number"||typeof P=="boolean"?C[w]=P:C[w]=P.clone(),!0;{const N=C[w];if(typeof P=="number"||typeof P=="boolean"){if(N!==P)return C[w]=P,!0}else if(N.equals(P)===!1)return N.copy(P),!0}return!1}function v(S){const M=S.uniforms;let _=0;const C=16;for(let w=0,N=M.length;w<N;w++){const A=Array.isArray(M[w])?M[w]:[M[w]];for(let y=0,O=A.length;y<O;y++){const G=A[y],W=Array.isArray(G.value)?G.value:[G.value];for(let te=0,ie=W.length;te<ie;te++){const $=W[te],Q=x($),j=_%C,le=j%Q.boundary,me=j+le;_+=le,me!==0&&C-me<Q.storage&&(_+=C-me),G.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=_,_+=Q.storage}}}const P=_%C;return P>0&&(_+=C-P),S.__size=_,S.__cache={},this}function x(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function g(S){const M=S.target;M.removeEventListener("dispose",g);const _=o.indexOf(M.__bindingPointIndex);o.splice(_,1),t.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function d(){for(const S in r)t.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class eA{constructor(e={}){const{canvas:n=IS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const v=new Uint32Array(4),x=new Int32Array(4);let g=null,d=null;const S=[],M=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let C=!1;this._outputColorSpace=bn;let P=0,w=0,N=null,A=-1,y=null;const O=new It,G=new It;let W=null;const te=new mt(0);let ie=0,$=n.width,Q=n.height,j=1,le=null,me=null;const Me=new It(0,0,$,Q),Fe=new It(0,0,$,Q);let Je=!1;const ne=new Em;let fe=!1,ye=!1;const pe=new Nt,be=new Nt,Ke=new Y,Oe=new It,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let D=!1;function F(){return N===null?j:1}let b=i;function re(R,V){return n.getContext(R,V)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${yu}`),n.addEventListener("webglcontextlost",Le,!1),n.addEventListener("webglcontextrestored",de,!1),n.addEventListener("webglcontextcreationerror",se,!1),b===null){const V="webgl2";if(b=re(V,R),b===null)throw re(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Z,ee,T,L,U,B,ae,E,m,I,H,q,X,_e,ce,xe,Ae,oe,we,Ie,De,ge,ze,k;function Se(){Z=new ub(b),Z.init(),ge=new jT(b,Z),ee=new ib(b,Z,e,ge),T=new WT(b,Z),ee.reverseDepthBuffer&&h&&T.buffers.depth.setReversed(!0),L=new hb(b),U=new LT,B=new XT(b,Z,T,U,ee,ge,L),ae=new sb(_),E=new cb(_),m=new xE(b),ze=new tb(b,m),I=new fb(b,m,L,ze),H=new mb(b,I,m,L),we=new pb(b,ee,B),xe=new rb(U),q=new PT(_,ae,E,Z,ee,ze,xe),X=new JT(_,U),_e=new DT,ce=new kT(Z),oe=new eb(_,ae,E,T,H,p,l),Ae=new zT(_,H,ee),k=new QT(b,L,ee,T),Ie=new nb(b,Z,L),De=new db(b,Z,L),L.programs=q.programs,_.capabilities=ee,_.extensions=Z,_.properties=U,_.renderLists=_e,_.shadowMap=Ae,_.state=T,_.info=L}Se();const ue=new KT(_,b);this.xr=ue,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const R=Z.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Z.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize($,Q,!1))},this.getSize=function(R){return R.set($,Q)},this.setSize=function(R,V,K=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=R,Q=V,n.width=Math.floor(R*j),n.height=Math.floor(V*j),K===!0&&(n.style.width=R+"px",n.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set($*j,Q*j).floor()},this.setDrawingBufferSize=function(R,V,K){$=R,Q=V,j=K,n.width=Math.floor(R*K),n.height=Math.floor(V*K),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(O)},this.getViewport=function(R){return R.copy(Me)},this.setViewport=function(R,V,K,J){R.isVector4?Me.set(R.x,R.y,R.z,R.w):Me.set(R,V,K,J),T.viewport(O.copy(Me).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(Fe)},this.setScissor=function(R,V,K,J){R.isVector4?Fe.set(R.x,R.y,R.z,R.w):Fe.set(R,V,K,J),T.scissor(G.copy(Fe).multiplyScalar(j).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(R){T.setScissorTest(Je=R)},this.setOpaqueSort=function(R){le=R},this.setTransparentSort=function(R){me=R},this.getClearColor=function(R){return R.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(R=!0,V=!0,K=!0){let J=0;if(R){let z=!1;if(N!==null){const he=N.texture.format;z=he===Cu||he===Ru||he===wu}if(z){const he=N.texture.type,Ee=he===Ci||he===Tr||he===so||he===oo||he===Tu||he===Au,Ne=oe.getClearColor(),Pe=oe.getClearAlpha(),Ge=Ne.r,We=Ne.g,ke=Ne.b;Ee?(v[0]=Ge,v[1]=We,v[2]=ke,v[3]=Pe,b.clearBufferuiv(b.COLOR,0,v)):(x[0]=Ge,x[1]=We,x[2]=ke,x[3]=Pe,b.clearBufferiv(b.COLOR,0,x))}else J|=b.COLOR_BUFFER_BIT}V&&(J|=b.DEPTH_BUFFER_BIT),K&&(J|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Le,!1),n.removeEventListener("webglcontextrestored",de,!1),n.removeEventListener("webglcontextcreationerror",se,!1),oe.dispose(),_e.dispose(),ce.dispose(),U.dispose(),ae.dispose(),E.dispose(),H.dispose(),ze.dispose(),k.dispose(),q.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Gu),ue.removeEventListener("sessionend",Wu),ir.stop()};function Le(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const R=L.autoReset,V=Ae.enabled,K=Ae.autoUpdate,J=Ae.needsUpdate,z=Ae.type;Se(),L.autoReset=R,Ae.enabled=V,Ae.autoUpdate=K,Ae.needsUpdate=J,Ae.type=z}function se(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ue(R){const V=R.target;V.removeEventListener("dispose",Ue),je(V)}function je(R){Mt(R),U.remove(R)}function Mt(R){const V=U.get(R).programs;V!==void 0&&(V.forEach(function(K){q.releaseProgram(K)}),R.isShaderMaterial&&q.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,K,J,z,he){V===null&&(V=it);const Ee=z.isMesh&&z.matrixWorld.determinant()<0,Ne=Vm(R,V,K,J,z);T.setMaterial(J,Ee);let Pe=K.index,Ge=1;if(J.wireframe===!0){if(Pe=I.getWireframeAttribute(K),Pe===void 0)return;Ge=2}const We=K.drawRange,ke=K.attributes.position;let tt=We.start*Ge,pt=(We.start+We.count)*Ge;he!==null&&(tt=Math.max(tt,he.start*Ge),pt=Math.min(pt,(he.start+he.count)*Ge)),Pe!==null?(tt=Math.max(tt,0),pt=Math.min(pt,Pe.count)):ke!=null&&(tt=Math.max(tt,0),pt=Math.min(pt,ke.count));const Rt=pt-tt;if(Rt<0||Rt===1/0)return;ze.setup(z,J,Ne,K,Pe);let Pt,rt=Ie;if(Pe!==null&&(Pt=m.get(Pe),rt=De,rt.setIndex(Pt)),z.isMesh)J.wireframe===!0?(T.setLineWidth(J.wireframeLinewidth*F()),rt.setMode(b.LINES)):rt.setMode(b.TRIANGLES);else if(z.isLine){let He=J.linewidth;He===void 0&&(He=1),T.setLineWidth(He*F()),z.isLineSegments?rt.setMode(b.LINES):z.isLineLoop?rt.setMode(b.LINE_LOOP):rt.setMode(b.LINE_STRIP)}else z.isPoints?rt.setMode(b.POINTS):z.isSprite&&rt.setMode(b.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)rs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),rt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))rt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const He=z._multiDrawStarts,Ht=z._multiDrawCounts,lt=z._multiDrawCount,Dn=Pe?m.get(Pe).bytesPerElement:1,Cr=U.get(J).currentProgram.getUniforms();for(let hn=0;hn<lt;hn++)Cr.setValue(b,"_gl_DrawID",hn),rt.render(He[hn]/Dn,Ht[hn])}else if(z.isInstancedMesh)rt.renderInstances(tt,Rt,z.count);else if(K.isInstancedBufferGeometry){const He=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ht=Math.min(K.instanceCount,He);rt.renderInstances(tt,Rt,Ht)}else rt.render(tt,Rt)};function ht(R,V,K){R.transparent===!0&&R.side===Jn&&R.forceSinglePass===!1?(R.side=an,R.needsUpdate=!0,Ao(R,V,K),R.side=Ki,R.needsUpdate=!0,Ao(R,V,K),R.side=Jn):Ao(R,V,K)}this.compile=function(R,V,K=null){K===null&&(K=R),d=ce.get(K),d.init(V),M.push(d),K.traverseVisible(function(z){z.isLight&&z.layers.test(V.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),R!==K&&R.traverseVisible(function(z){z.isLight&&z.layers.test(V.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights();const J=new Set;return R.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const he=z.material;if(he)if(Array.isArray(he))for(let Ee=0;Ee<he.length;Ee++){const Ne=he[Ee];ht(Ne,K,z),J.add(Ne)}else ht(he,K,z),J.add(he)}),d=M.pop(),J},this.compileAsync=function(R,V,K=null){const J=this.compile(R,V,K);return new Promise(z=>{function he(){if(J.forEach(function(Ee){U.get(Ee).currentProgram.isReady()&&J.delete(Ee)}),J.size===0){z(R);return}setTimeout(he,10)}Z.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let In=null;function ci(R){In&&In(R)}function Gu(){ir.stop()}function Wu(){ir.start()}const ir=new ym;ir.setAnimationLoop(ci),typeof self<"u"&&ir.setContext(self),this.setAnimationLoop=function(R){In=R,ue.setAnimationLoop(R),R===null?ir.stop():ir.start()},ue.addEventListener("sessionstart",Gu),ue.addEventListener("sessionend",Wu),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(V),V=ue.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,V,N),d=ce.get(R,M.length),d.init(V),M.push(d),be.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),ne.setFromProjectionMatrix(be),ye=this.localClippingEnabled,fe=xe.init(this.clippingPlanes,ye),g=_e.get(R,S.length),g.init(),S.push(g),ue.enabled===!0&&ue.isPresenting===!0){const he=_.xr.getDepthSensingMesh();he!==null&&$a(he,V,-1/0,_.sortObjects)}$a(R,V,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(le,me),D=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,D&&oe.addToRenderList(g,R),this.info.render.frame++,fe===!0&&xe.beginShadows();const K=d.state.shadowsArray;Ae.render(K,R,V),fe===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=g.opaque,z=g.transmissive;if(d.setupLights(),V.isArrayCamera){const he=V.cameras;if(z.length>0)for(let Ee=0,Ne=he.length;Ee<Ne;Ee++){const Pe=he[Ee];ju(J,z,R,Pe)}D&&oe.render(R);for(let Ee=0,Ne=he.length;Ee<Ne;Ee++){const Pe=he[Ee];Xu(g,R,Pe,Pe.viewport)}}else z.length>0&&ju(J,z,R,V),D&&oe.render(R),Xu(g,R,V);N!==null&&w===0&&(B.updateMultisampleRenderTarget(N),B.updateRenderTargetMipmap(N)),R.isScene===!0&&R.onAfterRender(_,R,V),ze.resetDefaultState(),A=-1,y=null,M.pop(),M.length>0?(d=M[M.length-1],fe===!0&&xe.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function $a(R,V,K,J){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)K=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)d.pushLight(R),R.castShadow&&d.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ne.intersectsSprite(R)){J&&Oe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(be);const Ee=H.update(R),Ne=R.material;Ne.visible&&g.push(R,Ee,Ne,K,Oe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ne.intersectsObject(R))){const Ee=H.update(R),Ne=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Oe.copy(R.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Oe.copy(Ee.boundingSphere.center)),Oe.applyMatrix4(R.matrixWorld).applyMatrix4(be)),Array.isArray(Ne)){const Pe=Ee.groups;for(let Ge=0,We=Pe.length;Ge<We;Ge++){const ke=Pe[Ge],tt=Ne[ke.materialIndex];tt&&tt.visible&&g.push(R,Ee,tt,K,Oe.z,ke)}}else Ne.visible&&g.push(R,Ee,Ne,K,Oe.z,null)}}const he=R.children;for(let Ee=0,Ne=he.length;Ee<Ne;Ee++)$a(he[Ee],V,K,J)}function Xu(R,V,K,J){const z=R.opaque,he=R.transmissive,Ee=R.transparent;d.setupLightsView(K),fe===!0&&xe.setGlobalState(_.clippingPlanes,K),J&&T.viewport(O.copy(J)),z.length>0&&To(z,V,K),he.length>0&&To(he,V,K),Ee.length>0&&To(Ee,V,K),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function ju(R,V,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[J.id]===void 0&&(d.state.transmissionRenderTarget[J.id]=new Ar(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?xo:Ci,minFilter:Mr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const he=d.state.transmissionRenderTarget[J.id],Ee=J.viewport||O;he.setSize(Ee.z*_.transmissionResolutionScale,Ee.w*_.transmissionResolutionScale);const Ne=_.getRenderTarget();_.setRenderTarget(he),_.getClearColor(te),ie=_.getClearAlpha(),ie<1&&_.setClearColor(16777215,.5),_.clear(),D&&oe.render(K);const Pe=_.toneMapping;_.toneMapping=$i;const Ge=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),d.setupLightsView(J),fe===!0&&xe.setGlobalState(_.clippingPlanes,J),To(R,K,J),B.updateMultisampleRenderTarget(he),B.updateRenderTargetMipmap(he),Z.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let ke=0,tt=V.length;ke<tt;ke++){const pt=V[ke],Rt=pt.object,Pt=pt.geometry,rt=pt.material,He=pt.group;if(rt.side===Jn&&Rt.layers.test(J.layers)){const Ht=rt.side;rt.side=an,rt.needsUpdate=!0,qu(Rt,K,J,Pt,rt,He),rt.side=Ht,rt.needsUpdate=!0,We=!0}}We===!0&&(B.updateMultisampleRenderTarget(he),B.updateRenderTargetMipmap(he))}_.setRenderTarget(Ne),_.setClearColor(te,ie),Ge!==void 0&&(J.viewport=Ge),_.toneMapping=Pe}function To(R,V,K){const J=V.isScene===!0?V.overrideMaterial:null;for(let z=0,he=R.length;z<he;z++){const Ee=R[z],Ne=Ee.object,Pe=Ee.geometry,Ge=Ee.group;let We=Ee.material;We.allowOverride===!0&&J!==null&&(We=J),Ne.layers.test(K.layers)&&qu(Ne,V,K,Pe,We,Ge)}}function qu(R,V,K,J,z,he){R.onBeforeRender(_,V,K,J,z,he),R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),z.onBeforeRender(_,V,K,J,R,he),z.transparent===!0&&z.side===Jn&&z.forceSinglePass===!1?(z.side=an,z.needsUpdate=!0,_.renderBufferDirect(K,V,J,z,R,he),z.side=Ki,z.needsUpdate=!0,_.renderBufferDirect(K,V,J,z,R,he),z.side=Jn):_.renderBufferDirect(K,V,J,z,R,he),R.onAfterRender(_,V,K,J,z,he)}function Ao(R,V,K){V.isScene!==!0&&(V=it);const J=U.get(R),z=d.state.lights,he=d.state.shadowsArray,Ee=z.state.version,Ne=q.getParameters(R,z.state,he,V,K),Pe=q.getProgramCacheKey(Ne);let Ge=J.programs;J.environment=R.isMeshStandardMaterial?V.environment:null,J.fog=V.fog,J.envMap=(R.isMeshStandardMaterial?E:ae).get(R.envMap||J.environment),J.envMapRotation=J.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,Ge===void 0&&(R.addEventListener("dispose",Ue),Ge=new Map,J.programs=Ge);let We=Ge.get(Pe);if(We!==void 0){if(J.currentProgram===We&&J.lightsStateVersion===Ee)return Yu(R,Ne),We}else Ne.uniforms=q.getUniforms(R),R.onBeforeCompile(Ne,_),We=q.acquireProgram(Ne,Pe),Ge.set(Pe,We),J.uniforms=Ne.uniforms;const ke=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ke.clippingPlanes=xe.uniform),Yu(R,Ne),J.needsLights=Gm(R),J.lightsStateVersion=Ee,J.needsLights&&(ke.ambientLightColor.value=z.state.ambient,ke.lightProbe.value=z.state.probe,ke.directionalLights.value=z.state.directional,ke.directionalLightShadows.value=z.state.directionalShadow,ke.spotLights.value=z.state.spot,ke.spotLightShadows.value=z.state.spotShadow,ke.rectAreaLights.value=z.state.rectArea,ke.ltc_1.value=z.state.rectAreaLTC1,ke.ltc_2.value=z.state.rectAreaLTC2,ke.pointLights.value=z.state.point,ke.pointLightShadows.value=z.state.pointShadow,ke.hemisphereLights.value=z.state.hemi,ke.directionalShadowMap.value=z.state.directionalShadowMap,ke.directionalShadowMatrix.value=z.state.directionalShadowMatrix,ke.spotShadowMap.value=z.state.spotShadowMap,ke.spotLightMatrix.value=z.state.spotLightMatrix,ke.spotLightMap.value=z.state.spotLightMap,ke.pointShadowMap.value=z.state.pointShadowMap,ke.pointShadowMatrix.value=z.state.pointShadowMatrix),J.currentProgram=We,J.uniformsList=null,We}function $u(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=pa.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function Yu(R,V){const K=U.get(R);K.outputColorSpace=V.outputColorSpace,K.batching=V.batching,K.batchingColor=V.batchingColor,K.instancing=V.instancing,K.instancingColor=V.instancingColor,K.instancingMorph=V.instancingMorph,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function Vm(R,V,K,J,z){V.isScene!==!0&&(V=it),B.resetTextureUnits();const he=V.fog,Ee=J.isMeshStandardMaterial?V.environment:null,Ne=N===null?_.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:hs,Pe=(J.isMeshStandardMaterial?E:ae).get(J.envMap||Ee),Ge=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,We=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),ke=!!K.morphAttributes.position,tt=!!K.morphAttributes.normal,pt=!!K.morphAttributes.color;let Rt=$i;J.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Rt=_.toneMapping);const Pt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,rt=Pt!==void 0?Pt.length:0,He=U.get(J),Ht=d.state.lights;if(fe===!0&&(ye===!0||R!==y)){const Kt=R===y&&J.id===A;xe.setState(J,R,Kt)}let lt=!1;J.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Ht.state.version||He.outputColorSpace!==Ne||z.isBatchedMesh&&He.batching===!1||!z.isBatchedMesh&&He.batching===!0||z.isBatchedMesh&&He.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&He.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&He.instancing===!1||!z.isInstancedMesh&&He.instancing===!0||z.isSkinnedMesh&&He.skinning===!1||!z.isSkinnedMesh&&He.skinning===!0||z.isInstancedMesh&&He.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&He.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&He.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&He.instancingMorph===!1&&z.morphTexture!==null||He.envMap!==Pe||J.fog===!0&&He.fog!==he||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==xe.numPlanes||He.numIntersection!==xe.numIntersection)||He.vertexAlphas!==Ge||He.vertexTangents!==We||He.morphTargets!==ke||He.morphNormals!==tt||He.morphColors!==pt||He.toneMapping!==Rt||He.morphTargetsCount!==rt)&&(lt=!0):(lt=!0,He.__version=J.version);let Dn=He.currentProgram;lt===!0&&(Dn=Ao(J,V,z));let Cr=!1,hn=!1,ys=!1;const wt=Dn.getUniforms(),En=He.uniforms;if(T.useProgram(Dn.program)&&(Cr=!0,hn=!0,ys=!0),J.id!==A&&(A=J.id,hn=!0),Cr||y!==R){T.buffers.depth.getReversed()?(pe.copy(R.projectionMatrix),US(pe),NS(pe),wt.setValue(b,"projectionMatrix",pe)):wt.setValue(b,"projectionMatrix",R.projectionMatrix),wt.setValue(b,"viewMatrix",R.matrixWorldInverse);const rn=wt.map.cameraPosition;rn!==void 0&&rn.setValue(b,Ke.setFromMatrixPosition(R.matrixWorld)),ee.logarithmicDepthBuffer&&wt.setValue(b,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&wt.setValue(b,"isOrthographic",R.isOrthographicCamera===!0),y!==R&&(y=R,hn=!0,ys=!0)}if(z.isSkinnedMesh){wt.setOptional(b,z,"bindMatrix"),wt.setOptional(b,z,"bindMatrixInverse");const Kt=z.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),wt.setValue(b,"boneTexture",Kt.boneTexture,B))}z.isBatchedMesh&&(wt.setOptional(b,z,"batchingTexture"),wt.setValue(b,"batchingTexture",z._matricesTexture,B),wt.setOptional(b,z,"batchingIdTexture"),wt.setValue(b,"batchingIdTexture",z._indirectTexture,B),wt.setOptional(b,z,"batchingColorTexture"),z._colorsTexture!==null&&wt.setValue(b,"batchingColorTexture",z._colorsTexture,B));const Mn=K.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&we.update(z,K,Dn),(hn||He.receiveShadow!==z.receiveShadow)&&(He.receiveShadow=z.receiveShadow,wt.setValue(b,"receiveShadow",z.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(En.envMap.value=Pe,En.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&V.environment!==null&&(En.envMapIntensity.value=V.environmentIntensity),hn&&(wt.setValue(b,"toneMappingExposure",_.toneMappingExposure),He.needsLights&&zm(En,ys),he&&J.fog===!0&&X.refreshFogUniforms(En,he),X.refreshMaterialUniforms(En,J,j,Q,d.state.transmissionRenderTarget[R.id]),pa.upload(b,$u(He),En,B)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(pa.upload(b,$u(He),En,B),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&wt.setValue(b,"center",z.center),wt.setValue(b,"modelViewMatrix",z.modelViewMatrix),wt.setValue(b,"normalMatrix",z.normalMatrix),wt.setValue(b,"modelMatrix",z.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Kt=J.uniformsGroups;for(let rn=0,Ya=Kt.length;rn<Ya;rn++){const rr=Kt[rn];k.update(rr,Dn),k.bind(rr,Dn)}}return Dn}function zm(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function Gm(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(R,V,K){const J=U.get(R);J.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),U.get(R.texture).__webglTexture=V,U.get(R.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:K,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,V){const K=U.get(R);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0};const Wm=b.createFramebuffer();this.setRenderTarget=function(R,V=0,K=0){N=R,P=V,w=K;let J=!0,z=null,he=!1,Ee=!1;if(R){const Pe=U.get(R);if(Pe.__useDefaultFramebuffer!==void 0)T.bindFramebuffer(b.FRAMEBUFFER,null),J=!1;else if(Pe.__webglFramebuffer===void 0)B.setupRenderTarget(R);else if(Pe.__hasExternalTextures)B.rebindTextures(R,U.get(R.texture).__webglTexture,U.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ke=R.depthTexture;if(Pe.__boundDepthTexture!==ke){if(ke!==null&&U.has(ke)&&(R.width!==ke.image.width||R.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(R)}}const Ge=R.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ee=!0);const We=U.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(We[V])?z=We[V][K]:z=We[V],he=!0):R.samples>0&&B.useMultisampledRTT(R)===!1?z=U.get(R).__webglMultisampledFramebuffer:Array.isArray(We)?z=We[K]:z=We,O.copy(R.viewport),G.copy(R.scissor),W=R.scissorTest}else O.copy(Me).multiplyScalar(j).floor(),G.copy(Fe).multiplyScalar(j).floor(),W=Je;if(K!==0&&(z=Wm),T.bindFramebuffer(b.FRAMEBUFFER,z)&&J&&T.drawBuffers(R,z),T.viewport(O),T.scissor(G),T.setScissorTest(W),he){const Pe=U.get(R.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+V,Pe.__webglTexture,K)}else if(Ee){const Pe=U.get(R.texture),Ge=V;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Pe.__webglTexture,K,Ge)}else if(R!==null&&K!==0){const Pe=U.get(R.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Pe.__webglTexture,K)}A=-1},this.readRenderTargetPixels=function(R,V,K,J,z,he,Ee,Ne=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=U.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ee!==void 0&&(Pe=Pe[Ee]),Pe){T.bindFramebuffer(b.FRAMEBUFFER,Pe);try{const Ge=R.textures[Ne],We=Ge.format,ke=Ge.type;if(!ee.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-J&&K>=0&&K<=R.height-z&&(R.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Ne),b.readPixels(V,K,J,z,ge.convert(We),ge.convert(ke),he))}finally{const Ge=N!==null?U.get(N).__webglFramebuffer:null;T.bindFramebuffer(b.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(R,V,K,J,z,he,Ee,Ne=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=U.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ee!==void 0&&(Pe=Pe[Ee]),Pe)if(V>=0&&V<=R.width-J&&K>=0&&K<=R.height-z){T.bindFramebuffer(b.FRAMEBUFFER,Pe);const Ge=R.textures[Ne],We=Ge.format,ke=Ge.type;if(!ee.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,tt),b.bufferData(b.PIXEL_PACK_BUFFER,he.byteLength,b.STREAM_READ),R.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Ne),b.readPixels(V,K,J,z,ge.convert(We),ge.convert(ke),0);const pt=N!==null?U.get(N).__webglFramebuffer:null;T.bindFramebuffer(b.FRAMEBUFFER,pt);const Rt=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await DS(b,Rt,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,tt),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,he),b.deleteBuffer(tt),b.deleteSync(Rt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,V=null,K=0){const J=Math.pow(2,-K),z=Math.floor(R.image.width*J),he=Math.floor(R.image.height*J),Ee=V!==null?V.x:0,Ne=V!==null?V.y:0;B.setTexture2D(R,0),b.copyTexSubImage2D(b.TEXTURE_2D,K,0,0,Ee,Ne,z,he),T.unbindTexture()};const Xm=b.createFramebuffer(),jm=b.createFramebuffer();this.copyTextureToTexture=function(R,V,K=null,J=null,z=0,he=null){he===null&&(z!==0?(rs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=z,z=0):he=0);let Ee,Ne,Pe,Ge,We,ke,tt,pt,Rt;const Pt=R.isCompressedTexture?R.mipmaps[he]:R.image;if(K!==null)Ee=K.max.x-K.min.x,Ne=K.max.y-K.min.y,Pe=K.isBox3?K.max.z-K.min.z:1,Ge=K.min.x,We=K.min.y,ke=K.isBox3?K.min.z:0;else{const Mn=Math.pow(2,-z);Ee=Math.floor(Pt.width*Mn),Ne=Math.floor(Pt.height*Mn),R.isDataArrayTexture?Pe=Pt.depth:R.isData3DTexture?Pe=Math.floor(Pt.depth*Mn):Pe=1,Ge=0,We=0,ke=0}J!==null?(tt=J.x,pt=J.y,Rt=J.z):(tt=0,pt=0,Rt=0);const rt=ge.convert(V.format),He=ge.convert(V.type);let Ht;V.isData3DTexture?(B.setTexture3D(V,0),Ht=b.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(B.setTexture2DArray(V,0),Ht=b.TEXTURE_2D_ARRAY):(B.setTexture2D(V,0),Ht=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,V.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,V.unpackAlignment);const lt=b.getParameter(b.UNPACK_ROW_LENGTH),Dn=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Cr=b.getParameter(b.UNPACK_SKIP_PIXELS),hn=b.getParameter(b.UNPACK_SKIP_ROWS),ys=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,Pt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Pt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ge),b.pixelStorei(b.UNPACK_SKIP_ROWS,We),b.pixelStorei(b.UNPACK_SKIP_IMAGES,ke);const wt=R.isDataArrayTexture||R.isData3DTexture,En=V.isDataArrayTexture||V.isData3DTexture;if(R.isDepthTexture){const Mn=U.get(R),Kt=U.get(V),rn=U.get(Mn.__renderTarget),Ya=U.get(Kt.__renderTarget);T.bindFramebuffer(b.READ_FRAMEBUFFER,rn.__webglFramebuffer),T.bindFramebuffer(b.DRAW_FRAMEBUFFER,Ya.__webglFramebuffer);for(let rr=0;rr<Pe;rr++)wt&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,U.get(R).__webglTexture,z,ke+rr),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,U.get(V).__webglTexture,he,Rt+rr)),b.blitFramebuffer(Ge,We,Ee,Ne,tt,pt,Ee,Ne,b.DEPTH_BUFFER_BIT,b.NEAREST);T.bindFramebuffer(b.READ_FRAMEBUFFER,null),T.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(z!==0||R.isRenderTargetTexture||U.has(R)){const Mn=U.get(R),Kt=U.get(V);T.bindFramebuffer(b.READ_FRAMEBUFFER,Xm),T.bindFramebuffer(b.DRAW_FRAMEBUFFER,jm);for(let rn=0;rn<Pe;rn++)wt?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Mn.__webglTexture,z,ke+rn):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Mn.__webglTexture,z),En?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Kt.__webglTexture,he,Rt+rn):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Kt.__webglTexture,he),z!==0?b.blitFramebuffer(Ge,We,Ee,Ne,tt,pt,Ee,Ne,b.COLOR_BUFFER_BIT,b.NEAREST):En?b.copyTexSubImage3D(Ht,he,tt,pt,Rt+rn,Ge,We,Ee,Ne):b.copyTexSubImage2D(Ht,he,tt,pt,Ge,We,Ee,Ne);T.bindFramebuffer(b.READ_FRAMEBUFFER,null),T.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else En?R.isDataTexture||R.isData3DTexture?b.texSubImage3D(Ht,he,tt,pt,Rt,Ee,Ne,Pe,rt,He,Pt.data):V.isCompressedArrayTexture?b.compressedTexSubImage3D(Ht,he,tt,pt,Rt,Ee,Ne,Pe,rt,Pt.data):b.texSubImage3D(Ht,he,tt,pt,Rt,Ee,Ne,Pe,rt,He,Pt):R.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,he,tt,pt,Ee,Ne,rt,He,Pt.data):R.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,he,tt,pt,Pt.width,Pt.height,rt,Pt.data):b.texSubImage2D(b.TEXTURE_2D,he,tt,pt,Ee,Ne,rt,He,Pt);b.pixelStorei(b.UNPACK_ROW_LENGTH,lt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Dn),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Cr),b.pixelStorei(b.UNPACK_SKIP_ROWS,hn),b.pixelStorei(b.UNPACK_SKIP_IMAGES,ys),he===0&&V.generateMipmaps&&b.generateMipmap(Ht),T.unbindTexture()},this.copyTextureToTexture3D=function(R,V,K=null,J=null,z=0){return rs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,V,K,J,z)},this.initRenderTarget=function(R){U.get(R).__webglFramebuffer===void 0&&B.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?B.setTextureCube(R,0):R.isData3DTexture?B.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?B.setTexture2DArray(R,0):B.setTexture2D(R,0),T.unbindTexture()},this.resetState=function(){P=0,w=0,N=null,T.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),n.unpackColorSpace=st._getUnpackColorSpace()}}var sn=(t=>(t.LANGUAGE="language",t.TOOL="tool",t.NONE="none",t))(sn||{});const tA=()=>({scale:300,colorTextureScale:1,threshold:.5,thicknessTop:.01,thicknessBot:.85,curvature:3,displacementStrength:.01,colors:[{color:new Y(0,0,0),stamp:0},{color:new Y(.9,.5,.05),stamp:1}],nbInstances:30,totalHeight:.3,rotationalForce:new nt(0,0),applyFog:!1,uvOffset:new nt(0,0),useColorTexture:!1});function nA(t){const{furMaterial:e,properties:n}=t;for(const i in n)e.uniforms[i]&&(e.uniforms[i].value=n[i])}const iA=`uniform sampler2D noiseTexture;
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
`,rA=`varying vec2 fragUV;

void main() {
    fragUV = uv;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,sA="/assets/base_256-hilLT1wI.png";function oA(t,e,n){const i=new Du(n,e,t,255),r=new Li({fragmentShader:iA,vertexShader:rA,transparent:!0,side:Jn,uniforms:{noiseTexture:{value:new mE().load(sA,s=>{s.wrapS=ro,s.wrapT=ro})},delta:{value:0}}});return new ei(i,r)}function aA(t){let e,n,i;const r=bt(0);let s=performance.now();const o=[],a=bt(tA()),l=new nt,c=[],u=new nt(0,0);function f(S){const M=new nt(0,S=="front"?1:-1);u.add(M.multiplyScalar(1)),l.setX(S=="front"?.1:-.1)}function h(S,M,_){const C=M-S;return S+C*_}function p(){r.value=(performance.now()-s)/1e3,s=performance.now(),a.value.uvOffset.y+=u.y*r.value,a.value.uvOffset.y<0?a.value.uvOffset.y+=1:a.value.uvOffset.y>1&&(a.value.uvOffset.y-=1),u.y=h(u.y,0,r.value*10),g(r.value,l),l.setX(0),l.setY(0),o.forEach(S=>{nA(S)}),c.forEach(S=>{S.uniforms.delta.value+=r.value*.01}),e&&n&&(i==null||i.render(e,n))}function v(S,M){e=new aE,n=new An(75,S.width/S.height,.1,1e3),i=new eA({canvas:S,context:M}),i.setSize(S.width,S.height),i.setAnimationLoop(p),i.setClearColor(new mt(31/255,71/255,59/255))}function x(){n==null||n.translateZ(1);const S=oA(6,1.5,.1);S.translateZ(-3),S.translateX(-4),S.translateY(3),S.rotateY(LS.degToRad(90)),c.push(S.material),e==null||e.add(S)}function g(S,M){o.forEach(_=>{_.properties.rotationalForce=_.furPhysic.update(S,M)})}function d(S,M){n&&(n.aspect=S/M,n.updateProjectionMatrix(),i==null||i.setSize(S,M))}return{canva:t,delta:r,camera:n,movePlaine:f,initRender:v,initScene:x,resize:d}}const lA=At({__name:"SceneComponent",setup(t,{expose:e}){const n=bt(null),{movePlaine:i,initRender:r,initScene:s,resize:o}=aA(n);return Wn(()=>{if(window.addEventListener("resize",()=>{n.value&&(n.value.width=window.innerWidth,n.value.height=window.innerHeight,o(window.innerWidth,window.innerHeight))}),n.value instanceof HTMLCanvasElement){n.value.width=window.innerWidth,n.value.height=window.innerHeight;const a=n.value.getContext("webgl2");if(a)r(n.value,a),s();else throw new Error("WebGL2 context not available")}else console.error("Canvas reference is not an HTMLCanvasElement")}),e({movePlaine:i}),(a,l)=>(Be(),$e("canvas",{ref_key:"canva",ref:n,class:"fullscreen-canvas"},null,512))}}),cA=Sn(lA,[["__scopeId","data-v-e8dd8a5f"]]),uA={class:"tag"},fA=At({__name:"TechnologieTagComponent",props:{name:{}},setup(t){return(e,n)=>(Be(),$e("div",uA,[Ce("h4",null,dt(t.name),1)]))}}),Rm=Sn(fA,[["__scopeId","data-v-74bbfa86"]]);function Cm(t){const e=t.scrollWidth>t.clientWidth,n=t.scrollHeight>t.clientHeight;return e||n}function St(t){return t.charAt(0).toUpperCase()+t.slice(1)}const dA={class:"row"},hA={class:"project_context"},pA={class:"column end-align project_technologies"},mA={class:"column round"},gA={class:"technologies_list"},_A={class:"project_links"},vA=["href"],xA={class:"other"},ja=At({__name:"ProjectSummary",props:{title:{},context:{},technologies:{},links:{}},setup(t){const{t:e}=dn(),n=bt(null);return Wn(()=>{n.value&&Cm(n.value)&&n.value.addEventListener("wheel",i=>{i.stopPropagation()})}),(i,r)=>{var s,o;return Be(),$e("div",{class:"glass item project_whole column",ref_key:"projectSummary",ref:n},[Ce("div",dA,[Ce("h1",null,dt(t.title),1),Ce("div",hA,[Ce("h2",null,dt(Te(St)(Te(e)("titles.context"))),1),Ce("p",null,dt(t.context),1)]),Ce("div",pA,[Ce("div",mA,[Ce("h2",null,dt(Te(St)(Te(e)("titles.technologies"))),1),Ce("div",gA,[(Be(!0),$e(Et,null,zn(t.technologies,a=>(Be(),un(Rm,{key:a,name:a},null,8,["name"]))),128))]),Ce("div",_A,[Ce("h2",null,dt(Te(St)(Te(e)("titles.links"))),1),Ce("ul",null,[(Be(!0),$e(Et,null,zn(t.links,a=>(Be(),$e("li",{key:a.url},[Ce("a",{href:a.url},dt(a.name),9,vA)]))),128))])])])])]),r[0]||(r[0]=Ce("div",{class:"separator_h"},null,-1)),Ce("div",xA,[(Be(!0),$e(Et,null,zn(((o=(s=i.$slots).default)==null?void 0:o.call(s))??[],(a,l)=>(Be(),un(go(a),{key:l}))),128))])],512)}}}),SA={class:"project-section row"},EA=["src","alt"],MA={class:"column"},yA=["src","alt"],si=At({__name:"ProjectSection",props:{title:{},desc:{},imagePath:{},imageAlt:{},imageFirst:{type:Boolean}},setup(t){return(e,n)=>{var i,r;return Be(),$e("div",SA,[t.imageFirst?(Be(),$e("img",{key:0,class:"round",src:t.imagePath,alt:t.imageAlt},null,8,EA)):ji("",!0),Ce("div",MA,[Ce("h2",null,dt(t.title),1),Ce("p",null,[du(dt(t.desc)+" ",1),(Be(!0),$e(Et,null,zn(((r=(i=e.$slots).default)==null?void 0:r.call(i))??[],(s,o)=>(Be(),un(go(s),{key:o}))),128))])]),t.imageFirst?ji("",!0):(Be(),$e("img",{key:1,class:"round",src:t.imagePath,alt:t.imageAlt},null,8,yA))])}}}),bA=At({__name:"ProjectRendering",setup(t){const{t:e}=dn();return(n,i)=>(Be(),un(ja,{title:Te(St)(Te(e)("projects.rendering.title")),context:Te(e)("projects.rendering.context"),technologies:["C++","OpenGL","GLSL","ImGUI"],links:[{url:"https://github.com/TER-VOX/cloud",name:"Volumetric clouds"},{url:"https://github.com/Crhonopost/Ray-tracing",name:"Ray tracing"}]},{default:Zi(()=>[Ve(si,{title:"Ray tracing",desc:Te(e)("projects.rendering.ray_tracing_desc"),"image-path":"/projects/raytracing/refraction.png","image-alt":"Refraction test","image-first":!1},null,8,["desc"]),Ve(si,{title:"Volume rendering",desc:Te(e)("projects.rendering.volume_desc"),"image-path":"/projects/TER/moving_cloud.gif","image-alt":"Animated cloud","image-first":!0},null,8,["desc"])]),_:1},8,["title","context"]))}}),TA={class:"caroussel"},AA=["src","alt"],wA=At({__name:"CarousselComponent",props:{images:{}},setup(t){return(e,n)=>(Be(),$e("div",TA,[(Be(!0),$e(Et,null,zn(t.images,(i,r)=>(Be(),$e("div",{key:r,class:"caroussel-item column"},[Ce("img",{src:i.path,alt:i.desc,class:"round"},null,8,AA),Ce("p",null,dt(i.desc),1)]))),128))]))}}),RA=Sn(wA,[["__scopeId","data-v-904872f5"]]),CA={id:"list"},oh=At({__name:"ProjectGameEngine",setup(t){const{t:e,tm:n}=dn(),i=()=>n("projects.engine.features_list");return(r,s)=>(Be(),un(ja,{title:"Star Engine",context:Te(e)("projects.engine.context"),technologies:["C++","OpenGL","GLSL","ImGUI"],links:[{url:"https://github.com/Crhonopost/Star-engine",name:"Github"}]},{default:Zi(()=>[Ve(si,{title:Te(St)(Te(e)("titles.learning")),desc:Te(e)("projects.engine.learnings"),"image-first":!1,"image-path":"./projects/gameengine/main_scene.png","image-alt":"Main menu of the game engine"},null,8,["title","desc"]),Ve(RA,{images:[{path:"./projects/gameengine/init.gif",desc:Te(e)("projects.engine.img_desc_0")},{path:"./projects/gameengine/moving.gif",desc:Te(e)("projects.engine.img_desc_1")}],class:"caroussel"},null,8,["images"]),Ve(si,{title:Te(St)(Te(e)("titles.next_steps")),desc:Te(e)("projects.engine.next_steps"),"image-first":!0,"image-path":"./projects/gameengine/new_editor.png","image-alt":"New menu with a correct scene structure"},null,8,["title","desc"]),Ce("div",CA,[Ce("h3",null,dt(Te(e)("projects.engine.features_list_title")),1),Ce("ul",null,[(Be(!0),$e(Et,null,zn(i(),(o,a)=>(Be(),$e("li",{key:a},dt(o),1))),128))])])]),_:1},8,["context"]))}}),PA={id:"apropos"},LA={class:"glass",id:"apropos-text"},IA=At({__name:"AproposComponent",setup(t){const{t:e}=dn();return(n,i)=>(Be(),$e("div",PA,[Ce("div",LA,[Ce("h1",null,dt(Te(St)(Te(e)("titles.about"))),1),Ce("p",null,dt(Te(e)("contents.about")),1)])]))}}),DA=Sn(IA,[["__scopeId","data-v-bb832df9"]]),UA={class:"glass skill"},NA=["src","alt","title"],OA=At({__name:"SkillComponent",props:{name:{},icon:{},anotation:{},isWeb:{type:Boolean}},setup(t){return(e,n)=>(Be(),$e("div",UA,[Ce("img",{src:t.icon,alt:t.name,title:t.name,class:"skill-icon"},null,8,NA)]))}}),ah=Sn(OA,[["__scopeId","data-v-904f9580"]]),FA={id:"page"},BA={class:"skill-set-header"},kA={id:"skill-set-container"},HA={class:"skill-set"},VA={class:"skill-set"},zA=At({__name:"SkillSetComponent",props:{skills:{}},setup(t){const{t:e}=dn(),n=bt(!0);bt(sn.NONE);const i=bt(null),r=bt(1),s=a=>r.value<2?"":Math.floor(a/r.value)%2===1?"offset-row":"",o=()=>{if(i.value){const l=getComputedStyle(i.value).getPropertyValue("grid-template-columns").split(" ").length;r.value=l}};return Wn(()=>{Yr(o),window.addEventListener("resize",o)}),(a,l)=>(Be(),$e("div",FA,[Ce("div",BA,[Ce("h2",null,dt(Te(St)(Te(e)("titles.skills"))),1),Ce("p",null,dt(Te(St)(Te(e)("descriptions.skills"))),1)]),Ce("div",kA,[Ce("div",HA,[(Be(!0),$e(Et,null,zn(t.skills.filter(c=>!c.isWeb),(c,u)=>(Be(),$e("div",{key:c.name,class:Hn(s(u))},[Ve(ah,{name:c.name,icon:c.icon,anotation:c.anotation,"is-web":c.isWeb},null,8,["name","icon","anotation","is-web"])],2))),128))]),Bg(Ce("div",VA,[(Be(!0),$e(Et,null,zn(t.skills.filter(c=>c.isWeb),(c,u)=>(Be(),$e("div",{key:c.name,class:Hn(s(u))},[Ve(ah,{name:c.name,icon:c.icon,anotation:c.anotation,"is-web":c.isWeb},null,8,["name","icon","anotation","is-web"])],2))),128))],512),[[K_,n.value]])])]))}}),GA=Sn(zA,[["__scopeId","data-v-d971d55a"]]),WA={class:"card column"},XA=["src"],jA={class:"technologies"},qA={class:"right-offset"},$A={href:"#"},YA=At({__name:"ProjectShortComponent",props:{title:{},description:{},technologies:{},illustration:{}},setup(t){const{t:e}=dn();return(n,i)=>(Be(),$e("div",WA,[Ce("h2",null,dt(t.title),1),Ce("img",{src:t.illustration,alt:"Project Illustration"},null,8,XA),Ce("p",null,dt(t.description),1),Ce("div",jA,[(Be(!0),$e(Et,null,zn(t.technologies,r=>(Be(),un(Rm,{class:"tag",key:r,name:r},null,8,["name"]))),128))]),Ce("div",qA,[Ce("a",$A,dt(Te(St)(Te(e)("viewMore"))),1)])]))}}),KA=Sn(YA,[["__scopeId","data-v-8e0c5c04"]]),ZA={id:"page"},JA=At({__name:"ProjectShorts",emits:["projectClicked"],setup(t,{emit:e}){const{t:n}=dn(),i=e,r=[{title:()=>"Shell texturing",description:()=>n("projects.shell.quickDesc"),technologies:["WebGL","Typescript","Three.js"],illustration:"./projects/shelltexturing/fur.png"},{title:()=>St(n("projects.engine.title")),description:()=>n("projects.engine.quickDesc"),technologies:["OpenGL","C++"],illustration:"./projects/gameengine/illu_game.png"},{title:()=>St(n("projects.rendering.title")),description:()=>n("projects.rendering.quickDesc"),technologies:["OpenGL","C++"],illustration:"/projects/TER/cloud-around.gif"},{title:()=>St(n("projects.games.title")),description:()=>n("projects.games.quickDesc"),technologies:["Godot","Gdscript","C#"],illustration:"./projects/games/what.gif"},{title:()=>St(n("projects.web.title")),description:()=>n("projects.web.quickDesc"),technologies:["Vue.js","Node.js","PHP","SQL"],illustration:"./projects/web/satiscraftory.png"}],s=bt(null);return Wn(()=>{s!=null&&s.value&&Cm(s.value)&&s.value.addEventListener("wheel",o=>{o.stopPropagation()})}),(o,a)=>(Be(),$e("div",ZA,[Ce("h1",null,dt(Te(St)(Te(n)("titles.projects"))),1),Ce("div",{class:"projects-container",ref_key:"projectContainer",ref:s},[(Be(),$e(Et,null,zn(r,(l,c)=>Ve(KA,{key:c,class:"glass clickable project",title:l.title(),description:l.description(),technologies:l.technologies,illustration:l.illustration,onClick:u=>i("projectClicked",c)},null,8,["title","description","technologies","illustration","onClick"])),64))],512)]))}}),QA=Sn(JA,[["__scopeId","data-v-96aec954"]]),ew=At({__name:"ProjectGames",setup(t){const{t:e}=dn();return(n,i)=>(Be(),un(ja,{title:Te(St)(Te(e)("projects.games.title")),context:Te(e)("projects.games.context"),technologies:["Godot","C#","GDScript"],links:[{url:"https://ohhnyx.itch.io/dicecraft",name:"Game jam contribution"},{url:"https://github.com/Crhonopost/Behavior_tree_4.2",name:"Godot behavior tree plugin"}]},{default:Zi(()=>[Ve(si,{title:Te(e)("projects.games.behavior_title"),desc:Te(e)("projects.games.behavior_desc"),"image-path":"./projects/games/illu_behavior.png","image-alt":"Typical use of the behavior tree using composition in godot.","image-first":!1},null,8,["title","desc"]),Ve(si,{title:"Dicecraft",desc:Te(e)("projects.games.dicecraft_desc"),"image-path":"./projects/games/dice_throw_edited.png","image-alt":"You must protect the left while attacking the right by throwing your dice on the board.","image-first":!0},null,8,["desc"]),Ve(si,{title:Te(St)(Te(e)("projects.games.other_title")),desc:Te(e)("projects.games.other_desc"),"image-path":"./projects/games/glyphes.png","image-alt":"Spell creation game illustration","image-first":!1},null,8,["title","desc"])]),_:1},8,["title","context"]))}}),tw={class:"studies-card"},nw=At({__name:"StudiesCard",props:{date:{},location:{},description:{}},setup(t){return(e,n)=>(Be(),$e("div",tw,[Ce("div",null,[Ce("h3",null,dt(t.date),1),Ce("h3",null,dt(t.location),1)]),Ce("h2",null,dt(t.description),1)]))}}),Is=Sn(nw,[["__scopeId","data-v-68b6acdf"]]),Xr=()=>{};function Pm(t){return typeof t=="function"?t():t&&typeof t=="object"&&"value"in t?t.value:t}function na(t){return Pm(t)}const iw=typeof window>"u"||!window.navigator?!1:/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||window.navigator.maxTouchPoints>2&&/iPad|Macintosh/.test(window.navigator.userAgent);function Bl(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}let lh=!1;function rw(t,e,n={}){const{window:i=typeof globalThis<"u"?globalThis.window:void 0,ignore:r=[],capture:s=!0,detectIframe:o=!1,controls:a=!1}=n;if(!i)return a?{stop:Xr,cancel:Xr,trigger:Xr}:Xr;if(iw&&!lh){lh=!0;const v={passive:!0};Array.from(i.document.body.children).forEach(x=>x.addEventListener("click",Xr,v)),i.document.documentElement.addEventListener("click",Xr,v)}let l=!0;const c=v=>Pm(r).some(x=>{if(typeof x=="string")return Array.from(i.document.querySelectorAll(x)).some(g=>g===v.target||v.composedPath().includes(g));{const g=na(x);return g&&(v.target===g||v.composedPath().includes(g))}}),u=v=>{if(!v.target)return;const x=na(t);if(x&&!(x===v.target||v.composedPath().includes(x))){if("detail"in v&&v.detail===0&&(l=!c(v)),!l){l=!0;return}e(v)}};let f=!1;const h=[Bl(i,"click",v=>{f||(f=!0,setTimeout(()=>{f=!1},0),u(v))},{passive:!0,capture:s}),Bl(i,"pointerdown",v=>{const x=na(t);l=!c(v)&&!!(x&&!v.composedPath().includes(x))},{passive:!0}),o&&Bl(i,"blur",v=>{setTimeout(()=>{var x;const g=na(t);((x=i.document.activeElement)==null?void 0:x.tagName)==="IFRAME"&&!(g!=null&&g.contains(i.document.activeElement))&&e(v)},0)},{passive:!0})].filter(Boolean),p=()=>h.forEach(v=>v());return a?{stop:p,cancel:()=>{l=!1},trigger:v=>{l=!0,u(v),l=!1}}:p}var ln="top",Pn="bottom",Ln="right",cn="left",Ou="auto",yo=[ln,Pn,Ln,cn],ms="start",fo="end",sw="clippingParents",Lm="viewport",Ds="popper",ow="reference",ch=yo.reduce(function(t,e){return t.concat([e+"-"+ms,e+"-"+fo])},[]),Im=[].concat(yo,[Ou]).reduce(function(t,e){return t.concat([e,e+"-"+ms,e+"-"+fo])},[]),aw="beforeRead",lw="read",cw="afterRead",uw="beforeMain",fw="main",dw="afterMain",hw="beforeWrite",pw="write",mw="afterWrite",gw=[aw,lw,cw,uw,fw,dw,hw,pw,mw];function li(t){return t?(t.nodeName||"").toLowerCase():null}function xn(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function wr(t){var e=xn(t).Element;return t instanceof e||t instanceof Element}function Rn(t){var e=xn(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Fu(t){if(typeof ShadowRoot>"u")return!1;var e=xn(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function _w(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var i=e.styles[n]||{},r=e.attributes[n]||{},s=e.elements[n];!Rn(s)||!li(s)||(Object.assign(s.style,i),Object.keys(r).forEach(function(o){var a=r[o];a===!1?s.removeAttribute(o):s.setAttribute(o,a===!0?"":a)}))})}function vw(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(i){var r=e.elements[i],s=e.attributes[i]||{},o=Object.keys(e.styles.hasOwnProperty(i)?e.styles[i]:n[i]),a=o.reduce(function(l,c){return l[c]="",l},{});!Rn(r)||!li(r)||(Object.assign(r.style,a),Object.keys(s).forEach(function(l){r.removeAttribute(l)}))})}}const xw={name:"applyStyles",enabled:!0,phase:"write",fn:_w,effect:vw,requires:["computeStyles"]};function oi(t){return t.split("-")[0]}var br=Math.max,Ra=Math.min,gs=Math.round;function qc(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function Dm(){return!/^((?!chrome|android).)*safari/i.test(qc())}function _s(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var i=t.getBoundingClientRect(),r=1,s=1;e&&Rn(t)&&(r=t.offsetWidth>0&&gs(i.width)/t.offsetWidth||1,s=t.offsetHeight>0&&gs(i.height)/t.offsetHeight||1);var o=wr(t)?xn(t):window,a=o.visualViewport,l=!Dm()&&n,c=(i.left+(l&&a?a.offsetLeft:0))/r,u=(i.top+(l&&a?a.offsetTop:0))/s,f=i.width/r,h=i.height/s;return{width:f,height:h,top:u,right:c+f,bottom:u+h,left:c,x:c,y:u}}function Bu(t){var e=_s(t),n=t.offsetWidth,i=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-i)<=1&&(i=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:i}}function Um(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&Fu(n)){var i=e;do{if(i&&t.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function Ii(t){return xn(t).getComputedStyle(t)}function Sw(t){return["table","td","th"].indexOf(li(t))>=0}function nr(t){return((wr(t)?t.ownerDocument:t.document)||window.document).documentElement}function qa(t){return li(t)==="html"?t:t.assignedSlot||t.parentNode||(Fu(t)?t.host:null)||nr(t)}function uh(t){return!Rn(t)||Ii(t).position==="fixed"?null:t.offsetParent}function Ew(t){var e=/firefox/i.test(qc()),n=/Trident/i.test(qc());if(n&&Rn(t)){var i=Ii(t);if(i.position==="fixed")return null}var r=qa(t);for(Fu(r)&&(r=r.host);Rn(r)&&["html","body"].indexOf(li(r))<0;){var s=Ii(r);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||e&&s.willChange==="filter"||e&&s.filter&&s.filter!=="none")return r;r=r.parentNode}return null}function bo(t){for(var e=xn(t),n=uh(t);n&&Sw(n)&&Ii(n).position==="static";)n=uh(n);return n&&(li(n)==="html"||li(n)==="body"&&Ii(n).position==="static")?e:n||Ew(t)||e}function ku(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function js(t,e,n){return br(t,Ra(e,n))}function Mw(t,e,n){var i=js(t,e,n);return i>n?n:i}function Nm(){return{top:0,right:0,bottom:0,left:0}}function Om(t){return Object.assign({},Nm(),t)}function Fm(t,e){return e.reduce(function(n,i){return n[i]=t,n},{})}var yw=function(t,e){return t=typeof t=="function"?t(Object.assign({},e.rects,{placement:e.placement})):t,Om(typeof t!="number"?t:Fm(t,yo))};function bw(t){var e,n=t.state,i=t.name,r=t.options,s=n.elements.arrow,o=n.modifiersData.popperOffsets,a=oi(n.placement),l=ku(a),c=[cn,Ln].indexOf(a)>=0,u=c?"height":"width";if(!(!s||!o)){var f=yw(r.padding,n),h=Bu(s),p=l==="y"?ln:cn,v=l==="y"?Pn:Ln,x=n.rects.reference[u]+n.rects.reference[l]-o[l]-n.rects.popper[u],g=o[l]-n.rects.reference[l],d=bo(s),S=d?l==="y"?d.clientHeight||0:d.clientWidth||0:0,M=x/2-g/2,_=f[p],C=S-h[u]-f[v],P=S/2-h[u]/2+M,w=js(_,P,C),N=l;n.modifiersData[i]=(e={},e[N]=w,e.centerOffset=w-P,e)}}function Tw(t){var e=t.state,n=t.options,i=n.element,r=i===void 0?"[data-popper-arrow]":i;r!=null&&(typeof r=="string"&&(r=e.elements.popper.querySelector(r),!r)||Um(e.elements.popper,r)&&(e.elements.arrow=r))}const Aw={name:"arrow",enabled:!0,phase:"main",fn:bw,effect:Tw,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function vs(t){return t.split("-")[1]}var ww={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Rw(t,e){var n=t.x,i=t.y,r=e.devicePixelRatio||1;return{x:gs(n*r)/r||0,y:gs(i*r)/r||0}}function fh(t){var e,n=t.popper,i=t.popperRect,r=t.placement,s=t.variation,o=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,u=t.roundOffsets,f=t.isFixed,h=o.x,p=h===void 0?0:h,v=o.y,x=v===void 0?0:v,g=typeof u=="function"?u({x:p,y:x}):{x:p,y:x};p=g.x,x=g.y;var d=o.hasOwnProperty("x"),S=o.hasOwnProperty("y"),M=cn,_=ln,C=window;if(c){var P=bo(n),w="clientHeight",N="clientWidth";if(P===xn(n)&&(P=nr(n),Ii(P).position!=="static"&&a==="absolute"&&(w="scrollHeight",N="scrollWidth")),P=P,r===ln||(r===cn||r===Ln)&&s===fo){_=Pn;var A=f&&P===C&&C.visualViewport?C.visualViewport.height:P[w];x-=A-i.height,x*=l?1:-1}if(r===cn||(r===ln||r===Pn)&&s===fo){M=Ln;var y=f&&P===C&&C.visualViewport?C.visualViewport.width:P[N];p-=y-i.width,p*=l?1:-1}}var O=Object.assign({position:a},c&&ww),G=u===!0?Rw({x:p,y:x},xn(n)):{x:p,y:x};if(p=G.x,x=G.y,l){var W;return Object.assign({},O,(W={},W[_]=S?"0":"",W[M]=d?"0":"",W.transform=(C.devicePixelRatio||1)<=1?"translate("+p+"px, "+x+"px)":"translate3d("+p+"px, "+x+"px, 0)",W))}return Object.assign({},O,(e={},e[_]=S?x+"px":"",e[M]=d?p+"px":"",e.transform="",e))}function Cw(t){var e=t.state,n=t.options,i=n.gpuAcceleration,r=i===void 0?!0:i,s=n.adaptive,o=s===void 0?!0:s,a=n.roundOffsets,l=a===void 0?!0:a,c={placement:oi(e.placement),variation:vs(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:r,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,fh(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,fh(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Pw={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Cw,data:{}};var ia={passive:!0};function Lw(t){var e=t.state,n=t.instance,i=t.options,r=i.scroll,s=r===void 0?!0:r,o=i.resize,a=o===void 0?!0:o,l=xn(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&c.forEach(function(u){u.addEventListener("scroll",n.update,ia)}),a&&l.addEventListener("resize",n.update,ia),function(){s&&c.forEach(function(u){u.removeEventListener("scroll",n.update,ia)}),a&&l.removeEventListener("resize",n.update,ia)}}const Iw={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Lw,data:{}};var Dw={left:"right",right:"left",bottom:"top",top:"bottom"};function ma(t){return t.replace(/left|right|bottom|top/g,function(e){return Dw[e]})}var Uw={start:"end",end:"start"};function dh(t){return t.replace(/start|end/g,function(e){return Uw[e]})}function Hu(t){var e=xn(t),n=e.pageXOffset,i=e.pageYOffset;return{scrollLeft:n,scrollTop:i}}function Vu(t){return _s(nr(t)).left+Hu(t).scrollLeft}function Nw(t,e){var n=xn(t),i=nr(t),r=n.visualViewport,s=i.clientWidth,o=i.clientHeight,a=0,l=0;if(r){s=r.width,o=r.height;var c=Dm();(c||!c&&e==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}return{width:s,height:o,x:a+Vu(t),y:l}}function Ow(t){var e,n=nr(t),i=Hu(t),r=(e=t.ownerDocument)==null?void 0:e.body,s=br(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),o=br(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),a=-i.scrollLeft+Vu(t),l=-i.scrollTop;return Ii(r||n).direction==="rtl"&&(a+=br(n.clientWidth,r?r.clientWidth:0)-s),{width:s,height:o,x:a,y:l}}function zu(t){var e=Ii(t),n=e.overflow,i=e.overflowX,r=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+i)}function Bm(t){return["html","body","#document"].indexOf(li(t))>=0?t.ownerDocument.body:Rn(t)&&zu(t)?t:Bm(qa(t))}function qs(t,e){var n;e===void 0&&(e=[]);var i=Bm(t),r=i===((n=t.ownerDocument)==null?void 0:n.body),s=xn(i),o=r?[s].concat(s.visualViewport||[],zu(i)?i:[]):i,a=e.concat(o);return r?a:a.concat(qs(qa(o)))}function $c(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Fw(t,e){var n=_s(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function hh(t,e,n){return e===Lm?$c(Nw(t,n)):wr(e)?Fw(e,n):$c(Ow(nr(t)))}function Bw(t){var e=qs(qa(t)),n=["absolute","fixed"].indexOf(Ii(t).position)>=0,i=n&&Rn(t)?bo(t):t;return wr(i)?e.filter(function(r){return wr(r)&&Um(r,i)&&li(r)!=="body"}):[]}function kw(t,e,n,i){var r=e==="clippingParents"?Bw(t):[].concat(e),s=[].concat(r,[n]),o=s[0],a=s.reduce(function(l,c){var u=hh(t,c,i);return l.top=br(u.top,l.top),l.right=Ra(u.right,l.right),l.bottom=Ra(u.bottom,l.bottom),l.left=br(u.left,l.left),l},hh(t,o,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function km(t){var e=t.reference,n=t.element,i=t.placement,r=i?oi(i):null,s=i?vs(i):null,o=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2,l;switch(r){case ln:l={x:o,y:e.y-n.height};break;case Pn:l={x:o,y:e.y+e.height};break;case Ln:l={x:e.x+e.width,y:a};break;case cn:l={x:e.x-n.width,y:a};break;default:l={x:e.x,y:e.y}}var c=r?ku(r):null;if(c!=null){var u=c==="y"?"height":"width";switch(s){case ms:l[c]=l[c]-(e[u]/2-n[u]/2);break;case fo:l[c]=l[c]+(e[u]/2-n[u]/2);break}}return l}function ho(t,e){e===void 0&&(e={});var n=e,i=n.placement,r=i===void 0?t.placement:i,s=n.strategy,o=s===void 0?t.strategy:s,a=n.boundary,l=a===void 0?sw:a,c=n.rootBoundary,u=c===void 0?Lm:c,f=n.elementContext,h=f===void 0?Ds:f,p=n.altBoundary,v=p===void 0?!1:p,x=n.padding,g=x===void 0?0:x,d=Om(typeof g!="number"?g:Fm(g,yo)),S=h===Ds?ow:Ds,M=t.rects.popper,_=t.elements[v?S:h],C=kw(wr(_)?_:_.contextElement||nr(t.elements.popper),l,u,o),P=_s(t.elements.reference),w=km({reference:P,element:M,placement:r}),N=$c(Object.assign({},M,w)),A=h===Ds?N:P,y={top:C.top-A.top+d.top,bottom:A.bottom-C.bottom+d.bottom,left:C.left-A.left+d.left,right:A.right-C.right+d.right},O=t.modifiersData.offset;if(h===Ds&&O){var G=O[r];Object.keys(y).forEach(function(W){var te=[Ln,Pn].indexOf(W)>=0?1:-1,ie=[ln,Pn].indexOf(W)>=0?"y":"x";y[W]+=G[ie]*te})}return y}function Hw(t,e){e===void 0&&(e={});var n=e,i=n.placement,r=n.boundary,s=n.rootBoundary,o=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,c=l===void 0?Im:l,u=vs(i),f=u?a?ch:ch.filter(function(v){return vs(v)===u}):yo,h=f.filter(function(v){return c.indexOf(v)>=0});h.length===0&&(h=f);var p=h.reduce(function(v,x){return v[x]=ho(t,{placement:x,boundary:r,rootBoundary:s,padding:o})[oi(x)],v},{});return Object.keys(p).sort(function(v,x){return p[v]-p[x]})}function Vw(t){if(oi(t)===Ou)return[];var e=ma(t);return[dh(t),e,dh(e)]}function zw(t){var e=t.state,n=t.options,i=t.name;if(!e.modifiersData[i]._skip){for(var r=n.mainAxis,s=r===void 0?!0:r,o=n.altAxis,a=o===void 0?!0:o,l=n.fallbackPlacements,c=n.padding,u=n.boundary,f=n.rootBoundary,h=n.altBoundary,p=n.flipVariations,v=p===void 0?!0:p,x=n.allowedAutoPlacements,g=e.options.placement,d=oi(g),S=d===g,M=l||(S||!v?[ma(g)]:Vw(g)),_=[g].concat(M).reduce(function(ne,fe){return ne.concat(oi(fe)===Ou?Hw(e,{placement:fe,boundary:u,rootBoundary:f,padding:c,flipVariations:v,allowedAutoPlacements:x}):fe)},[]),C=e.rects.reference,P=e.rects.popper,w=new Map,N=!0,A=_[0],y=0;y<_.length;y++){var O=_[y],G=oi(O),W=vs(O)===ms,te=[ln,Pn].indexOf(G)>=0,ie=te?"width":"height",$=ho(e,{placement:O,boundary:u,rootBoundary:f,altBoundary:h,padding:c}),Q=te?W?Ln:cn:W?Pn:ln;C[ie]>P[ie]&&(Q=ma(Q));var j=ma(Q),le=[];if(s&&le.push($[G]<=0),a&&le.push($[Q]<=0,$[j]<=0),le.every(function(ne){return ne})){A=O,N=!1;break}w.set(O,le)}if(N)for(var me=v?3:1,Me=function(ne){var fe=_.find(function(ye){var pe=w.get(ye);if(pe)return pe.slice(0,ne).every(function(be){return be})});if(fe)return A=fe,"break"},Fe=me;Fe>0;Fe--){var Je=Me(Fe);if(Je==="break")break}e.placement!==A&&(e.modifiersData[i]._skip=!0,e.placement=A,e.reset=!0)}}const Gw={name:"flip",enabled:!0,phase:"main",fn:zw,requiresIfExists:["offset"],data:{_skip:!1}};function ph(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function mh(t){return[ln,Ln,Pn,cn].some(function(e){return t[e]>=0})}function Ww(t){var e=t.state,n=t.name,i=e.rects.reference,r=e.rects.popper,s=e.modifiersData.preventOverflow,o=ho(e,{elementContext:"reference"}),a=ho(e,{altBoundary:!0}),l=ph(o,i),c=ph(a,r,s),u=mh(l),f=mh(c);e.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:f},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":f})}const Xw={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ww};function jw(t,e,n){var i=oi(t),r=[cn,ln].indexOf(i)>=0?-1:1,s=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=s[0],a=s[1];return o=o||0,a=(a||0)*r,[cn,Ln].indexOf(i)>=0?{x:a,y:o}:{x:o,y:a}}function qw(t){var e=t.state,n=t.options,i=t.name,r=n.offset,s=r===void 0?[0,0]:r,o=Im.reduce(function(u,f){return u[f]=jw(f,e.rects,s),u},{}),a=o[e.placement],l=a.x,c=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[i]=o}const $w={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:qw};function Yw(t){var e=t.state,n=t.name;e.modifiersData[n]=km({reference:e.rects.reference,element:e.rects.popper,placement:e.placement})}const Kw={name:"popperOffsets",enabled:!0,phase:"read",fn:Yw,data:{}};function Zw(t){return t==="x"?"y":"x"}function Jw(t){var e=t.state,n=t.options,i=t.name,r=n.mainAxis,s=r===void 0?!0:r,o=n.altAxis,a=o===void 0?!1:o,l=n.boundary,c=n.rootBoundary,u=n.altBoundary,f=n.padding,h=n.tether,p=h===void 0?!0:h,v=n.tetherOffset,x=v===void 0?0:v,g=ho(e,{boundary:l,rootBoundary:c,padding:f,altBoundary:u}),d=oi(e.placement),S=vs(e.placement),M=!S,_=ku(d),C=Zw(_),P=e.modifiersData.popperOffsets,w=e.rects.reference,N=e.rects.popper,A=typeof x=="function"?x(Object.assign({},e.rects,{placement:e.placement})):x,y=typeof A=="number"?{mainAxis:A,altAxis:A}:Object.assign({mainAxis:0,altAxis:0},A),O=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,G={x:0,y:0};if(P){if(s){var W,te=_==="y"?ln:cn,ie=_==="y"?Pn:Ln,$=_==="y"?"height":"width",Q=P[_],j=Q+g[te],le=Q-g[ie],me=p?-N[$]/2:0,Me=S===ms?w[$]:N[$],Fe=S===ms?-N[$]:-w[$],Je=e.elements.arrow,ne=p&&Je?Bu(Je):{width:0,height:0},fe=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Nm(),ye=fe[te],pe=fe[ie],be=js(0,w[$],ne[$]),Ke=M?w[$]/2-me-be-ye-y.mainAxis:Me-be-ye-y.mainAxis,Oe=M?-w[$]/2+me+be+pe+y.mainAxis:Fe+be+pe+y.mainAxis,it=e.elements.arrow&&bo(e.elements.arrow),D=it?_==="y"?it.clientTop||0:it.clientLeft||0:0,F=(W=O==null?void 0:O[_])!=null?W:0,b=Q+Ke-F-D,re=Q+Oe-F,Z=js(p?Ra(j,b):j,Q,p?br(le,re):le);P[_]=Z,G[_]=Z-Q}if(a){var ee,T=_==="x"?ln:cn,L=_==="x"?Pn:Ln,U=P[C],B=C==="y"?"height":"width",ae=U+g[T],E=U-g[L],m=[ln,cn].indexOf(d)!==-1,I=(ee=O==null?void 0:O[C])!=null?ee:0,H=m?ae:U-w[B]-N[B]-I+y.altAxis,q=m?U+w[B]+N[B]-I-y.altAxis:E,X=p&&m?Mw(H,U,q):js(p?H:ae,U,p?q:E);P[C]=X,G[C]=X-U}e.modifiersData[i]=G}}const Qw={name:"preventOverflow",enabled:!0,phase:"main",fn:Jw,requiresIfExists:["offset"]};function eR(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function tR(t){return t===xn(t)||!Rn(t)?Hu(t):eR(t)}function nR(t){var e=t.getBoundingClientRect(),n=gs(e.width)/t.offsetWidth||1,i=gs(e.height)/t.offsetHeight||1;return n!==1||i!==1}function iR(t,e,n){n===void 0&&(n=!1);var i=Rn(e),r=Rn(e)&&nR(e),s=nr(e),o=_s(t,r,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(i||!i&&!n)&&((li(e)!=="body"||zu(s))&&(a=tR(e)),Rn(e)?(l=_s(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):s&&(l.x=Vu(s))),{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function rR(t){var e=new Map,n=new Set,i=[];t.forEach(function(s){e.set(s.name,s)});function r(s){n.add(s.name);var o=[].concat(s.requires||[],s.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var l=e.get(a);l&&r(l)}}),i.push(s)}return t.forEach(function(s){n.has(s.name)||r(s)}),i}function sR(t){var e=rR(t);return gw.reduce(function(n,i){return n.concat(e.filter(function(r){return r.phase===i}))},[])}function oR(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function aR(t){var e=t.reduce(function(n,i){var r=n[i.name];return n[i.name]=r?Object.assign({},r,i,{options:Object.assign({},r.options,i.options),data:Object.assign({},r.data,i.data)}):i,n},{});return Object.keys(e).map(function(n){return e[n]})}var gh={placement:"bottom",modifiers:[],strategy:"absolute"};function _h(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(i){return!(i&&typeof i.getBoundingClientRect=="function")})}function lR(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,i=n===void 0?[]:n,r=e.defaultOptions,s=r===void 0?gh:r;return function(o,a,l){l===void 0&&(l=s);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},gh,s),modifiersData:{},elements:{reference:o,popper:a},attributes:{},styles:{}},u=[],f=!1,h={state:c,setOptions:function(x){var g=typeof x=="function"?x(c.options):x;v(),c.options=Object.assign({},s,c.options,g),c.scrollParents={reference:wr(o)?qs(o):o.contextElement?qs(o.contextElement):[],popper:qs(a)};var d=sR(aR([].concat(i,c.options.modifiers)));return c.orderedModifiers=d.filter(function(S){return S.enabled}),p(),h.update()},forceUpdate:function(){if(!f){var x=c.elements,g=x.reference,d=x.popper;if(_h(g,d)){c.rects={reference:iR(g,bo(d),c.options.strategy==="fixed"),popper:Bu(d)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(N){return c.modifiersData[N.name]=Object.assign({},N.data)});for(var S=0;S<c.orderedModifiers.length;S++){if(c.reset===!0){c.reset=!1,S=-1;continue}var M=c.orderedModifiers[S],_=M.fn,C=M.options,P=C===void 0?{}:C,w=M.name;typeof _=="function"&&(c=_({state:c,options:P,name:w,instance:h})||c)}}}},update:oR(function(){return new Promise(function(x){h.forceUpdate(),x(c)})}),destroy:function(){v(),f=!0}};if(!_h(o,a))return h;h.setOptions(l).then(function(x){!f&&l.onFirstUpdate&&l.onFirstUpdate(x)});function p(){c.orderedModifiers.forEach(function(x){var g=x.name,d=x.options,S=d===void 0?{}:d,M=x.effect;if(typeof M=="function"){var _=M({state:c,name:g,instance:h,options:S}),C=function(){};u.push(_||C)}})}function v(){u.forEach(function(x){return x()}),u=[]}return h}}var cR=[Iw,Kw,Pw,xw,$w,Gw,Qw,Aw,Xw],uR=lR({defaultModifiers:cR});function fR(t,e=[0,8],n,i={}){const r=bt(null),s=bt(null),o=bt(null),a=bt(t),l=bt(!1);let c=null,u=null;const f=()=>{c&&(clearTimeout(c),c=null),u&&(clearTimeout(u),u=null)},h=async()=>{var _;r.value&&s.value&&((_=o.value)==null||_.destroy(),await Yr(),o.value=uR(r.value,s.value,{placement:t,strategy:"absolute",modifiers:[{name:"offset",options:{offset:e}},{name:"preventOverflow",options:{boundary:"viewport",padding:8}},{name:"flip",options:{fallbackPlacements:["top","bottom","left","right"]}},{name:"arrow",options:{element:".tooltip-arrow",padding:8}},{name:"updateActualPlacement",enabled:!0,phase:"afterWrite",fn({state:C}){a.value=C.placement}}]}))},p=async()=>{f(),l.value||(c=window.setTimeout(async()=>{var _;l.value=!0,await Yr(),s.value&&(await h(),(_=i.onShow)==null||_.call(i),setTimeout(()=>{var C;(C=o.value)==null||C.forceUpdate()},0))},n==="hover"?150:0))},v=()=>{f(),l.value&&(u=window.setTimeout(()=>{var _,C;l.value=!1,(_=o.value)==null||_.destroy(),o.value=null,(C=i.onHide)==null||C.call(i)},n==="hover"?100:0))},x=()=>{l.value?v():p()},g=()=>{var _;(_=o.value)==null||_.forceUpdate()},d=()=>{f(),o.value&&(o.value.destroy(),o.value=null)},S=()=>{n==="hover"&&p()},M=()=>{n==="hover"&&v()};return Wn(async()=>{var _,C,P;await Yr(),n==="click"&&((_=r.value)==null||_.addEventListener("click",x)),n==="hover"&&((C=r.value)==null||C.addEventListener("mouseenter",S),(P=r.value)==null||P.addEventListener("mouseleave",M)),rw(s,()=>{l.value&&n==="click"&&v()})}),tp(()=>{var _,C,P;d(),n==="click"&&((_=r.value)==null||_.removeEventListener("click",x)),n==="hover"&&((C=r.value)==null||C.removeEventListener("mouseenter",S),(P=r.value)==null||P.removeEventListener("mouseleave",M))}),Xi(()=>t,()=>{l.value&&h()}),Xi(l,_=>{n==="hover"&&Yr(()=>{_&&s.value&&(s.value.addEventListener("mouseenter",S),s.value.addEventListener("mouseleave",M))})}),{triggerRef:r,containerRef:s,popperInstance:o,actualPlacement:a,isOpen:l,initializePopper:h,updatePopper:g,destroyPopper:d,showTooltip:p,hideTooltip:v}}const dR={class:"tooltip-wrapper"},hR={class:"tooltip-content"},pR=At({__name:"ToolTip",props:{content:{default:""},placement:{default:"bottom-end"},offset:{default:()=>[0,8]},trigger:{default:"hover"},arrow:{type:Boolean,default:!0},triggerClass:{},className:{},contentClass:{},teleport:{type:Boolean,default:!0},styles:{}},emits:["onShow","onHide"],setup(t,{emit:e}){const n=t,i=e,{triggerRef:r,containerRef:s,actualPlacement:o,initializePopper:a,destroyPopper:l,isOpen:c}=fR(n.placement,n.offset,n.trigger,{onShow:()=>i("onShow"),onHide:()=>i("onHide")}),u=gr(()=>{if(!n.arrow)return"";const f=o.value;return f.includes("top")?"tooltip-arrow--bottom":f.includes("bottom")?"tooltip-arrow--top":f.includes("left")?"tooltip-arrow--right":f.includes("right")?"tooltip-arrow--left":"tooltip-arrow--top"});return Wn(()=>{a()}),mo(()=>{l()}),(f,h)=>(Be(),$e("div",dR,[Ce("span",{ref_key:"triggerRef",ref:r,class:Hn(["tooltip-trigger",f.triggerClass])},[af(f.$slots,"trigger",Zu(Yl({isOpen:Te(c)})))],2),Te(c)?(Be(),un(go(f.teleport?Vg:"div"),{key:0,to:"body"},{default:Zi(()=>[Te(c)?(Be(),$e("div",{key:0,style:xs(f.styles),ref_key:"containerRef",ref:s,class:Hn(["tooltip-container tooltip-container--open",f.className]),role:"tooltip","aria-hidden":"true"},[Ce("div",hR,[af(f.$slots,"default",Zu(Yl({isOpen:Te(c)})),()=>[du(dt(f.content),1)])]),f.arrow?(Be(),$e("div",{key:0,class:Hn(["tooltip-arrow",u.value])},null,2)):ji("",!0)],6)):ji("",!0)]),_:3})):ji("",!0)]))}}),mR={id:"experiences"},gR={class:"glass column"},_R={class:"glass",id:"pro"},vR=At({__name:"ExperiencesComponent",setup(t){const{t:e}=dn();return(n,i)=>(Be(),$e("div",mR,[Ce("div",gR,[Ce("h1",null,dt(Te(St)(Te(e)("titles.studies"))),1),Ve(Is,{date:"2024 - 2026",location:"Faculté des sciences de Montpellier",description:"Master Imagine"}),i[0]||(i[0]=Ce("div",{class:"separator_h"},null,-1)),Ve(Te(pR),{content:"Réalisation d'Application, Développement et Validation"},{trigger:Zi(()=>[Ve(Is,{date:"2021 - 2024",location:"IUT de Montpellier",description:"BUT Informatique (parcours RACDV)"})]),_:1}),i[1]||(i[1]=Ce("div",{class:"separator_h"},null,-1)),Ve(Is,{date:"2021",location:"Lycée Albert Einstein de Bagnols sur Cèze",description:"Bac général options NSI et Mathématiques expertes"})]),Ce("div",_R,[Ce("h1",null,dt(Te(St)(Te(e)("titles.professional"))),1),Ve(Is,{date:`${Te(St)(Te(e)("dates.april"))} - ${Te(St)(Te(e)("dates.june"))} 2024`,location:"Andragogy (Sète)",description:Te(St)(Te(e)("experiences.professional.job_andragogy"))},null,8,["date","description"]),i[2]||(i[2]=Ce("div",{class:"separator_h"},null,-1)),Ve(Is,{date:`${Te(St)(Te(e)("dates.april"))} 2023 - ${Te(St)(Te(e)("dates.january"))} 2024`,location:"Kapix (Montpellier)",description:Te(St)(Te(e)("experiences.professional.job_kapix"))},null,8,["date","description"])])]))}}),xR=Sn(vR,[["__scopeId","data-v-0974f0f4"]]),SR=At({__name:"ProjectWeb",setup(t){const{t:e}=dn();return(n,i)=>(Be(),un(ja,{title:Te(St)(Te(e)("projects.web.title")),context:Te(e)("projects.web.context"),technologies:["Javascript / Typescript","Vue.js","Node.js","SQL","PHP"],links:[{url:"https://github.com/Projet-Web-Recette/Frontend-recette",name:"git SatisCraftory"},{url:"https://github.com/odilonv/explore",name:"git Explore"},{url:"https://github.com/Crhonopost/Rich-Vote",name:"git Rich Vote"}]},{default:Zi(()=>[Ve(si,{title:"SatisCraftory",desc:Te(e)("projects.web.satiscraftory_desc"),"image-path":"/projects/web/satiscraftory.png","image-alt":"SatisCraftory screenshot","image-first":!1},null,8,["desc"]),Ve(si,{title:"Explore",desc:Te(e)("projects.web.explore_desc"),"image-path":"/projects/web/explore_ui.png","image-alt":"Explore application screenshot","image-first":!0},null,8,["desc"]),Ve(si,{title:"Rich Vote",desc:Te(e)("projects.web.rich_desc"),"image-path":"/projects/web/RichVote_liste.png","image-alt":"Rich Vote application screenshot","image-first":!1},null,8,["desc"])]),_:1},8,["title","context"]))}});class ER{constructor(e=!0){Xn(this,"fps",0);Xn(this,"frameCount",0);Xn(this,"lastTime",performance.now());Xn(this,"fpsUpdateInterval",500);Xn(this,"lastFpsUpdate",0);Xn(this,"callbacks",[]);Xn(this,"fpsHistory",[]);Xn(this,"historySize",10);Xn(this,"averageFps",60);this.enabled=e,e&&this.startMonitoring()}startMonitoring(){const e=n=>{if(this.frameCount++,n-this.lastFpsUpdate>=this.fpsUpdateInterval){const i=Math.round(this.frameCount*1e3/(n-this.lastFpsUpdate));this.frameCount=0,this.lastFpsUpdate=n,this.updateFpsHistory(i),this.fps=i,this.callbacks.forEach(r=>r(this.fps,this.averageFps))}this.lastTime=n,requestAnimationFrame(e)};requestAnimationFrame(e)}updateFpsHistory(e){this.fpsHistory.push(e),this.fpsHistory.length>this.historySize?(this.fpsHistory.shift(),this.averageFps=Math.round(this.fpsHistory.reduce((n,i)=>n+i,0)/this.fpsHistory.length)):this.averageFps=-1}onFPSUpdate(e){return this.callbacks.push(e),()=>{const n=this.callbacks.indexOf(e);n>-1&&this.callbacks.splice(n,1)}}getCurrentFPS(){return this.fps}dispose(){this.callbacks=[]}}const MR=new ER,yR={key:0,id:"popup"},bR={class:"row"},TR=At({__name:"PerformancePopup",emits:["lowerResolution"],setup(t){const e=bt(60);let n=0;const i=bt(0),r=MR.onFPSUpdate((l,c)=>{e.value=c,e.value<200&&!a&&(o.value=!0,a=!0)});function s(){const l=performance.now();i.value=Math.round(l-n),n=l,requestAnimationFrame(s)}Wn(()=>{n=performance.now(),s()}),mo(()=>{r()});const o=bt(!1);let a=!1;return(l,c)=>o.value?(Be(),$e("div",yR,[Ce("h1",null,"Performance issues "+dt(`Average FPS: ${e.value}`),1),c[2]||(c[2]=Ce("p",null,"Fluidity is more important than fidelity. Would you mind if I increase the website performances ? Although theses issues might disapear when switching to another explorer (chrome, zen, etc) It s only a temporal fix, I am looking into the root of the problem. ",-1)),Ce("div",bR,[Ve(_r,{disable:!1,content:"Yes optimize!",onClick:c[0]||(c[0]=u=>l.$emit("lowerResolution"))}),Ve(_r,{disable:!1,content:"No thanks",onClick:c[1]||(c[1]=()=>o.value=!1)})])])):ji("",!0)}}),AR={id:"layout"},wR=At({__name:"App",setup(t){const e=[{name:"C++",icon:"./logo/cpp.png",anotation:sn.LANGUAGE,isWeb:!1},{name:"GLSL",icon:"./logo/opengl.png",anotation:sn.LANGUAGE,isWeb:!1},{name:"Godot",icon:"./logo/godot.png",anotation:sn.TOOL,isWeb:!1},{name:"Java",icon:"./logo/java.png",anotation:sn.LANGUAGE,isWeb:!1},{name:"C#",icon:"./logo/csharp.png",anotation:sn.LANGUAGE,isWeb:!1},{name:"HTML",icon:"./logo/html.png",anotation:sn.LANGUAGE,isWeb:!0},{name:"CSS",icon:"./logo/css.png",anotation:sn.LANGUAGE,isWeb:!0},{name:"PostgreSQL",icon:"./logo/postgre.png",anotation:sn.LANGUAGE,isWeb:!0},{name:"TypeScript",icon:"./logo/ts.png",anotation:sn.LANGUAGE,isWeb:!0},{name:"NodeJS",icon:"./logo/node.png",anotation:sn.TOOL,isWeb:!0},{name:"VueJS",icon:"./logo/vue.png",anotation:sn.TOOL,isWeb:!0},{name:"NestJS",icon:"./logo/nest.png",anotation:sn.TOOL,isWeb:!0}],n=bt(),i=bt(),r=bt();let s=0;function o(u,f){var v,x,g;const h=f!=null;if(!((v=i==null?void 0:i.value)!=null&&v.canScrollTo(u))&&!h)return console.warn("Cannot scroll to:",u),(x=n.value)==null||x.setNavIdx(s),!1;const p=new URL(window.location.href);return p.searchParams.set("s",u.toString()),h?p.searchParams.set("p",f.toString()):p.searchParams.delete("p"),history.pushState({page:u},"",p),(g=i==null?void 0:i.value)==null||g.moveToSlide(u),r!=null&&r.value&&r.value.movePlaine(u-s>0?"front":"back"),s=u,!0}function a(u){var h;o(4,u)&&((h=n.value)==null||h.setNavIdx(4),c.value=u,r==null||r.value.movePlaine("front"))}const l=[oh,oh,bA,ew,SR],c=bt(-1);return Wn(()=>{var x;if(!i.value)return;const u=new URLSearchParams(window.location.search),f=parseInt(u.get("s")||"0",10),h=parseInt(u.get("p")||"-1",10),p=isNaN(f)?0:f,v=isNaN(h)?null:h;i.value.moveToSlide(p),s=p,(x=n.value)==null||x.setNavIdx(s),v!==null&&p===4&&a(v)}),(u,f)=>{var h,p;return Be(),$e(Et,null,[f[1]||(f[1]=Ce("head",null,[Ce("link",{href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined",rel:"stylesheet"})],-1)),Ce("div",AR,[Ce("header",null,[Ve(Mx,{ref_key:"navRef",ref:n,onMoved:f[0]||(f[0]=v=>o(v,null)),"can-move-backward":(h=i.value)==null?void 0:h.canScroll("b"),"can-move-forward":(p=i.value)==null?void 0:p.canScroll("f"),"page-count":4},null,8,["can-move-backward","can-move-forward"])]),Ce("main",null,[Ve(TR),Ve(cA,{ref_key:"sceneComponentRef",ref:r},null,512),Ve(Ax,{ref_key:"depthListRef",ref:i,id:"depth"},{default:Zi(()=>[Ve(DA,{class:"item"}),Ve(xR),Ve(GA,{class:"item",skills:e}),Ve(QA,{class:"item",onProjectClicked:a}),c.value>=0?(Be(),un(go(l[c.value]),{key:0,class:"item"})):ji("",!0)]),_:1},512)])])],64)}}}),RR=Sn(wR,[["__scopeId","data-v-be2be928"]]),CR=ax({legacy:!1,locale:"fr",fallbackLocale:"en",messages:{en:{hello:"hello",viewMore:"view more",dates:{january:"january",april:"april",june:"june"},titles:{about:"about",studies:"studies",professional:"professional",skills:"skills",projects:"projects",links:"links",technologies:"technologies",context:"context",learning:"learning",difficulties:"difficulties",next_steps:"next steps",fur_editor:"fur editor"},experiences:{professional:{job_andragogy:"web developer internship",job_kapix:"web developer internship"}},descriptions:{skills:"Here are some of the skills I have acquired over the years."},contents:{about:"I'm Nathan Souvignet, a fourth-year Computer Science student with a strong passion for computer graphics and video game development. I enjoy bringing new ideas to life, especially by creating tools and features that empower end users and developers to help them go further faster whether it's through rendering techniques, gameplay mechanics, or engine systems. My experience spans C++, OpenGL, Godot, and web technologies, and I’m always eager to learn and experiment."},projects:{shell:{quickDesc:"A small implementation done for this portfolio",context:"While building this website, I wanted to implement a small project to showcase my skills. I decided to create a shell texturing effect using WebGL and Three.js.",difficulties:"For now, all strands are perfectly aligned within the fur, which creates an unnatural grid-like pattern. I tried adding a random offset to each strand, but I'm still unsure how to achieve a more organic UV scaling. Another possible solution would be to adjust the root texture by adding fake 2D strands to hide the visible starting points."},rendering:{title:"rendering approaches",quickDesc:"Discovering ray tracing, fluid volume rendering with ray marching and other techniques",context:"In the context of my first year of master's degree, I had the opportunity to experiment on some rendering techniques. The first one being ray tracing (in deferred on the CPU) and the second being the render and simulation in real time of volumetric clouds",ray_tracing_desc:"I had the opportunity to work on the implementation of a simple ray tracer. I worked on implementing different intersections between ray and shapes as well as various effects such as refraction, reflection, and Beer-Lambert for lighting, as well as soft shadows. I also implemented a BVH as an acceleration structure to speed up the rendering of complex meshes.",volume_desc:"This project was an opportunity to discover different approaches to modeling (from noise, using particles) as well as rendering (using impostors to visualize particles, ray marching of a volume). I also had the opportunity to experiment with the geometry shader and compute shaders to minimize CPU-GPU communication in order to render particles efficiently. "},engine:{title:"game engine",quickDesc:"Developing game engines",context:"During the second semester of my first year of master's degree in Imagine at the Faculty of Sciences, I worked on a game engine project. Being passionate about video game creation, it was an excellent experience. Limited by the submission date, there is still much to add.",learnings:"My goal was to build a general purpose game engine. Through this project, I implemented an Entity-Component System, PBR rendering, a lightweight editor for debugging, and an early physics system handling collisions (AABB, OBB, spheres, planes, rays, and rigid bodies collision reactions). It was my first large-scale C++ project — a challenging but extremely rewarding experience. ",img_desc_0:"Some of the work done on the camera",img_desc_1:"Second example of camera",next_steps:"The first version taught me enough to start over. The upcoming V2 focuses on a stronger code architecture and takes inspiration from Godot's design, emphasizing inheritance and composition over a pure ECS approach.",features_list_title:"Some of the features I want to implement",features_list:["Independent renderer exposing a clear API (done)","Better resource and scene serialization management (done)","Improved logging and debugging tools (done)","Global illumination with light probes","Physics rework","Scripting support"]},games:{title:"game dev",quickDesc:"Some of my work surrounding game creation",context:"As a hobby I love making games. Most of the times it is more about implementing an idea rather than creating a full game",behavior_title:"Behavior tree",behavior_desc:"I created a behavior tree addon for Godot 4.2 mono. It allows you to create complex AI behaviors in a visual way, making it easier to manage and understand the logic behind AI actions. In the illustration on the right, for example, we can see the use of the extension within Godot's scene tree: if a node in the 'FollowMouse' action sequence fails, the system will then switch to the 'GoHome' sequence.",dicecraft_desc:"I participated in a game jam where, as a team of 3, we created a game called Dicecraft. The game is about crafting dice in order to manipulate randomness and maximize combos and units spawn quantities to fight against an AI. The game lacks content and polish, but it was a fun project and the core mechanics are solid.",other_title:"other projects",other_desc:"I have worked on several other projects, but they act more as experiments or proofs of concept rather than full-fledged games. These projects include various mechanics from 2D platformers about time control to magic spells programming. The illustration on the right come from my spell programming game. There is an interface to create spell and the result can be seen on the left in the scene. Symbol type and orientation matter, here we are expanding water with 3 symbols."},web:{title:"web dev",quickDesc:"Some of my work surrounding web development",context:"During my studies, I had the opportunity to work on several web projects. It was a great way to learn about web technologies and how to create advanced web applications.",satiscraftory_desc:"The goal of this project was to make a web application providing receipes around a specific theme. Ours was about the game Satisfactory. I worked on the frontend part of the application, which included a minigame that I build entirely using Vue.js reactivity.",explore_desc:"For this project, I worked on the backend part of a web application. Implementing pathfinding algorithms and database structure and optimization.",rich_desc:"I also worked on the backend of a web application for voting. The goal was to offer different ways to vote and tools to create and manages propositions."}}},fr:{hello:"bonjour",viewMore:"voir plus",dates:{january:"janvier",april:"avril",june:"juin"},titles:{about:"à propos",studies:"études",professional:"professionnel",skills:"compétences",projects:"projets",links:"liens",technologies:"technologies",context:"contexte",learning:"apprentissage",difficulties:"difficultés",next_steps:"prochaines étapes",fur_editor:"éditeur de fourrure"},experiences:{professional:{job_andragogy:"stage de développeur web",job_kapix:"alternance de développeur web"}},descriptions:{skills:"Quelques compétences que j'ai acquises au fil des années."},contents:{about:"Je m'appelle Nathan Souvignet, étudiant en quatrième année d'informatique, passionné par le graphisme informatique et le développement de jeux vidéo. J'aime donner vie à de nouvelles idées, notamment en créant des outils et des fonctionnalités qui facilitent le travail des artistes et des développeurs que ce soit par des techniques de rendu innovantes, des mécaniques de jeu ou des systèmes de moteur. J’ai de l’expérience en C++, OpenGL, Godot et technologies web, et je suis toujours motivé à apprendre et à expérimenter."},projects:{shell:{quickDesc:"Une implémentation rapide pour le portfolio",context:"En développant ce site web, j'ai voulu implémenter cette technique de rendu de fourrure qui avait l'air amusante. L'idée est de superposer plusieurs couches du même mesh et de ne pas afficher certains pixels du mesh pour donner l'impression qu'il y a un volume. Alors qu'en réalité il s'agit juste de plusieurs tranches superposées. Pour cette implémentation j'ai utilisé three.js et webgl.",difficulties:"Pour l'instant, tous les poils sont parfaitement alignés, ce qui crée un motif en grille peu naturel. J'ai essayé d'ajouter un décalage aléatoire à chaque poil, mais je ne sais pas encore comment obtenir un rendu plus organique au niveau du redimensionnement des UV. Une autre solution serait de modifier la texture des racines en y ajoutant de faux poils en 2D afin de masquer les points de départ visibles."},rendering:{title:"techniques de rendu",quickDesc:"Découverte du ray tracing, du rendu volumique de fluide via ray marching et autres techniques",context:"Au cours de ma première année de master, j'ai eu l'opportunité de découvrir de nouvelles approches de rendu. J'ai par exemple implémenté du ray tracing sur CPU (en rendu déféré), j'ai également pu faire de la simulation et du rendu en temps réel de nuages volumétriques avec des imposteurs et du ray marching",ray_tracing_desc:"J'ai eu l'occasion de travailler sur la mise en œuvre d'un ray tracer simple sur CPU. J'ai développé différentes intersections entre les rayons et les formes, ainsi que plusieurs effets tels que la réfraction, la réflexion, la loi de Beer-Lambert pour l'éclairage, et les ombres douces. J'ai également implémenté une structure d'accélération BVH afin d'accélérer le rendu de maillages complexes.",volume_desc:"Ce projet a été l'occasion de découvrir différentes approches de modélisation (à partir de bruit, ou à l'aide de particules), ainsi que de rendu (utilisation d'imposteurs pour visualiser les particules, et ray marching de volume). J'ai également pu expérimenter avec le geometry shader et les compute shaders afin de réduire la communication entre le CPU et le GPU, et ainsi rendre les particules de manière plus efficace."},engine:{title:"moteur de jeu",quickDesc:"Développement de moteurs de jeu",context:"Durant le second semestre de mon master, j'ai eu l'occasion de développer un moteur de jeu. Ayant toujours été passionné par la création de jeux vidéos, ça a été une super expérience. Cependant, en raison de la contrainte de temps imposée par le projet, beaucoup de concessions ont dû être faites.",learnings:"Mon objectif était de concevoir un moteur de jeu polyvalent et réutilisable pour différents types de jeux. J'ai donc tenté d'implémenter des composants similaires à ceux que j'avais utilisés dans le moteur Godot, au sein de mon Entity Component System (ECS). En plus de l'ECS, le projet comprenait un rendu basé sur la physique (PBR), un éditeur de scène léger pour faciliter le débogage, ainsi qu'un système de simulation physique et de gestion des collisions simple. Ce fut mon premier grand projet en C++, une expérience très enrichissante.",img_desc_0:"Illustration du fonctionnement du système de caméra",img_desc_1:"Deuxième exemple de caméra",next_steps:"Ma première tentative m'a tellement appris que j'ai dû recommencer de zéro. La prochaine version du moteur de jeu possède une structure de code claire et facilement codable en s'inspirant de temps à autres de l'architecture de Godot. Dans cette version, pas d'ECS mais une approche plus traditionnelle axée autour de l'héritage ainsi que la composition.",features_list_title:"Quelques fonctionnalités que je compte implémenter",features_list:["Un renderer indépendant exposant une API (fait)","Meilleur système de gestion des ressources ainsi qu'une solution de sauvegarde et de chargement des scenes fonctionnelle (fait)","Amélioration des outils de logging et de debug (fait)","Illumination globale à l'aide de sondes","Nouvelle simulation physique","Support des scripts"]},games:{title:"jeux",quickDesc:"D'autres projets autour de la création de jeux vidéo",context:"J'aime développer des jeux dans mon temps libre. Bien qu'il s'agisse généralement de tester des concepts plus que de faire un jeu complet",behavior_title:"Arbre de comportement",behavior_desc:"J'ai développé un addon pour godot 4.2 mono. Il s'agit d'une implémentation d'arbre de comportement qui permet de créer facilement des comportements d'IA complexes à l'aide d'un arbre. Sur l'illustration à droite par exemple on peut voir l'utilisation de l'extension dans le graphe de scène de Godot, si un noeud de la séquence d'actions 'FollowMouse' échoue, alors on passera à la séquence 'GoHome'.",dicecraft_desc:"J'ai participé à une game jam durant laquelle, en équipe de trois, nous avons créé un jeu appelé Dicecraft. Le principe du jeu est de fabriquer des dés afin de manipuler l'aléatoire et de maximiser les combos et la quantité d'unités invoquées par les lancés de dés pour affronter une IA. Le jeu manque de finition, mais ce fut un projet amusant, et les mécaniques de base sont solides.",other_title:"autres projets",other_desc:"Je travaille sur plusieurs autres projets, mais rien de très présentable. Ils vont d'un platformer 2D utilisant le contrôle du temps pour réussir les puzzles à un jeu de programmation de sort magiques. L'illustration sur la droite illustre ce concept de programmation magique, le joueur dispose des symboles sur un cercle d'invocation, la forme et le sens des symboles impactent l'effet produit. Ici on a 3 dilatations appliquées à un sort d'eau, ce qui donne ce triangle."},web:{quickDesc:"Quelques projets de développement web",context:"Au cours de mes études, j'ai eu l'occasion de travailler sur plusieurs projets web principalement sur du backend. En plus d'avoir énormément appris sur les technologies utiles au développement web ça a été l'occasion pour moi de m'entraîner dans un environnement professionel.",satiscraftory_desc:"L'objectif était de faire un site web avec plusieurs services connectés à un même frontend. J'ai principalement contribué en réalisant un mini jeu entièrement en utilisant la réactivité de Vue.js sans webgl. La thématique du projet était de proposer une sorte de wiki pour les constructions faisables dans le jeu 'Satisfactory'.",explore_desc:"Pour ce projet, j'ai travaillé sur le backend avec du PHP et une librairie postgis de PostgreSQL. Il a fallu implémenter un algorithme de pathfinding ainsi que des optimisations pour charger le plus rapidement un chemin optimal entre 2 points (ou plus avec des étapes)",rich_desc:"J'ai également travaillé sur le backend de cette application web. Le but était de faire un site sur lequel les utilisateurs pouvaient proposer des sujets ainsi que des propositions pour répondre à ces problématiques. Le choix de la meilleure réponse dépendait d'un système de vote et de différentes phases de rédaction où les gens pouvaient écrire en collaboration. J'ai donc travaillé sur la base de données pour rendre tout cela possible."}}}}}),Hm=hv(RR);Hm.use(CR);Hm.mount("#app");
