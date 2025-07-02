(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Wo(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const Tt={},$n=[],Ce=()=>{},nd=()=>!1,ii=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Qo=n=>n.startsWith("onUpdate:"),re=Object.assign,Yo=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},rd=Object.prototype.hasOwnProperty,gt=(n,t)=>rd.call(n,t),nt=Array.isArray,qn=n=>oi(n)==="[object Map]",hc=n=>oi(n)==="[object Set]",it=n=>typeof n=="function",Vt=n=>typeof n=="string",hn=n=>typeof n=="symbol",At=n=>n!==null&&typeof n=="object",fc=n=>(At(n)||it(n))&&it(n.then)&&it(n.catch),dc=Object.prototype.toString,oi=n=>dc.call(n),sd=n=>oi(n).slice(8,-1),pc=n=>oi(n)==="[object Object]",Xo=n=>Vt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Dr=Wo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ai=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},id=/-(\w)/g,nn=ai(n=>n.replace(id,(t,e)=>e?e.toUpperCase():"")),od=/\B([A-Z])/g,Vn=ai(n=>n.replace(od,"-$1").toLowerCase()),gc=ai(n=>n.charAt(0).toUpperCase()+n.slice(1)),$i=ai(n=>n?`on${gc(n)}`:""),Je=(n,t)=>!Object.is(n,t),qi=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},ho=(n,t,e,r=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:r,value:e})},ad=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Pl;const li=()=>Pl||(Pl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Jo(n){if(nt(n)){const t={};for(let e=0;e<n.length;e++){const r=n[e],s=Vt(r)?hd(r):Jo(r);if(s)for(const o in s)t[o]=s[o]}return t}else if(Vt(n)||At(n))return n}const ld=/;(?![^(]*\))/g,ud=/:([^]+)/,cd=/\/\*[^]*?\*\//g;function hd(n){const t={};return n.replace(cd,"").split(ld).forEach(e=>{if(e){const r=e.split(ud);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Zo(n){let t="";if(Vt(n))t=n;else if(nt(n))for(let e=0;e<n.length;e++){const r=Zo(n[e]);r&&(t+=r+" ")}else if(At(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const fd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",dd=Wo(fd);function mc(n){return!!n||n===""}const _c=n=>!!(n&&n.__v_isRef===!0),fo=n=>Vt(n)?n:n==null?"":nt(n)||At(n)&&(n.toString===dc||!it(n.toString))?_c(n)?fo(n.value):JSON.stringify(n,yc,2):String(n),yc=(n,t)=>_c(t)?yc(n,t.value):qn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[r,s],o)=>(e[Hi(r,o)+" =>"]=s,e),{})}:hc(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Hi(e))}:hn(t)?Hi(t):At(t)&&!nt(t)&&!pc(t)?String(t):t,Hi=(n,t="")=>{var e;return hn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let se;class pd{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=se,!t&&se&&(this.index=(se.scopes||(se.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=se;try{return se=this,t()}finally{se=e}}}on(){++this._on===1&&(this.prevScope=se,se=this)}off(){this._on>0&&--this._on===0&&(se=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let e,r;for(e=0,r=this.effects.length;e<r;e++)this.effects[e].stop();for(this.effects.length=0,e=0,r=this.cleanups.length;e<r;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function gd(){return se}let Et;const zi=new WeakSet;class vc{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,se&&se.active&&se.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,zi.has(this)&&(zi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Tc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Vl(this),Ic(this);const t=Et,e=_e;Et=this,_e=!0;try{return this.fn()}finally{wc(this),Et=t,_e=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)na(t);this.deps=this.depsTail=void 0,Vl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?zi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){po(this)&&this.run()}get dirty(){return po(this)}}let Ec=0,Nr,Or;function Tc(n,t=!1){if(n.flags|=8,t){n.next=Or,Or=n;return}n.next=Nr,Nr=n}function ta(){Ec++}function ea(){if(--Ec>0)return;if(Or){let t=Or;for(Or=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Nr;){let t=Nr;for(Nr=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){n||(n=r)}t=e}}if(n)throw n}function Ic(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function wc(n){let t,e=n.depsTail,r=e;for(;r;){const s=r.prevDep;r.version===-1?(r===e&&(e=s),na(r),md(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=t,n.depsTail=e}function po(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ac(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Ac(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Hr)||(n.globalVersion=Hr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!po(n))))return;n.flags|=2;const t=n.dep,e=Et,r=_e;Et=n,_e=!0;try{Ic(n);const s=n.fn(n._value);(t.version===0||Je(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{Et=e,_e=r,wc(n),n.flags&=-3}}function na(n,t=!1){const{dep:e,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),e.subs===n&&(e.subs=r,!r&&e.computed)){e.computed.flags&=-5;for(let o=e.computed.deps;o;o=o.nextDep)na(o,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function md(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let _e=!0;const Cc=[];function Le(){Cc.push(_e),_e=!1}function Fe(){const n=Cc.pop();_e=n===void 0?!0:n}function Vl(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=Et;Et=void 0;try{t()}finally{Et=e}}}let Hr=0;class _d{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ra{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Et||!_e||Et===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==Et)e=this.activeLink=new _d(Et,this),Et.deps?(e.prevDep=Et.depsTail,Et.depsTail.nextDep=e,Et.depsTail=e):Et.deps=Et.depsTail=e,bc(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const r=e.nextDep;r.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=r),e.prevDep=Et.depsTail,e.nextDep=void 0,Et.depsTail.nextDep=e,Et.depsTail=e,Et.deps===e&&(Et.deps=r)}return e}trigger(t){this.version++,Hr++,this.notify(t)}notify(t){ta();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{ea()}}}function bc(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)bc(r)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const go=new WeakMap,Cn=Symbol(""),mo=Symbol(""),zr=Symbol("");function Qt(n,t,e){if(_e&&Et){let r=go.get(n);r||go.set(n,r=new Map);let s=r.get(e);s||(r.set(e,s=new ra),s.map=r,s.key=e),s.track()}}function ke(n,t,e,r,s,o){const a=go.get(n);if(!a){Hr++;return}const l=c=>{c&&c.trigger()};if(ta(),t==="clear")a.forEach(l);else{const c=nt(n),f=c&&Xo(e);if(c&&e==="length"){const d=Number(r);a.forEach((g,E)=>{(E==="length"||E===zr||!hn(E)&&E>=d)&&l(g)})}else switch((e!==void 0||a.has(void 0))&&l(a.get(e)),f&&l(a.get(zr)),t){case"add":c?f&&l(a.get("length")):(l(a.get(Cn)),qn(n)&&l(a.get(mo)));break;case"delete":c||(l(a.get(Cn)),qn(n)&&l(a.get(mo)));break;case"set":qn(n)&&l(a.get(Cn));break}}ea()}function kn(n){const t=pt(n);return t===n?t:(Qt(t,"iterate",zr),de(n)?t:t.map($t))}function ui(n){return Qt(n=pt(n),"iterate",zr),n}const yd={__proto__:null,[Symbol.iterator](){return Ki(this,Symbol.iterator,$t)},concat(...n){return kn(this).concat(...n.map(t=>nt(t)?kn(t):t))},entries(){return Ki(this,"entries",n=>(n[1]=$t(n[1]),n))},every(n,t){return Oe(this,"every",n,t,void 0,arguments)},filter(n,t){return Oe(this,"filter",n,t,e=>e.map($t),arguments)},find(n,t){return Oe(this,"find",n,t,$t,arguments)},findIndex(n,t){return Oe(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Oe(this,"findLast",n,t,$t,arguments)},findLastIndex(n,t){return Oe(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Oe(this,"forEach",n,t,void 0,arguments)},includes(...n){return Gi(this,"includes",n)},indexOf(...n){return Gi(this,"indexOf",n)},join(n){return kn(this).join(n)},lastIndexOf(...n){return Gi(this,"lastIndexOf",n)},map(n,t){return Oe(this,"map",n,t,void 0,arguments)},pop(){return br(this,"pop")},push(...n){return br(this,"push",n)},reduce(n,...t){return xl(this,"reduce",n,t)},reduceRight(n,...t){return xl(this,"reduceRight",n,t)},shift(){return br(this,"shift")},some(n,t){return Oe(this,"some",n,t,void 0,arguments)},splice(...n){return br(this,"splice",n)},toReversed(){return kn(this).toReversed()},toSorted(n){return kn(this).toSorted(n)},toSpliced(...n){return kn(this).toSpliced(...n)},unshift(...n){return br(this,"unshift",n)},values(){return Ki(this,"values",$t)}};function Ki(n,t,e){const r=ui(n),s=r[t]();return r!==n&&!de(n)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.value&&(o.value=e(o.value)),o}),s}const vd=Array.prototype;function Oe(n,t,e,r,s,o){const a=ui(n),l=a!==n&&!de(n),c=a[t];if(c!==vd[t]){const g=c.apply(n,o);return l?$t(g):g}let f=e;a!==n&&(l?f=function(g,E){return e.call(this,$t(g),E,n)}:e.length>2&&(f=function(g,E){return e.call(this,g,E,n)}));const d=c.call(a,f,r);return l&&s?s(d):d}function xl(n,t,e,r){const s=ui(n);let o=e;return s!==n&&(de(n)?e.length>3&&(o=function(a,l,c){return e.call(this,a,l,c,n)}):o=function(a,l,c){return e.call(this,a,$t(l),c,n)}),s[t](o,...r)}function Gi(n,t,e){const r=pt(n);Qt(r,"iterate",zr);const s=r[t](...e);return(s===-1||s===!1)&&aa(e[0])?(e[0]=pt(e[0]),r[t](...e)):s}function br(n,t,e=[]){Le(),ta();const r=pt(n)[t].apply(n,e);return ea(),Fe(),r}const Ed=Wo("__proto__,__v_isRef,__isVue"),Rc=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(hn));function Td(n){hn(n)||(n=String(n));const t=pt(this);return Qt(t,"has",n),t.hasOwnProperty(n)}class Sc{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,r){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,o=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return o;if(e==="__v_raw")return r===(s?o?xd:Dc:o?xc:Vc).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=nt(t);if(!s){let c;if(a&&(c=yd[e]))return c;if(e==="hasOwnProperty")return Td}const l=Reflect.get(t,e,Xt(t)?t:r);return(hn(e)?Rc.has(e):Ed(e))||(s||Qt(t,"get",e),o)?l:Xt(l)?a&&Xo(e)?l:l.value:At(l)?s?Nc(l):ia(l):l}}class Pc extends Sc{constructor(t=!1){super(!1,t)}set(t,e,r,s){let o=t[e];if(!this._isShallow){const c=rn(o);if(!de(r)&&!rn(r)&&(o=pt(o),r=pt(r)),!nt(t)&&Xt(o)&&!Xt(r))return c?!1:(o.value=r,!0)}const a=nt(t)&&Xo(e)?Number(e)<t.length:gt(t,e),l=Reflect.set(t,e,r,Xt(t)?t:s);return t===pt(s)&&(a?Je(r,o)&&ke(t,"set",e,r):ke(t,"add",e,r)),l}deleteProperty(t,e){const r=gt(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&r&&ke(t,"delete",e,void 0),s}has(t,e){const r=Reflect.has(t,e);return(!hn(e)||!Rc.has(e))&&Qt(t,"has",e),r}ownKeys(t){return Qt(t,"iterate",nt(t)?"length":Cn),Reflect.ownKeys(t)}}class Id extends Sc{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const wd=new Pc,Ad=new Id,Cd=new Pc(!0);const _o=n=>n,As=n=>Reflect.getPrototypeOf(n);function bd(n,t,e){return function(...r){const s=this.__v_raw,o=pt(s),a=qn(o),l=n==="entries"||n===Symbol.iterator&&a,c=n==="keys"&&a,f=s[n](...r),d=e?_o:t?js:$t;return!t&&Qt(o,"iterate",c?mo:Cn),{next(){const{value:g,done:E}=f.next();return E?{value:g,done:E}:{value:l?[d(g[0]),d(g[1])]:d(g),done:E}},[Symbol.iterator](){return this}}}}function Cs(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Rd(n,t){const e={get(s){const o=this.__v_raw,a=pt(o),l=pt(s);n||(Je(s,l)&&Qt(a,"get",s),Qt(a,"get",l));const{has:c}=As(a),f=t?_o:n?js:$t;if(c.call(a,s))return f(o.get(s));if(c.call(a,l))return f(o.get(l));o!==a&&o.get(s)},get size(){const s=this.__v_raw;return!n&&Qt(pt(s),"iterate",Cn),Reflect.get(s,"size",s)},has(s){const o=this.__v_raw,a=pt(o),l=pt(s);return n||(Je(s,l)&&Qt(a,"has",s),Qt(a,"has",l)),s===l?o.has(s):o.has(s)||o.has(l)},forEach(s,o){const a=this,l=a.__v_raw,c=pt(l),f=t?_o:n?js:$t;return!n&&Qt(c,"iterate",Cn),l.forEach((d,g)=>s.call(o,f(d),f(g),a))}};return re(e,n?{add:Cs("add"),set:Cs("set"),delete:Cs("delete"),clear:Cs("clear")}:{add(s){!t&&!de(s)&&!rn(s)&&(s=pt(s));const o=pt(this);return As(o).has.call(o,s)||(o.add(s),ke(o,"add",s,s)),this},set(s,o){!t&&!de(o)&&!rn(o)&&(o=pt(o));const a=pt(this),{has:l,get:c}=As(a);let f=l.call(a,s);f||(s=pt(s),f=l.call(a,s));const d=c.call(a,s);return a.set(s,o),f?Je(o,d)&&ke(a,"set",s,o):ke(a,"add",s,o),this},delete(s){const o=pt(this),{has:a,get:l}=As(o);let c=a.call(o,s);c||(s=pt(s),c=a.call(o,s)),l&&l.call(o,s);const f=o.delete(s);return c&&ke(o,"delete",s,void 0),f},clear(){const s=pt(this),o=s.size!==0,a=s.clear();return o&&ke(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=bd(s,n,t)}),e}function sa(n,t){const e=Rd(n,t);return(r,s,o)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(gt(e,s)&&s in r?e:r,s,o)}const Sd={get:sa(!1,!1)},Pd={get:sa(!1,!0)},Vd={get:sa(!0,!1)};const Vc=new WeakMap,xc=new WeakMap,Dc=new WeakMap,xd=new WeakMap;function Dd(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nd(n){return n.__v_skip||!Object.isExtensible(n)?0:Dd(sd(n))}function ia(n){return rn(n)?n:oa(n,!1,wd,Sd,Vc)}function Od(n){return oa(n,!1,Cd,Pd,xc)}function Nc(n){return oa(n,!0,Ad,Vd,Dc)}function oa(n,t,e,r,s){if(!At(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const o=Nd(n);if(o===0)return n;const a=s.get(n);if(a)return a;const l=new Proxy(n,o===2?r:e);return s.set(n,l),l}function Hn(n){return rn(n)?Hn(n.__v_raw):!!(n&&n.__v_isReactive)}function rn(n){return!!(n&&n.__v_isReadonly)}function de(n){return!!(n&&n.__v_isShallow)}function aa(n){return n?!!n.__v_raw:!1}function pt(n){const t=n&&n.__v_raw;return t?pt(t):n}function Md(n){return!gt(n,"__v_skip")&&Object.isExtensible(n)&&ho(n,"__v_skip",!0),n}const $t=n=>At(n)?ia(n):n,js=n=>At(n)?Nc(n):n;function Xt(n){return n?n.__v_isRef===!0:!1}function kd(n){return Ld(n,!1)}function Ld(n,t){return Xt(n)?n:new Fd(n,t)}class Fd{constructor(t,e){this.dep=new ra,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:pt(t),this._value=e?t:$t(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,r=this.__v_isShallow||de(t)||rn(t);t=r?t:pt(t),Je(t,e)&&(this._rawValue=t,this._value=r?t:$t(t),this.dep.trigger())}}function Bd(n){return Xt(n)?n.value:n}const Ud={get:(n,t,e)=>t==="__v_raw"?n:Bd(Reflect.get(n,t,e)),set:(n,t,e,r)=>{const s=n[t];return Xt(s)&&!Xt(e)?(s.value=e,!0):Reflect.set(n,t,e,r)}};function Oc(n){return Hn(n)?n:new Proxy(n,Ud)}class jd{constructor(t,e,r){this.fn=t,this.setter=e,this._value=void 0,this.dep=new ra(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Hr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Et!==this)return Tc(this,!0),!0}get value(){const t=this.dep.track();return Ac(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function $d(n,t,e=!1){let r,s;return it(n)?r=n:(r=n.get,s=n.set),new jd(r,s,e)}const bs={},$s=new WeakMap;let Tn;function qd(n,t=!1,e=Tn){if(e){let r=$s.get(e);r||$s.set(e,r=[]),r.push(n)}}function Hd(n,t,e=Tt){const{immediate:r,deep:s,once:o,scheduler:a,augmentJob:l,call:c}=e,f=z=>s?z:de(z)||s===!1||s===0?Qe(z,1):Qe(z);let d,g,E,R,O=!1,B=!1;if(Xt(n)?(g=()=>n.value,O=de(n)):Hn(n)?(g=()=>f(n),O=!0):nt(n)?(B=!0,O=n.some(z=>Hn(z)||de(z)),g=()=>n.map(z=>{if(Xt(z))return z.value;if(Hn(z))return f(z);if(it(z))return c?c(z,2):z()})):it(n)?t?g=c?()=>c(n,2):n:g=()=>{if(E){Le();try{E()}finally{Fe()}}const z=Tn;Tn=d;try{return c?c(n,3,[R]):n(R)}finally{Tn=z}}:g=Ce,t&&s){const z=g,mt=s===!0?1/0:s;g=()=>Qe(z(),mt)}const U=gd(),Q=()=>{d.stop(),U&&U.active&&Yo(U.effects,d)};if(o&&t){const z=t;t=(...mt)=>{z(...mt),Q()}}let W=B?new Array(n.length).fill(bs):bs;const Y=z=>{if(!(!(d.flags&1)||!d.dirty&&!z))if(t){const mt=d.run();if(s||O||(B?mt.some((vt,w)=>Je(vt,W[w])):Je(mt,W))){E&&E();const vt=Tn;Tn=d;try{const w=[mt,W===bs?void 0:B&&W[0]===bs?[]:W,R];W=mt,c?c(t,3,w):t(...w)}finally{Tn=vt}}}else d.run()};return l&&l(Y),d=new vc(g),d.scheduler=a?()=>a(Y,!1):Y,R=z=>qd(z,!1,d),E=d.onStop=()=>{const z=$s.get(d);if(z){if(c)c(z,4);else for(const mt of z)mt();$s.delete(d)}},t?r?Y(!0):W=d.run():a?a(Y.bind(null,!0),!0):d.run(),Q.pause=d.pause.bind(d),Q.resume=d.resume.bind(d),Q.stop=Q,Q}function Qe(n,t=1/0,e){if(t<=0||!At(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),t--,Xt(n))Qe(n.value,t,e);else if(nt(n))for(let r=0;r<n.length;r++)Qe(n[r],t,e);else if(hc(n)||qn(n))n.forEach(r=>{Qe(r,t,e)});else if(pc(n)){for(const r in n)Qe(n[r],t,e);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&Qe(n[r],t,e)}return n}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function es(n,t,e,r){try{return r?n(...r):n()}catch(s){ci(s,t,e)}}function Re(n,t,e,r){if(it(n)){const s=es(n,t,e,r);return s&&fc(s)&&s.catch(o=>{ci(o,t,e)}),s}if(nt(n)){const s=[];for(let o=0;o<n.length;o++)s.push(Re(n[o],t,e,r));return s}}function ci(n,t,e,r=!0){const s=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||Tt;if(t){let l=t.parent;const c=t.proxy,f=`https://vuejs.org/error-reference/#runtime-${e}`;for(;l;){const d=l.ec;if(d){for(let g=0;g<d.length;g++)if(d[g](n,c,f)===!1)return}l=l.parent}if(o){Le(),es(o,null,10,[n,c,f]),Fe();return}}zd(n,e,s,r,a)}function zd(n,t,e,r=!0,s=!1){if(s)throw n;console.error(n)}const te=[];let Ee=-1;const zn=[];let Ge=null,Ln=0;const Mc=Promise.resolve();let qs=null;function Kd(n){const t=qs||Mc;return n?t.then(this?n.bind(this):n):t}function Gd(n){let t=Ee+1,e=te.length;for(;t<e;){const r=t+e>>>1,s=te[r],o=Kr(s);o<n||o===n&&s.flags&2?t=r+1:e=r}return t}function la(n){if(!(n.flags&1)){const t=Kr(n),e=te[te.length-1];!e||!(n.flags&2)&&t>=Kr(e)?te.push(n):te.splice(Gd(t),0,n),n.flags|=1,kc()}}function kc(){qs||(qs=Mc.then(Fc))}function Wd(n){nt(n)?zn.push(...n):Ge&&n.id===-1?Ge.splice(Ln+1,0,n):n.flags&1||(zn.push(n),n.flags|=1),kc()}function Dl(n,t,e=Ee+1){for(;e<te.length;e++){const r=te[e];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;te.splice(e,1),e--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Lc(n){if(zn.length){const t=[...new Set(zn)].sort((e,r)=>Kr(e)-Kr(r));if(zn.length=0,Ge){Ge.push(...t);return}for(Ge=t,Ln=0;Ln<Ge.length;Ln++){const e=Ge[Ln];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Ge=null,Ln=0}}const Kr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Fc(n){try{for(Ee=0;Ee<te.length;Ee++){const t=te[Ee];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),es(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ee<te.length;Ee++){const t=te[Ee];t&&(t.flags&=-2)}Ee=-1,te.length=0,Lc(),qs=null,(te.length||zn.length)&&Fc()}}let Ae=null,Bc=null;function Hs(n){const t=Ae;return Ae=n,Bc=n&&n.type.__scopeId||null,t}function Qd(n,t=Ae,e){if(!t||n._n)return n;const r=(...s)=>{r._d&&jl(-1);const o=Hs(t);let a;try{a=n(...s)}finally{Hs(o),r._d&&jl(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function vn(n,t,e,r){const s=n.dirs,o=t&&t.dirs;for(let a=0;a<s.length;a++){const l=s[a];o&&(l.oldValue=o[a].value);let c=l.dir[r];c&&(Le(),Re(c,e,8,[n.el,l,n,t]),Fe())}}const Yd=Symbol("_vte"),Xd=n=>n.__isTeleport;function ua(n,t){n.shapeFlag&6&&n.component?(n.transition=t,ua(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function Uc(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Mr(n,t,e,r,s=!1){if(nt(n)){n.forEach((O,B)=>Mr(O,t&&(nt(t)?t[B]:t),e,r,s));return}if(kr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Mr(n,t,e,r.component.subTree);return}const o=r.shapeFlag&4?da(r.component):r.el,a=s?null:o,{i:l,r:c}=n,f=t&&t.r,d=l.refs===Tt?l.refs={}:l.refs,g=l.setupState,E=pt(g),R=g===Tt?()=>!1:O=>gt(E,O);if(f!=null&&f!==c&&(Vt(f)?(d[f]=null,R(f)&&(g[f]=null)):Xt(f)&&(f.value=null)),it(c))es(c,l,12,[a,d]);else{const O=Vt(c),B=Xt(c);if(O||B){const U=()=>{if(n.f){const Q=O?R(c)?g[c]:d[c]:c.value;s?nt(Q)&&Yo(Q,o):nt(Q)?Q.includes(o)||Q.push(o):O?(d[c]=[o],R(c)&&(g[c]=d[c])):(c.value=[o],n.k&&(d[n.k]=c.value))}else O?(d[c]=a,R(c)&&(g[c]=a)):B&&(c.value=a,n.k&&(d[n.k]=a))};a?(U.id=-1,ue(U,e)):U()}}}li().requestIdleCallback;li().cancelIdleCallback;const kr=n=>!!n.type.__asyncLoader,jc=n=>n.type.__isKeepAlive;function Jd(n,t){$c(n,"a",t)}function Zd(n,t){$c(n,"da",t)}function $c(n,t,e=ee){const r=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(hi(t,r,e),e){let s=e.parent;for(;s&&s.parent;)jc(s.parent.vnode)&&tp(r,t,e,s),s=s.parent}}function tp(n,t,e,r){const s=hi(t,n,r,!0);Hc(()=>{Yo(r[t],s)},e)}function hi(n,t,e=ee,r=!1){if(e){const s=e[n]||(e[n]=[]),o=t.__weh||(t.__weh=(...a)=>{Le();const l=ns(e),c=Re(t,e,n,a);return l(),Fe(),c});return r?s.unshift(o):s.push(o),o}}const je=n=>(t,e=ee)=>{(!Wr||n==="sp")&&hi(n,(...r)=>t(...r),e)},ep=je("bm"),qc=je("m"),np=je("bu"),rp=je("u"),sp=je("bum"),Hc=je("um"),ip=je("sp"),op=je("rtg"),ap=je("rtc");function lp(n,t=ee){hi("ec",n,t)}const up=Symbol.for("v-ndc");function cp(n,t,e,r){let s;const o=e,a=nt(n);if(a||Vt(n)){const l=a&&Hn(n);let c=!1,f=!1;l&&(c=!de(n),f=rn(n),n=ui(n)),s=new Array(n.length);for(let d=0,g=n.length;d<g;d++)s[d]=t(c?f?js($t(n[d])):$t(n[d]):n[d],d,void 0,o)}else if(typeof n=="number"){s=new Array(n);for(let l=0;l<n;l++)s[l]=t(l+1,l,void 0,o)}else if(At(n))if(n[Symbol.iterator])s=Array.from(n,(l,c)=>t(l,c,void 0,o));else{const l=Object.keys(n);s=new Array(l.length);for(let c=0,f=l.length;c<f;c++){const d=l[c];s[c]=t(n[d],d,c,o)}}else s=[];return s}const yo=n=>n?ch(n)?da(n):yo(n.parent):null,Lr=re(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>yo(n.parent),$root:n=>yo(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Kc(n),$forceUpdate:n=>n.f||(n.f=()=>{la(n.update)}),$nextTick:n=>n.n||(n.n=Kd.bind(n.proxy)),$watch:n=>Dp.bind(n)}),Wi=(n,t)=>n!==Tt&&!n.__isScriptSetup&&gt(n,t),hp={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:r,data:s,props:o,accessCache:a,type:l,appContext:c}=n;let f;if(t[0]!=="$"){const R=a[t];if(R!==void 0)switch(R){case 1:return r[t];case 2:return s[t];case 4:return e[t];case 3:return o[t]}else{if(Wi(r,t))return a[t]=1,r[t];if(s!==Tt&&gt(s,t))return a[t]=2,s[t];if((f=n.propsOptions[0])&&gt(f,t))return a[t]=3,o[t];if(e!==Tt&&gt(e,t))return a[t]=4,e[t];vo&&(a[t]=0)}}const d=Lr[t];let g,E;if(d)return t==="$attrs"&&Qt(n.attrs,"get",""),d(n);if((g=l.__cssModules)&&(g=g[t]))return g;if(e!==Tt&&gt(e,t))return a[t]=4,e[t];if(E=c.config.globalProperties,gt(E,t))return E[t]},set({_:n},t,e){const{data:r,setupState:s,ctx:o}=n;return Wi(s,t)?(s[t]=e,!0):r!==Tt&&gt(r,t)?(r[t]=e,!0):gt(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(o[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:r,appContext:s,propsOptions:o}},a){let l;return!!e[a]||n!==Tt&&gt(n,a)||Wi(t,a)||(l=o[0])&&gt(l,a)||gt(r,a)||gt(Lr,a)||gt(s.config.globalProperties,a)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:gt(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Nl(n){return nt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let vo=!0;function fp(n){const t=Kc(n),e=n.proxy,r=n.ctx;vo=!1,t.beforeCreate&&Ol(t.beforeCreate,n,"bc");const{data:s,computed:o,methods:a,watch:l,provide:c,inject:f,created:d,beforeMount:g,mounted:E,beforeUpdate:R,updated:O,activated:B,deactivated:U,beforeDestroy:Q,beforeUnmount:W,destroyed:Y,unmounted:z,render:mt,renderTracked:vt,renderTriggered:w,errorCaptured:m,serverPrefetch:v,expose:I,inheritAttrs:A,components:b,directives:y,filters:ae}=t;if(f&&dp(f,r,null),a)for(const _t in a){const ft=a[_t];it(ft)&&(r[_t]=ft.bind(e))}if(s){const _t=s.call(e,e);At(_t)&&(n.data=ia(_t))}if(vo=!0,o)for(const _t in o){const ft=o[_t],pe=it(ft)?ft.bind(e,e):it(ft.get)?ft.get.bind(e,e):Ce,fn=!it(ft)&&it(ft.set)?ft.set.bind(e):Ce,Ve=tg({get:pe,set:fn});Object.defineProperty(r,_t,{enumerable:!0,configurable:!0,get:()=>Ve.value,set:xt=>Ve.value=xt})}if(l)for(const _t in l)zc(l[_t],r,e,_t);if(c){const _t=it(c)?c.call(e):c;Reflect.ownKeys(_t).forEach(ft=>{vp(ft,_t[ft])})}d&&Ol(d,n,"c");function kt(_t,ft){nt(ft)?ft.forEach(pe=>_t(pe.bind(e))):ft&&_t(ft.bind(e))}if(kt(ep,g),kt(qc,E),kt(np,R),kt(rp,O),kt(Jd,B),kt(Zd,U),kt(lp,m),kt(ap,vt),kt(op,w),kt(sp,W),kt(Hc,z),kt(ip,v),nt(I))if(I.length){const _t=n.exposed||(n.exposed={});I.forEach(ft=>{Object.defineProperty(_t,ft,{get:()=>e[ft],set:pe=>e[ft]=pe})})}else n.exposed||(n.exposed={});mt&&n.render===Ce&&(n.render=mt),A!=null&&(n.inheritAttrs=A),b&&(n.components=b),y&&(n.directives=y),v&&Uc(n)}function dp(n,t,e=Ce){nt(n)&&(n=Eo(n));for(const r in n){const s=n[r];let o;At(s)?"default"in s?o=Ns(s.from||r,s.default,!0):o=Ns(s.from||r):o=Ns(s),Xt(o)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):t[r]=o}}function Ol(n,t,e){Re(nt(n)?n.map(r=>r.bind(t.proxy)):n.bind(t.proxy),t,e)}function zc(n,t,e,r){let s=r.includes(".")?ih(e,r):()=>e[r];if(Vt(n)){const o=t[n];it(o)&&Yi(s,o)}else if(it(n))Yi(s,n.bind(e));else if(At(n))if(nt(n))n.forEach(o=>zc(o,t,e,r));else{const o=it(n.handler)?n.handler.bind(e):t[n.handler];it(o)&&Yi(s,o,n)}}function Kc(n){const t=n.type,{mixins:e,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=n.appContext,l=o.get(t);let c;return l?c=l:!s.length&&!e&&!r?c=t:(c={},s.length&&s.forEach(f=>zs(c,f,a,!0)),zs(c,t,a)),At(t)&&o.set(t,c),c}function zs(n,t,e,r=!1){const{mixins:s,extends:o}=t;o&&zs(n,o,e,!0),s&&s.forEach(a=>zs(n,a,e,!0));for(const a in t)if(!(r&&a==="expose")){const l=pp[a]||e&&e[a];n[a]=l?l(n[a],t[a]):t[a]}return n}const pp={data:Ml,props:kl,emits:kl,methods:Sr,computed:Sr,beforeCreate:Zt,created:Zt,beforeMount:Zt,mounted:Zt,beforeUpdate:Zt,updated:Zt,beforeDestroy:Zt,beforeUnmount:Zt,destroyed:Zt,unmounted:Zt,activated:Zt,deactivated:Zt,errorCaptured:Zt,serverPrefetch:Zt,components:Sr,directives:Sr,watch:mp,provide:Ml,inject:gp};function Ml(n,t){return t?n?function(){return re(it(n)?n.call(this,this):n,it(t)?t.call(this,this):t)}:t:n}function gp(n,t){return Sr(Eo(n),Eo(t))}function Eo(n){if(nt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Zt(n,t){return n?[...new Set([].concat(n,t))]:t}function Sr(n,t){return n?re(Object.create(null),n,t):t}function kl(n,t){return n?nt(n)&&nt(t)?[...new Set([...n,...t])]:re(Object.create(null),Nl(n),Nl(t??{})):t}function mp(n,t){if(!n)return t;if(!t)return n;const e=re(Object.create(null),n);for(const r in t)e[r]=Zt(n[r],t[r]);return e}function Gc(){return{app:null,config:{isNativeTag:nd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _p=0;function yp(n,t){return function(r,s=null){it(r)||(r=re({},r)),s!=null&&!At(s)&&(s=null);const o=Gc(),a=new WeakSet,l=[];let c=!1;const f=o.app={_uid:_p++,_component:r,_props:s,_container:null,_context:o,_instance:null,version:eg,get config(){return o.config},set config(d){},use(d,...g){return a.has(d)||(d&&it(d.install)?(a.add(d),d.install(f,...g)):it(d)&&(a.add(d),d(f,...g))),f},mixin(d){return o.mixins.includes(d)||o.mixins.push(d),f},component(d,g){return g?(o.components[d]=g,f):o.components[d]},directive(d,g){return g?(o.directives[d]=g,f):o.directives[d]},mount(d,g,E){if(!c){const R=f._ceVNode||bn(r,s);return R.appContext=o,E===!0?E="svg":E===!1&&(E=void 0),n(R,d,E),c=!0,f._container=d,d.__vue_app__=f,da(R.component)}},onUnmount(d){l.push(d)},unmount(){c&&(Re(l,f._instance,16),n(null,f._container),delete f._container.__vue_app__)},provide(d,g){return o.provides[d]=g,f},runWithContext(d){const g=Kn;Kn=f;try{return d()}finally{Kn=g}}};return f}}let Kn=null;function vp(n,t){if(ee){let e=ee.provides;const r=ee.parent&&ee.parent.provides;r===e&&(e=ee.provides=Object.create(r)),e[n]=t}}function Ns(n,t,e=!1){const r=ee||Ae;if(r||Kn){let s=Kn?Kn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&it(t)?t.call(r&&r.proxy):t}}const Wc={},Qc=()=>Object.create(Wc),Yc=n=>Object.getPrototypeOf(n)===Wc;function Ep(n,t,e,r=!1){const s={},o=Qc();n.propsDefaults=Object.create(null),Xc(n,t,s,o);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);e?n.props=r?s:Od(s):n.type.props?n.props=s:n.props=o,n.attrs=o}function Tp(n,t,e,r){const{props:s,attrs:o,vnode:{patchFlag:a}}=n,l=pt(s),[c]=n.propsOptions;let f=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=n.vnode.dynamicProps;for(let g=0;g<d.length;g++){let E=d[g];if(fi(n.emitsOptions,E))continue;const R=t[E];if(c)if(gt(o,E))R!==o[E]&&(o[E]=R,f=!0);else{const O=nn(E);s[O]=To(c,l,O,R,n,!1)}else R!==o[E]&&(o[E]=R,f=!0)}}}else{Xc(n,t,s,o)&&(f=!0);let d;for(const g in l)(!t||!gt(t,g)&&((d=Vn(g))===g||!gt(t,d)))&&(c?e&&(e[g]!==void 0||e[d]!==void 0)&&(s[g]=To(c,l,g,void 0,n,!0)):delete s[g]);if(o!==l)for(const g in o)(!t||!gt(t,g))&&(delete o[g],f=!0)}f&&ke(n.attrs,"set","")}function Xc(n,t,e,r){const[s,o]=n.propsOptions;let a=!1,l;if(t)for(let c in t){if(Dr(c))continue;const f=t[c];let d;s&&gt(s,d=nn(c))?!o||!o.includes(d)?e[d]=f:(l||(l={}))[d]=f:fi(n.emitsOptions,c)||(!(c in r)||f!==r[c])&&(r[c]=f,a=!0)}if(o){const c=pt(e),f=l||Tt;for(let d=0;d<o.length;d++){const g=o[d];e[g]=To(s,c,g,f[g],n,!gt(f,g))}}return a}function To(n,t,e,r,s,o){const a=n[e];if(a!=null){const l=gt(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&it(c)){const{propsDefaults:f}=s;if(e in f)r=f[e];else{const d=ns(s);r=f[e]=c.call(null,t),d()}}else r=c;s.ce&&s.ce._setProp(e,r)}a[0]&&(o&&!l?r=!1:a[1]&&(r===""||r===Vn(e))&&(r=!0))}return r}const Ip=new WeakMap;function Jc(n,t,e=!1){const r=e?Ip:t.propsCache,s=r.get(n);if(s)return s;const o=n.props,a={},l=[];let c=!1;if(!it(n)){const d=g=>{c=!0;const[E,R]=Jc(g,t,!0);re(a,E),R&&l.push(...R)};!e&&t.mixins.length&&t.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!o&&!c)return At(n)&&r.set(n,$n),$n;if(nt(o))for(let d=0;d<o.length;d++){const g=nn(o[d]);Ll(g)&&(a[g]=Tt)}else if(o)for(const d in o){const g=nn(d);if(Ll(g)){const E=o[d],R=a[g]=nt(E)||it(E)?{type:E}:re({},E),O=R.type;let B=!1,U=!0;if(nt(O))for(let Q=0;Q<O.length;++Q){const W=O[Q],Y=it(W)&&W.name;if(Y==="Boolean"){B=!0;break}else Y==="String"&&(U=!1)}else B=it(O)&&O.name==="Boolean";R[0]=B,R[1]=U,(B||gt(R,"default"))&&l.push(g)}}const f=[a,l];return At(n)&&r.set(n,f),f}function Ll(n){return n[0]!=="$"&&!Dr(n)}const ca=n=>n[0]==="_"||n==="$stable",ha=n=>nt(n)?n.map(Ie):[Ie(n)],wp=(n,t,e)=>{if(t._n)return t;const r=Qd((...s)=>ha(t(...s)),e);return r._c=!1,r},Zc=(n,t,e)=>{const r=n._ctx;for(const s in n){if(ca(s))continue;const o=n[s];if(it(o))t[s]=wp(s,o,r);else if(o!=null){const a=ha(o);t[s]=()=>a}}},th=(n,t)=>{const e=ha(t);n.slots.default=()=>e},eh=(n,t,e)=>{for(const r in t)(e||!ca(r))&&(n[r]=t[r])},Ap=(n,t,e)=>{const r=n.slots=Qc();if(n.vnode.shapeFlag&32){const s=t.__;s&&ho(r,"__",s,!0);const o=t._;o?(eh(r,t,e),e&&ho(r,"_",o,!0)):Zc(t,r)}else t&&th(n,t)},Cp=(n,t,e)=>{const{vnode:r,slots:s}=n;let o=!0,a=Tt;if(r.shapeFlag&32){const l=t._;l?e&&l===1?o=!1:eh(s,t,e):(o=!t.$stable,Zc(t,s)),a=t}else t&&(th(n,t),a={default:1});if(o)for(const l in s)!ca(l)&&a[l]==null&&delete s[l]},ue=Bp;function bp(n){return Rp(n)}function Rp(n,t){const e=li();e.__VUE__=!0;const{insert:r,remove:s,patchProp:o,createElement:a,createText:l,createComment:c,setText:f,setElementText:d,parentNode:g,nextSibling:E,setScopeId:R=Ce,insertStaticContent:O}=n,B=(_,T,P,N=null,x=null,D=null,q=void 0,L=null,k=!!T.dynamicChildren)=>{if(_===T)return;_&&!Rr(_,T)&&(N=xe(_),xt(_,x,D,!0),_=null),T.patchFlag===-2&&(k=!1,T.dynamicChildren=null);const{type:M,ref:G,shapeFlag:j}=T;switch(M){case di:U(_,T,P,N);break;case Xn:Q(_,T,P,N);break;case Xi:_==null&&W(T,P,N,q);break;case me:b(_,T,P,N,x,D,q,L,k);break;default:j&1?mt(_,T,P,N,x,D,q,L,k):j&6?y(_,T,P,N,x,D,q,L,k):(j&64||j&128)&&M.process(_,T,P,N,x,D,q,L,k,ye)}G!=null&&x?Mr(G,_&&_.ref,D,T||_,!T):G==null&&_&&_.ref!=null&&Mr(_.ref,null,D,_,!0)},U=(_,T,P,N)=>{if(_==null)r(T.el=l(T.children),P,N);else{const x=T.el=_.el;T.children!==_.children&&f(x,T.children)}},Q=(_,T,P,N)=>{_==null?r(T.el=c(T.children||""),P,N):T.el=_.el},W=(_,T,P,N)=>{[_.el,_.anchor]=O(_.children,T,P,N,_.el,_.anchor)},Y=({el:_,anchor:T},P,N)=>{let x;for(;_&&_!==T;)x=E(_),r(_,P,N),_=x;r(T,P,N)},z=({el:_,anchor:T})=>{let P;for(;_&&_!==T;)P=E(_),s(_),_=P;s(T)},mt=(_,T,P,N,x,D,q,L,k)=>{T.type==="svg"?q="svg":T.type==="math"&&(q="mathml"),_==null?vt(T,P,N,x,D,q,L,k):v(_,T,x,D,q,L,k)},vt=(_,T,P,N,x,D,q,L)=>{let k,M;const{props:G,shapeFlag:j,transition:K,dirs:Z}=_;if(k=_.el=a(_.type,D,G&&G.is,G),j&8?d(k,_.children):j&16&&m(_.children,k,null,N,x,Qi(_,D),q,L),Z&&vn(_,null,N,"created"),w(k,_,_.scopeId,q,N),G){for(const st in G)st!=="value"&&!Dr(st)&&o(k,st,null,G[st],D,N);"value"in G&&o(k,"value",null,G.value,D),(M=G.onVnodeBeforeMount)&&ve(M,N,_)}Z&&vn(_,null,N,"beforeMount");const X=Sp(x,K);X&&K.beforeEnter(k),r(k,T,P),((M=G&&G.onVnodeMounted)||X||Z)&&ue(()=>{M&&ve(M,N,_),X&&K.enter(k),Z&&vn(_,null,N,"mounted")},x)},w=(_,T,P,N,x)=>{if(P&&R(_,P),N)for(let D=0;D<N.length;D++)R(_,N[D]);if(x){let D=x.subTree;if(T===D||ah(D.type)&&(D.ssContent===T||D.ssFallback===T)){const q=x.vnode;w(_,q,q.scopeId,q.slotScopeIds,x.parent)}}},m=(_,T,P,N,x,D,q,L,k=0)=>{for(let M=k;M<_.length;M++){const G=_[M]=L?We(_[M]):Ie(_[M]);B(null,G,T,P,N,x,D,q,L)}},v=(_,T,P,N,x,D,q)=>{const L=T.el=_.el;let{patchFlag:k,dynamicChildren:M,dirs:G}=T;k|=_.patchFlag&16;const j=_.props||Tt,K=T.props||Tt;let Z;if(P&&En(P,!1),(Z=K.onVnodeBeforeUpdate)&&ve(Z,P,T,_),G&&vn(T,_,P,"beforeUpdate"),P&&En(P,!0),(j.innerHTML&&K.innerHTML==null||j.textContent&&K.textContent==null)&&d(L,""),M?I(_.dynamicChildren,M,L,P,N,Qi(T,x),D):q||ft(_,T,L,null,P,N,Qi(T,x),D,!1),k>0){if(k&16)A(L,j,K,P,x);else if(k&2&&j.class!==K.class&&o(L,"class",null,K.class,x),k&4&&o(L,"style",j.style,K.style,x),k&8){const X=T.dynamicProps;for(let st=0;st<X.length;st++){const at=X[st],Lt=j[at],Ft=K[at];(Ft!==Lt||at==="value")&&o(L,at,Lt,Ft,x,P)}}k&1&&_.children!==T.children&&d(L,T.children)}else!q&&M==null&&A(L,j,K,P,x);((Z=K.onVnodeUpdated)||G)&&ue(()=>{Z&&ve(Z,P,T,_),G&&vn(T,_,P,"updated")},N)},I=(_,T,P,N,x,D,q)=>{for(let L=0;L<T.length;L++){const k=_[L],M=T[L],G=k.el&&(k.type===me||!Rr(k,M)||k.shapeFlag&198)?g(k.el):P;B(k,M,G,null,N,x,D,q,!0)}},A=(_,T,P,N,x)=>{if(T!==P){if(T!==Tt)for(const D in T)!Dr(D)&&!(D in P)&&o(_,D,T[D],null,x,N);for(const D in P){if(Dr(D))continue;const q=P[D],L=T[D];q!==L&&D!=="value"&&o(_,D,L,q,x,N)}"value"in P&&o(_,"value",T.value,P.value,x)}},b=(_,T,P,N,x,D,q,L,k)=>{const M=T.el=_?_.el:l(""),G=T.anchor=_?_.anchor:l("");let{patchFlag:j,dynamicChildren:K,slotScopeIds:Z}=T;Z&&(L=L?L.concat(Z):Z),_==null?(r(M,P,N),r(G,P,N),m(T.children||[],P,G,x,D,q,L,k)):j>0&&j&64&&K&&_.dynamicChildren?(I(_.dynamicChildren,K,P,x,D,q,L),(T.key!=null||x&&T===x.subTree)&&nh(_,T,!0)):ft(_,T,P,G,x,D,q,L,k)},y=(_,T,P,N,x,D,q,L,k)=>{T.slotScopeIds=L,_==null?T.shapeFlag&512?x.ctx.activate(T,P,N,q,k):ae(T,P,N,x,D,q,k):$e(_,T,k)},ae=(_,T,P,N,x,D,q)=>{const L=_.component=Wp(_,N,x);if(jc(_)&&(L.ctx.renderer=ye),Qp(L,!1,q),L.asyncDep){if(x&&x.registerDep(L,kt,q),!_.el){const k=L.subTree=bn(Xn);Q(null,k,T,P)}}else kt(L,_,T,P,x,D,q)},$e=(_,T,P)=>{const N=T.component=_.component;if(Lp(_,T,P))if(N.asyncDep&&!N.asyncResolved){_t(N,T,P);return}else N.next=T,N.update();else T.el=_.el,N.vnode=T},kt=(_,T,P,N,x,D,q)=>{const L=()=>{if(_.isMounted){let{next:j,bu:K,u:Z,parent:X,vnode:st}=_;{const Ht=rh(_);if(Ht){j&&(j.el=st.el,_t(_,j,q)),Ht.asyncDep.then(()=>{_.isUnmounted||L()});return}}let at=j,Lt;En(_,!1),j?(j.el=st.el,_t(_,j,q)):j=st,K&&qi(K),(Lt=j.props&&j.props.onVnodeBeforeUpdate)&&ve(Lt,X,j,st),En(_,!0);const Ft=Bl(_),he=_.subTree;_.subTree=Ft,B(he,Ft,g(he.el),xe(he),_,x,D),j.el=Ft.el,at===null&&Fp(_,Ft.el),Z&&ue(Z,x),(Lt=j.props&&j.props.onVnodeUpdated)&&ue(()=>ve(Lt,X,j,st),x)}else{let j;const{el:K,props:Z}=T,{bm:X,m:st,parent:at,root:Lt,type:Ft}=_,he=kr(T);En(_,!1),X&&qi(X),!he&&(j=Z&&Z.onVnodeBeforeMount)&&ve(j,at,T),En(_,!0);{Lt.ce&&Lt.ce._def.shadowRoot!==!1&&Lt.ce._injectChildStyle(Ft);const Ht=_.subTree=Bl(_);B(null,Ht,P,N,_,x,D),T.el=Ht.el}if(st&&ue(st,x),!he&&(j=Z&&Z.onVnodeMounted)){const Ht=T;ue(()=>ve(j,at,Ht),x)}(T.shapeFlag&256||at&&kr(at.vnode)&&at.vnode.shapeFlag&256)&&_.a&&ue(_.a,x),_.isMounted=!0,T=P=N=null}};_.scope.on();const k=_.effect=new vc(L);_.scope.off();const M=_.update=k.run.bind(k),G=_.job=k.runIfDirty.bind(k);G.i=_,G.id=_.uid,k.scheduler=()=>la(G),En(_,!0),M()},_t=(_,T,P)=>{T.component=_;const N=_.vnode.props;_.vnode=T,_.next=null,Tp(_,T.props,N,P),Cp(_,T.children,P),Le(),Dl(_),Fe()},ft=(_,T,P,N,x,D,q,L,k=!1)=>{const M=_&&_.children,G=_?_.shapeFlag:0,j=T.children,{patchFlag:K,shapeFlag:Z}=T;if(K>0){if(K&128){fn(M,j,P,N,x,D,q,L,k);return}else if(K&256){pe(M,j,P,N,x,D,q,L,k);return}}Z&8?(G&16&&pn(M,x,D),j!==M&&d(P,j)):G&16?Z&16?fn(M,j,P,N,x,D,q,L,k):pn(M,x,D,!0):(G&8&&d(P,""),Z&16&&m(j,P,N,x,D,q,L,k))},pe=(_,T,P,N,x,D,q,L,k)=>{_=_||$n,T=T||$n;const M=_.length,G=T.length,j=Math.min(M,G);let K;for(K=0;K<j;K++){const Z=T[K]=k?We(T[K]):Ie(T[K]);B(_[K],Z,P,null,x,D,q,L,k)}M>G?pn(_,x,D,!0,!1,j):m(T,P,N,x,D,q,L,k,j)},fn=(_,T,P,N,x,D,q,L,k)=>{let M=0;const G=T.length;let j=_.length-1,K=G-1;for(;M<=j&&M<=K;){const Z=_[M],X=T[M]=k?We(T[M]):Ie(T[M]);if(Rr(Z,X))B(Z,X,P,null,x,D,q,L,k);else break;M++}for(;M<=j&&M<=K;){const Z=_[j],X=T[K]=k?We(T[K]):Ie(T[K]);if(Rr(Z,X))B(Z,X,P,null,x,D,q,L,k);else break;j--,K--}if(M>j){if(M<=K){const Z=K+1,X=Z<G?T[Z].el:N;for(;M<=K;)B(null,T[M]=k?We(T[M]):Ie(T[M]),P,X,x,D,q,L,k),M++}}else if(M>K)for(;M<=j;)xt(_[M],x,D,!0),M++;else{const Z=M,X=M,st=new Map;for(M=X;M<=K;M++){const Bt=T[M]=k?We(T[M]):Ie(T[M]);Bt.key!=null&&st.set(Bt.key,M)}let at,Lt=0;const Ft=K-X+1;let he=!1,Ht=0;const qe=new Array(Ft);for(M=0;M<Ft;M++)qe[M]=0;for(M=Z;M<=j;M++){const Bt=_[M];if(Lt>=Ft){xt(Bt,x,D,!0);continue}let fe;if(Bt.key!=null)fe=st.get(Bt.key);else for(at=X;at<=K;at++)if(qe[at-X]===0&&Rr(Bt,T[at])){fe=at;break}fe===void 0?xt(Bt,x,D,!0):(qe[fe-X]=M+1,fe>=Ht?Ht=fe:he=!0,B(Bt,T[fe],P,null,x,D,q,L,k),Lt++)}const dr=he?Pp(qe):$n;for(at=dr.length-1,M=Ft-1;M>=0;M--){const Bt=X+M,fe=T[Bt],ls=Bt+1<G?T[Bt+1].el:N;qe[M]===0?B(null,fe,P,ls,x,D,q,L,k):he&&(at<0||M!==dr[at]?Ve(fe,P,ls,2):at--)}}},Ve=(_,T,P,N,x=null)=>{const{el:D,type:q,transition:L,children:k,shapeFlag:M}=_;if(M&6){Ve(_.component.subTree,T,P,N);return}if(M&128){_.suspense.move(T,P,N);return}if(M&64){q.move(_,T,P,ye);return}if(q===me){r(D,T,P);for(let j=0;j<k.length;j++)Ve(k[j],T,P,N);r(_.anchor,T,P);return}if(q===Xi){Y(_,T,P);return}if(N!==2&&M&1&&L)if(N===0)L.beforeEnter(D),r(D,T,P),ue(()=>L.enter(D),x);else{const{leave:j,delayLeave:K,afterLeave:Z}=L,X=()=>{_.ctx.isUnmounted?s(D):r(D,T,P)},st=()=>{j(D,()=>{X(),Z&&Z()})};K?K(D,X,st):st()}else r(D,T,P)},xt=(_,T,P,N=!1,x=!1)=>{const{type:D,props:q,ref:L,children:k,dynamicChildren:M,shapeFlag:G,patchFlag:j,dirs:K,cacheIndex:Z}=_;if(j===-2&&(x=!1),L!=null&&(Le(),Mr(L,null,P,_,!0),Fe()),Z!=null&&(T.renderCache[Z]=void 0),G&256){T.ctx.deactivate(_);return}const X=G&1&&K,st=!kr(_);let at;if(st&&(at=q&&q.onVnodeBeforeUnmount)&&ve(at,T,_),G&6)dn(_.component,P,N);else{if(G&128){_.suspense.unmount(P,N);return}X&&vn(_,null,T,"beforeUnmount"),G&64?_.type.remove(_,T,P,ye,N):M&&!M.hasOnce&&(D!==me||j>0&&j&64)?pn(M,T,P,!1,!0):(D===me&&j&384||!x&&G&16)&&pn(k,T,P),N&&Dt(_)}(st&&(at=q&&q.onVnodeUnmounted)||X)&&ue(()=>{at&&ve(at,T,_),X&&vn(_,null,T,"unmounted")},P)},Dt=_=>{const{type:T,el:P,anchor:N,transition:x}=_;if(T===me){bi(P,N);return}if(T===Xi){z(_);return}const D=()=>{s(P),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(_.shapeFlag&1&&x&&!x.persisted){const{leave:q,delayLeave:L}=x,k=()=>q(P,D);L?L(_.el,D,k):k()}else D()},bi=(_,T)=>{let P;for(;_!==T;)P=E(_),s(_),_=P;s(T)},dn=(_,T,P)=>{const{bum:N,scope:x,job:D,subTree:q,um:L,m:k,a:M,parent:G,slots:{__:j}}=_;Fl(k),Fl(M),N&&qi(N),G&&nt(j)&&j.forEach(K=>{G.renderCache[K]=void 0}),x.stop(),D&&(D.flags|=8,xt(q,_,T,P)),L&&ue(L,T),ue(()=>{_.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},pn=(_,T,P,N=!1,x=!1,D=0)=>{for(let q=D;q<_.length;q++)xt(_[q],T,P,N,x)},xe=_=>{if(_.shapeFlag&6)return xe(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const T=E(_.anchor||_.el),P=T&&T[Yd];return P?E(P):T};let hr=!1;const as=(_,T,P)=>{_==null?T._vnode&&xt(T._vnode,null,null,!0):B(T._vnode||null,_,T,null,null,null,P),T._vnode=_,hr||(hr=!0,Dl(),Lc(),hr=!1)},ye={p:B,um:xt,m:Ve,r:Dt,mt:ae,mc:m,pc:ft,pbc:I,n:xe,o:n};return{render:as,hydrate:void 0,createApp:yp(as)}}function Qi({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function En({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Sp(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function nh(n,t,e=!1){const r=n.children,s=t.children;if(nt(r)&&nt(s))for(let o=0;o<r.length;o++){const a=r[o];let l=s[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[o]=We(s[o]),l.el=a.el),!e&&l.patchFlag!==-2&&nh(a,l)),l.type===di&&(l.el=a.el),l.type===Xn&&!l.el&&(l.el=a.el)}}function Pp(n){const t=n.slice(),e=[0];let r,s,o,a,l;const c=n.length;for(r=0;r<c;r++){const f=n[r];if(f!==0){if(s=e[e.length-1],n[s]<f){t[r]=s,e.push(r);continue}for(o=0,a=e.length-1;o<a;)l=o+a>>1,n[e[l]]<f?o=l+1:a=l;f<n[e[o]]&&(o>0&&(t[r]=e[o-1]),e[o]=r)}}for(o=e.length,a=e[o-1];o-- >0;)e[o]=a,a=t[a];return e}function rh(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:rh(t)}function Fl(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const Vp=Symbol.for("v-scx"),xp=()=>Ns(Vp);function Yi(n,t,e){return sh(n,t,e)}function sh(n,t,e=Tt){const{immediate:r,deep:s,flush:o,once:a}=e,l=re({},e),c=t&&r||!t&&o!=="post";let f;if(Wr){if(o==="sync"){const R=xp();f=R.__watcherHandles||(R.__watcherHandles=[])}else if(!c){const R=()=>{};return R.stop=Ce,R.resume=Ce,R.pause=Ce,R}}const d=ee;l.call=(R,O,B)=>Re(R,d,O,B);let g=!1;o==="post"?l.scheduler=R=>{ue(R,d&&d.suspense)}:o!=="sync"&&(g=!0,l.scheduler=(R,O)=>{O?R():la(R)}),l.augmentJob=R=>{t&&(R.flags|=4),g&&(R.flags|=2,d&&(R.id=d.uid,R.i=d))};const E=Hd(n,t,l);return Wr&&(f?f.push(E):c&&E()),E}function Dp(n,t,e){const r=this.proxy,s=Vt(n)?n.includes(".")?ih(r,n):()=>r[n]:n.bind(r,r);let o;it(t)?o=t:(o=t.handler,e=t);const a=ns(this),l=sh(s,o.bind(r),e);return a(),l}function ih(n,t){const e=t.split(".");return()=>{let r=n;for(let s=0;s<e.length&&r;s++)r=r[e[s]];return r}}const Np=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${nn(t)}Modifiers`]||n[`${Vn(t)}Modifiers`];function Op(n,t,...e){if(n.isUnmounted)return;const r=n.vnode.props||Tt;let s=e;const o=t.startsWith("update:"),a=o&&Np(r,t.slice(7));a&&(a.trim&&(s=e.map(d=>Vt(d)?d.trim():d)),a.number&&(s=e.map(ad)));let l,c=r[l=$i(t)]||r[l=$i(nn(t))];!c&&o&&(c=r[l=$i(Vn(t))]),c&&Re(c,n,6,s);const f=r[l+"Once"];if(f){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,Re(f,n,6,s)}}function oh(n,t,e=!1){const r=t.emitsCache,s=r.get(n);if(s!==void 0)return s;const o=n.emits;let a={},l=!1;if(!it(n)){const c=f=>{const d=oh(f,t,!0);d&&(l=!0,re(a,d))};!e&&t.mixins.length&&t.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!o&&!l?(At(n)&&r.set(n,null),null):(nt(o)?o.forEach(c=>a[c]=null):re(a,o),At(n)&&r.set(n,a),a)}function fi(n,t){return!n||!ii(t)?!1:(t=t.slice(2).replace(/Once$/,""),gt(n,t[0].toLowerCase()+t.slice(1))||gt(n,Vn(t))||gt(n,t))}function Bl(n){const{type:t,vnode:e,proxy:r,withProxy:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:f,renderCache:d,props:g,data:E,setupState:R,ctx:O,inheritAttrs:B}=n,U=Hs(n);let Q,W;try{if(e.shapeFlag&4){const z=s||r,mt=z;Q=Ie(f.call(mt,z,d,g,R,E,O)),W=l}else{const z=t;Q=Ie(z.length>1?z(g,{attrs:l,slots:a,emit:c}):z(g,null)),W=t.props?l:Mp(l)}}catch(z){Fr.length=0,ci(z,n,1),Q=bn(Xn)}let Y=Q;if(W&&B!==!1){const z=Object.keys(W),{shapeFlag:mt}=Y;z.length&&mt&7&&(o&&z.some(Qo)&&(W=kp(W,o)),Y=Jn(Y,W,!1,!0))}return e.dirs&&(Y=Jn(Y,null,!1,!0),Y.dirs=Y.dirs?Y.dirs.concat(e.dirs):e.dirs),e.transition&&ua(Y,e.transition),Q=Y,Hs(U),Q}const Mp=n=>{let t;for(const e in n)(e==="class"||e==="style"||ii(e))&&((t||(t={}))[e]=n[e]);return t},kp=(n,t)=>{const e={};for(const r in n)(!Qo(r)||!(r.slice(9)in t))&&(e[r]=n[r]);return e};function Lp(n,t,e){const{props:r,children:s,component:o}=n,{props:a,children:l,patchFlag:c}=t,f=o.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&c>=0){if(c&1024)return!0;if(c&16)return r?Ul(r,a,f):!!a;if(c&8){const d=t.dynamicProps;for(let g=0;g<d.length;g++){const E=d[g];if(a[E]!==r[E]&&!fi(f,E))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?Ul(r,a,f):!0:!!a;return!1}function Ul(n,t,e){const r=Object.keys(t);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const o=r[s];if(t[o]!==n[o]&&!fi(e,o))return!0}return!1}function Fp({vnode:n,parent:t},e){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=t.vnode).el=e,t=t.parent;else break}}const ah=n=>n.__isSuspense;function Bp(n,t){t&&t.pendingBranch?nt(n)?t.effects.push(...n):t.effects.push(n):Wd(n)}const me=Symbol.for("v-fgt"),di=Symbol.for("v-txt"),Xn=Symbol.for("v-cmt"),Xi=Symbol.for("v-stc"),Fr=[];let ce=null;function Ji(n=!1){Fr.push(ce=n?null:[])}function Up(){Fr.pop(),ce=Fr[Fr.length-1]||null}let Gr=1;function jl(n,t=!1){Gr+=n,n<0&&ce&&t&&(ce.hasOnce=!0)}function jp(n){return n.dynamicChildren=Gr>0?ce||$n:null,Up(),Gr>0&&ce&&ce.push(n),n}function Zi(n,t,e,r,s,o){return jp(wn(n,t,e,r,s,o,!0))}function lh(n){return n?n.__v_isVNode===!0:!1}function Rr(n,t){return n.type===t.type&&n.key===t.key}const uh=({key:n})=>n??null,Os=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Vt(n)||Xt(n)||it(n)?{i:Ae,r:n,k:t,f:!!e}:n:null);function wn(n,t=null,e=null,r=0,s=null,o=n===me?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&uh(t),ref:t&&Os(t),scopeId:Bc,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ae};return l?(fa(c,e),o&128&&n.normalize(c)):e&&(c.shapeFlag|=Vt(e)?8:16),Gr>0&&!a&&ce&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&ce.push(c),c}const bn=$p;function $p(n,t=null,e=null,r=0,s=null,o=!1){if((!n||n===up)&&(n=Xn),lh(n)){const l=Jn(n,t,!0);return e&&fa(l,e),Gr>0&&!o&&ce&&(l.shapeFlag&6?ce[ce.indexOf(n)]=l:ce.push(l)),l.patchFlag=-2,l}if(Zp(n)&&(n=n.__vccOpts),t){t=qp(t);let{class:l,style:c}=t;l&&!Vt(l)&&(t.class=Zo(l)),At(c)&&(aa(c)&&!nt(c)&&(c=re({},c)),t.style=Jo(c))}const a=Vt(n)?1:ah(n)?128:Xd(n)?64:At(n)?4:it(n)?2:0;return wn(n,t,e,r,s,a,o,!0)}function qp(n){return n?aa(n)||Yc(n)?re({},n):n:null}function Jn(n,t,e=!1,r=!1){const{props:s,ref:o,patchFlag:a,children:l,transition:c}=n,f=t?zp(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:f,key:f&&uh(f),ref:t&&t.ref?e&&o?nt(o)?o.concat(Os(t)):[o,Os(t)]:Os(t):o,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==me?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Jn(n.ssContent),ssFallback:n.ssFallback&&Jn(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&r&&ua(d,c.clone(d)),d}function Hp(n=" ",t=0){return bn(di,null,n,t)}function Ie(n){return n==null||typeof n=="boolean"?bn(Xn):nt(n)?bn(me,null,n.slice()):lh(n)?We(n):bn(di,null,String(n))}function We(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Jn(n)}function fa(n,t){let e=0;const{shapeFlag:r}=n;if(t==null)t=null;else if(nt(t))e=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),fa(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!Yc(t)?t._ctx=Ae:s===3&&Ae&&(Ae.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else it(t)?(t={default:t,_ctx:Ae},e=32):(t=String(t),r&64?(e=16,t=[Hp(t)]):e=8);n.children=t,n.shapeFlag|=e}function zp(...n){const t={};for(let e=0;e<n.length;e++){const r=n[e];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Zo([t.class,r.class]));else if(s==="style")t.style=Jo([t.style,r.style]);else if(ii(s)){const o=t[s],a=r[s];a&&o!==a&&!(nt(o)&&o.includes(a))&&(t[s]=o?[].concat(o,a):a)}else s!==""&&(t[s]=r[s])}return t}function ve(n,t,e,r=null){Re(n,t,7,[e,r])}const Kp=Gc();let Gp=0;function Wp(n,t,e){const r=n.type,s=(t?t.appContext:n.appContext)||Kp,o={uid:Gp++,vnode:n,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new pd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jc(r,s),emitsOptions:oh(r,s),emit:null,emitted:null,propsDefaults:Tt,inheritAttrs:r.inheritAttrs,ctx:Tt,data:Tt,props:Tt,attrs:Tt,slots:Tt,refs:Tt,setupState:Tt,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Op.bind(null,o),n.ce&&n.ce(o),o}let ee=null,Ks,Io;{const n=li(),t=(e,r)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(r),o=>{s.length>1?s.forEach(a=>a(o)):s[0](o)}};Ks=t("__VUE_INSTANCE_SETTERS__",e=>ee=e),Io=t("__VUE_SSR_SETTERS__",e=>Wr=e)}const ns=n=>{const t=ee;return Ks(n),n.scope.on(),()=>{n.scope.off(),Ks(t)}},$l=()=>{ee&&ee.scope.off(),Ks(null)};function ch(n){return n.vnode.shapeFlag&4}let Wr=!1;function Qp(n,t=!1,e=!1){t&&Io(t);const{props:r,children:s}=n.vnode,o=ch(n);Ep(n,r,o,t),Ap(n,s,e||t);const a=o?Yp(n,t):void 0;return t&&Io(!1),a}function Yp(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,hp);const{setup:r}=e;if(r){Le();const s=n.setupContext=r.length>1?Jp(n):null,o=ns(n),a=es(r,n,0,[n.props,s]),l=fc(a);if(Fe(),o(),(l||n.sp)&&!kr(n)&&Uc(n),l){if(a.then($l,$l),t)return a.then(c=>{ql(n,c)}).catch(c=>{ci(c,n,0)});n.asyncDep=a}else ql(n,a)}else hh(n)}function ql(n,t,e){it(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:At(t)&&(n.setupState=Oc(t)),hh(n)}function hh(n,t,e){const r=n.type;n.render||(n.render=r.render||Ce);{const s=ns(n);Le();try{fp(n)}finally{Fe(),s()}}}const Xp={get(n,t){return Qt(n,"get",""),n[t]}};function Jp(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,Xp),slots:n.slots,emit:n.emit,expose:t}}function da(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Oc(Md(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Lr)return Lr[e](n)},has(t,e){return e in t||e in Lr}})):n.proxy}function Zp(n){return it(n)&&"__vccOpts"in n}const tg=(n,t)=>$d(n,t,Wr),eg="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wo;const Hl=typeof window<"u"&&window.trustedTypes;if(Hl)try{wo=Hl.createPolicy("vue",{createHTML:n=>n})}catch{}const fh=wo?n=>wo.createHTML(n):n=>n,ng="http://www.w3.org/2000/svg",rg="http://www.w3.org/1998/Math/MathML",Me=typeof document<"u"?document:null,zl=Me&&Me.createElement("template"),sg={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,r)=>{const s=t==="svg"?Me.createElementNS(ng,n):t==="mathml"?Me.createElementNS(rg,n):e?Me.createElement(n,{is:e}):Me.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>Me.createTextNode(n),createComment:n=>Me.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Me.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,r,s,o){const a=e?e.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===o||!(s=s.nextSibling)););else{zl.innerHTML=fh(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const l=zl.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,e)}return[a?a.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},ig=Symbol("_vtc");function og(n,t,e){const r=n[ig];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Kl=Symbol("_vod"),ag=Symbol("_vsh"),lg=Symbol(""),ug=/(^|;)\s*display\s*:/;function cg(n,t,e){const r=n.style,s=Vt(e);let o=!1;if(e&&!s){if(t)if(Vt(t))for(const a of t.split(";")){const l=a.slice(0,a.indexOf(":")).trim();e[l]==null&&Ms(r,l,"")}else for(const a in t)e[a]==null&&Ms(r,a,"");for(const a in e)a==="display"&&(o=!0),Ms(r,a,e[a])}else if(s){if(t!==e){const a=r[lg];a&&(e+=";"+a),r.cssText=e,o=ug.test(e)}}else t&&n.removeAttribute("style");Kl in n&&(n[Kl]=o?r.display:"",n[ag]&&(r.display="none"))}const Gl=/\s*!important$/;function Ms(n,t,e){if(nt(e))e.forEach(r=>Ms(n,t,r));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const r=hg(n,t);Gl.test(e)?n.setProperty(Vn(r),e.replace(Gl,""),"important"):n[r]=e}}const Wl=["Webkit","Moz","ms"],to={};function hg(n,t){const e=to[t];if(e)return e;let r=nn(t);if(r!=="filter"&&r in n)return to[t]=r;r=gc(r);for(let s=0;s<Wl.length;s++){const o=Wl[s]+r;if(o in n)return to[t]=o}return t}const Ql="http://www.w3.org/1999/xlink";function Yl(n,t,e,r,s,o=dd(t)){r&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Ql,t.slice(6,t.length)):n.setAttributeNS(Ql,t,e):e==null||o&&!mc(e)?n.removeAttribute(t):n.setAttribute(t,o?"":hn(e)?String(e):e)}function Xl(n,t,e,r,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?fh(e):e);return}const o=n.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const l=o==="OPTION"?n.getAttribute("value")||"":n.value,c=e==null?n.type==="checkbox"?"on":"":String(e);(l!==c||!("_value"in n))&&(n.value=c),e==null&&n.removeAttribute(t),n._value=e;return}let a=!1;if(e===""||e==null){const l=typeof n[t];l==="boolean"?e=mc(e):e==null&&l==="string"?(e="",a=!0):l==="number"&&(e=0,a=!0)}try{n[t]=e}catch{}a&&n.removeAttribute(s||t)}function fg(n,t,e,r){n.addEventListener(t,e,r)}function dg(n,t,e,r){n.removeEventListener(t,e,r)}const Jl=Symbol("_vei");function pg(n,t,e,r,s=null){const o=n[Jl]||(n[Jl]={}),a=o[t];if(r&&a)a.value=r;else{const[l,c]=gg(t);if(r){const f=o[t]=yg(r,s);fg(n,l,f,c)}else a&&(dg(n,l,a,c),o[t]=void 0)}}const Zl=/(?:Once|Passive|Capture)$/;function gg(n){let t;if(Zl.test(n)){t={};let r;for(;r=n.match(Zl);)n=n.slice(0,n.length-r[0].length),t[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Vn(n.slice(2)),t]}let eo=0;const mg=Promise.resolve(),_g=()=>eo||(mg.then(()=>eo=0),eo=Date.now());function yg(n,t){const e=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=e.attached)return;Re(vg(r,e.value),t,5,[r])};return e.value=n,e.attached=_g(),e}function vg(n,t){if(nt(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const tu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Eg=(n,t,e,r,s,o)=>{const a=s==="svg";t==="class"?og(n,r,a):t==="style"?cg(n,e,r):ii(t)?Qo(t)||pg(n,t,e,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Tg(n,t,r,a))?(Xl(n,t,r),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Yl(n,t,r,a,o,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!Vt(r))?Xl(n,nn(t),r,o,t):(t==="true-value"?n._trueValue=r:t==="false-value"&&(n._falseValue=r),Yl(n,t,r,a))};function Tg(n,t,e,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in n&&tu(t)&&it(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return tu(t)&&Vt(e)?!1:t in n}const Ig=re({patchProp:Eg},sg);let eu;function wg(){return eu||(eu=bp(Ig))}const Ag=(...n)=>{const t=wg().createApp(...n),{mount:e}=t;return t.mount=r=>{const s=bg(r);if(!s)return;const o=t._component;!it(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=e(s,!1,Cg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t};function Cg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function bg(n){return Vt(n)?document.querySelector(n):n}const Rg=()=>{};var nu={};/**
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
 */const dh=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Sg=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],l=n[e++],c=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},ph={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,l=a?n[s+1]:0,c=s+2<n.length,f=c?n[s+2]:0,d=o>>2,g=(o&3)<<4|l>>4;let E=(l&15)<<2|f>>6,R=f&63;c||(R=64,a||(E=64)),r.push(e[d],e[g],e[E],e[R])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(dh(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Sg(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],l=s<n.length?e[n.charAt(s)]:0;++s;const f=s<n.length?e[n.charAt(s)]:64;++s;const g=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||l==null||f==null||g==null)throw new Pg;const E=o<<2|l>>4;if(r.push(E),f!==64){const R=l<<4&240|f>>2;if(r.push(R),g!==64){const O=f<<6&192|g;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Pg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vg=function(n){const t=dh(n);return ph.encodeByteArray(t,!0)},Gs=function(n){return Vg(n).replace(/\./g,"")},xg=function(n){try{return ph.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Dg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ng=()=>Dg().__FIREBASE_DEFAULTS__,Og=()=>{if(typeof process>"u"||typeof nu>"u")return;const n=nu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Mg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&xg(n[1]);return t&&JSON.parse(t)},pa=()=>{try{return Rg()||Ng()||Og()||Mg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},kg=n=>{var t,e;return(e=(t=pa())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Lg=n=>{const t=kg(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},gh=()=>{var n;return(n=pa())===null||n===void 0?void 0:n.config};/**
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
 */class Fg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(n){return n.endsWith(".cloudworkstations.dev")}async function Bg(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Ug(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Gs(JSON.stringify(e)),Gs(JSON.stringify(a)),""].join(".")}const Br={};function jg(){const n={prod:[],emulator:[]};for(const t of Object.keys(Br))Br[t]?n.emulator.push(t):n.prod.push(t);return n}function $g(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let ru=!1;function qg(n,t){if(typeof window>"u"||typeof document>"u"||!ga(window.location.host)||Br[n]===t||Br[n]||ru)return;Br[n]=t;function e(E){return`__firebase__banner__${E}`}const r="__firebase__banner",o=jg().prod.length>0;function a(){const E=document.getElementById(r);E&&E.remove()}function l(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function c(E,R){E.setAttribute("width","24"),E.setAttribute("id",R),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function f(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{ru=!0,a()},E}function d(E,R){E.setAttribute("id",R),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function g(){const E=$g(r),R=e("text"),O=document.getElementById(R)||document.createElement("span"),B=e("learnmore"),U=document.getElementById(B)||document.createElement("a"),Q=e("preprendIcon"),W=document.getElementById(Q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const Y=E.element;l(Y),d(U,B);const z=f();c(W,Q),Y.append(W,O,U,z),document.body.appendChild(Y)}o?(O.innerText="Preview backend disconnected.",W.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(W.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,O.innerText="Preview backend running in this workspace."),O.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
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
 */function Hg(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zg(){var n;const t=(n=pa())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Kg(){return!zg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Gg(){try{return typeof indexedDB=="object"}catch{return!1}}function Wg(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const Qg="FirebaseError";class or extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Qg,Object.setPrototypeOf(this,or.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mh.prototype.create)}}class mh{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?Yg(o,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new or(s,l,r)}}function Yg(n,t){return n.replace(Xg,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Xg=/\{\$([^}]+)}/g;function Ws(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(su(o)&&su(a)){if(!Ws(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function su(n){return n!==null&&typeof n=="object"}/**
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
 */function Jg(n){return n&&n._delegate?n._delegate:n}class Qr{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const In="[DEFAULT]";/**
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
 */class Zg{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Fg;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t?.identifier),s=(e=t?.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(em(t))try{this.getOrInitializeService({instanceIdentifier:In})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=In){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=In){return this.instances.has(t)}getOptions(t=In){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:tm(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=In){return this.component?this.component.multipleInstances?t:In:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tm(n){return n===In?void 0:n}function em(n){return n.instantiationMode==="EAGER"}/**
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
 */class nm{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Zg(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ut;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ut||(ut={}));const rm={debug:ut.DEBUG,verbose:ut.VERBOSE,info:ut.INFO,warn:ut.WARN,error:ut.ERROR,silent:ut.SILENT},sm=ut.INFO,im={[ut.DEBUG]:"log",[ut.VERBOSE]:"log",[ut.INFO]:"info",[ut.WARN]:"warn",[ut.ERROR]:"error"},om=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=im[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class _h{constructor(t){this.name=t,this._logLevel=sm,this._logHandler=om,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ut))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?rm[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ut.DEBUG,...t),this._logHandler(this,ut.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ut.VERBOSE,...t),this._logHandler(this,ut.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ut.INFO,...t),this._logHandler(this,ut.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ut.WARN,...t),this._logHandler(this,ut.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ut.ERROR,...t),this._logHandler(this,ut.ERROR,...t)}}const am=(n,t)=>t.some(e=>n instanceof e);let iu,ou;function lm(){return iu||(iu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function um(){return ou||(ou=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yh=new WeakMap,Ao=new WeakMap,vh=new WeakMap,no=new WeakMap,ma=new WeakMap;function cm(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Ze(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&yh.set(e,n)}).catch(()=>{}),ma.set(t,n),t}function hm(n){if(Ao.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Ao.set(n,t)}let Co={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Ao.get(n);if(t==="objectStoreNames")return n.objectStoreNames||vh.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ze(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function fm(n){Co=n(Co)}function dm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(ro(this),t,...e);return vh.set(r,t.sort?t.sort():[t]),Ze(r)}:um().includes(n)?function(...t){return n.apply(ro(this),t),Ze(yh.get(this))}:function(...t){return Ze(n.apply(ro(this),t))}}function pm(n){return typeof n=="function"?dm(n):(n instanceof IDBTransaction&&hm(n),am(n,lm())?new Proxy(n,Co):n)}function Ze(n){if(n instanceof IDBRequest)return cm(n);if(no.has(n))return no.get(n);const t=pm(n);return t!==n&&(no.set(n,t),ma.set(t,n)),t}const ro=n=>ma.get(n);function gm(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),l=Ze(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Ze(a.result),c.oldVersion,c.newVersion,Ze(a.transaction),c)}),e&&a.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),l.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const mm=["get","getKey","getAll","getAllKeys","count"],_m=["put","add","delete","clear"],so=new Map;function au(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(so.get(t))return so.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=_m.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||mm.includes(e)))return;const o=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let f=c.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[e](...l),s&&c.done]))[0]};return so.set(t,o),o}fm(n=>({...n,get:(t,e,r)=>au(t,e)||n.get(t,e,r),has:(t,e)=>!!au(t,e)||n.has(t,e)}));/**
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
 */class ym{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(vm(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function vm(n){const t=n.getComponent();return t?.type==="VERSION"}const bo="@firebase/app",lu="0.13.1";/**
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
 */const Be=new _h("@firebase/app"),Em="@firebase/app-compat",Tm="@firebase/analytics-compat",Im="@firebase/analytics",wm="@firebase/app-check-compat",Am="@firebase/app-check",Cm="@firebase/auth",bm="@firebase/auth-compat",Rm="@firebase/database",Sm="@firebase/data-connect",Pm="@firebase/database-compat",Vm="@firebase/functions",xm="@firebase/functions-compat",Dm="@firebase/installations",Nm="@firebase/installations-compat",Om="@firebase/messaging",Mm="@firebase/messaging-compat",km="@firebase/performance",Lm="@firebase/performance-compat",Fm="@firebase/remote-config",Bm="@firebase/remote-config-compat",Um="@firebase/storage",jm="@firebase/storage-compat",$m="@firebase/firestore",qm="@firebase/ai",Hm="@firebase/firestore-compat",zm="firebase",Km="11.9.0";/**
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
 */const Ro="[DEFAULT]",Gm={[bo]:"fire-core",[Em]:"fire-core-compat",[Im]:"fire-analytics",[Tm]:"fire-analytics-compat",[Am]:"fire-app-check",[wm]:"fire-app-check-compat",[Cm]:"fire-auth",[bm]:"fire-auth-compat",[Rm]:"fire-rtdb",[Sm]:"fire-data-connect",[Pm]:"fire-rtdb-compat",[Vm]:"fire-fn",[xm]:"fire-fn-compat",[Dm]:"fire-iid",[Nm]:"fire-iid-compat",[Om]:"fire-fcm",[Mm]:"fire-fcm-compat",[km]:"fire-perf",[Lm]:"fire-perf-compat",[Fm]:"fire-rc",[Bm]:"fire-rc-compat",[Um]:"fire-gcs",[jm]:"fire-gcs-compat",[$m]:"fire-fst",[Hm]:"fire-fst-compat",[qm]:"fire-vertex","fire-js":"fire-js",[zm]:"fire-js-all"};/**
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
 */const Qs=new Map,Wm=new Map,So=new Map;function uu(n,t){try{n.container.addComponent(t)}catch(e){Be.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Ys(n){const t=n.name;if(So.has(t))return Be.debug(`There were multiple attempts to register component ${t}.`),!1;So.set(t,n);for(const e of Qs.values())uu(e,n);for(const e of Wm.values())uu(e,n);return!0}function Qm(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Ym(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Xm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},tn=new mh("app","Firebase",Xm);/**
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
 */class Jm{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw tn.create("app-deleted",{appName:this._name})}}/**
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
 */const Zm=Km;function Eh(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ro,automaticDataCollectionEnabled:!0},t),s=r.name;if(typeof s!="string"||!s)throw tn.create("bad-app-name",{appName:String(s)});if(e||(e=gh()),!e)throw tn.create("no-options");const o=Qs.get(s);if(o){if(Ws(e,o.options)&&Ws(r,o.config))return o;throw tn.create("duplicate-app",{appName:s})}const a=new nm(s);for(const c of So.values())a.addComponent(c);const l=new Jm(e,r,a);return Qs.set(s,l),l}function t_(n=Ro){const t=Qs.get(n);if(!t&&n===Ro&&gh())return Eh();if(!t)throw tn.create("no-app",{appName:n});return t}function Gn(n,t,e){var r;let s=(r=Gm[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const l=[`Unable to register library "${s}" with version "${t}":`];o&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Be.warn(l.join(" "));return}Ys(new Qr(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const e_="firebase-heartbeat-database",n_=1,Yr="firebase-heartbeat-store";let io=null;function Th(){return io||(io=gm(e_,n_,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Yr)}catch(e){console.warn(e)}}}}).catch(n=>{throw tn.create("idb-open",{originalErrorMessage:n.message})})),io}async function r_(n){try{const e=(await Th()).transaction(Yr),r=await e.objectStore(Yr).get(Ih(n));return await e.done,r}catch(t){if(t instanceof or)Be.warn(t.message);else{const e=tn.create("idb-get",{originalErrorMessage:t?.message});Be.warn(e.message)}}}async function cu(n,t){try{const r=(await Th()).transaction(Yr,"readwrite");await r.objectStore(Yr).put(t,Ih(n)),await r.done}catch(e){if(e instanceof or)Be.warn(e.message);else{const r=tn.create("idb-set",{originalErrorMessage:e?.message});Be.warn(r.message)}}}function Ih(n){return`${n.name}!${n.options.appId}`}/**
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
 */const s_=1024,i_=30;class o_{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new l_(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=hu();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>i_){const a=u_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Be.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=hu(),{heartbeatsToSend:r,unsentEntries:s}=a_(this._heartbeatsCache.heartbeats),o=Gs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Be.warn(e),""}}}function hu(){return new Date().toISOString().substring(0,10)}function a_(n,t=s_){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),fu(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),fu(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class l_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gg()?Wg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await r_(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return cu(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return cu(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function fu(n){return Gs(JSON.stringify({version:2,heartbeats:n})).length}function u_(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function c_(n){Ys(new Qr("platform-logger",t=>new ym(t),"PRIVATE")),Ys(new Qr("heartbeat",t=>new o_(t),"PRIVATE")),Gn(bo,lu,n),Gn(bo,lu,"esm2017"),Gn("fire-js","")}c_("");var h_="firebase",f_="11.9.1";/**
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
 */Gn(h_,f_,"app");var du=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var en,wh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(w,m){function v(){}v.prototype=m.prototype,w.D=m.prototype,w.prototype=new v,w.prototype.constructor=w,w.C=function(I,A,b){for(var y=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)y[ae-2]=arguments[ae];return m.prototype[A].apply(I,y)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,m,v){v||(v=0);var I=Array(16);if(typeof m=="string")for(var A=0;16>A;++A)I[A]=m.charCodeAt(v++)|m.charCodeAt(v++)<<8|m.charCodeAt(v++)<<16|m.charCodeAt(v++)<<24;else for(A=0;16>A;++A)I[A]=m[v++]|m[v++]<<8|m[v++]<<16|m[v++]<<24;m=w.g[0],v=w.g[1],A=w.g[2];var b=w.g[3],y=m+(b^v&(A^b))+I[0]+3614090360&4294967295;m=v+(y<<7&4294967295|y>>>25),y=b+(A^m&(v^A))+I[1]+3905402710&4294967295,b=m+(y<<12&4294967295|y>>>20),y=A+(v^b&(m^v))+I[2]+606105819&4294967295,A=b+(y<<17&4294967295|y>>>15),y=v+(m^A&(b^m))+I[3]+3250441966&4294967295,v=A+(y<<22&4294967295|y>>>10),y=m+(b^v&(A^b))+I[4]+4118548399&4294967295,m=v+(y<<7&4294967295|y>>>25),y=b+(A^m&(v^A))+I[5]+1200080426&4294967295,b=m+(y<<12&4294967295|y>>>20),y=A+(v^b&(m^v))+I[6]+2821735955&4294967295,A=b+(y<<17&4294967295|y>>>15),y=v+(m^A&(b^m))+I[7]+4249261313&4294967295,v=A+(y<<22&4294967295|y>>>10),y=m+(b^v&(A^b))+I[8]+1770035416&4294967295,m=v+(y<<7&4294967295|y>>>25),y=b+(A^m&(v^A))+I[9]+2336552879&4294967295,b=m+(y<<12&4294967295|y>>>20),y=A+(v^b&(m^v))+I[10]+4294925233&4294967295,A=b+(y<<17&4294967295|y>>>15),y=v+(m^A&(b^m))+I[11]+2304563134&4294967295,v=A+(y<<22&4294967295|y>>>10),y=m+(b^v&(A^b))+I[12]+1804603682&4294967295,m=v+(y<<7&4294967295|y>>>25),y=b+(A^m&(v^A))+I[13]+4254626195&4294967295,b=m+(y<<12&4294967295|y>>>20),y=A+(v^b&(m^v))+I[14]+2792965006&4294967295,A=b+(y<<17&4294967295|y>>>15),y=v+(m^A&(b^m))+I[15]+1236535329&4294967295,v=A+(y<<22&4294967295|y>>>10),y=m+(A^b&(v^A))+I[1]+4129170786&4294967295,m=v+(y<<5&4294967295|y>>>27),y=b+(v^A&(m^v))+I[6]+3225465664&4294967295,b=m+(y<<9&4294967295|y>>>23),y=A+(m^v&(b^m))+I[11]+643717713&4294967295,A=b+(y<<14&4294967295|y>>>18),y=v+(b^m&(A^b))+I[0]+3921069994&4294967295,v=A+(y<<20&4294967295|y>>>12),y=m+(A^b&(v^A))+I[5]+3593408605&4294967295,m=v+(y<<5&4294967295|y>>>27),y=b+(v^A&(m^v))+I[10]+38016083&4294967295,b=m+(y<<9&4294967295|y>>>23),y=A+(m^v&(b^m))+I[15]+3634488961&4294967295,A=b+(y<<14&4294967295|y>>>18),y=v+(b^m&(A^b))+I[4]+3889429448&4294967295,v=A+(y<<20&4294967295|y>>>12),y=m+(A^b&(v^A))+I[9]+568446438&4294967295,m=v+(y<<5&4294967295|y>>>27),y=b+(v^A&(m^v))+I[14]+3275163606&4294967295,b=m+(y<<9&4294967295|y>>>23),y=A+(m^v&(b^m))+I[3]+4107603335&4294967295,A=b+(y<<14&4294967295|y>>>18),y=v+(b^m&(A^b))+I[8]+1163531501&4294967295,v=A+(y<<20&4294967295|y>>>12),y=m+(A^b&(v^A))+I[13]+2850285829&4294967295,m=v+(y<<5&4294967295|y>>>27),y=b+(v^A&(m^v))+I[2]+4243563512&4294967295,b=m+(y<<9&4294967295|y>>>23),y=A+(m^v&(b^m))+I[7]+1735328473&4294967295,A=b+(y<<14&4294967295|y>>>18),y=v+(b^m&(A^b))+I[12]+2368359562&4294967295,v=A+(y<<20&4294967295|y>>>12),y=m+(v^A^b)+I[5]+4294588738&4294967295,m=v+(y<<4&4294967295|y>>>28),y=b+(m^v^A)+I[8]+2272392833&4294967295,b=m+(y<<11&4294967295|y>>>21),y=A+(b^m^v)+I[11]+1839030562&4294967295,A=b+(y<<16&4294967295|y>>>16),y=v+(A^b^m)+I[14]+4259657740&4294967295,v=A+(y<<23&4294967295|y>>>9),y=m+(v^A^b)+I[1]+2763975236&4294967295,m=v+(y<<4&4294967295|y>>>28),y=b+(m^v^A)+I[4]+1272893353&4294967295,b=m+(y<<11&4294967295|y>>>21),y=A+(b^m^v)+I[7]+4139469664&4294967295,A=b+(y<<16&4294967295|y>>>16),y=v+(A^b^m)+I[10]+3200236656&4294967295,v=A+(y<<23&4294967295|y>>>9),y=m+(v^A^b)+I[13]+681279174&4294967295,m=v+(y<<4&4294967295|y>>>28),y=b+(m^v^A)+I[0]+3936430074&4294967295,b=m+(y<<11&4294967295|y>>>21),y=A+(b^m^v)+I[3]+3572445317&4294967295,A=b+(y<<16&4294967295|y>>>16),y=v+(A^b^m)+I[6]+76029189&4294967295,v=A+(y<<23&4294967295|y>>>9),y=m+(v^A^b)+I[9]+3654602809&4294967295,m=v+(y<<4&4294967295|y>>>28),y=b+(m^v^A)+I[12]+3873151461&4294967295,b=m+(y<<11&4294967295|y>>>21),y=A+(b^m^v)+I[15]+530742520&4294967295,A=b+(y<<16&4294967295|y>>>16),y=v+(A^b^m)+I[2]+3299628645&4294967295,v=A+(y<<23&4294967295|y>>>9),y=m+(A^(v|~b))+I[0]+4096336452&4294967295,m=v+(y<<6&4294967295|y>>>26),y=b+(v^(m|~A))+I[7]+1126891415&4294967295,b=m+(y<<10&4294967295|y>>>22),y=A+(m^(b|~v))+I[14]+2878612391&4294967295,A=b+(y<<15&4294967295|y>>>17),y=v+(b^(A|~m))+I[5]+4237533241&4294967295,v=A+(y<<21&4294967295|y>>>11),y=m+(A^(v|~b))+I[12]+1700485571&4294967295,m=v+(y<<6&4294967295|y>>>26),y=b+(v^(m|~A))+I[3]+2399980690&4294967295,b=m+(y<<10&4294967295|y>>>22),y=A+(m^(b|~v))+I[10]+4293915773&4294967295,A=b+(y<<15&4294967295|y>>>17),y=v+(b^(A|~m))+I[1]+2240044497&4294967295,v=A+(y<<21&4294967295|y>>>11),y=m+(A^(v|~b))+I[8]+1873313359&4294967295,m=v+(y<<6&4294967295|y>>>26),y=b+(v^(m|~A))+I[15]+4264355552&4294967295,b=m+(y<<10&4294967295|y>>>22),y=A+(m^(b|~v))+I[6]+2734768916&4294967295,A=b+(y<<15&4294967295|y>>>17),y=v+(b^(A|~m))+I[13]+1309151649&4294967295,v=A+(y<<21&4294967295|y>>>11),y=m+(A^(v|~b))+I[4]+4149444226&4294967295,m=v+(y<<6&4294967295|y>>>26),y=b+(v^(m|~A))+I[11]+3174756917&4294967295,b=m+(y<<10&4294967295|y>>>22),y=A+(m^(b|~v))+I[2]+718787259&4294967295,A=b+(y<<15&4294967295|y>>>17),y=v+(b^(A|~m))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(A+(y<<21&4294967295|y>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+b&4294967295}r.prototype.u=function(w,m){m===void 0&&(m=w.length);for(var v=m-this.blockSize,I=this.B,A=this.h,b=0;b<m;){if(A==0)for(;b<=v;)s(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<m;)if(I[A++]=w.charCodeAt(b++),A==this.blockSize){s(this,I),A=0;break}}else for(;b<m;)if(I[A++]=w[b++],A==this.blockSize){s(this,I),A=0;break}}this.h=A,this.o+=m},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;var v=8*this.o;for(m=w.length-8;m<w.length;++m)w[m]=v&255,v/=256;for(this.u(w),w=Array(16),m=v=0;4>m;++m)for(var I=0;32>I;I+=8)w[v++]=this.g[m]>>>I&255;return w};function o(w,m){var v=l;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=m(w)}function a(w,m){this.h=m;for(var v=[],I=!0,A=w.length-1;0<=A;A--){var b=w[A]|0;I&&b==m||(v[A]=b,I=!1)}this.g=v}var l={};function c(w){return-128<=w&&128>w?o(w,function(m){return new a([m|0],0>m?-1:0)}):new a([w|0],0>w?-1:0)}function f(w){if(isNaN(w)||!isFinite(w))return g;if(0>w)return U(f(-w));for(var m=[],v=1,I=0;w>=v;I++)m[I]=w/v|0,v*=4294967296;return new a(m,0)}function d(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return U(d(w.substring(1),m));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=f(Math.pow(m,8)),I=g,A=0;A<w.length;A+=8){var b=Math.min(8,w.length-A),y=parseInt(w.substring(A,A+b),m);8>b?(b=f(Math.pow(m,b)),I=I.j(b).add(f(y))):(I=I.j(v),I=I.add(f(y)))}return I}var g=c(0),E=c(1),R=c(16777216);n=a.prototype,n.m=function(){if(B(this))return-U(this).m();for(var w=0,m=1,v=0;v<this.g.length;v++){var I=this.i(v);w+=(0<=I?I:4294967296+I)*m,m*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(O(this))return"0";if(B(this))return"-"+U(this).toString(w);for(var m=f(Math.pow(w,6)),v=this,I="";;){var A=z(v,m).g;v=Q(v,A.j(m));var b=((0<v.g.length?v.g[0]:v.h)>>>0).toString(w);if(v=A,O(v))return b+I;for(;6>b.length;)b="0"+b;I=b+I}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function O(w){if(w.h!=0)return!1;for(var m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function B(w){return w.h==-1}n.l=function(w){return w=Q(this,w),B(w)?-1:O(w)?0:1};function U(w){for(var m=w.g.length,v=[],I=0;I<m;I++)v[I]=~w.g[I];return new a(v,~w.h).add(E)}n.abs=function(){return B(this)?U(this):this},n.add=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],I=0,A=0;A<=m;A++){var b=I+(this.i(A)&65535)+(w.i(A)&65535),y=(b>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);I=y>>>16,b&=65535,y&=65535,v[A]=y<<16|b}return new a(v,v[v.length-1]&-2147483648?-1:0)};function Q(w,m){return w.add(U(m))}n.j=function(w){if(O(this)||O(w))return g;if(B(this))return B(w)?U(this).j(U(w)):U(U(this).j(w));if(B(w))return U(this.j(U(w)));if(0>this.l(R)&&0>w.l(R))return f(this.m()*w.m());for(var m=this.g.length+w.g.length,v=[],I=0;I<2*m;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(var A=0;A<w.g.length;A++){var b=this.i(I)>>>16,y=this.i(I)&65535,ae=w.i(A)>>>16,$e=w.i(A)&65535;v[2*I+2*A]+=y*$e,W(v,2*I+2*A),v[2*I+2*A+1]+=b*$e,W(v,2*I+2*A+1),v[2*I+2*A+1]+=y*ae,W(v,2*I+2*A+1),v[2*I+2*A+2]+=b*ae,W(v,2*I+2*A+2)}for(I=0;I<m;I++)v[I]=v[2*I+1]<<16|v[2*I];for(I=m;I<2*m;I++)v[I]=0;return new a(v,0)};function W(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function Y(w,m){this.g=w,this.h=m}function z(w,m){if(O(m))throw Error("division by zero");if(O(w))return new Y(g,g);if(B(w))return m=z(U(w),m),new Y(U(m.g),U(m.h));if(B(m))return m=z(w,U(m)),new Y(U(m.g),m.h);if(30<w.g.length){if(B(w)||B(m))throw Error("slowDivide_ only works with positive integers.");for(var v=E,I=m;0>=I.l(w);)v=mt(v),I=mt(I);var A=vt(v,1),b=vt(I,1);for(I=vt(I,2),v=vt(v,2);!O(I);){var y=b.add(I);0>=y.l(w)&&(A=A.add(v),b=y),I=vt(I,1),v=vt(v,1)}return m=Q(w,A.j(m)),new Y(A,m)}for(A=g;0<=w.l(m);){for(v=Math.max(1,Math.floor(w.m()/m.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),b=f(v),y=b.j(m);B(y)||0<y.l(w);)v-=I,b=f(v),y=b.j(m);O(b)&&(b=E),A=A.add(b),w=Q(w,y)}return new Y(A,w)}n.A=function(w){return z(this,w).h},n.and=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],I=0;I<m;I++)v[I]=this.i(I)&w.i(I);return new a(v,this.h&w.h)},n.or=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],I=0;I<m;I++)v[I]=this.i(I)|w.i(I);return new a(v,this.h|w.h)},n.xor=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],I=0;I<m;I++)v[I]=this.i(I)^w.i(I);return new a(v,this.h^w.h)};function mt(w){for(var m=w.g.length+1,v=[],I=0;I<m;I++)v[I]=w.i(I)<<1|w.i(I-1)>>>31;return new a(v,w.h)}function vt(w,m){var v=m>>5;m%=32;for(var I=w.g.length-v,A=[],b=0;b<I;b++)A[b]=0<m?w.i(b+v)>>>m|w.i(b+v+1)<<32-m:w.i(b+v);return new a(A,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,wh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=d,en=a}).apply(typeof du<"u"?du:typeof self<"u"?self:typeof window<"u"?window:{});var Rs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ah,Pr,Ch,ks,Po,bh,Rh,Sh;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,u,h){return i==Array.prototype||i==Object.prototype||(i[u]=h.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Rs=="object"&&Rs];for(var u=0;u<i.length;++u){var h=i[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=e(this);function s(i,u){if(u)t:{var h=r;i=i.split(".");for(var p=0;p<i.length-1;p++){var C=i[p];if(!(C in h))break t;h=h[C]}i=i[i.length-1],p=h[i],u=u(p),u!=p&&u!=null&&t(h,i,{configurable:!0,writable:!0,value:u})}}function o(i,u){i instanceof String&&(i+="");var h=0,p=!1,C={next:function(){if(!p&&h<i.length){var S=h++;return{value:u(S,i[S]),done:!1}}return p=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(i){return i||function(){return o(this,function(u,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(i){var u=typeof i;return u=u!="object"?u:i?Array.isArray(i)?"array":u:"null",u=="array"||u=="object"&&typeof i.length=="number"}function f(i){var u=typeof i;return u=="object"&&i!=null||u=="function"}function d(i,u,h){return i.call.apply(i.bind,arguments)}function g(i,u,h){if(!i)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,p),i.apply(u,C)}}return function(){return i.apply(u,arguments)}}function E(i,u,h){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:g,E.apply(null,arguments)}function R(i,u){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),i.apply(this,p)}}function O(i,u){function h(){}h.prototype=u.prototype,i.aa=u.prototype,i.prototype=new h,i.prototype.constructor=i,i.Qb=function(p,C,S){for(var F=Array(arguments.length-2),yt=2;yt<arguments.length;yt++)F[yt-2]=arguments[yt];return u.prototype[C].apply(p,F)}}function B(i){const u=i.length;if(0<u){const h=Array(u);for(let p=0;p<u;p++)h[p]=i[p];return h}return[]}function U(i,u){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(c(p)){const C=i.length||0,S=p.length||0;i.length=C+S;for(let F=0;F<S;F++)i[C+F]=p[F]}else i.push(p)}}class Q{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function W(i){return/^[\s\xa0]*$/.test(i)}function Y(){var i=l.navigator;return i&&(i=i.userAgent)?i:""}function z(i){return z[" "](i),i}z[" "]=function(){};var mt=Y().indexOf("Gecko")!=-1&&!(Y().toLowerCase().indexOf("webkit")!=-1&&Y().indexOf("Edge")==-1)&&!(Y().indexOf("Trident")!=-1||Y().indexOf("MSIE")!=-1)&&Y().indexOf("Edge")==-1;function vt(i,u,h){for(const p in i)u.call(h,i[p],p,i)}function w(i,u){for(const h in i)u.call(void 0,i[h],h,i)}function m(i){const u={};for(const h in i)u[h]=i[h];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(i,u){let h,p;for(let C=1;C<arguments.length;C++){p=arguments[C];for(h in p)i[h]=p[h];for(let S=0;S<v.length;S++)h=v[S],Object.prototype.hasOwnProperty.call(p,h)&&(i[h]=p[h])}}function A(i){var u=1;i=i.split(":");const h=[];for(;0<u&&i.length;)h.push(i.shift()),u--;return i.length&&h.push(i.join(":")),h}function b(i){l.setTimeout(()=>{throw i},0)}function y(){var i=pe;let u=null;return i.g&&(u=i.g,i.g=i.g.next,i.g||(i.h=null),u.next=null),u}class ae{constructor(){this.h=this.g=null}add(u,h){const p=$e.get();p.set(u,h),this.h?this.h.next=p:this.g=p,this.h=p}}var $e=new Q(()=>new kt,i=>i.reset());class kt{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let _t,ft=!1,pe=new ae,fn=()=>{const i=l.Promise.resolve(void 0);_t=()=>{i.then(Ve)}};var Ve=()=>{for(var i;i=y();){try{i.h.call(i.g)}catch(h){b(h)}var u=$e;u.j(i),100>u.h&&(u.h++,i.next=u.g,u.g=i)}ft=!1};function xt(){this.s=this.s,this.C=this.C}xt.prototype.s=!1,xt.prototype.ma=function(){this.s||(this.s=!0,this.N())},xt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Dt(i,u){this.type=i,this.g=this.target=u,this.defaultPrevented=!1}Dt.prototype.h=function(){this.defaultPrevented=!0};var bi=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var i=!1,u=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const h=()=>{};l.addEventListener("test",h,u),l.removeEventListener("test",h,u)}catch{}return i}();function dn(i,u){if(Dt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var h=this.type=i.type,p=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=u,u=i.relatedTarget){if(mt){t:{try{z(u.nodeName);var C=!0;break t}catch{}C=!1}C||(u=null)}}else h=="mouseover"?u=i.fromElement:h=="mouseout"&&(u=i.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:pn[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&dn.aa.h.call(this)}}O(dn,Dt);var pn={2:"touch",3:"pen",4:"mouse"};dn.prototype.h=function(){dn.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var xe="closure_listenable_"+(1e6*Math.random()|0),hr=0;function as(i,u,h,p,C){this.listener=i,this.proxy=null,this.src=u,this.type=h,this.capture=!!p,this.ha=C,this.key=++hr,this.da=this.fa=!1}function ye(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function fr(i){this.src=i,this.g={},this.h=0}fr.prototype.add=function(i,u,h,p,C){var S=i.toString();i=this.g[S],i||(i=this.g[S]=[],this.h++);var F=T(i,u,p,C);return-1<F?(u=i[F],h||(u.fa=!1)):(u=new as(u,this.src,S,!!p,C),u.fa=h,i.push(u)),u};function _(i,u){var h=u.type;if(h in i.g){var p=i.g[h],C=Array.prototype.indexOf.call(p,u,void 0),S;(S=0<=C)&&Array.prototype.splice.call(p,C,1),S&&(ye(u),i.g[h].length==0&&(delete i.g[h],i.h--))}}function T(i,u,h,p){for(var C=0;C<i.length;++C){var S=i[C];if(!S.da&&S.listener==u&&S.capture==!!h&&S.ha==p)return C}return-1}var P="closure_lm_"+(1e6*Math.random()|0),N={};function x(i,u,h,p,C){if(Array.isArray(u)){for(var S=0;S<u.length;S++)x(i,u[S],h,p,C);return null}return h=Z(h),i&&i[xe]?i.K(u,h,f(p)?!!p.capture:!1,C):D(i,u,h,!1,p,C)}function D(i,u,h,p,C,S){if(!u)throw Error("Invalid event type");var F=f(C)?!!C.capture:!!C,yt=j(i);if(yt||(i[P]=yt=new fr(i)),h=yt.add(u,h,p,F,S),h.proxy)return h;if(p=q(),h.proxy=p,p.src=i,p.listener=h,i.addEventListener)bi||(C=F),C===void 0&&(C=!1),i.addEventListener(u.toString(),p,C);else if(i.attachEvent)i.attachEvent(M(u.toString()),p);else if(i.addListener&&i.removeListener)i.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function q(){function i(h){return u.call(i.src,i.listener,h)}const u=G;return i}function L(i,u,h,p,C){if(Array.isArray(u))for(var S=0;S<u.length;S++)L(i,u[S],h,p,C);else p=f(p)?!!p.capture:!!p,h=Z(h),i&&i[xe]?(i=i.i,u=String(u).toString(),u in i.g&&(S=i.g[u],h=T(S,h,p,C),-1<h&&(ye(S[h]),Array.prototype.splice.call(S,h,1),S.length==0&&(delete i.g[u],i.h--)))):i&&(i=j(i))&&(u=i.g[u.toString()],i=-1,u&&(i=T(u,h,p,C)),(h=-1<i?u[i]:null)&&k(h))}function k(i){if(typeof i!="number"&&i&&!i.da){var u=i.src;if(u&&u[xe])_(u.i,i);else{var h=i.type,p=i.proxy;u.removeEventListener?u.removeEventListener(h,p,i.capture):u.detachEvent?u.detachEvent(M(h),p):u.addListener&&u.removeListener&&u.removeListener(p),(h=j(u))?(_(h,i),h.h==0&&(h.src=null,u[P]=null)):ye(i)}}}function M(i){return i in N?N[i]:N[i]="on"+i}function G(i,u){if(i.da)i=!0;else{u=new dn(u,this);var h=i.listener,p=i.ha||i.src;i.fa&&k(i),i=h.call(p,u)}return i}function j(i){return i=i[P],i instanceof fr?i:null}var K="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(i){return typeof i=="function"?i:(i[K]||(i[K]=function(u){return i.handleEvent(u)}),i[K])}function X(){xt.call(this),this.i=new fr(this),this.M=this,this.F=null}O(X,xt),X.prototype[xe]=!0,X.prototype.removeEventListener=function(i,u,h,p){L(this,i,u,h,p)};function st(i,u){var h,p=i.F;if(p)for(h=[];p;p=p.F)h.push(p);if(i=i.M,p=u.type||u,typeof u=="string")u=new Dt(u,i);else if(u instanceof Dt)u.target=u.target||i;else{var C=u;u=new Dt(p,i),I(u,C)}if(C=!0,h)for(var S=h.length-1;0<=S;S--){var F=u.g=h[S];C=at(F,p,!0,u)&&C}if(F=u.g=i,C=at(F,p,!0,u)&&C,C=at(F,p,!1,u)&&C,h)for(S=0;S<h.length;S++)F=u.g=h[S],C=at(F,p,!1,u)&&C}X.prototype.N=function(){if(X.aa.N.call(this),this.i){var i=this.i,u;for(u in i.g){for(var h=i.g[u],p=0;p<h.length;p++)ye(h[p]);delete i.g[u],i.h--}}this.F=null},X.prototype.K=function(i,u,h,p){return this.i.add(String(i),u,!1,h,p)},X.prototype.L=function(i,u,h,p){return this.i.add(String(i),u,!0,h,p)};function at(i,u,h,p){if(u=i.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,S=0;S<u.length;++S){var F=u[S];if(F&&!F.da&&F.capture==h){var yt=F.listener,Ut=F.ha||F.src;F.fa&&_(i.i,F),C=yt.call(Ut,p)!==!1&&C}}return C&&!p.defaultPrevented}function Lt(i,u,h){if(typeof i=="function")h&&(i=E(i,h));else if(i&&typeof i.handleEvent=="function")i=E(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(i,u||0)}function Ft(i){i.g=Lt(()=>{i.g=null,i.i&&(i.i=!1,Ft(i))},i.l);const u=i.h;i.h=null,i.m.apply(null,u)}class he extends xt{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ft(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ht(i){xt.call(this),this.h=i,this.g={}}O(Ht,xt);var qe=[];function dr(i){vt(i.g,function(u,h){this.g.hasOwnProperty(h)&&k(u)},i),i.g={}}Ht.prototype.N=function(){Ht.aa.N.call(this),dr(this)},Ht.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Bt=l.JSON.stringify,fe=l.JSON.parse,ls=class{stringify(i){return l.JSON.stringify(i,void 0)}parse(i){return l.JSON.parse(i,void 0)}};function Ri(){}Ri.prototype.h=null;function Fa(i){return i.h||(i.h=i.i())}function Ba(){}var pr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Si(){Dt.call(this,"d")}O(Si,Dt);function Pi(){Dt.call(this,"c")}O(Pi,Dt);var gn={},Ua=null;function us(){return Ua=Ua||new X}gn.La="serverreachability";function ja(i){Dt.call(this,gn.La,i)}O(ja,Dt);function gr(i){const u=us();st(u,new ja(u))}gn.STAT_EVENT="statevent";function $a(i,u){Dt.call(this,gn.STAT_EVENT,i),this.stat=u}O($a,Dt);function Jt(i){const u=us();st(u,new $a(u,i))}gn.Ma="timingevent";function qa(i,u){Dt.call(this,gn.Ma,i),this.size=u}O(qa,Dt);function mr(i,u){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){i()},u)}function _r(){this.g=!0}_r.prototype.xa=function(){this.g=!1};function Nf(i,u,h,p,C,S){i.info(function(){if(i.g)if(S)for(var F="",yt=S.split("&"),Ut=0;Ut<yt.length;Ut++){var dt=yt[Ut].split("=");if(1<dt.length){var zt=dt[0];dt=dt[1];var Kt=zt.split("_");F=2<=Kt.length&&Kt[1]=="type"?F+(zt+"="+dt+"&"):F+(zt+"=redacted&")}}else F=null;else F=S;return"XMLHTTP REQ ("+p+") [attempt "+C+"]: "+u+`
`+h+`
`+F})}function Of(i,u,h,p,C,S,F){i.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+C+"]: "+u+`
`+h+`
`+S+" "+F})}function Dn(i,u,h,p){i.info(function(){return"XMLHTTP TEXT ("+u+"): "+kf(i,h)+(p?" "+p:"")})}function Mf(i,u){i.info(function(){return"TIMEOUT: "+u})}_r.prototype.info=function(){};function kf(i,u){if(!i.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(i=0;i<h.length;i++)if(Array.isArray(h[i])){var p=h[i];if(!(2>p.length)){var C=p[1];if(Array.isArray(C)&&!(1>C.length)){var S=C[0];if(S!="noop"&&S!="stop"&&S!="close")for(var F=1;F<C.length;F++)C[F]=""}}}}return Bt(h)}catch{return u}}var cs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ha={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Vi;function hs(){}O(hs,Ri),hs.prototype.g=function(){return new XMLHttpRequest},hs.prototype.i=function(){return{}},Vi=new hs;function He(i,u,h,p){this.j=i,this.i=u,this.l=h,this.R=p||1,this.U=new Ht(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new za}function za(){this.i=null,this.g="",this.h=!1}var Ka={},xi={};function Di(i,u,h){i.L=1,i.v=gs(De(u)),i.m=h,i.P=!0,Ga(i,null)}function Ga(i,u){i.F=Date.now(),fs(i),i.A=De(i.v);var h=i.A,p=i.R;Array.isArray(p)||(p=[String(p)]),al(h.i,"t",p),i.C=0,h=i.j.J,i.h=new za,i.g=Cl(i.j,h?u:null,!i.m),0<i.O&&(i.M=new he(E(i.Y,i,i.g),i.O)),u=i.U,h=i.g,p=i.ca;var C="readystatechange";Array.isArray(C)||(C&&(qe[0]=C.toString()),C=qe);for(var S=0;S<C.length;S++){var F=x(h,C[S],p||u.handleEvent,!1,u.h||u);if(!F)break;u.g[F.key]=F}u=i.H?m(i.H):{},i.m?(i.u||(i.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,u)):(i.u="GET",i.g.ea(i.A,i.u,null,u)),gr(),Nf(i.i,i.u,i.A,i.l,i.R,i.m)}He.prototype.ca=function(i){i=i.target;const u=this.M;u&&Ne(i)==3?u.j():this.Y(i)},He.prototype.Y=function(i){try{if(i==this.g)t:{const Kt=Ne(this.g);var u=this.g.Ba();const Mn=this.g.Z();if(!(3>Kt)&&(Kt!=3||this.g&&(this.h.h||this.g.oa()||pl(this.g)))){this.J||Kt!=4||u==7||(u==8||0>=Mn?gr(3):gr(2)),Ni(this);var h=this.g.Z();this.X=h;e:if(Wa(this)){var p=pl(this.g);i="";var C=p.length,S=Ne(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mn(this),yr(this);var F="";break e}this.h.i=new l.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,i+=this.h.i.decode(p[u],{stream:!(S&&u==C-1)});p.length=0,this.h.g+=i,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=h==200,Of(this.i,this.u,this.A,this.l,this.R,Kt,h),this.o){if(this.T&&!this.K){e:{if(this.g){var yt,Ut=this.g;if((yt=Ut.g?Ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(yt)){var dt=yt;break e}}dt=null}if(h=dt)Dn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Oi(this,h);else{this.o=!1,this.s=3,Jt(12),mn(this),yr(this);break t}}if(this.P){h=!0;let ge;for(;!this.J&&this.C<F.length;)if(ge=Lf(this,F),ge==xi){Kt==4&&(this.s=4,Jt(14),h=!1),Dn(this.i,this.l,null,"[Incomplete Response]");break}else if(ge==Ka){this.s=4,Jt(15),Dn(this.i,this.l,F,"[Invalid Chunk]"),h=!1;break}else Dn(this.i,this.l,ge,null),Oi(this,ge);if(Wa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Kt!=4||F.length!=0||this.h.h||(this.s=1,Jt(16),h=!1),this.o=this.o&&h,!h)Dn(this.i,this.l,F,"[Invalid Chunked Response]"),mn(this),yr(this);else if(0<F.length&&!this.W){this.W=!0;var zt=this.j;zt.g==this&&zt.ba&&!zt.M&&(zt.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),Ui(zt),zt.M=!0,Jt(11))}}else Dn(this.i,this.l,F,null),Oi(this,F);Kt==4&&mn(this),this.o&&!this.J&&(Kt==4?Tl(this.j,this):(this.o=!1,fs(this)))}else td(this.g),h==400&&0<F.indexOf("Unknown SID")?(this.s=3,Jt(12)):(this.s=0,Jt(13)),mn(this),yr(this)}}}catch{}finally{}};function Wa(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Lf(i,u){var h=i.C,p=u.indexOf(`
`,h);return p==-1?xi:(h=Number(u.substring(h,p)),isNaN(h)?Ka:(p+=1,p+h>u.length?xi:(u=u.slice(p,p+h),i.C=p+h,u)))}He.prototype.cancel=function(){this.J=!0,mn(this)};function fs(i){i.S=Date.now()+i.I,Qa(i,i.I)}function Qa(i,u){if(i.B!=null)throw Error("WatchDog timer not null");i.B=mr(E(i.ba,i),u)}function Ni(i){i.B&&(l.clearTimeout(i.B),i.B=null)}He.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Mf(this.i,this.A),this.L!=2&&(gr(),Jt(17)),mn(this),this.s=2,yr(this)):Qa(this,this.S-i)};function yr(i){i.j.G==0||i.J||Tl(i.j,i)}function mn(i){Ni(i);var u=i.M;u&&typeof u.ma=="function"&&u.ma(),i.M=null,dr(i.U),i.g&&(u=i.g,i.g=null,u.abort(),u.ma())}function Oi(i,u){try{var h=i.j;if(h.G!=0&&(h.g==i||Mi(h.h,i))){if(!i.K&&Mi(h.h,i)&&h.G==3){try{var p=h.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var C=p;if(C[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<i.F)Ts(h),vs(h);else break t;Bi(h),Jt(18)}}else h.za=C[1],0<h.za-h.T&&37500>C[2]&&h.F&&h.v==0&&!h.C&&(h.C=mr(E(h.Za,h),6e3));if(1>=Ja(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else yn(h,11)}else if((i.K||h.g==i)&&Ts(h),!W(u))for(C=h.Da.g.parse(u),u=0;u<C.length;u++){let dt=C[u];if(h.T=dt[0],dt=dt[1],h.G==2)if(dt[0]=="c"){h.K=dt[1],h.ia=dt[2];const zt=dt[3];zt!=null&&(h.la=zt,h.j.info("VER="+h.la));const Kt=dt[4];Kt!=null&&(h.Aa=Kt,h.j.info("SVER="+h.Aa));const Mn=dt[5];Mn!=null&&typeof Mn=="number"&&0<Mn&&(p=1.5*Mn,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const ge=i.g;if(ge){const ws=ge.g?ge.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ws){var S=p.h;S.g||ws.indexOf("spdy")==-1&&ws.indexOf("quic")==-1&&ws.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(ki(S,S.h),S.h=null))}if(p.D){const ji=ge.g?ge.g.getResponseHeader("X-HTTP-Session-Id"):null;ji&&(p.ya=ji,It(p.I,p.D,ji))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-i.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var F=i;if(p.qa=Al(p,p.J?p.ia:null,p.W),F.K){Za(p.h,F);var yt=F,Ut=p.L;Ut&&(yt.I=Ut),yt.B&&(Ni(yt),fs(yt)),p.g=F}else vl(p);0<h.i.length&&Es(h)}else dt[0]!="stop"&&dt[0]!="close"||yn(h,7);else h.G==3&&(dt[0]=="stop"||dt[0]=="close"?dt[0]=="stop"?yn(h,7):Fi(h):dt[0]!="noop"&&h.l&&h.l.ta(dt),h.v=0)}}gr(4)}catch{}}var Ff=class{constructor(i,u){this.g=i,this.map=u}};function Ya(i){this.l=i||10,l.PerformanceNavigationTiming?(i=l.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xa(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Ja(i){return i.h?1:i.g?i.g.size:0}function Mi(i,u){return i.h?i.h==u:i.g?i.g.has(u):!1}function ki(i,u){i.g?i.g.add(u):i.h=u}function Za(i,u){i.h&&i.h==u?i.h=null:i.g&&i.g.has(u)&&i.g.delete(u)}Ya.prototype.cancel=function(){if(this.i=tl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function tl(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let u=i.i;for(const h of i.g.values())u=u.concat(h.D);return u}return B(i.i)}function Bf(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(c(i)){for(var u=[],h=i.length,p=0;p<h;p++)u.push(i[p]);return u}u=[],h=0;for(p in i)u[h++]=i[p];return u}function Uf(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(c(i)||typeof i=="string"){var u=[];i=i.length;for(var h=0;h<i;h++)u.push(h);return u}u=[],h=0;for(const p in i)u[h++]=p;return u}}}function el(i,u){if(i.forEach&&typeof i.forEach=="function")i.forEach(u,void 0);else if(c(i)||typeof i=="string")Array.prototype.forEach.call(i,u,void 0);else for(var h=Uf(i),p=Bf(i),C=p.length,S=0;S<C;S++)u.call(void 0,p[S],h&&h[S],i)}var nl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jf(i,u){if(i){i=i.split("&");for(var h=0;h<i.length;h++){var p=i[h].indexOf("="),C=null;if(0<=p){var S=i[h].substring(0,p);C=i[h].substring(p+1)}else S=i[h];u(S,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function _n(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof _n){this.h=i.h,ds(this,i.j),this.o=i.o,this.g=i.g,ps(this,i.s),this.l=i.l;var u=i.i,h=new Tr;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),rl(this,h),this.m=i.m}else i&&(u=String(i).match(nl))?(this.h=!1,ds(this,u[1]||"",!0),this.o=vr(u[2]||""),this.g=vr(u[3]||"",!0),ps(this,u[4]),this.l=vr(u[5]||"",!0),rl(this,u[6]||"",!0),this.m=vr(u[7]||"")):(this.h=!1,this.i=new Tr(null,this.h))}_n.prototype.toString=function(){var i=[],u=this.j;u&&i.push(Er(u,sl,!0),":");var h=this.g;return(h||u=="file")&&(i.push("//"),(u=this.o)&&i.push(Er(u,sl,!0),"@"),i.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&i.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&i.push("/"),i.push(Er(h,h.charAt(0)=="/"?Hf:qf,!0))),(h=this.i.toString())&&i.push("?",h),(h=this.m)&&i.push("#",Er(h,Kf)),i.join("")};function De(i){return new _n(i)}function ds(i,u,h){i.j=h?vr(u,!0):u,i.j&&(i.j=i.j.replace(/:$/,""))}function ps(i,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);i.s=u}else i.s=null}function rl(i,u,h){u instanceof Tr?(i.i=u,Gf(i.i,i.h)):(h||(u=Er(u,zf)),i.i=new Tr(u,i.h))}function It(i,u,h){i.i.set(u,h)}function gs(i){return It(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function vr(i,u){return i?u?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Er(i,u,h){return typeof i=="string"?(i=encodeURI(i).replace(u,$f),h&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function $f(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var sl=/[#\/\?@]/g,qf=/[#\?:]/g,Hf=/[#\?]/g,zf=/[#\?@]/g,Kf=/#/g;function Tr(i,u){this.h=this.g=null,this.i=i||null,this.j=!!u}function ze(i){i.g||(i.g=new Map,i.h=0,i.i&&jf(i.i,function(u,h){i.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}n=Tr.prototype,n.add=function(i,u){ze(this),this.i=null,i=Nn(this,i);var h=this.g.get(i);return h||this.g.set(i,h=[]),h.push(u),this.h+=1,this};function il(i,u){ze(i),u=Nn(i,u),i.g.has(u)&&(i.i=null,i.h-=i.g.get(u).length,i.g.delete(u))}function ol(i,u){return ze(i),u=Nn(i,u),i.g.has(u)}n.forEach=function(i,u){ze(this),this.g.forEach(function(h,p){h.forEach(function(C){i.call(u,C,p,this)},this)},this)},n.na=function(){ze(this);const i=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let p=0;p<u.length;p++){const C=i[p];for(let S=0;S<C.length;S++)h.push(u[p])}return h},n.V=function(i){ze(this);let u=[];if(typeof i=="string")ol(this,i)&&(u=u.concat(this.g.get(Nn(this,i))));else{i=Array.from(this.g.values());for(let h=0;h<i.length;h++)u=u.concat(i[h])}return u},n.set=function(i,u){return ze(this),this.i=null,i=Nn(this,i),ol(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[u]),this.h+=1,this},n.get=function(i,u){return i?(i=this.V(i),0<i.length?String(i[0]):u):u};function al(i,u,h){il(i,u),0<h.length&&(i.i=null,i.g.set(Nn(i,u),B(h)),i.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var p=u[h];const S=encodeURIComponent(String(p)),F=this.V(p);for(p=0;p<F.length;p++){var C=S;F[p]!==""&&(C+="="+encodeURIComponent(String(F[p]))),i.push(C)}}return this.i=i.join("&")};function Nn(i,u){return u=String(u),i.j&&(u=u.toLowerCase()),u}function Gf(i,u){u&&!i.j&&(ze(i),i.i=null,i.g.forEach(function(h,p){var C=p.toLowerCase();p!=C&&(il(this,p),al(this,C,h))},i)),i.j=u}function Wf(i,u){const h=new _r;if(l.Image){const p=new Image;p.onload=R(Ke,h,"TestLoadImage: loaded",!0,u,p),p.onerror=R(Ke,h,"TestLoadImage: error",!1,u,p),p.onabort=R(Ke,h,"TestLoadImage: abort",!1,u,p),p.ontimeout=R(Ke,h,"TestLoadImage: timeout",!1,u,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=i}else u(!1)}function Qf(i,u){const h=new _r,p=new AbortController,C=setTimeout(()=>{p.abort(),Ke(h,"TestPingServer: timeout",!1,u)},1e4);fetch(i,{signal:p.signal}).then(S=>{clearTimeout(C),S.ok?Ke(h,"TestPingServer: ok",!0,u):Ke(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),Ke(h,"TestPingServer: error",!1,u)})}function Ke(i,u,h,p,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),p(h)}catch{}}function Yf(){this.g=new ls}function Xf(i,u,h){const p=h||"";try{el(i,function(C,S){let F=C;f(C)&&(F=Bt(C)),u.push(p+S+"="+encodeURIComponent(F))})}catch(C){throw u.push(p+"type="+encodeURIComponent("_badmap")),C}}function ms(i){this.l=i.Ub||null,this.j=i.eb||!1}O(ms,Ri),ms.prototype.g=function(){return new _s(this.l,this.j)},ms.prototype.i=function(i){return function(){return i}}({});function _s(i,u){X.call(this),this.D=i,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}O(_s,X),n=_s.prototype,n.open=function(i,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=u,this.readyState=1,wr(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(u.body=i),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ir(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,wr(this)),this.g&&(this.readyState=3,wr(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ll(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function ll(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var u=i.value?i.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!i.done}))&&(this.response=this.responseText+=u)}i.done?Ir(this):wr(this),this.readyState==3&&ll(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,Ir(this))},n.Qa=function(i){this.g&&(this.response=i,Ir(this))},n.ga=function(){this.g&&Ir(this)};function Ir(i){i.readyState=4,i.l=null,i.j=null,i.v=null,wr(i)}n.setRequestHeader=function(i,u){this.u.append(i,u)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,i.push(h[0]+": "+h[1]),h=u.next();return i.join(`\r
`)};function wr(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(_s.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function ul(i){let u="";return vt(i,function(h,p){u+=p,u+=":",u+=h,u+=`\r
`}),u}function Li(i,u,h){t:{for(p in h){var p=!1;break t}p=!0}p||(h=ul(h),typeof i=="string"?h!=null&&encodeURIComponent(String(h)):It(i,u,h))}function Ct(i){X.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}O(Ct,X);var Jf=/^https?$/i,Zf=["POST","PUT"];n=Ct.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,u,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);u=u?u.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Vi.g(),this.v=this.o?Fa(this.o):Fa(Vi),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(u,String(i),!0),this.B=!1}catch(S){cl(this,S);return}if(i=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var C in p)h.set(C,p[C]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const S of p.keys())h.set(S,p.get(S));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),C=l.FormData&&i instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Zf,u,void 0))||p||C||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,F]of h)this.g.setRequestHeader(S,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{dl(this),this.u=!0,this.g.send(i),this.u=!1}catch(S){cl(this,S)}};function cl(i,u){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=u,i.m=5,hl(i),ys(i)}function hl(i){i.A||(i.A=!0,st(i,"complete"),st(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,st(this,"complete"),st(this,"abort"),ys(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ys(this,!0)),Ct.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?fl(this):this.bb())},n.bb=function(){fl(this)};function fl(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Ne(i)!=4||i.Z()!=2)){if(i.u&&Ne(i)==4)Lt(i.Ea,0,i);else if(st(i,"readystatechange"),Ne(i)==4){i.h=!1;try{const F=i.Z();t:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var h;if(!(h=u)){var p;if(p=F===0){var C=String(i.D).match(nl)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),p=!Jf.test(C?C.toLowerCase():"")}h=p}if(h)st(i,"complete"),st(i,"success");else{i.m=6;try{var S=2<Ne(i)?i.g.statusText:""}catch{S=""}i.l=S+" ["+i.Z()+"]",hl(i)}}finally{ys(i)}}}}function ys(i,u){if(i.g){dl(i);const h=i.g,p=i.v[0]?()=>{}:null;i.g=null,i.v=null,u||st(i,"ready");try{h.onreadystatechange=p}catch{}}}function dl(i){i.I&&(l.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Ne(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Ne(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var u=this.g.responseText;return i&&u.indexOf(i)==0&&(u=u.substring(i.length)),fe(u)}};function pl(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function td(i){const u={};i=(i.g&&2<=Ne(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<i.length;p++){if(W(i[p]))continue;var h=A(i[p]);const C=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const S=u[C]||[];u[C]=S,S.push(h)}w(u,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ar(i,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[i]||u}function gl(i){this.Aa=0,this.i=[],this.j=new _r,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ar("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ar("baseRetryDelayMs",5e3,i),this.cb=Ar("retryDelaySeedMs",1e4,i),this.Wa=Ar("forwardChannelMaxRetries",2,i),this.wa=Ar("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Ya(i&&i.concurrentRequestLimit),this.Da=new Yf,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=gl.prototype,n.la=8,n.G=1,n.connect=function(i,u,h,p){Jt(0),this.W=i,this.H=u||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=Al(this,null,this.W),Es(this)};function Fi(i){if(ml(i),i.G==3){var u=i.U++,h=De(i.I);if(It(h,"SID",i.K),It(h,"RID",u),It(h,"TYPE","terminate"),Cr(i,h),u=new He(i,i.j,u),u.L=2,u.v=gs(De(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=u.v,h=!0),h||(u.g=Cl(u.j,null),u.g.ea(u.v)),u.F=Date.now(),fs(u)}wl(i)}function vs(i){i.g&&(Ui(i),i.g.cancel(),i.g=null)}function ml(i){vs(i),i.u&&(l.clearTimeout(i.u),i.u=null),Ts(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&l.clearTimeout(i.s),i.s=null)}function Es(i){if(!Xa(i.h)&&!i.s){i.s=!0;var u=i.Ga;_t||fn(),ft||(_t(),ft=!0),pe.add(u,i),i.B=0}}function ed(i,u){return Ja(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=u.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=mr(E(i.Ga,i,u),Il(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const C=new He(this,this.j,i);let S=this.o;if(this.S&&(S?(S=m(S),I(S,this.S)):S=this.S),this.m!==null||this.O||(C.H=S,S=null),this.P)t:{for(var u=0,h=0;h<this.i.length;h++){e:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=h;break t}if(u===4096||h===this.i.length-1){u=h+1;break t}}u=1e3}else u=1e3;u=yl(this,C,u),h=De(this.I),It(h,"RID",i),It(h,"CVER",22),this.D&&It(h,"X-HTTP-Session-Id",this.D),Cr(this,h),S&&(this.O?u="headers="+encodeURIComponent(String(ul(S)))+"&"+u:this.m&&Li(h,this.m,S)),ki(this.h,C),this.Ua&&It(h,"TYPE","init"),this.P?(It(h,"$req",u),It(h,"SID","null"),C.T=!0,Di(C,h,null)):Di(C,h,u),this.G=2}}else this.G==3&&(i?_l(this,i):this.i.length==0||Xa(this.h)||_l(this))};function _l(i,u){var h;u?h=u.l:h=i.U++;const p=De(i.I);It(p,"SID",i.K),It(p,"RID",h),It(p,"AID",i.T),Cr(i,p),i.m&&i.o&&Li(p,i.m,i.o),h=new He(i,i.j,h,i.B+1),i.m===null&&(h.H=i.o),u&&(i.i=u.D.concat(i.i)),u=yl(i,h,1e3),h.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),ki(i.h,h),Di(h,p,u)}function Cr(i,u){i.H&&vt(i.H,function(h,p){It(u,p,h)}),i.l&&el({},function(h,p){It(u,p,h)})}function yl(i,u,h){h=Math.min(i.i.length,h);var p=i.l?E(i.l.Na,i.l,i):null;t:{var C=i.i;let S=-1;for(;;){const F=["count="+h];S==-1?0<h?(S=C[0].g,F.push("ofs="+S)):S=0:F.push("ofs="+S);let yt=!0;for(let Ut=0;Ut<h;Ut++){let dt=C[Ut].g;const zt=C[Ut].map;if(dt-=S,0>dt)S=Math.max(0,C[Ut].g-100),yt=!1;else try{Xf(zt,F,"req"+dt+"_")}catch{p&&p(zt)}}if(yt){p=F.join("&");break t}}}return i=i.i.splice(0,h),u.D=i,p}function vl(i){if(!i.g&&!i.u){i.Y=1;var u=i.Fa;_t||fn(),ft||(_t(),ft=!0),pe.add(u,i),i.v=0}}function Bi(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=mr(E(i.Fa,i),Il(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,El(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=mr(E(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Jt(10),vs(this),El(this))};function Ui(i){i.A!=null&&(l.clearTimeout(i.A),i.A=null)}function El(i){i.g=new He(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var u=De(i.qa);It(u,"RID","rpc"),It(u,"SID",i.K),It(u,"AID",i.T),It(u,"CI",i.F?"0":"1"),!i.F&&i.ja&&It(u,"TO",i.ja),It(u,"TYPE","xmlhttp"),Cr(i,u),i.m&&i.o&&Li(u,i.m,i.o),i.L&&(i.g.I=i.L);var h=i.g;i=i.ia,h.L=1,h.v=gs(De(u)),h.m=null,h.P=!0,Ga(h,i)}n.Za=function(){this.C!=null&&(this.C=null,vs(this),Bi(this),Jt(19))};function Ts(i){i.C!=null&&(l.clearTimeout(i.C),i.C=null)}function Tl(i,u){var h=null;if(i.g==u){Ts(i),Ui(i),i.g=null;var p=2}else if(Mi(i.h,u))h=u.D,Za(i.h,u),p=1;else return;if(i.G!=0){if(u.o)if(p==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var C=i.B;p=us(),st(p,new qa(p,h)),Es(i)}else vl(i);else if(C=u.s,C==3||C==0&&0<u.X||!(p==1&&ed(i,u)||p==2&&Bi(i)))switch(h&&0<h.length&&(u=i.h,u.i=u.i.concat(h)),C){case 1:yn(i,5);break;case 4:yn(i,10);break;case 3:yn(i,6);break;default:yn(i,2)}}}function Il(i,u){let h=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(h*=2),h*u}function yn(i,u){if(i.j.info("Error code "+u),u==2){var h=E(i.fb,i),p=i.Xa;const C=!p;p=new _n(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ds(p,"https"),gs(p),C?Wf(p.toString(),h):Qf(p.toString(),h)}else Jt(2);i.G=0,i.l&&i.l.sa(u),wl(i),ml(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Jt(2)):(this.j.info("Failed to ping google.com"),Jt(1))};function wl(i){if(i.G=0,i.ka=[],i.l){const u=tl(i.h);(u.length!=0||i.i.length!=0)&&(U(i.ka,u),U(i.ka,i.i),i.h.i.length=0,B(i.i),i.i.length=0),i.l.ra()}}function Al(i,u,h){var p=h instanceof _n?De(h):new _n(h);if(p.g!="")u&&(p.g=u+"."+p.g),ps(p,p.s);else{var C=l.location;p=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var S=new _n(null);p&&ds(S,p),u&&(S.g=u),C&&ps(S,C),h&&(S.l=h),p=S}return h=i.D,u=i.ya,h&&u&&It(p,h,u),It(p,"VER",i.la),Cr(i,p),p}function Cl(i,u,h){if(u&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=i.Ca&&!i.pa?new Ct(new ms({eb:h})):new Ct(i.pa),u.Ha(i.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function bl(){}n=bl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Is(){}Is.prototype.g=function(i,u){return new le(i,u)};function le(i,u){X.call(this),this.g=new gl(u),this.l=i,this.h=u&&u.messageUrlParams||null,i=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(i?i["X-WebChannel-Content-Type"]=u.messageContentType:i={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(i?i["X-WebChannel-Client-Profile"]=u.va:i={"X-WebChannel-Client-Profile":u.va}),this.g.S=i,(i=u&&u.Sb)&&!W(i)&&(this.g.m=i),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!W(u)&&(this.g.D=u,i=this.h,i!==null&&u in i&&(i=this.h,u in i&&delete i[u])),this.j=new On(this)}O(le,X),le.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},le.prototype.close=function(){Fi(this.g)},le.prototype.o=function(i){var u=this.g;if(typeof i=="string"){var h={};h.__data__=i,i=h}else this.u&&(h={},h.__data__=Bt(i),i=h);u.i.push(new Ff(u.Ya++,i)),u.G==3&&Es(u)},le.prototype.N=function(){this.g.l=null,delete this.j,Fi(this.g),delete this.g,le.aa.N.call(this)};function Rl(i){Si.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var u=i.__sm__;if(u){t:{for(const h in u){i=h;break t}i=void 0}(this.i=i)&&(i=this.i,u=u!==null&&i in u?u[i]:void 0),this.data=u}else this.data=i}O(Rl,Si);function Sl(){Pi.call(this),this.status=1}O(Sl,Pi);function On(i){this.g=i}O(On,bl),On.prototype.ua=function(){st(this.g,"a")},On.prototype.ta=function(i){st(this.g,new Rl(i))},On.prototype.sa=function(i){st(this.g,new Sl)},On.prototype.ra=function(){st(this.g,"b")},Is.prototype.createWebChannel=Is.prototype.g,le.prototype.send=le.prototype.o,le.prototype.open=le.prototype.m,le.prototype.close=le.prototype.close,Sh=function(){return new Is},Rh=function(){return us()},bh=gn,Po={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},cs.NO_ERROR=0,cs.TIMEOUT=8,cs.HTTP_ERROR=6,ks=cs,Ha.COMPLETE="complete",Ch=Ha,Ba.EventType=pr,pr.OPEN="a",pr.CLOSE="b",pr.ERROR="c",pr.MESSAGE="d",X.prototype.listen=X.prototype.K,Pr=Ba,Ct.prototype.listenOnce=Ct.prototype.L,Ct.prototype.getLastError=Ct.prototype.Ka,Ct.prototype.getLastErrorCode=Ct.prototype.Ba,Ct.prototype.getStatus=Ct.prototype.Z,Ct.prototype.getResponseJson=Ct.prototype.Oa,Ct.prototype.getResponseText=Ct.prototype.oa,Ct.prototype.send=Ct.prototype.ea,Ct.prototype.setWithCredentials=Ct.prototype.Ha,Ah=Ct}).apply(typeof Rs<"u"?Rs:typeof self<"u"?self:typeof window<"u"?window:{});const pu="@firebase/firestore",gu="4.7.17";/**
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
 */class Wt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Wt.UNAUTHENTICATED=new Wt(null),Wt.GOOGLE_CREDENTIALS=new Wt("google-credentials-uid"),Wt.FIRST_PARTY=new Wt("first-party-uid"),Wt.MOCK_USER=new Wt("mock-user");/**
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
 */let ar="11.9.0";/**
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
 */const Pn=new _h("@firebase/firestore");function Fn(){return Pn.logLevel}function H(n,...t){if(Pn.logLevel<=ut.DEBUG){const e=t.map(_a);Pn.debug(`Firestore (${ar}): ${n}`,...e)}}function Ue(n,...t){if(Pn.logLevel<=ut.ERROR){const e=t.map(_a);Pn.error(`Firestore (${ar}): ${n}`,...e)}}function Zn(n,...t){if(Pn.logLevel<=ut.WARN){const e=t.map(_a);Pn.warn(`Firestore (${ar}): ${n}`,...e)}}function _a(n){if(typeof n=="string")return n;try{/**
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
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
 */function rt(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Ph(n,r,e)}function Ph(n,t,e){let r=`FIRESTORE (${ar}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Ue(r),new Error(r)}function wt(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||Ph(t,s,r)}function ct(n,t){return n}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends or{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Rn{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class Vh{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class d_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Wt.UNAUTHENTICATED))}shutdown(){}}class p_{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class g_{constructor(t){this.t=t,this.currentUser=Wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){wt(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,e(c)):Promise.resolve();let o=new Rn;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Rn,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=o;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Rn)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(wt(typeof r.accessToken=="string",31837,{l:r}),new Vh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return wt(t===null||typeof t=="string",2055,{h:t}),new Wt(t)}}class m_{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=Wt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class __{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new m_(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(Wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class y_{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ym(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){wt(this.o===void 0,3512);const r=o=>{o.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,H("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new mu(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(wt(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new mu(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function v_(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */function xh(){return new TextEncoder}/**
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
 */class E_{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=v_(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function ot(n,t){return n<t?-1:n>t?1:0}function Vo(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),s=t.codePointAt(e);if(r!==s){if(r<128&&s<128)return ot(r,s);{const o=xh(),a=T_(o.encode(_u(n,e)),o.encode(_u(t,e)));return a!==0?a:ot(r,s)}}e+=r>65535?2:1}return ot(n.length,t.length)}function _u(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function T_(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return ot(n[e],t[e]);return ot(n.length,t.length)}function tr(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */const yu=-62135596800,vu=1e6;class oe{static now(){return oe.fromMillis(Date.now())}static fromDate(t){return oe.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*vu);return new oe(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new J($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new J($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<yu)throw new J($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new J($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/vu}_compareTo(t){return this.seconds===t.seconds?ot(this.nanoseconds,t.nanoseconds):ot(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-yu;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class et{static fromTimestamp(t){return new et(t)}static min(){return new et(new oe(0,0))}static max(){return new et(new oe(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Eu="__name__";class Te{constructor(t,e,r){e===void 0?e=0:e>t.length&&rt(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&rt(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Te.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Te?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=Te.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return ot(t.length,e.length)}static compareSegments(t,e){const r=Te.isNumericId(t),s=Te.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?Te.extractNumericId(t).compare(Te.extractNumericId(e)):Vo(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return en.fromString(t.substring(4,t.length-2))}}class bt extends Te{construct(t,e,r){return new bt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new J($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new bt(e)}static emptyPath(){return new bt([])}}const I_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ne extends Te{construct(t,e,r){return new ne(t,e,r)}static isValidIdentifier(t){return I_.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ne.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Eu}static keyField(){return new ne([Eu])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new J($.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new J($.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new J($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(o(),s++)}if(o(),a)throw new J($.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ne(e)}static emptyPath(){return new ne([])}}/**
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
 */class tt{constructor(t){this.path=t}static fromPath(t){return new tt(bt.fromString(t))}static fromName(t){return new tt(bt.fromString(t).popFirst(5))}static empty(){return new tt(bt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&bt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return bt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new tt(new bt(t.slice()))}}/**
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
 */const Xr=-1;function w_(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=et.fromTimestamp(r===1e9?new oe(e+1,0):new oe(e,r));return new sn(s,tt.empty(),t)}function A_(n){return new sn(n.readTime,n.key,Xr)}class sn{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new sn(et.min(),tt.empty(),Xr)}static max(){return new sn(et.max(),tt.empty(),Xr)}}function C_(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=tt.comparator(n.documentKey,t.documentKey),e!==0?e:ot(n.largestBatchId,t.largestBatchId))}/**
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
 */const b_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class R_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function pi(n){if(n.code!==$.FAILED_PRECONDITION||n.message!==b_)throw n;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&rt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new V((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof V?e:V.resolve(e)}catch(e){return V.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):V.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):V.reject(e)}static resolve(t){return new V((e,r)=>{e(t)})}static reject(t){return new V((e,r)=>{r(t)})}static waitFor(t){return new V((e,r)=>{let s=0,o=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++o,a&&o===s&&e()},c=>r(c))}),a=!0,o===s&&e()})}static or(t){let e=V.resolve(!1);for(const r of t)e=e.next(s=>s?V.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new V((r,s)=>{const o=t.length,a=new Array(o);let l=0;for(let c=0;c<o;c++){const f=c;e(t[f]).next(d=>{a[f]=d,++l,l===o&&r(a)},d=>s(d))}})}static doWhile(t,e){return new V((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function S_(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function lr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class gi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>e.writeSequenceNumber(r))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}gi.le=-1;/**
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
 */const P_=-1;function mi(n){return n==null}function xo(n){return n===0&&1/n==-1/0}/**
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
 */const Dh="";function V_(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Tu(t)),t=x_(n.get(e),t);return Tu(t)}function x_(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case Dh:e+="";break;default:e+=o}}return e}function Tu(n){return n+Dh+""}/**
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
 */function Iu(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function rs(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function D_(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class St{constructor(t,e){this.comparator=t,this.root=e||jt.EMPTY}insert(t,e){return new St(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,jt.BLACK,null,null))}remove(t){return new St(this.comparator,this.root.remove(t,this.comparator).copy(null,null,jt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ss(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ss(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ss(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ss(this.root,t,this.comparator,!0)}}class Ss{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class jt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??jt.RED,this.left=s??jt.EMPTY,this.right=o??jt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new jt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return jt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return jt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,jt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,jt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw rt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw rt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw rt(27949);return t+(this.isRed()?0:1)}}jt.EMPTY=null,jt.RED=!0,jt.BLACK=!1;jt.EMPTY=new class{constructor(){this.size=0}get key(){throw rt(57766)}get value(){throw rt(16141)}get color(){throw rt(16727)}get left(){throw rt(29726)}get right(){throw rt(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new jt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ot{constructor(t){this.comparator=t,this.data=new St(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new wu(this.data.getIterator())}getIteratorFrom(t){return new wu(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof Ot)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Ot(this.comparator);return e.data=t,e}}class wu{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ye{constructor(t){this.fields=t,t.sort(ne.comparator)}static empty(){return new Ye([])}unionWith(t){let e=new Ot(ne.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Ye(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return tr(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class Nh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class qt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Nh("Invalid base64 string: "+o):o}}(t);return new qt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new qt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ot(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}qt.EMPTY_BYTE_STRING=new qt("");const N_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function on(n){if(wt(!!n,39018),typeof n=="string"){let t=0;const e=N_.exec(n);if(wt(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Rt(n.seconds),nanos:Rt(n.nanos)}}function Rt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function an(n){return typeof n=="string"?qt.fromBase64String(n):qt.fromUint8Array(n)}/**
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
 */const Oh="server_timestamp",Mh="__type__",kh="__previous_value__",Lh="__local_write_time__";function ya(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{})[Mh])===null||e===void 0?void 0:e.stringValue)===Oh}function _i(n){const t=n.mapValue.fields[kh];return ya(t)?_i(t):t}function Jr(n){const t=on(n.mapValue.fields[Lh].timestampValue);return new oe(t.seconds,t.nanos)}/**
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
 */class O_{constructor(t,e,r,s,o,a,l,c,f,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=f,this.isUsingEmulator=d}}const Xs="(default)";class Zr{constructor(t,e){this.projectId=t,this.database=e||Xs}static empty(){return new Zr("","")}get isDefaultDatabase(){return this.database===Xs}isEqual(t){return t instanceof Zr&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const M_="__type__",k_="__max__",Ps={mapValue:{}},L_="__vector__",Do="value";function ln(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ya(n)?4:B_(n)?9007199254740991:F_(n)?10:11:rt(28295,{value:n})}function Se(n,t){if(n===t)return!0;const e=ln(n);if(e!==ln(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Jr(n).isEqual(Jr(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=on(s.timestampValue),l=on(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return an(s.bytesValue).isEqual(an(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return Rt(s.geoPointValue.latitude)===Rt(o.geoPointValue.latitude)&&Rt(s.geoPointValue.longitude)===Rt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return Rt(s.integerValue)===Rt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=Rt(s.doubleValue),l=Rt(o.doubleValue);return a===l?xo(a)===xo(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return tr(n.arrayValue.values||[],t.arrayValue.values||[],Se);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},l=o.mapValue.fields||{};if(Iu(a)!==Iu(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!Se(a[c],l[c])))return!1;return!0}(n,t);default:return rt(52216,{left:n})}}function ts(n,t){return(n.values||[]).find(e=>Se(e,t))!==void 0}function er(n,t){if(n===t)return 0;const e=ln(n),r=ln(t);if(e!==r)return ot(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return ot(n.booleanValue,t.booleanValue);case 2:return function(o,a){const l=Rt(o.integerValue||o.doubleValue),c=Rt(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,t);case 3:return Au(n.timestampValue,t.timestampValue);case 4:return Au(Jr(n),Jr(t));case 5:return Vo(n.stringValue,t.stringValue);case 6:return function(o,a){const l=an(o),c=an(a);return l.compareTo(c)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const l=o.split("/"),c=a.split("/");for(let f=0;f<l.length&&f<c.length;f++){const d=ot(l[f],c[f]);if(d!==0)return d}return ot(l.length,c.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const l=ot(Rt(o.latitude),Rt(a.latitude));return l!==0?l:ot(Rt(o.longitude),Rt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Cu(n.arrayValue,t.arrayValue);case 10:return function(o,a){var l,c,f,d;const g=o.fields||{},E=a.fields||{},R=(l=g[Do])===null||l===void 0?void 0:l.arrayValue,O=(c=E[Do])===null||c===void 0?void 0:c.arrayValue,B=ot(((f=R?.values)===null||f===void 0?void 0:f.length)||0,((d=O?.values)===null||d===void 0?void 0:d.length)||0);return B!==0?B:Cu(R,O)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===Ps.mapValue&&a===Ps.mapValue)return 0;if(o===Ps.mapValue)return 1;if(a===Ps.mapValue)return-1;const l=o.fields||{},c=Object.keys(l),f=a.fields||{},d=Object.keys(f);c.sort(),d.sort();for(let g=0;g<c.length&&g<d.length;++g){const E=Vo(c[g],d[g]);if(E!==0)return E;const R=er(l[c[g]],f[d[g]]);if(R!==0)return R}return ot(c.length,d.length)}(n.mapValue,t.mapValue);default:throw rt(23264,{Pe:e})}}function Au(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return ot(n,t);const e=on(n),r=on(t),s=ot(e.seconds,r.seconds);return s!==0?s:ot(e.nanos,r.nanos)}function Cu(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=er(e[s],r[s]);if(o)return o}return ot(e.length,r.length)}function nr(n){return No(n)}function No(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=on(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return an(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return tt.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=No(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${No(e.fields[a])}`;return s+"}"}(n.mapValue):rt(61005,{value:n})}function Ls(n){switch(ln(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=_i(n);return t?16+Ls(t):16;case 5:return 2*n.stringValue.length;case 6:return an(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+Ls(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return rs(r.fields,(o,a)=>{s+=o.length+Ls(a)}),s}(n.mapValue);default:throw rt(13486,{value:n})}}function Oo(n){return!!n&&"integerValue"in n}function va(n){return!!n&&"arrayValue"in n}function bu(n){return!!n&&"nullValue"in n}function Ru(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function oo(n){return!!n&&"mapValue"in n}function F_(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{})[M_])===null||e===void 0?void 0:e.stringValue)===L_}function Ur(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return rs(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Ur(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ur(n.arrayValue.values[e]);return t}return Object.assign({},n)}function B_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===k_}/**
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
 */class we{constructor(t){this.value=t}static empty(){return new we({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!oo(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ur(e)}setAll(t){let e=ne.emptyPath(),r={},s=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const c=this.getFieldsMap(e);this.applyChanges(c,r,s),r={},s=[],e=l.popLast()}a?r[l.lastSegment()]=Ur(a):s.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());oo(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Se(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];oo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){rs(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new we(Ur(this.value))}}/**
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
 */class Yt{constructor(t,e,r,s,o,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new Yt(t,0,et.min(),et.min(),et.min(),we.empty(),0)}static newFoundDocument(t,e,r,s){return new Yt(t,1,e,et.min(),r,s,0)}static newNoDocument(t,e){return new Yt(t,2,e,et.min(),et.min(),we.empty(),0)}static newUnknownDocument(t,e){return new Yt(t,3,e,et.min(),et.min(),we.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(et.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=we.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=we.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=et.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Yt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Js{constructor(t,e){this.position=t,this.inclusive=e}}function Su(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=tt.comparator(tt.fromName(a.referenceValue),e.key):r=er(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Pu(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Se(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Zs{constructor(t,e="asc"){this.field=t,this.dir=e}}function U_(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Fh{}class Nt extends Fh{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new $_(t,e,r):e==="array-contains"?new z_(t,r):e==="in"?new K_(t,r):e==="not-in"?new G_(t,r):e==="array-contains-any"?new W_(t,r):new Nt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new q_(t,r):new H_(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(er(e,this.value)):e!==null&&ln(this.value)===ln(e)&&this.matchesComparison(er(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return rt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Pe extends Fh{constructor(t,e){super(),this.filters=t,this.op=e,this.Te=null}static create(t,e){return new Pe(t,e)}matches(t){return Bh(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Bh(n){return n.op==="and"}function Uh(n){return j_(n)&&Bh(n)}function j_(n){for(const t of n.filters)if(t instanceof Pe)return!1;return!0}function Mo(n){if(n instanceof Nt)return n.field.canonicalString()+n.op.toString()+nr(n.value);if(Uh(n))return n.filters.map(t=>Mo(t)).join(",");{const t=n.filters.map(e=>Mo(e)).join(",");return`${n.op}(${t})`}}function jh(n,t){return n instanceof Nt?function(r,s){return s instanceof Nt&&r.op===s.op&&r.field.isEqual(s.field)&&Se(r.value,s.value)}(n,t):n instanceof Pe?function(r,s){return s instanceof Pe&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,l)=>o&&jh(a,s.filters[l]),!0):!1}(n,t):void rt(19439)}function $h(n){return n instanceof Nt?function(e){return`${e.field.canonicalString()} ${e.op} ${nr(e.value)}`}(n):n instanceof Pe?function(e){return e.op.toString()+" {"+e.getFilters().map($h).join(" ,")+"}"}(n):"Filter"}class $_ extends Nt{constructor(t,e,r){super(t,e,r),this.key=tt.fromName(r.referenceValue)}matches(t){const e=tt.comparator(t.key,this.key);return this.matchesComparison(e)}}class q_ extends Nt{constructor(t,e){super(t,"in",e),this.keys=qh("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class H_ extends Nt{constructor(t,e){super(t,"not-in",e),this.keys=qh("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function qh(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>tt.fromName(r.referenceValue))}class z_ extends Nt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return va(e)&&ts(e.arrayValue,this.value)}}class K_ extends Nt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&ts(this.value.arrayValue,e)}}class G_ extends Nt{constructor(t,e){super(t,"not-in",e)}matches(t){if(ts(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!ts(this.value.arrayValue,e)}}class W_ extends Nt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!va(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>ts(this.value.arrayValue,r))}}/**
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
 */class Q_{constructor(t,e=null,r=[],s=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=l,this.Ie=null}}function Vu(n,t=null,e=[],r=[],s=null,o=null,a=null){return new Q_(n,t,e,r,s,o,a)}function Ea(n){const t=ct(n);if(t.Ie===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Mo(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),mi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>nr(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>nr(r)).join(",")),t.Ie=e}return t.Ie}function Ta(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!U_(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!jh(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Pu(n.startAt,t.startAt)&&Pu(n.endAt,t.endAt)}function ko(n){return tt.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class yi{constructor(t,e=null,r=[],s=[],o=null,a="F",l=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Y_(n,t,e,r,s,o,a,l){return new yi(n,t,e,r,s,o,a,l)}function Hh(n){return new yi(n)}function xu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function X_(n){return n.collectionGroup!==null}function jr(n){const t=ct(n);if(t.Ee===null){t.Ee=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ee.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ot(ne.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ee.push(new Zs(o,r))}),e.has(ne.keyField().canonicalString())||t.Ee.push(new Zs(ne.keyField(),r))}return t.Ee}function be(n){const t=ct(n);return t.de||(t.de=J_(t,jr(n))),t.de}function J_(n,t){if(n.limitType==="F")return Vu(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Zs(s.field,o)});const e=n.endAt?new Js(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Js(n.startAt.position,n.startAt.inclusive):null;return Vu(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Lo(n,t,e){return new yi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function vi(n,t){return Ta(be(n),be(t))&&n.limitType===t.limitType}function zh(n){return`${Ea(be(n))}|lt:${n.limitType}`}function Bn(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>$h(s)).join(", ")}]`),mi(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>nr(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>nr(s)).join(",")),`Target(${r})`}(be(n))}; limitType=${n.limitType})`}function Ei(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):tt.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of jr(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,l,c){const f=Su(a,l,c);return a.inclusive?f<=0:f<0}(r.startAt,jr(r),s)||r.endAt&&!function(a,l,c){const f=Su(a,l,c);return a.inclusive?f>=0:f>0}(r.endAt,jr(r),s))}(n,t)}function Z_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Kh(n){return(t,e)=>{let r=!1;for(const s of jr(n)){const o=ty(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function ty(n,t,e){const r=n.field.isKeyField()?tt.comparator(t.key,e.key):function(o,a,l){const c=a.data.field(o),f=l.data.field(o);return c!==null&&f!==null?er(c,f):rt(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return rt(19790,{direction:n.dir})}}/**
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
 */class xn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){rs(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return D_(this.inner)}size(){return this.innerSize}}/**
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
 */const ey=new St(tt.comparator);function un(){return ey}const Gh=new St(tt.comparator);function Vr(...n){let t=Gh;for(const e of n)t=t.insert(e.key,e);return t}function ny(n){let t=Gh;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function An(){return $r()}function Wh(){return $r()}function $r(){return new xn(n=>n.toString(),(n,t)=>n.isEqual(t))}const ry=new Ot(tt.comparator);function ht(...n){let t=ry;for(const e of n)t=t.add(e);return t}const sy=new Ot(ot);function iy(){return sy}/**
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
 */function oy(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xo(t)?"-0":t}}function ay(n){return{integerValue:""+n}}/**
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
 */class Ti{constructor(){this._=void 0}}function ly(n,t,e){return n instanceof Fo?function(s,o){const a={fields:{[Mh]:{stringValue:Oh},[Lh]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&ya(o)&&(o=_i(o)),o&&(a.fields[kh]=o),{mapValue:a}}(e,t):n instanceof ti?Qh(n,t):n instanceof ei?Yh(n,t):function(s,o){const a=cy(s,o),l=Du(a)+Du(s.Re);return Oo(a)&&Oo(s.Re)?ay(l):oy(s.serializer,l)}(n,t)}function uy(n,t,e){return n instanceof ti?Qh(n,t):n instanceof ei?Yh(n,t):e}function cy(n,t){return n instanceof Bo?function(r){return Oo(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Fo extends Ti{}class ti extends Ti{constructor(t){super(),this.elements=t}}function Qh(n,t){const e=Xh(t);for(const r of n.elements)e.some(s=>Se(s,r))||e.push(r);return{arrayValue:{values:e}}}class ei extends Ti{constructor(t){super(),this.elements=t}}function Yh(n,t){let e=Xh(t);for(const r of n.elements)e=e.filter(s=>!Se(s,r));return{arrayValue:{values:e}}}class Bo extends Ti{constructor(t,e){super(),this.serializer=t,this.Re=e}}function Du(n){return Rt(n.integerValue||n.doubleValue)}function Xh(n){return va(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function hy(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof ti&&s instanceof ti||r instanceof ei&&s instanceof ei?tr(r.elements,s.elements,Se):r instanceof Bo&&s instanceof Bo?Se(r.Re,s.Re):r instanceof Fo&&s instanceof Fo}(n.transform,t.transform)}class Sn{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Sn}static exists(t){return new Sn(void 0,t)}static updateTime(t){return new Sn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Fs(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Ia{}function Jh(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new dy(n.key,Sn.none()):new wa(n.key,n.data,Sn.none());{const e=n.data,r=we.empty();let s=new Ot(ne.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new Ii(n.key,r,new Ye(s.toArray()),Sn.none())}}function fy(n,t,e){n instanceof wa?function(s,o,a){const l=s.value.clone(),c=Ou(s.fieldTransforms,o,a.transformResults);l.setAll(c),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof Ii?function(s,o,a){if(!Fs(s.precondition,o))return void o.convertToUnknownDocument(a.version);const l=Ou(s.fieldTransforms,o,a.transformResults),c=o.data;c.setAll(Zh(s)),c.setAll(l),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function qr(n,t,e,r){return n instanceof wa?function(o,a,l,c){if(!Fs(o.precondition,a))return l;const f=o.value.clone(),d=Mu(o.fieldTransforms,c,a);return f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof Ii?function(o,a,l,c){if(!Fs(o.precondition,a))return l;const f=Mu(o.fieldTransforms,c,a),d=a.data;return d.setAll(Zh(o)),d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(g=>g.field))}(n,t,e,r):function(o,a,l){return Fs(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function Nu(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&tr(r,s,(o,a)=>hy(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class wa extends Ia{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ii extends Ia{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Zh(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Ou(n,t,e){const r=new Map;wt(n.length===e.length,32656,{Ve:e.length,me:n.length});for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,l=t.data.field(o.field);r.set(o.field,uy(a,l,e[s]))}return r}function Mu(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,ly(o,a,t))}return r}class dy extends Ia{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class py{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&fy(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=qr(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=qr(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Wh();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(s.key)?null:l;const c=Jh(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(et.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),ht())}isEqual(t){return this.batchId===t.batchId&&tr(this.mutations,t.mutations,(e,r)=>Nu(e,r))&&tr(this.baseMutations,t.baseMutations,(e,r)=>Nu(e,r))}}/**
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
 */class gy{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class my{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var Pt,lt;function tf(n){if(n===void 0)return Ue("GRPC error has no .code"),$.UNKNOWN;switch(n){case Pt.OK:return $.OK;case Pt.CANCELLED:return $.CANCELLED;case Pt.UNKNOWN:return $.UNKNOWN;case Pt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Pt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Pt.INTERNAL:return $.INTERNAL;case Pt.UNAVAILABLE:return $.UNAVAILABLE;case Pt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Pt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Pt.NOT_FOUND:return $.NOT_FOUND;case Pt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Pt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Pt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Pt.ABORTED:return $.ABORTED;case Pt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Pt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Pt.DATA_LOSS:return $.DATA_LOSS;default:return rt(39323,{code:n})}}(lt=Pt||(Pt={}))[lt.OK=0]="OK",lt[lt.CANCELLED=1]="CANCELLED",lt[lt.UNKNOWN=2]="UNKNOWN",lt[lt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",lt[lt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",lt[lt.NOT_FOUND=5]="NOT_FOUND",lt[lt.ALREADY_EXISTS=6]="ALREADY_EXISTS",lt[lt.PERMISSION_DENIED=7]="PERMISSION_DENIED",lt[lt.UNAUTHENTICATED=16]="UNAUTHENTICATED",lt[lt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",lt[lt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",lt[lt.ABORTED=10]="ABORTED",lt[lt.OUT_OF_RANGE=11]="OUT_OF_RANGE",lt[lt.UNIMPLEMENTED=12]="UNIMPLEMENTED",lt[lt.INTERNAL=13]="INTERNAL",lt[lt.UNAVAILABLE=14]="UNAVAILABLE",lt[lt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const _y=new en([4294967295,4294967295],0);function ku(n){const t=xh().encode(n),e=new wh;return e.update(t),new Uint8Array(e.digest())}function Lu(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new en([e,r],0),new en([s,o],0)]}class Aa{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new xr(`Invalid padding: ${e}`);if(r<0)throw new xr(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new xr(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new xr(`Invalid padding when bitmap length is 0: ${e}`);this.pe=8*t.length-e,this.ye=en.fromNumber(this.pe)}we(t,e,r){let s=t.add(e.multiply(en.fromNumber(r)));return s.compare(_y)===1&&(s=new en([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.pe===0)return!1;const e=ku(t),[r,s]=Lu(e);for(let o=0;o<this.hashCount;o++){const a=this.we(r,s,o);if(!this.be(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Aa(o,s,e);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.pe===0)return;const e=ku(t),[r,s]=Lu(e);for(let o=0;o<this.hashCount;o++){const a=this.we(r,s,o);this.Se(a)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class xr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class wi{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,ss.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new wi(et.min(),s,new St(ot),un(),ht())}}class ss{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new ss(r,e,ht(),ht(),ht())}}/**
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
 */class Bs{constructor(t,e,r,s){this.De=t,this.removedTargetIds=e,this.key=r,this.ve=s}}class ef{constructor(t,e){this.targetId=t,this.Ce=e}}class nf{constructor(t,e,r=qt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Fu{constructor(){this.Fe=0,this.Me=Bu(),this.xe=qt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=ht(),e=ht(),r=ht();return this.Me.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:rt(38017,{changeType:o})}}),new ss(this.xe,this.Oe,t,e,r)}Qe(){this.Ne=!1,this.Me=Bu()}$e(t,e){this.Ne=!0,this.Me=this.Me.insert(t,e)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,wt(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class yy{constructor(t){this.ze=t,this.je=new Map,this.He=un(),this.Je=Vs(),this.Ye=Vs(),this.Ze=new St(ot)}Xe(t){for(const e of t.De)t.ve&&t.ve.isFoundDocument()?this.et(e,t.ve):this.tt(e,t.key,t.ve);for(const e of t.removedTargetIds)this.tt(e,t.key,t.ve)}nt(t){this.forEachTarget(t,e=>{const r=this.rt(e);switch(t.state){case 0:this.it(e)&&r.ke(t.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(t.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(e);break;case 3:this.it(e)&&(r.Ge(),r.ke(t.resumeToken));break;case 4:this.it(e)&&(this.st(e),r.ke(t.resumeToken));break;default:rt(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.je.forEach((r,s)=>{this.it(s)&&e(s)})}ot(t){const e=t.targetId,r=t.Ce.count,s=this._t(e);if(s){const o=s.target;if(ko(o))if(r===0){const a=new tt(o.path);this.tt(e,a,Yt.newNoDocument(a,et.min()))}else wt(r===1,20013,{expectedCount:r});else{const a=this.ut(e);if(a!==r){const l=this.ct(t),c=l?this.lt(l,t,a):1;if(c!==0){this.st(e);const f=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,f)}}}}}ct(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,l;try{a=an(r).toUint8Array()}catch(c){if(c instanceof Nh)return Zn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Aa(a,s,o)}catch(c){return Zn(c instanceof xr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.pe===0?null:l}lt(t,e,r){return e.Ce.count===r-this.Tt(t,e.targetId)?0:2}Tt(t,e){const r=this.ze.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.ze.Pt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.tt(e,o,null),s++)}),s}It(t){const e=new Map;this.je.forEach((o,a)=>{const l=this._t(a);if(l){if(o.current&&ko(l.target)){const c=new tt(l.target.path);this.Et(c).has(a)||this.dt(a,c)||this.tt(a,c,Yt.newNoDocument(c,t))}o.Le&&(e.set(a,o.qe()),o.Qe())}});let r=ht();this.Ye.forEach((o,a)=>{let l=!0;a.forEachWhile(c=>{const f=this._t(c);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.He.forEach((o,a)=>a.setReadTime(t));const s=new wi(t,e,this.Ze,this.He,r);return this.He=un(),this.Je=Vs(),this.Ye=Vs(),this.Ze=new St(ot),s}et(t,e){if(!this.it(t))return;const r=this.dt(t,e.key)?2:0;this.rt(t).$e(e.key,r),this.He=this.He.insert(e.key,e),this.Je=this.Je.insert(e.key,this.Et(e.key).add(t)),this.Ye=this.Ye.insert(e.key,this.At(e.key).add(t))}tt(t,e,r){if(!this.it(t))return;const s=this.rt(t);this.dt(t,e)?s.$e(e,1):s.Ue(e),this.Ye=this.Ye.insert(e,this.At(e).delete(t)),this.Ye=this.Ye.insert(e,this.At(e).add(t)),r&&(this.He=this.He.insert(e,r))}removeTarget(t){this.je.delete(t)}ut(t){const e=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let e=this.je.get(t);return e||(e=new Fu,this.je.set(t,e)),e}At(t){let e=this.Ye.get(t);return e||(e=new Ot(ot),this.Ye=this.Ye.insert(t,e)),e}Et(t){let e=this.Je.get(t);return e||(e=new Ot(ot),this.Je=this.Je.insert(t,e)),e}it(t){const e=this._t(t)!==null;return e||H("WatchChangeAggregator","Detected inactive target",t),e}_t(t){const e=this.je.get(t);return e&&e.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new Fu),this.ze.getRemoteKeysForTarget(t).forEach(e=>{this.tt(t,e,null)})}dt(t,e){return this.ze.getRemoteKeysForTarget(t).has(e)}}function Vs(){return new St(tt.comparator)}function Bu(){return new St(tt.comparator)}const vy={asc:"ASCENDING",desc:"DESCENDING"},Ey={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ty={and:"AND",or:"OR"};class Iy{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Uo(n,t){return n.useProto3Json||mi(t)?t:{value:t}}function wy(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ay(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Wn(n){return wt(!!n,49232),et.fromTimestamp(function(e){const r=on(e);return new oe(r.seconds,r.nanos)}(n))}function Cy(n,t){return jo(n,t).canonicalString()}function jo(n,t){const e=function(s){return new bt(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function rf(n){const t=bt.fromString(n);return wt(uf(t),10190,{key:t.toString()}),t}function ao(n,t){const e=rf(t);if(e.get(1)!==n.databaseId.projectId)throw new J($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new J($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new tt(of(e))}function sf(n,t){return Cy(n.databaseId,t)}function by(n){const t=rf(n);return t.length===4?bt.emptyPath():of(t)}function Uu(n){return new bt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function of(n){return wt(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Ry(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:rt(39313,{state:f})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,d){return f.useProto3Json?(wt(d===void 0||typeof d=="string",58123),qt.fromBase64String(d||"")):(wt(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),qt.fromUint8Array(d||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(f){const d=f.code===void 0?$.UNKNOWN:tf(f.code);return new J(d,f.message||"")}(a);e=new nf(r,s,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=ao(n,r.document.name),o=Wn(r.document.updateTime),a=r.document.createTime?Wn(r.document.createTime):et.min(),l=new we({mapValue:{fields:r.document.fields}}),c=Yt.newFoundDocument(s,o,a,l),f=r.targetIds||[],d=r.removedTargetIds||[];e=new Bs(f,d,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=ao(n,r.document),o=r.readTime?Wn(r.readTime):et.min(),a=Yt.newNoDocument(s,o),l=r.removedTargetIds||[];e=new Bs([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=ao(n,r.document),o=r.removedTargetIds||[];e=new Bs([],o,s,null)}else{if(!("filter"in t))return rt(11601,{Vt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new my(s,o),l=r.targetId;e=new ef(l,a)}}return e}function Sy(n,t){return{documents:[sf(n,t.path)]}}function Py(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=sf(n,s);const o=function(f){if(f.length!==0)return lf(Pe.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(d=>function(E){return{field:Un(E.field),direction:Dy(E.dir)}}(d))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=Uo(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{gt:e,parent:s}}function Vy(n){let t=by(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){wt(r===1,65062);const d=e.from[0];d.allDescendants?s=d.collectionId:t=t.child(d.collectionId)}let o=[];e.where&&(o=function(g){const E=af(g);return E instanceof Pe&&Uh(E)?E.getFilters():[E]}(e.where));let a=[];e.orderBy&&(a=function(g){return g.map(E=>function(O){return new Zs(jn(O.field),function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(E))}(e.orderBy));let l=null;e.limit&&(l=function(g){let E;return E=typeof g=="object"?g.value:g,mi(E)?null:E}(e.limit));let c=null;e.startAt&&(c=function(g){const E=!!g.before,R=g.values||[];return new Js(R,E)}(e.startAt));let f=null;return e.endAt&&(f=function(g){const E=!g.before,R=g.values||[];return new Js(R,E)}(e.endAt)),Y_(t,s,a,o,l,"F",c,f)}function xy(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return rt(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function af(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=jn(e.unaryFilter.field);return Nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=jn(e.unaryFilter.field);return Nt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=jn(e.unaryFilter.field);return Nt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=jn(e.unaryFilter.field);return Nt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return rt(61313);default:return rt(60726)}}(n):n.fieldFilter!==void 0?function(e){return Nt.create(jn(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return rt(58110);default:return rt(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Pe.create(e.compositeFilter.filters.map(r=>af(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return rt(1026)}}(e.compositeFilter.op))}(n):rt(30097,{filter:n})}function Dy(n){return vy[n]}function Ny(n){return Ey[n]}function Oy(n){return Ty[n]}function Un(n){return{fieldPath:n.canonicalString()}}function jn(n){return ne.fromServerFormat(n.fieldPath)}function lf(n){return n instanceof Nt?function(e){if(e.op==="=="){if(Ru(e.value))return{unaryFilter:{field:Un(e.field),op:"IS_NAN"}};if(bu(e.value))return{unaryFilter:{field:Un(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ru(e.value))return{unaryFilter:{field:Un(e.field),op:"IS_NOT_NAN"}};if(bu(e.value))return{unaryFilter:{field:Un(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Un(e.field),op:Ny(e.op),value:e.value}}}(n):n instanceof Pe?function(e){const r=e.getFilters().map(s=>lf(s));return r.length===1?r[0]:{compositeFilter:{op:Oy(e.op),filters:r}}}(n):rt(54877,{filter:n})}function uf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Xe{constructor(t,e,r,s,o=et.min(),a=et.min(),l=qt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(t){return new Xe(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Xe(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Xe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Xe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class My{constructor(t){this.wt=t}}function ky(n){const t=Vy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Lo(t,t.limit,"L"):t}/**
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
 */class Ly{constructor(){this.Cn=new Fy}addToCollectionParentIndex(t,e){return this.Cn.add(e),V.resolve()}getCollectionParents(t,e){return V.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return V.resolve()}deleteFieldIndex(t,e){return V.resolve()}deleteAllFieldIndexes(t){return V.resolve()}createTargetIndexes(t,e){return V.resolve()}getDocumentsMatchingTarget(t,e){return V.resolve(null)}getIndexType(t,e){return V.resolve(0)}getFieldIndexes(t,e){return V.resolve([])}getNextCollectionGroupToUpdate(t){return V.resolve(null)}getMinOffset(t,e){return V.resolve(sn.min())}getMinOffsetFromCollectionGroup(t,e){return V.resolve(sn.min())}updateCollectionGroup(t,e,r){return V.resolve()}updateIndexEntries(t,e){return V.resolve()}}class Fy{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new Ot(bt.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Ot(bt.comparator)).toArray()}}/**
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
 */const ju={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},cf=41943040;class ie{static withCacheSize(t){return new ie(t,ie.DEFAULT_COLLECTION_PERCENTILE,ie.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */ie.DEFAULT_COLLECTION_PERCENTILE=10,ie.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ie.DEFAULT=new ie(cf,ie.DEFAULT_COLLECTION_PERCENTILE,ie.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ie.DISABLED=new ie(-1,0,0);/**
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
 */class rr{constructor(t){this.ur=t}next(){return this.ur+=2,this.ur}static cr(){return new rr(0)}static lr(){return new rr(-1)}}/**
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
 */const $u="LruGarbageCollector",By=1048576;function qu([n,t],[e,r]){const s=ot(n,e);return s===0?ot(t,r):s}class Uy{constructor(t){this.Er=t,this.buffer=new Ot(qu),this.dr=0}Ar(){return++this.dr}Rr(t){const e=[t,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();qu(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class jy{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(t){H($u,`Garbage collection scheduled in ${t}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){lr(e)?H($u,"Ignoring IndexedDB error during garbage collection: ",e):await pi(e)}await this.mr(3e5)})}}class $y{constructor(t,e){this.gr=t,this.params=e}calculateTargetCount(t,e){return this.gr.pr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return V.resolve(gi.le);const r=new Uy(e);return this.gr.forEachTarget(t,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(t,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.gr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.gr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(ju)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ju):this.wr(t,e))}getCacheSize(t){return this.gr.getCacheSize(t)}wr(t,e){let r,s,o,a,l,c,f;const d=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(t,s))).next(g=>(r=g,l=Date.now(),this.removeTargets(t,r,e))).next(g=>(o=g,c=Date.now(),this.removeOrphanedDocuments(t,r))).next(g=>(f=Date.now(),Fn()<=ut.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${o} targets in `+(c-l)+`ms
	Removed ${g} documents in `+(f-c)+`ms
Total Duration: ${f-d}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:g})))}}function qy(n,t){return new $y(n,t)}/**
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
 */class Hy{constructor(){this.changes=new xn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Yt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?V.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class zy{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Ky{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&qr(r.mutation,s,Ye.empty(),oe.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,ht()).next(()=>r))}getLocalViewOfDocuments(t,e,r=ht()){const s=An();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=Vr();return o.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=An();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,ht()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,r,s){let o=un();const a=$r(),l=function(){return $r()}();return e.forEach((c,f)=>{const d=r.get(f.key);s.has(f.key)&&(d===void 0||d.mutation instanceof Ii)?o=o.insert(f.key,f):d!==void 0?(a.set(f.key,d.mutation.getFieldMask()),qr(d.mutation,f,d.mutation.getFieldMask(),oe.now())):a.set(f.key,Ye.empty())}),this.recalculateAndSaveOverlays(t,o).next(c=>(c.forEach((f,d)=>a.set(f,d)),e.forEach((f,d)=>{var g;return l.set(f,new zy(d,(g=a.get(f))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(t,e){const r=$r();let s=new St((a,l)=>a-l),o=ht();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(c=>{const f=e.get(c);if(f===null)return;let d=r.get(c)||Ye.empty();d=l.applyToLocalView(f,d),r.set(c,d);const g=(s.get(l.batchId)||ht()).add(c);s=s.insert(l.batchId,g)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),f=c.key,d=c.value,g=Wh();d.forEach(E=>{if(!o.has(E)){const R=Jh(e.get(E),r.get(E));R!==null&&g.set(E,R),o=o.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,g))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return tt.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):X_(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):V.resolve(An());let l=Xr,c=o;return a.next(f=>V.forEach(f,(d,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),o.get(d)?V.resolve():this.remoteDocumentCache.getEntry(t,d).next(E=>{c=c.insert(d,E)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,c,f,ht())).next(d=>({batchId:l,changes:ny(d)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new tt(e)).next(r=>{let s=Vr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=Vr();return this.indexManager.getCollectionParents(t,o).next(l=>V.forEach(l,c=>{const f=function(g,E){return new yi(E,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(e,c.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(d=>{d.forEach((g,E)=>{a=a.insert(g,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((c,f)=>{const d=f.getKey();a.get(d)===null&&(a=a.insert(d,Yt.newInvalidDocument(d)))});let l=Vr();return a.forEach((c,f)=>{const d=o.get(c);d!==void 0&&qr(d.mutation,f,Ye.empty(),oe.now()),Ei(e,f)&&(l=l.insert(c,f))}),l})}}/**
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
 */class Gy{constructor(t){this.serializer=t,this.kr=new Map,this.qr=new Map}getBundleMetadata(t,e){return V.resolve(this.kr.get(e))}saveBundleMetadata(t,e){return this.kr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Wn(s.createTime)}}(e)),V.resolve()}getNamedQuery(t,e){return V.resolve(this.qr.get(e))}saveNamedQuery(t,e){return this.qr.set(e.name,function(s){return{name:s.name,query:ky(s.bundledQuery),readTime:Wn(s.readTime)}}(e)),V.resolve()}}/**
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
 */class Wy{constructor(){this.overlays=new St(tt.comparator),this.Qr=new Map}getOverlay(t,e){return V.resolve(this.overlays.get(e))}getOverlays(t,e){const r=An();return V.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.St(t,e,o)}),V.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Qr.delete(r)),V.resolve()}getOverlaysForCollection(t,e,r){const s=An(),o=e.length+1,a=new tt(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,f=c.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&c.largestBatchId>r&&s.set(c.getKey(),c)}return V.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new St((f,d)=>f-d);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let d=o.get(f.largestBatchId);d===null&&(d=An(),o=o.insert(f.largestBatchId,d)),d.set(f.getKey(),f)}}const l=An(),c=o.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((f,d)=>l.set(f,d)),!(l.size()>=s)););return V.resolve(l)}St(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new gy(e,r));let o=this.Qr.get(e);o===void 0&&(o=ht(),this.Qr.set(e,o)),this.Qr.set(e,o.add(r.key))}}/**
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
 */class Qy{constructor(){this.sessionToken=qt.EMPTY_BYTE_STRING}getSessionToken(t){return V.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,V.resolve()}}/**
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
 */class Ca{constructor(){this.$r=new Ot(Mt.Ur),this.Kr=new Ot(Mt.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(t,e){const r=new Mt(t,e);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.zr(new Mt(t,e))}jr(t,e){t.forEach(r=>this.removeReference(r,e))}Hr(t){const e=new tt(new bt([])),r=new Mt(e,t),s=new Mt(e,t+1),o=[];return this.Kr.forEachInRange([r,s],a=>{this.zr(a),o.push(a.key)}),o}Jr(){this.$r.forEach(t=>this.zr(t))}zr(t){this.$r=this.$r.delete(t),this.Kr=this.Kr.delete(t)}Yr(t){const e=new tt(new bt([])),r=new Mt(e,t),s=new Mt(e,t+1);let o=ht();return this.Kr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new Mt(t,0),r=this.$r.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class Mt{constructor(t,e){this.key=t,this.Zr=e}static Ur(t,e){return tt.comparator(t.key,e.key)||ot(t.Zr,e.Zr)}static Wr(t,e){return ot(t.Zr,e.Zr)||tt.comparator(t.key,e.key)}}/**
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
 */class Yy{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.nr=1,this.Xr=new Ot(Mt.Ur)}checkEmpty(t){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new py(o,e,r,s);this.mutationQueue.push(a);for(const l of s)this.Xr=this.Xr.add(new Mt(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return V.resolve(a)}lookupMutationBatch(t,e){return V.resolve(this.ei(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.ti(r),o=s<0?0:s;return V.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?P_:this.nr-1)}getAllMutationBatches(t){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new Mt(e,0),s=new Mt(e,Number.POSITIVE_INFINITY),o=[];return this.Xr.forEachInRange([r,s],a=>{const l=this.ei(a.Zr);o.push(l)}),V.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Ot(ot);return e.forEach(s=>{const o=new Mt(s,0),a=new Mt(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([o,a],l=>{r=r.add(l.Zr)})}),V.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;tt.isDocumentKey(o)||(o=o.child(""));const a=new Mt(new tt(o),0);let l=new Ot(ot);return this.Xr.forEachWhile(c=>{const f=c.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(l=l.add(c.Zr)),!0)},a),V.resolve(this.ni(l))}ni(t){const e=[];return t.forEach(r=>{const s=this.ei(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){wt(this.ri(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return V.forEach(e.mutations,s=>{const o=new Mt(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Xr=r})}sr(t){}containsKey(t,e){const r=new Mt(e,0),s=this.Xr.firstAfterOrEqual(r);return V.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,V.resolve()}ri(t,e){return this.ti(t)}ti(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ei(t){const e=this.ti(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Xy{constructor(t){this.ii=t,this.docs=function(){return new St(tt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.ii(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return V.resolve(r?r.document.mutableCopy():Yt.newInvalidDocument(e))}getEntries(t,e){let r=un();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Yt.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=un();const a=e.path,l=new tt(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:f,value:{document:d}}=c.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||C_(A_(d),r)<=0||(s.has(d.key)||Ei(e,d))&&(o=o.insert(d.key,d.mutableCopy()))}return V.resolve(o)}getAllFromCollectionGroup(t,e,r,s){rt(9500)}si(t,e){return V.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Jy(this)}getSize(t){return V.resolve(this.size)}}class Jy extends Hy{constructor(t){super(),this.Br=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Br.addEntry(t,s)):this.Br.removeEntry(r)}),V.waitFor(e)}getFromCache(t,e){return this.Br.getEntry(t,e)}getAllFromCache(t,e){return this.Br.getEntries(t,e)}}/**
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
 */class Zy{constructor(t){this.persistence=t,this.oi=new xn(e=>Ea(e),Ta),this.lastRemoteSnapshotVersion=et.min(),this.highestTargetId=0,this._i=0,this.ai=new Ca,this.targetCount=0,this.ui=rr.cr()}forEachTarget(t,e){return this.oi.forEach((r,s)=>e(s)),V.resolve()}getLastRemoteSnapshotVersion(t){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return V.resolve(this._i)}allocateTargetId(t){return this.highestTargetId=this.ui.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this._i&&(this._i=e),V.resolve()}Tr(t){this.oi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ui=new rr(e),this.highestTargetId=e),t.sequenceNumber>this._i&&(this._i=t.sequenceNumber)}addTargetData(t,e){return this.Tr(e),this.targetCount+=1,V.resolve()}updateTargetData(t,e){return this.Tr(e),V.resolve()}removeTargetData(t,e){return this.oi.delete(e.target),this.ai.Hr(e.targetId),this.targetCount-=1,V.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.oi.forEach((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.oi.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),V.waitFor(o).next(()=>s)}getTargetCount(t){return V.resolve(this.targetCount)}getTargetData(t,e){const r=this.oi.get(e)||null;return V.resolve(r)}addMatchingKeys(t,e,r){return this.ai.Gr(e,r),V.resolve()}removeMatchingKeys(t,e,r){this.ai.jr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),V.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.ai.Hr(e),V.resolve()}getMatchingKeysForTargetId(t,e){const r=this.ai.Yr(e);return V.resolve(r)}containsKey(t,e){return V.resolve(this.ai.containsKey(e))}}/**
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
 */class hf{constructor(t,e){this.ci={},this.overlays={},this.li=new gi(0),this.hi=!1,this.hi=!0,this.Pi=new Qy,this.referenceDelegate=t(this),this.Ti=new Zy(this),this.indexManager=new Ly,this.remoteDocumentCache=function(s){return new Xy(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new My(e),this.Ei=new Gy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Wy,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ci[t.toKey()];return r||(r=new Yy(e,this.referenceDelegate),this.ci[t.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(t,e,r){H("MemoryPersistence","Starting transaction:",t);const s=new tv(this.li.next());return this.referenceDelegate.di(),r(s).next(o=>this.referenceDelegate.Ai(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Ri(t,e){return V.or(Object.values(this.ci).map(r=>()=>r.containsKey(t,e)))}}class tv extends R_{constructor(t){super(),this.currentSequenceNumber=t}}class ba{constructor(t){this.persistence=t,this.Vi=new Ca,this.mi=null}static fi(t){return new ba(t)}get gi(){if(this.mi)return this.mi;throw rt(60996)}addReference(t,e,r){return this.Vi.addReference(r,e),this.gi.delete(r.toString()),V.resolve()}removeReference(t,e,r){return this.Vi.removeReference(r,e),this.gi.add(r.toString()),V.resolve()}markPotentiallyOrphaned(t,e){return this.gi.add(e.toString()),V.resolve()}removeTarget(t,e){this.Vi.Hr(e.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.gi.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}di(){this.mi=new Set}Ai(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.gi,r=>{const s=tt.fromPath(r);return this.pi(t,s).next(o=>{o||e.removeEntry(s,et.min())})}).next(()=>(this.mi=null,e.apply(t)))}updateLimboDocument(t,e){return this.pi(t,e).next(r=>{r?this.gi.delete(e.toString()):this.gi.add(e.toString())})}Ii(t){return 0}pi(t,e){return V.or([()=>V.resolve(this.Vi.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ri(t,e)])}}class ni{constructor(t,e){this.persistence=t,this.yi=new xn(r=>V_(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=qy(this,e)}static fi(t,e){return new ni(t,e)}di(){}Ai(t){return V.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}pr(t){const e=this.br(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}br(t){let e=0;return this.yr(t,r=>{e++}).next(()=>e)}yr(t,e){return V.forEach(this.yi,(r,s)=>this.Dr(t,r,s).next(o=>o?V.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.si(t,a=>this.Dr(t,a,e).next(l=>{l||(r++,o.removeEntry(a,et.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.yi.set(e,t.currentSequenceNumber),V.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.yi.set(r,t.currentSequenceNumber),V.resolve()}removeReference(t,e,r){return this.yi.set(r,t.currentSequenceNumber),V.resolve()}updateLimboDocument(t,e){return this.yi.set(e,t.currentSequenceNumber),V.resolve()}Ii(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Ls(t.data.value)),e}Dr(t,e,r){return V.or([()=>this.persistence.Ri(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.yi.get(e);return V.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Ra{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.ds=r,this.As=s}static Rs(t,e){let r=ht(),s=ht();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Ra(t,e.fromCache,r,s)}}/**
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
 */class ev{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class nv{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return Kg()?8:S_(Hg())>0?6:4}()}initialize(t,e){this.ys=t,this.indexManager=e,this.Vs=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ws(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.bs(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new ev;return this.Ss(t,e,a).next(l=>{if(o.result=l,this.fs)return this.Ds(t,e,a,l.size)})}).next(()=>o.result)}Ds(t,e,r,s){return r.documentReadCount<this.gs?(Fn()<=ut.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Bn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),V.resolve()):(Fn()<=ut.DEBUG&&H("QueryEngine","Query:",Bn(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(Fn()<=ut.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Bn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,be(e))):V.resolve())}ws(t,e){if(xu(e))return V.resolve(null);let r=be(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Lo(e,null,"F"),r=be(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=ht(...o);return this.ys.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(c=>{const f=this.vs(e,l);return this.Cs(e,f,a,c.readTime)?this.ws(t,Lo(e,null,"F")):this.Fs(t,f,e,c)}))})))}bs(t,e,r,s){return xu(e)||s.isEqual(et.min())?V.resolve(null):this.ys.getDocuments(t,r).next(o=>{const a=this.vs(e,o);return this.Cs(e,a,r,s)?V.resolve(null):(Fn()<=ut.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Bn(e)),this.Fs(t,a,e,w_(s,Xr)).next(l=>l))})}vs(t,e){let r=new Ot(Kh(t));return e.forEach((s,o)=>{Ei(t,o)&&(r=r.add(o))}),r}Cs(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ss(t,e,r){return Fn()<=ut.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Bn(e)),this.ys.getDocumentsMatchingQuery(t,e,sn.min(),r)}Fs(t,e,r,s){return this.ys.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */const Sa="LocalStore",rv=3e8;class sv{constructor(t,e,r,s){this.persistence=t,this.Ms=e,this.serializer=s,this.xs=new St(ot),this.Os=new xn(o=>Ea(o),Ta),this.Ns=new Map,this.Bs=t.getRemoteDocumentCache(),this.Ti=t.getTargetCache(),this.Ei=t.getBundleCache(),this.Ls(r)}Ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ky(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.xs))}}function iv(n,t,e,r){return new sv(n,t,e,r)}async function ff(n,t){const e=ct(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.Ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let c=ht();for(const f of s){a.push(f.batchId);for(const d of f.mutations)c=c.add(d.key)}for(const f of o){l.push(f.batchId);for(const d of f.mutations)c=c.add(d.key)}return e.localDocuments.getDocuments(r,c).next(f=>({ks:f,removedBatchIds:a,addedBatchIds:l}))})})}function df(n){const t=ct(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ti.getLastRemoteSnapshotVersion(e))}function ov(n,t){const e=ct(n),r=t.snapshotVersion;let s=e.xs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.Bs.newChangeBuffer({trackRemovals:!0});s=e.xs;const l=[];t.targetChanges.forEach((d,g)=>{const E=s.get(g);if(!E)return;l.push(e.Ti.removeMatchingKeys(o,d.removedDocuments,g).next(()=>e.Ti.addMatchingKeys(o,d.addedDocuments,g)));let R=E.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(g)!==null?R=R.withResumeToken(qt.EMPTY_BYTE_STRING,et.min()).withLastLimboFreeSnapshotVersion(et.min()):d.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(d.resumeToken,r)),s=s.insert(g,R),function(B,U,Q){return B.resumeToken.approximateByteSize()===0||U.snapshotVersion.toMicroseconds()-B.snapshotVersion.toMicroseconds()>=rv?!0:Q.addedDocuments.size+Q.modifiedDocuments.size+Q.removedDocuments.size>0}(E,R,d)&&l.push(e.Ti.updateTargetData(o,R))});let c=un(),f=ht();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,d))}),l.push(av(o,a,t.documentUpdates).next(d=>{c=d.qs,f=d.Qs})),!r.isEqual(et.min())){const d=e.Ti.getLastRemoteSnapshotVersion(o).next(g=>e.Ti.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(d)}return V.waitFor(l).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,c,f)).next(()=>c)}).then(o=>(e.xs=s,o))}function av(n,t,e){let r=ht(),s=ht();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=un();return e.forEach((l,c)=>{const f=o.get(l);c.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(et.min())?(t.removeEntry(l,c.readTime),a=a.insert(l,c)):!f.isValidDocument()||c.version.compareTo(f.version)>0||c.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(c),a=a.insert(l,c)):H(Sa,"Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",c.version)}),{qs:a,Qs:s}})}function lv(n,t){const e=ct(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Ti.getTargetData(r,t).next(o=>o?(s=o,V.resolve(s)):e.Ti.allocateTargetId(r).next(a=>(s=new Xe(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ti.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.xs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.xs=e.xs.insert(r.targetId,r),e.Os.set(t,r.targetId)),r})}async function $o(n,t,e){const r=ct(n),s=r.xs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!lr(a))throw a;H(Sa,`Failed to update sequence numbers for target ${t}: ${a}`)}r.xs=r.xs.remove(t),r.Os.delete(s.target)}function Hu(n,t,e){const r=ct(n);let s=et.min(),o=ht();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,f,d){const g=ct(c),E=g.Os.get(d);return E!==void 0?V.resolve(g.xs.get(E)):g.Ti.getTargetData(f,d)}(r,a,be(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(a,l.targetId).next(c=>{o=c})}).next(()=>r.Ms.getDocumentsMatchingQuery(a,t,e?s:et.min(),e?o:ht())).next(l=>(uv(r,Z_(t),l),{documents:l,$s:o})))}function uv(n,t,e){let r=n.Ns.get(t)||et.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Ns.set(t,r)}class zu{constructor(){this.activeTargetIds=iy()}js(t){this.activeTargetIds=this.activeTargetIds.add(t)}Hs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}zs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class cv{constructor(){this.xo=new zu,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.xo.js(t),this.Oo[t]||"not-current"}updateQueryState(t,e,r){this.Oo[t]=e}removeLocalQueryTarget(t){this.xo.Hs(t)}isLocalQueryTarget(t){return this.xo.activeTargetIds.has(t)}clearQueryState(t){delete this.Oo[t]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(t){return this.xo.activeTargetIds.has(t)}start(){return this.xo=new zu,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class hv{No(t){}shutdown(){}}/**
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
 */const Ku="ConnectivityMonitor";class Gu{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(t){this.Qo.push(t)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){H(Ku,"Network connectivity changed: AVAILABLE");for(const t of this.Qo)t(0)}qo(){H(Ku,"Network connectivity changed: UNAVAILABLE");for(const t of this.Qo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let xs=null;function qo(){return xs===null?xs=function(){return 268435456+Math.round(2147483648*Math.random())}():xs++,"0x"+xs.toString(16)}/**
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
 */const lo="RestConnection",fv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class dv{get Uo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=e+"://"+t.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===Xs?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(t,e,r,s,o){const a=qo(),l=this.jo(t,e.toUriEncodedString());H(lo,`Sending RPC '${t}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(c,s,o);const{host:f}=new URL(l),d=ga(f);return this.Jo(t,l,c,r,d).then(g=>(H(lo,`Received RPC '${t}' ${a}: `,g),g),g=>{throw Zn(lo,`RPC '${t}' ${a} failed with error: `,g,"url: ",l,"request:",r),g})}Yo(t,e,r,s,o,a){return this.zo(t,e,r,s,o)}Ho(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ar}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}jo(t,e){const r=fv[t];return`${this.Ko}/v1/${e}:${r}`}terminate(){}}/**
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
 */class pv{constructor(t){this.Zo=t.Zo,this.Xo=t.Xo}e_(t){this.t_=t}n_(t){this.r_=t}i_(t){this.s_=t}onMessage(t){this.o_=t}close(){this.Xo()}send(t){this.Zo(t)}__(){this.t_()}a_(){this.r_()}u_(t){this.s_(t)}c_(t){this.o_(t)}}/**
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
 */const Gt="WebChannelConnection";class gv extends dv{constructor(t){super(t),this.l_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,s,o){const a=qo();return new Promise((l,c)=>{const f=new Ah;f.setWithCredentials(!0),f.listenOnce(Ch.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case ks.NO_ERROR:const g=f.getResponseJson();H(Gt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(g)),l(g);break;case ks.TIMEOUT:H(Gt,`RPC '${t}' ${a} timed out`),c(new J($.DEADLINE_EXCEEDED,"Request time out"));break;case ks.HTTP_ERROR:const E=f.getStatus();if(H(Gt,`RPC '${t}' ${a} failed with status:`,E,"response text:",f.getResponseText()),E>0){let R=f.getResponseJson();Array.isArray(R)&&(R=R[0]);const O=R?.error;if(O&&O.status&&O.message){const B=function(Q){const W=Q.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(W)>=0?W:$.UNKNOWN}(O.status);c(new J(B,O.message))}else c(new J($.UNKNOWN,"Server responded with status "+f.getStatus()))}else c(new J($.UNAVAILABLE,"Connection failed."));break;default:rt(9055,{h_:t,streamId:a,P_:f.getLastErrorCode(),T_:f.getLastError()})}}finally{H(Gt,`RPC '${t}' ${a} completed.`)}});const d=JSON.stringify(s);H(Gt,`RPC '${t}' ${a} sending request:`,s),f.send(e,"POST",d,r,15)})}I_(t,e,r){const s=qo(),o=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Sh(),l=Rh(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(c.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Ho(c.initMessageHeaders,e,r),c.encodeInitMessageHeaders=!0;const d=o.join("");H(Gt,`Creating RPC '${t}' stream ${s}: ${d}`,c);const g=a.createWebChannel(d,c);this.E_(g);let E=!1,R=!1;const O=new pv({Zo:U=>{R?H(Gt,`Not sending because RPC '${t}' stream ${s} is closed:`,U):(E||(H(Gt,`Opening RPC '${t}' stream ${s} transport.`),g.open(),E=!0),H(Gt,`RPC '${t}' stream ${s} sending:`,U),g.send(U))},Xo:()=>g.close()}),B=(U,Q,W)=>{U.listen(Q,Y=>{try{W(Y)}catch(z){setTimeout(()=>{throw z},0)}})};return B(g,Pr.EventType.OPEN,()=>{R||(H(Gt,`RPC '${t}' stream ${s} transport opened.`),O.__())}),B(g,Pr.EventType.CLOSE,()=>{R||(R=!0,H(Gt,`RPC '${t}' stream ${s} transport closed`),O.u_(),this.d_(g))}),B(g,Pr.EventType.ERROR,U=>{R||(R=!0,Zn(Gt,`RPC '${t}' stream ${s} transport errored. Name:`,U.name,"Message:",U.message),O.u_(new J($.UNAVAILABLE,"The operation could not be completed")))}),B(g,Pr.EventType.MESSAGE,U=>{var Q;if(!R){const W=U.data[0];wt(!!W,16349);const Y=W,z=Y?.error||((Q=Y[0])===null||Q===void 0?void 0:Q.error);if(z){H(Gt,`RPC '${t}' stream ${s} received error:`,z);const mt=z.status;let vt=function(v){const I=Pt[v];if(I!==void 0)return tf(I)}(mt),w=z.message;vt===void 0&&(vt=$.INTERNAL,w="Unknown error status: "+mt+" with message "+z.message),R=!0,O.u_(new J(vt,w)),g.close()}else H(Gt,`RPC '${t}' stream ${s} received:`,W),O.c_(W)}}),B(l,bh.STAT_EVENT,U=>{U.stat===Po.PROXY?H(Gt,`RPC '${t}' stream ${s} detected buffering proxy`):U.stat===Po.NOPROXY&&H(Gt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{O.a_()},0),O}terminate(){this.l_.forEach(t=>t.close()),this.l_=[]}E_(t){this.l_.push(t)}d_(t){this.l_=this.l_.filter(e=>e===t)}}function uo(){return typeof document<"u"?document:null}/**
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
 */function pf(n){return new Iy(n,!0)}/**
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
 */class gf{constructor(t,e,r=1e3,s=1.5,o=6e4){this.xi=t,this.timerId=e,this.A_=r,this.R_=s,this.V_=o,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(t){this.cancel();const e=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),s=Math.max(0,e-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.m_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.g_=Date.now(),t())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
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
 */const Wu="PersistentStream";class mv{constructor(t,e,r,s,o,a,l,c){this.xi=t,this.S_=r,this.D_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new gf(t,e)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(t){this.U_(),this.stream.send(t)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(t,e){this.U_(),this.K_(),this.x_.cancel(),this.v_++,t!==4?this.x_.reset():e&&e.code===$.RESOURCE_EXHAUSTED?(Ue(e.toString()),Ue("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):e&&e.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.i_(e)}W_(){}auth(){this.state=1;const t=this.G_(this.v_),e=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.v_===e&&this.z_(r,s)},r=>{t(()=>{const s=new J($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.j_(s)})})}z_(t,e){const r=this.G_(this.v_);this.stream=this.H_(t,e),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.j_(s))}),this.stream.onMessage(s=>{r(()=>++this.M_==1?this.J_(s):this.onNext(s))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(t){return H(Wu,`close with error: ${t}`),this.stream=null,this.close(4,t)}G_(t){return e=>{this.xi.enqueueAndForget(()=>this.v_===t?e():(H(Wu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _v extends mv{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}H_(t,e){return this.connection.I_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.x_.reset();const e=Ry(this.serializer,t),r=function(o){if(!("targetChange"in o))return et.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?et.min():a.readTime?Wn(a.readTime):et.min()}(t);return this.listener.Y_(e,r)}Z_(t){const e={};e.database=Uu(this.serializer),e.addTarget=function(o,a){let l;const c=a.target;if(l=ko(c)?{documents:Sy(o,c)}:{query:Py(o,c).gt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Ay(o,a.resumeToken);const f=Uo(o,a.expectedCount);f!==null&&(l.expectedCount=f)}else if(a.snapshotVersion.compareTo(et.min())>0){l.readTime=wy(o,a.snapshotVersion.toTimestamp());const f=Uo(o,a.expectedCount);f!==null&&(l.expectedCount=f)}return l}(this.serializer,t);const r=xy(this.serializer,t);r&&(e.labels=r),this.Q_(e)}X_(t){const e={};e.database=Uu(this.serializer),e.removeTarget=t,this.Q_(e)}}/**
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
 */class yv{}class vv extends yv{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.sa=!1}oa(){if(this.sa)throw new J($.FAILED_PRECONDITION,"The client has already been terminated.")}zo(t,e,r,s){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.zo(t,jo(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new J($.UNKNOWN,o.toString())})}Yo(t,e,r,s,o){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Yo(t,jo(e,r),s,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new J($.UNKNOWN,a.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class Ev{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(t){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.la("Offline")))}set(t){this.Ta(),this._a=0,t==="Online"&&(this.ua=!1),this.la(t)}la(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ha(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(Ue(e),this.ua=!1):H("OnlineStateTracker",e)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
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
 */const sr="RemoteStore";class Tv{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=o,this.Ra.No(a=>{r.enqueueAndForget(async()=>{os(this)&&(H(sr,"Restarting streams for network reachability change."),await async function(c){const f=ct(c);f.da.add(4),await is(f),f.Va.set("Unknown"),f.da.delete(4),await Ai(f)}(this))})}),this.Va=new Ev(r,s)}}async function Ai(n){if(os(n))for(const t of n.Aa)await t(!0)}async function is(n){for(const t of n.Aa)await t(!1)}function mf(n,t){const e=ct(n);e.Ea.has(t.targetId)||(e.Ea.set(t.targetId,t),Da(e)?xa(e):ur(e).N_()&&Va(e,t))}function Pa(n,t){const e=ct(n),r=ur(e);e.Ea.delete(t),r.N_()&&_f(e,t),e.Ea.size===0&&(r.N_()?r.k_():os(e)&&e.Va.set("Unknown"))}function Va(n,t){if(n.ma.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(et.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}ur(n).Z_(t)}function _f(n,t){n.ma.Ke(t),ur(n).X_(t)}function xa(n){n.ma=new yy({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>n.Ea.get(t)||null,Pt:()=>n.datastore.serializer.databaseId}),ur(n).start(),n.Va.ca()}function Da(n){return os(n)&&!ur(n).O_()&&n.Ea.size>0}function os(n){return ct(n).da.size===0}function yf(n){n.ma=void 0}async function Iv(n){n.Va.set("Online")}async function wv(n){n.Ea.forEach((t,e)=>{Va(n,t)})}async function Av(n,t){yf(n),Da(n)?(n.Va.Pa(t),xa(n)):n.Va.set("Unknown")}async function Cv(n,t,e){if(n.Va.set("Online"),t instanceof nf&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const l of o.targetIds)s.Ea.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ea.delete(l),s.ma.removeTarget(l))}(n,t)}catch(r){H(sr,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Qu(n,r)}else if(t instanceof Bs?n.ma.Xe(t):t instanceof ef?n.ma.ot(t):n.ma.nt(t),!e.isEqual(et.min()))try{const r=await df(n.localStore);e.compareTo(r)>=0&&await function(o,a){const l=o.ma.It(a);return l.targetChanges.forEach((c,f)=>{if(c.resumeToken.approximateByteSize()>0){const d=o.Ea.get(f);d&&o.Ea.set(f,d.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,f)=>{const d=o.Ea.get(c);if(!d)return;o.Ea.set(c,d.withResumeToken(qt.EMPTY_BYTE_STRING,d.snapshotVersion)),_f(o,c);const g=new Xe(d.target,c,f,d.sequenceNumber);Va(o,g)}),o.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(r){H(sr,"Failed to raise snapshot:",r),await Qu(n,r)}}async function Qu(n,t,e){if(!lr(t))throw t;n.da.add(1),await is(n),n.Va.set("Offline"),e||(e=()=>df(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{H(sr,"Retrying IndexedDB access"),await e(),n.da.delete(1),await Ai(n)})}async function Yu(n,t){const e=ct(n);e.asyncQueue.verifyOperationInProgress(),H(sr,"RemoteStore received new credentials");const r=os(e);e.da.add(3),await is(e),r&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.da.delete(3),await Ai(e)}async function bv(n,t){const e=ct(n);t?(e.da.delete(2),await Ai(e)):t||(e.da.add(2),await is(e),e.Va.set("Unknown"))}function ur(n){return n.fa||(n.fa=function(e,r,s){const o=ct(e);return o.oa(),new _v(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{e_:Iv.bind(null,n),n_:wv.bind(null,n),i_:Av.bind(null,n),Y_:Cv.bind(null,n)}),n.Aa.push(async t=>{t?(n.fa.L_(),Da(n)?xa(n):n.Va.set("Unknown")):(await n.fa.stop(),yf(n))})),n.fa}/**
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
 */class Na{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Rn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,l=new Na(t,e,a,s,o);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J($.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vf(n,t){if(Ue("AsyncQueue",`${t}: ${n}`),lr(n))return new J($.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class Qn{static emptySet(t){return new Qn(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||tt.comparator(e.key,r.key):(e,r)=>tt.comparator(e.key,r.key),this.keyedMap=Vr(),this.sortedSet=new St(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Qn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Qn;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class Xu{constructor(){this.pa=new St(tt.comparator)}track(t){const e=t.doc.key,r=this.pa.get(e);r?t.type!==0&&r.type===3?this.pa=this.pa.insert(e,t):t.type===3&&r.type!==1?this.pa=this.pa.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.pa=this.pa.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.pa=this.pa.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.pa=this.pa.remove(e):t.type===1&&r.type===2?this.pa=this.pa.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.pa=this.pa.insert(e,{type:2,doc:t.doc}):rt(63341,{Vt:t,ya:r}):this.pa=this.pa.insert(e,t)}wa(){const t=[];return this.pa.inorderTraversal((e,r)=>{t.push(r)}),t}}class ir{constructor(t,e,r,s,o,a,l,c,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new ir(t,e,Qn.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&vi(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Rv{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(t=>t.va())}}class Sv{constructor(){this.queries=Ju(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const s=ct(e),o=s.queries;s.queries=Ju(),o.forEach((a,l)=>{for(const c of l.Sa)c.onError(r)})})(this,new J($.ABORTED,"Firestore shutting down"))}}function Ju(){return new xn(n=>zh(n),vi)}async function Pv(n,t){const e=ct(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.Da()&&t.va()&&(r=2):(o=new Rv,r=t.va()?0:1);try{switch(r){case 0:o.ba=await e.onListen(s,!0);break;case 1:o.ba=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const l=vf(a,`Initialization of query '${Bn(t.query)}' failed`);return void t.onError(l)}e.queries.set(s,o),o.Sa.push(t),t.Fa(e.onlineState),o.ba&&t.Ma(o.ba)&&Oa(e)}async function Vv(n,t){const e=ct(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.Sa.indexOf(t);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?s=t.va()?0:1:!o.Da()&&t.va()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function xv(n,t){const e=ct(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const l of a.Sa)l.Ma(s)&&(r=!0);a.ba=s}}r&&Oa(e)}function Dv(n,t,e){const r=ct(n),s=r.queries.get(t);if(s)for(const o of s.Sa)o.onError(e);r.queries.delete(t)}function Oa(n){n.Ca.forEach(t=>{t.next()})}var Ho,Zu;(Zu=Ho||(Ho={})).xa="default",Zu.Cache="cache";class Nv{constructor(t,e,r){this.query=t,this.Oa=e,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=r||{}}Ma(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new ir(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Na?this.La(t)&&(this.Oa.next(t),e=!0):this.ka(t,this.onlineState)&&(this.qa(t),e=!0),this.Ba=t,e}onError(t){this.Oa.error(t)}Fa(t){this.onlineState=t;let e=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,t)&&(this.qa(this.Ba),e=!0),e}ka(t,e){if(!t.fromCache||!this.va())return!0;const r=e!=="Offline";return(!this.options.Qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}La(t){if(t.docChanges.length>0)return!0;const e=this.Ba&&this.Ba.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}qa(t){t=ir.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Na=!0,this.Oa.next(t)}va(){return this.options.source!==Ho.Cache}}/**
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
 */class Ef{constructor(t){this.key=t}}class Tf{constructor(t){this.key=t}}class Ov{constructor(t,e){this.query=t,this.Ha=e,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ht(),this.mutatedKeys=ht(),this.Za=Kh(t),this.Xa=new Qn(this.Za)}get eu(){return this.Ha}tu(t,e){const r=e?e.nu:new Xu,s=e?e.Xa:this.Xa;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((d,g)=>{const E=s.get(d),R=Ei(this.query,g)?g:null,O=!!E&&this.mutatedKeys.has(E.key),B=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let U=!1;E&&R?E.data.isEqual(R.data)?O!==B&&(r.track({type:3,doc:R}),U=!0):this.ru(E,R)||(r.track({type:2,doc:R}),U=!0,(c&&this.Za(R,c)>0||f&&this.Za(R,f)<0)&&(l=!0)):!E&&R?(r.track({type:0,doc:R}),U=!0):E&&!R&&(r.track({type:1,doc:E}),U=!0,(c||f)&&(l=!0)),U&&(R?(a=a.add(R),o=B?o.add(d):o.delete(d)):(a=a.delete(d),o=o.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),o=o.delete(d.key),r.track({type:1,doc:d})}return{Xa:a,nu:r,Cs:l,mutatedKeys:o}}ru(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Xa;this.Xa=t.Xa,this.mutatedKeys=t.mutatedKeys;const a=t.nu.wa();a.sort((d,g)=>function(R,O){const B=U=>{switch(U){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return rt(20277,{Vt:U})}};return B(R)-B(O)}(d.type,g.type)||this.Za(d.doc,g.doc)),this.iu(r),s=s!=null&&s;const l=e&&!s?this.su():[],c=this.Ya.size===0&&this.current&&!s?1:0,f=c!==this.Ja;return this.Ja=c,a.length!==0||f?{snapshot:new ir(this.query,t.Xa,o,a,t.mutatedKeys,c===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),ou:l}:{ou:l}}Fa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new Xu,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(t){return!this.Ha.has(t)&&!!this.Xa.has(t)&&!this.Xa.get(t).hasLocalMutations}iu(t){t&&(t.addedDocuments.forEach(e=>this.Ha=this.Ha.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ha=this.Ha.delete(e)),this.current=t.current)}su(){if(!this.current)return[];const t=this.Ya;this.Ya=ht(),this.Xa.forEach(r=>{this._u(r.key)&&(this.Ya=this.Ya.add(r.key))});const e=[];return t.forEach(r=>{this.Ya.has(r)||e.push(new Tf(r))}),this.Ya.forEach(r=>{t.has(r)||e.push(new Ef(r))}),e}au(t){this.Ha=t.$s,this.Ya=ht();const e=this.tu(t.documents);return this.applyChanges(e,!0)}uu(){return ir.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const Ma="SyncEngine";class Mv{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class kv{constructor(t){this.key=t,this.cu=!1}}class Lv{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.lu={},this.hu=new xn(l=>zh(l),vi),this.Pu=new Map,this.Tu=new Set,this.Iu=new St(tt.comparator),this.Eu=new Map,this.du=new Ca,this.Au={},this.Ru=new Map,this.Vu=rr.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function Fv(n,t,e=!0){const r=bf(n);let s;const o=r.hu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.uu()):s=await If(r,t,e,!0),s}async function Bv(n,t){const e=bf(n);await If(e,t,!0,!1)}async function If(n,t,e,r){const s=await lv(n.localStore,be(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let l;return r&&(l=await Uv(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&mf(n.remoteStore,s),l}async function Uv(n,t,e,r,s){n.fu=(g,E,R)=>async function(B,U,Q,W){let Y=U.view.tu(Q);Y.Cs&&(Y=await Hu(B.localStore,U.query,!1).then(({documents:w})=>U.view.tu(w,Y)));const z=W&&W.targetChanges.get(U.targetId),mt=W&&W.targetMismatches.get(U.targetId)!=null,vt=U.view.applyChanges(Y,B.isPrimaryClient,z,mt);return ec(B,U.targetId,vt.ou),vt.snapshot}(n,g,E,R);const o=await Hu(n.localStore,t,!0),a=new Ov(t,o.$s),l=a.tu(o.documents),c=ss.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),f=a.applyChanges(l,n.isPrimaryClient,c);ec(n,e,f.ou);const d=new Mv(t,e,a);return n.hu.set(t,d),n.Pu.has(e)?n.Pu.get(e).push(t):n.Pu.set(e,[t]),f.snapshot}async function jv(n,t,e){const r=ct(n),s=r.hu.get(t),o=r.Pu.get(s.targetId);if(o.length>1)return r.Pu.set(s.targetId,o.filter(a=>!vi(a,t))),void r.hu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await $o(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Pa(r.remoteStore,s.targetId),zo(r,s.targetId)}).catch(pi)):(zo(r,s.targetId),await $o(r.localStore,s.targetId,!0))}async function $v(n,t){const e=ct(n),r=e.hu.get(t),s=e.Pu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Pa(e.remoteStore,r.targetId))}async function wf(n,t){const e=ct(n);try{const r=await ov(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Eu.get(o);a&&(wt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.cu=!0:s.modifiedDocuments.size>0?wt(a.cu,14607):s.removedDocuments.size>0&&(wt(a.cu,42227),a.cu=!1))}),await Cf(e,r,t)}catch(r){await pi(r)}}function tc(n,t,e){const r=ct(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.hu.forEach((o,a)=>{const l=a.view.Fa(t);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=ct(a);c.onlineState=l;let f=!1;c.queries.forEach((d,g)=>{for(const E of g.Sa)E.Fa(l)&&(f=!0)}),f&&Oa(c)}(r.eventManager,t),s.length&&r.lu.Y_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function qv(n,t,e){const r=ct(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Eu.get(t),o=s&&s.key;if(o){let a=new St(tt.comparator);a=a.insert(o,Yt.newNoDocument(o,et.min()));const l=ht().add(o),c=new wi(et.min(),new Map,new St(ot),a,l);await wf(r,c),r.Iu=r.Iu.remove(o),r.Eu.delete(t),ka(r)}else await $o(r.localStore,t,!1).then(()=>zo(r,t,e)).catch(pi)}function zo(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Pu.get(t))n.hu.delete(r),e&&n.lu.gu(r,e);n.Pu.delete(t),n.isPrimaryClient&&n.du.Hr(t).forEach(r=>{n.du.containsKey(r)||Af(n,r)})}function Af(n,t){n.Tu.delete(t.path.canonicalString());const e=n.Iu.get(t);e!==null&&(Pa(n.remoteStore,e),n.Iu=n.Iu.remove(t),n.Eu.delete(e),ka(n))}function ec(n,t,e){for(const r of e)r instanceof Ef?(n.du.addReference(r.key,t),Hv(n,r)):r instanceof Tf?(H(Ma,"Document no longer in limbo: "+r.key),n.du.removeReference(r.key,t),n.du.containsKey(r.key)||Af(n,r.key)):rt(19791,{pu:r})}function Hv(n,t){const e=t.key,r=e.path.canonicalString();n.Iu.get(e)||n.Tu.has(r)||(H(Ma,"New document in limbo: "+e),n.Tu.add(r),ka(n))}function ka(n){for(;n.Tu.size>0&&n.Iu.size<n.maxConcurrentLimboResolutions;){const t=n.Tu.values().next().value;n.Tu.delete(t);const e=new tt(bt.fromString(t)),r=n.Vu.next();n.Eu.set(r,new kv(e)),n.Iu=n.Iu.insert(e,r),mf(n.remoteStore,new Xe(be(Hh(e.path)),r,"TargetPurposeLimboResolution",gi.le))}}async function Cf(n,t,e){const r=ct(n),s=[],o=[],a=[];r.hu.isEmpty()||(r.hu.forEach((l,c)=>{a.push(r.fu(c,t,e).then(f=>{var d;if((f||e)&&r.isPrimaryClient){const g=f?!f.fromCache:(d=e?.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,g?"current":"not-current")}if(f){s.push(f);const g=Ra.Rs(c.targetId,f);o.push(g)}}))}),await Promise.all(a),r.lu.Y_(s),await async function(c,f){const d=ct(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>V.forEach(f,E=>V.forEach(E.ds,R=>d.persistence.referenceDelegate.addReference(g,E.targetId,R)).next(()=>V.forEach(E.As,R=>d.persistence.referenceDelegate.removeReference(g,E.targetId,R)))))}catch(g){if(!lr(g))throw g;H(Sa,"Failed to update sequence numbers: "+g)}for(const g of f){const E=g.targetId;if(!g.fromCache){const R=d.xs.get(E),O=R.snapshotVersion,B=R.withLastLimboFreeSnapshotVersion(O);d.xs=d.xs.insert(E,B)}}}(r.localStore,o))}async function zv(n,t){const e=ct(n);if(!e.currentUser.isEqual(t)){H(Ma,"User change. New user:",t.toKey());const r=await ff(e.localStore,t);e.currentUser=t,function(o,a){o.Ru.forEach(l=>{l.forEach(c=>{c.reject(new J($.CANCELLED,a))})}),o.Ru.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Cf(e,r.ks)}}function Kv(n,t){const e=ct(n),r=e.Eu.get(t);if(r&&r.cu)return ht().add(r.key);{let s=ht();const o=e.Pu.get(t);if(!o)return s;for(const a of o){const l=e.hu.get(a);s=s.unionWith(l.view.eu)}return s}}function bf(n){const t=ct(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=wf.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Kv.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=qv.bind(null,t),t.lu.Y_=xv.bind(null,t.eventManager),t.lu.gu=Dv.bind(null,t.eventManager),t}class ri{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=pf(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Su(t),await this.persistence.start(),this.localStore=this.Du(t),this.gcScheduler=this.vu(t,this.localStore),this.indexBackfillerScheduler=this.Cu(t,this.localStore)}vu(t,e){return null}Cu(t,e){return null}Du(t){return iv(this.persistence,new nv,t.initialUser,this.serializer)}Su(t){return new hf(ba.fi,this.serializer)}bu(t){return new cv}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ri.provider={build:()=>new ri};class Gv extends ri{constructor(t){super(),this.cacheSizeBytes=t}vu(t,e){wt(this.persistence.referenceDelegate instanceof ni,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new jy(r,t.asyncQueue,e)}Su(t){const e=this.cacheSizeBytes!==void 0?ie.withCacheSize(this.cacheSizeBytes):ie.DEFAULT;return new hf(r=>ni.fi(r,e),this.serializer)}}class Ko{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>tc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=zv.bind(null,this.syncEngine),await bv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Sv}()}createDatastore(t){const e=pf(t.databaseInfo.databaseId),r=function(o){return new gv(o)}(t.databaseInfo);return function(o,a,l,c){return new vv(o,a,l,c)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,l){return new Tv(r,s,o,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>tc(this.syncEngine,e,0),function(){return Gu.C()?new Gu:new hv}())}createSyncEngine(t,e){return function(s,o,a,l,c,f,d){const g=new Lv(s,o,a,l,c,f);return d&&(g.mu=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=ct(s);H(sr,"RemoteStore shutting down."),o.da.add(5),await is(o),o.Ra.shutdown(),o.Va.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Ko.provider={build:()=>new Ko};/**
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
 */class Wv{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Mu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Mu(this.observer.error,t):Ue("Uncaught Error in snapshot listener:",t.toString()))}xu(){this.muted=!0}Mu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */const cn="FirestoreClient";class Qv{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=Wt.UNAUTHENTICATED,this.clientId=E_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{H(cn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(H(cn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Rn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=vf(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function co(n,t){n.asyncQueue.verifyOperationInProgress(),H(cn,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await ff(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function nc(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Yv(n);H(cn,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Yu(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Yu(t.remoteStore,s)),n._onlineComponents=t}async function Yv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){H(cn,"Using user provided OfflineComponentProvider");try{await co(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===$.FAILED_PRECONDITION||s.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Zn("Error using user provided cache. Falling back to memory cache: "+e),await co(n,new ri)}}else H(cn,"Using default OfflineComponentProvider"),await co(n,new Gv(void 0));return n._offlineComponents}async function Xv(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(H(cn,"Using user provided OnlineComponentProvider"),await nc(n,n._uninitializedComponentsProvider._online)):(H(cn,"Using default OnlineComponentProvider"),await nc(n,new Ko))),n._onlineComponents}async function Jv(n){const t=await Xv(n),e=t.eventManager;return e.onListen=Fv.bind(null,t.syncEngine),e.onUnlisten=jv.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Bv.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=$v.bind(null,t.syncEngine),e}function Zv(n,t,e={}){const r=new Rn;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,c,f){const d=new Wv({next:E=>{d.xu(),a.enqueueAndForget(()=>Vv(o,g)),E.fromCache&&c.source==="server"?f.reject(new J($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(E)},error:E=>f.reject(E)}),g=new Nv(l,d,{includeMetadataChanges:!0,Qa:!0});return Pv(o,g)}(await Jv(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function Rf(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const rc=new Map;function tE(n,t,e,r){if(t===!0&&r===!0)throw new J($.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function sc(n){if(tt.isDocumentKey(n))throw new J($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function eE(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":rt(12329,{type:typeof n})}function Go(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new J($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=eE(n);throw new J($.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */const Sf="firestore.googleapis.com",ic=!0;class oc{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new J($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Sf,this.ssl=ic}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:ic;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=cf;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<By)throw new J($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}tE("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Rf((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new J($.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new J($.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new J($.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class La{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new J($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oc(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new d_;switch(r.type){case"firstParty":return new __(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=rc.get(e);r&&(H("ComponentProvider","Removing Datastore"),rc.delete(e),r.terminate())}(this),Promise.resolve()}}function nE(n,t,e,r={}){var s;n=Go(n,La);const o=ga(t),a=n._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),c=`${t}:${e}`;o&&(Bg(`https://${c}`),qg("Firestore",!0)),a.host!==Sf&&a.host!==c&&Zn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},a),{host:c,ssl:o,emulatorOptions:r});if(!Ws(f,l)&&(n._setSettings(f),r.mockUserToken)){let d,g;if(typeof r.mockUserToken=="string")d=r.mockUserToken,g=Wt.MOCK_USER;else{d=Ug(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new J($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Wt(E)}n._authCredentials=new p_(new Vh(d,g))}}/**
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
 */class Ci{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ci(this.firestore,t,this._query)}}class cr{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new cr(this.firestore,t,this._key)}}class Yn extends Ci{constructor(t,e,r){super(t,e,Hh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new cr(this.firestore,null,new tt(t))}withConverter(t){return new Yn(this.firestore,t,this._path)}}function rE(n,t,...e){if(n=Jg(n),n instanceof La){const r=bt.fromString(t,...e);return sc(r),new Yn(n,null,r)}{if(!(n instanceof cr||n instanceof Yn))throw new J($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(bt.fromString(t,...e));return sc(r),new Yn(n.firestore,null,r)}}/**
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
 */const ac="AsyncQueue";class lc{constructor(t=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new gf(this,"async_queue_retry"),this.rc=()=>{const r=uo();r&&H(ac,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=t;const e=uo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.oc(),this._c(t)}enterRestrictedMode(t){if(!this.Yu){this.Yu=!0,this.tc=t||!1;const e=uo();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.rc)}}enqueue(t){if(this.oc(),this.Yu)return new Promise(()=>{});const e=new Rn;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ju.push(t),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(t){if(!lr(t))throw t;H(ac,"Operation failed with retryable error: "+t)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(t){const e=this.sc.then(()=>(this.ec=!0,t().catch(r=>{throw this.Xu=r,this.ec=!1,Ue("INTERNAL UNHANDLED ERROR: ",uc(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=e,e}enqueueAfterDelay(t,e,r){this.oc(),this.nc.indexOf(t)>-1&&(e=0);const s=Na.createAndSchedule(this,t,e,r,o=>this.uc(o));return this.Zu.push(s),s}oc(){this.Xu&&rt(47125,{cc:uc(this.Xu)})}verifyOperationInProgress(){}async lc(){let t;do t=this.sc,await t;while(t!==this.sc)}hc(t){for(const e of this.Zu)if(e.timerId===t)return!0;return!1}Pc(t){return this.lc().then(()=>{this.Zu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Zu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.lc()})}Tc(t){this.nc.push(t)}uc(t){const e=this.Zu.indexOf(t);this.Zu.splice(e,1)}}function uc(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class Pf extends La{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new lc,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new lc(t),this._firestoreClient=void 0,await t}}}function sE(n,t){const e=typeof n=="object"?n:t_(),r=typeof n=="string"?n:Xs,s=Qm(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Lg("firestore");o&&nE(s,...o)}return s}function iE(n){if(n._terminated)throw new J($.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||oE(n),n._firestoreClient}function oE(n){var t,e,r;const s=n._freezeSettings(),o=function(l,c,f,d){return new O_(l,c,f,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Rf(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Qv(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(l){const c=l?._online.build();return{_offline:l?._offline.build(c),_online:c}}(n._componentsProvider))}/**
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
 */class si{constructor(t){this._byteString=t}static fromBase64String(t){try{return new si(qt.fromBase64String(t))}catch(e){throw new J($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new si(qt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Vf{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new J($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ne(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class aE{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new J($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new J($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ot(this._lat,t._lat)||ot(this._long,t._long)}}/**
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
 */class lE{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}const uE=new RegExp("[~\\*/\\[\\]]");function cE(n,t,e){if(t.search(uE)>=0)throw cc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new Vf(...t.split("."))._internalPath}catch{throw cc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function cc(n,t,e,r,s){let o=`Function ${t}() called with invalid data`;o+=". ";let a="";return new J($.INVALID_ARGUMENT,o+n+a)}/**
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
 */class xf{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new cr(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new hE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Df("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class hE extends xf{data(){return super.data()}}function Df(n,t){return typeof t=="string"?cE(n,t):t instanceof Vf?t._internalPath:t._delegate._internalPath}/**
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
 */function fE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new J($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dE{convertValue(t,e="none"){switch(ln(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Rt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(an(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw rt(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return rs(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e[Do].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Rt(a.doubleValue));return new lE(o)}convertGeoPoint(t){return new aE(Rt(t.latitude),Rt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=_i(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Jr(t));default:return null}}convertTimestamp(t){const e=on(t);return new oe(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=bt.fromString(t);wt(uf(r),9688,{name:t});const s=new Zr(r.get(1),r.get(3)),o=new tt(r.popFirst(5));return s.isEqual(e)||Ue(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */class Ds{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class pE extends xf{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Us(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Df("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Us extends pE{data(t={}){return super.data(t)}}class gE{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Ds(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Us(this._firestore,this._userDataWriter,r.key,r,new Ds(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new J($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new Us(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ds(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const c=new Us(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ds(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,d=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:mE(l.type),doc:c,oldIndex:f,newIndex:d}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function mE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return rt(61501,{type:n})}}class _E extends dE{constructor(t){super(),this.firestore=t}convertBytes(t){return new si(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new cr(this.firestore,null,e)}}function yE(n){n=Go(n,Ci);const t=Go(n.firestore,Pf),e=iE(t),r=new _E(t);return fE(n._query),Zv(e,n._query).then(s=>new gE(t,r,n,s))}(function(t,e=!0){(function(s){ar=s})(Zm),Ys(new Qr("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new Pf(new g_(r.getProvider("auth-internal")),new y_(a,r.getProvider("app-check-internal")),function(f,d){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new J($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zr(f.options.projectId,d)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),Gn(pu,gu,t),Gn(pu,gu,"esm2017")})();const vE={apiKey:"AIzaSyCIixBxZMeffhSFSQ1F58MWRjJAfUppxPU",authDomain:"produtos-app-752e0.firebaseapp.com",projectId:"produtos-app-752e0",storageBucket:"produtos-app-752e0.firebasestorage.app",messagingSenderId:"993467425859",appId:"1:993467425859:web:46fa757f05bdd51dfe20f6"},EE=Eh(vE),TE=sE(EE),IE={style:{display:"flex","flex-wrap":"wrap",gap:"20px"}},wE=["src"],AE={__name:"App",setup(n){const t=kd([]);return qc(async()=>{(await yE(rE(TE,"produtos"))).forEach(r=>{t.value.push(r.data())})}),(e,r)=>(Ji(),Zi(me,null,[r[0]||(r[0]=wn("h1",null,"Produtos",-1)),wn("div",IE,[(Ji(!0),Zi(me,null,cp(t.value,(s,o)=>(Ji(),Zi("div",{key:o,style:{border:"1px solid #ccc",padding:"10px",width:"200px"}},[wn("img",{src:s.imagem_url,alt:"Imagem",style:{width:"100%",height:"auto"}},null,8,wE),wn("h3",null,fo(s.titulo),1),wn("p",null,fo(s.descricao),1)]))),128))])],64))}};Ag(AE).mount("#app");
